(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [306],
  {
    11015: function (e, t, r) {
      "use strict";
      const i = r(6823),
        n = r(4574),
        s = r(11020);
      e.exports = new i("ED25519", "X25519", n, s);
    },
    11040: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(3012),
          s = -1,
          d = t.alloc(8, 0),
          o = t.alloc(64, 0);
        o[0] = 128;
        const f = new Uint32Array([
            3614090360, 3905402710, 606105819, 3250441966, 4118548399,
            1200080426, 2821735955, 4249261313, 1770035416, 2336552879,
            4294925233, 2304563134, 1804603682, 4254626195, 2792965006,
            1236535329, 4129170786, 3225465664, 643717713, 3921069994,
            3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606,
            4107603335, 1163531501, 2850285829, 4243563512, 1735328473,
            2368359562, 4294588738, 2272392833, 1839030562, 4259657740,
            2763975236, 1272893353, 4139469664, 3200236656, 681279174,
            3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520,
            3299628645, 4096336452, 1126891415, 2878612391, 4237533241,
            1700485571, 2399980690, 4293915773, 2240044497, 1873313359,
            4264355552, 2734768916, 1309151649, 4149444226, 3174756917,
            718787259, 3951481745,
          ]),
          u = new Uint8Array([
            7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9,
            14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4,
            11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15,
            21, 6, 10, 15, 21, 6, 10, 15, 21,
          ]);
        class MD5 {
          constructor() {
            ((this.state = new Uint32Array(4)),
              (this.msg = new Uint32Array(16)),
              (this.block = t.allocUnsafe(64)),
              (this.size = s));
          }
          init() {
            return (
              (this.state[0] = 1732584193),
              (this.state[1] = 4023233417),
              (this.state[2] = 2562383102),
              (this.state[3] = 271733878),
              (this.size = 0),
              this
            );
          }
          update(e) {
            return (i(t.isBuffer(e)), this._update(e, e.length), this);
          }
          final() {
            return this._final(t.allocUnsafe(16));
          }
          _update(e, t) {
            i(this.size !== s, "Context already finalized.");
            let r = 63 & this.size,
              n = 0;
            if (((this.size += t), r > 0)) {
              let i = 64 - r;
              if (
                (i > t && (i = t),
                e.copy(this.block, r, n, n + i),
                (r += i),
                (t -= i),
                (n += i),
                r < 64)
              )
                return;
              this.transform(this.block, 0);
            }
            while (t >= 64) (this.transform(e, n), (n += 64), (t -= 64));
            t > 0 && e.copy(this.block, 0, n, n + t);
          }
          _final(e) {
            i(this.size !== s, "Context already finalized.");
            const t = this.size % 64,
              r = 8 * this.size;
            (l(d, r, 0),
              l(d, r * (1 / 4294967296), 4),
              this._update(o, 1 + ((119 - t) % 64)),
              this._update(d, 8));
            for (let i = 0; i < 4; i++)
              (l(e, this.state[i], 4 * i), (this.state[i] = 0));
            for (let i = 0; i < 16; i++) this.msg[i] = 0;
            for (let i = 0; i < 64; i++) this.block[i] = 0;
            return ((this.size = s), e);
          }
          transform(e, t) {
            const r = this.msg;
            let i = this.state[0],
              n = this.state[1],
              s = this.state[2],
              d = this.state[3],
              o = 0;
            for (; o < 16; o++) r[o] = c(e, t + 4 * o);
            for (o = 0; o < 64; o++) {
              let e, t;
              (o < 16
                ? ((e = (n & s) | (~n & d)), (t = o))
                : o < 32
                  ? ((e = (d & n) | (~d & s)), (t = (5 * o + 1) & 15))
                  : o < 48
                    ? ((e = n ^ s ^ d), (t = (3 * o + 5) & 15))
                    : ((e = s ^ (n | ~d)), (t = (7 * o) & 15)),
                (e >>>= 0),
                (e = e + i + f[o] + r[t]),
                (e >>>= 0),
                (i = d),
                (d = s),
                (s = n),
                (n += h(e, u[o])),
                (n >>>= 0));
            }
            ((this.state[0] += i),
              (this.state[1] += n),
              (this.state[2] += s),
              (this.state[3] += d));
          }
          static hash() {
            return new MD5();
          }
          static hmac() {
            return new n(MD5, 64);
          }
          static digest(e) {
            return MD5.ctx.init().update(e).final();
          }
          static root(e, r) {
            return (
              i(t.isBuffer(e) && 16 === e.length),
              i(t.isBuffer(r) && 16 === r.length),
              MD5.ctx.init().update(e).update(r).final()
            );
          }
          static multi(e, t, r) {
            const i = MD5.ctx;
            return (
              i.init(),
              i.update(e),
              i.update(t),
              r && i.update(r),
              i.final()
            );
          }
          static mac(e, t) {
            return MD5.hmac().init(t).update(e).final();
          }
        }
        function h(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function c(e, t) {
          return e[t++] + 256 * e[t++] + 65536 * e[t++] + 16777216 * e[t];
        }
        function l(e, t, r) {
          return (
            (e[r++] = t),
            (t >>>= 8),
            (e[r++] = t),
            (t >>>= 8),
            (e[r++] = t),
            (t >>>= 8),
            (e[r++] = t),
            r
          );
        }
        ((MD5.native = 0),
          (MD5.id = "MD5"),
          (MD5.size = 16),
          (MD5.bits = 128),
          (MD5.blockSize = 64),
          (MD5.zero = t.alloc(16, 0)),
          (MD5.ctx = new MD5()),
          (e.exports = MD5));
      }).call(this, r(2).Buffer);
    },
    11042: function (e, t, r) {
      "use strict";
      const i = r(6823),
        n = r(6837);
      e.exports = new i("ED448", "X448", n);
    },
    11055: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(4852),
          s = r(6839),
          d = r(3012),
          o = new s();
        class Hash160 {
          constructor() {
            this.ctx = new n();
          }
          init() {
            return (this.ctx.init(), this);
          }
          update(e) {
            return (this.ctx.update(e), this);
          }
          final() {
            const e = t.allocUnsafe(32);
            return (
              this.ctx._final(e),
              o.init(),
              o.update(e),
              o._final(e),
              e.slice(0, 20)
            );
          }
          static hash() {
            return new Hash160();
          }
          static hmac() {
            return new d(Hash160, 64);
          }
          static digest(e) {
            return Hash160.ctx.init().update(e).final();
          }
          static root(e, r) {
            return (
              i(t.isBuffer(e) && 20 === e.length),
              i(t.isBuffer(r) && 20 === r.length),
              Hash160.ctx.init().update(e).update(r).final()
            );
          }
          static multi(e, t, r) {
            const i = Hash160.ctx;
            return (
              i.init(),
              i.update(e),
              i.update(t),
              r && i.update(r),
              i.final()
            );
          }
          static mac(e, t) {
            return Hash160.hmac().init(t).update(e).final();
          }
        }
        ((Hash160.native = 0),
          (Hash160.id = "HASH160"),
          (Hash160.size = 20),
          (Hash160.bits = 160),
          (Hash160.blockSize = 64),
          (Hash160.zero = t.alloc(20, 0)),
          (Hash160.ctx = new Hash160()),
          (e.exports = Hash160));
      }).call(this, r(2).Buffer);
    },
    11057: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(4852),
          s = r(3012);
        class Hash256 {
          constructor() {
            this.ctx = new n();
          }
          init() {
            return (this.ctx.init(), this);
          }
          update(e) {
            return (this.ctx.update(e), this);
          }
          final() {
            const e = t.allocUnsafe(32);
            return (
              this.ctx._final(e),
              this.ctx.init(),
              this.ctx.update(e),
              this.ctx._final(e),
              e
            );
          }
          static hash() {
            return new Hash256();
          }
          static hmac() {
            return new s(Hash256, 64);
          }
          static digest(e) {
            return Hash256.ctx.init().update(e).final();
          }
          static root(e, r) {
            return (
              i(t.isBuffer(e) && 32 === e.length),
              i(t.isBuffer(r) && 32 === r.length),
              Hash256.ctx.init().update(e).update(r).final()
            );
          }
          static multi(e, t, r) {
            const i = Hash256.ctx;
            return (
              i.init(),
              i.update(e),
              i.update(t),
              r && i.update(r),
              i.final()
            );
          }
          static mac(e, t) {
            return Hash256.hmac().init(t).update(e).final();
          }
        }
        ((Hash256.native = 0),
          (Hash256.id = "HASH256"),
          (Hash256.size = 32),
          (Hash256.bits = 256),
          (Hash256.blockSize = 64),
          (Hash256.zero = t.alloc(32, 0)),
          (Hash256.ctx = new Hash256()),
          (e.exports = Hash256));
      }).call(this, r(2).Buffer);
    },
    11068: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(3012),
          s = -1,
          d = t.alloc(8, 0),
          o = t.alloc(64, 0);
        o[0] = 128;
        const f = new Uint32Array([
          1732584193, 4023233417, 2562383102, 271733878,
        ]);
        class MD4 {
          constructor() {
            ((this.state = new Uint32Array(4)),
              (this.msg = new Uint32Array(16)),
              (this.block = t.allocUnsafe(64)),
              (this.size = s));
          }
          init() {
            return (
              (this.state[0] = f[0]),
              (this.state[1] = f[1]),
              (this.state[2] = f[2]),
              (this.state[3] = f[3]),
              (this.size = 0),
              this
            );
          }
          update(e) {
            return (i(t.isBuffer(e)), this._update(e, e.length), this);
          }
          final() {
            return this._final(t.allocUnsafe(16));
          }
          _update(e, t) {
            i(this.size !== s, "Context already finalized.");
            let r = 63 & this.size,
              n = 0;
            if (((this.size += t), r > 0)) {
              let i = 64 - r;
              if (
                (i > t && (i = t),
                e.copy(this.block, r, n, n + i),
                (r += i),
                (t -= i),
                (n += i),
                r < 64)
              )
                return;
              this.transform(this.block, 0);
            }
            while (t >= 64) (this.transform(e, n), (n += 64), (t -= 64));
            t > 0 && e.copy(this.block, 0, n, n + t);
          }
          _final(e) {
            i(this.size !== s, "Context already finalized.");
            const t = 63 & this.size,
              r = 8 * this.size;
            (v(d, r, 0),
              v(d, r * (1 / 4294967296), 4),
              this._update(o, 1 + ((119 - t) & 63)),
              this._update(d, 8));
            for (let i = 0; i < 4; i++)
              (v(e, this.state[i], 4 * i), (this.state[i] = 0));
            for (let i = 0; i < 16; i++) this.msg[i] = 0;
            for (let i = 0; i < 64; i++) this.block[i] = 0;
            return ((this.size = s), e);
          }
          transform(e, t) {
            const r = this.msg;
            let i = this.state[0],
              n = this.state[1],
              s = this.state[2],
              d = this.state[3];
            for (let o = 0; o < 16; o++) r[o] = m(e, t + 4 * o);
            for (const o of [0, 4, 8, 12])
              ((i = l(i, n, s, d, r[o], 3)),
                (d = l(d, i, n, s, r[o + 1], 7)),
                (s = l(s, d, i, n, r[o + 2], 11)),
                (n = l(n, s, d, i, r[o + 3], 19)));
            for (let o = 0; o < 4; o++)
              ((i = a(i, n, s, d, r[o], 3)),
                (d = a(d, i, n, s, r[o + 4], 5)),
                (s = a(s, d, i, n, r[o + 8], 9)),
                (n = a(n, s, d, i, r[o + 12], 13)));
            for (const o of [0, 2, 1, 3])
              ((i = p(i, n, s, d, r[o], 3)),
                (d = p(d, i, n, s, r[o + 8], 9)),
                (s = p(s, d, i, n, r[o + 4], 11)),
                (n = p(n, s, d, i, r[o + 12], 15)));
            ((this.state[0] += i),
              (this.state[1] += n),
              (this.state[2] += s),
              (this.state[3] += d));
          }
          static hash() {
            return new MD4();
          }
          static hmac() {
            return new n(MD4, 64);
          }
          static digest(e) {
            return MD4.ctx.init().update(e).final();
          }
          static root(e, r) {
            return (
              i(t.isBuffer(e) && 16 === e.length),
              i(t.isBuffer(r) && 16 === r.length),
              MD4.ctx.init().update(e).update(r).final()
            );
          }
          static multi(e, t, r) {
            const i = MD4.ctx;
            return (
              i.init(),
              i.update(e),
              i.update(t),
              r && i.update(r),
              i.final()
            );
          }
          static mac(e, t) {
            return MD4.hmac().init(t).update(e).final();
          }
        }
        function u(e, t, r) {
          return (e & t) | (~e & r);
        }
        function h(e, t, r) {
          return (e & t) | (e & r) | (t & r);
        }
        function c(e, t, r) {
          return e ^ t ^ r;
        }
        function l(e, t, r, i, n, s) {
          return b(e + u(t, r, i) + n, s);
        }
        function a(e, t, r, i, n, s) {
          return b(e + h(t, r, i) + n + 1518500249, s);
        }
        function p(e, t, r, i, n, s) {
          return b(e + c(t, r, i) + n + 1859775393, s);
        }
        function b(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function m(e, t) {
          return e[t++] + 256 * e[t++] + 65536 * e[t++] + 16777216 * e[t];
        }
        function v(e, t, r) {
          return (
            (e[r++] = t),
            (t >>>= 8),
            (e[r++] = t),
            (t >>>= 8),
            (e[r++] = t),
            (t >>>= 8),
            (e[r++] = t),
            r
          );
        }
        ((MD4.native = 0),
          (MD4.id = "MD4"),
          (MD4.size = 16),
          (MD4.bits = 128),
          (MD4.blockSize = 64),
          (MD4.zero = t.alloc(16, 0)),
          (MD4.ctx = new MD4()),
          (e.exports = MD4));
      }).call(this, r(2).Buffer);
    },
    11074: function (e, t, r) {
      "use strict";
      (function (e) {
        const i = r(2769);
        function n(t, r) {
          (i(e.isBuffer(t)), i("number" === typeof r));
          const n = t.length - (t.length % 4),
            s = 3432918353,
            u = 461845907;
          let h = 0 | r;
          for (let e = 0; e < n; e += 4) {
            let r = f(t, e);
            ((r = d(r, s)),
              (r = o(r, 15)),
              (r = d(r, u)),
              (h ^= r),
              (h = o(h, 13)),
              (h = (d(h, 5) + 3864292196) | 0));
          }
          let c = 0;
          switch (3 & t.length) {
            case 3:
              c ^= t[n + 2] << 16;
            case 2:
              c ^= t[n + 1] << 8;
            case 1:
              ((c ^= t[n + 0]),
                (c = d(c, s)),
                (c = o(c, 15)),
                (c = d(c, u)),
                (h ^= c));
          }
          return (
            (h ^= t.length),
            (h ^= h >>> 16),
            (h = d(h, 2246822507)),
            (h ^= h >>> 13),
            (h = d(h, 3266489909)),
            (h ^= h >>> 16),
            h >>> 0
          );
        }
        function s(e, t, r) {
          (i("number" === typeof t), i("number" === typeof r));
          const s = d(t, 4221880213) + (0 | r);
          return n(e, s);
        }
        function d(e, t) {
          const r = 65535 & e,
            i = 65535 & t,
            n = e >>> 16,
            s = t >>> 16,
            d = r * i,
            o = n * i + s * r + (d >>> 16);
          return (o << 16) | (65535 & d);
        }
        function o(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function f(e, t) {
          return e[t++] + 256 * e[t++] + 65536 * e[t++] + 16777216 * e[t];
        }
        ((t.native = 0), (t.sum = n), (t.tweak = s));
      }).call(this, r(2).Buffer);
    },
    3964: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(3615),
          s = r(5659),
          d = r(6833),
          o = r(3202),
          f = r(5668),
          u = r(3963),
          h = r(3842),
          c = r(3201),
          l = r(11077),
          a = r(5664),
          { curves: p } = r(6824);
        class ECDSA {
          constructor(e, t, r) {
            (i("string" === typeof e),
              i(t),
              (this.id = e),
              (this.type = "short"),
              (this.hash = t),
              (this.native = 0),
              (this._pre = r || null),
              (this._curve = null),
              (this._schnorr = null));
          }
          get curve() {
            return (
              this._curve ||
                ((this._curve = new p[this.id](this._pre)),
                this._curve.precompute(c),
                (this._pre = null)),
              this._curve
            );
          }
          get schnorr() {
            return (
              this._schnorr || (this._schnorr = new l(this.curve, this.hash)),
              this._schnorr
            );
          }
          get size() {
            return this.curve.fieldSize;
          }
          get bits() {
            return this.curve.fieldBits;
          }
          privateKeyGenerate() {
            const e = this.curve.randomScalar(c);
            return this.curve.encodeScalar(e);
          }
          privateKeyVerify(e) {
            i(t.isBuffer(e));
            let r = null;
            try {
              r = this.curve.decodeScalar(e);
            } catch (n) {
              return !1;
            }
            return !(r.isZero() || r.cmp(this.curve.n) >= 0);
          }
          privateKeyExport(e, t) {
            const r = this.publicKeyCreate(e, t);
            return new f.ECPrivateKey(1, e, this.id, r).encode();
          }
          privateKeyImport(e) {
            const t = f.ECPrivateKey.decode(e),
              r = t.namedCurveOID.toString();
            (i(1 === t.version.toNumber()),
              i(r === o.objects.curves[this.id] || r === o.objects.NONE));
            const { value: s } = t.privateKey;
            if (s.length > this.curve.scalarSize)
              throw new Error("Invalid private key.");
            const d = n.decode(s, this.curve.endian);
            if (d.isZero() || d.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            return this.curve.encodeScalar(d);
          }
          privateKeyExportPKCS8(e, t) {
            const r = this.publicKeyCreate(e, t),
              i = o.objects.NONE;
            return new u.PrivateKeyInfo(
              0,
              o.objects.keyAlgs.ECDSA,
              new o.OID(o.objects.curves[this.id]),
              new f.ECPrivateKey(1, e, i, r).encode(),
            ).encode();
          }
          privateKeyImportPKCS8(e) {
            const t = u.PrivateKeyInfo.decode(e),
              { algorithm: r, parameters: n } = t.algorithm;
            return (
              i(0 === t.version.toNumber()),
              i(r.toString() === o.objects.keyAlgs.ECDSA),
              i(n.node.type === o.types.OID),
              i(n.node.toString() === o.objects.curves[this.id]),
              this.privateKeyImport(t.privateKey.value)
            );
          }
          privateKeyExportJWK(e) {
            return s.privateKeyExportJWK(this, e);
          }
          privateKeyImportJWK(e) {
            return s.privateKeyImportJWK(this, e);
          }
          privateKeyTweakAdd(e, t) {
            const r = this.curve.decodeScalar(t);
            if (r.cmp(this.curve.n) >= 0) throw new Error("Invalid scalar.");
            const i = this.curve.decodeScalar(e);
            if (i.isZero() || i.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            const n = i.iadd(r).imod(this.curve.n);
            if (n.isZero()) throw new Error("Invalid private key.");
            return this.curve.encodeScalar(n);
          }
          privateKeyTweakMul(e, t) {
            const r = this.curve.decodeScalar(t);
            if (r.isZero() || r.cmp(this.curve.n) >= 0)
              throw new Error("Invalid scalar.");
            const i = this.curve.decodeScalar(e);
            if (i.isZero() || i.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            const n = i.imul(r).imod(this.curve.n);
            if (n.isZero()) throw new Error("Invalid private key.");
            return this.curve.encodeScalar(n);
          }
          privateKeyReduce(e) {
            (i(t.isBuffer(e)),
              e.length > this.curve.scalarSize &&
                (e = e.slice(0, this.curve.scalarSize)));
            const r = n.decode(e, this.curve.endian).imod(this.curve.n);
            return this.curve.encodeScalar(r);
          }
          privateKeyNegate(e) {
            const t = this.curve.decodeScalar(e);
            if (t.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            const r = t.ineg().imod(this.curve.n);
            return this.curve.encodeScalar(r);
          }
          privateKeyInvert(e) {
            const t = this.curve.decodeScalar(e);
            if (t.isZero() || t.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            const r = t.invert(this.curve.n);
            return this.curve.encodeScalar(r);
          }
          publicKeyCreate(e, t) {
            const r = this.curve.decodeScalar(e);
            if (r.isZero() || r.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            const i = this.curve.g.mulBlind(r);
            return i.encode(t);
          }
          publicKeyConvert(e, t) {
            const r = this.curve.decodePoint(e);
            return r.encode(t);
          }
          publicKeyFromUniform(e, t) {
            const r = this.curve.decodeUniform(e),
              i = this.curve.pointFromUniform(r);
            return i.encode(t);
          }
          publicKeyFromHash(e, t) {
            const r = this.curve.pointFromHash(e);
            return r.encode(t);
          }
          publicKeyVerify(e) {
            i(t.isBuffer(e));
            try {
              this.curve.decodePoint(e);
            } catch (r) {
              return !1;
            }
            return !0;
          }
          publicKeyExport(e) {
            return this.publicKeyConvert(e, !1).slice(1);
          }
          publicKeyImport(e, r) {
            (i(t.isBuffer(e)), i(e.length === 2 * this.curve.fieldSize));
            const n = t.allocUnsafe(1 + e.length);
            return ((n[0] = 4), e.copy(n, 1), this.publicKeyConvert(n, r));
          }
          publicKeyExportSPKI(e, t) {
            return new h.SubjectPublicKeyInfo(
              o.objects.keyAlgs.ECDSA,
              new o.OID(o.objects.curves[this.id]),
              this.publicKeyConvert(e, t),
            ).encode();
          }
          publicKeyImportSPKI(e, t) {
            const r = h.SubjectPublicKeyInfo.decode(e),
              { algorithm: n, parameters: s } = r.algorithm;
            return (
              i(n.toString() === o.objects.keyAlgs.ECDSA),
              i(s.node.type === o.types.OID),
              i(s.node.toString() === o.objects.curves[this.id]),
              this.publicKeyConvert(r.publicKey.rightAlign(), t)
            );
          }
          publicKeyExportJWK(e) {
            return s.publicKeyExportJWK(this, e);
          }
          publicKeyImportJWK(e, t) {
            return s.publicKeyImportJWK(this, e, t);
          }
          publicKeyTweakAdd(e, t, r) {
            const i = this.curve.decodeScalar(t);
            if (i.cmp(this.curve.n) >= 0) throw new Error("Invalid scalar.");
            const n = this.curve.decodePoint(e),
              s = this.curve.g.mul(i).add(n);
            return s.encode(r);
          }
          publicKeyTweakMul(e, t, r) {
            const i = this.curve.decodeScalar(t);
            if (i.isZero() || i.cmp(this.curve.n) >= 0)
              throw new Error("Invalid scalar.");
            const n = this.curve.decodePoint(e),
              s = n.mul(i);
            return s.encode(r);
          }
          publicKeyAdd(e, t, r) {
            const i = this.curve.decodePoint(e),
              n = this.curve.decodePoint(t),
              s = i.add(n);
            return s.encode(r);
          }
          publicKeyCombine(e, t) {
            i(Array.isArray(e));
            let r = this.curve.jpoint();
            for (const i of e) {
              const e = this.curve.decodePoint(i);
              r = r.add(e);
            }
            return r.encode(t);
          }
          publicKeyNegate(e, t) {
            const r = this.curve.decodePoint(e),
              i = r.neg();
            return i.encode(t);
          }
          _signatureNormalize(e) {
            const t = this.curve.decodeScalar(e.r),
              r = this.curve.decodeScalar(e.s);
            if (t.isZero() || t.cmp(this.curve.n) >= 0)
              throw new Error("Invalid R value.");
            if (r.isZero() || r.cmp(this.curve.n) >= 0)
              throw new Error("Invalid S value.");
            return (
              r.cmp(this.curve.nh) > 0 &&
                (e.s = this.curve.encodeScalar(r.ineg().imod(this.curve.n))),
              e
            );
          }
          signatureNormalize(e) {
            const t = d.decode(e, this.curve.scalarSize);
            return (
              this._signatureNormalize(t),
              t.encode(this.curve.scalarSize)
            );
          }
          signatureNormalizeDER(e) {
            const t = d.fromDER(e, this.curve.scalarSize);
            return (
              this._signatureNormalize(t),
              t.toDER(this.curve.scalarSize)
            );
          }
          signatureExport(e) {
            return d.toDER(e, this.curve.scalarSize);
          }
          signatureImport(e) {
            return d.toRS(e, this.curve.scalarSize);
          }
          _isLowS(e) {
            const t = this.curve.decodeScalar(e.r),
              r = this.curve.decodeScalar(e.s);
            return (
              !(t.isZero() || t.cmp(this.curve.n) >= 0) &&
              !(r.isZero() || r.cmp(this.curve.n) >= 0) &&
              r.cmp(this.curve.nh) <= 0
            );
          }
          isLowS(e) {
            if ((i(t.isBuffer(e)), e.length !== 2 * this.curve.scalarSize))
              return !1;
            const r = d.decode(e, this.curve.scalarSize);
            return this._isLowS(r);
          }
          isLowDER(e) {
            let r;
            i(t.isBuffer(e));
            try {
              r = d.fromDER(e, this.curve.scalarSize);
            } catch (n) {
              return !1;
            }
            return this._isLowS(r);
          }
          _sign(e, r) {
            i(t.isBuffer(e));
            const n = this.curve.n,
              s = this.curve.nh,
              o = this.curve.g,
              f = this.curve.decodeScalar(r);
            if (f.isZero() || f.cmp(n) >= 0)
              throw new Error("Invalid private key.");
            const u = this._reduce(e),
              h = this.curve.encodeScalar(u),
              c = new a(this.hash, r, h);
            for (;;) {
              const e = c.generate(this.curve.scalarSize),
                t = this._truncate(e);
              if (t.isZero() || t.cmp(n) >= 0) continue;
              const r = o.mulBlind(t);
              if (r.isInfinity()) continue;
              const i = r.getX(),
                h = i.mod(n);
              if (h.isZero()) continue;
              const l = t.fermat(n),
                [a, p] = this.curve.getBlinding(),
                b = f.mul(a).imod(n),
                m = u.mul(a).imod(n),
                v = h.mul(b).imod(n).iadd(m).imod(n).imul(l).imod(n);
              if ((v.imul(p).imod(n), v.isZero())) continue;
              let S = (r.getY().isOdd() ? 1 : 0) | (0 !== i.cmp(h) ? 2 : 0);
              v.cmp(s) > 0 && (v.ineg().imod(n), (S ^= 1));
              const y = new d();
              return (
                (y.r = this.curve.encodeScalar(h)),
                (y.s = this.curve.encodeScalar(v)),
                (y.param = S),
                y
              );
            }
          }
          sign(e, t) {
            const r = this._sign(e, t);
            return r.encode(this.curve.scalarSize);
          }
          signRecoverable(e, t) {
            const r = this._sign(e, t);
            return [r.encode(this.curve.scalarSize), r.param];
          }
          signDER(e, t) {
            const r = this._sign(e, t);
            return r.toDER(this.curve.scalarSize);
          }
          signRecoverableDER(e, t) {
            const r = this._sign(e, t);
            return [r.toDER(this.curve.scalarSize), r.param];
          }
          _verify(e, t, r) {
            const i = this.curve.n,
              n = this.curve.g,
              s = this._reduce(e),
              d = this.curve.decodePoint(r),
              o = this.curve.decodeScalar(t.r),
              f = this.curve.decodeScalar(t.s);
            if (o.isZero() || o.cmp(i) >= 0) return !1;
            if (f.isZero() || f.cmp(i) >= 0) return !1;
            const u = f.invert(i),
              h = s.imul(u).imod(i),
              c = o.mul(u).imod(i);
            if (this.curve.maxwellTrick) {
              const e = n.jmulAdd(h, d, c);
              return !e.isInfinity() && e.eqXToP(o);
            }
            const l = n.mulAdd(h, d, c);
            return !l.isInfinity() && 0 === l.getX().mod(i).cmp(o);
          }
          verify(e, r, n) {
            if (
              (i(t.isBuffer(e)),
              i(t.isBuffer(r)),
              i(t.isBuffer(n)),
              r.length !== 2 * this.curve.scalarSize)
            )
              return !1;
            const s = d.decode(r, this.curve.scalarSize);
            try {
              return this._verify(e, s, n);
            } catch (o) {
              return !1;
            }
          }
          verifyDER(e, r, n) {
            let s;
            (i(t.isBuffer(e)), i(t.isBuffer(r)), i(t.isBuffer(n)));
            try {
              s = d.fromDER(r, this.curve.scalarSize);
            } catch (o) {
              return !1;
            }
            try {
              return this._verify(e, s, n);
            } catch (o) {
              return !1;
            }
          }
          _recover(e, t, r) {
            const i = this.curve.p,
              n = this.curve.n,
              s = this.curve.g,
              d = this._reduce(e),
              o = this.curve.decodeScalar(t.r),
              f = this.curve.decodeScalar(t.s);
            if (o.isZero() || o.cmp(n) >= 0)
              throw new Error("Invalid R value.");
            if (f.isZero() || f.cmp(n) >= 0)
              throw new Error("Invalid S value.");
            const u = 0 !== (1 & r),
              h = r >>> 1;
            let c = o;
            if (h) {
              if (c.cmp(i.mod(n)) >= 0) throw new Error("Invalid R value.");
              c = c.add(n);
            }
            const l = this.curve.pointFromX(c, u),
              a = o.invert(n),
              p = d.imul(a).ineg().imod(n),
              b = f.imul(a).imod(n),
              m = s.mulAdd(p, l, b);
            if (m.isInfinity()) throw new Error("Invalid point.");
            return m;
          }
          recover(e, r, n, s) {
            if (
              (i(t.isBuffer(e)),
              i(t.isBuffer(r)),
              i(n >>> 0 === n),
              i((3 & n) === n, "The recovery param is more than two bits."),
              r.length !== 2 * this.curve.scalarSize)
            )
              return null;
            const o = d.decode(r, this.curve.scalarSize);
            let f;
            try {
              f = this._recover(e, o, n);
            } catch (u) {
              return null;
            }
            return f.encode(s);
          }
          recoverDER(e, r, n, s) {
            let o, f;
            (i(t.isBuffer(e)),
              i(t.isBuffer(r)),
              i(n >>> 0 === n),
              i((3 & n) === n, "The recovery param is more than two bits."));
            try {
              o = d.fromDER(r, this.curve.scalarSize);
            } catch (u) {
              return null;
            }
            try {
              f = this._recover(e, o, n);
            } catch (u) {
              return null;
            }
            return f.encode(s);
          }
          derive(e, t, r) {
            const i = this.curve.decodeScalar(t);
            if (i.isZero() || i.cmp(this.curve.n) >= 0)
              throw new Error("Invalid private key.");
            const n = this.curve.decodePoint(e);
            if (this.curve.h.cmpn(1) > 0 && n.isSmall())
              throw new Error("Invalid point.");
            const s = n.mulConst(i, c);
            return s.encode(r);
          }
          schnorrSign(e, t) {
            return this.schnorr.sign(e, t);
          }
          schnorrVerify(e, t, r) {
            return this.schnorr.verify(e, t, r);
          }
          schnorrVerifyBatch(e) {
            return this.schnorr.verifyBatch(e);
          }
          _truncate(e) {
            i(t.isBuffer(e));
            const r = this.curve.n.bitLength(),
              s = (r + 7) >>> 3;
            e.length > s && (e = e.slice(0, s));
            const d = n.decode(e, this.curve.endian),
              o = 8 * e.length - r;
            return (o > 0 && d.iushrn(o), d);
          }
          _reduce(e) {
            return this._truncate(e).imod(this.curve.n);
          }
        }
        e.exports = ECDSA;
      }).call(this, r(2).Buffer);
    },
    6823: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          { curves: n } = r(6824),
          s = r(5659),
          d = r(3202),
          o = r(3963),
          f = r(3842),
          u = r(3615),
          h = r(5662),
          c = r(3201),
          l = t.alloc(1);
        class EDDSA {
          constructor(e, t, r, n) {
            (i("string" === typeof e),
              i(!t || "string" === typeof t),
              i(r),
              (this.id = e),
              (this.type = "edwards"),
              (this.xid = t || null),
              (this.hash = r),
              (this._pre = n || null),
              (this._curve = null),
              (this._x = null),
              (this.native = 0));
          }
          get curve() {
            return (
              this._curve ||
                ((this._curve = new n[this.id](this._pre)),
                this._curve.precompute(c),
                (this._pre = null)),
              this._curve
            );
          }
          get x() {
            if (!this.xid) throw new Error("No equivalent montgomery curve.");
            return (
              this._x || ((this._x = new n[this.xid]()), this._x.precompute(c)),
              this._x
            );
          }
          get size() {
            return this.curve.fieldSize;
          }
          get bits() {
            return this.curve.fieldBits;
          }
          hashInt(e, r) {
            (i(null == e || "boolean" === typeof e),
              i(null == r || t.isBuffer(r)),
              i(!r || r.length <= 255));
            const n = new this.hash();
            (n.init(),
              this.curve.context || null != e
                ? (n.update(this.curve.prefix),
                  (l[0] = 255 & e),
                  n.update(l),
                  r
                    ? ((l[0] = r.length), n.update(l), n.update(r))
                    : ((l[0] = 0), n.update(l)))
                : i(null == r, "Must pass pre-hash flag with context."));
            for (
              var s = arguments.length, d = new Array(s > 2 ? s - 2 : 0), o = 2;
              o < s;
              o++
            )
              d[o - 2] = arguments[o];
            for (const t of d) n.update(t);
            const f = n.final(2 * this.curve.fieldSize),
              h = u.decode(f, this.curve.endian);
            return h.imod(this.curve.n);
          }
          privateKeyGenerate() {
            return c.randomBytes(this.curve.fieldSize);
          }
          scalarGenerate() {
            const e = c.randomBytes(this.curve.scalarSize);
            return this.curve.clamp(e);
          }
          privateKeyExpand(e) {
            (i(t.isBuffer(e)), i(e.length === this.curve.fieldSize));
            const r = this.hash.digest(e, 2 * this.curve.fieldSize);
            return this.curve.splitHash(r);
          }
          privateKeyConvert(e) {
            const [t] = this.privateKeyExpand(e);
            return t;
          }
          privateKeyVerify(e) {
            return (i(t.isBuffer(e)), e.length === this.curve.fieldSize);
          }
          scalarVerify(e) {
            return this.curve.isClamped(e);
          }
          scalarClamp(e) {
            return (
              i(t.isBuffer(e)),
              i(e.length === this.curve.scalarSize),
              this.curve.clamp(t.from(e))
            );
          }
          privateKeyExport(e) {
            if (!this.privateKeyVerify(e))
              throw new Error("Invalid private key.");
            return new d.OctString(e).encode();
          }
          privateKeyImport(e) {
            const t = d.OctString.decode(e);
            if (!this.privateKeyVerify(t.value))
              throw new Error("Invalid private key.");
            return t.value;
          }
          privateKeyExportPKCS8(e) {
            return new o.PrivateKeyInfo(
              0,
              d.objects.curves[this.id],
              new d.Null(),
              this.privateKeyExport(e),
            ).encode();
          }
          privateKeyImportPKCS8(e) {
            const t = o.PrivateKeyInfo.decode(e),
              r = t.version.toNumber(),
              { algorithm: n, parameters: s } = t.algorithm;
            return (
              i(0 === r || 1 === r),
              i(n.toString() === d.objects.curves[this.id]),
              i(s.node.type === d.types.NULL),
              this.privateKeyImport(t.privateKey.value)
            );
          }
          privateKeyExportJWK(e) {
            return s.privateKeyExportJWK(this, e);
          }
          privateKeyImportJWK(e) {
            return s.privateKeyImportJWK(this, e);
          }
          scalarTweakAdd(e, t) {
            const r = this.curve.decodeScalar(e),
              i = this.curve.decodeScalar(t),
              n = r.iadd(i).imod(this.curve.n);
            if (n.isZero()) throw new Error("Invalid scalar.");
            return this.curve.encodeScalar(n);
          }
          scalarTweakMul(e, t) {
            const r = this.curve.decodeScalar(e),
              i = this.curve.decodeScalar(t),
              n = r.imul(i).imod(this.curve.n);
            if (n.isZero()) throw new Error("Invalid scalar.");
            return this.curve.encodeScalar(n);
          }
          scalarReduce(e) {
            (i(t.isBuffer(e)),
              e.length > this.curve.scalarSize &&
                (e = e.slice(0, this.curve.scalarSize)));
            const r = u.decode(e, this.curve.endian).imod(this.curve.n);
            return this.curve.encodeScalar(r);
          }
          scalarNegate(e) {
            const t = this.curve.decodeScalar(e).imod(this.curve.n),
              r = t.ineg().imod(this.curve.n);
            return this.curve.encodeScalar(r);
          }
          scalarInvert(e) {
            const t = this.curve.decodeScalar(e).imod(this.curve.n);
            if (t.isZero()) throw new Error("Invalid scalar.");
            const r = t.invert(this.curve.n);
            return this.curve.encodeScalar(r);
          }
          publicKeyCreate(e) {
            const t = this.privateKeyConvert(e);
            return this.publicKeyFromScalar(t);
          }
          publicKeyFromScalar(e) {
            const t = this.curve.decodeScalar(e).imod(this.curve.n),
              r = this.curve.g.mulBlind(t);
            return r.encode();
          }
          publicKeyConvert(e) {
            const t = this.curve.decodePoint(e);
            return this.x.pointFromEdwards(t).encode();
          }
          publicKeyDeconvert(e, t) {
            const r = this.x.decodePoint(e);
            if (!r.validate()) throw new Error("Invalid point.");
            return this.curve.pointFromMont(r, t).encode();
          }
          publicKeyFromUniform(e) {
            const t = this.curve.decodeUniform(e),
              r = this.curve.pointFromUniform(this.x, t);
            return r.encode();
          }
          pointFromUniform(e) {
            const t = this.x.decodeUniform(e),
              [r] = this.x.pointFromUniform(t);
            return r.encode();
          }
          publicKeyToUniform(e) {
            const t = this.curve.decodePoint(e),
              r = this.curve.pointToUniform(this.x, t);
            return this.curve.encodeUniform(r, c);
          }
          pointToUniform(e, t) {
            const r = this.x.decodePoint(e),
              i = this.x.pointToUniform(r, t);
            return this.x.encodeUniform(i, c);
          }
          publicKeyFromHash(e) {
            const t = this.curve.pointFromHash(this.x, e);
            return t.encode();
          }
          pointFromHash(e) {
            const t = this.x.pointFromHash(this.curve, e);
            return t.encode();
          }
          publicKeyVerify(e) {
            i(t.isBuffer(e));
            try {
              this.curve.decodePoint(e);
            } catch (r) {
              return !1;
            }
            return !0;
          }
          pointVerify(e) {
            let r;
            i(t.isBuffer(e));
            try {
              r = this.x.decodePoint(e);
            } catch (n) {
              return !1;
            }
            return r.validate();
          }
          publicKeyExport(e) {
            if (!this.publicKeyVerify(e))
              throw new Error("Invalid public key.");
            return t.from(e);
          }
          publicKeyImport(e) {
            if (!this.publicKeyVerify(e))
              throw new Error("Invalid public key.");
            return t.from(e);
          }
          publicKeyExportSPKI(e) {
            return new f.SubjectPublicKeyInfo(
              d.objects.curves[this.id],
              new d.Null(),
              this.publicKeyExport(e),
            ).encode();
          }
          publicKeyImportSPKI(e) {
            const t = f.SubjectPublicKeyInfo.decode(e),
              { algorithm: r, parameters: n } = t.algorithm;
            return (
              i(r.toString() === d.objects.curves[this.id]),
              i(n.node.type === d.types.NULL),
              this.publicKeyImport(t.publicKey.rightAlign())
            );
          }
          publicKeyExportJWK(e) {
            return s.publicKeyExportJWK(this, e);
          }
          publicKeyImportJWK(e) {
            return s.publicKeyImportJWK(this, e, !1);
          }
          publicKeyTweakAdd(e, t) {
            const r = this.curve.decodeScalar(t).imod(this.curve.n),
              i = this.curve.decodePoint(e),
              n = this.curve.g.mul(r),
              s = n.add(i);
            return s.encode();
          }
          publicKeyTweakMul(e, t) {
            const r = this.curve.decodeScalar(t),
              i = this.curve.decodePoint(e),
              n = i.mul(r);
            return n.encode();
          }
          publicKeyAdd(e, t) {
            const r = this.curve.decodePoint(e),
              i = this.curve.decodePoint(t),
              n = r.add(i);
            return n.encode();
          }
          publicKeyCombine(e) {
            i(Array.isArray(e));
            let t = this.curve.point();
            for (const r of e) {
              const e = this.curve.decodePoint(r);
              t = t.add(e);
            }
            return t.encode();
          }
          publicKeyNegate(e) {
            const t = this.curve.decodePoint(e),
              r = t.neg();
            return r.encode();
          }
          sign(e, t, r, i) {
            const [n, s] = this.privateKeyExpand(t);
            return this.signWithScalar(e, n, s, r, i);
          }
          signWithScalar(e, r, n, s, d) {
            (i(t.isBuffer(e)),
              i(t.isBuffer(n)),
              i(n.length === this.curve.fieldSize));
            const o = this.curve.n,
              f = this.curve.g,
              u = this.hashInt(s, d, n, e),
              h = f.mulBlind(u).encode(),
              c = this.curve.decodeScalar(r),
              l = f.mulBlind(c).encode(),
              a = this.hashInt(s, d, h, l, e),
              [p, b] = this.curve.getBlinding();
            (c.imul(p).imod(o), u.imul(p).imod(o));
            const m = u.iadd(a.imul(c)).imod(o);
            return (
              m.imul(b).imod(o),
              t.concat([h, this.curve.encodeField(m)])
            );
          }
          signTweakAdd(e, t, r, i, n) {
            const [s, d] = this.privateKeyExpand(t),
              o = this.scalarTweakAdd(s, r),
              f = this.hash.multi(d, r, null, 2 * this.curve.fieldSize),
              u = f.slice(0, this.curve.fieldSize);
            return this.signWithScalar(e, o, u, i, n);
          }
          signTweakMul(e, t, r, i, n) {
            const [s, d] = this.privateKeyExpand(t),
              o = this.scalarTweakMul(s, r),
              f = this.hash.multi(d, r, null, 2 * this.curve.fieldSize),
              u = f.slice(0, this.curve.fieldSize);
            return this.signWithScalar(e, o, u, i, n);
          }
          verify(e, r, n, s, d) {
            if (
              (i(t.isBuffer(e)),
              i(t.isBuffer(r)),
              i(t.isBuffer(n)),
              i(null == s || "boolean" === typeof s),
              i(null == d || t.isBuffer(d)),
              i(!d || d.length <= 255),
              this.curve.context ||
                null == d ||
                i(null != s, "Must pass pre-hash flag with context."),
              r.length !== 2 * this.curve.fieldSize)
            )
              return !1;
            if (n.length !== this.curve.fieldSize) return !1;
            try {
              return this.curve.context
                ? this._verifySingle(e, r, n, s, d)
                : this._verify(e, r, n, s, d);
            } catch (o) {
              return !1;
            }
          }
          _verify(e, t, r, i, n) {
            const s = this.curve.n,
              d = this.curve.g,
              o = t.slice(0, this.curve.fieldSize),
              f = t.slice(this.curve.fieldSize),
              u = this.curve.decodePoint(o),
              h = this.curve.decodeField(f),
              c = this.curve.decodePoint(r);
            if (h.cmp(s) >= 0) return !1;
            const l = this.hashInt(i, n, o, r, e);
            return d.mulAdd(h, c.neg(), l).eq(u);
          }
          verifySingle(e, r, n, s, d) {
            if (
              (i(t.isBuffer(e)),
              i(t.isBuffer(r)),
              i(t.isBuffer(n)),
              i(null == s || "boolean" === typeof s),
              i(null == d || t.isBuffer(d)),
              i(!d || d.length <= 255),
              this.curve.context ||
                null == d ||
                i(null != s, "Must pass pre-hash flag with context."),
              r.length !== 2 * this.curve.fieldSize)
            )
              return !1;
            if (n.length !== this.curve.fieldSize) return !1;
            try {
              return this._verifySingle(e, r, n, s, d);
            } catch (o) {
              return !1;
            }
          }
          _verifySingle(e, t, r, i, n) {
            const s = this.curve.n,
              d = this.curve.h.toNumber(),
              o = this.curve.g,
              f = t.slice(0, this.curve.fieldSize),
              u = t.slice(this.curve.fieldSize),
              h = this.curve.decodePoint(f),
              c = this.curve.decodeField(u),
              l = this.curve.decodePoint(r);
            if (c.cmp(s) >= 0) return !1;
            const a = this.hashInt(i, n, f, r, e),
              p = c.imuln(d),
              b = a.imuln(d),
              m = h.mulH();
            return o.mulAdd(p, l.neg(), b).eq(m);
          }
          verifyBatch(e, r, n) {
            (i(Array.isArray(e)),
              i(null == r || "boolean" === typeof r),
              i(null == n || t.isBuffer(n)),
              i(!n || n.length <= 255),
              this.curve.context ||
                null == n ||
                i(null != r, "Must pass pre-hash flag with context."));
            for (const d of e) {
              i(Array.isArray(d) && 3 === d.length);
              const [e, r, n] = d;
              if (
                (i(t.isBuffer(e)),
                i(t.isBuffer(r)),
                i(t.isBuffer(n)),
                r.length !== 2 * this.curve.fieldSize)
              )
                return !1;
              if (n.length !== this.curve.fieldSize) return !1;
            }
            try {
              return this._verifyBatch(e, r, n);
            } catch (s) {
              return !1;
            }
          }
          _verifyBatch(e, t, r) {
            const i = this.curve.n,
              n = this.curve.h.toNumber(),
              s = this.curve.g,
              d = new RNG(this),
              o = new Array(1 + 2 * e.length),
              f = new Array(1 + 2 * e.length),
              h = new u(0);
            (d.init(e), (o[0] = s), (f[0] = h));
            for (let c = 0; c < e.length; c++) {
              const [s, l, a] = e[c],
                p = l.slice(0, this.curve.fieldSize),
                b = l.slice(this.curve.fieldSize),
                m = this.curve.decodePoint(p),
                v = this.curve.decodeField(b),
                S = this.curve.decodePoint(a);
              if (v.cmp(i) >= 0) return !1;
              const y = this.hashInt(t, r, p, a, s),
                M = 0 === c ? new u(1) : d.generate(),
                w = y.imul(M).imod(i);
              (h.iadd(v.imul(M)).imod(i),
                (o[1 + 2 * c + 0] = m),
                (f[1 + 2 * c + 0] = M.imuln(n)),
                (o[1 + 2 * c + 1] = S),
                (f[1 + 2 * c + 1] = w.imuln(n)));
            }
            return (
              h.ineg().imod(i),
              h.imuln(n),
              this.curve.mulAll(o, f).isInfinity()
            );
          }
          derive(e, t) {
            const r = this.privateKeyConvert(t);
            return this.deriveWithScalar(e, r);
          }
          deriveWithScalar(e, t) {
            const r = this.curve.decodeScalar(t),
              i = this.curve.decodePoint(e),
              n = this.curve.reduce(r),
              s = i.mulConst(n, c);
            return s.encode();
          }
          exchange(e, t) {
            const r = this.privateKeyConvert(t);
            return this.exchangeWithScalar(e, r);
          }
          exchangeWithScalar(e, t) {
            const r = this.x.decodeScalar(t),
              i = this.x.decodePoint(e),
              n = this.x.reduce(r),
              s = i.mulConst(n, c);
            return s.encode();
          }
        }
        class RNG {
          constructor(e) {
            ((this.curve = e.curve),
              (this.hash = e.hash),
              (this.chacha = new h()),
              (this.iv = t.from("EDDSARNG")));
          }
          init(e) {
            i(Array.isArray(e));
            const t = new this.hash();
            t.init();
            for (const [i, n, s] of e)
              (t.update(this.hash.digest(i)), t.update(n), t.update(s));
            let r = t.final(32);
            return (
              r.length > 32 && (r = r.slice(0, 32)),
              this.chacha.init(r, this.iv, 0),
              this
            );
          }
          randomBytes(e) {
            return this.chacha.encrypt(t.alloc(e, 0));
          }
          generate() {
            return u.random(this, 1, this.curve.n);
          }
        }
        e.exports = EDDSA;
      }).call(this, r(2).Buffer);
    },
    6824: function (e, t, r) {
      "use strict";
      (function (e) {
        const { custom: i } = r(3961),
          n = r(3615),
          s = { AFFINE: 0, JACOBIAN: 1, PROJECTIVE: 2 },
          d = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
        class Curve {
          constructor(e, t) {
            ((this.id = null),
              (this.ossl = null),
              (this.type = "base"),
              (this.endian = "be"),
              (this.hash = null),
              (this.prefix = null),
              (this.context = !1),
              (this.iso4 = !1),
              (this.prime = null),
              (this.p = null),
              (this.red = null),
              (this.fieldSize = 0),
              (this.fieldBits = 0),
              (this.signBit = 0),
              (this.n = null),
              (this.h = null),
              (this.q = null),
              (this.z = null),
              (this.g = null),
              (this.nh = null),
              (this.scalarSize = 0),
              (this.scalarBits = 0),
              (this.mask = null),
              (this.maxwellTrick = !1),
              (this.redN = null),
              (this.zero = null),
              (this.one = null),
              (this.two = null),
              (this.three = null),
              (this.blinding = null),
              (this.endo = null),
              (this.exp = null),
              (this.inv = null),
              this._init(e, t));
          }
          _init(t, r) {
            return (
              a("string" === typeof t),
              a(r && "object" === typeof r),
              a(null != r.p, "Must pass a prime."),
              a(null == r.id || "string" === typeof r.id),
              a(null == r.ossl || "string" === typeof r.ossl),
              a(null == r.endian || "string" === typeof r.endian),
              a(null == r.hash || "string" === typeof r.hash),
              a(null == r.prefix || "string" === typeof r.prefix),
              a(null == r.context || "boolean" === typeof r.context),
              a(null == r.iso4 || "boolean" === typeof r.iso4),
              a(null == r.prime || "string" === typeof r.prime),
              (this.id = r.id || null),
              (this.ossl = r.ossl || null),
              (this.type = t),
              (this.endian = r.endian || ("short" === t ? "be" : "le")),
              (this.hash = r.hash || null),
              (this.prefix = r.prefix ? e.from(r.prefix, "binary") : null),
              (this.context = r.context || !1),
              (this.iso4 = r.iso4 || !1),
              (this.prime = r.prime || null),
              (this.p = n.fromJSON(r.p)),
              (this.red = r.prime ? n.red(r.prime) : n.mont(this.p)),
              (this.fieldSize = this.p.byteLength()),
              (this.fieldBits = this.p.bitLength()),
              (this.signBit = 8 * this.fieldSize - 1),
              this.p.testn(this.signBit) &&
                ("edwards" === this.type && (this.fieldSize += 1),
                ("mont" !== this.type && "edwards" !== this.type) ||
                  (this.signBit += 8)),
              (this.n = n.fromJSON(r.n || "0")),
              (this.h = n.fromJSON(r.h || "1")),
              (this.q = this.n.mul(this.h)),
              (this.z = n.fromJSON(r.z || "0").toRed(this.red)),
              (this.g = null),
              (this.nh = this.n.ushrn(1)),
              (this.scalarSize = Math.max(
                this.n.byteLength(),
                this.p.byteLength(),
              )),
              (this.scalarBits = this.n.bitLength()),
              (this.mask = null),
              (this.maxwellTrick =
                !this.n.isZero() && this.p.div(this.n).cmpn(100) <= 0),
              (this.redN = this.n.toRed(this.red)),
              (this.zero = new n(0).toRed(this.red)),
              (this.one = new n(1).toRed(this.red)),
              (this.two = new n(2).toRed(this.red)),
              (this.three = new n(3).toRed(this.red)),
              (this.blinding = null),
              (this.endo = null),
              (this.exp = null),
              (this.inv = null),
              this
            );
          }
          _finalize(e) {
            return (
              a(e && "object" === typeof e),
              (this.mask = new Mask(this)),
              (this.g = e.g ? this.pointFromJSON(e.g) : this.point()),
              this
            );
          }
          _scalarBlinding(e) {
            if (!e) return null;
            if (this.n.isZero()) return null;
            for (;;) {
              const r = this.randomScalar(e);
              try {
                return [r, r.invert(this.n)];
              } catch (t) {
                continue;
              }
            }
          }
          _simpleMul(e, t) {
            (a(e instanceof Point), a(t instanceof n), a(!t.red));
            const r = t.bitLength();
            t.isNeg() && (e = e.neg());
            let i = this.jpoint();
            for (let n = r - 1; n >= 0; n--) {
              const r = t.utestn(n);
              ((i = i.dbl()), 1 === r && (i = i.add(e)));
            }
            return i;
          }
          _simpleMulAdd(e, t) {
            (a(Array.isArray(e)),
              a(Array.isArray(t)),
              a(e.length === t.length));
            const r = e.length,
              i = new Array(r),
              s = t;
            let d = 0;
            for (let f = 0; f < r; f++) {
              const r = e[f],
                s = t[f];
              if (
                (a(r instanceof Point),
                a(s instanceof n),
                a(!s.red),
                f > 0 && r.type !== e[f - 1].type)
              )
                throw new Error("Cannot mix points.");
              ((i[f] = s.isNeg() ? r.neg() : r),
                (d = Math.max(d, s.bitLength())));
            }
            let o = this.jpoint();
            for (let n = d - 1; n >= 0; n--) {
              o = o.dbl();
              for (let e = 0; e < r; e++) {
                const t = i[e],
                  r = s[e],
                  d = r.utestn(n);
                1 === d && (o = o.add(t));
              }
            }
            return o;
          }
          _constMul(e, t) {
            return (
              a(e instanceof Point),
              this.n.isZero()
                ? this._simpleMul(e, t)
                : "short" === this.type
                  ? this._coZLadderMul(e, t)
                  : this._ladderMul(e, t)
            );
          }
          _ladderMul(e, t) {
            (a(e instanceof Point), a(t instanceof n), a(!t.red));
            const [r, i, s] = c(t, this.q);
            let d = e.toJ().clone(),
              o = this.jpoint().clone(),
              f = 0;
            for (let n = i - 1; n >= 0; n--) {
              const e = (s[n >> 3] >> (7 & n)) & 1;
              (d.swap(o, f ^ e), (d = d.uadd(o)), (o = o.udbl()), (f = e));
            }
            return (d.swap(o, f), o.swap(o.neg(), r), o);
          }
          _coZLadderMul(e, t) {
            (a(e instanceof Point), a(t instanceof n), a(!t.red));
            const [r, i, s] = l(t, this.q);
            let [d, o] = e.toJ().zdblu(),
              f = 0;
            for (let n = i - 2; n >= 0; n--) {
              const e = (s[n >> 3] >> (7 & n)) & 1;
              (d.swap(o, f ^ e),
                ([d, o] = o.zaddc(d)),
                ([o, d] = d.zaddu(o)),
                (f = e));
            }
            return (d.swap(o, f), o.swap(o.neg(), r), o);
          }
          _fixedNafMul(e, t) {
            (a(e instanceof Point), a(t instanceof n), a(e.pre));
            const { step: r, points: i } = e._getDoubles(0, 0),
              s = f(t, 1, t.bitLength() + 1, r),
              d = ((1 << (r + 1)) - (r % 2 === 0 ? 2 : 1)) / 3;
            let o = this.jpoint(),
              u = this.jpoint();
            for (let n = d; n > 0; n--) {
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                t === n
                  ? (u = u.add(i[e]))
                  : t === -n && (u = u.add(i[e].neg()));
              }
              o = o.add(u);
            }
            return o;
          }
          _wnafMul(e, t, r) {
            (a(t instanceof Point), a(r instanceof n));
            const { width: i, points: s } = t._safeNAF(e),
              d = o(r, i, r.bitLength() + 1);
            let f = this.jpoint();
            for (let n = d.length - 1; n >= 0; n--) {
              let e = 0;
              for (; n >= 0 && 0 === d[n]; n--) e += 1;
              if ((n >= 0 && (e += 1), (f = f.dblp(e)), n < 0)) break;
              const t = d[n];
              (a(0 !== t),
                (f =
                  t > 0
                    ? f.add(s[(t - 1) >> 1])
                    : f.add(s[(-t - 1) >> 1].neg())));
            }
            return f;
          }
          _wnafMulAdd(e, t, r) {
            (a(e >>> 0 === e),
              a(Array.isArray(t)),
              a(Array.isArray(r)),
              a(t.length === r.length));
            const i = t.length,
              s = new Array(i),
              d = new Array(i),
              f = new Array(i);
            let u = 0;
            for (let o = 0; o < i; o++) {
              const e = t[o],
                i = r[o];
              if (
                (a(e instanceof Point),
                a(i instanceof n),
                o > 0 && e.type !== t[o - 1].type)
              )
                throw new Error("Cannot mix points.");
              ((s[o] = null),
                (d[o] = null),
                (f[o] = 0),
                (u = Math.max(u, i.bitLength() + 1)));
            }
            let c = null,
              l = null,
              p = 0;
            for (let n = 0; n < i; n++) {
              const e = t[n],
                i = r[n],
                f = e._getNAF(0);
              f
                ? ((s[p] = f.points), (d[p] = o(i, f.width, u)), (p += 1))
                : c
                  ? ((s[p] = c._getJNAF(e)),
                    (d[p] = h(l, i, u)),
                    (c = null),
                    (l = null),
                    (p += 1))
                  : ((c = e), (l = i));
            }
            if (c) {
              const t = c._safeNAF(e);
              ((s[p] = t.points), (d[p] = o(l, t.width, u)), (p += 1));
            }
            let b = this.jpoint();
            for (let n = u - 1; n >= 0; n--) {
              let e = 0;
              while (n >= 0) {
                let t = !0;
                for (let e = 0; e < p; e++)
                  ((f[e] = d[e][n]), 0 !== f[e] && (t = !1));
                if (!t) break;
                ((e += 1), (n -= 1));
              }
              if ((n >= 0 && (e += 1), (b = b.dblp(e)), n < 0)) break;
              for (let t = 0; t < p; t++) {
                const e = f[t];
                0 !== e &&
                  (b =
                    e > 0
                      ? b.add(s[t][(e - 1) >> 1])
                      : b.add(s[t][(-e - 1) >> 1].neg()));
              }
            }
            return b;
          }
          _endoWnafMulAdd(e, t) {
            throw new Error("Not implemented.");
          }
          _isqrt(e, t) {
            if ((a(e instanceof n), a(t instanceof n), t.isZero()))
              throw new RangeError("Not invertible.");
            return 3 === this.p.andln(3)
              ? this._isqrt3mod4(e, t)
              : 5 === this.p.andln(7)
                ? this._isqrt5mod8(e, t)
                : e.redMul(t.redInvert()).redSqrt();
          }
          _isqrt3mod4(e, t) {
            this.exp || (this.exp = this.p.subn(3).iushrn(2));
            const r = e.redSqr(),
              i = r.redMul(e),
              n = i.redMul(r),
              s = t.redSqr().redMul(t),
              d = n.redMul(s).redPow(this.exp),
              o = i.redMul(t).redMul(d),
              f = t.redMul(o.redSqr());
            if (0 === f.cmp(e)) return o;
            throw new Error("X is not a square mod P.");
          }
          _isqrt5mod8(e, t) {
            this.exp ||
              ((this.exp = this.p.subn(5).iushrn(3)),
              (this.inv = this.two.redPow(this.p.subn(1).iushrn(2))));
            const r = t.redSqr().redMul(t),
              i = r.redSqr().redMul(t),
              n = e.redMul(i).redPow(this.exp),
              s = e.redMul(r).redMul(n),
              d = t.redMul(s.redSqr());
            if (0 === d.cmp(e)) return s;
            if (0 === d.redINeg().cmp(e)) return s.redMul(this.inv);
            throw new Error("X is not a square mod P.");
          }
          precompute(e) {
            return (
              a(!this.g.isInfinity(), "Must have base point."),
              a(!this.n.isZero(), "Must have order."),
              this.g.precompute(this.n.bitLength() + 1, e),
              (this.blinding = this._scalarBlinding(e)),
              this
            );
          }
          getBlinding() {
            return this.blinding ? this.blinding : [new n(1), new n(1)];
          }
          point(e, t) {
            throw new Error("Not implemented.");
          }
          jpoint(e, t, r) {
            throw new Error("Not implemented.");
          }
          solveX2(e) {
            throw new Error("Not implemented.");
          }
          solveX(e) {
            return this.solveX2(e).redSqrt();
          }
          solveY2(e) {
            throw new Error("Not implemented.");
          }
          solveY(e) {
            return this.solveY2(e).redSqrt();
          }
          validate(e) {
            throw new Error("Not implemented.");
          }
          pointFromX(e, t) {
            throw new Error("Not implemented.");
          }
          pointFromY(e, t) {
            throw new Error("Not implemented.");
          }
          pointFromR(e) {
            throw new Error("Not implemented.");
          }
          pointFromShort(e) {
            throw new Error("Not implemented.");
          }
          pointFromMont(e, t) {
            throw new Error("Not implemented.");
          }
          pointFromEdwards(e) {
            throw new Error("Not implemented.");
          }
          pointFromUniform(e) {
            throw new Error("Not implemented.");
          }
          pointToUniform(e) {
            throw new Error("Not implemented.");
          }
          pointFromHash(e) {
            throw new Error("Not implemented.");
          }
          randomScalar(e) {
            const t = this.n.isZero() ? this.p : this.n;
            return n.random(e, 1, t);
          }
          randomField(e) {
            return n.random(e, 1, this.p).toRed(this.red);
          }
          randomPoint(e) {
            throw new Error("Not implemented.");
          }
          mulAll(e, t) {
            return this.jmulAll(e, t);
          }
          mulAllSimple(e, t) {
            return this.jmulAllSimple(e, t);
          }
          jmulAll(e, t) {
            return (
              a(Array.isArray(e)),
              a(0 === e.length || e[0] instanceof Point),
              this.endo && e.length > 0 && e[0].type === s.AFFINE
                ? this._endoWnafMulAdd(e, t)
                : this._wnafMulAdd(1, e, t)
            );
          }
          jmulAllSimple(e, t) {
            return this._simpleMulAdd(e, t);
          }
          reduce(e) {
            return this.mask.reduce(e);
          }
          splitHash(e) {
            return this.mask.splitHash(e);
          }
          clamp(e) {
            return this.mask.clamp(e);
          }
          isClamped(e) {
            return this.mask.isClamped(e);
          }
          encodeField(e) {
            return (
              a(e instanceof n),
              a(!e.red),
              e.encode(this.endian, this.fieldSize)
            );
          }
          decodeField(t) {
            if ((a(e.isBuffer(t)), t.length !== this.fieldSize))
              throw new Error("Invalid field element size.");
            return n.decode(t, this.endian);
          }
          encodeScalar(e) {
            return (
              a(e instanceof n),
              a(!e.red),
              e.encode(this.endian, this.scalarSize)
            );
          }
          decodeScalar(t) {
            if ((a(e.isBuffer(t)), t.length !== this.scalarSize))
              throw new Error("Invalid scalar size.");
            return n.decode(t, this.endian);
          }
          encodeUniform(e, t) {
            a(e instanceof n);
            const r = this.fieldBits,
              i = (r + 7) >>> 3,
              s = 8 * i - r,
              d = e.fromRed();
            if (null != t && 0 !== s) {
              const e = n.randomBits(t, s);
              d.iuor(e.iushln(r));
            }
            return d.encode(this.endian, i);
          }
          decodeUniform(t) {
            a(e.isBuffer(t));
            const r = this.fieldBits,
              i = (r + 7) >>> 3;
            if (t.length !== i) throw new Error("Invalid field size.");
            const s = n.decode(t, this.endian).iumaskn(r);
            return s.toRed(this.red);
          }
          encodePoint(e, t) {
            return (a(e instanceof Point), e.encode(t));
          }
          decodePoint(e) {
            throw new Error("Not implemented.");
          }
          encodeX(e) {
            throw new Error("Not implemented.");
          }
          decodeX(e) {
            throw new Error("Not implemented.");
          }
          pointToJSON(e, t) {
            return (a(e instanceof Point), e.toJSON(t));
          }
          pointFromJSON(e) {
            throw new Error("Not implemented.");
          }
          toJSON(e) {
            return {
              id: this.id,
              ossl: this.ossl,
              type: this.type,
              endian: this.endian,
              hash: this.hash,
              prefix: this.prefix ? this.prefix.toString() : null,
              context: this.context,
              iso4: this.iso4,
              prime: this.prime,
              p: this.p.toJSON(),
              a: void 0,
              b: void 0,
              c: void 0,
              d: void 0,
              n: this.n.toJSON(),
              h: this.h.toString(16),
              s: void 0,
              z: this.z.fromRed().toString(16),
              g: this.g.toJSON(e),
              endo: this.endo ? this.endo.toJSON() : void 0,
            };
          }
          static fromJSON(e) {
            return new this(e);
          }
        }
        class Point {
          constructor(e, t) {
            (a(e instanceof Curve),
              a(t >>> 0 === t),
              (this.curve = e),
              (this.type = t),
              (this.pre = null));
          }
          _init() {
            throw new Error("Not implemented.");
          }
          _getNAF(e) {
            if ((a(e >>> 0 === e), this.pre && this.pre.naf))
              return this.pre.naf;
            if (0 === e) return null;
            const t = (1 << e) - 1,
              r = new Array(t),
              i = 1 === t ? null : this.dbl();
            r[0] = this;
            for (let n = 1; n < t; n++) r[n] = r[n - 1].add(i);
            return new NAF(e, r);
          }
          _safeNAF(e) {
            return this._getNAF(e);
          }
          _getDoubles(e, t) {
            if (
              (a(e >>> 0 === e), a(t >>> 0 === t), this.pre && this.pre.doubles)
            )
              return this.pre.doubles;
            if (0 === e) return null;
            const r = Math.ceil(t / e) + 1,
              i = new Array(r);
            let n = this,
              s = 0;
            i[s++] = n;
            for (let d = 0; d < t; d += e) {
              for (let t = 0; t < e; t++) n = n.dbl();
              i[s++] = n;
            }
            return (a(s === r), new Doubles(e, i));
          }
          _getBeta() {
            return null;
          }
          _getBlinding(e) {
            if (this.pre && this.pre.blinding) return this.pre.blinding;
            if (!e) return null;
            if (this.curve.n.isZero()) return null;
            for (;;) {
              const t = this.curve.randomScalar(e),
                r = this.mul(t);
              if (!r.isInfinity()) return new Blinding(t, r);
            }
          }
          _hasDoubles(e) {
            if ((a(e instanceof n), !this.pre || !this.pre.doubles)) return !1;
            const { step: t, points: r } = this.pre.doubles,
              i = e.bitLength() + 1;
            return r.length >= Math.ceil(i / t) + 1;
          }
          _getJNAF(e) {
            return (
              a(e instanceof Point),
              a(e.type === this.type),
              [this, this.add(e), this.add(e.neg()), e]
            );
          }
          _blind(e, t) {
            if ((a(e instanceof n), a(!e.red), this.pre && this.pre.blinding)) {
              const { blind: t, unblind: r } = this.pre.blinding,
                i = e.sub(t);
              return [this, i, r];
            }
            if (!t) return [this, e, null];
            if (this.pre) {
              if (this.curve.n.isZero()) return [this, e, null];
              const r = this.curve.randomScalar(t),
                i = r.mul(this.curve.n),
                n = i.iadd(e);
              return [this, n, null];
            }
            const r = this.randomize(t);
            return [r, e, null];
          }
          clone() {
            throw new Error("Not implemented.");
          }
          swap(e, t) {
            throw new Error("Not implemented.");
          }
          precompute(e, t) {
            return (
              a(e >>> 0 === e),
              this.pre || (this.pre = new Precomp()),
              this.pre.naf || (this.pre.naf = this._getNAF(8)),
              this.pre.doubles || (this.pre.doubles = this._getDoubles(4, e)),
              this.pre.beta || (this.pre.beta = this._getBeta()),
              this.pre.blinding || (this.pre.blinding = this._getBlinding(t)),
              this
            );
          }
          validate() {
            return this.curve.validate(this);
          }
          normalize() {
            return this;
          }
          scale(e) {
            throw new Error("Not implemented.");
          }
          randomize(e) {
            const t = this.curve.randomField(e);
            return this.scale(t);
          }
          neg() {
            throw new Error("Not implemented.");
          }
          add(e) {
            throw new Error("Not implemented.");
          }
          dbl() {
            throw new Error("Not implemented.");
          }
          dblp(e) {
            a(e >>> 0 === e);
            let t = this;
            for (let r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          trpl() {
            throw new Error("Not implemented.");
          }
          uadd(e) {
            throw new Error("Not implemented.");
          }
          udbl() {
            throw new Error("Not implemented.");
          }
          zaddu(e) {
            throw new Error("Not implemented.");
          }
          zaddc(e) {
            throw new Error("Not implemented.");
          }
          zdblu() {
            throw new Error("Not implemented.");
          }
          ztrplu() {
            throw new Error("Not implemented.");
          }
          diffAdd(e, t) {
            throw new Error("Not implemented.");
          }
          diffAddDbl(e, t) {
            throw new Error("Not implemented.");
          }
          diffTrpl(e) {
            throw new Error("Not implemented.");
          }
          recover() {
            throw new Error("Not implemented.");
          }
          getX() {
            throw new Error("Not implemented.");
          }
          getY() {
            throw new Error("Not implemented.");
          }
          eq(e) {
            throw new Error("Not implemented.");
          }
          isInfinity() {
            throw new Error("Not implemented.");
          }
          hasQuadY() {
            throw new Error("Not implemented.");
          }
          eqX(e) {
            throw new Error("Not implemented.");
          }
          eqXToP(e) {
            throw new Error("Not implemented.");
          }
          isSmall() {
            return !this.isInfinity() && this.jmulH().isInfinity();
          }
          hasTorsion() {
            return !this.isInfinity() && !this.jmul(this.curve.n).isInfinity();
          }
          mul(e) {
            return this.jmul(e);
          }
          mulSimple(e) {
            return this.jmulSimple(e);
          }
          mulBlind(e, t) {
            return this.jmulBlind(e, t);
          }
          mulConst(e, t) {
            return this.jmulConst(e, t);
          }
          mulAdd(e, t, r) {
            return this.jmulAdd(e, t, r);
          }
          mulAddSimple(e, t, r) {
            return this.jmulAddSimple(e, t, r);
          }
          mulH() {
            return this.jmulH();
          }
          divH() {
            return this.jdivH();
          }
          jmul(e) {
            return this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo && this.type === s.AFFINE
                ? this.curve._endoWnafMulAdd([this], [e])
                : this.curve._wnafMul(4, this, e);
          }
          jmulSimple(e) {
            return this.curve._simpleMul(this, e);
          }
          jmulBlind(e, t) {
            void 0 === t && (t = null);
            const [r, i, n] = this._blind(e, t),
              s = r.jmul(i);
            return n ? s.add(n) : s;
          }
          jmulConst(e, t) {
            void 0 === t && (t = null);
            const [r, i, n] = this._blind(e, t),
              s = this.curve._constMul(r, i);
            return n ? s.uadd(n) : s;
          }
          jmulAdd(e, t, r) {
            return this.curve.endo && this.type === s.AFFINE
              ? this.curve._endoWnafMulAdd([this, t], [e, r])
              : this.curve._wnafMulAdd(1, [this, t], [e, r]);
          }
          jmulAddSimple(e, t, r) {
            return this.curve._simpleMulAdd([this, t], [e, r]);
          }
          jmulH() {
            const e = this.curve.h.bitLength(),
              t = this.curve.h.andln(-1);
            return e <= 26 && 0 === (t & (t - 1))
              ? this.toJ().dblp(e - 1)
              : this.jmulSimple(this.curve.h);
          }
          jdivH() {
            return this.curve.n.isZero() || 0 === this.curve.h.cmpn(1)
              ? this
              : this.jmul(this.curve.h.invert(this.curve.n));
          }
          toP() {
            return this.normalize();
          }
          toJ() {
            return this;
          }
          toR() {
            return this;
          }
          encode(e) {
            throw new Error("Not implemented.");
          }
          static decode(e, t) {
            throw new Error("Not implemented.");
          }
          encodeX() {
            throw new Error("Not implemented.");
          }
          static decodeX(e, t) {
            throw new Error("Not implemented.");
          }
          toJSON(e) {
            throw new Error("Not implemented.");
          }
          static fromJSON(e, t) {
            throw new Error("Not implemented.");
          }
          [i]() {
            return "<Point>";
          }
        }
        class ShortCurve extends Curve {
          constructor(e) {
            (super("short", e),
              (this.a = n.fromJSON(e.a).toRed(this.red)),
              (this.b = n.fromJSON(e.b).toRed(this.red)),
              (this.i2 = this.two.redInvert()),
              (this.zeroA = 0 === this.a.sign()),
              (this.threeA = 0 === this.a.cmp(this.three.redNeg())),
              this._finalize(e));
          }
          _finalize(e) {
            return (
              super._finalize(e),
              null != e.endo
                ? (this.endo = Endo.fromJSON(this, e.endo))
                : (this.endo = this._getEndomorphism()),
              this
            );
          }
          _getEndomorphism() {
            if (this.n.isZero() || this.g.isInfinity()) return null;
            if (!this.zeroA || 1 !== this.p.modrn(3) || 1 !== this.n.modrn(3))
              return null;
            const [e, t] = this._getEndoRoots(this.p),
              r = n.min(e, t).toRed(this.red),
              [i, s] = this._getEndoRoots(this.n),
              d = this.g.x.redMul(r);
            let o;
            0 === this.g.mul(i).x.cmp(d)
              ? (o = i)
              : (a(0 === this.g.mul(s).x.cmp(d)), (o = s));
            const f = this._getEndoBasis(o);
            return new Endo(r, o, f);
          }
          _getEndoRoots(e) {
            const t = e === this.p ? this.red : n.mont(e),
              r = new n(2).toRed(t),
              i = new n(3).toRed(t),
              s = r.redInvert(),
              d = s.redNeg(),
              o = i.redINeg().redSqrt().redMul(s),
              f = d.redAdd(o).fromRed(),
              u = d.redISub(o).fromRed();
            return [f, u];
          }
          _getEndoBasis(e) {
            const [t, r, i, n, s, d] = this._egcdSqrt(e),
              o = i,
              f = n.neg(),
              u = t.sqr().iadd(r.sqr()),
              h = s.sqr().iadd(d.sqr());
            let c, l;
            return (
              u.cmp(h) <= 0
                ? ((c = t), (l = r.neg()))
                : ((c = s), (l = d.neg())),
              [new Vector(o, f), new Vector(c, l)]
            );
          }
          _egcdSqrt(e) {
            (a(e instanceof n),
              a(!e.red),
              a(e.sign() > 0),
              a(this.n.sign() > 0));
            const t = this.n.ushrn(this.n.bitLength() >>> 1);
            let r,
              i,
              s,
              d,
              o,
              f = e,
              u = this.n.clone(),
              h = new n(1),
              c = new n(0),
              l = new n(0),
              p = new n(1),
              b = 0,
              m = 0;
            while (!f.isZero() && b < 2) {
              const e = u.quo(f),
                n = u.sub(e.mul(f)),
                a = l.sub(e.mul(h)),
                v = p.sub(e.mul(c));
              (0 === m &&
                n.cmp(t) < 0 &&
                ((r = o), (i = h), (s = n), (d = a), (m = 1)),
                (o = n),
                (u = f),
                (f = n),
                (l = h),
                (h = a),
                (p = c),
                (c = v),
                (b += m));
            }
            a(0 !== m, "Could not find r < sqrt(n).");
            const v = l,
              S = h;
            return [r, i, s, d, v, S];
          }
          _endoSplit(e) {
            (a(e instanceof n), a(!e.red), a(!this.n.isZero()));
            const [t, r] = this.endo.basis,
              i = r.b.mul(e).divRound(this.n),
              s = t.b.neg().mul(e).divRound(this.n),
              d = i.mul(t.a),
              o = s.mul(r.a),
              f = i.ineg().mul(t.b),
              u = s.mul(r.b),
              h = e.sub(d).isub(o),
              c = f.isub(u);
            return [h, c];
          }
          _endoBeta(e) {
            return (a(e instanceof ShortPoint), [e, e._getBeta()]);
          }
          _endoWnafMulAdd(e, t) {
            (a(Array.isArray(e)),
              a(Array.isArray(t)),
              a(e.length === t.length),
              a(null != this.endo));
            const r = e.length,
              i = new Array(2 * r),
              n = new Array(2 * r);
            for (let s = 0; s < r; s++) {
              const [r, d] = this._endoBeta(e[s]),
                [o, f] = this._endoSplit(t[s]);
              ((i[2 * s + 0] = r),
                (n[2 * s + 0] = o),
                (i[2 * s + 1] = d),
                (n[2 * s + 1] = f));
            }
            return this._wnafMulAdd(1, i, n);
          }
          _icart(e) {
            const t = e.clone();
            t.cinject(this.one, t.czero());
            const r = t.redSqr(),
              i = r.redSqr(),
              n = i.redMul(r),
              s = t.redMuln(6).redFermat(),
              d = this.a.redMuln(3).redISub(i).redMul(s),
              o = this.p.ushln(1).isubn(1).idivn(3),
              f = d.redSqr(),
              u = n.redMul(this.three.redMuln(9).redInvert()),
              h = r.redMul(this.three.redInvert()),
              c = f.redISub(this.b).redISub(u).redPow(o).redIAdd(h),
              l = t.redMul(c).redIAdd(d);
            return this.point(c, l);
          }
          _sswu(e) {
            const t = this.p.subn(2),
              r = this.a.redInvert(),
              i = this.b.redNeg(),
              n = this.z.redSqr(),
              s = this.z.redMul(this.a).redInvert(),
              d = e.redSqr(),
              o = d.redSqr(),
              f = n.redMul(o).redIAdd(this.z.redMul(d)).redPow(t),
              u = i.redMul(r).redMul(this.one.redAdd(f));
            u.cinject(this.b.redMul(s), f.czero());
            const h = this.z.redMul(d).redMul(u),
              c = this.solveY2(u),
              l = this.solveY2(h),
              a = c.redLegendre() >>> 31,
              p = [u, h][a],
              b = [c, l][a].redSqrt();
            return (
              b.cinject(b.redNeg(), b.redIsOdd() ^ e.redIsOdd()),
              this.point(p, b)
            );
          }
          _svdw(e) {
            const t = this.p.subn(2),
              r = this.z.redSqr(),
              i = this.three.redNeg().redMul(r).redSqrt(),
              n = r.redMuln(3).redInvert(),
              s = e.redSqr(),
              d = s.redSqr(),
              o = this.solveY2(this.z),
              f = s.redAdd(o),
              u = s.redMul(f).redPow(t),
              h = d.redMul(u).redMul(i),
              c = f.redSqr().redMul(f),
              l = i.redSub(this.z).redMul(this.i2).redISub(h),
              a = h.redSub(i.redAdd(this.z).redMul(this.i2)),
              b = this.z.redSub(c.redMul(u).redMul(n)),
              m = this.solveY2(l),
              v = this.solveY2(a),
              S = this.solveY2(b),
              y = m.redLegendre(),
              M = v.redLegendre(),
              w = p((y - 1) * M, 3),
              I = [l, a, b][w],
              g = [m, v, S][w].redSqrt();
            return (
              g.cinject(g.redNeg(), g.redIsOdd() ^ e.redIsOdd()),
              this.point(I, g)
            );
          }
          point(e, t) {
            return new ShortPoint(this, e, t);
          }
          jpoint(e, t, r) {
            return new JPoint(this, e, t, r);
          }
          solveY2(e) {
            a(e instanceof n);
            const t = e.redSqr().redMul(e),
              r = t.redIAdd(this.b);
            return (
              this.zeroA ||
                (this.threeA
                  ? r.redIAdd(e.redMuln(-3))
                  : r.redIAdd(this.a.redMul(e))),
              r
            );
          }
          validate(e) {
            if ((a(e instanceof ShortPoint), e.inf)) return !0;
            const { x: t, y: r } = e,
              i = this.solveY2(t);
            return 0 === r.redSqr().cmp(i);
          }
          pointFromX(e, t) {
            (a(e instanceof n),
              a("boolean" === typeof t),
              e.red || (e = e.toRed(this.red)));
            const r = this.solveY2(e),
              i = r.redSqrt();
            return (i.redIsOdd() !== t && i.redINeg(), this.point(e, i));
          }
          pointFromR(e) {
            (a(e instanceof n), e.red || (e = e.toRed(this.red)));
            const t = this.solveY2(e),
              r = t.redSqrt();
            return this.point(e, r);
          }
          pointFromShort(e) {
            return (a(e instanceof Point), a(e.curve === this), e.toP());
          }
          pointFromMont(e, t) {
            if (
              (a(e instanceof MontPoint),
              a("boolean" === typeof t),
              a(e.curve.p.eq(this.p)),
              e.normalize(),
              e.isInfinity())
            ) {
              if (t) throw new Error("Invalid point.");
              return this.point();
            }
            const r = e.curve.three.redInvert(),
              i = e.curve.a.redMul(r),
              n = e.x.redAdd(i),
              s = e.getY(t);
            return this.point(n.fromRed(), s);
          }
          pointFromEdwards(e) {
            if (
              (a(e instanceof EdwardsPoint),
              a(e.curve.p.eq(this.p)),
              a(e.curve.twisted),
              e.normalize(),
              e.isInfinity())
            )
              return this.point();
            const t = e.curve.three.redInvert(),
              r = e.curve._montA(),
              i = r.redMul(t),
              n = r.redAdd(e.curve.two).redINeg().redSqrt(),
              s = e.z.redAdd(e.y),
              d = e.z.redSub(e.y),
              o = s.redMul(d.redInvert()).redIAdd(i),
              f = n.redMul(s).redMul(d.redMul(e.x).redInvert());
            return this.point(o.fromRed(), f.fromRed());
          }
          pointFromUniform(e) {
            if ((a(e instanceof n), 2 === this.p.modrn(3)))
              return this._icart(e);
            if (this.z.isZero()) throw new Error("Not implemented.");
            if (!this.a.isZero() && !this.b.isZero()) return this._sswu(e);
            if (1 === this.p.modrn(3) && !this.b.isZero()) return this._svdw(e);
            throw new Error("Not implemented.");
          }
          pointFromHash(t) {
            if ((a(e.isBuffer(t)), t.length !== 2 * this.fieldSize))
              throw new Error("Invalid hash size.");
            const r = t.slice(0, this.fieldSize),
              i = t.slice(this.fieldSize),
              n = this.decodeUniform(r),
              s = this.decodeUniform(i),
              d = this.pointFromUniform(n),
              o = this.pointFromUniform(s);
            return d.add(o);
          }
          randomPoint(e) {
            let t;
            for (;;) {
              const i = this.randomField(e),
                s = n.random(e, 0, 2);
              try {
                t = this.pointFromX(i, s.isOdd());
              } catch (r) {
                continue;
              }
              return t;
            }
          }
          mulAll(e, t) {
            return super.mulAll(e, t).toP();
          }
          mulAllSimple(e, t) {
            return super.mulAllSimple(e, t).toP();
          }
          decodePoint(e) {
            return ShortPoint.decode(this, e);
          }
          encodeX(e) {
            return (a(e instanceof Point), e.encodeX());
          }
          decodeX(e) {
            return ShortPoint.decodeX(this, e);
          }
          pointFromJSON(e) {
            return ShortPoint.fromJSON(this, e);
          }
          toJSON(e) {
            const t = super.toJSON(e);
            return (
              (t.a = this.a.fromRed().toJSON()),
              (t.b = this.b.fromRed().toJSON()),
              t
            );
          }
        }
        class ShortPoint extends Point {
          constructor(e, t, r) {
            (a(e instanceof ShortCurve),
              super(e, s.AFFINE),
              (this.x = null),
              (this.y = null),
              (this.inf = 1),
              null != t && this._init(t, r));
          }
          _init(e, t) {
            (a(e instanceof n),
              a(t instanceof n),
              (this.x = e),
              (this.y = t),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = 0));
          }
          _safeNAF(e) {
            return (
              a(e >>> 0 === e),
              this.pre && this.pre.naf
                ? this.pre.naf
                : e > 1
                  ? this.toJ()._getNAF(e)
                  : this._getNAF(e)
            );
          }
          _getBeta() {
            if (!this.curve.endo) return null;
            if (this.pre && this.pre.beta) return this.pre.beta;
            const e = this.x.redMul(this.curve.endo.beta),
              t = this.curve.point(e, this.y);
            return (
              this.pre &&
                ((t.pre = this.pre.map((e) => {
                  const t = e.x.redMul(this.curve.endo.beta);
                  return this.curve.point(t, e.y);
                })),
                (this.pre.beta = t)),
              t
            );
          }
          _getJNAF(e) {
            if ((a(e instanceof ShortPoint), this.inf | e.inf))
              return super._getJNAF(e);
            const t = [this, null, null, e];
            return (
              0 === this.y.cmp(e.y)
                ? ((t[1] = this.add(e)), (t[2] = this.toJ().add(e.neg())))
                : 0 === this.y.cmp(e.y.redNeg())
                  ? ((t[1] = this.toJ().add(e)), (t[2] = this.add(e.neg())))
                  : ((t[1] = this.toJ().add(e)),
                    (t[2] = this.toJ().add(e.neg()))),
              t
            );
          }
          clone() {
            return this.inf
              ? this.curve.point()
              : this.curve.point(this.x.clone(), this.y.clone());
          }
          scale(e) {
            return this.toJ().scale(e);
          }
          neg() {
            return this.inf ? this : this.curve.point(this.x, this.y.redNeg());
          }
          add(e) {
            if ((a(e instanceof ShortPoint), this.inf)) return e;
            if (e.inf) return this;
            if (0 === this.x.cmp(e.x))
              return 0 !== this.y.cmp(e.y) ? this.curve.point() : this.dbl();
            if (0 === this.y.cmp(e.y)) {
              const t = this.x.redNeg().redISub(e.x),
                r = this.y.redNeg();
              return this.curve.point(t, r);
            }
            const t = this.x.redSub(e.x),
              r = this.y.redSub(e.y),
              i = r.redMul(t.redInvert()),
              n = i.redSqr().redISub(this.x).redISub(e.x),
              s = i.redMul(this.x.redSub(n)).redISub(this.y);
            return this.curve.point(n, s);
          }
          dbl() {
            if (this.inf) return this;
            if (0 === this.y.sign()) return this.curve.point();
            const e = this.x.redSqr(),
              t = e.redIMuln(3).redIAdd(this.curve.a);
            if (0 === t.sign()) {
              const e = this.x.redNeg().redISub(this.x),
                t = this.y.redNeg();
              return this.curve.point(e, t);
            }
            const r = this.y.redMuln(2),
              i = t.redMul(r.redInvert()),
              n = i.redSqr().redISub(this.x).redISub(this.x),
              s = i.redMul(this.x.redSub(n)).redISub(this.y);
            return this.curve.point(n, s);
          }
          trpl() {
            if (this.inf) return this;
            if (0 === this.y.sign()) return this;
            const e = this.x.redSqr(),
              t = e.redMuln(3).redIAdd(this.curve.a),
              r = this.y.redSqr().redIMuln(2),
              i = this.y.redMul(r).redIMuln(4),
              n = r.redSqr(),
              s = r.redIAdd(this.x).redSqr().redISub(e).redISub(n),
              d = t.redSqr().redISub(s).redISub(s),
              o = d.redMul(this.y).redIMuln(2),
              f = t.redMul(s.redISub(d)).redISub(n).redISub(n),
              u = this.y.redMul(i).redISub(f),
              h = u.redSqr(),
              c = this.x.redMul(i).redISub(o),
              l = c.redSqr(),
              a = l.redMul(c),
              p = l.redMul(o),
              b = h.redMul(i).redISub(a).redISub(p).redISub(p),
              m = a.redMul(i),
              v = m.redInvert(),
              S = v.redMul(c).redMul(b),
              y = v.redMul(u.redMul(p.redISub(b)).redISub(a.redMul(f)));
            return this.curve.point(S, y);
          }
          uadd(e) {
            if ((a(e instanceof ShortPoint), this.inf)) return e;
            if (e.inf) return this;
            const t = this.y.redAdd(e.y),
              r = this.x.redAdd(e.x).redSqr(),
              i = this.x.redMul(e.x),
              n = r.redISub(i).redIAdd(this.curve.a);
            if (
              (0 === t.sign() &&
                0 === n.sign() &&
                (t.inject(this.x.redSub(e.x)),
                n.inject(this.y.redSub(e.y)),
                a(t.sign() > 0)),
              0 === t.sign())
            )
              return this.curve.point();
            if (0 === n.sign()) {
              (a(0 !== this.x.cmp(e.x)), a(0 === this.y.cmp(e.y)));
              const t = this.x.redNeg().redISub(e.x),
                r = this.y.redNeg();
              return this.curve.point(t, r);
            }
            const s = n.redMul(t.redInvert()),
              d = s.redSqr().redISub(this.x).redISub(e.x),
              o = s.redMul(this.x.redSub(d)).redISub(this.y);
            return this.curve.point(d, o);
          }
          udbl() {
            return this.dbl();
          }
          recover(e, t) {
            if ((a(e instanceof n), a(t instanceof n), this.inf)) return this;
            if (0 === this.y.sign()) return this.curve.point();
            const r = this.curve.b.redMuln(2),
              i = this.x.redMul(e).redIAdd(this.curve.a),
              s = this.x.redAdd(e),
              d = r.redIAdd(i.redMul(s)),
              o = t.redMul(this.x.redSub(e).redSqr()),
              f = d.redISub(o),
              u = this.y.redMuln(2).redInvert(),
              h = e,
              c = f.redMul(u);
            return this.curve.point(h, c);
          }
          getX() {
            if (this.inf) throw new Error("Invalid point.");
            return this.x.fromRed();
          }
          getY() {
            if (this.inf) throw new Error("Invalid point.");
            return this.y.fromRed();
          }
          eq(e) {
            return (
              a(e instanceof ShortPoint),
              this === e ||
                (this.inf
                  ? 0 !== e.inf
                  : !e.inf && 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            );
          }
          isInfinity() {
            return 0 !== this.inf;
          }
          hasQuadY() {
            return !this.inf && 1 === this.y.redJacobi();
          }
          eqX(e) {
            return (
              a(e instanceof n),
              a(!e.red),
              !this.inf && 0 === this.getX().cmp(e)
            );
          }
          eqXToP(e) {
            return (
              a(e instanceof n),
              a(!e.red),
              a(!this.curve.n.isZero()),
              !this.inf && 0 === this.getX().imod(this.curve.n).cmp(e)
            );
          }
          mul(e) {
            return super.mul(e).toP();
          }
          mulSimple(e) {
            return super.mulSimple(e).toP();
          }
          mulBlind(e, t) {
            return super.mulBlind(e, t).toP();
          }
          mulConst(e, t) {
            return super.mulConst(e, t).toP();
          }
          mulAdd(e, t, r) {
            return super.mulAdd(e, t, r).toP();
          }
          mulAddSimple(e, t, r) {
            return super.mulAddSimple(e, t, r).toP();
          }
          mulH() {
            return super.mulH().toP();
          }
          divH() {
            return super.divH().toP();
          }
          toP() {
            return this;
          }
          toJ() {
            return this.inf
              ? this.curve.jpoint()
              : this.curve.jpoint(this.x, this.y, this.curve.one);
          }
          toR() {
            return this.inf || this.hasQuadY() ? this : this.neg();
          }
          encode(t) {
            (null == t && (t = !0), a("boolean" === typeof t));
            const { fieldSize: r } = this.curve;
            if (this.inf) throw new Error("Invalid point.");
            if (t) {
              const t = e.allocUnsafe(1 + r),
                i = this.curve.encodeField(this.getX());
              return ((t[0] = 2 | this.y.redIsOdd()), i.copy(t, 1), t);
            }
            const i = e.allocUnsafe(1 + 2 * r),
              n = this.curve.encodeField(this.getX()),
              s = this.curve.encodeField(this.getY());
            return ((i[0] = 4), n.copy(i, 1), s.copy(i, 1 + r), i);
          }
          static decode(t, r) {
            (a(t instanceof ShortCurve), a(e.isBuffer(r)));
            const i = t.fieldSize;
            if (r.length < 1 + i) throw new Error("Not a point.");
            const n = r[0];
            switch (n) {
              case 2:
              case 3: {
                if (r.length !== 1 + i)
                  throw new Error("Invalid point size for compressed.");
                const e = t.decodeField(r.slice(1, 1 + i));
                if (e.cmp(t.p) >= 0) throw new Error("Invalid point.");
                const s = t.pointFromX(e, 3 === n);
                return (a(!s.isInfinity()), s);
              }
              case 4:
              case 6:
              case 7: {
                if (r.length !== 1 + 2 * i)
                  throw new Error("Invalid point size for uncompressed.");
                const e = t.decodeField(r.slice(1, 1 + i)),
                  s = t.decodeField(r.slice(1 + i, 1 + 2 * i));
                if (e.cmp(t.p) >= 0 || s.cmp(t.p) >= 0)
                  throw new Error("Invalid point.");
                if (4 !== n && n !== (6 | s.isOdd()))
                  throw new Error("Invalid hybrid encoding.");
                const d = t.point(e, s);
                if (!d.validate()) throw new Error("Invalid point.");
                return (a(!d.isInfinity()), d);
              }
              default:
                throw new Error("Unknown point format.");
            }
          }
          encodeX() {
            return this.curve.encodeField(this.getX());
          }
          static decodeX(e, t) {
            a(e instanceof ShortCurve);
            const r = e.decodeField(t);
            if (r.cmp(e.p) >= 0) throw new Error("Invalid point.");
            return e.pointFromR(r);
          }
          toJSON(e) {
            if (this.inf) return [];
            const t = this.getX().toJSON(),
              r = this.getY().toJSON();
            return !0 === e && this.pre ? [t, r, this.pre.toJSON()] : [t, r];
          }
          static fromJSON(e, t) {
            if (
              (a(e instanceof ShortCurve),
              a(Array.isArray(t)),
              a(0 === t.length || 2 === t.length || 3 === t.length),
              0 === t.length)
            )
              return e.point();
            const r = n.fromJSON(t[0]),
              i = n.fromJSON(t[1]),
              s = e.point(r, i);
            return (
              t.length > 2 &&
                null != t[2] &&
                (s.pre = Precomp.fromJSON(s, t[2])),
              s
            );
          }
          [i]() {
            return this.inf
              ? "<ShortPoint: Infinity>"
              : "<ShortPoint: x=" +
                  this.x.fromRed().toString(16, 2) +
                  " y=" +
                  this.y.fromRed().toString(16, 2) +
                  ">";
          }
        }
        class JPoint extends Point {
          constructor(e, t, r, i) {
            (a(e instanceof ShortCurve),
              super(e, s.JACOBIAN),
              (this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = this.curve.zero),
              (this.zOne = 0),
              null != t && this._init(t, r, i));
          }
          _init(e, t, r) {
            (a(e instanceof n),
              a(t instanceof n),
              a(null == r || r instanceof n),
              (this.x = e),
              (this.y = t),
              (this.z = r || this.curve.one),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              (this.zOne = 0 | this.z.eq(this.curve.one)));
          }
          clone() {
            return this.curve.jpoint(
              this.x.clone(),
              this.y.clone(),
              this.z.clone(),
            );
          }
          swap(e, t) {
            a(e instanceof JPoint);
            const r = 1 & ((t >> 31) | (-t >> 31)),
              i = this.zOne,
              n = e.zOne;
            return (
              this.x.cswap(e.x, t),
              this.y.cswap(e.y, t),
              this.z.cswap(e.z, t),
              (this.zOne = (i & (1 ^ r)) | (n & r)),
              (e.zOne = (n & (1 ^ r)) | (i & r)),
              this
            );
          }
          validate() {
            const { a: e, b: t } = this.curve;
            if (this.isInfinity()) return !0;
            if (this.zOne) return this.curve.validate(this.toP());
            const r = this.y.redSqr(),
              i = this.x.redSqr().redMul(this.x),
              n = this.z.redSqr(),
              s = n.redSqr(),
              d = s.redMul(n),
              o = i.redIAdd(t.redMul(d));
            return (
              this.curve.zeroA ||
                (this.curve.threeA
                  ? o.redIAdd(s.redIMuln(-3).redMul(this.x))
                  : o.redIAdd(e.redMul(s).redMul(this.x))),
              0 === r.cmp(o)
            );
          }
          normalize() {
            if (this.zOne) return this;
            if (this.isInfinity()) return this;
            const e = this.z.redInvert(),
              t = e.redSqr();
            return (
              (this.x = this.x.redMul(t)),
              (this.y = this.y.redMul(t).redMul(e)),
              (this.z = this.curve.one),
              (this.zOne = 1),
              this
            );
          }
          scale(e) {
            if ((a(e instanceof n), this.isInfinity()))
              return this.curve.jpoint();
            const t = e.redSqr(),
              r = this.x.redMul(t),
              i = this.y.redMul(t).redMul(e),
              s = this.z.redMul(e);
            return this.curve.jpoint(r, i, s);
          }
          neg() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }
          add(e) {
            return (
              a(e instanceof Point),
              e.type === s.AFFINE ? this._mixedAdd(e) : this._add(e)
            );
          }
          _add(e) {
            return (
              a(e instanceof JPoint),
              this.isInfinity()
                ? e
                : e.isInfinity()
                  ? this
                  : this.zOne && e.zOne
                    ? this._addAA(e)
                    : this.zOne
                      ? e._addJA(this)
                      : e.zOne
                        ? this._addJA(e)
                        : this._addJJ(e)
            );
          }
          _mixedAdd(e) {
            return (
              a(e instanceof ShortPoint),
              this.isInfinity()
                ? e.toJ()
                : e.isInfinity()
                  ? this
                  : this.zOne
                    ? this._addAA(e)
                    : this._addJA(e)
            );
          }
          _addJJ(e) {
            const t = this.z.redSqr(),
              r = e.z.redSqr(),
              i = this.x.redMul(r),
              n = e.x.redMul(t),
              s = this.y.redMul(e.z).redMul(r),
              d = e.y.redMul(this.z).redMul(t),
              o = n.redISub(i),
              f = d.redISub(s);
            if (0 === o.sign())
              return 0 !== f.sign() ? this.curve.jpoint() : this.dbl();
            const u = o.redSqr(),
              h = o.redMul(u),
              c = i.redMul(u),
              l = f.redSqr().redISub(h).redISub(c).redISub(c),
              a = f.redMul(c.redISub(l)).redISub(s.redMul(h)),
              p = this.z.redMul(e.z).redMul(o);
            return this.curve.jpoint(l, a, p);
          }
          _addJA(e) {
            const t = this.z.redSqr(),
              r = e.x.redMul(t),
              i = e.y.redMul(this.z).redMul(t),
              n = r.redISub(this.x),
              s = i.redISub(this.y).redIMuln(2);
            if (0 === n.sign())
              return 0 !== s.sign() ? this.curve.jpoint() : this.dbl();
            const d = n.redMuln(2).redSqr(),
              o = n.redMul(d),
              f = this.x.redMul(d),
              u = s.redSqr().redISub(o).redISub(f).redISub(f),
              h = s.redMul(f.redISub(u)).redISub(this.y.redMul(o).redIMuln(2)),
              c = this.z.redMul(n).redIMuln(2);
            return this.curve.jpoint(u, h, c);
          }
          _addAA(e) {
            const t = e.x.redSub(this.x),
              r = e.y.redSub(this.y).redIMuln(2);
            if (0 === t.sign())
              return 0 !== r.sign() ? this.curve.jpoint() : this.dbl();
            const i = t.redSqr(),
              n = i.redIMuln(4),
              s = t.redMul(n),
              d = this.x.redMul(n),
              o = r.redSqr().redISub(s).redISub(d).redISub(d),
              f = r.redMul(d.redISub(o)).redISub(this.y.redMul(s).redIMuln(2)),
              u = t.redIMuln(2);
            return this.curve.jpoint(o, f, u);
          }
          dbl() {
            return this.isInfinity()
              ? this
              : 0 === this.y.sign()
                ? this.curve.jpoint()
                : this.zOne
                  ? this._dblA()
                  : this.curve.zeroA
                    ? this._dbl0()
                    : this.curve.threeA
                      ? this._dbl3()
                      : this._dblJ();
          }
          _dblJ() {
            const e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = this.z.redSqr(),
              i = this.x.redMul(t).redIMuln(4),
              n = e.redIMuln(3).redIAdd(this.curve.a.redMul(r.redSqr())),
              s = n.redSqr().redISub(i).redISub(i),
              d = s,
              o = n.redMul(i.redISub(s)).redISub(t.redSqr().redIMuln(8)),
              f = this.y.redMul(this.z).redIMuln(2);
            return this.curve.jpoint(d, o, f);
          }
          _dblA() {
            const e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = t.redSqr(),
              i = t.redIAdd(this.x).redSqr(),
              n = i.redISub(e).redISub(r).redIMuln(2),
              s = e.redIMuln(3).redIAdd(this.curve.a),
              d = s.redSqr().redISub(n).redISub(n),
              o = d,
              f = s.redMul(n.redISub(d)).redISub(r.redIMuln(8)),
              u = this.y.redMuln(2);
            return this.curve.jpoint(o, f, u);
          }
          _dbl0() {
            const e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = t.redSqr(),
              i = t.redIAdd(this.x).redSqr(),
              n = i.redISub(e).redISub(r).redIMuln(2),
              s = e.redIMuln(3),
              d = s.redSqr(),
              o = d.redISub(n).redISub(n),
              f = s.redMul(n.redISub(o)).redISub(r.redIMuln(8)),
              u = this.y.redMul(this.z).redIMuln(2);
            return this.curve.jpoint(o, f, u);
          }
          _dbl3() {
            const e = this.z.redSqr(),
              t = this.y.redSqr(),
              r = this.x.redMul(t),
              i = this.x.redSub(e),
              n = this.x.redAdd(e),
              s = i.redMul(n).redIMuln(3),
              d = r.redIMuln(4),
              o = d.redMuln(2),
              f = t.redSqr().redIMuln(8),
              u = s.redSqr().redISub(o),
              h = this.y.redAdd(this.z).redSqr().redISub(t).redISub(e),
              c = s.redMul(d.redISub(u)).redISub(f);
            return this.curve.jpoint(u, c, h);
          }
          dblp(e) {
            return (
              a(e >>> 0 === e),
              this.curve.zeroA || this.curve.threeA
                ? super.dblp(e)
                : 0 === e || this.isInfinity()
                  ? this
                  : this._dblp(e)
            );
          }
          _dblp(e) {
            const { a: t, i2: r } = this.curve;
            let i = this.x,
              n = this.z,
              s = this.y.redMuln(2),
              d = n.redPown(4);
            for (let o = 0; o < e; o++) {
              if (0 === s.sign()) return this.curve.jpoint();
              const r = i.redSqr(),
                f = s.redSqr(),
                u = f.redSqr(),
                h = r.redIMuln(3).redIAdd(t.redMul(d)),
                c = i.redMul(f),
                l = h.redSqr().redISub(c).redISub(c),
                a = l,
                p = h.redMul(c.redISub(l)).redIMuln(2).redISub(u),
                b = s.redMul(n);
              (o + 1 < e && (d = d.redMul(u)), (i = a), (s = p), (n = b));
            }
            return this.curve.jpoint(i, s.redMul(r), n);
          }
          trpl() {
            return this.isInfinity() || 0 === this.y.sign()
              ? this
              : this._trpl();
          }
          _trpl() {
            const e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = this.z.redSqr(),
              i = t.redSqr(),
              n = e.redMuln(3);
            if (!this.curve.zeroA) {
              const e = r.redSqr();
              this.curve.threeA
                ? n.redIAdd(e.redIMuln(-3))
                : n.redIAdd(this.curve.a.redMul(e));
            }
            const s = n.redSqr(),
              d = this.x.redAdd(t).redSqr(),
              o = d.redISub(e).redISub(i).redIMuln(6).redISub(s),
              f = o.redSqr(),
              u = i.redIMuln(16),
              h = n.redIAdd(o).redSqr().redISub(s).redISub(f).redISub(u),
              c = t.redMul(h).redIMuln(4),
              l = h.redMul(u.redISub(h)),
              a = o.redMul(f),
              p = this.x.redMul(f).redISub(c).redIMuln(4),
              b = this.y.redMul(l.redISub(a)).redIMuln(8),
              m = o.redIAdd(this.z).redSqr().redISub(r).redISub(f);
            return this.curve.jpoint(p, b, m);
          }
          uadd(e) {
            return (
              a(e instanceof Point),
              e.type === s.AFFINE ? this._uadd(e.toJ()) : this._uadd(e)
            );
          }
          _uadd(e) {
            a(e instanceof JPoint);
            const { zero: t, one: r } = this.curve,
              i = this.z.redSqr(),
              n = e.z.redSqr(),
              s = this.x.redMul(n),
              d = e.x.redMul(i),
              o = this.y.redMul(n).redMul(e.z),
              f = e.y.redMul(i).redMul(this.z),
              u = this.z.redMul(e.z),
              h = s.redAdd(d),
              c = o.redAdd(f),
              l = h.redSqr().redISub(s.redMul(d));
            if (!this.curve.zeroA) {
              const e = u.redPown(4);
              this.curve.threeA
                ? l.redIAdd(e.redIMuln(-3))
                : l.redIAdd(this.curve.a.redMul(e));
            }
            const p = c.czero() & l.czero();
            (c.cinject(s.redSub(d), p), l.cinject(o.redSub(f), p));
            const b = c.redSqr(),
              m = h.redMul(b),
              v = b.redSqr();
            v.cinject(t, p);
            const S = l.redSqr(),
              y = u.redMul(c),
              M = m.redMuln(3).redISub(S.redMuln(2)),
              w = S.redISub(m).redIMuln(4),
              I = l.redMul(M).redISub(v).redIMuln(4),
              g = y.redIMuln(2),
              z = this.z.czero(),
              x = e.z.czero(),
              A = y.czero(),
              N = A & (1 ^ z) & (1 ^ x);
            return (
              w.cinject(this.x, x),
              I.cinject(this.y, x),
              g.cinject(this.z, x),
              w.cinject(e.x, z),
              I.cinject(e.y, z),
              g.cinject(e.z, z),
              w.cinject(r, N),
              I.cinject(r, N),
              g.cinject(t, N),
              a(((z & x) ^ 1) | g.czero()),
              this.curve.jpoint(w, I, g)
            );
          }
          udbl() {
            const e = this._udbl(),
              t = this.y.czero() | this.z.czero();
            return (
              e.x.cinject(this.curve.one, t),
              e.y.cinject(this.curve.one, t),
              e.z.cinject(this.curve.zero, t),
              e
            );
          }
          _udbl() {
            return this.curve.zeroA
              ? this._dbl0()
              : this.curve.threeA
                ? this._dbl3()
                : this._dblJ();
          }
          zaddu(e) {
            a(e instanceof JPoint);
            const t = this.x.redSub(e.x),
              r = this.y.redSub(e.y),
              i = t.redSqr(),
              n = this.x.redMul(i),
              s = e.x.redMul(i),
              d = n,
              o = r.redSqr().redISub(n).redISub(s),
              f = this.y.redMul(n.redSub(s)),
              u = r.redMul(d.redSub(o)).redISub(f),
              h = this.z.redMul(t),
              c = h;
            return [this.curve.jpoint(o, u, c), this.curve.jpoint(d, f, h)];
          }
          zaddc(e) {
            a(e instanceof JPoint);
            const t = this.x.redSub(e.x),
              r = this.y.redSub(e.y),
              i = this.y.redAdd(e.y),
              n = t.redSqr(),
              s = this.x.redMul(n),
              d = e.x.redMul(n),
              o = i.redSqr().redISub(s).redISub(d),
              f = r.redSqr().redISub(s).redISub(d),
              u = this.y.redMul(d.redISub(s)),
              h = e.y.redMuln(2).redIAdd(r),
              c = s.redISub(o),
              l = o.redAdd(c).redISub(f),
              p = h.redMul(c).redIAdd(u),
              b = r.redMul(l).redIAdd(u),
              m = this.z.redMul(t),
              v = m;
            return [this.curve.jpoint(f, b, v), this.curve.jpoint(o, p, m)];
          }
          zdblu() {
            const e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = t.redSqr(),
              i = this.x.redAdd(t).redSqr(),
              n = e.redMuln(3);
            if (!this.curve.zeroA) {
              const e = this.z.redPown(4);
              this.curve.threeA
                ? n.redIAdd(e.redIMuln(-3))
                : n.redIAdd(this.curve.a.redMul(e));
            }
            const s = i.redISub(e).redISub(r).redIMuln(2),
              d = n.redSqr().redISub(s).redISub(s),
              o = r.redIMuln(8),
              f = s.redSub(d).redMul(n).redISub(o),
              u = this.y.redMul(this.z).redIMuln(2),
              h = u;
            return [this.curve.jpoint(d, f, h), this.curve.jpoint(s, o, u)];
          }
          ztrplu() {
            const [e, t] = this.zdblu();
            return t.zaddu(e);
          }
          recover(e, t) {
            return (
              a(e instanceof n),
              a(t instanceof n),
              this.isInfinity() || 0 === this.y.sign()
                ? this.curve.jpoint()
                : this.zOne
                  ? this._recoverA(e, t)
                  : this._recoverJ(e, t)
            );
          }
          _recoverJ(e, t) {
            const r = this.z.redSqr(),
              i = r.redMul(this.z),
              n = i.redMul(this.z),
              s = e.redMul(r),
              d = t.redMul(r),
              o = this.curve.b.redMul(n).redMul(r).redIMuln(2),
              f = this.x.redMul(s);
            this.curve.zeroA ||
              (this.curve.threeA
                ? f.redIAdd(n.redIMuln(-3))
                : f.redIAdd(this.curve.a.redMul(n)));
            const u = this.x.redAdd(s),
              h = o.redIAdd(f.redMul(u)),
              c = d.redMul(this.x.redSub(s).redSqr()),
              l = h.redISub(c),
              a = this.y.redMul(i).redIMuln(2),
              p = a.redSqr(),
              b = e.redMul(p),
              m = l.redMul(p),
              v = a;
            return this.curve.jpoint(b, m, v);
          }
          _recoverA(e, t) {
            const r = this.curve.b.redMuln(2),
              i = this.x.redMul(e).redIAdd(this.curve.a),
              n = this.x.redAdd(e),
              s = r.redIAdd(i.redMul(n)),
              d = t.redMul(this.x.redSub(e).redSqr()),
              o = s.redISub(d),
              f = this.y.redMuln(2),
              u = f.redSqr(),
              h = e.redMul(u),
              c = o.redMul(u),
              l = f;
            return this.curve.jpoint(h, c, l);
          }
          getX() {
            if (this.isInfinity()) throw new Error("Invalid point.");
            return (this.normalize(), this.x.fromRed());
          }
          getY() {
            if (this.isInfinity()) throw new Error("Invalid point.");
            return (this.normalize(), this.y.fromRed());
          }
          eq(e) {
            if ((a(e instanceof JPoint), this === e)) return !0;
            if (this.isInfinity()) return e.isInfinity();
            if (e.isInfinity()) return !1;
            if (0 === this.z.cmp(e.z))
              return 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y);
            const t = this.z.redSqr(),
              r = e.z.redSqr(),
              i = this.x.redMul(r),
              n = e.x.redMul(t);
            if (0 !== i.cmp(n)) return !1;
            const s = t.redMul(this.z),
              d = r.redMul(e.z),
              o = this.y.redMul(d),
              f = e.y.redMul(s);
            return 0 === o.cmp(f);
          }
          isInfinity() {
            return 0 === this.z.sign();
          }
          hasQuadY() {
            return 1 === this.y.redMul(this.z).redJacobi();
          }
          eqX(e) {
            if ((a(e instanceof n), this.isInfinity())) return !1;
            const t = this.z.redSqr(),
              r = e.toRed(this.curve.red).redMul(t);
            return 0 === this.x.cmp(r);
          }
          eqXToP(e) {
            if (
              (a(e instanceof n), a(this.curve.maxwellTrick), this.isInfinity())
            )
              return !1;
            const t = this.z.redSqr(),
              r = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(r)) return !0;
            const i = e.clone(),
              s = this.curve.redN.redMul(t);
            for (;;) {
              if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
              if ((r.redIAdd(s), 0 === this.x.cmp(r))) break;
            }
            return !0;
          }
          toP() {
            return this.isInfinity()
              ? this.curve.point()
              : (this.normalize(), this.curve.point(this.x, this.y));
          }
          toJ() {
            return this;
          }
          toR() {
            return this.isInfinity() || this.hasQuadY() ? this : this.neg();
          }
          encode(e) {
            return this.toP().encode(e);
          }
          static decode(e, t) {
            return ShortPoint.decode(e, t).toJ();
          }
          encodeX() {
            return this.toP().encodeX();
          }
          static decodeX(e, t) {
            return ShortPoint.decodeX(e, t).toJ();
          }
          toJSON(e) {
            return this.toP().toJSON(e);
          }
          static fromJSON(e, t) {
            return ShortPoint.fromJSON(e, t).toJ();
          }
          [i]() {
            return this.isInfinity()
              ? "<JPoint: Infinity>"
              : "<JPoint: x=" +
                  this.x.fromRed().toString(16, 2) +
                  " y=" +
                  this.y.fromRed().toString(16, 2) +
                  " z=" +
                  this.z.fromRed().toString(16, 2) +
                  ">";
          }
        }
        class MontCurve extends Curve {
          constructor(e) {
            (super("mont", e),
              (this.a = n.fromJSON(e.a).toRed(this.red)),
              (this.b = n.fromJSON(e.b).toRed(this.red)),
              (this.bi = this.b.redInvert()),
              (this.i4 = new n(4).toRed(this.red).redInvert()),
              (this.a2 = this.a.redAdd(this.two)),
              (this.a24 = this.a2.redMul(this.i4)),
              (this.ladder = 0 === this.a2.cmp(this.a24.redMuln(4))),
              this._finalize(e));
          }
          _edwardsD() {
            const e = this.one.redNeg(),
              t = this.a.redAdd(this.two).redMul(e.redInvert()),
              r = this.a.redSub(this.two).redMul(t.redInvert());
            return r;
          }
          _elligator2(e) {
            const t = this.a.redNeg(),
              r = this.one.redAdd(this.z.redMul(e.redSqr()));
            r.cinject(this.one, r.czero());
            const i = t.redMul(r.redFermat()),
              n = i.redNeg().redISub(this.a),
              s = this.solveY2(i),
              d = s.redLegendre() >>> 31,
              o = [i, n][d];
            return [this.point(o), e.redIsOdd()];
          }
          _invert2(e, t) {
            const r = this.p.ushrn(1),
              i = e.normalize().x,
              n = e.getY(t),
              s = i.clone(),
              d = i.redAdd(this.a),
              o = b(n, r, this.fieldSize);
            s.cswap(d, 1 ^ o);
            const f = s.redINeg(),
              u = d.redMul(this.z),
              h = this._isqrt(f, u);
            return (h.cinject(h.redNeg(), h.redIsOdd() ^ t), h);
          }
          precompute(e) {
            return this;
          }
          point(e, t) {
            return new MontPoint(this, e, t);
          }
          jpoint(e, t, r) {
            return (a(null == e && null == t && null == r), this.point());
          }
          solveY2(e) {
            a(e instanceof n);
            const t = e.redSqr(),
              r = t.redMul(e),
              i = r.redIAdd(this.a.redMul(t)).redIAdd(e),
              s = i.redMul(this.bi);
            return s;
          }
          validate(e) {
            if ((a(e instanceof MontPoint), e.isInfinity())) return !0;
            const t = e.normalize().x,
              r = this.solveY2(t);
            return -1 !== r.redJacobi();
          }
          pointFromX(e, t) {
            return (
              a(e instanceof n),
              a(null == t || "boolean" === typeof t),
              e.red || (e = e.toRed(this.red)),
              this.point(e, this.one)
            );
          }
          pointFromShort(e) {
            if (
              (a(e instanceof Point),
              a(e.curve instanceof ShortCurve),
              a(e.curve.p.eq(this.p)),
              e.normalize(),
              e.isInfinity())
            )
              return this.point();
            const t = this.a.redMul(this.three.redInvert()),
              r = e.x.fromRed().toRed(this.red),
              i = r.redISub(t);
            return this.point(i);
          }
          pointFromMont(e, t) {
            return (
              a(e instanceof MontPoint),
              a(null == t || "boolean" === typeof t),
              a(e.curve === this),
              e
            );
          }
          pointFromEdwards(e) {
            if (
              (a(e instanceof EdwardsPoint),
              a(e.curve.p.eq(this.p)),
              e.isInfinity())
            )
              return this.point();
            let t, r;
            if (e.curve.twisted) {
              if (e.y.eq(e.z)) return this.point();
              if (e.x.isZero()) return this.point(this.curve.zero);
              ((t = e.z.redAdd(e.y)), (r = e.z.redSub(e.y)));
            } else if (e.curve.iso4) ((t = e.y.redSqr()), (r = e.x.redSqr()));
            else {
              if (e.y.eq(e.z)) return this.point();
              if (e.x.isZero()) return this.point(this.curve.zero);
              ((t = e.y.redNeg().redISub(e.z)),
                (r = e.y.redNeg().redIAdd(e.z)));
            }
            return this.point(t.fromRed(), r.fromRed());
          }
          pointFromUniform(e) {
            if ((a(e instanceof n), this.z.isZero() || this.a.isZero()))
              throw new Error("Not implemented.");
            if (0 !== this.b.cmp(this.one)) throw new Error("Not implemented.");
            return this._elligator2(e);
          }
          pointToUniform(e, t) {
            if (
              (a(e instanceof MontPoint),
              a("boolean" === typeof t),
              this.z.isZero() || this.a.isZero())
            )
              throw new Error("Not implemented.");
            if (0 !== this.b.cmp(this.one)) throw new Error("Not implemented.");
            return this._invert2(e, t);
          }
          pointFromHash(e, t) {
            a(e instanceof EdwardsCurve);
            const r = e.pointFromHash(this, t);
            return this.pointFromEdwards(r);
          }
          randomPoint(e) {
            for (;;) {
              const t = this.randomField(e),
                r = this.point(t, this.one);
              if (r.validate()) return r;
            }
          }
          jmulAll(e, t) {
            throw new Error("Not implemented.");
          }
          jmulAllSimple(e, t) {
            throw new Error("Not implemented.");
          }
          decodePoint(e) {
            return MontPoint.decode(this, e);
          }
          pointFromJSON(e) {
            return MontPoint.fromJSON(this, e);
          }
          toJSON(e) {
            const t = super.toJSON(e);
            return (
              (t.a = this.a.fromRed().toJSON()),
              (t.b = this.b.fromRed().toJSON()),
              t
            );
          }
        }
        class MontPoint extends Point {
          constructor(e, t, r) {
            (a(e instanceof MontCurve),
              super(e, s.PROJECTIVE),
              (this.x = this.curve.one),
              (this.z = this.curve.zero),
              null != t && this._init(t, r));
          }
          _init(e, t) {
            (a(e instanceof n),
              a(null == t || t instanceof n),
              (this.x = e),
              (this.z = t || this.curve.one),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
          }
          clone() {
            return this.curve.point(this.x.clone(), this.z.clone());
          }
          swap(e, t) {
            return (
              a(e instanceof MontPoint),
              this.x.cswap(e.x, t),
              this.z.cswap(e.z, t),
              this
            );
          }
          precompute(e, t) {
            return this;
          }
          normalize() {
            return (
              this.isInfinity() ||
                0 === this.z.cmp(this.curve.one) ||
                ((this.x = this.x.redMul(this.z.redInvert())),
                (this.z = this.curve.one)),
              this
            );
          }
          scale(e) {
            if ((a(e instanceof n), this.isInfinity()))
              return this.curve.point();
            const t = this.x.redMul(e),
              r = this.z.redMul(e);
            return this.curve.point(t, r);
          }
          neg() {
            return this;
          }
          dbl() {
            const e = this.x.redAdd(this.z),
              t = e.redSqr(),
              r = this.x.redSub(this.z),
              i = r.redSqr(),
              n = t.redSub(i),
              s = t.redMul(i),
              d = n.redMul(i.redIAdd(this.curve.a24.redMul(n)));
            return this.curve.point(s, d);
          }
          diffAdd(e, t) {
            (a(e instanceof MontPoint), a(t instanceof MontPoint));
            const r = e.x.redAdd(e.z),
              i = e.x.redSub(e.z),
              n = t.x.redAdd(t.z),
              s = t.x.redSub(t.z),
              d = s.redMul(r),
              o = n.redMul(i),
              f = this.z.redMul(d.redAdd(o).redSqr()),
              u = this.x.redMul(d.redISub(o).redSqr());
            return this.curve.point(f, u);
          }
          diffAddDbl(e, t) {
            if (
              (a(e instanceof MontPoint),
              a(t instanceof MontPoint),
              !this.curve.ladder)
            )
              return [this.diffAdd(e, t), t.dbl()];
            const r = t.x.redAdd(t.z),
              i = r.redSqr(),
              n = t.x.redSub(t.z),
              s = n.redSqr(),
              d = i.redSub(s),
              o = e.x.redAdd(e.z),
              f = e.x.redSub(e.z),
              u = f.redMul(r),
              h = o.redMul(n),
              c = this.z.redMul(u.redAdd(h).redSqr()),
              l = this.x.redMul(u.redISub(h).redSqr()),
              p = i.redMul(s),
              b = d.redMul(s.redIAdd(this.curve.a24.redMul(d)));
            return [this.curve.point(c, l), this.curve.point(p, b)];
          }
          diffTrpl(e) {
            a(e instanceof MontPoint);
            const t = e.x.redSqr(),
              r = e.z.redSqr(),
              i = t.redSub(r).redSqr(),
              n = this.curve.a.redMul(e.x.redMul(e.z)),
              s = r.redMuln(4),
              d = t.redMuln(4),
              o = t.redIAdd(r).redIAdd(n),
              f = o.redMul(s),
              u = o.redMul(d),
              h = i.redSub(f).redSqr(),
              c = i.redISub(u).redSqr(),
              l = this.x.redMul(h),
              p = this.z.redMul(c);
            return this.curve.point(l, p);
          }
          recover(e, t, r) {
            if (
              (a(e instanceof MontPoint),
              a(t instanceof MontPoint),
              a("boolean" === typeof r),
              this.isInfinity())
            )
              throw new Error("Invalid point.");
            const i = this.curve.a.redMuln(2),
              n = this.curve.b.redMuln(2),
              s = this.normalize().x,
              d = this.getY(r).toRed(this.curve.red),
              o = e.x,
              f = e.z,
              u = t.x,
              h = t.z,
              c = s.redMul(f),
              l = o.redAdd(c),
              p = o.redSub(c).redSqr().redMul(u),
              b = i.redMul(f),
              m = l.redIAdd(b),
              v = s.redMul(o).redIAdd(f),
              S = m.redMul(v),
              y = b.redMul(f),
              M = S.redISub(y).redMul(h),
              w = n.redMul(d).redMul(f).redMul(h),
              I = w.redMul(o),
              g = M.redISub(p),
              z = w.redMul(f);
            if (0 === z.sign()) throw new Error("Invalid point.");
            const x = z.redInvert(),
              A = I.redMul(x),
              N = g.redMul(x);
            if (!A.redMul(e.z).eq(e.x)) throw new Error("Invalid point.");
            return [A, N];
          }
          getX() {
            if (this.isInfinity()) throw new Error("Invalid point.");
            return (this.normalize(), this.x.fromRed());
          }
          getY(e) {
            if ((a("boolean" === typeof e), this.isInfinity()))
              throw new Error("Invalid point.");
            const t = this.normalize().x,
              r = this.curve.solveY2(t),
              i = r.redSqrt();
            return (i.redIsOdd() !== e && i.redINeg(), i.fromRed());
          }
          eq(e) {
            if ((a(e instanceof MontPoint), this === e)) return !0;
            if (this.isInfinity()) return e.isInfinity();
            if (e.isInfinity()) return !1;
            if (0 === this.z.cmp(e.z)) return 0 === this.x.cmp(e.x);
            const t = this.x.redMul(e.z),
              r = e.x.redMul(this.z);
            return 0 === t.cmp(r);
          }
          isInfinity() {
            return 0 === this.z.sign();
          }
          eqX(e) {
            if ((a(e instanceof n), this.isInfinity())) return !1;
            const t = e.toRed(this.curve.red).redMul(this.z);
            return 0 === this.x.cmp(t);
          }
          jmul(e) {
            (a(e instanceof n), a(!e.red));
            const t = e.bitLength();
            let r = this,
              i = this.curve.point();
            for (let n = t - 1; n >= 0; n--) {
              const t = e.utestn(n);
              0 === t
                ? ([r, i] = this.diffAddDbl(r, i))
                : ([i, r] = this.diffAddDbl(i, r));
            }
            return i;
          }
          jmulSimple(e) {
            (a(e instanceof n), a(!e.red));
            const t = e.bitLength();
            let r = this,
              i = this.curve.point();
            for (let n = t - 1; n >= 0; n--) {
              const t = e.utestn(n);
              0 === t
                ? ((r = this.diffAdd(r, i)), (i = i.dbl()))
                : ((i = this.diffAdd(i, r)), (r = r.dbl()));
            }
            return i;
          }
          jmulBlind(e, t) {
            return t ? this.randomize(t).jmul(e) : this.jmul(e);
          }
          jmulConst(e, t) {
            (a(e instanceof n), a(!e.red));
            const r = Math.max(e.bitLength(), this.curve.p.bitLength()),
              i = (r + 7) >>> 3,
              s = e.toArray("le", i),
              d = t ? this.randomize(t) : this;
            let o = d.clone(),
              f = this.curve.point().clone(),
              u = 0;
            for (let n = r - 1; n >= 0; n--) {
              const e = (s[n >> 3] >> (7 & n)) & 1;
              (o.swap(f, u ^ e), ([o, f] = d.diffAddDbl(o, f)), (u = e));
            }
            return (o.swap(f, u), f);
          }
          jmulAdd(e, t, r) {
            throw new Error("Not implemented.");
          }
          jmulAddSimple(e, t, r) {
            throw new Error("Not implemented.");
          }
          toP() {
            return this.normalize();
          }
          toJ() {
            return this;
          }
          encode() {
            return this.curve.encodeField(this.getX());
          }
          static decode(e, t) {
            a(e instanceof MontCurve);
            const r = e.decodeField(t);
            r.iumaskn(e.fieldBits);
            const i = e.point(r, e.one);
            return (a(!i.isInfinity()), i);
          }
          toJSON(e) {
            return this.isInfinity() ? [] : [this.getX().toJSON()];
          }
          static fromJSON(e, t) {
            if (
              (a(e instanceof MontCurve),
              a(Array.isArray(t)),
              a(0 === t.length || 1 === t.length || 2 === t.length),
              0 === t.length)
            )
              return e.point();
            const r = n.fromJSON(t[0]),
              i = e.point(r, e.one);
            if (t.length > 1) {
              const e = n.fromJSON(t[1]),
                r = i.getY(e.isOdd());
              if (0 !== e.cmp(r)) throw new Error("Invalid point.");
            }
            return i;
          }
          [i]() {
            return this.isInfinity()
              ? "<MontPoint: Infinity>"
              : "<MontPoint: x=" +
                  this.x.fromRed().toString(16, 2) +
                  " z=" +
                  this.z.fromRed().toString(16, 2) +
                  ">";
          }
        }
        class EdwardsCurve extends Curve {
          constructor(e) {
            (super("edwards", e),
              (this.a = n.fromJSON(e.a).toRed(this.red)),
              (this.c = n.fromJSON(e.c).toRed(this.red)),
              (this.d = n.fromJSON(e.d).toRed(this.red)),
              (this.s = n.fromJSON(e.s || "0").toRed(this.red)),
              (this.c2 = this.c.redMuln(2)),
              (this.cc = this.c.redSqr()),
              (this.cc2 = this.cc.redMuln(2)),
              (this.ccd = this.cc.redMul(this.d)),
              (this.k = this.d.redMuln(2)),
              (this.smi = -this.d.redNeg().andln(-1)),
              (this.twisted = 0 !== this.a.cmp(this.one)),
              (this.extended = 0 === this.a.cmp(this.one.redNeg())),
              (this.oneA = 0 === this.a.cmp(this.one)),
              (this.mOneA = 0 === this.a.cmp(this.one.redNeg())),
              (this.oneC = 0 === this.c.cmp(this.one)),
              (this.smallD =
                null != this.prime && this.d.redNeg().bitLength() <= 26),
              a(!this.twisted || 0 === this.c.cmp(this.one)),
              this._finalize(e));
          }
          _montA() {
            a(this.twisted);
            const e = this.a.redAdd(this.d),
              t = this.a.redSub(this.d);
            return e.redMul(t.redInvert()).redIMuln(2);
          }
          _mulA(e) {
            return (
              a(e instanceof n),
              this.oneA ? e.clone() : this.mOneA ? e.redNeg() : this.a.redMul(e)
            );
          }
          _mulC(e) {
            return (a(e instanceof n), this.oneC ? e : this.c.redMul(e));
          }
          _mulCC(e) {
            return (a(e instanceof n), this.oneC ? e : this.cc.redMul(e));
          }
          _mulD(e) {
            return (
              a(e instanceof n),
              this.smallD ? e.redMuln(this.smi) : this.d.redMul(e)
            );
          }
          _mulCCD(e) {
            return this.oneC ? this._mulD(e) : this.ccd.redMul(e);
          }
          _elligator1(e) {
            (a(e instanceof n), a(3 === this.p.andln(3)), a(!this.s.isZero()));
            const { one: t, two: r, s: i } = this,
              s = i.redSqr(),
              d = this.two.redMul(s.redInvert()),
              o = d.redAdd(d.redInvert()),
              f = d.redSqr(),
              u = o.redSqr(),
              h = this.p.subn(2),
              c = this.p.subn(1).iushrn(1),
              l = this.p.addn(1).iushrn(2),
              p = t.redSub(e),
              b = t.redAdd(e),
              m = p.redMul(b.redPow(h)),
              v = m.redSqr(),
              S = v.redMul(m),
              y = S.redMul(v),
              M = y.redAdd(u.redSub(r).redMul(S)).redIAdd(m),
              w = M.redPow(c),
              I = v.redAdd(f.redPow(h)).redPow(c),
              g = w.redMul(m),
              z = w.redMul(M).redPow(l).redMul(w).redMul(I),
              x = t.redAdd(g),
              A = x.redSqr(),
              N = d.redSub(t).redMul(i).redMul(g).redMul(x),
              P = N.redMul(z.redPow(h)),
              E = o.redMul(g),
              _ = E.redSub(A).redMul(E.redAdd(A).redPow(h));
            return this.point(P, _);
          }
          _invert1(e) {
            (a(e instanceof EdwardsPoint),
              a(3 === this.p.andln(3)),
              a(!this.s.isZero()));
            const { one: t, two: r, s: i } = this,
              n = i.redSqr(),
              s = this.two.redMul(n.redInvert()),
              d = s.redAdd(s.redInvert()),
              o = s.redSqr(),
              f = this.p.subn(2),
              u = this.p.subn(1).iushrn(1),
              h = this.p.addn(1).iushrn(2),
              { x: c, y: l } = e.normalize().clone(),
              p = l.redSub(t).redMul(l.redAdd(t).redIMuln(2).redPow(f)),
              b = i.redMul(s.redSub(t)).redIMuln(2),
              m = s.redPow(u),
              v = b.redMul(m).redMul(d.redPow(f)),
              S = p.redMul(d);
            c.cinject(v, S.ceq(r.redNeg()));
            const y = t.redAdd(S),
              M = y.redSqr().redISub(t),
              w = y.redNeg(),
              I = M.redPow(h),
              g = w.redAdd(I),
              z = s.redSub(t),
              x = t.redAdd(g),
              A = g.redSqr().redIAdd(o.redPow(f)),
              N = z.redMul(i).redMul(g).redMul(x).redMul(c).redMul(A),
              P = N.redPow(u),
              E = P.redMul(g),
              _ = t.redSub(E).redMul(t.redAdd(E).redPow(f));
            if (!I.redSqr().ceq(M)) throw new Error("X is not a square mod P.");
            return _;
          }
          point(e, t, r, i) {
            return new EdwardsPoint(this, e, t, r, i);
          }
          jpoint(e, t, r) {
            return (a(null == e && null == t && null == r), this.point());
          }
          solveX2(e) {
            a(e instanceof n);
            const t = e.redSqr(),
              r = this._mulCCD(t).redISub(this.a),
              i = t.redISub(this.cc),
              s = i.redMul(r.redInvert());
            return s;
          }
          solveX(e) {
            const t = e.redSqr(),
              r = this._mulCCD(t).redISub(this.a),
              i = t.redISub(this.cc);
            return this._isqrt(i, r);
          }
          solveY2(e) {
            a(e instanceof n);
            const t = e.redSqr(),
              r = this.cc.redSub(this._mulA(t)),
              i = this.one.redSub(this._mulCCD(t)),
              s = r.redMul(i.redInvert());
            return s;
          }
          solveY(e) {
            const t = e.redSqr(),
              r = this.cc.redSub(this._mulA(t)),
              i = this.one.redSub(this._mulCCD(t));
            return this._isqrt(r, i);
          }
          validate(e) {
            if ((a(e instanceof EdwardsPoint), e.isInfinity())) return !0;
            if (this.extended) {
              const t = e.zOne ? e.t : e.t.redMul(e.z),
                r = e.x.redMul(e.y);
              if (0 !== t.cmp(r)) return !1;
            }
            if (e.zOne) {
              const t = e.x.redSqr(),
                r = e.y.redSqr(),
                i = this._mulD(t).redMul(r),
                n = this._mulA(t).redIAdd(r),
                s = this._mulCC(this.one.redAdd(i));
              return 0 === n.cmp(s);
            }
            const t = e.x.redSqr(),
              r = e.y.redSqr(),
              i = e.z.redSqr(),
              n = i.redSqr(),
              s = this._mulD(t).redMul(r),
              d = this._mulA(t).redIAdd(r).redMul(i),
              o = this._mulCC(n.redIAdd(s));
            return 0 === d.cmp(o);
          }
          pointFromX(e, t) {
            (a(e instanceof n),
              a("boolean" === typeof t),
              e.red || (e = e.toRed(this.red)));
            const r = this.solveY(e);
            if (r.isZero() && t) throw new Error("Invalid point.");
            return (r.redIsOdd() !== t && r.redINeg(), this.point(e, r));
          }
          pointFromY(e, t) {
            (a(e instanceof n),
              a("boolean" === typeof t),
              e.red || (e = e.toRed(this.red)));
            const r = this.solveX(e);
            if (r.isZero() && t) throw new Error("Invalid point.");
            return (r.redIsOdd() !== t && r.redINeg(), this.point(r, e));
          }
          pointFromShort(e) {
            if (
              (a(e instanceof Point),
              a(e.curve instanceof ShortCurve),
              a(e.curve.p.eq(this.p)),
              a(this.twisted),
              e.normalize(),
              e.isInfinity())
            )
              return this.point();
            const t = e.x.fromRed().toRed(this.red),
              r = e.y.fromRed().toRed(this.red),
              i = this._montA(),
              n = i.redAdd(this.two).redINeg().redSqrt(),
              s = t.redMuln(3).redISub(i),
              d = s.redSub(this.three),
              o = s.redAdd(this.three),
              f = n.redMul(s).redMul(r.redMuln(3).redInvert()),
              u = d.redMul(o.redInvert());
            return this.point(f, u);
          }
          pointFromMont(e, t) {
            if (
              (a(e instanceof MontPoint),
              a("boolean" === typeof t),
              a(e.curve.p.eq(this.p)),
              e.isInfinity())
            ) {
              if (t) throw new Error("Invalid point.");
              return this.point();
            }
            let r;
            if (this.twisted) {
              if (e.x.eq(e.z.redNeg())) return this.point();
              const t = e.x.redSub(e.z),
                i = e.x.redAdd(e.z);
              r = t.redMul(i.redInvert());
            } else if (this.iso4) {
              const t = e.divH().normalize(),
                i = t.x,
                n = t.curve.solveY(i),
                s = i.redSqr(),
                d = s.redMul(i),
                o = d.redMul(s),
                f = n.redSqr(),
                u = d.redIMuln(2),
                h = i.redMul(f).redIMuln(4),
                c = s.redMul(f).redIMuln(2),
                l = f.redIMuln(2),
                a = o.redSub(u).redISub(h).redIAdd(i).redINeg(),
                p = o.redISub(c).redISub(u).redISub(l).redIAdd(i);
              r = a.redMul(p.redInvert());
            } else {
              if (e.x.eq(e.z)) return this.point();
              const t = e.z.redAdd(e.x).redINeg(),
                i = e.z.redSub(e.x);
              r = t.redMul(i.redInvert());
            }
            return this.pointFromY(r.fromRed(), t);
          }
          pointFromEdwards(e) {
            return (a(e instanceof EdwardsPoint), a(e.curve === this), e);
          }
          pointFromUniform(e, t) {
            (a(e instanceof MontCurve),
              a(t instanceof n),
              a(t.red === this.red));
            const r = t.fromRed().toRed(e.red),
              [i, s] = e.pointFromUniform(r),
              d = this.pointFromMont(i, s);
            return d;
          }
          pointToUniform(e, t) {
            a(e instanceof MontCurve);
            const r = e.pointFromEdwards(t),
              i = t.getX().isOdd(),
              n = e.pointToUniform(r, i),
              s = n.fromRed().toRed(this.red);
            return s;
          }
          pointFromHash(t, r) {
            (a(t instanceof MontCurve), a(e.isBuffer(r)));
            const i = (this.fieldBits + 7) >>> 3;
            if (r.length !== 2 * i) throw new Error("Invalid hash size.");
            const n = r.slice(0, i),
              s = r.slice(i),
              d = this.decodeUniform(n),
              o = this.decodeUniform(s),
              f = this.pointFromUniform(t, d),
              u = this.pointFromUniform(t, o);
            return f.add(u).mulH();
          }
          randomPoint(e) {
            let t;
            for (;;) {
              const i = this.randomField(e),
                s = n.random(e, 0, 2);
              try {
                t = this.pointFromY(i, s.isOdd());
              } catch (r) {
                continue;
              }
              return t;
            }
          }
          decodePoint(e) {
            return EdwardsPoint.decode(this, e);
          }
          pointFromJSON(e) {
            return EdwardsPoint.fromJSON(this, e);
          }
          toJSON(e) {
            const t = super.toJSON(e);
            return (
              (t.a = this.a.fromRed().toJSON()),
              (t.c = this.c.fromRed().toJSON()),
              (t.d = this.d.fromRed().toJSON()),
              (t.s = this.s.fromRed().toJSON()),
              t
            );
          }
        }
        class EdwardsPoint extends Point {
          constructor(e, t, r, i, n) {
            (a(e instanceof EdwardsCurve),
              super(e, s.PROJECTIVE),
              (this.x = this.curve.zero),
              (this.y = this.curve.c),
              (this.z = this.curve.one),
              (this.t = this.curve.extended ? this.curve.zero : null),
              (this.zOne = 1),
              null != t && this._init(t, r, i, n));
          }
          _init(e, t, r, i) {
            (a(e instanceof n),
              a(t instanceof n),
              a(null == r || r instanceof n),
              a(null == i || i instanceof n),
              a(this.curve.extended || null == i),
              (this.x = e),
              (this.y = t),
              (this.z = r || this.curve.one),
              (this.t = i || null),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = 0 | this.z.eq(this.curve.one)),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvert()))));
          }
          clone() {
            const e = this.x.clone(),
              t = this.y.clone(),
              r = this.z.clone(),
              i = this.t ? this.t.clone() : null;
            return this.curve.point(e, t, r, i);
          }
          swap(e, t) {
            a(e instanceof EdwardsPoint);
            const r = 1 & ((t >> 31) | (-t >> 31)),
              i = this.zOne,
              n = e.zOne;
            return (
              this.x.cswap(e.x, t),
              this.y.cswap(e.y, t),
              this.z.cswap(e.z, t),
              this.curve.extended && this.t.cswap(e.t, t),
              (this.zOne = (i & (1 ^ r)) | (n & r)),
              (e.zOne = (n & (1 ^ r)) | (i & r)),
              this
            );
          }
          normalize() {
            if (this.zOne) return this;
            const e = this.z.redInvert();
            return (
              (this.x = this.x.redMul(e)),
              (this.y = this.y.redMul(e)),
              this.t && (this.t = this.t.redMul(e)),
              (this.z = this.curve.one),
              (this.zOne = 1),
              this
            );
          }
          scale(e) {
            a(e instanceof n);
            const t = this.x.redMul(e),
              r = this.y.redMul(e),
              i = this.z.redMul(e),
              s = this.t ? this.t.redMul(e) : null;
            return this.curve.point(t, r, i, s);
          }
          neg() {
            const e = this.x.redNeg(),
              t = this.y,
              r = this.z,
              i = this.t ? this.t.redNeg() : null;
            return this.curve.point(e, t, r, i);
          }
          add(e) {
            return (
              a(e instanceof EdwardsPoint),
              this.isInfinity()
                ? e
                : e.isInfinity()
                  ? this
                  : this.curve.extended
                    ? this.zOne
                      ? e._addExt(this, 0)
                      : this._addExt(e, 0)
                    : this.zOne
                      ? e._addProj(this, 0)
                      : this._addProj(e, 0)
            );
          }
          _addExt(e, t) {
            const r = e.zOne & (1 ^ t),
              i = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
              n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
              s = this.t.redMul(this.curve.k).redMul(e.t),
              d = r ? this.z.redAdd(this.z) : this.z.redMul(e.z).redIMuln(2),
              o = n.redSub(i),
              f = d.redSub(s),
              u = d.redIAdd(s),
              h = n.redIAdd(i),
              c = o.redMul(f),
              l = u.redMul(h),
              a = o.redMul(h),
              p = f.redMul(u);
            return this.curve.point(c, l, p, a);
          }
          _addProj(e, t) {
            const r = e.zOne & (1 ^ t),
              i = r ? this.z : this.z.redMul(e.z),
              n = i.redSqr(),
              s = this.x.redMul(e.x),
              d = this.y.redMul(e.y),
              o = this.curve._mulD(s).redMul(d),
              f = n.redSub(o),
              u = n.redIAdd(o),
              h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)),
              c = h.redISub(s).redISub(d).redMul(i).redMul(f);
            let l, a;
            return (
              this.curve.twisted
                ? ((l = i.redMul(u).redMul(d.redISub(this.curve._mulA(s)))),
                  (a = f.redMul(u)))
                : ((l = i.redMul(u).redMul(d.redISub(s))),
                  (a = this.curve._mulC(f).redMul(u))),
              this.curve.point(c, l, a)
            );
          }
          dbl() {
            return this.isInfinity()
              ? this
              : this.curve.extended
                ? this._dblExt(0)
                : this._dblProj(0);
          }
          _dblExt(e) {
            const t = this.zOne & (1 ^ e),
              r = this.x.redSqr(),
              i = this.y.redSqr(),
              n = t ? this.curve.two : this.z.redSqr().redIMuln(2),
              s = this.curve._mulA(r),
              d = this.x.redAdd(this.y).redSqr().redISub(r).redISub(i),
              o = s.redAdd(i),
              f = o.redSub(n),
              u = s.redISub(i),
              h = d.redMul(f),
              c = o.redMul(u),
              l = d.redMul(u),
              a = f.redMul(o);
            return this.curve.point(h, c, a, l);
          }
          _dblProj(e) {
            const t = this.zOne & (1 ^ e),
              r = this.x.redAdd(this.y).redSqr(),
              i = this.x.redSqr(),
              n = this.y.redSqr();
            let s, d, o;
            if (this.curve.twisted) {
              const e = this.curve._mulA(i),
                f = e.redAdd(n);
              if (t)
                ((s = r.redSub(i).redISub(n).redMul(f.redSub(this.curve.two))),
                  (d = f.redMul(e.redISub(n))),
                  (o = f.redSqr().redISub(f).redISub(f)));
              else {
                const t = this.z.redSqr(),
                  u = f.redSub(t).redISub(t);
                ((s = r.redISub(i).redISub(n).redMul(u)),
                  (d = f.redMul(e.redISub(n))),
                  (o = f.redMul(u)));
              }
            } else {
              const e = i.redAdd(n);
              let f;
              if (t) f = e.redSub(this.curve.cc2);
              else {
                const t = this.curve._mulC(this.z).redSqr();
                f = e.redSub(t).redISub(t);
              }
              ((s = this.curve._mulC(r.redISub(e)).redMul(f)),
                (d = this.curve._mulC(e).redMul(i.redISub(n))),
                (o = e.redMul(f)));
            }
            return this.curve.point(s, d, o);
          }
          trpl() {
            return this.isInfinity()
              ? this
              : this.curve.extended
                ? this._trplExt(0)
                : this._trplProj(0);
          }
          _trplExt(e) {
            const t = this.zOne & (1 ^ e),
              r = this.y.redSqr(),
              i = this.curve._mulA(this.x.redSqr()),
              n = r.redAdd(i);
            let s;
            s = t
              ? this.curve.two.redSub(n).redIMuln(2)
              : this.z.redSqr().redIMuln(2).redISub(n).redIMuln(2);
            const d = i.redMul(s),
              o = r.redMul(s),
              f = n.redMul(r.redISub(i)),
              u = f.redSub(o),
              h = f.redAdd(d),
              c = this.x.redMul(o.redIAdd(f)),
              l = this.y.redMul(d.redISub(f)),
              a = t ? u : this.z.redMul(u),
              p = t ? h : this.z.redMul(h),
              b = c.redMul(a),
              m = l.redMul(p),
              v = a.redMul(p),
              S = c.redMul(l);
            return this.curve.point(b, m, v, S);
          }
          _trplProj(e) {
            const t = this.zOne & (1 ^ e),
              r = this.x.redSqr(),
              i = this.y.redSqr();
            let n, s, d;
            if (this.curve.twisted) {
              const e = this.curve._mulA(r),
                o = i.redAdd(e);
              let f;
              f = t
                ? this.curve.two.redSub(o).redIMuln(2)
                : this.z.redSqr().redIMuln(2).redISub(o).redIMuln(2);
              const u = e.redMul(f),
                h = i.redMul(f),
                c = o.redMul(i.redISub(e)),
                l = c.redSub(h),
                a = c.redAdd(u);
              ((n = this.x.redMul(h.redIAdd(c)).redMul(l)),
                (s = this.y.redMul(u.redISub(c)).redMul(a)),
                (d = t ? l.redMul(a) : this.z.redMul(l).redMul(a)));
            } else {
              let e;
              e = t
                ? this.curve.c2.redSqr()
                : this.curve.c2.redMul(this.z).redSqr();
              const o = r.redAdd(i),
                f = o.redSqr(),
                u = o.redMul(r.redSub(i)).redIMuln(2),
                h = f.redSub(i.redMul(e)),
                c = f.redSub(r.redMul(e)),
                l = u.redAdd(c),
                a = u.redISub(h);
              ((n = h.redMul(a).redMul(this.x)),
                (s = c.redMul(l).redMul(this.y)),
                (d = t ? l.redMul(a) : l.redMul(a).redMul(this.z)));
            }
            return this.curve.point(n, s, d);
          }
          uadd(e) {
            return (
              a(e instanceof EdwardsPoint),
              this.curve.extended ? this._addExt(e, 1) : this._addProj(e, 1)
            );
          }
          udbl() {
            return this.curve.extended ? this._dblExt(1) : this._dblProj(1);
          }
          getX() {
            return (this.normalize(), this.x.fromRed());
          }
          getY() {
            return (this.normalize(), this.y.fromRed());
          }
          eq(e) {
            if (
              (a(e instanceof EdwardsPoint),
              a(0 !== this.z.sign()),
              a(0 !== e.z.sign()),
              this === e)
            )
              return !0;
            if (0 === this.z.cmp(e.z))
              return 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y);
            const t = this.x.redMul(e.z),
              r = e.x.redMul(this.z);
            if (0 !== t.cmp(r)) return !1;
            const i = this.y.redMul(e.z),
              n = e.y.redMul(this.z);
            return 0 === i.cmp(n);
          }
          isInfinity() {
            return (
              a(0 !== this.z.sign()),
              0 === this.x.sign() &&
                (this.curve.oneC
                  ? 0 === this.y.cmp(this.z)
                  : this.zOne
                    ? 0 === this.y.cmp(this.curve.c)
                    : 0 === this.y.cmp(this.curve.c.redMul(this.z)))
            );
          }
          hasQuadY() {
            return 1 === this.y.redMul(this.z).redJacobi();
          }
          eqX(e) {
            (a(e instanceof n), a(0 !== this.z.sign()));
            const t = e.toRed(this.curve.red).redMul(this.z);
            return 0 === this.x.cmp(t);
          }
          toP() {
            return this.normalize();
          }
          toJ() {
            return this;
          }
          encode() {
            if (this.isInfinity()) throw new Error("Invalid point.");
            const e = this.getY();
            return (
              e.setn(this.curve.signBit, this.x.redIsOdd()),
              this.curve.encodeField(e)
            );
          }
          static decode(e, t) {
            a(e instanceof EdwardsCurve);
            const r = e.decodeField(t),
              i = 0 !== r.testn(e.signBit);
            if ((r.setn(e.signBit, 0), r.cmp(e.p) >= 0))
              throw new Error("Invalid point.");
            const n = e.pointFromY(r, i);
            if (n.isInfinity()) throw new Error("Invalid point.");
            if (e.iso4 && (n.y.eq(n.z) || n.y.eq(n.z.redNeg())))
              throw new Error("Invalid point.");
            return n;
          }
          toJSON(e) {
            if (this.isInfinity()) return [];
            const t = this.getX().toJSON(),
              r = this.getY().toJSON();
            return !0 === e && this.pre ? [t, r, this.pre.toJSON()] : [t, r];
          }
          static fromJSON(e, t) {
            if (
              (a(e instanceof EdwardsCurve),
              a(Array.isArray(t)),
              a(0 === t.length || 2 === t.length || 3 === t.length),
              0 === t.length)
            )
              return e.point();
            const r = n.fromJSON(t[0]),
              i = n.fromJSON(t[1]),
              s = e.point(r, i);
            return (
              t.length > 2 &&
                null != t[2] &&
                (s.pre = Precomp.fromJSON(s, t[2])),
              s
            );
          }
          [i]() {
            return this.isInfinity()
              ? "<EdwardsPoint: Infinity>"
              : "<EdwardsPoint: x=" +
                  this.x.fromRed().toString(16, 2) +
                  " y=" +
                  this.y.fromRed().toString(16, 2) +
                  " z=" +
                  this.z.fromRed().toString(16, 2) +
                  ">";
          }
        }
        class Mask {
          constructor(e) {
            a(e instanceof Curve);
            const t = e.p.byteLength(),
              r = Math.max(8, 8 * (t - 1));
            ((this.curve = e),
              (this.h = 255 & -e.h.toNumber()),
              (this.n = e.p.ushrn(r).toNumber()),
              (this.b = (this.n + 1) >>> 1),
              (this.and = n.shift(this.n + 1, r - 8).isubn(1)),
              this.and.iushln(8).iuorn(this.h),
              (this.or = n.shift(this.b, r)),
              "ed25519" === e.id || "x25519" === e.id
                ? (a(248 === this.h), a(127 === this.n), a(64 === this.b))
                : ("ed448" !== e.id && "x448" !== e.id) ||
                  (a(252 === this.h), a(255 === this.n), a(128 === this.b)));
          }
          reduce(e) {
            return (
              a(e instanceof n),
              a(!e.red),
              e.iuand(this.and),
              e.iuor(this.or),
              e
            );
          }
          splitHash(t) {
            (a(e.isBuffer(t)), a(t.length === 2 * this.curve.fieldSize));
            const r = t.slice(0, this.curve.scalarSize),
              i = t.slice(this.curve.fieldSize);
            return (this.clamp(r), [r, i]);
          }
          clamp(t) {
            (a(e.isBuffer(t)), a(t.length === this.curve.scalarSize));
            let r = 0,
              i = this.curve.scalarSize - 1;
            return (
              "be" === this.curve.endian && ([r, i] = [i, r]),
              (t[r] &= this.h),
              (t[i] &= this.n),
              (t[i] |= this.b),
              t
            );
          }
          isClamped(t) {
            if ((a(e.isBuffer(t)), t.length !== this.curve.scalarSize))
              return !1;
            let r = 0,
              i = this.curve.scalarSize - 1;
            return (
              "be" === this.curve.endian && ([r, i] = [i, r]),
              !(t[r] & ~this.h) && !(t[i] & ~this.n) && !!(t[i] & this.b)
            );
          }
        }
        class Precomp {
          constructor() {
            ((this.naf = null),
              (this.doubles = null),
              (this.blinding = null),
              (this.beta = null));
          }
          map(e) {
            a("function" === typeof e);
            const t = new this.constructor();
            return (
              this.naf && (t.naf = this.naf.map(e)),
              this.doubles && (t.doubles = this.doubles.map(e)),
              t
            );
          }
          toJSON() {
            return {
              naf: this.naf ? this.naf.toJSON() : null,
              doubles: this.doubles ? this.doubles.toJSON() : null,
              blinding: this.blinding ? this.blinding.toJSON() : void 0,
            };
          }
          fromJSON(e, t) {
            return (
              a(e instanceof Point),
              a(t && "object" === typeof t),
              null != t.naf && (this.naf = NAF.fromJSON(e, t.naf)),
              null != t.doubles &&
                (this.doubles = Doubles.fromJSON(e, t.doubles)),
              null != t.blinding &&
                (this.blinding = Blinding.fromJSON(e, t.blinding)),
              this
            );
          }
          static fromJSON(e, t) {
            return new this().fromJSON(e, t);
          }
        }
        class NAF {
          constructor(e, t) {
            ((this.width = e), (this.points = t));
          }
          map(e) {
            a("function" === typeof e);
            const { width: t } = this,
              r = [];
            for (const i of this.points) r.push(e(i));
            return new this.constructor(t, r);
          }
          toJSON() {
            return {
              width: this.width,
              points: this.points.slice(1).map((e) => e.toJSON()),
            };
          }
          static fromJSON(e, t) {
            (a(e instanceof Point),
              a(t && "object" === typeof t),
              a(t.width >>> 0 === t.width),
              a(Array.isArray(t.points)));
            const { curve: r } = e,
              { width: i } = t,
              n = [e];
            for (const s of t.points) n.push(r.pointFromJSON(s));
            return new this(i, n);
          }
        }
        class Doubles {
          constructor(e, t) {
            ((this.step = e), (this.points = t));
          }
          map(e) {
            a("function" === typeof e);
            const { step: t } = this,
              r = [];
            for (const i of this.points) r.push(e(i));
            return new this.constructor(t, r);
          }
          toJSON() {
            return {
              step: this.step,
              points: this.points.slice(1).map((e) => e.toJSON()),
            };
          }
          static fromJSON(e, t) {
            (a(e instanceof Point),
              a(t && "object" === typeof t),
              a(t.step >>> 0 === t.step),
              a(Array.isArray(t.points)));
            const { curve: r } = e,
              { step: i } = t,
              n = [e];
            for (const s of t.points) n.push(r.pointFromJSON(s));
            return new this(i, n);
          }
        }
        class Blinding {
          constructor(e, t) {
            ((this.blind = e), (this.unblind = t));
          }
          toJSON() {
            return {
              blind: this.blind.toJSON(),
              unblind: this.unblind.toJSON(),
            };
          }
          static fromJSON(e, t) {
            (a(e instanceof Point), a(t && "object" === typeof t));
            const { curve: r } = e,
              i = n.fromJSON(t.blind),
              s = r.pointFromJSON(t.unblind);
            return new this(i, s);
          }
        }
        class Endo {
          constructor(e, t, r) {
            ((this.beta = e), (this.lambda = t), (this.basis = r));
          }
          toJSON() {
            return {
              beta: this.beta.fromRed().toJSON(),
              lambda: this.lambda.toJSON(),
              basis: [this.basis[0].toJSON(), this.basis[1].toJSON()],
            };
          }
          static fromJSON(e, t) {
            (a(e instanceof Curve),
              a(t && "object" === typeof t),
              a(Array.isArray(t.basis)),
              a(2 === t.basis.length));
            const r = n.fromJSON(t.beta).toRed(e.red),
              i = n.fromJSON(t.lambda),
              s = [Vector.fromJSON(t.basis[0]), Vector.fromJSON(t.basis[1])];
            return new this(r, i, s);
          }
        }
        class Vector {
          constructor(e, t) {
            ((this.a = e), (this.b = t));
          }
          toJSON() {
            return { a: this.a.toJSON(), b: this.b.toJSON() };
          }
          static fromJSON(e) {
            a(e && "object" === typeof e);
            const t = n.fromJSON(e.a),
              r = n.fromJSON(e.b);
            return new this(t, r);
          }
        }
        class P192 extends ShortCurve {
          constructor(e) {
            super({
              id: "P192",
              ossl: "prime192v1",
              type: "short",
              endian: "be",
              hash: "SHA256",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: "p192",
              s: "3045ae6f c8422f64 ed579528 d38120eae12196d5",
              c: "3099d2bb bfcb2538 542dcd5f b078b6ef5f3d6fe2 c745de65",
              p: "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffeffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836146bc9b1 b4d22831",
              h: "1",
              z: "-1",
              g: [
                [
                  "188da80e b03090f6 7cbf20eb 43a18800",
                  "f4ff0afd 82ff1012",
                ].join(""),
                [
                  "07192b95 ffc8da78 631011ed 6b24cdd5",
                  "73f977a1 1e794811",
                ].join(""),
                e,
              ],
            });
          }
        }
        class P224 extends ShortCurve {
          constructor(e) {
            super({
              id: "P224",
              ossl: "secp224r1",
              type: "short",
              endian: "be",
              hash: "SHA256",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: "p224",
              s: "bd713447 99d5c7fc dc45b59f a3b9ab8f6a948bc5",
              c: "5b056c7e 11dd68f4 0469ee7f 3c7a7d74f7d12111 6506d031 218291fb",
              p: "ffffffff ffffffff ffffffff ffffffff00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2e0b8f03e 13dd2945 5c5c2a3d",
              h: "1",
              z: "-b",
              g: [
                [
                  "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3",
                  "56c21122 343280d6 115c1d21",
                ].join(""),
                [
                  "bd376388 b5f723fb 4c22dfe6 cd4375a0",
                  "5a074764 44d58199 85007e34",
                ].join(""),
                e,
              ],
            });
          }
        }
        class P256 extends ShortCurve {
          constructor(e) {
            super({
              id: "P256",
              ossl: "prime256v1",
              type: "short",
              endian: "be",
              hash: "SHA256",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: null,
              s: "c49d3608 86e70493 6a6678e1 139d26b7819f7e90",
              c: "7efba166 2985be94 03cb055c 75d4f7e0ce8d84a9 c5114abc af317768 0104fa0d",
              p: "ffffffff 00000001 00000000 0000000000000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 0000000000000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffffbce6faad a7179e84 f3b9cac2 fc632551",
              h: "1",
              z: "-2",
              g: [
                [
                  "6b17d1f2 e12c4247 f8bce6e5 63a440f2",
                  "77037d81 2deb33a0 f4a13945 d898c296",
                ].join(""),
                [
                  "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16",
                  "2bce3357 6b315ece cbb64068 37bf51f5",
                ].join(""),
                e,
              ],
            });
          }
        }
        class P384 extends ShortCurve {
          constructor(e) {
            super({
              id: "P384",
              ossl: "secp384r1",
              type: "short",
              endian: "be",
              hash: "SHA384",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: null,
              s: "a335926a a319a27a 1d00896a 6773a4827acdac73",
              c: "79d1e655 f868f02f ff48dcde e14151ddb80643c1 406d0ca1 0dfe6fc5 2009540a495e8042 ea5f744f 6e184667 cc722483",
              p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffeffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffeffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19181d9c6e fe814112 0314088f 5013875ac656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff c7634d81 f4372ddf581a0db2 48b0a77a ecec196a ccc52973",
              h: "1",
              z: "-1",
              g: [
                [
                  "aa87ca22 be8b0537 8eb1c71e f320ad74",
                  "6e1d3b62 8ba79b98 59f741e0 82542a38",
                  "5502f25d bf55296c 3a545e38 72760ab7",
                ].join(""),
                [
                  "3617de4a 96262c6f 5d9e98bf 9292dc29",
                  "f8f41dbd 289a147c e9da3113 b5f0b8c0",
                  "0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
                ].join(""),
                e,
              ],
            });
          }
        }
        class P521 extends ShortCurve {
          constructor(e) {
            super({
              id: "P521",
              ossl: "secp521r1",
              type: "short",
              endian: "be",
              hash: "SHA512",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: "p521",
              s: "d09e8800 291cb853 96cc6717 393284aaa0da64ba",
              c: "000000b4 8bfa5f42 0a349495 39d2bdfc264eeeeb 077688e4 4fbf0ad8 f6d0edb37bd6b533 28100051 8e19f1b9 ffbe0fe9ed8a3c22 00b8f875 e523868c 70c1e5bf55bad637",
              p: "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff",
              a: "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffffffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0b68540ee a2da725b 99b315f3 b8b489918ef109e1 56193951 ec7e937b 1652c0bd3bb1bf07 3573df88 3d2c34f1 ef451fd46b503f00",
              n: "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffffffffffa 51868783 bf2f966b 7fcc0148f709a5d0 3bb5c9b8 899c47ae bb6fb71e91386409",
              h: "1",
              z: "-2",
              g: [
                [
                  "000000c6 858e06b7 0404e9cd 9e3ecb66",
                  "2395b442 9c648139 053fb521 f828af60",
                  "6b4d3dba a14b5e77 efe75928 fe1dc127",
                  "a2ffa8de 3348b3c1 856a429b f97e7e31",
                  "c2e5bd66",
                ].join(""),
                [
                  "00000118 39296a78 9a3bc004 5c8a5fb4",
                  "2c7d1bd9 98f54449 579b4468 17afbd17",
                  "273e662c 97ee7299 5ef42640 c550b901",
                  "3fad0761 353c7086 a272c240 88be9476",
                  "9fd16650",
                ].join(""),
                e,
              ],
            });
          }
        }
        class SECP256K1 extends ShortCurve {
          constructor(e) {
            super({
              id: "SECP256K1",
              ossl: "secp256k1",
              type: "short",
              endian: "be",
              hash: "SHA256",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: "k256",
              p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe fffffc2f",
              a: "0",
              b: "7",
              n: "ffffffff ffffffff ffffffff fffffffebaaedce6 af48a03b bfd25e8c d0364141",
              h: "1",
              z: "1",
              g: [
                [
                  "79be667e f9dcbbac 55a06295 ce870b07",
                  "029bfcdb 2dce28d9 59f2815b 16f81798",
                ].join(""),
                [
                  "483ada77 26a3c465 5da4fbfc 0e1108a8",
                  "fd17b448 a6855419 9c47d08f fb10d4b8",
                ].join(""),
                e,
              ],
              endo: {
                beta: "7ae96a2b 657c0710 6e64479e ac3434e99cf04975 12f58995 c1396c28 719501ee",
                lambda:
                  "5363ad4c c05c30e0 a5261c02 8812645a122e22ea 20816678 df02967c 1b23bd72",
                basis: [
                  {
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3",
                  },
                  {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15",
                  },
                ],
              },
            });
          }
        }
        class BRAINPOOLP256 extends ShortCurve {
          constructor(e) {
            super({
              id: "BRAINPOOLP256",
              ossl: "brainpoolP256r1",
              type: "short",
              endian: "be",
              hash: "SHA256",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: null,
              s: "757f5958 490cfd47 d7c19bb4 2158d9554f7b46bc",
              p: "a9fb57db a1eea9bc 3e660a90 9d838d726e3bf623 d5262028 2013481d 1f6e5377",
              a: "7d5a0975 fc2c3057 eef67530 417affe7fb8055c1 26dc5c6c e94a4b44 f330b5d9",
              b: "26dc5c6c e94a4b44 f330b5d9 bbd77cbf95841629 5cf7e1ce 6bccdc18 ff8c07b6",
              n: "a9fb57db a1eea9bc 3e660a90 9d838d718c397aa3 b561a6f7 901e0e82 974856a7",
              h: "1",
              z: "-2",
              g: [
                [
                  "8bd2aeb9 cb7e57cb 2c4b482f fc81b7af",
                  "b9de27e1 e3bd23c2 3a4453bd 9ace3262",
                ].join(""),
                [
                  "547ef835 c3dac4fd 97f8461a 14611dc9",
                  "c2774513 2ded8e54 5c1d54c7 2f046997",
                ].join(""),
                e,
              ],
            });
          }
        }
        class BRAINPOOLP384 extends ShortCurve {
          constructor(e) {
            super({
              id: "BRAINPOOLP384",
              ossl: "brainpoolP384r1",
              type: "short",
              endian: "be",
              hash: "SHA384",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: null,
              s: "bcfbfa1c 877c5628 4dab79cd 4c2b3293d20e9e5e",
              p: "8cb91e82 a3386d28 0f5d6f7e 50e641df152f7109 ed5456b4 12b1da19 7fb71123acd3a729 901d1a71 87470013 3107ec53",
              a: "7bc382c6 3d8c150c 3c72080a ce05afa0c2bea28e 4fb22787 139165ef ba91f90f8aa5814a 503ad4eb 04a8c7dd 22ce2826",
              b: "04a8c7dd 22ce2826 8b39b554 16f0447c2fb77de1 07dcd2a6 2e880ea5 3eeb62d57cb43902 95dbc994 3ab78696 fa504c11",
              n: "8cb91e82 a3386d28 0f5d6f7e 50e641df152f7109 ed5456b3 1f166e6c ac0425a7cf3ab6af 6b7fc310 3b883202 e9046565",
              h: "1",
              z: "-1",
              g: [
                [
                  "1d1c64f0 68cf45ff a2a63a81 b7c13f6b",
                  "8847a3e7 7ef14fe3 db7fcafe 0cbd10e8",
                  "e826e034 36d646aa ef87b2e2 47d4af1e",
                ].join(""),
                [
                  "8abe1d75 20f9c2a4 5cb1eb8e 95cfd552",
                  "62b70b29 feec5864 e19c054f f9912928",
                  "0e464621 77918111 42820341 263c5315",
                ].join(""),
                e,
              ],
            });
          }
        }
        class BRAINPOOLP512 extends ShortCurve {
          constructor(e) {
            super({
              id: "BRAINPOOLP512",
              ossl: "brainpoolP512r1",
              type: "short",
              endian: "be",
              hash: "SHA512",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: null,
              s: "af02ac60 acc93ed8 74422a52 ecb238feee5ab6ad",
              p: "aadd9db8 dbe9c48b 3fd4e6ae 33c9fc07cb308db3 b3c9d20e d6639cca 703308717d4d9b00 9bc66842 aecda12a e6a380e62881ff2f 2d82c685 28aa6056 583a48f3",
              a: "7830a331 8b603b89 e2327145 ac234cc594cbdd8d 3df91610 a83441ca ea9863bc2ded5d5a a8253aa1 0a2ef1c9 8b9ac8b57f1117a7 2bf2c7b9 e7c1ac4d 77fc94ca",
              b: "3df91610 a83441ca ea9863bc 2ded5d5aa8253aa1 0a2ef1c9 8b9ac8b5 7f1117a72bf2c7b9 e7c1ac4d 77fc94ca dc083e67984050b7 5ebae5dd 2809bd63 8016f723",
              n: "aadd9db8 dbe9c48b 3fd4e6ae 33c9fc07cb308db3 b3c9d20e d6639cca 70330870553e5c41 4ca92619 41866119 7fac10471db1d381 085ddadd b5879682 9ca90069",
              h: "1",
              z: "2",
              g: [
                [
                  "81aee4bd d82ed964 5a21322e 9c4c6a93",
                  "85ed9f70 b5d916c1 b43b62ee f4d0098e",
                  "ff3b1f78 e2d0d48d 50d1687b 93b97d5f",
                  "7c6d5047 406a5e68 8b352209 bcb9f822",
                ].join(""),
                [
                  "7dde385d 566332ec c0eabfa9 cf7822fd",
                  "f209f700 24a57b1a a000c55b 881f8111",
                  "b2dcde49 4a5f485e 5bca4bd8 8a2763ae",
                  "d1ca2b2f a8f05406 78cd1e0f 3ad80892",
                ].join(""),
                e,
              ],
            });
          }
        }
        class X25519 extends MontCurve {
          constructor() {
            super({
              id: "X25519",
              ossl: "X25519",
              type: "mont",
              endian: "le",
              hash: "SHA512",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: "p25519",
              p: "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed",
              a: "76d06",
              b: "1",
              n: "10000000 00000000 00000000 0000000014def9de a2f79cd6 5812631a 5cf5d3ed",
              h: "8",
              z: "2",
              g: [
                [
                  "00000000 00000000 00000000 00000000",
                  "00000000 00000000 00000000 00000009",
                ].join(""),
                [
                  "20ae19a1 b8a086b4 e01edd2c 7748d14c",
                  "923d4d7e 6d7c61b2 29e9c5a2 7eced3d9",
                ].join(""),
              ],
            });
          }
        }
        class ED25519 extends EdwardsCurve {
          constructor(e) {
            super({
              id: "ED25519",
              ossl: "ED25519",
              type: "edwards",
              endian: "le",
              hash: "SHA512",
              prefix: "SigEd25519 no Ed25519 collisions",
              context: !1,
              iso4: !1,
              prime: "p25519",
              p: "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed",
              a: "-1",
              c: "1",
              d: "52036cee 2b6ffe73 8cc74079 7779e89800700a4d 4141d8ab 75eb4dca 135978a3",
              n: "10000000 00000000 00000000 0000000014def9de a2f79cd6 5812631a 5cf5d3ed",
              h: "8",
              z: "2",
              g: [
                [
                  "216936d3 cd6e53fe c0a4e231 fdd6dc5c",
                  "692cc760 9525a7b2 c9562d60 8f25d51a",
                ].join(""),
                [
                  "66666666 66666666 66666666 66666666",
                  "66666666 66666666 66666666 66666658",
                ].join(""),
                e,
              ],
            });
          }
        }
        class X448 extends MontCurve {
          constructor() {
            super({
              id: "X448",
              ossl: "X448",
              type: "mont",
              endian: "le",
              hash: "SHAKE256",
              prefix: null,
              context: !1,
              iso4: !1,
              prime: "p448",
              p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff",
              a: "262a6",
              b: "1",
              n: "3fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff 7cca23e9c44edb49 aed63690 216cc272 8dc58f552378c292 ab5844f3",
              h: "4",
              z: "-1",
              g: [
                [
                  "00000000 00000000 00000000 00000000",
                  "00000000 00000000 00000000 00000000",
                  "00000000 00000000 00000000 00000000",
                  "00000000 00000005",
                ].join(""),
                [
                  "7d235d12 95f5b1f6 6c98ab6e 58326fce",
                  "cbae5d34 f55545d0 60f75dc2 8df3f6ed",
                  "b8027e23 46430d21 1312c4b1 50677af7",
                  "6fd7223d 457b5b1a",
                ].join(""),
              ],
            });
          }
        }
        class ED448 extends EdwardsCurve {
          constructor(e) {
            super({
              id: "ED448",
              ossl: "ED448",
              type: "edwards",
              endian: "le",
              hash: "SHAKE256",
              prefix: "SigEd448",
              context: !0,
              iso4: !0,
              prime: "p448",
              p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff",
              a: "1",
              c: "1",
              d: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffff6756",
              n: "3fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff 7cca23e9c44edb49 aed63690 216cc272 8dc58f552378c292 ab5844f3",
              h: "4",
              z: "-1",
              g: [
                [
                  "4f1970c6 6bed0ded 221d15a6 22bf36da",
                  "9e146570 470f1767 ea6de324 a3d3a464",
                  "12ae1af7 2ab66511 433b80e1 8b00938e",
                  "2626a82b c70cc05e",
                ].join(""),
                [
                  "693f4671 6eb6bc24 88762037 56c9c762",
                  "4bea7373 6ca39840 87789c1e 05a0c2d7",
                  "3ad3ff1c e67c39c4 fdbd132c 4ed7c8ad",
                  "9808795b f230fa14",
                ].join(""),
                e,
              ],
            });
          }
        }
        function o(e, t, r) {
          (a(e instanceof n), a(!e.red), a(t >>> 0 === t), a(r >>> 0 === r));
          const i = new Array(r),
            s = 1 << (t + 1),
            d = e.abs(),
            o = 1 | e.sign();
          let f = 0;
          while (!d.isZero()) {
            let e = 0;
            if (d.isOdd()) {
              const t = d.andln(s - 1);
              ((e = t > (s >> 1) - 1 ? (s >> 1) - t : t), d.isubn(e));
            }
            i[f++] = e * o;
            let r = 1;
            d.isZero() || 0 !== d.andln(s - 1) || (r = t + 1);
            for (let t = 1; t < r; t++) i[f++] = 0;
            d.iushrn(r);
          }
          for (a(f <= r); f < r; f++) i[f] = 0;
          return i;
        }
        function f(e, t, r, i) {
          a(i >>> 0 === i);
          const n = o(e, t, r),
            s = Math.ceil(n.length / i),
            d = new Array(s);
          let f = 0;
          for (let o = 0; o < n.length; o += i) {
            let e = 0;
            for (let t = o + i - 1; t >= o; t--) e = (e << 1) + n[t];
            d[f++] = e;
          }
          return (a(f === s), d);
        }
        function u(e, t, r) {
          (a(e instanceof n),
            a(t instanceof n),
            a(!e.red),
            a(!t.red),
            a(r >>> 0 === r));
          const i = [new Array(r), new Array(r)],
            s = e.abs(),
            d = t.abs(),
            o = 1 | e.sign(),
            f = 1 | t.sign();
          let u = 0,
            h = 0,
            c = 0;
          while (s.cmpn(-h) > 0 || d.cmpn(-c) > 0) {
            let e = (s.andln(3) + h) & 3,
              t = (d.andln(3) + c) & 3,
              r = 0,
              n = 0;
            if ((3 === e && (e = -1), 3 === t && (t = -1), 1 & e)) {
              const i = (s.andln(7) + h) & 7;
              r = (3 !== i && 5 !== i) || 2 !== t ? e : -e;
            }
            if (1 & t) {
              const r = (d.andln(7) + c) & 7;
              n = (3 !== r && 5 !== r) || 2 !== e ? t : -t;
            }
            ((i[0][u] = r * o),
              (i[1][u] = n * f),
              2 * h === r + 1 && (h = 1 - h),
              2 * c === n + 1 && (c = 1 - c),
              s.iushrn(1),
              d.iushrn(1),
              (u += 1));
          }
          for (a(u <= r); u < r; u++) ((i[0][u] = 0), (i[1][u] = 0));
          return i;
        }
        function h(e, t, r) {
          const i = u(e, t, r),
            n = new Array(r);
          for (let s = 0; s < r; s++) {
            const e = i[0][s],
              t = i[1][s];
            n[s] = d[3 * (e + 1) + (t + 1)];
          }
          return n;
        }
        function c(e, t) {
          (a(e instanceof n), a(t instanceof n));
          const r = e.abs(),
            i = r.add(t),
            s = i.add(t),
            d = i.bitLength(),
            o = t.bitLength();
          i.cinject(s, (d - o - 1) >>> 31);
          const f = 1 & e.isNeg(),
            u = i.bitLength(),
            h = i.toArray("le");
          return [f, u, h];
        }
        function l(e, t) {
          (a(e instanceof n), a(t instanceof n));
          const r = e.abs().imod(t),
            i = t.sub(r),
            s = t.bitLength(),
            d = r.bitLength(),
            o = i.bitLength(),
            f =
              (((d - s) >>> 31) &
                ((d - o) >>> 31) &
                ((((1 ^ d) - 1) >>> 31) ^ 1)) |
              (((1 ^ o) - 1) >>> 31);
          r.cinject(i, f);
          const u = e.isNeg() ^ f,
            h = r.bitLength(),
            c = r.toArray("le");
          return [u, h, c];
        }
        function a(e, t) {
          if (!e) {
            const e = new Error(t || "Assertion failed");
            throw (Error.captureStackTrace && Error.captureStackTrace(e, a), e);
          }
        }
        function p(e, t) {
          const r = e % t,
            i = r + t,
            n = r >>> 31;
          return ((n - 1) & r) | (~(n - 1) & i);
        }
        function b(e, t, r) {
          (a(e instanceof n), a(t instanceof n));
          const i = e.encode("le", r),
            s = t.encode("le", r);
          let d = -1,
            o = 0;
          for (let n = i.length - 1; n >= 0; n--) {
            const e = i[n],
              t = s[n];
            ((o = (~d & o) | (d & ((e - t) >> 31))),
              (d &= ((e ^ t) - 1) >> 31));
          }
          return ~d & o & 1;
        }
        ((t.Curve = Curve),
          (t.Point = Point),
          (t.ShortCurve = ShortCurve),
          (t.ShortPoint = ShortPoint),
          (t.JPoint = JPoint),
          (t.MontCurve = MontCurve),
          (t.MontPoint = MontPoint),
          (t.EdwardsCurve = EdwardsCurve),
          (t.EdwardsPoint = EdwardsPoint),
          (t.curves = {
            P192: P192,
            P224: P224,
            P256: P256,
            P384: P384,
            P521: P521,
            SECP256K1: SECP256K1,
            BRAINPOOLP256: BRAINPOOLP256,
            BRAINPOOLP384: BRAINPOOLP384,
            BRAINPOOLP512: BRAINPOOLP512,
            X25519: X25519,
            ED25519: ED25519,
            X448: X448,
            ED448: ED448,
          }));
      }).call(this, r(2).Buffer);
    },
    6830: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(3012),
          s = 2147483648,
          d = new Uint32Array([
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ]);
        class Keccak {
          constructor() {
            ((this.state = new Uint32Array(50)),
              (this.block = t.allocUnsafe(168)),
              (this.bs = 136),
              (this.pos = s));
          }
          init(e) {
            (void 0 === e && (e = 256),
              i((65535 & e) === e),
              i(e >= 128),
              i(e <= 512));
            const t = 1600 - 2 * e;
            return (
              i(t >= 0 && 0 === (63 & t)),
              (this.bs = t / 8),
              (this.pos = 0),
              this
            );
          }
          update(e) {
            (i(t.isBuffer(e)),
              i(!(this.pos & s), "Context already finalized."));
            let r = e.length,
              n = this.pos,
              d = 0;
            if (((this.pos = (this.pos + r) % this.bs), n > 0)) {
              let t = this.bs - n;
              if (
                (t > r && (t = r),
                e.copy(this.block, n, d, d + t),
                (n += t),
                (r -= t),
                (d += t),
                n < this.bs)
              )
                return this;
              this.transform(this.block, 0);
            }
            while (r >= this.bs)
              (this.transform(e, d), (d += this.bs), (r -= this.bs));
            return (r > 0 && e.copy(this.block, 0, d, d + r), this);
          }
          final(e, r) {
            (void 0 === e && (e = 1),
              null == r && (r = 0),
              0 === r && (r = 100 - this.bs / 2),
              i((255 & e) === e),
              i(r >>> 0 === r),
              i(!(this.pos & s), "Context already finalized."),
              this.block.fill(0, this.pos, this.bs),
              (this.block[this.pos] |= e),
              (this.block[this.bs - 1] |= 128),
              this.transform(this.block, 0),
              (this.pos = s),
              i(r < this.bs));
            const n = t.allocUnsafe(r);
            for (let t = 0; t < r; t++)
              n[t] = this.state[t >>> 2] >>> (8 * (3 & t));
            for (let t = 0; t < 50; t++) this.state[t] = 0;
            for (let t = 0; t < this.bs; t++) this.block[t] = 0;
            return n;
          }
          transform(e, t) {
            const r = this.bs / 4,
              i = this.state;
            for (let n = 0; n < r; n++) i[n] ^= o(e, t + 4 * n);
            for (let n = 0; n < 48; n += 2) {
              const e = i[0] ^ i[10] ^ i[20] ^ i[30] ^ i[40],
                t = i[1] ^ i[11] ^ i[21] ^ i[31] ^ i[41],
                r = i[2] ^ i[12] ^ i[22] ^ i[32] ^ i[42],
                s = i[3] ^ i[13] ^ i[23] ^ i[33] ^ i[43],
                o = i[4] ^ i[14] ^ i[24] ^ i[34] ^ i[44],
                f = i[5] ^ i[15] ^ i[25] ^ i[35] ^ i[45],
                u = i[6] ^ i[16] ^ i[26] ^ i[36] ^ i[46],
                h = i[7] ^ i[17] ^ i[27] ^ i[37] ^ i[47],
                c = i[8] ^ i[18] ^ i[28] ^ i[38] ^ i[48],
                l = i[9] ^ i[19] ^ i[29] ^ i[39] ^ i[49],
                a = c ^ ((r << 1) | (s >>> 31)),
                p = l ^ ((s << 1) | (r >>> 31)),
                b = e ^ ((o << 1) | (f >>> 31)),
                m = t ^ ((f << 1) | (o >>> 31)),
                v = r ^ ((u << 1) | (h >>> 31)),
                S = s ^ ((h << 1) | (u >>> 31)),
                y = o ^ ((c << 1) | (l >>> 31)),
                M = f ^ ((l << 1) | (c >>> 31)),
                w = u ^ ((e << 1) | (t >>> 31)),
                I = h ^ ((t << 1) | (e >>> 31));
              ((i[0] ^= a),
                (i[1] ^= p),
                (i[10] ^= a),
                (i[11] ^= p),
                (i[20] ^= a),
                (i[21] ^= p),
                (i[30] ^= a),
                (i[31] ^= p),
                (i[40] ^= a),
                (i[41] ^= p),
                (i[2] ^= b),
                (i[3] ^= m),
                (i[12] ^= b),
                (i[13] ^= m),
                (i[22] ^= b),
                (i[23] ^= m),
                (i[32] ^= b),
                (i[33] ^= m),
                (i[42] ^= b),
                (i[43] ^= m),
                (i[4] ^= v),
                (i[5] ^= S),
                (i[14] ^= v),
                (i[15] ^= S),
                (i[24] ^= v),
                (i[25] ^= S),
                (i[34] ^= v),
                (i[35] ^= S),
                (i[44] ^= v),
                (i[45] ^= S),
                (i[6] ^= y),
                (i[7] ^= M),
                (i[16] ^= y),
                (i[17] ^= M),
                (i[26] ^= y),
                (i[27] ^= M),
                (i[36] ^= y),
                (i[37] ^= M),
                (i[46] ^= y),
                (i[47] ^= M),
                (i[8] ^= w),
                (i[9] ^= I),
                (i[18] ^= w),
                (i[19] ^= I),
                (i[28] ^= w),
                (i[29] ^= I),
                (i[38] ^= w),
                (i[39] ^= I),
                (i[48] ^= w),
                (i[49] ^= I));
              const g = i[0],
                z = i[1],
                x = (i[11] << 4) | (i[10] >>> 28),
                A = (i[10] << 4) | (i[11] >>> 28),
                N = (i[20] << 3) | (i[21] >>> 29),
                P = (i[21] << 3) | (i[20] >>> 29),
                E = (i[31] << 9) | (i[30] >>> 23),
                _ = (i[30] << 9) | (i[31] >>> 23),
                q = (i[40] << 18) | (i[41] >>> 14),
                O = (i[41] << 18) | (i[40] >>> 14),
                J = (i[2] << 1) | (i[3] >>> 31),
                j = (i[3] << 1) | (i[2] >>> 31),
                K = (i[13] << 12) | (i[12] >>> 20),
                R = (i[12] << 12) | (i[13] >>> 20),
                B = (i[22] << 10) | (i[23] >>> 22),
                C = (i[23] << 10) | (i[22] >>> 22),
                F = (i[33] << 13) | (i[32] >>> 19),
                D = (i[32] << 13) | (i[33] >>> 19),
                k = (i[42] << 2) | (i[43] >>> 30),
                H = (i[43] << 2) | (i[42] >>> 30),
                X = (i[5] << 30) | (i[4] >>> 2),
                U = (i[4] << 30) | (i[5] >>> 2),
                Z = (i[14] << 6) | (i[15] >>> 26),
                L = (i[15] << 6) | (i[14] >>> 26),
                Y = (i[25] << 11) | (i[24] >>> 21),
                T = (i[24] << 11) | (i[25] >>> 21),
                W = (i[34] << 15) | (i[35] >>> 17),
                V = (i[35] << 15) | (i[34] >>> 17),
                G = (i[45] << 29) | (i[44] >>> 3),
                Q = (i[44] << 29) | (i[45] >>> 3),
                $ = (i[6] << 28) | (i[7] >>> 4),
                ee = (i[7] << 28) | (i[6] >>> 4),
                te = (i[17] << 23) | (i[16] >>> 9),
                re = (i[16] << 23) | (i[17] >>> 9),
                ie = (i[26] << 25) | (i[27] >>> 7),
                ne = (i[27] << 25) | (i[26] >>> 7),
                se = (i[36] << 21) | (i[37] >>> 11),
                de = (i[37] << 21) | (i[36] >>> 11),
                oe = (i[47] << 24) | (i[46] >>> 8),
                fe = (i[46] << 24) | (i[47] >>> 8),
                ue = (i[8] << 27) | (i[9] >>> 5),
                he = (i[9] << 27) | (i[8] >>> 5),
                ce = (i[18] << 20) | (i[19] >>> 12),
                le = (i[19] << 20) | (i[18] >>> 12),
                ae = (i[29] << 7) | (i[28] >>> 25),
                pe = (i[28] << 7) | (i[29] >>> 25),
                be = (i[38] << 8) | (i[39] >>> 24),
                me = (i[39] << 8) | (i[38] >>> 24),
                ve = (i[48] << 14) | (i[49] >>> 18),
                Se = (i[49] << 14) | (i[48] >>> 18);
              ((i[0] = g ^ (~K & Y)),
                (i[1] = z ^ (~R & T)),
                (i[10] = $ ^ (~ce & N)),
                (i[11] = ee ^ (~le & P)),
                (i[20] = J ^ (~Z & ie)),
                (i[21] = j ^ (~L & ne)),
                (i[30] = ue ^ (~x & B)),
                (i[31] = he ^ (~A & C)),
                (i[40] = X ^ (~te & ae)),
                (i[41] = U ^ (~re & pe)),
                (i[2] = K ^ (~Y & se)),
                (i[3] = R ^ (~T & de)),
                (i[12] = ce ^ (~N & F)),
                (i[13] = le ^ (~P & D)),
                (i[22] = Z ^ (~ie & be)),
                (i[23] = L ^ (~ne & me)),
                (i[32] = x ^ (~B & W)),
                (i[33] = A ^ (~C & V)),
                (i[42] = te ^ (~ae & E)),
                (i[43] = re ^ (~pe & _)),
                (i[4] = Y ^ (~se & ve)),
                (i[5] = T ^ (~de & Se)),
                (i[14] = N ^ (~F & G)),
                (i[15] = P ^ (~D & Q)),
                (i[24] = ie ^ (~be & q)),
                (i[25] = ne ^ (~me & O)),
                (i[34] = B ^ (~W & oe)),
                (i[35] = C ^ (~V & fe)),
                (i[44] = ae ^ (~E & k)),
                (i[45] = pe ^ (~_ & H)),
                (i[6] = se ^ (~ve & g)),
                (i[7] = de ^ (~Se & z)),
                (i[16] = F ^ (~G & $)),
                (i[17] = D ^ (~Q & ee)),
                (i[26] = be ^ (~q & J)),
                (i[27] = me ^ (~O & j)),
                (i[36] = W ^ (~oe & ue)),
                (i[37] = V ^ (~fe & he)),
                (i[46] = E ^ (~k & X)),
                (i[47] = _ ^ (~H & U)),
                (i[8] = ve ^ (~g & K)),
                (i[9] = Se ^ (~z & R)),
                (i[18] = G ^ (~$ & ce)),
                (i[19] = Q ^ (~ee & le)),
                (i[28] = q ^ (~J & Z)),
                (i[29] = O ^ (~j & L)),
                (i[38] = oe ^ (~ue & x)),
                (i[39] = fe ^ (~he & A)),
                (i[48] = k ^ (~X & te)),
                (i[49] = H ^ (~U & re)),
                (i[0] ^= d[n + 0]),
                (i[1] ^= d[n + 1]));
            }
          }
          static hash() {
            return new Keccak();
          }
          static hmac(e, t, r) {
            (void 0 === e && (e = 256),
              void 0 === t && (t = 1),
              i(e >>> 0 === e));
            const s = (1600 - 2 * e) / 8;
            return new n(Keccak, s, [e], [t, r]);
          }
          static digest(e, t, r, i) {
            return (
              void 0 === t && (t = 256),
              void 0 === r && (r = 1),
              Keccak.ctx.init(t).update(e).final(r, i)
            );
          }
          static root(e, r, n, s, d) {
            return (
              void 0 === n && (n = 256),
              void 0 === s && (s = 1),
              null == d && (d = 0),
              0 === d && (i(n >>> 0 === n), (d = n >>> 3)),
              i(d >>> 0 === d),
              i(t.isBuffer(e) && e.length === d),
              i(t.isBuffer(r) && r.length === d),
              Keccak.ctx.init(n).update(e).update(r).final(s, d)
            );
          }
          static multi(e, t, r, i, n, s) {
            (void 0 === i && (i = 256), void 0 === n && (n = 1));
            const d = Keccak.ctx;
            return (
              d.init(i),
              d.update(e),
              d.update(t),
              r && d.update(r),
              d.final(n, s)
            );
          }
          static mac(e, t, r, i, n) {
            return (
              void 0 === r && (r = 256),
              void 0 === i && (i = 1),
              Keccak.hmac(r, i, n).init(t).update(e).final()
            );
          }
        }
        function o(e, t) {
          return e[t++] + 256 * e[t++] + 65536 * e[t++] + 16777216 * e[t];
        }
        ((Keccak.native = 0),
          (Keccak.id = "KECCAK256"),
          (Keccak.size = 32),
          (Keccak.bits = 256),
          (Keccak.blockSize = 136),
          (Keccak.zero = t.alloc(32, 0)),
          (Keccak.ctx = new Keccak()),
          (e.exports = Keccak));
      }).call(this, r(2).Buffer);
    },
  },
]);
