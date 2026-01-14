(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [200],
  {
    11323: function (t, e, r) {
      "use strict";
      (function (e, n) {
        var i = t.exports;
        ((i.version = "v" + r(11324).version),
          (e._bitcore = i.version),
          (i.crypto = {}),
          (i.crypto.BN = r(3087)),
          (i.crypto.ECDSA = r(6901)),
          (i.crypto.Hash = r(3126)),
          (i.crypto.Random = r(4871)),
          (i.crypto.Point = r(3970)),
          (i.crypto.Signature = r(3359)),
          (i.encoding = {}),
          (i.encoding.Base58 = r(4869)),
          (i.encoding.Base58Check = r(4586)),
          (i.encoding.BufferReader = r(3619)),
          (i.encoding.BufferWriter = r(3404)),
          (i.encoding.Varint = r(11351)),
          (i.util = {}),
          (i.util.buffer = r(2941)),
          (i.util.js = r(3036)),
          (i.util.preconditions = r(2912)),
          (i.errors = r(3358)),
          (i.Address = r(3849)),
          (i.Block = r(11352)),
          (i.MerkleBlock = r(6905)),
          (i.BlockHeader = r(4872)),
          (i.HDPrivateKey = r(6906)),
          (i.HDPublicKey = r(6907)),
          (i.Networks = r(3848)),
          (i.Opcode = r(5706)),
          (i.PrivateKey = r(4868)),
          (i.PublicKey = r(3403)),
          (i.Script = r(3360)),
          (i.Transaction = r(4870)),
          (i.URI = r(11354)),
          (i.Unit = r(5709)),
          (i.deps = {}),
          (i.deps.bnjs = r(3467)),
          (i.deps.bs58 = r(234)),
          (i.deps.Buffer = n),
          (i.deps.elliptic = r(3402)),
          (i.deps._ = r(2896)),
          (i._HDKeyCache = r(5710)),
          (i.Transaction.sighash = r(3620)));
      }).call(this, r(13), r(2).Buffer);
    },
    11325: function (t, e, r) {
      "use strict";
      var n = "http://bitcore.io/";
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
              (arguments[1] ? " Documentation: " + n + arguments[1] : "")
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
            { name: "InvalidSatoshis", message: "Output atoms are invalid" },
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
    11345: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(6903),
          s = r(5706),
          o = r(3087),
          u = r(3126),
          a = r(3359),
          h = r(3403),
          c = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e ? (this.initialize(), this.set(e)) : this.initialize();
          };
        ((c.prototype.verify = function (t, e, s, o, u) {
          var a,
            h = r(4870);
          if (
            (n.isUndefined(s) && (s = new h()),
            n.isUndefined(o) && (o = 0),
            n.isUndefined(u) && (u = 0),
            this.set({ script: t, tx: s, nin: o, flags: u }),
            0 !== (u & c.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly())
          )
            return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
          if (!this.evaluate()) return !1;
          u & c.SCRIPT_VERIFY_P2SH && (a = this.stack.slice());
          var f = this.stack;
          if (
            (this.initialize(),
            this.set({ script: e, stack: f, tx: s, nin: o, flags: u }),
            !this.evaluate())
          )
            return !1;
          if (0 === this.stack.length)
            return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT"), !1);
          var p = this.stack[this.stack.length - 1];
          if (!c.castToBool(p))
            return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK"), !1);
          if (u & c.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
            if (!t.isPushOnly())
              return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
            if (0 === a.length)
              throw new Error("internal error - stack copy empty");
            var d = a[a.length - 1],
              l = i.fromBuffer(d);
            return (
              a.pop(),
              this.initialize(),
              this.set({ script: l, stack: a, tx: s, nin: o, flags: u }),
              !!this.evaluate() &&
                (0 === a.length
                  ? ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK"), !1)
                  : !!c.castToBool(a[a.length - 1]) ||
                    ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK"), !1))
            );
          }
          return !0;
        }),
          (t.exports = c),
          (c.prototype.initialize = function (t) {
            ((this.stack = []),
              (this.altstack = []),
              (this.pc = 0),
              (this.pbegincodehash = 0),
              (this.nOpCount = 0),
              (this.vfExec = []),
              (this.errstr = ""),
              (this.flags = 0));
          }),
          (c.prototype.set = function (t) {
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
              (this.nOpCount =
                "undefined" !== typeof t.nOpCount ? t.nOpCount : this.nOpCount),
              (this.vfExec = t.vfExec || this.vfExec),
              (this.errstr = t.errstr || this.errstr),
              (this.flags =
                "undefined" !== typeof t.flags ? t.flags : this.flags));
          }),
          (c.true = new e([1])),
          (c.false = new e([])),
          (c.MAX_SCRIPT_ELEMENT_SIZE = 520),
          (c.LOCKTIME_THRESHOLD = 5e8),
          (c.LOCKTIME_THRESHOLD_BN = new o(c.LOCKTIME_THRESHOLD)),
          (c.SCRIPT_VERIFY_NONE = 0),
          (c.SCRIPT_VERIFY_P2SH = 1),
          (c.SCRIPT_VERIFY_STRICTENC = 2),
          (c.SCRIPT_VERIFY_DERSIG = 4),
          (c.SCRIPT_VERIFY_LOW_S = 8),
          (c.SCRIPT_VERIFY_NULLDUMMY = 16),
          (c.SCRIPT_VERIFY_SIGPUSHONLY = 32),
          (c.SCRIPT_VERIFY_MINIMALDATA = 64),
          (c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128),
          (c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512),
          (c.castToBool = function (t) {
            for (var e = 0; e < t.length; e++)
              if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
            return !1;
          }),
          (c.prototype.checkSignatureEncoding = function (t) {
            var e;
            if (
              0 !==
                (this.flags &
                  (c.SCRIPT_VERIFY_DERSIG |
                    c.SCRIPT_VERIFY_LOW_S |
                    c.SCRIPT_VERIFY_STRICTENC)) &&
              !a.isTxDER(t)
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT"), !1);
            if (0 !== (this.flags & c.SCRIPT_VERIFY_LOW_S)) {
              if (((e = a.fromTxFormat(t)), !e.hasLowS()))
                return ((this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S"), !1);
            } else if (
              0 !== (this.flags & c.SCRIPT_VERIFY_STRICTENC) &&
              ((e = a.fromTxFormat(t)), !e.hasDefinedHashtype())
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_HASHTYPE"), !1);
            return !0;
          }),
          (c.prototype.checkPubkeyEncoding = function (t) {
            return (
              !(
                0 !== (this.flags & c.SCRIPT_VERIFY_STRICTENC) && !h.isValid(t)
              ) || ((this.errstr = "SCRIPT_ERR_PUBKEYTYPE"), !1)
            );
          }),
          (c.prototype.evaluate = function () {
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
          (c.prototype.checkLockTime = function (t) {
            return (
              !!(
                (this.tx.nLockTime < c.LOCKTIME_THRESHOLD &&
                  t.lt(c.LOCKTIME_THRESHOLD_BN)) ||
                (this.tx.nLockTime >= c.LOCKTIME_THRESHOLD &&
                  t.gte(c.LOCKTIME_THRESHOLD_BN))
              ) &&
              !t.gt(new o(this.tx.nLockTime)) &&
              !!this.tx.inputs[this.nin].isFinal()
            );
          }),
          (c.prototype.step = function () {
            var t,
              e,
              r,
              f,
              p,
              d,
              l,
              g,
              m,
              _,
              y,
              S,
              b,
              v,
              I,
              k,
              P,
              O = 0 !== (this.flags & c.SCRIPT_VERIFY_MINIMALDATA),
              w = -1 === this.vfExec.indexOf(!1),
              E = this.script.chunks[this.pc];
            this.pc++;
            var A = E.opcodenum;
            if (n.isUndefined(A))
              return ((this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE"), !1);
            if (E.buf && E.buf.length > c.MAX_SCRIPT_ELEMENT_SIZE)
              return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
            if (A > s.OP_16 && ++this.nOpCount > 201)
              return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
            if (w && 0 <= A && A <= s.OP_PUSHDATA4) {
              if (O && !this.script.checkMinimalPush(this.pc - 1))
                return ((this.errstr = "SCRIPT_ERR_MINIMALDATA"), !1);
              if (E.buf) {
                if (E.len !== E.buf.length)
                  throw new Error(
                    "Length of push value not equal to length of data",
                  );
                this.stack.push(E.buf);
              } else this.stack.push(c.false);
            } else if (w || (s.OP_IF <= A && A <= s.OP_ENDIF))
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
                  if (!(this.flags & c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                    if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
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
                    O,
                    5,
                  );
                  if (B.lt(new o(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (!this.checkLockTime(B))
                    return (
                      (this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME"),
                      !1
                    );
                  break;
                case s.OP_NOP1:
                case s.OP_NOP3:
                case s.OP_NOP4:
                case s.OP_NOP5:
                case s.OP_NOP6:
                case s.OP_NOP7:
                case s.OP_NOP8:
                case s.OP_NOP9:
                case s.OP_NOP10:
                  if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                    return (
                      (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                      !1
                    );
                  break;
                case s.OP_IF:
                case s.OP_NOTIF:
                  if (((k = !1), w)) {
                    if (this.stack.length < 1)
                      return (
                        (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                        !1
                      );
                    ((t = this.stack.pop()),
                      (k = c.castToBool(t)),
                      A === s.OP_NOTIF && (k = !k));
                  }
                  this.vfExec.push(k);
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
                    (k = c.castToBool(t)),
                    !k)
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
                  var T = this.stack[this.stack.length - 1];
                  (this.stack.push(e), this.stack.push(r), this.stack.push(T));
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
                  ((f = this.stack.splice(this.stack.length - 6, 2)),
                    this.stack.push(f[0]),
                    this.stack.push(f[1]));
                  break;
                case s.OP_2SWAP:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((f = this.stack.splice(this.stack.length - 4, 2)),
                    this.stack.push(f[0]),
                    this.stack.push(f[1]));
                  break;
                case s.OP_IFDUP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((t = this.stack[this.stack.length - 1]),
                    (k = c.castToBool(t)),
                    k && this.stack.push(t));
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
                    (g = o.fromScriptNumBuffer(t, O)),
                    (p = g.toNumber()),
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
                  ((d = this.stack[this.stack.length - 3]),
                    (l = this.stack[this.stack.length - 2]));
                  var R = this.stack[this.stack.length - 1];
                  ((this.stack[this.stack.length - 3] = l),
                    (this.stack[this.stack.length - 2] = R),
                    (this.stack[this.stack.length - 1] = d));
                  break;
                case s.OP_SWAP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((d = this.stack[this.stack.length - 2]),
                    (l = this.stack[this.stack.length - 1]),
                    (this.stack[this.stack.length - 2] = l),
                    (this.stack[this.stack.length - 1] = d));
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
                  ((g = new o(this.stack[this.stack.length - 1].length)),
                    this.stack.push(g.toScriptNumBuffer()));
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
                  var x = e.toString("hex") === r.toString("hex");
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(x ? c.true : c.false),
                    A === s.OP_EQUALVERIFY)
                  ) {
                    if (!x)
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
                    (g = o.fromScriptNumBuffer(t, O)),
                    A)
                  ) {
                    case s.OP_1ADD:
                      g = g.add(o.One);
                      break;
                    case s.OP_1SUB:
                      g = g.sub(o.One);
                      break;
                    case s.OP_NEGATE:
                      g = g.neg();
                      break;
                    case s.OP_ABS:
                      g.cmp(o.Zero) < 0 && (g = g.neg());
                      break;
                    case s.OP_NOT:
                      g = new o((0 === g.cmp(o.Zero)) + 0);
                      break;
                    case s.OP_0NOTEQUAL:
                      g = new o((0 !== g.cmp(o.Zero)) + 0);
                      break;
                  }
                  (this.stack.pop(), this.stack.push(g.toScriptNumBuffer()));
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
                    ((m = o.fromScriptNumBuffer(
                      this.stack[this.stack.length - 2],
                      O,
                    )),
                    (_ = o.fromScriptNumBuffer(
                      this.stack[this.stack.length - 1],
                      O,
                    )),
                    (g = new o(0)),
                    A)
                  ) {
                    case s.OP_ADD:
                      g = m.add(_);
                      break;
                    case s.OP_SUB:
                      g = m.sub(_);
                      break;
                    case s.OP_BOOLAND:
                      g = new o(
                        (0 !== m.cmp(o.Zero) && 0 !== _.cmp(o.Zero)) + 0,
                      );
                      break;
                    case s.OP_BOOLOR:
                      g = new o(
                        (0 !== m.cmp(o.Zero) || 0 !== _.cmp(o.Zero)) + 0,
                      );
                      break;
                    case s.OP_NUMEQUAL:
                      g = new o((0 === m.cmp(_)) + 0);
                      break;
                    case s.OP_NUMEQUALVERIFY:
                      g = new o((0 === m.cmp(_)) + 0);
                      break;
                    case s.OP_NUMNOTEQUAL:
                      g = new o((0 !== m.cmp(_)) + 0);
                      break;
                    case s.OP_LESSTHAN:
                      g = new o((m.cmp(_) < 0) + 0);
                      break;
                    case s.OP_GREATERTHAN:
                      g = new o((m.cmp(_) > 0) + 0);
                      break;
                    case s.OP_LESSTHANOREQUAL:
                      g = new o((m.cmp(_) <= 0) + 0);
                      break;
                    case s.OP_GREATERTHANOREQUAL:
                      g = new o((m.cmp(_) >= 0) + 0);
                      break;
                    case s.OP_MIN:
                      g = m.cmp(_) < 0 ? m : _;
                      break;
                    case s.OP_MAX:
                      g = m.cmp(_) > 0 ? m : _;
                      break;
                  }
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(g.toScriptNumBuffer()),
                    A === s.OP_NUMEQUALVERIFY)
                  ) {
                    if (!c.castToBool(this.stack[this.stack.length - 1]))
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
                  ((m = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 3],
                    O,
                  )),
                    (_ = o.fromScriptNumBuffer(
                      this.stack[this.stack.length - 2],
                      O,
                    )));
                  var N = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    O,
                  );
                  ((k = _.cmp(m) <= 0 && m.cmp(N) < 0),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(k ? c.true : c.false));
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
                          ? (C = u.blake256(t))
                          : A === s.OP_HASH160
                            ? (C = u.blake256ripemd160(t))
                            : A === s.OP_HASH256 && (C = u.blake256(t)),
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
                  ((y = this.stack[this.stack.length - 2]),
                    (S = this.stack[this.stack.length - 1]),
                    (b = new i().set({
                      chunks: this.script.chunks.slice(this.pbegincodehash),
                    })));
                  var U = new i().add(y);
                  if (
                    (b.findAndDelete(U),
                    !this.checkSignatureEncoding(y) ||
                      !this.checkPubkeyEncoding(S))
                  )
                    return !1;
                  try {
                    ((v = a.fromTxFormat(y)),
                      (I = h.fromBuffer(S, !1)),
                      (P = this.tx.verifySignature(v, I, this.nin, b)));
                  } catch (z) {
                    P = !1;
                  }
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(P ? c.true : c.false),
                    A === s.OP_CHECKSIGVERIFY)
                  ) {
                    if (!P)
                      return ((this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case s.OP_CHECKMULTISIG:
                case s.OP_CHECKMULTISIGVERIFY:
                  var H = 1;
                  if (this.stack.length < H)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var K = o
                    .fromScriptNumBuffer(this.stack[this.stack.length - H], O)
                    .toNumber();
                  if (K < 0 || K > 20)
                    return ((this.errstr = "SCRIPT_ERR_PUBKEY_COUNT"), !1);
                  if (((this.nOpCount += K), this.nOpCount > 201))
                    return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
                  var L = ++H;
                  if (((H += K), this.stack.length < H))
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var F = o
                    .fromScriptNumBuffer(this.stack[this.stack.length - H], O)
                    .toNumber();
                  if (F < 0 || F > K)
                    return ((this.errstr = "SCRIPT_ERR_SIG_COUNT"), !1);
                  var D = ++H;
                  if (((H += F), this.stack.length < H))
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  b = new i().set({
                    chunks: this.script.chunks.slice(this.pbegincodehash),
                  });
                  for (var M = 0; M < F; M++)
                    ((y = this.stack[this.stack.length - D - M]),
                      b.findAndDelete(new i().add(y)));
                  P = !0;
                  while (P && F > 0) {
                    if (
                      ((y = this.stack[this.stack.length - D]),
                      (S = this.stack[this.stack.length - L]),
                      !this.checkSignatureEncoding(y) ||
                        !this.checkPubkeyEncoding(S))
                    )
                      return !1;
                    var V;
                    try {
                      ((v = a.fromTxFormat(y)),
                        (I = h.fromBuffer(S, !1)),
                        (V = this.tx.verifySignature(v, I, this.nin, b)));
                    } catch (z) {
                      V = !1;
                    }
                    (V && (D++, F--), L++, K--, F > K && (P = !1));
                  }
                  while (H-- > 1) this.stack.pop();
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    this.flags & c.SCRIPT_VERIFY_NULLDUMMY &&
                    this.stack[this.stack.length - 1].length
                  )
                    return ((this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.push(P ? c.true : c.false),
                    A === s.OP_CHECKMULTISIGVERIFY)
                  ) {
                    if (!P)
                      return (
                        (this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY"),
                        !1
                      );
                    this.stack.pop();
                  }
                  break;
                case s.OP_CAT:
                case s.OP_SUBSTR:
                case s.OP_LEFT:
                case s.OP_RIGHT:
                case s.OP_INVERT:
                case s.OP_AND:
                case s.OP_OR:
                case s.OP_XOR:
                case s.OP_2MUL:
                case s.OP_2DIV:
                case s.OP_MUL:
                case s.OP_DIV:
                case s.OP_MOD:
                case s.OP_LSHIFT:
                case s.OP_RSHIFT:
                  break;
                default:
                  return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
              }
            return !0;
          }));
      }).call(this, r(2).Buffer);
    },
    11346: function (t, e, r) {
      "use strict";
      var n = r(16),
        i = r(2912),
        s = (r(2941), r(4587)),
        o = r(3621),
        u = r(3620),
        a = r(3360),
        h = r(3359),
        c = r(4588);
      function f() {
        s.apply(this, arguments);
      }
      (n(f, s),
        (f.prototype.getSignatures = function (t, e, r, n) {
          (i.checkState(this.output instanceof o), (n = n || h.SIGHASH_ALL));
          var s = e.toPublicKey();
          return s.toString() ===
            this.output.script.getPublicKey().toString("hex")
            ? [
                new c({
                  publicKey: s,
                  prevTxId: this.prevTxId,
                  outputIndex: this.outputIndex,
                  inputIndex: r,
                  signature: u.sign(t, e, n, r, this.output.script),
                  sigtype: n,
                }),
              ]
            : [];
        }),
        (f.prototype.addSignature = function (t, e) {
          return (
            i.checkState(this.isValidSignature(t, e), "Signature is invalid"),
            this.setScript(a.buildPublicKeyIn(e.signature.toDER(), e.sigtype)),
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
    11347: function (t, e, r) {
      "use strict";
      var n = r(16),
        i = r(2912),
        s = r(2941),
        o = r(3126),
        u = r(4587),
        a = r(3621),
        h = r(3620),
        c = r(3360),
        f = r(3359),
        p = r(4588);
      function d() {
        u.apply(this, arguments);
      }
      (n(d, u),
        (d.prototype.getSignatures = function (t, e, r, n, u) {
          return (
            i.checkState(this.output instanceof a),
            (u = u || o.blake256ripemd160(e.publicKey.toBuffer())),
            (n = n || f.SIGHASH_ALL),
            s.equals(u, this.output.script.getPublicKeyHash())
              ? [
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: h.sign(t, e, n, r, this.output.script),
                    sigtype: n,
                  }),
                ]
              : []
          );
        }),
        (d.prototype.addSignature = function (t, e) {
          return (
            i.checkState(this.isValidSignature(t, e), "Signature is invalid"),
            this.setScript(
              c.buildPublicKeyHashIn(
                e.publicKey,
                e.signature.toDER(),
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
    11348: function (t, e, r) {
      "use strict";
      var n = r(2896),
        i = r(16),
        s = (r(5707), r(4587)),
        o = r(3621),
        u = r(2912),
        a = r(3360),
        h = r(3359),
        c = r(3620),
        f = (r(3403), r(2941)),
        p = r(4588);
      function d(t, e, r, i) {
        s.apply(this, arguments);
        var o = this;
        ((e = e || t.publicKeys),
          (r = r || t.threshold),
          (i = i || t.signatures),
          (this.publicKeys = n.sortBy(e, function (t) {
            return t.toString("hex");
          })),
          u.checkState(
            a.buildMultisigOut(this.publicKeys, r).equals(this.output.script),
            "Provided public keys don't match to the provided output script",
          ),
          (this.publicKeyIndex = {}),
          n.each(this.publicKeys, function (t, e) {
            o.publicKeyIndex[t.toString()] = e;
          }),
          (this.threshold = r),
          (this.signatures = i
            ? this._deserializeSignatures(i)
            : new Array(this.publicKeys.length)));
      }
      (i(d, s),
        (d.prototype.toObject = function () {
          var t = s.prototype.toObject.apply(this, arguments);
          return (
            (t.threshold = this.threshold),
            (t.publicKeys = n.map(this.publicKeys, function (t) {
              return t.toString();
            })),
            (t.signatures = this._serializeSignatures()),
            t
          );
        }),
        (d.prototype._deserializeSignatures = function (t) {
          return n.map(t, function (t) {
            if (t) return new p(t);
          });
        }),
        (d.prototype._serializeSignatures = function () {
          return n.map(this.signatures, function (t) {
            if (t) return t.toObject();
          });
        }),
        (d.prototype.getSignatures = function (t, e, r, i) {
          (u.checkState(this.output instanceof o), (i = i || h.SIGHASH_ALL));
          var s = this,
            a = [];
          return (
            n.each(this.publicKeys, function (n) {
              n.toString() === e.publicKey.toString() &&
                a.push(
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: s.prevTxId,
                    outputIndex: s.outputIndex,
                    inputIndex: r,
                    signature: c.sign(t, e, i, r, s.output.script),
                    sigtype: i,
                  }),
                );
            }),
            a
          );
        }),
        (d.prototype.addSignature = function (t, e) {
          return (
            u.checkState(
              !this.isFullySigned(),
              "All needed signatures have already been added",
            ),
            u.checkArgument(
              !n.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
              "Signature has no matching public key",
            ),
            u.checkState(this.isValidSignature(t, e)),
            (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e),
            this._updateScript(),
            this
          );
        }),
        (d.prototype._updateScript = function () {
          return (
            this.setScript(
              a.buildMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(),
              ),
            ),
            this
          );
        }),
        (d.prototype._createSignatures = function () {
          return n.map(
            n.filter(this.signatures, function (t) {
              return !n.isUndefined(t);
            }),
            function (t) {
              return f.concat([
                t.signature.toDER(),
                f.integerAsSingleByteBuffer(t.sigtype),
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
          return n.reduce(
            this.signatures,
            function (t, e) {
              return t + !!e;
            },
            0,
          );
        }),
        (d.prototype.publicKeysWithoutSignature = function () {
          var t = this;
          return n.filter(this.publicKeys, function (e) {
            return !t.signatures[t.publicKeyIndex[e.toString()]];
          });
        }),
        (d.prototype.isValidSignature = function (t, e) {
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
        (d.normalizeSignatures = function (t, e, r, n, i) {
          return i.map(function (i) {
            var s = null;
            return (
              (n = n.filter(function (n) {
                if (s) return !0;
                var o = new p({
                  signature: h.fromTxFormat(n),
                  publicKey: i,
                  prevTxId: e.prevTxId,
                  outputIndex: e.outputIndex,
                  inputIndex: r,
                  sigtype: h.SIGHASH_ALL,
                });
                o.signature.nhashtype = o.sigtype;
                var u = c.verify(
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
        (d.OPCODES_SIZE = 1),
        (d.SIGNATURE_SIZE = 73),
        (d.prototype._estimateSize = function () {
          return d.OPCODES_SIZE + this.threshold * d.SIGNATURE_SIZE;
        }),
        (t.exports = d));
    },
    11349: function (t, e, r) {
      "use strict";
      var n = r(2896),
        i = r(16),
        s = r(4587),
        o = r(3621),
        u = r(2912),
        a = r(3360),
        h = r(3359),
        c = r(3620),
        f = (r(3403), r(2941)),
        p = r(4588);
      function d(t, e, r, i) {
        s.apply(this, arguments);
        var o = this;
        ((e = e || t.publicKeys),
          (r = r || t.threshold),
          (i = i || t.signatures),
          (this.publicKeys = n.sortBy(e, function (t) {
            return t.toString("hex");
          })),
          (this.redeemScript = a.buildMultisigOut(this.publicKeys, r)),
          u.checkState(
            a.buildScriptHashOut(this.redeemScript).equals(this.output.script),
            "Provided public keys don't hash to the provided output",
          ),
          (this.publicKeyIndex = {}),
          n.each(this.publicKeys, function (t, e) {
            o.publicKeyIndex[t.toString()] = e;
          }),
          (this.threshold = r),
          (this.signatures = i
            ? this._deserializeSignatures(i)
            : new Array(this.publicKeys.length)));
      }
      (i(d, s),
        (d.prototype.toObject = function () {
          var t = s.prototype.toObject.apply(this, arguments);
          return (
            (t.threshold = this.threshold),
            (t.publicKeys = n.map(this.publicKeys, function (t) {
              return t.toString();
            })),
            (t.signatures = this._serializeSignatures()),
            t
          );
        }),
        (d.prototype._deserializeSignatures = function (t) {
          return n.map(t, function (t) {
            if (t) return new p(t);
          });
        }),
        (d.prototype._serializeSignatures = function () {
          return n.map(this.signatures, function (t) {
            if (t) return t.toObject();
          });
        }),
        (d.prototype.getSignatures = function (t, e, r, i) {
          (u.checkState(this.output instanceof o), (i = i || h.SIGHASH_ALL));
          var s = this,
            a = [];
          return (
            n.each(this.publicKeys, function (n) {
              n.toString() === e.publicKey.toString() &&
                a.push(
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: s.prevTxId,
                    outputIndex: s.outputIndex,
                    inputIndex: r,
                    signature: c.sign(t, e, i, r, s.redeemScript),
                    sigtype: i,
                  }),
                );
            }),
            a
          );
        }),
        (d.prototype.addSignature = function (t, e) {
          return (
            u.checkState(
              !this.isFullySigned(),
              "All needed signatures have already been added",
            ),
            u.checkArgument(
              !n.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
              "Signature has no matching public key",
            ),
            u.checkState(this.isValidSignature(t, e)),
            (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e),
            this._updateScript(),
            this
          );
        }),
        (d.prototype._updateScript = function () {
          return (
            this.setScript(
              a.buildP2SHMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(),
                { cachedMultisig: this.redeemScript },
              ),
            ),
            this
          );
        }),
        (d.prototype._createSignatures = function () {
          return n.map(
            n.filter(this.signatures, function (t) {
              return !n.isUndefined(t);
            }),
            function (t) {
              return f.concat([
                t.signature.toDER(),
                f.integerAsSingleByteBuffer(t.sigtype),
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
          return n.reduce(
            this.signatures,
            function (t, e) {
              return t + !!e;
            },
            0,
          );
        }),
        (d.prototype.publicKeysWithoutSignature = function () {
          var t = this;
          return n.filter(this.publicKeys, function (e) {
            return !t.signatures[t.publicKeyIndex[e.toString()]];
          });
        }),
        (d.prototype.isValidSignature = function (t, e) {
          return (
            (e.signature.nhashtype = e.sigtype),
            c.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.redeemScript,
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
    11351: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3404),
          i = r(3619),
          s = r(3087),
          o = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (e.isBuffer(r)) this.buf = r;
            else if ("number" === typeof r) {
              var n = r;
              this.fromNumber(n);
            } else if (r instanceof s) {
              var i = r;
              this.fromBN(i);
            } else if (r) {
              var o = r;
              this.set(o);
            }
          };
        ((o.prototype.set = function (t) {
          return ((this.buf = t.buf || this.buf), this);
        }),
          (o.prototype.fromString = function (t) {
            return (this.set({ buf: new e(t, "hex") }), this);
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
            return ((this.buf = n().writeVarintBN(t).concat()), this);
          }),
          (o.prototype.fromNumber = function (t) {
            return ((this.buf = n().writeVarintNum(t).concat()), this);
          }),
          (o.prototype.toBuffer = function () {
            return this.buf;
          }),
          (o.prototype.toBN = function () {
            return i(this.buf).readVarintBN();
          }),
          (o.prototype.toNumber = function () {
            return i(this.buf).readVarintNum();
          }),
          (t.exports = o));
      }).call(this, r(2).Buffer);
    },
    11352: function (t, e, r) {
      ((t.exports = r(11353)),
        (t.exports.BlockHeader = r(4872)),
        (t.exports.MerkleBlock = r(6905)));
    },
    11353: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(4872),
          s = r(3087),
          o = r(2941),
          u = r(3619),
          a = r(3404),
          h = r(3126),
          c = r(4870),
          f = r(2912);
        function Block(t) {
          return this instanceof Block
            ? (n.extend(this, Block._from(t)), this)
            : new Block(t);
        }
        ((Block.MAX_BLOCK_SIZE = 1e6),
          (Block._from = function (t) {
            var e = {};
            if (o.isBuffer(t)) e = Block._fromBufferReader(u(t));
            else {
              if (!n.isObject(t))
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
            var r = { header: i.fromObject(t.header), transactions: e };
            return r;
          }),
          (Block.fromObject = function (t) {
            var e = Block._fromObject(t);
            return new Block(e);
          }),
          (Block._fromBufferReader = function (t) {
            var e = {};
            (f.checkState(!t.finished(), "No block data received"),
              (e.header = i.fromBufferReader(t)));
            var r = t.readVarintNum();
            e.transactions = [];
            for (var n = 0; n < r; n++)
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
            var r = new e(t, "hex");
            return Block.fromBuffer(r);
          }),
          (Block.fromRawBlock = function (t) {
            o.isBuffer(t) || (t = new e(t, "binary"));
            var r = u(t);
            r.pos = Block.Values.START_OF_BLOCK;
            var n = Block._fromBufferReader(r);
            return new Block(n);
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
                n = this.transactions.length;
              n > 1;
              n = Math.floor((n + 1) / 2)
            ) {
              for (var i = 0; i < n; i += 2) {
                var s = Math.min(i + 1, n - 1),
                  o = e.concat([t[r + i], t[r + s]]);
                t.push(h.blake256(o));
              }
              r += n;
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
          set: n.noop,
        };
        (Object.defineProperty(Block.prototype, "id", p),
          Object.defineProperty(Block.prototype, "hash", p),
          (Block.prototype.inspect = function () {
            return "<Block " + this.id + ">";
          }),
          (Block.Values = {
            START_OF_BLOCK: 8,
            NULL_HASH: new e(
              "0000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (t.exports = Block));
      }).call(this, r(2).Buffer);
    },
    3087: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3467),
          i = r(2912),
          s = r(2896),
          o = function (t) {
            for (var r = new e(t.length), n = 0; n < t.length; n++)
              r[n] = t[t.length - 1 - n];
            return r;
          };
        ((n.Zero = new n(0)),
          (n.One = new n(1)),
          (n.Minus1 = new n(-1)),
          (n.fromNumber = function (t) {
            return (i.checkArgument(s.isNumber(t)), new n(t));
          }),
          (n.fromString = function (t, e) {
            return (i.checkArgument(s.isString(t)), new n(t, e));
          }),
          (n.fromBuffer = function (t, e) {
            "undefined" !== typeof e && "little" === e.endian && (t = o(t));
            var r = t.toString("hex"),
              i = new n(r, 16);
            return i;
          }),
          (n.fromSM = function (t, r) {
            var i;
            if (0 === t.length) return n.fromBuffer(new e([0]));
            var s = "big";
            return (
              r && (s = r.endian),
              "little" === s && (t = o(t)),
              128 & t[0]
                ? ((t[0] = 127 & t[0]), (i = n.fromBuffer(t)), i.neg().copy(i))
                : (i = n.fromBuffer(t)),
              i
            );
          }),
          (n.prototype.toNumber = function () {
            return parseInt(this.toString(10), 10);
          }),
          (n.prototype.toBuffer = function (t) {
            var r, i;
            if (t && t.size) {
              i = this.toString(16, 2);
              var s = i.length / 2;
              ((r = new e(i, "hex")),
                s === t.size
                  ? (r = r)
                  : s > t.size
                    ? (r = n.trim(r, s))
                    : s < t.size && (r = n.pad(r, s, t.size)));
            } else ((i = this.toString(16, 2)), (r = new e(i, "hex")));
            return (
              "undefined" !== typeof t && "little" === t.endian && (r = o(r)),
              r
            );
          }),
          (n.prototype.toSMBigEndian = function () {
            var t;
            return (
              -1 === this.cmp(n.Zero)
                ? ((t = this.neg().toBuffer()),
                  128 & t[0]
                    ? (t = e.concat([new e([128]), t]))
                    : (t[0] = 128 | t[0]))
                : ((t = this.toBuffer()),
                  128 & t[0] && (t = e.concat([new e([0]), t]))),
              (1 === t.length) & (0 === t[0]) && (t = new e([])),
              t
            );
          }),
          (n.prototype.toSM = function (t) {
            var e = t ? t.endian : "big",
              r = this.toSMBigEndian();
            return ("little" === e && (r = o(r)), r);
          }),
          (n.fromScriptNumBuffer = function (t, e, r) {
            var s = r || 4;
            if (
              (i.checkArgument(
                t.length <= s,
                new Error("script number overflow"),
              ),
              e &&
                t.length > 0 &&
                0 === (127 & t[t.length - 1]) &&
                (t.length <= 1 || 0 === (128 & t[t.length - 2])))
            )
              throw new Error("non-minimally encoded script number");
            return n.fromSM(t, { endian: "little" });
          }),
          (n.prototype.toScriptNumBuffer = function () {
            return this.toSM({ endian: "little" });
          }),
          (n.prototype.gt = function (t) {
            return this.cmp(t) > 0;
          }),
          (n.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (n.prototype.lt = function (t) {
            return this.cmp(t) < 0;
          }),
          (n.trim = function (t, e) {
            return t.slice(e - t.length, t.length);
          }),
          (n.pad = function (t, r, n) {
            for (var i = new e(n), s = 0; s < t.length; s++)
              i[i.length - 1 - s] = t[t.length - 1 - s];
            for (s = 0; s < n - r; s++) i[s] = 0;
            return i;
          }),
          (t.exports = n));
      }).call(this, r(2).Buffer);
    },
    3126: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2764),
          i = r(11338),
          s = r(2941),
          o = r(2912),
          u = t.exports;
        ((u.sha1 = function (t) {
          return (
            o.checkArgument(s.isBuffer(t)),
            n.createHash("sha1").update(t).digest()
          );
        }),
          (u.sha1.blocksize = 512),
          (u.sha256 = function (t) {
            return (
              o.checkArgument(s.isBuffer(t)),
              n.createHash("sha256").update(t).digest()
            );
          }),
          (u.sha256.blocksize = 512),
          (u.sha256sha256 = function (t) {
            return (o.checkArgument(s.isBuffer(t)), u.sha256(u.sha256(t)));
          }),
          (u.ripemd160 = function (t) {
            return (
              o.checkArgument(s.isBuffer(t)),
              n.createHash("ripemd160").update(t).digest()
            );
          }),
          (u.sha256ripemd160 = function (t) {
            return (o.checkArgument(s.isBuffer(t)), u.ripemd160(u.sha256(t)));
          }),
          (u.blake256ripemd160 = function (t) {
            return (o.checkArgument(s.isBuffer(t)), u.ripemd160(u.blake256(t)));
          }),
          (u.doubleblake256 = function (t) {
            return (o.checkArgument(s.isBuffer(t)), u.blake256(u.blake256(t)));
          }),
          (u.blake256 = function (t) {
            return (
              o.checkArgument(s.isBuffer(t)),
              i.createHash("blake256").update(t).digest()
            );
          }),
          (u.sha512 = function (t) {
            return (
              o.checkArgument(s.isBuffer(t)),
              n.createHash("sha512").update(t).digest()
            );
          }),
          (u.sha512.blocksize = 1024),
          (u.hmac = function (t, r, n) {
            (o.checkArgument(s.isBuffer(r)),
              o.checkArgument(s.isBuffer(n)),
              o.checkArgument(t.blocksize));
            var i = t.blocksize / 8;
            if (n.length > i) n = t(n);
            else if (n < i) {
              var u = new e(i);
              (u.fill(0), n.copy(u), (n = u));
            }
            var a = new e(i);
            a.fill(92);
            var h = new e(i);
            h.fill(54);
            for (var c = new e(i), f = new e(i), p = 0; p < i; p++)
              ((c[p] = a[p] ^ n[p]), (f[p] = h[p] ^ n[p]));
            return t(e.concat([c, t(e.concat([f, r]))]));
          }),
          (u.sha256hmac = function (t, e) {
            return u.hmac(u.sha256, t, e);
          }),
          (u.sha512hmac = function (t, e) {
            return u.hmac(u.sha512, t, e);
          }));
      }).call(this, r(2).Buffer);
    },
    3358: function (t, e, r) {
      "use strict";
      var n = r(2896);
      function i(t, e) {
        return t.replace("{0}", e[0]).replace("{1}", e[1]).replace("{2}", e[2]);
      }
      var s = function (t, e) {
          var r = function () {
            if (n.isString(e.message)) this.message = i(e.message, arguments);
            else {
              if (!n.isFunction(e.message))
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
          n.each(e, function (e) {
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
      var h = r(11325);
      (u(a.Error, h),
        (t.exports = a.Error),
        (t.exports.extend = function (t) {
          return s(a.Error, t);
        }));
    },
    3359: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3087),
          i = r(2896),
          s = r(2912),
          o = r(2941),
          u = r(3036),
          a = function t(e, r) {
            if (!(this instanceof t)) return new t(e, r);
            if (e instanceof n) this.set({ r: e, s: r });
            else if (e) {
              var i = e;
              this.set(i);
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
              i = t.slice(0, 1)[0] - 27 - 4;
            i < 0 && ((r = !1), (i += 4));
            var u = t.slice(1, 33),
              h = t.slice(33, 65);
            return (
              s.checkArgument(
                0 === i || 1 === i || 2 === i || 3 === i,
                new Error("i must be 0, 1, 2, or 3"),
              ),
              s.checkArgument(32 === u.length, new Error("r must be 32 bytes")),
              s.checkArgument(32 === h.length, new Error("s must be 32 bytes")),
              (e.compressed = r),
              (e.i = i),
              (e.r = n.fromBuffer(u)),
              (e.s = n.fromBuffer(h)),
              e
            );
          }),
          (a.fromDER = a.fromBuffer =
            function (t, e) {
              var r = a.parseDER(t, e),
                n = new a();
              return ((n.r = r.r), (n.s = r.s), n);
            }),
          (a.fromTxFormat = function (t) {
            var e = t.readUInt8(t.length - 1),
              r = t.slice(0, t.length - 1),
              n = new a.fromDER(r, !1);
            return ((n.nhashtype = e), n);
          }),
          (a.fromString = function (t) {
            var r = new e(t, "hex");
            return a.fromDER(r);
          }),
          (a.parseDER = function (t, e) {
            (s.checkArgument(
              o.isBuffer(t),
              new Error("DER formatted signature should be a buffer"),
            ),
              i.isUndefined(e) && (e = !0));
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
              p = n.fromBuffer(f),
              d = 0 === t[4];
            s.checkArgument(c === f.length, new Error("Length of r incorrect"));
            var l = t[4 + c + 0];
            s.checkArgument(
              2 === l,
              new Error("Integer byte for s should be 0x02"),
            );
            var g = t[4 + c + 1],
              m = t.slice(4 + c + 2, 4 + c + 2 + g),
              _ = n.fromBuffer(m),
              y = 0 === t[4 + c + 2 + 2];
            s.checkArgument(g === m.length, new Error("Length of s incorrect"));
            var S = 4 + c + 2 + g;
            s.checkArgument(
              u === S - 2,
              new Error("Length of signature incorrect"),
            );
            var b = {
              header: r,
              length: u,
              rheader: h,
              rlength: c,
              rneg: d,
              rbuf: f,
              r: p,
              sheader: l,
              slength: g,
              sneg: y,
              sbuf: m,
              s: _,
            };
            return b;
          }),
          (a.prototype.toCompact = function (t, r) {
            if (
              ((t = "number" === typeof t ? t : this.i),
              (r = "boolean" === typeof r ? r : this.compressed),
              0 !== t && 1 !== t && 2 !== t && 3 !== t)
            )
              throw new Error("i must be equal to 0, 1, 2, or 3");
            var n = t + 27 + 4;
            !1 === r && (n -= 4);
            var i = new e([n]),
              s = this.r.toBuffer({ size: 32 }),
              o = this.s.toBuffer({ size: 32 });
            return e.concat([i, s, o]);
          }),
          (a.prototype.toBuffer = a.prototype.toDER =
            function () {
              var t = this.r.toBuffer(),
                r = this.s.toBuffer(),
                n = !!(128 & t[0]),
                i = !!(128 & r[0]),
                s = n ? e.concat([new e([0]), t]) : t,
                o = i ? e.concat([new e([0]), r]) : r,
                u = s.length,
                a = o.length,
                h = 2 + u + 2 + a,
                c = 2,
                f = 2,
                p = 48,
                d = e.concat([new e([p, h, c, u]), s, new e([f, a]), o]);
              return d;
            }),
          (a.prototype.toString = function () {
            var t = this.toDER();
            return t.toString("hex");
          }),
          (a.isTxDER = function (t) {
            if (t.length < 9) return !1;
            if (t.length > 73) return !1;
            if (48 !== t[0]) return !1;
            if (t[1] !== t.length - 3) return !1;
            var e = t[3];
            if (5 + e >= t.length) return !1;
            var r = t[5 + e];
            if (e + r + 7 !== t.length) return !1;
            var n = t.slice(4);
            if (2 !== t[2]) return !1;
            if (0 === e) return !1;
            if (128 & n[0]) return !1;
            if (e > 1 && 0 === n[0] && !(128 & n[1])) return !1;
            var i = t.slice(6 + e);
            return (
              2 === t[6 + e - 2] &&
              0 !== r &&
              !(128 & i[0]) &&
              !(r > 1 && 0 === i[0] && !(128 & i[1]))
            );
          }),
          (a.prototype.hasLowS = function () {
            return (
              !this.s.lt(new n(1)) &&
              !this.s.gt(
                new n(
                  "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0",
                  "hex",
                ),
              )
            );
          }),
          (a.prototype.hasDefinedHashtype = function () {
            if (!u.isNaturalNumber(this.nhashtype)) return !1;
            var t = this.nhashtype & ~a.SIGHASH_ANYONECANPAY;
            return !(t < a.SIGHASH_ALL || t > a.SIGHASH_SINGLE);
          }),
          (a.prototype.toTxFormat = function () {
            var t = this.toDER(),
              r = new e(1);
            return (r.writeUInt8(this.nhashtype, 0), e.concat([t, r]));
          }),
          (a.SIGHASH_ALL = 1),
          (a.SIGHASH_NONE = 2),
          (a.SIGHASH_SINGLE = 3),
          (a.SIGHASH_ANYONECANPAY = 128),
          (t.exports = a));
      }).call(this, r(2).Buffer);
    },
    3360: function (t, e, r) {
      ((t.exports = r(6903)), (t.exports.Interpreter = r(11345)));
    },
    3403: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3087),
          Point = r(3970),
          i = r(3126),
          s = r(3036),
          o = r(3848),
          u = r(2896),
          a = r(2912);
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
          var n = { compressed: u.isUndefined(r.compressed) || r.compressed };
          if (t instanceof Point) n.point = t;
          else if (t.x && t.y) n = h._transformObject(t);
          else if ("string" === typeof t) n = h._transformDER(new e(t, "hex"));
          else if (h._isBuffer(t)) n = h._transformDER(t);
          else {
            if (!h._isPrivateKey(t))
              throw new TypeError(
                "First argument is an unrecognized data format.",
              );
            n = h._transformPrivateKey(t);
          }
          return (
            n.network ||
              (n.network = u.isUndefined(r.network)
                ? void 0
                : o.get(r.network)),
            n
          );
        }),
          (h._isPrivateKey = function (t) {
            var e = r(4868);
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
              i,
              s,
              o,
              c = {};
            if (
              ((e = !!u.isUndefined(e) || e),
              4 !== t[0] && (e || (6 !== t[0] && 7 !== t[0])))
            )
              if (3 === t[0])
                ((s = t.slice(1)),
                  (r = new n(s)),
                  (c = h._transformX(!0, r)),
                  (c.compressed = !0));
              else {
                if (2 !== t[0])
                  throw new TypeError("Invalid DER format public key");
                ((s = t.slice(1)),
                  (r = new n(s)),
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
              ((r = new n(s)),
                (i = new n(o)),
                (c.point = new Point(r, i)),
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
            var e = new n(t.x, "hex"),
              r = new n(t.y, "hex"),
              i = new Point(e, r);
            return new h(i, { compressed: t.compressed });
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
            var n = new e(t, r || "hex"),
              i = h._transformDER(n);
            return new h(i.point, { compressed: i.compressed });
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
                n = this.point.getY(),
                i = r.toBuffer({ size: 32 }),
                s = n.toBuffer({ size: 32 });
              if (this.compressed) {
                var o = s[s.length - 1] % 2;
                return ((t = new e(o ? [3] : [2])), e.concat([t, i]));
              }
              return ((t = new e([4])), e.concat([t, i, s]));
            }),
          (h.prototype._getID = function () {
            return i.blake256ripemd160(this.toBuffer());
          }),
          (h.prototype.toAddress = function (t) {
            var e = r(3849);
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
    3404: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2941),
          i = r(229),
          s = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e ? this.set(e) : (this.bufs = []);
          };
        ((s.prototype.set = function (t) {
          return ((this.bufs = t.bufs || this.bufs || []), this);
        }),
          (s.prototype.toBuffer = function () {
            return this.concat();
          }),
          (s.prototype.concat = function () {
            return e.concat(this.bufs);
          }),
          (s.prototype.write = function (t) {
            return (i(n.isBuffer(t)), this.bufs.push(t), this);
          }),
          (s.prototype.writeReverse = function (t) {
            return (i(n.isBuffer(t)), this.bufs.push(n.reverse(t)), this);
          }),
          (s.prototype.writeUInt8 = function (t) {
            var r = new e(1);
            return (r.writeUInt8(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt16BE = function (t) {
            var r = new e(2);
            return (r.writeUInt16BE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt16LE = function (t) {
            var r = new e(2);
            return (r.writeUInt16LE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt32BE = function (t) {
            var r = new e(4);
            return (r.writeUInt32BE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeInt32LE = function (t) {
            var r = new e(4);
            return (r.writeInt32LE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt32LE = function (t) {
            var r = new e(4);
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
                ? ((r = new e(1)), r.writeUInt8(t, 0))
                : t < 65536
                  ? ((r = new e(3)),
                    r.writeUInt8(253, 0),
                    r.writeUInt16LE(t, 1))
                  : t < 4294967296
                    ? ((r = new e(5)),
                      r.writeUInt8(254, 0),
                      r.writeUInt32LE(t, 1))
                    : ((r = new e(9)),
                      r.writeUInt8(255, 0),
                      r.writeInt32LE(-1 & t, 1),
                      r.writeUInt32LE(Math.floor(t / 4294967296), 5)),
              r
            );
          }),
          (s.varintBufBN = function (t) {
            var r = void 0,
              n = t.toNumber();
            if (n < 253) ((r = new e(1)), r.writeUInt8(n, 0));
            else if (n < 65536)
              ((r = new e(3)), r.writeUInt8(253, 0), r.writeUInt16LE(n, 1));
            else if (n < 4294967296)
              ((r = new e(5)), r.writeUInt8(254, 0), r.writeUInt32LE(n, 1));
            else {
              var i = new s();
              (i.writeUInt8(255), i.writeUInt64LEBN(t));
              r = i.concat();
            }
            return r;
          }),
          (t.exports = s));
      }).call(this, r(2).Buffer);
    },
    3619: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(2912),
          s = r(2941),
          o = r(3087),
          u = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (!n.isUndefined(r))
              if (e.isBuffer(r)) this.set({ buf: r });
              else if (n.isString(r)) this.set({ buf: new e(r, "hex") });
              else {
                if (!n.isObject(r))
                  throw new TypeError("Unrecognized argument for BufferReader");
                var i = r;
                this.set(i);
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
            i.checkArgument(!n.isUndefined(t), "Must specify a length");
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
          (u.prototype.readUInt64BEBN = function () {
            var t = this.buf.slice(this.pos, this.pos + 8),
              e = o.fromBuffer(t);
            return ((this.pos = this.pos + 8), e);
          }),
          (u.prototype.readUInt64LEBN = function () {
            var t,
              e = this.buf.readUInt32LE(this.pos),
              r = this.buf.readUInt32LE(this.pos + 4),
              n = 4294967296 * r + e;
            if (n <= 9007199254740991) t = new o(n);
            else {
              var i = Array.prototype.slice.call(
                this.buf,
                this.pos,
                this.pos + 8,
              );
              t = new o(i, 10, "le");
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
              i.checkState(
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
            for (var t = new e(this.buf.length), r = 0; r < t.length; r++)
              t[r] = this.buf[this.buf.length - 1 - r];
            return ((this.buf = t), this);
          }),
          (u.prototype.readReverse = function (t) {
            n.isUndefined(t) && (t = this.buf.length);
            var e = this.buf.slice(this.pos, this.pos + t);
            return ((this.pos = this.pos + t), s.reverse(e));
          }),
          (t.exports = u));
      }).call(this, r(2).Buffer);
    },
    3620: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2),
          i = r(3359),
          s = r(3360),
          o = r(3621),
          u = r(3619),
          a = r(3404),
          h = r(3087),
          c = r(3126),
          f = r(6901),
          p = r(2912),
          d = r(2896),
          l =
            "0000000000000000000000000000000000000000000000000000000000000001",
          g = "ffffffffffffffff",
          m = function (t, f, p, d) {
            var m,
              _ = r(5707),
              y = r(5708),
              S = _.shallowCopy(t);
            for (
              d = new s(d), d.removeCodeseparators(), m = 0;
              m < S.inputs.length;
              m++
            )
              S.inputs[m] = new y(S.inputs[m]).setScript(s.empty());
            if (
              ((S.inputs[p] = new y(S.inputs[p]).setScript(d)),
              (31 & f) === i.SIGHASH_NONE || (31 & f) === i.SIGHASH_SINGLE)
            )
              for (m = 0; m < S.inputs.length; m++)
                m !== p && (S.inputs[m].sequenceNumber = 0);
            if ((31 & f) === i.SIGHASH_NONE) S.outputs = [];
            else if ((31 & f) === i.SIGHASH_SINGLE) {
              if (p >= S.outputs.length) return new e(l, "hex");
              for (S.outputs.length = p + 1, m = 0; m < p; m++)
                S.outputs[m] = new o({
                  atoms: h.fromBuffer(new n.Buffer(g, "hex")),
                  script: s.empty(),
                });
            }
            f & i.SIGHASH_ANYONECANPAY && (S.inputs = [S.inputs[p]]);
            var b = new a()
                .writeInt32LE(f)
                .write(S._getHashPrefix())
                .write(S._getHashWitnessSign())
                .toBuffer(),
              v = c.blake256(b);
            return ((v = new u(v).readReverse()), v);
          };
        function _(t, e, r, n, i) {
          var s = m(t, r, n, i),
            o = f.sign(s, e, "little").set({ nhashtype: r });
          return o;
        }
        function y(t, e, r, n, i) {
          (p.checkArgument(!d.isUndefined(t)),
            p.checkArgument(!d.isUndefined(e) && !d.isUndefined(e.nhashtype)));
          var s = m(t, e.nhashtype, n, i);
          return f.verify(s, e, r, "little");
        }
        t.exports = { sighash: m, sign: _, verify: y };
      }).call(this, r(2).Buffer);
    },
    3621: function (t, e, r) {
      "use strict";
      var n = r(2896),
        i = r(3087),
        s = r(2),
        o = r(2941),
        u = r(3036),
        a = r(3404),
        h = r(3360),
        c = r(2912),
        f = r(3358),
        p = 9007199254740991;
      function d(t) {
        if (!(this instanceof d)) return new d(t);
        if (!n.isObject(t))
          throw new TypeError("Unrecognized argument for Output");
        var e;
        ((this.atoms = t.atoms),
          o.isBuffer(t.script)
            ? (this._scriptBuffer = t.script)
            : ((e =
                n.isString(t.script) && u.isHexa(t.script)
                  ? new s.Buffer(t.script, "hex")
                  : t.script),
              this.setScript(e)));
      }
      (Object.defineProperty(d.prototype, "script", {
        configurable: !1,
        enumerable: !0,
        get: function () {
          return (
            this._script || this.setScriptFromBuffer(this._scriptBuffer),
            this._script
          );
        },
      }),
        Object.defineProperty(d.prototype, "atoms", {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this._atoms;
          },
          set: function (t) {
            (t instanceof i
              ? ((this._atomsBN = t), (this._atoms = t.toNumber()))
              : n.isString(t)
                ? ((this._atoms = parseInt(t)),
                  (this._atomsBN = i.fromNumber(this._atoms)))
                : (c.checkArgument(
                    u.isNaturalNumber(t),
                    "Output atoms is not a natural number",
                  ),
                  (this._atomsBN = i.fromNumber(t)),
                  (this._atoms = t)),
              c.checkState(
                u.isNaturalNumber(this._atoms),
                "Output atoms is not a natural number",
              ));
          },
        }),
        (d.prototype.invalidSatoshis = function () {
          return this._atoms > p
            ? "transaction txout atoms greater than max safe integer"
            : this._atoms !== this._atomsBN.toNumber()
              ? "transaction txout atoms has corrupted value"
              : this._atoms < 0 && "transaction txout negative";
        }),
        (d.prototype.toObject = d.prototype.toJSON =
          function () {
            var t = { atoms: this.atoms };
            return ((t.script = this._scriptBuffer.toString("hex")), t);
          }),
        (d.fromObject = function (t) {
          return new d(t);
        }),
        (d.prototype.setScriptFromBuffer = function (t) {
          this._scriptBuffer = t;
          try {
            ((this._script = h.fromBuffer(this._scriptBuffer)),
              (this._script._isOutput = !0));
          } catch (e) {
            if (!(e instanceof f.Script.InvalidBuffer)) throw e;
            this._script = null;
          }
        }),
        (d.prototype.setScript = function (t) {
          if (t instanceof h)
            ((this._scriptBuffer = t.toBuffer()),
              (this._script = t),
              (this._script._isOutput = !0));
          else if (n.isString(t))
            ((this._script = h.fromString(t)),
              (this._scriptBuffer = this._script.toBuffer()),
              (this._script._isOutput = !0));
          else {
            if (!o.isBuffer(t))
              throw new TypeError("Invalid argument type: script");
            this.setScriptFromBuffer(t);
          }
          return this;
        }),
        (d.prototype.inspect = function () {
          var t;
          return (
            (t = this.script
              ? this.script.inspect()
              : this._scriptBuffer.toString("hex")),
            "<Output (" + this.atoms + " sats) " + t + ">"
          );
        }),
        (d.fromBufferReader = function (t) {
          var e = {};
          ((e.atoms = t.readUInt64LEBN()), (e.vers = t.readUInt16LE()));
          var r = t.readVarintNum();
          return (
            (e.script = 0 !== r ? t.read(r) : new s.Buffer([])),
            new d(e)
          );
        }),
        (d.prototype.toBufferWriter = function (t) {
          (t || (t = new a()),
            t.writeUInt64LEBN(this._atomsBN),
            t.writeUInt16LE(0));
          var e = this._scriptBuffer;
          return (t.writeVarintNum(e.length), t.write(e), t);
        }),
        (t.exports = d));
    },
    3638: function (t, e) {
      t.exports = function (t, e) {
        if ("function" === typeof t.compare) return t.compare(e);
        if (t === e) return 0;
        var r = t.length,
          n = e.length,
          i = 0,
          s = Math.min(r, n);
        while (i < s) {
          if (t[i] !== e[i]) break;
          ++i;
        }
        return (
          i !== s && ((r = t[i]), (n = e[i])),
          r < n ? -1 : n < r ? 1 : 0
        );
      };
    },
    3848: function (t, e, r) {
      "use strict";
      var n = r(6902),
        i = r(2941),
        s = r(3036),
        o = [],
        u = {};
      function a() {}
      function h(t, e) {
        if (~o.indexOf(t)) return t;
        if (!e) return u[t];
        n.isArray(e) || (e = [e]);
        var r = function (e) {
          return o[i][e] === t;
        };
        for (var i in o) if (n.any(e, r)) return o[i];
      }
      function c(t) {
        var e = new a();
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
              networkMagic: i.integerAsBuffer(t.networkMagic),
            }),
          t.port && s.defineImmutable(e, { port: t.port }),
          t.dnsSeeds && s.defineImmutable(e, { dnsSeeds: t.dnsSeeds }),
          n.each(e, function (t) {
            n.isUndefined(t) || n.isObject(t) || (u[t] = e);
          }),
          o.push(e),
          e
        );
      }
      function f(t) {
        for (var e = 0; e < o.length; e++) o[e] === t && o.splice(e, 1);
        for (var r in u) u[r] === t && delete u[r];
      }
      ((a.prototype.toString = function () {
        return this.name;
      }),
        c({
          name: "livenet",
          alias: "mainnet",
          pubkeyhash: 0,
          privatekey: 128,
          scripthash: 5,
          xpubkey: 76067358,
          xprivkey: 76066276,
          networkMagic: 4190024921,
          port: 8333,
          dnsSeeds: [
            "seed.bitcoin.sipa.be",
            "dnsseed.bluematt.me",
            "dnsseed.bitcoin.dashjr.org",
            "seed.bitcoinstats.com",
            "seed.bitnodes.io",
            "bitseed.xf2.org",
          ],
        }));
      var p = h("livenet");
      c({
        name: "testnet",
        alias: "regtest",
        pubkeyhash: 111,
        privatekey: 239,
        scripthash: 196,
        xpubkey: 70617039,
        xprivkey: 70615956,
      });
      var d = h("testnet"),
        l = {
          PORT: 18333,
          NETWORK_MAGIC: i.integerAsBuffer(185665799),
          DNS_SEEDS: [
            "testnet-seed.bitcoin.petertodd.org",
            "testnet-seed.bluematt.me",
            "testnet-seed.alexykot.me",
            "testnet-seed.bitcoin.schildbach.de",
          ],
        };
      for (var g in l) n.isObject(l[g]) || (u[l[g]] = d);
      var m = {
        PORT: 18444,
        NETWORK_MAGIC: i.integerAsBuffer(4206867930),
        DNS_SEEDS: [],
      };
      for (var g in m) n.isObject(m[g]) || (u[m[g]] = d);
      function _() {
        d.regtestEnabled = !0;
      }
      function y() {
        d.regtestEnabled = !1;
      }
      (Object.defineProperty(d, "port", {
        enumerable: !0,
        configurable: !1,
        get: function () {
          return this.regtestEnabled ? m.PORT : l.PORT;
        },
      }),
        Object.defineProperty(d, "networkMagic", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return this.regtestEnabled ? m.NETWORK_MAGIC : l.NETWORK_MAGIC;
          },
        }),
        Object.defineProperty(d, "dnsSeeds", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return this.regtestEnabled ? m.DNS_SEEDS : l.DNS_SEEDS;
          },
        }),
        c({
          name: "dcrdlivenet",
          alias: "dcrdlivenet",
          pubkeyhash: 1855,
          privatekey: 8926,
          scripthash: 1818,
          xpubkey: 50178342,
          xprivkey: 50177256,
          networkMagic: 4177573081,
          port: 9108,
          dnsSeeds: [],
        }),
        c({
          name: "dcrdtestnet",
          alias: "dcrdtestnet",
          pubkeyhash: 3873,
          privatekey: 8974,
          scripthash: 3836,
          xpubkey: 70617041,
          xprivkey: 70615959,
          networkMagic: 1223139429,
          port: 19108,
          dnsSeeds: ["testnet-seed.decred.mindcry.org"],
        }));
      var S = h("dcrdtestnet"),
        b = h("dcrdlivenet");
      t.exports = {
        add: c,
        remove: f,
        defaultNetwork: S,
        livenet: p,
        mainnet: p,
        testnet: d,
        dcrdtestnet: S,
        dcrdlivenet: b,
        get: h,
        enableRegtest: _,
        disableRegtest: y,
      };
    },
    3849: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(2912),
          s = r(3358),
          o = r(4586),
          u = r(3848),
          a = r(3126),
          h = r(3036),
          c = r(3403);
        function f(t, e, r) {
          if (!(this instanceof f)) return new f(t, e, r);
          if (n.isArray(t) && n.isNumber(e)) return f.createMultisig(t, e, r);
          if (t instanceof f) return t;
          if (
            (i.checkArgument(
              t,
              "First argument is required, please include address data.",
              "guide/address.html",
            ),
            e && !u.get(e))
          )
            throw new TypeError(
              'Second argument must be "livenet" or "testnet".',
            );
          if (r && r !== f.PayToPublicKeyHash && r !== f.PayToScriptHash)
            throw new TypeError(
              'Third argument must be "pubkeyhash" or "scripthash".',
            );
          var s = this._classifyArguments(t, e, r);
          return (
            (s.network = s.network || u.get(e) || u.defaultNetwork),
            (s.type = s.type || r || f.PayToPublicKeyHash),
            h.defineImmutable(this, {
              hashBuffer: s.hashBuffer,
              network: s.network,
              type: s.type,
            }),
            this
          );
        }
        ((f.prototype._classifyArguments = function (t, r, i) {
          if ((t instanceof e || t instanceof Uint8Array) && 20 === t.length)
            return f._transformHash(t);
          if ((t instanceof e || t instanceof Uint8Array) && 21 === t.length)
            return f._transformBuffer(t, r, i);
          if (t instanceof c) return f._transformPublicKey(t);
          if (t instanceof p) return f._transformScript(t, r);
          if ("string" === typeof t) return f._transformString(t, r, i);
          if (n.isObject(t)) return f._transformObject(t);
          throw new TypeError("First argument is an unrecognized data format.");
        }),
          (f.PayToPublicKeyHash = "pubkeyhash"),
          (f.PayToScriptHash = "scripthash"),
          (f._transformHash = function (t) {
            var r = {};
            if (!(t instanceof e) && !(t instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (20 !== t.length)
              throw new TypeError(
                "Address hashbuffers must be exactly 20 bytes.",
              );
            return ((r.hashBuffer = t), r);
          }),
          (f._transformObject = function (t) {
            return (
              i.checkArgument(
                t.hash || t.hashBuffer,
                "Must provide a `hash` or `hashBuffer` property",
              ),
              i.checkArgument(t.type, "Must provide a `type` property"),
              {
                hashBuffer: t.hash ? new e(t.hash, "hex") : t.hashBuffer,
                network: u.get(t.network) || u.defaultNetwork,
                type: t.type,
              }
            );
          }),
          (f._classifyFromVersion = function (t) {
            var e = {},
              r = u.get(t.readIntBE(0, 2), "pubkeyhash"),
              n = u.get(t.readIntBE(0, 2), "scripthash");
            return (
              r
                ? ((e.network = r), (e.type = f.PayToPublicKeyHash))
                : n && ((e.network = n), (e.type = f.PayToScriptHash)),
              e
            );
          }),
          (f._transformBuffer = function (t, r, n) {
            var i = {};
            if (!(t instanceof e) && !(t instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (22 !== t.length)
              throw new TypeError("Address buffers must be exactly 21 bytes.");
            r = u.get(r);
            var s = f._classifyFromVersion(t);
            if (!s.network || (r && r !== s.network))
              throw new TypeError("Address has mismatched network type.");
            if (!s.type || (n && n !== s.type))
              throw new TypeError("Address has mismatched type.");
            return (
              (i.hashBuffer = t.slice(2)),
              (i.network = s.network),
              (i.type = s.type),
              i
            );
          }),
          (f._transformPublicKey = function (t) {
            var e = {};
            if (!(t instanceof c))
              throw new TypeError("Address must be an instance of PublicKey.");
            return (
              (e.hashBuffer = a.blake256ripemd160(t.toBuffer())),
              (e.type = f.PayToPublicKeyHash),
              e
            );
          }),
          (f._transformScript = function (t, e) {
            i.checkArgument(t instanceof p, "script must be a Script instance");
            var r = t.getAddressInfo(e);
            if (!r) throw new s.Script.CantDeriveAddress(t);
            return r;
          }),
          (f.createMultisig = function (t, e, r) {
            return (
              (r = r || t[0].network || u.defaultNetwork),
              f.payingTo(p.buildMultisigOut(t, e), r)
            );
          }),
          (f._transformString = function (t, e, r) {
            if ("string" !== typeof t)
              throw new TypeError("data parameter supplied is not a string.");
            t = t.trim();
            var n = o.decode(t),
              i = f._transformBuffer(n, e, r);
            return i;
          }),
          (f.fromPublicKey = function (t, e) {
            var r = f._transformPublicKey(t);
            return (
              (e = e || u.defaultNetwork),
              new f(r.hashBuffer, e, r.type)
            );
          }),
          (f.fromPublicKeyHash = function (t, e) {
            var r = f._transformHash(t);
            return new f(r.hashBuffer, e, f.PayToPublicKeyHash);
          }),
          (f.fromScriptHash = function (t, e) {
            i.checkArgument(t, "hash parameter is required");
            var r = f._transformHash(t);
            return new f(r.hashBuffer, e, f.PayToScriptHash);
          }),
          (f.payingTo = function (t, e) {
            return (
              i.checkArgument(t, "script is required"),
              i.checkArgument(
                t instanceof p,
                "script must be instance of Script",
              ),
              f.fromScriptHash(a.blake256ripemd160(t.toBuffer()), e)
            );
          }),
          (f.fromScript = function (t, e) {
            i.checkArgument(t instanceof p, "script must be a Script instance");
            var r = f._transformScript(t, e);
            return new f(r.hashBuffer, e, r.type);
          }),
          (f.fromBuffer = function (t, e, r) {
            var n = f._transformBuffer(t, e, r);
            return new f(n.hashBuffer, n.network, n.type);
          }),
          (f.fromString = function (t, e, r) {
            var n = f._transformString(t, e, r);
            return new f(n.hashBuffer, n.network, n.type);
          }),
          (f.fromObject = function (t) {
            i.checkState(
              h.isHexa(t.hash),
              'Unexpected hash property, "' + t.hash + '", expected to be hex.',
            );
            var r = new e(t.hash, "hex");
            return new f(r, t.network, t.type);
          }),
          (f.getValidationError = function (t, e, r) {
            var n;
            try {
              new f(t, e, r);
            } catch (i) {
              n = i;
            }
            return n;
          }),
          (f.isValid = function (t, e, r) {
            return !f.getValidationError(t, e, r);
          }),
          (f.prototype.isPayToPublicKeyHash = function () {
            return this.type === f.PayToPublicKeyHash;
          }),
          (f.prototype.isPayToScriptHash = function () {
            return this.type === f.PayToScriptHash;
          }),
          (f.prototype.toBuffer = function () {
            var t = new e(2);
            t.writeUIntBE(this.network[this.type], 0, 2);
            var r = e.concat([t, this.hashBuffer]);
            return r;
          }),
          (f.prototype.toObject = f.prototype.toJSON =
            function () {
              return {
                hash: this.hashBuffer.toString("hex"),
                type: this.type,
                network: this.network.toString(),
              };
            }),
          (f.prototype.toString = function () {
            return o.encode(this.toBuffer());
          }),
          (f.prototype.inspect = function () {
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
          (t.exports = f));
        var p = r(3360);
      }).call(this, r(2).Buffer);
    },
    3970: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3087),
          i = r(2941),
          s = r(3402).curves.secp256k1,
          o = s.curve.point.bind(s.curve),
          u = s.curve.pointFromX.bind(s.curve),
          Point = function (t, e, r) {
            var n = o(t, e, r);
            return (n.validate(), n);
          };
        ((Point.prototype = Object.getPrototypeOf(s.curve.point())),
          (Point.fromX = function (t, e) {
            var r = u(t, e);
            return (r.validate(), r);
          }),
          (Point.getG = function () {
            return s.curve.g;
          }),
          (Point.getN = function () {
            return new n(s.curve.n.toArray());
          }),
          (Point.prototype._getX = Point.prototype.getX),
          (Point.prototype.getX = function () {
            return new n(this._getX().toArray());
          }),
          (Point.prototype._getY = Point.prototype.getY),
          (Point.prototype.getY = function () {
            return new n(this._getY().toArray());
          }),
          (Point.prototype.validate = function () {
            if (this.isInfinity())
              throw new Error("Point cannot be equal to Infinity");
            if (0 === this.getX().cmp(n.Zero) || 0 === this.getY().cmp(n.Zero))
              throw new Error("Invalid x,y value for curve, cannot equal 0.");
            var t = u(this.getY().isOdd(), this.getX());
            if (0 !== t.y.cmp(this.y))
              throw new Error("Invalid y value for curve.");
            var e = this.getX().gt(n.Minus1) && this.getX().lt(Point.getN()),
              r = this.getY().gt(n.Minus1) && this.getY().lt(Point.getN());
            if (!e || !r) throw new Error("Point does not lie on the curve");
            if (!this.mul(Point.getN()).isInfinity())
              throw new Error("Point times N must be infinity");
            return this;
          }),
          (Point.pointToCompressed = function (t) {
            var r,
              n = t.getX().toBuffer({ size: 32 }),
              s = t.getY().toBuffer({ size: 32 }),
              o = s[s.length - 1] % 2;
            return ((r = new e(o ? [3] : [2])), i.concat([r, n]));
          }),
          (t.exports = Point));
      }).call(this, r(2).Buffer);
    },
    4586: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(4869),
          s = r(2),
          o = r(3126).doubleblake256,
          u = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (e.isBuffer(r)) {
              var n = r;
              this.fromBuffer(n);
            } else if ("string" === typeof r) {
              var i = r;
              this.fromString(i);
            } else r && this.set(r);
          };
        ((u.prototype.set = function (t) {
          return ((this.buf = t.buf || this.buf || void 0), this);
        }),
          (u.validChecksum = function (t, e) {
            return (
              n.isString(t) && (t = new s.Buffer(i.decode(t))),
              n.isString(e) && (e = new s.Buffer(i.decode(e))),
              e || ((e = t.slice(-4)), (t = t.slice(0, -4))),
              u.checksum(t).toString("hex") === e.toString("hex")
            );
          }),
          (u.decode = function (t) {
            if ("string" !== typeof t)
              throw new Error("Input must be a string");
            var r = new e(i.decode(t));
            if (r.length < 4) throw new Error("Input string too short");
            var n = r.slice(0, -4),
              s = r.slice(-4),
              u = o(n),
              a = u.slice(0, 4);
            if (s.toString("hex") !== a.toString("hex"))
              throw new Error("Checksum mismatch");
            return n;
          }),
          (u.checksum = function (t) {
            return o(t).slice(0, 4);
          }),
          (u.encode = function (t) {
            if (!e.isBuffer(t)) throw new Error("Input must be a buffer");
            var r = new e(t.length + 4),
              n = u.checksum(t);
            return (t.copy(r), n.copy(r, t.length), i.encode(r));
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
    4587: function (t, e, r) {
      "use strict";
      var n = r(2896),
        i = r(2912),
        s = r(3358),
        o = r(3404),
        u = r(2),
        a = r(2941),
        h = r(3036),
        c = r(3360),
        f = r(3620),
        p = r(3621),
        d = 4294967295,
        l = 0;
      function g(t) {
        return this instanceof g
          ? t
            ? this._fromObject(t)
            : void 0
          : new g(t);
      }
      ((g.DEFAULT_SEQNUMBER = d),
        (g.DEFAULT_LOCKTIME_SEQNUMBER = l),
        Object.defineProperty(g.prototype, "script", {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this.isNull()
              ? null
              : (this._script ||
                  ((this._script = new c(this._scriptBuffer)),
                  (this._script._isInput = !0)),
                this._script);
          },
        }),
        (g.fromObject = function (t) {
          i.checkArgument(n.isObject(t));
          var e = new g();
          return e._fromObject(t);
        }),
        (g.prototype._fromObject = function (t) {
          var e;
          if (
            ((e =
              n.isString(t.prevTxId) && h.isHexa(t.prevTxId)
                ? new u.Buffer(t.prevTxId, "hex")
                : t.prevTxId),
            (this.output = t.output
              ? t.output instanceof p
                ? t.output
                : new p(t.output)
              : void 0),
            (this.prevTxId = e || t.txidbuf),
            (this.outputIndex = n.isUndefined(t.outputIndex)
              ? t.txoutnum
              : t.outputIndex),
            (this.tree = n.isUndefined(t.outputTree)
              ? t.txouttree
              : t.outputTree),
            (this.sequenceNumber = n.isUndefined(t.sequenceNumber)
              ? n.isUndefined(t.seqnum)
                ? d
                : t.seqnum
              : t.sequenceNumber),
            n.isUndefined(t.script) && n.isUndefined(t.scriptBuffer))
          )
            throw new s.Transaction.Input.MissingScript();
          return (this.setScript(t.scriptBuffer || t.script), this);
        }),
        (g.prototype.toObject = g.prototype.toJSON =
          function () {
            var t = {
              prevTxId: this.prevTxId.toString("hex"),
              outputIndex: this.outputIndex,
              tree: this.tree,
              sequenceNumber: this.sequenceNumber,
              script: this._scriptBuffer.toString("hex"),
            };
            return (
              this.script && (t.scriptString = this.script.toString()),
              this.output && (t.output = this.output.toObject()),
              t
            );
          }),
        (g.fromBufferReader = function (t) {
          var e = new g();
          return (
            (e.prevTxId = t.readReverse(32)),
            (e.outputIndex = t.readUInt32LE()),
            (e.outputTree = t.readUInt8()),
            (e.sequenceNumber = t.readUInt32LE()),
            e
          );
        }),
        (g.prototype.fromBufferReaderWitness = function (t) {
          ((this.valuein = t.readUInt64LEBN()),
            (this.blockheight = t.readUInt32LE()),
            (this.blockindex = t.readUInt32LE()),
            (this._scriptBuffer = t.readVarLengthBuffer()));
        }),
        (g.prototype.fromBufferReaderScript = function (t) {
          this._scriptBuffer = t.readVarLengthBuffer();
        }),
        (g.prototype.toBufferWriter = function (t) {
          (t || (t = new o()),
            t.writeReverse(this.prevTxId),
            t.writeUInt32LE(this.outputIndex),
            t.writeUInt8(this.outputTree));
          var e = this._scriptBuffer;
          return (
            t.writeVarintNum(e.length),
            t.write(e),
            t.writeUInt32LE(this.sequenceNumber),
            t
          );
        }),
        (g.prototype.toBufferWriterNoScript = function (t) {
          return (
            t || (t = new o()),
            t.writeReverse(this.prevTxId),
            t.writeUInt32LE(this.outputIndex),
            t.writeUInt8(this.outputTree),
            t.writeUInt32LE(this.sequenceNumber),
            t
          );
        }),
        (g.prototype.toBufferWriterScriptOnly = function (t) {
          (t || (t = new o()),
            t.writeUInt32LE(4294967295),
            t.writeUInt32LE(4294967295),
            t.writeUInt32LE(0),
            t.writeUInt32LE(4294967295));
          var e = this._scriptBuffer;
          return (t.writeVarintNum(e.length), t.write(e), t);
        }),
        (g.prototype.toBufferWriterWitnessSign = function (t) {
          t || (t = new o());
          var e = this._scriptBuffer;
          return (t.writeVarintNum(e.length), t.write(e), t);
        }),
        (g.prototype.setScript = function (t) {
          if (((this._script = null), t instanceof c))
            ((this._script = t),
              (this._script._isInput = !0),
              (this._scriptBuffer = t.toBuffer()));
          else if (h.isHexa(t)) this._scriptBuffer = new u.Buffer(t, "hex");
          else if (n.isString(t))
            ((this._script = new c(t)),
              (this._script._isInput = !0),
              (this._scriptBuffer = this._script.toBuffer()));
          else {
            if (!a.isBuffer(t))
              throw new TypeError("Invalid argument type: script");
            this._scriptBuffer = new u.Buffer(t);
          }
          return this;
        }),
        (g.prototype.getSignatures = function () {
          throw new s.AbstractMethodInvoked(
            "Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " +
              JSON.stringify(this),
          );
        }),
        (g.prototype.isFullySigned = function () {
          throw new s.AbstractMethodInvoked("Input#isFullySigned");
        }),
        (g.prototype.isFinal = function () {
          return 4294967295 !== this.sequenceNumber;
        }),
        (g.prototype.addSignature = function () {
          throw new s.AbstractMethodInvoked("Input#addSignature");
        }),
        (g.prototype.clearSignatures = function () {
          throw new s.AbstractMethodInvoked("Input#clearSignatures");
        }),
        (g.prototype.isValidSignature = function (t, e) {
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
        (g.prototype.isNull = function () {
          return (
            "0000000000000000000000000000000000000000000000000000000000000000" ===
              this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
          );
        }),
        (g.prototype._estimateSize = function () {
          return this.toBufferWriter().toBuffer().length;
        }),
        (t.exports = g));
    },
    4588: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(2912),
          s = r(16),
          o = r(2941),
          u = r(3036),
          a = r(3403),
          h = r(3358),
          c = r(3359);
        function f(t) {
          if (!(this instanceof f)) return new f(t);
          if (t instanceof f) return t;
          if (n.isObject(t)) return this._fromObject(t);
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
                : new e(t.prevTxId, "hex")),
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
            (i.checkArgument(a(t.publicKey), "publicKey"),
              i.checkArgument(!n.isUndefined(t.inputIndex), "inputIndex"),
              i.checkArgument(!n.isUndefined(t.outputIndex), "outputIndex"),
              i.checkState(
                n.isNumber(t.inputIndex),
                "inputIndex must be a number",
              ),
              i.checkState(
                n.isNumber(t.outputIndex),
                "outputIndex must be a number",
              ),
              i.checkArgument(t.signature, "signature"),
              i.checkArgument(t.prevTxId, "prevTxId"),
              i.checkState(
                t.signature instanceof c ||
                  o.isBuffer(t.signature) ||
                  u.isHexa(t.signature),
                "signature must be a buffer or hexa value",
              ),
              i.checkState(
                o.isBuffer(t.prevTxId) || u.isHexa(t.prevTxId),
                "prevTxId must be a buffer or hexa value",
              ),
              i.checkArgument(t.sigtype, "sigtype"),
              i.checkState(n.isNumber(t.sigtype), "sigtype must be a number"));
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
            return (i.checkArgument(t), new f(t));
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    4868: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(3849),
          s = r(4586),
          o = r(3087),
          u = r(3036),
          a = r(3848),
          Point = r(3970),
          h = r(3403),
          c = r(4871),
          f = r(2912);
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
          var i = { compressed: !0, network: r ? a.get(r) : a.defaultNetwork };
          if (n.isUndefined(t) || n.isNull(t)) i.bn = p._getRandomBN();
          else if (t instanceof o) i.bn = t;
          else if (t instanceof e || t instanceof Uint8Array)
            i = p._transformBuffer(t, r);
          else if (t.bn && t.network) i = p._transformObject(t);
          else if (!r && a.get(t))
            ((i.bn = p._getRandomBN()), (i.network = a.get(t)));
          else {
            if ("string" !== typeof t)
              throw new TypeError(
                "First argument is an unrecognized data type.",
              );
            u.isHexa(t)
              ? (i.bn = new o(new e(t, "hex")))
              : (i = p._transformWIF(t, r));
          }
          return i;
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
            var n = t.slice(0, 2).readUInt16LE(0);
            if (((r.network = a.get(n, "privatekey")), !r.network))
              throw new Error("Invalid network");
            if (e && r.network !== a.get(e))
              throw new TypeError("Private key network mismatch");
            if (35 === t.length && 1 === t[34]) r.compressed = !0;
            else {
              if (34 !== t.length)
                throw new Error(
                  "Length of buffer must be 34 (uncompressed) or 35 (compressed)",
                );
              r.compressed = !1;
            }
            return ((r.bn = o.fromBuffer(t.slice(2, 34))), r);
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
                  n.isString(t),
                  "First argument is expected to be a string.",
                ),
                new p(t)
              );
            }),
          (p.fromObject = function (t) {
            return (
              f.checkArgument(
                n.isObject(t),
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
            } catch (n) {
              r = n;
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
              n = this.compressed,
              i = new e(2);
            return (
              i.writeUInt16LE(r.privatekey),
              (t = n
                ? e.concat([i, this.bn.toBuffer({ size: 32 }), new e([1])])
                : e.concat([i, this.bn.toBuffer({ size: 32 })])),
              s.encode(t)
            );
          }),
          (p.prototype.toBigNumber = function () {
            return this.bn;
          }),
          (p.prototype.toBuffer = function () {
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
            return i.fromPublicKey(e, t || this.network);
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
    4869: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(234),
          s = r(2),
          o =
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split(
              "",
            ),
          u = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (e.isBuffer(r)) {
              var n = r;
              this.fromBuffer(n);
            } else if ("string" === typeof r) {
              var i = r;
              this.fromString(i);
            } else r && this.set(r);
          };
        ((u.validCharacters = function (t) {
          return (
            s.Buffer.isBuffer(t) && (t = t.toString()),
            n.all(
              n.map(t, function (t) {
                return n.contains(o, t);
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
            return i.encode(t);
          }),
          (u.decode = function (t) {
            if ("string" !== typeof t)
              throw new Error("Input should be a string");
            return new e(i.decode(t));
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
    4870: function (t, e, r) {
      ((t.exports = r(5707)),
        (t.exports.Input = r(5708)),
        (t.exports.Output = r(3621)),
        (t.exports.UnspentOutput = r(6904)),
        (t.exports.Signature = r(4588)),
        (t.exports.Sighash = r(3620)));
    },
    4871: function (t, e, r) {
      "use strict";
      (function (e, n) {
        function i() {}
        ((i.getRandomBuffer = function (t) {
          return e.browser
            ? i.getRandomBufferBrowser(t)
            : i.getRandomBufferNode(t);
        }),
          (i.getRandomBufferNode = function (t) {
            var e = r(11350);
            return e.randomBytes(t);
          }),
          (i.getRandomBufferBrowser = function (t) {
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
            var i = new n(r);
            return i;
          }),
          (i.getPseudoRandomBuffer = function (t) {
            for (var e, r = 4294967296, i = new n(t), s = 0; s <= t; s++) {
              var o = Math.floor(s / 4),
                u = s - 4 * o;
              0 === u
                ? ((e = Math.random() * r), (i[s] = 255 & e))
                : (i[s] = 255 & (e >>>= 8));
            }
            return i;
          }),
          (t.exports = i));
      }).call(this, r(18), r(2).Buffer);
    },
    4872: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(3087),
          s = r(2941),
          o = r(3619),
          u = r(3404),
          a = r(3126),
          h = (r(3036), r(2912)),
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
            if (!n.isObject(t))
              throw new TypeError("Unrecognized argument for BlockHeader");
            e = f._fromObject(t);
          }
          return e;
        }),
          (f._fromObject = function (t) {
            h.checkArgument(t, "data is required");
            var r = t.prevHash,
              i = t.merkleRoot;
            (n.isString(t.prevHash) &&
              (r = s.reverse(new e(t.prevHash, "hex"))),
              n.isString(t.merkleRoot) &&
                (i = s.reverse(new e(t.merkleRoot, "hex"))));
            var o = {
              hash: t.hash,
              version: t.version,
              prevHash: r,
              merkleRoot: i,
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
            s.isBuffer(t) || (t = new e(t, "binary"));
            var r = o(t);
            r.pos = f.Constants.START_OF_HEADER;
            var n = f._fromBufferReader(r);
            return new f(n);
          }),
          (f.fromBuffer = function (t) {
            var e = f._fromBufferReader(o(t));
            return new f(e);
          }),
          (f.fromString = function (t) {
            var r = new e(t, "hex");
            return f.fromBuffer(r);
          }),
          (f._fromBufferReader = function (t) {
            var e = {};
            return (
              (e.version = t.readUInt32LE()),
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
              t.writeUInt32LE(this.version),
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
            var e = new i(16777215 & t),
              r = 8 * ((t >>> 24) - 3);
            while (r-- > 0) e = e.mul(new i(2));
            return e;
          }),
          (f.prototype.getDifficulty = function () {
            var t = this.getTargetDifficulty(c).mul(new i(Math.pow(10, 8))),
              e = this.getTargetDifficulty(),
              r = t.div(e).toString(10),
              n = r.length - 8;
            return ((r = r.slice(0, n) + "." + r.slice(n)), parseFloat(r));
          }),
          (f.prototype._getHash = function () {
            var t = this.toBuffer();
            return a.blake256(t);
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
          set: n.noop,
        };
        (Object.defineProperty(f.prototype, "id", p),
          Object.defineProperty(f.prototype, "hash", p),
          (f.prototype.validTimestamp = function () {
            var t = Math.round(new Date().getTime() / 1e3);
            return !(this.time > t + f.Constants.MAX_TIME_OFFSET);
          }),
          (f.prototype.validProofOfWork = function () {
            var t = new i(this.id, "hex"),
              e = this.getTargetDifficulty();
            return !(t.cmp(e) > 0);
          }),
          (f.prototype.inspect = function () {
            return "<BlockHeader " + this.id + ">";
          }),
          (f.Constants = {
            START_OF_HEADER: 8,
            MAX_TIME_OFFSET: 7200,
            LARGEST_HASH: new i(
              "10000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    5706: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(2912),
          s = r(2941),
          o = r(3036);
        function u(t) {
          if (!(this instanceof u)) return new u(t);
          var e;
          if (n.isNumber(t)) e = t;
          else {
            if (!n.isString(t))
              throw new TypeError(
                'Unrecognized num type: "' + typeof t + '" for Opcode',
              );
            e = u.map[t];
          }
          return (o.defineImmutable(this, { num: e }), this);
        }
        for (var a in ((u.fromBuffer = function (t) {
          return (
            i.checkArgument(s.isBuffer(t)),
            new u(Number("0x" + t.toString("hex")))
          );
        }),
        (u.fromNumber = function (t) {
          return (i.checkArgument(n.isNumber(t)), new u(t));
        }),
        (u.fromString = function (t) {
          i.checkArgument(n.isString(t));
          var e = u.map[t];
          if ("undefined" === typeof e)
            throw new TypeError("Invalid opcodestr");
          return new u(e);
        }),
        (u.prototype.toHex = function () {
          return this.num.toString(16);
        }),
        (u.prototype.toBuffer = function () {
          return new e(this.toHex(), "hex");
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
            i.checkArgument(
              n.isNumber(t),
              "Invalid Argument: n should be number",
            ),
            i.checkArgument(
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
          u.reverseMap[u.map[a]] = a;
        (n.extend(u, u.map),
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
    5707: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(6902),
          i = r(2912),
          s = r(2),
          o = e.compare || r(3638),
          u = r(3358),
          a = r(2941),
          h = r(3036),
          c = r(3619),
          f = r(3404),
          p = r(3126),
          d = r(3359),
          l = r(3620),
          g = r(3849),
          m = r(6904),
          _ = r(5708),
          y = _.PublicKeyHash,
          S = _.PublicKey,
          b = _.MultiSigScriptHash,
          v = _.MultiSig,
          I = r(3621),
          k = r(3360),
          P = r(4868),
          O = r(3087);
        function w(t) {
          if (!(this instanceof w)) return new w(t);
          if (
            ((this.inputs = []),
            (this.outputs = []),
            (this._inputAmount = void 0),
            (this._outputAmount = void 0),
            t)
          ) {
            if (t instanceof w) return w.shallowCopy(t);
            if (h.isHexa(t)) this.fromString(t);
            else if (a.isBuffer(t)) this.fromBuffer(t);
            else {
              if (!n.isObject(t))
                throw new u.InvalidArgument(
                  "Must provide an object or string to deserialize a transaction",
                );
              this.fromObject(t);
            }
          } else this._newTransaction();
        }
        var E = 1,
          A = 65537,
          B = 131073,
          T = 196609,
          R = 0,
          x = 0,
          N = 1e6;
        ((w.DUST_AMOUNT = 546),
          (w.FEE_SECURITY_MARGIN = 15),
          (w.MAX_MONEY = 21e14),
          (w.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8),
          (w.NLOCKTIME_MAX_VALUE = 4294967295),
          (w.FEE_PER_KB = 1e4),
          (w.CHANGE_OUTPUT_MAX_SIZE = 62),
          (w.MAXIMUM_EXTRA_SIZE = 26),
          (w.shallowCopy = function (t) {
            var e = new w(t.toBuffer());
            return e;
          }));
        var C = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return new c(this._getHash()).readReverse().toString("hex");
          },
        };
        (Object.defineProperty(w.prototype, "hash", C),
          Object.defineProperty(w.prototype, "id", C));
        var U = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this._getInputAmount();
          },
        };
        (Object.defineProperty(w.prototype, "inputAmount", U),
          (U.get = function () {
            return this._getOutputAmount();
          }),
          Object.defineProperty(w.prototype, "outputAmount", U),
          (w.prototype._getHash = function () {
            var t = p.blake256(this.toBufferPrefix());
            return t;
          }),
          (w.prototype._getHashString = function () {
            var t = p.blake256(this.toBufferPrefix());
            return ((t = new c(t).readReverse()), t.toString("hex"));
          }),
          (w.prototype._getHashPrefix = function () {
            var t = p.blake256(this.toBufferPrefix());
            return t;
          }),
          (w.prototype._getHashPrefixString = function () {
            var t = new c(this.toBufferPrefix()).readReverse(),
              e = p.blake256(t);
            return e.toString("hex");
          }),
          (w.prototype._getHashWitness = function () {
            var t = p.blake256(this.toBufferWitness());
            return t;
          }),
          (w.prototype._getHashWitnessString = function () {
            var t = new c(this.toBufferWitness()).readReverse(),
              e = p.blake256(t);
            return e.toString("hex");
          }),
          (w.prototype._getHashWitnessSign = function () {
            var t = p.blake256(this.toBufferWitnessSign());
            return t;
          }),
          (w.prototype.serialize = function (t) {
            return !0 === t || (t && t.disableAll)
              ? this.uncheckedSerialize()
              : this.checkedSerialize(t);
          }),
          (w.prototype.uncheckedSerialize = w.prototype.toString =
            function () {
              return this.toBuffer().toString("hex");
            }),
          (w.prototype.checkedSerialize = function (t) {
            var e = this.getSerializationError(t);
            if (e)
              throw (
                (e.message +=
                  " Use Transaction#uncheckedSerialize if you want to skip security checks. See http://bitcore.io/guide/transaction.html#Serialization for more info."),
                e
              );
            return this.uncheckedSerialize();
          }),
          (w.prototype.invalidSatoshis = function () {
            for (var t = !1, e = 0; e < this.outputs.length; e++)
              this.outputs[e].invalidSatoshis() && (t = !0);
            return t;
          }),
          (w.prototype.getSerializationError = function (t) {
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
          (w.prototype._hasFeeError = function (t, e) {
            if (!n.isUndefined(this._fee) && this._fee !== e)
              return new u.Transaction.FeeError.Different(
                "Unspent value is " + e + " but specified fee is " + this._fee,
              );
            if (!t.disableLargeFees) {
              var r = Math.floor(w.FEE_SECURITY_MARGIN * this._estimateFee());
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
              var i = Math.ceil(this._estimateFee() / w.FEE_SECURITY_MARGIN);
              if (e < i)
                return new u.Transaction.FeeError.TooSmall(
                  "expected more than " + i + " but got " + e,
                );
            }
          }),
          (w.prototype._missingChange = function () {
            return !this._changeScript;
          }),
          (w.prototype._hasDustOutputs = function (t) {
            var e, r;
            if (!t.disableDustOutputs)
              for (e in this.outputs)
                if (
                  ((r = this.outputs[e]),
                  r.atoms < w.DUST_AMOUNT && !r.script.isDataOut())
                )
                  return new u.Transaction.DustOutputs();
          }),
          (w.prototype._isMissingSignatures = function (t) {
            if (!t.disableIsFullySigned)
              return this.isFullySigned()
                ? void 0
                : new u.Transaction.MissingSignatures();
          }),
          (w.prototype.inspect = function () {
            return "<Transaction: " + this.uncheckedSerialize() + ">";
          }),
          (w.prototype.toBuffer = function () {
            var t = new f();
            return this.toBufferWriter(t).toBuffer();
          }),
          (w.prototype.toBufferWriter = function (t) {
            return (
              t.writeUInt32LE(E),
              t.writeVarintNum(this.inputs.length),
              n.each(this.inputs, function (e) {
                e.toBufferWriterNoScript(t);
              }),
              t.writeVarintNum(this.outputs.length),
              n.each(this.outputs, function (e) {
                e.toBufferWriter(t);
              }),
              t.writeUInt32LE(this.nLockTime),
              t.writeUInt32LE(this.nExpiry),
              t.writeVarintNum(this.inputs.length),
              n.each(this.inputs, function (e) {
                e.toBufferWriterScriptOnly(t);
              }),
              t
            );
          }),
          (w.prototype.toBufferPrefix = function () {
            var t = new f();
            return this.toBufferWriterPrefix(t).toBuffer();
          }),
          (w.prototype.toBufferWriterPrefix = function (t) {
            return (
              t.writeUInt32LE(A),
              t.writeVarintNum(this.inputs.length),
              n.each(this.inputs, function (e) {
                e.toBufferWriterNoScript(t);
              }),
              t.writeVarintNum(this.outputs.length),
              n.each(this.outputs, function (e) {
                e.toBufferWriter(t);
              }),
              t.writeUInt32LE(this.nLockTime),
              t.writeUInt32LE(this.nExpiry),
              t
            );
          }),
          (w.prototype.toBufferWitness = function () {
            var t = new f();
            return this.toBufferWriterWitness(t).toBuffer();
          }),
          (w.prototype.toBufferWriterWitness = function (t) {
            return (
              t.writeUInt32LE(B),
              t.writeVarintNum(this.inputs.length),
              n.each(this.inputs, function (e) {
                e.toBufferWriterScriptOnly(t);
              }),
              t
            );
          }),
          (w.prototype.toBufferWitnessSign = function () {
            var t = new f();
            return this.toBufferWriterWitnessSign(t).toBuffer();
          }),
          (w.prototype.toBufferWriterWitnessSign = function (t) {
            return (
              t.writeUInt32LE(T),
              t.writeVarintNum(this.inputs.length),
              n.each(this.inputs, function (e) {
                e.toBufferWriterWitnessSign(t);
              }),
              t
            );
          }),
          (w.prototype.fromBuffer = function (t) {
            var e = new c(t);
            return this.fromBufferReader(e);
          }),
          (w.prototype.fromBufferReader = function (t) {
            var e, r, n, s;
            for (
              i.checkArgument(!t.finished(), "No transaction data received"),
                this.version = t.readUInt32LE(),
                r = t.readVarintNum(),
                e = 0;
              e < r;
              e++
            ) {
              var o = _.fromBufferReader(t);
              this.inputs.push(o);
            }
            for (n = t.readVarintNum(), e = 0; e < n; e++)
              this.outputs.push(I.fromBufferReader(t));
            for (
              this.nLockTime = t.readUInt32LE(),
                this.nExpiry = t.readUInt32LE(),
                s = t.readVarintNum(),
                e = 0;
              e < s;
              e++
            )
              this.inputs[e].fromBufferReaderWitness(t);
            return this;
          }),
          (w.prototype.toObject = w.prototype.toJSON =
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
                nExpiry: this.nExpiry,
              };
              return (
                this._changeScript &&
                  (r.changeScript = this._changeScript.toString()),
                n.isUndefined(this._changeIndex) ||
                  (r.changeIndex = this._changeIndex),
                n.isUndefined(this._fee) || (r.fee = this._fee),
                r
              );
            }),
          (w.prototype.fromObject = function (t) {
            i.checkArgument(n.isObject(t) || t instanceof w);
            var e,
              r = this;
            return (
              (e = t instanceof w ? e.toObject() : t),
              n.each(e.inputs, function (t) {
                if (t.output && t.output.script) {
                  var e,
                    n = new k(t.output.script);
                  if (n.isPublicKeyHashOut()) e = new _.PublicKeyHash(t);
                  else if (n.isScriptHashOut() && t.publicKeys && t.threshold)
                    e = new _.MultiSigScriptHash(
                      t,
                      t.publicKeys,
                      t.threshold,
                      t.signatures,
                    );
                  else {
                    if (!n.isPublicKeyOut())
                      throw new u.Transaction.Input.UnsupportedScript(
                        t.output.script,
                      );
                    e = new _.PublicKey(t);
                  }
                  r.addInput(e);
                } else r.uncheckedAddInput(new _(t));
              }),
              n.each(e.outputs, function (t) {
                r.addOutput(new I(t));
              }),
              e.changeIndex && (this._changeIndex = e.changeIndex),
              e.changeScript && (this._changeScript = new k(e.changeScript)),
              e.fee && (this._fee = e.fee),
              (this.nLockTime = e.nLockTime),
              (this.nExpiry = e.nExpiry),
              (this.version = e.version),
              this._checkConsistency(t),
              this
            );
          }),
          (w.prototype._checkConsistency = function (t) {
            (n.isUndefined(this._changeIndex) ||
              (i.checkState(this._changeScript),
              i.checkState(this.outputs[this._changeIndex]),
              i.checkState(
                this.outputs[this._changeIndex].script.toString() ===
                  this._changeScript.toString(),
              )),
              t &&
                t.hash &&
                i.checkState(
                  t.hash === this.hash,
                  "Hash in object does not match transaction hash",
                ));
          }),
          (w.prototype.lockUntilDate = function (t) {
            if (
              (i.checkArgument(t),
              n.isNumber(t) && t < w.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new u.Transaction.LockTimeTooEarly();
            n.isDate(t) && (t = t.getTime() / 1e3);
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === _.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = _.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (w.prototype.lockUntilBlockHeight = function (t) {
            if (
              (i.checkArgument(n.isNumber(t)),
              t >= w.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new u.Transaction.BlockHeightTooHigh();
            if (t < 0) throw new u.Transaction.NLockTimeOutOfRange();
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === _.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = _.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (w.prototype.getLockTime = function () {
            return this.nLockTime
              ? this.nLockTime < w.NLOCKTIME_BLOCKHEIGHT_LIMIT
                ? this.nLockTime
                : new Date(1e3 * this.nLockTime)
              : null;
          }),
          (w.prototype.fromString = function (t) {
            this.fromBuffer(new s.Buffer(t, "hex"));
          }),
          (w.prototype._newTransaction = function () {
            ((this.version = E), (this.nLockTime = R), (this.nExpiry = x));
          }),
          (w.prototype.from = function (t, e, r) {
            if (n.isArray(t)) {
              var i = this;
              return (
                n.each(t, function (t) {
                  i.from(t, e, r);
                }),
                this
              );
            }
            var s = n.any(this.inputs, function (e) {
              return (
                e.prevTxId.toString("hex") === t.txId &&
                e.outputIndex === t.outputIndex
              );
            });
            if (!s)
              return (
                e && r ? this._fromMultisigUtxo(t, e, r) : this._fromNonP2SH(t),
                this
              );
          }),
          (w.prototype._fromNonP2SH = function (t) {
            var e;
            ((t = new m(t)),
              (e = t.script.isPublicKeyHashOut()
                ? y
                : t.script.isPublicKeyOut()
                  ? S
                  : _),
              this.addInput(
                new e({
                  output: new I({ script: t.script, atoms: t.atoms }),
                  prevTxId: t.txId,
                  outputIndex: t.outputIndex,
                  script: k.empty(),
                }),
              ));
          }),
          (w.prototype._fromMultisigUtxo = function (t, e, r) {
            var n;
            if (
              (i.checkArgument(
                r <= e.length,
                "Number of required signatures must be greater than the number of public keys",
              ),
              (t = new m(t)),
              t.script.isMultisigOut())
            )
              n = v;
            else {
              if (!t.script.isScriptHashOut()) throw new Error("@TODO");
              n = b;
            }
            this.addInput(
              new n(
                {
                  output: new I({ script: t.script, atoms: t.atoms }),
                  prevTxId: t.txId,
                  outputIndex: t.outputIndex,
                  script: k.empty(),
                },
                e,
                r,
              ),
            );
          }),
          (w.prototype.addInput = function (t, e, r) {
            if (
              (i.checkArgumentType(t, _, "input"),
              !t.output && (n.isUndefined(e) || n.isUndefined(r)))
            )
              throw new u.Transaction.NeedMoreInfo(
                "Need information about the UTXO script and atoms",
              );
            return (
              t.output ||
                !e ||
                n.isUndefined(r) ||
                ((e = e instanceof k ? e : new k(e)),
                i.checkArgumentType(r, "number", "atoms"),
                (t.output = new I({ script: e, atoms: r }))),
              this.uncheckedAddInput(t)
            );
          }),
          (w.prototype.uncheckedAddInput = function (t) {
            return (
              i.checkArgumentType(t, _, "input"),
              this.inputs.push(t),
              (this._inputAmount = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (w.prototype.hasAllUtxoInfo = function () {
            return n.all(
              this.inputs.map(function (t) {
                return !!t.output;
              }),
            );
          }),
          (w.prototype.fee = function (t) {
            return (
              i.checkArgument(n.isNumber(t), "amount must be a number"),
              (this._fee = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (w.prototype.feePerKb = function (t) {
            return (
              i.checkArgument(n.isNumber(t), "amount must be a number"),
              (this._feePerKb = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (w.prototype.change = function (t) {
            return (
              i.checkArgument(t, "address is required"),
              (this._changeScript = k.fromAddress(t)),
              this._updateChangeOutput(),
              this
            );
          }),
          (w.prototype.getChangeOutput = function () {
            return n.isUndefined(this._changeIndex)
              ? null
              : this.outputs[this._changeIndex];
          }),
          (w.prototype.to = function (t, e) {
            if (n.isArray(t)) {
              var r = this;
              return (
                n.each(t, function (t) {
                  r.to(t.address, t.atoms);
                }),
                this
              );
            }
            return (
              i.checkArgument(
                h.isNaturalNumber(e),
                "Amount is expected to be a positive integer",
              ),
              this.addOutput(new I({ script: k(new g(t)), atoms: e })),
              this
            );
          }),
          (w.prototype.addData = function (t) {
            return (
              this.addOutput(new I({ script: k.buildDataOut(t), atoms: 0 })),
              this
            );
          }),
          (w.prototype.addOutput = function (t) {
            return (
              i.checkArgumentType(t, I, "output"),
              this._addOutput(t),
              this._updateChangeOutput(),
              this
            );
          }),
          (w.prototype.clearOutputs = function () {
            return (
              (this.outputs = []),
              this._clearSignatures(),
              (this._outputAmount = void 0),
              (this._changeIndex = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (w.prototype._addOutput = function (t) {
            (this.outputs.push(t), (this._outputAmount = void 0));
          }),
          (w.prototype._getOutputAmount = function () {
            if (n.isUndefined(this._outputAmount)) {
              var t = this;
              ((this._outputAmount = 0),
                n.each(this.outputs, function (e) {
                  t._outputAmount += e.atoms;
                }));
            }
            return this._outputAmount;
          }),
          (w.prototype._getInputAmount = function () {
            if (n.isUndefined(this._inputAmount)) {
              var t = this;
              ((this._inputAmount = 0),
                n.each(this.inputs, function (e) {
                  if (n.isUndefined(e.output))
                    throw new u.Transaction.Input.MissingPreviousOutput();
                  t._inputAmount += e.output.atoms;
                }));
            }
            return this._inputAmount;
          }),
          (w.prototype._updateChangeOutput = function () {
            if (this._changeScript) {
              (this._clearSignatures(),
                n.isUndefined(this._changeIndex) ||
                  this._removeOutput(this._changeIndex));
              var t = this._getUnspentValue(),
                e = this.getFee(),
                r = t - e;
              r > 0
                ? ((this._changeIndex = this.outputs.length),
                  this._addOutput(
                    new I({ script: this._changeScript, atoms: r }),
                  ))
                : (this._changeIndex = void 0);
            }
          }),
          (w.prototype.getFee = function () {
            return this.isCoinbase()
              ? 0
              : n.isUndefined(this._fee)
                ? this._changeScript
                  ? this._estimateFee()
                  : this._getUnspentValue()
                : this._fee;
          }),
          (w.prototype._estimateFee = function () {
            var t = this._estimateSize(),
              e = this._getUnspentValue();
            return w._estimateFee(t, e, this._feePerKb);
          }),
          (w.prototype._getUnspentValue = function () {
            return this._getInputAmount() - this._getOutputAmount();
          }),
          (w.prototype._clearSignatures = function () {
            n.each(this.inputs, function (t) {
              t.clearSignatures();
            });
          }),
          (w._estimateFee = function (t, e, r) {
            var n = Math.ceil(t / 1e3) * (r || w.FEE_PER_KB);
            return (
              e > n && (t += w.CHANGE_OUTPUT_MAX_SIZE),
              Math.ceil(t / 1e3) * (r || w.FEE_PER_KB)
            );
          }),
          (w.prototype._estimateSize = function () {
            var t = 108,
              e = 25,
              r = 54 + t + 4,
              i = 11 + e,
              s = this.inputs.length,
              o = (n.isArray(this.outputs) ? this.outputs.length : 1) + 1,
              u = 18 + s * r + o * i;
            return u;
          }),
          (w.prototype._removeOutput = function (t) {
            var e = this.outputs[t];
            ((this.outputs = n.without(this.outputs, e)),
              (this._outputAmount = void 0));
          }),
          (w.prototype.removeOutput = function (t) {
            (this._removeOutput(t), this._updateChangeOutput());
          }),
          (w.prototype.sort = function () {
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
                      t.atoms - e.atoms ||
                      o(t.script.toBuffer(), e.script.toBuffer())
                    );
                  }),
                  e
                );
              }),
              this
            );
          }),
          (w.prototype.shuffleOutputs = function () {
            return this.sortOutputs(n.shuffle);
          }),
          (w.prototype.sortOutputs = function (t) {
            var e = t(this.outputs);
            return this._newOutputOrder(e);
          }),
          (w.prototype.sortInputs = function (t) {
            return (
              (this.inputs = t(this.inputs)),
              this._clearSignatures(),
              this
            );
          }),
          (w.prototype._newOutputOrder = function (t) {
            var e =
              this.outputs.length !== t.length ||
              0 !== n.difference(this.outputs, t).length;
            if (e) throw new u.Transaction.InvalidSorting();
            if (!n.isUndefined(this._changeIndex)) {
              var r = this.outputs[this._changeIndex];
              this._changeIndex = n.findIndex(t, r);
            }
            return ((this.outputs = t), this);
          }),
          (w.prototype.removeInput = function (t, e) {
            var r;
            if (
              ((r =
                !e && n.isNumber(t)
                  ? t
                  : n.findIndex(this.inputs, function (r) {
                      return (
                        r.prevTxId.toString("hex") === t && r.outputIndex === e
                      );
                    })),
              r < 0 || r >= this.inputs.length)
            )
              throw new u.Transaction.InvalidIndex(r, this.inputs.length);
            var i = this.inputs[r];
            ((this.inputs = n.without(this.inputs, i)),
              (this._inputAmount = void 0),
              this._updateChangeOutput());
          }),
          (w.prototype.sign = function (t, e) {
            i.checkState(this.hasAllUtxoInfo());
            var r = this;
            return n.isArray(t)
              ? (n.each(t, function (t) {
                  r.sign(t, e);
                }),
                this)
              : (n.each(this.getSignatures(t, e), function (t) {
                  r.applySignature(t);
                }),
                this);
          }),
          (w.prototype.getSignatures = function (t, e) {
            ((t = new P(t)), (e = e || d.SIGHASH_ALL));
            var r = this,
              i = [],
              s = p.blake256ripemd160(t.publicKey.toBuffer());
            return (
              n.each(this.inputs, function (o, u) {
                n.each(o.getSignatures(r, t, u, e, s), function (t) {
                  i.push(t);
                });
              }),
              i
            );
          }),
          (w.prototype.applySignature = function (t) {
            return (this.inputs[t.inputIndex].addSignature(this, t), this);
          }),
          (w.prototype.isFullySigned = function () {
            return (
              n.each(this.inputs, function (t) {
                if (t.isFullySigned === _.prototype.isFullySigned)
                  throw new u.Transaction.UnableToVerifySignature(
                    "Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction",
                  );
              }),
              n.all(
                n.map(this.inputs, function (t) {
                  return t.isFullySigned();
                }),
              )
            );
          }),
          (w.prototype.isValidSignature = function (t) {
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
          (w.prototype.verifySignature = function (t, e, r, n) {
            return l.verify(this, t, e, r, n);
          }),
          (w.prototype.verify = function () {
            if (0 === this.inputs.length) return "transaction txins empty";
            if (0 === this.outputs.length) return "transaction txouts empty";
            for (var t = new O(0), e = 0; e < this.outputs.length; e++) {
              var r = this.outputs[e];
              if (r.invalidSatoshis())
                return "transaction txout " + e + " atoms is invalid";
              if (r._atomsBN.gt(new O(w.MAX_MONEY, 10)))
                return "transaction txout " + e + " greater than MAX_MONEY";
              if (((t = t.add(r._atomsBN)), t.gt(new O(w.MAX_MONEY))))
                return (
                  "transaction txout " +
                  e +
                  " total output greater than MAX_MONEY"
                );
            }
            if (this.toBuffer().length > N)
              return "transaction over the maximum block size";
            var i = {};
            for (e = 0; e < this.inputs.length; e++) {
              var s = this.inputs[e],
                o = s.prevTxId + ":" + s.outputIndex;
              if (!n.isUndefined(i[o]))
                return "transaction input " + e + " duplicate input";
              i[o] = !0;
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
          (w.prototype.isCoinbase = function () {
            return 1 === this.inputs.length && this.inputs[0].isNull();
          }),
          (t.exports = w));
      }).call(this, r(2).Buffer);
    },
    5708: function (t, e, r) {
      ((t.exports = r(4587)),
        (t.exports.PublicKey = r(11346)),
        (t.exports.PublicKeyHash = r(11347)),
        (t.exports.MultiSig = r(11348)),
        (t.exports.MultiSigScriptHash = r(11349)));
    },
    5710: function (t, e, r) {
      "use strict";
      t.exports = {
        _cache: {},
        _count: 0,
        _eraseIndex: 0,
        _usedList: {},
        _usedIndex: {},
        _CACHE_SIZE: 5e3,
        get: function (t, e, r) {
          r = !!r;
          var n = t + "/" + e + "/" + r;
          if (this._cache[n]) return (this._cacheHit(n), this._cache[n]);
        },
        set: function (t, e, r, n) {
          r = !!r;
          var i = t + "/" + e + "/" + r;
          ((this._cache[i] = n), this._cacheHit(i));
        },
        _cacheHit: function (t) {
          (this._usedIndex[t] && delete this._usedList[this._usedIndex[t]],
            (this._usedList[this._count] = t),
            (this._usedIndex[t] = this._count),
            this._count++,
            this._cacheRemove());
        },
        _cacheRemove: function () {
          while (this._eraseIndex < this._count - this._CACHE_SIZE) {
            if (this._usedList[this._eraseIndex]) {
              var t = this._usedList[this._eraseIndex];
              (delete this._usedIndex[t], delete this._cache[t]);
            }
            (delete this._usedList[this._eraseIndex], this._eraseIndex++);
          }
        },
      };
    },
    6901: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3087),
          Point = r(3970),
          i = r(3359),
          s = r(3403),
          o = r(4871),
          u = r(3126),
          a = r(2941),
          h = r(2896),
          c = r(2912),
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
              t = n.fromBuffer(o.getRandomBuffer(32));
            } while (!t.lt(e) || !t.gt(n.Zero));
            return ((this.k = t), this);
          }),
          (f.prototype.deterministicK = function (t) {
            h.isUndefined(t) && (t = 0);
            var r = new e(32);
            r.fill(1);
            var i = new e(32);
            i.fill(0);
            var s = this.privkey.bn.toBuffer({ size: 32 }),
              o =
                "little" === this.endian
                  ? a.reverse(this.hashbuf)
                  : this.hashbuf;
            ((i = u.sha256hmac(e.concat([r, new e([0]), s, o]), i)),
              (r = u.sha256hmac(r, i)),
              (i = u.sha256hmac(e.concat([r, new e([1]), s, o]), i)),
              (r = u.sha256hmac(r, i)),
              (r = u.sha256hmac(r, i)));
            for (
              var c = n.fromBuffer(r), f = Point.getN(), p = 0;
              p < t || !c.lt(f) || !c.gt(n.Zero);
              p++
            )
              ((i = u.sha256hmac(e.concat([r, new e([0])]), i)),
                (r = u.sha256hmac(r, i)),
                (r = u.sha256hmac(r, i)),
                (c = n.fromBuffer(r)));
            return ((this.k = c), this);
          }),
          (f.prototype.toPublicKey = function () {
            var t = this.sig.i;
            c.checkArgument(
              0 === t || 1 === t || 2 === t || 3 === t,
              new Error("i must be equal to 0, 1, 2, or 3"),
            );
            var e = n.fromBuffer(this.hashbuf),
              r = this.sig.r,
              i = this.sig.s,
              o = 1 & t,
              u = t >> 1,
              a = Point.getN(),
              h = Point.getG(),
              f = u ? r.add(a) : r,
              p = Point.fromX(o, f),
              d = p.mul(a);
            if (!d.isInfinity())
              throw new Error("nR is not a valid curve point");
            var l = e.neg().mod(a),
              g = r.invm(a),
              m = p.mul(i).add(h.mul(l)).mul(g),
              _ = s.fromPoint(m, this.sig.compressed);
            return _;
          }),
          (f.prototype.sigError = function () {
            if (!a.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length)
              return "hashbuf must be a 32 byte buffer";
            var t = this.sig.r,
              e = this.sig.s;
            if (
              !t.gt(n.Zero) ||
              !t.lt(Point.getN()) ||
              !e.gt(n.Zero) ||
              !e.lt(Point.getN())
            )
              return "r and s not in range";
            var r = n.fromBuffer(
                this.hashbuf,
                this.endian ? { endian: this.endian } : void 0,
              ),
              i = Point.getN(),
              s = e.invm(i),
              o = s.mul(r).mod(i),
              u = s.mul(t).mod(i),
              h = Point.getG().mulAdd(o, this.pubkey.point, u);
            return h.isInfinity()
              ? "p is infinity"
              : 0 !== h.getX().mod(i).cmp(t) && "Invalid signature";
          }),
          (f.toLowS = function (t) {
            return (
              t.gt(
                n.fromBuffer(
                  new e(
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
              i,
              s,
              o,
              u = Point.getN(),
              a = Point.getG(),
              h = 0;
            do {
              ((!this.k || h > 0) && this.deterministicK(h),
                h++,
                (r = this.k),
                (i = a.mul(r)),
                (s = i.x.mod(u)),
                (o = r
                  .invm(u)
                  .mul(e.add(t.mul(s)))
                  .mod(u)));
            } while (s.cmp(n.Zero) <= 0 || o.cmp(n.Zero) <= 0);
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
            var s = n.fromBuffer(
                t,
                this.endian ? { endian: this.endian } : void 0,
              ),
              o = this._findSignature(r, s);
            return (
              (o.compressed = this.pubkey.compressed),
              (this.sig = new i(o)),
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
          (f.verify = function (t, e, r, n) {
            return f()
              .set({ hashbuf: t, endian: n, sig: e, pubkey: r })
              .verify().verified;
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    6902: function (t, e, r) {
      const n = r(2896);
      ((n.all = n.every),
        (n.contains = n.includes),
        (n.any = n.some),
        (t.exports = n));
    },
    6903: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(3849),
          i = r(3619),
          s = r(3404),
          o = r(3126),
          u = r(5706),
          a = r(3403),
          h = r(3359),
          c = r(3848),
          f = r(2912),
          p = r(2896),
          d = r(3358),
          l = r(2),
          g = r(2941),
          m = r(3036),
          _ = function t(e) {
            return this instanceof t
              ? ((this.chunks = []),
                g.isBuffer(e)
                  ? t.fromBuffer(e)
                  : e instanceof n
                    ? t.fromAddress(e)
                    : e instanceof t
                      ? t.fromBuffer(e.toBuffer())
                      : "string" === typeof e
                        ? t.fromString(e)
                        : void ("undefined" !== typeof e && this.set(e)))
              : new t(e);
          };
        ((_.prototype.set = function (t) {
          return ((this.chunks = t.chunks || this.chunks), this);
        }),
          (_.fromBuffer = function (t) {
            var e = new _();
            e.chunks = [];
            var r = new i(t);
            while (!r.finished())
              try {
                var n,
                  s,
                  o = r.readUInt8();
                o > 0 && o < u.OP_PUSHDATA1
                  ? ((n = o),
                    e.chunks.push({ buf: r.read(n), len: n, opcodenum: o }))
                  : o === u.OP_PUSHDATA1
                    ? ((n = r.readUInt8()),
                      (s = r.read(n)),
                      e.chunks.push({ buf: s, len: n, opcodenum: o }))
                    : o === u.OP_PUSHDATA2
                      ? ((n = r.readUInt16LE()),
                        (s = r.read(n)),
                        e.chunks.push({ buf: s, len: n, opcodenum: o }))
                      : o === u.OP_PUSHDATA4
                        ? ((n = r.readUInt32LE()),
                          (s = r.read(n)),
                          e.chunks.push({ buf: s, len: n, opcodenum: o }))
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
                n = r.opcodenum;
              (t.writeUInt8(r.opcodenum),
                r.buf &&
                  (n < u.OP_PUSHDATA1
                    ? t.write(r.buf)
                    : n === u.OP_PUSHDATA1
                      ? (t.writeUInt8(r.len), t.write(r.buf))
                      : n === u.OP_PUSHDATA2
                        ? (t.writeUInt16LE(r.len), t.write(r.buf))
                        : n === u.OP_PUSHDATA4 &&
                          (t.writeUInt32LE(r.len), t.write(r.buf))));
            }
            return t.concat();
          }),
          (_.fromASM = function (t) {
            var r = new _();
            r.chunks = [];
            var n = t.split(" "),
              i = 0;
            while (i < n.length) {
              var s = n[i],
                o = u(s),
                a = o.toNumber();
              if (p.isUndefined(a)) {
                var h = new e(n[i], "hex");
                (r.chunks.push({ buf: h, len: h.length, opcodenum: h.length }),
                  (i += 1));
              } else
                a === u.OP_PUSHDATA1 ||
                a === u.OP_PUSHDATA2 ||
                a === u.OP_PUSHDATA4
                  ? (r.chunks.push({
                      buf: new e(n[i + 2], "hex"),
                      len: parseInt(n[i + 1]),
                      opcodenum: a,
                    }),
                    (i += 3))
                  : (r.chunks.push({ opcodenum: a }), (i += 1));
            }
            return r;
          }),
          (_.fromHex = function (t) {
            return new _(new l.Buffer(t, "hex"));
          }),
          (_.fromString = function (t) {
            if (m.isHexa(t) || 0 === t.length)
              return new _(new l.Buffer(t, "hex"));
            var r = new _();
            r.chunks = [];
            var n = t.split(" "),
              i = 0;
            while (i < n.length) {
              var s = n[i],
                o = u(s),
                a = o.toNumber();
              if (p.isUndefined(a)) {
                if (((a = parseInt(s)), !(a > 0 && a < u.OP_PUSHDATA1)))
                  throw new Error("Invalid script: " + JSON.stringify(t));
                (r.chunks.push({
                  buf: new e(n[i + 1].slice(2), "hex"),
                  len: a,
                  opcodenum: a,
                }),
                  (i += 2));
              } else if (
                a === u.OP_PUSHDATA1 ||
                a === u.OP_PUSHDATA2 ||
                a === u.OP_PUSHDATA4
              ) {
                if ("0x" !== n[i + 2].slice(0, 2))
                  throw new Error("Pushdata data must start with 0x");
                (r.chunks.push({
                  buf: new e(n[i + 2].slice(2), "hex"),
                  len: parseInt(n[i + 1]),
                  opcodenum: a,
                }),
                  (i += 3));
              } else (r.chunks.push({ opcodenum: a }), (i += 1));
            }
            return r;
          }),
          (_.prototype._chunkToString = function (t, e) {
            var r = t.opcodenum,
              n = "asm" === e,
              i = "";
            if (t.buf)
              ((r !== u.OP_PUSHDATA1 &&
                r !== u.OP_PUSHDATA2 &&
                r !== u.OP_PUSHDATA4) ||
                (i = i + " " + u(r).toString()),
                t.len > 0 &&
                  (i = n
                    ? i + " " + t.buf.toString("hex")
                    : i + " " + t.len + " 0x" + t.buf.toString("hex")));
            else if ("undefined" !== typeof u.reverseMap[r])
              i = i + " " + u(r).toString();
            else {
              var s = r.toString(16);
              (s.length % 2 !== 0 && (s = "0" + s),
                (i = n ? i + " " + s : i + " 0x" + s));
            }
            return i;
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
              if (t && t.length && 48 === t[0] && e && e.length) {
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
                this.isPublicKeyOut(),
                "Can't retreive PublicKey from a non-PK output",
              ),
              this.chunks[0].buf
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
            } catch (i) {
              if (i instanceof d.Script.InvalidBuffer) return !1;
              throw i;
            }
            var n = t.classify();
            return n !== _.types.UNKNOWN;
          }),
          (_.prototype.isMultisigOut = function () {
            return (
              this.chunks.length > 3 &&
              u.isSmallIntOp(this.chunks[0].opcodenum) &&
              this.chunks.slice(1, this.chunks.length - 2).every(function (t) {
                return t.buf && g.isBuffer(t.buf);
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
                return t.buf && g.isBuffer(t.buf) && h.isTxDER(t.buf);
              })
            );
          }),
          (_.prototype.isDataOut = function () {
            return (
              this.chunks.length >= 1 &&
              this.chunks[0].opcodenum === u.OP_RETURN &&
              (1 === this.chunks.length ||
                (2 === this.chunks.length &&
                  this.chunks[1].buf &&
                  this.chunks[1].buf.length <= _.OP_RETURN_STANDARD_SIZE &&
                  this.chunks[1].length === this.chunks.len))
            );
          }),
          (_.prototype.getData = function () {
            if (this.isDataOut() || this.isScriptHashOut())
              return p.isUndefined(this.chunks[1])
                ? new e(0)
                : new e(this.chunks[1].buf);
            if (this.isPublicKeyHashOut()) return new e(this.chunks[2].buf);
            throw new Error("Unrecognized script type to get data from");
          }),
          (_.prototype.isPushOnly = function () {
            return p.every(this.chunks, function (t) {
              return t.opcodenum <= u.OP_16;
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
          (_.OP_RETURN_STANDARD_SIZE = 80),
          (_.identifiers = {}),
          (_.identifiers.PUBKEY_OUT = _.prototype.isPublicKeyOut),
          (_.identifiers.PUBKEY_IN = _.prototype.isPublicKeyIn),
          (_.identifiers.PUBKEYHASH_OUT = _.prototype.isPublicKeyHashOut),
          (_.identifiers.PUBKEYHASH_IN = _.prototype.isPublicKeyHashIn),
          (_.identifiers.MULTISIG_OUT = _.prototype.isMultisigOut),
          (_.identifiers.MULTISIG_IN = _.prototype.isMultisigIn),
          (_.identifiers.SCRIPTHASH_OUT = _.prototype.isScriptHashOut),
          (_.identifiers.SCRIPTHASH_IN = _.prototype.isScriptHashIn),
          (_.identifiers.DATA_OUT = _.prototype.isDataOut),
          (_.prototype.classify = function () {
            for (var t in _.identifiers)
              if (_.identifiers[t].bind(this)()) return _.types[t];
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
                g.isBuffer(this.chunks[e].buf) &&
                !g.isBuffer(t.chunks[e].buf)
              )
                return !1;
              if (
                g.isBuffer(this.chunks[e].buf) &&
                !g.equals(this.chunks[e].buf, t.chunks[e].buf)
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
            else if (g.isBuffer(t)) this._addBuffer(t, e);
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
              n = t.length;
            if (n >= 0 && n < u.OP_PUSHDATA1) r = n;
            else if (n < Math.pow(2, 8)) r = u.OP_PUSHDATA1;
            else if (n < Math.pow(2, 16)) r = u.OP_PUSHDATA2;
            else {
              if (!(n < Math.pow(2, 32)))
                throw new Error("You can't push that much data");
              r = u.OP_PUSHDATA4;
            }
            return (
              this._insertAtPosition({ buf: t, len: n, opcodenum: r }, e),
              this
            );
          }),
          (_.prototype.removeCodeseparators = function () {
            for (var t = [], e = 0; e < this.chunks.length; e++)
              this.chunks[e].opcodenum !== u.OP_CODESEPARATOR &&
                t.push(this.chunks[e]);
            return ((this.chunks = t), this);
          }),
          (_.buildMultisigOut = function (t, e, r) {
            (f.checkArgument(
              e <= t.length,
              "Number of required signatures must be less than or equal to the number of public keys",
            ),
              (r = r || {}));
            var n = new _();
            (n.add(u.smallInt(e)), (t = p.map(t, a)));
            var i = t;
            r.noSorting ||
              (i = p.sortBy(t, function (t) {
                return t.toString("hex");
              }));
            for (var s = 0; s < i.length; s++) {
              var o = i[s];
              n.add(o.toBuffer());
            }
            return (n.add(u.smallInt(t.length)), n.add(u.OP_CHECKMULTISIG), n);
          }),
          (_.buildMultisigIn = function (t, e, r, n) {
            (f.checkArgument(p.isArray(t)),
              f.checkArgument(p.isNumber(e)),
              f.checkArgument(p.isArray(r)),
              (n = n || {}));
            var i = new _();
            return (
              i.add(u.OP_0),
              p.each(r, function (t) {
                (f.checkArgument(
                  g.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  i.add(t));
              }),
              i
            );
          }),
          (_.buildP2SHMultisigIn = function (t, e, r, n) {
            (f.checkArgument(p.isArray(t)),
              f.checkArgument(p.isNumber(e)),
              f.checkArgument(p.isArray(r)),
              (n = n || {}));
            var i = new _();
            return (
              p.each(r, function (t) {
                (f.checkArgument(
                  g.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  i.add(t));
              }),
              i.add(
                (n.cachedMultisig || _.buildMultisigOut(t, e, n)).toBuffer(),
              ),
              i
            );
          }),
          (_.buildPublicKeyHashOut = function (t) {
            (f.checkArgument(!p.isUndefined(t)),
              f.checkArgument(
                t instanceof a || t instanceof n || p.isString(t),
              ),
              t instanceof a
                ? (t = t.toAddress())
                : p.isString(t) && (t = new n(t)));
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
              p.isUndefined(t) || p.isString(t) || g.isBuffer(t),
            ),
              p.isString(t) && (t = new e(t, r)));
            var n = new _();
            return (n.add(u.OP_RETURN), p.isUndefined(t) || n.add(t), n);
          }),
          (_.buildScriptHashOut = function (t) {
            f.checkArgument(
              t instanceof _ || (t instanceof n && t.isPayToScriptHash()),
            );
            var e = new _();
            return (
              e
                .add(u.OP_HASH160)
                .add(
                  t instanceof n
                    ? t.hashBuffer
                    : o.blake256ripemd160(t.toBuffer()),
                )
                .add(u.OP_EQUAL),
              (e._network = t._network || t.network),
              e
            );
          }),
          (_.buildPublicKeyIn = function (t, e) {
            (f.checkArgument(t instanceof h || g.isBuffer(t)),
              f.checkArgument(p.isUndefined(e) || p.isNumber(e)),
              t instanceof h && (t = t.toBuffer()));
            var r = new _();
            return (
              r.add(
                g.concat([t, g.integerAsSingleByteBuffer(e || h.SIGHASH_ALL)]),
              ),
              r
            );
          }),
          (_.buildPublicKeyHashIn = function (t, e, r) {
            (f.checkArgument(e instanceof h || g.isBuffer(e)),
              f.checkArgument(p.isUndefined(r) || p.isNumber(r)),
              e instanceof h && (e = e.toBuffer()));
            var n = new _()
              .add(
                g.concat([e, g.integerAsSingleByteBuffer(r || h.SIGHASH_ALL)]),
              )
              .add(new a(t).toBuffer());
            return n;
          }),
          (_.empty = function () {
            return new _();
          }),
          (_.prototype.toScriptHashOut = function () {
            return _.buildScriptHashOut(this);
          }),
          (_.fromAddress = function (t) {
            if (((t = n(t)), t.isPayToScriptHash()))
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
              ((t.hashBuffer = this.getData()), (t.type = n.PayToScriptHash));
            else {
              if (!this.isPublicKeyHashOut()) return !1;
              ((t.hashBuffer = this.getData()),
                (t.type = n.PayToPublicKeyHash));
            }
            return t;
          }),
          (_.prototype._getInputAddressInfo = function () {
            var t = {};
            if (this.isPublicKeyHashIn())
              ((t.hashBuffer = o.blake256ripemd160(this.chunks[1].buf)),
                (t.type = n.PayToPublicKeyHash));
            else {
              if (!this.isScriptHashIn()) return !1;
              ((t.hashBuffer = o.blake256ripemd160(
                this.chunks[this.chunks.length - 1].buf,
              )),
                (t.type = n.PayToScriptHash));
            }
            return t;
          }),
          (_.prototype.toAddress = function (t) {
            var e = this.getAddressInfo();
            return (
              !!e &&
              ((e.network = c.get(t) || this._network || c.defaultNetwork),
              new n(e))
            );
          }),
          (_.prototype.findAndDelete = function (t) {
            for (
              var e = t.toBuffer(), r = e.toString("hex"), n = 0;
              n < this.chunks.length;
              n++
            ) {
              var i = _({ chunks: [this.chunks[n]] }),
                s = i.toBuffer(),
                o = s.toString("hex");
              r === o && this.chunks.splice(n, 1);
            }
            return this;
          }),
          (_.prototype.checkMinimalPush = function (t) {
            var e = this.chunks[t],
              r = e.buf,
              n = e.opcodenum;
            return (
              !r ||
              (0 === r.length
                ? n === u.OP_0
                : 1 === r.length && r[0] >= 1 && r[0] <= 16
                  ? n === u.OP_1 + (r[0] - 1)
                  : 1 === r.length && 129 === r[0]
                    ? n === u.OP_1NEGATE
                    : r.length <= 75
                      ? n === r.length
                      : r.length <= 255
                        ? n === u.OP_PUSHDATA1
                        : !(r.length <= 65535) || n === u.OP_PUSHDATA2)
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
              n = u.OP_INVALIDOPCODE;
            return (
              p.each(e.chunks, function (i) {
                var s = i.opcodenum;
                (s == u.OP_CHECKSIG || s == u.OP_CHECKSIGVERIFY
                  ? r++
                  : (s != u.OP_CHECKMULTISIG &&
                      s != u.OP_CHECKMULTISIGVERIFY) ||
                    (t && n >= u.OP_1 && n <= u.OP_16
                      ? (r += e._decodeOP_N(n))
                      : (r += 20)),
                  (n = s));
              }),
              r
            );
          }),
          (t.exports = _));
      }).call(this, r(2).Buffer);
    },
    6904: function (t, e, r) {
      "use strict";
      var n = r(2896),
        i = r(2912),
        s = r(3036),
        o = r(3360),
        u = r(3849),
        a = r(5709);
      function h(t) {
        if (!(this instanceof h)) return new h(t);
        i.checkArgument(
          n.isObject(t),
          "Must provide an object from where to extract data",
        );
        var e = t.address ? new u(t.address) : void 0,
          r = t.txid ? t.txid : t.txId;
        if (!r || !s.isHexaString(r) || r.length > 64)
          throw new Error("Invalid TXID in object", t);
        var c = n.isUndefined(t.vout) ? t.outputIndex : t.vout;
        if (!n.isNumber(c))
          throw new Error("Invalid outputIndex, received " + c);
        i.checkArgument(
          !n.isUndefined(t.scriptPubKey) || !n.isUndefined(t.script),
          "Must provide the scriptPubKey for that output!",
        );
        var f = new o(t.scriptPubKey || t.script);
        i.checkArgument(
          !n.isUndefined(t.amount) || !n.isUndefined(t.atoms),
          "Must provide an amount for the output",
        );
        var p = n.isUndefined(t.amount)
          ? t.atoms
          : new a.fromDCR(t.amount).toAtoms();
        (i.checkArgument(n.isNumber(p), "Amount must be a number"),
          s.defineImmutable(this, {
            address: e,
            txId: r,
            outputIndex: c,
            script: f,
            atoms: p,
          }));
      }
      ((h.prototype.inspect = function () {
        return (
          "<UnspentOutput: " +
          this.txId +
          ":" +
          this.outputIndex +
          ", atoms: " +
          this.atoms +
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
              amount: a.fromAtoms(this.atoms).toDCR(),
            };
          }),
        (t.exports = h));
    },
    6905: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(4872),
          s = r(2941),
          o = r(3619),
          u = r(3404),
          a = r(3126),
          h = (r(3036), r(4870)),
          c = r(2912);
        function f(t) {
          if (!(this instanceof f)) return new f(t);
          var e = {};
          if (s.isBuffer(t)) e = f._fromBufferReader(o(t));
          else {
            if (!n.isObject(t))
              throw new TypeError("Unrecognized argument for MerkleBlock");
            var r;
            ((r = t.header instanceof i ? t.header : i.fromObject(t.header)),
              (e = {
                header: r,
                numTransactions: t.numTransactions,
                hashes: t.hashes,
                flags: t.flags,
              }));
          }
          return (
            n.extend(this, e),
            (this._flagBitsUsed = 0),
            (this._hashesUsed = 0),
            this
          );
        }
        ((f.fromBuffer = function (t) {
          return f.fromBufferReader(o(t));
        }),
          (f.fromBufferReader = function (t) {
            return new f(f._fromBufferReader(t));
          }),
          (f.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (f.prototype.toBufferWriter = function (t) {
            (t || (t = new u()),
              t.write(this.header.toBuffer()),
              t.writeUInt32LE(this.numTransactions),
              t.writeVarintNum(this.hashes.length));
            for (var r = 0; r < this.hashes.length; r++)
              t.write(new e(this.hashes[r], "hex"));
            for (
              t.writeVarintNum(this.flags.length), r = 0;
              r < this.flags.length;
              r++
            )
              t.writeUInt8(this.flags[r]);
            return t;
          }),
          (f.prototype.toObject = f.prototype.toJSON =
            function () {
              return {
                header: this.header.toObject(),
                numTransactions: this.numTransactions,
                hashes: this.hashes,
                flags: this.flags,
              };
            }),
          (f.prototype.validMerkleTree = function () {
            if (
              (c.checkState(
                n.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              c.checkState(
                n.isArray(this.hashes),
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
          (f.prototype._traverseMerkleTree = function (t, r, n) {
            if (
              ((n = n || {}),
              (n.txs = n.txs || []),
              (n.flagBitsUsed = n.flagBitsUsed || 0),
              (n.hashesUsed = n.hashesUsed || 0),
              n.flagBitsUsed > 8 * this.flags.length)
            )
              return null;
            var i =
              (this.flags[n.flagBitsUsed >> 3] >>> (7 & n.flagBitsUsed++)) & 1;
            if (0 !== t && i) {
              var s = this._traverseMerkleTree(t - 1, 2 * r, n),
                o = s;
              return (
                2 * r + 1 < this._calcTreeWidth(t - 1) &&
                  (o = this._traverseMerkleTree(t - 1, 2 * r + 1, n)),
                a.blake256(new e.concat([s, o]))
              );
            }
            if (n.hashesUsed >= this.hashes.length) return null;
            var u = this.hashes[n.hashesUsed++];
            return (0 === t && i && n.txs.push(u), new e(u, "hex"));
          }),
          (f.prototype._calcTreeWidth = function (t) {
            return (this.numTransactions + (1 << t) - 1) >> t;
          }),
          (f.prototype._calcTreeHeight = function () {
            var t = 0;
            while (this._calcTreeWidth(t) > 1) t++;
            return t;
          }),
          (f.prototype.hasTransaction = function (t) {
            (c.checkArgument(!n.isUndefined(t), "tx cannot be undefined"),
              c.checkArgument(
                t instanceof h || "string" === typeof t,
                'Invalid tx given, tx must be a "string" or "Transaction"',
              ));
            var r = t;
            t instanceof h &&
              (r = s.reverse(new e(t.id, "hex")).toString("hex"));
            var i = [],
              o = this._calcTreeHeight();
            return (
              this._traverseMerkleTree(o, 0, { txs: i }),
              -1 !== i.indexOf(r)
            );
          }),
          (f._fromBufferReader = function (t) {
            c.checkState(!t.finished(), "No merkleblock data received");
            var e = {};
            ((e.header = i.fromBufferReader(t)),
              (e.numTransactions = t.readUInt32LE()));
            var r = t.readVarintNum();
            e.hashes = [];
            for (var n = 0; n < r; n++)
              e.hashes.push(t.read(32).toString("hex"));
            var s = t.readVarintNum();
            for (e.flags = [], n = 0; n < s; n++) e.flags.push(t.readUInt8());
            return e;
          }),
          (f.fromObject = function (t) {
            return new f(t);
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    6906: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(229),
          i = r(2),
          s = r(2896),
          o = r(2912),
          u = r(3087),
          a = r(4869),
          h = r(4586),
          c = r(3126),
          f = r(3848),
          p = r(5710),
          Point = r(3970),
          d = r(4868),
          l = r(4871),
          g = r(3358),
          m = g.HDPrivateKey,
          _ = r(2941),
          y = r(3036),
          S = 128,
          b = 1 / 8,
          v = 512;
        function I(t) {
          if (t instanceof I) return t;
          if (!(this instanceof I)) return new I(t);
          if (!t) return this._generateRandomly();
          if (f.get(t)) return this._generateRandomly(t);
          if (s.isString(t) || _.isBuffer(t))
            if (I.isValidSerialized(t)) this._buildFromSerialized(t);
            else if (y.isValidJSON(t)) this._buildFromJSON(t);
            else {
              if (!_.isBuffer(t) || !I.isValidSerialized(t.toString()))
                throw I.getSerializedError(t);
              this._buildFromSerialized(t.toString());
            }
          else {
            if (!s.isObject(t)) throw new m.UnrecognizedArgument(t);
            this._buildFromObject(t);
          }
        }
        ((I.isValidPath = function (t, e) {
          if (s.isString(t)) {
            var r = I._getDerivationIndexes(t);
            return null !== r && s.all(r, I.isValidPath);
          }
          return (
            !!s.isNumber(t) &&
            (t < I.Hardened && !0 === e && (t += I.Hardened),
            t >= 0 && t < I.MaxIndex)
          );
        }),
          (I._getDerivationIndexes = function (t) {
            var e = t.split("/");
            if (s.contains(I.RootElementAlias, t)) return [];
            if (!s.contains(I.RootElementAlias, e[0])) return null;
            var r = e.slice(1).map(function (t) {
              var e = "'" === t.slice(-1);
              if ((e && (t = t.slice(0, -1)), !t || "-" === t[0])) return NaN;
              var r = +t;
              return (e && (r += I.Hardened), r);
            });
            return s.any(r, isNaN) ? null : r;
          }),
          (I.prototype.derive = function (t, e) {
            if (s.isNumber(t)) return this._deriveWithNumber(t, e);
            if (s.isString(t)) return this._deriveFromString(t);
            throw new m.InvalidDerivationArgument(t);
          }),
          (I.prototype._deriveWithNumber = function (t, e) {
            if (!I.isValidPath(t, e)) throw new m.InvalidPath(t);
            ((e = t >= I.Hardened || e),
              t < I.Hardened && !0 === e && (t += I.Hardened));
            var r = p.get(this.xprivkey, t, e);
            if (r) return r;
            var n,
              s = _.integerAsBuffer(t);
            n = e
              ? _.concat([new i.Buffer([0]), this.privateKey.toBuffer(), s])
              : _.concat([this.publicKey.toBuffer(), s]);
            var o = c.sha512hmac(n, this._buffers.chainCode),
              a = u.fromBuffer(o.slice(0, 32), { size: 32 }),
              h = o.slice(32, 64),
              f = a
                .add(this.privateKey.toBigNumber())
                .mod(Point.getN())
                .toBuffer({ size: 32 }),
              d = new I({
                network: this.network,
                depth: this.depth + 1,
                parentFingerPrint: this.fingerPrint,
                childIndex: t,
                chainCode: h,
                privateKey: f,
              });
            return (p.set(this.xprivkey, t, e, d), d);
          }),
          (I.prototype._deriveFromString = function (t) {
            if (!I.isValidPath(t)) throw new m.InvalidPath(t);
            var e = I._getDerivationIndexes(t),
              r = e.reduce(function (t, e) {
                return t._deriveWithNumber(e);
              }, this);
            return r;
          }),
          (I.isValidSerialized = function (t, e) {
            return !I.getSerializedError(t, e);
          }),
          (I.getSerializedError = function (t, e) {
            if (!s.isString(t) && !_.isBuffer(t))
              return new m.UnrecognizedArgument("Expected string or buffer");
            if (!a.validCharacters(t))
              return new g.InvalidB58Char("(unknown)", t);
            try {
              t = h.decode(t);
            } catch (n) {
              return new g.InvalidB58Checksum(t);
            }
            if (t.length !== I.DataLength) return new m.InvalidLength(t);
            if (!s.isUndefined(e)) {
              var r = I._validateNetwork(t, e);
              if (r) return r;
            }
            return null;
          }),
          (I._validateNetwork = function (t, e) {
            var r = f.get(e);
            if (!r) return new g.InvalidNetworkArgument(e);
            var n = t.slice(0, 4);
            return _.integerFromBuffer(n) !== r.xprivkey
              ? new g.InvalidNetwork(n)
              : null;
          }),
          (I.fromString = function (t) {
            return (
              o.checkArgument(s.isString(t), "No valid string was provided"),
              new I(t)
            );
          }),
          (I.fromObject = function (t) {
            return (
              o.checkArgument(s.isObject(t), "No valid argument was provided"),
              new I(t)
            );
          }),
          (I.prototype._buildFromJSON = function (t) {
            return this._buildFromObject(JSON.parse(t));
          }),
          (I.prototype._buildFromObject = function (t) {
            var e = {
              version: t.network
                ? _.integerAsBuffer(f.get(t.network).xprivkey)
                : t.version,
              depth: s.isNumber(t.depth)
                ? _.integerAsSingleByteBuffer(t.depth)
                : t.depth,
              parentFingerPrint: s.isNumber(t.parentFingerPrint)
                ? _.integerAsBuffer(t.parentFingerPrint)
                : t.parentFingerPrint,
              childIndex: s.isNumber(t.childIndex)
                ? _.integerAsBuffer(t.childIndex)
                : t.childIndex,
              chainCode: s.isString(t.chainCode)
                ? _.hexToBuffer(t.chainCode)
                : t.chainCode,
              privateKey:
                s.isString(t.privateKey) && y.isHexa(t.privateKey)
                  ? _.hexToBuffer(t.privateKey)
                  : t.privateKey,
              checksum: t.checksum
                ? t.checksum.length
                  ? t.checksum
                  : _.integerAsBuffer(t.checksum)
                : void 0,
            };
            return this._buildFromBuffers(e);
          }),
          (I.prototype._buildFromSerialized = function (t) {
            var e = h.decode(t),
              r = {
                version: e.slice(I.VersionStart, I.VersionEnd),
                depth: e.slice(I.DepthStart, I.DepthEnd),
                parentFingerPrint: e.slice(
                  I.ParentFingerPrintStart,
                  I.ParentFingerPrintEnd,
                ),
                childIndex: e.slice(I.ChildIndexStart, I.ChildIndexEnd),
                chainCode: e.slice(I.ChainCodeStart, I.ChainCodeEnd),
                privateKey: e.slice(I.PrivateKeyStart, I.PrivateKeyEnd),
                checksum: e.slice(I.ChecksumStart, I.ChecksumEnd),
                xprivkey: t,
              };
            return this._buildFromBuffers(r);
          }),
          (I.prototype._generateRandomly = function (t) {
            return I.fromSeed(l.getRandomBuffer(64), t);
          }),
          (I.fromSeed = function (t, r) {
            if ((y.isHexaString(t) && (t = _.hexToBuffer(t)), !e.isBuffer(t)))
              throw new m.InvalidEntropyArgument(t);
            if (t.length < S * b)
              throw new m.InvalidEntropyArgument.NotEnoughEntropy(t);
            if (t.length > v * b)
              throw new m.InvalidEntropyArgument.TooMuchEntropy(t);
            var n = c.sha512hmac(t, new i.Buffer("Bitcoin seed"));
            return new I({
              network: f.get(r) || f.defaultNetwork,
              depth: 0,
              parentFingerPrint: 0,
              childIndex: 0,
              privateKey: n.slice(0, 32),
              chainCode: n.slice(32, 64),
            });
          }),
          (I.prototype._calcHDPublicKey = function () {
            if (!this._hdPublicKey) {
              var t = r(6907);
              this._hdPublicKey = new t(this);
            }
          }),
          (I.prototype._buildFromBuffers = function (t) {
            (I._validateBufferArguments(t),
              y.defineImmutable(this, { _buffers: t }));
            var r = [
                t.version,
                t.depth,
                t.parentFingerPrint,
                t.childIndex,
                t.chainCode,
                _.emptyBuffer(1),
                t.privateKey,
              ],
              n = i.Buffer.concat(r);
            if (t.checksum && t.checksum.length) {
              if (t.checksum.toString() !== h.checksum(n).toString())
                throw new g.InvalidB58Checksum(n);
            } else t.checksum = h.checksum(n);
            var s,
              o = f.get(_.integerFromBuffer(t.version));
            ((s = h.encode(i.Buffer.concat(r))), (t.xprivkey = new e(s)));
            var a = new d(u.fromBuffer(t.privateKey), o),
              p = a.toPublicKey(),
              l = I.ParentFingerPrintSize,
              m = c.blake256ripemd160(p.toBuffer()).slice(0, l);
            return (
              y.defineImmutable(this, {
                xprivkey: s,
                network: o,
                depth: _.integerFromSingleByteBuffer(t.depth),
                privateKey: a,
                publicKey: p,
                fingerPrint: m,
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
          (I._validateBufferArguments = function (t) {
            var e = function (e, r) {
              var i = t[e];
              (n(_.isBuffer(i), e + " argument is not a buffer"),
                n(
                  i.length === r,
                  e +
                    " has not the expected size: found " +
                    i.length +
                    ", expected " +
                    r,
                ));
            };
            (e("version", I.VersionSize),
              e("depth", I.DepthSize),
              e("parentFingerPrint", I.ParentFingerPrintSize),
              e("childIndex", I.ChildIndexSize),
              e("chainCode", I.ChainCodeSize),
              e("privateKey", I.PrivateKeySize),
              t.checksum && t.checksum.length && e("checksum", I.CheckSumSize));
          }),
          (I.prototype.toString = function () {
            return this.xprivkey;
          }),
          (I.prototype.inspect = function () {
            return "<HDPrivateKey: " + this.xprivkey + ">";
          }),
          (I.prototype.toObject = I.prototype.toJSON =
            function () {
              return {
                network: f.get(
                  _.integerFromBuffer(this._buffers.version),
                  "xprivkey",
                ).name,
                depth: _.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: _.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: _.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: _.integerFromBuffer(this._buffers.childIndex),
                chainCode: _.bufferToHex(this._buffers.chainCode),
                privateKey: this.privateKey.toBuffer().toString("hex"),
                checksum: _.integerFromBuffer(this._buffers.checksum),
                xprivkey: this.xprivkey,
              };
            }),
          (I.fromBuffer = function (t) {
            return new I(t.toString());
          }),
          (I.prototype.toBuffer = function () {
            return _.copy(this._buffers.xprivkey);
          }),
          (I.DefaultDepth = 0),
          (I.DefaultFingerprint = 0),
          (I.DefaultChildIndex = 0),
          (I.Hardened = 2147483648),
          (I.MaxIndex = 2 * I.Hardened),
          (I.RootElementAlias = ["m", "M", "m'", "M'"]),
          (I.VersionSize = 4),
          (I.DepthSize = 1),
          (I.ParentFingerPrintSize = 4),
          (I.ChildIndexSize = 4),
          (I.ChainCodeSize = 32),
          (I.PrivateKeySize = 32),
          (I.CheckSumSize = 4),
          (I.DataLength = 78),
          (I.SerializedByteSize = 82),
          (I.VersionStart = 0),
          (I.VersionEnd = I.VersionStart + I.VersionSize),
          (I.DepthStart = I.VersionEnd),
          (I.DepthEnd = I.DepthStart + I.DepthSize),
          (I.ParentFingerPrintStart = I.DepthEnd),
          (I.ParentFingerPrintEnd =
            I.ParentFingerPrintStart + I.ParentFingerPrintSize),
          (I.ChildIndexStart = I.ParentFingerPrintEnd),
          (I.ChildIndexEnd = I.ChildIndexStart + I.ChildIndexSize),
          (I.ChainCodeStart = I.ChildIndexEnd),
          (I.ChainCodeEnd = I.ChainCodeStart + I.ChainCodeSize),
          (I.PrivateKeyStart = I.ChainCodeEnd + 1),
          (I.PrivateKeyEnd = I.PrivateKeyStart + I.PrivateKeySize),
          (I.ChecksumStart = I.PrivateKeyEnd),
          (I.ChecksumEnd = I.ChecksumStart + I.CheckSumSize),
          n(I.ChecksumEnd === I.SerializedByteSize),
          (t.exports = I));
      }).call(this, r(2).Buffer);
    },
    6907: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r(2896),
          i = r(2912),
          s = r(3087),
          o = r(4869),
          u = r(4586),
          a = r(3126),
          h = r(6906),
          c = r(5710),
          f = r(3848),
          Point = r(3970),
          p = r(3403),
          d = r(3358),
          l = d,
          g = d.HDPublicKey,
          m = r(229),
          _ = r(3036),
          y = r(2941);
        function S(t) {
          if (t instanceof S) return t;
          if (!(this instanceof S)) return new S(t);
          if (t) {
            if (n.isString(t) || y.isBuffer(t)) {
              var e = S.getSerializedError(t);
              if (e) {
                if (y.isBuffer(t) && !S.getSerializedError(t.toString()))
                  return this._buildFromSerialized(t.toString());
                if (e instanceof g.ArgumentIsPrivateExtended)
                  return new h(t).hdPublicKey;
                throw e;
              }
              return this._buildFromSerialized(t);
            }
            if (n.isObject(t))
              return t instanceof h
                ? this._buildFromPrivate(t)
                : this._buildFromObject(t);
            throw new g.UnrecognizedArgument(t);
          }
          throw new g.MustSupplyArgument();
        }
        ((S.isValidPath = function (t) {
          if (n.isString(t)) {
            var e = h._getDerivationIndexes(t);
            return null !== e && n.all(e, S.isValidPath);
          }
          return !!n.isNumber(t) && t >= 0 && t < S.Hardened;
        }),
          (S.prototype.derive = function (t, e) {
            if (n.isNumber(t)) return this._deriveWithNumber(t, e);
            if (n.isString(t)) return this._deriveFromString(t);
            throw new g.InvalidDerivationArgument(t);
          }),
          (S.prototype._deriveWithNumber = function (t, e) {
            if (t >= S.Hardened || e)
              throw new g.InvalidIndexCantDeriveHardened();
            if (t < 0) throw new g.InvalidPath(t);
            var r = c.get(this.xpubkey, t, !1);
            if (r) return r;
            var n = y.integerAsBuffer(t),
              i = y.concat([this.publicKey.toBuffer(), n]),
              o = a.sha512hmac(i, this._buffers.chainCode),
              u = s.fromBuffer(o.slice(0, 32), { size: 32 }),
              h = o.slice(32, 64),
              f = p.fromPoint(Point.getG().mul(u).add(this.publicKey.point)),
              d = new S({
                network: this.network,
                depth: this.depth + 1,
                parentFingerPrint: this.fingerPrint,
                childIndex: t,
                chainCode: h,
                publicKey: f,
              });
            return (c.set(this.xpubkey, t, !1, d), d);
          }),
          (S.prototype._deriveFromString = function (t) {
            if (n.contains(t, "'"))
              throw new g.InvalidIndexCantDeriveHardened();
            if (!S.isValidPath(t)) throw new g.InvalidPath(t);
            var e = h._getDerivationIndexes(t),
              r = e.reduce(function (t, e) {
                return t._deriveWithNumber(e);
              }, this);
            return r;
          }),
          (S.isValidSerialized = function (t, e) {
            return n.isNull(S.getSerializedError(t, e));
          }),
          (S.getSerializedError = function (t, e) {
            if (!n.isString(t) && !y.isBuffer(t))
              return new g.UnrecognizedArgument("expected buffer or string");
            if (!o.validCharacters(t))
              return new l.InvalidB58Char("(unknown)", t);
            try {
              t = u.decode(t);
            } catch (s) {
              return new l.InvalidB58Checksum(t);
            }
            if (t.length !== S.DataSize) return new g.InvalidLength(t);
            if (!n.isUndefined(e)) {
              var r = S._validateNetwork(t, e);
              if (r) return r;
            }
            var i = y.integerFromBuffer(t.slice(0, 4));
            return i === f.livenet.xprivkey ||
              i === f.testnet.xprivkey ||
              i === f.dcrdtestnet.xprivkey ||
              i === f.dcrdlivenet.xprivkey
              ? new g.ArgumentIsPrivateExtended()
              : null;
          }),
          (S._validateNetwork = function (t, e) {
            var r = f.get(e);
            if (!r) return new l.InvalidNetworkArgument(e);
            var n = t.slice(S.VersionStart, S.VersionEnd);
            return y.integerFromBuffer(n) !== r.xpubkey
              ? new l.InvalidNetwork(n)
              : null;
          }),
          (S.prototype._buildFromPrivate = function (t) {
            var e = n.clone(t._buffers),
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
          (S.prototype._buildFromObject = function (t) {
            var e = {
              version: t.network
                ? y.integerAsBuffer(f.get(t.network).xpubkey)
                : t.version,
              depth: n.isNumber(t.depth)
                ? y.integerAsSingleByteBuffer(t.depth)
                : t.depth,
              parentFingerPrint: n.isNumber(t.parentFingerPrint)
                ? y.integerAsBuffer(t.parentFingerPrint)
                : t.parentFingerPrint,
              childIndex: n.isNumber(t.childIndex)
                ? y.integerAsBuffer(t.childIndex)
                : t.childIndex,
              chainCode: n.isString(t.chainCode)
                ? y.hexToBuffer(t.chainCode)
                : t.chainCode,
              publicKey: n.isString(t.publicKey)
                ? y.hexToBuffer(t.publicKey)
                : y.isBuffer(t.publicKey)
                  ? t.publicKey
                  : t.publicKey.toBuffer(),
              checksum: n.isNumber(t.checksum)
                ? y.integerAsBuffer(t.checksum)
                : t.checksum,
            };
            return this._buildFromBuffers(e);
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
              _.defineImmutable(this, { _buffers: t }));
            var r = [
                t.version,
                t.depth,
                t.parentFingerPrint,
                t.childIndex,
                t.chainCode,
                t.publicKey,
              ],
              n = y.concat(r),
              i = u.checksum(n);
            if (t.checksum && t.checksum.length) {
              if (t.checksum.toString("hex") !== i.toString("hex"))
                throw new l.InvalidB58Checksum(n, i);
            } else t.checksum = i;
            var s,
              o = f.get(y.integerFromBuffer(t.version));
            ((s = u.encode(y.concat(r))), (t.xpubkey = new e(s)));
            var h = new p(t.publicKey, { network: o }),
              c = S.ParentFingerPrintSize,
              d = a.blake256ripemd160(h.toBuffer()).slice(0, c);
            return (
              _.defineImmutable(this, {
                xpubkey: s,
                network: o,
                depth: y.integerFromSingleByteBuffer(t.depth),
                publicKey: h,
                fingerPrint: d,
              }),
              this
            );
          }),
          (S._validateBufferArguments = function (t) {
            var e = function (e, r) {
              var n = t[e];
              (m(
                y.isBuffer(n),
                e + " argument is not a buffer, it's " + typeof n,
              ),
                m(
                  n.length === r,
                  e +
                    " has not the expected size: found " +
                    n.length +
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
              i.checkArgument(n.isString(t), "No valid string was provided"),
              new S(t)
            );
          }),
          (S.fromObject = function (t) {
            return (
              i.checkArgument(n.isObject(t), "No valid argument was provided"),
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
          (S.fromBuffer = function (t) {
            return new S(t);
          }),
          (S.prototype.toBuffer = function () {
            return y.copy(this._buffers.xpubkey);
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
          m(S.PublicKeyEnd === S.DataSize),
          m(S.ChecksumEnd === S.SerializedByteSize),
          (t.exports = S));
      }).call(this, r(2).Buffer);
    },
  },
]);
