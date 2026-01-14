(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [154],
  {
    11301: function (t, e, n) {
      var r = n(3015),
        i = n(5699);
      for (var o in i) r[o] = i[o];
      t.exports = {
        bufferutils: n(6897),
        Block: n(6898),
        BlockGold: n(11317),
        ECPair: n(5703),
        ECSignature: n(5705),
        HDNode: n(11321),
        Transaction: n(4866),
        TransactionBuilder: n(11322),
        address: n(5704),
        lwma: n(6900),
        crypto: n(3847),
        networks: n(3969),
        opcodes: n(2771),
        script: r,
      };
    },
    11302: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(3015),
        o = n(6894),
        f = n(2758),
        s = n(2771);
      function u(t) {
        return t === s.OP_0 || i.isCanonicalSignature(t);
      }
      function h(t, e) {
        var n = i.decompile(t);
        return (
          !(n.length < 2) &&
          n[0] === s.OP_0 &&
          (e ? n.slice(1).every(u) : n.slice(1).every(i.isCanonicalSignature))
        );
      }
      h.toJSON = function () {
        return "multisig input";
      };
      var a = r.allocUnsafe(0);
      function c(t, e) {
        if ((f([u], t), e)) {
          var n = o.decode(e);
          if (t.length < n.m)
            throw new TypeError("Not enough signatures provided");
          if (t.length > n.pubKeys.length)
            throw new TypeError("Too many signatures provided");
        }
        return [].concat(
          a,
          t.map(function (t) {
            return t === s.OP_0 ? a : t;
          }),
        );
      }
      function A(t, e) {
        return i.compile(c(t, e));
      }
      function g(t, e) {
        return (f(f.Array, t), f(h, t, e), t.slice(1));
      }
      function I(t, e) {
        var n = i.decompile(t);
        return g(n, e);
      }
      t.exports = {
        check: h,
        decode: I,
        decodeStack: g,
        encode: A,
        encodeStack: c,
      };
    },
    11303: function (t, e, n) {
      var r = n(3015),
        i = n(3072),
        o = n(2758),
        f = n(2771);
      function s(t) {
        var e = r.compile(t);
        return e.length > 1 && e[0] === f.OP_RETURN;
      }
      function u(t) {
        return (o(i.Buffer, t), r.compile([f.OP_RETURN, t]));
      }
      function h(t) {
        return (o(s, t), t.slice(2));
      }
      ((s.toJSON = function () {
        return "null data output";
      }),
        (t.exports = { output: { check: s, decode: h, encode: u } }));
    },
    11304: function (t, e, n) {
      var r = n(3015),
        i = n(2758);
      function o(t) {
        var e = r.decompile(t);
        return 1 === e.length && r.isCanonicalSignature(e[0]);
      }
      function f(t) {
        return (i(r.isCanonicalSignature, t), [t]);
      }
      function s(t) {
        return r.compile(f(t));
      }
      function u(t) {
        return (i(i.Array, t), i(o, t), t[0]);
      }
      function h(t) {
        var e = r.decompile(t);
        return u(e);
      }
      ((o.toJSON = function () {
        return "pubKey input";
      }),
        (t.exports = {
          check: o,
          decode: h,
          decodeStack: u,
          encode: s,
          encodeStack: f,
        }));
    },
    11305: function (t, e, n) {
      var r = n(3015),
        i = n(2758),
        o = n(2771);
      function f(t) {
        var e = r.decompile(t);
        return (
          2 === e.length && r.isCanonicalPubKey(e[0]) && e[1] === o.OP_CHECKSIG
        );
      }
      function s(t) {
        return (i(r.isCanonicalPubKey, t), r.compile([t, o.OP_CHECKSIG]));
      }
      function u(t) {
        var e = r.decompile(t);
        return (i(f, e), e[0]);
      }
      ((f.toJSON = function () {
        return "pubKey output";
      }),
        (t.exports = { check: f, decode: u, encode: s }));
    },
    11306: function (t, e, n) {
      var r = n(3015),
        i = n(2758);
      function o(t) {
        var e = r.decompile(t);
        return (
          2 === e.length &&
          r.isCanonicalSignature(e[0]) &&
          r.isCanonicalPubKey(e[1])
        );
      }
      function f(t, e) {
        return (
          i(
            { signature: r.isCanonicalSignature, pubKey: r.isCanonicalPubKey },
            { signature: t, pubKey: e },
          ),
          [t, e]
        );
      }
      function s(t, e) {
        return r.compile(f(t, e));
      }
      function u(t) {
        return (i(i.Array, t), i(o, t), { signature: t[0], pubKey: t[1] });
      }
      function h(t) {
        var e = r.decompile(t);
        return u(e);
      }
      ((o.toJSON = function () {
        return "pubKeyHash input";
      }),
        (t.exports = {
          check: o,
          decode: h,
          decodeStack: u,
          encode: s,
          encodeStack: f,
        }));
    },
    11307: function (t, e, n) {
      var r = n(3015),
        i = n(3072),
        o = n(2758),
        f = n(2771);
      function s(t) {
        var e = r.compile(t);
        return (
          25 === e.length &&
          e[0] === f.OP_DUP &&
          e[1] === f.OP_HASH160 &&
          20 === e[2] &&
          e[23] === f.OP_EQUALVERIFY &&
          e[24] === f.OP_CHECKSIG
        );
      }
      function u(t) {
        return (
          o(i.Hash160bit, t),
          r.compile([
            f.OP_DUP,
            f.OP_HASH160,
            t,
            f.OP_EQUALVERIFY,
            f.OP_CHECKSIG,
          ])
        );
      }
      function h(t) {
        return (o(s, t), t.slice(3, 23));
      }
      ((s.toJSON = function () {
        return "pubKeyHash output";
      }),
        (t.exports = { check: s, decode: h, encode: u }));
    },
    11308: function (t, e, n) {
      t.exports = { input: n(11309), output: n(11310) };
    },
    11309: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(3015),
        o = n(2758),
        f = n(5700),
        s = n(5701),
        u = n(5702),
        h = n(6895),
        a = n(6896);
      function c(t, e) {
        var n = i.decompile(t);
        if (n.length < 1) return !1;
        var o = n[n.length - 1];
        if (!r.isBuffer(o)) return !1;
        var c = i.decompile(i.compile(n.slice(0, -1))),
          A = i.decompile(o);
        return (
          0 !== A.length &&
          !!i.isPushOnly(c) &&
          (1 === n.length
            ? a.check(A) || h.check(A)
            : !(!u.input.check(c) || !u.output.check(A)) ||
              !(!f.input.check(c, e) || !f.output.check(A)) ||
              !(!s.input.check(c) || !s.output.check(A)))
        );
      }
      function A(t, e) {
        var n = i.compile(e);
        return [].concat(t, n);
      }
      function g(t, e) {
        var n = i.decompile(t);
        return i.compile(A(n, e));
      }
      function I(t) {
        return (
          o(o.Array, t),
          o(c, t),
          { redeemScriptStack: t.slice(0, -1), redeemScript: t[t.length - 1] }
        );
      }
      function p(t) {
        var e = i.decompile(t),
          n = I(e);
        return (
          (n.redeemScriptSig = i.compile(n.redeemScriptStack)),
          delete n.redeemScriptStack,
          n
        );
      }
      ((c.toJSON = function () {
        return "scriptHash input";
      }),
        (t.exports = {
          check: c,
          decode: p,
          decodeStack: I,
          encode: g,
          encodeStack: A,
        }));
    },
    11310: function (t, e, n) {
      var r = n(3015),
        i = n(3072),
        o = n(2758),
        f = n(2771);
      function s(t) {
        var e = r.compile(t);
        return (
          23 === e.length &&
          e[0] === f.OP_HASH160 &&
          20 === e[1] &&
          e[22] === f.OP_EQUAL
        );
      }
      function u(t) {
        return (o(i.Hash160bit, t), r.compile([f.OP_HASH160, t, f.OP_EQUAL]));
      }
      function h(t) {
        return (o(s, t), t.slice(2, 22));
      }
      ((s.toJSON = function () {
        return "scriptHash output";
      }),
        (t.exports = { check: s, decode: h, encode: u }));
    },
    11311: function (t, e, n) {
      t.exports = { input: n(11312), output: n(6895) };
    },
    11312: function (t, e, n) {
      var r = n(3015),
        i = n(2758);
      function o(t) {
        return r.isCanonicalPubKey(t) && 33 === t.length;
      }
      function f(t) {
        var e = r.decompile(t);
        return 2 === e.length && r.isCanonicalSignature(e[0]) && o(e[1]);
      }
      function s(t, e) {
        return (
          i(
            { signature: r.isCanonicalSignature, pubKey: o },
            { signature: t, pubKey: e },
          ),
          [t, e]
        );
      }
      function u(t) {
        return (i(i.Array, t), i(f, t), { signature: t[0], pubKey: t[1] });
      }
      ((f.toJSON = function () {
        return "witnessPubKeyHash input";
      }),
        (t.exports = { check: f, decodeStack: u, encodeStack: s }));
    },
    11313: function (t, e, n) {
      t.exports = { input: n(11314), output: n(6896) };
    },
    11314: function (t, e, n) {
      (function (e) {
        var r = n(3015),
          i = n(3072),
          o = n(2758),
          f = n(5700),
          s = n(5701),
          u = n(5702);
        function h(t, n) {
          if ((o(i.Array, t), t.length < 1)) return !1;
          var h = t[t.length - 1];
          if (!e.isBuffer(h)) return !1;
          var a = r.decompile(h);
          if (0 === a.length) return !1;
          var c = r.compile(t.slice(0, -1));
          return (
            !(!u.input.check(c) || !u.output.check(a)) ||
            !(!f.input.check(c, n) || !f.output.check(a)) ||
            !(!s.input.check(c) || !s.output.check(a))
          );
        }
        function a(t, e) {
          return (
            o(
              { witnessData: [i.Buffer], witnessScript: i.Buffer },
              { witnessData: t, witnessScript: e },
            ),
            [].concat(t, e)
          );
        }
        function c(t) {
          return (
            o(o.Array, t),
            o(h, t),
            { witnessData: t.slice(0, -1), witnessScript: t[t.length - 1] }
          );
        }
        ((h.toJSON = function () {
          return "witnessScriptHash input";
        }),
          (t.exports = { check: h, decodeStack: c, encodeStack: a }));
      }).call(this, n(2).Buffer);
    },
    11315: function (t, e, n) {
      t.exports = { output: n(11316) };
    },
    11316: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(3015),
        o = n(3072),
        f = n(2758),
        s = n(2771),
        u = r.from("aa21a9ed", "hex");
      function h(t) {
        var e = i.compile(t);
        return (
          e.length > 37 &&
          e[0] === s.OP_RETURN &&
          36 === e[1] &&
          e.slice(2, 6).equals(u)
        );
      }
      function a(t) {
        f(o.Hash256bit, t);
        var e = r.allocUnsafe(36);
        return (u.copy(e, 0), t.copy(e, 4), i.compile([s.OP_RETURN, e]));
      }
      function c(t) {
        return (f(h, t), i.decompile(t)[1].slice(4, 36));
      }
      ((h.toJSON = function () {
        return "Witness commitment output";
      }),
        (t.exports = { check: h, decode: c, encode: a }));
    },
    11317: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(3847),
        o = n(2864),
        f = n(3969),
        s = n(11318),
        u = n(6900),
        h = n(4866),
        Block = n(6898);
      function a() {
        ((this.version = 1),
          (this.prevHash = null),
          (this.merkleRoot = null),
          (this.height = 0),
          (this.reserved = null),
          (this.timestamp = 0),
          (this.bits = 0),
          (this.nonce = null),
          (this.solutionLength = 0),
          (this.solution = null),
          (this.transactions = []));
      }
      ((a.prototype = Object.create(Block.prototype)),
        (a.fromBuffer = function (t) {
          if (t.length < 140) throw new Error("Buffer too small (< 140 bytes)");
          var e = 0;
          function n(n) {
            return ((e += n), t.slice(e - n, e));
          }
          function r() {
            var n = t.readUInt32LE(e);
            return ((e += 4), n);
          }
          function i() {
            var n = t.readInt32LE(e);
            return ((e += 4), n);
          }
          function f() {
            var n = o.decode(t, e);
            return ((e += o.decode.bytes), n);
          }
          var s = new a();
          if (
            ((s.version = i()),
            (s.prevHash = n(32)),
            (s.merkleRoot = n(32)),
            (s.height = r()),
            (s.reserved = n(28)),
            (s.timestamp = r()),
            (s.bits = r()),
            (s.nonce = n(32)),
            (s.solutionLength = f()),
            (s.solution = n(s.solutionLength)),
            t.length === e)
          )
            return s;
          function u() {
            var n = h.fromBuffer(t.slice(e), !0);
            return ((e += n.byteLength()), n);
          }
          var c = f();
          s.transactions = [];
          for (var A = 0; A < c; ++A) {
            var g = u();
            s.transactions.push(g);
          }
          return s;
        }),
        (a.prototype.byteLength = function (t, e) {
          var n = 0;
          return (
            (n = e
              ? 80
              : 140 +
                o.encodingLength(this.solutionLength) +
                this.solution.length),
            t || !this.transactions
              ? n
              : n +
                o.encodingLength(this.transactions.length) +
                this.transactions.reduce(function (t, e) {
                  return t + e.byteLength();
                }, 0)
          );
        }),
        (a.fromHex = function (t) {
          return a.fromBuffer(r.from(t, "hex"));
        }),
        (a.prototype.getHash = function (t) {
          t = t || f.bitcoingold;
          var e = !1;
          return (
            this.height < t.forkHeight && (e = !0),
            i.hash256(this.toBuffer(!0, e))
          );
        }),
        (a.prototype.toBuffer = function (t, e) {
          var n = r.allocUnsafe(this.byteLength(t, e)),
            i = 0;
          function f(t) {
            (t.copy(n, i), (i += t.length));
          }
          function s(t) {
            (n.writeInt32LE(t, i), (i += 4));
          }
          function u(t) {
            (n.writeUInt32LE(t, i), (i += 4));
          }
          return (
            s(this.version),
            f(this.prevHash),
            f(this.merkleRoot),
            e
              ? (u(this.timestamp),
                u(this.bits),
                u(this.nonce.slice(0, 4).readUInt32LE()))
              : (s(this.height),
                f(this.reserved),
                u(this.timestamp),
                u(this.bits),
                f(this.nonce),
                o.encode(this.solutionLength, n, i),
                (i += o.encode.bytes),
                f(this.solution)),
            t ||
              !this.transactions ||
              (o.encode(this.transactions.length, n, i),
              (i += o.encode.bytes),
              this.transactions.forEach(function (t) {
                var e = t.byteLength();
                (t.toBuffer(n, i), (i += e));
              })),
            n
          );
        }),
        (a.prototype.toHex = function (t, e) {
          return this.toBuffer(t, e).toString("hex");
        }),
        (a.prototype.checkProofOfWork = function (t, e, n) {
          e = e || f.bitcoingold;
          var i = !1;
          if (e.lwma && this.height >= e.lwma.enableHeight) {
            var o = u.calcNextBits(this, n, e.lwma);
            i = this.bits === o;
          } else {
            var h = this.getHash().reverse(),
              a = Block.calculateTarget(this.bits);
            i = h.compare(a) <= 0;
          }
          if (!i) return !1;
          if (t && this.height >= e.forkHeight) {
            var c = this.toHex(!0),
              A = e.equihash || s.networks.bitcoingold;
            e.equihash &&
              e.equihash.equihashForkHeight &&
              this.height <= e.equihash.equihashForkHeight &&
              (A = e.equihash.preEquihashFork);
            var g = new s.Equihash(A);
            return g.verify(r.from(c, "hex"), this.solution);
          }
          return !0;
        }),
        (t.exports = a));
    },
    11318: function (t, e, n) {
      t.exports = { Equihash: n(11319), networks: n(6899) };
    },
    11319: function (t, e, n) {
      (function (e) {
        var r = n(3807),
          i = n(2794),
          o = n(6899);
        function f(t) {
          this.network = t || o.bitcoingold;
        }
        ((f.prototype = (function () {
          "use strict";
          let t = 32,
            n = 1 * Math.pow(2, 32) - 1,
            o = function (t, e) {
              while (t.length < e) t = "0" + t;
              return t;
            },
            f = function (t, e) {
              if (!t) {
                if (
                  ((e = e || "Assertion failed"), "undefined" !== typeof Error)
                )
                  throw new Error(e);
                throw e;
              }
            },
            s = function (r, i, o, s) {
              ((s = s || 0), f(o >= 8 && t >= 7 + o));
              let u = Math.trunc((o + 7) / 8) + s;
              f(i == Math.trunc((8 * u * r.length) / o));
              let h = e.alloc(i),
                a = (1 << o) - 1,
                c = 0,
                A = 0,
                g = 0;
              for (let t = 0; t < r.length; t++)
                if (((A = ((A << 8) & n) | r[t]), (c += 8), c >= o)) {
                  c -= o;
                  for (let t = s; t < u; t++)
                    h[g + t] =
                      (A >> (c + 8 * (u - t - 1))) &
                      (a >> (8 * (u - t - 1))) &
                      255;
                  g += u;
                }
              return h;
            },
            u = function (t, e) {
              let n = 4;
              f(Math.trunc((e + 7) / 8) <= n);
              let r = Math.trunc((8 * n * t.length) / e),
                i = n - Math.trunc((e + 7) / 8),
                o = s(t, r, e, i),
                u = [];
              for (let f = 0; f < r; f += n) u.push(o.readUInt32BE(f, f + 4));
              return u;
            },
            h = function (t, n) {
              for (let r = 7; r >= 0; r--) {
                let i = e.alloc(4),
                  o = n.readUInt32BE(4 * r, 4 * (r + 1));
                (i.writeUIntLE(o, 0, 4), t.update(i));
              }
            },
            a = function (t, n) {
              let r = e.alloc(4);
              return (r.writeUInt32LE(n, 0, 4), t.update(r), t);
            },
            c = function (t) {
              let e = "";
              for (let n = 0; n < t.length; n++) e += o(t[n].toString(2), 8);
              return (e + "1").indexOf("1");
            },
            A = function (t, e, n, r) {
              let i = [];
              for (
                let o = Math.trunc(((n - 1) * r) / 8);
                o < Math.trunc((n * r) / 8);
                o++
              )
                i.push(t[o] == e[o]);
              return i.every((t) => !0 === t);
            },
            g = function (t, e) {
              for (let n = 0; n < t.length; n++)
                for (let r = 0; r < e.length; r++) if (t[n] === e[r]) return !1;
              return !0;
            },
            I = function (t, n) {
              let r = i.zip(t, n),
                o = [];
              for (let e = 0; e < r.length; e++) o.push(r[e][0] ^ r[e][1]);
              return e.from(o);
            },
            p = function (t, e, n, r) {
              d(n, r);
              var o = n / (r + 1),
                f = (r + 1) * Math.trunc((o + 7) / 8),
                h = Math.trunc(512 / n),
                p = Math.trunc(((1 << r) * (o + 1)) / 8);
              if (e.length != p)
                return (
                  console.log(
                    "Invalid solution length: " +
                      e.length +
                      " (expected " +
                      p +
                      ")",
                  ),
                  !1
                );
              let l = [],
                y = u(e, o + 1);
              for (let i = 0; i < y.length; i++) {
                let e = y[i],
                  r = e % h,
                  u = t();
                a(u, Math.trunc(e / h));
                let c = u.digest(),
                  A = c.slice(
                    Math.trunc((r * n) / 8),
                    Math.trunc(((r + 1) * n) / 8),
                  );
                l.push([s(A, f, o), [e]]);
              }
              for (let s = 1; s < r + 1; s++) {
                let t = [];
                for (let e = 0; e < l.length; e += 2) {
                  if (!A(l[e][0], l[e + 1][0], s, o))
                    return (
                      console.log(
                        "Invalid solution: invalid collision length between StepRows",
                      ),
                      !1
                    );
                  if (l[e + 1][1][0] < l[e][1][0])
                    return (
                      console.log(
                        "Invalid solution: Index tree incorrectly ordered",
                      ),
                      !1
                    );
                  if (!g(l[e][1], l[e + 1][1]))
                    return (
                      console.log("Invalid solution: duplicate indices"),
                      !1
                    );
                  t.push([
                    I(l[e][0], l[e + 1][0]),
                    i.union(l[e][1], l[e + 1][1]),
                  ]);
                }
                l = t;
              }
              return 1 != l.length
                ? (console.log(
                    "Invalid solution: incorrect length after end of rounds: " +
                      l.length,
                  ),
                  !1)
                : c(l[0][0]) == 8 * f ||
                    (console.log(
                      "Invalid solution: incorrect number of zeroes: " +
                        c(l[0][0]),
                    ),
                    !1);
            },
            l = function (t, n, r) {
              let i = e.alloc(16);
              return (
                i.write(t, 0, 8, "utf8"),
                i.writeUIntLE(n, 8, 4),
                i.writeUIntLE(r, 12, 4),
                i
              );
            },
            d = function (t, e) {
              if (e >= t) throw new Error("n must be larger than k");
              if (t / (e + 1) + 1 >= 32)
                throw new Error("Parameters must satisfy n/(k+1)+1 < 32");
            },
            y = function (t, e, n, i, o, f) {
              ((i = i || 48), (o = o || 5));
              let s = function () {
                let n = r(
                  Math.trunc(512 / i) * Math.trunc(i / 8),
                  null,
                  null,
                  l(f, i, o),
                );
                return (n.update(t.slice(0, 108)), h(n, e), n);
              };
              return p(s, n, i, o);
            },
            w = function (t, n, r) {
              if (
                (f(e.isBuffer(t), "Header must be Buffer"),
                f(t.length >= 108, "Header must be at least 108 long"),
                f(e.isBuffer(n), "Solution must be Buffer"),
                r)
              )
                f(e.isBuffer(r), "Nonce must be Buffer");
              else {
                f(t.length >= 140, "Header must contain nonce");
                var i = t
                  .slice(108, 140)
                  .toString("hex")
                  .match(/.{2}/g)
                  .reverse()
                  .join("");
                r = e.from(i, "hex");
              }
              return y(
                t,
                r,
                n,
                this.network.n,
                this.network.k,
                this.network.person,
              );
            };
          return { verify: w };
        })()),
          (t.exports = f));
      }).call(this, n(2).Buffer);
    },
    11320: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(2828),
        o = n(2758),
        f = n(3072),
        BigInteger = n(2802),
        ECSignature = n(5705),
        s = r.alloc(1, 0),
        u = r.alloc(1, 1),
        h = n(2975),
        a = h.getCurveByName("secp256k1");
      function c(t, e, n) {
        o(f.tuple(f.Hash256bit, f.Buffer256bit, f.Function), arguments);
        var h = r.alloc(32, 0),
          c = r.alloc(32, 1);
        ((h = i("sha256", h).update(c).update(s).update(e).update(t).digest()),
          (c = i("sha256", h).update(c).digest()),
          (h = i("sha256", h).update(c).update(u).update(e).update(t).digest()),
          (c = i("sha256", h).update(c).digest()),
          (c = i("sha256", h).update(c).digest()));
        var A = BigInteger.fromBuffer(c);
        while (A.signum() <= 0 || A.compareTo(a.n) >= 0 || !n(A))
          ((h = i("sha256", h).update(c).update(s).digest()),
            (c = i("sha256", h).update(c).digest()),
            (c = i("sha256", h).update(c).digest()),
            (A = BigInteger.fromBuffer(c)));
        return A;
      }
      var A = a.n.shiftRight(1);
      function g(t, e) {
        o(f.tuple(f.Hash256bit, f.BigInt), arguments);
        var n,
          r,
          i = e.toBuffer(32),
          s = BigInteger.fromBuffer(t),
          u = a.n,
          h = a.G;
        return (
          c(t, i, function (t) {
            var i = h.multiply(t);
            return (
              !a.isInfinity(i) &&
              ((n = i.affineX.mod(u)),
              0 !== n.signum() &&
                ((r = t
                  .modInverse(u)
                  .multiply(s.add(e.multiply(n)))
                  .mod(u)),
                0 !== r.signum()))
            );
          }),
          r.compareTo(A) > 0 && (r = u.subtract(r)),
          new ECSignature(n, r)
        );
      }
      function I(t, e, n) {
        o(f.tuple(f.Hash256bit, f.ECSignature, f.ECPoint), arguments);
        var r = a.n,
          i = a.G,
          s = e.r,
          u = e.s;
        if (s.signum() <= 0 || s.compareTo(r) >= 0) return !1;
        if (u.signum() <= 0 || u.compareTo(r) >= 0) return !1;
        var h = BigInteger.fromBuffer(t),
          c = u.modInverse(r),
          A = h.multiply(c).mod(r),
          g = s.multiply(c).mod(r),
          I = i.multiplyTwo(A, n, g);
        if (a.isInfinity(I)) return !1;
        var p = I.affineX,
          l = p.mod(r);
        return l.equals(s);
      }
      t.exports = { deterministicGenerateK: c, sign: g, verify: I, __curve: a };
    },
    11321: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(2792),
        o = n(3847),
        f = n(2828),
        s = n(2758),
        u = n(3072),
        h = n(3969),
        BigInteger = n(2802),
        ECPair = n(5703),
        a = n(2975),
        c = a.getCurveByName("secp256k1");
      function HDNode(t, e) {
        if ((s(u.tuple("ECPair", u.Buffer256bit), arguments), !t.compressed))
          throw new TypeError("BIP32 only allows compressed keyPairs");
        ((this.keyPair = t),
          (this.chainCode = e),
          (this.depth = 0),
          (this.index = 0),
          (this.parentFingerprint = 0));
      }
      ((HDNode.HIGHEST_BIT = 2147483648),
        (HDNode.LENGTH = 78),
        (HDNode.MASTER_SECRET = r.from("Bitcoin seed", "utf8")),
        (HDNode.fromSeedBuffer = function (t, e) {
          if (
            (s(u.tuple(u.Buffer, u.maybe(u.Network)), arguments), t.length < 16)
          )
            throw new TypeError("Seed should be at least 128 bits");
          if (t.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          var n = f("sha512", HDNode.MASTER_SECRET).update(t).digest(),
            r = n.slice(0, 32),
            i = n.slice(32),
            o = BigInteger.fromBuffer(r),
            h = new ECPair(o, null, { network: e });
          return new HDNode(h, i);
        }),
        (HDNode.fromSeedHex = function (t, e) {
          return HDNode.fromSeedBuffer(r.from(t, "hex"), e);
        }),
        (HDNode.fromBase58 = function (t, e) {
          var n = i.decode(t);
          if (78 !== n.length) throw new Error("Invalid buffer length");
          var r,
            o = n.readUInt32BE(0);
          if (Array.isArray(e)) {
            if (
              ((r = e
                .filter(function (t) {
                  return o === t.bip32.private || o === t.bip32.public;
                })
                .pop()),
              !r)
            )
              throw new Error("Unknown network version");
          } else r = e || h.bitcoin;
          if (o !== r.bip32.private && o !== r.bip32.public)
            throw new Error("Invalid network version");
          var f = n[4],
            s = n.readUInt32BE(5);
          if (0 === f && 0 !== s) throw new Error("Invalid parent fingerprint");
          var u = n.readUInt32BE(9);
          if (0 === f && 0 !== u) throw new Error("Invalid index");
          var A,
            g = n.slice(13, 45);
          if (o === r.bip32.private) {
            if (0 !== n.readUInt8(45)) throw new Error("Invalid private key");
            var I = BigInteger.fromBuffer(n.slice(46, 78));
            A = new ECPair(I, null, { network: r });
          } else {
            var p = a.Point.decodeFrom(c, n.slice(45, 78));
            (c.validate(p), (A = new ECPair(null, p, { network: r })));
          }
          var l = new HDNode(A, g);
          return ((l.depth = f), (l.index = u), (l.parentFingerprint = s), l);
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
            n = this.isNeutered() ? e.bip32.public : e.bip32.private,
            o = r.allocUnsafe(78);
          return (
            o.writeUInt32BE(n, 0),
            o.writeUInt8(this.depth, 4),
            o.writeUInt32BE(this.parentFingerprint, 5),
            o.writeUInt32BE(this.index, 9),
            this.chainCode.copy(o, 13),
            this.isNeutered()
              ? this.keyPair.getPublicKeyBuffer().copy(o, 45)
              : (o.writeUInt8(0, 45), this.keyPair.d.toBuffer(32).copy(o, 46)),
            i.encode(o)
          );
        }),
        (HDNode.prototype.derive = function (t) {
          s(u.UInt32, t);
          var e = t >= HDNode.HIGHEST_BIT,
            n = r.allocUnsafe(37);
          if (e) {
            if (this.isNeutered())
              throw new TypeError("Could not derive hardened child key");
            ((n[0] = 0),
              this.keyPair.d.toBuffer(32).copy(n, 1),
              n.writeUInt32BE(t, 33));
          } else
            (this.keyPair.getPublicKeyBuffer().copy(n, 0),
              n.writeUInt32BE(t, 33));
          var i,
            o = f("sha512", this.chainCode).update(n).digest(),
            h = o.slice(0, 32),
            a = o.slice(32),
            A = BigInteger.fromBuffer(h);
          if (A.compareTo(c.n) >= 0) return this.derive(t + 1);
          if (this.isNeutered()) {
            var g = c.G.multiply(A).add(this.keyPair.Q);
            if (c.isInfinity(g)) return this.derive(t + 1);
            i = new ECPair(null, g, { network: this.keyPair.network });
          } else {
            var I = A.add(this.keyPair.d).mod(c.n);
            if (0 === I.signum()) return this.derive(t + 1);
            i = new ECPair(I, null, { network: this.keyPair.network });
          }
          var p = new HDNode(i, a);
          return (
            (p.depth = this.depth + 1),
            (p.index = t),
            (p.parentFingerprint = this.getFingerprint().readUInt32BE(0)),
            p
          );
        }),
        (HDNode.prototype.deriveHardened = function (t) {
          return (s(u.UInt31, t), this.derive(t + HDNode.HIGHEST_BIT));
        }),
        (HDNode.prototype.isNeutered = function () {
          return !this.keyPair.d;
        }),
        (HDNode.prototype.derivePath = function (t) {
          s(u.BIP32Path, t);
          var e = t.split("/");
          if ("m" === e[0]) {
            if (this.parentFingerprint) throw new Error("Not a master node");
            e = e.slice(1);
          }
          return e.reduce(function (t, e) {
            var n;
            return "'" === e.slice(-1)
              ? ((n = parseInt(e.slice(0, -1), 10)), t.deriveHardened(n))
              : ((n = parseInt(e, 10)), t.derive(n));
          }, this);
        }),
        (t.exports = HDNode));
    },
    11322: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(5704),
        o = n(3847),
        f = n(3015),
        s = n(5699),
        u = n(3969),
        h = n(2771),
        a = n(2758),
        c = n(3072),
        A = s.types,
        g = [s.types.P2PKH, s.types.P2PK, s.types.MULTISIG],
        I = g.concat([s.types.P2WPKH, s.types.P2WSH]),
        ECPair = n(5703),
        ECSignature = n(5705),
        p = n(4866);
      function l(t) {
        return -1 !== g.indexOf(t);
      }
      function d(t) {
        return -1 !== I.indexOf(t);
      }
      function y(t, e, n) {
        var r = [],
          i = [];
        switch (t) {
          case A.P2PKH:
            ((r = e.slice(1)), (i = e.slice(0, 1)));
            break;
          case A.P2PK:
            ((r[0] = n ? s.pubKey.output.decode(n) : void 0),
              (i = e.slice(0, 1)));
            break;
          case A.MULTISIG:
            if (n) {
              var o = s.multisig.output.decode(n);
              r = o.pubKeys;
            }
            i = e.slice(1).map(function (t) {
              return 0 === t.length ? void 0 : t;
            });
            break;
        }
        return { pubKeys: r, signatures: i };
      }
      function w(t, e) {
        if (0 === t.length && 0 === e.length) return {};
        var n,
          r,
          i,
          u,
          h,
          a,
          c,
          g,
          I,
          p,
          w = !1,
          E = !1,
          C = !1,
          v = f.decompile(t),
          m = s.classifyInput(v, !0);
        m === A.P2SH &&
          ((C = !0),
          (h = v[v.length - 1]),
          (g = s.classifyOutput(h)),
          (n = s.scriptHash.output.encode(o.hash160(h))),
          (r = A.P2SH),
          (u = h));
        var b = s.classifyWitness(e, !0);
        if (b === A.P2WSH) {
          if (
            ((a = e[e.length - 1]),
            (c = s.classifyOutput(a)),
            (E = !0),
            (w = !0),
            0 === t.length)
          ) {
            if (
              ((n = s.witnessScriptHash.output.encode(o.sha256(a))),
              (r = A.P2WSH),
              void 0 !== h)
            )
              throw new Error("Redeem script given when unnecessary");
          } else {
            if (!h)
              throw new Error(
                "No redeemScript provided for P2WSH, but scriptSig non-empty",
              );
            if (
              ((I = s.witnessScriptHash.output.encode(o.sha256(a))),
              !h.equals(I))
            )
              throw new Error("Redeem script didn't match witnessScript");
          }
          if (!l(s.classifyOutput(a)))
            throw new Error("unsupported witness script");
          ((u = a), (i = c), (p = e.slice(0, -1)));
        } else if (b === A.P2WPKH) {
          w = !0;
          var B = e[e.length - 1],
            S = o.hash160(B);
          if (0 === t.length) {
            if (
              ((n = s.witnessPubKeyHash.output.encode(S)),
              (r = A.P2WPKH),
              "undefined" !== typeof h)
            )
              throw new Error("Redeem script given when unnecessary");
          } else {
            if (!h)
              throw new Error(
                "No redeemScript provided for P2WPKH, but scriptSig wasn't empty",
              );
            if (((I = s.witnessPubKeyHash.output.encode(S)), !h.equals(I)))
              throw new Error(
                "Redeem script did not have the right witness program",
              );
          }
          ((i = A.P2PKH), (p = e));
        } else if (h) {
          if (!d(g)) throw new Error("Bad redeemscript!");
          ((u = h), (i = g), (p = v.slice(0, -1)));
        } else ((r = i = s.classifyInput(t)), (p = v));
        var Q = y(i, p, u),
          P = {
            pubKeys: Q.pubKeys,
            signatures: Q.signatures,
            prevOutScript: n,
            prevOutType: r,
            signType: i,
            signScript: u,
            witness: Boolean(w),
          };
        return (
          C && ((P.redeemScript = h), (P.redeemScriptType = g)),
          E && ((P.witnessScript = a), (P.witnessScriptType = c)),
          P
        );
      }
      function E(t, e, n, r, i) {
        if (
          t.redeemScriptType === A.MULTISIG &&
          t.redeemScript &&
          t.pubKeys.length !== t.signatures.length
        ) {
          var o = t.signatures.concat();
          t.signatures = t.pubKeys.map(function (f) {
            var s,
              u = ECPair.fromPublicKeyBuffer(f);
            return (
              o.some(function (f, h) {
                if (!f) return !1;
                var a,
                  c = ECSignature.parseScriptSignature(f);
                switch (i) {
                  case p.FORKID_BCH:
                    a = e.hashForCashSignature(n, t.signScript, r, c.hashType);
                    break;
                  case p.FORKID_BTG:
                    a = e.hashForGoldSignature(n, t.signScript, r, c.hashType);
                    break;
                  default:
                    a = t.witness
                      ? e.hashForWitnessV0(n, t.signScript, r, c.hashType)
                      : e.hashForSignature(n, t.signScript, c.hashType);
                    break;
                }
                return (
                  !!u.verify(a, c.signature) && ((o[h] = void 0), (s = f), !0)
                );
              }),
              s
            );
          });
        }
      }
      function C(t, e, n) {
        a(c.Buffer, t);
        var r = f.decompile(t);
        e || (e = s.classifyOutput(t));
        var i = [];
        switch (e) {
          case A.P2PKH:
            if (!n) break;
            var u = r[2],
              h = o.hash160(n);
            u.equals(h) && (i = [n]);
            break;
          case A.P2WPKH:
            if (!n) break;
            var g = r[1],
              I = o.hash160(n);
            g.equals(I) && (i = [n]);
            break;
          case A.P2PK:
            i = r.slice(0, 1);
            break;
          case A.MULTISIG:
            i = r.slice(1, -2);
            break;
          default:
            return { scriptType: e };
        }
        return { pubKeys: i, scriptType: e, signatures: i.map(function () {}) };
      }
      function v(t, e) {
        if (t.prevOutType) {
          if (t.prevOutType !== A.P2SH)
            throw new Error("PrevOutScript must be P2SH");
          var n = f.decompile(t.prevOutScript)[1];
          if (!n.equals(e))
            throw new Error("Inconsistent hash160(RedeemScript)");
        }
      }
      function m(t, e) {
        if (t.prevOutType) {
          if (t.prevOutType !== A.P2WSH)
            throw new Error("PrevOutScript must be P2WSH");
          var n = f.decompile(t.prevOutScript)[1];
          if (!n.equals(e))
            throw new Error("Inconsistent sha25(WitnessScript)");
        }
      }
      function b(t, e, n, r, i) {
        var u,
          h,
          a,
          c,
          g,
          I,
          p,
          l,
          d,
          y = !1,
          w = !1,
          E = !1;
        if (n && i) {
          if (
            ((g = o.hash160(n)),
            (p = o.sha256(i)),
            v(t, g),
            !n.equals(s.witnessScriptHash.output.encode(p)))
          )
            throw new Error("Witness script inconsistent with redeem script");
          if (((u = C(i, void 0, e)), !u.pubKeys))
            throw new Error('WitnessScript not supported "' + f.toASM(n) + '"');
          ((h = s.types.P2SH),
            (a = s.scriptHash.output.encode(g)),
            (y = w = E = !0),
            (c = s.types.P2WSH),
            (l = I = u.scriptType),
            (d = i));
        } else if (n) {
          if (((g = o.hash160(n)), v(t, g), (u = C(n, void 0, e)), !u.pubKeys))
            throw new Error('RedeemScript not supported "' + f.toASM(n) + '"');
          ((h = s.types.P2SH),
            (a = s.scriptHash.output.encode(g)),
            (y = !0),
            (l = c = u.scriptType),
            (d = n),
            (w = l === s.types.P2WPKH));
        } else if (i) {
          if (((p = o.sha256(i)), m(t, p), (u = C(i, void 0, e)), !u.pubKeys))
            throw new Error('WitnessScript not supported "' + f.toASM(n) + '"');
          ((h = s.types.P2WSH),
            (a = s.witnessScriptHash.output.encode(p)),
            (w = E = !0),
            (l = I = u.scriptType),
            (d = i));
        } else if (t.prevOutType) {
          if (t.prevOutType === A.P2SH || t.prevOutType === A.P2WSH)
            throw new Error(
              "PrevOutScript is " + t.prevOutType + ", requires redeemScript",
            );
          if (
            ((h = t.prevOutType),
            (a = t.prevOutScript),
            (u = C(t.prevOutScript, t.prevOutType, e)),
            !u.pubKeys)
          )
            return;
          ((w = t.prevOutType === A.P2WPKH), (l = h), (d = a));
        } else
          ((a = s.pubKeyHash.output.encode(o.hash160(e))),
            (u = C(a, A.P2PKH, e)),
            (h = A.P2PKH),
            (w = !1),
            (l = h),
            (d = a));
        (l === A.P2WPKH &&
          (d = s.pubKeyHash.output.encode(
            s.witnessPubKeyHash.output.decode(d),
          )),
          y && ((t.redeemScript = n), (t.redeemScriptType = c)),
          E && ((t.witnessScript = i), (t.witnessScriptType = I)),
          (t.pubKeys = u.pubKeys),
          (t.signatures = u.signatures),
          (t.signScript = d),
          (t.signType = l),
          (t.prevOutScript = a),
          (t.prevOutType = h),
          (t.witness = w));
      }
      function B(t, e, n, i) {
        if (t === A.P2PKH) {
          if (1 === e.length && r.isBuffer(e[0]) && 1 === n.length)
            return s.pubKeyHash.input.encodeStack(e[0], n[0]);
        } else if (t === A.P2PK) {
          if (1 === e.length && r.isBuffer(e[0]))
            return s.pubKey.input.encodeStack(e[0]);
        } else {
          if (t !== A.MULTISIG) throw new Error("Not yet supported");
          if (e.length > 0)
            return (
              (e = e.map(function (t) {
                return t || h.OP_0;
              })),
              i ||
                (e = e.filter(function (t) {
                  return t !== h.OP_0;
                })),
              s.multisig.input.encodeStack(e)
            );
        }
        if (!i) throw new Error("Not enough signatures provided");
        return [];
      }
      function S(t, e) {
        var n = t.prevOutType,
          r = [],
          i = [];
        l(n) && (r = B(n, t.signatures, t.pubKeys, e));
        var o = !1;
        if (n === s.types.P2SH) {
          if (!e && !d(t.redeemScriptType))
            throw new Error("Impossible to sign this type");
          (l(t.redeemScriptType) &&
            (r = B(t.redeemScriptType, t.signatures, t.pubKeys, e)),
            t.redeemScriptType && ((o = !0), (n = t.redeemScriptType)));
        }
        switch (n) {
          case s.types.P2WPKH:
            i = B(s.types.P2PKH, t.signatures, t.pubKeys, e);
            break;
          case s.types.P2WSH:
            if (!e && !l(t.witnessScriptType))
              throw new Error("Impossible to sign this type");
            l(t.witnessScriptType) &&
              ((i = B(t.witnessScriptType, t.signatures, t.pubKeys, e)),
              i.push(t.witnessScript),
              (n = t.witnessScriptType));
            break;
        }
        return (
          o && r.push(t.redeemScript),
          { type: n, script: f.compile(r), witness: i }
        );
      }
      function Q(t, e) {
        ((this.prevTxMap = {}),
          (this.network = t || u.bitcoin),
          (this.maximumFeeRate = e || 2500),
          (this.inputs = []),
          (this.bitcoinCash = !1),
          (this.bitcoinGold = !1),
          (this.tx = new p()));
      }
      function P(t) {
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
      function D(t) {
        return t.readUInt8(t.length - 1);
      }
      ((Q.prototype.enableBitcoinCash = function (t) {
        ("undefined" === typeof t && (t = !0), (this.bitcoinCash = t));
      }),
        (Q.prototype.enableBitcoinGold = function (t) {
          ("undefined" === typeof t && (t = !0), (this.bitcoinGold = t));
        }),
        (Q.prototype.setLockTime = function (t) {
          if (
            (a(c.UInt32, t),
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
        (Q.prototype.setVersion = function (t) {
          (a(c.UInt32, t), (this.tx.version = t));
        }),
        (Q.fromTransaction = function (t, e, n) {
          var r = new Q(e);
          return (
            "number" === typeof n &&
              (n === p.FORKID_BTG
                ? r.enableBitcoinGold(!0)
                : n === p.FORKID_BCH && r.enableBitcoinCash(!0)),
            r.setVersion(t.version),
            r.setLockTime(t.locktime),
            t.outs.forEach(function (t) {
              r.addOutput(t.script, t.value);
            }),
            t.ins.forEach(function (t) {
              r.__addInputUnsafe(t.hash, t.index, {
                sequence: t.sequence,
                script: t.script,
                witness: t.witness,
                value: t.value,
              });
            }),
            r.inputs.forEach(function (e, r) {
              E(e, t, r, e.value, n);
            }),
            r
          );
        }),
        (Q.prototype.addInput = function (t, e, n, i) {
          if (!this.__canModifyInputs())
            throw new Error("No, this would invalidate signatures");
          var o;
          if ("string" === typeof t) t = r.from(t, "hex").reverse();
          else if (t instanceof p) {
            var f = t.outs[e];
            ((i = f.script), (o = f.value), (t = t.getHash()));
          }
          return this.__addInputUnsafe(t, e, {
            sequence: n,
            prevOutScript: i,
            value: o,
          });
        }),
        (Q.prototype.__addInputUnsafe = function (t, e, n) {
          if (p.isCoinbaseHash(t))
            throw new Error("coinbase inputs not supported");
          var r = t.toString("hex") + ":" + e;
          if (void 0 !== this.prevTxMap[r])
            throw new Error("Duplicate TxOut: " + r);
          var i = {};
          if (
            (void 0 !== n.script && (i = w(n.script, n.witness || [])),
            void 0 !== n.value && (i.value = n.value),
            !i.prevOutScript && n.prevOutScript)
          ) {
            var o;
            if (!i.pubKeys && !i.signatures) {
              var f = C(n.prevOutScript);
              (f.pubKeys &&
                ((i.pubKeys = f.pubKeys), (i.signatures = f.signatures)),
                (o = f.scriptType));
            }
            ((i.prevOutScript = n.prevOutScript),
              (i.prevOutType = o || s.classifyOutput(n.prevOutScript)));
          }
          var u = this.tx.addInput(t, e, n.sequence, n.scriptSig);
          return ((this.inputs[u] = i), (this.prevTxMap[r] = u), u);
        }),
        (Q.prototype.addOutput = function (t, e) {
          if (!this.__canModifyOutputs())
            throw new Error("No, this would invalidate signatures");
          return (
            "string" === typeof t && (t = i.toOutputScript(t, this.network)),
            this.tx.addOutput(t, e)
          );
        }),
        (Q.prototype.build = function () {
          return this.__build(!1);
        }),
        (Q.prototype.buildIncomplete = function () {
          return this.__build(!0);
        }),
        (Q.prototype.__build = function (t) {
          if (!t) {
            if (!this.tx.ins.length)
              throw new Error("Transaction has no inputs");
            if (!this.tx.outs.length)
              throw new Error("Transaction has no outputs");
          }
          var e = this.tx.clone();
          if (
            (this.inputs.forEach(function (n, r) {
              var i =
                n.witnessScriptType || n.redeemScriptType || n.prevOutType;
              if (!i && !t) throw new Error("Transaction is not complete");
              var o = S(n, t);
              if (!t && !l(o.type) && o.type !== s.types.P2WPKH)
                throw new Error(o.type + " not supported");
              (e.setInputScript(r, o.script), e.setWitness(r, o.witness));
            }),
            !t && this.__overMaximumFees(e.virtualSize()))
          )
            throw new Error("Transaction has absurd fees");
          return e;
        }),
        (Q.prototype.sign = function (t, e, n, i, o, f) {
          if (e.network && e.network !== this.network)
            throw new TypeError("Inconsistent network");
          if (!this.inputs[t]) throw new Error("No input at index: " + t);
          i = i || p.SIGHASH_ALL;
          var s = this.inputs[t];
          if (void 0 !== s.redeemScript && n && !s.redeemScript.equals(n))
            throw new Error("Inconsistent redeemScript");
          var u,
            h = e.publicKey || e.getPublicKeyBuffer();
          if (!P(s)) {
            if (void 0 !== o) {
              if (void 0 !== s.value && s.value !== o)
                throw new Error("Input didn't match witnessValue");
              (a(c.Satoshi, o), (s.value = o));
            }
            if ((P(s) || b(s, h, n, o, f), !P(s)))
              throw Error(s.prevOutType + " not supported");
          }
          u = this.bitcoinGold
            ? this.tx.hashForGoldSignature(t, s.signScript, o, i, s.witness)
            : this.bitcoinCash
              ? this.tx.hashForCashSignature(t, s.signScript, o, i)
              : s.witness
                ? this.tx.hashForWitnessV0(t, s.signScript, o, i)
                : this.tx.hashForSignature(t, s.signScript, i);
          var g = s.pubKeys.some(function (t, n) {
            if (!h.equals(t)) return !1;
            if (s.signatures[n]) throw new Error("Signature already exists");
            if (33 !== h.length && s.signType === A.P2WPKH)
              throw new Error(
                "BIP143 rejects uncompressed public keys in P2WPKH or P2WSH",
              );
            var o = e.sign(u);
            return (
              r.isBuffer(o) && (o = ECSignature.fromRSBuffer(o)),
              (s.signatures[n] = o.toScriptSignature(i)),
              !0
            );
          });
          if (!g) throw new Error("Key pair cannot sign for this input");
        }),
        (Q.prototype.__canModifyInputs = function () {
          return this.inputs.every(function (t) {
            return (
              void 0 === t.signatures ||
              t.signatures.every(function (t) {
                if (!t) return !0;
                var e = D(t);
                return e & p.SIGHASH_ANYONECANPAY;
              })
            );
          });
        }),
        (Q.prototype.__canModifyOutputs = function () {
          var t = this.tx.ins.length,
            e = this.tx.outs.length;
          return this.inputs.every(function (n) {
            return (
              void 0 === n.signatures ||
              n.signatures.every(function (n) {
                if (!n) return !0;
                var r = D(n),
                  i = 31 & r;
                return (
                  i === p.SIGHASH_NONE ||
                  (i === p.SIGHASH_SINGLE ? t <= e : void 0)
                );
              })
            );
          });
        }),
        (Q.prototype.__overMaximumFees = function (t) {
          var e = this.inputs.reduce(function (t, e) {
              return t + (e.value >>> 0);
            }, 0),
            n = this.tx.outs.reduce(function (t, e) {
              return t + e.value;
            }, 0),
            r = e - n,
            i = r / t;
          return i > this.maximumFeeRate;
        }),
        (t.exports = Q));
    },
    2758: function (t, e, n) {
      var r = n(2848),
        i = n(2813),
        o = r.tfJSON,
        f = r.TfTypeError,
        s = r.TfPropertyTypeError,
        u = r.tfSubError,
        h = r.getValueTypeName,
        a = {
          arrayOf: function (t, e) {
            function n(n, r) {
              return (
                !!i.Array(n) &&
                !i.Nil(n) &&
                !(void 0 !== e.minLength && n.length < e.minLength) &&
                !(void 0 !== e.maxLength && n.length > e.maxLength) &&
                (void 0 === e.length || n.length === e.length) &&
                n.every(function (e, n) {
                  try {
                    return A(t, e, r);
                  } catch (i) {
                    throw u(i, n);
                  }
                })
              );
            }
            return (
              (t = c(t)),
              (e = e || {}),
              (n.toJSON = function () {
                var n = "[" + o(t) + "]";
                return (
                  void 0 !== e.length
                    ? (n += "{" + e.length + "}")
                    : (void 0 === e.minLength && void 0 === e.maxLength) ||
                      (n +=
                        "{" +
                        (void 0 === e.minLength ? 0 : e.minLength) +
                        "," +
                        (void 0 === e.maxLength ? 1 / 0 : e.maxLength) +
                        "}"),
                  n
                );
              }),
              n
            );
          },
          maybe: function t(e) {
            function n(n, r) {
              return i.Nil(n) || e(n, r, t);
            }
            return (
              (e = c(e)),
              (n.toJSON = function () {
                return "?" + o(e);
              }),
              n
            );
          },
          map: function (t, e) {
            function n(n, r) {
              if (!i.Object(n)) return !1;
              if (i.Nil(n)) return !1;
              for (var o in n) {
                try {
                  e && A(e, o, r);
                } catch (s) {
                  throw u(s, o, "key");
                }
                try {
                  var f = n[o];
                  A(t, f, r);
                } catch (s) {
                  throw u(s, o);
                }
              }
              return !0;
            }
            return (
              (t = c(t)),
              e && (e = c(e)),
              (n.toJSON = e
                ? function () {
                    return "{" + o(e) + ": " + o(t) + "}";
                  }
                : function () {
                    return "{" + o(t) + "}";
                  }),
              n
            );
          },
          object: function (t) {
            var e = {};
            for (var n in t) e[n] = c(t[n]);
            function r(t, n) {
              if (!i.Object(t)) return !1;
              if (i.Nil(t)) return !1;
              var r;
              try {
                for (r in e) {
                  var o = e[r],
                    f = t[r];
                  A(o, f, n);
                }
              } catch (h) {
                throw u(h, r);
              }
              if (n) for (r in t) if (!e[r]) throw new s(void 0, r);
              return !0;
            }
            return (
              (r.toJSON = function () {
                return o(e);
              }),
              r
            );
          },
          anyOf: function () {
            var t = [].slice.call(arguments).map(c);
            function e(e, n) {
              return t.some(function (t) {
                try {
                  return A(t, e, n);
                } catch (r) {
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
            function e(e, n) {
              return t.every(function (t) {
                try {
                  return A(t, e, n);
                } catch (r) {
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
              return t === h(e);
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
            function e(e, n) {
              return (
                !i.Nil(e) &&
                !i.Nil(e.length) &&
                (!n || e.length === t.length) &&
                t.every(function (t, r) {
                  try {
                    return A(t, e[r], n);
                  } catch (i) {
                    throw u(i, r);
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
        if (i.String(t))
          return "?" === t[0] ? a.maybe(t.slice(1)) : i[t] || a.quacksLike(t);
        if (t && i.Object(t)) {
          if (i.Array(t)) {
            if (1 !== t.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1",
              );
            return a.arrayOf(t[0]);
          }
          return a.object(t);
        }
        return i.Function(t) ? t : a.value(t);
      }
      function A(t, e, n, r) {
        if (i.Function(t)) {
          if (t(e, n)) return !0;
          throw new f(r || t, e);
        }
        return A(c(t), e, n);
      }
      for (var g in ((a.oneOf = a.anyOf), i)) A[g] = i[g];
      for (g in a) A[g] = a[g];
      var I = n(2954);
      for (g in I) A[g] = I[g];
      ((A.compile = c),
        (A.TfTypeError = f),
        (A.TfPropertyTypeError = s),
        (t.exports = A));
    },
    2771: function (t) {
      t.exports = JSON.parse(
        '{"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}',
      );
    },
    2802: function (t, e, n) {
      var BigInteger = n(3048);
      (n(3268), (t.exports = BigInteger));
    },
    2813: function (t, e) {
      var n = {
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
      for (var r in ((n.Null = n.Nil), n))
        n[r].toJSON = function (t) {
          return t;
        }.bind(null, r);
      t.exports = n;
    },
    2838: function (t, e, n) {
      (function (e) {
        var r = n(2792);
        function i(t, e) {
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
        function o(t, n, r) {
          var i = new e(r ? 34 : 33);
          return (i.writeUInt8(t, 0), n.copy(i, 1), r && (i[33] = 1), i);
        }
        function f(t, e) {
          return i(r.decode(t), e);
        }
        function s(t, e, n) {
          return "number" === typeof t
            ? r.encode(o(t, e, n))
            : r.encode(o(t.version, t.privateKey, t.compressed));
        }
        t.exports = { decode: f, decodeRaw: i, encode: s, encodeRaw: o };
      }).call(this, n(2).Buffer);
    },
    2848: function (t, e, n) {
      var r = n(2813);
      function i(t) {
        return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
      }
      function o(t) {
        return r.Nil(t) ? "" : i(t.constructor);
      }
      function f(t) {
        return r.Function(t)
          ? ""
          : r.String(t)
            ? JSON.stringify(t)
            : t && r.Object(t)
              ? ""
              : t;
      }
      function s(t, e) {
        Error.captureStackTrace && Error.captureStackTrace(t, e);
      }
      function u(t) {
        return r.Function(t)
          ? t.toJSON
            ? t.toJSON()
            : i(t)
          : r.Array(t)
            ? "Array"
            : t && r.Object(t)
              ? "Object"
              : void 0 !== t
                ? t
                : "";
      }
      function h(t, e, n) {
        var r = f(e);
        return (
          "Expected " +
          u(t) +
          ", got" +
          ("" !== n ? " " + n : "") +
          ("" !== r ? " " + r : "")
        );
      }
      function a(t, e, n) {
        ((n = n || o(e)),
          (this.message = h(t, e, n)),
          s(this, a),
          (this.__type = t),
          (this.__value = e),
          (this.__valueTypeName = n));
      }
      function c(t, e, n, r, i) {
        var o = '" of type ';
        return (
          "key" === e && (o = '" with key type '),
          h('property "' + u(n) + o + u(t), r, i)
        );
      }
      function A(t, e, n, r, i) {
        (t
          ? ((i = i || o(r)), (this.message = c(t, n, e, r, i)))
          : (this.message = 'Unexpected property "' + e + '"'),
          s(this, a),
          (this.__label = n),
          (this.__property = e),
          (this.__type = t),
          (this.__value = r),
          (this.__valueTypeName = i));
      }
      function g(t, e) {
        return new a(t, {}, e);
      }
      function I(t, e, n) {
        return (
          t instanceof A
            ? ((e = e + "." + t.__property),
              (t = new A(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
            : t instanceof a &&
              (t = new A(t.__type, e, n, t.__value, t.__valueTypeName)),
          s(t),
          t
        );
      }
      ((a.prototype = Object.create(Error.prototype)),
        (a.prototype.constructor = a),
        (A.prototype = Object.create(Error.prototype)),
        (A.prototype.constructor = a),
        (t.exports = {
          TfTypeError: a,
          TfPropertyTypeError: A,
          tfCustomError: g,
          tfSubError: I,
          tfJSON: u,
          getValueTypeName: o,
        }));
    },
    2864: function (t, e, n) {
      "use strict";
      var r = n(46).Buffer,
        i = 9007199254740991;
      function o(t) {
        if (t < 0 || t > i || t % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function f(t, e, n) {
        if ((o(t), e || (e = r.allocUnsafe(u(t))), !r.isBuffer(e)))
          throw new TypeError("buffer must be a Buffer instance");
        return (
          n || (n = 0),
          t < 253
            ? (e.writeUInt8(t, n), (f.bytes = 1))
            : t <= 65535
              ? (e.writeUInt8(253, n), e.writeUInt16LE(t, n + 1), (f.bytes = 3))
              : t <= 4294967295
                ? (e.writeUInt8(254, n),
                  e.writeUInt32LE(t, n + 1),
                  (f.bytes = 5))
                : (e.writeUInt8(255, n),
                  e.writeUInt32LE(t >>> 0, n + 1),
                  e.writeUInt32LE((t / 4294967296) | 0, n + 5),
                  (f.bytes = 9)),
          e
        );
      }
      function s(t, e) {
        if (!r.isBuffer(t))
          throw new TypeError("buffer must be a Buffer instance");
        e || (e = 0);
        var n = t.readUInt8(e);
        if (n < 253) return ((s.bytes = 1), n);
        if (253 === n) return ((s.bytes = 3), t.readUInt16LE(e + 1));
        if (254 === n) return ((s.bytes = 5), t.readUInt32LE(e + 1));
        s.bytes = 9;
        var i = t.readUInt32LE(e + 1),
          f = t.readUInt32LE(e + 5),
          u = 4294967296 * f + i;
        return (o(u), u);
      }
      function u(t) {
        return (o(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9);
      }
      t.exports = { encode: f, decode: s, encodingLength: u };
    },
    2898: function (t, e, n) {
      var r = n(46).Buffer;
      function i(t) {
        if (t.length < 8) return !1;
        if (t.length > 72) return !1;
        if (48 !== t[0]) return !1;
        if (t[1] !== t.length - 2) return !1;
        if (2 !== t[2]) return !1;
        var e = t[3];
        if (0 === e) return !1;
        if (5 + e >= t.length) return !1;
        if (2 !== t[4 + e]) return !1;
        var n = t[5 + e];
        return (
          0 !== n &&
          6 + e + n === t.length &&
          !(128 & t[4]) &&
          !(e > 1 && 0 === t[4] && !(128 & t[5])) &&
          !(128 & t[e + 6]) &&
          !(n > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
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
        var n = t[5 + e];
        if (0 === n) throw new Error("S length is zero");
        if (6 + e + n !== t.length) throw new Error("S length is invalid");
        if (128 & t[4]) throw new Error("R value is negative");
        if (e > 1 && 0 === t[4] && !(128 & t[5]))
          throw new Error("R value excessively padded");
        if (128 & t[e + 6]) throw new Error("S value is negative");
        if (n > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
          throw new Error("S value excessively padded");
        return { r: t.slice(4, 4 + e), s: t.slice(6 + e) };
      }
      function f(t, e) {
        var n = t.length,
          i = e.length;
        if (0 === n) throw new Error("R length is zero");
        if (0 === i) throw new Error("S length is zero");
        if (n > 33) throw new Error("R length is too long");
        if (i > 33) throw new Error("S length is too long");
        if (128 & t[0]) throw new Error("R value is negative");
        if (128 & e[0]) throw new Error("S value is negative");
        if (n > 1 && 0 === t[0] && !(128 & t[1]))
          throw new Error("R value excessively padded");
        if (i > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("S value excessively padded");
        var o = r.allocUnsafe(6 + n + i);
        return (
          (o[0] = 48),
          (o[1] = o.length - 2),
          (o[2] = 2),
          (o[3] = t.length),
          t.copy(o, 4),
          (o[4 + n] = 2),
          (o[5 + n] = e.length),
          e.copy(o, 6 + n),
          o
        );
      }
      t.exports = { check: i, decode: o, encode: f };
    },
    2954: function (t, e, n) {
      (function (e) {
        var r = n(2813),
          i = n(2848);
        function o(t) {
          return e.isBuffer(t);
        }
        function f(t) {
          return "string" === typeof t && /^([0-9a-f]{2})+$/i.test(t);
        }
        function s(t, e) {
          var n = t.toJSON();
          function r(r) {
            if (!t(r)) return !1;
            if (r.length === e) return !0;
            throw i.tfCustomError(
              n + "(Length: " + e + ")",
              n + "(Length: " + r.length + ")",
            );
          }
          return (
            (r.toJSON = function () {
              return n;
            }),
            r
          );
        }
        var u = s.bind(null, r.Array),
          h = s.bind(null, o),
          a = s.bind(null, f),
          c = s.bind(null, r.String);
        function A(t, e, n) {
          function i(r, i) {
            return n(r, i) && r > t && r < e;
          }
          return (
            (n = n || r.Number),
            (i.toJSON = function () {
              return `${n.toJSON()} between [${t}, ${e}]`;
            }),
            i
          );
        }
        var g = Math.pow(2, 53) - 1;
        function I(t) {
          return "number" === typeof t && isFinite(t);
        }
        function p(t) {
          return (t << 24) >> 24 === t;
        }
        function l(t) {
          return (t << 16) >> 16 === t;
        }
        function d(t) {
          return (0 | t) === t;
        }
        function y(t) {
          return (
            "number" === typeof t && t >= -g && t <= g && Math.floor(t) === t
          );
        }
        function w(t) {
          return (255 & t) === t;
        }
        function E(t) {
          return (65535 & t) === t;
        }
        function C(t) {
          return t >>> 0 === t;
        }
        function v(t) {
          return (
            "number" === typeof t && t >= 0 && t <= g && Math.floor(t) === t
          );
        }
        var m = {
          ArrayN: u,
          Buffer: o,
          BufferN: h,
          Finite: I,
          Hex: f,
          HexN: a,
          Int8: p,
          Int16: l,
          Int32: d,
          Int53: y,
          Range: A,
          StringN: c,
          UInt8: w,
          UInt16: E,
          UInt32: C,
          UInt53: v,
        };
        for (var b in m)
          m[b].toJSON = function (t) {
            return t;
          }.bind(null, b);
        t.exports = m;
      }).call(this, n(2).Buffer);
    },
    2975: function (t, e, n) {
      var Point = n(3137),
        r = n(3138),
        i = n(3412);
      t.exports = { Curve: r, Point: Point, getCurveByName: i };
    },
    3015: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(2898),
        o = n(3062),
        f = n(2758),
        s = n(3072),
        u = n(6893),
        h = n(2771),
        a = n(3108),
        c = h.OP_RESERVED;
      function A(t) {
        return (
          s.Number(t) &&
          (t === h.OP_0 || (t >= h.OP_1 && t <= h.OP_16) || t === h.OP_1NEGATE)
        );
      }
      function g(t) {
        return s.Buffer(t) || A(t);
      }
      function I(t) {
        return s.Array(t) && t.every(g);
      }
      function p(t) {
        return 0 === t.length
          ? h.OP_0
          : 1 === t.length
            ? t[0] >= 1 && t[0] <= 16
              ? c + t[0]
              : 129 === t[0]
                ? h.OP_1NEGATE
                : void 0
            : void 0;
      }
      function l(t) {
        if (r.isBuffer(t)) return t;
        f(s.Array, t);
        var e = t.reduce(function (t, e) {
            return r.isBuffer(e)
              ? 1 === e.length && void 0 !== p(e)
                ? t + 1
                : t + o.encodingLength(e.length) + e.length
              : t + 1;
          }, 0),
          n = r.allocUnsafe(e),
          i = 0;
        if (
          (t.forEach(function (t) {
            if (r.isBuffer(t)) {
              var e = p(t);
              if (void 0 !== e) return (n.writeUInt8(e, i), void (i += 1));
              ((i += o.encode(n, t.length, i)), t.copy(n, i), (i += t.length));
            } else (n.writeUInt8(t, i), (i += 1));
          }),
          i !== n.length)
        )
          throw new Error("Could not decode chunks");
        return n;
      }
      function d(t) {
        if (s.Array(t)) return t;
        f(s.Buffer, t);
        var e = [],
          n = 0;
        while (n < t.length) {
          var r = t[n];
          if (r > h.OP_0 && r <= h.OP_PUSHDATA4) {
            var i = o.decode(t, n);
            if (null === i) return [];
            if (((n += i.size), n + i.number > t.length)) return [];
            var u = t.slice(n, n + i.number);
            n += i.number;
            var a = p(u);
            void 0 !== a ? e.push(a) : e.push(u);
          } else (e.push(r), (n += 1));
        }
        return e;
      }
      function y(t) {
        return (
          r.isBuffer(t) && (t = d(t)),
          t
            .map(function (t) {
              if (r.isBuffer(t)) {
                var e = p(t);
                if (void 0 === e) return t.toString("hex");
                t = e;
              }
              return a[t];
            })
            .join(" ")
        );
      }
      function w(t) {
        return (
          f(s.String, t),
          l(
            t.split(" ").map(function (t) {
              return void 0 !== h[t] ? h[t] : (f(s.Hex, t), r.from(t, "hex"));
            }),
          )
        );
      }
      function E(t) {
        return (
          (t = d(t)),
          f(I, t),
          t.map(function (t) {
            return r.isBuffer(t)
              ? t
              : t === h.OP_0
                ? r.allocUnsafe(0)
                : u.encode(t - c);
          })
        );
      }
      function C(t) {
        if (!r.isBuffer(t)) return !1;
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
      function m(t) {
        return (
          !!r.isBuffer(t) && !!v(t[t.length - 1]) && i.check(t.slice(0, -1))
        );
      }
      t.exports = {
        compile: l,
        decompile: d,
        fromASM: w,
        toASM: y,
        toStack: E,
        number: n(6893),
        isCanonicalPubKey: C,
        isCanonicalSignature: m,
        isPushOnly: I,
        isDefinedHashType: v,
      };
    },
    3048: function (t, e, n) {
      function BigInteger(t, e, n) {
        if (!(this instanceof BigInteger)) return new BigInteger(t, e, n);
        null != t &&
          ("number" == typeof t
            ? this.fromNumber(t, e, n)
            : null == e && "string" != typeof t
              ? this.fromString(t, 256)
              : this.fromString(t, e));
      }
      var r,
        i = BigInteger.prototype;
      function o(t, e, n, r, i, o) {
        while (--o >= 0) {
          var f = e * this[t++] + n[r] + i;
          ((i = Math.floor(f / 67108864)), (n[r++] = 67108863 & f));
        }
        return i;
      }
      ((i.__bigi = n(3267).version),
        (BigInteger.isBigInteger = function (t, e) {
          return t && t.__bigi && (!e || t.__bigi === i.__bigi);
        }),
        (BigInteger.prototype.am = o),
        (r = 26),
        (BigInteger.prototype.DB = r),
        (BigInteger.prototype.DM = (1 << r) - 1));
      var f = (BigInteger.prototype.DV = 1 << r),
        s = 52;
      ((BigInteger.prototype.FV = Math.pow(2, s)),
        (BigInteger.prototype.F1 = s - r),
        (BigInteger.prototype.F2 = 2 * r - s));
      var u,
        h,
        a = "0123456789abcdefghijklmnopqrstuvwxyz",
        c = new Array();
      for (u = "0".charCodeAt(0), h = 0; h <= 9; ++h) c[u++] = h;
      for (u = "a".charCodeAt(0), h = 10; h < 36; ++h) c[u++] = h;
      for (u = "A".charCodeAt(0), h = 10; h < 36; ++h) c[u++] = h;
      function A(t) {
        return a.charAt(t);
      }
      function g(t, e) {
        var n = c[t.charCodeAt(e)];
        return null == n ? -1 : n;
      }
      function I(t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        ((t.t = this.t), (t.s = this.s));
      }
      function p(t) {
        ((this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + f) : (this.t = 0));
      }
      function l(t) {
        var e = new BigInteger();
        return (e.fromInt(t), e);
      }
      function d(t, e) {
        var n,
          r = this;
        if (16 == e) n = 4;
        else if (8 == e) n = 3;
        else if (256 == e) n = 8;
        else if (2 == e) n = 1;
        else if (32 == e) n = 5;
        else {
          if (4 != e) return void r.fromRadix(t, e);
          n = 2;
        }
        ((r.t = 0), (r.s = 0));
        var i = t.length,
          o = !1,
          f = 0;
        while (--i >= 0) {
          var s = 8 == n ? 255 & t[i] : g(t, i);
          s < 0
            ? "-" == t.charAt(i) && (o = !0)
            : ((o = !1),
              0 == f
                ? (r[r.t++] = s)
                : f + n > r.DB
                  ? ((r[r.t - 1] |= (s & ((1 << (r.DB - f)) - 1)) << f),
                    (r[r.t++] = s >> (r.DB - f)))
                  : (r[r.t - 1] |= s << f),
              (f += n),
              f >= r.DB && (f -= r.DB));
        }
        (8 == n &&
          0 != (128 & t[0]) &&
          ((r.s = -1), f > 0 && (r[r.t - 1] |= ((1 << (r.DB - f)) - 1) << f)),
          r.clamp(),
          o && BigInteger.ZERO.subTo(r, r));
      }
      function y() {
        var t = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == t) --this.t;
      }
      function w(t) {
        var e,
          n = this;
        if (n.s < 0) return "-" + n.negate().toString(t);
        if (16 == t) e = 4;
        else if (8 == t) e = 3;
        else if (2 == t) e = 1;
        else if (32 == t) e = 5;
        else {
          if (4 != t) return n.toRadix(t);
          e = 2;
        }
        var r,
          i = (1 << e) - 1,
          o = !1,
          f = "",
          s = n.t,
          u = n.DB - ((s * n.DB) % e);
        if (s-- > 0) {
          u < n.DB && (r = n[s] >> u) > 0 && ((o = !0), (f = A(r)));
          while (s >= 0)
            (u < e
              ? ((r = (n[s] & ((1 << u) - 1)) << (e - u)),
                (r |= n[--s] >> (u += n.DB - e)))
              : ((r = (n[s] >> (u -= e)) & i), u <= 0 && ((u += n.DB), --s)),
              r > 0 && (o = !0),
              o && (f += A(r)));
        }
        return o ? f : "0";
      }
      function E() {
        var t = new BigInteger();
        return (BigInteger.ZERO.subTo(this, t), t);
      }
      function C() {
        return this.s < 0 ? this.negate() : this;
      }
      function v(t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var n = this.t;
        if (((e = n - t.t), 0 != e)) return this.s < 0 ? -e : e;
        while (--n >= 0) if (0 != (e = this[n] - t[n])) return e;
        return 0;
      }
      function m(t) {
        var e,
          n = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (n += 16)),
          0 != (e = t >> 8) && ((t = e), (n += 8)),
          0 != (e = t >> 4) && ((t = e), (n += 4)),
          0 != (e = t >> 2) && ((t = e), (n += 2)),
          0 != (e = t >> 1) && ((t = e), (n += 1)),
          n
        );
      }
      function b() {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + m(this[this.t - 1] ^ (this.s & this.DM));
      }
      function B() {
        return this.bitLength() >> 3;
      }
      function S(t, e) {
        var n;
        for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
        for (n = t - 1; n >= 0; --n) e[n] = 0;
        ((e.t = this.t + t), (e.s = this.s));
      }
      function Q(t, e) {
        for (var n = t; n < this.t; ++n) e[n - t] = this[n];
        ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
      }
      function P(t, e) {
        var n,
          r = this,
          i = t % r.DB,
          o = r.DB - i,
          f = (1 << o) - 1,
          s = Math.floor(t / r.DB),
          u = (r.s << i) & r.DM;
        for (n = r.t - 1; n >= 0; --n)
          ((e[n + s + 1] = (r[n] >> o) | u), (u = (r[n] & f) << i));
        for (n = s - 1; n >= 0; --n) e[n] = 0;
        ((e[s] = u), (e.t = r.t + s + 1), (e.s = r.s), e.clamp());
      }
      function D(t, e) {
        var n = this;
        e.s = n.s;
        var r = Math.floor(t / n.DB);
        if (r >= n.t) e.t = 0;
        else {
          var i = t % n.DB,
            o = n.DB - i,
            f = (1 << i) - 1;
          e[0] = n[r] >> i;
          for (var s = r + 1; s < n.t; ++s)
            ((e[s - r - 1] |= (n[s] & f) << o), (e[s - r] = n[s] >> i));
          (i > 0 && (e[n.t - r - 1] |= (n.s & f) << o),
            (e.t = n.t - r),
            e.clamp());
        }
      }
      function O(t, e) {
        var n = this,
          r = 0,
          i = 0,
          o = Math.min(t.t, n.t);
        while (r < o) ((i += n[r] - t[r]), (e[r++] = i & n.DM), (i >>= n.DB));
        if (t.t < n.t) {
          i -= t.s;
          while (r < n.t) ((i += n[r]), (e[r++] = i & n.DM), (i >>= n.DB));
          i += n.s;
        } else {
          i += n.s;
          while (r < t.t) ((i -= t[r]), (e[r++] = i & n.DM), (i >>= n.DB));
          i -= t.s;
        }
        ((e.s = i < 0 ? -1 : 0),
          i < -1 ? (e[r++] = n.DV + i) : i > 0 && (e[r++] = i),
          (e.t = r),
          e.clamp());
      }
      function U(t, e) {
        var n = this.abs(),
          r = t.abs(),
          i = n.t;
        e.t = i + r.t;
        while (--i >= 0) e[i] = 0;
        for (i = 0; i < r.t; ++i) e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
        ((e.s = 0), e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e));
      }
      function H(t) {
        var e = this.abs(),
          n = (t.t = 2 * e.t);
        while (--n >= 0) t[n] = 0;
        for (n = 0; n < e.t - 1; ++n) {
          var r = e.am(n, e[n], t, 2 * n, 0, 1);
          (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >=
            e.DV && ((t[n + e.t] -= e.DV), (t[n + e.t + 1] = 1));
        }
        (t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
          (t.s = 0),
          t.clamp());
      }
      function T(t, e, n) {
        var r = this,
          i = t.abs();
        if (!(i.t <= 0)) {
          var o = r.abs();
          if (o.t < i.t)
            return (null != e && e.fromInt(0), void (null != n && r.copyTo(n)));
          null == n && (n = new BigInteger());
          var f = new BigInteger(),
            s = r.s,
            u = t.s,
            h = r.DB - m(i[i.t - 1]);
          h > 0
            ? (i.lShiftTo(h, f), o.lShiftTo(h, n))
            : (i.copyTo(f), o.copyTo(n));
          var a = f.t,
            c = f[a - 1];
          if (0 != c) {
            var A = c * (1 << r.F1) + (a > 1 ? f[a - 2] >> r.F2 : 0),
              g = r.FV / A,
              I = (1 << r.F1) / A,
              p = 1 << r.F2,
              l = n.t,
              d = l - a,
              y = null == e ? new BigInteger() : e;
            (f.dlShiftTo(d, y),
              n.compareTo(y) >= 0 && ((n[n.t++] = 1), n.subTo(y, n)),
              BigInteger.ONE.dlShiftTo(a, y),
              y.subTo(f, f));
            while (f.t < a) f[f.t++] = 0;
            while (--d >= 0) {
              var w =
                n[--l] == c ? r.DM : Math.floor(n[l] * g + (n[l - 1] + p) * I);
              if ((n[l] += f.am(0, w, n, d, 0, a)) < w) {
                (f.dlShiftTo(d, y), n.subTo(y, n));
                while (n[l] < --w) n.subTo(y, n);
              }
            }
            (null != e &&
              (n.drShiftTo(a, e), s != u && BigInteger.ZERO.subTo(e, e)),
              (n.t = a),
              n.clamp(),
              h > 0 && n.rShiftTo(h, n),
              s < 0 && BigInteger.ZERO.subTo(n, n));
          }
        }
      }
      function K(t) {
        var e = new BigInteger();
        return (
          this.abs().divRemTo(t, null, e),
          this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e),
          e
        );
      }
      function L(t) {
        this.m = t;
      }
      function _(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }
      function x(t) {
        return t;
      }
      function F(t) {
        t.divRemTo(this.m, null, t);
      }
      function N(t, e, n) {
        (t.multiplyTo(e, n), this.reduce(n));
      }
      function k(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function M() {
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
      function G(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function R(t) {
        var e = new BigInteger();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e),
          e
        );
      }
      function V(t) {
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function Y(t) {
        while (t.t <= this.mt2) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var n = 32767 & t[e],
            r =
              (n * this.mpl +
                (((n * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) &
              t.DM;
          ((n = e + this.m.t), (t[n] += this.m.am(0, r, t, e, 0, this.m.t)));
          while (t[n] >= t.DV) ((t[n] -= t.DV), t[++n]++);
        }
        (t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
      }
      function q(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function W(t, e, n) {
        (t.multiplyTo(e, n), this.reduce(n));
      }
      function J() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }
      function j(t, e) {
        if (t > 4294967295 || t < 1) return BigInteger.ONE;
        var n = new BigInteger(),
          r = new BigInteger(),
          i = e.convert(this),
          o = m(t) - 1;
        i.copyTo(n);
        while (--o >= 0)
          if ((e.sqrTo(n, r), (t & (1 << o)) > 0)) e.mulTo(r, i, n);
          else {
            var f = n;
            ((n = r), (r = f));
          }
        return e.revert(n);
      }
      function z(t, e) {
        var n;
        return (
          (n = t < 256 || e.isEven() ? new L(e) : new G(e)),
          this.exp(t, n)
        );
      }
      function X() {
        var t = new BigInteger();
        return (this.copyTo(t), t);
      }
      function Z() {
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
      function nt() {
        return this.s < 0
          ? -1
          : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
      }
      function rt(t) {
        if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
          return "0";
        var e = this.chunkSize(t),
          n = Math.pow(t, e),
          r = l(n),
          i = new BigInteger(),
          o = new BigInteger(),
          f = "";
        this.divRemTo(r, i, o);
        while (i.signum() > 0)
          ((f = (n + o.intValue()).toString(t).substr(1) + f),
            i.divRemTo(r, i, o));
        return o.intValue().toString(t) + f;
      }
      function it(t, e) {
        var n = this;
        (n.fromInt(0), null == e && (e = 10));
        for (
          var r = n.chunkSize(e),
            i = Math.pow(e, r),
            o = !1,
            f = 0,
            s = 0,
            u = 0;
          u < t.length;
          ++u
        ) {
          var h = g(t, u);
          h < 0
            ? "-" == t.charAt(u) && 0 == n.signum() && (o = !0)
            : ((s = e * s + h),
              ++f >= r &&
                (n.dMultiply(i), n.dAddOffset(s, 0), (f = 0), (s = 0)));
        }
        (f > 0 && (n.dMultiply(Math.pow(e, f)), n.dAddOffset(s, 0)),
          o && BigInteger.ZERO.subTo(n, n));
      }
      function ot(t, e, n) {
        var r = this;
        if ("number" == typeof e)
          if (t < 2) r.fromInt(1);
          else {
            (r.fromNumber(t, n),
              r.testBit(t - 1) ||
                r.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), gt, r),
              r.isEven() && r.dAddOffset(1, 0));
            while (!r.isProbablePrime(e))
              (r.dAddOffset(2, 0),
                r.bitLength() > t &&
                  r.subTo(BigInteger.ONE.shiftLeft(t - 1), r));
          }
        else {
          var i = new Array(),
            o = 7 & t;
          ((i.length = 1 + (t >> 3)),
            e.nextBytes(i),
            o > 0 ? (i[0] &= (1 << o) - 1) : (i[0] = 0),
            r.fromString(i, 256));
        }
      }
      function ft() {
        var t = this,
          e = t.t,
          n = new Array();
        n[0] = t.s;
        var r,
          i = t.DB - ((e * t.DB) % 8),
          o = 0;
        if (e-- > 0) {
          i < t.DB &&
            (r = t[e] >> i) != (t.s & t.DM) >> i &&
            (n[o++] = r | (t.s << (t.DB - i)));
          while (e >= 0)
            (i < 8
              ? ((r = (t[e] & ((1 << i) - 1)) << (8 - i)),
                (r |= t[--e] >> (i += t.DB - 8)))
              : ((r = (t[e] >> (i -= 8)) & 255), i <= 0 && ((i += t.DB), --e)),
              0 != (128 & r) && (r |= -256),
              0 === o && (128 & t.s) != (128 & r) && ++o,
              (o > 0 || r != t.s) && (n[o++] = r));
        }
        return n;
      }
      function st(t) {
        return 0 == this.compareTo(t);
      }
      function ut(t) {
        return this.compareTo(t) < 0 ? this : t;
      }
      function ht(t) {
        return this.compareTo(t) > 0 ? this : t;
      }
      function at(t, e, n) {
        var r,
          i,
          o = this,
          f = Math.min(t.t, o.t);
        for (r = 0; r < f; ++r) n[r] = e(o[r], t[r]);
        if (t.t < o.t) {
          for (i = t.s & o.DM, r = f; r < o.t; ++r) n[r] = e(o[r], i);
          n.t = o.t;
        } else {
          for (i = o.s & o.DM, r = f; r < t.t; ++r) n[r] = e(i, t[r]);
          n.t = t.t;
        }
        ((n.s = e(o.s, t.s)), n.clamp());
      }
      function ct(t, e) {
        return t & e;
      }
      function At(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, ct, e), e);
      }
      function gt(t, e) {
        return t | e;
      }
      function It(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, gt, e), e);
      }
      function pt(t, e) {
        return t ^ e;
      }
      function lt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, pt, e), e);
      }
      function dt(t, e) {
        return t & ~e;
      }
      function yt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, dt, e), e);
      }
      function wt() {
        for (var t = new BigInteger(), e = 0; e < this.t; ++e)
          t[e] = this.DM & ~this[e];
        return ((t.t = this.t), (t.s = ~this.s), t);
      }
      function Et(t) {
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
      function mt() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this[t]) return t * this.DB + vt(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function bt(t) {
        var e = 0;
        while (0 != t) ((t &= t - 1), ++e);
        return e;
      }
      function Bt() {
        for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
          t += bt(this[n] ^ e);
        return t;
      }
      function St(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t
          ? 0 != this.s
          : 0 != (this[e] & (1 << (t % this.DB)));
      }
      function Qt(t, e) {
        var n = BigInteger.ONE.shiftLeft(t);
        return (this.bitwiseTo(n, e, n), n);
      }
      function Pt(t) {
        return this.changeBit(t, gt);
      }
      function Dt(t) {
        return this.changeBit(t, dt);
      }
      function Ot(t) {
        return this.changeBit(t, pt);
      }
      function Ut(t, e) {
        var n = this,
          r = 0,
          i = 0,
          o = Math.min(t.t, n.t);
        while (r < o) ((i += n[r] + t[r]), (e[r++] = i & n.DM), (i >>= n.DB));
        if (t.t < n.t) {
          i += t.s;
          while (r < n.t) ((i += n[r]), (e[r++] = i & n.DM), (i >>= n.DB));
          i += n.s;
        } else {
          i += n.s;
          while (r < t.t) ((i += t[r]), (e[r++] = i & n.DM), (i >>= n.DB));
          i += t.s;
        }
        ((e.s = i < 0 ? -1 : 0),
          i > 0 ? (e[r++] = i) : i < -1 && (e[r++] = n.DV + i),
          (e.t = r),
          e.clamp());
      }
      function Ht(t) {
        var e = new BigInteger();
        return (this.addTo(t, e), e);
      }
      function Tt(t) {
        var e = new BigInteger();
        return (this.subTo(t, e), e);
      }
      function Kt(t) {
        var e = new BigInteger();
        return (this.multiplyTo(t, e), e);
      }
      function Lt() {
        var t = new BigInteger();
        return (this.squareTo(t), t);
      }
      function _t(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, e, null), e);
      }
      function xt(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, null, e), e);
      }
      function Ft(t) {
        var e = new BigInteger(),
          n = new BigInteger();
        return (this.divRemTo(t, e, n), new Array(e, n));
      }
      function Nt(t) {
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
      function Mt() {}
      function Gt(t) {
        return t;
      }
      function Rt(t, e, n) {
        t.multiplyTo(e, n);
      }
      function Vt(t, e) {
        t.squareTo(e);
      }
      function Yt(t) {
        return this.exp(t, new Mt());
      }
      function qt(t, e, n) {
        var r,
          i = Math.min(this.t + t.t, e);
        ((n.s = 0), (n.t = i));
        while (i > 0) n[--i] = 0;
        for (r = n.t - this.t; i < r; ++i)
          n[i + this.t] = this.am(0, t[i], n, i, 0, this.t);
        for (r = Math.min(t.t, e); i < r; ++i) this.am(0, t[i], n, i, 0, e - i);
        n.clamp();
      }
      function Wt(t, e, n) {
        --e;
        var r = (n.t = this.t + t.t - e);
        n.s = 0;
        while (--r >= 0) n[r] = 0;
        for (r = Math.max(e - this.t, 0); r < t.t; ++r)
          n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
        (n.clamp(), n.drShiftTo(1, n));
      }
      function Jt(t) {
        ((this.r2 = new BigInteger()),
          (this.q3 = new BigInteger()),
          BigInteger.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      function jt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function zt(t) {
        return t;
      }
      function Xt(t) {
        var e = this;
        (t.drShiftTo(e.m.t - 1, e.r2),
          t.t > e.m.t + 1 && ((t.t = e.m.t + 1), t.clamp()),
          e.mu.multiplyUpperTo(e.r2, e.m.t + 1, e.q3),
          e.m.multiplyLowerTo(e.q3, e.m.t + 1, e.r2));
        while (t.compareTo(e.r2) < 0) t.dAddOffset(1, e.m.t + 1);
        t.subTo(e.r2, t);
        while (t.compareTo(e.m) >= 0) t.subTo(e.m, t);
      }
      function Zt(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function $t(t, e, n) {
        (t.multiplyTo(e, n), this.reduce(n));
      }
      function te(t, e) {
        var n,
          r,
          i = t.bitLength(),
          o = l(1);
        if (i <= 0) return o;
        ((n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6),
          (r = i < 8 ? new L(e) : e.isEven() ? new Jt(e) : new G(e)));
        var f = new Array(),
          s = 3,
          u = n - 1,
          h = (1 << n) - 1;
        if (((f[1] = r.convert(this)), n > 1)) {
          var a = new BigInteger();
          r.sqrTo(f[1], a);
          while (s <= h)
            ((f[s] = new BigInteger()), r.mulTo(a, f[s - 2], f[s]), (s += 2));
        }
        var c,
          A,
          g = t.t - 1,
          I = !0,
          p = new BigInteger();
        i = m(t[g]) - 1;
        while (g >= 0) {
          (i >= u
            ? (c = (t[g] >> (i - u)) & h)
            : ((c = (t[g] & ((1 << (i + 1)) - 1)) << (u - i)),
              g > 0 && (c |= t[g - 1] >> (this.DB + i - u))),
            (s = n));
          while (0 == (1 & c)) ((c >>= 1), --s);
          if (((i -= s) < 0 && ((i += this.DB), --g), I))
            (f[c].copyTo(o), (I = !1));
          else {
            while (s > 1) (r.sqrTo(o, p), r.sqrTo(p, o), (s -= 2));
            (s > 0 ? r.sqrTo(o, p) : ((A = o), (o = p), (p = A)),
              r.mulTo(p, f[c], o));
          }
          while (g >= 0 && 0 == (t[g] & (1 << i)))
            (r.sqrTo(o, p),
              (A = o),
              (o = p),
              (p = A),
              --i < 0 && ((i = this.DB - 1), --g));
        }
        return r.revert(o);
      }
      function ee(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          n = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(n) < 0) {
          var r = e;
          ((e = n), (n = r));
        }
        var i = e.getLowestSetBit(),
          o = n.getLowestSetBit();
        if (o < 0) return e;
        (i < o && (o = i), o > 0 && (e.rShiftTo(o, e), n.rShiftTo(o, n)));
        while (e.signum() > 0)
          ((i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
            (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
            e.compareTo(n) >= 0
              ? (e.subTo(n, e), e.rShiftTo(1, e))
              : (n.subTo(e, n), n.rShiftTo(1, n)));
        return (o > 0 && n.lShiftTo(o, n), n);
      }
      function ne(t) {
        if (t <= 0) return 0;
        var e = this.DV % t,
          n = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (0 == e) n = this[0] % t;
          else for (var r = this.t - 1; r >= 0; --r) n = (e * n + this[r]) % t;
        return n;
      }
      function re(t) {
        var e = t.isEven();
        if (0 === this.signum()) throw new Error("division by zero");
        if ((this.isEven() && e) || 0 == t.signum()) return BigInteger.ZERO;
        var n = t.clone(),
          r = this.clone(),
          i = l(1),
          o = l(0),
          f = l(0),
          s = l(1);
        while (0 != n.signum()) {
          while (n.isEven())
            (n.rShiftTo(1, n),
              e
                ? ((i.isEven() && o.isEven()) ||
                    (i.addTo(this, i), o.subTo(t, o)),
                  i.rShiftTo(1, i))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o));
          while (r.isEven())
            (r.rShiftTo(1, r),
              e
                ? ((f.isEven() && s.isEven()) ||
                    (f.addTo(this, f), s.subTo(t, s)),
                  f.rShiftTo(1, f))
                : s.isEven() || s.subTo(t, s),
              s.rShiftTo(1, s));
          n.compareTo(r) >= 0
            ? (n.subTo(r, n), e && i.subTo(f, i), o.subTo(s, o))
            : (r.subTo(n, r), e && f.subTo(i, f), s.subTo(o, s));
        }
        if (0 != r.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
        while (s.compareTo(t) >= 0) s.subTo(t, s);
        while (s.signum() < 0) s.addTo(t, s);
        return s;
      }
      ((L.prototype.convert = _),
        (L.prototype.revert = x),
        (L.prototype.reduce = F),
        (L.prototype.mulTo = N),
        (L.prototype.sqrTo = k),
        (G.prototype.convert = R),
        (G.prototype.revert = V),
        (G.prototype.reduce = Y),
        (G.prototype.mulTo = W),
        (G.prototype.sqrTo = q),
        (i.copyTo = I),
        (i.fromInt = p),
        (i.fromString = d),
        (i.clamp = y),
        (i.dlShiftTo = S),
        (i.drShiftTo = Q),
        (i.lShiftTo = P),
        (i.rShiftTo = D),
        (i.subTo = O),
        (i.multiplyTo = U),
        (i.squareTo = H),
        (i.divRemTo = T),
        (i.invDigit = M),
        (i.isEven = J),
        (i.exp = j),
        (i.toString = w),
        (i.negate = E),
        (i.abs = C),
        (i.compareTo = v),
        (i.bitLength = b),
        (i.byteLength = B),
        (i.mod = K),
        (i.modPowInt = z),
        (Mt.prototype.convert = Gt),
        (Mt.prototype.revert = Gt),
        (Mt.prototype.mulTo = Rt),
        (Mt.prototype.sqrTo = Vt),
        (Jt.prototype.convert = jt),
        (Jt.prototype.revert = zt),
        (Jt.prototype.reduce = Xt),
        (Jt.prototype.mulTo = $t),
        (Jt.prototype.sqrTo = Zt));
      var ie = [
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
        oe = (1 << 26) / ie[ie.length - 1];
      function fe(t) {
        var e,
          n = this.abs();
        if (1 == n.t && n[0] <= ie[ie.length - 1]) {
          for (e = 0; e < ie.length; ++e) if (n[0] == ie[e]) return !0;
          return !1;
        }
        if (n.isEven()) return !1;
        e = 1;
        while (e < ie.length) {
          var r = ie[e],
            i = e + 1;
          while (i < ie.length && r < oe) r *= ie[i++];
          r = n.modInt(r);
          while (e < i) if (r % ie[e++] == 0) return !1;
        }
        return n.millerRabin(t);
      }
      function se(t) {
        var e = this.subtract(BigInteger.ONE),
          n = e.getLowestSetBit();
        if (n <= 0) return !1;
        var r = e.shiftRight(n);
        ((t = (t + 1) >> 1), t > ie.length && (t = ie.length));
        for (var i = new BigInteger(null), o = [], f = 0; f < t; ++f) {
          for (;;)
            if (
              ((u = ie[Math.floor(Math.random() * ie.length)]),
              -1 == o.indexOf(u))
            )
              break;
          (o.push(u), i.fromInt(u));
          var s = i.modPow(r, this);
          if (0 != s.compareTo(BigInteger.ONE) && 0 != s.compareTo(e)) {
            var u = 1;
            while (u++ < n && 0 != s.compareTo(e))
              if (
                ((s = s.modPowInt(2, this)), 0 == s.compareTo(BigInteger.ONE))
              )
                return !1;
            if (0 != s.compareTo(e)) return !1;
          }
        }
        return !0;
      }
      ((i.chunkSize = et),
        (i.toRadix = rt),
        (i.fromRadix = it),
        (i.fromNumber = ot),
        (i.bitwiseTo = at),
        (i.changeBit = Qt),
        (i.addTo = Ut),
        (i.dMultiply = Nt),
        (i.dAddOffset = kt),
        (i.multiplyLowerTo = qt),
        (i.multiplyUpperTo = Wt),
        (i.modInt = ne),
        (i.millerRabin = se),
        (i.clone = X),
        (i.intValue = Z),
        (i.byteValue = $),
        (i.shortValue = tt),
        (i.signum = nt),
        (i.toByteArray = ft),
        (i.equals = st),
        (i.min = ut),
        (i.max = ht),
        (i.and = At),
        (i.or = It),
        (i.xor = lt),
        (i.andNot = yt),
        (i.not = wt),
        (i.shiftLeft = Et),
        (i.shiftRight = Ct),
        (i.getLowestSetBit = mt),
        (i.bitCount = Bt),
        (i.testBit = St),
        (i.setBit = Pt),
        (i.clearBit = Dt),
        (i.flipBit = Ot),
        (i.add = Ht),
        (i.subtract = Tt),
        (i.multiply = Kt),
        (i.divide = _t),
        (i.remainder = xt),
        (i.divideAndRemainder = Ft),
        (i.modPow = te),
        (i.modInverse = re),
        (i.pow = Yt),
        (i.gcd = ee),
        (i.isProbablePrime = fe),
        (i.square = Lt),
        (BigInteger.ZERO = l(0)),
        (BigInteger.ONE = l(1)),
        (BigInteger.valueOf = l),
        (t.exports = BigInteger));
    },
    3062: function (t, e, n) {
      var r = n(2771);
      function i(t) {
        return t < r.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
      }
      function o(t, e, n) {
        var o = i(e);
        return (
          1 === o
            ? t.writeUInt8(e, n)
            : 2 === o
              ? (t.writeUInt8(r.OP_PUSHDATA1, n), t.writeUInt8(e, n + 1))
              : 3 === o
                ? (t.writeUInt8(r.OP_PUSHDATA2, n), t.writeUInt16LE(e, n + 1))
                : (t.writeUInt8(r.OP_PUSHDATA4, n), t.writeUInt32LE(e, n + 1)),
          o
        );
      }
      function f(t, e) {
        var n,
          i,
          o = t.readUInt8(e);
        if (o < r.OP_PUSHDATA1) ((n = o), (i = 1));
        else if (o === r.OP_PUSHDATA1) {
          if (e + 2 > t.length) return null;
          ((n = t.readUInt8(e + 1)), (i = 2));
        } else if (o === r.OP_PUSHDATA2) {
          if (e + 3 > t.length) return null;
          ((n = t.readUInt16LE(e + 1)), (i = 3));
        } else {
          if (e + 5 > t.length) return null;
          if (o !== r.OP_PUSHDATA4) throw new Error("Unexpected opcode");
          ((n = t.readUInt32LE(e + 1)), (i = 5));
        }
        return { opcode: o, number: n, size: i };
      }
      t.exports = { encodingLength: i, encode: o, decode: f };
    },
    3072: function (t, e, n) {
      var r = n(2758),
        i = Math.pow(2, 31) - 1;
      function o(t) {
        return r.UInt32(t) && t <= i;
      }
      function f(t) {
        return r.String(t) && t.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }
      f.toJSON = function () {
        return "BIP32 derivation path";
      };
      var s = 21e14;
      function u(t) {
        return r.UInt53(t) && t <= s;
      }
      var h = r.quacksLike("BigInteger"),
        a = r.quacksLike("Point"),
        ECSignature = r.compile({ r: h, s: h }),
        c = r.compile({
          messagePrefix: r.oneOf(r.Buffer, r.String),
          bip32: { public: r.UInt32, private: r.UInt32 },
          pubKeyHash: r.UInt8,
          scriptHash: r.UInt8,
          wif: r.UInt8,
        }),
        A = {
          BigInt: h,
          BIP32Path: f,
          Buffer256bit: r.BufferN(32),
          ECPoint: a,
          ECSignature: ECSignature,
          Hash160bit: r.BufferN(20),
          Hash256bit: r.BufferN(32),
          Network: c,
          Satoshi: u,
          UInt31: o,
        };
      for (var g in r) A[g] = r[g];
      t.exports = A;
    },
    3108: function (t, e, n) {
      var r = n(2771),
        i = {};
      for (var o in r) {
        var f = r[o];
        i[f] = o;
      }
      t.exports = i;
    },
    3110: function (t, e, n) {
      (function (e) {
        t.exports = function (t, n) {
          if (!Array.isArray(t)) throw TypeError("Expected values Array");
          if ("function" !== typeof n)
            throw TypeError("Expected digest Function");
          var r = t.length,
            i = t.concat();
          while (r > 1) {
            for (var o = 0, f = 0; f < r; f += 2, ++o) {
              var s = i[f],
                u = f + 1 === r ? s : i[f + 1],
                h = e.concat([s, u]);
              i[o] = n(h);
            }
            r = o;
          }
          return i[0];
        };
      }).call(this, n(2).Buffer);
    },
    3137: function (t, e, n) {
      var r = n(229),
        i = n(46).Buffer,
        BigInteger = n(2802),
        o = BigInteger.valueOf(3);
      function Point(t, e, n, i) {
        (r.notStrictEqual(i, void 0, "Missing Z coordinate"),
          (this.curve = t),
          (this.x = e),
          (this.y = n),
          (this.z = i),
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
        (Point.fromAffine = function (t, e, n) {
          return new Point(t, e, n, BigInteger.ONE);
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
          var n = t.x
            .multiply(this.z)
            .subtract(this.x.multiply(t.z))
            .mod(this.curve.p);
          return 0 === n.signum();
        }),
        (Point.prototype.negate = function () {
          var t = this.curve.p.subtract(this.y);
          return new Point(this.curve, this.x, t, this.z);
        }),
        (Point.prototype.add = function (t) {
          if (this.curve.isInfinity(this)) return t;
          if (this.curve.isInfinity(t)) return this;
          var e = this.x,
            n = this.y,
            r = t.x,
            i = t.y,
            f = i.multiply(this.z).subtract(n.multiply(t.z)).mod(this.curve.p),
            s = r.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p);
          if (0 === s.signum())
            return 0 === f.signum() ? this.twice() : this.curve.infinity;
          var u = s.square(),
            h = u.multiply(s),
            a = e.multiply(u),
            c = f.square().multiply(this.z),
            A = c
              .subtract(a.shiftLeft(1))
              .multiply(t.z)
              .subtract(h)
              .multiply(s)
              .mod(this.curve.p),
            g = a
              .multiply(o)
              .multiply(f)
              .subtract(n.multiply(h))
              .subtract(c.multiply(f))
              .multiply(t.z)
              .add(f.multiply(h))
              .mod(this.curve.p),
            I = h.multiply(this.z).multiply(t.z).mod(this.curve.p);
          return new Point(this.curve, A, g, I);
        }),
        (Point.prototype.twice = function () {
          if (this.curve.isInfinity(this)) return this;
          if (0 === this.y.signum()) return this.curve.infinity;
          var t = this.x,
            e = this.y,
            n = e.multiply(this.z).mod(this.curve.p),
            r = n.multiply(e).mod(this.curve.p),
            i = this.curve.a,
            f = t.square().multiply(o);
          (0 !== i.signum() && (f = f.add(this.z.square().multiply(i))),
            (f = f.mod(this.curve.p)));
          var s = f
              .square()
              .subtract(t.shiftLeft(3).multiply(r))
              .shiftLeft(1)
              .multiply(n)
              .mod(this.curve.p),
            u = f
              .multiply(o)
              .multiply(t)
              .subtract(r.shiftLeft(1))
              .shiftLeft(2)
              .multiply(r)
              .subtract(f.pow(3))
              .mod(this.curve.p),
            h = n.pow(3).shiftLeft(3).mod(this.curve.p);
          return new Point(this.curve, s, u, h);
        }),
        (Point.prototype.multiply = function (t) {
          if (this.curve.isInfinity(this)) return this;
          if (0 === t.signum()) return this.curve.infinity;
          for (
            var e = t,
              n = e.multiply(o),
              r = this.negate(),
              i = this,
              f = n.bitLength() - 2;
            f > 0;
            --f
          ) {
            var s = n.testBit(f),
              u = e.testBit(f);
            ((i = i.twice()), s !== u && (i = i.add(s ? this : r)));
          }
          return i;
        }),
        (Point.prototype.multiplyTwo = function (t, e, n) {
          var r = Math.max(t.bitLength(), n.bitLength()) - 1,
            i = this.curve.infinity,
            o = this.add(e);
          while (r >= 0) {
            var f = t.testBit(r),
              s = n.testBit(r);
            ((i = i.twice()),
              f ? (i = s ? i.add(o) : i.add(this)) : s && (i = i.add(e)),
              --r);
          }
          return i;
        }),
        (Point.prototype.getEncoded = function (t) {
          if ((null == t && (t = this.compressed), this.curve.isInfinity(this)))
            return i.alloc(1, 0);
          var e,
            n = this.affineX,
            r = this.affineY,
            o = this.curve.pLength;
          return (
            t
              ? ((e = i.allocUnsafe(1 + o)),
                e.writeUInt8(r.isEven() ? 2 : 3, 0))
              : ((e = i.allocUnsafe(1 + o + o)),
                e.writeUInt8(4, 0),
                r.toBuffer(o).copy(e, 1 + o)),
            n.toBuffer(o).copy(e, 1),
            e
          );
        }),
        (Point.decodeFrom = function (t, e) {
          var n,
            i = e.readUInt8(0),
            o = 4 !== i,
            f = Math.floor((t.p.bitLength() + 7) / 8),
            s = BigInteger.fromBuffer(e.slice(1, 1 + f));
          if (o) {
            (r.equal(e.length, f + 1, "Invalid sequence length"),
              r(2 === i || 3 === i, "Invalid sequence tag"));
            var u = 3 === i;
            n = t.pointFromX(u, s);
          } else {
            r.equal(e.length, 1 + f + f, "Invalid sequence length");
            var h = BigInteger.fromBuffer(e.slice(1 + f));
            n = Point.fromAffine(t, s, h);
          }
          return ((n.compressed = o), n);
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
    3138: function (t, e, n) {
      var r = n(229),
        BigInteger = n(2802),
        Point = n(3137);
      function i(t, e, n, r, i, o, f) {
        ((this.p = t),
          (this.a = e),
          (this.b = n),
          (this.G = Point.fromAffine(this, r, i)),
          (this.n = o),
          (this.h = f),
          (this.infinity = new Point(this, null, null, BigInteger.ZERO)),
          (this.pOverFour = t.add(BigInteger.ONE).shiftRight(2)),
          (this.pLength = Math.floor((this.p.bitLength() + 7) / 8)));
      }
      ((i.prototype.pointFromX = function (t, e) {
        var n = e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p),
          r = n.modPow(this.pOverFour, this.p),
          i = r;
        return (
          r.isEven() ^ !t && (i = this.p.subtract(i)),
          Point.fromAffine(this, e, i)
        );
      }),
        (i.prototype.isInfinity = function (t) {
          return (
            t === this.infinity || (0 === t.z.signum() && 0 !== t.y.signum())
          );
        }),
        (i.prototype.isOnCurve = function (t) {
          if (this.isInfinity(t)) return !0;
          var e = t.affineX,
            n = t.affineY,
            r = this.a,
            i = this.b,
            o = this.p;
          if (e.signum() < 0 || e.compareTo(o) >= 0) return !1;
          if (n.signum() < 0 || n.compareTo(o) >= 0) return !1;
          var f = n.square().mod(o),
            s = e.pow(3).add(r.multiply(e)).add(i).mod(o);
          return f.equals(s);
        }),
        (i.prototype.validate = function (t) {
          (r(!this.isInfinity(t), "Point is at infinity"),
            r(this.isOnCurve(t), "Point is not on the curve"));
          var e = t.multiply(this.n);
          return (
            r(this.isInfinity(e), "Point is not a scalar multiple of G"),
            !0
          );
        }),
        (t.exports = i));
    },
    3267: function (t) {
      t.exports = JSON.parse(
        '{"name":"bigi","version":"1.4.2","description":"Big integers.","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"repository":{"url":"https://github.com/cryptocoinjs/bigi","type":"git"},"main":"./lib/index.js","scripts":{"browser-test":"./node_modules/.bin/mochify --wd -R spec","test":"./node_modules/.bin/_mocha -- test/*.js","jshint":"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true","unit":"./node_modules/.bin/mocha","coverage":"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},"dependencies":{},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]}}',
      );
    },
    3268: function (t, e, n) {
      (function (t) {
        var e = n(229),
          BigInteger = n(3048);
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
            var n = this.toByteArrayUnsigned(),
              r = [],
              i = e - n.length;
            while (r.length < i) r.push(0);
            return new t(r.concat(n));
          }),
          (BigInteger.prototype.toHex = function (t) {
            return this.toBuffer(t).toString("hex");
          }));
      }).call(this, n(2).Buffer);
    },
    3350: function (t, e) {
      t.exports = n;
      class AssertionError extends Error {}
      function n(t, e) {
        if (!t) {
          var r = new AssertionError(e);
          throw (Error.captureStackTrace && Error.captureStackTrace(r, n), r);
        }
      }
      AssertionError.prototype.name = "AssertionError";
    },
    3412: function (t, e, n) {
      var BigInteger = n(2802),
        r = n(3413),
        i = n(3138);
      function o(t) {
        var e = r[t];
        if (!e) return null;
        var n = new BigInteger(e.p, 16),
          o = new BigInteger(e.a, 16),
          f = new BigInteger(e.b, 16),
          s = new BigInteger(e.n, 16),
          u = new BigInteger(e.h, 16),
          h = new BigInteger(e.Gx, 16),
          a = new BigInteger(e.Gy, 16);
        return new i(n, o, f, h, a, s, u);
      }
      t.exports = o;
    },
    3413: function (t) {
      t.exports = JSON.parse(
        '{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}',
      );
    },
    3445: function (t, e, n) {
      const r = n(3446),
        i = n(3447),
        o = n(3448),
        f = n(3449),
        s = n(3450),
        u = 255 === new Uint8Array(Uint16Array.of(255).buffer)[0];
      function h(t) {
        switch (t) {
          case "ascii":
            return r;
          case "base64":
            return i;
          case "hex":
            return o;
          case "utf8":
          case "utf-8":
          case void 0:
          case null:
            return f;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return s;
          default:
            throw new Error("Unknown encoding: " + t);
        }
      }
      function a(t) {
        return t instanceof Uint8Array;
      }
      function c(t) {
        try {
          return (h(t), !0);
        } catch {
          return !1;
        }
      }
      function A(t, n, r) {
        const i = new Uint8Array(t);
        return (void 0 !== n && e.fill(i, n, 0, i.byteLength, r), i);
      }
      function g(t) {
        return new Uint8Array(t);
      }
      function I(t) {
        return new Uint8Array(t);
      }
      function p(t, e) {
        return h(e).byteLength(t);
      }
      function l(t, e) {
        if (t === e) return 0;
        const n = Math.min(t.byteLength, e.byteLength);
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (e = new DataView(e.buffer, e.byteOffset, e.byteLength)));
        let r = 0;
        for (let i = n - (n % 4); r < i; r += 4) {
          const n = t.getUint32(r, u),
            i = e.getUint32(r, u);
          if (n !== i) break;
        }
        for (; r < n; r++) {
          const n = t.getUint8(r),
            i = e.getUint8(r);
          if (n < i) return -1;
          if (n > i) return 1;
        }
        return t.byteLength > e.byteLength
          ? 1
          : t.byteLength < e.byteLength
            ? -1
            : 0;
      }
      function d(t, e) {
        void 0 === e && (e = t.reduce((t, e) => t + e.byteLength, 0));
        const n = new Uint8Array(e);
        let r = 0;
        for (const i of t) {
          if (r + i.byteLength > n.byteLength) {
            const t = i.subarray(0, n.byteLength - r);
            return (n.set(t, r), n);
          }
          (n.set(i, r), (r += i.byteLength));
        }
        return n;
      }
      function y(t, e, n, r, i) {
        if (
          (void 0 === n && (n = 0),
          void 0 === r && (r = 0),
          void 0 === i && (i = t.byteLength),
          i > 0 && i < r)
        )
          return 0;
        if (i === r) return 0;
        if (0 === t.byteLength || 0 === e.byteLength) return 0;
        if (n < 0) throw new RangeError("targetStart is out of range");
        if (r < 0 || r >= t.byteLength)
          throw new RangeError("sourceStart is out of range");
        if (i < 0) throw new RangeError("sourceEnd is out of range");
        (n >= e.byteLength && (n = e.byteLength),
          i > t.byteLength && (i = t.byteLength),
          e.byteLength - n < i - r && (i = e.length - n + r));
        const o = i - r;
        return (
          t === e ? e.copyWithin(n, r, i) : e.set(t.subarray(r, i), n),
          o
        );
      }
      function w(t, e) {
        if (t === e) return !0;
        if (t.byteLength !== e.byteLength) return !1;
        const n = t.byteLength;
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (e = new DataView(e.buffer, e.byteOffset, e.byteLength)));
        let r = 0;
        for (let i = n - (n % 4); r < i; r += 4)
          if (t.getUint32(r, u) !== e.getUint32(r, u)) return !1;
        for (; r < n; r++) if (t.getUint8(r) !== e.getUint8(r)) return !1;
        return !0;
      }
      function E(t, e, n, r, i) {
        if (
          ("string" === typeof e
            ? "string" === typeof n
              ? ((i = n), (n = 0), (r = t.byteLength))
              : "string" === typeof r && ((i = r), (r = t.byteLength))
            : "number" === typeof e
              ? (e &= 255)
              : "boolean" === typeof e && (e = +e),
          n < 0 || t.byteLength < n || t.byteLength < r)
        )
          throw new RangeError("Out of range index");
        if (
          (void 0 === n && (n = 0), void 0 === r && (r = t.byteLength), r <= n)
        )
          return t;
        if ((e || (e = 0), "number" === typeof e))
          for (let o = n; o < r; ++o) t[o] = e;
        else {
          e = a(e) ? e : C(e, i);
          const o = e.byteLength;
          for (let i = 0; i < r - n; ++i) t[i + n] = e[i % o];
        }
        return t;
      }
      function C(t, e, n) {
        return "string" === typeof t
          ? v(t, e)
          : Array.isArray(t)
            ? m(t)
            : ArrayBuffer.isView(t)
              ? b(t)
              : B(t, e, n);
      }
      function v(t, e) {
        const n = h(e),
          r = new Uint8Array(n.byteLength(t));
        return (n.write(r, t, 0, r.byteLength), r);
      }
      function m(t) {
        const e = new Uint8Array(t.length);
        return (e.set(t), e);
      }
      function b(t) {
        const e = new Uint8Array(t.byteLength);
        return (e.set(t), e);
      }
      function B(t, e, n) {
        return new Uint8Array(t, e, n);
      }
      function S(t, e, n, r) {
        return -1 !== P(t, e, n, r);
      }
      function Q(t, e, n, r, i) {
        if (0 === t.byteLength) return -1;
        if (
          ("string" === typeof n
            ? ((r = n), (n = 0))
            : void 0 === n
              ? (n = i ? 0 : t.length - 1)
              : n < 0 && (n += t.byteLength),
          n >= t.byteLength)
        ) {
          if (i) return -1;
          n = t.byteLength - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }
        if ("string" === typeof e) e = C(e, r);
        else if ("number" === typeof e)
          return ((e &= 255), i ? t.indexOf(e, n) : t.lastIndexOf(e, n));
        if (0 === e.byteLength) return -1;
        if (i) {
          let r = -1;
          for (let i = n; i < t.byteLength; i++)
            if (t[i] === e[-1 === r ? 0 : i - r]) {
              if ((-1 === r && (r = i), i - r + 1 === e.byteLength)) return r;
            } else (-1 !== r && (i -= i - r), (r = -1));
        } else {
          n + e.byteLength > t.byteLength && (n = t.byteLength - e.byteLength);
          for (let r = n; r >= 0; r--) {
            let n = !0;
            for (let i = 0; i < e.byteLength; i++)
              if (t[r + i] !== e[i]) {
                n = !1;
                break;
              }
            if (n) return r;
          }
        }
        return -1;
      }
      function P(t, e, n, r) {
        return Q(t, e, n, r, !0);
      }
      function D(t, e, n, r) {
        return Q(t, e, n, r, !1);
      }
      function O(t, e, n) {
        const r = t[e];
        ((t[e] = t[n]), (t[n] = r));
      }
      function U(t) {
        const e = t.byteLength;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let n = 0; n < e; n += 2) O(t, n, n + 1);
        return t;
      }
      function H(t) {
        const e = t.byteLength;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let n = 0; n < e; n += 4) (O(t, n, n + 3), O(t, n + 1, n + 2));
        return t;
      }
      function T(t) {
        const e = t.byteLength;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let n = 0; n < e; n += 8)
          (O(t, n, n + 7),
            O(t, n + 1, n + 6),
            O(t, n + 2, n + 5),
            O(t, n + 3, n + 4));
        return t;
      }
      function K(t) {
        return t;
      }
      function L(t, e, n, r) {
        (void 0 === n && (n = 0), void 0 === r && (r = t.byteLength));
        const i = t.byteLength;
        return n >= i || r <= n
          ? ""
          : (n < 0 && (n = 0),
            r > i && (r = i),
            (0 !== n || r < i) && (t = t.subarray(n, r)),
            h(e).toString(t));
      }
      function _(t, e, n, r, i) {
        return (
          void 0 === n
            ? (i = "utf8")
            : void 0 === r && "string" === typeof n
              ? ((i = n), (n = void 0))
              : void 0 === i &&
                "string" === typeof r &&
                ((i = r), (r = void 0)),
          h(i).write(t, e, n, r)
        );
      }
      function x(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(n, e, !0), n + 8);
      }
      function F(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(n, e, !0), n + 4);
      }
      function N(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setUint32(n, e, !0), n + 4);
      }
      function k(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setInt32(n, e, !0), n + 4);
      }
      function M(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat64(e, !0);
      }
      function G(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat32(e, !0);
      }
      function R(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getUint32(e, !0);
      }
      function V(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getInt32(e, !0);
      }
      function Y(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(n, e, !1), n + 8);
      }
      function q(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(n, e, !1), n + 4);
      }
      function W(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setUint32(n, e, !1), n + 4);
      }
      function J(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setInt32(n, e, !1), n + 4);
      }
      function j(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat64(e, !1);
      }
      function z(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat32(e, !1);
      }
      function X(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getUint32(e, !1);
      }
      function Z(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getInt32(e, !1);
      }
      t.exports = e = {
        isBuffer: a,
        isEncoding: c,
        alloc: A,
        allocUnsafe: g,
        allocUnsafeSlow: I,
        byteLength: p,
        compare: l,
        concat: d,
        copy: y,
        equals: w,
        fill: E,
        from: C,
        includes: S,
        indexOf: P,
        lastIndexOf: D,
        swap16: U,
        swap32: H,
        swap64: T,
        toBuffer: K,
        toString: L,
        write: _,
        writeDoubleLE: x,
        writeFloatLE: F,
        writeUInt32LE: N,
        writeInt32LE: k,
        readDoubleLE: M,
        readFloatLE: G,
        readUInt32LE: R,
        readInt32LE: V,
        writeDoubleBE: Y,
        writeFloatBE: q,
        writeUInt32BE: W,
        writeInt32BE: J,
        readDoubleBE: j,
        readFloatBE: z,
        readUInt32BE: X,
        readInt32BE: Z,
      };
    },
    3446: function (t, e) {
      function n(t) {
        return t.length;
      }
      function r(t) {
        const e = t.byteLength;
        let n = "";
        for (let r = 0; r < e; r++) n += String.fromCharCode(t[r]);
        return n;
      }
      function i(t, e, r, i) {
        (void 0 === r && (r = 0), void 0 === i && (i = n(e)));
        const o = Math.min(i, t.byteLength - r);
        for (let n = 0; n < o; n++) t[r + n] = e.charCodeAt(n);
        return o;
      }
      t.exports = { byteLength: n, toString: r, write: i };
    },
    3447: function (t, e) {
      const n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = new Uint8Array(256);
      for (let s = 0; s < n.length; s++) r[n.charCodeAt(s)] = s;
      function i(t) {
        let e = t.length;
        return (
          61 === t.charCodeAt(e - 1) && e--,
          e > 1 && 61 === t.charCodeAt(e - 1) && e--,
          (3 * e) >>> 2
        );
      }
      function o(t) {
        const e = t.byteLength;
        let r = "";
        for (let i = 0; i < e; i += 3)
          r +=
            n[t[i] >> 2] +
            n[((3 & t[i]) << 4) | (t[i + 1] >> 4)] +
            n[((15 & t[i + 1]) << 2) | (t[i + 2] >> 6)] +
            n[63 & t[i + 2]];
        return (
          e % 3 === 2
            ? (r = r.substring(0, r.length - 1) + "=")
            : e % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
          r
        );
      }
      function f(t, e, n, o) {
        (void 0 === n && (n = 0), void 0 === o && (o = i(e)));
        const f = Math.min(o, t.byteLength - n);
        for (let i = 0, s = 0; s < f; i += 4) {
          const n = r[e.charCodeAt(i)],
            o = r[e.charCodeAt(i + 1)],
            f = r[e.charCodeAt(i + 2)],
            u = r[e.charCodeAt(i + 3)];
          ((t[s++] = (n << 2) | (o >> 4)),
            (t[s++] = ((15 & o) << 4) | (f >> 2)),
            (t[s++] = ((3 & f) << 6) | (63 & u)));
        }
        return f;
      }
      ((r[45] = 62),
        (r[95] = 63),
        (t.exports = { byteLength: i, toString: o, write: f }));
    },
    3448: function (t, e) {
      function n(t) {
        return t.length >>> 1;
      }
      function r(t) {
        const e = t.byteLength;
        t = new DataView(t.buffer, t.byteOffset, e);
        let n = "",
          r = 0;
        for (let i = e - (e % 4); r < i; r += 4)
          n += t.getUint32(r).toString(16).padStart(8, "0");
        for (; r < e; r++) n += t.getUint8(r).toString(16).padStart(2, "0");
        return n;
      }
      function i(t, e, r, i) {
        (void 0 === r && (r = 0), void 0 === i && (i = n(e)));
        const f = Math.min(i, t.byteLength - r);
        for (let n = 0; n < f; n++) {
          const i = o(e.charCodeAt(2 * n)),
            f = o(e.charCodeAt(2 * n + 1));
          if (void 0 === i || void 0 === f) return t.subarray(0, n);
          t[r + n] = (i << 4) | f;
        }
        return f;
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
      t.exports = { byteLength: n, toString: r, write: i };
    },
    3449: function (t, e) {
      function n(t) {
        let e = 0;
        for (let n = 0, r = t.length; n < r; n++) {
          const i = t.charCodeAt(n);
          if (i >= 55296 && i <= 56319 && n + 1 < r) {
            const r = t.charCodeAt(n + 1);
            if (r >= 56320 && r <= 57343) {
              ((e += 4), n++);
              continue;
            }
          }
          e += i <= 127 ? 1 : i <= 2047 ? 2 : 3;
        }
        return e;
      }
      let r, i;
      if ("undefined" !== typeof TextDecoder) {
        const t = new TextDecoder();
        r = function (e) {
          return t.decode(e);
        };
      } else
        r = function (t) {
          const e = t.byteLength;
          let n = "",
            r = 0;
          while (r < e) {
            let i = t[r];
            if (i <= 127) {
              ((n += String.fromCharCode(i)), r++);
              continue;
            }
            let o = 0,
              f = 0;
            if (
              (i <= 223
                ? ((o = 1), (f = 31 & i))
                : i <= 239
                  ? ((o = 2), (f = 15 & i))
                  : i <= 244 && ((o = 3), (f = 7 & i)),
              e - r - o > 0)
            ) {
              let e = 0;
              while (e < o)
                ((i = t[r + e + 1]), (f = (f << 6) | (63 & i)), (e += 1));
            } else ((f = 65533), (o = e - r));
            ((n += String.fromCodePoint(f)), (r += o + 1));
          }
          return n;
        };
      if ("undefined" !== typeof TextEncoder) {
        const t = new TextEncoder();
        i = function (e, r, i, o) {
          (void 0 === i && (i = 0), void 0 === o && (o = n(r)));
          const f = Math.min(o, e.byteLength - i);
          return (t.encodeInto(r, e.subarray(i, i + f)), f);
        };
      } else
        i = function (t, e, r, i) {
          (void 0 === r && (r = 0), void 0 === i && (i = n(e)));
          const o = Math.min(i, t.byteLength - r);
          t = t.subarray(r, r + o);
          let f = 0,
            s = 0;
          while (f < e.length) {
            const n = e.codePointAt(f);
            if (n <= 127) {
              ((t[s++] = n), f++);
              continue;
            }
            let r = 0,
              i = 0;
            (n <= 2047
              ? ((r = 6), (i = 192))
              : n <= 65535
                ? ((r = 12), (i = 224))
                : n <= 2097151 && ((r = 18), (i = 240)),
              (t[s++] = i | (n >> r)),
              (r -= 6));
            while (r >= 0) ((t[s++] = 128 | ((n >> r) & 63)), (r -= 6));
            f += n >= 65536 ? 2 : 1;
          }
          return o;
        };
      t.exports = { byteLength: n, toString: r, write: i };
    },
    3450: function (t, e) {
      function n(t) {
        return 2 * t.length;
      }
      function r(t) {
        const e = t.byteLength;
        let n = "";
        for (let r = 0; r < e - 1; r += 2)
          n += String.fromCharCode(t[r] + 256 * t[r + 1]);
        return n;
      }
      function i(t, e, r, i) {
        (void 0 === r && (r = 0), void 0 === i && (i = n(e)));
        const o = Math.min(i, t.byteLength - r);
        let f = o;
        for (let n = 0; n < e.length; ++n) {
          if ((f -= 2) < 0) break;
          const i = e.charCodeAt(n),
            o = i >> 8,
            s = i % 256;
          ((t[r + 2 * n] = s), (t[r + 2 * n + 1] = o));
        }
        return o;
      }
      t.exports = { byteLength: n, toString: r, write: i };
    },
    3807: function (t, e, n) {
      var r = n(3350),
        i = n(3808);
      function o(t, e, n) {
        var r = t[e] + t[n],
          i = t[e + 1] + t[n + 1];
        (r >= 4294967296 && i++, (t[e] = r), (t[e + 1] = i));
      }
      function f(t, e, n, r) {
        var i = t[e] + n;
        n < 0 && (i += 4294967296);
        var o = t[e + 1] + r;
        (i >= 4294967296 && o++, (t[e] = i), (t[e + 1] = o));
      }
      function s(t, e) {
        return t[e] ^ (t[e + 1] << 8) ^ (t[e + 2] << 16) ^ (t[e + 3] << 24);
      }
      function u(t, e, n, r, i, s) {
        var u = g[i],
          h = g[i + 1],
          a = g[s],
          c = g[s + 1];
        (o(A, t, e), f(A, t, u, h));
        var I = A[r] ^ A[t],
          p = A[r + 1] ^ A[t + 1];
        ((A[r] = p),
          (A[r + 1] = I),
          o(A, n, r),
          (I = A[e] ^ A[n]),
          (p = A[e + 1] ^ A[n + 1]),
          (A[e] = (I >>> 24) ^ (p << 8)),
          (A[e + 1] = (p >>> 24) ^ (I << 8)),
          o(A, t, e),
          f(A, t, a, c),
          (I = A[r] ^ A[t]),
          (p = A[r + 1] ^ A[t + 1]),
          (A[r] = (I >>> 16) ^ (p << 16)),
          (A[r + 1] = (p >>> 16) ^ (I << 16)),
          o(A, n, r),
          (I = A[e] ^ A[n]),
          (p = A[e + 1] ^ A[n + 1]),
          (A[e] = (p >>> 31) ^ (I << 1)),
          (A[e + 1] = (I >>> 31) ^ (p << 1)));
      }
      var h = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        a = [
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
          a.map(function (t) {
            return 2 * t;
          }),
        ),
        A = new Uint32Array(32),
        g = new Uint32Array(32);
      function I(t, e) {
        var n = 0;
        for (n = 0; n < 16; n++) ((A[n] = t.h[n]), (A[n + 16] = h[n]));
        for (
          A[24] = A[24] ^ t.t,
            A[25] = A[25] ^ (t.t / 4294967296),
            e && ((A[28] = ~A[28]), (A[29] = ~A[29])),
            n = 0;
          n < 32;
          n++
        )
          g[n] = s(t.b, 4 * n);
        for (n = 0; n < 12; n++)
          (u(0, 8, 16, 24, c[16 * n + 0], c[16 * n + 1]),
            u(2, 10, 18, 26, c[16 * n + 2], c[16 * n + 3]),
            u(4, 12, 20, 28, c[16 * n + 4], c[16 * n + 5]),
            u(6, 14, 22, 30, c[16 * n + 6], c[16 * n + 7]),
            u(0, 10, 20, 30, c[16 * n + 8], c[16 * n + 9]),
            u(2, 12, 22, 24, c[16 * n + 10], c[16 * n + 11]),
            u(4, 14, 16, 26, c[16 * n + 12], c[16 * n + 13]),
            u(6, 8, 18, 28, c[16 * n + 14], c[16 * n + 15]));
        for (n = 0; n < 16; n++) t.h[n] = t.h[n] ^ A[n] ^ A[n + 16];
      }
      var p = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
      function l(t, e, n, r) {
        (p.fill(0),
          (this.b = new Uint8Array(128)),
          (this.h = new Uint32Array(16)),
          (this.t = 0),
          (this.c = 0),
          (this.outlen = t),
          (p[0] = t),
          e && (p[1] = e.length),
          (p[2] = 1),
          (p[3] = 1),
          n && p.set(n, 32),
          r && p.set(r, 48));
        for (var i = 0; i < 16; i++) this.h[i] = h[i] ^ s(p, 4 * i);
        e && (d(this, e), (this.c = 128));
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++)
          (128 === t.c && ((t.t += t.c), I(t, !1), (t.c = 0)),
            (t.b[t.c++] = e[n]));
      }
      function y(t, e) {
        t.t += t.c;
        while (t.c < 128) t.b[t.c++] = 0;
        I(t, !0);
        for (var n = 0; n < t.outlen; n++) e[n] = t.h[n >> 2] >> (8 * (3 & n));
        return e;
      }
      function w(t) {
        for (var e = "", n = 0; n < t.length; n++) e += E(t[n]);
        return e;
      }
      function E(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      ((l.prototype.update = function (t) {
        return (
          r(t instanceof Uint8Array, "input must be Uint8Array or Buffer"),
          d(this, t),
          this
        );
      }),
        (l.prototype.digest = function (t) {
          var e =
            t && "binary" !== t && "hex" !== t
              ? t
              : new Uint8Array(this.outlen);
          return (
            r(
              e instanceof Uint8Array,
              'out must be "binary", "hex", Uint8Array, or Buffer',
            ),
            r(
              e.length >= this.outlen,
              "out must have at least outlen bytes of space",
            ),
            y(this, e),
            "hex" === t ? w(e) : e
          );
        }),
        (l.prototype.final = l.prototype.digest),
        (l.ready = function (t) {
          i.ready(function () {
            t();
          });
        }));
      var C = l;
      ((t.exports = function (t, e, n, i, o) {
        return (
          !0 !== o &&
            (r(t >= v, "outlen must be at least " + v + ", was given " + t),
            r(t <= m, "outlen must be at most " + m + ", was given " + t),
            null != e &&
              (r(e instanceof Uint8Array, "key must be Uint8Array or Buffer"),
              r(
                e.length >= b,
                "key must be at least " + b + ", was given " + e.length,
              ),
              r(
                e.length <= B,
                "key must be at most " + B + ", was given " + e.length,
              )),
            null != n &&
              (r(n instanceof Uint8Array, "salt must be Uint8Array or Buffer"),
              r(
                n.length === S,
                "salt must be exactly " + S + ", was given " + n.length,
              )),
            null != i &&
              (r(
                i instanceof Uint8Array,
                "personal must be Uint8Array or Buffer",
              ),
              r(
                i.length === Q,
                "personal must be exactly " + Q + ", was given " + i.length,
              ))),
          new C(t, e, n, i)
        );
      }),
        (t.exports.ready = function (t) {
          i.ready(function () {
            t();
          });
        }),
        (t.exports.WASM_SUPPORTED = i.SUPPORTED),
        (t.exports.WASM_LOADED = !1));
      var v = (t.exports.BYTES_MIN = 16),
        m = (t.exports.BYTES_MAX = 64),
        b = ((t.exports.BYTES = 32), (t.exports.KEYBYTES_MIN = 16)),
        B = (t.exports.KEYBYTES_MAX = 64),
        S = ((t.exports.KEYBYTES = 32), (t.exports.SALTBYTES = 16)),
        Q = (t.exports.PERSONALBYTES = 16);
      i.ready(function (e) {
        e || ((t.exports.WASM_LOADED = !0), (t.exports = i));
      });
    },
    3808: function (t, e, n) {
      var r = n(3350),
        i = n(3445),
        o = null,
        f =
          "undefined" !== typeof WebAssembly &&
          n(3809)().then((t) => {
            o = t;
          }),
        s = 64,
        u = [];
      t.exports = p;
      var h = (t.exports.BYTES_MIN = 16),
        a = (t.exports.BYTES_MAX = 64),
        c = ((t.exports.BYTES = 32), (t.exports.KEYBYTES_MIN = 16)),
        A = (t.exports.KEYBYTES_MAX = 64),
        g = ((t.exports.KEYBYTES = 32), (t.exports.SALTBYTES = 16)),
        I = (t.exports.PERSONALBYTES = 16);
      function p(t, e, n, i, f) {
        if (!(this instanceof p)) return new p(t, e, n, i, f);
        if (!o) throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
        (t || (t = 32),
          !0 !== f &&
            (r(
              t >= h,
              "digestLength must be at least " + h + ", was given " + t,
            ),
            r(t <= a, "digestLength must be at most " + a + ", was given " + t),
            null != e &&
              (r(e instanceof Uint8Array, "key must be Uint8Array or Buffer"),
              r(
                e.length >= c,
                "key must be at least " + c + ", was given " + e.length,
              ),
              r(
                e.length <= A,
                "key must be at least " + A + ", was given " + e.length,
              )),
            null != n &&
              (r(n instanceof Uint8Array, "salt must be Uint8Array or Buffer"),
              r(
                n.length === g,
                "salt must be exactly " + g + ", was given " + n.length,
              )),
            null != i &&
              (r(
                i instanceof Uint8Array,
                "personal must be Uint8Array or Buffer",
              ),
              r(
                i.length === I,
                "personal must be exactly " + I + ", was given " + i.length,
              ))),
          u.length || (u.push(s), (s += 216)),
          (this.digestLength = t),
          (this.finalized = !1),
          (this.pointer = u.pop()),
          (this._memory = new Uint8Array(o.memory.buffer)),
          this._memory.fill(0, 0, 64),
          (this._memory[0] = this.digestLength),
          (this._memory[1] = e ? e.length : 0),
          (this._memory[2] = 1),
          (this._memory[3] = 1),
          n && this._memory.set(n, 32),
          i && this._memory.set(i, 48),
          this.pointer + 216 > this._memory.length &&
            this._realloc(this.pointer + 216),
          o.blake2b_init(this.pointer, this.digestLength),
          e &&
            (this.update(e),
            this._memory.fill(0, s, s + e.length),
            (this._memory[this.pointer + 200] = 128)));
      }
      function l() {}
      ((p.prototype._realloc = function (t) {
        (o.memory.grow(
          Math.max(0, Math.ceil(Math.abs(t - this._memory.length) / 65536)),
        ),
          (this._memory = new Uint8Array(o.memory.buffer)));
      }),
        (p.prototype.update = function (t) {
          return (
            r(!1 === this.finalized, "Hash instance finalized"),
            r(t instanceof Uint8Array, "input must be Uint8Array or Buffer"),
            s + t.length > this._memory.length && this._realloc(s + t.length),
            this._memory.set(t, s),
            o.blake2b_update(this.pointer, s, s + t.length),
            this
          );
        }),
        (p.prototype.digest = function (t) {
          if (
            (r(!1 === this.finalized, "Hash instance finalized"),
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
            return i.toString(
              this._memory,
              t,
              this.pointer + 128,
              this.pointer + 128 + this.digestLength,
            );
          r(
            t instanceof Uint8Array && t.length >= this.digestLength,
            "input must be Uint8Array or Buffer",
          );
          for (var e = 0; e < this.digestLength; e++)
            t[e] = this._memory[this.pointer + 128 + e];
          return t;
        }),
        (p.prototype.final = p.prototype.digest),
        (p.WASM = o),
        (p.SUPPORTED = "undefined" !== typeof WebAssembly),
        (p.ready = function (t) {
          return (
            t || (t = l),
            f ? f.then(() => t(), t) : t(new Error("WebAssembly not supported"))
          );
        }),
        (p.prototype.ready = p.ready),
        (p.prototype.getPartialHash = function () {
          return this._memory.slice(this.pointer, this.pointer + 216);
        }),
        (p.prototype.setPartialHash = function (t) {
          this._memory.set(t, this.pointer);
        }));
    },
    3809: function (t, e) {
      var n = (t, e) =>
          function () {
            return (
              e || (0, t[Object.keys(t)[0]])((e = { exports: {} }).exports, e),
              e.exports
            );
          },
        r = (() => {
          for (var t = new Uint8Array(128), e = 0; e < 64; e++)
            t[
              e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : 4 * e - 205
            ] = e;
          return (e) => {
            for (
              var n = e.length,
                r = new Uint8Array(
                  ((3 * (n - ("=" == e[n - 1]) - ("=" == e[n - 2]))) / 4) | 0,
                ),
                i = 0,
                o = 0;
              i < n;
            ) {
              var f = t[e.charCodeAt(i++)],
                s = t[e.charCodeAt(i++)],
                u = t[e.charCodeAt(i++)],
                h = t[e.charCodeAt(i++)];
              ((r[o++] = (f << 2) | (s >> 4)),
                (r[o++] = (s << 4) | (u >> 2)),
                (r[o++] = (u << 6) | h));
            }
            return r;
          };
        })(),
        i = n({
          "wasm-binary:./blake2b.wat"(t, e) {
            e.exports = r(
              "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",
            );
          },
        }),
        o = i(),
        f = WebAssembly.compile(o);
      t.exports = async (t) => {
        const e = await WebAssembly.instantiate(await f, t);
        return e.exports;
      };
    },
    3847: function (t, e, n) {
      var r = n(797);
      function i(t) {
        return r("rmd160").update(t).digest();
      }
      function o(t) {
        return r("sha1").update(t).digest();
      }
      function f(t) {
        return r("sha256").update(t).digest();
      }
      function s(t) {
        return i(f(t));
      }
      function u(t) {
        return f(f(t));
      }
      t.exports = { hash160: s, hash256: u, ripemd160: i, sha1: o, sha256: f };
    },
    3969: function (t, e) {
      t.exports = {
        bitcoingold: {
          messagePrefix: "Bitcoin Gold Signed Message:\n",
          bech32: "btg",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 38,
          scriptHash: 23,
          wif: 128,
          forkHeight: 491407,
          equihash: {
            n: 144,
            k: 5,
            person: "BgoldPoW",
            equihashForkHeight: 536200,
            preEquihashFork: { n: 200, k: 9, person: "ZcashPoW" },
          },
          lwma: {
            enableHeight: 536200,
            testnet: !1,
            regtest: !1,
            powTargetSpacing: 600,
            averagingWindow: 45,
            adjustWeight: 13772,
            minDenominator: 10,
            solveTimeLimitation: !0,
            powLimit:
              "14134776517815698497336078495404605830980533548759267698564454644503805952",
          },
        },
        bitcoingoldtestnet: {
          messagePrefix: "Bitcoin Gold Signed Message:\n",
          bech32: "tbtg",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
          forkHeight: 1,
          equihash: {
            n: 144,
            k: 5,
            person: "BgoldPoW",
            equihashForkHeight: 14300,
            preEquihashFork: { n: 200, k: 9, person: "ZcashPoW" },
          },
          lwma: {
            enableHeight: 14300,
            testnet: !0,
            regtest: !1,
            powTargetSpacing: 600,
            averagingWindow: 45,
            adjustWeight: 13772,
            minDenominator: 10,
            solveTimeLimitation: !1,
            powLimit:
              "14134776518227074636666380005943348126619871175004951664972849610340958207",
          },
        },
        bitcoingoldregtest: {
          messagePrefix: "Bitcoin Gold Signed Message:\n",
          bech32: "tbtg",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
          forkHeight: 2e3,
          equihash: { n: 96, k: 5, person: "BgoldPoW" },
          lwma: {
            enableHeight: 0,
            testnet: !1,
            regtest: !0,
            powTargetSpacing: 600,
            averagingWindow: 45,
            adjustWeight: 13772,
            minDenominator: 10,
            solveTimeLimitation: !1,
            powLimit:
              "57896044618658097711785492504343953926634992332820282019728792003956564819967",
          },
        },
        bitcoin: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
        },
        testnet: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        },
        litecoin: {
          messagePrefix: "Litecoin Signed Message:\n",
          bip32: { public: 27108450, private: 27106558 },
          pubKeyHash: 48,
          scriptHash: 50,
          wif: 176,
        },
      };
    },
    4866: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(3847),
        o = n(3015),
        f = n(6897),
        s = n(2771),
        u = n(2758),
        h = n(3072),
        a = n(2864);
      function c(t) {
        var e = t.length;
        return a.encodingLength(e) + e;
      }
      function A(t) {
        var e = t.length;
        return (
          a.encodingLength(e) +
          t.reduce(function (t, e) {
            return t + c(e);
          }, 0)
        );
      }
      function g() {
        ((this.version = 1),
          (this.locktime = 0),
          (this.ins = []),
          (this.outs = []));
      }
      ((g.DEFAULT_SEQUENCE = 4294967295),
        (g.SIGHASH_ALL = 1),
        (g.SIGHASH_NONE = 2),
        (g.SIGHASH_SINGLE = 3),
        (g.SIGHASH_ANYONECANPAY = 128),
        (g.SIGHASH_FORKID = 64),
        (g.ADVANCED_TRANSACTION_MARKER = 0),
        (g.ADVANCED_TRANSACTION_FLAG = 1),
        (g.FORKID_BTG = 79),
        (g.FORKID_BCH = 0));
      var I = r.allocUnsafe(0),
        p = [],
        l = r.from(
          "0000000000000000000000000000000000000000000000000000000000000000",
          "hex",
        ),
        d = r.from(
          "0000000000000000000000000000000000000000000000000000000000000001",
          "hex",
        ),
        y = r.from("ffffffffffffffff", "hex"),
        w = { script: I, valueBuffer: y };
      ((g.fromBuffer = function (t, e) {
        var n = 0;
        function r(e) {
          return ((n += e), t.slice(n - e, n));
        }
        function i() {
          var e = t.readUInt32LE(n);
          return ((n += 4), e);
        }
        function o() {
          var e = t.readInt32LE(n);
          return ((n += 4), e);
        }
        function s() {
          var e = f.readUInt64LE(t, n);
          return ((n += 8), e);
        }
        function u() {
          var e = a.decode(t, n);
          return ((n += a.decode.bytes), e);
        }
        function h() {
          return r(u());
        }
        function c() {
          for (var t = u(), e = [], n = 0; n < t; n++) e.push(h());
          return e;
        }
        var A = new g();
        A.version = o();
        var I = t.readUInt8(n),
          l = t.readUInt8(n + 1),
          d = !1;
        I === g.ADVANCED_TRANSACTION_MARKER &&
          l === g.ADVANCED_TRANSACTION_FLAG &&
          ((n += 2), (d = !0));
        for (var y = u(), w = 0; w < y; ++w)
          A.ins.push({
            hash: r(32),
            index: i(),
            script: h(),
            sequence: i(),
            witness: p,
          });
        var E = u();
        for (w = 0; w < E; ++w) A.outs.push({ value: s(), script: h() });
        if (d) {
          for (w = 0; w < y; ++w) A.ins[w].witness = c();
          if (!A.hasWitnesses())
            throw new Error("Transaction has superfluous witness data");
        }
        if (((A.locktime = i()), e)) return A;
        if (n !== t.length) throw new Error("Transaction has unexpected data");
        return A;
      }),
        (g.fromHex = function (t) {
          return g.fromBuffer(r.from(t, "hex"));
        }),
        (g.isCoinbaseHash = function (t) {
          u(h.Hash256bit, t);
          for (var e = 0; e < 32; ++e) if (0 !== t[e]) return !1;
          return !0;
        }),
        (g.prototype.isCoinbase = function () {
          return 1 === this.ins.length && g.isCoinbaseHash(this.ins[0].hash);
        }),
        (g.prototype.addInput = function (t, e, n, r) {
          return (
            u(
              h.tuple(
                h.Hash256bit,
                h.UInt32,
                h.maybe(h.UInt32),
                h.maybe(h.Buffer),
              ),
              arguments,
            ),
            h.Null(n) && (n = g.DEFAULT_SEQUENCE),
            this.ins.push({
              hash: t,
              index: e,
              script: r || I,
              sequence: n,
              witness: p,
            }) - 1
          );
        }),
        (g.prototype.addOutput = function (t, e) {
          return (
            u(h.tuple(h.Buffer, h.Satoshi), arguments),
            this.outs.push({ script: t, value: e }) - 1
          );
        }),
        (g.prototype.hasWitnesses = function () {
          return this.ins.some(function (t) {
            return 0 !== t.witness.length;
          });
        }),
        (g.prototype.weight = function () {
          var t = this.__byteLength(!1),
            e = this.__byteLength(!0);
          return 3 * t + e;
        }),
        (g.prototype.virtualSize = function () {
          return Math.ceil(this.weight() / 4);
        }),
        (g.prototype.byteLength = function () {
          return this.__byteLength(!0);
        }),
        (g.prototype.__byteLength = function (t) {
          var e = t && this.hasWitnesses();
          return (
            (e ? 10 : 8) +
            a.encodingLength(this.ins.length) +
            a.encodingLength(this.outs.length) +
            this.ins.reduce(function (t, e) {
              return t + 40 + c(e.script);
            }, 0) +
            this.outs.reduce(function (t, e) {
              return t + 8 + c(e.script);
            }, 0) +
            (e
              ? this.ins.reduce(function (t, e) {
                  return t + A(e.witness);
                }, 0)
              : 0)
          );
        }),
        (g.prototype.clone = function () {
          var t = new g();
          return (
            (t.version = this.version),
            (t.locktime = this.locktime),
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
            t
          );
        }),
        (g.prototype.hashForSignature = function (t, e, n) {
          if (
            (u(h.tuple(h.UInt32, h.Buffer, h.Number), arguments),
            t >= this.ins.length)
          )
            return d;
          var f = o.compile(
              o.decompile(e).filter(function (t) {
                return t !== s.OP_CODESEPARATOR;
              }),
            ),
            a = this.clone();
          if ((31 & n) === g.SIGHASH_NONE)
            ((a.outs = []),
              a.ins.forEach(function (e, n) {
                n !== t && (e.sequence = 0);
              }));
          else if ((31 & n) === g.SIGHASH_SINGLE) {
            if (t >= this.outs.length) return d;
            a.outs.length = t + 1;
            for (var c = 0; c < t; c++) a.outs[c] = w;
            a.ins.forEach(function (e, n) {
              n !== t && (e.sequence = 0);
            });
          }
          n & g.SIGHASH_ANYONECANPAY
            ? ((a.ins = [a.ins[t]]), (a.ins[0].script = f))
            : (a.ins.forEach(function (t) {
                t.script = I;
              }),
              (a.ins[t].script = f));
          var A = r.allocUnsafe(a.__byteLength(!1) + 4);
          return (
            A.writeInt32LE(n, A.length - 4),
            a.__toBuffer(A, 0, !1),
            i.hash256(A)
          );
        }),
        (g.prototype.hashForWitnessV0 = function (t, e, n, o) {
          var s, A;
          function I(t) {
            A += t.copy(s, A);
          }
          function p(t) {
            A = s.writeUInt32LE(t, A);
          }
          function d(t) {
            A = f.writeUInt64LE(s, t, A);
          }
          function y(t) {
            (a.encode(t, s, A), (A += a.encode.bytes));
          }
          function w(t) {
            (y(t.length), I(t));
          }
          u(h.tuple(h.UInt32, h.Buffer, h.Satoshi, h.UInt32), arguments);
          var E = l,
            C = l,
            v = l;
          if (
            (o & g.SIGHASH_ANYONECANPAY ||
              ((s = r.allocUnsafe(36 * this.ins.length)),
              (A = 0),
              this.ins.forEach(function (t) {
                (I(t.hash), p(t.index));
              }),
              (C = i.hash256(s))),
            o & g.SIGHASH_ANYONECANPAY ||
              (31 & o) === g.SIGHASH_SINGLE ||
              (31 & o) === g.SIGHASH_NONE ||
              ((s = r.allocUnsafe(4 * this.ins.length)),
              (A = 0),
              this.ins.forEach(function (t) {
                p(t.sequence);
              }),
              (v = i.hash256(s))),
            (31 & o) !== g.SIGHASH_SINGLE && (31 & o) !== g.SIGHASH_NONE)
          ) {
            var m = this.outs.reduce(function (t, e) {
              return t + 8 + c(e.script);
            }, 0);
            ((s = r.allocUnsafe(m)),
              (A = 0),
              this.outs.forEach(function (t) {
                (d(t.value), w(t.script));
              }),
              (E = i.hash256(s)));
          } else if ((31 & o) === g.SIGHASH_SINGLE && t < this.outs.length) {
            var b = this.outs[t];
            ((s = r.allocUnsafe(8 + c(b.script))),
              (A = 0),
              d(b.value),
              w(b.script),
              (E = i.hash256(s)));
          }
          ((s = r.allocUnsafe(156 + c(e))), (A = 0));
          var B = this.ins[t];
          return (
            p(this.version),
            I(C),
            I(v),
            I(B.hash),
            p(B.index),
            w(e),
            d(n),
            p(B.sequence),
            I(E),
            p(this.locktime),
            p(o),
            i.hash256(s)
          );
        }),
        (g.prototype.hashForCashSignature = function (t, e, n, r) {
          if (
            (u(
              h.tuple(h.UInt32, h.Buffer, h.Number, h.maybe(h.UInt53)),
              arguments,
            ),
            r & g.SIGHASH_FORKID)
          ) {
            if (h.Null(n))
              throw new Error(
                "Bitcoin Cash sighash requires value of input to be signed.",
              );
            return this.hashForWitnessV0(t, e, n, r);
          }
          return this.hashForSignature(t, e, r);
        }),
        (g.prototype.hashForGoldSignature = function (t, e, n, r, i) {
          u(
            h.tuple(h.UInt32, h.Buffer, h.Number, h.maybe(h.UInt53)),
            arguments,
          );
          var o = r,
            f = (r & g.SIGHASH_FORKID) > 0;
          if ((f && (o |= g.FORKID_BTG << 8), i || f)) {
            if (h.Null(n))
              throw new Error(
                "Bitcoin Cash / Bitcoin Gold sighash requires value of input to be signed.",
              );
            return this.hashForWitnessV0(t, e, n, o);
          }
          return this.hashForSignature(t, e, o);
        }),
        (g.prototype.getHash = function () {
          return i.hash256(this.__toBuffer(void 0, void 0, !1));
        }),
        (g.prototype.getId = function () {
          return this.getHash().reverse().toString("hex");
        }),
        (g.prototype.toBuffer = function (t, e) {
          return this.__toBuffer(t, e, !0);
        }),
        (g.prototype.__toBuffer = function (t, e, n) {
          t || (t = r.allocUnsafe(this.__byteLength(n)));
          var i = e || 0;
          function o(e) {
            i += e.copy(t, i);
          }
          function s(e) {
            i = t.writeUInt8(e, i);
          }
          function u(e) {
            i = t.writeUInt32LE(e, i);
          }
          function h(e) {
            i = t.writeInt32LE(e, i);
          }
          function c(e) {
            i = f.writeUInt64LE(t, e, i);
          }
          function A(e) {
            (a.encode(e, t, i), (i += a.encode.bytes));
          }
          function I(t) {
            (A(t.length), o(t));
          }
          function p(t) {
            (A(t.length), t.forEach(I));
          }
          h(this.version);
          var l = n && this.hasWitnesses();
          return (
            l &&
              (s(g.ADVANCED_TRANSACTION_MARKER),
              s(g.ADVANCED_TRANSACTION_FLAG)),
            A(this.ins.length),
            this.ins.forEach(function (t) {
              (o(t.hash), u(t.index), I(t.script), u(t.sequence));
            }),
            A(this.outs.length),
            this.outs.forEach(function (t) {
              (t.valueBuffer ? o(t.valueBuffer) : c(t.value), I(t.script));
            }),
            l &&
              this.ins.forEach(function (t) {
                p(t.witness);
              }),
            u(this.locktime),
            void 0 !== e ? t.slice(e, i) : t
          );
        }),
        (g.prototype.toHex = function () {
          return this.toBuffer().toString("hex");
        }),
        (g.prototype.setInputScript = function (t, e) {
          (u(h.tuple(h.Number, h.Buffer), arguments), (this.ins[t].script = e));
        }),
        (g.prototype.setWitness = function (t, e) {
          (u(h.tuple(h.Number, [h.Buffer]), arguments),
            (this.ins[t].witness = e));
        }),
        (t.exports = g));
    },
    5699: function (t, e, n) {
      var r = n(3015).decompile,
        i = n(5700),
        o = n(11303),
        f = n(5701),
        s = n(5702),
        u = n(11308),
        h = n(11311),
        a = n(11313),
        c = n(11315),
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
      function g(t) {
        if (h.output.check(t)) return A.P2WPKH;
        if (a.output.check(t)) return A.P2WSH;
        if (s.output.check(t)) return A.P2PKH;
        if (u.output.check(t)) return A.P2SH;
        var e = r(t);
        return i.output.check(e)
          ? A.MULTISIG
          : f.output.check(e)
            ? A.P2PK
            : c.output.check(e)
              ? A.WITNESS_COMMITMENT
              : o.output.check(e)
                ? A.NULLDATA
                : A.NONSTANDARD;
      }
      function I(t, e) {
        var n = r(t);
        return s.input.check(n)
          ? A.P2PKH
          : u.input.check(n, e)
            ? A.P2SH
            : i.input.check(n, e)
              ? A.MULTISIG
              : f.input.check(n)
                ? A.P2PK
                : A.NONSTANDARD;
      }
      function p(t, e) {
        var n = r(t);
        return h.input.check(n)
          ? A.P2WPKH
          : a.input.check(n, e)
            ? A.P2WSH
            : A.NONSTANDARD;
      }
      t.exports = {
        classifyInput: I,
        classifyOutput: g,
        classifyWitness: p,
        multisig: i,
        nullData: o,
        pubKey: f,
        pubKeyHash: s,
        scriptHash: u,
        witnessPubKeyHash: h,
        witnessScriptHash: a,
        witnessCommitment: c,
        types: A,
      };
    },
    5700: function (t, e, n) {
      t.exports = { input: n(11302), output: n(6894) };
    },
    5701: function (t, e, n) {
      t.exports = { input: n(11304), output: n(11305) };
    },
    5702: function (t, e, n) {
      t.exports = { input: n(11306), output: n(11307) };
    },
    5703: function (t, e, n) {
      var r = n(5704),
        i = n(3847),
        o = n(11320),
        f = n(377),
        s = n(2758),
        u = n(3072),
        h = n(2838),
        a = n(3969),
        BigInteger = n(2802),
        c = n(2975),
        A = o.__curve;
      function ECPair(t, e, n) {
        if (
          (n &&
            s(
              { compressed: u.maybe(u.Boolean), network: u.maybe(u.Network) },
              n,
            ),
          (n = n || {}),
          t)
        ) {
          if (t.signum() <= 0)
            throw new Error("Private key must be greater than 0");
          if (t.compareTo(A.n) >= 0)
            throw new Error("Private key must be less than the curve order");
          if (e) throw new TypeError("Unexpected publicKey parameter");
          this.d = t;
        } else (s(u.ECPoint, e), (this.__Q = e));
        ((this.compressed = void 0 === n.compressed || n.compressed),
          (this.network = n.network || a.bitcoin));
      }
      (Object.defineProperty(ECPair.prototype, "Q", {
        get: function () {
          return (
            !this.__Q && this.d && (this.__Q = A.G.multiply(this.d)),
            this.__Q
          );
        },
      }),
        (ECPair.fromPublicKeyBuffer = function (t, e) {
          var n = c.Point.decodeFrom(A, t);
          return new ECPair(null, n, { compressed: n.compressed, network: e });
        }),
        (ECPair.fromWIF = function (t, e) {
          var n = h.decode(t),
            r = n.version;
          if (u.Array(e)) {
            if (
              ((e = e
                .filter(function (t) {
                  return r === t.wif;
                })
                .pop()),
              !e)
            )
              throw new Error("Unknown network version");
          } else if (((e = e || a.bitcoin), r !== e.wif))
            throw new Error("Invalid network version");
          var i = BigInteger.fromBuffer(n.privateKey);
          return new ECPair(i, null, { compressed: n.compressed, network: e });
        }),
        (ECPair.makeRandom = function (t) {
          t = t || {};
          var e,
            n = t.rng || f;
          do {
            var r = n(32);
            (s(u.Buffer256bit, r), (e = BigInteger.fromBuffer(r)));
          } while (e.signum() <= 0 || e.compareTo(A.n) >= 0);
          return new ECPair(e, null, t);
        }),
        (ECPair.prototype.getAddress = function () {
          return r.toBase58Check(
            i.hash160(this.getPublicKeyBuffer()),
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
          return o.sign(t, this.d);
        }),
        (ECPair.prototype.toWIF = function () {
          if (!this.d) throw new Error("Missing private key");
          return h.encode(
            this.network.wif,
            this.d.toBuffer(32),
            this.compressed,
          );
        }),
        (ECPair.prototype.verify = function (t, e) {
          return o.verify(t, e, this.Q);
        }),
        (t.exports = ECPair));
    },
    5704: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(803),
        o = n(2792),
        f = n(3015),
        s = n(5699),
        u = n(3969),
        h = n(2758),
        a = n(3072);
      function c(t) {
        var e = o.decode(t);
        if (e.length < 21) throw new TypeError(t + " is too short");
        if (e.length > 21) throw new TypeError(t + " is too long");
        var n = e.readUInt8(0),
          r = e.slice(1);
        return { version: n, hash: r };
      }
      function A(t) {
        var e = i.decode(t),
          n = i.fromWords(e.words.slice(1));
        return { version: e.words[0], prefix: e.prefix, data: r.from(n) };
      }
      function g(t, e) {
        h(a.tuple(a.Hash160bit, a.UInt8), arguments);
        var n = r.allocUnsafe(21);
        return (n.writeUInt8(e, 0), t.copy(n, 1), o.encode(n));
      }
      function I(t, e, n) {
        var r = i.toWords(t);
        return (r.unshift(e), i.encode(n, r));
      }
      function p(t, e) {
        if (((e = e || u.bitcoin), s.pubKeyHash.output.check(t)))
          return g(f.compile(t).slice(3, 23), e.pubKeyHash);
        if (s.scriptHash.output.check(t))
          return g(f.compile(t).slice(2, 22), e.scriptHash);
        if (s.witnessPubKeyHash.output.check(t))
          return I(f.compile(t).slice(2, 22), 0, e.bech32);
        if (s.witnessScriptHash.output.check(t))
          return I(f.compile(t).slice(2, 34), 0, e.bech32);
        throw new Error(f.toASM(t) + " has no matching Address");
      }
      function l(t, e) {
        var n;
        e = e || u.bitcoin;
        try {
          n = c(t);
        } catch (r) {}
        if (n) {
          if (n.version === e.pubKeyHash)
            return s.pubKeyHash.output.encode(n.hash);
          if (n.version === e.scriptHash)
            return s.scriptHash.output.encode(n.hash);
        } else {
          try {
            n = A(t);
          } catch (r) {}
          if (n) {
            if (n.prefix !== e.bech32)
              throw new Error(t + " has an invalid prefix");
            if (0 === n.version) {
              if (20 === n.data.length)
                return s.witnessPubKeyHash.output.encode(n.data);
              if (32 === n.data.length)
                return s.witnessScriptHash.output.encode(n.data);
            }
          }
        }
        throw new Error(t + " has no matching Script");
      }
      t.exports = {
        fromBase58Check: c,
        fromBech32: A,
        fromOutputScript: p,
        toBase58Check: g,
        toBech32: I,
        toOutputScript: l,
      };
    },
    5705: function (t, e, n) {
      (function (e) {
        var r = n(2898),
          i = n(2758),
          o = n(3072),
          BigInteger = n(2802);
        function ECSignature(t, e) {
          (i(o.tuple(o.BigInt, o.BigInt), arguments),
            (this.r = t),
            (this.s = e));
        }
        ((ECSignature.parseCompact = function (t) {
          i(o.BufferN(65), t);
          var e = t.readUInt8(0) - 27;
          if (e !== (7 & e)) throw new Error("Invalid signature parameter");
          var n = !!(4 & e),
            r = 3 & e,
            f = ECSignature.fromRSBuffer(t.slice(1));
          return { compressed: n, i: r, signature: f };
        }),
          (ECSignature.fromRSBuffer = function (t) {
            i(o.BufferN(64), t);
            var e = BigInteger.fromBuffer(t.slice(0, 32)),
              n = BigInteger.fromBuffer(t.slice(32, 64));
            return new ECSignature(e, n);
          }),
          (ECSignature.fromDER = function (t) {
            var e = r.decode(t),
              n = BigInteger.fromDERInteger(e.r),
              i = BigInteger.fromDERInteger(e.s);
            return new ECSignature(n, i);
          }),
          (ECSignature.parseScriptSignature = function (t) {
            var e = t.readUInt8(t.length - 1),
              n = -193 & e;
            if (n <= 0 || n >= 4) throw new Error("Invalid hashType " + e);
            return {
              signature: ECSignature.fromDER(t.slice(0, -1)),
              hashType: e,
            };
          }),
          (ECSignature.prototype.toCompact = function (t, n) {
            (n && (t += 4), (t += 27));
            var r = e.alloc(65);
            return (r.writeUInt8(t, 0), this.toRSBuffer(r, 1), r);
          }),
          (ECSignature.prototype.toDER = function () {
            var t = e.from(this.r.toDERInteger()),
              n = e.from(this.s.toDERInteger());
            return r.encode(t, n);
          }),
          (ECSignature.prototype.toRSBuffer = function (t, n) {
            return (
              (t = t || e.alloc(64)),
              this.r.toBuffer(32).copy(t, n),
              this.s.toBuffer(32).copy(t, n + 32),
              t
            );
          }),
          (ECSignature.prototype.toScriptSignature = function (t) {
            var n = -193 & t;
            if (n <= 0 || n >= 4) throw new Error("Invalid hashType " + t);
            var r = e.alloc(1);
            return (r.writeUInt8(t, 0), e.concat([this.toDER(), r]));
          }),
          (t.exports = ECSignature));
      }).call(this, n(2).Buffer);
    },
    6893: function (t, e, n) {
      var r = n(46).Buffer;
      function i(t, e, n) {
        ((e = e || 4), (n = void 0 === n || n));
        var r = t.length;
        if (0 === r) return 0;
        if (r > e) throw new TypeError("Script number overflow");
        if (n && 0 === (127 & t[r - 1]) && (r <= 1 || 0 === (128 & t[r - 2])))
          throw new Error("Non-minimally encoded script number");
        if (5 === r) {
          var i = t.readUInt32LE(0),
            o = t.readUInt8(4);
          return 128 & o ? -(4294967296 * (-129 & o) + i) : 4294967296 * o + i;
        }
        for (var f = 0, s = 0; s < r; ++s) f |= t[s] << (8 * s);
        return 128 & t[r - 1] ? -(f & ~(128 << (8 * (r - 1)))) : f;
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
      function f(t) {
        for (
          var e = Math.abs(t), n = o(e), i = r.allocUnsafe(n), f = t < 0, s = 0;
          s < n;
          ++s
        )
          (i.writeUInt8(255 & e, s), (e >>= 8));
        return (
          128 & i[n - 1]
            ? i.writeUInt8(f ? 128 : 0, n - 1)
            : f && (i[n - 1] |= 128),
          i
        );
      }
      t.exports = { decode: i, encode: f };
    },
    6894: function (t, e, n) {
      var r = n(3015),
        i = n(3072),
        o = n(2758),
        f = n(2771),
        s = f.OP_RESERVED;
      function u(t, e) {
        var n = r.decompile(t);
        if (n.length < 4) return !1;
        if (n[n.length - 1] !== f.OP_CHECKMULTISIG) return !1;
        if (!i.Number(n[0])) return !1;
        if (!i.Number(n[n.length - 2])) return !1;
        var o = n[0] - s,
          u = n[n.length - 2] - s;
        if (o <= 0) return !1;
        if (u > 16) return !1;
        if (o > u) return !1;
        if (u !== n.length - 3) return !1;
        if (e) return !0;
        var h = n.slice(1, -2);
        return h.every(r.isCanonicalPubKey);
      }
      function h(t, e) {
        o(
          { m: i.Number, pubKeys: [r.isCanonicalPubKey] },
          { m: t, pubKeys: e },
        );
        var n = e.length;
        if (n < t) throw new TypeError("Not enough pubKeys provided");
        return r.compile([].concat(s + t, e, s + n, f.OP_CHECKMULTISIG));
      }
      function a(t, e) {
        var n = r.decompile(t);
        return (o(u, n, e), { m: n[0] - s, pubKeys: n.slice(1, -2) });
      }
      ((u.toJSON = function () {
        return "multi-sig output";
      }),
        (t.exports = { check: u, decode: a, encode: h }));
    },
    6895: function (t, e, n) {
      var r = n(3015),
        i = n(3072),
        o = n(2758),
        f = n(2771);
      function s(t) {
        var e = r.compile(t);
        return 22 === e.length && e[0] === f.OP_0 && 20 === e[1];
      }
      function u(t) {
        return (o(i.Hash160bit, t), r.compile([f.OP_0, t]));
      }
      function h(t) {
        return (o(s, t), t.slice(2));
      }
      ((s.toJSON = function () {
        return "Witness pubKeyHash output";
      }),
        (t.exports = { check: s, decode: h, encode: u }));
    },
    6896: function (t, e, n) {
      var r = n(3015),
        i = n(3072),
        o = n(2758),
        f = n(2771);
      function s(t) {
        var e = r.compile(t);
        return 34 === e.length && e[0] === f.OP_0 && 32 === e[1];
      }
      function u(t) {
        return (o(i.Hash256bit, t), r.compile([f.OP_0, t]));
      }
      function h(t) {
        return (o(s, t), t.slice(2));
      }
      ((s.toJSON = function () {
        return "Witness scriptHash output";
      }),
        (t.exports = { check: s, decode: h, encode: u }));
    },
    6897: function (t, e, n) {
      var r = n(3062),
        i = n(2864);
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
      function f(t, e) {
        var n = t.readUInt32LE(e),
          r = t.readUInt32LE(e + 4);
        return ((r *= 4294967296), o(r + n, 9007199254740991), r + n);
      }
      function s(t, e, n) {
        return (
          o(e, 9007199254740991),
          t.writeInt32LE(-1 & e, n),
          t.writeUInt32LE(Math.floor(e / 4294967296), n + 4),
          n + 8
        );
      }
      function u(t, e) {
        var n = i.decode(t, e);
        return { number: n, size: i.decode.bytes };
      }
      function h(t, e, n) {
        return (i.encode(e, t, n), i.encode.bytes);
      }
      t.exports = {
        pushDataSize: r.encodingLength,
        readPushDataInt: r.decode,
        readUInt64LE: f,
        readVarInt: u,
        varIntBuffer: i.encode,
        varIntSize: i.encodingLength,
        writePushDataInt: r.encode,
        writeUInt64LE: s,
        writeVarInt: h,
      };
    },
    6898: function (t, e, n) {
      var r = n(46).Buffer,
        i = n(3847),
        o = n(3110),
        f = n(2758),
        s = n(3072),
        u = n(2864),
        h = n(4866);
      function Block() {
        ((this.version = 1),
          (this.prevHash = null),
          (this.merkleRoot = null),
          (this.timestamp = 0),
          (this.bits = 0),
          (this.nonce = 0));
      }
      ((Block.fromBuffer = function (t) {
        if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
        var e = 0;
        function n(n) {
          return ((e += n), t.slice(e - n, e));
        }
        function r() {
          var n = t.readUInt32LE(e);
          return ((e += 4), n);
        }
        function i() {
          var n = t.readInt32LE(e);
          return ((e += 4), n);
        }
        var o = new Block();
        if (
          ((o.version = i()),
          (o.prevHash = n(32)),
          (o.merkleRoot = n(32)),
          (o.timestamp = r()),
          (o.bits = r()),
          (o.nonce = r()),
          80 === t.length)
        )
          return o;
        function f() {
          var n = u.decode(t, e);
          return ((e += u.decode.bytes), n);
        }
        function s() {
          var n = h.fromBuffer(t.slice(e), !0);
          return ((e += n.byteLength()), n);
        }
        var a = f();
        o.transactions = [];
        for (var c = 0; c < a; ++c) {
          var A = s();
          o.transactions.push(A);
        }
        return o;
      }),
        (Block.prototype.byteLength = function (t) {
          return t || !this.transactions
            ? 80
            : 80 +
                u.encodingLength(this.transactions.length) +
                this.transactions.reduce(function (t, e) {
                  return t + e.byteLength();
                }, 0);
        }),
        (Block.fromHex = function (t) {
          return Block.fromBuffer(r.from(t, "hex"));
        }),
        (Block.prototype.getHash = function () {
          return i.hash256(this.toBuffer(!0));
        }),
        (Block.prototype.getId = function () {
          return this.getHash().reverse().toString("hex");
        }),
        (Block.prototype.getUTCDate = function () {
          var t = new Date(0);
          return (t.setUTCSeconds(this.timestamp), t);
        }),
        (Block.prototype.toBuffer = function (t) {
          var e = r.allocUnsafe(this.byteLength(t)),
            n = 0;
          function i(t) {
            (t.copy(e, n), (n += t.length));
          }
          function o(t) {
            (e.writeInt32LE(t, n), (n += 4));
          }
          function f(t) {
            (e.writeUInt32LE(t, n), (n += 4));
          }
          return (
            o(this.version),
            i(this.prevHash),
            i(this.merkleRoot),
            f(this.timestamp),
            f(this.bits),
            f(this.nonce),
            t ||
              !this.transactions ||
              (u.encode(this.transactions.length, e, n),
              (n += u.encode.bytes),
              this.transactions.forEach(function (t) {
                var r = t.byteLength();
                (t.toBuffer(e, n), (n += r));
              })),
            e
          );
        }),
        (Block.prototype.toHex = function (t) {
          return this.toBuffer(t).toString("hex");
        }),
        (Block.calculateTarget = function (t) {
          var e = ((4278190080 & t) >> 24) - 3,
            n = 8388607 & t,
            i = r.alloc(32, 0);
          return (i.writeUInt32BE(n, 28 - e), i);
        }),
        (Block.calculateMerkleRoot = function (t) {
          if ((f([{ getHash: s.Function }], t), 0 === t.length))
            throw TypeError("Cannot compute merkle root for zero transactions");
          var e = t.map(function (t) {
            return t.getHash();
          });
          return o(e, i.hash256);
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
    6899: function (t, e) {
      t.exports = {
        bitcoingold: { n: 144, k: 5, person: "BgoldPoW" },
        bitcoingoldPreEquihashFork: { n: 200, k: 9, person: "ZcashPoW" },
        bitcoingoldTestnet: { n: 144, k: 5, person: "BgoldPoW" },
        bitcoingoldRegtest: { n: 96, k: 5, person: "BgoldPoW" },
      };
    },
    6900: function (t, e, n) {
      var BigInteger = n(2802);
      function r(t, e, n) {
        if (!e || e.length <= n.averagingWindow)
          throw new Error(
            "LWMA need the last " +
              (n.averagingWindow + 1) +
              " blocks to determine the next target",
          );
        var r = {};
        e.forEach((t) => {
          r[t.height] = t;
        });
        for (var o = t.height - n.averagingWindow - 1; o < t.height; o++)
          if (!r[o])
            throw new Error(
              "Block with height " +
                o +
                " is missing, cannot calculate next target",
            );
        var s = i(t, r, n),
          u = f(s);
        return u;
      }
      function i(t, e, n) {
        var r = n.adjustWeight,
          i = t.height,
          f = e[i - 1];
        if (n.regtest) return o(f.bits);
        var s = new BigInteger(n.powLimit.toString());
        if (n.testnet && t.timestamp > f.timestamp + 2 * n.powTargetSpacing)
          return s;
        for (
          var u = BigInteger.ZERO,
            h = 0,
            a = 0,
            c = 6 * n.powTargetSpacing,
            A = new BigInteger(
              (r * n.averagingWindow * n.averagingWindow).toString(),
            ),
            g = i - n.averagingWindow;
          g < i;
          g++
        ) {
          ((t = e[g]), (f = e[g - 1]));
          var I = t.timestamp - f.timestamp;
          (n.solveTimeLimitation && I > c && (I = c), (a += 1), (h += I * a));
          var p = o(t.bits);
          u = u.add(p.divide(A));
        }
        h < Math.trunc((n.averagingWindow * r) / n.minDenominator) &&
          (h = Math.trunc((n.averagingWindow * r) / n.minDenominator));
        var l = u.multiply(new BigInteger(h.toString()));
        return (l.compareTo(s) >= 0 && (l = s), l);
      }
      function o(t) {
        var e = new BigInteger(t.toString()),
          n = e.shiftRight(24),
          r = 8388607 & t,
          i = new BigInteger(r.toString());
        return n <= 3 ? i.shiftRight(8 * (3 - n)) : i.shiftLeft(8 * (n - 3));
      }
      function f(t) {
        var e = Math.trunc((t.bitLength() + 7) / 8),
          n = BigInteger.ZERO;
        n = e <= 3 ? t.shiftLeft(8 * (3 - e)) : t.shiftRight(8 * (e - 3));
        var r = Number(n.toString());
        return (8388608 & r && ((r >>= 8), (e += 1)), (r |= e << 24), r);
      }
      t.exports = { calcNextBits: r };
    },
  },
]);
