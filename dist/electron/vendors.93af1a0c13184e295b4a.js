(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [158],
  {
    11012: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = 0 === new Int8Array(new Int16Array([1]).buffer)[0];
        class Salsa20 {
          constructor() {
            ((this.state = new Uint32Array(16)),
              (this.stream = new Uint32Array(16)),
              (this.bytes = new Uint8Array(this.stream.buffer)),
              (this.pos = 0),
              s && (this.bytes = e.allocUnsafe(64)));
          }
          init(t, r, s) {
            if (
              (null == s && (s = 0),
              i(e.isBuffer(t)),
              i(e.isBuffer(r)),
              i(Number.isSafeInteger(s)),
              16 !== t.length && 32 !== t.length)
            )
              throw new RangeError("Invalid key size.");
            if (
              (r.length >= 24 &&
                ((t = Salsa20.derive(t, r.slice(0, 16))), (r = r.slice(16))),
              (this.state[0] = 1634760805),
              (this.state[1] = a(t, 0)),
              (this.state[2] = a(t, 4)),
              (this.state[3] = a(t, 8)),
              (this.state[4] = a(t, 12)),
              (this.state[5] = t.length < 32 ? 824206446 : 857760878),
              8 === r.length)
            )
              ((this.state[6] = a(r, 0)),
                (this.state[7] = a(r, 4)),
                (this.state[8] = s >>> 0),
                (this.state[9] = (s / 4294967296) >>> 0));
            else if (12 === r.length)
              ((this.state[6] = a(r, 0)),
                (this.state[7] = a(r, 4)),
                (this.state[8] = a(r, 8)),
                (this.state[9] = s >>> 0));
            else {
              if (16 !== r.length) throw new RangeError("Invalid nonce size.");
              ((this.state[6] = a(r, 0)),
                (this.state[7] = a(r, 4)),
                (this.state[8] = a(r, 8)),
                (this.state[9] = a(r, 12)));
            }
            return (
              (this.state[10] = t.length < 32 ? 2036477238 : 2036477234),
              (this.state[11] = a(t, 16 % t.length)),
              (this.state[12] = a(t, 20 % t.length)),
              (this.state[13] = a(t, 24 % t.length)),
              (this.state[14] = a(t, 28 % t.length)),
              (this.state[15] = 1797285236),
              (this.pos = 0),
              this
            );
          }
          encrypt(t) {
            return this.crypt(t, t);
          }
          crypt(t, r) {
            if ((i(e.isBuffer(t)), i(e.isBuffer(r)), r.length < t.length))
              throw new Error("Invalid output size.");
            for (let e = 0; e < t.length; e++)
              (0 === (63 & this.pos) && (this._block(), (this.pos = 0)),
                (r[e] = t[e] ^ this.bytes[this.pos++]));
            return r;
          }
          _block() {
            for (let t = 0; t < 16; t++) this.stream[t] = this.state[t];
            for (let t = 0; t < 10; t++)
              (n(this.stream, 0, 4, 8, 12),
                n(this.stream, 5, 9, 13, 1),
                n(this.stream, 10, 14, 2, 6),
                n(this.stream, 15, 3, 7, 11),
                n(this.stream, 0, 1, 2, 3),
                n(this.stream, 5, 6, 7, 4),
                n(this.stream, 10, 11, 8, 9),
                n(this.stream, 15, 12, 13, 14));
            for (let t = 0; t < 16; t++) this.stream[t] += this.state[t];
            if (s)
              for (let t = 0; t < 16; t++) c(this.bytes, this.stream[t], 4 * t);
            ((this.state[8] += 1), 0 === this.state[8] && (this.state[9] += 1));
          }
          destroy() {
            for (let t = 0; t < 16; t++)
              ((this.state[t] = 0), (this.stream[t] = 0));
            if (s) for (let t = 0; t < 64; t++) this.bytes[t] = 0;
            return ((this.pos = 0), this);
          }
          static derive(t, r) {
            if (
              (i(e.isBuffer(t)),
              i(e.isBuffer(r)),
              16 !== t.length && 32 !== t.length)
            )
              throw new RangeError("Invalid key size.");
            if (16 !== r.length) throw new RangeError("Invalid nonce size.");
            const s = new Uint32Array(16);
            ((s[0] = 1634760805),
              (s[1] = a(t, 0)),
              (s[2] = a(t, 4)),
              (s[3] = a(t, 8)),
              (s[4] = a(t, 12)),
              (s[5] = t.length < 32 ? 824206446 : 857760878),
              (s[6] = a(r, 0)),
              (s[7] = a(r, 4)),
              (s[8] = a(r, 8)),
              (s[9] = a(r, 12)),
              (s[10] = t.length < 32 ? 2036477238 : 2036477234),
              (s[11] = a(t, 16 % t.length)),
              (s[12] = a(t, 20 % t.length)),
              (s[13] = a(t, 24 % t.length)),
              (s[14] = a(t, 28 % t.length)),
              (s[15] = 1797285236));
            for (let e = 0; e < 10; e++)
              (n(s, 0, 4, 8, 12),
                n(s, 5, 9, 13, 1),
                n(s, 10, 14, 2, 6),
                n(s, 15, 3, 7, 11),
                n(s, 0, 1, 2, 3),
                n(s, 5, 6, 7, 4),
                n(s, 10, 11, 8, 9),
                n(s, 15, 12, 13, 14));
            const o = e.alloc(32);
            return (
              c(o, s[0], 0),
              c(o, s[5], 4),
              c(o, s[10], 8),
              c(o, s[15], 12),
              c(o, s[6], 16),
              c(o, s[7], 20),
              c(o, s[8], 24),
              c(o, s[9], 28),
              o
            );
          }
        }
        function n(t, e, r, i, s) {
          ((t[r] ^= o(t[e] + t[s], 7)),
            (t[i] ^= o(t[r] + t[e], 9)),
            (t[s] ^= o(t[i] + t[r], 13)),
            (t[e] ^= o(t[s] + t[i], 18)));
        }
        function o(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function a(t, e) {
          return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e];
        }
        function c(t, e, r) {
          return (
            (t[r++] = e),
            (e >>>= 8),
            (t[r++] = e),
            (e >>>= 8),
            (t[r++] = e),
            (e >>>= 8),
            (t[r++] = e),
            r
          );
        }
        ((Salsa20.native = 0), (t.exports = Salsa20));
      }).call(this, r(2).Buffer);
    },
    11016: function (t, e, r) {
      "use strict";
      (function (e, i) {
        const { custom: s } = r(3961),
          n = r(11017)("bcrypto", e).BN;
        if (!n) throw new Error("GMP backend not supported.");
        const o = {
          p192: null,
          p224: null,
          p521: null,
          k256: null,
          p25519: null,
          p448: null,
        };
        class BN extends n {
          constructor(t, e, r) {
            (super(), (this.red = null), this.from(t, e, r));
          }
          get negative() {
            return this.isNeg() ? 1 : 0;
          }
          set negative(t) {
            (1 & t) !== this.negative && this.ineg();
          }
          get length() {
            return Math.floor((this.bitLength() + 25) / 26);
          }
          add(t) {
            return this.clone().iadd(t);
          }
          addn(t) {
            return this.clone().iaddn(t);
          }
          sub(t) {
            return this.clone().isub(t);
          }
          subn(t) {
            return this.clone().isubn(t);
          }
          mul(t) {
            return this.clone().imul(t);
          }
          muln(t) {
            return this.clone().imuln(t);
          }
          quorem(t) {
            const e = new BN(),
              r = new BN();
            return (super.quorem(e, r, t), [e, r]);
          }
          quo(t) {
            return this.clone().iquo(t);
          }
          quon(t) {
            return this.clone().iquon(t);
          }
          rem(t) {
            return this.clone().irem(t);
          }
          remn(t) {
            return this.clone().iremn(t);
          }
          divmod(t) {
            const e = new BN(),
              r = new BN();
            return (super.divmod(e, r, t), [e, r]);
          }
          div(t) {
            return this.clone().idiv(t);
          }
          divn(t) {
            return this.clone().idivn(t);
          }
          mod(t) {
            return this.clone().imod(t);
          }
          modn(t) {
            return this.clone().imodn(t);
          }
          divRound(t) {
            return this.clone().idivRound(t);
          }
          pow(t) {
            return this.clone().ipow(t);
          }
          pown(t) {
            return this.clone().ipown(t);
          }
          sqr() {
            return this.clone().isqr();
          }
          rootrem(t) {
            const e = new BN(),
              r = new BN();
            return (super.rootrem(e, r, t), [e, r]);
          }
          root(t) {
            return this.clone().iroot(t);
          }
          sqrtrem() {
            const t = new BN(),
              e = new BN();
            return (super.sqrtrem(t, e), [t, e]);
          }
          sqrt() {
            return this.clone().isqrt();
          }
          and(t) {
            return this.clone().iand(t);
          }
          andn(t) {
            return this.clone().iandn(t);
          }
          uand(t) {
            return this.clone().iuand(t);
          }
          uandn(t) {
            return this.clone().iuandn(t);
          }
          or(t) {
            return this.clone().ior(t);
          }
          orn(t) {
            return this.clone().iorn(t);
          }
          uor(t) {
            return this.clone().iuor(t);
          }
          uorn(t) {
            return this.clone().iuorn(t);
          }
          xor(t) {
            return this.clone().ixor(t);
          }
          xorn(t) {
            return this.clone().ixorn(t);
          }
          uxor(t) {
            return this.clone().ixor(t);
          }
          uxorn(t) {
            return this.clone().iuxorn(t);
          }
          not() {
            return this.clone().inot();
          }
          notn(t) {
            return this.clone().inotn(t);
          }
          ishl(t) {
            return (
              c(BN.isBN(t), "bits", "bignum"),
              c(t.bitLength() <= 32, "bits", "uint32"),
              this.ishln(t.toNumber())
            );
          }
          shl(t) {
            return this.clone().ishl(t);
          }
          shln(t) {
            return this.clone().ishln(t);
          }
          iushl(t) {
            return (
              c(BN.isBN(t), "bits", "bignum"),
              c(t.bitLength() <= 32, "bits", "uint32"),
              this.iushln(t.toNumber())
            );
          }
          ushl(t) {
            return this.clone().iushl(t);
          }
          ushln(t) {
            return this.clone().iushln(t);
          }
          ishr(t) {
            return (
              c(BN.isBN(t), "bits", "bignum"),
              c(t.bitLength() <= 32, "bits", "uint32"),
              this.ishrn(t.toNumber())
            );
          }
          shr(t) {
            return this.clone().ishr(t);
          }
          shrn(t) {
            return this.clone().ishrn(t);
          }
          iushr(t) {
            return (
              c(BN.isBN(t), "bits", "bignum"),
              c(t.bitLength() <= 32, "bits", "uint32"),
              this.iushrn(t.toNumber())
            );
          }
          ushr(t) {
            return this.clone().iushr(t);
          }
          ushrn(t) {
            return this.clone().iushrn(t);
          }
          maskn(t) {
            return this.clone().imaskn(t);
          }
          umaskn(t) {
            return this.clone().iumaskn(t);
          }
          andln(t) {
            return super.andln(67108863 & t);
          }
          neg() {
            return this.clone().ineg();
          }
          abs() {
            return this.clone().iabs();
          }
          gt(t) {
            return this.cmp(t) > 0;
          }
          gtn(t) {
            return this.cmpn(t) > 0;
          }
          gte(t) {
            return this.cmp(t) >= 0;
          }
          gten(t) {
            return this.cmpn(t) >= 0;
          }
          lt(t) {
            return this.cmp(t) < 0;
          }
          ltn(t) {
            return this.cmpn(t) < 0;
          }
          lte(t) {
            return this.cmp(t) <= 0;
          }
          lten(t) {
            return this.cmpn(t) <= 0;
          }
          gcd(t) {
            return this.clone().igcd(t);
          }
          lcm(t) {
            return this.clone().ilcm(t);
          }
          egcd(t) {
            const e = new BN(),
              r = new BN(),
              i = new BN();
            return (super.egcd(e, r, i, t), [e, r, i]);
          }
          invert(t) {
            return this.clone().iinvert(t);
          }
          fermat(t) {
            return this.clone().ifermat(t);
          }
          ipowm(t, e, r, i) {
            return (null != i && (i >>>= 0), super.ipowm(t, e, r, i));
          }
          powm(t, e, r, i) {
            return this.clone().ipowm(t, e, r, i);
          }
          powmn(t, e, r) {
            return this.clone().ipowmn(t, e, r);
          }
          sqrtm(t) {
            return this.clone().isqrtm(t);
          }
          sqrtpq(t, e) {
            return this.clone().isqrtpq(t, e);
          }
          isPrime(t, e, r) {
            return (
              c(e >>> 0 === e, "reps", "uint32"),
              !!this.isPrimeMR(t, e + 1, !0) && !!this.isPrimeLucas(r)
            );
          }
          isPrimeMR(t, e, r) {
            return (null == r && (r = !1), super.isPrimeMR(t, e, r));
          }
          isPrimeLucas(t) {
            return (null == t && (t = 0), super.isPrimeLucas(t));
          }
          toRed(t) {
            if ((c(t instanceof Red, "ctx", "reduction context"), this.red))
              throw new Error("Already in reduction context.");
            return t.convertTo(this)._forceRed(t);
          }
          fromRed() {
            return (u(this.red, "fromRed"), this.red.convertFrom(this));
          }
          forceRed(t) {
            if (this.red) throw new Error("Already in reduction context.");
            return this._forceRed(t);
          }
          redIAdd(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redIAdd"),
              this.red.iadd(this, t)
            );
          }
          redAdd(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redAdd"),
              this.red.add(this, t)
            );
          }
          redIAddn(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redIAddn"),
              this.red.iaddn(this, t)
            );
          }
          redAddn(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redAddn"),
              this.red.addn(this, t)
            );
          }
          redISub(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redISub"),
              this.red.isub(this, t)
            );
          }
          redSub(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redSub"),
              this.red.sub(this, t)
            );
          }
          redISubn(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redISubn"),
              this.red.isubn(this, t)
            );
          }
          redSubn(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redSubn"),
              this.red.subn(this, t)
            );
          }
          redIMul(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redIMul"),
              this.red.imul(this, t)
            );
          }
          redMul(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redMul"),
              this.red.mul(this, t)
            );
          }
          redIMuln(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redIMuln"),
              this.red.imuln(this, t)
            );
          }
          redMuln(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redMuln"),
              this.red.muln(this, t)
            );
          }
          redISqr() {
            return (u(this.red, "redISqr"), this.red.isqr(this));
          }
          redSqr() {
            return (u(this.red, "redSqr"), this.red.sqr(this));
          }
          redIShl(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redIShl"),
              f(!t.red, "redIShl"),
              this.red.ishl(this, t)
            );
          }
          redShl(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redShl"),
              f(!t.red, "redShl"),
              this.red.shl(this, t)
            );
          }
          redIShln(t) {
            return (
              c(t >>> 0 === t, "num", "uint32"),
              u(this.red, "redIShln"),
              this.red.ishln(this, t)
            );
          }
          redShln(t) {
            return (
              c(t >>> 0 === t, "num", "uint32"),
              u(this.red, "redShln"),
              this.red.shln(this, t)
            );
          }
          redINeg() {
            return (u(this.red, "redINeg"), this.red.ineg(this));
          }
          redNeg() {
            return (u(this.red, "redNeg"), this.red.neg(this));
          }
          redCmp(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redCmp"),
              this.red.cmp(this, t)
            );
          }
          redCmpn(t) {
            return (
              c(d(t), "num", "smi"),
              u(this.red, "redCmpn"),
              this.red.cmpn(this, t)
            );
          }
          redIsOdd() {
            return (u(this.red, "redIsOdd"), this.red.isOdd(this));
          }
          redIsEven() {
            return (u(this.red, "redIsEven"), this.red.isEven(this));
          }
          redISqrt() {
            return (u(this.red, "redISqrt"), this.red.isqrt(this));
          }
          redSqrt() {
            return (u(this.red, "redSqrt"), this.red.sqrt(this));
          }
          redIInvert() {
            return (u(this.red, "redIInvert"), this.red.iinvert(this));
          }
          redInvert() {
            return (u(this.red, "redInvert"), this.red.invert(this));
          }
          redIFermat() {
            return (u(this.red, "redIFermat"), this.red.ifermat(this));
          }
          redFermat() {
            return (u(this.red, "redFermat"), this.red.fermat(this));
          }
          redLegendre() {
            return (u(this.red, "redLegendre"), this.red.legendre(this));
          }
          redJacobi() {
            return (u(this.red, "redJacobi"), this.red.jacobi(this));
          }
          redKronecker() {
            return (u(this.red, "redKronecker"), this.red.kronecker(this));
          }
          redIPow(t, e) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redIPow"),
              f(!t.red, "redIPow"),
              this.red.ipow(this, t, e)
            );
          }
          redPow(t, e) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              u(this.red, "redPow"),
              f(!t.red, "redPow"),
              this.red.pow(this, t, e)
            );
          }
          redIPown(t) {
            return (u(this.red, "redIPown"), this.red.ipown(this, t));
          }
          redPown(t) {
            return (u(this.red, "redPown"), this.red.pown(this, t));
          }
          _forceRed(t) {
            return ((this.red = t), this);
          }
          clone() {
            return new BN().inject(this);
          }
          inject(t) {
            return (super.inject(t), (this.red = t.red), this);
          }
          set(t, e) {
            return this.fromNumber(t, e);
          }
          swap(t) {
            return (
              super.swap(t),
              ([this.red, t.red] = [t.red, this.red]),
              this
            );
          }
          reverse() {
            const t = this.negative;
            return (
              this.fromBuffer(this.toBuffer("le"), "be"),
              (this.negative = t),
              this
            );
          }
          word(t) {
            return (
              c(t >>> 0 === t, "pos", "uint32"),
              0 === t ? this.andln(-1) : this.ushrn(26 * t).andln(-1)
            );
          }
          [s]() {
            let t = "BN";
            return (this.red && (t = "BN-R"), `<${t}: ${this.toString(10)}>`);
          }
          csign() {
            return this.sign();
          }
          czero() {
            const t = this.sign(),
              e = 1 & ((t >> 31) | (-t >> 31));
            return 1 - e;
          }
          cneg() {
            return 0 | this.isNeg();
          }
          cpos() {
            return 0 | this.isPos();
          }
          ceq(t) {
            return this.xor(t).czero();
          }
          ceqn(t) {
            const e = (t >> 31) | 1,
              r = (((0 | t) * e) & 67108863) * e;
            return this.xorn(r).czero();
          }
          cswap(t, e) {
            c(BN.isBN(t), "num", "bignum");
            const r = 1 & ((e >> 31) | (-e >> 31)),
              i = this.muln(1 ^ r).iadd(t.muln(r)),
              s = t.muln(1 ^ r).iadd(this.muln(r));
            return (this.inject(i), t.inject(s), this);
          }
          cinject(t, e) {
            c(BN.isBN(t), "num", "bignum");
            const r = 1 & ((e >> 31) | (-e >> 31)),
              i = t.muln(r);
            return (this.imuln(1 ^ r).iadd(i), this);
          }
          cset(t, e) {
            const r = 1 & ((e >> 31) | (-e >> 31)),
              i = (t >> 31) | 1,
              s = (((0 | t) * i) & 67108863) * i;
            return (this.imuln(1 ^ r).iaddn(s * r), this);
          }
          valueOf() {
            return this.toDouble();
          }
          toBigInt() {
            const t = super.toString(16);
            let e = BigInt("0x" + t);
            return (this.isNeg() && (e = -e), e);
          }
          toString(t, e) {
            let r = super.toString(m(t));
            (null == e && (e = 0),
              0 === e && (e = 1),
              c(e >>> 0 === e, "padding", "uint32"));
            while (r.length % e) r = "0" + r;
            return (this.isNeg() && (r = "-" + r), r);
          }
          toJSON() {
            return this.toString(16, 2);
          }
          toArray(t, e) {
            const r = this.toBuffer(t, e);
            return Array.from ? Array.from(r) : Array.prototype.slice.call(r);
          }
          toBuffer(t, e) {
            return (
              null == t && (t = "be"),
              null == e && (e = 0),
              super.toBuffer(t, e)
            );
          }
          toArrayLike(t, e, r) {
            if (t === i) return this.toBuffer(e, r);
            if (t === Array) return this.toArray(e, r);
            if (
              t === Int8Array ||
              t === Uint8Array ||
              t === Uint8ClampedArray
            ) {
              const i = this.toBuffer(e, r);
              return new t(i.buffer, i.byteOffset, i.byteLength);
            }
            c("function" === typeof t, "ArrayType", "function");
            const s = this.toBuffer(e, r),
              n = p(t, s.length);
            for (let i = 0; i < s.length; i++) n[i] = s[i];
            return n;
          }
          encode(t, e) {
            return this.toBuffer(t, e);
          }
          of(t, e) {
            return this.fromNumber(t, e);
          }
          fromNumber(t, e) {
            return (
              null == e && (e = "be"),
              c("be" === e || "le" === e, "endian", "endianness"),
              super.fromNumber(t),
              "le" === e && this.reverse(),
              this
            );
          }
          fromDouble(t, e) {
            return (
              null == e && (e = "be"),
              c("number" === typeof t, "num", "double"),
              c("be" === e || "le" === e, "endian", "endianness"),
              isFinite(t) || (t = 0),
              super.fromDouble(t),
              "le" === e && this.reverse(),
              this
            );
          }
          fromBigInt(t, e) {
            return (
              c("bigint" === typeof t, "num", "bigint"),
              this.fromString(t.toString(16), 16, e)
            );
          }
          fromString(t, e, r) {
            return (
              ("le" !== e && "be" !== e) || ([e, r] = [r, e]),
              null == r && (r = "be"),
              super.fromString(t, m(e)),
              "le" === r && this.reverse(),
              this
            );
          }
          fromJSON(t) {
            return this.fromString(t, 16);
          }
          fromBN(t) {
            return this.inject(t);
          }
          fromArray(t, e) {
            return (
              c(Array.isArray(t), "data", "array"),
              this.fromBuffer(i.from(t), e)
            );
          }
          fromBuffer(t, e) {
            return (null == e && (e = "be"), super.fromBuffer(t, e));
          }
          fromArrayLike(t, e) {
            if (i.isBuffer(t)) return this.fromBuffer(t, e);
            if (Array.isArray(t)) return this.fromArray(t, e);
            if (
              t instanceof Int8Array ||
              t instanceof Uint8Array ||
              t instanceof Uint8ClampedArray
            ) {
              const r = i.from(t.buffer, t.byteOffset, t.byteLength);
              return this.fromBuffer(r, e);
            }
            return this.fromBuffer(i.from(t), e);
          }
          decode(t, e) {
            return this.fromBuffer(t, e);
          }
          from(t, e, r) {
            if (null == t) return this;
            if (
              (("le" !== e && "be" !== e) || ([e, r] = [r, e]),
              "number" === typeof t)
            )
              return this.fromNumber(t, r);
            if ("bigint" === typeof t) return this.fromBigInt(t, r);
            if ("string" === typeof t) return this.fromString(t, e, r);
            if ("object" === typeof t) {
              if (BN.isBN(t)) return this.fromBN(t, r);
              if (i.isBuffer(t)) return this.fromBuffer(t, r);
              if ("number" === typeof t.length) return this.fromArrayLike(t, r);
            }
            if ("boolean" === typeof t) return this.fromBool(t);
            throw new TypeError("Non-numeric object passed to BN.");
          }
          static min(t, e) {
            return (c(BN.isBN(t), "a", "bignum"), t.cmp(e) < 0 ? t : e);
          }
          static max(t, e) {
            return (c(BN.isBN(t), "a", "bignum"), t.cmp(e) > 0 ? t : e);
          }
          static cmp(t, e) {
            return (c(BN.isBN(t), "a", "bignum"), t.cmp(e));
          }
          static ucmp(t, e) {
            return (c(BN.isBN(t), "a", "bignum"), t.ucmp(e));
          }
          static red(t) {
            return new Red(t);
          }
          static mont(t) {
            return new Red(t);
          }
          static _prime(t) {
            if (o[t]) return o[t];
            let e;
            if ("p192" === t) e = new P192();
            else if ("p224" === t) e = new P224();
            else if ("p521" === t) e = new P521();
            else if ("k256" === t) e = new K256();
            else if ("p25519" === t) e = new P25519();
            else {
              if ("p448" !== t) throw new Error("Unknown prime " + t);
              e = new P448();
            }
            return ((o[t] = e), e);
          }
          static pow(t, e) {
            return 2 === t ? BN.shift(1, e) : new BN().fromNumber(t).ipown(e);
          }
          static shift(t, e) {
            return new BN().fromNumber(t).ishln(e);
          }
          static mask(t) {
            return BN.shift(1, t).isubn(1);
          }
          static randomBits(t, e) {
            return super.randomBits(t, new BN(), e);
          }
          static random(t, e, r) {
            const i = new BN(),
              s = BN.cast(e, 16),
              n = BN.cast(r, 16);
            return super.random(t, i, s, n);
          }
          static of(t, e) {
            return new BN().of(t, e);
          }
          static fromNumber(t, e) {
            return new BN().fromNumber(t, e);
          }
          static fromDouble(t, e) {
            return new BN().fromDouble(t, e);
          }
          static fromBigInt(t, e) {
            return new BN().fromBigInt(t, e);
          }
          static fromBool(t) {
            return new BN().fromBool(t);
          }
          static fromString(t, e, r) {
            return new BN().fromString(t, e, r);
          }
          static fromJSON(t) {
            return new BN().fromJSON(t);
          }
          static fromBN(t) {
            return new BN().fromBN(t);
          }
          static fromArray(t, e) {
            return new BN().fromArray(t, e);
          }
          static fromBuffer(t, e) {
            return new BN().fromBuffer(t, e);
          }
          static fromArrayLike(t, e) {
            return new BN().fromArrayLike(t, e);
          }
          static decode(t, e) {
            return new BN().decode(t, e);
          }
          static from(t, e, r) {
            return new BN().from(t, e, r);
          }
          static cast(t, e, r) {
            return BN.isBN(t) ? t : new BN(t, e, r);
          }
          static isBN(t) {
            return t instanceof BN;
          }
        }
        ((BN.BN = BN), (BN.wordSize = 26), (BN.native = 2));
        class Prime {
          constructor(t, e) {
            ((this.name = t), (this.p = new BN(e, 16)));
          }
        }
        class P192 extends Prime {
          constructor() {
            super(
              "p192",
              "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff",
            );
          }
        }
        class P224 extends Prime {
          constructor() {
            super(
              "p224",
              "ffffffff ffffffff ffffffff ffffffff00000000 00000000 00000001",
            );
          }
        }
        class P521 extends Prime {
          constructor() {
            super(
              "p521",
              "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff",
            );
          }
        }
        class K256 extends Prime {
          constructor() {
            super(
              "k256",
              "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe fffffc2f",
            );
          }
        }
        class P25519 extends Prime {
          constructor() {
            super(
              "p25519",
              "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed",
            );
          }
        }
        class P448 extends Prime {
          constructor() {
            super(
              "p448",
              "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff",
            );
          }
        }
        class Red {
          constructor(t) {
            let e = null;
            ("string" === typeof t && ((e = BN._prime(t)), (t = e.p)),
              c(BN.isBN(t), "m", "bignum"),
              f(!t.red, "reduction"),
              h(t.sign() > 0, "reduction"),
              (this.m = t),
              (this.prime = e),
              (this.smi = t.bitLength() <= 26 ? t.andln(-1) : 0));
          }
          _verify1(t) {
            (h(0 === t.negative, "red"), u(null != t.red, "red"));
          }
          _verify2(t, e) {
            (h(0 === (t.negative | e.negative), "red"),
              u(null != t.red && t.red === e.red, "red"));
          }
          convertTo(t) {
            const e = t.mod(this.m);
            return ((e.red = this), e);
          }
          convertFrom(t) {
            const e = t.clone();
            return ((e.red = null), e);
          }
          iadd(t, e) {
            return (
              this._verify2(t, e),
              t.iadd(e),
              t.cmp(this.m) >= 0 && t.isub(this.m),
              t
            );
          }
          add(t, e) {
            return this.iadd(t.clone(), e);
          }
          iaddn(t, e) {
            return (
              this._verify1(t),
              e < 0
                ? this.isubn(t, -e)
                : (this.smi && (e %= this.smi),
                  t.iaddn(e),
                  t.cmp(this.m) >= 0 && t.isub(this.m),
                  t)
            );
          }
          addn(t, e) {
            return this.iaddn(t.clone(), e);
          }
          isub(t, e) {
            return (
              this._verify2(t, e),
              t.isub(e),
              t.isNeg() && t.iadd(this.m),
              t
            );
          }
          sub(t, e) {
            return this.isub(t.clone(), e);
          }
          isubn(t, e) {
            return (
              this._verify1(t),
              e < 0
                ? this.iaddn(t, -e)
                : (this.smi && (e %= this.smi),
                  t.isubn(e),
                  t.isNeg() && t.iadd(this.m),
                  t)
            );
          }
          subn(t, e) {
            return this.isubn(t.clone(), e);
          }
          imul(t, e) {
            return (this._verify2(t, e), t.imul(e).imod(this.m));
          }
          mul(t, e) {
            return (this._verify2(t, e), this.imul(t.clone(), e));
          }
          imuln(t, e) {
            return (this._verify1(t), t.imuln(e).imod(this.m));
          }
          muln(t, e) {
            return this.imuln(t.clone(), e);
          }
          isqr(t) {
            return (this._verify1(t), t.isqr().imod(this.m));
          }
          sqr(t) {
            return this.isqr(t.clone());
          }
          ishl(t, e) {
            return (this._verify1(t), t.iushl(e).imod(this.m));
          }
          shl(t, e) {
            return this.ishl(t.clone(), e);
          }
          ishln(t, e) {
            return (this._verify1(t), t.iushln(e).imod(this.m));
          }
          shln(t, e) {
            return this.ishln(t.clone(), e);
          }
          ineg(t) {
            return (
              this._verify1(t),
              t.isZero() || (t.isub(this.m), t.ineg()),
              t
            );
          }
          neg(t) {
            return this.ineg(t.clone());
          }
          cmp(t, e) {
            return (this._verify2(t, e), t.ucmp(e));
          }
          cmpn(t, e) {
            if ((this._verify1(t), this.smi))
              return ((e %= this.smi), e < 0 && (e += this.smi), t.ucmpn(e));
            if (e < 0) {
              this.m.iaddn(e);
              const r = t.ucmp(this.m);
              return (this.m.isubn(e), r);
            }
            return t.ucmpn(e);
          }
          isOdd(t) {
            return (this._verify1(t), t.isOdd());
          }
          isEven(t) {
            return (this._verify1(t), t.isEven());
          }
          isqrt(t) {
            return (this._verify1(t), t.isqrtm(this.m));
          }
          sqrt(t) {
            return this.isqrt(t.clone());
          }
          iinvert(t) {
            return (this._verify1(t), t.iinvert(this.m));
          }
          invert(t) {
            return this.iinvert(t.clone());
          }
          ifermat(t) {
            return (this._verify1(t), t.ifermat(this.m));
          }
          fermat(t) {
            return this.ifermat(t.clone());
          }
          legendre(t) {
            return (this._verify1(t), t.legendre(this.m));
          }
          jacobi(t) {
            return (this._verify1(t), t.jacobi(this.m));
          }
          kronecker(t) {
            return (this._verify1(t), t.kronecker(this.m));
          }
          ipow(t, e, r) {
            return (this._verify1(t), t.ipowm(e, this.m, !1, r));
          }
          pow(t, e, r) {
            return this.ipow(t.clone(), e, r);
          }
          ipown(t, e) {
            return (this._verify1(t), t.ipowmn(e, this.m, !1));
          }
          pown(t, e) {
            return this.ipown(t.clone(), e);
          }
          [s]() {
            return this.prime
              ? `<Red: ${this.prime.name}>`
              : `<Red: ${this.m.toString(10)}>`;
          }
        }
        function a(t, e, r) {
          const i = new t(e);
          return (t.captureStackTrace && t.captureStackTrace(i, r), i);
        }
        function c(t, e, r) {
          if (!t) {
            const t = `"${e}" must be a(n) ${r}.`;
            throw a(TypeError, t, c);
          }
        }
        function h(t, e) {
          if (!t) {
            const t = `"${e}" only works with positive numbers.`;
            throw a(RangeError, t, h);
          }
        }
        function u(t, e) {
          if (!t) {
            const t = `"${e}" only works with red numbers.`;
            throw a(TypeError, t, u);
          }
        }
        function f(t, e) {
          if (!t) {
            const t = `"${e}" only works with normal numbers.`;
            throw a(TypeError, t, f);
          }
        }
        function l(t) {
          return Number.isSafeInteger(t);
        }
        function d(t) {
          return l(t) && t >= -67108863 && t <= 67108863;
        }
        function p(t, e) {
          return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
        }
        function m(t) {
          if (null == t) return 10;
          if ("number" === typeof t) return t;
          switch (t) {
            case "bin":
              return 2;
            case "oct":
              return 8;
            case "dec":
              return 10;
            case "hex":
              return 16;
          }
          return 0;
        }
        t.exports = BN;
      }).call(this, "/", r(2).Buffer);
    },
    11060: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(3843);
        class Keccak224 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(224);
          }
          final() {
            return super.final(1, null);
          }
          static hash() {
            return new Keccak224();
          }
          static hmac() {
            return super.hmac(224, 1, null);
          }
          static digest(t) {
            return super.digest(t, 224, 1, null);
          }
          static root(t, e) {
            return super.root(t, e, 224, 1, null);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 224, 1, null);
          }
          static mac(t, e) {
            return super.mac(t, e, 224, 1, null);
          }
        }
        ((Keccak224.native = i.native),
          (Keccak224.id = "KECCAK224"),
          (Keccak224.size = 28),
          (Keccak224.bits = 224),
          (Keccak224.blockSize = 144),
          (Keccak224.zero = e.alloc(28, 0)),
          (Keccak224.ctx = new Keccak224()),
          (t.exports = Keccak224));
      }).call(this, r(2).Buffer);
    },
    11061: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(3843);
        class Keccak256 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(256);
          }
          final() {
            return super.final(1, null);
          }
          static hash() {
            return new Keccak256();
          }
          static hmac() {
            return super.hmac(256, 1, null);
          }
          static digest(t) {
            return super.digest(t, 256, 1, null);
          }
          static root(t, e) {
            return super.root(t, e, 256, 1, null);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 256, 1, null);
          }
          static mac(t, e) {
            return super.mac(t, e, 256, 1, null);
          }
        }
        ((Keccak256.native = i.native),
          (Keccak256.id = "KECCAK256"),
          (Keccak256.size = 32),
          (Keccak256.bits = 256),
          (Keccak256.blockSize = 136),
          (Keccak256.zero = e.alloc(32, 0)),
          (Keccak256.ctx = new Keccak256()),
          (t.exports = Keccak256));
      }).call(this, r(2).Buffer);
    },
    11062: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(3843);
        class Keccak384 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(384);
          }
          final() {
            return super.final(1, null);
          }
          static hash() {
            return new Keccak384();
          }
          static hmac() {
            return super.hmac(384, 1, null);
          }
          static digest(t) {
            return super.digest(t, 384, 1, null);
          }
          static root(t, e) {
            return super.root(t, e, 384, 1, null);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 384, 1, null);
          }
          static mac(t, e) {
            return super.mac(t, e, 384, 1, null);
          }
        }
        ((Keccak384.native = i.native),
          (Keccak384.id = "KECCAK384"),
          (Keccak384.size = 48),
          (Keccak384.bits = 384),
          (Keccak384.blockSize = 104),
          (Keccak384.zero = e.alloc(48, 0)),
          (Keccak384.ctx = new Keccak384()),
          (t.exports = Keccak384));
      }).call(this, r(2).Buffer);
    },
    11063: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(3843);
        class Keccak512 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(512);
          }
          final() {
            return super.final(1, null);
          }
          static hash() {
            return new Keccak512();
          }
          static hmac() {
            return super.hmac(512, 1, null);
          }
          static digest(t) {
            return super.digest(t, 512, 1, null);
          }
          static root(t, e) {
            return super.root(t, e, 512, 1, null);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 512, 1, null);
          }
          static mac(t, e) {
            return super.mac(t, e, 512, 1, null);
          }
        }
        ((Keccak512.native = i.native),
          (Keccak512.id = "KECCAK512"),
          (Keccak512.size = 32),
          (Keccak512.bits = 512),
          (Keccak512.blockSize = 72),
          (Keccak512.zero = e.alloc(32, 0)),
          (Keccak512.ctx = new Keccak512()),
          (t.exports = Keccak512));
      }).call(this, r(2).Buffer);
    },
    11064: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(5669);
        class KMAC128 extends i {
          constructor() {
            super();
          }
          init(t, e) {
            return super.init(128, t, e);
          }
          static hash() {
            return new KMAC128();
          }
          static hmac(t, e, r) {
            return super.hmac(128, t, e, r);
          }
          static digest(t, e, r, i) {
            return super.digest(t, 128, e, r, i);
          }
          static root(t, e, r, i, s) {
            return super.root(t, e, 128, r, i, s);
          }
          static multi(t, e, r, i, s, n) {
            return super.multi(t, e, r, 128, i, s, n);
          }
          static mac(t, e, r, i, s) {
            return super.mac(t, e, 128, r, i, s);
          }
        }
        ((KMAC128.native = i.native),
          (KMAC128.id = "KMAC128"),
          (KMAC128.size = 16),
          (KMAC128.bits = 128),
          (KMAC128.blockSize = 168),
          (KMAC128.zero = e.alloc(16, 0)),
          (KMAC128.ctx = new KMAC128()),
          (t.exports = KMAC128));
      }).call(this, r(2).Buffer);
    },
    11065: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(5669);
        class KMAC256 extends i {
          constructor() {
            super();
          }
          init(t, e) {
            return super.init(256, t, e);
          }
          static hash() {
            return new KMAC256();
          }
          static hmac(t, e, r) {
            return super.hmac(256, t, e, r);
          }
          static digest(t, e, r, i) {
            return super.digest(t, 256, e, r, i);
          }
          static root(t, e, r, i, s) {
            return super.root(t, e, 256, r, i, s);
          }
          static multi(t, e, r, i, s, n) {
            return super.multi(t, e, r, 256, i, s, n);
          }
          static mac(t, e, r, i, s) {
            return super.mac(t, e, 256, r, i, s);
          }
        }
        ((KMAC256.native = i.native),
          (KMAC256.id = "KMAC256"),
          (KMAC256.size = 32),
          (KMAC256.bits = 256),
          (KMAC256.blockSize = 136),
          (KMAC256.zero = e.alloc(32, 0)),
          (KMAC256.ctx = new KMAC256()),
          (t.exports = KMAC256));
      }).call(this, r(2).Buffer);
    },
    11066: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(3012),
          n = -1,
          o = new Uint8Array([
            41, 46, 67, 201, 162, 216, 124, 1, 61, 54, 84, 161, 236, 240, 6, 19,
            98, 167, 5, 243, 192, 199, 115, 140, 152, 147, 43, 217, 188, 76,
            130, 202, 30, 155, 87, 60, 253, 212, 224, 22, 103, 66, 111, 24, 138,
            23, 229, 18, 190, 78, 196, 214, 218, 158, 222, 73, 160, 251, 245,
            142, 187, 47, 238, 122, 169, 104, 121, 145, 21, 178, 7, 63, 148,
            194, 16, 137, 11, 34, 95, 33, 128, 127, 93, 154, 90, 144, 50, 39,
            53, 62, 204, 231, 191, 247, 151, 3, 255, 25, 48, 179, 72, 165, 181,
            209, 215, 94, 146, 42, 172, 86, 170, 198, 79, 184, 56, 210, 150,
            164, 125, 182, 118, 252, 107, 226, 156, 116, 4, 241, 69, 157, 112,
            89, 100, 113, 135, 32, 134, 91, 207, 101, 230, 45, 168, 2, 27, 96,
            37, 173, 174, 176, 185, 246, 28, 70, 97, 105, 52, 64, 126, 15, 85,
            71, 163, 35, 221, 81, 175, 58, 195, 92, 249, 206, 186, 197, 234, 38,
            44, 83, 13, 110, 133, 40, 132, 9, 211, 223, 205, 244, 65, 129, 77,
            82, 106, 220, 55, 200, 108, 193, 171, 250, 36, 225, 123, 8, 12, 189,
            177, 74, 120, 136, 149, 139, 227, 99, 232, 109, 233, 203, 213, 254,
            59, 0, 29, 57, 242, 239, 183, 14, 102, 88, 208, 228, 166, 119, 114,
            248, 235, 117, 75, 10, 49, 68, 80, 180, 143, 237, 31, 26, 219, 153,
            141, 51, 159, 17, 131, 20,
          ]);
        class MD2 {
          constructor() {
            ((this.state = e.allocUnsafe(48)),
              (this.checksum = e.allocUnsafe(16)),
              (this.block = e.allocUnsafe(16)),
              (this.size = n));
          }
          init() {
            return (
              this.state.fill(0),
              this.checksum.fill(0),
              (this.size = 0),
              this
            );
          }
          update(t) {
            return (i(e.isBuffer(t)), this._update(t, t.length), this);
          }
          final() {
            return this._final(e.allocUnsafe(16));
          }
          _update(t, e) {
            i(this.size !== n, "Context already finalized.");
            let r = 15 & this.size,
              s = 0;
            if (((this.size += e), r > 0)) {
              let i = 16 - r;
              if (
                (i > e && (i = e),
                t.copy(this.block, r, s, s + i),
                (r += i),
                (e -= i),
                (s += i),
                r < 16)
              )
                return;
              this.transform(this.block, 0);
            }
            while (e >= 16) (this.transform(t, s), (s += 16), (e -= 16));
            e > 0 && t.copy(this.block, 0, s, s + e);
          }
          _final(t) {
            i(this.size !== n, "Context already finalized.");
            const r = 15 & this.size,
              s = 16 - r,
              o = e.allocUnsafe(s);
            for (let e = 0; e < o.length; e++) o[e] = s;
            return (
              this._update(o, s),
              this._update(this.checksum, 16),
              this.state.copy(t, 0, 0, 16),
              this.state.fill(0),
              this.checksum.fill(0),
              this.block.fill(0),
              (this.size = n),
              t
            );
          }
          transform(t, e) {
            for (let s = 0; s < 16; s++)
              ((this.state[16 + s] = t[e + s]),
                (this.state[32 + s] = this.state[16 + s] ^ this.state[s]));
            let r = 0;
            for (let s = 0; s < 18; s++) {
              for (let t = 0; t < 48; t++)
                ((this.state[t] ^= o[r]), (r = this.state[t]));
              r = (r + s) & 255;
            }
            let i = this.checksum[15];
            for (let s = 0; s < 16; s++)
              ((this.checksum[s] ^= o[t[e + s] ^ i]), (i = this.checksum[s]));
          }
          static hash() {
            return new MD2();
          }
          static hmac() {
            return new s(MD2, 16);
          }
          static digest(t) {
            return MD2.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 16 === t.length),
              i(e.isBuffer(r) && 16 === r.length),
              MD2.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = MD2.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return MD2.hmac().init(e).update(t).final();
          }
        }
        ((MD2.native = 0),
          (MD2.id = "MD2"),
          (MD2.size = 16),
          (MD2.bits = 128),
          (MD2.blockSize = 16),
          (MD2.zero = e.alloc(16, 0)),
          (MD2.ctx = new MD2()),
          (t.exports = MD2));
      }).call(this, r(2).Buffer);
    },
    11067: function (t, e, r) {
      "use strict";
      t.exports = r(11068);
    },
    11069: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(4853),
          n = r(5670),
          o = r(3012);
        class MD5SHA1 {
          constructor() {
            ((this.md5 = new s()), (this.sha1 = new n()));
          }
          init() {
            return (this.md5.init(), this.sha1.init(), this);
          }
          update(t) {
            return (this.md5.update(t), this.sha1.update(t), this);
          }
          final() {
            const t = e.allocUnsafe(36);
            return (
              this.md5.final().copy(t, 0),
              this.sha1.final().copy(t, 16),
              t
            );
          }
          static hash() {
            return new MD5SHA1();
          }
          static hmac() {
            return new o(MD5SHA1, 64);
          }
          static digest(t) {
            return MD5SHA1.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 36 === t.length),
              i(e.isBuffer(r) && 36 === r.length),
              MD5SHA1.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = MD5SHA1.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return MD5SHA1.hmac().init(e).update(t).final();
          }
        }
        ((MD5SHA1.native = s.native),
          (MD5SHA1.id = "MD5SHA1"),
          (MD5SHA1.size = 36),
          (MD5SHA1.bits = 288),
          (MD5SHA1.blockSize = 64),
          (MD5SHA1.zero = e.alloc(36, 0)),
          (MD5SHA1.ctx = new MD5SHA1()),
          (t.exports = MD5SHA1));
      }).call(this, r(2).Buffer);
    },
    11070: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(3012),
          n = -1,
          o = e.alloc(8, 0),
          a = e.alloc(64, 0);
        a[0] = 128;
        const c = new Uint32Array([
          1518500249, 1859775393, 2400959708, 3395469782,
        ]);
        class SHA1 {
          constructor() {
            ((this.state = new Uint32Array(5)),
              (this.msg = new Uint32Array(80)),
              (this.block = e.allocUnsafe(64)),
              (this.size = n));
          }
          init() {
            return (
              (this.state[0] = 1732584193),
              (this.state[1] = 4023233417),
              (this.state[2] = 2562383102),
              (this.state[3] = 271733878),
              (this.state[4] = 3285377520),
              (this.size = 0),
              this
            );
          }
          update(t) {
            return (i(e.isBuffer(t)), this._update(t, t.length), this);
          }
          final() {
            return this._final(e.allocUnsafe(20));
          }
          _update(t, e) {
            i(this.size !== n, "Context already finalized.");
            let r = 63 & this.size,
              s = 0;
            if (((this.size += e), r > 0)) {
              let i = 64 - r;
              if (
                (i > e && (i = e),
                t.copy(this.block, r, s, s + i),
                (r += i),
                (e -= i),
                (s += i),
                r < 64)
              )
                return;
              this.transform(this.block, 0);
            }
            while (e >= 64) (this.transform(t, s), (s += 64), (e -= 64));
            e > 0 && t.copy(this.block, 0, s, s + e);
          }
          _final(t) {
            i(this.size !== n, "Context already finalized.");
            const e = this.size % 64,
              r = 8 * this.size;
            (m(o, r * (1 / 4294967296), 0),
              m(o, r, 4),
              this._update(a, 1 + ((119 - e) % 64)),
              this._update(o, 8));
            for (let i = 0; i < 5; i++)
              (m(t, this.state[i], 4 * i), (this.state[i] = 0));
            for (let i = 0; i < 80; i++) this.msg[i] = 0;
            for (let i = 0; i < 64; i++) this.block[i] = 0;
            return ((this.size = n), t);
          }
          transform(t, e) {
            const r = this.msg;
            let i = this.state[0],
              s = this.state[1],
              n = this.state[2],
              o = this.state[3],
              a = this.state[4],
              f = 0;
            for (; f < 16; f++) r[f] = p(t, e + 4 * f);
            for (; f < 80; f++)
              r[f] = h(r[f - 3] ^ r[f - 8] ^ r[f - 14] ^ r[f - 16], 1);
            for (f = 0; f < 80; f++) {
              const t = (f / 20) | 0;
              let e = h(i, 5);
              ((e += u(t, s, n, o)),
                (e += a),
                (e += r[f]),
                (e += c[t]),
                (a = o),
                (o = n),
                (n = h(s, 30)),
                (s = i),
                (i = e >>> 0));
            }
            ((this.state[0] += i),
              (this.state[1] += s),
              (this.state[2] += n),
              (this.state[3] += o),
              (this.state[4] += a));
          }
          static hash() {
            return new SHA1();
          }
          static hmac() {
            return new s(SHA1, 64);
          }
          static digest(t) {
            return SHA1.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 20 === t.length),
              i(e.isBuffer(r) && 20 === r.length),
              SHA1.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = SHA1.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return SHA1.hmac().init(e).update(t).final();
          }
        }
        function h(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function u(t, e, r, i) {
          return 0 === t
            ? f(e, r, i)
            : 1 === t || 3 === t
              ? d(e, r, i)
              : 2 === t
                ? l(e, r, i)
                : 0;
        }
        function f(t, e, r) {
          return (t & e) ^ (~t & r);
        }
        function l(t, e, r) {
          return (t & e) ^ (t & r) ^ (e & r);
        }
        function d(t, e, r) {
          return t ^ e ^ r;
        }
        function p(t, e) {
          return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e];
        }
        function m(t, e, r) {
          return (
            (t[r++] = e >>> 24),
            (t[r++] = e >>> 16),
            (t[r++] = e >>> 8),
            (t[r++] = e),
            r
          );
        }
        ((SHA1.native = 0),
          (SHA1.id = "SHA1"),
          (SHA1.size = 20),
          (SHA1.bits = 160),
          (SHA1.blockSize = 64),
          (SHA1.zero = e.alloc(20, 0)),
          (SHA1.ctx = new SHA1()),
          (t.exports = SHA1));
      }).call(this, r(2).Buffer);
    },
    11071: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769);
        function s(t, e) {
          (i(t && "function" === typeof t.root), i(Array.isArray(e)));
          const r = new Array(e.length);
          for (let i = 0; i < e.length; i++) r[i] = e[i];
          let s = r.length,
            n = !1,
            o = 0;
          if (0 === s) return (r.push(t.zero), [r, n]);
          while (s > 1) {
            for (let e = 0; e < s; e += 2) {
              const i = Math.min(e + 1, s - 1),
                a = r[o + e],
                c = r[o + i];
              i === e + 1 && i + 1 === s && a.equals(c) && (n = !0);
              const h = t.root(a, c);
              r.push(h);
            }
            ((o += s), (s = (s + 1) >>> 1));
          }
          return [r, n];
        }
        function n(t, e) {
          (i(t && "function" === typeof t.root), i(Array.isArray(e)));
          const [r, n] = s(t, e),
            o = r[r.length - 1];
          return [o, n];
        }
        function o(t, e, r) {
          (i(t && "function" === typeof t.root),
            i(e >>> 0 === e),
            i(Array.isArray(r)),
            i(e < r.length));
          let n = r.length;
          const [o] = s(t, r),
            a = [];
          let c = 0;
          while (n > 1) {
            const t = Math.min(1 ^ e, n - 1);
            (a.push(o[c + t]), (e >>>= 1), (c += n), (n = (n + 1) >>> 1));
          }
          return a;
        }
        function a(e, r, s, n) {
          (i(e && "function" === typeof e.root),
            i(t.isBuffer(r)),
            i(Array.isArray(s)),
            i(n >>> 0 === n));
          let o = r;
          for (const t of s) {
            if (1 & n && t.equals(o)) return e.zero;
            ((o = 1 & n ? e.root(t, o) : e.root(o, t)), (n >>>= 1));
          }
          return o;
        }
        ((e.createTree = s),
          (e.createRoot = n),
          (e.createBranch = o),
          (e.deriveRoot = a));
      }).call(this, r(2).Buffer);
    },
    11072: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          s = t.alloc(0),
          n = t.from([1]),
          o = t.from([0]);
        function a(t, e) {
          (i(t && "function" === typeof t.multi), i(Array.isArray(e)));
          const r = [],
            s = f(t);
          for (const i of e) {
            const e = l(t, i);
            r.push(e);
          }
          let n = r.length,
            o = 0;
          if (0 === n) return (r.push(s), r);
          while (n > 1) {
            for (let e = 0; e < n; e += 2) {
              const i = e,
                a = e + 1,
                c = r[o + i];
              let h;
              h = a < n ? r[o + a] : s;
              const u = d(t, c, h);
              r.push(u);
            }
            ((o += n), (n = (n + 1) >>> 1));
          }
          return r;
        }
        function c(t, e) {
          const r = a(t, e),
            i = r[r.length - 1];
          return i;
        }
        function h(t, e, r) {
          i(e >>> 0 === e);
          const s = a(t, r),
            n = f(t),
            o = [];
          let c = r.length,
            h = 0;
          i(e < r.length);
          while (c > 1) {
            const t = 1 ^ e;
            (t < c ? o.push(s[h + t]) : o.push(n),
              (e >>>= 1),
              (h += c),
              (c = (c + 1) >>> 1));
          }
          return o;
        }
        function u(e, r, s, n) {
          (i(e && "function" === typeof e.multi),
            i(t.isBuffer(r)),
            i(Array.isArray(s)),
            i(n >>> 0 === n));
          let o = l(e, r);
          for (const t of s)
            ((o = 1 & n ? d(e, t, o) : d(e, o, t)), (n >>>= 1));
          return o;
        }
        function f(t) {
          return t.digest(s);
        }
        function l(t, e) {
          return t.multi(o, e);
        }
        function d(t, e, r) {
          return (i(null != r), t.multi(n, e, r));
        }
        ((e.createTree = a),
          (e.createRoot = c),
          (e.createBranch = h),
          (e.deriveRoot = u),
          (e.hashEmpty = f),
          (e.hashLeaf = l),
          (e.hashInternal = d));
      }).call(this, r(2).Buffer);
    },
    11073: function (t, e, r) {
      "use strict";
      t.exports = r(11074);
    },
    11075: function (t, e, r) {
      "use strict";
      t.exports = r(11076);
    },
    11077: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(3615),
          n = r(5662);
        class Schnorr {
          constructor(t, e) {
            ((this.curve = t),
              (this.hash = e),
              (this.msgSize = 32),
              (this.sigSize = this.curve.fieldSize + this.curve.scalarSize),
              (this.supported = this.support()),
              (this.rng = new RNG(this)));
          }
          support() {
            return (
              -1 === this.curve.one.redNeg().redJacobi() &&
              3 === this.curve.p.andln(3)
            );
          }
          check() {
            if (!this.supported)
              throw new Error(`Schnorr is not supported for ${this.curve.id}.`);
          }
          encode(t) {
            i(e.isBuffer(t));
            const { fieldSize: r } = this.curve;
            if (t.length === 1 + r) return t;
            if (t.length !== 1 + 2 * r) throw new Error("Invalid point.");
            const s = e.allocUnsafe(1 + r);
            return (
              (s[0] = 2 | (1 & t[t.length - 1])),
              t.copy(s, 1, 1, 1 + r),
              s
            );
          }
          hashInt(t, e, r) {
            const i = this.hash.multi(t, e, r),
              n = s.decode(i, this.curve.endian);
            return n.imod(this.curve.n);
          }
          sign(t, r) {
            (i(e.isBuffer(t)), i(t.length === this.msgSize), this.check());
            const s = this.curve.n,
              n = this.curve.g,
              o = this.curve.decodeScalar(r);
            if (o.isZero() || o.cmp(s) >= 0)
              throw new Error("Invalid private key.");
            const a = this.hashInt(r, t);
            if (a.isZero()) throw new Error("Signing failed (k' = 0).");
            const c = n.mulBlind(a),
              h = this.curve.encodeField(c.getX()),
              u = n.mulBlind(o).encode(),
              f = this.hashInt(h, u, t),
              [l, d] = this.curve.getBlinding();
            (o.imul(l).imod(s),
              a.imul(l).imod(s),
              a.cinject(a.neg().imod(s), c.y.redLegendre() >>> 31));
            const p = a.iadd(f.imul(o)).imod(s);
            return (
              p.imul(d).imod(s),
              e.concat([h, this.curve.encodeScalar(p)])
            );
          }
          verify(t, r, s) {
            if (
              (i(e.isBuffer(t)),
              i(e.isBuffer(r)),
              i(e.isBuffer(s)),
              this.check(),
              t.length !== this.msgSize)
            )
              return !1;
            if (r.length !== this.sigSize) return !1;
            try {
              return this._verify(t, r, s);
            } catch (n) {
              return !1;
            }
          }
          _verify(t, r, s) {
            (i(e.isBuffer(t)), i(e.isBuffer(r)), i(e.isBuffer(s)));
            const n = this.curve.p,
              o = this.curve.n,
              a = this.curve.g,
              c = r.slice(0, this.curve.fieldSize),
              h = r.slice(this.curve.fieldSize),
              u = this.curve.decodeField(c),
              f = this.curve.decodeScalar(h),
              l = this.curve.decodePoint(s);
            if (u.cmp(n) >= 0 || f.cmp(o) >= 0) return !1;
            const d = this.hashInt(c, this.encode(s), t),
              p = a.jmulAdd(f, l, d.ineg().imod(o));
            return !p.isInfinity() && !!p.hasQuadY() && !!p.eqX(u);
          }
          verifyBatch(t) {
            (i(Array.isArray(t)), this.check());
            for (const s of t) {
              i(Array.isArray(s) && 3 === s.length);
              const [t, r, n] = s;
              if (
                (i(e.isBuffer(t)),
                i(e.isBuffer(r)),
                i(e.isBuffer(n)),
                t.length !== this.msgSize)
              )
                return !1;
              if (r.length !== this.sigSize) return !1;
            }
            try {
              return this._verifyBatch(t);
            } catch (r) {
              return !1;
            }
          }
          _verifyBatch(t) {
            const e = this.curve.p,
              r = this.curve.n,
              i = this.curve.g,
              n = new Array(1 + 2 * t.length),
              o = new Array(1 + 2 * t.length),
              a = new s(0);
            (this.rng.init(t), (n[0] = i), (o[0] = a));
            for (let s = 0; s < t.length; s++) {
              const [i, c, h] = t[s],
                u = c.slice(0, this.curve.fieldSize),
                f = c.slice(this.curve.fieldSize),
                l = this.curve.decodeField(u),
                d = this.curve.decodeScalar(f),
                p = this.curve.decodePoint(h);
              if (l.cmp(e) >= 0 || d.cmp(r) >= 0) return !1;
              const m = this.hashInt(u, this.encode(h), i),
                S = this.curve.pointFromR(l),
                w = this.rng.generate(s),
                A = m.imul(w).imod(r);
              (a.iadd(d.imul(w)).imod(r),
                (n[1 + 2 * s + 0] = S),
                (o[1 + 2 * s + 0] = w),
                (n[1 + 2 * s + 1] = p),
                (o[1 + 2 * s + 1] = A));
            }
            return (a.ineg().imod(r), this.curve.jmulAll(n, o).isInfinity());
          }
        }
        class RNG {
          constructor(t) {
            ((this.curve = t.curve),
              (this.hash = t.hash),
              (this.encode = t.encode.bind(t)),
              (this.chacha = new n()),
              (this.key = e.alloc(32, 0)),
              (this.iv = e.alloc(8, 0)),
              (this.cache = [new s(1), new s(1)]));
          }
          init(t) {
            i(Array.isArray(t));
            const e = new this.hash();
            e.init();
            for (const [i, s, n] of t)
              (e.update(s), e.update(i), e.update(this.encode(n)));
            let r = e.final();
            return (
              r.length > 32 && (r = r.slice(0, 32)),
              i(32 === r.length),
              (this.key = r),
              (this.cache[0] = new s(1)),
              (this.cache[1] = new s(1)),
              this
            );
          }
          encrypt(t) {
            i(t >>> 0 === t);
            const r = (2 * this.curve.scalarSize + 3) & -4,
              s = e.alloc(r, 0),
              n = s.slice(0, this.curve.scalarSize),
              o = s.slice(this.curve.scalarSize);
            (this.chacha.init(this.key, this.iv, t), this.chacha.encrypt(s));
            for (let e = 0; e < r; e += 4)
              (([s[e + 0], s[e + 3]] = [s[e + 3], s[e + 0]]),
                ([s[e + 1], s[e + 2]] = [s[e + 2], s[e + 1]]));
            return [this.curve.decodeScalar(n), this.curve.decodeScalar(o)];
          }
          refresh(t) {
            let e = 0;
            for (;;) {
              ((this.iv[4] = e),
                (this.iv[5] = e >>> 8),
                (this.iv[6] = e >>> 16),
                (this.iv[7] = e >>> 24),
                (e += 1));
              const [r, i] = this.encrypt(t);
              if (
                !(r.isZero() || r.cmp(this.curve.n) >= 0) &&
                !(i.isZero() || i.cmp(this.curve.n) >= 0)
              ) {
                ((this.cache[0] = r), (this.cache[1] = i));
                break;
              }
            }
          }
          generate(t) {
            return (
              i(t >>> 0 === t),
              1 & t && this.refresh(t >>> 1),
              this.cache[1 & t]
            );
          }
        }
        t.exports = Schnorr;
      }).call(this, r(2).Buffer);
    },
    11078: function (t, e, r) {
      "use strict";
      t.exports = r(11079);
    },
    11082: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(6817),
          n = r(3012);
        class SHA384 extends s {
          constructor() {
            super();
          }
          init() {
            return (
              (this.state[0] = 3418070365),
              (this.state[1] = 3238371032),
              (this.state[2] = 1654270250),
              (this.state[3] = 914150663),
              (this.state[4] = 2438529370),
              (this.state[5] = 812702999),
              (this.state[6] = 355462360),
              (this.state[7] = 4144912697),
              (this.state[8] = 1731405415),
              (this.state[9] = 4290775857),
              (this.state[10] = 2394180231),
              (this.state[11] = 1750603025),
              (this.state[12] = 3675008525),
              (this.state[13] = 1694076839),
              (this.state[14] = 1203062813),
              (this.state[15] = 3204075428),
              (this.size = 0),
              this
            );
          }
          final() {
            return super.final().slice(0, 48);
          }
          static hash() {
            return new SHA384();
          }
          static hmac() {
            return new n(SHA384, 128);
          }
          static digest(t) {
            return SHA384.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 48 === t.length),
              i(e.isBuffer(r) && 48 === r.length),
              SHA384.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = SHA384.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return SHA384.hmac().init(e).update(t).final();
          }
        }
        ((SHA384.native = 0),
          (SHA384.id = "SHA384"),
          (SHA384.size = 48),
          (SHA384.bits = 384),
          (SHA384.blockSize = 128),
          (SHA384.zero = e.alloc(48, 0)),
          (SHA384.ctx = new SHA384()),
          (t.exports = SHA384));
      }).call(this, r(2).Buffer);
    },
    11085: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          s = r(5661),
          { PEMBlock: n } = r(3356),
          { countLeft: o } = r(3230),
          a = r(4579),
          c = r(4853),
          h = r(5670),
          u = r(6844),
          f = r(6845),
          l = r(3616),
          d = r(5671),
          p = r(4574),
          m = {
            NONE: 0,
            PUBKEY_ENC: 1,
            SIGNATURE: 2,
            SYMKEY_ENC: 3,
            ONEPASS_SIG: 4,
            PRIVATE_KEY: 5,
            PUBLIC_KEY: 6,
            PRIVATE_SUBKEY: 7,
            COMPRESSED: 8,
            ENCRYPTED: 9,
            MARKER: 10,
            PLAINTEXT: 11,
            RING_TRUST: 12,
            USER_ID: 13,
            PUBLIC_SUBKEY: 14,
            OLD_COMMENT: 16,
            ATTRIBUTE: 17,
            ENCRYPTED_MDC: 18,
            MDC: 19,
            ENCRYPTED_AEAD: 20,
          },
          S = {
            0: "NONE",
            1: "PUBKEY_ENC",
            2: "SIGNATURE",
            3: "SYMKEY_ENC",
            4: "ONEPASS_SIG",
            5: "PRIVATE_KEY",
            6: "PUBLIC_KEY",
            7: "PRIVATE_SUBKEY",
            8: "COMPRESSED",
            9: "ENCRYPTED",
            10: "MARKER",
            11: "PLAINTEXT",
            12: "RING_TRUST",
            13: "USER_ID",
            14: "PUBLIC_SUBKEY",
            16: "OLD_COMMENT",
            17: "ATTRIBUTE",
            18: "ENCRYPTED_MDC",
            19: "MDC",
            20: "ENCRYPTED_AEAD",
          },
          w = {
            BINARY: 0,
            TEXT: 1,
            GENERIC_CERT: 16,
            PERSONA_CERT: 17,
            CASUAL_CERT: 18,
            POSITIVE_CERT: 19,
            SUBKEY_BINDING: 24,
            PRIMARY_KEY_BINDING: 25,
            DIRECT_SIGNATURE: 31,
            KEY_REVOCATION: 32,
            SUBKEY_REVOCATION: 40,
          },
          A = {
            0: "BINARY",
            1: "TEXT",
            16: "GENERIC_CERT",
            17: "PERSONA_CERT",
            18: "CASUAL_CERT",
            19: "POSITIVE_CERT",
            24: "SUBKEY_BINDING",
            25: "PRIMARY_KEY_BINDING",
            31: "DIRECT_SIGNATURE",
            32: "KEY_REVOCATION",
            40: "SUBKEY_REVOCATION",
          },
          y = {
            RSA: 1,
            RSA_ENCRYPT_ONLY: 2,
            RSA_SIGN_ONLY: 3,
            ELGAMAL: 16,
            DSA: 17,
            ECDH: 18,
            ECDSA: 19,
            ELGAMAL_LEGACY: 20,
            EDDSA: 22,
          },
          g = {
            1: "RSA",
            2: "RSA_ENCRYPT_ONLY",
            3: "RSA_SIGN_ONLY",
            16: "ELGAMAL",
            17: "DSA",
            18: "ECDH",
            19: "ECDSA",
            20: "ELGAMAL_LEGACY",
            22: "EDDSA",
          },
          E = {
            NONE: 0,
            IDEA: 1,
            DES3: 2,
            CAST5: 3,
            BLOWFISH: 4,
            AES128: 7,
            AES192: 8,
            AES256: 9,
            TWOFISH: 10,
            CAMELLIA128: 11,
            CAMELLIA192: 12,
            CAMELLIA256: 13,
          },
          b = {
            0: "NONE",
            1: "IDEA",
            2: "DES3",
            3: "CAST5",
            4: "BLOWFISH",
            7: "AES128",
            8: "AES192",
            9: "AES256",
            10: "TWOFISH",
            11: "CAMELLIA128",
            12: "CAMELLIA192",
            13: "CAMELLIA256",
          },
          k = {
            MD5: 1,
            SHA1: 2,
            RIPEMD160: 3,
            SHA256: 8,
            SHA384: 9,
            SHA512: 10,
            SHA224: 11,
          },
          P = {
            1: "MD5",
            2: "SHA1",
            3: "RIPEMD160",
            8: "SHA256",
            9: "SHA384",
            10: "SHA512",
            11: "SHA224",
          },
          B = { 1: c, 2: h, 3: u, 8: l, 9: d, 10: p, 11: f },
          v = { NONE: 0, ZIP: 1, ZLIB: 2, BZIP2: 3 },
          x = { 0: "NONE", 1: "ZIP", 2: "ZLIB", 3: "BZIP2" },
          N = {
            NONE: 0,
            P256: 1,
            P384: 2,
            P521: 3,
            SECP256K1: 4,
            X25519: 5,
            BRAINPOOLP256: 6,
            BRAINPOOLP384: 7,
            BRAINPOOLP512: 8,
            ED25519: 9,
          },
          I = {
            0: "NONE",
            1: "P256",
            2: "P384",
            3: "P521",
            4: "SECP256K1",
            5: "X25519",
            6: "BRAINPOOLP256",
            7: "BRAINPOOLP384",
            8: "BRAINPOOLP512",
            9: "ED25519",
          },
          U = {
            P256: t.from("2a8648ce3d030107", "hex"),
            P384: t.from("2b81040022", "hex"),
            P521: t.from("2b81040023", "hex"),
            SECP256K1: t.from("2b8104000a", "hex"),
            X25519: t.from("2b060104019755010501", "hex"),
            BRAINPOOLP256: t.from("2b2403030208010107", "hex"),
            BRAINPOOLP384: t.from("2b240303020801010b", "hex"),
            BRAINPOOLP512: t.from("2b240303020801010d", "hex"),
            ED25519: t.from("2b06010401da470f01", "hex"),
          },
          H = t.alloc(0),
          K = t.alloc(1);
        class PGPMessage extends s.Struct {
          constructor() {
            (super(), (this.packets = []));
          }
          getSize() {
            let t = 0;
            for (const e of this.packets) t += e.getSize();
            return t;
          }
          write(t) {
            for (const e of this.packets) e.write(t);
            return t;
          }
          read(t) {
            while (t.left()) {
              const e = PGPPacket.read(t);
              this.packets.push(e);
            }
            return this;
          }
          toString(t) {
            (void 0 === t && (t = "PGP MESSAGE"), i("string" === typeof t));
            const e = new n();
            return ((e.type = t), (e.data = this.encode()), e.toString(!0));
          }
          fromString(t) {
            const e = n.fromString(t, !0);
            if ("PGP " !== e.type.substring(0, 4))
              throw new Error("PEM type mismatch.");
            return this.decode(e.data);
          }
          format() {
            return { packets: this.packets };
          }
        }
        class PGPPacket extends s.Struct {
          constructor() {
            (super(), (this.type = 0), (this.body = new PGPUnknown()));
          }
          getSize() {
            const t = this.body.getSize();
            let e = 0;
            return (
              (e += 1),
              (e += t < 192 ? 1 : t < 8384 ? 2 : 5),
              (e += t),
              e
            );
          }
          write(t) {
            let e = this.body.getSize();
            return (
              t.writeU8(192 | this.type),
              e < 192
                ? t.writeU8(e)
                : e < 8384
                  ? ((e -= 192), t.writeU8(192 + (e >>> 8)), t.writeU8(255 & e))
                  : (t.writeU8(255), t.writeU32BE(e)),
              this.body.write(t),
              t
            );
          }
          read(t) {
            const e = t.readU8();
            if (0 === (128 & e))
              throw new Error("Hi bit unset in PGP packet header.");
            let r = 0,
              i = null;
            if (0 === (64 & e)) {
              const s = (63 & e) >>> 2,
                n = 1 << (3 & e);
              let o = 0;
              switch (n) {
                case 1:
                  o = t.readU8();
                  break;
                case 2:
                  o = t.readU16BE();
                  break;
                case 4:
                  o = t.readU32BE();
                  break;
                case 8:
                  o = t.left();
                  break;
              }
              ((r = s), (i = t.readChild(o)));
            } else {
              const s = 63 & e,
                n = t.readU8();
              let o = 0;
              if (n < 192) o = n;
              else if (n < 224)
                ((o = 256 * (n - 192)), (o += t.readU8() + 192));
              else {
                if (n < 255)
                  throw new Error("Cannot handle PGP partial length.");
                o = t.readU32BE();
              }
              ((r = s), (i = t.readChild(o)));
            }
            switch (((this.type = r), this.type)) {
              case m.PUBKEY_ENC:
                this.body = PGPUnknown.read(i);
                break;
              case m.SIGNATURE:
                this.body = PGPUnknown.read(i);
                break;
              case m.SYMKEY_ENC:
                this.body = PGPUnknown.read(i);
                break;
              case m.ONEPASS_SIG:
                this.body = PGPUnknown.read(i);
                break;
              case m.PRIVATE_KEY:
                this.body = PGPPrivateKey.read(i);
                break;
              case m.PUBLIC_KEY:
                this.body = PGPPublicKey.read(i);
                break;
              case m.PRIVATE_SUBKEY:
                this.body = PGPPrivateKey.read(i);
                break;
              case m.COMPRESSED:
                this.body = PGPUnknown.read(i);
                break;
              case m.ENCRYPTED:
                this.body = PGPUnknown.read(i);
                break;
              case m.MARKER:
                this.body = PGPUnknown.read(i);
                break;
              case m.PLAINTEXT:
                this.body = PGPUnknown.read(i);
                break;
              case m.RING_TRUST:
                this.body = PGPUnknown.read(i);
                break;
              case m.USER_ID:
                this.body = PGPUserID.read(i);
                break;
              case m.PUBLIC_SUBKEY:
                this.body = PGPPublicKey.read(i);
                break;
              case m.OLD_COMMENT:
                this.body = PGPPublicKey.read(i);
                break;
              case m.ATTRIBUTE:
                this.body = PGPUnknown.read(i);
                break;
              case m.ENCRYPTED_MDC:
                this.body = PGPUnknown.read(i);
                break;
              case m.MDC:
                this.body = PGPUnknown.read(i);
                break;
              case m.ENCRYPTED_AEAD:
                this.body = PGPUnknown.read(i);
                break;
              default:
                this.body = PGPUnknown.read(i);
                break;
            }
            return this;
          }
          format() {
            return { type: S[this.type] || "UNKNOWN", body: this.body };
          }
        }
        class PGPBody extends s.Struct {
          constructor() {
            super();
          }
        }
        class PGPUnknown extends PGPBody {
          constructor() {
            (super(), (this.data = H));
          }
          getSize() {
            return this.data.length;
          }
          write(t) {
            return (t.writeBytes(this.data), t);
          }
          read(t) {
            return ((this.data = t.readBytes(t.left())), this);
          }
          format() {
            return { data: this.data.toString("hex") };
          }
        }
        class PGPPublicKey extends PGPBody {
          constructor() {
            (super(),
              (this.version = 4),
              (this.algorithm = 0),
              (this.expires = 0),
              (this.timestamp = 0),
              (this.n = new MPI()),
              (this.e = new MPI()),
              (this.p = new MPI()),
              (this.g = new MPI()),
              (this.y = new MPI()),
              (this.q = new MPI()),
              (this.oid = H),
              (this.point = new MPI()),
              (this.kdfHash = 0),
              (this.kdfAlg = 0),
              (this.data = H));
          }
          get curve() {
            return this.oid.equals(U.P256)
              ? N.P256
              : this.oid.equals(U.P384)
                ? N.P384
                : this.oid.equals(U.P521)
                  ? N.P521
                  : this.oid.equals(U.SECP256K1)
                    ? N.SECP256K1
                    : this.oid.equals(U.X25519)
                      ? N.X25519
                      : this.oid.equals(U.BRAINPOOLP256)
                        ? N.BRAINPOOLP256
                        : this.oid.equals(U.BRAINPOOLP384)
                          ? N.BRAINPOOLP384
                          : this.oid.equals(U.BRAINPOOLP512)
                            ? N.BRAINPOOLP512
                            : this.oid.equals(U.ED25519)
                              ? N.ED25519
                              : 0;
          }
          set curve(t) {
            switch (t) {
              case N.P256:
                this.oid = U.P256;
                break;
              case N.P384:
                this.oid = U.P384;
                break;
              case N.P521:
                this.oid = U.P521;
                break;
              case N.SECP256K1:
                this.oid = U.SECP256K1;
                break;
              case N.X25519:
                this.oid = U.X25519;
                break;
              case N.BRAINPOOLP256:
                this.oid = U.BRAINPOOLP256;
                break;
              case N.BRAINPOOLP384:
                this.oid = U.BRAINPOOLP384;
                break;
              case N.BRAINPOOLP512:
                this.oid = U.BRAINPOOLP512;
                break;
              case N.ED25519:
                this.oid = U.ED25519;
                break;
            }
          }
          isRSA() {
            switch (this.algorithm) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                return !0;
            }
            return !1;
          }
          isElgamal() {
            switch (this.algorithm) {
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                return !0;
            }
            return !1;
          }
          getSize() {
            let t = 0;
            switch (((t += 1), this.version)) {
              case 2:
              case 3:
                ((t += 4), (t += 2), (t += 1));
                break;
              case 4:
                ((t += 4), (t += 1));
                break;
              default:
                throw new Error("Unknown PGP key version.");
            }
            switch (this.algorithm) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                ((t += this.n.getSize()), (t += this.e.getSize()));
                break;
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                ((t += this.p.getSize()),
                  (t += this.g.getSize()),
                  (t += this.y.getSize()));
                break;
              case y.DSA:
                ((t += this.p.getSize()),
                  (t += this.q.getSize()),
                  (t += this.g.getSize()),
                  (t += this.y.getSize()));
                break;
              case y.ECDH:
                ((t += 1),
                  (t += this.oid.length),
                  (t += this.point.getSize()),
                  (t += 4));
                break;
              case y.ECDSA:
              case y.EDDSA:
                ((t += 1), (t += this.oid.length), (t += this.point.getSize()));
                break;
              default:
                t += this.data.length;
                break;
            }
            return t;
          }
          write(t) {
            switch ((t.writeU8(this.version), this.version)) {
              case 2:
              case 3:
                if (!this.isRSA())
                  throw new Error("Unknown PGP key algorithm.");
                (t.writeU32BE(this.timestamp),
                  t.writeU16BE(this.expires),
                  t.writeU8(this.algorithm));
                break;
              case 4:
                (t.writeU32BE(this.timestamp), t.writeU8(this.algorithm));
                break;
              default:
                throw new Error("Unknown PGP key version.");
            }
            switch (this.algorithm) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                (this.n.write(t), this.e.write(t));
                break;
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                (this.p.write(t), this.g.write(t), this.y.write(t));
                break;
              case y.DSA:
                (this.p.write(t),
                  this.q.write(t),
                  this.g.write(t),
                  this.y.write(t));
                break;
              case y.ECDH:
                (t.writeU8(this.oid.length),
                  t.writeBytes(this.oid),
                  this.point.write(t),
                  t.writeU8(3),
                  t.writeU8(1),
                  t.writeU8(this.kdfHash),
                  t.writeU8(this.kdfAlg));
                break;
              case y.ECDSA:
              case y.EDDSA:
                (t.writeU8(this.oid.length),
                  t.writeBytes(this.oid),
                  this.point.write(t));
                break;
              default:
                t.writeBytes(this.data);
                break;
            }
            return t;
          }
          read(t) {
            switch (((this.version = t.readU8()), this.version)) {
              case 2:
              case 3:
                if (
                  ((this.timestamp = t.readU32BE()),
                  (this.expires = t.readU16BE()),
                  (this.algorithm = t.readU8()),
                  !this.isRSA())
                ) {
                  if (3 !== this.version || !this.isElgamal())
                    throw new Error("Unknown PGP key algorithm.");
                  ((this.expires = 0), (this.version = 4));
                }
                break;
              case 4:
                ((this.timestamp = t.readU32BE()),
                  (this.algorithm = t.readU8()));
                break;
              default:
                throw new Error("Unknown PGP key version.");
            }
            switch (this.algorithm) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                (this.n.read(t), this.e.read(t));
                break;
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                (this.p.read(t), this.g.read(t), this.y.read(t));
                break;
              case y.DSA:
                (this.p.read(t),
                  this.q.read(t),
                  this.g.read(t),
                  this.y.read(t));
                break;
              case y.ECDH: {
                ((this.oid = t.readBytes(t.readU8())), this.point.read(t));
                const e = t.readU8();
                if (e < 3 || e > t.left())
                  throw new Error("Invalid ECDH params.");
                if (1 !== t.readU8())
                  throw new Error("Invalid ECDH reserved byte.");
                ((this.kdfHash = t.readU8()), (this.kdfAlg = t.readU8()));
                break;
              }
              case y.ECDSA:
              case y.EDDSA:
                ((this.oid = t.readBytes(t.readU8())), this.point.read(t));
                break;
              default:
                this.data = t.readBytes(t.left());
                break;
            }
            return this;
          }
          fingerprint() {
            switch (this.version) {
              case 2:
              case 3: {
                if (!this.isRSA())
                  throw new Error("Unknown PGP key algorithm.");
                const t = s.concat(this.n.data, this.e.data);
                return c.digest(t);
              }
              case 4: {
                const t = this.getSize(),
                  e = s.write(3 + t);
                return (
                  e.writeU8(153),
                  e.writeU16BE(t),
                  this.write(e),
                  h.digest(e.render())
                );
              }
              default:
                throw new Error("Unknown PGP key version.");
            }
          }
          id() {
            switch (this.version) {
              case 2:
              case 3:
                if (!this.isRSA())
                  throw new Error("Unknown PGP key algorithm.");
                if (this.n.data.length < 8)
                  throw new Error("Unknown PGP key algorithm.");
                return this.n.data.slice(this.n.data.length - 8);
              case 4:
                return this.fingerprint().slice(12, 20);
              default:
                throw new Error("Unknown PGP key version.");
            }
          }
          long() {
            return this.id();
          }
          short() {
            return this.id().slice(4, 8);
          }
          matches(t) {
            switch (("string" === typeof t && (t = _(t)), t.length)) {
              case 4:
                return this.short().equals(t);
              case 8:
                return this.long().equals(t);
              case 16:
              case 20:
                return this.fingerprint().equals(t);
              default:
                return !1;
            }
          }
          keyHash() {
            let t = 6;
            4 !== this.version && (t += 2);
            const e = this.encode().slice(t - 1);
            return ((e[0] = this.algorithm), l.digest(e));
          }
          format() {
            const t = g[this.algorithm] || "UNKNOWN",
              e = this.version,
              r = this.timestamp,
              i = this.expires;
            switch (this.algorithm) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                return {
                  version: e,
                  algorithm: t,
                  timestamp: r,
                  expires: i,
                  n: this.n.data.toString("hex"),
                  e: this.e.data.toString("hex"),
                };
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                return {
                  version: e,
                  algorithm: t,
                  timestamp: r,
                  expires: i,
                  p: this.p.data.toString("hex"),
                  g: this.g.data.toString("hex"),
                  y: this.y.data.toString("hex"),
                };
              case y.DSA:
                return {
                  version: e,
                  algorithm: t,
                  timestamp: r,
                  expires: i,
                  p: this.p.data.toString("hex"),
                  q: this.q.data.toString("hex"),
                  g: this.g.data.toString("hex"),
                  y: this.y.data.toString("hex"),
                };
              case y.ECDH:
                return {
                  version: e,
                  algorithm: t,
                  timestamp: r,
                  expires: i,
                  curve: I[this.curve] || "UNKNOWN",
                  point: this.point.data.toString("hex"),
                  kdfHash: this.kdfHash,
                  kdfAlg: this.kdfAlg,
                };
              case y.ECDSA:
              case y.EDDSA:
                return {
                  version: e,
                  algorithm: t,
                  timestamp: r,
                  expires: i,
                  curve: I[this.curve] || "UNKNOWN",
                  point: this.point.data.toString("hex"),
                };
              default:
                return {
                  version: e,
                  algorithm: t,
                  timestamp: r,
                  expires: i,
                  data: this.data.toString("hex"),
                };
            }
          }
        }
        class PGPPrivateKey extends PGPBody {
          constructor() {
            (super(),
              (this.key = new PGPPublicKey()),
              (this.params = new CipherParams()),
              (this.data = H));
          }
          secret(t) {
            let e = this.data;
            if (this.params.encrypted) {
              if (null == t) throw new Error("Key requires a passphrase.");
              e = this.params.decrypt(e, t);
            }
            return SecretKey.decode(e, this.key.algorithm);
          }
          getSize() {
            let t = 0;
            return (
              (t += this.key.getSize()),
              (t += this.params.getSize()),
              (t += this.data.length),
              t
            );
          }
          write(t) {
            return (
              this.key.write(t),
              this.params.write(t),
              t.writeBytes(this.data),
              t
            );
          }
          read(t) {
            return (
              this.key.read(t),
              this.params.read(t),
              (this.data = t.readBytes(t.left())),
              this
            );
          }
          format() {
            let t = null,
              e = null;
            return (
              this.params.encrypted
                ? ((t = this.params), (e = this.data.toString("hex")))
                : ((t = null), (e = this.secret())),
              { key: this.key, params: t, data: e }
            );
          }
        }
        class CipherParams extends s.Struct {
          constructor() {
            (super(),
              (this.encrypted = !1),
              (this.checksum = !1),
              (this.cipher = 0),
              (this.s2k = new S2K()),
              (this.iv = H));
          }
          blockSize() {
            switch (this.cipher) {
              case E.IDEA:
              case E.DES3:
              case E.CAST5:
              case E.BLOWFISH:
                return 8;
              case E.AES128:
              case E.AES192:
              case E.AES256:
              case E.TWOFISH:
              case E.CAMELLIA128:
              case E.CAMELLIA192:
              case E.CAMELLIA256:
                return 16;
              default:
                throw new Error("Unknown cipher type.");
            }
          }
          keySize() {
            switch (this.cipher) {
              case E.IDEA:
                return 16;
              case E.DES3:
                return 24;
              case E.CAST5:
                return 16;
              case E.BLOWFISH:
                return 16;
              case E.AES128:
                return 16;
              case E.AES192:
                return 24;
              case E.AES256:
                return 32;
              case E.TWOFISH:
                return 32;
              case E.CAMELLIA128:
                return 16;
              case E.CAMELLIA192:
                return 24;
              case E.CAMELLIA256:
                return 32;
              default:
                throw new Error("Unknown cipher type.");
            }
          }
          algName() {
            switch (this.cipher) {
              case E.IDEA:
                return "IDEA-CFB";
              case E.DES3:
                return "DES-EDE3-CFB";
              case E.CAST5:
                return "CAST5-CFB";
              case E.BLOWFISH:
                return "BF-CFB";
              case E.AES128:
                return "AES-128-CFB";
              case E.AES192:
                return "AES-192-CFB";
              case E.AES256:
                return "AES-256-CFB";
              case E.TWOFISH:
                return "TWOFISH-256-CFB";
              case E.CAMELLIA128:
                return "CAMELLIA-128-CFB";
              case E.CAMELLIA192:
                return "CAMELLIA-192-CFB";
              case E.CAMELLIA256:
                return "CAMELLIA-256-CFB";
              default:
                throw new Error("Unknown cipher type.");
            }
          }
          derive(t) {
            if (!this.encrypted) throw new Error("Cannot derive passphrase.");
            return this.s2k.derive(t, this.keySize());
          }
          encipher(e, r) {
            i(t.isBuffer(e));
            const n = this.algName(),
              o = this.checksum ? 20 : 2,
              c = t.allocUnsafe(e.length + o);
            if ((e.copy(c, 0), this.checksum)) h.digest(e).copy(c, e.length);
            else {
              let t = 0;
              for (let r = 0; r < e.length; r++) ((t += e[r]), (t &= 65535));
              s.writeU16BE(c, t, e.length);
            }
            return a.encrypt(n, r, this.iv, c);
          }
          decipher(t, e) {
            const r = this.algName(),
              i = a.decrypt(r, e, this.iv, t);
            if (this.checksum) {
              if (i.length < 20) throw new Error("Truncated data.");
              const t = i.slice(0, -20),
                e = i.slice(-20),
                r = h.digest(t);
              if (!r.equals(e)) throw new Error("Invalid checksum.");
              return t;
            }
            if (i.length < 2) throw new Error("Truncated data.");
            const n = i.slice(0, -2),
              o = s.readU16BE(i, i.length - 2);
            let c = 0;
            for (let s = 0; s < n.length; s++) ((c += n[s]), (c &= 65535));
            if (c !== o) throw new Error("Invalid checksum.");
            return n;
          }
          encrypt(t, e) {
            const r = this.derive(e);
            return this.encipher(t, r);
          }
          decrypt(t, e) {
            const r = this.derive(e);
            return this.decipher(t, r);
          }
          getSize() {
            let t = 0;
            return (
              this.encrypted
                ? ((t += 1),
                  (t += 1),
                  (t += this.s2k.getSize()),
                  (t += this.iv.length))
                : (t += 1),
              t
            );
          }
          write(t) {
            return (
              this.encrypted
                ? (i(this.iv.length === this.blockSize()),
                  t.writeU8(this.checksum ? 254 : 255),
                  t.writeU8(this.cipher),
                  this.s2k.write(t),
                  t.writeBytes(this.iv))
                : t.writeU8(0),
              t
            );
          }
          read(t) {
            const e = t.readU8();
            switch (e) {
              case 0:
                break;
              case 254:
              case 255:
                ((this.encrypted = !0),
                  (this.checksum = 254 === e),
                  (this.cipher = t.readU8()),
                  this.s2k.read(t),
                  (this.iv = t.readBytes(this.blockSize())));
                break;
              default:
                throw new Error("Unknown S2K type.");
            }
            return this;
          }
          format() {
            return {
              encrypted: this.encrypted,
              checksum: this.checksum,
              cipher: b[this.cipher] || "UNKNOWN",
              s2k: this.s2k,
              iv: this.iv.toString("hex"),
            };
          }
        }
        class S2K extends s.Struct {
          constructor() {
            (super(),
              (this.mode = 0),
              (this.hash = 0),
              (this.count = 0),
              (this.salt = H));
          }
          derive(e, r) {
            (i("string" === typeof e), i(r >>> 0 === r));
            const s = t.from(e, "binary"),
              n = B[this.hash];
            if (!n) throw new Error("Unknown hash.");
            switch (this.mode) {
              case 0:
                return this._simple(n, s, r);
              case 1:
                return this._salted(n, s, r);
              case 3:
                return this._iterated(n, s, r);
              default:
                throw new Error("Unknown S2K mode.");
            }
          }
          _simple(t, e, r) {
            return this._hash(t, e, H, r);
          }
          _salted(t, e, r) {
            return this._hash(t, e, this.salt, r);
          }
          _hash(e, r, s, n) {
            (i(e && "string" === typeof e.id),
              i(t.isBuffer(r)),
              i(t.isBuffer(s)),
              i(n >>> 0 === n));
            const o = e.ctx,
              a = t.alloc(n);
            let c = 0,
              h = 0;
            while (h < n) {
              o.init();
              for (let t = 0; t < c; t++) o.update(K);
              (o.update(s), o.update(r), (h += o.final().copy(a, h)), (c += 1));
            }
            return a;
          }
          _iterated(e, r, n) {
            (i(e && "string" === typeof e.id),
              i(t.isBuffer(r)),
              i(n >>> 0 === n));
            const o = this.salt,
              a = e.ctx,
              c = t.alloc(n),
              h = s.concat(o, r);
            let u = this.count;
            u < h.length && (u = h.length);
            let f = 0,
              l = 0;
            while (l < n) {
              a.init();
              for (let e = 0; e < f; e++) a.update(K);
              let t = 0;
              while (t < u)
                if (t + h.length > u) {
                  const e = u - t;
                  (a.update(h.slice(0, e)), (t = u));
                } else (a.update(h), (t += h.length));
              ((l += a.final().copy(c, l)), (f += 1));
            }
            return c;
          }
          getSize() {
            let t = 2;
            switch (this.mode) {
              case 0:
                break;
              case 1:
                t += 8;
                break;
              case 3:
                ((t += 8), (t += 1));
                break;
              default:
                throw new Error("Unknown S2K function.");
            }
            return t;
          }
          write(t) {
            switch ((t.writeU8(this.mode), t.writeU8(this.hash), this.mode)) {
              case 0:
                break;
              case 1:
                t.writeBytes(this.salt);
                break;
              case 3:
                (t.writeBytes(this.salt), t.writeU8(R(this.count)));
                break;
              default:
                throw new Error("Unknown S2K function.");
            }
            return t;
          }
          read(t) {
            switch (
              ((this.mode = t.readU8()), (this.hash = t.readU8()), this.mode)
            ) {
              case 0:
                break;
              case 1:
                this.salt = t.readBytes(8);
                break;
              case 3:
                ((this.salt = t.readBytes(8)), (this.count = z(t.readU8())));
                break;
              default:
                throw new Error("Unknown S2K function.");
            }
            return this;
          }
          format() {
            return {
              mode: this.mode,
              hash: P[this.hash] || "UNKNOWN",
              count: this.count,
              salt: this.salt.toString("hex"),
            };
          }
        }
        class SecretKey extends s.Struct {
          constructor() {
            (super(),
              (this.d = new MPI()),
              (this.q = new MPI()),
              (this.p = new MPI()),
              (this.qi = new MPI()),
              (this.x = new MPI()));
          }
          getSize(t) {
            i((255 & t) === t);
            let e = 0;
            switch (t) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                ((e += this.d.getSize()),
                  (e += this.q.getSize()),
                  (e += this.p.getSize()),
                  (e += this.qi.getSize()));
                break;
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                e += this.x.getSize();
                break;
              case y.DSA:
                e += this.x.getSize();
                break;
              case y.ECDSA:
              case y.EDDSA:
                e += this.d.getSize();
                break;
              default:
                throw new Error("Unknown key type.");
            }
            return e;
          }
          write(t, e) {
            switch ((i((255 & e) === e), e)) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                (this.d.write(t),
                  this.q.write(t),
                  this.p.write(t),
                  this.qi.write(t));
                break;
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                this.x.write(t);
                break;
              case y.DSA:
                this.x.write(t);
                break;
              case y.ECDSA:
              case y.EDDSA:
                this.d.write(t);
                break;
              default:
                throw new Error("Unknown key type.");
            }
            return t;
          }
          read(t, e) {
            switch ((i((255 & e) === e), e)) {
              case y.RSA:
              case y.RSA_ENCRYPT_ONLY:
              case y.RSA_SIGN_ONLY:
                (this.d.read(t),
                  this.q.read(t),
                  this.p.read(t),
                  this.qi.read(t));
                break;
              case y.ELGAMAL:
              case y.ELGAMAL_LEGACY:
                this.x.read(t);
                break;
              case y.DSA:
                this.x.read(t);
                break;
              case y.ECDSA:
              case y.EDDSA:
                this.d.read(t);
                break;
              default:
                throw new Error("Unknown key type.");
            }
            return this;
          }
          format() {
            return this.p.data.length > 0
              ? {
                  d: this.d.data.toString("hex"),
                  q: this.q.data.toString("hex"),
                  p: this.p.data.toString("hex"),
                  qi: this.qi.data.toString("hex"),
                }
              : this.x.data.length > 0
                ? { x: this.x.data.toString("hex") }
                : this.d.data.length > 0
                  ? { d: this.d.data.toString("hex") }
                  : {
                      d: this.d.data.toString("hex"),
                      q: this.q.data.toString("hex"),
                      p: this.p.data.toString("hex"),
                      qi: this.qi.data.toString("hex"),
                      x: this.x.data.toString("hex"),
                    };
          }
        }
        class PGPUserID extends PGPBody {
          constructor() {
            (super(), (this.id = ""));
          }
          getSize() {
            return t.byteLength(this.id, "utf8");
          }
          write(t) {
            return (t.writeString(this.id, "utf8"), t);
          }
          read(t) {
            return ((this.id = t.readString(t.left(), "utf8")), this);
          }
          format() {
            return { id: this.id };
          }
        }
        class MPI extends s.Struct {
          constructor(t) {
            (super(),
              (this.bits = 0),
              (this.data = H),
              null != t && this.fromOptions(t));
          }
          get() {
            return this.data;
          }
          set(t) {
            return this.fromOptions(t);
          }
          fromOptions(e) {
            return (
              i(t.isBuffer(e)),
              (this.bits = o(e)),
              (this.data = e),
              this
            );
          }
          getSize() {
            return 2 + this.data.length;
          }
          write(t) {
            return (t.writeU16BE(this.bits), t.writeBytes(this.data), t);
          }
          read(t) {
            if (0 === t.left()) return this;
            const e = t.readU16BE(),
              r = (e + 7) >>> 3,
              i = Math.min(r, t.left()),
              s = t.readBytes(i);
            return ((this.bits = e), (this.data = s), this);
          }
        }
        function C(e) {
          switch ((i(t.isBuffer(e)), e.length)) {
            case 4:
            case 8:
            case 16:
            case 20:
              break;
            default:
              throw new Error("Invalid PGP key id/fingerprint.");
          }
          const r = e.toString("hex");
          return "0x" + r.toUpperCase();
        }
        function _(e) {
          if (
            (i("string" === typeof e),
            (e = e.replace(/[\t ]/g, "")),
            e.length >= 2 &&
              48 === e.charCodeAt(0) &&
              120 === (32 | e.charCodeAt(1)) &&
              (e = e.substring(2)),
            e.length > 40)
          )
            throw new Error("Invalid PGP key id/fingerprint.");
          const r = t.from(e, "hex");
          if (r.length !== e.length >>> 1)
            throw new Error("Invalid PGP key id/fingerprint.");
          switch (r.length) {
            case 4:
            case 8:
            case 16:
            case 20:
              break;
            default:
              throw new Error("Invalid PGP key id/fingerprint.");
          }
          return r;
        }
        function R(t) {
          if ((i(t >>> 0 === t), t < 1024 || t > 65011712))
            throw new RangeError("Invalid iteration count.");
          for (let e = 0; e < 256; e++) {
            const r = z(e);
            if (r >= t) return e;
          }
          return 255;
        }
        function z(t) {
          return (i((255 & t) === t), (16 + (15 & t)) << (6 + (t >>> 4)));
        }
        ((e.packetTypes = m),
          (e.packetTypesByVal = S),
          (e.sigTypes = w),
          (e.sigTypesByVal = A),
          (e.keyTypes = y),
          (e.keyTypesByVal = g),
          (e.cipherTypes = E),
          (e.cipherTypesByVal = b),
          (e.hashTypes = k),
          (e.hashTypesByVal = P),
          (e.compressTypes = v),
          (e.compressTypesByVal = x),
          (e.curveTypes = N),
          (e.curveTypesByVal = I),
          (e.oids = U),
          (e.PGPMessage = PGPMessage),
          (e.PGPPacket = PGPPacket),
          (e.PGPBody = PGPBody),
          (e.PGPUnknown = PGPUnknown),
          (e.PGPPublicKey = PGPPublicKey),
          (e.PGPPrivateKey = PGPPrivateKey),
          (e.CipherParams = CipherParams),
          (e.S2K = S2K),
          (e.SecretKey = SecretKey),
          (e.PGPUserID = PGPUserID),
          (e.MPI = MPI),
          (e.encodeID = C),
          (e.decodeID = _));
      }).call(this, r(2).Buffer);
    },
    11086: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(4852),
          n = r(3012);
        class SHA224 extends s {
          constructor() {
            super();
          }
          init() {
            return (
              (this.state[0] = 3238371032),
              (this.state[1] = 914150663),
              (this.state[2] = 812702999),
              (this.state[3] = 4144912697),
              (this.state[4] = 4290775857),
              (this.state[5] = 1750603025),
              (this.state[6] = 1694076839),
              (this.state[7] = 3204075428),
              (this.size = 0),
              this
            );
          }
          final() {
            return super.final().slice(0, 28);
          }
          static hash() {
            return new SHA224();
          }
          static hmac() {
            return new n(SHA224, 64);
          }
          static digest(t) {
            return SHA224.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 28 === t.length),
              i(e.isBuffer(r) && 28 === r.length),
              SHA224.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = SHA224.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return SHA224.hmac().init(e).update(t).final();
          }
        }
        ((SHA224.native = 0),
          (SHA224.id = "SHA224"),
          (SHA224.size = 28),
          (SHA224.bits = 224),
          (SHA224.blockSize = 64),
          (SHA224.zero = e.alloc(28, 0)),
          (SHA224.ctx = new SHA224()),
          (t.exports = SHA224));
      }).call(this, r(2).Buffer);
    },
    11087: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769);
        class RC4 {
          constructor() {
            ((this.s = new Uint32Array(256)), (this.i = 0), (this.j = 0));
          }
          init(t) {
            i(e.isBuffer(t));
            const r = t.length;
            if (r < 1 || r > 256) throw new Error("Invalid key size.");
            const s = this.s;
            for (let e = 0; e < 256; e++) s[e] = e;
            let n = 0;
            for (let e = 0; e < 256; e++)
              ((n += s[e] + t[e % r]),
                (n &= 255),
                ([s[e], s[n]] = [s[n], s[e]]));
            return this;
          }
          encrypt(t) {
            return this.crypt(t, t);
          }
          crypt(t, r) {
            if ((i(e.isBuffer(t)), i(e.isBuffer(r)), r.length < t.length))
              throw new Error("Invalid output size.");
            const s = this.s;
            let n,
              o,
              { i: a, j: c } = this;
            for (let e = 0; e < t.length; e++)
              ((a += 1),
                (a &= 255),
                (n = s[a]),
                (c += n),
                (c &= 255),
                (o = s[c]),
                (s[a] = o),
                (s[c] = n),
                (r[e] = t[e] ^ s[(n + o) & 255]));
            return ((this.i = a), (this.j = c), r);
          }
          destroy() {
            for (let t = 0; t < 256; t++) this.s[t] = 0;
            return this;
          }
        }
        ((RC4.native = 0), (t.exports = RC4));
      }).call(this, r(2).Buffer);
    },
    11090: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(5672),
          n = r(3201),
          o = r(4577),
          a = {
            encrypt(t, r, a, c, h) {
              (void 0 === c && (c = null),
                void 0 === h && (h = null),
                i(t && "string" === typeof t.id),
                i(e.isBuffer(r)));
              const u = n.randomBytes(32);
              let f = s.encryptOAEP(t, u, a, h);
              null != c && (f = s.veil(f, c, a));
              const l = n.randomBytes(24),
                d = o.seal(r, u, l);
              return e.concat([f, l, d]);
            },
            decrypt(t, r, n, a, c) {
              (void 0 === a && (a = null),
                void 0 === c && (c = null),
                i(t && "string" === typeof t.id),
                i(e.isBuffer(r)),
                i(n instanceof s.RSAPrivateKey),
                null == a && (a = n.bits()),
                i(a >>> 0 === a));
              const h = (a + 7) >>> 3;
              if (r.length < h + 24) throw new Error("Invalid ciphertext.");
              const u = s.unveil(r.slice(0, h), a, n),
                f = s.decryptOAEP(t, u, n, c),
                l = r.slice(h, h + 24),
                d = r.slice(h + 24);
              return o.open(d, f, l);
            },
          };
        t.exports = a;
      }).call(this, r(2).Buffer);
    },
    11091: function (t, e, r) {
      "use strict";
      t.exports = r(11092);
    },
    11092: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          s = r(6843),
          n = r(3616),
          o = new Uint32Array(16),
          a = new Uint32Array(16);
        function c(e, r, o, a, c, h) {
          if (
            ("string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            null == r && (r = t.alloc(0)),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(o >>> 0 === o),
            i(a >>> 0 === a),
            i(c >>> 0 === c),
            i(h >>> 0 === h),
            a * c >= 1 << 30)
          )
            throw new Error("EFBIG");
          if (0 !== (o & (o - 1)) || 0 === o) throw new Error("EINVAL");
          if (o > 4294967295) throw new Error("EINVAL");
          const u = t.allocUnsafe(256 * a),
            f = t.allocUnsafe(128 * a * o),
            l = s.derive(n, e, r, 1, 128 * c * a);
          for (let t = 0; t < c; t++) p(l, 128 * t * a, a, o, f, u);
          return s.derive(n, e, l, 1, h);
        }
        async function h(e, r, o, a, c, h) {
          if (
            ("string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            null == r && (r = t.alloc(0)),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(o >>> 0 === o),
            i(a >>> 0 === a),
            i(c >>> 0 === c),
            i(h >>> 0 === h),
            a * c >= 1 << 30)
          )
            throw new Error("EFBIG");
          if (0 !== (o & (o - 1)) || 0 === o) throw new Error("EINVAL");
          if (o > 4294967295) throw new Error("EINVAL");
          const u = t.allocUnsafe(256 * a),
            f = t.allocUnsafe(128 * a * o),
            l = await s.deriveAsync(n, e, r, 1, 128 * c * a);
          for (let t = 0; t < c; t++) await m(l, 128 * t * a, a, o, f, u);
          return s.deriveAsync(n, e, l, 1, h);
        }
        function u(t) {
          for (let e = 0; e < 16; e++) o[e] = y(t, 4 * e);
          for (let e = 0; e < 16; e++) a[e] = o[e];
          for (let e = 0; e < 8; e += 2)
            ((a[4] ^= f(a[0] + a[12], 7)),
              (a[8] ^= f(a[4] + a[0], 9)),
              (a[12] ^= f(a[8] + a[4], 13)),
              (a[0] ^= f(a[12] + a[8], 18)),
              (a[9] ^= f(a[5] + a[1], 7)),
              (a[13] ^= f(a[9] + a[5], 9)),
              (a[1] ^= f(a[13] + a[9], 13)),
              (a[5] ^= f(a[1] + a[13], 18)),
              (a[14] ^= f(a[10] + a[6], 7)),
              (a[2] ^= f(a[14] + a[10], 9)),
              (a[6] ^= f(a[2] + a[14], 13)),
              (a[10] ^= f(a[6] + a[2], 18)),
              (a[3] ^= f(a[15] + a[11], 7)),
              (a[7] ^= f(a[3] + a[15], 9)),
              (a[11] ^= f(a[7] + a[3], 13)),
              (a[15] ^= f(a[11] + a[7], 18)),
              (a[1] ^= f(a[0] + a[3], 7)),
              (a[2] ^= f(a[1] + a[0], 9)),
              (a[3] ^= f(a[2] + a[1], 13)),
              (a[0] ^= f(a[3] + a[2], 18)),
              (a[6] ^= f(a[5] + a[4], 7)),
              (a[7] ^= f(a[6] + a[5], 9)),
              (a[4] ^= f(a[7] + a[6], 13)),
              (a[5] ^= f(a[4] + a[7], 18)),
              (a[11] ^= f(a[10] + a[9], 7)),
              (a[8] ^= f(a[11] + a[10], 9)),
              (a[9] ^= f(a[8] + a[11], 13)),
              (a[10] ^= f(a[9] + a[8], 18)),
              (a[12] ^= f(a[15] + a[14], 7)),
              (a[13] ^= f(a[12] + a[15], 9)),
              (a[14] ^= f(a[13] + a[12], 13)),
              (a[15] ^= f(a[14] + a[13], 18)));
          for (let e = 0; e < 16; e++) o[e] += a[e];
          for (let e = 0; e < 16; e++) g(t, o[e], 4 * e);
        }
        function f(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function l(e, r, i, s) {
          const n = t.allocUnsafe(64);
          S(n, e, 0, 64 * (2 * s - 1), 64);
          for (let t = 0; t < 2 * s; t++)
            (w(n, e, 0, 64 * t, 64), u(n), S(r, n, i + 64 * t, 0, 64));
          for (let t = 0; t < s; t++) S(e, r, 64 * t, i + 2 * t * 64, 64);
          for (let t = 0; t < s; t++)
            S(e, r, 64 * (t + s), i + 64 * (2 * t + 1), 64);
        }
        function d(t, e) {
          return y(t, 64 * (2 * e - 1));
        }
        function p(t, e, r, i, s, n) {
          const o = n,
            a = n;
          S(o, t, 0, e, 128 * r);
          for (let c = 0; c < i; c++)
            (S(s, o, c * (128 * r), 0, 128 * r), l(o, a, 128 * r, r));
          for (let c = 0; c < i; c++) {
            const t = d(o, r) & (i - 1);
            (w(o, s, 0, t * (128 * r), 128 * r), l(o, a, 128 * r, r));
          }
          S(t, o, e, 0, 128 * r);
        }
        async function m(t, e, r, i, s, n) {
          const o = n,
            a = n;
          S(o, t, 0, e, 128 * r);
          for (let c = 0; c < i; c++)
            (S(s, o, c * (128 * r), 0, 128 * r),
              l(o, a, 128 * r, r),
              await A());
          for (let c = 0; c < i; c++) {
            const t = d(o, r) & (i - 1);
            (w(o, s, 0, t * (128 * r), 128 * r),
              l(o, a, 128 * r, r),
              await A());
          }
          S(t, o, e, 0, 128 * r);
        }
        function S(t, e, r, i, s) {
          e.copy(t, r, i, i + s);
        }
        function w(t, e, r, i, s) {
          for (let n = 0; n < s; n++) t[r + n] ^= e[i + n];
        }
        function A() {
          return new Promise((t) => setImmediate(t));
        }
        function y(t, e) {
          return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e];
        }
        function g(t, e, r) {
          return (
            (t[r++] = e),
            (e >>>= 8),
            (t[r++] = e),
            (e >>>= 8),
            (t[r++] = e),
            (e >>>= 8),
            (t[r++] = e),
            r
          );
        }
        ((e.native = 0), (e.derive = c), (e.deriveAsync = h));
      }).call(this, r(2).Buffer);
    },
    11093: function (t, e, r) {
      "use strict";
      t.exports = r(11094);
    },
    11094: function (t, e, r) {
      "use strict";
      const i = r(3964),
        s = r(3616),
        n = r(11095);
      t.exports = new i("SECP256K1", s, n);
    },
    11096: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          s = r(5661),
          n = r(3614),
          { padLeft: o, padRight: a } = r(3230),
          c = r(6816),
          h = r(4579),
          u = r(3201),
          f = r(5665),
          { PEMBlock: l } = r(3356),
          d = r(6838),
          p = r(5667),
          m = r(5668),
          S = r(6840),
          w = r(6841),
          A = r(6842),
          y = r(5660),
          g = r(5672),
          E = {
            DSA: "ssh-dss",
            RSA: "ssh-rsa",
            P256: "ecdsa-sha2-nistp256",
            P384: "ecdsa-sha2-nistp384",
            P521: "ecdsa-sha2-nistp521",
            ED25519: "ssh-ed25519",
          },
          b = {
            [E.DSA]: "DSA",
            [E.RSA]: "RSA",
            [E.P256]: "P256",
            [E.P384]: "P384",
            [E.P521]: "P521",
            [E.ED25519]: "ED25519",
          },
          k = {
            [E.P256]: "nistp256",
            [E.P384]: "nistp384",
            [E.P521]: "nistp521",
          },
          P = {
            "3des-cbc": "DES-EDE3-CBC",
            "aes128-cbc": "AES-128-CBC",
            "aes192-cbc": "AES-192-CBC",
            "aes256-cbc": "AES-256-CBC",
            "rijndael-cbc@lysator.liu.se": "AES-256-CBC",
            "aes128-ctr": "AES-128-CTR",
            "aes192-ctr": "AES-192-CTR",
            "aes256-ctr": "AES-256-CTR",
          },
          B = "openssh-key-v1",
          v = t.alloc(0),
          x = t.alloc(32, 0);
        class SSHPublicKey extends s.Struct {
          constructor() {
            (super(),
              (this.type = E.ED25519),
              (this.p = v),
              (this.q = v),
              (this.g = v),
              (this.y = v),
              (this.n = v),
              (this.e = v),
              (this.point = x),
              (this.comment = ""));
          }
          getCurve() {
            if (!k.hasOwnProperty(this.type))
              throw new Error("No curve available.");
            return k[this.type];
          }
          getSize() {
            let t = 0;
            switch (((t += R(this.type)), this.type)) {
              case E.DSA:
                ((t += D(this.p)),
                  (t += D(this.q)),
                  (t += D(this.g)),
                  (t += D(this.y)));
                break;
              case E.RSA:
                ((t += D(this.e)), (t += D(this.n)));
                break;
              case E.P256:
              case E.P384:
              case E.P521:
                ((t += D(this.getCurve())), (t += D(this.point)));
                break;
              case E.ED25519:
                t += D(this.point);
                break;
              default:
                throw new i.AssertionError("Invalid key.");
            }
            return t;
          }
          write(t) {
            switch ((z(t, this.type), this.type)) {
              case E.DSA:
                (M(t, this.p), M(t, this.q), M(t, this.g), M(t, this.y));
                break;
              case E.RSA:
                (M(t, this.e), M(t, this.n));
                break;
              case E.P256:
              case E.P384:
              case E.P521:
                (z(t, this.getCurve()), M(t, this.point));
                break;
              case E.ED25519:
                M(t, this.point);
                break;
              default:
                throw new i.AssertionError("Invalid key.");
            }
            return t;
          }
          read(t) {
            switch (((this.type = H(t)), this.type)) {
              case E.DSA:
                ((this.p = K(t)),
                  (this.q = K(t)),
                  (this.g = K(t)),
                  (this.y = K(t)));
                break;
              case E.RSA:
                ((this.e = K(t)), (this.n = K(t)));
                break;
              case E.P256:
              case E.P384:
              case E.P521:
                if (H(t) !== this.getCurve())
                  throw new Error("Invalid curve prefix.");
                this.point = K(t);
                break;
              case E.ED25519:
                this.point = K(t);
                break;
              default:
                throw new Error("Invalid key type.");
            }
            return this;
          }
          toString() {
            const t = this.encode();
            let e = this.comment;
            return (
              e.length > 0 && (e = " " + e),
              `${this.type} ${n.encode(t)}${e}`
            );
          }
          fromString(t) {
            i("string" === typeof t);
            const e = t.split(" ", 3);
            if (e.length < 2) throw new Error("Invalid SSH key text.");
            const [r, s] = e;
            if (!b.hasOwnProperty(r))
              throw new Error(`Unknown SSH public key type: ${r}.`);
            const o = n.decode(s);
            if ((this.decode(o), this.type !== r))
              throw new Error("Key type mismatch.");
            return (e.length > 2 && (this.comment = e[2].trim()), this);
          }
          format() {
            switch (this.type) {
              case E.DSA:
                return {
                  type: this.type,
                  p: this.p.toString("hex"),
                  q: this.q.toString("hex"),
                  g: this.g.toString("hex"),
                  y: this.y.toString("hex"),
                  comment: this.comment,
                };
              case E.RSA:
                return {
                  type: this.type,
                  n: this.n.toString("hex"),
                  e: this.e.toString("hex"),
                  comment: this.comment,
                };
              case E.P256:
              case E.P384:
              case E.P521:
              case E.ED25519:
                return {
                  type: this.type,
                  point: this.point.toString("hex"),
                  comment: this.comment,
                };
              default:
                return this;
            }
          }
        }
        class SSHPrivateKey extends s.Struct {
          constructor() {
            (super(),
              (this.type = E.ED25519),
              (this.p = v),
              (this.q = v),
              (this.g = v),
              (this.y = v),
              (this.x = v),
              (this.n = v),
              (this.e = v),
              (this.d = v),
              (this.p = v),
              (this.q = v),
              (this.dp = v),
              (this.dq = v),
              (this.qi = v),
              (this.key = x),
              (this.comment = ""),
              (this.modern = !1));
          }
          getCurve() {
            if (!k.hasOwnProperty(this.type))
              throw new Error("No curve available.");
            return k[this.type];
          }
          encodeSSH(t) {
            i(null == t || "string" === typeof t);
            const e = new KDFOptions(),
              r = new SSHPublicKey(),
              n = new RawPrivateKey(),
              o = s.write(8192);
            switch (
              (o.writeString(B),
              o.writeU8(0),
              null != t
                ? ((e.name = "bcrypt"),
                  (e.salt = u.randomBytes(16)),
                  (e.rounds = 16),
                  z(o, "aes256-ctr"))
                : z(o, "none"),
              e.write(o),
              O(o, 1),
              (r.type = this.type),
              M(o, r.encode()),
              (n.type = this.type),
              this.type)
            ) {
              case E.DSA:
                ((n.p = this.p),
                  (n.q = this.q),
                  (n.g = this.g),
                  (n.y = this.y),
                  (n.x = this.x));
                break;
              case E.RSA:
                ((n.n = this.n),
                  (n.e = this.e),
                  (n.d = this.d),
                  (n.p = this.p),
                  (n.q = this.q),
                  (n.qi = this.qi));
                break;
              case E.P256:
                ((n.point = S.publicKeyCreate(this.key, !1)),
                  (n.key = this.key));
                break;
              case E.P384:
                ((n.point = w.publicKeyCreate(this.key, !1)),
                  (n.key = this.key));
                break;
              case E.P521:
                ((n.point = A.publicKeyCreate(this.key, !1)),
                  (n.key = this.key));
                break;
              case E.ED25519:
                ((n.point = y.publicKeyCreate(this.key)), (n.key = this.key));
                break;
              default:
                throw new i.AssertionError("Invalid key.");
            }
            n.comment = this.comment;
            let a = n.encode(null != t);
            return (
              null != t && (a = I(a, "aes256-ctr", t, e.salt, e.rounds)),
              M(o, a),
              o.slice()
            );
          }
          decodeSSH(t, e) {
            const r = s.read(t),
              n = r.readString(14, "binary");
            if (n !== B || 0 !== r.readU8())
              throw new Error("Invalid magic prefix for SSH key.");
            const o = H(r),
              a = KDFOptions.read(r);
            if (1 !== _(r)) throw new Error("Too many SSH keys.");
            const c = K(r),
              h = SSHPublicKey.decode(c);
            let u = K(r);
            if ("none" !== o) {
              if (null == e)
                throw new Error("Cannot decrypt without passphrase.");
              if ("bcrypt" !== a.name) throw new Error("Invalid KDF.");
              u = U(u, o, e, a.salt, a.rounds);
            }
            const f = RawPrivateKey.decode(u);
            if (f.type !== h.type) throw new Error("Public/private mismatch.");
            switch (((this.type = h.type), this.type)) {
              case E.DSA:
                ((this.p = f.p),
                  (this.q = f.q),
                  (this.g = f.g),
                  (this.y = f.y),
                  (this.x = f.x));
                break;
              case E.RSA:
                ((this.n = f.n),
                  (this.e = f.e),
                  (this.d = f.d),
                  (this.p = f.p),
                  (this.q = f.q),
                  (this.qi = f.qi));
                break;
              case E.P256:
              case E.P384:
              case E.P521:
              case E.ED25519:
                this.key = f.key;
                break;
              default:
                throw new i.AssertionError("Invalid key.");
            }
            if (this.type === E.RSA) {
              const t = new g.RSAPrivateKey(
                this.n,
                this.e,
                this.d,
                this.p,
                this.q,
                null,
                null,
                this.qi,
              );
              if ((g.privateKeyCompute(t), !g.privateKeyVerify(t)))
                throw new Error("Invalid RSA private key.");
              ((this.dp = t.dp), (this.dq = t.dq));
            }
            return ((this.comment = f.comment), (this.modern = !0), this);
          }
          encode(t) {
            if (this.modern || this.type === E.ED25519)
              return this.encodeSSH(t);
            switch (this.type) {
              case E.DSA: {
                const t = new f.DSAPrivateKey(
                  0,
                  this.p,
                  this.q,
                  this.g,
                  this.y,
                  this.x,
                );
                return t.encode();
              }
              case E.RSA: {
                const t = new p.RSAPrivateKey(
                  0,
                  this.n,
                  this.e,
                  this.d,
                  this.p,
                  this.q,
                  this.dp,
                  this.dq,
                  this.qi,
                );
                return t.encode();
              }
              case E.P256:
              case E.P384:
              case E.P521: {
                let t = null,
                  e = null;
                switch (this.type) {
                  case E.P256:
                    ((t = "P256"), (e = S.publicKeyCreate(this.key, !1)));
                    break;
                  case E.P384:
                    ((t = "P384"), (e = w.publicKeyCreate(this.key, !1)));
                    break;
                  case E.P521:
                    ((t = "P521"), (e = A.publicKeyCreate(this.key, !1)));
                    break;
                }
                const r = new m.ECPrivateKey(1, this.key, t, e);
                return r.encode();
              }
              default:
                throw new i.AssertionError("Invalid key.");
            }
          }
          toString(t) {
            const e = new l();
            if (this.modern || this.type === E.ED25519)
              return (
                (e.type = "OPENSSH PRIVATE KEY"),
                (e.data = this.encode(t)),
                e.toString()
              );
            switch (this.type) {
              case E.DSA:
                e.type = "DSA PRIVATE KEY";
                break;
              case E.RSA:
                e.type = "RSA PRIVATE KEY";
                break;
              case E.P256:
              case E.P384:
              case E.P521:
                e.type = "EC PRIVATE KEY";
                break;
              default:
                throw new i.AssertionError("Invalid key.");
            }
            return (
              (e.data = this.encode(null)),
              null != t && d.encrypt(e, "AES-128-CBC", t),
              e.toString()
            );
          }
          fromString(t, e) {
            const r = l.fromString(t);
            if (r.isEncrypted()) {
              if (null == e)
                throw new Error("Private key requires a passphrase.");
              d.decrypt(r, e);
            }
            switch (r.type) {
              case "DSA PRIVATE KEY": {
                const t = f.DSAPrivateKey.decode(r.data);
                return (
                  (this.type = E.DSA),
                  (this.p = t.p.value),
                  (this.q = t.q.value),
                  (this.g = t.g.value),
                  (this.y = t.y.value),
                  (this.x = t.x.value),
                  this
                );
              }
              case "RSA PRIVATE KEY": {
                const t = p.RSAPrivateKey.decode(r.data);
                return (
                  (this.type = E.RSA),
                  (this.n = t.n.value),
                  (this.e = t.e.value),
                  (this.d = t.d.value),
                  (this.p = t.p.value),
                  (this.q = t.q.value),
                  (this.dp = t.dp.value),
                  (this.dq = t.dq.value),
                  (this.qi = t.qi.value),
                  this
                );
              }
              case "EC PRIVATE KEY": {
                const t = m.ECPrivateKey.decode(r.data),
                  e = t.namedCurveOID.getCurveName();
                if (!e)
                  throw new Error(
                    `Unknown curve: ${t.namedCurveOID.toString()}.`,
                  );
                let i = null,
                  s = 0;
                switch (e) {
                  case "P256":
                    ((i = E.P256), (s = 32));
                    break;
                  case "P384":
                    ((i = E.P384), (s = 48));
                    break;
                  case "P521":
                    ((i = E.P521), (s = 66));
                    break;
                  case "ED25519":
                    ((i = E.ED25519), (s = 32));
                    break;
                  default:
                    throw new Error(`Unsupported curve: ${e}.`);
                }
                return (
                  (this.type = i),
                  (this.key =
                    "ED25519" === e
                      ? a(t.privateKey.value, s)
                      : o(t.privateKey.value, s)),
                  this
                );
              }
              case "OPENSSH PRIVATE KEY":
                return this.decodeSSH(r.data, e);
              default:
                throw new Error(`Unknown private key type: ${r.type}.`);
            }
          }
          format() {
            switch (this.type) {
              case E.DSA:
                return {
                  type: this.type,
                  p: this.p.toString("hex"),
                  q: this.q.toString("hex"),
                  g: this.g.toString("hex"),
                  y: this.y.toString("hex"),
                  x: this.x.toString("hex"),
                  comment: this.comment,
                  modern: this.modern,
                };
              case E.RSA:
                return {
                  type: this.type,
                  n: this.n.toString("hex"),
                  e: this.q.toString("hex"),
                  d: this.d.toString("hex"),
                  p: this.p.toString("hex"),
                  q: this.q.toString("hex"),
                  dp: this.dp.toString("hex"),
                  dq: this.dq.toString("hex"),
                  qi: this.qi.toString("hex"),
                  comment: this.comment,
                  modern: this.modern,
                };
              case E.P256:
              case E.P384:
              case E.P521:
              case E.ED25519:
                return {
                  type: this.type,
                  key: this.key.toString("hex"),
                  comment: this.comment,
                  modern: this.modern,
                };
              default:
                return this;
            }
          }
        }
        class KDFOptions extends s.Struct {
          constructor() {
            (super(), (this.name = "none"), (this.salt = v), (this.rounds = 0));
          }
          getBodySize() {
            let t = 0;
            switch (this.name) {
              case "none":
                break;
              case "bcrypt":
                ((t += D(this.salt)), (t += L(this.rounds)));
                break;
              default:
                throw new Error(`Unknown KDF: ${this.name}.`);
            }
            return t;
          }
          getSize() {
            let t = 0;
            return (
              (t += R(this.name)),
              (t += L(0)),
              (t += this.getBodySize()),
              t
            );
          }
          write(t) {
            switch ((z(t, this.name), O(t, this.getBodySize()), this.name)) {
              case "none":
                break;
              case "bcrypt":
                (M(t, this.salt), O(t, this.rounds));
                break;
              default:
                throw new Error(`Unknown KDF: ${this.name}.`);
            }
            return t;
          }
          read(t) {
            this.name = H(t);
            const e = C(t);
            switch (this.name) {
              case "none":
                break;
              case "bcrypt":
                ((this.salt = K(e)), (this.rounds = _(e)));
                break;
              default:
                throw new Error(`Unknown KDF: ${this.name}.`);
            }
            return this;
          }
        }
        class RawPrivateKey extends s.Struct {
          constructor() {
            (super(),
              (this.type = E.ED25519),
              (this.p = v),
              (this.q = v),
              (this.g = v),
              (this.y = v),
              (this.x = v),
              (this.n = v),
              (this.e = v),
              (this.d = v),
              (this.p = v),
              (this.q = v),
              (this.qi = v),
              (this.point = x),
              (this.key = x),
              (this.comment = ""));
          }
          getSize(t) {
            let e = 0;
            switch (
              ((e += L(0)), (e += L(0)), (e += R(this.type)), this.type)
            ) {
              case E.DSA:
                ((e += D(this.p)),
                  (e += D(this.q)),
                  (e += D(this.g)),
                  (e += D(this.y)),
                  (e += D(this.x)));
                break;
              case E.RSA:
                ((e += D(this.n)),
                  (e += D(this.e)),
                  (e += D(this.d)),
                  (e += D(this.qi)),
                  (e += D(this.p)),
                  (e += D(this.q)));
                break;
              case E.P256:
              case E.P384:
              case E.P521:
                ((e += R(k[this.type])),
                  (e += D(this.point)),
                  (e += D(this.key)));
                break;
              case E.ED25519:
                ((e += D(this.point)),
                  (e += L(0)),
                  (e += this.key.length),
                  (e += this.point.length));
                break;
              default:
                throw new Error("Invalid key.");
            }
            return ((e += R(this.comment)), (e += 8 - (7 & e)), e);
          }
          write(t, e) {
            const r = t.offset;
            let i = 0;
            switch (
              (e && (i = (4294967296 * Math.random()) >>> 0),
              O(t, i),
              O(t, i),
              z(t, this.type),
              this.type)
            ) {
              case E.DSA:
                (M(t, this.p),
                  M(t, this.q),
                  M(t, this.g),
                  M(t, this.y),
                  M(t, this.x));
                break;
              case E.RSA:
                (M(t, this.n),
                  M(t, this.e),
                  M(t, this.d),
                  M(t, this.qi),
                  M(t, this.p),
                  M(t, this.q));
                break;
              case E.P256:
              case E.P384:
              case E.P521:
                (z(t, k[this.type]), M(t, this.point), M(t, this.key));
                break;
              case E.ED25519:
                (M(t, this.point), M(t, s.concat(this.key, this.point)));
                break;
              default:
                throw new Error("Invalid key.");
            }
            z(t, this.comment);
            let n = t.offset - r,
              o = 1;
            while (7 & n) (t.writeU8(o), (n += 1), (o += 1));
            return t;
          }
          read(t) {
            if (0 !== (7 & t.left())) throw new Error("Invalid padding.");
            if (_(t) !== _(t)) throw new Error("Decryption failed.");
            switch (((this.type = H(t)), this.type)) {
              case E.DSA:
                ((this.p = K(t)),
                  (this.q = K(t)),
                  (this.g = K(t)),
                  (this.y = K(t)),
                  (this.x = K(t)));
                break;
              case E.RSA:
                ((this.n = K(t)),
                  (this.e = K(t)),
                  (this.d = K(t)),
                  (this.qi = K(t)),
                  (this.p = K(t)),
                  (this.q = K(t)));
                break;
              case E.P256:
              case E.P384:
              case E.P521: {
                const e = H(t);
                if (e !== k[this.type]) throw new Error("Invalid curve.");
                ((this.point = K(t)),
                  (this.key = K(t)),
                  this.type === E.P256
                    ? (this.key = o(this.key, 32))
                    : this.type === E.P384
                      ? (this.key = o(this.key, 48))
                      : (this.key = o(this.key, 66)));
                break;
              }
              case E.ED25519: {
                const e = K(t),
                  r = K(t);
                if (64 !== r.length) throw new Error("Invalid key pair.");
                const i = r.slice(0, 32),
                  s = r.slice(32, 64);
                if (!e.equals(s)) throw new Error("Public key mismatch.");
                ((this.point = e), (this.key = i));
                break;
              }
              default:
                throw new Error("Invalid key.");
            }
            this.comment = H(t);
            const e = t.readBytes(t.left(), !0);
            for (let r = 0; r < e.length; r++)
              if (e[r] !== r + 1) throw new Error("Invalid padding.");
            return this;
          }
        }
        function N(e, r, s, n) {
          if (
            (i("string" === typeof e),
            i("string" === typeof r),
            i(t.isBuffer(s)),
            i(n >>> 0 === n),
            !P.hasOwnProperty(e))
          )
            throw new Error(`Unknown cipher: ${e}.`);
          const o = P[e],
            { keySize: a, ivSize: u } = h.get(o),
            f = a + u,
            l = c.pbkdf(r, s, n, f),
            d = l.slice(0, a),
            p = l.slice(a, a + u);
          return [o, d, p];
        }
        function I(t, e, r, i, s) {
          const [n, o, a] = N(e, r, i, s);
          return h.encrypt(n, o, a, t);
        }
        function U(t, e, r, i, s) {
          const [n, o, a] = N(e, r, i, s);
          return h.decrypt(n, o, a, t);
        }
        function H(t) {
          return t.readString(t.readU32BE(), "binary");
        }
        function K(t) {
          return t.readBytes(t.readU32BE());
        }
        function C(t) {
          return t.readChild(t.readU32BE());
        }
        function _(t) {
          return t.readU32BE();
        }
        function R(t) {
          return 4 + t.length;
        }
        function z(t, e) {
          return (t.writeU32BE(e.length), t.writeString(e, "binary"), t);
        }
        function D(t) {
          return 4 + t.length;
        }
        function M(t, e) {
          return (t.writeU32BE(e.length), t.writeBytes(e), t);
        }
        function L(t) {
          return 4;
        }
        function O(t, e) {
          return (t.writeU32BE(e), t);
        }
        ((e.keyTypes = E),
          (e.keyTypesByVal = b),
          (e.SSHPublicKey = SSHPublicKey),
          (e.SSHPrivateKey = SSHPrivateKey),
          (e.KDFOptions = KDFOptions),
          (e.RawPrivateKey = RawPrivateKey));
      }).call(this, r(2).Buffer);
    },
    11097: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(6830);
        class SHA3 extends i {
          constructor() {
            super();
          }
          final() {
            return super.final(6, null);
          }
          static hash() {
            return new SHA3();
          }
          static hmac(t) {
            return (void 0 === t && (t = 256), super.hmac(t, 6, null));
          }
          static digest(t, e) {
            return (void 0 === e && (e = 256), super.digest(t, e, 6, null));
          }
          static root(t, e, r) {
            return (void 0 === r && (r = 256), super.root(t, e, r, 6, null));
          }
          static multi(t, e, r, i) {
            return (
              void 0 === i && (i = 256),
              super.multi(t, e, r, i, 6, null)
            );
          }
          static mac(t, e, r) {
            return (void 0 === r && (r = 256), super.mac(t, e, r, 6, null));
          }
        }
        ((SHA3.native = 0),
          (SHA3.id = "SHA3_256"),
          (SHA3.size = 32),
          (SHA3.bits = 256),
          (SHA3.blockSize = 136),
          (SHA3.zero = e.alloc(32, 0)),
          (SHA3.ctx = new SHA3()),
          (t.exports = SHA3));
      }).call(this, r(2).Buffer);
    },
    11098: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4580);
        class SHA3_224 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(224);
          }
          static hash() {
            return new SHA3_224();
          }
          static hmac() {
            return super.hmac(224);
          }
          static digest(t) {
            return super.digest(t, 224);
          }
          static root(t, e) {
            return super.root(t, e, 224);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 224);
          }
          static mac(t, e) {
            return super.mac(t, e, 224);
          }
        }
        ((SHA3_224.native = i.native),
          (SHA3_224.id = "SHA3_224"),
          (SHA3_224.size = 28),
          (SHA3_224.bits = 224),
          (SHA3_224.blockSize = 144),
          (SHA3_224.zero = e.alloc(28, 0)),
          (SHA3_224.ctx = new SHA3_224()),
          (t.exports = SHA3_224));
      }).call(this, r(2).Buffer);
    },
    11099: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4580);
        class SHA3_256 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(256);
          }
          static hash() {
            return new SHA3_256();
          }
          static hmac() {
            return super.hmac(256);
          }
          static digest(t) {
            return super.digest(t, 256);
          }
          static root(t, e) {
            return super.root(t, e, 256);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 256);
          }
          static mac(t, e) {
            return super.mac(t, e, 256);
          }
        }
        ((SHA3_256.native = i.native),
          (SHA3_256.id = "SHA3_256"),
          (SHA3_256.size = 32),
          (SHA3_256.bits = 256),
          (SHA3_256.blockSize = 136),
          (SHA3_256.zero = e.alloc(32, 0)),
          (SHA3_256.ctx = new SHA3_256()),
          (t.exports = SHA3_256));
      }).call(this, r(2).Buffer);
    },
    11100: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4580);
        class SHA3_384 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(384);
          }
          static hash() {
            return new SHA3_384();
          }
          static hmac() {
            return super.hmac(384);
          }
          static digest(t) {
            return super.digest(t, 384);
          }
          static root(t, e) {
            return super.root(t, e, 384);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 384);
          }
          static mac(t, e) {
            return super.mac(t, e, 384);
          }
        }
        ((SHA3_384.native = i.native),
          (SHA3_384.id = "SHA3_384"),
          (SHA3_384.size = 48),
          (SHA3_384.bits = 384),
          (SHA3_384.blockSize = 104),
          (SHA3_384.zero = e.alloc(48, 0)),
          (SHA3_384.ctx = new SHA3_384()),
          (t.exports = SHA3_384));
      }).call(this, r(2).Buffer);
    },
    11101: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4580);
        class SHA3_512 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(512);
          }
          static hash() {
            return new SHA3_512();
          }
          static hmac() {
            return super.hmac(512);
          }
          static digest(t) {
            return super.digest(t, 512);
          }
          static root(t, e) {
            return super.root(t, e, 512);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 512);
          }
          static mac(t, e) {
            return super.mac(t, e, 512);
          }
        }
        ((SHA3_512.native = i.native),
          (SHA3_512.id = "SHA3_512"),
          (SHA3_512.size = 64),
          (SHA3_512.bits = 512),
          (SHA3_512.blockSize = 72),
          (SHA3_512.zero = e.alloc(64, 0)),
          (SHA3_512.ctx = new SHA3_512()),
          (t.exports = SHA3_512));
      }).call(this, r(2).Buffer);
    },
    11102: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(5666);
        class SHAKE128 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(128);
          }
          static hash() {
            return new SHAKE128();
          }
          static hmac(t) {
            return super.hmac(128, t);
          }
          static digest(t, e) {
            return super.digest(t, 128, e);
          }
          static root(t, e, r) {
            return super.root(t, e, 128, r);
          }
          static multi(t, e, r, i) {
            return super.multi(t, e, r, 128, i);
          }
          static mac(t, e, r) {
            return super.mac(t, e, 128, r);
          }
        }
        ((SHAKE128.native = i.native),
          (SHAKE128.id = "SHAKE128"),
          (SHAKE128.size = 16),
          (SHAKE128.bits = 128),
          (SHAKE128.blockSize = 168),
          (SHAKE128.zero = e.alloc(16, 0)),
          (SHAKE128.ctx = new SHAKE128()),
          (t.exports = SHAKE128));
      }).call(this, r(2).Buffer);
    },
    11103: function (t, e, r) {
      "use strict";
      t.exports = r(11104);
    },
    11104: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          s = 1 / 4294967296;
        function n(e, r) {
          (i(t.isBuffer(e)), i(t.isBuffer(r) && r.length >= 16));
          const s = e.length >>> 3,
            n = new U64(1936682341, 1886610805),
            o = new U64(1685025377, 1852075885),
            a = new U64(1819895653, 1852142177),
            c = new U64(1952801890, 2037671283),
            h = new U64(e.length << 24, 0),
            u = new U64(0, 255),
            f = U64.decode(r, 0),
            l = U64.decode(r, 8),
            d = n.ixor(f),
            m = o.ixor(l),
            S = a.ixor(f),
            w = c.ixor(l);
          let A = 0;
          for (let t = 0; t < s; t++) {
            const t = U64.decode(e, A);
            (w.ixor(t), p(d, m, S, w), p(d, m, S, w), d.ixor(t), (A += 8));
          }
          switch (7 & e.length) {
            case 7:
              h.hi |= e[A + 6] << 16;
            case 6:
              h.hi |= e[A + 5] << 8;
            case 5:
              h.hi |= e[A + 4];
            case 4:
              h.lo |= e[A + 3] << 24;
            case 3:
              h.lo |= e[A + 2] << 16;
            case 2:
              h.lo |= e[A + 1] << 8;
            case 1:
              h.lo |= e[A];
          }
          return (
            w.ixor(h),
            p(d, m, S, w),
            p(d, m, S, w),
            d.ixor(h),
            S.ixor(u),
            p(d, m, S, w),
            p(d, m, S, w),
            p(d, m, S, w),
            p(d, m, S, w),
            d.ixor(m),
            d.ixor(S),
            d.ixor(w),
            [d.hi, d.lo]
          );
        }
        function o(e, r, s) {
          (i("number" === typeof e),
            i("number" === typeof r),
            i(t.isBuffer(s) && s.length >= 16));
          const n = new U64(1936682341, 1886610805),
            o = new U64(1685025377, 1852075885),
            a = new U64(1819895653, 1852142177),
            c = new U64(1952801890, 2037671283),
            h = new U64(e, r),
            u = new U64(0, 255),
            f = U64.decode(s, 0),
            l = U64.decode(s, 8),
            d = n.ixor(f),
            m = o.ixor(l),
            S = a.ixor(f),
            w = c.ixor(l);
          return (
            w.ixor(h),
            p(d, m, S, w),
            p(d, m, S, w),
            d.ixor(h),
            S.ixor(u),
            p(d, m, S, w),
            p(d, m, S, w),
            p(d, m, S, w),
            p(d, m, S, w),
            d.ixor(m),
            d.ixor(S),
            d.ixor(w),
            [d.hi, d.lo]
          );
        }
        function a(e, r, s) {
          (i("number" === typeof e),
            i("number" === typeof r),
            i(t.isBuffer(s) && s.length >= 32));
          const n = new U64(e, r),
            o = new U64(0, 255),
            a = U64.decode(s, 0),
            c = U64.decode(s, 8),
            h = U64.decode(s, 16),
            u = U64.decode(s, 24),
            f = a,
            l = c,
            d = h,
            m = u;
          return (
            m.ixor(n),
            p(f, l, d, m),
            p(f, l, d, m),
            f.ixor(n),
            d.ixor(o),
            p(f, l, d, m),
            p(f, l, d, m),
            p(f, l, d, m),
            p(f, l, d, m),
            f.ixor(l),
            f.ixor(d),
            f.ixor(m),
            [f.hi, f.lo]
          );
        }
        function c(t, e) {
          return n(t, e);
        }
        function h(t, e) {
          return o(0, t, e)[1];
        }
        function u(t, e, r) {
          return o(t, e, r);
        }
        function f(t, e) {
          return a(0, t, e)[1];
        }
        function l(t, e, r) {
          return a(t, e, r);
        }
        function d(t, e, r, i) {
          const [s, o] = n(t, e);
          return m(s, o, r, i);
        }
        class U64 {
          constructor(t, e) {
            ((this.hi = 0 | t), (this.lo = 0 | e));
          }
          isum(t, e) {
            const r = this,
              i = (r.lo + e) | 0,
              s = i >> 31,
              n = r.lo >> 31,
              o = e >> 31,
              a = 1 & ((n & o) | (~s & (n ^ o))),
              c = ((r.hi + t) | 0) + a;
            return ((r.hi = 0 | c), (r.lo = i), r);
          }
          iadd(t) {
            return this.isum(t.hi, t.lo);
          }
          ixor(t) {
            return ((this.hi ^= t.hi), (this.lo ^= t.lo), this);
          }
          irotl(t) {
            let e = this.hi,
              r = this.lo,
              i = this.hi,
              s = this.lo;
            return (
              t < 32
                ? ((e <<= t), (e |= r >>> (32 - t)), (r <<= t))
                : ((e = r << (t - 32)), (r = 0)),
              (t = 64 - t),
              t < 32
                ? ((s >>>= t), (s |= i << (32 - t)), (i >>>= t))
                : ((s = i >>> (t - 32)), (i = 0)),
              (this.hi = e | i),
              (this.lo = r | s),
              this
            );
          }
          static mul(t, e) {
            const r = t >>> 16,
              i = 65535 & t,
              s = e >>> 16,
              n = 65535 & e;
            let o = 0,
              a = 0,
              c = 0,
              h = 0;
            ((h += i * n),
              (c += h >>> 16),
              (h &= 65535),
              (c += r * n),
              (a += c >>> 16),
              (c &= 65535),
              (c += i * s),
              (a += c >>> 16),
              (c &= 65535),
              (o += a >>> 16),
              (a &= 65535),
              (a += r * s),
              (o += a >>> 16),
              (a &= 65535),
              (o += a >>> 16),
              (o &= 65535));
            const u = (o << 16) | a,
              f = (c << 16) | h;
            return new U64(u, f);
          }
          static decode(t, e) {
            const r = S(t, e),
              i = S(t, e + 4);
            return new U64(i, r);
          }
        }
        function p(t, e, r, i) {
          (t.iadd(e),
            e.irotl(13),
            e.ixor(t),
            t.irotl(32),
            r.iadd(i),
            i.irotl(16),
            i.ixor(r),
            t.iadd(i),
            i.irotl(21),
            i.ixor(t),
            r.iadd(e),
            e.irotl(17),
            e.ixor(r),
            r.irotl(32));
        }
        function m(t, e, r, i) {
          const n = U64.mul(t, r),
            o = U64.mul(t, i),
            a = U64.mul(r, e),
            c = U64.mul(e, i),
            h = (o.lo >>> 0) + (a.lo >>> 0) + (c.hi >>> 0),
            u = (o.hi >>> 0) + (a.hi >>> 0) + ((h * s) >>> 0),
            { hi: f, lo: l } = n.isum((u * s) | 0, 0 | u);
          return [f, l];
        }
        function S(t, e) {
          return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e];
        }
        ((e.native = 0),
          (e.siphash = c),
          (e.siphash32 = h),
          (e.siphash64 = u),
          (e.siphash32k256 = f),
          (e.siphash64k256 = l),
          (e.sipmod = d));
      }).call(this, r(2).Buffer);
    },
    11105: function (t, e, r) {
      "use strict";
      t.exports = r(11106);
    },
    11106: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(3012),
          n = -1,
          o = e.alloc(32, 0),
          a = e.alloc(64, 0);
        a[0] = 128;
        const c = new Uint32Array([
            0, 0, 404997864, 2276983119, 916902645, 2037354834, 1622973326,
            2735504181, 501274562, 776732247, 360134629, 2683325146, 1489578250,
            2980080517, 3176993012, 3409839463, 3827777931, 2810025432,
            4226710630, 3709290398, 3391995655, 2908390195,
          ]),
          h = new Uint32Array([
            404250648, 3229102296, 589532195, 95372838, 3334881222, 2130284984,
            3907553256, 326094331, 2273781383, 1285624779, 3099122360,
            2841799953, 16843777, 134545929, 1330585935, 1114545677, 909563958,
            2918083739, 2795938470, 1493455359, 3537006546, 3736975628,
            4126536693, 4211537678, 2038036857, 4018205334, 1869586799,
            1607392816, 2442231441, 4243537773, 1381127506, 2852627704,
            1616944480, 670941255, 3166489276, 2306237749, 2610648731,
            2899127095, 2391671438, 76284298, 2745415331, 1897225170, 202125324,
            1614551148, 2071720315, 4287297156, 892720181, 3051448960,
            488469533, 3899210485, 3772819424, 1397218739, 3621223383,
            4138513185, 3267506114, 1592629660, 774813742, 1838570563,
            1263219019, 1652201001, 4278116350, 2736906589, 1465336151,
            2182524629, 353719317, 2822843069, 2004337015, 2679566056,
            926407735, 2783669906, 3857036261, 2069288862, 2678015647,
            2363040531, 4042319856, 3541564707, 1246377290, 1786745888,
            3671740378, 2660608324, 1482194264, 4196774050, 3385394121,
            113938383, 690594857, 1435325052, 168437770, 1344410714, 2981232305,
            3780083536, 2694888096, 1763335625, 1802219883, 2145048084,
            2240097925, 1554716633, 3183333053, 2171823932, 1566402909,
            3526670991, 269500432, 2152734864, 4109694964, 4077122823,
            3419081675, 381717469, 1044314174, 3989208275, 84218885, 672205357,
            1734836583, 535219832, 3840194532, 1934874007, 656907303, 633032194,
            1094785345, 844661363, 2341148299, 748489639, 2812782247,
            1359041526, 2105403773, 3482647218, 2509598357, 3707451209,
            3638052824, 2392829270, 4227582971, 2335239024, 4008615918,
            594657741, 2088562044, 3348232379, 1717994854, 400804977,
            3722269661, 2794366843, 387406871, 3091934895, 1195835719, 38178373,
            2661171870, 2229018906, 3402239946, 516262356, 757969965,
            1972984408, 3217016511, 2440651566, 117906439, 941297215,
            2913832621, 19089324, 1515877722, 3928994992, 2206414467,
            1823808495, 859032627, 2248107702, 1667469667, 1072875100, 33687554,
            269091858, 2863305386, 959990163, 1903286641, 2947080926,
            3368552392, 248483270, 421094425, 3363648209, 1229535561,
            1919980091, 3654894553, 2258284383, 4076007410, 3273521457,
            3823348707, 1263066024, 1532719451, 3794450105, 2290621064,
            881987004, 2593804954, 2764581182, 640063526, 767446027, 842188850,
            2381997247, 2964388528, 3913973081, 3924394985, 459984882,
            252656655, 2016616055, 3587535829, 3869685555, 2155887232,
            1958354420, 3200172734, 2575065383, 3452769229, 652117995,
            875876404, 3185862793, 1212693832, 2054524978, 4294958079,
            2871321428, 2054878586, 4153406605, 2425387664, 4108991844,
            1600086367, 3258891933, 539000864, 497041469, 1751694696,
            1742065679, 437938202, 3497145546, 2930672302, 422330807,
            3031755444, 3378410877, 1414810964, 2585372878, 2475914899,
            3974445951, 572688418, 229262383, 1684311396, 132761699, 4059161585,
            3675455274, 1936970099, 3215124172, 303187986, 2421826690,
            1077943616, 979206266, 134750216, 1076367432, 3284347843,
            1458084757, 3974928364, 863749599, 3688582107, 2526063437,
            2711731873, 1629446080, 2374831757, 478349201, 1027470397,
            4123622088, 2543281815, 3438359387, 0, 0, 3486456783, 919897081,
            724282411, 1166497390, 1987495286, 2545151201, 2189570690,
            1689262566, 3604381654, 4272533800, 454781979, 3631691459,
            3048599221, 3243997044, 2947516079, 287916990, 1785378154,
            2011157533, 1347444048, 3121455338, 1162152261, 307006039,
            4092849139, 3407412024, 808501296, 2649776301, 4025457647,
            729072580, 1061157951, 3854794458, 1431652693, 2451352263,
            2728571554, 2031114715, 3941240810, 57002473, 1701153125, 267176554,
            3132805818, 3110627587, 791657519, 1704156746, 3233818560,
            1323801998, 3739115486, 3196166496, 471625756, 3765188860,
            4261270525, 3140413254, 1296902477, 1382324767, 2459071122,
            3839900022, 1970653557, 2411522810, 101062662, 807275574,
            2324304522, 613943726, 2998071986, 4181752139, 3873882086,
            1666830725, 235812878, 1882594430, 522157087, 4167253735,
            1650627938, 938984533, 3570694100, 4003706170, 2829621928,
            691162497, 2526438038, 3304337746, 4193895417, 2604330850,
            3318035397, 1727436707, 623219749, 900811280, 1499035993,
            4062229163, 2223254148, 1420694992, 1920128370, 3081233605,
            960095289, 3588059884, 1280060748, 1516345366, 1583244638,
            3392912532, 2021195128, 3884314783, 943251512, 3721949413,
            2357987980, 344327576, 3520160721, 3333603095, 2779098789,
            1091262436, 3806506978, 1129175457, 1633786209, 804831822,
            3014915763, 4047862594, 555844641, 363151924, 2627488412,
            2497062152, 505313310, 4033232110, 1128468803, 575833697,
            3351722951, 1996264369, 4244428796, 3005998415, 67375108, 538183716,
            1364285777, 2986910435, 2576965273, 3167170341, 1835903341,
            1338300962, 218969101, 1748572773, 4210741242, 2201348473,
            3755957215, 3062145897, 2122245502, 3617324201, 606375972,
            1035225113, 993782843, 3319232254, 2880149163, 826100634,
            3469615054, 1053917680, 286344209, 2287280793, 2408515215,
            210305923, 1313744206, 1248566276, 3082282679, 3511776102,
            3958082539, 190893024, 1010626620, 4258035905, 2172731009,
            2092900349, 2492754580, 3573429568, 4160224247, 3943494428,
            3115966137, 2707910424, 320031763, 2556372619, 741126188,
            2107398225, 3553848275, 3602430725, 3890723815, 1801245580,
            1852745070, 1472977977, 3301193668, 1861457322, 50531331, 403637787,
            1448494422, 2316545244, 1145310532, 441026654, 2139087231,
            3751739040, 2846465705, 557272968, 707438634, 1300386919,
            3149649595, 2976738058, 3250660289, 1189257095, 1397969235,
            2718082801, 3705427932, 2928387442, 185281547, 1478956627,
            2644332189, 2631083777, 1819061612, 1203886123, 825345073,
            2515886756, 1953811828, 2277107955, 4143382518, 3809079573,
            1178993990, 172198988, 2896988844, 153503141, 2307464841,
            1016532917, 336875540, 2688821428, 3789661153, 1531109306,
            370563094, 2957913254, 976939066, 3453121783, 1768536425,
            1875956230, 151593993, 1210913345, 1886444912, 2813190359,
            3065438902, 3646189935, 3503318992, 3468147998, 3991770093,
            998164438, 3435927500, 786138594, 1111627074, 710378600, 2560121496,
            3032624428, 2762255012, 1225676269, 673751080, 1569214581,
            1549561180, 3660691590, 4177053688, 2470440299, 2256937606,
            1151603138,
          ]),
          u = new Uint32Array([
            3625457760, 415266864, 639837068, 587575110, 3100034623, 3330210193,
            4226345095, 3893587917, 3414656806, 2269946131, 297318618,
            3098108525, 151060740, 17302786, 223301409, 1329753758, 2604021464,
            917368428, 4289111714, 2790851665, 215143023, 3537812921, 251000307,
            4126869239, 2524543481, 2045739250, 812609441, 1868549854,
            1838256510, 2449272639, 4166144597, 1386874788, 1197498525,
            1613233600, 901561546, 3163125349, 932944726, 2611793195,
            2324598274, 2382662657, 3533939638, 2742097243, 1812728880,
            207633432, 2222685169, 2080344822, 2150970836, 901112170,
            4112326004, 501770554, 3017859239, 3763554269, 567793531,
            3623267507, 2630009391, 3261001113, 1127100088, 778933852,
            692800305, 1264745110, 1576992479, 4272103905, 3579270977,
            1468143278, 3172275540, 363348266, 3900143553, 2006955758,
            2453092316, 933620590, 2665866675, 3850065623, 329228102,
            2676807971, 602992871, 4040366077, 541739573, 1248493460,
            1155193423, 3667826089, 2723698813, 1492788656, 3486107907,
            3372665487, 2083072420, 693472594, 1510607400, 173023764,
            1353822718, 2984333183, 3382747322, 2691242589, 342584241,
            1803541206, 3649406254, 2237442839, 1019067854, 3179377511,
            2405260649, 1574057146, 2416971840, 276844576, 133494007,
            4109566965, 3721120523, 3407265931, 3544071928, 1055770236,
            755303700, 86511882, 2020042625, 1730143950, 2548360375, 3832763349,
            36120476, 656784206, 1933656345, 1093818498, 2810940182, 2334956811,
            4138182566, 2807103827, 2994568681, 2110756090, 1234539886,
            2514287415, 1457051719, 3633225645, 1895562187, 4220203243,
            3454987935, 3995300289, 3145497837, 2093453816, 1902536325,
            1712841676, 2078137683, 3718680231, 2937526108, 397953838,
            1162299137, 1191331470, 446602818, 2659507233, 3570059791,
            3391014281, 1479355828, 762681690, 784318406, 3213982051,
            1057425180, 121117454, 2897063310, 2902532935, 2958711413,
            1525297076, 4018373430, 2204939547, 3056808908, 864419686,
            1550017425, 1665135302, 302121480, 34605572, 2477435538, 2855876681,
            3731976665, 1907337442, 3335047175, 3356413837, 3508083044,
            432569650, 994658617, 1232236690, 1608112451, 3649477295, 838005487,
            4072873465, 2833507243, 3813361883, 3109772145, 1541548726,
            3163064346, 2285146637, 1050319442, 2594490409, 187049624,
            640532044, 3207738056, 848165476, 1504751866, 2968078973,
            4075415939, 3910888143, 1997475644, 259535646, 869651827,
            3588662967, 4102062138, 2155133469, 666812098, 3197729889,
            3956133139, 3441876615, 2301899984, 884860008, 843597885,
            1215985040, 1426063323, 4289406179, 2373614325, 2063044596,
            1687195770, 2431969853, 2640273249, 1606565566, 1025515648,
            538812480, 258500797, 1751635408, 3390708328, 449868340, 3081678466,
            2920885313, 2108994794, 3033095797, 3461633101, 1419385256,
            2140377974, 2481775931, 790766216, 571320900, 1667523725,
            1678240200, 720499171, 4057666303, 3430118353, 1941938918,
            2182222408, 311450148, 2051031069, 1077566848, 1208485920,
            138422288, 2512634667, 3277252763, 3756846231, 3962796997,
            1306254155, 3684077739, 3231818174, 2707496799, 2441973006,
            2367456007, 3359456756, 1039518074, 1536661350, 2546790707, 0, 0,
            4191145755, 3476477059, 1848322988, 725976918, 3782637253,
            1989653484, 3867312690, 2187636761, 685168255, 3607013809,
            3273333612, 467171126, 1958065646, 3049347959, 3199184774,
            2937137475, 493513397, 1786240980, 3931131997, 1354370464,
            1464157449, 1158827146, 955511787, 4090173691, 2905616576,
            815657056, 3304058779, 4012602563, 3661578236, 1072022398,
            3344258377, 1435638954, 3684868786, 2725843033, 3924486799,
            3926091209, 1785030025, 1695542474, 62569170, 3132713065,
            1244606396, 795186014, 2394996775, 3226396573, 1625218655,
            3737026977, 4229700720, 484469816, 1191050707, 4256902887,
            525159721, 1297245338, 1989317234, 2464473145, 4202001865,
            1972354282, 906364440, 103816716, 2928314898, 2317654025,
            1270002418, 3002679417, 2246502079, 3865270737, 2114850360,
            242234908, 3877576572, 536372030, 1432511125, 1647835076, 987026551,
            3572409269, 2175314074, 2821272141, 1385600610, 2529489969,
            1660549571, 4187699951, 2747647283, 3311859351, 270869908,
            624275786, 2874759545, 1509040306, 3498345514, 2220142101,
            3312612053, 1924638692, 3963173348, 970317170, 374098989,
            1280991640, 2489212517, 1590311868, 2675472637, 2028439024,
            3845667040, 954062960, 2559347722, 2350155269, 399626595,
            3519460031, 3836061102, 2772503383, 2716000943, 3796061657,
            1315004825, 1630533826, 1119073270, 3018933627, 874586500,
            555066690, 144481354, 2626999845, 3994951288, 519071292, 1631798033,
            1126322822, 2982659899, 3346463891, 1341979863, 4239600613,
            604242960, 69211144, 3813757273, 1370622114, 630823262, 2579285807,
            577596841, 1833944282, 1695354164, 224934170, 2046491343,
            4202903017, 1776279387, 3753280675, 2843639525, 2128059388,
            421799056, 608023624, 4265294828, 1002821494, 2594941846,
            2872130891, 4040085023, 3460223361, 2568032580, 294147362,
            2207223558, 2399963395, 72240677, 1313500060, 1723316198,
            3083948403, 3773557643, 3943391435, 3241950448, 1023265912,
            4253122878, 2172436255, 1083479146, 2496986677, 486012923,
            4159376627, 414824926, 3114362735, 2333283148, 328752934,
            1361849520, 746429528, 97768299, 3554064571, 2364008379, 3882573011,
            963538597, 1851247580, 2865022007, 3295605653, 453182220, 51908358,
            3696645701, 1451889580, 1581532173, 1142573448, 2692710369,
            2145361662, 2292820382, 2837526351, 1730816680, 709722708,
            180075478, 3148967275, 2277622051, 3242648223, 4048769873,
            1403126438, 1927076951, 3702426533, 1393232684, 190326550, 27106638,
            2644300583, 728525997, 1816642008, 2754687428, 831911266,
            4084495565, 1955052008, 368506623, 4142074353, 1279673861,
            1175077772, 2779557002, 2886280773, 3045689630, 2302449423,
            3021214800, 346047528, 3135365539, 3780854495, 2786465368,
            380653100, 4147788520, 986567284, 107571641, 1768935634, 1091111204,
            155725074, 3614470365, 1890037216, 1874245346, 3067696241,
            517001319, 3503208381, 3605917075, 3980099271, 3805072407,
            3425622917, 1749172757, 1110071172, 748197978, 2561983021,
            3986990250, 2756251221, 1965566112, 677218384, 2254199917,
            1557803448, 1811478727, 4170399725, 3263596066, 2252645393,
          ]),
          f = new Uint32Array([
            819468312, 1612234872, 1176904483, 2351105455, 2444805830,
            1069973241, 3455838440, 2280133487, 332105607, 646401185,
            1829877944, 3669535074, 34144513, 67176453, 2651672399, 558842478,
            1822111286, 3627462126, 1375708838, 2728810756, 3104625362,
            1876090557, 4144952821, 4092984070, 4069947769, 4185517952,
            3727716207, 2708430798, 1064145297, 2123496687, 2767737426,
            1431480839, 3225903200, 2640324605, 1698020540, 3401353590,
            725064603, 1453042893, 25857678, 42861708, 1540531107, 3064164629,
            409734156, 806117436, 4135877499, 4051435402, 1786787125,
            3560289761, 989142301, 1948117097, 3719553248, 2816496455,
            3005339607, 2077750956, 2577187522, 801267437, 1547906606,
            3090050454, 2519288651, 827023994, 3781033726, 3758007073,
            2933217111, 1096253974, 717034773, 1410705473, 4008212343,
            3245842358, 1855076151, 3694634475, 3617514981, 3018160982,
            588488607, 1184861401, 4246991088, 3891319575, 2485144138,
            894069375, 2839861978, 1339727509, 2963429464, 2102983205,
            2412759497, 63506122, 1383868713, 2754172301, 341445130, 671764514,
            2135994801, 4273070415, 1573494944, 3131074842, 3591662443,
            2976612314, 400131461, 780491947, 1732033981, 3468525939,
            3129957725, 1767756340, 546312208, 1074823248, 4110939380,
            4160025347, 2346568651, 197859008, 2094218814, 4164873670,
            170722565, 335882257, 3463997287, 2171019238, 3583501540,
            3085202259, 1308763943, 2619811259, 2188591425, 423703128,
            195529611, 378219677, 1408673703, 2795983105, 4206001533,
            3917336468, 927569301, 1855315195, 2908149976, 1205374623,
            3950050299, 3422260016, 3251498734, 2683183985, 4173036668,
            3984377745, 3429983846, 2238060515, 2809912797, 1407035022,
            783226647, 1545058379, 2386904903, 21430854, 555392670, 1117684956,
            2312424138, 264904389, 1515728173, 3022878105, 1664008127,
            3334443385, 239011591, 470235163, 1202498989, 2393702691,
            3031456346, 1968892463, 468681603, 914582709, 1723216691,
            3425928703, 3327943523, 2439200754, 68289026, 134352906, 1234414250,
            2460629304, 3806228849, 3648106408, 2378614984, 130551503,
            852564249, 1679411325, 2453358921, 961114736, 2942294489,
            1138329242, 4180800242, 4025664285, 3685278691, 2883799880,
            3065600859, 1901847082, 230459528, 445133970, 691968666, 1385866440,
            1275799078, 2552638910, 1690251826, 3358756346, 2103029936,
            4205898058, 3488803305, 2213092202, 511119119, 1007646771,
            3073627605, 1943398054, 502562944, 981497018, 1629994686,
            3267271036, 2280377805, 332211934, 1753822260, 3493117412,
            2419214408, 1028160117, 3813998591, 3690965796, 4102912634,
            4118476687, 1030000784, 2056320234, 3197984607, 1633665598,
            1077747744, 2149588384, 3490670696, 3177736149, 885660186,
            1746587762, 1102556846, 2192447788, 1971172532, 3937716574,
            2832094292, 1297390105, 998216595, 1989405925, 1143939618,
            2283933098, 3361956964, 2372143081, 4281004529, 3824278290,
            3872158579, 3514023842, 612504082, 1209176154, 2155495488,
            490748509, 273156104, 537411624, 2610283459, 734222056, 3319786732,
            2548839291, 2874006491, 1272682128, 1606459809, 3198247199,
            126979469, 244128899, 2059943229, 4097701321, 861640599, 1721224433,
            0, 0, 2214186959, 466564820, 1450060587, 2888516999, 3974198902,
            3312883635, 434537090, 847406256, 2972243670, 2144796329, 918756123,
            1813764215, 2004137397, 4004888923, 1136570287, 2259620137,
            3558697578, 3043653599, 2699710544, 1565571597, 2320975173,
            155521612, 4214813683, 3958623e3, 1621962800, 3224411632,
            3284463599, 2616142708, 2128232255, 4232046019, 2865190229,
            1230344732, 1507566242, 2996992272, 3387550442, 2414478181,
            3395970405, 2305101804, 1761852090, 3535452520, 1581920047,
            3157222803, 2643378368, 666914535, 2707480286, 1608433281,
            956046364, 1880940652, 3880189437, 3556621102, 2585742669,
            692933220, 964072082, 1922229472, 3942282613, 3379924924, 204867078,
            403058718, 162433674, 311043224, 2035004082, 4071815488, 3515213542,
            3219546969, 478023182, 940470326, 1055334175, 2082469987,
            3293930082, 2506242039, 3040531668, 2010443427, 1300342952,
            2594711858, 827496086, 1654047988, 4016241145, 3287915322,
            2544092613, 868574966, 1242572069, 2485466545, 2997573977,
            2035937824, 365986948, 713315502, 3838145138, 3581065127,
            1928083769, 3828995549, 2551598156, 759978593, 3163840094,
            1700710971, 4036982904, 4252559237, 1894070328, 3761823192,
            93883532, 176952454, 3206009297, 1674692274, 1474602405, 2930065675,
            3651265250, 2950841165, 3259916641, 2573283320, 2067968947,
            4138987845, 1110712609, 2216760741, 621321372, 1251775702,
            1022238238, 2015293542, 2254521155, 289612370, 2477901767,
            1002927868, 3847224572, 3623662379, 136578052, 268705812,
            2732806481, 1498526216, 790993305, 1587133639, 3659689325,
            2842513348, 442830093, 873293881, 3917085434, 3489301301,
            2741624799, 1541387908, 4238966398, 3850295195, 1209607204,
            2418294196, 1996372795, 3963340247, 1268427691, 2527801661,
            2180042446, 533610193, 580456721, 1141999701, 58953615, 110038153,
            2617527886, 625887851, 1936111543, 3870806353, 3420515307,
            2347436896, 2025929788, 4030528972, 536707457, 1048673471,
            893424788, 1788138750, 4078761975, 4227328780, 1863891385,
            3736707431, 646648595, 1276352607, 1481714732, 2955705756,
            3137721299, 1809045176, 3549226983, 3152505692, 3694751342,
            2775472075, 2510996676, 935620339, 102433539, 201529359, 2900121174,
            1163299347, 2287879236, 222566985, 4271931263, 3783253918,
            1334356393, 2661884215, 1416047146, 2821344642, 1795865531,
            3602624877, 2676474305, 599869154, 2800833363, 1364435458,
            2775768284, 1474080395, 374541067, 738940967, 654417309, 1318952147,
            3626724460, 2909554625, 1654927665, 3291583989, 3908269172,
            3446966201, 4044748534, 4294370057, 2353808966, 88476227,
            1168485548, 2326530342, 263555465, 512310423, 682890260, 1343529028,
            3753566689, 2749455170, 749082134, 1477881934, 1962359354,
            3896167890, 3523635561, 3110694864, 306252041, 604588077,
            3772215408, 3715147693, 1903146678, 3803634004, 3172913360,
            1741737655, 3352751597, 2481798014, 2246233292, 399257307,
            2221425218, 356657751, 757897368, 1519957186, 1441637540,
            2862893326, 1349855272, 2686999944, 3095813212, 1834801713,
            3983276280, 3354956607, 297961094, 579224740,
          ]),
          l = new Uint32Array([
            2016466968, 408950976, 2940610083, 596386565, 4187076806,
            3326068350, 1875770344, 3901220883, 2702429063, 2267449164,
            1651315128, 3101341865, 84019457, 17039624, 1855851855, 1327583042,
            4000095030, 920139437, 72482726, 2795677273, 3183021266, 3530543838,
            116854517, 4126406139, 2163381881, 2046392815, 3470667887,
            1872850783, 4013911441, 2440991228, 128251986, 1381323434,
            4257236832, 1620926503, 1986344380, 3167403145, 3442161563,
            2606144428, 2348911246, 2382532100, 358339235, 2746655601,
            1008233484, 204475488, 2331411579, 2079423487, 3781853237,
            903099829, 1765471517, 494149096, 1205711840, 3769098323,
            2897420759, 3615217654, 3986267330, 3257909854, 2522628910,
            783822445, 2056661323, 1261521762, 568417790, 4276092579, 380556631,
            1463900034, 1093319957, 357832104, 3069110391, 2009167775,
            3949892151, 937179045, 1456971493, 3853772155, 3642954655,
            2672205708, 402465776, 4041732307, 2140414026, 1245006442,
            2510898394, 3662666398, 632332888, 1484609786, 3398422473,
            3372468486, 2370993193, 698624341, 571759114, 170396240, 1333743793,
            2986258913, 442354080, 2696585321, 3671463019, 1806789503,
            2870466949, 2234418524, 1936145597, 3184442753, 884641629,
            1567186386, 1344311312, 272633984, 66390004, 4109890803, 3230391755,
            3406547734, 3330069310, 1056456429, 285879557, 85198120, 3872290919,
            1736533791, 1406506980, 3837256819, 3142451751, 664545061,
            1484944193, 1092174130, 2634786699, 2333510444, 22279847,
            2812716881, 2499457661, 2112454095, 4214704533, 2507052508,
            2678937304, 3628587150, 820736251, 4224449419, 1908526574,
            4003458595, 2448997244, 2095938759, 3821826406, 1720018455,
            2393340893, 3713260966, 1261350679, 391911352, 1183728967,
            1191266050, 3693157022, 2655166084, 3314144458, 3390032414,
            2572834861, 766782837, 2036543167, 3217473425, 453918471, 119277368,
            591899821, 2911808769, 800370778, 1517640426, 3038506883,
            2201387884, 4284921395, 869020549, 4073086051, 1670472511,
            168038914, 34079248, 944346026, 2861738553, 2833440369, 1910075823,
            3482175176, 3355953166, 2100482329, 425990600, 1888631625,
            1228491122, 2595184601, 3645102470, 502870514, 4075811523,
            1222355171, 3819692875, 716618075, 1534155746, 2450373768,
            2283440180, 3358146202, 2589104804, 3192654630, 647505453,
            4200906546, 851980941, 1249728944, 2969219305, 1792013033,
            3917736219, 857634575, 255594360, 2797024213, 3581138406,
            3122525312, 2151317620, 2086741950, 3200433817, 3733449677,
            3440626982, 3832056116, 886060221, 1972384328, 1211975802,
            618878207, 4292607915, 2415168890, 2062908151, 3929891984,
            2423951604, 1052679519, 1600217026, 2688564512, 545267741,
            3587182440, 1757243495, 1916062234, 443030224, 742504366,
            2927799833, 1584758196, 3035280585, 430493268, 1414354074,
            3845881747, 2474021868, 2856595234, 579346957, 3922223972,
            1686987783, 318712561, 4058247643, 2733034611, 1943106495,
            1512342034, 306713232, 1568700992, 1075658810, 672155656, 136316992,
            3902510531, 3274425174, 2076565484, 3969379379, 2427145691,
            3679181718, 526368929, 2713624929, 2198311309, 2366541084,
            3380267069, 1039416821, 4046674839, 2540083148, 0, 0, 3565418959,
            3474706230, 2270588459, 732703557, 3018645878, 1992652439,
            2954487426, 2184348260, 2846959830, 3598702334, 2000077595,
            460069848, 1534555317, 3052320193, 692305583, 2944839441,
            3755220330, 1790274167, 228649552, 1348292794, 1284134725,
            1158235410, 419117299, 4092326859, 4032867632, 817901725,
            1958986991, 4019973931, 3279870527, 1073496037, 480954197,
            1430869394, 274324386, 2729615993, 1707731434, 3935300099,
            3972688485, 1703503119, 1751712698, 3134372537, 2472430127,
            800862053, 3885862592, 3223830606, 2174836958, 3730824894,
            1815673884, 477109472, 786908925, 4258528699, 1687822157,
            1294552402, 3761862290, 2456982244, 3169516149, 1976137103,
            504116742, 102237744, 2550771338, 2316470820, 1081691058,
            3002249977, 1506903526, 3871336035, 907836942, 238554736,
            1665066783, 528228344, 4156839266, 1653957175, 2746563284,
            3564623086, 843940264, 2828707881, 4096873110, 2523043524,
            988766969, 4190370203, 4137132997, 3308504422, 2974421029,
            630465845, 548580185, 1501125106, 2920665220, 2217378900,
            2816787826, 1926591159, 3715296313, 971258325, 1637357132,
            1278037082, 1002214494, 1583701706, 2247139192, 2029877479,
            3631277368, 954218717, 2248513676, 2349501460, 2998867921,
            3512979910, 190309541, 2779686209, 1306108386, 3803177539,
            4173483617, 1637441839, 1165705907, 3019289585, 2772579361,
            562307349, 3592751260, 2622135444, 1715269150, 511188720,
            1384538435, 1125204770, 4237537735, 3342583670, 736448508,
            4242013363, 336077828, 68158496, 144892753, 1364808114, 3341755801,
            2573113788, 3302629997, 1839820111, 958031117, 221515112, 904493562,
            4207934083, 2225301983, 3747340214, 2617026942, 2128969431,
            3024623908, 613426237, 3614899771, 1005337541, 1028364971,
            2878778161, 3514953934, 3458190910, 1428330769, 289673608,
            2298708879, 2399571724, 1805386830, 1311067722, 1366517431,
            3085350865, 1623974123, 3951815435, 3430465852, 1022377213,
            3206544769, 2168357244, 4264902804, 2490012884, 217259255,
            4160485355, 1735334073, 3118381473, 1596361491, 323752856,
            2623033644, 749743229, 3099264467, 3547059158, 1557368039,
            3887851371, 3420207470, 1856335447, 4086672068, 3291989102,
            252058371, 51118872, 330095702, 1447384714, 1233673796, 1141720090,
            2667487359, 2145484767, 927959209, 2845747489, 2186569514,
            715663949, 1835731643, 3151412145, 3802105793, 3240345926, 44495187,
            1397838754, 2342875868, 3696745646, 655774475, 187435864,
            3542548893, 2639175068, 3252169580, 1823304775, 4116882481,
            834941333, 3119051636, 1959621767, 166794742, 4143970019,
            1133268038, 1174750730, 642098604, 2894769161, 2534389129,
            2300479804, 1143518228, 340792480, 1121958625, 3785613659,
            1311548950, 374871728, 3530880826, 988297933, 3503425129,
            1773758831, 756171017, 153356616, 2917193584, 1893560487,
            1416720310, 3068311257, 3082624720, 3496464590, 2127025901,
            3985894715, 3682984652, 3424111662, 1468295234, 1108689450,
            3257740440, 2556074164, 240512420, 2762646601, 2286974248,
            681584733, 834176604, 1550671066, 1072524280, 4173854867,
            2752627334, 2250409540,
          ]),
          d = new Uint32Array([
            3229102296, 404250648, 95372838, 589532195, 2130284984, 3334881222,
            326094331, 3907553256, 1285624779, 2273781383, 2841799953,
            3099122360, 134545929, 16843777, 1114545677, 1330585935, 2918083739,
            909563958, 1493455359, 2795938470, 3736975628, 3537006546,
            4211537678, 4126536693, 4018205334, 2038036857, 1607392816,
            1869586799, 4243537773, 2442231441, 2852627704, 1381127506,
            670941255, 1616944480, 2306237749, 3166489276, 2899127095,
            2610648731, 76284298, 2391671438, 1897225170, 2745415331,
            1614551148, 202125324, 4287297156, 2071720315, 3051448960,
            892720181, 3899210485, 488469533, 1397218739, 3772819424,
            4138513185, 3621223383, 1592629660, 3267506114, 1838570563,
            774813742, 1652201001, 1263219019, 2736906589, 4278116350,
            2182524629, 1465336151, 2822843069, 353719317, 2679566056,
            2004337015, 2783669906, 926407735, 2069288862, 3857036261,
            2363040531, 2678015647, 3541564707, 4042319856, 1786745888,
            1246377290, 2660608324, 3671740378, 4196774050, 1482194264,
            113938383, 3385394121, 1435325052, 690594857, 1344410714, 168437770,
            3780083536, 2981232305, 1763335625, 2694888096, 2145048084,
            1802219883, 1554716633, 2240097925, 2171823932, 3183333053,
            3526670991, 1566402909, 2152734864, 269500432, 4077122823,
            4109694964, 381717469, 3419081675, 3989208275, 1044314174,
            672205357, 84218885, 535219832, 1734836583, 1934874007, 3840194532,
            633032194, 656907303, 844661363, 1094785345, 748489639, 2341148299,
            1359041526, 2812782247, 3482647218, 2105403773, 3707451209,
            2509598357, 2392829270, 3638052824, 2335239024, 4227582971,
            594657741, 4008615918, 3348232379, 2088562044, 400804977,
            1717994854, 2794366843, 3722269661, 3091934895, 387406871, 38178373,
            1195835719, 2229018906, 2661171870, 516262356, 3402239946,
            1972984408, 757969965, 2440651566, 3217016511, 941297215, 117906439,
            19089324, 2913832621, 3928994992, 1515877722, 1823808495,
            2206414467, 2248107702, 859032627, 1072875100, 1667469667,
            269091858, 33687554, 959990163, 2863305386, 2947080926, 1903286641,
            248483270, 3368552392, 3363648209, 421094425, 1919980091,
            1229535561, 2258284383, 3654894553, 3273521457, 4076007410,
            1263066024, 3823348707, 3794450105, 1532719451, 881987004,
            2290621064, 2764581182, 2593804954, 767446027, 640063526,
            2381997247, 842188850, 3913973081, 2964388528, 459984882,
            3924394985, 2016616055, 252656655, 3869685555, 3587535829,
            1958354420, 2155887232, 2575065383, 3200172734, 652117995,
            3452769229, 3185862793, 875876404, 2054524978, 1212693832,
            2871321428, 4294958079, 4153406605, 2054878586, 4108991844,
            2425387664, 3258891933, 1600086367, 497041469, 539000864,
            1742065679, 1751694696, 3497145546, 437938202, 422330807,
            2930672302, 3378410877, 3031755444, 2585372878, 1414810964,
            3974445951, 2475914899, 229262383, 572688418, 132761699, 1684311396,
            3675455274, 4059161585, 3215124172, 1936970099, 2421826690,
            303187986, 979206266, 1077943616, 1076367432, 134750216, 1458084757,
            3284347843, 863749599, 3974928364, 2526063437, 3688582107,
            1629446080, 2711731873, 478349201, 2374831757, 4123622088,
            1027470397, 3438359387, 2543281815, 0, 0, 919897081, 3486456783,
            1166497390, 724282411, 2545151201, 1987495286, 1689262566,
            2189570690, 4272533800, 3604381654, 3631691459, 454781979,
            3243997044, 3048599221, 287916990, 2947516079, 2011157533,
            1785378154, 3121455338, 1347444048, 307006039, 1162152261,
            3407412024, 4092849139, 2649776301, 808501296, 729072580,
            4025457647, 3854794458, 1061157951, 2451352263, 1431652693,
            2031114715, 2728571554, 57002473, 3941240810, 267176554, 1701153125,
            3110627587, 3132805818, 1704156746, 791657519, 1323801998,
            3233818560, 3196166496, 3739115486, 3765188860, 471625756,
            3140413254, 4261270525, 1382324767, 1296902477, 3839900022,
            2459071122, 2411522810, 1970653557, 807275574, 101062662, 613943726,
            2324304522, 4181752139, 2998071986, 1666830725, 3873882086,
            1882594430, 235812878, 4167253735, 522157087, 938984533, 1650627938,
            4003706170, 3570694100, 691162497, 2829621928, 3304337746,
            2526438038, 2604330850, 4193895417, 1727436707, 3318035397,
            900811280, 623219749, 4062229163, 1499035993, 1420694992,
            2223254148, 3081233605, 1920128370, 3588059884, 960095289,
            1516345366, 1280060748, 3392912532, 1583244638, 3884314783,
            2021195128, 3721949413, 943251512, 344327576, 2357987980,
            3333603095, 3520160721, 1091262436, 2779098789, 1129175457,
            3806506978, 804831822, 1633786209, 4047862594, 3014915763,
            363151924, 555844641, 2497062152, 2627488412, 4033232110, 505313310,
            575833697, 1128468803, 1996264369, 3351722951, 3005998415,
            4244428796, 538183716, 67375108, 2986910435, 1364285777, 3167170341,
            2576965273, 1338300962, 1835903341, 1748572773, 218969101,
            2201348473, 4210741242, 3062145897, 3755957215, 3617324201,
            2122245502, 1035225113, 606375972, 3319232254, 993782843, 826100634,
            2880149163, 1053917680, 3469615054, 2287280793, 286344209,
            210305923, 2408515215, 1248566276, 1313744206, 3511776102,
            3082282679, 190893024, 3958082539, 4258035905, 1010626620,
            2092900349, 2172731009, 3573429568, 2492754580, 3943494428,
            4160224247, 2707910424, 3115966137, 2556372619, 320031763,
            2107398225, 741126188, 3602430725, 3553848275, 1801245580,
            3890723815, 1472977977, 1852745070, 1861457322, 3301193668,
            403637787, 50531331, 2316545244, 1448494422, 441026654, 1145310532,
            3751739040, 2139087231, 557272968, 2846465705, 1300386919,
            707438634, 2976738058, 3149649595, 1189257095, 3250660289,
            2718082801, 1397969235, 2928387442, 3705427932, 1478956627,
            185281547, 2631083777, 2644332189, 1203886123, 1819061612,
            2515886756, 825345073, 2277107955, 1953811828, 3809079573,
            4143382518, 172198988, 1178993990, 153503141, 2896988844,
            1016532917, 2307464841, 2688821428, 336875540, 1531109306,
            3789661153, 2957913254, 370563094, 3453121783, 976939066,
            1875956230, 1768536425, 1210913345, 151593993, 2813190359,
            1886444912, 3646189935, 3065438902, 3468147998, 3503318992,
            998164438, 3991770093, 786138594, 3435927500, 710378600, 1111627074,
            3032624428, 2560121496, 1225676269, 2762255012, 1569214581,
            673751080, 3660691590, 1549561180, 2470440299, 4177053688,
            1151603138, 2256937606,
          ]),
          p = new Uint32Array([
            415266864, 3625457760, 587575110, 639837068, 3330210193, 3100034623,
            3893587917, 4226345095, 2269946131, 3414656806, 3098108525,
            297318618, 17302786, 151060740, 1329753758, 223301409, 917368428,
            2604021464, 2790851665, 4289111714, 3537812921, 215143023,
            4126869239, 251000307, 2045739250, 2524543481, 1868549854,
            812609441, 2449272639, 1838256510, 1386874788, 4166144597,
            1613233600, 1197498525, 3163125349, 901561546, 2611793195,
            932944726, 2382662657, 2324598274, 2742097243, 3533939638,
            207633432, 1812728880, 2080344822, 2222685169, 901112170,
            2150970836, 501770554, 4112326004, 3763554269, 3017859239,
            3623267507, 567793531, 3261001113, 2630009391, 778933852,
            1127100088, 1264745110, 692800305, 4272103905, 1576992479,
            1468143278, 3579270977, 363348266, 3172275540, 2006955758,
            3900143553, 933620590, 2453092316, 3850065623, 2665866675,
            2676807971, 329228102, 4040366077, 602992871, 1248493460, 541739573,
            3667826089, 1155193423, 1492788656, 2723698813, 3372665487,
            3486107907, 693472594, 2083072420, 173023764, 1510607400,
            2984333183, 1353822718, 2691242589, 3382747322, 1803541206,
            342584241, 2237442839, 3649406254, 3179377511, 1019067854,
            1574057146, 2405260649, 276844576, 2416971840, 4109566965,
            133494007, 3407265931, 3721120523, 1055770236, 3544071928, 86511882,
            755303700, 1730143950, 2020042625, 3832763349, 2548360375,
            656784206, 36120476, 1093818498, 1933656345, 2334956811, 2810940182,
            2807103827, 4138182566, 2110756090, 2994568681, 2514287415,
            1234539886, 3633225645, 1457051719, 4220203243, 1895562187,
            3995300289, 3454987935, 2093453816, 3145497837, 1712841676,
            1902536325, 3718680231, 2078137683, 397953838, 2937526108,
            1191331470, 1162299137, 2659507233, 446602818, 3391014281,
            3570059791, 762681690, 1479355828, 3213982051, 784318406, 121117454,
            1057425180, 2902532935, 2897063310, 1525297076, 2958711413,
            2204939547, 4018373430, 864419686, 3056808908, 1665135302,
            1550017425, 34605572, 302121480, 2855876681, 2477435538, 1907337442,
            3731976665, 3356413837, 3335047175, 432569650, 3508083044,
            1232236690, 994658617, 3649477295, 1608112451, 4072873465,
            838005487, 3813361883, 2833507243, 1541548726, 3109772145,
            2285146637, 3163064346, 2594490409, 1050319442, 640532044,
            187049624, 848165476, 3207738056, 2968078973, 1504751866,
            3910888143, 4075415939, 259535646, 1997475644, 3588662967,
            869651827, 2155133469, 4102062138, 3197729889, 666812098,
            3441876615, 3956133139, 884860008, 2301899984, 1215985040,
            843597885, 4289406179, 1426063323, 2063044596, 2373614325,
            2431969853, 1687195770, 1606565566, 2640273249, 538812480,
            1025515648, 1751635408, 258500797, 449868340, 3390708328,
            2920885313, 3081678466, 3033095797, 2108994794, 1419385256,
            3461633101, 2481775931, 2140377974, 571320900, 790766216,
            1678240200, 1667523725, 4057666303, 720499171, 1941938918,
            3430118353, 311450148, 2182222408, 1077566848, 2051031069,
            138422288, 1208485920, 3277252763, 2512634667, 3962796997,
            3756846231, 3684077739, 1306254155, 2707496799, 3231818174,
            2367456007, 2441973006, 1039518074, 3359456756, 2546790707,
            1536661350, 0, 0, 3476477059, 4191145755, 725976918, 1848322988,
            1989653484, 3782637253, 2187636761, 3867312690, 3607013809,
            685168255, 467171126, 3273333612, 3049347959, 1958065646,
            2937137475, 3199184774, 1786240980, 493513397, 1354370464,
            3931131997, 1158827146, 1464157449, 4090173691, 955511787,
            815657056, 2905616576, 4012602563, 3304058779, 1072022398,
            3661578236, 1435638954, 3344258377, 2725843033, 3684868786,
            3926091209, 3924486799, 1695542474, 1785030025, 3132713065,
            62569170, 795186014, 1244606396, 3226396573, 2394996775, 3737026977,
            1625218655, 484469816, 4229700720, 4256902887, 1191050707,
            1297245338, 525159721, 2464473145, 1989317234, 1972354282,
            4202001865, 103816716, 906364440, 2317654025, 2928314898,
            3002679417, 1270002418, 3865270737, 2246502079, 242234908,
            2114850360, 536372030, 3877576572, 1647835076, 1432511125,
            3572409269, 987026551, 2821272141, 2175314074, 2529489969,
            1385600610, 4187699951, 1660549571, 3311859351, 2747647283,
            624275786, 270869908, 1509040306, 2874759545, 2220142101,
            3498345514, 1924638692, 3312612053, 970317170, 3963173348,
            1280991640, 374098989, 1590311868, 2489212517, 2028439024,
            2675472637, 954062960, 3845667040, 2350155269, 2559347722,
            3519460031, 399626595, 2772503383, 3836061102, 3796061657,
            2716000943, 1630533826, 1315004825, 3018933627, 1119073270,
            555066690, 874586500, 2626999845, 144481354, 519071292, 3994951288,
            1126322822, 1631798033, 3346463891, 2982659899, 4239600613,
            1341979863, 69211144, 604242960, 1370622114, 3813757273, 2579285807,
            630823262, 1833944282, 577596841, 224934170, 1695354164, 4202903017,
            2046491343, 3753280675, 1776279387, 2128059388, 2843639525,
            608023624, 421799056, 1002821494, 4265294828, 2872130891,
            2594941846, 3460223361, 4040085023, 294147362, 2568032580,
            2399963395, 2207223558, 1313500060, 72240677, 3083948403,
            1723316198, 3943391435, 3773557643, 1023265912, 3241950448,
            2172436255, 4253122878, 2496986677, 1083479146, 4159376627,
            486012923, 3114362735, 414824926, 328752934, 2333283148, 746429528,
            1361849520, 3554064571, 97768299, 3882573011, 2364008379,
            1851247580, 963538597, 3295605653, 2865022007, 51908358, 453182220,
            1451889580, 3696645701, 1142573448, 1581532173, 2145361662,
            2692710369, 2837526351, 2292820382, 709722708, 1730816680,
            3148967275, 180075478, 3242648223, 2277622051, 1403126438,
            4048769873, 3702426533, 1927076951, 190326550, 1393232684,
            2644300583, 27106638, 1816642008, 728525997, 831911266, 2754687428,
            1955052008, 4084495565, 4142074353, 368506623, 1175077772,
            1279673861, 2886280773, 2779557002, 2302449423, 3045689630,
            346047528, 3021214800, 3780854495, 3135365539, 380653100,
            2786465368, 986567284, 4147788520, 1768935634, 107571641, 155725074,
            1091111204, 1890037216, 3614470365, 3067696241, 1874245346,
            3503208381, 517001319, 3980099271, 3605917075, 3425622917,
            3805072407, 1110071172, 1749172757, 2561983021, 748197978,
            2756251221, 3986990250, 677218384, 1965566112, 1557803448,
            2254199917, 4170399725, 1811478727, 2252645393, 3263596066,
          ]),
          m = new Uint32Array([
            1612234872, 819468312, 2351105455, 1176904483, 1069973241,
            2444805830, 2280133487, 3455838440, 646401185, 332105607,
            3669535074, 1829877944, 67176453, 34144513, 558842478, 2651672399,
            3627462126, 1822111286, 2728810756, 1375708838, 1876090557,
            3104625362, 4092984070, 4144952821, 4185517952, 4069947769,
            2708430798, 3727716207, 2123496687, 1064145297, 1431480839,
            2767737426, 2640324605, 3225903200, 3401353590, 1698020540,
            1453042893, 725064603, 42861708, 25857678, 3064164629, 1540531107,
            806117436, 409734156, 4051435402, 4135877499, 3560289761,
            1786787125, 1948117097, 989142301, 2816496455, 3719553248,
            2077750956, 3005339607, 801267437, 2577187522, 3090050454,
            1547906606, 827023994, 2519288651, 3758007073, 3781033726,
            1096253974, 2933217111, 1410705473, 717034773, 3245842358,
            4008212343, 3694634475, 1855076151, 3018160982, 3617514981,
            1184861401, 588488607, 3891319575, 4246991088, 894069375,
            2485144138, 1339727509, 2839861978, 2102983205, 2963429464,
            63506122, 2412759497, 2754172301, 1383868713, 671764514, 341445130,
            4273070415, 2135994801, 3131074842, 1573494944, 2976612314,
            3591662443, 780491947, 400131461, 3468525939, 1732033981,
            1767756340, 3129957725, 1074823248, 546312208, 4160025347,
            4110939380, 197859008, 2346568651, 4164873670, 2094218814,
            335882257, 170722565, 2171019238, 3463997287, 3085202259,
            3583501540, 2619811259, 1308763943, 423703128, 2188591425,
            378219677, 195529611, 2795983105, 1408673703, 3917336468,
            4206001533, 1855315195, 927569301, 1205374623, 2908149976,
            3422260016, 3950050299, 2683183985, 3251498734, 3984377745,
            4173036668, 2238060515, 3429983846, 1407035022, 2809912797,
            1545058379, 783226647, 21430854, 2386904903, 1117684956, 555392670,
            264904389, 2312424138, 3022878105, 1515728173, 3334443385,
            1664008127, 470235163, 239011591, 2393702691, 1202498989,
            1968892463, 3031456346, 914582709, 468681603, 3425928703,
            1723216691, 2439200754, 3327943523, 134352906, 68289026, 2460629304,
            1234414250, 3648106408, 3806228849, 130551503, 2378614984,
            1679411325, 852564249, 961114736, 2453358921, 1138329242,
            2942294489, 4025664285, 4180800242, 2883799880, 3685278691,
            1901847082, 3065600859, 445133970, 230459528, 1385866440, 691968666,
            2552638910, 1275799078, 3358756346, 1690251826, 4205898058,
            2103029936, 2213092202, 3488803305, 1007646771, 511119119,
            1943398054, 3073627605, 981497018, 502562944, 3267271036,
            1629994686, 332211934, 2280377805, 3493117412, 1753822260,
            1028160117, 2419214408, 3690965796, 3813998591, 4118476687,
            4102912634, 2056320234, 1030000784, 1633665598, 3197984607,
            2149588384, 1077747744, 3177736149, 3490670696, 1746587762,
            885660186, 2192447788, 1102556846, 3937716574, 1971172532,
            1297390105, 2832094292, 1989405925, 998216595, 2283933098,
            1143939618, 2372143081, 3361956964, 3824278290, 4281004529,
            3514023842, 3872158579, 1209176154, 612504082, 490748509,
            2155495488, 537411624, 273156104, 734222056, 2610283459, 2548839291,
            3319786732, 1272682128, 2874006491, 3198247199, 1606459809,
            244128899, 126979469, 4097701321, 2059943229, 1721224433, 861640599,
            0, 0, 466564820, 2214186959, 2888516999, 1450060587, 3312883635,
            3974198902, 847406256, 434537090, 2144796329, 2972243670,
            1813764215, 918756123, 4004888923, 2004137397, 2259620137,
            1136570287, 3043653599, 3558697578, 1565571597, 2699710544,
            155521612, 2320975173, 3958623e3, 4214813683, 3224411632,
            1621962800, 2616142708, 3284463599, 4232046019, 2128232255,
            1230344732, 2865190229, 2996992272, 1507566242, 2414478181,
            3387550442, 2305101804, 3395970405, 3535452520, 1761852090,
            3157222803, 1581920047, 666914535, 2643378368, 1608433281,
            2707480286, 1880940652, 956046364, 3556621102, 3880189437,
            692933220, 2585742669, 1922229472, 964072082, 3379924924,
            3942282613, 403058718, 204867078, 311043224, 162433674, 4071815488,
            2035004082, 3219546969, 3515213542, 940470326, 478023182,
            2082469987, 1055334175, 2506242039, 3293930082, 2010443427,
            3040531668, 2594711858, 1300342952, 1654047988, 827496086,
            3287915322, 4016241145, 868574966, 2544092613, 2485466545,
            1242572069, 2035937824, 2997573977, 713315502, 365986948,
            3581065127, 3838145138, 3828995549, 1928083769, 759978593,
            2551598156, 1700710971, 3163840094, 4252559237, 4036982904,
            3761823192, 1894070328, 176952454, 93883532, 1674692274, 3206009297,
            2930065675, 1474602405, 2950841165, 3651265250, 2573283320,
            3259916641, 4138987845, 2067968947, 2216760741, 1110712609,
            1251775702, 621321372, 2015293542, 1022238238, 289612370,
            2254521155, 1002927868, 2477901767, 3623662379, 3847224572,
            268705812, 136578052, 1498526216, 2732806481, 1587133639, 790993305,
            2842513348, 3659689325, 873293881, 442830093, 3489301301,
            3917085434, 1541387908, 2741624799, 3850295195, 4238966398,
            2418294196, 1209607204, 3963340247, 1996372795, 2527801661,
            1268427691, 533610193, 2180042446, 1141999701, 580456721, 110038153,
            58953615, 625887851, 2617527886, 3870806353, 1936111543, 2347436896,
            3420515307, 4030528972, 2025929788, 1048673471, 536707457,
            1788138750, 893424788, 4227328780, 4078761975, 3736707431,
            1863891385, 1276352607, 646648595, 2955705756, 1481714732,
            1809045176, 3137721299, 3152505692, 3549226983, 2775472075,
            3694751342, 935620339, 2510996676, 201529359, 102433539, 1163299347,
            2900121174, 222566985, 2287879236, 3783253918, 4271931263,
            2661884215, 1334356393, 2821344642, 1416047146, 3602624877,
            1795865531, 599869154, 2676474305, 1364435458, 2800833363,
            1474080395, 2775768284, 738940967, 374541067, 1318952147, 654417309,
            2909554625, 3626724460, 3291583989, 1654927665, 3446966201,
            3908269172, 4294370057, 4044748534, 88476227, 2353808966,
            2326530342, 1168485548, 512310423, 263555465, 1343529028, 682890260,
            2749455170, 3753566689, 1477881934, 749082134, 3896167890,
            1962359354, 3110694864, 3523635561, 604588077, 306252041,
            3715147693, 3772215408, 3803634004, 1903146678, 1741737655,
            3172913360, 2481798014, 3352751597, 399257307, 2246233292,
            356657751, 2221425218, 1519957186, 757897368, 2862893326,
            1441637540, 2686999944, 1349855272, 1834801713, 3095813212,
            3354956607, 3983276280, 579224740, 297961094,
          ]),
          S = new Uint32Array([
            408950976, 2016466968, 596386565, 2940610083, 3326068350,
            4187076806, 3901220883, 1875770344, 2267449164, 2702429063,
            3101341865, 1651315128, 17039624, 84019457, 1327583042, 1855851855,
            920139437, 4000095030, 2795677273, 72482726, 3530543838, 3183021266,
            4126406139, 116854517, 2046392815, 2163381881, 1872850783,
            3470667887, 2440991228, 4013911441, 1381323434, 128251986,
            1620926503, 4257236832, 3167403145, 1986344380, 2606144428,
            3442161563, 2382532100, 2348911246, 2746655601, 358339235,
            204475488, 1008233484, 2079423487, 2331411579, 903099829,
            3781853237, 494149096, 1765471517, 3769098323, 1205711840,
            3615217654, 2897420759, 3257909854, 3986267330, 783822445,
            2522628910, 1261521762, 2056661323, 4276092579, 568417790,
            1463900034, 380556631, 357832104, 1093319957, 2009167775,
            3069110391, 937179045, 3949892151, 3853772155, 1456971493,
            2672205708, 3642954655, 4041732307, 402465776, 1245006442,
            2140414026, 3662666398, 2510898394, 1484609786, 632332888,
            3372468486, 3398422473, 698624341, 2370993193, 170396240, 571759114,
            2986258913, 1333743793, 2696585321, 442354080, 1806789503,
            3671463019, 2234418524, 2870466949, 3184442753, 1936145597,
            1567186386, 884641629, 272633984, 1344311312, 4109890803, 66390004,
            3406547734, 3230391755, 1056456429, 3330069310, 85198120, 285879557,
            1736533791, 3872290919, 3837256819, 1406506980, 664545061,
            3142451751, 1092174130, 1484944193, 2333510444, 2634786699,
            2812716881, 22279847, 2112454095, 2499457661, 2507052508,
            4214704533, 3628587150, 2678937304, 4224449419, 820736251,
            4003458595, 1908526574, 2095938759, 2448997244, 1720018455,
            3821826406, 3713260966, 2393340893, 391911352, 1261350679,
            1191266050, 1183728967, 2655166084, 3693157022, 3390032414,
            3314144458, 766782837, 2572834861, 3217473425, 2036543167,
            119277368, 453918471, 2911808769, 591899821, 1517640426, 800370778,
            2201387884, 3038506883, 869020549, 4284921395, 1670472511,
            4073086051, 34079248, 168038914, 2861738553, 944346026, 1910075823,
            2833440369, 3355953166, 3482175176, 425990600, 2100482329,
            1228491122, 1888631625, 3645102470, 2595184601, 4075811523,
            502870514, 3819692875, 1222355171, 1534155746, 716618075,
            2283440180, 2450373768, 2589104804, 3358146202, 647505453,
            3192654630, 851980941, 4200906546, 2969219305, 1249728944,
            3917736219, 1792013033, 255594360, 857634575, 3581138406,
            2797024213, 2151317620, 3122525312, 3200433817, 2086741950,
            3440626982, 3733449677, 886060221, 3832056116, 1211975802,
            1972384328, 4292607915, 618878207, 2062908151, 2415168890,
            2423951604, 3929891984, 1600217026, 1052679519, 545267741,
            2688564512, 1757243495, 3587182440, 443030224, 1916062234,
            2927799833, 742504366, 3035280585, 1584758196, 1414354074,
            430493268, 2474021868, 3845881747, 579346957, 2856595234,
            1686987783, 3922223972, 4058247643, 318712561, 1943106495,
            2733034611, 306713232, 1512342034, 1075658810, 1568700992,
            136316992, 672155656, 3274425174, 3902510531, 3969379379,
            2076565484, 3679181718, 2427145691, 2713624929, 526368929,
            2366541084, 2198311309, 1039416821, 3380267069, 2540083148,
            4046674839, 0, 0, 3474706230, 3565418959, 732703557, 2270588459,
            1992652439, 3018645878, 2184348260, 2954487426, 3598702334,
            2846959830, 460069848, 2000077595, 3052320193, 1534555317,
            2944839441, 692305583, 1790274167, 3755220330, 1348292794,
            228649552, 1158235410, 1284134725, 4092326859, 419117299, 817901725,
            4032867632, 4019973931, 1958986991, 1073496037, 3279870527,
            1430869394, 480954197, 2729615993, 274324386, 3935300099,
            1707731434, 1703503119, 3972688485, 3134372537, 1751712698,
            800862053, 2472430127, 3223830606, 3885862592, 3730824894,
            2174836958, 477109472, 1815673884, 4258528699, 786908925,
            1294552402, 1687822157, 2456982244, 3761862290, 1976137103,
            3169516149, 102237744, 504116742, 2316470820, 2550771338,
            3002249977, 1081691058, 3871336035, 1506903526, 238554736,
            907836942, 528228344, 1665066783, 1653957175, 4156839266,
            3564623086, 2746563284, 2828707881, 843940264, 2523043524,
            4096873110, 4190370203, 988766969, 3308504422, 4137132997,
            630465845, 2974421029, 1501125106, 548580185, 2217378900,
            2920665220, 1926591159, 2816787826, 971258325, 3715296313,
            1278037082, 1637357132, 1583701706, 1002214494, 2029877479,
            2247139192, 954218717, 3631277368, 2349501460, 2248513676,
            3512979910, 2998867921, 2779686209, 190309541, 3803177539,
            1306108386, 1637441839, 4173483617, 3019289585, 1165705907,
            562307349, 2772579361, 2622135444, 3592751260, 511188720,
            1715269150, 1125204770, 1384538435, 3342583670, 4237537735,
            4242013363, 736448508, 68158496, 336077828, 1364808114, 144892753,
            2573113788, 3341755801, 1839820111, 3302629997, 221515112,
            958031117, 4207934083, 904493562, 3747340214, 2225301983,
            2128969431, 2617026942, 613426237, 3024623908, 1005337541,
            3614899771, 2878778161, 1028364971, 3458190910, 3514953934,
            289673608, 1428330769, 2399571724, 2298708879, 1311067722,
            1805386830, 3085350865, 1366517431, 3951815435, 1623974123,
            1022377213, 3430465852, 2168357244, 3206544769, 2490012884,
            4264902804, 4160485355, 217259255, 3118381473, 1735334073,
            323752856, 1596361491, 749743229, 2623033644, 3547059158,
            3099264467, 3887851371, 1557368039, 1856335447, 3420207470,
            3291989102, 4086672068, 51118872, 252058371, 1447384714, 330095702,
            1141720090, 1233673796, 2145484767, 2667487359, 2845747489,
            927959209, 715663949, 2186569514, 3151412145, 1835731643,
            3240345926, 3802105793, 1397838754, 44495187, 3696745646,
            2342875868, 187435864, 655774475, 2639175068, 3542548893,
            1823304775, 3252169580, 834941333, 4116882481, 1959621767,
            3119051636, 4143970019, 166794742, 1174750730, 1133268038,
            2894769161, 642098604, 2300479804, 2534389129, 340792480,
            1143518228, 3785613659, 1121958625, 374871728, 1311548950,
            988297933, 3530880826, 1773758831, 3503425129, 153356616, 756171017,
            1893560487, 2917193584, 3068311257, 1416720310, 3496464590,
            3082624720, 3985894715, 2127025901, 3424111662, 3682984652,
            1108689450, 1468295234, 2556074164, 3257740440, 2762646601,
            240512420, 681584733, 2286974248, 1550671066, 834176604, 4173854867,
            1072524280, 2250409540, 2752627334,
          ]);
        class Whirlpool {
          constructor() {
            ((this.state = new Uint32Array(16)),
              (this.msg = new Uint32Array(16)),
              (this.block = e.allocUnsafe(64)),
              (this.size = n));
          }
          init() {
            for (let t = 0; t < 16; t++) this.state[t] = 0;
            return ((this.size = 0), this);
          }
          update(t) {
            return (i(e.isBuffer(t)), this._update(t, t.length), this);
          }
          final() {
            return this._final(e.allocUnsafe(64));
          }
          _update(t, e) {
            i(this.size !== n, "Context already finalized.");
            let r = 63 & this.size,
              s = 0;
            if (((this.size += e), r > 0)) {
              let i = 64 - r;
              if (
                (i > e && (i = e),
                t.copy(this.block, r, s, s + i),
                (r += i),
                (e -= i),
                (s += i),
                r < 64)
              )
                return;
              this.transform(this.block, 0);
            }
            while (e >= 64) (this.transform(t, s), (s += 64), (e -= 64));
            e > 0 && t.copy(this.block, 0, s, s + e);
          }
          _final(t) {
            i(this.size !== n, "Context already finalized.");
            const e = 63 & this.size,
              r = 8 * this.size;
            (A(o, r * (1 / 4294967296), 24),
              A(o, r, 28),
              this._update(a, 1 + ((95 - e) & 63)),
              this._update(o, 32));
            for (let i = 0; i < 16; i++)
              (A(t, this.state[i], 4 * i), (this.state[i] = 0));
            for (let i = 0; i < 16; i++) this.msg[i] = 0;
            for (let i = 0; i < 64; i++) this.block[i] = 0;
            return ((this.size = n), t);
          }
          transform(t, e) {
            const r = this.msg;
            for (let o = 0; o < 16; o++) r[o] = w(t, e + 4 * o);
            const i = new Uint32Array(16),
              s = new Uint32Array(16),
              n = new Uint32Array(16);
            for (let o = 0; o < 16; o++)
              ((i[o] = this.state[o]), (n[o] = r[o] ^ i[o]));
            for (let o = 1; o < 11; o++) {
              for (let t = 0; t < 8; t++)
                ((s[2 * t + 0] =
                  0 ^
                  h[2 * ((i[((0 + t) % 8) * 2 + 0] >>> 24) & 255) + 0] ^
                  u[2 * ((i[((7 + t) % 8) * 2 + 0] >>> 16) & 255) + 0] ^
                  f[2 * ((i[((6 + t) % 8) * 2 + 0] >>> 8) & 255) + 0] ^
                  l[2 * ((i[((5 + t) % 8) * 2 + 0] >>> 0) & 255) + 0] ^
                  d[2 * ((i[((4 + t) % 8) * 2 + 1] >>> 24) & 255) + 0] ^
                  p[2 * ((i[((3 + t) % 8) * 2 + 1] >>> 16) & 255) + 0] ^
                  m[2 * ((i[((2 + t) % 8) * 2 + 1] >>> 8) & 255) + 0] ^
                  S[2 * ((i[((1 + t) % 8) * 2 + 1] >>> 0) & 255) + 0] ^
                  (0 === t ? c[2 * o + 0] : 0)),
                  (s[2 * t + 1] =
                    0 ^
                    h[2 * ((i[((0 + t) % 8) * 2 + 0] >>> 24) & 255) + 1] ^
                    u[2 * ((i[((7 + t) % 8) * 2 + 0] >>> 16) & 255) + 1] ^
                    f[2 * ((i[((6 + t) % 8) * 2 + 0] >>> 8) & 255) + 1] ^
                    l[2 * ((i[((5 + t) % 8) * 2 + 0] >>> 0) & 255) + 1] ^
                    d[2 * ((i[((4 + t) % 8) * 2 + 1] >>> 24) & 255) + 1] ^
                    p[2 * ((i[((3 + t) % 8) * 2 + 1] >>> 16) & 255) + 1] ^
                    m[2 * ((i[((2 + t) % 8) * 2 + 1] >>> 8) & 255) + 1] ^
                    S[2 * ((i[((1 + t) % 8) * 2 + 1] >>> 0) & 255) + 1] ^
                    (0 === t ? c[2 * o + 1] : 0)));
              for (let t = 0; t < 16; t++) i[t] = s[t];
              for (let t = 0; t < 8; t++)
                ((s[2 * t + 0] =
                  0 ^
                  h[2 * ((n[((0 + t) % 8) * 2 + 0] >>> 24) & 255) + 0] ^
                  u[2 * ((n[((7 + t) % 8) * 2 + 0] >>> 16) & 255) + 0] ^
                  f[2 * ((n[((6 + t) % 8) * 2 + 0] >>> 8) & 255) + 0] ^
                  l[2 * ((n[((5 + t) % 8) * 2 + 0] >>> 0) & 255) + 0] ^
                  d[2 * ((n[((4 + t) % 8) * 2 + 1] >>> 24) & 255) + 0] ^
                  p[2 * ((n[((3 + t) % 8) * 2 + 1] >>> 16) & 255) + 0] ^
                  m[2 * ((n[((2 + t) % 8) * 2 + 1] >>> 8) & 255) + 0] ^
                  S[2 * ((n[((1 + t) % 8) * 2 + 1] >>> 0) & 255) + 0] ^
                  i[2 * t + 0]),
                  (s[2 * t + 1] =
                    0 ^
                    h[2 * ((n[((0 + t) % 8) * 2 + 0] >>> 24) & 255) + 1] ^
                    u[2 * ((n[((7 + t) % 8) * 2 + 0] >>> 16) & 255) + 1] ^
                    f[2 * ((n[((6 + t) % 8) * 2 + 0] >>> 8) & 255) + 1] ^
                    l[2 * ((n[((5 + t) % 8) * 2 + 0] >>> 0) & 255) + 1] ^
                    d[2 * ((n[((4 + t) % 8) * 2 + 1] >>> 24) & 255) + 1] ^
                    p[2 * ((n[((3 + t) % 8) * 2 + 1] >>> 16) & 255) + 1] ^
                    m[2 * ((n[((2 + t) % 8) * 2 + 1] >>> 8) & 255) + 1] ^
                    S[2 * ((n[((1 + t) % 8) * 2 + 1] >>> 0) & 255) + 1] ^
                    i[2 * t + 1]));
              for (let t = 0; t < 16; t++) n[t] = s[t];
            }
            for (let o = 0; o < 16; o++) this.state[o] ^= n[o] ^ r[o];
          }
          static hash() {
            return new Whirlpool();
          }
          static hmac() {
            return new s(Whirlpool, 64);
          }
          static digest(t) {
            return Whirlpool.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 64 === t.length),
              i(e.isBuffer(r) && 64 === r.length),
              Whirlpool.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = Whirlpool.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return Whirlpool.hmac().init(e).update(t).final();
          }
        }
        function w(t, e) {
          return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e];
        }
        function A(t, e, r) {
          return (
            (t[r++] = e >>> 24),
            (t[r++] = e >>> 16),
            (t[r++] = e >>> 8),
            (t[r++] = e),
            r
          );
        }
        ((Whirlpool.native = 0),
          (Whirlpool.id = "WHIRLPOOL"),
          (Whirlpool.size = 64),
          (Whirlpool.bits = 512),
          (Whirlpool.blockSize = 64),
          (Whirlpool.zero = e.alloc(64, 0)),
          (Whirlpool.ctx = new Whirlpool()),
          (t.exports = Whirlpool));
      }).call(this, r(2).Buffer);
    },
    11107: function (t, e, r) {
      "use strict";
      const i = r(6822),
        s = r(6836);
      t.exports = new i("X448", 446, 56, "2b656f", s);
    },
    2769: function (t, e, r) {
      "use strict";
      class AssertionError extends Error {
        constructor(t) {
          ("string" === typeof t && (t = { message: t }),
            (null !== t && "object" === typeof t) || (t = {}));
          let e = null,
            r = "fail",
            i = Boolean(t.generatedMessage),
            s = null;
          if (
            (null != t.message && (e = E(t.message)),
            "string" === typeof t.operator && (r = t.operator),
            null == e)
          ) {
            if ("fail" === r) e = "Assertion failed.";
            else {
              const i = g(t.actual),
                s = g(t.expected);
              e = `${i} ${r} ${s}`;
            }
            i = !0;
          }
          ("function" === typeof t.stackStartFunction
            ? (s = t.stackStartFunction)
            : "function" === typeof t.stackStartFn && (s = t.stackStartFn),
            super(e),
            (this.generatedMessage = i),
            (this.code = "ERR_ASSERTION"),
            (this.actual = t.actual),
            (this.expected = t.expected),
            (this.operator = r),
            Object.defineProperty(this, "name", {
              value: "AssertionError [ERR_ASSERTION]",
              enumerable: !1,
              writable: !0,
              configurable: !0,
            }),
            Error.captureStackTrace &&
              null != s &&
              Error.captureStackTrace(this, s),
            this.stack,
            (this.name = "AssertionError"));
        }
        toString() {
          return `${this.name} [${this.code}]: ${this.message}`;
        }
      }
      function i(t, e) {
        if (!t) {
          let r = !1;
          if (0 === arguments.length)
            ((e = "No value argument passed to `assert()`."), (r = !0));
          else if (null == e) ((e = "Assertion failed."), (r = !0));
          else if (D(e)) throw e;
          throw new AssertionError({
            message: e,
            actual: t,
            expected: !0,
            operator: "==",
            generatedMessage: r,
            stackStartFn: i,
          });
        }
      }
      function s(t, e, r) {
        if (!Object.is(t, e)) {
          if (D(r)) throw r;
          throw new AssertionError({
            message: r,
            actual: t,
            expected: e,
            operator: "strictEqual",
            stackStartFn: s,
          });
        }
      }
      function n(t, e, r) {
        if (Object.is(t, e)) {
          if (D(r)) throw r;
          throw new AssertionError({
            message: r,
            actual: t,
            expected: e,
            operator: "notStrictEqual",
            stackStartFn: n,
          });
        }
      }
      function o(t) {
        let e = !1;
        if (D(t)) throw t;
        throw (
          null == t && ((t = "Assertion failed."), (e = !0)),
          new AssertionError({
            message: t,
            actual: !1,
            expected: !0,
            operator: "fail",
            generatedMessage: e,
            stackStartFn: o,
          })
        );
      }
      function a(t, e, r) {
        "string" === typeof e && ((r = e), (e = void 0));
        let i = !1,
          s = null;
        A("function" === typeof t, "func", "function");
        try {
          t();
        } catch (n) {
          ((i = !0), (s = n));
        }
        if (!i) {
          let t = !1;
          throw (
            null == r && ((r = "Missing expected exception."), (t = !0)),
            new AssertionError({
              message: r,
              actual: void 0,
              expected: e,
              operator: "throws",
              generatedMessage: t,
              stackStartFn: a,
            })
          );
        }
        if (!k(s, e, r, a)) throw s;
      }
      function c(t, e, r) {
        "string" === typeof e && ((r = e), (e = void 0));
        let i = !1,
          s = null;
        A("function" === typeof t, "func", "function");
        try {
          t();
        } catch (n) {
          ((i = !0), (s = n));
        }
        if (i) {
          if (k(s, e, r, c)) {
            let t = !1;
            throw (
              null == r && ((r = "Got unwanted exception."), (t = !0)),
              new AssertionError({
                message: r,
                actual: s,
                expected: e,
                operator: "doesNotThrow",
                generatedMessage: t,
                stackStartFn: c,
              })
            );
          }
          throw s;
        }
      }
      async function h(t, e, r) {
        "string" === typeof e && ((r = e), (e = void 0));
        let i = !1,
          s = null;
        "function" !== typeof t && A(O(t), "func", "promise");
        try {
          O(t) ? await t : await t();
        } catch (n) {
          ((i = !0), (s = n));
        }
        if (!i) {
          let t = !1;
          throw (
            null == r && ((r = "Missing expected rejection."), (t = !0)),
            new AssertionError({
              message: r,
              actual: void 0,
              expected: e,
              operator: "rejects",
              generatedMessage: t,
              stackStartFn: h,
            })
          );
        }
        if (!k(s, e, r, h)) throw s;
      }
      async function u(t, e, r) {
        "string" === typeof e && ((r = e), (e = void 0));
        let i = !1,
          s = null;
        "function" !== typeof t && A(O(t), "func", "promise");
        try {
          O(t) ? await t : await t();
        } catch (n) {
          ((i = !0), (s = n));
        }
        if (i) {
          if (k(s, e, r, u)) {
            let t = !1;
            throw (
              null == r && ((r = "Got unwanted rejection."), (t = !0)),
              new AssertionError({
                message: r,
                actual: void 0,
                expected: e,
                operator: "doesNotReject",
                generatedMessage: t,
                stackStartFn: u,
              })
            );
          }
          throw s;
        }
      }
      function f(t) {
        if (null != t) {
          let e = "ifError got unwanted exception: ";
          throw (
            "object" === typeof t && "string" === typeof t.message
              ? 0 === t.message.length && t.constructor
                ? (e += t.constructor.name)
                : (e += t.message)
              : (e += g(t)),
            new AssertionError({
              message: e,
              actual: t,
              expected: null,
              operator: "ifError",
              generatedMessage: !0,
              stackStartFn: f,
            })
          );
        }
      }
      function l(t, e, r) {
        P(t, e, r, l, !0);
      }
      function d(t, e, r) {
        P(t, e, r, d, !1);
      }
      function p(t, e, r) {
        if (!B(t, e, !1)) {
          if (D(r)) throw r;
          throw new AssertionError({
            message: r,
            actual: t,
            expected: e,
            operator: "deepStrictEqual",
            stackStartFn: p,
          });
        }
      }
      function m(t, e, r) {
        if (B(t, e, !0)) {
          if (D(r)) throw r;
          throw new AssertionError({
            message: r,
            actual: t,
            expected: e,
            operator: "notDeepStrictEqual",
            stackStartFn: m,
          });
        }
      }
      function S(t, e, r, i) {
        if (
          (Y(r) || ((i = r), (r = null)),
          null == r && (r = "hex"),
          (e = F(t, e, r)),
          A(R(t), "actual", "buffer"),
          A(R(e), "expected", "buffer"),
          t !== e && !t.equals(e))
        ) {
          if (D(i)) throw i;
          throw new AssertionError({
            message: i,
            actual: t.toString(r),
            expected: e.toString(r),
            operator: "bufferEqual",
            stackStartFn: S,
          });
        }
      }
      function w(t, e, r, i) {
        if (
          (Y(r) || ((i = r), (r = null)),
          null == r && (r = "hex"),
          (e = F(t, e, r)),
          A(R(t), "actual", "buffer"),
          A(R(e), "expected", "buffer"),
          t === e || t.equals(e))
        ) {
          if (D(i)) throw i;
          throw new AssertionError({
            message: i,
            actual: t.toString(r),
            expected: e.toString(r),
            operator: "notBufferEqual",
            stackStartFn: w,
          });
        }
      }
      function A(t, e, r) {
        if (!t) {
          let t;
          t =
            null == e
              ? "Invalid type for parameter."
              : null == r
                ? `Invalid type for "${e}".`
                : `"${e}" must be a(n) ${r}.`;
          const i = new TypeError(t);
          throw (Error.captureStackTrace && Error.captureStackTrace(i, A), i);
        }
      }
      function y(t, e) {
        if (!t) {
          const t =
              null != e
                ? `"${e}" is out of range.`
                : "Parameter is out of range.",
            r = new RangeError(t);
          throw (Error.captureStackTrace && Error.captureStackTrace(r, y), r);
        }
      }
      function g(t) {
        switch (typeof t) {
          case "undefined":
            return "undefined";
          case "object":
            return null === t ? "null" : `[${H(t)}]`;
          case "boolean":
            return "" + t;
          case "number":
            return "" + t;
          case "string":
            return (
              t.length > 80 && (t = t.substring(0, 77) + "..."),
              JSON.stringify(t)
            );
          case "symbol":
            return b(t);
          case "function":
            return `[${K(t)}]`;
          case "bigint":
            return t + "n";
          default:
            return `[${typeof t}]`;
        }
      }
      function E(t) {
        return "string" === typeof t ? t : D(t) ? b(t) : g(t);
      }
      function b(t) {
        try {
          return String(t);
        } catch (e) {
          return "Object";
        }
      }
      function k(t, e, r, i) {
        if (null == e) return !0;
        if (q(e)) return e.test(t);
        if ("function" !== typeof e) {
          if (i === c || i === u)
            throw new TypeError('"expected" must not be an object.');
          if ("object" !== typeof e)
            throw new TypeError('"expected" must be an object.');
          let s = !1;
          if (null == r) {
            const t = i === h ? "rejection" : "exception";
            ((r = `Missing expected ${t}.`), (s = !0));
          }
          if (null == t || "object" !== typeof t)
            throw new AssertionError({
              actual: t,
              expected: e,
              message: r,
              operator: i.name,
              generatedMessage: s,
              stackStartFn: i,
            });
          const n = Object.keys(e);
          if ((D(e) && n.push("name", "message"), 0 === n.length))
            throw new TypeError('"expected" may not be an empty object.');
          for (const o of n) {
            const n = e[o],
              a = t[o];
            if (
              ("string" !== typeof a || !q(n) || !n.test(a)) &&
              (!(o in t) || !B(a, n, !1))
            )
              throw new AssertionError({
                actual: t,
                expected: e,
                message: r,
                operator: i.name,
                generatedMessage: s,
                stackStartFn: i,
              });
          }
          return !0;
        }
        return (
          (void 0 !== e.prototype && t instanceof e) ||
          (!Error.isPrototypeOf(e) && !0 === e.call({}, t))
        );
      }
      function P(t, e, r, i, s) {
        if (
          (A("string" === typeof t, "string", "string"),
          A(q(e), "regexp", "RegExp"),
          e.test(t) !== s)
        ) {
          if (D(r)) throw r;
          let n = !1;
          throw (
            null == r &&
              ((r = `The input ${s ? "did" : "was expected to"} not match the regular expression ${e}. Input:\n\n${g(t)}\n`),
              (n = !0)),
            new AssertionError({
              actual: t,
              expected: e,
              message: r,
              operator: i.name,
              generatedMessage: n,
              stackStartFn: i,
            })
          );
        }
      }
      function B(t, e, r) {
        try {
          return v(t, e, null);
        } catch (i) {
          return r;
        }
      }
      function v(t, e, r) {
        if (Object.is(t, e)) return !0;
        if (!L(t) || !L(e)) return !1;
        if (I(t) !== I(e)) return !1;
        if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
        if (R(t) && R(e)) return t.equals(e);
        if (z(t)) return Object.is(t.getTime(), e.getTime());
        if (q(t)) return t.source === e.source && t.flags === e.flags;
        if (D(t) && t.message !== e.message) return !1;
        if (
          (_(t) && ((t = new Uint8Array(t)), (e = new Uint8Array(e))),
          G(t) && !R(t))
        ) {
          if (R(e)) return !1;
          const r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
            i = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          if (r.length !== i.length) return !1;
          for (let t = 0; t < r.length; t++) if (r[t] !== i[t]) return !1;
          return !0;
        }
        if (T(t)) {
          if (t.size !== e.size) return !1;
          const r = new Set([...t, ...e]);
          return r.size === t.size;
        }
        if (r) {
          const i = r.a.get(t);
          if (null != i) {
            const t = r.b.get(e);
            if (null != t) return i === t;
          }
          r.p += 1;
        } else r = { a: new Map(), b: new Map(), p: 0 };
        (r.a.set(t, r.p), r.b.set(e, r.p));
        const i = x(t, e, r);
        return (r.a.delete(t), r.b.delete(e), i);
      }
      function x(t, e, r) {
        if (M(t)) {
          if (t.size !== e.size) return !1;
          const i = new Set([...t.keys(), ...e.keys()]);
          if (i.size !== t.size) return !1;
          for (const s of i) if (!v(t.get(s), e.get(s), r)) return !1;
          return !0;
        }
        if (C(t)) {
          if (t.length !== e.length) return !1;
          for (let i = 0; i < t.length; i++) if (!v(t[i], e[i], r)) return !1;
          return !0;
        }
        const i = N(t),
          s = N(e);
        if (i.length !== s.length) return !1;
        const n = new Set([...i, ...s]);
        if (n.size !== i.length) return !1;
        for (const o of n) if (!v(t[o], e[o], r)) return !1;
        return !0;
      }
      function N(t) {
        const e = Object.keys(t);
        if (!Object.getOwnPropertySymbols) return e;
        if (!Object.getOwnPropertyDescriptor) return e;
        const r = Object.getOwnPropertySymbols(t);
        for (const i of r) {
          const r = Object.getOwnPropertyDescriptor(t, i);
          r && r.enumerable && e.push(i);
        }
        return e;
      }
      function I(t) {
        if (void 0 === t) return "[object Undefined]";
        if (null === t) return "[object Null]";
        try {
          return Object.prototype.toString.call(t);
        } catch (e) {
          return "[object Object]";
        }
      }
      function U(t) {
        return I(t).slice(8, -1);
      }
      function H(t) {
        const e = U(t);
        if (null == t) return e;
        if ("Object" !== e && "Error" !== e) return e;
        let r, i;
        try {
          r = t.constructor;
        } catch (s) {}
        if (null == r) return e;
        try {
          i = r.name;
        } catch (s) {
          return e;
        }
        return "string" !== typeof i || 0 === i.length ? e : i;
      }
      function K(t) {
        let e;
        try {
          e = t.name;
        } catch (r) {}
        return "string" !== typeof e || 0 === e.length
          ? "Function"
          : "Function: " + e;
      }
      function C(t) {
        return Array.isArray(t);
      }
      function _(t) {
        return t instanceof ArrayBuffer;
      }
      function R(t) {
        return (
          L(t) &&
          "function" === typeof t.writeUInt32LE &&
          "function" === typeof t.equals
        );
      }
      function z(t) {
        return t instanceof Date;
      }
      function D(t) {
        return t instanceof Error;
      }
      function M(t) {
        return t instanceof Map;
      }
      function L(t) {
        return t && "object" === typeof t;
      }
      function O(t) {
        return t instanceof Promise;
      }
      function q(t) {
        return t instanceof RegExp;
      }
      function T(t) {
        return t instanceof Set;
      }
      function G(t) {
        return ArrayBuffer.isView(t);
      }
      function Y(t) {
        if ("string" !== typeof t) return !1;
        if (t.length > 9) return !1;
        switch (t.toLowerCase()) {
          case "ascii":
          case "binary":
          case "base64":
          case "base64url":
          case "hex":
          case "latin1":
          case "ucs2":
          case "utf8":
          case "utf16le":
          case "ucs-2":
          case "utf-8":
          case "utf-16le":
            return !0;
        }
        return !1;
      }
      function F(t, e, r) {
        if ("string" === typeof e) {
          if (!R(t)) return null;
          const { constructor: i } = t;
          if (!i || "function" !== typeof i.from) return null;
          if (!Y(r)) return null;
          const s = i.from(e, r);
          return 3 === r.length && 2 * s.length !== e.length ? null : s;
        }
        return e;
      }
      ((AssertionError.prototype.name = "AssertionError"),
        (AssertionError.prototype.type = "AssertionError"),
        (i.AssertionError = AssertionError),
        (i.assert = i),
        (i.strict = i),
        (i.ok = i),
        (i.equal = s),
        (i.notEqual = n),
        (i.strictEqual = s),
        (i.notStrictEqual = n),
        (i.fail = o),
        (i.throws = a),
        (i.doesNotThrow = c),
        (i.rejects = h),
        (i.doesNotReject = u),
        (i.ifError = f),
        (i.match = l),
        (i.doesNotMatch = d),
        (i.deepEqual = p),
        (i.notDeepEqual = m),
        (i.deepStrictEqual = p),
        (i.notDeepStrictEqual = m),
        (i.bufferEqual = S),
        (i.notBufferEqual = w),
        (i.enforce = A),
        (i.range = y),
        (t.exports = i));
    },
    2792: function (t, e, r) {
      "use strict";
      var i = r(797),
        s = r(3263);
      function n(t) {
        var e = i("sha256").update(t).digest();
        return i("sha256").update(e).digest();
      }
      t.exports = s(n);
    },
    3201: function (t, e, r) {
      "use strict";
      t.exports = r(11013);
    },
    3263: function (t, e, r) {
      "use strict";
      var i = r(234),
        s = r(46).Buffer;
      t.exports = function (t) {
        function e(e) {
          var r = t(e);
          return i.encode(s.concat([e, r], e.length + 4));
        }
        function r(e) {
          var r = e.slice(0, -4),
            i = e.slice(-4),
            s = t(r);
          if (!((i[0] ^ s[0]) | (i[1] ^ s[1]) | (i[2] ^ s[2]) | (i[3] ^ s[3])))
            return r;
        }
        function n(t) {
          var e = i.decodeUnsafe(t);
          if (e) return r(e);
        }
        function o(e) {
          var s = i.decode(e),
            n = r(s, t);
          if (!n) throw new Error("Invalid checksum");
          return n;
        }
        return { encode: e, decode: o, decodeUnsafe: n };
      };
    },
    3616: function (t, e, r) {
      "use strict";
      t.exports = r(4852);
    },
    3843: function (t, e, r) {
      "use strict";
      t.exports = r(6830);
    },
    4574: function (t, e, r) {
      "use strict";
      t.exports = r(6817);
    },
    4577: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          s = r(6819),
          n = r(6820),
          o = t.alloc(16, 0);
        function a(e, r, o) {
          (i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(t.isBuffer(o)),
            i(32 === r.length),
            i(24 === o.length));
          const a = t.alloc(16 + e.length, 0),
            c = a.slice(16, 48),
            h = a.slice(48),
            u = new s(),
            f = new n(),
            l = t.alloc(64, 0),
            d = l.slice(0, 32),
            p = l.slice(32);
          (u.init(r, o), u.encrypt(l), e.copy(a, 16));
          for (let t = 0; t < c.length; t++) c[t] ^= p[t];
          return (
            h.length > 0 && (u.init(r, o, 1), u.encrypt(h)),
            f.init(d),
            f.update(c),
            f.update(h),
            f.final().copy(a, 0),
            a
          );
        }
        function c(e, r, o) {
          if (
            (i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(t.isBuffer(o)),
            i(32 === r.length),
            i(24 === o.length),
            e.length < 16)
          )
            throw new Error("Invalid secret box size.");
          const a = t.from(e),
            c = a.slice(0, 16),
            h = a.slice(16, 48),
            u = a.slice(48),
            f = a.slice(16),
            l = new s(),
            d = new n(),
            p = t.alloc(64, 0),
            m = p.slice(0, 32),
            S = p.slice(32, 64);
          (l.init(r, o), l.encrypt(p), d.init(m), d.update(h), d.update(u));
          const w = n.verify(d.final(), c);
          if (!w) throw new Error("Invalid secret box tag.");
          for (let t = 0; t < h.length; t++) h[t] ^= S[t];
          return (u.length > 0 && (l.init(r, o, 1), l.encrypt(u)), f);
        }
        function h(t, e) {
          const r = u(t, e);
          return s.derive(r, o);
        }
        function u(e, r) {
          if ((i(t.isBuffer(e)), null == r)) {
            if (32 !== e.length)
              throw new Error("Invalid secret size for secret box.");
            return e;
          }
          if ("function" === typeof r.digest) {
            if (r.size < 32)
              throw new Error("Hash is too small for secret box.");
            return r.digest(e).slice(0, 32);
          }
          i("function" === typeof r);
          const s = r(e);
          if ((i(t.isBuffer(s)), s.length < 32))
            throw new Error("Key is too small for secret box.");
          return s.slice(0, 32);
        }
        ((e.native = 0), (e.seal = a), (e.open = c), (e.derive = h));
      }).call(this, r(2).Buffer);
    },
    4580: function (t, e, r) {
      "use strict";
      t.exports = r(11097);
    },
    4852: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(3012),
          n = -1,
          o = e.alloc(8, 0),
          a = e.alloc(64, 0);
        a[0] = 128;
        const c = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]);
        class SHA256 {
          constructor() {
            ((this.state = new Uint32Array(8)),
              (this.msg = new Uint32Array(64)),
              (this.block = e.allocUnsafe(64)),
              (this.size = n));
          }
          init() {
            return (
              (this.state[0] = 1779033703),
              (this.state[1] = 3144134277),
              (this.state[2] = 1013904242),
              (this.state[3] = 2773480762),
              (this.state[4] = 1359893119),
              (this.state[5] = 2600822924),
              (this.state[6] = 528734635),
              (this.state[7] = 1541459225),
              (this.size = 0),
              this
            );
          }
          update(t) {
            return (i(e.isBuffer(t)), this._update(t, t.length), this);
          }
          final() {
            return this._final(e.allocUnsafe(32));
          }
          _update(t, e) {
            i(this.size !== n, "Context already finalized.");
            let r = 63 & this.size,
              s = 0;
            if (((this.size += e), r > 0)) {
              let i = 64 - r;
              if (
                (i > e && (i = e),
                t.copy(this.block, r, s, s + i),
                (r += i),
                (e -= i),
                (s += i),
                r < 64)
              )
                return;
              this.transform(this.block, 0);
            }
            while (e >= 64) (this.transform(t, s), (s += 64), (e -= 64));
            e > 0 && t.copy(this.block, 0, s, s + e);
          }
          _final(t) {
            i(this.size !== n, "Context already finalized.");
            const e = this.size % 64,
              r = 8 * this.size;
            (S(o, r * (1 / 4294967296), 0),
              S(o, r, 4),
              this._update(a, 1 + ((119 - e) % 64)),
              this._update(o, 8));
            for (let i = 0; i < 8; i++)
              (S(t, this.state[i], 4 * i), (this.state[i] = 0));
            for (let i = 0; i < 64; i++) this.msg[i] = 0;
            for (let i = 0; i < 64; i++) this.block[i] = 0;
            return ((this.size = n), t);
          }
          transform(t, e) {
            const r = this.msg;
            let i = this.state[0],
              s = this.state[1],
              n = this.state[2],
              o = this.state[3],
              a = this.state[4],
              S = this.state[5],
              w = this.state[6],
              A = this.state[7],
              y = 0;
            for (; y < 16; y++) r[y] = m(t, e + 4 * y);
            for (; y < 64; y++)
              r[y] = l(r[y - 2]) + r[y - 7] + f(r[y - 15]) + r[y - 16];
            for (y = 0; y < 64; y++) {
              let t = A + u(a);
              ((t += d(a, S, w)), (t += c[y] + r[y]));
              let e = h(i);
              ((e += p(i, s, n)),
                (A = w),
                (w = S),
                (S = a),
                (a = (o + t) >>> 0),
                (o = n),
                (n = s),
                (s = i),
                (i = (t + e) >>> 0));
            }
            ((this.state[0] += i),
              (this.state[1] += s),
              (this.state[2] += n),
              (this.state[3] += o),
              (this.state[4] += a),
              (this.state[5] += S),
              (this.state[6] += w),
              (this.state[7] += A));
          }
          static hash() {
            return new SHA256();
          }
          static hmac() {
            return new s(SHA256, 64);
          }
          static digest(t) {
            return SHA256.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 32 === t.length),
              i(e.isBuffer(r) && 32 === r.length),
              SHA256.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = SHA256.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return SHA256.hmac().init(e).update(t).final();
          }
        }
        function h(t) {
          return (
            ((t >>> 2) | (t << 30)) ^
            ((t >>> 13) | (t << 19)) ^
            ((t >>> 22) | (t << 10))
          );
        }
        function u(t) {
          return (
            ((t >>> 6) | (t << 26)) ^
            ((t >>> 11) | (t << 21)) ^
            ((t >>> 25) | (t << 7))
          );
        }
        function f(t) {
          return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
        }
        function l(t) {
          return (
            ((t >>> 17) | (t << 15)) ^ ((t >>> 19) | (t << 13)) ^ (t >>> 10)
          );
        }
        function d(t, e, r) {
          return r ^ (t & (e ^ r));
        }
        function p(t, e, r) {
          return (t & e) | (r & (t | e));
        }
        function m(t, e) {
          return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e];
        }
        function S(t, e, r) {
          return (
            (t[r++] = e >>> 24),
            (t[r++] = e >>> 16),
            (t[r++] = e >>> 8),
            (t[r++] = e),
            r
          );
        }
        ((SHA256.native = 0),
          (SHA256.id = "SHA256"),
          (SHA256.size = 32),
          (SHA256.bits = 256),
          (SHA256.blockSize = 64),
          (SHA256.zero = e.alloc(32, 0)),
          (SHA256.ctx = new SHA256()),
          (t.exports = SHA256));
      }).call(this, r(2).Buffer);
    },
    4853: function (t, e, r) {
      "use strict";
      t.exports = r(11040);
    },
    5666: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(3843);
        class SHAKE extends i {
          constructor() {
            super();
          }
          final(t) {
            return super.final(31, t);
          }
          static hash() {
            return new SHAKE();
          }
          static hmac(t, e) {
            return (void 0 === t && (t = 256), super.hmac(t, 31, e));
          }
          static digest(t, e, r) {
            return (void 0 === e && (e = 256), super.digest(t, e, 31, r));
          }
          static root(t, e, r, i) {
            return (void 0 === r && (r = 256), super.root(t, e, r, 31, i));
          }
          static multi(t, e, r, i, s) {
            return (void 0 === i && (i = 256), super.multi(t, e, r, i, 31, s));
          }
          static mac(t, e, r, i) {
            return (void 0 === r && (r = 256), super.mac(t, e, r, 31, i));
          }
        }
        ((SHAKE.native = i.native),
          (SHAKE.id = "SHAKE256"),
          (SHAKE.size = 32),
          (SHAKE.bits = 256),
          (SHAKE.blockSize = 136),
          (SHAKE.zero = e.alloc(32, 0)),
          (SHAKE.ctx = new SHAKE()),
          (t.exports = SHAKE));
      }).call(this, r(2).Buffer);
    },
    5669: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(4851),
          n = r(3012),
          o = e.from("KMAC", "binary"),
          a = e.alloc(0);
        class KMAC extends s {
          constructor() {
            super();
          }
          init(t, r, s) {
            return (
              null == r && (r = a),
              i(e.isBuffer(r)),
              super.init(t, o, s),
              super.bytePad([r], this.rate / 8),
              this
            );
          }
          final(t) {
            if (null == t) {
              const e = this.rate / 8;
              t = 100 - e / 2;
            }
            return (super.rightEncode(8 * t), super.final(t));
          }
          static hash() {
            return new KMAC();
          }
          static hmac(t, e, r, s) {
            (void 0 === t && (t = 256),
              i(t >>> 0 === t),
              i(128 === t || 256 === t));
            const o = (1600 - 2 * t) / 8;
            return new n(KMAC, o, [t, e, r], [s]);
          }
          static digest(t, e, r, i, s) {
            return (
              void 0 === e && (e = 256),
              KMAC.ctx.init(e, r, i).update(t).final(s)
            );
          }
          static root(t, r, s, n, o, a) {
            (void 0 === s && (s = 256),
              null == a && (a = 0),
              0 === a && (i(s >>> 0 === s), (a = s >>> 3)),
              i(a >>> 0 === a),
              i(e.isBuffer(t) && t.length === a),
              i(e.isBuffer(r) && r.length === a));
            const c = KMAC.ctx;
            return (c.init(s, n, o), c.update(t), c.update(r), c.final(a));
          }
          static multi(t, e, r, i, s, n, o) {
            void 0 === i && (i = 256);
            const a = KMAC.ctx;
            return (
              a.init(i, s, n),
              a.update(t),
              a.update(e),
              r && a.update(r),
              a.final(o)
            );
          }
          static mac(t, e, r, i, s, n) {
            return (
              void 0 === r && (r = 256),
              KMAC.hmac(r, i, s, n).init(e).update(t).final()
            );
          }
        }
        ((KMAC.native = s.native),
          (KMAC.id = "KMAC256"),
          (KMAC.size = 32),
          (KMAC.bits = 256),
          (KMAC.blockSize = 136),
          (KMAC.zero = e.alloc(32, 0)),
          (KMAC.ctx = new KMAC()),
          (t.exports = KMAC));
      }).call(this, r(2).Buffer);
    },
    5670: function (t, e, r) {
      "use strict";
      t.exports = r(11070);
    },
    5671: function (t, e, r) {
      "use strict";
      t.exports = r(11082);
    },
    5672: function (t, e, r) {
      "use strict";
      t.exports = r(11088);
    },
    6817: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          s = r(3012),
          n = -1,
          o = e.alloc(16, 0),
          a = e.alloc(128, 0);
        a[0] = 128;
        const c = new Uint32Array([
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ]);
        class SHA512 {
          constructor() {
            ((this.state = new Uint32Array(16)),
              (this.msg = new Uint32Array(160)),
              (this.block = e.allocUnsafe(128)),
              (this.size = n));
          }
          init() {
            return (
              (this.state[0] = 1779033703),
              (this.state[1] = 4089235720),
              (this.state[2] = 3144134277),
              (this.state[3] = 2227873595),
              (this.state[4] = 1013904242),
              (this.state[5] = 4271175723),
              (this.state[6] = 2773480762),
              (this.state[7] = 1595750129),
              (this.state[8] = 1359893119),
              (this.state[9] = 2917565137),
              (this.state[10] = 2600822924),
              (this.state[11] = 725511199),
              (this.state[12] = 528734635),
              (this.state[13] = 4215389547),
              (this.state[14] = 1541459225),
              (this.state[15] = 327033209),
              (this.size = 0),
              this
            );
          }
          update(t) {
            return (i(e.isBuffer(t)), this._update(t, t.length), this);
          }
          final() {
            return this._final(e.allocUnsafe(64));
          }
          _update(t, e) {
            i(this.size !== n, "Context already finalized.");
            let r = 127 & this.size,
              s = 0;
            if (((this.size += e), r > 0)) {
              let i = 128 - r;
              if (
                (i > e && (i = e),
                t.copy(this.block, r, s, s + i),
                (r += i),
                (e -= i),
                (s += i),
                r < 128)
              )
                return;
              this.transform(this.block, 0);
            }
            while (e >= 128) (this.transform(t, s), (s += 128), (e -= 128));
            e > 0 && t.copy(this.block, 0, s, s + e);
          }
          _final(t) {
            i(this.size !== n, "Context already finalized.");
            const e = this.size % 128,
              r = 8 * this.size;
            (C(o, r * (1 / 4294967296), 8),
              C(o, r, 12),
              this._update(a, 1 + ((239 - e) % 128)),
              this._update(o, 16));
            for (let i = 0; i < 16; i++)
              (C(t, this.state[i], 4 * i), (this.state[i] = 0));
            for (let i = 0; i < 160; i++) this.msg[i] = 0;
            for (let i = 0; i < 128; i++) this.block[i] = 0;
            return ((this.size = n), t);
          }
          prepare(t, e) {
            const r = this.msg;
            let i = 0;
            for (; i < 32; i++) r[i] = K(t, e + 4 * i);
            for (; i < 160; i += 2) {
              const t = U(r[i - 4], r[i - 3]),
                e = H(r[i - 4], r[i - 3]),
                s = r[i - 14],
                n = r[i - 13],
                o = N(r[i - 30], r[i - 29]),
                a = I(r[i - 30], r[i - 29]),
                c = r[i - 32],
                h = r[i - 31];
              ((r[i + 0] = l(t, e, s, n, o, a, c, h)),
                (r[i + 1] = d(t, e, s, n, o, a, c, h)));
            }
          }
          transform(t, e) {
            const r = this.msg;
            this.prepare(t, e);
            let i = this.state[0],
              s = this.state[1],
              n = this.state[2],
              o = this.state[3],
              a = this.state[4],
              l = this.state[5],
              d = this.state[6],
              S = this.state[7],
              w = this.state[8],
              A = this.state[9],
              y = this.state[10],
              N = this.state[11],
              I = this.state[12],
              U = this.state[13],
              H = this.state[14],
              K = this.state[15];
            for (let h = 0; h < r.length; h += 2) {
              let t = H,
                e = K,
                C = v(w, A),
                _ = x(w, A);
              const R = g(w, A, y, N, I, U),
                z = E(w, A, y, N, I, U),
                D = c[h + 0],
                M = c[h + 1],
                L = r[h + 0],
                O = r[h + 1],
                q = p(t, e, C, _, R, z, D, M, L, O),
                T = m(t, e, C, _, R, z, D, M, L, O);
              ((t = P(i, s)),
                (e = B(i, s)),
                (C = b(i, s, n, o, a, l)),
                (_ = k(i, s, n, o, a, l)));
              const G = u(t, e, C, _),
                Y = f(t, e, C, _);
              ((H = I),
                (K = U),
                (I = y),
                (U = N),
                (y = w),
                (N = A),
                (w = u(d, S, q, T)),
                (A = f(S, S, q, T)),
                (d = a),
                (S = l),
                (a = n),
                (l = o),
                (n = i),
                (o = s),
                (i = u(q, T, G, Y)),
                (s = f(q, T, G, Y)));
            }
            (h(this.state, 0, i, s),
              h(this.state, 2, n, o),
              h(this.state, 4, a, l),
              h(this.state, 6, d, S),
              h(this.state, 8, w, A),
              h(this.state, 10, y, N),
              h(this.state, 12, I, U),
              h(this.state, 14, H, K));
          }
          static hash() {
            return new SHA512();
          }
          static hmac() {
            return new s(SHA512, 128);
          }
          static digest(t) {
            return SHA512.ctx.init().update(t).final();
          }
          static root(t, r) {
            return (
              i(e.isBuffer(t) && 64 === t.length),
              i(e.isBuffer(r) && 64 === r.length),
              SHA512.ctx.init().update(t).update(r).final()
            );
          }
          static multi(t, e, r) {
            const i = SHA512.ctx;
            return (
              i.init(),
              i.update(t),
              i.update(e),
              r && i.update(r),
              i.final()
            );
          }
          static mac(t, e) {
            return SHA512.hmac().init(e).update(t).final();
          }
        }
        function h(t, e, r, i) {
          const s = t[e + 0],
            n = t[e + 1],
            o = (i + n) >>> 0,
            a = (o < i) + r + s;
          ((t[e + 0] = a >>> 0), (t[e + 1] = o));
        }
        function u(t, e, r, i) {
          const s = (e + i) >>> 0,
            n = (s < e) + t + r;
          return n >>> 0;
        }
        function f(t, e, r, i) {
          const s = e + i;
          return s >>> 0;
        }
        function l(t, e, r, i, s, n, o, a) {
          let c = 0,
            h = e;
          ((h = (h + i) >>> 0),
            (c += h < e),
            (h = (h + n) >>> 0),
            (c += h < n),
            (h = (h + a) >>> 0),
            (c += h < a));
          const u = t + r + s + o + c;
          return u >>> 0;
        }
        function d(t, e, r, i, s, n, o, a) {
          const c = e + i + n + a;
          return c >>> 0;
        }
        function p(t, e, r, i, s, n, o, a, c, h) {
          let u = 0,
            f = e;
          ((f = (f + i) >>> 0),
            (u += f < e),
            (f = (f + n) >>> 0),
            (u += f < n),
            (f = (f + a) >>> 0),
            (u += f < a),
            (f = (f + h) >>> 0),
            (u += f < h));
          const l = t + r + s + o + c + u;
          return l >>> 0;
        }
        function m(t, e, r, i, s, n, o, a, c, h) {
          const u = e + i + n + a + h;
          return u >>> 0;
        }
        function S(t, e, r) {
          const i = (e << (32 - r)) | (t >>> r);
          return i >>> 0;
        }
        function w(t, e, r) {
          const i = (t << (32 - r)) | (e >>> r);
          return i >>> 0;
        }
        function A(t, e, r) {
          return t >>> r;
        }
        function y(t, e, r) {
          const i = (t << (32 - r)) | (e >>> r);
          return i >>> 0;
        }
        function g(t, e, r, i, s, n) {
          const o = (t & r) ^ (~t & s);
          return o >>> 0;
        }
        function E(t, e, r, i, s, n) {
          const o = (e & i) ^ (~e & n);
          return o >>> 0;
        }
        function b(t, e, r, i, s, n) {
          const o = (t & r) ^ (t & s) ^ (r & s);
          return o >>> 0;
        }
        function k(t, e, r, i, s, n) {
          const o = (e & i) ^ (e & n) ^ (i & n);
          return o >>> 0;
        }
        function P(t, e) {
          const r = S(t, e, 28),
            i = S(e, t, 2),
            s = S(e, t, 7),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function B(t, e) {
          const r = w(t, e, 28),
            i = w(e, t, 2),
            s = w(e, t, 7),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function v(t, e) {
          const r = S(t, e, 14),
            i = S(t, e, 18),
            s = S(e, t, 9),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function x(t, e) {
          const r = w(t, e, 14),
            i = w(t, e, 18),
            s = w(e, t, 9),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function N(t, e) {
          const r = S(t, e, 1),
            i = S(t, e, 8),
            s = A(t, e, 7),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function I(t, e) {
          const r = w(t, e, 1),
            i = w(t, e, 8),
            s = y(t, e, 7),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function U(t, e) {
          const r = S(t, e, 19),
            i = S(e, t, 29),
            s = A(t, e, 6),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function H(t, e) {
          const r = w(t, e, 19),
            i = w(e, t, 29),
            s = y(t, e, 6),
            n = r ^ i ^ s;
          return n >>> 0;
        }
        function K(t, e) {
          return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e];
        }
        function C(t, e, r) {
          return (
            (t[r++] = e >>> 24),
            (t[r++] = e >>> 16),
            (t[r++] = e >>> 8),
            (t[r++] = e),
            r
          );
        }
        ((SHA512.native = 0),
          (SHA512.id = "SHA512"),
          (SHA512.size = 64),
          (SHA512.bits = 512),
          (SHA512.blockSize = 128),
          (SHA512.zero = e.alloc(64, 0)),
          (SHA512.ctx = new SHA512()),
          (t.exports = SHA512));
      }).call(this, r(2).Buffer);
    },
    6819: function (t, e, r) {
      "use strict";
      t.exports = r(11012);
    },
    6820: function (t, e, r) {
      "use strict";
      t.exports = r(6813);
    },
    6821: function (t, e, r) {
      "use strict";
      const i = r(6822),
        s = r(5660);
      t.exports = new i("X25519", 253, 32, "2b656e", s);
    },
    6837: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(5666);
        class SHAKE256 extends i {
          constructor() {
            super();
          }
          init() {
            return super.init(256);
          }
          static hash() {
            return new SHAKE256();
          }
          static hmac(t) {
            return super.hmac(256, t);
          }
          static digest(t, e) {
            return super.digest(t, 256, e);
          }
          static root(t, e, r) {
            return super.root(t, e, 256, r);
          }
          static multi(t, e, r, i) {
            return super.multi(t, e, r, 256, i);
          }
          static mac(t, e, r) {
            return super.mac(t, e, 256, r);
          }
        }
        ((SHAKE256.native = i.native),
          (SHAKE256.id = "SHAKE256"),
          (SHAKE256.size = 32),
          (SHAKE256.bits = 256),
          (SHAKE256.blockSize = 136),
          (SHAKE256.zero = e.alloc(32, 0)),
          (SHAKE256.ctx = new SHAKE256()),
          (t.exports = SHAKE256));
      }).call(this, r(2).Buffer);
    },
    6840: function (t, e, r) {
      "use strict";
      t.exports = r(11080);
    },
    6841: function (t, e, r) {
      "use strict";
      t.exports = r(11081);
    },
    6842: function (t, e, r) {
      "use strict";
      t.exports = r(11083);
    },
    6843: function (t, e, r) {
      "use strict";
      t.exports = r(11084);
    },
    6844: function (t, e, r) {
      "use strict";
      t.exports = r(6839);
    },
    6845: function (t, e, r) {
      "use strict";
      t.exports = r(11086);
    },
    6846: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769);
        function s(e, r) {
          if ((i(t.isBuffer(e)), i(t.isBuffer(r)), a(e.length, 0)))
            return a(r.length, 0);
          let s = e.length ^ r.length;
          for (let t = 0; t < r.length; t++) s |= e[t % e.length] ^ r[t];
          return (s - 1) >>> 31;
        }
        function n(e, r) {
          if ((i(t.isBuffer(e)), i(t.isBuffer(r)), !a(e.length, r.length)))
            return 0;
          let s = 0;
          for (let t = 0; t < e.length; t++) s |= e[t] ^ r[t];
          return (s - 1) >>> 31;
        }
        function o(t, e) {
          return a(255 & t, 255 & e);
        }
        function a(t, e) {
          return ((t ^ e) - 1) >>> 31;
        }
        function c(t, e, r) {
          return (~(t - 1) & e) | ((t - 1) & r);
        }
        function h(t, e) {
          return (t - e) >>> 31;
        }
        function u(t, e) {
          return (t - e - 1) >>> 31;
        }
        function f(t, e) {
          return (e - t) >>> 31;
        }
        function l(t, e) {
          return (e - t - 1) >>> 31;
        }
        function d(t, e) {
          return c(h(t, e), t, e);
        }
        function p(t, e) {
          return c(f(t, e), t, e);
        }
        function m(t) {
          return (0 | t) * ((t >> 31) | 1);
        }
        function S(t) {
          return 1 & ((t >> 31) | (-t >> 31));
        }
        function w(e, r, s) {
          (i(t.isBuffer(r)), i(t.isBuffer(s)), i(a(r.length, s.length)));
          const n = (e - 1) & 255,
            o = 255 & ~(e - 1);
          for (let t = 0; t < r.length; t++) r[t] = (r[t] & n) | (s[t] & o);
        }
        ((e.safeCompare = s),
          (e.safeEqual = n),
          (e.safeEqualByte = o),
          (e.safeEqualInt = a),
          (e.safeSelect = c),
          (e.safeLT = h),
          (e.safeLTE = u),
          (e.safeGT = f),
          (e.safeGTE = l),
          (e.safeMin = d),
          (e.safeMax = p),
          (e.safeAbs = m),
          (e.safeBool = S),
          (e.safeCopy = w));
      }).call(this, r(2).Buffer);
    },
  },
]);
