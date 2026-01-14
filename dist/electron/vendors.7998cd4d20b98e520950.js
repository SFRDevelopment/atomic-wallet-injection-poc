(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [86],
  {
    1803: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(2),
        s = r(380),
        i = r(597),
        o = r(294),
        a = r(234),
        c = r(378),
        u = r(598),
        l = r(6),
        d = r(295),
        h = r(599),
        p = r(405),
        g = r(601),
        y = r(239),
        b = r(379),
        m = r(606);
      function f(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      function k(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
          e &&
            Object.keys(e).forEach(function (r) {
              if ("default" !== r) {
                var n = Object.getOwnPropertyDescriptor(e, r);
                Object.defineProperty(
                  t,
                  r,
                  n.get
                    ? n
                    : {
                        enumerable: !0,
                        get: function () {
                          return e[r];
                        },
                      },
                );
              }
            }),
          (t["default"] = e),
          Object.freeze(t)
        );
      }
      var S = k(i),
        w = f(o),
        I = f(a),
        P = k(l),
        A = f(g),
        _ = k(m);
      S.utils.sha512Sync = function () {
        return s.sha512(S.utils.concatBytes(...arguments));
      };
      const E = S.utils.randomPrivateKey,
        v = () => {
          const e = S.utils.randomPrivateKey(),
            t = T(e),
            r = new Uint8Array(64);
          return (r.set(e), r.set(t, 32), { publicKey: t, secretKey: r });
        },
        T = S.sync.getPublicKey;
      function B(e) {
        try {
          return (S.Point.fromHex(e, !0), !0);
        } catch {
          return !1;
        }
      }
      const R = (e, t) => S.sync.sign(e, t.slice(0, 32)),
        C = S.sync.verify,
        K = (e) =>
          n.Buffer.isBuffer(e)
            ? e
            : e instanceof Uint8Array
              ? n.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
              : n.Buffer.from(e);
      class Struct {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return n.Buffer.from(u.serialize(x, this));
        }
        static decode(e) {
          return u.deserialize(x, this, e);
        }
        static decodeUnchecked(e) {
          return u.deserializeUnchecked(x, this, e);
        }
      }
      class Enum extends Struct {
        constructor(e) {
          if ((super(e), (this.enum = ""), 1 !== Object.keys(e).length))
            throw new Error("Enum can only take single value");
          Object.keys(e).map((e) => {
            this.enum = e;
          });
        }
      }
      const x = new Map(),
        O = 32,
        L = 32;
      function N(e) {
        return void 0 !== e._bn;
      }
      let z = 1;
      class PublicKey extends Struct {
        constructor(e) {
          if ((super({}), (this._bn = void 0), N(e))) this._bn = e._bn;
          else {
            if ("string" === typeof e) {
              const t = I["default"].decode(e);
              if (t.length != L) throw new Error("Invalid public key input");
              this._bn = new w["default"](t);
            } else this._bn = new w["default"](e);
            if (this._bn.byteLength() > 32)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          const e = new PublicKey(z);
          return ((z += 1), new PublicKey(e.toBuffer()));
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return I["default"].encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          return this.toBuffer();
        }
        toBuffer() {
          const e = this._bn.toArrayLike(n.Buffer);
          if (e.length === L) return e;
          const t = n.Buffer.alloc(32);
          return (e.copy(t, 32 - e.length), t);
        }
        toString() {
          return this.toBase58();
        }
        static async createWithSeed(e, t, r) {
          const s = n.Buffer.concat([
              e.toBuffer(),
              n.Buffer.from(t),
              r.toBuffer(),
            ]),
            i = c.sha256(s);
          return new PublicKey(i);
        }
        static createProgramAddressSync(e, t) {
          let r = n.Buffer.alloc(0);
          (e.forEach(function (e) {
            if (e.length > O) throw new TypeError("Max seed length exceeded");
            r = n.Buffer.concat([r, K(e)]);
          }),
            (r = n.Buffer.concat([
              r,
              t.toBuffer(),
              n.Buffer.from("ProgramDerivedAddress"),
            ])));
          const s = c.sha256(r);
          if (B(s))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new PublicKey(s);
        }
        static async createProgramAddress(e, t) {
          return this.createProgramAddressSync(e, t);
        }
        static findProgramAddressSync(e, t) {
          let r,
            s = 255;
          while (0 != s) {
            try {
              const i = e.concat(n.Buffer.from([s]));
              r = this.createProgramAddressSync(i, t);
            } catch (i) {
              if (i instanceof TypeError) throw i;
              s--;
              continue;
            }
            return [r, s];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static async findProgramAddress(e, t) {
          return this.findProgramAddressSync(e, t);
        }
        static isOnCurve(e) {
          const t = new PublicKey(e);
          return B(t.toBytes());
        }
      }
      ((PublicKey.default = new PublicKey("11111111111111111111111111111111")),
        x.set(PublicKey, { kind: "struct", fields: [["_bn", "u256"]] }));
      class Account {
        constructor(e) {
          if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
            const t = K(e);
            if (64 !== e.length) throw new Error("bad secret key size");
            ((this._publicKey = t.slice(32, 64)),
              (this._secretKey = t.slice(0, 32)));
          } else
            ((this._secretKey = K(E())),
              (this._publicKey = K(T(this._secretKey))));
        }
        get publicKey() {
          return new PublicKey(this._publicKey);
        }
        get secretKey() {
          return n.Buffer.concat([this._secretKey, this._publicKey], 64);
        }
      }
      const W = new PublicKey("BPFLoader1111111111111111111111111111111111"),
        q = 1232,
        V = 127,
        M = 64;
      class TransactionExpiredBlockheightExceededError extends Error {
        constructor(e) {
          (super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e));
        }
      }
      Object.defineProperty(
        TransactionExpiredBlockheightExceededError.prototype,
        "name",
        { value: "TransactionExpiredBlockheightExceededError" },
      );
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
      Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
        value: "TransactionExpiredTimeoutError",
      });
      class TransactionExpiredNonceInvalidError extends Error {
        constructor(e) {
          (super(`Signature ${e} has expired: the nonce is no longer valid.`),
            (this.signature = void 0),
            (this.signature = e));
        }
      }
      Object.defineProperty(
        TransactionExpiredNonceInvalidError.prototype,
        "name",
        { value: "TransactionExpiredNonceInvalidError" },
      );
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
      const U = function (e) {
          return (void 0 === e && (e = "publicKey"), P.blob(32, e));
        },
        D = function (e) {
          return (void 0 === e && (e = "signature"), P.blob(64, e));
        },
        J = function (e) {
          void 0 === e && (e = "string");
          const t = P.struct(
              [
                P.u32("length"),
                P.u32("lengthPadding"),
                P.blob(P.offset(P.u32(), -8), "chars"),
              ],
              e,
            ),
            r = t.decode.bind(t),
            s = t.encode.bind(t),
            i = t;
          return (
            (i.decode = (e, t) => {
              const n = r(e, t);
              return n["chars"].toString();
            }),
            (i.encode = (e, t, r) => {
              const i = { chars: n.Buffer.from(e, "utf8") };
              return s(i, t, r);
            }),
            (i.alloc = (e) =>
              P.u32().span + P.u32().span + n.Buffer.from(e, "utf8").length),
            i
          );
        },
        H = function (e) {
          return (
            void 0 === e && (e = "authorized"),
            P.struct([U("staker"), U("withdrawer")], e)
          );
        },
        F = function (e) {
          return (
            void 0 === e && (e = "lockup"),
            P.struct(
              [P.ns64("unixTimestamp"), P.ns64("epoch"), U("custodian")],
              e,
            )
          );
        },
        j = function (e) {
          return (
            void 0 === e && (e = "voteInit"),
            P.struct(
              [
                U("nodePubkey"),
                U("authorizedVoter"),
                U("authorizedWithdrawer"),
                P.u8("commission"),
              ],
              e,
            )
          );
        },
        $ = function (e) {
          return (
            void 0 === e && (e = "voteAuthorizeWithSeedArgs"),
            P.struct(
              [
                P.u32("voteAuthorizationType"),
                U("currentAuthorityDerivedKeyOwnerPubkey"),
                J("currentAuthorityDerivedKeySeed"),
                U("newAuthorized"),
              ],
              e,
            )
          );
        };
      function Y(e, t) {
        const r = (e) => {
          if (e.span >= 0) return e.span;
          if ("function" === typeof e.alloc) return e.alloc(t[e.property]);
          if ("count" in e && "elementLayout" in e) {
            const n = t[e.property];
            if (Array.isArray(n)) return n.length * r(e.elementLayout);
          } else if ("fields" in e) return Y({ layout: e }, t[e.property]);
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
      function G(e) {
        let t = 0,
          r = 0;
        for (;;) {
          let n = e.shift();
          if (((t |= (127 & n) << (7 * r)), (r += 1), 0 === (128 & n))) break;
        }
        return t;
      }
      function X(e, t) {
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
      function Z(e, t) {
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
          Z(e.length <= 256, "Max static account keys length exceeded");
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
            Z(t.length > 0, "Expected at least one writable signer key");
            const [e] = t[0];
            Z(
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
                (Z(i < 256, "Max lookup table index exceeded"),
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
            data: I["default"].decode(e.data),
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
                data: I["default"].encode(e.data),
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
          X(t, e);
          const r = this.instructions.map((e) => {
            const { accounts: t, programIdIndex: r } = e,
              s = Array.from(I["default"].decode(e.data));
            let i = [];
            X(i, t.length);
            let o = [];
            return (
              X(o, s.length),
              {
                programIdIndex: r,
                keyIndicesCount: n.Buffer.from(i),
                keyIndices: t,
                dataLength: n.Buffer.from(o),
                data: s,
              }
            );
          });
          let s = [];
          X(s, r.length);
          let i = n.Buffer.alloc(q);
          n.Buffer.from(s).copy(i);
          let o = s.length;
          (r.forEach((e) => {
            const t = P.struct([
                P.u8("programIdIndex"),
                P.blob(e.keyIndicesCount.length, "keyIndicesCount"),
                P.seq(P.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
                P.blob(e.dataLength.length, "dataLength"),
                P.seq(P.u8("userdatum"), e.data.length, "data"),
              ]),
              r = t.encode(e, i, o);
            o += r;
          }),
            (i = i.slice(0, o)));
          const a = P.struct([
              P.blob(1, "numRequiredSignatures"),
              P.blob(1, "numReadonlySignedAccounts"),
              P.blob(1, "numReadonlyUnsignedAccounts"),
              P.blob(t.length, "keyCount"),
              P.seq(U("key"), e, "keys"),
              U("recentBlockhash"),
            ]),
            c = {
              numRequiredSignatures: n.Buffer.from([
                this.header.numRequiredSignatures,
              ]),
              numReadonlySignedAccounts: n.Buffer.from([
                this.header.numReadonlySignedAccounts,
              ]),
              numReadonlyUnsignedAccounts: n.Buffer.from([
                this.header.numReadonlyUnsignedAccounts,
              ]),
              keyCount: n.Buffer.from(t),
              keys: this.accountKeys.map((e) => K(e.toBytes())),
              recentBlockhash: I["default"].decode(this.recentBlockhash),
            };
          let u = n.Buffer.alloc(2048);
          const l = a.encode(c, u);
          return (i.copy(u, l), u.slice(0, l + i.length));
        }
        static from(e) {
          let t = [...e];
          const r = t.shift();
          if (r !== (r & V))
            throw new Error(
              "Versioned messages must be deserialized with VersionedMessage.deserialize()",
            );
          const s = t.shift(),
            i = t.shift(),
            o = G(t);
          let a = [];
          for (let h = 0; h < o; h++) {
            const e = t.slice(0, L);
            ((t = t.slice(L)), a.push(new PublicKey(n.Buffer.from(e))));
          }
          const c = t.slice(0, L);
          t = t.slice(L);
          const u = G(t);
          let l = [];
          for (let h = 0; h < u; h++) {
            const e = t.shift(),
              r = G(t),
              s = t.slice(0, r);
            t = t.slice(r);
            const i = G(t),
              o = t.slice(0, i),
              a = I["default"].encode(n.Buffer.from(o));
            ((t = t.slice(i)),
              l.push({ programIdIndex: e, accounts: s, data: a }));
          }
          const d = {
            header: {
              numRequiredSignatures: r,
              numReadonlySignedAccounts: s,
              numReadonlyUnsignedAccounts: i,
            },
            recentBlockhash: I["default"].encode(n.Buffer.from(c)),
            accountKeys: a,
            instructions: l,
          };
          return new Message(d);
        }
      }
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
          X(e, this.staticAccountKeys.length);
          const t = this.serializeInstructions(),
            r = Array();
          X(r, this.compiledInstructions.length);
          const n = this.serializeAddressTableLookups(),
            s = Array();
          X(s, this.addressTableLookups.length);
          const i = P.struct([
              P.u8("prefix"),
              P.struct(
                [
                  P.u8("numRequiredSignatures"),
                  P.u8("numReadonlySignedAccounts"),
                  P.u8("numReadonlyUnsignedAccounts"),
                ],
                "header",
              ),
              P.blob(e.length, "staticAccountKeysLength"),
              P.seq(U(), this.staticAccountKeys.length, "staticAccountKeys"),
              U("recentBlockhash"),
              P.blob(r.length, "instructionsLength"),
              P.blob(t.length, "serializedInstructions"),
              P.blob(s.length, "addressTableLookupsLength"),
              P.blob(n.length, "serializedAddressTableLookups"),
            ]),
            o = new Uint8Array(q),
            a = 128,
            c = i.encode(
              {
                prefix: a,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((e) =>
                  e.toBytes(),
                ),
                recentBlockhash: I["default"].decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(s),
                serializedAddressTableLookups: n,
              },
              o,
            );
          return o.slice(0, c);
        }
        serializeInstructions() {
          let e = 0;
          const t = new Uint8Array(q);
          for (const r of this.compiledInstructions) {
            const n = Array();
            X(n, r.accountKeyIndexes.length);
            const s = Array();
            X(s, r.data.length);
            const i = P.struct([
              P.u8("programIdIndex"),
              P.blob(n.length, "encodedAccountKeyIndexesLength"),
              P.seq(P.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
              P.blob(s.length, "encodedDataLength"),
              P.blob(r.data.length, "data"),
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
          const t = new Uint8Array(q);
          for (const r of this.addressTableLookups) {
            const n = Array();
            X(n, r.writableIndexes.length);
            const s = Array();
            X(s, r.readonlyIndexes.length);
            const i = P.struct([
              U("accountKey"),
              P.blob(n.length, "encodedWritableIndexesLength"),
              P.seq(P.u8(), r.writableIndexes.length, "writableIndexes"),
              P.blob(s.length, "encodedReadonlyIndexesLength"),
              P.seq(P.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
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
            n = r & V;
          Z(r !== n, "Expected versioned message but received legacy message");
          const s = n;
          Z(
            0 === s,
            "Expected versioned message with version 0 but found version " + s,
          );
          const i = {
              numRequiredSignatures: t.shift(),
              numReadonlySignedAccounts: t.shift(),
              numReadonlyUnsignedAccounts: t.shift(),
            },
            o = [],
            a = G(t);
          for (let p = 0; p < a; p++) o.push(new PublicKey(t.splice(0, L)));
          const c = I["default"].encode(t.splice(0, L)),
            u = G(t),
            l = [];
          for (let p = 0; p < u; p++) {
            const e = t.shift(),
              r = G(t),
              n = t.splice(0, r),
              s = G(t),
              i = new Uint8Array(t.splice(0, s));
            l.push({ programIdIndex: e, accountKeyIndexes: n, data: i });
          }
          const d = G(t),
            h = [];
          for (let p = 0; p < d; p++) {
            const e = new PublicKey(t.splice(0, L)),
              r = G(t),
              n = t.splice(0, r),
              s = G(t),
              i = t.splice(0, s);
            h.push({ accountKey: e, writableIndexes: n, readonlyIndexes: i });
          }
          return new MessageV0({
            header: i,
            staticAccountKeys: o,
            recentBlockhash: c,
            compiledInstructions: l,
            addressTableLookups: h,
          });
        }
      }
      const Q = {
        deserializeMessageVersion(e) {
          const t = e[0],
            r = t & V;
          return r === t ? "legacy" : r;
        },
        deserialize: (e) => {
          const t = Q.deserializeMessageVersion(e);
          if ("legacy" === t) return Message.from(e);
          if (0 === t) return MessageV0.deserialize(e);
          throw new Error(
            `Transaction message version ${t} deserialization is not supported`,
          );
        },
      };
      ((t.TransactionStatus = void 0),
        (function (e) {
          ((e[(e["BLOCKHEIGHT_EXCEEDED"] = 0)] = "BLOCKHEIGHT_EXCEEDED"),
            (e[(e["PROCESSED"] = 1)] = "PROCESSED"),
            (e[(e["TIMED_OUT"] = 2)] = "TIMED_OUT"),
            (e[(e["NONCE_INVALID"] = 3)] = "NONCE_INVALID"));
        })(t.TransactionStatus || (t.TransactionStatus = {})));
      const ee = n.Buffer.alloc(M).fill(0);
      class TransactionInstruction {
        constructor(e) {
          ((this.keys = void 0),
            (this.programId = void 0),
            (this.data = n.Buffer.alloc(0)),
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
          for (let g = 0; g < t.length; g++)
            if (void 0 === t[g].programId)
              throw new Error(
                `Transaction instruction index ${g} has undefined program id`,
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
          for (const g of this.signatures) {
            const e = i.findIndex((e) => e.pubkey.equals(g.publicKey));
            if (!(e > -1))
              throw new Error("unknown signer: " + g.publicKey.toString());
            i[e].isSigner ||
              ((i[e].isSigner = !0),
              console.warn(
                "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.",
              ));
          }
          let a = 0,
            c = 0,
            u = 0;
          const l = [],
            d = [];
          i.forEach((e) => {
            let { pubkey: t, isSigner: r, isWritable: n } = e;
            r
              ? (l.push(t.toString()), (a += 1), n || (c += 1))
              : (d.push(t.toString()), n || (u += 1));
          });
          const h = l.concat(d),
            p = t.map((e) => {
              const { data: t, programId: r } = e;
              return {
                programIdIndex: h.indexOf(r.toString()),
                accounts: e.keys.map((e) => h.indexOf(e.pubkey.toString())),
                data: I["default"].encode(t),
              };
            });
          return (
            p.forEach((e) => {
              (Z(e.programIdIndex >= 0), e.accounts.forEach((e) => Z(e >= 0)));
            }),
            new Message({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: c,
                numReadonlyUnsignedAccounts: u,
              },
              accountKeys: h,
              recentBlockhash: e,
              instructions: p,
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
            const r = R(t, e.secretKey);
            this._addSignature(e.publicKey, K(r));
          });
        }
        addSignature(e, t) {
          (this._compile(), this._addSignature(e, t));
        }
        _addSignature(e, t) {
          Z(64 === t.length);
          const r = this.signatures.findIndex((t) => e.equals(t.publicKey));
          if (r < 0) throw new Error("unknown signer: " + e.toString());
          this.signatures[r].signature = n.Buffer.from(t);
        }
        verifySignatures() {
          return this._verifySignatures(this.serializeMessage(), !0);
        }
        _verifySignatures(e, t) {
          for (const { signature: r, publicKey: n } of this.signatures)
            if (null === r) {
              if (t) return !1;
            } else if (!C(r, e, n.toBytes())) return !1;
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
          X(r, t.length);
          const s = r.length + 64 * t.length + e.length,
            i = n.Buffer.alloc(s);
          return (
            Z(t.length < 256),
            n.Buffer.from(r).copy(i, 0),
            t.forEach((e, t) => {
              let { signature: s } = e;
              null !== s &&
                (Z(64 === s.length, "signature has invalid length"),
                n.Buffer.from(s).copy(i, r.length + 64 * t));
            }),
            e.copy(i, r.length + 64 * t.length),
            Z(i.length <= q, `Transaction too large: ${i.length} > ${q}`),
            i
          );
        }
        get keys() {
          return (
            Z(1 === this.instructions.length),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            Z(1 === this.instructions.length),
            this.instructions[0].programId
          );
        }
        get data() {
          return (Z(1 === this.instructions.length), this.instructions[0].data);
        }
        static from(e) {
          let t = [...e];
          const r = G(t);
          let s = [];
          for (let i = 0; i < r; i++) {
            const e = t.slice(0, M);
            ((t = t.slice(M)), s.push(I["default"].encode(n.Buffer.from(e))));
          }
          return Transaction.populate(Message.from(t), s);
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
                  t == I["default"].encode(ee) ? null : I["default"].decode(t),
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
                  data: I["default"].decode(t.data),
                }),
              );
            }),
            (r._message = e),
            (r._json = r.toJSON()),
            r
          );
        }
      }
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
          Z(c > 0, "Message header is invalid");
          const u = e.staticAccountKeys.length - a;
          Z(u >= 0, "Message header is invalid");
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
                data: K(p.data),
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
      class VersionedTransaction {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), void 0 !== t)
          )
            (Z(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures",
            ),
              (this.signatures = t));
          else {
            const t = [];
            for (let r = 0; r < e.header.numRequiredSignatures; r++)
              t.push(new Uint8Array(M));
            this.signatures = t;
          }
          this.message = e;
        }
        serialize() {
          const e = this.message.serialize(),
            t = Array();
          X(t, this.signatures.length);
          const r = P.struct([
              P.blob(t.length, "encodedSignaturesLength"),
              P.seq(D(), this.signatures.length, "signatures"),
              P.blob(e.length, "serializedMessage"),
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
            n = G(t);
          for (let i = 0; i < n; i++) r.push(new Uint8Array(t.splice(0, M)));
          const s = Q.deserialize(new Uint8Array(t));
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
            (Z(
              e >= 0,
              "Cannot sign with non signer key " + n.publicKey.toBase58(),
            ),
              (this.signatures[e] = R(t, n.secretKey)));
          }
        }
        addSignature(e, t) {
          Z(64 === t.byteLength, "Signature must be 64 bytes long");
          const r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures,
            ),
            n = r.findIndex((t) => t.equals(e));
          (Z(
            n >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`,
          ),
            (this.signatures[n] = t));
        }
      }
      const te = new PublicKey("SysvarC1ock11111111111111111111111111111111"),
        re = new PublicKey("SysvarEpochSchedu1e111111111111111111111111"),
        ne = new PublicKey("Sysvar1nstructions1111111111111111111111111"),
        se = new PublicKey("SysvarRecentB1ockHashes11111111111111111111"),
        ie = new PublicKey("SysvarRent111111111111111111111111111111111"),
        oe = new PublicKey("SysvarRewards111111111111111111111111111111"),
        ae = new PublicKey("SysvarS1otHashes111111111111111111111111111"),
        ce = new PublicKey("SysvarS1otHistory11111111111111111111111111"),
        ue = new PublicKey("SysvarStakeHistory1111111111111111111111111");
      async function le(e, t, r, n) {
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
      function de(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function he(e, t) {
        const r = e.layout.span >= 0 ? e.layout.span : Y(e, t),
          s = n.Buffer.alloc(r),
          i = Object.assign({ instruction: e.index }, t);
        return (e.layout.encode(i, s), s);
      }
      function pe(e, t) {
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
      const ge = P.nu64("lamportsPerSignature"),
        ye = P.struct([
          P.u32("version"),
          P.u32("state"),
          U("authorizedPubkey"),
          U("nonce"),
          P.struct([ge], "feeCalculator"),
        ]),
        be = ye.span;
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
          const t = ye.decode(K(e), 0);
          return new NonceAccount({
            authorizedPubkey: new PublicKey(t.authorizedPubkey),
            nonce: new PublicKey(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      }
      const me = (e) => {
          const t = e.decode.bind(e),
            r = e.encode.bind(e);
          return { decode: t, encode: r };
        },
        fe = (e) => (t) => {
          const r = l.blob(e, t),
            { encode: s, decode: i } = me(r),
            o = r;
          return (
            (o.decode = (e, t) => {
              const r = i(e, t);
              return d.toBigIntLE(n.Buffer.from(r));
            }),
            (o.encode = (t, r, n) => {
              const i = d.toBufferLE(t, e);
              return s(i, r, n);
            }),
            o
          );
        },
        ke = fe(8);
      class SystemInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = P.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(Se))
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
          const { lamports: t, space: r, programId: n } = pe(Se.Create, e.data);
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
          const { lamports: t } = pe(Se.Transfer, e.data);
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
          } = pe(Se.TransferWithSeed, e.data);
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
          const { space: t } = pe(Se.Allocate, e.data);
          return { accountPubkey: e.keys[0].pubkey, space: t };
        }
        static decodeAllocateWithSeed(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1));
          const {
            base: t,
            seed: r,
            space: n,
            programId: s,
          } = pe(Se.AllocateWithSeed, e.data);
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
          const { programId: t } = pe(Se.Assign, e.data);
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
          } = pe(Se.AssignWithSeed, e.data);
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
          } = pe(Se.CreateWithSeed, e.data);
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
          const { authorized: t } = pe(Se.InitializeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: new PublicKey(t),
          };
        }
        static decodeNonceAdvance(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            pe(Se.AdvanceNonceAccount, e.data),
            {
              noncePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5));
          const { lamports: t } = pe(Se.WithdrawNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        }
        static decodeNonceAuthorize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2));
          const { authorized: t } = pe(Se.AuthorizeNonceAccount, e.data);
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
      const Se = Object.freeze({
        Create: {
          index: 0,
          layout: P.struct([
            P.u32("instruction"),
            P.ns64("lamports"),
            P.ns64("space"),
            U("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: P.struct([P.u32("instruction"), U("programId")]),
        },
        Transfer: {
          index: 2,
          layout: P.struct([P.u32("instruction"), ke("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: P.struct([
            P.u32("instruction"),
            U("base"),
            J("seed"),
            P.ns64("lamports"),
            P.ns64("space"),
            U("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: P.struct([P.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: P.struct([P.u32("instruction"), P.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: P.struct([P.u32("instruction"), U("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: P.struct([P.u32("instruction"), U("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: P.struct([P.u32("instruction"), P.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: P.struct([
            P.u32("instruction"),
            U("base"),
            J("seed"),
            P.ns64("space"),
            U("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: P.struct([
            P.u32("instruction"),
            U("base"),
            J("seed"),
            U("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: P.struct([
            P.u32("instruction"),
            ke("lamports"),
            J("seed"),
            U("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: P.struct([P.u32("instruction")]),
        },
      });
      class SystemProgram {
        constructor() {}
        static createAccount(e) {
          const t = Se.Create,
            r = he(t, {
              lamports: e.lamports,
              space: e.space,
              programId: K(e.programId.toBuffer()),
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
            const n = Se.TransferWithSeed;
            ((t = he(n, {
              lamports: BigInt(e.lamports),
              seed: e.seed,
              programId: K(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]));
          } else {
            const n = Se.Transfer;
            ((t = he(n, { lamports: BigInt(e.lamports) })),
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
            const n = Se.AssignWithSeed;
            ((t = he(n, {
              base: K(e.basePubkey.toBuffer()),
              seed: e.seed,
              programId: K(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]));
          } else {
            const n = Se.Assign;
            ((t = he(n, { programId: K(e.programId.toBuffer()) })),
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
          const t = Se.CreateWithSeed,
            r = he(t, {
              base: K(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: K(e.programId.toBuffer()),
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
                  space: be,
                  programId: this.programId,
                }),
              )
            : t.add(
                SystemProgram.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: be,
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
          const t = Se.InitializeNonceAccount,
            r = he(t, { authorized: K(e.authorizedPubkey.toBuffer()) }),
            n = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: se, isSigner: !1, isWritable: !1 },
                { pubkey: ie, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new TransactionInstruction(n);
        }
        static nonceAdvance(e) {
          const t = Se.AdvanceNonceAccount,
            r = he(t),
            n = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: se, isSigner: !1, isWritable: !1 },
                { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new TransactionInstruction(n);
        }
        static nonceWithdraw(e) {
          const t = Se.WithdrawNonceAccount,
            r = he(t, { lamports: e.lamports });
          return new TransactionInstruction({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: se, isSigner: !1, isWritable: !1 },
              { pubkey: ie, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static nonceAuthorize(e) {
          const t = Se.AuthorizeNonceAccount,
            r = he(t, { authorized: K(e.newAuthorizedPubkey.toBuffer()) });
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
            const n = Se.AllocateWithSeed;
            ((t = he(n, {
              base: K(e.basePubkey.toBuffer()),
              seed: e.seed,
              space: e.space,
              programId: K(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]));
          } else {
            const n = Se.Allocate;
            ((t = he(n, { space: e.space })),
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
      SystemProgram.programId = new PublicKey(
        "11111111111111111111111111111111",
      );
      const we = q - 300;
      class Loader {
        constructor() {}
        static getMinNumSignatures(e) {
          return 2 * (Math.ceil(e / Loader.chunkSize) + 1 + 1);
        }
        static async load(e, t, r, s, i) {
          {
            const n = await e.getMinimumBalanceForRentExemption(i.length),
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
                o.owner.equals(s) ||
                  ((a = a || new Transaction()),
                  a.add(
                    SystemProgram.assign({
                      accountPubkey: r.publicKey,
                      programId: s,
                    }),
                  )),
                o.lamports < n &&
                  ((a = a || new Transaction()),
                  a.add(
                    SystemProgram.transfer({
                      fromPubkey: t.publicKey,
                      toPubkey: r.publicKey,
                      lamports: n - o.lamports,
                    }),
                  )));
            } else
              a = new Transaction().add(
                SystemProgram.createAccount({
                  fromPubkey: t.publicKey,
                  newAccountPubkey: r.publicKey,
                  lamports: n > 0 ? n : 1,
                  space: i.length,
                  programId: s,
                }),
              );
            null !== a && (await le(e, a, [t, r], { commitment: "confirmed" }));
          }
          const o = P.struct([
              P.u32("instruction"),
              P.u32("offset"),
              P.u32("bytesLength"),
              P.u32("bytesLengthPadding"),
              P.seq(P.u8("byte"), P.offset(P.u32(), -8), "bytes"),
            ]),
            a = Loader.chunkSize;
          let c = 0,
            u = i,
            l = [];
          while (u.length > 0) {
            const i = u.slice(0, a),
              d = n.Buffer.alloc(a + 16);
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
              programId: s,
              data: d,
            });
            if (
              (l.push(le(e, h, [t, r], { commitment: "confirmed" })),
              e._rpcEndpoint.includes("solana.com"))
            ) {
              const e = 4;
              await de(1e3 / e);
            }
            ((c += a), (u = u.slice(a)));
          }
          await Promise.all(l);
          {
            const i = P.struct([P.u32("instruction")]),
              o = n.Buffer.alloc(i.span);
            i.encode({ instruction: 1 }, o);
            const a = new Transaction().add({
              keys: [
                { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                { pubkey: ie, isSigner: !1, isWritable: !1 },
              ],
              programId: s,
              data: o,
            });
            await le(e, a, [t, r], { commitment: "confirmed" });
          }
          return !0;
        }
      }
      Loader.chunkSize = we;
      const Ie = new PublicKey("BPFLoader2111111111111111111111111111111111");
      class BpfLoader {
        static getMinNumSignatures(e) {
          return Loader.getMinNumSignatures(e);
        }
        static load(e, t, r, n, s) {
          return Loader.load(e, t, r, s, n);
        }
      }
      var Pe = Object.prototype.toString,
        Ae =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      function _e(e, t) {
        var r, n, s, i, o, a, c;
        if (!0 === e) return "true";
        if (!1 === e) return "false";
        switch (typeof e) {
          case "object":
            if (null === e) return null;
            if (e.toJSON && "function" === typeof e.toJSON)
              return _e(e.toJSON(), t);
            if (((c = Pe.call(e)), "[object Array]" === c)) {
              for (s = "[", n = e.length - 1, r = 0; r < n; r++)
                s += _e(e[r], !0) + ",";
              return (n > -1 && (s += _e(e[r], !0)), s + "]");
            }
            if ("[object Object]" === c) {
              ((i = Ae(e).sort()), (n = i.length), (s = ""), (r = 0));
              while (r < n)
                ((o = i[r]),
                  (a = _e(e[o], !1)),
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
      var Ee = function (e) {
          var t = _e(e, !1);
          if (void 0 !== t) return "" + t;
        },
        ve = Ee;
      const Te = 32;
      function Be(e) {
        let t = 0;
        while (e > 1) ((e /= 2), t++);
        return t;
      }
      function Re(e) {
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
            const t = Be(Re(e + Te + 1)) - Be(Te) - 1,
              r = this.getSlotsInEpoch(t),
              n = e - (r - Te);
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
            ? (Math.pow(2, e) - 1) * Te
            : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
                this.firstNormalSlot;
        }
        getLastSlotInEpoch(e) {
          return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
        }
        getSlotsInEpoch(e) {
          return e < this.firstNormalEpoch
            ? Math.pow(2, e + Be(Te))
            : this.slotsPerEpoch;
        }
      }
      class SendTransactionError extends Error {
        constructor(e, t) {
          (super(e), (this.logs = void 0), (this.logs = t));
        }
      }
      const Ce = {
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
      var Ke = globalThis.fetch;
      const xe = 160,
        Oe = 64,
        Le = xe / Oe,
        Ne = 1e3 / Le;
      function ze(e, t) {
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
      const We = 56;
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
          const t = ze(qe, e),
            r = e.length - We;
          (Z(r >= 0, "lookup table is invalid"),
            Z(r % 32 === 0, "lookup table is invalid"));
          const n = r / 32,
            { addresses: s } = P.struct([P.seq(U(), n, "addresses")]).decode(
              e.slice(We),
            );
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
      const qe = {
          index: 1,
          layout: P.struct([
            P.u32("typeIndex"),
            ke("deactivationSlot"),
            P.nu64("lastExtendedSlot"),
            P.u8("lastExtendedStartIndex"),
            P.u8(),
            P.seq(U(), P.offset(P.u8(), -1), "authority"),
          ]),
        },
        Ve = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
      function Me(e) {
        const t = e.match(Ve);
        if (null == t)
          throw TypeError(`Failed to validate endpoint URL \`${e}\``);
        const [r, n, s, i] = t,
          o = e.startsWith("https:") ? "wss:" : "ws:",
          a = null == s ? null : parseInt(s.slice(1), 10),
          c = null == a ? "" : ":" + (a + 1);
        return `${o}//${n}${c}${i}`;
      }
      var Ue;
      const De = h.coerce(
          h.instance(PublicKey),
          h.string(),
          (e) => new PublicKey(e),
        ),
        Je = h.tuple([h.string(), h.literal("base64")]),
        He = h.coerce(h.instance(n.Buffer), Je, (e) =>
          n.Buffer.from(e[0], "base64"),
        ),
        Fe = 3e4;
      function je(e) {
        if (!1 === /^https?:/.test(e))
          throw new TypeError(
            "Endpoint URL must start with `http:` or `https:`.",
          );
        return e;
      }
      function $e(e) {
        let t, r;
        if ("string" === typeof e) t = e;
        else if (e) {
          const { commitment: n, ...s } = e;
          ((t = n), (r = s));
        }
        return { commitment: t, config: r };
      }
      function Ye(e) {
        return h.union([
          h.type({ jsonrpc: h.literal("2.0"), id: h.string(), result: e }),
          h.type({
            jsonrpc: h.literal("2.0"),
            id: h.string(),
            error: h.type({
              code: h.unknown(),
              message: h.string(),
              data: h.optional(h.any()),
            }),
          }),
        ]);
      }
      const Ge = Ye(h.unknown());
      function Xe(e) {
        return h.coerce(Ye(e), Ge, (t) =>
          "error" in t ? t : { ...t, result: h.create(t.result, e) },
        );
      }
      function Ze(e) {
        return Xe(h.type({ context: h.type({ slot: h.number() }), value: e }));
      }
      function Qe(e) {
        return h.type({ context: h.type({ slot: h.number() }), value: e });
      }
      function et(e, t) {
        return 0 === e
          ? new MessageV0({
              header: t.header,
              staticAccountKeys: t.accountKeys.map((e) => new PublicKey(e)),
              recentBlockhash: t.recentBlockhash,
              compiledInstructions: t.instructions.map((e) => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: I["default"].decode(e.data),
              })),
              addressTableLookups: t.addressTableLookups,
            })
          : new Message(t);
      }
      const tt = h.type({
          foundation: h.number(),
          foundationTerm: h.number(),
          initial: h.number(),
          taper: h.number(),
          terminal: h.number(),
        }),
        rt = Xe(
          h.array(
            h.nullable(
              h.type({
                epoch: h.number(),
                effectiveSlot: h.number(),
                amount: h.number(),
                postBalance: h.number(),
              }),
            ),
          ),
        ),
        nt = h.type({
          epoch: h.number(),
          slotIndex: h.number(),
          slotsInEpoch: h.number(),
          absoluteSlot: h.number(),
          blockHeight: h.optional(h.number()),
          transactionCount: h.optional(h.number()),
        }),
        st = h.type({
          slotsPerEpoch: h.number(),
          leaderScheduleSlotOffset: h.number(),
          warmup: h.boolean(),
          firstNormalEpoch: h.number(),
          firstNormalSlot: h.number(),
        }),
        it = h.record(h.string(), h.array(h.number())),
        ot = h.nullable(h.union([h.type({}), h.string()])),
        at = h.type({ err: ot }),
        ct = h.literal("receivedSignature"),
        ut = h.type({
          "solana-core": h.string(),
          "feature-set": h.optional(h.number()),
        }),
        lt = Ze(
          h.type({
            err: h.nullable(h.union([h.type({}), h.string()])),
            logs: h.nullable(h.array(h.string())),
            accounts: h.optional(
              h.nullable(
                h.array(
                  h.nullable(
                    h.type({
                      executable: h.boolean(),
                      owner: h.string(),
                      lamports: h.number(),
                      data: h.array(h.string()),
                      rentEpoch: h.optional(h.number()),
                    }),
                  ),
                ),
              ),
            ),
            unitsConsumed: h.optional(h.number()),
            returnData: h.optional(
              h.nullable(
                h.type({
                  programId: h.string(),
                  data: h.tuple([h.string(), h.literal("base64")]),
                }),
              ),
            ),
          }),
        ),
        dt = Ze(
          h.type({
            byIdentity: h.record(h.string(), h.array(h.number())),
            range: h.type({ firstSlot: h.number(), lastSlot: h.number() }),
          }),
        );
      function ht(e, t, r, n, s) {
        const i = r || Ke;
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
        const a = new A["default"](async (r, n) => {
          const a = void 0,
            c = {
              method: "POST",
              body: r,
              agent: a,
              headers: Object.assign(
                { "Content-Type": "application/json" },
                t || {},
                _r,
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
                await de(a),
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
      function pt(e) {
        return (t, r) =>
          new Promise((n, s) => {
            e.request(t, r, (e, t) => {
              e ? s(e) : n(t);
            });
          });
      }
      function gt(e) {
        return (t) =>
          new Promise((r, n) => {
            0 === t.length && r([]);
            const s = t.map((t) => e.request(t.methodName, t.args));
            e.request(s, (e, t) => {
              e ? n(e) : r(t);
            });
          });
      }
      const yt = Xe(tt),
        bt = Xe(nt),
        mt = Xe(st),
        ft = Xe(it),
        kt = Xe(h.number()),
        St = Ze(
          h.type({
            total: h.number(),
            circulating: h.number(),
            nonCirculating: h.number(),
            nonCirculatingAccounts: h.array(De),
          }),
        ),
        wt = h.type({
          amount: h.string(),
          uiAmount: h.nullable(h.number()),
          decimals: h.number(),
          uiAmountString: h.optional(h.string()),
        }),
        It = Ze(
          h.array(
            h.type({
              address: De,
              amount: h.string(),
              uiAmount: h.nullable(h.number()),
              decimals: h.number(),
              uiAmountString: h.optional(h.string()),
            }),
          ),
        ),
        Pt = Ze(
          h.array(
            h.type({
              pubkey: De,
              account: h.type({
                executable: h.boolean(),
                owner: De,
                lamports: h.number(),
                data: He,
                rentEpoch: h.number(),
              }),
            }),
          ),
        ),
        At = h.type({
          program: h.string(),
          parsed: h.unknown(),
          space: h.number(),
        }),
        _t = Ze(
          h.array(
            h.type({
              pubkey: De,
              account: h.type({
                executable: h.boolean(),
                owner: De,
                lamports: h.number(),
                data: At,
                rentEpoch: h.number(),
              }),
            }),
          ),
        ),
        Et = Ze(h.array(h.type({ lamports: h.number(), address: De }))),
        vt = h.type({
          executable: h.boolean(),
          owner: De,
          lamports: h.number(),
          data: He,
          rentEpoch: h.number(),
        }),
        Tt = h.type({ pubkey: De, account: vt }),
        Bt = h.coerce(
          h.union([h.instance(n.Buffer), At]),
          h.union([Je, At]),
          (e) => (Array.isArray(e) ? h.create(e, He) : e),
        ),
        Rt = h.type({
          executable: h.boolean(),
          owner: De,
          lamports: h.number(),
          data: Bt,
          rentEpoch: h.number(),
        }),
        Ct = h.type({ pubkey: De, account: Rt }),
        Kt = h.type({
          state: h.union([
            h.literal("active"),
            h.literal("inactive"),
            h.literal("activating"),
            h.literal("deactivating"),
          ]),
          active: h.number(),
          inactive: h.number(),
        }),
        xt = Xe(
          h.array(
            h.type({
              signature: h.string(),
              slot: h.number(),
              err: ot,
              memo: h.nullable(h.string()),
              blockTime: h.optional(h.nullable(h.number())),
            }),
          ),
        ),
        Ot = Xe(
          h.array(
            h.type({
              signature: h.string(),
              slot: h.number(),
              err: ot,
              memo: h.nullable(h.string()),
              blockTime: h.optional(h.nullable(h.number())),
            }),
          ),
        ),
        Lt = h.type({ subscription: h.number(), result: Qe(vt) }),
        Nt = h.type({ pubkey: De, account: vt }),
        zt = h.type({ subscription: h.number(), result: Qe(Nt) }),
        Wt = h.type({ parent: h.number(), slot: h.number(), root: h.number() }),
        qt = h.type({ subscription: h.number(), result: Wt }),
        Vt = h.union([
          h.type({
            type: h.union([
              h.literal("firstShredReceived"),
              h.literal("completed"),
              h.literal("optimisticConfirmation"),
              h.literal("root"),
            ]),
            slot: h.number(),
            timestamp: h.number(),
          }),
          h.type({
            type: h.literal("createdBank"),
            parent: h.number(),
            slot: h.number(),
            timestamp: h.number(),
          }),
          h.type({
            type: h.literal("frozen"),
            slot: h.number(),
            timestamp: h.number(),
            stats: h.type({
              numTransactionEntries: h.number(),
              numSuccessfulTransactions: h.number(),
              numFailedTransactions: h.number(),
              maxTransactionsPerEntry: h.number(),
            }),
          }),
          h.type({
            type: h.literal("dead"),
            slot: h.number(),
            timestamp: h.number(),
            err: h.string(),
          }),
        ]),
        Mt = h.type({ subscription: h.number(), result: Vt }),
        Ut = h.type({
          subscription: h.number(),
          result: Qe(h.union([at, ct])),
        }),
        Dt = h.type({ subscription: h.number(), result: h.number() }),
        Jt = h.type({
          pubkey: h.string(),
          gossip: h.nullable(h.string()),
          tpu: h.nullable(h.string()),
          rpc: h.nullable(h.string()),
          version: h.nullable(h.string()),
        }),
        Ht = h.type({
          votePubkey: h.string(),
          nodePubkey: h.string(),
          activatedStake: h.number(),
          epochVoteAccount: h.boolean(),
          epochCredits: h.array(h.tuple([h.number(), h.number(), h.number()])),
          commission: h.number(),
          lastVote: h.number(),
          rootSlot: h.nullable(h.number()),
        }),
        Ft = Xe(h.type({ current: h.array(Ht), delinquent: h.array(Ht) })),
        jt = h.union([
          h.literal("processed"),
          h.literal("confirmed"),
          h.literal("finalized"),
        ]),
        $t = h.type({
          slot: h.number(),
          confirmations: h.nullable(h.number()),
          err: ot,
          confirmationStatus: h.optional(jt),
        }),
        Yt = Ze(h.array(h.nullable($t))),
        Gt = Xe(h.number()),
        Xt = h.type({
          accountKey: De,
          writableIndexes: h.array(h.number()),
          readonlyIndexes: h.array(h.number()),
        }),
        Zt = h.type({
          signatures: h.array(h.string()),
          message: h.type({
            accountKeys: h.array(h.string()),
            header: h.type({
              numRequiredSignatures: h.number(),
              numReadonlySignedAccounts: h.number(),
              numReadonlyUnsignedAccounts: h.number(),
            }),
            instructions: h.array(
              h.type({
                accounts: h.array(h.number()),
                data: h.string(),
                programIdIndex: h.number(),
              }),
            ),
            recentBlockhash: h.string(),
            addressTableLookups: h.optional(h.array(Xt)),
          }),
        }),
        Qt = h.type({
          parsed: h.unknown(),
          program: h.string(),
          programId: De,
        }),
        er = h.type({ accounts: h.array(De), data: h.string(), programId: De }),
        tr = h.union([er, Qt]),
        rr = h.union([
          h.type({
            parsed: h.unknown(),
            program: h.string(),
            programId: h.string(),
          }),
          h.type({
            accounts: h.array(h.string()),
            data: h.string(),
            programId: h.string(),
          }),
        ]),
        nr = h.coerce(tr, rr, (e) =>
          "accounts" in e ? h.create(e, er) : h.create(e, Qt),
        ),
        sr = h.type({
          signatures: h.array(h.string()),
          message: h.type({
            accountKeys: h.array(
              h.type({
                pubkey: De,
                signer: h.boolean(),
                writable: h.boolean(),
                source: h.optional(
                  h.union([h.literal("transaction"), h.literal("lookupTable")]),
                ),
              }),
            ),
            instructions: h.array(nr),
            recentBlockhash: h.string(),
            addressTableLookups: h.optional(h.nullable(h.array(Xt))),
          }),
        }),
        ir = h.type({
          accountIndex: h.number(),
          mint: h.string(),
          owner: h.optional(h.string()),
          uiTokenAmount: wt,
        }),
        or = h.type({ writable: h.array(De), readonly: h.array(De) }),
        ar = h.type({
          err: ot,
          fee: h.number(),
          innerInstructions: h.optional(
            h.nullable(
              h.array(
                h.type({
                  index: h.number(),
                  instructions: h.array(
                    h.type({
                      accounts: h.array(h.number()),
                      data: h.string(),
                      programIdIndex: h.number(),
                    }),
                  ),
                }),
              ),
            ),
          ),
          preBalances: h.array(h.number()),
          postBalances: h.array(h.number()),
          logMessages: h.optional(h.nullable(h.array(h.string()))),
          preTokenBalances: h.optional(h.nullable(h.array(ir))),
          postTokenBalances: h.optional(h.nullable(h.array(ir))),
          loadedAddresses: h.optional(or),
          computeUnitsConsumed: h.optional(h.number()),
        }),
        cr = h.type({
          err: ot,
          fee: h.number(),
          innerInstructions: h.optional(
            h.nullable(
              h.array(h.type({ index: h.number(), instructions: h.array(nr) })),
            ),
          ),
          preBalances: h.array(h.number()),
          postBalances: h.array(h.number()),
          logMessages: h.optional(h.nullable(h.array(h.string()))),
          preTokenBalances: h.optional(h.nullable(h.array(ir))),
          postTokenBalances: h.optional(h.nullable(h.array(ir))),
          loadedAddresses: h.optional(or),
          computeUnitsConsumed: h.optional(h.number()),
        }),
        ur = h.union([h.literal(0), h.literal("legacy")]),
        lr = Xe(
          h.nullable(
            h.type({
              blockhash: h.string(),
              previousBlockhash: h.string(),
              parentSlot: h.number(),
              transactions: h.array(
                h.type({
                  transaction: Zt,
                  meta: h.nullable(ar),
                  version: h.optional(ur),
                }),
              ),
              rewards: h.optional(
                h.array(
                  h.type({
                    pubkey: h.string(),
                    lamports: h.number(),
                    postBalance: h.nullable(h.number()),
                    rewardType: h.nullable(h.string()),
                  }),
                ),
              ),
              blockTime: h.nullable(h.number()),
              blockHeight: h.nullable(h.number()),
            }),
          ),
        ),
        dr = Xe(
          h.nullable(
            h.type({
              blockhash: h.string(),
              previousBlockhash: h.string(),
              parentSlot: h.number(),
              transactions: h.array(
                h.type({
                  transaction: sr,
                  meta: h.nullable(cr),
                  version: h.optional(ur),
                }),
              ),
              rewards: h.optional(
                h.array(
                  h.type({
                    pubkey: h.string(),
                    lamports: h.number(),
                    postBalance: h.nullable(h.number()),
                    rewardType: h.nullable(h.string()),
                  }),
                ),
              ),
              blockTime: h.nullable(h.number()),
              blockHeight: h.nullable(h.number()),
            }),
          ),
        ),
        hr = Xe(
          h.nullable(
            h.type({
              blockhash: h.string(),
              previousBlockhash: h.string(),
              parentSlot: h.number(),
              transactions: h.array(
                h.type({ transaction: Zt, meta: h.nullable(ar) }),
              ),
              rewards: h.optional(
                h.array(
                  h.type({
                    pubkey: h.string(),
                    lamports: h.number(),
                    postBalance: h.nullable(h.number()),
                    rewardType: h.nullable(h.string()),
                  }),
                ),
              ),
              blockTime: h.nullable(h.number()),
            }),
          ),
        ),
        pr = Xe(
          h.nullable(
            h.type({
              blockhash: h.string(),
              previousBlockhash: h.string(),
              parentSlot: h.number(),
              signatures: h.array(h.string()),
              blockTime: h.nullable(h.number()),
            }),
          ),
        ),
        gr = Xe(
          h.nullable(
            h.type({
              slot: h.number(),
              meta: ar,
              blockTime: h.optional(h.nullable(h.number())),
              transaction: Zt,
              version: h.optional(ur),
            }),
          ),
        ),
        yr = Xe(
          h.nullable(
            h.type({
              slot: h.number(),
              transaction: sr,
              meta: h.nullable(cr),
              blockTime: h.optional(h.nullable(h.number())),
              version: h.optional(ur),
            }),
          ),
        ),
        br = Ze(
          h.type({
            blockhash: h.string(),
            feeCalculator: h.type({ lamportsPerSignature: h.number() }),
          }),
        ),
        mr = Ze(
          h.type({ blockhash: h.string(), lastValidBlockHeight: h.number() }),
        ),
        fr = h.type({
          slot: h.number(),
          numTransactions: h.number(),
          numSlots: h.number(),
          samplePeriodSecs: h.number(),
        }),
        kr = Xe(h.array(fr)),
        Sr = Ze(
          h.nullable(
            h.type({
              feeCalculator: h.type({ lamportsPerSignature: h.number() }),
            }),
          ),
        ),
        wr = Xe(h.string()),
        Ir = Xe(h.string()),
        Pr = h.type({
          err: ot,
          logs: h.array(h.string()),
          signature: h.string(),
        }),
        Ar = h.type({ result: Qe(Pr), subscription: h.number() }),
        _r = {
          "solana-client":
            "js/" +
            (null !== (Ue = "0.0.0-development") && void 0 !== Ue
              ? Ue
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
            (this._rpcEndpoint = je(e)),
            (this._rpcWsEndpoint = r || Me(e)),
            (this._rpcClient = ht(e, n, s, i, o)),
            (this._rpcRequest = pt(this._rpcClient)),
            (this._rpcBatchRequest = gt(this._rpcClient)),
            (this._rpcWebSocket = new p.Client(this._rpcWsEndpoint, {
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
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgs([e.toBase58()], r, void 0, n),
            i = await this._rpcRequest("getBalance", s),
            o = h.create(i, Ze(h.number()));
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
            r = h.create(t, Xe(h.nullable(h.number())));
          if ("error" in r)
            throw new SolanaJSONRPCError(
              r.error,
              "failed to get block time for slot " + e,
            );
          return r.result;
        }
        async getMinimumLedgerSlot() {
          const e = await this._rpcRequest("minimumLedgerSlot", []),
            t = h.create(e, Xe(h.number()));
          if ("error" in t)
            throw new SolanaJSONRPCError(
              t.error,
              "failed to get minimum ledger slot",
            );
          return t.result;
        }
        async getFirstAvailableBlock() {
          const e = await this._rpcRequest("getFirstAvailableBlock", []),
            t = h.create(e, kt);
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
            n = h.create(r, St);
          if ("error" in n)
            throw new SolanaJSONRPCError(n.error, "failed to get supply");
          return n.result;
        }
        async getTokenSupply(e, t) {
          const r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenSupply", r),
            s = h.create(n, Ze(wt));
          if ("error" in s)
            throw new SolanaJSONRPCError(s.error, "failed to get token supply");
          return s.result;
        }
        async getTokenAccountBalance(e, t) {
          const r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenAccountBalance", r),
            s = h.create(n, Ze(wt));
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get token account balance",
            );
          return s.result;
        }
        async getTokenAccountsByOwner(e, t, r) {
          const { commitment: n, config: s } = $e(r);
          let i = [e.toBase58()];
          "mint" in t
            ? i.push({ mint: t.mint.toBase58() })
            : i.push({ programId: t.programId.toBase58() });
          const o = this._buildArgs(i, n, "base64", s),
            a = await this._rpcRequest("getTokenAccountsByOwner", o),
            c = h.create(a, Pt);
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
            o = h.create(i, _t);
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
            s = h.create(n, Et);
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
            s = h.create(n, It);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get token largest accounts",
            );
          return s.result;
        }
        async getAccountInfoAndContext(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgs([e.toBase58()], r, "base64", n),
            i = await this._rpcRequest("getAccountInfo", s),
            o = h.create(i, Ze(h.nullable(vt)));
          if ("error" in o)
            throw new SolanaJSONRPCError(
              o.error,
              "failed to get info about account " + e.toBase58(),
            );
          return o.result;
        }
        async getParsedAccountInfo(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            i = await this._rpcRequest("getAccountInfo", s),
            o = h.create(i, Ze(h.nullable(Rt)));
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
          const { commitment: r, config: n } = $e(t),
            s = e.map((e) => e.toBase58()),
            i = this._buildArgs([s], r, "jsonParsed", n),
            o = await this._rpcRequest("getMultipleAccounts", i),
            a = h.create(o, Ze(h.array(h.nullable(Rt))));
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get info for accounts " + s,
            );
          return a.result;
        }
        async getMultipleAccountsInfoAndContext(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = e.map((e) => e.toBase58()),
            i = this._buildArgs([s], r, "base64", n),
            o = await this._rpcRequest("getMultipleAccounts", i),
            a = h.create(o, Ze(h.array(h.nullable(vt))));
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
          const { commitment: n, config: s } = $e(t),
            i = this._buildArgs([e.toBase58()], n, void 0, {
              ...s,
              epoch:
                null != r ? r : null === s || void 0 === s ? void 0 : s.epoch,
            }),
            o = await this._rpcRequest("getStakeActivation", i),
            a = h.create(o, Xe(Kt));
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get Stake Activation " + e.toBase58(),
            );
          return a.result;
        }
        async getProgramAccounts(e, t) {
          const { commitment: r, config: n } = $e(t),
            { encoding: s, ...i } = n || {},
            o = this._buildArgs([e.toBase58()], r, s || "base64", i),
            a = await this._rpcRequest("getProgramAccounts", o),
            c = h.create(a, Xe(h.array(Tt)));
          if ("error" in c)
            throw new SolanaJSONRPCError(
              c.error,
              "failed to get accounts owned by program " + e.toBase58(),
            );
          return c.result;
        }
        async getParsedProgramAccounts(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            i = await this._rpcRequest("getProgramAccounts", s),
            o = h.create(i, Xe(h.array(Ct)));
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
            n = I["default"].decode(r);
          } catch (s) {
            throw new Error("signature must be base58 encoded: " + r);
          }
          return (
            Z(64 === n.length, "signature has invalid length"),
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
          let r,
            n,
            { commitment: s, signature: i } = e,
            o = !1;
          const a = new Promise((e, a) => {
              try {
                r = this.onSignature(
                  i,
                  (n, s) => {
                    r = void 0;
                    const i = { context: s, value: n };
                    e({ __type: t.TransactionStatus.PROCESSED, response: i });
                  },
                  s,
                );
                const c = new Promise((e) => {
                  null == r
                    ? e()
                    : (n = this._onSubscriptionStateChange(r, (t) => {
                        "subscribed" === t && e();
                      }));
                });
                (async () => {
                  if ((await c, o)) return;
                  const r = await this.getSignatureStatus(i);
                  if (o) return;
                  if (null == r) return;
                  const { context: n, value: u } = r;
                  if (null != u)
                    if (null !== u && void 0 !== u && u.err) a(u.err);
                    else {
                      switch (s) {
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                          if ("processed" === u.confirmationStatus) return;
                          break;
                        case "finalized":
                        case "max":
                        case "root":
                          if (
                            "processed" === u.confirmationStatus ||
                            "confirmed" === u.confirmationStatus
                          )
                            return;
                          break;
                        case "processed":
                        case "recent":
                      }
                      ((o = !0),
                        e({
                          __type: t.TransactionStatus.PROCESSED,
                          response: { context: n, value: u },
                        }));
                    }
                })();
              } catch (c) {
                a(c);
              }
            }),
            c = () => {
              (n && (n(), (n = void 0)),
                r && (this.removeSignatureListener(r), (r = void 0)));
            };
          return { abortConfirmation: c, confirmationPromise: a };
        }
        async confirmTransactionUsingBlockHeightExceedanceStrategy(e) {
          let {
              commitment: r,
              strategy: { lastValidBlockHeight: n, signature: s },
            } = e,
            i = !1;
          const o = new Promise((e) => {
              const s = async () => {
                try {
                  const e = await this.getBlockHeight(r);
                  return e;
                } catch (e) {
                  return -1;
                }
              };
              (async () => {
                let r = await s();
                if (!i) {
                  while (r <= n) {
                    if ((await de(1e3), i)) return;
                    if (((r = await s()), i)) return;
                  }
                  e({ __type: t.TransactionStatus.BLOCKHEIGHT_EXCEEDED });
                }
              })();
            }),
            { abortConfirmation: a, confirmationPromise: c } =
              this.getTransactionConfirmationPromise({
                commitment: r,
                signature: s,
              });
          let u;
          try {
            const e = await Promise.race([c, o]);
            if (e.__type !== t.TransactionStatus.PROCESSED)
              throw new TransactionExpiredBlockheightExceededError(s);
            u = e.response;
          } finally {
            ((i = !0), a());
          }
          return u;
        }
        async confirmTransactionUsingDurableNonceStrategy(e) {
          let {
              commitment: r,
              strategy: {
                minContextSlot: n,
                nonceAccountPubkey: s,
                nonceValue: i,
                signature: o,
              },
            } = e,
            a = !1;
          const c = new Promise((e) => {
              let o = i,
                c = null;
              const u = async () => {
                try {
                  const { context: e, value: t } =
                    await this.getNonceAndContext(s, {
                      commitment: r,
                      minContextSlot: n,
                    });
                  return (
                    (c = e.slot),
                    null === t || void 0 === t ? void 0 : t.nonce
                  );
                } catch (e) {
                  return o;
                }
              };
              (async () => {
                if (((o = await u()), !a))
                  while (1) {
                    if (i !== o)
                      return void e({
                        __type: t.TransactionStatus.NONCE_INVALID,
                        slotInWhichNonceDidAdvance: c,
                      });
                    if ((await de(2e3), a)) return;
                    if (((o = await u()), a)) return;
                  }
              })();
            }),
            { abortConfirmation: u, confirmationPromise: l } =
              this.getTransactionConfirmationPromise({
                commitment: r,
                signature: o,
              });
          let d;
          try {
            const e = await Promise.race([l, c]);
            if (e.__type === t.TransactionStatus.PROCESSED) d = e.response;
            else {
              var h;
              let t;
              while (1) {
                var p;
                const r = await this.getSignatureStatus(o);
                if (null == r) break;
                if (
                  !(
                    r.context.slot <
                    (null !== (p = e.slotInWhichNonceDidAdvance) && void 0 !== p
                      ? p
                      : n)
                  )
                ) {
                  t = r;
                  break;
                }
                await de(400);
              }
              if (null === (h = t) || void 0 === h || !h.value)
                throw new TransactionExpiredNonceInvalidError(o);
              {
                const e = r || "finalized",
                  { confirmationStatus: n } = t.value;
                switch (e) {
                  case "processed":
                  case "recent":
                    if (
                      "processed" !== n &&
                      "confirmed" !== n &&
                      "finalized" !== n
                    )
                      throw new TransactionExpiredNonceInvalidError(o);
                    break;
                  case "confirmed":
                  case "single":
                  case "singleGossip":
                    if ("confirmed" !== n && "finalized" !== n)
                      throw new TransactionExpiredNonceInvalidError(o);
                    break;
                  case "finalized":
                  case "max":
                  case "root":
                    if ("finalized" !== n)
                      throw new TransactionExpiredNonceInvalidError(o);
                    break;
                  default:
                }
                d = { context: t.context, value: { err: t.value.err } };
              }
            }
          } finally {
            ((a = !0), u());
          }
          return d;
        }
        async confirmTransactionUsingLegacyTimeoutStrategy(e) {
          let r,
            { commitment: n, signature: s } = e;
          const i = new Promise((e) => {
              let s = this._confirmTransactionInitialTimeout || 6e4;
              switch (n) {
                case "processed":
                case "recent":
                case "single":
                case "confirmed":
                case "singleGossip":
                  s = this._confirmTransactionInitialTimeout || 3e4;
                  break;
              }
              r = setTimeout(
                () =>
                  e({ __type: t.TransactionStatus.TIMED_OUT, timeoutMs: s }),
                s,
              );
            }),
            { abortConfirmation: o, confirmationPromise: a } =
              this.getTransactionConfirmationPromise({
                commitment: n,
                signature: s,
              });
          let c;
          try {
            const e = await Promise.race([a, i]);
            if (e.__type !== t.TransactionStatus.PROCESSED)
              throw new TransactionExpiredTimeoutError(s, e.timeoutMs / 1e3);
            c = e.response;
          } finally {
            (clearTimeout(r), o());
          }
          return c;
        }
        async getClusterNodes() {
          const e = await this._rpcRequest("getClusterNodes", []),
            t = h.create(e, Xe(h.array(Jt)));
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
            n = h.create(r, Ft);
          if ("error" in n)
            throw new SolanaJSONRPCError(
              n.error,
              "failed to get vote accounts",
            );
          return n.result;
        }
        async getSlot(e) {
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getSlot", n),
            i = h.create(s, Xe(h.number()));
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get slot");
          return i.result;
        }
        async getSlotLeader(e) {
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getSlotLeader", n),
            i = h.create(s, Xe(h.string()));
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get slot leader");
          return i.result;
        }
        async getSlotLeaders(e, t) {
          const r = [e, t],
            n = await this._rpcRequest("getSlotLeaders", r),
            s = h.create(n, Xe(h.array(De)));
          if ("error" in s)
            throw new SolanaJSONRPCError(s.error, "failed to get slot leaders");
          return s.result;
        }
        async getSignatureStatus(e, t) {
          const { context: r, value: n } = await this.getSignatureStatuses(
            [e],
            t,
          );
          Z(1 === n.length);
          const s = n[0];
          return { context: r, value: s };
        }
        async getSignatureStatuses(e, t) {
          const r = [e];
          t && r.push(t);
          const n = await this._rpcRequest("getSignatureStatuses", r),
            s = h.create(n, Yt);
          if ("error" in s)
            throw new SolanaJSONRPCError(
              s.error,
              "failed to get signature status",
            );
          return s.result;
        }
        async getTransactionCount(e) {
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getTransactionCount", n),
            i = h.create(s, Xe(h.number()));
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
            n = h.create(r, yt);
          if ("error" in n)
            throw new SolanaJSONRPCError(n.error, "failed to get inflation");
          return n.result;
        }
        async getInflationReward(e, t, r) {
          const { commitment: n, config: s } = $e(r),
            i = this._buildArgs([e.map((e) => e.toBase58())], n, void 0, {
              ...s,
              epoch:
                null != t ? t : null === s || void 0 === s ? void 0 : s.epoch,
            }),
            o = await this._rpcRequest("getInflationReward", i),
            a = h.create(o, rt);
          if ("error" in a)
            throw new SolanaJSONRPCError(
              a.error,
              "failed to get inflation reward",
            );
          return a.result;
        }
        async getEpochInfo(e) {
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getEpochInfo", n),
            i = h.create(s, bt);
          if ("error" in i)
            throw new SolanaJSONRPCError(i.error, "failed to get epoch info");
          return i.result;
        }
        async getEpochSchedule() {
          const e = await this._rpcRequest("getEpochSchedule", []),
            t = h.create(e, mt);
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
            t = h.create(e, ft);
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
            s = h.create(n, Gt);
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
            n = h.create(r, br);
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
            r = h.create(t, kr);
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
            s = h.create(n, Sr);
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
            i = h.create(s, Ze(h.nullable(h.number())));
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
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getLatestBlockhash", n),
            i = h.create(s, mr);
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get latest blockhash",
            );
          return i.result;
        }
        async getVersion() {
          const e = await this._rpcRequest("getVersion", []),
            t = h.create(e, Xe(ut));
          if ("error" in t)
            throw new SolanaJSONRPCError(t.error, "failed to get version");
          return t.result;
        }
        async getGenesisHash() {
          const e = await this._rpcRequest("getGenesisHash", []),
            t = h.create(e, Xe(h.string()));
          if ("error" in t)
            throw new SolanaJSONRPCError(t.error, "failed to get genesis hash");
          return t.result;
        }
        async getBlock(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            i = await this._rpcRequest("getBlock", s),
            o = h.create(i, lr);
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
                    transaction: { ...t, message: et(n, t.message) },
                    version: n,
                  };
                }),
              }
            : a;
        }
        async getParsedBlock(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            i = await this._rpcRequest("getBlock", s),
            o = h.create(i, dr);
          if ("error" in o)
            throw new SolanaJSONRPCError(o.error, "failed to get block");
          return o.result;
        }
        async getBlockHeight(e) {
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, void 0, r),
            s = await this._rpcRequest("getBlockHeight", n),
            i = h.create(s, Xe(h.number()));
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
            i = h.create(s, dt);
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get block production information",
            );
          return i.result;
        }
        async getTransaction(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            i = await this._rpcRequest("getTransaction", s),
            o = h.create(i, gr);
          if ("error" in o)
            throw new SolanaJSONRPCError(o.error, "failed to get transaction");
          const a = o.result;
          return a
            ? {
                ...a,
                transaction: {
                  ...a.transaction,
                  message: et(a.version, a.transaction.message),
                },
              }
            : a;
        }
        async getParsedTransaction(e, t) {
          const { commitment: r, config: n } = $e(t),
            s = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            i = await this._rpcRequest("getTransaction", s),
            o = h.create(i, yr);
          if ("error" in o)
            throw new SolanaJSONRPCError(o.error, "failed to get transaction");
          return o.result;
        }
        async getParsedTransactions(e, t) {
          const { commitment: r, config: n } = $e(t),
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
              const t = h.create(e, yr);
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
          const { commitment: r, config: n } = $e(t),
            s = e.map((e) => {
              const t = this._buildArgsAtLeastConfirmed([e], r, void 0, n);
              return { methodName: "getTransaction", args: t };
            }),
            i = await this._rpcBatchRequest(s),
            o = i.map((e) => {
              const t = h.create(e, gr);
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
                      message: et(r.version, r.transaction.message),
                    },
                  }
                : r;
            });
          return o;
        }
        async getConfirmedBlock(e, t) {
          const r = this._buildArgsAtLeastConfirmed([e], t),
            n = await this._rpcRequest("getConfirmedBlock", r),
            s = h.create(n, hr);
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
            i = h.create(s, Xe(h.array(h.number())));
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
            s = h.create(n, pr);
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
            s = h.create(n, pr);
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
            s = h.create(n, gr);
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
            s = h.create(n, yr);
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
              const t = h.create(e, yr);
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
            i = h.create(s, xt);
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
            i = h.create(s, Ot);
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
            n = h.create(r, wr);
          if ("error" in n)
            throw new SolanaJSONRPCError(
              n.error,
              `airdrop to ${e.toBase58()} failed`,
            );
          return n.result;
        }
        async _blockhashWithExpiryBlockHeight(e) {
          if (!e) {
            while (this._pollingBlockhash) await de(100);
            const e = Date.now() - this._blockhashInfo.lastFetch,
              t = e >= Fe;
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
              await de(Ne / 2);
            }
            throw new Error(
              `Unable to obtain a new blockhash after ${Date.now() - e}ms`,
            );
          } finally {
            this._pollingBlockhash = !1;
          }
        }
        async getStakeMinimumDelegation(e) {
          const { commitment: t, config: r } = $e(e),
            n = this._buildArgs([], t, "base64", r),
            s = await this._rpcRequest("getStakeMinimumDelegation", n),
            i = h.create(s, Ze(h.number()));
          if ("error" in i)
            throw new SolanaJSONRPCError(
              i.error,
              "failed to get stake minimum delegation",
            );
          return i.result;
        }
        async simulateTransaction(e, t, r) {
          if ("message" in e) {
            const s = e,
              i = s.serialize(),
              o = n.Buffer.from(i).toString("base64");
            if (Array.isArray(t) || void 0 !== r)
              throw new Error("Invalid arguments");
            const a = t || {};
            ((a.encoding = "base64"),
              "commitment" in a || (a.commitment = this.commitment));
            const c = [o, a],
              u = await this._rpcRequest("simulateTransaction", c),
              l = h.create(u, lt);
            if ("error" in l)
              throw new Error(
                "failed to simulate transaction: " + l.error.message,
              );
            return l.result;
          }
          let s;
          if (e instanceof Transaction) {
            let t = e;
            ((s = new Transaction()),
              (s.feePayer = t.feePayer),
              (s.instructions = e.instructions),
              (s.nonceInfo = t.nonceInfo),
              (s.signatures = t.signatures));
          } else
            ((s = Transaction.populate(e)), (s._message = s._json = void 0));
          if (void 0 !== t && !Array.isArray(t))
            throw new Error("Invalid arguments");
          const i = t;
          if (s.nonceInfo && i) s.sign(...i);
          else {
            let e = this._disableBlockhashCaching;
            for (;;) {
              const t = await this._blockhashWithExpiryBlockHeight(e);
              if (
                ((s.lastValidBlockHeight = t.lastValidBlockHeight),
                (s.recentBlockhash = t.blockhash),
                !i)
              )
                break;
              if ((s.sign(...i), !s.signature)) throw new Error("!signature");
              const r = s.signature.toString("base64");
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
          const o = s._compile(),
            a = o.serialize(),
            c = s._serialize(a),
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
            p = await this._rpcRequest("simulateTransaction", d),
            g = h.create(p, lt);
          if ("error" in g) {
            let e;
            if (
              "data" in g.error &&
              ((e = g.error.data.logs), e && Array.isArray(e))
            ) {
              const t = "\n    ",
                r = t + e.join(t);
              console.error(g.error.message, r);
            }
            throw new SendTransactionError(
              "failed to simulate transaction: " + g.error.message,
              e,
            );
          }
          return g.result;
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
          const r = K(e).toString("base64"),
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
            a = h.create(o, Ir);
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
          const { result: t, subscription: r } = h.create(e, Lt);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          const r = this._nextClientSubscriptionId++,
            n = ve([e.method, t], !0),
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
                (Z(
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
          const { result: t, subscription: r } = h.create(e, zt);
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
          const { result: t, subscription: r } = h.create(e, Ar);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          const { result: t, subscription: r } = h.create(e, qt);
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
          const { result: t, subscription: r } = h.create(e, Mt);
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
          const { result: t, subscription: r } = h.create(e, Ut);
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
          const { result: t, subscription: r } = h.create(e, Dt);
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
      class Keypair {
        constructor(e) {
          ((this._keypair = void 0),
            (this._keypair = null !== e && void 0 !== e ? e : v()));
        }
        static generate() {
          return new Keypair(v());
        }
        static fromSecretKey(e, t) {
          if (64 !== e.byteLength) throw new Error("bad secret key size");
          const r = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            const t = e.slice(0, 32),
              n = T(t);
            for (let e = 0; e < 32; e++)
              if (r[e] !== n[e])
                throw new Error("provided secretKey is invalid");
          }
          return new Keypair({ publicKey: r, secretKey: e });
        }
        static fromSeed(e) {
          const t = T(e),
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
      const Er = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: P.struct([
            P.u32("instruction"),
            ke("recentSlot"),
            P.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: P.struct([P.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: P.struct([
            P.u32("instruction"),
            ke(),
            P.seq(U(), P.offset(P.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: P.struct([P.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: P.struct([P.u32("instruction")]),
        },
      });
      class AddressLookupTableInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = P.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(Er))
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
          const { recentSlot: t } = pe(Er.CreateLookupTable, e.data);
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
          const { addresses: t } = pe(Er.ExtendLookupTable, e.data);
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
      class AddressLookupTableProgram {
        constructor() {}
        static createLookupTable(e) {
          const [t, r] = PublicKey.findProgramAddressSync(
              [e.authority.toBuffer(), d.toBufferLE(BigInt(e.recentSlot), 8)],
              this.programId,
            ),
            n = Er.CreateLookupTable,
            s = he(n, { recentSlot: BigInt(e.recentSlot), bumpSeed: r }),
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
          const t = Er.FreezeLookupTable,
            r = he(t),
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
          const t = Er.ExtendLookupTable,
            r = he(t, { addresses: e.addresses.map((e) => e.toBytes()) }),
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
          const t = Er.DeactivateLookupTable,
            r = he(t),
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
          const t = Er.CloseLookupTable,
            r = he(t),
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
      AddressLookupTableProgram.programId = new PublicKey(
        "AddressLookupTab1e1111111111111111111111111",
      );
      class ComputeBudgetInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = P.u8("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(vr))
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
          const { units: t, additionalFee: r } = pe(vr.RequestUnits, e.data);
          return { units: t, additionalFee: r };
        }
        static decodeRequestHeapFrame(e) {
          this.checkProgramId(e.programId);
          const { bytes: t } = pe(vr.RequestHeapFrame, e.data);
          return { bytes: t };
        }
        static decodeSetComputeUnitLimit(e) {
          this.checkProgramId(e.programId);
          const { units: t } = pe(vr.SetComputeUnitLimit, e.data);
          return { units: t };
        }
        static decodeSetComputeUnitPrice(e) {
          this.checkProgramId(e.programId);
          const { microLamports: t } = pe(vr.SetComputeUnitPrice, e.data);
          return { microLamports: t };
        }
        static checkProgramId(e) {
          if (!e.equals(ComputeBudgetProgram.programId))
            throw new Error(
              "invalid instruction; programId is not ComputeBudgetProgram",
            );
        }
      }
      const vr = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: P.struct([
            P.u8("instruction"),
            P.u32("units"),
            P.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: P.struct([P.u8("instruction"), P.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: P.struct([P.u8("instruction"), P.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: P.struct([P.u8("instruction"), ke("microLamports")]),
        },
      });
      class ComputeBudgetProgram {
        constructor() {}
        static requestUnits(e) {
          const t = vr.RequestUnits,
            r = he(t, e);
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
        static requestHeapFrame(e) {
          const t = vr.RequestHeapFrame,
            r = he(t, e);
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
        static setComputeUnitLimit(e) {
          const t = vr.SetComputeUnitLimit,
            r = he(t, e);
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
        static setComputeUnitPrice(e) {
          const t = vr.SetComputeUnitPrice,
            r = he(t, { microLamports: BigInt(e.microLamports) });
          return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data: r,
          });
        }
      }
      ComputeBudgetProgram.programId = new PublicKey(
        "ComputeBudget111111111111111111111111111111",
      );
      const Tr = 64,
        Br = 32,
        Rr = 64,
        Cr = P.struct([
          P.u8("numSignatures"),
          P.u8("padding"),
          P.u16("signatureOffset"),
          P.u16("signatureInstructionIndex"),
          P.u16("publicKeyOffset"),
          P.u16("publicKeyInstructionIndex"),
          P.u16("messageDataOffset"),
          P.u16("messageDataSize"),
          P.u16("messageInstructionIndex"),
        ]);
      class Ed25519Program {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          const {
            publicKey: t,
            message: r,
            signature: s,
            instructionIndex: i,
          } = e;
          (Z(
            t.length === Br,
            `Public Key must be ${Br} bytes but received ${t.length} bytes`,
          ),
            Z(
              s.length === Rr,
              `Signature must be ${Rr} bytes but received ${s.length} bytes`,
            ));
          const o = Cr.span,
            a = o + t.length,
            c = a + s.length,
            u = 1,
            l = n.Buffer.alloc(c + r.length),
            d = null == i ? 65535 : i;
          return (
            Cr.encode(
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
            l.fill(s, a),
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
          Z(
            t.length === Tr,
            `Private key must be ${Tr} bytes but received ${t.length} bytes`,
          );
          try {
            const e = Keypair.fromSecretKey(t),
              s = e.publicKey.toBytes(),
              i = R(r, e.secretKey);
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
      ((Ed25519Program.programId = new PublicKey(
        "Ed25519SigVerify111111111111111111111111111",
      )),
        (_.utils.hmacSha256Sync = function (e) {
          const t = b.hmac.create(c.sha256, e);
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
            s < r;
            s++
          )
            n[s - 1] = arguments[s];
          return (n.forEach((e) => t.update(e)), t.digest());
        }));
      const Kr = (e, t) => _.signSync(e, t, { der: !1, recovered: !0 });
      _.utils.isValidPrivateKey;
      const xr = _.getPublicKey,
        Or = 32,
        Lr = 20,
        Nr = 64,
        zr = 11,
        Wr = P.struct([
          P.u8("numSignatures"),
          P.u16("signatureOffset"),
          P.u8("signatureInstructionIndex"),
          P.u16("ethAddressOffset"),
          P.u8("ethAddressInstructionIndex"),
          P.u16("messageDataOffset"),
          P.u16("messageDataSize"),
          P.u8("messageInstructionIndex"),
          P.blob(20, "ethAddress"),
          P.blob(64, "signature"),
          P.u8("recoveryId"),
        ]);
      class Secp256k1Program {
        constructor() {}
        static publicKeyToEthAddress(e) {
          Z(
            e.length === Nr,
            `Public key must be ${Nr} bytes but received ${e.length} bytes`,
          );
          try {
            return n.Buffer.from(y.keccak_256(K(e))).slice(-Lr);
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
            signature: s,
            recoveryId: i,
            instructionIndex: o = 0,
          } = e;
          let a;
          ((a =
            "string" === typeof t
              ? t.startsWith("0x")
                ? n.Buffer.from(t.substr(2), "hex")
                : n.Buffer.from(t, "hex")
              : t),
            Z(
              a.length === Lr,
              `Address must be ${Lr} bytes but received ${a.length} bytes`,
            ));
          const c = 1 + zr,
            u = c,
            l = c + a.length,
            d = l + s.length + 1,
            h = 1,
            p = n.Buffer.alloc(Wr.span + r.length);
          return (
            Wr.encode(
              {
                numSignatures: h,
                signatureOffset: l,
                signatureInstructionIndex: o,
                ethAddressOffset: u,
                ethAddressInstructionIndex: o,
                messageDataOffset: d,
                messageDataSize: r.length,
                messageInstructionIndex: o,
                signature: K(s),
                ethAddress: K(a),
                recoveryId: i,
              },
              p,
            ),
            p.fill(K(r), Wr.span),
            new TransactionInstruction({
              keys: [],
              programId: Secp256k1Program.programId,
              data: p,
            })
          );
        }
        static createInstructionWithPrivateKey(e) {
          const { privateKey: t, message: r, instructionIndex: s } = e;
          Z(
            t.length === Or,
            `Private key must be ${Or} bytes but received ${t.length} bytes`,
          );
          try {
            const e = K(t),
              i = xr(e, !1).slice(1),
              o = n.Buffer.from(y.keccak_256(K(r))),
              [a, c] = Kr(o, e);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: a,
              recoveryId: c,
              instructionIndex: s,
            });
          } catch (i) {
            throw new Error("Error creating instruction; " + i);
          }
        }
      }
      Secp256k1Program.programId = new PublicKey(
        "KeccakSecp256k11111111111111111111111111111",
      );
      const qr = new PublicKey("StakeConfig11111111111111111111111111111111");
      class Authorized {
        constructor(e, t) {
          ((this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t));
        }
      }
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
      Lockup.default = new Lockup(0, 0, PublicKey.default);
      class StakeInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = P.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(Vr))
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
          const { authorized: t, lockup: r } = pe(Vr.Initialize, e.data);
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
            pe(Vr.Delegate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              votePubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[5].pubkey,
            }
          );
        }
        static decodeAuthorize(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3));
          const { newAuthorized: t, stakeAuthorizationType: r } = pe(
              Vr.Authorize,
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
            } = pe(Vr.AuthorizeWithSeed, e.data),
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
          const { lamports: t } = pe(Vr.Split, e.data);
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
            pe(Vr.Merge, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              sourceStakePubKey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
            }
          );
        }
        static decodeWithdraw(e) {
          (this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5));
          const { lamports: t } = pe(Vr.Withdraw, e.data),
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
            pe(Vr.Deactivate, e.data),
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
      const Vr = Object.freeze({
          Initialize: {
            index: 0,
            layout: P.struct([P.u32("instruction"), H(), F()]),
          },
          Authorize: {
            index: 1,
            layout: P.struct([
              P.u32("instruction"),
              U("newAuthorized"),
              P.u32("stakeAuthorizationType"),
            ]),
          },
          Delegate: { index: 2, layout: P.struct([P.u32("instruction")]) },
          Split: {
            index: 3,
            layout: P.struct([P.u32("instruction"), P.ns64("lamports")]),
          },
          Withdraw: {
            index: 4,
            layout: P.struct([P.u32("instruction"), P.ns64("lamports")]),
          },
          Deactivate: { index: 5, layout: P.struct([P.u32("instruction")]) },
          Merge: { index: 7, layout: P.struct([P.u32("instruction")]) },
          AuthorizeWithSeed: {
            index: 8,
            layout: P.struct([
              P.u32("instruction"),
              U("newAuthorized"),
              P.u32("stakeAuthorizationType"),
              J("authoritySeed"),
              U("authorityOwner"),
            ]),
          },
        }),
        Mr = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
      class StakeProgram {
        constructor() {}
        static initialize(e) {
          const { stakePubkey: t, authorized: r, lockup: n } = e,
            s = n || Lockup.default,
            i = Vr.Initialize,
            o = he(i, {
              authorized: {
                staker: K(r.staker.toBuffer()),
                withdrawer: K(r.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: s.unixTimestamp,
                epoch: s.epoch,
                custodian: K(s.custodian.toBuffer()),
              },
            }),
            a = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: ie, isSigner: !1, isWritable: !1 },
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
            s = Vr.Delegate,
            i = he(s);
          return new Transaction().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !1 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
              { pubkey: ue, isSigner: !1, isWritable: !1 },
              { pubkey: qr, isSigner: !1, isWritable: !1 },
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
            o = Vr.Authorize,
            a = he(o, {
              newAuthorized: K(n.toBuffer()),
              stakeAuthorizationType: s.index,
            }),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: te, isSigner: !1, isWritable: !0 },
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
            c = Vr.AuthorizeWithSeed,
            u = he(c, {
              newAuthorized: K(i.toBuffer()),
              stakeAuthorizationType: o.index,
              authoritySeed: n,
              authorityOwner: K(s.toBuffer()),
            }),
            l = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
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
            i = Vr.Split,
            o = he(i, { lamports: s });
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
            s = Vr.Merge,
            i = he(s);
          return new Transaction().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !1, isWritable: !0 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
              { pubkey: ue, isSigner: !1, isWritable: !1 },
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
            o = Vr.Withdraw,
            a = he(o, { lamports: s }),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
              { pubkey: ue, isSigner: !1, isWritable: !1 },
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
            n = Vr.Deactivate,
            s = he(n);
          return new Transaction().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
      }
      ((StakeProgram.programId = new PublicKey(
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
      class VoteInstruction {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          const t = P.u32("instruction"),
            r = t.decode(e.data);
          let n;
          for (const [s, i] of Object.entries(Ur))
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
          const { voteInit: t } = pe(Ur.InitializeAccount, e.data);
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
          const { newAuthorized: t, voteAuthorizationType: r } = pe(
            Ur.Authorize,
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
          } = pe(Ur.AuthorizeWithSeed, e.data);
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
          const { lamports: t } = pe(Ur.Withdraw, e.data);
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
      const Ur = Object.freeze({
          InitializeAccount: {
            index: 0,
            layout: P.struct([P.u32("instruction"), j()]),
          },
          Authorize: {
            index: 1,
            layout: P.struct([
              P.u32("instruction"),
              U("newAuthorized"),
              P.u32("voteAuthorizationType"),
            ]),
          },
          Withdraw: {
            index: 3,
            layout: P.struct([P.u32("instruction"), P.ns64("lamports")]),
          },
          AuthorizeWithSeed: {
            index: 10,
            layout: P.struct([P.u32("instruction"), $()]),
          },
        }),
        Dr = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
      class VoteProgram {
        constructor() {}
        static initializeAccount(e) {
          const { votePubkey: t, nodePubkey: r, voteInit: n } = e,
            s = Ur.InitializeAccount,
            i = he(s, {
              voteInit: {
                nodePubkey: K(n.nodePubkey.toBuffer()),
                authorizedVoter: K(n.authorizedVoter.toBuffer()),
                authorizedWithdrawer: K(n.authorizedWithdrawer.toBuffer()),
                commission: n.commission,
              },
            }),
            o = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: ie, isSigner: !1, isWritable: !1 },
                { pubkey: te, isSigner: !1, isWritable: !1 },
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
            i = Ur.Authorize,
            o = he(i, {
              newAuthorized: K(n.toBuffer()),
              voteAuthorizationType: s.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
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
            a = Ur.AuthorizeWithSeed,
            c = he(a, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: K(r.toBuffer()),
                currentAuthorityDerivedKeySeed: n,
                newAuthorized: K(s.toBuffer()),
                voteAuthorizationType: i.index,
              },
            }),
            u = [
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: te, isSigner: !1, isWritable: !1 },
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
            i = Ur.Withdraw,
            o = he(i, { lamports: n }),
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
      ((VoteProgram.programId = new PublicKey(
        "Vote111111111111111111111111111111111111111",
      )),
        (VoteProgram.space = 3731));
      const Jr = new PublicKey("Va1idator1nfo111111111111111111111111111111"),
        Hr = h.type({
          name: h.string(),
          website: h.optional(h.string()),
          details: h.optional(h.string()),
          keybaseUsername: h.optional(h.string()),
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
          const r = G(t);
          if (2 !== r) return null;
          const s = [];
          for (let n = 0; n < 2; n++) {
            const e = new PublicKey(t.slice(0, L));
            t = t.slice(L);
            const r = 1 === t.slice(0, 1)[0];
            ((t = t.slice(1)), s.push({ publicKey: e, isSigner: r }));
          }
          if (s[0].publicKey.equals(Jr) && s[1].isSigner) {
            const e = J().decode(n.Buffer.from(t)),
              r = JSON.parse(e);
            return (h.assert(r, Hr), new ValidatorInfo(s[1].publicKey, r));
          }
          return null;
        }
      }
      const Fr = new PublicKey("Vote111111111111111111111111111111111111111"),
        jr = P.struct([
          U("nodePubkey"),
          U("authorizedWithdrawer"),
          P.u8("commission"),
          P.nu64(),
          P.seq(
            P.struct([P.nu64("slot"), P.u32("confirmationCount")]),
            P.offset(P.u32(), -8),
            "votes",
          ),
          P.u8("rootSlotValid"),
          P.nu64("rootSlot"),
          P.nu64(),
          P.seq(
            P.struct([P.nu64("epoch"), U("authorizedVoter")]),
            P.offset(P.u32(), -8),
            "authorizedVoters",
          ),
          P.struct(
            [
              P.seq(
                P.struct([
                  U("authorizedPubkey"),
                  P.nu64("epochOfLastAuthorizedSwitch"),
                  P.nu64("targetEpoch"),
                ]),
                32,
                "buf",
              ),
              P.nu64("idx"),
              P.u8("isEmpty"),
            ],
            "priorVoters",
          ),
          P.nu64(),
          P.seq(
            P.struct([
              P.nu64("epoch"),
              P.nu64("credits"),
              P.nu64("prevCredits"),
            ]),
            P.offset(P.u32(), -8),
            "epochCredits",
          ),
          P.struct([P.nu64("slot"), P.nu64("timestamp")], "lastTimestamp"),
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
            r = jr.decode(K(e), t);
          let n = r.rootSlot;
          return (
            r.rootSlotValid || (n = null),
            new VoteAccount({
              nodePubkey: new PublicKey(r.nodePubkey),
              authorizedWithdrawer: new PublicKey(r.authorizedWithdrawer),
              commission: r.commission,
              votes: r.votes,
              rootSlot: n,
              authorizedVoters: r.authorizedVoters.map($r),
              priorVoters: Gr(r.priorVoters),
              epochCredits: r.epochCredits,
              lastTimestamp: r.lastTimestamp,
            })
          );
        }
      }
      function $r(e) {
        let { authorizedVoter: t, epoch: r } = e;
        return { epoch: r, authorizedVoter: new PublicKey(t) };
      }
      function Yr(e) {
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
      function Gr(e) {
        let { buf: t, idx: r, isEmpty: n } = e;
        return n ? [] : [...t.slice(r + 1).map(Yr), ...t.slice(0, r).map(Yr)];
      }
      const Xr = {
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
      function Zr(e, t) {
        const r = !1 === t ? "http" : "https";
        if (!e) return Xr[r]["devnet"];
        const n = Xr[r][e];
        if (!n) throw new Error(`Unknown ${r} cluster: ${e}`);
        return n;
      }
      async function Qr(e, t, r, n) {
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
      const en = 1e9;
      ((t.Account = Account),
        (t.AddressLookupTableAccount = AddressLookupTableAccount),
        (t.AddressLookupTableInstruction = AddressLookupTableInstruction),
        (t.AddressLookupTableProgram = AddressLookupTableProgram),
        (t.Authorized = Authorized),
        (t.BLOCKHASH_CACHE_TIMEOUT_MS = Fe),
        (t.BPF_LOADER_DEPRECATED_PROGRAM_ID = W),
        (t.BPF_LOADER_PROGRAM_ID = Ie),
        (t.BpfLoader = BpfLoader),
        (t.COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = vr),
        (t.ComputeBudgetInstruction = ComputeBudgetInstruction),
        (t.ComputeBudgetProgram = ComputeBudgetProgram),
        (t.Connection = Connection),
        (t.Ed25519Program = Ed25519Program),
        (t.Enum = Enum),
        (t.EpochSchedule = EpochSchedule),
        (t.FeeCalculatorLayout = ge),
        (t.Keypair = Keypair),
        (t.LAMPORTS_PER_SOL = en),
        (t.LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Er),
        (t.Loader = Loader),
        (t.Lockup = Lockup),
        (t.MAX_SEED_LENGTH = O),
        (t.Message = Message),
        (t.MessageAccountKeys = MessageAccountKeys),
        (t.MessageV0 = MessageV0),
        (t.NONCE_ACCOUNT_LENGTH = be),
        (t.NonceAccount = NonceAccount),
        (t.PACKET_DATA_SIZE = q),
        (t.PUBLIC_KEY_LENGTH = L),
        (t.PublicKey = PublicKey),
        (t.SIGNATURE_LENGTH_IN_BYTES = M),
        (t.SOLANA_SCHEMA = x),
        (t.STAKE_CONFIG_ID = qr),
        (t.STAKE_INSTRUCTION_LAYOUTS = Vr),
        (t.SYSTEM_INSTRUCTION_LAYOUTS = Se),
        (t.SYSVAR_CLOCK_PUBKEY = te),
        (t.SYSVAR_EPOCH_SCHEDULE_PUBKEY = re),
        (t.SYSVAR_INSTRUCTIONS_PUBKEY = ne),
        (t.SYSVAR_RECENT_BLOCKHASHES_PUBKEY = se),
        (t.SYSVAR_RENT_PUBKEY = ie),
        (t.SYSVAR_REWARDS_PUBKEY = oe),
        (t.SYSVAR_SLOT_HASHES_PUBKEY = ae),
        (t.SYSVAR_SLOT_HISTORY_PUBKEY = ce),
        (t.SYSVAR_STAKE_HISTORY_PUBKEY = ue),
        (t.Secp256k1Program = Secp256k1Program),
        (t.SendTransactionError = SendTransactionError),
        (t.SolanaJSONRPCError = SolanaJSONRPCError),
        (t.SolanaJSONRPCErrorCode = Ce),
        (t.StakeAuthorizationLayout = Mr),
        (t.StakeInstruction = StakeInstruction),
        (t.StakeProgram = StakeProgram),
        (t.Struct = Struct),
        (t.SystemInstruction = SystemInstruction),
        (t.SystemProgram = SystemProgram),
        (t.Transaction = Transaction),
        (t.TransactionExpiredBlockheightExceededError =
          TransactionExpiredBlockheightExceededError),
        (t.TransactionExpiredNonceInvalidError =
          TransactionExpiredNonceInvalidError),
        (t.TransactionExpiredTimeoutError = TransactionExpiredTimeoutError),
        (t.TransactionInstruction = TransactionInstruction),
        (t.TransactionMessage = TransactionMessage),
        (t.VALIDATOR_INFO_KEY = Jr),
        (t.VERSION_PREFIX_MASK = V),
        (t.VOTE_PROGRAM_ID = Fr),
        (t.ValidatorInfo = ValidatorInfo),
        (t.VersionedMessage = Q),
        (t.VersionedTransaction = VersionedTransaction),
        (t.VoteAccount = VoteAccount),
        (t.VoteAuthorizationLayout = Dr),
        (t.VoteInit = VoteInit),
        (t.VoteInstruction = VoteInstruction),
        (t.VoteProgram = VoteProgram),
        (t.clusterApiUrl = Zr),
        (t.sendAndConfirmRawTransaction = Qr),
        (t.sendAndConfirmTransaction = le));
    },
  },
]);
