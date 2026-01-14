(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [196, 195],
  {
    2760: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(3697),
          i = r(3698),
          s = r(2822),
          o = r(2898),
          u = r(2819),
          a = r(3062),
          c = r(2758);
        e.OPS = r(2771);
        const p = r(3108),
          h = e.OPS.OP_RESERVED;
        function f(t) {
          return (
            s.Number(t) &&
            (t === e.OPS.OP_0 ||
              (t >= e.OPS.OP_1 && t <= e.OPS.OP_16) ||
              t === e.OPS.OP_1NEGATE)
          );
        }
        function l(t) {
          return s.Buffer(t) || f(t);
        }
        function d(t) {
          return s.Array(t) && t.every(l);
        }
        function w(t) {
          return 0 === t.length
            ? e.OPS.OP_0
            : 1 === t.length
              ? t[0] >= 1 && t[0] <= 16
                ? h + t[0]
                : 129 === t[0]
                  ? e.OPS.OP_1NEGATE
                  : void 0
              : void 0;
        }
        function m(e) {
          return t.isBuffer(e);
        }
        function _(t) {
          return s.Array(t);
        }
        function y(e) {
          return t.isBuffer(e);
        }
        function g(e) {
          if (m(e)) return e;
          c(s.Array, e);
          const r = e.reduce(
              (t, e) =>
                y(e)
                  ? 1 === e.length && void 0 !== w(e)
                    ? t + 1
                    : t + a.encodingLength(e.length) + e.length
                  : t + 1,
              0,
            ),
            n = t.allocUnsafe(r);
          let i = 0;
          if (
            (e.forEach((t) => {
              if (y(t)) {
                const e = w(t);
                if (void 0 !== e) return (n.writeUInt8(e, i), void (i += 1));
                ((i += a.encode(n, t.length, i)),
                  t.copy(n, i),
                  (i += t.length));
              } else (n.writeUInt8(t, i), (i += 1));
            }),
            i !== n.length)
          )
            throw new Error("Could not decode chunks");
          return n;
        }
        function S(t) {
          if (_(t)) return t;
          c(s.Buffer, t);
          const r = [];
          let n = 0;
          while (n < t.length) {
            const i = t[n];
            if (i > e.OPS.OP_0 && i <= e.OPS.OP_PUSHDATA4) {
              const e = a.decode(t, n);
              if (null === e) return null;
              if (((n += e.size), n + e.number > t.length)) return null;
              const i = t.slice(n, n + e.number);
              n += e.number;
              const s = w(i);
              void 0 !== s ? r.push(s) : r.push(i);
            } else (r.push(i), (n += 1));
          }
          return r;
        }
        function b(t) {
          return (
            m(t) && (t = S(t)),
            t
              .map((t) => {
                if (y(t)) {
                  const e = w(t);
                  if (void 0 === e) return t.toString("hex");
                  t = e;
                }
                return p[t];
              })
              .join(" ")
          );
        }
        function O(r) {
          return (
            c(s.String, r),
            g(
              r
                .split(" ")
                .map((r) =>
                  void 0 !== e.OPS[r]
                    ? e.OPS[r]
                    : (c(s.Hex, r), t.from(r, "hex")),
                ),
            )
          );
        }
        function E(r) {
          return (
            (r = S(r)),
            c(d, r),
            r.map((r) =>
              y(r) ? r : r === e.OPS.OP_0 ? t.allocUnsafe(0) : n.encode(r - h),
            )
          );
        }
        function P(t) {
          return u.isPoint(t);
        }
        function v(t) {
          const e = -129 & t;
          return e > 0 && e < 4;
        }
        function T(e) {
          return (
            !!t.isBuffer(e) && !!v(e[e.length - 1]) && o.check(e.slice(0, -1))
          );
        }
        ((e.isPushOnly = d),
          (e.compile = g),
          (e.decompile = S),
          (e.toASM = b),
          (e.fromASM = O),
          (e.toStack = E),
          (e.isCanonicalPubKey = P),
          (e.isDefinedHashType = v),
          (e.isCanonicalScriptSignature = T),
          (e.number = n),
          (e.signature = i));
      }).call(this, r(2).Buffer);
    },
    2771: function (t) {
      t.exports = JSON.parse(
        '{"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}',
      );
    },
    2803: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.bitcoin = {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
        }),
        (e.regtest = {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bcrt",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        }),
        (e.testnet = {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        }));
    },
    2822: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2758),
        i = Math.pow(2, 31) - 1;
      function s(t) {
        return n.UInt32(t) && t <= i;
      }
      function o(t) {
        return n.String(t) && !!t.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }
      function u(t) {
        return (
          (n.Buffer(t.publicKey) || "function" === typeof t.getPublicKey) &&
          "function" === typeof t.sign
        );
      }
      ((e.UInt31 = s),
        (e.BIP32Path = o),
        (o.toJSON = () => "BIP32 derivation path"),
        (e.Signer = u));
      const a = 21e14;
      function c(t) {
        return n.UInt53(t) && t <= a;
      }
      ((e.Satoshi = c),
        (e.ECPoint = n.quacksLike("Point")),
        (e.Network = n.compile({
          messagePrefix: n.oneOf(n.Buffer, n.String),
          bip32: { public: n.UInt32, private: n.UInt32 },
          pubKeyHash: n.UInt8,
          scriptHash: n.UInt8,
          wif: n.UInt8,
        })),
        (e.Buffer256bit = n.BufferN(32)),
        (e.Hash160bit = n.BufferN(20)),
        (e.Hash256bit = n.BufferN(32)),
        (e.Number = n.Number),
        (e.Array = n.Array),
        (e.Boolean = n.Boolean),
        (e.String = n.String),
        (e.Buffer = n.Buffer),
        (e.Hex = n.Hex),
        (e.maybe = n.maybe),
        (e.tuple = n.tuple),
        (e.UInt8 = n.UInt8),
        (e.UInt32 = n.UInt32),
        (e.Function = n.Function),
        (e.BufferN = n.BufferN),
        (e.Null = n.Null),
        (e.oneOf = n.oneOf));
    },
    2832: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(797);
      function i(t) {
        try {
          return n("rmd160").update(t).digest();
        } catch (e) {
          return n("ripemd160").update(t).digest();
        }
      }
      function s(t) {
        return n("sha1").update(t).digest();
      }
      function o(t) {
        return n("sha256").update(t).digest();
      }
      function u(t) {
        return i(o(t));
      }
      function a(t) {
        return o(o(t));
      }
      ((e.ripemd160 = i),
        (e.sha1 = s),
        (e.sha256 = o),
        (e.hash160 = u),
        (e.hash256 = a));
    },
    2893: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !0,
          get() {
            const t = r.call(this);
            return ((this[e] = t), t);
          },
          set(t) {
            Object.defineProperty(this, e, {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          },
        });
      }
      function i(t) {
        let e;
        return () => (void 0 !== e || (e = t()), e);
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.prop = n),
        (e.value = i));
    },
    2994: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3696);
      e.embed = n.p2data;
      const i = r(3699);
      e.p2ms = i.p2ms;
      const s = r(3700);
      e.p2pk = s.p2pk;
      const o = r(3701);
      e.p2pkh = o.p2pkh;
      const u = r(3702);
      e.p2sh = u.p2sh;
      const a = r(3703);
      e.p2wpkh = a.p2wpkh;
      const c = r(3704);
      e.p2wsh = c.p2wsh;
    },
    2995: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2822),
          i = r(2758),
          s = r(2864);
        function o(t, e) {
          if ("number" !== typeof t)
            throw new Error("cannot write a non-number as a number");
          if (t < 0)
            throw new Error(
              "specified a negative value for writing an unsigned value",
            );
          if (t > e) throw new Error("RangeError: value out of range");
          if (Math.floor(t) !== t)
            throw new Error("value has a fractional component");
        }
        function u(t, e) {
          const r = t.readUInt32LE(e);
          let n = t.readUInt32LE(e + 4);
          return ((n *= 4294967296), o(n + r, 9007199254740991), n + r);
        }
        function a(t, e, r) {
          return (
            o(e, 9007199254740991),
            t.writeInt32LE(-1 & e, r),
            t.writeUInt32LE(Math.floor(e / 4294967296), r + 4),
            r + 8
          );
        }
        function c(t) {
          if (t.length < 1) return t;
          let e = t.length - 1,
            r = 0;
          for (let n = 0; n < t.length / 2; n++)
            ((r = t[n]), (t[n] = t[e]), (t[e] = r), e--);
          return t;
        }
        function p(e) {
          const r = t.allocUnsafe(e.length);
          return (e.copy(r), r);
        }
        ((e.readUInt64LE = u),
          (e.writeUInt64LE = a),
          (e.reverseBuffer = c),
          (e.cloneBuffer = p));
        class BufferWriter {
          constructor(t, e) {
            (void 0 === e && (e = 0),
              (this.buffer = t),
              (this.offset = e),
              i(n.tuple(n.Buffer, n.UInt32), [t, e]));
          }
          writeUInt8(t) {
            this.offset = this.buffer.writeUInt8(t, this.offset);
          }
          writeInt32(t) {
            this.offset = this.buffer.writeInt32LE(t, this.offset);
          }
          writeUInt32(t) {
            this.offset = this.buffer.writeUInt32LE(t, this.offset);
          }
          writeUInt64(t) {
            this.offset = a(this.buffer, t, this.offset);
          }
          writeVarInt(t) {
            (s.encode(t, this.buffer, this.offset),
              (this.offset += s.encode.bytes));
          }
          writeSlice(t) {
            if (this.buffer.length < this.offset + t.length)
              throw new Error("Cannot write slice out of bounds");
            this.offset += t.copy(this.buffer, this.offset);
          }
          writeVarSlice(t) {
            (this.writeVarInt(t.length), this.writeSlice(t));
          }
          writeVector(t) {
            (this.writeVarInt(t.length),
              t.forEach((t) => this.writeVarSlice(t)));
          }
        }
        e.BufferWriter = BufferWriter;
        class BufferReader {
          constructor(t, e) {
            (void 0 === e && (e = 0),
              (this.buffer = t),
              (this.offset = e),
              i(n.tuple(n.Buffer, n.UInt32), [t, e]));
          }
          readUInt8() {
            const t = this.buffer.readUInt8(this.offset);
            return (this.offset++, t);
          }
          readInt32() {
            const t = this.buffer.readInt32LE(this.offset);
            return ((this.offset += 4), t);
          }
          readUInt32() {
            const t = this.buffer.readUInt32LE(this.offset);
            return ((this.offset += 4), t);
          }
          readUInt64() {
            const t = u(this.buffer, this.offset);
            return ((this.offset += 8), t);
          }
          readVarInt() {
            const t = s.decode(this.buffer, this.offset);
            return ((this.offset += s.decode.bytes), t);
          }
          readSlice(t) {
            if (this.buffer.length < this.offset + t)
              throw new Error("Cannot read slice out of bounds");
            const e = this.buffer.slice(this.offset, this.offset + t);
            return ((this.offset += t), e);
          }
          readVarSlice() {
            return this.readSlice(this.readVarInt());
          }
          readVector() {
            const t = this.readVarInt(),
              e = [];
            for (let r = 0; r < t; r++) e.push(this.readVarSlice());
            return e;
          }
        }
        e.BufferReader = BufferReader;
      }).call(this, r(2).Buffer);
    },
    2996: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2995),
          i = r(2832),
          s = r(2760),
          o = r(2760),
          u = r(2822),
          a = r(2758),
          c = r(2864);
        function p(t) {
          const e = t.length;
          return c.encodingLength(e) + e;
        }
        function h(t) {
          const e = t.length;
          return c.encodingLength(e) + t.reduce((t, e) => t + p(e), 0);
        }
        const f = t.allocUnsafe(0),
          l = [],
          d = t.from(
            "0000000000000000000000000000000000000000000000000000000000000000",
            "hex",
          ),
          w = t.from(
            "0000000000000000000000000000000000000000000000000000000000000001",
            "hex",
          ),
          m = t.from("ffffffffffffffff", "hex"),
          _ = { script: f, valueBuffer: m };
        function y(t) {
          return void 0 !== t.value;
        }
        class Transaction {
          constructor() {
            ((this.version = 1),
              (this.locktime = 0),
              (this.ins = []),
              (this.outs = []));
          }
          static fromBuffer(t, e) {
            const r = new n.BufferReader(t),
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
              for (let t = 0; t < a; ++t) i.ins[t].witness = r.readVector();
              if (!i.hasWitnesses())
                throw new Error("Transaction has superfluous witness data");
            }
            if (((i.locktime = r.readUInt32()), e)) return i;
            if (r.offset !== t.length)
              throw new Error("Transaction has unexpected data");
            return i;
          }
          static fromHex(e) {
            return Transaction.fromBuffer(t.from(e, "hex"), !1);
          }
          static isCoinbaseHash(t) {
            a(u.Hash256bit, t);
            for (let e = 0; e < 32; ++e) if (0 !== t[e]) return !1;
            return !0;
          }
          isCoinbase() {
            return (
              1 === this.ins.length &&
              Transaction.isCoinbaseHash(this.ins[0].hash)
            );
          }
          addInput(t, e, r, n) {
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
                hash: t,
                index: e,
                script: n || f,
                sequence: r,
                witness: l,
              }) - 1
            );
          }
          addOutput(t, e) {
            return (
              a(u.tuple(u.Buffer, u.Satoshi), arguments),
              this.outs.push({ script: t, value: e }) - 1
            );
          }
          hasWitnesses() {
            return this.ins.some((t) => 0 !== t.witness.length);
          }
          weight() {
            const t = this.byteLength(!1),
              e = this.byteLength(!0);
            return 3 * t + e;
          }
          virtualSize() {
            return Math.ceil(this.weight() / 4);
          }
          byteLength(t) {
            void 0 === t && (t = !0);
            const e = t && this.hasWitnesses();
            return (
              (e ? 10 : 8) +
              c.encodingLength(this.ins.length) +
              c.encodingLength(this.outs.length) +
              this.ins.reduce((t, e) => t + 40 + p(e.script), 0) +
              this.outs.reduce((t, e) => t + 8 + p(e.script), 0) +
              (e ? this.ins.reduce((t, e) => t + h(e.witness), 0) : 0)
            );
          }
          clone() {
            const t = new Transaction();
            return (
              (t.version = this.version),
              (t.locktime = this.locktime),
              (t.ins = this.ins.map((t) => ({
                hash: t.hash,
                index: t.index,
                script: t.script,
                sequence: t.sequence,
                witness: t.witness,
              }))),
              (t.outs = this.outs.map((t) => ({
                script: t.script,
                value: t.value,
              }))),
              t
            );
          }
          hashForSignature(e, r, n) {
            if (
              (a(u.tuple(u.UInt32, u.Buffer, u.Number), arguments),
              e >= this.ins.length)
            )
              return w;
            const c = s.compile(
                s.decompile(r).filter((t) => t !== o.OPS.OP_CODESEPARATOR),
              ),
              p = this.clone();
            if ((31 & n) === Transaction.SIGHASH_NONE)
              ((p.outs = []),
                p.ins.forEach((t, r) => {
                  r !== e && (t.sequence = 0);
                }));
            else if ((31 & n) === Transaction.SIGHASH_SINGLE) {
              if (e >= this.outs.length) return w;
              p.outs.length = e + 1;
              for (let t = 0; t < e; t++) p.outs[t] = _;
              p.ins.forEach((t, r) => {
                r !== e && (t.sequence = 0);
              });
            }
            n & Transaction.SIGHASH_ANYONECANPAY
              ? ((p.ins = [p.ins[e]]), (p.ins[0].script = c))
              : (p.ins.forEach((t) => {
                  t.script = f;
                }),
                (p.ins[e].script = c));
            const h = t.allocUnsafe(p.byteLength(!1) + 4);
            return (
              h.writeInt32LE(n, h.length - 4),
              p.__toBuffer(h, 0, !1),
              i.hash256(h)
            );
          }
          hashForWitnessV0(e, r, s, o) {
            a(u.tuple(u.UInt32, u.Buffer, u.Satoshi, u.UInt32), arguments);
            let c,
              h = t.from([]),
              f = d,
              l = d,
              w = d;
            if (
              (o & Transaction.SIGHASH_ANYONECANPAY ||
                ((h = t.allocUnsafe(36 * this.ins.length)),
                (c = new n.BufferWriter(h, 0)),
                this.ins.forEach((t) => {
                  (c.writeSlice(t.hash), c.writeUInt32(t.index));
                }),
                (l = i.hash256(h))),
              o & Transaction.SIGHASH_ANYONECANPAY ||
                (31 & o) === Transaction.SIGHASH_SINGLE ||
                (31 & o) === Transaction.SIGHASH_NONE ||
                ((h = t.allocUnsafe(4 * this.ins.length)),
                (c = new n.BufferWriter(h, 0)),
                this.ins.forEach((t) => {
                  c.writeUInt32(t.sequence);
                }),
                (w = i.hash256(h))),
              (31 & o) !== Transaction.SIGHASH_SINGLE &&
                (31 & o) !== Transaction.SIGHASH_NONE)
            ) {
              const e = this.outs.reduce((t, e) => t + 8 + p(e.script), 0);
              ((h = t.allocUnsafe(e)),
                (c = new n.BufferWriter(h, 0)),
                this.outs.forEach((t) => {
                  (c.writeUInt64(t.value), c.writeVarSlice(t.script));
                }),
                (f = i.hash256(h)));
            } else if (
              (31 & o) === Transaction.SIGHASH_SINGLE &&
              e < this.outs.length
            ) {
              const r = this.outs[e];
              ((h = t.allocUnsafe(8 + p(r.script))),
                (c = new n.BufferWriter(h, 0)),
                c.writeUInt64(r.value),
                c.writeVarSlice(r.script),
                (f = i.hash256(h)));
            }
            ((h = t.allocUnsafe(156 + p(r))), (c = new n.BufferWriter(h, 0)));
            const m = this.ins[e];
            return (
              c.writeUInt32(this.version),
              c.writeSlice(l),
              c.writeSlice(w),
              c.writeSlice(m.hash),
              c.writeUInt32(m.index),
              c.writeVarSlice(r),
              c.writeUInt64(s),
              c.writeUInt32(m.sequence),
              c.writeSlice(f),
              c.writeUInt32(this.locktime),
              c.writeUInt32(o),
              i.hash256(h)
            );
          }
          getHash(e) {
            return e && this.isCoinbase()
              ? t.alloc(32, 0)
              : i.hash256(this.__toBuffer(void 0, void 0, e));
          }
          getId() {
            return n.reverseBuffer(this.getHash(!1)).toString("hex");
          }
          toBuffer(t, e) {
            return this.__toBuffer(t, e, !0);
          }
          toHex() {
            return this.toBuffer(void 0, void 0).toString("hex");
          }
          setInputScript(t, e) {
            (a(u.tuple(u.Number, u.Buffer), arguments),
              (this.ins[t].script = e));
          }
          setWitness(t, e) {
            (a(u.tuple(u.Number, [u.Buffer]), arguments),
              (this.ins[t].witness = e));
          }
          __toBuffer(e, r, i) {
            (void 0 === i && (i = !1),
              e || (e = t.allocUnsafe(this.byteLength(i))));
            const s = new n.BufferWriter(e, r || 0);
            s.writeInt32(this.version);
            const o = i && this.hasWitnesses();
            return (
              o &&
                (s.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER),
                s.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG)),
              s.writeVarInt(this.ins.length),
              this.ins.forEach((t) => {
                (s.writeSlice(t.hash),
                  s.writeUInt32(t.index),
                  s.writeVarSlice(t.script),
                  s.writeUInt32(t.sequence));
              }),
              s.writeVarInt(this.outs.length),
              this.outs.forEach((t) => {
                (y(t) ? s.writeUInt64(t.value) : s.writeSlice(t.valueBuffer),
                  s.writeVarSlice(t.script));
              }),
              o &&
                this.ins.forEach((t) => {
                  s.writeVector(t.witness);
                }),
              s.writeUInt32(this.locktime),
              void 0 !== r ? e.slice(r, s.offset) : e
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
          (e.Transaction = Transaction));
      }).call(this, r(2).Buffer);
    },
    3107: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2803),
          i = r(2994),
          s = r(2760),
          o = r(2822),
          u = r(803),
          a = r(2792),
          c = r(2758);
        function p(t) {
          const e = a.decode(t);
          if (e.length < 21) throw new TypeError(t + " is too short");
          if (e.length > 21) throw new TypeError(t + " is too long");
          const r = e.readUInt8(0),
            n = e.slice(1);
          return { version: r, hash: n };
        }
        function h(e) {
          const r = u.decode(e),
            n = u.fromWords(r.words.slice(1));
          return { version: r.words[0], prefix: r.prefix, data: t.from(n) };
        }
        function f(e, r) {
          c(o.tuple(o.Hash160bit, o.UInt8), arguments);
          const n = t.allocUnsafe(21);
          return (n.writeUInt8(r, 0), e.copy(n, 1), a.encode(n));
        }
        function l(t, e, r) {
          const n = u.toWords(t);
          return (n.unshift(e), u.encode(r, n));
        }
        function d(t, e) {
          e = e || n.bitcoin;
          try {
            return i.p2pkh({ output: t, network: e }).address;
          } catch (r) {}
          try {
            return i.p2sh({ output: t, network: e }).address;
          } catch (r) {}
          try {
            return i.p2wpkh({ output: t, network: e }).address;
          } catch (r) {}
          try {
            return i.p2wsh({ output: t, network: e }).address;
          } catch (r) {}
          throw new Error(s.toASM(t) + " has no matching Address");
        }
        function w(t, e) {
          let r, s;
          e = e || n.bitcoin;
          try {
            r = p(t);
          } catch (o) {}
          if (r) {
            if (r.version === e.pubKeyHash)
              return i.p2pkh({ hash: r.hash }).output;
            if (r.version === e.scriptHash)
              return i.p2sh({ hash: r.hash }).output;
          } else {
            try {
              s = h(t);
            } catch (o) {}
            if (s) {
              if (s.prefix !== e.bech32)
                throw new Error(t + " has an invalid prefix");
              if (0 === s.version) {
                if (20 === s.data.length)
                  return i.p2wpkh({ hash: s.data }).output;
                if (32 === s.data.length)
                  return i.p2wsh({ hash: s.data }).output;
              }
            }
          }
          throw new Error(t + " has no matching Script");
        }
        ((e.fromBase58Check = p),
          (e.fromBech32 = h),
          (e.toBase58Check = f),
          (e.toBech32 = l),
          (e.fromOutputScript = d),
          (e.toOutputScript = w));
      }).call(this, r(2).Buffer);
    },
    3108: function (t, e, r) {
      var n = r(2771),
        i = {};
      for (var s in n) {
        var o = n[s];
        i[o] = s;
      }
      t.exports = i;
    },
    3109: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
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
          constructor(t, e, r) {
            ((this.__D = t),
              (this.__Q = e),
              (this.lowR = !1),
              void 0 === r && (r = {}),
              (this.compressed = void 0 === r.compressed || r.compressed),
              (this.network = r.network || n.bitcoin),
              void 0 !== e && (this.__Q = s.pointCompress(e, this.compressed)));
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
          sign(e, r) {
            if (!this.__D) throw new Error("Missing private key");
            if ((void 0 === r && (r = this.lowR), !1 === r))
              return s.sign(e, this.__D);
            {
              let r = s.sign(e, this.__D);
              const n = t.alloc(32, 0);
              let i = 0;
              while (r[0] > 127)
                (i++,
                  n.writeUIntLE(i, 0, 6),
                  (r = s.signWithEntropy(e, this.__D, n)));
              return r;
            }
          }
          verify(t, e) {
            return s.verify(t, this.publicKey, e);
          }
        }
        function p(t, e) {
          if ((u(i.Buffer256bit, t), !s.isPrivate(t)))
            throw new TypeError("Private key not in range [1, n)");
          return (u(c, e), new ECPair(t, void 0, e));
        }
        function h(t, e) {
          return (u(s.isPoint, t), u(c, e), new ECPair(void 0, t, e));
        }
        function f(t, e) {
          const r = a.decode(t),
            s = r.version;
          if (i.Array(e)) {
            if (((e = e.filter((t) => s === t.wif).pop()), !e))
              throw new Error("Unknown network version");
          } else if (((e = e || n.bitcoin), s !== e.wif))
            throw new Error("Invalid network version");
          return p(r.privateKey, { compressed: r.compressed, network: e });
        }
        function l(t) {
          (u(c, t), void 0 === t && (t = {}));
          const e = t.rng || o;
          let r;
          do {
            ((r = e(32)), u(i.Buffer256bit, r));
          } while (!s.isPrivate(r));
          return p(r, t);
        }
        ((e.fromPrivateKey = p),
          (e.fromPublicKey = h),
          (e.fromWIF = f),
          (e.makeRandom = l));
      }).call(this, r(2).Buffer);
    },
    3113: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3732);
      e.input = n;
      const i = r(3733);
      e.output = i;
    },
    3114: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3735);
      e.input = n;
      const i = r(3736);
      e.output = i;
    },
    3115: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3737);
      e.input = n;
      const i = r(3738);
      e.output = i;
    },
    3218: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3177);
      e.bip32 = n;
      const i = r(3107);
      e.address = i;
      const s = r(2832);
      e.crypto = s;
      const ECPair = r(3109);
      e.ECPair = ECPair;
      const o = r(2803);
      e.networks = o;
      const u = r(2994);
      e.payments = u;
      const a = r(2760);
      e.script = a;
      var c = r(3705);
      e.Block = c.Block;
      var p = r(3706);
      e.Psbt = p.Psbt;
      var h = r(2760);
      e.opcodes = h.OPS;
      var f = r(2996);
      e.Transaction = f.Transaction;
      var l = r(3730);
      e.TransactionBuilder = l.TransactionBuilder;
    },
    3310: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(t) {
        const e = n.compile(t);
        return 22 === e.length && e[0] === i.OPS.OP_0 && 20 === e[1];
      }
      ((e.check = s), (s.toJSON = () => "Witness pubKeyHash output"));
    },
    3311: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(t) {
        const e = n.compile(t);
        return 34 === e.length && e[0] === i.OPS.OP_0 && 32 === e[1];
      }
      ((e.check = s), (s.toJSON = () => "Witness scriptHash output"));
    },
    3696: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2803),
        i = r(2760),
        s = r(2893),
        o = r(2758),
        u = i.OPS;
      function a(t, e) {
        return t.length === e.length && t.every((t, r) => t.equals(e[r]));
      }
      function c(t, e) {
        if (!t.data && !t.output) throw new TypeError("Not enough data");
        ((e = Object.assign({ validate: !0 }, e || {})),
          o(
            {
              network: o.maybe(o.Object),
              output: o.maybe(o.Buffer),
              data: o.maybe(o.arrayOf(o.Buffer)),
            },
            t,
          ));
        const r = t.network || n.bitcoin,
          c = { name: "embed", network: r };
        if (
          (s.prop(c, "output", () => {
            if (t.data) return i.compile([u.OP_RETURN].concat(t.data));
          }),
          s.prop(c, "data", () => {
            if (t.output) return i.decompile(t.output).slice(1);
          }),
          e.validate && t.output)
        ) {
          const e = i.decompile(t.output);
          if (e[0] !== u.OP_RETURN) throw new TypeError("Output is invalid");
          if (!e.slice(1).every(o.Buffer))
            throw new TypeError("Output is invalid");
          if (t.data && !a(t.data, c.data))
            throw new TypeError("Data mismatch");
        }
        return Object.assign(c, t);
      }
      e.p2data = c;
    },
    3697: function (t, e, r) {
      "use strict";
      (function (t) {
        function r(t, e, r) {
          ((e = e || 4), (r = void 0 === r || r));
          const n = t.length;
          if (0 === n) return 0;
          if (n > e) throw new TypeError("Script number overflow");
          if (r && 0 === (127 & t[n - 1]) && (n <= 1 || 0 === (128 & t[n - 2])))
            throw new Error("Non-minimally encoded script number");
          if (5 === n) {
            const e = t.readUInt32LE(0),
              r = t.readUInt8(4);
            return 128 & r
              ? -(4294967296 * (-129 & r) + e)
              : 4294967296 * r + e;
          }
          let i = 0;
          for (let s = 0; s < n; ++s) i |= t[s] << (8 * s);
          return 128 & t[n - 1] ? -(i & ~(128 << (8 * (n - 1)))) : i;
        }
        function n(t) {
          return t > 2147483647
            ? 5
            : t > 8388607
              ? 4
              : t > 32767
                ? 3
                : t > 127
                  ? 2
                  : t > 0
                    ? 1
                    : 0;
        }
        function i(e) {
          let r = Math.abs(e);
          const i = n(r),
            s = t.allocUnsafe(i),
            o = e < 0;
          for (let t = 0; t < i; ++t) (s.writeUInt8(255 & r, t), (r >>= 8));
          return (
            128 & s[i - 1]
              ? s.writeUInt8(o ? 128 : 0, i - 1)
              : o && (s[i - 1] |= 128),
            s
          );
        }
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decode = r),
          (e.encode = i));
      }).call(this, r(2).Buffer);
    },
    3698: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2822),
          i = r(2898),
          s = r(2758),
          o = t.alloc(1, 0);
        function u(e) {
          let r = 0;
          while (0 === e[r]) ++r;
          return r === e.length
            ? o
            : ((e = e.slice(r)),
              128 & e[0] ? t.concat([o, e], 1 + e.length) : e);
        }
        function a(e) {
          0 === e[0] && (e = e.slice(1));
          const r = t.alloc(32, 0),
            n = Math.max(0, 32 - e.length);
          return (e.copy(r, n), r);
        }
        function c(e) {
          const r = e.readUInt8(e.length - 1),
            n = -129 & r;
          if (n <= 0 || n >= 4) throw new Error("Invalid hashType " + r);
          const s = i.decode(e.slice(0, -1)),
            o = a(s.r),
            u = a(s.s),
            c = t.concat([o, u], 64);
          return { signature: c, hashType: r };
        }
        function p(e, r) {
          s(
            { signature: n.BufferN(64), hashType: n.UInt8 },
            { signature: e, hashType: r },
          );
          const o = -129 & r;
          if (o <= 0 || o >= 4) throw new Error("Invalid hashType " + r);
          const a = t.allocUnsafe(1);
          a.writeUInt8(r, 0);
          const c = u(e.slice(0, 32)),
            p = u(e.slice(32, 64));
          return t.concat([i.encode(c, p), a]);
        }
        ((e.decode = c), (e.encode = p));
      }).call(this, r(2).Buffer);
    },
    3699: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2803),
        i = r(2760),
        s = r(2893),
        o = i.OPS,
        u = r(2758),
        a = r(2819),
        c = o.OP_RESERVED;
      function p(t, e) {
        return t.length === e.length && t.every((t, r) => t.equals(e[r]));
      }
      function h(t, e) {
        if (
          !t.input &&
          !t.output &&
          (!t.pubkeys || void 0 === t.m) &&
          !t.signatures
        )
          throw new TypeError("Not enough data");
        function r(t) {
          return (
            i.isCanonicalScriptSignature(t) ||
            void 0 !== (e.allowIncomplete && t === o.OP_0)
          );
        }
        ((e = Object.assign({ validate: !0 }, e || {})),
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
            t,
          ));
        const h = t.network || n.bitcoin,
          f = { network: h };
        let l = [],
          d = !1;
        function w(t) {
          d ||
            ((d = !0),
            (l = i.decompile(t)),
            (f.m = l[0] - c),
            (f.n = l[l.length - 2] - c),
            (f.pubkeys = l.slice(1, -2)));
        }
        if (
          (s.prop(f, "output", () => {
            if (t.m && f.n && t.pubkeys)
              return i.compile(
                [].concat(c + t.m, t.pubkeys, c + f.n, o.OP_CHECKMULTISIG),
              );
          }),
          s.prop(f, "m", () => {
            if (f.output) return (w(f.output), f.m);
          }),
          s.prop(f, "n", () => {
            if (f.pubkeys) return f.pubkeys.length;
          }),
          s.prop(f, "pubkeys", () => {
            if (t.output) return (w(t.output), f.pubkeys);
          }),
          s.prop(f, "signatures", () => {
            if (t.input) return i.decompile(t.input).slice(1);
          }),
          s.prop(f, "input", () => {
            if (t.signatures) return i.compile([o.OP_0].concat(t.signatures));
          }),
          s.prop(f, "witness", () => {
            if (f.input) return [];
          }),
          s.prop(f, "name", () => {
            if (f.m && f.n) return `p2ms(${f.m} of ${f.n})`;
          }),
          e.validate)
        ) {
          if (t.output) {
            if ((w(t.output), !u.Number(l[0])))
              throw new TypeError("Output is invalid");
            if (!u.Number(l[l.length - 2]))
              throw new TypeError("Output is invalid");
            if (l[l.length - 1] !== o.OP_CHECKMULTISIG)
              throw new TypeError("Output is invalid");
            if (f.m <= 0 || f.n > 16 || f.m > f.n || f.n !== l.length - 3)
              throw new TypeError("Output is invalid");
            if (!f.pubkeys.every((t) => a.isPoint(t)))
              throw new TypeError("Output is invalid");
            if (void 0 !== t.m && t.m !== f.m)
              throw new TypeError("m mismatch");
            if (void 0 !== t.n && t.n !== f.n)
              throw new TypeError("n mismatch");
            if (t.pubkeys && !p(t.pubkeys, f.pubkeys))
              throw new TypeError("Pubkeys mismatch");
          }
          if (t.pubkeys) {
            if (void 0 !== t.n && t.n !== t.pubkeys.length)
              throw new TypeError("Pubkey count mismatch");
            if (((f.n = t.pubkeys.length), f.n < f.m))
              throw new TypeError("Pubkey count cannot be less than m");
          }
          if (t.signatures) {
            if (t.signatures.length < f.m)
              throw new TypeError("Not enough signatures provided");
            if (t.signatures.length > f.m)
              throw new TypeError("Too many signatures provided");
          }
          if (t.input) {
            if (t.input[0] !== o.OP_0) throw new TypeError("Input is invalid");
            if (0 === f.signatures.length || !f.signatures.every(r))
              throw new TypeError("Input has invalid signature(s)");
            if (t.signatures && !p(t.signatures, f.signatures))
              throw new TypeError("Signature mismatch");
            if (void 0 !== t.m && t.m !== t.signatures.length)
              throw new TypeError("Signature count mismatch");
          }
        }
        return Object.assign(f, t);
      }
      e.p2ms = h;
    },
    3700: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2803),
        i = r(2760),
        s = r(2893),
        o = r(2758),
        u = i.OPS,
        a = r(2819);
      function c(t, e) {
        if (!t.input && !t.output && !t.pubkey && !t.input && !t.signature)
          throw new TypeError("Not enough data");
        ((e = Object.assign({ validate: !0 }, e || {})),
          o(
            {
              network: o.maybe(o.Object),
              output: o.maybe(o.Buffer),
              pubkey: o.maybe(a.isPoint),
              signature: o.maybe(i.isCanonicalScriptSignature),
              input: o.maybe(o.Buffer),
            },
            t,
          ));
        const r = s.value(() => i.decompile(t.input)),
          c = t.network || n.bitcoin,
          p = { name: "p2pk", network: c };
        if (
          (s.prop(p, "output", () => {
            if (t.pubkey) return i.compile([t.pubkey, u.OP_CHECKSIG]);
          }),
          s.prop(p, "pubkey", () => {
            if (t.output) return t.output.slice(1, -1);
          }),
          s.prop(p, "signature", () => {
            if (t.input) return r()[0];
          }),
          s.prop(p, "input", () => {
            if (t.signature) return i.compile([t.signature]);
          }),
          s.prop(p, "witness", () => {
            if (p.input) return [];
          }),
          e.validate)
        ) {
          if (t.output) {
            if (t.output[t.output.length - 1] !== u.OP_CHECKSIG)
              throw new TypeError("Output is invalid");
            if (!a.isPoint(p.pubkey))
              throw new TypeError("Output pubkey is invalid");
            if (t.pubkey && !t.pubkey.equals(p.pubkey))
              throw new TypeError("Pubkey mismatch");
          }
          if (t.signature && t.input && !t.input.equals(p.input))
            throw new TypeError("Signature mismatch");
          if (t.input) {
            if (1 !== r().length) throw new TypeError("Input is invalid");
            if (!i.isCanonicalScriptSignature(p.signature))
              throw new TypeError("Input has invalid signature");
          }
        }
        return Object.assign(p, t);
      }
      e.p2pk = c;
    },
    3701: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2819),
          p = r(2792);
        function h(e, r) {
          if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input)
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
              e,
            ));
          const h = o.value(() => {
              const t = p.decode(e.address),
                r = t.readUInt8(0),
                n = t.slice(1);
              return { version: r, hash: n };
            }),
            f = o.value(() => s.decompile(e.input)),
            l = e.network || i.bitcoin,
            d = { name: "p2pkh", network: l };
          if (
            (o.prop(d, "address", () => {
              if (!d.hash) return;
              const e = t.allocUnsafe(21);
              return (
                e.writeUInt8(l.pubKeyHash, 0),
                d.hash.copy(e, 1),
                p.encode(e)
              );
            }),
            o.prop(d, "hash", () =>
              e.output
                ? e.output.slice(3, 23)
                : e.address
                  ? h().hash
                  : e.pubkey || d.pubkey
                    ? n.hash160(e.pubkey || d.pubkey)
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
              if (e.input) return f()[1];
            }),
            o.prop(d, "signature", () => {
              if (e.input) return f()[0];
            }),
            o.prop(d, "input", () => {
              if (e.pubkey && e.signature)
                return s.compile([e.signature, e.pubkey]);
            }),
            o.prop(d, "witness", () => {
              if (d.input) return [];
            }),
            r.validate)
          ) {
            let r = t.from([]);
            if (e.address) {
              if (h().version !== l.pubKeyHash)
                throw new TypeError("Invalid version or Network mismatch");
              if (20 !== h().hash.length)
                throw new TypeError("Invalid address");
              r = h().hash;
            }
            if (e.hash) {
              if (r.length > 0 && !r.equals(e.hash))
                throw new TypeError("Hash mismatch");
              r = e.hash;
            }
            if (e.output) {
              if (
                25 !== e.output.length ||
                e.output[0] !== a.OP_DUP ||
                e.output[1] !== a.OP_HASH160 ||
                20 !== e.output[2] ||
                e.output[23] !== a.OP_EQUALVERIFY ||
                e.output[24] !== a.OP_CHECKSIG
              )
                throw new TypeError("Output is invalid");
              const t = e.output.slice(3, 23);
              if (r.length > 0 && !r.equals(t))
                throw new TypeError("Hash mismatch");
              r = t;
            }
            if (e.pubkey) {
              const t = n.hash160(e.pubkey);
              if (r.length > 0 && !r.equals(t))
                throw new TypeError("Hash mismatch");
              r = t;
            }
            if (e.input) {
              const t = f();
              if (2 !== t.length) throw new TypeError("Input is invalid");
              if (!s.isCanonicalScriptSignature(t[0]))
                throw new TypeError("Input has invalid signature");
              if (!c.isPoint(t[1]))
                throw new TypeError("Input has invalid pubkey");
              if (e.signature && !e.signature.equals(t[0]))
                throw new TypeError("Signature mismatch");
              if (e.pubkey && !e.pubkey.equals(t[1]))
                throw new TypeError("Pubkey mismatch");
              const i = n.hash160(t[1]);
              if (r.length > 0 && !r.equals(i))
                throw new TypeError("Hash mismatch");
            }
          }
          return Object.assign(d, e);
        }
        e.p2pkh = h;
      }).call(this, r(2).Buffer);
    },
    3702: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2792);
        function p(t, e) {
          return t.length === e.length && t.every((t, r) => t.equals(e[r]));
        }
        function h(e, r) {
          if (!e.address && !e.hash && !e.output && !e.redeem && !e.input)
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
              e,
            ));
          let h = e.network;
          h || (h = (e.redeem && e.redeem.network) || i.bitcoin);
          const f = { network: h },
            l = o.value(() => {
              const t = c.decode(e.address),
                r = t.readUInt8(0),
                n = t.slice(1);
              return { version: r, hash: n };
            }),
            d = o.value(() => s.decompile(e.input)),
            w = o.value(() => {
              const t = d();
              return {
                network: h,
                output: t[t.length - 1],
                input: s.compile(t.slice(0, -1)),
                witness: e.witness || [],
              };
            });
          if (
            (o.prop(f, "address", () => {
              if (!f.hash) return;
              const e = t.allocUnsafe(21);
              return (
                e.writeUInt8(f.network.scriptHash, 0),
                f.hash.copy(e, 1),
                c.encode(e)
              );
            }),
            o.prop(f, "hash", () =>
              e.output
                ? e.output.slice(2, 22)
                : e.address
                  ? l().hash
                  : f.redeem && f.redeem.output
                    ? n.hash160(f.redeem.output)
                    : void 0,
            ),
            o.prop(f, "output", () => {
              if (f.hash) return s.compile([a.OP_HASH160, f.hash, a.OP_EQUAL]);
            }),
            o.prop(f, "redeem", () => {
              if (e.input) return w();
            }),
            o.prop(f, "input", () => {
              if (e.redeem && e.redeem.input && e.redeem.output)
                return s.compile(
                  [].concat(s.decompile(e.redeem.input), e.redeem.output),
                );
            }),
            o.prop(f, "witness", () =>
              f.redeem && f.redeem.witness
                ? f.redeem.witness
                : f.input
                  ? []
                  : void 0,
            ),
            o.prop(f, "name", () => {
              const t = ["p2sh"];
              return (
                void 0 !== f.redeem && t.push(f.redeem.name),
                t.join("-")
              );
            }),
            r.validate)
          ) {
            let r = t.from([]);
            if (e.address) {
              if (l().version !== h.scriptHash)
                throw new TypeError("Invalid version or Network mismatch");
              if (20 !== l().hash.length)
                throw new TypeError("Invalid address");
              r = l().hash;
            }
            if (e.hash) {
              if (r.length > 0 && !r.equals(e.hash))
                throw new TypeError("Hash mismatch");
              r = e.hash;
            }
            if (e.output) {
              if (
                23 !== e.output.length ||
                e.output[0] !== a.OP_HASH160 ||
                20 !== e.output[1] ||
                e.output[22] !== a.OP_EQUAL
              )
                throw new TypeError("Output is invalid");
              const t = e.output.slice(2, 22);
              if (r.length > 0 && !r.equals(t))
                throw new TypeError("Hash mismatch");
              r = t;
            }
            const i = (t) => {
              if (t.output) {
                const e = s.decompile(t.output);
                if (!e || e.length < 1)
                  throw new TypeError("Redeem.output too short");
                const i = n.hash160(t.output);
                if (r.length > 0 && !r.equals(i))
                  throw new TypeError("Hash mismatch");
                r = i;
              }
              if (t.input) {
                const e = t.input.length > 0,
                  r = t.witness && t.witness.length > 0;
                if (!e && !r) throw new TypeError("Empty input");
                if (e && r) throw new TypeError("Input and witness provided");
                if (e) {
                  const e = s.decompile(t.input);
                  if (!s.isPushOnly(e))
                    throw new TypeError("Non push-only scriptSig");
                }
              }
            };
            if (e.input) {
              const e = d();
              if (!e || e.length < 1) throw new TypeError("Input too short");
              if (!t.isBuffer(w().output))
                throw new TypeError("Input is invalid");
              i(w());
            }
            if (e.redeem) {
              if (e.redeem.network && e.redeem.network !== h)
                throw new TypeError("Network mismatch");
              if (e.input) {
                const t = w();
                if (e.redeem.output && !e.redeem.output.equals(t.output))
                  throw new TypeError("Redeem.output mismatch");
                if (e.redeem.input && !e.redeem.input.equals(t.input))
                  throw new TypeError("Redeem.input mismatch");
              }
              i(e.redeem);
            }
            if (
              e.witness &&
              e.redeem &&
              e.redeem.witness &&
              !p(e.redeem.witness, e.witness)
            )
              throw new TypeError("Witness and redeem.witness mismatch");
          }
          return Object.assign(f, e);
        }
        e.p2sh = h;
      }).call(this, r(2).Buffer);
    },
    3703: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2819),
          p = r(803),
          h = t.alloc(0);
        function f(e, r) {
          if (!e.address && !e.hash && !e.output && !e.pubkey && !e.witness)
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
              e,
            ));
          const f = o.value(() => {
              const r = p.decode(e.address),
                n = r.words.shift(),
                i = p.fromWords(r.words);
              return { version: n, prefix: r.prefix, data: t.from(i) };
            }),
            l = e.network || i.bitcoin,
            d = { name: "p2wpkh", network: l };
          if (
            (o.prop(d, "address", () => {
              if (!d.hash) return;
              const t = p.toWords(d.hash);
              return (t.unshift(0), p.encode(l.bech32, t));
            }),
            o.prop(d, "hash", () =>
              e.output
                ? e.output.slice(2, 22)
                : e.address
                  ? f().data
                  : e.pubkey || d.pubkey
                    ? n.hash160(e.pubkey || d.pubkey)
                    : void 0,
            ),
            o.prop(d, "output", () => {
              if (d.hash) return s.compile([a.OP_0, d.hash]);
            }),
            o.prop(d, "pubkey", () =>
              e.pubkey ? e.pubkey : e.witness ? e.witness[1] : void 0,
            ),
            o.prop(d, "signature", () => {
              if (e.witness) return e.witness[0];
            }),
            o.prop(d, "input", () => {
              if (d.witness) return h;
            }),
            o.prop(d, "witness", () => {
              if (e.pubkey && e.signature) return [e.signature, e.pubkey];
            }),
            r.validate)
          ) {
            let r = t.from([]);
            if (e.address) {
              if (l && l.bech32 !== f().prefix)
                throw new TypeError("Invalid prefix or Network mismatch");
              if (0 !== f().version)
                throw new TypeError("Invalid address version");
              if (20 !== f().data.length)
                throw new TypeError("Invalid address data");
              r = f().data;
            }
            if (e.hash) {
              if (r.length > 0 && !r.equals(e.hash))
                throw new TypeError("Hash mismatch");
              r = e.hash;
            }
            if (e.output) {
              if (
                22 !== e.output.length ||
                e.output[0] !== a.OP_0 ||
                20 !== e.output[1]
              )
                throw new TypeError("Output is invalid");
              if (r.length > 0 && !r.equals(e.output.slice(2)))
                throw new TypeError("Hash mismatch");
              r = e.output.slice(2);
            }
            if (e.pubkey) {
              const t = n.hash160(e.pubkey);
              if (r.length > 0 && !r.equals(t))
                throw new TypeError("Hash mismatch");
              if (((r = t), !c.isPoint(e.pubkey) || 33 !== e.pubkey.length))
                throw new TypeError("Invalid pubkey for p2wpkh");
            }
            if (e.witness) {
              if (2 !== e.witness.length)
                throw new TypeError("Witness is invalid");
              if (!s.isCanonicalScriptSignature(e.witness[0]))
                throw new TypeError("Witness has invalid signature");
              if (!c.isPoint(e.witness[1]) || 33 !== e.witness[1].length)
                throw new TypeError("Witness has invalid pubkey");
              if (e.signature && !e.signature.equals(e.witness[0]))
                throw new TypeError("Signature mismatch");
              if (e.pubkey && !e.pubkey.equals(e.witness[1]))
                throw new TypeError("Pubkey mismatch");
              const t = n.hash160(e.witness[1]);
              if (r.length > 0 && !r.equals(t))
                throw new TypeError("Hash mismatch");
            }
          }
          return Object.assign(d, e);
        }
        e.p2wpkh = f;
      }).call(this, r(2).Buffer);
    },
    3704: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2819),
          p = r(803),
          h = t.alloc(0);
        function f(t, e) {
          return t.length === e.length && t.every((t, r) => t.equals(e[r]));
        }
        function l(e) {
          return !(
            !t.isBuffer(e) ||
            65 !== e.length ||
            4 !== e[0] ||
            !c.isPoint(e)
          );
        }
        function d(e, r) {
          if (!e.address && !e.hash && !e.output && !e.redeem && !e.witness)
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
              e,
            ));
          const c = o.value(() => {
              const r = p.decode(e.address),
                n = r.words.shift(),
                i = p.fromWords(r.words);
              return { version: n, prefix: r.prefix, data: t.from(i) };
            }),
            d = o.value(() => s.decompile(e.redeem.input));
          let w = e.network;
          w || (w = (e.redeem && e.redeem.network) || i.bitcoin);
          const m = { network: w };
          if (
            (o.prop(m, "address", () => {
              if (!m.hash) return;
              const t = p.toWords(m.hash);
              return (t.unshift(0), p.encode(w.bech32, t));
            }),
            o.prop(m, "hash", () =>
              e.output
                ? e.output.slice(2)
                : e.address
                  ? c().data
                  : m.redeem && m.redeem.output
                    ? n.sha256(m.redeem.output)
                    : void 0,
            ),
            o.prop(m, "output", () => {
              if (m.hash) return s.compile([a.OP_0, m.hash]);
            }),
            o.prop(m, "redeem", () => {
              if (e.witness)
                return {
                  output: e.witness[e.witness.length - 1],
                  input: h,
                  witness: e.witness.slice(0, -1),
                };
            }),
            o.prop(m, "input", () => {
              if (m.witness) return h;
            }),
            o.prop(m, "witness", () => {
              if (
                e.redeem &&
                e.redeem.input &&
                e.redeem.input.length > 0 &&
                e.redeem.output &&
                e.redeem.output.length > 0
              ) {
                const t = s.toStack(d());
                return (
                  (m.redeem = Object.assign({ witness: t }, e.redeem)),
                  (m.redeem.input = h),
                  [].concat(t, e.redeem.output)
                );
              }
              if (e.redeem && e.redeem.output && e.redeem.witness)
                return [].concat(e.redeem.witness, e.redeem.output);
            }),
            o.prop(m, "name", () => {
              const t = ["p2wsh"];
              return (
                void 0 !== m.redeem && t.push(m.redeem.name),
                t.join("-")
              );
            }),
            r.validate)
          ) {
            let r = t.from([]);
            if (e.address) {
              if (c().prefix !== w.bech32)
                throw new TypeError("Invalid prefix or Network mismatch");
              if (0 !== c().version)
                throw new TypeError("Invalid address version");
              if (32 !== c().data.length)
                throw new TypeError("Invalid address data");
              r = c().data;
            }
            if (e.hash) {
              if (r.length > 0 && !r.equals(e.hash))
                throw new TypeError("Hash mismatch");
              r = e.hash;
            }
            if (e.output) {
              if (
                34 !== e.output.length ||
                e.output[0] !== a.OP_0 ||
                32 !== e.output[1]
              )
                throw new TypeError("Output is invalid");
              const t = e.output.slice(2);
              if (r.length > 0 && !r.equals(t))
                throw new TypeError("Hash mismatch");
              r = t;
            }
            if (e.redeem) {
              if (e.redeem.network && e.redeem.network !== w)
                throw new TypeError("Network mismatch");
              if (
                e.redeem.input &&
                e.redeem.input.length > 0 &&
                e.redeem.witness &&
                e.redeem.witness.length > 0
              )
                throw new TypeError("Ambiguous witness source");
              if (e.redeem.output) {
                if (0 === s.decompile(e.redeem.output).length)
                  throw new TypeError("Redeem.output is invalid");
                const t = n.sha256(e.redeem.output);
                if (r.length > 0 && !r.equals(t))
                  throw new TypeError("Hash mismatch");
                r = t;
              }
              if (e.redeem.input && !s.isPushOnly(d()))
                throw new TypeError("Non push-only scriptSig");
              if (
                e.witness &&
                e.redeem.witness &&
                !f(e.witness, e.redeem.witness)
              )
                throw new TypeError("Witness and redeem.witness mismatch");
              if (
                (e.redeem.input && d().some(l)) ||
                (e.redeem.output &&
                  (s.decompile(e.redeem.output) || []).some(l))
              )
                throw new TypeError(
                  "redeem.input or redeem.output contains uncompressed pubkey",
                );
            }
            if (e.witness && e.witness.length > 0) {
              const t = e.witness[e.witness.length - 1];
              if (e.redeem && e.redeem.output && !e.redeem.output.equals(t))
                throw new TypeError("Witness and redeem.output mismatch");
              if (e.witness.some(l) || (s.decompile(t) || []).some(l))
                throw new TypeError("Witness contains uncompressed pubkey");
            }
          }
          return Object.assign(m, e);
        }
        e.p2wsh = d;
      }).call(this, r(2).Buffer);
    },
    3705: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2995),
          i = r(2832),
          s = r(2996),
          o = r(2822),
          u = r(3110),
          a = r(2758),
          c = r(2864),
          p = new TypeError("Cannot compute merkle root for zero transactions"),
          h = new TypeError(
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
          static fromBuffer(t) {
            if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
            const e = new n.BufferReader(t),
              r = new Block();
            if (
              ((r.version = e.readInt32()),
              (r.prevHash = e.readSlice(32)),
              (r.merkleRoot = e.readSlice(32)),
              (r.timestamp = e.readUInt32()),
              (r.bits = e.readUInt32()),
              (r.nonce = e.readUInt32()),
              80 === t.length)
            )
              return r;
            const i = () => {
                const t = s.Transaction.fromBuffer(
                  e.buffer.slice(e.offset),
                  !0,
                );
                return ((e.offset += t.byteLength()), t);
              },
              o = e.readVarInt();
            r.transactions = [];
            for (let n = 0; n < o; ++n) {
              const t = i();
              r.transactions.push(t);
            }
            const u = r.getWitnessCommit();
            return (u && (r.witnessCommit = u), r);
          }
          static fromHex(e) {
            return Block.fromBuffer(t.from(e, "hex"));
          }
          static calculateTarget(e) {
            const r = ((4278190080 & e) >> 24) - 3,
              n = 8388607 & e,
              i = t.alloc(32, 0);
            return (i.writeUIntBE(n, 29 - r, 3), i);
          }
          static calculateMerkleRoot(e, r) {
            if ((a([{ getHash: o.Function }], e), 0 === e.length)) throw p;
            if (r && !f(e)) throw h;
            const n = e.map((t) => t.getHash(r)),
              s = u(n, i.hash256);
            return r ? i.hash256(t.concat([s, e[0].ins[0].witness[0]])) : s;
          }
          getWitnessCommit() {
            if (!f(this.transactions)) return null;
            const e = this.transactions[0].outs
              .filter((e) =>
                e.script.slice(0, 6).equals(t.from("6a24aa21a9ed", "hex")),
              )
              .map((t) => t.script.slice(6, 38));
            if (0 === e.length) return null;
            const r = e[e.length - 1];
            return r instanceof t && 32 === r.length ? r : null;
          }
          hasWitnessCommit() {
            return (
              (this.witnessCommit instanceof t &&
                32 === this.witnessCommit.length) ||
              null !== this.getWitnessCommit()
            );
          }
          hasWitness() {
            return l(this.transactions);
          }
          weight() {
            const t = this.byteLength(!1, !1),
              e = this.byteLength(!1, !0);
            return 3 * t + e;
          }
          byteLength(t, e) {
            return (
              void 0 === e && (e = !0),
              t || !this.transactions
                ? 80
                : 80 +
                  c.encodingLength(this.transactions.length) +
                  this.transactions.reduce((t, r) => t + r.byteLength(e), 0)
            );
          }
          getHash() {
            return i.hash256(this.toBuffer(!0));
          }
          getId() {
            return n.reverseBuffer(this.getHash()).toString("hex");
          }
          getUTCDate() {
            const t = new Date(0);
            return (t.setUTCSeconds(this.timestamp), t);
          }
          toBuffer(e) {
            const r = t.allocUnsafe(this.byteLength(e)),
              i = new n.BufferWriter(r);
            return (
              i.writeInt32(this.version),
              i.writeSlice(this.prevHash),
              i.writeSlice(this.merkleRoot),
              i.writeUInt32(this.timestamp),
              i.writeUInt32(this.bits),
              i.writeUInt32(this.nonce),
              e ||
                !this.transactions ||
                (c.encode(this.transactions.length, r, i.offset),
                (i.offset += c.encode.bytes),
                this.transactions.forEach((t) => {
                  const e = t.byteLength();
                  (t.toBuffer(r, i.offset), (i.offset += e));
                })),
              r
            );
          }
          toHex(t) {
            return this.toBuffer(t).toString("hex");
          }
          checkTxRoots() {
            const t = this.hasWitnessCommit();
            return (
              !(!t && this.hasWitness()) &&
              this.__checkMerkleRoot() &&
              (!t || this.__checkWitnessCommit())
            );
          }
          checkProofOfWork() {
            const t = n.reverseBuffer(this.getHash()),
              e = Block.calculateTarget(this.bits);
            return t.compare(e) <= 0;
          }
          __checkMerkleRoot() {
            if (!this.transactions) throw p;
            const t = Block.calculateMerkleRoot(this.transactions);
            return 0 === this.merkleRoot.compare(t);
          }
          __checkWitnessCommit() {
            if (!this.transactions) throw p;
            if (!this.hasWitnessCommit()) throw h;
            const t = Block.calculateMerkleRoot(this.transactions, !0);
            return 0 === this.witnessCommit.compare(t);
          }
        }
        function f(t) {
          return (
            t instanceof Array &&
            t[0] &&
            t[0].ins &&
            t[0].ins instanceof Array &&
            t[0].ins[0] &&
            t[0].ins[0].witness &&
            t[0].ins[0].witness instanceof Array &&
            t[0].ins[0].witness.length > 0
          );
        }
        function l(t) {
          return (
            t instanceof Array &&
            t.some(
              (t) =>
                "object" === typeof t &&
                t.ins instanceof Array &&
                t.ins.some(
                  (t) =>
                    "object" === typeof t &&
                    t.witness instanceof Array &&
                    t.witness.length > 0,
                ),
            )
          );
        }
        e.Block = Block;
      }).call(this, r(2).Buffer);
    },
    3706: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(3707),
          i = r(2918),
          s = r(3309),
          o = r(3107),
          u = r(2995),
          a = r(2832),
          c = r(3109),
          p = r(2803),
          h = r(2994),
          f = r(2760),
          l = r(2996),
          d = { network: p.bitcoin, maximumFeeRate: 5e3 };
        class Psbt {
          constructor(t, e) {
            (void 0 === t && (t = {}),
              void 0 === e && (e = new n.Psbt(new PsbtTransaction())),
              (this.data = e),
              (this.opts = Object.assign({}, d, t)),
              (this.__CACHE = {
                __NON_WITNESS_UTXO_TX_CACHE: [],
                __NON_WITNESS_UTXO_BUF_CACHE: [],
                __TX_IN_CACHE: {},
                __TX: this.data.globalMap.unsignedTx.tx,
                __UNSAFE_SIGN_NONSEGWIT: !1,
              }),
              0 === this.data.inputs.length && this.setVersion(2));
            const r = (t, e, r, n) =>
              Object.defineProperty(t, e, { enumerable: r, writable: n });
            (r(this, "__CACHE", !1, !0), r(this, "opts", !1, !0));
          }
          static fromBase64(e, r) {
            void 0 === r && (r = {});
            const n = t.from(e, "base64");
            return this.fromBuffer(n, r);
          }
          static fromHex(e, r) {
            void 0 === r && (r = {});
            const n = t.from(e, "hex");
            return this.fromBuffer(n, r);
          }
          static fromBuffer(t, e) {
            void 0 === e && (e = {});
            const r = n.Psbt.fromBuffer(t, w),
              i = new Psbt(e, r);
            return (B(i.__CACHE.__TX, i.__CACHE), i);
          }
          get inputCount() {
            return this.data.inputs.length;
          }
          get version() {
            return this.__CACHE.__TX.version;
          }
          set version(t) {
            this.setVersion(t);
          }
          get locktime() {
            return this.__CACHE.__TX.locktime;
          }
          set locktime(t) {
            this.setLocktime(t);
          }
          get txInputs() {
            return this.__CACHE.__TX.ins.map((t) => ({
              hash: u.cloneBuffer(t.hash),
              index: t.index,
              sequence: t.sequence,
            }));
          }
          get txOutputs() {
            return this.__CACHE.__TX.outs.map((t) => {
              let e;
              try {
                e = o.fromOutputScript(t.script, this.opts.network);
              } catch (r) {}
              return {
                script: u.cloneBuffer(t.script),
                value: t.value,
                address: e,
              };
            });
          }
          combine() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return (this.data.combine(...e.map((t) => t.data)), this);
          }
          clone() {
            const t = Psbt.fromBuffer(this.data.toBuffer());
            return ((t.opts = JSON.parse(JSON.stringify(this.opts))), t);
          }
          setMaximumFeeRate(t) {
            (I(t), (this.opts.maximumFeeRate = t));
          }
          setVersion(t) {
            (I(t), N(this.data.inputs, "setVersion"));
            const e = this.__CACHE;
            return ((e.__TX.version = t), (e.__EXTRACTED_TX = void 0), this);
          }
          setLocktime(t) {
            (I(t), N(this.data.inputs, "setLocktime"));
            const e = this.__CACHE;
            return ((e.__TX.locktime = t), (e.__EXTRACTED_TX = void 0), this);
          }
          setInputSequence(t, e) {
            (I(e), N(this.data.inputs, "setInputSequence"));
            const r = this.__CACHE;
            if (r.__TX.ins.length <= t) throw new Error("Input index too high");
            return (
              (r.__TX.ins[t].sequence = e),
              (r.__EXTRACTED_TX = void 0),
              this
            );
          }
          addInputs(t) {
            return (t.forEach((t) => this.addInput(t)), this);
          }
          addInput(t) {
            if (
              arguments.length > 1 ||
              !t ||
              void 0 === t.hash ||
              void 0 === t.index
            )
              throw new Error(
                "Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]",
              );
            (N(this.data.inputs, "addInput"),
              t.witnessScript && ct(t.witnessScript));
            const e = this.__CACHE;
            this.data.addInput(t);
            const r = e.__TX.ins[e.__TX.ins.length - 1];
            R(e, r);
            const n = this.data.inputs.length - 1,
              i = this.data.inputs[n];
            return (
              i.nonWitnessUtxo && z(this.__CACHE, i, n),
              (e.__FEE = void 0),
              (e.__FEE_RATE = void 0),
              (e.__EXTRACTED_TX = void 0),
              this
            );
          }
          addOutputs(t) {
            return (t.forEach((t) => this.addOutput(t)), this);
          }
          addOutput(t) {
            if (
              arguments.length > 1 ||
              !t ||
              void 0 === t.value ||
              (void 0 === t.address && void 0 === t.script)
            )
              throw new Error(
                "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]",
              );
            N(this.data.inputs, "addOutput");
            const { address: e } = t;
            if ("string" === typeof e) {
              const { network: r } = this.opts,
                n = o.toOutputScript(e, r);
              t = Object.assign(t, { script: n });
            }
            const r = this.__CACHE;
            return (
              this.data.addOutput(t),
              (r.__FEE = void 0),
              (r.__FEE_RATE = void 0),
              (r.__EXTRACTED_TX = void 0),
              this
            );
          }
          extractTransaction(t) {
            if (!this.data.inputs.every(g)) throw new Error("Not finalized");
            const e = this.__CACHE;
            if ((t || H(this, e, this.opts), e.__EXTRACTED_TX))
              return e.__EXTRACTED_TX;
            const r = e.__TX.clone();
            return (Z(this.data.inputs, r, e, !0), r);
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
              ft(this.data.inputs.length).forEach((t) => this.finalizeInput(t)),
              this
            );
          }
          finalizeInput(t, e) {
            void 0 === e && (e = K);
            const r = s.checkForInput(this.data.inputs, t),
              {
                script: n,
                isP2SH: i,
                isP2WSH: o,
                isSegwit: u,
              } = G(t, r, this.__CACHE);
            if (!n) throw new Error("No script found for input #" + t);
            A(r);
            const { finalScriptSig: a, finalScriptWitness: c } = e(
              t,
              r,
              n,
              u,
              i,
              o,
            );
            if (
              (a && this.data.updateInput(t, { finalScriptSig: a }),
              c && this.data.updateInput(t, { finalScriptWitness: c }),
              !a && !c)
            )
              throw new Error("Unknown error finalizing input #" + t);
            return (this.data.clearFinalizedInput(t), this);
          }
          getInputType(t) {
            const e = s.checkForInput(this.data.inputs, t),
              r = et(t, e, this.__CACHE),
              n = at(
                r,
                t,
                "input",
                e.redeemScript || it(e.finalScriptSig),
                e.witnessScript || st(e.finalScriptWitness),
              ),
              i = "raw" === n.type ? "" : n.type + "-",
              o = ht(n.meaningfulScript);
            return i + o;
          }
          inputHasPubkey(t, e) {
            const r = s.checkForInput(this.data.inputs, t);
            return rt(e, r, t, this.__CACHE);
          }
          inputHasHDKey(t, e) {
            const r = s.checkForInput(this.data.inputs, t),
              n = k(e);
            return !!r.bip32Derivation && r.bip32Derivation.some(n);
          }
          outputHasPubkey(t, e) {
            const r = s.checkForOutput(this.data.outputs, t);
            return nt(e, r, t, this.__CACHE);
          }
          outputHasHDKey(t, e) {
            const r = s.checkForOutput(this.data.outputs, t),
              n = k(e);
            return !!r.bip32Derivation && r.bip32Derivation.some(n);
          }
          validateSignaturesOfAllInputs() {
            s.checkForInput(this.data.inputs, 0);
            const t = ft(this.data.inputs.length).map((t) =>
              this.validateSignaturesOfInput(t),
            );
            return t.reduce((t, e) => !0 === e && t, !0);
          }
          validateSignaturesOfInput(t, e) {
            const r = this.data.inputs[t],
              n = (r || {}).partialSig;
            if (!r || !n || n.length < 1)
              throw new Error("No signatures to validate");
            const i = e ? n.filter((t) => t.pubkey.equals(e)) : n;
            if (i.length < 1) throw new Error("No signatures for this pubkey");
            const s = [];
            let o, u, a;
            for (const p of i) {
              const e = f.signature.decode(p.signature),
                { hash: n, script: i } =
                  a !== e.hashType
                    ? F(
                        t,
                        Object.assign({}, r, { sighashType: e.hashType }),
                        this.__CACHE,
                        !0,
                      )
                    : { hash: o, script: u };
              ((a = e.hashType), (o = n), (u = i), U(p.pubkey, i, "verify"));
              const h = c.fromPublicKey(p.pubkey);
              s.push(h.verify(n, e.signature));
            }
            return s.every((t) => !0 === t);
          }
          signAllInputsHD(t, e) {
            if (
              (void 0 === e && (e = [l.Transaction.SIGHASH_ALL]),
              !t || !t.publicKey || !t.fingerprint)
            )
              throw new Error("Need HDSigner to sign input");
            const r = [];
            for (const i of ft(this.data.inputs.length))
              try {
                (this.signInputHD(i, t, e), r.push(!0));
              } catch (n) {
                r.push(!1);
              }
            if (r.every((t) => !1 === t))
              throw new Error("No inputs were signed");
            return this;
          }
          signAllInputsHDAsync(t, e) {
            return (
              void 0 === e && (e = [l.Transaction.SIGHASH_ALL]),
              new Promise((r, n) => {
                if (!t || !t.publicKey || !t.fingerprint)
                  return n(new Error("Need HDSigner to sign input"));
                const i = [],
                  s = [];
                for (const o of ft(this.data.inputs.length))
                  s.push(
                    this.signInputHDAsync(o, t, e).then(
                      () => {
                        i.push(!0);
                      },
                      () => {
                        i.push(!1);
                      },
                    ),
                  );
                return Promise.all(s).then(() => {
                  if (i.every((t) => !1 === t))
                    return n(new Error("No inputs were signed"));
                  r();
                });
              })
            );
          }
          signInputHD(t, e, r) {
            if (
              (void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              !e || !e.publicKey || !e.fingerprint)
            )
              throw new Error("Need HDSigner to sign input");
            const n = X(t, this.data.inputs, e);
            return (n.forEach((e) => this.signInput(t, e, r)), this);
          }
          signInputHDAsync(t, e, r) {
            return (
              void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              new Promise((n, i) => {
                if (!e || !e.publicKey || !e.fingerprint)
                  return i(new Error("Need HDSigner to sign input"));
                const s = X(t, this.data.inputs, e),
                  o = s.map((e) => this.signInputAsync(t, e, r));
                return Promise.all(o)
                  .then(() => {
                    n();
                  })
                  .catch(i);
              })
            );
          }
          signAllInputs(t, e) {
            if (
              (void 0 === e && (e = [l.Transaction.SIGHASH_ALL]),
              !t || !t.publicKey)
            )
              throw new Error("Need Signer to sign input");
            const r = [];
            for (const i of ft(this.data.inputs.length))
              try {
                (this.signInput(i, t, e), r.push(!0));
              } catch (n) {
                r.push(!1);
              }
            if (r.every((t) => !1 === t))
              throw new Error("No inputs were signed");
            return this;
          }
          signAllInputsAsync(t, e) {
            return (
              void 0 === e && (e = [l.Transaction.SIGHASH_ALL]),
              new Promise((r, n) => {
                if (!t || !t.publicKey)
                  return n(new Error("Need Signer to sign input"));
                const i = [],
                  s = [];
                for (const [o] of this.data.inputs.entries())
                  s.push(
                    this.signInputAsync(o, t, e).then(
                      () => {
                        i.push(!0);
                      },
                      () => {
                        i.push(!1);
                      },
                    ),
                  );
                return Promise.all(s).then(() => {
                  if (i.every((t) => !1 === t))
                    return n(new Error("No inputs were signed"));
                  r();
                });
              })
            );
          }
          signInput(t, e, r) {
            if (
              (void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              !e || !e.publicKey)
            )
              throw new Error("Need Signer to sign input");
            const { hash: n, sighashType: i } = q(
                this.data.inputs,
                t,
                e.publicKey,
                this.__CACHE,
                r,
              ),
              s = [
                {
                  pubkey: e.publicKey,
                  signature: f.signature.encode(e.sign(n), i),
                },
              ];
            return (this.data.updateInput(t, { partialSig: s }), this);
          }
          signInputAsync(t, e, r) {
            return (
              void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              Promise.resolve().then(() => {
                if (!e || !e.publicKey)
                  throw new Error("Need Signer to sign input");
                const { hash: n, sighashType: i } = q(
                  this.data.inputs,
                  t,
                  e.publicKey,
                  this.__CACHE,
                  r,
                );
                return Promise.resolve(e.sign(n)).then((r) => {
                  const n = [
                    {
                      pubkey: e.publicKey,
                      signature: f.signature.encode(r, i),
                    },
                  ];
                  this.data.updateInput(t, { partialSig: n });
                });
              })
            );
          }
          toBuffer() {
            return (_(this.__CACHE), this.data.toBuffer());
          }
          toHex() {
            return (_(this.__CACHE), this.data.toHex());
          }
          toBase64() {
            return (_(this.__CACHE), this.data.toBase64());
          }
          updateGlobal(t) {
            return (this.data.updateGlobal(t), this);
          }
          updateInput(t, e) {
            return (
              e.witnessScript && ct(e.witnessScript),
              this.data.updateInput(t, e),
              e.nonWitnessUtxo && z(this.__CACHE, this.data.inputs[t], t),
              this
            );
          }
          updateOutput(t, e) {
            return (this.data.updateOutput(t, e), this);
          }
          addUnknownKeyValToGlobal(t) {
            return (this.data.addUnknownKeyValToGlobal(t), this);
          }
          addUnknownKeyValToInput(t, e) {
            return (this.data.addUnknownKeyValToInput(t, e), this);
          }
          addUnknownKeyValToOutput(t, e) {
            return (this.data.addUnknownKeyValToOutput(t, e), this);
          }
          clearFinalizedInput(t) {
            return (this.data.clearFinalizedInput(t), this);
          }
        }
        e.Psbt = Psbt;
        const w = (t) => new PsbtTransaction(t);
        class PsbtTransaction {
          constructor(e) {
            (void 0 === e && (e = t.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
              (this.tx = l.Transaction.fromBuffer(e)),
              C(this.tx),
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
          addInput(e) {
            if (
              void 0 === e.hash ||
              void 0 === e.index ||
              (!t.isBuffer(e.hash) && "string" !== typeof e.hash) ||
              "number" !== typeof e.index
            )
              throw new Error("Error adding input.");
            const r =
              "string" === typeof e.hash
                ? u.reverseBuffer(t.from(e.hash, "hex"))
                : e.hash;
            this.tx.addInput(r, e.index, e.sequence);
          }
          addOutput(e) {
            if (
              void 0 === e.script ||
              void 0 === e.value ||
              !t.isBuffer(e.script) ||
              "number" !== typeof e.value
            )
              throw new Error("Error adding output.");
            this.tx.addOutput(e.script, e.value);
          }
          toBuffer() {
            return this.tx.toBuffer();
          }
        }
        function m(t, e, r) {
          switch (r) {
            case "pubkey":
            case "pubkeyhash":
            case "witnesspubkeyhash":
              return y(1, t.partialSig);
            case "multisig":
              const r = h.p2ms({ output: e });
              return y(r.m, t.partialSig, r.pubkeys);
            default:
              return !1;
          }
        }
        function _(t) {
          if (!1 !== t.__UNSAFE_SIGN_NONSEGWIT)
            throw new Error("Not BIP174 compliant, can not export");
        }
        function y(t, e, r) {
          if (!e) return !1;
          let n;
          if (
            ((n = r
              ? r
                  .map((t) => {
                    const r = c.fromPublicKey(t, { compressed: !0 }).publicKey;
                    return e.find((t) => t.pubkey.equals(r));
                  })
                  .filter((t) => !!t)
              : e),
            n.length > t)
          )
            throw new Error("Too many signatures");
          return n.length === t;
        }
        function g(t) {
          return !!t.finalScriptSig || !!t.finalScriptWitness;
        }
        function S(t) {
          return (e) => {
            try {
              return (t({ output: e }), !0);
            } catch (r) {
              return !1;
            }
          };
        }
        const b = S(h.p2ms),
          O = S(h.p2pk),
          E = S(h.p2pkh),
          P = S(h.p2wpkh),
          v = S(h.p2wsh),
          T = S(h.p2sh);
        function k(t) {
          return (e) =>
            !!e.masterFingerprint.equals(t.fingerprint) &&
            !!t.derivePath(e.path).publicKey.equals(e.pubkey);
        }
        function I(t) {
          if (
            "number" !== typeof t ||
            t !== Math.floor(t) ||
            t > 4294967295 ||
            t < 0
          )
            throw new Error("Invalid 32 bit integer");
        }
        function H(t, e, r) {
          const n = e.__FEE_RATE || t.getFeeRate(),
            i = e.__EXTRACTED_TX.virtualSize(),
            s = n * i;
          if (n >= r.maximumFeeRate)
            throw new Error(
              `Warning: You are paying around ${(s / 1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`,
            );
        }
        function N(t, e) {
          t.forEach((t) => {
            let r = !1,
              n = [];
            if (0 === (t.partialSig || []).length) {
              if (!t.finalScriptSig && !t.finalScriptWitness) return;
              n = j(t);
            } else n = t.partialSig;
            if (
              (n.forEach((t) => {
                const { hashType: n } = f.signature.decode(t.signature),
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
                -1 === i.indexOf(e) && (r = !0);
              }),
              r)
            )
              throw new Error("Can not modify transaction, signatures exist.");
          });
        }
        function A(t) {
          if (!t.sighashType || !t.partialSig) return;
          const { partialSig: e, sighashType: r } = t;
          e.forEach((t) => {
            const { hashType: e } = f.signature.decode(t.signature);
            if (r !== e)
              throw new Error(
                "Signature sighash does not match input sighash type",
              );
          });
        }
        function U(t, e, r) {
          if (!pt(t, e))
            throw new Error(
              `Can not ${r} for this input with the key ${t.toString("hex")}`,
            );
        }
        function C(t) {
          const e = t.ins.every(
            (t) =>
              t.script &&
              0 === t.script.length &&
              t.witness &&
              0 === t.witness.length,
          );
          if (!e)
            throw new Error(
              "Format Error: Transaction ScriptSigs are not empty",
            );
        }
        function B(t, e) {
          t.ins.forEach((t) => {
            R(e, t);
          });
        }
        function R(e, r) {
          const n =
            u.reverseBuffer(t.from(r.hash)).toString("hex") + ":" + r.index;
          if (e.__TX_IN_CACHE[n]) throw new Error("Duplicate input detected.");
          e.__TX_IN_CACHE[n] = 1;
        }
        function x(t, e) {
          return (r, n, i, s) => {
            const o = t({ redeem: { output: i } }).output;
            if (!n.equals(o))
              throw new Error(
                `${e} for ${s} #${r} doesn't match the scriptPubKey in the prevout`,
              );
          };
        }
        const W = x(h.p2sh, "Redeem script"),
          L = x(h.p2wsh, "Witness script");
        function D(t, e, r, n) {
          if (!r.every(g))
            throw new Error("PSBT must be finalized to calculate " + e);
          if ("__FEE_RATE" === t && n.__FEE_RATE) return n.__FEE_RATE;
          if ("__FEE" === t && n.__FEE) return n.__FEE;
          let i,
            s = !0;
          return (
            n.__EXTRACTED_TX
              ? ((i = n.__EXTRACTED_TX), (s = !1))
              : (i = n.__TX.clone()),
            Z(r, i, n, s),
            "__FEE_RATE" === t ? n.__FEE_RATE : "__FEE" === t ? n.__FEE : void 0
          );
        }
        function K(t, e, r, n, i, s) {
          const o = ht(r);
          if (!m(e, r, o)) throw new Error("Can not finalize input #" + t);
          return M(r, o, e.partialSig, n, i, s);
        }
        function M(t, e, r, n, i, s) {
          let o, u;
          const a = V(t, e, r),
            c = s ? h.p2wsh({ redeem: a }) : null,
            p = i ? h.p2sh({ redeem: c || a }) : null;
          return (
            n
              ? ((u = J(c ? c.witness : a.witness)), p && (o = p.input))
              : (o = p ? p.input : a.input),
            { finalScriptSig: o, finalScriptWitness: u }
          );
        }
        function q(t, e, r, n, i) {
          const o = s.checkForInput(t, e),
            { hash: u, sighashType: a, script: c } = F(e, o, n, !1, i);
          return (U(r, c, "sign"), { hash: u, sighashType: a });
        }
        function F(t, e, r, n, i) {
          const s = r.__TX,
            o = e.sighashType || l.Transaction.SIGHASH_ALL;
          if (i && i.indexOf(o) < 0) {
            const t = Q(o);
            throw new Error(
              "Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: " +
                t,
            );
          }
          let u, a;
          if (e.nonWitnessUtxo) {
            const n = tt(r, e, t),
              i = s.ins[t].hash,
              o = n.getHash();
            if (!i.equals(o))
              throw new Error(
                `Non-witness UTXO hash for input #${t} doesn't match the hash specified in the prevout`,
              );
            const u = s.ins[t].index;
            a = n.outs[u];
          } else {
            if (!e.witnessUtxo)
              throw new Error("Need a Utxo input item for signing");
            a = e.witnessUtxo;
          }
          const { meaningfulScript: c, type: p } = at(
            a.script,
            t,
            "input",
            e.redeemScript,
            e.witnessScript,
          );
          if (["p2sh-p2wsh", "p2wsh"].indexOf(p) >= 0)
            u = s.hashForWitnessV0(t, c, a.value, o);
          else if (P(c)) {
            const e = h.p2pkh({ hash: c.slice(2) }).output;
            u = s.hashForWitnessV0(t, e, a.value, o);
          } else {
            if (void 0 === e.nonWitnessUtxo && !1 === r.__UNSAFE_SIGN_NONSEGWIT)
              throw new Error(
                `Input #${t} has witnessUtxo but non-segwit script: ` +
                  c.toString("hex"),
              );
            (n ||
              !1 === r.__UNSAFE_SIGN_NONSEGWIT ||
              console.warn(
                "Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as the old TransactionBuilder class when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************",
              ),
              (u = s.hashForSignature(t, c, o)));
          }
          return { script: c, sighashType: o, hash: u };
        }
        function V(t, e, r) {
          let n;
          switch (e) {
            case "multisig":
              const e = $(t, r);
              n = h.p2ms({ output: t, signatures: e });
              break;
            case "pubkey":
              n = h.p2pk({ output: t, signature: r[0].signature });
              break;
            case "pubkeyhash":
              n = h.p2pkh({
                output: t,
                pubkey: r[0].pubkey,
                signature: r[0].signature,
              });
              break;
            case "witnesspubkeyhash":
              n = h.p2wpkh({
                output: t,
                pubkey: r[0].pubkey,
                signature: r[0].signature,
              });
              break;
          }
          return n;
        }
        function j(e) {
          const r = (e.finalScriptSig && f.decompile(e.finalScriptSig)) || [],
            n =
              (e.finalScriptWitness && f.decompile(e.finalScriptWitness)) || [];
          return r
            .concat(n)
            .filter((e) => t.isBuffer(e) && f.isCanonicalScriptSignature(e))
            .map((t) => ({ signature: t }));
        }
        function G(t, e, r) {
          const n = r.__TX,
            i = { script: null, isSegwit: !1, isP2SH: !1, isP2WSH: !1 };
          if (
            ((i.isP2SH = !!e.redeemScript),
            (i.isP2WSH = !!e.witnessScript),
            e.witnessScript)
          )
            i.script = e.witnessScript;
          else if (e.redeemScript) i.script = e.redeemScript;
          else if (e.nonWitnessUtxo) {
            const s = tt(r, e, t),
              o = n.ins[t].index;
            i.script = s.outs[o].script;
          } else e.witnessUtxo && (i.script = e.witnessUtxo.script);
          return ((e.witnessScript || P(i.script)) && (i.isSegwit = !0), i);
        }
        function X(t, e, r) {
          const n = s.checkForInput(e, t);
          if (!n.bip32Derivation || 0 === n.bip32Derivation.length)
            throw new Error("Need bip32Derivation to sign with HD");
          const i = n.bip32Derivation
            .map((t) =>
              t.masterFingerprint.equals(r.fingerprint) ? t : void 0,
            )
            .filter((t) => !!t);
          if (0 === i.length)
            throw new Error(
              "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint",
            );
          const o = i.map((t) => {
            const e = r.derivePath(t.path);
            if (!t.pubkey.equals(e.publicKey))
              throw new Error("pubkey did not match bip32Derivation");
            return e;
          });
          return o;
        }
        function $(t, e) {
          const r = h.p2ms({ output: t });
          return r.pubkeys
            .map(
              (t) => (e.filter((e) => e.pubkey.equals(t))[0] || {}).signature,
            )
            .filter((t) => !!t);
        }
        function Y(t) {
          let e = 0;
          function r(r) {
            return ((e += r), t.slice(e - r, e));
          }
          function n() {
            const r = i.decode(t, e);
            return ((e += i.decode.bytes), r);
          }
          function s() {
            return r(n());
          }
          function o() {
            const t = n(),
              e = [];
            for (let r = 0; r < t; r++) e.push(s());
            return e;
          }
          return o();
        }
        function Q(t) {
          let e =
            t & l.Transaction.SIGHASH_ANYONECANPAY
              ? "SIGHASH_ANYONECANPAY | "
              : "";
          const r = 31 & t;
          switch (r) {
            case l.Transaction.SIGHASH_ALL:
              e += "SIGHASH_ALL";
              break;
            case l.Transaction.SIGHASH_SINGLE:
              e += "SIGHASH_SINGLE";
              break;
            case l.Transaction.SIGHASH_NONE:
              e += "SIGHASH_NONE";
              break;
          }
          return e;
        }
        function J(e) {
          let r = t.allocUnsafe(0);
          function n(e) {
            r = t.concat([r, t.from(e)]);
          }
          function s(e) {
            const n = r.length,
              s = i.encodingLength(e);
            ((r = t.concat([r, t.allocUnsafe(s)])), i.encode(e, r, n));
          }
          function o(t) {
            (s(t.length), n(t));
          }
          function u(t) {
            (s(t.length), t.forEach(o));
          }
          return (u(e), r);
        }
        function z(t, e, r) {
          t.__NON_WITNESS_UTXO_BUF_CACHE[r] = e.nonWitnessUtxo;
          const n = l.Transaction.fromBuffer(e.nonWitnessUtxo);
          t.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
          const i = t,
            s = r;
          (delete e.nonWitnessUtxo,
            Object.defineProperty(e, "nonWitnessUtxo", {
              enumerable: !0,
              get() {
                const t = i.__NON_WITNESS_UTXO_BUF_CACHE[s],
                  e = i.__NON_WITNESS_UTXO_TX_CACHE[s];
                if (void 0 !== t) return t;
                {
                  const t = e.toBuffer();
                  return ((i.__NON_WITNESS_UTXO_BUF_CACHE[s] = t), t);
                }
              },
              set(t) {
                i.__NON_WITNESS_UTXO_BUF_CACHE[s] = t;
              },
            }));
        }
        function Z(t, e, r, n) {
          let i = 0;
          t.forEach((t, s) => {
            if (
              (n && t.finalScriptSig && (e.ins[s].script = t.finalScriptSig),
              n &&
                t.finalScriptWitness &&
                (e.ins[s].witness = Y(t.finalScriptWitness)),
              t.witnessUtxo)
            )
              i += t.witnessUtxo.value;
            else if (t.nonWitnessUtxo) {
              const n = tt(r, t, s),
                o = e.ins[s].index,
                u = n.outs[o];
              i += u.value;
            }
          });
          const s = e.outs.reduce((t, e) => t + e.value, 0),
            o = i - s;
          if (o < 0) throw new Error("Outputs are spending more than Inputs");
          const u = e.virtualSize();
          ((r.__FEE = o),
            (r.__EXTRACTED_TX = e),
            (r.__FEE_RATE = Math.floor(o / u)));
        }
        function tt(t, e, r) {
          const n = t.__NON_WITNESS_UTXO_TX_CACHE;
          return (n[r] || z(t, e, r), n[r]);
        }
        function et(t, e, r) {
          if (void 0 !== e.witnessUtxo) return e.witnessUtxo.script;
          if (void 0 !== e.nonWitnessUtxo) {
            const n = tt(r, e, t);
            return n.outs[r.__TX.ins[t].index].script;
          }
          throw new Error("Can't find pubkey in input without Utxo data");
        }
        function rt(t, e, r, n) {
          const i = et(r, e, n),
            { meaningfulScript: s } = at(
              i,
              r,
              "input",
              e.redeemScript,
              e.witnessScript,
            );
          return pt(t, s);
        }
        function nt(t, e, r, n) {
          const i = n.__TX.outs[r].script,
            { meaningfulScript: s } = at(
              i,
              r,
              "output",
              e.redeemScript,
              e.witnessScript,
            );
          return pt(t, s);
        }
        function it(e) {
          if (!e) return;
          const r = f.decompile(e);
          if (!r) return;
          const n = r[r.length - 1];
          if (!t.isBuffer(n) || ot(n) || ut(n)) return;
          const i = f.decompile(n);
          return i ? n : void 0;
        }
        function st(t) {
          if (!t) return;
          const e = Y(t),
            r = e[e.length - 1];
          if (ot(r)) return;
          const n = f.decompile(r);
          return n ? r : void 0;
        }
        function ot(t) {
          return 33 === t.length && f.isCanonicalPubKey(t);
        }
        function ut(t) {
          return f.isCanonicalScriptSignature(t);
        }
        function at(t, e, r, n, i) {
          const s = T(t),
            o = s && n && v(n),
            u = v(t);
          if (s && void 0 === n)
            throw new Error("scriptPubkey is P2SH but redeemScript missing");
          if ((u || o) && void 0 === i)
            throw new Error(
              "scriptPubkey or redeemScript is P2WSH but witnessScript missing",
            );
          let a;
          return (
            o
              ? ((a = i), W(e, t, n, r), L(e, n, i, r), ct(a))
              : u
                ? ((a = i), L(e, t, i, r), ct(a))
                : s
                  ? ((a = n), W(e, t, n, r))
                  : (a = t),
            {
              meaningfulScript: a,
              type: o ? "p2sh-p2wsh" : s ? "p2sh" : u ? "p2wsh" : "raw",
            }
          );
        }
        function ct(t) {
          if (P(t) || T(t))
            throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
        }
        function pt(t, e) {
          const r = a.hash160(t),
            n = f.decompile(e);
          if (null === n) throw new Error("Unknown script error");
          return n.some(
            (e) => "number" !== typeof e && (e.equals(t) || e.equals(r)),
          );
        }
        function ht(t) {
          return P(t)
            ? "witnesspubkeyhash"
            : E(t)
              ? "pubkeyhash"
              : b(t)
                ? "multisig"
                : O(t)
                  ? "pubkey"
                  : "nonstandard";
        }
        function ft(t) {
          return [...Array(t).keys()];
        }
      }).call(this, r(2).Buffer);
    },
    3730: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(3107),
          i = r(2995),
          s = r(3731),
          o = r(2832),
          ECPair = r(3109),
          u = r(2803),
          a = r(2994),
          c = r(2760),
          p = r(2760),
          h = r(2996),
          f = r(2822),
          l = r(2758),
          d = s.types,
          w = new Set([
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
        function m(t, e, r) {
          try {
            l(t, e);
          } catch (n) {
            throw new Error(r);
          }
        }
        function _(t) {
          return "string" === typeof t || t instanceof String;
        }
        function y(t) {
          return t instanceof h.Transaction;
        }
        class TransactionBuilder {
          constructor(t, e) {
            (void 0 === t && (t = u.bitcoin),
              void 0 === e && (e = 2500),
              (this.network = t),
              (this.maximumFeeRate = e),
              (this.__PREV_TX_SET = {}),
              (this.__INPUTS = []),
              (this.__TX = new h.Transaction()),
              (this.__TX.version = 2),
              (this.__USE_LOW_R = !1),
              console.warn(
                "Deprecation Warning: TransactionBuilder will be removed in the future. (v6.x.x or later) Please use the Psbt class instead. Examples of usage are available in the transactions-psbt.js integration test file on our Github. A high level explanation is available in the psbt.ts and psbt.js files as well.",
              ));
          }
          static fromTransaction(t, e) {
            const r = new TransactionBuilder(e);
            return (
              r.setVersion(t.version),
              r.setLockTime(t.locktime),
              t.outs.forEach((t) => {
                r.addOutput(t.script, t.value);
              }),
              t.ins.forEach((t) => {
                r.__addInputUnsafe(t.hash, t.index, {
                  sequence: t.sequence,
                  script: t.script,
                  witness: t.witness,
                });
              }),
              r.__INPUTS.forEach((e, r) => {
                S(e, t, r);
              }),
              r
            );
          }
          setLowR(t) {
            return (
              l(l.maybe(l.Boolean), t),
              void 0 === t && (t = !0),
              (this.__USE_LOW_R = t),
              t
            );
          }
          setLockTime(t) {
            if (
              (l(f.UInt32, t),
              this.__INPUTS.some(
                (t) => !!t.signatures && t.signatures.some((t) => void 0 !== t),
              ))
            )
              throw new Error("No, this would invalidate signatures");
            this.__TX.locktime = t;
          }
          setVersion(t) {
            (l(f.UInt32, t), (this.__TX.version = t));
          }
          addInput(e, r, n, s) {
            if (!this.__canModifyInputs())
              throw new Error("No, this would invalidate signatures");
            let o;
            if (_(e)) e = i.reverseBuffer(t.from(e, "hex"));
            else if (y(e)) {
              const t = e.outs[r];
              ((s = t.script), (o = t.value), (e = e.getHash(!1)));
            }
            return this.__addInputUnsafe(e, r, {
              sequence: n,
              prevOutScript: s,
              value: o,
            });
          }
          addOutput(t, e) {
            if (!this.__canModifyOutputs())
              throw new Error("No, this would invalidate signatures");
            return (
              "string" === typeof t && (t = n.toOutputScript(t, this.network)),
              this.__TX.addOutput(t, e)
            );
          }
          build() {
            return this.__build(!1);
          }
          buildIncomplete() {
            return this.__build(!0);
          }
          sign(t, e, r, n, i, s) {
            k(
              I(
                this.network,
                this.__INPUTS,
                this.__needsOutputs.bind(this),
                this.__TX,
                t,
                e,
                r,
                n,
                i,
                s,
                this.__USE_LOW_R,
              ),
            );
          }
          __addInputUnsafe(t, e, r) {
            if (h.Transaction.isCoinbaseHash(t))
              throw new Error("coinbase inputs not supported");
            const n = t.toString("hex") + ":" + e;
            if (void 0 !== this.__PREV_TX_SET[n])
              throw new Error("Duplicate TxOut: " + n);
            let i = {};
            if (
              (void 0 !== r.script && (i = g(r.script, r.witness || [])),
              void 0 !== r.value && (i.value = r.value),
              !i.prevOutScript && r.prevOutScript)
            ) {
              let t;
              if (!i.pubkeys && !i.signatures) {
                const e = b(r.prevOutScript);
                (e.pubkeys &&
                  ((i.pubkeys = e.pubkeys), (i.signatures = e.signatures)),
                  (t = e.type));
              }
              ((i.prevOutScript = r.prevOutScript),
                (i.prevOutType = t || s.output(r.prevOutScript)));
            }
            const o = this.__TX.addInput(t, e, r.sequence, r.scriptSig);
            return ((this.__INPUTS[o] = i), (this.__PREV_TX_SET[n] = !0), o);
          }
          __build(t) {
            if (!t) {
              if (!this.__TX.ins.length)
                throw new Error("Transaction has no inputs");
              if (!this.__TX.outs.length)
                throw new Error("Transaction has no outputs");
            }
            const e = this.__TX.clone();
            if (
              (this.__INPUTS.forEach((r, n) => {
                if (!r.prevOutType && !t)
                  throw new Error("Transaction is not complete");
                const i = E(r.prevOutType, r, t);
                if (i)
                  (e.setInputScript(n, i.input), e.setWitness(n, i.witness));
                else {
                  if (!t && r.prevOutType === d.NONSTANDARD)
                    throw new Error("Unknown input type");
                  if (!t) throw new Error("Not enough information");
                }
              }),
              !t && this.__overMaximumFees(e.virtualSize()))
            )
              throw new Error("Transaction has absurd fees");
            return e;
          }
          __canModifyInputs() {
            return this.__INPUTS.every(
              (t) =>
                !t.signatures ||
                t.signatures.every((t) => {
                  if (!t) return !0;
                  const e = v(t);
                  return 0 !== (e & h.Transaction.SIGHASH_ANYONECANPAY);
                }),
            );
          }
          __needsOutputs(t) {
            return t === h.Transaction.SIGHASH_ALL
              ? 0 === this.__TX.outs.length
              : 0 === this.__TX.outs.length &&
                  this.__INPUTS.some(
                    (t) =>
                      !!t.signatures &&
                      t.signatures.some((t) => {
                        if (!t) return !1;
                        const e = v(t);
                        return !(e & h.Transaction.SIGHASH_NONE);
                      }),
                  );
          }
          __canModifyOutputs() {
            const t = this.__TX.ins.length,
              e = this.__TX.outs.length;
            return this.__INPUTS.every(
              (r) =>
                void 0 === r.signatures ||
                r.signatures.every((r) => {
                  if (!r) return !0;
                  const n = v(r),
                    i = 31 & n;
                  return (
                    i === h.Transaction.SIGHASH_NONE ||
                    (i === h.Transaction.SIGHASH_SINGLE && t <= e)
                  );
                }),
            );
          }
          __overMaximumFees(t) {
            const e = this.__INPUTS.reduce((t, e) => t + (e.value >>> 0), 0),
              r = this.__TX.outs.reduce((t, e) => t + e.value, 0),
              n = e - r,
              i = n / t;
            return i > this.maximumFeeRate;
          }
        }
        function g(t, e, r, n) {
          if (0 === t.length && 0 === e.length) return {};
          if (!r) {
            let n = s.input(t, !0),
              i = s.witness(e, !0);
            (n === d.NONSTANDARD && (n = void 0),
              i === d.NONSTANDARD && (i = void 0),
              (r = n || i));
          }
          switch (r) {
            case d.P2WPKH: {
              const {
                output: t,
                pubkey: r,
                signature: n,
              } = a.p2wpkh({ witness: e });
              return {
                prevOutScript: t,
                prevOutType: d.P2WPKH,
                pubkeys: [r],
                signatures: [n],
              };
            }
            case d.P2PKH: {
              const {
                output: e,
                pubkey: r,
                signature: n,
              } = a.p2pkh({ input: t });
              return {
                prevOutScript: e,
                prevOutType: d.P2PKH,
                pubkeys: [r],
                signatures: [n],
              };
            }
            case d.P2PK: {
              const { signature: e } = a.p2pk({ input: t });
              return {
                prevOutType: d.P2PK,
                pubkeys: [void 0],
                signatures: [e],
              };
            }
            case d.P2MS: {
              const {
                m: e,
                pubkeys: r,
                signatures: i,
              } = a.p2ms({ input: t, output: n }, { allowIncomplete: !0 });
              return {
                prevOutType: d.P2MS,
                pubkeys: r,
                signatures: i,
                maxSignatures: e,
              };
            }
          }
          if (r === d.P2SH) {
            const { output: r, redeem: n } = a.p2sh({ input: t, witness: e }),
              i = s.output(n.output),
              o = g(n.input, n.witness, i, n.output);
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
            const { output: r, redeem: n } = a.p2wsh({ input: t, witness: e }),
              i = s.output(n.output);
            let o;
            return (
              (o =
                i === d.P2WPKH
                  ? g(n.input, n.witness, i)
                  : g(c.compile(n.witness), [], i, n.output)),
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
          return { prevOutType: d.NONSTANDARD, prevOutScript: t };
        }
        function S(t, e, r) {
          if (t.redeemScriptType !== d.P2MS || !t.redeemScript) return;
          if (t.pubkeys.length === t.signatures.length) return;
          const n = t.signatures.concat();
          t.signatures = t.pubkeys.map((i) => {
            const s = ECPair.fromPublicKey(i);
            let o;
            return (
              n.some((i, u) => {
                if (!i) return !1;
                const a = c.signature.decode(i),
                  p = e.hashForSignature(r, t.redeemScript, a.hashType);
                return (
                  !!s.verify(p, a.signature) && ((n[u] = void 0), (o = i), !0)
                );
              }),
              o
            );
          });
        }
        function b(t, e) {
          l(f.Buffer, t);
          const r = s.output(t);
          switch (r) {
            case d.P2PKH: {
              if (!e) return { type: r };
              const n = a.p2pkh({ output: t }).hash,
                i = o.hash160(e);
              return n.equals(i)
                ? { type: r, pubkeys: [e], signatures: [void 0] }
                : { type: r };
            }
            case d.P2WPKH: {
              if (!e) return { type: r };
              const n = a.p2wpkh({ output: t }).hash,
                i = o.hash160(e);
              return n.equals(i)
                ? { type: r, pubkeys: [e], signatures: [void 0] }
                : { type: r };
            }
            case d.P2PK: {
              const e = a.p2pk({ output: t });
              return { type: r, pubkeys: [e.pubkey], signatures: [void 0] };
            }
            case d.P2MS: {
              const e = a.p2ms({ output: t });
              return {
                type: r,
                pubkeys: e.pubkeys,
                signatures: e.pubkeys.map(() => {}),
                maxSignatures: e.m,
              };
            }
          }
          return { type: r };
        }
        function O(t, e, r, n) {
          if (r && n) {
            const i = a.p2wsh({ redeem: { output: n } }),
              s = a.p2wsh({ output: r }),
              o = a.p2sh({ redeem: { output: r } }),
              u = a.p2sh({ redeem: i });
            if (!i.hash.equals(s.hash))
              throw new Error("Witness script inconsistent with prevOutScript");
            if (!o.hash.equals(u.hash))
              throw new Error("Redeem script inconsistent with prevOutScript");
            const p = b(i.redeem.output, e);
            if (!p.pubkeys)
              throw new Error(
                p.type + " not supported as witnessScript (" + c.toASM(n) + ")",
              );
            t.signatures &&
              t.signatures.some((t) => void 0 !== t) &&
              (p.signatures = t.signatures);
            const h = n;
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
              signScript: h,
              signType: p.type,
              pubkeys: p.pubkeys,
              signatures: p.signatures,
              maxSignatures: p.maxSignatures,
            };
          }
          if (r) {
            const n = a.p2sh({ redeem: { output: r } });
            if (t.prevOutScript) {
              let e;
              try {
                e = a.p2sh({ output: t.prevOutScript });
              } catch (s) {
                throw new Error("PrevOutScript must be P2SH");
              }
              if (!n.hash.equals(e.hash))
                throw new Error(
                  "Redeem script inconsistent with prevOutScript",
                );
            }
            const i = b(n.redeem.output, e);
            if (!i.pubkeys)
              throw new Error(
                i.type + " not supported as redeemScript (" + c.toASM(r) + ")",
              );
            t.signatures &&
              t.signatures.some((t) => void 0 !== t) &&
              (i.signatures = t.signatures);
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
            if (t.prevOutScript) {
              const e = a.p2wsh({ output: t.prevOutScript });
              if (!r.hash.equals(e.hash))
                throw new Error(
                  "Witness script inconsistent with prevOutScript",
                );
            }
            const i = b(r.redeem.output, e);
            if (!i.pubkeys)
              throw new Error(
                i.type + " not supported as witnessScript (" + c.toASM(n) + ")",
              );
            t.signatures &&
              t.signatures.some((t) => void 0 !== t) &&
              (i.signatures = t.signatures);
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
          if (t.prevOutType && t.prevOutScript) {
            if (t.prevOutType === d.P2SH)
              throw new Error(
                "PrevOutScript is " + t.prevOutType + ", requires redeemScript",
              );
            if (t.prevOutType === d.P2WSH)
              throw new Error(
                "PrevOutScript is " +
                  t.prevOutType +
                  ", requires witnessScript",
              );
            if (!t.prevOutScript) throw new Error("PrevOutScript is missing");
            const r = b(t.prevOutScript, e);
            if (!r.pubkeys)
              throw new Error(
                r.type + " not supported (" + c.toASM(t.prevOutScript) + ")",
              );
            t.signatures &&
              t.signatures.some((t) => void 0 !== t) &&
              (r.signatures = t.signatures);
            let n = t.prevOutScript;
            return (
              r.type === d.P2WPKH &&
                (n = a.p2pkh({ pubkey: r.pubkeys[0] }).output),
              {
                prevOutType: r.type,
                prevOutScript: t.prevOutScript,
                hasWitness: r.type === d.P2WPKH,
                signScript: n,
                signType: r.type,
                pubkeys: r.pubkeys,
                signatures: r.signatures,
                maxSignatures: r.maxSignatures,
              }
            );
          }
          const i = a.p2pkh({ pubkey: e }).output;
          return {
            prevOutType: d.P2PKH,
            prevOutScript: i,
            hasWitness: !1,
            signScript: i,
            signType: d.P2PKH,
            pubkeys: [e],
            signatures: [void 0],
          };
        }
        function E(t, e, r) {
          const n = e.pubkeys || [];
          let i = e.signatures || [];
          switch (t) {
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
              const t = e.maxSignatures;
              i = r ? i.map((t) => t || p.OPS.OP_0) : i.filter((t) => t);
              const s = !r || t === i.length;
              return a.p2ms(
                { m: t, pubkeys: n, signatures: i },
                { allowIncomplete: r, validate: s },
              );
            }
            case d.P2SH: {
              const t = E(e.redeemScriptType, e, r);
              if (!t) return;
              return a.p2sh({
                redeem: {
                  output: t.output || e.redeemScript,
                  input: t.input,
                  witness: t.witness,
                },
              });
            }
            case d.P2WSH: {
              const t = E(e.witnessScriptType, e, r);
              if (!t) return;
              return a.p2wsh({
                redeem: {
                  output: e.witnessScript,
                  input: t.input,
                  witness: t.witness,
                },
              });
            }
          }
        }
        function P(t) {
          return (
            void 0 !== t.signScript &&
            void 0 !== t.signType &&
            void 0 !== t.pubkeys &&
            void 0 !== t.signatures &&
            t.signatures.length === t.pubkeys.length &&
            t.pubkeys.length > 0 &&
            (!1 === t.hasWitness || void 0 !== t.value)
          );
        }
        function v(t) {
          return t.readUInt8(t.length - 1);
        }
        function T(t, e) {
          if (!w.has(e.prevOutScriptType))
            throw new TypeError(
              `Unknown prevOutScriptType "${e.prevOutScriptType}"`,
            );
          (m(
            l.Number,
            e.vin,
            "sign must include vin parameter as Number (input index)",
          ),
            m(
              f.Signer,
              e.keyPair,
              "sign must include keyPair parameter as Signer interface",
            ),
            m(
              l.maybe(l.Number),
              e.hashType,
              "sign hashType parameter must be a number",
            ));
          const r = (t[e.vin] || []).prevOutType,
            n = e.prevOutScriptType;
          switch (n) {
            case "p2pkh":
              if (r && "pubkeyhash" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type p2pkh: ${r}`,
                );
              (m(
                l.value(void 0),
                e.witnessScript,
                n + " requires NO witnessScript",
              ),
                m(
                  l.value(void 0),
                  e.redeemScript,
                  n + " requires NO redeemScript",
                ),
                m(
                  l.value(void 0),
                  e.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2pk":
              if (r && "pubkey" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type p2pk: ${r}`,
                );
              (m(
                l.value(void 0),
                e.witnessScript,
                n + " requires NO witnessScript",
              ),
                m(
                  l.value(void 0),
                  e.redeemScript,
                  n + " requires NO redeemScript",
                ),
                m(
                  l.value(void 0),
                  e.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2wpkh":
              if (r && "witnesspubkeyhash" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type p2wpkh: ${r}`,
                );
              (m(
                l.value(void 0),
                e.witnessScript,
                n + " requires NO witnessScript",
              ),
                m(
                  l.value(void 0),
                  e.redeemScript,
                  n + " requires NO redeemScript",
                ),
                m(f.Satoshi, e.witnessValue, n + " requires witnessValue"));
              break;
            case "p2ms":
              if (r && "multisig" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type p2ms: ${r}`,
                );
              (m(
                l.value(void 0),
                e.witnessScript,
                n + " requires NO witnessScript",
              ),
                m(
                  l.value(void 0),
                  e.redeemScript,
                  n + " requires NO redeemScript",
                ),
                m(
                  l.value(void 0),
                  e.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2sh-p2wpkh":
              if (r && "scripthash" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type p2sh-p2wpkh: ${r}`,
                );
              (m(
                l.value(void 0),
                e.witnessScript,
                n + " requires NO witnessScript",
              ),
                m(l.Buffer, e.redeemScript, n + " requires redeemScript"),
                m(f.Satoshi, e.witnessValue, n + " requires witnessValue"));
              break;
            case "p2sh-p2ms":
            case "p2sh-p2pk":
            case "p2sh-p2pkh":
              if (r && "scripthash" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type ${n}: ${r}`,
                );
              (m(
                l.value(void 0),
                e.witnessScript,
                n + " requires NO witnessScript",
              ),
                m(l.Buffer, e.redeemScript, n + " requires redeemScript"),
                m(
                  l.value(void 0),
                  e.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2wsh-p2ms":
            case "p2wsh-p2pk":
            case "p2wsh-p2pkh":
              if (r && "witnessscripthash" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type ${n}: ${r}`,
                );
              (m(l.Buffer, e.witnessScript, n + " requires witnessScript"),
                m(
                  l.value(void 0),
                  e.redeemScript,
                  n + " requires NO redeemScript",
                ),
                m(f.Satoshi, e.witnessValue, n + " requires witnessValue"));
              break;
            case "p2sh-p2wsh-p2ms":
            case "p2sh-p2wsh-p2pk":
            case "p2sh-p2wsh-p2pkh":
              if (r && "scripthash" !== r)
                throw new TypeError(
                  `input #${e.vin} is not of type ${n}: ${r}`,
                );
              (m(l.Buffer, e.witnessScript, n + " requires witnessScript"),
                m(l.Buffer, e.redeemScript, n + " requires witnessScript"),
                m(f.Satoshi, e.witnessValue, n + " requires witnessScript"));
              break;
          }
        }
        function k(t) {
          let {
              input: e,
              ourPubKey: r,
              keyPair: n,
              signatureHash: i,
              hashType: s,
              useLowR: o,
            } = t,
            u = !1;
          for (const [a, p] of e.pubkeys.entries()) {
            if (!r.equals(p)) continue;
            if (e.signatures[a]) throw new Error("Signature already exists");
            if (33 !== r.length && e.hasWitness)
              throw new Error(
                "BIP143 rejects uncompressed public keys in P2WPKH or P2WSH",
              );
            const t = n.sign(i, o);
            ((e.signatures[a] = c.signature.encode(t, s)), (u = !0));
          }
          if (!u) throw new Error("Key pair cannot sign for this input");
        }
        function I(t, e, r, n, i, s, o, u, a, c, p) {
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
            (T(e, i),
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
          if (s.network && s.network !== t)
            throw new TypeError("Inconsistent network");
          if (!e[d]) throw new Error("No input at index: " + d);
          if (((u = u || h.Transaction.SIGHASH_ALL), r(u)))
            throw new Error("Transaction needs outputs");
          const w = e[d];
          if (void 0 !== w.redeemScript && o && !w.redeemScript.equals(o))
            throw new Error("Inconsistent redeemScript");
          const m = s.publicKey || (s.getPublicKey && s.getPublicKey());
          if (!P(w)) {
            if (void 0 !== a) {
              if (void 0 !== w.value && w.value !== a)
                throw new Error("Input did not match witnessValue");
              (l(f.Satoshi, a), (w.value = a));
            }
            if (!P(w)) {
              const t = O(w, m, o, c);
              Object.assign(w, t);
            }
            if (!P(w)) throw Error(w.prevOutType + " not supported");
          }
          let _;
          return (
            (_ = w.hasWitness
              ? n.hashForWitnessV0(d, w.signScript, w.value, u)
              : n.hashForSignature(d, w.signScript, u)),
            {
              input: w,
              ourPubKey: m,
              keyPair: s,
              signatureHash: _,
              hashType: u,
              useLowR: !!p,
            }
          );
        }
        e.TransactionBuilder = TransactionBuilder;
      }).call(this, r(2).Buffer);
    },
    3731: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(3113),
        s = r(3734),
        o = r(3114),
        u = r(3115),
        a = r(3739),
        c = r(3742),
        p = r(3744),
        h = r(3746),
        f = {
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
      function l(t) {
        if (p.output.check(t)) return f.P2WPKH;
        if (h.output.check(t)) return f.P2WSH;
        if (u.output.check(t)) return f.P2PKH;
        if (a.output.check(t)) return f.P2SH;
        const e = n.decompile(t);
        if (!e) throw new TypeError("Invalid script");
        return i.output.check(e)
          ? f.P2MS
          : o.output.check(e)
            ? f.P2PK
            : c.output.check(e)
              ? f.WITNESS_COMMITMENT
              : s.output.check(e)
                ? f.NULLDATA
                : f.NONSTANDARD;
      }
      function d(t, e) {
        const r = n.decompile(t);
        if (!r) throw new TypeError("Invalid script");
        return u.input.check(r)
          ? f.P2PKH
          : a.input.check(r, e)
            ? f.P2SH
            : i.input.check(r, e)
              ? f.P2MS
              : o.input.check(r)
                ? f.P2PK
                : f.NONSTANDARD;
      }
      function w(t, e) {
        const r = n.decompile(t);
        if (!r) throw new TypeError("Invalid script");
        return p.input.check(r)
          ? f.P2WPKH
          : h.input.check(r, e)
            ? f.P2WSH
            : f.NONSTANDARD;
      }
      ((e.types = f), (e.output = l), (e.input = d), (e.witness = w));
    },
    3732: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(t) {
        return t === i.OPS.OP_0 || n.isCanonicalScriptSignature(t);
      }
      function o(t, e) {
        const r = n.decompile(t);
        return (
          !(r.length < 2) &&
          r[0] === i.OPS.OP_0 &&
          (e
            ? r.slice(1).every(s)
            : r.slice(1).every(n.isCanonicalScriptSignature))
        );
      }
      ((e.check = o), (o.toJSON = () => "multisig input"));
    },
    3733: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760),
        s = r(2822),
        o = i.OPS.OP_RESERVED;
      function u(t, e) {
        const r = n.decompile(t);
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
        if (e) return !0;
        const c = r.slice(1, -2);
        return c.every(n.isCanonicalPubKey);
      }
      ((e.check = u), (u.toJSON = () => "multi-sig output"));
    },
    3734: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = n.OPS;
      function s(t) {
        const e = n.compile(t);
        return e.length > 1 && e[0] === i.OP_RETURN;
      }
      ((e.check = s), (s.toJSON = () => "null data output"));
      const o = { check: s };
      e.output = o;
    },
    3735: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760);
      function i(t) {
        const e = n.decompile(t);
        return 1 === e.length && n.isCanonicalScriptSignature(e[0]);
      }
      ((e.check = i), (i.toJSON = () => "pubKey input"));
    },
    3736: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(t) {
        const e = n.decompile(t);
        return (
          2 === e.length &&
          n.isCanonicalPubKey(e[0]) &&
          e[1] === i.OPS.OP_CHECKSIG
        );
      }
      ((e.check = s), (s.toJSON = () => "pubKey output"));
    },
    3737: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760);
      function i(t) {
        const e = n.decompile(t);
        return (
          2 === e.length &&
          n.isCanonicalScriptSignature(e[0]) &&
          n.isCanonicalPubKey(e[1])
        );
      }
      ((e.check = i), (i.toJSON = () => "pubKeyHash input"));
    },
    3738: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(t) {
        const e = n.compile(t);
        return (
          25 === e.length &&
          e[0] === i.OPS.OP_DUP &&
          e[1] === i.OPS.OP_HASH160 &&
          20 === e[2] &&
          e[23] === i.OPS.OP_EQUALVERIFY &&
          e[24] === i.OPS.OP_CHECKSIG
        );
      }
      ((e.check = s), (s.toJSON = () => "pubKeyHash output"));
    },
    3739: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3740);
      e.input = n;
      const i = r(3741);
      e.output = i;
    },
    3740: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2760),
          i = r(3113),
          s = r(3114),
          o = r(3115),
          u = r(3310),
          a = r(3311);
        function c(e, r) {
          const c = n.decompile(e);
          if (c.length < 1) return !1;
          const p = c[c.length - 1];
          if (!t.isBuffer(p)) return !1;
          const h = n.decompile(n.compile(c.slice(0, -1))),
            f = n.decompile(p);
          return (
            !!f &&
            !!n.isPushOnly(h) &&
            (1 === c.length
              ? a.check(f) || u.check(f)
              : !(!o.input.check(h) || !o.output.check(f)) ||
                !(!i.input.check(h, r) || !i.output.check(f)) ||
                !(!s.input.check(h) || !s.output.check(f)))
          );
        }
        ((e.check = c), (c.toJSON = () => "scriptHash input"));
      }).call(this, r(2).Buffer);
    },
    3741: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(t) {
        const e = n.compile(t);
        return (
          23 === e.length &&
          e[0] === i.OPS.OP_HASH160 &&
          20 === e[1] &&
          e[22] === i.OPS.OP_EQUAL
        );
      }
      ((e.check = s), (s.toJSON = () => "scriptHash output"));
    },
    3742: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3743);
      e.output = n;
    },
    3743: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2760),
          i = r(2760),
          s = r(2822),
          o = r(2758),
          u = t.from("aa21a9ed", "hex");
        function a(t) {
          const e = n.compile(t);
          return (
            e.length > 37 &&
            e[0] === i.OPS.OP_RETURN &&
            36 === e[1] &&
            e.slice(2, 6).equals(u)
          );
        }
        function c(e) {
          o(s.Hash256bit, e);
          const r = t.allocUnsafe(36);
          return (u.copy(r, 0), e.copy(r, 4), n.compile([i.OPS.OP_RETURN, r]));
        }
        function p(t) {
          return (o(a, t), n.decompile(t)[1].slice(4, 36));
        }
        ((e.check = a),
          (a.toJSON = () => "Witness commitment output"),
          (e.encode = c),
          (e.decode = p));
      }).call(this, r(2).Buffer);
    },
    3744: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3745);
      e.input = n;
      const i = r(3310);
      e.output = i;
    },
    3745: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(2760);
      function i(t) {
        return n.isCanonicalPubKey(t) && 33 === t.length;
      }
      function s(t) {
        const e = n.decompile(t);
        return 2 === e.length && n.isCanonicalScriptSignature(e[0]) && i(e[1]);
      }
      ((e.check = s), (s.toJSON = () => "witnessPubKeyHash input"));
    },
    3746: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(3747);
      e.input = n;
      const i = r(3311);
      e.output = i;
    },
    3747: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(2760),
          i = r(2758),
          s = r(3113),
          o = r(3114),
          u = r(3115);
        function a(e, r) {
          if ((i(i.Array, e), e.length < 1)) return !1;
          const a = e[e.length - 1];
          if (!t.isBuffer(a)) return !1;
          const c = n.decompile(a);
          if (!c || 0 === c.length) return !1;
          const p = n.compile(e.slice(0, -1));
          return (
            !(!u.input.check(p) || !u.output.check(c)) ||
            !(!s.input.check(p, r) || !s.output.check(c)) ||
            !(!o.input.check(p) || !o.output.check(c))
          );
        }
        ((e.check = a), (a.toJSON = () => "witnessScriptHash input"));
      }).call(this, r(2).Buffer);
    },
  },
]);
