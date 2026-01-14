(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [350],
  {
    2966: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pbkdf2 = o),
        (t.pbkdf2Async = l));
      const r = n(379),
        s = n(130);
      function i(e, t, n, i) {
        (0, s.ahash)(e);
        const a = (0, s.checkOpts)({ dkLen: 32, asyncTick: 10 }, i),
          { c: o, dkLen: l, asyncTick: c } = a;
        if (((0, s.anumber)(o), (0, s.anumber)(l), (0, s.anumber)(c), o < 1))
          throw new Error("iterations (c) should be >= 1");
        const h = (0, s.kdfInputToBytes)(t),
          u = (0, s.kdfInputToBytes)(n),
          d = new Uint8Array(l),
          g = r.hmac.create(e, h),
          f = g._cloneInto().update(u);
        return { c: o, dkLen: l, asyncTick: c, DK: d, PRF: g, PRFSalt: f };
      }
      function a(e, t, n, r, i) {
        return (e.destroy(), t.destroy(), r && r.destroy(), (0, s.clean)(i), n);
      }
      function o(e, t, n, r) {
        const { c: o, dkLen: l, DK: c, PRF: h, PRFSalt: u } = i(e, t, n, r);
        let d;
        const g = new Uint8Array(4),
          f = (0, s.createView)(g),
          p = new Uint8Array(h.outputLen);
        for (let s = 1, i = 0; i < l; s++, i += h.outputLen) {
          const e = c.subarray(i, i + h.outputLen);
          (f.setInt32(0, s, !1),
            (d = u._cloneInto(d)).update(g).digestInto(p),
            e.set(p.subarray(0, e.length)));
          for (let t = 1; t < o; t++) {
            h._cloneInto(d).update(p).digestInto(p);
            for (let t = 0; t < e.length; t++) e[t] ^= p[t];
          }
        }
        return a(h, u, c, d, p);
      }
      async function l(e, t, n, r) {
        const {
          c: o,
          dkLen: l,
          asyncTick: c,
          DK: h,
          PRF: u,
          PRFSalt: d,
        } = i(e, t, n, r);
        let g;
        const f = new Uint8Array(4),
          p = (0, s.createView)(f),
          b = new Uint8Array(u.outputLen);
        for (let i = 1, a = 0; a < l; i++, a += u.outputLen) {
          const e = h.subarray(a, a + u.outputLen);
          (p.setInt32(0, i, !1),
            (g = d._cloneInto(g)).update(f).digestInto(b),
            e.set(b.subarray(0, e.length)),
            await (0, s.asyncLoop)(o - 1, c, () => {
              u._cloneInto(g).update(b).digestInto(b);
              for (let t = 0; t < e.length; t++) e[t] ^= b[t];
            }));
        }
        return a(u, d, h, g, b);
      }
    },
    4398: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.blake2b = t.BLAKE2b = void 0));
      const r = n(4399);
      ((t.BLAKE2b = r.BLAKE2b), (t.blake2b = r.blake2b));
    },
    4399: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.blake2s = t.BLAKE2s = t.blake2b = t.BLAKE2b = t.BLAKE2 = void 0),
        (t.compress = d));
      const r = n(4400),
        s = n(825),
        i = n(395),
        a = n(130),
        o = Uint32Array.from([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        l = new Uint32Array(32);
      function c(e, t, n, r, s, a) {
        const o = s[a],
          c = s[a + 1];
        let h = l[2 * e],
          u = l[2 * e + 1],
          d = l[2 * t],
          g = l[2 * t + 1],
          f = l[2 * n],
          p = l[2 * n + 1],
          b = l[2 * r],
          m = l[2 * r + 1],
          y = i.add3L(h, d, o);
        ((u = i.add3H(y, u, g, c)),
          (h = 0 | y),
          ({ Dh: m, Dl: b } = { Dh: m ^ u, Dl: b ^ h }),
          ({ Dh: m, Dl: b } = { Dh: i.rotr32H(m, b), Dl: i.rotr32L(m, b) }),
          ({ h: p, l: f } = i.add(p, f, m, b)),
          ({ Bh: g, Bl: d } = { Bh: g ^ p, Bl: d ^ f }),
          ({ Bh: g, Bl: d } = {
            Bh: i.rotrSH(g, d, 24),
            Bl: i.rotrSL(g, d, 24),
          }),
          (l[2 * e] = h),
          (l[2 * e + 1] = u),
          (l[2 * t] = d),
          (l[2 * t + 1] = g),
          (l[2 * n] = f),
          (l[2 * n + 1] = p),
          (l[2 * r] = b),
          (l[2 * r + 1] = m));
      }
      function h(e, t, n, r, s, a) {
        const o = s[a],
          c = s[a + 1];
        let h = l[2 * e],
          u = l[2 * e + 1],
          d = l[2 * t],
          g = l[2 * t + 1],
          f = l[2 * n],
          p = l[2 * n + 1],
          b = l[2 * r],
          m = l[2 * r + 1],
          y = i.add3L(h, d, o);
        ((u = i.add3H(y, u, g, c)),
          (h = 0 | y),
          ({ Dh: m, Dl: b } = { Dh: m ^ u, Dl: b ^ h }),
          ({ Dh: m, Dl: b } = {
            Dh: i.rotrSH(m, b, 16),
            Dl: i.rotrSL(m, b, 16),
          }),
          ({ h: p, l: f } = i.add(p, f, m, b)),
          ({ Bh: g, Bl: d } = { Bh: g ^ p, Bl: d ^ f }),
          ({ Bh: g, Bl: d } = {
            Bh: i.rotrBH(g, d, 63),
            Bl: i.rotrBL(g, d, 63),
          }),
          (l[2 * e] = h),
          (l[2 * e + 1] = u),
          (l[2 * t] = d),
          (l[2 * t + 1] = g),
          (l[2 * n] = f),
          (l[2 * n + 1] = p),
          (l[2 * r] = b),
          (l[2 * r + 1] = m));
      }
      function u(e, t, n, r, s) {
        if ((void 0 === t && (t = {}), (0, a.anumber)(n), e < 0 || e > n))
          throw new Error("outputLen bigger than keyLen");
        const { key: i, salt: o, personalization: l } = t;
        if (void 0 !== i && (i.length < 1 || i.length > n))
          throw new Error("key length must be undefined or 1.." + n);
        if (void 0 !== o && o.length !== r)
          throw new Error("salt must be undefined or " + r);
        if (void 0 !== l && l.length !== s)
          throw new Error("personalization must be undefined or " + s);
      }
      class BLAKE2 extends a.Hash {
        constructor(e, t) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.length = 0),
            (this.pos = 0),
            (0, a.anumber)(e),
            (0, a.anumber)(t),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.buffer = new Uint8Array(e)),
            (this.buffer32 = (0, a.u32)(this.buffer)));
        }
        update(e) {
          ((0, a.aexists)(this), (e = (0, a.toBytes)(e)), (0, a.abytes)(e));
          const { blockLen: t, buffer: n, buffer32: r } = this,
            s = e.length,
            i = e.byteOffset,
            o = e.buffer;
          for (let l = 0; l < s; ) {
            this.pos === t &&
              ((0, a.swap32IfBE)(r),
              this.compress(r, 0, !1),
              (0, a.swap32IfBE)(r),
              (this.pos = 0));
            const c = Math.min(t - this.pos, s - l),
              h = i + l;
            if (c !== t || h % 4 || !(l + c < s))
              (n.set(e.subarray(l, l + c), this.pos),
                (this.pos += c),
                (this.length += c),
                (l += c));
            else {
              const e = new Uint32Array(o, h, Math.floor((s - l) / 4));
              (0, a.swap32IfBE)(e);
              for (let n = 0; l + t < s; n += r.length, l += t)
                ((this.length += t), this.compress(e, n, !1));
              (0, a.swap32IfBE)(e);
            }
          }
          return this;
        }
        digestInto(e) {
          ((0, a.aexists)(this), (0, a.aoutput)(e, this));
          const { pos: t, buffer32: n } = this;
          ((this.finished = !0),
            (0, a.clean)(this.buffer.subarray(t)),
            (0, a.swap32IfBE)(n),
            this.compress(n, 0, !0),
            (0, a.swap32IfBE)(n));
          const r = (0, a.u32)(e);
          this.get().forEach((e, t) => (r[t] = (0, a.swap8IfBE)(e)));
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const n = e.slice(0, t);
          return (this.destroy(), n);
        }
        _cloneInto(e) {
          const {
            buffer: t,
            length: n,
            finished: r,
            destroyed: s,
            outputLen: i,
            pos: a,
          } = this;
          return (
            e || (e = new this.constructor({ dkLen: i })),
            e.set(...this.get()),
            e.buffer.set(t),
            (e.destroyed = s),
            (e.finished = r),
            (e.length = n),
            (e.pos = a),
            (e.outputLen = i),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      t.BLAKE2 = BLAKE2;
      class BLAKE2b extends BLAKE2 {
        constructor(e) {
          void 0 === e && (e = {});
          const t = void 0 === e.dkLen ? 64 : e.dkLen;
          (super(128, t),
            (this.v0l = 0 | o[0]),
            (this.v0h = 0 | o[1]),
            (this.v1l = 0 | o[2]),
            (this.v1h = 0 | o[3]),
            (this.v2l = 0 | o[4]),
            (this.v2h = 0 | o[5]),
            (this.v3l = 0 | o[6]),
            (this.v3h = 0 | o[7]),
            (this.v4l = 0 | o[8]),
            (this.v4h = 0 | o[9]),
            (this.v5l = 0 | o[10]),
            (this.v5h = 0 | o[11]),
            (this.v6l = 0 | o[12]),
            (this.v6h = 0 | o[13]),
            (this.v7l = 0 | o[14]),
            (this.v7h = 0 | o[15]),
            u(t, e, 64, 16, 16));
          let { key: n, personalization: r, salt: s } = e,
            i = 0;
          if (
            (void 0 !== n && ((n = (0, a.toBytes)(n)), (i = n.length)),
            (this.v0l ^= this.outputLen | (i << 8) | 65536 | (1 << 24)),
            void 0 !== s)
          ) {
            s = (0, a.toBytes)(s);
            const e = (0, a.u32)(s);
            ((this.v4l ^= (0, a.swap8IfBE)(e[0])),
              (this.v4h ^= (0, a.swap8IfBE)(e[1])),
              (this.v5l ^= (0, a.swap8IfBE)(e[2])),
              (this.v5h ^= (0, a.swap8IfBE)(e[3])));
          }
          if (void 0 !== r) {
            r = (0, a.toBytes)(r);
            const e = (0, a.u32)(r);
            ((this.v6l ^= (0, a.swap8IfBE)(e[0])),
              (this.v6h ^= (0, a.swap8IfBE)(e[1])),
              (this.v7l ^= (0, a.swap8IfBE)(e[2])),
              (this.v7h ^= (0, a.swap8IfBE)(e[3])));
          }
          if (void 0 !== n) {
            const e = new Uint8Array(this.blockLen);
            (e.set(n), this.update(e));
          }
        }
        get() {
          let {
            v0l: e,
            v0h: t,
            v1l: n,
            v1h: r,
            v2l: s,
            v2h: i,
            v3l: a,
            v3h: o,
            v4l: l,
            v4h: c,
            v5l: h,
            v5h: u,
            v6l: d,
            v6h: g,
            v7l: f,
            v7h: p,
          } = this;
          return [e, t, n, r, s, i, a, o, l, c, h, u, d, g, f, p];
        }
        set(e, t, n, r, s, i, a, o, l, c, h, u, d, g, f, p) {
          ((this.v0l = 0 | e),
            (this.v0h = 0 | t),
            (this.v1l = 0 | n),
            (this.v1h = 0 | r),
            (this.v2l = 0 | s),
            (this.v2h = 0 | i),
            (this.v3l = 0 | a),
            (this.v3h = 0 | o),
            (this.v4l = 0 | l),
            (this.v4h = 0 | c),
            (this.v5l = 0 | h),
            (this.v5h = 0 | u),
            (this.v6l = 0 | d),
            (this.v6h = 0 | g),
            (this.v7l = 0 | f),
            (this.v7h = 0 | p));
        }
        compress(e, t, n) {
          (this.get().forEach((e, t) => (l[t] = e)), l.set(o, 16));
          let { h: s, l: u } = i.fromBig(BigInt(this.length));
          ((l[24] = o[8] ^ u),
            (l[25] = o[9] ^ s),
            n && ((l[28] = ~l[28]), (l[29] = ~l[29])));
          let d = 0;
          const g = r.BSIGMA;
          for (let r = 0; r < 12; r++)
            (c(0, 4, 8, 12, e, t + 2 * g[d++]),
              h(0, 4, 8, 12, e, t + 2 * g[d++]),
              c(1, 5, 9, 13, e, t + 2 * g[d++]),
              h(1, 5, 9, 13, e, t + 2 * g[d++]),
              c(2, 6, 10, 14, e, t + 2 * g[d++]),
              h(2, 6, 10, 14, e, t + 2 * g[d++]),
              c(3, 7, 11, 15, e, t + 2 * g[d++]),
              h(3, 7, 11, 15, e, t + 2 * g[d++]),
              c(0, 5, 10, 15, e, t + 2 * g[d++]),
              h(0, 5, 10, 15, e, t + 2 * g[d++]),
              c(1, 6, 11, 12, e, t + 2 * g[d++]),
              h(1, 6, 11, 12, e, t + 2 * g[d++]),
              c(2, 7, 8, 13, e, t + 2 * g[d++]),
              h(2, 7, 8, 13, e, t + 2 * g[d++]),
              c(3, 4, 9, 14, e, t + 2 * g[d++]),
              h(3, 4, 9, 14, e, t + 2 * g[d++]));
          ((this.v0l ^= l[0] ^ l[16]),
            (this.v0h ^= l[1] ^ l[17]),
            (this.v1l ^= l[2] ^ l[18]),
            (this.v1h ^= l[3] ^ l[19]),
            (this.v2l ^= l[4] ^ l[20]),
            (this.v2h ^= l[5] ^ l[21]),
            (this.v3l ^= l[6] ^ l[22]),
            (this.v3h ^= l[7] ^ l[23]),
            (this.v4l ^= l[8] ^ l[24]),
            (this.v4h ^= l[9] ^ l[25]),
            (this.v5l ^= l[10] ^ l[26]),
            (this.v5h ^= l[11] ^ l[27]),
            (this.v6l ^= l[12] ^ l[28]),
            (this.v6h ^= l[13] ^ l[29]),
            (this.v7l ^= l[14] ^ l[30]),
            (this.v7h ^= l[15] ^ l[31]),
            (0, a.clean)(l));
        }
        destroy() {
          ((this.destroyed = !0),
            (0, a.clean)(this.buffer32),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      function d(e, t, n, s, i, a, o, l, c, h, u, d, g, f, p, b, m, y, w, k) {
        let v = 0;
        for (let j = 0; j < s; j++)
          (({ a: i, b: c, c: g, d: m } = (0, r.G1s)(i, c, g, m, n[t + e[v++]])),
            ({
              a: i,
              b: c,
              c: g,
              d: m,
            } = (0, r.G2s)(i, c, g, m, n[t + e[v++]])),
            ({
              a: a,
              b: h,
              c: f,
              d: y,
            } = (0, r.G1s)(a, h, f, y, n[t + e[v++]])),
            ({
              a: a,
              b: h,
              c: f,
              d: y,
            } = (0, r.G2s)(a, h, f, y, n[t + e[v++]])),
            ({
              a: o,
              b: u,
              c: p,
              d: w,
            } = (0, r.G1s)(o, u, p, w, n[t + e[v++]])),
            ({
              a: o,
              b: u,
              c: p,
              d: w,
            } = (0, r.G2s)(o, u, p, w, n[t + e[v++]])),
            ({
              a: l,
              b: d,
              c: b,
              d: k,
            } = (0, r.G1s)(l, d, b, k, n[t + e[v++]])),
            ({
              a: l,
              b: d,
              c: b,
              d: k,
            } = (0, r.G2s)(l, d, b, k, n[t + e[v++]])),
            ({
              a: i,
              b: h,
              c: p,
              d: k,
            } = (0, r.G1s)(i, h, p, k, n[t + e[v++]])),
            ({
              a: i,
              b: h,
              c: p,
              d: k,
            } = (0, r.G2s)(i, h, p, k, n[t + e[v++]])),
            ({
              a: a,
              b: u,
              c: b,
              d: m,
            } = (0, r.G1s)(a, u, b, m, n[t + e[v++]])),
            ({
              a: a,
              b: u,
              c: b,
              d: m,
            } = (0, r.G2s)(a, u, b, m, n[t + e[v++]])),
            ({
              a: o,
              b: d,
              c: g,
              d: y,
            } = (0, r.G1s)(o, d, g, y, n[t + e[v++]])),
            ({
              a: o,
              b: d,
              c: g,
              d: y,
            } = (0, r.G2s)(o, d, g, y, n[t + e[v++]])),
            ({
              a: l,
              b: c,
              c: f,
              d: w,
            } = (0, r.G1s)(l, c, f, w, n[t + e[v++]])),
            ({
              a: l,
              b: c,
              c: f,
              d: w,
            } = (0, r.G2s)(l, c, f, w, n[t + e[v++]])));
        return {
          v0: i,
          v1: a,
          v2: o,
          v3: l,
          v4: c,
          v5: h,
          v6: u,
          v7: d,
          v8: g,
          v9: f,
          v10: p,
          v11: b,
          v12: m,
          v13: y,
          v14: w,
          v15: k,
        };
      }
      ((t.BLAKE2b = BLAKE2b),
        (t.blake2b = (0, a.createOptHasher)((e) => new BLAKE2b(e))));
      const g = s.SHA256_IV;
      class BLAKE2s extends BLAKE2 {
        constructor(e) {
          void 0 === e && (e = {});
          const t = void 0 === e.dkLen ? 32 : e.dkLen;
          (super(64, t),
            (this.v0 = 0 | g[0]),
            (this.v1 = 0 | g[1]),
            (this.v2 = 0 | g[2]),
            (this.v3 = 0 | g[3]),
            (this.v4 = 0 | g[4]),
            (this.v5 = 0 | g[5]),
            (this.v6 = 0 | g[6]),
            (this.v7 = 0 | g[7]),
            u(t, e, 32, 8, 8));
          let { key: n, personalization: r, salt: s } = e,
            i = 0;
          if (
            (void 0 !== n && ((n = (0, a.toBytes)(n)), (i = n.length)),
            (this.v0 ^= this.outputLen | (i << 8) | 65536 | (1 << 24)),
            void 0 !== s)
          ) {
            s = (0, a.toBytes)(s);
            const e = (0, a.u32)(s);
            ((this.v4 ^= (0, a.swap8IfBE)(e[0])),
              (this.v5 ^= (0, a.swap8IfBE)(e[1])));
          }
          if (void 0 !== r) {
            r = (0, a.toBytes)(r);
            const e = (0, a.u32)(r);
            ((this.v6 ^= (0, a.swap8IfBE)(e[0])),
              (this.v7 ^= (0, a.swap8IfBE)(e[1])));
          }
          if (void 0 !== n) {
            (0, a.abytes)(n);
            const e = new Uint8Array(this.blockLen);
            (e.set(n), this.update(e));
          }
        }
        get() {
          const {
            v0: e,
            v1: t,
            v2: n,
            v3: r,
            v4: s,
            v5: i,
            v6: a,
            v7: o,
          } = this;
          return [e, t, n, r, s, i, a, o];
        }
        set(e, t, n, r, s, i, a, o) {
          ((this.v0 = 0 | e),
            (this.v1 = 0 | t),
            (this.v2 = 0 | n),
            (this.v3 = 0 | r),
            (this.v4 = 0 | s),
            (this.v5 = 0 | i),
            (this.v6 = 0 | a),
            (this.v7 = 0 | o));
        }
        compress(e, t, n) {
          const { h: s, l: a } = i.fromBig(BigInt(this.length)),
            {
              v0: o,
              v1: l,
              v2: c,
              v3: h,
              v4: u,
              v5: f,
              v6: p,
              v7: b,
              v8: m,
              v9: y,
              v10: w,
              v11: k,
              v12: v,
              v13: j,
              v14: x,
              v15: q,
            } = d(
              r.BSIGMA,
              t,
              e,
              10,
              this.v0,
              this.v1,
              this.v2,
              this.v3,
              this.v4,
              this.v5,
              this.v6,
              this.v7,
              g[0],
              g[1],
              g[2],
              g[3],
              a ^ g[4],
              s ^ g[5],
              n ? ~g[6] : g[6],
              g[7],
            );
          ((this.v0 ^= o ^ m),
            (this.v1 ^= l ^ y),
            (this.v2 ^= c ^ w),
            (this.v3 ^= h ^ k),
            (this.v4 ^= u ^ v),
            (this.v5 ^= f ^ j),
            (this.v6 ^= p ^ x),
            (this.v7 ^= b ^ q));
        }
        destroy() {
          ((this.destroyed = !0),
            (0, a.clean)(this.buffer32),
            this.set(0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      ((t.BLAKE2s = BLAKE2s),
        (t.blake2s = (0, a.createOptHasher)((e) => new BLAKE2s(e))));
    },
    4400: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BSIGMA = void 0),
        (t.G1s = s),
        (t.G2s = i));
      const r = n(130);
      function s(e, t, n, s, i) {
        return (
          (e = (e + t + i) | 0),
          (s = (0, r.rotr)(s ^ e, 16)),
          (n = (n + s) | 0),
          (t = (0, r.rotr)(t ^ n, 12)),
          { a: e, b: t, c: n, d: s }
        );
      }
      function i(e, t, n, s, i) {
        return (
          (e = (e + t + i) | 0),
          (s = (0, r.rotr)(s ^ e, 8)),
          (n = (n + s) | 0),
          (t = (0, r.rotr)(t ^ n, 7)),
          { a: e, b: t, c: n, d: s }
        );
      }
      t.BSIGMA = Uint8Array.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
        15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14,
        3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
        11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7,
        6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6,
        1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13,
        12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1,
        11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1,
        9,
      ]);
    },
    9910: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifySignature =
          t.default =
          t.dangerouslyParseUriAndGetFullKeypair =
          t.Sr25519Account =
          t.Account =
            void 0));
      var s = n(239),
        i = n(130),
        a = n(380),
        o = n(4398),
        l = n(378),
        c = n(2966),
        h = r(n(9911)),
        u = Object.defineProperty,
        d = (e, t, n) =>
          t in e
            ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        g = (e, t, n) => (d(e, "symbol" !== typeof t ? t + "" : t, n), n),
        f = (e) => {
          (0, s.keccakP)(
            new Uint32Array(
              e.buffer,
              e.byteOffset,
              Math.floor(e.byteLength / 4),
            ),
            24,
          );
        },
        p = {
          [0]: 2,
          [1]: 6,
          [2]: 7,
          [3]: 10,
          [4]: 11,
          [5]: 14,
          [6]: 15,
          [7]: 12,
          [8]: 13,
          [9]: 4,
        },
        b = new TextEncoder(),
        m = class {
          constructor() {
            (g(this, "state"),
              g(this, "initialized"),
              g(this, "pos"),
              g(this, "posBegin"),
              g(this, "strobeR"),
              g(this, "curFlags"),
              g(this, "i0"),
              g(this, "MacLen", 16));
          }
          strobe_init(e) {
            this.initialized = !1;
            const t = 168;
            this.strobeR = t - 2;
            const n = Uint8Array.from([1, this.strobeR + 2, 1, 0, 1, 96]),
              r = new TextEncoder().encode("STROBEv1.0.2"),
              s = new Uint8Array(n.length + r.length);
            (s.set(n),
              s.set(r, n.length),
              (this.posBegin = 0),
              (this.pos = 0),
              (this.state = new Uint8Array(200)),
              this.strobe_duplex(s, 0, s.byteLength, !1, !1, !0),
              (this.initialized = !0));
            const i = b.encode(e);
            this.operate(!0, p[0], i, 0, i.length, 0, !1);
          }
          clone() {
            const e = new m();
            return (
              (e.state = Uint8Array.from(this.state)),
              (e.initialized = this.initialized),
              (e.pos = this.pos),
              (e.posBegin = this.posBegin),
              (e.strobeR = this.strobeR),
              (e.curFlags = this.curFlags),
              (e.i0 = this.i0),
              e
            );
          }
          run_f() {
            (this.initialized &&
              ((this.state[this.pos] ^= this.posBegin),
              (this.state[this.pos + 1] ^= 4),
              (this.state[this.strobeR + 1] ^= 128)),
              f(this.state),
              (this.posBegin = 0),
              (this.pos = 0));
          }
          strobe_mark(e, t) {}
          strobe_duplex(e, t, n, r, s, i) {
            const a = e.slice(t, n);
            for (let o = 0; o < a.byteLength; o++)
              (r && (a[o] ^= this.state[this.pos]),
                (this.state[this.pos] ^= a[o]),
                s && (a[o] = this.state[this.pos]),
                (this.pos += 1),
                this.pos === this.strobeR && this.run_f());
            return (i && 0 !== this.pos && this.run_f(), a);
          }
          operate(e, t, n, r, s, i, a) {
            let o;
            (e && (t |= 16),
              (o = 9 !== (9 & t) && 2 !== (3 & t) ? new Uint8Array(i) : n),
              a ? this.curFlags : (this.begin_op(t), (this.curFlags = t)));
            const l = 12 === (13 & t),
              c = 0 !== (4 & t) && !l,
              h = this.duplex(o, r, 0 === i ? s : i, c, l, !1);
            if (3 === (3 & t)) return h;
            if (8 === (9 & t)) return h;
            if (9 === (11 & t)) {
              let e = 0;
              return (
                h.forEach((t) => {
                  e |= t;
                }),
                Uint8Array.from([e])
              );
            }
            return null;
          }
          begin_op(e) {
            0 !== (8 & e) &&
              (2 === this.i0 && (this.i0 = 1 & e), (e ^= this.i0));
            const t = this.posBegin;
            this.posBegin = this.pos + 1;
            const n = 0 !== (36 & e),
              r = new Uint8Array(2);
            ((r[0] = t % 255),
              (r[1] = e),
              this.duplex(r, 0, r.length, !1, !1, n));
          }
          duplex(e, t, n, r, s, i) {
            const a = e.slice();
            for (let o = 0; o < a.length; o++)
              (r && (a[o] ^= this.state[this.pos]),
                (this.state[this.pos] ^= a[o]),
                s && (a[o] = this.state[this.pos]),
                (this.pos += 1),
                this.pos === this.strobeR && this.run_f());
            return (i && 0 !== this.pos && this.run_f(), a);
          }
          ad(e, t) {
            this.ad_f(e, t, 0, t.length);
          }
          ad_f(e, t, n, r) {
            this.operate(e, p[0], t, n, r, 0, !1);
          }
          send_clr(e, t) {
            return this.send_clr_f(e, t, 0, t.length);
          }
          send_clr_f(e, t, n, r) {
            return this.operate(e, p[3], t, n, r, 0, !1);
          }
          recv_clr(e, t) {
            return this.recv_clr_f(e, t, 0, t.length);
          }
          recv_clr_f(e, t, n, r) {
            return this.operate(e, p[4], t, n, r, 0, !1);
          }
          send_mac(e, t) {
            return this.operate(e, p[7], new Uint8Array(0), 0, 0, t, !1);
          }
          recv_mac(e, t) {
            return this.recv_mac_f(e, t, 0, t.length);
          }
          recv_mac_f(e, t, n, r) {
            const s = this.operate(e, p[8], t, n, r, 0, !1);
            return null !== s && 0 === s[0];
          }
          ratchet(e) {
            this.operate(!1, p[9], new Uint8Array(0), 0, 0, e, !1);
          }
          send_enc_unauthenticated(e, t) {
            return this.send_enc_unauthenticated_f(e, t, 0, t.length);
          }
          send_enc_unauthenticated_f(e, t, n, r) {
            return this.operate(e, p[5], t, n, r, 0, !1);
          }
        },
        y = new TextEncoder();
      function w(e) {
        const t = new Uint8Array(4);
        return (
          (t[0] = e % 256),
          (t[1] = e << 8),
          (t[2] = e << 16),
          (t[3] = e << 24),
          t
        );
      }
      var k = class {
          constructor(e) {
            (g(this, "strobe"), (this.strobe = e));
          }
          RekeyWithWitnessBytes(e, t) {
            return (
              this.strobe.MetaAd(e, !1),
              this.strobe.MetaAd(w(t.length), !0),
              this.strobe.Key(t, !1),
              this
            );
          }
          Finalize(e) {
            const t = e.GetRandomArrayU8_32(),
              n = this.strobe.Clone();
            return (n.MetaAd(y.encode("rng"), !1), n.Key(t, !1), n);
          }
        },
        v = class {
          constructor() {
            (g(this, "obj"), g(this, "MERLIN_PROTOCOL_LABEL", "Merlin v1.0"));
          }
          Init(e) {
            ((this.obj = new m()),
              this.obj.strobe_init(this.MERLIN_PROTOCOL_LABEL),
              this.AppendMessage(y.encode("dom-sep"), y.encode(e)));
          }
          GetStrobe() {
            return this.obj.clone();
          }
          Clone() {
            const e = new v();
            return ((e.obj = this.obj.clone()), e);
          }
          AppendMessage(e, t) {
            (this.MetaAd(e, !1), this.MetaAd(w(t.length), !0), this.Ad(t, !1));
          }
          MetaAd(e, t) {
            this.obj.operate(!0, p[0], e, 0, e.length, 0, t);
          }
          Ad(e, t) {
            this.obj.operate(!1, p[0], e, 0, e.length, 0, t);
          }
          Prf(e, t) {
            const n = new Uint8Array(0),
              r = this.obj.operate(!1, p[2], n, 0, 0, e, t);
            if (null === r) throw new Error("Error in Prf: result is null");
            return r;
          }
          Key(e, t) {
            this.obj.operate(!1, p[1], e, 0, e.length, 0, t);
          }
          AppendU64(e, t) {
            this.AppendMessage(e, t);
          }
          ChallengeBytes(e, t) {
            const n = w(t);
            return (this.MetaAd(e, !1), this.MetaAd(n, !0), this.Prf(t, !1));
          }
          WitnessBytes(e, t, n) {
            const r = new Array(1);
            return ((r[0] = t), this.WitnessBytesRngL(e, r, n));
          }
          WitnessBytesRngL(e, t, n) {
            let r = this.BuildRng();
            return (
              t.forEach((t) => {
                r = r.RekeyWithWitnessBytes(e, t);
              }),
              r.Finalize(n)
            );
          }
          WitnessBytesHdkd(e, t, n) {
            const r = new Uint8Array(t);
            let s = this.BuildRng();
            for (const a of n) s = s.RekeyWithWitnessBytes(e, a);
            const i = s.Finalize(new ve());
            return (i.FillBytes(r), r);
          }
          BuildRng() {
            return new k(this.Clone());
          }
          FillBytes(e) {
            const t = w(e.length);
            (this.MetaAd(t, !1), this.Prf(e.length, !1));
          }
        },
        j = 0x51da312547e1b,
        x = BigUint64Array.from([
          0x0002631a5cf5d3edn,
          0x000dea2f79cd6581n,
          0x000000000014def9n,
          0x0000000000000000n,
          0x0000100000000000n,
        ]),
        q = BigUint64Array.from([
          0x000f48bd6721e6edn,
          0x0003bab5ac67e45an,
          0x000fffffeb35e51bn,
          0x000fffffffffffffn,
          0x00000fffffffffffn,
        ]),
        z = BigUint64Array.from([
          0x0009d265e952d13bn,
          0x000d63c715bea69fn,
          0x0005be65cb687604n,
          0x0003dceec73d217fn,
          0x000009411b7c309an,
        ]),
        B = BigInt(2 ** 64),
        A = class {
          constructor(e, t) {
            (g(this, "i0"), g(this, "i1"), (this.i0 = e), (this.i1 = t));
          }
        };
      function _(e) {
        return Number(e % 256n);
      }
      function E(e) {
        const t = new Uint8Array(32);
        return (
          (t[0] = _(e[0] >> 0n)),
          (t[1] = _(e[0] >> 8n)),
          (t[2] = _(e[0] >> 16n)),
          (t[3] = _(e[0] >> 24n)),
          (t[4] = _(e[0] >> 32n)),
          (t[5] = _(e[0] >> 40n)),
          (t[6] = _((e[0] >> 48n) | (e[1] << 4n))),
          (t[7] = _(e[1] >> 4n)),
          (t[8] = _(e[1] >> 12n)),
          (t[9] = _(e[1] >> 20n)),
          (t[10] = _(e[1] >> 28n)),
          (t[11] = _(e[1] >> 36n)),
          (t[12] = _(e[1] >> 44n)),
          (t[13] = _(e[2] >> 0n)),
          (t[14] = _(e[2] >> 8n)),
          (t[15] = _(e[2] >> 16n)),
          (t[16] = _(e[2] >> 24n)),
          (t[17] = _(e[2] >> 32n)),
          (t[18] = _(e[2] >> 40n)),
          (t[19] = _((e[2] >> 48n) | (e[3] << 4n))),
          (t[20] = _(e[3] >> 4n)),
          (t[21] = _(e[3] >> 12n)),
          (t[22] = _(e[3] >> 20n)),
          (t[23] = _(e[3] >> 28n)),
          (t[24] = _(e[3] >> 36n)),
          (t[25] = _(e[3] >> 44n)),
          (t[26] = _(e[4] >> 0n)),
          (t[27] = _(e[4] >> 8n)),
          (t[28] = _(e[4] >> 16n)),
          (t[29] = _(e[4] >> 24n)),
          (t[30] = _(e[4] >> 32n)),
          (t[31] = _(e[4] >> 40n)),
          t
        );
      }
      function M(e) {
        const t = new BigUint64Array(5);
        for (let i = 0; i < 4; i++)
          for (let n = 0; n < 8; n++)
            t[i] |= (BigInt(e[8 * i + n]) << BigInt(8 * n)) % B;
        const n = (1n << 52n) - 1n,
          r = (1n << 48n) - 1n,
          s = new BigUint64Array(5);
        return (
          (s[0] = t[0] & n),
          (s[1] = ((t[0] >> 52n) | (t[1] << 12n)) & n),
          (s[2] = ((t[1] >> 40n) | (t[2] << 24n)) & n),
          (s[3] = ((t[2] >> 28n) | (t[3] << 36n)) & n),
          (s[4] = (t[3] >> 16n) & r),
          s
        );
      }
      function S(e, t) {
        const n = (e - t) % B;
        return n > 0 ? n : B + n;
      }
      function T(e, t) {
        const n = new BigUint64Array(5),
          r = (1n << 52n) - 1n;
        let s = 0n;
        for (let o = 0; o < 5; o++)
          ((s = S(e[o], t[o] + (s >> 63n))), (n[o] = (s & r) % B));
        const i = S((s >> 63n) ^ 1n, 1n);
        let a = 0n;
        for (let o = 0; o < 5; o++)
          ((a = BigInt((a >> 52n) + n[o] + (x[o] & i))), (n[o] = a & r));
        return n;
      }
      function I(e, t) {
        const n = new BigUint64Array(5),
          r = (1n << 52n) - 1n;
        let s = 0n;
        for (let i = 0; i < 5; i++)
          ((s = BigInt(e[i]) + BigInt(t[i]) + (s >> 52n)), (n[i] = s & r));
        return T(n, x);
      }
      function X(e, t) {
        const n = P(U(e, t));
        return P(U(n, z));
      }
      function N(e, t) {
        return BigInt(e) * BigInt(t);
      }
      function F(e) {
        const t = (e * BigInt(j)) & ((1n << 52n) - 1n);
        return new A(t, (e + N(t, BigInt(x[0]))) >> 52n);
      }
      function Y(e) {
        const t = (e % B) & ((1n << 52n) - 1n);
        return new A(t, e >> 52n);
      }
      function P(e) {
        const t = x,
          n = F(e[0]),
          r = F(n.i1 + e[1] + N(n.i0, BigInt(t[1]))),
          s = F(r.i1 + e[2] + N(n.i0, BigInt(t[2])) + N(r.i0, BigInt(t[1]))),
          i = F(s.i1 + e[3] + N(r.i0, BigInt(t[2])) + N(s.i0, BigInt(t[1]))),
          a = F(
            i.i1 +
              e[4] +
              N(n.i0, BigInt(t[4])) +
              N(s.i0, BigInt(t[2])) +
              N(i.i0, BigInt(t[1])),
          ),
          o = Y(
            a.i1 +
              e[5] +
              N(r.i0, BigInt(t[4])) +
              N(i.i0, BigInt(t[2])) +
              N(a.i0, BigInt(t[1])),
          ),
          l = Y(o.i1 + e[6] + N(s.i0, BigInt(t[4])) + N(a.i0, BigInt(t[2]))),
          c = Y(l.i1 + e[7] + N(i.i0, BigInt(t[4]))),
          h = Y(c.i1 + e[8] + N(a.i0, BigInt(t[4]))),
          u = h.i1;
        return T(BigUint64Array.from([o.i0, l.i0, c.i0, h.i0, u]), t);
      }
      function U(e, t) {
        const n = Array(9);
        return (
          (n[0] = N(e[0], t[0])),
          (n[1] = N(e[0], t[1]) + N(e[1], t[0])),
          (n[2] = N(e[0], t[2]) + N(e[1], t[1]) + N(e[2], t[0])),
          (n[3] =
            N(e[0], t[3]) + N(e[1], t[2]) + N(e[2], t[1]) + N(e[3], t[0])),
          (n[4] =
            N(e[0], t[4]) +
            N(e[1], t[3]) +
            N(e[2], t[2]) +
            N(e[3], t[1]) +
            N(e[4], t[0])),
          (n[5] =
            N(e[1], t[4]) + N(e[2], t[3]) + N(e[3], t[2]) + N(e[4], t[1])),
          (n[6] = N(e[2], t[4]) + N(e[3], t[3]) + N(e[4], t[2])),
          (n[7] = N(e[3], t[4]) + N(e[4], t[3])),
          (n[8] = N(e[4], t[4])),
          n
        );
      }
      function L(e, t) {
        return P(U(e, t));
      }
      function C(e) {
        const t = new BigUint64Array(8);
        for (let i = 0; i < 8; i++)
          for (let n = 0; n < 8; n++)
            t[i] |= (BigInt(e[8 * i + n]) << BigInt(8 * n)) % B;
        const n = (1n << 52n) - 1n;
        let r = new BigUint64Array(5),
          s = new BigUint64Array(5);
        return (
          (r[0] = t[0] & n),
          (r[1] = ((t[0] >> 52n) | (t[1] << 12n)) & n),
          (r[2] = ((t[1] >> 40n) | (t[2] << 24n)) & n),
          (r[3] = ((t[2] >> 28n) | (t[3] << 36n)) & n),
          (r[4] = ((t[3] >> 16n) | (t[4] << 48n)) & n),
          (s[0] = (t[4] >> 4n) & n),
          (s[1] = ((t[4] >> 56n) | (t[5] << 8n)) & n),
          (s[2] = ((t[5] >> 44n) | (t[6] << 20n)) & n),
          (s[3] = ((t[6] >> 32n) | (t[7] << 32n)) & n),
          (s[4] = t[7] >> 20n),
          (r = L(r, q)),
          (s = L(s, z)),
          I(s, r)
        );
      }
      function K(e) {
        const t = [];
        for (let n = 0; n < e.length; n += 8) {
          let r = 0n;
          for (let t = n + 7; t >= n; t--) r = (r << 8n) | BigInt(e[t]);
          t.push(r);
        }
        return t;
      }
      var R = class {
          constructor() {
            g(this, "bytes");
          }
          static FromBytes(e) {
            if (32 !== e.length)
              throw new Error(
                "Invalid size of data: should be 32, got " + e.length,
              );
            const t = new R();
            return ((t.bytes = e), t);
          }
          static FromBits(e) {
            if (32 !== e.length)
              throw new Error(
                "Invalid size of data: should be 32, got " + e.length,
              );
            const t = new R();
            return ((t.bytes = e), (t.bytes[31] &= 127), t);
          }
          ToBytes() {
            return this.bytes.slice();
          }
          static FromBytesModOrderWide(e) {
            const t = C(e);
            return E(t);
          }
          static ToRadix16(e) {
            const t = [];
            for (let n = 0; n < 32; n++)
              ((t[2 * n] = 15 & e[n]), (t[2 * n + 1] = (e[n] >> 4) & 15));
            for (let n = 0; n < 63; n++) {
              const e = (t[n] + 8) >> 4;
              ((t[n] -= e << 4), (t[n + 1] += e));
            }
            return t;
          }
          static DivideScalarBytesByCofactor(e) {
            const t = new Uint8Array(e.length);
            let n = 0;
            for (let r = e.length - 1; r >= 0; r--) {
              const s = 7 & e[r];
              ((e[r] >>= 3), (e[r] += n), (t[r] = e[r]), (n = (s << 5) % 256));
            }
            return t;
          }
          static MultiplyScalarBytesByCofactor(e) {
            const t = new Uint8Array(e.length);
            let n = 0;
            for (let r = 0; r < e.length; r++) {
              const s = 224 & e[r];
              ((e[r] = e[r] << 3), (e[r] += n), (t[r] = e[r]), (n = s >> 5));
            }
            return t;
          }
          NonAdjacentForm(e) {
            const t = new Array(256).fill(0),
              n = K(this.ToBytes()),
              r = [...n, ...new Array(5 - n.length).fill(0n)],
              s = 1n << BigInt(e),
              i = s - 1n;
            let a = 0,
              o = 0n;
            while (a < 256) {
              const n = Math.floor(a / 64),
                l = a % 64;
              let c;
              c =
                l < 64 - e
                  ? r[Number(n)] >> BigInt(l)
                  : (r[n] >> BigInt(l)) | (r[n + 1] << BigInt(64 - l));
              const h = o + (c & i);
              0n !== (1n & h)
                ? (h < s / 2n
                    ? ((o = 0n), (t[a] = Number(h)))
                    : ((o = 1n), (t[a] = Number(h - s))),
                  (a += e))
                : (a += 1);
            }
            return t;
          }
        },
        Z = (1n << 51n) - 1n;
      function D(e) {
        return (
          BigInt(e[0]) |
          (BigInt(e[1]) << 8n) |
          (BigInt(e[2]) << 16n) |
          (BigInt(e[3]) << 24n) |
          (BigInt(e[4]) << 32n) |
          (BigInt(e[5]) << 40n) |
          (BigInt(e[6]) << 48n) |
          (BigInt(e[7]) << 56n)
        );
      }
      var O = class {
        constructor() {
          (g(this, "i0"), g(this, "i1"));
        }
      };
      function G(e) {
        const t = e.Square(),
          n = t.Square().Square(),
          r = e.Mul(n),
          s = t.Mul(r),
          i = s.Square(),
          a = r.Mul(i),
          o = a.Pow2k(5),
          l = o.Mul(a),
          c = l.Pow2k(10),
          h = c.Mul(l),
          u = h.Pow2k(20),
          d = u.Mul(h),
          g = d.Pow2k(10),
          f = g.Mul(l),
          p = f.Pow2k(50),
          b = p.Mul(f),
          m = b.Pow2k(100),
          y = m.Mul(b),
          w = y.Pow2k(50),
          k = w.Mul(f),
          v = Array(2);
        return ((v[0] = k), (v[1] = s), v);
      }
      function W(e) {
        const t = G(e),
          n = t[0].Pow2k(2),
          r = e.Mul(n);
        return r;
      }
      var H = class {
          constructor(e) {
            (g(this, "data", Array(5)),
              (this.data[0] = e[0]),
              (this.data[1] = e[1]),
              (this.data[2] = e[2]),
              (this.data[3] = e[3]),
              (this.data[4] = e[4]));
          }
          static FromBytes(e) {
            const t = this.Zero();
            return (
              (t.data[0] = D(e.slice(0, 8)) & Z),
              (t.data[1] = (D(e.slice(6, 14)) >> 3n) & Z),
              (t.data[2] = (D(e.slice(12, 20)) >> 6n) & Z),
              (t.data[3] = (D(e.slice(19, 27)) >> 1n) & Z),
              (t.data[4] = (D(e.slice(24, 32)) >> 12n) & Z),
              t
            );
          }
          Clone() {
            return new H(this.data.slice());
          }
          CtEq(e) {
            const t = this.ToBytes(),
              n = e.ToBytes();
            if (t.length !== n.length) return !1;
            for (let r = 0; r < t.length; r++) if (t[r] !== n[r]) return !1;
            return !0;
          }
          Negate() {
            return this.Reduce([
              36028797018963664n - this.data[0],
              36028797018963952n - this.data[1],
              36028797018963952n - this.data[2],
              36028797018963952n - this.data[3],
              36028797018963952n - this.data[4],
            ]);
          }
          static SqrtRatioI(e, t) {
            const n = t.Square().Mul(t),
              r = n.Square().Mul(t);
            let s = e.Mul(n).Mul(W(e.Mul(r)));
            const i = t.Mul(s.Square()),
              a = $,
              o = i.CtEq(e),
              l = i.CtEq(e.Negate()),
              c = i.CtEq(e.Negate().Mul(a)),
              h = s.Mul($);
            s.ConditionalAssign(h, l || c);
            const u = s.IsNegative();
            u && (s = s.Negate());
            const d = o || l,
              g = new O();
            return ((g.i0 = d), (g.i1 = s), g);
          }
          ConditionalNegate(e) {
            const t = this.Negate();
            this.ConditionalAssign(t, e);
          }
          IsNegative() {
            const e = this.data[0] % 256n,
              t = 1 & Number(e);
            return t > 0;
          }
          ConditionalAssign(e, t) {
            ((this.data[0] = t ? e.data[0] : this.data[0]),
              (this.data[1] = t ? e.data[1] : this.data[1]),
              (this.data[2] = t ? e.data[2] : this.data[2]),
              (this.data[3] = t ? e.data[3] : this.data[3]),
              (this.data[4] = t ? e.data[4] : this.data[4]));
          }
          Pow2k(e) {
            const t = this.Clone().data;
            while (1) {
              const n = 19n * t[3],
                r = 19n * t[4],
                s = N(t[0], t[0]) + 2n * (N(t[1], r) + N(t[2], n));
              let i = N(t[3], n) + 2n * (N(t[0], t[1]) + N(t[2], r)),
                a = N(t[1], t[1]) + 2n * (N(t[0], t[2]) + N(t[4], n)),
                o = N(t[4], r) + 2n * (N(t[0], t[3]) + N(t[1], t[2])),
                l = N(t[2], t[2]) + 2n * (N(t[0], t[4]) + N(t[1], t[3]));
              ((i += s >> 51n),
                (t[0] = (s % B) & Z),
                (a += i >> 51n),
                (t[1] = (i % B) & Z),
                (o += a >> 51n),
                (t[2] = (a % B) & Z),
                (l += o >> 51n),
                (t[3] = (o % B) & Z));
              const c = l >> 51n;
              if (
                ((t[4] = (l % B) & Z),
                (t[0] = t[0] + ((19n * c) % B)),
                (t[1] += t[0] >> 51n),
                (t[0] &= Z),
                e--,
                0 === e)
              )
                break;
            }
            return new H(t);
          }
          static One() {
            return new H([1n, 0n, 0n, 0n, 0n]);
          }
          static Zero() {
            return new H([0n, 0n, 0n, 0n, 0n]);
          }
          Mul(e) {
            const t = this.data,
              n = e,
              r = 19n * n.data[1],
              s = 19n * n.data[2],
              i = 19n * n.data[3],
              a = 19n * n.data[4],
              o =
                N(t[0], n.data[0]) +
                N(t[4], r) +
                N(t[3], s) +
                N(t[2], i) +
                N(t[1], a);
            let l =
                N(t[1], n.data[0]) +
                N(t[0], n.data[1]) +
                N(t[4], s) +
                N(t[3], i) +
                N(t[2], a),
              c =
                N(t[2], n.data[0]) +
                N(t[1], n.data[1]) +
                N(t[0], n.data[2]) +
                N(t[4], i) +
                N(t[3], a),
              h =
                N(t[3], n.data[0]) +
                N(t[2], n.data[1]) +
                N(t[1], n.data[2]) +
                N(t[0], n.data[3]) +
                N(t[4], a),
              u =
                N(t[4], n.data[0]) +
                N(t[3], n.data[1]) +
                N(t[2], n.data[2]) +
                N(t[1], n.data[3]) +
                N(t[0], n.data[4]);
            const d = Array(5);
            ((l += o >> 51n),
              (d[0] = (o & Z) % B),
              (c += l >> 51n),
              (d[1] = (l & Z) % B),
              (h += c >> 51n),
              (d[2] = (c & Z) % B),
              (u += h >> 51n),
              (d[3] = (h & Z) % B));
            const g = (u >> 51n) % B;
            return (
              (d[4] = (u & Z) % B),
              (d[0] = d[0] + 19n * g),
              (d[1] += d[0] >> 51n),
              (d[0] &= Z),
              new H(d)
            );
          }
          Reduce(e) {
            const t = e[0] >> 51n,
              n = e[1] >> 51n,
              r = e[2] >> 51n,
              s = e[3] >> 51n,
              i = e[4] >> 51n;
            return (
              (e[0] &= Z),
              (e[1] &= Z),
              (e[2] &= Z),
              (e[3] &= Z),
              (e[4] &= Z),
              (e[0] += 19n * i),
              (e[1] += t),
              (e[2] += n),
              (e[3] += r),
              (e[4] += s),
              new H(e)
            );
          }
          Add(e) {
            const t = new H(this.data);
            for (let n = 0; n < 5; n++) t.data[n] += e.data[n];
            return t;
          }
          Sub(e) {
            return this.Reduce([
              this.data[0] + 36028797018963664n - e.data[0],
              this.data[1] + 36028797018963952n - e.data[1],
              this.data[2] + 36028797018963952n - e.data[2],
              this.data[3] + 36028797018963952n - e.data[3],
              this.data[4] + 36028797018963952n - e.data[4],
            ]);
          }
          Square() {
            return this.Pow2k(1);
          }
          Square2() {
            const e = this.Pow2k(1);
            for (let t = 0; t < 5; t++) e.data[t] *= 2n;
            return e;
          }
          BitXor(e) {
            const t = new H(this.data);
            return (
              (t.data[0] ^= e.data[0]),
              (t.data[1] ^= e.data[1]),
              (t.data[2] ^= e.data[2]),
              (t.data[3] ^= e.data[3]),
              (t.data[4] ^= e.data[4]),
              t
            );
          }
          BitAnd(e) {
            const t = new H(this.data);
            return (
              (t.data[0] &= e),
              (t.data[1] &= e),
              (t.data[2] &= e),
              (t.data[3] &= e),
              (t.data[4] &= e),
              t
            );
          }
          ToBytes() {
            const e = this.Clone(),
              t = e.Reduce(this.Clone().data).data;
            let n = (t[0] + 19n) >> 51n;
            ((n = (t[1] + n) >> 51n),
              (n = (t[2] + n) >> 51n),
              (n = (t[3] + n) >> 51n),
              (n = (t[4] + n) >> 51n),
              (t[0] += 19n * n));
            const r = (1n << 51n) - 1n;
            ((t[1] += t[0] >> 51n),
              (t[0] = t[0] & r),
              (t[2] += t[1] >> 51n),
              (t[1] = t[1] & r),
              (t[3] += t[2] >> 51n),
              (t[2] = t[2] & r),
              (t[4] += t[3] >> 51n),
              (t[3] = t[3] & r),
              (t[4] = t[4] & r));
            const s = new Uint8Array(32);
            return (
              (s[0] = Number(t[0] % 256n)),
              (s[1] = Number((t[0] >> 8n) % 256n)),
              (s[2] = Number((t[0] >> 16n) % 256n)),
              (s[3] = Number((t[0] >> 24n) % 256n)),
              (s[4] = Number((t[0] >> 32n) % 256n)),
              (s[5] = Number((t[0] >> 40n) % 256n)),
              (s[6] = Number(((t[0] >> 48n) % 256n) | ((t[1] << 3n) % 256n))),
              (s[7] = Number((t[1] >> 5n) % 256n)),
              (s[8] = Number((t[1] >> 13n) % 256n)),
              (s[9] = Number((t[1] >> 21n) % 256n)),
              (s[10] = Number((t[1] >> 29n) % 256n)),
              (s[11] = Number((t[1] >> 37n) % 256n)),
              (s[12] = Number(((t[1] >> 45n) | (t[2] << 6n)) % 256n)),
              (s[13] = Number((t[2] >> 2n) % 256n)),
              (s[14] = Number((t[2] >> 10n) % 256n)),
              (s[15] = Number((t[2] >> 18n) % 256n)),
              (s[16] = Number((t[2] >> 26n) % 256n)),
              (s[17] = Number((t[2] >> 34n) % 256n)),
              (s[18] = Number((t[2] >> 42n) % 256n)),
              (s[19] = Number(((t[2] >> 50n) | (t[3] << 1n)) % 256n)),
              (s[20] = Number((t[3] >> 7n) % 256n)),
              (s[21] = Number((t[3] >> 15n) % 256n)),
              (s[22] = Number((t[3] >> 23n) % 256n)),
              (s[23] = Number((t[3] >> 31n) % 256n)),
              (s[24] = Number((t[3] >> 39n) % 256n)),
              (s[25] = Number(((t[3] >> 47n) | (t[4] << 4n)) % 256n)),
              (s[26] = Number((t[4] >> 4n) % 256n)),
              (s[27] = Number((t[4] >> 12n) % 256n)),
              (s[28] = Number((t[4] >> 20n) % 256n)),
              (s[29] = Number((t[4] >> 28n) % 256n)),
              (s[30] = Number((t[4] >> 36n) % 256n)),
              (s[31] = Number((t[4] >> 44n) % 256n)),
              s
            );
          }
          Invert() {
            const e = G(this),
              t = e[0].Pow2k(5),
              n = t.Mul(e[1]);
            return n;
          }
        },
        $ = new H([
          1718705420411056n,
          234908883556509n,
          2233514472574048n,
          2117202627021982n,
          765476049583133n,
        ]),
        V = class {
          constructor() {
            (g(this, "X"), g(this, "Y"), g(this, "Z"));
          }
          Double() {
            const e = this.X.Square(),
              t = this.Y.Square(),
              n = this.Z.Square2(),
              r = this.X.Add(this.Y),
              s = r.Square(),
              i = t.Add(e),
              a = t.Sub(e),
              o = new J();
            return (
              (o.X = s.Sub(i)),
              (o.Y = i),
              (o.Z = a),
              (o.T = n.Sub(a)),
              o
            );
          }
          static Identity() {
            const e = new V();
            return ((e.X = H.Zero()), (e.Y = H.One()), (e.Z = H.One()), e);
          }
          ToExtended() {
            return re.EdwardsPointFromElems(
              this.X.Mul(this.Z),
              this.Y.Mul(this.Z),
              this.Z.Square(),
              this.X.Mul(this.Y),
            );
          }
        },
        J = class {
          constructor() {
            (g(this, "X"), g(this, "Y"), g(this, "Z"), g(this, "T"));
          }
          ToProjective() {
            const e = new V();
            return (
              (e.X = this.X.Mul(this.T)),
              (e.Y = this.Y.Mul(this.Z)),
              (e.Z = this.Z.Mul(this.T)),
              e
            );
          }
          ToExtended() {
            return re.EdwardsPointFromElems(
              this.X.Mul(this.T),
              this.Y.Mul(this.Z),
              this.Z.Mul(this.T),
              this.X.Mul(this.Y),
            );
          }
        },
        Q = class {
          constructor() {
            (g(this, "Y_plus_X"),
              g(this, "Y_minus_X"),
              g(this, "XY2d"),
              (this.Y_plus_X = H.One()),
              (this.Y_minus_X = H.One()),
              (this.XY2d = H.Zero()));
          }
          static FromElements(e, t, n) {
            const r = new Q();
            return ((r.Y_plus_X = e), (r.Y_minus_X = t), (r.XY2d = n), r);
          }
          static FromArray(e) {
            if (15 !== e.length) throw new Error("Array length must be 15");
            return Q.FromElements(
              new H(e.slice(0, 5)),
              new H(e.slice(5, 10)),
              new H(e.slice(10, 15)),
            );
          }
          static FromStringInRadix36Form(e) {
            const t = e.split(",").map((e) => BigInt(parseInt(e, 36)));
            if (15 !== t.length) throw new Error("Array length must be 15");
            return Q.FromElements(
              new H(t.slice(0, 5)),
              new H(t.slice(5, 10)),
              new H(t.slice(10, 15)),
            );
          }
          ConditionalAssign(e, t) {
            (this.Y_plus_X.ConditionalAssign(e.Y_plus_X, t),
              this.Y_minus_X.ConditionalAssign(e.Y_minus_X, t),
              this.XY2d.ConditionalAssign(e.XY2d, t));
          }
          BitXor(e) {
            const t = new Q();
            return (
              (t.Y_plus_X = this.Y_plus_X.BitXor(e.Y_plus_X)),
              (t.Y_minus_X = this.Y_minus_X.BitXor(e.Y_minus_X)),
              (t.XY2d = this.XY2d.BitXor(this.XY2d)),
              t
            );
          }
          ConditionalNegate(e) {
            const t = this.Negate();
            this.ConditionalAssign(t, e);
          }
          Negate() {
            const e = new Q();
            return (
              (e.Y_plus_X = this.Y_minus_X.Clone()),
              (e.Y_minus_X = this.Y_plus_X.Clone()),
              (e.XY2d = this.XY2d.Negate()),
              e
            );
          }
        },
        ee = class {
          constructor() {
            (g(this, "Y_plus_X"),
              g(this, "Y_minus_X"),
              g(this, "Z"),
              g(this, "T2d"),
              (this.Y_plus_X = H.Zero()),
              (this.Y_minus_X = H.Zero()),
              (this.Z = H.Zero()),
              (this.T2d = H.Zero()));
          }
          BitXor(e) {
            const t = new ee();
            return (
              (t.Y_plus_X = this.Y_plus_X.BitXor(e.Y_plus_X)),
              (t.Y_minus_X = this.Y_minus_X.BitXor(e.Y_minus_X)),
              (t.Z = this.Z.BitXor(e.Z)),
              (t.T2d = this.T2d.BitXor(e.T2d)),
              t
            );
          }
          BitAnd(e) {
            const t = BigInt(e),
              n = new ee();
            return (
              (n.Y_plus_X = this.Y_plus_X.BitAnd(t)),
              (n.Y_minus_X = this.Y_minus_X.BitAnd(t)),
              (n.Z = this.Z.BitAnd(t)),
              (n.T2d = this.T2d.BitAnd(t)),
              n
            );
          }
          Negate() {
            const e = new ee();
            return (
              (e.Y_plus_X = this.Y_plus_X.Negate()),
              (e.Y_minus_X = this.Y_minus_X.Negate()),
              (e.Z = this.Z.Negate()),
              (e.T2d = this.T2d.Negate()),
              e
            );
          }
          Copy() {
            const e = new ee();
            return (
              (e.Y_plus_X = this.Y_plus_X.Clone()),
              (e.Y_minus_X = this.Y_minus_X.Clone()),
              (e.Z = this.Z.Clone()),
              (e.T2d = this.T2d.Clone()),
              e
            );
          }
          GetPoint() {
            return this;
          }
          FromPoint(e) {
            ((this.Y_plus_X = e.Y_plus_X),
              (this.Y_minus_X = e.Y_minus_X),
              (this.Z = e.Z),
              (this.T2d = e.T2d));
          }
          ConditionalAssign(e, t) {
            const n = t ? 65535 : 0;
            this.FromPoint(this.GetPoint().BitXor(this.BitXor(e).BitAnd(n)));
          }
          ConditionalNegate(e) {
            const t = this.GetPoint();
            this.ConditionalAssign(t, e);
          }
        },
        te = new H([
          1859910466990425n,
          932731440258426n,
          1072319116312658n,
          1815898335770999n,
          633789495995903n,
        ]),
        ne = new H([
          929955233495203n,
          466365720129213n,
          1662059464998953n,
          2033849074728123n,
          1442794654840575n,
        ]),
        re = class {
          constructor() {
            (g(this, "X"), g(this, "Y"), g(this, "Z"), g(this, "T"));
          }
          FromElems(e, t, n, r) {
            ((this.X = e), (this.Y = t), (this.Z = n), (this.T = r));
          }
          static EdwardsPointFromElems(e, t, n, r) {
            const s = new re();
            return ((s.X = e), (s.Y = t), (s.Z = n), (s.T = r), s);
          }
          Equals(e) {
            let t = !0;
            for (let n = 0; n < 5; n++)
              t =
                t &&
                this.X.data[n] === e.X.data[n] &&
                this.Y.data[n] === e.Y.data[n] &&
                this.Z.data[n] === e.Z.data[n] &&
                this.T.data[n] === e.T.data[n];
            return t;
          }
          Copy() {
            const e = new re();
            return (e.FromElems(this.X, this.Y, this.Z, this.T), e);
          }
          static FromCompressedPoint(e) {
            const t = H.FromBytes(e);
            if (t.IsNegative())
              throw new Error(
                "Compressed point decompression error: s is negative",
              );
            const n = H.One(),
              r = t.Square(),
              s = n.Sub(r),
              i = n.Add(r),
              a = i.Square(),
              o = ne.Negate(),
              l = o.Mul(s.Square()).Sub(a),
              c = H.SqrtRatioI(H.One(), l.Mul(a)),
              h = c.i1.Mul(i),
              u = c.i1.Mul(h).Mul(l),
              d = t.Add(t).Mul(h),
              g = d.IsNegative();
            d.ConditionalNegate(g);
            const f = s.Mul(u),
              p = d.Mul(f);
            return re.EdwardsPointFromElems(d, f, n, p);
          }
          static Double(e) {
            return e.ToProjective().Double().ToExtended();
          }
          MulByPow2(e) {
            let t,
              n = this.ToProjective();
            for (let r = 0; r < e - 1; r++)
              ((t = n.Double()), (n = t.ToProjective()));
            return n.Double().ToExtended();
          }
          static Identity() {
            return re.EdwardsPointFromElems(
              H.Zero(),
              H.One(),
              H.One(),
              H.Zero(),
            );
          }
          Negate() {
            return re.EdwardsPointFromElems(
              this.X.Negate(),
              this.Y,
              this.Z,
              this.T.Negate(),
            );
          }
          ToExtended() {
            return re.EdwardsPointFromElems(
              this.X.Mul(this.T),
              this.Y.Mul(this.Z),
              this.Z.Mul(this.T),
              this.X.Mul(this.Y),
            );
          }
          AddPnp(e) {
            const t = this.Y.Add(this.X),
              n = this.Y.Sub(this.X),
              r = t.Mul(e.Y_plus_X),
              s = n.Mul(e.Y_minus_X),
              i = this.T.Mul(e.T2d),
              a = this.Z.Mul(e.Z),
              o = a.Add(a),
              l = new J();
            return (
              (l.X = r.Sub(s)),
              (l.Y = r.Add(s)),
              (l.Z = o.Add(i)),
              (l.T = o.Sub(i)),
              l
            );
          }
          AddAnp(e) {
            const t = this.Y.Add(this.X),
              n = this.Y.Sub(this.X),
              r = t.Mul(e.Y_plus_X),
              s = n.Mul(e.Y_minus_X),
              i = this.T.Mul(e.XY2d),
              a = this.Z.Add(this.Z),
              o = new J();
            return (
              (o.X = r.Sub(s)),
              (o.Y = r.Add(s)),
              (o.Z = a.Add(i)),
              (o.T = a.Sub(i)),
              o
            );
          }
          AddEp(e) {
            return this.AddPnp(e.ToProjectiveNiels()).ToExtended();
          }
          SubAnp(e) {
            const t = this.Y.Add(this.X),
              n = this.Y.Sub(this.X),
              r = t.Mul(e.Y_minus_X),
              s = n.Mul(e.Y_plus_X),
              i = this.T.Mul(e.XY2d),
              a = this.Z.Add(this.Z),
              o = new J();
            return (
              (o.X = r.Sub(s)),
              (o.Y = r.Add(s)),
              (o.Z = a.Sub(i)),
              (o.T = a.Add(i)),
              o
            );
          }
          SubPnp(e) {
            const t = this.Y.Add(this.X),
              n = this.Y.Sub(this.X),
              r = t.Mul(e.Y_minus_X),
              s = n.Mul(e.Y_plus_X),
              i = this.T.Mul(e.T2d),
              a = this.Z.Mul(e.Z),
              o = a.Add(a),
              l = new J();
            return (
              (l.X = r.Sub(s)),
              (l.Y = r.Add(s)),
              (l.Z = o.Sub(i)),
              (l.T = o.Add(i)),
              l
            );
          }
          ToProjectiveNiels() {
            const e = new ee();
            return (
              (e.Y_plus_X = this.Y.Add(this.X)),
              (e.Y_minus_X = this.Y.Sub(this.X)),
              (e.Z = this.Z),
              (e.T2d = this.T.Mul(te)),
              e
            );
          }
          ToProjective() {
            const e = new V();
            return ((e.X = this.X), (e.Y = this.Y), (e.Z = this.Z), e);
          }
          ToAffineNiels() {
            const e = this.X.Mul(this.Y).Mul(te),
              t = new Q();
            return (
              (t.Y_plus_X = this.Y.Add(this.X)),
              (t.Y_minus_X = this.Y.Sub(this.X)),
              (t.XY2d = e),
              t
            );
          }
        },
        se = class {
          constructor() {
            g(this, "Pnp");
          }
          Select(e) {
            return this.Pnp[e / 2];
          }
        },
        ie = class {
          constructor() {
            g(this, "lookupTable");
          }
          NafLookupTable(e) {
            this.lookupTable = e;
          }
          Select(e) {
            return this.lookupTable.affineNielsPoints[e / 2];
          }
          static FromEdwardsPoint(e) {
            const t = new Array(8);
            for (let s = 0; s < 8; s++) t[s] = e.ToProjectiveNiels();
            const n = re.Double(e);
            for (let s = 0; s <= 6; s++)
              t[s + 1] = n.AddPnp(t[s]).ToExtended().ToProjectiveNiels();
            const r = new se();
            return ((r.Pnp = t), r);
          }
        },
        ae = class {
          constructor(e) {
            (void 0 === e && (e = []), g(this, "lt"), (this.lt = e));
          }
          Mul(e) {
            const t = R.ToRadix16(e.bytes);
            let n = re.Identity();
            for (let r = 0; r < 64; r++)
              if (r % 2 === 1) {
                const e = this.lt[Math.floor(r / 2)].Select(t[r]),
                  s = n.AddAnp(e),
                  i = s.ToExtended();
                n = i;
              }
            n = n.MulByPow2(4);
            for (let r = 0; r < 64; r++)
              r % 2 === 0 &&
                (n = n
                  .AddAnp(this.lt[Math.floor(r / 2)].Select(t[r]))
                  .ToExtended());
            return n;
          }
        },
        oe = class {
          constructor() {
            (g(this, "ep"), g(this, "affineNielsPoints"));
          }
          static FromEdward(e) {
            const t = new oe();
            ((t.ep = e),
              (t.affineNielsPoints = new Q[8]()),
              (t.affineNielsPoints[0] = e.ToAffineNiels()));
            for (let n = 0; n < 7; n++)
              t.affineNielsPoints[n + 1] = e
                .AddAnp(t.affineNielsPoints[n])
                .ToExtended()
                .ToAffineNiels();
            return t;
          }
          static FromANPArray(e) {
            const t = new oe();
            return ((t.affineNielsPoints = e), t);
          }
          static FromArrayOfStringsInRadix36Form(e) {
            return oe.FromANPArray(e.map(Q.FromStringInRadix36Form));
          }
          Select(e) {
            const t = e >> 7,
              n = (e + t) ^ t,
              r = new Q();
            for (let i = 1; i < 9; i++)
              r.ConditionalAssign(this.affineNielsPoints[i - 1], n === i);
            const s = 1 & t;
            return (r.ConditionalNegate(1 === s), r);
          }
          static From(e) {
            return oe.FromEdward(e);
          }
        },
        le = oe;
      g(le, "FromBigintMatrix", (e) => oe.FromANPArray(e.map(Q.FromArray)));
      var ce = [
          "yuw1d7ohv6,ola5qtbuuu,otp7yucl9y,eel1loivjl,niwkyful3f,m82pv8bwe,20jxbhurhe,67rvlup4sc,3bz0fuxjck,by7j4n28ox,2ysqonijjc,cehg3i7i49,e03f4y6pb4,7u8rkjn3se,j8m0w4201y",
          "frq2ailels,gxz46s5gbo,b5aa5uikgg,ykznlfkz0v,l5boa0000e,347l7ponl1,lfz2mxs0jw,edbuo29w7j,ee2gvkgb9s,7eezzyyw8t,i81aass13d,bteze6jfdh,ailvyozgy4,6mak0o2ime,fm7k0we3yz",
          "7kxaay9xcw,nhboz4phdu,uheea0ahwi,vrheeurh9o,tbkhe6zztr,46qlyo30sa,5zok62dgqa,4cvifd3adv,88yofi7wik,3oro8ffagl,ap1mri4l8l,2pgzzemq3b,jargu8y0ps,95gyia98jx,bpyqr4m56j",
          "spx3qe9gvz,kc46eic4te,ptfkdlcy50,pmm0dv1b0z,c56yziv3yg,jvt0ojrgz5,6nvh5lhwel,138rxhmg79,awzdbtmwnd,53jicbsoc1,9i3yxjowwy,2fk3hg4j74,56ksm07bel,wlu2lpmwc,l8o6pnqdbt",
          "hr02oe750c,ge5o3jqsth,s0lg0ous8p,l9t5w68ici,vazqjajg0n,gzp84xu3xg,j1f4oro2nh,f6prasj1fq,hemmy8tylv,crwnd7st6x,dlt6ghwh0b,e30hlvnowm,kav1ue4fm7,fa24ztrmq1,k1uavs9yq0",
          "15ktisvac4e,rddovhgagm,fy0qknlrzu,lqfanx7ix7,bifpfmu860,kdw44w8vuw,ed565x982z,6590l3oybx,ae316ww59x,49u344m9gc,8sruvztk2x,bi13ys5b0l,c8g574sbte,cv2gdefopm,ap7za1r6qn",
          "o9uxyv9cod,vfbfmqiqct,bf56j3ele5,pap8r9vd6l,6479gg0tbi,jewgn6k043,3btj8f7lzh,7i8wuca3e7,6g7n65qkwl,ezrwnxsle,1qscpkpp4o,ha0d9ytsa4,icucsapuai,bmiiwauatk,cq8ejgx193",
          "iu5r5lhnkw,qpj1lg7grd,llo02ho3yh,9xmibug31c,gye4dq6iu6,ajfbo5w3kb,cj26raoadd,it3cgbu0ry,kfqc2hccn7,bq8fuh6ltx,6tm0eai6ty,4xap23rhdf,kd4go6hw3h,bfyn01dlft,e1tobl2cst",
          "hx02gbaa9a,qxq3ecca54,ha55qiq2de,ubzy8tz22f,1534xj1z3wk,9rnqltgkuf,7v84to2802,hi3nx4x5ts,b69dcd5tw4,joqzx5zcsi,46q09qv4us,k3aavs166m,g9h4731is1,erw61jubep,cch1k0r08e",
          "kqgabxlbfv,dnu20ziqni,zruqa25sqw,ls0ujq8jq1,g1gnq67nc9,emgk3codaf,a2ev4o4akw,4yptk3bcfv,9h7y7zcg03,5tg50j0u3i,2m8sk1i2jr,bqsies6qaq,ve0qcnjoq,563z0spa4o,ch39cvygpu",
          "yz6vqt5upg,ccls2549z7,fuo6ojngjn,z8iyzg621w,10xi777yih1,d6jdqoigl,dts5af06el,5p2galm1wq,h51bdpvjm8,kmsz5qp0pw,87cujat71b,jxedl02d6q,i98j7hgx9x,8eovezbh73,fnjhvfi3x6",
          "1085eflcsxv,czlyoai7u9,4wciwdngx4,q8tte073bj,bw8ywvn2m0,gah4tcp1eh,8xof3ddrvg,18p4y4xlyo,gzxggm81gt,a0qtrglbx,14kbhkqvsz,58u9281ya4,14wz9zrx5l,lktkxbysn2,3n94gveac2",
          "axv9tdfg9x,jurj6cjh73,ibi0cmkon0,yttj1qagwi,14qht6c1spk,483bz3438o,9lq3bwy1ah,2cblh330nn,gakatd37ra,kwdfpugl0f,km6rfs1unq,7fkaudlzbr,dzhi1ksp8t,i0nwparsve,jt5adaqy51",
          "6nq4vsekz6,s2cfwwl4zs,bv9eakscpf,r7ndz1juf9,l0eygd6ntq,h4v8uj740,csjsb5whm8,b75e1miunm,f423hi3yqs,db4h1tub8f,ir3gowe4wj,fnpq702cta,24hkm6qrhy,k4dep4cdqd,jemdvtkh54",
          "naee4qp81a,kao7fvgmls,il1zozbrj7,ld2mok2spo,ndg1noik7k,a1ktpfqq7o,ces1bm0qv7,3lzplgcfip,5rhdjvxtes,3elpg8om0d,9lqw48pucl,ai28oxlqaa,4hg8wstcg,bns5yamn70,af5w7n0m27",
          "e3frcj98nn,jxqp4ecic5,10w009a6l0v,apla2o383y,l8j0basrlz,95el11jr5t,2igc22c8f1,701rj40zlv,221r4zwmw8,1tp7uyfomv,83z1ufzd2g,gr5re0kiy,2286jvriu9,au9d7ja3yr,6zydddis6n",
          "mr98nclixe,wgkkmbt0b2,jqgfx7ib8f,ibuhk6h885,uzvskmreu1,fea6yi6zzx,i5kdshnvd6,j7gric29pu,8z4437mt25,kj4hdfvrbr,e253fcb33e,11nf5knv4h,f3q0y4xu4,bzhu0dgr1d,ewr22x0z4i",
          "ywd19ly9q6,nbdtngcbnk,pa0nmqh3ro,i97iixhffv,macyh5gxck,7r4aike2mt,kqiabxvlr8,b4pxmzpcpy,h7uj0it8tn,iyc8apfng,5g7ske2e96,23n72h1fa,n3tdwb73a,68l13wmc6h,5o6x1z5o4l",
          "9s9nlfgome,123dlh2dq96,fwr2gflrsf,ord7n1o5wh,k9v17xxk17,2gz4iy699c,gk3v0atjx8,ezhhvr83xo,48zjaowtq4,i9nh5hr4vy,638isuo2ev,cdquf4szpt,1zxv2r4m08,cm075c0d2,epw412y4c5",
          "gh73lsamw6,nq73q4a1h1,pyf1gxc58n,r6qdlz22px,wtpaqpu644,frdnyhcl3h,a1enkeyj1r,a9bttrf2ge,gjo38dbasz,kxx9t92lwd,8t8l4lybu3,11m5f6jthi,9xyvl8k4tx,34o9skrhhs,jkbrg0wqyw",
          "hdqn96chtz,s6xplkk4pc,phr0uocbva,dng7v1g232,lhkogfzt6w,b9ru4rt6xh,lsjyzali04,eo1o0kb21x,6jqiw9as9m,b508dnpq4s,jqma6034wa,h46h366wbn,44h4uakuju,acgytivsre,5oslg9eo6k",
          "lilbgzzubp,cw3l4jf26p,orefmiauxa,13c2j33ujt3,tptrgk4vl9,dud2j09077,h9yltwwe5q,bxkhslsxkn,huo5p42ch7,9tpjj5ds50,t2vka0lzx,g7lkyb3cu0,61bo5ux45m,cx6jvab5ax,sptmo9db5",
          "nixjr0f31t,3z5iljkmdl,fq994pvt55,t2vizuusgs,l0utp5sx2e,hzggnikzge,2z5mnjks8e,ej0guqi2xx,8aol6t14a8,e5xw48m2ci,6j14wapx1d,g8mjzwt0o9,abhl0890u5,66wx4tj6xx,iul0zrmrmc",
          "hoi4cnduo6,30s1vlrxmn,sssh46o8tm,rkypp0ea6n,ga7t5t78wz,kgg314tvhf,23die76xu8,6n7n9ty2w8,8mc1ekaude,kaejpt4cvi,dzi8t7fyjl,a61rafw4vq,d7o8r6ac37,d749aym99r,jkvq3j6l30",
          "anrr6zjf0c,p25ag7porx,12ai91caoi7,gg2dkq67kz,xicih3tqpm,w1z8ofbt8,i3mwtzwxvf,5mi8hnu51v,g5b5ijoyer,2j8e7z2atz,f1tjl5o0i2,exlpcnwdfc,7qyv2jmg1k,ef4sfnbrsq,gl7wtu68yr",
          "7zlbthbs7i,renlhq9t02,hf3bdblzkj,t92foykinm,8oauw468h1,hkkqj74lwl,49suqx520d,bof6fkfdm3,eqbcgzniqg,h1vh7g1z6c,46m8vf3xio,dcnr0za9np,416ymceh6p,4hiprsu6to,fx6jouqojc",
          "oemw5db5rs,rdj35mmt1p,mxg84cjoix,14fxik5lqz4,cyj9x14j6i,fxbsr5dkv8,h589xgxeo3,6kh9thuii4,kojj8ix6kb,a5w54eqiqp,h9q0fitm2p,2fnihwjk4x,hwvtrum0ox,79d2p0a44p,a7w8kuy90o",
          "hcs0sb3awi,6mtl0kbo04,k8a8ws3gj4,k36exobex3,txmtk95k0p,g0sfuchmji,glr617fhfc,cwbhuukksn,734a7qrn86,2yd34prhzm,2cfcv9texw,e6ljsluuig,202raasg0o,e5njk1307k,zzioie2kz",
          "insqk5wz3k,j1nsc020ha,107ifl1u06n,oz31epigxc,71byjiqb1c,504x4pmohb,gnitxe51y7,lct14zo0pk,a6x5kxiipx,j2gvlfsbyw,3ufy35vu0v,dosk1e0e7g,dmapybao43,4ajqsnrzcq,ij56k93hsa",
          "10wf58wzlq1,khxnbktarf,wcahofe5w9,kkvi8zy72f,pf4tdqbk01,2ejikb4ipt,cpk95d4qet,ilhlc8gdme,c5e05fr3eu,2dgvszt2ir,cgti6rb3f3,bay37x3342,8njv5euf7a,hvmij3xrot,8y6o6b2at1",
          "otw4gj46fy,9e0a2bif6w,jukb0ihluy,ddi8b75xz7,rx2mq0qpug,m1yf09pnn6,39ayo6a3fl,45oj9q0qju,el2ina37vs,63q8pxnktd,de4zyzrt6p,hflyglpnxa,dqiab16xbr,hv0dji6plq,55b6cd5rtg",
          "ppsxyuy9iu,6yoz7af3om,cxsmjwo6m3,sqsd3cn1tq,laazra6rpt,97dbsjnsdr,49qurk4ji6,gcq7td0yh7,jdqjar2v6n,8lsddyyzhm,9bp6u2e02,48qhu3ibr1,et8eo2j2ar,hccl0xg9zm,5c6x9c0qhu",
          "hcmfu1tcfh,urck10gr5r,zn5jjudqg1,sni7cqmuhq,dwd9fq9f35,5asuwwn3ou,e1dgbswfiv,5sjfkc70qk,eqnwts1shu,frx8lgr2yo,8xofbesi7r,jc1mqaaxc3,6686hieia7,cbcpxp3sau,9g98idtp9b",
          "d58ox9jwgt,sfn35a4dc9,q4fpaxhxfa,r86vqku8gu,98sdd8k4m3,2x65u6w1mw,k5sklfk8yr,kg1gfs7f3n,28qqca6pg5,frvt68uogb,fi8d3uxihn,dmopfieq2f,3vjdf9fh4r,lc4jgubvx7,fagc0qczxg",
          "fy47gffz5v,fioe1nzw96,tvwco8x1fp,h34ewzx1of,n6w55k0pbe,a305d4bhye,9f9cd7xrw2,gn7ernvjgl,kp5vjtaf6c,anqa4u6xht,ifj9tmt7pp,gxgy1zmh9c,flhqdbaoqe,8400brfsz9,m3g5njae1x",
          "6bmenc17zj,wtwuk66t7n,306pkjligj,phsbbkztx9,lwl048zlse,h2pj74maj5,2key6n0moq,1jpp0dwxqb,9dncspw57r,26zdhyfygl,by0hkbitcz,2tnkbg5kkf,kz37k9votm,31atnpsgam,bzm0pwxfhv",
          "x31ep9rzk3,i5gm1mh5sr,fdko8svth9,ao9e048vpj,idjd0xaafd,4jb163320q,jdnganfsar,4w69dcmbh8,65rgythenz,lfn71gyvyf,gaxk4tmz85,k1wruyxeip,6k8hqbs0bv,fwq4frkba3,eus12nzoi5",
          "m44eczuqsl,af4zdegxtw,eb0c4syp1i,1302ddbifio,g2xlxl71ww,9pqji09v07,eua4uwfkmi,ceu32n1xm5,kech4vh7nq,6upaz0bgmh,cx6wb3zsuf,g3noldwah3,8vpob2ld8p,5reomvrp80,c7s2lq5954",
          "ms5a3os4tr,etunynf1qf,9t2ek8392f,69niqx8yh8,eqxcp9aljd,2viq909wb6,bet25bk9x0,kb4ut8j3fe,j5tix8msuh,h80zog1a32,6g2dnfr6ji,f18myjo6sf,jrcvnwm2za,lm180od7bt,eaodkm18z4",
          "toqqpzy8sp,t2c0twsp2p,pg9aw7mh9n,op2viguj6r,pfahols9pf,g14dlw83ob,kesfz2od3m,g7w53ada5q,8faywlic5j,hb7c4qzgpw,fwsbyj9w8v,2pl0w930aw,98dhlpfoek,cxlg2dmh2i,bokgb4z9lu",
          "fs8oa8qbnq,keiaaeg0fu,gnzs3f8o3i,ojtrxfuyfg,capr3kh9bl,3yifl880q,5vgq99zacm,lmjhr27pg3,33kfox995v,aumqp86g2l,dvgroggi3r,osrcul6v2,6rwue2umkw,cw9l1ws1rg,1h9vlnywj6",
          "jk09yjv35s,6t6xuz9fkc,depzn1a0l1,y24qkcs7p6,ah0gnotoml,bu2hcywcrh,lnejoxgm2w,bujopbtlq2,4tf7606v62,lppesk3en5,k198nuarva,kgdegjo177,1gmcbhnqpl,esntqhegkq,4nqawz7urb",
          "4nbdlgo9bs,73hwyp408x,ryx536vusb,v0v4yqjawz,rqdzc0g1w1,2hufv8r04b,1nnuhr7dm9,51esuu7dmf,afc2ms9b0v,g7rgc8gyk1,5uxxy4xcff,eomj79fkor,2vcutm1lt6,fg8ae61ram,a5lfr7zg80",
          "yao322pm6r,f19dhmxkzm,rcpymt262y,4i6ref1vvx,at03wazwv4,ca0s2tj6zy,submp774f,5862dt39c4,1m0exb6o27,j7hapnm1p6,1vw4w2ypo7,5b6z2c6ii1,a24qbyojuy,a3wf315m1k,hgludctxjx",
          "14t58h8j5rb,5t78q90nku,13pxwq85g18,m7leylg8g2,qkzaky3rwi,lq69wn3bkg,5gc87slhpd,1seiujxuje,bcqxlk4j5s,7nz98bd4r7,gsu2m4al3f,ike19uvid3,8re5gmm8qk,5f071027sd,9wwibm5au4",
          "vlx4hm1urm,k64s4794iu,xidey8o2tr,94ncv4bdwj,15cpjtnvavn,9rnlko0fo5,4orqr5oncn,jfllqdz6xg,jxwi02r0ma,lhkfi156q6,d87k6surb1,cyhz41ar0z,ik5qo7gy3z,hdys9omw6f,lmz0liiges",
          "ut84l1278i,17gzve0r8le,ipl63h3f8r,f1wvaabtw3,le62ka79ao,hglo2za5xf,mx1sehcdb,d475c3zbx9,7dbgivcvbl,8tff0ukel3,jp8li5k158,5dqoxtx8ia,453o9gjh84,1xae0lj65n,jaapfvwwds",
          "7bf5c1tyg6,xl51qxter3,pikk42akql,nfnk8bkp4i,trayq2wcru,1mtn00i3jn,14tvrk52g7,airzskdu3x,i54v15xuga,je3bvw8ss3,5g4wqmxkbt,2b1g5squm9,4rr8qm5pl1,c73wp9je1e,jvbgosxx8k",
          "pf85kzidhf,c9ck4gfhql,ytrn10j4ny,i26bg8tlxd,93itsyd59j,i9od14i61s,8rhtalkt9i,hdjgc5417q,1y5fxen5bi,gx0xkr3uev,cl2jxykvim,inepwvt9k6,9q1h2maw4t,1qvvj6xhh0,7p15nbvwr1",
          "jnqiyc6j9j,bqhm5kemg9,bw02ba11gz,r8evj7cfep,ov5doea7nc,7yqdb8hxmx,9r7sh2j7ao,aoec0sn67n,ambgwgbsr1,2i7ufonmmh,62avy1hks5,5rqi5ggov7,6ttc2t23k2,jcdbvum730,danhah4jnx",
          "wxjih1ixzw,73ct2gcjrm,ofduscqi72,k1pp5yaewu,juisbrk65p,d632arpgni,jjb3wf2a2n,7clwhxyp31,40e4oqdu3k,h4y3btye50,1dx974ivb1,agwi7nodl7,b6u44tm3cm,3nvlu9bgyv,4cw2ynxnxi",
          "my6ybkqyp5,3pkc6nt45i,k0hx8qrwcr,ens3aoajay,cyxpavkgwv,cpb3g01bn4,lc3nx0ehcx,86x259d9fi,8kq770022s,krewnij9n3,iu0321hep3,8by8hkikje,k4j76j9egm,9s2livlpl5,45baaoxohd",
          "q3rlduci2u,rbwk5gavcj,p0a1l2w31w,pd3uituzex,kwelqrqfjw,bd2t7zjnte,96a1vlnyyx,g82q84f5hg,8ivz5xcfc2,ao6i8uz7ah,9pmmusxdc4,ezmcx0odyl,jlphwa79bb,4xrxugx4l7,1ydjp3zcmz",
          "eqfn3yrfxr,13apbwpubun,xa7xqkqth0,s3x8w1dxkm,wyeban4dow,7xkd2p6i4h,iml0c9yhmf,fmjpo5s9jx,73yxoqfqm1,3q1mtdhwdk,fn9205cj33,9mg28z7mym,d37533otoi,kditg7x188,fm6xmpckxn",
          "oitm0jrpdu,jjvdx1nujr,myjgtjarqk,14tbbgd0eue,otmy4t1236,62aeofazf0,m44l1v2naa,4r1yzn9frx,kov0thhvho,c7v8fckmov,e5tbh3lqzx,8lwh39s77b,fyj20hzgxt,8j0y7rbinj,a8stcuy2fx",
          "nntldk0j4s,p3e0y5hof3,ojl66ab4h3,n7xz8yniu3,vjpkw0fq8c,iug99xiee1,jgug8u5xmf,jfc4gqn8ik,g8x3n5dmnq,irkf3439i3,8g742g8scm,61ut7iwzlx,atrqcu686c,69sovq8wa2,ajf7vnnu3w",
          "103qguqczpo,zb04kw3fq5,nd5mmxh498,pvqyjfbcwz,yajy3rpsou,jmvd2xikz4,ln51ch334y,m99c6erhl,ezm22zhwtl,9d6hwibwcx,8e43nurbv1,493bemt3ep,3nf6pex43x,4b48jb15tl,66k1o9mwgl",
          "ho9balwpdo,pgzbfadui4,d0u7xt9bbj,8fgv5vi7pc,q47isompyp,96xif0v2am,rnra14k8d,9499g30imd,ehnmg47wk6,bz6vbi31k,ekdhzcug57,20a17vbd2g,6hw0yqo1k3,fq1yt4muj,cjfzllmd0z",
          "fofrvr3fh9,vryc1c9cwx,n3bgjlbdt9,pdqi1vx2f5,svud70layj,lihyqu80j7,exv7teegw2,fc8rvsclcu,ldfc0j4nq5,7cwfm4njcq,hy9nl4872m,b6m3j2x4g3,h1of0wd82t,a5outw7ye4,kwpxh0g17h",
          "d96n9evb59,k7m9xuiuy3,gx0x4jbsyc,oj6lmxy90q,y7k7y4l2oh,46kjemqtxp,2rmgxochzz,662aixugk4,9qzt60m1t0,do7puyyvy,1w7b69q5qi,adxdndzrjx,5r1mwlrj64,e98okzefzp,l0o2dkp81c",
          "v7mu0s99qv,yhqsvwzix2,5x8yjg23yv,e0cex24atn,kvu2dxjdax,fsc82zd6jz,kcdxd5vek3,hmdbfdvigm,l4l7pksruu,jjtu8gzocu,3gzxsy8r7o,8fr7483t76,7tf85byb66,x5t00s54m,c15zpq3u7b",
          "har9bt55f1,8z6jvmz57l,qnqaviphq3,13gc1sfzyga,83jvqvwkau,arsxe6zn4r,ioi5q7lu3g,eszfuxcmr4,ipvazwtka6,2w8l5vcmv5,5scksevemw,azw76qcmmf,3dq37xsi48,97z6ejwjrp,g6nqtysir8",
          "y8rc5e30ei,2mzwb06wec,t31080lj1w,w0v9nnpxxn,11ans137o2l,k3yiz7mfuj,ernfpnjrv,gi7bokk180,d4uoogsv0a,hdw38e7i7q,eb6oeby1h6,fm48jnmf51,egtrg24vdb,cqwvunfmz8,k4607addbf",
          "htm6bblpft,ddhqxcsvlz,jl68jep7rb,mt1rrs47rd,tqdvr1zahn,idhd4ywqpo,gdmsr5xsdo,e5ma9u2kxs,5at6tqxn0m,bxvby5tgyj,hf53cry47d,fdoqgji3cq,b34ow2oku,5a2e9gow68,jghbivvd5r",
        ],
        he = [
          [
            "yuw1d7ohv6,ola5qtbuuu,otp7yucl9y,eel1loivjl,niwkyful3f,m82pv8bwe,20jxbhurhe,67rvlup4sc,3bz0fuxjck,by7j4n28ox,2ysqonijjc,cehg3i7i49,e03f4y6pb4,7u8rkjn3se,j8m0w4201y",
            "zrpka7v3dj,7sbrcgoldv,kcrfmh0vw6,jngdnwzuuo,ffaecgsnv6,4k88ogi46g,49hadqy2xf,fuxafdco3o,7e669e1ryw,innyjc2u1e,7dascowxnj,a68qwx78n3,dqubw8eh0v,fv8bqjp8g5,jf2tu0y91s",
            "frq2ailels,gxz46s5gbo,b5aa5uikgg,ykznlfkz0v,l5boa0000e,347l7ponl1,lfz2mxs0jw,edbuo29w7j,ee2gvkgb9s,7eezzyyw8t,i81aass13d,bteze6jfdh,ailvyozgy4,6mak0o2ime,fm7k0we3yz",
            "976bdqo49r,i6o7kyisy6,bjkv11el23,9wyqgwxvr1,i0w0oduamw,gom08balz3,h3bs88zvlr,6xxchgwc9x,6dpia17pmr,6uscau35ga,b1i6z45vk9,1wdab57cci,1vgby0s3j9,jmvf5zev7s,m3sark80nn",
            "7kxaay9xcw,nhboz4phdu,uheea0ahwi,vrheeurh9o,tbkhe6zztr,46qlyo30sa,5zok62dgqa,4cvifd3adv,88yofi7wik,3oro8ffagl,ap1mri4l8l,2pgzzemq3b,jargu8y0ps,95gyia98jx,bpyqr4m56j",
            "do7rqc9jxt,34a8sjcu9t,q1yoxvgthy,c40ypqqa98,e6p5gi72yr,2m6pd0of8,1fts58kysz,302urp1gne,bsyoypjlao,9tngdr3z87,bmqpyk419t,14m2btshit,2l5mzeky2o,2m6qi9m8hw,2wa1bbu2ty",
            "spx3qe9gvz,kc46eic4te,ptfkdlcy50,pmm0dv1b0z,c56yziv3yg,jvt0ojrgz5,6nvh5lhwel,138rxhmg79,awzdbtmwnd,53jicbsoc1,9i3yxjowwy,2fk3hg4j74,56ksm07bel,wlu2lpmwc,l8o6pnqdbt",
            "16jgl91bzp8,15j6ks3tgdx,9fhif3p6h8,76qaf20ai7,nqupotu3ta,kf13c5xmft,azuwoqpn8,2lra2g7d22,2fx5kaqxiv,a56zc86msg,5fld5lo0ey,jl8dh0lgxk,7vzo5h3dtx,k7j7dsp6dj,6ohfdu4z44",
          ],
          [
            "dh94ohfifx,tycn8u1pll,qha367lj2x,l3h9zz7ob7,j0v63797fy,9e1biswn6m,ar77a6qoq3,dz9niuls0i,7xl7ctwsdp,8gkkcm3goh,btmwauwh53,7514qfds8,efiv5xmct6,g770la6s6s,2wm161yxr8",
            "h39e6n1w4y,cagoklpsic,bv1rxwuk2z,9lzirqtx5p,mtkkpb2zr4,afruobzra6,fmhdqjnd02,2395vmts1q,jg6pjdkc9v,6kc0syvmnj,ar2temfuh0,fhjo0h9luq,sp86x9vpr,30gyrb7wfa,eyydfd7dda",
            "10qzurpzvlp,evnq937me7,yfa28ayg5g,p68gaoq5vc,pt1lomuhbu,l6kzhf7r5g,7i4eq3ko92,gmden4taaj,83qu5uvq2n,8xpuyf3mpv,k5qkk8llg4,1npu3bjkwq,fafobvmq9m,3cuut5imgt,3jwe4rm8jp",
            "jis49op0v9,ju1jn7jepo,nfw2mjwkmu,123nm83ftra,n7iq2u5j2u,9ngpfvgqma,guxzvxdz3c,5srd4n7cc8,20f1kuh4ta,8ae4t5rdqw,1y12ekxn19,4h7w66ddp3,jc3ckokyvi,kt4lt5a578,9kboobjzo1",
            "nsksfoqlxs,m7aza9cj1j,xzdvj32uz4,he1sm0dy6b,ip82beuzgn,77kcybzftl,ghj2lrrilz,lhm6mqkrx5,dauohdqtje,5hyggq6g7j,kpk50tyufe,jb1rae3nxw,71hsavl7y7,ebpsldplxp,egzqbb2ut",
            "c7ahiyqjf5,h6ff20410i,7gxr2ptf0y,13v3g2tjhxc,m6rizjv8ph,lz74dsk7f8,9pzfj6a1wn,ktwyoy3iql,hwzrtbwrxb,b0rdx2s96q,35hgkho0tw,992cnj1jf1,6bj12nrz8f,j04q998c7k,38ogomgl1q",
            "vtwnssh1n6,c8fbfb7r38,cblmi1qfrg,ap69q97pyy,jb9oy3z71o,2q4i5vqs0d,f4rgiv2o8u,cunqgen4sp,lsgpzcven,k75hlmu13m,87fllxn1tx,h8f33ur9pn,b26yhl2khz,1tqv5htj3r,2qkp5u3hmq",
            "7tmvqshpad,i7qjolxq66,mp3ulfhl4p,cj0m1oqvr4,baoo9bayzv,etf8rdk7yc,bugmszg495,5j9fa9j8hm,2p8qujissk,cn9figu4wh,4r85ivc4j4,ku2xy8s9w6,aod0vdyax,2vnyedwyof,bdwhaxjkcx",
          ],
          [
            "vb9ytzdhnf,l5akheyksj,ebznnnm4c4,jk8mqzojyy,nzuhhx50h5,1ctlndaym6,6yhs52ebkt,dnnwi0noff,jcrgav8zf4,dmv1tosst7,4qjuybh5l5,k7u9vc6ee8,kc4gpo98e0,631o9u4zyk,aw9a8d1qal",
            "t10hg4c4d4,uyuer1zywu,bb5of9crmw,mfo80opxpt,lp8j934ex4,6h0wyj2ylz,9txsjvs0xm,9rlhiav77p,7zacvfl9l5,3dms9021oy,7snasyzbhc,97cibxlx4r,84be3f1ec2,hboe9cuolv,3k5gr7bq8u",
            "jwxio5507u,16speki3txm,11fzdtrcjkl,ok98ohurar,t0whu1mhgp,codjgcxanb,lt9g988l3o,fagtgcjdaq,ge55wqkls4,b2s45fi6sb,6o4p6ssdwm,9qrzxc3ghh,hw83ls0dw2,ad81uldrbk,b9gajp7kqu",
            "psdqdinq91,pb2jtljyub,t0ry9lxexm,seylhe8j6n,mewr6urg09,7m4szujz1m,hvhyo4g192,3ky37kfo6o,5ba6ldgut9,7pne2aulmd,1s3fxpb1py,1nvt14itki,7dahobfaw6,c319824nqk,ffnvx6itik",
            "qvwp0ba5i5,kb8hmjuiba,t23ygncn87,pp4r5f8tpc,ckro8ei0w0,jjj5dv9fy2,amj56h7z1h,aebtidorb9,gcemflo4zz,apuncmpkaf,5puqmbag33,i59iusqq12,bla6w1j0b2,kfota1xuvg,ct7ofzdnez",
            "exa47nndi3,fidsx13bmz,evc5p0p4be,o1xel2hrfs,nbjs7f2yk4,cr56nb0r10,gvtpqs8vma,5de5e0y1dh,k14ztl3dlk,ewegkpvwkm,29s2yltw3a,axb7huzwx,7hnaqdh079,3uhag68u18,5n9lpyw778",
            "xopgcwupej,orhbwtik0d,16396kx0h2n,u8trrclfsf,163lwo7so60,kp6qaxlshr,fgtakbrn76,carjeb4kw,jmj9r1fe5l,p1ewi6t0n,8sxyyp2no2,5ehm7mrs4p,8bng4igtgj,j4h6d8ls0b,fwpm5s2ww3",
            "yumy326k2y,c1ae74862f,i6iu0u8d2e,bbsio5eb12,fvy2f0ulxb,7t8dni20g2,cyagn3icqb,jf4850gtht,iq52s4r8dj,3bwmuovnd6,5f133dkuym,7nzqbl1kx8,kblfo5gtxj,14xw81o79p,k3p91wb7ke",
          ],
          [
            "728ujlmhj0,542xg70llv,khfxrrrq8s,5c46q8xkdt,7mh5fw4v5c,2krqb9m34e,hoeee5g5bd,eqlk9sxvxn,4x559ap8ik,3twefztckq,jnyd55qnwd,gwqfna81ep,gl1f4qxgjo,g6wewru102,iadvqgkzmz",
            "10p6zwpv60l,mxgsku1nh6,x61ksck1oy,jpuc2se4nt,tbdqmkh602,jwuiuek5hr,75g7szubab,33s3ing83o,afafdkho9x,e9cef0yqyt,gu6136t8m9,inr6l79wbx,17y7fkavhe,ba1wksh3fn,fttc92dxde",
            "rp9oi1miih,ajwblcnb0c,ngt37lkevy,j63v0fafbi,ubqvyke0ff,f8w8v1hk09,4csangzcq4,9tsc750itc,5g1hnxjipt,6ckk7f1xij,e8e9q1rakg,lwvpodjoso,907ip3u661,ahf9boas3g,gcix9x92kj",
            "xzg8mt2ry9,mepoxd00lg,mttfre6pis,mqmfn6wqhi,rqi74zk76e,8mueljsjdk,5glgfurhg6,9yqs90cyot,89qp4tdr5f,dxec0xxfbx,6x7jmcfi35,ch22wodk8a,1monltos2t,4smgulww7r,9yhgp887kw",
            "fz982kuprb,bdwofrmltu,14kqy7771hs,pe581svl1d,kmqj6nxvrv,3apgxi2awi,4timaloa3c,19s7okrfd2,gxz4sjzoah,63nyc8ayue,g7ngp1w0iv,hbagdw5tzj,71ctuy4m0d,ei0y4fhgnj,8uo0i6si9d",
            "pgdm4rk23g,p31el0h4g9,go5mderafd,8ze6s379u0,qt8h854asa,hu0k21oczq,aix1yi512a,2unlrpvzmn,jl0xsj1juw,8i3v2aqnkv,8x90ef673c,krgmukw211,499s5qqsi8,1he4jqg4rp,gtrjtz0kuj",
            "944chbyjhh,mdsdbfzofg,147dwxjlae3,5x3bptpis0,ptzter8hhs,ekjgb1s8zx,h4draqaer7,obzmkzmvr,l4vfq815uw,ca9cdvv08f,ig0oo6rlk,996vz5xqiv,32lplj5a0y,l81im0hy3,c4h4hzxlj7",
            "si8vt4qr9a,p124j63nml,jtqxhpuazi,pbi2uku6pm,q1rioppswx,19uqeh4kuk,j14hedgpqh,bl4f7gih4x,3x3d7n7kpq,bj08r5quk9,k7d6yhfd31,1771oaxr0p,k62lr5pobr,c5uorc37z5,53zpuw0jpv",
          ],
          [
            "1208u3kae39,q9l6ljzisr,dap8me5rq5,k2mp4jjwge,wa7byme12w,i3e7jt0ggv,evaq065nhi,8x8rs8kurh,hxihccw0iu,5kepqvog5p,5ow60y44lu,k19ybwoli2,kyng07k2j7,4pq54f4km1,lmh7hfcd1a",
            "g2x0lft8tc,ukhfklfsuk,f8znpwgy43,cguusz2s9l,x2o7ko1wi5,4jtyuynvsm,hknxhkwz24,fv64rbs8mg,cu7gyvnw50,6yti5msjwg,a88fl043sg,dj638puel,7ezg785ga5,b6peazqb22,5v5te3lrpe",
            "101g8dyb7p6,lm2266qmog,ln95gu8y9t,agfmt5r1y9,g75mjgz01i,1nzmtslag,g81fuu1lzg,abbr7ein8l,ixvdq46wi1,21d4uloe29,h8hr0ww1vv,dezgdbkz65,imk4qzjfli,9iggin7g72,a3auzi4zrt",
            "o9lb5bg2bc,b0a35ca4xq,ig9ar35vrk,zzswpny9mi,nglfdtaluh,69q9sv1fqy,cfevgm1lk8,3ukwl1s76v,gdmsx06kem,5j70vftk9q,54l0sifqil,e8o5qiobfw,2p1cihnrwz,fes5pm3cm0,a1cnbtd5a8",
            "vamfenucwe,xwo8hd0xf6,789i34xkvm,nzfkun7vh2,13sukyxepum,ef6btlw6n0,elxvi4wsmt,eylly9621p,bfoxhylow9,3zvurxi26h,9t3i9avt99,7u8b4j60v9,1978va177x,3dzr23mhsn,623jnqcr0u",
            "tg1vpluba1,ljtfkj8pxb,jb872ugg1m,eu0xl7yc3n,xiar83fnv0,64t09vg3ij,c03fwao5jf,cnfzhg6osg,9k0ihpx5pr,3gfer5pkyq,kcz8wmdn64,gir007f8ec,kjgplqq6kd,2beh4thnme,dy1hova7r1",
            "ry7r33f4jn,p76cjwcssi,4ihlr92fmp,s3m0sa6bp2,wasb2pb07e,6oi5yu0qx7,juufpddzy8,w8yfkwg4c,a3zc2djx1y,623ftl246y,2yrx6kpe9i,as35aquv0w,bu6bntua9z,6cejktn8mx,g7tz1aer27",
            "bx69crdgy3,dy58vclrs4,sxjajoo9j4,yfk3xcd57a,witus0wwxk,b6jdb4r533,gkorhkms82,7kn1mfx1t7,kjo3ak9fja,8v6j1awt17,jeuf32h1xo,3ygqomxhns,4f0wfut2an,dvmdbthx25,byludmjapn",
          ],
          [
            "dfiexkbqrj,ioluac0wsu,loxl40yixv,nlralha22b,dah9zg04oa,aai46jf52t,8212x8uqj3,67hxrdeohz,ggovkkeius,7y4oemnzut,4bybqkhubx,3syck2ujh6,dm4miizmko,31ujc6g5gv,lqllxpyozr",
            "y9ubifn1xw,v8jcjxuyzy,ne54ajlb49,svqoex18o0,dsgg0gkpe4,jq9xfqdvr5,1oaaxzopr1,b8ht8wu17n,emjch868st,fhuonqae0l,76qa1xat7s,ciaigcl0s2,17q3m2fr6o,476145xt4e,lm9l0mctr4",
            "cikxrs5dog,k4nzhbda3l,moo8mja2v5,10eg5moawj4,vgasd49u6j,hcfrqsa9sn,5qs89uopzo,fmfuuovgfp,l8m24du6pp,biz4nej2fg,8kwunchhgn,ihyutarbr6,m2nvkzcgss,5el7npjpnt,6slnf1f1li",
            "p3jjxfhqoj,dgbvikbar7,yzfexbp2sh,5j5q9c55gl,f3llekyd37,9uc7804l5f,b5k1zz9cuw,kiz93qkma5,4md9cyarss,6olwllthvn,lk355o3z5q,6w24kkzkz3,42b9cjvo9v,ejxu1i9ufp,m3o5s23j5o",
            "1315inxddn4,o6nkuzdill,100hlyuw3u0,q761yw8zlu,unfa9i6yeo,509prpl4wn,9iqwt52j9l,m0ulz0gng4,46hkr7zz4h,kkl2qv5rtr,26fanfol8l,bdrwckiuyp,4u3h6tydm5,5c9tfb229z,85jc9i001z",
            "nop5j43xds,csrlxp5kw8,q1jdteso2e,af42745vml,9teifw4x27,5i6gxp59u9,5n6a7a2tpj,g1oyvp513m,ds70ar4doj,g7soe9pu46,il8695ya7v,28zyol7364,eghr3umska,95usa8k5gi,61h0f8s8m6",
            "c22587dea6,fj0aarcuzh,lqap8u0pgr,65uuon03rd,oxf8zg6evy,alifr1t23d,az1htkb7az,1ue32xhk7t,2grxpkk6jd,ik8r6qvfyk,8vwpkc3prv,r7edmpbdn,gbope2cbhy,dzfki5ty9e,d73r9cbkzk",
            "b4egc9emzx,ysmigysabj,9tcnxfine1,opltbhyyg1,xi50331xt5,66vbgzdu2t,j4qzka97xd,4lte2xl9su,ark24967tb,2bg3mtqxt7,2c5rqc9xo0,4mgppfwclx,ew3i9ntitz,c85l7vadcd,4cj9kfhoxq",
          ],
          [
            "139pdy5l620,75j7vms0l7,i1v2hk6yhb,g1l7ku790b,sbj8n7udz9,jb1299poa9,4w6pgp3yde,isz93l8bdj,cionuyynyy,luuh0u37bg,f4u182kqb4,ddoe4rzxnq,kzbhrczyoj,85rezzzsn5,joxpn6dout",
            "66z5yc2pc3,atif0mw30o,8qijiipey0,106n6lgjqah,m900xomxl4,hu588vprfh,esdf2oo7nd,lspowuv9pj,3jghlbrh78,cw4endbmk,25lgjhnurk,bwns91mydi,j578vwqucw,b4so3sed2t,d7tcotnpjp",
            "dhm6ond6jh,dr0dvf8u75,13k2i0tg0w8,lp4r278g1m,w02o12vsop,lypuarnc21,d9vy7iruvy,le7obpi0gm,e1nyupawvv,4dgbo21nbb,7pz9aoau7j,91h5cp3kl6,cnc0n72eex,d1iat7vtb0,ifq7dtag2c",
            "pbhylrlj9i,s1k70vmdp1,k2djkocszj,fbzkl6tjf2,3d7g6pup9a,iq5iimhotn,jqj5l8whmw,g0bbtubwfg,9l35e1fdmv,kfmm01htop,dia5023r2p,a9h5353i21,j75zcarar2,hmxbz9fvmp,dadgh4wi5",
            "6rlbepw3fw,anq6gzt8kr,sijzelpwu2,pj1ki9vk9q,pjzhn85ywz,ki9f1gshsk,9v4ntfjha,1fmp0hzsde,gn8ph8mfbc,id6gujuz2e,afn52eoflk,layy8mw4vu,e6jlqe5u20,hf3x5bv719,8kbuj0h2b1",
            "120q03i3kcx,7nish003b4,kos9pzofo3,5f88nqm209,irgi2csj6s,jxqmckfoa0,47c9ihvhut,5uyggfgi5d,4n9dvxhgpe,5wsnz02qko,5w53fq475t,egeothsm78,bqi1xopawz,es6yt2iiw0,cmb7pmugis",
            "gy3c3uegzk,cg63zj3sm6,qfpdnq9o13,de2q21a6c9,11ju0bj3e07,731r1crdfr,3vfwlqx0bd,1awwxnhket,f71l18k295,hwz2nf3p8k,3wiepcly6w,hu2krabau7,df12jjw8of,kufbz6h0h0,4wjgyf3fx3",
            "hugu2jv1j8,ia2kncxyst,18v9tew10m,wdiivbhjng,jg48418np1,6emkiaqrp7,b787uieytr,kxbu5ivc4z,gzp0chwhhz,l0r8ae4m78,558nrx2d2r,c861t4299u,h63a03skm0,lxjrbvu5jj,glwgez6rz5",
          ],
          [
            "47ogs4k06t,grqke30emn,flys1y8pyt,10bkc442tg0,to0jqliuhl,34ra0md63e,2fyh7ldkgb,elahe091x3,31mok6d3j1,ce3um93dp3,cjz2eel5zi,523mvzur0j,3g1e1f430m,6s0zuvnvl0,grg7uq10nu",
            "wmlg5nztw1,vn24o1nf9g,pcaatsgkv9,wgtwunsfa4,jjo4841085,fcjydv2lf5,jbse4jyxkb,d66fepetl4,es7fzphkru,2wda3v0poc,8231bbb0wr,ic32gswspd,666tv4cl8b,5ncdt3klrs,h87p28mfe7",
            "jkp0zxfstz,wtrtpoac3c,i23tin1790,10hw0sl0xdz,6tmflwlqa9,l4vis5v0b7,5ragb8hqy3,4kte9vabx2,li5jn0ce73,2chu75s2dy,b476o0vquh,ln31ksit76,2lzgwevz21,9khwddiqne,jj62hvufiu",
            "cpr1my4hz4,pxetcmeq7u,guo478yuuz,hvg2tpwbnq,uyhe864rir,4dkuz6rvv2,easj6pp67g,kt96thcem2,6cp7eg0cz7,7z8es0btc8,m2z97xh7j8,ditagbgvng,9ws4yefv1l,l55xybu2ts,bca90hu4ys",
            "13d03cbgv8h,14zug1hjct0,k8wooiderd,po43nx7kd5,utuwityxp7,1m19j0qluy,14wxgn7fke,bdrulk36zv,inp8fsa0no,jei1wmkxp5,6pqpychwj8,2mpu28in74,dja93viahy,6ad58q8adx,6d1udj332q",
            "maxsmezrko,n7uraqyjb2,j58ikca9ea,14b4ezyifgx,ofz1yrogxg,2kekizif2b,8eqlvz1yyd,8zuw7rrw40,1o193kybf,2rcba6e2dk,71kuoswo9r,bjwukkkzln,hscxz0pu2y,inkte25783,3xeer7agj5",
            "r3fvijdep9,11w30ynodgq,dzhdq4fuyh,vvfahvn2vl,3v3ypn5tuo,kn4arh23wd,ixh6vgoy1n,7ryzd26rvs,47googppcb,35rafrlxc2,izc5n7928q,emo3vcru33,i84fvfokhf,5fk5nosh5o,kxmcp0awjj",
            "ksocyhxpxd,theyvdcvo3,m8htinrto7,j7m43v7qcj,n36zonnq60,3s2zm4wz8q,8gtq737sla,8fak6f8k98,a0jh4sch6r,7tjdsmcn8x,rhw06iwu0,9u8221tfcp,4sxb429nmq,a7y8x9hycz,3c6sxt1j2y",
          ],
          [
            "stgmvetdsl,oshxqfdspw,854o557g3p,du17nbu8od,hjlbhs07v0,9uyymiymm6,3ffb4hkoiq,gerk2j8mlm,8qx4t3l77c,5puvsyutcd,j3illjf0dd,dvrjqg6doz,5fvdbusr6l,3s2c8y6q51,1vllgb5gp7",
            "lfpo1adpc5,e668s3xyhk,y2f6mw7vwp,lyor0d4obk,dr5kqz9sih,6nyo2tsytz,iii2nnjjbc,k5i2nhjcwi,8qxmdpve2j,czardejcw3,eg01ji96hq,62q2nr5sv9,6f804lw6v0,7gfwjhuinc,21kydkctxi",
            "111tkfxo68m,n7k42xn570,r13rewd5nx,ar27vuaug7,hr0cwub4dv,i96jrbrr9k,ihxicpf8qz,f1muklplso,a1fdxl5vq5,b3zxg778ff,jc5pj24f5u,2w0s0vux80,6vdtpnr4fl,9pgsayjcfw,7u8toxff10",
            "q9xgi971q8,q0bfucmka5,cxxybzay03,h83r8cjad6,xm22m7anfn,e2b6qqm1ej,a42y8vtlvi,3021vsvbz5,4cgt18qq9w,hwwpouvy99,20n9pmuwqv,fb5hhcd2xz,24pt18ibiz,2lmseojppa,k5mvjsn83z",
            "j1oy2es85z,dpvmbx76yu,r98xq45w68,xkkac28v6r,nd3nepnpi3,6io6y57pa5,2tn0qxnylm,b56hc6zogo,824r1u8wa7,4nn7dmqq4v,6k01ayujpm,in2qpr6wz2,7yitydkgaa,2q46wirbhp,fe6s2kwtf0",
            "9b1p8dezrp,rcqv4m7zjz,d1ds4ojrul,gew3jtrz7c,nomhcnepxx,k02zmeeb18,20b6r1o4qq,1ofkq2h6mz,9nx14id1su,8b0sj29z6n,ejeexq19q2,8988bkcq2l,iakxivd844,juywdvxfjs,34eb36pubz",
            "ee2u2m3lyv,fre3i57nmf,l8n23c4ict,gg6y5n3vd4,nfhh933udv,cqiton6t6q,l3unjtkl82,af5olas9tw,23w2v1tqyy,9bn6ku6bfd,3ikir84et0,cpkscgl2i7,54rkwtggl3,epxa8yvrfx,7vwrujxh0t",
            "rqv8yfg60e,82r4gp6ngr,9siagnzmuc,pe5woocwyl,n30mf1hipr,62srsevzm1,g9mftsst67,iabrw85i3j,aot8ggu1kq,81r7fbpq7u,7lkzrvtpz5,d158anuke5,6p7saejp60,8duyqfc575,d06q2rbu61",
          ],
          [
            "c06wcmx4u0,sjljw2ft1r,myeuszrf6h,la9me6lxdn,q5phjhls9y,d2q47n1zzu,d5e8me8cyg,dstk95usqg,5hucqouw54,f9wt743bmu,4418r4owys,e2vjpryn5y,3wfc6equ4r,j3u7yw9qcn,23uu9i7kmg",
            "chhh66n5f6,le1jhs4tdk,f3q7bsxvlt,hcbr3jkoru,11u0wiolv7x,g0qyz7sw1z,lry4fgp0eh,itvmgsvrso,bqg3s34igt,ljc48aysmc,bbc77xq4hp,3q8h13kdul,85o4jpyt8q,lufnkcq93i,p21oczeey",
            "yywyljyzlq,10c55xaral2,11ax659hq6z,k81n529ijh,w3ngs3gqz2,k3djkz9u52,3xmpbqkio3,687uexyiir,8lbtuhc9tf,c5wsi3iz89,lrueivv6os,l2hop2v8dr,98qrv6z6dy,4gwsqo4ve,khyypexstp",
            "d1o62kz2sf,phna3kbmg7,bnoxlidz1c,wx5ls7psje,mngvqkahdi,i66litdgk7,c18e4gu2ly,1hgvfk4bwm,iz2oxltree,bpseo6du8r,amo6tb6ssl,lt9sejajnt,iqrbr8d8b1,hdpw9iw2c,30d27vja6g",
            "n3qxq70yii,ztj9wsfgw6,wmouk4gkoh,mj5j7duqy1,udph3plap9,e3luzdl6zu,4c3gsl8ivd,dqpreqnxbx,jgqrm9gsgy,978hhrvgyg,crm5fz8hxa,kd53pnr4ie,iatqpzv3t9,eoywsuls70,m0js13eoyq",
            "eoa09tgsgf,iavyxs3cbs,10baumefm3n,p2m3me745a,y2g2eumw1w,cmlfc0kezw,7az5ktbosv,jys1mf9kx5,53yshxz543,hzh91y0lpl,f0uzavkpyv,74iwyybwjz,fqc6c36vi3,2erwj6sd44,espkcwb17b",
            "nagzso2dce,ybiqwzfiv1,st5ce1wiqn,kth0rllnec,ntb542jiyv,k3plob0io2,lib1y95zb1,g2zpw6h8nw,ks6a5nl7r7,k608jkc2lg,4ybi04nkx0,7hi1skoayx,jykd4o0tk5,6kdqju5rln,f5lfjj7my0",
            "iv83n889pn,v6rbj2hbj3,8p2obkib7i,3ktogj6py8,jgfzkfztop,6ocf28xone,5m986kg93w,ft15v9yw2w,l5bgi0clrp,gsqyvziyd4,e698ey8w5i,llwwha4347,871yco426s,5j1jmt8foa,5r6qcdo0mt",
          ],
          [
            "o0tzptdjou,6ph1rgq4fm,j1d6omw3wo,ifw816d12o,qz8h8wy41j,dx15cv3g8j,41mr63ymgu,dradx46fag,40pcykwij6,fp83kv884j,kp5nxmgh9d,7310jtbfl8,ekhpkg9t8p,at1i413u98,ctndfl4yhh",
            "vg4pkib5wb,wp8ih558qo,jrjk5tu4iy,mvcragzqkz,dz5avpyvw9,baf8xudndl,gd4b2ov1lo,405mzusoyl,5k2xvawmdl,ax5a1dqvir,lsy301fied,bh729deqbt,im3y4lc9lk,19dpvcw3p,4cptd63jct",
            "tlenixg77v,gevwkz5nu2,f2m4gjt35n,x775hp8niq,lb4nm15fe3,62262tfim4,f05qr30w14,8ewznm423z,kcq3f7eckb,hdr7hyvvi2,arzc929h1f,hou728leah,8kgu0didic,jy00x7p215,gq8ytuevkg",
            "j7p2eo3m8b,ivbsabhvnf,o4e22f9x56,ispltby3mi,j35m17z6fb,9zjpn6rk31,8k36ai7s3i,hagbtx1qqf,d578ql7hdk,f7my3xec8q,7iu2fu0tpt,fsfbf9gdlb,1g1dedf6ud,i5eei1kod5,9e9i4nspyz",
            "sebn99z1v,7j07c6e7z7,wk7mvki2mh,qsj68ufl7h,s980r2kwii,qeni1cog4,7acak65905,h6n2wql2od,75yb570amy,cmspullw9s,56evhxrwsm,gz105656rq,ejcteeevuo,5ne393gelc,1bg8bchguq",
            "rijaxppb8y,jk9kybcvp4,bg31bfldf1,qwvg4htrl4,rj8ol1uh39,mq9sxy4tw,c7imxivzoy,dec3ibimj4,26wpzut4lh,m4npksg0n,hnmtn279ws,wah8nwjah,p5c4nbqy1,l95lgz5b2k,f4u3j7k6gv",
            "io0vkhzoj2,zwn8snaduw,h0pw6oj13b,xelkninwnp,rpzpn820hg,1e3v3ift8v,wet2fuheg,apdsq17cub,i0jeh68yp5,bqzpodtetb,fv4t8kf1s5,9d02thndpt,4x38fbzcrm,jpj0ixp4mj,vjfm2ziec",
            "xvouler2sq,liabzk5a7o,wf4w2phey7,jvfmmem8ih,guvhiqbrq2,8lsmu9drbw,aqlkcacmso,gtmtbgitxt,6mbqucbldi,d020tugm1b,eur0p83lw6,b56fpyu4bi,zzvtp9a63,47thab779l,5j4ziqkz5c",
          ],
          [
            "tmbnzko7eb,oiio5wfpsp,l18pv6qs4f,grapbqr1gm,t3n3xeexj4,hjdmdsrkpi,gpr9rofwmy,dlnvi122j8,1q3n2mzf25,elp5wp1oqu,lf5n2ifs7c,6z8pqqlx7h,9er7xa6rr2,jdfvfqpn03,jwgi50hq8m",
            "x5h8xzvor8,odoalc1xq5,90olkkl0dx,5uiae0uhec,rpbhltbx8m,e7k3z04t3j,3uwp4tm5zm,lh1ncc62zs,4kny26herl,fp26lo01fe,8dlr5u9rz9,358b3akrm2,3874tfemdl,7al4bkax9l,62kooc5s0",
            "kzzyqf6hxc,rga3efxk3h,mnj66sg0n6,s5vra4ux86,ylfeq8kfun,f0moagm302,9lbrtfll7q,2w0ir6bl7y,1gk24g6ywn,1cwiv7slgr,b1dyzea782,keder94pvj,cgltvi17e4,g88j1zk0dp,4vwdvpn7fo",
            "ndk05f05s6,w8sigv6zsk,jpe591j9mz,jv4g07i4nf,vy9b1ax3bm,6g5gn74kei,bib4cwyl96,5o1wp38ydq,8x2bsyvljg,4w3b31gm3y,j8o9iu1b8a,kuf6rzm42t,3bui7clkik,brackpbgze,128o6nk7pg",
            "gvu9qmof77,1682pqvkjjp,ih4d6grs1p,k91mtvvmyc,g7engrqjgi,11q5y14mfh,m5ca4c643,ewgzsmf12b,7y5dju00c2,6vdnx0sa,jpy8xs5hsb,c8tt7u3evr,emr9jg12j1,lifhd9ip25,3q5ynss5aj",
            "9303n4j9vr,aq72leaz28,3you6zgfj2,b52be3ndnj,cpd5stdc9h,ie5et2erxd,71lhqd6a3h,e61bcf5d4,leadnwxir7,6frdz9ojq0,1lqnogx1xp,1spyr94a79,qm9a4wezi,4w6o2t2epy,1bgbtluypn",
            "150v42tlhee,fucc7zpltl,jkk0jiacv5,eyo80i4n3t,hwum2ml7lk,j6z379aby7,aixhcurelc,j3dk496s5o,f8strc90dk,j1golhwckf,h1f1mqaj77,dpvm9yz0d2,fq51pb7zri,43gymyvd4m,e2rv5cafh1",
            "3jpg9o4yma,rkdytaw8iu,oaj9zj7wco,s1oua5a4wu,pg4r98vh8c,gvg3xgnrl,ezm5mq317u,4b5jhas3r1,80juo1z1jf,3b2ses3d49,cptzqsb9ym,af1by5ekv5,3ysl5ecrwt,df9a9cjxul,kqficj0fzd",
          ],
          [
            "n90o99ys9d,1327d326njm,ay93ytktbv,k5h1wbqdgs,nhs7rja3rp,l8l7zzyme6,lxljtc3z8t,ieitrcs4g6,7fkx6l0fpn,h9trt2kxma,i6dtu5453c,z1zmxlb7q,dwnxis9ywc,1oqlo06bc2,au4quhvu28",
            "n016t8dgkp,r3bulr4b9p,46wyohjiax,hcvwkxn6o9,s7fik3hzrs,8jsfsup4t0,gro088uw35,j865em8nwp,1j7021eb4,ke4ynetxvo,55f6bgubh2,3yh46j0093,duzg4n8pii,jwvjyh3gc5,1k8nmuz7nd",
            "618rcfagft,ql2ol225ja,rstlbqzmwr,efxp4hxe4v,h0ozw2f33m,gz1xaaj1r0,lqyn22ma3d,gx8u2um4q4,jftienhec6,brb9ne6w2l,ccjoe0d5ls,9ml9nfznye,jsr4nwhi41,hk8rtfbf1v,f0wppzo94w",
            "oglj2fjs0v,j6qbllr3a9,i2krl8kcry,a5oav0lhpn,mt1smp5plx,7jzyirm7sb,7favyf1xhh,ezxcrkbj4z,4agiykq8em,51qfoq73gh,cd764solcv,gqrt41maal,bhgdbxzsff,bkjnlb09vy,bq5fw7q46s",
            "plyh3h5h75,d5xj3870o9,ej60rk522s,z6o5ou6up6,mn2mvn8dhb,8n1z3jmpiz,le7g0bqsa3,2oiuwrudkx,gap6cip0kw,8q5462tmra,3p7mwm75ki,240r1pqqok,5n2tjmnp5l,5mteh2xqd2,6v9gz9x3o3",
            "bibbraiszl,841a0smaat,16khubgrzll,7rcep3nl83,s2q91gqsw2,j6js68ehs8,k8ef8yl8qc,lpl32swa58,22miog59xm,7qto3s7z7u,iux9xfyeog,1jgugfsy7x,6g7215mzy9,5u66cmyu65,lbqvjp5wjz",
            "gzxo0wpeh8,b0zdouxckl,izue0qdhte,mi7wmo4osv,i33rny6jal,867jahhp2c,24xwsy96s2,glu5okut14,d9gbqsl1xi,gz1lluasat,3s81o3qd8a,6rj9bahbp2,lrsx50fvsb,2ia0gmezd3,c9k9yilc6o",
            "ca84lefg31,15neiv17l7r,nzdfxxzo56,7xwl919xd6,p0g3y1bl58,e9nkyksum1,dkk39q3bg,l1c7umi8vc,l4v99rw6sl,751qfm9tbp,bu1qhy5hef,7vq1w42d8l,grpqth2i0n,9ti7gi1vqo,iapg2oobta",
          ],
          [
            "pojy2atzhp,tviw635z4v,gwzbfawtx1,zvp4mk6ely,6j2oo98l8e,7h9kmhpjng,9yywyjm2oc,3heke8g0f6,2f87may8tc,jzpj6517i2,k3cvz38nl0,8qza2lse5o,cs9cs4o2r3,hrqom3sa9b,3hi9ugi8ro",
            "inp6qpd4uo,10kv1cf69wd,quczqbdkj6,olusahccsy,8n7skumdqf,21ph0gvixj,4lgx01bwv,830p6dlxas,9y65y0cn3a,gr33wyn62y,25l5cwks3z,59316nw8ot,c55cgmbx31,4a7p5zs9fb,ev3if4gmds",
            "14rqezx47jz,wj5ucc7lsd,y4d5h2sdt2,nu5zp1ejz7,qqg5r4l4tb,2y19wt9e8o,fp5o72mjnz,8jp8keqt5t,2jdemtlle1,hrtnis29hl,hsh03pfawc,knzvy1r05j,dcvvodabfi,ecx0ht13xc,3f9otjzl20",
            "dt33f4hwu8,11j773iw6u3,9xihqs5ez6,bauyqcendo,dzhuezd9wb,6jwhk4u6rd,2p1kf4de13,7vb0ear406,8cpgyhhit2,hu3s2z28or,egibefh9g1,7llqn6ccgd,j0r53l9bso,7vf5c2k6tu,561f1ntam5",
            "lw29smtf9j,sdnrs24v2q,l4579jumcn,u7rmcgnyz3,w9aqxljbjj,cgz1spuc8t,1jfj8z29ys,ck6h2kqsa3,4epk6mlpd0,2hqw96fjef,jwtd6t77dz,1c9buwyq5t,hqats6iv9i,br86iu3fd7,8kzectc6u2",
            "icagasppxh,8dv5wxqu24,eyjvxhrrdl,11d2mdufchl,104trfh9zkf,c3ckmt4sgp,3afuzj2moe,5s9wtbox69,49pavgphp9,5xvtq1axn9,177hbgfrop,i5etdegvy0,grpds4ojbj,4wgitz0r4e,zus1hmexd",
            "qonzwzyl7o,p1bcqdwyrz,eayolg8k6u,rlhd10u7k7,f4x7txi23d,5r4hypbo5n,3qxlcx78au,14pghmfpz0,6g7gn24s15,ksl99je750,9te7ny1lcv,l5r8c8pcke,9ytjvea7em,aknnupso4a,gmcv3jfxnf",
            "v9jmmsm4od,kj3wu8mt2y,rddwfypl0o,ftcp0k8vbv,tf1xlr613g,gps7n54z31,d5c8ffpfsh,86o0pu9aps,9cjg056oeb,2ucun1l8d2,dz1bv6t5n4,d1vkjsckl1,5xj3xbaoom,kr6ouhupgk,cxtwmggqmj",
          ],
          [
            "lo8qr1lcp5,lgtwwd6x95,n4tcixofej,g2zs92bgjz,uj4eish9le,bjwwr0n89f,8265zff6tr,guf2sq9kx,93khoofzs5,78ooujpsp6,868wwpar7s,ikrgifbapq,frhcv34199,eiv178pc4v,2tmavfp1s9",
            "11p8hhagfo0,wbmb3dz0a2,nlk545nes9,15im4oku4j2,rro9d014dt,2qohzdy353,4soekoajpa,94v42n1saf,1s5yb5oo76,fx4zhuudnr,bq6pf8ffjt,99hsk4ukua,ftl69w53dh,8hfwiiyeo7,6hhb21hac1",
            "ign62yodhj,e1v7i8of8l,tb3duscy5q,v1vnjwuchv,sfdoveg3kn,64sefkb9md,iqvsfwy4m7,ixi10pkiwt,eyzydn7lte,apcf70hxkg,90yw8rrmy,gocf9a376j,f0z56nx67n,18n5h8iw0h,1fhvbdg9gf",
            "oabcokc3i3,926rybf33e,159u10tztkd,y3rkmu67zo,n0czt90ywn,jr5kmd0aiy,78g9c9b5j3,2i9hchp1er,duglgv5loe,2ctqmhtmra,fy4m6osnh1,iwdn8721n3,dd5kxx448q,f0silor7o9,cwfpvllaj5",
            "wf46sue0y3,gs6dgkjudz,s4qski1g5l,joj1jhqptu,cx464qz1u6,jns20xrdsl,i5rjdbp0no,9pbc3kcfi4,bhaaek0tq8,32f54716b5,faxh2k2ja,louuiezt99,b7b8ch3n19,h2iteu4i72,dqhehtj64c",
            "6litqelg8f,rn5qy4nhuk,qthppaa5s5,l32z2ifh14,8cy8jlypat,lmuiful4sk,7tjfamgpur,a566s3b6q1,2mv8ohoq6m,k3aeoawvk0,huhecvek3l,fufmbn54cv,gt1loy9z0t,2jnc6pqoq7,9t2jmji5zi",
            "f60m6ns2s5,hdio6ritkn,htmmdek8x8,v9nqg4ebio,sppb51gbc2,d14lg9ol3i,cfl44jj6vz,8l0ovwnjt8,afrlirnf01,guxqrngip2,gp8mynee7i,dpbit708vb,5zss15u09k,a6nswdjiuf,hj8aus6umc",
            "dgrwj0ek92,175x8m76h88,8rlqvkkc8f,isngbv53ff,ou77azy9wb,5vt4e6aulv,eb81nissa,j4h09vca4x,bo7w4lmdto,32twwnigup,iwdhfczow6,c5lhdyjyc0,ai664bkkgr,9xgp3nc1rx,da434dqgj4",
          ],
          [
            "kpeqewx5l5,11mt8qalgcx,fhsu30cl97,mct81ss31j,lzajmo14fl,i95wb98jla,2vgr2au0j,3g52blhkib,7msd5dlmbf,h957m4t9l4,dyc4z0mf2b,73p6wx1u2i,4z9j346r0j,3oasjho95j,2kqpbpg6sg",
            "lj4reg0r28,m5syyyd6ng,9zq6doi77k,qwcanxgokl,mztgbzje9l,chicm7aoo8,5ik4m3gau1,7wi9oh3518,lrg38mub69,b4jrz8cxqs,622bch9jp4,919kzfx9ko,8nji5il8el,9n079q1sw2,98qisyh53r",
            "551iulhrmg,wgn06b0z1c,imqtjizqq5,isah2p85nh,ka7i2etkx6,hpxl6svwtw,8zbo0g784j,97dfemgb7,496dzjt9x9,2pbr93n2ek,yzhlv0xf6,l47gbgwm8h,isbcegbhj6,7zndyhhmg4,cfig4cidmd",
            "hn0leti3e8,gvectolcos,nc5bshzaxe,ij7zm87ktd,1k389fqtzc,bzoe3xvyvc,lelllfskko,jkb21ord1h,do1n71xd0j,4hvxey2qx,g96pqrldjk,b6rserqo95,h1zex766fo,78aiohqze6,cc48gq40v1",
            "pueq5z2ci1,rcg26m5qpm,ku5pkulugm,r3xoyun0iv,irz50x7pl8,7wowpzf314,8k0i6os3fe,3449w6e6ov,9afvw1qceu,5mhctcfzuk,28q7jst79o,hhvsfcfsrt,66tk0xwvfu,4i2fsm6hfq,k3smu92euc",
            "80w62kzflg,v5uwbt7qib,wj4cascn9g,d8yb0dqosu,5bzmczvmwz,fk518p2a25,ihp055mkdo,8ftzywxiep,6xdlvn3sku,lhq3xcy70z,ievz192x0b,pimxk2syk,hk3mgcpfmk,62bnkrhb7c,a72uibrmc6",
            "tdb5oumb7q,8fzydqwblj,ao6gw2m2mu,9vgvvy8ak9,gxeynugw2y,3puqnuxwj6,fkrjrigwa9,7x0cro4ptp,k14mkemrtr,6c81vewdx5,1qq52n9u7d,fhug1gqovu,57dyvvmr3h,hvr98o7uoj,ex2lsl84ge",
            "ilk9xu1c5y,ztvwi2fah4,154dje33apo,h1s29xdw44,lylpomd3gu,4d63jy51s3,2avf7c4501,lnnre5chcw,9yo9h0fwtd,9lhscvdkux,i6h5zjfsuf,j77mo1wrcb,6lxqmhrhx1,j62fqyg1xt,izvmrvdlmh",
          ],
          [
            "8d6a2xofpr,dvvgdgk8av,mwcf1w4ftb,g5x5s3kosj,toe6912bej,6tasizs0uf,74e1zufq3r,g4my652vhd,7d7z7cc49u,3alo5n5kl9,845cdrawu,m0idb5mdjn,gcxuv8r9v0,944w2kxwqk,bulgu3u2fx",
            "u28e8yaqpn,138li6h4e42,ge0ouqqytv,qrzzj7186q,12e6oydeds6,8w4gtt4uxq,47eq9zrl13,5ix9r8lq41,ijxtd3jv36,iuiaed0lzf,d8h4ujg3wq,jb3d482lw2,eydsyzmwmz,hjhmvqin9i,feo3uvan02",
            "st0esdxgc6,jhu9brkaju,xqsu3a5s44,boyqwa4kmh,ij2rusvm44,ivl2weg8rs,atbvm0uuch,23qvaomgu,jp4lpy2jmn,f5ehldtxdt,vufo39u0,6omuk6pwec,27r6se0w60,25urad61em,jf6i19macs",
            "2o7huosz6b,zhta37y8pv,pkdwqfyuxm,ju8c5getlh,jr597w0v2t,1wz27k238t,52b5v8f4hh,863gshhqjc,gi8mqg6z96,7z5owp9oao,ji163uz12t,j6qja536o7,1hwh4wu624,1a2ihj957y,2j3cwqxlgv",
            "ibdrqw8grf,j2gitjet31,qpn53qc90s,htylpo8cy5,vllhw6a5eb,7ue6rhy2zx,f706aw8dpz,es0uxd86yt,gf0idwgz01,5wfoeete7r,bc5yud13bo,l15hmu091j,79vq8348t7,356jh7etdg,bbuwzk36vn",
            "h1m28rcel7,teyk10wlef,dfrhprru2j,qa3co9m2hj,vatu7nj5yk,a0kpcwt6o0,pd56vfyf,m0008z8vw5,6485bogxhs,kzxddtrexe,ffqyhdphos,a0s66az2k8,5kdp22ugci,861q71423w,30wpv2ze1y",
            "2gahfqvnhh,es8q4mbvqq,vi7a9ot2r4,9atd3vke3y,rm3ihg62kw,kktxksaqor,i98kbca6c5,l6tab9jjmv,l2hlydwad1,1k14k67k5x,d6jwr9vlre,irvb32tr10,eyn4kdqpsm,14wf0evd2z,dpsqg54ryo",
            "zlwx1jmk2t,112ak47ods4,iyyw9pwfz1,k3n84ipyih,v8g8zpi632,ik4dnk095g,5x7g4o2zkn,63udk0jxip,amns1hgihn,bu3meqe1v3,8a2ynmfv5o,761ea7ji96,cu0oqme376,55co81nzmr,2w9rvwr5vt",
          ],
          [
            "pnle0mclzv,fqkl5ljlwm,x88eb5gou3,153oeaijy9k,qar9z198lv,3jk3qfdvoc,1s4mwo6raj,8hgfocp1ib,25k6z8e556,5o1jaejfjp,7fsh2chcoa,8ya9yxj11a,76sh8g6o44,97w6g8w7j2,jrpdsdvqsc",
            "fuh8vugeye,pqs1e310hf,d5bwvav5zc,u2455cppqw,rkei80dvmb,9ox36bkas3,815g66m9b0,g75pkzp8wj,gc3cilqta1,glum3ots0s,gpubjcif8q,5wlxqr6roa,avj64egcuf,86eqcovabn,4ji596xx5",
            "bia6m9o0ti,8u96izvb9k,4k63pqibqf,p5g2t86q6r,jrwk2ufc7g,ia86643z6e,6od2mxhu05,iwna4auktb,cegr3k6bng,jor64n2zb,bepdjamr7d,4ox9xl1890,1r95t7cyul,culcghc22p,10nww1yf75",
            "lflwy7kua8,11p3kcizeev,js96q1pl4i,jtbzajib22,kxcs5gwhos,84kx18q256,l423tr7ia8,iyjudnaalf,iuvgjxihqh,a04hyqgvq0,hske3lkiug,f3w9zfix11,3f4f5rfe5u,bcztxl65tk,2m412nyf3",
            "vunujjwpil,qf1qk707ug,loicmswjpg,u7xs4rhd05,lt0krs952u,290qnh67fg,8ineoezrr0,3ixhgsjgqk,1kkvg2ahmg,deb0fmon06,2azxvkto0b,lya3z804pa,lf2q4s10ll,drc5e5xai1,ika1sjwl4y",
            "x4a75l4wsq,onto1kep6k,whxn7z50fg,nlzl2b5wyt,c6nq4f2xtt,ayt0ds9qjb,aclvimsysk,aar1wsyzkw,jsyww89z3n,glp2cfub4j,adn9mxses9,ifqscyhig8,1sk19jkt7x,ahagx3nh7z,zjl1kbyfq",
            "z1a3ewrpfm,g0z7242ari,mo9nx6t3fl,ax72e4xy1l,uqnnqilels,10y4ce3e9p,f91nxfqzh4,lwj8g36t7u,k8ekc2y3pa,a9zwnnm4q9,24u36az4oy,6yplwy0gnq,1vl8iq8nyd,9l8rc7fyms,dtbpomjuib",
            "yrkm78rx8t,pkequf4upx,ov80qxzrji,148d6lnqu9d,68x16cqnnf,3dva8854sf,ctli5yntbt,5kxtng0pv9,k72g7xrhh8,35xqdn8gbc,4mmhvl15mc,fxr8069ben,joz1ntn5h3,2l93nuvzp,b04m45gfow",
          ],
          [
            "owsjmhdgcg,htow849x1e,hfz9l6jdrq,zsnuwst77z,sx52r4h95s,5oj6gh9tcu,hn0gam90vn,lfwrpzavxy,1pvde70cd4,dwovvhiek6,8ssp671l0x,btthjjb5w5,ezmlpff3np,kka5rh9nr,b4p1k7k4o3",
            "429975y11m,clvt99m6w4,lzmpqs4low,mb80sj2lmp,pfqeglhslo,2l1jdo1biu,9r3uhvz248,56rjvqc6lu,5mmyzxtq8e,3higy7ggub,hx9ectbnm7,8ol4q07iw,f8on0daamd,3k55lzqlt,4qb2y3c68q",
            "jx7bxd7xkh,sgbc7x1zeh,kqol38frny,rnxdum719k,gmancy1cwx,b9knufz1ht,5y99x3rb2j,f7hse90ulm,iygtr4dccr,661gudk302,ixcnwnihk8,jvk62ugqib,hhp7r6vbn1,9f2c1diip6,crsgzzxtf",
            "rj98stdv92,a8lr1ae1id,usz84pw3g2,t63q7606za,y5kiwensx7,kn8760hq4,k1mvfvux9v,kuxxq790ob,bqf0a9di6p,gmrg40is3,2oieb3qwv3,dj3nct15uc,lyicroiv0w,adb6c9q4mw,dc1zi9lm7s",
            "iakohj7uvm,h9zzs0cg28,uw8ka47t4l,exesxpjqwl,fs6j6zarir,br1df5q6ta,8veywr1c2e,9ucree545v,4pafftt8yn,3l41corp85,8q60le6tye,f5a200l71b,fnt33hbhvc,j59zfh1g9l,88tapwg5ua",
            "tlnxvpy2ni,gux3lzdv41,12y3bp0lssb,tk5qmpqgft,ra5y1jlrmb,cwavrv65w6,eeafajh5le,22xafokyj6,f7ih7tnkjl,a4ab3evq7e,7wpt1yzoey,ik3t1elh9r,dd9lomwy3m,m3rqi4uar3,772ksm0krp",
            "syj6cxcela,i13yiq1hf2,zpnqwa7qji,x2cautioxm,inafd3zxbw,6uu3ehm20i,eppr3upcgi,79m1ktsun8,69kvgsdyqg,94rjwru30u,j6wip8z5md,avhfeltzyl,7pq4yj30i7,h7fe29uj4i,jpvhpl1wwx",
            "ftqz9nlpf9,redn9p0rs5,ead9ai4uom,11quxfu6wpr,4vupe4rv75,aiw66g3n28,jrdtgen2xy,b5zj1iombx,g4w48x6tq3,k8krxc15de,lvsv5pkyv5,if3xiasjrh,iju9bbcusx,d8fma1qv75,cz78my5ajh",
          ],
          [
            "1j70yhhji5,6pfh7cyzqg,3u6d1ei56x,l11tz2imqt,q72vzy3bbx,2rpc5p39l,1wxafl4nry,ke92iaq963,ahq47p8wxk,g79y71e9cr,5w5s6hgbj,g81jf70z8q,fk14pwf1i8,4apjelbgx0,16wyt8wtm2",
            "wdvilz6kb7,rro7djo5ic,p3t8biltt9,11io2e69idm,m1dsx1xtfa,1vjsh44yeb,6mi9n6qzh6,3c3czl04p6,3bp7e0u1cg,8eg86vj386,hd8jhlik97,7jp8cu3lrw,d0apimy05x,omt8kml2k,8gex6m9cer",
            "yw6x8lel31,ecbzjx2xlh,x0c5kgcuko,dnccs9y14o,yb808ij714,3ltqcou9ir,56c4by8buz,e9ue3iqfmm,bng0wjdrk7,1tx0zh4rdl,a1bw7rsj2,4j7f2h5vgy,hpxjompxl0,je1juzrv02,acu97ax1np",
            "nptgb4ij7j,11zj0y0k970,ge9m6kyz2l,pashv05acv,dmidgi4753,jdtq91ew4,lrdslg6cda,brl4fr884s,59q5exo9vt,exi3wn365t,em66ap2juq,1ydivfxbvh,liz065mhxo,62y9p0g8f8,6dif00jf0q",
            "l5auwd8f45,r3fybw93w9,sjbhfmc315,pn1tso4oxd,enjp5ymtir,1khx046x3a,ihk9qyt0xp,63bnxzt480,a3xbnky247,beipsik3fx,h6e0mfpe0e,jc7618lvf1,glk5g3unwy,ld3x3q3jzc,cnvzzc5tqn",
            "mz96dr92n5,12lfl1kla65,12lsv4vn8a9,fsxijzcw3y,dbxsyncwt4,fry988tgvb,4bsytsvz1a,lv1pxcqgv7,6h74pkgy91,1jt894zt2m,a4uo078hx9,ncfq40bxs,567aqlznjk,eou2jp72ki,edwjwg6xrs",
            "q6waukk4gb,kvv5x7zquk,8ztwmw7rgr,iiaucuiesk,ojn8njp3az,bo7vlebpk5,dcs5spvaix,5rca7wzs9s,107b5g6u3q,hnjda4q0l3,jcyidf47s3,lyhgcsw3vw,e1gvarco8h,2kkqu7kwll,ghlyfd4be",
            "n85hbiozt8,uvvzjdwfco,mfvj5mjz13,lwny7j6ydp,vo13rtyt0n,h1aw8uzfs2,4921lupifw,i17uhdkm3v,did13r1qo5,akvsvufclc,eaald3o7yv,a1idxx9wlp,c3whwuwi7x,bkhem7cepb,84tlcwsl8i",
          ],
          [
            "ipgyabowup,frvw82grtp,99epye35k2,mzeyv3izkz,f66urf0u5b,l1e54icmho,ko7p4bghqe,gnc70vp097,bzm9s7lg1g,85r90b5em2,7jd3wom9dt,4jxlm5cwyr,9ts72ybiqe,5dnz4a2v5j,ls9ol8x1nu",
            "mmpexyqlug,uyl3zwama6,cmfay5df6h,eop6vyh21b,qvvmt07yo,hqk0byvhs3,h2t19vjtte,chq5mzei5o,1n745w3qev,lzqsnbzqoc,jo2rcb9yvt,abqe8dn8l7,2p6k5zf8c,i9ni1d4389,m2x4rea231",
            "bfjnzrz16i,r0tf5t5v0z,ld4vm9ql2c,vsc2zcrhry,hfq2te3ur0,dd15tokulk,76gdzsldnq,hcqr44ev9f,dg2rf7vh4q,1s9c7tvya5,amz330lhqx,bdhi840vyu,i7c6rcgb16,64ojbiswjo,18aoe4itfn",
            "bnvo2yk5rl,2frwbkywld,szja8fx844,u8v9xsqob3,ljttodn59w,jw7xldeg3v,1zp1n9xx0g,adbfgsz6p0,k8z9qydk68,7nu4avt6sn,2c5i2pxen3,cvrg54qwvy,c3vvjcuxcw,739jsvqm4r,jae5a0kzwq",
            "r8yeci18rv,mcge22n3s4,gwy8u29tlw,fftt6d1mhv,mmuixtmcb7,2rsjuz1wp1,d3s10fvjo,8jajjhtexz,lvqej85tem,cp4hh758ca,cl34ei9i1m,4vddjnu9dg,cfdcit3pft,fj30i1hrl8,iliomuht9n",
            "3h55hxutcy,i0p86u721r,ay2qapk5o9,nw7qi92gko,3zbeqrcm36,kbprvsloyc,gep3ikxdze,dz389ieovl,4m5wxxy9mv,1vw60vbvcn,gwmcyre2xu,ib395etlox,hef1tnfkqy,murygmdms,b00y1by3v1",
            "vv3k494zyp,ni3k7gdzkq,lv5lib41ou,gyp3cagnol,o1pt168vzh,2xxjxo8g72,bhccs7lk36,bm8kzbp336,d9rcmtg9id,dwui5g3ec0,b98t0039ul,8xaz8sdpep,lfok98k9yw,kfmrmnaw3o,379ojnezs1",
            "t9s0srayr8,swtrxoyocz,zp1floez7y,llf462ushu,dnnz30frst,447bvk0uci,71gws8l3ur,ehr0xt1gmv,lcozgjzt0l,98fd75mwhg,a9x3ygj245,l3rqeup5uk,lr816v912z,4r08cqyhqs,8cfm6iuydu",
          ],
          [
            "camz7c0bc4,efdc0mzwl3,rhw88xqwak,moz4lojha3,oqv7weqd0s,aesiiulykd,63w1jb72f6,4jnqg2ufgi,jtd5ahq9nl,2xdfamste2,ae3a3k3rl3,fajnwve0sq,evkjca7erf,eh8f8n51fl,c2o7st12vf",
            "10vf04v8jip,tycdlck2j6,xw1y6adrbk,zup1ovn9aw,124kzsvvm75,gnrsw47mp,9w5lt65uso,ie5zxui5s7,1peny5oz9t,5sp9r6p96f,at6sxn8gf,anmgq27081,5og58mi29w,7xvtkm9tce,cz28plgbsb",
            "qb6lepojur,10vjob1np5t,nsr9h1t1cn,14qbgpmsup5,kc55tog56q,azgk977bxq,i9b4hocrej,tp9u0jtey,jf2ttasyhx,4i5jz8yjn7,gq8fc1f0s2,e4powwb4ya,ao4jav6tz2,98me4tmz3x,3ck1kh7yfi",
            "jna7t2ghrf,8z3lfno14o,nsc01ygdrg,8f7ff5klmx,11nzp2082yy,2dokcm8ie0,31w94ww5cu,byzs62tcde,dv6511yyig,l2yz4lb3qb,cy6mt0xqfl,75twg9rvne,dfb3xuixca,gfkzxb3fx5,drpyeb9hwz",
            "mwsipmkjjf,w64dgewe9k,i7o9se2o6j,159sx33fd6g,qjq31dx45l,k7xthxhj5a,jxln2shc98,lzq757827w,jtc7510svd,8laijz75fc,bzhhyr5x1u,5wnejuymd1,doqokvza46,ehqk1kk45u,7a5t73g5ng",
            "133af8lj8yv,fd5kqbg0kl,v2sv2c80z6,dynd8c8qmr,n3nrb9ja1t,kzwq78l39e,23zoiflody,esoh1m7erg,jascib9amg,dbxy2goo1u,357robc4ae,ky4ddeu80z,72duc71ut6,6j56hyrecy,34vu2owd5u",
            "q63viqkzpl,jax7i8rpoq,sqr2gtylq9,10vazn4h1fr,eacwg1rzrm,9bpp9bjdlj,36leydkl23,emnx8zbqwg,769bkk8d6y,8vl24qejgu,fikgrul8ha,kxofr4ogqv,fgbejvm6v5,dt69g381zr,imkvujjkoq",
            "ufe8zotz6s,15ubmvkv18v,w7bt2y6uje,gd4p38yzne,mxym01b6ex,7a0a18gmj1,kfi45vk6cl,4z6fznz8rr,fvd4zovg2w,66u7yaj60u,hxv42eomit,6by0qr33vh,2l8oeo83s,5om8nc216b,2sxhule8n7",
          ],
          [
            "zmlmvya6ca,e9hko4env9,10qez45m3r4,nsyvhdeard,azhlzeywvd,20d3hcn16u,g1yui5cqcj,lt8h0auaej,1pwwet8qhi,9ex2zmmhts,fe0i8efuzw,ajlloe4h9l,40igcs7ku,9fxlt5pkg9,le3srcy51p",
            "hfm22eva14,tex1g0yegl,d21rltw9g8,ev4jszvz5z,mtjx43u6ho,652rt8ewp9,d68fe11sew,9r1bo7kvqx,cxuvysfvol,bgvlbfc08z,274yrn6fat,74iyny8uvf,9uk9v4j955,96tjbzkgz5,2icew00p3a",
            "jdze6slkva,sbo1qwi4lw,d5exjo2ps0,kdqylqnmf3,13132i54edq,c65u3hxeoz,i3h54a38nm,a3pn8ku4xj,a3n03zy271,hqqr8wyh52,azbincorv1,guxxmjwd3r,l5pin9jeur,kmyxs6xu7u,m08wqy7ex9",
            "yyqy4gnmvh,k5nj0zwgvo,lbnp96wbfm,fvlibhzkbl,r8gpt9pgey,15yaigvejz,aifoo662ao,e4lchrnil6,gknpuxkk9z,29u2q9zze5,i80j1ymw2k,frpsmh1u0y,b7zbagtc3i,j8rrsrwoap,yxjs2bj",
            "gyw19vwrq4,vzpkit8eyy,rfghito3pk,mdm51g0bt8,hanjim87yo,l4y1pee3nw,4yeb5bgtff,65ugxe7tla,ax5fbs12qb,a6gxvt3uwl,5mekioxdm6,jqseb1dssi,a0e0a0f516,k2daggybm,9053a83a8a",
            "d9d4x85td4,kg40mh3qg5,wupn511mil,os8zj3a4c5,aiwuwx4tra,hfeg1jwcgm,gp56mvwxvk,bcauqhzc7k,hjbrrco29l,3xw1nxriwd,i8fkb0vmsx,3z5ef85r92,82uz8whqvn,7huszk7tr1,h63otm03c7",
            "41nnt9orfs,kqw7nnhrln,w27qlg4duf,n5j55u91ug,bmkcmm6mlz,2tcxi8d5sv,6drb7gtail,atcnq0bqy5,dgef8781hr,etseafmr9t,6m8klfprmh,gi2ajgmgu8,69iz0yew9g,fg9p86k55c,lb4i4910lv",
            "iqgc2h481y,wd70szukj2,blrjd02rf2,p4xc01jq5e,cm2gxhlae5,fwlgw29dfn,3zapdsc131,l9q6sswvzm,bfirv2snob,fjd8xmbvqd,jtkvp0ckfl,83mv7j8k3l,hkysqvuq2u,gfhjjt8zn8,3u1r9fs79v",
          ],
          [
            "qn3ht6fygw,n7wx66k9m0,kenk6hnfce,31dvrk44ri,cudaliwtkp,cr2gto39py,klhw3obinw,i88xz5v4tl,172gzhjhw,7ru02h2nlx,kidwr1120a,8cry4qps9i,9sc54i3zm1,du540mnm71,f3ca00ot0k",
            "10wgxoq2wcb,dr9mens1e2,13nd3fcpdq6,njkpcm54z3,mtsztfs83m,hjt8hem01a,asr8hcnmgd,9s488e8ay,5c7igte6c9,f605eyuim9,6tu9p0z2nx,1oslk4i626,fc8dhkgqob,aky50po6zy,avd9dea4r0",
            "3ee7803veg,wzzju2si5g,ni0ag31afy,h4z2jpkj8z,om6hnk85h6,2a199u01x5,f10w1z4ab8,jwimvurhvb,ez4suku055,7xtmgu1rss,amp09kdym6,8l8opcj7f9,7juabyeps0,layugbejtp,jx9arfpe2w",
            "8ey2nwitro,j2ecmx1j4b,nnvumd75c5,uaqzyp7b7m,fayehq1a4j,eqow2vkzqm,aacvsop406,h5p4kvja9o,c6jvq12ded,8cyn0iglaz,6krtv0za02,ioiyn1ntwx,ds5n3nfw2a,b99lrfvna3,khxp01gbg9",
            "nf9lgxa6bu,j2amhyahbh,gs61qswu0e,ulv1k6lwk8,t87lpnb0am,ak4y75mim8,l50xgxh5i0,eutg0hax57,97p9p9nmqd,aygdgmh5dw,3a8eb0re64,2rbuyg0k7g,kpv9eyz4g4,a7eaaykd1l,5a1l3rgc5r",
            "puneh0l20e,nm402xigvw,p5zvmypv74,q9or33gw8y,ykbowlq7fi,bofxqjojjl,m64n9e9tly,atjk44bdm1,bcqsotj2zi,hn2te6c243,ievy6n7wwp,kyw2yhfwt0,8e3xp5rds6,2vt8lm7uj7,3ygoalolxu",
            "degizej78w,814n484oz8,wa5zgdnd1b,j7uodl6l6e,rn8jybnjja,f848vh4oid,4iqh3nv9tj,at39yevnnz,hj29i6epyj,73hm33i69k,bxrfb7161i,f4pn6zpv1i,lms2o5emb,icphctgyeh,c1lfaqpnfa",
            "cqsixwny04,xtqdci01sl,uuxof3uf9g,mstwxra2fy,lsjkhkhye6,3c6lvdyndi,5x698xm9xp,42nncavvlg,9ihi4uzmq4,i41fk8odin,2bijw0nw74,lemzdhephu,f5alcdgmxb,cmdth62bpk,hvp3f6d65t",
          ],
          [
            "g2mckvhmf4,i1uzjayo5p,klttfxe5pv,1546jtwu6a2,lrej8ebjza,ci3dfpaqu,guz71bk6pb,9ooh4cd7cs,yxv0fe3hq,c4xpkpdbks,joajq3rkae,hpo99kyikh,7q1ir2njr1,fndmbsulmn,fnk4ebid84",
            "h2k4titnsp,mhfsjwdqky,o5se9jzrxn,vxv3t0yrp9,brchvjeql7,8c11v168ep,7chqrzvg18,8637ywa0v4,5tvc5de3iq,9fbb5fqymp,hb7mfj331v,63i730qxan,1nkz0vfjp1,di5lbdnggr,idtyjto5zy",
            "pdz84u2u34,oqzd7ksyjr,gquao977s0,fjbkla0xl4,y5te61d7u0,gvmkimjcyn,ejutw8ax4o,5ns7fmfag8,l9cdaynwhy,fbe1qpwj1b,8enn9h6s5n,9txs2zzp3v,i2rn3iah8j,21liojfqy8,2jkyp59idu",
            "nk861v5usd,yckvw8n9yf,si5n9mcaum,g7ocjqd1mc,bwa9lzdrn9,esamka72un,dc9j17ui80,e80b7kufbb,8u8xco5agp,8f3ec28i7g,7185zpumsu,a63szzsn8e,hguu3v02m2,ah3lr1dwkn,h4b6uvl9ae",
            "g5k1kcjqqx,semwcs41ww,lsbhuup1ij,mh1fug84do,psto4kvdb5,bjbcq2bgq5,ffhh44qwcp,eba2jr5hhx,7gnp4o6hrh,fy2h8my2j8,457tvo62ut,9k86s3i4tq,ld1h4x0dkz,ct8f6mujfl,gcyh1gpyhs",
            "v3qtemdgla,d4cntxxrqp,144rpyvhx7r,zmz3unms26,jiraq53kfn,b1jt6squm7,a204dy4usr,135p7rc3vh,evmj9zhf5m,kry1446ssu,2zha8if8ss,kaw6lqrg0a,3h2umegnig,eh0i0gtrj,2gkp1ju5wk",
            "8fmhw2f50o,r6g8cdhrma,zqq412tdhf,13540qv3wag,jbkh1d12ew,e8gdflif3c,ee9zn2tvz,3yj8602eu9,4ryrluhmu0,gc7zwft65e,73y9p7hqy,bngtseugdk,l2kg71dsgv,k81co0s9z2,ksnbjxfprx",
            "lxzpmmus1e,10s330lwixv,dh5ebgluwb,wrsd0dteiz,56ojzedpav,6zhnat27jw,58grfrvknw,34cr58k2uz,hv4d7nqjk5,2jngxoif54,adez8yznvr,j91cpik6wb,9yc1hjvayx,bn79dth0hp,c7k7tvqqxe",
          ],
          [
            "ja170br3x2,hm12g0wfpf,nj05swtq2a,m6kc3ogcut,ub4rns9a4j,i7e8fedwh9,fkrxb1rv0f,i7ipcuogz3,air1cpvvd0,jpfrhoy530,f1qb90dcjx,l3g7ft5p0f,lgmj5ek5b6,3kipvxcyuw,fo3fflkfhb",
            "nqx5smhldt,ogjymeibob,l5tkc6f3dk,5vzklhjkrb,nzda7nyi71,jtnb7saowl,6iw60n9ahi,7tfxxtspwb,41xrej95n4,7x62168ptj,k7c26sppl8,4t4bud0ikh,lyj9x2qjp0,95qi2npo2s,6oopk6xlre",
            "f2lgq7g7im,8mgyxf9xon,pj9p42fy1w,qlo96yj8cg,ae5tkrdt42,ee6e5evdyw,j92wfd1oto,1s40s2eax3,fa4pfc4b0w,5hpbzqw626,3jbgukxycr,d1n5m5h2dx,8w0xmmrggi,2wayjqbahv,ikwcdt3im5",
            "16ah4klvnqr,k2hnu8a1mf,cz0w7bjpze,drweqekfer,jyqkwh1hcd,kes6d5uslg,32n3o3cbn8,31v0a74sf5,9t50bhgted,fnsa7kpb8v,dra9rl979i,6um7y7pxph,lzvtrzakf8,hhlq3m0xfw,aot4c0u4p7",
            "qid49gktdu,oojrlnxf48,r19axyin59,fbo4hl8srp,11lta5awb1u,j7h1izcmvs,is9w62g03x,hy4386d1hj,kw16qy5iuc,q5wqe8ak5,3t89cbzdm6,k9igvtomfw,c0s0wmvqbx,ho7qgojvzr,c402h6kdww",
            "hdzh5k4ct6,snwx16jzy9,md80lxr095,yzow6cxy3x,x5vo2r0ga4,b3ovskr8dn,c24vil3igg,ckdrbne6lm,f28w9m7v05,fnjl2lq7n1,lh6ixyk8g6,lklqro8ctw,evsm35xlhd,c9uk4m051m,6l3krajeht",
            "qhenpunzfz,srch1ksmmn,mz85ijedv5,55p4kvj32x,ol25wzcdvo,jg8fpnzxfo,ajx6tjwuv2,5usbhtho1r,ihl6e5ok95,eo151g9bf9,9fsjc3kg8a,2alws3ww5j,8duta70wwd,5l8fjrk7cn,h4vusaewtl",
            "ju3ezc97xw,1waoni9buo,oa0cdhpwfu,llzycw1m8y,gwf5rfvo0z,f65nsaa6v1,l5i6rxd2v1,fqdh3gh6tx,c47njjo0nw,811kd5rjvx,h49njxandm,hit29wca0o,hkaihkjp0g,iigqmn4vq7,apqrqiw8at",
          ],
          [
            "snwel8y8es,j9i3o9g6lw,i0vrkei2ga,ugbwc9s0t4,gftqx9rv33,b9bosllljf,f348jfvql7,arj8eip57t,4qijiboxrs,kvz47a2s0b,glscmlacge,eamex02bg1,2me6q3twc6,i2cbjqcqdv,gxyjay5zfk",
            "uxeb7rxfj3,wg0fndghir,ulo0zlybvo,gfph49ur2z,fsc4dnyctj,bvmqr68cx2,3a3eqnotwu,dt6wxipa5q,b11esfnj8q,j5m2gx5er1,7js2cgeoaj,ew1djzhhsq,bppxruxdgm,klayxo2bd6,l32hunj3vh",
            "qaydddj5gh,jojijscx0y,107vthico0b,xjl1bcqvcl,qynr9pavuy,98jssfvao2,dzz70v6r1y,j496l680em,1rszv0fi0i,dxctcua6z6,3x2vkf1aac,fj974pcky8,9yzmb1pp1e,f62fa7kego,9ym1l4nw3z",
            "ga1cqfskwb,m8coi6zvns,ix7oljc4ur,fsmbo452w3,ungxg6uhtt,9tabzoprbn,ec2cu75afz,7bu4kzm5vh,1dchzbedfu,9ukjmh7k5p,ea9sctvu4g,eji6qmfq99,a5a0tuabyt,6444a1ck4g,h6grr3t33m",
            "rolq8gvjis,mjby5cvwtc,k2mqgkp0at,g4crx51kff,wa305ywspw,9h24xrw78m,azsusvyod3,1sjn2mk0tb,ebyvx4g14n,1xhtrwtihg,7ugq6puimf,iok5prxs4b,451jufmry9,lbru3l2w00,96fgd6pyf5",
            "8mvxxq7j45,djmcwn9zuf,sie82g3bt5,so5ktaqx6s,md21mkxcty,ltu9yjq56y,3vyjllbrci,lvv6hdyiwn,5huzd29t1d,alujsf5cx2,7vz0pe4y2l,iukn53ymes,5nnoi32is7,ehgwxs0zbt,f0z7pwygww",
            "vit2zm2pdb,lqcvdgab5u,v5ss89q753,r3ublw11dw,msavinul5b,eio8e8jkev,hc5df8amwd,be9i4g2ja8,fz99kjwiz6,1mn0pj9mh4,jbcs5nwc1k,10dipgztgp,acwa6y4myy,fsg6b5woml,j48staz2qm",
            "dsy1xsv027,ph1w5qqtls,mvqg4aai3d,8hpbqz2abp,ujohh40vnc,c5o0dmhfqz,ao0hb9pwkt,8uetd7k69j,g5mw9td91m,1juuilyefh,b9bwv4pnm8,jmbmouar7r,6n0aqwc5mk,hgluybkfkm,6n0xkt41ml",
          ],
          [
            "i2lfr4puge,1pn4kn21k8,821lrssu2k,13it4b2mq4y,a23dk7puci,eu21857846,ky4nn73nur,524qea0afj,1duqtx5f76,4cueybbhge,k917asl7s0,25nuqgbsb3,lljn89odp1,i4n7h5lg9k,5h967x0q91",
            "z4by4zwhpn,abv6smblei,16iqh3vqe27,ost0rtt9q5,k3agnenp9b,xcr7vp6ia,92zqjzyh00,8ovc27brv,l2d4t2bsbr,kndgdkequ4,5alioqolgz,ds11fwc1xy,fe9t4abskp,l5o1who2mu,5exipzlilg",
            "h7lxevekan,6p7ygmgq3z,htfob5bklh,s0ukdim7wm,o5olxg4v3x,36p8eovbi9,jfkmx37i0p,bqltv09bku,s4n3dnf95,dj22ngog0r,23lm94ezkr,43j4kferdj,j7enidb747,cxkqqbjnpo,ldoxbfjk16",
            "o180r18a87,9sbz852kth,uzr7lt02jf,11eo32dalzj,ejonsqe2ut,fyg3g44m8i,5bs4772kfp,m0ips629rd,l7u3opqt3a,jfy38sg6oi,d9ehvsh9w5,davs99yrnm,9a6arwr791,l7x0rvnae6,9yw8m47ae9",
            "kqwb90n376,b5gm4j635c,hyvvqlfu0a,7knn7qhghl,ial2oh2fjk,akxqsoad4j,2gd1dantl5,bk9ne907re,fcmgxgf4gg,ehvro077gx,ifsdt42v2k,imzl9fpylc,ix4w1y3a76,cidpbkm20w,e61vsxmml9",
            "uf0yam9s50,w50daso0vi,9quinu3mci,db11i7kv52,peoo20p28e,a4ifqp1hje,guiifp0p8h,datvvbeexh,ixpdntjs9z,eq5z1tb3nj,ipscjy9exb,48hwtw18hf,6rocgkkngf,873nwc8w6g,glid0gpjga",
            "ugvuqmug7i,5yowyvzzwn,2v3cf22zkx,ns1sjqpop0,lsqckr0kf0,bkz5h2lpnw,gzmpbqjo3f,4i2l2th6u,6oc4476luo,1loieqxtmv,e9agz00y09,hmakeyewip,3sogkofaqh,vz21w5kyi,879unrswnb",
            "r94tcb7i7i,m26zat4vlz,zhbmynbf58,y7syehdx1j,tk4s4so2v5,cfx19hlhzz,auu8jtlt9s,56k3vvgp50,l6tqff7qhr,elz6d8ogey,4d0zl3kpcf,fqw8v4fsfe,iyhriay62g,8uuncegm0u,3g5ops60dk",
          ],
          [
            "gmybp5o4to,s0p7kl12ed,vswh7pbn35,jjo2wr0dne,12oba2sr3e1,fbzf10zsgr,3cqs1f1jzn,ejt5wsqzq3,61wlspkymz,k0q08muo5q,9jecgq5ril,c2eywjolr4,6j02z3i12k,bdlj7kii03,7sfq0u419a",
            "en4jpmhe3m,vy76kpghhy,hncfjcj55r,t1uj20eg1u,l7hvzrn7mx,b24udcy5bb,6r0l8oj642,4zxiqc6h47,dwpz3l517l,5lcfk1o28i,5ilfc6k2fd,llp4fkxcwx,hyl1yc8jnm,5p9atk26nc,gn2snxnazd",
            "iw0o5m20e5,pnlh4gejy3,j0a1m5g3fm,feoim2z55o,14hzjfsyatc,kzhp9kaz3w,bl2zf2kj58,harz4acwlx,dost3mn1l8,jd05bdealr,kbm19r1n0r,l2nt8ln48t,6w3bwdeh14,2ov5qwshsc,3p4reiaccw",
            "jxjxfurw0a,q9zv0wnz27,wsoaulizbp,nv104dj2ny,a5p63ybb70,k0ygrjuisi,h6ilb8nwlg,lkhull8sp4,j714fzo7ft,29wesi6fhw,3dw336fncl,5f0i44trq0,ea6rndo9vi,4qpppr5mp6,8ty7ew0j22",
            "l6ijrjcgdb,p9ritd0k00,mrdmgkie77,gibszki5fe,k62u45fjls,f1ykrxp0c5,fsxcm6age0,adzkdayibv,ecxijom6mp,c5hhqs8wra,86d2ib83ks,hj22pifdgp,e199myxi25,3kgjypyiv5,lcsp969l5y",
            "xjvoe5sh56,9nm6bc0mmd,k7zzeb0ri9,r089bgt5eu,r74bry7yks,gku87tfejo,6f7ooxo2wg,c13aloi72b,iok3gpclrx,35b4xmq1jj,63ckt2ds2c,psf9rpoow,kacd3vxred,h1hr34uwce,hbj8oetu6",
            "10kuih6mp5t,xfdc7go3vf,61ur794m1u,dviuefpawn,ijei6qs8cj,lyil2tgngb,5jwjhpvn80,k45in58oym,859ayv431c,6m7punibjj,2lnht5z9hc,gajcg6ebbt,lija7cprlv,lqc3lomdyc,4zd8e0esvm",
            "hkj7btpkti,jfmumy4x64,3ap2vfkq53,xk8j92yyiq,w95mqvxy1h,kc2sdeaz4f,b5odmeknl,30m89n8ufn,1shynaker2,is0g6sjc3n,eqgy5txi2w,h7sb7x85ei,8ldgu8g364,8230uwr5xj,yppnaqtto",
          ],
          [
            "qtdl5bttr0,ssk8atuxk8,hrtfdaecjq,i51l6kjphw,10yk8nvufg2,9z5lgadzgb,5b15b8fdwm,iv33ocp7fa,h5s1krdkp1,ikq5f6ag6o,kmcuctxmh4,2zqyr4jsgk,egnui09to,6e7kpox9wa,hwmbrtdc7r",
            "m2mo34a77u,5eqtvfh63p,893ytc0twg,gzpdn76pjh,12ysmbvsgcz,bz28xk5bss,hrl8lz9vp,ff1fwwjyk2,73txc5oz3o,3fs71uo2to,9c98on0896,3eq4fxjuw9,b3bcg7nwyv,hbnf6pt7i2,4urtjviggq",
            "ebqb0itd4a,us90cs8d16,eg2h1hk8bv,e3pp28s1qp,ksjeivmpt7,kqaphm6ztu,jnoqmk963l,ctvlw69k2s,8dz56ombap,dbv0ifuyu3,7dyji17qw7,encwql9fkl,5dfv4956g,evyie6i37c,9kgb5booep",
            "igi9h6l2u2,kx2g63k187,htlobdwl9u,91jn5l8sy7,ry1fe6xwkq,c5styxdi0s,bhco2chkk2,h6ovbtmfav,du7pcr6u8w,1kyi74ldt,gdrru0upxv,38701ip527,d7n7m79qcy,jc80scesil,h7fcs1g8yc",
            "6hya83k5di,keevcvzr7b,zjtyuxqbrv,8z66oww2jm,w5ri98z3dj,lq6t0a1p2v,gn9hbg82w0,fr7pm3rrty,l89svfs2ut,awc370qph4,d8or611e8e,j723vws4v8,h3bwqvymmt,6nl034e1rp,i26d1ifkpo",
            "iwx40ibkvd,nqilg3q956,mv49q27734,sc3wnjhhqw,10ml5zkakgg,64k4ef6gbr,bwylm5l4lc,h5koyge6f7,dtmawdpg41,43vq7fd660,820r9rwif,1npurb4i3p,d1ftunuw02,i3zboax8od,4z09k1kg3r",
            "z3p8x3blck,gyd08jkv3h,moq03w81vm,kc07xt8u7z,u3ihbj0vli,d63bpa8rqk,cofk3y5hos,jvbtfdytmg,6f6fx55d7p,8ubgwjvw3n,je8e7chmj2,7oh598v7d1,jsyph6p662,hyjhlytian,afd6ns91wx",
            "o7oyy8wrci,b0cze91smk,tn79x0u3lw,7xz2jydwrd,bedc3ecw5x,cjfvtxvmy6,g4swyfkppa,7h4k540ns7,6k2z4h19hv,8ub3wnee5p,gwpw3gimx6,aflibvi0oi,i3gah02s7m,adnoxxkgod,6pcu0podc7",
          ],
          [
            "m0ypu0kozn,m57mlh8wmu,k9pu09u7dz,nn68telm5b,lt7q3qqvc5,s650loho5,i865i0a3we,hz67l3wkj7,8398rfj6gc,7p4fssefbe,7fwzuftmka,1i1lcv9z70,bln13lzgkw,41fwubkohz,1ji4fnkgcu",
            "104wfz591x5,qxy01n8u78,12dwz7t6zyd,zyzd3vfl14,da8va9lunk,eq2g3qww4t,377xo1qa39,gffgwktpp,famy63pwko,85uk7901b7,club3ty822,ke1rffsagg,g5nxpnnxfq,kns2s2a9b3,4fua5nbl5u",
            "q6pqvzp9z1,nf28zqd30j,ozl7fpaihg,jood3pfpi1,jzr7yhzsyy,ccufuis5oj,bcsdabibvn,9a8dtidsaq,69u26k0pcw,bbe21f67yb,8szgbtynck,3xw3gvx0oa,4085hzyr0l,fqudmjcz6p,ba6ctnzg8q",
            "10x6dp18ddf,n989axt1hn,b41647f7ev,ipj4vgff0c,ng7ci65b59,4ge5w6jbhl,dbabls65vd,bjywkeij3g,jomj8m65zt,3m7g7oqok2,gwtephynpm,eiwsgvs55z,8s5razwa0m,88mnuab06b,ikiz5djuss",
            "yedeaxari8,o0lo095em6,x6ny05zb1c,qe6ajuvtk9,mgyh8lwbfg,jww4lm7bn6,apyb7fzu63,jh34pp3598,i9hf2pqof8,5k07r68ilp,98su89jlm1,au0nzfwikh,a0s5qlnp8w,j9shtjy76p,1i5ptcw8u2",
            "upmvld2yiz,sa4vfry05p,oebgbb6tpv,pjfbuiu4cc,hcgmp521lj,cr2c12thrn,963c6yuyo6,dckef71od3,92wl8xp037,8s9nj3rlb5,gjv01dxwfe,59rq9oqob4,l1e6f6f0ne,j4gng5cby4,ch8klbpxb6",
            "prxt0be9e4,qfk83pb5qj,nf06ddg6ly,jfo2xl2lil,sj1vns01xk,59tlmwiqup,5durqumd0q,f0gaazytcn,l1w3mn91x3,cew72zfji3,bf5hmy32df,lnbaqo7kui,71ag3g04qh,t0vhja753,em1hr3yuhm",
            "dka07it97l,k5d25je91c,hqryb4seq5,ms843el3fx,dd0ie8sc5o,jtrkoj9p1r,i0yce3t2if,5a1l5t3neg,5zyvubpe22,2ny6o5ul5x,c6o77rahq1,ly02eduvfa,dn1hqf62lk,5u9kvfx6bu,4uzhysfpm9",
          ],
          [
            "mmz6xkyiil,img807ci00,9oreyv4k8w,nwn25hsndu,x9f7rm3ikb,gohept88hr,4xyhc0kv2w,gngs7idjp7,9cm586sgqz,2pinvi0t6y,b2lveimiuo,gd0iev943k,erkt92ehom,flt6jcd9cc,5huhx9yjgq",
            "hkk7qr5itw,fy4v05unzb,knfig8iol7,opqs2euwgc,iribibiq2d,cow3crbdq6,96ahgatnca,1vlwm6595u,jrdeqhf4qe,9wkmjk4t52,efhsyfnve7,1i77mh2jrr,6p5p9kw939,1pejgx4z21,6k7z6zizsc",
            "ksajuubqnb,zqxcdk0raj,cal3jsqls7,zhjjmsvbc6,insa128ion,1oqkacftdi,6ixijjpgzp,4jvvktvkvl,4lib24u04a,6gusvqts6z,4t7amccxkx,8j5bhfu5wa,gth0v104rs,ghb0h371hz,etvu2l87uf",
            "nr28zssm4d,9cvx5bddag,qesm79g87a,709np251v3,35rt541h31,9qkaul0e6t,ddzf12gulq,ctgmegee6l,2w9il0nou4,aeierkb1f,e4g2c2pfo6,zh524hrn5,26dh0l8pe7,1ua2q9wp9o,cuus6n00i2",
            "lpxk16k4ri,r3dstrh4kk,9gzikt6aon,nq83l17erd,i4qw6c87r4,bqfokrc7fk,i6pzeaewjf,dlyc4x0xr4,a8mrj9mpkg,7rlzmhn4yj,d9gjmdoavk,cpxm7vp6ae,l3lm3fsfqw,7qwkve1hi3,fh4h7pe3yn",
            "7r0yblgjgw,o63vdo9rt1,zj2fl7viyz,e3bvijy3lp,7qqg8k8is5,4uk3jy0wpj,2zsnz84ylh,hchsnwixvk,2avaa6dn7i,jib6i7uj3d,6k0bqvhbd6,d86uhlg6e9,8tjn3n76dh,4bqdiyokfw,jk9sj8p2f5",
            "tm7kcvg5vd,gyai1r9owc,opx5owuh71,dox7jw59lg,bxt10d5kn1,8eboreqjar,hw2h5wqpqa,f77zevq7r0,bkeem69dak,1znctlsrh0,bv8ipguds3,7y8fflwvu,9ryxxflb0s,dpl2p1ltm8,6s15n69fby",
            "wim24psv7g,j9agvb3yem,ldm2854zc5,n2pu0uhvja,4ephr6s5a9,co9n003j8u,64qir1rc5z,8o9rtwxu8w,7aob3iwsn2,32fv40co24,9vri0rog2u,5d9p0aukc5,i7p01amblk,cziyd3uzw2,2rdh13tvy0",
          ],
        ],
        ue = le.FromArrayOfStringsInRadix36Form(ce),
        de = new ae(he.map(le.FromArrayOfStringsInRadix36Form)),
        ge = new H([
          278908739862762n,
          821645201101625n,
          8113234426968n,
          1777959178193151n,
          2118520810568447n,
        ]),
        fe = class {
          constructor() {
            g(this, "bytes");
          }
          static FromBytes(e) {
            const t = new fe();
            return ((t.bytes = e), t);
          }
          ToBytes() {
            return this.bytes.slice();
          }
        },
        pe = class {
          constructor() {
            (g(this, "edwardsBasepointTable"),
              (this.edwardsBasepointTable = de));
          }
          Mul(e) {
            const t = this.edwardsBasepointTable.Mul(e);
            return new be(t);
          }
        },
        be = class {
          constructor(e) {
            (g(this, "Ep"), (this.Ep = e));
          }
          static FromCompressedPoint(e) {
            const t = e.ToBytes(),
              n = re.FromCompressedPoint(t.slice());
            return new be(n);
          }
          static FromCompressedPointBytes(e) {
            const t = re.FromCompressedPoint(e.slice());
            return new be(t);
          }
          Negate() {
            const e = this.Ep.Negate();
            return new be(e);
          }
          static vartimeDoubleScalarMulBasepoint(e, t, n) {
            const r = e.NonAdjacentForm(5),
              s = n.NonAdjacentForm(8);
            let i = 0;
            for (let c = 255; c >= 0; c--)
              if (((i = c), 0 !== r[i] || 0 !== s[i])) break;
            const a = ie.FromEdwardsPoint(t),
              o = ue;
            let l = V.Identity();
            while (i >= 0) {
              let e = l.Double();
              if (r[i] > 0) {
                const t = e.ToExtended(),
                  n = Math.floor(Math.abs((-1 * r[i]) / 2)),
                  s = a.Pnp[n];
                e = t.AddPnp(s);
              } else if (r[i] < 0) {
                const t = e.ToExtended(),
                  n = Math.floor(Math.abs((-1 * r[i]) / 2)),
                  s = a.Pnp[n];
                e = t.SubPnp(s);
              }
              if (s[i] > 0) {
                const t = e.ToExtended(),
                  n = Math.floor(Math.abs((-1 * s[i]) / 2)),
                  r = o.affineNielsPoints[n];
                e = t.AddAnp(r);
              } else if (s[i] < 0) {
                const t = e.ToExtended(),
                  n = Math.floor(Math.abs((-1 * s[i]) / 2)),
                  r = o.affineNielsPoints[n];
                e = t.SubAnp(r);
              }
              ((l = e.ToProjective()), i--);
            }
            return l.ToExtended();
          }
          Compress() {
            const e = this.Ep.X,
              t = this.Ep.Y,
              n = this.Ep.Z,
              r = this.Ep.T,
              s = n.Add(t).Mul(n.Sub(t)),
              i = e.Mul(t),
              a = H.SqrtRatioI(H.One(), s.Mul(i.Square())),
              o = a.i1.Mul(s),
              l = a.i1.Mul(i),
              c = o.Mul(l.Mul(r)),
              h = l,
              u = e.Mul($),
              d = t.Mul($),
              g = ge,
              f = o.Mul(g),
              p = r.Mul(c).IsNegative();
            (e.ConditionalAssign(d, p),
              t.ConditionalAssign(u, p),
              h.ConditionalAssign(f, p),
              t.ConditionalNegate(e.Mul(c).IsNegative()));
            const b = h.Mul(n.Sub(t)),
              m = b.IsNegative();
            b.ConditionalNegate(m);
            const y = fe.FromBytes(b.ToBytes());
            return y;
          }
        };
      function me(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var ye = new TextEncoder(),
        we = class {
          constructor() {
            (g(this, "nonce"), g(this, "key"));
          }
          static FromBytes(e) {
            if (64 !== e.length)
              throw new Error(
                `Invalid secret key length: ${e.length} (expected 64)`,
              );
            const t = new we();
            return (
              (t.key = R.FromBytes(
                R.DivideScalarBytesByCofactor(e.slice(0, 32)),
              )),
              (t.nonce = e.slice(32, 64)),
              t
            );
          }
          static FromScalarAndNonce(e, t) {
            if (32 !== t.length)
              throw new Error(
                `Invalid nonce length: ${t.length} (expected 32)`,
              );
            const n = new we();
            return ((n.key = e), (n.nonce = t), n);
          }
          static FromMiniSecret(e) {
            if (32 !== e.length)
              throw new Error(
                `Invalid mini secret length: ${e.length} (expected 32)`,
              );
            const t = (0, a.sha512)(e),
              n = t.slice(0, 32);
            ((n[0] &= 248), (n[31] &= 63), (n[31] |= 64));
            const r = R.FromBits(R.DivideScalarBytesByCofactor(n)),
              s = t.slice(32, 64),
              i = new we();
            return ((i.key = r), (i.nonce = s), i);
          }
          ToBytes() {
            const e = new Uint8Array(64),
              t = this.key.bytes.slice();
            return (
              R.MultiplyScalarBytesByCofactor(t),
              e.set(t, 0),
              e.set(this.nonce.slice(), 32),
              e
            );
          }
          ToPublicKey() {
            const e = new ke(),
              t = new pe().Mul(this.key).Compress();
            return ((e.key = t.ToBytes()), e);
          }
          sign(e, t, n) {
            void 0 === n && (n = new ve());
            const r = new qe(ye.encode("substrate")),
              s = new xe(r);
            (r.Bytes(e),
              s.SetProtocolName(ye.encode("Schnorr-sig")),
              s.CommitPointBytes(ye.encode("sign:pk"), t.ToBytes()));
            const i = s.WitnessScalarLabel(ye.encode("signing"), this.nonce, n),
              a = new R();
            a.bytes = i;
            const o = new pe(),
              l = o.Mul(a).Compress();
            s.CommitPoint(ye.encode("sign:R"), l);
            const c = s.ChallengeScalar(ye.encode("sign:c")),
              h = I(X(M(c), M(this.key.ToBytes())), M(i)),
              u = je.FromCompressedRistrettoAndScalar(l, R.FromBytes(E(h)));
            return u;
          }
        },
        ke = class {
          constructor() {
            g(this, "key");
          }
          static FromBytes(e) {
            const t = new ke();
            return ((t.key = e), t);
          }
          ToBytes() {
            return this.key.slice();
          }
          ToRistrettoPoint() {
            return be.FromCompressedPointBytes(this.key);
          }
          verify(e, t) {
            const n = new qe(ye.encode("substrate")).BytesClone(e),
              r = je.FromBytes(t);
            (n.AppendMessage(ye.encode("proto-name"), ye.encode("Schnorr-sig")),
              n.AppendMessage(ye.encode("sign:pk"), this.key),
              n.AppendMessage(ye.encode("sign:R"), r.R.ToBytes()));
            const s = R.FromBytes(
                R.FromBytesModOrderWide(
                  n.ChallengeBytes(ye.encode("sign:c"), 64),
                ),
              ),
              i = this.ToRistrettoPoint(),
              a = i.Negate(),
              o = be.vartimeDoubleScalarMulBasepoint(s, a.Ep, r.S),
              l = new be(o).Compress();
            return me(l.ToBytes(), r.R.ToBytes());
          }
        },
        ve = class {
          GetRandomArrayU8_32() {
            return (0, i.randomBytes)(32);
          }
          GetHardcoded() {
            return Uint8Array.from([
              77, 196, 92, 65, 167, 196, 215, 23, 222, 26, 136, 164, 123, 67,
              115, 78, 178, 96, 208, 59, 8, 157, 203, 111, 157, 87, 69, 105,
              155, 61, 111, 153,
            ]);
          }
        },
        je = class {
          constructor() {
            (g(this, "R"), g(this, "S"));
          }
          static FromBytes(e) {
            const t = new je();
            if (64 !== e.length) throw new Error("Invalid signature length");
            const n = e.slice(0, 32),
              r = e.slice(32, 64);
            if (0 === (128 & r[31])) throw new Error("Invalid signature");
            return (
              (r[31] &= 127),
              (t.R = fe.FromBytes(n)),
              (t.S = R.FromBytes(r)),
              t
            );
          }
          static FromCompressedRistrettoAndScalar(e, t) {
            const n = new je();
            return ((n.R = e), (n.S = t), n);
          }
          ToBytes() {
            const e = this.R.ToBytes(),
              t = this.S.ToBytes(),
              n = new Uint8Array(e.length + t.length);
            return (n.set(e), n.set(t, e.length), (n[63] |= 128), n);
          }
        },
        xe = class {
          constructor(e) {
            (g(this, "context"), (this.context = e));
          }
          SetProtocolName(e) {
            this.CommitBytesB(
              this.context.GetTranscript(),
              ye.encode("proto-name"),
              e,
            );
          }
          CommitPoint(e, t) {
            this.CommitBytesB(this.context.GetTranscript(), e, t.ToBytes());
          }
          CommitPointBytes(e, t) {
            this.CommitBytesB(this.context.GetTranscript(), e, t);
          }
          WitnessScalarLabel(e, t, n) {
            return this.WitnessScalarFR(this.context.GetTranscript(), e, t, n);
          }
          WitnessScalar(e, t) {
            return this.WitnessScalarSR(this.context.GetTranscript(), e, t);
          }
          ChallengeScalar(e) {
            const t = this.ChallengeBytes(e);
            return R.FromBytesModOrderWide(t);
          }
          ChallengeBytes(e) {
            return this.ChallengeBytesTL(this.context.GetTranscript(), e);
          }
          ChallengeBytesTL(e, t) {
            return e.ChallengeBytes(t, 64);
          }
          CommitBytesB(e, t, n) {
            e.AppendMessage(t, n);
          }
          CommitBytesS(e, t, n) {
            e.AppendMessage(ye.encode(t), n);
          }
          CommitPointF(e, t, n) {
            this.CommitBytesB(e, t, n);
          }
          WitnessScalarSR(e, t, n) {
            const r = e.WitnessBytes(new Uint8Array(0), t, n);
            r.MetaAd(Uint8Array.from([64]), !1);
            const s = r.Prf(64, !1);
            return R.FromBytesModOrderWide(s);
          }
          WitnessScalarFR(e, t, n, r) {
            const s = e.WitnessBytes(t, n, r);
            s.MetaAd(w(64), !1);
            const i = s.Prf(64, !1);
            return R.FromBytesModOrderWide(i);
          }
        },
        qe = class {
          constructor(e) {
            (g(this, "ts"),
              (this.ts = new v()),
              this.ts.Init("SigningContext"),
              this.ts.AppendMessage(new Uint8Array(), e));
          }
          Bytes(e) {
            this.ts.AppendMessage(ye.encode("sign-bytes"), e);
          }
          BytesClone(e) {
            const t = this.ts.Clone();
            return (t.AppendMessage(ye.encode("sign-bytes"), e), t);
          }
          GetTranscript() {
            return this.ts;
          }
        },
        ze = (e, t) => (e >= 0 ? e : (1n << BigInt(t)) + e),
        Be = { bitLength: -1, isLe: !0, isNegative: !1 },
        Ae = function (e, t) {
          (void 0 === t && (t = Be), (t = { ...Be, ...t }));
          const { bitLength: n, isLe: r, isNegative: s } = t,
            i = Math.ceil(
              -1 === n ? (e || 0n).toString(2).length / 8 : (n || 0) / 8,
            );
          if (!e) return new Uint8Array(-1 === n ? 1 : i);
          const a = s ? ze(e, 8 * i) : e,
            o = (
              a
                .toString(16)
                .padStart(2 * i, "0")
                .match(/.{2}/g) || []
            ).map((e) => parseInt(e, 16));
          return new Uint8Array(r ? o.reverse() : o);
        },
        _e = /^0x[\da-fA-F]+$/;
      function Ee(e, t, n) {
        return (
          void 0 === t && (t = -1),
          "string" === typeof e &&
            ("0x" === e || _e.test(e)) &&
            (-1 === t
              ? n || e.length % 2 === 0
              : e.length === 2 + Math.ceil(t / 4))
        );
      }
      var Me = (e) =>
          e
            ? e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "0x")
            : "0x",
        Se = function (e, t) {
          if ((void 0 === t && (t = -1), !e)) return new Uint8Array();
          if (!Ee(e)) throw new Error("Invalid hex string: " + e);
          (e.startsWith("0x") && (e = e.slice(2)),
            -1 !== t &&
              (e =
                t / 4 < e.length ? e.slice(0, t / 4) : e.padStart(t / 4, "0")),
            e.length % 2 !== 0 && (e += "0"));
          const n = e.replace(/^0x/, "").match(/.{1,2}/g);
          if (!n) return new Uint8Array();
          const r = n.map((e) => parseInt(e, 16));
          return new Uint8Array(r);
        };
      function Te(e, t) {
        void 0 === t && (t = 0);
        let n = 0;
        if (!t) for (let s = 0; s < e.length; s++) t += e[s].length;
        const r = new Uint8Array(t);
        for (let s = 0; s < e.length; s++) (r.set(e[s], n), (n += e[s].length));
        return r;
      }
      var Ie = 0b111111n,
        Xe = 0b11111111111111n,
        Ne = 1023,
        Fe = { bitLength: 16 },
        Ye = { bitLength: 32 },
        Pe = (e) => {
          const t = BigInt(e);
          if (t <= Ie) return new Uint8Array([Number(t << 2n)]);
          if (t <= Xe) return Ae((t << 2n) + 1n, Fe);
          if (t <= Ne) return Ae((t << 2n) + 2n, Ye);
          const n = Ae(t);
          let r = n.length;
          while (0 === n[r - 1]) r--;
          if (r < 4)
            throw new Error(
              "Invalid length, previous checks match anything less than 2^30",
            );
          return Te([new Uint8Array([3 + ((r - 4) << 2)]), n.subarray(0, r)]);
        };
      function Ue(e) {
        return Te([Pe(e.length), e]);
      }
      var Le = "Invalid mnemonicToMiniSecretAsync",
        Ce = "Invalid entropy",
        Ke = "Invalid mnemonicToMiniSecretAsync checksum",
        Re =
          "abandon|ability|able|about|above|absent|absorb|abstract|absurd|abuse|access|accident|account|accuse|achieve|acid|acoustic|acquire|across|act|action|actor|actress|actual|adapt|add|addict|address|adjust|admit|adult|advance|advice|aerobic|affair|afford|afraid|again|age|agent|agree|ahead|aim|air|airport|aisle|alarm|album|alcohol|alert|alien|all|alley|allow|almost|alone|alpha|already|also|alter|always|amateur|amazing|among|amount|amused|analyst|anchor|ancient|anger|angle|angry|animal|ankle|announce|annual|another|answer|antenna|antique|anxiety|any|apart|apology|appear|apple|approve|april|arch|arctic|area|arena|argue|arm|armed|armor|army|around|arrange|arrest|arrive|arrow|art|artefact|artist|artwork|ask|aspect|assault|asset|assist|assume|asthma|athlete|atom|attack|attend|attitude|attract|auction|audit|august|aunt|author|auto|autumn|average|avocado|avoid|awake|aware|away|awesome|awful|awkward|axis|baby|bachelor|bacon|badge|bag|balance|balcony|ball|bamboo|banana|banner|bar|barely|bargain|barrel|base|basic|basket|battle|beach|bean|beauty|because|become|beef|before|begin|behave|behind|believe|below|belt|bench|benefit|best|betray|better|between|beyond|bicycle|bid|bike|bind|biology|bird|birth|bitter|black|blade|blame|blanket|blast|bleak|bless|blind|blood|blossom|blouse|blue|blur|blush|board|boat|body|boil|bomb|bone|bonus|book|boost|border|boring|borrow|boss|bottom|bounce|box|boy|bracket|brain|brand|brass|brave|bread|breeze|brick|bridge|brief|bright|bring|brisk|broccoli|broken|bronze|broom|brother|brown|brush|bubble|buddy|budget|buffalo|build|bulb|bulk|bullet|bundle|bunker|burden|burger|burst|bus|business|busy|butter|buyer|buzz|cabbage|cabin|cable|cactus|cage|cake|call|calm|camera|camp|can|canal|cancel|candy|cannon|canoe|canvas|canyon|capable|capital|captain|car|carbon|card|cargo|carpet|carry|cart|case|cash|casino|castle|casual|cat|catalog|catch|category|cattle|caught|cause|caution|cave|ceiling|celery|cement|census|century|cereal|certain|chair|chalk|champion|change|chaos|chapter|charge|chase|chat|cheap|check|cheese|chef|cherry|chest|chicken|chief|child|chimney|choice|choose|chronic|chuckle|chunk|churn|cigar|cinnamon|circle|citizen|city|civil|claim|clap|clarify|claw|clay|clean|clerk|clever|click|client|cliff|climb|clinic|clip|clock|clog|close|cloth|cloud|clown|club|clump|cluster|clutch|coach|coast|coconut|code|coffee|coil|coin|collect|color|column|combine|come|comfort|comic|common|company|concert|conduct|confirm|congress|connect|consider|control|convince|cook|cool|copper|copy|coral|core|corn|correct|cost|cotton|couch|country|couple|course|cousin|cover|coyote|crack|cradle|craft|cram|crane|crash|crater|crawl|crazy|cream|credit|creek|crew|cricket|crime|crisp|critic|crop|cross|crouch|crowd|crucial|cruel|cruise|crumble|crunch|crush|cry|crystal|cube|culture|cup|cupboard|curious|current|curtain|curve|cushion|custom|cute|cycle|dad|damage|damp|dance|danger|daring|dash|daughter|dawn|day|deal|debate|debris|decade|december|decide|decline|decorate|decrease|deer|defense|define|defy|degree|delay|deliver|demand|demise|denial|dentist|deny|depart|depend|deposit|depth|deputy|derive|describe|desert|design|desk|despair|destroy|detail|detect|develop|device|devote|diagram|dial|diamond|diary|dice|diesel|diet|differ|digital|dignity|dilemma|dinner|dinosaur|direct|dirt|disagree|discover|disease|dish|dismiss|disorder|display|distance|divert|divide|divorce|dizzy|doctor|document|dog|doll|dolphin|domain|donate|donkey|donor|door|dose|double|dove|draft|dragon|drama|drastic|draw|dream|dress|drift|drill|drink|drip|drive|drop|drum|dry|duck|dumb|dune|during|dust|dutch|duty|dwarf|dynamic|eager|eagle|early|earn|earth|easily|east|easy|echo|ecology|economy|edge|edit|educate|effort|egg|eight|either|elbow|elder|electric|elegant|element|elephant|elevator|elite|else|embark|embody|embrace|emerge|emotion|employ|empower|empty|enable|enact|end|endless|endorse|enemy|energy|enforce|engage|engine|enhance|enjoy|enlist|enough|enrich|enroll|ensure|enter|entire|entry|envelope|episode|equal|equip|era|erase|erode|erosion|error|erupt|escape|essay|essence|estate|eternal|ethics|evidence|evil|evoke|evolve|exact|example|excess|exchange|excite|exclude|excuse|execute|exercise|exhaust|exhibit|exile|exist|exit|exotic|expand|expect|expire|explain|expose|express|extend|extra|eye|eyebrow|fabric|face|faculty|fade|faint|faith|fall|false|fame|family|famous|fan|fancy|fantasy|farm|fashion|fat|fatal|father|fatigue|fault|favorite|feature|february|federal|fee|feed|feel|female|fence|festival|fetch|fever|few|fiber|fiction|field|figure|file|film|filter|final|find|fine|finger|finish|fire|firm|first|fiscal|fish|fit|fitness|fix|flag|flame|flash|flat|flavor|flee|flight|flip|float|flock|floor|flower|fluid|flush|fly|foam|focus|fog|foil|fold|follow|food|foot|force|forest|forget|fork|fortune|forum|forward|fossil|foster|found|fox|fragile|frame|frequent|fresh|friend|fringe|frog|front|frost|frown|frozen|fruit|fuel|fun|funny|furnace|fury|future|gadget|gain|galaxy|gallery|game|gap|garage|garbage|garden|garlic|garment|gas|gasp|gate|gather|gauge|gaze|general|genius|genre|gentle|genuine|gesture|ghost|giant|gift|giggle|ginger|giraffe|girl|give|glad|glance|glare|glass|glide|glimpse|globe|gloom|glory|glove|glow|glue|goat|goddess|gold|good|goose|gorilla|gospel|gossip|govern|gown|grab|grace|grain|grant|grape|grass|gravity|great|green|grid|grief|grit|grocery|group|grow|grunt|guard|guess|guide|guilt|guitar|gun|gym|habit|hair|half|hammer|hamster|hand|happy|harbor|hard|harsh|harvest|hat|have|hawk|hazard|head|health|heart|heavy|hedgehog|height|hello|helmet|help|hen|hero|hidden|high|hill|hint|hip|hire|history|hobby|hockey|hold|hole|holiday|hollow|home|honey|hood|hope|horn|horror|horse|hospital|host|hotel|hour|hover|hub|huge|human|humble|humor|hundred|hungry|hunt|hurdle|hurry|hurt|husband|hybrid|ice|icon|idea|identify|idle|ignore|ill|illegal|illness|image|imitate|immense|immune|impact|impose|improve|impulse|inch|include|income|increase|index|indicate|indoor|industry|infant|inflict|inform|inhale|inherit|initial|inject|injury|inmate|inner|innocent|input|inquiry|insane|insect|inside|inspire|install|intact|interest|into|invest|invite|involve|iron|island|isolate|issue|item|ivory|jacket|jaguar|jar|jazz|jealous|jeans|jelly|jewel|job|join|joke|journey|joy|judge|juice|jump|jungle|junior|junk|just|kangaroo|keen|keep|ketchup|key|kick|kid|kidney|kind|kingdom|kiss|kit|kitchen|kite|kitten|kiwi|knee|knife|knock|know|lab|label|labor|ladder|lady|lake|lamp|language|laptop|large|later|latin|laugh|laundry|lava|law|lawn|lawsuit|layer|lazy|leader|leaf|learn|leave|lecture|left|leg|legal|legend|leisure|lemon|lend|length|lens|leopard|lesson|letter|level|liar|liberty|library|license|life|lift|light|like|limb|limit|link|lion|liquid|list|little|live|lizard|load|loan|lobster|local|lock|logic|lonely|long|loop|lottery|loud|lounge|love|loyal|lucky|luggage|lumber|lunar|lunch|luxury|lyrics|machine|mad|magic|magnet|maid|mail|main|major|make|mammal|man|manage|mandate|mango|mansion|manual|maple|marble|march|margin|marine|market|marriage|mask|mass|master|match|material|math|matrix|matter|maximum|maze|meadow|mean|measure|meat|mechanic|medal|media|melody|melt|member|memory|mention|menu|mercy|merge|merit|merry|mesh|message|metal|method|middle|midnight|milk|million|mimic|mind|minimum|minor|minute|miracle|mirror|misery|miss|mistake|mix|mixed|mixture|mobile|model|modify|mom|moment|monitor|monkey|monster|month|moon|moral|more|morning|mosquito|mother|motion|motor|mountain|mouse|move|movie|much|muffin|mule|multiply|muscle|museum|mushroom|music|must|mutual|myself|mystery|myth|naive|name|napkin|narrow|nasty|nation|nature|near|neck|need|negative|neglect|neither|nephew|nerve|nest|net|network|neutral|never|news|next|nice|night|noble|noise|nominee|noodle|normal|north|nose|notable|note|nothing|notice|novel|now|nuclear|number|nurse|nut|oak|obey|object|oblige|obscure|observe|obtain|obvious|occur|ocean|october|odor|off|offer|office|often|oil|okay|old|olive|olympic|omit|once|one|onion|online|only|open|opera|opinion|oppose|option|orange|orbit|orchard|order|ordinary|organ|orient|original|orphan|ostrich|other|outdoor|outer|output|outside|oval|oven|over|own|owner|oxygen|oyster|ozone|pact|paddle|page|pair|palace|palm|panda|panel|panic|panther|paper|parade|parent|park|parrot|party|pass|patch|path|patient|patrol|pattern|pause|pave|payment|peace|peanut|pear|peasant|pelican|pen|penalty|pencil|people|pepper|perfect|permit|person|pet|phone|photo|phrase|physical|piano|picnic|picture|piece|pig|pigeon|pill|pilot|pink|pioneer|pipe|pistol|pitch|pizza|place|planet|plastic|plate|play|please|pledge|pluck|plug|plunge|poem|poet|point|polar|pole|police|pond|pony|pool|popular|portion|position|possible|post|potato|pottery|poverty|powder|power|practice|praise|predict|prefer|prepare|present|pretty|prevent|price|pride|primary|print|priority|prison|private|prize|problem|process|produce|profit|program|project|promote|proof|property|prosper|protect|proud|provide|public|pudding|pull|pulp|pulse|pumpkin|punch|pupil|puppy|purchase|purity|purpose|purse|push|put|puzzle|pyramid|quality|quantum|quarter|question|quick|quit|quiz|quote|rabbit|raccoon|race|rack|radar|radio|rail|rain|raise|rally|ramp|ranch|random|range|rapid|rare|rate|rather|raven|raw|razor|ready|real|reason|rebel|rebuild|recall|receive|recipe|record|recycle|reduce|reflect|reform|refuse|region|regret|regular|reject|relax|release|relief|rely|remain|remember|remind|remove|render|renew|rent|reopen|repair|repeat|replace|report|require|rescue|resemble|resist|resource|response|result|retire|retreat|return|reunion|reveal|review|reward|rhythm|rib|ribbon|rice|rich|ride|ridge|rifle|right|rigid|ring|riot|ripple|risk|ritual|rival|river|road|roast|robot|robust|rocket|romance|roof|rookie|room|rose|rotate|rough|round|route|royal|rubber|rude|rug|rule|run|runway|rural|sad|saddle|sadness|safe|sail|salad|salmon|salon|salt|salute|same|sample|sand|satisfy|satoshi|sauce|sausage|save|say|scale|scan|scare|scatter|scene|scheme|school|science|scissors|scorpion|scout|scrap|screen|script|scrub|sea|search|season|seat|second|secret|section|security|seed|seek|segment|select|sell|seminar|senior|sense|sentence|series|service|session|settle|setup|seven|shadow|shaft|shallow|share|shed|shell|sheriff|shield|shift|shine|ship|shiver|shock|shoe|shoot|shop|short|shoulder|shove|shrimp|shrug|shuffle|shy|sibling|sick|side|siege|sight|sign|silent|silk|silly|silver|similar|simple|since|sing|siren|sister|situate|six|size|skate|sketch|ski|skill|skin|skirt|skull|slab|slam|sleep|slender|slice|slide|slight|slim|slogan|slot|slow|slush|small|smart|smile|smoke|smooth|snack|snake|snap|sniff|snow|soap|soccer|social|sock|soda|soft|solar|soldier|solid|solution|solve|someone|song|soon|sorry|sort|soul|sound|soup|source|south|space|spare|spatial|spawn|speak|special|speed|spell|spend|sphere|spice|spider|spike|spin|spirit|split|spoil|sponsor|spoon|sport|spot|spray|spread|spring|spy|square|squeeze|squirrel|stable|stadium|staff|stage|stairs|stamp|stand|start|state|stay|steak|steel|stem|step|stereo|stick|still|sting|stock|stomach|stone|stool|story|stove|strategy|street|strike|strong|struggle|student|stuff|stumble|style|subject|submit|subway|success|such|sudden|suffer|sugar|suggest|suit|summer|sun|sunny|sunset|super|supply|supreme|sure|surface|surge|surprise|surround|survey|suspect|sustain|swallow|swamp|swap|swarm|swear|sweet|swift|swim|swing|switch|sword|symbol|symptom|syrup|system|table|tackle|tag|tail|talent|talk|tank|tape|target|task|taste|tattoo|taxi|teach|team|tell|ten|tenant|tennis|tent|term|test|text|thank|that|theme|then|theory|there|they|thing|this|thought|three|thrive|throw|thumb|thunder|ticket|tide|tiger|tilt|timber|time|tiny|tip|tired|tissue|title|toast|tobacco|today|toddler|toe|together|toilet|token|tomato|tomorrow|tone|tongue|tonight|tool|tooth|top|topic|topple|torch|tornado|tortoise|toss|total|tourist|toward|tower|town|toy|track|trade|traffic|tragic|train|transfer|trap|trash|travel|tray|treat|tree|trend|trial|tribe|trick|trigger|trim|trip|trophy|trouble|truck|true|truly|trumpet|trust|truth|try|tube|tuition|tumble|tuna|tunnel|turkey|turn|turtle|twelve|twenty|twice|twin|twist|two|type|typical|ugly|umbrella|unable|unaware|uncle|uncover|under|undo|unfair|unfold|unhappy|uniform|unique|unit|universe|unknown|unlock|until|unusual|unveil|update|upgrade|uphold|upon|upper|upset|urban|urge|usage|use|used|useful|useless|usual|utility|vacant|vacuum|vague|valid|valley|valve|van|vanish|vapor|various|vast|vault|vehicle|velvet|vendor|venture|venue|verb|verify|version|very|vessel|veteran|viable|vibrant|vicious|victory|video|view|village|vintage|violin|virtual|virus|visa|visit|visual|vital|vivid|vocal|voice|void|volcano|volume|vote|voyage|wage|wagon|wait|walk|wall|walnut|want|warfare|warm|warrior|wash|wasp|waste|water|wave|way|wealth|weapon|wear|weasel|weather|web|wedding|weekend|weird|welcome|west|wet|whale|what|wheat|wheel|when|where|whip|whisper|wide|width|wife|wild|will|win|window|wine|wing|wink|winner|winter|wire|wisdom|wise|wish|witness|wolf|woman|wonder|wood|wool|word|work|world|worry|worth|wrap|wreck|wrestle|wrist|write|wrong|yard|year|yellow|you|young|youth|zebra|zero|zone|zoo",
        Ze = Re.split("|").reduce((e, t, n) => ((e[t] = n), e), {}),
        De = (e) =>
          (0, l.sha256)(e)[0]
            .toString(2)
            .padStart(8, "0")
            .slice(0, e.length / 4),
        Oe = (e) => {
          const t = e
            .normalize("NFKD")
            .split(" ")
            .filter((e) => !!e);
          if (t.length % 3 !== 0 || t.length < 12 || t.length > 24)
            throw new Error(Le);
          const n = t
              .map((e) => {
                if (!(e in Ze)) throw new Error(Le);
                const t = Ze[e];
                return t.toString(2).padStart(11, "0");
              })
              .join(""),
            r = n.length - t.length / 3,
            s = n.slice(0, r),
            i = n.slice(r),
            a = s.match(/(.{1,8})/g),
            o =
              null === a || void 0 === a
                ? void 0
                : a.map((e) => parseInt(e, 2));
          if (!o || o.length % 4 !== 0 || o.length < 16 || o.length > 32)
            throw new Error(Ce);
          const l = Uint8Array.from(o);
          if (De(l) !== i) throw new Error(Ke);
          return l;
        };
      function Ge(e) {
        if (e.length % 4 !== 0 || e.length < 16 || e.length > 32)
          throw new Error(Ce);
        const t = Array.from(e)
            .map((e) => e.toString(2).padStart(8, "0"))
            .join(""),
          n = t + De(e),
          r = n.match(/(.{1,11})/g),
          s =
            null === r || void 0 === r ? void 0 : r.map((e) => parseInt(e, 2));
        if (!s || s.length < 12)
          throw new Error("Unable to map entropy to mnemonic");
        const i = Re.split("|"),
          a = s.map((e) => i[e]);
        return a.join(" ");
      }
      var We = function (e) {
          return (
            void 0 === e && (e = 128),
            Ge((0, i.randomBytes)(e / 8))
              .toString()
              .trim()
          );
        },
        He = (e) => {
          try {
            Oe(e);
          } catch (t) {
            return { result: !1, error: t };
          }
          return { result: !0, error: null };
        },
        $e = function (e, t) {
          void 0 === t && (t = "");
          const n = He(e);
          if (!n.result)
            throw new Error(
              "Invalid bip39 mnemonic specified: " + n.error.toString(),
            );
          const r = Oe(e),
            s = new TextEncoder().encode("mnemonic" + t);
          return { entropy: r, salt: s };
        },
        Ve = async function (e, t) {
          void 0 === t && (t = "");
          const { entropy: n, salt: r } = $e(e, t),
            s = await (0, c.pbkdf2Async)(a.sha512, n, r, {
              c: 2048,
              dkLen: 64,
            });
          return s.slice(0, 32);
        },
        Je = function (e, t) {
          void 0 === t && (t = "");
          const { entropy: n, salt: r } = $e(e, t),
            s = (0, c.pbkdf2)(a.sha512, n, r, { c: 2048, dkLen: 64 });
          return s.slice(0, 32);
        },
        Qe = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return new TextEncoder().encode(String.raw(e, ...n));
        },
        et = (e) => {
          (0, s.keccakP)(
            new Uint32Array(
              e.buffer,
              e.byteOffset,
              Math.floor(e.byteLength / 4),
            ),
            24,
          );
        },
        tt = 166,
        nt = 1,
        rt = 2,
        st = 4,
        it = 8,
        at = 16,
        ot = 32,
        lt = class {
          constructor(e) {
            (g(this, "state"),
              g(this, "pos"),
              g(this, "pos_begin"),
              g(this, "cur_flags"));
            const t = new Uint8Array(200);
            ((t[0] = 1),
              (t[1] = tt + 2),
              (t[2] = 1),
              (t[3] = 0),
              (t[4] = 1),
              (t[5] = 96),
              t.set(Qe`STROBEv1.0.2`, 6),
              et(t),
              (this.state = t),
              (this.pos = 0),
              (this.pos_begin = 0),
              (this.cur_flags = 0),
              this.meta_ad(e, !1));
          }
          meta_ad(e, t) {
            (this.begin_op(at | rt, t), this.absorb(e));
          }
          ad(e, t) {
            (this.begin_op(rt, t), this.absorb(e));
          }
          prf(e, t) {
            (this.begin_op(nt | rt | st, t), this.squeeze(e));
          }
          key(e, t) {
            (this.begin_op(rt | st, t), this.overwrite(e));
          }
          clone() {
            const e = new lt(new Uint8Array(0));
            return (
              e.state.set(this.state),
              (e.pos = this.pos),
              (e.pos_begin = this.pos_begin),
              (e.cur_flags = this.cur_flags),
              e
            );
          }
          cloneState() {
            return {
              state: this.state.slice(),
              pos: this.pos,
              pos_begin: this.pos_begin,
              cur_flags: this.cur_flags,
            };
          }
          run_f() {
            ((this.state[this.pos] ^= this.pos_begin),
              (this.state[this.pos + 1] ^= 4),
              (this.state[tt + 1] ^= 128),
              et(this.state),
              (this.pos = 0),
              (this.pos_begin = 0));
          }
          absorb(e) {
            for (let t = 0; t < e.length; t++)
              ((this.state[this.pos] ^= e[t]),
                this.pos++,
                this.pos === tt && this.run_f());
          }
          overwrite(e) {
            for (let t = 0; t < e.length; t++)
              ((this.state[this.pos] = e[t]),
                this.pos++,
                this.pos === tt && this.run_f());
          }
          squeeze(e) {
            for (let t = 0; t < e.length; t++)
              ((e[t] = this.state[this.pos]),
                (this.state[this.pos] = 0),
                this.pos++,
                this.pos === tt && this.run_f());
          }
          begin_op(e, t) {
            if (t) {
              if (this.cur_flags !== e)
                throw new Error(
                  `You tried to continue op ${this.cur_flags.toString(2)} but changed flags to ${e.toString(2)}`,
                );
              return;
            }
            if (0 !== (e & it))
              throw new Error(
                "You used the T flag, which this implementation doesn't support",
              );
            const n = this.pos_begin;
            ((this.pos_begin = this.pos + 1),
              (this.cur_flags = e),
              this.absorb(new Uint8Array([n, e])));
            const r = 0 !== (e & (st | ot));
            r && 0 !== this.pos && this.run_f();
          }
        },
        ct = Qe`Merlin v1.0`,
        ht = (e) => {
          const t = new Uint8Array(8);
          return (
            (t[0] = Number(255n & e)),
            (t[1] = Number((e >> 8n) & 255n)),
            (t[2] = Number((e >> 16n) & 255n)),
            (t[3] = Number((e >> 24n) & 255n)),
            (t[4] = Number((e >> 32n) & 255n)),
            (t[5] = Number((e >> 40n) & 255n)),
            (t[6] = Number((e >> 48n) & 255n)),
            (t[7] = Number((e >> 56n) & 255n)),
            t
          );
        },
        ut = (e) => {
          if (e > 4294967295n)
            throw new Error("encode_usize_as_u32: x > 4294967295n");
          const t = new Uint8Array(4);
          return (
            (t[0] = 255 & e),
            (t[1] = (e >> 8) & 255),
            (t[2] = (e >> 16) & 255),
            (t[3] = (e >> 24) & 255),
            t
          );
        },
        dt = class {
          constructor(e) {
            (g(this, "strobe"),
              (this.strobe = new lt(ct)),
              this.append_message(Qe`dom-sep`, e));
          }
          cloneStrobe() {
            return this.strobe.clone();
          }
          append_message(e, t) {
            const n = ut(t.length);
            (this.strobe.meta_ad(e, !1),
              this.strobe.meta_ad(n, !0),
              this.strobe.ad(t, !1));
          }
          append_u64(e, t) {
            this.append_message(e, ht(t));
          }
          challenge_bytes(e, t) {
            const n = ut(t.length);
            (this.strobe.meta_ad(e, !1),
              this.strobe.meta_ad(n, !0),
              this.strobe.prf(t, !1));
          }
          build_rng() {
            return new gt(this.strobe.clone());
          }
          fill_bytes(e) {
            const t = ut(e.length);
            (this.strobe.meta_ad(t, !0), this.strobe.prf(e, !1));
          }
          witness_bytes_rng(e, t, n) {
            let r = this.build_rng();
            for (const i of n) r = r.rekey_with_witness_bytes(e, i);
            const s = r.finalize();
            s.fill_bytes(t);
          }
          witness_bytes(e, t, n) {
            this.witness_bytes_rng(e, t, n);
          }
          witness_scalar(e, t) {
            const n = new Uint8Array(64);
            this.witness_bytes(e, n, t);
          }
        },
        gt = class {
          constructor(e) {
            if ((g(this, "strobe"), e instanceof Uint8Array))
              this.strobe = new lt(e);
            else {
              if (!(e instanceof lt))
                throw new Error(
                  "TranscriptRngBuilder constructor: label is not Uint8Array or Strobe128",
                );
              this.strobe = e;
            }
          }
          cloneStrobe() {
            return this.strobe.clone();
          }
          rekey_with_witness_bytes(e, t) {
            const n = ut(t.length);
            return (
              this.strobe.meta_ad(e, !1),
              this.strobe.meta_ad(n, !0),
              this.strobe.key(t, !1),
              this
            );
          }
          finalize(e) {
            const t = e ? e() : (0, i.randomBytes)(32);
            return (
              this.strobe.meta_ad(Qe`rng`, !1),
              this.strobe.key(t, !1),
              new ft(this.strobe)
            );
          }
        },
        ft = class {
          constructor(e) {
            (g(this, "strobe"), (this.strobe = e));
          }
          cloneStrobe() {
            return this.strobe.clone();
          }
          rekey_with_witness_bytes(e, t) {
            const n = ut(t.length);
            (this.strobe.meta_ad(e, !1),
              this.strobe.meta_ad(n, !0),
              this.strobe.key(t, !1));
          }
          rekey_with_witness_u64(e, t) {
            this.rekey_with_witness_bytes(e, ht(t));
          }
          fill_bytes(e) {
            const t = ut(e.length);
            (this.strobe.meta_ad(t, !1), this.strobe.prf(e, !1));
          }
        },
        pt =
          "bottom drive obey lake curtain smoke basket hold race lonely fit walk",
        bt = /^\d+$/,
        mt = (e) => {
          const t = [],
            [n, r = ""] = e.split("///"),
            s = n.split("//");
          let i = s.shift() || pt;
          const a = i.split("/");
          if (((i = a.shift() || ""), !i))
            throw new Error("Invalid mnemonic: " + e);
          a.length && t.push(...a.map((e) => ({ value: e, cc: wt(e) })));
          for (const o of s) {
            const e = o.split("/"),
              n = e.shift();
            if (!n) throw new Error("Invalid hard derivation");
            (t.push({ value: n, hard: !0, cc: wt(n) }),
              t.push(...e.map((e) => ({ value: e, cc: wt(e) }))));
          }
          return { mnemonic: i, password: r, derivations: t };
        },
        yt = new TextEncoder(),
        wt = (e) => {
          const t = bt.test(e) ? BigInt(e) : e;
          let n;
          n =
            "bigint" === typeof t
              ? Ae(t, { bitLength: 256, isLe: !0 })
              : Ee(t)
                ? Se(t)
                : Ue(yt.encode(t));
          const r = new Uint8Array(32);
          return (
            r.set(n.length > 32 ? (0, o.blake2b)(n, { dkLen: 32 }) : n, 0),
            r
          );
        },
        kt = (e, t) => {
          const n = new dt(Qe`SchnorrRistrettoHDKD`);
          (n.append_message(Qe`sign-bytes`, new Uint8Array()),
            n.append_message(Qe`chain-code`, t),
            n.append_message(Qe`secret-key`, e.secretKey.key.bytes.slice()));
          const r = new Uint8Array(32);
          n.challenge_bytes(Qe`HDKD-hard`, r);
          const s = new Uint8Array(32);
          return (
            n.challenge_bytes(Qe`HDKD-chaincode`, s),
            zt.FromMiniSecret(r)
          );
        },
        vt = (e, t) => {
          const n = new dt(Qe`SchnorrRistrettoHDKD`);
          (n.append_message(Qe`sign-bytes`, new Uint8Array()),
            n.append_message(Qe`chain-code`, t),
            n.append_message(Qe`public-key`, e.publicKey.key.slice()));
          const r = new Uint8Array(64);
          n.challenge_bytes(Qe`HDKD-scalar`, r);
          const s = R.FromBytesModOrderWide(r),
            i = new Uint8Array(32);
          n.challenge_bytes(Qe`HDKD-chaincode`, i);
          const a = new Uint8Array(32);
          n.witness_bytes(Qe`HDKD-nonce`, a, [
            e.secretKey.nonce.slice(),
            e.secretKey.ToBytes().slice(),
          ]);
          const o = R.FromBytes(E(I(M(e.secretKey.key.bytes.slice()), M(s)))),
            l = we.FromScalarAndNonce(o, a),
            c = l.ToPublicKey();
          return new zt(c, l);
        },
        jt = (e, t) => {
          for (const { hard: n, cc: r } of t) e = n ? kt(e, r) : vt(e, r);
          return e;
        },
        xt = (e) => {
          const { mnemonic: t, password: n, derivations: r } = mt(e);
          return jt(zt.FromMiniSecret(Je(t, n)), r);
        },
        qt = async (e) => {
          const { mnemonic: t, password: n, derivations: r } = mt(e);
          return jt(zt.FromMiniSecret(await Ve(t, n)), r);
        },
        zt = class {
          constructor(e, t) {
            (g(this, "publicKey"),
              g(this, "secretKey"),
              (this.publicKey = e),
              (this.secretKey = t));
          }
          static FromBytes(e) {
            const t = we.FromBytes(e.slice(0, 64)),
              n = ke.FromBytes(e.slice(64));
            return new zt(n, t);
          }
          static FromSecretKeyBytes(e) {
            if (64 !== e.length)
              throw new Error(
                "Expected secret key with 64 bytes, found " + e.length,
              );
            const t = we.FromBytes(e),
              n = t.ToPublicKey();
            return new zt(n, t);
          }
          static FromUri(e) {
            return xt(e);
          }
          static async FromUriAsync(e) {
            return await qt(e);
          }
          static FromMiniSecret(e) {
            const t = we.FromMiniSecret(e),
              n = t.ToPublicKey();
            return new zt(n, t);
          }
          ToBytes() {
            const e = new Uint8Array(96);
            return (
              e.set(this.secretKey.ToBytes()),
              e.set(this.publicKey.key, 64),
              e
            );
          }
        },
        Bt = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        At = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        _t = (0, h.default)(Bt),
        Et = ((0, h.default)(At), new Uint8Array([83, 83, 53, 56, 80, 82, 69])),
        Mt = (e) => (0, o.blake2b)(Te([Et, e]), { dkLen: 64 }),
        St = function (e, t) {
          if (
            (void 0 === t && (t = 42),
            t < 0 || t > 16383 || [46, 47].includes(t))
          )
            throw new Error(
              `ss58Format is not valid, received ${typeof t} "${t}"`,
            );
          const n = [1, 2, 4, 8, 32, 33];
          if (!n.includes(e.length))
            throw new Error(
              `key length is not valid, received ${e.length}, valid values are ${n.join(", ")}`,
            );
          const r =
              t < 64
                ? new Uint8Array([t])
                : new Uint8Array([
                    ((252 & t) >> 2) | 64,
                    (t >> 8) | ((3 & t) << 6),
                  ]),
            s = Te([r, e]);
          return _t.encode(
            Te([s, Mt(s).subarray(0, [32, 33].includes(e.length) ? 2 : 1)]),
          );
        },
        Tt = function (e, t) {
          void 0 === t && (t = !1);
          const n = 0 !== (64 & e[0]) ? 2 : 1,
            r =
              1 === n
                ? e[0]
                : ((63 & e[0]) << 2) | (e[1] >> 6) | ((63 & e[1]) << 8),
            s = [34 + n, 35 + n].includes(e.length),
            i = e.length - (s ? 2 : 1);
          let a = !1;
          if (!t) {
            const t = Mt(e.subarray(0, i));
            a =
              0 === (128 & e[0]) &&
              ![46, 47].includes(e[0]) &&
              (s
                ? e[e.length - 2] === t[0] && e[e.length - 1] === t[1]
                : e[e.length - 1] === t[0]);
          }
          return [a, i, n, r];
        };
      function It(e, t, n) {
        void 0 === n && (n = -1);
        let r = null;
        try {
          if (Ee(e)) return Se(e);
          const s = _t.decode(e),
            i = [3, 4, 6, 10, 35, 36, 37, 38];
          if (!i.includes(s.length))
            throw (
              (r = new Error(
                `key length is not valid, decoded key length is ${s.length}, valid values are ${i.join(", ")}`,
              )),
              r
            );
          const [a, o, l, c] = Tt(s, t);
          if (!t && !a)
            throw ((r = new Error("Invalid decoded address checksum")), r);
          if (![-1, c].includes(n))
            throw (
              (r = new Error(`Expected ss58Format ${n}, received ${c}`)),
              r
            );
          return s.slice(l, o);
        } catch (s) {
          throw null != r ? r : new Error(`Decoding ${e}: ${s.message}`);
        }
      }
      var Xt = new TextEncoder(),
        Nt = (e) =>
          "string" === typeof e ? (Ee(e) ? Se(e) : Xt.encode(e)) : e,
        Ft = (e) => {
          if (e instanceof Uint8Array) return e;
          if (Ee(e)) return Se(e);
          throw new Error(
            "Invalid message: should be Uint8Array or hex string",
          );
        },
        Yt = (e) => ({
          get publicKey() {
            return e.publicKey.key.slice();
          },
          address: St(e.publicKey.key),
          prefixedAddress(t) {
            return (void 0 === t && (t = 42), St(e.publicKey.key, t));
          },
          sign(t) {
            return e.secretKey.sign(Nt(t), e.publicKey).ToBytes();
          },
          verify(t, n) {
            return e.publicKey.verify(Nt(t), Ft(n));
          },
          signer: {
            async sign(t) {
              const n = Se(t.signerPayloadHex),
                r = e.secretKey.sign(n, e.publicKey).ToBytes(),
                s = Me(r);
              return {
                signature: "0x01" + s.substring(2),
                signatureType: "sr25519",
              };
            },
          },
        }),
        Pt = (e, t, n) => {
          let r;
          if (n instanceof Uint8Array) r = n;
          else {
            if ("string" !== typeof n)
              throw new Error(
                "Invalid signerAddressOrPublicKey: should be Uint8Array or hex string",
              );
            r = Ee(n) ? Se(n) : It(n);
          }
          const s = ke.FromBytes(r);
          return s.verify(Nt(e), Ft(t));
        };
      t.verifySignature = Pt;
      var Ut = (t.dangerouslyParseUriAndGetFullKeypair = xt),
        Lt = (t.Sr25519Account = {
          fromUri: (e) => {
            const t = zt.FromUri(e);
            return Yt(t);
          },
          verifySignature: Pt,
          other: {
            fromMiniSecret: (e) => {
              const t = zt.FromMiniSecret(Ft(e));
              return Yt(t);
            },
            fromSecretKeyBytes: (e) => {
              const t = zt.FromSecretKeyBytes(Ft(e));
              return Yt(t);
            },
            fromKeypair: Yt,
            mnemonicToMiniSecret: Je,
            dangerouslyParseUriAndGetFullKeypair: Ut,
          },
          utils: { encodeSubstrateAddress: St, decodeSubstrateAddress: It },
          generateMnemonic: We,
        });
      ((t.Account = Lt), (t.default = Lt));
    },
    9911: function (e, t, n) {
      "use strict";
      function r(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var r = 0; r < e.length; r++) {
          var s = e.charAt(r),
            i = s.charCodeAt(0);
          if (255 !== t[i]) throw new TypeError(s + " is ambiguous");
          t[i] = r;
        }
        var a = e.length,
          o = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function h(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var n = 0,
            r = 0,
            s = 0,
            i = t.length;
          while (s !== i && 0 === t[s]) (s++, n++);
          var l = ((i - s) * c + 1) >>> 0,
            h = new Uint8Array(l);
          while (s !== i) {
            for (
              var u = t[s], d = 0, g = l - 1;
              (0 !== u || d < r) && -1 !== g;
              g--, d++
            )
              ((u += (256 * h[g]) >>> 0),
                (h[g] = (u % a) >>> 0),
                (u = (u / a) >>> 0));
            if (0 !== u) throw new Error("Non-zero carry");
            ((r = d), s++);
          }
          var f = l - r;
          while (f !== l && 0 === h[f]) f++;
          for (var p = o.repeat(n); f < l; ++f) p += e.charAt(h[f]);
          return p;
        }
        function u(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var n = 0,
            r = 0,
            s = 0;
          while (e[n] === o) (r++, n++);
          var i = ((e.length - n) * l + 1) >>> 0,
            c = new Uint8Array(i);
          while (e[n]) {
            var h = e.charCodeAt(n);
            if (h > 255) return;
            var u = t[h];
            if (255 === u) return;
            for (var d = 0, g = i - 1; (0 !== u || d < s) && -1 !== g; g--, d++)
              ((u += (a * c[g]) >>> 0),
                (c[g] = (u % 256) >>> 0),
                (u = (u / 256) >>> 0));
            if (0 !== u) throw new Error("Non-zero carry");
            ((s = d), n++);
          }
          var f = i - s;
          while (f !== i && 0 === c[f]) f++;
          var p = new Uint8Array(r + (i - f)),
            b = r;
          while (f !== i) p[b++] = c[f++];
          return p;
        }
        function d(e) {
          var t = u(e);
          if (t) return t;
          throw new Error("Non-base" + a + " character");
        }
        return { encode: h, decodeUnsafe: u, decode: d };
      }
      e.exports = r;
    },
  },
]);
