(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [143],
  {
    10466: function (t, e, r) {
      var i = r(3007),
        n = r(5565);
      for (var o in n) i[o] = n[o];
      t.exports = {
        bitgo: r(10482),
        bufferutils: r(4804),
        Block: r(10485),
        ECPair: r(4802),
        ECSignature: r(4803),
        HDNode: r(10487),
        Transaction: r(5571),
        TransactionBuilder: r(10488),
        address: r(5570),
        coins: r(4805),
        crypto: r(3945),
        networks: r(3608),
        opcodes: r(2771),
        script: i,
      };
    },
    10467: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(3007),
        o = r(6666),
        s = r(2758),
        f = r(2771);
      function u(t) {
        return t === f.OP_0 || n.isCanonicalSignature(t);
      }
      function a(t, e) {
        var r = n.decompile(t);
        return (
          !(r.length < 2) &&
          r[0] === f.OP_0 &&
          (e ? r.slice(1).every(u) : r.slice(1).every(n.isCanonicalSignature))
        );
      }
      a.toJSON = function () {
        return "multisig input";
      };
      var h = i.allocUnsafe(0);
      function c(t, e) {
        if ((s([u], t), e)) {
          var r = o.decode(e);
          if (t.length < r.m)
            throw new TypeError("Not enough signatures provided");
          if (t.length > r.pubKeys.length)
            throw new TypeError("Too many signatures provided");
        }
        return [].concat(
          h,
          t.map(function (t) {
            return t === f.OP_0 ? h : t;
          }),
        );
      }
      function A(t, e) {
        return n.compile(c(t, e));
      }
      function I(t, e) {
        return (s(a, t, e), t.slice(1));
      }
      function p(t, e) {
        var r = n.decompile(t);
        return I(r, e);
      }
      t.exports = {
        check: a,
        decode: p,
        decodeStack: I,
        encode: A,
        encodeStack: c,
      };
    },
    10468: function (t, e, r) {
      var i = r(3007),
        n = r(2985),
        o = r(2758),
        s = r(2771);
      function f(t) {
        var e = i.compile(t);
        return e.length > 1 && e[0] === s.OP_RETURN;
      }
      function u(t) {
        return (
          o(o.oneOf(n.Buffer, n.Array), t),
          i.compile([s.OP_RETURN].concat(t))
        );
      }
      function a(t) {
        o(f, t);
        var e = i.decompile(t);
        return (e.shift(), 1 === e.length ? e[0] : e);
      }
      ((f.toJSON = function () {
        return "null data output";
      }),
        (t.exports = { output: { check: f, decode: a, encode: u } }));
    },
    10469: function (t, e, r) {
      var i = r(3007),
        n = r(2758);
      function o(t) {
        var e = i.decompile(t);
        return 1 === e.length && i.isCanonicalSignature(e[0]);
      }
      function s(t) {
        return (n(i.isCanonicalSignature, t), [t]);
      }
      function f(t) {
        return i.compile(s(t));
      }
      function u(t) {
        return (n(o, t), t[0]);
      }
      function a(t) {
        var e = i.decompile(t);
        return u(e);
      }
      ((o.toJSON = function () {
        return "pubKey input";
      }),
        (t.exports = {
          check: o,
          decode: a,
          decodeStack: u,
          encode: f,
          encodeStack: s,
        }));
    },
    10470: function (t, e, r) {
      var i = r(3007),
        n = r(2758),
        o = r(2771);
      function s(t) {
        var e = i.decompile(t);
        return (
          2 === e.length && i.isCanonicalPubKey(e[0]) && e[1] === o.OP_CHECKSIG
        );
      }
      function f(t) {
        return (n(i.isCanonicalPubKey, t), i.compile([t, o.OP_CHECKSIG]));
      }
      function u(t) {
        var e = i.decompile(t);
        return (n(s, e), e[0]);
      }
      ((s.toJSON = function () {
        return "pubKey output";
      }),
        (t.exports = { check: s, decode: u, encode: f }));
    },
    10471: function (t, e, r) {
      var i = r(3007),
        n = r(2758);
      function o(t) {
        var e = i.decompile(t);
        return (
          2 === e.length &&
          i.isCanonicalSignature(e[0]) &&
          i.isCanonicalPubKey(e[1])
        );
      }
      function s(t, e) {
        return (
          n(
            { signature: i.isCanonicalSignature, pubKey: i.isCanonicalPubKey },
            { signature: t, pubKey: e },
          ),
          [t, e]
        );
      }
      function f(t, e) {
        return i.compile(s(t, e));
      }
      function u(t) {
        return (n(o, t), { signature: t[0], pubKey: t[1] });
      }
      function a(t) {
        var e = i.decompile(t);
        return u(e);
      }
      ((o.toJSON = function () {
        return "pubKeyHash input";
      }),
        (t.exports = {
          check: o,
          decode: a,
          decodeStack: u,
          encode: f,
          encodeStack: s,
        }));
    },
    10472: function (t, e, r) {
      var i = r(3007),
        n = r(2985),
        o = r(2758),
        s = r(2771);
      function f(t) {
        var e = i.compile(t);
        return (
          25 === e.length &&
          e[0] === s.OP_DUP &&
          e[1] === s.OP_HASH160 &&
          20 === e[2] &&
          e[23] === s.OP_EQUALVERIFY &&
          e[24] === s.OP_CHECKSIG
        );
      }
      function u(t) {
        return (
          o(n.Hash160bit, t),
          i.compile([
            s.OP_DUP,
            s.OP_HASH160,
            t,
            s.OP_EQUALVERIFY,
            s.OP_CHECKSIG,
          ])
        );
      }
      function a(t) {
        return (o(f, t), t.slice(3, 23));
      }
      ((f.toJSON = function () {
        return "pubKeyHash output";
      }),
        (t.exports = { check: f, decode: a, encode: u }));
    },
    10473: function (t, e, r) {
      t.exports = { input: r(10474), output: r(10475) };
    },
    10474: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(3007),
        o = r(2758),
        s = r(5566),
        f = r(5567),
        u = r(5568),
        a = r(6667),
        h = r(6668);
      function c(t, e) {
        var r = n.decompile(t);
        if (r.length < 1) return !1;
        var o = r[r.length - 1];
        if (!i.isBuffer(o)) return !1;
        var c = n.decompile(n.compile(r.slice(0, -1))),
          A = n.decompile(o);
        return (
          0 !== A.length &&
          !!n.isPushOnly(c) &&
          (1 === r.length
            ? h.check(A) || a.check(A)
            : !(!u.input.check(c) || !u.output.check(A)) ||
              !(!s.input.check(c, e) || !s.output.check(A)) ||
              !(!f.input.check(c) || !f.output.check(A)))
        );
      }
      function A(t, e) {
        var r = n.compile(e);
        return [].concat(t, r);
      }
      function I(t, e) {
        var r = n.decompile(t);
        return n.compile(A(r, e));
      }
      function p(t) {
        return (
          o(c, t),
          { redeemScriptStack: t.slice(0, -1), redeemScript: t[t.length - 1] }
        );
      }
      function l(t) {
        var e = n.decompile(t),
          r = p(e);
        return (
          (r.redeemScriptSig = n.compile(r.redeemScriptStack)),
          delete r.redeemScriptStack,
          r
        );
      }
      ((c.toJSON = function () {
        return "scriptHash input";
      }),
        (t.exports = {
          check: c,
          decode: l,
          decodeStack: p,
          encode: I,
          encodeStack: A,
        }));
    },
    10475: function (t, e, r) {
      var i = r(3007),
        n = r(2985),
        o = r(2758),
        s = r(2771);
      function f(t) {
        var e = i.compile(t);
        return (
          23 === e.length &&
          e[0] === s.OP_HASH160 &&
          20 === e[1] &&
          e[22] === s.OP_EQUAL
        );
      }
      function u(t) {
        return (o(n.Hash160bit, t), i.compile([s.OP_HASH160, t, s.OP_EQUAL]));
      }
      function a(t) {
        return (o(f, t), t.slice(2, 22));
      }
      ((f.toJSON = function () {
        return "scriptHash output";
      }),
        (t.exports = { check: f, decode: a, encode: u }));
    },
    10476: function (t, e, r) {
      t.exports = { input: r(10477), output: r(6667) };
    },
    10477: function (t, e, r) {
      var i = r(3007),
        n = r(2758);
      function o(t) {
        return i.isCanonicalPubKey(t) && 33 === t.length;
      }
      function s(t) {
        var e = i.decompile(t);
        return 2 === e.length && i.isCanonicalSignature(e[0]) && o(e[1]);
      }
      function f(t, e) {
        return (
          n(
            { signature: i.isCanonicalSignature, pubKey: o },
            { signature: t, pubKey: e },
          ),
          [t, e]
        );
      }
      function u(t) {
        return (n(s, t), { signature: t[0], pubKey: t[1] });
      }
      ((s.toJSON = function () {
        return "witnessPubKeyHash input";
      }),
        (t.exports = { check: s, decodeStack: u, encodeStack: f }));
    },
    10478: function (t, e, r) {
      t.exports = { input: r(10479), output: r(6668) };
    },
    10479: function (t, e, r) {
      (function (e) {
        var i = r(3007),
          n = r(2985),
          o = r(2758),
          s = r(5566),
          f = r(5567),
          u = r(5568);
        function a(t, r) {
          if ((o(n.Array, t), t.length < 1)) return !1;
          var a = t[t.length - 1];
          if (!e.isBuffer(a)) return !1;
          var h = i.decompile(a);
          if (0 === h.length) return !1;
          var c = i.compile(t.slice(0, -1));
          return (
            !(!u.input.check(c) || !u.output.check(h)) ||
            !(!s.input.check(c, r) || !s.output.check(h)) ||
            !(!f.input.check(c) || !f.output.check(h))
          );
        }
        function h(t, e) {
          return (
            o(
              { witnessData: [n.Buffer], witnessScript: n.Buffer },
              { witnessData: t, witnessScript: e },
            ),
            [].concat(t, e)
          );
        }
        function c(t) {
          return (
            o(a, t),
            { witnessData: t.slice(0, -1), witnessScript: t[t.length - 1] }
          );
        }
        ((a.toJSON = function () {
          return "witnessScriptHash input";
        }),
          (t.exports = { check: a, decodeStack: c, encodeStack: h }));
      }).call(this, r(2).Buffer);
    },
    10480: function (t, e, r) {
      t.exports = { output: r(10481) };
    },
    10481: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(3007),
        o = r(2985),
        s = r(2758),
        f = r(2771),
        u = i.from("aa21a9ed", "hex");
      function a(t) {
        var e = n.compile(t);
        return (
          e.length > 37 &&
          e[0] === f.OP_RETURN &&
          36 === e[1] &&
          e.slice(2, 6).equals(u)
        );
      }
      function h(t) {
        s(o.Hash256bit, t);
        var e = i.allocUnsafe(36);
        return (u.copy(e, 0), t.copy(e, 4), n.compile([f.OP_RETURN, e]));
      }
      function c(t) {
        return (s(a, t), n.decompile(t)[1].slice(4, 36));
      }
      ((a.toJSON = function () {
        return "Witness commitment output";
      }),
        (t.exports = { check: a, decode: c, encode: h }));
    },
    10482: function (t, e, r) {
      t.exports = { keyutil: r(5569) };
    },
    10483: function (t, e, r) {
      "use strict";
      let i = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
        n = {};
      for (let A = 0; A < i.length; A++) {
        let t = i.charAt(A);
        if (void 0 !== n[t]) throw new TypeError(t + " is ambiguous");
        n[t] = A;
      }
      function o(t) {
        let e = t >> 25;
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((e >> 0) & 1)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        );
      }
      function s(t) {
        let e = 1;
        for (let r = 0; r < t.length; ++r) {
          let i = t.charCodeAt(r);
          if (i < 33 || i > 126) throw new Error("Invalid prefix (" + t + ")");
          e = o(e) ^ (i >> 5);
        }
        e = o(e);
        for (let r = 0; r < t.length; ++r) {
          let i = t.charCodeAt(r);
          e = o(e) ^ (31 & i);
        }
        return e;
      }
      function f(t, e) {
        if (t.length + 7 + e.length > 90)
          throw new TypeError("Exceeds Bech32 maximum length");
        t = t.toLowerCase();
        let r = s(t),
          n = t + "1";
        for (let s = 0; s < e.length; ++s) {
          let t = e[s];
          if (t >> 5 !== 0) throw new Error("Non 5-bit word");
          ((r = o(r) ^ t), (n += i.charAt(t)));
        }
        for (let i = 0; i < 6; ++i) r = o(r);
        r ^= 1;
        for (let o = 0; o < 6; ++o) {
          let t = (r >> (5 * (5 - o))) & 31;
          n += i.charAt(t);
        }
        return n;
      }
      function u(t) {
        if (t.length < 8) throw new TypeError(t + " too short");
        if (t.length > 90) throw new TypeError(t + " too long");
        let e = t.toLowerCase(),
          r = t.toUpperCase();
        if (t !== e && t !== r) throw new Error("Mixed-case string " + t);
        t = e;
        let i = t.lastIndexOf("1");
        if (0 === i) throw new Error("Missing prefix for " + t);
        let f = t.slice(0, i),
          u = t.slice(i + 1);
        if (u.length < 6) throw new Error("Data too short");
        let a = s(f),
          h = [];
        for (let s = 0; s < u.length; ++s) {
          let t = u.charAt(s),
            e = n[t];
          if (void 0 === e) throw new Error("Unknown character " + t);
          ((a = o(a) ^ e), s + 6 >= u.length || h.push(e));
        }
        if (1 !== a) throw new Error("Invalid checksum for " + t);
        return { prefix: f, words: h };
      }
      function a(t, e, r, i) {
        let n = 0,
          o = 0,
          s = (1 << r) - 1,
          f = [];
        for (let u = 0; u < t.length; ++u) {
          ((n = (n << e) | t[u]), (o += e));
          while (o >= r) ((o -= r), f.push((n >> o) & s));
        }
        if (i) o > 0 && f.push((n << (r - o)) & s);
        else {
          if (o >= e) throw new Error("Excess padding");
          if ((n << (r - o)) & s) throw new Error("Non-zero padding");
        }
        return f;
      }
      function h(t) {
        return a(t, 8, 5, !0);
      }
      function c(t) {
        return a(t, 5, 8, !1);
      }
      t.exports = { decode: u, encode: f, toWords: h, fromWords: c };
    },
    10484: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(2828),
        o = r(2758),
        s = r(2985),
        BigInteger = r(2802),
        ECSignature = r(4803),
        f = i.alloc(1, 0),
        u = i.alloc(1, 1),
        a = r(2975),
        h = a.getCurveByName("secp256k1");
      function c(t, e, r) {
        o(s.tuple(s.Hash256bit, s.Buffer256bit, s.Function), arguments);
        var a = i.alloc(32, 0),
          c = i.alloc(32, 1);
        ((a = n("sha256", a).update(c).update(f).update(e).update(t).digest()),
          (c = n("sha256", a).update(c).digest()),
          (a = n("sha256", a).update(c).update(u).update(e).update(t).digest()),
          (c = n("sha256", a).update(c).digest()),
          (c = n("sha256", a).update(c).digest()));
        var A = BigInteger.fromBuffer(c);
        while (A.signum() <= 0 || A.compareTo(h.n) >= 0 || !r(A))
          ((a = n("sha256", a).update(c).update(f).digest()),
            (c = n("sha256", a).update(c).digest()),
            (c = n("sha256", a).update(c).digest()),
            (A = BigInteger.fromBuffer(c)));
        return A;
      }
      var A = h.n.shiftRight(1);
      function I(t, e) {
        o(s.tuple(s.Hash256bit, s.BigInt), arguments);
        var r,
          i,
          n = e.toBuffer(32),
          f = BigInteger.fromBuffer(t),
          u = h.n,
          a = h.G;
        return (
          c(t, n, function (t) {
            var n = a.multiply(t);
            return (
              !h.isInfinity(n) &&
              ((r = n.affineX.mod(u)),
              0 !== r.signum() &&
                ((i = t
                  .modInverse(u)
                  .multiply(f.add(e.multiply(r)))
                  .mod(u)),
                0 !== i.signum()))
            );
          }),
          i.compareTo(A) > 0 && (i = u.subtract(i)),
          new ECSignature(r, i)
        );
      }
      function p(t, e, r) {
        o(s.tuple(s.Hash256bit, s.ECSignature, s.ECPoint), arguments);
        var i = h.n,
          n = h.G,
          f = e.r,
          u = e.s;
        if (f.signum() <= 0 || f.compareTo(i) >= 0) return !1;
        if (u.signum() <= 0 || u.compareTo(i) >= 0) return !1;
        var a = BigInteger.fromBuffer(t),
          c = u.modInverse(i),
          A = a.multiply(c).mod(i),
          I = f.multiply(c).mod(i),
          p = n.multiplyTwo(A, r, I);
        if (h.isInfinity(p)) return !1;
        var l = p.affineX,
          g = l.mod(i);
        return g.equals(f);
      }
      t.exports = { deterministicGenerateK: c, sign: I, verify: p, __curve: h };
    },
    10485: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(3945),
        o = r(3110),
        s = r(2758),
        f = r(2985),
        u = r(4804),
        a = r(2864),
        h = r(3608),
        c = r(4805),
        A = r(5571);
      function Block(t) {
        (s(f.maybe(f.Network), t),
          (t = t || h.bitcoin),
          (this.version = 1),
          (this.prevHash = null),
          (this.merkleRoot = null),
          (this.timestamp = 0),
          (this.bits = 0),
          (this.nonce = 0),
          (this.network = t),
          c.isZcash(t) &&
            ((this.finalSaplingRoot = null),
            (this.solutionSize = 0),
            (this.solution = null)));
      }
      ((Block.HEADER_BYTE_SIZE = 80),
        (Block.ZCASH_HEADER_BYTE_SIZE = 1487),
        (Block.fromBuffer = function (t, e) {
          if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
          e = e || h.bitcoin;
          const r = new u.BufferReader(t);
          var i = new Block(e);
          if (
            ((i.version = r.readInt32()),
            (i.prevHash = r.readSlice(32)),
            (i.merkleRoot = r.readSlice(32)),
            c.isZcash(e) && (i.finalSaplingRoot = r.readSlice(32)),
            (i.timestamp = r.readUInt32()),
            (i.bits = r.readUInt32()),
            c.isZcash(e)
              ? ((i.nonce = r.readSlice(32)),
                (i.solutionSize = r.readVarInt()),
                (i.solution = r.readSlice(1344)))
              : (i.nonce = r.readUInt32()),
            80 === r.buffer.length)
          )
            return i;
          function n() {
            var i = A.fromBuffer(t.slice(r.offset), e, !0);
            return ((r.offset += i.byteLength()), i);
          }
          var o = r.readVarInt();
          i.transactions = [];
          for (var s = 0; s < o; ++s) {
            var f = n();
            i.transactions.push(f);
          }
          return i;
        }),
        (Block.prototype.byteLength = function (t) {
          return c.isZcash(this.network)
            ? t
              ? Block.ZCASH_HEADER_BYTE_SIZE
              : Block.ZCASH_HEADER_BYTE_SIZE +
                a.encodingLength(this.transactions.length) +
                this.transactions.reduce(function (t, e) {
                  return t + e.byteLength();
                }, 0)
            : t || !this.transactions
              ? Block.HEADER_BYTE_SIZE
              : Block.HEADER_BYTE_SIZE +
                a.encodingLength(this.transactions.length) +
                this.transactions.reduce(function (t, e) {
                  return t + e.byteLength();
                }, 0);
        }),
        (Block.fromHex = function (t, e) {
          return Block.fromBuffer(i.from(t, "hex"), e);
        }),
        (Block.prototype.getHash = function () {
          return n.hash256(this.toBuffer(!0));
        }),
        (Block.prototype.getId = function () {
          return this.getHash().reverse().toString("hex");
        }),
        (Block.prototype.getUTCDate = function () {
          var t = new Date(0);
          return (t.setUTCSeconds(this.timestamp), t);
        }),
        (Block.prototype.toBuffer = function (t) {
          var e = i.allocUnsafe(this.byteLength(t)),
            r = new u.BufferWriter(e);
          return (
            r.writeInt32(this.version),
            r.writeSlice(this.prevHash),
            r.writeSlice(this.merkleRoot),
            c.isZcash(this.network) && r.writeSlice(this.finalSaplingRoot),
            r.writeUInt32(this.timestamp),
            r.writeUInt32(this.bits),
            c.isZcash(this.network)
              ? (r.writeSlice(this.nonce),
                a.encode(this.solutionSize, r.buffer, r.offset),
                (r.offset += a.encode.bytes),
                r.writeSlice(this.solution))
              : r.writeUInt32(this.nonce),
            t ||
              !this.transactions ||
              (a.encode(this.transactions.length, r.buffer, r.offset),
              (r.offset += a.encode.bytes),
              this.transactions.forEach(function (t) {
                var e = t.byteLength();
                (t.toBuffer(r.buffer, r.offset), (r.offset += e));
              })),
            e
          );
        }),
        (Block.prototype.toHex = function (t) {
          return this.toBuffer(t).toString("hex");
        }),
        (Block.calculateTarget = function (t) {
          var e = ((4278190080 & t) >> 24) - 3,
            r = 8388607 & t,
            n = i.alloc(32, 0);
          return (
            e < 0
              ? ((r >>= 8 * Math.abs(e)), n.writeUInt32BE(r, 28))
              : e > 28
                ? ((r <<= 8 * (e - 28)), n.writeUInt32BE(r, 0))
                : n.writeUInt32BE(r, 28 - e),
            n
          );
        }),
        (Block.calculateMerkleRoot = function (t) {
          if ((s([{ getHash: f.Function }], t), 0 === t.length))
            throw TypeError("Cannot compute merkle root for zero transactions");
          var e = t.map(function (t) {
            return t.getHash();
          });
          return o(e, n.hash256);
        }),
        (Block.prototype.checkMerkleRoot = function () {
          if (!this.transactions) return !1;
          var t = Block.calculateMerkleRoot(this.transactions);
          return 0 === this.merkleRoot.compare(t);
        }),
        (Block.prototype.checkProofOfWork = function () {
          var t = this.getHash().reverse(),
            e = Block.calculateTarget(this.bits);
          return t.compare(e) <= 0;
        }),
        (t.exports = Block));
    },
    10486: function (t, e, r) {
      const i = r(2758),
        n = r(2985),
        o = r(6670),
        { BufferReader: s, BufferWriter: f } = r(4804),
        u = 2,
        a = 2,
        h = 601,
        c = 2,
        A = 10;
      class ZcashBufferReader extends s {
        constructor(t, e, r) {
          (super(t, e), i(n.maybe(n.Int32), r), (this.txVersion = r));
        }
        readInt64() {
          const t = this.buffer.readUInt32LE(this.offset);
          let e = this.buffer.readInt32LE(this.offset + 4);
          return ((e *= 4294967296), (this.offset += 8), e + t);
        }
        readCompressedG1() {
          var t = 1 & this.readUInt8(),
            e = this.readSlice(32);
          return { x: e, yLsb: t };
        }
        readCompressedG2() {
          var t = 1 & this.readUInt8(),
            e = this.readSlice(64);
          return { x: e, yLsb: t };
        }
        readZKProof() {
          var t;
          return (
            (t =
              this.txVersion >= o.SAPLING
                ? {
                    sA: this.readSlice(48),
                    sB: this.readSlice(96),
                    sC: this.readSlice(48),
                  }
                : {
                    gA: this.readCompressedG1(),
                    gAPrime: this.readCompressedG1(),
                    gB: this.readCompressedG2(),
                    gBPrime: this.readCompressedG1(),
                    gC: this.readCompressedG1(),
                    gCPrime: this.readCompressedG1(),
                    gK: this.readCompressedG1(),
                    gH: this.readCompressedG1(),
                  }),
            t
          );
        }
        readJoinSplit() {
          for (
            var t = this.readUInt64(),
              e = this.readUInt64(),
              r = this.readSlice(32),
              i = [],
              n = 0;
            n < u;
            n++
          )
            i.push(this.readSlice(32));
          var o = [];
          for (n = 0; n < a; n++) o.push(this.readSlice(32));
          var s = this.readSlice(32),
            f = this.readSlice(32),
            c = [];
          for (n = 0; n < u; n++) c.push(this.readSlice(32));
          var A = this.readZKProof(),
            I = [];
          for (n = 0; n < a; n++) I.push(this.readSlice(h));
          return {
            vpubOld: t,
            vpubNew: e,
            anchor: r,
            nullifiers: i,
            commitments: o,
            ephemeralKey: s,
            randomSeed: f,
            macs: c,
            zkproof: A,
            ciphertexts: I,
          };
        }
        readShieldedSpend() {
          var t = this.readSlice(32),
            e = this.readSlice(32),
            r = this.readSlice(32),
            i = this.readSlice(32),
            n = this.readZKProof(),
            o = this.readSlice(64);
          return {
            cv: t,
            anchor: e,
            nullifier: r,
            rk: i,
            zkproof: n,
            spendAuthSig: o,
          };
        }
        readShieldedOutput() {
          var t = this.readSlice(32),
            e = this.readSlice(32),
            r = this.readSlice(32),
            i = this.readSlice(580),
            n = this.readSlice(80),
            o = this.readZKProof();
          return {
            cv: t,
            cmu: e,
            ephemeralKey: r,
            encCiphertext: i,
            outCiphertext: n,
            zkproof: o,
          };
        }
      }
      class ZcashBufferWriter extends f {
        writeCompressedG1(t) {
          (this.writeUInt8(c | t.yLsb), this.writeSlice(t.x));
        }
        writeCompressedG2(t) {
          (this.writeUInt8(A | t.yLsb), this.writeSlice(t.x));
        }
      }
      t.exports = {
        ZcashBufferReader: ZcashBufferReader,
        ZcashBufferWriter: ZcashBufferWriter,
      };
    },
    10487: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(2792),
        o = r(3945),
        s = r(2828),
        f = r(2758),
        u = r(2985),
        a = r(3608),
        BigInteger = r(2802),
        ECPair = r(4802),
        h = r(2975),
        c = h.getCurveByName("secp256k1"),
        A = r(6669);
      function HDNode(t, e) {
        if ((f(u.tuple("ECPair", u.Buffer256bit), arguments), !t.compressed))
          throw new TypeError("BIP32 only allows compressed keyPairs");
        ((this.keyPair = t),
          (this.chainCode = e),
          (this.depth = 0),
          (this.index = 0),
          (this.parentFingerprint = 0),
          (this.derivationCache = {}));
      }
      ((HDNode.HIGHEST_BIT = 2147483648),
        (HDNode.LENGTH = 78),
        (HDNode.MASTER_SECRET = i.from("Bitcoin seed", "utf8")),
        (HDNode.fromSeedBuffer = function (t, e) {
          if (
            (f(u.tuple(u.Buffer, u.maybe(u.Network)), arguments), t.length < 16)
          )
            throw new TypeError("Seed should be at least 128 bits");
          if (t.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          var r = s("sha512", HDNode.MASTER_SECRET).update(t).digest(),
            i = r.slice(0, 32),
            n = r.slice(32),
            o = BigInteger.fromBuffer(i),
            a = new ECPair(o, null, { network: e });
          return new HDNode(a, n);
        }),
        (HDNode.fromSeedHex = function (t, e) {
          return HDNode.fromSeedBuffer(i.from(t, "hex"), e);
        }),
        (HDNode.fromBase58 = function (t, e) {
          var r = n.decode(t);
          if (78 !== r.length) throw new Error("Invalid buffer length");
          var i,
            o = r.readUInt32BE(0);
          if (Array.isArray(e)) {
            if (
              ((i = e
                .filter(function (t) {
                  return o === t.bip32.private || o === t.bip32.public;
                })
                .pop()),
              !i)
            )
              throw new Error("Unknown network version");
          } else i = e || a.bitcoin;
          if (o !== i.bip32.private && o !== i.bip32.public)
            throw new Error("Invalid network version");
          var s = r[4],
            f = r.readUInt32BE(5);
          if (0 === s && 0 !== f) throw new Error("Invalid parent fingerprint");
          var u = r.readUInt32BE(9);
          if (0 === s && 0 !== u) throw new Error("Invalid index");
          var A,
            I = r.slice(13, 45);
          if (o === i.bip32.private) {
            if (0 !== r.readUInt8(45)) throw new Error("Invalid private key");
            var p = BigInteger.fromBuffer(r.slice(46, 78));
            A = new ECPair(p, null, { network: i });
          } else {
            var l = h.Point.decodeFrom(c, r.slice(45, 78));
            (c.validate(l), (A = new ECPair(null, l, { network: i })));
          }
          var g = new HDNode(A, I);
          return ((g.depth = s), (g.index = u), (g.parentFingerprint = f), g);
        }),
        (HDNode.prototype.getAddress = function () {
          return this.keyPair.getAddress();
        }),
        (HDNode.prototype.getIdentifier = function () {
          return o.hash160(this.keyPair.getPublicKeyBuffer());
        }),
        (HDNode.prototype.getFingerprint = function () {
          return this.getIdentifier().slice(0, 4);
        }),
        (HDNode.prototype.getNetwork = function () {
          return this.keyPair.getNetwork();
        }),
        (HDNode.prototype.getPublicKeyBuffer = function () {
          return this.keyPair.getPublicKeyBuffer();
        }),
        (HDNode.prototype.neutered = function () {
          var t = new ECPair(null, this.keyPair.Q, {
              network: this.keyPair.network,
            }),
            e = new HDNode(t, this.chainCode);
          return (
            (e.depth = this.depth),
            (e.index = this.index),
            (e.parentFingerprint = this.parentFingerprint),
            e
          );
        }),
        (HDNode.prototype.sign = function (t) {
          return this.keyPair.sign(t);
        }),
        (HDNode.prototype.verify = function (t, e) {
          return this.keyPair.verify(t, e);
        }),
        (HDNode.prototype.toBase58 = function (t) {
          if (void 0 !== t)
            throw new TypeError("Unsupported argument in 2.0.0");
          var e = this.keyPair.network,
            r = this.isNeutered() ? e.bip32.public : e.bip32.private,
            o = i.allocUnsafe(78);
          return (
            o.writeUInt32BE(r, 0),
            o.writeUInt8(this.depth, 4),
            o.writeUInt32BE(this.parentFingerprint, 5),
            o.writeUInt32BE(this.index, 9),
            this.chainCode.copy(o, 13),
            this.isNeutered()
              ? this.keyPair.getPublicKeyBuffer().copy(o, 45)
              : (o.writeUInt8(0, 45), this.keyPair.d.toBuffer(32).copy(o, 46)),
            n.encode(o)
          );
        }),
        (HDNode.prototype.derive = function (t) {
          f(u.UInt32, t);
          var e = t >= HDNode.HIGHEST_BIT,
            r = i.allocUnsafe(37);
          if (e) {
            if (this.isNeutered())
              throw new TypeError("Could not derive hardened child key");
            ((r[0] = 0),
              this.keyPair.d.toBuffer(32).copy(r, 1),
              r.writeUInt32BE(t, 33));
          } else
            (this.keyPair.getPublicKeyBuffer().copy(r, 0),
              r.writeUInt32BE(t, 33));
          var n,
            o = s("sha512", this.chainCode).update(r).digest(),
            a = o.slice(0, 32),
            I = o.slice(32),
            p = BigInteger.fromBuffer(a);
          if (p.compareTo(c.n) >= 0) return this.derive(t + 1);
          if (this.isNeutered()) {
            var l = A.publicKeyCreate(a, !1),
              g =
                void 0 !== l
                  ? h.Point.decodeFrom(c, l).add(this.keyPair.Q)
                  : c.G.multiply(p).add(this.keyPair.Q);
            if (c.isInfinity(g)) return this.derive(t + 1);
            n = new ECPair(null, g, { network: this.keyPair.network });
          } else {
            var d = p.add(this.keyPair.d).mod(c.n);
            if (0 === d.signum()) return this.derive(t + 1);
            n = new ECPair(d, null, { network: this.keyPair.network });
          }
          var E = new HDNode(n, I);
          return (
            (E.depth = this.depth + 1),
            (E.index = t),
            (E.parentFingerprint = this.getFingerprint().readUInt32BE(0)),
            E
          );
        }),
        (HDNode.prototype.deriveHardened = function (t) {
          return (f(u.UInt31, t), this.derive(t + HDNode.HIGHEST_BIT));
        }),
        (HDNode.prototype.isNeutered = function () {
          return !this.keyPair.d;
        }),
        (HDNode.prototype.derivePath = function (t, e) {
          (f(u.BIP32Path, t),
            f(u.maybe(u.Object), e),
            (e = e || this.derivationCache));
          var r = t.split("/");
          if ("m" === r[0]) {
            if (this.parentFingerprint) throw new Error("Not a master node");
            r = r.slice(1);
          }
          return r.reduce(function (t, r) {
            var i,
              n = e[r] || {};
            return n.node
              ? ((e = n.next), n.node)
              : ("'" === r.slice(-1)
                  ? ((i = parseInt(r.slice(0, -1), 10)),
                    (n.node = t.deriveHardened(i)))
                  : ((i = parseInt(r, 10)), (n.node = t.derive(i))),
                (e[r] = n),
                (n.next = {}),
                (e = n.next),
                n.node);
          }, this);
        }),
        (HDNode.prototype.cloneKeypair = function () {
          var t = this.keyPair,
            e = new ECPair(t.d, t.d ? null : t.Q, {
              network: t.network,
              compressed: t.compressed,
            });
          if (!e.__Q) {
            var r = A.publicKeyCreate(t.d.toBuffer(32), !1);
            void 0 !== r && (e.__Q = h.Point.decodeFrom(c, r));
          }
          return e;
        }),
        (t.exports = HDNode));
    },
    10488: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(5570),
        o = r(3945),
        s = r(3007),
        f = r(5565),
        u = r(4805),
        a = r(3608),
        h = r(2771),
        c = r(2758),
        A = r(2985),
        I = f.types,
        p = [f.types.P2PKH, f.types.P2PK, f.types.MULTISIG],
        l = p.concat([f.types.P2WPKH, f.types.P2WSH]),
        ECPair = r(4802),
        ECSignature = r(4803),
        g = r(5571),
        d = r(10489)("bitgo:utxolib:txbuilder");
      function E(t) {
        return -1 !== p.indexOf(t);
      }
      function w(t) {
        return -1 !== l.indexOf(t);
      }
      function y(t, e, r) {
        var i = [],
          n = [];
        switch (t) {
          case I.P2PKH:
            ((i = e.slice(1)), (n = e.slice(0, 1)));
            break;
          case I.P2PK:
            ((i[0] = r ? f.pubKey.output.decode(r) : void 0),
              (n = e.slice(0, 1)));
            break;
          case I.MULTISIG:
            if (r) {
              var o = f.multisig.output.decode(r);
              i = o.pubKeys;
            }
            n = e.slice(1).map(function (t) {
              return 0 === t.length ? void 0 : t;
            });
            break;
        }
        return { pubKeys: i, signatures: n };
      }
      function C(t, e) {
        if (0 === t.length && 0 === e.length) return {};
        var r,
          i,
          n,
          u,
          a,
          h,
          c,
          A,
          p,
          l,
          g = !1,
          d = !1,
          C = !1,
          v = s.decompile(t),
          S = f.classifyInput(v, !0);
        S === I.P2SH &&
          ((C = !0),
          (a = v[v.length - 1]),
          (A = f.classifyOutput(a)),
          (r = f.scriptHash.output.encode(o.hash160(a))),
          (i = I.P2SH),
          (u = a));
        var m = f.classifyWitness(e, !0);
        if (m === I.P2WSH) {
          if (
            ((h = e[e.length - 1]),
            (c = f.classifyOutput(h)),
            (d = !0),
            (g = !0),
            0 === t.length)
          ) {
            if (
              ((r = f.witnessScriptHash.output.encode(o.sha256(h))),
              (i = I.P2WSH),
              void 0 !== a)
            )
              throw new Error("Redeem script given when unnecessary");
          } else {
            if (!a)
              throw new Error(
                "No redeemScript provided for P2WSH, but scriptSig non-empty",
              );
            if (
              ((p = f.witnessScriptHash.output.encode(o.sha256(h))),
              !a.equals(p))
            )
              throw new Error("Redeem script didn't match witnessScript");
          }
          if (!E(f.classifyOutput(h)))
            throw new Error("unsupported witness script");
          ((u = h), (n = c), (l = e.slice(0, -1)));
        } else if (m === I.P2WPKH) {
          g = !0;
          var b = e[e.length - 1],
            B = o.hash160(b);
          if (0 === t.length) {
            if (
              ((r = f.witnessPubKeyHash.output.encode(B)),
              (i = I.P2WPKH),
              "undefined" !== typeof a)
            )
              throw new Error("Redeem script given when unnecessary");
          } else {
            if (!a)
              throw new Error(
                "No redeemScript provided for P2WPKH, but scriptSig wasn't empty",
              );
            if (((p = f.witnessPubKeyHash.output.encode(B)), !a.equals(p)))
              throw new Error(
                "Redeem script did not have the right witness program",
              );
          }
          ((n = I.P2PKH), (l = e));
        } else if (a) {
          if (!w(A)) throw new Error("Bad redeemscript!");
          ((u = a), (n = A), (l = v.slice(0, -1)));
        } else ((i = n = f.classifyInput(t)), (l = v));
        var _ = y(n, l, u),
          P = {
            pubKeys: _.pubKeys,
            signatures: _.signatures,
            prevOutScript: r,
            prevOutType: i,
            signType: n,
            signScript: u,
            witness: Boolean(g),
          };
        return (
          C && ((P.redeemScript = a), (P.redeemScriptType = A)),
          d && ((P.witnessScript = h), (P.witnessScriptType = c)),
          P
        );
      }
      function v(t, e, r, i, n) {
        if (
          t.redeemScriptType === I.MULTISIG &&
          t.redeemScript &&
          t.pubKeys.length !== t.signatures.length
        ) {
          n = n || a.bitcoin;
          var o = t.signatures.concat();
          t.signatures = t.pubKeys.map(function (s) {
            var f,
              a = ECPair.fromPublicKeyBuffer(s);
            return (
              o.some(function (s, h) {
                if (!s) return !1;
                var c,
                  A = ECSignature.parseScriptSignature(s);
                switch (n.coin) {
                  case u.BSV:
                  case u.BCH:
                    c = e.hashForCashSignature(r, t.signScript, i, A.hashType);
                    break;
                  case u.BTG:
                    c = e.hashForGoldSignature(r, t.signScript, i, A.hashType);
                    break;
                  case u.ZEC:
                    if (void 0 === i) return !1;
                    c = e.hashForZcashSignature(r, t.signScript, i, A.hashType);
                    break;
                  default:
                    c = t.witness
                      ? e.hashForWitnessV0(r, t.signScript, i, A.hashType)
                      : e.hashForSignature(r, t.signScript, A.hashType);
                    break;
                }
                return (
                  !!a.verify(c, A.signature) && ((o[h] = void 0), (f = s), !0)
                );
              }),
              f
            );
          });
        }
      }
      function S(t, e, r) {
        c(A.Buffer, t);
        var i = s.decompile(t);
        e || (e = f.classifyOutput(t));
        var n = [];
        switch (e) {
          case I.P2PKH:
            if (!r) break;
            var u = i[2],
              a = o.hash160(r);
            u.equals(a) && (n = [r]);
            break;
          case I.P2WPKH:
            if (!r) break;
            var h = i[1],
              p = o.hash160(r);
            h.equals(p) && (n = [r]);
            break;
          case I.P2PK:
            n = i.slice(0, 1);
            break;
          case I.MULTISIG:
            n = i.slice(1, -2);
            break;
          default:
            return { scriptType: e };
        }
        return { pubKeys: n, scriptType: e, signatures: n.map(function () {}) };
      }
      function m(t, e) {
        if (t.prevOutType) {
          if (t.prevOutType !== I.P2SH)
            throw new Error("PrevOutScript must be P2SH");
          var r = s.decompile(t.prevOutScript)[1];
          if (!r.equals(e))
            throw new Error("Inconsistent hash160(RedeemScript)");
        }
      }
      function b(t, e) {
        if (t.prevOutType) {
          if (t.prevOutType !== I.P2WSH)
            throw new Error("PrevOutScript must be P2WSH");
          var r = s.decompile(t.prevOutScript)[1];
          if (!r.equals(e))
            throw new Error("Inconsistent sha25(WitnessScript)");
        }
      }
      function B(t, e, r, i, n) {
        var u,
          a,
          h,
          c,
          A,
          p,
          l,
          g,
          d,
          E = !1,
          w = !1,
          y = !1;
        if (r && n) {
          if (
            ((A = o.hash160(r)),
            (l = o.sha256(n)),
            m(t, A),
            !r.equals(f.witnessScriptHash.output.encode(l)))
          )
            throw new Error("Witness script inconsistent with redeem script");
          if (((u = S(n, void 0, e)), !u.pubKeys))
            throw new Error('WitnessScript not supported "' + s.toASM(r) + '"');
          ((a = f.types.P2SH),
            (h = f.scriptHash.output.encode(A)),
            (E = w = y = !0),
            (c = f.types.P2WSH),
            (g = p = u.scriptType),
            (d = n));
        } else if (r) {
          if (((A = o.hash160(r)), m(t, A), (u = S(r, void 0, e)), !u.pubKeys))
            throw new Error('RedeemScript not supported "' + s.toASM(r) + '"');
          ((a = f.types.P2SH),
            (h = f.scriptHash.output.encode(A)),
            (E = !0),
            (g = c = u.scriptType),
            (d = r),
            (w = g === f.types.P2WPKH));
        } else if (n) {
          if (((l = o.sha256(n)), b(t, l), (u = S(n, void 0, e)), !u.pubKeys))
            throw new Error('WitnessScript not supported "' + s.toASM(r) + '"');
          ((a = f.types.P2WSH),
            (h = f.witnessScriptHash.output.encode(l)),
            (w = y = !0),
            (g = p = u.scriptType),
            (d = n));
        } else if (t.prevOutType) {
          if (t.prevOutType === I.P2SH || t.prevOutType === I.P2WSH)
            throw new Error(
              "PrevOutScript is " + t.prevOutType + ", requires redeemScript",
            );
          if (
            ((a = t.prevOutType),
            (h = t.prevOutScript),
            (u = S(t.prevOutScript, t.prevOutType, e)),
            !u.pubKeys)
          )
            return;
          ((w = t.prevOutType === I.P2WPKH), (g = a), (d = h));
        } else
          ((h = f.pubKeyHash.output.encode(o.hash160(e))),
            (u = S(h, I.P2PKH, e)),
            (a = I.P2PKH),
            (w = !1),
            (g = a),
            (d = h));
        (g === I.P2WPKH &&
          (d = f.pubKeyHash.output.encode(
            f.witnessPubKeyHash.output.decode(d),
          )),
          E && ((t.redeemScript = r), (t.redeemScriptType = c)),
          y && ((t.witnessScript = n), (t.witnessScriptType = p)),
          (t.pubKeys = u.pubKeys),
          (t.signatures = u.signatures),
          (t.signScript = d),
          (t.signType = g),
          (t.prevOutScript = h),
          (t.prevOutType = a),
          (t.witness = w));
      }
      function _(t, e, r, n) {
        if (t === I.P2PKH) {
          if (1 === e.length && i.isBuffer(e[0]) && 1 === r.length)
            return f.pubKeyHash.input.encodeStack(e[0], r[0]);
        } else if (t === I.P2PK) {
          if (1 === e.length && i.isBuffer(e[0]))
            return f.pubKey.input.encodeStack(e[0]);
        } else {
          if (t !== I.MULTISIG) throw new Error("Not yet supported");
          if (e.length > 0)
            return (
              (e = e.map(function (t) {
                return t || h.OP_0;
              })),
              n ||
                (e = e.filter(function (t) {
                  return t !== h.OP_0;
                })),
              f.multisig.input.encodeStack(e)
            );
        }
        if (!n) throw new Error("Not enough signatures provided");
        return [];
      }
      function P(t, e) {
        var r = t.prevOutType,
          i = [],
          n = [];
        E(r) && (i = _(r, t.signatures, t.pubKeys, e));
        var o = !1;
        if (r === f.types.P2SH) {
          if (!e && !w(t.redeemScriptType))
            throw new Error("Impossible to sign this type");
          (E(t.redeemScriptType) &&
            (i = _(t.redeemScriptType, t.signatures, t.pubKeys, e)),
            t.redeemScriptType && ((o = !0), (r = t.redeemScriptType)));
        }
        switch (r) {
          case f.types.P2WPKH:
            n = _(f.types.P2PKH, t.signatures, t.pubKeys, e);
            break;
          case f.types.P2WSH:
            if (!e && !E(t.witnessScriptType))
              throw new Error("Impossible to sign this type");
            E(t.witnessScriptType) &&
              ((n = _(t.witnessScriptType, t.signatures, t.pubKeys, e)),
              n.push(t.witnessScript),
              (r = t.witnessScriptType));
            break;
        }
        return (
          o && i.push(t.redeemScript),
          { type: r, script: s.compile(i), witness: n }
        );
      }
      function D(t, e) {
        ((this.prevTxMap = {}),
          (this.network = t || a.bitcoin),
          (this.maximumFeeRate = e || 2500),
          (this.inputs = []),
          (this.tx = new g(this.network)));
      }
      function T(t) {
        return (
          void 0 !== t.prevOutScript &&
          void 0 !== t.signScript &&
          void 0 !== t.pubKeys &&
          void 0 !== t.signatures &&
          t.signatures.length === t.pubKeys.length &&
          t.pubKeys.length > 0 &&
          (!1 === t.witness || (!0 === t.witness && void 0 !== t.value))
        );
      }
      function L(t) {
        return t.readUInt8(t.length - 1);
      }
      ((D.prototype.setLockTime = function (t) {
        if (
          (c(A.UInt32, t),
          this.inputs.some(function (t) {
            return (
              !!t.signatures &&
              t.signatures.some(function (t) {
                return t;
              })
            );
          }))
        )
          throw new Error("No, this would invalidate signatures");
        this.tx.locktime = t;
      }),
        (D.prototype.setVersion = function (t, e) {
          if (
            (void 0 === e && (e = !0), c(A.UInt32, t), u.isZcash(this.network))
          ) {
            if (!this.network.consensusBranchId.hasOwnProperty(this.tx.version))
              throw new Error("Unsupported Zcash transaction");
            this.tx.overwintered = e ? 1 : 0;
          }
          this.tx.version = t;
        }),
        (D.prototype.setVersionGroupId = function (t) {
          if (!u.isZcash(this.network) || !this.tx.isOverwinterCompatible())
            throw new Error(
              "expiryHeight can only be set for Zcash starting at overwinter version. Current network coin: " +
                this.network.coin +
                ", version: " +
                this.tx.version,
            );
          (c(A.UInt32, t), (this.tx.versionGroupId = t));
        }),
        (D.prototype.setExpiryHeight = function (t) {
          if (!u.isZcash(this.network) || !this.tx.isOverwinterCompatible())
            throw new Error(
              "expiryHeight can only be set for Zcash starting at overwinter version. Current network coin: " +
                this.network.coin +
                ", version: " +
                this.tx.version,
            );
          (c(A.UInt32, t), (this.tx.expiryHeight = t));
        }),
        (D.prototype.setJoinSplits = function (t) {
          if (!u.isZcash(this.network) || !this.tx.supportsJoinSplits())
            throw new Error(
              "joinsplits can only be set for Zcash starting at version 2. Current network coin: " +
                this.network.coin +
                ", version: " +
                this.tx.version,
            );
          if (t && t.joinsplits)
            return (
              (this.tx.joinsplits = t.joinsplits.map(function (t) {
                return {
                  vpubOld: t.vpubOld,
                  vpubNew: t.vpubNew,
                  anchor: t.anchor,
                  nullifiers: t.nullifiers,
                  commitments: t.commitments,
                  ephemeralKey: t.ephemeralKey,
                  randomSeed: t.randomSeed,
                  macs: t.macs,
                  zproof: t.zproof,
                  ciphertexts: t.ciphertexts,
                };
              })),
              (this.tx.joinsplitPubkey = t.joinsplitPubkey),
              void (this.tx.joinsplitSig = t.joinsplitSig)
            );
          throw new Error("Invalid transaction with joinsplits");
        }),
        (D.fromTransaction = function (t, e) {
          var r = e || a.bitcoin,
            i = new D(r);
          if (i.network.coin !== t.network.coin)
            throw new Error(
              "This transaction is incompatible with the transaction builder",
            );
          return (
            i.setVersion(t.version, t.overwintered),
            i.setLockTime(t.locktime),
            u.isZcash(r) &&
              (i.tx.isOverwinterCompatible() &&
                (i.setVersionGroupId(t.versionGroupId),
                i.setExpiryHeight(t.expiryHeight)),
              i.tx.supportsJoinSplits() && i.setJoinSplits(t)),
            u.isDash(r) &&
              (c(A.UInt16, t.type),
              (i.tx.type = t.type),
              i.tx.versionSupportsDashSpecialTransactions() &&
                (c(A.Buffer, t.extraPayload),
                (i.tx.extraPayload = t.extraPayload))),
            t.outs.forEach(function (t) {
              i.addOutput(t.script, t.value);
            }),
            t.ins.forEach(function (t) {
              i.__addInputUnsafe(t.hash, t.index, {
                sequence: t.sequence,
                script: t.script,
                witness: t.witness,
                value: t.value,
              });
            }),
            i.inputs.forEach(function (e, i) {
              v(e, t, i, e.value, r);
            }),
            i
          );
        }),
        (D.prototype.addInput = function (t, e, r, n) {
          if (!this.__canModifyInputs())
            throw new Error("No, this would invalidate signatures");
          var o;
          if ("string" === typeof t) t = i.from(t, "hex").reverse();
          else if (t instanceof g) {
            var s = t.outs[e];
            ((n = s.script), (o = s.value), (t = t.getHash()));
          }
          return this.__addInputUnsafe(t, e, {
            sequence: r,
            prevOutScript: n,
            value: o,
          });
        }),
        (D.prototype.__addInputUnsafe = function (t, e, r) {
          if (g.isCoinbaseHash(t))
            throw new Error("coinbase inputs not supported");
          var i = t.toString("hex") + ":" + e;
          if (void 0 !== this.prevTxMap[i])
            throw new Error("Duplicate TxOut: " + i);
          var n = {};
          if (
            (void 0 !== r.script && (n = C(r.script, r.witness || [])),
            void 0 !== r.value && (n.value = r.value),
            !n.prevOutScript && r.prevOutScript)
          ) {
            var o;
            if (!n.pubKeys && !n.signatures) {
              var s = S(r.prevOutScript);
              (s.pubKeys &&
                ((n.pubKeys = s.pubKeys), (n.signatures = s.signatures)),
                (o = s.scriptType));
            }
            ((n.prevOutScript = r.prevOutScript),
              (n.prevOutType = o || f.classifyOutput(r.prevOutScript)));
          }
          var u = this.tx.addInput(t, e, r.sequence, r.scriptSig);
          return ((this.inputs[u] = n), (this.prevTxMap[i] = u), u);
        }),
        (D.prototype.addOutput = function (t, e) {
          if (!this.__canModifyOutputs())
            throw new Error("No, this would invalidate signatures");
          return (
            "string" === typeof t && (t = n.toOutputScript(t, this.network)),
            this.tx.addOutput(t, e)
          );
        }),
        (D.prototype.build = function () {
          return this.__build(!1);
        }),
        (D.prototype.buildIncomplete = function () {
          return this.__build(!0);
        }),
        (D.prototype.__build = function (t) {
          if (!t) {
            if (!this.tx.ins.length)
              throw new Error("Transaction has no inputs");
            if (!this.tx.outs.length)
              throw new Error("Transaction has no outputs");
          }
          var e = this.tx.clone();
          if (
            (this.inputs.forEach(function (r, i) {
              var n =
                r.witnessScriptType || r.redeemScriptType || r.prevOutType;
              if (!n && !t) throw new Error("Transaction is not complete");
              var o = P(r, t);
              if (!t && !E(o.type) && o.type !== f.types.P2WPKH)
                throw new Error(o.type + " not supported");
              (e.setInputScript(i, o.script), e.setWitness(i, o.witness));
            }),
            !t && this.__overMaximumFees(e.virtualSize()))
          )
            throw new Error("Transaction has absurd fees");
          return e;
        }),
        (D.prototype.sign = function (t, e, r, n, o, s) {
          if (
            (d(
              "Signing transaction: (input: %d, hashType: %d, witnessVal: %s, witnessScript: %j)",
              t,
              n,
              o,
              s,
            ),
            d("Transaction Builder network: %j", this.network),
            e.network && e.network !== this.network)
          )
            throw new TypeError("Inconsistent network");
          if (!this.inputs[t]) throw new Error("No input at index: " + t);
          n = n || g.SIGHASH_ALL;
          var f = this.inputs[t];
          if (void 0 !== f.redeemScript && r && !f.redeemScript.equals(r))
            throw new Error("Inconsistent redeemScript");
          var a,
            h = e.publicKey || e.getPublicKeyBuffer();
          if (!T(f)) {
            if (void 0 !== o) {
              if (void 0 !== f.value && f.value !== o)
                throw new Error("Input didn't match witnessValue");
              (c(A.Satoshi, o), (f.value = o));
            }
            if (
              (d("Preparing input %d for signing", t),
              T(f) || B(f, h, r, o, s),
              !T(f))
            )
              throw Error(f.prevOutType + " not supported");
          }
          u.isBitcoinGold(this.network)
            ? ((a = this.tx.hashForGoldSignature(
                t,
                f.signScript,
                o,
                n,
                f.witness,
              )),
              d("Calculated BTG sighash (%s)", a.toString("hex")))
            : u.isBitcoinCash(this.network) || u.isBitcoinSV(this.network)
              ? ((a = this.tx.hashForCashSignature(t, f.signScript, o, n)),
                d("Calculated BCH sighash (%s)", a.toString("hex")))
              : u.isZcash(this.network)
                ? ((a = this.tx.hashForZcashSignature(t, f.signScript, o, n)),
                  d("Calculated ZEC sighash (%s)", a.toString("hex")))
                : f.witness
                  ? ((a = this.tx.hashForWitnessV0(t, f.signScript, o, n)),
                    d("Calculated witnessv0 sighash (%s)", a.toString("hex")))
                  : ((a = this.tx.hashForSignature(t, f.signScript, n)),
                    d("Calculated sighash (%s)", a.toString("hex")));
          var p = f.pubKeys.some(function (t, r) {
            if (!h.equals(t)) return !1;
            if (f.signatures[r]) throw new Error("Signature already exists");
            if (33 !== h.length && f.signType === I.P2WPKH)
              throw new Error(
                "BIP143 rejects uncompressed public keys in P2WPKH or P2WSH",
              );
            var o = e.sign(a);
            return (
              i.isBuffer(o) && (o = ECSignature.fromRSBuffer(o)),
              d("Produced signature (r: %s, s: %s)", o.r, o.s),
              (f.signatures[r] = o.toScriptSignature(n)),
              !0
            );
          });
          if (!p) throw new Error("Key pair cannot sign for this input");
        }),
        (D.prototype.__canModifyInputs = function () {
          return this.inputs.every(function (t) {
            return (
              void 0 === t.signatures ||
              t.signatures.every(function (t) {
                if (!t) return !0;
                var e = L(t);
                return e & g.SIGHASH_ANYONECANPAY;
              })
            );
          });
        }),
        (D.prototype.__canModifyOutputs = function () {
          var t = this.tx.ins.length,
            e = this.tx.outs.length;
          return this.inputs.every(function (r) {
            return (
              void 0 === r.signatures ||
              r.signatures.every(function (r) {
                if (!r) return !0;
                var i = L(r),
                  n = 31 & i;
                return (
                  n === g.SIGHASH_NONE ||
                  (n === g.SIGHASH_SINGLE ? t <= e : void 0)
                );
              })
            );
          });
        }),
        (D.prototype.__overMaximumFees = function (t) {
          var e = this.inputs.reduce(function (t, e) {
              return t + (e.value >>> 0);
            }, 0),
            r = this.tx.outs.reduce(function (t, e) {
              return t + e.value;
            }, 0),
            i = e - r,
            n = i / t;
          return n > this.maximumFeeRate;
        }),
        (t.exports = D));
    },
    10489: function (t, e, r) {
      (function (i) {
        function n() {
          return (
            !(
              "undefined" === typeof window ||
              !window.process ||
              "renderer" !== window.process.type
            ) ||
            (("undefined" === typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)) &&
              (("undefined" !== typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("undefined" !== typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ("undefined" !== typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ("undefined" !== typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }
        function o(t) {
          var r = this.useColors;
          if (
            ((t[0] =
              (r ? "%c" : "") +
              this.namespace +
              (r ? " %c" : " ") +
              t[0] +
              (r ? "%c " : " ") +
              "+" +
              e.humanize(this.diff)),
            r)
          ) {
            var i = "color: " + this.color;
            t.splice(1, 0, i, "color: inherit");
            var n = 0,
              o = 0;
            (t[0].replace(/%[a-zA-Z%]/g, function (t) {
              "%%" !== t && (n++, "%c" === t && (o = n));
            }),
              t.splice(o, 0, i));
          }
        }
        function s() {
          return (
            "object" === typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }
        function f(t) {
          try {
            null == t ? e.storage.removeItem("debug") : (e.storage.debug = t);
          } catch (r) {}
        }
        function u() {
          var t;
          try {
            t = e.storage.debug;
          } catch (r) {}
          return (
            !t && "undefined" !== typeof i && "env" in i && (t = i.env.DEBUG),
            t
          );
        }
        function a() {
          try {
            return window.localStorage;
          } catch (t) {}
        }
        ((e = t.exports = r(10490)),
          (e.log = s),
          (e.formatArgs = o),
          (e.save = f),
          (e.load = u),
          (e.useColors = n),
          (e.storage =
            "undefined" != typeof chrome && "undefined" != typeof chrome.storage
              ? chrome.storage.local
              : a()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (e.formatters.j = function (t) {
            try {
              return JSON.stringify(t);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          }),
          e.enable(u()));
      }).call(this, r(18));
    },
    10490: function (t, e, r) {
      function i(t) {
        var r,
          i = 0;
        for (r in t) ((i = (i << 5) - i + t.charCodeAt(r)), (i |= 0));
        return e.colors[Math.abs(i) % e.colors.length];
      }
      function n(t) {
        var r;
        function n() {
          if (n.enabled) {
            var t = n,
              i = +new Date(),
              o = i - (r || i);
            ((t.diff = o), (t.prev = r), (t.curr = i), (r = i));
            for (var s = new Array(arguments.length), f = 0; f < s.length; f++)
              s[f] = arguments[f];
            ((s[0] = e.coerce(s[0])),
              "string" !== typeof s[0] && s.unshift("%O"));
            var u = 0;
            ((s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, i) {
              if ("%%" === r) return r;
              u++;
              var n = e.formatters[i];
              if ("function" === typeof n) {
                var o = s[u];
                ((r = n.call(t, o)), s.splice(u, 1), u--);
              }
              return r;
            })),
              e.formatArgs.call(t, s));
            var a = n.log || e.log || console.log.bind(console);
            a.apply(t, s);
          }
        }
        return (
          (n.namespace = t),
          (n.enabled = e.enabled(t)),
          (n.useColors = e.useColors()),
          (n.color = i(t)),
          (n.destroy = o),
          "function" === typeof e.init && e.init(n),
          e.instances.push(n),
          n
        );
      }
      function o() {
        var t = e.instances.indexOf(this);
        return -1 !== t && (e.instances.splice(t, 1), !0);
      }
      function s(t) {
        var r;
        (e.save(t), (e.names = []), (e.skips = []));
        var i = ("string" === typeof t ? t : "").split(/[\s,]+/),
          n = i.length;
        for (r = 0; r < n; r++)
          i[r] &&
            ((t = i[r].replace(/\*/g, ".*?")),
            "-" === t[0]
              ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
              : e.names.push(new RegExp("^" + t + "$")));
        for (r = 0; r < e.instances.length; r++) {
          var o = e.instances[r];
          o.enabled = e.enabled(o.namespace);
        }
      }
      function f() {
        e.enable("");
      }
      function u(t) {
        if ("*" === t[t.length - 1]) return !0;
        var r, i;
        for (r = 0, i = e.skips.length; r < i; r++)
          if (e.skips[r].test(t)) return !1;
        for (r = 0, i = e.names.length; r < i; r++)
          if (e.names[r].test(t)) return !0;
        return !1;
      }
      function a(t) {
        return t instanceof Error ? t.stack || t.message : t;
      }
      ((e = t.exports = n.debug = n["default"] = n),
        (e.coerce = a),
        (e.disable = f),
        (e.enable = s),
        (e.enabled = u),
        (e.humanize = r(10491)),
        (e.instances = []),
        (e.names = []),
        (e.skips = []),
        (e.formatters = {}));
    },
    10491: function (t, e) {
      var r = 1e3,
        i = 60 * r,
        n = 60 * i,
        o = 24 * n,
        s = 365.25 * o;
      function f(t) {
        if (((t = String(t)), !(t.length > 100))) {
          var e =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              t,
            );
          if (e) {
            var f = parseFloat(e[1]),
              u = (e[2] || "ms").toLowerCase();
            switch (u) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return f * s;
              case "days":
              case "day":
              case "d":
                return f * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return f * n;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return f * i;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return f * r;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return f;
              default:
                return;
            }
          }
        }
      }
      function u(t) {
        return t >= o
          ? Math.round(t / o) + "d"
          : t >= n
            ? Math.round(t / n) + "h"
            : t >= i
              ? Math.round(t / i) + "m"
              : t >= r
                ? Math.round(t / r) + "s"
                : t + "ms";
      }
      function a(t) {
        return (
          h(t, o, "day") ||
          h(t, n, "hour") ||
          h(t, i, "minute") ||
          h(t, r, "second") ||
          t + " ms"
        );
      }
      function h(t, e, r) {
        if (!(t < e))
          return t < 1.5 * e
            ? Math.floor(t / e) + " " + r
            : Math.ceil(t / e) + " " + r + "s";
      }
      t.exports = function (t, e) {
        e = e || {};
        var r = typeof t;
        if ("string" === r && t.length > 0) return f(t);
        if ("number" === r && !1 === isNaN(t)) return e.long ? a(t) : u(t);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(t),
        );
      };
    },
    2758: function (t, e, r) {
      var i = r(2848),
        n = r(2813),
        o = i.tfJSON,
        s = i.TfTypeError,
        f = i.TfPropertyTypeError,
        u = i.tfSubError,
        a = i.getValueTypeName,
        h = {
          arrayOf: function (t, e) {
            function r(r, i) {
              return (
                !!n.Array(r) &&
                !n.Nil(r) &&
                !(void 0 !== e.minLength && r.length < e.minLength) &&
                !(void 0 !== e.maxLength && r.length > e.maxLength) &&
                (void 0 === e.length || r.length === e.length) &&
                r.every(function (e, r) {
                  try {
                    return A(t, e, i);
                  } catch (n) {
                    throw u(n, r);
                  }
                })
              );
            }
            return (
              (t = c(t)),
              (e = e || {}),
              (r.toJSON = function () {
                var r = "[" + o(t) + "]";
                return (
                  void 0 !== e.length
                    ? (r += "{" + e.length + "}")
                    : (void 0 === e.minLength && void 0 === e.maxLength) ||
                      (r +=
                        "{" +
                        (void 0 === e.minLength ? 0 : e.minLength) +
                        "," +
                        (void 0 === e.maxLength ? 1 / 0 : e.maxLength) +
                        "}"),
                  r
                );
              }),
              r
            );
          },
          maybe: function t(e) {
            function r(r, i) {
              return n.Nil(r) || e(r, i, t);
            }
            return (
              (e = c(e)),
              (r.toJSON = function () {
                return "?" + o(e);
              }),
              r
            );
          },
          map: function (t, e) {
            function r(r, i) {
              if (!n.Object(r)) return !1;
              if (n.Nil(r)) return !1;
              for (var o in r) {
                try {
                  e && A(e, o, i);
                } catch (f) {
                  throw u(f, o, "key");
                }
                try {
                  var s = r[o];
                  A(t, s, i);
                } catch (f) {
                  throw u(f, o);
                }
              }
              return !0;
            }
            return (
              (t = c(t)),
              e && (e = c(e)),
              (r.toJSON = e
                ? function () {
                    return "{" + o(e) + ": " + o(t) + "}";
                  }
                : function () {
                    return "{" + o(t) + "}";
                  }),
              r
            );
          },
          object: function (t) {
            var e = {};
            for (var r in t) e[r] = c(t[r]);
            function i(t, r) {
              if (!n.Object(t)) return !1;
              if (n.Nil(t)) return !1;
              var i;
              try {
                for (i in e) {
                  var o = e[i],
                    s = t[i];
                  A(o, s, r);
                }
              } catch (a) {
                throw u(a, i);
              }
              if (r) for (i in t) if (!e[i]) throw new f(void 0, i);
              return !0;
            }
            return (
              (i.toJSON = function () {
                return o(e);
              }),
              i
            );
          },
          anyOf: function () {
            var t = [].slice.call(arguments).map(c);
            function e(e, r) {
              return t.some(function (t) {
                try {
                  return A(t, e, r);
                } catch (i) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(o).join("|");
              }),
              e
            );
          },
          allOf: function () {
            var t = [].slice.call(arguments).map(c);
            function e(e, r) {
              return t.every(function (t) {
                try {
                  return A(t, e, r);
                } catch (i) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(o).join(" & ");
              }),
              e
            );
          },
          quacksLike: function (t) {
            function e(e) {
              return t === a(e);
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
          tuple: function () {
            var t = [].slice.call(arguments).map(c);
            function e(e, r) {
              return (
                !n.Nil(e) &&
                !n.Nil(e.length) &&
                (!r || e.length === t.length) &&
                t.every(function (t, i) {
                  try {
                    return A(t, e[i], r);
                  } catch (n) {
                    throw u(n, i);
                  }
                })
              );
            }
            return (
              (e.toJSON = function () {
                return "(" + t.map(o).join(", ") + ")";
              }),
              e
            );
          },
          value: function (t) {
            function e(e) {
              return e === t;
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
        };
      function c(t) {
        if (n.String(t))
          return "?" === t[0] ? h.maybe(t.slice(1)) : n[t] || h.quacksLike(t);
        if (t && n.Object(t)) {
          if (n.Array(t)) {
            if (1 !== t.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1",
              );
            return h.arrayOf(t[0]);
          }
          return h.object(t);
        }
        return n.Function(t) ? t : h.value(t);
      }
      function A(t, e, r, i) {
        if (n.Function(t)) {
          if (t(e, r)) return !0;
          throw new s(i || t, e);
        }
        return A(c(t), e, r);
      }
      for (var I in ((h.oneOf = h.anyOf), n)) A[I] = n[I];
      for (I in h) A[I] = h[I];
      var p = r(2954);
      for (I in p) A[I] = p[I];
      ((A.compile = c),
        (A.TfTypeError = s),
        (A.TfPropertyTypeError = f),
        (t.exports = A));
    },
    2771: function (t) {
      t.exports = JSON.parse(
        '{"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}',
      );
    },
    2802: function (t, e, r) {
      var BigInteger = r(3048);
      (r(3268), (t.exports = BigInteger));
    },
    2813: function (t, e) {
      var r = {
        Array: function (t) {
          return null !== t && void 0 !== t && t.constructor === Array;
        },
        Boolean: function (t) {
          return "boolean" === typeof t;
        },
        Function: function (t) {
          return "function" === typeof t;
        },
        Nil: function (t) {
          return void 0 === t || null === t;
        },
        Number: function (t) {
          return "number" === typeof t;
        },
        Object: function (t) {
          return "object" === typeof t;
        },
        String: function (t) {
          return "string" === typeof t;
        },
        "": function () {
          return !0;
        },
      };
      for (var i in ((r.Null = r.Nil), r))
        r[i].toJSON = function (t) {
          return t;
        }.bind(null, i);
      t.exports = r;
    },
    2838: function (t, e, r) {
      (function (e) {
        var i = r(2792);
        function n(t, e) {
          if (void 0 !== e && t[0] !== e)
            throw new Error("Invalid network version");
          if (33 === t.length)
            return {
              version: t[0],
              privateKey: t.slice(1, 33),
              compressed: !1,
            };
          if (34 !== t.length) throw new Error("Invalid WIF length");
          if (1 !== t[33]) throw new Error("Invalid compression flag");
          return { version: t[0], privateKey: t.slice(1, 33), compressed: !0 };
        }
        function o(t, r, i) {
          var n = new e(i ? 34 : 33);
          return (n.writeUInt8(t, 0), r.copy(n, 1), i && (n[33] = 1), n);
        }
        function s(t, e) {
          return n(i.decode(t), e);
        }
        function f(t, e, r) {
          return "number" === typeof t
            ? i.encode(o(t, e, r))
            : i.encode(o(t.version, t.privateKey, t.compressed));
        }
        t.exports = { decode: s, decodeRaw: n, encode: f, encodeRaw: o };
      }).call(this, r(2).Buffer);
    },
    2848: function (t, e, r) {
      var i = r(2813);
      function n(t) {
        return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
      }
      function o(t) {
        return i.Nil(t) ? "" : n(t.constructor);
      }
      function s(t) {
        return i.Function(t)
          ? ""
          : i.String(t)
            ? JSON.stringify(t)
            : t && i.Object(t)
              ? ""
              : t;
      }
      function f(t, e) {
        Error.captureStackTrace && Error.captureStackTrace(t, e);
      }
      function u(t) {
        return i.Function(t)
          ? t.toJSON
            ? t.toJSON()
            : n(t)
          : i.Array(t)
            ? "Array"
            : t && i.Object(t)
              ? "Object"
              : void 0 !== t
                ? t
                : "";
      }
      function a(t, e, r) {
        var i = s(e);
        return (
          "Expected " +
          u(t) +
          ", got" +
          ("" !== r ? " " + r : "") +
          ("" !== i ? " " + i : "")
        );
      }
      function h(t, e, r) {
        ((r = r || o(e)),
          (this.message = a(t, e, r)),
          f(this, h),
          (this.__type = t),
          (this.__value = e),
          (this.__valueTypeName = r));
      }
      function c(t, e, r, i, n) {
        var o = '" of type ';
        return (
          "key" === e && (o = '" with key type '),
          a('property "' + u(r) + o + u(t), i, n)
        );
      }
      function A(t, e, r, i, n) {
        (t
          ? ((n = n || o(i)), (this.message = c(t, r, e, i, n)))
          : (this.message = 'Unexpected property "' + e + '"'),
          f(this, h),
          (this.__label = r),
          (this.__property = e),
          (this.__type = t),
          (this.__value = i),
          (this.__valueTypeName = n));
      }
      function I(t, e) {
        return new h(t, {}, e);
      }
      function p(t, e, r) {
        return (
          t instanceof A
            ? ((e = e + "." + t.__property),
              (t = new A(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
            : t instanceof h &&
              (t = new A(t.__type, e, r, t.__value, t.__valueTypeName)),
          f(t),
          t
        );
      }
      ((h.prototype = Object.create(Error.prototype)),
        (h.prototype.constructor = h),
        (A.prototype = Object.create(Error.prototype)),
        (A.prototype.constructor = h),
        (t.exports = {
          TfTypeError: h,
          TfPropertyTypeError: A,
          tfCustomError: I,
          tfSubError: p,
          tfJSON: u,
          getValueTypeName: o,
        }));
    },
    2864: function (t, e, r) {
      "use strict";
      var i = r(46).Buffer,
        n = 9007199254740991;
      function o(t) {
        if (t < 0 || t > n || t % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function s(t, e, r) {
        if ((o(t), e || (e = i.allocUnsafe(u(t))), !i.isBuffer(e)))
          throw new TypeError("buffer must be a Buffer instance");
        return (
          r || (r = 0),
          t < 253
            ? (e.writeUInt8(t, r), (s.bytes = 1))
            : t <= 65535
              ? (e.writeUInt8(253, r), e.writeUInt16LE(t, r + 1), (s.bytes = 3))
              : t <= 4294967295
                ? (e.writeUInt8(254, r),
                  e.writeUInt32LE(t, r + 1),
                  (s.bytes = 5))
                : (e.writeUInt8(255, r),
                  e.writeUInt32LE(t >>> 0, r + 1),
                  e.writeUInt32LE((t / 4294967296) | 0, r + 5),
                  (s.bytes = 9)),
          e
        );
      }
      function f(t, e) {
        if (!i.isBuffer(t))
          throw new TypeError("buffer must be a Buffer instance");
        e || (e = 0);
        var r = t.readUInt8(e);
        if (r < 253) return ((f.bytes = 1), r);
        if (253 === r) return ((f.bytes = 3), t.readUInt16LE(e + 1));
        if (254 === r) return ((f.bytes = 5), t.readUInt32LE(e + 1));
        f.bytes = 9;
        var n = t.readUInt32LE(e + 1),
          s = t.readUInt32LE(e + 5),
          u = 4294967296 * s + n;
        return (o(u), u);
      }
      function u(t) {
        return (o(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9);
      }
      t.exports = { encode: s, decode: f, encodingLength: u };
    },
    2898: function (t, e, r) {
      var i = r(46).Buffer;
      function n(t) {
        if (t.length < 8) return !1;
        if (t.length > 72) return !1;
        if (48 !== t[0]) return !1;
        if (t[1] !== t.length - 2) return !1;
        if (2 !== t[2]) return !1;
        var e = t[3];
        if (0 === e) return !1;
        if (5 + e >= t.length) return !1;
        if (2 !== t[4 + e]) return !1;
        var r = t[5 + e];
        return (
          0 !== r &&
          6 + e + r === t.length &&
          !(128 & t[4]) &&
          !(e > 1 && 0 === t[4] && !(128 & t[5])) &&
          !(128 & t[e + 6]) &&
          !(r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
        );
      }
      function o(t) {
        if (t.length < 8) throw new Error("DER sequence length is too short");
        if (t.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== t[0]) throw new Error("Expected DER sequence");
        if (t[1] !== t.length - 2)
          throw new Error("DER sequence length is invalid");
        if (2 !== t[2]) throw new Error("Expected DER integer");
        var e = t[3];
        if (0 === e) throw new Error("R length is zero");
        if (5 + e >= t.length) throw new Error("R length is too long");
        if (2 !== t[4 + e]) throw new Error("Expected DER integer (2)");
        var r = t[5 + e];
        if (0 === r) throw new Error("S length is zero");
        if (6 + e + r !== t.length) throw new Error("S length is invalid");
        if (128 & t[4]) throw new Error("R value is negative");
        if (e > 1 && 0 === t[4] && !(128 & t[5]))
          throw new Error("R value excessively padded");
        if (128 & t[e + 6]) throw new Error("S value is negative");
        if (r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
          throw new Error("S value excessively padded");
        return { r: t.slice(4, 4 + e), s: t.slice(6 + e) };
      }
      function s(t, e) {
        var r = t.length,
          n = e.length;
        if (0 === r) throw new Error("R length is zero");
        if (0 === n) throw new Error("S length is zero");
        if (r > 33) throw new Error("R length is too long");
        if (n > 33) throw new Error("S length is too long");
        if (128 & t[0]) throw new Error("R value is negative");
        if (128 & e[0]) throw new Error("S value is negative");
        if (r > 1 && 0 === t[0] && !(128 & t[1]))
          throw new Error("R value excessively padded");
        if (n > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("S value excessively padded");
        var o = i.allocUnsafe(6 + r + n);
        return (
          (o[0] = 48),
          (o[1] = o.length - 2),
          (o[2] = 2),
          (o[3] = t.length),
          t.copy(o, 4),
          (o[4 + r] = 2),
          (o[5 + r] = e.length),
          e.copy(o, 6 + r),
          o
        );
      }
      t.exports = { check: n, decode: o, encode: s };
    },
    2954: function (t, e, r) {
      (function (e) {
        var i = r(2813),
          n = r(2848);
        function o(t) {
          return e.isBuffer(t);
        }
        function s(t) {
          return "string" === typeof t && /^([0-9a-f]{2})+$/i.test(t);
        }
        function f(t, e) {
          var r = t.toJSON();
          function i(i) {
            if (!t(i)) return !1;
            if (i.length === e) return !0;
            throw n.tfCustomError(
              r + "(Length: " + e + ")",
              r + "(Length: " + i.length + ")",
            );
          }
          return (
            (i.toJSON = function () {
              return r;
            }),
            i
          );
        }
        var u = f.bind(null, i.Array),
          a = f.bind(null, o),
          h = f.bind(null, s),
          c = f.bind(null, i.String);
        function A(t, e, r) {
          function n(i, n) {
            return r(i, n) && i > t && i < e;
          }
          return (
            (r = r || i.Number),
            (n.toJSON = function () {
              return `${r.toJSON()} between [${t}, ${e}]`;
            }),
            n
          );
        }
        var I = Math.pow(2, 53) - 1;
        function p(t) {
          return "number" === typeof t && isFinite(t);
        }
        function l(t) {
          return (t << 24) >> 24 === t;
        }
        function g(t) {
          return (t << 16) >> 16 === t;
        }
        function d(t) {
          return (0 | t) === t;
        }
        function E(t) {
          return (
            "number" === typeof t && t >= -I && t <= I && Math.floor(t) === t
          );
        }
        function w(t) {
          return (255 & t) === t;
        }
        function y(t) {
          return (65535 & t) === t;
        }
        function C(t) {
          return t >>> 0 === t;
        }
        function v(t) {
          return (
            "number" === typeof t && t >= 0 && t <= I && Math.floor(t) === t
          );
        }
        var S = {
          ArrayN: u,
          Buffer: o,
          BufferN: a,
          Finite: p,
          Hex: s,
          HexN: h,
          Int8: l,
          Int16: g,
          Int32: d,
          Int53: E,
          Range: A,
          StringN: c,
          UInt8: w,
          UInt16: y,
          UInt32: C,
          UInt53: v,
        };
        for (var m in S)
          S[m].toJSON = function (t) {
            return t;
          }.bind(null, m);
        t.exports = S;
      }).call(this, r(2).Buffer);
    },
    2975: function (t, e, r) {
      var Point = r(3137),
        i = r(3138),
        n = r(3412);
      t.exports = { Curve: i, Point: Point, getCurveByName: n };
    },
    2985: function (t, e, r) {
      var i = r(2758),
        n = Math.pow(2, 31) - 1;
      function o(t) {
        return i.UInt32(t) && t <= n;
      }
      function s(t) {
        return i.String(t) && t.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }
      s.toJSON = function () {
        return "BIP32 derivation path";
      };
      var f = 21e14;
      function u(t) {
        return i.UInt53(t) && t <= f;
      }
      var a = i.quacksLike("BigInteger"),
        h = i.quacksLike("Point"),
        ECSignature = i.compile({ r: a, s: a }),
        c = i.oneOf(i.UInt8, i.UInt16),
        A = i.compile({
          messagePrefix: i.oneOf(i.Buffer, i.String),
          bip32: { public: i.UInt32, private: i.UInt32 },
          pubKeyHash: c,
          scriptHash: c,
          wif: i.UInt8,
        }),
        I = {
          BigInt: a,
          BIP32Path: s,
          Buffer256bit: i.BufferN(32),
          ECPoint: h,
          ECSignature: ECSignature,
          Hash160bit: i.BufferN(20),
          Hash256bit: i.BufferN(32),
          Network: A,
          Satoshi: u,
          UInt31: o,
          NetworkVersion: c,
        };
      for (var p in i) I[p] = i[p];
      t.exports = I;
    },
    3007: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(2898),
        o = r(3062),
        s = r(2758),
        f = r(2985),
        u = r(6665),
        a = r(2771),
        h = r(3108),
        c = a.OP_RESERVED;
      function A(t) {
        return (
          f.Number(t) &&
          (t === a.OP_0 || (t >= a.OP_1 && t <= a.OP_16) || t === a.OP_1NEGATE)
        );
      }
      function I(t) {
        return f.Buffer(t) || A(t);
      }
      function p(t) {
        return f.Array(t) && t.every(I);
      }
      function l(t) {
        return 0 === t.length
          ? a.OP_0
          : 1 === t.length
            ? t[0] >= 1 && t[0] <= 16
              ? c + t[0]
              : 129 === t[0]
                ? a.OP_1NEGATE
                : void 0
            : void 0;
      }
      function g(t) {
        if (i.isBuffer(t)) return t;
        s(f.Array, t);
        var e = t.reduce(function (t, e) {
            return i.isBuffer(e)
              ? 1 === e.length && void 0 !== l(e)
                ? t + 1
                : t + o.encodingLength(e.length) + e.length
              : t + 1;
          }, 0),
          r = i.allocUnsafe(e),
          n = 0;
        if (
          (t.forEach(function (t) {
            if (i.isBuffer(t)) {
              var e = l(t);
              if (void 0 !== e) return (r.writeUInt8(e, n), void (n += 1));
              ((n += o.encode(r, t.length, n)), t.copy(r, n), (n += t.length));
            } else (r.writeUInt8(t, n), (n += 1));
          }),
          n !== r.length)
        )
          throw new Error("Could not decode chunks");
        return r;
      }
      function d(t) {
        if (f.Array(t)) return t;
        s(f.Buffer, t);
        var e = [],
          r = 0;
        while (r < t.length) {
          var i = t[r];
          if (i > a.OP_0 && i <= a.OP_PUSHDATA4) {
            var n = o.decode(t, r);
            if (null === n) return [];
            if (((r += n.size), r + n.number > t.length)) return [];
            var u = t.slice(r, r + n.number);
            r += n.number;
            var h = l(u);
            void 0 !== h ? e.push(h) : e.push(u);
          } else (e.push(i), (r += 1));
        }
        return e;
      }
      function E(t) {
        return (
          i.isBuffer(t) && (t = d(t)),
          t
            .map(function (t) {
              if (i.isBuffer(t)) {
                var e = l(t);
                if (void 0 === e) return t.toString("hex");
                t = e;
              }
              return h[t];
            })
            .join(" ")
        );
      }
      function w(t) {
        return (
          s(f.String, t),
          g(
            t.split(" ").map(function (t) {
              return void 0 !== a[t] ? a[t] : (s(f.Hex, t), i.from(t, "hex"));
            }),
          )
        );
      }
      function y(t) {
        return (
          (t = d(t)),
          s(p, t),
          t.map(function (t) {
            return i.isBuffer(t)
              ? t
              : t === a.OP_0
                ? i.allocUnsafe(0)
                : u.encode(t - c);
          })
        );
      }
      function C(t) {
        if (!i.isBuffer(t)) return !1;
        if (t.length < 33) return !1;
        switch (t[0]) {
          case 2:
          case 3:
            return 33 === t.length;
          case 4:
            return 65 === t.length;
        }
        return !1;
      }
      function v(t) {
        var e = -193 & t;
        return e > 0 && e < 4;
      }
      function S(t) {
        return (
          !!i.isBuffer(t) && !!v(t[t.length - 1]) && n.check(t.slice(0, -1))
        );
      }
      t.exports = {
        compile: g,
        decompile: d,
        fromASM: w,
        toASM: E,
        toStack: y,
        number: r(6665),
        isCanonicalPubKey: C,
        isCanonicalSignature: S,
        isPushOnly: p,
        isDefinedHashType: v,
      };
    },
    3048: function (t, e, r) {
      function BigInteger(t, e, r) {
        if (!(this instanceof BigInteger)) return new BigInteger(t, e, r);
        null != t &&
          ("number" == typeof t
            ? this.fromNumber(t, e, r)
            : null == e && "string" != typeof t
              ? this.fromString(t, 256)
              : this.fromString(t, e));
      }
      var i,
        n = BigInteger.prototype;
      function o(t, e, r, i, n, o) {
        while (--o >= 0) {
          var s = e * this[t++] + r[i] + n;
          ((n = Math.floor(s / 67108864)), (r[i++] = 67108863 & s));
        }
        return n;
      }
      ((n.__bigi = r(3267).version),
        (BigInteger.isBigInteger = function (t, e) {
          return t && t.__bigi && (!e || t.__bigi === n.__bigi);
        }),
        (BigInteger.prototype.am = o),
        (i = 26),
        (BigInteger.prototype.DB = i),
        (BigInteger.prototype.DM = (1 << i) - 1));
      var s = (BigInteger.prototype.DV = 1 << i),
        f = 52;
      ((BigInteger.prototype.FV = Math.pow(2, f)),
        (BigInteger.prototype.F1 = f - i),
        (BigInteger.prototype.F2 = 2 * i - f));
      var u,
        a,
        h = "0123456789abcdefghijklmnopqrstuvwxyz",
        c = new Array();
      for (u = "0".charCodeAt(0), a = 0; a <= 9; ++a) c[u++] = a;
      for (u = "a".charCodeAt(0), a = 10; a < 36; ++a) c[u++] = a;
      for (u = "A".charCodeAt(0), a = 10; a < 36; ++a) c[u++] = a;
      function A(t) {
        return h.charAt(t);
      }
      function I(t, e) {
        var r = c[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function p(t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        ((t.t = this.t), (t.s = this.s));
      }
      function l(t) {
        ((this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + s) : (this.t = 0));
      }
      function g(t) {
        var e = new BigInteger();
        return (e.fromInt(t), e);
      }
      function d(t, e) {
        var r,
          i = this;
        if (16 == e) r = 4;
        else if (8 == e) r = 3;
        else if (256 == e) r = 8;
        else if (2 == e) r = 1;
        else if (32 == e) r = 5;
        else {
          if (4 != e) return void i.fromRadix(t, e);
          r = 2;
        }
        ((i.t = 0), (i.s = 0));
        var n = t.length,
          o = !1,
          s = 0;
        while (--n >= 0) {
          var f = 8 == r ? 255 & t[n] : I(t, n);
          f < 0
            ? "-" == t.charAt(n) && (o = !0)
            : ((o = !1),
              0 == s
                ? (i[i.t++] = f)
                : s + r > i.DB
                  ? ((i[i.t - 1] |= (f & ((1 << (i.DB - s)) - 1)) << s),
                    (i[i.t++] = f >> (i.DB - s)))
                  : (i[i.t - 1] |= f << s),
              (s += r),
              s >= i.DB && (s -= i.DB));
        }
        (8 == r &&
          0 != (128 & t[0]) &&
          ((i.s = -1), s > 0 && (i[i.t - 1] |= ((1 << (i.DB - s)) - 1) << s)),
          i.clamp(),
          o && BigInteger.ZERO.subTo(i, i));
      }
      function E() {
        var t = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == t) --this.t;
      }
      function w(t) {
        var e,
          r = this;
        if (r.s < 0) return "-" + r.negate().toString(t);
        if (16 == t) e = 4;
        else if (8 == t) e = 3;
        else if (2 == t) e = 1;
        else if (32 == t) e = 5;
        else {
          if (4 != t) return r.toRadix(t);
          e = 2;
        }
        var i,
          n = (1 << e) - 1,
          o = !1,
          s = "",
          f = r.t,
          u = r.DB - ((f * r.DB) % e);
        if (f-- > 0) {
          u < r.DB && (i = r[f] >> u) > 0 && ((o = !0), (s = A(i)));
          while (f >= 0)
            (u < e
              ? ((i = (r[f] & ((1 << u) - 1)) << (e - u)),
                (i |= r[--f] >> (u += r.DB - e)))
              : ((i = (r[f] >> (u -= e)) & n), u <= 0 && ((u += r.DB), --f)),
              i > 0 && (o = !0),
              o && (s += A(i)));
        }
        return o ? s : "0";
      }
      function y() {
        var t = new BigInteger();
        return (BigInteger.ZERO.subTo(this, t), t);
      }
      function C() {
        return this.s < 0 ? this.negate() : this;
      }
      function v(t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var r = this.t;
        if (((e = r - t.t), 0 != e)) return this.s < 0 ? -e : e;
        while (--r >= 0) if (0 != (e = this[r] - t[r])) return e;
        return 0;
      }
      function S(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      function m() {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + S(this[this.t - 1] ^ (this.s & this.DM));
      }
      function b() {
        return this.bitLength() >> 3;
      }
      function B(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r) e[r] = 0;
        ((e.t = this.t + t), (e.s = this.s));
      }
      function _(t, e) {
        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
        ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
      }
      function P(t, e) {
        var r,
          i = this,
          n = t % i.DB,
          o = i.DB - n,
          s = (1 << o) - 1,
          f = Math.floor(t / i.DB),
          u = (i.s << n) & i.DM;
        for (r = i.t - 1; r >= 0; --r)
          ((e[r + f + 1] = (i[r] >> o) | u), (u = (i[r] & s) << n));
        for (r = f - 1; r >= 0; --r) e[r] = 0;
        ((e[f] = u), (e.t = i.t + f + 1), (e.s = i.s), e.clamp());
      }
      function D(t, e) {
        var r = this;
        e.s = r.s;
        var i = Math.floor(t / r.DB);
        if (i >= r.t) e.t = 0;
        else {
          var n = t % r.DB,
            o = r.DB - n,
            s = (1 << n) - 1;
          e[0] = r[i] >> n;
          for (var f = i + 1; f < r.t; ++f)
            ((e[f - i - 1] |= (r[f] & s) << o), (e[f - i] = r[f] >> n));
          (n > 0 && (e[r.t - i - 1] |= (r.s & s) << o),
            (e.t = r.t - i),
            e.clamp());
        }
      }
      function T(t, e) {
        var r = this,
          i = 0,
          n = 0,
          o = Math.min(t.t, r.t);
        while (i < o) ((n += r[i] - t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
        if (t.t < r.t) {
          n -= t.s;
          while (i < r.t) ((n += r[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n += r.s;
        } else {
          n += r.s;
          while (i < t.t) ((n -= t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n -= t.s;
        }
        ((e.s = n < 0 ? -1 : 0),
          n < -1 ? (e[i++] = r.DV + n) : n > 0 && (e[i++] = n),
          (e.t = i),
          e.clamp());
      }
      function L(t, e) {
        var r = this.abs(),
          i = t.abs(),
          n = r.t;
        e.t = n + i.t;
        while (--n >= 0) e[n] = 0;
        for (n = 0; n < i.t; ++n) e[n + r.t] = r.am(0, i[n], e, n, 0, r.t);
        ((e.s = 0), e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e));
      }
      function U(t) {
        var e = this.abs(),
          r = (t.t = 2 * e.t);
        while (--r >= 0) t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var i = e.am(r, e[r], t, 2 * r, 0, 1);
          (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >=
            e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
        }
        (t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
          (t.s = 0),
          t.clamp());
      }
      function O(t, e, r) {
        var i = this,
          n = t.abs();
        if (!(n.t <= 0)) {
          var o = i.abs();
          if (o.t < n.t)
            return (null != e && e.fromInt(0), void (null != r && i.copyTo(r)));
          null == r && (r = new BigInteger());
          var s = new BigInteger(),
            f = i.s,
            u = t.s,
            a = i.DB - S(n[n.t - 1]);
          a > 0
            ? (n.lShiftTo(a, s), o.lShiftTo(a, r))
            : (n.copyTo(s), o.copyTo(r));
          var h = s.t,
            c = s[h - 1];
          if (0 != c) {
            var A = c * (1 << i.F1) + (h > 1 ? s[h - 2] >> i.F2 : 0),
              I = i.FV / A,
              p = (1 << i.F1) / A,
              l = 1 << i.F2,
              g = r.t,
              d = g - h,
              E = null == e ? new BigInteger() : e;
            (s.dlShiftTo(d, E),
              r.compareTo(E) >= 0 && ((r[r.t++] = 1), r.subTo(E, r)),
              BigInteger.ONE.dlShiftTo(h, E),
              E.subTo(s, s));
            while (s.t < h) s[s.t++] = 0;
            while (--d >= 0) {
              var w =
                r[--g] == c ? i.DM : Math.floor(r[g] * I + (r[g - 1] + l) * p);
              if ((r[g] += s.am(0, w, r, d, 0, h)) < w) {
                (s.dlShiftTo(d, E), r.subTo(E, r));
                while (r[g] < --w) r.subTo(E, r);
              }
            }
            (null != e &&
              (r.drShiftTo(h, e), f != u && BigInteger.ZERO.subTo(e, e)),
              (r.t = h),
              r.clamp(),
              a > 0 && r.rShiftTo(a, r),
              f < 0 && BigInteger.ZERO.subTo(r, r));
          }
        }
      }
      function Q(t) {
        var e = new BigInteger();
        return (
          this.abs().divRemTo(t, null, e),
          this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e),
          e
        );
      }
      function N(t) {
        this.m = t;
      }
      function K(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }
      function H(t) {
        return t;
      }
      function x(t) {
        t.divRemTo(this.m, null, t);
      }
      function F(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function k(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function V() {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var e = 3 & t;
        return (
          (e = (e * (2 - (15 & t) * e)) & 15),
          (e = (e * (2 - (255 & t) * e)) & 255),
          (e = (e * (2 - (((65535 & t) * e) & 65535))) & 65535),
          (e = (e * (2 - ((t * e) % this.DV))) % this.DV),
          e > 0 ? this.DV - e : -e
        );
      }
      function R(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function G(t) {
        var e = new BigInteger();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e),
          e
        );
      }
      function Y(t) {
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function M(t) {
        while (t.t <= this.mt2) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var r = 32767 & t[e],
            i =
              (r * this.mpl +
                (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) &
              t.DM;
          ((r = e + this.m.t), (t[r] += this.m.am(0, i, t, e, 0, this.m.t)));
          while (t[r] >= t.DV) ((t[r] -= t.DV), t[++r]++);
        }
        (t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
      }
      function Z(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function W(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function J() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }
      function q(t, e) {
        if (t > 4294967295 || t < 1) return BigInteger.ONE;
        var r = new BigInteger(),
          i = new BigInteger(),
          n = e.convert(this),
          o = S(t) - 1;
        n.copyTo(r);
        while (--o >= 0)
          if ((e.sqrTo(r, i), (t & (1 << o)) > 0)) e.mulTo(i, n, r);
          else {
            var s = r;
            ((r = i), (i = s));
          }
        return e.revert(r);
      }
      function j(t, e) {
        var r;
        return (
          (r = t < 256 || e.isEven() ? new N(e) : new R(e)),
          this.exp(t, r)
        );
      }
      function z() {
        var t = new BigInteger();
        return (this.copyTo(t), t);
      }
      function X() {
        if (this.s < 0) {
          if (1 == this.t) return this[0] - this.DV;
          if (0 == this.t) return -1;
        } else {
          if (1 == this.t) return this[0];
          if (0 == this.t) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }
      function $() {
        return 0 == this.t ? this.s : (this[0] << 24) >> 24;
      }
      function tt() {
        return 0 == this.t ? this.s : (this[0] << 16) >> 16;
      }
      function et(t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }
      function rt() {
        return this.s < 0
          ? -1
          : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
      }
      function it(t) {
        if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
          return "0";
        var e = this.chunkSize(t),
          r = Math.pow(t, e),
          i = g(r),
          n = new BigInteger(),
          o = new BigInteger(),
          s = "";
        this.divRemTo(i, n, o);
        while (n.signum() > 0)
          ((s = (r + o.intValue()).toString(t).substr(1) + s),
            n.divRemTo(i, n, o));
        return o.intValue().toString(t) + s;
      }
      function nt(t, e) {
        var r = this;
        (r.fromInt(0), null == e && (e = 10));
        for (
          var i = r.chunkSize(e),
            n = Math.pow(e, i),
            o = !1,
            s = 0,
            f = 0,
            u = 0;
          u < t.length;
          ++u
        ) {
          var a = I(t, u);
          a < 0
            ? "-" == t.charAt(u) && 0 == r.signum() && (o = !0)
            : ((f = e * f + a),
              ++s >= i &&
                (r.dMultiply(n), r.dAddOffset(f, 0), (s = 0), (f = 0)));
        }
        (s > 0 && (r.dMultiply(Math.pow(e, s)), r.dAddOffset(f, 0)),
          o && BigInteger.ZERO.subTo(r, r));
      }
      function ot(t, e, r) {
        var i = this;
        if ("number" == typeof e)
          if (t < 2) i.fromInt(1);
          else {
            (i.fromNumber(t, r),
              i.testBit(t - 1) ||
                i.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), It, i),
              i.isEven() && i.dAddOffset(1, 0));
            while (!i.isProbablePrime(e))
              (i.dAddOffset(2, 0),
                i.bitLength() > t &&
                  i.subTo(BigInteger.ONE.shiftLeft(t - 1), i));
          }
        else {
          var n = new Array(),
            o = 7 & t;
          ((n.length = 1 + (t >> 3)),
            e.nextBytes(n),
            o > 0 ? (n[0] &= (1 << o) - 1) : (n[0] = 0),
            i.fromString(n, 256));
        }
      }
      function st() {
        var t = this,
          e = t.t,
          r = new Array();
        r[0] = t.s;
        var i,
          n = t.DB - ((e * t.DB) % 8),
          o = 0;
        if (e-- > 0) {
          n < t.DB &&
            (i = t[e] >> n) != (t.s & t.DM) >> n &&
            (r[o++] = i | (t.s << (t.DB - n)));
          while (e >= 0)
            (n < 8
              ? ((i = (t[e] & ((1 << n) - 1)) << (8 - n)),
                (i |= t[--e] >> (n += t.DB - 8)))
              : ((i = (t[e] >> (n -= 8)) & 255), n <= 0 && ((n += t.DB), --e)),
              0 != (128 & i) && (i |= -256),
              0 === o && (128 & t.s) != (128 & i) && ++o,
              (o > 0 || i != t.s) && (r[o++] = i));
        }
        return r;
      }
      function ft(t) {
        return 0 == this.compareTo(t);
      }
      function ut(t) {
        return this.compareTo(t) < 0 ? this : t;
      }
      function at(t) {
        return this.compareTo(t) > 0 ? this : t;
      }
      function ht(t, e, r) {
        var i,
          n,
          o = this,
          s = Math.min(t.t, o.t);
        for (i = 0; i < s; ++i) r[i] = e(o[i], t[i]);
        if (t.t < o.t) {
          for (n = t.s & o.DM, i = s; i < o.t; ++i) r[i] = e(o[i], n);
          r.t = o.t;
        } else {
          for (n = o.s & o.DM, i = s; i < t.t; ++i) r[i] = e(n, t[i]);
          r.t = t.t;
        }
        ((r.s = e(o.s, t.s)), r.clamp());
      }
      function ct(t, e) {
        return t & e;
      }
      function At(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, ct, e), e);
      }
      function It(t, e) {
        return t | e;
      }
      function pt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, It, e), e);
      }
      function lt(t, e) {
        return t ^ e;
      }
      function gt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, lt, e), e);
      }
      function dt(t, e) {
        return t & ~e;
      }
      function Et(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, dt, e), e);
      }
      function wt() {
        for (var t = new BigInteger(), e = 0; e < this.t; ++e)
          t[e] = this.DM & ~this[e];
        return ((t.t = this.t), (t.s = ~this.s), t);
      }
      function yt(t) {
        var e = new BigInteger();
        return (t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e);
      }
      function Ct(t) {
        var e = new BigInteger();
        return (t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e);
      }
      function vt(t) {
        if (0 == t) return -1;
        var e = 0;
        return (
          0 == (65535 & t) && ((t >>= 16), (e += 16)),
          0 == (255 & t) && ((t >>= 8), (e += 8)),
          0 == (15 & t) && ((t >>= 4), (e += 4)),
          0 == (3 & t) && ((t >>= 2), (e += 2)),
          0 == (1 & t) && ++e,
          e
        );
      }
      function St() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this[t]) return t * this.DB + vt(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function mt(t) {
        var e = 0;
        while (0 != t) ((t &= t - 1), ++e);
        return e;
      }
      function bt() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
          t += mt(this[r] ^ e);
        return t;
      }
      function Bt(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t
          ? 0 != this.s
          : 0 != (this[e] & (1 << (t % this.DB)));
      }
      function _t(t, e) {
        var r = BigInteger.ONE.shiftLeft(t);
        return (this.bitwiseTo(r, e, r), r);
      }
      function Pt(t) {
        return this.changeBit(t, It);
      }
      function Dt(t) {
        return this.changeBit(t, dt);
      }
      function Tt(t) {
        return this.changeBit(t, lt);
      }
      function Lt(t, e) {
        var r = this,
          i = 0,
          n = 0,
          o = Math.min(t.t, r.t);
        while (i < o) ((n += r[i] + t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
        if (t.t < r.t) {
          n += t.s;
          while (i < r.t) ((n += r[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n += r.s;
        } else {
          n += r.s;
          while (i < t.t) ((n += t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n += t.s;
        }
        ((e.s = n < 0 ? -1 : 0),
          n > 0 ? (e[i++] = n) : n < -1 && (e[i++] = r.DV + n),
          (e.t = i),
          e.clamp());
      }
      function Ut(t) {
        var e = new BigInteger();
        return (this.addTo(t, e), e);
      }
      function Ot(t) {
        var e = new BigInteger();
        return (this.subTo(t, e), e);
      }
      function Qt(t) {
        var e = new BigInteger();
        return (this.multiplyTo(t, e), e);
      }
      function Nt() {
        var t = new BigInteger();
        return (this.squareTo(t), t);
      }
      function Kt(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, e, null), e);
      }
      function Ht(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, null, e), e);
      }
      function xt(t) {
        var e = new BigInteger(),
          r = new BigInteger();
        return (this.divRemTo(t, e, r), new Array(e, r));
      }
      function Ft(t) {
        ((this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp());
      }
      function kt(t, e) {
        if (0 != t) {
          while (this.t <= e) this[this.t++] = 0;
          this[e] += t;
          while (this[e] >= this.DV)
            ((this[e] -= this.DV),
              ++e >= this.t && (this[this.t++] = 0),
              ++this[e]);
        }
      }
      function Vt() {}
      function Rt(t) {
        return t;
      }
      function Gt(t, e, r) {
        t.multiplyTo(e, r);
      }
      function Yt(t, e) {
        t.squareTo(e);
      }
      function Mt(t) {
        return this.exp(t, new Vt());
      }
      function Zt(t, e, r) {
        var i,
          n = Math.min(this.t + t.t, e);
        ((r.s = 0), (r.t = n));
        while (n > 0) r[--n] = 0;
        for (i = r.t - this.t; n < i; ++n)
          r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
        for (i = Math.min(t.t, e); n < i; ++n) this.am(0, t[n], r, n, 0, e - n);
        r.clamp();
      }
      function Wt(t, e, r) {
        --e;
        var i = (r.t = this.t + t.t - e);
        r.s = 0;
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(e - this.t, 0); i < t.t; ++i)
          r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
        (r.clamp(), r.drShiftTo(1, r));
      }
      function Jt(t) {
        ((this.r2 = new BigInteger()),
          (this.q3 = new BigInteger()),
          BigInteger.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      function qt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function jt(t) {
        return t;
      }
      function zt(t) {
        var e = this;
        (t.drShiftTo(e.m.t - 1, e.r2),
          t.t > e.m.t + 1 && ((t.t = e.m.t + 1), t.clamp()),
          e.mu.multiplyUpperTo(e.r2, e.m.t + 1, e.q3),
          e.m.multiplyLowerTo(e.q3, e.m.t + 1, e.r2));
        while (t.compareTo(e.r2) < 0) t.dAddOffset(1, e.m.t + 1);
        t.subTo(e.r2, t);
        while (t.compareTo(e.m) >= 0) t.subTo(e.m, t);
      }
      function Xt(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function $t(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function te(t, e) {
        var r,
          i,
          n = t.bitLength(),
          o = g(1);
        if (n <= 0) return o;
        ((r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
          (i = n < 8 ? new N(e) : e.isEven() ? new Jt(e) : new R(e)));
        var s = new Array(),
          f = 3,
          u = r - 1,
          a = (1 << r) - 1;
        if (((s[1] = i.convert(this)), r > 1)) {
          var h = new BigInteger();
          i.sqrTo(s[1], h);
          while (f <= a)
            ((s[f] = new BigInteger()), i.mulTo(h, s[f - 2], s[f]), (f += 2));
        }
        var c,
          A,
          I = t.t - 1,
          p = !0,
          l = new BigInteger();
        n = S(t[I]) - 1;
        while (I >= 0) {
          (n >= u
            ? (c = (t[I] >> (n - u)) & a)
            : ((c = (t[I] & ((1 << (n + 1)) - 1)) << (u - n)),
              I > 0 && (c |= t[I - 1] >> (this.DB + n - u))),
            (f = r));
          while (0 == (1 & c)) ((c >>= 1), --f);
          if (((n -= f) < 0 && ((n += this.DB), --I), p))
            (s[c].copyTo(o), (p = !1));
          else {
            while (f > 1) (i.sqrTo(o, l), i.sqrTo(l, o), (f -= 2));
            (f > 0 ? i.sqrTo(o, l) : ((A = o), (o = l), (l = A)),
              i.mulTo(l, s[c], o));
          }
          while (I >= 0 && 0 == (t[I] & (1 << n)))
            (i.sqrTo(o, l),
              (A = o),
              (o = l),
              (l = A),
              --n < 0 && ((n = this.DB - 1), --I));
        }
        return i.revert(o);
      }
      function ee(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
          var i = e;
          ((e = r), (r = i));
        }
        var n = e.getLowestSetBit(),
          o = r.getLowestSetBit();
        if (o < 0) return e;
        (n < o && (o = n), o > 0 && (e.rShiftTo(o, e), r.rShiftTo(o, r)));
        while (e.signum() > 0)
          ((n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
            (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
            e.compareTo(r) >= 0
              ? (e.subTo(r, e), e.rShiftTo(1, e))
              : (r.subTo(e, r), r.rShiftTo(1, r)));
        return (o > 0 && r.lShiftTo(o, r), r);
      }
      function re(t) {
        if (t <= 0) return 0;
        var e = this.DV % t,
          r = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (0 == e) r = this[0] % t;
          else for (var i = this.t - 1; i >= 0; --i) r = (e * r + this[i]) % t;
        return r;
      }
      function ie(t) {
        var e = t.isEven();
        if (0 === this.signum()) throw new Error("division by zero");
        if ((this.isEven() && e) || 0 == t.signum()) return BigInteger.ZERO;
        var r = t.clone(),
          i = this.clone(),
          n = g(1),
          o = g(0),
          s = g(0),
          f = g(1);
        while (0 != r.signum()) {
          while (r.isEven())
            (r.rShiftTo(1, r),
              e
                ? ((n.isEven() && o.isEven()) ||
                    (n.addTo(this, n), o.subTo(t, o)),
                  n.rShiftTo(1, n))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o));
          while (i.isEven())
            (i.rShiftTo(1, i),
              e
                ? ((s.isEven() && f.isEven()) ||
                    (s.addTo(this, s), f.subTo(t, f)),
                  s.rShiftTo(1, s))
                : f.isEven() || f.subTo(t, f),
              f.rShiftTo(1, f));
          r.compareTo(i) >= 0
            ? (r.subTo(i, r), e && n.subTo(s, n), o.subTo(f, o))
            : (i.subTo(r, i), e && s.subTo(n, s), f.subTo(o, f));
        }
        if (0 != i.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
        while (f.compareTo(t) >= 0) f.subTo(t, f);
        while (f.signum() < 0) f.addTo(t, f);
        return f;
      }
      ((N.prototype.convert = K),
        (N.prototype.revert = H),
        (N.prototype.reduce = x),
        (N.prototype.mulTo = F),
        (N.prototype.sqrTo = k),
        (R.prototype.convert = G),
        (R.prototype.revert = Y),
        (R.prototype.reduce = M),
        (R.prototype.mulTo = W),
        (R.prototype.sqrTo = Z),
        (n.copyTo = p),
        (n.fromInt = l),
        (n.fromString = d),
        (n.clamp = E),
        (n.dlShiftTo = B),
        (n.drShiftTo = _),
        (n.lShiftTo = P),
        (n.rShiftTo = D),
        (n.subTo = T),
        (n.multiplyTo = L),
        (n.squareTo = U),
        (n.divRemTo = O),
        (n.invDigit = V),
        (n.isEven = J),
        (n.exp = q),
        (n.toString = w),
        (n.negate = y),
        (n.abs = C),
        (n.compareTo = v),
        (n.bitLength = m),
        (n.byteLength = b),
        (n.mod = Q),
        (n.modPowInt = j),
        (Vt.prototype.convert = Rt),
        (Vt.prototype.revert = Rt),
        (Vt.prototype.mulTo = Gt),
        (Vt.prototype.sqrTo = Yt),
        (Jt.prototype.convert = qt),
        (Jt.prototype.revert = jt),
        (Jt.prototype.reduce = zt),
        (Jt.prototype.mulTo = $t),
        (Jt.prototype.sqrTo = Xt));
      var ne = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
          569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
          647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
          743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
          839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
          941, 947, 953, 967, 971, 977, 983, 991, 997,
        ],
        oe = (1 << 26) / ne[ne.length - 1];
      function se(t) {
        var e,
          r = this.abs();
        if (1 == r.t && r[0] <= ne[ne.length - 1]) {
          for (e = 0; e < ne.length; ++e) if (r[0] == ne[e]) return !0;
          return !1;
        }
        if (r.isEven()) return !1;
        e = 1;
        while (e < ne.length) {
          var i = ne[e],
            n = e + 1;
          while (n < ne.length && i < oe) i *= ne[n++];
          i = r.modInt(i);
          while (e < n) if (i % ne[e++] == 0) return !1;
        }
        return r.millerRabin(t);
      }
      function fe(t) {
        var e = this.subtract(BigInteger.ONE),
          r = e.getLowestSetBit();
        if (r <= 0) return !1;
        var i = e.shiftRight(r);
        ((t = (t + 1) >> 1), t > ne.length && (t = ne.length));
        for (var n = new BigInteger(null), o = [], s = 0; s < t; ++s) {
          for (;;)
            if (
              ((u = ne[Math.floor(Math.random() * ne.length)]),
              -1 == o.indexOf(u))
            )
              break;
          (o.push(u), n.fromInt(u));
          var f = n.modPow(i, this);
          if (0 != f.compareTo(BigInteger.ONE) && 0 != f.compareTo(e)) {
            var u = 1;
            while (u++ < r && 0 != f.compareTo(e))
              if (
                ((f = f.modPowInt(2, this)), 0 == f.compareTo(BigInteger.ONE))
              )
                return !1;
            if (0 != f.compareTo(e)) return !1;
          }
        }
        return !0;
      }
      ((n.chunkSize = et),
        (n.toRadix = it),
        (n.fromRadix = nt),
        (n.fromNumber = ot),
        (n.bitwiseTo = ht),
        (n.changeBit = _t),
        (n.addTo = Lt),
        (n.dMultiply = Ft),
        (n.dAddOffset = kt),
        (n.multiplyLowerTo = Zt),
        (n.multiplyUpperTo = Wt),
        (n.modInt = re),
        (n.millerRabin = fe),
        (n.clone = z),
        (n.intValue = X),
        (n.byteValue = $),
        (n.shortValue = tt),
        (n.signum = rt),
        (n.toByteArray = st),
        (n.equals = ft),
        (n.min = ut),
        (n.max = at),
        (n.and = At),
        (n.or = pt),
        (n.xor = gt),
        (n.andNot = Et),
        (n.not = wt),
        (n.shiftLeft = yt),
        (n.shiftRight = Ct),
        (n.getLowestSetBit = St),
        (n.bitCount = bt),
        (n.testBit = Bt),
        (n.setBit = Pt),
        (n.clearBit = Dt),
        (n.flipBit = Tt),
        (n.add = Ut),
        (n.subtract = Ot),
        (n.multiply = Qt),
        (n.divide = Kt),
        (n.remainder = Ht),
        (n.divideAndRemainder = xt),
        (n.modPow = te),
        (n.modInverse = ie),
        (n.pow = Mt),
        (n.gcd = ee),
        (n.isProbablePrime = se),
        (n.square = Nt),
        (BigInteger.ZERO = g(0)),
        (BigInteger.ONE = g(1)),
        (BigInteger.valueOf = g),
        (t.exports = BigInteger));
    },
    3062: function (t, e, r) {
      var i = r(2771);
      function n(t) {
        return t < i.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
      }
      function o(t, e, r) {
        var o = n(e);
        return (
          1 === o
            ? t.writeUInt8(e, r)
            : 2 === o
              ? (t.writeUInt8(i.OP_PUSHDATA1, r), t.writeUInt8(e, r + 1))
              : 3 === o
                ? (t.writeUInt8(i.OP_PUSHDATA2, r), t.writeUInt16LE(e, r + 1))
                : (t.writeUInt8(i.OP_PUSHDATA4, r), t.writeUInt32LE(e, r + 1)),
          o
        );
      }
      function s(t, e) {
        var r,
          n,
          o = t.readUInt8(e);
        if (o < i.OP_PUSHDATA1) ((r = o), (n = 1));
        else if (o === i.OP_PUSHDATA1) {
          if (e + 2 > t.length) return null;
          ((r = t.readUInt8(e + 1)), (n = 2));
        } else if (o === i.OP_PUSHDATA2) {
          if (e + 3 > t.length) return null;
          ((r = t.readUInt16LE(e + 1)), (n = 3));
        } else {
          if (e + 5 > t.length) return null;
          if (o !== i.OP_PUSHDATA4) throw new Error("Unexpected opcode");
          ((r = t.readUInt32LE(e + 1)), (n = 5));
        }
        return { opcode: o, number: r, size: n };
      }
      t.exports = { encodingLength: n, encode: o, decode: s };
    },
    3108: function (t, e, r) {
      var i = r(2771),
        n = {};
      for (var o in i) {
        var s = i[o];
        n[s] = o;
      }
      t.exports = n;
    },
    3110: function (t, e, r) {
      (function (e) {
        t.exports = function (t, r) {
          if (!Array.isArray(t)) throw TypeError("Expected values Array");
          if ("function" !== typeof r)
            throw TypeError("Expected digest Function");
          var i = t.length,
            n = t.concat();
          while (i > 1) {
            for (var o = 0, s = 0; s < i; s += 2, ++o) {
              var f = n[s],
                u = s + 1 === i ? f : n[s + 1],
                a = e.concat([f, u]);
              n[o] = r(a);
            }
            i = o;
          }
          return n[0];
        };
      }).call(this, r(2).Buffer);
    },
    3137: function (t, e, r) {
      var i = r(229),
        n = r(46).Buffer,
        BigInteger = r(2802),
        o = BigInteger.valueOf(3);
      function Point(t, e, r, n) {
        (i.notStrictEqual(n, void 0, "Missing Z coordinate"),
          (this.curve = t),
          (this.x = e),
          (this.y = r),
          (this.z = n),
          (this._zInv = null),
          (this.compressed = !0));
      }
      (Object.defineProperty(Point.prototype, "zInv", {
        get: function () {
          return (
            null === this._zInv &&
              (this._zInv = this.z.modInverse(this.curve.p)),
            this._zInv
          );
        },
      }),
        Object.defineProperty(Point.prototype, "affineX", {
          get: function () {
            return this.x.multiply(this.zInv).mod(this.curve.p);
          },
        }),
        Object.defineProperty(Point.prototype, "affineY", {
          get: function () {
            return this.y.multiply(this.zInv).mod(this.curve.p);
          },
        }),
        (Point.fromAffine = function (t, e, r) {
          return new Point(t, e, r, BigInteger.ONE);
        }),
        (Point.prototype.equals = function (t) {
          if (t === this) return !0;
          if (this.curve.isInfinity(this)) return this.curve.isInfinity(t);
          if (this.curve.isInfinity(t)) return this.curve.isInfinity(this);
          var e = t.y
            .multiply(this.z)
            .subtract(this.y.multiply(t.z))
            .mod(this.curve.p);
          if (0 !== e.signum()) return !1;
          var r = t.x
            .multiply(this.z)
            .subtract(this.x.multiply(t.z))
            .mod(this.curve.p);
          return 0 === r.signum();
        }),
        (Point.prototype.negate = function () {
          var t = this.curve.p.subtract(this.y);
          return new Point(this.curve, this.x, t, this.z);
        }),
        (Point.prototype.add = function (t) {
          if (this.curve.isInfinity(this)) return t;
          if (this.curve.isInfinity(t)) return this;
          var e = this.x,
            r = this.y,
            i = t.x,
            n = t.y,
            s = n.multiply(this.z).subtract(r.multiply(t.z)).mod(this.curve.p),
            f = i.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p);
          if (0 === f.signum())
            return 0 === s.signum() ? this.twice() : this.curve.infinity;
          var u = f.square(),
            a = u.multiply(f),
            h = e.multiply(u),
            c = s.square().multiply(this.z),
            A = c
              .subtract(h.shiftLeft(1))
              .multiply(t.z)
              .subtract(a)
              .multiply(f)
              .mod(this.curve.p),
            I = h
              .multiply(o)
              .multiply(s)
              .subtract(r.multiply(a))
              .subtract(c.multiply(s))
              .multiply(t.z)
              .add(s.multiply(a))
              .mod(this.curve.p),
            p = a.multiply(this.z).multiply(t.z).mod(this.curve.p);
          return new Point(this.curve, A, I, p);
        }),
        (Point.prototype.twice = function () {
          if (this.curve.isInfinity(this)) return this;
          if (0 === this.y.signum()) return this.curve.infinity;
          var t = this.x,
            e = this.y,
            r = e.multiply(this.z).mod(this.curve.p),
            i = r.multiply(e).mod(this.curve.p),
            n = this.curve.a,
            s = t.square().multiply(o);
          (0 !== n.signum() && (s = s.add(this.z.square().multiply(n))),
            (s = s.mod(this.curve.p)));
          var f = s
              .square()
              .subtract(t.shiftLeft(3).multiply(i))
              .shiftLeft(1)
              .multiply(r)
              .mod(this.curve.p),
            u = s
              .multiply(o)
              .multiply(t)
              .subtract(i.shiftLeft(1))
              .shiftLeft(2)
              .multiply(i)
              .subtract(s.pow(3))
              .mod(this.curve.p),
            a = r.pow(3).shiftLeft(3).mod(this.curve.p);
          return new Point(this.curve, f, u, a);
        }),
        (Point.prototype.multiply = function (t) {
          if (this.curve.isInfinity(this)) return this;
          if (0 === t.signum()) return this.curve.infinity;
          for (
            var e = t,
              r = e.multiply(o),
              i = this.negate(),
              n = this,
              s = r.bitLength() - 2;
            s > 0;
            --s
          ) {
            var f = r.testBit(s),
              u = e.testBit(s);
            ((n = n.twice()), f !== u && (n = n.add(f ? this : i)));
          }
          return n;
        }),
        (Point.prototype.multiplyTwo = function (t, e, r) {
          var i = Math.max(t.bitLength(), r.bitLength()) - 1,
            n = this.curve.infinity,
            o = this.add(e);
          while (i >= 0) {
            var s = t.testBit(i),
              f = r.testBit(i);
            ((n = n.twice()),
              s ? (n = f ? n.add(o) : n.add(this)) : f && (n = n.add(e)),
              --i);
          }
          return n;
        }),
        (Point.prototype.getEncoded = function (t) {
          if ((null == t && (t = this.compressed), this.curve.isInfinity(this)))
            return n.alloc(1, 0);
          var e,
            r = this.affineX,
            i = this.affineY,
            o = this.curve.pLength;
          return (
            t
              ? ((e = n.allocUnsafe(1 + o)),
                e.writeUInt8(i.isEven() ? 2 : 3, 0))
              : ((e = n.allocUnsafe(1 + o + o)),
                e.writeUInt8(4, 0),
                i.toBuffer(o).copy(e, 1 + o)),
            r.toBuffer(o).copy(e, 1),
            e
          );
        }),
        (Point.decodeFrom = function (t, e) {
          var r,
            n = e.readUInt8(0),
            o = 4 !== n,
            s = Math.floor((t.p.bitLength() + 7) / 8),
            f = BigInteger.fromBuffer(e.slice(1, 1 + s));
          if (o) {
            (i.equal(e.length, s + 1, "Invalid sequence length"),
              i(2 === n || 3 === n, "Invalid sequence tag"));
            var u = 3 === n;
            r = t.pointFromX(u, f);
          } else {
            i.equal(e.length, 1 + s + s, "Invalid sequence length");
            var a = BigInteger.fromBuffer(e.slice(1 + s));
            r = Point.fromAffine(t, f, a);
          }
          return ((r.compressed = o), r);
        }),
        (Point.prototype.toString = function () {
          return this.curve.isInfinity(this)
            ? "(INFINITY)"
            : "(" +
                this.affineX.toString() +
                "," +
                this.affineY.toString() +
                ")";
        }),
        (t.exports = Point));
    },
    3138: function (t, e, r) {
      var i = r(229),
        BigInteger = r(2802),
        Point = r(3137);
      function n(t, e, r, i, n, o, s) {
        ((this.p = t),
          (this.a = e),
          (this.b = r),
          (this.G = Point.fromAffine(this, i, n)),
          (this.n = o),
          (this.h = s),
          (this.infinity = new Point(this, null, null, BigInteger.ZERO)),
          (this.pOverFour = t.add(BigInteger.ONE).shiftRight(2)),
          (this.pLength = Math.floor((this.p.bitLength() + 7) / 8)));
      }
      ((n.prototype.pointFromX = function (t, e) {
        var r = e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p),
          i = r.modPow(this.pOverFour, this.p),
          n = i;
        return (
          i.isEven() ^ !t && (n = this.p.subtract(n)),
          Point.fromAffine(this, e, n)
        );
      }),
        (n.prototype.isInfinity = function (t) {
          return (
            t === this.infinity || (0 === t.z.signum() && 0 !== t.y.signum())
          );
        }),
        (n.prototype.isOnCurve = function (t) {
          if (this.isInfinity(t)) return !0;
          var e = t.affineX,
            r = t.affineY,
            i = this.a,
            n = this.b,
            o = this.p;
          if (e.signum() < 0 || e.compareTo(o) >= 0) return !1;
          if (r.signum() < 0 || r.compareTo(o) >= 0) return !1;
          var s = r.square().mod(o),
            f = e.pow(3).add(i.multiply(e)).add(n).mod(o);
          return s.equals(f);
        }),
        (n.prototype.validate = function (t) {
          (i(!this.isInfinity(t), "Point is at infinity"),
            i(this.isOnCurve(t), "Point is not on the curve"));
          var e = t.multiply(this.n);
          return (
            i(this.isInfinity(e), "Point is not a scalar multiple of G"),
            !0
          );
        }),
        (t.exports = n));
    },
    3267: function (t) {
      t.exports = JSON.parse(
        '{"name":"bigi","version":"1.4.2","description":"Big integers.","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"repository":{"url":"https://github.com/cryptocoinjs/bigi","type":"git"},"main":"./lib/index.js","scripts":{"browser-test":"./node_modules/.bin/mochify --wd -R spec","test":"./node_modules/.bin/_mocha -- test/*.js","jshint":"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true","unit":"./node_modules/.bin/mocha","coverage":"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},"dependencies":{},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]}}',
      );
    },
    3268: function (t, e, r) {
      (function (t) {
        var e = r(229),
          BigInteger = r(3048);
        ((BigInteger.fromByteArrayUnsigned = function (t) {
          return 128 & t[0] ? new BigInteger([0].concat(t)) : new BigInteger(t);
        }),
          (BigInteger.prototype.toByteArrayUnsigned = function () {
            var t = this.toByteArray();
            return 0 === t[0] ? t.slice(1) : t;
          }),
          (BigInteger.fromDERInteger = function (t) {
            return new BigInteger(t);
          }),
          (BigInteger.prototype.toDERInteger =
            BigInteger.prototype.toByteArray),
          (BigInteger.fromBuffer = function (t) {
            if (128 & t[0]) {
              var e = Array.prototype.slice.call(t);
              return new BigInteger([0].concat(e));
            }
            return new BigInteger(t);
          }),
          (BigInteger.fromHex = function (t) {
            return "" === t
              ? BigInteger.ZERO
              : (e.equal(t, t.match(/^[A-Fa-f0-9]+/), "Invalid hex string"),
                e.equal(t.length % 2, 0, "Incomplete hex"),
                new BigInteger(t, 16));
          }),
          (BigInteger.prototype.toBuffer = function (e) {
            var r = this.toByteArrayUnsigned(),
              i = [],
              n = e - r.length;
            while (i.length < n) i.push(0);
            return new t(i.concat(r));
          }),
          (BigInteger.prototype.toHex = function (t) {
            return this.toBuffer(t).toString("hex");
          }));
      }).call(this, r(2).Buffer);
    },
    3288: function (t) {
      t.exports = JSON.parse(
        '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}',
      );
    },
    3350: function (t, e) {
      t.exports = r;
      class AssertionError extends Error {}
      function r(t, e) {
        if (!t) {
          var i = new AssertionError(e);
          throw (Error.captureStackTrace && Error.captureStackTrace(i, r), i);
        }
      }
      AssertionError.prototype.name = "AssertionError";
    },
    3412: function (t, e, r) {
      var BigInteger = r(2802),
        i = r(3413),
        n = r(3138);
      function o(t) {
        var e = i[t];
        if (!e) return null;
        var r = new BigInteger(e.p, 16),
          o = new BigInteger(e.a, 16),
          s = new BigInteger(e.b, 16),
          f = new BigInteger(e.n, 16),
          u = new BigInteger(e.h, 16),
          a = new BigInteger(e.Gx, 16),
          h = new BigInteger(e.Gy, 16);
        return new n(r, o, s, a, h, f, u);
      }
      t.exports = o;
    },
    3413: function (t) {
      t.exports = JSON.parse(
        '{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}',
      );
    },
    3445: function (t, e, r) {
      const i = r(3446),
        n = r(3447),
        o = r(3448),
        s = r(3449),
        f = r(3450),
        u = 255 === new Uint8Array(Uint16Array.of(255).buffer)[0];
      function a(t) {
        switch (t) {
          case "ascii":
            return i;
          case "base64":
            return n;
          case "hex":
            return o;
          case "utf8":
          case "utf-8":
          case void 0:
          case null:
            return s;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return f;
          default:
            throw new Error("Unknown encoding: " + t);
        }
      }
      function h(t) {
        return t instanceof Uint8Array;
      }
      function c(t) {
        try {
          return (a(t), !0);
        } catch {
          return !1;
        }
      }
      function A(t, r, i) {
        const n = new Uint8Array(t);
        return (void 0 !== r && e.fill(n, r, 0, n.byteLength, i), n);
      }
      function I(t) {
        return new Uint8Array(t);
      }
      function p(t) {
        return new Uint8Array(t);
      }
      function l(t, e) {
        return a(e).byteLength(t);
      }
      function g(t, e) {
        if (t === e) return 0;
        const r = Math.min(t.byteLength, e.byteLength);
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (e = new DataView(e.buffer, e.byteOffset, e.byteLength)));
        let i = 0;
        for (let n = r - (r % 4); i < n; i += 4) {
          const r = t.getUint32(i, u),
            n = e.getUint32(i, u);
          if (r !== n) break;
        }
        for (; i < r; i++) {
          const r = t.getUint8(i),
            n = e.getUint8(i);
          if (r < n) return -1;
          if (r > n) return 1;
        }
        return t.byteLength > e.byteLength
          ? 1
          : t.byteLength < e.byteLength
            ? -1
            : 0;
      }
      function d(t, e) {
        void 0 === e && (e = t.reduce((t, e) => t + e.byteLength, 0));
        const r = new Uint8Array(e);
        let i = 0;
        for (const n of t) {
          if (i + n.byteLength > r.byteLength) {
            const t = n.subarray(0, r.byteLength - i);
            return (r.set(t, i), r);
          }
          (r.set(n, i), (i += n.byteLength));
        }
        return r;
      }
      function E(t, e, r, i, n) {
        if (
          (void 0 === r && (r = 0),
          void 0 === i && (i = 0),
          void 0 === n && (n = t.byteLength),
          n > 0 && n < i)
        )
          return 0;
        if (n === i) return 0;
        if (0 === t.byteLength || 0 === e.byteLength) return 0;
        if (r < 0) throw new RangeError("targetStart is out of range");
        if (i < 0 || i >= t.byteLength)
          throw new RangeError("sourceStart is out of range");
        if (n < 0) throw new RangeError("sourceEnd is out of range");
        (r >= e.byteLength && (r = e.byteLength),
          n > t.byteLength && (n = t.byteLength),
          e.byteLength - r < n - i && (n = e.length - r + i));
        const o = n - i;
        return (
          t === e ? e.copyWithin(r, i, n) : e.set(t.subarray(i, n), r),
          o
        );
      }
      function w(t, e) {
        if (t === e) return !0;
        if (t.byteLength !== e.byteLength) return !1;
        const r = t.byteLength;
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (e = new DataView(e.buffer, e.byteOffset, e.byteLength)));
        let i = 0;
        for (let n = r - (r % 4); i < n; i += 4)
          if (t.getUint32(i, u) !== e.getUint32(i, u)) return !1;
        for (; i < r; i++) if (t.getUint8(i) !== e.getUint8(i)) return !1;
        return !0;
      }
      function y(t, e, r, i, n) {
        if (
          ("string" === typeof e
            ? "string" === typeof r
              ? ((n = r), (r = 0), (i = t.byteLength))
              : "string" === typeof i && ((n = i), (i = t.byteLength))
            : "number" === typeof e
              ? (e &= 255)
              : "boolean" === typeof e && (e = +e),
          r < 0 || t.byteLength < r || t.byteLength < i)
        )
          throw new RangeError("Out of range index");
        if (
          (void 0 === r && (r = 0), void 0 === i && (i = t.byteLength), i <= r)
        )
          return t;
        if ((e || (e = 0), "number" === typeof e))
          for (let o = r; o < i; ++o) t[o] = e;
        else {
          e = h(e) ? e : C(e, n);
          const o = e.byteLength;
          for (let n = 0; n < i - r; ++n) t[n + r] = e[n % o];
        }
        return t;
      }
      function C(t, e, r) {
        return "string" === typeof t
          ? v(t, e)
          : Array.isArray(t)
            ? S(t)
            : ArrayBuffer.isView(t)
              ? m(t)
              : b(t, e, r);
      }
      function v(t, e) {
        const r = a(e),
          i = new Uint8Array(r.byteLength(t));
        return (r.write(i, t, 0, i.byteLength), i);
      }
      function S(t) {
        const e = new Uint8Array(t.length);
        return (e.set(t), e);
      }
      function m(t) {
        const e = new Uint8Array(t.byteLength);
        return (e.set(t), e);
      }
      function b(t, e, r) {
        return new Uint8Array(t, e, r);
      }
      function B(t, e, r, i) {
        return -1 !== P(t, e, r, i);
      }
      function _(t, e, r, i, n) {
        if (0 === t.byteLength) return -1;
        if (
          ("string" === typeof r
            ? ((i = r), (r = 0))
            : void 0 === r
              ? (r = n ? 0 : t.length - 1)
              : r < 0 && (r += t.byteLength),
          r >= t.byteLength)
        ) {
          if (n) return -1;
          r = t.byteLength - 1;
        } else if (r < 0) {
          if (!n) return -1;
          r = 0;
        }
        if ("string" === typeof e) e = C(e, i);
        else if ("number" === typeof e)
          return ((e &= 255), n ? t.indexOf(e, r) : t.lastIndexOf(e, r));
        if (0 === e.byteLength) return -1;
        if (n) {
          let i = -1;
          for (let n = r; n < t.byteLength; n++)
            if (t[n] === e[-1 === i ? 0 : n - i]) {
              if ((-1 === i && (i = n), n - i + 1 === e.byteLength)) return i;
            } else (-1 !== i && (n -= n - i), (i = -1));
        } else {
          r + e.byteLength > t.byteLength && (r = t.byteLength - e.byteLength);
          for (let i = r; i >= 0; i--) {
            let r = !0;
            for (let n = 0; n < e.byteLength; n++)
              if (t[i + n] !== e[n]) {
                r = !1;
                break;
              }
            if (r) return i;
          }
        }
        return -1;
      }
      function P(t, e, r, i) {
        return _(t, e, r, i, !0);
      }
      function D(t, e, r, i) {
        return _(t, e, r, i, !1);
      }
      function T(t, e, r) {
        const i = t[e];
        ((t[e] = t[r]), (t[r] = i));
      }
      function L(t) {
        const e = t.byteLength;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let r = 0; r < e; r += 2) T(t, r, r + 1);
        return t;
      }
      function U(t) {
        const e = t.byteLength;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let r = 0; r < e; r += 4) (T(t, r, r + 3), T(t, r + 1, r + 2));
        return t;
      }
      function O(t) {
        const e = t.byteLength;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let r = 0; r < e; r += 8)
          (T(t, r, r + 7),
            T(t, r + 1, r + 6),
            T(t, r + 2, r + 5),
            T(t, r + 3, r + 4));
        return t;
      }
      function Q(t) {
        return t;
      }
      function N(t, e, r, i) {
        (void 0 === r && (r = 0), void 0 === i && (i = t.byteLength));
        const n = t.byteLength;
        return r >= n || i <= r
          ? ""
          : (r < 0 && (r = 0),
            i > n && (i = n),
            (0 !== r || i < n) && (t = t.subarray(r, i)),
            a(e).toString(t));
      }
      function K(t, e, r, i, n) {
        return (
          void 0 === r
            ? (n = "utf8")
            : void 0 === i && "string" === typeof r
              ? ((n = r), (r = void 0))
              : void 0 === n &&
                "string" === typeof i &&
                ((n = i), (i = void 0)),
          a(n).write(t, e, r, i)
        );
      }
      function H(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setFloat64(r, e, !0), r + 8);
      }
      function x(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setFloat32(r, e, !0), r + 4);
      }
      function F(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setUint32(r, e, !0), r + 4);
      }
      function k(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setInt32(r, e, !0), r + 4);
      }
      function V(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getFloat64(e, !0);
      }
      function R(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getFloat32(e, !0);
      }
      function G(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getUint32(e, !0);
      }
      function Y(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getInt32(e, !0);
      }
      function M(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setFloat64(r, e, !1), r + 8);
      }
      function Z(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setFloat32(r, e, !1), r + 4);
      }
      function W(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setUint32(r, e, !1), r + 4);
      }
      function J(t, e, r) {
        void 0 === r && (r = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (i.setInt32(r, e, !1), r + 4);
      }
      function q(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getFloat64(e, !1);
      }
      function j(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getFloat32(e, !1);
      }
      function z(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getUint32(e, !1);
      }
      function X(t, e) {
        void 0 === e && (e = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return r.getInt32(e, !1);
      }
      t.exports = e = {
        isBuffer: h,
        isEncoding: c,
        alloc: A,
        allocUnsafe: I,
        allocUnsafeSlow: p,
        byteLength: l,
        compare: g,
        concat: d,
        copy: E,
        equals: w,
        fill: y,
        from: C,
        includes: B,
        indexOf: P,
        lastIndexOf: D,
        swap16: L,
        swap32: U,
        swap64: O,
        toBuffer: Q,
        toString: N,
        write: K,
        writeDoubleLE: H,
        writeFloatLE: x,
        writeUInt32LE: F,
        writeInt32LE: k,
        readDoubleLE: V,
        readFloatLE: R,
        readUInt32LE: G,
        readInt32LE: Y,
        writeDoubleBE: M,
        writeFloatBE: Z,
        writeUInt32BE: W,
        writeInt32BE: J,
        readDoubleBE: q,
        readFloatBE: j,
        readUInt32BE: z,
        readInt32BE: X,
      };
    },
    3446: function (t, e) {
      function r(t) {
        return t.length;
      }
      function i(t) {
        const e = t.byteLength;
        let r = "";
        for (let i = 0; i < e; i++) r += String.fromCharCode(t[i]);
        return r;
      }
      function n(t, e, i, n) {
        (void 0 === i && (i = 0), void 0 === n && (n = r(e)));
        const o = Math.min(n, t.byteLength - i);
        for (let r = 0; r < o; r++) t[i + r] = e.charCodeAt(r);
        return o;
      }
      t.exports = { byteLength: r, toString: i, write: n };
    },
    3447: function (t, e) {
      const r =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = new Uint8Array(256);
      for (let f = 0; f < r.length; f++) i[r.charCodeAt(f)] = f;
      function n(t) {
        let e = t.length;
        return (
          61 === t.charCodeAt(e - 1) && e--,
          e > 1 && 61 === t.charCodeAt(e - 1) && e--,
          (3 * e) >>> 2
        );
      }
      function o(t) {
        const e = t.byteLength;
        let i = "";
        for (let n = 0; n < e; n += 3)
          i +=
            r[t[n] >> 2] +
            r[((3 & t[n]) << 4) | (t[n + 1] >> 4)] +
            r[((15 & t[n + 1]) << 2) | (t[n + 2] >> 6)] +
            r[63 & t[n + 2]];
        return (
          e % 3 === 2
            ? (i = i.substring(0, i.length - 1) + "=")
            : e % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
          i
        );
      }
      function s(t, e, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = n(e)));
        const s = Math.min(o, t.byteLength - r);
        for (let n = 0, f = 0; f < s; n += 4) {
          const r = i[e.charCodeAt(n)],
            o = i[e.charCodeAt(n + 1)],
            s = i[e.charCodeAt(n + 2)],
            u = i[e.charCodeAt(n + 3)];
          ((t[f++] = (r << 2) | (o >> 4)),
            (t[f++] = ((15 & o) << 4) | (s >> 2)),
            (t[f++] = ((3 & s) << 6) | (63 & u)));
        }
        return s;
      }
      ((i[45] = 62),
        (i[95] = 63),
        (t.exports = { byteLength: n, toString: o, write: s }));
    },
    3448: function (t, e) {
      function r(t) {
        return t.length >>> 1;
      }
      function i(t) {
        const e = t.byteLength;
        t = new DataView(t.buffer, t.byteOffset, e);
        let r = "",
          i = 0;
        for (let n = e - (e % 4); i < n; i += 4)
          r += t.getUint32(i).toString(16).padStart(8, "0");
        for (; i < e; i++) r += t.getUint8(i).toString(16).padStart(2, "0");
        return r;
      }
      function n(t, e, i, n) {
        (void 0 === i && (i = 0), void 0 === n && (n = r(e)));
        const s = Math.min(n, t.byteLength - i);
        for (let r = 0; r < s; r++) {
          const n = o(e.charCodeAt(2 * r)),
            s = o(e.charCodeAt(2 * r + 1));
          if (void 0 === n || void 0 === s) return t.subarray(0, r);
          t[i + r] = (n << 4) | s;
        }
        return s;
      }
      function o(t) {
        return t >= 48 && t <= 57
          ? t - 48
          : t >= 65 && t <= 70
            ? t - 65 + 10
            : t >= 97 && t <= 102
              ? t - 97 + 10
              : void 0;
      }
      t.exports = { byteLength: r, toString: i, write: n };
    },
    3449: function (t, e) {
      function r(t) {
        let e = 0;
        for (let r = 0, i = t.length; r < i; r++) {
          const n = t.charCodeAt(r);
          if (n >= 55296 && n <= 56319 && r + 1 < i) {
            const i = t.charCodeAt(r + 1);
            if (i >= 56320 && i <= 57343) {
              ((e += 4), r++);
              continue;
            }
          }
          e += n <= 127 ? 1 : n <= 2047 ? 2 : 3;
        }
        return e;
      }
      let i, n;
      if ("undefined" !== typeof TextDecoder) {
        const t = new TextDecoder();
        i = function (e) {
          return t.decode(e);
        };
      } else
        i = function (t) {
          const e = t.byteLength;
          let r = "",
            i = 0;
          while (i < e) {
            let n = t[i];
            if (n <= 127) {
              ((r += String.fromCharCode(n)), i++);
              continue;
            }
            let o = 0,
              s = 0;
            if (
              (n <= 223
                ? ((o = 1), (s = 31 & n))
                : n <= 239
                  ? ((o = 2), (s = 15 & n))
                  : n <= 244 && ((o = 3), (s = 7 & n)),
              e - i - o > 0)
            ) {
              let e = 0;
              while (e < o)
                ((n = t[i + e + 1]), (s = (s << 6) | (63 & n)), (e += 1));
            } else ((s = 65533), (o = e - i));
            ((r += String.fromCodePoint(s)), (i += o + 1));
          }
          return r;
        };
      if ("undefined" !== typeof TextEncoder) {
        const t = new TextEncoder();
        n = function (e, i, n, o) {
          (void 0 === n && (n = 0), void 0 === o && (o = r(i)));
          const s = Math.min(o, e.byteLength - n);
          return (t.encodeInto(i, e.subarray(n, n + s)), s);
        };
      } else
        n = function (t, e, i, n) {
          (void 0 === i && (i = 0), void 0 === n && (n = r(e)));
          const o = Math.min(n, t.byteLength - i);
          t = t.subarray(i, i + o);
          let s = 0,
            f = 0;
          while (s < e.length) {
            const r = e.codePointAt(s);
            if (r <= 127) {
              ((t[f++] = r), s++);
              continue;
            }
            let i = 0,
              n = 0;
            (r <= 2047
              ? ((i = 6), (n = 192))
              : r <= 65535
                ? ((i = 12), (n = 224))
                : r <= 2097151 && ((i = 18), (n = 240)),
              (t[f++] = n | (r >> i)),
              (i -= 6));
            while (i >= 0) ((t[f++] = 128 | ((r >> i) & 63)), (i -= 6));
            s += r >= 65536 ? 2 : 1;
          }
          return o;
        };
      t.exports = { byteLength: r, toString: i, write: n };
    },
    3450: function (t, e) {
      function r(t) {
        return 2 * t.length;
      }
      function i(t) {
        const e = t.byteLength;
        let r = "";
        for (let i = 0; i < e - 1; i += 2)
          r += String.fromCharCode(t[i] + 256 * t[i + 1]);
        return r;
      }
      function n(t, e, i, n) {
        (void 0 === i && (i = 0), void 0 === n && (n = r(e)));
        const o = Math.min(n, t.byteLength - i);
        let s = o;
        for (let r = 0; r < e.length; ++r) {
          if ((s -= 2) < 0) break;
          const n = e.charCodeAt(r),
            o = n >> 8,
            f = n % 256;
          ((t[i + 2 * r] = f), (t[i + 2 * r + 1] = o));
        }
        return o;
      }
      t.exports = { byteLength: r, toString: i, write: n };
    },
    3608: function (t, e) {
      const r = {
        BCH: "bch",
        BSV: "bsv",
        BTC: "btc",
        BTG: "btg",
        LTC: "ltc",
        ZEC: "zec",
        DASH: "dash",
      };
      function i() {
        return { public: 76067358, private: 76066276 };
      }
      function n() {
        return { public: 70617039, private: 70615956 };
      }
      t.exports = {
        bitcoin: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: i(),
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
          coin: r.BTC,
        },
        testnet: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: n(),
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
          coin: r.BTC,
        },
        bitcoincash: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bip32: i(),
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
          coin: r.BCH,
          forkId: 0,
        },
        bitcoincashTestnet: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bip32: n(),
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
          coin: r.BCH,
        },
        bitcoingold: {
          messagePrefix: "Bitcoin Gold Signed Message:\n",
          bech32: "btg",
          bip32: i(),
          pubKeyHash: 38,
          scriptHash: 23,
          wif: 128,
          coin: r.BTG,
          forkId: 79,
        },
        bitcoinsv: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bip32: i(),
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
          coin: r.BSV,
          forkId: 0,
        },
        bitcoinsvTestnet: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bip32: n(),
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
          coin: r.BSV,
        },
        dash: {
          messagePrefix: "DarkCoin Signed Message:\n",
          bip32: i(),
          pubKeyHash: 76,
          scriptHash: 16,
          wif: 204,
          coin: r.DASH,
        },
        dashTest: {
          messagePrefix: "DarkCoin Signed Message:\n",
          bip32: n(),
          pubKeyHash: 140,
          scriptHash: 19,
          wif: 239,
          coin: r.DASH,
        },
        litecoin: {
          messagePrefix: "Litecoin Signed Message:\n",
          bech32: "ltc",
          bip32: i(),
          pubKeyHash: 48,
          scriptHash: 50,
          wif: 176,
          coin: r.LTC,
        },
        litecoinTest: {
          messagePrefix: "Litecoin Signed Message:\n",
          bech32: "tltc",
          bip32: n(),
          pubKeyHash: 111,
          scriptHash: 58,
          wif: 239,
          coin: r.LTC,
        },
        zcash: {
          messagePrefix: "ZCash Signed Message:\n",
          bip32: i(),
          pubKeyHash: 60,
          scriptHash: 5,
          wif: 188,
          consensusBranchId: { 1: 0, 2: 0, 3: 1537743641, 4: 733220448 },
          coin: r.ZEC,
        },
        zcashTest: {
          messagePrefix: "ZCash Signed Message:\n",
          bip32: n(),
          pubKeyHash: 7461,
          scriptHash: 7354,
          wif: 239,
          consensusBranchId: { 1: 0, 2: 0, 3: 1537743641, 4: 733220448 },
          coin: r.ZEC,
        },
      };
    },
    3650: function (t, e, r) {
      "use strict";
      t.exports = r(3651)(r(3654));
    },
    3651: function (t, e, r) {
      "use strict";
      var i = r(3652),
        n = r(3653),
        o = r(3288);
      function s(t, e) {
        return void 0 === t
          ? e
          : (i.isBoolean(t, o.COMPRESSED_TYPE_INVALID), t);
      }
      t.exports = function (t) {
        return {
          privateKeyVerify: function (e) {
            return (
              i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              32 === e.length && t.privateKeyVerify(e)
            );
          },
          privateKeyExport: function (e, r) {
            (i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = s(r, !0)));
            var f = t.privateKeyExport(e, r);
            return n.privateKeyExport(e, f, r);
          },
          privateKeyImport: function (e) {
            if (
              (i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              (e = n.privateKeyImport(e)),
              e && 32 === e.length && t.privateKeyVerify(e))
            )
              return e;
            throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
          },
          privateKeyNegate: function (e) {
            return (
              i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              t.privateKeyNegate(e)
            );
          },
          privateKeyModInverse: function (e) {
            return (
              i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              t.privateKeyModInverse(e)
            );
          },
          privateKeyTweakAdd: function (e, r) {
            return (
              i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              i.isBuffer(r, o.TWEAK_TYPE_INVALID),
              i.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              t.privateKeyTweakAdd(e, r)
            );
          },
          privateKeyTweakMul: function (e, r) {
            return (
              i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              i.isBuffer(r, o.TWEAK_TYPE_INVALID),
              i.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              t.privateKeyTweakMul(e, r)
            );
          },
          publicKeyCreate: function (e, r) {
            return (
              i.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = s(r, !0)),
              t.publicKeyCreate(e, r)
            );
          },
          publicKeyConvert: function (e, r) {
            return (
              i.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              i.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              (r = s(r, !0)),
              t.publicKeyConvert(e, r)
            );
          },
          publicKeyVerify: function (e) {
            return (
              i.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              t.publicKeyVerify(e)
            );
          },
          publicKeyTweakAdd: function (e, r, n) {
            return (
              i.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              i.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              i.isBuffer(r, o.TWEAK_TYPE_INVALID),
              i.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (n = s(n, !0)),
              t.publicKeyTweakAdd(e, r, n)
            );
          },
          publicKeyTweakMul: function (e, r, n) {
            return (
              i.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              i.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              i.isBuffer(r, o.TWEAK_TYPE_INVALID),
              i.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (n = s(n, !0)),
              t.publicKeyTweakMul(e, r, n)
            );
          },
          publicKeyCombine: function (e, r) {
            (i.isArray(e, o.EC_PUBLIC_KEYS_TYPE_INVALID),
              i.isLengthGTZero(e, o.EC_PUBLIC_KEYS_LENGTH_INVALID));
            for (var n = 0; n < e.length; ++n)
              (i.isBuffer(e[n], o.EC_PUBLIC_KEY_TYPE_INVALID),
                i.isBufferLength2(
                  e[n],
                  33,
                  65,
                  o.EC_PUBLIC_KEY_LENGTH_INVALID,
                ));
            return ((r = s(r, !0)), t.publicKeyCombine(e, r));
          },
          signatureNormalize: function (e) {
            return (
              i.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              i.isBufferLength(e, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              t.signatureNormalize(e)
            );
          },
          signatureExport: function (e) {
            (i.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              i.isBufferLength(e, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = t.signatureExport(e);
            return n.signatureExport(r);
          },
          signatureImport: function (e) {
            (i.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              i.isLengthGTZero(e, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = n.signatureImport(e);
            if (r) return t.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          signatureImportLax: function (e) {
            (i.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              i.isLengthGTZero(e, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = n.signatureImportLax(e);
            if (r) return t.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          sign: function (e, r, n) {
            (i.isBuffer(e, o.MSG32_TYPE_INVALID),
              i.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID),
              i.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID));
            var s = null,
              f = null;
            return (
              void 0 !== n &&
                (i.isObject(n, o.OPTIONS_TYPE_INVALID),
                void 0 !== n.data &&
                  (i.isBuffer(n.data, o.OPTIONS_DATA_TYPE_INVALID),
                  i.isBufferLength(n.data, 32, o.OPTIONS_DATA_LENGTH_INVALID),
                  (s = n.data)),
                void 0 !== n.noncefn &&
                  (i.isFunction(n.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID),
                  (f = n.noncefn))),
              t.sign(e, r, f, s)
            );
          },
          verify: function (e, r, n) {
            return (
              i.isBuffer(e, o.MSG32_TYPE_INVALID),
              i.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID),
              i.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              i.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              i.isBuffer(n, o.EC_PUBLIC_KEY_TYPE_INVALID),
              i.isBufferLength2(n, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              t.verify(e, r, n)
            );
          },
          recover: function (e, r, n, f) {
            return (
              i.isBuffer(e, o.MSG32_TYPE_INVALID),
              i.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID),
              i.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              i.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              i.isNumber(n, o.RECOVERY_ID_TYPE_INVALID),
              i.isNumberInInterval(n, -1, 4, o.RECOVERY_ID_VALUE_INVALID),
              (f = s(f, !0)),
              t.recover(e, r, n, f)
            );
          },
          ecdh: function (e, r) {
            return (
              i.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              i.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              i.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              t.ecdh(e, r)
            );
          },
          ecdhUnsafe: function (e, r, n) {
            return (
              i.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              i.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              i.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              i.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (n = s(n, !0)),
              t.ecdhUnsafe(e, r, n)
            );
          },
        };
      };
    },
    3652: function (t, e, r) {
      "use strict";
      (function (t) {
        var r = Object.prototype.toString;
        ((e.isArray = function (t, e) {
          if (!Array.isArray(t)) throw TypeError(e);
        }),
          (e.isBoolean = function (t, e) {
            if ("[object Boolean]" !== r.call(t)) throw TypeError(e);
          }),
          (e.isBuffer = function (e, r) {
            if (!t.isBuffer(e)) throw TypeError(r);
          }),
          (e.isFunction = function (t, e) {
            if ("[object Function]" !== r.call(t)) throw TypeError(e);
          }),
          (e.isNumber = function (t, e) {
            if ("[object Number]" !== r.call(t)) throw TypeError(e);
          }),
          (e.isObject = function (t, e) {
            if ("[object Object]" !== r.call(t)) throw TypeError(e);
          }),
          (e.isBufferLength = function (t, e, r) {
            if (t.length !== e) throw RangeError(r);
          }),
          (e.isBufferLength2 = function (t, e, r, i) {
            if (t.length !== e && t.length !== r) throw RangeError(i);
          }),
          (e.isLengthGTZero = function (t, e) {
            if (0 === t.length) throw RangeError(e);
          }),
          (e.isNumberInInterval = function (t, e, r, i) {
            if (t <= e || t >= r) throw RangeError(i);
          }));
      }).call(this, r(2).Buffer);
    },
    3653: function (t, e, r) {
      "use strict";
      var i = r(46).Buffer,
        n = r(2898),
        o = i.from([
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
        s = i.from([
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
      ((e.privateKeyExport = function (t, e, r) {
        var n = i.from(r ? o : s);
        return (t.copy(n, r ? 8 : 9), e.copy(n, r ? 181 : 214), n);
      }),
        (e.privateKeyImport = function (t) {
          var e = t.length,
            r = 0;
          if (
            !(e < r + 1 || 48 !== t[r]) &&
            ((r += 1), !(e < r + 1) && 128 & t[r])
          ) {
            var i = 127 & t[r];
            if (((r += 1), !(i < 1 || i > 2) && !(e < r + i))) {
              var n = t[r + i - 1] | (i > 1 ? t[r + i - 2] << 8 : 0);
              if (
                ((r += i),
                !(e < r + n) &&
                  !(
                    e < r + 3 ||
                    2 !== t[r] ||
                    1 !== t[r + 1] ||
                    1 !== t[r + 2]
                  ) &&
                  ((r += 3),
                  !(
                    e < r + 2 ||
                    4 !== t[r] ||
                    t[r + 1] > 32 ||
                    e < r + 2 + t[r + 1]
                  )))
              )
                return t.slice(r + 2, r + 2 + t[r + 1]);
            }
          }
        }),
        (e.signatureExport = function (t) {
          for (
            var e = i.concat([i.from([0]), t.r]), r = 33, o = 0;
            r > 1 && 0 === e[o] && !(128 & e[o + 1]);
            --r, ++o
          );
          for (
            var s = i.concat([i.from([0]), t.s]), f = 33, u = 0;
            f > 1 && 0 === s[u] && !(128 & s[u + 1]);
            --f, ++u
          );
          return n.encode(e.slice(o), s.slice(u));
        }),
        (e.signatureImport = function (t) {
          var e = i.alloc(32, 0),
            r = i.alloc(32, 0);
          try {
            var o = n.decode(t);
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
          } catch (s) {
            return;
          }
          return (
            o.r.copy(e, 32 - o.r.length),
            o.s.copy(r, 32 - o.s.length),
            { r: e, s: r }
          );
        }),
        (e.signatureImportLax = function (t) {
          var e = i.alloc(32, 0),
            r = i.alloc(32, 0),
            n = t.length,
            o = 0;
          if (48 === t[o++]) {
            var s = t[o++];
            if (!(128 & s && ((o += s - 128), o > n)) && 2 === t[o++]) {
              var f = t[o++];
              if (128 & f) {
                if (((s = f - 128), o + s > n)) return;
                for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                for (f = 0; s > 0; o += 1, s -= 1) f = (f << 8) + t[o];
              }
              if (!(f > n - o)) {
                var u = o;
                if (((o += f), 2 === t[o++])) {
                  var a = t[o++];
                  if (128 & a) {
                    if (((s = a - 128), o + s > n)) return;
                    for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                    for (a = 0; s > 0; o += 1, s -= 1) a = (a << 8) + t[o];
                  }
                  if (!(a > n - o)) {
                    var h = o;
                    for (o += a; f > 0 && 0 === t[u]; f -= 1, u += 1);
                    if (!(f > 32)) {
                      var c = t.slice(u, u + f);
                      for (
                        c.copy(e, 32 - c.length);
                        a > 0 && 0 === t[h];
                        a -= 1, h += 1
                      );
                      if (!(a > 32)) {
                        var A = t.slice(h, h + a);
                        return (A.copy(r, 32 - A.length), { r: e, s: r });
                      }
                    }
                  }
                }
              }
            }
          }
        }));
    },
    3654: function (t, e, r) {
      "use strict";
      var i = r(46).Buffer,
        n = r(797),
        o = r(49),
        s = r(795).ec,
        f = r(3288),
        u = new s("secp256k1"),
        a = u.curve;
      function h(t, e) {
        var r = new o(e);
        if (r.cmp(a.p) >= 0) return null;
        r = r.toRed(a.red);
        var i = r.redSqr().redIMul(r).redIAdd(a.b).redSqrt();
        (3 === t) !== i.isOdd() && (i = i.redNeg());
        const n = r.redSqr().redIMul(r);
        return i.redSqr().redISub(n.redIAdd(a.b)).isZero()
          ? u.keyPair({ pub: { x: r, y: i } })
          : null;
      }
      function c(t, e, r) {
        var i = new o(e),
          n = new o(r);
        if (i.cmp(a.p) >= 0 || n.cmp(a.p) >= 0) return null;
        if (
          ((i = i.toRed(a.red)),
          (n = n.toRed(a.red)),
          (6 === t || 7 === t) && n.isOdd() !== (7 === t))
        )
          return null;
        var s = i.redSqr().redIMul(i);
        return n.redSqr().redISub(s.redIAdd(a.b)).isZero()
          ? u.keyPair({ pub: { x: i, y: n } })
          : null;
      }
      function A(t) {
        var e = t[0];
        switch (e) {
          case 2:
          case 3:
            return 33 !== t.length ? null : h(e, t.slice(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== t.length
              ? null
              : c(e, t.slice(1, 33), t.slice(33, 65));
          default:
            return null;
        }
      }
      ((e.privateKeyVerify = function (t) {
        var e = new o(t);
        return e.cmp(a.n) < 0 && !e.isZero();
      }),
        (e.privateKeyExport = function (t, e) {
          var r = new o(t);
          if (r.cmp(a.n) >= 0 || r.isZero())
            throw new Error(f.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
          return i.from(u.keyFromPrivate(t).getPublic(e, !0));
        }),
        (e.privateKeyNegate = function (t) {
          var e = new o(t);
          return e.isZero()
            ? i.alloc(32)
            : a.n.sub(e).umod(a.n).toArrayLike(i, "be", 32);
        }),
        (e.privateKeyModInverse = function (t) {
          var e = new o(t);
          if (e.cmp(a.n) >= 0 || e.isZero())
            throw new Error(f.EC_PRIVATE_KEY_RANGE_INVALID);
          return e.invm(a.n).toArrayLike(i, "be", 32);
        }),
        (e.privateKeyTweakAdd = function (t, e) {
          var r = new o(e);
          if (r.cmp(a.n) >= 0) throw new Error(f.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          if ((r.iadd(new o(t)), r.cmp(a.n) >= 0 && r.isub(a.n), r.isZero()))
            throw new Error(f.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          return r.toArrayLike(i, "be", 32);
        }),
        (e.privateKeyTweakMul = function (t, e) {
          var r = new o(e);
          if (r.cmp(a.n) >= 0 || r.isZero())
            throw new Error(f.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
          return (
            r.imul(new o(t)),
            r.cmp(a.n) && (r = r.umod(a.n)),
            r.toArrayLike(i, "be", 32)
          );
        }),
        (e.publicKeyCreate = function (t, e) {
          var r = new o(t);
          if (r.cmp(a.n) >= 0 || r.isZero())
            throw new Error(f.EC_PUBLIC_KEY_CREATE_FAIL);
          return i.from(u.keyFromPrivate(t).getPublic(e, !0));
        }),
        (e.publicKeyConvert = function (t, e) {
          var r = A(t);
          if (null === r) throw new Error(f.EC_PUBLIC_KEY_PARSE_FAIL);
          return i.from(r.getPublic(e, !0));
        }),
        (e.publicKeyVerify = function (t) {
          return null !== A(t);
        }),
        (e.publicKeyTweakAdd = function (t, e, r) {
          var n = A(t);
          if (null === n) throw new Error(f.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((e = new o(e)), e.cmp(a.n) >= 0))
            throw new Error(f.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          var s = a.g.mul(e).add(n.pub);
          if (s.isInfinity()) throw new Error(f.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          return i.from(s.encode(!0, r));
        }),
        (e.publicKeyTweakMul = function (t, e, r) {
          var n = A(t);
          if (null === n) throw new Error(f.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((e = new o(e)), e.cmp(a.n) >= 0 || e.isZero()))
            throw new Error(f.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
          return i.from(n.pub.mul(e).encode(!0, r));
        }),
        (e.publicKeyCombine = function (t, e) {
          for (var r = new Array(t.length), n = 0; n < t.length; ++n)
            if (((r[n] = A(t[n])), null === r[n]))
              throw new Error(f.EC_PUBLIC_KEY_PARSE_FAIL);
          for (var o = r[0].pub, s = 1; s < r.length; ++s) o = o.add(r[s].pub);
          if (o.isInfinity()) throw new Error(f.EC_PUBLIC_KEY_COMBINE_FAIL);
          return i.from(o.encode(!0, e));
        }),
        (e.signatureNormalize = function (t) {
          var e = new o(t.slice(0, 32)),
            r = new o(t.slice(32, 64));
          if (e.cmp(a.n) >= 0 || r.cmp(a.n) >= 0)
            throw new Error(f.ECDSA_SIGNATURE_PARSE_FAIL);
          var n = i.from(t);
          return (
            1 === r.cmp(u.nh) &&
              a.n.sub(r).toArrayLike(i, "be", 32).copy(n, 32),
            n
          );
        }),
        (e.signatureExport = function (t) {
          var e = t.slice(0, 32),
            r = t.slice(32, 64);
          if (new o(e).cmp(a.n) >= 0 || new o(r).cmp(a.n) >= 0)
            throw new Error(f.ECDSA_SIGNATURE_PARSE_FAIL);
          return { r: e, s: r };
        }),
        (e.signatureImport = function (t) {
          var e = new o(t.r);
          e.cmp(a.n) >= 0 && (e = new o(0));
          var r = new o(t.s);
          return (
            r.cmp(a.n) >= 0 && (r = new o(0)),
            i.concat([e.toArrayLike(i, "be", 32), r.toArrayLike(i, "be", 32)])
          );
        }),
        (e.sign = function (t, e, r, n) {
          if ("function" === typeof r) {
            var s = r;
            r = function (r) {
              var u = s(t, e, null, n, r);
              if (!i.isBuffer(u) || 32 !== u.length)
                throw new Error(f.ECDSA_SIGN_FAIL);
              return new o(u);
            };
          }
          var h = new o(e);
          if (h.cmp(a.n) >= 0 || h.isZero()) throw new Error(f.ECDSA_SIGN_FAIL);
          var c = u.sign(t, e, { canonical: !0, k: r, pers: n });
          return {
            signature: i.concat([
              c.r.toArrayLike(i, "be", 32),
              c.s.toArrayLike(i, "be", 32),
            ]),
            recovery: c.recoveryParam,
          };
        }),
        (e.verify = function (t, e, r) {
          var i = { r: e.slice(0, 32), s: e.slice(32, 64) },
            n = new o(i.r),
            s = new o(i.s);
          if (n.cmp(a.n) >= 0 || s.cmp(a.n) >= 0)
            throw new Error(f.ECDSA_SIGNATURE_PARSE_FAIL);
          if (1 === s.cmp(u.nh) || n.isZero() || s.isZero()) return !1;
          var h = A(r);
          if (null === h) throw new Error(f.EC_PUBLIC_KEY_PARSE_FAIL);
          return u.verify(t, i, { x: h.pub.x, y: h.pub.y });
        }),
        (e.recover = function (t, e, r, n) {
          var s = { r: e.slice(0, 32), s: e.slice(32, 64) },
            h = new o(s.r),
            c = new o(s.s);
          if (h.cmp(a.n) >= 0 || c.cmp(a.n) >= 0)
            throw new Error(f.ECDSA_SIGNATURE_PARSE_FAIL);
          try {
            if (h.isZero() || c.isZero()) throw new Error();
            var A = u.recoverPubKey(t, s, r);
            return i.from(A.encode(!0, n));
          } catch (I) {
            throw new Error(f.ECDSA_RECOVER_FAIL);
          }
        }),
        (e.ecdh = function (t, r) {
          var i = e.ecdhUnsafe(t, r, !0);
          return n("sha256").update(i).digest();
        }),
        (e.ecdhUnsafe = function (t, e, r) {
          var n = A(t);
          if (null === n) throw new Error(f.EC_PUBLIC_KEY_PARSE_FAIL);
          var s = new o(e);
          if (s.cmp(a.n) >= 0 || s.isZero()) throw new Error(f.ECDH_FAIL);
          return i.from(n.pub.mul(s).encode(!0, r));
        }));
    },
    3807: function (t, e, r) {
      var i = r(3350),
        n = r(3808);
      function o(t, e, r) {
        var i = t[e] + t[r],
          n = t[e + 1] + t[r + 1];
        (i >= 4294967296 && n++, (t[e] = i), (t[e + 1] = n));
      }
      function s(t, e, r, i) {
        var n = t[e] + r;
        r < 0 && (n += 4294967296);
        var o = t[e + 1] + i;
        (n >= 4294967296 && o++, (t[e] = n), (t[e + 1] = o));
      }
      function f(t, e) {
        return t[e] ^ (t[e + 1] << 8) ^ (t[e + 2] << 16) ^ (t[e + 3] << 24);
      }
      function u(t, e, r, i, n, f) {
        var u = I[n],
          a = I[n + 1],
          h = I[f],
          c = I[f + 1];
        (o(A, t, e), s(A, t, u, a));
        var p = A[i] ^ A[t],
          l = A[i + 1] ^ A[t + 1];
        ((A[i] = l),
          (A[i + 1] = p),
          o(A, r, i),
          (p = A[e] ^ A[r]),
          (l = A[e + 1] ^ A[r + 1]),
          (A[e] = (p >>> 24) ^ (l << 8)),
          (A[e + 1] = (l >>> 24) ^ (p << 8)),
          o(A, t, e),
          s(A, t, h, c),
          (p = A[i] ^ A[t]),
          (l = A[i + 1] ^ A[t + 1]),
          (A[i] = (p >>> 16) ^ (l << 16)),
          (A[i + 1] = (l >>> 16) ^ (p << 16)),
          o(A, r, i),
          (p = A[e] ^ A[r]),
          (l = A[e + 1] ^ A[r + 1]),
          (A[e] = (l >>> 31) ^ (p << 1)),
          (A[e + 1] = (p >>> 31) ^ (l << 1)));
      }
      var a = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        h = [
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
        c = new Uint8Array(
          h.map(function (t) {
            return 2 * t;
          }),
        ),
        A = new Uint32Array(32),
        I = new Uint32Array(32);
      function p(t, e) {
        var r = 0;
        for (r = 0; r < 16; r++) ((A[r] = t.h[r]), (A[r + 16] = a[r]));
        for (
          A[24] = A[24] ^ t.t,
            A[25] = A[25] ^ (t.t / 4294967296),
            e && ((A[28] = ~A[28]), (A[29] = ~A[29])),
            r = 0;
          r < 32;
          r++
        )
          I[r] = f(t.b, 4 * r);
        for (r = 0; r < 12; r++)
          (u(0, 8, 16, 24, c[16 * r + 0], c[16 * r + 1]),
            u(2, 10, 18, 26, c[16 * r + 2], c[16 * r + 3]),
            u(4, 12, 20, 28, c[16 * r + 4], c[16 * r + 5]),
            u(6, 14, 22, 30, c[16 * r + 6], c[16 * r + 7]),
            u(0, 10, 20, 30, c[16 * r + 8], c[16 * r + 9]),
            u(2, 12, 22, 24, c[16 * r + 10], c[16 * r + 11]),
            u(4, 14, 16, 26, c[16 * r + 12], c[16 * r + 13]),
            u(6, 8, 18, 28, c[16 * r + 14], c[16 * r + 15]));
        for (r = 0; r < 16; r++) t.h[r] = t.h[r] ^ A[r] ^ A[r + 16];
      }
      var l = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
      function g(t, e, r, i) {
        (l.fill(0),
          (this.b = new Uint8Array(128)),
          (this.h = new Uint32Array(16)),
          (this.t = 0),
          (this.c = 0),
          (this.outlen = t),
          (l[0] = t),
          e && (l[1] = e.length),
          (l[2] = 1),
          (l[3] = 1),
          r && l.set(r, 32),
          i && l.set(i, 48));
        for (var n = 0; n < 16; n++) this.h[n] = a[n] ^ f(l, 4 * n);
        e && (d(this, e), (this.c = 128));
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++)
          (128 === t.c && ((t.t += t.c), p(t, !1), (t.c = 0)),
            (t.b[t.c++] = e[r]));
      }
      function E(t, e) {
        t.t += t.c;
        while (t.c < 128) t.b[t.c++] = 0;
        p(t, !0);
        for (var r = 0; r < t.outlen; r++) e[r] = t.h[r >> 2] >> (8 * (3 & r));
        return e;
      }
      function w(t) {
        for (var e = "", r = 0; r < t.length; r++) e += y(t[r]);
        return e;
      }
      function y(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      ((g.prototype.update = function (t) {
        return (
          i(t instanceof Uint8Array, "input must be Uint8Array or Buffer"),
          d(this, t),
          this
        );
      }),
        (g.prototype.digest = function (t) {
          var e =
            t && "binary" !== t && "hex" !== t
              ? t
              : new Uint8Array(this.outlen);
          return (
            i(
              e instanceof Uint8Array,
              'out must be "binary", "hex", Uint8Array, or Buffer',
            ),
            i(
              e.length >= this.outlen,
              "out must have at least outlen bytes of space",
            ),
            E(this, e),
            "hex" === t ? w(e) : e
          );
        }),
        (g.prototype.final = g.prototype.digest),
        (g.ready = function (t) {
          n.ready(function () {
            t();
          });
        }));
      var C = g;
      ((t.exports = function (t, e, r, n, o) {
        return (
          !0 !== o &&
            (i(t >= v, "outlen must be at least " + v + ", was given " + t),
            i(t <= S, "outlen must be at most " + S + ", was given " + t),
            null != e &&
              (i(e instanceof Uint8Array, "key must be Uint8Array or Buffer"),
              i(
                e.length >= m,
                "key must be at least " + m + ", was given " + e.length,
              ),
              i(
                e.length <= b,
                "key must be at most " + b + ", was given " + e.length,
              )),
            null != r &&
              (i(r instanceof Uint8Array, "salt must be Uint8Array or Buffer"),
              i(
                r.length === B,
                "salt must be exactly " + B + ", was given " + r.length,
              )),
            null != n &&
              (i(
                n instanceof Uint8Array,
                "personal must be Uint8Array or Buffer",
              ),
              i(
                n.length === _,
                "personal must be exactly " + _ + ", was given " + n.length,
              ))),
          new C(t, e, r, n)
        );
      }),
        (t.exports.ready = function (t) {
          n.ready(function () {
            t();
          });
        }),
        (t.exports.WASM_SUPPORTED = n.SUPPORTED),
        (t.exports.WASM_LOADED = !1));
      var v = (t.exports.BYTES_MIN = 16),
        S = (t.exports.BYTES_MAX = 64),
        m = ((t.exports.BYTES = 32), (t.exports.KEYBYTES_MIN = 16)),
        b = (t.exports.KEYBYTES_MAX = 64),
        B = ((t.exports.KEYBYTES = 32), (t.exports.SALTBYTES = 16)),
        _ = (t.exports.PERSONALBYTES = 16);
      n.ready(function (e) {
        e || ((t.exports.WASM_LOADED = !0), (t.exports = n));
      });
    },
    3808: function (t, e, r) {
      var i = r(3350),
        n = r(3445),
        o = null,
        s =
          "undefined" !== typeof WebAssembly &&
          r(3809)().then((t) => {
            o = t;
          }),
        f = 64,
        u = [];
      t.exports = l;
      var a = (t.exports.BYTES_MIN = 16),
        h = (t.exports.BYTES_MAX = 64),
        c = ((t.exports.BYTES = 32), (t.exports.KEYBYTES_MIN = 16)),
        A = (t.exports.KEYBYTES_MAX = 64),
        I = ((t.exports.KEYBYTES = 32), (t.exports.SALTBYTES = 16)),
        p = (t.exports.PERSONALBYTES = 16);
      function l(t, e, r, n, s) {
        if (!(this instanceof l)) return new l(t, e, r, n, s);
        if (!o) throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
        (t || (t = 32),
          !0 !== s &&
            (i(
              t >= a,
              "digestLength must be at least " + a + ", was given " + t,
            ),
            i(t <= h, "digestLength must be at most " + h + ", was given " + t),
            null != e &&
              (i(e instanceof Uint8Array, "key must be Uint8Array or Buffer"),
              i(
                e.length >= c,
                "key must be at least " + c + ", was given " + e.length,
              ),
              i(
                e.length <= A,
                "key must be at least " + A + ", was given " + e.length,
              )),
            null != r &&
              (i(r instanceof Uint8Array, "salt must be Uint8Array or Buffer"),
              i(
                r.length === I,
                "salt must be exactly " + I + ", was given " + r.length,
              )),
            null != n &&
              (i(
                n instanceof Uint8Array,
                "personal must be Uint8Array or Buffer",
              ),
              i(
                n.length === p,
                "personal must be exactly " + p + ", was given " + n.length,
              ))),
          u.length || (u.push(f), (f += 216)),
          (this.digestLength = t),
          (this.finalized = !1),
          (this.pointer = u.pop()),
          (this._memory = new Uint8Array(o.memory.buffer)),
          this._memory.fill(0, 0, 64),
          (this._memory[0] = this.digestLength),
          (this._memory[1] = e ? e.length : 0),
          (this._memory[2] = 1),
          (this._memory[3] = 1),
          r && this._memory.set(r, 32),
          n && this._memory.set(n, 48),
          this.pointer + 216 > this._memory.length &&
            this._realloc(this.pointer + 216),
          o.blake2b_init(this.pointer, this.digestLength),
          e &&
            (this.update(e),
            this._memory.fill(0, f, f + e.length),
            (this._memory[this.pointer + 200] = 128)));
      }
      function g() {}
      ((l.prototype._realloc = function (t) {
        (o.memory.grow(
          Math.max(0, Math.ceil(Math.abs(t - this._memory.length) / 65536)),
        ),
          (this._memory = new Uint8Array(o.memory.buffer)));
      }),
        (l.prototype.update = function (t) {
          return (
            i(!1 === this.finalized, "Hash instance finalized"),
            i(t instanceof Uint8Array, "input must be Uint8Array or Buffer"),
            f + t.length > this._memory.length && this._realloc(f + t.length),
            this._memory.set(t, f),
            o.blake2b_update(this.pointer, f, f + t.length),
            this
          );
        }),
        (l.prototype.digest = function (t) {
          if (
            (i(!1 === this.finalized, "Hash instance finalized"),
            (this.finalized = !0),
            u.push(this.pointer),
            o.blake2b_final(this.pointer),
            !t || "binary" === t)
          )
            return this._memory.slice(
              this.pointer + 128,
              this.pointer + 128 + this.digestLength,
            );
          if ("string" === typeof t)
            return n.toString(
              this._memory,
              t,
              this.pointer + 128,
              this.pointer + 128 + this.digestLength,
            );
          i(
            t instanceof Uint8Array && t.length >= this.digestLength,
            "input must be Uint8Array or Buffer",
          );
          for (var e = 0; e < this.digestLength; e++)
            t[e] = this._memory[this.pointer + 128 + e];
          return t;
        }),
        (l.prototype.final = l.prototype.digest),
        (l.WASM = o),
        (l.SUPPORTED = "undefined" !== typeof WebAssembly),
        (l.ready = function (t) {
          return (
            t || (t = g),
            s ? s.then(() => t(), t) : t(new Error("WebAssembly not supported"))
          );
        }),
        (l.prototype.ready = l.ready),
        (l.prototype.getPartialHash = function () {
          return this._memory.slice(this.pointer, this.pointer + 216);
        }),
        (l.prototype.setPartialHash = function (t) {
          this._memory.set(t, this.pointer);
        }));
    },
    3809: function (t, e) {
      var r = (t, e) =>
          function () {
            return (
              e || (0, t[Object.keys(t)[0]])((e = { exports: {} }).exports, e),
              e.exports
            );
          },
        i = (() => {
          for (var t = new Uint8Array(128), e = 0; e < 64; e++)
            t[
              e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : 4 * e - 205
            ] = e;
          return (e) => {
            for (
              var r = e.length,
                i = new Uint8Array(
                  ((3 * (r - ("=" == e[r - 1]) - ("=" == e[r - 2]))) / 4) | 0,
                ),
                n = 0,
                o = 0;
              n < r;
            ) {
              var s = t[e.charCodeAt(n++)],
                f = t[e.charCodeAt(n++)],
                u = t[e.charCodeAt(n++)],
                a = t[e.charCodeAt(n++)];
              ((i[o++] = (s << 2) | (f >> 4)),
                (i[o++] = (f << 4) | (u >> 2)),
                (i[o++] = (u << 6) | a));
            }
            return i;
          };
        })(),
        n = r({
          "wasm-binary:./blake2b.wat"(t, e) {
            e.exports = i(
              "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",
            );
          },
        }),
        o = n(),
        s = WebAssembly.compile(o);
      t.exports = async (t) => {
        const e = await WebAssembly.instantiate(await s, t);
        return e.exports;
      };
    },
    3945: function (t, e, r) {
      var i = r(797),
        n = r(2764);
      function o(t) {
        var e = "rmd160",
          r = n.getHashes();
        return (
          -1 === r.indexOf(e) &&
            -1 !== r.indexOf("ripemd160") &&
            (e = "ripemd160"),
          i(e).update(t).digest()
        );
      }
      function s(t) {
        return i("sha1").update(t).digest();
      }
      function f(t) {
        return i("sha256").update(t).digest();
      }
      function u(t) {
        return o(f(t));
      }
      function a(t) {
        return f(f(t));
      }
      t.exports = { hash160: u, hash256: a, ripemd160: o, sha1: s, sha256: f };
    },
    4802: function (t, e, r) {
      var i = r(5570),
        n = r(3945),
        o = r(10484),
        s = r(377),
        f = r(2758),
        u = r(2985),
        a = r(2838),
        h = r(3608),
        BigInteger = r(2802),
        c = r(2975),
        A = c.getCurveByName("secp256k1"),
        I = o.__curve,
        p = r(6669);
      function ECPair(t, e, r) {
        if (
          (r &&
            f(
              { compressed: u.maybe(u.Boolean), network: u.maybe(u.Network) },
              r,
            ),
          (r = r || {}),
          t)
        ) {
          if (t.signum() <= 0)
            throw new Error("Private key must be greater than 0");
          if (t.compareTo(I.n) >= 0)
            throw new Error("Private key must be less than the curve order");
          if (e) throw new TypeError("Unexpected publicKey parameter");
          this.d = t;
        } else (f(u.ECPoint, e), (this.__Q = e));
        ((this.compressed = void 0 === r.compressed || r.compressed),
          (this.network = r.network || h.bitcoin));
      }
      (Object.defineProperty(ECPair.prototype, "Q", {
        get: function () {
          if (!this.__Q && this.d) {
            const t = p.publicKeyCreate(this.d.toBuffer(32), !1);
            this.__Q = t ? c.Point.decodeFrom(A, t) : I.G.multiply(this.d);
          }
          return this.__Q;
        },
      }),
        (ECPair.fromPublicKeyBuffer = function (t, e) {
          var r = c.Point.decodeFrom(I, t);
          return new ECPair(null, r, { compressed: r.compressed, network: e });
        }),
        (ECPair.fromWIF = function (t, e) {
          var r = a.decode(t),
            i = r.version;
          if (u.Array(e)) {
            if (
              ((e = e
                .filter(function (t) {
                  return i === t.wif;
                })
                .pop()),
              !e)
            )
              throw new Error("Unknown network version");
          } else if (((e = e || h.bitcoin), i !== e.wif))
            throw new Error("Invalid network version");
          var n = BigInteger.fromBuffer(r.privateKey);
          return new ECPair(n, null, { compressed: r.compressed, network: e });
        }),
        (ECPair.makeRandom = function (t) {
          t = t || {};
          var e,
            r = t.rng || s;
          do {
            var i = r(32);
            (f(u.Buffer256bit, i), (e = BigInteger.fromBuffer(i)));
          } while (e.signum() <= 0 || e.compareTo(I.n) >= 0);
          return new ECPair(e, null, t);
        }),
        (ECPair.prototype.getAddress = function () {
          return i.toBase58Check(
            n.hash160(this.getPublicKeyBuffer()),
            this.getNetwork().pubKeyHash,
          );
        }),
        (ECPair.prototype.getNetwork = function () {
          return this.network;
        }),
        (ECPair.prototype.getPublicKeyBuffer = function () {
          return this.Q.getEncoded(this.compressed);
        }),
        (ECPair.prototype.sign = function (t) {
          if (!this.d) throw new Error("Missing private key");
          var e = p.sign(t, this.d);
          return void 0 !== e ? e : o.sign(t, this.d);
        }),
        (ECPair.prototype.toWIF = function () {
          if (!this.d) throw new Error("Missing private key");
          return a.encode(
            this.network.wif,
            this.d.toBuffer(32),
            this.compressed,
          );
        }),
        (ECPair.prototype.verify = function (t, e) {
          var r = p.verify(t, e, this.getPublicKeyBuffer());
          return void 0 !== r ? r : o.verify(t, e, this.Q);
        }),
        (ECPair.fromPrivateKeyBuffer = function (t, e) {
          var i = r(5569);
          return i.privateKeyBufferToECPair(t, e);
        }),
        (ECPair.prototype.getPrivateKeyBuffer = function () {
          var t = r(5569);
          return t.privateKeyBufferFromECPair(this);
        }),
        (t.exports = ECPair));
    },
    4803: function (t, e, r) {
      (function (e) {
        var i = r(2898),
          n = r(2758),
          o = r(2985),
          BigInteger = r(2802);
        function ECSignature(t, e) {
          (n(o.tuple(o.BigInt, o.BigInt), arguments),
            (this.r = t),
            (this.s = e));
        }
        ((ECSignature.parseCompact = function (t) {
          n(o.BufferN(65), t);
          var e = t.readUInt8(0) - 27;
          if (e !== (7 & e)) throw new Error("Invalid signature parameter");
          var r = !!(4 & e),
            i = 3 & e,
            s = ECSignature.fromRSBuffer(t.slice(1));
          return { compressed: r, i: i, signature: s };
        }),
          (ECSignature.fromRSBuffer = function (t) {
            n(o.BufferN(64), t);
            var e = BigInteger.fromBuffer(t.slice(0, 32)),
              r = BigInteger.fromBuffer(t.slice(32, 64));
            return new ECSignature(e, r);
          }),
          (ECSignature.fromDER = function (t) {
            var e = i.decode(t),
              r = BigInteger.fromDERInteger(e.r),
              n = BigInteger.fromDERInteger(e.s);
            return new ECSignature(r, n);
          }),
          (ECSignature.parseScriptSignature = function (t) {
            var e = t.readUInt8(t.length - 1),
              r = -193 & e;
            if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + e);
            return {
              signature: ECSignature.fromDER(t.slice(0, -1)),
              hashType: e,
            };
          }),
          (ECSignature.prototype.toCompact = function (t, r) {
            (r && (t += 4), (t += 27));
            var i = e.alloc(65);
            return (i.writeUInt8(t, 0), this.toRSBuffer(i, 1), i);
          }),
          (ECSignature.prototype.toDER = function () {
            var t = e.from(this.r.toDERInteger()),
              r = e.from(this.s.toDERInteger());
            return i.encode(t, r);
          }),
          (ECSignature.prototype.toRSBuffer = function (t, r) {
            return (
              (t = t || e.alloc(64)),
              this.r.toBuffer(32).copy(t, r),
              this.s.toBuffer(32).copy(t, r + 32),
              t
            );
          }),
          (ECSignature.prototype.toScriptSignature = function (t) {
            var r = -193 & t;
            if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
            var i = e.alloc(1);
            return (i.writeUInt8(t, 0), e.concat([this.toDER(), i]));
          }),
          (t.exports = ECSignature));
      }).call(this, r(2).Buffer);
    },
    4804: function (t, e, r) {
      const i = r(2985),
        n = r(2758),
        o = r(2864);
      function s(t, e) {
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
      function f(t, e) {
        const r = t.readUInt32LE(e);
        let i = t.readUInt32LE(e + 4);
        return ((i *= 4294967296), s(i + r, 9007199254740991), i + r);
      }
      function u(t, e, r) {
        return (
          s(e, 9007199254740991),
          t.writeInt32LE(-1 & e, r),
          t.writeUInt32LE(Math.floor(e / 4294967296), r + 4),
          r + 8
        );
      }
      function a(t) {
        if (t.length < 1) return t;
        let e = t.length - 1,
          r = 0;
        for (let i = 0; i < t.length / 2; i++)
          ((r = t[i]), (t[i] = t[e]), (t[e] = r), e--);
        return t;
      }
      class BufferWriter {
        constructor(t, e) {
          (void 0 === e && (e = 0),
            (this.buffer = t),
            (this.offset = e),
            n(i.tuple(i.Buffer, i.UInt32), [t, e]));
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
          this.offset = u(this.buffer, t, this.offset);
        }
        writeVarInt(t) {
          (o.encode(t, this.buffer, this.offset),
            (this.offset += o.encode.bytes));
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
          (this.writeVarInt(t.length), t.forEach((t) => this.writeVarSlice(t)));
        }
      }
      class BufferReader {
        constructor(t, e) {
          (void 0 === e && (e = 0),
            (this.buffer = t),
            (this.offset = e),
            n(i.tuple(i.Buffer, i.UInt32), [t, e]));
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
          const t = f(this.buffer, this.offset);
          return ((this.offset += 8), t);
        }
        readVarInt() {
          const t = o.decode(this.buffer, this.offset);
          return ((this.offset += o.decode.bytes), t);
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
      t.exports = {
        readUInt64LE: f,
        writeUInt64LE: u,
        reverseBuffer: a,
        BufferWriter: BufferWriter,
        BufferReader: BufferReader,
      };
    },
    4805: function (t, e, r) {
      const i = r(2758),
        n = r(3608);
      function o() {
        return Object.keys(n).map((t) => n[t]);
      }
      function s(t) {
        return Object.keys(n).find((e) => n[e] === t);
      }
      function f(t) {
        switch (t) {
          case n.bitcoin:
          case n.testnet:
            return n.bitcoin;
          case n.bitcoincash:
          case n.bitcoincashTestnet:
            return n.bitcoincash;
          case n.bitcoingold:
            return n.bitcoingold;
          case n.bitcoinsv:
          case n.bitcoinsvTestnet:
            return n.bitcoinsv;
          case n.dash:
          case n.dashTest:
            return n.dash;
          case n.litecoin:
          case n.litecoinTest:
            return n.litecoin;
          case n.zcash:
          case n.zcashTest:
            return n.zcash;
        }
        throw new TypeError("invalid network");
      }
      function u(t) {
        return f(t) === t;
      }
      function a(t) {
        return f(t) !== t;
      }
      function h(t, e) {
        return f(t) === f(e);
      }
      const c = o().filter(u),
        A = o().filter(a),
        I = new Map(c.map((t) => [t, A.filter((e) => f(e) === t)]));
      function p(t) {
        if (a(t)) return t;
        const e = I.get(t);
        if (void 0 === e) throw new Error("invalid argument");
        if (0 !== e.length) {
          if (1 === e.length) return e[0];
          throw new Error("more than one testnet for " + s(t));
        }
      }
      function l(t) {
        return f(t) === n.bitcoin;
      }
      function g(t) {
        return f(t) === n.bitcoincash;
      }
      function d(t) {
        return f(t) === n.bitcoingold;
      }
      function E(t) {
        return f(t) === n.bitcoinsv;
      }
      function w(t) {
        return f(t) === n.dash;
      }
      function y(t) {
        return f(t) === n.litecoin;
      }
      function C(t) {
        return f(t) === n.zcash;
      }
      const v = i.oneOf(l, g, d, E, w, y, C);
      t.exports = {
        BTC: n.bitcoin.coin,
        BCH: n.bitcoincash.coin,
        BSV: n.bitcoinsv.coin,
        BTG: n.bitcoingold.coin,
        DASH: n.dash.coin,
        LTC: n.litecoin.coin,
        ZEC: n.zcash.coin,
        getNetworkList: o,
        getNetworkName: s,
        getMainnet: f,
        isMainnet: u,
        getTestnet: p,
        isTestnet: a,
        isSameCoin: h,
        isBitcoin: l,
        isBitcoinCash: g,
        isBitcoinGold: d,
        isBitcoinSV: E,
        isDash: w,
        isLitecoin: y,
        isZcash: C,
        isValidNetwork: v,
        isValidCoin: v,
      };
    },
    5565: function (t, e, r) {
      var i = r(3007).decompile,
        n = r(5566),
        o = r(10468),
        s = r(5567),
        f = r(5568),
        u = r(10473),
        a = r(10476),
        h = r(10478),
        c = r(10480),
        A = {
          MULTISIG: "multisig",
          NONSTANDARD: "nonstandard",
          NULLDATA: "nulldata",
          P2PK: "pubkey",
          P2PKH: "pubkeyhash",
          P2SH: "scripthash",
          P2WPKH: "witnesspubkeyhash",
          P2WSH: "witnessscripthash",
          WITNESS_COMMITMENT: "witnesscommitment",
        };
      function I(t) {
        if (a.output.check(t)) return A.P2WPKH;
        if (h.output.check(t)) return A.P2WSH;
        if (f.output.check(t)) return A.P2PKH;
        if (u.output.check(t)) return A.P2SH;
        var e = i(t);
        return n.output.check(e)
          ? A.MULTISIG
          : s.output.check(e)
            ? A.P2PK
            : c.output.check(e)
              ? A.WITNESS_COMMITMENT
              : o.output.check(e)
                ? A.NULLDATA
                : A.NONSTANDARD;
      }
      function p(t, e) {
        var r = i(t);
        return f.input.check(r)
          ? A.P2PKH
          : u.input.check(r, e)
            ? A.P2SH
            : n.input.check(r, e)
              ? A.MULTISIG
              : s.input.check(r)
                ? A.P2PK
                : A.NONSTANDARD;
      }
      function l(t, e) {
        var r = i(t);
        return a.input.check(r)
          ? A.P2WPKH
          : h.input.check(r, e)
            ? A.P2WSH
            : A.NONSTANDARD;
      }
      t.exports = {
        classifyInput: p,
        classifyOutput: I,
        classifyWitness: l,
        multisig: n,
        nullData: o,
        pubKey: s,
        pubKeyHash: f,
        scriptHash: u,
        witnessPubKeyHash: a,
        witnessScriptHash: h,
        witnessCommitment: c,
        types: A,
      };
    },
    5566: function (t, e, r) {
      t.exports = { input: r(10467), output: r(6666) };
    },
    5567: function (t, e, r) {
      t.exports = { input: r(10469), output: r(10470) };
    },
    5568: function (t, e, r) {
      t.exports = { input: r(10471), output: r(10472) };
    },
    5569: function (t, e, r) {
      (function (e) {
        const BigInteger = r(2802),
          ECPair = r(4802);
        function i(t, r) {
          if (!e.isBuffer(t) || 32 !== t.length)
            throw new Error("invalid private key buffer");
          const i = BigInteger.fromBuffer(t);
          return new ECPair(i, null, { network: r });
        }
        function n(t) {
          if (!(t instanceof ECPair))
            throw new TypeError("invalid argument ecpair");
          if (!t.d) throw new Error("Missing private key");
          return t.d.toBuffer(32);
        }
        t.exports = {
          privateKeyBufferToECPair: i,
          privateKeyBufferFromECPair: n,
        };
      }).call(this, r(2).Buffer);
    },
    5570: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(10483),
        o = r(2792),
        s = r(3007),
        f = r(5565),
        u = r(3608),
        a = r(2758),
        h = r(2985);
      function c(t) {
        var e = o.decode(t);
        if (e.length < 21) throw new TypeError(t + " is too short");
        if (e.length > 22) throw new TypeError(t + " is too long");
        var r = 22 === e.length,
          i = r ? 2 : 1,
          n = r ? e.readUInt16BE(0) : e[0],
          s = e.slice(i);
        return { version: n, hash: s };
      }
      function A(t) {
        var e = n.decode(t),
          r = n.fromWords(e.words.slice(1));
        return { version: e.words[0], prefix: e.prefix, data: i.from(r) };
      }
      function I(t, e) {
        a(h.tuple(h.Hash160bit, h.UInt16), arguments);
        var r = e > 255,
          n = r ? 22 : 21,
          s = r ? 2 : 1,
          f = i.allocUnsafe(n);
        return (
          r ? f.writeUInt16BE(e, 0) : f.writeUInt8(e, 0),
          t.copy(f, s),
          o.encode(f)
        );
      }
      function p(t, e, r) {
        var i = n.toWords(t);
        return (i.unshift(e), n.encode(r, i));
      }
      function l(t, e) {
        if (((e = e || u.bitcoin), f.pubKeyHash.output.check(t)))
          return I(s.compile(t).slice(3, 23), e.pubKeyHash);
        if (f.scriptHash.output.check(t))
          return I(s.compile(t).slice(2, 22), e.scriptHash);
        if (f.witnessPubKeyHash.output.check(t))
          return p(s.compile(t).slice(2, 22), 0, e.bech32);
        if (f.witnessScriptHash.output.check(t))
          return p(s.compile(t).slice(2, 34), 0, e.bech32);
        throw new Error(s.toASM(t) + " has no matching Address");
      }
      function g(t, e) {
        var r;
        e = e || u.bitcoin;
        try {
          r = c(t);
        } catch (i) {}
        if (r) {
          if (r.version === e.pubKeyHash)
            return f.pubKeyHash.output.encode(r.hash);
          if (r.version === e.scriptHash)
            return f.scriptHash.output.encode(r.hash);
        } else {
          try {
            r = A(t);
          } catch (i) {}
          if (r) {
            if (r.prefix !== e.bech32)
              throw new Error(t + " has an invalid prefix");
            if (0 === r.version) {
              if (20 === r.data.length)
                return f.witnessPubKeyHash.output.encode(r.data);
              if (32 === r.data.length)
                return f.witnessScriptHash.output.encode(r.data);
            }
          }
        }
        throw new Error(t + " has no matching Script");
      }
      t.exports = {
        fromBase58Check: c,
        fromBech32: A,
        fromOutputScript: l,
        toBase58Check: I,
        toBech32: p,
        toOutputScript: g,
      };
    },
    5571: function (t, e, r) {
      var i = r(46).Buffer,
        n = r(3945),
        o = r(3007),
        { BufferReader: s, BufferWriter: f } = r(4804),
        { ZcashBufferReader: u, ZcashBufferWriter: a } = r(10486),
        h = r(4805),
        c = r(2771),
        A = r(3608),
        I = r(2758),
        p = r(2985),
        l = r(2864),
        g = r(3807),
        d = r(6670);
      function E(t) {
        var e = t.length;
        return l.encodingLength(e) + e;
      }
      function w(t) {
        var e = t.length;
        return (
          l.encodingLength(e) +
          t.reduce(function (t, e) {
            return t + E(e);
          }, 0)
        );
      }
      function y(t) {
        (void 0 === t && (t = A.bitcoin),
          (this.version = 1),
          (this.locktime = 0),
          (this.ins = []),
          (this.outs = []),
          (this.network = t),
          h.isZcash(t) &&
            ((this.joinsplits = []),
            (this.joinsplitPubkey = []),
            (this.joinsplitSig = []),
            (this.overwintered = 0),
            (this.versionGroupId = 0),
            (this.expiryHeight = 0),
            (this.valueBalance = 0),
            (this.vShieldedSpend = []),
            (this.vShieldedOutput = []),
            (this.bindingSig = 0)),
          h.isDash(t) && ((this.type = 0), (this.extraPayload = i.alloc(0))));
      }
      ((y.DEFAULT_SEQUENCE = 4294967295),
        (y.SIGHASH_ALL = 1),
        (y.SIGHASH_NONE = 2),
        (y.SIGHASH_SINGLE = 3),
        (y.SIGHASH_ANYONECANPAY = 128),
        (y.SIGHASH_BITCOINCASHBIP143 = 64),
        (y.ADVANCED_TRANSACTION_MARKER = 0),
        (y.ADVANCED_TRANSACTION_FLAG = 1));
      var C = i.allocUnsafe(0),
        v = [],
        S = i.from(
          "0000000000000000000000000000000000000000000000000000000000000000",
          "hex",
        ),
        m = i.from(
          "0000000000000000000000000000000000000000000000000000000000000001",
          "hex",
        ),
        b = i.from("ffffffffffffffff", "hex"),
        B = { script: C, valueBuffer: b };
      ((y.DASH_NORMAL = 0),
        (y.DASH_PROVIDER_REGISTER = 1),
        (y.DASH_PROVIDER_UPDATE_SERVICE = 2),
        (y.DASH_PROVIDER_UPDATE_REGISTRAR = 3),
        (y.DASH_PROVIDER_UPDATE_REVOKE = 4),
        (y.DASH_COINBASE = 5),
        (y.DASH_QUORUM_COMMITMENT = 6),
        (y.fromBuffer = function (t, e, r) {
          void 0 === e && (e = A.bitcoin);
          let i = new s(t),
            n = new y(e);
          if (((n.version = i.readInt32()), h.isZcash(e))) {
            if (
              ((n.overwintered = n.version >>> 31),
              (n.version = 2147483647 & n.version),
              !e.consensusBranchId.hasOwnProperty(n.version))
            )
              throw new Error("Unsupported Zcash transaction");
            i = new u(i.buffer, i.offset, n.version);
          }
          if (
            h.isDash(e) &&
            ((n.type = n.version >> 16),
            (n.version = 65535 & n.version),
            3 === n.version &&
              (n.type < y.DASH_NORMAL || n.type > y.DASH_QUORUM_COMMITMENT))
          )
            throw new Error("Unsupported Dash transaction type");
          var o = i.readUInt8(),
            f = i.readUInt8(),
            a = !1;
          (o !== y.ADVANCED_TRANSACTION_MARKER ||
          f !== y.ADVANCED_TRANSACTION_FLAG ||
          h.isZcash(e)
            ? (i.offset -= 2)
            : (a = !0),
            n.isOverwinterCompatible() && (n.versionGroupId = i.readUInt32()));
          for (var c = i.readVarInt(), I = 0; I < c; ++I)
            n.ins.push({
              hash: i.readSlice(32),
              index: i.readUInt32(),
              script: i.readVarSlice(),
              sequence: i.readUInt32(),
              witness: v,
            });
          var p = i.readVarInt();
          for (I = 0; I < p; ++I)
            n.outs.push({ value: i.readUInt64(), script: i.readVarSlice() });
          if (a) {
            for (I = 0; I < c; ++I) n.ins[I].witness = i.readVector();
            if (!n.hasWitnesses())
              throw new Error("Transaction has superfluous witness data");
          }
          if (((n.locktime = i.readUInt32()), h.isZcash(e))) {
            if (
              (n.isOverwinterCompatible() && (n.expiryHeight = i.readUInt32()),
              n.isSaplingCompatible())
            ) {
              n.valueBalance = i.readInt64();
              var l = i.readVarInt();
              for (I = 0; I < l; ++I)
                n.vShieldedSpend.push(i.readShieldedSpend());
              var g = i.readVarInt();
              for (I = 0; I < g; ++I)
                n.vShieldedOutput.push(i.readShieldedOutput());
            }
            if (n.supportsJoinSplits()) {
              var d = i.readVarInt();
              for (I = 0; I < d; ++I) n.joinsplits.push(i.readJoinSplit());
              d > 0 &&
                ((n.joinsplitPubkey = i.readSlice(32)),
                (n.joinsplitSig = i.readSlice(64)));
            }
            n.isSaplingCompatible() &&
              n.vShieldedSpend.length + n.vShieldedOutput.length > 0 &&
              (n.bindingSig = i.readSlice(64));
          }
          if (
            (n.isDashSpecialTransaction() &&
              (n.extraPayload = i.readVarSlice()),
            (n.network = e),
            r)
          )
            return n;
          if (i.offset !== t.length)
            throw new Error("Transaction has unexpected data");
          return n;
        }),
        (y.fromHex = function (t, e) {
          return y.fromBuffer(i.from(t, "hex"), e);
        }),
        (y.isCoinbaseHash = function (t) {
          I(p.Hash256bit, t);
          for (var e = 0; e < 32; ++e) if (0 !== t[e]) return !1;
          return !0;
        }),
        (y.prototype.isSaplingCompatible = function () {
          return h.isZcash(this.network) && this.version >= d.SAPLING;
        }),
        (y.prototype.isOverwinterCompatible = function () {
          return h.isZcash(this.network) && this.version >= d.OVERWINTER;
        }),
        (y.prototype.supportsJoinSplits = function () {
          return (
            h.isZcash(this.network) && this.version >= d.JOINSPLITS_SUPPORT
          );
        }),
        (y.prototype.versionSupportsDashSpecialTransactions = function () {
          return h.isDash(this.network) && this.version >= 3;
        }),
        (y.prototype.isDashSpecialTransaction = function () {
          return (
            this.versionSupportsDashSpecialTransactions() &&
            this.type !== y.DASH_NORMAL
          );
        }),
        (y.prototype.isCoinbase = function () {
          return 1 === this.ins.length && y.isCoinbaseHash(this.ins[0].hash);
        }),
        (y.prototype.addInput = function (t, e, r, i) {
          return (
            I(
              p.tuple(
                p.Hash256bit,
                p.UInt32,
                p.maybe(p.UInt32),
                p.maybe(p.Buffer),
              ),
              arguments,
            ),
            p.Null(r) && (r = y.DEFAULT_SEQUENCE),
            this.ins.push({
              hash: t,
              index: e,
              script: i || C,
              sequence: r,
              witness: v,
            }) - 1
          );
        }),
        (y.prototype.addOutput = function (t, e) {
          return (
            I(p.tuple(p.Buffer, p.Satoshi), arguments),
            this.outs.push({ script: t, value: e }) - 1
          );
        }),
        (y.prototype.hasWitnesses = function () {
          return this.ins.some(function (t) {
            return 0 !== t.witness.length;
          });
        }),
        (y.prototype.weight = function () {
          var t = this.__byteLength(!1),
            e = this.__byteLength(!0);
          return 3 * t + e;
        }),
        (y.prototype.virtualSize = function () {
          return Math.ceil(this.weight() / 4);
        }),
        (y.prototype.byteLength = function () {
          return this.__byteLength(!0);
        }),
        (y.prototype.getShieldedSpendByteLength = function () {
          if (!this.isSaplingCompatible()) return 0;
          var t = 0;
          return (
            (t += l.encodingLength(this.vShieldedSpend.length)),
            (t += 384 * this.vShieldedSpend.length),
            t
          );
        }),
        (y.prototype.getShieldedOutputByteLength = function () {
          if (!this.isSaplingCompatible()) return 0;
          var t = 0;
          return (
            (t += l.encodingLength(this.vShieldedOutput.length)),
            (t += 948 * this.vShieldedOutput.length),
            t
          );
        }),
        (y.prototype.getJoinSplitByteLength = function () {
          if (!this.supportsJoinSplits()) return 0;
          var t = this.joinsplits.length,
            e = 0;
          return (
            (e += l.encodingLength(t)),
            t > 0 &&
              (this.isSaplingCompatible() ? (e += 1698 * t) : (e += 1802 * t),
              (e += 32),
              (e += 64)),
            e
          );
        }),
        (y.prototype.zcashTransactionByteLength = function () {
          if (!h.isZcash(this.network))
            throw new Error(
              "zcashTransactionByteLength can only be called when using Zcash network",
            );
          var t = 0;
          return (
            (t += 4),
            this.isOverwinterCompatible() && (t += 4),
            (t += l.encodingLength(this.ins.length)),
            (t += this.ins.reduce(function (t, e) {
              return t + 40 + E(e.script);
            }, 0)),
            (t += l.encodingLength(this.outs.length)),
            (t += this.outs.reduce(function (t, e) {
              return t + 8 + E(e.script);
            }, 0)),
            (t += 4),
            this.isOverwinterCompatible() && (t += 4),
            this.isSaplingCompatible() &&
              ((t += 8),
              (t += this.getShieldedSpendByteLength()),
              (t += this.getShieldedOutputByteLength())),
            this.supportsJoinSplits() && (t += this.getJoinSplitByteLength()),
            this.isSaplingCompatible() &&
              this.vShieldedSpend.length + this.vShieldedOutput.length > 0 &&
              (t += 64),
            t
          );
        }),
        (y.prototype.__byteLength = function (t) {
          var e = t && this.hasWitnesses();
          return h.isZcash(this.network)
            ? this.zcashTransactionByteLength()
            : (e ? 10 : 8) +
                l.encodingLength(this.ins.length) +
                l.encodingLength(this.outs.length) +
                this.ins.reduce(function (t, e) {
                  return t + 40 + E(e.script);
                }, 0) +
                this.outs.reduce(function (t, e) {
                  return t + 8 + E(e.script);
                }, 0) +
                (this.isDashSpecialTransaction() ? E(this.extraPayload) : 0) +
                (e
                  ? this.ins.reduce(function (t, e) {
                      return t + w(e.witness);
                    }, 0)
                  : 0);
        }),
        (y.prototype.clone = function () {
          var t = new y(this.network);
          return (
            (t.version = this.version),
            (t.locktime = this.locktime),
            (t.network = this.network),
            h.isDash(this.network) &&
              ((t.type = this.type), (t.extraPayload = this.extraPayload)),
            this.isOverwinterCompatible() &&
              ((t.overwintered = this.overwintered),
              (t.versionGroupId = this.versionGroupId),
              (t.expiryHeight = this.expiryHeight)),
            this.isSaplingCompatible() && (t.valueBalance = this.valueBalance),
            (t.ins = this.ins.map(function (t) {
              return {
                hash: t.hash,
                index: t.index,
                script: t.script,
                sequence: t.sequence,
                witness: t.witness,
              };
            })),
            (t.outs = this.outs.map(function (t) {
              return { script: t.script, value: t.value };
            })),
            this.isSaplingCompatible() &&
              ((t.vShieldedSpend = this.vShieldedSpend.map(function (t) {
                return {
                  cv: t.cv,
                  anchor: t.anchor,
                  nullifier: t.nullifier,
                  rk: t.rk,
                  zkproof: t.zkproof,
                  spendAuthSig: t.spendAuthSig,
                };
              })),
              (t.vShieldedOutput = this.vShieldedOutput.map(function (t) {
                return {
                  cv: t.cv,
                  cmu: t.cmu,
                  ephemeralKey: t.ephemeralKey,
                  encCiphertext: t.encCiphertext,
                  outCiphertext: t.outCiphertext,
                  zkproof: t.zkproof,
                };
              }))),
            this.supportsJoinSplits() &&
              ((t.joinsplits = this.joinsplits.map(function (t) {
                return {
                  vpubOld: t.vpubOld,
                  vpubNew: t.vpubNew,
                  anchor: t.anchor,
                  nullifiers: t.nullifiers,
                  commitments: t.commitments,
                  ephemeralKey: t.ephemeralKey,
                  randomSeed: t.randomSeed,
                  macs: t.macs,
                  zkproof: t.zkproof,
                  ciphertexts: t.ciphertexts,
                };
              })),
              (t.joinsplitPubkey = this.joinsplitPubkey),
              (t.joinsplitSig = this.joinsplitSig)),
            this.isSaplingCompatible() &&
              this.vShieldedSpend.length + this.vShieldedOutput.length > 0 &&
              (t.bindingSig = this.bindingSig),
            t
          );
        }),
        (y.prototype.getHeader = function () {
          var t = this.overwintered ? 1 : 0,
            e = this.version | (t << 31);
          return e;
        }),
        (y.prototype.hashForSignature = function (t, e, r) {
          if (
            (I(p.tuple(p.UInt32, p.Buffer, p.Number), arguments),
            t >= this.ins.length)
          )
            return m;
          var s = o.compile(
              o.decompile(e).filter(function (t) {
                return t !== c.OP_CODESEPARATOR;
              }),
            ),
            f = this.clone();
          if ((31 & r) === y.SIGHASH_NONE)
            ((f.outs = []),
              f.ins.forEach(function (e, r) {
                r !== t && (e.sequence = 0);
              }));
          else if ((31 & r) === y.SIGHASH_SINGLE) {
            if (t >= this.outs.length) return m;
            f.outs.length = t + 1;
            for (var u = 0; u < t; u++) f.outs[u] = B;
            f.ins.forEach(function (e, r) {
              r !== t && (e.sequence = 0);
            });
          }
          r & y.SIGHASH_ANYONECANPAY
            ? ((f.ins = [f.ins[t]]), (f.ins[0].script = s))
            : (f.ins.forEach(function (t) {
                t.script = C;
              }),
              (f.ins[t].script = s));
          var a = i.allocUnsafe(f.__byteLength(!1) + 4);
          return (
            a.writeInt32LE(r, a.length - 4),
            f.__toBuffer(a, 0, !1),
            n.hash256(a)
          );
        }),
        (y.prototype.getBlake2bHash = function (t, e) {
          var r = i.allocUnsafe(32);
          return g(r.length, null, null, i.from(e)).update(t).digest(r);
        }),
        (y.prototype.getPrevoutHash = function (t) {
          if (!(t & y.SIGHASH_ANYONECANPAY)) {
            var e = new f(i.allocUnsafe(36 * this.ins.length));
            return (
              this.ins.forEach(function (t) {
                (e.writeSlice(t.hash), e.writeUInt32(t.index));
              }),
              h.isZcash(this.network)
                ? this.getBlake2bHash(e.buffer, "ZcashPrevoutHash")
                : n.hash256(e.buffer)
            );
          }
          return S;
        }),
        (y.prototype.getSequenceHash = function (t) {
          if (
            !(t & y.SIGHASH_ANYONECANPAY) &&
            (31 & t) !== y.SIGHASH_SINGLE &&
            (31 & t) !== y.SIGHASH_NONE
          ) {
            var e = new f(i.allocUnsafe(4 * this.ins.length));
            return (
              this.ins.forEach(function (t) {
                e.writeUInt32(t.sequence);
              }),
              h.isZcash(this.network)
                ? this.getBlake2bHash(e.buffer, "ZcashSequencHash")
                : n.hash256(e.buffer)
            );
          }
          return S;
        }),
        (y.prototype.getOutputsHash = function (t, e) {
          var r;
          if ((31 & t) !== y.SIGHASH_SINGLE && (31 & t) !== y.SIGHASH_NONE) {
            var o = this.outs.reduce(function (t, e) {
              return t + 8 + E(e.script);
            }, 0);
            return (
              (r = new f(i.allocUnsafe(o))),
              this.outs.forEach(function (t) {
                (r.writeUInt64(t.value), r.writeVarSlice(t.script));
              }),
              h.isZcash(this.network)
                ? this.getBlake2bHash(r.buffer, "ZcashOutputsHash")
                : n.hash256(r.buffer)
            );
          }
          if ((31 & t) === y.SIGHASH_SINGLE && e < this.outs.length) {
            var s = this.outs[e];
            return (
              (r = new f(i.allocUnsafe(8 + E(s.script)))),
              r.writeUInt64(s.value),
              r.writeVarSlice(s.script),
              h.isZcash(this.network)
                ? this.getBlake2bHash(r.buffer, "ZcashOutputsHash")
                : n.hash256(r.buffer)
            );
          }
          return S;
        }),
        (y.prototype.hashForZcashSignature = function (t, e, r, n) {
          if (
            (I(p.tuple(p.UInt32, p.Buffer, p.Satoshi, p.UInt32), arguments),
            !h.isZcash(this.network))
          )
            throw new Error(
              "hashForZcashSignature can only be called when using Zcash network",
            );
          if (this.joinsplits.length > 0)
            throw new Error(
              "Hash signature for Zcash protected transactions is not supported",
            );
          if (t >= this.ins.length && t !== b)
            throw new Error("Input index is out of range");
          if (this.isOverwinterCompatible()) {
            var o,
              s = this.getPrevoutHash(n),
              u = this.getSequenceHash(n),
              a = this.getOutputsHash(n, t),
              c = S,
              A = S,
              l = S,
              g = 0;
            if (
              ((g += 20),
              (g += 128),
              t !== b && ((g += 8), (g += 8), (g += 32), (g += E(e))),
              this.isSaplingCompatible() && ((g += 64), (g += 8)),
              (o = new f(i.alloc(g))),
              o.writeInt32(this.getHeader()),
              o.writeUInt32(this.versionGroupId),
              o.writeSlice(s),
              o.writeSlice(u),
              o.writeSlice(a),
              o.writeSlice(c),
              this.isSaplingCompatible() && (o.writeSlice(A), o.writeSlice(l)),
              o.writeUInt32(this.locktime),
              o.writeUInt32(this.expiryHeight),
              this.isSaplingCompatible() && o.writeUInt64(this.valueBalance),
              o.writeUInt32(n),
              t !== b)
            ) {
              var d = this.ins[t];
              (o.writeSlice(d.hash),
                o.writeUInt32(d.index),
                o.writeVarSlice(e),
                o.writeUInt64(r),
                o.writeUInt32(d.sequence));
            }
            var w = i.alloc(16),
              y = "ZcashSigHash";
            return (
              w.write(y),
              w.writeUInt32LE(
                this.network.consensusBranchId[this.version],
                y.length,
              ),
              this.getBlake2bHash(o.buffer, w)
            );
          }
        }),
        (y.prototype.hashForWitnessV0 = function (t, e, r, o) {
          I(p.tuple(p.UInt32, p.Buffer, p.Satoshi, p.UInt32), arguments);
          var s = this.getPrevoutHash(o),
            u = this.getSequenceHash(o),
            a = this.getOutputsHash(o, t),
            h = new f(i.allocUnsafe(156 + E(e))),
            c = this.ins[t];
          return (
            h.writeUInt32(this.version),
            h.writeSlice(s),
            h.writeSlice(u),
            h.writeSlice(c.hash),
            h.writeUInt32(c.index),
            h.writeVarSlice(e),
            h.writeUInt64(r),
            h.writeUInt32(c.sequence),
            h.writeSlice(a),
            h.writeUInt32(this.locktime),
            h.writeUInt32(o),
            n.hash256(h.buffer)
          );
        }),
        (y.prototype.hashForCashSignature = function (t, e, r, i) {
          if (
            (I(
              p.tuple(p.UInt32, p.Buffer, p.Number, p.maybe(p.UInt53)),
              arguments,
            ),
            i & y.SIGHASH_BITCOINCASHBIP143)
          ) {
            if (p.Null(r))
              throw new Error(
                "Bitcoin Cash sighash requires value of input to be signed.",
              );
            return this.hashForWitnessV0(t, e, r, i);
          }
          return this.hashForSignature(t, e, i);
        }),
        (y.prototype.hashForGoldSignature = function (t, e, r, i, n) {
          I(
            p.tuple(p.UInt32, p.Buffer, p.Number, p.maybe(p.UInt53)),
            arguments,
          );
          var o = i,
            s = (i & y.SIGHASH_BITCOINCASHBIP143) > 0;
          if ((s && (o |= this.network.forkId << 8), n || s)) {
            if (p.Null(r))
              throw new Error(
                "Bitcoin Cash sighash requires value of input to be signed.",
              );
            return this.hashForWitnessV0(t, e, r, o);
          }
          return this.hashForSignature(t, e, o);
        }),
        (y.prototype.getHash = function () {
          return n.hash256(this.__toBuffer(void 0, void 0, !1));
        }),
        (y.prototype.getId = function () {
          return this.getHash().reverse().toString("hex");
        }),
        (y.prototype.toBuffer = function (t, e) {
          return this.__toBuffer(t, e, !0);
        }),
        (y.prototype.__toBuffer = function (t, e, r) {
          t || (t = i.allocUnsafe(this.__byteLength(r)));
          const n = h.isZcash(this.network)
            ? new a(t, e || 0)
            : new f(t, e || 0);
          function o(t) {
            n.offset = n.buffer.writeUInt16LE(t, n.offset);
          }
          if (this.isOverwinterCompatible()) {
            var s = this.overwintered ? 1 : 0;
            (n.writeInt32(this.version | (s << 31)),
              n.writeUInt32(this.versionGroupId));
          } else
            this.isDashSpecialTransaction()
              ? (o(this.version), o(this.type))
              : n.writeInt32(this.version);
          var u = r && this.hasWitnesses();
          return (
            u &&
              (n.writeUInt8(y.ADVANCED_TRANSACTION_MARKER),
              n.writeUInt8(y.ADVANCED_TRANSACTION_FLAG)),
            n.writeVarInt(this.ins.length),
            this.ins.forEach(function (t) {
              (n.writeSlice(t.hash),
                n.writeUInt32(t.index),
                n.writeVarSlice(t.script),
                n.writeUInt32(t.sequence));
            }),
            n.writeVarInt(this.outs.length),
            this.outs.forEach(function (t) {
              (t.valueBuffer
                ? n.writeSlice(t.valueBuffer)
                : n.writeUInt64(t.value),
                n.writeVarSlice(t.script));
            }),
            u &&
              this.ins.forEach(function (t) {
                n.writeVector(t.witness);
              }),
            n.writeUInt32(this.locktime),
            this.isOverwinterCompatible() && n.writeUInt32(this.expiryHeight),
            this.isSaplingCompatible() &&
              (n.writeUInt64(this.valueBalance),
              n.writeVarInt(this.vShieldedSpend.length),
              this.vShieldedSpend.forEach(function (t) {
                (n.writeSlice(t.cv),
                  n.writeSlice(t.anchor),
                  n.writeSlice(t.nullifier),
                  n.writeSlice(t.rk),
                  n.writeSlice(t.zkproof.sA),
                  n.writeSlice(t.zkproof.sB),
                  n.writeSlice(t.zkproof.sC),
                  n.writeSlice(t.spendAuthSig));
              }),
              n.writeVarInt(this.vShieldedOutput.length),
              this.vShieldedOutput.forEach(function (t) {
                (n.writeSlice(t.cv),
                  n.writeSlice(t.cmu),
                  n.writeSlice(t.ephemeralKey),
                  n.writeSlice(t.encCiphertext),
                  n.writeSlice(t.outCiphertext),
                  n.writeSlice(t.zkproof.sA),
                  n.writeSlice(t.zkproof.sB),
                  n.writeSlice(t.zkproof.sC));
              })),
            this.supportsJoinSplits() &&
              (n.writeVarInt(this.joinsplits.length),
              this.joinsplits.forEach(function (t) {
                (n.writeUInt64(t.vpubOld),
                  n.writeUInt64(t.vpubNew),
                  n.writeSlice(t.anchor),
                  t.nullifiers.forEach(function (t) {
                    n.writeSlice(t);
                  }),
                  t.commitments.forEach(function (t) {
                    n.writeSlice(t);
                  }),
                  n.writeSlice(t.ephemeralKey),
                  n.writeSlice(t.randomSeed),
                  t.macs.forEach(function (t) {
                    n.writeSlice(t);
                  }),
                  this.isSaplingCompatible()
                    ? (n.writeSlice(t.zkproof.sA),
                      n.writeSlice(t.zkproof.sB),
                      n.writeSlice(t.zkproof.sC))
                    : (n.writeCompressedG1(t.zkproof.gA),
                      n.writeCompressedG1(t.zkproof.gAPrime),
                      n.writeCompressedG2(t.zkproof.gB),
                      n.writeCompressedG1(t.zkproof.gBPrime),
                      n.writeCompressedG1(t.zkproof.gC),
                      n.writeCompressedG1(t.zkproof.gCPrime),
                      n.writeCompressedG1(t.zkproof.gK),
                      n.writeCompressedG1(t.zkproof.gH)),
                  t.ciphertexts.forEach(function (t) {
                    n.writeSlice(t);
                  }));
              }, this),
              this.joinsplits.length > 0 &&
                (n.writeSlice(this.joinsplitPubkey),
                n.writeSlice(this.joinsplitSig))),
            this.isSaplingCompatible() &&
              this.vShieldedSpend.length + this.vShieldedOutput.length > 0 &&
              n.writeSlice(this.bindingSig),
            this.isDashSpecialTransaction() &&
              n.writeVarSlice(this.extraPayload),
            void 0 !== e ? t.slice(e, n.offset) : t.slice(0, n.offset)
          );
        }),
        (y.prototype.toHex = function () {
          return this.toBuffer().toString("hex");
        }),
        (y.prototype.setInputScript = function (t, e) {
          (I(p.tuple(p.Number, p.Buffer), arguments), (this.ins[t].script = e));
        }),
        (y.prototype.setWitness = function (t, e) {
          (I(p.tuple(p.Number, [p.Buffer]), arguments),
            (this.ins[t].witness = e));
        }),
        (t.exports = y));
    },
    6665: function (t, e, r) {
      var i = r(46).Buffer;
      function n(t, e, r) {
        ((e = e || 4), (r = void 0 === r || r));
        var i = t.length;
        if (0 === i) return 0;
        if (i > e) throw new TypeError("Script number overflow");
        if (r && 0 === (127 & t[i - 1]) && (i <= 1 || 0 === (128 & t[i - 2])))
          throw new Error("Non-minimally encoded script number");
        if (5 === i) {
          var n = t.readUInt32LE(0),
            o = t.readUInt8(4);
          return 128 & o ? -(4294967296 * (-129 & o) + n) : 4294967296 * o + n;
        }
        for (var s = 0, f = 0; f < i; ++f) s |= t[f] << (8 * f);
        return 128 & t[i - 1] ? -(s & ~(128 << (8 * (i - 1)))) : s;
      }
      function o(t) {
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
      function s(t) {
        for (
          var e = Math.abs(t), r = o(e), n = i.allocUnsafe(r), s = t < 0, f = 0;
          f < r;
          ++f
        )
          (n.writeUInt8(255 & e, f), (e >>= 8));
        return (
          128 & n[r - 1]
            ? n.writeUInt8(s ? 128 : 0, r - 1)
            : s && (n[r - 1] |= 128),
          n
        );
      }
      t.exports = { decode: n, encode: s };
    },
    6666: function (t, e, r) {
      var i = r(3007),
        n = r(2985),
        o = r(2758),
        s = r(2771),
        f = s.OP_RESERVED;
      function u(t, e) {
        var r = i.decompile(t);
        if (r.length < 4) return !1;
        if (r[r.length - 1] !== s.OP_CHECKMULTISIG) return !1;
        if (!n.Number(r[0])) return !1;
        if (!n.Number(r[r.length - 2])) return !1;
        var o = r[0] - f,
          u = r[r.length - 2] - f;
        if (o <= 0) return !1;
        if (u > 16) return !1;
        if (o > u) return !1;
        if (u !== r.length - 3) return !1;
        if (e) return !0;
        var a = r.slice(1, -2);
        return a.every(i.isCanonicalPubKey);
      }
      function a(t, e) {
        o(
          { m: n.Number, pubKeys: [i.isCanonicalPubKey] },
          { m: t, pubKeys: e },
        );
        var r = e.length;
        if (r < t) throw new TypeError("Not enough pubKeys provided");
        return i.compile([].concat(f + t, e, f + r, s.OP_CHECKMULTISIG));
      }
      function h(t, e) {
        var r = i.decompile(t);
        return (o(u, r, e), { m: r[0] - f, pubKeys: r.slice(1, -2) });
      }
      ((u.toJSON = function () {
        return "multi-sig output";
      }),
        (t.exports = { check: u, decode: h, encode: a }));
    },
    6667: function (t, e, r) {
      var i = r(3007),
        n = r(2985),
        o = r(2758),
        s = r(2771);
      function f(t) {
        var e = i.compile(t);
        return 22 === e.length && e[0] === s.OP_0 && 20 === e[1];
      }
      function u(t) {
        return (o(n.Hash160bit, t), i.compile([s.OP_0, t]));
      }
      function a(t) {
        return (o(f, t), t.slice(2));
      }
      ((f.toJSON = function () {
        return "Witness pubKeyHash output";
      }),
        (t.exports = { check: f, decode: a, encode: u }));
    },
    6668: function (t, e, r) {
      var i = r(3007),
        n = r(2985),
        o = r(2758),
        s = r(2771);
      function f(t) {
        var e = i.compile(t);
        return 34 === e.length && e[0] === s.OP_0 && 32 === e[1];
      }
      function u(t) {
        return (o(n.Hash256bit, t), i.compile([s.OP_0, t]));
      }
      function a(t) {
        return (o(f, t), t.slice(2));
      }
      ((f.toJSON = function () {
        return "Witness scriptHash output";
      }),
        (t.exports = { check: f, decode: a, encode: u }));
    },
    6669: function (t, e, r) {
      var i,
        n = r(2758),
        ECSignature = r(4803),
        o = r(2985),
        s = !1;
      try {
        ((i = r(3650)), (s = !0));
      } catch (h) {}
      var f = function (t, e) {
          if ((n(o.tuple(o.Buffer256bit, o.Boolean), arguments), s))
            return i.publicKeyCreate(t, e);
        },
        u = function (t, e) {
          if ((n(o.tuple(o.Buffer256bit, o.BigInt), arguments), s)) {
            var r = i.sign(t, e.toBuffer(32)).signature;
            return ECSignature.fromDER(i.signatureExport(r));
          }
        },
        a = function (t, e, r) {
          if (
            (n(
              o.tuple(
                o.Hash256bit,
                o.ECSignature,
                o.oneOf(o.BufferN(33), o.BufferN(65)),
              ),
              arguments,
            ),
            s)
          )
            return (
              (e = new ECSignature(e.r, e.s)),
              (e = i.signatureNormalize(i.signatureImport(e.toDER()))),
              i.verify(t, e, r)
            );
        };
      t.exports = { available: s, publicKeyCreate: f, sign: u, verify: a };
    },
    6670: function (t, e) {
      t.exports = { JOINSPLITS_SUPPORT: 2, OVERWINTER: 3, SAPLING: 4 };
    },
  },
]);
