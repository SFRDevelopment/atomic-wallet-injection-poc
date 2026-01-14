(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [259],
  {
    10996: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769),
          n = e(6812),
          s = e(6813);
        class AEAD {
          constructor() {
            ((this.chacha20 = new n()),
              (this.poly1305 = new s()),
              (this.aadLen = 0),
              (this.cipherLen = 0),
              (this.hasCipher = !1),
              (this.polyKey = null));
          }
          init(t, e) {
            (r(i.isBuffer(t)), r(i.isBuffer(e)));
            const n = i.alloc(32, 0);
            return (
              this.chacha20.init(t, e, 0),
              this.chacha20.encrypt(n),
              this.poly1305.init(n),
              this.chacha20.encrypt(i.alloc(32, 0)),
              (this.polyKey = n),
              (this.aadLen = 0),
              (this.cipherLen = 0),
              (this.hasCipher = !1),
              this
            );
          }
          aad(t) {
            return (
              r(!this.hasCipher, "Cannot update aad."),
              this.poly1305.update(t),
              (this.aadLen += t.length),
              this
            );
          }
          encrypt(t) {
            return (
              this.hasCipher || this._pad16(this.aadLen),
              this.chacha20.encrypt(t),
              this.poly1305.update(t),
              (this.cipherLen += t.length),
              (this.hasCipher = !0),
              t
            );
          }
          decrypt(t) {
            return (
              r(i.isBuffer(t)),
              this.hasCipher || this._pad16(this.aadLen),
              (this.cipherLen += t.length),
              (this.hasCipher = !0),
              this.poly1305.update(t),
              this.chacha20.encrypt(t),
              t
            );
          }
          auth(t) {
            return (
              r(i.isBuffer(t)),
              this.hasCipher || this._pad16(this.aadLen),
              (this.cipherLen += t.length),
              (this.hasCipher = !0),
              this.poly1305.update(t),
              t
            );
          }
          final() {
            const t = i.allocUnsafe(16);
            let e, r;
            return (
              (e = this.aadLen % 4294967296),
              (r = (this.aadLen - e) / 4294967296),
              h(t, e, 0),
              h(t, r, 4),
              (e = this.cipherLen % 4294967296),
              (r = (this.cipherLen - e) / 4294967296),
              h(t, e, 8),
              h(t, r, 12),
              this.hasCipher || this._pad16(this.aadLen),
              this._pad16(this.cipherLen),
              this.poly1305.update(t),
              this.poly1305.final()
            );
          }
          _pad16(t) {
            if (((t %= 16), 0 === t)) return;
            const e = i.allocUnsafe(16 - t);
            (e.fill(0), this.poly1305.update(e));
          }
          static encrypt(t, i, e, r) {
            const n = new AEAD();
            return (n.init(t, i), r && n.aad(r), n.encrypt(e), n.final());
          }
          static decrypt(t, i, e, r, n) {
            const s = new AEAD();
            return (
              s.init(t, i),
              n && s.aad(n),
              s.decrypt(e),
              AEAD.verify(s.final(), r)
            );
          }
          static auth(t, i, e, r, n) {
            const s = new AEAD();
            return (
              s.init(t, i),
              n && s.aad(n),
              s.auth(e),
              AEAD.verify(s.final(), r)
            );
          }
          static verify(t, i) {
            return s.verify(t, i);
          }
        }
        function h(t, i, e) {
          return (
            (t[e++] = i),
            (i >>>= 8),
            (t[e++] = i),
            (i >>>= 8),
            (t[e++] = i),
            (i >>>= 8),
            (t[e++] = i),
            e
          );
        }
        ((AEAD.native = n.native), (t.exports = AEAD));
      }).call(this, e(2).Buffer);
    },
    10998: function (t, i, e) {
      "use strict";
      (function (t) {
        const r = e(6814),
          { CBCCipher: n, CBCDecipher: s } = e(6815);
        function h(t, i, e) {
          const s = new n(new r(256));
          return (s.init(i, e), u(s.update(t), s.final()));
        }
        function o(t, i, e) {
          const n = new s(new r(256));
          return (n.init(i, e), u(n.update(t), n.final()));
        }
        function u(i, e) {
          const r = t.allocUnsafe(i.length + e.length);
          return (i.copy(r, 0), e.copy(r, i.length), r);
        }
        ((i.native = 0), (i.encipher = h), (i.decipher = o));
      }).call(this, e(2).Buffer);
    },
    11e3: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769),
          n = e(3012),
          s = 2147483648,
          h = new Uint32Array([
            4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
            1013904242, 1595750129, 2773480762, 2917565137, 1359893119,
            725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225,
          ]),
          o = new Uint8Array([
            0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 28, 20,
            8, 16, 18, 30, 26, 12, 2, 24, 0, 4, 22, 14, 10, 6, 22, 16, 24, 0,
            10, 4, 30, 26, 20, 28, 6, 12, 14, 2, 18, 8, 14, 18, 6, 2, 26, 24,
            22, 28, 4, 12, 10, 20, 8, 0, 30, 16, 18, 0, 10, 14, 4, 8, 20, 30,
            28, 2, 22, 24, 12, 16, 6, 26, 4, 24, 12, 20, 0, 22, 16, 6, 8, 26,
            14, 10, 30, 28, 2, 18, 24, 10, 2, 30, 28, 26, 8, 20, 0, 14, 12, 6,
            18, 4, 16, 22, 26, 22, 14, 28, 24, 2, 6, 18, 10, 0, 30, 8, 16, 12,
            4, 20, 12, 30, 28, 18, 22, 6, 0, 16, 24, 4, 26, 14, 2, 8, 20, 10,
            20, 4, 16, 8, 14, 12, 2, 10, 30, 22, 18, 28, 6, 24, 26, 0, 0, 2, 4,
            6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 28, 20, 8, 16, 18,
            30, 26, 12, 2, 24, 0, 4, 22, 14, 10, 6,
          ]);
        class BLAKE2b {
          constructor() {
            ((this.state = new Uint32Array(16)),
              (this.V = new Uint32Array(32)),
              (this.M = new Uint32Array(32)),
              (this.block = i.allocUnsafe(128)),
              (this.size = 32),
              (this.count = 0),
              (this.pos = s));
          }
          init(t, e) {
            if (
              (void 0 === t && (t = 32),
              void 0 === e && (e = null),
              r(t >>> 0 === t),
              r(!e || i.isBuffer(e)),
              0 === t || t > 64)
            )
              throw new Error("Bad output length.");
            if (e && e.length > 64) throw new Error("Bad key length.");
            const n = e ? e.length : 0;
            for (let i = 0; i < 16; i++) this.state[i] = h[i];
            if (
              ((this.size = t),
              (this.count = 0),
              (this.pos = 0),
              (this.state[0] ^= 16842752 ^ (n << 8) ^ this.size),
              n > 0)
            ) {
              const t = i.alloc(128, 0);
              (e.copy(t, 0), this.update(t));
            }
            return this;
          }
          update(t) {
            (r(i.isBuffer(t)),
              r(!(this.pos & s), "Context already finalized."));
            let e = 0,
              n = t.length;
            if (n > 0) {
              const i = this.pos,
                r = 128 - i;
              if (n > r) {
                ((this.pos = 0),
                  t.copy(this.block, i, e, e + r),
                  (this.count += 128),
                  this.compress(this.block, 0, !1),
                  (e += r),
                  (n -= r));
                while (n > 128)
                  ((this.count += 128),
                    this.compress(t, e, !1),
                    (e += 128),
                    (n -= 128));
              }
              (t.copy(this.block, this.pos, e, e + n), (this.pos += n));
            }
            return this;
          }
          final() {
            (r(!(this.pos & s), "Context already finalized."),
              (this.count += this.pos),
              this.block.fill(0, this.pos, 128),
              this.compress(this.block, 0, !0),
              (this.pos = s));
            const t = i.allocUnsafe(this.size);
            for (let i = 0; i < this.size; i++)
              t[i] = this.state[i >>> 2] >>> (8 * (3 & i));
            for (let i = 0; i < 16; i++) this.state[i] = 0;
            for (let i = 0; i < 32; i++) ((this.V[i] = 0), (this.M[i] = 0));
            for (let i = 0; i < 128; i++) this.block[i] = 0;
            return t;
          }
          compress(t, i, e) {
            const { V: r, M: n } = this;
            for (let s = 0; s < 16; s++)
              ((r[s] = this.state[s]), (r[s + 16] = h[s]));
            ((r[24] ^= this.count),
              (r[25] ^= this.count * (1 / 4294967296)),
              (r[26] ^= 0),
              (r[27] ^= 0),
              e && ((r[28] ^= -1), (r[29] ^= -1), (r[29] ^= 0), (r[30] ^= 0)));
            for (let s = 0; s < 32; s++) ((n[s] = f(t, i)), (i += 4));
            for (let s = 0; s < 12; s++)
              (a(r, n, 0, 8, 16, 24, o[16 * s + 0], o[16 * s + 1]),
                a(r, n, 2, 10, 18, 26, o[16 * s + 2], o[16 * s + 3]),
                a(r, n, 4, 12, 20, 28, o[16 * s + 4], o[16 * s + 5]),
                a(r, n, 6, 14, 22, 30, o[16 * s + 6], o[16 * s + 7]),
                a(r, n, 0, 10, 20, 30, o[16 * s + 8], o[16 * s + 9]),
                a(r, n, 2, 12, 22, 24, o[16 * s + 10], o[16 * s + 11]),
                a(r, n, 4, 14, 16, 26, o[16 * s + 12], o[16 * s + 13]),
                a(r, n, 6, 8, 18, 28, o[16 * s + 14], o[16 * s + 15]));
            for (let s = 0; s < 16; s++) this.state[s] ^= r[s] ^ r[s + 16];
          }
          static hash() {
            return new BLAKE2b();
          }
          static hmac(t) {
            return (void 0 === t && (t = 32), new n(BLAKE2b, 128, [t]));
          }
          static digest(t, i, e) {
            (void 0 === i && (i = 32), void 0 === e && (e = null));
            const r = BLAKE2b.ctx;
            return (r.init(i, e), r.update(t), r.final());
          }
          static root(t, e, n) {
            (void 0 === n && (n = 32),
              r(i.isBuffer(t) && t.length === n),
              r(i.isBuffer(e) && e.length === n));
            const s = BLAKE2b.ctx;
            return (s.init(n), s.update(t), s.update(e), s.final());
          }
          static multi(t, i, e, r) {
            void 0 === r && (r = 32);
            const n = BLAKE2b.ctx;
            return (
              n.init(r),
              n.update(t),
              n.update(i),
              e && n.update(e),
              n.final()
            );
          }
          static mac(t, i, e) {
            return (
              void 0 === e && (e = 32),
              BLAKE2b.hmac(e).init(i).update(t).final()
            );
          }
        }
        function u(t, i, e) {
          const r = t[i + 0] + t[e + 0],
            n = t[i + 1] + t[e + 1],
            s = (r >= 4294967296) | 0;
          ((t[i + 0] = r), (t[i + 1] = n + s));
        }
        function l(t, i, e, r) {
          const n = t[i + 0] + e,
            s = t[i + 1] + r,
            h = (n >= 4294967296) | 0;
          ((t[i + 0] = n), (t[i + 1] = s + h));
        }
        function a(t, i, e, r, n, s, h, o) {
          const a = i[h + 0],
            f = i[h + 1],
            c = i[o + 0],
            d = i[o + 1];
          (u(t, e, r), l(t, e, a, f));
          const m = t[s + 0] ^ t[e + 0],
            g = t[s + 1] ^ t[e + 1];
          ((t[s + 0] = g), (t[s + 1] = m), u(t, n, s));
          const p = t[r + 0] ^ t[n + 0],
            w = t[r + 1] ^ t[n + 1];
          ((t[r + 0] = (p >>> 24) ^ (w << 8)),
            (t[r + 1] = (w >>> 24) ^ (p << 8)),
            u(t, e, r),
            l(t, e, c, d));
          const M = t[s + 0] ^ t[e + 0],
            b = t[s + 1] ^ t[e + 1];
          ((t[s + 0] = (M >>> 16) ^ (b << 16)),
            (t[s + 1] = (b >>> 16) ^ (M << 16)),
            u(t, n, s));
          const B = t[r + 0] ^ t[n + 0],
            A = t[r + 1] ^ t[n + 1];
          ((t[r + 0] = (A >>> 31) ^ (B << 1)),
            (t[r + 1] = (B >>> 31) ^ (A << 1)));
        }
        function f(t, i) {
          return t[i++] + 256 * t[i++] + 65536 * t[i++] + 16777216 * t[i];
        }
        ((BLAKE2b.native = 0),
          (BLAKE2b.id = "BLAKE2B256"),
          (BLAKE2b.size = 32),
          (BLAKE2b.bits = 256),
          (BLAKE2b.blockSize = 128),
          (BLAKE2b.zero = i.alloc(32, 0)),
          (BLAKE2b.ctx = new BLAKE2b()),
          (t.exports = BLAKE2b));
      }).call(this, e(2).Buffer);
    },
    11005: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769),
          n = e(3012),
          s = 2147483648,
          h = new Uint32Array([
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          o = new Uint8Array([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
          ]);
        class BLAKE2s {
          constructor() {
            ((this.state = new Uint32Array(8)),
              (this.V = new Uint32Array(16)),
              (this.M = new Uint32Array(16)),
              (this.block = i.allocUnsafe(64)),
              (this.size = 32),
              (this.count = 0),
              (this.pos = s));
          }
          init(t, e) {
            if (
              (void 0 === t && (t = 32),
              void 0 === e && (e = null),
              r(t >>> 0 === t),
              r(!e || i.isBuffer(e)),
              0 === t || t > 32)
            )
              throw new Error("Bad output length.");
            if (e && e.length > 32) throw new Error("Bad key length.");
            const n = e ? e.length : 0;
            for (let i = 0; i < 8; i++) this.state[i] = h[i];
            if (
              ((this.size = t),
              (this.count = 0),
              (this.pos = 0),
              (this.state[0] ^= 16842752 ^ (n << 8) ^ this.size),
              n > 0)
            ) {
              const t = i.alloc(64, 0);
              (e.copy(t, 0), this.update(t));
            }
            return this;
          }
          update(t) {
            (r(i.isBuffer(t)),
              r(!(this.pos & s), "Context already finalized."));
            let e = 0,
              n = t.length;
            if (n > 0) {
              const i = this.pos,
                r = 64 - i;
              if (n > r) {
                ((this.pos = 0),
                  t.copy(this.block, i, e, e + r),
                  (this.count += 64),
                  this.compress(this.block, 0, !1),
                  (e += r),
                  (n -= r));
                while (n > 64)
                  ((this.count += 64),
                    this.compress(t, e, !1),
                    (e += 64),
                    (n -= 64));
              }
              (t.copy(this.block, this.pos, e, e + n), (this.pos += n));
            }
            return this;
          }
          final() {
            (r(!(this.pos & s), "Context already finalized."),
              (this.count += this.pos),
              this.block.fill(0, this.pos, 64),
              this.compress(this.block, 0, !0),
              (this.pos = s));
            const t = i.allocUnsafe(this.size);
            for (let i = 0; i < this.size; i++)
              t[i] = this.state[i >>> 2] >>> (8 * (3 & i));
            for (let i = 0; i < 8; i++) this.state[i] = 0;
            for (let i = 0; i < 16; i++) ((this.V[i] = 0), (this.M[i] = 0));
            for (let i = 0; i < 64; i++) this.block[i] = 0;
            return t;
          }
          compress(t, i, e) {
            const { V: r, M: n } = this;
            for (let s = 0; s < 8; s++)
              ((r[s] = this.state[s]), (r[s + 8] = h[s]));
            ((r[12] ^= this.count),
              (r[13] ^= this.count * (1 / 4294967296)),
              e && ((r[14] ^= -1), (r[15] ^= 0)));
            for (let s = 0; s < 16; s++) ((n[s] = a(t, i)), (i += 4));
            for (let s = 0; s < 10; s++)
              (l(r, n, 0, 4, 8, 12, o[16 * s + 0], o[16 * s + 1]),
                l(r, n, 1, 5, 9, 13, o[16 * s + 2], o[16 * s + 3]),
                l(r, n, 2, 6, 10, 14, o[16 * s + 4], o[16 * s + 5]),
                l(r, n, 3, 7, 11, 15, o[16 * s + 6], o[16 * s + 7]),
                l(r, n, 0, 5, 10, 15, o[16 * s + 8], o[16 * s + 9]),
                l(r, n, 1, 6, 11, 12, o[16 * s + 10], o[16 * s + 11]),
                l(r, n, 2, 7, 8, 13, o[16 * s + 12], o[16 * s + 13]),
                l(r, n, 3, 4, 9, 14, o[16 * s + 14], o[16 * s + 15]));
            for (let s = 0; s < 8; s++) this.state[s] ^= r[s] ^ r[s + 8];
          }
          static hash() {
            return new BLAKE2s();
          }
          static hmac(t) {
            return (void 0 === t && (t = 32), new n(BLAKE2s, 64, [t]));
          }
          static digest(t, i, e) {
            (void 0 === i && (i = 32), void 0 === e && (e = null));
            const r = BLAKE2s.ctx;
            return (r.init(i, e), r.update(t), r.final());
          }
          static root(t, e, n) {
            (void 0 === n && (n = 32),
              r(i.isBuffer(t) && t.length === n),
              r(i.isBuffer(e) && e.length === n));
            const s = BLAKE2s.ctx;
            return (s.init(n), s.update(t), s.update(e), s.final());
          }
          static multi(t, i, e, r) {
            void 0 === r && (r = 32);
            const n = BLAKE2s.ctx;
            return (
              n.init(r),
              n.update(t),
              n.update(i),
              e && n.update(e),
              n.final()
            );
          }
          static mac(t, i, e) {
            return (
              void 0 === e && (e = 32),
              BLAKE2s.hmac(e).init(i).update(t).final()
            );
          }
        }
        function u(t, i) {
          return (t >>> i) ^ (t << (32 - i));
        }
        function l(t, i, e, r, n, s, h, o) {
          const l = i[h],
            a = i[o];
          ((t[e] = t[e] + t[r] + l),
            (t[s] = u(t[s] ^ t[e], 16)),
            (t[n] = t[n] + t[s]),
            (t[r] = u(t[r] ^ t[n], 12)),
            (t[e] = t[e] + t[r] + a),
            (t[s] = u(t[s] ^ t[e], 8)),
            (t[n] = t[n] + t[s]),
            (t[r] = u(t[r] ^ t[n], 7)));
        }
        function a(t, i) {
          return t[i++] + 256 * t[i++] + 65536 * t[i++] + 16777216 * t[i];
        }
        ((BLAKE2s.native = 0),
          (BLAKE2s.id = "BLAKE2S256"),
          (BLAKE2s.size = 32),
          (BLAKE2s.bits = 256),
          (BLAKE2s.blockSize = 64),
          (BLAKE2s.zero = i.alloc(32, 0)),
          (BLAKE2s.ctx = new BLAKE2s()),
          (t.exports = BLAKE2s));
      }).call(this, e(2).Buffer);
    },
    11014: function (t, i, e) {
      "use strict";
      (function (t) {
        const r = e(2769),
          n = -1,
          s = 2,
          h = 3,
          o = 4,
          u = 5,
          l = 6,
          a = 48,
          f = t.from("2a8648ce380401", "hex"),
          c = t.from("2a864886f70d010101", "hex"),
          d = t.from("2a8648ce3d0201", "hex"),
          m = t.from("2b06010401da47040c01", "hex"),
          g = t.alloc(0),
          p = t.alloc(1, 0);
        function w(t) {
          r(t && "object" === typeof t);
          const i = [v(t.version), N(t.key)];
          return (
            t.oid && i.push(L(E(t.oid), 0)),
            t.pub && i.push(L(y(t.pub), 1)),
            _(i)
          );
        }
        function M(t) {
          return (
            r(t && "object" === typeof t),
            _([v(t.version), B(t.algorithm), N(t.key)])
          );
        }
        function b(t) {
          return (r(t && "object" === typeof t), _([B(t.algorithm), y(t.key)]));
        }
        function B(t) {
          r(t && "object" === typeof t);
          let i = g;
          return (t.type !== u && (i = R(t.params, t.type)), _([E(t.oid), i]));
        }
        function A(i, e, r) {
          return t.concat([S(i), S(e), S(r)]);
        }
        function S(i) {
          (r(t.isBuffer(i)), 0 === i.length && (i = p));
          let e = 0;
          for (; e < i.length; e++) if (0 !== i[e]) break;
          return e === i.length
            ? R(p, s)
            : ((i = i.slice(e)), 128 & i[0] && (i = t.concat([p, i])), R(i, s));
        }
        function v(i) {
          return (r((255 & i) === i), S(t.from([i])));
        }
        function y(i) {
          return (r(t.isBuffer(i)), R(t.concat([p, i]), h));
        }
        function N(t) {
          return R(t, o);
        }
        function E(t) {
          return R(t, l);
        }
        function _(i) {
          return (r(Array.isArray(i)), R(t.concat(i), a));
        }
        function R(i, e) {
          (r(t.isBuffer(i)), r((255 & e) === e));
          let n = 0,
            s = 0;
          if (((n += 1), (n += 1), i.length >= 128)) {
            let t = i.length;
            while (t) ((n += 1), (s += 1), (t >>>= 8));
          }
          n += i.length;
          const h = t.allocUnsafe(n);
          let o = 0;
          if (((h[o] = e), (o += 1), s)) {
            ((h[o] = 128 | s), (o += 1));
            let t = i.length;
            for (let i = s - 1; i >= 0; i--) ((h[o + i] = t), (t >>>= 8));
            o += s;
          } else ((h[o] = i.length), (o += 1));
          return (i.copy(h, o), h);
        }
        function L(t, i) {
          return (r((255 & i) === i), R(t, 160 | i));
        }
        function D(t) {
          return q(t, 0)[0];
        }
        function K(t) {
          return k(t, 0)[0];
        }
        function P(t) {
          return O(t, 0)[0];
        }
        function I(t) {
          return C(t, 0)[0];
        }
        function x(t) {
          return z(t, 0)[0];
        }
        function H(t) {
          return T(t, 0)[0];
        }
        function U(t) {
          return Z(t, 0)[0];
        }
        function q(t, i) {
          [t, i] = j(t, i);
          const e = i;
          let r, n, s, h;
          i = 0;
          let o = null,
            u = null;
          if (
            (([r, i] = F(t, i)), ([n, i] = Z(t, i)), ([s, i] = X(t, i, 0)), s)
          )
            try {
              [o] = V(s, 0);
            } catch (l) {}
          return (
            ([h, i] = X(t, i, 1)),
            h && ([u] = J(h, 0)),
            [{ version: r, key: n, oid: o, pub: u }, e]
          );
        }
        function k(t, i) {
          [t, i] = j(t, i);
          const e = i;
          let r, n, s;
          return (
            (i = 0),
            ([r, i] = F(t, i)),
            ([n, i] = C(t, i)),
            ([s, i] = Z(t, i)),
            [{ version: r, algorithm: n, key: s }, e]
          );
        }
        function O(t, i) {
          [t, i] = j(t, i);
          const e = i;
          let r, n;
          return (
            (i = 0),
            ([r, i] = C(t, i)),
            ([n, i] = J(t, i)),
            [{ algorithm: r, key: n }, e]
          );
        }
        function C(t, i) {
          [t, i] = j(t, i);
          const e = i;
          let s;
          ((i = 0), ([s, i] = V(t, i)));
          let h = i < t.length ? t[i] : n,
            o = g;
          switch (h) {
            case n:
              h = u;
              break;
            case u:
              ((i += 1), r(i < t.length), r(0 === t[i]));
              break;
            default:
              [o] = G(t, i, h);
              break;
          }
          return [{ oid: s, type: h, params: o }, e];
        }
        function z(t, i) {
          let e, r, n;
          return (
            ([e, i] = T(t, i)),
            ([r, i] = T(t, i)),
            ([n, i] = T(t, i)),
            [[e, r, n], i]
          );
        }
        function T(t, i) {
          (([t, i] = G(t, i, s)), r(t.length > 0));
          let e = 0;
          for (; e < t.length; e++) if (0 !== t[e]) break;
          if (e === t.length) return [p, i];
          if (0 === e && 128 & t[0]) throw new Error("Integer is negative.");
          return [t.slice(e), i];
        }
        function F(t, i) {
          return (([t, i] = T(t, i)), r(1 === t.length), [t[0], i]);
        }
        function J(t, i) {
          return (
            ([t, i] = G(t, i, h)),
            r(t.length > 0),
            r(0 === t[0]),
            [t.slice(1), i]
          );
        }
        function Z(t, i) {
          return G(t, i, o);
        }
        function V(t, i) {
          return G(t, i, l);
        }
        function j(t, i) {
          return G(t, i, a);
        }
        function G(i, e, n) {
          let s;
          (r(t.isBuffer(i)),
            r(e >>> 0 === e),
            r(e < i.length),
            r((255 & n) === n),
            r(i[e] === n),
            (e += 1),
            ([s, e] = W(i, e)),
            r(e + s <= i.length));
          const h = i.slice(e, e + s);
          return ((e += s), [h, e]);
        }
        function X(i, e, n) {
          (r(t.isBuffer(i)),
            r(e >>> 0 === e),
            r(e < i.length),
            r((255 & n) === n));
          try {
            return G(i, e, 160 | n);
          } catch (s) {
            return [null, e];
          }
        }
        function W(i, e) {
          (r(t.isBuffer(i)), r(e >>> 0 === e), r(e < i.length));
          const n = i[e],
            s = 127 & n;
          if (((e += 1), 0 === (128 & n))) return [s, e];
          if (0 === s) throw new Error("Indefinite length.");
          let h = 0;
          for (let t = 0; t < s; t++) {
            r(e < i.length);
            const t = i[e];
            if (((e += 1), h >= 1 << 23)) throw new Error("Length too large.");
            if (((h *= 256), (h += t), 0 === h))
              throw new Error("Unexpected leading zeroes.");
          }
          if (h < 128) throw new Error("Non-minimal length.");
          return [h, e];
        }
        ((i.INT = s),
          (i.BIT = h),
          (i.OCT = o),
          (i.NULL = u),
          (i.OID = l),
          (i.SEQ = a),
          (i.DSA_OID = f),
          (i.RSA_OID = c),
          (i.ECDSA_OID = d),
          (i.EDDSA_OID = m),
          (i.encodeSEC1 = w),
          (i.encodePKCS8 = M),
          (i.encodeSPKI = b),
          (i.encodeAlgorithm = B),
          (i.encodeParams = A),
          (i.encodeInt = S),
          (i.encodeOct = N),
          (i.decodeSEC1 = D),
          (i.decodePKCS8 = K),
          (i.decodeSPKI = P),
          (i.decodeAlgorithm = I),
          (i.decodeParams = x),
          (i.decodeInt = H),
          (i.decodeOct = U));
      }).call(this, e(2).Buffer);
    },
    11019: function (t, i, e) {
      "use strict";
      const r = "0.0",
        n = {
          COUNTRY: "2.5.4.6",
          ORGANIZATION: "2.5.4.10",
          ORGANIZATIONALUNIT: "2.5.4.11",
          COMMONNAME: "2.5.4.3",
          SERIALNUMBER: "2.5.4.5",
          LOCALITY: "2.5.4.7",
          PROVINCE: "2.5.4.8",
          STREETADDRESS: "2.5.4.9",
          POSTALCODE: "2.5.4.17",
        },
        s = {
          [n.COUNTRY]: "COUNTRY",
          [n.ORGANIZATION]: "ORGANIZATION",
          [n.ORGANIZATIONALUNIT]: "ORGANIZATIONALUNIT",
          [n.COMMONNAME]: "COMMONNAME",
          [n.SERIALNUMBER]: "SERIALNUMBER",
          [n.LOCALITY]: "LOCALITY",
          [n.PROVINCE]: "PROVINCE",
          [n.STREETADDRESS]: "STREETADDRESS",
          [n.POSTALCODE]: "POSTALCODE",
        },
        h = {
          DH: "1.2.840.113549.1.3.1",
          DSA: "1.2.840.10040.4.1",
          DSA_ALT: "1.2.840.10040.4.2",
          RSA: "1.2.840.113549.1.1.1",
          ECDSA: "1.2.840.10045.2.1",
          EDDSA: "1.3.6.1.4.1.11591.4.12.1",
        },
        o = {
          [h.DH]: "DH",
          [h.DSA]: "DSA",
          [h.DSA_ALT]: "DSA",
          [h.RSA]: "RSA",
          [h.ECDSA]: "ECDSA",
          [h.EDDSA]: "EDDSA",
        },
        u = {
          BLAKE2B160: "1.3.6.1.4.1.1722.12.2.1.5",
          BLAKE2B256: "1.3.6.1.4.1.1722.12.2.1.8",
          BLAKE2B384: "1.3.6.1.4.1.1722.12.2.1.12",
          BLAKE2B512: "1.3.6.1.4.1.1722.12.2.1.16",
          BLAKE2S128: "1.3.6.1.4.1.1722.12.2.2.4",
          BLAKE2S160: "1.3.6.1.4.1.1722.12.2.2.5",
          BLAKE2S224: "1.3.6.1.4.1.1722.12.2.2.7",
          BLAKE2S256: "1.3.6.1.4.1.1722.12.2.2.8",
          GOST94: "1.2.643.2.2.20",
          MD2: "1.2.840.113549.2.2",
          MD4: "1.2.840.113549.2.4",
          MD5: "1.2.840.113549.2.5",
          MDC2: "1.3.14.3.2.19",
          RIPEMD160: "1.0.10118.3.0.49",
          RIPEMD160_ALT: "1.3.36.3.2.1",
          SHA1: "1.3.14.3.2.26",
          SHA224: "2.16.840.1.101.3.4.2.4",
          SHA256: "2.16.840.1.101.3.4.2.1",
          SHA384: "2.16.840.1.101.3.4.2.2",
          SHA512: "2.16.840.1.101.3.4.2.3",
          SHA3_224: "2.16.840.1.101.3.4.2.7",
          SHA3_256: "2.16.840.1.101.3.4.2.8",
          SHA3_384: "2.16.840.1.101.3.4.2.9",
          SHA3_512: "2.16.840.1.101.3.4.2.10",
          SHAKE128: "2.16.840.1.101.3.4.2.11",
          SHAKE256: "2.16.840.1.101.3.4.2.12",
          SM3: "1.0.10118.3.0.65",
          WHIRLPOOL: "1.0.10118.3.0.55",
        },
        l = {
          [u.BLAKE2B160]: "BLAKE2B160",
          [u.BLAKE2B256]: "BLAKE2B256",
          [u.BLAKE2B384]: "BLAKE2B384",
          [u.BLAKE2B512]: "BLAKE2B512",
          [u.BLAKE2S128]: "BLAKE2S128",
          [u.BLAKE2S160]: "BLAKE2S160",
          [u.BLAKE2S224]: "BLAKE2S224",
          [u.BLAKE2S256]: "BLAKE2S256",
          [u.GOST94]: "GOST94",
          [u.MD2]: "MD2",
          [u.MD4]: "MD4",
          [u.MD5]: "MD5",
          [u.MDC2]: "MDC2",
          [u.RIPEMD160]: "RIPEMD160",
          [u.RIPEMD160_ALT]: "RIPEMD160",
          [u.SHA1]: "SHA1",
          [u.SHA224]: "SHA224",
          [u.SHA256]: "SHA256",
          [u.SHA384]: "SHA384",
          [u.SHA512]: "SHA512",
          [u.SHA3_224]: "SHA3_224",
          [u.SHA3_256]: "SHA3_256",
          [u.SHA3_384]: "SHA3_384",
          [u.SHA3_512]: "SHA3_512",
          [u.SHAKE128]: "SHAKE128",
          [u.SHAKE256]: "SHAKE256",
          [u.SM3]: "SM3",
          [u.WHIRLPOOL]: "WHIRLPOOL",
        },
        a = {
          P192: "1.2.840.10045.3.1.1",
          P224: "1.3.132.0.33",
          P256: "1.2.840.10045.3.1.7",
          P384: "1.3.132.0.34",
          P521: "1.3.132.0.35",
          SECP192K1: "1.3.132.0.31",
          SECP224K1: "1.3.132.0.32",
          SECP256K1: "1.3.132.0.10",
          BRAINPOOLP256: "1.3.36.3.3.2.8.1.1.7",
          BRAINPOOLP384: "1.3.36.3.3.2.8.1.1.11",
          BRAINPOOLP512: "1.3.36.3.3.2.8.1.1.13",
          X25519: "1.3.101.110",
          X25519_ALT: "1.3.6.1.4.1.11591.7",
          ED25519: "1.3.101.112",
          X448: "1.3.101.111",
          X448_ALT: "1.3.6.1.4.1.11591.8",
          ED448: "1.3.101.113",
          ED1174: "1.3.6.1.4.1.9509.5.2.6",
          ED41417: "1.3.6.1.4.1.9509.5.2.5",
          M221: "1.3.6.1.4.1.9509.5.1.1",
          E222: "1.3.6.1.4.1.9509.5.2.1",
          M383: "1.3.6.1.4.1.9509.5.1.2",
          E382: "1.3.6.1.4.1.9509.5.2.2",
          M511: "1.3.6.1.4.1.9509.5.1.3",
          E521: "1.3.6.1.4.1.9509.5.2.4",
        },
        f = {
          [a.P192]: "P192",
          [a.P224]: "P224",
          [a.P256]: "P256",
          [a.P384]: "P384",
          [a.P521]: "P521",
          [a.SECP192K1]: "SECP192K1",
          [a.SECP224K1]: "SECP224K1",
          [a.SECP256K1]: "SECP256K1",
          [a.BRAINPOOLP256]: "BRAINPOOLP256",
          [a.BRAINPOOLP384]: "BRAINPOOLP384",
          [a.BRAINPOOLP512]: "BRAINPOOLP512",
          [a.X25519]: "X25519",
          [a.X25519_ALT]: "X25519",
          [a.ED25519]: "ED25519",
          [a.X448]: "X448",
          [a.X448_ALT]: "X448",
          [a.ED448]: "ED448",
          [a.ED1174]: "ED1174",
          [a.ED41417]: "ED41417",
          [a.M221]: "M221",
          [a.E222]: "E222",
          [a.M383]: "M383",
          [a.E382]: "E382",
          [a.M511]: "M511",
          [a.E521]: "E521",
        },
        c = {
          DSASHA1: "1.2.840.10040.4.3",
          RSAMD2: "1.2.840.113549.1.1.2",
          RSAMD4: "1.2.840.113549.1.1.3",
          RSAMD5: "1.2.840.113549.1.1.4",
          RSASHA1: "1.2.840.113549.1.1.5",
          RSASHA1_MS: "1.3.14.3.2.29",
          RSAPSS: "1.2.840.113549.1.1.10",
          RSASHA256: "1.2.840.113549.1.1.11",
          RSASHA384: "1.2.840.113549.1.1.12",
          RSASHA512: "1.2.840.113549.1.1.13",
          RSASHA224: "1.2.840.113549.1.1.14",
          MGF1: "1.2.840.113549.1.1.8",
          RSASHA3_256: "2.16.840.1.101.3.4.2.8",
          RSASHA3_384: "2.16.840.1.101.3.4.2.9",
          RSASHA3_512: "2.16.840.1.101.3.4.2.10",
          ECDSASHA1: "1.2.840.10045.4.1",
          ECDSASHA224: "1.2.840.10045.4.3.1",
          ECDSASHA256: "1.2.840.10045.4.3.2",
          ECDSASHA384: "1.2.840.10045.4.3.3",
          ECDSASHA512: "1.2.840.10045.4.3.4",
          EDDSA: "1.3.6.1.4.1.11591.4.12.2",
        },
        d = {
          [c.DSASHA1]: "DSASHA1",
          [c.RSAMD2]: "RSAMD2",
          [c.RSAMD4]: "RSAMD4",
          [c.RSAMD5]: "RSAMD5",
          [c.RSASHA1]: "RSASHA1",
          [c.RSASHA1_MS]: "RSASHA1",
          [c.RSAPSS]: "RSAPSS",
          [c.RSASHA256]: "RSASHA256",
          [c.RSASHA384]: "RSASHA384",
          [c.RSASHA512]: "RSASHA512",
          [c.MGF1]: "MGF1",
          [c.RSASHA3_256]: "RSASHA3_256",
          [c.RSASHA3_384]: "RSASHA3_384",
          [c.RSASHA3_512]: "RSASHA3_512",
          [c.ECDSASHA1]: "ECDSASHA1",
          [c.ECDSASHA224]: "ECDSASHA224",
          [c.ECDSASHA384]: "ECDSASHA384",
          [c.ECDSASHA512]: "ECDSASHA512",
          [c.EDDSA]: "EDDSA",
        },
        m = {
          [c.DSASHA1]: u.SHA1,
          [c.RSAMD2]: u.MD2,
          [c.RSAMD4]: u.MD4,
          [c.RSAMD5]: u.MD5,
          [c.RSASHA1]: u.SHA1,
          [c.RSASHA1_MS]: u.SHA1,
          [c.RSAPSS]: null,
          [c.RSASHA256]: u.SHA256,
          [c.RSASHA384]: u.SHA384,
          [c.RSASHA512]: u.SHA512,
          [c.MGF1]: null,
          [c.RSASHA3_256]: u.SHA3_256,
          [c.RSASHA3_384]: u.SHA3_384,
          [c.RSASHA3_512]: u.SHA3_512,
          [c.ECDSASHA1]: u.SHA1,
          [c.ECDSASHA224]: u.SHA224,
          [c.ECDSASHA384]: u.SHA384,
          [c.ECDSASHA512]: u.SHA512,
          [c.EDDSA]: null,
        };
      ((i.NONE = r),
        (i.attrs = n),
        (i.attrsByVal = s),
        (i.keyAlgs = h),
        (i.keyAlgsByVal = o),
        (i.hashes = u),
        (i.hashesByVal = l),
        (i.curves = a),
        (i.curvesByVal = f),
        (i.sigAlgs = c),
        (i.sigAlgsByVal = d),
        (i.sigToHash = m));
    },
    11022: function (t, i, e) {
      "use strict";
      const r = e(2769),
        n = {
          "AES-128": [16, 16],
          "AES-192": [16, 24],
          "AES-256": [16, 32],
          BF: [8, 16],
          "CAMELLIA-128": [16, 16],
          "CAMELLIA-192": [16, 24],
          "CAMELLIA-256": [16, 32],
          CAST5: [8, 16],
          DES: [8, 8],
          "DES-EDE": [8, 16],
          "DES-EDE3": [8, 24],
          IDEA: [8, 16],
          "RC2-64": [8, 8],
          "TWOFISH-128": [16, 16],
          "TWOFISH-192": [16, 24],
          "TWOFISH-256": [16, 32],
        };
      class CipherInfo {
        constructor(t, i, e, r, n, s) {
          ((this.name = t),
            (this.algorithm = i),
            (this.mode = e),
            (this.blockSize = r),
            (this.keySize = n),
            (this.ivSize = s));
        }
      }
      function s(t) {
        r("string" === typeof t);
        const i = t.length;
        if (i < 1 || i > 64) throw new Error("Invalid cipher name.");
        let e = null,
          s = null,
          h = null;
        switch ((i >= 6 && (e = t.substring(i - 4)), e)) {
          case "-ECB":
            s = "ECB";
            break;
          case "-CBC":
            s = "CBC";
            break;
          case "-CTR":
            s = "CTR";
            break;
          case "-CFB":
            s = "CFB";
            break;
          case "-OFB":
            s = "OFB";
            break;
          case "-GCM":
            s = "GCM";
            break;
          default:
            e = null;
            break;
        }
        if (((h = e ? t.substring(0, i - 4) : t), !n.hasOwnProperty(h)))
          throw new Error(`Unknown cipher: ${t}.`);
        if ("GCM" === s) {
          const t = n[h][0];
          if (16 !== t) throw new Error(`Unsupported mode: ${s}-${8 * t}.`);
        }
        return [t, h, s];
      }
      function h(t) {
        const [i, e, r] = s(t),
          [h, o] = n[e];
        let u = h;
        return (
          (r && "ECB" !== r) || (u = 0),
          new CipherInfo(i, e, r, h, o, u)
        );
      }
      function o(t) {
        const i = h(t);
        if (!i.mode) throw new Error("No mode provided for cipher name.");
        return i;
      }
      function u(t) {
        r("string" === typeof t);
        try {
          const i = s(t)[2];
          return null != i;
        } catch (i) {
          return !1;
        }
      }
      ((i.info = h), (i.get = o), (i.has = u));
    },
    11036: function (t, i, e) {
      "use strict";
      const r = e(2769),
        n = e(3614),
        { countLeft: s, trimLeft: h } = e(3230),
        { custom: o } = e(3961),
        u = 2048,
        l = 2,
        a = 512,
        f = 1e4,
        c = 2,
        d = 2 ** 31 - 1;
      class DHParams {
        constructor(t, i) {
          ((this.p = h(t)), (this.g = h(i)));
        }
        setP(t) {
          return ((this.p = h(t)), this);
        }
        setG(t) {
          return ((this.g = h(t)), this);
        }
        bits() {
          return s(this.p);
        }
        size() {
          return (this.bits() + 7) >>> 3;
        }
        toParams() {
          return this;
        }
        toJSON() {
          return {
            kty: "DH",
            p: n.encodeURL(this.p),
            g: n.encodeURL(this.g),
            ext: !0,
          };
        }
        fromJSON(t) {
          return (
            r(t && "object" === typeof t),
            r("DH" === t.kty),
            (this.p = n.decodeURL(t.p)),
            (this.g = n.decodeURL(t.g)),
            this
          );
        }
        [o]() {
          return this.format();
        }
        format() {
          return {
            bits: this.bits(),
            size: this.size(),
            pbits: s(this.p),
            gbits: s(this.g),
            p: this.p.toString("hex"),
            g: this.g.toString("hex"),
          };
        }
        static fromJSON(t) {
          return new this().fromJSON(t);
        }
      }
      class DHKey extends DHParams {
        constructor(t, i, e) {
          (super(t, i), (this.y = h(e)));
        }
        setParams(t) {
          return this.fromParams(t);
        }
        setY(t) {
          return ((this.y = h(t)), this);
        }
        toParams() {
          return new DHParams(this.p, this.g);
        }
        fromParams(t) {
          return (
            r(t instanceof DHParams),
            (this.p = t.p),
            (this.g = t.g),
            this
          );
        }
        toPublic() {
          return this;
        }
        toJSON() {
          return {
            kty: "DH",
            p: n.encodeURL(this.p),
            g: n.encodeURL(this.g),
            y: n.encodeURL(this.y),
            ext: !0,
          };
        }
        fromJSON(t) {
          return (
            r(t && "object" === typeof t),
            r("DH" === t.kty),
            (this.p = n.decodeURL(t.p)),
            (this.g = n.decodeURL(t.g)),
            (this.y = n.decodeURL(t.y)),
            this
          );
        }
        static fromParams(t) {
          return new this().fromParams(t);
        }
      }
      class DHPublicKey extends DHKey {
        constructor(t, i, e) {
          super(t, i, e);
        }
        format() {
          return {
            bits: this.bits(),
            size: this.size(),
            pbits: s(this.p),
            gbits: s(this.g),
            ybits: s(this.y),
            p: this.p.toString("hex"),
            g: this.g.toString("hex"),
            y: this.y.toString("hex"),
          };
        }
      }
      class DHPrivateKey extends DHKey {
        constructor(t, i, e, r) {
          (super(t, i, e), (this.x = h(r)));
        }
        setX(t) {
          return ((this.x = h(t)), this);
        }
        toPublic() {
          const t = new DHPublicKey();
          return ((t.p = this.p), (t.g = this.g), (t.y = this.y), t);
        }
        toJSON() {
          return {
            kty: "DH",
            p: n.encodeURL(this.p),
            g: n.encodeURL(this.g),
            y: n.encodeURL(this.y),
            x: n.encodeURL(this.x),
            ext: !0,
          };
        }
        fromJSON(t) {
          return (
            r(t && "object" === typeof t),
            r("DH" === t.kty),
            (this.p = n.decodeURL(t.p)),
            (this.g = n.decodeURL(t.g)),
            null != t.y && (this.y = n.decodeURL(t.y)),
            (this.x = n.decodeURL(t.x)),
            this
          );
        }
        format() {
          return {
            bits: this.bits(),
            size: this.size(),
            pbits: s(this.p),
            gbits: s(this.g),
            ybits: s(this.y),
            xbits: s(this.x),
            p: this.p.toString("hex"),
            g: this.g.toString("hex"),
            y: this.y.toString("hex"),
            x: this.x.toString("hex"),
          };
        }
      }
      ((i.DEFAULT_BITS = u),
        (i.DEFAULT_GEN = l),
        (i.MIN_BITS = a),
        (i.MAX_BITS = f),
        (i.MIN_GEN = c),
        (i.MAX_GEN = d),
        (i.DHKey = DHKey),
        (i.DHParams = DHParams),
        (i.DHPublicKey = DHPublicKey),
        (i.DHPrivateKey = DHPrivateKey));
    },
    11038: function (t, i, e) {
      "use strict";
      const r = e(2769),
        n = e(3614),
        { countLeft: s, trimLeft: h } = e(3230),
        { custom: o } = e(3961),
        u = 2048,
        l = 512,
        a = 1e4;
      class DSAParams {
        constructor(t, i, e) {
          ((this.p = h(t)), (this.q = h(i)), (this.g = h(e)));
        }
        setP(t) {
          return ((this.p = h(t)), this);
        }
        setQ(t) {
          return ((this.q = h(t)), this);
        }
        setG(t) {
          return ((this.g = h(t)), this);
        }
        L() {
          return s(this.p);
        }
        N() {
          return s(this.q);
        }
        bits() {
          return this.L();
        }
        size() {
          return (this.N() + 7) >>> 3;
        }
        toParams() {
          return this;
        }
        toJSON() {
          return {
            kty: "DSA",
            p: n.encodeURL(this.p),
            q: n.encodeURL(this.q),
            g: n.encodeURL(this.g),
            ext: !0,
          };
        }
        fromJSON(t) {
          return (
            r(t && "object" === typeof t),
            r("DSA" === t.kty),
            (this.p = n.decodeURL(t.p)),
            (this.q = n.decodeURL(t.q)),
            (this.g = n.decodeURL(t.g)),
            this
          );
        }
        [o]() {
          return this.format();
        }
        format() {
          return {
            bits: this.bits(),
            size: this.size(),
            pbits: s(this.p),
            qbits: s(this.q),
            gbits: s(this.g),
            p: this.p.toString("hex"),
            q: this.q.toString("hex"),
            g: this.g.toString("hex"),
          };
        }
        static fromJSON(t) {
          return new this().fromJSON(t);
        }
      }
      class DSAKey extends DSAParams {
        constructor(t, i, e, r) {
          (super(t, i, e), (this.y = h(r)));
        }
        setParams(t) {
          return this.fromParams(t);
        }
        setY(t) {
          return ((this.y = h(t)), this);
        }
        toParams() {
          return new DSAParams(this.p, this.q, this.g);
        }
        fromParams(t) {
          return (
            r(t instanceof DSAParams),
            (this.p = t.p),
            (this.q = t.q),
            (this.g = t.g),
            this
          );
        }
        toPublic() {
          return this;
        }
        toJSON() {
          return {
            kty: "DSA",
            p: n.encodeURL(this.p),
            q: n.encodeURL(this.q),
            g: n.encodeURL(this.g),
            y: n.encodeURL(this.y),
            ext: !0,
          };
        }
        fromJSON(t) {
          return (
            r(t && "object" === typeof t),
            r("DSA" === t.kty),
            (this.p = n.decodeURL(t.p)),
            (this.q = n.decodeURL(t.q)),
            (this.g = n.decodeURL(t.g)),
            (this.y = n.decodeURL(t.y)),
            this
          );
        }
        static fromParams(t) {
          return new this().fromParams(t);
        }
      }
      class DSAPublicKey extends DSAKey {
        constructor(t, i, e, r) {
          super(t, i, e, r);
        }
        format() {
          return {
            bits: this.bits(),
            size: this.size(),
            pbits: s(this.p),
            qbits: s(this.q),
            gbits: s(this.g),
            ybits: s(this.y),
            p: this.p.toString("hex"),
            q: this.q.toString("hex"),
            g: this.g.toString("hex"),
            y: this.y.toString("hex"),
          };
        }
      }
      class DSAPrivateKey extends DSAKey {
        constructor(t, i, e, r, n) {
          (super(t, i, e, r), (this.x = h(n)));
        }
        setX(t) {
          return ((this.x = h(t)), this);
        }
        toPublic() {
          const t = new DSAPublicKey();
          return (
            (t.p = this.p),
            (t.q = this.q),
            (t.g = this.g),
            (t.y = this.y),
            t
          );
        }
        toJSON() {
          return {
            kty: "DSA",
            p: n.encodeURL(this.p),
            q: n.encodeURL(this.q),
            g: n.encodeURL(this.g),
            y: n.encodeURL(this.y),
            x: n.encodeURL(this.x),
            ext: !0,
          };
        }
        fromJSON(t) {
          return (
            r(t && "object" === typeof t),
            r("DSA" === t.kty),
            (this.p = n.decodeURL(t.p)),
            (this.q = n.decodeURL(t.q)),
            (this.g = n.decodeURL(t.g)),
            null != t.y && (this.y = n.decodeURL(t.y)),
            (this.x = n.decodeURL(t.x)),
            this
          );
        }
        format() {
          return {
            bits: this.bits(),
            size: this.size(),
            pbits: s(this.p),
            qbits: s(this.q),
            gbits: s(this.g),
            ybits: s(this.y),
            xbits: s(this.x),
            p: this.p.toString("hex"),
            q: this.q.toString("hex"),
            g: this.g.toString("hex"),
            y: this.y.toString("hex"),
            x: this.x.toString("hex"),
          };
        }
      }
      ((i.DEFAULT_BITS = u),
        (i.MIN_BITS = l),
        (i.MAX_BITS = a),
        (i.DSAKey = DSAKey),
        (i.DSAParams = DSAParams),
        (i.DSAPublicKey = DSAPublicKey),
        (i.DSAPrivateKey = DSAPrivateKey));
    },
    11047: function (t, i, e) {
      "use strict";
      (function (t) {
        const r = e(2769),
          n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          s = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2,
            3, 4, 5, 6, 7, 8, -1, -1, -1, -1, -1, -1, -1, 9, 10, 11, 12, 13, 14,
            15, 16, -1, 17, 18, 19, 20, 21, -1, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, -1, -1, -1, -1, -1, -1, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, -1, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
            57, -1, -1, -1, -1, -1,
          ];
        function h(i) {
          r(t.isBuffer(i));
          let e = 0,
            s = 0;
          for (; s < i.length; s++) {
            if (0 !== i[s]) break;
            e += 1;
          }
          const h = t.allocUnsafe(1 + (((138 * i.length) / 100) | 0));
          h.fill(0);
          let o = 0;
          for (; s < i.length; s++) {
            let t = i[s],
              e = 0;
            for (let i = h.length - 1; i >= 0; i--, e++) {
              if (0 === t && e >= o) break;
              ((t += 256 * h[i]), (h[i] = t % 58), (t = (t / 58) | 0));
            }
            (r(0 === t), (o = e));
          }
          s = h.length - o;
          while (s < h.length && 0 === h[s]) s += 1;
          let u = "";
          for (let t = 0; t < e; t++) u += "1";
          for (; s < h.length; s++) u += n[h[s]];
          return u;
        }
        function o(i) {
          r("string" === typeof i);
          let e = 0,
            n = 0;
          for (; n < i.length; n++) {
            if ("1" !== i[n]) break;
            e += 1;
          }
          const h = t.allocUnsafe(1 + (((733 * i.length) / 1e3) | 0));
          h.fill(0);
          let o = 0;
          for (; n < i.length; n++) {
            const t = i.charCodeAt(n),
              e = 65408 & t ? -1 : s[t];
            if (-1 === e) throw new Error("Non-base58 character.");
            let u = e,
              l = 0;
            for (let i = h.length - 1; i >= 0; i--, l++) {
              if (0 === u && l >= o) break;
              ((u += 58 * h[i]), (h[i] = 255 & u), (u >>>= 8));
            }
            (r(0 === u), (o = l));
          }
          n = 0;
          while (n < h.length && 0 === h[n]) n += 1;
          const u = t.allocUnsafe(e + (h.length - n));
          let l;
          for (l = 0; l < e; l++) u[l] = 0;
          while (n < h.length) u[l++] = h[n++];
          return u;
        }
        function u(t) {
          r("string" === typeof t);
          for (let i = 0; i < t.length; i++) {
            const e = t.charCodeAt(i);
            if (65408 & e) return !1;
            if (-1 === s[e]) return !1;
          }
          return !0;
        }
        ((i.native = 0), (i.encode = h), (i.decode = o), (i.test = u));
      }).call(this, e(2).Buffer);
    },
    11049: function (t, i, e) {
      "use strict";
      (function (t) {
        const r = e(2769),
          n = t.allocUnsafe(66),
          s = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
          h = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 10,
            17, 21, 20, 26, 30, 7, 5, -1, -1, -1, -1, -1, -1, -1, 29, -1, 24,
            13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28,
            12, 14, 6, 4, 2, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8,
            23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4,
            2, -1, -1, -1, -1, -1,
          ];
        function o(t) {
          const i = t >>> 25;
          return (
            ((33554431 & t) << 5) ^
            (996825010 & -((i >>> 0) & 1)) ^
            (642813549 & -((i >>> 1) & 1)) ^
            (513874426 & -((i >>> 2) & 1)) ^
            (1027748829 & -((i >>> 3) & 1)) ^
            (705979059 & -((i >>> 4) & 1))
          );
        }
        function u(i, e) {
          (r("string" === typeof i), r(t.isBuffer(e)));
          let n,
            h = 1;
          for (n = 0; n < i.length; n++) {
            const t = i.charCodeAt(n);
            if (65280 & t || t >>> 5 === 0)
              throw new Error("Invalid bech32 character.");
            h = o(h) ^ (t >>> 5);
          }
          if (n + 7 + e.length > 90)
            throw new Error("Invalid bech32 data length.");
          h = o(h);
          let u = "";
          for (let t = 0; t < i.length; t++) {
            const e = i.charCodeAt(t);
            ((h = o(h) ^ (31 & e)), (u += i[t]));
          }
          u += "1";
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            if (i >>> 5 !== 0) throw new Error("Invalid bech32 value.");
            ((h = o(h) ^ i), (u += s[i]));
          }
          for (let t = 0; t < 6; t++) h = o(h);
          h ^= 1;
          for (let t = 0; t < 6; t++) u += s[(h >>> (5 * (5 - t))) & 31];
          return u;
        }
        function l(i) {
          if ((r("string" === typeof i), i.length < 8 || i.length > 90))
            throw new Error("Invalid bech32 string length.");
          let e = 0;
          while (e < i.length && "1" !== i[i.length - 1 - e]) e += 1;
          const n = i.length - (1 + e);
          if (1 + e >= i.length || e < 6)
            throw new Error("Invalid bech32 data length.");
          e -= 6;
          const s = t.allocUnsafe(e);
          let u,
            l = 1,
            a = !1,
            f = !1,
            c = "";
          for (let t = 0; t < n; t++) {
            let e = i.charCodeAt(t);
            if (e < 33 || e > 126) throw new Error("Invalid bech32 character.");
            (e >= 97 && e <= 122
              ? (a = !0)
              : e >= 65 && e <= 90 && ((f = !0), (e = e - 65 + 97)),
              (c += String.fromCharCode(e)),
              (l = o(l) ^ (e >>> 5)));
          }
          for (l = o(l), u = 0; u < n; u++) l = o(l) ^ (31 & i.charCodeAt(u));
          u += 1;
          while (u < i.length) {
            const t = i.charCodeAt(u),
              e = 65408 & t ? -1 : h[t];
            if (-1 === e) throw new Error("Invalid bech32 character.");
            (t >= 97 && t <= 122 ? (a = !0) : t >= 65 && t <= 90 && (f = !0),
              (l = o(l) ^ e),
              u + 6 < i.length && (s[u - (1 + n)] = e),
              (u += 1));
          }
          if (a && f) throw new Error("Invalid bech32 casing.");
          if (1 !== l) throw new Error("Invalid bech32 checksum.");
          return [c, s.slice(0, e)];
        }
        function a(t) {
          r("string" === typeof t);
          try {
            l(t);
          } catch (i) {
            return !1;
          }
          return !0;
        }
        function f(i, e, n, s, h, o, u) {
          (r(t.isBuffer(i)),
            r(e >>> 0 === e),
            r(t.isBuffer(n)),
            r(s >>> 0 === s),
            r((255 & h) === h),
            r((255 & o) === o),
            r("boolean" === typeof u),
            r(0 !== h),
            r(0 !== o));
          const l = (1 << o) - 1;
          let a = 0,
            f = 0;
          for (; e < i.length; e++) {
            const t = i[e];
            if (t >>> h !== 0) throw new Error("Invalid bits.");
            ((a = (a << h) | t), (f += h));
            while (f >= o) ((f -= o), (n[s++] = (a >>> f) & l));
          }
          if (u) f && (n[s++] = (a << (o - f)) & l);
          else if (f >= h || (a << (o - f)) & l)
            throw new Error("Invalid bits.");
          return (r(s <= n.length), n.slice(0, s));
        }
        function c(t, i, e, n) {
          (r(t >>> 0 === t),
            r((255 & i) === i),
            r((255 & e) === e),
            r("boolean" === typeof n),
            r(0 !== i),
            r(0 !== e));
          let s = (t * i + (e - 1)) / e;
          return ((s >>>= 0), n && (s += 1), s);
        }
        function d(i, e, n, s) {
          r(t.isBuffer(i));
          const h = c(i.length, e, n, s),
            o = t.allocUnsafe(h);
          return f(i, 0, o, 0, e, n, s);
        }
        function m(i, e, s) {
          if (
            (r("string" === typeof i),
            r((255 & e) === e),
            r(t.isBuffer(s)),
            e < 0 || e > 31)
          )
            throw new Error("Invalid bech32 version.");
          if (s.length < 2 || s.length > 40)
            throw new Error("Invalid bech32 data length.");
          const h = n;
          h[0] = e;
          const o = f(s, 0, h, 1, 8, 5, !0);
          return u(i, o);
        }
        function g(t) {
          const [i, e] = l(t);
          if (0 === e.length || e.length > 65)
            throw new Error("Invalid bech32 data length.");
          const r = e[0];
          if (r > 31) throw new Error("Invalid bech32 version.");
          const n = f(e, 1, e, 0, 5, 8, !1);
          if (n.length < 2 || n.length > 40)
            throw new Error("Invalid bech32 data length.");
          return [i, r, n];
        }
        function p(t) {
          let i;
          r("string" === typeof t);
          try {
            [, i] = l(t);
          } catch (n) {
            return !1;
          }
          if (0 === i.length || i.length > 65) return !1;
          const e = i[0];
          return !(e > 31);
        }
        ((i.native = 0),
          (i.serialize = u),
          (i.deserialize = l),
          (i.is = a),
          (i.convertBits = d),
          (i.encode = m),
          (i.decode = g),
          (i.test = p));
      }).call(this, e(2).Buffer);
    },
    11059: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769);
        class HKDF {
          constructor(t, i, e, n) {
            (r(t && "string" === typeof t.id),
              (this.hash = t),
              (this.size = t.size),
              (this.prk = null),
              (this.state = null),
              (this.slab = null),
              (this.save = 0),
              (i || e || n) && this.init(i, e, n));
          }
          init(t, e, r) {
            return (
              null == t && (t = i.alloc(0)),
              null == e && (e = i.alloc(this.size, 0)),
              (this.prk = this.hash.mac(t, e)),
              this.reset(r),
              this
            );
          }
          set(t, e) {
            return (
              r(i.isBuffer(t)),
              r(t.length === this.size),
              (this.prk = t),
              this.reset(e),
              this
            );
          }
          reset(t) {
            (null == t && (t = i.alloc(0)), r(i.isBuffer(t)));
            const e = i.allocUnsafe(this.size + t.length + 1);
            return (
              e.fill(0, 0, this.size),
              t.copy(e, this.size),
              (e[e.length - 1] = 0),
              (this.state = e),
              (this.slab = i.allocUnsafe(this.size)),
              (this.save = 0),
              this
            );
          }
          generate(t) {
            if ((r(t >>> 0 === t), !this.prk || !this.state || !this.slab))
              throw new Error("HKDF is not initialized.");
            const e = (255 - this.state[this.state.length - 1]) * this.size;
            if (t > this.save + e) throw new Error("Too many bytes requested.");
            const n = Math.ceil(Math.max(0, t - this.save) / this.size),
              s = i.allocUnsafe(this.save + n * this.size);
            this.slab.copy(s, 0, 0, this.save);
            for (let i = 0; i < n; i++) {
              let t = this.state;
              (0 === t[t.length - 1] && (t = t.slice(this.size)),
                r(255 !== t[t.length - 1]),
                (t[t.length - 1] += 1));
              const e = this.hash.mac(t, this.prk);
              (e.copy(this.state, 0), e.copy(s, this.save + i * this.size));
            }
            return ((this.save = s.copy(this.slab, 0, t)), s.slice(0, t));
          }
          randomBytes(t) {
            return this.generate(t);
          }
          static extract(t, e, n) {
            return (
              r(t && "string" === typeof t.id),
              null == e && (e = i.alloc(0)),
              null == n && (n = i.alloc(t.size, 0)),
              t.mac(e, n)
            );
          }
          static expand(t, i, e, r) {
            const n = new HKDF(t);
            return n.set(i, e).generate(r);
          }
          static derive(t, i, e, r, n) {
            const s = new HKDF(t);
            return s.init(i, e, r).generate(n);
          }
        }
        ((HKDF.native = 0), (t.exports = HKDF));
      }).call(this, e(2).Buffer);
    },
    11089: function (t, i, e) {
      "use strict";
      (function (t) {
        const r = e(2769),
          n = e(3614),
          { countLeft: s, trimLeft: h } = e(3230),
          { custom: o } = e(3961),
          u = 2048,
          l = 65537,
          a = 512,
          f = 16384,
          c = 3,
          d = 2 ** 33 - 1,
          m = 2,
          g = 33,
          p = t.alloc(1, 0);
        class RSAKey {
          constructor() {
            ((this.n = p), (this.e = p));
          }
          setN(t) {
            return ((this.n = h(t)), this);
          }
          setE(t) {
            return ("number" === typeof t && (t = w(t)), (this.e = h(t)), this);
          }
          bits() {
            return s(this.n);
          }
          size() {
            return (this.bits() + 7) >>> 3;
          }
          pad(i) {
            r(t.isBuffer(i));
            const e = this.bits();
            if (e < a || e > f) return i;
            const n = (e + 7) >>> 3;
            if (i.length >= n) return i;
            const s = t.allocUnsafe(n),
              h = n - i.length;
            return (s.fill(0, 0, h), i.copy(s, h), s);
          }
          toPublic() {
            return this;
          }
          toJSON() {
            return {
              kty: "RSA",
              n: n.encodeURL(this.n),
              e: n.encodeURL(this.e),
              ext: !0,
            };
          }
          fromJSON(t) {
            return (
              r(t && "object" === typeof t),
              r("RSA" === t.kty),
              (this.n = n.decodeURL(t.n)),
              (this.e = n.decodeURL(t.e)),
              this
            );
          }
          [o]() {
            return this.format();
          }
          format() {
            return {
              bits: this.bits(),
              n: this.n.toString("hex"),
              e: this.e.toString("hex"),
            };
          }
          static fromJSON(t) {
            return new this().fromJSON(t);
          }
        }
        class RSAPublicKey extends RSAKey {
          constructor(t, i) {
            (super(), (this.n = h(t)), (this.e = h(i)));
          }
        }
        class RSAPrivateKey extends RSAKey {
          constructor(t, i, e, r, n, s, o, u) {
            (super(),
              (this.n = h(t)),
              (this.e = h(i)),
              (this.d = h(e)),
              (this.p = h(r)),
              (this.q = h(n)),
              (this.dp = h(s)),
              (this.dq = h(o)),
              (this.qi = h(u)));
          }
          setD(t) {
            return ((this.d = h(t)), this);
          }
          setP(t) {
            return ((this.p = h(t)), this);
          }
          setQ(t) {
            return ((this.q = h(t)), this);
          }
          setDP(t) {
            return ((this.dp = h(t)), this);
          }
          setDQ(t) {
            return ((this.dq = h(t)), this);
          }
          setQI(t) {
            return ((this.qi = h(t)), this);
          }
          toPublic() {
            const t = new RSAPublicKey();
            return ((t.n = this.n), (t.e = this.e), t);
          }
          toJSON() {
            return {
              kty: "RSA",
              n: n.encodeURL(this.n),
              e: n.encodeURL(this.e),
              d: n.encodeURL(this.d),
              p: n.encodeURL(this.p),
              q: n.encodeURL(this.q),
              dp: n.encodeURL(this.dp),
              dq: n.encodeURL(this.dq),
              qi: n.encodeURL(this.qi),
              ext: !0,
            };
          }
          fromJSON(t) {
            return (
              r(t && "object" === typeof t),
              r("RSA" === t.kty),
              null != t.n && (this.n = n.decodeURL(t.n)),
              null != t.e && (this.e = n.decodeURL(t.e)),
              null != t.d && (this.d = n.decodeURL(t.d)),
              null != t.p && (this.p = n.decodeURL(t.p)),
              null != t.q && (this.q = n.decodeURL(t.q)),
              null != t.dp && (this.dp = n.decodeURL(t.dp)),
              null != t.dq && (this.dq = n.decodeURL(t.dq)),
              null != t.qi && (this.qi = n.decodeURL(t.qi)),
              this
            );
          }
          format() {
            return {
              bits: this.bits(),
              n: this.n.toString("hex"),
              e: this.e.toString("hex"),
              d: this.d.toString("hex"),
              p: this.p.toString("hex"),
              q: this.q.toString("hex"),
              dp: this.dp.toString("hex"),
              dq: this.dq.toString("hex"),
              qi: this.qi.toString("hex"),
            };
          }
        }
        function w(i) {
          r(Number.isSafeInteger(i) && i >= 0);
          const e = (i * (1 / 4294967296)) >>> 0,
            n = i >>> 0,
            s = t.allocUnsafe(8);
          return (
            (s[0] = 0),
            (s[1] = 0),
            (s[2] = e >>> 8),
            (s[3] = e),
            (s[4] = n >>> 24),
            (s[5] = n >>> 16),
            (s[6] = n >>> 8),
            (s[7] = n),
            s
          );
        }
        ((i.DEFAULT_BITS = u),
          (i.DEFAULT_EXP = l),
          (i.MIN_BITS = a),
          (i.MAX_BITS = f),
          (i.MIN_EXP = c),
          (i.MAX_EXP = d),
          (i.MIN_EXP_BITS = m),
          (i.MAX_EXP_BITS = g),
          (i.RSAKey = RSAKey),
          (i.RSAPublicKey = RSAPublicKey),
          (i.RSAPrivateKey = RSAPrivateKey));
      }).call(this, e(2).Buffer);
    },
    3012: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769);
        class HMAC {
          constructor(t, i, e, n) {
            (void 0 === e && (e = []),
              void 0 === n && (n = []),
              r("function" === typeof t),
              r(i >>> 0 === i),
              r(Array.isArray(e)),
              r(Array.isArray(n)),
              (this.hash = t),
              (this.size = i),
              (this.x = e),
              (this.y = n),
              (this.inner = new t()),
              (this.outer = new t()));
          }
          init(t) {
            if ((r(i.isBuffer(t)), t.length > this.size)) {
              const i = this.hash,
                e = new i();
              (e.init(...this.x),
                e.update(t),
                (t = e.final(...this.y)),
                r(t.length <= this.size));
            }
            const e = i.allocUnsafe(this.size);
            for (let i = 0; i < t.length; i++) e[i] = 54 ^ t[i];
            for (let i = t.length; i < e.length; i++) e[i] = 54;
            (this.inner.init(...this.x), this.inner.update(e));
            for (let i = 0; i < t.length; i++) e[i] = 92 ^ t[i];
            for (let i = t.length; i < e.length; i++) e[i] = 92;
            return (this.outer.init(...this.x), this.outer.update(e), this);
          }
          update(t) {
            return (this.inner.update(t), this);
          }
          final() {
            return (
              this.outer.update(this.inner.final(...this.y)),
              this.outer.final(...this.y)
            );
          }
        }
        t.exports = HMAC;
      }).call(this, e(2).Buffer);
    },
    3961: function (t, i, e) {
      "use strict";
      i.custom = "inspect";
    },
    5658: function (t, i, e) {
      "use strict";
      (function (i) {
        const { custom: r } = e(3961),
          n = [
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
          s = [
            0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          h = [
            0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ],
          o = {
            p192: null,
            p224: null,
            p521: null,
            k256: null,
            p25519: null,
            p448: null,
          },
          u = { NONE: 0, QUO: 1, REM: 2, BOTH: 3, EUCLID: 4, ALL: 7 },
          l = "function" === typeof BigInt;
        class BN {
          constructor(t, i, e) {
            ((this.words = [0]),
              (this.length = 1),
              (this.negative = 0),
              (this.red = null),
              this.from(t, i, e));
          }
          _iadd(t, i) {
            let e = 0,
              r = 0;
            for (
              t.length < i.length && ([t, i] = [i, t]),
                t !== this && this._alloc(t.length);
              r < i.length;
              r++
            ) {
              const n = (0 | t.words[r]) + (0 | i.words[r]) + e;
              ((this.words[r] = 67108863 & n), (e = n >>> 26));
            }
            for (; 0 !== e && r < t.length; r++) {
              const i = (0 | t.words[r]) + e;
              ((this.words[r] = 67108863 & i), (e = i >>> 26));
            }
            if (((this.length = t.length), 0 !== e))
              (this._alloc(this.length + 1), (this.words[this.length++] = e));
            else if (t !== this)
              for (; r < t.length; r++) this.words[r] = t.words[r];
            return this;
          }
          _iaddn(t) {
            if (((this.words[0] += t), this.words[0] < 67108864)) return this;
            let i = 0;
            for (
              this._alloc(this.length + 1), this.words[this.length] = 0;
              i < this.length && this.words[i] >= 67108864;
              i++
            )
              ((this.words[i] -= 67108864), (this.words[i + 1] += 1));
            return ((this.length = Math.max(this.length, i + 1)), this);
          }
          iadd(t) {
            if ((c(BN.isBN(t), "num", "bignum"), this.negative === t.negative))
              this._iadd(this, t);
            else {
              const i = this.ucmp(t);
              if (0 === i)
                return (
                  (this.words[0] = 0),
                  (this.length = 1),
                  (this.negative = 0),
                  this
                );
              i < 0
                ? (this._isub(t, this), (this.negative ^= 1))
                : this._isub(this, t);
            }
            return this;
          }
          iaddn(t) {
            c(M(t), "num", "smi");
            const i = (t < 0) | 0;
            return (
              i && (t = -t),
              this.negative === i
                ? this._iaddn(t)
                : 1 === this.length && this.words[0] < t
                  ? ((this.words[0] = t - this.words[0]), (this.negative ^= 1))
                  : this._isubn(t),
              this
            );
          }
          add(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              t.length > this.length
                ? t.clone().iadd(this)
                : this.clone().iadd(t)
            );
          }
          addn(t) {
            return this.clone().iaddn(t);
          }
          _isub(t, i) {
            let e = 0,
              r = 0;
            for (
              f(t.length >= i.length), t !== this && this._alloc(t.length);
              r < i.length;
              r++
            ) {
              const n = (0 | t.words[r]) - (0 | i.words[r]) + e;
              ((e = n >> 26), (this.words[r] = 67108863 & n));
            }
            for (; 0 !== e && r < t.length; r++) {
              const i = (0 | t.words[r]) + e;
              ((e = i >> 26), (this.words[r] = 67108863 & i));
            }
            if ((f(0 === e), t !== this))
              for (; r < t.length; r++) this.words[r] = t.words[r];
            return ((this.length = Math.max(this.length, r)), this._strip());
          }
          _isubn(t) {
            if (((this.words[0] -= t), this.words[0] >= 0))
              return this._normalize();
            (f(1 !== this.length), this._alloc(this.length + 1));
            for (let i = 0; i < this.length && this.words[i] < 0; i++)
              ((this.words[i] += 67108864), (this.words[i + 1] -= 1));
            return ((this.words[this.length] = 0), this._strip());
          }
          isub(t) {
            if ((c(BN.isBN(t), "num", "bignum"), this.negative !== t.negative))
              this._iadd(this, t);
            else {
              const i = this.ucmp(t);
              if (0 === i)
                return (
                  (this.words[0] = 0),
                  (this.length = 1),
                  (this.negative = 0),
                  this
                );
              i < 0
                ? (this._isub(t, this), (this.negative ^= 1))
                : this._isub(this, t);
            }
            return this;
          }
          isubn(t) {
            c(M(t), "num", "smi");
            const i = (t < 0) | 0;
            return (
              i && (t = -t),
              this.negative !== i
                ? this._iaddn(t)
                : 1 === this.length && this.words[0] < t
                  ? ((this.words[0] = t - this.words[0]), (this.negative ^= 1))
                  : this._isubn(t),
              this
            );
          }
          sub(t) {
            return this.clone().isub(t);
          }
          subn(t) {
            return this.clone().isubn(t);
          }
          _mul(t, i) {
            if (
              (c(BN.isBN(t), "num", "bignum"),
              c(BN.isBN(i), "out", "bignum"),
              10 === this.length && 10 === t.length)
            )
              return P(this, t, i);
            const e = this.length + t.length;
            return e < 63
              ? L(this, t, i)
              : e < 1024
                ? D(this, t, i)
                : K(this, t, i);
          }
          imul(t) {
            return this.mul(t)._move(this);
          }
          imuln(t) {
            c(M(t), "num", "smi");
            const i = (t < 0) | 0;
            i && (t = -t);
            let e = 0;
            for (let r = 0; r < this.length; r++) {
              const i = this.words[r] * t,
                n = (67108863 & i) + (67108863 & e);
              ((e >>= 26),
                (e += (i / 67108864) | 0),
                (e += n >>> 26),
                (this.words[r] = 67108863 & n));
            }
            return (
              (this.negative ^= i),
              0 !== e
                ? (this._alloc(this.length + 1),
                  (this.words[this.length++] = e))
                : this._strip(),
              this
            );
          }
          mul(t) {
            c(BN.isBN(t), "num", "bignum");
            const i = this.length + t.length,
              e = new BN();
            e.words = new Array(i);
            for (let r = 0; r < i; r++) e.words[r] = 0;
            return this._mul(t, e);
          }
          muln(t) {
            return this.clone().imuln(t);
          }
          _div(t, i) {
            (c(BN.isBN(t), "num", "bignum"),
              f((i & u.ALL) === i),
              f(i !== u.NONE));
            const e = this,
              r = t;
            if ((p(!r.isZero()), e.isZero())) return [new BN(0), new BN(0)];
            const n = e.negative,
              s = r.negative;
            ((e.negative = 0), (r.negative = 0));
            let h = null,
              o = null;
            return (
              e.ucmp(r) < 0
                ? (i & u.QUO && (h = new BN(0)), i & u.REM && (o = e.clone()))
                : 1 === r.length
                  ? (i & u.QUO && (h = e.quon(r.words[0])),
                    i & u.REM && (o = e.remn(r.words[0])))
                  : ([h, o] = e._wordDiv(r, i)),
              (e.negative = n),
              (r.negative = s),
              i & u.QUO &&
                ((h.negative = e.negative ^ r.negative), h._normalize()),
              i & u.REM && ((o.negative = e.negative), o._normalize()),
              i & u.EUCLID &&
                (i & u.QUO &&
                  (f(0 !== (i & u.REM)),
                  0 !== o.negative &&
                    (0 !== r.negative ? h.iaddn(1) : h.isubn(1))),
                i & u.REM &&
                  0 !== o.negative &&
                  (0 !== r.negative ? o.isub(r) : o.iadd(r))),
              [h, o]
            );
          }
          _wordDiv(t, i) {
            let e,
              r = this.clone(),
              n = t,
              s = null;
            const h = 0 | n.words[n.length - 1],
              o = 26 - A(h);
            0 !== o
              ? ((n = n.clone()),
                r.iushln(o),
                n.iushln(o),
                (e = 0 | n.words[n.length - 1]))
              : (e = h);
            const l = r.length - n.length;
            if ((f(l >= 0), i & u.QUO)) {
              ((s = new BN(0)),
                (s.length = l + 1),
                (s.words = new Array(s.length)));
              for (let t = 0; t < s.length; t++) s.words[t] = 0;
            }
            const a = r.clone();
            (a._ishlnsubmul(n, 1, l),
              0 === a.negative && (s && (s.words[l] = 1), (r = a)));
            for (let u = l - 1; u >= 0; u--) {
              const t = r.words[n.length + u],
                i = r.words[n.length + u - 1],
                h = ((67108864 * t + i) / e) | 0;
              let o = Math.min(h, 67108863);
              r._ishlnsubmul(n, o, u);
              while (0 !== r.negative)
                ((o -= 1), (r.negative = 0), r._ishlnsubmul(n, 1, u), r.ineg());
              s && (s.words[u] = o);
            }
            return (
              s && s._strip(),
              i & u.REM && 0 !== o && r.iushrn(o),
              [s, r]
            );
          }
          _ishlnsubmul(t, i, e) {
            let r = 0,
              n = 0;
            for (this._expand(t.length + e); n < t.length; n++) {
              const s = (0 | this.words[n + e]) + r,
                h = t.words[n] * i,
                o = s - (67108863 & h);
              ((r = (o >> 26) - ((h / 67108864) | 0)),
                (this.words[n + e] = 67108863 & o));
            }
            for (; n < this.length - e; n++) {
              const t = (0 | this.words[n + e]) + r;
              ((r = t >> 26), (this.words[n + e] = 67108863 & t));
            }
            if (0 === r) return this._strip();
            (f(-1 === r), (r = 0));
            for (let s = 0; s < this.length; s++) {
              const t = -(0 | this.words[s]) + r;
              ((r = t >> 26), (this.words[s] = 67108863 & t));
            }
            return ((this.negative = 1), this._strip());
          }
          quorem(t) {
            return this._div(t, u.BOTH);
          }
          iquo(t) {
            return this.quo(t)._move(this);
          }
          iquon(t) {
            (c(M(t), "num", "smi"), p(0 !== t));
            const i = (t < 0) | 0;
            i && (t = -t);
            let e = 0;
            for (let r = this.length - 1; r >= 0; r--) {
              const i = (0 | this.words[r]) + 67108864 * e;
              ((this.words[r] = (i / t) | 0), (e = i % t));
            }
            return ((this.negative ^= i), this._strip());
          }
          quo(t) {
            return this._div(t, u.QUO)[0];
          }
          quon(t) {
            return this.clone().iquon(t);
          }
          irem(t) {
            return this.rem(t)._move(this);
          }
          iremn(t) {
            let i = this.remrn(t);
            return (
              i < 0 && (i = -i),
              (this.words[0] = i),
              (this.length = 1),
              this._normalize()
            );
          }
          rem(t) {
            return this._div(t, u.REM)[1];
          }
          remn(t) {
            return this.clone().iremn(t);
          }
          remrn(t) {
            (c(M(t), "num", "smi"), p(0 !== t), t < 0 && (t = -t));
            const i = (1 << 26) % t;
            let e = 0;
            for (let r = this.length - 1; r >= 0; r--)
              e = (i * e + (0 | this.words[r])) % t;
            return 0 !== this.negative ? 0 | -e : e;
          }
          divmod(t) {
            return this._div(t, u.BOTH | u.EUCLID);
          }
          idiv(t) {
            return this.div(t)._move(this);
          }
          idivn(t) {
            if (0 === this.negative) return this.iquon(t);
            const i = this.remrn(t);
            return (
              this.iquon(t),
              i < 0 && (t < 0 ? this.iaddn(1) : this.isubn(1)),
              this
            );
          }
          div(t) {
            return this._div(t, u.BOTH | u.EUCLID)[0];
          }
          divn(t) {
            return this.clone().idivn(t);
          }
          imod(t) {
            return this.ucmp(t) < 0
              ? (0 !== this.negative &&
                  (this._isub(t, this), (this.negative = 0)),
                this)
              : this.mod(t)._move(this);
          }
          imodn(t) {
            return (
              (this.words[0] = this.modrn(t)),
              (this.length = 1),
              (this.negative = 0),
              this
            );
          }
          mod(t) {
            return this._div(t, u.REM | u.EUCLID)[1];
          }
          modn(t) {
            return this.clone().imodn(t);
          }
          modrn(t) {
            c(M(t), "num", "smi");
            let i = this.remrn(t);
            return (i < 0 && (t < 0 ? (i -= t) : (i += t)), i);
          }
          divRound(t) {
            const [i, e] = this.quorem(t);
            if (e.isZero()) return i;
            const r = 1 & t.words[0];
            t.iushrn(1);
            const n = e.ucmp(t);
            return (
              t.iushln(1),
              (t.words[0] |= r),
              n < 0 || (t.isOdd() && 0 === n)
                ? i
                : this.negative ^ t.negative
                  ? i.isubn(1)
                  : i.iaddn(1)
            );
          }
          ipow(t) {
            return this.pow(t)._move(this);
          }
          ipown(t) {
            return this.pown(t)._move(this);
          }
          pow(t) {
            c(BN.isBN(t), "num", "bignum");
            let i = A(t.words[t.length - 1]),
              e = new BN(1);
            for (let r = t.length - 1; r >= 0; r--) {
              const n = t.words[r];
              for (let t = i - 1; t >= 0; t--)
                ((e = e.sqr()), (n >> t) & 1 && (e = e.mul(this)));
              i = 26;
            }
            return e;
          }
          pown(t) {
            if ((c(M(t), "num", "smi"), t < 0 && (t = -t), 0 === t))
              return new BN(1);
            if (1 === t) return this.clone();
            const i = A(t);
            let e = this;
            for (let r = i - 2; r >= 0; r--)
              ((e = e.sqr()), (t >> r) & 1 && (e = e.mul(this)));
            return e;
          }
          isqr() {
            return this.imul(this);
          }
          sqr() {
            return this.mul(this);
          }
          _rootrem(t, i) {
            if ((c(t >>> 0 === t, "num", "uint32"), 0 === t))
              throw new RangeError("Zeroth root.");
            if (~t & this.negative)
              throw new RangeError("Negative with even root.");
            if (this.ucmpn(1) <= 0) return [this.clone(), new BN(0)];
            let e,
              r,
              n = new BN(0),
              s = BN.shift(1, (this.bitLength() / t + 1) | 0);
            if ((0 !== this.negative && s.ineg(), 2 === t))
              do {
                ((n = s), (s = this.quo(n)), s.iadd(n), s.iushrn(1));
              } while (s.ucmp(n) < 0);
            else
              do {
                ((n = s),
                  (s = n.pown(t - 1)),
                  (s = this.quo(s)),
                  (e = n.muln(t - 1)),
                  s.iadd(e),
                  (s = s.quon(t)));
              } while (s.ucmp(n) < 0);
            return (i && ((s = n.pown(t)), (r = this.sub(s))), [n, r]);
          }
          rootrem(t) {
            return this._rootrem(t, 1);
          }
          iroot(t) {
            return this.root(t)._move(this);
          }
          root(t) {
            return this._rootrem(t, 0)[0];
          }
          isPower(t) {
            if (
              (c(t >>> 0 === t, "num", "uint32"), 0 === t || ~t & this.negative)
            )
              return !1;
            const [, i] = this.rootrem(t);
            return 0 === i.sign();
          }
          sqrtrem() {
            return this.rootrem(2);
          }
          isqrt() {
            return this.sqrt()._move(this);
          }
          sqrt() {
            return this.root(2);
          }
          isSquare() {
            return 0 === this.sign() || this.isPower(2);
          }
          iand(t) {
            c(BN.isBN(t), "num", "bignum");
            let i = this,
              e = t;
            if (i === e) return i;
            if (0 === (i.negative | e.negative)) return i.iuand(e);
            if (1 === (i.negative & e.negative))
              return (
                i.iaddn(1),
                e.iaddn(1),
                i.iuor(e),
                i.isubn(1),
                e.isubn(1),
                i
              );
            0 !== i.negative && ([i, e] = [e.clone(), i]);
            const r = i.bitLength();
            return (
              e.iaddn(1),
              e.inotn(r),
              i.iuand(e),
              e.inotn(r),
              e.isubn(1),
              i._move(this)
            );
          }
          iandn(t) {
            return (
              c(M(t), "num", "smi"),
              0 !== (this.negative | (t < 0))
                ? this.iand(new BN(t))
                : ((this.words[0] &= t), (this.length = 1), this)
            );
          }
          and(t) {
            return this.clone().iand(t);
          }
          andn(t) {
            return this.clone().iandn(t);
          }
          andrn(t) {
            if ((c(M(t), "num", "smi"), 0 !== (this.negative | (t < 0)))) {
              const i = this.iand(new BN(t));
              if (i.length > 1) throw new RangeError("Number exceeds 26 bits.");
              return 0 !== i.negative ? -i.words[0] : i.words[0];
            }
            return this.words[0] & t;
          }
          iuand(t) {
            (c(BN.isBN(t), "num", "bignum"),
              (this.length = Math.min(this.length, t.length)));
            for (let i = 0; i < this.length; i++) this.words[i] &= t.words[i];
            return this._strip();
          }
          iuandn(t) {
            return (
              c(M(t), "num", "smi"),
              (this.words[0] &= Math.abs(t)),
              (this.length = 1),
              this._normalize()
            );
          }
          uand(t) {
            return this.clone().iuand(t);
          }
          uandn(t) {
            return this.clone().iuandn(t);
          }
          uandrn(t) {
            c(M(t), "num", "smi");
            const i = this.words[0] & Math.abs(t);
            return 0 !== this.negative ? 0 | -i : i;
          }
          ior(t) {
            c(BN.isBN(t), "num", "bignum");
            let i = this,
              e = t;
            return i === e
              ? i
              : 0 === (i.negative | e.negative)
                ? i.iuor(e)
                : 1 === (i.negative & e.negative)
                  ? (i.iaddn(1),
                    e.iaddn(1),
                    i.iuand(e),
                    i.isubn(1),
                    e.isubn(1),
                    i)
                  : ((e = e.clone()),
                    0 !== i.negative && ([i, e] = [e, i]),
                    e.iaddn(1),
                    i.inotn(e.bitLength()),
                    e.iuand(i),
                    e.isubn(1),
                    e._move(this));
          }
          iorn(t) {
            return (
              c(M(t), "num", "smi"),
              0 !== (this.negative | (t < 0))
                ? this.ior(new BN(t))
                : ((this.words[0] |= t), this)
            );
          }
          or(t) {
            return this.clone().ior(t);
          }
          orn(t) {
            return this.clone().iorn(t);
          }
          iuor(t) {
            (c(BN.isBN(t), "num", "bignum"), this._expand(t.length));
            for (let i = 0; i < t.length; i++) this.words[i] |= t.words[i];
            return this;
          }
          iuorn(t) {
            return (
              c(M(t), "num", "smi"),
              (this.words[0] |= Math.abs(t)),
              this
            );
          }
          uor(t) {
            return this.clone().iuor(t);
          }
          uorn(t) {
            return this.clone().iuorn(t);
          }
          ixor(t) {
            c(BN.isBN(t), "num", "bignum");
            let i = this,
              e = t;
            return i === e
              ? ((i.words[0] = 0), (i.length = 1), (i.negative = 0), i)
              : 0 === (i.negative | e.negative)
                ? i.iuxor(e)
                : 1 === (i.negative & e.negative)
                  ? (i.iaddn(1),
                    e.iaddn(1),
                    i.iuxor(e),
                    i.ineg(),
                    e.isubn(1),
                    i)
                  : (0 !== i.negative && ([i, e] = [e.clone(), i]),
                    e.iaddn(1),
                    i.iuxor(e),
                    i.iaddn(1),
                    i.ineg(),
                    e.isubn(1),
                    i._move(this));
          }
          ixorn(t) {
            return (
              c(M(t), "num", "smi"),
              0 !== (this.negative | (t < 0))
                ? this.ixor(new BN(t))
                : ((this.words[0] ^= t), this)
            );
          }
          xor(t) {
            return this.clone().ixor(t);
          }
          xorn(t) {
            return this.clone().ixorn(t);
          }
          iuxor(t) {
            c(BN.isBN(t), "num", "bignum");
            let i = this,
              e = t;
            i.length < e.length && ([i, e] = [e, i]);
            let r = 0;
            for (; r < e.length; r++) this.words[r] = i.words[r] ^ e.words[r];
            if (i !== this)
              for (this._alloc(i.length); r < i.length; r++)
                this.words[r] = i.words[r];
            return ((this.length = i.length), this._strip());
          }
          iuxorn(t) {
            return (
              c(M(t), "num", "smi"),
              (this.words[0] ^= Math.abs(t)),
              this._normalize()
            );
          }
          uxor(t) {
            return this.clone().iuxor(t);
          }
          uxorn(t) {
            return this.clone().iuxorn(t);
          }
          inot() {
            return (
              0 !== this.negative ? this.ineg().isubn(1) : this.iaddn(1).ineg(),
              this
            );
          }
          not() {
            return this.clone().inot();
          }
          inotn(t) {
            c(t >>> 0 === t, "width", "uint32");
            const i = t % 26;
            let e = Math.ceil(t / 26),
              r = 0;
            for (this._expand(e), i > 0 && (e -= 1); r < e; r++)
              this.words[r] ^= 67108863;
            return (i > 0 && (this.words[r] ^= (1 << i) - 1), this._strip());
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
          ishln(t) {
            return this.iushln(t);
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
          iushln(t) {
            c(t >>> 0 === t, "bits", "uint32");
            const i = t % 26,
              e = (t - i) / 26,
              r = ((1 << i) - 1) << (26 - i);
            if (0 !== i) {
              let t = 0;
              for (let e = 0; e < this.length; e++) {
                const n = this.words[e] & r,
                  s = ((0 | this.words[e]) - n) << i;
                ((this.words[e] = s | t), (t = n >>> (26 - i)));
              }
              0 !== t &&
                (this._alloc(this.length + 1), (this.words[this.length++] = t));
            }
            if (0 !== e) {
              this._alloc(this.length + e);
              for (let t = this.length - 1; t >= 0; t--)
                this.words[t + e] = this.words[t];
              for (let t = 0; t < e; t++) this.words[t] = 0;
              this.length += e;
            }
            return this._strip();
          }
          ushl(t) {
            return this.clone().iushl(t);
          }
          ushln(t) {
            return this.clone().iushln(t);
          }
          _split(t, i) {
            const e = t % 26,
              r = Math.min((t - e) / 26, this.length),
              n = (1 << e) - 1;
            if (i) {
              i._alloc(r);
              for (let t = 0; t < r; t++) i.words[t] = this.words[t];
              i.length = r;
            }
            if (0 === r);
            else if (this.length > r) {
              this.length -= r;
              for (let t = 0; t < this.length; t++)
                this.words[t] = this.words[t + r];
            } else ((this.words[0] = 0), (this.length = 1));
            let s = 0;
            for (let h = this.length - 1; h >= 0; h--) {
              const t = 0 | this.words[h];
              ((this.words[h] = (s << (26 - e)) | (t >>> e)), (s = t & n));
            }
            return (
              i &&
                (0 !== s
                  ? (i._alloc(i.length + 1), (i.words[i.length++] = s))
                  : (0 === i.length && (i.words[i.length++] = 0), i._strip())),
              this._strip()
            );
          }
          ishr(t) {
            return (
              c(BN.isBN(t), "bits", "bignum"),
              c(t.bitLength() <= 32, "bits", "uint32"),
              this.ishrn(t.toNumber())
            );
          }
          ishrn(t) {
            return (
              c(t >>> 0 === t, "bits", "uint32"),
              0 !== this.negative
                ? (this.iaddn(1), this.iushrn(t), this.isubn(1), this)
                : this.iushrn(t)
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
          iushrn(t) {
            return (c(t >>> 0 === t, "bits", "uint32"), this._split(t, null));
          }
          ushr(t) {
            return this.clone().iushr(t);
          }
          ushrn(t) {
            return this.clone().iushrn(t);
          }
          setn(t, i) {
            return (
              c(t >>> 0 === t, "bit", "uint32"),
              0 !== this.negative
                ? (this.iaddn(1), this.usetn(t, !i), this.isubn(1), this)
                : this.usetn(t, i)
            );
          }
          usetn(t, i) {
            c(t >>> 0 === t, "bit", "uint32");
            const e = t % 26,
              r = (t - e) / 26;
            return (
              this._expand(r + 1),
              i ? (this.words[r] |= 1 << e) : (this.words[r] &= ~(1 << e)),
              this._strip()
            );
          }
          testn(t) {
            c(t >>> 0 === t, "bit", "uint32");
            const i = t % 26,
              e = (t - i) / 26;
            if (this.length <= e) return this.negative;
            const r = this.words[e],
              n = (r >> i) & 1;
            if (0 !== this.negative) {
              if (i > 0 && r & ((1 << i) - 1)) return 1 ^ n;
              let t = e;
              while (t--) if (this.words[t] > 0) return 1 ^ n;
            }
            return n;
          }
          utestn(t) {
            c(t >>> 0 === t, "bit", "uint32");
            const i = t % 26,
              e = (t - i) / 26;
            return this.length <= e ? 0 : (this.words[e] >> i) & 1;
          }
          imaskn(t) {
            return (
              c(t >>> 0 === t, "bits", "uint32"),
              0 !== this.negative &&
                (this.iaddn(1), this.inotn(t + 1), this.ineg()),
              this.iumaskn(t)
            );
          }
          maskn(t) {
            return this.clone().imaskn(t);
          }
          iumaskn(t) {
            c(t >>> 0 === t, "bits", "uint32");
            const i = t % 26;
            let e = (t - i) / 26;
            return this.length <= e
              ? this
              : (0 !== i && (e += 1),
                (this.length = Math.min(e, this.length)),
                0 !== i && (this.words[this.length - 1] &= (1 << i) - 1),
                0 === this.length && (this.words[this.length++] = 0),
                this._strip());
          }
          umaskn(t) {
            return this.clone().iumaskn(t);
          }
          andln(t) {
            return this.words[0] & t;
          }
          ineg() {
            return (this.isZero() || (this.negative ^= 1), this);
          }
          neg() {
            return this.clone().ineg();
          }
          iabs() {
            return ((this.negative = 0), this);
          }
          abs() {
            return this.clone().iabs();
          }
          cmp(t) {
            if ((c(BN.isBN(t), "num", "bignum"), this.negative !== t.negative))
              return t.negative - this.negative;
            const i = this.ucmp(t);
            return 0 !== this.negative ? 0 | -i : i;
          }
          cmpn(t) {
            c(M(t), "num", "smi");
            const i = (t < 0) | 0;
            if (this.negative !== i) return i - this.negative;
            const e = this.ucmpn(t);
            return 0 !== this.negative ? 0 | -e : e;
          }
          eq(t) {
            return 0 === this.cmp(t);
          }
          eqn(t) {
            return 0 === this.cmpn(t);
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
          sign() {
            return 0 !== this.negative
              ? -1
              : 1 === this.length && 0 === this.words[0]
                ? 0
                : 1;
          }
          isZero() {
            return 1 === this.length && 0 === this.words[0];
          }
          isNeg() {
            return 0 !== this.negative;
          }
          isPos() {
            return 0 === this.negative;
          }
          isOdd() {
            return 1 === (1 & this.words[0]);
          }
          isEven() {
            return 0 === (1 & this.words[0]);
          }
          ucmp(t) {
            if ((c(BN.isBN(t), "num", "bignum"), this.length < t.length))
              return -1;
            if (this.length > t.length) return 1;
            for (let i = this.length - 1; i >= 0; i--) {
              const e = 0 | this.words[i],
                r = 0 | t.words[i];
              if (e !== r) return (e > r) - (e < r);
            }
            return 0;
          }
          ucmpn(t) {
            if ((c(M(t), "num", "smi"), this.length > 1)) return 1;
            const i = 0 | this.words[0];
            return (t < 0 && (t = -t), (i > t) - (i < t));
          }
          legendre(t) {
            const i = l ? BN.red(t) : BN.mont(t);
            return this.toRed(i).redLegendre();
          }
          jacobi(t) {
            if ((c(BN.isBN(t), "num", "bignum"), t.isZero() || t.isEven()))
              throw new Error("jacobi: `num` must be odd.");
            let i = this._cloneNormal(),
              e = t._cloneNormal(),
              r = 1;
            for (e.isNeg() && (i.isNeg() && (r = -1), e.ineg()); ; ) {
              if (0 === e.cmpn(1)) return r;
              if (i.isZero()) return 0;
              if ((i.imod(e), i.isZero())) return 0;
              const t = i.zeroBits();
              if (1 & t) {
                const t = e.andln(7);
                (3 !== t && 5 !== t) || (r = -r);
              }
              const n = i.iushrn(t);
              (3 === e.andln(3) && 3 === n.andln(3) && (r = -r),
                (i = e),
                (e = n));
            }
          }
          kronecker(t) {
            c(BN.isBN(t), "num", "bignum");
            const i = [0, 1, 0, -1, 0, -1, 0, 1];
            let e = this._cloneNormal(),
              r = t._cloneNormal(),
              n = 1;
            if (r.isZero()) return 0 === e.ucmpn(1) ? n : 0;
            if (!e.isOdd() && !r.isOdd()) return 0;
            const s = r.zeroBits();
            for (
              r.iushrn(s),
                1 & s && (n = i[e.andln(7)]),
                r.isNeg() && (e.isNeg() && (n = -n), r.ineg());
              ;
            ) {
              if (e.isZero()) return 0 === r.cmpn(1) ? n : 0;
              const t = e.zeroBits();
              (e.iushrn(t), 1 & t && (n *= i[r.andln(7)]));
              const s = e.words[0] ^ (67108863 * e.negative);
              (s & r.words[0] & 2 && (n = -n),
                r.imod(e),
                ([e, r] = [r, e]),
                (r.negative = 0));
            }
          }
          igcd(t) {
            return this.gcd(t)._move(this);
          }
          gcd(t) {
            if ((c(BN.isBN(t), "num", "bignum"), this.isZero())) return t.abs();
            if (t.isZero()) return this.abs();
            let i = this.clone(),
              e = t.clone();
            ((i.negative = 0), (e.negative = 0));
            const r = i._factor2(e);
            for (0 !== r && (i.iushrn(r), e.iushrn(r)); ; ) {
              const t = i.zeroBits(),
                r = e.zeroBits();
              (0 !== t && i.iushrn(t), 0 !== r && e.iushrn(r));
              const n = i.ucmp(e);
              if (n < 0) [i, e] = [e, i];
              else if (0 === n || 0 === e.ucmpn(1)) break;
              i._isub(i, e);
            }
            return e.iushln(r);
          }
          ilcm(t) {
            return this.lcm(t)._move(this);
          }
          lcm(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              this.isZero() || t.isZero()
                ? new BN(0)
                : this.quo(this.gcd(t)).mul(t).iabs()
            );
          }
          egcd(t) {
            if ((c(BN.isBN(t), "num", "bignum"), this.isZero()))
              return [new BN(0), new BN(t.sign()), t.abs()];
            if (t.isZero()) return [new BN(this.sign()), new BN(0), this.abs()];
            const i = this.clone(),
              e = t.clone();
            ((i.negative = 0), (e.negative = 0));
            const r = new BN(1),
              n = new BN(0),
              s = new BN(0),
              h = new BN(1),
              o = i._factor2(e);
            0 !== o && (i.iushrn(o), e.iushrn(o));
            const u = e.clone(),
              l = i.clone();
            while (!i.isZero()) {
              let t = 0;
              for (let e = 1; 0 === (i.words[0] & e) && t < 26; e <<= 1) t += 1;
              if (t > 0) {
                i.iushrn(t);
                while (t > 0)
                  ((r.isOdd() || n.isOdd()) && (r.iadd(u), n.isub(l)),
                    r.iushrn(1),
                    n.iushrn(1),
                    (t -= 1));
              }
              let o = 0;
              for (let i = 1; 0 === (e.words[0] & i) && o < 26; i <<= 1) o += 1;
              if (o > 0) {
                e.iushrn(o);
                while (o > 0)
                  ((s.isOdd() || h.isOdd()) && (s.iadd(u), h.isub(l)),
                    s.iushrn(1),
                    h.iushrn(1),
                    (o -= 1));
              }
              i.cmp(e) >= 0
                ? (i.isub(e), r.isub(s), n.isub(h))
                : (e.isub(i), s.isub(r), h.isub(n));
            }
            return (
              0 !== this.negative && s.ineg(),
              0 !== t.negative && h.ineg(),
              [s, h, e.iushln(o)]
            );
          }
          iinvert(t) {
            return this.invert(t)._move(this);
          }
          invert(t) {
            if (
              (c(BN.isBN(t), "num", "bignum"),
              d(t.sign() > 0, "invert"),
              0 === t.cmpn(1))
            )
              throw new RangeError("Not invertible.");
            const [i, , e] = this.egcd(t);
            if (0 !== e.cmpn(1)) throw new RangeError("Not invertible.");
            return i.imod(t);
          }
          ifermat(t) {
            return this.fermat(t)._move(this);
          }
          fermat(t) {
            const i = l ? BN.red(t) : BN.mont(t);
            return this.toRed(i).redFermat().fromRed();
          }
          ipowm(t, i, e, r) {
            return this.powm(t, i, e, r)._move(this);
          }
          powm(t, i, e, r) {
            const n = !l && e ? BN.mont(i) : BN.red(i);
            return this.toRed(n).redPow(t, r).fromRed();
          }
          ipowmn(t, i, e) {
            return this.powmn(t, i, e)._move(this);
          }
          powmn(t, i, e) {
            const r = e ? BN.mont(i) : BN.red(i);
            return this.toRed(r).redPown(t).fromRed();
          }
          isqrtm(t) {
            return this.sqrtm(t)._move(this);
          }
          sqrtm(t) {
            let i;
            return (
              c(BN.isBN(t), "p", "bignum"),
              (i =
                3 === t.andln(3) || 5 === t.andln(7) ? BN.red(t) : BN.mont(t)),
              this.toRed(i).redSqrt().fromRed()
            );
          }
          isqrtpq(t, i) {
            return this.sqrtpq(t, i)._move(this);
          }
          sqrtpq(t, i) {
            const e = this.sqrtm(t),
              r = this.sqrtm(i),
              [n, s] = t.egcd(i),
              h = r.mul(n).mul(t),
              o = e.mul(s).mul(i),
              u = t.mul(i);
            return h.iadd(o).imod(u);
          }
          isPrime(t, i, e) {
            return (
              c(i >>> 0 === i, "reps", "uint32"),
              !!this.isPrimeMR(t, i + 1, !0) && !!this.isPrimeLucas(e)
            );
          }
          isPrimeMR(t, i, e) {
            (void 0 === e && (e = !1),
              c(i >>> 0 === i, "reps", "uint32"),
              c(i > 0, "reps", "integer"),
              c("boolean" === typeof e, "force2", "boolean"));
            const r = this;
            if (r.cmpn(7) < 0)
              return 0 === r.cmpn(2) || 0 === r.cmpn(3) || 0 === r.cmpn(5);
            if (r.isEven()) return !1;
            const n = r.subn(1),
              s = n.subn(2),
              h = n.zeroBits(),
              o = n.ushrn(h),
              u = BN.red(r),
              l = n.toRed(u),
              a = new BN(1).toRed(u);
            t: for (let f = 0; f < i; f++) {
              let r;
              f === i - 1 && e
                ? (r = new BN(2))
                : ((r = BN.random(t, 0, s)), r.iaddn(2));
              let n = r.toRed(u).redPow(o);
              if (0 !== n.cmp(a) && 0 !== n.cmp(l)) {
                for (let t = 1; t < h; t++) {
                  if (((n = n.redSqr()), 0 === n.cmp(l))) continue t;
                  if (0 === n.cmp(a)) return !1;
                }
                return !1;
              }
            }
            return !0;
          }
          isPrimeLucas(t) {
            (void 0 === t && (t = 0), c(t >>> 0 === t, "limit", "uint32"));
            const i = this;
            if (i.cmpn(1) <= 0) return !1;
            if (i.isEven()) return 0 === i.cmpn(2);
            let e = 3;
            for (;;) {
              if (e > 1e4)
                throw new Error(
                  `Cannot find (D/n) = -1 for ${i.toString(10)}.`,
                );
              if (t > 0 && e > t) return !1;
              const r = new BN(e * e - 4),
                n = r.jacobi(i);
              if (-1 === n) break;
              if (0 === n) return 0 === i.cmpn(e + 2);
              if (40 === e && i.isSquare()) return !1;
              e += 1;
            }
            const r = i.addn(1),
              n = r.zeroBits(),
              s = i.subn(2);
            let h = new BN(2),
              o = new BN(e);
            r.iushrn(n);
            for (let u = r.bitLength(); u >= 0; u--)
              r.utestn(u)
                ? ((h = h.mul(o).iadd(i).isubn(e).imod(i)),
                  (o = o.sqr().iadd(s).imod(i)))
                : ((o = o.mul(h).iadd(i).isubn(e).imod(i)),
                  (h = h.sqr().iadd(s).imod(i)));
            if (0 === h.cmpn(2) || 0 === h.cmp(s)) {
              let t = h.muln(e),
                r = o.ushln(1);
              if (
                (t.cmp(r) < 0 && ([t, r] = [r, t]), t.isub(r).imod(i).isZero())
              )
                return !0;
            }
            for (let u = 0; u < n - 1; u++) {
              if (h.isZero()) return !0;
              if (0 === h.cmpn(2)) return !1;
              h = h.sqr().isubn(2).imod(i);
            }
            return !1;
          }
          toTwos(t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }
          fromTwos(t) {
            return (
              c(t >>> 0 === t, "width", "uint32"),
              d(t > 0, "width"),
              this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            );
          }
          toRed(t) {
            if ((c(t instanceof Red, "ctx", "reduction context"), this.red))
              throw new Error("Already in reduction context.");
            return t.convertTo(this)._forceRed(t);
          }
          fromRed() {
            return (m(this.red, "fromRed"), this.red.convertFrom(this));
          }
          forceRed(t) {
            if (this.red) throw new Error("Already in reduction context.");
            return this._forceRed(t);
          }
          redIAdd(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redIAdd"),
              this.red.iadd(this, t)
            );
          }
          redAdd(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redAdd"),
              this.red.add(this, t)
            );
          }
          redIAddn(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redIAddn"),
              this.red.iaddn(this, t)
            );
          }
          redAddn(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redAddn"),
              this.red.addn(this, t)
            );
          }
          redISub(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redISub"),
              this.red.isub(this, t)
            );
          }
          redSub(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redSub"),
              this.red.sub(this, t)
            );
          }
          redISubn(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redISubn"),
              this.red.isubn(this, t)
            );
          }
          redSubn(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redSubn"),
              this.red.subn(this, t)
            );
          }
          redIMul(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redIMul"),
              this.red.imul(this, t)
            );
          }
          redMul(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redMul"),
              this.red.mul(this, t)
            );
          }
          redIMuln(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redIMuln"),
              this.red.imuln(this, t)
            );
          }
          redMuln(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redMuln"),
              this.red.muln(this, t)
            );
          }
          redISqr() {
            return (m(this.red, "redISqr"), this.red.isqr(this));
          }
          redSqr() {
            return (m(this.red, "redSqr"), this.red.sqr(this));
          }
          redIShl(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redIShl"),
              g(!t.red, "redIShl"),
              this.red.ishl(this, t)
            );
          }
          redShl(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redShl"),
              g(!t.red, "redShl"),
              this.red.shl(this, t)
            );
          }
          redIShln(t) {
            return (
              c(t >>> 0 === t, "num", "uint32"),
              m(this.red, "redIShln"),
              this.red.ishln(this, t)
            );
          }
          redShln(t) {
            return (
              c(t >>> 0 === t, "num", "uint32"),
              m(this.red, "redShln"),
              this.red.shln(this, t)
            );
          }
          redINeg() {
            return (m(this.red, "redINeg"), this.red.ineg(this));
          }
          redNeg() {
            return (m(this.red, "redNeg"), this.red.neg(this));
          }
          redCmp(t) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redCmp"),
              this.red.cmp(this, t)
            );
          }
          redCmpn(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redCmpn"),
              this.red.cmpn(this, t)
            );
          }
          redIsOdd() {
            return (m(this.red, "redIsOdd"), this.red.isOdd(this));
          }
          redIsEven() {
            return (m(this.red, "redIsEven"), this.red.isEven(this));
          }
          redISqrt() {
            return (m(this.red, "redISqrt"), this.red.isqrt(this));
          }
          redSqrt() {
            return (m(this.red, "redSqrt"), this.red.sqrt(this));
          }
          redIInvert() {
            return (m(this.red, "redIInvert"), this.red.iinvert(this));
          }
          redInvert() {
            return (m(this.red, "redInvert"), this.red.invert(this));
          }
          redIFermat() {
            return (m(this.red, "redIFermat"), this.red.ifermat(this));
          }
          redFermat() {
            return (m(this.red, "redFermat"), this.red.fermat(this));
          }
          redLegendre() {
            return (m(this.red, "redLegendre"), this.red.legendre(this));
          }
          redJacobi() {
            return (m(this.red, "redJacobi"), this.red.jacobi(this));
          }
          redKronecker() {
            return (m(this.red, "redKronecker"), this.red.kronecker(this));
          }
          redIPow(t, i) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redIPow"),
              g(!t.red, "redIPow"),
              this.red.ipow(this, t, i)
            );
          }
          redPow(t, i) {
            return (
              c(BN.isBN(t), "num", "bignum"),
              m(this.red, "redPow"),
              g(!t.red, "redPow"),
              this.red.pow(this, t, i)
            );
          }
          redIPown(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redIPown"),
              this.red.ipown(this, t)
            );
          }
          redPown(t) {
            return (
              c(M(t), "num", "smi"),
              m(this.red, "redPown"),
              this.red.pown(this, t)
            );
          }
          _move(t) {
            return (
              (t.words = this.words),
              (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red),
              t
            );
          }
          _alloc(t) {
            while (this.words.length < t) this.words.push(0);
            return this;
          }
          _expand(t) {
            this._alloc(t);
            while (this.length < t) this.words[this.length++] = 0;
            return this;
          }
          _strip() {
            while (this.length > 1 && 0 === this.words[this.length - 1])
              this.length -= 1;
            return this._normalize();
          }
          _normalize() {
            return (
              f(this.length > 0),
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }
          _check() {
            return (
              f(this.length > 0),
              1 === this.length
                ? (0 === this.words[0] && f(0 === this.negative), this)
                : (f(0 !== this.words[this.length - 1]), this)
            );
          }
          _invertp(t) {
            if (
              (c(BN.isBN(t), "p", "bignum"),
              f(0 === this.negative),
              f(t.sign() > 0),
              this.isZero() || 0 === t.cmpn(1))
            )
              throw new RangeError("Not invertible.");
            const i = this.clone(),
              e = t.clone(),
              r = new BN(1),
              n = new BN(0),
              s = e.clone();
            while (i.cmpn(1) > 0 && e.cmpn(1) > 0) {
              let t = 0;
              for (let e = 1; 0 === (i.words[0] & e) && t < 26; e <<= 1) t += 1;
              if (t > 0) {
                i.iushrn(t);
                while (t > 0) (r.isOdd() && r.iadd(s), r.iushrn(1), (t -= 1));
              }
              let h = 0;
              for (let i = 1; 0 === (e.words[0] & i) && h < 26; i <<= 1) h += 1;
              if (h > 0) {
                e.iushrn(h);
                while (h > 0) (n.isOdd() && n.iadd(s), n.iushrn(1), (h -= 1));
              }
              i.cmp(e) >= 0 ? (i.isub(e), r.isub(n)) : (e.isub(i), n.isub(r));
            }
            const h = 0 === i.cmpn(1) ? r : n;
            return (
              h.ucmp(t) >= 0 &&
                (h._isub(h, t), h.ucmp(t) >= 0 && h._isub(h, t)),
              h.isNeg() && h.iadd(t),
              h
            );
          }
          _factor2(t) {
            if (1 & (this.words[0] | t.words[0])) return 0;
            const i = Math.min(this.length, t.length);
            let e = 0;
            for (let r = 0; r < i; r++) {
              const i = S(this.words[r] | t.words[r]);
              if (((e += i), 26 !== i)) break;
            }
            return e;
          }
          _cloneNormal() {
            return this.red ? this.fromRed() : this.clone();
          }
          _forceRed(t) {
            return ((this.red = t), this);
          }
          clone() {
            const t = new BN();
            t.words = new Array(this.length);
            for (let i = 0; i < this.length; i++) t.words[i] = this.words[i];
            return (
              (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red),
              t
            );
          }
          inject(t) {
            (c(BN.isBN(t), "num", "bignum"), this._alloc(t.length));
            for (let i = 0; i < t.length; i++) this.words[i] = t.words[i];
            return (
              (this.length = t.length),
              (this.negative = t.negative),
              (this.red = t.red),
              this
            );
          }
          set(t, i) {
            return this.fromNumber(t, i);
          }
          swap(t) {
            c(BN.isBN(t), "num", "bignum");
            const i = this,
              e = t;
            return (
              ([i.words, e.words] = [e.words, i.words]),
              ([i.length, e.length] = [e.length, i.length]),
              ([i.negative, e.negative] = [e.negative, i.negative]),
              ([i.red, e.red] = [e.red, i.red]),
              i
            );
          }
          reverse() {
            const t = this.negative;
            return (
              this.fromBuffer(this.toBuffer("be"), "le"),
              (this.negative = t),
              this
            );
          }
          byteLength() {
            return Math.ceil(this.bitLength() / 8);
          }
          bitLength() {
            const t = this.words[this.length - 1],
              i = A(t);
            return 26 * (this.length - 1) + i;
          }
          zeroBits() {
            if (this.isZero()) return 0;
            if (this.isOdd()) return 0;
            let t = 0;
            for (let i = 0; i < this.length; i++) {
              const e = S(this.words[i]);
              if (((t += e), 26 !== e)) break;
            }
            return t;
          }
          isSafe() {
            return (
              this.length <= 2 || (3 === this.length && 1 === this.words[2])
            );
          }
          word(t) {
            return (
              c(t >>> 0 === t, "pos", "uint32"),
              t >= this.length ? 0 : this.words[t]
            );
          }
          [r]() {
            let t = "BN";
            return (this.red && (t = "BN-R"), `<${t}: ${this.toString(10)}>`);
          }
          csign() {
            return -2 * this.negative + 1 - this.czero();
          }
          czero() {
            const t = (this.words[0] - 1) >>> 31;
            return ((this.length - 2) >>> 31) & t;
          }
          cneg() {
            return this.negative;
          }
          cpos() {
            return 1 ^ this.negative;
          }
          ceq(t) {
            c(BN.isBN(t), "num", "bignum");
            let i = 0;
            for (let e = 0; e < t.length; e++)
              i |= this.words[e % this.length] ^ t.words[e];
            return (
              (i |= this.length ^ t.length),
              (i |= this.negative ^ t.negative),
              (i - 1) >>> 31
            );
          }
          ceqn(t) {
            const i = (t >> 31) & 1,
              e = ((0 | t) * (1 | -i)) & 67108863;
            let r = 0;
            return (
              (r |= this.words[0] ^ e),
              (r |= 1 ^ this.length),
              (r |= this.negative ^ i),
              (r - 1) >>> 31
            );
          }
          cswap(t, i) {
            c(BN.isBN(t), "num", "bignum");
            const e = this,
              r = t,
              n = 1 & ((i >> 31) | (-i >> 31)),
              s = 67108863 & -n;
            (e._alloc(r.words.length), r._alloc(e.words.length));
            for (let u = 0; u < e.words.length; u++) {
              const t = (e.words[u] ^ r.words[u]) & s;
              ((e.words[u] ^= t), (r.words[u] ^= t));
            }
            const h = (e.length ^ r.length) & s,
              o = (e.negative ^ r.negative) & s;
            return (
              (e.length ^= h),
              (r.length ^= h),
              (e.negative ^= o),
              (r.negative ^= o),
              this
            );
          }
          cinject(t, i) {
            c(BN.isBN(t), "num", "bignum");
            const e = this,
              r = t,
              n = 1 & ((i >> 31) | (-i >> 31)),
              s = (n - 1) & 67108863,
              h = 67108863 & ~(n - 1);
            e._alloc(r.length);
            for (let o = 0; o < r.length; o++)
              e.words[o] = (e.words[o] & s) | (r.words[o] & h);
            return (
              (e.length = (e.length & s) | (r.length & h)),
              (e.negative = (e.negative & s) | (r.negative & h)),
              this
            );
          }
          cset(t, i) {
            const e = 1 & ((i >> 31) | (-i >> 31)),
              r = (e - 1) & 67108863,
              n = 67108863 & ~(e - 1),
              s = (t >> 31) & 1,
              h = ((0 | t) * (1 | -s)) & 67108863;
            return (
              (this.words[0] = (this.words[0] & r) | (h & n)),
              (this.length = (this.length & r) | (1 & n)),
              (this.negative = (this.negative & r) | (s & n)),
              this
            );
          }
          toNumber() {
            let t = this.words[0];
            if (2 === this.length) t += 67108864 * this.words[1];
            else if (3 === this.length && 1 === this.words[2])
              t += 4503599627370496 + 67108864 * this.words[1];
            else if (this.length > 2)
              throw new RangeError(
                "Number can only safely store up to 53 bits.",
              );
            return 0 !== this.negative ? -t : t;
          }
          toDouble() {
            let t = 0;
            for (let i = this.length - 1; i >= 0; i--)
              t = 67108864 * t + this.words[i];
            return 0 !== this.negative ? -t : t;
          }
          valueOf() {
            return this.toDouble();
          }
          toBigInt() {
            if (!l) throw new Error("BigInt is not supported!");
            const t = BigInt(52),
              i = BigInt(26);
            let e = this.length - 1,
              r = BigInt(0);
            for (; e >= 1; e -= 2) {
              const i = 67108864 * this.words[e],
                n = this.words[e - 1];
              r = (r << t) | BigInt(i + n);
            }
            return (
              e >= 0 && (r = (r << i) | BigInt(this.words[0])),
              0 !== this.negative ? -r : r
            );
          }
          toBool() {
            return !this.isZero();
          }
          toString(t, i) {
            if (
              ((t = B(t)),
              null == i && (i = 0),
              0 === i && (i = 1),
              c(t >>> 0 === t, "base", "uint32"),
              c(i >>> 0 === i, "padding", "uint32"),
              t < 2 || t > 36)
            )
              throw new RangeError("Base ranges between 2 and 36.");
            if ((this._check(), 16 === t)) {
              let t = "",
                e = 0,
                r = 0;
              for (let i = 0; i < this.length; i++) {
                const s = this.words[i],
                  h = (16777215 & ((s << e) | r)).toString(16);
                ((r = (s >>> (24 - e)) & 16777215),
                  (t =
                    0 !== r || i !== this.length - 1
                      ? n[6 - h.length] + h + t
                      : h + t),
                  (e += 2),
                  e >= 26 && ((e -= 26), (i -= 1)));
              }
              0 !== r && (t = r.toString(16) + t);
              while (t.length % i !== 0) t = "0" + t;
              return (0 !== this.negative && (t = "-" + t), t);
            }
            const e = s[t - 1],
              r = h[t - 1],
              o = this.clone();
            let u = "";
            o.negative = 0;
            while (!o.isZero()) {
              const i = o.remrn(r).toString(t);
              (o.iquon(r), (u = o.isZero() ? i + u : n[e - i.length] + i + u));
            }
            this.isZero() && (u = "0");
            while (u.length % i !== 0) u = "0" + u;
            return (0 !== this.negative && (u = "-" + u), u);
          }
          toJSON() {
            return this.toString(16, 2);
          }
          toArray(t, i) {
            return this.toArrayLike(Array, t, i);
          }
          toBuffer(t, e) {
            return this.toArrayLike(i, t, e);
          }
          toArrayLike(t, i, e) {
            (null == i && (i = "be"),
              null == e && (e = 0),
              c("function" === typeof t, "ArrayType", "function"),
              c("be" === i || "le" === i, "endian", "endianness"),
              c(e >>> 0 === e, "length", "uint32"),
              this._check());
            const r = this.byteLength(),
              n = e || Math.max(1, r);
            if (r > n)
              throw new RangeError("Byte array longer than desired length.");
            const s = b(t, n);
            if ("be" === i) {
              let t = s.length - 1,
                i = 0;
              for (let e = 0; e < this.length; e++) {
                const r = (3 & e) << 1,
                  n = (this.words[e] << r) | i;
                ((s[t--] = 255 & n),
                  t >= 0 && (s[t--] = (n >>> 8) & 255),
                  t >= 0 && (s[t--] = (n >>> 16) & 255),
                  6 === r
                    ? (t >= 0 && (s[t--] = (n >>> 24) & 255), (i = 0))
                    : (i = n >>> 24));
              }
              if (t >= 0) {
                s[t--] = i;
                while (t >= 0) s[t--] = 0;
                i = 0;
              }
              f(0 === i);
            } else {
              let t = 0,
                i = 0;
              for (let e = 0; e < this.length; e++) {
                const r = (3 & e) << 1,
                  n = (this.words[e] << r) | i;
                ((s[t++] = 255 & n),
                  t < s.length && (s[t++] = (n >>> 8) & 255),
                  t < s.length && (s[t++] = (n >>> 16) & 255),
                  6 === r
                    ? (t < s.length && (s[t++] = (n >>> 24) & 255), (i = 0))
                    : (i = n >>> 24));
              }
              if (t < s.length) {
                s[t++] = i;
                while (t < s.length) s[t++] = 0;
                i = 0;
              }
              f(0 === i);
            }
            return s;
          }
          encode(t, i) {
            return this.toBuffer(t, i);
          }
          of(t, i) {
            return this.fromNumber(t, i);
          }
          fromNumber(t, i) {
            (null == i && (i = "be"),
              c(w(t), "num", "integer"),
              c("be" === i || "le" === i, "endian", "endianness"));
            const e = (t < 0) | 0;
            return (
              e && (t = -t),
              t < 67108864
                ? ((this.words[0] = 67108863 & t), (this.length = 1))
                : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : ((this.words = [
                      67108863 & t,
                      (t / 67108864) & 67108863,
                      1,
                    ]),
                    (this.length = 3)),
              (this.negative = e),
              "le" === i && this.reverse(),
              this
            );
          }
          fromDouble(t, i) {
            (null == i && (i = "be"),
              c("number" === typeof t, "num", "double"),
              c("be" === i || "le" === i, "endian", "endianness"),
              isFinite(t) || (t = 0));
            const e = (t <= -1) | 0;
            (t < 0 && (t = -t), (t = Math.floor(t)), (this.words = []));
            while (t > 0) {
              const i = t % 67108864,
                e = (t - i) / 67108864;
              (this.words.push(i), (t = e));
            }
            return (
              0 === this.words.length && this.words.push(0),
              (this.length = this.words.length),
              (this.negative = e),
              "le" === i && this.reverse(),
              this
            );
          }
          fromBigInt(t, i) {
            if (
              (null == i && (i = "be"),
              c("bigint" === typeof t, "num", "bigint"),
              c("be" === i || "le" === i, "endian", "endianness"),
              !l)
            )
              throw new Error("BigInt is not supported!");
            const e = (t < BigInt(0)) | 0;
            return (
              this._fromHex(t.toString(16), e),
              (this.negative = e),
              "le" === i && this.reverse(),
              this
            );
          }
          fromBool(t) {
            return (
              c("boolean" === typeof t, "value", "boolean"),
              (this.words[0] = 0 | t),
              (this.length = 1),
              (this.negative = 0),
              this
            );
          }
          fromString(t, i, e) {
            if (
              (("le" !== i && "be" !== i) || ([i, e] = [e, i]),
              (i = B(i)),
              null == e && (e = "be"),
              c("string" === typeof t, "string", "string"),
              c(i >>> 0 === i, "base", "uint32"),
              c("be" === e || "le" === e, "endian", "endianness"),
              i < 2 || i > 36)
            )
              throw new Error("Base ranges between 2 and 36.");
            t = t.replace(/[\t\n\r ]/g, "");
            let r = 0;
            return (
              t.length > 0 && 45 === t.charCodeAt(0) && (r = 1),
              16 === i ? this._fromHex(t, r) : this._fromBase(t, i, r),
              (this.negative = r),
              this._normalize(),
              "le" === e && this.reverse(),
              this
            );
          }
          _fromHex(t, i) {
            ((this.length = Math.max(2, Math.ceil((t.length - i) / 6))),
              (this.words = new Array(this.length)));
            for (let s = 0; s < this.length; s++) this.words[s] = 0;
            let e = 0,
              r = t.length - 6,
              n = 0;
            for (; r >= i; r -= 6) {
              const i = v(t, r, r + 6);
              ((this.words[n] |= (i << e) & 67108863),
                (this.words[n + 1] |= (i >>> (26 - e)) & 4194303),
                (e += 24),
                e >= 26 && ((e -= 26), (n += 1)));
            }
            if (r + 6 !== i) {
              const s = v(t, i, r + 6);
              ((this.words[n] |= (s << e) & 67108863),
                (this.words[n + 1] |= (s >>> (26 - e)) & 4194303));
            }
            return this._strip();
          }
          _fromBase(t, i, e) {
            ((this.words[0] = 0), (this.length = 1), (this.negative = 0));
            let r = 0,
              n = 1;
            for (; n <= 67108863; n *= i) r += 1;
            ((r -= 1), (n = (n / i) | 0));
            const s = t.length - e,
              h = s % r,
              o = Math.min(s, s - h) + e;
            let u = 0,
              l = e;
            for (; l < o; l += r)
              ((u = y(t, l, l + r, i)), this.imuln(n), this._iaddn(u));
            if (0 !== h) {
              let e = 1;
              for (u = y(t, l, t.length, i), l = 0; l < h; l++) e *= i;
              (this.imuln(e), this._iaddn(u));
            }
            return this;
          }
          fromJSON(t) {
            return this.fromString(t, 16);
          }
          fromBN(t) {
            return this.inject(t);
          }
          fromArray(t, i) {
            return (
              c(Array.isArray(t), "data", "array"),
              this.fromArrayLike(t, i)
            );
          }
          fromBuffer(t, e) {
            return (
              c(i.isBuffer(t), "data", "buffer"),
              this.fromArrayLike(t, e)
            );
          }
          fromArrayLike(t, i) {
            if (
              (null == i && (i = "be"),
              c(t && "number" === typeof t.length, "data", "array-like"),
              c("be" === i || "le" === i, "endian", "endianness"),
              t.length <= 0)
            )
              return (
                (this.words[0] = 0),
                (this.length = 1),
                (this.negative = 0),
                this
              );
            ((this.length = Math.max(2, Math.ceil(t.length / 3))),
              (this.words = new Array(this.length)),
              (this.negative = 0));
            for (let h = 0; h < this.length; h++) this.words[h] = 0;
            const e = t.length % 3;
            let r = 0,
              n = 0,
              s = 0;
            if ("be" === i) {
              for (let i = t.length - 1; i >= 2; i -= 3) {
                const e = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16);
                ((this.words[n] |= (e << r) & 67108863),
                  (this.words[n + 1] = (e >>> (26 - r)) & 67108863),
                  (r += 24),
                  r >= 26 && ((r -= 26), (n += 1)));
              }
              switch (e) {
                case 2:
                  s = t[1] | (t[0] << 8);
                  break;
                case 1:
                  s = t[0];
                  break;
              }
            } else {
              const i = t.length - e;
              for (let e = 0; e < i; e += 3) {
                const i = t[e] | (t[e + 1] << 8) | (t[e + 2] << 16);
                ((this.words[n] |= (i << r) & 67108863),
                  (this.words[n + 1] = (i >>> (26 - r)) & 67108863),
                  (r += 24),
                  r >= 26 && ((r -= 26), (n += 1)));
              }
              switch (e) {
                case 2:
                  s = t[i] | (t[i + 1] << 8);
                  break;
                case 1:
                  s = t[i];
                  break;
              }
            }
            return (
              e > 0 &&
                ((this.words[n] |= (s << r) & 67108863),
                (this.words[n + 1] = (s >>> (26 - r)) & 67108863)),
              this._strip()
            );
          }
          decode(t, i) {
            return this.fromBuffer(t, i);
          }
          from(t, i, e) {
            if (null == t) return this;
            if (
              (("le" !== i && "be" !== i) || ([i, e] = [e, i]),
              "number" === typeof t)
            )
              return this.fromNumber(t, e);
            if ("bigint" === typeof t) return this.fromBigInt(t, e);
            if ("string" === typeof t) return this.fromString(t, i, e);
            if ("object" === typeof t) {
              if (BN.isBN(t)) return this.fromBN(t, e);
              if ("number" === typeof t.length) return this.fromArrayLike(t, e);
            }
            if ("boolean" === typeof t) return this.fromBool(t);
            throw new TypeError("Non-numeric object passed to BN.");
          }
          static min(t, i) {
            return (c(BN.isBN(t), "a", "bignum"), t.cmp(i) < 0 ? t : i);
          }
          static max(t, i) {
            return (c(BN.isBN(t), "a", "bignum"), t.cmp(i) > 0 ? t : i);
          }
          static cmp(t, i) {
            return (c(BN.isBN(t), "a", "bignum"), t.cmp(i));
          }
          static ucmp(t, i) {
            return (c(BN.isBN(t), "a", "bignum"), t.ucmp(i));
          }
          static red(t) {
            return new Red(t);
          }
          static mont(t) {
            return new Mont(t);
          }
          static _prime(t) {
            if (o[t]) return o[t];
            let i;
            if ("p192" === t) i = new P192();
            else if ("p224" === t) i = new P224();
            else if ("p521" === t) i = new P521();
            else if ("k256" === t) i = new K256();
            else if ("p25519" === t) i = new P25519();
            else {
              if ("p448" !== t) throw new Error("Unknown prime " + t);
              i = new P448();
            }
            return ((o[t] = i), i);
          }
          static pow(t, i) {
            return 2 === t ? BN.shift(1, i) : new BN().fromNumber(t).pown(i);
          }
          static shift(t, i) {
            return 1 === t
              ? new BN(0).usetn(i, 1)
              : new BN().fromNumber(t).ishln(i);
          }
          static mask(t) {
            return BN.shift(1, t).isubn(1);
          }
          static randomBits(t, e) {
            if (
              (c(null != t, "rng", "rng"),
              c(e >>> 0 === e, "bits", "uint32"),
              "object" === typeof t)
            ) {
              c("function" === typeof t.randomBytes, "rng", "rng");
              const r = (e + 7) >>> 3,
                n = 8 * r,
                s = t.randomBytes(r);
              if ((c(i.isBuffer(s), "bytes", "buffer"), s.length !== r))
                throw new RangeError(
                  "Invalid number of bytes returned from RNG.",
                );
              const h = BN.fromBuffer(s);
              return (n > e && h.iushrn(n - e), h);
            }
            c("function" === typeof t, "rng", "rng");
            const r = t(e);
            if (
              (c(BN.isBN(r), "num", "bignum"),
              d(0 === r.negative, "RNG"),
              g(!r.red, "RNG"),
              r.bitLength() > e)
            )
              throw new RangeError("Invalid number of bits returned from RNG.");
            return r;
          }
          static random(t, i, e) {
            if (((i = BN.cast(i, 16)), (e = BN.cast(e, 16)), i.cmp(e) > 0))
              throw new RangeError("Minimum cannot be greater than maximum.");
            const r = e.sub(i).iabs(),
              n = r.bitLength();
            if (0 === n) return i.clone();
            for (;;) {
              const e = BN.randomBits(t, n);
              if (!(e.cmp(r) >= 0)) return (e.iadd(i), e);
            }
          }
          static of(t, i) {
            return new BN().of(t, i);
          }
          static fromNumber(t, i) {
            return new BN().fromNumber(t, i);
          }
          static fromDouble(t, i) {
            return new BN().fromDouble(t, i);
          }
          static fromBigInt(t, i) {
            return new BN().fromBigInt(t, i);
          }
          static fromBool(t) {
            return new BN().fromBool(t);
          }
          static fromString(t, i, e) {
            return new BN().fromString(t, i, e);
          }
          static fromJSON(t) {
            return new BN().fromJSON(t);
          }
          static fromBN(t) {
            return new BN().fromBN(t);
          }
          static fromArray(t, i) {
            return new BN().fromArray(t, i);
          }
          static fromBuffer(t, i) {
            return new BN().fromBuffer(t, i);
          }
          static fromArrayLike(t, i) {
            return new BN().fromArrayLike(t, i);
          }
          static decode(t, i) {
            return new BN().decode(t, i);
          }
          static from(t, i, e) {
            return new BN().from(t, i, e);
          }
          static cast(t, i, e) {
            return BN.isBN(t) ? t : new BN(t, i, e);
          }
          static isBN(t) {
            return t instanceof BN;
          }
        }
        ((BN.BN = BN), (BN.wordSize = 26), (BN.native = 0));
        class Prime {
          constructor(t, i) {
            ((this.name = t),
              (this.p = new BN(i, 16)),
              (this.n = this.p.bitLength()),
              (this.k = BN.shift(1, this.n).isub(this.p)),
              (this.lo = this.p.clone()),
              (this.one = this.p.clone()));
          }
          ireduce(t) {
            const i = 0 !== t.negative;
            let e = t.bitLength();
            (f(e <= 2 * this.n), (t.negative = 0));
            while (e > this.n)
              (this.split(t, this.lo),
                this.imulK(t),
                t._iadd(t, this.lo),
                (e = t.bitLength()));
            const r = e < this.n ? -1 : t.ucmp(this.p);
            return (
              0 === r
                ? ((t.words[0] = 0), (t.length = 1))
                : r > 0 && t._isub(t, this.p),
              i && !t.isZero() && t._isub(this.p, t),
              t
            );
          }
          split(t, i) {
            t._split(this.n, i);
          }
          imulK(t) {
            return t.imul(this.k);
          }
        }
        class P192 extends Prime {
          constructor() {
            super(
              "p192",
              "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff",
            );
          }
          imulK(t) {
            const i = this.one.inject(t);
            return t.iushln(64)._iadd(t, i);
          }
        }
        class P224 extends Prime {
          constructor() {
            super(
              "p224",
              "ffffffff ffffffff ffffffff ffffffff00000000 00000000 00000001",
            );
          }
          imulK(t) {
            const i = this.one.inject(t);
            return t.iushln(96)._isub(t, i);
          }
        }
        class P521 extends Prime {
          constructor() {
            super(
              "p521",
              "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff",
            );
          }
          imulK(t) {
            return t;
          }
        }
        class K256 extends Prime {
          constructor() {
            super(
              "k256",
              "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe fffffc2f",
            );
          }
          split(t, i) {
            const e = 4194303,
              r = Math.min(t.length, 9);
            i._alloc(r + 1);
            for (let h = 0; h < r; h++) i.words[h] = t.words[h];
            if (((i.length = r), t.length <= 9))
              return (i._strip(), (t.words[0] = 0), void (t.length = 1));
            let n = t.words[9],
              s = 10;
            for (i.words[i.length++] = n & e, i._strip(); s < t.length; s++) {
              const i = 0 | t.words[s];
              ((t.words[s - 10] = ((i & e) << 4) | (n >>> 22)), (n = i));
            }
            ((n >>>= 22),
              (t.words[s - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9),
              t._strip());
          }
          imulK(t) {
            t._expand(t.length + 2);
            let i = 0;
            for (let e = 0; e < t.length; e++) {
              const r = t.words[e];
              ((i += 977 * r),
                (t.words[e] = 67108863 & i),
                (i = 64 * r + Math.floor(i / 67108864)));
            }
            return (
              0 === t.words[t.length - 1] &&
                ((t.length -= 1),
                0 === t.words[t.length - 1] && (t.length -= 1)),
              t
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
          imulK(t) {
            let i = 0;
            for (let e = 0; e < t.length; e++) {
              const r = 19 * t.words[e] + i;
              ((i = r >>> 26), (t.words[e] = 67108863 & r));
            }
            return (
              0 !== i && (t._alloc(t.length + 1), (t.words[t.length++] = i)),
              t
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
          imulK(t) {
            const i = this.one.inject(t);
            return t.iushln(224)._iadd(t, i);
          }
        }
        class Red {
          constructor(t) {
            let i = null;
            ("string" === typeof t && ((i = BN._prime(t)), (t = i.p)),
              c(BN.isBN(t), "m", "bignum"),
              g(!t.red, "reduction"),
              d(t.sign() > 0, "reduction"),
              (this.m = t),
              (this.mb = null),
              (this.prime = i));
          }
          _verify1(t) {
            (d(0 === t.negative, "red"), m(null != t.red, "red"));
          }
          _verify2(t, i) {
            (d(0 === (t.negative | i.negative), "red"),
              m(null != t.red && t.red === i.red, "red"));
          }
          convertTo(t) {
            return t.mod(this.m);
          }
          convertFrom(t) {
            const i = t.clone();
            return ((i.red = null), i);
          }
          intTo(t) {
            return t;
          }
          intFrom(t) {
            return t;
          }
          imod(t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.imod(this.m)._forceRed(this);
          }
          iadd(t, i) {
            return (
              this._verify2(t, i),
              t._iadd(t, i),
              t.ucmp(this.m) >= 0 && t._isub(t, this.m),
              t
            );
          }
          add(t, i) {
            return t.length < i.length
              ? this.iadd(i.clone(), t)
              : this.iadd(t.clone(), i);
          }
          iaddn(t, i) {
            return (
              this._verify1(t),
              i < 0
                ? this.isubn(t, -i)
                : (1 === this.m.length && (i %= this.m.words[0]),
                  t._iaddn(i),
                  t.ucmp(this.m) >= 0 && t._isub(t, this.m),
                  t)
            );
          }
          addn(t, i) {
            return this.iaddn(t.clone(), i);
          }
          isub(t, i) {
            this._verify2(t, i);
            const e = t.ucmp(i);
            return 0 === e
              ? ((t.words[0] = 0), (t.length = 1), t)
              : (e < 0 ? (t._isub(i, t), t._isub(this.m, t)) : t._isub(t, i),
                t);
          }
          sub(t, i) {
            return this.isub(t.clone(), i);
          }
          isubn(t, i) {
            return (
              this._verify1(t),
              i < 0
                ? this.iaddn(t, -i)
                : (1 === this.m.length && (i %= this.m.words[0]),
                  1 === t.length && t.words[0] < i
                    ? ((t.words[0] = i - t.words[0]), t._isub(this.m, t))
                    : t._isubn(i),
                  t)
            );
          }
          subn(t, i) {
            return this.isubn(t.clone(), i);
          }
          imul(t, i) {
            return (this._verify2(t, i), this.imod(t.imul(i)));
          }
          mul(t, i) {
            return (this._verify2(t, i), this.imod(t.mul(i)));
          }
          imuln(t, i) {
            if ((this._verify1(t), t.isZero())) return t;
            if (0 === i) return ((t.words[0] = 0), (t.length = 1), t);
            const e = i < 0;
            if (
              (e && (i = -i),
              1 === this.m.length && (i %= this.m.words[0]),
              t.imuln(i),
              i <= 16)
            )
              while (t.ucmp(this.m) >= 0) t._isub(t, this.m);
            else this.imod(t);
            return (e && this.ineg(t), t);
          }
          muln(t, i) {
            return this.imuln(t.clone(), i);
          }
          isqr(t) {
            return this.imul(t, t);
          }
          sqr(t) {
            return this.mul(t, t);
          }
          ishl(t, i) {
            return (this._verify1(t), this.imod(t.iushl(i)));
          }
          shl(t, i) {
            return this.ishl(t.clone(), i);
          }
          ishln(t, i) {
            return (this._verify1(t), this.imod(t.iushln(i)));
          }
          shln(t, i) {
            return (this._verify1(t), this.imod(t.ushln(i)));
          }
          ineg(t) {
            return (this._verify1(t), t.isZero() || t._isub(this.m, t), t);
          }
          neg(t) {
            return this.ineg(t.clone());
          }
          cmp(t, i) {
            return (this._verify2(t, i), t.ucmp(i));
          }
          cmpn(t, i) {
            if ((this._verify1(t), 1 === this.m.length))
              return (
                (i %= this.m.words[0]),
                i < 0 && (i += this.m.words[0]),
                t.ucmpn(i)
              );
            if (i < 0) {
              this.m._isubn(-i);
              const e = t.ucmp(this.m);
              return (this.m._iaddn(-i), e);
            }
            return t.ucmpn(i);
          }
          isOdd(t) {
            return (this._verify1(t), t.isOdd());
          }
          isEven(t) {
            return (this._verify1(t), t.isEven());
          }
          isqrt(t) {
            return this.sqrt(t)._move(t);
          }
          sqrt(t) {
            return (
              this._verify1(t),
              3 === this.m.andln(3)
                ? this.sqrt3mod4(t)
                : 5 === this.m.andln(7)
                  ? this.sqrt5mod8(t)
                  : this.sqrt0(t)
            );
          }
          sqrt3mod4(t) {
            const i = this.m.addn(1).iushrn(2),
              e = this.pow(t, i);
            if (!this.sqr(e).eq(t)) throw new Error("X is not a square mod P.");
            return e;
          }
          sqrt5mod8(t) {
            const i = new BN(1).toRed(this),
              e = this.m.ushrn(3),
              r = this.add(t, t),
              n = this.pow(r, e);
            let s = this.sqr(n);
            if (
              ((s = this.mul(s, r)),
              (s = this.isub(s, i)),
              (s = this.mul(s, t)),
              (s = this.mul(s, n)),
              !this.sqr(s).eq(t))
            )
              throw new Error("X is not a square mod P.");
            return s;
          }
          sqrt0(t) {
            switch (this.jacobi(t)) {
              case -1:
                throw new Error("X is not a square mod P.");
              case 0:
                return new BN(0)._forceRed(this);
              case 1:
                break;
            }
            const i = new BN(1).toRed(this),
              e = this.m.subn(1),
              r = e.zeroBits();
            e.iushrn(r);
            const n = new BN(2).toRed(this);
            while (-1 !== this.jacobi(n)) this.iadd(n, i);
            let s = this.pow(t, e),
              h = this.pow(n, e),
              o = this.pow(t, e.iaddn(1).iushrn(1)),
              u = r;
            for (;;) {
              let t = s,
                e = 0;
              while (0 !== t.cmp(i)) ((t = this.sqr(t)), (e += 1));
              if (0 === e) break;
              (f(e !== u),
                (t = BN.shift(1, u - e - 1)),
                (t = this.pow(h, t)),
                (h = this.sqr(t)),
                (o = this.mul(o, t)),
                (s = this.mul(s, h)),
                (u = e));
            }
            return o;
          }
          iinvert(t) {
            return this.invert(t)._move(t);
          }
          invert(t) {
            return (
              this._verify1(t),
              this.prime
                ? this.imod(t._invertp(this.m))
                : t.invert(this.m)._forceRed(this)
            );
          }
          ifermat(t) {
            return this.fermat(t)._move(t);
          }
          fermat(t) {
            if ((this._verify1(t), t.isZero() || 0 === this.m.cmpn(1)))
              throw new RangeError("Not invertible.");
            return this.pow(t, this.m.subn(2));
          }
          legendre(t) {
            if ((this._verify1(t), this.m.isEven()))
              throw new Error("legendre: `num` must be odd.");
            const i = this.pow(t, this.m.subn(1).iushrn(1)),
              e = new BN(1).toRed(this),
              r = i.czero(),
              n = i.ceq(e),
              s = i.ceq(this.ineg(e));
            if (0 === (r | n | s)) throw new Error("Invalid prime.");
            return (f(r + n + s === 1), n + -1 * s);
          }
          jacobi(t) {
            return (this._verify1(t), t.jacobi(this.m));
          }
          kronecker(t) {
            return (this._verify1(t), t.kronecker(this.m));
          }
          ipow(t, i, e) {
            return this.pow(t, i, e)._move(t);
          }
          pow(t, i, e) {
            return (
              this._verify1(t),
              i.isNeg() && (t = this.invert(t)),
              l && !this.prime
                ? this.powInt(t, i, e)
                : null != e
                  ? this.climb(t, i, e)
                  : 1 === i.length
                    ? this.pown(t, i.words[0])
                    : this.slide(t, i)
            );
          }
          slide(t, i) {
            const e = 4,
              r = new Array(1 << e);
            ((r[0] = new BN(1).toRed(this)), (r[1] = t));
            for (let u = 2; u < r.length; u++) r[u] = this.mul(r[u - 1], t);
            let n = A(i.words[i.length - 1]),
              s = r[0],
              h = 0,
              o = 0;
            for (let u = i.length - 1; u >= 0; u--) {
              const t = i.words[u];
              for (let i = n - 1; i >= 0; i--) {
                const n = (t >> i) & 1;
                (s !== r[0] && (s = this.sqr(s)),
                  0 !== n || 0 !== h
                    ? ((h <<= 1),
                      (h |= n),
                      (o += 1),
                      (o !== e && 0 !== (u | i)) ||
                        ((s = this.mul(s, r[h])), (o = 0), (h = 0)))
                    : (o = 0));
              }
              n = 26;
            }
            return s;
          }
          climb(t, i, e) {
            const r = Math.max(i.bitLength(), e >>> 0),
              n = (r + 7) >>> 3,
              s = i.toArray("le", n);
            let h = t.clone(),
              o = new BN(1).toRed(this),
              u = 0;
            for (let l = r - 1; l >= 0; l--) {
              const t = (s[l >> 3] >> (7 & l)) & 1;
              (h.cswap(o, u ^ t),
                (h = this.mul(h, o)),
                (o = this.mul(o, o)),
                (u = t));
            }
            return (h.cswap(o, u), o);
          }
          powInt(t, i, e) {
            null === this.mb && (this.mb = this.m.toBigInt());
            const r = this.intFrom(t.toBigInt()),
              n = N(r, i, this.mb, e),
              s = this.intTo(n);
            return BN.fromBigInt(s)._forceRed(this);
          }
          ipown(t, i) {
            return this.pown(t, i)._move(t);
          }
          pown(t, i) {
            if (
              (this._verify1(t),
              i < 0 && ((t = this.invert(t)), (i = -i)),
              0 === i)
            )
              return new BN(1).toRed(this);
            if (1 === i) return t.clone();
            const e = A(i);
            let r = t;
            for (let n = e - 2; n >= 0; n--)
              ((r = this.sqr(r)), (i >> n) & 1 && (r = this.mul(r, t)));
            return r;
          }
          [r]() {
            return this.prime
              ? `<Red: ${this.prime.name}>`
              : `<Red: ${this.m.toString(10)}>`;
          }
        }
        class Mont extends Red {
          constructor(t) {
            (super(t),
              (this.prime = null),
              (this.n = this.m.bitLength()),
              this.n % 26 !== 0 && (this.n += 26 - (this.n % 26)),
              (this.r = BN.shift(1, this.n)),
              (this.r2 = BN.shift(1, 2 * this.n).imod(this.m)),
              (this.ri = this.r._invertp(this.m).imod(this.m)),
              (this.mi = this.r.sub(
                this.ri.mul(this.r).isubn(1).div(this.m).imod(this.r),
              )),
              (this.rib = null));
          }
          convertTo(t) {
            return this.imod(t.ushln(this.n));
          }
          convertFrom(t) {
            const i = this.imod(t.mul(this.ri));
            return ((i.red = null), i);
          }
          intTo(t) {
            return (t << BigInt(this.n)) % this.mb;
          }
          intFrom(t) {
            return (
              null === this.rib && (this.rib = this.ri.toBigInt()),
              (t * this.rib) % this.mb
            );
          }
          iaddn(t, i) {
            return this.iadd(t, this.convertTo(new BN(i)));
          }
          isubn(t, i) {
            return this.isub(t, this.convertTo(new BN(i)));
          }
          imul(t, i) {
            return this.mul(t, i)._move(t);
          }
          mul(t, i) {
            if ((this._verify2(t, i), t.isZero() || i.isZero()))
              return new BN(0)._forceRed(this);
            const e = t.mul(i),
              r = e.umaskn(this.n).mul(this.mi).iumaskn(this.n).mul(this.m),
              n = e.isub(r).iushrn(this.n);
            return (
              0 !== n.negative
                ? (n._isub(this.m, n), (n.negative = 0))
                : n.ucmp(this.m) >= 0 && n._isub(n, this.m),
              n._forceRed(this)
            );
          }
          imuln(t, i) {
            if ((this._verify1(t), t.isZero())) return t;
            if (0 === i) return ((t.words[0] = 0), (t.length = 1), t);
            const e = i < 0;
            e && (i = -i);
            const r = A(i);
            if (r > 5) this.imul(t, this.convertTo(new BN(i)));
            else if (0 === (i & (i - 1)))
              for (let n = 0; n < r - 1; n++) this.iadd(t, t);
            else {
              const e = t.clone();
              for (let n = r - 2; n >= 0; n--)
                (this.iadd(t, t), (i >> n) & 1 && this.iadd(t, e));
            }
            return (e && this.ineg(t), t);
          }
          cmpn(t, i) {
            return (this._verify1(t), t.ucmp(this.convertTo(new BN(i))));
          }
          isOdd(t) {
            return (this._verify1(t), this.convertFrom(t).isOdd());
          }
          isEven(t) {
            return (this._verify1(t), this.convertFrom(t).isEven());
          }
          invert(t) {
            return (
              this._verify1(t),
              this.imod(t._invertp(this.m).mul(this.r2))
            );
          }
        }
        function a(t, i, e) {
          const r = new t(i);
          return (t.captureStackTrace && t.captureStackTrace(r, e), r);
        }
        function f(t, i) {
          if (!t) {
            const t = i || "Assertion failed.";
            throw a(Error, t, f);
          }
        }
        function c(t, i, e) {
          if (!t) {
            const t = `"${i}" must be a(n) ${e}.`;
            throw a(TypeError, t, c);
          }
        }
        function d(t, i) {
          if (!t) {
            const t = `"${i}" only works with positive numbers.`;
            throw a(RangeError, t, d);
          }
        }
        function m(t, i) {
          if (!t) {
            const t = `"${i}" only works with red numbers.`;
            throw a(TypeError, t, m);
          }
        }
        function g(t, i) {
          if (!t) {
            const t = `"${i}" only works with normal numbers.`;
            throw a(TypeError, t, g);
          }
        }
        function p(t) {
          if (!t) {
            const t = "Cannot divide by zero.";
            throw a(RangeError, t, p);
          }
        }
        function w(t) {
          return Number.isSafeInteger(t);
        }
        function M(t) {
          return w(t) && t >= -67108863 && t <= 67108863;
        }
        function b(t, i) {
          return t.allocUnsafe ? t.allocUnsafe(i) : new t(i);
        }
        function B(t) {
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
        function A(t) {
          if (Math.clz32) return 32 - Math.clz32(t);
          let i = t,
            e = 0;
          return (
            i >= 4096 && ((e += 13), (i >>>= 13)),
            i >= 64 && ((e += 7), (i >>>= 7)),
            i >= 8 && ((e += 4), (i >>>= 4)),
            i >= 2 && ((e += 2), (i >>>= 2)),
            e + i
          );
        }
        function S(t) {
          if (0 === t) return 26;
          let i = t,
            e = 0;
          return (
            0 === (8191 & i) && ((e += 13), (i >>>= 13)),
            0 === (127 & i) && ((e += 7), (i >>>= 7)),
            0 === (15 & i) && ((e += 4), (i >>>= 4)),
            0 === (3 & i) && ((e += 2), (i >>>= 2)),
            0 === (1 & i) && (e += 1),
            e
          );
        }
        function v(t, i, e) {
          const r = Math.min(t.length, e);
          let n = 0,
            s = 0;
          for (let h = i; h < r; h++) {
            const i = t.charCodeAt(h) - 48;
            let e;
            ((n <<= 4),
              (e =
                i >= 49 && i <= 54
                  ? i - 49 + 10
                  : i >= 17 && i <= 22
                    ? i - 17 + 10
                    : i),
              (n |= e),
              (s |= e));
          }
          if (-16 & s) throw new Error("Invalid string.");
          return n;
        }
        function y(t, i, e, r) {
          const n = Math.min(t.length, e);
          let s = 0;
          for (let h = i; h < n; h++) {
            const i = t.charCodeAt(h) - 48;
            let e;
            if (
              ((s *= r),
              (e = i >= 49 ? i - 49 + 10 : i >= 17 ? i - 17 + 10 : i),
              i < 0 || i > 207 || e >= r)
            )
              throw new Error("Invalid string.");
            s += e;
          }
          return s;
        }
        function N(t, i, e, r) {
          return null != r ? _(t, i, e, r) : E(t, i, e);
        }
        function E(t, i, e) {
          let r = BigInt(1),
            n = A(i.words[i.length - 1]);
          for (let s = i.length - 1; s >= 0; s--) {
            const h = i.words[s];
            for (let i = n - 1; i >= 0; i--)
              ((r = (r * r) % e), (h >> i) & 1 && (r = (r * t) % e));
            n = 26;
          }
          return r;
        }
        function _(t, i, e, r) {
          const n = Math.max(i.bitLength(), r >>> 0),
            s = (n + 7) >>> 3,
            h = i.toArray("le", s);
          let o = BigInt(1),
            u = 0;
          for (let l = n - 1; l >= 0; l--) {
            const i = (h[l >> 3] >> (7 & l)) & 1;
            (([t, o] = R(t, o, u ^ i)),
              (t = (t * o) % e),
              (o = (o * o) % e),
              (u = i));
          }
          return (([t, o] = R(t, o, u)), o);
        }
        function R(t, i, e) {
          const r = BigInt(1),
            n = BigInt(e),
            s = (t * (n ^ r)) | (i * n),
            h = (i * (n ^ r)) | (t * n);
          return [s, h];
        }
        function L(t, i, e) {
          const r = t.length + i.length;
          ((e.negative = t.negative ^ i.negative), e._alloc(r), (e.length = r));
          const n = t.words[0],
            s = i.words[0],
            h = n * s,
            o = 67108863 & h;
          let u = (h / 67108864) | 0,
            l = 1;
          for (e.words[0] = o; l < e.length - 1; l++) {
            let r = u >>> 26,
              n = 67108863 & u;
            const s = Math.max(0, l - t.length + 1),
              h = Math.min(l, i.length - 1);
            for (let e = s; e <= h; e++) {
              const s = l - e,
                h = t.words[s],
                o = i.words[e],
                u = h * o + n;
              ((r += (u / 67108864) | 0), (n = 67108863 & u));
            }
            ((e.words[l] = 0 | n), (u = 0 | r));
          }
          return (0 !== u ? (e.words[l] = 0 | u) : (e.length -= 1), e._strip());
        }
        function D(t, i, e) {
          const r = t.length + i.length;
          ((e.negative = t.negative ^ i.negative), e._alloc(r), (e.length = r));
          let n = 0,
            s = 0,
            h = 0;
          for (; h < e.length - 1; h++) {
            let r = s;
            s = 0;
            let o = 67108863 & n;
            const u = Math.max(0, h - t.length + 1),
              l = Math.min(h, i.length - 1);
            for (let e = u; e <= l; e++) {
              const n = h - e,
                u = t.words[n],
                l = i.words[e],
                a = u * l;
              let f = 67108863 & a;
              ((r = (r + ((a / 67108864) | 0)) | 0),
                (f = (f + o) | 0),
                (o = 67108863 & f),
                (r = (r + (f >>> 26)) | 0),
                (s += r >>> 26),
                (r &= 67108863));
            }
            ((e.words[h] = o), (n = r), (r = s));
          }
          return (0 !== n ? (e.words[h] = n) : (e.length -= 1), e._strip());
        }
        function K(t, i, e) {
          if (!l || t.length + i.length > 82595519) return D(t, i, e);
          const r = BigInt(0),
            n = BigInt(67108863),
            s = BigInt(26);
          let h = t.toBigInt() * i.toBigInt();
          const o = (h < r) | 0;
          o && (h = -h);
          let u = 0;
          while (h > r) ((e.words[u++] = Number(h & n)), (h >>= s));
          return (
            0 === u && (e.words[u++] = 0),
            (e.length = u),
            (e.negative = o),
            e
          );
        }
        function P(t, i, e) {
          const r = t.words,
            n = i.words,
            s = e.words,
            h = 0 | r[0],
            o = 8191 & h,
            u = h >>> 13,
            l = 0 | r[1],
            a = 8191 & l,
            f = l >>> 13,
            c = 0 | r[2],
            d = 8191 & c,
            m = c >>> 13,
            g = 0 | r[3],
            p = 8191 & g,
            w = g >>> 13,
            M = 0 | r[4],
            b = 8191 & M,
            B = M >>> 13,
            A = 0 | r[5],
            S = 8191 & A,
            v = A >>> 13,
            y = 0 | r[6],
            N = 8191 & y,
            E = y >>> 13,
            _ = 0 | r[7],
            R = 8191 & _,
            L = _ >>> 13,
            D = 0 | r[8],
            K = 8191 & D,
            P = D >>> 13,
            I = 0 | r[9],
            x = 8191 & I,
            H = I >>> 13,
            U = 0 | n[0],
            q = 8191 & U,
            k = U >>> 13,
            O = 0 | n[1],
            C = 8191 & O,
            z = O >>> 13,
            T = 0 | n[2],
            F = 8191 & T,
            J = T >>> 13,
            Z = 0 | n[3],
            V = 8191 & Z,
            j = Z >>> 13,
            G = 0 | n[4],
            X = 8191 & G,
            W = G >>> 13,
            Q = 0 | n[5],
            $ = 8191 & Q,
            Y = Q >>> 13,
            tt = 0 | n[6],
            it = 8191 & tt,
            et = tt >>> 13,
            rt = 0 | n[7],
            nt = 8191 & rt,
            st = rt >>> 13,
            ht = 0 | n[8],
            ot = 8191 & ht,
            ut = ht >>> 13,
            lt = 0 | n[9],
            at = 8191 & lt,
            ft = lt >>> 13;
          let ct,
            dt,
            mt,
            gt = 0;
          ((e.negative = t.negative ^ i.negative),
            e._alloc(20),
            (e.length = 19),
            (ct = Math.imul(o, q)),
            (dt = Math.imul(o, k)),
            (dt = (dt + Math.imul(u, q)) | 0),
            (mt = Math.imul(u, k)));
          let pt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (pt >>> 26)) | 0),
            (pt &= 67108863),
            (ct = Math.imul(a, q)),
            (dt = Math.imul(a, k)),
            (dt = (dt + Math.imul(f, q)) | 0),
            (mt = Math.imul(f, k)),
            (ct = (ct + Math.imul(o, C)) | 0),
            (dt = (dt + Math.imul(o, z)) | 0),
            (dt = (dt + Math.imul(u, C)) | 0),
            (mt = (mt + Math.imul(u, z)) | 0));
          let wt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (wt >>> 26)) | 0),
            (wt &= 67108863),
            (ct = Math.imul(d, q)),
            (dt = Math.imul(d, k)),
            (dt = (dt + Math.imul(m, q)) | 0),
            (mt = Math.imul(m, k)),
            (ct = (ct + Math.imul(a, C)) | 0),
            (dt = (dt + Math.imul(a, z)) | 0),
            (dt = (dt + Math.imul(f, C)) | 0),
            (mt = (mt + Math.imul(f, z)) | 0),
            (ct = (ct + Math.imul(o, F)) | 0),
            (dt = (dt + Math.imul(o, J)) | 0),
            (dt = (dt + Math.imul(u, F)) | 0),
            (mt = (mt + Math.imul(u, J)) | 0));
          let Mt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Mt >>> 26)) | 0),
            (Mt &= 67108863),
            (ct = Math.imul(p, q)),
            (dt = Math.imul(p, k)),
            (dt = (dt + Math.imul(w, q)) | 0),
            (mt = Math.imul(w, k)),
            (ct = (ct + Math.imul(d, C)) | 0),
            (dt = (dt + Math.imul(d, z)) | 0),
            (dt = (dt + Math.imul(m, C)) | 0),
            (mt = (mt + Math.imul(m, z)) | 0),
            (ct = (ct + Math.imul(a, F)) | 0),
            (dt = (dt + Math.imul(a, J)) | 0),
            (dt = (dt + Math.imul(f, F)) | 0),
            (mt = (mt + Math.imul(f, J)) | 0),
            (ct = (ct + Math.imul(o, V)) | 0),
            (dt = (dt + Math.imul(o, j)) | 0),
            (dt = (dt + Math.imul(u, V)) | 0),
            (mt = (mt + Math.imul(u, j)) | 0));
          let bt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (bt >>> 26)) | 0),
            (bt &= 67108863),
            (ct = Math.imul(b, q)),
            (dt = Math.imul(b, k)),
            (dt = (dt + Math.imul(B, q)) | 0),
            (mt = Math.imul(B, k)),
            (ct = (ct + Math.imul(p, C)) | 0),
            (dt = (dt + Math.imul(p, z)) | 0),
            (dt = (dt + Math.imul(w, C)) | 0),
            (mt = (mt + Math.imul(w, z)) | 0),
            (ct = (ct + Math.imul(d, F)) | 0),
            (dt = (dt + Math.imul(d, J)) | 0),
            (dt = (dt + Math.imul(m, F)) | 0),
            (mt = (mt + Math.imul(m, J)) | 0),
            (ct = (ct + Math.imul(a, V)) | 0),
            (dt = (dt + Math.imul(a, j)) | 0),
            (dt = (dt + Math.imul(f, V)) | 0),
            (mt = (mt + Math.imul(f, j)) | 0),
            (ct = (ct + Math.imul(o, X)) | 0),
            (dt = (dt + Math.imul(o, W)) | 0),
            (dt = (dt + Math.imul(u, X)) | 0),
            (mt = (mt + Math.imul(u, W)) | 0));
          let Bt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Bt >>> 26)) | 0),
            (Bt &= 67108863),
            (ct = Math.imul(S, q)),
            (dt = Math.imul(S, k)),
            (dt = (dt + Math.imul(v, q)) | 0),
            (mt = Math.imul(v, k)),
            (ct = (ct + Math.imul(b, C)) | 0),
            (dt = (dt + Math.imul(b, z)) | 0),
            (dt = (dt + Math.imul(B, C)) | 0),
            (mt = (mt + Math.imul(B, z)) | 0),
            (ct = (ct + Math.imul(p, F)) | 0),
            (dt = (dt + Math.imul(p, J)) | 0),
            (dt = (dt + Math.imul(w, F)) | 0),
            (mt = (mt + Math.imul(w, J)) | 0),
            (ct = (ct + Math.imul(d, V)) | 0),
            (dt = (dt + Math.imul(d, j)) | 0),
            (dt = (dt + Math.imul(m, V)) | 0),
            (mt = (mt + Math.imul(m, j)) | 0),
            (ct = (ct + Math.imul(a, X)) | 0),
            (dt = (dt + Math.imul(a, W)) | 0),
            (dt = (dt + Math.imul(f, X)) | 0),
            (mt = (mt + Math.imul(f, W)) | 0),
            (ct = (ct + Math.imul(o, $)) | 0),
            (dt = (dt + Math.imul(o, Y)) | 0),
            (dt = (dt + Math.imul(u, $)) | 0),
            (mt = (mt + Math.imul(u, Y)) | 0));
          let At = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (At >>> 26)) | 0),
            (At &= 67108863),
            (ct = Math.imul(N, q)),
            (dt = Math.imul(N, k)),
            (dt = (dt + Math.imul(E, q)) | 0),
            (mt = Math.imul(E, k)),
            (ct = (ct + Math.imul(S, C)) | 0),
            (dt = (dt + Math.imul(S, z)) | 0),
            (dt = (dt + Math.imul(v, C)) | 0),
            (mt = (mt + Math.imul(v, z)) | 0),
            (ct = (ct + Math.imul(b, F)) | 0),
            (dt = (dt + Math.imul(b, J)) | 0),
            (dt = (dt + Math.imul(B, F)) | 0),
            (mt = (mt + Math.imul(B, J)) | 0),
            (ct = (ct + Math.imul(p, V)) | 0),
            (dt = (dt + Math.imul(p, j)) | 0),
            (dt = (dt + Math.imul(w, V)) | 0),
            (mt = (mt + Math.imul(w, j)) | 0),
            (ct = (ct + Math.imul(d, X)) | 0),
            (dt = (dt + Math.imul(d, W)) | 0),
            (dt = (dt + Math.imul(m, X)) | 0),
            (mt = (mt + Math.imul(m, W)) | 0),
            (ct = (ct + Math.imul(a, $)) | 0),
            (dt = (dt + Math.imul(a, Y)) | 0),
            (dt = (dt + Math.imul(f, $)) | 0),
            (mt = (mt + Math.imul(f, Y)) | 0),
            (ct = (ct + Math.imul(o, it)) | 0),
            (dt = (dt + Math.imul(o, et)) | 0),
            (dt = (dt + Math.imul(u, it)) | 0),
            (mt = (mt + Math.imul(u, et)) | 0));
          let St = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (St >>> 26)) | 0),
            (St &= 67108863),
            (ct = Math.imul(R, q)),
            (dt = Math.imul(R, k)),
            (dt = (dt + Math.imul(L, q)) | 0),
            (mt = Math.imul(L, k)),
            (ct = (ct + Math.imul(N, C)) | 0),
            (dt = (dt + Math.imul(N, z)) | 0),
            (dt = (dt + Math.imul(E, C)) | 0),
            (mt = (mt + Math.imul(E, z)) | 0),
            (ct = (ct + Math.imul(S, F)) | 0),
            (dt = (dt + Math.imul(S, J)) | 0),
            (dt = (dt + Math.imul(v, F)) | 0),
            (mt = (mt + Math.imul(v, J)) | 0),
            (ct = (ct + Math.imul(b, V)) | 0),
            (dt = (dt + Math.imul(b, j)) | 0),
            (dt = (dt + Math.imul(B, V)) | 0),
            (mt = (mt + Math.imul(B, j)) | 0),
            (ct = (ct + Math.imul(p, X)) | 0),
            (dt = (dt + Math.imul(p, W)) | 0),
            (dt = (dt + Math.imul(w, X)) | 0),
            (mt = (mt + Math.imul(w, W)) | 0),
            (ct = (ct + Math.imul(d, $)) | 0),
            (dt = (dt + Math.imul(d, Y)) | 0),
            (dt = (dt + Math.imul(m, $)) | 0),
            (mt = (mt + Math.imul(m, Y)) | 0),
            (ct = (ct + Math.imul(a, it)) | 0),
            (dt = (dt + Math.imul(a, et)) | 0),
            (dt = (dt + Math.imul(f, it)) | 0),
            (mt = (mt + Math.imul(f, et)) | 0),
            (ct = (ct + Math.imul(o, nt)) | 0),
            (dt = (dt + Math.imul(o, st)) | 0),
            (dt = (dt + Math.imul(u, nt)) | 0),
            (mt = (mt + Math.imul(u, st)) | 0));
          let vt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (vt >>> 26)) | 0),
            (vt &= 67108863),
            (ct = Math.imul(K, q)),
            (dt = Math.imul(K, k)),
            (dt = (dt + Math.imul(P, q)) | 0),
            (mt = Math.imul(P, k)),
            (ct = (ct + Math.imul(R, C)) | 0),
            (dt = (dt + Math.imul(R, z)) | 0),
            (dt = (dt + Math.imul(L, C)) | 0),
            (mt = (mt + Math.imul(L, z)) | 0),
            (ct = (ct + Math.imul(N, F)) | 0),
            (dt = (dt + Math.imul(N, J)) | 0),
            (dt = (dt + Math.imul(E, F)) | 0),
            (mt = (mt + Math.imul(E, J)) | 0),
            (ct = (ct + Math.imul(S, V)) | 0),
            (dt = (dt + Math.imul(S, j)) | 0),
            (dt = (dt + Math.imul(v, V)) | 0),
            (mt = (mt + Math.imul(v, j)) | 0),
            (ct = (ct + Math.imul(b, X)) | 0),
            (dt = (dt + Math.imul(b, W)) | 0),
            (dt = (dt + Math.imul(B, X)) | 0),
            (mt = (mt + Math.imul(B, W)) | 0),
            (ct = (ct + Math.imul(p, $)) | 0),
            (dt = (dt + Math.imul(p, Y)) | 0),
            (dt = (dt + Math.imul(w, $)) | 0),
            (mt = (mt + Math.imul(w, Y)) | 0),
            (ct = (ct + Math.imul(d, it)) | 0),
            (dt = (dt + Math.imul(d, et)) | 0),
            (dt = (dt + Math.imul(m, it)) | 0),
            (mt = (mt + Math.imul(m, et)) | 0),
            (ct = (ct + Math.imul(a, nt)) | 0),
            (dt = (dt + Math.imul(a, st)) | 0),
            (dt = (dt + Math.imul(f, nt)) | 0),
            (mt = (mt + Math.imul(f, st)) | 0),
            (ct = (ct + Math.imul(o, ot)) | 0),
            (dt = (dt + Math.imul(o, ut)) | 0),
            (dt = (dt + Math.imul(u, ot)) | 0),
            (mt = (mt + Math.imul(u, ut)) | 0));
          let yt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (yt >>> 26)) | 0),
            (yt &= 67108863),
            (ct = Math.imul(x, q)),
            (dt = Math.imul(x, k)),
            (dt = (dt + Math.imul(H, q)) | 0),
            (mt = Math.imul(H, k)),
            (ct = (ct + Math.imul(K, C)) | 0),
            (dt = (dt + Math.imul(K, z)) | 0),
            (dt = (dt + Math.imul(P, C)) | 0),
            (mt = (mt + Math.imul(P, z)) | 0),
            (ct = (ct + Math.imul(R, F)) | 0),
            (dt = (dt + Math.imul(R, J)) | 0),
            (dt = (dt + Math.imul(L, F)) | 0),
            (mt = (mt + Math.imul(L, J)) | 0),
            (ct = (ct + Math.imul(N, V)) | 0),
            (dt = (dt + Math.imul(N, j)) | 0),
            (dt = (dt + Math.imul(E, V)) | 0),
            (mt = (mt + Math.imul(E, j)) | 0),
            (ct = (ct + Math.imul(S, X)) | 0),
            (dt = (dt + Math.imul(S, W)) | 0),
            (dt = (dt + Math.imul(v, X)) | 0),
            (mt = (mt + Math.imul(v, W)) | 0),
            (ct = (ct + Math.imul(b, $)) | 0),
            (dt = (dt + Math.imul(b, Y)) | 0),
            (dt = (dt + Math.imul(B, $)) | 0),
            (mt = (mt + Math.imul(B, Y)) | 0),
            (ct = (ct + Math.imul(p, it)) | 0),
            (dt = (dt + Math.imul(p, et)) | 0),
            (dt = (dt + Math.imul(w, it)) | 0),
            (mt = (mt + Math.imul(w, et)) | 0),
            (ct = (ct + Math.imul(d, nt)) | 0),
            (dt = (dt + Math.imul(d, st)) | 0),
            (dt = (dt + Math.imul(m, nt)) | 0),
            (mt = (mt + Math.imul(m, st)) | 0),
            (ct = (ct + Math.imul(a, ot)) | 0),
            (dt = (dt + Math.imul(a, ut)) | 0),
            (dt = (dt + Math.imul(f, ot)) | 0),
            (mt = (mt + Math.imul(f, ut)) | 0),
            (ct = (ct + Math.imul(o, at)) | 0),
            (dt = (dt + Math.imul(o, ft)) | 0),
            (dt = (dt + Math.imul(u, at)) | 0),
            (mt = (mt + Math.imul(u, ft)) | 0));
          let Nt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Nt >>> 26)) | 0),
            (Nt &= 67108863),
            (ct = Math.imul(x, C)),
            (dt = Math.imul(x, z)),
            (dt = (dt + Math.imul(H, C)) | 0),
            (mt = Math.imul(H, z)),
            (ct = (ct + Math.imul(K, F)) | 0),
            (dt = (dt + Math.imul(K, J)) | 0),
            (dt = (dt + Math.imul(P, F)) | 0),
            (mt = (mt + Math.imul(P, J)) | 0),
            (ct = (ct + Math.imul(R, V)) | 0),
            (dt = (dt + Math.imul(R, j)) | 0),
            (dt = (dt + Math.imul(L, V)) | 0),
            (mt = (mt + Math.imul(L, j)) | 0),
            (ct = (ct + Math.imul(N, X)) | 0),
            (dt = (dt + Math.imul(N, W)) | 0),
            (dt = (dt + Math.imul(E, X)) | 0),
            (mt = (mt + Math.imul(E, W)) | 0),
            (ct = (ct + Math.imul(S, $)) | 0),
            (dt = (dt + Math.imul(S, Y)) | 0),
            (dt = (dt + Math.imul(v, $)) | 0),
            (mt = (mt + Math.imul(v, Y)) | 0),
            (ct = (ct + Math.imul(b, it)) | 0),
            (dt = (dt + Math.imul(b, et)) | 0),
            (dt = (dt + Math.imul(B, it)) | 0),
            (mt = (mt + Math.imul(B, et)) | 0),
            (ct = (ct + Math.imul(p, nt)) | 0),
            (dt = (dt + Math.imul(p, st)) | 0),
            (dt = (dt + Math.imul(w, nt)) | 0),
            (mt = (mt + Math.imul(w, st)) | 0),
            (ct = (ct + Math.imul(d, ot)) | 0),
            (dt = (dt + Math.imul(d, ut)) | 0),
            (dt = (dt + Math.imul(m, ot)) | 0),
            (mt = (mt + Math.imul(m, ut)) | 0),
            (ct = (ct + Math.imul(a, at)) | 0),
            (dt = (dt + Math.imul(a, ft)) | 0),
            (dt = (dt + Math.imul(f, at)) | 0),
            (mt = (mt + Math.imul(f, ft)) | 0));
          let Et = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Et >>> 26)) | 0),
            (Et &= 67108863),
            (ct = Math.imul(x, F)),
            (dt = Math.imul(x, J)),
            (dt = (dt + Math.imul(H, F)) | 0),
            (mt = Math.imul(H, J)),
            (ct = (ct + Math.imul(K, V)) | 0),
            (dt = (dt + Math.imul(K, j)) | 0),
            (dt = (dt + Math.imul(P, V)) | 0),
            (mt = (mt + Math.imul(P, j)) | 0),
            (ct = (ct + Math.imul(R, X)) | 0),
            (dt = (dt + Math.imul(R, W)) | 0),
            (dt = (dt + Math.imul(L, X)) | 0),
            (mt = (mt + Math.imul(L, W)) | 0),
            (ct = (ct + Math.imul(N, $)) | 0),
            (dt = (dt + Math.imul(N, Y)) | 0),
            (dt = (dt + Math.imul(E, $)) | 0),
            (mt = (mt + Math.imul(E, Y)) | 0),
            (ct = (ct + Math.imul(S, it)) | 0),
            (dt = (dt + Math.imul(S, et)) | 0),
            (dt = (dt + Math.imul(v, it)) | 0),
            (mt = (mt + Math.imul(v, et)) | 0),
            (ct = (ct + Math.imul(b, nt)) | 0),
            (dt = (dt + Math.imul(b, st)) | 0),
            (dt = (dt + Math.imul(B, nt)) | 0),
            (mt = (mt + Math.imul(B, st)) | 0),
            (ct = (ct + Math.imul(p, ot)) | 0),
            (dt = (dt + Math.imul(p, ut)) | 0),
            (dt = (dt + Math.imul(w, ot)) | 0),
            (mt = (mt + Math.imul(w, ut)) | 0),
            (ct = (ct + Math.imul(d, at)) | 0),
            (dt = (dt + Math.imul(d, ft)) | 0),
            (dt = (dt + Math.imul(m, at)) | 0),
            (mt = (mt + Math.imul(m, ft)) | 0));
          let _t = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (_t >>> 26)) | 0),
            (_t &= 67108863),
            (ct = Math.imul(x, V)),
            (dt = Math.imul(x, j)),
            (dt = (dt + Math.imul(H, V)) | 0),
            (mt = Math.imul(H, j)),
            (ct = (ct + Math.imul(K, X)) | 0),
            (dt = (dt + Math.imul(K, W)) | 0),
            (dt = (dt + Math.imul(P, X)) | 0),
            (mt = (mt + Math.imul(P, W)) | 0),
            (ct = (ct + Math.imul(R, $)) | 0),
            (dt = (dt + Math.imul(R, Y)) | 0),
            (dt = (dt + Math.imul(L, $)) | 0),
            (mt = (mt + Math.imul(L, Y)) | 0),
            (ct = (ct + Math.imul(N, it)) | 0),
            (dt = (dt + Math.imul(N, et)) | 0),
            (dt = (dt + Math.imul(E, it)) | 0),
            (mt = (mt + Math.imul(E, et)) | 0),
            (ct = (ct + Math.imul(S, nt)) | 0),
            (dt = (dt + Math.imul(S, st)) | 0),
            (dt = (dt + Math.imul(v, nt)) | 0),
            (mt = (mt + Math.imul(v, st)) | 0),
            (ct = (ct + Math.imul(b, ot)) | 0),
            (dt = (dt + Math.imul(b, ut)) | 0),
            (dt = (dt + Math.imul(B, ot)) | 0),
            (mt = (mt + Math.imul(B, ut)) | 0),
            (ct = (ct + Math.imul(p, at)) | 0),
            (dt = (dt + Math.imul(p, ft)) | 0),
            (dt = (dt + Math.imul(w, at)) | 0),
            (mt = (mt + Math.imul(w, ft)) | 0));
          let Rt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Rt >>> 26)) | 0),
            (Rt &= 67108863),
            (ct = Math.imul(x, X)),
            (dt = Math.imul(x, W)),
            (dt = (dt + Math.imul(H, X)) | 0),
            (mt = Math.imul(H, W)),
            (ct = (ct + Math.imul(K, $)) | 0),
            (dt = (dt + Math.imul(K, Y)) | 0),
            (dt = (dt + Math.imul(P, $)) | 0),
            (mt = (mt + Math.imul(P, Y)) | 0),
            (ct = (ct + Math.imul(R, it)) | 0),
            (dt = (dt + Math.imul(R, et)) | 0),
            (dt = (dt + Math.imul(L, it)) | 0),
            (mt = (mt + Math.imul(L, et)) | 0),
            (ct = (ct + Math.imul(N, nt)) | 0),
            (dt = (dt + Math.imul(N, st)) | 0),
            (dt = (dt + Math.imul(E, nt)) | 0),
            (mt = (mt + Math.imul(E, st)) | 0),
            (ct = (ct + Math.imul(S, ot)) | 0),
            (dt = (dt + Math.imul(S, ut)) | 0),
            (dt = (dt + Math.imul(v, ot)) | 0),
            (mt = (mt + Math.imul(v, ut)) | 0),
            (ct = (ct + Math.imul(b, at)) | 0),
            (dt = (dt + Math.imul(b, ft)) | 0),
            (dt = (dt + Math.imul(B, at)) | 0),
            (mt = (mt + Math.imul(B, ft)) | 0));
          let Lt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Lt >>> 26)) | 0),
            (Lt &= 67108863),
            (ct = Math.imul(x, $)),
            (dt = Math.imul(x, Y)),
            (dt = (dt + Math.imul(H, $)) | 0),
            (mt = Math.imul(H, Y)),
            (ct = (ct + Math.imul(K, it)) | 0),
            (dt = (dt + Math.imul(K, et)) | 0),
            (dt = (dt + Math.imul(P, it)) | 0),
            (mt = (mt + Math.imul(P, et)) | 0),
            (ct = (ct + Math.imul(R, nt)) | 0),
            (dt = (dt + Math.imul(R, st)) | 0),
            (dt = (dt + Math.imul(L, nt)) | 0),
            (mt = (mt + Math.imul(L, st)) | 0),
            (ct = (ct + Math.imul(N, ot)) | 0),
            (dt = (dt + Math.imul(N, ut)) | 0),
            (dt = (dt + Math.imul(E, ot)) | 0),
            (mt = (mt + Math.imul(E, ut)) | 0),
            (ct = (ct + Math.imul(S, at)) | 0),
            (dt = (dt + Math.imul(S, ft)) | 0),
            (dt = (dt + Math.imul(v, at)) | 0),
            (mt = (mt + Math.imul(v, ft)) | 0));
          let Dt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Dt >>> 26)) | 0),
            (Dt &= 67108863),
            (ct = Math.imul(x, it)),
            (dt = Math.imul(x, et)),
            (dt = (dt + Math.imul(H, it)) | 0),
            (mt = Math.imul(H, et)),
            (ct = (ct + Math.imul(K, nt)) | 0),
            (dt = (dt + Math.imul(K, st)) | 0),
            (dt = (dt + Math.imul(P, nt)) | 0),
            (mt = (mt + Math.imul(P, st)) | 0),
            (ct = (ct + Math.imul(R, ot)) | 0),
            (dt = (dt + Math.imul(R, ut)) | 0),
            (dt = (dt + Math.imul(L, ot)) | 0),
            (mt = (mt + Math.imul(L, ut)) | 0),
            (ct = (ct + Math.imul(N, at)) | 0),
            (dt = (dt + Math.imul(N, ft)) | 0),
            (dt = (dt + Math.imul(E, at)) | 0),
            (mt = (mt + Math.imul(E, ft)) | 0));
          let Kt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Kt >>> 26)) | 0),
            (Kt &= 67108863),
            (ct = Math.imul(x, nt)),
            (dt = Math.imul(x, st)),
            (dt = (dt + Math.imul(H, nt)) | 0),
            (mt = Math.imul(H, st)),
            (ct = (ct + Math.imul(K, ot)) | 0),
            (dt = (dt + Math.imul(K, ut)) | 0),
            (dt = (dt + Math.imul(P, ot)) | 0),
            (mt = (mt + Math.imul(P, ut)) | 0),
            (ct = (ct + Math.imul(R, at)) | 0),
            (dt = (dt + Math.imul(R, ft)) | 0),
            (dt = (dt + Math.imul(L, at)) | 0),
            (mt = (mt + Math.imul(L, ft)) | 0));
          let Pt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (Pt >>> 26)) | 0),
            (Pt &= 67108863),
            (ct = Math.imul(x, ot)),
            (dt = Math.imul(x, ut)),
            (dt = (dt + Math.imul(H, ot)) | 0),
            (mt = Math.imul(H, ut)),
            (ct = (ct + Math.imul(K, at)) | 0),
            (dt = (dt + Math.imul(K, ft)) | 0),
            (dt = (dt + Math.imul(P, at)) | 0),
            (mt = (mt + Math.imul(P, ft)) | 0));
          let It = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          ((gt = (((mt + (dt >>> 13)) | 0) + (It >>> 26)) | 0),
            (It &= 67108863),
            (ct = Math.imul(x, at)),
            (dt = Math.imul(x, ft)),
            (dt = (dt + Math.imul(H, at)) | 0),
            (mt = Math.imul(H, ft)));
          let xt = (((gt + ct) | 0) + ((8191 & dt) << 13)) | 0;
          return (
            (gt = (((mt + (dt >>> 13)) | 0) + (xt >>> 26)) | 0),
            (xt &= 67108863),
            (s[0] = pt),
            (s[1] = wt),
            (s[2] = Mt),
            (s[3] = bt),
            (s[4] = Bt),
            (s[5] = At),
            (s[6] = St),
            (s[7] = vt),
            (s[8] = yt),
            (s[9] = Nt),
            (s[10] = Et),
            (s[11] = _t),
            (s[12] = Rt),
            (s[13] = Lt),
            (s[14] = Dt),
            (s[15] = Kt),
            (s[16] = Pt),
            (s[17] = It),
            (s[18] = xt),
            0 !== gt && ((s[19] = gt), (e.length += 1)),
            e
          );
        }
        (Math.imul || (P = L), (t.exports = BN));
      }).call(this, e(2).Buffer);
    },
    5659: function (t, i, e) {
      "use strict";
      (function (t) {
        const r = e(2769),
          n = e(3614),
          { padLeft: s, padRight: h } = e(3230);
        function o(t, i) {
          r(t && "function" === typeof t.publicKeyCreate);
          const e = t.publicKeyCreate(i, !1),
            s = l(t, e);
          return "short" !== t.type
            ? { kty: "OKP", crv: s.crv, x: s.x, d: n.encodeURL(i), ext: !0 }
            : {
                kty: "EC",
                crv: s.crv,
                x: s.x,
                y: s.y,
                d: n.encodeURL(i),
                ext: !0,
              };
        }
        function u(t, i) {
          if (
            (r(t && "function" === typeof t.privateKeyVerify),
            r(i && "object" === typeof i),
            i.kty !== f(t))
          )
            throw new Error("Invalid key type.");
          if (null != i.crv && d(i.crv) !== t.id)
            throw new Error("Invalid curve name.");
          let e = n.decodeURL(i.d);
          if (
            ((e = "short" === t.type ? s(e, t.size) : h(e, t.size)),
            !t.privateKeyVerify(e))
          )
            throw new Error("Invalid private key.");
          return e;
        }
        function l(t, i) {
          r(t && "function" === typeof t.publicKeyExport);
          const e = t.publicKeyExport(i);
          if ("short" !== t.type)
            return { kty: "OKP", crv: c(t.id), x: n.encodeURL(e), ext: !0 };
          const s = e.slice(0, t.size),
            h = e.slice(t.size, 2 * t.size);
          return {
            kty: "EC",
            crv: c(t.id),
            x: n.encodeURL(s),
            y: n.encodeURL(h),
            ext: !0,
          };
        }
        function a(i, e, o) {
          if (
            (r(i && "function" === typeof i.publicKeyImport),
            r(e && "object" === typeof e),
            e.kty !== f(i))
          )
            throw new Error("Invalid key type.");
          if (null != e.crv && d(e.crv) !== i.id)
            throw new Error("Invalid curve name.");
          if ("short" !== i.type) {
            const t = h(n.decodeURL(e.x), i.size);
            return i.publicKeyImport(t);
          }
          const u = s(n.decodeURL(e.x), i.size),
            l = s(n.decodeURL(e.y), i.size),
            a = t.concat([u, l]);
          return i.publicKeyImport(a, o);
        }
        function f(t) {
          return "short" === t.type ? "EC" : "OKP";
        }
        function c(t) {
          switch ((r("string" === typeof t), t)) {
            case "P192":
              return "P-192";
            case "P224":
              return "P-224";
            case "P256":
              return "P-256";
            case "P384":
              return "P-384";
            case "P521":
              return "P-521";
            case "SECP256K1":
              return "P-256K";
            case "ED25519":
              return "Ed25519";
            case "ED448":
              return "Ed448";
            default:
              return t;
          }
        }
        function d(t) {
          switch ((r("string" === typeof t), t)) {
            case "P-192":
              return "P192";
            case "P-224":
              return "P224";
            case "P-256":
              return "P256";
            case "P-384":
              return "P384";
            case "P-521":
              return "P521";
            case "P-256K":
              return "SECP256K1";
            case "Ed25519":
              return "ED25519";
            case "Ed448":
              return "ED448";
            default:
              return t;
          }
        }
        ((i.privateKeyExportJWK = o),
          (i.privateKeyImportJWK = u),
          (i.publicKeyExportJWK = l),
          (i.publicKeyImportJWK = a));
      }).call(this, e(2).Buffer);
    },
    5663: function (t, i, e) {
      "use strict";
      const r = e(2769),
        n = e(3615),
        s = e(3201),
        h = new Uint8Array([
          3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
        ]),
        o = new n("16294579238595022365", 10),
        u = -1601558356,
        l = 673221152,
        a = new n(4127218095),
        f = new n(3948078067);
      function c(t, i, e) {
        (void 0 === i && (i = 20),
          void 0 === e && (e = s),
          r(t >>> 0 === t),
          r(i >>> 0 === i),
          r(t >= 2),
          r(e && "function" === typeof e.randomBytes));
        let u = t % 8;
        0 === u && (u = 8);
        const l = (t + 7) >>> 3;
        for (;;) {
          const r = e.randomBytes(l);
          ((r[0] &= (1 << u) - 1),
            u >= 2
              ? (r[0] |= 3 << (u - 2))
              : ((r[0] |= 1), r.length > 1 && (r[1] |= 128)),
            (r[r.length - 1] |= 1));
          const s = new n(r),
            a = s.mod(o);
          t: for (let i = 0; i < 1 << 20; i += 2) {
            const e = a.addn(i);
            for (let i = 0; i < h.length; i++) {
              const r = h[i];
              if (0 === e.modrn(r) && (t > 6 || 0 !== e.cmpn(r))) continue t;
            }
            i > 0 && s.iaddn(i);
            break;
          }
          if (s.bitLength() === t && d(s, i, e)) return s;
        }
      }
      function d(t, i, e) {
        if (
          (void 0 === e && (e = s), r(t instanceof n), t.isNeg() || t.isZero())
        )
          return !1;
        if (t.cmpn(64) < 0) {
          const i = t.andln(255);
          return i > 31 ? 0 !== (l & (1 << (i - 32))) : 0 !== (u & (1 << i));
        }
        if (!t.isOdd()) return !1;
        const h = t.mod(a).toNumber(),
          o = t.mod(f).toNumber();
        return (
          h % 3 !== 0 &&
          h % 5 !== 0 &&
          h % 7 !== 0 &&
          h % 11 !== 0 &&
          h % 13 !== 0 &&
          h % 17 !== 0 &&
          h % 19 !== 0 &&
          h % 23 !== 0 &&
          h % 37 !== 0 &&
          o % 29 !== 0 &&
          o % 31 !== 0 &&
          o % 41 !== 0 &&
          o % 43 !== 0 &&
          o % 47 !== 0 &&
          o % 53 !== 0 &&
          !!t.isPrime(e, i)
        );
      }
      ((i.randomPrime = c), (i.probablyPrime = d));
    },
    5664: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769),
          n = 281474976710656,
          s = i.from([0]),
          h = i.from([1]);
        class HmacDRBG {
          constructor(t, e, n, s) {
            (r(t && "string" === typeof t.id),
              (this.hash = t),
              (this.minEntropy = "SHA1" === t.id ? 10 : 24),
              (this.K = i.allocUnsafe(t.size)),
              (this.V = i.allocUnsafe(t.size)),
              (this.rounds = 0),
              e && this.init(e, n, s));
          }
          init(t, e, n) {
            (void 0 === e && (e = null),
              void 0 === n && (n = null),
              r(i.isBuffer(t)),
              r(!e || i.isBuffer(e)),
              r(!n || i.isBuffer(n)));
            for (let i = 0; i < this.V.length; i++)
              ((this.K[i] = 0), (this.V[i] = 1));
            const s = o(t, e, n);
            if (s.length < this.minEntropy)
              throw new Error("Not enough entropy.");
            return (this.update(s), (this.rounds = 1), this);
          }
          reseed(t, e) {
            if (
              (void 0 === e && (e = null),
              r(i.isBuffer(t)),
              r(!e || i.isBuffer(e)),
              0 === this.rounds)
            )
              throw new Error("DRBG not initialized.");
            const n = o(t, e);
            if (n.length < this.minEntropy)
              throw new Error("Not enough entropy.");
            return (this.update(n), (this.rounds = 1), this);
          }
          generate(t, e) {
            if (
              (void 0 === e && (e = null),
              r(t >>> 0 === t),
              r(!e || i.isBuffer(e)),
              0 === this.rounds)
            )
              throw new Error("DRBG not initialized.");
            if (this.rounds > n) throw new Error("Reseed is required.");
            (e && 0 === e.length && (e = null), e && this.update(e));
            const s = Math.ceil(t / this.hash.size),
              h = i.allocUnsafe(s * this.hash.size);
            for (let i = 0; i < s; i++)
              ((this.V = this.mac(this.V)), this.V.copy(h, i * this.hash.size));
            return (this.update(e), (this.rounds += 1), h.slice(0, t));
          }
          randomBytes(t) {
            return this.generate(t);
          }
          mac(t) {
            return this.hash.mac(t, this.K);
          }
          hmac() {
            return this.hash.hmac().init(this.K);
          }
          update(t) {
            (void 0 === t && (t = null), r(!t || i.isBuffer(t)));
            const e = this.hmac();
            if (
              (e.update(this.V),
              e.update(s),
              t && e.update(t),
              (this.K = e.final()),
              (this.V = this.mac(this.V)),
              t)
            ) {
              const i = this.hmac();
              (i.update(this.V),
                i.update(h),
                i.update(t),
                (this.K = i.final()),
                (this.V = this.mac(this.V)));
            }
            return this;
          }
        }
        function o(t, e, r) {
          if (
            (void 0 === e && (e = null), void 0 === r && (r = null), !e && !r)
          )
            return t;
          let n = t.length,
            s = 0;
          (e && (n += e.length), r && (n += r.length));
          const h = i.allocUnsafe(n);
          return (
            (s += t.copy(h, s)),
            e && (s += e.copy(h, s)),
            r && r.copy(h, s),
            h
          );
        }
        ((HmacDRBG.native = 0), (t.exports = HmacDRBG));
      }).call(this, e(2).Buffer);
    },
    6822: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769),
          n = e(5659),
          s = e(11014);
        class Mont {
          constructor(t, e, n, s, h) {
            (r("string" === typeof t),
              r(e >>> 0 === e),
              r(n >>> 0 === n),
              r("string" === typeof s),
              r(h && "object" === typeof h),
              (this.id = t),
              (this.type = "mont"),
              (this.oid = i.from(s, "hex")),
              (this.ed = h),
              (this.bits = e),
              (this.size = n),
              (this.native = h.native));
          }
          privateKeyGenerate() {
            return this.ed.scalarGenerate();
          }
          privateKeyVerify(t) {
            return (r(i.isBuffer(t)), t.length === this.size);
          }
          privateKeyExport(t) {
            if (!this.privateKeyVerify(t))
              throw new Error("Invalid private key.");
            return s.encodeOct(t);
          }
          privateKeyImport(t) {
            const i = s.decodeOct(t);
            if (!this.privateKeyVerify(i))
              throw new Error("Invalid private key.");
            return i;
          }
          privateKeyExportPKCS8(t) {
            return s.encodePKCS8({
              version: 0,
              algorithm: { oid: this.oid, type: s.NULL, params: null },
              key: this.privateKeyExport(t),
            });
          }
          privateKeyImportPKCS8(t) {
            const i = s.decodePKCS8(t);
            return (
              r(0 === i.version || 1 === i.version),
              r(i.algorithm.oid.equals(this.oid)),
              r(i.algorithm.type === s.NULL),
              this.privateKeyImport(i.key)
            );
          }
          privateKeyExportJWK(t) {
            return n.privateKeyExportJWK(this, t);
          }
          privateKeyImportJWK(t) {
            return n.privateKeyImportJWK(this, t);
          }
          publicKeyCreate(t) {
            const i = this.ed.scalarClamp(t),
              e = this.ed.publicKeyFromScalar(i);
            return this.ed.publicKeyConvert(e);
          }
          publicKeyConvert(t, i) {
            return (void 0 === i && (i = !1), this.ed.publicKeyDeconvert(t, i));
          }
          publicKeyDeconvert(t) {
            return this.ed.publicKeyConvert(t);
          }
          _scalarBaseMul(t) {
            if (this.ed.x) {
              const i = this.ed.x.decodeScalar(t),
                e = this.ed.x.reduce(i),
                r = this.ed.x.g.mul(e);
              return r.encode();
            }
            return this.publicKeyCreate(t);
          }
          publicKeyFromUniform(t) {
            return this.ed.pointFromUniform(t);
          }
          publicKeyToUniform(t, i) {
            return (void 0 === i && (i = !1), this.ed.pointToUniform(t, i));
          }
          publicKeyFromHash(t) {
            return this.ed.pointFromHash(t);
          }
          publicKeyVerify(t) {
            return this.ed.pointVerify(t);
          }
          publicKeyExport(t) {
            if (!this.publicKeyVerify(t))
              throw new Error("Invalid public key.");
            return i.from(t);
          }
          publicKeyImport(t) {
            if (!this.publicKeyVerify(t))
              throw new Error("Invalid public key.");
            return i.from(t);
          }
          publicKeyExportSPKI(t) {
            return s.encodeSPKI({
              algorithm: { oid: this.oid, type: s.NULL, params: null },
              key: this.publicKeyExport(t),
            });
          }
          publicKeyImportSPKI(t) {
            const i = s.decodeSPKI(t);
            return (
              r(i.algorithm.oid.equals(this.oid)),
              r(i.algorithm.type === s.NULL),
              this.publicKeyImport(i.key)
            );
          }
          publicKeyExportJWK(t) {
            return n.publicKeyExportJWK(this, t);
          }
          publicKeyImportJWK(t) {
            return n.publicKeyImportJWK(this, t, !1);
          }
          derive(t, i) {
            return this.ed.exchangeWithScalar(t, i);
          }
        }
        t.exports = Mont;
      }).call(this, e(2).Buffer);
    },
    6833: function (t, i, e) {
      "use strict";
      (function (i) {
        const r = e(2769),
          { trimLeft: n, padLeft: s } = e(3230);
        class Signature {
          constructor(t, i, e) {
            (void 0 === t && (t = 0),
              (this.r = s(i, t)),
              (this.s = s(e, t)),
              (this.param = 0));
          }
          setR(t, i) {
            return ((this.r = s(t, i)), this);
          }
          setS(t, i) {
            return ((this.s = s(t, i)), this);
          }
          encode(t) {
            (r(t >>> 0 === t),
              r(t < 125),
              r(this.r.length === t),
              r(this.s.length === t));
            const e = i.allocUnsafe(2 * t);
            return (this.r.copy(e, 0), this.s.copy(e, t), e);
          }
          decode(t, e) {
            return (
              r(i.isBuffer(t)),
              r(e >>> 0 === e),
              r(t.length === 2 * e),
              (this.r = t.slice(0, e)),
              (this.s = t.slice(e, 2 * e)),
              this
            );
          }
          toDER(t) {
            (r(t >>> 0 === t),
              r(t < 125),
              r(this.r.length === t),
              r(this.s.length === t));
            const e = h(this.r),
              n = h(this.s),
              s = 2 + e.length + 2 + n.length,
              o = s >= 128 ? 1 : 0,
              u = 2 + o + s,
              l = i.allocUnsafe(u);
            let a = 0;
            return (
              (l[a++] = 48),
              o && (l[a++] = 129),
              (l[a++] = s),
              (l[a++] = 2),
              (l[a++] = e.length),
              (a += e.copy(l, a)),
              (l[a++] = 2),
              (l[a++] = n.length),
              (a += n.copy(l, a)),
              r(a === u),
              l
            );
          }
          fromDER(t, e) {
            (r(i.isBuffer(t)), r(e >>> 0 === e));
            let n = 0,
              h = 0,
              o = 0,
              u = 0,
              l = null,
              a = null;
            if (
              (r(h + 1 <= t.length),
              r(48 === t[h]),
              (h += 1),
              r(h + 1 <= t.length),
              (n = t[h]),
              (h += 1),
              128 & n && ((n -= 128), r(h + n <= t.length), (h += n)),
              r(h + 1 <= t.length),
              r(2 === t[h]),
              (h += 1),
              r(h + 1 <= t.length),
              (n = t[h]),
              (h += 1),
              128 & n)
            ) {
              ((n -= 128), r(h + n <= t.length));
              while (n > 0 && 0 === t[h]) ((n -= 1), (h += 1));
              r(n <= 6);
              while (n > 0) ((o *= 256), (o += t[h]), (n -= 1), (h += 1));
            } else o = n;
            r(h + o <= t.length);
            while (o > 0 && 0 === t[h]) ((o -= 1), (h += 1));
            if (
              ((l = o > e ? i.alloc(e, 0) : t.slice(h, h + o)),
              (h += o),
              r(h + 1 <= t.length),
              r(2 === t[h]),
              (h += 1),
              r(h + 1 <= t.length),
              (n = t[h]),
              (h += 1),
              128 & n)
            ) {
              ((n -= 128), r(h + n <= t.length));
              while (n > 0 && 0 === t[h]) ((n -= 1), (h += 1));
              r(n <= 6);
              while (n > 0) ((u *= 256), (u += t[h]), (n -= 1), (h += 1));
            } else u = n;
            r(h + u <= t.length);
            while (u > 0 && 0 === t[h]) ((u -= 1), (h += 1));
            return (
              (a = u > e ? i.alloc(e, 0) : t.slice(h, h + u)),
              (h += u),
              (this.r = s(l, e)),
              (this.s = s(a, e)),
              this
            );
          }
          static decode(t, i) {
            return new this().decode(t, i);
          }
          static fromDER(t, i) {
            return new this().fromDER(t, i);
          }
          static toRS(t, i) {
            const e = Signature.fromDER(t, i);
            return e.encode(i);
          }
          static toDER(t, i) {
            const e = Signature.decode(t, i);
            return e.toDER(i);
          }
        }
        function h(t) {
          const e = n(t);
          if (128 & e[0]) {
            const t = i.allocUnsafe(1 + e.length);
            return ((t[0] = 0), e.copy(t, 1), t);
          }
          return e;
        }
        t.exports = Signature;
      }).call(this, e(2).Buffer);
    },
  },
]);
