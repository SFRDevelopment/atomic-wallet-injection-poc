(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [173],
  {
    10995: function (t, e, r) {
      "use strict";
      t.exports = r(10996);
    },
    10997: function (t, e, r) {
      "use strict";
      t.exports = r(10998);
    },
    11001: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4575);
        class BLAKE2b160 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(20, t));
          }
          static hash() {
            return new BLAKE2b160();
          }
          static hmac() {
            return super.hmac(20);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 20, e));
          }
          static root(t, e) {
            return super.root(t, e, 20);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 20);
          }
          static mac(t, e) {
            return super.mac(t, e, 20);
          }
        }
        ((BLAKE2b160.native = i.native),
          (BLAKE2b160.id = "BLAKE2B160"),
          (BLAKE2b160.size = 20),
          (BLAKE2b160.bits = 160),
          (BLAKE2b160.blockSize = 128),
          (BLAKE2b160.zero = e.alloc(20, 0)),
          (BLAKE2b160.ctx = new BLAKE2b160()),
          (t.exports = BLAKE2b160));
      }).call(this, r(2).Buffer);
    },
    11002: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4575);
        class BLAKE2b256 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(32, t));
          }
          static hash() {
            return new BLAKE2b256();
          }
          static hmac() {
            return super.hmac(32);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 32, e));
          }
          static root(t, e) {
            return super.root(t, e, 32);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 32);
          }
          static mac(t, e) {
            return super.mac(t, e, 32);
          }
        }
        ((BLAKE2b256.native = i.native),
          (BLAKE2b256.id = "BLAKE2B256"),
          (BLAKE2b256.size = 32),
          (BLAKE2b256.bits = 256),
          (BLAKE2b256.blockSize = 128),
          (BLAKE2b256.zero = e.alloc(32, 0)),
          (BLAKE2b256.ctx = new BLAKE2b256()),
          (t.exports = BLAKE2b256));
      }).call(this, r(2).Buffer);
    },
    11003: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4575);
        class BLAKE2b384 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(48, t));
          }
          static hash() {
            return new BLAKE2b384();
          }
          static hmac() {
            return super.hmac(48);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 48, e));
          }
          static root(t, e) {
            return super.root(t, e, 48);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 48);
          }
          static mac(t, e) {
            return super.mac(t, e, 48);
          }
        }
        ((BLAKE2b384.native = i.native),
          (BLAKE2b384.id = "BLAKE2B384"),
          (BLAKE2b384.size = 48),
          (BLAKE2b384.bits = 384),
          (BLAKE2b384.blockSize = 128),
          (BLAKE2b384.zero = e.alloc(48, 0)),
          (BLAKE2b384.ctx = new BLAKE2b384()),
          (t.exports = BLAKE2b384));
      }).call(this, r(2).Buffer);
    },
    11004: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4575);
        class BLAKE2b512 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(64, t));
          }
          static hash() {
            return new BLAKE2b512();
          }
          static hmac() {
            return super.hmac(64);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 64, e));
          }
          static root(t, e) {
            return super.root(t, e, 64);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 64);
          }
          static mac(t, e) {
            return super.mac(t, e, 64);
          }
        }
        ((BLAKE2b512.native = i.native),
          (BLAKE2b512.id = "BLAKE2B512"),
          (BLAKE2b512.size = 64),
          (BLAKE2b512.bits = 512),
          (BLAKE2b512.blockSize = 128),
          (BLAKE2b512.zero = e.alloc(64, 0)),
          (BLAKE2b512.ctx = new BLAKE2b512()),
          (t.exports = BLAKE2b512));
      }).call(this, r(2).Buffer);
    },
    11006: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4576);
        class BLAKE2s128 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(16, t));
          }
          static hash() {
            return new BLAKE2s128();
          }
          static hmac() {
            return super.hmac(16);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 16, e));
          }
          static root(t, e) {
            return super.root(t, e, 16);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 16);
          }
          static mac(t, e) {
            return super.mac(t, e, 16);
          }
        }
        ((BLAKE2s128.native = i.native),
          (BLAKE2s128.id = "BLAKE2S128"),
          (BLAKE2s128.size = 16),
          (BLAKE2s128.bits = 128),
          (BLAKE2s128.blockSize = 64),
          (BLAKE2s128.zero = e.alloc(16, 0)),
          (BLAKE2s128.ctx = new BLAKE2s128()),
          (t.exports = BLAKE2s128));
      }).call(this, r(2).Buffer);
    },
    11007: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4576);
        class BLAKE2s160 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(20, t));
          }
          static hash() {
            return new BLAKE2s160();
          }
          static hmac() {
            return super.hmac(20);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 20, e));
          }
          static root(t, e) {
            return super.root(t, e, 20);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 20);
          }
          static mac(t, e) {
            return super.mac(t, e, 20);
          }
        }
        ((BLAKE2s160.native = i.native),
          (BLAKE2s160.id = "BLAKE2S160"),
          (BLAKE2s160.size = 20),
          (BLAKE2s160.bits = 160),
          (BLAKE2s160.blockSize = 64),
          (BLAKE2s160.zero = e.alloc(20, 0)),
          (BLAKE2s160.ctx = new BLAKE2s160()),
          (t.exports = BLAKE2s160));
      }).call(this, r(2).Buffer);
    },
    11008: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4576);
        class BLAKE2s224 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(28, t));
          }
          static hash() {
            return new BLAKE2s224();
          }
          static hmac() {
            return super.hmac(28);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 28, e));
          }
          static root(t, e) {
            return super.root(t, e, 28);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 28);
          }
          static mac(t, e) {
            return super.mac(t, e, 28);
          }
        }
        ((BLAKE2s224.native = i.native),
          (BLAKE2s224.id = "BLAKE2S224"),
          (BLAKE2s224.size = 28),
          (BLAKE2s224.bits = 224),
          (BLAKE2s224.blockSize = 64),
          (BLAKE2s224.zero = e.alloc(28, 0)),
          (BLAKE2s224.ctx = new BLAKE2s224()),
          (t.exports = BLAKE2s224));
      }).call(this, r(2).Buffer);
    },
    11009: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4576);
        class BLAKE2s256 extends i {
          constructor() {
            super();
          }
          init(t) {
            return (void 0 === t && (t = null), super.init(32, t));
          }
          static hash() {
            return new BLAKE2s256();
          }
          static hmac() {
            return super.hmac(32);
          }
          static digest(t, e) {
            return (void 0 === e && (e = null), super.digest(t, 32, e));
          }
          static root(t, e) {
            return super.root(t, e, 32);
          }
          static multi(t, e, r) {
            return super.multi(t, e, r, 32);
          }
          static mac(t, e) {
            return super.mac(t, e, 32);
          }
        }
        ((BLAKE2s256.native = i.native),
          (BLAKE2s256.id = "BLAKE2S256"),
          (BLAKE2s256.size = 32),
          (BLAKE2s256.bits = 256),
          (BLAKE2s256.blockSize = 64),
          (BLAKE2s256.zero = e.alloc(32, 0)),
          (BLAKE2s256.ctx = new BLAKE2s256()),
          (t.exports = BLAKE2s256));
      }).call(this, r(2).Buffer);
    },
    11010: function (t, e, r) {
      "use strict";
      t.exports = r(5658);
    },
    11011: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(229),
          n = r(4577),
          s = r(3201),
          o = r(6821);
        function a(e, r, i) {
          (void 0 === i && (i = null),
            null == i && (i = o.privateKeyGenerate()));
          const a = o.publicKeyCreate(i),
            u = o.derive(r, i),
            h = n.derive(u),
            c = s.randomBytes(24),
            l = n.seal(e, h, c);
          return t.concat([a, c, l]);
        }
        function u(e, r) {
          if ((i(t.isBuffer(e)), e.length < 56))
            throw new Error("Invalid secret box size.");
          const s = e.slice(0, 32),
            a = e.slice(32, 56),
            u = e.slice(56),
            h = o.derive(s, r),
            c = n.derive(h);
          return n.open(u, c, a);
        }
        ((e.native = 0), (e.seal = a), (e.open = u));
      }).call(this, r(2).Buffer);
    },
    11029: function (t, e, r) {
      "use strict";
      t.exports = r(11030);
    },
    11031: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4851);
        class CSHAKE128 extends i {
          constructor() {
            super();
          }
          init(t, e) {
            return super.init(128, t, e);
          }
          static hash() {
            return new CSHAKE128();
          }
          static hmac(t, e, r) {
            return super.hmac(128, t, e, r);
          }
          static digest(t, e, r, i) {
            return super.digest(t, 128, e, r, i);
          }
          static root(t, e, r, i, n) {
            return super.root(t, e, 128, r, i, n);
          }
          static multi(t, e, r, i, n, s) {
            return super.multi(t, e, r, 128, i, n, s);
          }
          static mac(t, e, r, i, n) {
            return super.mac(t, e, 128, r, i, n);
          }
        }
        ((CSHAKE128.native = i.native),
          (CSHAKE128.id = "CSHAKE128"),
          (CSHAKE128.size = 16),
          (CSHAKE128.bits = 128),
          (CSHAKE128.blockSize = 168),
          (CSHAKE128.zero = e.alloc(16, 0)),
          (CSHAKE128.ctx = new CSHAKE128()),
          (t.exports = CSHAKE128));
      }).call(this, r(2).Buffer);
    },
    11032: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(4851);
        class CSHAKE256 extends i {
          constructor() {
            super();
          }
          init(t, e) {
            return super.init(256, t, e);
          }
          static hash() {
            return new CSHAKE256();
          }
          static hmac(t, e, r) {
            return super.hmac(256, t, e, r);
          }
          static digest(t, e, r, i) {
            return super.digest(t, 256, e, r, i);
          }
          static root(t, e, r, i, n) {
            return super.root(t, e, 256, r, i, n);
          }
          static multi(t, e, r, i, n, s) {
            return super.multi(t, e, r, 256, i, n, s);
          }
          static mac(t, e, r, i, n) {
            return super.mac(t, e, 256, r, i, n);
          }
        }
        ((CSHAKE256.native = i.native),
          (CSHAKE256.id = "CSHAKE256"),
          (CSHAKE256.size = 32),
          (CSHAKE256.bits = 256),
          (CSHAKE256.blockSize = 136),
          (CSHAKE256.zero = e.alloc(32, 0)),
          (CSHAKE256.ctx = new CSHAKE256()),
          (t.exports = CSHAKE256));
      }).call(this, r(2).Buffer);
    },
    11033: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = r(4579),
          { Cipher: s } = n,
          o = 65536,
          a = 281474976710656;
        class CtrDRBG {
          constructor(t, r, n, s, o) {
            (void 0 === o && (o = !0), i(null == o || "boolean" === typeof o));
            const [a, h, c] = u(t);
            ((this.id = a),
              (this.ctr = new CTR(a)),
              (this.keySize = h),
              (this.blkSize = c),
              (this.entSize = h + c),
              (this.slab = e.alloc(this.entSize)),
              (this.K = this.slab.slice(0, this.keySize)),
              (this.V = this.slab.slice(this.keySize)),
              (this.derivation = Boolean(o)),
              (this.rounds = 0),
              r && this.init(r, n, s));
          }
          init(t, r, n) {
            let s;
            if (
              (void 0 === r && (r = null),
              void 0 === n && (n = null),
              null == r && (r = e.alloc(0)),
              null == n && (n = e.alloc(0)),
              i(e.isBuffer(t)),
              i(e.isBuffer(r)),
              i(e.isBuffer(n)),
              this.derivation)
            )
              s = this.derive(t, r, n);
            else {
              if (t.length + r.length > this.entSize)
                throw new Error("Entropy is too long.");
              if (n.length > this.entSize)
                throw new Error("Personalization string is too long.");
              ((s = e.alloc(this.entSize, 0)),
                t.copy(s, 0),
                r.copy(s, t.length));
              for (let t = 0; t < n.length; t++) s[t] ^= n[t];
            }
            return (
              this.slab.fill(0),
              this.ctr.init(this.K, this.V),
              this.update(s),
              (this.rounds = 1),
              this
            );
          }
          reseed(t, r) {
            if (
              (void 0 === r && (r = null),
              null == r && (r = e.alloc(0)),
              i(e.isBuffer(t)),
              i(e.isBuffer(r)),
              0 === this.rounds)
            )
              throw new Error("DRBG not initialized.");
            let n;
            if (this.derivation) n = this.derive(t, r);
            else {
              if (r.length > this.entSize)
                throw new Error("Additional data is too long.");
              ((n = e.alloc(this.entSize, 0)), t.copy(n, 0));
              for (let t = 0; t < r.length; t++) n[t] ^= r[t];
            }
            return (this.update(n), (this.rounds = 1), this);
          }
          generate(t, r) {
            if (
              (void 0 === r && (r = null),
              i(t >>> 0 === t),
              i(!r || e.isBuffer(r)),
              0 === this.rounds)
            )
              throw new Error("DRBG not initialized.");
            if (this.rounds > a) throw new Error("Reseed is required.");
            if (t > o) throw new Error("Requested length is too long.");
            r &&
              0 !== r.length &&
              (this.derivation && (r = this.derive(r)), this.update(r));
            const n = Math.ceil(t / this.blkSize),
              s = e.allocUnsafe(n * this.blkSize);
            for (let e = 0; e < n; e++) this.ctr.encrypt(s, e * this.blkSize);
            return (this.update(r), (this.rounds += 1), s.slice(0, t));
          }
          randomBytes(t) {
            return this.generate(t);
          }
          update(t) {
            if (
              (void 0 === t && (t = null),
              null == t && (t = e.alloc(0)),
              i(e.isBuffer(t)),
              t.length > this.entSize)
            )
              throw new Error("Seed is too long.");
            this.slab.fill(0);
            for (let e = 0; e < this.entSize; e += this.blkSize)
              this.ctr.encrypt(this.slab, e);
            for (let e = 0; e < t.length; e++) this.slab[e] ^= t[e];
            return (this.ctr.init(this.K, this.V), this);
          }
          serialize() {
            const t = this.entSize;
            let r = 0;
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            for (const e of s) r += e.length;
            let a = this.blkSize + 4 + 4 + r + 1;
            (a % this.blkSize && (a += this.blkSize - (a % this.blkSize)),
              i(a % this.blkSize === 0));
            const u = e.alloc(a, 0);
            let h = this.blkSize;
            ((u[h++] = r >>> 24),
              (u[h++] = r >>> 16),
              (u[h++] = r >>> 8),
              (u[h++] = r),
              (u[h++] = t >>> 24),
              (u[h++] = t >>> 16),
              (u[h++] = t >>> 8),
              (u[h++] = t));
            for (const e of s) h += e.copy(u, h);
            return ((u[h++] = 128), i(h === this.blkSize + 4 + 4 + r + 1), u);
          }
          derive() {
            const t = this.serialize(...arguments),
              r = t.length / this.blkSize,
              i = e.alloc(this.keySize),
              n = Math.ceil(this.entSize / this.blkSize),
              o = e.alloc(n * this.blkSize);
            for (let e = 0; e < i.length; e++) i[e] = e;
            const a = new s(this.id).init(i);
            for (let s = 0; s < n; s++) {
              let i = e.alloc(this.blkSize, 0);
              ((t[0] = s >>> 24),
                (t[1] = s >>> 16),
                (t[2] = s >>> 8),
                (t[3] = s));
              for (let e = 0; e < r; e++) {
                for (let r = 0; r < i.length; r++)
                  i[r] ^= t[e * this.blkSize + r];
                i = a.update(i);
              }
              i.copy(o, s * this.blkSize);
            }
            const u = o.slice(0, this.keySize);
            a.init(u);
            let h = o.slice(this.keySize, this.entSize);
            for (let e = 0; e < n; e++)
              ((h = a.update(h)), h.copy(o, e * this.blkSize));
            return o.slice(0, this.entSize);
          }
        }
        CtrDRBG.native = 0;
        class CTR {
          constructor(t) {
            ((this.ctx = new s(t)), (this.ctr = null));
          }
          init(t, r) {
            return (this.ctx.init(t), (this.ctr = e.from(r)), this);
          }
          increment() {
            for (let t = this.ctr.length - 1; t >= 0; t--)
              if (((this.ctr[t] += 1), 0 !== this.ctr[t])) break;
          }
          encrypt(t, e) {
            return (
              this.increment(),
              this.ctx.update(this.ctr).copy(t, e),
              this
            );
          }
        }
        function u(t) {
          switch ((i("string" === typeof t), t)) {
            case "AES-128":
              return ["AES-128-ECB", 16, 16];
            case "AES-192":
              return ["AES-192-ECB", 24, 16];
            case "AES-256":
              return ["AES-256-ECB", 32, 16];
            default:
              throw new Error(`Unsupported cipher: ${t}.`);
          }
        }
        t.exports = CtrDRBG;
      }).call(this, r(2).Buffer);
    },
    11034: function (t, e, r) {
      "use strict";
      t.exports = r(11035);
    },
    11039: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = r(6832),
          s = r(3201),
          o = r(4577),
          { padLeft: a } = r(3230),
          u = {
            encrypt(t, r, u, h) {
              (void 0 === h && (h = null),
                i(null != t),
                i(e.isBuffer(r)),
                i(u instanceof n.DSAKey),
                i(null == h || h instanceof n.DSAPrivateKey),
                null == h && (h = n.privateKeyCreate(u)));
              const c = (u.bits() + 7) >>> 3,
                l = n.publicKeyCreate(h),
                f = n.derive(u, h),
                d = o.derive(f, t),
                g = s.randomBytes(24),
                p = a(l.y, c),
                E = o.seal(r, d, g);
              return e.concat([p, g, E]);
            },
            decrypt(t, r, s) {
              (i(null != t), i(e.isBuffer(r)), i(s instanceof n.DSAPrivateKey));
              const a = (s.bits() + 7) >>> 3;
              if (r.length < a + 24) throw new Error("Invalid ciphertext.");
              const u = r.slice(0, a),
                h = new n.DSAPublicKey(s.p, s.q, s.g, u),
                c = r.slice(a, a + 24),
                l = r.slice(a + 24),
                f = n.derive(h, s),
                d = o.derive(f, t);
              return o.open(l, d, c);
            },
          };
        t.exports = u;
      }).call(this, r(2).Buffer);
    },
    11041: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = r(4577),
          s = r(3201),
          o = {
            encrypt(t, r, o, a, u) {
              (void 0 === u && (u = null),
                i(t && "string" === typeof t.id),
                null == u && (u = t.privateKeyGenerate()));
              const h = t.publicKeyCreate(u),
                c = t.derive(a, u),
                l = n.derive(c, r),
                f = s.randomBytes(24),
                d = n.seal(o, l, f);
              return e.concat([h, f, d]);
            },
            decrypt(t, r, s, o) {
              (i(t && "string" === typeof t.id), i(e.isBuffer(s)));
              const a = "short" === t.type ? 1 + t.size : t.size;
              if (s.length < a + 24) throw new Error("Invalid ciphertext.");
              const u = s.slice(0, a),
                h = s.slice(a, a + 24),
                c = s.slice(a + 24),
                l = t.derive(u, o),
                f = n.derive(l, r);
              return n.open(c, f, h);
            },
          };
        t.exports = o;
      }).call(this, r(2).Buffer);
    },
    11043: function (t, e, r) {
      "use strict";
      ((e.asn1 = r(3202)),
        (e.base16 = r(11044)),
        (e.base32 = r(11045)),
        (e.base58 = r(11046)),
        (e.base64 = r(3614)),
        (e.bech32 = r(11048)),
        (e.cash32 = r(11050)),
        (e.lines = r(6829)),
        (e.openssl = r(5665)),
        (e.pem = r(3356)),
        (e.pemcrypt = r(6838)),
        (e.pkcs1 = r(5667)),
        (e.pkcs3 = r(6831)),
        (e.pkcs5 = r(11052)),
        (e.pkcs8 = r(3963)),
        (e.rfc3279 = r(6834)),
        (e.sec1 = r(5668)),
        (e.util = r(3230)),
        (e.x509 = r(3842)));
    },
    11044: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = !0 === t.alloc(0)._isBuffer;
        function s(e, r) {
          (i(t.isBuffer(e)), i(null == r || r >>> 0 === r));
          let n = e.toString("hex");
          if (null != r) {
            if (((r *= 2), n.length > r))
              throw new RangeError("Data length exceeds requested size.");
            while (n.length < r) n = "00" + n;
          }
          return n;
        }
        function o(t, e) {
          const r = s(t, e);
          let i = "";
          for (let n = r.length - 2; n >= 0; n -= 2) i += r[n] + r[n + 1];
          return i;
        }
        function a(e, r) {
          if (
            (i("string" === typeof e),
            i(null == r || r >>> 0 === r),
            1 & e.length)
          )
            throw new Error("Invalid hex string.");
          if (null != r && e.length !== 2 * r)
            throw new RangeError("String length differs from expected size.");
          const s = t.from(e, "hex");
          if (e.length !== 2 * s.length) throw new Error("Invalid hex string.");
          if (
            n &&
            s.length > 0 &&
            s[s.length - 1] >>> 4 === 0 &&
            !/[0-9a-f]$/i.test(e)
          )
            throw new Error("Invalid hex string.");
          return s;
        }
        function u(t, e) {
          const r = a(t, e);
          for (let i = r.length - 1, n = 0; i > n; i--, n++)
            [r[i], r[n]] = [r[n], r[i]];
          return r;
        }
        function h(t, e) {
          return (
            i("string" === typeof t),
            i(null == e || e >>> 0 === e),
            !(1 & t.length) &&
              (null == e || t.length === 2 * e) &&
              /^[0-9a-f]*$/i.test(t)
          );
        }
        ((e.encode = s),
          (e.encodeLE = o),
          (e.decode = a),
          (e.decodeLE = u),
          (e.test = h));
      }).call(this, r(2).Buffer);
    },
    11045: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = "abcdefghijklmnopqrstuvwxyz234567",
          s = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26,
            27, 28, 29, 30, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3,
            4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8,
            9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            -1, -1, -1, -1, -1,
          ],
          o = "0123456789abcdefghijklmnopqrstuv",
          a = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3,
            4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, -1, -1,
            -1, -1, -1, -1, -1, -1, -1,
          ],
          u = [0, 6, 4, 3, 1];
        function h(t, e) {
          return (void 0 === e && (e = !1), l(t, n, e));
        }
        function c(t, e) {
          return (void 0 === e && (e = !1), l(t, o, e));
        }
        function l(e, r, n) {
          (i(t.isBuffer(e)), i("boolean" === typeof n));
          let s = "",
            o = 0,
            a = 0;
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            switch (o) {
              case 0:
                ((s += r[i >>> 3]), (a = (7 & i) << 2), (o = 1));
                break;
              case 1:
                ((s += r[a | (i >>> 6)]),
                  (s += r[(i >>> 1) & 31]),
                  (a = (1 & i) << 4),
                  (o = 2));
                break;
              case 2:
                ((s += r[a | (i >>> 4)]), (a = (15 & i) << 1), (o = 3));
                break;
              case 3:
                ((s += r[a | (i >>> 7)]),
                  (s += r[(i >>> 2) & 31]),
                  (a = (3 & i) << 3),
                  (o = 4));
                break;
              case 4:
                ((s += r[a | (i >>> 5)]), (s += r[31 & i]), (o = 0));
                break;
            }
          }
          if (o > 0 && ((s += r[a]), n))
            for (let t = 0; t < u[o]; t++) s += "=";
          return s;
        }
        function f(t, e) {
          return (void 0 === e && (e = !1), g(t, s, e));
        }
        function d(t, e) {
          return (void 0 === e && (e = !1), g(t, a, e));
        }
        function g(e, r, n) {
          (i("string" === typeof e), i("boolean" === typeof n));
          const s = t.allocUnsafe(((5 * e.length + 7) / 8) | 0);
          let o = 0,
            a = 0,
            u = 0,
            h = 0;
          for (; h < e.length; h++) {
            const t = e.charCodeAt(h),
              i = 65408 & t ? -1 : r[t];
            if (-1 === i) break;
            switch (o) {
              case 0:
                ((a = i), (o = 1));
                break;
              case 1:
                ((s[u++] = (a << 3) | (i >>> 2)), (a = 3 & i), (o = 2));
                break;
              case 2:
                ((a = (a << 5) | i), (o = 3));
                break;
              case 3:
                ((s[u++] = (a << 1) | (i >>> 4)), (a = 15 & i), (o = 4));
                break;
              case 4:
                ((s[u++] = (a << 4) | (i >>> 1)), (a = 1 & i), (o = 5));
                break;
              case 5:
                ((a = (a << 5) | i), (o = 6));
                break;
              case 6:
                ((s[u++] = (a << 2) | (i >>> 3)), (a = 7 & i), (o = 7));
                break;
              case 7:
                ((s[u++] = (a << 5) | i), (a = 0), (o = 0));
                break;
            }
          }
          if (1 === o || 3 === o || 6 === o)
            throw new Error("Invalid base32 string.");
          if (a > 0) throw new Error("Invalid base32 string.");
          if (e.length !== h + (7 & -o) * n)
            throw new Error("Invalid base32 string.");
          for (; h < e.length; h++) {
            const t = e.charCodeAt(h);
            if (61 !== t) throw new Error("Invalid base32 string.");
          }
          return s.slice(0, u);
        }
        function p(t, e) {
          (void 0 === e && (e = !1),
            i("string" === typeof t),
            i("boolean" === typeof e));
          try {
            return (f(t, e), !0);
          } catch (r) {
            return !1;
          }
        }
        function E(t, e) {
          (void 0 === e && (e = !1),
            i("string" === typeof t),
            i("boolean" === typeof e));
          try {
            return (d(t, e), !0);
          } catch (r) {
            return !1;
          }
        }
        ((e.encode = h),
          (e.encodeHex = c),
          (e.decode = f),
          (e.decodeHex = d),
          (e.test = p),
          (e.testHex = E));
      }).call(this, r(2).Buffer);
    },
    11046: function (t, e, r) {
      "use strict";
      t.exports = r(11047);
    },
    11048: function (t, e, r) {
      "use strict";
      t.exports = r(11049);
    },
    11050: function (t, e, r) {
      "use strict";
      t.exports = r(11051);
    },
    11052: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = {
            pad(t, r) {
              (i(e.isBuffer(t)), i(r >>> 0 === r), i(r > 0 && r < 256));
              const n = r - (t.length % r),
                s = e.allocUnsafe(t.length + n);
              t.copy(s, 0);
              for (let e = t.length; e < s.length; e++) s[e] = n;
              return s;
            },
            unpad(t, r) {
              if (
                (i(e.isBuffer(t)),
                i(r >>> 0 === r),
                i(r > 0 && r < 256),
                t.length < r || t.length % r !== 0)
              )
                throw new Error("Invalid padding.");
              const n = t[t.length - 1];
              if (0 === n || n > r) throw new Error("Invalid padding.");
              for (let e = t.length - n; e < t.length; e++)
                if (t[e] !== n) throw new Error("Invalid padding.");
              return t.slice(0, -n);
            },
          };
        t.exports = n;
      }).call(this, r(2).Buffer);
    },
    11053: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = r(3012),
          s = -1,
          o = e.alloc(32, 0),
          a = e.alloc(32, 0),
          u = e.from([
            0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0,
            255, 255, 0, 255, 0, 0, 255, 255, 0, 0, 0, 255, 255, 0, 255,
          ]),
          h = [
            e.from([10, 4, 5, 6, 8, 1, 3, 7, 13, 12, 14, 0, 9, 2, 11, 15]),
            e.from([5, 15, 4, 0, 2, 13, 11, 9, 1, 7, 6, 3, 12, 14, 10, 8]),
            e.from([7, 15, 12, 14, 9, 4, 1, 0, 3, 11, 5, 2, 6, 10, 8, 13]),
            e.from([4, 10, 7, 12, 0, 15, 2, 8, 14, 1, 6, 5, 13, 11, 9, 3]),
            e.from([7, 6, 4, 11, 9, 12, 2, 10, 1, 8, 0, 14, 15, 13, 3, 5]),
            e.from([7, 6, 2, 4, 13, 9, 15, 0, 10, 1, 5, 11, 8, 14, 12, 3]),
            e.from([13, 14, 4, 1, 7, 0, 5, 10, 3, 12, 8, 15, 6, 2, 9, 11]),
            e.from([1, 3, 10, 9, 5, 11, 4, 15, 8, 6, 7, 14, 13, 0, 2, 12]),
          ],
          c = [
            e.from([4, 10, 9, 2, 13, 8, 0, 14, 6, 11, 1, 12, 7, 15, 5, 3]),
            e.from([14, 11, 4, 12, 6, 13, 15, 10, 2, 3, 8, 1, 0, 7, 5, 9]),
            e.from([5, 8, 1, 13, 10, 3, 4, 2, 14, 15, 12, 7, 6, 0, 9, 11]),
            e.from([7, 13, 10, 1, 0, 8, 9, 15, 14, 4, 6, 12, 11, 2, 5, 3]),
            e.from([6, 12, 7, 1, 5, 15, 13, 8, 4, 10, 9, 14, 0, 3, 11, 2]),
            e.from([4, 11, 10, 0, 7, 2, 1, 13, 3, 6, 8, 5, 9, 12, 15, 14]),
            e.from([13, 11, 4, 1, 3, 15, 5, 9, 0, 10, 14, 7, 6, 8, 2, 12]),
            e.from([1, 15, 13, 0, 5, 7, 10, 4, 9, 2, 3, 14, 6, 11, 8, 12]),
          ],
          l = [
            e.from([12, 4, 6, 2, 10, 5, 11, 9, 14, 8, 13, 7, 0, 3, 15, 1]),
            e.from([6, 8, 2, 3, 9, 10, 5, 12, 1, 14, 4, 7, 11, 13, 0, 15]),
            e.from([11, 3, 5, 8, 2, 15, 10, 13, 14, 1, 7, 4, 12, 9, 6, 0]),
            e.from([12, 8, 2, 1, 13, 4, 15, 6, 7, 0, 10, 5, 3, 14, 9, 11]),
            e.from([7, 15, 5, 10, 8, 1, 6, 13, 0, 9, 3, 14, 11, 4, 2, 12]),
            e.from([5, 13, 15, 6, 9, 2, 12, 10, 11, 7, 8, 1, 4, 3, 14, 0]),
            e.from([8, 14, 2, 5, 6, 9, 1, 12, 15, 4, 11, 0, 13, 10, 3, 7]),
            e.from([1, 7, 14, 13, 0, 5, 8, 3, 4, 15, 10, 6, 9, 12, 11, 2]),
          ];
        class GOST94 {
          constructor() {
            ((this.S = h),
              (this.state = e.allocUnsafe(32)),
              (this.sigma = e.allocUnsafe(32)),
              (this.block = e.allocUnsafe(32)),
              (this.size = s));
          }
          init(t) {
            return (
              null == t && (t = h),
              i(Array.isArray(t) && 8 === t.length),
              (this.S = t),
              this.state.fill(0),
              this.sigma.fill(0),
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
            i(this.size !== s, "Context already finalized.");
            let r = 31 & this.size,
              n = 0;
            if (((this.size += e), r > 0)) {
              let i = 32 - r;
              if (
                (i > e && (i = e),
                t.copy(this.block, r, n, n + i),
                (r += i),
                (e -= i),
                (n += i),
                r < 32)
              )
                return;
              this.transform(this.block, 0);
            }
            while (e >= 32) (this.transform(t, n), (n += 32), (e -= 32));
            e > 0 && t.copy(this.block, 0, n, n + e);
          }
          _final(t) {
            i(this.size !== s, "Context already finalized.");
            const e = 8 * this.size,
              r = 31 & this.size;
            0 !== r && this._update(o, 32 - r);
            const n = (e * (1 / 4294967296)) >>> 0,
              u = e >>> 0;
            return (
              v(a, u, 0),
              v(a, n, 4),
              this.F(a),
              this.F(this.sigma),
              this.state.copy(t, 0),
              this.state.fill(0),
              this.sigma.fill(0),
              this.block.fill(0),
              a.fill(0, 0, 8),
              (this.size = s),
              t
            );
          }
          transform(t, e) {
            const r = t.slice(e, e + 32);
            (this.F(r), this.sum(r));
          }
          shuffle(t, r) {
            const i = e.allocUnsafe(32);
            r.copy(i, 0);
            for (let e = 0; e < 12; e++) S(i);
            (E(i, t), S(i), E(this.state, i));
            for (let e = 0; e < 61; e++) S(this.state);
          }
          F(t) {
            const r = e.allocUnsafe(32);
            let i, n, s;
            (this.state.copy(r, 0),
              (i = w(p(this.state, t))),
              g(r, 0, i, this.S),
              (n = y(this.state)),
              (s = y(y(t))),
              (i = w(p(n, s))),
              g(r, 8, i, this.S),
              (n = y(n)),
              E(n, u),
              (s = y(y(s))),
              (i = w(p(n, s))),
              g(r, 16, i, this.S),
              (n = y(n)),
              (s = y(y(s))),
              (i = w(p(n, s))),
              g(r, 24, i, this.S),
              this.shuffle(t, r));
          }
          sum(t) {
            let e = 0;
            for (let r = 0; r < 32; r++)
              ((e += this.sigma[r] + t[r]), (this.sigma[r] = e), (e >>>= 8));
          }
          static hash() {
            return new GOST94();
          }
          static hmac(t) {
            return new n(GOST94, 32, [t]);
          }
          static digest(t, e) {
            return GOST94.ctx.init(e).update(t).final();
          }
          static root(t, r, n) {
            return (
              i(e.isBuffer(t) && 32 === t.length),
              i(e.isBuffer(r) && 32 === r.length),
              GOST94.ctx.init(n).update(t).update(r).final()
            );
          }
          static multi(t, e, r, i) {
            const n = GOST94.ctx;
            return (
              n.init(i),
              n.update(t),
              n.update(e),
              r && n.update(r),
              n.final()
            );
          }
          static mac(t, e, r) {
            return GOST94.hmac(r).init(e).update(t).final();
          }
        }
        function f(t, e) {
          let r = 0;
          for (let i = 0; i < 8; i++) {
            const n = 4 * i,
              s = (t & (15 << n)) >>> n;
            r += e[i][s] << n;
          }
          return r >>> 0;
        }
        function d(t, e, r) {
          return m(f((t + e) >>> 0, r), 11);
        }
        function g(t, e, r, i) {
          const n = new Uint32Array(8);
          let s = B(t, e + 0),
            o = B(t, e + 4);
          for (let a = 0; a < 8; a++) n[a] = B(r, 4 * a);
          for (let a = 0; a < 3; a++)
            for (let t = 0; t < 8; t++) {
              const e = o ^ d(s, n[t], i);
              ((o = s), (s = e));
            }
          for (let a = 7; a >= 0; a--) {
            const t = o ^ d(s, n[a], i);
            ((o = s), (s = t));
          }
          (v(t, o, e + 0), v(t, s, e + 4));
        }
        function p(t, r) {
          const i = e.allocUnsafe(32);
          for (let e = 0; e < 32; e++) i[e] = t[e] ^ r[e];
          return i;
        }
        function E(t, e) {
          for (let r = 0; r < 32; r++) t[r] ^= e[r];
        }
        function y(t) {
          const r = e.allocUnsafe(32);
          t.copy(r, 0, 8, 32);
          for (let e = 0; e < 8; e++) r[24 + e] = t[e] ^ t[e + 8];
          return r;
        }
        function w(t) {
          const r = e.allocUnsafe(32);
          for (let e = 0; e < 4; e++)
            for (let i = 0; i < 8; i++) r[e + 4 * i] = t[8 * e + i];
          return r;
        }
        function S(t) {
          const r = e.allocUnsafe(32);
          (t.copy(r, 0, 2, 32),
            t.copy(r, 30, 0, 2),
            (r[30] ^= t[2]),
            (r[31] ^= t[3]),
            (r[30] ^= t[4]),
            (r[31] ^= t[5]),
            (r[30] ^= t[6]),
            (r[31] ^= t[7]),
            (r[30] ^= t[24]),
            (r[31] ^= t[25]),
            (r[30] ^= t[30]),
            (r[31] ^= t[31]),
            r.copy(t, 0));
        }
        function m(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function B(t, e) {
          return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e];
        }
        function v(t, e, r) {
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
        ((GOST94.native = 0),
          (GOST94.id = "GOST94"),
          (GOST94.size = 32),
          (GOST94.bits = 256),
          (GOST94.blockSize = 32),
          (GOST94.zero = e.alloc(32, 0)),
          (GOST94.ctx = new GOST94()),
          (GOST94.CRYPTOPRO = h),
          (GOST94.TEST = c),
          (GOST94.S2015 = l),
          (t.exports = GOST94));
      }).call(this, r(2).Buffer);
    },
    11054: function (t, e, r) {
      "use strict";
      t.exports = r(11055);
    },
    11056: function (t, e, r) {
      "use strict";
      t.exports = r(11057);
    },
    11058: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = 281474976710656,
          s = e.from([1]),
          o = e.from([2]),
          a = e.from([3]);
        class HashDRBG {
          constructor(t, r, n, s) {
            (i(t && "string" === typeof t.id),
              (this.hash = t),
              (this.minEntropy = "SHA1" === t.id ? 10 : 24),
              (this.seedLen = t.size <= 32 ? 55 : 111),
              (this.V = e.allocUnsafe(this.seedLen)),
              (this.C = e.allocUnsafe(this.seedLen)),
              (this.len = e.allocUnsafe(8)),
              (this.rounds = 0),
              r && this.init(r, n, s));
          }
          init(t, r, n) {
            (void 0 === r && (r = null),
              void 0 === n && (n = null),
              i(e.isBuffer(t)),
              i(!r || e.isBuffer(r)),
              i(!n || e.isBuffer(n)));
            const s = u(t, r, n);
            if (s.length < this.minEntropy)
              throw new Error("Not enough entropy.");
            return (
              (this.V = this.derive(s, this.seedLen, null)),
              (this.C = this.derive(this.V, this.seedLen, 0)),
              (this.rounds = 1),
              this
            );
          }
          reseed(t, r) {
            if (
              (void 0 === r && (r = null),
              i(e.isBuffer(t)),
              i(!r || e.isBuffer(r)),
              0 === this.rounds)
            )
              throw new Error("DRBG not initialized.");
            const n = u(this.V, t, r);
            if (n.length < this.minEntropy)
              throw new Error("Not enough entropy.");
            return (
              (this.V = this.derive(n, this.seedLen, 1)),
              (this.C = this.derive(this.V, this.seedLen, 0)),
              (this.rounds = 1),
              this
            );
          }
          generate(t, r) {
            if (
              (void 0 === r && (r = null),
              i(t >>> 0 === t),
              i(!r || e.isBuffer(r)),
              0 === this.rounds)
            )
              throw new Error("DRBG not initialized.");
            if (this.rounds > n) throw new Error("Reseed is required.");
            r &&
              0 !== r.length &&
              this.sum(this.V, this.hash.multi(o, this.V, r));
            const a = e.from(this.V),
              u = Math.ceil(t / this.hash.size),
              h = e.allocUnsafe(u * this.hash.size);
            for (let e = 0; e < u; e++)
              (this.hash.digest(a).copy(h, e * this.hash.size), this.sum(a, s));
            return (this.update(), (this.rounds += 1), h.slice(0, t));
          }
          randomBytes(t) {
            return this.generate(t);
          }
          update() {
            const t = this.hash.multi(a, this.V),
              e = (this.rounds / 4294967296) >>> 0,
              r = this.rounds >>> 0;
            return (
              (this.len[0] = e >>> 24),
              (this.len[1] = e >>> 16),
              (this.len[2] = e >>> 8),
              (this.len[3] = e),
              (this.len[4] = r >>> 24),
              (this.len[5] = r >>> 16),
              (this.len[6] = r >>> 8),
              (this.len[7] = r),
              this.sum(this.V, t, this.C, this.len),
              this
            );
          }
          derive(t, r, n) {
            (void 0 === n && (n = null), i(e.isBuffer(t)), i(r >>> 0 === r));
            const s = null != n ? 1 : 0,
              o = e.allocUnsafe(5 + s + t.length);
            ((o[0] = 1),
              (o[1] = r >>> 21),
              (o[2] = r >>> 13),
              (o[3] = r >>> 5),
              (o[4] = (31 & r) << 3),
              s && (o[5] = n),
              t.copy(o, 5 + s));
            const a = Math.ceil(r / this.hash.size),
              u = e.allocUnsafe(a * this.hash.size);
            for (let e = 0; e < a; e++)
              (this.hash.digest(o).copy(u, e * this.hash.size), (o[0] += 1));
            return u.slice(0, r);
          }
          sum(t) {
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
              i < e;
              i++
            )
              r[i - 1] = arguments[i];
            for (const n of r) {
              let e = n.length - 1,
                r = t.length - 1,
                i = 0;
              while (e >= 0)
                ((i += n[e] + t[r]),
                  (t[r] = 255 & i),
                  (i >>>= 8),
                  (e -= 1),
                  (r -= 1));
              while (i > 0 && r >= 0)
                ((i += t[r]), (t[r] = 255 & i), (i >>>= 8), (r -= 1));
            }
            return t;
          }
        }
        function u(t, r, i) {
          if (
            (void 0 === r && (r = null), void 0 === i && (i = null), !r && !i)
          )
            return t;
          let n = t.length,
            s = 0;
          (r && (n += r.length), i && (n += i.length));
          const o = e.allocUnsafe(n);
          return (
            (s += t.copy(o, s)),
            r && (s += r.copy(o, s)),
            i && i.copy(o, s),
            o
          );
        }
        ((HashDRBG.native = 0), (t.exports = HashDRBG));
      }).call(this, r(2).Buffer);
    },
    3202: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(5661),
          s = r(11019),
          o = t.alloc(0),
          a = t.alloc(1, 0),
          u = new Uint32Array(2),
          h = -62167219200,
          c = 253402300799,
          l = -43200,
          f = 50400,
          d = {
            BOOLEAN: 1,
            INTEGER: 2,
            BITSTRING: 3,
            OCTSTRING: 4,
            NULL: 5,
            OID: 6,
            ENUM: 10,
            UTF8STRING: 12,
            SEQUENCE: 16,
            SET: 17,
            NUMSTRING: 18,
            PRINTSTRING: 19,
            T61STRING: 20,
            IA5STRING: 22,
            UTCTIME: 23,
            GENTIME: 24,
            GENSTRING: 27,
          },
          g = {
            1: "BOOLEAN",
            2: "INTEGER",
            3: "BITSTRING",
            4: "OCTSTRING",
            5: "NULL",
            6: "OID",
            10: "ENUM",
            12: "UTF8STRING",
            16: "SEQUENCE",
            17: "SET",
            18: "NUMSTRING",
            19: "PRINTSTRING",
            20: "T61STRING",
            22: "IA5STRING",
            23: "UTCTIME",
            24: "GENTIME",
            27: "GENSTRING",
          },
          p = { UNIVERSAL: 0, APPLICATION: 1, CONTEXT: 2, PRIVATE: 3 },
          E = { 0: "UNIVERSAL", 1: "APPLICATION", 2: "CONTEXT", 3: "PRIVATE" },
          y = 255,
          w = 256,
          S = 130560,
          m = 0,
          B = 512,
          v = 1024;
        class Node extends n.Struct {
          constructor() {
            (super(), (this.flags = 0));
          }
          get mode() {
            return this.flags & S;
          }
          set mode(t) {
            ((this.flags &= ~S), (this.flags |= t));
          }
          get opt() {
            return 0 !== (this.flags & w);
          }
          set opt(t) {
            t ? (this.flags |= w) : (this.flags &= ~w);
          }
          get target() {
            return this.flags & y;
          }
          set target(t) {
            ((this.flags &= ~y), (this.flags |= t));
          }
          get isRaw() {
            return !1;
          }
          explicit(t) {
            return (i(t >>> 0 === t), (this.mode = B), (this.target = t), this);
          }
          implicit(t) {
            return (i(t >>> 0 === t), (this.mode = v), (this.target = t), this);
          }
          optional(t) {
            return (
              void 0 === t && (t = !0),
              i("boolean" === typeof t),
              (this.opt = t),
              this
            );
          }
          clean() {
            return !1;
          }
          getBodySize(t) {
            return 0;
          }
          writeBody(t, e) {
            return t;
          }
          readBody(t, e) {
            return this;
          }
          encodeBody(t) {
            const e = this.getBodySize(),
              r = n.write(e);
            return (this.writeBody(r, t), r.render());
          }
          decodeBody(t, e) {
            const r = n.read(t);
            return this.readBody(r, e);
          }
          set() {
            return this;
          }
          from(t) {
            if (null == t) return this;
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
              i < e;
              i++
            )
              r[i - 1] = arguments[i];
            return this.set(t, ...r);
          }
          error(t) {
            if (this.opt) return this;
            const e = new Error(t);
            throw (
              Error.captureStackTrace && Error.captureStackTrace(e, this.error),
              e
            );
          }
          getSize(t) {
            if (this.opt && this.clean()) return 0;
            const e = this.getBodySize(t);
            let r = 0;
            return ((r += K(e)), (r += e), this.mode === B && (r += K(r)), r);
          }
          write(t, e) {
            if (this.opt && this.clean()) return t;
            const r = this.getBodySize();
            switch (this.mode) {
              case B: {
                const e = K(r) + r;
                z(t, this.target, p.CONTEXT, !1, e);
              }
              case m: {
                const e = this.type !== d.SEQUENCE && this.type !== d.SET;
                z(t, this.type, p.UNIVERSAL, e, r);
                break;
              }
              case v: {
                const e = this.type !== d.SEQUENCE && this.type !== d.SET;
                z(t, this.target, p.CONTEXT, e, r);
                break;
              }
              default:
                throw new i.AssertionError("Invalid mode.");
            }
            return this.writeBody(t, e);
          }
          read(t, e) {
            switch (this.mode) {
              case B: {
                const e = P(t, this.opt);
                if (!e) return this;
                if (e.cls !== p.CONTEXT)
                  return this.error(`Unexpected class: ${e.cls}.`);
                if (e.primitive)
                  return this.error("Unexpected primitive flag.");
                if (e.type !== this.target)
                  return this.error(`Unexpected type: ${e.type}.`);
                (t.seek(e.len), (t = t.readChild(e.size)));
              }
              case m: {
                const r = P(t, this.opt);
                if (!r) return this;
                if (r.cls !== p.UNIVERSAL)
                  return this.error(`Unexpected class: ${r.cls}.`);
                const i = this.type !== d.SEQUENCE && this.type !== d.SET;
                if (r.primitive !== i)
                  return this.error("Unexpected primitive flag.");
                if (r.type !== this.type)
                  return this.error(`Unexpected type: ${r.type}.`);
                if (this.isRaw) {
                  const e = r.len + r.size;
                  ((this.raw = t.readBytes(e)), t.seek(-e));
                }
                t.seek(r.len);
                const n = t.readChild(r.size);
                return this.readBody(n, e);
              }
              case v: {
                const r = P(t, this.opt);
                if (!r) return this;
                if (r.cls !== p.CONTEXT)
                  return this.error(`Unexpected class: ${r.cls}.`);
                const i = this.type !== d.SEQUENCE && this.type !== d.SET;
                if (r.primitive !== i)
                  return this.error("Unexpected primitive flag.");
                if (r.type !== this.target)
                  return this.error(`Unexpected type: ${r.type}.`);
                t.seek(r.len);
                const n = t.readChild(r.size);
                return this.readBody(n, e);
              }
              default:
                throw new i.AssertionError("Invalid mode.");
            }
          }
          fromArray(t) {
            return this;
          }
          fromNumber(t) {
            return this;
          }
          fromPEM(t) {
            return this;
          }
          static decodeBody(t) {
            return new this().decodeBody(t);
          }
          static fromArray(t) {
            return new this().fromArray(t);
          }
          static fromNumber(t) {
            return new this().fromNumber(t);
          }
          static fromPEM(t) {
            return new this().fromPEM(t);
          }
        }
        class Sequence extends Node {
          constructor() {
            (super(), (this.raw = null), this.from(...arguments));
          }
          get type() {
            return d.SEQUENCE;
          }
        }
        class Set extends Node {
          constructor() {
            (super(), (this.raw = null), this.from(...arguments));
          }
          get type() {
            return d.SET;
          }
        }
        class Any extends Node {
          constructor() {
            (super(),
              (this.node = new Null()),
              (this.raw = null),
              this.from(...arguments));
          }
          get isRaw() {
            return !0;
          }
          explicit(t) {
            throw new Error("Cannot set explicit on any.");
          }
          implicit(t) {
            throw new Error("Cannot set implicit on any.");
          }
          get type() {
            return this.node.type;
          }
          getSize(t) {
            return ((this.node.flags = this.flags), this.node.getSize(t));
          }
          write(t, e) {
            return (
              i(t),
              i(this.mode === m),
              (this.node.flags = this.flags),
              this.node.write(t, e),
              t
            );
          }
          read(t, e) {
            (i(t), i(this.mode === m));
            const r = P(t, this.opt);
            if (!r) return ((this.node.flags = this.flags), this);
            const n = I(r.type);
            return (
              (this.node = new n()),
              (this.node.flags = this.flags),
              this.node.read(t, e),
              this
            );
          }
          getBodySize(t) {
            return ((this.node.flags = this.flags), this.node.getBodySize(t));
          }
          writeBody(t, e) {
            return (
              (this.node.flags = this.flags),
              this.node.writeBody(t, e),
              t
            );
          }
          readBody(t, e) {
            return (
              (this.node.flags = this.flags),
              this.node.readBody(t, e),
              this
            );
          }
          set(t) {
            return (
              null == t && (t = new Null()),
              i(t instanceof Node),
              (this.node = t),
              (this.node.flags = this.flags),
              this
            );
          }
          clean() {
            return this.node.type === d.NULL;
          }
          format() {
            return { type: this.constructor.name, node: this.node };
          }
        }
        class Choice extends Node {
          constructor(t) {
            (super(), i(t instanceof Node), (this.node = t));
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              r[n - 1] = arguments[n];
            this.from(...r);
          }
          get type() {
            return this.node.type;
          }
          choices() {
            throw new Error("Unimplemented.");
          }
          getSize(t) {
            return this.node.getSize(t);
          }
          write(t, e) {
            return (
              i(t),
              (this.node.flags = this.flags),
              this.node.write(t, e),
              t
            );
          }
          read(t, e) {
            i(t);
            const r = this.choices();
            (i(Array.isArray(r)), i(r.length >= 1));
            const n = P(t, this.opt);
            if (!n) return this;
            if (-1 === r.indexOf(n.type))
              throw new Error(`Could not satisfy choice for: ${n.type}.`);
            const s = I(n.type),
              o = new s();
            return ((o.flags = this.flags), (this.node = o.read(t, e)), this);
          }
          getBodySize(t) {
            return this.node.getBodySize(t);
          }
          writeBody(t, e) {
            return (this.node.writeBody(t, e), t);
          }
          readBody(t, e) {
            return (this.node.readBody(t, e), this);
          }
          set() {
            return this.node.set(...arguments);
          }
          clean() {
            return this.node.clean();
          }
          format() {
            return { type: this.constructor.name, node: this.node };
          }
        }
        const A = class String extends Node {
            constructor() {
              (super(), (this.value = ""), this.from(...arguments));
            }
            get encoding() {
              return "binary";
            }
            getBodySize() {
              return t.byteLength(this.value, this.encoding);
            }
            writeBody(t) {
              return (t.writeString(this.value, this.encoding), t);
            }
            readBody(t) {
              const e = t.readString(t.left(), this.encoding);
              switch (this.type) {
                case d.NUMSTRING:
                  if (!L(e)) throw new Error("Invalid num string.");
                  break;
                case d.PRINTSTRING:
                  if (!D(e)) throw new Error("Invalid print string.");
                  break;
                case d.IA5STRING:
                  if (!M(e)) throw new Error("Invalid print string.");
                  break;
              }
              return ((this.value = e), this);
            }
            set(t) {
              return (
                null == t && (t = ""),
                i("string" === typeof t),
                (this.value = t),
                this
              );
            }
            clean() {
              return 0 === this.value.length;
            }
            format() {
              return `<${this.constructor.name}: ${this.value}>`;
            }
          },
          b = class Boolean extends Node {
            constructor() {
              (super(), (this.value = !1), this.from(...arguments));
            }
            get type() {
              return d.BOOLEAN;
            }
            getBodySize() {
              return 1;
            }
            writeBody(t) {
              return (t.writeU8(this.value ? 255 : 0), t);
            }
            readBody(t) {
              if (1 !== t.left()) throw new Error("Non-minimal boolean.");
              const e = t.readU8();
              if (0 !== e && 255 !== e) throw new Error("Invalid boolean.");
              return ((this.value = 255 === e), this);
            }
            set(t) {
              return (
                null == t && (t = !1),
                i("boolean" === typeof t),
                (this.value = t),
                this
              );
            }
            clean() {
              return !1 === this.value;
            }
            format() {
              return `<${this.constructor.name}: ${this.value}>`;
            }
          };
        class Integer extends Node {
          constructor() {
            (super(),
              (this.value = a),
              (this.negative = !1),
              this.from(...arguments));
          }
          get type() {
            return d.INTEGER;
          }
          getBodySize() {
            const t = this.value;
            if (0 === t.length) return 1;
            let e = 0,
              r = 0;
            if (!this.negative && t[0] > 127) e = 1;
            else if (this.negative)
              if (t[0] > 128) e = 1;
              else if (128 === t[0]) {
                e = 0;
                for (let r = 1; r < t.length; r++) e |= t[r];
                e = e ? 1 : 0;
              }
            return ((r += e), (r += t.length), r);
          }
          writeBody(t) {
            const e = this.value;
            if (0 === e.length) return (t.writeU8(0), t);
            let r = 0,
              i = 0;
            if (!this.negative && e[0] > 127) ((r = 1), (i = 0));
            else if (this.negative)
              if (((i = 255), e[0] > 128)) r = 1;
              else if (128 === e[0]) {
                r = 0;
                for (let t = 1; t < e.length; t++) r |= e[t];
                ((i = 0 !== r ? 255 : 0), (r = 1 & i));
              }
            r && t.writeU8(i);
            const n = t.offset;
            return (t.writeBytes(e), i && O(t.data, n, t.offset), this);
          }
          readBody(t, e) {
            void 0 === e && (e = !1);
            let r = t.readBytes(t.left());
            if (0 === r.length) throw new Error("Zero length integer.");
            if (e) {
              if (0 === r[0] && 0 === (128 & r[1]))
                throw new Error("Non-minimal integer.");
              if (255 === r[0] && 128 === (128 & r[1]))
                throw new Error("Non-minimal integer.");
            }
            const i = 128 & r[0];
            if (1 === r.length)
              return (
                i && (r[0] = 1 + (255 ^ r[0])),
                (this.negative = 0 !== i),
                (this.value = r),
                this
              );
            let n = 0;
            if (0 === r[0]) n = 1;
            else if (255 === r[0]) {
              for (let t = 1; t < r.length; t++) n |= r[t];
              n = 0 !== n ? 1 : 0;
            }
            if (n && i === (128 & r[1]))
              throw new Error("Invalid integer padding.");
            return (
              n && (r = r.slice(1)),
              i && O(r, 0, r.length),
              (this.negative = 0 !== i),
              (this.value = G(r)),
              this
            );
          }
          set(e, r) {
            return "number" === typeof e
              ? this.fromNumber(e)
              : (null == e && (e = a),
                i(t.isBuffer(e)),
                (this.value = G(e)),
                (this.negative = !1),
                null != r && (i("boolean" === typeof r), (this.negative = r)),
                this);
          }
          clean() {
            return !this.negative && this.value.equals(a);
          }
          formatValue() {
            return this.value.toString("hex");
          }
          toNumber() {
            let t = n.readUBE(this.value, 0, this.value.length);
            return (this.negative && (t = -t), t);
          }
          fromNumber(e) {
            i(Number.isSafeInteger(e));
            const r = t.allocUnsafe(8);
            let s = !1;
            return (
              e < 0 && ((s = !0), (e = -e)),
              n.writeU64BE(r, e, 0),
              (this.value = G(r)),
              (this.negative = s),
              this
            );
          }
          format() {
            const t = this.constructor.name;
            if (this.value.length <= 6) return `<${t}: ${this.toNumber()}>`;
            const e = this.negative ? "-" : "",
              r = this.value.toString("hex");
            return `<${t}: ${e}0x${r}>`;
          }
        }
        class Unsigned extends Integer {
          constructor() {
            super(...arguments);
          }
          getBodySize() {
            return (i(!this.negative), super.getBodySize());
          }
          writeBody(t) {
            return (i(!this.negative), super.writeBody(t));
          }
          readBody(t, e) {
            return (
              void 0 === e && (e = !1),
              super.readBody(t, e),
              i(!this.negative),
              this
            );
          }
          set(t) {
            return super.set(t);
          }
          toNumber() {
            return (i(!this.negative), super.toNumber());
          }
          fromNumber(t) {
            return (super.fromNumber(t), i(!this.negative), this);
          }
        }
        class BitString extends Node {
          constructor() {
            (super(),
              (this.bits = 0),
              (this.value = o),
              this.from(...arguments));
          }
          get type() {
            return d.BITSTRING;
          }
          getBodySize() {
            return 1 + this.value.length;
          }
          writeBody(t) {
            const e = (8 - (7 & this.bits)) & 7;
            return (t.writeU8(e), t.writeBytes(this.value), t);
          }
          readBody(t) {
            const e = t.readBytes(t.left());
            if (0 === e.length) throw new Error("Zero length bit string.");
            const r = e[0];
            if (
              r > 7 ||
              (1 === e.length && r > 0) ||
              0 !== (e[e.length - 1] & ((1 << r) - 1))
            )
              throw new Error("Invalid padding bits.");
            return (
              (this.bits = 8 * (e.length - 1) - r),
              (this.value = e.slice(1)),
              this
            );
          }
          rightAlign() {
            const e = this.value,
              r = 8 - (7 & this.bits);
            if (8 === r || 0 === e.length) return e;
            const i = t.allocUnsafe(e.length);
            i[0] = e[0] >>> r;
            for (let t = 1; t < e.length; t++)
              ((i[t] = e[t - 1] << (8 - r)), (i[t] |= e[t] >>> r));
            return i;
          }
          getBit(t) {
            if ((i(t >>> 0 === t), t < 0 || t > this.bits)) return 0;
            const e = t >>> 3,
              r = 7 - (7 & t);
            return (this.value[e] >>> r) & 1;
          }
          setBit(t, e) {
            if ((i(t >>> 0 === t), t < 0 || t > this.bits)) return this;
            const r = t >>> 3,
              n = 7 - (7 & t);
            return (
              e ? (this.value[r] |= 1 << n) : (this.value[r] &= ~(1 << n)),
              this
            );
          }
          set(e) {
            return (
              null == e && (e = o),
              "number" === typeof e
                ? (i(e >>> 0 === e),
                  (this.bits = e),
                  (this.value = t.alloc((e + 7) >>> 3)))
                : (i(t.isBuffer(e)),
                  (this.bits = 8 * e.length),
                  (this.value = e)),
              this
            );
          }
          clean() {
            return 0 === this.bits && 0 === this.value.length;
          }
          format() {
            let t = this.rightAlign();
            return (
              t.length > 32 && (t = t.slice(0, 32)),
              `<${this.constructor.name}: ${this.bits}:${t.toString("hex")}>`
            );
          }
        }
        class OctString extends Node {
          constructor() {
            (super(), (this.value = o), this.from(...arguments));
          }
          get type() {
            return d.OCTSTRING;
          }
          getBodySize() {
            return this.value.length;
          }
          writeBody(t) {
            return (t.writeBytes(this.value), t);
          }
          readBody(t) {
            return ((this.value = t.readBytes(t.left())), this);
          }
          set(e) {
            return (
              null == e && (e = o),
              i(t.isBuffer(e)),
              (this.value = e),
              this
            );
          }
          clean() {
            return 0 === this.value.length;
          }
          format() {
            let t = this.value;
            return (
              t.length > 32 && (t = t.slice(0, 32)),
              `<${this.constructor.name}: ${t.toString("hex")}>`
            );
          }
        }
        class Null extends Node {
          constructor() {
            (super(), this.from(...arguments));
          }
          get type() {
            return d.NULL;
          }
          getBodySize() {
            return 0;
          }
          writeBody(t) {
            return t;
          }
          readBody(t) {
            if (0 !== t.left()) throw new Error("Non-minimal NULL.");
            return this;
          }
          clean() {
            return !0;
          }
          format() {
            return `<${this.constructor.name}>`;
          }
        }
        class OID extends Node {
          constructor() {
            (super(), (this.value = u), this.from(...arguments));
          }
          get type() {
            return d.OID;
          }
          getBodySize() {
            const t = this.value;
            if (t.length < 2 || t[0] > 2 || (t[0] < 2 && t[1] >= 40))
              throw new Error("Invalid OID.");
            let e = C(40 * t[0] + t[1]);
            for (let r = 2; r < t.length; r++) e += C(t[r]);
            return e;
          }
          writeBody(t) {
            const e = this.value,
              r = t.data;
            if (e.length < 2 || e[0] > 2 || (e[0] < 2 && e[1] >= 40))
              throw new Error("Invalid OID.");
            let i = t.offset;
            i = U(r, 40 * e[0] + e[1], i);
            for (let n = 2; n < e.length; n++) i = U(r, e[n], i);
            return ((t.offset = i), t);
          }
          readBody(t) {
            const e = t.readBytes(t.left(), !0);
            if (0 === e.length) throw new Error("Zero length OID.");
            const r = new Uint32Array(e.length + 1);
            let [i, n] = N(e, 0);
            i < 80
              ? ((r[0] = (i / 40) >>> 0), (r[1] = i % 40))
              : ((r[0] = 2), (r[1] = i - 80));
            let s = 2;
            for (; n < e.length; s++) (([i, n] = N(e, n)), (r[s] = i));
            return ((this.value = r.subarray(0, s)), this);
          }
          equals(t) {
            return (i(t instanceof OID), q(this.value, t.value));
          }
          set(t) {
            return (
              null == t && (t = u),
              "string" === typeof t
                ? this.fromString(t)
                : Array.isArray(t)
                  ? this.fromArray(t)
                  : (i(t instanceof Uint32Array), (this.value = t), this)
            );
          }
          clean() {
            return q(this.value, u);
          }
          toArray() {
            const t = [];
            for (let e = 0; e < this.value.length; e++) t.push(this.value[e]);
            return t;
          }
          fromArray(t) {
            i(Array.isArray(t));
            const e = new Uint32Array(t.length);
            for (let r = 0; r < t.length; r++) {
              const n = t[r];
              (i(n >>> 0 === n), (e[r] = n));
            }
            return ((this.value = e), this);
          }
          toString() {
            let t = "";
            for (let e = 0; e < this.value.length; e++)
              (e > 0 && (t += "."), (t += this.value[e].toString(10)));
            return t;
          }
          fromString(t) {
            (i("string" === typeof t),
              s.attrs.hasOwnProperty(t)
                ? (t = s.attrs[t])
                : s.keyAlgs.hasOwnProperty(t)
                  ? (t = s.keyAlgs[t])
                  : s.hashes.hasOwnProperty(t)
                    ? (t = s.hashes[t])
                    : s.curves.hasOwnProperty(t) && (t = s.curves[t]));
            const e = t.split("."),
              r = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
              const t = e[i];
              r[i] = k(t);
            }
            return ((this.value = r), this);
          }
          getAttributeName() {
            return s.attrsByVal[this.toString()] || null;
          }
          getSignatureAlgorithmName() {
            return s.sigAlgsByVal[this.toString()] || null;
          }
          getSignatureHash() {
            return s.sigToHash[this.toString()] || null;
          }
          getSignatureHashName() {
            const t = this.getSignatureHash();
            return (t && s.hashesByVal[t]) || null;
          }
          getKeyAlgorithmName() {
            return s.keyAlgsByVal[this.toString()] || null;
          }
          getHashName() {
            return s.hashesByVal[this.toString()] || null;
          }
          getCurveName() {
            return s.curvesByVal[this.toString()] || null;
          }
          format() {
            const t = this.toString(),
              e =
                s.attrsByVal[t] ||
                s.sigAlgsByVal[t] ||
                s.keyAlgsByVal[t] ||
                s.hashesByVal[t] ||
                s.curvesByVal[t] ||
                "UNKNOWN",
              r = `${t} (${e})`;
            return `<${this.constructor.name}: ${r}>`;
          }
        }
        class Enum extends Integer {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.ENUM;
          }
        }
        class Utf8String extends A {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.UTF8STRING;
          }
          get encoding() {
            return "utf8";
          }
        }
        class RawSequence extends Node {
          constructor() {
            (super(), (this.value = o), this.from(...arguments));
          }
          get type() {
            return d.SEQUENCE;
          }
          getBodySize() {
            return this.value.length;
          }
          writeBody(t) {
            return (t.writeBytes(this.value), t);
          }
          readBody(t) {
            return ((this.value = t.readBytes(t.left())), this);
          }
          set(e) {
            return (
              null == e && (e = o),
              Array.isArray(e)
                ? this.fromArray(e)
                : (i(t.isBuffer(e)), (this.value = e), this)
            );
          }
          clean() {
            return 0 === this.value.length;
          }
          *children() {
            const t = n.read(this.value);
            while (t.left()) yield Any.read(t).node;
          }
          toArray() {
            const t = [];
            for (const e of this.children()) t.push(e);
            return t;
          }
          fromArray(t) {
            i(Array.isArray(t));
            let e = 0;
            for (const n of t) (i(n instanceof Node), (e += n.getSize()));
            const r = n.write(e);
            for (const i of t) i.write(r);
            return ((this.value = r.render()), this);
          }
          format() {
            return this.toArray();
          }
        }
        class RawSet extends RawSequence {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.SET;
          }
        }
        class NumString extends A {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.NUMSTRING;
          }
        }
        class PrintString extends A {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.PRINTSTRING;
          }
        }
        class T61String extends A {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.T61STRING;
          }
        }
        class IA5String extends A {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.IA5STRING;
          }
        }
        class Time extends Node {
          constructor() {
            (super(),
              (this.value = 0),
              (this.offset = 0),
              this.from(...arguments));
          }
          set(t, e) {
            return (
              null == t && (t = 0),
              null == e && (e = 0),
              "string" === typeof t
                ? this.fromString(t)
                : (i(H(t)), i($(e)), (this.value = t), (this.offset = e), this)
            );
          }
          clean() {
            return 0 === this.value && 0 === this.offset;
          }
          unix() {
            return this.value - this.offset;
          }
          toString() {
            const t = new Date(1e3 * this.value),
              e = t.toISOString().slice(0, -5);
            return e + Y(this.offset);
          }
          fromString(t) {
            i("string" === typeof t);
            const e = Date.parse(t);
            if (e !== e) throw new Error("Invalid date string.");
            const r = Math.floor(e / 1e3);
            if (!H(r)) throw new Error("Invalid time.");
            return ((this.value = r), (this.offset = 0), this);
          }
          format() {
            const t = this.constructor.name,
              e = this.value;
            let r = this.offset.toString(10);
            return (
              this.offset >= 0 && (r = "+" + r),
              `<${t}: ${e}${r} (${this.toString()})>`
            );
          }
        }
        class UTCTime extends Time {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.UTCTIME;
          }
          getBodySize() {
            return 0 === this.offset ? 13 : 17;
          }
          writeBody(t) {
            i(H(this.value));
            const e = new Date(1e3 * this.value);
            let r = "";
            return (
              (r += R(e.getUTCFullYear() % 100)),
              (r += R(e.getUTCMonth() + 1)),
              (r += R(e.getUTCDate())),
              (r += R(e.getUTCHours())),
              (r += R(e.getUTCMinutes())),
              (r += R(e.getUTCSeconds())),
              (r += Y(this.offset)),
              t.writeString(r, "binary"),
              t
            );
          }
          readBody(t) {
            const e = t.left();
            if (13 !== e && 17 !== e) throw new Error("Invalid UTCTIME.");
            const r = t.readString(e, "binary"),
              i = k(r.substring(0, 2)),
              n = k(r.substring(2, 4)),
              s = k(r.substring(4, 6)),
              o = k(r.substring(6, 8)),
              a = k(r.substring(8, 10)),
              u = k(r.substring(10, 12));
            return (
              (this.value = V(i, n, s, o, a, u, !0)),
              (this.offset = j(r.substring(12))),
              this
            );
          }
        }
        class GenTime extends Time {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.GENTIME;
          }
          getBodySize() {
            return 0 === this.offset ? 15 : 19;
          }
          writeBody(t) {
            i(H(this.value));
            const e = new Date(1e3 * this.value);
            let r = "";
            return (
              (r += e.getUTCFullYear().toString(10)),
              (r += R(e.getUTCMonth() + 1)),
              (r += R(e.getUTCDate())),
              (r += R(e.getUTCHours())),
              (r += R(e.getUTCMinutes())),
              (r += R(e.getUTCSeconds())),
              (r += Y(this.offset)),
              t.writeString(r, "binary"),
              t
            );
          }
          readBody(t) {
            const e = t.left();
            if (15 !== e && 19 !== e) throw new Error("Invalid GENTIME.");
            const r = t.readString(e, "binary"),
              i = k(r.substring(0, 4)),
              n = k(r.substring(4, 6)),
              s = k(r.substring(6, 8)),
              o = k(r.substring(8, 10)),
              a = k(r.substring(10, 12)),
              u = k(r.substring(12, 14));
            return (
              (this.value = V(i, n, s, o, a, u, !1)),
              (this.offset = j(r.substring(14))),
              this
            );
          }
        }
        class GenString extends A {
          constructor() {
            super(...arguments);
          }
          get type() {
            return d.GENSTRING;
          }
        }
        function I(t) {
          switch ((i(t >>> 0 === t), t)) {
            case d.BOOLEAN:
              return b;
            case d.INTEGER:
              return Integer;
            case d.BITSTRING:
              return BitString;
            case d.OCTSTRING:
              return OctString;
            case d.NULL:
              return Null;
            case d.OID:
              return OID;
            case d.ENUM:
              return Enum;
            case d.UTF8STRING:
              return Utf8String;
            case d.SEQUENCE:
              return RawSequence;
            case d.SET:
              return RawSet;
            case d.NUMSTRING:
              return NumString;
            case d.PRINTSTRING:
              return PrintString;
            case d.T61STRING:
              return T61String;
            case d.IA5STRING:
              return IA5String;
            case d.UTCTIME:
              return UTCTime;
            case d.GENTIME:
              return GenTime;
            case d.GENSTRING:
              return GenString;
            default:
              throw new Error(`Unknown type: ${t}.`);
          }
        }
        function K(t) {
          return (
            i(t >>> 0 === t),
            t <= 127 ? 2 : t <= 255 ? 3 : t <= 65535 ? 4 : (i(t <= 16777215), 5)
          );
        }
        function z(t, e, r, n, s) {
          return (
            i(t),
            i(e >>> 0 === e),
            i(r >>> 0 === r),
            i("boolean" === typeof n),
            i(s >>> 0 === s),
            n || (e |= 32),
            (e |= r << 6),
            s <= 127
              ? (t.writeU8(e), t.writeU8(s), t)
              : s <= 255
                ? (t.writeU8(e), t.writeU8(129), t.writeU8(s), t)
                : s <= 65535
                  ? (t.writeU8(e), t.writeU8(130), t.writeU16BE(s), t)
                  : (i(s <= 16777215),
                    t.writeU8(e),
                    t.writeU8(131),
                    t.writeU24BE(s),
                    t)
          );
        }
        function T(t) {
          const e = t.offset,
            r = t.readU8(),
            i = r >>> 6,
            n = 0 === (32 & r);
          let s = 31 & r;
          if (31 === s && (([s, t.offset] = N(t.data, t.offset)), s < 31))
            throw new Error("Non-minimal type.");
          switch (i) {
            case p.UNIVERSAL:
            case p.CONTEXT:
              break;
            default:
              throw new Error("Unknown class.");
          }
          const o = x(t),
            a = t.offset - e;
          return { type: s, cls: i, primitive: n, size: o, len: a };
        }
        function P(t, e) {
          const r = t.offset;
          let i = null,
            n = null;
          try {
            i = T(t);
          } catch (s) {
            n = s;
          }
          if (((t.offset = r), !e && !i)) throw n;
          return i;
        }
        function x(t) {
          const e = t.readU8(),
            r = 127 & e;
          if (0 === (128 & e)) return r;
          if (0 === r) throw new Error("Indefinite length.");
          let i = 0;
          for (let n = 0; n < r; n++) {
            const e = t.readU8();
            if (i >= 1 << 23) throw new Error("Length too large.");
            if (((i *= 256), (i += e), 0 === i))
              throw new Error("Unexpected leading zeroes.");
          }
          if (i < 128) throw new Error("Non-minimal length.");
          return i;
        }
        function C(t) {
          if ((i(t >>> 0 === t), 0 === t)) return 1;
          let e = 0;
          while (t > 0) ((e += 1), (t >>>= 7));
          return e;
        }
        function U(e, r, s) {
          (i(t.isBuffer(e)), i(r >>> 0 === r), i(s >>> 0 === s));
          const o = C(r);
          for (let t = o - 1; t >= 0; t--) {
            let i = r >>> (7 * t);
            if (((i &= 127), 0 !== t && (i |= 128), s >= e.length))
              throw new n.EncodingError(s, "Out of bounds write");
            ((e[s] = i), (s += 1));
          }
          return s;
        }
        function N(e, r) {
          (i(t.isBuffer(e)), i(r >>> 0 === r));
          let n = 0,
            s = 0;
          for (; r < e.length; n++) {
            if (5 === n) throw new Error("Base128 integer too large.");
            const t = e[r];
            if (((s *= 128), (s += 127 & t), (r += 1), 0 === (128 & t))) {
              if (s > 4294967295) throw new Error("Base128 integer too large.");
              return [s, r];
            }
          }
          throw new Error("Base128 integer too short.");
        }
        function R(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10);
        }
        function L(t) {
          i("string" === typeof t);
          for (let e = 0; e < t.length; e++) {
            const r = t.charCodeAt(e);
            if (!(r >= 48 && r <= 57) && 32 !== r) return !1;
          }
          return !0;
        }
        function D(t) {
          i("string" === typeof t);
          for (let e = 0; e < t.length; e++) {
            const r = t.charCodeAt(e);
            if (
              !(r >= 48 && r <= 57) &&
              !(r >= 65 && r <= 90) &&
              !(r >= 97 && r <= 122)
            ) {
              switch (r) {
                case 32:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 58:
                case 61:
                case 63:
                  continue;
              }
              return !1;
            }
          }
          return !0;
        }
        function M(t) {
          i("string" === typeof t);
          for (let e = 0; e < t.length; e++) {
            const r = t.charCodeAt(e);
            if (r >= 128) return !1;
          }
          return !0;
        }
        function k(t) {
          i("string" === typeof t);
          let e = 0;
          if (0 === t.length || t.length > 10)
            throw new Error("Invalid integer.");
          for (let r = 0; r < t.length; r++) {
            const i = t.charCodeAt(r) - 48;
            if (i < 0 || i > 9) throw new Error("Invalid integer.");
            if (((e *= 10), (e += i), e > 4294967295))
              throw new Error("Invalid integer.");
          }
          return e;
        }
        function q(t, e) {
          if (
            (i(t instanceof Uint32Array),
            i(e instanceof Uint32Array),
            t.length !== e.length)
          )
            return !1;
          for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1;
          return !0;
        }
        function G(e) {
          if ((i(t.isBuffer(e)), 0 === e.length)) return t.from([0]);
          if (0 !== e[0]) return e;
          for (let t = 1; t < e.length; t++) if (0 !== e[t]) return e.slice(t);
          return e.slice(-1);
        }
        function O(e, r, n) {
          (i(t.isBuffer(e)), i(r >>> 0 === r), i(n >>> 0 === n), i(r <= n));
          let s = 1;
          for (let t = n - 1; t >= r; t--)
            ((s += 255 ^ e[t]), (e[t] = 255 & s), (s >>>= 8));
          return e;
        }
        function H(t) {
          return !!Number.isSafeInteger(t) && !(t < h || t > c);
        }
        function V(t, e, r, n, s, o, a) {
          if (
            (i(t >>> 0 === t),
            i(e >>> 0 === e),
            i(r >>> 0 === r),
            i(n >>> 0 === n),
            i(s >>> 0 === s),
            i(o >>> 0 === o),
            i("boolean" === typeof a),
            a && (t = t < 70 ? 2e3 + t : 1900 + t),
            t > 275760)
          )
            throw new Error("Invalid year.");
          if (e < 1 || e > 12 || r < 1 || r > 32)
            throw new Error("Invalid month or day.");
          if (n > 23 || s > 59 || o > 59)
            throw new Error("Invalid hours, minutes, or seconds.");
          const u = Date.UTC(t, e - 1, r, n, s, o, 0);
          i(u === u);
          const h = u / 1e3;
          return (i(H(h)), h);
        }
        function $(t) {
          return !!Number.isSafeInteger(t) && !(t < l || t > f);
        }
        function Y(t) {
          if ((i($(t)), 0 === t)) return "Z";
          let e = "";
          t < 0 ? ((e += "-"), (t = -t)) : (e += "+");
          const r = (t / 60) >>> 0,
            n = (r / 60) >>> 0,
            s = r % 60;
          return ((e += R(n)), (e += R(s)), e);
        }
        function j(t) {
          if ((i("string" === typeof t), 0 === t.length))
            throw new Error("Invalid time offset.");
          const e = t[0];
          switch (e) {
            case "Z":
              if (1 !== t.length) throw new Error("Non-minimal time offset.");
              return 0;
            case "+":
            case "-": {
              if (5 !== t.length) throw new Error("Non-minimal time offset.");
              const r = k(t.substring(1, 3)),
                i = k(t.substring(3, 5)),
                n = 60 * r + i;
              let s = 60 * n;
              if (("-" === e && (s = -s), !$(s)))
                throw new Error("Not a time zone.");
              return s;
            }
          }
          throw new Error("Invalid time offset.");
        }
        ((e.EMPTY = o),
          (e.ZERO = a),
          (e.EMPTY_OID = u),
          (e.types = d),
          (e.typesByVal = g),
          (e.classes = p),
          (e.classesByVal = E),
          (e.objects = s),
          (e.TARGET = y),
          (e.OPTIONAL = w),
          (e.MODE = S),
          (e.NORMAL = m),
          (e.EXPLICIT = B),
          (e.IMPLICIT = v),
          (e.Node = Node),
          (e.Sequence = Sequence),
          (e.Set = Set),
          (e.Any = Any),
          (e.Choice = Choice),
          (e.Str = A),
          (e.String = A),
          (e.Bool = b),
          (e.Boolean = b),
          (e.Integer = Integer),
          (e.Unsigned = Unsigned),
          (e.BitString = BitString),
          (e.OctString = OctString),
          (e.Null = Null),
          (e.OID = OID),
          (e.Enum = Enum),
          (e.Utf8String = Utf8String),
          (e.RawSequence = RawSequence),
          (e.RawSet = RawSet),
          (e.NumString = NumString),
          (e.PrintString = PrintString),
          (e.T61String = T61String),
          (e.IA5String = IA5String),
          (e.Time = Time),
          (e.UTCTime = UTCTime),
          (e.GenTime = GenTime),
          (e.GenString = GenString),
          (e.typeToClass = I));
      }).call(this, r(2).Buffer);
    },
    3230: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = t.alloc(1, 0),
          s = [];
        function o(e) {
          i(t.isBuffer(e));
          let r = 0;
          for (; r < e.length; r++) if (0 !== e[r]) break;
          let n = 8 * (e.length - r);
          if (0 === n) return 0;
          n -= 8;
          let s = e[r];
          while (s) ((n += 1), (s >>>= 1));
          return n;
        }
        function a(e) {
          i(t.isBuffer(e));
          let r = e.length - 1;
          for (; r >= 0; r--) if (0 !== e[r]) break;
          let n = 8 * (r + 1);
          if (0 === n) return 0;
          n -= 8;
          let s = e[r];
          while (s) ((n += 1), (s >>>= 1));
          return n;
        }
        function u(e, r) {
          (i(t.isBuffer(e)), i(t.isBuffer(r)));
          let n = 0,
            s = e.length,
            o = 0,
            a = r.length;
          while (s > 0 && 0 === e[n]) (n++, s--);
          while (a > 0 && 0 === r[o]) (o++, a--);
          if (s < a) return -1;
          if (s > a) return 1;
          for (let t = 0; t < s; t++) {
            if (e[n + t] < r[o + t]) return -1;
            if (e[n + t] > r[o + t]) return 1;
          }
          return 0;
        }
        function h(e, r) {
          (i(t.isBuffer(e)), i(t.isBuffer(r)));
          let n = e.length,
            s = r.length;
          while (n > 0 && 0 === e[n - 1]) n--;
          while (s > 0 && 0 === r[s - 1]) s--;
          if (n < s) return -1;
          if (n > s) return 1;
          for (let t = n - 1; t >= 0; t--) {
            if (e[t] < r[t]) return -1;
            if (e[t] > r[t]) return 1;
          }
          return 0;
        }
        function c(e) {
          if (null == e) return n;
          i(t.isBuffer(e));
          let r = 0;
          for (; r < e.length; r++) if (0 !== e[r]) break;
          return (0 !== r && (e = e.slice(r)), 0 === e.length ? n : e);
        }
        function l(e) {
          if (null == e) return n;
          i(t.isBuffer(e));
          let r = e.length - 1;
          for (; r >= 0; r--) if (0 !== e[r]) break;
          return (
            r + 1 !== e.length && (e = e.slice(0, r + 1)),
            0 === e.length ? n : e
          );
        }
        function f(e, r) {
          if (null == e) return g(r);
          if (
            (i(t.isBuffer(e)),
            i(r >>> 0 === r),
            e.length > r && (e = c(e)),
            e.length > r)
          )
            throw new RangeError(`Buffer expected to be ${r} bytes in size.`);
          if (e.length === r) return e;
          const n = t.allocUnsafe(r),
            s = r - e.length;
          return (n.fill(0, 0, s), e.copy(n, s), n);
        }
        function d(e, r) {
          if (null == e) return g(r);
          if (
            (i(t.isBuffer(e)),
            i(r >>> 0 === r),
            e.length > r && (e = l(e)),
            e.length > r)
          )
            throw new RangeError(`Buffer expected to be ${r} bytes in size.`);
          if (e.length === r) return e;
          const n = t.allocUnsafe(r);
          return (e.copy(n, 0), n.fill(0, e.length, r), n);
        }
        function g(e) {
          (i(e >>> 0 === e), i(e <= 128));
          while (s.length <= e) s.push(null);
          let r = s[e];
          return (r || ((r = t.alloc(e, 0)), (s[e] = r)), r);
        }
        ((e.countLeft = o),
          (e.countRight = a),
          (e.compareLeft = u),
          (e.compareRight = h),
          (e.trimLeft = c),
          (e.trimRight = l),
          (e.padLeft = f),
          (e.padRight = d));
      }).call(this, r(2).Buffer);
    },
    3356: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(3614),
          s = r(6829),
          o = t.alloc(0);
        class PEMBlock {
          constructor(e, r) {
            (null == e && (e = "PRIVACY-ENHANCED MESSAGE"),
              null == r && (r = o),
              i("string" === typeof e),
              i(t.isBuffer(r)),
              (this.type = e),
              (this.headers = new Map()),
              (this.data = r));
          }
          toString(t) {
            return a(this.type, this.headers, this.data, t);
          }
          fromString(t, e) {
            const r = u(t, e),
              i = r.next();
            if (i.done) throw new Error("No PEM data found.");
            const n = i.value;
            return (
              (this.type = n.type),
              (this.headers = n.headers),
              (this.data = n.data),
              this
            );
          }
          getProcType() {
            const t = this.headers.get("Proc-Type");
            return t ? ProcType.fromString(t) : null;
          }
          setProcType(t, e) {
            i(null != t && e);
            const r = new ProcType(t, e);
            return (this.headers.set("Proc-Type", r.toString()), this);
          }
          unsetProcType() {
            return (this.headers.delete("Proc-Type"), this);
          }
          getDEKInfo() {
            const t = this.headers.get("DEK-Info");
            return t ? DEKInfo.fromString(t) : null;
          }
          setDEKInfo(t, e) {
            i(t);
            const r = new DEKInfo(t, e);
            return (this.headers.set("DEK-Info", r.toString()), this);
          }
          unsetDEKInfo() {
            return (this.headers.delete("DEK-Info"), this);
          }
          isEncrypted() {
            let t;
            try {
              t = this.getProcType();
            } catch (e) {
              return !1;
            }
            return !!t && 4 === t.version && "ENCRYPTED" === t.state;
          }
          static fromString(t, e) {
            return new this().fromString(t, e);
          }
        }
        class ProcType {
          constructor(t, e) {
            (null == t && (t = 0),
              null == e && (e = "NONE"),
              i(t >>> 0 === t),
              i("string" === typeof e),
              (this.version = t),
              (this.state = e.toUpperCase()));
          }
          toString() {
            return `${this.version},${this.state}`;
          }
          fromString(t) {
            i("string" === typeof t);
            const e = t.split(",", 3);
            if (2 !== e.length) throw new Error("Invalid Proc-Type.");
            return (
              (this.version = f(e[0])),
              (this.state = e[1].toUpperCase()),
              this
            );
          }
          static fromString(t) {
            return new this().fromString(t);
          }
        }
        class DEKInfo {
          constructor(e, r) {
            (null == e && (e = "AES-128-ECB"),
              null == r && (r = o),
              i("string" === typeof e),
              i(t.isBuffer(r)),
              (this.name = e.toUpperCase()),
              (this.iv = r));
          }
          toString() {
            const t = this.name;
            if (0 === this.iv.length) return t;
            const e = this.iv.toString("hex");
            return `${t},${e.toUpperCase()}`;
          }
          fromString(e) {
            i("string" === typeof e);
            const r = e.split(",", 3);
            if (r.length < 1 || r.length > 2)
              throw new Error("Invalid DEK-Info.");
            const n = r[0];
            if (0 === n.length) throw new Error("Invalid DEK-Info name.");
            if (((this.name = n.toUpperCase()), (this.iv = o), r.length > 1)) {
              const e = r[1],
                i = t.from(e, "hex");
              if (i.length !== e.length >>> 1)
                throw new Error("Invalid DEK-Info IV.");
              this.iv = i;
            }
            return this;
          }
          static fromString(t) {
            return new this().fromString(t);
          }
        }
        function a(e, r, s, o) {
          (void 0 === o && (o = !1),
            i("string" === typeof e),
            i(r instanceof Map),
            i(t.isBuffer(s)),
            i("boolean" === typeof o));
          let a = "";
          if (((a += `-----BEGIN ${e}-----\n`), r.size > 0)) {
            for (const [t, e] of r) a += `${t}: ${e}\n`;
            a += "\n";
          }
          const u = n.encode(s);
          for (let t = 0; t < u.length; t += 64)
            a += u.substring(t, t + 64) + "\n";
          if (o) {
            const t = l(s);
            a += `=${n.encode(t)}\n`;
          }
          return ((a += `-----END ${e}-----\n`), a);
        }
        function u(t, e) {
          return (
            void 0 === e && (e = !1),
            (function* () {
              (i("string" === typeof t), i("boolean" === typeof e));
              let r = "",
                o = null,
                a = null;
              for (const [, i] of s(t)) {
                const t = i.indexOf(":");
                if (-1 === t) {
                  if (i.length >= 15 && "-----" === i.substring(0, 5)) {
                    if ("-----" !== i.slice(-5))
                      throw new Error("PEM parse error (invalid preamble).");
                    const t = i.slice(5, -5);
                    if ("BEGIN " === t.substring(0, 6)) {
                      if (o)
                        throw new Error("PEM parse error (un-ended block).");
                      const e = t.substring(6).trim();
                      ((o = new PEMBlock()), (o.type = e));
                      continue;
                    }
                    if ("END " === t.substring(0, 4)) {
                      if (!o)
                        throw new Error("PEM parse error (unexpected end).");
                      const e = t.substring(4).trim();
                      if (o.type !== e)
                        throw new Error("PEM parse error (type mismatch).");
                      if (((o.data = n.decode(r)), a && !l(o.data).equals(a)))
                        throw new Error(
                          "PEM parse error (invalid armor checksum).",
                        );
                      (yield o, (r = ""), (o = null), (a = null));
                      continue;
                    }
                    throw new Error("PEM parse error (unknown preamble).");
                  }
                  if (!o) throw new Error("PEM parse error (unexpected data).");
                  if (5 !== i.length || 61 !== i.charCodeAt(0)) {
                    if (i.length > 96)
                      throw new Error("PEM parse error (line too long).");
                    r += i.replace(/[\t\v ]/g, "");
                  } else {
                    if (!e) continue;
                    if (a)
                      throw new Error(
                        "PEM parse error (unexpected armor checksum).",
                      );
                    a = n.decode(i.substring(1));
                  }
                } else {
                  if (!o)
                    throw new Error("PEM parse error (misplaced header).");
                  const e = i.substring(0, t).trim(),
                    r = i.substring(t + 1).trim();
                  o.headers.set(e, r);
                }
              }
              if (o || a) throw new Error("PEM parse error (un-ended block).");
              if (0 !== r.length)
                throw new Error("PEM parse error (trailing data).");
            })()
          );
        }
        function h(e, r, n) {
          (i(t.isBuffer(e)), i("string" === typeof r));
          const s = new PEMBlock();
          return ((s.type = r), (s.data = e), s.toString(n));
        }
        function c(t, e, r) {
          (i("string" === typeof t), i("string" === typeof e));
          const n = PEMBlock.fromString(t, r);
          if (n.type !== e) throw new Error("PEM type mismatch.");
          return n.data;
        }
        function l(e) {
          i(t.isBuffer(e));
          let r = 11994318;
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            r ^= i << 16;
            for (let t = 0; t < 8; t++)
              ((r <<= 1), 16777216 & r && (r ^= 25578747));
          }
          r &= 16777215;
          const n = t.allocUnsafe(3);
          return (
            (n[2] = r),
            (r >>>= 8),
            (n[1] = r),
            (r >>>= 8),
            (n[0] = r),
            n
          );
        }
        function f(t) {
          if ((i("string" === typeof t), t.length < 1 || t.length > 10))
            throw new Error("Invalid integer.");
          let e = 0;
          for (let r = 0; r < t.length; r++) {
            const i = t.charCodeAt(r);
            if (i < 48 || i > 57) throw new Error("Invalid integer.");
            if (((e *= 10), (e += i - 48), r > 0 && 0 === e))
              throw new Error("Invalid integer.");
            if (e > 4294967295) throw new Error("Invalid integer.");
          }
          return e;
        }
        ((e.PEMBlock = PEMBlock),
          (e.ProcType = ProcType),
          (e.DEKInfo = DEKInfo),
          (e.encode = a),
          (e.decode = u),
          (e.toPEM = h),
          (e.fromPEM = c));
      }).call(this, r(2).Buffer);
    },
    3614: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769);
        function n(e) {
          return (i(t.isBuffer(e)), e.toString("base64"));
        }
        function s(e) {
          if ((i("string" === typeof e), /[\-_]/.test(e)))
            throw new Error("Invalid base64 string.");
          const r = t.from(e, "base64");
          if (e.length !== l(r.length))
            throw new Error("Invalid base64 string.");
          return r;
        }
        function o(t) {
          i("string" === typeof t);
          try {
            return (s(t), !0);
          } catch (e) {
            return !1;
          }
        }
        function a(t) {
          const e = n(t),
            r = e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
          return r;
        }
        function u(t) {
          if ((i("string" === typeof t), /[=\+\/]/.test(t)))
            throw new Error("Invalid base64-url string.");
          const e = c(t).replace(/\-/g, "+").replace(/_/g, "/");
          return s(e);
        }
        function h(t) {
          i("string" === typeof t);
          try {
            return (u(t), !0);
          } catch (e) {
            return !1;
          }
        }
        function c(t) {
          switch (3 & t.length) {
            case 2:
              t += "==";
              break;
            case 3:
              t += "=";
              break;
          }
          return t;
        }
        function l(t) {
          const e = ((4 * t) / 3 + 3) & -4;
          return e >>> 0;
        }
        ((e.encode = n),
          (e.decode = s),
          (e.test = o),
          (e.encodeURL = a),
          (e.decodeURL = u),
          (e.testURL = h));
      }).call(this, r(2).Buffer);
    },
    3615: function (t, e, r) {
      "use strict";
      (function (e) {
        let i = e.env.NODE_BACKEND || "native";
        switch (
          (e.env.BCRYPTO_FORCE_GMP
            ? (i = "native")
            : e.env.BCRYPTO_FORCE_BIGINT && (i = "node"),
          i)
        ) {
          case "native":
            try {
              t.exports = r(11016);
              break;
            } catch (n) {}
          case "node":
            try {
              t.exports = r(5658);
              break;
            } catch (n) {}
          default:
            t.exports = r(5658);
            break;
        }
      }).call(this, r(18));
    },
    3842: function (t, e, r) {
      "use strict";
      const i = r(2769),
        n = r(3202),
        s = r(3356),
        { types: o } = n;
      class Certificate extends n.Sequence {
        constructor() {
          (super(),
            (this.tbsCertificate = new TBSCertificate()),
            (this.signatureAlgorithm = new AlgorithmIdentifier()),
            (this.signature = new n.BitString()));
        }
        get isRaw() {
          return !0;
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.tbsCertificate.getSize()),
            (t += this.signatureAlgorithm.getSize()),
            (t += this.signature.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.tbsCertificate.write(t),
            this.signatureAlgorithm.write(t),
            this.signature.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.tbsCertificate.read(t),
            this.signatureAlgorithm.read(t),
            this.signature.read(t),
            this
          );
        }
        clean() {
          return (
            this.tbsCertificate.clean() &&
            this.signatureAlgorithm.clean() &&
            this.signature.clean()
          );
        }
        toPEM() {
          return s.toPEM(this.encode(), "CERTIFICATE");
        }
        fromPEM(t) {
          const e = s.fromPEM(t, "CERTIFICATE");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            tbsCertificate: this.tbsCertificate,
            signatureAlgorithm: this.signatureAlgorithm,
            signature: this.signature,
          };
        }
      }
      class TBSCertificate extends n.Sequence {
        constructor() {
          (super(),
            (this.version = new n.Unsigned().explicit(0).optional()),
            (this.serialNumber = new n.Integer()),
            (this.signature = new AlgorithmIdentifier()),
            (this.issuer = new RDNSequence()),
            (this.validity = new Validity()),
            (this.subject = new RDNSequence()),
            (this.subjectPublicKeyInfo = new SubjectPublicKeyInfo()),
            (this.issuerUniqueID = new n.BitString().implicit(1).optional()),
            (this.subjectUniqueID = new n.BitString().implicit(2).optional()),
            (this.extensions = new Extensions().explicit(3).optional()));
        }
        get isRaw() {
          return !0;
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.version.getSize()),
            (t += this.serialNumber.getSize()),
            (t += this.signature.getSize()),
            (t += this.issuer.getSize()),
            (t += this.validity.getSize()),
            (t += this.subject.getSize()),
            (t += this.subjectPublicKeyInfo.getSize()),
            (t += this.issuerUniqueID.getSize()),
            (t += this.subjectUniqueID.getSize()),
            (t += this.extensions.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.version.write(t),
            this.serialNumber.write(t),
            this.signature.write(t),
            this.issuer.write(t),
            this.validity.write(t),
            this.subject.write(t),
            this.subjectPublicKeyInfo.write(t),
            this.issuerUniqueID.write(t),
            this.subjectUniqueID.write(t),
            this.extensions.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.version.read(t),
            this.serialNumber.read(t),
            this.signature.read(t),
            this.issuer.read(t),
            this.validity.read(t),
            this.subject.read(t),
            this.subjectPublicKeyInfo.read(t),
            this.issuerUniqueID.read(t),
            this.subjectUniqueID.read(t),
            this.extensions.read(t),
            this
          );
        }
        clean() {
          return (
            this.version.clean() &&
            this.serialNumber.clean() &&
            this.signature.clean() &&
            this.issuer.clean() &&
            this.validity.clean() &&
            this.subject.clean() &&
            this.subjectPublicKeyInfo.clean() &&
            this.issuerUniqueID.clean() &&
            this.subjectUniqueID.clean() &&
            this.extensions.clean()
          );
        }
        toPEM() {
          return s.toPEM(this.encode(), "TBS CERTIFICATE");
        }
        fromPEM(t) {
          const e = s.fromPEM(t, "TBS CERTIFICATE");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            version: this.version,
            serialNumber: this.serialNumber,
            signature: this.signature,
            issuer: this.issuer,
            validity: this.validity,
            subject: this.subject,
            subjectPublicKeyInfo: this.subjectPublicKeyInfo,
            issuerUniqueID: this.issuerUniqueID,
            subjectUniqueID: this.subjectUniqueID,
            extensions: this.extensions,
          };
        }
      }
      class AlgorithmIdentifier extends n.Sequence {
        constructor(t, e) {
          (super(),
            (this.algorithm = new n.OID(t)),
            (this.parameters = new n.Any(e).optional()));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.algorithm.getSize()),
            (t += this.parameters.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.algorithm.write(t), this.parameters.write(t), t);
        }
        readBody(t) {
          return (this.algorithm.read(t), this.parameters.read(t), this);
        }
        clean() {
          return this.algorithm.clean() && this.parameters.clean();
        }
        format() {
          return {
            type: this.constructor.name,
            algorithm: this.algorithm,
            parameters: this.parameters,
          };
        }
      }
      class RDNSequence extends n.Sequence {
        constructor() {
          (super(), (this.names = []));
        }
        getBodySize() {
          let t = 0;
          for (const e of this.names) t += e.getSize();
          return t;
        }
        writeBody(t) {
          for (const e of this.names) e.write(t);
          return t;
        }
        readBody(t) {
          while (t.left()) {
            const e = RDN.read(t);
            this.names.push(e);
          }
          return this;
        }
        clean() {
          return 0 === this.names.length;
        }
        format() {
          return { type: this.constructor.name, names: this.names };
        }
      }
      class RDN extends n.Set {
        constructor(t, e) {
          (super(), (this.attributes = [new Attribute(t, e)]));
        }
        getBodySize() {
          let t = 0;
          i(this.attributes.length >= 1);
          for (const e of this.attributes) t += e.getSize();
          return t;
        }
        writeBody(t) {
          i(this.attributes.length >= 1);
          for (const e of this.attributes) e.write(t);
          return t;
        }
        readBody(t) {
          this.attributes[0].read(t);
          while (t.left()) {
            const e = Attribute.read(t);
            this.attributes.push(e);
          }
          return this;
        }
        clean() {
          return 1 === this.attributes.length && this.attributes[0].clean();
        }
        format() {
          return { type: this.constructor.name, attributes: this.attributes };
        }
      }
      class Attribute extends n.Sequence {
        constructor(t, e) {
          (super(), (this.id = new n.OID(t)), (this.value = new n.Any(e)));
        }
        getBodySize() {
          let t = 0;
          return ((t += this.id.getSize()), (t += this.value.getSize()), t);
        }
        writeBody(t) {
          return (this.id.write(t), this.value.write(t), t);
        }
        readBody(t) {
          return (this.id.read(t), this.value.read(t), this);
        }
        clean() {
          return this.id.clean() && this.value.clean();
        }
        format() {
          return {
            type: this.constructor.name,
            id: this.id,
            value: this.value,
          };
        }
      }
      class Validity extends n.Sequence {
        constructor() {
          (super(),
            (this.notBefore = new Time()),
            (this.notAfter = new Time()));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.notBefore.getSize()),
            (t += this.notAfter.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.notBefore.write(t), this.notAfter.write(t), t);
        }
        readBody(t) {
          return (this.notBefore.read(t), this.notAfter.read(t), this);
        }
        clean() {
          return this.notBefore.clean() && this.notAfter.clean();
        }
        format() {
          return {
            type: this.constructor.name,
            notBefore: this.notBefore,
            notAfter: this.notAfter,
          };
        }
      }
      class Time extends n.Choice {
        constructor(t) {
          super(new n.UTCTime(), t);
        }
        choices() {
          return [o.UTCTIME, o.GENTIME];
        }
      }
      class SubjectPublicKeyInfo extends n.Sequence {
        constructor(t, e, r) {
          (super(),
            (this.algorithm = new AlgorithmIdentifier(t, e)),
            (this.publicKey = new n.BitString(r)));
        }
        get isRaw() {
          return !0;
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.algorithm.getSize()),
            (t += this.publicKey.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.algorithm.write(t), this.publicKey.write(t), t);
        }
        readBody(t) {
          return (this.algorithm.read(t), this.publicKey.read(t), this);
        }
        clean() {
          return this.algorithm.clean() && this.publicKey.clean();
        }
        toPEM() {
          return s.toPEM(this.encode(), "PUBLIC KEY");
        }
        fromPEM(t) {
          const e = s.fromPEM(t, "PUBLIC KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            algorithm: this.algorithm,
            publicKey: this.publicKey,
          };
        }
      }
      class Extensions extends n.Sequence {
        constructor() {
          (super(), (this.extensions = []));
        }
        getBodySize() {
          let t = 0;
          for (const e of this.extensions) t += e.getSize();
          return t;
        }
        writeBody(t) {
          for (const e of this.extensions) e.write(t);
          return t;
        }
        readBody(t) {
          for (const e of this.extensions) e.read(t);
          return this;
        }
        clean() {
          return 0 === this.extensions.length;
        }
        format() {
          return { type: this.constructor.name, extensions: this.extensions };
        }
      }
      class Extension extends n.Sequence {
        constructor() {
          (super(),
            (this.extnID = new n.OID()),
            (this.critical = new n.Bool().optional()),
            (this.extnValue = new n.OctString()));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.extnID.getSize()),
            (t += this.critical.getSize()),
            (t += this.extnValue.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.extnID.write(t),
            this.critical.write(t),
            this.extnValue.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.extnID.read(t),
            this.critical.read(t),
            this.extnValue.read(t),
            this
          );
        }
        clean() {
          return (
            this.extnID.clean() &&
            this.critical.clean() &&
            this.extnValue.clean()
          );
        }
        format() {
          return {
            type: this.constructor.name,
            extnID: this.extnID,
            critical: this.critical,
            extnValue: this.extnValue,
          };
        }
      }
      class DigestInfo extends n.Sequence {
        constructor(t, e) {
          (super(),
            (this.algorithm = new AlgorithmIdentifier(t)),
            this.algorithm.parameters.optional(!1),
            (this.digest = new n.OctString(e)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.algorithm.getSize()),
            (t += this.digest.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.algorithm.write(t), this.digest.write(t), t);
        }
        readBody(t) {
          return (this.algorithm.read(t), this.digest.read(t), this);
        }
        clean() {
          return this.algorithm.clean() && this.digest.clean();
        }
        format() {
          return {
            type: this.constructor.name,
            algorithm: this.algorithm,
            digest: this.digest,
          };
        }
      }
      ((e.Certificate = Certificate),
        (e.TBSCertificate = TBSCertificate),
        (e.AlgorithmIdentifier = AlgorithmIdentifier),
        (e.RDNSequence = RDNSequence),
        (e.RDN = RDN),
        (e.Attribute = Attribute),
        (e.Validity = Validity),
        (e.Time = Time),
        (e.SubjectPublicKeyInfo = SubjectPublicKeyInfo),
        (e.Extensions = Extensions),
        (e.Extension = Extension),
        (e.DigestInfo = DigestInfo));
    },
    3963: function (t, e, r) {
      "use strict";
      const i = r(3202),
        n = r(3356),
        s = r(3842);
      class PublicKeyInfo extends i.Sequence {
        constructor(t, e, r) {
          (super(),
            (this.algorithm = new s.AlgorithmIdentifier(t, e)),
            (this.publicKey = new i.BitString(r)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.algorithm.getSize()),
            (t += this.publicKey.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.algorithm.write(t), this.publicKey.write(t), t);
        }
        readBody(t) {
          return (this.algorithm.read(t), this.publicKey.read(t), this);
        }
        clean() {
          return this.algorithm.clean() && this.publicKey.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "PUBLIC KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "PUBLIC KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            algorithm: this.algorithm,
            publicKey: this.publicKey,
          };
        }
      }
      class PrivateKeyInfo extends i.Sequence {
        constructor(t, e, r, n) {
          (super(),
            (this.version = new i.Unsigned(t)),
            (this.algorithm = new s.AlgorithmIdentifier(e, r)),
            (this.privateKey = new i.OctString(n)));
        }
        get isRaw() {
          return !0;
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.version.getSize()),
            (t += this.algorithm.getSize()),
            (t += this.privateKey.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.version.write(t),
            this.algorithm.write(t),
            this.privateKey.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.version.read(t),
            this.algorithm.read(t),
            this.privateKey.read(t),
            this
          );
        }
        clean() {
          return (
            this.version.clean() &&
            this.algorithm.clean() &&
            this.privateKey.clean()
          );
        }
        toPEM() {
          return n.toPEM(this.encode(), "PRIVATE KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "PRIVATE KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            version: this.version,
            algorithm: this.algorithm,
            privateKey: this.privateKey,
          };
        }
      }
      class EncryptedPrivateKeyInfo extends i.Sequence {
        constructor(t, e, r) {
          (super(),
            (this.algorithm = new s.AlgorithmIdentifier(t, e)),
            (this.data = new i.OctString(r)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.algorithm.getSize()),
            (t += this.data.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.algorithm.write(t), this.data.write(t), t);
        }
        readBody(t) {
          return (this.algorithm.read(t), this.data.read(t), this);
        }
        clean() {
          return this.algorithm.clean() && this.data.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "ENCRYPTED PRIVATE KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "ENCRYPTED PRIVATE KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            algorithm: this.algorithm,
            data: this.data,
          };
        }
      }
      ((e.PublicKeyInfo = PublicKeyInfo),
        (e.PrivateKeyInfo = PrivateKeyInfo),
        (e.EncryptedPrivateKeyInfo = EncryptedPrivateKeyInfo));
    },
    4573: function (t, e, r) {
      "use strict";
      ((e.AEAD = r(10995)),
        (e.aes = r(10997)),
        (e.bcrypt = r(6816)),
        (e.BLAKE2b = r(4575)),
        (e.BLAKE2b160 = r(11001)),
        (e.BLAKE2b256 = r(11002)),
        (e.BLAKE2b384 = r(11003)),
        (e.BLAKE2b512 = r(11004)),
        (e.BLAKE2s = r(4576)),
        (e.BLAKE2s128 = r(11006)),
        (e.BLAKE2s160 = r(11007)),
        (e.BLAKE2s224 = r(11008)),
        (e.BLAKE2s256 = r(11009)),
        (e.BN = r(11010)),
        (e.box = r(11011)),
        (e.ChaCha20 = r(5662)),
        (e.cipher = r(4579)),
        (e.cleanse = r(11029)),
        (e.CSHAKE = r(4851)),
        (e.CSHAKE128 = r(11031)),
        (e.CSHAKE256 = r(11032)),
        (e.CtrDRBG = r(11033)),
        (e.dh = r(11034)),
        (e.dsa = r(6832)),
        (e.dsaies = r(11039)),
        (e.eb2k = r(6835)),
        (e.ecies = r(11041)),
        (e.ed25519 = r(5660)),
        (e.ed448 = r(6836)),
        (e.encoding = r(11043)),
        (e.GOST94 = r(11053)),
        (e.Hash160 = r(11054)),
        (e.Hash256 = r(11056)),
        (e.HashDRBG = r(11058)),
        (e.HKDF = r(11059)),
        (e.HmacDRBG = r(5664)),
        (e.Keccak = r(3843)),
        (e.Keccak224 = r(11060)),
        (e.Keccak256 = r(11061)),
        (e.Keccak384 = r(11062)),
        (e.Keccak512 = r(11063)),
        (e.KMAC = r(5669)),
        (e.KMAC128 = r(11064)),
        (e.KMAC256 = r(11065)),
        (e.MD2 = r(11066)),
        (e.MD4 = r(11067)),
        (e.MD5 = r(4853)),
        (e.MD5SHA1 = r(11069)),
        (e.merkle = r(11071)),
        (e.mrkl = r(11072)),
        (e.murmur3 = r(11073)),
        (e.p192 = r(11075)),
        (e.p224 = r(11078)),
        (e.p256 = r(6840)),
        (e.p384 = r(6841)),
        (e.p521 = r(6842)),
        (e.pbkdf2 = r(6843)),
        (e.pgp = r(11085)),
        (e.Poly1305 = r(6820)),
        (e.random = r(3201)),
        (e.RC4 = r(11087)),
        (e.RIPEMD160 = r(6844)),
        (e.rsa = r(5672)),
        (e.rsaies = r(11090)),
        (e.safe = r(6846)),
        (e.Salsa20 = r(6819)),
        (e.scrypt = r(11091)),
        (e.secp256k1 = r(11093)),
        (e.secretbox = r(4577)),
        (e.ssh = r(11096)),
        (e.SHA1 = r(5670)),
        (e.SHA224 = r(6845)),
        (e.SHA256 = r(3616)),
        (e.SHA384 = r(5671)),
        (e.SHA512 = r(4574)),
        (e.SHA3 = r(4580)),
        (e.SHA3_224 = r(11098)),
        (e.SHA3_256 = r(11099)),
        (e.SHA3_384 = r(11100)),
        (e.SHA3_512 = r(11101)),
        (e.SHAKE = r(5666)),
        (e.SHAKE128 = r(11102)),
        (e.SHAKE256 = r(6837)),
        (e.siphash = r(11103)),
        (e.Whirlpool = r(11105)),
        (e.x25519 = r(6821)),
        (e.x448 = r(11107)),
        (e.version = "4.1.0"),
        (e.native = e.SHA256.native));
    },
    4575: function (t, e, r) {
      "use strict";
      t.exports = r(11e3);
    },
    4576: function (t, e, r) {
      "use strict";
      t.exports = r(11005);
    },
    4579: function (t, e, r) {
      "use strict";
      t.exports = r(11021);
    },
    4851: function (t, e, r) {
      "use strict";
      (function (e) {
        const i = r(2769),
          n = r(3843),
          s = r(3012),
          o = e.alloc(0),
          a = e.alloc(200, 0);
        class CSHAKE extends n {
          constructor() {
            (super(), (this.pad = 4), (this.rate = 1088));
          }
          init(t, r, n) {
            if (
              (void 0 === t && (t = 256),
              void 0 === r && (r = null),
              void 0 === n && (n = null),
              null == r && (r = o),
              null == n && (n = o),
              i(t >>> 0 === t),
              i(128 === t || 256 === t),
              i(e.isBuffer(r)),
              i(e.isBuffer(n)),
              super.init(t),
              0 === r.length && 0 === n.length)
            )
              this.pad = 31;
            else {
              const e = 1600 - 2 * t,
                i = e / 8;
              (this.bytePad([r, n], i), (this.rate = e), (this.pad = 4));
            }
            return this;
          }
          final(t) {
            return super.final(this.pad, t);
          }
          bytePad(t, e) {
            (i(Array.isArray(t)), i(e >>> 0 === e), i(e > 0));
            let r = this.leftEncode(e);
            for (const i of t) r += this.encodeString(i);
            const n = e - (r % e);
            return (n === e || (r += this.zeroPad(n)), r);
          }
          encodeString(t) {
            i(e.isBuffer(t));
            const r = this.leftEncode(8 * t.length);
            return (this.update(t), r + t.length);
          }
          zeroPad(t) {
            (i(t >>> 0 === t), i(t <= 200));
            const e = a.slice(0, t);
            return (this.update(e), e.length);
          }
          leftEncode(t) {
            (i(t >>> 0 === t), i(t >= 0 && t < 22040));
            let r = t,
              n = 0;
            while (r && n < 4) ((n += 1), (r >>>= 8));
            0 === n && (n = 1);
            const s = e.allocUnsafe(n + 1);
            for (let e = 1; e <= n; e++) s[e] = t >>> (8 * (n - e));
            return ((s[0] = n), this.update(s), s.length);
          }
          rightEncode(t) {
            (i(t >>> 0 === t), i(t >= 0 && t < 22040));
            let r = t,
              n = 0;
            while (r && n < 4) ((n += 1), (r >>>= 8));
            0 === n && (n = 1);
            const s = e.allocUnsafe(n + 1);
            for (let e = 1; e <= n; e++) s[e - 1] = t >>> (8 * (n - e));
            return ((s[n] = n), this.update(s), s.length);
          }
          static hash() {
            return new CSHAKE();
          }
          static hmac(t, e, r, n) {
            (void 0 === t && (t = 256),
              i(t >>> 0 === t),
              i(128 === t || 256 === t));
            const o = (1600 - 2 * t) / 8;
            return new s(CSHAKE, o, [t, e, r], [n]);
          }
          static digest(t, e, r, i, n) {
            return (
              void 0 === e && (e = 256),
              CSHAKE.ctx.init(e, r, i).update(t).final(n)
            );
          }
          static root(t, r, n, s, o, a) {
            (void 0 === n && (n = 256),
              null == a && (a = 0),
              0 === a && (i(n >>> 0 === n), (a = n >>> 3)),
              i(a >>> 0 === a),
              i(e.isBuffer(t) && t.length === a),
              i(e.isBuffer(r) && r.length === a));
            const u = CSHAKE.ctx;
            return (u.init(n, s, o), u.update(t), u.update(r), u.final(a));
          }
          static multi(t, e, r, i, n, s, o) {
            void 0 === i && (i = 256);
            const a = CSHAKE.ctx;
            return (
              a.init(i, n, s),
              a.update(t),
              a.update(e),
              r && a.update(r),
              a.final(o)
            );
          }
          static mac(t, e, r, i, n, s) {
            return (
              void 0 === r && (r = 256),
              CSHAKE.hmac(r, i, n, s).init(e).update(t).final()
            );
          }
        }
        ((CSHAKE.native = n.native),
          (CSHAKE.id = "CSHAKE256"),
          (CSHAKE.size = 32),
          (CSHAKE.bits = 256),
          (CSHAKE.blockSize = 136),
          (CSHAKE.zero = e.alloc(32, 0)),
          (CSHAKE.ctx = new CSHAKE()),
          (t.exports = CSHAKE));
      }).call(this, r(2).Buffer);
    },
    5660: function (t, e, r) {
      "use strict";
      t.exports = r(11015);
    },
    5662: function (t, e, r) {
      "use strict";
      t.exports = r(6812);
    },
    5665: function (t, e, r) {
      "use strict";
      const i = r(3202),
        n = r(3356);
      class DSAParams extends i.Sequence {
        constructor(t, e, r) {
          (super(),
            (this.p = new i.Unsigned(t)),
            (this.q = new i.Unsigned(e)),
            (this.g = new i.Unsigned(r)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.p.getSize()),
            (t += this.q.getSize()),
            (t += this.g.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.p.write(t), this.q.write(t), this.g.write(t), t);
        }
        readBody(t) {
          return (this.p.read(t), this.q.read(t), this.g.read(t), this);
        }
        clean() {
          return this.p.clean() && this.q.clean() && this.g.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "DSA PARAMETERS");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DSA PARAMETERS");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            p: this.p,
            q: this.q,
            g: this.g,
          };
        }
      }
      class DSAPublicKey extends i.Sequence {
        constructor(t, e, r, n) {
          (super(),
            (this.y = new i.Unsigned(t)),
            (this.p = new i.Unsigned(e)),
            (this.q = new i.Unsigned(r)),
            (this.g = new i.Unsigned(n)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.y.getSize()),
            (t += this.p.getSize()),
            (t += this.q.getSize()),
            (t += this.g.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.y.write(t),
            this.p.write(t),
            this.q.write(t),
            this.g.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.y.read(t),
            this.p.read(t),
            this.q.read(t),
            this.g.read(t),
            this
          );
        }
        clean() {
          return (
            this.y.clean() && this.p.clean() && this.q.clean() && this.g.clean()
          );
        }
        toPEM() {
          return n.toPEM(this.encode(), "DSA PUBLIC KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DSA PUBLIC KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            y: this.y,
            p: this.p,
            q: this.q,
            g: this.g,
          };
        }
      }
      class DSAPrivateKey extends i.Sequence {
        constructor(t, e, r, n, s, o) {
          (super(),
            (this.version = new i.Unsigned(t)),
            (this.p = new i.Unsigned(e)),
            (this.q = new i.Unsigned(r)),
            (this.g = new i.Unsigned(n)),
            (this.y = new i.Unsigned(s)),
            (this.x = new i.Unsigned(o)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.version.getSize()),
            (t += this.p.getSize()),
            (t += this.q.getSize()),
            (t += this.g.getSize()),
            (t += this.y.getSize()),
            (t += this.x.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.version.write(t),
            this.p.write(t),
            this.q.write(t),
            this.g.write(t),
            this.y.write(t),
            this.x.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.version.read(t),
            this.p.read(t),
            this.q.read(t),
            this.g.read(t),
            this.y.read(t),
            this.x.read(t),
            this
          );
        }
        clean() {
          return (
            this.p.clean() &&
            this.q.clean() &&
            this.g.clean() &&
            this.y.clean() &&
            this.x.clean()
          );
        }
        toPEM() {
          return n.toPEM(this.encode(), "DSA PRIVATE KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DSA PRIVATE KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            version: this.version,
            p: this.p,
            q: this.q,
            g: this.g,
            y: this.y,
            x: this.x,
          };
        }
      }
      ((e.DSAParams = DSAParams),
        (e.DSAPublicKey = DSAPublicKey),
        (e.DSAPrivateKey = DSAPrivateKey));
    },
    5667: function (t, e, r) {
      "use strict";
      const i = r(3202),
        n = r(3356);
      class RSAPublicKey extends i.Sequence {
        constructor(t, e) {
          (super(), (this.n = new i.Unsigned(t)), (this.e = new i.Unsigned(e)));
        }
        getBodySize() {
          let t = 0;
          return ((t += this.n.getSize()), (t += this.e.getSize()), t);
        }
        writeBody(t) {
          return (this.n.write(t), this.e.write(t), t);
        }
        readBody(t) {
          return (this.n.read(t), this.e.read(t), this);
        }
        clean() {
          return this.n.clean() && this.e.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "RSA PUBLIC KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "RSA PUBLIC KEY");
          return this.decode(e);
        }
        format() {
          return { type: this.constructor.name, n: this.n, e: this.e };
        }
      }
      class RSAPrivateKey extends i.Sequence {
        constructor(t, e, r, n, s, o, a, u, h) {
          (super(),
            (this.version = new i.Unsigned(t)),
            (this.n = new i.Unsigned(e)),
            (this.e = new i.Unsigned(r)),
            (this.d = new i.Unsigned(n)),
            (this.p = new i.Unsigned(s)),
            (this.q = new i.Unsigned(o)),
            (this.dp = new i.Unsigned(a)),
            (this.dq = new i.Unsigned(u)),
            (this.qi = new i.Unsigned(h)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.version.getSize()),
            (t += this.n.getSize()),
            (t += this.e.getSize()),
            (t += this.d.getSize()),
            (t += this.p.getSize()),
            (t += this.q.getSize()),
            (t += this.dp.getSize()),
            (t += this.dq.getSize()),
            (t += this.qi.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.version.write(t),
            this.n.write(t),
            this.e.write(t),
            this.d.write(t),
            this.p.write(t),
            this.q.write(t),
            this.dp.write(t),
            this.dq.write(t),
            this.qi.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.version.read(t),
            this.n.read(t),
            this.e.read(t),
            this.d.read(t),
            this.p.read(t),
            this.q.read(t),
            this.dp.read(t),
            this.dq.read(t),
            this.qi.read(t),
            this
          );
        }
        clean() {
          return (
            this.n.clean() &&
            this.e.clean() &&
            this.d.clean() &&
            this.p.clean() &&
            this.q.clean() &&
            this.dp.clean() &&
            this.dq.clean() &&
            this.qi.clean()
          );
        }
        toPEM() {
          return n.toPEM(this.encode(), "RSA PRIVATE KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "RSA PRIVATE KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            version: this.version,
            n: this.n,
            e: this.e,
            d: this.d,
            p: this.p,
            q: this.q,
            dp: this.dp,
            dq: this.dq,
            qi: this.qi,
          };
        }
      }
      ((e.RSAPublicKey = RSAPublicKey), (e.RSAPrivateKey = RSAPrivateKey));
    },
    5668: function (t, e, r) {
      "use strict";
      const i = r(3202),
        n = r(3356);
      class ECPrivateKey extends i.Sequence {
        constructor(t, e, r, n) {
          (super(),
            (this.version = new i.Unsigned(t)),
            (this.privateKey = new i.OctString(e)),
            (this.namedCurveOID = new i.OID(r).explicit(0).optional()),
            (this.publicKey = new i.BitString(n).explicit(1).optional()));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.version.getSize()),
            (t += this.privateKey.getSize()),
            (t += this.namedCurveOID.getSize()),
            (t += this.publicKey.getSize()),
            t
          );
        }
        writeBody(t) {
          return (
            this.version.write(t),
            this.privateKey.write(t),
            this.namedCurveOID.write(t),
            this.publicKey.write(t),
            t
          );
        }
        readBody(t) {
          return (
            this.version.read(t),
            this.privateKey.read(t),
            this.namedCurveOID.read(t),
            this.publicKey.read(t),
            this
          );
        }
        clean() {
          return (
            this.version.clean() &&
            this.privateKey.clean() &&
            this.namedCurveOID.clean() &&
            this.publicKey.clean()
          );
        }
        toPEM() {
          return n.toPEM(this.encode(), "EC PRIVATE KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "EC PRIVATE KEY");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            version: this.version,
            privateKey: this.privateKey,
            namedCurveOID: this.namedCurveOID,
            publicKey: this.publicKey,
          };
        }
      }
      class ECDSASignature extends i.Sequence {
        constructor(t, e) {
          (super(), (this.r = new i.Unsigned(t)), (this.s = new i.Unsigned(e)));
        }
        getBodySize() {
          let t = 0;
          return ((t += this.r.getSize()), (t += this.s.getSize()), t);
        }
        writeBody(t) {
          return (this.r.write(t), this.s.write(t), t);
        }
        readBody(t) {
          return (this.r.read(t), this.s.read(t), this);
        }
        clean() {
          return this.r.clean() && this.s.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "EC SIGNATURE");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "EC SIGNATURE");
          return this.decode(e);
        }
        format() {
          return { type: this.constructor.name, r: this.r, s: this.s };
        }
      }
      ((e.ECPrivateKey = ECPrivateKey), (e.ECDSASignature = ECDSASignature));
    },
    6816: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(4574),
          s = r(6818),
          o = t.from("OrpheanBeholderScryDoubt", "binary"),
          a = 6,
          u = 24,
          h = 16,
          c = 23,
          l = t.from("OxychromaticBlowfishSwatDynamite", "binary"),
          f = 8,
          d = 32,
          g = t.alloc(1, 0);
        function p(e, r, n) {
          if (
            ("string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            null == r && (r = t.alloc(0)),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(n >>> 0 === n),
            n < 4 || n > 31)
          )
            throw new RangeError("Invalid rounds.");
          return B(e, r, n, t.alloc(u));
        }
        function E(e, r, n, s) {
          if (
            (void 0 === s && (s = "b"),
            "string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(n >>> 0 === n),
            i("string" === typeof s),
            r.length !== h)
          )
            throw new RangeError("Invalid salt length.");
          switch (s) {
            case "a":
              ((e = t.concat([e, g])), (e = e.slice(0, 255 & e.length)));
              break;
            case "b":
              e = e.length > 72 ? e.slice(0, 73) : t.concat([e, g]);
              break;
            default:
              throw new Error("Invalid minor version.");
          }
          return p(e, r, n).slice(0, c);
        }
        function y(t, e, r, i) {
          if ((void 0 === i && (i = "b"), "string" === typeof e)) {
            const [t, r] = T(e, 0, h);
            if (t !== e.length || null == r)
              throw new Error("Invalid salt string.");
            e = r;
          }
          const n = E(t, e, r, i);
          return A(i, r, e, n);
        }
        function w(t, e) {
          const [r, i, n, s] = b(e),
            o = E(t, n, i, r);
          let a = 0;
          for (let u = 0; u < c; u++) a |= o[u] ^ s[u];
          return (a - 1) >>> 31 !== 0;
        }
        function S(e, r, n) {
          if (
            ("string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            null == r && (r = t.alloc(0)),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(n >>> 0 === n),
            n < 4 || n > 31)
          )
            throw new RangeError("Invalid rounds.");
          return v(e, r, n, t.alloc(d));
        }
        function m(e, r, s, o) {
          ("string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            null == r && (r = t.alloc(0)),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(s >>> 0 === s),
            i(o >>> 0 === o));
          const a = t.alloc(d),
            u = t.alloc(d),
            h = t.alloc(r.length + 4),
            c = t.alloc(o);
          if (
            s < 1 ||
            0 === e.length ||
            0 === r.length ||
            0 === o ||
            o > a.length ** 2 ||
            r.length > 1 << 20
          )
            throw new Error("Invalid bcrypt parameters.");
          const l = ((o + a.length - 1) / a.length) >>> 0,
            f = ((o + l - 1) / l) >>> 0;
          r.copy(h, 0);
          const g = n.digest(e);
          let p = t.alloc(0),
            E = o,
            y = f;
          for (let t = 1; E > 0; t++) {
            ((h[r.length + 0] = t >>> 24),
              (h[r.length + 1] = t >>> 16),
              (h[r.length + 2] = t >>> 8),
              (h[r.length + 3] = t),
              (p = n.digest(h)),
              v(g, p, 6, u),
              u.copy(a, 0));
            for (let t = 1; t < s; t++) {
              ((p = n.digest(u)), v(g, p, 6, u));
              for (let t = 0; t < a.length; t++) a[t] ^= u[t];
            }
            y = Math.min(y, E);
            let e = 0;
            for (; e < y; e++) {
              const r = e * l + (t - 1);
              if (r >= o) break;
              c[r] = a[e];
            }
            E -= e;
          }
          return c;
        }
        function B(t, e, r, i) {
          const n = new s(),
            u = new Uint32Array(a);
          n.init(t, e);
          const h = 2 ** r;
          for (let s = 0; s < h; s++) (n.expand0state(t), n.expand0state(e));
          for (let s = 0; s < a; s++) u[s] = n.stream2word(o);
          for (let s = 0; s < 64; s++) n.enc(u);
          for (let s = 0; s < a; s++)
            ((i[4 * s + 0] = u[s] >>> 24),
              (i[4 * s + 1] = u[s] >>> 16),
              (i[4 * s + 2] = u[s] >>> 8),
              (i[4 * s + 3] = u[s]));
          return i;
        }
        function v(t, e, r, i) {
          const n = new s(),
            o = new Uint32Array(f);
          n.init(t, e);
          const a = 2 ** r;
          for (let s = 0; s < a; s++) (n.expand0state(e), n.expand0state(t));
          for (let s = 0; s < f; s++) o[s] = n.stream2word(l);
          for (let s = 0; s < 64; s++) n.enc(o);
          for (let s = 0; s < f; s++)
            ((i[4 * s + 3] = o[s] >>> 24),
              (i[4 * s + 2] = o[s] >>> 16),
              (i[4 * s + 1] = o[s] >>> 8),
              (i[4 * s + 0] = o[s]));
          return i;
        }
        function A(e, r, n, s) {
          (i("string" === typeof e),
            i(r >>> 0 === r),
            i(t.isBuffer(n)),
            i(t.isBuffer(s)),
            i("a" === e || "b" === e),
            i(r >= 4 && r <= 31),
            i(n.length === h),
            i(s.length === c));
          let o = r.toString(10);
          return (r < 10 && (o = "0" + o), `$2${e}$${o}$${z(n)}${z(s)}`);
        }
        function b(t) {
          if ((i("string" === typeof t), t.length < 46))
            throw new Error("Invalid bcrypt string.");
          if ("$" !== t[0] || "2" !== t[1])
            throw new Error("Invalid major version.");
          const e = t[2];
          switch (e) {
            case "a":
            case "b":
              break;
            default:
              throw new Error("Invalid minor version.");
          }
          if ("$" !== t[3]) throw new Error("Invalid bcrypt string.");
          const r = t.charCodeAt(4) - 48,
            n = t.charCodeAt(5) - 48;
          if (r < 0 || r > 9 || n < 0 || n > 9)
            throw new Error("Invalid bcrypt string.");
          const s = 10 * r + n;
          if (s < 4 || s > 31) throw new Error("Invalid log rounds.");
          if ("$" !== t[6]) throw new Error("Invalid bcrypt string.");
          let o,
            a,
            u = 7;
          if ((([u, o] = T(t, u, h)), null == o))
            throw new Error("Invalid salt.");
          if ((([u, a] = T(t, u, c)), null == a))
            throw new Error("Invalid hash.");
          if (u !== t.length) throw new Error("Invalid bcrypt string.");
          return [e, s, o, a];
        }
        const I =
            "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          K = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 54, 55, 56,
            57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1, -1, 2, 3, 4, 5,
            6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30, 31, 32, 33, 34,
            35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
            52, 53, -1, -1, -1, -1, -1,
          ];
        function z(e) {
          i(t.isBuffer(e));
          let r,
            n,
            s = 0,
            o = "";
          while (s < e.length) {
            if (
              ((r = e[s++]),
              (o += I[r >>> 2]),
              (r = (3 & r) << 4),
              s >= e.length)
            ) {
              o += I[r];
              break;
            }
            if (
              ((n = e[s++]),
              (r |= (n >>> 4) & 15),
              (o += I[r]),
              (r = (15 & n) << 2),
              s >= e.length)
            ) {
              o += I[r];
              break;
            }
            ((n = e[s++]), (r |= (n >>> 6) & 3), (o += I[r]), (o += I[63 & n]));
          }
          return o;
        }
        function T(e, r, n) {
          (i("string" === typeof e), i(r >>> 0 === r), i(n >>> 0 === n));
          const s = t.alloc(n);
          let o,
            a,
            u,
            h,
            c = 0;
          while (c < n) {
            if (((o = P(e, r++)), -1 === o)) return [r, null];
            if (((a = P(e, r++)), -1 === a)) return [r, null];
            if (((s[c++] = (o << 2) | ((48 & a) >>> 4)), c >= n)) break;
            if (((u = P(e, r++)), -1 === u)) return [r, null];
            if (((s[c++] = ((15 & a) << 4) | ((60 & u) >>> 2)), c >= n)) break;
            if (((h = P(e, r++)), -1 === h)) return [r, null];
            s[c++] = ((3 & u) << 6) | h;
          }
          return [r, s];
        }
        function P(t, e) {
          if (e >= t.length) return -1;
          const r = t.charCodeAt(e);
          return 65408 & r ? -1 : K[r];
        }
        ((e.native = 0),
          (e.hash192 = p),
          (e.derive = E),
          (e.generate = y),
          (e.verify = w),
          (e.hash256 = S),
          (e.pbkdf = m));
      }).call(this, r(2).Buffer);
    },
    6829: function (t, e, r) {
      "use strict";
      const i = r(2769);
      function* n(t) {
        i("string" === typeof t);
        let e = 0,
          r = 0,
          n = 0;
        for (
          t.length > 0 && 65279 === t.charCodeAt(0) && ((e += 1), (r += 1));
          e < t.length;
          e++
        ) {
          const i = t.charCodeAt(e);
          switch (i) {
            case 13:
            case 10:
            case 133:
              if (r !== e) {
                const i = s(t.substring(r, e));
                i.length > 0 && (yield [n, i]);
              }
              (13 === i &&
                e + 1 < t.length &&
                10 === t.charCodeAt(e + 1) &&
                (e += 1),
                (r = e + 1),
                (n += 1));
              break;
          }
        }
        if (r !== e) {
          const i = s(t.substring(r, e));
          i.length > 0 && (yield [n, i]);
        }
      }
      function s(t) {
        i("string" === typeof t);
        for (let e = t.length - 1; e >= 0; e--) {
          const r = t.charCodeAt(e);
          switch (r) {
            case 9:
            case 11:
            case 12:
            case 32:
            case 160:
              continue;
          }
          return t.substring(0, e + 1);
        }
        return t;
      }
      t.exports = n;
    },
    6831: function (t, e, r) {
      "use strict";
      const i = r(3202),
        n = r(3356);
      class DHParams extends i.Sequence {
        constructor(t, e) {
          (super(), (this.p = new i.Unsigned(t)), (this.g = new i.Unsigned(e)));
        }
        getBodySize() {
          let t = 0;
          return ((t += this.p.getSize()), (t += this.g.getSize()), t);
        }
        writeBody(t) {
          return (this.p.write(t), this.g.write(t), t);
        }
        readBody(t) {
          return (this.p.read(t), this.g.read(t), this);
        }
        clean() {
          return this.p.clean() && this.g.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "DH PARAMETERS");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DH PARAMETERS");
          return this.decode(e);
        }
        format() {
          return { type: this.constructor.name, p: this.p, g: this.g };
        }
      }
      e.DHParams = DHParams;
    },
    6832: function (t, e, r) {
      "use strict";
      t.exports = r(11037);
    },
    6834: function (t, e, r) {
      "use strict";
      const i = r(3202),
        n = r(3356);
      class DSAParams extends i.Sequence {
        constructor(t, e, r) {
          (super(),
            (this.p = new i.Unsigned(t)),
            (this.q = new i.Unsigned(e)),
            (this.g = new i.Unsigned(r)));
        }
        getBodySize() {
          let t = 0;
          return (
            (t += this.p.getSize()),
            (t += this.q.getSize()),
            (t += this.g.getSize()),
            t
          );
        }
        writeBody(t) {
          return (this.p.write(t), this.q.write(t), this.g.write(t), t);
        }
        readBody(t) {
          return (this.p.read(t), this.q.read(t), this.g.read(t), this);
        }
        clean() {
          return this.p.clean() && this.q.clean() && this.g.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "DSA PARAMETERS");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DSA PARAMETERS");
          return this.decode(e);
        }
        format() {
          return {
            type: this.constructor.name,
            p: this.p,
            q: this.q,
            g: this.g,
          };
        }
      }
      class DSAPublicKey extends i.Unsigned {
        constructor(t) {
          super(t);
        }
        get y() {
          return this.value;
        }
        set y(t) {
          this.value = t;
        }
        toPEM() {
          return n.toPEM(this.encode(), "DSA PUBLIC KEY");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DSA PUBLIC KEY");
          return this.decode(e);
        }
      }
      class DSASignature extends i.Sequence {
        constructor(t, e) {
          (super(), (this.r = new i.Unsigned(t)), (this.s = new i.Unsigned(e)));
        }
        getBodySize() {
          let t = 0;
          return ((t += this.r.getSize()), (t += this.s.getSize()), t);
        }
        writeBody(t) {
          return (this.r.write(t), this.s.write(t), t);
        }
        readBody(t) {
          return (this.r.read(t), this.s.read(t), this);
        }
        clean() {
          return this.r.clean() && this.s.clean();
        }
        toPEM() {
          return n.toPEM(this.encode(), "DSA SIGNATURE");
        }
        fromPEM(t) {
          const e = n.fromPEM(t, "DSA SIGNATURE");
          return this.decode(e);
        }
        format() {
          return { type: this.constructor.name, r: this.r, s: this.s };
        }
      }
      ((e.DSAParams = DSAParams),
        (e.DSAPublicKey = DSAPublicKey),
        (e.DSASignature = DSASignature));
    },
    6835: function (t, e, r) {
      "use strict";
      (function (t) {
        const i = r(2769),
          n = r(4853);
        function s(e, r, s, o) {
          if (
            ("string" === typeof e && (e = t.from(e, "utf8")),
            "string" === typeof r && (r = t.from(r, "utf8")),
            null == r && (r = t.alloc(0)),
            null == o && (o = 0),
            i(t.isBuffer(e)),
            i(t.isBuffer(r)),
            i(s >>> 0 === s),
            i(o >>> 0 === o),
            r.length > 8 && (r = r.slice(0, 8)),
            0 !== r.length && 8 !== r.length)
          )
            throw new RangeError("Salt must be at least 8 bytes.");
          const a = t.alloc(s),
            u = t.alloc(o);
          let h = t.alloc(0);
          while (s > 0 || o > 0) {
            let t = 0;
            if (((h = n.multi(h, e, r)), s > 0)) {
              const e = a.length - s;
              ((t = Math.min(s, h.length)), h.copy(a, e, 0, t), (s -= t));
            }
            if (t < h.length && o > 0) {
              const e = u.length - o,
                r = Math.min(o, h.length - t);
              (h.copy(u, e, t, t + r), (o -= r));
            }
          }
          return (h.fill(0), [a, u]);
        }
        ((e.native = 0), (e.derive = s));
      }).call(this, r(2).Buffer);
    },
    6836: function (t, e, r) {
      "use strict";
      t.exports = r(11042);
    },
    6838: function (t, e, r) {
      "use strict";
      const i = r(2769),
        { PEMBlock: n } = r(3356),
        s = r(4579),
        o = r(3201),
        a = r(6835);
      function u(t, e, r) {
        if (
          (i(t instanceof n),
          i("string" === typeof e),
          i("string" === typeof r),
          t.isEncrypted())
        )
          throw new Error("PEM block is already encrypted.");
        const { keySize: u, ivSize: h } = s.get(e),
          c = o.randomBytes(h),
          [l] = a.derive(r, c, u, h);
        return (
          (t.data = s.encrypt(e, l, c, t.data)),
          t.setProcType(4, "ENCRYPTED"),
          t.setDEKInfo(e, c),
          t
        );
      }
      function h(t, e) {
        if ((i(t instanceof n), i("string" === typeof e), !t.isEncrypted()))
          throw new Error("PEM block is not encrypted.");
        const r = t.getDEKInfo();
        if (!r) throw new Error("DEK-Info not found.");
        const { keySize: o, ivSize: u } = s.get(r.name),
          [h] = a.derive(e, r.iv, o, u);
        return (
          (t.data = s.decrypt(r.name, h, r.iv, t.data)),
          t.unsetProcType(),
          t.unsetDEKInfo(),
          t
        );
      }
      ((e.encrypt = u), (e.decrypt = h));
    },
  },
]);
