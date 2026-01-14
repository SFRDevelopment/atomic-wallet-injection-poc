(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [77],
  [
    ,
    function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoteProgram =
          t.VoteInstruction =
          t.VoteInit =
          t.VoteAuthorizationLayout =
          t.VoteAccount =
          t.VersionedTransaction =
          t.VersionedMessage =
          t.ValidatorInfo =
          t.VOTE_PROGRAM_ID =
          t.VERSION_PREFIX_MASK =
          t.VALIDATOR_INFO_KEY =
          t.TransactionStatus =
          t.TransactionMessage =
          t.TransactionInstruction =
          t.TransactionExpiredTimeoutError =
          t.TransactionExpiredNonceInvalidError =
          t.TransactionExpiredBlockheightExceededError =
          t.Transaction =
          t.SystemProgram =
          t.SystemInstruction =
          t.Struct =
          t.StakeProgram =
          t.StakeInstruction =
          t.StakeAuthorizationLayout =
          t.SolanaJSONRPCErrorCode =
          t.SolanaJSONRPCError =
          t.SendTransactionError =
          t.Secp256k1Program =
          t.SYSVAR_STAKE_HISTORY_PUBKEY =
          t.SYSVAR_SLOT_HISTORY_PUBKEY =
          t.SYSVAR_SLOT_HASHES_PUBKEY =
          t.SYSVAR_REWARDS_PUBKEY =
          t.SYSVAR_RENT_PUBKEY =
          t.SYSVAR_RECENT_BLOCKHASHES_PUBKEY =
          t.SYSVAR_INSTRUCTIONS_PUBKEY =
          t.SYSVAR_EPOCH_SCHEDULE_PUBKEY =
          t.SYSVAR_CLOCK_PUBKEY =
          t.SYSTEM_INSTRUCTION_LAYOUTS =
          t.STAKE_INSTRUCTION_LAYOUTS =
          t.STAKE_CONFIG_ID =
          t.SOLANA_SCHEMA =
          t.SIGNATURE_LENGTH_IN_BYTES =
          t.PublicKey =
          t.PUBLIC_KEY_LENGTH =
          t.PACKET_DATA_SIZE =
          t.NonceAccount =
          t.NONCE_ACCOUNT_LENGTH =
          t.MessageV0 =
          t.MessageAccountKeys =
          t.Message =
          t.MAX_SEED_LENGTH =
          t.Lockup =
          t.Loader =
          t.LOOKUP_TABLE_INSTRUCTION_LAYOUTS =
          t.LAMPORTS_PER_SOL =
          t.Keypair =
          t.FeeCalculatorLayout =
          t.EpochSchedule =
          t.Enum =
          t.Ed25519Program =
          t.Connection =
          t.ComputeBudgetProgram =
          t.ComputeBudgetInstruction =
          t.COMPUTE_BUDGET_INSTRUCTION_LAYOUTS =
          t.BpfLoader =
          t.BPF_LOADER_PROGRAM_ID =
          t.BPF_LOADER_DEPRECATED_PROGRAM_ID =
          t.BLOCKHASH_CACHE_TIMEOUT_MS =
          t.Authorized =
          t.AddressLookupTableProgram =
          t.AddressLookupTableInstruction =
          t.AddressLookupTableAccount =
          t.Account =
            void 0),
        (t.clusterApiUrl = zr),
        (t.sendAndConfirmRawTransaction = Wr),
        (t.sendAndConfirmTransaction = ee));
      var s = r(2),
        i = r(380),
        o = S(r(597)),
        a = n(r(294)),
        c = n(r(234)),
        u = r(378),
        l = r(598),
        d = S(r(6)),
        h = d,
        p = r(295),
        g = r(599),
        y = r(405),
        b = n(r(601)),
        m = r(239),
        f = r(379),
        k = S(r(606));
      function S(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (S = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var s,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((s = t ? n : r)) {
            if (s.has(e)) return s.get(e);
            s.set(e, o);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((i =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (i.get || i.set)
                ? s(o, r, i)
                : (o[r] = e[r]));
          return o;
        })(e, t);
      }
      o.utils.sha512Sync = function () {
        return (0, i.sha512)(o.utils.concatBytes(...arguments));
      };
      const w = o.utils.randomPrivateKey,
        I = () => {
          const e = o.utils.randomPrivateKey(),
            t = P(e),
            r = new Uint8Array(64);
          return (r.set(e), r.set(t, 32), { publicKey: t, secretKey: r });
        },
        P = o.sync.getPublicKey;
      function A(e) {
        try {
          return (o.Point.fromHex(e, !0), !0);
        } catch {
          return !1;
        }
      }
      const _ = (e, t) => o.sync.sign(e, t.slice(0, 32)),
        E = o.sync.verify,
        T = (e) =>
          s.Buffer.isBuffer(e)
            ? e
            : e instanceof Uint8Array
              ? s.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
              : s.Buffer.from(e);
      class Struct {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return s.Buffer.from((0, l.serialize)(v, this));
        }
        static decode(e) {
          return (0, l.deserialize)(v, this, e);
        }
        static decodeUnchecked(e) {
          return (0, l.deserializeUnchecked)(v, this, e);
        }
      }
      t.Struct = Struct;
      class Enum extends Struct {
        constructor(e) {
          if ((super(e), (this.enum = ""), 1 !== Object.keys(e).length))
            throw new Error("Enum can only take single value");
          Object.keys(e).map((e) => {
            this.enum = e;
          });
        }
      }
      t.Enum = Enum;
      const v = (t.SOLANA_SCHEMA = new Map()),
        R = (t.MAX_SEED_LENGTH = 32),
        B = (t.PUBLIC_KEY_LENGTH = 32);
      function C(e) {
        return void 0 !== e._bn;
      }
      let K = 1;
      class PublicKey extends Struct {
        constructor(e) {
          if ((super({}), (this._bn = void 0), C(e))) this._bn = e._bn;
          else {
            if ("string" === typeof e) {
              const t = c.default.decode(e);
              if (t.length != B) throw new Error("Invalid public key input");
              this._bn = new a.default(t);
            } else this._bn = new a.default(e);
            if (this._bn.byteLength() > 32)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          const e = new PublicKey(K);
          return ((K += 1), new PublicKey(e.toBuffer()));
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return c.default.encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          return this.toBuffer();
        }
        toBuffer() {
          const e = this._bn.toArrayLike(s.Buffer);
          if (e.length === B) return e;
          const t = s.Buffer.alloc(32);
          return (e.copy(t, 32 - e.length), t);
        }
        toString() {
          return this.toBase58();
        }
        static async createWithSeed(e, t, r) {
          const n = s.Buffer.concat([
              e.toBuffer(),
              s.Buffer.from(t),
              r.toBuffer(),
            ]),
            i = (0, u.sha256)(n);
          return new PublicKey(i);
        }
        static createProgramAddressSync(e, t) {
          let r = s.Buffer.alloc(0);
          (e.forEach(function (e) {
            if (e.length > R) throw new TypeError("Max seed length exceeded");
            r = s.Buffer.concat([r, T(e)]);
          }),
            (r = s.Buffer.concat([
              r,
              t.toBuffer(),
              s.Buffer.from("ProgramDerivedAddress"),
            ])));
          const n = (0, u.sha256)(r);
          if (A(n))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new PublicKey(n);
        }
        static async createProgramAddress(e, t) {
          return this.createProgramAddressSync(e, t);
        }
        static findProgramAddressSync(e, t) {
          let r,
            n = 255;
          while (0 != n) {
            try {
              const i = e.concat(s.Buffer.from([n]));
              r = this.createProgramAddressSync(i, t);
            } catch (i) {
              if (i instanceof TypeError) throw i;
              n--;
              continue;
            }
            return [r, n];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static async findProgramAddress(e, t) {
          return this.findProgramAddressSync(e, t);
        }
        static isOnCurve(e) {
          const t = new PublicKey(e);
          return A(t.toBytes());
        }
      }
      ((t.PublicKey = PublicKey),
        (PublicKey.default = new PublicKey("11111111111111111111111111111111")),
        v.set(PublicKey, { kind: "struct", fields: [["_bn", "u256"]] }));
      class Account {
        constructor(e) {
          if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
            const t = T(e);
            if (64 !== e.length) throw new Error("bad secret key size");
            ((this._publicKey = t.slice(32, 64)),
              (this._secretKey = t.slice(0, 32)));
          } else
            ((this._secretKey = T(w())),
              (this._publicKey = T(P(this._secretKey))));
        }
        get publicKey() {
          return new PublicKey(this._publicKey);
        }
        get secretKey() {
          return s.Buffer.concat([this._secretKey, this._publicKey], 64);
        }
      }
      t.Account = Account;
      t.BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey(
        "BPFLoader1111111111111111111111111111111111",
      );
      const x = (t.PACKET_DATA_SIZE = 1232),
        O = (t.VERSION_PREFIX_MASK = 127),
        L = (t.SIGNATURE_LENGTH_IN_BYTES = 64);
      class TransactionExpiredBlockheightExceededError extends Error {
        constructor(e) {
          (super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e));
        }
      }
      ((t.TransactionExpiredBlockheightExceededError =
        TransactionExpiredBlockheightExceededError),
        Object.defineProperty(
          TransactionExpiredBlockheightExceededError.prototype,
          "name",
          { value: "TransactionExpiredBlockheightExceededError" },
        ));
      class TransactionExpiredTimeoutError extends Error {
        constructor(e, t) {
          (super(
            `Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ` +
              e +
              " using the Solana Explorer or CLI tools.",
          ),
            (this.signature = void 0),
            (this.signature = e));
        }
      }
      ((t.TransactionExpiredTimeoutError = TransactionExpiredTimeoutError),
        Object.defineProperty(
          TransactionExpiredTimeoutError.prototype,
          "name",
          { value: "TransactionExpiredTimeoutError" },
        ));
      class TransactionExpiredNonceInvalidError extends Error {
        constructor(e) {
          (super(`Signature ${e} has expired: the nonce is no longer valid.`),
            (this.signature = void 0),
            (this.signature = e));
        }
      }
      ((t.TransactionExpiredNonceInvalidError =
        TransactionExpiredNonceInvalidError),
        Object.defineProperty(
          TransactionExpiredNonceInvalidError.prototype,
          "name",
          { value: "TransactionExpiredNonceInvalidError" },
        ));
      class MessageAccountKeys {
        constructor(e, t) {
          ((this.staticAccountKeys = void 0),
            (this.accountKeysFromLookups = void 0),
            (this.staticAccountKeys = e),
            (this.accountKeysFromLookups = t));
        }
        keySegments() {
          const e = [this.staticAccountKeys];
          return (
            this.accountKeysFromLookups &&
              (e.push(this.accountKeysFromLookups.writable),
              e.push(this.accountKeysFromLookups.readonly)),
            e
          );
        }
        get(e) {
          for (const t of this.keySegments()) {
            if (e < t.length) return t[e];
            e -= t.length;
          }
        }
        get length() {
          return this.keySegments().flat().length;
        }
        compileInstructions(e) {
          const t = 255;
          if (this.length > t + 1)
            throw new Error(
              "Account index overflow encountered during compilation",
            );
          const r = new Map();
          this.keySegments()
            .flat()
            .forEach((e, t) => {
              r.set(e.toBase58(), t);
            });
          const n = (e) => {
            const t = r.get(e.toBase58());
            if (void 0 === t)
              throw new Error(
                "Encountered an unknown instruction account key during compilation",
              );
            return t;
          };
          return e.map((e) => ({
            programIdIndex: n(e.programId),
            accountKeyIndexes: e.keys.map((e) => n(e.pubkey)),
            data: e.data,
          }));
        }
      }
      t.MessageAccountKeys = MessageAccountKeys;
      const N = function (e) {
          return (void 0 === e && (e = "publicKey"), h.blob(32, e));
        },
        z = function (e) {
          return (void 0 === e && (e = "signature"), h.blob(64, e));
        },
        W = function (e) {
          void 0 === e && (e = "string");
          const t = h.struct(
              [
                h.u32("length"),
                h.u32("lengthPadding"),
                h.blob(h.offset(h.u32(), -8), "chars"),
              ],
              e,
            ),
            r = t.decode.bind(t),
            n = t.encode.bind(t),
            i = t;
          return (
            (i.decode = (e, t) => {
              const n = r(e, t);
              return n["chars"].toString();
            }),
            (i.encode = (e, t, r) => {
              const i = { chars: s.Buffer.from(e, "utf8") };
              return n(i, t, r);
            }),
            (i.alloc = (e) =>
              h.u32().span + h.u32().span + s.Buffer.from(e, "utf8").length),
            i
          );
        },
        V = function (e) {
          return (
            void 0 === e && (e = "authorized"),
            h.struct([N("staker"), N("withdrawer")], e)
          );
        },
        M = function (e) {
          return (
            void 0 === e && (e = "lockup"),
            h.struct(
              [h.ns64("unixTimestamp"), h.ns64("epoch"), N("custodian")],
              e,
            )
          );
        },
        U = function (e) {
          return (
            void 0 === e && (e = "voteInit"),
            h.struct(
              [
                N("nodePubkey"),
                N("authorizedVoter"),
                N("authorizedWithdrawer"),
                h.u8("commission"),
              ],
              e,
            )
          );
        },
        q = function (e) {
          return (
            void 0 === e && (e = "voteAuthorizeWithSeedArgs"),
            h.struct(
              [
                h.u32("voteAuthorizationType"),
                N("currentAuthorityDerivedKeyOwnerPubkey"),
                W("currentAuthorityDerivedKeySeed"),
                N("newAuthorized"),
              ],
              e,
            )
          );
        };
      function D(e, t) {
        const r = (e) => {
          if (e.span >= 0) return e.span;
          if ("function" === typeof e.alloc) return e.alloc(t[e.property]);
          if ("count" in e && "elementLayout" in e) {
            const n = t[e.property];
            if (Array.isArray(n)) return n.length * r(e.elementLayout);
          } else if ("fields" in e) return D({ layout: e }, t[e.property]);
          return 0;
        };
        let n = 0;
        return (
          e.layout.fields.forEach((e) => {
            n += r(e);
          }),
          n
        );
      }
      function H(e) {
        let t = 0,
          r = 0;
        for (;;) {
          let n = e.shift();
          if (((t |= (127 & n) << (7 * r)), (r += 1), 0 === (128 & n))) break;
        }
        return t;
      }
      function J(e, t) {
        let r = t;
        for (;;) {
          let t = 127 & r;
          if (((r >>= 7), 0 == r)) {
            e.push(t);
            break;
          }
          ((t |= 128), e.push(t));
        }
      }
      function F(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }
      class CompiledKeys {
        constructor(e, t) {
          ((this.payer = void 0),
            (this.keyMetaMap = void 0),
            (this.payer = e),
            (this.keyMetaMap = t));
        }
        static compile(e, t) {
          const r = new Map(),
            n = (e) => {
              const t = e.toBase58();
              let n = r.get(t);
              return (
                void 0 === n &&
                  ((n = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                  r.set(t, n)),
                n
              );
            },
            s = n(t);
          ((s.isSigner = !0), (s.isWritable = !0));
          for (const i of e) {
            n(i.programId).isInvoked = !0;
            for (const e of i.keys) {
              const t = n(e.pubkey);
              (t.isSigner || (t.isSigner = e.isSigner),
                t.isWritable || (t.isWritable = e.isWritable));
            }
          }
          return new CompiledKeys(t, r);
        }
        getMessageComponents() {
          const e = [...this.keyMetaMap.entries()];
          F(e.length <= 256, "Max static account keys length exceeded");
          const t = e.filter((e) => {
              let [, t] = e;
              return t.isSigner && t.isWritable;
            }),
            r = e.filter((e) => {
              let [, t] = e;
              return t.isSigner && !t.isWritable;
            }),
            n = e.filter((e) => {
              let [, t] = e;
              return !t.isSigner && t.isWritable;
            }),
            s = e.filter((e) => {
              let [, t] = e;
              return !t.isSigner && !t.isWritable;
            }),
            i = {
              numRequiredSignatures: t.length + r.length,
              numReadonlySignedAccounts: r.length,
              numReadonlyUnsignedAccounts: s.length,
            };
          {
            F(t.length > 0, "Expected at least one writable signer key");
            const [e] = t[0];
            F(
              e === this.payer.toBase58(),
              "Expected first writable signer key to be the fee payer",
            );
          }
          const o = [
            ...t.map((e) => {
              let [t] = e;
              return new PublicKey(t);
            }),
            ...r.map((e) => {
              let [t] = e;
              return new PublicKey(t);
            }),
            ...n.map((e) => {
              let [t] = e;
              return new PublicKey(t);
            }),
            ...s.map((e) => {
              let [t] = e;
              return new PublicKey(t);
            }),
          ];
          return [i, o];
        }
        extractTableLookup(e) {
          const [t, r] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && e.isWritable,
            ),
            [n, s] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && !e.isWritable,
            );
          if (0 !== t.length || 0 !== n.length)
            return [
              { accountKey: e.key, writableIndexes: t, readonlyIndexes: n },
              { writable: r, readonly: s },
            ];
        }
        drainKeysFoundInLookupTable(e, t) {
          const r = new Array(),
            n = new Array();
          for (const [s, i] of this.keyMetaMap.entries())
            if (t(i)) {
              const t = new PublicKey(s),
                i = e.findIndex((e) => e.equals(t));
              i >= 0 &&
                (F(i < 256, "Max lookup table index exceeded"),
                r.push(i),
                n.push(t),
                this.keyMetaMap.delete(s));
            }
          return [r, n];
        }
      }
      class Message {
        constructor(e) {
          ((this.header = void 0),
            (this.accountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.instructions = void 0),
            (this.indexToProgramIds = new Map()),
            (this.header = e.header),
            (this.accountKeys = e.accountKeys.map((e) => new PublicKey(e))),
            (this.recentBlockhash = e.recentBlockhash),
            (this.instructions = e.instructions),
            this.instructions.forEach((e) =>
              this.indexToProgramIds.set(
                e.programIdIndex,
                this.accountKeys[e.programIdIndex],
              ),
            ));
        }
        get version() {
          return "legacy";
        }
        get staticAccountKeys() {
          return this.accountKeys;
        }
        get compiledInstructions() {
          return this.instructions.map((e) => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: c.default.decode(e.data),
          }));
        }
        get addressTableLookups() {
          return [];
        }
        getAccountKeys() {
          return new MessageAccountKeys(this.staticAccountKeys);
        }
        static compile(e) {
          const t = CompiledKeys.compile(e.instructions, e.payerKey),
            [r, n] = t.getMessageComponents(),
            s = new MessageAccountKeys(n),
            i = s
              .compileInstructions(e.instructions)
              .map((e) => ({
                programIdIndex: e.programIdIndex,
                accounts: e.accountKeyIndexes,
                data: c.default.encode(e.data),
              }));
          return new Message({
            header: r,
            accountKeys: n,
            recentBlockhash: e.recentBlockhash,
            instructions: i,
          });
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          const t = this.header.numRequiredSignatures;
          if (e >= this.header.numRequiredSignatures) {
            const r = e - t,
              n = this.accountKeys.length - t,
              s = n - this.header.numReadonlyUnsignedAccounts;
            return r < s;
          }
          {
            const r = t - this.header.numReadonlySignedAccounts;
            return e < r;
          }
        }
        isProgramId(e) {
          return this.indexToProgramIds.has(e);
        }
        programIds() {
          return [...this.indexToProgramIds.values()];
        }
        nonProgramIds() {
          return this.accountKeys.filter((e, t) => !this.isProgramId(t));
        }
        serialize() {
          const e = this.accountKeys.length;
          let t = [];
          J(t, e);
          const r = this.instructions.map((e) => {
            const { accounts: t, programIdIndex: r } = e,
              n = Array.from(c.default.decode(e.data));
            let i = [];
            J(i, t.length);
            let o = [];
            return (
              J(o, n.length),
              {
                programIdIndex: r,
                keyIndicesCount: s.Buffer.from(i),
                keyIndices: t,
                dataLength: s.Buffer.from(o),
                data: n,
              }
            );
          });
          let n = [];
          J(n, r.length);
          let i = s.Buffer.alloc(x);
          s.Buffer.from(n).copy(i);
          let o = n.length;
          (r.forEach((e) => {
            const t = h.struct([
                h.u8("programIdIndex"),
                h.blob(e.keyIndicesCount.length, "keyIndicesCount"),
                h.seq(h.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
                h.blob(e.dataLength.length, "dataLength"),
                h.seq(h.u8("userdatum"), e.data.length, "data"),
              ]),
              r = t.encode(e, i, o);
            o += r;
          }),
            (i = i.slice(0, o)));
          const a = h.struct([
              h.blob(1, "numRequiredSignatures"),
              h.blob(1, "numReadonlySignedAccounts"),
              h.blob(1, "numReadonlyUnsignedAccounts"),
              h.blob(t.length, "keyCount"),
              h.seq(N("key"), e, "keys"),
              N("recentBlockhash"),
            ]),
            u = {
              numRequiredSignatures: s.Buffer.from([
                this.header.numRequiredSignatures,
              ]),
              numReadonlySignedAccounts: s.Buffer.from([
                this.header.numReadonlySignedAccounts,
              ]),
              numReadonlyUnsignedAccounts: s.Buffer.from([
                this.header.numReadonlyUnsignedAccounts,
              ]),
              keyCount: s.Buffer.from(t),
              keys: this.accountKeys.map((e) => T(e.toBytes())),
              recentBlockhash: c.default.decode(this.recentBlockhash),
            };
          let l = s.Buffer.alloc(2048);
          const d = a.encode(u, l);
          return (i.copy(l, d), l.slice(0, d + i.length));
        }
        static from(e) {
          let t = [...e];
          const r = t.shift();
          if (r !== (r & O))
            throw new Error(
              "Versioned messages must be deserialized with VersionedMessage.deserialize()",
            );
          const n = t.shift(),
            i = t.shift(),
            o = H(t);
          let a = [];
          for (let c = 0; c < o; c++) {
            const e = t.slice(0, B);
            ((t = t.slice(B)), a.push(new PublicKey(s.Buffer.from(e))));
          }
          const u = t.slice(0, B);
          t = t.slice(B);
          const l = H(t);
          let d = [];
          for (let p = 0; p < l; p++) {
            const e = t.shift(),
              r = H(t),
              n = t.slice(0, r);
            t = t.slice(r);
            const i = H(t),
              o = t.slice(0, i),
              a = c.default.encode(s.Buffer.from(o));
            ((t = t.slice(i)),
              d.push({ programIdIndex: e, accounts: n, data: a }));
          }
          const h = {
            header: {
              numRequiredSignatures: r,
              numReadonlySignedAccounts: n,
              numReadonlyUnsignedAccounts: i,
            },
            recentBlockhash: c.default.encode(s.Buffer.from(u)),
            accountKeys: a,
            instructions: d,
          };
          return new Message(h);
        }
      }
      t.Message = Message;
      class MessageV0 {
        constructor(e) {
          ((this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups));
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (const t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw new Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups",
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw new Error(
              "Failed to get account keys because address table lookups were not resolved",
            );
          return new MessageAccountKeys(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          const t = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
          if (e >= r) {
            const t = e - r,
              n = this.addressTableLookups.reduce(
                (e, t) => e + t.writableIndexes.length,
                0,
              );
            return t < n;
          }
          if (e >= this.header.numRequiredSignatures) {
            const n = e - t,
              s = r - t,
              i = s - this.header.numReadonlyUnsignedAccounts;
            return n < i;
          }
          {
            const r = t - this.header.numReadonlySignedAccounts;
            return e < r;
          }
        }
        resolveAddressTableLookups(e) {
          const t = { writable: [], readonly: [] };
          for (const r of this.addressTableLookups) {
            const n = e.find((e) => e.key.equals(r.accountKey));
            if (!n)
              throw new Error(
                "Failed to find address lookup table account for table key " +
                  r.accountKey.toBase58(),
              );
            for (const e of r.writableIndexes) {
              if (!(e < n.state.addresses.length))
                throw new Error(
                  `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`,
                );
              t.writable.push(n.state.addresses[e]);
            }
            for (const e of r.readonlyIndexes) {
              if (!(e < n.state.addresses.length))
                throw new Error(
                  `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`,
                );
              t.readonly.push(n.state.addresses[e]);
            }
          }
          return t;
        }
        static compile(e) {
          const t = CompiledKeys.compile(e.instructions, e.payerKey),
            r = new Array(),
            n = { writable: new Array(), readonly: new Array() },
            s = e.addressLookupTableAccounts || [];
          for (const u of s) {
            const e = t.extractTableLookup(u);
            if (void 0 !== e) {
              const [t, { writable: s, readonly: i }] = e;
              (r.push(t), n.writable.push(...s), n.readonly.push(...i));
            }
          }
          const [i, o] = t.getMessageComponents(),
            a = new MessageAccountKeys(o, n),
            c = a.compileInstructions(e.instructions);
          return new MessageV0({
            header: i,
            staticAccountKeys: o,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: c,
            addressTableLookups: r,
          });
        }
        serialize() {
          const e = Array();
          J(e, this.staticAccountKeys.length);
          const t = this.serializeInstructions(),
            r = Array();
          J(r, this.compiledInstructions.length);
          const n = this.serializeAddressTableLookups(),
            s = Array();
          J(s, this.addressTableLookups.length);
          const i = h.struct([
              h.u8("prefix"),
              h.struct(
                [
                  h.u8("numRequiredSignatures"),
                  h.u8("numReadonlySignedAccounts"),
                  h.u8("numReadonlyUnsignedAccounts"),
                ],
                "header",
              ),
              h.blob(e.length, "staticAccountKeysLength"),
              h.seq(N(), this.staticAccountKeys.length, "staticAccountKeys"),
              N("recentBlockhash"),
              h.blob(r.length, "instructionsLength"),
              h.blob(t.length, "serializedInstructions"),
              h.blob(s.length, "addressTableLookupsLength"),
              h.blob(n.length, "serializedAddressTableLookups"),
            ]),
            o = new Uint8Array(x),
            a = 128,
            u = i.encode(
              {
                prefix: a,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((e) =>
                  e.toBytes(),
                ),
                recentBlockhash: c.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(s),
                serializedAddressTableLookups: n,
              },
              o,
            );
          return o.slice(0, u);
        }
        serializeInstructions() {
          let e = 0;
          const t = new Uint8Array(x);
          for (const r of this.compiledInstructions) {
            const n = Array();
            J(n, r.accountKeyIndexes.length);
            const s = Array();
            J(s, r.data.length);
            const i = h.struct([
              h.u8("programIdIndex"),
              h.blob(n.length, "encodedAccountKeyIndexesLength"),
              h.seq(h.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
              h.blob(s.length, "encodedDataLength"),
              h.blob(r.data.length, "data"),
            ]);
            e += i.encode(
              {
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(n),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(s),
                data: r.data,
              },
              t,
              e,
            );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0;
          const t = new Uint8Array(x);
          for (const r of this.addressTableLookups) {
            const n = Array();
            J(n, r.writableIndexes.length);
            const s = Array();
            J(s, r.readonlyIndexes.length);
            const i = h.struct([
              N("accountKey"),
              h.blob(n.length, "encodedWritableIndexesLength"),
              h.seq(h.u8(), r.writableIndexes.length, "writableIndexes"),
              h.blob(s.length, "encodedReadonlyIndexesLength"),
              h.seq(h.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            e += i.encode(
              {
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(n),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(s),
                readonlyIndexes: r.readonlyIndexes,
              },
              t,
              e,
            );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e];
          const r = t.shift(),
            n = r & O;
          F(r !== n, "Expected versioned message but received legacy message");
          const s = n;
          F(
            0 === s,
            "Expected versioned message with version 0 but found version " + s,
          );
          const i = {
              numRequiredSignatures: t.shift(),
              numReadonlySignedAccounts: t.shift(),
              numReadonlyUnsignedAccounts: t.shift(),
            },
            o = [],
            a = H(t);
          for (let c = 0; c < a; c++) o.push(new PublicKey(t.splice(0, B)));
          const u = c.default.encode(t.splice(0, B)),
            l = H(t),
            d = [];
          for (let c = 0; c < l; c++) {
            const e = t.shift(),
              r = H(t),
              n = t.splice(0, r),
              s = H(t),
              i = new Uint8Array(t.splice(0, s));
            d.push({ programIdIndex: e, accountKeyIndexes: n, data: i });
          }
          const h = H(t),
            p = [];
          for (let c = 0; c < h; c++) {
            const e = new PublicKey(t.splice(0, B)),
              r = H(t),
              n = t.splice(0, r),
              s = H(t),
              i = t.splice(0, s);
            p.push({ accountKey: e, writableIndexes: n, readonlyIndexes: i });
          }
          return new MessageV0({
            header: i,
            staticAccountKeys: o,
            recentBlockhash: u,
            compiledInstructions: d,
            addressTableLookups: p,
          });
        }
      }
      t.MessageV0 = MessageV0;
      const Y = (t.VersionedMessage = {
        deserializeMessageVersion(e) {
          const t = e[0],
            r = t & O;
          return r === t ? "legacy" : r;
        },
        deserialize: (e) => {
          const t = Y.deserializeMessageVersion(e);
          if ("legacy" === t) return Message.from(e);
          if (0 === t) return MessageV0.deserialize(e);
          throw new Error(
            `Transaction message version ${t} deserialization is not supported`,
          );
        },
      });
      let $ = (t.TransactionStatus = void 0);
      (function (e) {
        ((e[(e["BLOCKHEIGHT_EXCEEDED"] = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (e[(e["PROCESSED"] = 1)] = "PROCESSED"),
          (e[(e["TIMED_OUT"] = 2)] = "TIMED_OUT"),
          (e[(e["NONCE_INVALID"] = 3)] = "NONCE_INVALID"));
      })($ || (t.TransactionStatus = $ = {}));
      const j = s.Buffer.alloc(L).fill(0);
      class TransactionInstruction {
        constructor(e) {
          ((this.keys = void 0),
            (this.programId = void 0),
            (this.data = s.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data));
        }
        toJSON() {
          return {
            keys: this.keys.map((e) => {
              let { pubkey: t, isSigner: r, isWritable: n } = e;
              return { pubkey: t.toJSON(), isSigner: r, isWritable: n };
            }),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }
      t.TransactionInstruction = TransactionInstruction;
      class Transaction {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            e)
          )
            if (
              (e.feePayer && (this.feePayer = e.feePayer),
              e.signatures && (this.signatures = e.signatures),
              Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
            ) {
              const { minContextSlot: t, nonceInfo: r } = e;
              ((this.minNonceContextSlot = t), (this.nonceInfo = r));
            } else if (
              Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
            ) {
              const { blockhash: t, lastValidBlockHeight: r } = e;
              ((this.recentBlockhash = t), (this.lastValidBlockHeight = r));
            } else {
              const { recentBlockhash: t, nonceInfo: r } = e;
              (r && (this.nonceInfo = r), (this.recentBlockhash = t));
            }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map((e) => {
              let { publicKey: t } = e;
              return t.toJSON();
            }),
          };
        }
        add() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw new Error("No instructions");
          return (
            t.forEach((e) => {
              "instructions" in e
                ? (this.instructions = this.instructions.concat(e.instructions))
                : "data" in e && "programId" in e && "keys" in e
                  ? this.instructions.push(e)
                  : this.instructions.push(new TransactionInstruction(e));
            }),
            this
          );
        }
        compileMessage() {
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          let e, t, r;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                (t =
                  this.instructions[0] != this.nonceInfo.nonceInstruction
                    ? [this.nonceInfo.nonceInstruction, ...this.instructions]
                    : this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw new Error("Transaction recentBlockhash required");
          if (
            (t.length < 1 && console.warn("No instructions provided"),
            this.feePayer)
          )
            r = this.feePayer;
          else {
            if (!(this.signatures.length > 0 && this.signatures[0].publicKey))
              throw new Error("Transaction fee payer required");
            r = this.signatures[0].publicKey;
          }
          for (let c = 0; c < t.length; c++)
            if (void 0 === t[c].programId)
              throw new Error(
                `Transaction instruction index ${c} has undefined program id`,
              );
          const n = [],
            s = [];
          (t.forEach((e) => {
            e.keys.forEach((e) => {
              s.push({ ...e });
            });
            const t = e.programId.toString();
            n.includes(t) || n.push(t);
          }),
            n.forEach((e) => {
              s.push({
                pubkey: new PublicKey(e),
                isSigner: !1,
                isWritable: !1,
              });
            }));
          const i = [];
          (s.forEach((e) => {
            const t = e.pubkey.toString(),
              r = i.findIndex((e) => e.pubkey.toString() === t);
            r > -1
              ? ((i[r].isWritable = i[r].isWritable || e.isWritable),
                (i[r].isSigner = i[r].isSigner || e.isSigner))
              : i.push(e);
          }),
            i.sort(function (e, t) {
              return e.isSigner !== t.isSigner
                ? e.isSigner
                  ? -1
                  : 1
                : e.isWritable !== t.isWritable
                  ? e.isWritable
                    ? -1
                    : 1
                  : e.pubkey.toBase58().localeCompare(t.pubkey.toBase58());
            }));
          const o = i.findIndex((e) => e.pubkey.equals(r));
          if (o > -1) {
            const [e] = i.splice(o, 1);
            ((e.isSigner = !0), (e.isWritable = !0), i.unshift(e));
          } else i.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
          for (const c of this.signatures) {
            const e = i.findIndex((e) => e.pubkey.equals(c.publicKey));
            if (!(e > -1))
              throw new Error("unknown signer: " + c.publicKey.toString());
            i[e].isSigner ||
              ((i[e].isSigner = !0),
              console.warn(
                "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.",
              ));
          }
          let a = 0,
            u = 0,
            l = 0;
          const d = [],
            h = [];
          i.forEach((e) => {
            let { pubkey: t, isSigner: r, isWritable: n } = e;
            r
              ? (d.push(t.toString()), (a += 1), n || (u += 1))
              : (h.push(t.toString()), n || (l += 1));
          });
          const p = d.concat(h),
            g = t.map((e) => {
              const { data: t, programId: r } = e;
              return {
                programIdIndex: p.indexOf(r.toString()),
                accounts: e.keys.map((e) => p.indexOf(e.pubkey.toString())),
                data: c.default.encode(t),
              };
            });
          return (
            g.forEach((e) => {
              (F(e.programIdIndex >= 0), e.accounts.forEach((e) => F(e >= 0)));
            }),
            new Message({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: u,
                numReadonlyUnsignedAccounts: l,
              },
              accountKeys: p,
              recentBlockhash: e,
              instructions: g,
            })
          );
        }
        _compile() {
          const e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          if (this.signatures.length === t.length) {
            const r = this.signatures.every((e, r) => t[r].equals(e.publicKey));
            if (r) return e;
          }
          return (
            (this.signatures = t.map((e) => ({
              signature: null,
              publicKey: e,
            }))),
            e
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        async getEstimatedFee(e) {
          return (await e.getFeeForMessage(this.compileMessage())).value;
        }
        setSigners() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw new Error("No signers");
          const n = new Set();
          this.signatures = t
            .filter((e) => {
              const t = e.toString();
              return !n.has(t) && (n.add(t), !0);
            })
            .map((e) => ({ signature: null, publicKey: e }));
        }
        sign() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw new Error("No signers");
          const n = new Set(),
            s = [];
          for (const o of t) {
            const e = o.publicKey.toString();
            n.has(e) || (n.add(e), s.push(o));
          }
          this.signatures = s.map((e) => ({
            signature: null,
            publicKey: e.publicKey,
          }));
          const i = this._compile();
          this._partialSign(i, ...s);
        }
        partialSign() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw new Error("No signers");
          const n = new Set(),
            s = [];
          for (const o of t) {
            const e = o.publicKey.toString();
            n.has(e) || (n.add(e), s.push(o));
          }
          const i = this._compile();
          this._partialSign(i, ...s);
        }
        _partialSign(e) {
          const t = e.serialize();
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
            s < r;
            s++
          )
            n[s - 1] = arguments[s];
          n.forEach((e) => {
            const r = _(t, e.secretKey);
            this._addSignature(e.publicKey, T(r));
          });
        }
        addSignature(e, t) {
          (this._compile(), this._addSignature(e, t));
        }
        _addSignature(e, t) {
          F(64 === t.length);
          const r = this.signatures.findIndex((t) => e.equals(t.publicKey));
          if (r < 0) throw new Error("unknown signer: " + e.toString());
          this.signatures[r].signature = s.Buffer.from(t);
        }
        verifySignatures() {
          return this._verifySignatures(this.serializeMessage(), !0);
        }
        _verifySignatures(e, t) {
          for (const { signature: r, publicKey: n } of this.signatures)
            if (null === r) {
              if (t) return !1;
            } else if (!E(r, e, n.toBytes())) return !1;
          return !0;
        }
        serialize(e) {
          const { requireAllSignatures: t, verifySignatures: r } =
              Object.assign(
                { requireAllSignatures: !0, verifySignatures: !0 },
                e,
              ),
            n = this.serializeMessage();
          if (r && !this._verifySignatures(n, t))
            throw new Error("Signature verification failed");
          return this._serialize(n);
        }
        _serialize(e) {
          const { signatures: t } = this,
            r = [];
          J(r, t.length);
          const n = r.length + 64 * t.length + e.length,
            i = s.Buffer.alloc(n);
          return (
            F(t.length < 256),
            s.Buffer.from(r).copy(i, 0),
            t.forEach((e, t) => {
              let { signature: n } = e;
              null !== n &&
                (F(64 === n.length, "signature has invalid length"),
                s.Buffer.from(n).copy(i, r.length + 64 * t));
            }),
            e.copy(i, r.length + 64 * t.length),
            F(i.length <= x, `Transaction too large: ${i.length} > ${x}`),
            i
          );
        }
        get keys() {
          return (
            F(1 === this.instructions.length),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            F(1 === this.instructions.length),
            this.instructions[0].programId
          );
        }
        get data() {
          return (F(1 === this.instructions.length), this.instructions[0].data);
        }
        static from(e) {
          let t = [...e];
          const r = H(t);
          let n = [];
          for (let i = 0; i < r; i++) {
            const e = t.slice(0, L);
            ((t = t.slice(L)), n.push(c.default.encode(s.Buffer.from(e))));
          }
          return Transaction.populate(Message.from(t), n);
        }
        static populate(e, t) {
          void 0 === t && (t = []);
          const r = new Transaction();
          return (
            (r.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (r.feePayer = e.accountKeys[0]),
            t.forEach((t, n) => {
              const s = {
                signature:
                  t == c.default.encode(j) ? null : c.default.decode(t),
                publicKey: e.accountKeys[n],
              };
              r.signatures.push(s);
            }),
            e.instructions.forEach((t) => {
              const n = t.accounts.map((t) => {
                const n = e.accountKeys[t];
                return {
                  pubkey: n,
                  isSigner:
                    r.signatures.some(
                      (e) => e.publicKey.toString() === n.toString(),
                    ) || e.isAccountSigner(t),
                  isWritable: e.isAccountWritable(t),
                };
              });
              r.instructions.push(
                new TransactionInstruction({
                  keys: n,
                  programId: e.accountKeys[t.programIdIndex],
                  data: c.default.decode(t.data),
                }),
              );
            }),
            (r._message = e),
            (r._json = r.toJSON()),
            r
          );
        }
      }
      t.Transaction = Transaction;
      class TransactionMessage {
        constructor(e) {
          ((this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = e.payerKey),
            (this.instructions = e.instructions),
            (this.recentBlockhash = e.recentBlockhash));
        }
        static decompile(e, t) {
          const { header: r, compiledInstructions: n, recentBlockhash: s } = e,
            {
              numRequiredSignatures: i,
              numReadonlySignedAccounts: o,
              numReadonlyUnsignedAccounts: a,
            } = r,
            c = i - o;
          F(c > 0, "Message header is invalid");
          const u = e.staticAccountKeys.length - a;
          F(u >= 0, "Message header is invalid");
          const l = e.getAccountKeys(t),
            d = l.get(0);
          if (void 0 === d)
            throw new Error(
              "Failed to decompile message because no account keys were found",
            );
          const h = [];
          for (const p of n) {
            const e = [];
            for (const n of p.accountKeyIndexes) {
              const t = l.get(n);
              if (void 0 === t)
                throw new Error(
                  "Failed to find key for account key index " + n,
                );
              const s = n < i;
              let o;
              ((o = s
                ? n < c
                : n < l.staticAccountKeys.length
                  ? n - i < u
                  : n - l.staticAccountKeys.length <
                    l.accountKeysFromLookups.writable.length),
                e.push({
                  pubkey: t,
                  isSigner: n < r.numRequiredSignatures,
                  isWritable: o,
                }));
            }
            const t = l.get(p.programIdIndex);
            if (void 0 === t)
              throw new Error(
                "Failed to find program id for program id index " +
                  p.programIdIndex,
              );
            h.push(
              new TransactionInstruction({
                programId: t,
                data: T(p.data),
                keys: e,
              }),
            );
          }
          return new TransactionMessage({
            payerKey: d,
            instructions: h,
            recentBlockhash: s,
          });
        }
        compileToLegacyMessage() {
          return Message.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(e) {
          return MessageV0.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e,
          });
        }
      }
      t.TransactionMessage = TransactionMessage;
      class VersionedTransaction {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), void 0 !== t)
          )
            (F(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures",
            ),
              (this.signatures = t));
          else {
            const t = [];
            for (let r = 0; r < e.header.numRequiredSignatures; r++)
              t.push(new Uint8Array(L));
            this.signatures = t;
          }
          this.message = e;
        }
        serialize() {
          const e = this.message.serialize(),
            t = Array();
          J(t, this.signatures.length);
          const r = h.struct([
              h.blob(t.length, "encodedSignaturesLength"),
              h.seq(z(), this.signatures.length, "signatures"),
              h.blob(e.length, "serializedMessage"),
            ]),
            n = new Uint8Array(2048),
            s = r.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              n,
            );
          return n.slice(0, s);
        }
        static deserialize(e) {
          let t = [...e];
          const r = [],
            n = H(t);
          for (let i = 0; i < n; i++) r.push(new Uint8Array(t.splice(0, L)));
          const s = Y.deserialize(new Uint8Array(t));
          return new VersionedTransaction(s, r);
        }
        sign(e) {
          const t = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures,
            );
          for (const n of e) {
            const e = r.findIndex((e) => e.equals(n.publicKey));
            (F(
              e >= 0,
              "Cannot sign with non signer key " + n.publicKey.toBase58(),
            ),
              (this.signatures[e] = _(t, n.secretKey)));
          }
        }
        addSignature(e, t) {
          F(64 === t.byteLength, "Signature must be 64 bytes long");
          const r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures,
            ),
            n = r.findIndex((t) => t.equals(e));
          (F(
            n >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`,
          ),
            (this.signatures[n] = t));
        }
      }
      t.VersionedTransaction = VersionedTransaction;
      const G = (t.SYSVAR_CLOCK_PUBKEY = new PublicKey(
          "SysvarC1ock11111111111111111111111111111111",
        )),
        X =
          ((t.SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey(
            "SysvarEpochSchedu1e111111111111111111111111",
          )),
          (t.SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey(
            "Sysvar1nstructions1111111111111111111111111",
          )),
          (t.SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey(
            "SysvarRecentB1ockHashes11111111111111111111",
          ))),
        Z = (t.SYSVAR_RENT_PUBKEY = new PublicKey(
          "SysvarRent111111111111111111111111111111111",
        )),
        Q =
          ((t.SYSVAR_REWARDS_PUBKEY = new PublicKey(
            "SysvarRewards111111111111111111111111111111",
          )),
          (t.SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey(
            "SysvarS1otHashes111111111111111111111111111",
          )),
          (t.SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey(
            "SysvarS1otHistory11111111111111111111111111",
          )),
          (t.SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey(
            "SysvarStakeHistory1111111111111111111111111",
          )));
      async function ee(e, t, r, n) {
        const s = n && {
            skipPreflight: n.skipPreflight,
            preflightCommitment: n.preflightCommitment || n.commitment,
            maxRetries: n.maxRetries,
            minContextSlot: n.minContextSlot,
          },
          i = await e.sendTransaction(t, r, s);
        let o;
        if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
          o = (
            await e.confirmTransaction(
              {
                signature: i,
                blockhash: t.recentBlockhash,
                lastValidBlockHeight: t.lastValidBlockHeight,
              },
              n && n.commitment,
            )
          ).value;
        else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
          const { nonceInstruction: r } = t.nonceInfo,
            s = r.keys[0].pubkey;
          o = (
            await e.confirmTransaction(
              {
                minContextSlot: t.minNonceContextSlot,
                nonceAccountPubkey: s,
                nonceValue: t.nonceInfo.nonce,
                signature: i,
              },
              n && n.commitment,
            )
          ).value;
        } else o = (await e.confirmTransaction(i, n && n.commitment)).value;
        if (o.err)
          throw new Error(`Transaction ${i} failed (${JSON.stringify(o)})`);
        return i;
      }
      function te(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function re(e, t) {
        const r = e.layout.span >= 0 ? e.layout.span : D(e, t),
          n = s.Buffer.alloc(r),
          i = Object.assign({ instruction: e.index }, t);
        return (e.layout.encode(i, n), n);
      }
      function ne(e, t) {
        let r;
        try {
          r = e.layout.decode(t);
        } catch (n) {
          throw new Error("invalid instruction; " + n);
        }
        if (r.instruction !== e.index)
          throw new Error(
            `invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`,
          );
        return r;
      }
      const se = (t.FeeCalculatorLayout = h.nu64("lamportsPerSignature")),
        ie = h.struct([
          h.u32("version"),
          h.u32("state"),
          N("authorizedPubkey"),
          N("nonce"),
          h.struct([se], "feeCalculator"),
        ]),
        oe = (t.NONCE_ACCOUNT_LENGTH = ie.span);
      class NonceAccount {
        constructor(e) {
          ((this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator));
        }
        static fromAccountData(e) {
          const t = ie.decode(T(e), 0);
          return new NonceAccount({
            authorizedPubkey: new PublicKey(t.authorizedPubkey),
            nonce: new PublicKey(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      }
      t.NonceAccount = NonceAccount;
      const ae = (e) => {
          const t = e.decode.bind(e),
            r = e.encode.bind(e);
          return { decode: t, encode: r };
        },
        ce = (e) => (t) => {
          const r = (0, d.blob)(e, t),
            { encode: n, decode: i } = ae(r),
            o = r;
          return (
            (o.decode = (e, t) => {
              const r = i(e, t);
              return (0, p.toBigIntLE)(s.Buffer.from(r));
            }),
            (o.encode = (t, r, s) => {
              const i = (0, p.toBufferLE)(t, e);
              return n(i, r, s);
            }),
            o
          );
        },
        ue = ce(8);
      class SystemInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = h.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(le))
            if (i.index == r) {
              n = s;
              break;
            }
          if (!n)
            throw new Error(
              "Instruction type incorrect; not a SystemInstruction",
            );
          return n;
        }
        static decodeCreateAccount(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const { lamports: t, space: r, programId: n } = ne(le.Create, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            lamports: t,
            space: r,
            programId: new PublicKey(n),
          };
        }
        static decodeTransfer(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const { lamports: t } = ne(le.Transfer, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            lamports: t,
          };
        }
        static decodeTransferWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const {
            lamports: t,
            seed: r,
            programId: n,
          } = ne(le.TransferWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            basePubkey: e.keys[1].pubkey,
            toPubkey: e.keys[2].pubkey,
            lamports: t,
            seed: r,
            programId: new PublicKey(n),
          };
        }
        static decodeAllocate(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1));
          const { space: t } = ne(le.Allocate, e.data);
          return { accountPubkey: e.keys[0].pubkey, space: t };
        }
        static decodeAllocateWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1));
          const {
            base: t,
            seed: r,
            space: n,
            programId: s,
          } = ne(le.AllocateWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new PublicKey(t),
            seed: r,
            space: n,
            programId: new PublicKey(s),
          };
        }
        static decodeAssign(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1));
          const { programId: t } = ne(le.Assign, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            programId: new PublicKey(t),
          };
        }
        static decodeAssignWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1));
          const {
            base: t,
            seed: r,
            programId: n,
          } = ne(le.AssignWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new PublicKey(t),
            seed: r,
            programId: new PublicKey(n),
          };
        }
        static decodeCreateWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const {
            base: t,
            seed: r,
            lamports: n,
            space: s,
            programId: i,
          } = ne(le.CreateWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            basePubkey: new PublicKey(t),
            seed: r,
            lamports: n,
            space: s,
            programId: new PublicKey(i),
          };
        }
        static decodeNonceInitialize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const { authorized: t } = ne(le.InitializeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: new PublicKey(t),
          };
        }
        static decodeNonceAdvance(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ne(le.AdvanceNonceAccount, e.data),
            {
              noncePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5));
          const { lamports: t } = ne(le.WithdrawNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        }
        static decodeNonceAuthorize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const { authorized: t } = ne(le.AuthorizeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[1].pubkey,
            newAuthorizedPubkey: new PublicKey(t),
          };
        }
        static checkProgramId(e) {
          if (!e.equals(SystemProgram.programId))
            throw new Error(
              "invalid instruction; programId is not SystemProgram",
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`,
            );
        }
      }
      t.SystemInstruction = SystemInstruction;
      const le = (t.SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
        Create: {
          index: 0,
          layout: h.struct([
            h.u32("instruction"),
            h.ns64("lamports"),
            h.ns64("space"),
            N("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: h.struct([h.u32("instruction"), N("programId")]),
        },
        Transfer: {
          index: 2,
          layout: h.struct([h.u32("instruction"), ue("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: h.struct([
            h.u32("instruction"),
            N("base"),
            W("seed"),
            h.ns64("lamports"),
            h.ns64("space"),
            N("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: h.struct([h.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: h.struct([h.u32("instruction"), h.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: h.struct([h.u32("instruction"), N("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: h.struct([h.u32("instruction"), N("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: h.struct([h.u32("instruction"), h.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: h.struct([
            h.u32("instruction"),
            N("base"),
            W("seed"),
            h.ns64("space"),
            N("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: h.struct([
            h.u32("instruction"),
            N("base"),
            W("seed"),
            N("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: h.struct([
            h.u32("instruction"),
            ue("lamports"),
            W("seed"),
            N("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: h.struct([h.u32("instruction")]),
        },
      }));
      class SystemProgram {
        constructor() {}
        static createAccount(e) {
          const t = le.Create,
            r = re(t, {
              lamports: e.lamports,
              space: e.space,
              programId: T(e.programId.toBuffer()),
            });
          return new TransactionInstruction({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static transfer(e) {
          let t, r;
          if ("basePubkey" in e) {
            const n = le.TransferWithSeed;
            ((t = re(n, {
              lamports: BigInt(e.lamports),
              seed: e.seed,
              programId: T(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]));
          } else {
            const n = le.Transfer;
            ((t = re(n, { lamports: BigInt(e.lamports) })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]));
          }
          return new TransactionInstruction({
            keys: r,
            programId: this.programId,
            data: t,
          });
        }
        static assign(e) {
          let t, r;
          if ("basePubkey" in e) {
            const n = le.AssignWithSeed;
            ((t = re(n, {
              base: T(e.basePubkey.toBuffer()),
              seed: e.seed,
              programId: T(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]));
          } else {
            const n = le.Assign;
            ((t = re(n, { programId: T(e.programId.toBuffer()) })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
              ]));
          }
          return new TransactionInstruction({
            keys: r,
            programId: this.programId,
            data: t,
          });
        }
        static createAccountWithSeed(e) {
          const t = le.CreateWithSeed,
            r = re(t, {
              base: T(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: T(e.programId.toBuffer()),
            });
          let n = [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
          ];
          return (
            e.basePubkey != e.fromPubkey &&
              n.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new TransactionInstruction({
              keys: n,
              programId: this.programId,
              data: r,
            })
          );
        }
        static createNonceAccount(e) {
          const t = new Transaction();
          "basePubkey" in e && "seed" in e
            ? t.add(
                SystemProgram.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: oe,
                  programId: this.programId,
                }),
              )
            : t.add(
                SystemProgram.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: oe,
                  programId: this.programId,
                }),
              );
          const r = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return (t.add(this.nonceInitialize(r)), t);
        }
        static nonceInitialize(e) {
          const t = le.InitializeNonceAccount,
            r = re(t, { authorized: T(e.authorizedPubkey.toBuffer()) }),
            n = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: X, isSigner: !1, isWritable: !1 },
                { pubkey: Z, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new TransactionInstruction(n);
        }
        static nonceAdvance(e) {
          const t = le.AdvanceNonceAccount,
            r = re(t),
            n = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: X, isSigner: !1, isWritable: !1 },
                { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new TransactionInstruction(n);
        }
        static nonceWithdraw(e) {
          const t = le.WithdrawNonceAccount,
            r = re(t, { lamports: e.lamports });
          return new TransactionInstruction({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: X, isSigner: !1, isWritable: !1 },
              { pubkey: Z, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static nonceAuthorize(e) {
          const t = le.AuthorizeNonceAccount,
            r = re(t, { authorized: T(e.newAuthorizedPubkey.toBuffer()) });
          return new TransactionInstruction({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static allocate(e) {
          let t, r;
          if ("basePubkey" in e) {
            const n = le.AllocateWithSeed;
            ((t = re(n, {
              base: T(e.basePubkey.toBuffer()),
              seed: e.seed,
              space: e.space,
              programId: T(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]));
          } else {
            const n = le.Allocate;
            ((t = re(n, { space: e.space })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
              ]));
          }
          return new TransactionInstruction({
            keys: r,
            programId: this.programId,
            data: t,
          });
        }
      }
      ((t.SystemProgram = SystemProgram),
        (SystemProgram.programId = new PublicKey(
          "11111111111111111111111111111111",
        )));
      const de = x - 300;
      class Loader {
        constructor() {}
        static getMinNumSignatures(e) {
          return 2 * (Math.ceil(e / Loader.chunkSize) + 1 + 1);
        }
        static async load(e, t, r, n, i) {
          {
            const s = await e.getMinimumBalanceForRentExemption(i.length),
              o = await e.getAccountInfo(r.publicKey, "confirmed");
            let a = null;
            if (null !== o) {
              if (o.executable)
                return (
                  console.error(
                    "Program load failed, account is already executable",
                  ),
                  !1
                );
              (o.data.length !== i.length &&
                ((a = a || new Transaction()),
                a.add(
                  SystemProgram.allocate({
                    accountPubkey: r.publicKey,
                    space: i.length,
                  }),
                )),
                o.owner.equals(n) ||
                  ((a = a || new Transaction()),
                  a.add(
                    SystemProgram.assign({
                      accountPubkey: r.publicKey,
                      programId: n,
                    }),
                  )),
                o.lamports < s &&
                  ((a = a || new Transaction()),
                  a.add(
                    SystemProgram.transfer({
                      fromPubkey: t.publicKey,
                      toPubkey: r.publicKey,
                      lamports: s - o.lamports,
                    }),
                  )));
            } else
              a = new Transaction().add(
                SystemProgram.createAccount({
                  fromPubkey: t.publicKey,
                  newAccountPubkey: r.publicKey,
                  lamports: s > 0 ? s : 1,
                  space: i.length,
                  programId: n,
                }),
              );
            null !== a && (await ee(e, a, [t, r], { commitment: "confirmed" }));
          }
          const o = h.struct([
              h.u32("instruction"),
              h.u32("offset"),
              h.u32("bytesLength"),
              h.u32("bytesLengthPadding"),
              h.seq(h.u8("byte"), h.offset(h.u32(), -8), "bytes"),
            ]),
            a = Loader.chunkSize;
          let c = 0,
            u = i,
            l = [];
          while (u.length > 0) {
            const i = u.slice(0, a),
              d = s.Buffer.alloc(a + 16);
            o.encode(
              {
                instruction: 0,
                offset: c,
                bytes: i,
                bytesLength: 0,
                bytesLengthPadding: 0,
              },
              d,
            );
            const h = new Transaction().add({
              keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }],
              programId: n,
              data: d,
            });
            if (
              (l.push(ee(e, h, [t, r], { commitment: "confirmed" })),
              e._rpcEndpoint.includes("solana.com"))
            ) {
              const e = 4;
              await te(1e3 / e);
            }
            ((c += a), (u = u.slice(a)));
          }
          await Promise.all(l);
          {
            const i = h.struct([h.u32("instruction")]),
              o = s.Buffer.alloc(i.span);
            i.encode({ instruction: 1 }, o);
            const a = new Transaction().add({
              keys: [
                { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                { pubkey: Z, isSigner: !1, isWritable: !1 },
              ],
              programId: n,
              data: o,
            });
            await ee(e, a, [t, r], { commitment: "confirmed" });
          }
          return !0;
        }
      }
      ((t.Loader = Loader), (Loader.chunkSize = de));
      t.BPF_LOADER_PROGRAM_ID = new PublicKey(
        "BPFLoader2111111111111111111111111111111111",
      );
      class BpfLoader {
        static getMinNumSignatures(e) {
          return Loader.getMinNumSignatures(e);
        }
        static load(e, t, r, n, s) {
          return Loader.load(e, t, r, s, n);
        }
      }
      t.BpfLoader = BpfLoader;
      var he = Object.prototype.toString,
        pe =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      function ge(e, t) {
        var r, n, s, i, o, a, c;
        if (!0 === e) return "true";
        if (!1 === e) return "false";
        switch (typeof e) {
          case "object":
            if (null === e) return null;
            if (e.toJSON && "function" === typeof e.toJSON)
              return ge(e.toJSON(), t);
            if (((c = he.call(e)), "[object Array]" === c)) {
              for (s = "[", n = e.length - 1, r = 0; r < n; r++)
                s += ge(e[r], !0) + ",";
              return (n > -1 && (s += ge(e[r], !0)), s + "]");
            }
            if ("[object Object]" === c) {
              ((i = pe(e).sort()), (n = i.length), (s = ""), (r = 0));
              while (r < n)
                ((o = i[r]),
                  (a = ge(e[o], !1)),
                  void 0 !== a &&
                    (s && (s += ","), (s += JSON.stringify(o) + ":" + a)),
                  r++);
              return "{" + s + "}";
            }
            return JSON.stringify(e);
          case "function":
          case "undefined":
            return t ? null : void 0;
          case "string":
            return JSON.stringify(e);
          default:
            return isFinite(e) ? e : null;
        }
      }
      var ye = function (e) {
          var t = ge(e, !1);
          if (void 0 !== t) return "" + t;
        },
        be = ye;
      const me = 32;
      function fe(e) {
        let t = 0;
        while (e > 1) ((e /= 2), t++);
        return t;
      }
      function ke(e) {
        return 0 === e
          ? 1
          : (e--,
            (e |= e >> 1),
            (e |= e >> 2),
            (e |= e >> 4),
            (e |= e >> 8),
            (e |= e >> 16),
            (e |= e >> 32),
            e + 1);
      }
      class EpochSchedule {
        constructor(e, t, r, n, s) {
          ((this.slotsPerEpoch = void 0),
            (this.leaderScheduleSlotOffset = void 0),
            (this.warmup = void 0),
            (this.firstNormalEpoch = void 0),
            (this.firstNormalSlot = void 0),
            (this.slotsPerEpoch = e),
            (this.leaderScheduleSlotOffset = t),
            (this.warmup = r),
            (this.firstNormalEpoch = n),
            (this.firstNormalSlot = s));
        }
        getEpoch(e) {
          return this.getEpochAndSlotIndex(e)[0];
        }
        getEpochAndSlotIndex(e) {
          if (e < this.firstNormalSlot) {
            const t = fe(ke(e + me + 1)) - fe(me) - 1,
              r = this.getSlotsInEpoch(t),
              n = e - (r - me);
            return [t, n];
          }
          {
            const t = e - this.firstNormalSlot,
              r = Math.floor(t / this.slotsPerEpoch),
              n = this.firstNormalEpoch + r,
              s = t % this.slotsPerEpoch;
            return [n, s];
          }
        }
        getFirstSlotInEpoch(e) {
          return e <= this.firstNormalEpoch
            ? (Math.pow(2, e) - 1) * me
            : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
                this.firstNormalSlot;
        }
        getLastSlotInEpoch(e) {
          return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
        }
        getSlotsInEpoch(e) {
          return e < this.firstNormalEpoch
            ? Math.pow(2, e + fe(me))
            : this.slotsPerEpoch;
        }
      }
      t.EpochSchedule = EpochSchedule;
      class SendTransactionError extends Error {
        constructor(e, t) {
          (super(e), (this.logs = void 0), (this.logs = t));
        }
      }
      t.SendTransactionError = SendTransactionError;
      t.SolanaJSONRPCErrorCode = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      };
      class SolanaJSONRPCError extends Error {
        constructor(e, t) {
          let { code: r, message: n, data: s } = e;
          (super(null != t ? `${t}: ${n}` : n),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = r),
            (this.data = s),
            (this.name = "SolanaJSONRPCError"));
        }
      }
      t.SolanaJSONRPCError = SolanaJSONRPCError;
      var Se = globalThis.fetch;
      const we = 160,
        Ie = 64,
        Pe = we / Ie,
        Ae = 1e3 / Pe;
      function _e(e, t) {
        let r;
        try {
          r = e.layout.decode(t);
        } catch (n) {
          throw new Error("invalid instruction; " + n);
        }
        if (r.typeIndex !== e.index)
          throw new Error(
            `invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`,
          );
        return r;
      }
      const Ee = 56;
      class AddressLookupTableAccount {
        constructor(e) {
          ((this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state));
        }
        isActive() {
          const e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          const t = _e(Te, e),
            r = e.length - Ee;
          (F(r >= 0, "lookup table is invalid"),
            F(r % 32 === 0, "lookup table is invalid"));
          const n = r / 32,
            { addresses: s } = h
              .struct([h.seq(N(), n, "addresses")])
              .decode(e.slice(Ee));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              0 !== t.authority.length ? new PublicKey(t.authority[0]) : void 0,
            addresses: s.map((e) => new PublicKey(e)),
          };
        }
      }
      t.AddressLookupTableAccount = AddressLookupTableAccount;
      const Te = {
          index: 1,
          layout: h.struct([
            h.u32("typeIndex"),
            ue("deactivationSlot"),
            h.nu64("lastExtendedSlot"),
            h.u8("lastExtendedStartIndex"),
            h.u8(),
            h.seq(N(), h.offset(h.u8(), -1), "authority"),
          ]),
        },
        ve = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
      function Re(e) {
        const t = e.match(ve);
        if (null == t)
          throw TypeError(`Failed to validate endpoint URL \`${e}\``);
        const [r, n, s, i] = t,
          o = e.startsWith("https:") ? "wss:" : "ws:",
          a = null == s ? null : parseInt(s.slice(1), 10),
          c = null == a ? "" : ":" + (a + 1);
        return `${o}//${n}${c}${i}`;
      }
      var Be;
      const Ce = (0, g.coerce)(
          (0, g.instance)(PublicKey),
          (0, g.string)(),
          (e) => new PublicKey(e),
        ),
        Ke = (0, g.tuple)([(0, g.string)(), (0, g.literal)("base64")]),
        xe = (0, g.coerce)((0, g.instance)(s.Buffer), Ke, (e) =>
          s.Buffer.from(e[0], "base64"),
        ),
        Oe = (t.BLOCKHASH_CACHE_TIMEOUT_MS = 3e4);
      function Le(e) {
        if (!1 === /^https?:/.test(e))
          throw new TypeError(
            "Endpoint URL must start with `http:` or `https:`.",
          );
        return e;
      }
      function Ne(e) {
        let t, r;
        if ("string" === typeof e) t = e;
        else if (e) {
          const { commitment: n, ...s } = e;
          ((t = n), (r = s));
        }
        return { commitment: t, config: r };
      }
      function ze(e) {
        return (0, g.union)([
          (0, g.type)({
            jsonrpc: (0, g.literal)("2.0"),
            id: (0, g.string)(),
            result: e,
          }),
          (0, g.type)({
            jsonrpc: (0, g.literal)("2.0"),
            id: (0, g.string)(),
            error: (0, g.type)({
              code: (0, g.unknown)(),
              message: (0, g.string)(),
              data: (0, g.optional)((0, g.any)()),
            }),
          }),
        ]);
      }
      const We = ze((0, g.unknown)());
      function Ve(e) {
        return (0, g.coerce)(ze(e), We, (t) =>
          "error" in t ? t : { ...t, result: (0, g.create)(t.result, e) },
        );
      }
      function Me(e) {
        return Ve(
          (0, g.type)({
            context: (0, g.type)({ slot: (0, g.number)() }),
            value: e,
          }),
        );
      }
      function Ue(e) {
        return (0, g.type)({
          context: (0, g.type)({ slot: (0, g.number)() }),
          value: e,
        });
      }
      function qe(e, t) {
        return 0 === e
          ? new MessageV0({
              header: t.header,
              staticAccountKeys: t.accountKeys.map((e) => new PublicKey(e)),
              recentBlockhash: t.recentBlockhash,
              compiledInstructions: t.instructions.map((e) => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: c.default.decode(e.data),
              })),
              addressTableLookups: t.addressTableLookups,
            })
          : new Message(t);
      }
      const De = (0, g.type)({
          foundation: (0, g.number)(),
          foundationTerm: (0, g.number)(),
          initial: (0, g.number)(),
          taper: (0, g.number)(),
          terminal: (0, g.number)(),
        }),
        He = Ve(
          (0, g.array)(
            (0, g.nullable)(
              (0, g.type)({
                epoch: (0, g.number)(),
                effectiveSlot: (0, g.number)(),
                amount: (0, g.number)(),
                postBalance: (0, g.number)(),
              }),
            ),
          ),
        ),
        Je = (0, g.type)({
          epoch: (0, g.number)(),
          slotIndex: (0, g.number)(),
          slotsInEpoch: (0, g.number)(),
          absoluteSlot: (0, g.number)(),
          blockHeight: (0, g.optional)((0, g.number)()),
          transactionCount: (0, g.optional)((0, g.number)()),
        }),
        Fe = (0, g.type)({
          slotsPerEpoch: (0, g.number)(),
          leaderScheduleSlotOffset: (0, g.number)(),
          warmup: (0, g.boolean)(),
          firstNormalEpoch: (0, g.number)(),
          firstNormalSlot: (0, g.number)(),
        }),
        Ye = (0, g.record)((0, g.string)(), (0, g.array)((0, g.number)())),
        $e = (0, g.nullable)((0, g.union)([(0, g.type)({}), (0, g.string)()])),
        je = (0, g.type)({ err: $e }),
        Ge = (0, g.literal)("receivedSignature"),
        Xe = (0, g.type)({
          "solana-core": (0, g.string)(),
          "feature-set": (0, g.optional)((0, g.number)()),
        }),
        Ze = Me(
          (0, g.type)({
            err: (0, g.nullable)(
              (0, g.union)([(0, g.type)({}), (0, g.string)()]),
            ),
            logs: (0, g.nullable)((0, g.array)((0, g.string)())),
            accounts: (0, g.optional)(
              (0, g.nullable)(
                (0, g.array)(
                  (0, g.nullable)(
                    (0, g.type)({
                      executable: (0, g.boolean)(),
                      owner: (0, g.string)(),
                      lamports: (0, g.number)(),
                      data: (0, g.array)((0, g.string)()),
                      rentEpoch: (0, g.optional)((0, g.number)()),
                    }),
                  ),
                ),
              ),
            ),
            unitsConsumed: (0, g.optional)((0, g.number)()),
            returnData: (0, g.optional)(
              (0, g.nullable)(
                (0, g.type)({
                  programId: (0, g.string)(),
                  data: (0, g.tuple)([
                    (0, g.string)(),
                    (0, g.literal)("base64"),
                  ]),
                }),
              ),
            ),
          }),
        ),
        Qe = Me(
          (0, g.type)({
            byIdentity: (0, g.record)(
              (0, g.string)(),
              (0, g.array)((0, g.number)()),
            ),
            range: (0, g.type)({
              firstSlot: (0, g.number)(),
              lastSlot: (0, g.number)(),
            }),
          }),
        );
      function et(e, t, r, n, s) {
        const i = r || Se;
        let o;
        n &&
          (o = async (e, t) => {
            const r = await new Promise((r, s) => {
              try {
                n(e, t, (e, t) => r([e, t]));
              } catch (i) {
                s(i);
              }
            });
            return await i(...r);
          });
        const a = new b.default(async (r, n) => {
          const a = void 0,
            c = {
              method: "POST",
              body: r,
              agent: a,
              headers: Object.assign(
                { "Content-Type": "application/json" },
                t || {},
                pr,
              ),
            };
          try {
            let t,
              r = 5,
              a = 500;
            for (;;) {
              if (((t = o ? await o(e, c) : await i(e, c)), 429 !== t.status))
                break;
              if (!0 === s) break;
              if (((r -= 1), 0 === r)) break;
              (console.log(
                `Server responded with ${t.status} ${t.statusText}.  Retrying after ${a}ms delay...`,
              ),
                await te(a),
                (a *= 2));
            }
            const u = await t.text();
            t.ok
              ? n(null, u)
              : n(new Error(`${t.status} ${t.statusText}: ${u}`));
          } catch (u) {
            u instanceof Error && n(u);
          }
        }, {});
        return a;
      }
      function tt(e) {
        return (t, r) =>
          new Promise((n, s) => {
            e.request(t, r, (e, t) => {
              e ? s(e) : n(t);
            });
          });
      }
      function rt(e) {
        return (t) =>
          new Promise((r, n) => {
            0 === t.length && r([]);
            const s = t.map((t) => e.request(t.methodName, t.args));
            e.request(s, (e, t) => {
              e ? n(e) : r(t);
            });
          });
      }
      const nt = Ve(De),
        st = Ve(Je),
        it = Ve(Fe),
        ot = Ve(Ye),
        at = Ve((0, g.number)()),
        ct = Me(
          (0, g.type)({
            total: (0, g.number)(),
            circulating: (0, g.number)(),
            nonCirculating: (0, g.number)(),
            nonCirculatingAccounts: (0, g.array)(Ce),
          }),
        ),
        ut = (0, g.type)({
          amount: (0, g.string)(),
          uiAmount: (0, g.nullable)((0, g.number)()),
          decimals: (0, g.number)(),
          uiAmountString: (0, g.optional)((0, g.string)()),
        }),
        lt = Me(
          (0, g.array)(
            (0, g.type)({
              address: Ce,
              amount: (0, g.string)(),
              uiAmount: (0, g.nullable)((0, g.number)()),
              decimals: (0, g.number)(),
              uiAmountString: (0, g.optional)((0, g.string)()),
            }),
          ),
        ),
        dt = Me(
          (0, g.array)(
            (0, g.type)({
              pubkey: Ce,
              account: (0, g.type)({
                executable: (0, g.boolean)(),
                owner: Ce,
                lamports: (0, g.number)(),
                data: xe,
                rentEpoch: (0, g.number)(),
              }),
            }),
          ),
        ),
        ht = (0, g.type)({
          program: (0, g.string)(),
          parsed: (0, g.unknown)(),
          space: (0, g.number)(),
        }),
        pt = Me(
          (0, g.array)(
            (0, g.type)({
              pubkey: Ce,
              account: (0, g.type)({
                executable: (0, g.boolean)(),
                owner: Ce,
                lamports: (0, g.number)(),
                data: ht,
                rentEpoch: (0, g.number)(),
              }),
            }),
          ),
        ),
        gt = Me(
          (0, g.array)((0, g.type)({ lamports: (0, g.number)(), address: Ce })),
        ),
        yt = (0, g.type)({
          executable: (0, g.boolean)(),
          owner: Ce,
          lamports: (0, g.number)(),
          data: xe,
          rentEpoch: (0, g.number)(),
        }),
        bt = (0, g.type)({ pubkey: Ce, account: yt }),
        mt = (0, g.coerce)(
          (0, g.union)([(0, g.instance)(s.Buffer), ht]),
          (0, g.union)([Ke, ht]),
          (e) => (Array.isArray(e) ? (0, g.create)(e, xe) : e),
        ),
        ft = (0, g.type)({
          executable: (0, g.boolean)(),
          owner: Ce,
          lamports: (0, g.number)(),
          data: mt,
          rentEpoch: (0, g.number)(),
        }),
        kt = (0, g.type)({ pubkey: Ce, account: ft }),
        St = (0, g.type)({
          state: (0, g.union)([
            (0, g.literal)("active"),
            (0, g.literal)("inactive"),
            (0, g.literal)("activating"),
            (0, g.literal)("deactivating"),
          ]),
          active: (0, g.number)(),
          inactive: (0, g.number)(),
        }),
        wt = Ve(
          (0, g.array)(
            (0, g.type)({
              signature: (0, g.string)(),
              slot: (0, g.number)(),
              err: $e,
              memo: (0, g.nullable)((0, g.string)()),
              blockTime: (0, g.optional)((0, g.nullable)((0, g.number)())),
            }),
          ),
        ),
        It = Ve(
          (0, g.array)(
            (0, g.type)({
              signature: (0, g.string)(),
              slot: (0, g.number)(),
              err: $e,
              memo: (0, g.nullable)((0, g.string)()),
              blockTime: (0, g.optional)((0, g.nullable)((0, g.number)())),
            }),
          ),
        ),
        Pt = (0, g.type)({ subscription: (0, g.number)(), result: Ue(yt) }),
        At = (0, g.type)({ pubkey: Ce, account: yt }),
        _t = (0, g.type)({ subscription: (0, g.number)(), result: Ue(At) }),
        Et = (0, g.type)({
          parent: (0, g.number)(),
          slot: (0, g.number)(),
          root: (0, g.number)(),
        }),
        Tt = (0, g.type)({ subscription: (0, g.number)(), result: Et }),
        vt = (0, g.union)([
          (0, g.type)({
            type: (0, g.union)([
              (0, g.literal)("firstShredReceived"),
              (0, g.literal)("completed"),
              (0, g.literal)("optimisticConfirmation"),
              (0, g.literal)("root"),
            ]),
            slot: (0, g.number)(),
            timestamp: (0, g.number)(),
          }),
          (0, g.type)({
            type: (0, g.literal)("createdBank"),
            parent: (0, g.number)(),
            slot: (0, g.number)(),
            timestamp: (0, g.number)(),
          }),
          (0, g.type)({
            type: (0, g.literal)("frozen"),
            slot: (0, g.number)(),
            timestamp: (0, g.number)(),
            stats: (0, g.type)({
              numTransactionEntries: (0, g.number)(),
              numSuccessfulTransactions: (0, g.number)(),
              numFailedTransactions: (0, g.number)(),
              maxTransactionsPerEntry: (0, g.number)(),
            }),
          }),
          (0, g.type)({
            type: (0, g.literal)("dead"),
            slot: (0, g.number)(),
            timestamp: (0, g.number)(),
            err: (0, g.string)(),
          }),
        ]),
        Rt = (0, g.type)({ subscription: (0, g.number)(), result: vt }),
        Bt = (0, g.type)({
          subscription: (0, g.number)(),
          result: Ue((0, g.union)([je, Ge])),
        }),
        Ct = (0, g.type)({
          subscription: (0, g.number)(),
          result: (0, g.number)(),
        }),
        Kt = (0, g.type)({
          pubkey: (0, g.string)(),
          gossip: (0, g.nullable)((0, g.string)()),
          tpu: (0, g.nullable)((0, g.string)()),
          rpc: (0, g.nullable)((0, g.string)()),
          version: (0, g.nullable)((0, g.string)()),
        }),
        xt = (0, g.type)({
          votePubkey: (0, g.string)(),
          nodePubkey: (0, g.string)(),
          activatedStake: (0, g.number)(),
          epochVoteAccount: (0, g.boolean)(),
          epochCredits: (0, g.array)(
            (0, g.tuple)([(0, g.number)(), (0, g.number)(), (0, g.number)()]),
          ),
          commission: (0, g.number)(),
          lastVote: (0, g.number)(),
          rootSlot: (0, g.nullable)((0, g.number)()),
        }),
        Ot = Ve(
          (0, g.type)({
            current: (0, g.array)(xt),
            delinquent: (0, g.array)(xt),
          }),
        ),
        Lt = (0, g.union)([
          (0, g.literal)("processed"),
          (0, g.literal)("confirmed"),
          (0, g.literal)("finalized"),
        ]),
        Nt = (0, g.type)({
          slot: (0, g.number)(),
          confirmations: (0, g.nullable)((0, g.number)()),
          err: $e,
          confirmationStatus: (0, g.optional)(Lt),
        }),
        zt = Me((0, g.array)((0, g.nullable)(Nt))),
        Wt = Ve((0, g.number)()),
        Vt = (0, g.type)({
          accountKey: Ce,
          writableIndexes: (0, g.array)((0, g.number)()),
          readonlyIndexes: (0, g.array)((0, g.number)()),
        }),
        Mt = (0, g.type)({
          signatures: (0, g.array)((0, g.string)()),
          message: (0, g.type)({
            accountKeys: (0, g.array)((0, g.string)()),
            header: (0, g.type)({
              numRequiredSignatures: (0, g.number)(),
              numReadonlySignedAccounts: (0, g.number)(),
              numReadonlyUnsignedAccounts: (0, g.number)(),
            }),
            instructions: (0, g.array)(
              (0, g.type)({
                accounts: (0, g.array)((0, g.number)()),
                data: (0, g.string)(),
                programIdIndex: (0, g.number)(),
              }),
            ),
            recentBlockhash: (0, g.string)(),
            addressTableLookups: (0, g.optional)((0, g.array)(Vt)),
          }),
        }),
        Ut = (0, g.type)({
          parsed: (0, g.unknown)(),
          program: (0, g.string)(),
          programId: Ce,
        }),
        qt = (0, g.type)({
          accounts: (0, g.array)(Ce),
          data: (0, g.string)(),
          programId: Ce,
        }),
        Dt = (0, g.union)([qt, Ut]),
        Ht = (0, g.union)([
          (0, g.type)({
            parsed: (0, g.unknown)(),
            program: (0, g.string)(),
            programId: (0, g.string)(),
          }),
          (0, g.type)({
            accounts: (0, g.array)((0, g.string)()),
            data: (0, g.string)(),
            programId: (0, g.string)(),
          }),
        ]),
        Jt = (0, g.coerce)(Dt, Ht, (e) =>
          "accounts" in e ? (0, g.create)(e, qt) : (0, g.create)(e, Ut),
        ),
        Ft = (0, g.type)({
          signatures: (0, g.array)((0, g.string)()),
          message: (0, g.type)({
            accountKeys: (0, g.array)(
              (0, g.type)({
                pubkey: Ce,
                signer: (0, g.boolean)(),
                writable: (0, g.boolean)(),
                source: (0, g.optional)(
                  (0, g.union)([
                    (0, g.literal)("transaction"),
                    (0, g.literal)("lookupTable"),
                  ]),
                ),
              }),
            ),
            instructions: (0, g.array)(Jt),
            recentBlockhash: (0, g.string)(),
            addressTableLookups: (0, g.optional)(
              (0, g.nullable)((0, g.array)(Vt)),
            ),
          }),
        }),
        Yt = (0, g.type)({
          accountIndex: (0, g.number)(),
          mint: (0, g.string)(),
          owner: (0, g.optional)((0, g.string)()),
          uiTokenAmount: ut,
        }),
        $t = (0, g.type)({
          writable: (0, g.array)(Ce),
          readonly: (0, g.array)(Ce),
        }),
        jt = (0, g.type)({
          err: $e,
          fee: (0, g.number)(),
          innerInstructions: (0, g.optional)(
            (0, g.nullable)(
              (0, g.array)(
                (0, g.type)({
                  index: (0, g.number)(),
                  instructions: (0, g.array)(
                    (0, g.type)({
                      accounts: (0, g.array)((0, g.number)()),
                      data: (0, g.string)(),
                      programIdIndex: (0, g.number)(),
                    }),
                  ),
                }),
              ),
            ),
          ),
          preBalances: (0, g.array)((0, g.number)()),
          postBalances: (0, g.array)((0, g.number)()),
          logMessages: (0, g.optional)(
            (0, g.nullable)((0, g.array)((0, g.string)())),
          ),
          preTokenBalances: (0, g.optional)((0, g.nullable)((0, g.array)(Yt))),
          postTokenBalances: (0, g.optional)((0, g.nullable)((0, g.array)(Yt))),
          loadedAddresses: (0, g.optional)($t),
          computeUnitsConsumed: (0, g.optional)((0, g.number)()),
        }),
        Gt = (0, g.type)({
          err: $e,
          fee: (0, g.number)(),
          innerInstructions: (0, g.optional)(
            (0, g.nullable)(
              (0, g.array)(
                (0, g.type)({
                  index: (0, g.number)(),
                  instructions: (0, g.array)(Jt),
                }),
              ),
            ),
          ),
          preBalances: (0, g.array)((0, g.number)()),
          postBalances: (0, g.array)((0, g.number)()),
          logMessages: (0, g.optional)(
            (0, g.nullable)((0, g.array)((0, g.string)())),
          ),
          preTokenBalances: (0, g.optional)((0, g.nullable)((0, g.array)(Yt))),
          postTokenBalances: (0, g.optional)((0, g.nullable)((0, g.array)(Yt))),
          loadedAddresses: (0, g.optional)($t),
          computeUnitsConsumed: (0, g.optional)((0, g.number)()),
        }),
        Xt = (0, g.union)([(0, g.literal)(0), (0, g.literal)("legacy")]),
        Zt = Ve(
          (0, g.nullable)(
            (0, g.type)({
              blockhash: (0, g.string)(),
              previousBlockhash: (0, g.string)(),
              parentSlot: (0, g.number)(),
              transactions: (0, g.array)(
                (0, g.type)({
                  transaction: Mt,
                  meta: (0, g.nullable)(jt),
                  version: (0, g.optional)(Xt),
                }),
              ),
              rewards: (0, g.optional)(
                (0, g.array)(
                  (0, g.type)({
                    pubkey: (0, g.string)(),
                    lamports: (0, g.number)(),
                    postBalance: (0, g.nullable)((0, g.number)()),
                    rewardType: (0, g.nullable)((0, g.string)()),
                  }),
                ),
              ),
              blockTime: (0, g.nullable)((0, g.number)()),
              blockHeight: (0, g.nullable)((0, g.number)()),
            }),
          ),
        ),
        Qt = Ve(
          (0, g.nullable)(
            (0, g.type)({
              blockhash: (0, g.string)(),
              previousBlockhash: (0, g.string)(),
              parentSlot: (0, g.number)(),
              transactions: (0, g.array)(
                (0, g.type)({
                  transaction: Ft,
                  meta: (0, g.nullable)(Gt),
                  version: (0, g.optional)(Xt),
                }),
              ),
              rewards: (0, g.optional)(
                (0, g.array)(
                  (0, g.type)({
                    pubkey: (0, g.string)(),
                    lamports: (0, g.number)(),
                    postBalance: (0, g.nullable)((0, g.number)()),
                    rewardType: (0, g.nullable)((0, g.string)()),
                  }),
                ),
              ),
              blockTime: (0, g.nullable)((0, g.number)()),
              blockHeight: (0, g.nullable)((0, g.number)()),
            }),
          ),
        ),
        er = Ve(
          (0, g.nullable)(
            (0, g.type)({
              blockhash: (0, g.string)(),
              previousBlockhash: (0, g.string)(),
              parentSlot: (0, g.number)(),
              transactions: (0, g.array)(
                (0, g.type)({ transaction: Mt, meta: (0, g.nullable)(jt) }),
              ),
              rewards: (0, g.optional)(
                (0, g.array)(
                  (0, g.type)({
                    pubkey: (0, g.string)(),
                    lamports: (0, g.number)(),
                    postBalance: (0, g.nullable)((0, g.number)()),
                    rewardType: (0, g.nullable)((0, g.string)()),
                  }),
                ),
              ),
              blockTime: (0, g.nullable)((0, g.number)()),
            }),
          ),
        ),
        tr = Ve(
          (0, g.nullable)(
            (0, g.type)({
              blockhash: (0, g.string)(),
              previousBlockhash: (0, g.string)(),
              parentSlot: (0, g.number)(),
              signatures: (0, g.array)((0, g.string)()),
              blockTime: (0, g.nullable)((0, g.number)()),
            }),
          ),
        ),
        rr = Ve(
          (0, g.nullable)(
            (0, g.type)({
              slot: (0, g.number)(),
              meta: jt,
              blockTime: (0, g.optional)((0, g.nullable)((0, g.number)())),
              transaction: Mt,
              version: (0, g.optional)(Xt),
            }),
          ),
        ),
        nr = Ve(
          (0, g.nullable)(
            (0, g.type)({
              slot: (0, g.number)(),
              transaction: Ft,
              meta: (0, g.nullable)(Gt),
              blockTime: (0, g.optional)((0, g.nullable)((0, g.number)())),
              version: (0, g.optional)(Xt),
            }),
          ),
        ),
        sr = Me(
          (0, g.type)({
            blockhash: (0, g.string)(),
            feeCalculator: (0, g.type)({
              lamportsPerSignature: (0, g.number)(),
            }),
          }),
        ),
        ir = Me(
          (0, g.type)({
            blockhash: (0, g.string)(),
            lastValidBlockHeight: (0, g.number)(),
          }),
        ),
        or = (0, g.type)({
          slot: (0, g.number)(),
          numTransactions: (0, g.number)(),
          numSlots: (0, g.number)(),
          samplePeriodSecs: (0, g.number)(),
        }),
        ar = Ve((0, g.array)(or)),
        cr = Me(
          (0, g.nullable)(
            (0, g.type)({
              feeCalculator: (0, g.type)({
                lamportsPerSignature: (0, g.number)(),
              }),
            }),
          ),
        ),
        ur = Ve((0, g.string)()),
        lr = Ve((0, g.string)()),
        dr = (0, g.type)({
          err: $e,
          logs: (0, g.array)((0, g.string)()),
          signature: (0, g.string)(),
        }),
        hr = (0, g.type)({ result: Ue(dr), subscription: (0, g.number)() }),
        pr = {
          "solana-client":
            "js/" +
            (null !== (Be = "0.0.0-development") && void 0 !== Be
              ? Be
              : "UNKNOWN"),
        };
      class Connection {
        constructor(e, t) {
          let r, n, s, i, o;
          ((this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            t && "string" === typeof t
              ? (this._commitment = t)
              : t &&
                ((this._commitment = t.commitment),
                (this._confirmTransactionInitialTimeout =
                  t.confirmTransactionInitialTimeout),
                (r = t.wsEndpoint),
                (n = t.httpHeaders),
                (s = t.fetch),
                (i = t.fetchMiddleware),
                (o = t.disableRetryOnRateLimit)),
            (this._rpcEndpoint = Le(e)),
            (this._rpcWsEndpoint = r || Re(e)),
            (this._rpcClient = et(e, n, s, i, o)),
            (this._rpcRequest = tt(this._rpcClient)),
            (this._rpcBatchRequest = rt(this._rpcClient)),
            (this._rpcWebSocket = new y.Client(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this),
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this),
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this),
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this),
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this),
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this),
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this),
            ));
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        async getBalanceAndContext(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgs([e.toBase58()], r, void 0, n),
            i = await this._rpcRequest("getBalance", s),
            o = (0, g.create)(i, Me((0, g.number)()));
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get balance for " + e.toBase58(),
            );
          return o.result;
        }
        async getBalance(e, t) {
          return await this.getBalanceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw new Error(
                "failed to get balance of account " + e.toBase58() + ": " + t,
              );
            });
        }
        async getBlockTime(e) {
          const t = await this._rpcRequest("getBlockTime", [e]),
            r = (0, g.create)(t, Ve((0, g.nullable)((0, g.number)())));
          if ("error" in r)
            throw new SolanaJSONRPCError(
              r.error,
              "failed to get block time for slot " + e,
            );
          return r.result;
        }
        async getMinimumLedgerSlot() {
          const e = await this._rpcRequest("minimumLedgerSlot", []),
            t = (0, g.create)(e, Ve((0, g.number)()));
          if ("error" in t)
            throw new SolanaJSONRPCError(
              t.error,
              "failed to get minimum ledger slot",
            );
          return t.result;
        }
        async getFirstAvailableBlock() {
          const e = await this._rpcRequest("getFirstAvailableBlock", []),
            t = (0, g.create)(e, at);
          if ("error" in t)
            throw new SolanaJSONRPCError(
              t.error,
              "failed to get first available block",
            );
          return t.result;
        }
        async getSupply(e) {
          let t = {};
          t =
            "string" === typeof e
              ? { commitment: e }
              : e
                ? { ...e, commitment: (e && e.commitment) || this.commitment }
                : { commitment: this.commitment };
          const r = await this._rpcRequest("getSupply", [t]),
            n = (0, g.create)(r, ct);
          if ("error" in n)
            throw new SolanaJSONRPCError(n.error, "failed to get supply");
          return n.result;
        }
        async getTokenSupply(e, t) {
          const r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenSupply", r),
            s = (0, g.create)(n, Me(ut));
          if ("error" in s)
            throw new SolanaJSONRPCError(s.error, "failed to get token supply");
          return s.result;
        }
        async getTokenAccountBalance(e, t) {
          const r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenAccountBalance", r),
            s = (0, g.create)(n, Me(ut));
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get token account balance",
            );
          return s.result;
        }
        async getTokenAccountsByOwner(e, t, r) {
          const { commitment: n, config: s } = Ne(r);
          let i = [e.toBase58()];
          "mint" in t
            ? i.push({ mint: t.mint.toBase58() })
            : i.push({ programId: t.programId.toBase58() });
          const o = this._buildArgs(i, n, "base64", s),
            a = await this._rpcRequest("getTokenAccountsByOwner", o),
            c = (0, g.create)(a, dt);
          if ("error" in c)
            throw new SolanaJSONRPCError(
              c.error,
              "failed to get token accounts owned by account " + e.toBase58(),
            );
          return c.result;
        }
        async getParsedTokenAccountsByOwner(e, t, r) {
          let n = [e.toBase58()];
          "mint" in t
            ? n.push({ mint: t.mint.toBase58() })
            : n.push({ programId: t.programId.toBase58() });
          const s = this._buildArgs(n, r, "jsonParsed"),
            i = await this._rpcRequest("getTokenAccountsByOwner", s),
            o = (0, g.create)(i, pt);
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get token accounts owned by account " + e.toBase58(),
            );
          return o.result;
        }
        async getLargestAccounts(e) {
          const t = {
              ...e,
              commitment: (e && e.commitment) || this.commitment,
            },
            r = t.filter || t.commitment ? [t] : [],
            n = await this._rpcRequest("getLargestAccounts", r),
            s = (0, g.create)(n, gt);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get largest accounts",
            );
          return s.result;
        }
        async getTokenLargestAccounts(e, t) {
          const r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenLargestAccounts", r),
            s = (0, g.create)(n, lt);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get token largest accounts",
            );
          return s.result;
        }
        async getAccountInfoAndContext(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgs([e.toBase58()], r, "base64", n),
            i = await this._rpcRequest("getAccountInfo", s),
            o = (0, g.create)(i, Me((0, g.nullable)(yt)));
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get info about account " + e.toBase58(),
            );
          return o.result;
        }
        async getParsedAccountInfo(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            i = await this._rpcRequest("getAccountInfo", s),
            o = (0, g.create)(i, Me((0, g.nullable)(ft)));
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get info about account " + e.toBase58(),
            );
          return o.result;
        }
        async getAccountInfo(e, t) {
          try {
            const r = await this.getAccountInfoAndContext(e, t);
            return r.value;
          } catch (r) {
            throw new Error(
              "failed to get info about account " + e.toBase58() + ": " + r,
            );
          }
        }
        async getMultipleParsedAccounts(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = e.map((e) => e.toBase58()),
            i = this._buildArgs([s], r, "jsonParsed", n),
            o = await this._rpcRequest("getMultipleAccounts", i),
            a = (0, g.create)(o, Me((0, g.array)((0, g.nullable)(ft))));
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get info for accounts " + s,
            );
          return a.result;
        }
        async getMultipleAccountsInfoAndContext(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = e.map((e) => e.toBase58()),
            i = this._buildArgs([s], r, "base64", n),
            o = await this._rpcRequest("getMultipleAccounts", i),
            a = (0, g.create)(o, Me((0, g.array)((0, g.nullable)(yt))));
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get info for accounts " + s,
            );
          return a.result;
        }
        async getMultipleAccountsInfo(e, t) {
          const r = await this.getMultipleAccountsInfoAndContext(e, t);
          return r.value;
        }
        async getStakeActivation(e, t, r) {
          const { commitment: n, config: s } = Ne(t),
            i = this._buildArgs([e.toBase58()], n, void 0, {
              ...s,
              epoch:
                null != r ? r : null === s || void 0 === s ? void 0 : s.epoch,
            }),
            o = await this._rpcRequest("getStakeActivation", i),
            a = (0, g.create)(o, Ve(St));
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get Stake Activation " + e.toBase58(),
            );
          return a.result;
        }
        async getProgramAccounts(e, t) {
          const { commitment: r, config: n } = Ne(t),
            { encoding: s, ...i } = n || {},
            o = this._buildArgs([e.toBase58()], r, s || "base64", i),
            a = await this._rpcRequest("getProgramAccounts", o),
            c = (0, g.create)(a, Ve((0, g.array)(bt)));
          if ("error" in c)
            throw new SolanaJSONRPCError(
              c.error,
              "failed to get accounts owned by program " + e.toBase58(),
            );
          return c.result;
        }
        async getParsedProgramAccounts(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            i = await this._rpcRequest("getProgramAccounts", s),
            o = (0, g.create)(i, Ve((0, g.array)(kt)));
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get accounts owned by program " + e.toBase58(),
            );
          return o.result;
        }
        async confirmTransaction(e, t) {
          let r, n;
          if ("string" == typeof e) r = e;
          else {
            const t = e;
            r = t.signature;
          }
          try {
            n = c.default.decode(r);
          } catch (s) {
            throw new Error("signature must be base58 encoded: " + r);
          }
          return (
            F(64 === n.length, "signature has invalid length"),
            "string" === typeof e
              ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                  commitment: t || this.commitment,
                  signature: r,
                })
              : "lastValidBlockHeight" in e
                ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy(
                    { commitment: t || this.commitment, strategy: e },
                  )
                : await this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e,
                  })
          );
        }
        getTransactionConfirmationPromise(e) {
          let t,
            r,
            { commitment: n, signature: s } = e,
            i = !1;
          const o = new Promise((e, o) => {
              try {
                t = this.onSignature(
                  s,
                  (r, n) => {
                    t = void 0;
                    const s = { context: n, value: r };
                    e({ __type: $.PROCESSED, response: s });
                  },
                  n,
                );
                const a = new Promise((e) => {
                  null == t
                    ? e()
                    : (r = this._onSubscriptionStateChange(t, (t) => {
                        "subscribed" === t && e();
                      }));
                });
                (async () => {
                  if ((await a, i)) return;
                  const t = await this.getSignatureStatus(s);
                  if (i) return;
                  if (null == t) return;
                  const { context: r, value: c } = t;
                  if (null != c)
                    if (null !== c && void 0 !== c && c.err) o(c.err);
                    else {
                      switch (n) {
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                          if ("processed" === c.confirmationStatus) return;
                          break;
                        case "finalized":
                        case "max":
                        case "root":
                          if (
                            "processed" === c.confirmationStatus ||
                            "confirmed" === c.confirmationStatus
                          )
                            return;
                          break;
                        case "processed":
                        case "recent":
                      }
                      ((i = !0),
                        e({
                          __type: $.PROCESSED,
                          response: { context: r, value: c },
                        }));
                    }
                })();
              } catch (a) {
                o(a);
              }
            }),
            a = () => {
              (r && (r(), (r = void 0)),
                t && (this.removeSignatureListener(t), (t = void 0)));
            };
          return { abortConfirmation: a, confirmationPromise: o };
        }
        async confirmTransactionUsingBlockHeightExceedanceStrategy(e) {
          let {
              commitment: t,
              strategy: { lastValidBlockHeight: r, signature: n },
            } = e,
            s = !1;
          const i = new Promise((e) => {
              const n = async () => {
                try {
                  const e = await this.getBlockHeight(t);
                  return e;
                } catch (e) {
                  return -1;
                }
              };
              (async () => {
                let t = await n();
                if (!s) {
                  while (t <= r) {
                    if ((await te(1e3), s)) return;
                    if (((t = await n()), s)) return;
                  }
                  e({ __type: $.BLOCKHEIGHT_EXCEEDED });
                }
              })();
            }),
            { abortConfirmation: o, confirmationPromise: a } =
              this.getTransactionConfirmationPromise({
                commitment: t,
                signature: n,
              });
          let c;
          try {
            const e = await Promise.race([a, i]);
            if (e.__type !== $.PROCESSED)
              throw new TransactionExpiredBlockheightExceededError(n);
            c = e.response;
          } finally {
            ((s = !0), o());
          }
          return c;
        }
        async confirmTransactionUsingDurableNonceStrategy(e) {
          let {
              commitment: t,
              strategy: {
                minContextSlot: r,
                nonceAccountPubkey: n,
                nonceValue: s,
                signature: i,
              },
            } = e,
            o = !1;
          const a = new Promise((e) => {
              let i = s,
                a = null;
              const c = async () => {
                try {
                  const { context: e, value: s } =
                    await this.getNonceAndContext(n, {
                      commitment: t,
                      minContextSlot: r,
                    });
                  return (
                    (a = e.slot),
                    null === s || void 0 === s ? void 0 : s.nonce
                  );
                } catch (e) {
                  return i;
                }
              };
              (async () => {
                if (((i = await c()), !o))
                  while (1) {
                    if (s !== i)
                      return void e({
                        __type: $.NONCE_INVALID,
                        slotInWhichNonceDidAdvance: a,
                      });
                    if ((await te(2e3), o)) return;
                    if (((i = await c()), o)) return;
                  }
              })();
            }),
            { abortConfirmation: c, confirmationPromise: u } =
              this.getTransactionConfirmationPromise({
                commitment: t,
                signature: i,
              });
          let l;
          try {
            const e = await Promise.race([u, a]);
            if (e.__type === $.PROCESSED) l = e.response;
            else {
              var d;
              let n;
              while (1) {
                var h;
                const t = await this.getSignatureStatus(i);
                if (null == t) break;
                if (
                  !(
                    t.context.slot <
                    (null !== (h = e.slotInWhichNonceDidAdvance) && void 0 !== h
                      ? h
                      : r)
                  )
                ) {
                  n = t;
                  break;
                }
                await te(400);
              }
              if (null === (d = n) || void 0 === d || !d.value)
                throw new TransactionExpiredNonceInvalidError(i);
              {
                const e = t || "finalized",
                  { confirmationStatus: r } = n.value;
                switch (e) {
                  case "processed":
                  case "recent":
                    if (
                      "processed" !== r &&
                      "confirmed" !== r &&
                      "finalized" !== r
                    )
                      throw new TransactionExpiredNonceInvalidError(i);
                    break;
                  case "confirmed":
                  case "single":
                  case "singleGossip":
                    if ("confirmed" !== r && "finalized" !== r)
                      throw new TransactionExpiredNonceInvalidError(i);
                    break;
                  case "finalized":
                  case "max":
                  case "root":
                    if ("finalized" !== r)
                      throw new TransactionExpiredNonceInvalidError(i);
                    break;
                  default:
                }
                l = { context: n.context, value: { err: n.value.err } };
              }
            }
          } finally {
            ((o = !0), c());
          }
          return l;
        }
        async confirmTransactionUsingLegacyTimeoutStrategy(e) {
          let t,
            { commitment: r, signature: n } = e;
          const s = new Promise((e) => {
              let n = this._confirmTransactionInitialTimeout || 6e4;
              switch (r) {
                case "processed":
                case "recent":
                case "single":
                case "confirmed":
                case "singleGossip":
                  n = this._confirmTransactionInitialTimeout || 3e4;
                  break;
              }
              t = setTimeout(() => e({ __type: $.TIMED_OUT, timeoutMs: n }), n);
            }),
            { abortConfirmation: i, confirmationPromise: o } =
              this.getTransactionConfirmationPromise({
                commitment: r,
                signature: n,
              });
          let a;
          try {
            const e = await Promise.race([o, s]);
            if (e.__type !== $.PROCESSED)
              throw new TransactionExpiredTimeoutError(n, e.timeoutMs / 1e3);
            a = e.response;
          } finally {
            (clearTimeout(t), i());
          }
          return a;
        }
        async getClusterNodes() {
          const e = await this._rpcRequest("getClusterNodes", []),
            t = (0, g.create)(e, Ve((0, g.array)(Kt)));
          if ("error" in t)
            throw new SolanaJSONRPCError(
              t.error,
              "failed to get cluster nodes",
            );
          return t.result;
        }
        async getVoteAccounts(e) {
          const t = this._buildArgs([], e),
            r = await this._rpcRequest("getVoteAccounts", t),
            n = (0, g.create)(r, Ot);
          if ("error" in n)
            throw new SolanaJSONRPCError(
              n.error,
              "failed to get vote accounts",
            );
          return n.result;
        }
        async getSlot(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getSlot", n),
            i = (0, g.create)(s, Ve((0, g.number)()));
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get slot");
          return i.result;
        }
        async getSlotLeader(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getSlotLeader", n),
            i = (0, g.create)(s, Ve((0, g.string)()));
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get slot leader");
          return i.result;
        }
        async getSlotLeaders(e, t) {
          const r = [e, t],
            n = await this._rpcRequest("getSlotLeaders", r),
            s = (0, g.create)(n, Ve((0, g.array)(Ce)));
          if ("error" in s)
            throw new SolanaJSONRPCError(s.error, "failed to get slot leaders");
          return s.result;
        }
        async getSignatureStatus(e, t) {
          const { context: r, value: n } = await this.getSignatureStatuses(
            [e],
            t,
          );
          F(1 === n.length);
          const s = n[0];
          return { context: r, value: s };
        }
        async getSignatureStatuses(e, t) {
          const r = [e];
          t && r.push(t);
          const n = await this._rpcRequest("getSignatureStatuses", r),
            s = (0, g.create)(n, zt);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get signature status",
            );
          return s.result;
        }
        async getTransactionCount(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getTransactionCount", n),
            i = (0, g.create)(s, Ve((0, g.number)()));
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get transaction count",
            );
          return i.result;
        }
        async getTotalSupply(e) {
          const t = await this.getSupply({
            commitment: e,
            excludeNonCirculatingAccountsList: !0,
          });
          return t.value.total;
        }
        async getInflationGovernor(e) {
          const t = this._buildArgs([], e),
            r = await this._rpcRequest("getInflationGovernor", t),
            n = (0, g.create)(r, nt);
          if ("error" in n)
            throw new SolanaJSONRPCError(n.error, "failed to get inflation");
          return n.result;
        }
        async getInflationReward(e, t, r) {
          const { commitment: n, config: s } = Ne(r),
            i = this._buildArgs([e.map((e) => e.toBase58())], n, void 0, {
              ...s,
              epoch:
                null != t ? t : null === s || void 0 === s ? void 0 : s.epoch,
            }),
            o = await this._rpcRequest("getInflationReward", i),
            a = (0, g.create)(o, He);
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get inflation reward",
            );
          return a.result;
        }
        async getEpochInfo(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getEpochInfo", n),
            i = (0, g.create)(s, st);
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get epoch info");
          return i.result;
        }
        async getEpochSchedule() {
          const e = await this._rpcRequest("getEpochSchedule", []),
            t = (0, g.create)(e, it);
          if ("error" in t)
            throw new SolanaJSONRPCError(
              t.error,
              "failed to get epoch schedule",
            );
          const r = t.result;
          return new EpochSchedule(
            r.slotsPerEpoch,
            r.leaderScheduleSlotOffset,
            r.warmup,
            r.firstNormalEpoch,
            r.firstNormalSlot,
          );
        }
        async getLeaderSchedule() {
          const e = await this._rpcRequest("getLeaderSchedule", []),
            t = (0, g.create)(e, ot);
          if ("error" in t)
            throw new SolanaJSONRPCError(
              t.error,
              "failed to get leader schedule",
            );
          return t.result;
        }
        async getMinimumBalanceForRentExemption(e, t) {
          const r = this._buildArgs([e], t),
            n = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
            s = (0, g.create)(n, Wt);
          return "error" in s
            ? (console.warn(
                "Unable to fetch minimum balance for rent exemption",
              ),
              0)
            : s.result;
        }
        async getRecentBlockhashAndContext(e) {
          const t = this._buildArgs([], e),
            r = await this._rpcRequest("getRecentBlockhash", t),
            n = (0, g.create)(r, sr);
          if ("error" in n)
            throw new SolanaJSONRPCError(
              n.error,
              "failed to get recent blockhash",
            );
          return n.result;
        }
        async getRecentPerformanceSamples(e) {
          const t = await this._rpcRequest(
              "getRecentPerformanceSamples",
              e ? [e] : [],
            ),
            r = (0, g.create)(t, ar);
          if ("error" in r)
            throw new SolanaJSONRPCError(
              r.error,
              "failed to get recent performance samples",
            );
          return r.result;
        }
        async getFeeCalculatorForBlockhash(e, t) {
          const r = this._buildArgs([e], t),
            n = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
            s = (0, g.create)(n, cr);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get fee calculator",
            );
          const { context: i, value: o } = s.result;
          return { context: i, value: null !== o ? o.feeCalculator : null };
        }
        async getFeeForMessage(e, t) {
          const r = e.serialize().toString("base64"),
            n = this._buildArgs([r], t),
            s = await this._rpcRequest("getFeeForMessage", n),
            i = (0, g.create)(s, Me((0, g.nullable)((0, g.number)())));
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get fee for message",
            );
          if (null === i.result) throw new Error("invalid blockhash");
          return i.result;
        }
        async getRecentBlockhash(e) {
          try {
            const t = await this.getRecentBlockhashAndContext(e);
            return t.value;
          } catch (t) {
            throw new Error("failed to get recent blockhash: " + t);
          }
        }
        async getLatestBlockhash(e) {
          try {
            const t = await this.getLatestBlockhashAndContext(e);
            return t.value;
          } catch (t) {
            throw new Error("failed to get recent blockhash: " + t);
          }
        }
        async getLatestBlockhashAndContext(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getLatestBlockhash", n),
            i = (0, g.create)(s, ir);
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get latest blockhash",
            );
          return i.result;
        }
        async getVersion() {
          const e = await this._rpcRequest("getVersion", []),
            t = (0, g.create)(e, Ve(Xe));
          if ("error" in t)
            throw new SolanaJSONRPCError(t.error, "failed to get version");
          return t.result;
        }
        async getGenesisHash() {
          const e = await this._rpcRequest("getGenesisHash", []),
            t = (0, g.create)(e, Ve((0, g.string)()));
          if ("error" in t)
            throw new SolanaJSONRPCError(t.error, "failed to get genesis hash");
          return t.result;
        }
        async getBlock(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            i = await this._rpcRequest("getBlock", s),
            o = (0, g.create)(i, Zt);
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get confirmed block",
            );
          const a = o.result;
          return a
            ? {
                ...a,
                transactions: a.transactions.map((e) => {
                  let { transaction: t, meta: r, version: n } = e;
                  return {
                    meta: r,
                    transaction: { ...t, message: qe(n, t.message) },
                    version: n,
                  };
                }),
              }
            : a;
        }
        async getParsedBlock(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            i = await this._rpcRequest("getBlock", s),
            o = (0, g.create)(i, Qt);
          if ("error" in o)
            throw new SolanaJSONRPCError(o.error, "failed to get block");
          return o.result;
        }
        async getBlockHeight(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getBlockHeight", n),
            i = (0, g.create)(s, Ve((0, g.number)()));
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get block height information",
            );
          return i.result;
        }
        async getBlockProduction(e) {
          let t, r;
          if ("string" === typeof e) r = e;
          else if (e) {
            const { commitment: n, ...s } = e;
            ((r = n), (t = s));
          }
          const n = this._buildArgs([], r, "base64", t),
            s = await this._rpcRequest("getBlockProduction", n),
            i = (0, g.create)(s, Qe);
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get block production information",
            );
          return i.result;
        }
        async getTransaction(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            i = await this._rpcRequest("getTransaction", s),
            o = (0, g.create)(i, rr);
          if ("error" in o)
            throw new SolanaJSONRPCError(o.error, "failed to get transaction");
          const a = o.result;
          return a
            ? {
                ...a,
                transaction: {
                  ...a.transaction,
                  message: qe(a.version, a.transaction.message),
                },
              }
            : a;
        }
        async getParsedTransaction(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            i = await this._rpcRequest("getTransaction", s),
            o = (0, g.create)(i, nr);
          if ("error" in o)
            throw new SolanaJSONRPCError(o.error, "failed to get transaction");
          return o.result;
        }
        async getParsedTransactions(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = e.map((e) => {
              const t = this._buildArgsAtLeastConfirmed(
                [e],
                r,
                "jsonParsed",
                n,
              );
              return { methodName: "getTransaction", args: t };
            }),
            i = await this._rpcBatchRequest(s),
            o = i.map((e) => {
              const t = (0, g.create)(e, nr);
              if ("error" in t)
                throw new SolanaJSONRPCError(
                  t.error,
                  "failed to get transactions",
                );
              return t.result;
            });
          return o;
        }
        async getTransactions(e, t) {
          const { commitment: r, config: n } = Ne(t),
            s = e.map((e) => {
              const t = this._buildArgsAtLeastConfirmed([e], r, void 0, n);
              return { methodName: "getTransaction", args: t };
            }),
            i = await this._rpcBatchRequest(s),
            o = i.map((e) => {
              const t = (0, g.create)(e, rr);
              if ("error" in t)
                throw new SolanaJSONRPCError(
                  t.error,
                  "failed to get transactions",
                );
              const r = t.result;
              return r
                ? {
                    ...r,
                    transaction: {
                      ...r.transaction,
                      message: qe(r.version, r.transaction.message),
                    },
                  }
                : r;
            });
          return o;
        }
        async getConfirmedBlock(e, t) {
          const r = this._buildArgsAtLeastConfirmed([e], t),
            n = await this._rpcRequest("getConfirmedBlock", r),
            s = (0, g.create)(n, er);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get confirmed block",
            );
          const i = s.result;
          if (!i) throw new Error("Confirmed block " + e + " not found");
          const o = {
            ...i,
            transactions: i.transactions.map((e) => {
              let { transaction: t, meta: r } = e;
              const n = new Message(t.message);
              return { meta: r, transaction: { ...t, message: n } };
            }),
          };
          return {
            ...o,
            transactions: o.transactions.map((e) => {
              let { transaction: t, meta: r } = e;
              return {
                meta: r,
                transaction: Transaction.populate(t.message, t.signatures),
              };
            }),
          };
        }
        async getBlocks(e, t, r) {
          const n = this._buildArgsAtLeastConfirmed(
              void 0 !== t ? [e, t] : [e],
              r,
            ),
            s = await this._rpcRequest("getBlocks", n),
            i = (0, g.create)(s, Ve((0, g.array)((0, g.number)())));
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get blocks");
          return i.result;
        }
        async getBlockSignatures(e, t) {
          const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            n = await this._rpcRequest("getBlock", r),
            s = (0, g.create)(n, tr);
          if ("error" in s)
            throw new SolanaJSONRPCError(s.error, "failed to get block");
          const i = s.result;
          if (!i) throw new Error("Block " + e + " not found");
          return i;
        }
        async getConfirmedBlockSignatures(e, t) {
          const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            n = await this._rpcRequest("getConfirmedBlock", r),
            s = (0, g.create)(n, tr);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get confirmed block",
            );
          const i = s.result;
          if (!i) throw new Error("Confirmed block " + e + " not found");
          return i;
        }
        async getConfirmedTransaction(e, t) {
          const r = this._buildArgsAtLeastConfirmed([e], t),
            n = await this._rpcRequest("getConfirmedTransaction", r),
            s = (0, g.create)(n, rr);
          if ("error" in s)
            throw new SolanaJSONRPCError(s.error, "failed to get transaction");
          const i = s.result;
          if (!i) return i;
          const o = new Message(i.transaction.message),
            a = i.transaction.signatures;
          return { ...i, transaction: Transaction.populate(o, a) };
        }
        async getParsedConfirmedTransaction(e, t) {
          const r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
            n = await this._rpcRequest("getConfirmedTransaction", r),
            s = (0, g.create)(n, nr);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get confirmed transaction",
            );
          return s.result;
        }
        async getParsedConfirmedTransactions(e, t) {
          const r = e.map((e) => {
              const r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed");
              return { methodName: "getConfirmedTransaction", args: r };
            }),
            n = await this._rpcBatchRequest(r),
            s = n.map((e) => {
              const t = (0, g.create)(e, nr);
              if ("error" in t)
                throw new SolanaJSONRPCError(
                  t.error,
                  "failed to get confirmed transactions",
                );
              return t.result;
            });
          return s;
        }
        async getConfirmedSignaturesForAddress(e, t, r) {
          let n = {},
            s = await this.getFirstAvailableBlock();
          while (!("until" in n)) {
            if ((t--, t <= 0 || t < s)) break;
            try {
              const e = await this.getConfirmedBlockSignatures(t, "finalized");
              e.signatures.length > 0 &&
                (n.until = e.signatures[e.signatures.length - 1].toString());
            } catch (a) {
              if (a instanceof Error && a.message.includes("skipped")) continue;
              throw a;
            }
          }
          let i = await this.getSlot("finalized");
          while (!("before" in n)) {
            if ((r++, r > i)) break;
            try {
              const e = await this.getConfirmedBlockSignatures(r);
              e.signatures.length > 0 &&
                (n.before = e.signatures[e.signatures.length - 1].toString());
            } catch (a) {
              if (a instanceof Error && a.message.includes("skipped")) continue;
              throw a;
            }
          }
          const o = await this.getConfirmedSignaturesForAddress2(e, n);
          return o.map((e) => e.signature);
        }
        async getConfirmedSignaturesForAddress2(e, t, r) {
          const n = this._buildArgsAtLeastConfirmed(
              [e.toBase58()],
              r,
              void 0,
              t,
            ),
            s = await this._rpcRequest("getConfirmedSignaturesForAddress2", n),
            i = (0, g.create)(s, wt);
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get confirmed signatures for address",
            );
          return i.result;
        }
        async getSignaturesForAddress(e, t, r) {
          const n = this._buildArgsAtLeastConfirmed(
              [e.toBase58()],
              r,
              void 0,
              t,
            ),
            s = await this._rpcRequest("getSignaturesForAddress", n),
            i = (0, g.create)(s, It);
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get signatures for address",
            );
          return i.result;
        }
        async getAddressLookupTable(e, t) {
          const { context: r, value: n } = await this.getAccountInfoAndContext(
            e,
            t,
          );
          let s = null;
          return (
            null !== n &&
              (s = new AddressLookupTableAccount({
                key: e,
                state: AddressLookupTableAccount.deserialize(n.data),
              })),
            { context: r, value: s }
          );
        }
        async getNonceAndContext(e, t) {
          const { context: r, value: n } = await this.getAccountInfoAndContext(
            e,
            t,
          );
          let s = null;
          return (
            null !== n && (s = NonceAccount.fromAccountData(n.data)),
            { context: r, value: s }
          );
        }
        async getNonce(e, t) {
          return await this.getNonceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw new Error(
                "failed to get nonce for account " + e.toBase58() + ": " + t,
              );
            });
        }
        async requestAirdrop(e, t) {
          const r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
            n = (0, g.create)(r, ur);
          if ("error" in n)
            throw new SolanaJSONRPCError(
              n.error,
              `airdrop to ${e.toBase58()} failed`,
            );
          return n.result;
        }
        async _blockhashWithExpiryBlockHeight(e) {
          if (!e) {
            while (this._pollingBlockhash) await te(100);
            const e = Date.now() - this._blockhashInfo.lastFetch,
              t = e >= Oe;
            if (null !== this._blockhashInfo.latestBlockhash && !t)
              return this._blockhashInfo.latestBlockhash;
          }
          return await this._pollNewBlockhash();
        }
        async _pollNewBlockhash() {
          this._pollingBlockhash = !0;
          try {
            const e = Date.now(),
              t = this._blockhashInfo.latestBlockhash,
              r = t ? t.blockhash : null;
            for (let n = 0; n < 50; n++) {
              const e = await this.getLatestBlockhash("finalized");
              if (r !== e.blockhash)
                return (
                  (this._blockhashInfo = {
                    latestBlockhash: e,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: [],
                  }),
                  e
                );
              await te(Ae / 2);
            }
            throw new Error(
              `Unable to obtain a new blockhash after ${Date.now() - e}ms`,
            );
          } finally {
            this._pollingBlockhash = !1;
          }
        }
        async getStakeMinimumDelegation(e) {
          const { commitment: t, config: r } = Ne(e),
            n = this._buildArgs([], t, "base64", r),
            s = await this._rpcRequest("getStakeMinimumDelegation", n),
            i = (0, g.create)(s, Me((0, g.number)()));
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get stake minimum delegation",
            );
          return i.result;
        }
        async simulateTransaction(e, t, r) {
          if ("message" in e) {
            const n = e,
              i = n.serialize(),
              o = s.Buffer.from(i).toString("base64");
            if (Array.isArray(t) || void 0 !== r)
              throw new Error("Invalid arguments");
            const a = t || {};
            ((a.encoding = "base64"),
              "commitment" in a || (a.commitment = this.commitment));
            const c = [o, a],
              u = await this._rpcRequest("simulateTransaction", c),
              l = (0, g.create)(u, Ze);
            if ("error" in l)
              throw new Error(
                "failed to simulate transaction: " + l.error.message,
              );
            return l.result;
          }
          let n;
          if (e instanceof Transaction) {
            let t = e;
            ((n = new Transaction()),
              (n.feePayer = t.feePayer),
              (n.instructions = e.instructions),
              (n.nonceInfo = t.nonceInfo),
              (n.signatures = t.signatures));
          } else
            ((n = Transaction.populate(e)), (n._message = n._json = void 0));
          if (void 0 !== t && !Array.isArray(t))
            throw new Error("Invalid arguments");
          const i = t;
          if (n.nonceInfo && i) n.sign(...i);
          else {
            let e = this._disableBlockhashCaching;
            for (;;) {
              const t = await this._blockhashWithExpiryBlockHeight(e);
              if (
                ((n.lastValidBlockHeight = t.lastValidBlockHeight),
                (n.recentBlockhash = t.blockhash),
                !i)
              )
                break;
              if ((n.sign(...i), !n.signature)) throw new Error("!signature");
              const r = n.signature.toString("base64");
              if (
                !this._blockhashInfo.simulatedSignatures.includes(r) &&
                !this._blockhashInfo.transactionSignatures.includes(r)
              ) {
                this._blockhashInfo.simulatedSignatures.push(r);
                break;
              }
              e = !0;
            }
          }
          const o = n._compile(),
            a = o.serialize(),
            c = n._serialize(a),
            u = c.toString("base64"),
            l = { encoding: "base64", commitment: this.commitment };
          if (r) {
            const e = (Array.isArray(r) ? r : o.nonProgramIds()).map((e) =>
              e.toBase58(),
            );
            l["accounts"] = { encoding: "base64", addresses: e };
          }
          i && (l.sigVerify = !0);
          const d = [u, l],
            h = await this._rpcRequest("simulateTransaction", d),
            p = (0, g.create)(h, Ze);
          if ("error" in p) {
            let e;
            if (
              "data" in p.error &&
              ((e = p.error.data.logs), e && Array.isArray(e))
            ) {
              const t = "\n    ",
                r = t + e.join(t);
              console.error(p.error.message, r);
            }
            throw new SendTransactionError(
              "failed to simulate transaction: " + p.error.message,
              e,
            );
          }
          return p.result;
        }
        async sendTransaction(e, t, r) {
          if ("version" in e) {
            if (t && Array.isArray(t)) throw new Error("Invalid arguments");
            const n = e.serialize();
            return await this.sendRawTransaction(n, r);
          }
          if (void 0 === t || !Array.isArray(t))
            throw new Error("Invalid arguments");
          const n = t;
          if (e.nonceInfo) e.sign(...n);
          else {
            let t = this._disableBlockhashCaching;
            for (;;) {
              const r = await this._blockhashWithExpiryBlockHeight(t);
              if (
                ((e.lastValidBlockHeight = r.lastValidBlockHeight),
                (e.recentBlockhash = r.blockhash),
                e.sign(...n),
                !e.signature)
              )
                throw new Error("!signature");
              const s = e.signature.toString("base64");
              if (!this._blockhashInfo.transactionSignatures.includes(s)) {
                this._blockhashInfo.transactionSignatures.push(s);
                break;
              }
              t = !0;
            }
          }
          const s = e.serialize();
          return await this.sendRawTransaction(s, r);
        }
        async sendRawTransaction(e, t) {
          const r = T(e).toString("base64"),
            n = await this.sendEncodedTransaction(r, t);
          return n;
        }
        async sendEncodedTransaction(e, t) {
          const r = { encoding: "base64" },
            n = t && t.skipPreflight,
            s = (t && t.preflightCommitment) || this.commitment;
          (t && null != t.maxRetries && (r.maxRetries = t.maxRetries),
            t &&
              null != t.minContextSlot &&
              (r.minContextSlot = t.minContextSlot),
            n && (r.skipPreflight = n),
            s && (r.preflightCommitment = s));
          const i = [e, r],
            o = await this._rpcRequest("sendTransaction", i),
            a = (0, g.create)(o, lr);
          if ("error" in a) {
            let e;
            throw (
              "data" in a.error && (e = a.error.data.logs),
              new SendTransactionError(
                "failed to send transaction: " + a.error.message,
                e,
              )
            );
          }
          return a.result;
        }
        _wsOnOpen() {
          ((this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              this._rpcWebSocket.notify("ping").catch(() => {});
            }, 5e3)),
            this._updateSubscriptions());
        }
        _wsOnError(e) {
          ((this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message));
        }
        _wsOnClose(e) {
          ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            1e3 !== e
              ? ((this._subscriptionCallbacksByServerSubscriptionId = {}),
                Object.entries(this._subscriptionsByHash).forEach((e) => {
                  let [t, r] = e;
                  this._setSubscription(t, { ...r, state: "pending" });
                }))
              : this._updateSubscriptions());
        }
        _setSubscription(e, t) {
          var r;
          const n =
            null === (r = this._subscriptionsByHash[e]) || void 0 === r
              ? void 0
              : r.state;
          if (((this._subscriptionsByHash[e] = t), n !== t.state)) {
            const r = this._subscriptionStateChangeCallbacksByHash[e];
            r &&
              r.forEach((e) => {
                try {
                  e(t.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          var r;
          const n = this._subscriptionHashByClientSubscriptionId[e];
          if (null == n) return () => {};
          const s =
            (r = this._subscriptionStateChangeCallbacksByHash)[n] ||
            (r[n] = new Set());
          return (
            s.add(t),
            () => {
              (s.delete(t),
                0 === s.size &&
                  delete this._subscriptionStateChangeCallbacksByHash[n]);
            }
          );
        }
        async _updateSubscriptions() {
          if (0 === Object.keys(this._subscriptionsByHash).length)
            return void (
              this._rpcWebSocketConnected &&
              ((this._rpcWebSocketConnected = !1),
              (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                  this._rpcWebSocket.close();
                } catch (e) {
                  e instanceof Error &&
                    console.log(
                      "Error when closing socket connection: " + e.message,
                    );
                }
              }, 500)))
            );
          if (
            (null !== this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null),
              (this._rpcWebSocketConnected = !0)),
            !this._rpcWebSocketConnected)
          )
            return void this._rpcWebSocket.connect();
          const e = this._rpcWebSocketGeneration,
            t = () => e === this._rpcWebSocketGeneration;
          await Promise.all(
            Object.keys(this._subscriptionsByHash).map(async (e) => {
              const r = this._subscriptionsByHash[e];
              if (void 0 !== r)
                switch (r.state) {
                  case "pending":
                  case "unsubscribed":
                    if (0 === r.callbacks.size)
                      return (
                        delete this._subscriptionsByHash[e],
                        "unsubscribed" === r.state &&
                          delete this
                            ._subscriptionCallbacksByServerSubscriptionId[
                            r.serverSubscriptionId
                          ],
                        void (await this._updateSubscriptions())
                      );
                    await (async () => {
                      const { args: n, method: s } = r;
                      try {
                        this._setSubscription(e, {
                          ...r,
                          state: "subscribing",
                        });
                        const t = await this._rpcWebSocket.call(s, n);
                        (this._setSubscription(e, {
                          ...r,
                          serverSubscriptionId: t,
                          state: "subscribed",
                        }),
                          (this._subscriptionCallbacksByServerSubscriptionId[
                            t
                          ] = r.callbacks),
                          await this._updateSubscriptions());
                      } catch (i) {
                        if (
                          (i instanceof Error &&
                            console.error(
                              s + " error for argument",
                              n,
                              i.message,
                            ),
                          !t())
                        )
                          return;
                        (this._setSubscription(e, { ...r, state: "pending" }),
                          await this._updateSubscriptions());
                      }
                    })();
                    break;
                  case "subscribed":
                    0 === r.callbacks.size &&
                      (await (async () => {
                        const {
                          serverSubscriptionId: n,
                          unsubscribeMethod: s,
                        } = r;
                        if (this._subscriptionsAutoDisposedByRpc.has(n))
                          this._subscriptionsAutoDisposedByRpc.delete(n);
                        else {
                          (this._setSubscription(e, {
                            ...r,
                            state: "unsubscribing",
                          }),
                            this._setSubscription(e, {
                              ...r,
                              state: "unsubscribing",
                            }));
                          try {
                            await this._rpcWebSocket.call(s, [n]);
                          } catch (i) {
                            if (
                              (i instanceof Error &&
                                console.error(s + " error:", i.message),
                              !t())
                            )
                              return;
                            return (
                              this._setSubscription(e, {
                                ...r,
                                state: "subscribed",
                              }),
                              void (await this._updateSubscriptions())
                            );
                          }
                        }
                        (this._setSubscription(e, {
                          ...r,
                          state: "unsubscribed",
                        }),
                          await this._updateSubscriptions());
                      })());
                    break;
                }
            }),
          );
        }
        _handleServerNotification(e, t) {
          const r = this._subscriptionCallbacksByServerSubscriptionId[e];
          void 0 !== r &&
            r.forEach((e) => {
              try {
                e(...t);
              } catch (r) {
                console.error(r);
              }
            });
        }
        _wsOnAccountNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, Pt);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          const r = this._nextClientSubscriptionId++,
            n = be([e.method, t], !0),
            s = this._subscriptionsByHash[n];
          return (
            void 0 === s
              ? (this._subscriptionsByHash[n] = {
                  ...e,
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                })
              : s.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[r] = n),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] =
              async () => {
                (delete this
                  ._subscriptionDisposeFunctionsByClientSubscriptionId[r],
                  delete this._subscriptionHashByClientSubscriptionId[r]);
                const t = this._subscriptionsByHash[n];
                (F(
                  void 0 !== t,
                  "Could not find a `Subscription` when tearing down client subscription #" +
                    r,
                ),
                  t.callbacks.delete(e.callback),
                  await this._updateSubscriptions());
              }),
            this._updateSubscriptions(),
            r
          );
        }
        onAccountChange(e, t, r) {
          const n = this._buildArgs(
            [e.toBase58()],
            r || this._commitment || "finalized",
            "base64",
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            n,
          );
        }
        async removeAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "account change");
        }
        _wsOnProgramAccountNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, _t);
          this._handleServerNotification(r, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, r, n) {
          const s = this._buildArgs(
            [e.toBase58()],
            r || this._commitment || "finalized",
            "base64",
            n ? { filters: n } : void 0,
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            s,
          );
        }
        async removeProgramAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(
            e,
            "program account change",
          );
        }
        onLogs(e, t, r) {
          const n = this._buildArgs(
            ["object" === typeof e ? { mentions: [e.toString()] } : e],
            r || this._commitment || "finalized",
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            n,
          );
        }
        async removeOnLogsListener(e) {
          await this._unsubscribeClientSubscription(e, "logs");
        }
        _wsOnLogsNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, hr);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, Tt);
          this._handleServerNotification(r, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            [],
          );
        }
        async removeSlotChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "slot change");
        }
        _wsOnSlotUpdatesNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, Rt);
          this._handleServerNotification(r, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            [],
          );
        }
        async removeSlotUpdateListener(e) {
          await this._unsubscribeClientSubscription(e, "slot update");
        }
        async _unsubscribeClientSubscription(e, t) {
          const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
          r
            ? await r()
            : console.warn(
                `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`,
              );
        }
        _buildArgs(e, t, r, n) {
          const s = t || this._commitment;
          if (s || r || n) {
            let t = {};
            (r && (t.encoding = r),
              s && (t.commitment = s),
              n && (t = Object.assign(t, n)),
              e.push(t));
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, r, n) {
          const s = t || this._commitment;
          if (s && !["confirmed", "finalized"].includes(s))
            throw new Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`",
            );
          return this._buildArgs(e, t, r, n);
        }
        _wsOnSignatureNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, Bt);
          ("receivedSignature" !== t.value &&
            this._subscriptionsAutoDisposedByRpc.add(r),
            this._handleServerNotification(
              r,
              "receivedSignature" === t.value
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context],
            ));
        }
        onSignature(e, t, r) {
          const n = this._buildArgs([e], r || this._commitment || "finalized"),
            s = this._makeSubscription(
              {
                callback: (e, r) => {
                  if ("status" === e.type) {
                    t(e.result, r);
                    try {
                      this.removeSignatureListener(s);
                    } catch (n) {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              n,
            );
          return s;
        }
        onSignatureWithOptions(e, t, r) {
          const { commitment: n, ...s } = {
              ...r,
              commitment:
                (r && r.commitment) || this._commitment || "finalized",
            },
            i = this._buildArgs([e], n, void 0, s),
            o = this._makeSubscription(
              {
                callback: (e, r) => {
                  t(e, r);
                  try {
                    this.removeSignatureListener(o);
                  } catch (n) {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              i,
            );
          return o;
        }
        async removeSignatureListener(e) {
          await this._unsubscribeClientSubscription(e, "signature result");
        }
        _wsOnRootNotification(e) {
          const { result: t, subscription: r } = (0, g.create)(e, Ct);
          this._handleServerNotification(r, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            [],
          );
        }
        async removeRootChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "root change");
        }
      }
      t.Connection = Connection;
      class Keypair {
        constructor(e) {
          ((this._keypair = void 0),
            (this._keypair = null !== e && void 0 !== e ? e : I()));
        }
        static generate() {
          return new Keypair(I());
        }
        static fromSecretKey(e, t) {
          if (64 !== e.byteLength) throw new Error("bad secret key size");
          const r = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            const t = e.slice(0, 32),
              n = P(t);
            for (let e = 0; e < 32; e++)
              if (r[e] !== n[e])
                throw new Error("provided secretKey is invalid");
          }
          return new Keypair({ publicKey: r, secretKey: e });
        }
        static fromSeed(e) {
          const t = P(e),
            r = new Uint8Array(64);
          return (
            r.set(e),
            r.set(t, 32),
            new Keypair({ publicKey: t, secretKey: r })
          );
        }
        get publicKey() {
          return new PublicKey(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }
      t.Keypair = Keypair;
      const gr = (t.LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: h.struct([
            h.u32("instruction"),
            ue("recentSlot"),
            h.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: h.struct([h.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: h.struct([
            h.u32("instruction"),
            ue(),
            h.seq(N(), h.offset(h.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: h.struct([h.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: h.struct([h.u32("instruction")]),
        },
      }));
      class AddressLookupTableInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = h.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(gr))
            if (i.index == r) {
              n = s;
              break;
            }
          if (!n)
            throw new Error(
              "Invalid Instruction. Should be a LookupTable Instruction",
            );
          return n;
        }
        static decodeCreateLookupTable(e) {
          (this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4));
          const { recentSlot: t } = ne(gr.CreateLookupTable, e.data);
          return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t),
          };
        }
        static decodeExtendLookupTable(e) {
          if ((this.checkProgramId(e.programId), e.keys.length < 2))
            throw new Error(
              `invalid instruction; found ${e.keys.length} keys, expected at least 2`,
            );
          const { addresses: t } = ne(gr.ExtendLookupTable, e.data);
          return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map((e) => new PublicKey(e)),
          };
        }
        static decodeCloseLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
              lookupTable: e.keys[0].pubkey,
              authority: e.keys[1].pubkey,
              recipient: e.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(AddressLookupTableProgram.programId))
            throw new Error(
              "invalid instruction; programId is not AddressLookupTable Program",
            );
        }
        static checkKeysLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`,
            );
        }
      }
      t.AddressLookupTableInstruction = AddressLookupTableInstruction;
      class AddressLookupTableProgram {
        constructor() {}
        static createLookupTable(e) {
          const [t, r] = PublicKey.findProgramAddressSync(
              [
                e.authority.toBuffer(),
                (0, p.toBufferLE)(BigInt(e.recentSlot), 8),
              ],
              this.programId,
            ),
            n = gr.CreateLookupTable,
            s = re(n, { recentSlot: BigInt(e.recentSlot), bumpSeed: r }),
            i = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: SystemProgram.programId, isSigner: !1, isWritable: !1 },
            ];
          return [
            new TransactionInstruction({
              programId: this.programId,
              keys: i,
              data: s,
            }),
            t,
          ];
        }
        static freezeLookupTable(e) {
          const t = gr.FreezeLookupTable,
            r = re(t),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new TransactionInstruction({
            programId: this.programId,
            keys: n,
            data: r,
          });
        }
        static extendLookupTable(e) {
          const t = gr.ExtendLookupTable,
            r = re(t, { addresses: e.addresses.map((e) => e.toBytes()) }),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              n.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                {
                  pubkey: SystemProgram.programId,
                  isSigner: !1,
                  isWritable: !1,
                },
              ),
            new TransactionInstruction({
              programId: this.programId,
              keys: n,
              data: r,
            })
          );
        }
        static deactivateLookupTable(e) {
          const t = gr.DeactivateLookupTable,
            r = re(t),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new TransactionInstruction({
            programId: this.programId,
            keys: n,
            data: r,
          });
        }
        static closeLookupTable(e) {
          const t = gr.CloseLookupTable,
            r = re(t),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new TransactionInstruction({
            programId: this.programId,
            keys: n,
            data: r,
          });
        }
      }
      ((t.AddressLookupTableProgram = AddressLookupTableProgram),
        (AddressLookupTableProgram.programId = new PublicKey(
          "AddressLookupTab1e1111111111111111111111111",
        )));
      class ComputeBudgetInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = h.u8("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(yr))
            if (i.index == r) {
              n = s;
              break;
            }
          if (!n)
            throw new Error(
              "Instruction type incorrect; not a ComputeBudgetInstruction",
            );
          return n;
        }
        static decodeRequestUnits(e) {
          this.checkProgramId(e.programId);
          const { units: t, additionalFee: r } = ne(yr.RequestUnits, e.data);
          return { units: t, additionalFee: r };
        }
        static decodeRequestHeapFrame(e) {
          this.checkProgramId(e.programId);
          const { bytes: t } = ne(yr.RequestHeapFrame, e.data);
          return { bytes: t };
        }
        static decodeSetComputeUnitLimit(e) {
          this.checkProgramId(e.programId);
          const { units: t } = ne(yr.SetComputeUnitLimit, e.data);
          return { units: t };
        }
        static decodeSetComputeUnitPrice(e) {
          this.checkProgramId(e.programId);
          const { microLamports: t } = ne(yr.SetComputeUnitPrice, e.data);
          return { microLamports: t };
        }
        static checkProgramId(e) {
          if (!e.equals(ComputeBudgetProgram.programId))
            throw new Error(
              "invalid instruction; programId is not ComputeBudgetProgram",
            );
        }
      }
      t.ComputeBudgetInstruction = ComputeBudgetInstruction;
      const yr = (t.COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: h.struct([
            h.u8("instruction"),
            h.u32("units"),
            h.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: h.struct([h.u8("instruction"), h.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: h.struct([h.u8("instruction"), h.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: h.struct([h.u8("instruction"), ue("microLamports")]),
        },
      }));
      class ComputeBudgetProgram {
        constructor() {}
        static requestUnits(e) {
          const t = yr.RequestUnits,
            r = re(t, e);
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
        static requestHeapFrame(e) {
          const t = yr.RequestHeapFrame,
            r = re(t, e);
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
        static setComputeUnitLimit(e) {
          const t = yr.SetComputeUnitLimit,
            r = re(t, e);
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
        static setComputeUnitPrice(e) {
          const t = yr.SetComputeUnitPrice,
            r = re(t, { microLamports: BigInt(e.microLamports) });
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
      }
      ((t.ComputeBudgetProgram = ComputeBudgetProgram),
        (ComputeBudgetProgram.programId = new PublicKey(
          "ComputeBudget111111111111111111111111111111",
        )));
      const br = 64,
        mr = 32,
        fr = 64,
        kr = h.struct([
          h.u8("numSignatures"),
          h.u8("padding"),
          h.u16("signatureOffset"),
          h.u16("signatureInstructionIndex"),
          h.u16("publicKeyOffset"),
          h.u16("publicKeyInstructionIndex"),
          h.u16("messageDataOffset"),
          h.u16("messageDataSize"),
          h.u16("messageInstructionIndex"),
        ]);
      class Ed25519Program {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          const {
            publicKey: t,
            message: r,
            signature: n,
            instructionIndex: i,
          } = e;
          (F(
            t.length === mr,
            `Public Key must be ${mr} bytes but received ${t.length} bytes`,
          ),
            F(
              n.length === fr,
              `Signature must be ${fr} bytes but received ${n.length} bytes`,
            ));
          const o = kr.span,
            a = o + t.length,
            c = a + n.length,
            u = 1,
            l = s.Buffer.alloc(c + r.length),
            d = null == i ? 65535 : i;
          return (
            kr.encode(
              {
                numSignatures: u,
                padding: 0,
                signatureOffset: a,
                signatureInstructionIndex: d,
                publicKeyOffset: o,
                publicKeyInstructionIndex: d,
                messageDataOffset: c,
                messageDataSize: r.length,
                messageInstructionIndex: d,
              },
              l,
            ),
            l.fill(t, o),
            l.fill(n, a),
            l.fill(r, c),
            new TransactionInstruction({
              keys: [],
              programId: Ed25519Program.programId,
              data: l,
            })
          );
        }
        static createInstructionWithPrivateKey(e) {
          const { privateKey: t, message: r, instructionIndex: n } = e;
          F(
            t.length === br,
            `Private key must be ${br} bytes but received ${t.length} bytes`,
          );
          try {
            const e = Keypair.fromSecretKey(t),
              s = e.publicKey.toBytes(),
              i = _(r, e.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: s,
              message: r,
              signature: i,
              instructionIndex: n,
            });
          } catch (s) {
            throw new Error("Error creating instruction; " + s);
          }
        }
      }
      ((t.Ed25519Program = Ed25519Program),
        (Ed25519Program.programId = new PublicKey(
          "Ed25519SigVerify111111111111111111111111111",
        )),
        (k.utils.hmacSha256Sync = function (e) {
          const t = f.hmac.create(u.sha256, e);
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
            s < r;
            s++
          )
            n[s - 1] = arguments[s];
          return (n.forEach((e) => t.update(e)), t.digest());
        }));
      const Sr = (e, t) => k.signSync(e, t, { der: !1, recovered: !0 });
      k.utils.isValidPrivateKey;
      const wr = k.getPublicKey,
        Ir = 32,
        Pr = 20,
        Ar = 64,
        _r = 11,
        Er = h.struct([
          h.u8("numSignatures"),
          h.u16("signatureOffset"),
          h.u8("signatureInstructionIndex"),
          h.u16("ethAddressOffset"),
          h.u8("ethAddressInstructionIndex"),
          h.u16("messageDataOffset"),
          h.u16("messageDataSize"),
          h.u8("messageInstructionIndex"),
          h.blob(20, "ethAddress"),
          h.blob(64, "signature"),
          h.u8("recoveryId"),
        ]);
      class Secp256k1Program {
        constructor() {}
        static publicKeyToEthAddress(e) {
          F(
            e.length === Ar,
            `Public key must be ${Ar} bytes but received ${e.length} bytes`,
          );
          try {
            return s.Buffer.from((0, m.keccak_256)(T(e))).slice(-Pr);
          } catch (t) {
            throw new Error("Error constructing Ethereum address: " + t);
          }
        }
        static createInstructionWithPublicKey(e) {
          const {
            publicKey: t,
            message: r,
            signature: n,
            recoveryId: s,
            instructionIndex: i,
          } = e;
          return Secp256k1Program.createInstructionWithEthAddress({
            ethAddress: Secp256k1Program.publicKeyToEthAddress(t),
            message: r,
            signature: n,
            recoveryId: s,
            instructionIndex: i,
          });
        }
        static createInstructionWithEthAddress(e) {
          const {
            ethAddress: t,
            message: r,
            signature: n,
            recoveryId: i,
            instructionIndex: o = 0,
          } = e;
          let a;
          ((a =
            "string" === typeof t
              ? t.startsWith("0x")
                ? s.Buffer.from(t.substr(2), "hex")
                : s.Buffer.from(t, "hex")
              : t),
            F(
              a.length === Pr,
              `Address must be ${Pr} bytes but received ${a.length} bytes`,
            ));
          const c = 1 + _r,
            u = c,
            l = c + a.length,
            d = l + n.length + 1,
            h = 1,
            p = s.Buffer.alloc(Er.span + r.length);
          return (
            Er.encode(
              {
                numSignatures: h,
                signatureOffset: l,
                signatureInstructionIndex: o,
                ethAddressOffset: u,
                ethAddressInstructionIndex: o,
                messageDataOffset: d,
                messageDataSize: r.length,
                messageInstructionIndex: o,
                signature: T(n),
                ethAddress: T(a),
                recoveryId: i,
              },
              p,
            ),
            p.fill(T(r), Er.span),
            new TransactionInstruction({
              keys: [],
              programId: Secp256k1Program.programId,
              data: p,
            })
          );
        }
        static createInstructionWithPrivateKey(e) {
          const { privateKey: t, message: r, instructionIndex: n } = e;
          F(
            t.length === Ir,
            `Private key must be ${Ir} bytes but received ${t.length} bytes`,
          );
          try {
            const e = T(t),
              i = wr(e, !1).slice(1),
              o = s.Buffer.from((0, m.keccak_256)(T(r))),
              [a, c] = Sr(o, e);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: a,
              recoveryId: c,
              instructionIndex: n,
            });
          } catch (i) {
            throw new Error("Error creating instruction; " + i);
          }
        }
      }
      ((t.Secp256k1Program = Secp256k1Program),
        (Secp256k1Program.programId = new PublicKey(
          "KeccakSecp256k11111111111111111111111111111",
        )));
      const Tr = (t.STAKE_CONFIG_ID = new PublicKey(
        "StakeConfig11111111111111111111111111111111",
      ));
      class Authorized {
        constructor(e, t) {
          ((this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t));
        }
      }
      t.Authorized = Authorized;
      class Lockup {
        constructor(e, t, r) {
          ((this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = r));
        }
      }
      ((t.Lockup = Lockup),
        (Lockup.default = new Lockup(0, 0, PublicKey.default)));
      class StakeInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = h.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(vr))
            if (i.index == r) {
              n = s;
              break;
            }
          if (!n)
            throw new Error(
              "Instruction type incorrect; not a StakeInstruction",
            );
          return n;
        }
        static decodeInitialize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const { authorized: t, lockup: r } = ne(vr.Initialize, e.data);
          return {
            stakePubkey: e.keys[0].pubkey,
            authorized: new Authorized(
              new PublicKey(t.staker),
              new PublicKey(t.withdrawer),
            ),
            lockup: new Lockup(
              r.unixTimestamp,
              r.epoch,
              new PublicKey(r.custodian),
            ),
          };
        }
        static decodeDelegate(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 6),
            ne(vr.Delegate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              votePubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[5].pubkey,
            }
          );
        }
        static decodeAuthorize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const { newAuthorized: t, stakeAuthorizationType: r } = ne(
              vr.Authorize,
              e.data,
            ),
            n = {
              stakePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
              newAuthorizedPubkey: new PublicKey(t),
              stakeAuthorizationType: { index: r },
            };
          return (
            e.keys.length > 3 && (n.custodianPubkey = e.keys[3].pubkey),
            n
          );
        }
        static decodeAuthorizeWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const {
              newAuthorized: t,
              stakeAuthorizationType: r,
              authoritySeed: n,
              authorityOwner: s,
            } = ne(vr.AuthorizeWithSeed, e.data),
            i = {
              stakePubkey: e.keys[0].pubkey,
              authorityBase: e.keys[1].pubkey,
              authoritySeed: n,
              authorityOwner: new PublicKey(s),
              newAuthorizedPubkey: new PublicKey(t),
              stakeAuthorizationType: { index: r },
            };
          return (
            e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey),
            i
          );
        }
        static decodeSplit(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const { lamports: t } = ne(vr.Split, e.data);
          return {
            stakePubkey: e.keys[0].pubkey,
            splitStakePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            lamports: t,
          };
        }
        static decodeMerge(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ne(vr.Merge, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              sourceStakePubKey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
            }
          );
        }
        static decodeWithdraw(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5));
          const { lamports: t } = ne(vr.Withdraw, e.data),
            r = {
              stakePubkey: e.keys[0].pubkey,
              toPubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
              lamports: t,
            };
          return (
            e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey),
            r
          );
        }
        static decodeDeactivate(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ne(vr.Deactivate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(StakeProgram.programId))
            throw new Error(
              "invalid instruction; programId is not StakeProgram",
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`,
            );
        }
      }
      t.StakeInstruction = StakeInstruction;
      const vr = (t.STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
        Initialize: {
          index: 0,
          layout: h.struct([h.u32("instruction"), V(), M()]),
        },
        Authorize: {
          index: 1,
          layout: h.struct([
            h.u32("instruction"),
            N("newAuthorized"),
            h.u32("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: h.struct([h.u32("instruction")]) },
        Split: {
          index: 3,
          layout: h.struct([h.u32("instruction"), h.ns64("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: h.struct([h.u32("instruction"), h.ns64("lamports")]),
        },
        Deactivate: { index: 5, layout: h.struct([h.u32("instruction")]) },
        Merge: { index: 7, layout: h.struct([h.u32("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: h.struct([
            h.u32("instruction"),
            N("newAuthorized"),
            h.u32("stakeAuthorizationType"),
            W("authoritySeed"),
            N("authorityOwner"),
          ]),
        },
      }));
      t.StakeAuthorizationLayout = Object.freeze({
        Staker: { index: 0 },
        Withdrawer: { index: 1 },
      });
      class StakeProgram {
        constructor() {}
        static initialize(e) {
          const { stakePubkey: t, authorized: r, lockup: n } = e,
            s = n || Lockup.default,
            i = vr.Initialize,
            o = re(i, {
              authorized: {
                staker: T(r.staker.toBuffer()),
                withdrawer: T(r.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: s.unixTimestamp,
                epoch: s.epoch,
                custodian: T(s.custodian.toBuffer()),
              },
            }),
            a = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: Z, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: o,
            };
          return new TransactionInstruction(a);
        }
        static createAccountWithSeed(e) {
          const t = new Transaction();
          t.add(
            SystemProgram.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            }),
          );
          const { stakePubkey: r, authorized: n, lockup: s } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: n, lockup: s }),
          );
        }
        static createAccount(e) {
          const t = new Transaction();
          t.add(
            SystemProgram.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            }),
          );
          const { stakePubkey: r, authorized: n, lockup: s } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: n, lockup: s }),
          );
        }
        static delegate(e) {
          const { stakePubkey: t, authorizedPubkey: r, votePubkey: n } = e,
            s = vr.Delegate,
            i = re(s);
          return new Transaction().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !1 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
              { pubkey: Q, isSigner: !1, isWritable: !1 },
              { pubkey: Tr, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static authorize(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: n,
              stakeAuthorizationType: s,
              custodianPubkey: i,
            } = e,
            o = vr.Authorize,
            a = re(o, {
              newAuthorized: T(n.toBuffer()),
              stakeAuthorizationType: s.index,
            }),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: G, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && c.push({ pubkey: i, isSigner: !1, isWritable: !1 }),
            new Transaction().add({
              keys: c,
              programId: this.programId,
              data: a,
            })
          );
        }
        static authorizeWithSeed(e) {
          const {
              stakePubkey: t,
              authorityBase: r,
              authoritySeed: n,
              authorityOwner: s,
              newAuthorizedPubkey: i,
              stakeAuthorizationType: o,
              custodianPubkey: a,
            } = e,
            c = vr.AuthorizeWithSeed,
            u = re(c, {
              newAuthorized: T(i.toBuffer()),
              stakeAuthorizationType: o.index,
              authoritySeed: n,
              authorityOwner: T(s.toBuffer()),
            }),
            l = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
            ];
          return (
            a && l.push({ pubkey: a, isSigner: !1, isWritable: !1 }),
            new Transaction().add({
              keys: l,
              programId: this.programId,
              data: u,
            })
          );
        }
        static splitInstruction(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: r,
              splitStakePubkey: n,
              lamports: s,
            } = e,
            i = vr.Split,
            o = re(i, { lamports: s });
          return new TransactionInstruction({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: o,
          });
        }
        static split(e) {
          const t = new Transaction();
          return (
            t.add(
              SystemProgram.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: 0,
                space: this.space,
                programId: this.programId,
              }),
            ),
            t.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: r,
              splitStakePubkey: n,
              basePubkey: s,
              seed: i,
              lamports: o,
            } = e,
            a = new Transaction();
          return (
            a.add(
              SystemProgram.allocate({
                accountPubkey: n,
                basePubkey: s,
                seed: i,
                space: this.space,
                programId: this.programId,
              }),
            ),
            a.add(
              this.splitInstruction({
                stakePubkey: t,
                authorizedPubkey: r,
                splitStakePubkey: n,
                lamports: o,
              }),
            )
          );
        }
        static merge(e) {
          const {
              stakePubkey: t,
              sourceStakePubKey: r,
              authorizedPubkey: n,
            } = e,
            s = vr.Merge,
            i = re(s);
          return new Transaction().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !1, isWritable: !0 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
              { pubkey: Q, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static withdraw(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: r,
              toPubkey: n,
              lamports: s,
              custodianPubkey: i,
            } = e,
            o = vr.Withdraw,
            a = re(o, { lamports: s }),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
              { pubkey: Q, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && c.push({ pubkey: i, isSigner: !1, isWritable: !1 }),
            new Transaction().add({
              keys: c,
              programId: this.programId,
              data: a,
            })
          );
        }
        static deactivate(e) {
          const { stakePubkey: t, authorizedPubkey: r } = e,
            n = vr.Deactivate,
            s = re(n);
          return new Transaction().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
      }
      ((t.StakeProgram = StakeProgram),
        (StakeProgram.programId = new PublicKey(
          "Stake11111111111111111111111111111111111111",
        )),
        (StakeProgram.space = 200));
      class VoteInit {
        constructor(e, t, r, n) {
          ((this.nodePubkey = void 0),
            (this.authorizedVoter = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.nodePubkey = e),
            (this.authorizedVoter = t),
            (this.authorizedWithdrawer = r),
            (this.commission = n));
        }
      }
      t.VoteInit = VoteInit;
      class VoteInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = h.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(Rr))
            if (i.index == r) {
              n = s;
              break;
            }
          if (!n)
            throw new Error(
              "Instruction type incorrect; not a VoteInstruction",
            );
          return n;
        }
        static decodeInitializeAccount(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4));
          const { voteInit: t } = ne(Rr.InitializeAccount, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new VoteInit(
              new PublicKey(t.nodePubkey),
              new PublicKey(t.authorizedVoter),
              new PublicKey(t.authorizedWithdrawer),
              t.commission,
            ),
          };
        }
        static decodeAuthorize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const { newAuthorized: t, voteAuthorizationType: r } = ne(
            Rr.Authorize,
            e.data,
          );
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new PublicKey(t),
            voteAuthorizationType: { index: r },
          };
        }
        static decodeAuthorizeWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: t,
              currentAuthorityDerivedKeySeed: r,
              newAuthorized: n,
              voteAuthorizationType: s,
            },
          } = ne(Rr.AuthorizeWithSeed, e.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new PublicKey(t),
            currentAuthorityDerivedKeySeed: r,
            newAuthorizedPubkey: new PublicKey(n),
            voteAuthorizationType: { index: s },
            votePubkey: e.keys[0].pubkey,
          };
        }
        static decodeWithdraw(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const { lamports: t } = ne(Rr.Withdraw, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey,
          };
        }
        static checkProgramId(e) {
          if (!e.equals(VoteProgram.programId))
            throw new Error(
              "invalid instruction; programId is not VoteProgram",
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`,
            );
        }
      }
      t.VoteInstruction = VoteInstruction;
      const Rr = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: h.struct([h.u32("instruction"), U()]),
        },
        Authorize: {
          index: 1,
          layout: h.struct([
            h.u32("instruction"),
            N("newAuthorized"),
            h.u32("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: h.struct([h.u32("instruction"), h.ns64("lamports")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: h.struct([h.u32("instruction"), q()]),
        },
      });
      t.VoteAuthorizationLayout = Object.freeze({
        Voter: { index: 0 },
        Withdrawer: { index: 1 },
      });
      class VoteProgram {
        constructor() {}
        static initializeAccount(e) {
          const { votePubkey: t, nodePubkey: r, voteInit: n } = e,
            s = Rr.InitializeAccount,
            i = re(s, {
              voteInit: {
                nodePubkey: T(n.nodePubkey.toBuffer()),
                authorizedVoter: T(n.authorizedVoter.toBuffer()),
                authorizedWithdrawer: T(n.authorizedWithdrawer.toBuffer()),
                commission: n.commission,
              },
            }),
            o = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: Z, isSigner: !1, isWritable: !1 },
                { pubkey: G, isSigner: !1, isWritable: !1 },
                { pubkey: r, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: i,
            };
          return new TransactionInstruction(o);
        }
        static createAccount(e) {
          const t = new Transaction();
          return (
            t.add(
              SystemProgram.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              }),
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              }),
            )
          );
        }
        static authorize(e) {
          const {
              votePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: n,
              voteAuthorizationType: s,
            } = e,
            i = Rr.Authorize,
            o = re(i, {
              newAuthorized: T(n.toBuffer()),
              voteAuthorizationType: s.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new Transaction().add({
            keys: a,
            programId: this.programId,
            data: o,
          });
        }
        static authorizeWithSeed(e) {
          const {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: r,
              currentAuthorityDerivedKeySeed: n,
              newAuthorizedPubkey: s,
              voteAuthorizationType: i,
              votePubkey: o,
            } = e,
            a = Rr.AuthorizeWithSeed,
            c = re(a, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: T(r.toBuffer()),
                currentAuthorityDerivedKeySeed: n,
                newAuthorized: T(s.toBuffer()),
                voteAuthorizationType: i.index,
              },
            }),
            u = [
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: G, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ];
          return new Transaction().add({
            keys: u,
            programId: this.programId,
            data: c,
          });
        }
        static withdraw(e) {
          const {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              lamports: n,
              toPubkey: s,
            } = e,
            i = Rr.Withdraw,
            o = re(i, { lamports: n }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new Transaction().add({
            keys: a,
            programId: this.programId,
            data: o,
          });
        }
        static safeWithdraw(e, t, r) {
          if (e.lamports > t - r)
            throw new Error(
              "Withdraw will leave vote account with insuffcient funds.",
            );
          return VoteProgram.withdraw(e);
        }
      }
      ((t.VoteProgram = VoteProgram),
        (VoteProgram.programId = new PublicKey(
          "Vote111111111111111111111111111111111111111",
        )),
        (VoteProgram.space = 3731));
      const Br = (t.VALIDATOR_INFO_KEY = new PublicKey(
          "Va1idator1nfo111111111111111111111111111111",
        )),
        Cr = (0, g.type)({
          name: (0, g.string)(),
          website: (0, g.optional)((0, g.string)()),
          details: (0, g.optional)((0, g.string)()),
          keybaseUsername: (0, g.optional)((0, g.string)()),
        });
      class ValidatorInfo {
        constructor(e, t) {
          ((this.key = void 0),
            (this.info = void 0),
            (this.key = e),
            (this.info = t));
        }
        static fromConfigData(e) {
          let t = [...e];
          const r = H(t);
          if (2 !== r) return null;
          const n = [];
          for (let s = 0; s < 2; s++) {
            const e = new PublicKey(t.slice(0, B));
            t = t.slice(B);
            const r = 1 === t.slice(0, 1)[0];
            ((t = t.slice(1)), n.push({ publicKey: e, isSigner: r }));
          }
          if (n[0].publicKey.equals(Br) && n[1].isSigner) {
            const e = W().decode(s.Buffer.from(t)),
              r = JSON.parse(e);
            return ((0, g.assert)(r, Cr), new ValidatorInfo(n[1].publicKey, r));
          }
          return null;
        }
      }
      t.ValidatorInfo = ValidatorInfo;
      t.VOTE_PROGRAM_ID = new PublicKey(
        "Vote111111111111111111111111111111111111111",
      );
      const Kr = h.struct([
        N("nodePubkey"),
        N("authorizedWithdrawer"),
        h.u8("commission"),
        h.nu64(),
        h.seq(
          h.struct([h.nu64("slot"), h.u32("confirmationCount")]),
          h.offset(h.u32(), -8),
          "votes",
        ),
        h.u8("rootSlotValid"),
        h.nu64("rootSlot"),
        h.nu64(),
        h.seq(
          h.struct([h.nu64("epoch"), N("authorizedVoter")]),
          h.offset(h.u32(), -8),
          "authorizedVoters",
        ),
        h.struct(
          [
            h.seq(
              h.struct([
                N("authorizedPubkey"),
                h.nu64("epochOfLastAuthorizedSwitch"),
                h.nu64("targetEpoch"),
              ]),
              32,
              "buf",
            ),
            h.nu64("idx"),
            h.u8("isEmpty"),
          ],
          "priorVoters",
        ),
        h.nu64(),
        h.seq(
          h.struct([h.nu64("epoch"), h.nu64("credits"), h.nu64("prevCredits")]),
          h.offset(h.u32(), -8),
          "epochCredits",
        ),
        h.struct([h.nu64("slot"), h.nu64("timestamp")], "lastTimestamp"),
      ]);
      class VoteAccount {
        constructor(e) {
          ((this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = e.nodePubkey),
            (this.authorizedWithdrawer = e.authorizedWithdrawer),
            (this.commission = e.commission),
            (this.rootSlot = e.rootSlot),
            (this.votes = e.votes),
            (this.authorizedVoters = e.authorizedVoters),
            (this.priorVoters = e.priorVoters),
            (this.epochCredits = e.epochCredits),
            (this.lastTimestamp = e.lastTimestamp));
        }
        static fromAccountData(e) {
          const t = 4,
            r = Kr.decode(T(e), t);
          let n = r.rootSlot;
          return (
            r.rootSlotValid || (n = null),
            new VoteAccount({
              nodePubkey: new PublicKey(r.nodePubkey),
              authorizedWithdrawer: new PublicKey(r.authorizedWithdrawer),
              commission: r.commission,
              votes: r.votes,
              rootSlot: n,
              authorizedVoters: r.authorizedVoters.map(xr),
              priorVoters: Lr(r.priorVoters),
              epochCredits: r.epochCredits,
              lastTimestamp: r.lastTimestamp,
            })
          );
        }
      }
      function xr(e) {
        let { authorizedVoter: t, epoch: r } = e;
        return { epoch: r, authorizedVoter: new PublicKey(t) };
      }
      function Or(e) {
        let {
          authorizedPubkey: t,
          epochOfLastAuthorizedSwitch: r,
          targetEpoch: n,
        } = e;
        return {
          authorizedPubkey: new PublicKey(t),
          epochOfLastAuthorizedSwitch: r,
          targetEpoch: n,
        };
      }
      function Lr(e) {
        let { buf: t, idx: r, isEmpty: n } = e;
        return n ? [] : [...t.slice(r + 1).map(Or), ...t.slice(0, r).map(Or)];
      }
      t.VoteAccount = VoteAccount;
      const Nr = {
        http: {
          devnet: "http://api.devnet.solana.com",
          testnet: "http://api.testnet.solana.com",
          "mainnet-beta": "http://api.mainnet-beta.solana.com/",
        },
        https: {
          devnet: "https://api.devnet.solana.com",
          testnet: "https://api.testnet.solana.com",
          "mainnet-beta": "https://api.mainnet-beta.solana.com/",
        },
      };
      function zr(e, t) {
        const r = !1 === t ? "http" : "https";
        if (!e) return Nr[r]["devnet"];
        const n = Nr[r][e];
        if (!n) throw new Error(`Unknown ${r} cluster: ${e}`);
        return n;
      }
      async function Wr(e, t, r, n) {
        let s, i;
        (r &&
          Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight")) ||
        (r && Object.prototype.hasOwnProperty.call(r, "nonceValue"))
          ? ((s = r), (i = n))
          : (i = r);
        const o = i && {
            skipPreflight: i.skipPreflight,
            preflightCommitment: i.preflightCommitment || i.commitment,
            minContextSlot: i.minContextSlot,
          },
          a = await e.sendRawTransaction(t, o),
          c = i && i.commitment,
          u = s ? e.confirmTransaction(s, c) : e.confirmTransaction(a, c),
          l = (await u).value;
        if (l.err)
          throw new Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);
        return a;
      }
      t.LAMPORTS_PER_SOL = 1e9;
    },
  ],
]);
