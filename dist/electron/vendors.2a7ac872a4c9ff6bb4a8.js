(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [248],
  {
    3018: function (e, t, r) {
      (function (t) {
        e.exports = v;
        var n,
          a = r(2932),
          i = r(3078),
          s = r(2764),
          o = r(4282),
          f = r(3418),
          c = r(4983).DiffieHellman,
          u = r(3371),
          h = r(3020),
          p = r(3019);
        try {
          n = r(6028);
        } catch (m) {}
        var d = u.InvalidAlgorithmError,
          l = u.KeyParseError,
          g = {};
        function v(e) {
          (a.object(e, "options"),
            a.arrayOfObject(e.parts, "options.parts"),
            a.string(e.type, "options.type"),
            a.optionalString(e.comment, "options.comment"));
          var t = i.info[e.type];
          if ("object" !== typeof t) throw new d(e.type);
          for (var r, n = {}, s = 0; s < e.parts.length; ++s) {
            var o = e.parts[s];
            n[o.name] = o;
          }
          if (
            ((this.type = e.type),
            (this.parts = e.parts),
            (this.part = n),
            (this.comment = void 0),
            (this.source = e.source),
            (this._rfc4253Cache = e._rfc4253Cache),
            (this._hashCache = {}),
            (this.curve = void 0),
            "ecdsa" === this.type)
          ) {
            var f = this.part.curve.data.toString();
            ((this.curve = f), (r = i.curves[f].size));
          } else if ("ed25519" === this.type || "curve25519" === this.type)
            ((r = 256), (this.curve = "curve25519"));
          else {
            var c = this.part[t.sizePart];
            ((r = c.data.length), (r = 8 * r - h.countZeros(c.data)));
          }
          this.size = r;
        }
        ((g["auto"] = r(6029)),
          (g["pem"] = r(3550)),
          (g["pkcs1"] = r(4984)),
          (g["pkcs8"] = r(4284)),
          (g["rfc4253"] = r(3551)),
          (g["ssh"] = r(6031)),
          (g["ssh-private"] = r(4660)),
          (g["openssh"] = g["ssh-private"]),
          (g["dnssec"] = r(4985)),
          (g["putty"] = r(4986)),
          (g["ppk"] = g["putty"]),
          (v.formats = g),
          (v.prototype.toBuffer = function (e, t) {
            return (
              void 0 === e && (e = "ssh"),
              a.string(e, "format"),
              a.object(g[e], "formats[format]"),
              a.optionalObject(t, "options"),
              "rfc4253" === e
                ? (void 0 === this._rfc4253Cache &&
                    (this._rfc4253Cache = g["rfc4253"].write(this)),
                  this._rfc4253Cache)
                : g[e].write(this, t)
            );
          }),
          (v.prototype.toString = function (e, t) {
            return this.toBuffer(e, t).toString();
          }),
          (v.prototype.hash = function (e, t) {
            if (
              (a.string(e, "algorithm"),
              a.optionalString(t, "type"),
              void 0 === t && (t = "ssh"),
              (e = e.toLowerCase()),
              void 0 === i.hashAlgs[e])
            )
              throw new d(e);
            var r,
              n = e + "||" + t;
            if (this._hashCache[n]) return this._hashCache[n];
            if ("ssh" === t) r = this.toBuffer("rfc4253");
            else {
              if ("spki" !== t)
                throw new Error("Hash type " + t + " not supported");
              r = g.pkcs8.pkcs8ToBuffer(this);
            }
            var o = s.createHash(e).update(r).digest();
            return ((this._hashCache[n] = o), o);
          }),
          (v.prototype.fingerprint = function (e, t) {
            (void 0 === e && (e = "sha256"),
              void 0 === t && (t = "ssh"),
              a.string(e, "algorithm"),
              a.string(t, "type"));
            var r = {
              type: "key",
              hash: this.hash(e, t),
              algorithm: e,
              hashType: t,
            };
            return new o(r);
          }),
          (v.prototype.defaultHashAlgorithm = function () {
            var e = "sha1";
            return (
              "rsa" === this.type && (e = "sha256"),
              "dsa" === this.type && this.size > 1024 && (e = "sha256"),
              "ed25519" === this.type && (e = "sha512"),
              "ecdsa" === this.type &&
                (e =
                  this.size <= 256
                    ? "sha256"
                    : this.size <= 384
                      ? "sha384"
                      : "sha512"),
              e
            );
          }),
          (v.prototype.createVerify = function (e) {
            if (
              (void 0 === e && (e = this.defaultHashAlgorithm()),
              a.string(e, "hash algorithm"),
              "ed25519" === this.type && void 0 !== n)
            )
              return new n.Verifier(this, e);
            if ("curve25519" === this.type)
              throw new Error(
                "Curve25519 keys are not suitable for signing or verification",
              );
            var r, i, o;
            try {
              ((i = e.toUpperCase()), (r = s.createVerify(i)));
            } catch (m) {
              o = m;
            }
            ((void 0 === r ||
              (o instanceof Error &&
                o.message.match(/Unknown message digest/))) &&
              ((i = "RSA-"), (i += e.toUpperCase()), (r = s.createVerify(i))),
              a.ok(r, "failed to create verifier"));
            var c = r.verify.bind(r),
              u = this.toBuffer("pkcs8"),
              h = this.curve,
              p = this;
            return (
              (r.verify = function (r, n) {
                if (f.isSignature(r, [2, 0]))
                  return (
                    r.type === p.type &&
                    (!r.hashAlgorithm || r.hashAlgorithm === e) &&
                    (!r.curve || "ecdsa" !== p.type || r.curve === h) &&
                    c(u, r.toBuffer("asn1"))
                  );
                if ("string" === typeof r || t.isBuffer(r)) return c(u, r, n);
                throw f.isSignature(r, [1, 0])
                  ? new Error(
                      "signature was created by too old a version of sshpk and cannot be verified",
                    )
                  : new TypeError(
                      "signature must be a string, Buffer, or Signature object",
                    );
              }),
              r
            );
          }),
          (v.prototype.createDiffieHellman = function () {
            if ("rsa" === this.type)
              throw new Error("RSA keys do not support Diffie-Hellman");
            return new c(this);
          }),
          (v.prototype.createDH = v.prototype.createDiffieHellman),
          (v.parse = function (e, t, r) {
            ("string" !== typeof e && a.buffer(e, "data"),
              void 0 === t && (t = "auto"),
              a.string(t, "format"),
              "string" === typeof r && (r = { filename: r }),
              a.optionalObject(r, "options"),
              void 0 === r && (r = {}),
              a.optionalString(r.filename, "options.filename"),
              void 0 === r.filename && (r.filename = "(unnamed)"),
              a.object(g[t], "formats[format]"));
            try {
              var n = g[t].read(e, r);
              return (
                n instanceof p && (n = n.toPublic()),
                n.comment || (n.comment = r.filename),
                n
              );
            } catch (m) {
              if ("KeyEncryptedError" === m.name) throw m;
              throw new l(r.filename, t, m);
            }
          }),
          (v.isKey = function (e, t) {
            return h.isCompatible(e, v, t);
          }),
          (v.prototype._sshpkApiVersion = [1, 7]),
          (v._oldVersionDetect = function (e) {
            return (
              a.func(e.toBuffer),
              a.func(e.fingerprint),
              e.createDH
                ? [1, 4]
                : e.defaultHashAlgorithm
                  ? [1, 3]
                  : e.formats["auto"]
                    ? [1, 2]
                    : e.formats["pkcs1"]
                      ? [1, 1]
                      : [1, 0]
            );
          }));
      }).call(this, r(2).Buffer);
    },
    3019: function (e, t, r) {
      e.exports = w;
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3078),
        s = r(2764),
        o = (r(4282), r(3418)),
        f = r(3371),
        c = r(799),
        u = r(3020),
        h = r(4983),
        p = h.generateECDSA,
        d = h.generateED25519,
        l = r(6028),
        g = r(4659),
        v = r(3018),
        m = (f.InvalidAlgorithmError, f.KeyParseError),
        y = (f.KeyEncryptedError, {});
      function w(e) {
        (n.object(e, "options"), v.call(this, e), (this._pubCache = void 0));
      }
      ((y["auto"] = r(6029)),
        (y["pem"] = r(3550)),
        (y["pkcs1"] = r(4984)),
        (y["pkcs8"] = r(4284)),
        (y["rfc4253"] = r(3551)),
        (y["ssh-private"] = r(4660)),
        (y["openssh"] = y["ssh-private"]),
        (y["ssh"] = y["ssh-private"]),
        (y["dnssec"] = r(4985)),
        (y["putty"] = r(4986)),
        c.inherits(w, v),
        (w.formats = y),
        (w.prototype.toBuffer = function (e, t) {
          return (
            void 0 === e && (e = "pkcs1"),
            n.string(e, "format"),
            n.object(y[e], "formats[format]"),
            n.optionalObject(t, "options"),
            y[e].write(this, t)
          );
        }),
        (w.prototype.hash = function (e, t) {
          return this.toPublic().hash(e, t);
        }),
        (w.prototype.fingerprint = function (e, t) {
          return this.toPublic().fingerprint(e, t);
        }),
        (w.prototype.toPublic = function () {
          if (this._pubCache) return this._pubCache;
          for (
            var e = i.info[this.type], t = [], r = 0;
            r < e.parts.length;
            ++r
          ) {
            var n = e.parts[r];
            t.push(this.part[n]);
          }
          return (
            (this._pubCache = new v({
              type: this.type,
              source: this,
              parts: t,
            })),
            this.comment && (this._pubCache.comment = this.comment),
            this._pubCache
          );
        }),
        (w.prototype.derive = function (e) {
          var t, r, i;
          if (
            (n.string(e, "type"), "ed25519" === this.type && "curve25519" === e)
          )
            return (
              (t = this.part.k.data),
              0 === t[0] && (t = t.slice(1)),
              (i = g.box.keyPair.fromSecretKey(new Uint8Array(t))),
              (r = a.from(i.publicKey)),
              new w({
                type: "curve25519",
                parts: [
                  { name: "A", data: u.mpNormalize(r) },
                  { name: "k", data: u.mpNormalize(t) },
                ],
              })
            );
          if ("curve25519" === this.type && "ed25519" === e)
            return (
              (t = this.part.k.data),
              0 === t[0] && (t = t.slice(1)),
              (i = g.sign.keyPair.fromSeed(new Uint8Array(t))),
              (r = a.from(i.publicKey)),
              new w({
                type: "ed25519",
                parts: [
                  { name: "A", data: u.mpNormalize(r) },
                  { name: "k", data: u.mpNormalize(t) },
                ],
              })
            );
          throw new Error(
            "Key derivation not supported from " + this.type + " to " + e,
          );
        }),
        (w.prototype.createVerify = function (e) {
          return this.toPublic().createVerify(e);
        }),
        (w.prototype.createSign = function (e) {
          if (
            (void 0 === e && (e = this.defaultHashAlgorithm()),
            n.string(e, "hash algorithm"),
            "ed25519" === this.type && void 0 !== l)
          )
            return new l.Signer(this, e);
          if ("curve25519" === this.type)
            throw new Error(
              "Curve25519 keys are not suitable for signing or verification",
            );
          var t, r, i;
          try {
            ((r = e.toUpperCase()), (t = s.createSign(r)));
          } catch (p) {
            i = p;
          }
          ((void 0 === t ||
            (i instanceof Error &&
              i.message.match(/Unknown message digest/))) &&
            ((r = "RSA-"), (r += e.toUpperCase()), (t = s.createSign(r))),
            n.ok(t, "failed to create verifier"));
          var f = t.sign.bind(t),
            c = this.toBuffer("pkcs1"),
            u = this.type,
            h = this.curve;
          return (
            (t.sign = function () {
              var t = f(c);
              return (
                "string" === typeof t && (t = a.from(t, "binary")),
                (t = o.parse(t, u, "asn1")),
                (t.hashAlgorithm = e),
                (t.curve = h),
                t
              );
            }),
            t
          );
        }),
        (w.parse = function (e, t, r) {
          ("string" !== typeof e && n.buffer(e, "data"),
            void 0 === t && (t = "auto"),
            n.string(t, "format"),
            "string" === typeof r && (r = { filename: r }),
            n.optionalObject(r, "options"),
            void 0 === r && (r = {}),
            n.optionalString(r.filename, "options.filename"),
            void 0 === r.filename && (r.filename = "(unnamed)"),
            n.object(y[t], "formats[format]"));
          try {
            var a = y[t].read(e, r);
            return (
              n.ok(a instanceof w, "key is not a private key"),
              a.comment || (a.comment = r.filename),
              a
            );
          } catch (i) {
            if ("KeyEncryptedError" === i.name) throw i;
            throw new m(r.filename, t, i);
          }
        }),
        (w.isPrivateKey = function (e, t) {
          return u.isCompatible(e, w, t);
        }),
        (w.generate = function (e, t) {
          switch ((void 0 === t && (t = {}), n.object(t, "options"), e)) {
            case "ecdsa":
              return (
                void 0 === t.curve && (t.curve = "nistp256"),
                n.string(t.curve, "options.curve"),
                p(t.curve)
              );
            case "ed25519":
              return d();
            default:
              throw new Error(
                'Key generation not supported with key type "' + e + '"',
              );
          }
        }),
        (w.prototype._sshpkApiVersion = [1, 6]),
        (w._oldVersionDetect = function (e) {
          return (
            n.func(e.toPublic),
            n.func(e.createSign),
            e.derive
              ? [1, 3]
              : e.defaultHashAlgorithm
                ? [1, 2]
                : e.formats["auto"]
                  ? [1, 1]
                  : [1, 0]
          );
        }));
    },
    3020: function (e, t, r) {
      e.exports = {
        bufferSplit: S,
        addRSAMissing: C,
        calculateDSAPublic: q,
        calculateED25519Public: I,
        calculateX25519Public: P,
        mpNormalize: A,
        mpDenormalize: F,
        ecNormalize: k,
        countZeros: b,
        assertCompatible: g,
        isCompatible: l,
        opensslKeyDeriv: y,
        opensshCipherInfo: O,
        publicFromPrivateECDSA: U,
        zeroPadToLength: _,
        writeBitString: E,
        readBitString: B,
        pbkdf2: w,
      };
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3019),
        s = r(3018),
        o = r(2764),
        f = r(3078),
        c = r(3419),
        u = r(4658),
        h = r(4283).BigInteger,
        p = r(4659),
        d = 3;
      function l(e, t, r) {
        if (null === e || "object" !== typeof e) return !1;
        if (
          (void 0 === r && (r = t.prototype._sshpkApiVersion),
          e instanceof t && t.prototype._sshpkApiVersion[0] == r[0])
        )
          return !0;
        var n = Object.getPrototypeOf(e),
          a = 0;
        while (n.constructor.name !== t.name)
          if (((n = Object.getPrototypeOf(n)), !n || ++a > d)) return !1;
        if (n.constructor.name !== t.name) return !1;
        var i = n._sshpkApiVersion;
        return (
          void 0 === i && (i = t._oldVersionDetect(e)),
          !(i[0] != r[0] || i[1] < r[1])
        );
      }
      function g(e, t, r, a) {
        if (
          (void 0 === a && (a = "object"),
          n.ok(e, a + " must not be null"),
          n.object(e, a + " must be an object"),
          void 0 === r && (r = t.prototype._sshpkApiVersion),
          !(e instanceof t && t.prototype._sshpkApiVersion[0] == r[0]))
        ) {
          var i = Object.getPrototypeOf(e),
            s = 0;
          while (i.constructor.name !== t.name)
            ((i = Object.getPrototypeOf(i)),
              n.ok(i && ++s <= d, a + " must be a " + t.name + " instance"));
          n.strictEqual(
            i.constructor.name,
            t.name,
            a + " must be a " + t.name + " instance",
          );
          var o = i._sshpkApiVersion;
          (void 0 === o && (o = t._oldVersionDetect(e)),
            n.ok(
              o[0] == r[0] && o[1] >= r[1],
              a +
                " must be compatible with " +
                t.name +
                " klass version " +
                r[0] +
                "." +
                r[1],
            ));
        }
      }
      var v = {
          "des-ede3-cbc": { key: 24, iv: 8 },
          "aes-128-cbc": { key: 16, iv: 16 },
          "aes-256-cbc": { key: 32, iv: 16 },
        },
        m = 8;
      function y(e, t, r, i) {
        (n.buffer(t, "salt"),
          n.buffer(r, "passphrase"),
          n.number(i, "iteration count"));
        var s,
          f,
          c,
          u = v[e];
        (n.object(u, "supported cipher"), (t = t.slice(0, m)));
        var h = a.alloc(0);
        while (h.length < u.key + u.iv) {
          ((c = []), f && c.push(f), c.push(r), c.push(t), (s = a.concat(c)));
          for (var p = 0; p < i; ++p)
            s = o.createHash("md5").update(s).digest();
          ((h = a.concat([h, s])), (f = s));
        }
        return { key: h.slice(0, u.key), iv: h.slice(u.key, u.key + u.iv) };
      }
      function w(e, t, r, n, i) {
        var s = a.alloc(t.length + 4);
        t.copy(s);
        var f = 0,
          c = [],
          u = 1;
        while (f < n) {
          var h = p(u++);
          ((f += h.length), c.push(h));
        }
        return a.concat(c).slice(0, n);
        function p(t) {
          s.writeUInt32BE(t, s.length - 4);
          var n = o.createHmac(e, i);
          n.update(s);
          var a = n.digest(),
            f = a,
            c = 1;
          while (c++ < r) {
            ((n = o.createHmac(e, i)), n.update(f), (f = n.digest()));
            for (var u = 0; u < a.length; ++u) a[u] ^= f[u];
          }
          return a;
        }
      }
      function b(e) {
        var t = 0,
          r = 8;
        while (t < e.length) {
          var n = 1 << r;
          if ((e[t] & n) === n) break;
          (r--, r < 0 && (t++, (r = 8)));
        }
        return 8 * t + (8 - r) - 1;
      }
      function S(e, t) {
        (n.buffer(e), n.string(t));
        for (var r = [], a = 0, i = 0, s = 0; s < e.length; ++s)
          if (
            (e[s] === t.charCodeAt(i)
              ? ++i
              : (i = e[s] === t.charCodeAt(0) ? 1 : 0),
            i >= t.length)
          ) {
            var o = s + 1;
            (r.push(e.slice(a, o - i)), (a = o), (i = 0));
          }
        return (a <= e.length && r.push(e.slice(a, e.length)), r);
      }
      function k(e, t) {
        if ((n.buffer(e), 0 === e[0] && 4 === e[1])) return t ? e : e.slice(1);
        if (4 === e[0]) {
          if (!t) return e;
        } else {
          while (0 === e[0]) e = e.slice(1);
          if (2 === e[0] || 3 === e[0])
            throw new Error(
              "Compressed elliptic curve points are not supported",
            );
          if (4 !== e[0]) throw new Error("Not a valid elliptic curve point");
          if (!t) return e;
        }
        var r = a.alloc(e.length + 1);
        return ((r[0] = 0), e.copy(r, 1), r);
      }
      function B(e, t) {
        void 0 === t && (t = c.Ber.BitString);
        var r = e.readString(t, !0);
        return (
          n.strictEqual(
            r[0],
            0,
            "bit strings with unused bits are not supported (0x" +
              r[0].toString(16) +
              ")",
          ),
          r.slice(1)
        );
      }
      function E(e, t, r) {
        void 0 === r && (r = c.Ber.BitString);
        var n = a.alloc(t.length + 1);
        ((n[0] = 0), t.copy(n, 1), e.writeBuffer(n, r));
      }
      function A(e) {
        n.buffer(e);
        while (e.length > 1 && 0 === e[0] && 0 === (128 & e[1])) e = e.slice(1);
        if (128 === (128 & e[0])) {
          var t = a.alloc(e.length + 1);
          ((t[0] = 0), e.copy(t, 1), (e = t));
        }
        return e;
      }
      function F(e) {
        n.buffer(e);
        while (e.length > 1 && 0 === e[0]) e = e.slice(1);
        return e;
      }
      function _(e, t) {
        (n.buffer(e), n.number(t));
        while (e.length > t) (n.equal(e[0], 0), (e = e.slice(1)));
        while (e.length < t) {
          var r = a.alloc(e.length + 1);
          ((r[0] = 0), e.copy(r, 1), (e = r));
        }
        return e;
      }
      function x(e) {
        var t = a.from(e.toByteArray());
        return ((t = A(t)), t);
      }
      function q(e, t, r) {
        (n.buffer(e),
          n.buffer(t),
          n.buffer(r),
          (e = new h(e)),
          (t = new h(t)),
          (r = new h(r)));
        var a = e.modPow(r, t),
          i = x(a);
        return i;
      }
      function I(e) {
        n.buffer(e);
        var t = p.sign.keyPair.fromSeed(new Uint8Array(e));
        return a.from(t.publicKey);
      }
      function P(e) {
        n.buffer(e);
        var t = p.box.keyPair.fromSeed(new Uint8Array(e));
        return a.from(t.publicKey);
      }
      function C(e) {
        (n.object(e), g(e, i, [1, 1]));
        var t,
          r = new h(e.part.d.data);
        if (!e.part.dmodp) {
          var a = new h(e.part.p.data),
            s = r.mod(a.subtract(1));
          ((t = x(s)),
            (e.part.dmodp = { name: "dmodp", data: t }),
            e.parts.push(e.part.dmodp));
        }
        if (!e.part.dmodq) {
          var o = new h(e.part.q.data),
            f = r.mod(o.subtract(1));
          ((t = x(f)),
            (e.part.dmodq = { name: "dmodq", data: t }),
            e.parts.push(e.part.dmodq));
        }
      }
      function U(e, t) {
        (n.string(e, "curveName"), n.buffer(t));
        var r = f.curves[e],
          i = new h(r.p),
          o = new h(r.a),
          c = new h(r.b),
          p = new u.ECCurveFp(i, o, c),
          d = p.decodePointHex(r.G.toString("hex")),
          l = new h(A(t)),
          g = d.multiply(l);
        g = a.from(p.encodePointHex(g), "hex");
        var v = [];
        (v.push({ name: "curve", data: a.from(e) }),
          v.push({ name: "Q", data: g }));
        var m = new s({ type: "ecdsa", curve: p, parts: v });
        return m;
      }
      function O(e) {
        var t = {};
        switch (e) {
          case "3des-cbc":
            ((t.keySize = 24),
              (t.blockSize = 8),
              (t.opensslName = "des-ede3-cbc"));
            break;
          case "blowfish-cbc":
            ((t.keySize = 16), (t.blockSize = 8), (t.opensslName = "bf-cbc"));
            break;
          case "aes128-cbc":
          case "aes128-ctr":
          case "aes128-gcm@openssh.com":
            ((t.keySize = 16),
              (t.blockSize = 16),
              (t.opensslName = "aes-128-" + e.slice(7, 10)));
            break;
          case "aes192-cbc":
          case "aes192-ctr":
          case "aes192-gcm@openssh.com":
            ((t.keySize = 24),
              (t.blockSize = 16),
              (t.opensslName = "aes-192-" + e.slice(7, 10)));
            break;
          case "aes256-cbc":
          case "aes256-ctr":
          case "aes256-gcm@openssh.com":
            ((t.keySize = 32),
              (t.blockSize = 16),
              (t.opensslName = "aes-256-" + e.slice(7, 10)));
            break;
          default:
            throw new Error('Unsupported openssl cipher "' + e + '"');
        }
        return t;
      }
    },
    3078: function (e, t, r) {
      var n = r(2933).Buffer,
        a = {
          dsa: { parts: ["p", "q", "g", "y"], sizePart: "p" },
          rsa: { parts: ["e", "n"], sizePart: "n" },
          ecdsa: { parts: ["curve", "Q"], sizePart: "Q" },
          ed25519: { parts: ["A"], sizePart: "A" },
        };
      a["curve25519"] = a["ed25519"];
      var i = {
        dsa: { parts: ["p", "q", "g", "y", "x"] },
        rsa: { parts: ["n", "e", "d", "iqmp", "p", "q"] },
        ecdsa: { parts: ["curve", "Q", "d"] },
        ed25519: { parts: ["A", "k"] },
      };
      i["curve25519"] = i["ed25519"];
      var s = { md5: !0, sha1: !0, sha256: !0, sha384: !0, sha512: !0 },
        o = {
          nistp256: {
            size: 256,
            pkcs8oid: "1.2.840.10045.3.1.7",
            p: n.from(
              "00ffffffff 00000001 00000000 0000000000000000 ffffffff ffffffff ffffffff".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            a: n.from(
              "00FFFFFFFF 00000001 00000000 0000000000000000 FFFFFFFF FFFFFFFF FFFFFFFC".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            b: n.from(
              "5ac635d8 aa3a93e7 b3ebbd55 769886bc651d06b0 cc53b0f6 3bce3c3e 27d2604b".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            s: n.from(
              "00c49d3608 86e70493 6a6678e1 139d26b7819f7e90".replace(/ /g, ""),
              "hex",
            ),
            n: n.from(
              "00ffffffff 00000000 ffffffff ffffffffbce6faad a7179e84 f3b9cac2 fc632551".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            G: n.from(
              "046b17d1f2 e12c4247 f8bce6e5 63a440f277037d81 2deb33a0 f4a13945 d898c2964fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e162bce3357 6b315ece cbb64068 37bf51f5".replace(
                / /g,
                "",
              ),
              "hex",
            ),
          },
          nistp384: {
            size: 384,
            pkcs8oid: "1.3.132.0.34",
            p: n.from(
              "00ffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffeffffffff 00000000 00000000 ffffffff".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            a: n.from(
              "00FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFEFFFFFFFF 00000000 00000000 FFFFFFFC".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            b: n.from(
              "b3312fa7 e23ee7e4 988e056b e3f82d19181d9c6e fe814112 0314088f 5013875ac656398d 8a2ed19d 2a85c8ed d3ec2aef".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            s: n.from(
              "00a335926a a319a27a 1d00896a 6773a4827acdac73".replace(/ /g, ""),
              "hex",
            ),
            n: n.from(
              "00ffffffff ffffffff ffffffff ffffffffffffffff ffffffff c7634d81 f4372ddf581a0db2 48b0a77a ecec196a ccc52973".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            G: n.from(
              "04aa87ca22 be8b0537 8eb1c71e f320ad746e1d3b62 8ba79b98 59f741e0 82542a385502f25d bf55296c 3a545e38 72760ab73617de4a 96262c6f 5d9e98bf 9292dc29f8f41dbd 289a147c e9da3113 b5f0b8c00a60b1ce 1d7e819d 7a431d7c 90ea0e5f".replace(
                / /g,
                "",
              ),
              "hex",
            ),
          },
          nistp521: {
            size: 521,
            pkcs8oid: "1.3.132.0.35",
            p: n.from(
              "01ffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffff".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            a: n.from(
              "01FFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFC".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            b: n.from(
              "51953eb961 8e1c9a1f 929a21a0 b68540eea2da725b 99b315f3 b8b48991 8ef109e156193951 ec7e937b 1652c0bd 3bb1bf073573df88 3d2c34f1 ef451fd4 6b503f00".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            s: n.from(
              "00d09e8800 291cb853 96cc6717 393284aaa0da64ba".replace(/ /g, ""),
              "hex",
            ),
            n: n.from(
              "01ffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffa51868783 bf2f966b 7fcc0148 f709a5d03bb5c9b8 899c47ae bb6fb71e 91386409".replace(
                / /g,
                "",
              ),
              "hex",
            ),
            G: n.from(
              "0400c6 858e06b7 0404e9cd 9e3ecb66 2395b4429c648139 053fb521 f828af60 6b4d3dbaa14b5e77 efe75928 fe1dc127 a2ffa8de3348b3c1 856a429b f97e7e31 c2e5bd660118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd998f54449 579b4468 17afbd17 273e662c97ee7299 5ef42640 c550b901 3fad0761353c7086 a272c240 88be9476 9fd16650".replace(
                / /g,
                "",
              ),
              "hex",
            ),
          },
        };
      e.exports = { info: a, privInfo: i, hashAlgs: s, curves: o };
    },
    3371: function (e, t, r) {
      r(2932);
      var n = r(799);
      function a(e, t) {
        (Error.captureStackTrace && Error.captureStackTrace(this, a),
          (this.name = "FingerprintFormatError"),
          (this.fingerprint = e),
          (this.format = t),
          (this.message =
            "Fingerprint format is not supported, or is invalid: "),
          void 0 !== e && (this.message += " fingerprint = " + e),
          void 0 !== t && (this.message += " format = " + t));
      }
      function i(e) {
        (Error.captureStackTrace && Error.captureStackTrace(this, i),
          (this.name = "InvalidAlgorithmError"),
          (this.algorithm = e),
          (this.message = 'Algorithm "' + e + '" is not supported'));
      }
      function s(e, t, r) {
        (Error.captureStackTrace && Error.captureStackTrace(this, s),
          (this.name = "KeyParseError"),
          (this.format = t),
          (this.keyName = e),
          (this.innerErr = r),
          (this.message =
            "Failed to parse " +
            e +
            " as a valid " +
            t +
            " format key: " +
            r.message));
      }
      function o(e, t, r) {
        (Error.captureStackTrace && Error.captureStackTrace(this, o),
          (this.name = "SignatureParseError"),
          (this.type = e),
          (this.format = t),
          (this.innerErr = r),
          (this.message =
            "Failed to parse the given data as a " +
            e +
            " signature in " +
            t +
            " format: " +
            r.message));
      }
      function f(e, t, r) {
        (Error.captureStackTrace && Error.captureStackTrace(this, f),
          (this.name = "CertificateParseError"),
          (this.format = t),
          (this.certName = e),
          (this.innerErr = r),
          (this.message =
            "Failed to parse " +
            e +
            " as a valid " +
            t +
            " format certificate: " +
            r.message));
      }
      function c(e, t) {
        (Error.captureStackTrace && Error.captureStackTrace(this, c),
          (this.name = "KeyEncryptedError"),
          (this.format = t),
          (this.keyName = e),
          (this.message =
            "The " +
            t +
            " format key " +
            e +
            " is encrypted (password-protected), and no passphrase was provided in `options`"));
      }
      (n.inherits(a, Error),
        n.inherits(i, Error),
        n.inherits(s, Error),
        n.inherits(o, Error),
        n.inherits(f, Error),
        n.inherits(c, Error),
        (e.exports = {
          FingerprintFormatError: a,
          InvalidAlgorithmError: i,
          KeyParseError: s,
          SignatureParseError: o,
          KeyEncryptedError: c,
          CertificateParseError: f,
        }));
    },
    3418: function (e, t, r) {
      e.exports = h;
      var n = r(2932),
        a = r(2933).Buffer,
        i = (r(3078), r(2764), r(3371)),
        s = r(3020),
        o = r(3419),
        f = r(3894),
        c = i.InvalidAlgorithmError,
        u = i.SignatureParseError;
      function h(e) {
        (n.object(e, "options"),
          n.arrayOfObject(e.parts, "options.parts"),
          n.string(e.type, "options.type"));
        for (var t = {}, r = 0; r < e.parts.length; ++r) {
          var a = e.parts[r];
          t[a.name] = a;
        }
        ((this.type = e.type),
          (this.hashAlgorithm = e.hashAlgo),
          (this.curve = e.curve),
          (this.parts = e.parts),
          (this.part = t));
      }
      function p(e, t, r, a) {
        if ("ssh" === r) {
          try {
            var i = new f({ buffer: e }),
              s = i.readString();
          } catch (u) {}
          if (void 0 !== i) {
            var o =
              "SSH signature does not match expected type (expected " +
              t +
              ", got " +
              s +
              ")";
            switch (s) {
              case "ssh-rsa":
                (n.strictEqual(t, "rsa", o), (a.hashAlgo = "sha1"));
                break;
              case "rsa-sha2-256":
                (n.strictEqual(t, "rsa", o), (a.hashAlgo = "sha256"));
                break;
              case "rsa-sha2-512":
                (n.strictEqual(t, "rsa", o), (a.hashAlgo = "sha512"));
                break;
              case "ssh-ed25519":
                (n.strictEqual(t, "ed25519", o), (a.hashAlgo = "sha512"));
                break;
              default:
                throw new Error("Unknown SSH signature type: " + s);
            }
            var c = i.readPart();
            return (
              n.ok(i.atEnd(), "extra trailing bytes"),
              (c.name = "sig"),
              a.parts.push(c),
              new h(a)
            );
          }
        }
        return (a.parts.push({ name: "sig", data: e }), new h(a));
      }
      function d(e, t, r, n) {
        var a = new o.BerReader(e);
        a.readSequence();
        var i = a.readString(o.Ber.Integer, !0),
          f = a.readString(o.Ber.Integer, !0);
        return (
          n.parts.push({ name: "r", data: s.mpNormalize(i) }),
          n.parts.push({ name: "s", data: s.mpNormalize(f) }),
          new h(n)
        );
      }
      function l(e, t, r, a) {
        if (40 != e.length) {
          var i = new f({ buffer: e }),
            s = i.readBuffer();
          ("ssh-dss" === s.toString("ascii") && (s = i.readBuffer()),
            n.ok(i.atEnd(), "extra trailing bytes"),
            n.strictEqual(s.length, 40, "invalid inner length"),
            (e = s));
        }
        return (
          a.parts.push({ name: "r", data: e.slice(0, 20) }),
          a.parts.push({ name: "s", data: e.slice(20, 40) }),
          new h(a)
        );
      }
      function g(e, t, r, a) {
        var i,
          s,
          o = new f({ buffer: e }),
          c = o.readBuffer(),
          u = c.toString("ascii");
        if ("ecdsa-" === u.slice(0, 6)) {
          var p = u.split("-");
          switch (
            (n.strictEqual(p[0], "ecdsa"),
            n.strictEqual(p[1], "sha2"),
            (a.curve = p[2]),
            a.curve)
          ) {
            case "nistp256":
              a.hashAlgo = "sha256";
              break;
            case "nistp384":
              a.hashAlgo = "sha384";
              break;
            case "nistp521":
              a.hashAlgo = "sha512";
              break;
            default:
              throw new Error("Unsupported ECDSA curve: " + a.curve);
          }
          ((c = o.readBuffer()),
            n.ok(o.atEnd(), "extra trailing bytes on outer"),
            (o = new f({ buffer: c })),
            (i = o.readPart()));
        } else i = { data: c };
        return (
          (s = o.readPart()),
          n.ok(o.atEnd(), "extra trailing bytes"),
          (i.name = "r"),
          (s.name = "s"),
          a.parts.push(i),
          a.parts.push(s),
          new h(a)
        );
      }
      ((h.prototype.toBuffer = function (e) {
        var t;
        (void 0 === e && (e = "asn1"), n.string(e, "format"));
        var r = "ssh-" + this.type;
        switch (this.type) {
          case "rsa":
            switch (this.hashAlgorithm) {
              case "sha256":
                r = "rsa-sha2-256";
                break;
              case "sha512":
                r = "rsa-sha2-512";
                break;
              case "sha1":
              case void 0:
                break;
              default:
                throw new Error(
                  "SSH signature format does not support hash algorithm " +
                    this.hashAlgorithm,
                );
            }
            return "ssh" === e
              ? ((t = new f({})),
                t.writeString(r),
                t.writePart(this.part.sig),
                t.toBuffer())
              : this.part.sig.data;
          case "ed25519":
            return "ssh" === e
              ? ((t = new f({})),
                t.writeString(r),
                t.writePart(this.part.sig),
                t.toBuffer())
              : this.part.sig.data;
          case "dsa":
          case "ecdsa":
            var i, c;
            if ("asn1" === e) {
              var u = new o.BerWriter();
              return (
                u.startSequence(),
                (i = s.mpNormalize(this.part.r.data)),
                (c = s.mpNormalize(this.part.s.data)),
                u.writeBuffer(i, o.Ber.Integer),
                u.writeBuffer(c, o.Ber.Integer),
                u.endSequence(),
                u.buffer
              );
            }
            if ("ssh" === e && "dsa" === this.type) {
              if (
                ((t = new f({})),
                t.writeString("ssh-dss"),
                (i = this.part.r.data),
                i.length > 20 && 0 === i[0] && (i = i.slice(1)),
                (c = this.part.s.data),
                c.length > 20 && 0 === c[0] && (c = c.slice(1)),
                (this.hashAlgorithm && "sha1" !== this.hashAlgorithm) ||
                  i.length + c.length !== 40)
              )
                throw new Error(
                  "OpenSSH only supports DSA signatures with SHA1 hash",
                );
              return (t.writeBuffer(a.concat([i, c])), t.toBuffer());
            }
            if ("ssh" === e && "ecdsa" === this.type) {
              var h,
                p = new f({});
              ((i = this.part.r.data),
                p.writeBuffer(i),
                p.writePart(this.part.s),
                (t = new f({})),
                0 === i[0] && (i = i.slice(1)));
              var d = 8 * i.length;
              return (
                256 === d
                  ? (h = "nistp256")
                  : 384 === d
                    ? (h = "nistp384")
                    : 528 === d && (h = "nistp521"),
                t.writeString("ecdsa-sha2-" + h),
                t.writeBuffer(p.toBuffer()),
                t.toBuffer()
              );
            }
            throw new Error("Invalid signature format");
          default:
            throw new Error("Invalid signature data");
        }
      }),
        (h.prototype.toString = function (e) {
          return (
            n.optionalString(e, "format"),
            this.toBuffer(e).toString("base64")
          );
        }),
        (h.parse = function (e, t, r) {
          ("string" === typeof e && (e = a.from(e, "base64")),
            n.buffer(e, "data"),
            n.string(r, "format"),
            n.string(t, "type"));
          var i = {};
          ((i.type = t.toLowerCase()), (i.parts = []));
          try {
            switch (
              (n.ok(e.length > 0, "signature must not be empty"), i.type)
            ) {
              case "rsa":
                return p(e, t, r, i);
              case "ed25519":
                return p(e, t, r, i);
              case "dsa":
              case "ecdsa":
                return "asn1" === r
                  ? d(e, t, r, i)
                  : "dsa" === i.type
                    ? l(e, t, r, i)
                    : g(e, t, r, i);
              default:
                throw new c(t);
            }
          } catch (s) {
            if (s instanceof c) throw s;
            throw new u(t, r, s);
          }
        }),
        (h.isSignature = function (e, t) {
          return s.isCompatible(e, h, t);
        }),
        (h.prototype._sshpkApiVersion = [2, 1]),
        (h._oldVersionDetect = function (e) {
          return (
            n.func(e.toBuffer),
            e.hasOwnProperty("hashAlgorithm") ? [2, 0] : [1, 0]
          );
        }));
    },
    3550: function (e, t, r) {
      e.exports = { read: S, write: k };
      var n = r(2932),
        a = r(3419),
        i = r(2764),
        s = r(2933).Buffer,
        o = (r(3078), r(3020)),
        f = r(3018),
        c = r(3019),
        u = r(4984),
        h = r(4284),
        p = r(4660),
        d = r(3551),
        l = r(3371),
        g = "1.2.840.113549.1.5.13",
        v = "1.2.840.113549.1.5.12",
        m = {
          "1.2.840.113549.3.7": "3des-cbc",
          "2.16.840.1.101.3.4.1.2": "aes128-cbc",
          "2.16.840.1.101.3.4.1.42": "aes256-cbc",
        },
        y = {};
      Object.keys(m).forEach(function (e) {
        y[m[e]] = e;
      });
      var w = {
          "1.2.840.113549.2.7": "sha1",
          "1.2.840.113549.2.9": "sha256",
          "1.2.840.113549.2.11": "sha512",
        },
        b = {};
      function S(e, t, r) {
        var f = e;
        "string" !== typeof e &&
          (n.buffer(e, "buf"), (e = e.toString("ascii")));
        var c,
          y,
          b = e.trim().split(/[\r\n]+/g),
          S = -1;
        while (!c && S < b.length)
          c = b[++S].match(
            /[-]+[ ]*BEGIN ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/,
          );
        n.ok(c, "invalid PEM header");
        var k = b.length;
        while (!y && k > 0)
          y = b[--k].match(
            /[-]+[ ]*END ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/,
          );
        (n.ok(y, "invalid PEM footer"), n.equal(c[2], y[2]));
        var B,
          E = c[2].toLowerCase();
        (c[1] &&
          (n.equal(c[1], y[1], "PEM header and footer mismatch"),
          (B = c[1].trim())),
          (b = b.slice(S, k + 1)));
        var A,
          F,
          _,
          x = {};
        while (1) {
          if (
            ((b = b.slice(1)), (c = b[0].match(/^([A-Za-z0-9-]+): (.+)$/)), !c)
          )
            break;
          x[c[1].toLowerCase()] = c[2];
        }
        if (
          ((b = b.slice(0, -1).join("")),
          (e = s.from(b, "base64")),
          x["proc-type"])
        ) {
          var q = x["proc-type"].split(",");
          if ("4" === q[0] && "ENCRYPTED" === q[1]) {
            if (
              ("string" === typeof t.passphrase &&
                (t.passphrase = s.from(t.passphrase, "utf-8")),
              !s.isBuffer(t.passphrase))
            )
              throw new l.KeyEncryptedError(t.filename, "PEM");
            ((q = x["dek-info"].split(",")),
              n.ok(2 === q.length),
              (A = q[0].toLowerCase()),
              (_ = s.from(q[1], "hex")),
              (F = o.opensslKeyDeriv(A, _, t.passphrase, 1).key));
          }
        }
        if (B && "encrypted" === B.toLowerCase()) {
          var I,
            P = new a.BerReader(e);
          (P.readSequence(), P.readSequence(), (I = P.offset + P.length));
          var C = P.readOID();
          if (C !== g)
            throw new Error("Unsupported PEM/PKCS8 encryption scheme: " + C);
          (P.readSequence(), P.readSequence());
          var U = P.offset + P.length,
            O = P.readOID();
          if (O !== v) throw new Error("Unsupported PBES2 KDF: " + O);
          P.readSequence();
          var K = P.readString(a.Ber.OctetString, !0),
            D = P.readInt(),
            z = "sha1";
          if (P.offset < U) {
            P.readSequence();
            var T = P.readOID();
            if (((z = w[T]), void 0 === z))
              throw new Error("Unsupported PBKDF2 hash: " + T);
          }
          ((P._offset = U), P.readSequence());
          var j = P.readOID();
          if (((A = m[j]), void 0 === A))
            throw new Error("Unsupported PBES2 cipher: " + j);
          if (
            ((_ = P.readString(a.Ber.OctetString, !0)),
            (P._offset = I),
            (e = P.readString(a.Ber.OctetString, !0)),
            "string" === typeof t.passphrase &&
              (t.passphrase = s.from(t.passphrase, "utf-8")),
            !s.isBuffer(t.passphrase))
          )
            throw new l.KeyEncryptedError(t.filename, "PEM");
          var N = o.opensshCipherInfo(A);
          ((A = N.opensslName),
            (F = o.pbkdf2(z, K, D, N.keySize, t.passphrase)),
            (B = void 0));
        }
        if (A && F && _) {
          var L,
            H = i.createDecipheriv(A, F, _),
            M = [];
          (H.once("error", function (e) {
            if (-1 !== e.toString().indexOf("bad decrypt"))
              throw new Error(
                "Incorrect passphrase supplied, could not decrypt key",
              );
            throw e;
          }),
            H.write(e),
            H.end());
          while (null !== (L = H.read())) M.push(L);
          e = s.concat(M);
        }
        if (B && "openssh" === B.toLowerCase())
          return p.readSSHPrivate(E, e, t);
        if (B && "ssh2" === B.toLowerCase()) return d.readType(E, e, t);
        var R = new a.BerReader(e);
        return (
          (R.originalInput = f),
          R.readSequence(),
          B
            ? (r && n.strictEqual(r, "pkcs1"), u.readPkcs1(B, E, R))
            : (r && n.strictEqual(r, "pkcs8"), h.readPkcs8(B, E, R))
        );
      }
      function k(e, t, r) {
        n.object(e);
        var i,
          o = { ecdsa: "EC", rsa: "RSA", dsa: "DSA", ed25519: "EdDSA" }[e.type],
          p = new a.BerWriter();
        if (c.isPrivateKey(e))
          r && "pkcs8" === r
            ? ((i = "PRIVATE KEY"), h.writePkcs8(p, e))
            : (r && n.strictEqual(r, "pkcs1"),
              (i = o + " PRIVATE KEY"),
              u.writePkcs1(p, e));
        else {
          if (!f.isKey(e)) throw new Error("key is not a Key or PrivateKey");
          r && "pkcs1" === r
            ? ((i = o + " PUBLIC KEY"), u.writePkcs1(p, e))
            : (r && n.strictEqual(r, "pkcs8"),
              (i = "PUBLIC KEY"),
              h.writePkcs8(p, e));
        }
        var d = p.buffer.toString("base64"),
          l = d.length + d.length / 64 + 18 + 16 + 2 * i.length + 10,
          g = s.alloc(l),
          v = 0;
        v += g.write("-----BEGIN " + i + "-----\n", v);
        for (var m = 0; m < d.length; ) {
          var y = m + 64;
          (y > d.length && (y = d.length),
            (v += g.write(d.slice(m, y), v)),
            (g[v++] = 10),
            (m = y));
        }
        return ((v += g.write("-----END " + i + "-----\n", v)), g.slice(0, v));
      }
      Object.keys(w).forEach(function (e) {
        b[w[e]] = e;
      });
    },
    3551: function (e, t, r) {
      e.exports = {
        read: p.bind(void 0, !1, void 0),
        readType: p.bind(void 0, !1),
        write: d,
        readPartial: p.bind(void 0, !0),
        readInternal: p,
        keyTypeToAlg: h,
        algToKeyType: u,
      };
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3078),
        s = r(3020),
        o = r(3018),
        f = r(3019),
        c = r(3894);
      function u(e) {
        if ((n.string(e), "ssh-dss" === e)) return "dsa";
        if ("ssh-rsa" === e) return "rsa";
        if ("ssh-ed25519" === e) return "ed25519";
        if ("ssh-curve25519" === e) return "curve25519";
        if (e.match(/^ecdsa-sha2-/)) return "ecdsa";
        throw new Error("Unknown algorithm " + e);
      }
      function h(e) {
        if ((n.object(e), "dsa" === e.type)) return "ssh-dss";
        if ("rsa" === e.type) return "ssh-rsa";
        if ("ed25519" === e.type) return "ssh-ed25519";
        if ("curve25519" === e.type) return "ssh-curve25519";
        if ("ecdsa" === e.type)
          return "ecdsa-sha2-" + e.part.curve.data.toString();
        throw new Error("Unknown key type " + e.type);
      }
      function p(e, t, r, h) {
        ("string" === typeof r && (r = a.from(r)), n.buffer(r, "buf"));
        var p = {},
          d = (p.parts = []),
          l = new c({ buffer: r }),
          g = l.readString();
        (n.ok(!l.atEnd(), "key must have at least one part"), (p.type = u(g)));
        var v = i.info[p.type].parts.length;
        t && "private" === t && (v = i.privInfo[p.type].parts.length);
        while (!l.atEnd() && d.length < v) d.push(l.readPart());
        while (!e && !l.atEnd()) d.push(l.readPart());
        (n.ok(d.length >= 1, "key must have at least one part"),
          n.ok(e || l.atEnd(), "leftover bytes at end of key"));
        var m = o,
          y = i.info[p.type];
        if (
          (("private" !== t && y.parts.length === d.length) ||
            ((y = i.privInfo[p.type]), (m = f)),
          n.strictEqual(y.parts.length, d.length),
          "ecdsa" === p.type)
        ) {
          var w = /^ecdsa-sha2-(.+)$/.exec(g);
          (n.ok(null !== w), n.strictEqual(w[1], d[0].data.toString()));
        }
        for (var b = !0, S = 0; S < y.parts.length; ++S) {
          var k,
            B = d[S];
          if (
            ((B.name = y.parts[S]),
            "ed25519" === p.type &&
              "k" === B.name &&
              (B.data = B.data.slice(0, 32)),
            "curve" !== B.name && !1 !== y.normalize)
          )
            ((k =
              "ed25519" === p.type
                ? s.zeroPadToLength(B.data, 32)
                : s.mpNormalize(B.data)),
              k.toString("binary") !== B.data.toString("binary") &&
                ((B.data = k), (b = !1)));
        }
        return (
          b && (p._rfc4253Cache = l.toBuffer()),
          e &&
            "object" === typeof e &&
            ((e.remainder = l.remainder()), (e.consumed = l._offset)),
          new m(p)
        );
      }
      function d(e, t) {
        n.object(e);
        var r,
          o = h(e),
          u = i.info[e.type];
        f.isPrivateKey(e) && (u = i.privInfo[e.type]);
        var p = u.parts,
          d = new c({});
        for (d.writeString(o), r = 0; r < p.length; ++r) {
          var l = e.part[p[r]].data;
          (!1 !== u.normalize &&
            (l =
              "ed25519" === e.type
                ? s.zeroPadToLength(l, 32)
                : s.mpNormalize(l)),
            "ed25519" === e.type &&
              "k" === p[r] &&
              (l = a.concat([l, e.part.A.data])),
            d.writeBuffer(l));
        }
        return d.toBuffer();
      }
    },
    3894: function (e, t, r) {
      e.exports = i;
      var n = r(2932),
        a = r(2933).Buffer;
      function i(e) {
        (n.object(e, "options"),
          void 0 !== e.buffer && n.buffer(e.buffer, "options.buffer"),
          (this._size = e.buffer ? e.buffer.length : 1024),
          (this._buffer = e.buffer || a.alloc(this._size)),
          (this._offset = 0));
      }
      ((i.prototype.toBuffer = function () {
        return this._buffer.slice(0, this._offset);
      }),
        (i.prototype.atEnd = function () {
          return this._offset >= this._buffer.length;
        }),
        (i.prototype.remainder = function () {
          return this._buffer.slice(this._offset);
        }),
        (i.prototype.skip = function (e) {
          this._offset += e;
        }),
        (i.prototype.expand = function () {
          this._size *= 2;
          var e = a.alloc(this._size);
          (this._buffer.copy(e, 0), (this._buffer = e));
        }),
        (i.prototype.readPart = function () {
          return { data: this.readBuffer() };
        }),
        (i.prototype.readBuffer = function () {
          var e = this._buffer.readUInt32BE(this._offset);
          ((this._offset += 4),
            n.ok(
              this._offset + e <= this._buffer.length,
              "length out of bounds at +0x" +
                this._offset.toString(16) +
                " (data truncated?)",
            ));
          var t = this._buffer.slice(this._offset, this._offset + e);
          return ((this._offset += e), t);
        }),
        (i.prototype.readString = function () {
          return this.readBuffer().toString();
        }),
        (i.prototype.readCString = function () {
          var e = this._offset;
          while (e < this._buffer.length && 0 !== this._buffer[e]) e++;
          n.ok(e < this._buffer.length, "c string does not terminate");
          var t = this._buffer.slice(this._offset, e).toString();
          return ((this._offset = e + 1), t);
        }),
        (i.prototype.readInt = function () {
          var e = this._buffer.readUInt32BE(this._offset);
          return ((this._offset += 4), e);
        }),
        (i.prototype.readInt64 = function () {
          n.ok(
            this._offset + 8 < this._buffer.length,
            "buffer not long enough to read Int64",
          );
          var e = this._buffer.slice(this._offset, this._offset + 8);
          return ((this._offset += 8), e);
        }),
        (i.prototype.readChar = function () {
          var e = this._buffer[this._offset++];
          return e;
        }),
        (i.prototype.writeBuffer = function (e) {
          while (this._offset + 4 + e.length > this._size) this.expand();
          (this._buffer.writeUInt32BE(e.length, this._offset),
            (this._offset += 4),
            e.copy(this._buffer, this._offset),
            (this._offset += e.length));
        }),
        (i.prototype.writeString = function (e) {
          this.writeBuffer(a.from(e, "utf8"));
        }),
        (i.prototype.writeCString = function (e) {
          while (this._offset + 1 + e.length > this._size) this.expand();
          (this._buffer.write(e, this._offset),
            (this._offset += e.length),
            (this._buffer[this._offset++] = 0));
        }),
        (i.prototype.writeInt = function (e) {
          while (this._offset + 4 > this._size) this.expand();
          (this._buffer.writeUInt32BE(e, this._offset), (this._offset += 4));
        }),
        (i.prototype.writeInt64 = function (e) {
          if ((n.buffer(e, "value"), e.length > 8)) {
            for (var t = e.slice(0, e.length - 8), r = 0; r < t.length; ++r)
              n.strictEqual(t[r], 0, "must fit in 64 bits of precision");
            e = e.slice(e.length - 8, e.length);
          }
          while (this._offset + 8 > this._size) this.expand();
          (e.copy(this._buffer, this._offset), (this._offset += 8));
        }),
        (i.prototype.writeChar = function (e) {
          while (this._offset + 1 > this._size) this.expand();
          this._buffer[this._offset++] = e;
        }),
        (i.prototype.writePart = function (e) {
          this.writeBuffer(e.data);
        }),
        (i.prototype.write = function (e) {
          while (this._offset + e.length > this._size) this.expand();
          (e.copy(this._buffer, this._offset), (this._offset += e.length));
        }));
    },
    4282: function (e, t, r) {
      e.exports = l;
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3078),
        s = r(2764),
        o = r(3371),
        f = r(3018),
        c = r(3019),
        u = r(4285),
        h = r(3020),
        p = o.FingerprintFormatError,
        d = o.InvalidAlgorithmError;
      function l(e) {
        if (
          (n.object(e, "options"),
          n.string(e.type, "options.type"),
          n.buffer(e.hash, "options.hash"),
          n.string(e.algorithm, "options.algorithm"),
          (this.algorithm = e.algorithm.toLowerCase()),
          !0 !== i.hashAlgs[this.algorithm])
        )
          throw new d(this.algorithm);
        ((this.hash = e.hash),
          (this.type = e.type),
          (this.hashType = e.hashType));
      }
      ((l.prototype.toString = function (e) {
        switch (
          (void 0 === e &&
            (e =
              "md5" === this.algorithm || "spki" === this.hashType
                ? "hex"
                : "base64"),
          n.string(e),
          e)
        ) {
          case "hex":
            return "spki" === this.hashType
              ? this.hash.toString("hex")
              : m(this.hash.toString("hex"));
          case "base64":
            return "spki" === this.hashType
              ? this.hash.toString("base64")
              : w(this.algorithm, this.hash.toString("base64"));
          default:
            throw new p(void 0, e);
        }
      }),
        (l.prototype.matches = function (e) {
          (n.object(e, "key or certificate"),
            "key" === this.type && "ssh" !== this.hashType
              ? (h.assertCompatible(e, f, [1, 7], "key with spki"),
                c.isPrivateKey(e) &&
                  h.assertCompatible(
                    e,
                    c,
                    [1, 6],
                    "privatekey with spki support",
                  ))
              : "key" === this.type
                ? h.assertCompatible(e, f, [1, 0], "key")
                : h.assertCompatible(e, u, [1, 0], "certificate"));
          var t = e.hash(this.algorithm, this.hashType),
            r = s.createHash(this.algorithm).update(t).digest("base64");
          return (
            void 0 === this.hash2 &&
              (this.hash2 = s
                .createHash(this.algorithm)
                .update(this.hash)
                .digest("base64")),
            this.hash2 === r
          );
        }));
      var g = /^[A-Za-z0-9+\/=]+$/,
        v = /^[a-fA-F0-9]+$/;
      function m(e) {
        return e.replace(/(.{2})(?=.)/g, "$1:");
      }
      function y(e) {
        return e.replace(/=*$/, "");
      }
      function w(e, t) {
        return e.toUpperCase() + ":" + y(t);
      }
      ((l.parse = function (e, t) {
        var r, s, o;
        (n.string(e, "fingerprint"),
          Array.isArray(t) && ((o = t), (t = {})),
          n.optionalObject(t, "options"),
          void 0 === t && (t = {}),
          void 0 !== t.enAlgs && (o = t.enAlgs),
          void 0 !== t.algorithms && (o = t.algorithms),
          n.optionalArrayOfString(o, "algorithms"));
        var f = "ssh";
        (void 0 !== t.hashType && (f = t.hashType),
          n.string(f, "options.hashType"));
        var c = e.split(":");
        if (2 == c.length) {
          if (((r = c[0].toLowerCase()), !g.test(c[1]))) throw new p(e);
          try {
            s = a.from(c[1], "base64");
          } catch (u) {
            throw new p(e);
          }
        } else if (c.length > 2) {
          if (
            ((r = "md5"),
            "md5" === c[0].toLowerCase() && (c = c.slice(1)),
            (c = c.map(function (t) {
              while (t.length < 2) t = "0" + t;
              if (t.length > 2) throw new p(e);
              return t;
            })),
            (c = c.join("")),
            !v.test(c) || c.length % 2 !== 0)
          )
            throw new p(e);
          try {
            s = a.from(c, "hex");
          } catch (u) {
            throw new p(e);
          }
        } else {
          if (v.test(e)) s = a.from(e, "hex");
          else {
            if (!g.test(e)) throw new p(e);
            s = a.from(e, "base64");
          }
          switch (s.length) {
            case 32:
              r = "sha256";
              break;
            case 16:
              r = "md5";
              break;
            case 20:
              r = "sha1";
              break;
            case 64:
              r = "sha512";
              break;
            default:
              throw new p(e);
          }
          void 0 === t.hashType && (f = "spki");
        }
        if (void 0 === r) throw new p(e);
        if (void 0 === i.hashAlgs[r]) throw new d(r);
        if (
          void 0 !== o &&
          ((o = o.map(function (e) {
            return e.toLowerCase();
          })),
          -1 === o.indexOf(r))
        )
          throw new d(r);
        return new l({
          algorithm: r,
          hash: s,
          type: t.type || "key",
          hashType: f,
        });
      }),
        (l.isFingerprint = function (e, t) {
          return h.isCompatible(e, l, t);
        }),
        (l.prototype._sshpkApiVersion = [1, 2]),
        (l._oldVersionDetect = function (e) {
          return (n.func(e.toString), n.func(e.matches), [1, 0]);
        }));
    },
    4284: function (e, t, r) {
      e.exports = {
        read: h,
        readPkcs8: l,
        write: p,
        writePkcs8: _,
        pkcs8ToBuffer: F,
        readECDSACurve: w,
        writeECDSACurve: C,
      };
      var n = r(2932),
        a = r(3419),
        i = r(2933).Buffer,
        s = r(3078),
        o = r(3020),
        f = r(3018),
        c = r(3019),
        u = r(3550);
      function h(e, t) {
        return u.read(e, t, "pkcs8");
      }
      function p(e, t) {
        return u.write(e, t, "pkcs8");
      }
      function d(e, t) {
        return (
          n.strictEqual(e.peek(), a.Ber.Integer, t + " is not an Integer"),
          o.mpNormalize(e.readString(a.Ber.Integer, !0))
        );
      }
      function l(e, t, r) {
        (r.peek() === a.Ber.Integer &&
          (n.strictEqual(
            t,
            "private",
            "unexpected Integer at start of public key",
          ),
          r.readString(a.Ber.Integer, !0)),
          r.readSequence());
        var i = r.offset + r.length,
          s = r.readOID();
        switch (s) {
          case "1.2.840.113549.1.1.1":
            return ((r._offset = i), "public" === t ? g(r) : v(r));
          case "1.2.840.10040.4.1":
            return "public" === t ? m(r) : y(r);
          case "1.2.840.10045.2.1":
            return "public" === t ? S(r) : b(r);
          case "1.3.101.112":
            return "public" === t ? k(r) : E(r);
          case "1.3.101.110":
            return "public" === t ? B(r) : A(r);
          default:
            throw new Error("Unknown key type OID " + s);
        }
      }
      function g(e) {
        (e.readSequence(a.Ber.BitString), e.readByte(), e.readSequence());
        var t = d(e, "modulus"),
          r = d(e, "exponent"),
          n = {
            type: "rsa",
            source: e.originalInput,
            parts: [
              { name: "e", data: r },
              { name: "n", data: t },
            ],
          };
        return new f(n);
      }
      function v(e) {
        (e.readSequence(a.Ber.OctetString), e.readSequence());
        var t = d(e, "version");
        n.equal(t[0], 0, "unknown RSA private key version");
        var r = d(e, "modulus"),
          i = d(e, "public exponent"),
          s = d(e, "private exponent"),
          o = d(e, "prime1"),
          f = d(e, "prime2"),
          u = d(e, "exponent1"),
          h = d(e, "exponent2"),
          p = d(e, "iqmp"),
          l = {
            type: "rsa",
            parts: [
              { name: "n", data: r },
              { name: "e", data: i },
              { name: "d", data: s },
              { name: "iqmp", data: p },
              { name: "p", data: o },
              { name: "q", data: f },
              { name: "dmodp", data: u },
              { name: "dmodq", data: h },
            ],
          };
        return new c(l);
      }
      function m(e) {
        e.readSequence();
        var t = d(e, "p"),
          r = d(e, "q"),
          n = d(e, "g");
        (e.readSequence(a.Ber.BitString), e.readByte());
        var i = d(e, "y"),
          s = {
            type: "dsa",
            parts: [
              { name: "p", data: t },
              { name: "q", data: r },
              { name: "g", data: n },
              { name: "y", data: i },
            ],
          };
        return new f(s);
      }
      function y(e) {
        e.readSequence();
        var t = d(e, "p"),
          r = d(e, "q"),
          n = d(e, "g");
        e.readSequence(a.Ber.OctetString);
        var i = d(e, "x"),
          s = o.calculateDSAPublic(n, t, i),
          f = {
            type: "dsa",
            parts: [
              { name: "p", data: t },
              { name: "q", data: r },
              { name: "g", data: n },
              { name: "y", data: s },
              { name: "x", data: i },
            ],
          };
        return new c(f);
      }
      function w(e) {
        var t, r, f, c, u;
        if (e.peek() === a.Ber.OID) {
          var h = e.readOID();
          for (r = Object.keys(s.curves), f = 0; f < r.length; ++f)
            if (((c = r[f]), (u = s.curves[c]), u.pkcs8oid === h)) {
              t = c;
              break;
            }
        } else {
          e.readSequence();
          var p = e.readString(a.Ber.Integer, !0);
          n.strictEqual(p[0], 1, "ECDSA key not version 1");
          var d = {};
          e.readSequence();
          var l = e.readOID();
          n.strictEqual(
            l,
            "1.2.840.10045.1.1",
            "ECDSA key is not from a prime-field",
          );
          var g = (d.p = o.mpNormalize(e.readString(a.Ber.Integer, !0)));
          ((d.size = 8 * g.length - o.countZeros(g)),
            e.readSequence(),
            (d.a = o.mpNormalize(e.readString(a.Ber.OctetString, !0))),
            (d.b = o.mpNormalize(e.readString(a.Ber.OctetString, !0))),
            e.peek() === a.Ber.BitString &&
              (d.s = e.readString(a.Ber.BitString, !0)),
            (d.G = e.readString(a.Ber.OctetString, !0)),
            n.strictEqual(d.G[0], 4, "uncompressed G is required"),
            (d.n = o.mpNormalize(e.readString(a.Ber.Integer, !0))),
            (d.h = o.mpNormalize(e.readString(a.Ber.Integer, !0))),
            n.strictEqual(d.h[0], 1, "a cofactor=1 curve is required"),
            (r = Object.keys(s.curves)));
          var v = Object.keys(d);
          for (f = 0; f < r.length; ++f) {
            ((c = r[f]), (u = s.curves[c]));
            for (var m = !0, y = 0; y < v.length; ++y) {
              var w = v[y];
              if (void 0 !== u[w])
                if ("object" === typeof u[w] && void 0 !== u[w].equals) {
                  if (!u[w].equals(d[w])) {
                    m = !1;
                    break;
                  }
                } else if (i.isBuffer(u[w])) {
                  if (u[w].toString("binary") !== d[w].toString("binary")) {
                    m = !1;
                    break;
                  }
                } else if (u[w] !== d[w]) {
                  m = !1;
                  break;
                }
            }
            if (m) {
              t = c;
              break;
            }
          }
        }
        return t;
      }
      function b(e) {
        var t = w(e);
        (n.string(t, "a known elliptic curve"),
          e.readSequence(a.Ber.OctetString),
          e.readSequence());
        var r = d(e, "version");
        n.equal(r[0], 1, "unknown version of ECDSA key");
        var s,
          f = e.readString(a.Ber.OctetString, !0);
        if (
          (160 == e.peek() && (e.readSequence(160), (e._offset += e.length)),
          161 == e.peek() &&
            (e.readSequence(161),
            (s = e.readString(a.Ber.BitString, !0)),
            (s = o.ecNormalize(s))),
          void 0 === s)
        ) {
          var u = o.publicFromPrivateECDSA(t, f);
          s = u.part.Q.data;
        }
        var h = {
          type: "ecdsa",
          parts: [
            { name: "curve", data: i.from(t) },
            { name: "Q", data: s },
            { name: "d", data: f },
          ],
        };
        return new c(h);
      }
      function S(e) {
        var t = w(e);
        n.string(t, "a known elliptic curve");
        var r = e.readString(a.Ber.BitString, !0);
        r = o.ecNormalize(r);
        var s = {
          type: "ecdsa",
          parts: [
            { name: "curve", data: i.from(t) },
            { name: "Q", data: r },
          ],
        };
        return new f(s);
      }
      function k(e) {
        0 === e.peek() && e.readByte();
        var t = o.readBitString(e),
          r = {
            type: "ed25519",
            parts: [{ name: "A", data: o.zeroPadToLength(t, 32) }],
          };
        return new f(r);
      }
      function B(e) {
        var t = o.readBitString(e),
          r = {
            type: "curve25519",
            parts: [{ name: "A", data: o.zeroPadToLength(t, 32) }],
          };
        return new f(r);
      }
      function E(e) {
        (0 === e.peek() && e.readByte(), e.readSequence(a.Ber.OctetString));
        var t,
          r,
          n = e.readString(a.Ber.OctetString, !0);
        n = o.zeroPadToLength(n, 32);
        while (null !== (r = e.peek()))
          r === (1 | a.Ber.Context)
            ? (t = o.readBitString(e, r))
            : (e.readSequence(r), (e._offset += e.length));
        void 0 === t && (t = o.calculateED25519Public(n));
        var i = {
          type: "ed25519",
          parts: [
            { name: "A", data: o.zeroPadToLength(t, 32) },
            { name: "k", data: o.zeroPadToLength(n, 32) },
          ],
        };
        return new c(i);
      }
      function A(e) {
        (0 === e.peek() && e.readByte(), e.readSequence(a.Ber.OctetString));
        var t = e.readString(a.Ber.OctetString, !0);
        t = o.zeroPadToLength(t, 32);
        var r = o.calculateX25519Public(t),
          n = {
            type: "curve25519",
            parts: [
              { name: "A", data: o.zeroPadToLength(r, 32) },
              { name: "k", data: o.zeroPadToLength(t, 32) },
            ],
          };
        return new c(n);
      }
      function F(e) {
        var t = new a.BerWriter();
        return (_(t, e), t.buffer);
      }
      function _(e, t) {
        if ((e.startSequence(), c.isPrivateKey(t))) {
          var r = 0;
          "ed25519" === t.type && (r = 1);
          var n = i.from([r]);
          e.writeBuffer(n, a.Ber.Integer);
        }
        switch ((e.startSequence(), t.type)) {
          case "rsa":
            (e.writeOID("1.2.840.113549.1.1.1"),
              c.isPrivateKey(t) ? x(t, e) : q(t, e));
            break;
          case "dsa":
            (e.writeOID("1.2.840.10040.4.1"),
              c.isPrivateKey(t) ? I(t, e) : P(t, e));
            break;
          case "ecdsa":
            (e.writeOID("1.2.840.10045.2.1"),
              c.isPrivateKey(t) ? O(t, e) : U(t, e));
            break;
          case "ed25519":
            (e.writeOID("1.3.101.112"), c.isPrivateKey(t) ? D(t, e) : K(t, e));
            break;
          default:
            throw new Error("Unsupported key type: " + t.type);
        }
        e.endSequence();
      }
      function x(e, t) {
        (t.writeNull(),
          t.endSequence(),
          t.startSequence(a.Ber.OctetString),
          t.startSequence());
        var r = i.from([0]);
        (t.writeBuffer(r, a.Ber.Integer),
          t.writeBuffer(e.part.n.data, a.Ber.Integer),
          t.writeBuffer(e.part.e.data, a.Ber.Integer),
          t.writeBuffer(e.part.d.data, a.Ber.Integer),
          t.writeBuffer(e.part.p.data, a.Ber.Integer),
          t.writeBuffer(e.part.q.data, a.Ber.Integer),
          (e.part.dmodp && e.part.dmodq) || o.addRSAMissing(e),
          t.writeBuffer(e.part.dmodp.data, a.Ber.Integer),
          t.writeBuffer(e.part.dmodq.data, a.Ber.Integer),
          t.writeBuffer(e.part.iqmp.data, a.Ber.Integer),
          t.endSequence(),
          t.endSequence());
      }
      function q(e, t) {
        (t.writeNull(),
          t.endSequence(),
          t.startSequence(a.Ber.BitString),
          t.writeByte(0),
          t.startSequence(),
          t.writeBuffer(e.part.n.data, a.Ber.Integer),
          t.writeBuffer(e.part.e.data, a.Ber.Integer),
          t.endSequence(),
          t.endSequence());
      }
      function I(e, t) {
        (t.startSequence(),
          t.writeBuffer(e.part.p.data, a.Ber.Integer),
          t.writeBuffer(e.part.q.data, a.Ber.Integer),
          t.writeBuffer(e.part.g.data, a.Ber.Integer),
          t.endSequence(),
          t.endSequence(),
          t.startSequence(a.Ber.OctetString),
          t.writeBuffer(e.part.x.data, a.Ber.Integer),
          t.endSequence());
      }
      function P(e, t) {
        (t.startSequence(),
          t.writeBuffer(e.part.p.data, a.Ber.Integer),
          t.writeBuffer(e.part.q.data, a.Ber.Integer),
          t.writeBuffer(e.part.g.data, a.Ber.Integer),
          t.endSequence(),
          t.endSequence(),
          t.startSequence(a.Ber.BitString),
          t.writeByte(0),
          t.writeBuffer(e.part.y.data, a.Ber.Integer),
          t.endSequence());
      }
      function C(e, t) {
        var r = s.curves[e.curve];
        if (r.pkcs8oid) t.writeOID(r.pkcs8oid);
        else {
          t.startSequence();
          var n = i.from([1]);
          (t.writeBuffer(n, a.Ber.Integer),
            t.startSequence(),
            t.writeOID("1.2.840.10045.1.1"),
            t.writeBuffer(r.p, a.Ber.Integer),
            t.endSequence(),
            t.startSequence());
          var o = r.p;
          (0 === o[0] && (o = o.slice(1)),
            t.writeBuffer(o, a.Ber.OctetString),
            t.writeBuffer(r.b, a.Ber.OctetString),
            t.writeBuffer(r.s, a.Ber.BitString),
            t.endSequence(),
            t.writeBuffer(r.G, a.Ber.OctetString),
            t.writeBuffer(r.n, a.Ber.Integer));
          var f = r.h;
          (f || (f = i.from([1])),
            t.writeBuffer(f, a.Ber.Integer),
            t.endSequence());
        }
      }
      function U(e, t) {
        (C(e, t), t.endSequence());
        var r = o.ecNormalize(e.part.Q.data, !0);
        t.writeBuffer(r, a.Ber.BitString);
      }
      function O(e, t) {
        (C(e, t),
          t.endSequence(),
          t.startSequence(a.Ber.OctetString),
          t.startSequence());
        var r = i.from([1]);
        (t.writeBuffer(r, a.Ber.Integer),
          t.writeBuffer(e.part.d.data, a.Ber.OctetString),
          t.startSequence(161));
        var n = o.ecNormalize(e.part.Q.data, !0);
        (t.writeBuffer(n, a.Ber.BitString),
          t.endSequence(),
          t.endSequence(),
          t.endSequence());
      }
      function K(e, t) {
        (t.endSequence(), o.writeBitString(t, e.part.A.data));
      }
      function D(e, t) {
        (t.endSequence(), t.startSequence(a.Ber.OctetString));
        var r = o.mpNormalize(e.part.k.data);
        while (r.length > 32 && 0 === r[0]) r = r.slice(1);
        (t.writeBuffer(r, a.Ber.OctetString),
          t.endSequence(),
          o.writeBitString(t, e.part.A.data, 1 | a.Ber.Context));
      }
    },
    4285: function (e, t, r) {
      e.exports = v;
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3078),
        s = r(2764),
        o = r(4282),
        f = (r(3418), r(3371)),
        c = (r(799), r(3020)),
        u = r(3018),
        h = r(3019),
        p = r(4286),
        d = {};
      ((d["openssh"] = r(7703)), (d["x509"] = r(6032)), (d["pem"] = r(7704)));
      var l = f.CertificateParseError,
        g = f.InvalidAlgorithmError;
      function v(e) {
        (n.object(e, "options"),
          n.arrayOfObject(e.subjects, "options.subjects"),
          c.assertCompatible(e.subjects[0], p, [1, 0], "options.subjects"),
          c.assertCompatible(e.subjectKey, u, [1, 0], "options.subjectKey"),
          c.assertCompatible(e.issuer, p, [1, 0], "options.issuer"),
          void 0 !== e.issuerKey &&
            c.assertCompatible(e.issuerKey, u, [1, 0], "options.issuerKey"),
          n.object(e.signatures, "options.signatures"),
          n.buffer(e.serial, "options.serial"),
          n.date(e.validFrom, "options.validFrom"),
          n.date(e.validUntil, "optons.validUntil"),
          n.optionalArrayOfString(e.purposes, "options.purposes"),
          (this._hashCache = {}),
          (this.subjects = e.subjects),
          (this.issuer = e.issuer),
          (this.subjectKey = e.subjectKey),
          (this.issuerKey = e.issuerKey),
          (this.signatures = e.signatures),
          (this.serial = e.serial),
          (this.validFrom = e.validFrom),
          (this.validUntil = e.validUntil),
          (this.purposes = e.purposes));
      }
      ((v.formats = d),
        (v.prototype.toBuffer = function (e, t) {
          return (
            void 0 === e && (e = "x509"),
            n.string(e, "format"),
            n.object(d[e], "formats[format]"),
            n.optionalObject(t, "options"),
            d[e].write(this, t)
          );
        }),
        (v.prototype.toString = function (e, t) {
          return (void 0 === e && (e = "pem"), this.toBuffer(e, t).toString());
        }),
        (v.prototype.fingerprint = function (e) {
          (void 0 === e && (e = "sha256"), n.string(e, "algorithm"));
          var t = { type: "certificate", hash: this.hash(e), algorithm: e };
          return new o(t);
        }),
        (v.prototype.hash = function (e) {
          if (
            (n.string(e, "algorithm"),
            (e = e.toLowerCase()),
            void 0 === i.hashAlgs[e])
          )
            throw new g(e);
          if (this._hashCache[e]) return this._hashCache[e];
          var t = s.createHash(e).update(this.toBuffer("x509")).digest();
          return ((this._hashCache[e] = t), t);
        }),
        (v.prototype.isExpired = function (e) {
          return (
            void 0 === e && (e = new Date()),
            !(
              e.getTime() >= this.validFrom.getTime() &&
              e.getTime() < this.validUntil.getTime()
            )
          );
        }),
        (v.prototype.isSignedBy = function (e) {
          return (
            c.assertCompatible(e, v, [1, 0], "issuer"),
            !!this.issuer.equals(e.subjects[0]) &&
              !(
                this.issuer.purposes &&
                this.issuer.purposes.length > 0 &&
                -1 === this.issuer.purposes.indexOf("ca")
              ) &&
              this.isSignedByKey(e.subjectKey)
          );
        }),
        (v.prototype.getExtension = function (e) {
          n.string(e, "keyOrOid");
          var t = this.getExtensions().filter(function (t) {
            return "x509" === t.format
              ? t.oid === e
              : "openssh" === t.format && t.name === e;
          })[0];
          return t;
        }),
        (v.prototype.getExtensions = function () {
          var e = [],
            t = this.signatures.x509;
          t &&
            t.extras &&
            t.extras.exts &&
            t.extras.exts.forEach(function (t) {
              ((t.format = "x509"), e.push(t));
            });
          var r = this.signatures.openssh;
          return (
            r &&
              r.exts &&
              r.exts.forEach(function (t) {
                ((t.format = "openssh"), e.push(t));
              }),
            e
          );
        }),
        (v.prototype.isSignedByKey = function (e) {
          if (
            (c.assertCompatible(e, u, [1, 2], "issuerKey"),
            void 0 !== this.issuerKey)
          )
            return this.issuerKey.fingerprint("sha512").matches(e);
          var t = Object.keys(this.signatures)[0],
            r = d[t].verify(this, e);
          return (r && (this.issuerKey = e), r);
        }),
        (v.prototype.signWith = function (e) {
          c.assertCompatible(e, h, [1, 2], "key");
          for (var t = Object.keys(d), r = !1, n = 0; n < t.length; ++n)
            if ("pem" !== t[n]) {
              var a = d[t[n]].sign(this, e);
              !0 === a && (r = !0);
            }
          if (!r)
            throw new Error(
              "Failed to sign the certificate for any available certificate formats",
            );
        }),
        (v.createSelfSigned = function (e, t, r) {
          var i;
          ((i = Array.isArray(e) ? e : [e]),
            n.arrayOfObject(i),
            i.forEach(function (e) {
              c.assertCompatible(e, p, [1, 0], "subject");
            }),
            c.assertCompatible(t, h, [1, 2], "private key"),
            n.optionalObject(r, "options"),
            void 0 === r && (r = {}),
            n.optionalObject(r.validFrom, "options.validFrom"),
            n.optionalObject(r.validUntil, "options.validUntil"));
          var s = r.validFrom,
            o = r.validUntil;
          if ((void 0 === s && (s = new Date()), void 0 === o)) {
            n.optionalNumber(r.lifetime, "options.lifetime");
            var f = r.lifetime;
            (void 0 === f && (f = 31536e4),
              (o = new Date()),
              o.setTime(o.getTime() + 1e3 * f));
          }
          n.optionalBuffer(r.serial, "options.serial");
          var u = r.serial;
          void 0 === u && (u = a.from("0000000000000001", "hex"));
          var d = r.purposes;
          if (
            (void 0 === d && (d = []),
            -1 === d.indexOf("signature") && d.push("signature"),
            -1 === d.indexOf("ca") && d.push("ca"),
            -1 === d.indexOf("crl") && d.push("crl"),
            d.length <= 3)
          ) {
            var l = i.filter(function (e) {
                return "host" === e.type;
              }),
              g = i.filter(function (e) {
                return "user" === e.type;
              });
            (l.length > 0 &&
              -1 === d.indexOf("serverAuth") &&
              d.push("serverAuth"),
              g.length > 0 &&
                -1 === d.indexOf("clientAuth") &&
                d.push("clientAuth"),
              (g.length > 0 || l.length > 0) &&
                (-1 === d.indexOf("keyAgreement") && d.push("keyAgreement"),
                "rsa" === t.type &&
                  -1 === d.indexOf("encryption") &&
                  d.push("encryption")));
          }
          var m = new v({
            subjects: i,
            issuer: i[0],
            subjectKey: t.toPublic(),
            issuerKey: t.toPublic(),
            signatures: {},
            serial: u,
            validFrom: s,
            validUntil: o,
            purposes: d,
          });
          return (m.signWith(t), m);
        }),
        (v.create = function (e, t, r, i, s) {
          var o;
          ((o = Array.isArray(e) ? e : [e]),
            n.arrayOfObject(o),
            o.forEach(function (e) {
              c.assertCompatible(e, p, [1, 0], "subject");
            }),
            c.assertCompatible(t, u, [1, 0], "key"),
            h.isPrivateKey(t) && (t = t.toPublic()),
            c.assertCompatible(r, p, [1, 0], "issuer"),
            c.assertCompatible(i, h, [1, 2], "issuer key"),
            n.optionalObject(s, "options"),
            void 0 === s && (s = {}),
            n.optionalObject(s.validFrom, "options.validFrom"),
            n.optionalObject(s.validUntil, "options.validUntil"));
          var f = s.validFrom,
            d = s.validUntil;
          if ((void 0 === f && (f = new Date()), void 0 === d)) {
            n.optionalNumber(s.lifetime, "options.lifetime");
            var l = s.lifetime;
            (void 0 === l && (l = 31536e4),
              (d = new Date()),
              d.setTime(d.getTime() + 1e3 * l));
          }
          n.optionalBuffer(s.serial, "options.serial");
          var g = s.serial;
          void 0 === g && (g = a.from("0000000000000001", "hex"));
          var m = s.purposes;
          (void 0 === m && (m = []),
            -1 === m.indexOf("signature") && m.push("signature"),
            !0 === s.ca &&
              (-1 === m.indexOf("ca") && m.push("ca"),
              -1 === m.indexOf("crl") && m.push("crl")));
          var y = o.filter(function (e) {
              return "host" === e.type;
            }),
            w = o.filter(function (e) {
              return "user" === e.type;
            });
          (y.length > 0 &&
            -1 === m.indexOf("serverAuth") &&
            m.push("serverAuth"),
            w.length > 0 &&
              -1 === m.indexOf("clientAuth") &&
              m.push("clientAuth"),
            (w.length > 0 || y.length > 0) &&
              (-1 === m.indexOf("keyAgreement") && m.push("keyAgreement"),
              "rsa" === t.type &&
                -1 === m.indexOf("encryption") &&
                m.push("encryption")));
          var b = new v({
            subjects: o,
            issuer: r,
            subjectKey: t,
            issuerKey: i.toPublic(),
            signatures: {},
            serial: g,
            validFrom: f,
            validUntil: d,
            purposes: m,
          });
          return (b.signWith(i), b);
        }),
        (v.parse = function (e, t, r) {
          ("string" !== typeof e && n.buffer(e, "data"),
            void 0 === t && (t = "auto"),
            n.string(t, "format"),
            "string" === typeof r && (r = { filename: r }),
            n.optionalObject(r, "options"),
            void 0 === r && (r = {}),
            n.optionalString(r.filename, "options.filename"),
            void 0 === r.filename && (r.filename = "(unnamed)"),
            n.object(d[t], "formats[format]"));
          try {
            var a = d[t].read(e, r);
            return a;
          } catch (i) {
            throw new l(r.filename, t, i);
          }
        }),
        (v.isCertificate = function (e, t) {
          return c.isCompatible(e, v, t);
        }),
        (v.prototype._sshpkApiVersion = [1, 1]),
        (v._oldVersionDetect = function (e) {
          return [1, 0];
        }));
    },
    4286: function (e, t, r) {
      e.exports = u;
      var n = r(2932),
        a = (r(3078), r(2764), r(4282), r(3418), r(3371), r(799), r(3020)),
        i = r(3419),
        s = r(2933).Buffer,
        o =
          /^([*]|[a-z0-9][a-z0-9\-]{0,62})(?:\.([*]|[a-z0-9][a-z0-9\-]{0,62}))*$/i,
        f = {
          cn: "2.5.4.3",
          o: "2.5.4.10",
          ou: "2.5.4.11",
          l: "2.5.4.7",
          s: "2.5.4.8",
          c: "2.5.4.6",
          sn: "2.5.4.4",
          postalCode: "2.5.4.17",
          serialNumber: "2.5.4.5",
          street: "2.5.4.9",
          x500UniqueIdentifier: "2.5.4.45",
          role: "2.5.4.72",
          telephoneNumber: "2.5.4.20",
          description: "2.5.4.13",
          dc: "0.9.2342.19200300.100.1.25",
          uid: "0.9.2342.19200300.100.1.1",
          mail: "0.9.2342.19200300.100.1.3",
          title: "2.5.4.12",
          gn: "2.5.4.42",
          initials: "2.5.4.43",
          pseudonym: "2.5.4.65",
          emailAddress: "1.2.840.113549.1.9.1",
        },
        c = {};
      function u(e) {
        var t = this;
        if (
          (n.object(e, "options"),
          n.arrayOfObject(e.components, "options.components"),
          (this.components = e.components),
          (this.componentLookup = {}),
          this.components.forEach(function (e) {
            (e.name && !e.oid && (e.oid = f[e.name]),
              e.oid && !e.name && (e.name = c[e.oid]),
              void 0 === t.componentLookup[e.name] &&
                (t.componentLookup[e.name] = []),
              t.componentLookup[e.name].push(e));
          }),
          this.componentLookup.cn &&
            this.componentLookup.cn.length > 0 &&
            (this.cn = this.componentLookup.cn[0].value),
          n.optionalString(e.type, "options.type"),
          void 0 === e.type)
        )
          1 === this.components.length &&
          this.componentLookup.cn &&
          1 === this.componentLookup.cn.length &&
          this.componentLookup.cn[0].value.match(o)
            ? ((this.type = "host"),
              (this.hostname = this.componentLookup.cn[0].value))
            : this.componentLookup.dc &&
                this.components.length === this.componentLookup.dc.length
              ? ((this.type = "host"),
                (this.hostname = this.componentLookup.dc
                  .map(function (e) {
                    return e.value;
                  })
                  .join(".")))
              : this.componentLookup.uid &&
                  this.components.length === this.componentLookup.uid.length
                ? ((this.type = "user"),
                  (this.uid = this.componentLookup.uid[0].value))
                : this.componentLookup.cn &&
                    1 === this.componentLookup.cn.length &&
                    this.componentLookup.cn[0].value.match(o)
                  ? ((this.type = "host"),
                    (this.hostname = this.componentLookup.cn[0].value))
                  : this.componentLookup.uid &&
                      1 === this.componentLookup.uid.length
                    ? ((this.type = "user"),
                      (this.uid = this.componentLookup.uid[0].value))
                    : this.componentLookup.mail &&
                        1 === this.componentLookup.mail.length
                      ? ((this.type = "email"),
                        (this.email = this.componentLookup.mail[0].value))
                      : this.componentLookup.cn &&
                          1 === this.componentLookup.cn.length
                        ? ((this.type = "user"),
                          (this.uid = this.componentLookup.cn[0].value))
                        : (this.type = "unknown");
        else if (((this.type = e.type), "host" === this.type))
          this.hostname = e.hostname;
        else if ("user" === this.type) this.uid = e.uid;
        else {
          if ("email" !== this.type)
            throw new Error("Unknown type " + this.type);
          this.email = e.email;
        }
      }
      (Object.keys(f).forEach(function (e) {
        c[f[e]] = e;
      }),
        (u.prototype.toString = function () {
          return this.components
            .map(function (e) {
              var t = e.name.toUpperCase();
              t = t.replace(/=/g, "\\=");
              var r = e.value;
              return ((r = r.replace(/,/g, "\\,")), t + "=" + r);
            })
            .join(", ");
        }),
        (u.prototype.get = function (e, t) {
          n.string(e, "name");
          var r = this.componentLookup[e];
          if (void 0 !== r && 0 !== r.length) {
            if (!t && r.length > 1)
              throw new Error("Multiple values for attribute " + e);
            return t
              ? r.map(function (e) {
                  return e.value;
                })
              : r[0].value;
          }
        }),
        (u.prototype.toArray = function (e) {
          return this.components.map(function (e) {
            return { name: e.name, value: e.value };
          });
        }));
      var h = /[^a-zA-Z0-9 '(),+.\/:=?-]/,
        p = /[^\x00-\x7f]/;
      function d(e, t) {
        if ("**" === e || "**" === t) return !0;
        var r = e.split("."),
          n = t.split(".");
        if (r.length !== n.length) return !1;
        for (var a = 0; a < r.length; ++a)
          if ("*" !== r[a] && "*" !== n[a] && r[a] !== n[a]) return !1;
        return !0;
      }
      ((u.prototype.toAsn1 = function (e, t) {
        (e.startSequence(t),
          this.components.forEach(function (t) {
            if (
              (e.startSequence(i.Ber.Constructor | i.Ber.Set),
              e.startSequence(),
              e.writeOID(t.oid),
              t.asn1type === i.Ber.Utf8String || t.value.match(p))
            ) {
              var r = s.from(t.value, "utf8");
              e.writeBuffer(r, i.Ber.Utf8String);
            } else if (t.asn1type === i.Ber.IA5String || t.value.match(h))
              e.writeString(t.value, i.Ber.IA5String);
            else {
              var n = i.Ber.PrintableString;
              (void 0 !== t.asn1type && (n = t.asn1type),
                e.writeString(t.value, n));
            }
            (e.endSequence(), e.endSequence());
          }),
          e.endSequence());
      }),
        (u.prototype.equals = function (e) {
          if (!u.isIdentity(e, [1, 0])) return !1;
          if (e.components.length !== this.components.length) return !1;
          for (var t = 0; t < this.components.length; ++t) {
            if (this.components[t].oid !== e.components[t].oid) return !1;
            if (!d(this.components[t].value, e.components[t].value)) return !1;
          }
          return !0;
        }),
        (u.forHost = function (e) {
          return (
            n.string(e, "hostname"),
            new u({
              type: "host",
              hostname: e,
              components: [{ name: "cn", value: e }],
            })
          );
        }),
        (u.forUser = function (e) {
          return (
            n.string(e, "uid"),
            new u({
              type: "user",
              uid: e,
              components: [{ name: "uid", value: e }],
            })
          );
        }),
        (u.forEmail = function (e) {
          return (
            n.string(e, "email"),
            new u({
              type: "email",
              email: e,
              components: [{ name: "mail", value: e }],
            })
          );
        }),
        (u.parseDN = function (e) {
          n.string(e, "dn");
          var t = [""],
            r = 0,
            a = e;
          while (a.length > 0) {
            var i;
            if (null !== (i = /^,/.exec(a)))
              ((t[++r] = ""), (a = a.slice(i[0].length)));
            else if (null !== (i = /^\\,/.exec(a)))
              ((t[r] += ","), (a = a.slice(i[0].length)));
            else if (null !== (i = /^\\./.exec(a)))
              ((t[r] += i[0]), (a = a.slice(i[0].length)));
            else {
              if (null === (i = /^[^\\,]+/.exec(a)))
                throw new Error("Failed to parse DN");
              ((t[r] += i[0]), (a = a.slice(i[0].length)));
            }
          }
          var s = t.map(function (e) {
            e = e.trim();
            var t = e.indexOf("=");
            while (t > 0 && "\\" === e.charAt(t - 1)) t = e.indexOf("=", t + 1);
            if (-1 === t) throw new Error("Failed to parse DN");
            var r = e.slice(0, t).toLowerCase().replace(/\\=/g, "="),
              n = e.slice(t + 1);
            return { name: r, value: n };
          });
          return new u({ components: s });
        }),
        (u.fromArray = function (e) {
          return (
            n.arrayOfObject(e, "components"),
            e.forEach(function (e) {
              if (
                (n.object(e, "component"),
                n.string(e.name, "component.name"),
                !s.isBuffer(e.value) && "string" !== typeof e.value)
              )
                throw new Error("Invalid component value");
            }),
            new u({ components: e })
          );
        }),
        (u.parseAsn1 = function (e, t) {
          var r = [];
          e.readSequence(t);
          var n = e.offset + e.length;
          while (e.offset < n) {
            e.readSequence(i.Ber.Constructor | i.Ber.Set);
            var a = e.offset + e.length;
            e.readSequence();
            var s,
              o = e.readOID(),
              f = e.peek();
            switch (f) {
              case i.Ber.PrintableString:
              case i.Ber.IA5String:
              case i.Ber.OctetString:
              case i.Ber.T61String:
                s = e.readString(f);
                break;
              case i.Ber.Utf8String:
                ((s = e.readString(f, !0)), (s = s.toString("utf8")));
                break;
              case i.Ber.CharacterString:
              case i.Ber.BMPString:
                ((s = e.readString(f, !0)), (s = s.toString("utf16le")));
                break;
              default:
                throw new Error("Unknown asn1 type " + f);
            }
            (r.push({ oid: o, asn1type: f, value: s }), (e._offset = a));
          }
          return ((e._offset = n), new u({ components: r }));
        }),
        (u.isIdentity = function (e, t) {
          return a.isCompatible(e, u, t);
        }),
        (u.prototype._sshpkApiVersion = [1, 0]),
        (u._oldVersionDetect = function (e) {
          return [1, 0];
        }));
    },
    4659: function (e, t, r) {
      (function (e) {
        "use strict";
        var t = function (e) {
            var t,
              r = new Float64Array(16);
            if (e) for (t = 0; t < e.length; t++) r[t] = e[t];
            return r;
          },
          n = function () {
            throw new Error("no PRNG");
          },
          a = new Uint8Array(16),
          i = new Uint8Array(32);
        i[0] = 9;
        var s = t(),
          o = t([1]),
          f = t([56129, 1]),
          c = t([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          u = t([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          h = t([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          p = t([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          d = t([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function l(e, t, r, n) {
          ((e[t] = (r >> 24) & 255),
            (e[t + 1] = (r >> 16) & 255),
            (e[t + 2] = (r >> 8) & 255),
            (e[t + 3] = 255 & r),
            (e[t + 4] = (n >> 24) & 255),
            (e[t + 5] = (n >> 16) & 255),
            (e[t + 6] = (n >> 8) & 255),
            (e[t + 7] = 255 & n));
        }
        function g(e, t, r, n, a) {
          var i,
            s = 0;
          for (i = 0; i < a; i++) s |= e[t + i] ^ r[n + i];
          return (1 & ((s - 1) >>> 8)) - 1;
        }
        function v(e, t, r, n) {
          return g(e, t, r, n, 16);
        }
        function m(e, t, r, n) {
          return g(e, t, r, n, 32);
        }
        function y(e, t, r, n) {
          for (
            var a,
              i =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              s =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              o =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              f =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              c =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              u =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              h =
                (255 & t[0]) |
                ((255 & t[1]) << 8) |
                ((255 & t[2]) << 16) |
                ((255 & t[3]) << 24),
              p =
                (255 & t[4]) |
                ((255 & t[5]) << 8) |
                ((255 & t[6]) << 16) |
                ((255 & t[7]) << 24),
              d =
                (255 & t[8]) |
                ((255 & t[9]) << 8) |
                ((255 & t[10]) << 16) |
                ((255 & t[11]) << 24),
              l =
                (255 & t[12]) |
                ((255 & t[13]) << 8) |
                ((255 & t[14]) << 16) |
                ((255 & t[15]) << 24),
              g =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              v =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              m =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              y =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              w =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              b =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              S = i,
              k = s,
              B = o,
              E = f,
              A = c,
              F = u,
              _ = h,
              x = p,
              q = d,
              I = l,
              P = g,
              C = v,
              U = m,
              O = y,
              K = w,
              D = b,
              z = 0;
            z < 20;
            z += 2
          )
            ((a = (S + U) | 0),
              (A ^= (a << 7) | (a >>> 25)),
              (a = (A + S) | 0),
              (q ^= (a << 9) | (a >>> 23)),
              (a = (q + A) | 0),
              (U ^= (a << 13) | (a >>> 19)),
              (a = (U + q) | 0),
              (S ^= (a << 18) | (a >>> 14)),
              (a = (F + k) | 0),
              (I ^= (a << 7) | (a >>> 25)),
              (a = (I + F) | 0),
              (O ^= (a << 9) | (a >>> 23)),
              (a = (O + I) | 0),
              (k ^= (a << 13) | (a >>> 19)),
              (a = (k + O) | 0),
              (F ^= (a << 18) | (a >>> 14)),
              (a = (P + _) | 0),
              (K ^= (a << 7) | (a >>> 25)),
              (a = (K + P) | 0),
              (B ^= (a << 9) | (a >>> 23)),
              (a = (B + K) | 0),
              (_ ^= (a << 13) | (a >>> 19)),
              (a = (_ + B) | 0),
              (P ^= (a << 18) | (a >>> 14)),
              (a = (D + C) | 0),
              (E ^= (a << 7) | (a >>> 25)),
              (a = (E + D) | 0),
              (x ^= (a << 9) | (a >>> 23)),
              (a = (x + E) | 0),
              (C ^= (a << 13) | (a >>> 19)),
              (a = (C + x) | 0),
              (D ^= (a << 18) | (a >>> 14)),
              (a = (S + E) | 0),
              (k ^= (a << 7) | (a >>> 25)),
              (a = (k + S) | 0),
              (B ^= (a << 9) | (a >>> 23)),
              (a = (B + k) | 0),
              (E ^= (a << 13) | (a >>> 19)),
              (a = (E + B) | 0),
              (S ^= (a << 18) | (a >>> 14)),
              (a = (F + A) | 0),
              (_ ^= (a << 7) | (a >>> 25)),
              (a = (_ + F) | 0),
              (x ^= (a << 9) | (a >>> 23)),
              (a = (x + _) | 0),
              (A ^= (a << 13) | (a >>> 19)),
              (a = (A + x) | 0),
              (F ^= (a << 18) | (a >>> 14)),
              (a = (P + I) | 0),
              (C ^= (a << 7) | (a >>> 25)),
              (a = (C + P) | 0),
              (q ^= (a << 9) | (a >>> 23)),
              (a = (q + C) | 0),
              (I ^= (a << 13) | (a >>> 19)),
              (a = (I + q) | 0),
              (P ^= (a << 18) | (a >>> 14)),
              (a = (D + K) | 0),
              (U ^= (a << 7) | (a >>> 25)),
              (a = (U + D) | 0),
              (O ^= (a << 9) | (a >>> 23)),
              (a = (O + U) | 0),
              (K ^= (a << 13) | (a >>> 19)),
              (a = (K + O) | 0),
              (D ^= (a << 18) | (a >>> 14)));
          ((S = (S + i) | 0),
            (k = (k + s) | 0),
            (B = (B + o) | 0),
            (E = (E + f) | 0),
            (A = (A + c) | 0),
            (F = (F + u) | 0),
            (_ = (_ + h) | 0),
            (x = (x + p) | 0),
            (q = (q + d) | 0),
            (I = (I + l) | 0),
            (P = (P + g) | 0),
            (C = (C + v) | 0),
            (U = (U + m) | 0),
            (O = (O + y) | 0),
            (K = (K + w) | 0),
            (D = (D + b) | 0),
            (e[0] = (S >>> 0) & 255),
            (e[1] = (S >>> 8) & 255),
            (e[2] = (S >>> 16) & 255),
            (e[3] = (S >>> 24) & 255),
            (e[4] = (k >>> 0) & 255),
            (e[5] = (k >>> 8) & 255),
            (e[6] = (k >>> 16) & 255),
            (e[7] = (k >>> 24) & 255),
            (e[8] = (B >>> 0) & 255),
            (e[9] = (B >>> 8) & 255),
            (e[10] = (B >>> 16) & 255),
            (e[11] = (B >>> 24) & 255),
            (e[12] = (E >>> 0) & 255),
            (e[13] = (E >>> 8) & 255),
            (e[14] = (E >>> 16) & 255),
            (e[15] = (E >>> 24) & 255),
            (e[16] = (A >>> 0) & 255),
            (e[17] = (A >>> 8) & 255),
            (e[18] = (A >>> 16) & 255),
            (e[19] = (A >>> 24) & 255),
            (e[20] = (F >>> 0) & 255),
            (e[21] = (F >>> 8) & 255),
            (e[22] = (F >>> 16) & 255),
            (e[23] = (F >>> 24) & 255),
            (e[24] = (_ >>> 0) & 255),
            (e[25] = (_ >>> 8) & 255),
            (e[26] = (_ >>> 16) & 255),
            (e[27] = (_ >>> 24) & 255),
            (e[28] = (x >>> 0) & 255),
            (e[29] = (x >>> 8) & 255),
            (e[30] = (x >>> 16) & 255),
            (e[31] = (x >>> 24) & 255),
            (e[32] = (q >>> 0) & 255),
            (e[33] = (q >>> 8) & 255),
            (e[34] = (q >>> 16) & 255),
            (e[35] = (q >>> 24) & 255),
            (e[36] = (I >>> 0) & 255),
            (e[37] = (I >>> 8) & 255),
            (e[38] = (I >>> 16) & 255),
            (e[39] = (I >>> 24) & 255),
            (e[40] = (P >>> 0) & 255),
            (e[41] = (P >>> 8) & 255),
            (e[42] = (P >>> 16) & 255),
            (e[43] = (P >>> 24) & 255),
            (e[44] = (C >>> 0) & 255),
            (e[45] = (C >>> 8) & 255),
            (e[46] = (C >>> 16) & 255),
            (e[47] = (C >>> 24) & 255),
            (e[48] = (U >>> 0) & 255),
            (e[49] = (U >>> 8) & 255),
            (e[50] = (U >>> 16) & 255),
            (e[51] = (U >>> 24) & 255),
            (e[52] = (O >>> 0) & 255),
            (e[53] = (O >>> 8) & 255),
            (e[54] = (O >>> 16) & 255),
            (e[55] = (O >>> 24) & 255),
            (e[56] = (K >>> 0) & 255),
            (e[57] = (K >>> 8) & 255),
            (e[58] = (K >>> 16) & 255),
            (e[59] = (K >>> 24) & 255),
            (e[60] = (D >>> 0) & 255),
            (e[61] = (D >>> 8) & 255),
            (e[62] = (D >>> 16) & 255),
            (e[63] = (D >>> 24) & 255));
        }
        function w(e, t, r, n) {
          for (
            var a,
              i =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              s =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              o =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              f =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              c =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              u =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              h =
                (255 & t[0]) |
                ((255 & t[1]) << 8) |
                ((255 & t[2]) << 16) |
                ((255 & t[3]) << 24),
              p =
                (255 & t[4]) |
                ((255 & t[5]) << 8) |
                ((255 & t[6]) << 16) |
                ((255 & t[7]) << 24),
              d =
                (255 & t[8]) |
                ((255 & t[9]) << 8) |
                ((255 & t[10]) << 16) |
                ((255 & t[11]) << 24),
              l =
                (255 & t[12]) |
                ((255 & t[13]) << 8) |
                ((255 & t[14]) << 16) |
                ((255 & t[15]) << 24),
              g =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              v =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              m =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              y =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              w =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              b =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              S = i,
              k = s,
              B = o,
              E = f,
              A = c,
              F = u,
              _ = h,
              x = p,
              q = d,
              I = l,
              P = g,
              C = v,
              U = m,
              O = y,
              K = w,
              D = b,
              z = 0;
            z < 20;
            z += 2
          )
            ((a = (S + U) | 0),
              (A ^= (a << 7) | (a >>> 25)),
              (a = (A + S) | 0),
              (q ^= (a << 9) | (a >>> 23)),
              (a = (q + A) | 0),
              (U ^= (a << 13) | (a >>> 19)),
              (a = (U + q) | 0),
              (S ^= (a << 18) | (a >>> 14)),
              (a = (F + k) | 0),
              (I ^= (a << 7) | (a >>> 25)),
              (a = (I + F) | 0),
              (O ^= (a << 9) | (a >>> 23)),
              (a = (O + I) | 0),
              (k ^= (a << 13) | (a >>> 19)),
              (a = (k + O) | 0),
              (F ^= (a << 18) | (a >>> 14)),
              (a = (P + _) | 0),
              (K ^= (a << 7) | (a >>> 25)),
              (a = (K + P) | 0),
              (B ^= (a << 9) | (a >>> 23)),
              (a = (B + K) | 0),
              (_ ^= (a << 13) | (a >>> 19)),
              (a = (_ + B) | 0),
              (P ^= (a << 18) | (a >>> 14)),
              (a = (D + C) | 0),
              (E ^= (a << 7) | (a >>> 25)),
              (a = (E + D) | 0),
              (x ^= (a << 9) | (a >>> 23)),
              (a = (x + E) | 0),
              (C ^= (a << 13) | (a >>> 19)),
              (a = (C + x) | 0),
              (D ^= (a << 18) | (a >>> 14)),
              (a = (S + E) | 0),
              (k ^= (a << 7) | (a >>> 25)),
              (a = (k + S) | 0),
              (B ^= (a << 9) | (a >>> 23)),
              (a = (B + k) | 0),
              (E ^= (a << 13) | (a >>> 19)),
              (a = (E + B) | 0),
              (S ^= (a << 18) | (a >>> 14)),
              (a = (F + A) | 0),
              (_ ^= (a << 7) | (a >>> 25)),
              (a = (_ + F) | 0),
              (x ^= (a << 9) | (a >>> 23)),
              (a = (x + _) | 0),
              (A ^= (a << 13) | (a >>> 19)),
              (a = (A + x) | 0),
              (F ^= (a << 18) | (a >>> 14)),
              (a = (P + I) | 0),
              (C ^= (a << 7) | (a >>> 25)),
              (a = (C + P) | 0),
              (q ^= (a << 9) | (a >>> 23)),
              (a = (q + C) | 0),
              (I ^= (a << 13) | (a >>> 19)),
              (a = (I + q) | 0),
              (P ^= (a << 18) | (a >>> 14)),
              (a = (D + K) | 0),
              (U ^= (a << 7) | (a >>> 25)),
              (a = (U + D) | 0),
              (O ^= (a << 9) | (a >>> 23)),
              (a = (O + U) | 0),
              (K ^= (a << 13) | (a >>> 19)),
              (a = (K + O) | 0),
              (D ^= (a << 18) | (a >>> 14)));
          ((e[0] = (S >>> 0) & 255),
            (e[1] = (S >>> 8) & 255),
            (e[2] = (S >>> 16) & 255),
            (e[3] = (S >>> 24) & 255),
            (e[4] = (F >>> 0) & 255),
            (e[5] = (F >>> 8) & 255),
            (e[6] = (F >>> 16) & 255),
            (e[7] = (F >>> 24) & 255),
            (e[8] = (P >>> 0) & 255),
            (e[9] = (P >>> 8) & 255),
            (e[10] = (P >>> 16) & 255),
            (e[11] = (P >>> 24) & 255),
            (e[12] = (D >>> 0) & 255),
            (e[13] = (D >>> 8) & 255),
            (e[14] = (D >>> 16) & 255),
            (e[15] = (D >>> 24) & 255),
            (e[16] = (_ >>> 0) & 255),
            (e[17] = (_ >>> 8) & 255),
            (e[18] = (_ >>> 16) & 255),
            (e[19] = (_ >>> 24) & 255),
            (e[20] = (x >>> 0) & 255),
            (e[21] = (x >>> 8) & 255),
            (e[22] = (x >>> 16) & 255),
            (e[23] = (x >>> 24) & 255),
            (e[24] = (q >>> 0) & 255),
            (e[25] = (q >>> 8) & 255),
            (e[26] = (q >>> 16) & 255),
            (e[27] = (q >>> 24) & 255),
            (e[28] = (I >>> 0) & 255),
            (e[29] = (I >>> 8) & 255),
            (e[30] = (I >>> 16) & 255),
            (e[31] = (I >>> 24) & 255));
        }
        function b(e, t, r, n) {
          y(e, t, r, n);
        }
        function S(e, t, r, n) {
          w(e, t, r, n);
        }
        var k = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function B(e, t, r, n, a, i, s) {
          var o,
            f,
            c = new Uint8Array(16),
            u = new Uint8Array(64);
          for (f = 0; f < 16; f++) c[f] = 0;
          for (f = 0; f < 8; f++) c[f] = i[f];
          while (a >= 64) {
            for (b(u, c, s, k), f = 0; f < 64; f++) e[t + f] = r[n + f] ^ u[f];
            for (o = 1, f = 8; f < 16; f++)
              ((o = (o + (255 & c[f])) | 0), (c[f] = 255 & o), (o >>>= 8));
            ((a -= 64), (t += 64), (n += 64));
          }
          if (a > 0)
            for (b(u, c, s, k), f = 0; f < a; f++) e[t + f] = r[n + f] ^ u[f];
          return 0;
        }
        function E(e, t, r, n, a) {
          var i,
            s,
            o = new Uint8Array(16),
            f = new Uint8Array(64);
          for (s = 0; s < 16; s++) o[s] = 0;
          for (s = 0; s < 8; s++) o[s] = n[s];
          while (r >= 64) {
            for (b(f, o, a, k), s = 0; s < 64; s++) e[t + s] = f[s];
            for (i = 1, s = 8; s < 16; s++)
              ((i = (i + (255 & o[s])) | 0), (o[s] = 255 & i), (i >>>= 8));
            ((r -= 64), (t += 64));
          }
          if (r > 0) for (b(f, o, a, k), s = 0; s < r; s++) e[t + s] = f[s];
          return 0;
        }
        function A(e, t, r, n, a) {
          var i = new Uint8Array(32);
          S(i, n, a, k);
          for (var s = new Uint8Array(8), o = 0; o < 8; o++) s[o] = n[o + 16];
          return E(e, t, r, s, i);
        }
        function F(e, t, r, n, a, i, s) {
          var o = new Uint8Array(32);
          S(o, i, s, k);
          for (var f = new Uint8Array(8), c = 0; c < 8; c++) f[c] = i[c + 16];
          return B(e, t, r, n, a, f, o);
        }
        var _ = function (e) {
          var t, r, n, a, i, s, o, f;
          ((this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (t = (255 & e[0]) | ((255 & e[1]) << 8)),
            (this.r[0] = 8191 & t),
            (r = (255 & e[2]) | ((255 & e[3]) << 8)),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (n = (255 & e[4]) | ((255 & e[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (a = (255 & e[6]) | ((255 & e[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (a << 9))),
            (i = (255 & e[8]) | ((255 & e[9]) << 8)),
            (this.r[4] = 255 & ((a >>> 4) | (i << 12))),
            (this.r[5] = (i >>> 1) & 8190),
            (s = (255 & e[10]) | ((255 & e[11]) << 8)),
            (this.r[6] = 8191 & ((i >>> 14) | (s << 2))),
            (o = (255 & e[12]) | ((255 & e[13]) << 8)),
            (this.r[7] = 8065 & ((s >>> 11) | (o << 5))),
            (f = (255 & e[14]) | ((255 & e[15]) << 8)),
            (this.r[8] = 8191 & ((o >>> 8) | (f << 8))),
            (this.r[9] = (f >>> 5) & 127),
            (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
            (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
            (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
            (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
            (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
            (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
            (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
            (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8)));
        };
        function x(e, t, r, n, a, i) {
          var s = new _(i);
          return (s.update(r, n, a), s.finish(e, t), 0);
        }
        function q(e, t, r, n, a, i) {
          var s = new Uint8Array(16);
          return (x(s, 0, r, n, a, i), v(e, t, s, 0));
        }
        function I(e, t, r, n, a) {
          var i;
          if (r < 32) return -1;
          for (
            F(e, 0, t, 0, r, n, a), x(e, 16, e, 32, r - 32, e), i = 0;
            i < 16;
            i++
          )
            e[i] = 0;
          return 0;
        }
        function P(e, t, r, n, a) {
          var i,
            s = new Uint8Array(32);
          if (r < 32) return -1;
          if ((A(s, 0, 32, n, a), 0 !== q(t, 16, t, 32, r - 32, s))) return -1;
          for (F(e, 0, t, 0, r, n, a), i = 0; i < 32; i++) e[i] = 0;
          return 0;
        }
        function C(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = 0 | t[r];
        }
        function U(e) {
          var t,
            r,
            n = 1;
          for (t = 0; t < 16; t++)
            ((r = e[t] + n + 65535),
              (n = Math.floor(r / 65536)),
              (e[t] = r - 65536 * n));
          e[0] += n - 1 + 37 * (n - 1);
        }
        function O(e, t, r) {
          for (var n, a = ~(r - 1), i = 0; i < 16; i++)
            ((n = a & (e[i] ^ t[i])), (e[i] ^= n), (t[i] ^= n));
        }
        function K(e, r) {
          var n,
            a,
            i,
            s = t(),
            o = t();
          for (n = 0; n < 16; n++) o[n] = r[n];
          for (U(o), U(o), U(o), a = 0; a < 2; a++) {
            for (s[0] = o[0] - 65517, n = 1; n < 15; n++)
              ((s[n] = o[n] - 65535 - ((s[n - 1] >> 16) & 1)),
                (s[n - 1] &= 65535));
            ((s[15] = o[15] - 32767 - ((s[14] >> 16) & 1)),
              (i = (s[15] >> 16) & 1),
              (s[14] &= 65535),
              O(o, s, 1 - i));
          }
          for (n = 0; n < 16; n++)
            ((e[2 * n] = 255 & o[n]), (e[2 * n + 1] = o[n] >> 8));
        }
        function D(e, t) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return (K(r, e), K(n, t), m(r, 0, n, 0));
        }
        function z(e) {
          var t = new Uint8Array(32);
          return (K(t, e), 1 & t[0]);
        }
        function T(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
          e[15] &= 32767;
        }
        function j(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] + r[n];
        }
        function N(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] - r[n];
        }
        function L(e, t, r) {
          var n,
            a,
            i = 0,
            s = 0,
            o = 0,
            f = 0,
            c = 0,
            u = 0,
            h = 0,
            p = 0,
            d = 0,
            l = 0,
            g = 0,
            v = 0,
            m = 0,
            y = 0,
            w = 0,
            b = 0,
            S = 0,
            k = 0,
            B = 0,
            E = 0,
            A = 0,
            F = 0,
            _ = 0,
            x = 0,
            q = 0,
            I = 0,
            P = 0,
            C = 0,
            U = 0,
            O = 0,
            K = 0,
            D = r[0],
            z = r[1],
            T = r[2],
            j = r[3],
            N = r[4],
            L = r[5],
            H = r[6],
            M = r[7],
            R = r[8],
            Y = r[9],
            V = r[10],
            G = r[11],
            Z = r[12],
            Q = r[13],
            W = r[14],
            $ = r[15];
          ((n = t[0]),
            (i += n * D),
            (s += n * z),
            (o += n * T),
            (f += n * j),
            (c += n * N),
            (u += n * L),
            (h += n * H),
            (p += n * M),
            (d += n * R),
            (l += n * Y),
            (g += n * V),
            (v += n * G),
            (m += n * Z),
            (y += n * Q),
            (w += n * W),
            (b += n * $),
            (n = t[1]),
            (s += n * D),
            (o += n * z),
            (f += n * T),
            (c += n * j),
            (u += n * N),
            (h += n * L),
            (p += n * H),
            (d += n * M),
            (l += n * R),
            (g += n * Y),
            (v += n * V),
            (m += n * G),
            (y += n * Z),
            (w += n * Q),
            (b += n * W),
            (S += n * $),
            (n = t[2]),
            (o += n * D),
            (f += n * z),
            (c += n * T),
            (u += n * j),
            (h += n * N),
            (p += n * L),
            (d += n * H),
            (l += n * M),
            (g += n * R),
            (v += n * Y),
            (m += n * V),
            (y += n * G),
            (w += n * Z),
            (b += n * Q),
            (S += n * W),
            (k += n * $),
            (n = t[3]),
            (f += n * D),
            (c += n * z),
            (u += n * T),
            (h += n * j),
            (p += n * N),
            (d += n * L),
            (l += n * H),
            (g += n * M),
            (v += n * R),
            (m += n * Y),
            (y += n * V),
            (w += n * G),
            (b += n * Z),
            (S += n * Q),
            (k += n * W),
            (B += n * $),
            (n = t[4]),
            (c += n * D),
            (u += n * z),
            (h += n * T),
            (p += n * j),
            (d += n * N),
            (l += n * L),
            (g += n * H),
            (v += n * M),
            (m += n * R),
            (y += n * Y),
            (w += n * V),
            (b += n * G),
            (S += n * Z),
            (k += n * Q),
            (B += n * W),
            (E += n * $),
            (n = t[5]),
            (u += n * D),
            (h += n * z),
            (p += n * T),
            (d += n * j),
            (l += n * N),
            (g += n * L),
            (v += n * H),
            (m += n * M),
            (y += n * R),
            (w += n * Y),
            (b += n * V),
            (S += n * G),
            (k += n * Z),
            (B += n * Q),
            (E += n * W),
            (A += n * $),
            (n = t[6]),
            (h += n * D),
            (p += n * z),
            (d += n * T),
            (l += n * j),
            (g += n * N),
            (v += n * L),
            (m += n * H),
            (y += n * M),
            (w += n * R),
            (b += n * Y),
            (S += n * V),
            (k += n * G),
            (B += n * Z),
            (E += n * Q),
            (A += n * W),
            (F += n * $),
            (n = t[7]),
            (p += n * D),
            (d += n * z),
            (l += n * T),
            (g += n * j),
            (v += n * N),
            (m += n * L),
            (y += n * H),
            (w += n * M),
            (b += n * R),
            (S += n * Y),
            (k += n * V),
            (B += n * G),
            (E += n * Z),
            (A += n * Q),
            (F += n * W),
            (_ += n * $),
            (n = t[8]),
            (d += n * D),
            (l += n * z),
            (g += n * T),
            (v += n * j),
            (m += n * N),
            (y += n * L),
            (w += n * H),
            (b += n * M),
            (S += n * R),
            (k += n * Y),
            (B += n * V),
            (E += n * G),
            (A += n * Z),
            (F += n * Q),
            (_ += n * W),
            (x += n * $),
            (n = t[9]),
            (l += n * D),
            (g += n * z),
            (v += n * T),
            (m += n * j),
            (y += n * N),
            (w += n * L),
            (b += n * H),
            (S += n * M),
            (k += n * R),
            (B += n * Y),
            (E += n * V),
            (A += n * G),
            (F += n * Z),
            (_ += n * Q),
            (x += n * W),
            (q += n * $),
            (n = t[10]),
            (g += n * D),
            (v += n * z),
            (m += n * T),
            (y += n * j),
            (w += n * N),
            (b += n * L),
            (S += n * H),
            (k += n * M),
            (B += n * R),
            (E += n * Y),
            (A += n * V),
            (F += n * G),
            (_ += n * Z),
            (x += n * Q),
            (q += n * W),
            (I += n * $),
            (n = t[11]),
            (v += n * D),
            (m += n * z),
            (y += n * T),
            (w += n * j),
            (b += n * N),
            (S += n * L),
            (k += n * H),
            (B += n * M),
            (E += n * R),
            (A += n * Y),
            (F += n * V),
            (_ += n * G),
            (x += n * Z),
            (q += n * Q),
            (I += n * W),
            (P += n * $),
            (n = t[12]),
            (m += n * D),
            (y += n * z),
            (w += n * T),
            (b += n * j),
            (S += n * N),
            (k += n * L),
            (B += n * H),
            (E += n * M),
            (A += n * R),
            (F += n * Y),
            (_ += n * V),
            (x += n * G),
            (q += n * Z),
            (I += n * Q),
            (P += n * W),
            (C += n * $),
            (n = t[13]),
            (y += n * D),
            (w += n * z),
            (b += n * T),
            (S += n * j),
            (k += n * N),
            (B += n * L),
            (E += n * H),
            (A += n * M),
            (F += n * R),
            (_ += n * Y),
            (x += n * V),
            (q += n * G),
            (I += n * Z),
            (P += n * Q),
            (C += n * W),
            (U += n * $),
            (n = t[14]),
            (w += n * D),
            (b += n * z),
            (S += n * T),
            (k += n * j),
            (B += n * N),
            (E += n * L),
            (A += n * H),
            (F += n * M),
            (_ += n * R),
            (x += n * Y),
            (q += n * V),
            (I += n * G),
            (P += n * Z),
            (C += n * Q),
            (U += n * W),
            (O += n * $),
            (n = t[15]),
            (b += n * D),
            (S += n * z),
            (k += n * T),
            (B += n * j),
            (E += n * N),
            (A += n * L),
            (F += n * H),
            (_ += n * M),
            (x += n * R),
            (q += n * Y),
            (I += n * V),
            (P += n * G),
            (C += n * Z),
            (U += n * Q),
            (O += n * W),
            (K += n * $),
            (i += 38 * S),
            (s += 38 * k),
            (o += 38 * B),
            (f += 38 * E),
            (c += 38 * A),
            (u += 38 * F),
            (h += 38 * _),
            (p += 38 * x),
            (d += 38 * q),
            (l += 38 * I),
            (g += 38 * P),
            (v += 38 * C),
            (m += 38 * U),
            (y += 38 * O),
            (w += 38 * K),
            (a = 1),
            (n = i + a + 65535),
            (a = Math.floor(n / 65536)),
            (i = n - 65536 * a),
            (n = s + a + 65535),
            (a = Math.floor(n / 65536)),
            (s = n - 65536 * a),
            (n = o + a + 65535),
            (a = Math.floor(n / 65536)),
            (o = n - 65536 * a),
            (n = f + a + 65535),
            (a = Math.floor(n / 65536)),
            (f = n - 65536 * a),
            (n = c + a + 65535),
            (a = Math.floor(n / 65536)),
            (c = n - 65536 * a),
            (n = u + a + 65535),
            (a = Math.floor(n / 65536)),
            (u = n - 65536 * a),
            (n = h + a + 65535),
            (a = Math.floor(n / 65536)),
            (h = n - 65536 * a),
            (n = p + a + 65535),
            (a = Math.floor(n / 65536)),
            (p = n - 65536 * a),
            (n = d + a + 65535),
            (a = Math.floor(n / 65536)),
            (d = n - 65536 * a),
            (n = l + a + 65535),
            (a = Math.floor(n / 65536)),
            (l = n - 65536 * a),
            (n = g + a + 65535),
            (a = Math.floor(n / 65536)),
            (g = n - 65536 * a),
            (n = v + a + 65535),
            (a = Math.floor(n / 65536)),
            (v = n - 65536 * a),
            (n = m + a + 65535),
            (a = Math.floor(n / 65536)),
            (m = n - 65536 * a),
            (n = y + a + 65535),
            (a = Math.floor(n / 65536)),
            (y = n - 65536 * a),
            (n = w + a + 65535),
            (a = Math.floor(n / 65536)),
            (w = n - 65536 * a),
            (n = b + a + 65535),
            (a = Math.floor(n / 65536)),
            (b = n - 65536 * a),
            (i += a - 1 + 37 * (a - 1)),
            (a = 1),
            (n = i + a + 65535),
            (a = Math.floor(n / 65536)),
            (i = n - 65536 * a),
            (n = s + a + 65535),
            (a = Math.floor(n / 65536)),
            (s = n - 65536 * a),
            (n = o + a + 65535),
            (a = Math.floor(n / 65536)),
            (o = n - 65536 * a),
            (n = f + a + 65535),
            (a = Math.floor(n / 65536)),
            (f = n - 65536 * a),
            (n = c + a + 65535),
            (a = Math.floor(n / 65536)),
            (c = n - 65536 * a),
            (n = u + a + 65535),
            (a = Math.floor(n / 65536)),
            (u = n - 65536 * a),
            (n = h + a + 65535),
            (a = Math.floor(n / 65536)),
            (h = n - 65536 * a),
            (n = p + a + 65535),
            (a = Math.floor(n / 65536)),
            (p = n - 65536 * a),
            (n = d + a + 65535),
            (a = Math.floor(n / 65536)),
            (d = n - 65536 * a),
            (n = l + a + 65535),
            (a = Math.floor(n / 65536)),
            (l = n - 65536 * a),
            (n = g + a + 65535),
            (a = Math.floor(n / 65536)),
            (g = n - 65536 * a),
            (n = v + a + 65535),
            (a = Math.floor(n / 65536)),
            (v = n - 65536 * a),
            (n = m + a + 65535),
            (a = Math.floor(n / 65536)),
            (m = n - 65536 * a),
            (n = y + a + 65535),
            (a = Math.floor(n / 65536)),
            (y = n - 65536 * a),
            (n = w + a + 65535),
            (a = Math.floor(n / 65536)),
            (w = n - 65536 * a),
            (n = b + a + 65535),
            (a = Math.floor(n / 65536)),
            (b = n - 65536 * a),
            (i += a - 1 + 37 * (a - 1)),
            (e[0] = i),
            (e[1] = s),
            (e[2] = o),
            (e[3] = f),
            (e[4] = c),
            (e[5] = u),
            (e[6] = h),
            (e[7] = p),
            (e[8] = d),
            (e[9] = l),
            (e[10] = g),
            (e[11] = v),
            (e[12] = m),
            (e[13] = y),
            (e[14] = w),
            (e[15] = b));
        }
        function H(e, t) {
          L(e, t, t);
        }
        function M(e, r) {
          var n,
            a = t();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (n = 253; n >= 0; n--)
            (H(a, a), 2 !== n && 4 !== n && L(a, a, r));
          for (n = 0; n < 16; n++) e[n] = a[n];
        }
        function R(e, r) {
          var n,
            a = t();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (n = 250; n >= 0; n--) (H(a, a), 1 !== n && L(a, a, r));
          for (n = 0; n < 16; n++) e[n] = a[n];
        }
        function Y(e, r, n) {
          var a,
            i,
            s = new Uint8Array(32),
            o = new Float64Array(80),
            c = t(),
            u = t(),
            h = t(),
            p = t(),
            d = t(),
            l = t();
          for (i = 0; i < 31; i++) s[i] = r[i];
          for (
            s[31] = (127 & r[31]) | 64, s[0] &= 248, T(o, n), i = 0;
            i < 16;
            i++
          )
            ((u[i] = o[i]), (p[i] = c[i] = h[i] = 0));
          for (c[0] = p[0] = 1, i = 254; i >= 0; --i)
            ((a = (s[i >>> 3] >>> (7 & i)) & 1),
              O(c, u, a),
              O(h, p, a),
              j(d, c, h),
              N(c, c, h),
              j(h, u, p),
              N(u, u, p),
              H(p, d),
              H(l, c),
              L(c, h, c),
              L(h, u, d),
              j(d, c, h),
              N(c, c, h),
              H(u, c),
              N(h, p, l),
              L(c, h, f),
              j(c, c, p),
              L(h, h, c),
              L(c, p, l),
              L(p, u, o),
              H(u, d),
              O(c, u, a),
              O(h, p, a));
          for (i = 0; i < 16; i++)
            ((o[i + 16] = c[i]),
              (o[i + 32] = h[i]),
              (o[i + 48] = u[i]),
              (o[i + 64] = p[i]));
          var g = o.subarray(32),
            v = o.subarray(16);
          return (M(g, g), L(v, v, g), K(e, v), 0);
        }
        function V(e, t) {
          return Y(e, t, i);
        }
        function G(e, t) {
          return (n(t, 32), V(e, t));
        }
        function Z(e, t, r) {
          var n = new Uint8Array(32);
          return (Y(n, r, t), S(e, a, n, k));
        }
        ((_.prototype.blocks = function (e, t, r) {
          var n,
            a,
            i,
            s,
            o,
            f,
            c,
            u,
            h,
            p,
            d,
            l,
            g,
            v,
            m,
            y,
            w,
            b,
            S,
            k = this.fin ? 0 : 2048,
            B = this.h[0],
            E = this.h[1],
            A = this.h[2],
            F = this.h[3],
            _ = this.h[4],
            x = this.h[5],
            q = this.h[6],
            I = this.h[7],
            P = this.h[8],
            C = this.h[9],
            U = this.r[0],
            O = this.r[1],
            K = this.r[2],
            D = this.r[3],
            z = this.r[4],
            T = this.r[5],
            j = this.r[6],
            N = this.r[7],
            L = this.r[8],
            H = this.r[9];
          while (r >= 16)
            ((n = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8)),
              (B += 8191 & n),
              (a = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)),
              (E += 8191 & ((n >>> 13) | (a << 3))),
              (i = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)),
              (A += 8191 & ((a >>> 10) | (i << 6))),
              (s = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)),
              (F += 8191 & ((i >>> 7) | (s << 9))),
              (o = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)),
              (_ += 8191 & ((s >>> 4) | (o << 12))),
              (x += (o >>> 1) & 8191),
              (f = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)),
              (q += 8191 & ((o >>> 14) | (f << 2))),
              (c = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)),
              (I += 8191 & ((f >>> 11) | (c << 5))),
              (u = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)),
              (P += 8191 & ((c >>> 8) | (u << 8))),
              (C += (u >>> 5) | k),
              (h = 0),
              (p = h),
              (p += B * U),
              (p += E * (5 * H)),
              (p += A * (5 * L)),
              (p += F * (5 * N)),
              (p += _ * (5 * j)),
              (h = p >>> 13),
              (p &= 8191),
              (p += x * (5 * T)),
              (p += q * (5 * z)),
              (p += I * (5 * D)),
              (p += P * (5 * K)),
              (p += C * (5 * O)),
              (h += p >>> 13),
              (p &= 8191),
              (d = h),
              (d += B * O),
              (d += E * U),
              (d += A * (5 * H)),
              (d += F * (5 * L)),
              (d += _ * (5 * N)),
              (h = d >>> 13),
              (d &= 8191),
              (d += x * (5 * j)),
              (d += q * (5 * T)),
              (d += I * (5 * z)),
              (d += P * (5 * D)),
              (d += C * (5 * K)),
              (h += d >>> 13),
              (d &= 8191),
              (l = h),
              (l += B * K),
              (l += E * O),
              (l += A * U),
              (l += F * (5 * H)),
              (l += _ * (5 * L)),
              (h = l >>> 13),
              (l &= 8191),
              (l += x * (5 * N)),
              (l += q * (5 * j)),
              (l += I * (5 * T)),
              (l += P * (5 * z)),
              (l += C * (5 * D)),
              (h += l >>> 13),
              (l &= 8191),
              (g = h),
              (g += B * D),
              (g += E * K),
              (g += A * O),
              (g += F * U),
              (g += _ * (5 * H)),
              (h = g >>> 13),
              (g &= 8191),
              (g += x * (5 * L)),
              (g += q * (5 * N)),
              (g += I * (5 * j)),
              (g += P * (5 * T)),
              (g += C * (5 * z)),
              (h += g >>> 13),
              (g &= 8191),
              (v = h),
              (v += B * z),
              (v += E * D),
              (v += A * K),
              (v += F * O),
              (v += _ * U),
              (h = v >>> 13),
              (v &= 8191),
              (v += x * (5 * H)),
              (v += q * (5 * L)),
              (v += I * (5 * N)),
              (v += P * (5 * j)),
              (v += C * (5 * T)),
              (h += v >>> 13),
              (v &= 8191),
              (m = h),
              (m += B * T),
              (m += E * z),
              (m += A * D),
              (m += F * K),
              (m += _ * O),
              (h = m >>> 13),
              (m &= 8191),
              (m += x * U),
              (m += q * (5 * H)),
              (m += I * (5 * L)),
              (m += P * (5 * N)),
              (m += C * (5 * j)),
              (h += m >>> 13),
              (m &= 8191),
              (y = h),
              (y += B * j),
              (y += E * T),
              (y += A * z),
              (y += F * D),
              (y += _ * K),
              (h = y >>> 13),
              (y &= 8191),
              (y += x * O),
              (y += q * U),
              (y += I * (5 * H)),
              (y += P * (5 * L)),
              (y += C * (5 * N)),
              (h += y >>> 13),
              (y &= 8191),
              (w = h),
              (w += B * N),
              (w += E * j),
              (w += A * T),
              (w += F * z),
              (w += _ * D),
              (h = w >>> 13),
              (w &= 8191),
              (w += x * K),
              (w += q * O),
              (w += I * U),
              (w += P * (5 * H)),
              (w += C * (5 * L)),
              (h += w >>> 13),
              (w &= 8191),
              (b = h),
              (b += B * L),
              (b += E * N),
              (b += A * j),
              (b += F * T),
              (b += _ * z),
              (h = b >>> 13),
              (b &= 8191),
              (b += x * D),
              (b += q * K),
              (b += I * O),
              (b += P * U),
              (b += C * (5 * H)),
              (h += b >>> 13),
              (b &= 8191),
              (S = h),
              (S += B * H),
              (S += E * L),
              (S += A * N),
              (S += F * j),
              (S += _ * T),
              (h = S >>> 13),
              (S &= 8191),
              (S += x * z),
              (S += q * D),
              (S += I * K),
              (S += P * O),
              (S += C * U),
              (h += S >>> 13),
              (S &= 8191),
              (h = ((h << 2) + h) | 0),
              (h = (h + p) | 0),
              (p = 8191 & h),
              (h >>>= 13),
              (d += h),
              (B = p),
              (E = d),
              (A = l),
              (F = g),
              (_ = v),
              (x = m),
              (q = y),
              (I = w),
              (P = b),
              (C = S),
              (t += 16),
              (r -= 16));
          ((this.h[0] = B),
            (this.h[1] = E),
            (this.h[2] = A),
            (this.h[3] = F),
            (this.h[4] = _),
            (this.h[5] = x),
            (this.h[6] = q),
            (this.h[7] = I),
            (this.h[8] = P),
            (this.h[9] = C));
        }),
          (_.prototype.finish = function (e, t) {
            var r,
              n,
              a,
              i,
              s = new Uint16Array(10);
            if (this.leftover) {
              for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++)
                this.buffer[i] = 0;
              ((this.fin = 1), this.blocks(this.buffer, 0, 16));
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++)
              ((this.h[i] += r), (r = this.h[i] >>> 13), (this.h[i] &= 8191));
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                s[0] = this.h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                i = 1;
              i < 10;
              i++
            )
              ((s[i] = this.h[i] + r), (r = s[i] >>> 13), (s[i] &= 8191));
            for (s[9] -= 8192, n = (1 ^ r) - 1, i = 0; i < 10; i++) s[i] &= n;
            for (n = ~n, i = 0; i < 10; i++) this.h[i] = (this.h[i] & n) | s[i];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                a = this.h[0] + this.pad[0],
                this.h[0] = 65535 & a,
                i = 1;
              i < 8;
              i++
            )
              ((a = (((this.h[i] + this.pad[i]) | 0) + (a >>> 16)) | 0),
                (this.h[i] = 65535 & a));
            ((e[t + 0] = (this.h[0] >>> 0) & 255),
              (e[t + 1] = (this.h[0] >>> 8) & 255),
              (e[t + 2] = (this.h[1] >>> 0) & 255),
              (e[t + 3] = (this.h[1] >>> 8) & 255),
              (e[t + 4] = (this.h[2] >>> 0) & 255),
              (e[t + 5] = (this.h[2] >>> 8) & 255),
              (e[t + 6] = (this.h[3] >>> 0) & 255),
              (e[t + 7] = (this.h[3] >>> 8) & 255),
              (e[t + 8] = (this.h[4] >>> 0) & 255),
              (e[t + 9] = (this.h[4] >>> 8) & 255),
              (e[t + 10] = (this.h[5] >>> 0) & 255),
              (e[t + 11] = (this.h[5] >>> 8) & 255),
              (e[t + 12] = (this.h[6] >>> 0) & 255),
              (e[t + 13] = (this.h[6] >>> 8) & 255),
              (e[t + 14] = (this.h[7] >>> 0) & 255),
              (e[t + 15] = (this.h[7] >>> 8) & 255));
          }),
          (_.prototype.update = function (e, t, r) {
            var n, a;
            if (this.leftover) {
              for (a = 16 - this.leftover, a > r && (a = r), n = 0; n < a; n++)
                this.buffer[this.leftover + n] = e[t + n];
              if (
                ((r -= a), (t += a), (this.leftover += a), this.leftover < 16)
              )
                return;
              (this.blocks(this.buffer, 0, 16), (this.leftover = 0));
            }
            if (
              (r >= 16 &&
                ((a = r - (r % 16)), this.blocks(e, t, a), (t += a), (r -= a)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = e[t + n];
              this.leftover += r;
            }
          }));
        var Q = I,
          W = P;
        function $(e, t, r, n, a, i) {
          var s = new Uint8Array(32);
          return (Z(s, a, i), Q(e, t, r, n, s));
        }
        function X(e, t, r, n, a, i) {
          var s = new Uint8Array(32);
          return (Z(s, a, i), W(e, t, r, n, s));
        }
        var J = [
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
        ];
        function ee(e, t, r, n) {
          var a,
            i,
            s,
            o,
            f,
            c,
            u,
            h,
            p,
            d,
            l,
            g,
            v,
            m,
            y,
            w,
            b,
            S,
            k,
            B,
            E,
            A,
            F,
            _,
            x,
            q,
            I = new Int32Array(16),
            P = new Int32Array(16),
            C = e[0],
            U = e[1],
            O = e[2],
            K = e[3],
            D = e[4],
            z = e[5],
            T = e[6],
            j = e[7],
            N = t[0],
            L = t[1],
            H = t[2],
            M = t[3],
            R = t[4],
            Y = t[5],
            V = t[6],
            G = t[7],
            Z = 0;
          while (n >= 128) {
            for (k = 0; k < 16; k++)
              ((B = 8 * k + Z),
                (I[k] =
                  (r[B + 0] << 24) |
                  (r[B + 1] << 16) |
                  (r[B + 2] << 8) |
                  r[B + 3]),
                (P[k] =
                  (r[B + 4] << 24) |
                  (r[B + 5] << 16) |
                  (r[B + 6] << 8) |
                  r[B + 7]));
            for (k = 0; k < 80; k++)
              if (
                ((a = C),
                (i = U),
                (s = O),
                (o = K),
                (f = D),
                (c = z),
                (u = T),
                (h = j),
                (p = N),
                (d = L),
                (l = H),
                (g = M),
                (v = R),
                (m = Y),
                (y = V),
                (w = G),
                (E = j),
                (A = G),
                (F = 65535 & A),
                (_ = A >>> 16),
                (x = 65535 & E),
                (q = E >>> 16),
                (E =
                  ((D >>> 14) | (R << 18)) ^
                  ((D >>> 18) | (R << 14)) ^
                  ((R >>> 9) | (D << 23))),
                (A =
                  ((R >>> 14) | (D << 18)) ^
                  ((R >>> 18) | (D << 14)) ^
                  ((D >>> 9) | (R << 23))),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (E = (D & z) ^ (~D & T)),
                (A = (R & Y) ^ (~R & V)),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (E = J[2 * k]),
                (A = J[2 * k + 1]),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (E = I[k % 16]),
                (A = P[k % 16]),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (_ += F >>> 16),
                (x += _ >>> 16),
                (q += x >>> 16),
                (b = (65535 & x) | (q << 16)),
                (S = (65535 & F) | (_ << 16)),
                (E = b),
                (A = S),
                (F = 65535 & A),
                (_ = A >>> 16),
                (x = 65535 & E),
                (q = E >>> 16),
                (E =
                  ((C >>> 28) | (N << 4)) ^
                  ((N >>> 2) | (C << 30)) ^
                  ((N >>> 7) | (C << 25))),
                (A =
                  ((N >>> 28) | (C << 4)) ^
                  ((C >>> 2) | (N << 30)) ^
                  ((C >>> 7) | (N << 25))),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (E = (C & U) ^ (C & O) ^ (U & O)),
                (A = (N & L) ^ (N & H) ^ (L & H)),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (_ += F >>> 16),
                (x += _ >>> 16),
                (q += x >>> 16),
                (h = (65535 & x) | (q << 16)),
                (w = (65535 & F) | (_ << 16)),
                (E = o),
                (A = g),
                (F = 65535 & A),
                (_ = A >>> 16),
                (x = 65535 & E),
                (q = E >>> 16),
                (E = b),
                (A = S),
                (F += 65535 & A),
                (_ += A >>> 16),
                (x += 65535 & E),
                (q += E >>> 16),
                (_ += F >>> 16),
                (x += _ >>> 16),
                (q += x >>> 16),
                (o = (65535 & x) | (q << 16)),
                (g = (65535 & F) | (_ << 16)),
                (U = a),
                (O = i),
                (K = s),
                (D = o),
                (z = f),
                (T = c),
                (j = u),
                (C = h),
                (L = p),
                (H = d),
                (M = l),
                (R = g),
                (Y = v),
                (V = m),
                (G = y),
                (N = w),
                k % 16 === 15)
              )
                for (B = 0; B < 16; B++)
                  ((E = I[B]),
                    (A = P[B]),
                    (F = 65535 & A),
                    (_ = A >>> 16),
                    (x = 65535 & E),
                    (q = E >>> 16),
                    (E = I[(B + 9) % 16]),
                    (A = P[(B + 9) % 16]),
                    (F += 65535 & A),
                    (_ += A >>> 16),
                    (x += 65535 & E),
                    (q += E >>> 16),
                    (b = I[(B + 1) % 16]),
                    (S = P[(B + 1) % 16]),
                    (E =
                      ((b >>> 1) | (S << 31)) ^
                      ((b >>> 8) | (S << 24)) ^
                      (b >>> 7)),
                    (A =
                      ((S >>> 1) | (b << 31)) ^
                      ((S >>> 8) | (b << 24)) ^
                      ((S >>> 7) | (b << 25))),
                    (F += 65535 & A),
                    (_ += A >>> 16),
                    (x += 65535 & E),
                    (q += E >>> 16),
                    (b = I[(B + 14) % 16]),
                    (S = P[(B + 14) % 16]),
                    (E =
                      ((b >>> 19) | (S << 13)) ^
                      ((S >>> 29) | (b << 3)) ^
                      (b >>> 6)),
                    (A =
                      ((S >>> 19) | (b << 13)) ^
                      ((b >>> 29) | (S << 3)) ^
                      ((S >>> 6) | (b << 26))),
                    (F += 65535 & A),
                    (_ += A >>> 16),
                    (x += 65535 & E),
                    (q += E >>> 16),
                    (_ += F >>> 16),
                    (x += _ >>> 16),
                    (q += x >>> 16),
                    (I[B] = (65535 & x) | (q << 16)),
                    (P[B] = (65535 & F) | (_ << 16)));
            ((E = C),
              (A = N),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[0]),
              (A = t[0]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[0] = C = (65535 & x) | (q << 16)),
              (t[0] = N = (65535 & F) | (_ << 16)),
              (E = U),
              (A = L),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[1]),
              (A = t[1]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[1] = U = (65535 & x) | (q << 16)),
              (t[1] = L = (65535 & F) | (_ << 16)),
              (E = O),
              (A = H),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[2]),
              (A = t[2]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[2] = O = (65535 & x) | (q << 16)),
              (t[2] = H = (65535 & F) | (_ << 16)),
              (E = K),
              (A = M),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[3]),
              (A = t[3]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[3] = K = (65535 & x) | (q << 16)),
              (t[3] = M = (65535 & F) | (_ << 16)),
              (E = D),
              (A = R),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[4]),
              (A = t[4]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[4] = D = (65535 & x) | (q << 16)),
              (t[4] = R = (65535 & F) | (_ << 16)),
              (E = z),
              (A = Y),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[5]),
              (A = t[5]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[5] = z = (65535 & x) | (q << 16)),
              (t[5] = Y = (65535 & F) | (_ << 16)),
              (E = T),
              (A = V),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[6]),
              (A = t[6]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[6] = T = (65535 & x) | (q << 16)),
              (t[6] = V = (65535 & F) | (_ << 16)),
              (E = j),
              (A = G),
              (F = 65535 & A),
              (_ = A >>> 16),
              (x = 65535 & E),
              (q = E >>> 16),
              (E = e[7]),
              (A = t[7]),
              (F += 65535 & A),
              (_ += A >>> 16),
              (x += 65535 & E),
              (q += E >>> 16),
              (_ += F >>> 16),
              (x += _ >>> 16),
              (q += x >>> 16),
              (e[7] = j = (65535 & x) | (q << 16)),
              (t[7] = G = (65535 & F) | (_ << 16)),
              (Z += 128),
              (n -= 128));
          }
          return n;
        }
        function te(e, t, r) {
          var n,
            a = new Int32Array(8),
            i = new Int32Array(8),
            s = new Uint8Array(256),
            o = r;
          for (
            a[0] = 1779033703,
              a[1] = 3144134277,
              a[2] = 1013904242,
              a[3] = 2773480762,
              a[4] = 1359893119,
              a[5] = 2600822924,
              a[6] = 528734635,
              a[7] = 1541459225,
              i[0] = 4089235720,
              i[1] = 2227873595,
              i[2] = 4271175723,
              i[3] = 1595750129,
              i[4] = 2917565137,
              i[5] = 725511199,
              i[6] = 4215389547,
              i[7] = 327033209,
              ee(a, i, t, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            s[n] = t[o - r + n];
          for (
            s[r] = 128,
              r = 256 - 128 * (r < 112 ? 1 : 0),
              s[r - 9] = 0,
              l(s, r - 8, (o / 536870912) | 0, o << 3),
              ee(a, i, s, r),
              n = 0;
            n < 8;
            n++
          )
            l(e, 8 * n, a[n], i[n]);
          return 0;
        }
        function re(e, r) {
          var n = t(),
            a = t(),
            i = t(),
            s = t(),
            o = t(),
            f = t(),
            c = t(),
            h = t(),
            p = t();
          (N(n, e[1], e[0]),
            N(p, r[1], r[0]),
            L(n, n, p),
            j(a, e[0], e[1]),
            j(p, r[0], r[1]),
            L(a, a, p),
            L(i, e[3], r[3]),
            L(i, i, u),
            L(s, e[2], r[2]),
            j(s, s, s),
            N(o, a, n),
            N(f, s, i),
            j(c, s, i),
            j(h, a, n),
            L(e[0], o, f),
            L(e[1], h, c),
            L(e[2], c, f),
            L(e[3], o, h));
        }
        function ne(e, t, r) {
          var n;
          for (n = 0; n < 4; n++) O(e[n], t[n], r);
        }
        function ae(e, r) {
          var n = t(),
            a = t(),
            i = t();
          (M(i, r[2]),
            L(n, r[0], i),
            L(a, r[1], i),
            K(e, a),
            (e[31] ^= z(n) << 7));
        }
        function ie(e, t, r) {
          var n, a;
          for (
            C(e[0], s), C(e[1], o), C(e[2], o), C(e[3], s), a = 255;
            a >= 0;
            --a
          )
            ((n = (r[(a / 8) | 0] >> (7 & a)) & 1),
              ne(e, t, n),
              re(t, e),
              re(e, e),
              ne(e, t, n));
        }
        function se(e, r) {
          var n = [t(), t(), t(), t()];
          (C(n[0], h), C(n[1], p), C(n[2], o), L(n[3], h, p), ie(e, n, r));
        }
        function oe(e, r, a) {
          var i,
            s = new Uint8Array(64),
            o = [t(), t(), t(), t()];
          for (
            a || n(r, 32),
              te(s, r, 32),
              s[0] &= 248,
              s[31] &= 127,
              s[31] |= 64,
              se(o, s),
              ae(e, o),
              i = 0;
            i < 32;
            i++
          )
            r[i + 32] = e[i];
          return 0;
        }
        var fe = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function ce(e, t) {
          var r, n, a, i;
          for (n = 63; n >= 32; --n) {
            for (r = 0, a = n - 32, i = n - 12; a < i; ++a)
              ((t[a] += r - 16 * t[n] * fe[a - (n - 32)]),
                (r = (t[a] + 128) >> 8),
                (t[a] -= 256 * r));
            ((t[a] += r), (t[n] = 0));
          }
          for (r = 0, a = 0; a < 32; a++)
            ((t[a] += r - (t[31] >> 4) * fe[a]),
              (r = t[a] >> 8),
              (t[a] &= 255));
          for (a = 0; a < 32; a++) t[a] -= r * fe[a];
          for (n = 0; n < 32; n++)
            ((t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]));
        }
        function ue(e) {
          var t,
            r = new Float64Array(64);
          for (t = 0; t < 64; t++) r[t] = e[t];
          for (t = 0; t < 64; t++) e[t] = 0;
          ce(e, r);
        }
        function he(e, r, n, a) {
          var i,
            s,
            o = new Uint8Array(64),
            f = new Uint8Array(64),
            c = new Uint8Array(64),
            u = new Float64Array(64),
            h = [t(), t(), t(), t()];
          (te(o, a, 32), (o[0] &= 248), (o[31] &= 127), (o[31] |= 64));
          var p = n + 64;
          for (i = 0; i < n; i++) e[64 + i] = r[i];
          for (i = 0; i < 32; i++) e[32 + i] = o[32 + i];
          for (
            te(c, e.subarray(32), n + 32), ue(c), se(h, c), ae(e, h), i = 32;
            i < 64;
            i++
          )
            e[i] = a[i];
          for (te(f, e, n + 64), ue(f), i = 0; i < 64; i++) u[i] = 0;
          for (i = 0; i < 32; i++) u[i] = c[i];
          for (i = 0; i < 32; i++)
            for (s = 0; s < 32; s++) u[i + s] += f[i] * o[s];
          return (ce(e.subarray(32), u), p);
        }
        function pe(e, r) {
          var n = t(),
            a = t(),
            i = t(),
            f = t(),
            u = t(),
            h = t(),
            p = t();
          return (
            C(e[2], o),
            T(e[1], r),
            H(i, e[1]),
            L(f, i, c),
            N(i, i, e[2]),
            j(f, e[2], f),
            H(u, f),
            H(h, u),
            L(p, h, u),
            L(n, p, i),
            L(n, n, f),
            R(n, n),
            L(n, n, i),
            L(n, n, f),
            L(n, n, f),
            L(e[0], n, f),
            H(a, e[0]),
            L(a, a, f),
            D(a, i) && L(e[0], e[0], d),
            H(a, e[0]),
            L(a, a, f),
            D(a, i)
              ? -1
              : (z(e[0]) === r[31] >> 7 && N(e[0], s, e[0]),
                L(e[3], e[0], e[1]),
                0)
          );
        }
        function de(e, r, n, a) {
          var i,
            s,
            o = new Uint8Array(32),
            f = new Uint8Array(64),
            c = [t(), t(), t(), t()],
            u = [t(), t(), t(), t()];
          if (((s = -1), n < 64)) return -1;
          if (pe(u, a)) return -1;
          for (i = 0; i < n; i++) e[i] = r[i];
          for (i = 0; i < 32; i++) e[i + 32] = a[i];
          if (
            (te(f, e, n),
            ue(f),
            ie(c, u, f),
            se(u, r.subarray(32)),
            re(c, u),
            ae(o, c),
            (n -= 64),
            m(r, 0, o, 0))
          ) {
            for (i = 0; i < n; i++) e[i] = 0;
            return -1;
          }
          for (i = 0; i < n; i++) e[i] = r[i + 64];
          return ((s = n), s);
        }
        var le = 32,
          ge = 24,
          ve = 32,
          me = 16,
          ye = 32,
          we = 32,
          be = 32,
          Se = 32,
          ke = 32,
          Be = ge,
          Ee = ve,
          Ae = me,
          Fe = 64,
          _e = 32,
          xe = 64,
          qe = 32,
          Ie = 64;
        function Pe(e, t) {
          if (e.length !== le) throw new Error("bad key size");
          if (t.length !== ge) throw new Error("bad nonce size");
        }
        function Ce(e, t) {
          if (e.length !== be) throw new Error("bad public key size");
          if (t.length !== Se) throw new Error("bad secret key size");
        }
        function Ue() {
          var e, t;
          for (t = 0; t < arguments.length; t++)
            if (
              "[object Uint8Array]" !==
              (e = Object.prototype.toString.call(arguments[t]))
            )
              throw new TypeError("unexpected type " + e + ", use Uint8Array");
        }
        function Oe(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
        }
        ((e.lowlevel = {
          crypto_core_hsalsa20: S,
          crypto_stream_xor: F,
          crypto_stream: A,
          crypto_stream_salsa20_xor: B,
          crypto_stream_salsa20: E,
          crypto_onetimeauth: x,
          crypto_onetimeauth_verify: q,
          crypto_verify_16: v,
          crypto_verify_32: m,
          crypto_secretbox: I,
          crypto_secretbox_open: P,
          crypto_scalarmult: Y,
          crypto_scalarmult_base: V,
          crypto_box_beforenm: Z,
          crypto_box_afternm: Q,
          crypto_box: $,
          crypto_box_open: X,
          crypto_box_keypair: G,
          crypto_hash: te,
          crypto_sign: he,
          crypto_sign_keypair: oe,
          crypto_sign_open: de,
          crypto_secretbox_KEYBYTES: le,
          crypto_secretbox_NONCEBYTES: ge,
          crypto_secretbox_ZEROBYTES: ve,
          crypto_secretbox_BOXZEROBYTES: me,
          crypto_scalarmult_BYTES: ye,
          crypto_scalarmult_SCALARBYTES: we,
          crypto_box_PUBLICKEYBYTES: be,
          crypto_box_SECRETKEYBYTES: Se,
          crypto_box_BEFORENMBYTES: ke,
          crypto_box_NONCEBYTES: Be,
          crypto_box_ZEROBYTES: Ee,
          crypto_box_BOXZEROBYTES: Ae,
          crypto_sign_BYTES: Fe,
          crypto_sign_PUBLICKEYBYTES: _e,
          crypto_sign_SECRETKEYBYTES: xe,
          crypto_sign_SEEDBYTES: qe,
          crypto_hash_BYTES: Ie,
        }),
          e.util ||
            ((e.util = {}),
            (e.util.decodeUTF8 =
              e.util.encodeUTF8 =
              e.util.encodeBase64 =
              e.util.decodeBase64 =
                function () {
                  throw new Error(
                    "nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js",
                  );
                })),
          (e.randomBytes = function (e) {
            var t = new Uint8Array(e);
            return (n(t, e), t);
          }),
          (e.secretbox = function (e, t, r) {
            (Ue(e, t, r), Pe(r, t));
            for (
              var n = new Uint8Array(ve + e.length),
                a = new Uint8Array(n.length),
                i = 0;
              i < e.length;
              i++
            )
              n[i + ve] = e[i];
            return (I(a, n, n.length, t, r), a.subarray(me));
          }),
          (e.secretbox.open = function (e, t, r) {
            (Ue(e, t, r), Pe(r, t));
            for (
              var n = new Uint8Array(me + e.length),
                a = new Uint8Array(n.length),
                i = 0;
              i < e.length;
              i++
            )
              n[i + me] = e[i];
            return (
              !(n.length < 32) &&
              0 === P(a, n, n.length, t, r) &&
              a.subarray(ve)
            );
          }),
          (e.secretbox.keyLength = le),
          (e.secretbox.nonceLength = ge),
          (e.secretbox.overheadLength = me),
          (e.scalarMult = function (e, t) {
            if ((Ue(e, t), e.length !== we)) throw new Error("bad n size");
            if (t.length !== ye) throw new Error("bad p size");
            var r = new Uint8Array(ye);
            return (Y(r, e, t), r);
          }),
          (e.scalarMult.base = function (e) {
            if ((Ue(e), e.length !== we)) throw new Error("bad n size");
            var t = new Uint8Array(ye);
            return (V(t, e), t);
          }),
          (e.scalarMult.scalarLength = we),
          (e.scalarMult.groupElementLength = ye),
          (e.box = function (t, r, n, a) {
            var i = e.box.before(n, a);
            return e.secretbox(t, r, i);
          }),
          (e.box.before = function (e, t) {
            (Ue(e, t), Ce(e, t));
            var r = new Uint8Array(ke);
            return (Z(r, e, t), r);
          }),
          (e.box.after = e.secretbox),
          (e.box.open = function (t, r, n, a) {
            var i = e.box.before(n, a);
            return e.secretbox.open(t, r, i);
          }),
          (e.box.open.after = e.secretbox.open),
          (e.box.keyPair = function () {
            var e = new Uint8Array(be),
              t = new Uint8Array(Se);
            return (G(e, t), { publicKey: e, secretKey: t });
          }),
          (e.box.keyPair.fromSecretKey = function (e) {
            if ((Ue(e), e.length !== Se))
              throw new Error("bad secret key size");
            var t = new Uint8Array(be);
            return (V(t, e), { publicKey: t, secretKey: new Uint8Array(e) });
          }),
          (e.box.publicKeyLength = be),
          (e.box.secretKeyLength = Se),
          (e.box.sharedKeyLength = ke),
          (e.box.nonceLength = Be),
          (e.box.overheadLength = e.secretbox.overheadLength),
          (e.sign = function (e, t) {
            if ((Ue(e, t), t.length !== xe))
              throw new Error("bad secret key size");
            var r = new Uint8Array(Fe + e.length);
            return (he(r, e, e.length, t), r);
          }),
          (e.sign.open = function (e, t) {
            if (2 !== arguments.length)
              throw new Error(
                "nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?",
              );
            if ((Ue(e, t), t.length !== _e))
              throw new Error("bad public key size");
            var r = new Uint8Array(e.length),
              n = de(r, e, e.length, t);
            if (n < 0) return null;
            for (var a = new Uint8Array(n), i = 0; i < a.length; i++)
              a[i] = r[i];
            return a;
          }),
          (e.sign.detached = function (t, r) {
            for (
              var n = e.sign(t, r), a = new Uint8Array(Fe), i = 0;
              i < a.length;
              i++
            )
              a[i] = n[i];
            return a;
          }),
          (e.sign.detached.verify = function (e, t, r) {
            if ((Ue(e, t, r), t.length !== Fe))
              throw new Error("bad signature size");
            if (r.length !== _e) throw new Error("bad public key size");
            var n,
              a = new Uint8Array(Fe + e.length),
              i = new Uint8Array(Fe + e.length);
            for (n = 0; n < Fe; n++) a[n] = t[n];
            for (n = 0; n < e.length; n++) a[n + Fe] = e[n];
            return de(i, a, a.length, r) >= 0;
          }),
          (e.sign.keyPair = function () {
            var e = new Uint8Array(_e),
              t = new Uint8Array(xe);
            return (oe(e, t), { publicKey: e, secretKey: t });
          }),
          (e.sign.keyPair.fromSecretKey = function (e) {
            if ((Ue(e), e.length !== xe))
              throw new Error("bad secret key size");
            for (var t = new Uint8Array(_e), r = 0; r < t.length; r++)
              t[r] = e[32 + r];
            return { publicKey: t, secretKey: new Uint8Array(e) };
          }),
          (e.sign.keyPair.fromSeed = function (e) {
            if ((Ue(e), e.length !== qe)) throw new Error("bad seed size");
            for (
              var t = new Uint8Array(_e), r = new Uint8Array(xe), n = 0;
              n < 32;
              n++
            )
              r[n] = e[n];
            return (oe(t, r, !0), { publicKey: t, secretKey: r });
          }),
          (e.sign.publicKeyLength = _e),
          (e.sign.secretKeyLength = xe),
          (e.sign.seedLength = qe),
          (e.sign.signatureLength = Fe),
          (e.hash = function (e) {
            Ue(e);
            var t = new Uint8Array(Ie);
            return (te(t, e, e.length), t);
          }),
          (e.hash.hashLength = Ie),
          (e.verify = function (e, t) {
            return (
              Ue(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length &&
                0 === g(e, 0, t, 0, e.length)
            );
          }),
          (e.setPRNG = function (e) {
            n = e;
          }),
          (function () {
            var t =
              "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
            if (t && t.getRandomValues) {
              var n = 65536;
              e.setPRNG(function (e, r) {
                var a,
                  i = new Uint8Array(r);
                for (a = 0; a < r; a += n)
                  t.getRandomValues(i.subarray(a, a + Math.min(r - a, n)));
                for (a = 0; a < r; a++) e[a] = i[a];
                Oe(i);
              });
            } else
              ((t = r(7698)),
                t &&
                  t.randomBytes &&
                  e.setPRNG(function (e, r) {
                    var n,
                      a = t.randomBytes(r);
                    for (n = 0; n < r; n++) e[n] = a[n];
                    Oe(a);
                  }));
          })());
      })(e.exports ? e.exports : (self.nacl = self.nacl || {}));
    },
    4660: function (e, t, r) {
      e.exports = { read: d, readSSHPrivate: g, write: v };
      var n,
        a = r(2932),
        i = (r(3419), r(2933).Buffer),
        s = (r(3078), r(3020)),
        o = r(2764),
        f = (r(3018), r(3019)),
        c = r(3550),
        u = r(3551),
        h = r(3894),
        p = r(3371);
      function d(e, t) {
        return c.read(e, t);
      }
      var l = "openssh-key-v1";
      function g(e, t, f) {
        t = new h({ buffer: t });
        var c = t.readCString();
        a.strictEqual(c, l, "bad magic string");
        var d = t.readString(),
          g = t.readString(),
          v = t.readBuffer(),
          m = t.readInt();
        if (1 !== m)
          throw new Error(
            "OpenSSH-format key file contains multiple keys: this is unsupported.",
          );
        var y = t.readBuffer();
        if ("public" === e)
          return (a.ok(t.atEnd(), "excess bytes left after key"), u.read(y));
        var w = t.readBuffer();
        a.ok(t.atEnd(), "excess bytes left after key");
        var b = new h({ buffer: v });
        switch (g) {
          case "none":
            if ("none" !== d)
              throw new Error(
                'OpenSSH-format key uses KDF "none" but specifies a cipher other than "none"',
              );
            break;
          case "bcrypt":
            var S = b.readBuffer(),
              k = b.readInt(),
              B = s.opensshCipherInfo(d);
            if (
              (void 0 === n && (n = r(6030)),
              "string" === typeof f.passphrase &&
                (f.passphrase = i.from(f.passphrase, "utf-8")),
              !i.isBuffer(f.passphrase))
            )
              throw new p.KeyEncryptedError(f.filename, "OpenSSH");
            var E = new Uint8Array(f.passphrase),
              A = new Uint8Array(S),
              F = new Uint8Array(B.keySize + B.blockSize),
              _ = n.pbkdf(E, E.length, A, A.length, F, F.length, k);
            if (0 !== _)
              throw new Error(
                "bcrypt_pbkdf function returned failure, parameters invalid",
              );
            F = i.from(F);
            var x = F.slice(0, B.keySize),
              q = F.slice(B.keySize, B.keySize + B.blockSize),
              I = o.createDecipheriv(B.opensslName, x, q);
            I.setAutoPadding(!1);
            var P,
              C = [];
            (I.once("error", function (e) {
              if (-1 !== e.toString().indexOf("bad decrypt"))
                throw new Error(
                  "Incorrect passphrase supplied, could not decrypt key",
                );
              throw e;
            }),
              I.write(w),
              I.end());
            while (null !== (P = I.read())) C.push(P);
            w = i.concat(C);
            break;
          default:
            throw new Error('OpenSSH-format key uses unknown KDF "' + g + '"');
        }
        t = new h({ buffer: w });
        var U = t.readInt(),
          O = t.readInt();
        if (U !== O)
          throw new Error(
            "Incorrect passphrase supplied, could not decrypt key",
          );
        var K = {},
          D = u.readInternal(K, "private", t.remainder());
        t.skip(K.consumed);
        var z = t.readString();
        return ((D.comment = z), D);
      }
      function v(e, t) {
        var c;
        c = f.isPrivateKey(e) ? e.toPublic() : e;
        var u,
          p,
          d = "none",
          g = "none",
          v = i.alloc(0),
          m = { blockSize: 8 };
        if (
          (void 0 !== t &&
            ((u = t.passphrase),
            "string" === typeof u && (u = i.from(u, "utf-8")),
            void 0 !== u &&
              (a.buffer(u, "options.passphrase"),
              a.optionalString(t.cipher, "options.cipher"),
              (d = t.cipher),
              void 0 === d && (d = "aes128-ctr"),
              (m = s.opensshCipherInfo(d)),
              (g = "bcrypt"))),
          f.isPrivateKey(e))
        ) {
          p = new h({});
          var y = o.randomBytes(4).readUInt32BE(0);
          (p.writeInt(y),
            p.writeInt(y),
            p.write(e.toBuffer("rfc4253")),
            p.writeString(e.comment || ""));
          var w = 1;
          while (p._offset % m.blockSize !== 0) p.writeChar(w++);
          p = p.toBuffer();
        }
        switch (g) {
          case "none":
            break;
          case "bcrypt":
            var b = o.randomBytes(16),
              S = 16,
              k = new h({});
            (k.writeBuffer(b),
              k.writeInt(S),
              (v = k.toBuffer()),
              void 0 === n && (n = r(6030)));
            var B = new Uint8Array(u),
              E = new Uint8Array(b),
              A = new Uint8Array(m.keySize + m.blockSize),
              F = n.pbkdf(B, B.length, E, E.length, A, A.length, S);
            if (0 !== F)
              throw new Error(
                "bcrypt_pbkdf function returned failure, parameters invalid",
              );
            A = i.from(A);
            var _ = A.slice(0, m.keySize),
              x = A.slice(m.keySize, m.keySize + m.blockSize),
              q = o.createCipheriv(m.opensslName, _, x);
            q.setAutoPadding(!1);
            var I,
              P = [];
            (q.once("error", function (e) {
              throw e;
            }),
              q.write(p),
              q.end());
            while (null !== (I = q.read())) P.push(I);
            p = i.concat(P);
            break;
          default:
            throw new Error("Unsupported kdf " + g);
        }
        var C,
          U = new h({});
        (U.writeCString(l),
          U.writeString(d),
          U.writeString(g),
          U.writeBuffer(v),
          U.writeInt(1),
          U.writeBuffer(c.toBuffer("rfc4253")),
          p && U.writeBuffer(p),
          (U = U.toBuffer()),
          (C = f.isPrivateKey(e)
            ? "OPENSSH PRIVATE KEY"
            : "OPENSSH PUBLIC KEY"));
        var O = U.toString("base64"),
          K = O.length + O.length / 70 + 18 + 16 + 2 * C.length + 10;
        U = i.alloc(K);
        var D = 0;
        D += U.write("-----BEGIN " + C + "-----\n", D);
        for (var z = 0; z < O.length; ) {
          var T = z + 70;
          (T > O.length && (T = O.length),
            (D += U.write(O.slice(z, T), D)),
            (U[D++] = 10),
            (z = T));
        }
        return ((D += U.write("-----END " + C + "-----\n", D)), U.slice(0, D));
      }
    },
    4980: function (e, t, r) {
      var n = r(3018),
        a = r(4282),
        i = r(3418),
        s = r(3019),
        o = r(4285),
        f = r(4286),
        c = r(3371);
      e.exports = {
        Key: n,
        parseKey: n.parse,
        Fingerprint: a,
        parseFingerprint: a.parse,
        Signature: i,
        parseSignature: i.parse,
        PrivateKey: s,
        parsePrivateKey: s.parse,
        generatePrivateKey: s.generate,
        Certificate: o,
        parseCertificate: o.parse,
        createSelfSignedCertificate: o.createSelfSigned,
        createCertificate: o.create,
        Identity: f,
        identityFromDN: f.parseDN,
        identityForHost: f.forHost,
        identityForUser: f.forUser,
        identityForEmail: f.forEmail,
        identityFromArray: f.fromArray,
        FingerprintFormatError: c.FingerprintFormatError,
        InvalidAlgorithmError: c.InvalidAlgorithmError,
        KeyParseError: c.KeyParseError,
        SignatureParseError: c.SignatureParseError,
        KeyEncryptedError: c.KeyEncryptedError,
        CertificateParseError: c.CertificateParseError,
      };
    },
    4983: function (e, t, r) {
      e.exports = { DiffieHellman: l, generateECDSA: w, generateED25519: y };
      var n = r(2932),
        a = r(2764),
        i = r(2933).Buffer,
        s = r(3078),
        o = r(3020),
        f = r(4659),
        c = r(3018),
        u = r(3019),
        h = void 0 !== a.createECDH,
        p = (r(7699), r(4658)),
        d = r(4283).BigInteger;
      function l(e) {
        if (
          (o.assertCompatible(e, c, [1, 4], "key"),
          (this._isPriv = u.isPrivateKey(e, [1, 3])),
          (this._algo = e.type),
          (this._curve = e.curve),
          (this._key = e),
          "dsa" === e.type)
        ) {
          if (!h)
            throw new Error(
              "Due to bugs in the node 0.10 crypto API, node 0.12.x or later is required to use DH",
            );
          ((this._dh = a.createDiffieHellman(
            e.part.p.data,
            void 0,
            e.part.g.data,
            void 0,
          )),
            (this._p = e.part.p),
            (this._g = e.part.g),
            this._isPriv && this._dh.setPrivateKey(e.part.x.data),
            this._dh.setPublicKey(e.part.y.data));
        } else if ("ecdsa" === e.type) {
          if (!h)
            return (
              (this._ecParams = new g(this._curve)),
              void (
                this._isPriv &&
                (this._priv = new m(this._ecParams, e.part.d.data))
              )
            );
          var t = {
            nistp256: "prime256v1",
            nistp384: "secp384r1",
            nistp521: "secp521r1",
          }[e.curve];
          if (
            ((this._dh = a.createECDH(t)),
            "object" !== typeof this._dh ||
              "function" !== typeof this._dh.setPrivateKey)
          )
            return ((h = !1), void l.call(this, e));
          (this._isPriv && this._dh.setPrivateKey(e.part.d.data),
            this._dh.setPublicKey(e.part.Q.data));
        } else {
          if ("curve25519" !== e.type)
            throw new Error("DH not supported for " + e.type + " keys");
          this._isPriv &&
            (o.assertCompatible(e, u, [1, 5], "key"),
            (this._priv = e.part.k.data));
        }
      }
      function g(e) {
        var t = s.curves[e];
        n.object(t);
        var r = new d(t.p),
          a = new d(t.a),
          i = new d(t.b),
          o = new d(t.n),
          f = d.ONE,
          c = new p.ECCurveFp(r, a, i),
          u = c.decodePointHex(t.G.toString("hex"));
        ((this.curve = c), (this.g = u), (this.n = o), (this.h = f));
      }
      function v(e, t) {
        ((this._params = e),
          0 === t[0] && (t = t.slice(1)),
          (this._pub = e.getCurve().decodePointHex(t.toString("hex"))));
      }
      function m(e, t) {
        ((this._params = e), (this._priv = new d(o.mpNormalize(t))));
      }
      function y() {
        var e = f.sign.keyPair(),
          t = i.from(e.secretKey),
          r = i.from(e.publicKey);
        (n.strictEqual(t.length, 64), n.strictEqual(r.length, 32));
        var a = [];
        (a.push({ name: "A", data: r }),
          a.push({ name: "k", data: t.slice(0, 32) }));
        var s = new u({ type: "ed25519", parts: a });
        return s;
      }
      function w(e) {
        var t,
          r = [];
        if (h) {
          var n = {
              nistp256: "prime256v1",
              nistp384: "secp384r1",
              nistp521: "secp521r1",
            }[e],
            s = a.createECDH(n);
          return (
            s.generateKeys(),
            r.push({ name: "curve", data: i.from(e) }),
            r.push({ name: "Q", data: s.getPublicKey() }),
            r.push({ name: "d", data: s.getPrivateKey() }),
            (t = new u({ type: "ecdsa", curve: e, parts: r })),
            t
          );
        }
        var o = new g(e),
          f = o.getN(),
          c = Math.ceil((f.bitLength() + 64) / 8),
          p = new d(a.randomBytes(c)),
          l = f.subtract(d.ONE),
          v = p.mod(l).add(d.ONE),
          m = o.getG().multiply(v);
        return (
          (v = i.from(v.toByteArray())),
          (m = i.from(o.getCurve().encodePointHex(m), "hex")),
          r.push({ name: "curve", data: i.from(e) }),
          r.push({ name: "Q", data: m }),
          r.push({ name: "d", data: v }),
          (t = new u({ type: "ecdsa", curve: e, parts: r })),
          t
        );
      }
      ((l.prototype.getPublicKey = function () {
        return this._isPriv ? this._key.toPublic() : this._key;
      }),
        (l.prototype.getPrivateKey = function () {
          return this._isPriv ? this._key : void 0;
        }),
        (l.prototype.getKey = l.prototype.getPrivateKey),
        (l.prototype._keyCheck = function (e, t) {
          if (
            (n.object(e, "key"),
            t || o.assertCompatible(e, u, [1, 3], "key"),
            o.assertCompatible(e, c, [1, 4], "key"),
            e.type !== this._algo)
          )
            throw new Error(
              "A " +
                e.type +
                " key cannot be used in " +
                this._algo +
                " Diffie-Hellman",
            );
          if (e.curve !== this._curve)
            throw new Error(
              "A key from the " +
                e.curve +
                " curve cannot be used with a " +
                this._curve +
                " Diffie-Hellman",
            );
          "dsa" === e.type &&
            (n.deepEqual(e.part.p, this._p, "DSA key prime does not match"),
            n.deepEqual(e.part.g, this._g, "DSA key generator does not match"));
        }),
        (l.prototype.setKey = function (e) {
          if ((this._keyCheck(e), "dsa" === e.type))
            (this._dh.setPrivateKey(e.part.x.data),
              this._dh.setPublicKey(e.part.y.data));
          else if ("ecdsa" === e.type)
            h
              ? (this._dh.setPrivateKey(e.part.d.data),
                this._dh.setPublicKey(e.part.Q.data))
              : (this._priv = new m(this._ecParams, e.part.d.data));
          else if ("curve25519" === e.type) {
            var t = e.part.k;
            (e.part.k || (t = e.part.r),
              (this._priv = t.data),
              0 === this._priv[0] && (this._priv = this._priv.slice(1)),
              (this._priv = this._priv.slice(0, 32)));
          }
          ((this._key = e), (this._isPriv = !0));
        }),
        (l.prototype.setPrivateKey = l.prototype.setKey),
        (l.prototype.computeSecret = function (e) {
          if ((this._keyCheck(e, !0), !this._isPriv))
            throw new Error(
              "DH exchange has not been initialized with a private key yet",
            );
          var t;
          if ("dsa" === this._algo)
            return this._dh.computeSecret(e.part.y.data);
          if ("ecdsa" === this._algo)
            return h
              ? this._dh.computeSecret(e.part.Q.data)
              : ((t = new v(this._ecParams, e.part.Q.data)),
                this._priv.deriveSharedSecret(t));
          if ("curve25519" === this._algo) {
            t = e.part.A.data;
            while (0 === t[0] && t.length > 32) t = t.slice(1);
            var r = this._priv;
            (n.strictEqual(t.length, 32), n.strictEqual(r.length, 32));
            var a = f.box.before(new Uint8Array(t), new Uint8Array(r));
            return i.from(a);
          }
          throw new Error("Invalid algorithm: " + this._algo);
        }),
        (l.prototype.generateKey = function () {
          var e,
            t,
            r = [];
          if ("dsa" === this._algo)
            return (
              this._dh.generateKeys(),
              r.push({ name: "p", data: this._p.data }),
              r.push({ name: "q", data: this._key.part.q.data }),
              r.push({ name: "g", data: this._g.data }),
              r.push({ name: "y", data: this._dh.getPublicKey() }),
              r.push({ name: "x", data: this._dh.getPrivateKey() }),
              (this._key = new u({ type: "dsa", parts: r })),
              (this._isPriv = !0),
              this._key
            );
          if ("ecdsa" === this._algo) {
            if (h)
              return (
                this._dh.generateKeys(),
                r.push({ name: "curve", data: i.from(this._curve) }),
                r.push({ name: "Q", data: this._dh.getPublicKey() }),
                r.push({ name: "d", data: this._dh.getPrivateKey() }),
                (this._key = new u({
                  type: "ecdsa",
                  curve: this._curve,
                  parts: r,
                })),
                (this._isPriv = !0),
                this._key
              );
            var s = this._ecParams.getN(),
              o = new d(a.randomBytes(s.bitLength())),
              c = s.subtract(d.ONE);
            return (
              (e = o.mod(c).add(d.ONE)),
              (t = this._ecParams.getG().multiply(e)),
              (e = i.from(e.toByteArray())),
              (t = i.from(this._ecParams.getCurve().encodePointHex(t), "hex")),
              (this._priv = new m(this._ecParams, e)),
              r.push({ name: "curve", data: i.from(this._curve) }),
              r.push({ name: "Q", data: t }),
              r.push({ name: "d", data: e }),
              (this._key = new u({
                type: "ecdsa",
                curve: this._curve,
                parts: r,
              })),
              (this._isPriv = !0),
              this._key
            );
          }
          if ("curve25519" === this._algo) {
            var p = f.box.keyPair();
            return (
              (e = i.from(p.secretKey)),
              (t = i.from(p.publicKey)),
              (e = i.concat([e, t])),
              n.strictEqual(e.length, 64),
              n.strictEqual(t.length, 32),
              r.push({ name: "A", data: t }),
              r.push({ name: "k", data: e }),
              (this._key = new u({ type: "curve25519", parts: r })),
              (this._isPriv = !0),
              this._key
            );
          }
          throw new Error("Invalid algorithm: " + this._algo);
        }),
        (l.prototype.generateKeys = l.prototype.generateKey),
        (g.prototype.getCurve = function () {
          return this.curve;
        }),
        (g.prototype.getG = function () {
          return this.g;
        }),
        (g.prototype.getN = function () {
          return this.n;
        }),
        (g.prototype.getH = function () {
          return this.h;
        }),
        (m.prototype.deriveSharedSecret = function (e) {
          n.ok(e instanceof v);
          var t = e._pub.multiply(this._priv);
          return i.from(t.getX().toBigInteger().toByteArray());
        }));
    },
    4984: function (e, t, r) {
      e.exports = { read: d, readPkcs1: v, write: l, writePkcs1: E };
      var n = r(2932),
        a = r(3419),
        i = r(2933).Buffer,
        s = r(3078),
        o = r(3020),
        f = r(3018),
        c = r(3019),
        u = r(3550),
        h = r(4284),
        p = h.readECDSACurve;
      function d(e, t) {
        return u.read(e, t, "pkcs1");
      }
      function l(e, t) {
        return u.write(e, t, "pkcs1");
      }
      function g(e, t) {
        return (
          n.strictEqual(e.peek(), a.Ber.Integer, t + " is not an Integer"),
          o.mpNormalize(e.readString(a.Ber.Integer, !0))
        );
      }
      function v(e, t, r) {
        switch (e) {
          case "RSA":
            if ("public" === t) return m(r);
            if ("private" === t) return y(r);
            throw new Error("Unknown key type: " + t);
          case "DSA":
            if ("public" === t) return S(r);
            if ("private" === t) return w(r);
            throw new Error("Unknown key type: " + t);
          case "EC":
          case "ECDSA":
            if ("private" === t) return B(r);
            if ("public" === t) return k(r);
            throw new Error("Unknown key type: " + t);
          case "EDDSA":
          case "EdDSA":
            if ("private" === t) return b(r);
            throw new Error(t + " keys not supported with EdDSA");
          default:
            throw new Error("Unknown key algo: " + e);
        }
      }
      function m(e) {
        var t = g(e, "modulus"),
          r = g(e, "exponent"),
          n = {
            type: "rsa",
            parts: [
              { name: "e", data: r },
              { name: "n", data: t },
            ],
          };
        return new f(n);
      }
      function y(e) {
        var t = g(e, "version");
        n.strictEqual(t[0], 0);
        var r = g(e, "modulus"),
          a = g(e, "public exponent"),
          i = g(e, "private exponent"),
          s = g(e, "prime1"),
          o = g(e, "prime2"),
          f = g(e, "exponent1"),
          u = g(e, "exponent2"),
          h = g(e, "iqmp"),
          p = {
            type: "rsa",
            parts: [
              { name: "n", data: r },
              { name: "e", data: a },
              { name: "d", data: i },
              { name: "iqmp", data: h },
              { name: "p", data: s },
              { name: "q", data: o },
              { name: "dmodp", data: f },
              { name: "dmodq", data: u },
            ],
          };
        return new c(p);
      }
      function w(e) {
        var t = g(e, "version");
        n.strictEqual(t.readUInt8(0), 0);
        var r = g(e, "p"),
          a = g(e, "q"),
          i = g(e, "g"),
          s = g(e, "y"),
          o = g(e, "x"),
          f = {
            type: "dsa",
            parts: [
              { name: "p", data: r },
              { name: "q", data: a },
              { name: "g", data: i },
              { name: "y", data: s },
              { name: "x", data: o },
            ],
          };
        return new c(f);
      }
      function b(e) {
        var t = g(e, "version");
        n.strictEqual(t.readUInt8(0), 1);
        var r = e.readString(a.Ber.OctetString, !0);
        e.readSequence(160);
        var i = e.readOID();
        (n.strictEqual(i, "1.3.101.112", "the ed25519 curve identifier"),
          e.readSequence(161));
        var s = o.readBitString(e),
          f = {
            type: "ed25519",
            parts: [
              { name: "A", data: o.zeroPadToLength(s, 32) },
              { name: "k", data: r },
            ],
          };
        return new c(f);
      }
      function S(e) {
        var t = g(e, "y"),
          r = g(e, "p"),
          n = g(e, "q"),
          a = g(e, "g"),
          i = {
            type: "dsa",
            parts: [
              { name: "y", data: t },
              { name: "p", data: r },
              { name: "q", data: n },
              { name: "g", data: a },
            ],
          };
        return new f(i);
      }
      function k(e) {
        e.readSequence();
        var t = e.readOID();
        n.strictEqual(t, "1.2.840.10045.2.1", "must be ecPublicKey");
        for (
          var r, c = e.readOID(), u = Object.keys(s.curves), h = 0;
          h < u.length;
          ++h
        ) {
          var p = u[h],
            d = s.curves[p];
          if (d.pkcs8oid === c) {
            r = p;
            break;
          }
        }
        n.string(r, "a known ECDSA named curve");
        var l = e.readString(a.Ber.BitString, !0);
        l = o.ecNormalize(l);
        var g = {
          type: "ecdsa",
          parts: [
            { name: "curve", data: i.from(r) },
            { name: "Q", data: l },
          ],
        };
        return new f(g);
      }
      function B(e) {
        var t = g(e, "version");
        n.strictEqual(t.readUInt8(0), 1);
        var r = e.readString(a.Ber.OctetString, !0);
        e.readSequence(160);
        var s = p(e);
        (n.string(s, "a known elliptic curve"), e.readSequence(161));
        var f = e.readString(a.Ber.BitString, !0);
        f = o.ecNormalize(f);
        var u = {
          type: "ecdsa",
          parts: [
            { name: "curve", data: i.from(s) },
            { name: "Q", data: f },
            { name: "d", data: r },
          ],
        };
        return new c(u);
      }
      function E(e, t) {
        switch ((e.startSequence(), t.type)) {
          case "rsa":
            c.isPrivateKey(t) ? F(e, t) : A(e, t);
            break;
          case "dsa":
            c.isPrivateKey(t) ? _(e, t) : x(e, t);
            break;
          case "ecdsa":
            c.isPrivateKey(t) ? I(e, t) : q(e, t);
            break;
          case "ed25519":
            c.isPrivateKey(t) ? P(e, t) : C(e, t);
            break;
          default:
            throw new Error("Unknown key algo: " + t.type);
        }
        e.endSequence();
      }
      function A(e, t) {
        (e.writeBuffer(t.part.n.data, a.Ber.Integer),
          e.writeBuffer(t.part.e.data, a.Ber.Integer));
      }
      function F(e, t) {
        var r = i.from([0]);
        (e.writeBuffer(r, a.Ber.Integer),
          e.writeBuffer(t.part.n.data, a.Ber.Integer),
          e.writeBuffer(t.part.e.data, a.Ber.Integer),
          e.writeBuffer(t.part.d.data, a.Ber.Integer),
          e.writeBuffer(t.part.p.data, a.Ber.Integer),
          e.writeBuffer(t.part.q.data, a.Ber.Integer),
          (t.part.dmodp && t.part.dmodq) || o.addRSAMissing(t),
          e.writeBuffer(t.part.dmodp.data, a.Ber.Integer),
          e.writeBuffer(t.part.dmodq.data, a.Ber.Integer),
          e.writeBuffer(t.part.iqmp.data, a.Ber.Integer));
      }
      function _(e, t) {
        var r = i.from([0]);
        (e.writeBuffer(r, a.Ber.Integer),
          e.writeBuffer(t.part.p.data, a.Ber.Integer),
          e.writeBuffer(t.part.q.data, a.Ber.Integer),
          e.writeBuffer(t.part.g.data, a.Ber.Integer),
          e.writeBuffer(t.part.y.data, a.Ber.Integer),
          e.writeBuffer(t.part.x.data, a.Ber.Integer));
      }
      function x(e, t) {
        (e.writeBuffer(t.part.y.data, a.Ber.Integer),
          e.writeBuffer(t.part.p.data, a.Ber.Integer),
          e.writeBuffer(t.part.q.data, a.Ber.Integer),
          e.writeBuffer(t.part.g.data, a.Ber.Integer));
      }
      function q(e, t) {
        (e.startSequence(), e.writeOID("1.2.840.10045.2.1"));
        var r = t.part.curve.data.toString(),
          i = s.curves[r].pkcs8oid;
        (n.string(i, "a known ECDSA named curve"),
          e.writeOID(i),
          e.endSequence());
        var f = o.ecNormalize(t.part.Q.data, !0);
        e.writeBuffer(f, a.Ber.BitString);
      }
      function I(e, t) {
        var r = i.from([1]);
        (e.writeBuffer(r, a.Ber.Integer),
          e.writeBuffer(t.part.d.data, a.Ber.OctetString),
          e.startSequence(160));
        var f = t.part.curve.data.toString(),
          c = s.curves[f].pkcs8oid;
        (n.string(c, "a known ECDSA named curve"),
          e.writeOID(c),
          e.endSequence(),
          e.startSequence(161));
        var u = o.ecNormalize(t.part.Q.data, !0);
        (e.writeBuffer(u, a.Ber.BitString), e.endSequence());
      }
      function P(e, t) {
        var r = i.from([1]);
        (e.writeBuffer(r, a.Ber.Integer),
          e.writeBuffer(t.part.k.data, a.Ber.OctetString),
          e.startSequence(160),
          e.writeOID("1.3.101.112"),
          e.endSequence(),
          e.startSequence(161),
          o.writeBitString(e, t.part.A.data),
          e.endSequence());
      }
      function C(e, t) {
        throw new Error("Public keys are not supported for EdDSA PKCS#1");
      }
    },
    4985: function (e, t, r) {
      e.exports = { read: u, write: w };
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3018),
        s = r(3019),
        o = r(3020),
        f =
          (r(3894),
          r(4983),
          {
            "rsa-sha1": 5,
            "rsa-sha256": 8,
            "rsa-sha512": 10,
            "ecdsa-p256-sha256": 13,
            "ecdsa-p384-sha384": 14,
          }),
        c = {};
      function u(e, t) {
        "string" !== typeof e &&
          (n.buffer(e, "buf"), (e = e.toString("ascii")));
        var r = e.split("\n");
        if (r[0].match(/^Private-key-format\: v1/)) {
          var a = r[1].split(" "),
            i = parseInt(a[1], 10),
            s = a[2];
          if (!c[i]) throw new Error("Unsupported algorithm: " + s);
          return l(i, r.slice(2));
        }
        var o = 0;
        while (r[o].match(/^\;/)) o++;
        if (
          (r[o].match(/\. IN KEY /) || r[o].match(/\. IN DNSKEY /)) &&
          0 === r[o + 1].length
        )
          return h(r[o]);
        throw new Error("Cannot parse dnssec key");
      }
      function h(e) {
        var t = e.split(" "),
          r = parseInt(t[5], 10);
        if (!c[r]) throw new Error("Unsupported algorithm: " + r);
        var n = t.slice(6, t.length).join(),
          s = a.from(n, "base64");
        if (c[r].match(/^RSA-/)) {
          var f = s.readUInt8(0);
          if (3 != f && 1 != f)
            throw new Error(
              "Cannot parse dnssec key: unsupported exponent length",
            );
          var u = s.slice(1, f + 1);
          u = o.mpNormalize(u);
          var h = s.slice(1 + f);
          h = o.mpNormalize(h);
          var p = { type: "rsa", parts: [] };
          return (
            p.parts.push({ name: "e", data: u }),
            p.parts.push({ name: "n", data: h }),
            new i(p)
          );
        }
        if ("ECDSA-P384-SHA384" === c[r] || "ECDSA-P256-SHA256" === c[r]) {
          var d = "nistp384",
            l = 384;
          c[r].match(/^ECDSA-P256-SHA256/) && ((d = "nistp256"), (l = 256));
          var g = {
            type: "ecdsa",
            curve: d,
            size: l,
            parts: [
              { name: "curve", data: a.from(d) },
              { name: "Q", data: o.ecNormalize(s) },
            ],
          };
          return new i(g);
        }
        throw new Error("Unsupported algorithm: " + c[r]);
      }
      function p(e) {
        return a.from(e.split(" ")[1], "base64");
      }
      function d(e) {
        var t = {};
        e.forEach(function (e) {
          "Modulus:" === e.split(" ")[0]
            ? (t["n"] = p(e))
            : "PublicExponent:" === e.split(" ")[0]
              ? (t["e"] = p(e))
              : "PrivateExponent:" === e.split(" ")[0]
                ? (t["d"] = p(e))
                : "Prime1:" === e.split(" ")[0]
                  ? (t["p"] = p(e))
                  : "Prime2:" === e.split(" ")[0]
                    ? (t["q"] = p(e))
                    : "Exponent1:" === e.split(" ")[0]
                      ? (t["dmodp"] = p(e))
                      : "Exponent2:" === e.split(" ")[0]
                        ? (t["dmodq"] = p(e))
                        : "Coefficient:" === e.split(" ")[0] &&
                          (t["iqmp"] = p(e));
        });
        var r = {
          type: "rsa",
          parts: [
            { name: "e", data: o.mpNormalize(t["e"]) },
            { name: "n", data: o.mpNormalize(t["n"]) },
            { name: "d", data: o.mpNormalize(t["d"]) },
            { name: "p", data: o.mpNormalize(t["p"]) },
            { name: "q", data: o.mpNormalize(t["q"]) },
            { name: "dmodp", data: o.mpNormalize(t["dmodp"]) },
            { name: "dmodq", data: o.mpNormalize(t["dmodq"]) },
            { name: "iqmp", data: o.mpNormalize(t["iqmp"]) },
          ],
        };
        return new s(r);
      }
      function l(e, t) {
        if (c[e].match(/^RSA-/)) return d(t);
        if ("ECDSA-P384-SHA384" === c[e] || "ECDSA-P256-SHA256" === c[e]) {
          var r = a.from(t[0].split(" ")[1], "base64"),
            n = "nistp384",
            i = 384;
          "ECDSA-P256-SHA256" === c[e] && ((n = "nistp256"), (i = 256));
          var f = o.publicFromPrivateECDSA(n, r),
            u = f.part["Q"].data,
            h = {
              type: "ecdsa",
              curve: n,
              size: i,
              parts: [
                { name: "curve", data: a.from(n) },
                { name: "d", data: r },
                { name: "Q", data: u },
              ],
            };
          return new s(h);
        }
        throw new Error("Unsupported algorithm: " + c[e]);
      }
      function g(e) {
        var t = e.getFullYear() + "",
          r = e.getMonth() + 1,
          n = t + r + e.getUTCDate();
        return (
          (n += "" + e.getUTCHours() + e.getUTCMinutes()),
          (n += e.getUTCSeconds()),
          n
        );
      }
      function v(e) {
        if (e && e.hashAlgo && "sha1" !== e.hashAlgo) {
          if ("sha256" === e.hashAlgo) return "8 (RSASHA256)";
          if ("sha512" === e.hashAlgo) return "10 (RSASHA512)";
          throw new Error("Unknown or unsupported hash: " + e.hashAlgo);
        }
        return "5 (RSASHA1)";
      }
      function m(e, t) {
        (e.part.dmodp && e.part.dmodq) || o.addRSAMissing(e);
        var r = "";
        ((r += "Private-key-format: v1.3\n"),
          (r += "Algorithm: " + v(t) + "\n"));
        var n = o.mpDenormalize(e.part["n"].data);
        r += "Modulus: " + n.toString("base64") + "\n";
        var i = o.mpDenormalize(e.part["e"].data);
        r += "PublicExponent: " + i.toString("base64") + "\n";
        var s = o.mpDenormalize(e.part["d"].data);
        r += "PrivateExponent: " + s.toString("base64") + "\n";
        var f = o.mpDenormalize(e.part["p"].data);
        r += "Prime1: " + f.toString("base64") + "\n";
        var c = o.mpDenormalize(e.part["q"].data);
        r += "Prime2: " + c.toString("base64") + "\n";
        var u = o.mpDenormalize(e.part["dmodp"].data);
        r += "Exponent1: " + u.toString("base64") + "\n";
        var h = o.mpDenormalize(e.part["dmodq"].data);
        r += "Exponent2: " + h.toString("base64") + "\n";
        var p = o.mpDenormalize(e.part["iqmp"].data);
        r += "Coefficient: " + p.toString("base64") + "\n";
        var d = new Date();
        return (
          (r += "Created: " + g(d) + "\n"),
          (r += "Publish: " + g(d) + "\n"),
          (r += "Activate: " + g(d) + "\n"),
          a.from(r, "ascii")
        );
      }
      function y(e, t) {
        var r = "";
        if (((r += "Private-key-format: v1.3\n"), "nistp256" === e.curve))
          r += "Algorithm: 13 (ECDSAP256SHA256)\n";
        else {
          if ("nistp384" !== e.curve) throw new Error("Unsupported curve");
          r += "Algorithm: 14 (ECDSAP384SHA384)\n";
        }
        var n = e.part["d"].data.toString("base64");
        r += "PrivateKey: " + n + "\n";
        var i = new Date();
        return (
          (r += "Created: " + g(i) + "\n"),
          (r += "Publish: " + g(i) + "\n"),
          (r += "Activate: " + g(i) + "\n"),
          a.from(r, "ascii")
        );
      }
      function w(e, t) {
        if (s.isPrivateKey(e)) {
          if ("rsa" === e.type) return m(e, t);
          if ("ecdsa" === e.type) return y(e, t);
          throw new Error("Unsupported algorithm: " + e.type);
        }
        throw i.isKey(e)
          ? new Error('Format "dnssec" only supports writing private keys')
          : new Error("key is not a Key or PrivateKey");
      }
      Object.keys(f).forEach(function (e) {
        c[f[e]] = e.toUpperCase();
      });
    },
    4986: function (e, t, r) {
      e.exports = { read: h, write: l };
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3551),
        s = r(3018),
        o = r(3894),
        f = r(2764),
        c = r(3019),
        u = r(3371);
      function h(e, t) {
        var r,
          s,
          h = e.toString("ascii").split(/[\r\n]+/),
          l = !1,
          g = 0;
        while (g < h.length)
          if (
            ((r = d(h[g++])),
            r &&
              ((s = { "putty-user-key-file-2": 2, "putty-user-key-file-3": 3 }[
                r[0].toLowerCase()
              ]),
              s))
          ) {
            l = !0;
            break;
          }
        if (!l) throw new Error("No PuTTY format first line found");
        var v = r[1];
        ((r = d(h[g++])), n.equal(r[0].toLowerCase(), "encryption"));
        var m = r[1];
        ((r = d(h[g++])), n.equal(r[0].toLowerCase(), "comment"));
        var y = r[1];
        ((r = d(h[g++])), n.equal(r[0].toLowerCase(), "public-lines"));
        var w = parseInt(r[1], 10);
        if (!isFinite(w) || w < 0 || w > h.length)
          throw new Error("Invalid public-lines count");
        var b = a.from(h.slice(g, g + w).join(""), "base64"),
          S = i.algToKeyType(v),
          k = i.read(b);
        if (k.type !== S) throw new Error("Outer key algorithm mismatch");
        if (((g += w), h[g])) {
          ((r = d(h[g++])), n.equal(r[0].toLowerCase(), "private-lines"));
          var B = parseInt(r[1], 10);
          if (!isFinite(B) || B < 0 || B > h.length)
            throw new Error("Invalid private-lines count");
          var E = a.from(h.slice(g, g + B).join(""), "base64");
          if ("none" !== m && 3 === s)
            throw new Error(
              "Encrypted keys arenot supported for PuTTY format version 3",
            );
          if ("aes256-cbc" === m) {
            if (!t.passphrase) throw new u.KeyEncryptedError(t.filename, "PEM");
            var A = a.alloc(16, 0),
              F = f.createDecipheriv("aes-256-cbc", p(t.passphrase), A);
            (F.setAutoPadding(!1), (E = a.concat([F.update(E), F.final()])));
          }
          if (((k = new c(k)), k.type !== S))
            throw new Error("Outer key algorithm mismatch");
          var _,
            x = new o({ buffer: E });
          if ("ssh-dss" === v) _ = [{ name: "x", data: x.readBuffer() }];
          else if ("ssh-rsa" === v)
            _ = [
              { name: "d", data: x.readBuffer() },
              { name: "p", data: x.readBuffer() },
              { name: "q", data: x.readBuffer() },
              { name: "iqmp", data: x.readBuffer() },
            ];
          else if (v.match(/^ecdsa-sha2-nistp/))
            _ = [{ name: "d", data: x.readBuffer() }];
          else {
            if ("ssh-ed25519" !== v)
              throw new Error("Unsupported PPK key type: " + v);
            _ = [{ name: "k", data: x.readBuffer() }];
          }
          k = new c({ type: k.type, parts: k.parts.concat(_) });
        }
        return ((k.comment = y), k);
      }
      function p(e) {
        var t = f
            .createHash("sha1")
            .update(a.concat([a.from([0, 0, 0, 0]), a.from(e)]))
            .digest(),
          r = f
            .createHash("sha1")
            .update(a.concat([a.from([0, 0, 0, 1]), a.from(e)]))
            .digest();
        return a.concat([t, r]).slice(0, 32);
      }
      function d(e) {
        var t = e.indexOf(":");
        if (-1 === t) return null;
        var r = e.slice(0, t);
        ++t;
        while (" " === e[t]) ++t;
        var n = e.slice(t);
        return [r, n];
      }
      function l(e, t) {
        if ((n.object(e), !s.isKey(e))) throw new Error("Must be a public key");
        var r = i.keyTypeToAlg(e),
          o = i.write(e),
          f = e.comment || "",
          c = o.toString("base64"),
          u = g(c, 64);
        return (
          u.unshift("Public-Lines: " + u.length),
          u.unshift("Comment: " + f),
          u.unshift("Encryption: none"),
          u.unshift("PuTTY-User-Key-File-2: " + r),
          a.from(u.join("\n") + "\n")
        );
      }
      function g(e, t) {
        var r = [],
          n = 0;
        while (n < e.length) (r.push(e.slice(n, n + 64)), (n += 64));
        return r;
      }
    },
    6028: function (e, t, r) {
      e.exports = { Verifier: c, Signer: u };
      var n = r(4659),
        a = r(235),
        i = r(799),
        s = r(2932),
        o = r(2933).Buffer,
        f = r(3418);
      function c(e, t) {
        if ("sha512" !== t.toLowerCase())
          throw new Error("ED25519 only supports the use of SHA-512 hashes");
        ((this.key = e), (this.chunks = []), a.Writable.call(this, {}));
      }
      function u(e, t) {
        if ("sha512" !== t.toLowerCase())
          throw new Error("ED25519 only supports the use of SHA-512 hashes");
        ((this.key = e), (this.chunks = []), a.Writable.call(this, {}));
      }
      (i.inherits(c, a.Writable),
        (c.prototype._write = function (e, t, r) {
          (this.chunks.push(e), r());
        }),
        (c.prototype.update = function (e) {
          ("string" === typeof e && (e = o.from(e, "binary")),
            this.chunks.push(e));
        }),
        (c.prototype.verify = function (e, t) {
          var r;
          if (f.isSignature(e, [2, 0])) {
            if ("ed25519" !== e.type) return !1;
            r = e.toBuffer("raw");
          } else if ("string" === typeof e) r = o.from(e, "base64");
          else if (f.isSignature(e, [1, 0]))
            throw new Error(
              "signature was created by too old a version of sshpk and cannot be verified",
            );
          return (
            s.buffer(r),
            n.sign.detached.verify(
              new Uint8Array(o.concat(this.chunks)),
              new Uint8Array(r),
              new Uint8Array(this.key.part.A.data),
            )
          );
        }),
        i.inherits(u, a.Writable),
        (u.prototype._write = function (e, t, r) {
          (this.chunks.push(e), r());
        }),
        (u.prototype.update = function (e) {
          ("string" === typeof e && (e = o.from(e, "binary")),
            this.chunks.push(e));
        }),
        (u.prototype.sign = function () {
          var e = n.sign.detached(
              new Uint8Array(o.concat(this.chunks)),
              new Uint8Array(
                o.concat([this.key.part.k.data, this.key.part.A.data]),
              ),
            ),
            t = o.from(e),
            r = f.parse(t, "ed25519", "raw");
          return ((r.hashAlgorithm = "sha512"), r);
        }));
    },
    6029: function (e, t, r) {
      e.exports = { read: h, write: v };
      var n = r(2932),
        a = r(2933).Buffer,
        i = (r(3020), r(3018), r(3019), r(3550)),
        s = r(6031),
        o = r(3551),
        f = r(4985),
        c = r(4986),
        u = "Private-key-format: v1";
      function h(e, t) {
        if ("string" === typeof e) {
          if (e.trim().match(/^[-]+[ ]*BEGIN/)) return i.read(e, t);
          if (e.match(/^\s*ssh-[a-z]/)) return s.read(e, t);
          if (e.match(/^\s*ecdsa-/)) return s.read(e, t);
          if (e.match(/^putty-user-key-file-2:/i)) return c.read(e, t);
          if (g(e)) return f.read(e, t);
          e = a.from(e, "binary");
        } else {
          if ((n.buffer(e), l(e))) return i.read(e, t);
          if (d(e)) return s.read(e, t);
          if (p(e)) return c.read(e, t);
          if (g(e)) return f.read(e, t);
        }
        if (e.readUInt32BE(0) < e.length) return o.read(e, t);
        throw new Error("Failed to auto-detect format of key");
      }
      function p(e) {
        var t = 0;
        while (t < e.length && (32 === e[t] || 10 === e[t] || 9 === e[t])) ++t;
        return (
          t + 22 <= e.length &&
          "putty-user-key-file-2:" ===
            e
              .slice(t, t + 22)
              .toString("ascii")
              .toLowerCase()
        );
      }
      function d(e) {
        var t = 0;
        while (t < e.length && (32 === e[t] || 10 === e[t] || 9 === e[t])) ++t;
        return (
          (t + 4 <= e.length &&
            "ssh-" === e.slice(t, t + 4).toString("ascii")) ||
          (t + 6 <= e.length &&
            "ecdsa-" === e.slice(t, t + 6).toString("ascii"))
        );
      }
      function l(e) {
        var t = 0;
        while (t < e.length && (32 === e[t] || 10 === e[t])) ++t;
        if (45 !== e[t]) return !1;
        while (t < e.length && 45 === e[t]) ++t;
        while (t < e.length && 32 === e[t]) ++t;
        return !(
          t + 5 > e.length || "BEGIN" !== e.slice(t, t + 5).toString("ascii")
        );
      }
      function g(e) {
        if (e.length <= u.length) return !1;
        var t = e.slice(0, u.length);
        if (t.toString("ascii") === u) return !0;
        "string" !== typeof e && (e = e.toString("ascii"));
        var r = e.split("\n"),
          n = 0;
        while (r[n].match(/^\;/)) n++;
        return (
          !!r[n].toString("ascii").match(/\. IN KEY /) ||
          !!r[n].toString("ascii").match(/\. IN DNSKEY /)
        );
      }
      function v(e, t) {
        throw new Error('"auto" format cannot be used for writing');
      }
    },
    6031: function (e, t, r) {
      e.exports = { read: c, write: u };
      var n = r(2932),
        a = r(2933).Buffer,
        i = r(3551),
        s = (r(3020), r(3018)),
        o =
          (r(3019),
          r(4660),
          /^([a-z0-9-]+)[ \t]+([a-zA-Z0-9+\/]+[=]*)([ \t]+([^ \t][^\n]*[\n]*)?)?$/),
        f =
          /^([a-z0-9-]+)[ \t\n]+([a-zA-Z0-9+\/][a-zA-Z0-9+\/ \t\n=]*)([^a-zA-Z0-9+\/ \t\n=].*)?$/;
      function c(e, t) {
        "string" !== typeof e &&
          (n.buffer(e, "buf"), (e = e.toString("ascii")));
        var r = e.trim().replace(/[\\\r]/g, ""),
          s = r.match(o);
        (s || (s = r.match(f)), n.ok(s, "key must match regex"));
        var c,
          u = i.algToKeyType(s[1]),
          h = a.from(s[2], "base64"),
          p = {};
        if (s[4])
          try {
            c = i.read(h);
          } catch (m) {
            ((s = r.match(f)),
              n.ok(s, "key must match regex"),
              (h = a.from(s[2], "base64")),
              (c = i.readInternal(p, "public", h)));
          }
        else c = i.readInternal(p, "public", h);
        if ((n.strictEqual(u, c.type), s[4] && s[4].length > 0))
          c.comment = s[4];
        else if (p.consumed) {
          var d = s[2] + (s[3] ? s[3] : ""),
            l = 4 * Math.ceil(p.consumed / 3);
          d =
            d.slice(0, l - 2).replace(/[^a-zA-Z0-9+\/=]/g, "") + d.slice(l - 2);
          var g = p.consumed % 3;
          g > 0 && "=" !== d.slice(l - 1, l) && l--;
          while ("=" === d.slice(l, l + 1)) l++;
          var v = d.slice(l);
          ((v = v.replace(/[\r\n]/g, " ").replace(/^\s+/, "")),
            v.match(/^[a-zA-Z0-9]/) && (c.comment = v));
        }
        return c;
      }
      function u(e, t) {
        if ((n.object(e), !s.isKey(e))) throw new Error("Must be a public key");
        var r = [],
          o = i.keyTypeToAlg(e);
        r.push(o);
        var f = i.write(e);
        return (
          r.push(f.toString("base64")),
          e.comment && r.push(e.comment),
          a.from(r.join(" "))
        );
      }
    },
    6032: function (e, t, r) {
      e.exports = { read: m, verify: p, sign: C, signAsync: U, write: O };
      var n = r(2932),
        a = r(3419),
        i = r(2933).Buffer,
        s = (r(3078), r(3020)),
        o = (r(3018), r(3019), r(3550), r(4286)),
        f = r(3418),
        c = r(4285),
        u = r(4284);
      function h(e, t) {
        return (
          n.strictEqual(e.peek(), a.Ber.Integer, t + " is not an Integer"),
          s.mpNormalize(e.readString(a.Ber.Integer, !0))
        );
      }
      function p(e, t) {
        var r = e.signatures.x509;
        n.object(r, "x509 signature");
        var i = r.algo.split("-");
        if (i[0] !== t.type) return !1;
        var s = r.cache;
        if (void 0 === s) {
          var o = new a.BerWriter();
          (K(e, o), (s = o.buffer));
        }
        var f = t.createVerify(i[1]);
        return (f.write(s), f.verify(r.signature));
      }
      function d(e) {
        return a.Ber.Context | a.Ber.Constructor | e;
      }
      function l(e) {
        return a.Ber.Context | e;
      }
      var g = {
        "rsa-md5": "1.2.840.113549.1.1.4",
        "rsa-sha1": "1.2.840.113549.1.1.5",
        "rsa-sha256": "1.2.840.113549.1.1.11",
        "rsa-sha384": "1.2.840.113549.1.1.12",
        "rsa-sha512": "1.2.840.113549.1.1.13",
        "dsa-sha1": "1.2.840.10040.4.3",
        "dsa-sha256": "2.16.840.1.101.3.4.3.2",
        "ecdsa-sha1": "1.2.840.10045.4.1",
        "ecdsa-sha256": "1.2.840.10045.4.3.2",
        "ecdsa-sha384": "1.2.840.10045.4.3.3",
        "ecdsa-sha512": "1.2.840.10045.4.3.4",
        "ed25519-sha512": "1.3.101.112",
      };
      (Object.keys(g).forEach(function (e) {
        g[g[e]] = e;
      }),
        (g["1.3.14.3.2.3"] = "rsa-md5"),
        (g["1.3.14.3.2.29"] = "rsa-sha1"));
      var v = {
        issuerKeyId: "2.5.29.35",
        altName: "2.5.29.17",
        basicConstraints: "2.5.29.19",
        keyUsage: "2.5.29.15",
        extKeyUsage: "2.5.29.37",
      };
      function m(e, t) {
        ("string" === typeof e && (e = i.from(e, "binary")),
          n.buffer(e, "buf"));
        var r = new a.BerReader(e);
        if ((r.readSequence(), Math.abs(r.length - r.remain) > 1))
          throw new Error("DER sequence does not contain whole byte stream");
        var s = r.offset;
        r.readSequence();
        var p = r.offset + r.length,
          l = p;
        if (r.peek() === d(0)) {
          r.readSequence(d(0));
          var v = r.readInt();
          n.ok(v <= 3, "only x.509 versions up to v3 supported");
        }
        var m = { signatures: {} },
          w = (m.signatures.x509 = {});
        ((w.extras = {}), (m.serial = h(r, "serial")), r.readSequence());
        var b = r.offset + r.length,
          S = r.readOID(),
          k = g[S];
        if (void 0 === k) throw new Error("unknown signature algorithm " + S);
        if (
          ((r._offset = b),
          (m.issuer = o.parseAsn1(r)),
          r.readSequence(),
          (m.validFrom = y(r)),
          (m.validUntil = y(r)),
          (m.subjects = [o.parseAsn1(r)]),
          r.readSequence(),
          (b = r.offset + r.length),
          (m.subjectKey = u.readPkcs8(void 0, "public", r)),
          (r._offset = b),
          r.peek() === d(1) &&
            (r.readSequence(d(1)),
            (w.extras.issuerUniqueID = e.slice(r.offset, r.offset + r.length)),
            (r._offset += r.length)),
          r.peek() === d(2) &&
            (r.readSequence(d(2)),
            (w.extras.subjectUniqueID = e.slice(r.offset, r.offset + r.length)),
            (r._offset += r.length)),
          r.peek() === d(3))
        ) {
          r.readSequence(d(3));
          var B = r.offset + r.length;
          r.readSequence();
          while (r.offset < B) E(m, e, r);
          n.strictEqual(r.offset, B);
        }
        (n.strictEqual(r.offset, p),
          r.readSequence(),
          (b = r.offset + r.length));
        var A = r.readOID(),
          F = g[A];
        if (void 0 === F) throw new Error("unknown signature algorithm " + A);
        r._offset = b;
        var _ = r.readString(a.Ber.BitString, !0);
        0 === _[0] && (_ = _.slice(1));
        var x = F.split("-");
        return (
          (w.signature = f.parse(_, x[0], "asn1")),
          (w.signature.hashAlgorithm = x[1]),
          (w.algo = F),
          (w.cache = e.slice(s, l)),
          new c(m)
        );
      }
      function y(e) {
        if (e.peek() === a.Ber.UTCTime) return F(e.readString(a.Ber.UTCTime));
        if (e.peek() === a.Ber.GeneralizedTime)
          return x(e.readString(a.Ber.GeneralizedTime));
        throw new Error("Unsupported date format");
      }
      function w(e, t) {
        t.getUTCFullYear() >= 2050 || t.getUTCFullYear() < 1950
          ? e.writeString(P(t), a.Ber.GeneralizedTime)
          : e.writeString(I(t), a.Ber.UTCTime);
      }
      var b = {
          OtherName: d(0),
          RFC822Name: l(1),
          DNSName: l(2),
          X400Address: d(3),
          DirectoryName: d(4),
          EDIPartyName: d(5),
          URI: l(6),
          IPAddress: l(7),
          OID: l(8),
        },
        S = {
          serverAuth: "1.3.6.1.5.5.7.3.1",
          clientAuth: "1.3.6.1.5.5.7.3.2",
          codeSigning: "1.3.6.1.5.5.7.3.3",
          joyentDocker: "1.3.6.1.4.1.38678.1.4.1",
          joyentCmon: "1.3.6.1.4.1.38678.1.4.2",
        },
        k = {};
      Object.keys(S).forEach(function (e) {
        k[S[e]] = e;
      });
      var B = [
        "signature",
        "identity",
        "keyEncryption",
        "encryption",
        "keyAgreement",
        "ca",
        "crl",
      ];
      function E(e, t, r) {
        r.readSequence();
        var n,
          i,
          s = r.offset + r.length,
          f = r.readOID(),
          c = e.signatures.x509;
        switch (
          (c.extras.exts || (c.extras.exts = []),
          r.peek() === a.Ber.Boolean && (i = r.readBoolean()),
          f)
        ) {
          case v.basicConstraints:
            (r.readSequence(a.Ber.OctetString), r.readSequence());
            var u = r.offset + r.length,
              h = !1;
            (r.peek() === a.Ber.Boolean && (h = r.readBoolean()),
              void 0 === e.purposes && (e.purposes = []),
              !0 === h && e.purposes.push("ca"));
            var p = { oid: f, critical: i };
            (r.offset < u &&
              r.peek() === a.Ber.Integer &&
              (p.pathLen = r.readInt()),
              c.extras.exts.push(p));
            break;
          case v.extKeyUsage:
            (r.readSequence(a.Ber.OctetString),
              r.readSequence(),
              void 0 === e.purposes && (e.purposes = []));
            var d = r.offset + r.length;
            while (r.offset < d) {
              var l = r.readOID();
              e.purposes.push(k[l] || l);
            }
            (-1 !== e.purposes.indexOf("serverAuth") &&
            -1 === e.purposes.indexOf("clientAuth")
              ? e.subjects.forEach(function (e) {
                  "host" !== e.type &&
                    ((e.type = "host"),
                    (e.hostname = e.uid || e.email || e.components[0].value));
                })
              : -1 !== e.purposes.indexOf("clientAuth") &&
                -1 === e.purposes.indexOf("serverAuth") &&
                e.subjects.forEach(function (e) {
                  "user" !== e.type &&
                    ((e.type = "user"),
                    (e.uid = e.hostname || e.email || e.components[0].value));
                }),
              c.extras.exts.push({ oid: f, critical: i }));
            break;
          case v.keyUsage:
            r.readSequence(a.Ber.OctetString);
            var g = r.readString(a.Ber.BitString, !0),
              m = D(g, B);
            (m.forEach(function (t) {
              (void 0 === e.purposes && (e.purposes = []),
                -1 === e.purposes.indexOf(t) && e.purposes.push(t));
            }),
              c.extras.exts.push({ oid: f, critical: i, bits: g }));
            break;
          case v.altName:
            (r.readSequence(a.Ber.OctetString), r.readSequence());
            var y = r.offset + r.length;
            while (r.offset < y)
              switch (r.peek()) {
                case b.OtherName:
                case b.EDIPartyName:
                  (r.readSequence(), (r._offset += r.length));
                  break;
                case b.OID:
                  r.readOID(b.OID);
                  break;
                case b.RFC822Name:
                  var w = r.readString(b.RFC822Name);
                  ((n = o.forEmail(w)),
                    e.subjects[0].equals(n) || e.subjects.push(n));
                  break;
                case b.DirectoryName:
                  (r.readSequence(b.DirectoryName),
                    (n = o.parseAsn1(r)),
                    e.subjects[0].equals(n) || e.subjects.push(n));
                  break;
                case b.DNSName:
                  var S = r.readString(b.DNSName);
                  ((n = o.forHost(S)),
                    e.subjects[0].equals(n) || e.subjects.push(n));
                  break;
                default:
                  r.readString(r.peek());
                  break;
              }
            c.extras.exts.push({ oid: f, critical: i });
            break;
          default:
            c.extras.exts.push({
              oid: f,
              critical: i,
              data: r.readString(a.Ber.OctetString, !0),
            });
            break;
        }
        r._offset = s;
      }
      var A =
        /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
      function F(e) {
        var t = e.match(A);
        n.ok(t, "timestamps must be in UTC");
        var r = new Date(),
          a = r.getUTCFullYear(),
          i = 100 * Math.floor(a / 100),
          s = parseInt(t[1], 10);
        return (
          (s += a % 100 < 50 && s >= 60 ? i - 1 : i),
          r.setUTCFullYear(s, parseInt(t[2], 10) - 1, parseInt(t[3], 10)),
          r.setUTCHours(parseInt(t[4], 10), parseInt(t[5], 10)),
          t[6] && t[6].length > 0 && r.setUTCSeconds(parseInt(t[6], 10)),
          r
        );
      }
      var _ =
        /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
      function x(e) {
        var t = e.match(_);
        n.ok(t);
        var r = new Date();
        return (
          r.setUTCFullYear(
            parseInt(t[1], 10),
            parseInt(t[2], 10) - 1,
            parseInt(t[3], 10),
          ),
          r.setUTCHours(parseInt(t[4], 10), parseInt(t[5], 10)),
          t[6] && t[6].length > 0 && r.setUTCSeconds(parseInt(t[6], 10)),
          r
        );
      }
      function q(e, t) {
        void 0 === t && (t = 2);
        var r = "" + e;
        while (r.length < t) r = "0" + r;
        return r;
      }
      function I(e) {
        var t = "";
        return (
          (t += q(e.getUTCFullYear() % 100)),
          (t += q(e.getUTCMonth() + 1)),
          (t += q(e.getUTCDate())),
          (t += q(e.getUTCHours())),
          (t += q(e.getUTCMinutes())),
          (t += q(e.getUTCSeconds())),
          (t += "Z"),
          t
        );
      }
      function P(e) {
        var t = "";
        return (
          (t += q(e.getUTCFullYear(), 4)),
          (t += q(e.getUTCMonth() + 1)),
          (t += q(e.getUTCDate())),
          (t += q(e.getUTCHours())),
          (t += q(e.getUTCMinutes())),
          (t += q(e.getUTCSeconds())),
          (t += "Z"),
          t
        );
      }
      function C(e, t) {
        void 0 === e.signatures.x509 && (e.signatures.x509 = {});
        var r = e.signatures.x509;
        if (
          ((r.algo = t.type + "-" + t.defaultHashAlgorithm()),
          void 0 === g[r.algo])
        )
          return !1;
        var n = new a.BerWriter();
        K(e, n);
        var i = n.buffer;
        r.cache = i;
        var s = t.createSign();
        return (s.write(i), (e.signatures.x509.signature = s.sign()), !0);
      }
      function U(e, t, r) {
        void 0 === e.signatures.x509 && (e.signatures.x509 = {});
        var n = e.signatures.x509,
          i = new a.BerWriter();
        K(e, i);
        var s = i.buffer;
        ((n.cache = s),
          t(s, function (e, t) {
            e
              ? r(e)
              : ((n.algo = t.type + "-" + t.hashAlgorithm),
                void 0 !== g[n.algo]
                  ? ((n.signature = t), r())
                  : r(new Error('Invalid signing algorithm "' + n.algo + '"')));
          }));
      }
      function O(e, t) {
        var r = e.signatures.x509;
        n.object(r, "x509 signature");
        var s = new a.BerWriter();
        (s.startSequence(),
          r.cache
            ? (s._ensure(r.cache.length),
              r.cache.copy(s._buf, s._offset),
              (s._offset += r.cache.length))
            : K(e, s),
          s.startSequence(),
          s.writeOID(g[r.algo]),
          r.algo.match(/^rsa-/) && s.writeNull(),
          s.endSequence());
        var o = r.signature.toBuffer("asn1"),
          f = i.alloc(o.length + 1);
        return (
          (f[0] = 0),
          o.copy(f, 1),
          s.writeBuffer(f, a.Ber.BitString),
          s.endSequence(),
          s.buffer
        );
      }
      function K(e, t) {
        var r = e.signatures.x509;
        (n.object(r, "x509 signature"),
          t.startSequence(),
          t.startSequence(d(0)),
          t.writeInt(2),
          t.endSequence(),
          t.writeBuffer(s.mpNormalize(e.serial), a.Ber.Integer),
          t.startSequence(),
          t.writeOID(g[r.algo]),
          r.algo.match(/^rsa-/) && t.writeNull(),
          t.endSequence(),
          e.issuer.toAsn1(t),
          t.startSequence(),
          w(t, e.validFrom),
          w(t, e.validUntil),
          t.endSequence());
        var i = e.subjects[0],
          o = e.subjects.slice(1);
        if (
          (i.toAsn1(t),
          u.writePkcs8(t, e.subjectKey),
          r.extras &&
            r.extras.issuerUniqueID &&
            t.writeBuffer(r.extras.issuerUniqueID, d(1)),
          r.extras &&
            r.extras.subjectUniqueID &&
            t.writeBuffer(r.extras.subjectUniqueID, d(2)),
          o.length > 0 ||
            "host" === i.type ||
            (void 0 !== e.purposes && e.purposes.length > 0) ||
            (r.extras && r.extras.exts))
        ) {
          (t.startSequence(d(3)), t.startSequence());
          var f = [];
          (void 0 !== e.purposes &&
            e.purposes.length > 0 &&
            (f.push({ oid: v.basicConstraints, critical: !0 }),
            f.push({ oid: v.keyUsage, critical: !0 }),
            f.push({ oid: v.extKeyUsage, critical: !0 })),
            f.push({ oid: v.altName }),
            r.extras && r.extras.exts && (f = r.extras.exts));
          for (var c = 0; c < f.length; ++c) {
            if (
              (t.startSequence(),
              t.writeOID(f[c].oid),
              void 0 !== f[c].critical && t.writeBoolean(f[c].critical),
              f[c].oid === v.altName)
            ) {
              (t.startSequence(a.Ber.OctetString),
                t.startSequence(),
                "host" === i.type && t.writeString(i.hostname, l(2)));
              for (var h = 0; h < o.length; ++h)
                "host" === o[h].type
                  ? t.writeString(o[h].hostname, b.DNSName)
                  : "email" === o[h].type
                    ? t.writeString(o[h].email, b.RFC822Name)
                    : (t.startSequence(b.DirectoryName),
                      o[h].toAsn1(t),
                      t.endSequence());
              (t.endSequence(), t.endSequence());
            } else if (f[c].oid === v.basicConstraints) {
              (t.startSequence(a.Ber.OctetString), t.startSequence());
              var p = -1 !== e.purposes.indexOf("ca"),
                m = f[c].pathLen;
              (t.writeBoolean(p),
                void 0 !== m && t.writeInt(m),
                t.endSequence(),
                t.endSequence());
            } else if (f[c].oid === v.extKeyUsage)
              (t.startSequence(a.Ber.OctetString),
                t.startSequence(),
                e.purposes.forEach(function (e) {
                  if ("ca" !== e && -1 === B.indexOf(e)) {
                    var r = e;
                    (void 0 !== S[e] && (r = S[e]), t.writeOID(r));
                  }
                }),
                t.endSequence(),
                t.endSequence());
            else if (f[c].oid === v.keyUsage) {
              if ((t.startSequence(a.Ber.OctetString), void 0 !== f[c].bits))
                t.writeBuffer(f[c].bits, a.Ber.BitString);
              else {
                var y = z(e.purposes, B);
                t.writeBuffer(y, a.Ber.BitString);
              }
              t.endSequence();
            } else t.writeBuffer(f[c].data, a.Ber.OctetString);
            t.endSequence();
          }
          (t.endSequence(), t.endSequence());
        }
        t.endSequence();
      }
      function D(e, t) {
        for (var r = 8 * (e.length - 1) - e[0], n = {}, a = 0; a < r; ++a) {
          var i = 1 + Math.floor(a / 8),
            s = 7 - (a % 8),
            o = 1 << s,
            f = 0 !== (e[i] & o),
            c = t[a];
          f && "string" === typeof c && (n[c] = !0);
        }
        return Object.keys(n);
      }
      function z(e, t) {
        var r = t.length,
          n = Math.ceil(r / 8),
          a = 8 * n - r,
          s = i.alloc(1 + n);
        s[0] = a;
        for (var o = 0; o < r; ++o) {
          var f = 1 + Math.floor(o / 8),
            c = 7 - (o % 8),
            u = 1 << c,
            h = t[o];
          if (void 0 !== h) {
            var p = -1 !== e.indexOf(h);
            p && (s[f] |= u);
          }
        }
        return s;
      }
    },
    7703: function (e, t, r) {
      e.exports = {
        read: m,
        verify: l,
        sign: S,
        signAsync: k,
        write: B,
        fromBuffer: y,
        toBuffer: E,
      };
      var n = r(2932),
        a = r(3894),
        i = r(2764),
        s = r(2933).Buffer,
        o = r(3078),
        f = r(3018),
        c = (r(3019), r(4286)),
        u = r(3551),
        h = r(3418),
        p = r(3020),
        d = r(4285);
      function l(e, t) {
        return !1;
      }
      var g = { user: 1, host: 2 };
      Object.keys(g).forEach(function (e) {
        g[g[e]] = e;
      });
      var v = /^ecdsa-sha2-([^@-]+)-cert-v01@openssh.com$/;
      function m(e, t) {
        s.isBuffer(e) && (e = e.toString("ascii"));
        var r = e.trim().split(/[ \t\n]+/g);
        if (r.length < 2 || r.length > 3)
          throw new Error("Not a valid SSH certificate line");
        var n = r[0],
          a = r[1];
        return ((a = s.from(a, "base64")), y(a, n));
      }
      function y(e, t, r) {
        var i = new a({ buffer: e }),
          s = i.readString();
        if (void 0 !== t && s !== t)
          throw new Error("SSH certificate algorithm mismatch");
        void 0 === t && (t = s);
        var l = { signatures: {} };
        ((l.signatures.openssh = {}),
          (l.signatures.openssh.nonce = i.readBuffer()));
        var m = {},
          y = (m.parts = []);
        m.type = A(t);
        var b = o.info[m.type].parts.length;
        while (y.length < b) y.push(i.readPart());
        n.ok(y.length >= 1, "key must have at least one part");
        var S = o.info[m.type];
        if ("ecdsa" === m.type) {
          var k = v.exec(t);
          (n.ok(null !== k), n.strictEqual(k[1], y[0].data.toString()));
        }
        for (var B = 0; B < S.parts.length; ++B)
          if (
            ((y[B].name = S.parts[B]),
            "curve" !== y[B].name && !1 !== S.normalize)
          ) {
            var E = y[B];
            E.data = p.mpNormalize(E.data);
          }
        ((l.subjectKey = new f(m)), (l.serial = i.readInt64()));
        var F = g[i.readInt()];
        (n.string(F, "valid cert type"),
          (l.signatures.openssh.keyId = i.readString()));
        var _ = [],
          x = i.readBuffer(),
          q = new a({ buffer: x });
        while (!q.atEnd()) _.push(q.readString());
        (0 === _.length && (_ = ["*"]),
          (l.subjects = _.map(function (e) {
            if ("user" === F) return c.forUser(e);
            if ("host" === F) return c.forHost(e);
            throw new Error("Unknown identity type " + F);
          })),
          (l.validFrom = w(i.readInt64())),
          (l.validUntil = w(i.readInt64())));
        var I,
          P = [],
          C = new a({ buffer: i.readBuffer() });
        while (!C.atEnd())
          ((I = { critical: !0 }),
            (I.name = C.readString()),
            (I.data = C.readBuffer()),
            P.push(I));
        C = new a({ buffer: i.readBuffer() });
        while (!C.atEnd())
          ((I = { critical: !1 }),
            (I.name = C.readString()),
            (I.data = C.readBuffer()),
            P.push(I));
        ((l.signatures.openssh.exts = P), i.readBuffer());
        var U = i.readBuffer();
        ((l.issuerKey = u.read(U)), (l.issuer = c.forHost("**")));
        var O = i.readBuffer();
        return (
          (l.signatures.openssh.signature = h.parse(
            O,
            l.issuerKey.type,
            "ssh",
          )),
          void 0 !== r &&
            ((r.remainder = i.remainder()), (r.consumed = i._offset)),
          new d(l)
        );
      }
      function w(e) {
        var t = 4294967296 * e.readUInt32BE(0);
        t += e.readUInt32BE(4);
        var r = new Date();
        return (r.setTime(1e3 * t), (r.sourceInt64 = e), r);
      }
      function b(e) {
        if (void 0 !== e.sourceInt64) return e.sourceInt64;
        var t = Math.round(e.getTime() / 1e3),
          r = Math.floor(t / 4294967296),
          n = Math.floor(t % 4294967296),
          a = s.alloc(8);
        return (a.writeUInt32BE(r, 0), a.writeUInt32BE(n, 4), a);
      }
      function S(e, t) {
        void 0 === e.signatures.openssh && (e.signatures.openssh = {});
        try {
          var r = E(e, !0);
        } catch (s) {
          return (delete e.signatures.openssh, !1);
        }
        var n = e.signatures.openssh,
          a = void 0;
        ("rsa" !== t.type && "dsa" !== t.type) || (a = "sha1");
        var i = t.createSign(a);
        return (i.write(r), (n.signature = i.sign()), !0);
      }
      function k(e, t, r) {
        void 0 === e.signatures.openssh && (e.signatures.openssh = {});
        try {
          var n = E(e, !0);
        } catch (i) {
          return (delete e.signatures.openssh, void r(i));
        }
        var a = e.signatures.openssh;
        t(n, function (e, t) {
          if (e) r(e);
          else {
            try {
              t.toBuffer("ssh");
            } catch (i) {
              return void r(i);
            }
            ((a.signature = t), r());
          }
        });
      }
      function B(e, t) {
        void 0 === t && (t = {});
        var r = E(e),
          n = F(e.subjectKey) + " " + r.toString("base64");
        return (t.comment && (n = n + " " + t.comment), n);
      }
      function E(e, t) {
        n.object(e.signatures.openssh, "signature for openssh format");
        var r = e.signatures.openssh;
        void 0 === r.nonce && (r.nonce = i.randomBytes(16));
        var f = new a({});
        (f.writeString(F(e.subjectKey)), f.writeBuffer(r.nonce));
        var c = e.subjectKey,
          h = o.info[c.type];
        (h.parts.forEach(function (e) {
          f.writePart(c.part[e]);
        }),
          f.writeInt64(e.serial));
        var p = e.subjects[0].type;
        (n.notStrictEqual(p, "unknown"),
          e.subjects.forEach(function (e) {
            n.strictEqual(e.type, p);
          }),
          (p = g[p]),
          f.writeInt(p),
          void 0 === r.keyId &&
            (r.keyId =
              e.subjects[0].type +
              "_" +
              (e.subjects[0].uid || e.subjects[0].hostname)),
          f.writeString(r.keyId));
        var d = new a({});
        (e.subjects.forEach(function (e) {
          p === g.host
            ? d.writeString(e.hostname)
            : p === g.user && d.writeString(e.uid);
        }),
          f.writeBuffer(d.toBuffer()),
          f.writeInt64(b(e.validFrom)),
          f.writeInt64(b(e.validUntil)));
        var l = r.exts;
        void 0 === l && (l = []);
        var v = new a({});
        return (
          l.forEach(function (e) {
            !0 === e.critical && (v.writeString(e.name), v.writeBuffer(e.data));
          }),
          f.writeBuffer(v.toBuffer()),
          (v = new a({})),
          l.forEach(function (e) {
            !0 !== e.critical && (v.writeString(e.name), v.writeBuffer(e.data));
          }),
          f.writeBuffer(v.toBuffer()),
          f.writeBuffer(s.alloc(0)),
          (d = u.write(e.issuerKey)),
          f.writeBuffer(d),
          t || f.writeBuffer(r.signature.toBuffer("ssh")),
          f.toBuffer()
        );
      }
      function A(e) {
        if ("ssh-rsa-cert-v01@openssh.com" === e) return "rsa";
        if ("ssh-dss-cert-v01@openssh.com" === e) return "dsa";
        if (e.match(v)) return "ecdsa";
        if ("ssh-ed25519-cert-v01@openssh.com" === e) return "ed25519";
        throw new Error("Unsupported cert type " + e);
      }
      function F(e) {
        if ("rsa" === e.type) return "ssh-rsa-cert-v01@openssh.com";
        if ("dsa" === e.type) return "ssh-dss-cert-v01@openssh.com";
        if ("ecdsa" === e.type)
          return "ecdsa-sha2-" + e.curve + "-cert-v01@openssh.com";
        if ("ed25519" === e.type) return "ssh-ed25519-cert-v01@openssh.com";
        throw new Error("Unsupported key type " + e.type);
      }
    },
    7704: function (e, t, r) {
      var n = r(6032);
      e.exports = { read: s, verify: n.verify, sign: n.sign, write: o };
      var a = r(2932),
        i = (r(3419), r(2933).Buffer);
      (r(3078), r(3020), r(3018), r(3019), r(3550), r(4286), r(3418), r(4285));
      function s(e, t) {
        "string" !== typeof e &&
          (a.buffer(e, "buf"), (e = e.toString("ascii")));
        var r,
          s,
          o = e.trim().split(/[\r\n]+/g),
          f = -1;
        while (!r && f < o.length)
          r = o[++f].match(/[-]+[ ]*BEGIN CERTIFICATE[ ]*[-]+/);
        a.ok(r, "invalid PEM header");
        var c = o.length;
        while (!s && c > 0) s = o[--c].match(/[-]+[ ]*END CERTIFICATE[ ]*[-]+/);
        (a.ok(s, "invalid PEM footer"), (o = o.slice(f, c + 1)));
        var u = {};
        while (1) {
          if (
            ((o = o.slice(1)), (r = o[0].match(/^([A-Za-z0-9-]+): (.+)$/)), !r)
          )
            break;
          u[r[1].toLowerCase()] = r[2];
        }
        return (
          (o = o.slice(0, -1).join("")),
          (e = i.from(o, "base64")),
          n.read(e, t)
        );
      }
      function o(e, t) {
        var r = n.write(e, t),
          a = "CERTIFICATE",
          s = r.toString("base64"),
          o = s.length + s.length / 64 + 18 + 16 + 2 * a.length + 10,
          f = i.alloc(o),
          c = 0;
        c += f.write("-----BEGIN " + a + "-----\n", c);
        for (var u = 0; u < s.length; ) {
          var h = u + 64;
          (h > s.length && (h = s.length),
            (c += f.write(s.slice(u, h), c)),
            (f[c++] = 10),
            (u = h));
        }
        return ((c += f.write("-----END " + a + "-----\n", c)), f.slice(0, c));
      }
    },
    7716: function (e, t, r) {
      (function (t) {
        var n = r(799),
          a = r(235),
          i = r(82).StringDecoder;
        function s(e, t) {
          if (!(this instanceof s)) return new s(e, t);
          (a.call(this),
            null == e && (e = "utf8"),
            (this.readable = this.writable = !0),
            (this.paused = !1),
            (this.toEncoding = null == t ? e : t),
            (this.fromEncoding = null == t ? "" : e),
            (this.decoder = new o(this.toEncoding)));
        }
        function o(e) {
          switch ((i.call(this, e), this.encoding)) {
            case "base64":
              ((this.write = f),
                (this.alignedBuffer = new t(3)),
                (this.alignedBytes = 0));
              break;
          }
        }
        function f(e) {
          var r = (this.alignedBytes + e.length) % this.alignedBuffer.length;
          if (!r && !this.alignedBytes) return e.toString(this.encoding);
          var n = new t(this.alignedBytes + e.length - r);
          return (
            this.alignedBuffer.copy(n, 0, 0, this.alignedBytes),
            e.copy(n, this.alignedBytes, 0, e.length - r),
            e.copy(this.alignedBuffer, 0, e.length - r, e.length),
            (this.alignedBytes = r),
            n.toString(this.encoding)
          );
        }
        ((e.exports = s),
          (e.exports.AlignedStringDecoder = o),
          n.inherits(s, a),
          (s.prototype.write = function (e) {
            if (!this.writable) {
              var r = new Error("stream not writable");
              return ((r.code = "EPIPE"), this.emit("error", r), !1);
            }
            this.fromEncoding &&
              ((t.isBuffer(e) || "number" === typeof e) && (e = e.toString()),
              (e = new t(e, this.fromEncoding)));
            var n = this.decoder.write(e);
            return (n.length && this.emit("data", n), !this.paused);
          }),
          (s.prototype.flush = function () {
            if (this.decoder.flush) {
              var e = this.decoder.flush();
              e.length && this.emit("data", e);
            }
          }),
          (s.prototype.end = function () {
            (this.writable || this.readable) &&
              (this.flush(),
              this.emit("end"),
              (this.writable = this.readable = !1),
              this.destroy());
          }),
          (s.prototype.destroy = function () {
            ((this.decoder = null),
              (this.writable = this.readable = !1),
              this.emit("close"));
          }),
          (s.prototype.pause = function () {
            this.paused = !0;
          }),
          (s.prototype.resume = function () {
            (this.paused && this.emit("drain"), (this.paused = !1));
          }),
          n.inherits(o, i),
          (o.prototype.flush = function () {
            if (!this.alignedBuffer || !this.alignedBytes) return "";
            var e = this.alignedBuffer.toString(
              this.encoding,
              0,
              this.alignedBytes,
            );
            return ((this.alignedBytes = 0), e);
          }));
      }).call(this, r(2).Buffer);
    },
  },
]);
