(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [46],
  {
    10700: function (t, e, r) {
      (function (e) {
        var r = {};
        t.exports = r;
        var a = {};
        function i(t, e) {
          var r = 0,
            a = e.length,
            i = e.charAt(0),
            n = [0];
          for (r = 0; r < t.length(); ++r) {
            for (var s = 0, o = t.at(r); s < n.length; ++s)
              ((o += n[s] << 8), (n[s] = o % a), (o = (o / a) | 0));
            while (o > 0) (n.push(o % a), (o = (o / a) | 0));
          }
          var u = "";
          for (r = 0; 0 === t.at(r) && r < t.length() - 1; ++r) u += i;
          for (r = n.length - 1; r >= 0; --r) u += e[n[r]];
          return u;
        }
        ((r.encode = function (t, e, r) {
          if ("string" !== typeof e)
            throw new TypeError('"alphabet" must be a string.');
          if (void 0 !== r && "number" !== typeof r)
            throw new TypeError('"maxline" must be a number.');
          var a = "";
          if (t instanceof Uint8Array) {
            var n = 0,
              s = e.length,
              o = e.charAt(0),
              u = [0];
            for (n = 0; n < t.length; ++n) {
              for (var c = 0, l = t[n]; c < u.length; ++c)
                ((l += u[c] << 8), (u[c] = l % s), (l = (l / s) | 0));
              while (l > 0) (u.push(l % s), (l = (l / s) | 0));
            }
            for (n = 0; 0 === t[n] && n < t.length - 1; ++n) a += o;
            for (n = u.length - 1; n >= 0; --n) a += e[u[n]];
          } else a = i(t, e);
          if (r) {
            var h = new RegExp(".{1," + r + "}", "g");
            a = a.match(h).join("\r\n");
          }
          return a;
        }),
          (r.decode = function (t, r) {
            if ("string" !== typeof t)
              throw new TypeError('"input" must be a string.');
            if ("string" !== typeof r)
              throw new TypeError('"alphabet" must be a string.');
            var i = a[r];
            if (!i) {
              i = a[r] = [];
              for (var n = 0; n < r.length; ++n) i[r.charCodeAt(n)] = n;
            }
            t = t.replace(/\s/g, "");
            var s = r.length,
              o = r.charAt(0),
              u = [0];
            for (n = 0; n < t.length; n++) {
              var c = i[t.charCodeAt(n)];
              if (void 0 === c) return;
              for (var l = 0, h = c; l < u.length; ++l)
                ((h += u[l] * s), (u[l] = 255 & h), (h >>= 8));
              while (h > 0) (u.push(255 & h), (h >>= 8));
            }
            for (var p = 0; t[p] === o && p < t.length - 1; ++p) u.push(0);
            return "undefined" !== typeof e
              ? e.from(u.reverse())
              : new Uint8Array(u.reverse());
          }));
      }).call(this, r(2).Buffer);
    },
    10701: function (t, e, r) {
      (function (e) {
        var a = r(2908);
        r(2921);
        var i = null;
        !a.util.isNodejs ||
          a.options.usePureJavaScript ||
          e.versions["node-webkit"] ||
          (i = r(5597));
        var n = (t.exports = a.prng = a.prng || {});
        n.create = function (t) {
          for (
            var e = {
                plugin: t,
                key: null,
                seed: null,
                time: null,
                reseeds: 0,
                generated: 0,
                keyBytes: "",
              },
              r = t.md,
              n = new Array(32),
              s = 0;
            s < 32;
            ++s
          )
            n[s] = r.create();
          function o(t) {
            if (e.pools[0].messageLength >= 32) return (c(), t());
            var r = (32 - e.pools[0].messageLength) << 5;
            e.seedFile(r, function (r, a) {
              if (r) return t(r);
              (e.collect(a), c(), t());
            });
          }
          function u() {
            if (e.pools[0].messageLength >= 32) return c();
            var t = (32 - e.pools[0].messageLength) << 5;
            (e.collect(e.seedFileSync(t)), c());
          }
          function c() {
            e.reseeds = 4294967295 === e.reseeds ? 0 : e.reseeds + 1;
            var t = e.plugin.md.create();
            t.update(e.keyBytes);
            for (var r = 1, a = 0; a < 32; ++a)
              (e.reseeds % r === 0 &&
                (t.update(e.pools[a].digest().getBytes()), e.pools[a].start()),
                (r <<= 1));
            ((e.keyBytes = t.digest().getBytes()),
              t.start(),
              t.update(e.keyBytes));
            var i = t.digest().getBytes();
            ((e.key = e.plugin.formatKey(e.keyBytes)),
              (e.seed = e.plugin.formatSeed(i)),
              (e.generated = 0));
          }
          function l(t) {
            var e = null,
              r = a.util.globalScope,
              i = r.crypto || r.msCrypto;
            i &&
              i.getRandomValues &&
              (e = function (t) {
                return i.getRandomValues(t);
              });
            var n = a.util.createBuffer();
            if (e)
              while (n.length() < t) {
                var s = Math.max(1, Math.min(t - n.length(), 65536) / 4),
                  o = new Uint32Array(Math.floor(s));
                try {
                  e(o);
                  for (var u = 0; u < o.length; ++u) n.putInt32(o[u]);
                } catch (f) {
                  if (
                    !(
                      "undefined" !== typeof QuotaExceededError &&
                      f instanceof QuotaExceededError
                    )
                  )
                    throw f;
                }
              }
            if (n.length() < t) {
              var c,
                l,
                h,
                p = Math.floor(65536 * Math.random());
              while (n.length() < t) {
                ((l = 16807 * (65535 & p)),
                  (c = 16807 * (p >> 16)),
                  (l += (32767 & c) << 16),
                  (l += c >> 15),
                  (l = (2147483647 & l) + (l >> 31)),
                  (p = 4294967295 & l));
                for (u = 0; u < 3; ++u)
                  ((h = p >>> (u << 3)),
                    (h ^= Math.floor(256 * Math.random())),
                    n.putByte(String.fromCharCode(255 & h)));
              }
            }
            return n.getBytes(t);
          }
          return (
            (e.pools = n),
            (e.pool = 0),
            (e.generate = function (t, r) {
              if (!r) return e.generateSync(t);
              var i = e.plugin.cipher,
                n = e.plugin.increment,
                s = e.plugin.formatKey,
                u = e.plugin.formatSeed,
                c = a.util.createBuffer();
              function l(h) {
                if (h) return r(h);
                if (c.length() >= t) return r(null, c.getBytes(t));
                if ((e.generated > 1048575 && (e.key = null), null === e.key))
                  return a.util.nextTick(function () {
                    o(l);
                  });
                var p = i(e.key, e.seed);
                ((e.generated += p.length),
                  c.putBytes(p),
                  (e.key = s(i(e.key, n(e.seed)))),
                  (e.seed = u(i(e.key, e.seed))),
                  a.util.setImmediate(l));
              }
              ((e.key = null), l());
            }),
            (e.generateSync = function (t) {
              var r = e.plugin.cipher,
                i = e.plugin.increment,
                n = e.plugin.formatKey,
                s = e.plugin.formatSeed;
              e.key = null;
              var o = a.util.createBuffer();
              while (o.length() < t) {
                (e.generated > 1048575 && (e.key = null),
                  null === e.key && u());
                var c = r(e.key, e.seed);
                ((e.generated += c.length),
                  o.putBytes(c),
                  (e.key = n(r(e.key, i(e.seed)))),
                  (e.seed = s(r(e.key, e.seed))));
              }
              return o.getBytes(t);
            }),
            i
              ? ((e.seedFile = function (t, e) {
                  i.randomBytes(t, function (t, r) {
                    if (t) return e(t);
                    e(null, r.toString());
                  });
                }),
                (e.seedFileSync = function (t) {
                  return i.randomBytes(t).toString();
                }))
              : ((e.seedFile = function (t, e) {
                  try {
                    e(null, l(t));
                  } catch (r) {
                    e(r);
                  }
                }),
                (e.seedFileSync = l)),
            (e.collect = function (t) {
              for (var r = t.length, a = 0; a < r; ++a)
                (e.pools[e.pool].update(t.substr(a, 1)),
                  (e.pool = 31 === e.pool ? 0 : e.pool + 1));
            }),
            (e.collectInt = function (t, r) {
              for (var a = "", i = 0; i < r; i += 8)
                a += String.fromCharCode((t >> i) & 255);
              e.collect(a);
            }),
            (e.registerWorker = function (t) {
              if (t === self)
                e.seedFile = function (t, e) {
                  function r(t) {
                    var a = t.data;
                    a.forge &&
                      a.forge.prng &&
                      (self.removeEventListener("message", r),
                      e(a.forge.prng.err, a.forge.prng.bytes));
                  }
                  (self.addEventListener("message", r),
                    self.postMessage({ forge: { prng: { needed: t } } }));
                };
              else {
                var r = function (r) {
                  var a = r.data;
                  a.forge &&
                    a.forge.prng &&
                    e.seedFile(a.forge.prng.needed, function (e, r) {
                      t.postMessage({ forge: { prng: { err: e, bytes: r } } });
                    });
                };
                t.addEventListener("message", r);
              }
            }),
            e
          );
        };
      }).call(this, r(18));
    },
    10709: function (t, e, r) {
      var a = r(2908);
      (r(3951),
        r(3952),
        r(6736),
        r(5601),
        r(6738),
        r(10713),
        r(6742),
        r(4827),
        r(2921),
        r(6741));
      var i = a.asn1,
        n = (t.exports = a.pki = a.pki || {});
      ((n.pemToDer = function (t) {
        var e = a.pem.decode(t)[0];
        if (e.procType && "ENCRYPTED" === e.procType.type)
          throw new Error("Could not convert PEM to DER; PEM is encrypted.");
        return a.util.createBuffer(e.body);
      }),
        (n.privateKeyFromPem = function (t) {
          var e = a.pem.decode(t)[0];
          if ("PRIVATE KEY" !== e.type && "RSA PRIVATE KEY" !== e.type) {
            var r = new Error(
              'Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".',
            );
            throw ((r.headerType = e.type), r);
          }
          if (e.procType && "ENCRYPTED" === e.procType.type)
            throw new Error(
              "Could not convert private key from PEM; PEM is encrypted.",
            );
          var s = i.fromDer(e.body);
          return n.privateKeyFromAsn1(s);
        }),
        (n.privateKeyToPem = function (t, e) {
          var r = {
            type: "RSA PRIVATE KEY",
            body: i.toDer(n.privateKeyToAsn1(t)).getBytes(),
          };
          return a.pem.encode(r, { maxline: e });
        }),
        (n.privateKeyInfoToPem = function (t, e) {
          var r = { type: "PRIVATE KEY", body: i.toDer(t).getBytes() };
          return a.pem.encode(r, { maxline: e });
        }));
    },
    10710: function (t, e, r) {
      var a = r(2908);
      r(2921);
      var i = [
          217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160,
          216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68,
          139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141,
          9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33,
          34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86,
          192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66,
          61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39,
          242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231,
          6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238,
          247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21,
          73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81,
          203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35,
          184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227,
          138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207,
          225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27,
          171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219,
          71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173,
        ],
        n = [1, 2, 3, 5],
        s = function (t, e) {
          return ((t << e) & 65535) | ((65535 & t) >> (16 - e));
        },
        o = function (t, e) {
          return ((65535 & t) >> e) | ((t << (16 - e)) & 65535);
        };
      ((t.exports = a.rc2 = a.rc2 || {}),
        (a.rc2.expandKey = function (t, e) {
          ("string" === typeof t && (t = a.util.createBuffer(t)),
            (e = e || 128));
          var r,
            n = t,
            s = t.length(),
            o = e,
            u = Math.ceil(o / 8),
            c = 255 >> (7 & o);
          for (r = s; r < 128; r++)
            n.putByte(i[(n.at(r - 1) + n.at(r - s)) & 255]);
          for (n.setAt(128 - u, i[n.at(128 - u) & c]), r = 127 - u; r >= 0; r--)
            n.setAt(r, i[n.at(r + 1) ^ n.at(r + u)]);
          return n;
        }));
      var u = function (t, e, r) {
        var i,
          u,
          c,
          l,
          h = !1,
          p = null,
          f = null,
          d = null,
          y = [];
        for (t = a.rc2.expandKey(t, e), c = 0; c < 64; c++)
          y.push(t.getInt16Le());
        r
          ? ((i = function (t) {
              for (c = 0; c < 4; c++)
                ((t[c] +=
                  y[l] +
                  (t[(c + 3) % 4] & t[(c + 2) % 4]) +
                  (~t[(c + 3) % 4] & t[(c + 1) % 4])),
                  (t[c] = s(t[c], n[c])),
                  l++);
            }),
            (u = function (t) {
              for (c = 0; c < 4; c++) t[c] += y[63 & t[(c + 3) % 4]];
            }))
          : ((i = function (t) {
              for (c = 3; c >= 0; c--)
                ((t[c] = o(t[c], n[c])),
                  (t[c] -=
                    y[l] +
                    (t[(c + 3) % 4] & t[(c + 2) % 4]) +
                    (~t[(c + 3) % 4] & t[(c + 1) % 4])),
                  l--);
            }),
            (u = function (t) {
              for (c = 3; c >= 0; c--) t[c] -= y[63 & t[(c + 3) % 4]];
            }));
        var g = function (t) {
            var e = [];
            for (c = 0; c < 4; c++) {
              var a = p.getInt16Le();
              (null !== d && (r ? (a ^= d.getInt16Le()) : d.putInt16Le(a)),
                e.push(65535 & a));
            }
            l = r ? 0 : 63;
            for (var i = 0; i < t.length; i++)
              for (var n = 0; n < t[i][0]; n++) t[i][1](e);
            for (c = 0; c < 4; c++)
              (null !== d &&
                (r ? d.putInt16Le(e[c]) : (e[c] ^= d.getInt16Le())),
                f.putInt16Le(e[c]));
          },
          m = null;
        return (
          (m = {
            start: function (t, e) {
              (t && "string" === typeof t && (t = a.util.createBuffer(t)),
                (h = !1),
                (p = a.util.createBuffer()),
                (f = e || new a.util.createBuffer()),
                (d = t),
                (m.output = f));
            },
            update: function (t) {
              h || p.putBuffer(t);
              while (p.length() >= 8)
                g([
                  [5, i],
                  [1, u],
                  [6, i],
                  [1, u],
                  [5, i],
                ]);
            },
            finish: function (t) {
              var e = !0;
              if (r)
                if (t) e = t(8, p, !r);
                else {
                  var a = 8 === p.length() ? 8 : 8 - p.length();
                  p.fillWithByte(a, a);
                }
              if (
                (e && ((h = !0), m.update()), !r && ((e = 0 === p.length()), e))
              )
                if (t) e = t(8, f, !r);
                else {
                  var i = f.length(),
                    n = f.at(i - 1);
                  n > i ? (e = !1) : f.truncate(n);
                }
              return e;
            },
          }),
          m
        );
      };
      ((a.rc2.startEncrypting = function (t, e, r) {
        var i = a.rc2.createEncryptionCipher(t, 128);
        return (i.start(e, r), i);
      }),
        (a.rc2.createEncryptionCipher = function (t, e) {
          return u(t, e, !0);
        }),
        (a.rc2.startDecrypting = function (t, e, r) {
          var i = a.rc2.createDecryptionCipher(t, 128);
          return (i.start(e, r), i);
        }),
        (a.rc2.createDecryptionCipher = function (t, e) {
          return u(t, e, !1);
        }));
    },
    10711: function (t, e, r) {
      var a = r(2908);
      (r(2921), r(3831), r(6740));
      var i = (t.exports = a.pkcs1 = a.pkcs1 || {});
      function n(t, e, r) {
        r || (r = a.md.sha1.create());
        for (var i = "", n = Math.ceil(e / r.digestLength), s = 0; s < n; ++s) {
          var o = String.fromCharCode(
            (s >> 24) & 255,
            (s >> 16) & 255,
            (s >> 8) & 255,
            255 & s,
          );
          (r.start(), r.update(t + o), (i += r.digest().getBytes()));
        }
        return i.substring(0, e);
      }
      ((i.encode_rsa_oaep = function (t, e, r) {
        var i, s, o, u;
        ("string" === typeof r
          ? ((i = r),
            (s = arguments[3] || void 0),
            (o = arguments[4] || void 0))
          : r &&
            ((i = r.label || void 0),
            (s = r.seed || void 0),
            (o = r.md || void 0),
            r.mgf1 && r.mgf1.md && (u = r.mgf1.md)),
          o ? o.start() : (o = a.md.sha1.create()),
          u || (u = o));
        var c = Math.ceil(t.n.bitLength() / 8),
          l = c - 2 * o.digestLength - 2;
        if (e.length > l) {
          var h = new Error("RSAES-OAEP input message length is too long.");
          throw ((h.length = e.length), (h.maxLength = l), h);
        }
        (i || (i = ""), o.update(i, "raw"));
        for (var p = o.digest(), f = "", d = l - e.length, y = 0; y < d; y++)
          f += "\0";
        var g = p.getBytes() + f + "" + e;
        if (s) {
          if (s.length !== o.digestLength) {
            h = new Error(
              "Invalid RSAES-OAEP seed. The seed length must match the digest length.",
            );
            throw (
              (h.seedLength = s.length),
              (h.digestLength = o.digestLength),
              h
            );
          }
        } else s = a.random.getBytes(o.digestLength);
        var m = n(s, c - o.digestLength - 1, u),
          v = a.util.xorBytes(g, m, g.length),
          C = n(v, o.digestLength, u),
          E = a.util.xorBytes(s, C, s.length);
        return "\0" + E + v;
      }),
        (i.decode_rsa_oaep = function (t, e, r) {
          var i, s, o;
          "string" === typeof r
            ? ((i = r), (s = arguments[3] || void 0))
            : r &&
              ((i = r.label || void 0),
              (s = r.md || void 0),
              r.mgf1 && r.mgf1.md && (o = r.mgf1.md));
          var u = Math.ceil(t.n.bitLength() / 8);
          if (e.length !== u) {
            var c = new Error("RSAES-OAEP encoded message length is invalid.");
            throw ((c.length = e.length), (c.expectedLength = u), c);
          }
          if (
            (void 0 === s ? (s = a.md.sha1.create()) : s.start(),
            o || (o = s),
            u < 2 * s.digestLength + 2)
          )
            throw new Error(
              "RSAES-OAEP key is too short for the hash function.",
            );
          (i || (i = ""), s.update(i, "raw"));
          for (
            var l = s.digest().getBytes(),
              h = e.charAt(0),
              p = e.substring(1, s.digestLength + 1),
              f = e.substring(1 + s.digestLength),
              d = n(f, s.digestLength, o),
              y = a.util.xorBytes(p, d, p.length),
              g = n(y, u - s.digestLength - 1, o),
              m = a.util.xorBytes(f, g, f.length),
              v = m.substring(0, s.digestLength),
              C = ((c = "\0" !== h), 0);
            C < s.digestLength;
            ++C
          )
            c |= l.charAt(C) !== v.charAt(C);
          for (
            var E = 1, S = s.digestLength, T = s.digestLength;
            T < m.length;
            T++
          ) {
            var I = m.charCodeAt(T),
              b = (1 & I) ^ 1,
              A = E ? 65534 : 0;
            ((c |= I & A), (E &= b), (S += E));
          }
          if (c || 1 !== m.charCodeAt(S))
            throw new Error("Invalid RSAES-OAEP padding.");
          return m.substring(S + 1);
        }));
    },
    10712: function (t, e, r) {
      var a = r(2908);
      (r(2921),
        r(6739),
        r(3831),
        (function () {
          if (a.prime) t.exports = a.prime;
          else {
            var e = (t.exports = a.prime = a.prime || {}),
              BigInteger = a.jsbn.BigInteger,
              r = [6, 4, 2, 4, 2, 4, 6, 2],
              i = new BigInteger(null);
            i.fromInt(30);
            var n = function (t, e) {
              return t | e;
            };
            e.generateProbablePrime = function (t, e, r) {
              ("function" === typeof e && ((r = e), (e = {})), (e = e || {}));
              var i = e.algorithm || "PRIMEINC";
              ("string" === typeof i && (i = { name: i }),
                (i.options = i.options || {}));
              var n = e.prng || a.random,
                o = {
                  nextBytes: function (t) {
                    for (
                      var e = n.getBytesSync(t.length), r = 0;
                      r < t.length;
                      ++r
                    )
                      t[r] = e.charCodeAt(r);
                  },
                };
              if ("PRIMEINC" === i.name) return s(t, o, i.options, r);
              throw new Error("Invalid prime generation algorithm: " + i.name);
            };
          }
          function s(t, e, r, a) {
            return "workers" in r ? c(t, e, r, a) : o(t, e, r, a);
          }
          function o(t, e, r, a) {
            var i = l(t, e),
              n = 0,
              s = h(i.bitLength());
            "millerRabinTests" in r && (s = r.millerRabinTests);
            var o = 10;
            ("maxBlockTime" in r && (o = r.maxBlockTime),
              u(i, t, e, n, s, o, a));
          }
          function u(t, e, i, n, s, o, c) {
            var h = +new Date();
            do {
              if ((t.bitLength() > e && (t = l(e, i)), t.isProbablePrime(s)))
                return c(null, t);
              t.dAddOffset(r[n++ % 8], 0);
            } while (o < 0 || +new Date() - h < o);
            a.util.setImmediate(function () {
              u(t, e, i, n, s, o, c);
            });
          }
          function c(t, e, r, i) {
            if ("undefined" === typeof Worker) return o(t, e, r, i);
            var n = l(t, e),
              s = r.workers,
              u = r.workLoad || 100,
              c = (30 * u) / 8,
              h = r.workerScript || "forge/prime.worker.js";
            if (-1 === s)
              return a.util.estimateCores(function (t, e) {
                (t && (e = 2), (s = e - 1), p());
              });
            function p() {
              s = Math.max(1, s);
              for (var r = [], a = 0; a < s; ++a) r[a] = new Worker(h);
              for (a = 0; a < s; ++a) r[a].addEventListener("message", p);
              var o = !1;
              function p(a) {
                if (!o) {
                  0;
                  var s = a.data;
                  if (s.found) {
                    for (var h = 0; h < r.length; ++h) r[h].terminate();
                    return ((o = !0), i(null, new BigInteger(s.prime, 16)));
                  }
                  n.bitLength() > t && (n = l(t, e));
                  var p = n.toString(16);
                  (a.target.postMessage({ hex: p, workLoad: u }),
                    n.dAddOffset(c, 0));
                }
              }
            }
            p();
          }
          function l(t, e) {
            var r = new BigInteger(t, e),
              a = t - 1;
            return (
              r.testBit(a) || r.bitwiseTo(BigInteger.ONE.shiftLeft(a), n, r),
              r.dAddOffset(31 - r.mod(i).byteValue(), 0),
              r
            );
          }
          function h(t) {
            return t <= 100
              ? 27
              : t <= 150
                ? 18
                : t <= 200
                  ? 15
                  : t <= 250
                    ? 12
                    : t <= 300
                      ? 9
                      : t <= 350
                        ? 8
                        : t <= 400
                          ? 7
                          : t <= 500
                            ? 6
                            : t <= 600
                              ? 5
                              : t <= 800
                                ? 4
                                : t <= 1250
                                  ? 3
                                  : 2;
          }
        })());
    },
    10713: function (t, e, r) {
      var a = r(2908);
      (r(3951),
        r(5598),
        r(3952),
        r(10714),
        r(6736),
        r(3831),
        r(4827),
        r(6740),
        r(2921),
        r(6741));
      var i = a.asn1,
        n = a.pki,
        s = (t.exports = a.pkcs12 = a.pkcs12 || {}),
        o = {
          name: "ContentInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "ContentInfo.contentType",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OID,
              constructed: !1,
              capture: "contentType",
            },
            {
              name: "ContentInfo.content",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              captureAsn1: "content",
            },
          ],
        },
        u = {
          name: "PFX",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PFX.version",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "version",
            },
            o,
            {
              name: "PFX.macData",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              optional: !0,
              captureAsn1: "mac",
              value: [
                {
                  name: "PFX.macData.mac",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "PFX.macData.mac.digestAlgorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.SEQUENCE,
                      constructed: !0,
                      value: [
                        {
                          name: "PFX.macData.mac.digestAlgorithm.algorithm",
                          tagClass: i.Class.UNIVERSAL,
                          type: i.Type.OID,
                          constructed: !1,
                          capture: "macAlgorithm",
                        },
                        {
                          name: "PFX.macData.mac.digestAlgorithm.parameters",
                          tagClass: i.Class.UNIVERSAL,
                          captureAsn1: "macAlgorithmParameters",
                        },
                      ],
                    },
                    {
                      name: "PFX.macData.mac.digest",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OCTETSTRING,
                      constructed: !1,
                      capture: "macDigest",
                    },
                  ],
                },
                {
                  name: "PFX.macData.macSalt",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "macSalt",
                },
                {
                  name: "PFX.macData.iterations",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.INTEGER,
                  constructed: !1,
                  optional: !0,
                  capture: "macIterations",
                },
              ],
            },
          ],
        },
        c = {
          name: "SafeBag",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "SafeBag.bagId",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OID,
              constructed: !1,
              capture: "bagId",
            },
            {
              name: "SafeBag.bagValue",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              captureAsn1: "bagValue",
            },
            {
              name: "SafeBag.bagAttributes",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SET,
              constructed: !0,
              optional: !0,
              capture: "bagAttributes",
            },
          ],
        },
        l = {
          name: "Attribute",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "Attribute.attrId",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OID,
              constructed: !1,
              capture: "oid",
            },
            {
              name: "Attribute.attrValues",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SET,
              constructed: !0,
              capture: "values",
            },
          ],
        },
        h = {
          name: "CertBag",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "CertBag.certId",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OID,
              constructed: !1,
              capture: "certId",
            },
            {
              name: "CertBag.certValue",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              value: [
                {
                  name: "CertBag.certValue[0]",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.OCTETSTRING,
                  constructed: !1,
                  capture: "cert",
                },
              ],
            },
          ],
        };
      function p(t, e, r, a) {
        for (var i = [], n = 0; n < t.length; n++)
          for (var s = 0; s < t[n].safeBags.length; s++) {
            var o = t[n].safeBags[s];
            (void 0 !== a && o.type !== a) ||
              (null !== e
                ? void 0 !== o.attributes[e] &&
                  o.attributes[e].indexOf(r) >= 0 &&
                  i.push(o)
                : i.push(o));
          }
        return i;
      }
      function f(t) {
        if (t.composed || t.constructed) {
          for (var e = a.util.createBuffer(), r = 0; r < t.value.length; ++r)
            e.putBytes(t.value[r].value);
          ((t.composed = t.constructed = !1), (t.value = e.getBytes()));
        }
        return t;
      }
      function d(t, e, r, a) {
        if (
          ((e = i.fromDer(e, r)),
          e.tagClass !== i.Class.UNIVERSAL ||
            e.type !== i.Type.SEQUENCE ||
            !0 !== e.constructed)
        )
          throw new Error(
            "PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo",
          );
        for (var s = 0; s < e.value.length; s++) {
          var u = e.value[s],
            c = {},
            l = [];
          if (!i.validate(u, o, c, l)) {
            var h = new Error("Cannot read ContentInfo.");
            throw ((h.errors = l), h);
          }
          var p = { encrypted: !1 },
            d = null,
            m = c.content.value[0];
          switch (i.derToOid(c.contentType)) {
            case n.oids.data:
              if (
                m.tagClass !== i.Class.UNIVERSAL ||
                m.type !== i.Type.OCTETSTRING
              )
                throw new Error(
                  "PKCS#12 SafeContents Data is not an OCTET STRING.",
                );
              d = f(m).value;
              break;
            case n.oids.encryptedData:
              ((d = y(m, a)), (p.encrypted = !0));
              break;
            default:
              h = new Error("Unsupported PKCS#12 contentType.");
              throw ((h.contentType = i.derToOid(c.contentType)), h);
          }
          ((p.safeBags = g(d, r, a)), t.safeContents.push(p));
        }
      }
      function y(t, e) {
        var r = {},
          s = [];
        if (!i.validate(t, a.pkcs7.asn1.encryptedDataValidator, r, s)) {
          var o = new Error("Cannot read EncryptedContentInfo.");
          throw ((o.errors = s), o);
        }
        var u = i.derToOid(r.contentType);
        if (u !== n.oids.data) {
          o = new Error(
            "PKCS#12 EncryptedContentInfo ContentType is not Data.",
          );
          throw ((o.oid = u), o);
        }
        u = i.derToOid(r.encAlgorithm);
        var c = n.pbe.getCipher(u, r.encParameter, e),
          l = f(r.encryptedContentAsn1),
          h = a.util.createBuffer(l.value);
        if ((c.update(h), !c.finish()))
          throw new Error("Failed to decrypt PKCS#12 SafeContents.");
        return c.output.getBytes();
      }
      function g(t, e, r) {
        if (!e && 0 === t.length) return [];
        if (
          ((t = i.fromDer(t, e)),
          t.tagClass !== i.Class.UNIVERSAL ||
            t.type !== i.Type.SEQUENCE ||
            !0 !== t.constructed)
        )
          throw new Error(
            "PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.",
          );
        for (var a = [], s = 0; s < t.value.length; s++) {
          var o = t.value[s],
            u = {},
            l = [];
          if (!i.validate(o, c, u, l)) {
            var p = new Error("Cannot read SafeBag.");
            throw ((p.errors = l), p);
          }
          var f,
            d,
            y = { type: i.derToOid(u.bagId), attributes: m(u.bagAttributes) };
          a.push(y);
          var g = u.bagValue.value[0];
          switch (y.type) {
            case n.oids.pkcs8ShroudedKeyBag:
              if (((g = n.decryptPrivateKeyInfo(g, r)), null === g))
                throw new Error(
                  "Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?",
                );
            case n.oids.keyBag:
              try {
                y.key = n.privateKeyFromAsn1(g);
              } catch (v) {
                ((y.key = null), (y.asn1 = g));
              }
              continue;
            case n.oids.certBag:
              ((f = h),
                (d = function () {
                  if (i.derToOid(u.certId) !== n.oids.x509Certificate) {
                    var t = new Error(
                      "Unsupported certificate type, only X.509 supported.",
                    );
                    throw ((t.oid = i.derToOid(u.certId)), t);
                  }
                  var r = i.fromDer(u.cert, e);
                  try {
                    y.cert = n.certificateFromAsn1(r, !0);
                  } catch (v) {
                    ((y.cert = null), (y.asn1 = r));
                  }
                }));
              break;
            default:
              p = new Error("Unsupported PKCS#12 SafeBag type.");
              throw ((p.oid = y.type), p);
          }
          if (void 0 !== f && !i.validate(g, f, u, l)) {
            p = new Error("Cannot read PKCS#12 " + f.name);
            throw ((p.errors = l), p);
          }
          d();
        }
        return a;
      }
      function m(t) {
        var e = {};
        if (void 0 !== t)
          for (var r = 0; r < t.length; ++r) {
            var a = {},
              s = [];
            if (!i.validate(t[r], l, a, s)) {
              var o = new Error("Cannot read PKCS#12 BagAttribute.");
              throw ((o.errors = s), o);
            }
            var u = i.derToOid(a.oid);
            if (void 0 !== n.oids[u]) {
              e[n.oids[u]] = [];
              for (var c = 0; c < a.values.length; ++c)
                e[n.oids[u]].push(a.values[c].value);
            }
          }
        return e;
      }
      ((s.pkcs12FromAsn1 = function (t, e, r) {
        "string" === typeof e ? ((r = e), (e = !0)) : void 0 === e && (e = !0);
        var o = {},
          c = [];
        if (!i.validate(t, u, o, c)) {
          var l = new Error(
            "Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.",
          );
          throw ((l.errors = l), l);
        }
        var h = {
          version: o.version.charCodeAt(0),
          safeContents: [],
          getBags: function (t) {
            var e,
              r = {};
            return (
              "localKeyId" in t
                ? (e = t.localKeyId)
                : "localKeyIdHex" in t &&
                  (e = a.util.hexToBytes(t.localKeyIdHex)),
              void 0 === e &&
                !("friendlyName" in t) &&
                "bagType" in t &&
                (r[t.bagType] = p(h.safeContents, null, null, t.bagType)),
              void 0 !== e &&
                (r.localKeyId = p(h.safeContents, "localKeyId", e, t.bagType)),
              "friendlyName" in t &&
                (r.friendlyName = p(
                  h.safeContents,
                  "friendlyName",
                  t.friendlyName,
                  t.bagType,
                )),
              r
            );
          },
          getBagsByFriendlyName: function (t, e) {
            return p(h.safeContents, "friendlyName", t, e);
          },
          getBagsByLocalKeyId: function (t, e) {
            return p(h.safeContents, "localKeyId", t, e);
          },
        };
        if (3 !== o.version.charCodeAt(0)) {
          l = new Error("PKCS#12 PFX of version other than 3 not supported.");
          throw ((l.version = o.version.charCodeAt(0)), l);
        }
        if (i.derToOid(o.contentType) !== n.oids.data) {
          l = new Error(
            "Only PKCS#12 PFX in password integrity mode supported.",
          );
          throw ((l.oid = i.derToOid(o.contentType)), l);
        }
        var y = o.content.value[0];
        if (y.tagClass !== i.Class.UNIVERSAL || y.type !== i.Type.OCTETSTRING)
          throw new Error(
            "PKCS#12 authSafe content data is not an OCTET STRING.",
          );
        if (((y = f(y)), o.mac)) {
          var g = null,
            m = 0,
            v = i.derToOid(o.macAlgorithm);
          switch (v) {
            case n.oids.sha1:
              ((g = a.md.sha1.create()), (m = 20));
              break;
            case n.oids.sha256:
              ((g = a.md.sha256.create()), (m = 32));
              break;
            case n.oids.sha384:
              ((g = a.md.sha384.create()), (m = 48));
              break;
            case n.oids.sha512:
              ((g = a.md.sha512.create()), (m = 64));
              break;
            case n.oids.md5:
              ((g = a.md.md5.create()), (m = 16));
              break;
          }
          if (null === g)
            throw new Error("PKCS#12 uses unsupported MAC algorithm: " + v);
          var C = new a.util.ByteBuffer(o.macSalt),
            E =
              "macIterations" in o
                ? parseInt(a.util.bytesToHex(o.macIterations), 16)
                : 1,
            S = s.generateKey(r, C, 3, E, m, g),
            T = a.hmac.create();
          (T.start(g, S), T.update(y.value));
          var I = T.getMac();
          if (I.getBytes() !== o.macDigest)
            throw new Error(
              "PKCS#12 MAC could not be verified. Invalid password?",
            );
        }
        return (d(h, y.value, e, r), h);
      }),
        (s.toPkcs12Asn1 = function (t, e, r, o) {
          ((o = o || {}),
            (o.saltSize = o.saltSize || 8),
            (o.count = o.count || 2048),
            (o.algorithm = o.algorithm || o.encAlgorithm || "aes128"),
            "useMac" in o || (o.useMac = !0),
            "localKeyId" in o || (o.localKeyId = null),
            "generateLocalKeyId" in o || (o.generateLocalKeyId = !0));
          var u,
            c = o.localKeyId;
          if (null !== c) c = a.util.hexToBytes(c);
          else if (o.generateLocalKeyId)
            if (e) {
              var l = a.util.isArray(e) ? e[0] : e;
              "string" === typeof l && (l = n.certificateFromPem(l));
              var h = a.md.sha1.create();
              (h.update(i.toDer(n.certificateToAsn1(l)).getBytes()),
                (c = h.digest().getBytes()));
            } else c = a.random.getBytes(20);
          var p = [];
          (null !== c &&
            p.push(
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(n.oids.localKeyId).getBytes(),
                ),
                i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, c),
                ]),
              ]),
            ),
            "friendlyName" in o &&
              p.push(
                i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                  i.create(
                    i.Class.UNIVERSAL,
                    i.Type.OID,
                    !1,
                    i.oidToDer(n.oids.friendlyName).getBytes(),
                  ),
                  i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.BMPSTRING,
                      !1,
                      o.friendlyName,
                    ),
                  ]),
                ]),
              ),
            p.length > 0 &&
              (u = i.create(i.Class.UNIVERSAL, i.Type.SET, !0, p)));
          var f = [],
            d = [];
          null !== e && (d = a.util.isArray(e) ? e : [e]);
          for (var y = [], g = 0; g < d.length; ++g) {
            ((e = d[g]),
              "string" === typeof e && (e = n.certificateFromPem(e)));
            var m = 0 === g ? u : void 0,
              v = n.certificateToAsn1(e),
              C = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(n.oids.certBag).getBytes(),
                ),
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.OID,
                      !1,
                      i.oidToDer(n.oids.x509Certificate).getBytes(),
                    ),
                    i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                      i.create(
                        i.Class.UNIVERSAL,
                        i.Type.OCTETSTRING,
                        !1,
                        i.toDer(v).getBytes(),
                      ),
                    ]),
                  ]),
                ]),
                m,
              ]);
            y.push(C);
          }
          if (y.length > 0) {
            var E = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, y),
              S = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(n.oids.data).getBytes(),
                ),
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                  i.create(
                    i.Class.UNIVERSAL,
                    i.Type.OCTETSTRING,
                    !1,
                    i.toDer(E).getBytes(),
                  ),
                ]),
              ]);
            f.push(S);
          }
          var T = null;
          if (null !== t) {
            var I = n.wrapRsaPrivateKey(n.privateKeyToAsn1(t));
            T =
              null === r
                ? i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.OID,
                      !1,
                      i.oidToDer(n.oids.keyBag).getBytes(),
                    ),
                    i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [I]),
                    u,
                  ])
                : i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.OID,
                      !1,
                      i.oidToDer(n.oids.pkcs8ShroudedKeyBag).getBytes(),
                    ),
                    i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                      n.encryptPrivateKeyInfo(I, r, o),
                    ]),
                    u,
                  ]);
            var b = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [T]),
              A = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(n.oids.data).getBytes(),
                ),
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                  i.create(
                    i.Class.UNIVERSAL,
                    i.Type.OCTETSTRING,
                    !1,
                    i.toDer(b).getBytes(),
                  ),
                ]),
              ]);
            f.push(A);
          }
          var B,
            N = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, f);
          if (o.useMac) {
            h = a.md.sha1.create();
            var w = new a.util.ByteBuffer(a.random.getBytes(o.saltSize)),
              R = o.count,
              L = ((t = s.generateKey(r, w, 3, R, 20)), a.hmac.create());
            (L.start(h, t), L.update(i.toDer(N).getBytes()));
            var U = L.getMac();
            B = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                  i.create(
                    i.Class.UNIVERSAL,
                    i.Type.OID,
                    !1,
                    i.oidToDer(n.oids.sha1).getBytes(),
                  ),
                  i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, ""),
                ]),
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OCTETSTRING,
                  !1,
                  U.getBytes(),
                ),
              ]),
              i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, w.getBytes()),
              i.create(
                i.Class.UNIVERSAL,
                i.Type.INTEGER,
                !1,
                i.integerToDer(R).getBytes(),
              ),
            ]);
          }
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(
              i.Class.UNIVERSAL,
              i.Type.INTEGER,
              !1,
              i.integerToDer(3).getBytes(),
            ),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.OID,
                !1,
                i.oidToDer(n.oids.data).getBytes(),
              ),
              i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OCTETSTRING,
                  !1,
                  i.toDer(N).getBytes(),
                ),
              ]),
            ]),
            B,
          ]);
        }),
        (s.generateKey = a.pbe.generatePkcs12Key));
    },
    10714: function (t, e, r) {
      var a = r(2908);
      (r(3951), r(2921));
      var i = a.asn1,
        n = (t.exports = a.pkcs7asn1 = a.pkcs7asn1 || {});
      ((a.pkcs7 = a.pkcs7 || {}), (a.pkcs7.asn1 = n));
      var s = {
        name: "ContentInfo",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "ContentInfo.ContentType",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.OID,
            constructed: !1,
            capture: "contentType",
          },
          {
            name: "ContentInfo.content",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            captureAsn1: "content",
          },
        ],
      };
      n.contentInfoValidator = s;
      var o = {
        name: "EncryptedContentInfo",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EncryptedContentInfo.contentType",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.OID,
            constructed: !1,
            capture: "contentType",
          },
          {
            name: "EncryptedContentInfo.contentEncryptionAlgorithm",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.OID,
                constructed: !1,
                capture: "encAlgorithm",
              },
              {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
                tagClass: i.Class.UNIVERSAL,
                captureAsn1: "encParameter",
              },
            ],
          },
          {
            name: "EncryptedContentInfo.encryptedContent",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            capture: "encryptedContent",
            captureAsn1: "encryptedContentAsn1",
          },
        ],
      };
      ((n.envelopedDataValidator = {
        name: "EnvelopedData",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EnvelopedData.Version",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.INTEGER,
            constructed: !1,
            capture: "version",
          },
          {
            name: "EnvelopedData.RecipientInfos",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SET,
            constructed: !0,
            captureAsn1: "recipientInfos",
          },
        ].concat(o),
      }),
        (n.encryptedDataValidator = {
          name: "EncryptedData",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "EncryptedData.Version",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "version",
            },
          ].concat(o),
        }));
      var u = {
        name: "SignerInfo",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "SignerInfo.version",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.INTEGER,
            constructed: !1,
          },
          {
            name: "SignerInfo.issuerAndSerialNumber",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "SignerInfo.issuerAndSerialNumber.issuer",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "issuer",
              },
              {
                name: "SignerInfo.issuerAndSerialNumber.serialNumber",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.INTEGER,
                constructed: !1,
                capture: "serial",
              },
            ],
          },
          {
            name: "SignerInfo.digestAlgorithm",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "SignerInfo.digestAlgorithm.algorithm",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.OID,
                constructed: !1,
                capture: "digestAlgorithm",
              },
              {
                name: "SignerInfo.digestAlgorithm.parameter",
                tagClass: i.Class.UNIVERSAL,
                constructed: !1,
                captureAsn1: "digestParameter",
                optional: !0,
              },
            ],
          },
          {
            name: "SignerInfo.authenticatedAttributes",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            capture: "authenticatedAttributes",
          },
          {
            name: "SignerInfo.digestEncryptionAlgorithm",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            capture: "signatureAlgorithm",
          },
          {
            name: "SignerInfo.encryptedDigest",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.OCTETSTRING,
            constructed: !1,
            capture: "signature",
          },
          {
            name: "SignerInfo.unauthenticatedAttributes",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 1,
            constructed: !0,
            optional: !0,
            capture: "unauthenticatedAttributes",
          },
        ],
      };
      ((n.signedDataValidator = {
        name: "SignedData",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "SignedData.Version",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.INTEGER,
            constructed: !1,
            capture: "version",
          },
          {
            name: "SignedData.DigestAlgorithms",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SET,
            constructed: !0,
            captureAsn1: "digestAlgorithms",
          },
          s,
          {
            name: "SignedData.Certificates",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            optional: !0,
            captureAsn1: "certificates",
          },
          {
            name: "SignedData.CertificateRevocationLists",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 1,
            optional: !0,
            captureAsn1: "crls",
          },
          {
            name: "SignedData.SignerInfos",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SET,
            capture: "signerInfos",
            optional: !0,
            value: [u],
          },
        ],
      }),
        (n.recipientInfoValidator = {
          name: "RecipientInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RecipientInfo.version",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "version",
            },
            {
              name: "RecipientInfo.issuerAndSerial",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "RecipientInfo.issuerAndSerial.issuer",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "issuer",
                },
                {
                  name: "RecipientInfo.issuerAndSerial.serialNumber",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.INTEGER,
                  constructed: !1,
                  capture: "serial",
                },
              ],
            },
            {
              name: "RecipientInfo.keyEncryptionAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "encAlgorithm",
                },
                {
                  name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
                  tagClass: i.Class.UNIVERSAL,
                  constructed: !1,
                  captureAsn1: "encParameter",
                },
              ],
            },
            {
              name: "RecipientInfo.encryptedKey",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OCTETSTRING,
              constructed: !1,
              capture: "encKey",
            },
          ],
        }));
    },
    10715: function (t, e, r) {
      var a = r(2908);
      (r(10716), (t.exports = a.mgf = a.mgf || {}), (a.mgf.mgf1 = a.mgf1));
    },
    10716: function (t, e, r) {
      var a = r(2908);
      (r(2921), (a.mgf = a.mgf || {}));
      var i = (t.exports = a.mgf.mgf1 = a.mgf1 = a.mgf1 || {});
      i.create = function (t) {
        var e = {
          generate: function (e, r) {
            for (
              var i = new a.util.ByteBuffer(),
                n = Math.ceil(r / t.digestLength),
                s = 0;
              s < n;
              s++
            ) {
              var o = new a.util.ByteBuffer();
              (o.putInt32(s),
                t.start(),
                t.update(e + o.getBytes()),
                i.putBuffer(t.digest()));
            }
            return (i.truncate(i.length() - r), i.getBytes());
          },
        };
        return e;
      };
    },
    2908: function (t, e) {
      t.exports = { options: { usePureJavaScript: !1 } };
    },
    2921: function (t, e, r) {
      (function (e, a, i) {
        var n = r(2908),
          s = r(10700),
          o = (t.exports = n.util = n.util || {});
        function u(t) {
          if (8 !== t && 16 !== t && 24 !== t && 32 !== t)
            throw new Error("Only 8, 16, 24, or 32 bits supported: " + t);
        }
        function c(t) {
          if (((this.data = ""), (this.read = 0), "string" === typeof t))
            this.data = t;
          else if (o.isArrayBuffer(t) || o.isArrayBufferView(t))
            if ("undefined" !== typeof i && t instanceof i)
              this.data = t.toString("binary");
            else {
              var e = new Uint8Array(t);
              try {
                this.data = String.fromCharCode.apply(null, e);
              } catch (a) {
                for (var r = 0; r < e.length; ++r) this.putByte(e[r]);
              }
            }
          else
            (t instanceof c ||
              ("object" === typeof t &&
                "string" === typeof t.data &&
                "number" === typeof t.read)) &&
              ((this.data = t.data), (this.read = t.read));
          this._constructedStringLength = 0;
        }
        ((function () {
          if ("undefined" !== typeof e && e.nextTick && !e.browser)
            return (
              (o.nextTick = e.nextTick),
              void ("function" === typeof setImmediate
                ? (o.setImmediate = setImmediate)
                : (o.setImmediate = o.nextTick))
            );
          if ("function" === typeof setImmediate)
            return (
              (o.setImmediate = function () {
                return setImmediate.apply(void 0, arguments);
              }),
              void (o.nextTick = function (t) {
                return setImmediate(t);
              })
            );
          if (
            ((o.setImmediate = function (t) {
              setTimeout(t, 0);
            }),
            "undefined" !== typeof window &&
              "function" === typeof window.postMessage)
          ) {
            var t = "forge.setImmediate",
              r = [];
            function a(e) {
              if (e.source === window && e.data === t) {
                e.stopPropagation();
                var a = r.slice();
                ((r.length = 0),
                  a.forEach(function (t) {
                    t();
                  }));
              }
            }
            ((o.setImmediate = function (e) {
              (r.push(e), 1 === r.length && window.postMessage(t, "*"));
            }),
              window.addEventListener("message", a, !0));
          }
          if ("undefined" !== typeof MutationObserver) {
            var i = Date.now(),
              n = !0,
              s = document.createElement("div");
            r = [];
            new MutationObserver(function () {
              var t = r.slice();
              ((r.length = 0),
                t.forEach(function (t) {
                  t();
                }));
            }).observe(s, { attributes: !0 });
            var u = o.setImmediate;
            o.setImmediate = function (t) {
              Date.now() - i > 15
                ? ((i = Date.now()), u(t))
                : (r.push(t), 1 === r.length && s.setAttribute("a", (n = !n)));
            };
          }
          o.nextTick = o.setImmediate;
        })(),
          (o.isNodejs =
            "undefined" !== typeof e && e.versions && e.versions.node),
          (o.globalScope = (function () {
            return o.isNodejs ? a : "undefined" === typeof self ? window : self;
          })()),
          (o.isArray =
            Array.isArray ||
            function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
          (o.isArrayBuffer = function (t) {
            return (
              "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer
            );
          }),
          (o.isArrayBufferView = function (t) {
            return t && o.isArrayBuffer(t.buffer) && void 0 !== t.byteLength;
          }),
          (o.ByteBuffer = c),
          (o.ByteStringBuffer = c));
        var l = 4096;
        function h(t, e) {
          ((e = e || {}),
            (this.read = e.readOffset || 0),
            (this.growSize = e.growSize || 1024));
          var r = o.isArrayBuffer(t),
            a = o.isArrayBufferView(t);
          if (r || a)
            return (
              (this.data = r
                ? new DataView(t)
                : new DataView(t.buffer, t.byteOffset, t.byteLength)),
              void (this.write =
                "writeOffset" in e ? e.writeOffset : this.data.byteLength)
            );
          ((this.data = new DataView(new ArrayBuffer(0))),
            (this.write = 0),
            null !== t && void 0 !== t && this.putBytes(t),
            "writeOffset" in e && (this.write = e.writeOffset));
        }
        ((o.ByteStringBuffer.prototype._optimizeConstructedString = function (
          t,
        ) {
          ((this._constructedStringLength += t),
            this._constructedStringLength > l &&
              (this.data.substr(0, 1), (this._constructedStringLength = 0)));
        }),
          (o.ByteStringBuffer.prototype.length = function () {
            return this.data.length - this.read;
          }),
          (o.ByteStringBuffer.prototype.isEmpty = function () {
            return this.length() <= 0;
          }),
          (o.ByteStringBuffer.prototype.putByte = function (t) {
            return this.putBytes(String.fromCharCode(t));
          }),
          (o.ByteStringBuffer.prototype.fillWithByte = function (t, e) {
            t = String.fromCharCode(t);
            var r = this.data;
            while (e > 0) (1 & e && (r += t), (e >>>= 1), e > 0 && (t += t));
            return ((this.data = r), this._optimizeConstructedString(e), this);
          }),
          (o.ByteStringBuffer.prototype.putBytes = function (t) {
            return (
              (this.data += t),
              this._optimizeConstructedString(t.length),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.putString = function (t) {
            return this.putBytes(o.encodeUtf8(t));
          }),
          (o.ByteStringBuffer.prototype.putInt16 = function (t) {
            return this.putBytes(
              String.fromCharCode((t >> 8) & 255) +
                String.fromCharCode(255 & t),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt24 = function (t) {
            return this.putBytes(
              String.fromCharCode((t >> 16) & 255) +
                String.fromCharCode((t >> 8) & 255) +
                String.fromCharCode(255 & t),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt32 = function (t) {
            return this.putBytes(
              String.fromCharCode((t >> 24) & 255) +
                String.fromCharCode((t >> 16) & 255) +
                String.fromCharCode((t >> 8) & 255) +
                String.fromCharCode(255 & t),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt16Le = function (t) {
            return this.putBytes(
              String.fromCharCode(255 & t) +
                String.fromCharCode((t >> 8) & 255),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt24Le = function (t) {
            return this.putBytes(
              String.fromCharCode(255 & t) +
                String.fromCharCode((t >> 8) & 255) +
                String.fromCharCode((t >> 16) & 255),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt32Le = function (t) {
            return this.putBytes(
              String.fromCharCode(255 & t) +
                String.fromCharCode((t >> 8) & 255) +
                String.fromCharCode((t >> 16) & 255) +
                String.fromCharCode((t >> 24) & 255),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt = function (t, e) {
            u(e);
            var r = "";
            do {
              ((e -= 8), (r += String.fromCharCode((t >> e) & 255)));
            } while (e > 0);
            return this.putBytes(r);
          }),
          (o.ByteStringBuffer.prototype.putSignedInt = function (t, e) {
            return (t < 0 && (t += 2 << (e - 1)), this.putInt(t, e));
          }),
          (o.ByteStringBuffer.prototype.putBuffer = function (t) {
            return this.putBytes(t.getBytes());
          }),
          (o.ByteStringBuffer.prototype.getByte = function () {
            return this.data.charCodeAt(this.read++);
          }),
          (o.ByteStringBuffer.prototype.getInt16 = function () {
            var t =
              (this.data.charCodeAt(this.read) << 8) ^
              this.data.charCodeAt(this.read + 1);
            return ((this.read += 2), t);
          }),
          (o.ByteStringBuffer.prototype.getInt24 = function () {
            var t =
              (this.data.charCodeAt(this.read) << 16) ^
              (this.data.charCodeAt(this.read + 1) << 8) ^
              this.data.charCodeAt(this.read + 2);
            return ((this.read += 3), t);
          }),
          (o.ByteStringBuffer.prototype.getInt32 = function () {
            var t =
              (this.data.charCodeAt(this.read) << 24) ^
              (this.data.charCodeAt(this.read + 1) << 16) ^
              (this.data.charCodeAt(this.read + 2) << 8) ^
              this.data.charCodeAt(this.read + 3);
            return ((this.read += 4), t);
          }),
          (o.ByteStringBuffer.prototype.getInt16Le = function () {
            var t =
              this.data.charCodeAt(this.read) ^
              (this.data.charCodeAt(this.read + 1) << 8);
            return ((this.read += 2), t);
          }),
          (o.ByteStringBuffer.prototype.getInt24Le = function () {
            var t =
              this.data.charCodeAt(this.read) ^
              (this.data.charCodeAt(this.read + 1) << 8) ^
              (this.data.charCodeAt(this.read + 2) << 16);
            return ((this.read += 3), t);
          }),
          (o.ByteStringBuffer.prototype.getInt32Le = function () {
            var t =
              this.data.charCodeAt(this.read) ^
              (this.data.charCodeAt(this.read + 1) << 8) ^
              (this.data.charCodeAt(this.read + 2) << 16) ^
              (this.data.charCodeAt(this.read + 3) << 24);
            return ((this.read += 4), t);
          }),
          (o.ByteStringBuffer.prototype.getInt = function (t) {
            u(t);
            var e = 0;
            do {
              ((e = (e << 8) + this.data.charCodeAt(this.read++)), (t -= 8));
            } while (t > 0);
            return e;
          }),
          (o.ByteStringBuffer.prototype.getSignedInt = function (t) {
            var e = this.getInt(t),
              r = 2 << (t - 2);
            return (e >= r && (e -= r << 1), e);
          }),
          (o.ByteStringBuffer.prototype.getBytes = function (t) {
            var e;
            return (
              t
                ? ((t = Math.min(this.length(), t)),
                  (e = this.data.slice(this.read, this.read + t)),
                  (this.read += t))
                : 0 === t
                  ? (e = "")
                  : ((e =
                      0 === this.read ? this.data : this.data.slice(this.read)),
                    this.clear()),
              e
            );
          }),
          (o.ByteStringBuffer.prototype.bytes = function (t) {
            return "undefined" === typeof t
              ? this.data.slice(this.read)
              : this.data.slice(this.read, this.read + t);
          }),
          (o.ByteStringBuffer.prototype.at = function (t) {
            return this.data.charCodeAt(this.read + t);
          }),
          (o.ByteStringBuffer.prototype.setAt = function (t, e) {
            return (
              (this.data =
                this.data.substr(0, this.read + t) +
                String.fromCharCode(e) +
                this.data.substr(this.read + t + 1)),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.last = function () {
            return this.data.charCodeAt(this.data.length - 1);
          }),
          (o.ByteStringBuffer.prototype.copy = function () {
            var t = o.createBuffer(this.data);
            return ((t.read = this.read), t);
          }),
          (o.ByteStringBuffer.prototype.compact = function () {
            return (
              this.read > 0 &&
                ((this.data = this.data.slice(this.read)), (this.read = 0)),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.clear = function () {
            return ((this.data = ""), (this.read = 0), this);
          }),
          (o.ByteStringBuffer.prototype.truncate = function (t) {
            var e = Math.max(0, this.length() - t);
            return (
              (this.data = this.data.substr(this.read, e)),
              (this.read = 0),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.toHex = function () {
            for (var t = "", e = this.read; e < this.data.length; ++e) {
              var r = this.data.charCodeAt(e);
              (r < 16 && (t += "0"), (t += r.toString(16)));
            }
            return t;
          }),
          (o.ByteStringBuffer.prototype.toString = function () {
            return o.decodeUtf8(this.bytes());
          }),
          (o.DataBuffer = h),
          (o.DataBuffer.prototype.length = function () {
            return this.write - this.read;
          }),
          (o.DataBuffer.prototype.isEmpty = function () {
            return this.length() <= 0;
          }),
          (o.DataBuffer.prototype.accommodate = function (t, e) {
            if (this.length() >= t) return this;
            e = Math.max(e || this.growSize, t);
            var r = new Uint8Array(
                this.data.buffer,
                this.data.byteOffset,
                this.data.byteLength,
              ),
              a = new Uint8Array(this.length() + e);
            return (a.set(r), (this.data = new DataView(a.buffer)), this);
          }),
          (o.DataBuffer.prototype.putByte = function (t) {
            return (
              this.accommodate(1),
              this.data.setUint8(this.write++, t),
              this
            );
          }),
          (o.DataBuffer.prototype.fillWithByte = function (t, e) {
            this.accommodate(e);
            for (var r = 0; r < e; ++r) this.data.setUint8(t);
            return this;
          }),
          (o.DataBuffer.prototype.putBytes = function (t, e) {
            if (o.isArrayBufferView(t)) {
              var r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
                a = r.byteLength - r.byteOffset;
              this.accommodate(a);
              var i = new Uint8Array(this.data.buffer, this.write);
              return (i.set(r), (this.write += a), this);
            }
            if (o.isArrayBuffer(t)) {
              r = new Uint8Array(t);
              this.accommodate(r.byteLength);
              i = new Uint8Array(this.data.buffer);
              return (i.set(r, this.write), (this.write += r.byteLength), this);
            }
            if (
              t instanceof o.DataBuffer ||
              ("object" === typeof t &&
                "number" === typeof t.read &&
                "number" === typeof t.write &&
                o.isArrayBufferView(t.data))
            ) {
              r = new Uint8Array(t.data.byteLength, t.read, t.length());
              this.accommodate(r.byteLength);
              i = new Uint8Array(t.data.byteLength, this.write);
              return (i.set(r), (this.write += r.byteLength), this);
            }
            if (
              (t instanceof o.ByteStringBuffer &&
                ((t = t.data), (e = "binary")),
              (e = e || "binary"),
              "string" === typeof t)
            ) {
              var n;
              if ("hex" === e)
                return (
                  this.accommodate(Math.ceil(t.length / 2)),
                  (n = new Uint8Array(this.data.buffer, this.write)),
                  (this.write += o.binary.hex.decode(t, n, this.write)),
                  this
                );
              if ("base64" === e)
                return (
                  this.accommodate(3 * Math.ceil(t.length / 4)),
                  (n = new Uint8Array(this.data.buffer, this.write)),
                  (this.write += o.binary.base64.decode(t, n, this.write)),
                  this
                );
              if (
                ("utf8" === e && ((t = o.encodeUtf8(t)), (e = "binary")),
                "binary" === e || "raw" === e)
              )
                return (
                  this.accommodate(t.length),
                  (n = new Uint8Array(this.data.buffer, this.write)),
                  (this.write += o.binary.raw.decode(n)),
                  this
                );
              if ("utf16" === e)
                return (
                  this.accommodate(2 * t.length),
                  (n = new Uint16Array(this.data.buffer, this.write)),
                  (this.write += o.text.utf16.encode(n)),
                  this
                );
              throw new Error("Invalid encoding: " + e);
            }
            throw Error("Invalid parameter: " + t);
          }),
          (o.DataBuffer.prototype.putBuffer = function (t) {
            return (this.putBytes(t), t.clear(), this);
          }),
          (o.DataBuffer.prototype.putString = function (t) {
            return this.putBytes(t, "utf16");
          }),
          (o.DataBuffer.prototype.putInt16 = function (t) {
            return (
              this.accommodate(2),
              this.data.setInt16(this.write, t),
              (this.write += 2),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt24 = function (t) {
            return (
              this.accommodate(3),
              this.data.setInt16(this.write, (t >> 8) & 65535),
              this.data.setInt8(this.write, (t >> 16) & 255),
              (this.write += 3),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt32 = function (t) {
            return (
              this.accommodate(4),
              this.data.setInt32(this.write, t),
              (this.write += 4),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt16Le = function (t) {
            return (
              this.accommodate(2),
              this.data.setInt16(this.write, t, !0),
              (this.write += 2),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt24Le = function (t) {
            return (
              this.accommodate(3),
              this.data.setInt8(this.write, (t >> 16) & 255),
              this.data.setInt16(this.write, (t >> 8) & 65535, !0),
              (this.write += 3),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt32Le = function (t) {
            return (
              this.accommodate(4),
              this.data.setInt32(this.write, t, !0),
              (this.write += 4),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt = function (t, e) {
            (u(e), this.accommodate(e / 8));
            do {
              ((e -= 8), this.data.setInt8(this.write++, (t >> e) & 255));
            } while (e > 0);
            return this;
          }),
          (o.DataBuffer.prototype.putSignedInt = function (t, e) {
            return (
              u(e),
              this.accommodate(e / 8),
              t < 0 && (t += 2 << (e - 1)),
              this.putInt(t, e)
            );
          }),
          (o.DataBuffer.prototype.getByte = function () {
            return this.data.getInt8(this.read++);
          }),
          (o.DataBuffer.prototype.getInt16 = function () {
            var t = this.data.getInt16(this.read);
            return ((this.read += 2), t);
          }),
          (o.DataBuffer.prototype.getInt24 = function () {
            var t =
              (this.data.getInt16(this.read) << 8) ^
              this.data.getInt8(this.read + 2);
            return ((this.read += 3), t);
          }),
          (o.DataBuffer.prototype.getInt32 = function () {
            var t = this.data.getInt32(this.read);
            return ((this.read += 4), t);
          }),
          (o.DataBuffer.prototype.getInt16Le = function () {
            var t = this.data.getInt16(this.read, !0);
            return ((this.read += 2), t);
          }),
          (o.DataBuffer.prototype.getInt24Le = function () {
            var t =
              this.data.getInt8(this.read) ^
              (this.data.getInt16(this.read + 1, !0) << 8);
            return ((this.read += 3), t);
          }),
          (o.DataBuffer.prototype.getInt32Le = function () {
            var t = this.data.getInt32(this.read, !0);
            return ((this.read += 4), t);
          }),
          (o.DataBuffer.prototype.getInt = function (t) {
            u(t);
            var e = 0;
            do {
              ((e = (e << 8) + this.data.getInt8(this.read++)), (t -= 8));
            } while (t > 0);
            return e;
          }),
          (o.DataBuffer.prototype.getSignedInt = function (t) {
            var e = this.getInt(t),
              r = 2 << (t - 2);
            return (e >= r && (e -= r << 1), e);
          }),
          (o.DataBuffer.prototype.getBytes = function (t) {
            var e;
            return (
              t
                ? ((t = Math.min(this.length(), t)),
                  (e = this.data.slice(this.read, this.read + t)),
                  (this.read += t))
                : 0 === t
                  ? (e = "")
                  : ((e =
                      0 === this.read ? this.data : this.data.slice(this.read)),
                    this.clear()),
              e
            );
          }),
          (o.DataBuffer.prototype.bytes = function (t) {
            return "undefined" === typeof t
              ? this.data.slice(this.read)
              : this.data.slice(this.read, this.read + t);
          }),
          (o.DataBuffer.prototype.at = function (t) {
            return this.data.getUint8(this.read + t);
          }),
          (o.DataBuffer.prototype.setAt = function (t, e) {
            return (this.data.setUint8(t, e), this);
          }),
          (o.DataBuffer.prototype.last = function () {
            return this.data.getUint8(this.write - 1);
          }),
          (o.DataBuffer.prototype.copy = function () {
            return new o.DataBuffer(this);
          }),
          (o.DataBuffer.prototype.compact = function () {
            if (this.read > 0) {
              var t = new Uint8Array(this.data.buffer, this.read),
                e = new Uint8Array(t.byteLength);
              (e.set(t),
                (this.data = new DataView(e)),
                (this.write -= this.read),
                (this.read = 0));
            }
            return this;
          }),
          (o.DataBuffer.prototype.clear = function () {
            return (
              (this.data = new DataView(new ArrayBuffer(0))),
              (this.read = this.write = 0),
              this
            );
          }),
          (o.DataBuffer.prototype.truncate = function (t) {
            return (
              (this.write = Math.max(0, this.length() - t)),
              (this.read = Math.min(this.read, this.write)),
              this
            );
          }),
          (o.DataBuffer.prototype.toHex = function () {
            for (var t = "", e = this.read; e < this.data.byteLength; ++e) {
              var r = this.data.getUint8(e);
              (r < 16 && (t += "0"), (t += r.toString(16)));
            }
            return t;
          }),
          (o.DataBuffer.prototype.toString = function (t) {
            var e = new Uint8Array(this.data, this.read, this.length());
            if (((t = t || "utf8"), "binary" === t || "raw" === t))
              return o.binary.raw.encode(e);
            if ("hex" === t) return o.binary.hex.encode(e);
            if ("base64" === t) return o.binary.base64.encode(e);
            if ("utf8" === t) return o.text.utf8.decode(e);
            if ("utf16" === t) return o.text.utf16.decode(e);
            throw new Error("Invalid encoding: " + t);
          }),
          (o.createBuffer = function (t, e) {
            return (
              (e = e || "raw"),
              void 0 !== t && "utf8" === e && (t = o.encodeUtf8(t)),
              new o.ByteBuffer(t)
            );
          }),
          (o.fillString = function (t, e) {
            var r = "";
            while (e > 0) (1 & e && (r += t), (e >>>= 1), e > 0 && (t += t));
            return r;
          }),
          (o.xorBytes = function (t, e, r) {
            for (var a = "", i = "", n = "", s = 0, o = 0; r > 0; --r, ++s)
              ((i = t.charCodeAt(s) ^ e.charCodeAt(s)),
                o >= 10 && ((a += n), (n = ""), (o = 0)),
                (n += String.fromCharCode(i)),
                ++o);
            return ((a += n), a);
          }),
          (o.hexToBytes = function (t) {
            var e = "",
              r = 0;
            for (
              !0 & t.length &&
              ((r = 1), (e += String.fromCharCode(parseInt(t[0], 16))));
              r < t.length;
              r += 2
            )
              e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
            return e;
          }),
          (o.bytesToHex = function (t) {
            return o.createBuffer(t).toHex();
          }),
          (o.int32ToBytes = function (t) {
            return (
              String.fromCharCode((t >> 24) & 255) +
              String.fromCharCode((t >> 16) & 255) +
              String.fromCharCode((t >> 8) & 255) +
              String.fromCharCode(255 & t)
            );
          }));
        var p =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          f = [
            62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1,
            -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
            -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
          ],
          d = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
        ((o.encode64 = function (t, e) {
          var r,
            a,
            i,
            n = "",
            s = "",
            o = 0;
          while (o < t.length)
            ((r = t.charCodeAt(o++)),
              (a = t.charCodeAt(o++)),
              (i = t.charCodeAt(o++)),
              (n += p.charAt(r >> 2)),
              (n += p.charAt(((3 & r) << 4) | (a >> 4))),
              isNaN(a)
                ? (n += "==")
                : ((n += p.charAt(((15 & a) << 2) | (i >> 6))),
                  (n += isNaN(i) ? "=" : p.charAt(63 & i))),
              e &&
                n.length > e &&
                ((s += n.substr(0, e) + "\r\n"), (n = n.substr(e))));
          return ((s += n), s);
        }),
          (o.decode64 = function (t) {
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var e,
              r,
              a,
              i,
              n = "",
              s = 0;
            while (s < t.length)
              ((e = f[t.charCodeAt(s++) - 43]),
                (r = f[t.charCodeAt(s++) - 43]),
                (a = f[t.charCodeAt(s++) - 43]),
                (i = f[t.charCodeAt(s++) - 43]),
                (n += String.fromCharCode((e << 2) | (r >> 4))),
                64 !== a &&
                  ((n += String.fromCharCode(((15 & r) << 4) | (a >> 2))),
                  64 !== i && (n += String.fromCharCode(((3 & a) << 6) | i))));
            return n;
          }),
          (o.encodeUtf8 = function (t) {
            return unescape(encodeURIComponent(t));
          }),
          (o.decodeUtf8 = function (t) {
            return decodeURIComponent(escape(t));
          }),
          (o.binary = {
            raw: {},
            hex: {},
            base64: {},
            base58: {},
            baseN: { encode: s.encode, decode: s.decode },
          }),
          (o.binary.raw.encode = function (t) {
            return String.fromCharCode.apply(null, t);
          }),
          (o.binary.raw.decode = function (t, e, r) {
            var a = e;
            (a || (a = new Uint8Array(t.length)), (r = r || 0));
            for (var i = r, n = 0; n < t.length; ++n) a[i++] = t.charCodeAt(n);
            return e ? i - r : a;
          }),
          (o.binary.hex.encode = o.bytesToHex),
          (o.binary.hex.decode = function (t, e, r) {
            var a = e;
            (a || (a = new Uint8Array(Math.ceil(t.length / 2))), (r = r || 0));
            var i = 0,
              n = r;
            for (
              1 & t.length && ((i = 1), (a[n++] = parseInt(t[0], 16)));
              i < t.length;
              i += 2
            )
              a[n++] = parseInt(t.substr(i, 2), 16);
            return e ? n - r : a;
          }),
          (o.binary.base64.encode = function (t, e) {
            var r,
              a,
              i,
              n = "",
              s = "",
              o = 0;
            while (o < t.byteLength)
              ((r = t[o++]),
                (a = t[o++]),
                (i = t[o++]),
                (n += p.charAt(r >> 2)),
                (n += p.charAt(((3 & r) << 4) | (a >> 4))),
                isNaN(a)
                  ? (n += "==")
                  : ((n += p.charAt(((15 & a) << 2) | (i >> 6))),
                    (n += isNaN(i) ? "=" : p.charAt(63 & i))),
                e &&
                  n.length > e &&
                  ((s += n.substr(0, e) + "\r\n"), (n = n.substr(e))));
            return ((s += n), s);
          }),
          (o.binary.base64.decode = function (t, e, r) {
            var a,
              i,
              n,
              s,
              o = e;
            (o || (o = new Uint8Array(3 * Math.ceil(t.length / 4))),
              (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")),
              (r = r || 0));
            var u = 0,
              c = r;
            while (u < t.length)
              ((a = f[t.charCodeAt(u++) - 43]),
                (i = f[t.charCodeAt(u++) - 43]),
                (n = f[t.charCodeAt(u++) - 43]),
                (s = f[t.charCodeAt(u++) - 43]),
                (o[c++] = (a << 2) | (i >> 4)),
                64 !== n &&
                  ((o[c++] = ((15 & i) << 4) | (n >> 2)),
                  64 !== s && (o[c++] = ((3 & n) << 6) | s)));
            return e ? c - r : o.subarray(0, c);
          }),
          (o.binary.base58.encode = function (t, e) {
            return o.binary.baseN.encode(t, d, e);
          }),
          (o.binary.base58.decode = function (t, e) {
            return o.binary.baseN.decode(t, d, e);
          }),
          (o.text = { utf8: {}, utf16: {} }),
          (o.text.utf8.encode = function (t, e, r) {
            t = o.encodeUtf8(t);
            var a = e;
            (a || (a = new Uint8Array(t.length)), (r = r || 0));
            for (var i = r, n = 0; n < t.length; ++n) a[i++] = t.charCodeAt(n);
            return e ? i - r : a;
          }),
          (o.text.utf8.decode = function (t) {
            return o.decodeUtf8(String.fromCharCode.apply(null, t));
          }),
          (o.text.utf16.encode = function (t, e, r) {
            var a = e;
            a || (a = new Uint8Array(2 * t.length));
            var i = new Uint16Array(a.buffer);
            r = r || 0;
            for (var n = r, s = r, o = 0; o < t.length; ++o)
              ((i[s++] = t.charCodeAt(o)), (n += 2));
            return e ? n - r : a;
          }),
          (o.text.utf16.decode = function (t) {
            return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
          }),
          (o.deflate = function (t, e, r) {
            if (((e = o.decode64(t.deflate(o.encode64(e)).rval)), r)) {
              var a = 2,
                i = e.charCodeAt(1);
              (32 & i && (a = 6), (e = e.substring(a, e.length - 4)));
            }
            return e;
          }),
          (o.inflate = function (t, e, r) {
            var a = t.inflate(o.encode64(e)).rval;
            return null === a ? null : o.decode64(a);
          }));
        var y = function (t, e, r) {
            if (!t) throw new Error("WebStorage not available.");
            var a;
            if (
              (null === r
                ? (a = t.removeItem(e))
                : ((r = o.encode64(JSON.stringify(r))), (a = t.setItem(e, r))),
              "undefined" !== typeof a && !0 !== a.rval)
            ) {
              var i = new Error(a.error.message);
              throw ((i.id = a.error.id), (i.name = a.error.name), i);
            }
          },
          g = function (t, e) {
            if (!t) throw new Error("WebStorage not available.");
            var r = t.getItem(e);
            if (t.init)
              if (null === r.rval) {
                if (r.error) {
                  var a = new Error(r.error.message);
                  throw ((a.id = r.error.id), (a.name = r.error.name), a);
                }
                r = null;
              } else r = r.rval;
            return (null !== r && (r = JSON.parse(o.decode64(r))), r);
          },
          m = function (t, e, r, a) {
            var i = g(t, e);
            (null === i && (i = {}), (i[r] = a), y(t, e, i));
          },
          v = function (t, e, r) {
            var a = g(t, e);
            return (null !== a && (a = r in a ? a[r] : null), a);
          },
          C = function (t, e, r) {
            var a = g(t, e);
            if (null !== a && r in a) {
              delete a[r];
              var i = !0;
              for (var n in a) {
                i = !1;
                break;
              }
              (i && (a = null), y(t, e, a));
            }
          },
          E = function (t, e) {
            y(t, e, null);
          },
          S = function (t, e, r) {
            var a,
              i = null;
            "undefined" === typeof r && (r = ["web", "flash"]);
            var n = !1,
              s = null;
            for (var o in r) {
              a = r[o];
              try {
                if ("flash" === a || "both" === a) {
                  if (null === e[0])
                    throw new Error("Flash local storage not available.");
                  ((i = t.apply(this, e)), (n = "flash" === a));
                }
                ("web" !== a && "both" !== a) ||
                  ((e[0] = localStorage), (i = t.apply(this, e)), (n = !0));
              } catch (u) {
                s = u;
              }
              if (n) break;
            }
            if (!n) throw s;
            return i;
          };
        ((o.setItem = function (t, e, r, a, i) {
          S(m, arguments, i);
        }),
          (o.getItem = function (t, e, r, a) {
            return S(v, arguments, a);
          }),
          (o.removeItem = function (t, e, r, a) {
            S(C, arguments, a);
          }),
          (o.clearItems = function (t, e, r) {
            S(E, arguments, r);
          }),
          (o.parseUrl = function (t) {
            var e = /^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;
            e.lastIndex = 0;
            var r = e.exec(t),
              a =
                null === r
                  ? null
                  : {
                      full: t,
                      scheme: r[1],
                      host: r[2],
                      port: r[3],
                      path: r[4],
                    };
            return (
              a &&
                ((a.fullHost = a.host),
                a.port
                  ? ((80 !== a.port && "http" === a.scheme) ||
                      (443 !== a.port && "https" === a.scheme)) &&
                    (a.fullHost += ":" + a.port)
                  : "http" === a.scheme
                    ? (a.port = 80)
                    : "https" === a.scheme && (a.port = 443),
                (a.full = a.scheme + "://" + a.fullHost)),
              a
            );
          }));
        var T = null;
        ((o.getQueryVariables = function (t) {
          var e,
            r = function (t) {
              for (var e = {}, r = t.split("&"), a = 0; a < r.length; a++) {
                var i,
                  n,
                  s = r[a].indexOf("=");
                (s > 0
                  ? ((i = r[a].substring(0, s)), (n = r[a].substring(s + 1)))
                  : ((i = r[a]), (n = null)),
                  i in e || (e[i] = []),
                  i in Object.prototype ||
                    null === n ||
                    e[i].push(unescape(n)));
              }
              return e;
            };
          return (
            "undefined" === typeof t
              ? (null === T &&
                  (T =
                    "undefined" !== typeof window &&
                    window.location &&
                    window.location.search
                      ? r(window.location.search.substring(1))
                      : {}),
                (e = T))
              : (e = r(t)),
            e
          );
        }),
          (o.parseFragment = function (t) {
            var e = t,
              r = "",
              a = t.indexOf("?");
            a > 0 && ((e = t.substring(0, a)), (r = t.substring(a + 1)));
            var i = e.split("/");
            i.length > 0 && "" === i[0] && i.shift();
            var n = "" === r ? {} : o.getQueryVariables(r);
            return { pathString: e, queryString: r, path: i, query: n };
          }),
          (o.makeRequest = function (t) {
            var e = o.parseFragment(t),
              r = {
                path: e.pathString,
                query: e.queryString,
                getPath: function (t) {
                  return "undefined" === typeof t ? e.path : e.path[t];
                },
                getQuery: function (t, r) {
                  var a;
                  return (
                    "undefined" === typeof t
                      ? (a = e.query)
                      : ((a = e.query[t]),
                        a && "undefined" !== typeof r && (a = a[r])),
                    a
                  );
                },
                getQueryLast: function (t, e) {
                  var a,
                    i = r.getQuery(t);
                  return ((a = i ? i[i.length - 1] : e), a);
                },
              };
            return r;
          }),
          (o.makeLink = function (t, e, r) {
            t = jQuery.isArray(t) ? t.join("/") : t;
            var a = jQuery.param(e || {});
            return (
              (r = r || ""),
              t + (a.length > 0 ? "?" + a : "") + (r.length > 0 ? "#" + r : "")
            );
          }),
          (o.setPath = function (t, e, r) {
            if ("object" === typeof t && null !== t) {
              var a = 0,
                i = e.length;
              while (a < i) {
                var n = e[a++];
                if (a == i) t[n] = r;
                else {
                  var s = n in t;
                  ((!s ||
                    (s && "object" !== typeof t[n]) ||
                    (s && null === t[n])) &&
                    (t[n] = {}),
                    (t = t[n]));
                }
              }
            }
          }),
          (o.getPath = function (t, e, r) {
            var a = 0,
              i = e.length,
              n = !0;
            while (n && a < i && "object" === typeof t && null !== t) {
              var s = e[a++];
              ((n = s in t), n && (t = t[s]));
            }
            return n ? t : r;
          }),
          (o.deletePath = function (t, e) {
            if ("object" === typeof t && null !== t) {
              var r = 0,
                a = e.length;
              while (r < a) {
                var i = e[r++];
                if (r == a) delete t[i];
                else {
                  if (!(i in t) || "object" !== typeof t[i] || null === t[i])
                    break;
                  t = t[i];
                }
              }
            }
          }),
          (o.isEmpty = function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
          }),
          (o.format = function (t) {
            var e,
              r,
              a = /%./g,
              i = 0,
              n = [],
              s = 0;
            while ((e = a.exec(t))) {
              ((r = t.substring(s, a.lastIndex - 2)),
                r.length > 0 && n.push(r),
                (s = a.lastIndex));
              var o = e[0][1];
              switch (o) {
                case "s":
                case "o":
                  i < arguments.length
                    ? n.push(arguments[1 + i++])
                    : n.push("<?>");
                  break;
                case "%":
                  n.push("%");
                  break;
                default:
                  n.push("<%" + o + "?>");
              }
            }
            return (n.push(t.substring(s)), n.join(""));
          }),
          (o.formatNumber = function (t, e, r, a) {
            var i = t,
              n = isNaN((e = Math.abs(e))) ? 2 : e,
              s = void 0 === r ? "," : r,
              o = void 0 === a ? "." : a,
              u = i < 0 ? "-" : "",
              c = parseInt((i = Math.abs(+i || 0).toFixed(n)), 10) + "",
              l = c.length > 3 ? c.length % 3 : 0;
            return (
              u +
              (l ? c.substr(0, l) + o : "") +
              c.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + o) +
              (n
                ? s +
                  Math.abs(i - c)
                    .toFixed(n)
                    .slice(2)
                : "")
            );
          }),
          (o.formatSize = function (t) {
            return (
              (t =
                t >= 1073741824
                  ? o.formatNumber(t / 1073741824, 2, ".", "") + " GiB"
                  : t >= 1048576
                    ? o.formatNumber(t / 1048576, 2, ".", "") + " MiB"
                    : t >= 1024
                      ? o.formatNumber(t / 1024, 0) + " KiB"
                      : o.formatNumber(t, 0) + " bytes"),
              t
            );
          }),
          (o.bytesFromIP = function (t) {
            return -1 !== t.indexOf(".")
              ? o.bytesFromIPv4(t)
              : -1 !== t.indexOf(":")
                ? o.bytesFromIPv6(t)
                : null;
          }),
          (o.bytesFromIPv4 = function (t) {
            if (((t = t.split(".")), 4 !== t.length)) return null;
            for (var e = o.createBuffer(), r = 0; r < t.length; ++r) {
              var a = parseInt(t[r], 10);
              if (isNaN(a)) return null;
              e.putByte(a);
            }
            return e.getBytes();
          }),
          (o.bytesFromIPv6 = function (t) {
            var e = 0;
            t = t.split(":").filter(function (t) {
              return (0 === t.length && ++e, !0);
            });
            for (
              var r = 2 * (8 - t.length + e), a = o.createBuffer(), i = 0;
              i < 8;
              ++i
            )
              if (t[i] && 0 !== t[i].length) {
                var n = o.hexToBytes(t[i]);
                (n.length < 2 && a.putByte(0), a.putBytes(n));
              } else (a.fillWithByte(0, r), (r = 0));
            return a.getBytes();
          }),
          (o.bytesToIP = function (t) {
            return 4 === t.length
              ? o.bytesToIPv4(t)
              : 16 === t.length
                ? o.bytesToIPv6(t)
                : null;
          }),
          (o.bytesToIPv4 = function (t) {
            if (4 !== t.length) return null;
            for (var e = [], r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
            return e.join(".");
          }),
          (o.bytesToIPv6 = function (t) {
            if (16 !== t.length) return null;
            for (var e = [], r = [], a = 0, i = 0; i < t.length; i += 2) {
              var n = o.bytesToHex(t[i] + t[i + 1]);
              while ("0" === n[0] && "0" !== n) n = n.substr(1);
              if ("0" === n) {
                var s = r[r.length - 1],
                  u = e.length;
                s && u === s.end + 1
                  ? ((s.end = u),
                    s.end - s.start > r[a].end - r[a].start &&
                      (a = r.length - 1))
                  : r.push({ start: u, end: u });
              }
              e.push(n);
            }
            if (r.length > 0) {
              var c = r[a];
              c.end - c.start > 0 &&
                (e.splice(c.start, c.end - c.start + 1, ""),
                0 === c.start && e.unshift(""),
                7 === c.end && e.push(""));
            }
            return e.join(":");
          }),
          (o.estimateCores = function (t, e) {
            if (
              ("function" === typeof t && ((e = t), (t = {})),
              (t = t || {}),
              "cores" in o && !t.update)
            )
              return e(null, o.cores);
            if (
              "undefined" !== typeof navigator &&
              "hardwareConcurrency" in navigator &&
              navigator.hardwareConcurrency > 0
            )
              return (
                (o.cores = navigator.hardwareConcurrency),
                e(null, o.cores)
              );
            if ("undefined" === typeof Worker)
              return ((o.cores = 1), e(null, o.cores));
            if ("undefined" === typeof Blob)
              return ((o.cores = 2), e(null, o.cores));
            var r = URL.createObjectURL(
              new Blob(
                [
                  "(",
                  function () {
                    self.addEventListener("message", function (t) {
                      var e = Date.now(),
                        r = e + 4;
                      while (Date.now() < r);
                      self.postMessage({ st: e, et: r });
                    });
                  }.toString(),
                  ")()",
                ],
                { type: "application/javascript" },
              ),
            );
            function a(t, s, u) {
              if (0 === s) {
                var c = Math.floor(
                  t.reduce(function (t, e) {
                    return t + e;
                  }, 0) / t.length,
                );
                return (
                  (o.cores = Math.max(1, c)),
                  URL.revokeObjectURL(r),
                  e(null, o.cores)
                );
              }
              i(u, function (e, r) {
                (t.push(n(u, r)), a(t, s - 1, u));
              });
            }
            function i(t, e) {
              for (var a = [], i = [], n = 0; n < t; ++n) {
                var s = new Worker(r);
                (s.addEventListener("message", function (r) {
                  if ((i.push(r.data), i.length === t)) {
                    for (var n = 0; n < t; ++n) a[n].terminate();
                    e(null, i);
                  }
                }),
                  a.push(s));
              }
              for (n = 0; n < t; ++n) a[n].postMessage(n);
            }
            function n(t, e) {
              for (var r = [], a = 0; a < t; ++a)
                for (var i = e[a], n = (r[a] = []), s = 0; s < t; ++s)
                  if (a !== s) {
                    var o = e[s];
                    ((i.st > o.st && i.st < o.et) ||
                      (o.st > i.st && o.st < i.et)) &&
                      n.push(s);
                  }
              return r.reduce(function (t, e) {
                return Math.max(t, e.length);
              }, 0);
            }
            a([], 5, 16);
          }));
      }).call(this, r(18), r(13), r(2).Buffer);
    },
    3458: function (t, e, r) {
      var a = r(2908);
      ((t.exports = a.md = a.md || {}),
        (a.md.algorithms = a.md.algorithms || {}));
    },
    3831: function (t, e, r) {
      var a = r(2908);
      (r(5595),
        r(6731),
        r(10701),
        r(2921),
        (function () {
          a.random && a.random.getBytes
            ? (t.exports = a.random)
            : (function (e) {
                var r = {},
                  i = new Array(4),
                  n = a.util.createBuffer();
                function s() {
                  var t = a.prng.create(r);
                  return (
                    (t.getBytes = function (e, r) {
                      return t.generate(e, r);
                    }),
                    (t.getBytesSync = function (e) {
                      return t.generate(e);
                    }),
                    t
                  );
                }
                ((r.formatKey = function (t) {
                  var e = a.util.createBuffer(t);
                  return (
                    (t = new Array(4)),
                    (t[0] = e.getInt32()),
                    (t[1] = e.getInt32()),
                    (t[2] = e.getInt32()),
                    (t[3] = e.getInt32()),
                    a.aes._expandKey(t, !1)
                  );
                }),
                  (r.formatSeed = function (t) {
                    var e = a.util.createBuffer(t);
                    return (
                      (t = new Array(4)),
                      (t[0] = e.getInt32()),
                      (t[1] = e.getInt32()),
                      (t[2] = e.getInt32()),
                      (t[3] = e.getInt32()),
                      t
                    );
                  }),
                  (r.cipher = function (t, e) {
                    return (
                      a.aes._updateBlock(t, e, i, !1),
                      n.putInt32(i[0]),
                      n.putInt32(i[1]),
                      n.putInt32(i[2]),
                      n.putInt32(i[3]),
                      n.getBytes()
                    );
                  }),
                  (r.increment = function (t) {
                    return (++t[3], t);
                  }),
                  (r.md = a.md.sha256));
                var o = s(),
                  u = null,
                  c = a.util.globalScope,
                  l = c.crypto || c.msCrypto;
                if (
                  (l &&
                    l.getRandomValues &&
                    (u = function (t) {
                      return l.getRandomValues(t);
                    }),
                  a.options.usePureJavaScript || (!a.util.isNodejs && !u))
                ) {
                  if (
                    ("undefined" === typeof window || window.document,
                    o.collectInt(+new Date(), 32),
                    "undefined" !== typeof navigator)
                  ) {
                    var h = "";
                    for (var p in navigator)
                      try {
                        "string" == typeof navigator[p] && (h += navigator[p]);
                      } catch (f) {}
                    (o.collect(h), (h = null));
                  }
                  e &&
                    (e().mousemove(function (t) {
                      (o.collectInt(t.clientX, 16),
                        o.collectInt(t.clientY, 16));
                    }),
                    e().keypress(function (t) {
                      o.collectInt(t.charCode, 8);
                    }));
                }
                if (a.random) for (var p in o) a.random[p] = o[p];
                else a.random = o;
                ((a.random.createInstance = s), (t.exports = a.random));
              })("undefined" !== typeof jQuery ? jQuery : null);
        })());
    },
    3951: function (t, e, r) {
      var a = r(2908);
      (r(2921), r(3952));
      var i = (t.exports = a.asn1 = a.asn1 || {});
      function n(t, e, r) {
        if (r > e) {
          var a = new Error("Too few bytes to parse DER.");
          throw (
            (a.available = t.length()),
            (a.remaining = e),
            (a.requested = r),
            a
          );
        }
      }
      ((i.Class = {
        UNIVERSAL: 0,
        APPLICATION: 64,
        CONTEXT_SPECIFIC: 128,
        PRIVATE: 192,
      }),
        (i.Type = {
          NONE: 0,
          BOOLEAN: 1,
          INTEGER: 2,
          BITSTRING: 3,
          OCTETSTRING: 4,
          NULL: 5,
          OID: 6,
          ODESC: 7,
          EXTERNAL: 8,
          REAL: 9,
          ENUMERATED: 10,
          EMBEDDED: 11,
          UTF8: 12,
          ROID: 13,
          SEQUENCE: 16,
          SET: 17,
          PRINTABLESTRING: 19,
          IA5STRING: 22,
          UTCTIME: 23,
          GENERALIZEDTIME: 24,
          BMPSTRING: 30,
        }),
        (i.create = function (t, e, r, n, s) {
          if (a.util.isArray(n)) {
            for (var o = [], u = 0; u < n.length; ++u)
              void 0 !== n[u] && o.push(n[u]);
            n = o;
          }
          var c = {
            tagClass: t,
            type: e,
            constructed: r,
            composed: r || a.util.isArray(n),
            value: n,
          };
          return (
            s &&
              "bitStringContents" in s &&
              ((c.bitStringContents = s.bitStringContents),
              (c.original = i.copy(c))),
            c
          );
        }),
        (i.copy = function (t, e) {
          var r;
          if (a.util.isArray(t)) {
            r = [];
            for (var n = 0; n < t.length; ++n) r.push(i.copy(t[n], e));
            return r;
          }
          return "string" === typeof t
            ? t
            : ((r = {
                tagClass: t.tagClass,
                type: t.type,
                constructed: t.constructed,
                composed: t.composed,
                value: i.copy(t.value, e),
              }),
              e &&
                !e.excludeBitStringContents &&
                (r.bitStringContents = t.bitStringContents),
              r);
        }),
        (i.equals = function (t, e, r) {
          if (a.util.isArray(t)) {
            if (!a.util.isArray(e)) return !1;
            if (t.length !== e.length) return !1;
            for (var n = 0; n < t.length; ++n)
              if (!i.equals(t[n], e[n])) return !1;
            return !0;
          }
          if (typeof t !== typeof e) return !1;
          if ("string" === typeof t) return t === e;
          var s =
            t.tagClass === e.tagClass &&
            t.type === e.type &&
            t.constructed === e.constructed &&
            t.composed === e.composed &&
            i.equals(t.value, e.value);
          return (
            r &&
              r.includeBitStringContents &&
              (s = s && t.bitStringContents === e.bitStringContents),
            s
          );
        }),
        (i.getBerValueLength = function (t) {
          var e = t.getByte();
          if (128 !== e) {
            var r,
              a = 128 & e;
            return ((r = a ? t.getInt((127 & e) << 3) : e), r);
          }
        }));
      var s = function (t, e) {
        var r = t.getByte();
        if ((e--, 128 !== r)) {
          var a,
            i = 128 & r;
          if (i) {
            var s = 127 & r;
            (n(t, e, s), (a = t.getInt(s << 3)));
          } else a = r;
          if (a < 0) throw new Error("Negative length: " + a);
          return a;
        }
      };
      function o(t, e, r, a) {
        var u;
        n(t, e, 2);
        var c = t.getByte();
        e--;
        var l = 192 & c,
          h = 31 & c;
        u = t.length();
        var p,
          f,
          d = s(t, e);
        if (((e -= u - t.length()), void 0 !== d && d > e)) {
          if (a.strict) {
            var y = new Error("Too few bytes to read ASN.1 value.");
            throw (
              (y.available = t.length()),
              (y.remaining = e),
              (y.requested = d),
              y
            );
          }
          d = e;
        }
        var g = 32 === (32 & c);
        if (g)
          if (((p = []), void 0 === d))
            for (;;) {
              if ((n(t, e, 2), t.bytes(2) === String.fromCharCode(0, 0))) {
                (t.getBytes(2), (e -= 2));
                break;
              }
              ((u = t.length()),
                p.push(o(t, e, r + 1, a)),
                (e -= u - t.length()));
            }
          else
            while (d > 0)
              ((u = t.length()),
                p.push(o(t, d, r + 1, a)),
                (e -= u - t.length()),
                (d -= u - t.length()));
        if (
          (void 0 === p &&
            l === i.Class.UNIVERSAL &&
            h === i.Type.BITSTRING &&
            (f = t.bytes(d)),
          void 0 === p &&
            a.decodeBitStrings &&
            l === i.Class.UNIVERSAL &&
            h === i.Type.BITSTRING &&
            d > 1)
        ) {
          var m = t.read,
            v = e,
            C = 0;
          if (
            (h === i.Type.BITSTRING && (n(t, e, 1), (C = t.getByte()), e--),
            0 === C)
          )
            try {
              u = t.length();
              var E = { verbose: a.verbose, strict: !0, decodeBitStrings: !0 },
                S = o(t, e, r + 1, E),
                T = u - t.length();
              ((e -= T), h == i.Type.BITSTRING && T++);
              var I = S.tagClass;
              T !== d ||
                (I !== i.Class.UNIVERSAL && I !== i.Class.CONTEXT_SPECIFIC) ||
                (p = [S]);
            } catch (A) {}
          void 0 === p && ((t.read = m), (e = v));
        }
        if (void 0 === p) {
          if (void 0 === d) {
            if (a.strict)
              throw new Error(
                "Non-constructed ASN.1 object of indefinite length.",
              );
            d = e;
          }
          if (h === i.Type.BMPSTRING)
            for (p = ""; d > 0; d -= 2)
              (n(t, e, 2), (p += String.fromCharCode(t.getInt16())), (e -= 2));
          else p = t.getBytes(d);
        }
        var b = void 0 === f ? null : { bitStringContents: f };
        return i.create(l, h, g, p, b);
      }
      ((i.fromDer = function (t, e) {
        return (
          void 0 === e && (e = { strict: !0, decodeBitStrings: !0 }),
          "boolean" === typeof e && (e = { strict: e, decodeBitStrings: !0 }),
          "strict" in e || (e.strict = !0),
          "decodeBitStrings" in e || (e.decodeBitStrings = !0),
          "string" === typeof t && (t = a.util.createBuffer(t)),
          o(t, t.length(), 0, e)
        );
      }),
        (i.toDer = function (t) {
          var e = a.util.createBuffer(),
            r = t.tagClass | t.type,
            n = a.util.createBuffer(),
            s = !1;
          if (
            ("bitStringContents" in t &&
              ((s = !0), t.original && (s = i.equals(t, t.original))),
            s)
          )
            n.putBytes(t.bitStringContents);
          else if (t.composed) {
            t.constructed ? (r |= 32) : n.putByte(0);
            for (var o = 0; o < t.value.length; ++o)
              void 0 !== t.value[o] && n.putBuffer(i.toDer(t.value[o]));
          } else if (t.type === i.Type.BMPSTRING)
            for (o = 0; o < t.value.length; ++o)
              n.putInt16(t.value.charCodeAt(o));
          else
            t.type === i.Type.INTEGER &&
            t.value.length > 1 &&
            ((0 === t.value.charCodeAt(0) &&
              0 === (128 & t.value.charCodeAt(1))) ||
              (255 === t.value.charCodeAt(0) &&
                128 === (128 & t.value.charCodeAt(1))))
              ? n.putBytes(t.value.substr(1))
              : n.putBytes(t.value);
          if ((e.putByte(r), n.length() <= 127)) e.putByte(127 & n.length());
          else {
            var u = n.length(),
              c = "";
            do {
              ((c += String.fromCharCode(255 & u)), (u >>>= 8));
            } while (u > 0);
            e.putByte(128 | c.length);
            for (o = c.length - 1; o >= 0; --o) e.putByte(c.charCodeAt(o));
          }
          return (e.putBuffer(n), e);
        }),
        (i.oidToDer = function (t) {
          var e,
            r,
            i,
            n,
            s = t.split("."),
            o = a.util.createBuffer();
          o.putByte(40 * parseInt(s[0], 10) + parseInt(s[1], 10));
          for (var u = 2; u < s.length; ++u) {
            ((e = !0), (r = []), (i = parseInt(s[u], 10)));
            do {
              ((n = 127 & i), (i >>>= 7), e || (n |= 128), r.push(n), (e = !1));
            } while (i > 0);
            for (var c = r.length - 1; c >= 0; --c) o.putByte(r[c]);
          }
          return o;
        }),
        (i.derToOid = function (t) {
          var e;
          "string" === typeof t && (t = a.util.createBuffer(t));
          var r = t.getByte();
          e = Math.floor(r / 40) + "." + (r % 40);
          var i = 0;
          while (t.length() > 0)
            ((r = t.getByte()),
              (i <<= 7),
              128 & r ? (i += 127 & r) : ((e += "." + (i + r)), (i = 0)));
          return e;
        }),
        (i.utcTimeToDate = function (t) {
          var e = new Date(),
            r = parseInt(t.substr(0, 2), 10);
          r = r >= 50 ? 1900 + r : 2e3 + r;
          var a = parseInt(t.substr(2, 2), 10) - 1,
            i = parseInt(t.substr(4, 2), 10),
            n = parseInt(t.substr(6, 2), 10),
            s = parseInt(t.substr(8, 2), 10),
            o = 0;
          if (t.length > 11) {
            var u = t.charAt(10),
              c = 10;
            "+" !== u &&
              "-" !== u &&
              ((o = parseInt(t.substr(10, 2), 10)), (c += 2));
          }
          if (
            (e.setUTCFullYear(r, a, i),
            e.setUTCHours(n, s, o, 0),
            c && ((u = t.charAt(c)), "+" === u || "-" === u))
          ) {
            var l = parseInt(t.substr(c + 1, 2), 10),
              h = parseInt(t.substr(c + 4, 2), 10),
              p = 60 * l + h;
            ((p *= 6e4), "+" === u ? e.setTime(+e - p) : e.setTime(+e + p));
          }
          return e;
        }),
        (i.generalizedTimeToDate = function (t) {
          var e = new Date(),
            r = parseInt(t.substr(0, 4), 10),
            a = parseInt(t.substr(4, 2), 10) - 1,
            i = parseInt(t.substr(6, 2), 10),
            n = parseInt(t.substr(8, 2), 10),
            s = parseInt(t.substr(10, 2), 10),
            o = parseInt(t.substr(12, 2), 10),
            u = 0,
            c = 0,
            l = !1;
          "Z" === t.charAt(t.length - 1) && (l = !0);
          var h = t.length - 5,
            p = t.charAt(h);
          if ("+" === p || "-" === p) {
            var f = parseInt(t.substr(h + 1, 2), 10),
              d = parseInt(t.substr(h + 4, 2), 10);
            ((c = 60 * f + d), (c *= 6e4), "+" === p && (c *= -1), (l = !0));
          }
          return (
            "." === t.charAt(14) && (u = 1e3 * parseFloat(t.substr(14), 10)),
            l
              ? (e.setUTCFullYear(r, a, i),
                e.setUTCHours(n, s, o, u),
                e.setTime(+e + c))
              : (e.setFullYear(r, a, i), e.setHours(n, s, o, u)),
            e
          );
        }),
        (i.dateToUtcTime = function (t) {
          if ("string" === typeof t) return t;
          var e = "",
            r = [];
          (r.push(("" + t.getUTCFullYear()).substr(2)),
            r.push("" + (t.getUTCMonth() + 1)),
            r.push("" + t.getUTCDate()),
            r.push("" + t.getUTCHours()),
            r.push("" + t.getUTCMinutes()),
            r.push("" + t.getUTCSeconds()));
          for (var a = 0; a < r.length; ++a)
            (r[a].length < 2 && (e += "0"), (e += r[a]));
          return ((e += "Z"), e);
        }),
        (i.dateToGeneralizedTime = function (t) {
          if ("string" === typeof t) return t;
          var e = "",
            r = [];
          (r.push("" + t.getUTCFullYear()),
            r.push("" + (t.getUTCMonth() + 1)),
            r.push("" + t.getUTCDate()),
            r.push("" + t.getUTCHours()),
            r.push("" + t.getUTCMinutes()),
            r.push("" + t.getUTCSeconds()));
          for (var a = 0; a < r.length; ++a)
            (r[a].length < 2 && (e += "0"), (e += r[a]));
          return ((e += "Z"), e);
        }),
        (i.integerToDer = function (t) {
          var e = a.util.createBuffer();
          if (t >= -128 && t < 128) return e.putSignedInt(t, 8);
          if (t >= -32768 && t < 32768) return e.putSignedInt(t, 16);
          if (t >= -8388608 && t < 8388608) return e.putSignedInt(t, 24);
          if (t >= -2147483648 && t < 2147483648) return e.putSignedInt(t, 32);
          var r = new Error("Integer too large; max is 32-bits.");
          throw ((r.integer = t), r);
        }),
        (i.derToInteger = function (t) {
          "string" === typeof t && (t = a.util.createBuffer(t));
          var e = 8 * t.length();
          if (e > 32) throw new Error("Integer too large; max is 32-bits.");
          return t.getSignedInt(e);
        }),
        (i.validate = function (t, e, r, n) {
          var s = !1;
          if (
            (t.tagClass !== e.tagClass && "undefined" !== typeof e.tagClass) ||
            (t.type !== e.type && "undefined" !== typeof e.type)
          )
            n &&
              (t.tagClass !== e.tagClass &&
                n.push(
                  "[" +
                    e.name +
                    '] Expected tag class "' +
                    e.tagClass +
                    '", got "' +
                    t.tagClass +
                    '"',
                ),
              t.type !== e.type &&
                n.push(
                  "[" +
                    e.name +
                    '] Expected type "' +
                    e.type +
                    '", got "' +
                    t.type +
                    '"',
                ));
          else if (
            t.constructed === e.constructed ||
            "undefined" === typeof e.constructed
          ) {
            if (((s = !0), e.value && a.util.isArray(e.value)))
              for (var o = 0, u = 0; s && u < e.value.length; ++u)
                ((s = e.value[u].optional || !1),
                  t.value[o] &&
                    ((s = i.validate(t.value[o], e.value[u], r, n)),
                    s ? ++o : e.value[u].optional && (s = !0)),
                  !s &&
                    n &&
                    n.push(
                      "[" +
                        e.name +
                        '] Tag class "' +
                        e.tagClass +
                        '", type "' +
                        e.type +
                        '" expected value length "' +
                        e.value.length +
                        '", got "' +
                        t.value.length +
                        '"',
                    ));
            if (s && r)
              if (
                (e.capture && (r[e.capture] = t.value),
                e.captureAsn1 && (r[e.captureAsn1] = t),
                e.captureBitStringContents &&
                  "bitStringContents" in t &&
                  (r[e.captureBitStringContents] = t.bitStringContents),
                e.captureBitStringValue && "bitStringContents" in t)
              )
                if (t.bitStringContents.length < 2)
                  r[e.captureBitStringValue] = "";
                else {
                  var c = t.bitStringContents.charCodeAt(0);
                  if (0 !== c)
                    throw new Error(
                      "captureBitStringValue only supported for zero unused bits",
                    );
                  r[e.captureBitStringValue] = t.bitStringContents.slice(1);
                }
          } else
            n &&
              n.push(
                "[" +
                  e.name +
                  '] Expected constructed "' +
                  e.constructed +
                  '", got "' +
                  t.constructed +
                  '"',
              );
          return s;
        }));
      var u = /[^\\u0000-\\u00ff]/;
      i.prettyPrint = function (t, e, r) {
        var n = "";
        ((e = e || 0), (r = r || 2), e > 0 && (n += "\n"));
        for (var s = "", o = 0; o < e * r; ++o) s += " ";
        switch (((n += s + "Tag: "), t.tagClass)) {
          case i.Class.UNIVERSAL:
            n += "Universal:";
            break;
          case i.Class.APPLICATION:
            n += "Application:";
            break;
          case i.Class.CONTEXT_SPECIFIC:
            n += "Context-Specific:";
            break;
          case i.Class.PRIVATE:
            n += "Private:";
            break;
        }
        if (t.tagClass === i.Class.UNIVERSAL)
          switch (((n += t.type), t.type)) {
            case i.Type.NONE:
              n += " (None)";
              break;
            case i.Type.BOOLEAN:
              n += " (Boolean)";
              break;
            case i.Type.INTEGER:
              n += " (Integer)";
              break;
            case i.Type.BITSTRING:
              n += " (Bit string)";
              break;
            case i.Type.OCTETSTRING:
              n += " (Octet string)";
              break;
            case i.Type.NULL:
              n += " (Null)";
              break;
            case i.Type.OID:
              n += " (Object Identifier)";
              break;
            case i.Type.ODESC:
              n += " (Object Descriptor)";
              break;
            case i.Type.EXTERNAL:
              n += " (External or Instance of)";
              break;
            case i.Type.REAL:
              n += " (Real)";
              break;
            case i.Type.ENUMERATED:
              n += " (Enumerated)";
              break;
            case i.Type.EMBEDDED:
              n += " (Embedded PDV)";
              break;
            case i.Type.UTF8:
              n += " (UTF8)";
              break;
            case i.Type.ROID:
              n += " (Relative Object Identifier)";
              break;
            case i.Type.SEQUENCE:
              n += " (Sequence)";
              break;
            case i.Type.SET:
              n += " (Set)";
              break;
            case i.Type.PRINTABLESTRING:
              n += " (Printable String)";
              break;
            case i.Type.IA5String:
              n += " (IA5String (ASCII))";
              break;
            case i.Type.UTCTIME:
              n += " (UTC time)";
              break;
            case i.Type.GENERALIZEDTIME:
              n += " (Generalized time)";
              break;
            case i.Type.BMPSTRING:
              n += " (BMP String)";
              break;
          }
        else n += t.type;
        if (
          ((n += "\n"),
          (n += s + "Constructed: " + t.constructed + "\n"),
          t.composed)
        ) {
          var c = 0,
            l = "";
          for (o = 0; o < t.value.length; ++o)
            void 0 !== t.value[o] &&
              ((c += 1),
              (l += i.prettyPrint(t.value[o], e + 1, r)),
              o + 1 < t.value.length && (l += ","));
          n += s + "Sub values: " + c + l;
        } else {
          if (((n += s + "Value: "), t.type === i.Type.OID)) {
            var h = i.derToOid(t.value);
            ((n += h),
              a.pki &&
                a.pki.oids &&
                h in a.pki.oids &&
                (n += " (" + a.pki.oids[h] + ") "));
          }
          if (t.type === i.Type.INTEGER)
            try {
              n += i.derToInteger(t.value);
            } catch (f) {
              n += "0x" + a.util.bytesToHex(t.value);
            }
          else if (t.type === i.Type.BITSTRING) {
            if (
              (t.value.length > 1
                ? (n += "0x" + a.util.bytesToHex(t.value.slice(1)))
                : (n += "(none)"),
              t.value.length > 0)
            ) {
              var p = t.value.charCodeAt(0);
              1 == p
                ? (n += " (1 unused bit shown)")
                : p > 1 && (n += " (" + p + " unused bits shown)");
            }
          } else
            t.type === i.Type.OCTETSTRING
              ? (u.test(t.value) || (n += "(" + t.value + ") "),
                (n += "0x" + a.util.bytesToHex(t.value)))
              : t.type === i.Type.UTF8
                ? (n += a.util.decodeUtf8(t.value))
                : t.type === i.Type.PRINTABLESTRING ||
                    t.type === i.Type.IA5String
                  ? (n += t.value)
                  : u.test(t.value)
                    ? (n += "0x" + a.util.bytesToHex(t.value))
                    : 0 === t.value.length
                      ? (n += "[null]")
                      : (n += t.value);
        }
        return n;
      };
    },
    3952: function (t, e, r) {
      var a = r(2908);
      a.pki = a.pki || {};
      var i = (t.exports = a.pki.oids = a.oids = a.oids || {});
      function n(t, e) {
        ((i[t] = e), (i[e] = t));
      }
      function s(t, e) {
        i[t] = e;
      }
      (n("1.2.840.113549.1.1.1", "rsaEncryption"),
        n("1.2.840.113549.1.1.4", "md5WithRSAEncryption"),
        n("1.2.840.113549.1.1.5", "sha1WithRSAEncryption"),
        n("1.2.840.113549.1.1.7", "RSAES-OAEP"),
        n("1.2.840.113549.1.1.8", "mgf1"),
        n("1.2.840.113549.1.1.9", "pSpecified"),
        n("1.2.840.113549.1.1.10", "RSASSA-PSS"),
        n("1.2.840.113549.1.1.11", "sha256WithRSAEncryption"),
        n("1.2.840.113549.1.1.12", "sha384WithRSAEncryption"),
        n("1.2.840.113549.1.1.13", "sha512WithRSAEncryption"),
        n("1.2.840.10040.4.3", "dsa-with-sha1"),
        n("1.3.14.3.2.7", "desCBC"),
        n("1.3.14.3.2.26", "sha1"),
        n("2.16.840.1.101.3.4.2.1", "sha256"),
        n("2.16.840.1.101.3.4.2.2", "sha384"),
        n("2.16.840.1.101.3.4.2.3", "sha512"),
        n("1.2.840.113549.2.5", "md5"),
        n("1.2.840.113549.1.7.1", "data"),
        n("1.2.840.113549.1.7.2", "signedData"),
        n("1.2.840.113549.1.7.3", "envelopedData"),
        n("1.2.840.113549.1.7.4", "signedAndEnvelopedData"),
        n("1.2.840.113549.1.7.5", "digestedData"),
        n("1.2.840.113549.1.7.6", "encryptedData"),
        n("1.2.840.113549.1.9.1", "emailAddress"),
        n("1.2.840.113549.1.9.2", "unstructuredName"),
        n("1.2.840.113549.1.9.3", "contentType"),
        n("1.2.840.113549.1.9.4", "messageDigest"),
        n("1.2.840.113549.1.9.5", "signingTime"),
        n("1.2.840.113549.1.9.6", "counterSignature"),
        n("1.2.840.113549.1.9.7", "challengePassword"),
        n("1.2.840.113549.1.9.8", "unstructuredAddress"),
        n("1.2.840.113549.1.9.14", "extensionRequest"),
        n("1.2.840.113549.1.9.20", "friendlyName"),
        n("1.2.840.113549.1.9.21", "localKeyId"),
        n("1.2.840.113549.1.9.22.1", "x509Certificate"),
        n("1.2.840.113549.1.12.10.1.1", "keyBag"),
        n("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag"),
        n("1.2.840.113549.1.12.10.1.3", "certBag"),
        n("1.2.840.113549.1.12.10.1.4", "crlBag"),
        n("1.2.840.113549.1.12.10.1.5", "secretBag"),
        n("1.2.840.113549.1.12.10.1.6", "safeContentsBag"),
        n("1.2.840.113549.1.5.13", "pkcs5PBES2"),
        n("1.2.840.113549.1.5.12", "pkcs5PBKDF2"),
        n("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4"),
        n("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4"),
        n("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC"),
        n("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC"),
        n("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC"),
        n("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC"),
        n("1.2.840.113549.2.7", "hmacWithSHA1"),
        n("1.2.840.113549.2.8", "hmacWithSHA224"),
        n("1.2.840.113549.2.9", "hmacWithSHA256"),
        n("1.2.840.113549.2.10", "hmacWithSHA384"),
        n("1.2.840.113549.2.11", "hmacWithSHA512"),
        n("1.2.840.113549.3.7", "des-EDE3-CBC"),
        n("2.16.840.1.101.3.4.1.2", "aes128-CBC"),
        n("2.16.840.1.101.3.4.1.22", "aes192-CBC"),
        n("2.16.840.1.101.3.4.1.42", "aes256-CBC"),
        n("2.5.4.3", "commonName"),
        n("2.5.4.5", "serialName"),
        n("2.5.4.6", "countryName"),
        n("2.5.4.7", "localityName"),
        n("2.5.4.8", "stateOrProvinceName"),
        n("2.5.4.10", "organizationName"),
        n("2.5.4.11", "organizationalUnitName"),
        n("2.5.4.13", "description"),
        n("2.16.840.1.113730.1.1", "nsCertType"),
        n("2.16.840.1.113730.1.13", "nsComment"),
        s("2.5.29.1", "authorityKeyIdentifier"),
        s("2.5.29.2", "keyAttributes"),
        s("2.5.29.3", "certificatePolicies"),
        s("2.5.29.4", "keyUsageRestriction"),
        s("2.5.29.5", "policyMapping"),
        s("2.5.29.6", "subtreesConstraint"),
        s("2.5.29.7", "subjectAltName"),
        s("2.5.29.8", "issuerAltName"),
        s("2.5.29.9", "subjectDirectoryAttributes"),
        s("2.5.29.10", "basicConstraints"),
        s("2.5.29.11", "nameConstraints"),
        s("2.5.29.12", "policyConstraints"),
        s("2.5.29.13", "basicConstraints"),
        n("2.5.29.14", "subjectKeyIdentifier"),
        n("2.5.29.15", "keyUsage"),
        s("2.5.29.16", "privateKeyUsagePeriod"),
        n("2.5.29.17", "subjectAltName"),
        n("2.5.29.18", "issuerAltName"),
        n("2.5.29.19", "basicConstraints"),
        s("2.5.29.20", "cRLNumber"),
        s("2.5.29.21", "cRLReason"),
        s("2.5.29.22", "expirationDate"),
        s("2.5.29.23", "instructionCode"),
        s("2.5.29.24", "invalidityDate"),
        s("2.5.29.25", "cRLDistributionPoints"),
        s("2.5.29.26", "issuingDistributionPoint"),
        s("2.5.29.27", "deltaCRLIndicator"),
        s("2.5.29.28", "issuingDistributionPoint"),
        s("2.5.29.29", "certificateIssuer"),
        s("2.5.29.30", "nameConstraints"),
        n("2.5.29.31", "cRLDistributionPoints"),
        n("2.5.29.32", "certificatePolicies"),
        s("2.5.29.33", "policyMappings"),
        s("2.5.29.34", "policyConstraints"),
        n("2.5.29.35", "authorityKeyIdentifier"),
        s("2.5.29.36", "policyConstraints"),
        n("2.5.29.37", "extKeyUsage"),
        s("2.5.29.46", "freshestCRL"),
        s("2.5.29.54", "inhibitAnyPolicy"),
        n("1.3.6.1.4.1.11129.2.4.2", "timestampList"),
        n("1.3.6.1.5.5.7.1.1", "authorityInfoAccess"),
        n("1.3.6.1.5.5.7.3.1", "serverAuth"),
        n("1.3.6.1.5.5.7.3.2", "clientAuth"),
        n("1.3.6.1.5.5.7.3.3", "codeSigning"),
        n("1.3.6.1.5.5.7.3.4", "emailProtection"),
        n("1.3.6.1.5.5.7.3.8", "timeStamping"));
    },
    4827: function (t, e, r) {
      var a = r(2908);
      if (
        (r(3951),
        r(6739),
        r(3952),
        r(10711),
        r(10712),
        r(3831),
        r(2921),
        "undefined" === typeof BigInteger)
      )
        var BigInteger = a.jsbn.BigInteger;
      var i = a.util.isNodejs ? r(5597) : null,
        n = a.asn1,
        s = a.util;
      ((a.pki = a.pki || {}), (t.exports = a.pki.rsa = a.rsa = a.rsa || {}));
      var o = a.pki,
        u = [6, 4, 2, 4, 2, 4, 6, 2],
        c = {
          name: "PrivateKeyInfo",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PrivateKeyInfo.version",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyVersion",
            },
            {
              name: "PrivateKeyInfo.privateKeyAlgorithm",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.OID,
                  constructed: !1,
                  capture: "privateKeyOid",
                },
              ],
            },
            {
              name: "PrivateKeyInfo",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.OCTETSTRING,
              constructed: !1,
              capture: "privateKey",
            },
          ],
        },
        l = {
          name: "RSAPrivateKey",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RSAPrivateKey.version",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyVersion",
            },
            {
              name: "RSAPrivateKey.modulus",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyModulus",
            },
            {
              name: "RSAPrivateKey.publicExponent",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPublicExponent",
            },
            {
              name: "RSAPrivateKey.privateExponent",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrivateExponent",
            },
            {
              name: "RSAPrivateKey.prime1",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrime1",
            },
            {
              name: "RSAPrivateKey.prime2",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrime2",
            },
            {
              name: "RSAPrivateKey.exponent1",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyExponent1",
            },
            {
              name: "RSAPrivateKey.exponent2",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyExponent2",
            },
            {
              name: "RSAPrivateKey.coefficient",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyCoefficient",
            },
          ],
        },
        h = {
          name: "RSAPublicKey",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RSAPublicKey.modulus",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "publicKeyModulus",
            },
            {
              name: "RSAPublicKey.exponent",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "publicKeyExponent",
            },
          ],
        },
        p = (a.pki.rsa.publicKeyValidator = {
          name: "SubjectPublicKeyInfo",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "subjectPublicKeyInfo",
          value: [
            {
              name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.OID,
                  constructed: !1,
                  capture: "publicKeyOid",
                },
              ],
            },
            {
              name: "SubjectPublicKeyInfo.subjectPublicKey",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.BITSTRING,
              constructed: !1,
              value: [
                {
                  name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  captureAsn1: "rsaPublicKey",
                },
              ],
            },
          ],
        }),
        f = function (t) {
          var e;
          if (!(t.algorithm in o.oids)) {
            var r = new Error("Unknown message digest algorithm.");
            throw ((r.algorithm = t.algorithm), r);
          }
          e = o.oids[t.algorithm];
          var a = n.oidToDer(e).getBytes(),
            i = n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, []),
            s = n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, []);
          (s.value.push(n.create(n.Class.UNIVERSAL, n.Type.OID, !1, a)),
            s.value.push(n.create(n.Class.UNIVERSAL, n.Type.NULL, !1, "")));
          var u = n.create(
            n.Class.UNIVERSAL,
            n.Type.OCTETSTRING,
            !1,
            t.digest().getBytes(),
          );
          return (i.value.push(s), i.value.push(u), n.toDer(i).getBytes());
        },
        d = function (t, e, r) {
          if (r) return t.modPow(e.e, e.n);
          if (!e.p || !e.q) return t.modPow(e.d, e.n);
          var i;
          (e.dP || (e.dP = e.d.mod(e.p.subtract(BigInteger.ONE))),
            e.dQ || (e.dQ = e.d.mod(e.q.subtract(BigInteger.ONE))),
            e.qInv || (e.qInv = e.q.modInverse(e.p)));
          do {
            i = new BigInteger(
              a.util.bytesToHex(a.random.getBytes(e.n.bitLength() / 8)),
              16,
            );
          } while (i.compareTo(e.n) >= 0 || !i.gcd(e.n).equals(BigInteger.ONE));
          t = t.multiply(i.modPow(e.e, e.n)).mod(e.n);
          var n = t.mod(e.p).modPow(e.dP, e.p),
            s = t.mod(e.q).modPow(e.dQ, e.q);
          while (n.compareTo(s) < 0) n = n.add(e.p);
          var o = n.subtract(s).multiply(e.qInv).mod(e.p).multiply(e.q).add(s);
          return ((o = o.multiply(i.modInverse(e.n)).mod(e.n)), o);
        };
      function y(t, e, r) {
        var i = a.util.createBuffer(),
          n = Math.ceil(e.n.bitLength() / 8);
        if (t.length > n - 11) {
          var s = new Error("Message is too long for PKCS#1 v1.5 padding.");
          throw ((s.length = t.length), (s.max = n - 11), s);
        }
        (i.putByte(0), i.putByte(r));
        var o,
          u = n - 3 - t.length;
        if (0 === r || 1 === r) {
          o = 0 === r ? 0 : 255;
          for (var c = 0; c < u; ++c) i.putByte(o);
        } else
          while (u > 0) {
            var l = 0,
              h = a.random.getBytes(u);
            for (c = 0; c < u; ++c)
              ((o = h.charCodeAt(c)), 0 === o ? ++l : i.putByte(o));
            u = l;
          }
        return (i.putByte(0), i.putBytes(t), i);
      }
      function g(t, e, r, i) {
        var n = Math.ceil(e.n.bitLength() / 8),
          s = a.util.createBuffer(t),
          o = s.getByte(),
          u = s.getByte();
        if (
          0 !== o ||
          (r && 0 !== u && 1 !== u) ||
          (!r && 2 != u) ||
          (r && 0 === u && "undefined" === typeof i)
        )
          throw new Error("Encryption block is invalid.");
        var c = 0;
        if (0 === u) {
          c = n - 3 - i;
          for (var l = 0; l < c; ++l)
            if (0 !== s.getByte())
              throw new Error("Encryption block is invalid.");
        } else if (1 === u) {
          c = 0;
          while (s.length() > 1) {
            if (255 !== s.getByte()) {
              --s.read;
              break;
            }
            ++c;
          }
        } else if (2 === u) {
          c = 0;
          while (s.length() > 1) {
            if (0 === s.getByte()) {
              --s.read;
              break;
            }
            ++c;
          }
        }
        var h = s.getByte();
        if (0 !== h || c !== n - 3 - s.length())
          throw new Error("Encryption block is invalid.");
        return s.getBytes();
      }
      function m(t, e, r) {
        ("function" === typeof e && ((r = e), (e = {})), (e = e || {}));
        var i = {
          algorithm: {
            name: e.algorithm || "PRIMEINC",
            options: {
              workers: e.workers || 2,
              workLoad: e.workLoad || 100,
              workerScript: e.workerScript,
            },
          },
        };
        function n() {
          s(t.pBits, function (e, a) {
            return e
              ? r(e)
              : ((t.p = a), null !== t.q ? u(e, t.q) : void s(t.qBits, u));
          });
        }
        function s(t, e) {
          a.prime.generateProbablePrime(t, i, e);
        }
        function u(e, a) {
          if (e) return r(e);
          if (((t.q = a), t.p.compareTo(t.q) < 0)) {
            var i = t.p;
            ((t.p = t.q), (t.q = i));
          }
          if (
            0 !==
            t.p.subtract(BigInteger.ONE).gcd(t.e).compareTo(BigInteger.ONE)
          )
            return ((t.p = null), void n());
          if (
            0 !==
            t.q.subtract(BigInteger.ONE).gcd(t.e).compareTo(BigInteger.ONE)
          )
            return ((t.q = null), void s(t.qBits, u));
          if (
            ((t.p1 = t.p.subtract(BigInteger.ONE)),
            (t.q1 = t.q.subtract(BigInteger.ONE)),
            (t.phi = t.p1.multiply(t.q1)),
            0 !== t.phi.gcd(t.e).compareTo(BigInteger.ONE))
          )
            return ((t.p = t.q = null), void n());
          if (((t.n = t.p.multiply(t.q)), t.n.bitLength() !== t.bits))
            return ((t.q = null), void s(t.qBits, u));
          var c = t.e.modInverse(t.phi);
          ((t.keys = {
            privateKey: o.rsa.setPrivateKey(
              t.n,
              t.e,
              c,
              t.p,
              t.q,
              c.mod(t.p1),
              c.mod(t.q1),
              t.q.modInverse(t.p),
            ),
            publicKey: o.rsa.setPublicKey(t.n, t.e),
          }),
            r(null, t.keys));
        }
        ("prng" in e && (i.prng = e.prng), n());
      }
      function v(t) {
        var e = t.toString(16);
        e[0] >= "8" && (e = "00" + e);
        var r = a.util.hexToBytes(e);
        return r.length > 1 &&
          ((0 === r.charCodeAt(0) && 0 === (128 & r.charCodeAt(1))) ||
            (255 === r.charCodeAt(0) && 128 === (128 & r.charCodeAt(1))))
          ? r.substr(1)
          : r;
      }
      function C(t) {
        return t <= 100
          ? 27
          : t <= 150
            ? 18
            : t <= 200
              ? 15
              : t <= 250
                ? 12
                : t <= 300
                  ? 9
                  : t <= 350
                    ? 8
                    : t <= 400
                      ? 7
                      : t <= 500
                        ? 6
                        : t <= 600
                          ? 5
                          : t <= 800
                            ? 4
                            : t <= 1250
                              ? 3
                              : 2;
      }
      function E(t) {
        return a.util.isNodejs && "function" === typeof i[t];
      }
      function S(t) {
        return (
          "undefined" !== typeof s.globalScope &&
          "object" === typeof s.globalScope.crypto &&
          "object" === typeof s.globalScope.crypto.subtle &&
          "function" === typeof s.globalScope.crypto.subtle[t]
        );
      }
      function T(t) {
        return (
          "undefined" !== typeof s.globalScope &&
          "object" === typeof s.globalScope.msCrypto &&
          "object" === typeof s.globalScope.msCrypto.subtle &&
          "function" === typeof s.globalScope.msCrypto.subtle[t]
        );
      }
      function I(t) {
        for (
          var e = a.util.hexToBytes(t.toString(16)),
            r = new Uint8Array(e.length),
            i = 0;
          i < e.length;
          ++i
        )
          r[i] = e.charCodeAt(i);
        return r;
      }
      ((o.rsa.encrypt = function (t, e, r) {
        var i,
          n = r,
          s = Math.ceil(e.n.bitLength() / 8);
        !1 !== r && !0 !== r
          ? ((n = 2 === r), (i = y(t, e, r)))
          : ((i = a.util.createBuffer()), i.putBytes(t));
        var o = new BigInteger(i.toHex(), 16),
          u = d(o, e, n),
          c = u.toString(16),
          l = a.util.createBuffer(),
          h = s - Math.ceil(c.length / 2);
        while (h > 0) (l.putByte(0), --h);
        return (l.putBytes(a.util.hexToBytes(c)), l.getBytes());
      }),
        (o.rsa.decrypt = function (t, e, r, i) {
          var n = Math.ceil(e.n.bitLength() / 8);
          if (t.length !== n) {
            var s = new Error("Encrypted message length is invalid.");
            throw ((s.length = t.length), (s.expected = n), s);
          }
          var o = new BigInteger(a.util.createBuffer(t).toHex(), 16);
          if (o.compareTo(e.n) >= 0)
            throw new Error("Encrypted message is invalid.");
          var u = d(o, e, r),
            c = u.toString(16),
            l = a.util.createBuffer(),
            h = n - Math.ceil(c.length / 2);
          while (h > 0) (l.putByte(0), --h);
          return (
            l.putBytes(a.util.hexToBytes(c)),
            !1 !== i ? g(l.getBytes(), e, r) : l.getBytes()
          );
        }),
        (o.rsa.createKeyPairGenerationState = function (t, e, r) {
          ("string" === typeof t && (t = parseInt(t, 10)),
            (t = t || 2048),
            (r = r || {}));
          var i,
            n = r.prng || a.random,
            s = {
              nextBytes: function (t) {
                for (var e = n.getBytesSync(t.length), r = 0; r < t.length; ++r)
                  t[r] = e.charCodeAt(r);
              },
            },
            o = r.algorithm || "PRIMEINC";
          if ("PRIMEINC" !== o)
            throw new Error("Invalid key generation algorithm: " + o);
          return (
            (i = {
              algorithm: o,
              state: 0,
              bits: t,
              rng: s,
              eInt: e || 65537,
              e: new BigInteger(null),
              p: null,
              q: null,
              qBits: t >> 1,
              pBits: t - (t >> 1),
              pqState: 0,
              num: null,
              keys: null,
            }),
            i.e.fromInt(i.eInt),
            i
          );
        }),
        (o.rsa.stepKeyPairGenerationState = function (t, e) {
          "algorithm" in t || (t.algorithm = "PRIMEINC");
          var r = new BigInteger(null);
          r.fromInt(30);
          var a,
            i = 0,
            n = function (t, e) {
              return t | e;
            },
            s = +new Date(),
            c = 0;
          while (null === t.keys && (e <= 0 || c < e)) {
            if (0 === t.state) {
              var l = null === t.p ? t.pBits : t.qBits,
                h = l - 1;
              0 === t.pqState
                ? ((t.num = new BigInteger(l, t.rng)),
                  t.num.testBit(h) ||
                    t.num.bitwiseTo(BigInteger.ONE.shiftLeft(h), n, t.num),
                  t.num.dAddOffset(31 - t.num.mod(r).byteValue(), 0),
                  (i = 0),
                  ++t.pqState)
                : 1 === t.pqState
                  ? t.num.bitLength() > l
                    ? (t.pqState = 0)
                    : t.num.isProbablePrime(C(t.num.bitLength()))
                      ? ++t.pqState
                      : t.num.dAddOffset(u[i++ % 8], 0)
                  : 2 === t.pqState
                    ? (t.pqState =
                        0 ===
                        t.num
                          .subtract(BigInteger.ONE)
                          .gcd(t.e)
                          .compareTo(BigInteger.ONE)
                          ? 3
                          : 0)
                    : 3 === t.pqState &&
                      ((t.pqState = 0),
                      null === t.p ? (t.p = t.num) : (t.q = t.num),
                      null !== t.p && null !== t.q && ++t.state,
                      (t.num = null));
            } else if (1 === t.state)
              (t.p.compareTo(t.q) < 0 &&
                ((t.num = t.p), (t.p = t.q), (t.q = t.num)),
                ++t.state);
            else if (2 === t.state)
              ((t.p1 = t.p.subtract(BigInteger.ONE)),
                (t.q1 = t.q.subtract(BigInteger.ONE)),
                (t.phi = t.p1.multiply(t.q1)),
                ++t.state);
            else if (3 === t.state)
              0 === t.phi.gcd(t.e).compareTo(BigInteger.ONE)
                ? ++t.state
                : ((t.p = null), (t.q = null), (t.state = 0));
            else if (4 === t.state)
              ((t.n = t.p.multiply(t.q)),
                t.n.bitLength() === t.bits
                  ? ++t.state
                  : ((t.q = null), (t.state = 0)));
            else if (5 === t.state) {
              var p = t.e.modInverse(t.phi);
              t.keys = {
                privateKey: o.rsa.setPrivateKey(
                  t.n,
                  t.e,
                  p,
                  t.p,
                  t.q,
                  p.mod(t.p1),
                  p.mod(t.q1),
                  t.q.modInverse(t.p),
                ),
                publicKey: o.rsa.setPublicKey(t.n, t.e),
              };
            }
            ((a = +new Date()), (c += a - s), (s = a));
          }
          return null !== t.keys;
        }),
        (o.rsa.generateKeyPair = function (t, e, r, u) {
          if (
            (1 === arguments.length
              ? "object" === typeof t
                ? ((r = t), (t = void 0))
                : "function" === typeof t && ((u = t), (t = void 0))
              : 2 === arguments.length
                ? "number" === typeof t
                  ? "function" === typeof e
                    ? ((u = e), (e = void 0))
                    : "number" !== typeof e && ((r = e), (e = void 0))
                  : ((r = t), (u = e), (t = void 0), (e = void 0))
                : 3 === arguments.length &&
                  ("number" === typeof e
                    ? "function" === typeof r && ((u = r), (r = void 0))
                    : ((u = r), (r = e), (e = void 0))),
            (r = r || {}),
            void 0 === t && (t = r.bits || 2048),
            void 0 === e && (e = r.e || 65537),
            !a.options.usePureJavaScript &&
              !r.prng &&
              t >= 256 &&
              t <= 16384 &&
              (65537 === e || 3 === e))
          )
            if (u) {
              if (E("generateKeyPair"))
                return i.generateKeyPair(
                  "rsa",
                  {
                    modulusLength: t,
                    publicExponent: e,
                    publicKeyEncoding: { type: "spki", format: "pem" },
                    privateKeyEncoding: { type: "pkcs8", format: "pem" },
                  },
                  function (t, e, r) {
                    if (t) return u(t);
                    u(null, {
                      privateKey: o.privateKeyFromPem(r),
                      publicKey: o.publicKeyFromPem(e),
                    });
                  },
                );
              if (S("generateKey") && S("exportKey"))
                return s.globalScope.crypto.subtle
                  .generateKey(
                    {
                      name: "RSASSA-PKCS1-v1_5",
                      modulusLength: t,
                      publicExponent: I(e),
                      hash: { name: "SHA-256" },
                    },
                    !0,
                    ["sign", "verify"],
                  )
                  .then(function (t) {
                    return s.globalScope.crypto.subtle.exportKey(
                      "pkcs8",
                      t.privateKey,
                    );
                  })
                  .then(void 0, function (t) {
                    u(t);
                  })
                  .then(function (t) {
                    if (t) {
                      var e = o.privateKeyFromAsn1(
                        n.fromDer(a.util.createBuffer(t)),
                      );
                      u(null, {
                        privateKey: e,
                        publicKey: o.setRsaPublicKey(e.n, e.e),
                      });
                    }
                  });
              if (T("generateKey") && T("exportKey")) {
                var c = s.globalScope.msCrypto.subtle.generateKey(
                  {
                    name: "RSASSA-PKCS1-v1_5",
                    modulusLength: t,
                    publicExponent: I(e),
                    hash: { name: "SHA-256" },
                  },
                  !0,
                  ["sign", "verify"],
                );
                return (
                  (c.oncomplete = function (t) {
                    var e = t.target.result,
                      r = s.globalScope.msCrypto.subtle.exportKey(
                        "pkcs8",
                        e.privateKey,
                      );
                    ((r.oncomplete = function (t) {
                      var e = t.target.result,
                        r = o.privateKeyFromAsn1(
                          n.fromDer(a.util.createBuffer(e)),
                        );
                      u(null, {
                        privateKey: r,
                        publicKey: o.setRsaPublicKey(r.n, r.e),
                      });
                    }),
                      (r.onerror = function (t) {
                        u(t);
                      }));
                  }),
                  void (c.onerror = function (t) {
                    u(t);
                  })
                );
              }
            } else if (E("generateKeyPairSync")) {
              var l = i.generateKeyPairSync("rsa", {
                modulusLength: t,
                publicExponent: e,
                publicKeyEncoding: { type: "spki", format: "pem" },
                privateKeyEncoding: { type: "pkcs8", format: "pem" },
              });
              return {
                privateKey: o.privateKeyFromPem(l.privateKey),
                publicKey: o.publicKeyFromPem(l.publicKey),
              };
            }
          var h = o.rsa.createKeyPairGenerationState(t, e, r);
          if (!u) return (o.rsa.stepKeyPairGenerationState(h, 0), h.keys);
          m(h, r, u);
        }),
        (o.setRsaPublicKey = o.rsa.setPublicKey =
          function (t, e) {
            var r = {
              n: t,
              e: e,
              encrypt: function (t, e, i) {
                if (
                  ("string" === typeof e
                    ? (e = e.toUpperCase())
                    : void 0 === e && (e = "RSAES-PKCS1-V1_5"),
                  "RSAES-PKCS1-V1_5" === e)
                )
                  e = {
                    encode: function (t, e, r) {
                      return y(t, e, 2).getBytes();
                    },
                  };
                else if ("RSA-OAEP" === e || "RSAES-OAEP" === e)
                  e = {
                    encode: function (t, e) {
                      return a.pkcs1.encode_rsa_oaep(e, t, i);
                    },
                  };
                else if (-1 !== ["RAW", "NONE", "NULL", null].indexOf(e))
                  e = {
                    encode: function (t) {
                      return t;
                    },
                  };
                else if ("string" === typeof e)
                  throw new Error(
                    'Unsupported encryption scheme: "' + e + '".',
                  );
                var n = e.encode(t, r, !0);
                return o.rsa.encrypt(n, r, !0);
              },
              verify: function (t, e, a) {
                ("string" === typeof a
                  ? (a = a.toUpperCase())
                  : void 0 === a && (a = "RSASSA-PKCS1-V1_5"),
                  "RSASSA-PKCS1-V1_5" === a
                    ? (a = {
                        verify: function (t, e) {
                          e = g(e, r, !0);
                          var a = n.fromDer(e);
                          return t === a.value[1].value;
                        },
                      })
                    : ("NONE" !== a && "NULL" !== a && null !== a) ||
                      (a = {
                        verify: function (t, e) {
                          return ((e = g(e, r, !0)), t === e);
                        },
                      }));
                var i = o.rsa.decrypt(e, r, !0, !1);
                return a.verify(t, i, r.n.bitLength());
              },
            };
            return r;
          }),
        (o.setRsaPrivateKey = o.rsa.setPrivateKey =
          function (t, e, r, i, n, s, u, c) {
            var l = {
              n: t,
              e: e,
              d: r,
              p: i,
              q: n,
              dP: s,
              dQ: u,
              qInv: c,
              decrypt: function (t, e, r) {
                "string" === typeof e
                  ? (e = e.toUpperCase())
                  : void 0 === e && (e = "RSAES-PKCS1-V1_5");
                var i = o.rsa.decrypt(t, l, !1, !1);
                if ("RSAES-PKCS1-V1_5" === e) e = { decode: g };
                else if ("RSA-OAEP" === e || "RSAES-OAEP" === e)
                  e = {
                    decode: function (t, e) {
                      return a.pkcs1.decode_rsa_oaep(e, t, r);
                    },
                  };
                else {
                  if (-1 === ["RAW", "NONE", "NULL", null].indexOf(e))
                    throw new Error(
                      'Unsupported encryption scheme: "' + e + '".',
                    );
                  e = {
                    decode: function (t) {
                      return t;
                    },
                  };
                }
                return e.decode(i, l, !1);
              },
              sign: function (t, e) {
                var r = !1;
                ("string" === typeof e && (e = e.toUpperCase()),
                  void 0 === e || "RSASSA-PKCS1-V1_5" === e
                    ? ((e = { encode: f }), (r = 1))
                    : ("NONE" !== e && "NULL" !== e && null !== e) ||
                      ((e = {
                        encode: function () {
                          return t;
                        },
                      }),
                      (r = 1)));
                var a = e.encode(t, l.n.bitLength());
                return o.rsa.encrypt(a, l, r);
              },
            };
            return l;
          }),
        (o.wrapRsaPrivateKey = function (t) {
          return n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
            n.create(
              n.Class.UNIVERSAL,
              n.Type.INTEGER,
              !1,
              n.integerToDer(0).getBytes(),
            ),
            n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
              n.create(
                n.Class.UNIVERSAL,
                n.Type.OID,
                !1,
                n.oidToDer(o.oids.rsaEncryption).getBytes(),
              ),
              n.create(n.Class.UNIVERSAL, n.Type.NULL, !1, ""),
            ]),
            n.create(
              n.Class.UNIVERSAL,
              n.Type.OCTETSTRING,
              !1,
              n.toDer(t).getBytes(),
            ),
          ]);
        }),
        (o.privateKeyFromAsn1 = function (t) {
          var e,
            r,
            i,
            s,
            u,
            h,
            p,
            f,
            d = {},
            y = [];
          if (
            (n.validate(t, c, d, y) &&
              (t = n.fromDer(a.util.createBuffer(d.privateKey))),
            (d = {}),
            (y = []),
            !n.validate(t, l, d, y))
          ) {
            var g = new Error(
              "Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.",
            );
            throw ((g.errors = y), g);
          }
          return (
            (e = a.util.createBuffer(d.privateKeyModulus).toHex()),
            (r = a.util.createBuffer(d.privateKeyPublicExponent).toHex()),
            (i = a.util.createBuffer(d.privateKeyPrivateExponent).toHex()),
            (s = a.util.createBuffer(d.privateKeyPrime1).toHex()),
            (u = a.util.createBuffer(d.privateKeyPrime2).toHex()),
            (h = a.util.createBuffer(d.privateKeyExponent1).toHex()),
            (p = a.util.createBuffer(d.privateKeyExponent2).toHex()),
            (f = a.util.createBuffer(d.privateKeyCoefficient).toHex()),
            o.setRsaPrivateKey(
              new BigInteger(e, 16),
              new BigInteger(r, 16),
              new BigInteger(i, 16),
              new BigInteger(s, 16),
              new BigInteger(u, 16),
              new BigInteger(h, 16),
              new BigInteger(p, 16),
              new BigInteger(f, 16),
            )
          );
        }),
        (o.privateKeyToAsn1 = o.privateKeyToRSAPrivateKey =
          function (t) {
            return n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
              n.create(
                n.Class.UNIVERSAL,
                n.Type.INTEGER,
                !1,
                n.integerToDer(0).getBytes(),
              ),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.n)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.e)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.d)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.p)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.q)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.dP)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.dQ)),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.qInv)),
            ]);
          }),
        (o.publicKeyFromAsn1 = function (t) {
          var e = {},
            r = [];
          if (n.validate(t, p, e, r)) {
            var i = n.derToOid(e.publicKeyOid);
            if (i !== o.oids.rsaEncryption) {
              var s = new Error("Cannot read public key. Unknown OID.");
              throw ((s.oid = i), s);
            }
            t = e.rsaPublicKey;
          }
          if (((r = []), !n.validate(t, h, e, r))) {
            s = new Error(
              "Cannot read public key. ASN.1 object does not contain an RSAPublicKey.",
            );
            throw ((s.errors = r), s);
          }
          var u = a.util.createBuffer(e.publicKeyModulus).toHex(),
            c = a.util.createBuffer(e.publicKeyExponent).toHex();
          return o.setRsaPublicKey(
            new BigInteger(u, 16),
            new BigInteger(c, 16),
          );
        }),
        (o.publicKeyToAsn1 = o.publicKeyToSubjectPublicKeyInfo =
          function (t) {
            return n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
              n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
                n.create(
                  n.Class.UNIVERSAL,
                  n.Type.OID,
                  !1,
                  n.oidToDer(o.oids.rsaEncryption).getBytes(),
                ),
                n.create(n.Class.UNIVERSAL, n.Type.NULL, !1, ""),
              ]),
              n.create(n.Class.UNIVERSAL, n.Type.BITSTRING, !1, [
                o.publicKeyToRSAPublicKey(t),
              ]),
            ]);
          }),
        (o.publicKeyToRSAPublicKey = function (t) {
          return n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
            n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.n)),
            n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, v(t.e)),
          ]);
        }));
    },
    5595: function (t, e, r) {
      var a = r(2908);
      function i(t, e) {
        var r = function () {
          return new a.aes.Algorithm(t, e);
        };
        a.cipher.registerAlgorithm(t, r);
      }
      (r(5596),
        r(6730),
        r(2921),
        (t.exports = a.aes = a.aes || {}),
        (a.aes.startEncrypting = function (t, e, r, a) {
          var i = y({ key: t, output: r, decrypt: !1, mode: a });
          return (i.start(e), i);
        }),
        (a.aes.createEncryptionCipher = function (t, e) {
          return y({ key: t, output: null, decrypt: !1, mode: e });
        }),
        (a.aes.startDecrypting = function (t, e, r, a) {
          var i = y({ key: t, output: r, decrypt: !0, mode: a });
          return (i.start(e), i);
        }),
        (a.aes.createDecryptionCipher = function (t, e) {
          return y({ key: t, output: null, decrypt: !0, mode: e });
        }),
        (a.aes.Algorithm = function (t, e) {
          l || p();
          var r = this;
          ((r.name = t),
            (r.mode = new e({
              blockSize: 16,
              cipher: {
                encrypt: function (t, e) {
                  return d(r._w, t, e, !1);
                },
                decrypt: function (t, e) {
                  return d(r._w, t, e, !0);
                },
              },
            })),
            (r._init = !1));
        }),
        (a.aes.Algorithm.prototype.initialize = function (t) {
          if (!this._init) {
            var e,
              r = t.key;
            if (
              "string" !== typeof r ||
              (16 !== r.length && 24 !== r.length && 32 !== r.length)
            ) {
              if (
                a.util.isArray(r) &&
                (16 === r.length || 24 === r.length || 32 === r.length)
              ) {
                ((e = r), (r = a.util.createBuffer()));
                for (var i = 0; i < e.length; ++i) r.putByte(e[i]);
              }
            } else r = a.util.createBuffer(r);
            if (!a.util.isArray(r)) {
              ((e = r), (r = []));
              var n = e.length();
              if (16 === n || 24 === n || 32 === n) {
                n >>>= 2;
                for (i = 0; i < n; ++i) r.push(e.getInt32());
              }
            }
            if (
              !a.util.isArray(r) ||
              (4 !== r.length && 6 !== r.length && 8 !== r.length)
            )
              throw new Error("Invalid key parameter.");
            var s = this.mode.name,
              o = -1 !== ["CFB", "OFB", "CTR", "GCM"].indexOf(s);
            ((this._w = f(r, t.decrypt && !o)), (this._init = !0));
          }
        }),
        (a.aes._expandKey = function (t, e) {
          return (l || p(), f(t, e));
        }),
        (a.aes._updateBlock = d),
        i("AES-ECB", a.cipher.modes.ecb),
        i("AES-CBC", a.cipher.modes.cbc),
        i("AES-CFB", a.cipher.modes.cfb),
        i("AES-OFB", a.cipher.modes.ofb),
        i("AES-CTR", a.cipher.modes.ctr),
        i("AES-GCM", a.cipher.modes.gcm));
      var n,
        s,
        o,
        u,
        c,
        l = !1,
        h = 4;
      function p() {
        ((l = !0), (o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]));
        for (var t = new Array(256), e = 0; e < 128; ++e)
          ((t[e] = e << 1), (t[e + 128] = ((e + 128) << 1) ^ 283));
        ((n = new Array(256)),
          (s = new Array(256)),
          (u = new Array(4)),
          (c = new Array(4)));
        for (e = 0; e < 4; ++e)
          ((u[e] = new Array(256)), (c[e] = new Array(256)));
        var r,
          a,
          i,
          h,
          p,
          f,
          d,
          y = 0,
          g = 0;
        for (e = 0; e < 256; ++e) {
          ((h = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4)),
            (h = (h >> 8) ^ (255 & h) ^ 99),
            (n[y] = h),
            (s[h] = y),
            (p = t[h]),
            (r = t[y]),
            (a = t[r]),
            (i = t[a]),
            (f = (p << 24) ^ (h << 16) ^ (h << 8) ^ h ^ p),
            (d =
              ((r ^ a ^ i) << 24) ^
              ((y ^ i) << 16) ^
              ((y ^ a ^ i) << 8) ^
              y ^
              r ^
              i));
          for (var m = 0; m < 4; ++m)
            ((u[m][y] = f),
              (c[m][h] = d),
              (f = (f << 24) | (f >>> 8)),
              (d = (d << 24) | (d >>> 8)));
          0 === y ? (y = g = 1) : ((y = r ^ t[t[t[r ^ i]]]), (g ^= t[t[g]]));
        }
      }
      function f(t, e) {
        for (
          var r,
            a = t.slice(0),
            i = 1,
            s = a.length,
            u = s + 6 + 1,
            l = h * u,
            p = s;
          p < l;
          ++p
        )
          ((r = a[p - 1]),
            p % s === 0
              ? ((r =
                  (n[(r >>> 16) & 255] << 24) ^
                  (n[(r >>> 8) & 255] << 16) ^
                  (n[255 & r] << 8) ^
                  n[r >>> 24] ^
                  (o[i] << 24)),
                i++)
              : s > 6 &&
                p % s === 4 &&
                (r =
                  (n[r >>> 24] << 24) ^
                  (n[(r >>> 16) & 255] << 16) ^
                  (n[(r >>> 8) & 255] << 8) ^
                  n[255 & r]),
            (a[p] = a[p - s] ^ r));
        if (e) {
          var f,
            d = c[0],
            y = c[1],
            g = c[2],
            m = c[3],
            v = a.slice(0);
          l = a.length;
          p = 0;
          for (var C = l - h; p < l; p += h, C -= h)
            if (0 === p || p === l - h)
              ((v[p] = a[C]),
                (v[p + 1] = a[C + 3]),
                (v[p + 2] = a[C + 2]),
                (v[p + 3] = a[C + 1]));
            else
              for (var E = 0; E < h; ++E)
                ((f = a[C + E]),
                  (v[p + (3 & -E)] =
                    d[n[f >>> 24]] ^
                    y[n[(f >>> 16) & 255]] ^
                    g[n[(f >>> 8) & 255]] ^
                    m[n[255 & f]]));
          a = v;
        }
        return a;
      }
      function d(t, e, r, a) {
        var i,
          o,
          l,
          h,
          p,
          f,
          d,
          y,
          g,
          m,
          v,
          C,
          E = t.length / 4 - 1;
        (a
          ? ((i = c[0]), (o = c[1]), (l = c[2]), (h = c[3]), (p = s))
          : ((i = u[0]), (o = u[1]), (l = u[2]), (h = u[3]), (p = n)),
          (f = e[0] ^ t[0]),
          (d = e[a ? 3 : 1] ^ t[1]),
          (y = e[2] ^ t[2]),
          (g = e[a ? 1 : 3] ^ t[3]));
        for (var S = 3, T = 1; T < E; ++T)
          ((m =
            i[f >>> 24] ^
            o[(d >>> 16) & 255] ^
            l[(y >>> 8) & 255] ^
            h[255 & g] ^
            t[++S]),
            (v =
              i[d >>> 24] ^
              o[(y >>> 16) & 255] ^
              l[(g >>> 8) & 255] ^
              h[255 & f] ^
              t[++S]),
            (C =
              i[y >>> 24] ^
              o[(g >>> 16) & 255] ^
              l[(f >>> 8) & 255] ^
              h[255 & d] ^
              t[++S]),
            (g =
              i[g >>> 24] ^
              o[(f >>> 16) & 255] ^
              l[(d >>> 8) & 255] ^
              h[255 & y] ^
              t[++S]),
            (f = m),
            (d = v),
            (y = C));
        ((r[0] =
          (p[f >>> 24] << 24) ^
          (p[(d >>> 16) & 255] << 16) ^
          (p[(y >>> 8) & 255] << 8) ^
          p[255 & g] ^
          t[++S]),
          (r[a ? 3 : 1] =
            (p[d >>> 24] << 24) ^
            (p[(y >>> 16) & 255] << 16) ^
            (p[(g >>> 8) & 255] << 8) ^
            p[255 & f] ^
            t[++S]),
          (r[2] =
            (p[y >>> 24] << 24) ^
            (p[(g >>> 16) & 255] << 16) ^
            (p[(f >>> 8) & 255] << 8) ^
            p[255 & d] ^
            t[++S]),
          (r[a ? 1 : 3] =
            (p[g >>> 24] << 24) ^
            (p[(f >>> 16) & 255] << 16) ^
            (p[(d >>> 8) & 255] << 8) ^
            p[255 & y] ^
            t[++S]));
      }
      function y(t) {
        t = t || {};
        var e,
          r = (t.mode || "CBC").toUpperCase(),
          i = "AES-" + r;
        e = t.decrypt
          ? a.cipher.createDecipher(i, t.key)
          : a.cipher.createCipher(i, t.key);
        var n = e.start;
        return (
          (e.start = function (t, r) {
            var i = null;
            (r instanceof a.util.ByteBuffer && ((i = r), (r = {})),
              (r = r || {}),
              (r.output = i),
              (r.iv = t),
              n.call(e, r));
          }),
          e
        );
      }
    },
    5596: function (t, e, r) {
      var a = r(2908);
      (r(2921),
        (t.exports = a.cipher = a.cipher || {}),
        (a.cipher.algorithms = a.cipher.algorithms || {}),
        (a.cipher.createCipher = function (t, e) {
          var r = t;
          if (
            ("string" === typeof r &&
              ((r = a.cipher.getAlgorithm(r)), r && (r = r())),
            !r)
          )
            throw new Error("Unsupported algorithm: " + t);
          return new a.cipher.BlockCipher({
            algorithm: r,
            key: e,
            decrypt: !1,
          });
        }),
        (a.cipher.createDecipher = function (t, e) {
          var r = t;
          if (
            ("string" === typeof r &&
              ((r = a.cipher.getAlgorithm(r)), r && (r = r())),
            !r)
          )
            throw new Error("Unsupported algorithm: " + t);
          return new a.cipher.BlockCipher({
            algorithm: r,
            key: e,
            decrypt: !0,
          });
        }),
        (a.cipher.registerAlgorithm = function (t, e) {
          ((t = t.toUpperCase()), (a.cipher.algorithms[t] = e));
        }),
        (a.cipher.getAlgorithm = function (t) {
          return (
            (t = t.toUpperCase()),
            t in a.cipher.algorithms ? a.cipher.algorithms[t] : null
          );
        }));
      var i = (a.cipher.BlockCipher = function (t) {
        ((this.algorithm = t.algorithm),
          (this.mode = this.algorithm.mode),
          (this.blockSize = this.mode.blockSize),
          (this._finish = !1),
          (this._input = null),
          (this.output = null),
          (this._op = t.decrypt ? this.mode.decrypt : this.mode.encrypt),
          (this._decrypt = t.decrypt),
          this.algorithm.initialize(t));
      });
      ((i.prototype.start = function (t) {
        t = t || {};
        var e = {};
        for (var r in t) e[r] = t[r];
        ((e.decrypt = this._decrypt),
          (this._finish = !1),
          (this._input = a.util.createBuffer()),
          (this.output = t.output || a.util.createBuffer()),
          this.mode.start(e));
      }),
        (i.prototype.update = function (t) {
          t && this._input.putBuffer(t);
          while (
            !this._op.call(this.mode, this._input, this.output, this._finish) &&
            !this._finish
          );
          this._input.compact();
        }),
        (i.prototype.finish = function (t) {
          !t ||
            ("ECB" !== this.mode.name && "CBC" !== this.mode.name) ||
            ((this.mode.pad = function (e) {
              return t(this.blockSize, e, !1);
            }),
            (this.mode.unpad = function (e) {
              return t(this.blockSize, e, !0);
            }));
          var e = {};
          return (
            (e.decrypt = this._decrypt),
            (e.overflow = this._input.length() % this.blockSize),
            !(
              !this._decrypt &&
              this.mode.pad &&
              !this.mode.pad(this._input, e)
            ) &&
              ((this._finish = !0),
              this.update(),
              !(
                this._decrypt &&
                this.mode.unpad &&
                !this.mode.unpad(this.output, e)
              ) &&
                !(
                  this.mode.afterFinish &&
                  !this.mode.afterFinish(this.output, e)
                ))
          );
        }));
    },
    5598: function (t, e, r) {
      var a = r(2908);
      (r(3458), r(2921));
      var i = (t.exports = a.hmac = a.hmac || {});
      i.create = function () {
        var t = null,
          e = null,
          r = null,
          i = null,
          n = {
            start: function (n, s) {
              if (null !== n)
                if ("string" === typeof n) {
                  if (((n = n.toLowerCase()), !(n in a.md.algorithms)))
                    throw new Error('Unknown hash algorithm "' + n + '"');
                  e = a.md.algorithms[n].create();
                } else e = n;
              if (null === s) s = t;
              else {
                if ("string" === typeof s) s = a.util.createBuffer(s);
                else if (a.util.isArray(s)) {
                  var o = s;
                  s = a.util.createBuffer();
                  for (var u = 0; u < o.length; ++u) s.putByte(o[u]);
                }
                var c = s.length();
                (c > e.blockLength &&
                  (e.start(), e.update(s.bytes()), (s = e.digest())),
                  (r = a.util.createBuffer()),
                  (i = a.util.createBuffer()),
                  (c = s.length()));
                for (u = 0; u < c; ++u) {
                  o = s.at(u);
                  (r.putByte(54 ^ o), i.putByte(92 ^ o));
                }
                if (c < e.blockLength)
                  for (o = e.blockLength - c, u = 0; u < o; ++u)
                    (r.putByte(54), i.putByte(92));
                ((t = s), (r = r.bytes()), (i = i.bytes()));
              }
              (e.start(), e.update(r));
            },
            update: function (t) {
              e.update(t);
            },
            getMac: function () {
              var t = e.digest().bytes();
              return (e.start(), e.update(i), e.update(t), e.digest());
            },
          };
        return ((n.digest = n.getMac), n);
      };
    },
    5601: function (t, e, r) {
      var a = r(2908);
      r(2921);
      var i = (t.exports = a.pem = a.pem || {});
      function n(t) {
        for (
          var e = t.name + ": ",
            r = [],
            a = function (t, e) {
              return " " + e;
            },
            i = 0;
          i < t.values.length;
          ++i
        )
          r.push(t.values[i].replace(/^(\S+\r\n)/, a));
        e += r.join(",") + "\r\n";
        var n = 0,
          s = -1;
        for (i = 0; i < e.length; ++i, ++n)
          if (n > 65 && -1 !== s) {
            var o = e[s];
            ("," === o
              ? (++s, (e = e.substr(0, s) + "\r\n " + e.substr(s)))
              : (e = e.substr(0, s) + "\r\n" + o + e.substr(s + 1)),
              (n = i - s - 1),
              (s = -1),
              ++i);
          } else (" " !== e[i] && "\t" !== e[i] && "," !== e[i]) || (s = i);
        return e;
      }
      function s(t) {
        return t.replace(/^\s+/, "");
      }
      ((i.encode = function (t, e) {
        e = e || {};
        var r,
          i = "-----BEGIN " + t.type + "-----\r\n";
        if (
          (t.procType &&
            ((r = {
              name: "Proc-Type",
              values: [String(t.procType.version), t.procType.type],
            }),
            (i += n(r))),
          t.contentDomain &&
            ((r = { name: "Content-Domain", values: [t.contentDomain] }),
            (i += n(r))),
          t.dekInfo &&
            ((r = { name: "DEK-Info", values: [t.dekInfo.algorithm] }),
            t.dekInfo.parameters && r.values.push(t.dekInfo.parameters),
            (i += n(r))),
          t.headers)
        )
          for (var s = 0; s < t.headers.length; ++s) i += n(t.headers[s]);
        return (
          t.procType && (i += "\r\n"),
          (i += a.util.encode64(t.body, e.maxline || 64) + "\r\n"),
          (i += "-----END " + t.type + "-----\r\n"),
          i
        );
      }),
        (i.decode = function (t) {
          var e,
            r = [],
            i =
              /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
            n = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
            o = /\r?\n/;
          while (1) {
            if (((e = i.exec(t)), !e)) break;
            var u = {
              type: e[1],
              procType: null,
              contentDomain: null,
              dekInfo: null,
              headers: [],
              body: a.util.decode64(e[3]),
            };
            if ((r.push(u), e[2])) {
              var c = e[2].split(o),
                l = 0;
              while (e && l < c.length) {
                for (
                  var h = c[l].replace(/\s+$/, ""), p = l + 1;
                  p < c.length;
                  ++p
                ) {
                  var f = c[p];
                  if (!/\s/.test(f[0])) break;
                  ((h += f), (l = p));
                }
                if (((e = h.match(n)), e)) {
                  for (
                    var d = { name: e[1], values: [] },
                      y = e[2].split(","),
                      g = 0;
                    g < y.length;
                    ++g
                  )
                    d.values.push(s(y[g]));
                  if (u.procType)
                    if (u.contentDomain || "Content-Domain" !== d.name)
                      if (u.dekInfo || "DEK-Info" !== d.name) u.headers.push(d);
                      else {
                        if (0 === d.values.length)
                          throw new Error(
                            'Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.',
                          );
                        u.dekInfo = {
                          algorithm: y[0],
                          parameters: y[1] || null,
                        };
                      }
                    else u.contentDomain = y[0] || "";
                  else {
                    if ("Proc-Type" !== d.name)
                      throw new Error(
                        'Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".',
                      );
                    if (2 !== d.values.length)
                      throw new Error(
                        'Invalid PEM formatted message. The "Proc-Type" header must have two subfields.',
                      );
                    u.procType = { version: y[0], type: y[1] };
                  }
                }
                ++l;
              }
              if ("ENCRYPTED" === u.procType && !u.dekInfo)
                throw new Error(
                  'Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".',
                );
            }
          }
          if (0 === r.length) throw new Error("Invalid PEM formatted message.");
          return r;
        }));
    },
    6730: function (t, e, r) {
      var a = r(2908);
      (r(2921), (a.cipher = a.cipher || {}));
      var i = (t.exports = a.cipher.modes = a.cipher.modes || {});
      function n(t) {
        if (
          ("string" === typeof t && (t = a.util.createBuffer(t)),
          a.util.isArray(t) && t.length > 4)
        ) {
          var e = t;
          t = a.util.createBuffer();
          for (var r = 0; r < e.length; ++r) t.putByte(e[r]);
        }
        return (
          a.util.isArray(t) ||
            (t = [t.getInt32(), t.getInt32(), t.getInt32(), t.getInt32()]),
          t
        );
      }
      function s(t) {
        t[t.length - 1] = (t[t.length - 1] + 1) & 4294967295;
      }
      function o(t) {
        return [(t / 4294967296) | 0, 4294967295 & t];
      }
      ((i.ecb = function (t) {
        ((t = t || {}),
          (this.name = "ECB"),
          (this.cipher = t.cipher),
          (this.blockSize = t.blockSize || 16),
          (this._ints = this.blockSize / 4),
          (this._inBlock = new Array(this._ints)),
          (this._outBlock = new Array(this._ints)));
      }),
        (i.ecb.prototype.start = function (t) {}),
        (i.ecb.prototype.encrypt = function (t, e, r) {
          if (t.length() < this.blockSize && !(r && t.length() > 0)) return !0;
          for (var a = 0; a < this._ints; ++a) this._inBlock[a] = t.getInt32();
          this.cipher.encrypt(this._inBlock, this._outBlock);
          for (a = 0; a < this._ints; ++a) e.putInt32(this._outBlock[a]);
        }),
        (i.ecb.prototype.decrypt = function (t, e, r) {
          if (t.length() < this.blockSize && !(r && t.length() > 0)) return !0;
          for (var a = 0; a < this._ints; ++a) this._inBlock[a] = t.getInt32();
          this.cipher.decrypt(this._inBlock, this._outBlock);
          for (a = 0; a < this._ints; ++a) e.putInt32(this._outBlock[a]);
        }),
        (i.ecb.prototype.pad = function (t, e) {
          var r =
            t.length() === this.blockSize
              ? this.blockSize
              : this.blockSize - t.length();
          return (t.fillWithByte(r, r), !0);
        }),
        (i.ecb.prototype.unpad = function (t, e) {
          if (e.overflow > 0) return !1;
          var r = t.length(),
            a = t.at(r - 1);
          return !(a > this.blockSize << 2) && (t.truncate(a), !0);
        }),
        (i.cbc = function (t) {
          ((t = t || {}),
            (this.name = "CBC"),
            (this.cipher = t.cipher),
            (this.blockSize = t.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = new Array(this._ints)),
            (this._outBlock = new Array(this._ints)));
        }),
        (i.cbc.prototype.start = function (t) {
          if (null === t.iv) {
            if (!this._prev) throw new Error("Invalid IV parameter.");
            this._iv = this._prev.slice(0);
          } else {
            if (!("iv" in t)) throw new Error("Invalid IV parameter.");
            ((this._iv = n(t.iv)), (this._prev = this._iv.slice(0)));
          }
        }),
        (i.cbc.prototype.encrypt = function (t, e, r) {
          if (t.length() < this.blockSize && !(r && t.length() > 0)) return !0;
          for (var a = 0; a < this._ints; ++a)
            this._inBlock[a] = this._prev[a] ^ t.getInt32();
          this.cipher.encrypt(this._inBlock, this._outBlock);
          for (a = 0; a < this._ints; ++a) e.putInt32(this._outBlock[a]);
          this._prev = this._outBlock;
        }),
        (i.cbc.prototype.decrypt = function (t, e, r) {
          if (t.length() < this.blockSize && !(r && t.length() > 0)) return !0;
          for (var a = 0; a < this._ints; ++a) this._inBlock[a] = t.getInt32();
          this.cipher.decrypt(this._inBlock, this._outBlock);
          for (a = 0; a < this._ints; ++a)
            e.putInt32(this._prev[a] ^ this._outBlock[a]);
          this._prev = this._inBlock.slice(0);
        }),
        (i.cbc.prototype.pad = function (t, e) {
          var r =
            t.length() === this.blockSize
              ? this.blockSize
              : this.blockSize - t.length();
          return (t.fillWithByte(r, r), !0);
        }),
        (i.cbc.prototype.unpad = function (t, e) {
          if (e.overflow > 0) return !1;
          var r = t.length(),
            a = t.at(r - 1);
          return !(a > this.blockSize << 2) && (t.truncate(a), !0);
        }),
        (i.cfb = function (t) {
          ((t = t || {}),
            (this.name = "CFB"),
            (this.cipher = t.cipher),
            (this.blockSize = t.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = null),
            (this._outBlock = new Array(this._ints)),
            (this._partialBlock = new Array(this._ints)),
            (this._partialOutput = a.util.createBuffer()),
            (this._partialBytes = 0));
        }),
        (i.cfb.prototype.start = function (t) {
          if (!("iv" in t)) throw new Error("Invalid IV parameter.");
          ((this._iv = n(t.iv)),
            (this._inBlock = this._iv.slice(0)),
            (this._partialBytes = 0));
        }),
        (i.cfb.prototype.encrypt = function (t, e, r) {
          var a = t.length();
          if (0 === a) return !0;
          if (
            (this.cipher.encrypt(this._inBlock, this._outBlock),
            0 === this._partialBytes && a >= this.blockSize)
          )
            for (var i = 0; i < this._ints; ++i)
              ((this._inBlock[i] = t.getInt32() ^ this._outBlock[i]),
                e.putInt32(this._inBlock[i]));
          else {
            var n = (this.blockSize - a) % this.blockSize;
            (n > 0 && (n = this.blockSize - n), this._partialOutput.clear());
            for (i = 0; i < this._ints; ++i)
              ((this._partialBlock[i] = t.getInt32() ^ this._outBlock[i]),
                this._partialOutput.putInt32(this._partialBlock[i]));
            if (n > 0) t.read -= this.blockSize;
            else
              for (i = 0; i < this._ints; ++i)
                this._inBlock[i] = this._partialBlock[i];
            if (
              (this._partialBytes > 0 &&
                this._partialOutput.getBytes(this._partialBytes),
              n > 0 && !r)
            )
              return (
                e.putBytes(
                  this._partialOutput.getBytes(n - this._partialBytes),
                ),
                (this._partialBytes = n),
                !0
              );
            (e.putBytes(this._partialOutput.getBytes(a - this._partialBytes)),
              (this._partialBytes = 0));
          }
        }),
        (i.cfb.prototype.decrypt = function (t, e, r) {
          var a = t.length();
          if (0 === a) return !0;
          if (
            (this.cipher.encrypt(this._inBlock, this._outBlock),
            0 === this._partialBytes && a >= this.blockSize)
          )
            for (var i = 0; i < this._ints; ++i)
              ((this._inBlock[i] = t.getInt32()),
                e.putInt32(this._inBlock[i] ^ this._outBlock[i]));
          else {
            var n = (this.blockSize - a) % this.blockSize;
            (n > 0 && (n = this.blockSize - n), this._partialOutput.clear());
            for (i = 0; i < this._ints; ++i)
              ((this._partialBlock[i] = t.getInt32()),
                this._partialOutput.putInt32(
                  this._partialBlock[i] ^ this._outBlock[i],
                ));
            if (n > 0) t.read -= this.blockSize;
            else
              for (i = 0; i < this._ints; ++i)
                this._inBlock[i] = this._partialBlock[i];
            if (
              (this._partialBytes > 0 &&
                this._partialOutput.getBytes(this._partialBytes),
              n > 0 && !r)
            )
              return (
                e.putBytes(
                  this._partialOutput.getBytes(n - this._partialBytes),
                ),
                (this._partialBytes = n),
                !0
              );
            (e.putBytes(this._partialOutput.getBytes(a - this._partialBytes)),
              (this._partialBytes = 0));
          }
        }),
        (i.ofb = function (t) {
          ((t = t || {}),
            (this.name = "OFB"),
            (this.cipher = t.cipher),
            (this.blockSize = t.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = null),
            (this._outBlock = new Array(this._ints)),
            (this._partialOutput = a.util.createBuffer()),
            (this._partialBytes = 0));
        }),
        (i.ofb.prototype.start = function (t) {
          if (!("iv" in t)) throw new Error("Invalid IV parameter.");
          ((this._iv = n(t.iv)),
            (this._inBlock = this._iv.slice(0)),
            (this._partialBytes = 0));
        }),
        (i.ofb.prototype.encrypt = function (t, e, r) {
          var a = t.length();
          if (0 === t.length()) return !0;
          if (
            (this.cipher.encrypt(this._inBlock, this._outBlock),
            0 === this._partialBytes && a >= this.blockSize)
          )
            for (var i = 0; i < this._ints; ++i)
              (e.putInt32(t.getInt32() ^ this._outBlock[i]),
                (this._inBlock[i] = this._outBlock[i]));
          else {
            var n = (this.blockSize - a) % this.blockSize;
            (n > 0 && (n = this.blockSize - n), this._partialOutput.clear());
            for (i = 0; i < this._ints; ++i)
              this._partialOutput.putInt32(t.getInt32() ^ this._outBlock[i]);
            if (n > 0) t.read -= this.blockSize;
            else
              for (i = 0; i < this._ints; ++i)
                this._inBlock[i] = this._outBlock[i];
            if (
              (this._partialBytes > 0 &&
                this._partialOutput.getBytes(this._partialBytes),
              n > 0 && !r)
            )
              return (
                e.putBytes(
                  this._partialOutput.getBytes(n - this._partialBytes),
                ),
                (this._partialBytes = n),
                !0
              );
            (e.putBytes(this._partialOutput.getBytes(a - this._partialBytes)),
              (this._partialBytes = 0));
          }
        }),
        (i.ofb.prototype.decrypt = i.ofb.prototype.encrypt),
        (i.ctr = function (t) {
          ((t = t || {}),
            (this.name = "CTR"),
            (this.cipher = t.cipher),
            (this.blockSize = t.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = null),
            (this._outBlock = new Array(this._ints)),
            (this._partialOutput = a.util.createBuffer()),
            (this._partialBytes = 0));
        }),
        (i.ctr.prototype.start = function (t) {
          if (!("iv" in t)) throw new Error("Invalid IV parameter.");
          ((this._iv = n(t.iv)),
            (this._inBlock = this._iv.slice(0)),
            (this._partialBytes = 0));
        }),
        (i.ctr.prototype.encrypt = function (t, e, r) {
          var a = t.length();
          if (0 === a) return !0;
          if (
            (this.cipher.encrypt(this._inBlock, this._outBlock),
            0 === this._partialBytes && a >= this.blockSize)
          )
            for (var i = 0; i < this._ints; ++i)
              e.putInt32(t.getInt32() ^ this._outBlock[i]);
          else {
            var n = (this.blockSize - a) % this.blockSize;
            (n > 0 && (n = this.blockSize - n), this._partialOutput.clear());
            for (i = 0; i < this._ints; ++i)
              this._partialOutput.putInt32(t.getInt32() ^ this._outBlock[i]);
            if (
              (n > 0 && (t.read -= this.blockSize),
              this._partialBytes > 0 &&
                this._partialOutput.getBytes(this._partialBytes),
              n > 0 && !r)
            )
              return (
                e.putBytes(
                  this._partialOutput.getBytes(n - this._partialBytes),
                ),
                (this._partialBytes = n),
                !0
              );
            (e.putBytes(this._partialOutput.getBytes(a - this._partialBytes)),
              (this._partialBytes = 0));
          }
          s(this._inBlock);
        }),
        (i.ctr.prototype.decrypt = i.ctr.prototype.encrypt),
        (i.gcm = function (t) {
          ((t = t || {}),
            (this.name = "GCM"),
            (this.cipher = t.cipher),
            (this.blockSize = t.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = new Array(this._ints)),
            (this._outBlock = new Array(this._ints)),
            (this._partialOutput = a.util.createBuffer()),
            (this._partialBytes = 0),
            (this._R = 3774873600));
        }),
        (i.gcm.prototype.start = function (t) {
          if (!("iv" in t)) throw new Error("Invalid IV parameter.");
          var e,
            r = a.util.createBuffer(t.iv);
          if (
            ((this._cipherLength = 0),
            (e =
              "additionalData" in t
                ? a.util.createBuffer(t.additionalData)
                : a.util.createBuffer()),
            (this._tagLength = "tagLength" in t ? t.tagLength : 128),
            (this._tag = null),
            t.decrypt &&
              ((this._tag = a.util.createBuffer(t.tag).getBytes()),
              this._tag.length !== this._tagLength / 8))
          )
            throw new Error("Authentication tag does not match tag length.");
          ((this._hashBlock = new Array(this._ints)),
            (this.tag = null),
            (this._hashSubkey = new Array(this._ints)),
            this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey),
            (this.componentBits = 4),
            (this._m = this.generateHashTable(
              this._hashSubkey,
              this.componentBits,
            )));
          var i = r.length();
          if (12 === i)
            this._j0 = [r.getInt32(), r.getInt32(), r.getInt32(), 1];
          else {
            this._j0 = [0, 0, 0, 0];
            while (r.length() > 0)
              this._j0 = this.ghash(this._hashSubkey, this._j0, [
                r.getInt32(),
                r.getInt32(),
                r.getInt32(),
                r.getInt32(),
              ]);
            this._j0 = this.ghash(
              this._hashSubkey,
              this._j0,
              [0, 0].concat(o(8 * i)),
            );
          }
          ((this._inBlock = this._j0.slice(0)),
            s(this._inBlock),
            (this._partialBytes = 0),
            (e = a.util.createBuffer(e)),
            (this._aDataLength = o(8 * e.length())));
          var n = e.length() % this.blockSize;
          (n && e.fillWithByte(0, this.blockSize - n),
            (this._s = [0, 0, 0, 0]));
          while (e.length() > 0)
            this._s = this.ghash(this._hashSubkey, this._s, [
              e.getInt32(),
              e.getInt32(),
              e.getInt32(),
              e.getInt32(),
            ]);
        }),
        (i.gcm.prototype.encrypt = function (t, e, r) {
          var a = t.length();
          if (0 === a) return !0;
          if (
            (this.cipher.encrypt(this._inBlock, this._outBlock),
            0 === this._partialBytes && a >= this.blockSize)
          ) {
            for (var i = 0; i < this._ints; ++i)
              e.putInt32((this._outBlock[i] ^= t.getInt32()));
            this._cipherLength += this.blockSize;
          } else {
            var n = (this.blockSize - a) % this.blockSize;
            (n > 0 && (n = this.blockSize - n), this._partialOutput.clear());
            for (i = 0; i < this._ints; ++i)
              this._partialOutput.putInt32(t.getInt32() ^ this._outBlock[i]);
            if (n <= 0 || r) {
              if (r) {
                var o = a % this.blockSize;
                ((this._cipherLength += o),
                  this._partialOutput.truncate(this.blockSize - o));
              } else this._cipherLength += this.blockSize;
              for (i = 0; i < this._ints; ++i)
                this._outBlock[i] = this._partialOutput.getInt32();
              this._partialOutput.read -= this.blockSize;
            }
            if (
              (this._partialBytes > 0 &&
                this._partialOutput.getBytes(this._partialBytes),
              n > 0 && !r)
            )
              return (
                (t.read -= this.blockSize),
                e.putBytes(
                  this._partialOutput.getBytes(n - this._partialBytes),
                ),
                (this._partialBytes = n),
                !0
              );
            (e.putBytes(this._partialOutput.getBytes(a - this._partialBytes)),
              (this._partialBytes = 0));
          }
          ((this._s = this.ghash(this._hashSubkey, this._s, this._outBlock)),
            s(this._inBlock));
        }),
        (i.gcm.prototype.decrypt = function (t, e, r) {
          var a = t.length();
          if (a < this.blockSize && !(r && a > 0)) return !0;
          (this.cipher.encrypt(this._inBlock, this._outBlock),
            s(this._inBlock),
            (this._hashBlock[0] = t.getInt32()),
            (this._hashBlock[1] = t.getInt32()),
            (this._hashBlock[2] = t.getInt32()),
            (this._hashBlock[3] = t.getInt32()),
            (this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock)));
          for (var i = 0; i < this._ints; ++i)
            e.putInt32(this._outBlock[i] ^ this._hashBlock[i]);
          a < this.blockSize
            ? (this._cipherLength += a % this.blockSize)
            : (this._cipherLength += this.blockSize);
        }),
        (i.gcm.prototype.afterFinish = function (t, e) {
          var r = !0;
          (e.decrypt && e.overflow && t.truncate(this.blockSize - e.overflow),
            (this.tag = a.util.createBuffer()));
          var i = this._aDataLength.concat(o(8 * this._cipherLength));
          this._s = this.ghash(this._hashSubkey, this._s, i);
          var n = [];
          this.cipher.encrypt(this._j0, n);
          for (var s = 0; s < this._ints; ++s)
            this.tag.putInt32(this._s[s] ^ n[s]);
          return (
            this.tag.truncate(this.tag.length() % (this._tagLength / 8)),
            e.decrypt && this.tag.bytes() !== this._tag && (r = !1),
            r
          );
        }),
        (i.gcm.prototype.multiply = function (t, e) {
          for (var r = [0, 0, 0, 0], a = e.slice(0), i = 0; i < 128; ++i) {
            var n = t[(i / 32) | 0] & (1 << (31 - (i % 32)));
            (n &&
              ((r[0] ^= a[0]), (r[1] ^= a[1]), (r[2] ^= a[2]), (r[3] ^= a[3])),
              this.pow(a, a));
          }
          return r;
        }),
        (i.gcm.prototype.pow = function (t, e) {
          for (var r = 1 & t[3], a = 3; a > 0; --a)
            e[a] = (t[a] >>> 1) | ((1 & t[a - 1]) << 31);
          ((e[0] = t[0] >>> 1), r && (e[0] ^= this._R));
        }),
        (i.gcm.prototype.tableMultiply = function (t) {
          for (var e = [0, 0, 0, 0], r = 0; r < 32; ++r) {
            var a = (r / 8) | 0,
              i = (t[a] >>> (4 * (7 - (r % 8)))) & 15,
              n = this._m[r][i];
            ((e[0] ^= n[0]), (e[1] ^= n[1]), (e[2] ^= n[2]), (e[3] ^= n[3]));
          }
          return e;
        }),
        (i.gcm.prototype.ghash = function (t, e, r) {
          return (
            (e[0] ^= r[0]),
            (e[1] ^= r[1]),
            (e[2] ^= r[2]),
            (e[3] ^= r[3]),
            this.tableMultiply(e)
          );
        }),
        (i.gcm.prototype.generateHashTable = function (t, e) {
          for (
            var r = 8 / e, a = 4 * r, i = 16 * r, n = new Array(i), s = 0;
            s < i;
            ++s
          ) {
            var o = [0, 0, 0, 0],
              u = (s / a) | 0,
              c = (a - 1 - (s % a)) * e;
            ((o[u] = (1 << (e - 1)) << c),
              (n[s] = this.generateSubHashTable(this.multiply(o, t), e)));
          }
          return n;
        }),
        (i.gcm.prototype.generateSubHashTable = function (t, e) {
          var r = 1 << e,
            a = r >>> 1,
            i = new Array(r);
          i[a] = t.slice(0);
          var n = a >>> 1;
          while (n > 0) (this.pow(i[2 * n], (i[n] = [])), (n >>= 1));
          n = 2;
          while (n < a) {
            for (var s = 1; s < n; ++s) {
              var o = i[n],
                u = i[s];
              i[n + s] = [o[0] ^ u[0], o[1] ^ u[1], o[2] ^ u[2], o[3] ^ u[3]];
            }
            n *= 2;
          }
          for (i[0] = [0, 0, 0, 0], n = a + 1; n < r; ++n) {
            var c = i[n ^ a];
            i[n] = [t[0] ^ c[0], t[1] ^ c[1], t[2] ^ c[2], t[3] ^ c[3]];
          }
          return i;
        }));
    },
    6731: function (t, e, r) {
      var a = r(2908);
      (r(3458), r(2921));
      var i = (t.exports = a.sha256 = a.sha256 || {});
      ((a.md.sha256 = a.md.algorithms.sha256 = i),
        (i.create = function () {
          s || u();
          var t = null,
            e = a.util.createBuffer(),
            r = new Array(64),
            i = {
              algorithm: "sha256",
              blockLength: 64,
              digestLength: 32,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                ((i.messageLength = 0),
                  (i.fullMessageLength = i.messageLength64 = []));
                for (var r = i.messageLengthSize / 4, n = 0; n < r; ++n)
                  i.fullMessageLength.push(0);
                return (
                  (e = a.util.createBuffer()),
                  (t = {
                    h0: 1779033703,
                    h1: 3144134277,
                    h2: 1013904242,
                    h3: 2773480762,
                    h4: 1359893119,
                    h5: 2600822924,
                    h6: 528734635,
                    h7: 1541459225,
                  }),
                  i
                );
              },
            };
          return (
            i.start(),
            (i.update = function (n, s) {
              "utf8" === s && (n = a.util.encodeUtf8(n));
              var o = n.length;
              ((i.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]));
              for (var u = i.fullMessageLength.length - 1; u >= 0; --u)
                ((i.fullMessageLength[u] += o[1]),
                  (o[1] = o[0] + ((i.fullMessageLength[u] / 4294967296) >>> 0)),
                  (i.fullMessageLength[u] = i.fullMessageLength[u] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0));
              return (
                e.putBytes(n),
                c(t, r, e),
                (e.read > 2048 || 0 === e.length()) && e.compact(),
                i
              );
            }),
            (i.digest = function () {
              var s = a.util.createBuffer();
              s.putBytes(e.bytes());
              var o,
                u,
                l =
                  i.fullMessageLength[i.fullMessageLength.length - 1] +
                  i.messageLengthSize,
                h = l & (i.blockLength - 1);
              s.putBytes(n.substr(0, i.blockLength - h));
              for (
                var p = 8 * i.fullMessageLength[0], f = 0;
                f < i.fullMessageLength.length - 1;
                ++f
              )
                ((o = 8 * i.fullMessageLength[f + 1]),
                  (u = (o / 4294967296) >>> 0),
                  (p += u),
                  s.putInt32(p >>> 0),
                  (p = o >>> 0));
              s.putInt32(p);
              var d = {
                h0: t.h0,
                h1: t.h1,
                h2: t.h2,
                h3: t.h3,
                h4: t.h4,
                h5: t.h5,
                h6: t.h6,
                h7: t.h7,
              };
              c(d, r, s);
              var y = a.util.createBuffer();
              return (
                y.putInt32(d.h0),
                y.putInt32(d.h1),
                y.putInt32(d.h2),
                y.putInt32(d.h3),
                y.putInt32(d.h4),
                y.putInt32(d.h5),
                y.putInt32(d.h6),
                y.putInt32(d.h7),
                y
              );
            }),
            i
          );
        }));
      var n = null,
        s = !1,
        o = null;
      function u() {
        ((n = String.fromCharCode(128)),
          (n += a.util.fillString(String.fromCharCode(0), 64)),
          (o = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]),
          (s = !0));
      }
      function c(t, e, r) {
        var a,
          i,
          n,
          s,
          u,
          c,
          l,
          h,
          p,
          f,
          d,
          y,
          g,
          m,
          v,
          C = r.length();
        while (C >= 64) {
          for (l = 0; l < 16; ++l) e[l] = r.getInt32();
          for (; l < 64; ++l)
            ((a = e[l - 2]),
              (a =
                ((a >>> 17) | (a << 15)) ^
                ((a >>> 19) | (a << 13)) ^
                (a >>> 10)),
              (i = e[l - 15]),
              (i =
                ((i >>> 7) | (i << 25)) ^ ((i >>> 18) | (i << 14)) ^ (i >>> 3)),
              (e[l] = (a + e[l - 7] + i + e[l - 16]) | 0));
          for (
            h = t.h0,
              p = t.h1,
              f = t.h2,
              d = t.h3,
              y = t.h4,
              g = t.h5,
              m = t.h6,
              v = t.h7,
              l = 0;
            l < 64;
            ++l
          )
            ((s =
              ((y >>> 6) | (y << 26)) ^
              ((y >>> 11) | (y << 21)) ^
              ((y >>> 25) | (y << 7))),
              (u = m ^ (y & (g ^ m))),
              (n =
                ((h >>> 2) | (h << 30)) ^
                ((h >>> 13) | (h << 19)) ^
                ((h >>> 22) | (h << 10))),
              (c = (h & p) | (f & (h ^ p))),
              (a = v + s + u + o[l] + e[l]),
              (i = n + c),
              (v = m),
              (m = g),
              (g = y),
              (y = (d + a) >>> 0),
              (d = f),
              (f = p),
              (p = h),
              (h = (a + i) >>> 0));
          ((t.h0 = (t.h0 + h) | 0),
            (t.h1 = (t.h1 + p) | 0),
            (t.h2 = (t.h2 + f) | 0),
            (t.h3 = (t.h3 + d) | 0),
            (t.h4 = (t.h4 + y) | 0),
            (t.h5 = (t.h5 + g) | 0),
            (t.h6 = (t.h6 + m) | 0),
            (t.h7 = (t.h7 + v) | 0),
            (C -= 64));
        }
      }
    },
    6736: function (t, e, r) {
      var a = r(2908);
      if (
        (r(5595),
        r(3951),
        r(6737),
        r(3458),
        r(3952),
        r(6738),
        r(5601),
        r(3831),
        r(10710),
        r(4827),
        r(2921),
        "undefined" === typeof BigInteger)
      )
        var BigInteger = a.jsbn.BigInteger;
      var i = a.asn1,
        n = (a.pki = a.pki || {});
      t.exports = n.pbe = a.pbe = a.pbe || {};
      var s = n.oids,
        o = {
          name: "EncryptedPrivateKeyInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "encryptionOid",
                },
                {
                  name: "AlgorithmIdentifier.parameters",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "encryptionParams",
                },
              ],
            },
            {
              name: "EncryptedPrivateKeyInfo.encryptedData",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OCTETSTRING,
              constructed: !1,
              capture: "encryptedData",
            },
          ],
        },
        u = {
          name: "PBES2Algorithms",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PBES2Algorithms.keyDerivationFunc",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "PBES2Algorithms.keyDerivationFunc.oid",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "kdfOid",
                },
                {
                  name: "PBES2Algorithms.params",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "PBES2Algorithms.params.salt",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OCTETSTRING,
                      constructed: !1,
                      capture: "kdfSalt",
                    },
                    {
                      name: "PBES2Algorithms.params.iterationCount",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.INTEGER,
                      constructed: !1,
                      capture: "kdfIterationCount",
                    },
                    {
                      name: "PBES2Algorithms.params.keyLength",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.INTEGER,
                      constructed: !1,
                      optional: !0,
                      capture: "keyLength",
                    },
                    {
                      name: "PBES2Algorithms.params.prf",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.SEQUENCE,
                      constructed: !0,
                      optional: !0,
                      value: [
                        {
                          name: "PBES2Algorithms.params.prf.algorithm",
                          tagClass: i.Class.UNIVERSAL,
                          type: i.Type.OID,
                          constructed: !1,
                          capture: "prfOid",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "PBES2Algorithms.encryptionScheme",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "PBES2Algorithms.encryptionScheme.oid",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "encOid",
                },
                {
                  name: "PBES2Algorithms.encryptionScheme.iv",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "encIv",
                },
              ],
            },
          ],
        },
        c = {
          name: "pkcs-12PbeParams",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "pkcs-12PbeParams.salt",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OCTETSTRING,
              constructed: !1,
              capture: "salt",
            },
            {
              name: "pkcs-12PbeParams.iterations",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "iterations",
            },
          ],
        };
      function l(t, e) {
        return t.start().update(e).digest().getBytes();
      }
      function h(t) {
        var e;
        if (t) {
          if (((e = n.oids[i.derToOid(t)]), !e)) {
            var r = new Error("Unsupported PRF OID.");
            throw (
              (r.oid = t),
              (r.supported = [
                "hmacWithSHA1",
                "hmacWithSHA224",
                "hmacWithSHA256",
                "hmacWithSHA384",
                "hmacWithSHA512",
              ]),
              r
            );
          }
        } else e = "hmacWithSHA1";
        return p(e);
      }
      function p(t) {
        var e = a.md;
        switch (t) {
          case "hmacWithSHA224":
            e = a.md.sha512;
          case "hmacWithSHA1":
          case "hmacWithSHA256":
          case "hmacWithSHA384":
          case "hmacWithSHA512":
            t = t.substr(8).toLowerCase();
            break;
          default:
            var r = new Error("Unsupported PRF algorithm.");
            throw (
              (r.algorithm = t),
              (r.supported = [
                "hmacWithSHA1",
                "hmacWithSHA224",
                "hmacWithSHA256",
                "hmacWithSHA384",
                "hmacWithSHA512",
              ]),
              r
            );
        }
        if (!e || !(t in e)) throw new Error("Unknown hash algorithm: " + t);
        return e[t].create();
      }
      function f(t, e, r, s) {
        var o = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
          i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, t),
          i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, e.getBytes()),
        ]);
        return (
          "hmacWithSHA1" !== s &&
            o.value.push(
              i.create(
                i.Class.UNIVERSAL,
                i.Type.INTEGER,
                !1,
                a.util.hexToBytes(r.toString(16)),
              ),
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(n.oids[s]).getBytes(),
                ),
                i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, ""),
              ]),
            ),
          o
        );
      }
      ((n.encryptPrivateKeyInfo = function (t, e, r) {
        ((r = r || {}),
          (r.saltSize = r.saltSize || 8),
          (r.count = r.count || 2048),
          (r.algorithm = r.algorithm || "aes128"),
          (r.prfAlgorithm = r.prfAlgorithm || "sha1"));
        var o,
          u,
          c,
          l = a.random.getBytesSync(r.saltSize),
          h = r.count,
          d = i.integerToDer(h);
        if (0 === r.algorithm.indexOf("aes") || "des" === r.algorithm) {
          var y, g, m;
          switch (r.algorithm) {
            case "aes128":
              ((o = 16),
                (y = 16),
                (g = s["aes128-CBC"]),
                (m = a.aes.createEncryptionCipher));
              break;
            case "aes192":
              ((o = 24),
                (y = 16),
                (g = s["aes192-CBC"]),
                (m = a.aes.createEncryptionCipher));
              break;
            case "aes256":
              ((o = 32),
                (y = 16),
                (g = s["aes256-CBC"]),
                (m = a.aes.createEncryptionCipher));
              break;
            case "des":
              ((o = 8),
                (y = 8),
                (g = s["desCBC"]),
                (m = a.des.createEncryptionCipher));
              break;
            default:
              var v = new Error(
                "Cannot encrypt private key. Unknown encryption algorithm.",
              );
              throw ((v.algorithm = r.algorithm), v);
          }
          var C = "hmacWith" + r.prfAlgorithm.toUpperCase(),
            E = p(C),
            S = a.pkcs5.pbkdf2(e, l, h, o, E),
            T = a.random.getBytesSync(y),
            I = m(S);
          (I.start(T),
            I.update(i.toDer(t)),
            I.finish(),
            (c = I.output.getBytes()));
          var b = f(l, d, o, C);
          u = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(
              i.Class.UNIVERSAL,
              i.Type.OID,
              !1,
              i.oidToDer(s["pkcs5PBES2"]).getBytes(),
            ),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(s["pkcs5PBKDF2"]).getBytes(),
                ),
                b,
              ]),
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(g).getBytes(),
                ),
                i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, T),
              ]),
            ]),
          ]);
        } else {
          if ("3des" !== r.algorithm) {
            v = new Error(
              "Cannot encrypt private key. Unknown encryption algorithm.",
            );
            throw ((v.algorithm = r.algorithm), v);
          }
          o = 24;
          var A = new a.util.ByteBuffer(l);
          ((S = n.pbe.generatePkcs12Key(e, A, 1, h, o)),
            (T = n.pbe.generatePkcs12Key(e, A, 2, h, o)),
            (I = a.des.createEncryptionCipher(S)));
          (I.start(T),
            I.update(i.toDer(t)),
            I.finish(),
            (c = I.output.getBytes()),
            (u = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.OID,
                !1,
                i.oidToDer(s["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes(),
              ),
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, l),
                i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, d.getBytes()),
              ]),
            ])));
        }
        var B = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
          u,
          i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, c),
        ]);
        return B;
      }),
        (n.decryptPrivateKeyInfo = function (t, e) {
          var r = null,
            s = {},
            u = [];
          if (!i.validate(t, o, s, u)) {
            var c = new Error(
              "Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.",
            );
            throw ((c.errors = u), c);
          }
          var l = i.derToOid(s.encryptionOid),
            h = n.pbe.getCipher(l, s.encryptionParams, e),
            p = a.util.createBuffer(s.encryptedData);
          return (h.update(p), h.finish() && (r = i.fromDer(h.output)), r);
        }),
        (n.encryptedPrivateKeyToPem = function (t, e) {
          var r = {
            type: "ENCRYPTED PRIVATE KEY",
            body: i.toDer(t).getBytes(),
          };
          return a.pem.encode(r, { maxline: e });
        }),
        (n.encryptedPrivateKeyFromPem = function (t) {
          var e = a.pem.decode(t)[0];
          if ("ENCRYPTED PRIVATE KEY" !== e.type) {
            var r = new Error(
              'Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".',
            );
            throw ((r.headerType = e.type), r);
          }
          if (e.procType && "ENCRYPTED" === e.procType.type)
            throw new Error(
              "Could not convert encrypted private key from PEM; PEM is encrypted.",
            );
          return i.fromDer(e.body);
        }),
        (n.encryptRsaPrivateKey = function (t, e, r) {
          if (((r = r || {}), !r.legacy)) {
            var s = n.wrapRsaPrivateKey(n.privateKeyToAsn1(t));
            return (
              (s = n.encryptPrivateKeyInfo(s, e, r)),
              n.encryptedPrivateKeyToPem(s)
            );
          }
          var o, u, c, l;
          switch (r.algorithm) {
            case "aes128":
              ((o = "AES-128-CBC"),
                (c = 16),
                (u = a.random.getBytesSync(16)),
                (l = a.aes.createEncryptionCipher));
              break;
            case "aes192":
              ((o = "AES-192-CBC"),
                (c = 24),
                (u = a.random.getBytesSync(16)),
                (l = a.aes.createEncryptionCipher));
              break;
            case "aes256":
              ((o = "AES-256-CBC"),
                (c = 32),
                (u = a.random.getBytesSync(16)),
                (l = a.aes.createEncryptionCipher));
              break;
            case "3des":
              ((o = "DES-EDE3-CBC"),
                (c = 24),
                (u = a.random.getBytesSync(8)),
                (l = a.des.createEncryptionCipher));
              break;
            case "des":
              ((o = "DES-CBC"),
                (c = 8),
                (u = a.random.getBytesSync(8)),
                (l = a.des.createEncryptionCipher));
              break;
            default:
              var h = new Error(
                'Could not encrypt RSA private key; unsupported encryption algorithm "' +
                  r.algorithm +
                  '".',
              );
              throw ((h.algorithm = r.algorithm), h);
          }
          var p = a.pbe.opensslDeriveBytes(e, u.substr(0, 8), c),
            f = l(p);
          (f.start(u), f.update(i.toDer(n.privateKeyToAsn1(t))), f.finish());
          var d = {
            type: "RSA PRIVATE KEY",
            procType: { version: "4", type: "ENCRYPTED" },
            dekInfo: {
              algorithm: o,
              parameters: a.util.bytesToHex(u).toUpperCase(),
            },
            body: f.output.getBytes(),
          };
          return a.pem.encode(d);
        }),
        (n.decryptRsaPrivateKey = function (t, e) {
          var r = null,
            s = a.pem.decode(t)[0];
          if (
            "ENCRYPTED PRIVATE KEY" !== s.type &&
            "PRIVATE KEY" !== s.type &&
            "RSA PRIVATE KEY" !== s.type
          ) {
            var o = new Error(
              'Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".',
            );
            throw ((o.headerType = o), o);
          }
          if (s.procType && "ENCRYPTED" === s.procType.type) {
            var u, c;
            switch (s.dekInfo.algorithm) {
              case "DES-CBC":
                ((u = 8), (c = a.des.createDecryptionCipher));
                break;
              case "DES-EDE3-CBC":
                ((u = 24), (c = a.des.createDecryptionCipher));
                break;
              case "AES-128-CBC":
                ((u = 16), (c = a.aes.createDecryptionCipher));
                break;
              case "AES-192-CBC":
                ((u = 24), (c = a.aes.createDecryptionCipher));
                break;
              case "AES-256-CBC":
                ((u = 32), (c = a.aes.createDecryptionCipher));
                break;
              case "RC2-40-CBC":
                ((u = 5),
                  (c = function (t) {
                    return a.rc2.createDecryptionCipher(t, 40);
                  }));
                break;
              case "RC2-64-CBC":
                ((u = 8),
                  (c = function (t) {
                    return a.rc2.createDecryptionCipher(t, 64);
                  }));
                break;
              case "RC2-128-CBC":
                ((u = 16),
                  (c = function (t) {
                    return a.rc2.createDecryptionCipher(t, 128);
                  }));
                break;
              default:
                o = new Error(
                  'Could not decrypt private key; unsupported encryption algorithm "' +
                    s.dekInfo.algorithm +
                    '".',
                );
                throw ((o.algorithm = s.dekInfo.algorithm), o);
            }
            var l = a.util.hexToBytes(s.dekInfo.parameters),
              h = a.pbe.opensslDeriveBytes(e, l.substr(0, 8), u),
              p = c(h);
            if (
              (p.start(l), p.update(a.util.createBuffer(s.body)), !p.finish())
            )
              return r;
            r = p.output.getBytes();
          } else r = s.body;
          return (
            (r =
              "ENCRYPTED PRIVATE KEY" === s.type
                ? n.decryptPrivateKeyInfo(i.fromDer(r), e)
                : i.fromDer(r)),
            null !== r && (r = n.privateKeyFromAsn1(r)),
            r
          );
        }),
        (n.pbe.generatePkcs12Key = function (t, e, r, i, n, s) {
          var o, u;
          if ("undefined" === typeof s || null === s) {
            if (!("sha1" in a.md))
              throw new Error('"sha1" hash algorithm unavailable.');
            s = a.md.sha1.create();
          }
          var c = s.digestLength,
            l = s.blockLength,
            h = new a.util.ByteBuffer(),
            p = new a.util.ByteBuffer();
          if (null !== t && void 0 !== t) {
            for (u = 0; u < t.length; u++) p.putInt16(t.charCodeAt(u));
            p.putInt16(0);
          }
          var f = p.length(),
            d = e.length(),
            y = new a.util.ByteBuffer();
          y.fillWithByte(r, l);
          var g = l * Math.ceil(d / l),
            m = new a.util.ByteBuffer();
          for (u = 0; u < g; u++) m.putByte(e.at(u % d));
          var v = l * Math.ceil(f / l),
            C = new a.util.ByteBuffer();
          for (u = 0; u < v; u++) C.putByte(p.at(u % f));
          var E = m;
          E.putBuffer(C);
          for (var S = Math.ceil(n / c), T = 1; T <= S; T++) {
            var I = new a.util.ByteBuffer();
            (I.putBytes(y.bytes()), I.putBytes(E.bytes()));
            for (var b = 0; b < i; b++)
              (s.start(), s.update(I.getBytes()), (I = s.digest()));
            var A = new a.util.ByteBuffer();
            for (u = 0; u < l; u++) A.putByte(I.at(u % c));
            var B = Math.ceil(d / l) + Math.ceil(f / l),
              N = new a.util.ByteBuffer();
            for (o = 0; o < B; o++) {
              var w = new a.util.ByteBuffer(E.getBytes(l)),
                R = 511;
              for (u = A.length() - 1; u >= 0; u--)
                ((R >>= 8), (R += A.at(u) + w.at(u)), w.setAt(u, 255 & R));
              N.putBuffer(w);
            }
            ((E = N), h.putBuffer(I));
          }
          return (h.truncate(h.length() - n), h);
        }),
        (n.pbe.getCipher = function (t, e, r) {
          switch (t) {
            case n.oids["pkcs5PBES2"]:
              return n.pbe.getCipherForPBES2(t, e, r);
            case n.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
            case n.oids["pbewithSHAAnd40BitRC2-CBC"]:
              return n.pbe.getCipherForPKCS12PBE(t, e, r);
            default:
              var a = new Error(
                "Cannot read encrypted PBE data block. Unsupported OID.",
              );
              throw (
                (a.oid = t),
                (a.supportedOids = [
                  "pkcs5PBES2",
                  "pbeWithSHAAnd3-KeyTripleDES-CBC",
                  "pbewithSHAAnd40BitRC2-CBC",
                ]),
                a
              );
          }
        }),
        (n.pbe.getCipherForPBES2 = function (t, e, r) {
          var s = {},
            o = [];
          if (!i.validate(e, u, s, o)) {
            var c = new Error(
              "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.",
            );
            throw ((c.errors = o), c);
          }
          if (((t = i.derToOid(s.kdfOid)), t !== n.oids["pkcs5PBKDF2"])) {
            c = new Error(
              "Cannot read encrypted private key. Unsupported key derivation function OID.",
            );
            throw ((c.oid = t), (c.supportedOids = ["pkcs5PBKDF2"]), c);
          }
          if (
            ((t = i.derToOid(s.encOid)),
            t !== n.oids["aes128-CBC"] &&
              t !== n.oids["aes192-CBC"] &&
              t !== n.oids["aes256-CBC"] &&
              t !== n.oids["des-EDE3-CBC"] &&
              t !== n.oids["desCBC"])
          ) {
            c = new Error(
              "Cannot read encrypted private key. Unsupported encryption scheme OID.",
            );
            throw (
              (c.oid = t),
              (c.supportedOids = [
                "aes128-CBC",
                "aes192-CBC",
                "aes256-CBC",
                "des-EDE3-CBC",
                "desCBC",
              ]),
              c
            );
          }
          var l,
            p,
            f = s.kdfSalt,
            d = a.util.createBuffer(s.kdfIterationCount);
          switch (((d = d.getInt(d.length() << 3)), n.oids[t])) {
            case "aes128-CBC":
              ((l = 16), (p = a.aes.createDecryptionCipher));
              break;
            case "aes192-CBC":
              ((l = 24), (p = a.aes.createDecryptionCipher));
              break;
            case "aes256-CBC":
              ((l = 32), (p = a.aes.createDecryptionCipher));
              break;
            case "des-EDE3-CBC":
              ((l = 24), (p = a.des.createDecryptionCipher));
              break;
            case "desCBC":
              ((l = 8), (p = a.des.createDecryptionCipher));
              break;
          }
          var y = h(s.prfOid),
            g = a.pkcs5.pbkdf2(r, f, d, l, y),
            m = s.encIv,
            v = p(g);
          return (v.start(m), v);
        }),
        (n.pbe.getCipherForPKCS12PBE = function (t, e, r) {
          var s = {},
            o = [];
          if (!i.validate(e, c, s, o)) {
            var u = new Error(
              "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.",
            );
            throw ((u.errors = o), u);
          }
          var l,
            p,
            f,
            d = a.util.createBuffer(s.salt),
            y = a.util.createBuffer(s.iterations);
          switch (((y = y.getInt(y.length() << 3)), t)) {
            case n.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
              ((l = 24), (p = 8), (f = a.des.startDecrypting));
              break;
            case n.oids["pbewithSHAAnd40BitRC2-CBC"]:
              ((l = 5),
                (p = 8),
                (f = function (t, e) {
                  var r = a.rc2.createDecryptionCipher(t, 40);
                  return (r.start(e, null), r);
                }));
              break;
            default:
              u = new Error(
                "Cannot read PKCS #12 PBE data block. Unsupported OID.",
              );
              throw ((u.oid = t), u);
          }
          var g = h(s.prfOid),
            m = n.pbe.generatePkcs12Key(r, d, 1, y, l, g);
          g.start();
          var v = n.pbe.generatePkcs12Key(r, d, 2, y, p, g);
          return f(m, v);
        }),
        (n.pbe.opensslDeriveBytes = function (t, e, r, i) {
          if ("undefined" === typeof i || null === i) {
            if (!("md5" in a.md))
              throw new Error('"md5" hash algorithm unavailable.');
            i = a.md.md5.create();
          }
          null === e && (e = "");
          for (var n = [l(i, t + e)], s = 16, o = 1; s < r; ++o, s += 16)
            n.push(l(i, n[o - 1] + t + e));
          return n.join("").substr(0, r);
        }));
    },
    6737: function (t, e, r) {
      var a = r(2908);
      function i(t, e) {
        var r = function () {
          return new a.des.Algorithm(t, e);
        };
        a.cipher.registerAlgorithm(t, r);
      }
      (r(5596),
        r(6730),
        r(2921),
        (t.exports = a.des = a.des || {}),
        (a.des.startEncrypting = function (t, e, r, a) {
          var i = y({
            key: t,
            output: r,
            decrypt: !1,
            mode: a || (null === e ? "ECB" : "CBC"),
          });
          return (i.start(e), i);
        }),
        (a.des.createEncryptionCipher = function (t, e) {
          return y({ key: t, output: null, decrypt: !1, mode: e });
        }),
        (a.des.startDecrypting = function (t, e, r, a) {
          var i = y({
            key: t,
            output: r,
            decrypt: !0,
            mode: a || (null === e ? "ECB" : "CBC"),
          });
          return (i.start(e), i);
        }),
        (a.des.createDecryptionCipher = function (t, e) {
          return y({ key: t, output: null, decrypt: !0, mode: e });
        }),
        (a.des.Algorithm = function (t, e) {
          var r = this;
          ((r.name = t),
            (r.mode = new e({
              blockSize: 8,
              cipher: {
                encrypt: function (t, e) {
                  return d(r._keys, t, e, !1);
                },
                decrypt: function (t, e) {
                  return d(r._keys, t, e, !0);
                },
              },
            })),
            (r._init = !1));
        }),
        (a.des.Algorithm.prototype.initialize = function (t) {
          if (!this._init) {
            var e = a.util.createBuffer(t.key);
            if (0 === this.name.indexOf("3DES") && 24 !== e.length())
              throw new Error("Invalid Triple-DES key size: " + 8 * e.length());
            ((this._keys = f(e)), (this._init = !0));
          }
        }),
        i("DES-ECB", a.cipher.modes.ecb),
        i("DES-CBC", a.cipher.modes.cbc),
        i("DES-CFB", a.cipher.modes.cfb),
        i("DES-OFB", a.cipher.modes.ofb),
        i("DES-CTR", a.cipher.modes.ctr),
        i("3DES-ECB", a.cipher.modes.ecb),
        i("3DES-CBC", a.cipher.modes.cbc),
        i("3DES-CFB", a.cipher.modes.cfb),
        i("3DES-OFB", a.cipher.modes.ofb),
        i("3DES-CTR", a.cipher.modes.ctr));
      var n = [
          16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024,
          16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028,
          16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540,
          16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780,
          4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536,
          66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752,
          16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240,
          0, 65540, 66560, 0, 16842756,
        ],
        s = [
          -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040,
          -2147450848, -2147483616, -2146402272, -2146402304, -2147483648,
          -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848,
          0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0,
          1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376,
          -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768,
          -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768,
          -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608,
          -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800,
          -2147483648, -2146435040, -2146402272, 1081344,
        ],
        o = [
          520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080,
          134217736, 134217736, 131072, 134349320, 131080, 134348800, 520,
          134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592,
          134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728,
          134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0,
          512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808,
          134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736,
          134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584,
        ],
        u = [
          8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800,
          8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801,
          128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928,
          8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800,
          8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1,
          8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801,
          128, 8388608, 8192, 8396928,
        ],
        c = [
          256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824,
          34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512,
          1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0,
          1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080,
          0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288,
          1107296512, 256, 33554432, 1073741824, 34078720, 1107296512,
          1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368,
          256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800,
          34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080,
          524288, 0, 1074266112, 34078976, 1073742080,
        ],
        l = [
          536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616,
          4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296,
          536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312,
          16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688,
          541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616,
          4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400,
          536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0,
          541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312,
          0, 541081600, 536870912, 4194320, 536887312,
        ],
        h = [
          2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064,
          69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912,
          2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154,
          69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200,
          67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2,
          2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202,
          69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066,
          0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154,
        ],
        p = [
          268439616, 4096, 262144, 268701760, 268435456, 268439616, 64,
          268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304,
          4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208,
          268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552,
          266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096,
          266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456,
          262144, 268439616, 0, 268701760, 262208, 268435520, 268697600,
          268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160,
          262208, 268435456, 268701696,
        ];
      function f(t) {
        for (
          var e,
            r = [
              0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452,
              512, 516, 536871424, 536871428, 66048, 66052, 536936960,
              536936964,
            ],
            a = [
              0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441,
              256, 257, 1048832, 1048833, 67109120, 67109121, 68157696,
              68157697,
            ],
            i = [
              0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8,
              2048, 2056, 16777216, 16777224, 16779264, 16779272,
            ],
            n = [
              0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920,
              136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416,
              134356992, 136454144,
            ],
            s = [
              0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112,
              266256, 4096, 266240, 4112, 266256,
            ],
            o = [
              0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456,
              33554464, 33555488, 33554432, 33555456, 33554464, 33555488,
            ],
            u = [
              0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746,
              0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746,
            ],
            c = [
              0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496,
              131072, 196608, 133120, 198656, 537001984, 537067520, 537004032,
              537069568,
            ],
            l = [
              0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576,
              33554432, 33816576, 33554434, 33816578, 33554434, 33816578,
            ],
            h = [
              0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024,
              268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488,
            ],
            p = [
              0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224,
              8192, 8224, 1056768, 1056800, 1056768, 1056800,
            ],
            f = [
              0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880,
              67108864, 83886080, 67109376, 83886592, 69206016, 85983232,
              69206528, 85983744,
            ],
            d = [
              0, 4096, 134217728, 134221824, 524288, 528384, 134742016,
              134746112, 16, 4112, 134217744, 134221840, 524304, 528400,
              134742032, 134746128,
            ],
            y = [
              0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261,
            ],
            g = t.length() > 8 ? 3 : 1,
            m = [],
            v = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            C = 0,
            E = 0;
          E < g;
          E++
        ) {
          var S = t.getInt32(),
            T = t.getInt32();
          ((e = 252645135 & ((S >>> 4) ^ T)),
            (T ^= e),
            (S ^= e << 4),
            (e = 65535 & ((T >>> -16) ^ S)),
            (S ^= e),
            (T ^= e << -16),
            (e = 858993459 & ((S >>> 2) ^ T)),
            (T ^= e),
            (S ^= e << 2),
            (e = 65535 & ((T >>> -16) ^ S)),
            (S ^= e),
            (T ^= e << -16),
            (e = 1431655765 & ((S >>> 1) ^ T)),
            (T ^= e),
            (S ^= e << 1),
            (e = 16711935 & ((T >>> 8) ^ S)),
            (S ^= e),
            (T ^= e << 8),
            (e = 1431655765 & ((S >>> 1) ^ T)),
            (T ^= e),
            (S ^= e << 1),
            (e = (S << 8) | ((T >>> 20) & 240)),
            (S =
              (T << 24) |
              ((T << 8) & 16711680) |
              ((T >>> 8) & 65280) |
              ((T >>> 24) & 240)),
            (T = e));
          for (var I = 0; I < v.length; ++I) {
            (v[I]
              ? ((S = (S << 2) | (S >>> 26)), (T = (T << 2) | (T >>> 26)))
              : ((S = (S << 1) | (S >>> 27)), (T = (T << 1) | (T >>> 27))),
              (S &= -15),
              (T &= -15));
            var b =
                r[S >>> 28] |
                a[(S >>> 24) & 15] |
                i[(S >>> 20) & 15] |
                n[(S >>> 16) & 15] |
                s[(S >>> 12) & 15] |
                o[(S >>> 8) & 15] |
                u[(S >>> 4) & 15],
              A =
                c[T >>> 28] |
                l[(T >>> 24) & 15] |
                h[(T >>> 20) & 15] |
                p[(T >>> 16) & 15] |
                f[(T >>> 12) & 15] |
                d[(T >>> 8) & 15] |
                y[(T >>> 4) & 15];
            ((e = 65535 & ((A >>> 16) ^ b)),
              (m[C++] = b ^ e),
              (m[C++] = A ^ (e << 16)));
          }
        }
        return m;
      }
      function d(t, e, r, a) {
        var i,
          f,
          d = 32 === t.length ? 3 : 9;
        i =
          3 === d
            ? a
              ? [30, -2, -2]
              : [0, 32, 2]
            : a
              ? [94, 62, -2, 32, 64, 2, 30, -2, -2]
              : [0, 32, 2, 62, 30, -2, 64, 96, 2];
        var y = e[0],
          g = e[1];
        ((f = 252645135 & ((y >>> 4) ^ g)),
          (g ^= f),
          (y ^= f << 4),
          (f = 65535 & ((y >>> 16) ^ g)),
          (g ^= f),
          (y ^= f << 16),
          (f = 858993459 & ((g >>> 2) ^ y)),
          (y ^= f),
          (g ^= f << 2),
          (f = 16711935 & ((g >>> 8) ^ y)),
          (y ^= f),
          (g ^= f << 8),
          (f = 1431655765 & ((y >>> 1) ^ g)),
          (g ^= f),
          (y ^= f << 1),
          (y = (y << 1) | (y >>> 31)),
          (g = (g << 1) | (g >>> 31)));
        for (var m = 0; m < d; m += 3) {
          for (var v = i[m + 1], C = i[m + 2], E = i[m]; E != v; E += C) {
            var S = g ^ t[E],
              T = ((g >>> 4) | (g << 28)) ^ t[E + 1];
            ((f = y),
              (y = g),
              (g =
                f ^
                (s[(S >>> 24) & 63] |
                  u[(S >>> 16) & 63] |
                  l[(S >>> 8) & 63] |
                  p[63 & S] |
                  n[(T >>> 24) & 63] |
                  o[(T >>> 16) & 63] |
                  c[(T >>> 8) & 63] |
                  h[63 & T])));
          }
          ((f = y), (y = g), (g = f));
        }
        ((y = (y >>> 1) | (y << 31)),
          (g = (g >>> 1) | (g << 31)),
          (f = 1431655765 & ((y >>> 1) ^ g)),
          (g ^= f),
          (y ^= f << 1),
          (f = 16711935 & ((g >>> 8) ^ y)),
          (y ^= f),
          (g ^= f << 8),
          (f = 858993459 & ((g >>> 2) ^ y)),
          (y ^= f),
          (g ^= f << 2),
          (f = 65535 & ((y >>> 16) ^ g)),
          (g ^= f),
          (y ^= f << 16),
          (f = 252645135 & ((y >>> 4) ^ g)),
          (g ^= f),
          (y ^= f << 4),
          (r[0] = y),
          (r[1] = g));
      }
      function y(t) {
        t = t || {};
        var e,
          r = (t.mode || "CBC").toUpperCase(),
          i = "DES-" + r;
        e = t.decrypt
          ? a.cipher.createDecipher(i, t.key)
          : a.cipher.createCipher(i, t.key);
        var n = e.start;
        return (
          (e.start = function (t, r) {
            var i = null;
            (r instanceof a.util.ByteBuffer && ((i = r), (r = {})),
              (r = r || {}),
              (r.output = i),
              (r.iv = t),
              n.call(e, r));
          }),
          e
        );
      }
    },
    6738: function (t, e, r) {
      (function (e) {
        var a = r(2908);
        (r(5598), r(3458), r(2921));
        var i,
          n = (a.pkcs5 = a.pkcs5 || {});
        (a.util.isNodejs && !a.options.usePureJavaScript && (i = r(5597)),
          (t.exports =
            a.pbkdf2 =
            n.pbkdf2 =
              function (t, r, n, s, o, u) {
                if (
                  ("function" === typeof o && ((u = o), (o = null)),
                  a.util.isNodejs &&
                    !a.options.usePureJavaScript &&
                    i.pbkdf2 &&
                    (null === o || "object" !== typeof o) &&
                    (i.pbkdf2Sync.length > 4 || !o || "sha1" === o))
                )
                  return (
                    "string" !== typeof o && (o = "sha1"),
                    (t = e.from(t, "binary")),
                    (r = e.from(r, "binary")),
                    u
                      ? 4 === i.pbkdf2Sync.length
                        ? i.pbkdf2(t, r, n, s, function (t, e) {
                            if (t) return u(t);
                            u(null, e.toString("binary"));
                          })
                        : i.pbkdf2(t, r, n, s, o, function (t, e) {
                            if (t) return u(t);
                            u(null, e.toString("binary"));
                          })
                      : 4 === i.pbkdf2Sync.length
                        ? i.pbkdf2Sync(t, r, n, s).toString("binary")
                        : i.pbkdf2Sync(t, r, n, s, o).toString("binary")
                  );
                if (
                  (("undefined" !== typeof o && null !== o) || (o = "sha1"),
                  "string" === typeof o)
                ) {
                  if (!(o in a.md.algorithms))
                    throw new Error("Unknown hash algorithm: " + o);
                  o = a.md[o].create();
                }
                var c = o.digestLength;
                if (s > 4294967295 * c) {
                  var l = new Error("Derived key is too long.");
                  if (u) return u(l);
                  throw l;
                }
                var h = Math.ceil(s / c),
                  p = s - (h - 1) * c,
                  f = a.hmac.create();
                f.start(o, t);
                var d,
                  y,
                  g,
                  m = "";
                if (!u) {
                  for (var v = 1; v <= h; ++v) {
                    (f.start(null, null),
                      f.update(r),
                      f.update(a.util.int32ToBytes(v)),
                      (d = g = f.digest().getBytes()));
                    for (var C = 2; C <= n; ++C)
                      (f.start(null, null),
                        f.update(g),
                        (y = f.digest().getBytes()),
                        (d = a.util.xorBytes(d, y, c)),
                        (g = y));
                    m += v < h ? d : d.substr(0, p);
                  }
                  return m;
                }
                v = 1;
                function E() {
                  if (v > h) return u(null, m);
                  (f.start(null, null),
                    f.update(r),
                    f.update(a.util.int32ToBytes(v)),
                    (d = g = f.digest().getBytes()),
                    (C = 2),
                    S());
                }
                function S() {
                  if (C <= n)
                    return (
                      f.start(null, null),
                      f.update(g),
                      (y = f.digest().getBytes()),
                      (d = a.util.xorBytes(d, y, c)),
                      (g = y),
                      ++C,
                      a.util.setImmediate(S)
                    );
                  ((m += v < h ? d : d.substr(0, p)), ++v, E());
                }
                E();
              }));
      }).call(this, r(2).Buffer);
    },
    6739: function (t, e, r) {
      var a,
        i = r(2908);
      t.exports = i.jsbn = i.jsbn || {};
      var n = 0xdeadbeefcafe,
        s = 15715070 == (16777215 & n);
      function BigInteger(t, e, r) {
        ((this.data = []),
          null != t &&
            ("number" == typeof t
              ? this.fromNumber(t, e, r)
              : null == e && "string" != typeof t
                ? this.fromString(t, 256)
                : this.fromString(t, e)));
      }
      function o() {
        return new BigInteger(null);
      }
      function u(t, e, r, a, i, n) {
        while (--n >= 0) {
          var s = e * this.data[t++] + r.data[a] + i;
          ((i = Math.floor(s / 67108864)), (r.data[a++] = 67108863 & s));
        }
        return i;
      }
      function c(t, e, r, a, i, n) {
        var s = 32767 & e,
          o = e >> 15;
        while (--n >= 0) {
          var u = 32767 & this.data[t],
            c = this.data[t++] >> 15,
            l = o * u + c * s;
          ((u = s * u + ((32767 & l) << 15) + r.data[a] + (1073741823 & i)),
            (i = (u >>> 30) + (l >>> 15) + o * c + (i >>> 30)),
            (r.data[a++] = 1073741823 & u));
        }
        return i;
      }
      function l(t, e, r, a, i, n) {
        var s = 16383 & e,
          o = e >> 14;
        while (--n >= 0) {
          var u = 16383 & this.data[t],
            c = this.data[t++] >> 14,
            l = o * u + c * s;
          ((u = s * u + ((16383 & l) << 14) + r.data[a] + i),
            (i = (u >> 28) + (l >> 14) + o * c),
            (r.data[a++] = 268435455 & u));
        }
        return i;
      }
      ((i.jsbn.BigInteger = BigInteger),
        "undefined" === typeof navigator
          ? ((BigInteger.prototype.am = l), (a = 28))
          : s && "Microsoft Internet Explorer" == navigator.appName
            ? ((BigInteger.prototype.am = c), (a = 30))
            : s && "Netscape" != navigator.appName
              ? ((BigInteger.prototype.am = u), (a = 26))
              : ((BigInteger.prototype.am = l), (a = 28)),
        (BigInteger.prototype.DB = a),
        (BigInteger.prototype.DM = (1 << a) - 1),
        (BigInteger.prototype.DV = 1 << a));
      var h = 52;
      ((BigInteger.prototype.FV = Math.pow(2, h)),
        (BigInteger.prototype.F1 = h - a),
        (BigInteger.prototype.F2 = 2 * a - h));
      var p,
        f,
        d = "0123456789abcdefghijklmnopqrstuvwxyz",
        y = new Array();
      for (p = "0".charCodeAt(0), f = 0; f <= 9; ++f) y[p++] = f;
      for (p = "a".charCodeAt(0), f = 10; f < 36; ++f) y[p++] = f;
      for (p = "A".charCodeAt(0), f = 10; f < 36; ++f) y[p++] = f;
      function g(t) {
        return d.charAt(t);
      }
      function m(t, e) {
        var r = y[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function v(t) {
        for (var e = this.t - 1; e >= 0; --e) t.data[e] = this.data[e];
        ((t.t = this.t), (t.s = this.s));
      }
      function C(t) {
        ((this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0
            ? (this.data[0] = t)
            : t < -1
              ? (this.data[0] = t + this.DV)
              : (this.t = 0));
      }
      function E(t) {
        var e = o();
        return (e.fromInt(t), e);
      }
      function S(t, e) {
        var r;
        if (16 == e) r = 4;
        else if (8 == e) r = 3;
        else if (256 == e) r = 8;
        else if (2 == e) r = 1;
        else if (32 == e) r = 5;
        else {
          if (4 != e) return void this.fromRadix(t, e);
          r = 2;
        }
        ((this.t = 0), (this.s = 0));
        var a = t.length,
          i = !1,
          n = 0;
        while (--a >= 0) {
          var s = 8 == r ? 255 & t[a] : m(t, a);
          s < 0
            ? "-" == t.charAt(a) && (i = !0)
            : ((i = !1),
              0 == n
                ? (this.data[this.t++] = s)
                : n + r > this.DB
                  ? ((this.data[this.t - 1] |=
                      (s & ((1 << (this.DB - n)) - 1)) << n),
                    (this.data[this.t++] = s >> (this.DB - n)))
                  : (this.data[this.t - 1] |= s << n),
              (n += r),
              n >= this.DB && (n -= this.DB));
        }
        (8 == r &&
          0 != (128 & t[0]) &&
          ((this.s = -1),
          n > 0 && (this.data[this.t - 1] |= ((1 << (this.DB - n)) - 1) << n)),
          this.clamp(),
          i && BigInteger.ZERO.subTo(this, this));
      }
      function T() {
        var t = this.s & this.DM;
        while (this.t > 0 && this.data[this.t - 1] == t) --this.t;
      }
      function I(t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var e;
        if (16 == t) e = 4;
        else if (8 == t) e = 3;
        else if (2 == t) e = 1;
        else if (32 == t) e = 5;
        else {
          if (4 != t) return this.toRadix(t);
          e = 2;
        }
        var r,
          a = (1 << e) - 1,
          i = !1,
          n = "",
          s = this.t,
          o = this.DB - ((s * this.DB) % e);
        if (s-- > 0) {
          o < this.DB && (r = this.data[s] >> o) > 0 && ((i = !0), (n = g(r)));
          while (s >= 0)
            (o < e
              ? ((r = (this.data[s] & ((1 << o) - 1)) << (e - o)),
                (r |= this.data[--s] >> (o += this.DB - e)))
              : ((r = (this.data[s] >> (o -= e)) & a),
                o <= 0 && ((o += this.DB), --s)),
              r > 0 && (i = !0),
              i && (n += g(r)));
        }
        return i ? n : "0";
      }
      function b() {
        var t = o();
        return (BigInteger.ZERO.subTo(this, t), t);
      }
      function A() {
        return this.s < 0 ? this.negate() : this;
      }
      function B(t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var r = this.t;
        if (((e = r - t.t), 0 != e)) return this.s < 0 ? -e : e;
        while (--r >= 0) if (0 != (e = this.data[r] - t.data[r])) return e;
        return 0;
      }
      function N(t) {
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
      function w() {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) +
              N(this.data[this.t - 1] ^ (this.s & this.DM));
      }
      function R(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r) e.data[r + t] = this.data[r];
        for (r = t - 1; r >= 0; --r) e.data[r] = 0;
        ((e.t = this.t + t), (e.s = this.s));
      }
      function L(t, e) {
        for (var r = t; r < this.t; ++r) e.data[r - t] = this.data[r];
        ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
      }
      function U(t, e) {
        var r,
          a = t % this.DB,
          i = this.DB - a,
          n = (1 << i) - 1,
          s = Math.floor(t / this.DB),
          o = (this.s << a) & this.DM;
        for (r = this.t - 1; r >= 0; --r)
          ((e.data[r + s + 1] = (this.data[r] >> i) | o),
            (o = (this.data[r] & n) << a));
        for (r = s - 1; r >= 0; --r) e.data[r] = 0;
        ((e.data[s] = o), (e.t = this.t + s + 1), (e.s = this.s), e.clamp());
      }
      function k(t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t) e.t = 0;
        else {
          var a = t % this.DB,
            i = this.DB - a,
            n = (1 << a) - 1;
          e.data[0] = this.data[r] >> a;
          for (var s = r + 1; s < this.t; ++s)
            ((e.data[s - r - 1] |= (this.data[s] & n) << i),
              (e.data[s - r] = this.data[s] >> a));
          (a > 0 && (e.data[this.t - r - 1] |= (this.s & n) << i),
            (e.t = this.t - r),
            e.clamp());
        }
      }
      function D(t, e) {
        var r = 0,
          a = 0,
          i = Math.min(t.t, this.t);
        while (r < i)
          ((a += this.data[r] - t.data[r]),
            (e.data[r++] = a & this.DM),
            (a >>= this.DB));
        if (t.t < this.t) {
          a -= t.s;
          while (r < this.t)
            ((a += this.data[r]), (e.data[r++] = a & this.DM), (a >>= this.DB));
          a += this.s;
        } else {
          a += this.s;
          while (r < t.t)
            ((a -= t.data[r]), (e.data[r++] = a & this.DM), (a >>= this.DB));
          a -= t.s;
        }
        ((e.s = a < 0 ? -1 : 0),
          a < -1 ? (e.data[r++] = this.DV + a) : a > 0 && (e.data[r++] = a),
          (e.t = r),
          e.clamp());
      }
      function P(t, e) {
        var r = this.abs(),
          a = t.abs(),
          i = r.t;
        e.t = i + a.t;
        while (--i >= 0) e.data[i] = 0;
        for (i = 0; i < a.t; ++i)
          e.data[i + r.t] = r.am(0, a.data[i], e, i, 0, r.t);
        ((e.s = 0), e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e));
      }
      function O(t) {
        var e = this.abs(),
          r = (t.t = 2 * e.t);
        while (--r >= 0) t.data[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var a = e.am(r, e.data[r], t, 2 * r, 0, 1);
          (t.data[r + e.t] += e.am(
            r + 1,
            2 * e.data[r],
            t,
            2 * r + 1,
            a,
            e.t - r - 1,
          )) >= e.DV && ((t.data[r + e.t] -= e.DV), (t.data[r + e.t + 1] = 1));
        }
        (t.t > 0 && (t.data[t.t - 1] += e.am(r, e.data[r], t, 2 * r, 0, 1)),
          (t.s = 0),
          t.clamp());
      }
      function V(t, e, r) {
        var a = t.abs();
        if (!(a.t <= 0)) {
          var i = this.abs();
          if (i.t < a.t)
            return (
              null != e && e.fromInt(0),
              void (null != r && this.copyTo(r))
            );
          null == r && (r = o());
          var n = o(),
            s = this.s,
            u = t.s,
            c = this.DB - N(a.data[a.t - 1]);
          c > 0
            ? (a.lShiftTo(c, n), i.lShiftTo(c, r))
            : (a.copyTo(n), i.copyTo(r));
          var l = n.t,
            h = n.data[l - 1];
          if (0 != h) {
            var p = h * (1 << this.F1) + (l > 1 ? n.data[l - 2] >> this.F2 : 0),
              f = this.FV / p,
              d = (1 << this.F1) / p,
              y = 1 << this.F2,
              g = r.t,
              m = g - l,
              v = null == e ? o() : e;
            (n.dlShiftTo(m, v),
              r.compareTo(v) >= 0 && ((r.data[r.t++] = 1), r.subTo(v, r)),
              BigInteger.ONE.dlShiftTo(l, v),
              v.subTo(n, n));
            while (n.t < l) n.data[n.t++] = 0;
            while (--m >= 0) {
              var C =
                r.data[--g] == h
                  ? this.DM
                  : Math.floor(r.data[g] * f + (r.data[g - 1] + y) * d);
              if ((r.data[g] += n.am(0, C, r, m, 0, l)) < C) {
                (n.dlShiftTo(m, v), r.subTo(v, r));
                while (r.data[g] < --C) r.subTo(v, r);
              }
            }
            (null != e &&
              (r.drShiftTo(l, e), s != u && BigInteger.ZERO.subTo(e, e)),
              (r.t = l),
              r.clamp(),
              c > 0 && r.rShiftTo(c, r),
              s < 0 && BigInteger.ZERO.subTo(r, r));
          }
        }
      }
      function _(t) {
        var e = o();
        return (
          this.abs().divRemTo(t, null, e),
          this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e),
          e
        );
      }
      function K(t) {
        this.m = t;
      }
      function x(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }
      function M(t) {
        return t;
      }
      function F(t) {
        t.divRemTo(this.m, null, t);
      }
      function j(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function q(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function G() {
        if (this.t < 1) return 0;
        var t = this.data[0];
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
      function Q(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function z(t) {
        var e = o();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e),
          e
        );
      }
      function H(t) {
        var e = o();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function W(t) {
        while (t.t <= this.mt2) t.data[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var r = 32767 & t.data[e],
            a =
              (r * this.mpl +
                (((r * this.mph + (t.data[e] >> 15) * this.mpl) & this.um) <<
                  15)) &
              t.DM;
          ((r = e + this.m.t),
            (t.data[r] += this.m.am(0, a, t, e, 0, this.m.t)));
          while (t.data[r] >= t.DV) ((t.data[r] -= t.DV), t.data[++r]++);
        }
        (t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
      }
      function X(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function Y(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function Z() {
        return 0 == (this.t > 0 ? 1 & this.data[0] : this.s);
      }
      function J(t, e) {
        if (t > 4294967295 || t < 1) return BigInteger.ONE;
        var r = o(),
          a = o(),
          i = e.convert(this),
          n = N(t) - 1;
        i.copyTo(r);
        while (--n >= 0)
          if ((e.sqrTo(r, a), (t & (1 << n)) > 0)) e.mulTo(a, i, r);
          else {
            var s = r;
            ((r = a), (a = s));
          }
        return e.revert(r);
      }
      function $(t, e) {
        var r;
        return (
          (r = t < 256 || e.isEven() ? new K(e) : new Q(e)),
          this.exp(t, r)
        );
      }
      function tt() {
        var t = o();
        return (this.copyTo(t), t);
      }
      function et() {
        if (this.s < 0) {
          if (1 == this.t) return this.data[0] - this.DV;
          if (0 == this.t) return -1;
        } else {
          if (1 == this.t) return this.data[0];
          if (0 == this.t) return 0;
        }
        return (
          ((this.data[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) |
          this.data[0]
        );
      }
      function rt() {
        return 0 == this.t ? this.s : (this.data[0] << 24) >> 24;
      }
      function at() {
        return 0 == this.t ? this.s : (this.data[0] << 16) >> 16;
      }
      function it(t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }
      function nt() {
        return this.s < 0
          ? -1
          : this.t <= 0 || (1 == this.t && this.data[0] <= 0)
            ? 0
            : 1;
      }
      function st(t) {
        if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
          return "0";
        var e = this.chunkSize(t),
          r = Math.pow(t, e),
          a = E(r),
          i = o(),
          n = o(),
          s = "";
        this.divRemTo(a, i, n);
        while (i.signum() > 0)
          ((s = (r + n.intValue()).toString(t).substr(1) + s),
            i.divRemTo(a, i, n));
        return n.intValue().toString(t) + s;
      }
      function ot(t, e) {
        (this.fromInt(0), null == e && (e = 10));
        for (
          var r = this.chunkSize(e),
            a = Math.pow(e, r),
            i = !1,
            n = 0,
            s = 0,
            o = 0;
          o < t.length;
          ++o
        ) {
          var u = m(t, o);
          u < 0
            ? "-" == t.charAt(o) && 0 == this.signum() && (i = !0)
            : ((s = e * s + u),
              ++n >= r &&
                (this.dMultiply(a), this.dAddOffset(s, 0), (n = 0), (s = 0)));
        }
        (n > 0 && (this.dMultiply(Math.pow(e, n)), this.dAddOffset(s, 0)),
          i && BigInteger.ZERO.subTo(this, this));
      }
      function ut(t, e, r) {
        if ("number" == typeof e)
          if (t < 2) this.fromInt(1);
          else {
            (this.fromNumber(t, r),
              this.testBit(t - 1) ||
                this.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), gt, this),
              this.isEven() && this.dAddOffset(1, 0));
            while (!this.isProbablePrime(e))
              (this.dAddOffset(2, 0),
                this.bitLength() > t &&
                  this.subTo(BigInteger.ONE.shiftLeft(t - 1), this));
          }
        else {
          var a = new Array(),
            i = 7 & t;
          ((a.length = 1 + (t >> 3)),
            e.nextBytes(a),
            i > 0 ? (a[0] &= (1 << i) - 1) : (a[0] = 0),
            this.fromString(a, 256));
        }
      }
      function ct() {
        var t = this.t,
          e = new Array();
        e[0] = this.s;
        var r,
          a = this.DB - ((t * this.DB) % 8),
          i = 0;
        if (t-- > 0) {
          a < this.DB &&
            (r = this.data[t] >> a) != (this.s & this.DM) >> a &&
            (e[i++] = r | (this.s << (this.DB - a)));
          while (t >= 0)
            (a < 8
              ? ((r = (this.data[t] & ((1 << a) - 1)) << (8 - a)),
                (r |= this.data[--t] >> (a += this.DB - 8)))
              : ((r = (this.data[t] >> (a -= 8)) & 255),
                a <= 0 && ((a += this.DB), --t)),
              0 != (128 & r) && (r |= -256),
              0 == i && (128 & this.s) != (128 & r) && ++i,
              (i > 0 || r != this.s) && (e[i++] = r));
        }
        return e;
      }
      function lt(t) {
        return 0 == this.compareTo(t);
      }
      function ht(t) {
        return this.compareTo(t) < 0 ? this : t;
      }
      function pt(t) {
        return this.compareTo(t) > 0 ? this : t;
      }
      function ft(t, e, r) {
        var a,
          i,
          n = Math.min(t.t, this.t);
        for (a = 0; a < n; ++a) r.data[a] = e(this.data[a], t.data[a]);
        if (t.t < this.t) {
          for (i = t.s & this.DM, a = n; a < this.t; ++a)
            r.data[a] = e(this.data[a], i);
          r.t = this.t;
        } else {
          for (i = this.s & this.DM, a = n; a < t.t; ++a)
            r.data[a] = e(i, t.data[a]);
          r.t = t.t;
        }
        ((r.s = e(this.s, t.s)), r.clamp());
      }
      function dt(t, e) {
        return t & e;
      }
      function yt(t) {
        var e = o();
        return (this.bitwiseTo(t, dt, e), e);
      }
      function gt(t, e) {
        return t | e;
      }
      function mt(t) {
        var e = o();
        return (this.bitwiseTo(t, gt, e), e);
      }
      function vt(t, e) {
        return t ^ e;
      }
      function Ct(t) {
        var e = o();
        return (this.bitwiseTo(t, vt, e), e);
      }
      function Et(t, e) {
        return t & ~e;
      }
      function St(t) {
        var e = o();
        return (this.bitwiseTo(t, Et, e), e);
      }
      function Tt() {
        for (var t = o(), e = 0; e < this.t; ++e)
          t.data[e] = this.DM & ~this.data[e];
        return ((t.t = this.t), (t.s = ~this.s), t);
      }
      function It(t) {
        var e = o();
        return (t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e);
      }
      function bt(t) {
        var e = o();
        return (t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e);
      }
      function At(t) {
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
      function Bt() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this.data[t]) return t * this.DB + At(this.data[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function Nt(t) {
        var e = 0;
        while (0 != t) ((t &= t - 1), ++e);
        return e;
      }
      function wt() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
          t += Nt(this.data[r] ^ e);
        return t;
      }
      function Rt(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t
          ? 0 != this.s
          : 0 != (this.data[e] & (1 << (t % this.DB)));
      }
      function Lt(t, e) {
        var r = BigInteger.ONE.shiftLeft(t);
        return (this.bitwiseTo(r, e, r), r);
      }
      function Ut(t) {
        return this.changeBit(t, gt);
      }
      function kt(t) {
        return this.changeBit(t, Et);
      }
      function Dt(t) {
        return this.changeBit(t, vt);
      }
      function Pt(t, e) {
        var r = 0,
          a = 0,
          i = Math.min(t.t, this.t);
        while (r < i)
          ((a += this.data[r] + t.data[r]),
            (e.data[r++] = a & this.DM),
            (a >>= this.DB));
        if (t.t < this.t) {
          a += t.s;
          while (r < this.t)
            ((a += this.data[r]), (e.data[r++] = a & this.DM), (a >>= this.DB));
          a += this.s;
        } else {
          a += this.s;
          while (r < t.t)
            ((a += t.data[r]), (e.data[r++] = a & this.DM), (a >>= this.DB));
          a += t.s;
        }
        ((e.s = a < 0 ? -1 : 0),
          a > 0 ? (e.data[r++] = a) : a < -1 && (e.data[r++] = this.DV + a),
          (e.t = r),
          e.clamp());
      }
      function Ot(t) {
        var e = o();
        return (this.addTo(t, e), e);
      }
      function Vt(t) {
        var e = o();
        return (this.subTo(t, e), e);
      }
      function _t(t) {
        var e = o();
        return (this.multiplyTo(t, e), e);
      }
      function Kt(t) {
        var e = o();
        return (this.divRemTo(t, e, null), e);
      }
      function xt(t) {
        var e = o();
        return (this.divRemTo(t, null, e), e);
      }
      function Mt(t) {
        var e = o(),
          r = o();
        return (this.divRemTo(t, e, r), new Array(e, r));
      }
      function Ft(t) {
        ((this.data[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp());
      }
      function jt(t, e) {
        if (0 != t) {
          while (this.t <= e) this.data[this.t++] = 0;
          this.data[e] += t;
          while (this.data[e] >= this.DV)
            ((this.data[e] -= this.DV),
              ++e >= this.t && (this.data[this.t++] = 0),
              ++this.data[e]);
        }
      }
      function qt() {}
      function Gt(t) {
        return t;
      }
      function Qt(t, e, r) {
        t.multiplyTo(e, r);
      }
      function zt(t, e) {
        t.squareTo(e);
      }
      function Ht(t) {
        return this.exp(t, new qt());
      }
      function Wt(t, e, r) {
        var a,
          i = Math.min(this.t + t.t, e);
        ((r.s = 0), (r.t = i));
        while (i > 0) r.data[--i] = 0;
        for (a = r.t - this.t; i < a; ++i)
          r.data[i + this.t] = this.am(0, t.data[i], r, i, 0, this.t);
        for (a = Math.min(t.t, e); i < a; ++i)
          this.am(0, t.data[i], r, i, 0, e - i);
        r.clamp();
      }
      function Xt(t, e, r) {
        --e;
        var a = (r.t = this.t + t.t - e);
        r.s = 0;
        while (--a >= 0) r.data[a] = 0;
        for (a = Math.max(e - this.t, 0); a < t.t; ++a)
          r.data[this.t + a - e] = this.am(
            e - a,
            t.data[a],
            r,
            0,
            0,
            this.t + a - e,
          );
        (r.clamp(), r.drShiftTo(1, r));
      }
      function Yt(t) {
        ((this.r2 = o()),
          (this.q3 = o()),
          BigInteger.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      function Zt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = o();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function Jt(t) {
        return t;
      }
      function $t(t) {
        (t.drShiftTo(this.m.t - 1, this.r2),
          t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
          this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
          this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2));
        while (t.compareTo(this.r2) < 0) t.dAddOffset(1, this.m.t + 1);
        t.subTo(this.r2, t);
        while (t.compareTo(this.m) >= 0) t.subTo(this.m, t);
      }
      function te(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function ee(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function re(t, e) {
        var r,
          a,
          i = t.bitLength(),
          n = E(1);
        if (i <= 0) return n;
        ((r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6),
          (a = i < 8 ? new K(e) : e.isEven() ? new Yt(e) : new Q(e)));
        var s = new Array(),
          u = 3,
          c = r - 1,
          l = (1 << r) - 1;
        if (((s[1] = a.convert(this)), r > 1)) {
          var h = o();
          a.sqrTo(s[1], h);
          while (u <= l) ((s[u] = o()), a.mulTo(h, s[u - 2], s[u]), (u += 2));
        }
        var p,
          f,
          d = t.t - 1,
          y = !0,
          g = o();
        i = N(t.data[d]) - 1;
        while (d >= 0) {
          (i >= c
            ? (p = (t.data[d] >> (i - c)) & l)
            : ((p = (t.data[d] & ((1 << (i + 1)) - 1)) << (c - i)),
              d > 0 && (p |= t.data[d - 1] >> (this.DB + i - c))),
            (u = r));
          while (0 == (1 & p)) ((p >>= 1), --u);
          if (((i -= u) < 0 && ((i += this.DB), --d), y))
            (s[p].copyTo(n), (y = !1));
          else {
            while (u > 1) (a.sqrTo(n, g), a.sqrTo(g, n), (u -= 2));
            (u > 0 ? a.sqrTo(n, g) : ((f = n), (n = g), (g = f)),
              a.mulTo(g, s[p], n));
          }
          while (d >= 0 && 0 == (t.data[d] & (1 << i)))
            (a.sqrTo(n, g),
              (f = n),
              (n = g),
              (g = f),
              --i < 0 && ((i = this.DB - 1), --d));
        }
        return a.revert(n);
      }
      function ae(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
          var a = e;
          ((e = r), (r = a));
        }
        var i = e.getLowestSetBit(),
          n = r.getLowestSetBit();
        if (n < 0) return e;
        (i < n && (n = i), n > 0 && (e.rShiftTo(n, e), r.rShiftTo(n, r)));
        while (e.signum() > 0)
          ((i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
            (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
            e.compareTo(r) >= 0
              ? (e.subTo(r, e), e.rShiftTo(1, e))
              : (r.subTo(e, r), r.rShiftTo(1, r)));
        return (n > 0 && r.lShiftTo(n, r), r);
      }
      function ie(t) {
        if (t <= 0) return 0;
        var e = this.DV % t,
          r = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (0 == e) r = this.data[0] % t;
          else
            for (var a = this.t - 1; a >= 0; --a)
              r = (e * r + this.data[a]) % t;
        return r;
      }
      function ne(t) {
        var e = t.isEven();
        if ((this.isEven() && e) || 0 == t.signum()) return BigInteger.ZERO;
        var r = t.clone(),
          a = this.clone(),
          i = E(1),
          n = E(0),
          s = E(0),
          o = E(1);
        while (0 != r.signum()) {
          while (r.isEven())
            (r.rShiftTo(1, r),
              e
                ? ((i.isEven() && n.isEven()) ||
                    (i.addTo(this, i), n.subTo(t, n)),
                  i.rShiftTo(1, i))
                : n.isEven() || n.subTo(t, n),
              n.rShiftTo(1, n));
          while (a.isEven())
            (a.rShiftTo(1, a),
              e
                ? ((s.isEven() && o.isEven()) ||
                    (s.addTo(this, s), o.subTo(t, o)),
                  s.rShiftTo(1, s))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o));
          r.compareTo(a) >= 0
            ? (r.subTo(a, r), e && i.subTo(s, i), n.subTo(o, n))
            : (a.subTo(r, a), e && s.subTo(i, s), o.subTo(n, o));
        }
        return 0 != a.compareTo(BigInteger.ONE)
          ? BigInteger.ZERO
          : o.compareTo(t) >= 0
            ? o.subtract(t)
            : o.signum() < 0
              ? (o.addTo(t, o), o.signum() < 0 ? o.add(t) : o)
              : o;
      }
      ((K.prototype.convert = x),
        (K.prototype.revert = M),
        (K.prototype.reduce = F),
        (K.prototype.mulTo = j),
        (K.prototype.sqrTo = q),
        (Q.prototype.convert = z),
        (Q.prototype.revert = H),
        (Q.prototype.reduce = W),
        (Q.prototype.mulTo = Y),
        (Q.prototype.sqrTo = X),
        (BigInteger.prototype.copyTo = v),
        (BigInteger.prototype.fromInt = C),
        (BigInteger.prototype.fromString = S),
        (BigInteger.prototype.clamp = T),
        (BigInteger.prototype.dlShiftTo = R),
        (BigInteger.prototype.drShiftTo = L),
        (BigInteger.prototype.lShiftTo = U),
        (BigInteger.prototype.rShiftTo = k),
        (BigInteger.prototype.subTo = D),
        (BigInteger.prototype.multiplyTo = P),
        (BigInteger.prototype.squareTo = O),
        (BigInteger.prototype.divRemTo = V),
        (BigInteger.prototype.invDigit = G),
        (BigInteger.prototype.isEven = Z),
        (BigInteger.prototype.exp = J),
        (BigInteger.prototype.toString = I),
        (BigInteger.prototype.negate = b),
        (BigInteger.prototype.abs = A),
        (BigInteger.prototype.compareTo = B),
        (BigInteger.prototype.bitLength = w),
        (BigInteger.prototype.mod = _),
        (BigInteger.prototype.modPowInt = $),
        (BigInteger.ZERO = E(0)),
        (BigInteger.ONE = E(1)),
        (qt.prototype.convert = Gt),
        (qt.prototype.revert = Gt),
        (qt.prototype.mulTo = Qt),
        (qt.prototype.sqrTo = zt),
        (Yt.prototype.convert = Zt),
        (Yt.prototype.revert = Jt),
        (Yt.prototype.reduce = $t),
        (Yt.prototype.mulTo = ee),
        (Yt.prototype.sqrTo = te));
      var se = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509,
        ],
        oe = (1 << 26) / se[se.length - 1];
      function ue(t) {
        var e,
          r = this.abs();
        if (1 == r.t && r.data[0] <= se[se.length - 1]) {
          for (e = 0; e < se.length; ++e) if (r.data[0] == se[e]) return !0;
          return !1;
        }
        if (r.isEven()) return !1;
        e = 1;
        while (e < se.length) {
          var a = se[e],
            i = e + 1;
          while (i < se.length && a < oe) a *= se[i++];
          a = r.modInt(a);
          while (e < i) if (a % se[e++] == 0) return !1;
        }
        return r.millerRabin(t);
      }
      function ce(t) {
        var e = this.subtract(BigInteger.ONE),
          r = e.getLowestSetBit();
        if (r <= 0) return !1;
        for (var a, i = e.shiftRight(r), n = le(), s = 0; s < t; ++s) {
          do {
            a = new BigInteger(this.bitLength(), n);
          } while (a.compareTo(BigInteger.ONE) <= 0 || a.compareTo(e) >= 0);
          var o = a.modPow(i, this);
          if (0 != o.compareTo(BigInteger.ONE) && 0 != o.compareTo(e)) {
            var u = 1;
            while (u++ < r && 0 != o.compareTo(e))
              if (
                ((o = o.modPowInt(2, this)), 0 == o.compareTo(BigInteger.ONE))
              )
                return !1;
            if (0 != o.compareTo(e)) return !1;
          }
        }
        return !0;
      }
      function le() {
        return {
          nextBytes: function (t) {
            for (var e = 0; e < t.length; ++e)
              t[e] = Math.floor(256 * Math.random());
          },
        };
      }
      ((BigInteger.prototype.chunkSize = it),
        (BigInteger.prototype.toRadix = st),
        (BigInteger.prototype.fromRadix = ot),
        (BigInteger.prototype.fromNumber = ut),
        (BigInteger.prototype.bitwiseTo = ft),
        (BigInteger.prototype.changeBit = Lt),
        (BigInteger.prototype.addTo = Pt),
        (BigInteger.prototype.dMultiply = Ft),
        (BigInteger.prototype.dAddOffset = jt),
        (BigInteger.prototype.multiplyLowerTo = Wt),
        (BigInteger.prototype.multiplyUpperTo = Xt),
        (BigInteger.prototype.modInt = ie),
        (BigInteger.prototype.millerRabin = ce),
        (BigInteger.prototype.clone = tt),
        (BigInteger.prototype.intValue = et),
        (BigInteger.prototype.byteValue = rt),
        (BigInteger.prototype.shortValue = at),
        (BigInteger.prototype.signum = nt),
        (BigInteger.prototype.toByteArray = ct),
        (BigInteger.prototype.equals = lt),
        (BigInteger.prototype.min = ht),
        (BigInteger.prototype.max = pt),
        (BigInteger.prototype.and = yt),
        (BigInteger.prototype.or = mt),
        (BigInteger.prototype.xor = Ct),
        (BigInteger.prototype.andNot = St),
        (BigInteger.prototype.not = Tt),
        (BigInteger.prototype.shiftLeft = It),
        (BigInteger.prototype.shiftRight = bt),
        (BigInteger.prototype.getLowestSetBit = Bt),
        (BigInteger.prototype.bitCount = wt),
        (BigInteger.prototype.testBit = Rt),
        (BigInteger.prototype.setBit = Ut),
        (BigInteger.prototype.clearBit = kt),
        (BigInteger.prototype.flipBit = Dt),
        (BigInteger.prototype.add = Ot),
        (BigInteger.prototype.subtract = Vt),
        (BigInteger.prototype.multiply = _t),
        (BigInteger.prototype.divide = Kt),
        (BigInteger.prototype.remainder = xt),
        (BigInteger.prototype.divideAndRemainder = Mt),
        (BigInteger.prototype.modPow = re),
        (BigInteger.prototype.modInverse = ne),
        (BigInteger.prototype.pow = Ht),
        (BigInteger.prototype.gcd = ae),
        (BigInteger.prototype.isProbablePrime = ue));
    },
    6740: function (t, e, r) {
      var a = r(2908);
      (r(3458), r(2921));
      var i = (t.exports = a.sha1 = a.sha1 || {});
      ((a.md.sha1 = a.md.algorithms.sha1 = i),
        (i.create = function () {
          s || o();
          var t = null,
            e = a.util.createBuffer(),
            r = new Array(80),
            i = {
              algorithm: "sha1",
              blockLength: 64,
              digestLength: 20,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                ((i.messageLength = 0),
                  (i.fullMessageLength = i.messageLength64 = []));
                for (var r = i.messageLengthSize / 4, n = 0; n < r; ++n)
                  i.fullMessageLength.push(0);
                return (
                  (e = a.util.createBuffer()),
                  (t = {
                    h0: 1732584193,
                    h1: 4023233417,
                    h2: 2562383102,
                    h3: 271733878,
                    h4: 3285377520,
                  }),
                  i
                );
              },
            };
          return (
            i.start(),
            (i.update = function (n, s) {
              "utf8" === s && (n = a.util.encodeUtf8(n));
              var o = n.length;
              ((i.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]));
              for (var c = i.fullMessageLength.length - 1; c >= 0; --c)
                ((i.fullMessageLength[c] += o[1]),
                  (o[1] = o[0] + ((i.fullMessageLength[c] / 4294967296) >>> 0)),
                  (i.fullMessageLength[c] = i.fullMessageLength[c] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0));
              return (
                e.putBytes(n),
                u(t, r, e),
                (e.read > 2048 || 0 === e.length()) && e.compact(),
                i
              );
            }),
            (i.digest = function () {
              var s = a.util.createBuffer();
              s.putBytes(e.bytes());
              var o,
                c,
                l =
                  i.fullMessageLength[i.fullMessageLength.length - 1] +
                  i.messageLengthSize,
                h = l & (i.blockLength - 1);
              s.putBytes(n.substr(0, i.blockLength - h));
              for (
                var p = 8 * i.fullMessageLength[0], f = 0;
                f < i.fullMessageLength.length - 1;
                ++f
              )
                ((o = 8 * i.fullMessageLength[f + 1]),
                  (c = (o / 4294967296) >>> 0),
                  (p += c),
                  s.putInt32(p >>> 0),
                  (p = o >>> 0));
              s.putInt32(p);
              var d = { h0: t.h0, h1: t.h1, h2: t.h2, h3: t.h3, h4: t.h4 };
              u(d, r, s);
              var y = a.util.createBuffer();
              return (
                y.putInt32(d.h0),
                y.putInt32(d.h1),
                y.putInt32(d.h2),
                y.putInt32(d.h3),
                y.putInt32(d.h4),
                y
              );
            }),
            i
          );
        }));
      var n = null,
        s = !1;
      function o() {
        ((n = String.fromCharCode(128)),
          (n += a.util.fillString(String.fromCharCode(0), 64)),
          (s = !0));
      }
      function u(t, e, r) {
        var a,
          i,
          n,
          s,
          o,
          u,
          c,
          l,
          h = r.length();
        while (h >= 64) {
          for (
            i = t.h0, n = t.h1, s = t.h2, o = t.h3, u = t.h4, l = 0;
            l < 16;
            ++l
          )
            ((a = r.getInt32()),
              (e[l] = a),
              (c = o ^ (n & (s ^ o))),
              (a = ((i << 5) | (i >>> 27)) + c + u + 1518500249 + a),
              (u = o),
              (o = s),
              (s = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = a));
          for (; l < 20; ++l)
            ((a = e[l - 3] ^ e[l - 8] ^ e[l - 14] ^ e[l - 16]),
              (a = (a << 1) | (a >>> 31)),
              (e[l] = a),
              (c = o ^ (n & (s ^ o))),
              (a = ((i << 5) | (i >>> 27)) + c + u + 1518500249 + a),
              (u = o),
              (o = s),
              (s = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = a));
          for (; l < 32; ++l)
            ((a = e[l - 3] ^ e[l - 8] ^ e[l - 14] ^ e[l - 16]),
              (a = (a << 1) | (a >>> 31)),
              (e[l] = a),
              (c = n ^ s ^ o),
              (a = ((i << 5) | (i >>> 27)) + c + u + 1859775393 + a),
              (u = o),
              (o = s),
              (s = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = a));
          for (; l < 40; ++l)
            ((a = e[l - 6] ^ e[l - 16] ^ e[l - 28] ^ e[l - 32]),
              (a = (a << 2) | (a >>> 30)),
              (e[l] = a),
              (c = n ^ s ^ o),
              (a = ((i << 5) | (i >>> 27)) + c + u + 1859775393 + a),
              (u = o),
              (o = s),
              (s = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = a));
          for (; l < 60; ++l)
            ((a = e[l - 6] ^ e[l - 16] ^ e[l - 28] ^ e[l - 32]),
              (a = (a << 2) | (a >>> 30)),
              (e[l] = a),
              (c = (n & s) | (o & (n ^ s))),
              (a = ((i << 5) | (i >>> 27)) + c + u + 2400959708 + a),
              (u = o),
              (o = s),
              (s = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = a));
          for (; l < 80; ++l)
            ((a = e[l - 6] ^ e[l - 16] ^ e[l - 28] ^ e[l - 32]),
              (a = (a << 2) | (a >>> 30)),
              (e[l] = a),
              (c = n ^ s ^ o),
              (a = ((i << 5) | (i >>> 27)) + c + u + 3395469782 + a),
              (u = o),
              (o = s),
              (s = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = a));
          ((t.h0 = (t.h0 + i) | 0),
            (t.h1 = (t.h1 + n) | 0),
            (t.h2 = (t.h2 + s) | 0),
            (t.h3 = (t.h3 + o) | 0),
            (t.h4 = (t.h4 + u) | 0),
            (h -= 64));
        }
      }
    },
    6741: function (t, e, r) {
      var a = r(2908);
      (r(5595),
        r(3951),
        r(6737),
        r(3458),
        r(10715),
        r(3952),
        r(5601),
        r(6742),
        r(4827),
        r(2921));
      var i = a.asn1,
        n = (t.exports = a.pki = a.pki || {}),
        s = n.oids,
        o = {};
      ((o["CN"] = s["commonName"]),
        (o["commonName"] = "CN"),
        (o["C"] = s["countryName"]),
        (o["countryName"] = "C"),
        (o["L"] = s["localityName"]),
        (o["localityName"] = "L"),
        (o["ST"] = s["stateOrProvinceName"]),
        (o["stateOrProvinceName"] = "ST"),
        (o["O"] = s["organizationName"]),
        (o["organizationName"] = "O"),
        (o["OU"] = s["organizationalUnitName"]),
        (o["organizationalUnitName"] = "OU"),
        (o["E"] = s["emailAddress"]),
        (o["emailAddress"] = "E"));
      var u = a.pki.rsa.publicKeyValidator,
        c = {
          name: "Certificate",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "Certificate.TBSCertificate",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "tbsCertificate",
              value: [
                {
                  name: "Certificate.TBSCertificate.version",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 0,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.version.integer",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.INTEGER,
                      constructed: !1,
                      capture: "certVersion",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.serialNumber",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.INTEGER,
                  constructed: !1,
                  capture: "certSerialNumber",
                },
                {
                  name: "Certificate.TBSCertificate.signature",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.signature.algorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                      capture: "certinfoSignatureOid",
                    },
                    {
                      name: "Certificate.TBSCertificate.signature.parameters",
                      tagClass: i.Class.UNIVERSAL,
                      optional: !0,
                      captureAsn1: "certinfoSignatureParams",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.issuer",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "certIssuer",
                },
                {
                  name: "Certificate.TBSCertificate.validity",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.UTCTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity1UTCTime",
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.GENERALIZEDTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity2GeneralizedTime",
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.UTCTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity3UTCTime",
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.GENERALIZEDTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity4GeneralizedTime",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.subject",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "certSubject",
                },
                u,
                {
                  name: "Certificate.TBSCertificate.issuerUniqueID",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 1,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.issuerUniqueID.id",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.BITSTRING,
                      constructed: !1,
                      captureBitStringValue: "certIssuerUniqueId",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.subjectUniqueID",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 2,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.subjectUniqueID.id",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.BITSTRING,
                      constructed: !1,
                      captureBitStringValue: "certSubjectUniqueId",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.extensions",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 3,
                  constructed: !0,
                  captureAsn1: "certExtensions",
                  optional: !0,
                },
              ],
            },
            {
              name: "Certificate.signatureAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "Certificate.signatureAlgorithm.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "certSignatureOid",
                },
                {
                  name: "Certificate.TBSCertificate.signature.parameters",
                  tagClass: i.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "certSignatureParams",
                },
              ],
            },
            {
              name: "Certificate.signatureValue",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.BITSTRING,
              constructed: !1,
              captureBitStringValue: "certSignature",
            },
          ],
        },
        l = {
          name: "rsapss",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "rsapss.hashAlgorithm",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              value: [
                {
                  name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                      capture: "hashOid",
                    },
                  ],
                },
              ],
            },
            {
              name: "rsapss.maskGenAlgorithm",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 1,
              constructed: !0,
              value: [
                {
                  name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                      capture: "maskGenOid",
                    },
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.SEQUENCE,
                      constructed: !0,
                      value: [
                        {
                          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                          tagClass: i.Class.UNIVERSAL,
                          type: i.Type.OID,
                          constructed: !1,
                          capture: "maskGenHashOid",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "rsapss.saltLength",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 2,
              optional: !0,
              value: [
                {
                  name: "rsapss.saltLength.saltLength",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.INTEGER,
                  constructed: !1,
                  capture: "saltLength",
                },
              ],
            },
            {
              name: "rsapss.trailerField",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 3,
              optional: !0,
              value: [
                {
                  name: "rsapss.trailer.trailer",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.INTEGER,
                  constructed: !1,
                  capture: "trailer",
                },
              ],
            },
          ],
        },
        h = {
          name: "CertificationRequestInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certificationRequestInfo",
          value: [
            {
              name: "CertificationRequestInfo.integer",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "certificationRequestInfoVersion",
            },
            {
              name: "CertificationRequestInfo.subject",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "certificationRequestInfoSubject",
            },
            u,
            {
              name: "CertificationRequestInfo.attributes",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              optional: !0,
              capture: "certificationRequestInfoAttributes",
              value: [
                {
                  name: "CertificationRequestInfo.attributes",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "CertificationRequestInfo.attributes.type",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                    },
                    {
                      name: "CertificationRequestInfo.attributes.value",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.SET,
                      constructed: !0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        p = {
          name: "CertificationRequest",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "csr",
          value: [
            h,
            {
              name: "CertificationRequest.signatureAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "CertificationRequest.signatureAlgorithm.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "csrSignatureOid",
                },
                {
                  name: "CertificationRequest.signatureAlgorithm.parameters",
                  tagClass: i.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "csrSignatureParams",
                },
              ],
            },
            {
              name: "CertificationRequest.signature",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.BITSTRING,
              constructed: !1,
              captureBitStringValue: "csrSignature",
            },
          ],
        };
      function f(t, e) {
        "string" === typeof e && (e = { shortName: e });
        for (var r, a = null, i = 0; null === a && i < t.attributes.length; ++i)
          ((r = t.attributes[i]),
            ((e.type && e.type === r.type) ||
              (e.name && e.name === r.name) ||
              (e.shortName && e.shortName === r.shortName)) &&
              (a = r));
        return a;
      }
      ((n.RDNAttributesAsArray = function (t, e) {
        for (var r, a, n, u = [], c = 0; c < t.value.length; ++c) {
          r = t.value[c];
          for (var l = 0; l < r.value.length; ++l)
            ((n = {}),
              (a = r.value[l]),
              (n.type = i.derToOid(a.value[0].value)),
              (n.value = a.value[1].value),
              (n.valueTagClass = a.value[1].type),
              n.type in s &&
                ((n.name = s[n.type]),
                n.name in o && (n.shortName = o[n.name])),
              e && (e.update(n.type), e.update(n.value)),
              u.push(n));
        }
        return u;
      }),
        (n.CRIAttributesAsArray = function (t) {
          for (var e = [], r = 0; r < t.length; ++r)
            for (
              var a = t[r],
                u = i.derToOid(a.value[0].value),
                c = a.value[1].value,
                l = 0;
              l < c.length;
              ++l
            ) {
              var h = {};
              if (
                ((h.type = u),
                (h.value = c[l].value),
                (h.valueTagClass = c[l].type),
                h.type in s &&
                  ((h.name = s[h.type]),
                  h.name in o && (h.shortName = o[h.name])),
                h.type === s.extensionRequest)
              ) {
                h.extensions = [];
                for (var p = 0; p < h.value.length; ++p)
                  h.extensions.push(n.certificateExtensionFromAsn1(h.value[p]));
              }
              e.push(h);
            }
          return e;
        }));
      var d = function (t, e, r) {
        var a = {};
        if (t !== s["RSASSA-PSS"]) return a;
        r &&
          (a = {
            hash: { algorithmOid: s["sha1"] },
            mgf: { algorithmOid: s["mgf1"], hash: { algorithmOid: s["sha1"] } },
            saltLength: 20,
          });
        var n = {},
          o = [];
        if (!i.validate(e, l, n, o)) {
          var u = new Error("Cannot read RSASSA-PSS parameter block.");
          throw ((u.errors = o), u);
        }
        return (
          void 0 !== n.hashOid &&
            ((a.hash = a.hash || {}),
            (a.hash.algorithmOid = i.derToOid(n.hashOid))),
          void 0 !== n.maskGenOid &&
            ((a.mgf = a.mgf || {}),
            (a.mgf.algorithmOid = i.derToOid(n.maskGenOid)),
            (a.mgf.hash = a.mgf.hash || {}),
            (a.mgf.hash.algorithmOid = i.derToOid(n.maskGenHashOid))),
          void 0 !== n.saltLength &&
            (a.saltLength = n.saltLength.charCodeAt(0)),
          a
        );
      };
      function y(t) {
        for (
          var e,
            r,
            n = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []),
            s = t.attributes,
            o = 0;
          o < s.length;
          ++o
        ) {
          e = s[o];
          var u = e.value,
            c = i.Type.PRINTABLESTRING;
          ("valueTagClass" in e &&
            ((c = e.valueTagClass),
            c === i.Type.UTF8 && (u = a.util.encodeUtf8(u))),
            (r = i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(e.type).getBytes(),
                ),
                i.create(i.Class.UNIVERSAL, c, !1, u),
              ]),
            ])),
            n.value.push(r));
        }
        return n;
      }
      function g(t) {
        for (var e, r = 0; r < t.length; ++r) {
          if (
            ((e = t[r]),
            "undefined" === typeof e.name &&
              (e.type && e.type in n.oids
                ? (e.name = n.oids[e.type])
                : e.shortName &&
                  e.shortName in o &&
                  (e.name = n.oids[o[e.shortName]])),
            "undefined" === typeof e.type)
          ) {
            if (!e.name || !(e.name in n.oids)) {
              var a = new Error("Attribute type not specified.");
              throw ((a.attribute = e), a);
            }
            e.type = n.oids[e.name];
          }
          if (
            ("undefined" === typeof e.shortName &&
              e.name &&
              e.name in o &&
              (e.shortName = o[e.name]),
            e.type === s.extensionRequest &&
              ((e.valueConstructed = !0),
              (e.valueTagClass = i.Type.SEQUENCE),
              !e.value && e.extensions))
          ) {
            e.value = [];
            for (var u = 0; u < e.extensions.length; ++u)
              e.value.push(n.certificateExtensionToAsn1(m(e.extensions[u])));
          }
          if ("undefined" === typeof e.value) {
            a = new Error("Attribute value not specified.");
            throw ((a.attribute = e), a);
          }
        }
      }
      function m(t, e) {
        if (
          ((e = e || {}),
          "undefined" === typeof t.name &&
            t.id &&
            t.id in n.oids &&
            (t.name = n.oids[t.id]),
          "undefined" === typeof t.id)
        ) {
          if (!t.name || !(t.name in n.oids)) {
            var r = new Error("Extension ID not specified.");
            throw ((r.extension = t), r);
          }
          t.id = n.oids[t.name];
        }
        if ("undefined" !== typeof t.value) return t;
        if ("keyUsage" === t.name) {
          var o = 0,
            u = 0,
            c = 0;
          (t.digitalSignature && ((u |= 128), (o = 7)),
            t.nonRepudiation && ((u |= 64), (o = 6)),
            t.keyEncipherment && ((u |= 32), (o = 5)),
            t.dataEncipherment && ((u |= 16), (o = 4)),
            t.keyAgreement && ((u |= 8), (o = 3)),
            t.keyCertSign && ((u |= 4), (o = 2)),
            t.cRLSign && ((u |= 2), (o = 1)),
            t.encipherOnly && ((u |= 1), (o = 0)),
            t.decipherOnly && ((c |= 128), (o = 7)));
          var l = String.fromCharCode(o);
          (0 !== c
            ? (l += String.fromCharCode(u) + String.fromCharCode(c))
            : 0 !== u && (l += String.fromCharCode(u)),
            (t.value = i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, l)));
        } else if ("basicConstraints" === t.name)
          ((t.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [])),
            t.cA &&
              t.value.value.push(
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.BOOLEAN,
                  !1,
                  String.fromCharCode(255),
                ),
              ),
            "pathLenConstraint" in t &&
              t.value.value.push(
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.INTEGER,
                  !1,
                  i.integerToDer(t.pathLenConstraint).getBytes(),
                ),
              ));
        else if ("extKeyUsage" === t.name) {
          t.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          var h = t.value.value;
          for (var p in t)
            !0 === t[p] &&
              (p in s
                ? h.push(
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.OID,
                      !1,
                      i.oidToDer(s[p]).getBytes(),
                    ),
                  )
                : -1 !== p.indexOf(".") &&
                  h.push(
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.OID,
                      !1,
                      i.oidToDer(p).getBytes(),
                    ),
                  ));
        } else if ("nsCertType" === t.name) {
          ((o = 0), (u = 0));
          (t.client && ((u |= 128), (o = 7)),
            t.server && ((u |= 64), (o = 6)),
            t.email && ((u |= 32), (o = 5)),
            t.objsign && ((u |= 16), (o = 4)),
            t.reserved && ((u |= 8), (o = 3)),
            t.sslCA && ((u |= 4), (o = 2)),
            t.emailCA && ((u |= 2), (o = 1)),
            t.objCA && ((u |= 1), (o = 0)));
          l = String.fromCharCode(o);
          (0 !== u && (l += String.fromCharCode(u)),
            (t.value = i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, l)));
        } else if ("subjectAltName" === t.name || "issuerAltName" === t.name) {
          t.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          for (var f = 0; f < t.altNames.length; ++f) {
            C = t.altNames[f];
            l = C.value;
            if (7 === C.type && C.ip) {
              if (((l = a.util.bytesFromIP(C.ip)), null === l)) {
                r = new Error(
                  'Extension "ip" value is not a valid IPv4 or IPv6 address.',
                );
                throw ((r.extension = t), r);
              }
            } else
              8 === C.type &&
                (l = C.oid ? i.oidToDer(i.oidToDer(C.oid)) : i.oidToDer(l));
            t.value.value.push(
              i.create(i.Class.CONTEXT_SPECIFIC, C.type, !1, l),
            );
          }
        } else if ("nsComment" === t.name && e.cert) {
          if (
            !/^[\x00-\x7F]*$/.test(t.comment) ||
            t.comment.length < 1 ||
            t.comment.length > 128
          )
            throw new Error('Invalid "nsComment" content.');
          t.value = i.create(
            i.Class.UNIVERSAL,
            i.Type.IA5STRING,
            !1,
            t.comment,
          );
        } else if ("subjectKeyIdentifier" === t.name && e.cert) {
          var d = e.cert.generateSubjectKeyIdentifier();
          ((t.subjectKeyIdentifier = d.toHex()),
            (t.value = i.create(
              i.Class.UNIVERSAL,
              i.Type.OCTETSTRING,
              !1,
              d.getBytes(),
            )));
        } else if ("authorityKeyIdentifier" === t.name && e.cert) {
          t.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          h = t.value.value;
          if (t.keyIdentifier) {
            var g =
              !0 === t.keyIdentifier
                ? e.cert.generateSubjectKeyIdentifier().getBytes()
                : t.keyIdentifier;
            h.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !1, g));
          }
          if (t.authorityCertIssuer) {
            var m = [
              i.create(i.Class.CONTEXT_SPECIFIC, 4, !0, [
                y(
                  !0 === t.authorityCertIssuer
                    ? e.cert.issuer
                    : t.authorityCertIssuer,
                ),
              ]),
            ];
            h.push(i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, m));
          }
          if (t.serialNumber) {
            var v = a.util.hexToBytes(
              !0 === t.serialNumber ? e.cert.serialNumber : t.serialNumber,
            );
            h.push(i.create(i.Class.CONTEXT_SPECIFIC, 2, !1, v));
          }
        } else if ("cRLDistributionPoints" === t.name) {
          t.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          h = t.value.value;
          var C,
            E = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []),
            S = i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, []);
          for (f = 0; f < t.altNames.length; ++f) {
            C = t.altNames[f];
            l = C.value;
            if (7 === C.type && C.ip) {
              if (((l = a.util.bytesFromIP(C.ip)), null === l)) {
                r = new Error(
                  'Extension "ip" value is not a valid IPv4 or IPv6 address.',
                );
                throw ((r.extension = t), r);
              }
            } else
              8 === C.type &&
                (l = C.oid ? i.oidToDer(i.oidToDer(C.oid)) : i.oidToDer(l));
            S.value.push(i.create(i.Class.CONTEXT_SPECIFIC, C.type, !1, l));
          }
          (E.value.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [S])),
            h.push(E));
        }
        if ("undefined" === typeof t.value) {
          r = new Error("Extension value not specified.");
          throw ((r.extension = t), r);
        }
        return t;
      }
      function v(t, e) {
        switch (t) {
          case s["RSASSA-PSS"]:
            var r = [];
            return (
              void 0 !== e.hash.algorithmOid &&
                r.push(
                  i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                      i.create(
                        i.Class.UNIVERSAL,
                        i.Type.OID,
                        !1,
                        i.oidToDer(e.hash.algorithmOid).getBytes(),
                      ),
                      i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, ""),
                    ]),
                  ]),
                ),
              void 0 !== e.mgf.algorithmOid &&
                r.push(
                  i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                      i.create(
                        i.Class.UNIVERSAL,
                        i.Type.OID,
                        !1,
                        i.oidToDer(e.mgf.algorithmOid).getBytes(),
                      ),
                      i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                        i.create(
                          i.Class.UNIVERSAL,
                          i.Type.OID,
                          !1,
                          i.oidToDer(e.mgf.hash.algorithmOid).getBytes(),
                        ),
                        i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, ""),
                      ]),
                    ]),
                  ]),
                ),
              void 0 !== e.saltLength &&
                r.push(
                  i.create(i.Class.CONTEXT_SPECIFIC, 2, !0, [
                    i.create(
                      i.Class.UNIVERSAL,
                      i.Type.INTEGER,
                      !1,
                      i.integerToDer(e.saltLength).getBytes(),
                    ),
                  ]),
                ),
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, r)
            );
          default:
            return i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "");
        }
      }
      function C(t) {
        var e = i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, []);
        if (0 === t.attributes.length) return e;
        for (var r = t.attributes, n = 0; n < r.length; ++n) {
          var s = r[n],
            o = s.value,
            u = i.Type.UTF8;
          ("valueTagClass" in s && (u = s.valueTagClass),
            u === i.Type.UTF8 && (o = a.util.encodeUtf8(o)));
          var c = !1;
          "valueConstructed" in s && (c = s.valueConstructed);
          var l = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(
              i.Class.UNIVERSAL,
              i.Type.OID,
              !1,
              i.oidToDer(s.type).getBytes(),
            ),
            i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [
              i.create(i.Class.UNIVERSAL, u, c, o),
            ]),
          ]);
          e.value.push(l);
        }
        return e;
      }
      ((n.certificateFromPem = function (t, e, r) {
        var s = a.pem.decode(t)[0];
        if (
          "CERTIFICATE" !== s.type &&
          "X509 CERTIFICATE" !== s.type &&
          "TRUSTED CERTIFICATE" !== s.type
        ) {
          var o = new Error(
            'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".',
          );
          throw ((o.headerType = s.type), o);
        }
        if (s.procType && "ENCRYPTED" === s.procType.type)
          throw new Error(
            "Could not convert certificate from PEM; PEM is encrypted.",
          );
        var u = i.fromDer(s.body, r);
        return n.certificateFromAsn1(u, e);
      }),
        (n.certificateToPem = function (t, e) {
          var r = {
            type: "CERTIFICATE",
            body: i.toDer(n.certificateToAsn1(t)).getBytes(),
          };
          return a.pem.encode(r, { maxline: e });
        }),
        (n.publicKeyFromPem = function (t) {
          var e = a.pem.decode(t)[0];
          if ("PUBLIC KEY" !== e.type && "RSA PUBLIC KEY" !== e.type) {
            var r = new Error(
              'Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".',
            );
            throw ((r.headerType = e.type), r);
          }
          if (e.procType && "ENCRYPTED" === e.procType.type)
            throw new Error(
              "Could not convert public key from PEM; PEM is encrypted.",
            );
          var s = i.fromDer(e.body);
          return n.publicKeyFromAsn1(s);
        }),
        (n.publicKeyToPem = function (t, e) {
          var r = {
            type: "PUBLIC KEY",
            body: i.toDer(n.publicKeyToAsn1(t)).getBytes(),
          };
          return a.pem.encode(r, { maxline: e });
        }),
        (n.publicKeyToRSAPublicKeyPem = function (t, e) {
          var r = {
            type: "RSA PUBLIC KEY",
            body: i.toDer(n.publicKeyToRSAPublicKey(t)).getBytes(),
          };
          return a.pem.encode(r, { maxline: e });
        }),
        (n.getPublicKeyFingerprint = function (t, e) {
          e = e || {};
          var r,
            s = e.md || a.md.sha1.create(),
            o = e.type || "RSAPublicKey";
          switch (o) {
            case "RSAPublicKey":
              r = i.toDer(n.publicKeyToRSAPublicKey(t)).getBytes();
              break;
            case "SubjectPublicKeyInfo":
              r = i.toDer(n.publicKeyToAsn1(t)).getBytes();
              break;
            default:
              throw new Error('Unknown fingerprint type "' + e.type + '".');
          }
          (s.start(), s.update(r));
          var u = s.digest();
          if ("hex" === e.encoding) {
            var c = u.toHex();
            return e.delimiter ? c.match(/.{2}/g).join(e.delimiter) : c;
          }
          if ("binary" === e.encoding) return u.getBytes();
          if (e.encoding)
            throw new Error('Unknown encoding "' + e.encoding + '".');
          return u;
        }),
        (n.certificationRequestFromPem = function (t, e, r) {
          var s = a.pem.decode(t)[0];
          if ("CERTIFICATE REQUEST" !== s.type) {
            var o = new Error(
              'Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".',
            );
            throw ((o.headerType = s.type), o);
          }
          if (s.procType && "ENCRYPTED" === s.procType.type)
            throw new Error(
              "Could not convert certification request from PEM; PEM is encrypted.",
            );
          var u = i.fromDer(s.body, r);
          return n.certificationRequestFromAsn1(u, e);
        }),
        (n.certificationRequestToPem = function (t, e) {
          var r = {
            type: "CERTIFICATE REQUEST",
            body: i.toDer(n.certificationRequestToAsn1(t)).getBytes(),
          };
          return a.pem.encode(r, { maxline: e });
        }),
        (n.createCertificate = function () {
          var t = {
            version: 2,
            serialNumber: "00",
            signatureOid: null,
            signature: null,
            siginfo: {},
          };
          return (
            (t.siginfo.algorithmOid = null),
            (t.validity = {}),
            (t.validity.notBefore = new Date()),
            (t.validity.notAfter = new Date()),
            (t.issuer = {}),
            (t.issuer.getField = function (e) {
              return f(t.issuer, e);
            }),
            (t.issuer.addField = function (e) {
              (g([e]), t.issuer.attributes.push(e));
            }),
            (t.issuer.attributes = []),
            (t.issuer.hash = null),
            (t.subject = {}),
            (t.subject.getField = function (e) {
              return f(t.subject, e);
            }),
            (t.subject.addField = function (e) {
              (g([e]), t.subject.attributes.push(e));
            }),
            (t.subject.attributes = []),
            (t.subject.hash = null),
            (t.extensions = []),
            (t.publicKey = null),
            (t.md = null),
            (t.setSubject = function (e, r) {
              (g(e),
                (t.subject.attributes = e),
                delete t.subject.uniqueId,
                r && (t.subject.uniqueId = r),
                (t.subject.hash = null));
            }),
            (t.setIssuer = function (e, r) {
              (g(e),
                (t.issuer.attributes = e),
                delete t.issuer.uniqueId,
                r && (t.issuer.uniqueId = r),
                (t.issuer.hash = null));
            }),
            (t.setExtensions = function (e) {
              for (var r = 0; r < e.length; ++r) m(e[r], { cert: t });
              t.extensions = e;
            }),
            (t.getExtension = function (e) {
              "string" === typeof e && (e = { name: e });
              for (
                var r, a = null, i = 0;
                null === a && i < t.extensions.length;
                ++i
              )
                ((r = t.extensions[i]),
                  ((e.id && r.id === e.id) || (e.name && r.name === e.name)) &&
                    (a = r));
              return a;
            }),
            (t.sign = function (e, r) {
              t.md = r || a.md.sha1.create();
              var o = s[t.md.algorithm + "WithRSAEncryption"];
              if (!o) {
                var u = new Error(
                  "Could not compute certificate digest. Unknown message digest algorithm OID.",
                );
                throw ((u.algorithm = t.md.algorithm), u);
              }
              ((t.signatureOid = t.siginfo.algorithmOid = o),
                (t.tbsCertificate = n.getTBSCertificate(t)));
              var c = i.toDer(t.tbsCertificate);
              (t.md.update(c.getBytes()), (t.signature = e.sign(t.md)));
            }),
            (t.verify = function (e) {
              var r = !1;
              if (!t.issued(e)) {
                var o = e.issuer,
                  u = t.subject,
                  c = new Error(
                    "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.",
                  );
                throw (
                  (c.expectedIssuer = o.attributes),
                  (c.actualIssuer = u.attributes),
                  c
                );
              }
              var l = e.md;
              if (null === l) {
                if (e.signatureOid in s) {
                  var h = s[e.signatureOid];
                  switch (h) {
                    case "sha1WithRSAEncryption":
                      l = a.md.sha1.create();
                      break;
                    case "md5WithRSAEncryption":
                      l = a.md.md5.create();
                      break;
                    case "sha256WithRSAEncryption":
                      l = a.md.sha256.create();
                      break;
                    case "sha384WithRSAEncryption":
                      l = a.md.sha384.create();
                      break;
                    case "sha512WithRSAEncryption":
                      l = a.md.sha512.create();
                      break;
                    case "RSASSA-PSS":
                      l = a.md.sha256.create();
                      break;
                  }
                }
                if (null === l) {
                  c = new Error(
                    "Could not compute certificate digest. Unknown signature OID.",
                  );
                  throw ((c.signatureOid = e.signatureOid), c);
                }
                var p = e.tbsCertificate || n.getTBSCertificate(e),
                  f = i.toDer(p);
                l.update(f.getBytes());
              }
              if (null !== l) {
                var d;
                switch (e.signatureOid) {
                  case s.sha1WithRSAEncryption:
                    d = void 0;
                    break;
                  case s["RSASSA-PSS"]:
                    var y, g;
                    if (
                      ((y = s[e.signatureParameters.mgf.hash.algorithmOid]),
                      void 0 === y || void 0 === a.md[y])
                    ) {
                      c = new Error("Unsupported MGF hash function.");
                      throw (
                        (c.oid = e.signatureParameters.mgf.hash.algorithmOid),
                        (c.name = y),
                        c
                      );
                    }
                    if (
                      ((g = s[e.signatureParameters.mgf.algorithmOid]),
                      void 0 === g || void 0 === a.mgf[g])
                    ) {
                      c = new Error("Unsupported MGF function.");
                      throw (
                        (c.oid = e.signatureParameters.mgf.algorithmOid),
                        (c.name = g),
                        c
                      );
                    }
                    if (
                      ((g = a.mgf[g].create(a.md[y].create())),
                      (y = s[e.signatureParameters.hash.algorithmOid]),
                      void 0 === y || void 0 === a.md[y])
                    )
                      throw {
                        message: "Unsupported RSASSA-PSS hash function.",
                        oid: e.signatureParameters.hash.algorithmOid,
                        name: y,
                      };
                    d = a.pss.create(
                      a.md[y].create(),
                      g,
                      e.signatureParameters.saltLength,
                    );
                    break;
                }
                r = t.publicKey.verify(l.digest().getBytes(), e.signature, d);
              }
              return r;
            }),
            (t.isIssuer = function (e) {
              var r = !1,
                a = t.issuer,
                i = e.subject;
              if (a.hash && i.hash) r = a.hash === i.hash;
              else if (a.attributes.length === i.attributes.length) {
                var n, s;
                r = !0;
                for (var o = 0; r && o < a.attributes.length; ++o)
                  ((n = a.attributes[o]),
                    (s = i.attributes[o]),
                    (n.type === s.type && n.value === s.value) || (r = !1));
              }
              return r;
            }),
            (t.issued = function (e) {
              return e.isIssuer(t);
            }),
            (t.generateSubjectKeyIdentifier = function () {
              return n.getPublicKeyFingerprint(t.publicKey, {
                type: "RSAPublicKey",
              });
            }),
            (t.verifySubjectKeyIdentifier = function () {
              for (
                var e = s["subjectKeyIdentifier"], r = 0;
                r < t.extensions.length;
                ++r
              ) {
                var i = t.extensions[r];
                if (i.id === e) {
                  var n = t.generateSubjectKeyIdentifier().getBytes();
                  return a.util.hexToBytes(i.subjectKeyIdentifier) === n;
                }
              }
              return !1;
            }),
            t
          );
        }),
        (n.certificateFromAsn1 = function (t, e) {
          var r = {},
            o = [];
          if (!i.validate(t, c, r, o)) {
            var u = new Error(
              "Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.",
            );
            throw ((u.errors = o), u);
          }
          var l = i.derToOid(r.publicKeyOid);
          if (l !== n.oids.rsaEncryption)
            throw new Error("Cannot read public key. OID is not RSA.");
          var h = n.createCertificate();
          h.version = r.certVersion ? r.certVersion.charCodeAt(0) : 0;
          var p = a.util.createBuffer(r.certSerialNumber);
          ((h.serialNumber = p.toHex()),
            (h.signatureOid = a.asn1.derToOid(r.certSignatureOid)),
            (h.signatureParameters = d(
              h.signatureOid,
              r.certSignatureParams,
              !0,
            )),
            (h.siginfo.algorithmOid = a.asn1.derToOid(r.certinfoSignatureOid)),
            (h.siginfo.parameters = d(
              h.siginfo.algorithmOid,
              r.certinfoSignatureParams,
              !1,
            )),
            (h.signature = r.certSignature));
          var y = [];
          if (
            (void 0 !== r.certValidity1UTCTime &&
              y.push(i.utcTimeToDate(r.certValidity1UTCTime)),
            void 0 !== r.certValidity2GeneralizedTime &&
              y.push(i.generalizedTimeToDate(r.certValidity2GeneralizedTime)),
            void 0 !== r.certValidity3UTCTime &&
              y.push(i.utcTimeToDate(r.certValidity3UTCTime)),
            void 0 !== r.certValidity4GeneralizedTime &&
              y.push(i.generalizedTimeToDate(r.certValidity4GeneralizedTime)),
            y.length > 2)
          )
            throw new Error(
              "Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.",
            );
          if (y.length < 2)
            throw new Error(
              "Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.",
            );
          if (
            ((h.validity.notBefore = y[0]),
            (h.validity.notAfter = y[1]),
            (h.tbsCertificate = r.tbsCertificate),
            e)
          ) {
            if (((h.md = null), h.signatureOid in s)) {
              l = s[h.signatureOid];
              switch (l) {
                case "sha1WithRSAEncryption":
                  h.md = a.md.sha1.create();
                  break;
                case "md5WithRSAEncryption":
                  h.md = a.md.md5.create();
                  break;
                case "sha256WithRSAEncryption":
                  h.md = a.md.sha256.create();
                  break;
                case "sha384WithRSAEncryption":
                  h.md = a.md.sha384.create();
                  break;
                case "sha512WithRSAEncryption":
                  h.md = a.md.sha512.create();
                  break;
                case "RSASSA-PSS":
                  h.md = a.md.sha256.create();
                  break;
              }
            }
            if (null === h.md) {
              u = new Error(
                "Could not compute certificate digest. Unknown signature OID.",
              );
              throw ((u.signatureOid = h.signatureOid), u);
            }
            var m = i.toDer(h.tbsCertificate);
            h.md.update(m.getBytes());
          }
          var v = a.md.sha1.create();
          ((h.issuer.getField = function (t) {
            return f(h.issuer, t);
          }),
            (h.issuer.addField = function (t) {
              (g([t]), h.issuer.attributes.push(t));
            }),
            (h.issuer.attributes = n.RDNAttributesAsArray(r.certIssuer, v)),
            r.certIssuerUniqueId && (h.issuer.uniqueId = r.certIssuerUniqueId),
            (h.issuer.hash = v.digest().toHex()));
          var C = a.md.sha1.create();
          return (
            (h.subject.getField = function (t) {
              return f(h.subject, t);
            }),
            (h.subject.addField = function (t) {
              (g([t]), h.subject.attributes.push(t));
            }),
            (h.subject.attributes = n.RDNAttributesAsArray(r.certSubject, C)),
            r.certSubjectUniqueId &&
              (h.subject.uniqueId = r.certSubjectUniqueId),
            (h.subject.hash = C.digest().toHex()),
            r.certExtensions
              ? (h.extensions = n.certificateExtensionsFromAsn1(
                  r.certExtensions,
                ))
              : (h.extensions = []),
            (h.publicKey = n.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
            h
          );
        }),
        (n.certificateExtensionsFromAsn1 = function (t) {
          for (var e = [], r = 0; r < t.value.length; ++r)
            for (var a = t.value[r], i = 0; i < a.value.length; ++i)
              e.push(n.certificateExtensionFromAsn1(a.value[i]));
          return e;
        }),
        (n.certificateExtensionFromAsn1 = function (t) {
          var e = {};
          if (
            ((e.id = i.derToOid(t.value[0].value)),
            (e.critical = !1),
            t.value[1].type === i.Type.BOOLEAN
              ? ((e.critical = 0 !== t.value[1].value.charCodeAt(0)),
                (e.value = t.value[2].value))
              : (e.value = t.value[1].value),
            e.id in s)
          )
            if (((e.name = s[e.id]), "keyUsage" === e.name)) {
              var r = i.fromDer(e.value),
                n = 0,
                o = 0;
              (r.value.length > 1 &&
                ((n = r.value.charCodeAt(1)),
                (o = r.value.length > 2 ? r.value.charCodeAt(2) : 0)),
                (e.digitalSignature = 128 === (128 & n)),
                (e.nonRepudiation = 64 === (64 & n)),
                (e.keyEncipherment = 32 === (32 & n)),
                (e.dataEncipherment = 16 === (16 & n)),
                (e.keyAgreement = 8 === (8 & n)),
                (e.keyCertSign = 4 === (4 & n)),
                (e.cRLSign = 2 === (2 & n)),
                (e.encipherOnly = 1 === (1 & n)),
                (e.decipherOnly = 128 === (128 & o)));
            } else if ("basicConstraints" === e.name) {
              r = i.fromDer(e.value);
              r.value.length > 0 && r.value[0].type === i.Type.BOOLEAN
                ? (e.cA = 0 !== r.value[0].value.charCodeAt(0))
                : (e.cA = !1);
              var u = null;
              (r.value.length > 0 && r.value[0].type === i.Type.INTEGER
                ? (u = r.value[0].value)
                : r.value.length > 1 && (u = r.value[1].value),
                null !== u && (e.pathLenConstraint = i.derToInteger(u)));
            } else if ("extKeyUsage" === e.name) {
              r = i.fromDer(e.value);
              for (var c = 0; c < r.value.length; ++c) {
                var l = i.derToOid(r.value[c].value);
                l in s ? (e[s[l]] = !0) : (e[l] = !0);
              }
            } else if ("nsCertType" === e.name) {
              ((r = i.fromDer(e.value)), (n = 0));
              (r.value.length > 1 && (n = r.value.charCodeAt(1)),
                (e.client = 128 === (128 & n)),
                (e.server = 64 === (64 & n)),
                (e.email = 32 === (32 & n)),
                (e.objsign = 16 === (16 & n)),
                (e.reserved = 8 === (8 & n)),
                (e.sslCA = 4 === (4 & n)),
                (e.emailCA = 2 === (2 & n)),
                (e.objCA = 1 === (1 & n)));
            } else if (
              "subjectAltName" === e.name ||
              "issuerAltName" === e.name
            ) {
              var h;
              e.altNames = [];
              r = i.fromDer(e.value);
              for (var p = 0; p < r.value.length; ++p) {
                h = r.value[p];
                var f = { type: h.type, value: h.value };
                switch ((e.altNames.push(f), h.type)) {
                  case 1:
                  case 2:
                  case 6:
                    break;
                  case 7:
                    f.ip = a.util.bytesToIP(h.value);
                    break;
                  case 8:
                    f.oid = i.derToOid(h.value);
                    break;
                  default:
                }
              }
            } else if ("subjectKeyIdentifier" === e.name) {
              r = i.fromDer(e.value);
              e.subjectKeyIdentifier = a.util.bytesToHex(r.value);
            }
          return e;
        }),
        (n.certificationRequestFromAsn1 = function (t, e) {
          var r = {},
            o = [];
          if (!i.validate(t, p, r, o)) {
            var u = new Error(
              "Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.",
            );
            throw ((u.errors = o), u);
          }
          var c = i.derToOid(r.publicKeyOid);
          if (c !== n.oids.rsaEncryption)
            throw new Error("Cannot read public key. OID is not RSA.");
          var l = n.createCertificationRequest();
          if (
            ((l.version = r.csrVersion ? r.csrVersion.charCodeAt(0) : 0),
            (l.signatureOid = a.asn1.derToOid(r.csrSignatureOid)),
            (l.signatureParameters = d(
              l.signatureOid,
              r.csrSignatureParams,
              !0,
            )),
            (l.siginfo.algorithmOid = a.asn1.derToOid(r.csrSignatureOid)),
            (l.siginfo.parameters = d(
              l.siginfo.algorithmOid,
              r.csrSignatureParams,
              !1,
            )),
            (l.signature = r.csrSignature),
            (l.certificationRequestInfo = r.certificationRequestInfo),
            e)
          ) {
            if (((l.md = null), l.signatureOid in s)) {
              c = s[l.signatureOid];
              switch (c) {
                case "sha1WithRSAEncryption":
                  l.md = a.md.sha1.create();
                  break;
                case "md5WithRSAEncryption":
                  l.md = a.md.md5.create();
                  break;
                case "sha256WithRSAEncryption":
                  l.md = a.md.sha256.create();
                  break;
                case "sha384WithRSAEncryption":
                  l.md = a.md.sha384.create();
                  break;
                case "sha512WithRSAEncryption":
                  l.md = a.md.sha512.create();
                  break;
                case "RSASSA-PSS":
                  l.md = a.md.sha256.create();
                  break;
              }
            }
            if (null === l.md) {
              u = new Error(
                "Could not compute certification request digest. Unknown signature OID.",
              );
              throw ((u.signatureOid = l.signatureOid), u);
            }
            var h = i.toDer(l.certificationRequestInfo);
            l.md.update(h.getBytes());
          }
          var y = a.md.sha1.create();
          return (
            (l.subject.getField = function (t) {
              return f(l.subject, t);
            }),
            (l.subject.addField = function (t) {
              (g([t]), l.subject.attributes.push(t));
            }),
            (l.subject.attributes = n.RDNAttributesAsArray(
              r.certificationRequestInfoSubject,
              y,
            )),
            (l.subject.hash = y.digest().toHex()),
            (l.publicKey = n.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
            (l.getAttribute = function (t) {
              return f(l, t);
            }),
            (l.addAttribute = function (t) {
              (g([t]), l.attributes.push(t));
            }),
            (l.attributes = n.CRIAttributesAsArray(
              r.certificationRequestInfoAttributes || [],
            )),
            l
          );
        }),
        (n.createCertificationRequest = function () {
          var t = {
            version: 0,
            signatureOid: null,
            signature: null,
            siginfo: {},
          };
          return (
            (t.siginfo.algorithmOid = null),
            (t.subject = {}),
            (t.subject.getField = function (e) {
              return f(t.subject, e);
            }),
            (t.subject.addField = function (e) {
              (g([e]), t.subject.attributes.push(e));
            }),
            (t.subject.attributes = []),
            (t.subject.hash = null),
            (t.publicKey = null),
            (t.attributes = []),
            (t.getAttribute = function (e) {
              return f(t, e);
            }),
            (t.addAttribute = function (e) {
              (g([e]), t.attributes.push(e));
            }),
            (t.md = null),
            (t.setSubject = function (e) {
              (g(e), (t.subject.attributes = e), (t.subject.hash = null));
            }),
            (t.setAttributes = function (e) {
              (g(e), (t.attributes = e));
            }),
            (t.sign = function (e, r) {
              t.md = r || a.md.sha1.create();
              var o = s[t.md.algorithm + "WithRSAEncryption"];
              if (!o) {
                var u = new Error(
                  "Could not compute certification request digest. Unknown message digest algorithm OID.",
                );
                throw ((u.algorithm = t.md.algorithm), u);
              }
              ((t.signatureOid = t.siginfo.algorithmOid = o),
                (t.certificationRequestInfo =
                  n.getCertificationRequestInfo(t)));
              var c = i.toDer(t.certificationRequestInfo);
              (t.md.update(c.getBytes()), (t.signature = e.sign(t.md)));
            }),
            (t.verify = function () {
              var e = !1,
                r = t.md;
              if (null === r) {
                if (t.signatureOid in s) {
                  var o = s[t.signatureOid];
                  switch (o) {
                    case "sha1WithRSAEncryption":
                      r = a.md.sha1.create();
                      break;
                    case "md5WithRSAEncryption":
                      r = a.md.md5.create();
                      break;
                    case "sha256WithRSAEncryption":
                      r = a.md.sha256.create();
                      break;
                    case "sha384WithRSAEncryption":
                      r = a.md.sha384.create();
                      break;
                    case "sha512WithRSAEncryption":
                      r = a.md.sha512.create();
                      break;
                    case "RSASSA-PSS":
                      r = a.md.sha256.create();
                      break;
                  }
                }
                if (null === r) {
                  var u = new Error(
                    "Could not compute certification request digest. Unknown signature OID.",
                  );
                  throw ((u.signatureOid = t.signatureOid), u);
                }
                var c =
                    t.certificationRequestInfo ||
                    n.getCertificationRequestInfo(t),
                  l = i.toDer(c);
                r.update(l.getBytes());
              }
              if (null !== r) {
                var h;
                switch (t.signatureOid) {
                  case s.sha1WithRSAEncryption:
                    break;
                  case s["RSASSA-PSS"]:
                    var p, f;
                    if (
                      ((p = s[t.signatureParameters.mgf.hash.algorithmOid]),
                      void 0 === p || void 0 === a.md[p])
                    ) {
                      u = new Error("Unsupported MGF hash function.");
                      throw (
                        (u.oid = t.signatureParameters.mgf.hash.algorithmOid),
                        (u.name = p),
                        u
                      );
                    }
                    if (
                      ((f = s[t.signatureParameters.mgf.algorithmOid]),
                      void 0 === f || void 0 === a.mgf[f])
                    ) {
                      u = new Error("Unsupported MGF function.");
                      throw (
                        (u.oid = t.signatureParameters.mgf.algorithmOid),
                        (u.name = f),
                        u
                      );
                    }
                    if (
                      ((f = a.mgf[f].create(a.md[p].create())),
                      (p = s[t.signatureParameters.hash.algorithmOid]),
                      void 0 === p || void 0 === a.md[p])
                    ) {
                      u = new Error("Unsupported RSASSA-PSS hash function.");
                      throw (
                        (u.oid = t.signatureParameters.hash.algorithmOid),
                        (u.name = p),
                        u
                      );
                    }
                    h = a.pss.create(
                      a.md[p].create(),
                      f,
                      t.signatureParameters.saltLength,
                    );
                    break;
                }
                e = t.publicKey.verify(r.digest().getBytes(), t.signature, h);
              }
              return e;
            }),
            t
          );
        }));
      var E = new Date("1950-01-01T00:00:00Z"),
        S = new Date("2050-01-01T00:00:00Z");
      function T(t) {
        return t >= E && t < S
          ? i.create(i.Class.UNIVERSAL, i.Type.UTCTIME, !1, i.dateToUtcTime(t))
          : i.create(
              i.Class.UNIVERSAL,
              i.Type.GENERALIZEDTIME,
              !1,
              i.dateToGeneralizedTime(t),
            );
      }
      ((n.getTBSCertificate = function (t) {
        var e = T(t.validity.notBefore),
          r = T(t.validity.notAfter),
          s = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.INTEGER,
                !1,
                i.integerToDer(t.version).getBytes(),
              ),
            ]),
            i.create(
              i.Class.UNIVERSAL,
              i.Type.INTEGER,
              !1,
              a.util.hexToBytes(t.serialNumber),
            ),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.OID,
                !1,
                i.oidToDer(t.siginfo.algorithmOid).getBytes(),
              ),
              v(t.siginfo.algorithmOid, t.siginfo.parameters),
            ]),
            y(t.issuer),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [e, r]),
            y(t.subject),
            n.publicKeyToAsn1(t.publicKey),
          ]);
        return (
          t.issuer.uniqueId &&
            s.value.push(
              i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.BITSTRING,
                  !1,
                  String.fromCharCode(0) + t.issuer.uniqueId,
                ),
              ]),
            ),
          t.subject.uniqueId &&
            s.value.push(
              i.create(i.Class.CONTEXT_SPECIFIC, 2, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.BITSTRING,
                  !1,
                  String.fromCharCode(0) + t.subject.uniqueId,
                ),
              ]),
            ),
          t.extensions.length > 0 &&
            s.value.push(n.certificateExtensionsToAsn1(t.extensions)),
          s
        );
      }),
        (n.getCertificationRequestInfo = function (t) {
          var e = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(
              i.Class.UNIVERSAL,
              i.Type.INTEGER,
              !1,
              i.integerToDer(t.version).getBytes(),
            ),
            y(t.subject),
            n.publicKeyToAsn1(t.publicKey),
            C(t),
          ]);
          return e;
        }),
        (n.distinguishedNameToAsn1 = function (t) {
          return y(t);
        }),
        (n.certificateToAsn1 = function (t) {
          var e = t.tbsCertificate || n.getTBSCertificate(t);
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            e,
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.OID,
                !1,
                i.oidToDer(t.signatureOid).getBytes(),
              ),
              v(t.signatureOid, t.signatureParameters),
            ]),
            i.create(
              i.Class.UNIVERSAL,
              i.Type.BITSTRING,
              !1,
              String.fromCharCode(0) + t.signature,
            ),
          ]);
        }),
        (n.certificateExtensionsToAsn1 = function (t) {
          var e = i.create(i.Class.CONTEXT_SPECIFIC, 3, !0, []),
            r = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          e.value.push(r);
          for (var a = 0; a < t.length; ++a)
            r.value.push(n.certificateExtensionToAsn1(t[a]));
          return e;
        }),
        (n.certificateExtensionToAsn1 = function (t) {
          var e = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          (e.value.push(
            i.create(
              i.Class.UNIVERSAL,
              i.Type.OID,
              !1,
              i.oidToDer(t.id).getBytes(),
            ),
          ),
            t.critical &&
              e.value.push(
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.BOOLEAN,
                  !1,
                  String.fromCharCode(255),
                ),
              ));
          var r = t.value;
          return (
            "string" !== typeof t.value && (r = i.toDer(r).getBytes()),
            e.value.push(
              i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, r),
            ),
            e
          );
        }),
        (n.certificationRequestToAsn1 = function (t) {
          var e =
            t.certificationRequestInfo || n.getCertificationRequestInfo(t);
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            e,
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.OID,
                !1,
                i.oidToDer(t.signatureOid).getBytes(),
              ),
              v(t.signatureOid, t.signatureParameters),
            ]),
            i.create(
              i.Class.UNIVERSAL,
              i.Type.BITSTRING,
              !1,
              String.fromCharCode(0) + t.signature,
            ),
          ]);
        }),
        (n.createCaStore = function (t) {
          var e = { certs: {} };
          function r(t) {
            return (s(t), e.certs[t.hash] || null);
          }
          function s(t) {
            if (!t.hash) {
              var e = a.md.sha1.create();
              ((t.attributes = n.RDNAttributesAsArray(y(t), e)),
                (t.hash = e.digest().toHex()));
            }
          }
          if (
            ((e.getIssuer = function (t) {
              var e = r(t.issuer);
              return e;
            }),
            (e.addCertificate = function (t) {
              if (
                ("string" === typeof t && (t = a.pki.certificateFromPem(t)),
                s(t.subject),
                !e.hasCertificate(t))
              )
                if (t.subject.hash in e.certs) {
                  var r = e.certs[t.subject.hash];
                  (a.util.isArray(r) || (r = [r]),
                    r.push(t),
                    (e.certs[t.subject.hash] = r));
                } else e.certs[t.subject.hash] = t;
            }),
            (e.hasCertificate = function (t) {
              "string" === typeof t && (t = a.pki.certificateFromPem(t));
              var e = r(t.subject);
              if (!e) return !1;
              a.util.isArray(e) || (e = [e]);
              for (
                var s = i.toDer(n.certificateToAsn1(t)).getBytes(), o = 0;
                o < e.length;
                ++o
              ) {
                var u = i.toDer(n.certificateToAsn1(e[o])).getBytes();
                if (s === u) return !0;
              }
              return !1;
            }),
            (e.listAllCertificates = function () {
              var t = [];
              for (var r in e.certs)
                if (e.certs.hasOwnProperty(r)) {
                  var i = e.certs[r];
                  if (a.util.isArray(i))
                    for (var n = 0; n < i.length; ++n) t.push(i[n]);
                  else t.push(i);
                }
              return t;
            }),
            (e.removeCertificate = function (t) {
              var o;
              if (
                ("string" === typeof t && (t = a.pki.certificateFromPem(t)),
                s(t.subject),
                !e.hasCertificate(t))
              )
                return null;
              var u = r(t.subject);
              if (!a.util.isArray(u))
                return (
                  (o = e.certs[t.subject.hash]),
                  delete e.certs[t.subject.hash],
                  o
                );
              for (
                var c = i.toDer(n.certificateToAsn1(t)).getBytes(), l = 0;
                l < u.length;
                ++l
              ) {
                var h = i.toDer(n.certificateToAsn1(u[l])).getBytes();
                c === h && ((o = u[l]), u.splice(l, 1));
              }
              return (0 === u.length && delete e.certs[t.subject.hash], o);
            }),
            t)
          )
            for (var o = 0; o < t.length; ++o) {
              var u = t[o];
              e.addCertificate(u);
            }
          return e;
        }),
        (n.certificateError = {
          bad_certificate: "forge.pki.BadCertificate",
          unsupported_certificate: "forge.pki.UnsupportedCertificate",
          certificate_revoked: "forge.pki.CertificateRevoked",
          certificate_expired: "forge.pki.CertificateExpired",
          certificate_unknown: "forge.pki.CertificateUnknown",
          unknown_ca: "forge.pki.UnknownCertificateAuthority",
        }),
        (n.verifyCertificateChain = function (t, e, r) {
          ("function" === typeof r && (r = { verify: r }),
            (r = r || {}),
            (e = e.slice(0)));
          var i = e.slice(0),
            s = r.validityCheckDate;
          "undefined" === typeof s && (s = new Date());
          var o = !0,
            u = null,
            c = 0;
          do {
            var l = e.shift(),
              h = null,
              p = !1;
            if (
              (s &&
                (s < l.validity.notBefore || s > l.validity.notAfter) &&
                (u = {
                  message: "Certificate is not valid yet or has expired.",
                  error: n.certificateError.certificate_expired,
                  notBefore: l.validity.notBefore,
                  notAfter: l.validity.notAfter,
                  now: s,
                }),
              null === u)
            ) {
              if (
                ((h = e[0] || t.getIssuer(l)),
                null === h && l.isIssuer(l) && ((p = !0), (h = l)),
                h)
              ) {
                var f = h;
                a.util.isArray(f) || (f = [f]);
                var d = !1;
                while (!d && f.length > 0) {
                  h = f.shift();
                  try {
                    d = h.verify(l);
                  } catch (I) {}
                }
                d ||
                  (u = {
                    message: "Certificate signature is invalid.",
                    error: n.certificateError.bad_certificate,
                  });
              }
              null !== u ||
                (h && !p) ||
                t.hasCertificate(l) ||
                (u = {
                  message: "Certificate is not trusted.",
                  error: n.certificateError.unknown_ca,
                });
            }
            if (
              (null === u &&
                h &&
                !l.isIssuer(h) &&
                (u = {
                  message: "Certificate issuer is invalid.",
                  error: n.certificateError.bad_certificate,
                }),
              null === u)
            )
              for (
                var y = { keyUsage: !0, basicConstraints: !0 }, g = 0;
                null === u && g < l.extensions.length;
                ++g
              ) {
                var m = l.extensions[g];
                m.critical &&
                  !(m.name in y) &&
                  (u = {
                    message:
                      "Certificate has an unsupported critical extension.",
                    error: n.certificateError.unsupported_certificate,
                  });
              }
            if (null === u && (!o || (0 === e.length && (!h || p)))) {
              var v = l.getExtension("basicConstraints"),
                C = l.getExtension("keyUsage");
              if (
                (null !== C &&
                  ((C.keyCertSign && null !== v) ||
                    (u = {
                      message:
                        "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                      error: n.certificateError.bad_certificate,
                    })),
                null !== u ||
                  null === v ||
                  v.cA ||
                  (u = {
                    message:
                      "Certificate basicConstraints indicates the certificate is not a CA.",
                    error: n.certificateError.bad_certificate,
                  }),
                null === u && null !== C && "pathLenConstraint" in v)
              ) {
                var E = c - 1;
                E > v.pathLenConstraint &&
                  (u = {
                    message:
                      "Certificate basicConstraints pathLenConstraint violated.",
                    error: n.certificateError.bad_certificate,
                  });
              }
            }
            var S = null === u || u.error,
              T = r.verify ? r.verify(S, c, i) : S;
            if (!0 !== T)
              throw (
                !0 === S &&
                  (u = {
                    message: "The application rejected the certificate.",
                    error: n.certificateError.bad_certificate,
                  }),
                (T || 0 === T) &&
                  ("object" !== typeof T || a.util.isArray(T)
                    ? "string" === typeof T && (u.error = T)
                    : (T.message && (u.message = T.message),
                      T.error && (u.error = T.error))),
                u
              );
            ((u = null), (o = !1), ++c);
          } while (e.length > 0);
          return !0;
        }));
    },
    6742: function (t, e, r) {
      var a = r(2908);
      (r(3831), r(2921));
      var i = (t.exports = a.pss = a.pss || {});
      i.create = function (t) {
        3 === arguments.length &&
          (t = {
            md: arguments[0],
            mgf: arguments[1],
            saltLength: arguments[2],
          });
        var e,
          r = t.md,
          i = t.mgf,
          n = r.digestLength,
          s = t.salt || null;
        if (
          ("string" === typeof s && (s = a.util.createBuffer(s)),
          "saltLength" in t)
        )
          e = t.saltLength;
        else {
          if (null === s)
            throw new Error(
              "Salt length not specified or specific salt not given.",
            );
          e = s.length();
        }
        if (null !== s && s.length() !== e)
          throw new Error(
            "Given salt length does not match length of given salt.",
          );
        var o = t.prng || a.random,
          u = {
            encode: function (t, u) {
              var c,
                l,
                h = u - 1,
                p = Math.ceil(h / 8),
                f = t.digest().getBytes();
              if (p < n + e + 2)
                throw new Error("Message is too long to encrypt.");
              l = null === s ? o.getBytesSync(e) : s.bytes();
              var d = new a.util.ByteBuffer();
              (d.fillWithByte(0, 8),
                d.putBytes(f),
                d.putBytes(l),
                r.start(),
                r.update(d.getBytes()));
              var y = r.digest().getBytes(),
                g = new a.util.ByteBuffer();
              (g.fillWithByte(0, p - e - n - 2), g.putByte(1), g.putBytes(l));
              var m = g.getBytes(),
                v = p - n - 1,
                C = i.generate(y, v),
                E = "";
              for (c = 0; c < v; c++)
                E += String.fromCharCode(m.charCodeAt(c) ^ C.charCodeAt(c));
              var S = (65280 >> (8 * p - h)) & 255;
              return (
                (E = String.fromCharCode(E.charCodeAt(0) & ~S) + E.substr(1)),
                E + y + String.fromCharCode(188)
              );
            },
            verify: function (t, s, o) {
              var u,
                c = o - 1,
                l = Math.ceil(c / 8);
              if (((s = s.substr(-l)), l < n + e + 2))
                throw new Error(
                  "Inconsistent parameters to PSS signature verification.",
                );
              if (188 !== s.charCodeAt(l - 1))
                throw new Error("Encoded message does not end in 0xBC.");
              var h = l - n - 1,
                p = s.substr(0, h),
                f = s.substr(h, n),
                d = (65280 >> (8 * l - c)) & 255;
              if (0 !== (p.charCodeAt(0) & d))
                throw new Error("Bits beyond keysize not zero as expected.");
              var y = i.generate(f, h),
                g = "";
              for (u = 0; u < h; u++)
                g += String.fromCharCode(p.charCodeAt(u) ^ y.charCodeAt(u));
              g = String.fromCharCode(g.charCodeAt(0) & ~d) + g.substr(1);
              var m = l - n - e - 2;
              for (u = 0; u < m; u++)
                if (0 !== g.charCodeAt(u))
                  throw new Error("Leftmost octets not zero as expected");
              if (1 !== g.charCodeAt(m))
                throw new Error(
                  "Inconsistent PSS signature, 0x01 marker not found",
                );
              var v = g.substr(-e),
                C = new a.util.ByteBuffer();
              (C.fillWithByte(0, 8),
                C.putBytes(t),
                C.putBytes(v),
                r.start(),
                r.update(C.getBytes()));
              var E = r.digest().getBytes();
              return f === E;
            },
          };
        return u;
      };
    },
    6743: function (t, e, r) {
      var a = r(2908);
      (r(3458), r(2921));
      var i = (t.exports = a.md5 = a.md5 || {});
      ((a.md.md5 = a.md.algorithms.md5 = i),
        (i.create = function () {
          c || l();
          var t = null,
            e = a.util.createBuffer(),
            r = new Array(16),
            i = {
              algorithm: "md5",
              blockLength: 64,
              digestLength: 16,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                ((i.messageLength = 0),
                  (i.fullMessageLength = i.messageLength64 = []));
                for (var r = i.messageLengthSize / 4, n = 0; n < r; ++n)
                  i.fullMessageLength.push(0);
                return (
                  (e = a.util.createBuffer()),
                  (t = {
                    h0: 1732584193,
                    h1: 4023233417,
                    h2: 2562383102,
                    h3: 271733878,
                  }),
                  i
                );
              },
            };
          return (
            i.start(),
            (i.update = function (n, s) {
              "utf8" === s && (n = a.util.encodeUtf8(n));
              var o = n.length;
              ((i.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]));
              for (var u = i.fullMessageLength.length - 1; u >= 0; --u)
                ((i.fullMessageLength[u] += o[1]),
                  (o[1] = o[0] + ((i.fullMessageLength[u] / 4294967296) >>> 0)),
                  (i.fullMessageLength[u] = i.fullMessageLength[u] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0));
              return (
                e.putBytes(n),
                h(t, r, e),
                (e.read > 2048 || 0 === e.length()) && e.compact(),
                i
              );
            }),
            (i.digest = function () {
              var s = a.util.createBuffer();
              s.putBytes(e.bytes());
              var o =
                  i.fullMessageLength[i.fullMessageLength.length - 1] +
                  i.messageLengthSize,
                u = o & (i.blockLength - 1);
              s.putBytes(n.substr(0, i.blockLength - u));
              for (
                var c, l = 0, p = i.fullMessageLength.length - 1;
                p >= 0;
                --p
              )
                ((c = 8 * i.fullMessageLength[p] + l),
                  (l = (c / 4294967296) >>> 0),
                  s.putInt32Le(c >>> 0));
              var f = { h0: t.h0, h1: t.h1, h2: t.h2, h3: t.h3 };
              h(f, r, s);
              var d = a.util.createBuffer();
              return (
                d.putInt32Le(f.h0),
                d.putInt32Le(f.h1),
                d.putInt32Le(f.h2),
                d.putInt32Le(f.h3),
                d
              );
            }),
            i
          );
        }));
      var n = null,
        s = null,
        o = null,
        u = null,
        c = !1;
      function l() {
        ((n = String.fromCharCode(128)),
          (n += a.util.fillString(String.fromCharCode(0), 64)),
          (s = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0,
            5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10,
            13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13,
            4, 11, 2, 9,
          ]),
          (o = [
            7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9,
            14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4,
            11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15,
            21, 6, 10, 15, 21, 6, 10, 15, 21,
          ]),
          (u = new Array(64)));
        for (var t = 0; t < 64; ++t)
          u[t] = Math.floor(4294967296 * Math.abs(Math.sin(t + 1)));
        c = !0;
      }
      function h(t, e, r) {
        var a,
          i,
          n,
          c,
          l,
          h,
          p,
          f,
          d = r.length();
        while (d >= 64) {
          for (i = t.h0, n = t.h1, c = t.h2, l = t.h3, f = 0; f < 16; ++f)
            ((e[f] = r.getInt32Le()),
              (h = l ^ (n & (c ^ l))),
              (a = i + h + u[f] + e[f]),
              (p = o[f]),
              (i = l),
              (l = c),
              (c = n),
              (n += (a << p) | (a >>> (32 - p))));
          for (; f < 32; ++f)
            ((h = c ^ (l & (n ^ c))),
              (a = i + h + u[f] + e[s[f]]),
              (p = o[f]),
              (i = l),
              (l = c),
              (c = n),
              (n += (a << p) | (a >>> (32 - p))));
          for (; f < 48; ++f)
            ((h = n ^ c ^ l),
              (a = i + h + u[f] + e[s[f]]),
              (p = o[f]),
              (i = l),
              (l = c),
              (c = n),
              (n += (a << p) | (a >>> (32 - p))));
          for (; f < 64; ++f)
            ((h = c ^ (n | ~l)),
              (a = i + h + u[f] + e[s[f]]),
              (p = o[f]),
              (i = l),
              (l = c),
              (c = n),
              (n += (a << p) | (a >>> (32 - p))));
          ((t.h0 = (t.h0 + i) | 0),
            (t.h1 = (t.h1 + n) | 0),
            (t.h2 = (t.h2 + c) | 0),
            (t.h3 = (t.h3 + l) | 0),
            (d -= 64));
        }
      }
    },
  },
]);
