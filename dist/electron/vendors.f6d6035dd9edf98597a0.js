(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [236, 32],
  {
    2706: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(i(11)),
        f = i(19),
        a = r(i(230)),
        d = r(i(8012)),
        s = i(2806),
        h = i(8013);
      function o(t, e) {
        (c(t, e), e.add(t));
      }
      function u(t, e, i) {
        (c(t, e), e.set(t, i));
      }
      function c(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function l(t, e) {
        return t.get(p(t, e));
      }
      function b(t, e, i) {
        return (t.set(p(t, e), i), i);
      }
      function p(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const m = "Monero",
        v = "XMR",
        g = "m/44'/128'/0'/0/0",
        y = 12,
        w = "0",
        M = 64;
      var _ = new WeakMap(),
        S = new WeakMap(),
        A = new WeakMap(),
        x = new WeakMap(),
        I = new WeakSet();
      class XMRCoin extends (0, s.HasProviders)(a.default) {
        constructor(t) {
          let {
            alias: e,
            notify: i,
            feeData: r,
            explorers: n,
            txWebUrl: f,
            socket: a,
            id: s,
            atomicId: h,
          } = t;
          const c = {
            id: s,
            alias: e,
            notify: i,
            name: m,
            ticker: v,
            decimal: y,
            unspendableBalance: w,
            explorers: n,
            txWebUrl: f,
            socket: a,
            atomicId: h,
          };
          (super(c),
            o(this, I),
            u(this, _, void 0),
            u(this, S, void 0),
            u(this, A, void 0),
            u(this, x, void 0),
            (this.derivation = g),
            this.setExplorersModules([d.default]),
            this.loadExplorers(c),
            (this.fee = r.fee),
            (this.coreLibrary = null),
            b(_, this, null),
            b(S, this, null),
            b(A, this, null),
            b(x, this, null),
            (this.info = {}));
        }
        async loadWallet(t, e) {
          const i = t.toString("hex").substr(0, M);
          return (
            await this.setPrivateKey(i),
            {
              id: this.id,
              privateKey: {
                privateKey: l(_, this),
                privateKeySpend: l(A, this),
                privateKeyView: l(S, this),
                publicKeySpend: l(x, this),
              },
              address: this.address,
            }
          );
        }
        async setPrivateKey(t, e) {
          let i = t;
          if (
            (null !== t && void 0 !== t && t.privateKey && (i = t.privateKey),
            l(_, this) === i &&
              l(S, this) &&
              l(A, this) &&
              l(x, this) &&
              this.address)
          )
            return void this.getProvider("node").setup(l(S, this), l(A, this));
          const {
            privView: r,
            privSpend: n,
            pubSpend: f,
            address: a,
          } = (0, h.getAccount)(i);
          (b(S, this, r),
            b(A, this, n),
            b(x, this, f),
            (this.address = a),
            b(_, this, i),
            this.getProvider("node").setup(l(S, this), l(A, this)));
        }
        validateAddress(t) {
          return (0, h.validateAddress)(t);
        }
        async getInfo() {
          const { balance: t } = await this.getProvider("balance").getInfo();
          return ((this.balance = t), { balance: t });
        }
        getFee() {
          return this.getProvider("node").getFee();
        }
        async createTransaction(t) {
          let { address: e, amount: i, memo: r, isSendAll: n = !1 } = t;
          try {
            const t = n || (await p(I, this, k).call(this, i));
            return {
              destinations: [
                { to_address: e, send_amount: t ? 0 : this.toCurrencyUnit(i) },
              ],
              shouldSweep: t,
              priority: 1,
            };
          } catch (a) {
            throw new f.ExternalError({ error: a, instance: this });
          }
        }
        async activate() {
          (await this.getProvider("node").reactivateMyMonero(),
            await super.activate());
        }
      }
      async function k(t) {
        const [e, i] = await Promise.all([this.getBalance(), this.getFee()]);
        return t === new n.default(e).sub(new n.default(i)).toString();
      }
      e.default = XMRCoin;
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    3216: function (t, e, i) {
      "use strict";
      var r = e;
      ((r.version = i(8017).version),
        (r.utils = i(8018)),
        (r.rand = i(390)),
        (r.curve = i(4683)),
        (r.curves = i(8024)),
        (r.ec = i(8026)),
        (r.eddsa = i(8029)));
    },
    3422: function (t, e, i) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var i = function () {};
            ((i.prototype = e.prototype),
              (t.prototype = new i()),
              (t.prototype.constructor = t));
          }
          function f(t, e, i) {
            if (f.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((i = e), (e = 10)),
                this._init(t || 0, e || 10, i || "be")));
          }
          var a;
          ("object" === typeof t ? (t.exports = f) : (e.BN = f),
            (f.BN = f),
            (f.wordSize = 26));
          try {
            a =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : i(8019).Buffer;
          } catch (k) {}
          function d(t, e) {
            var i = t.charCodeAt(e);
            return i >= 65 && i <= 70
              ? i - 55
              : i >= 97 && i <= 102
                ? i - 87
                : (i - 48) & 15;
          }
          function s(t, e, i) {
            var r = d(t, i);
            return (i - 1 >= e && (r |= d(t, i - 1) << 4), r);
          }
          function h(t, e, i, r) {
            for (var n = 0, f = Math.min(t.length, i), a = e; a < f; a++) {
              var d = t.charCodeAt(a) - 48;
              ((n *= r),
                (n += d >= 49 ? d - 49 + 10 : d >= 17 ? d - 17 + 10 : d));
            }
            return n;
          }
          ((f.isBN = function (t) {
            return (
              t instanceof f ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === f.wordSize &&
                Array.isArray(t.words))
            );
          }),
            (f.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (f.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (f.prototype._init = function (t, e, i) {
              if ("number" === typeof t) return this._initNumber(t, e, i);
              if ("object" === typeof t) return this._initArray(t, e, i);
              ("hex" === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === e
                    ? this._parseHex(t, n, i)
                    : (this._parseBase(t, e, n),
                      "le" === i && this._initArray(this.toArray(), e, i))));
            }),
            (f.prototype._initNumber = function (t, e, i) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (r(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === i && this._initArray(this.toArray(), e, i));
            }),
            (f.prototype._initArray = function (t, e, i) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var f,
                a,
                d = 0;
              if ("be" === i)
                for (n = t.length - 1, f = 0; n >= 0; n -= 3)
                  ((a = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[f] |= (a << d) & 67108863),
                    (this.words[f + 1] = (a >>> (26 - d)) & 67108863),
                    (d += 24),
                    d >= 26 && ((d -= 26), f++));
              else if ("le" === i)
                for (n = 0, f = 0; n < t.length; n += 3)
                  ((a = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[f] |= (a << d) & 67108863),
                    (this.words[f + 1] = (a >>> (26 - d)) & 67108863),
                    (d += 24),
                    d >= 26 && ((d -= 26), f++));
              return this.strip();
            }),
            (f.prototype._parseHex = function (t, e, i) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                f = 0,
                a = 0;
              if ("be" === i)
                for (r = t.length - 1; r >= e; r -= 2)
                  ((n = s(t, e, r) << f),
                    (this.words[a] |= 67108863 & n),
                    f >= 18
                      ? ((f -= 18), (a += 1), (this.words[a] |= n >>> 26))
                      : (f += 8));
              else {
                var d = t.length - e;
                for (r = d % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  ((n = s(t, e, r) << f),
                    (this.words[a] |= 67108863 & n),
                    f >= 18
                      ? ((f -= 18), (a += 1), (this.words[a] |= n >>> 26))
                      : (f += 8));
              }
              this.strip();
            }),
            (f.prototype._parseBase = function (t, e, i) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
              (r--, (n = (n / e) | 0));
              for (
                var f = t.length - i,
                  a = f % r,
                  d = Math.min(f, f - a) + i,
                  s = 0,
                  o = i;
                o < d;
                o += r
              )
                ((s = h(t, o, o + r, e)),
                  this.imuln(n),
                  this.words[0] + s < 67108864
                    ? (this.words[0] += s)
                    : this._iaddn(s));
              if (0 !== a) {
                var u = 1;
                for (s = h(t, o, t.length, e), o = 0; o < a; o++) u *= e;
                (this.imuln(u),
                  this.words[0] + s < 67108864
                    ? (this.words[0] += s)
                    : this._iaddn(s));
              }
              this.strip();
            }),
            (f.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (f.prototype.clone = function () {
              var t = new f(null);
              return (this.copy(t), t);
            }),
            (f.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (f.prototype.strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (f.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (f.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            }));
          var o = [
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
            u = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            c = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function l(t) {
            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
              var r = (i / 26) | 0,
                n = i % 26;
              e[i] = (t.words[r] & (1 << n)) >>> n;
            }
            return e;
          }
          function b(t, e, i) {
            i.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            ((i.length = r), (r = (r - 1) | 0));
            var n = 0 | t.words[0],
              f = 0 | e.words[0],
              a = n * f,
              d = 67108863 & a,
              s = (a / 67108864) | 0;
            i.words[0] = d;
            for (var h = 1; h < r; h++) {
              for (
                var o = s >>> 26,
                  u = 67108863 & s,
                  c = Math.min(h, e.length - 1),
                  l = Math.max(0, h - t.length + 1);
                l <= c;
                l++
              ) {
                var b = (h - l) | 0;
                ((n = 0 | t.words[b]),
                  (f = 0 | e.words[l]),
                  (a = n * f + u),
                  (o += (a / 67108864) | 0),
                  (u = 67108863 & a));
              }
              ((i.words[h] = 0 | u), (s = 0 | o));
            }
            return (0 !== s ? (i.words[h] = 0 | s) : i.length--, i.strip());
          }
          ((f.prototype.toString = function (t, e) {
            var i;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              i = "";
              for (var n = 0, f = 0, a = 0; a < this.length; a++) {
                var d = this.words[a],
                  s = (16777215 & ((d << n) | f)).toString(16);
                ((f = (d >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), a--),
                  (i =
                    0 !== f || a !== this.length - 1
                      ? o[6 - s.length] + s + i
                      : s + i));
              }
              0 !== f && (i = f.toString(16) + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = u[t],
                l = c[t];
              i = "";
              var b = this.clone();
              b.negative = 0;
              while (!b.isZero()) {
                var p = b.modn(l).toString(t);
                ((b = b.idivn(l)),
                  (i = b.isZero() ? p + i : o[h - p.length] + p + i));
              }
              this.isZero() && (i = "0" + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (f.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (f.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (f.prototype.toBuffer = function (t, e) {
              return (r("undefined" !== typeof a), this.toArrayLike(a, t, e));
            }),
            (f.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (f.prototype.toArrayLike = function (t, e, i) {
              var n = this.byteLength(),
                f = i || Math.max(1, n);
              (r(n <= f, "byte array longer than desired length"),
                r(f > 0, "Requested array length <= 0"),
                this.strip());
              var a,
                d,
                s = "le" === e,
                h = new t(f),
                o = this.clone();
              if (s) {
                for (d = 0; !o.isZero(); d++)
                  ((a = o.andln(255)), o.iushrn(8), (h[d] = a));
                for (; d < f; d++) h[d] = 0;
              } else {
                for (d = 0; d < f - n; d++) h[d] = 0;
                for (d = 0; !o.isZero(); d++)
                  ((a = o.andln(255)), o.iushrn(8), (h[f - d - 1] = a));
              }
              return h;
            }),
            Math.clz32
              ? (f.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (f.prototype._countBits = function (t) {
                  var e = t,
                    i = 0;
                  return (
                    e >= 4096 && ((i += 13), (e >>>= 13)),
                    e >= 64 && ((i += 7), (e >>>= 7)),
                    e >= 8 && ((i += 4), (e >>>= 4)),
                    e >= 2 && ((i += 2), (e >>>= 2)),
                    i + e
                  );
                }),
            (f.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                i = 0;
              return (
                0 === (8191 & e) && ((i += 13), (e >>>= 13)),
                0 === (127 & e) && ((i += 7), (e >>>= 7)),
                0 === (15 & e) && ((i += 4), (e >>>= 4)),
                0 === (3 & e) && ((i += 2), (e >>>= 2)),
                0 === (1 & e) && i++,
                i
              );
            }),
            (f.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (f.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var i = this._zeroBits(this.words[e]);
                if (((t += i), 26 !== i)) break;
              }
              return t;
            }),
            (f.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (f.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (f.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (f.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (f.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (f.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (f.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this.strip();
            }),
            (f.prototype.ior = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (f.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (f.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (f.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var i = 0; i < e.length; i++)
                this.words[i] = this.words[i] & t.words[i];
              return ((this.length = e.length), this.strip());
            }),
            (f.prototype.iand = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (f.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (f.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (f.prototype.iuxor = function (t) {
              var e, i;
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var r = 0; r < i.length; r++)
                this.words[r] = e.words[r] ^ i.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return ((this.length = e.length), this.strip());
            }),
            (f.prototype.ixor = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (f.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (f.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (f.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                i = t % 26;
              (this._expand(e), i > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                i > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
                this.strip()
              );
            }),
            (f.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (f.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var i = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(i + 1),
                (this.words[i] = e
                  ? this.words[i] | (1 << n)
                  : this.words[i] & ~(1 << n)),
                this.strip()
              );
            }),
            (f.prototype.iadd = function (t) {
              var e, i, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((i = this), (r = t))
                : ((i = t), (r = this));
              for (var n = 0, f = 0; f < r.length; f++)
                ((e = (0 | i.words[f]) + (0 | r.words[f]) + n),
                  (this.words[f] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && f < i.length; f++)
                ((e = (0 | i.words[f]) + n),
                  (this.words[f] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = i.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (i !== this)
                for (; f < i.length; f++) this.words[f] = i.words[f];
              return this;
            }),
            (f.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (f.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var i,
                r,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
              for (var f = 0, a = 0; a < r.length; a++)
                ((e = (0 | i.words[a]) - (0 | r.words[a]) + f),
                  (f = e >> 26),
                  (this.words[a] = 67108863 & e));
              for (; 0 !== f && a < i.length; a++)
                ((e = (0 | i.words[a]) + f),
                  (f = e >> 26),
                  (this.words[a] = 67108863 & e));
              if (0 === f && a < i.length && i !== this)
                for (; a < i.length; a++) this.words[a] = i.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                i !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (f.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var p = function (t, e, i) {
            var r,
              n,
              f,
              a = t.words,
              d = e.words,
              s = i.words,
              h = 0,
              o = 0 | a[0],
              u = 8191 & o,
              c = o >>> 13,
              l = 0 | a[1],
              b = 8191 & l,
              p = l >>> 13,
              m = 0 | a[2],
              v = 8191 & m,
              g = m >>> 13,
              y = 0 | a[3],
              w = 8191 & y,
              M = y >>> 13,
              _ = 0 | a[4],
              S = 8191 & _,
              A = _ >>> 13,
              x = 0 | a[5],
              I = 8191 & x,
              k = x >>> 13,
              R = 0 | a[6],
              q = 8191 & R,
              z = R >>> 13,
              E = 0 | a[7],
              P = 8191 & E,
              N = E >>> 13,
              B = 0 | a[8],
              j = 8191 & B,
              L = B >>> 13,
              O = 0 | a[9],
              T = 8191 & O,
              Z = O >>> 13,
              C = 0 | d[0],
              F = 8191 & C,
              $ = C >>> 13,
              D = 0 | d[1],
              J = 8191 & D,
              U = D >>> 13,
              K = 0 | d[2],
              X = 8191 & K,
              W = K >>> 13,
              V = 0 | d[3],
              H = 8191 & V,
              Y = V >>> 13,
              G = 0 | d[4],
              Q = 8191 & G,
              tt = G >>> 13,
              et = 0 | d[5],
              it = 8191 & et,
              rt = et >>> 13,
              nt = 0 | d[6],
              ft = 8191 & nt,
              at = nt >>> 13,
              dt = 0 | d[7],
              st = 8191 & dt,
              ht = dt >>> 13,
              ot = 0 | d[8],
              ut = 8191 & ot,
              ct = ot >>> 13,
              lt = 0 | d[9],
              bt = 8191 & lt,
              pt = lt >>> 13;
            ((i.negative = t.negative ^ e.negative),
              (i.length = 19),
              (r = Math.imul(u, F)),
              (n = Math.imul(u, $)),
              (n = (n + Math.imul(c, F)) | 0),
              (f = Math.imul(c, $)));
            var mt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (r = Math.imul(b, F)),
              (n = Math.imul(b, $)),
              (n = (n + Math.imul(p, F)) | 0),
              (f = Math.imul(p, $)),
              (r = (r + Math.imul(u, J)) | 0),
              (n = (n + Math.imul(u, U)) | 0),
              (n = (n + Math.imul(c, J)) | 0),
              (f = (f + Math.imul(c, U)) | 0));
            var vt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(v, F)),
              (n = Math.imul(v, $)),
              (n = (n + Math.imul(g, F)) | 0),
              (f = Math.imul(g, $)),
              (r = (r + Math.imul(b, J)) | 0),
              (n = (n + Math.imul(b, U)) | 0),
              (n = (n + Math.imul(p, J)) | 0),
              (f = (f + Math.imul(p, U)) | 0),
              (r = (r + Math.imul(u, X)) | 0),
              (n = (n + Math.imul(u, W)) | 0),
              (n = (n + Math.imul(c, X)) | 0),
              (f = (f + Math.imul(c, W)) | 0));
            var gt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(w, F)),
              (n = Math.imul(w, $)),
              (n = (n + Math.imul(M, F)) | 0),
              (f = Math.imul(M, $)),
              (r = (r + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(v, U)) | 0),
              (n = (n + Math.imul(g, J)) | 0),
              (f = (f + Math.imul(g, U)) | 0),
              (r = (r + Math.imul(b, X)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (f = (f + Math.imul(p, W)) | 0),
              (r = (r + Math.imul(u, H)) | 0),
              (n = (n + Math.imul(u, Y)) | 0),
              (n = (n + Math.imul(c, H)) | 0),
              (f = (f + Math.imul(c, Y)) | 0));
            var yt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(S, F)),
              (n = Math.imul(S, $)),
              (n = (n + Math.imul(A, F)) | 0),
              (f = Math.imul(A, $)),
              (r = (r + Math.imul(w, J)) | 0),
              (n = (n + Math.imul(w, U)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (f = (f + Math.imul(M, U)) | 0),
              (r = (r + Math.imul(v, X)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (f = (f + Math.imul(g, W)) | 0),
              (r = (r + Math.imul(b, H)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (n = (n + Math.imul(p, H)) | 0),
              (f = (f + Math.imul(p, Y)) | 0),
              (r = (r + Math.imul(u, Q)) | 0),
              (n = (n + Math.imul(u, tt)) | 0),
              (n = (n + Math.imul(c, Q)) | 0),
              (f = (f + Math.imul(c, tt)) | 0));
            var wt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(I, F)),
              (n = Math.imul(I, $)),
              (n = (n + Math.imul(k, F)) | 0),
              (f = Math.imul(k, $)),
              (r = (r + Math.imul(S, J)) | 0),
              (n = (n + Math.imul(S, U)) | 0),
              (n = (n + Math.imul(A, J)) | 0),
              (f = (f + Math.imul(A, U)) | 0),
              (r = (r + Math.imul(w, X)) | 0),
              (n = (n + Math.imul(w, W)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (f = (f + Math.imul(M, W)) | 0),
              (r = (r + Math.imul(v, H)) | 0),
              (n = (n + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(g, H)) | 0),
              (f = (f + Math.imul(g, Y)) | 0),
              (r = (r + Math.imul(b, Q)) | 0),
              (n = (n + Math.imul(b, tt)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (f = (f + Math.imul(p, tt)) | 0),
              (r = (r + Math.imul(u, it)) | 0),
              (n = (n + Math.imul(u, rt)) | 0),
              (n = (n + Math.imul(c, it)) | 0),
              (f = (f + Math.imul(c, rt)) | 0));
            var Mt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(q, F)),
              (n = Math.imul(q, $)),
              (n = (n + Math.imul(z, F)) | 0),
              (f = Math.imul(z, $)),
              (r = (r + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(I, U)) | 0),
              (n = (n + Math.imul(k, J)) | 0),
              (f = (f + Math.imul(k, U)) | 0),
              (r = (r + Math.imul(S, X)) | 0),
              (n = (n + Math.imul(S, W)) | 0),
              (n = (n + Math.imul(A, X)) | 0),
              (f = (f + Math.imul(A, W)) | 0),
              (r = (r + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (n = (n + Math.imul(M, H)) | 0),
              (f = (f + Math.imul(M, Y)) | 0),
              (r = (r + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(g, Q)) | 0),
              (f = (f + Math.imul(g, tt)) | 0),
              (r = (r + Math.imul(b, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (f = (f + Math.imul(p, rt)) | 0),
              (r = (r + Math.imul(u, ft)) | 0),
              (n = (n + Math.imul(u, at)) | 0),
              (n = (n + Math.imul(c, ft)) | 0),
              (f = (f + Math.imul(c, at)) | 0));
            var _t = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(P, F)),
              (n = Math.imul(P, $)),
              (n = (n + Math.imul(N, F)) | 0),
              (f = Math.imul(N, $)),
              (r = (r + Math.imul(q, J)) | 0),
              (n = (n + Math.imul(q, U)) | 0),
              (n = (n + Math.imul(z, J)) | 0),
              (f = (f + Math.imul(z, U)) | 0),
              (r = (r + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(k, X)) | 0),
              (f = (f + Math.imul(k, W)) | 0),
              (r = (r + Math.imul(S, H)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (n = (n + Math.imul(A, H)) | 0),
              (f = (f + Math.imul(A, Y)) | 0),
              (r = (r + Math.imul(w, Q)) | 0),
              (n = (n + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (f = (f + Math.imul(M, tt)) | 0),
              (r = (r + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(v, rt)) | 0),
              (n = (n + Math.imul(g, it)) | 0),
              (f = (f + Math.imul(g, rt)) | 0),
              (r = (r + Math.imul(b, ft)) | 0),
              (n = (n + Math.imul(b, at)) | 0),
              (n = (n + Math.imul(p, ft)) | 0),
              (f = (f + Math.imul(p, at)) | 0),
              (r = (r + Math.imul(u, st)) | 0),
              (n = (n + Math.imul(u, ht)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (f = (f + Math.imul(c, ht)) | 0));
            var St = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(j, F)),
              (n = Math.imul(j, $)),
              (n = (n + Math.imul(L, F)) | 0),
              (f = Math.imul(L, $)),
              (r = (r + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(P, U)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (f = (f + Math.imul(N, U)) | 0),
              (r = (r + Math.imul(q, X)) | 0),
              (n = (n + Math.imul(q, W)) | 0),
              (n = (n + Math.imul(z, X)) | 0),
              (f = (f + Math.imul(z, W)) | 0),
              (r = (r + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (n = (n + Math.imul(k, H)) | 0),
              (f = (f + Math.imul(k, Y)) | 0),
              (r = (r + Math.imul(S, Q)) | 0),
              (n = (n + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (f = (f + Math.imul(A, tt)) | 0),
              (r = (r + Math.imul(w, it)) | 0),
              (n = (n + Math.imul(w, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (f = (f + Math.imul(M, rt)) | 0),
              (r = (r + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (f = (f + Math.imul(g, at)) | 0),
              (r = (r + Math.imul(b, st)) | 0),
              (n = (n + Math.imul(b, ht)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (f = (f + Math.imul(p, ht)) | 0),
              (r = (r + Math.imul(u, ut)) | 0),
              (n = (n + Math.imul(u, ct)) | 0),
              (n = (n + Math.imul(c, ut)) | 0),
              (f = (f + Math.imul(c, ct)) | 0));
            var At = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(T, F)),
              (n = Math.imul(T, $)),
              (n = (n + Math.imul(Z, F)) | 0),
              (f = Math.imul(Z, $)),
              (r = (r + Math.imul(j, J)) | 0),
              (n = (n + Math.imul(j, U)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (f = (f + Math.imul(L, U)) | 0),
              (r = (r + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (f = (f + Math.imul(N, W)) | 0),
              (r = (r + Math.imul(q, H)) | 0),
              (n = (n + Math.imul(q, Y)) | 0),
              (n = (n + Math.imul(z, H)) | 0),
              (f = (f + Math.imul(z, Y)) | 0),
              (r = (r + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (f = (f + Math.imul(k, tt)) | 0),
              (r = (r + Math.imul(S, it)) | 0),
              (n = (n + Math.imul(S, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (f = (f + Math.imul(A, rt)) | 0),
              (r = (r + Math.imul(w, ft)) | 0),
              (n = (n + Math.imul(w, at)) | 0),
              (n = (n + Math.imul(M, ft)) | 0),
              (f = (f + Math.imul(M, at)) | 0),
              (r = (r + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(v, ht)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (f = (f + Math.imul(g, ht)) | 0),
              (r = (r + Math.imul(b, ut)) | 0),
              (n = (n + Math.imul(b, ct)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (f = (f + Math.imul(p, ct)) | 0),
              (r = (r + Math.imul(u, bt)) | 0),
              (n = (n + Math.imul(u, pt)) | 0),
              (n = (n + Math.imul(c, bt)) | 0),
              (f = (f + Math.imul(c, pt)) | 0));
            var xt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (r = Math.imul(T, J)),
              (n = Math.imul(T, U)),
              (n = (n + Math.imul(Z, J)) | 0),
              (f = Math.imul(Z, U)),
              (r = (r + Math.imul(j, X)) | 0),
              (n = (n + Math.imul(j, W)) | 0),
              (n = (n + Math.imul(L, X)) | 0),
              (f = (f + Math.imul(L, W)) | 0),
              (r = (r + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (f = (f + Math.imul(N, Y)) | 0),
              (r = (r + Math.imul(q, Q)) | 0),
              (n = (n + Math.imul(q, tt)) | 0),
              (n = (n + Math.imul(z, Q)) | 0),
              (f = (f + Math.imul(z, tt)) | 0),
              (r = (r + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(k, it)) | 0),
              (f = (f + Math.imul(k, rt)) | 0),
              (r = (r + Math.imul(S, ft)) | 0),
              (n = (n + Math.imul(S, at)) | 0),
              (n = (n + Math.imul(A, ft)) | 0),
              (f = (f + Math.imul(A, at)) | 0),
              (r = (r + Math.imul(w, st)) | 0),
              (n = (n + Math.imul(w, ht)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (f = (f + Math.imul(M, ht)) | 0),
              (r = (r + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (f = (f + Math.imul(g, ct)) | 0),
              (r = (r + Math.imul(b, bt)) | 0),
              (n = (n + Math.imul(b, pt)) | 0),
              (n = (n + Math.imul(p, bt)) | 0),
              (f = (f + Math.imul(p, pt)) | 0));
            var It = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (r = Math.imul(T, X)),
              (n = Math.imul(T, W)),
              (n = (n + Math.imul(Z, X)) | 0),
              (f = Math.imul(Z, W)),
              (r = (r + Math.imul(j, H)) | 0),
              (n = (n + Math.imul(j, Y)) | 0),
              (n = (n + Math.imul(L, H)) | 0),
              (f = (f + Math.imul(L, Y)) | 0),
              (r = (r + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (f = (f + Math.imul(N, tt)) | 0),
              (r = (r + Math.imul(q, it)) | 0),
              (n = (n + Math.imul(q, rt)) | 0),
              (n = (n + Math.imul(z, it)) | 0),
              (f = (f + Math.imul(z, rt)) | 0),
              (r = (r + Math.imul(I, ft)) | 0),
              (n = (n + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(k, ft)) | 0),
              (f = (f + Math.imul(k, at)) | 0),
              (r = (r + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(S, ht)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (f = (f + Math.imul(A, ht)) | 0),
              (r = (r + Math.imul(w, ut)) | 0),
              (n = (n + Math.imul(w, ct)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (f = (f + Math.imul(M, ct)) | 0),
              (r = (r + Math.imul(v, bt)) | 0),
              (n = (n + Math.imul(v, pt)) | 0),
              (n = (n + Math.imul(g, bt)) | 0),
              (f = (f + Math.imul(g, pt)) | 0));
            var kt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(T, H)),
              (n = Math.imul(T, Y)),
              (n = (n + Math.imul(Z, H)) | 0),
              (f = Math.imul(Z, Y)),
              (r = (r + Math.imul(j, Q)) | 0),
              (n = (n + Math.imul(j, tt)) | 0),
              (n = (n + Math.imul(L, Q)) | 0),
              (f = (f + Math.imul(L, tt)) | 0),
              (r = (r + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (f = (f + Math.imul(N, rt)) | 0),
              (r = (r + Math.imul(q, ft)) | 0),
              (n = (n + Math.imul(q, at)) | 0),
              (n = (n + Math.imul(z, ft)) | 0),
              (f = (f + Math.imul(z, at)) | 0),
              (r = (r + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(k, st)) | 0),
              (f = (f + Math.imul(k, ht)) | 0),
              (r = (r + Math.imul(S, ut)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (f = (f + Math.imul(A, ct)) | 0),
              (r = (r + Math.imul(w, bt)) | 0),
              (n = (n + Math.imul(w, pt)) | 0),
              (n = (n + Math.imul(M, bt)) | 0),
              (f = (f + Math.imul(M, pt)) | 0));
            var Rt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(T, Q)),
              (n = Math.imul(T, tt)),
              (n = (n + Math.imul(Z, Q)) | 0),
              (f = Math.imul(Z, tt)),
              (r = (r + Math.imul(j, it)) | 0),
              (n = (n + Math.imul(j, rt)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (f = (f + Math.imul(L, rt)) | 0),
              (r = (r + Math.imul(P, ft)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(N, ft)) | 0),
              (f = (f + Math.imul(N, at)) | 0),
              (r = (r + Math.imul(q, st)) | 0),
              (n = (n + Math.imul(q, ht)) | 0),
              (n = (n + Math.imul(z, st)) | 0),
              (f = (f + Math.imul(z, ht)) | 0),
              (r = (r + Math.imul(I, ut)) | 0),
              (n = (n + Math.imul(I, ct)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (f = (f + Math.imul(k, ct)) | 0),
              (r = (r + Math.imul(S, bt)) | 0),
              (n = (n + Math.imul(S, pt)) | 0),
              (n = (n + Math.imul(A, bt)) | 0),
              (f = (f + Math.imul(A, pt)) | 0));
            var qt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (qt >>> 26)) | 0),
              (qt &= 67108863),
              (r = Math.imul(T, it)),
              (n = Math.imul(T, rt)),
              (n = (n + Math.imul(Z, it)) | 0),
              (f = Math.imul(Z, rt)),
              (r = (r + Math.imul(j, ft)) | 0),
              (n = (n + Math.imul(j, at)) | 0),
              (n = (n + Math.imul(L, ft)) | 0),
              (f = (f + Math.imul(L, at)) | 0),
              (r = (r + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (f = (f + Math.imul(N, ht)) | 0),
              (r = (r + Math.imul(q, ut)) | 0),
              (n = (n + Math.imul(q, ct)) | 0),
              (n = (n + Math.imul(z, ut)) | 0),
              (f = (f + Math.imul(z, ct)) | 0),
              (r = (r + Math.imul(I, bt)) | 0),
              (n = (n + Math.imul(I, pt)) | 0),
              (n = (n + Math.imul(k, bt)) | 0),
              (f = (f + Math.imul(k, pt)) | 0));
            var zt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (zt >>> 26)) | 0),
              (zt &= 67108863),
              (r = Math.imul(T, ft)),
              (n = Math.imul(T, at)),
              (n = (n + Math.imul(Z, ft)) | 0),
              (f = Math.imul(Z, at)),
              (r = (r + Math.imul(j, st)) | 0),
              (n = (n + Math.imul(j, ht)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (f = (f + Math.imul(L, ht)) | 0),
              (r = (r + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (f = (f + Math.imul(N, ct)) | 0),
              (r = (r + Math.imul(q, bt)) | 0),
              (n = (n + Math.imul(q, pt)) | 0),
              (n = (n + Math.imul(z, bt)) | 0),
              (f = (f + Math.imul(z, pt)) | 0));
            var Et = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(T, st)),
              (n = Math.imul(T, ht)),
              (n = (n + Math.imul(Z, st)) | 0),
              (f = Math.imul(Z, ht)),
              (r = (r + Math.imul(j, ut)) | 0),
              (n = (n + Math.imul(j, ct)) | 0),
              (n = (n + Math.imul(L, ut)) | 0),
              (f = (f + Math.imul(L, ct)) | 0),
              (r = (r + Math.imul(P, bt)) | 0),
              (n = (n + Math.imul(P, pt)) | 0),
              (n = (n + Math.imul(N, bt)) | 0),
              (f = (f + Math.imul(N, pt)) | 0));
            var Pt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (r = Math.imul(T, ut)),
              (n = Math.imul(T, ct)),
              (n = (n + Math.imul(Z, ut)) | 0),
              (f = Math.imul(Z, ct)),
              (r = (r + Math.imul(j, bt)) | 0),
              (n = (n + Math.imul(j, pt)) | 0),
              (n = (n + Math.imul(L, bt)) | 0),
              (f = (f + Math.imul(L, pt)) | 0));
            var Nt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (r = Math.imul(T, bt)),
              (n = Math.imul(T, pt)),
              (n = (n + Math.imul(Z, bt)) | 0),
              (f = Math.imul(Z, pt)));
            var Bt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (h = (((f + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (s[0] = mt),
              (s[1] = vt),
              (s[2] = gt),
              (s[3] = yt),
              (s[4] = wt),
              (s[5] = Mt),
              (s[6] = _t),
              (s[7] = St),
              (s[8] = At),
              (s[9] = xt),
              (s[10] = It),
              (s[11] = kt),
              (s[12] = Rt),
              (s[13] = qt),
              (s[14] = zt),
              (s[15] = Et),
              (s[16] = Pt),
              (s[17] = Nt),
              (s[18] = Bt),
              0 !== h && ((s[19] = h), i.length++),
              i
            );
          };
          function m(t, e, i) {
            ((i.negative = e.negative ^ t.negative),
              (i.length = t.length + e.length));
            for (var r = 0, n = 0, f = 0; f < i.length - 1; f++) {
              var a = n;
              n = 0;
              for (
                var d = 67108863 & r,
                  s = Math.min(f, e.length - 1),
                  h = Math.max(0, f - t.length + 1);
                h <= s;
                h++
              ) {
                var o = f - h,
                  u = 0 | t.words[o],
                  c = 0 | e.words[h],
                  l = u * c,
                  b = 67108863 & l;
                ((a = (a + ((l / 67108864) | 0)) | 0),
                  (b = (b + d) | 0),
                  (d = 67108863 & b),
                  (a = (a + (b >>> 26)) | 0),
                  (n += a >>> 26),
                  (a &= 67108863));
              }
              ((i.words[f] = d), (r = a), (a = n));
            }
            return (0 !== r ? (i.words[f] = r) : i.length--, i.strip());
          }
          function v(t, e, i) {
            var r = new g();
            return r.mulp(t, e, i);
          }
          function g(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (p = b),
            (f.prototype.mulTo = function (t, e) {
              var i,
                r = this.length + t.length;
              return (
                (i =
                  10 === this.length && 10 === t.length
                    ? p(this, t, e)
                    : r < 63
                      ? b(this, t, e)
                      : r < 1024
                        ? m(this, t, e)
                        : v(this, t, e)),
                i
              );
            }),
            (g.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), i = f.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, i, t);
              return e;
            }),
            (g.prototype.revBin = function (t, e, i) {
              if (0 === t || t === i - 1) return t;
              for (var r = 0, n = 0; n < e; n++)
                ((r |= (1 & t) << (e - n - 1)), (t >>= 1));
              return r;
            }),
            (g.prototype.permute = function (t, e, i, r, n, f) {
              for (var a = 0; a < f; a++) ((r[a] = e[t[a]]), (n[a] = i[t[a]]));
            }),
            (g.prototype.transform = function (t, e, i, r, n, f) {
              this.permute(f, t, e, i, r, n);
              for (var a = 1; a < n; a <<= 1)
                for (
                  var d = a << 1,
                    s = Math.cos((2 * Math.PI) / d),
                    h = Math.sin((2 * Math.PI) / d),
                    o = 0;
                  o < n;
                  o += d
                )
                  for (var u = s, c = h, l = 0; l < a; l++) {
                    var b = i[o + l],
                      p = r[o + l],
                      m = i[o + l + a],
                      v = r[o + l + a],
                      g = u * m - c * v;
                    ((v = u * v + c * m),
                      (m = g),
                      (i[o + l] = b + m),
                      (r[o + l] = p + v),
                      (i[o + l + a] = b - m),
                      (r[o + l + a] = p - v),
                      l !== d &&
                        ((g = s * u - h * c), (c = s * c + h * u), (u = g)));
                  }
            }),
            (g.prototype.guessLen13b = function (t, e) {
              var i = 1 | Math.max(e, t),
                r = 1 & i,
                n = 0;
              for (i = (i / 2) | 0; i; i >>>= 1) n++;
              return 1 << (n + 1 + r);
            }),
            (g.prototype.conjugate = function (t, e, i) {
              if (!(i <= 1))
                for (var r = 0; r < i / 2; r++) {
                  var n = t[r];
                  ((t[r] = t[i - r - 1]),
                    (t[i - r - 1] = n),
                    (n = e[r]),
                    (e[r] = -e[i - r - 1]),
                    (e[i - r - 1] = -n));
                }
            }),
            (g.prototype.normalize13b = function (t, e) {
              for (var i = 0, r = 0; r < e / 2; r++) {
                var n =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  i;
                ((t[r] = 67108863 & n),
                  (i = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (g.prototype.convert13b = function (t, e, i, n) {
              for (var f = 0, a = 0; a < e; a++)
                ((f += 0 | t[a]),
                  (i[2 * a] = 8191 & f),
                  (f >>>= 13),
                  (i[2 * a + 1] = 8191 & f),
                  (f >>>= 13));
              for (a = 2 * e; a < n; ++a) i[a] = 0;
              (r(0 === f), r(0 === (-8192 & f)));
            }),
            (g.prototype.stub = function (t) {
              for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
              return e;
            }),
            (g.prototype.mulp = function (t, e, i) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(r),
                f = this.stub(r),
                a = new Array(r),
                d = new Array(r),
                s = new Array(r),
                h = new Array(r),
                o = new Array(r),
                u = new Array(r),
                c = i.words;
              ((c.length = r),
                this.convert13b(t.words, t.length, a, r),
                this.convert13b(e.words, e.length, h, r),
                this.transform(a, f, d, s, r, n),
                this.transform(h, f, o, u, r, n));
              for (var l = 0; l < r; l++) {
                var b = d[l] * o[l] - s[l] * u[l];
                ((s[l] = d[l] * u[l] + s[l] * o[l]), (d[l] = b));
              }
              return (
                this.conjugate(d, s, r),
                this.transform(d, s, c, f, r, n),
                this.conjugate(c, f, r),
                this.normalize13b(c, r),
                (i.negative = t.negative ^ e.negative),
                (i.length = t.length + e.length),
                i.strip()
              );
            }),
            (f.prototype.mul = function (t) {
              var e = new f(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (f.prototype.mulf = function (t) {
              var e = new f(null);
              return (
                (e.words = new Array(this.length + t.length)),
                v(this, t, e)
              );
            }),
            (f.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (f.prototype.imuln = function (t) {
              (r("number" === typeof t), r(t < 67108864));
              for (var e = 0, i = 0; i < this.length; i++) {
                var n = (0 | this.words[i]) * t,
                  f = (67108863 & n) + (67108863 & e);
                ((e >>= 26),
                  (e += (n / 67108864) | 0),
                  (e += f >>> 26),
                  (this.words[i] = 67108863 & f));
              }
              return (
                0 !== e && ((this.words[i] = e), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                this
              );
            }),
            (f.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (f.prototype.sqr = function () {
              return this.mul(this);
            }),
            (f.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (f.prototype.pow = function (t) {
              var e = l(t);
              if (0 === e.length) return new f(1);
              for (var i = this, r = 0; r < e.length; r++, i = i.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var n = i.sqr(); r < e.length; r++, n = n.sqr())
                  0 !== e[r] && (i = i.mul(n));
              return i;
            }),
            (f.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                i = t % 26,
                n = (t - i) / 26,
                f = (67108863 >>> (26 - i)) << (26 - i);
              if (0 !== i) {
                var a = 0;
                for (e = 0; e < this.length; e++) {
                  var d = this.words[e] & f,
                    s = ((0 | this.words[e]) - d) << i;
                  ((this.words[e] = s | a), (a = d >>> (26 - i)));
                }
                a && ((this.words[e] = a), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this.strip();
            }),
            (f.prototype.ishln = function (t) {
              return (r(0 === this.negative), this.iushln(t));
            }),
            (f.prototype.iushrn = function (t, e, i) {
              var n;
              (r("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var f = t % 26,
                a = Math.min((t - f) / 26, this.length),
                d = 67108863 ^ ((67108863 >>> f) << f),
                s = i;
              if (((n -= a), (n = Math.max(0, n)), s)) {
                for (var h = 0; h < a; h++) s.words[h] = this.words[h];
                s.length = a;
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + a];
              else ((this.words[0] = 0), (this.length = 1));
              var o = 0;
              for (h = this.length - 1; h >= 0 && (0 !== o || h >= n); h--) {
                var u = 0 | this.words[h];
                ((this.words[h] = (o << (26 - f)) | (u >>> f)), (o = u & d));
              }
              return (
                s && 0 !== o && (s.words[s.length++] = o),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (f.prototype.ishrn = function (t, e, i) {
              return (r(0 === this.negative), this.iushrn(t, e, i));
            }),
            (f.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (f.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (f.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (f.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (f.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i) return !1;
              var f = this.words[i];
              return !!(f & n);
            }),
            (f.prototype.imaskn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= i)
              )
                return this;
              if (
                (0 !== e && i++,
                (this.length = Math.min(i, this.length)),
                0 !== e)
              ) {
                var n = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= n;
              }
              return this.strip();
            }),
            (f.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (f.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) < t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (f.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (f.prototype.isubn = function (t) {
              if ((r("number" === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this.strip();
            }),
            (f.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (f.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (f.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (f.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (f.prototype._ishlnsubmul = function (t, e, i) {
              var n,
                f,
                a = t.length + i;
              this._expand(a);
              var d = 0;
              for (n = 0; n < t.length; n++) {
                f = (0 | this.words[n + i]) + d;
                var s = (0 | t.words[n]) * e;
                ((f -= 67108863 & s),
                  (d = (f >> 26) - ((s / 67108864) | 0)),
                  (this.words[n + i] = 67108863 & f));
              }
              for (; n < this.length - i; n++)
                ((f = (0 | this.words[n + i]) + d),
                  (d = f >> 26),
                  (this.words[n + i] = 67108863 & f));
              if (0 === d) return this.strip();
              for (r(-1 === d), d = 0, n = 0; n < this.length; n++)
                ((f = -(0 | this.words[n]) + d),
                  (d = f >> 26),
                  (this.words[n] = 67108863 & f));
              return ((this.negative = 1), this.strip());
            }),
            (f.prototype._wordDiv = function (t, e) {
              var i = this.length - t.length,
                r = this.clone(),
                n = t,
                a = 0 | n.words[n.length - 1],
                d = this._countBits(a);
              ((i = 26 - d),
                0 !== i &&
                  ((n = n.ushln(i)),
                  r.iushln(i),
                  (a = 0 | n.words[n.length - 1])));
              var s,
                h = r.length - n.length;
              if ("mod" !== e) {
                ((s = new f(null)),
                  (s.length = h + 1),
                  (s.words = new Array(s.length)));
                for (var o = 0; o < s.length; o++) s.words[o] = 0;
              }
              var u = r.clone()._ishlnsubmul(n, 1, h);
              0 === u.negative && ((r = u), s && (s.words[h] = 1));
              for (var c = h - 1; c >= 0; c--) {
                var l =
                  67108864 * (0 | r.words[n.length + c]) +
                  (0 | r.words[n.length + c - 1]);
                ((l = Math.min((l / a) | 0, 67108863)),
                  r._ishlnsubmul(n, l, c));
                while (0 !== r.negative)
                  (l--,
                    (r.negative = 0),
                    r._ishlnsubmul(n, 1, c),
                    r.isZero() || (r.negative ^= 1));
                s && (s.words[c] = l);
              }
              return (
                s && s.strip(),
                r.strip(),
                "div" !== e && 0 !== i && r.iushrn(i),
                { div: s || null, mod: r }
              );
            }),
            (f.prototype.divmod = function (t, e, i) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new f(0), mod: new f(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((d = this.neg().divmod(t, e)),
                      "mod" !== e && (n = d.div.neg()),
                      "div" !== e &&
                        ((a = d.mod.neg()), i && 0 !== a.negative && a.iadd(t)),
                      { div: n, mod: a })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((d = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = d.div.neg()),
                        { div: n, mod: d.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((d = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((a = d.mod.neg()),
                            i && 0 !== a.negative && a.isub(t)),
                          { div: d.div, mod: a })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new f(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new f(this.modn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new f(this.modn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, a, d;
            }),
            (f.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (f.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (f.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (f.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                n = t.andln(1),
                f = i.cmp(r);
              return f < 0 || (1 === n && 0 === f)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (f.prototype.modn = function (t) {
              r(t <= 67108863);
              for (
                var e = (1 << 26) % t, i = 0, n = this.length - 1;
                n >= 0;
                n--
              )
                i = (e * i + (0 | this.words[n])) % t;
              return i;
            }),
            (f.prototype.idivn = function (t) {
              r(t <= 67108863);
              for (var e = 0, i = this.length - 1; i >= 0; i--) {
                var n = (0 | this.words[i]) + 67108864 * e;
                ((this.words[i] = (n / t) | 0), (e = n % t));
              }
              return this.strip();
            }),
            (f.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (f.prototype.egcd = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new f(1),
                a = new f(0),
                d = new f(0),
                s = new f(1),
                h = 0;
              while (e.isEven() && i.isEven()) (e.iushrn(1), i.iushrn(1), ++h);
              var o = i.clone(),
                u = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, l = 1;
                  0 === (e.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((n.isOdd() || a.isOdd()) && (n.iadd(o), a.isub(u)),
                      n.iushrn(1),
                      a.iushrn(1));
                }
                for (
                  var b = 0, p = 1;
                  0 === (i.words[0] & p) && b < 26;
                  ++b, p <<= 1
                );
                if (b > 0) {
                  i.iushrn(b);
                  while (b-- > 0)
                    ((d.isOdd() || s.isOdd()) && (d.iadd(o), s.isub(u)),
                      d.iushrn(1),
                      s.iushrn(1));
                }
                e.cmp(i) >= 0
                  ? (e.isub(i), n.isub(d), a.isub(s))
                  : (i.isub(e), d.isub(n), s.isub(a));
              }
              return { a: d, b: s, gcd: i.iushln(h) };
            }),
            (f.prototype._invmp = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                a = new f(1),
                d = new f(0),
                s = i.clone();
              while (e.cmpn(1) > 0 && i.cmpn(1) > 0) {
                for (
                  var h = 0, o = 1;
                  0 === (e.words[0] & o) && h < 26;
                  ++h, o <<= 1
                );
                if (h > 0) {
                  e.iushrn(h);
                  while (h-- > 0) (a.isOdd() && a.iadd(s), a.iushrn(1));
                }
                for (
                  var u = 0, c = 1;
                  0 === (i.words[0] & c) && u < 26;
                  ++u, c <<= 1
                );
                if (u > 0) {
                  i.iushrn(u);
                  while (u-- > 0) (d.isOdd() && d.iadd(s), d.iushrn(1));
                }
                e.cmp(i) >= 0 ? (e.isub(i), a.isub(d)) : (i.isub(e), d.isub(a));
              }
              return (
                (n = 0 === e.cmpn(1) ? a : d),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (f.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                i = t.clone();
              ((e.negative = 0), (i.negative = 0));
              for (var r = 0; e.isEven() && i.isEven(); r++)
                (e.iushrn(1), i.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (i.isEven()) i.iushrn(1);
                var n = e.cmp(i);
                if (n < 0) {
                  var f = e;
                  ((e = i), (i = f));
                } else if (0 === n || 0 === i.cmpn(1)) break;
                e.isub(i);
              } while (1);
              return i.iushln(r);
            }),
            (f.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (f.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (f.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (f.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (f.prototype.bincn = function (t) {
              r("number" === typeof t);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i)
                return (this._expand(i + 1), (this.words[i] |= n), this);
              for (var f = n, a = i; 0 !== f && a < this.length; a++) {
                var d = 0 | this.words[a];
                ((d += f),
                  (f = d >>> 26),
                  (d &= 67108863),
                  (this.words[a] = d));
              }
              return (0 !== f && ((this.words[a] = f), this.length++), this);
            }),
            (f.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (f.prototype.cmpn = function (t) {
              var e,
                i = t < 0;
              if (0 !== this.negative && !i) return -1;
              if (0 === this.negative && i) return 1;
              if ((this.strip(), this.length > 1)) e = 1;
              else {
                (i && (t = -t), r(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (f.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (f.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, i = this.length - 1; i >= 0; i--) {
                var r = 0 | this.words[i],
                  n = 0 | t.words[i];
                if (r !== n) {
                  r < n ? (e = -1) : r > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (f.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (f.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (f.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (f.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (f.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (f.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (f.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (f.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (f.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (f.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (f.red = function (t) {
              return new x(t);
            }),
            (f.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (f.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (f.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (f.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (f.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (f.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (f.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (f.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (f.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (f.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (f.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (f.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (f.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (f.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (f.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (f.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (f.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var y = { k256: null, p224: null, p192: null, p25519: null };
          function w(t, e) {
            ((this.name = t),
              (this.p = new f(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new f(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function M() {
            w.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function _() {
            w.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function S() {
            w.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function A() {
            w.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function x(t) {
            if ("string" === typeof t) {
              var e = f._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function I(t) {
            (x.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new f(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((w.prototype._tmp = function () {
            var t = new f(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (w.prototype.ireduce = function (t) {
              var e,
                i = t;
              do {
                (this.split(i, this.tmp),
                  (i = this.imulK(i)),
                  (i = i.iadd(this.tmp)),
                  (e = i.bitLength()));
              } while (e > this.n);
              var r = e < this.n ? -1 : i.ucmp(this.p);
              return (
                0 === r
                  ? ((i.words[0] = 0), (i.length = 1))
                  : r > 0
                    ? i.isub(this.p)
                    : void 0 !== i.strip
                      ? i.strip()
                      : i._strip(),
                i
              );
            }),
            (w.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (w.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(M, w),
            (M.prototype.split = function (t, e) {
              for (
                var i = 4194303, r = Math.min(t.length, 9), n = 0;
                n < r;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = r), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var f = t.words[9];
              for (e.words[e.length++] = f & i, n = 10; n < t.length; n++) {
                var a = 0 | t.words[n];
                ((t.words[n - 10] = ((a & i) << 4) | (f >>> 22)), (f = a));
              }
              ((f >>>= 22),
                (t.words[n - 10] = f),
                0 === f && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (M.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 0 | t.words[i];
                ((e += 977 * r),
                  (t.words[i] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(_, w),
            n(S, w),
            n(A, w),
            (A.prototype.imulK = function (t) {
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 19 * (0 | t.words[i]) + e,
                  n = 67108863 & r;
                ((r >>>= 26), (t.words[i] = n), (e = r));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (f._prime = function (t) {
              if (y[t]) return y[t];
              var e;
              if ("k256" === t) e = new M();
              else if ("p224" === t) e = new _();
              else if ("p192" === t) e = new S();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new A();
              }
              return ((y[t] = e), e);
            }),
            (x.prototype._verify1 = function (t) {
              (r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers"));
            }),
            (x.prototype._verify2 = function (t, e) {
              (r(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                r(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (x.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this);
            }),
            (x.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (x.prototype.add = function (t, e) {
              this._verify2(t, e);
              var i = t.add(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this));
            }),
            (x.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var i = t.iadd(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i);
            }),
            (x.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var i = t.sub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this));
            }),
            (x.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var i = t.isub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i);
            }),
            (x.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (x.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (x.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (x.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (x.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (x.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var i = this.m.add(new f(1)).iushrn(2);
                return this.pow(t, i);
              }
              var n = this.m.subn(1),
                a = 0;
              while (!n.isZero() && 0 === n.andln(1)) (a++, n.iushrn(1));
              r(!n.isZero());
              var d = new f(1).toRed(this),
                s = d.redNeg(),
                h = this.m.subn(1).iushrn(1),
                o = this.m.bitLength();
              o = new f(2 * o * o).toRed(this);
              while (0 !== this.pow(o, h).cmp(s)) o.redIAdd(s);
              var u = this.pow(o, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                l = this.pow(t, n),
                b = a;
              while (0 !== l.cmp(d)) {
                for (var p = l, m = 0; 0 !== p.cmp(d); m++) p = p.redSqr();
                r(m < b);
                var v = this.pow(u, new f(1).iushln(b - m - 1));
                ((c = c.redMul(v)),
                  (u = v.redSqr()),
                  (l = l.redMul(u)),
                  (b = m));
              }
              return c;
            }),
            (x.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (x.prototype.pow = function (t, e) {
              if (e.isZero()) return new f(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var i = 4,
                r = new Array(1 << i);
              ((r[0] = new f(1).toRed(this)), (r[1] = t));
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
              var a = r[0],
                d = 0,
                s = 0,
                h = e.bitLength() % 26;
              for (0 === h && (h = 26), n = e.length - 1; n >= 0; n--) {
                for (var o = e.words[n], u = h - 1; u >= 0; u--) {
                  var c = (o >> u) & 1;
                  (a !== r[0] && (a = this.sqr(a)),
                    0 !== c || 0 !== d
                      ? ((d <<= 1),
                        (d |= c),
                        s++,
                        (s === i || (0 === n && 0 === u)) &&
                          ((a = this.mul(a, r[d])), (s = 0), (d = 0)))
                      : (s = 0));
                }
                h = 26;
              }
              return a;
            }),
            (x.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (x.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (f.mont = function (t) {
              return new I(t);
            }),
            n(I, x),
            (I.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (I.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (I.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var i = t.imul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                f = n;
              return (
                n.cmp(this.m) >= 0
                  ? (f = n.isub(this.m))
                  : n.cmpn(0) < 0 && (f = n.iadd(this.m)),
                f._forceRed(this)
              );
            }),
            (I.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new f(0)._forceRed(this);
              var i = t.mul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                a = n;
              return (
                n.cmp(this.m) >= 0
                  ? (a = n.isub(this.m))
                  : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
                a._forceRed(this)
              );
            }),
            (I.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, i(20)(t));
    },
    4683: function (t, e, i) {
      "use strict";
      var r = e;
      ((r.base = i(8020)),
        (r.short = i(8021)),
        (r.mont = i(8022)),
        (r.edwards = i(8023)));
    },
    8012: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(i(14)),
        f = i(19),
        a = i(67),
        d = i(35),
        s = r(i(26)),
        h = r(i(129)),
        o = r(i(103)),
        u = r(i(794));
      function c(t, e) {
        (b(t, e), e.add(t));
      }
      function l(t, e, i) {
        (b(t, e), e.set(t, i));
      }
      function b(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function p(t, e) {
        return t.get(v(t, e));
      }
      function m(t, e, i) {
        return (t.set(v(t, e), i), i);
      }
      function v(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const g = new u.default(() => i.e(308).then(i.t.bind(null, 11355, 7))),
        y = "atomic",
        w = "MAINNET",
        M = "incoming",
        _ = 404,
        S = 409,
        A = "x-atomic-id",
        x = "/activate_account",
        I = /^\/?activate_account$/;
      var k = new WeakMap(),
        R = new WeakMap(),
        q = new WeakSet();
      class MyMoneroExplorer extends h.default {
        constructor(t) {
          let { wallet: e, config: i } = t;
          (super({ wallet: e, config: i }),
            c(this, q),
            l(this, k, void 0),
            l(this, R, {
              walletManager: null,
              keys: {},
              wallet: null,
              isLoggedIn: !1,
            }),
            (this.baseUrl = (0, a.getStringWithEnsuredEndChar)(i.baseUrl, "/")),
            (this.ticker = e.ticker),
            m(k, this, e.atomicId));
        }
        setup(t, e) {
          p(R, this).keys = { privateKeyView: t, privateKeySpend: e };
        }
        async reactivateMyMonero() {
          const t = await v(q, this, z).call(this);
          return t.apiClient.httpClient.post(x, { atomicId: p(k, this) });
        }
        async getInfo(t) {
          return (
            await v(q, this, P).call(this),
            { balance: p(R, this).wallet.balance.toString() }
          );
        }
        async getFee() {
          await v(q, this, P).call(this);
          try {
            const t = await p(R, this).wallet.estimateFee();
            return t.toString();
          } catch (t) {
            throw new f.ExternalError(t, this);
          }
        }
        async sendTransaction(t) {
          await v(q, this, P).call(this);
          try {
            const e = await p(R, this).wallet.transfer(t);
            return { txid: e };
          } catch (e) {
            throw new f.ExternalError(e, this);
          }
        }
        async getTransactions(t) {
          let { address: e } = void 0 === t ? {} : t;
          await v(q, this, P).call(this);
          const i = p(R, this).wallet.transactions;
          return this.modifyTransactionsResponse(i, e);
        }
        getTxHash(t) {
          return t.hash;
        }
        getTxDirection(t, e) {
          return e.direction === M;
        }
        getTxOtherSideAddress(t, e) {
          return e.destinationAddress;
        }
        getTxValue(t, e) {
          return this.wallet.toCurrencyUnit(e.amount.abs().toString());
        }
        getTxDateTime(t) {
          return new Date(t.timestamp);
        }
        getTxFee(t) {
          return this.wallet.toCurrencyUnit(t.fee.toString());
        }
      }
      async function z() {
        if (p(R, this).walletManager) return p(R, this).walletManager;
        const t = n.default.create({ baseURL: this.baseUrl });
        (t.interceptors.request.use(
          (t) => ((t.headers.common[A] = p(k, this)), t),
        ),
          t.interceptors.response.use(null, (t) => {
            var e;
            const {
              config: { url: i },
              response: { status: r },
            } = t;
            if (r !== _ || !I.test(i))
              return (
                (null === (e = t.response) || void 0 === e
                  ? void 0
                  : e.status) === S &&
                  s.default.emit(d.WALLETS.DEACTIVATE_COIN, {
                    id: this.wallet.id,
                  }),
                Promise.reject(t)
              );
          }));
        const { default: e } = await g.get(),
          i = new e(w, this.baseUrl);
        i.apiClient.httpClient = t;
        try {
          await new Promise((t) => {
            v(q, this, E).call(this, i, t);
          });
        } catch (r) {
          console.error(r);
        }
        return (
          (p(R, this).wallet = await i.importWalletKeys(
            y,
            this.wallet.address,
            p(R, this).keys.privateKeyView,
            p(R, this).keys.privateKeySpend,
          )),
          (p(R, this).walletManager = i),
          i
        );
      }
      async function E(t, e, i) {
        var r;
        void 0 === i && (i = 1);
        const n = 10;
        if (
          (null === (r = t.bridgeClass) || void 0 === r || !r.isValidKeys) &&
          i <= n
        )
          return (
            await t.init(),
            void setTimeout(() => v(q, this, E).call(this, t, e, i + 1), 10)
          );
        e();
      }
      async function P() {
        if (!o.default.isActive(this.wallet))
          throw new Error("Wallet is not active");
        try {
          (p(R, this).isLoggedIn ||
            (await v(q, this, z).call(this),
            await p(R, this).wallet.login(!0),
            (p(R, this).isLoggedIn = !0)),
            await p(R, this).wallet.sync());
        } catch (t) {
          throw new f.ExternalError(t, this);
        }
      }
      e.default = MyMoneroExplorer;
    },
    8013: function (t, e, i) {
      "use strict";
      (function (t) {
        var r = i(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getAccount = x),
          (e.validateAddress = q));
        var n = r(i(8014)),
          f = i(3216),
          a = r(i(11)),
          d = r(i(8032));
        const s =
            7237005577332262213973186563042994240857116359379907606001950938285454250989n,
          h = "12",
          o = new RegExp(
            "^[4][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$",
          ),
          u = new RegExp(
            "^[8][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$",
          ),
          c = new RegExp(
            "^[4][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{105}$",
          ),
          l = "standard",
          b = "subaddress",
          p = "integrated",
          m = {
            [l]: { prod: ["18"], testnet: ["53"] },
            [b]: { prod: ["42"], testnet: ["63"] },
            [p]: { prod: ["19"], testnet: ["54"] },
          };
        function v(e) {
          if (32 !== e.length)
            throw new Error(
              "LibMonero: invalid input length: expected input to be length 32, but got " +
                e.length,
            );
          return t
            .from(
              (BigInt("0x" + t.from(e, "hex").reverse().toString("hex")) % s)
                .toString(16)
                .padStart(64, "0"),
              "hex",
            )
            .reverse();
        }
        function g(t) {
          return new RegExp(`[0-9a-fA-F]{${t.length}}`).test(t);
        }
        function y(t) {
          return t && t.length % 2 < 1 && g(t);
        }
        function w(t) {
          return 32 === t.length ? t : (0, n.default)(t);
        }
        function M(t) {
          return v(t);
        }
        function _(t) {
          return v((0, n.default)(t));
        }
        function S(t, e) {
          return f.utils.toHex(
            e.encodePoint(e.curve.g.mul(new a.default(t, "hex", "le"))),
          );
        }
        function A(e, i, r) {
          const f = e + i + r,
            a = (0, n.default)(t.from(f, "hex")),
            s = f + a.toString("hex").slice(0, 8);
          return d.default.encode(s);
        }
        function x(e) {
          if (!g(e))
            throw new Error("MoneroLib: getKeys Error: seedHex is invalid hex");
          if (!y(e))
            throw new Error("MoneroLib: getKeys Error: seedHex is not valid");
          const i = w(t.from(e, "hex")),
            r = new f.eddsa("ed25519"),
            n = M(i),
            a = _(n),
            d = S(n, r),
            s = S(a, r);
          if (64 !== d.length || 64 !== s.length)
            throw new Error("Invalid length on pubSpend or pubView");
          const o = A(h, d, s);
          return {
            privSpend: n.toString("hex"),
            privView: a.toString("hex"),
            pubSpend: d,
            pubView: s,
            address: o,
          };
        }
        function I(t, e) {
          var i;
          return (
            parseInt(t.substr(0, 2), 16).toString() ===
            (null === (i = m[e]) || void 0 === i ? void 0 : i.prod[0])
          );
        }
        function k(t) {
          return (0, n.default)(t).toString("hex").substr(0, 8);
        }
        function R(t) {
          return o.test(t) ? l : u.test(t) ? b : !!c.test(t) && p;
        }
        function q(e) {
          const i = R(e);
          if (!i) return !1;
          const r = d.default.decode(e);
          if (!r || !I(r, i)) return !1;
          const n = r.slice(-8),
            f = k(t.from(r.slice(0, -8), "hex"));
          return n === f;
        }
      }).call(this, i(2).Buffer);
    },
    8014: function (t, e, i) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      const n = r(i(8015)),
        f = r(i(2)),
        a = r(i(832)),
        d = f.default.Buffer;
      function s(t) {
        return ((t = h(t)), (0, a.default)("keccak256").update(t).digest());
      }
      function h(t) {
        if (!d.isBuffer(t))
          if (Array.isArray(t)) t = d.from(t);
          else if ("string" === typeof t)
            t = o(t) ? d.from(u(c(t)), "hex") : d.from(t);
          else if ("number" === typeof t) t = b(t);
          else if (null === t || void 0 === t) t = d.allocUnsafe(0);
          else if (n.default.isBN(t)) t = t.toArrayLike(d);
          else {
            if (!t.toArray) throw new Error("invalid type");
            t = d.from(t.toArray());
          }
        return t;
      }
      function o(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      function u(t) {
        if ("string" !== typeof t)
          throw new Error(
            `while padding to even, value must be string, is currently ${typeof t}, while padToEven.`,
          );
        return (t.length % 2 && (t = "0" + t), t);
      }
      function c(t) {
        return "string" !== typeof t ? t : l(t) ? t.slice(2) : t;
      }
      function l(t) {
        if ("string" !== typeof t)
          throw new Error(
            "value must be type 'string', is currently type " +
              typeof t +
              ", while checking isHexPrefixed.",
          );
        return "0x" === t.slice(0, 2);
      }
      function b(t) {
        const e = p(t);
        return d.from(u(e.slice(2)), "hex");
      }
      function p(t) {
        const e = t.toString(16);
        return "0x" + e;
      }
      ("undefined" !== typeof window && (window.keccak256 = s),
        (t.exports = s));
    },
    8015: function (t, e, i) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var i = function () {};
            ((i.prototype = e.prototype),
              (t.prototype = new i()),
              (t.prototype.constructor = t));
          }
          function f(t, e, i) {
            if (f.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((i = e), (e = 10)),
                this._init(t || 0, e || 10, i || "be")));
          }
          var a;
          ("object" === typeof t ? (t.exports = f) : (e.BN = f),
            (f.BN = f),
            (f.wordSize = 26));
          try {
            a =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : i(8016).Buffer;
          } catch (z) {}
          function d(t, e) {
            var i = t.charCodeAt(e);
            return i >= 48 && i <= 57
              ? i - 48
              : i >= 65 && i <= 70
                ? i - 55
                : i >= 97 && i <= 102
                  ? i - 87
                  : void r(!1, "Invalid character in " + t);
          }
          function s(t, e, i) {
            var r = d(t, i);
            return (i - 1 >= e && (r |= d(t, i - 1) << 4), r);
          }
          function h(t, e, i, n) {
            for (
              var f = 0, a = 0, d = Math.min(t.length, i), s = e;
              s < d;
              s++
            ) {
              var h = t.charCodeAt(s) - 48;
              ((f *= n),
                (a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                r(h >= 0 && a < n, "Invalid character"),
                (f += a));
            }
            return f;
          }
          function o(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((f.isBN = function (t) {
              return (
                t instanceof f ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === f.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (f.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (f.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (f.prototype._init = function (t, e, i) {
              if ("number" === typeof t) return this._initNumber(t, e, i);
              if ("object" === typeof t) return this._initArray(t, e, i);
              ("hex" === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === e
                    ? this._parseHex(t, n, i)
                    : (this._parseBase(t, e, n),
                      "le" === i && this._initArray(this.toArray(), e, i))));
            }),
            (f.prototype._initNumber = function (t, e, i) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (r(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === i && this._initArray(this.toArray(), e, i));
            }),
            (f.prototype._initArray = function (t, e, i) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var f,
                a,
                d = 0;
              if ("be" === i)
                for (n = t.length - 1, f = 0; n >= 0; n -= 3)
                  ((a = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[f] |= (a << d) & 67108863),
                    (this.words[f + 1] = (a >>> (26 - d)) & 67108863),
                    (d += 24),
                    d >= 26 && ((d -= 26), f++));
              else if ("le" === i)
                for (n = 0, f = 0; n < t.length; n += 3)
                  ((a = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[f] |= (a << d) & 67108863),
                    (this.words[f + 1] = (a >>> (26 - d)) & 67108863),
                    (d += 24),
                    d >= 26 && ((d -= 26), f++));
              return this._strip();
            }),
            (f.prototype._parseHex = function (t, e, i) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                f = 0,
                a = 0;
              if ("be" === i)
                for (r = t.length - 1; r >= e; r -= 2)
                  ((n = s(t, e, r) << f),
                    (this.words[a] |= 67108863 & n),
                    f >= 18
                      ? ((f -= 18), (a += 1), (this.words[a] |= n >>> 26))
                      : (f += 8));
              else {
                var d = t.length - e;
                for (r = d % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  ((n = s(t, e, r) << f),
                    (this.words[a] |= 67108863 & n),
                    f >= 18
                      ? ((f -= 18), (a += 1), (this.words[a] |= n >>> 26))
                      : (f += 8));
              }
              this._strip();
            }),
            (f.prototype._parseBase = function (t, e, i) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
              (r--, (n = (n / e) | 0));
              for (
                var f = t.length - i,
                  a = f % r,
                  d = Math.min(f, f - a) + i,
                  s = 0,
                  o = i;
                o < d;
                o += r
              )
                ((s = h(t, o, o + r, e)),
                  this.imuln(n),
                  this.words[0] + s < 67108864
                    ? (this.words[0] += s)
                    : this._iaddn(s));
              if (0 !== a) {
                var u = 1;
                for (s = h(t, o, t.length, e), o = 0; o < a; o++) u *= e;
                (this.imuln(u),
                  this.words[0] + s < 67108864
                    ? (this.words[0] += s)
                    : this._iaddn(s));
              }
              this._strip();
            }),
            (f.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (f.prototype._move = function (t) {
              o(t, this);
            }),
            (f.prototype.clone = function () {
              var t = new f(null);
              return (this.copy(t), t);
            }),
            (f.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (f.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (f.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              f.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
            } catch (z) {
              f.prototype.inspect = u;
            }
          else f.prototype.inspect = u;
          function u() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var c = [
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
            l = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            b = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((f.prototype.toString = function (t, e) {
            var i;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              i = "";
              for (var n = 0, f = 0, a = 0; a < this.length; a++) {
                var d = this.words[a],
                  s = (16777215 & ((d << n) | f)).toString(16);
                ((f = (d >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), a--),
                  (i =
                    0 !== f || a !== this.length - 1
                      ? c[6 - s.length] + s + i
                      : s + i));
              }
              0 !== f && (i = f.toString(16) + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = l[t],
                o = b[t];
              i = "";
              var u = this.clone();
              u.negative = 0;
              while (!u.isZero()) {
                var p = u.modrn(o).toString(t);
                ((u = u.idivn(o)),
                  (i = u.isZero() ? p + i : c[h - p.length] + p + i));
              }
              this.isZero() && (i = "0" + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (f.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (f.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            a &&
              (f.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(a, t, e);
              }),
            (f.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var p = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function m(t) {
            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
              var r = (i / 26) | 0,
                n = i % 26;
              e[i] = (t.words[r] >>> n) & 1;
            }
            return e;
          }
          function v(t, e, i) {
            i.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            ((i.length = r), (r = (r - 1) | 0));
            var n = 0 | t.words[0],
              f = 0 | e.words[0],
              a = n * f,
              d = 67108863 & a,
              s = (a / 67108864) | 0;
            i.words[0] = d;
            for (var h = 1; h < r; h++) {
              for (
                var o = s >>> 26,
                  u = 67108863 & s,
                  c = Math.min(h, e.length - 1),
                  l = Math.max(0, h - t.length + 1);
                l <= c;
                l++
              ) {
                var b = (h - l) | 0;
                ((n = 0 | t.words[b]),
                  (f = 0 | e.words[l]),
                  (a = n * f + u),
                  (o += (a / 67108864) | 0),
                  (u = 67108863 & a));
              }
              ((i.words[h] = 0 | u), (s = 0 | o));
            }
            return (0 !== s ? (i.words[h] = 0 | s) : i.length--, i._strip());
          }
          ((f.prototype.toArrayLike = function (t, e, i) {
            this._strip();
            var n = this.byteLength(),
              f = i || Math.max(1, n);
            (r(n <= f, "byte array longer than desired length"),
              r(f > 0, "Requested array length <= 0"));
            var a = p(t, f),
              d = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + d](a, n), a);
          }),
            (f.prototype._toArrayLikeLE = function (t, e) {
              for (var i = 0, r = 0, n = 0, f = 0; n < this.length; n++) {
                var a = (this.words[n] << f) | r;
                ((t[i++] = 255 & a),
                  i < t.length && (t[i++] = (a >> 8) & 255),
                  i < t.length && (t[i++] = (a >> 16) & 255),
                  6 === f
                    ? (i < t.length && (t[i++] = (a >> 24) & 255),
                      (r = 0),
                      (f = 0))
                    : ((r = a >>> 24), (f += 2)));
              }
              if (i < t.length) {
                t[i++] = r;
                while (i < t.length) t[i++] = 0;
              }
            }),
            (f.prototype._toArrayLikeBE = function (t, e) {
              for (
                var i = t.length - 1, r = 0, n = 0, f = 0;
                n < this.length;
                n++
              ) {
                var a = (this.words[n] << f) | r;
                ((t[i--] = 255 & a),
                  i >= 0 && (t[i--] = (a >> 8) & 255),
                  i >= 0 && (t[i--] = (a >> 16) & 255),
                  6 === f
                    ? (i >= 0 && (t[i--] = (a >> 24) & 255), (r = 0), (f = 0))
                    : ((r = a >>> 24), (f += 2)));
              }
              if (i >= 0) {
                t[i--] = r;
                while (i >= 0) t[i--] = 0;
              }
            }),
            Math.clz32
              ? (f.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (f.prototype._countBits = function (t) {
                  var e = t,
                    i = 0;
                  return (
                    e >= 4096 && ((i += 13), (e >>>= 13)),
                    e >= 64 && ((i += 7), (e >>>= 7)),
                    e >= 8 && ((i += 4), (e >>>= 4)),
                    e >= 2 && ((i += 2), (e >>>= 2)),
                    i + e
                  );
                }),
            (f.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                i = 0;
              return (
                0 === (8191 & e) && ((i += 13), (e >>>= 13)),
                0 === (127 & e) && ((i += 7), (e >>>= 7)),
                0 === (15 & e) && ((i += 4), (e >>>= 4)),
                0 === (3 & e) && ((i += 2), (e >>>= 2)),
                0 === (1 & e) && i++,
                i
              );
            }),
            (f.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (f.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var i = this._zeroBits(this.words[e]);
                if (((t += i), 26 !== i)) break;
              }
              return t;
            }),
            (f.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (f.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (f.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (f.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (f.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (f.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (f.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (f.prototype.ior = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (f.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (f.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (f.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var i = 0; i < e.length; i++)
                this.words[i] = this.words[i] & t.words[i];
              return ((this.length = e.length), this._strip());
            }),
            (f.prototype.iand = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (f.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (f.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (f.prototype.iuxor = function (t) {
              var e, i;
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var r = 0; r < i.length; r++)
                this.words[r] = e.words[r] ^ i.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (f.prototype.ixor = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (f.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (f.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (f.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                i = t % 26;
              (this._expand(e), i > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                i > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
                this._strip()
              );
            }),
            (f.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (f.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var i = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(i + 1),
                (this.words[i] = e
                  ? this.words[i] | (1 << n)
                  : this.words[i] & ~(1 << n)),
                this._strip()
              );
            }),
            (f.prototype.iadd = function (t) {
              var e, i, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((i = this), (r = t))
                : ((i = t), (r = this));
              for (var n = 0, f = 0; f < r.length; f++)
                ((e = (0 | i.words[f]) + (0 | r.words[f]) + n),
                  (this.words[f] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && f < i.length; f++)
                ((e = (0 | i.words[f]) + n),
                  (this.words[f] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = i.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (i !== this)
                for (; f < i.length; f++) this.words[f] = i.words[f];
              return this;
            }),
            (f.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (f.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var i,
                r,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
              for (var f = 0, a = 0; a < r.length; a++)
                ((e = (0 | i.words[a]) - (0 | r.words[a]) + f),
                  (f = e >> 26),
                  (this.words[a] = 67108863 & e));
              for (; 0 !== f && a < i.length; a++)
                ((e = (0 | i.words[a]) + f),
                  (f = e >> 26),
                  (this.words[a] = 67108863 & e));
              if (0 === f && a < i.length && i !== this)
                for (; a < i.length; a++) this.words[a] = i.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                i !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (f.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var g = function (t, e, i) {
            var r,
              n,
              f,
              a = t.words,
              d = e.words,
              s = i.words,
              h = 0,
              o = 0 | a[0],
              u = 8191 & o,
              c = o >>> 13,
              l = 0 | a[1],
              b = 8191 & l,
              p = l >>> 13,
              m = 0 | a[2],
              v = 8191 & m,
              g = m >>> 13,
              y = 0 | a[3],
              w = 8191 & y,
              M = y >>> 13,
              _ = 0 | a[4],
              S = 8191 & _,
              A = _ >>> 13,
              x = 0 | a[5],
              I = 8191 & x,
              k = x >>> 13,
              R = 0 | a[6],
              q = 8191 & R,
              z = R >>> 13,
              E = 0 | a[7],
              P = 8191 & E,
              N = E >>> 13,
              B = 0 | a[8],
              j = 8191 & B,
              L = B >>> 13,
              O = 0 | a[9],
              T = 8191 & O,
              Z = O >>> 13,
              C = 0 | d[0],
              F = 8191 & C,
              $ = C >>> 13,
              D = 0 | d[1],
              J = 8191 & D,
              U = D >>> 13,
              K = 0 | d[2],
              X = 8191 & K,
              W = K >>> 13,
              V = 0 | d[3],
              H = 8191 & V,
              Y = V >>> 13,
              G = 0 | d[4],
              Q = 8191 & G,
              tt = G >>> 13,
              et = 0 | d[5],
              it = 8191 & et,
              rt = et >>> 13,
              nt = 0 | d[6],
              ft = 8191 & nt,
              at = nt >>> 13,
              dt = 0 | d[7],
              st = 8191 & dt,
              ht = dt >>> 13,
              ot = 0 | d[8],
              ut = 8191 & ot,
              ct = ot >>> 13,
              lt = 0 | d[9],
              bt = 8191 & lt,
              pt = lt >>> 13;
            ((i.negative = t.negative ^ e.negative),
              (i.length = 19),
              (r = Math.imul(u, F)),
              (n = Math.imul(u, $)),
              (n = (n + Math.imul(c, F)) | 0),
              (f = Math.imul(c, $)));
            var mt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (r = Math.imul(b, F)),
              (n = Math.imul(b, $)),
              (n = (n + Math.imul(p, F)) | 0),
              (f = Math.imul(p, $)),
              (r = (r + Math.imul(u, J)) | 0),
              (n = (n + Math.imul(u, U)) | 0),
              (n = (n + Math.imul(c, J)) | 0),
              (f = (f + Math.imul(c, U)) | 0));
            var vt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(v, F)),
              (n = Math.imul(v, $)),
              (n = (n + Math.imul(g, F)) | 0),
              (f = Math.imul(g, $)),
              (r = (r + Math.imul(b, J)) | 0),
              (n = (n + Math.imul(b, U)) | 0),
              (n = (n + Math.imul(p, J)) | 0),
              (f = (f + Math.imul(p, U)) | 0),
              (r = (r + Math.imul(u, X)) | 0),
              (n = (n + Math.imul(u, W)) | 0),
              (n = (n + Math.imul(c, X)) | 0),
              (f = (f + Math.imul(c, W)) | 0));
            var gt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(w, F)),
              (n = Math.imul(w, $)),
              (n = (n + Math.imul(M, F)) | 0),
              (f = Math.imul(M, $)),
              (r = (r + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(v, U)) | 0),
              (n = (n + Math.imul(g, J)) | 0),
              (f = (f + Math.imul(g, U)) | 0),
              (r = (r + Math.imul(b, X)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (f = (f + Math.imul(p, W)) | 0),
              (r = (r + Math.imul(u, H)) | 0),
              (n = (n + Math.imul(u, Y)) | 0),
              (n = (n + Math.imul(c, H)) | 0),
              (f = (f + Math.imul(c, Y)) | 0));
            var yt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(S, F)),
              (n = Math.imul(S, $)),
              (n = (n + Math.imul(A, F)) | 0),
              (f = Math.imul(A, $)),
              (r = (r + Math.imul(w, J)) | 0),
              (n = (n + Math.imul(w, U)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (f = (f + Math.imul(M, U)) | 0),
              (r = (r + Math.imul(v, X)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (f = (f + Math.imul(g, W)) | 0),
              (r = (r + Math.imul(b, H)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (n = (n + Math.imul(p, H)) | 0),
              (f = (f + Math.imul(p, Y)) | 0),
              (r = (r + Math.imul(u, Q)) | 0),
              (n = (n + Math.imul(u, tt)) | 0),
              (n = (n + Math.imul(c, Q)) | 0),
              (f = (f + Math.imul(c, tt)) | 0));
            var wt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(I, F)),
              (n = Math.imul(I, $)),
              (n = (n + Math.imul(k, F)) | 0),
              (f = Math.imul(k, $)),
              (r = (r + Math.imul(S, J)) | 0),
              (n = (n + Math.imul(S, U)) | 0),
              (n = (n + Math.imul(A, J)) | 0),
              (f = (f + Math.imul(A, U)) | 0),
              (r = (r + Math.imul(w, X)) | 0),
              (n = (n + Math.imul(w, W)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (f = (f + Math.imul(M, W)) | 0),
              (r = (r + Math.imul(v, H)) | 0),
              (n = (n + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(g, H)) | 0),
              (f = (f + Math.imul(g, Y)) | 0),
              (r = (r + Math.imul(b, Q)) | 0),
              (n = (n + Math.imul(b, tt)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (f = (f + Math.imul(p, tt)) | 0),
              (r = (r + Math.imul(u, it)) | 0),
              (n = (n + Math.imul(u, rt)) | 0),
              (n = (n + Math.imul(c, it)) | 0),
              (f = (f + Math.imul(c, rt)) | 0));
            var Mt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(q, F)),
              (n = Math.imul(q, $)),
              (n = (n + Math.imul(z, F)) | 0),
              (f = Math.imul(z, $)),
              (r = (r + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(I, U)) | 0),
              (n = (n + Math.imul(k, J)) | 0),
              (f = (f + Math.imul(k, U)) | 0),
              (r = (r + Math.imul(S, X)) | 0),
              (n = (n + Math.imul(S, W)) | 0),
              (n = (n + Math.imul(A, X)) | 0),
              (f = (f + Math.imul(A, W)) | 0),
              (r = (r + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (n = (n + Math.imul(M, H)) | 0),
              (f = (f + Math.imul(M, Y)) | 0),
              (r = (r + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(g, Q)) | 0),
              (f = (f + Math.imul(g, tt)) | 0),
              (r = (r + Math.imul(b, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (f = (f + Math.imul(p, rt)) | 0),
              (r = (r + Math.imul(u, ft)) | 0),
              (n = (n + Math.imul(u, at)) | 0),
              (n = (n + Math.imul(c, ft)) | 0),
              (f = (f + Math.imul(c, at)) | 0));
            var _t = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(P, F)),
              (n = Math.imul(P, $)),
              (n = (n + Math.imul(N, F)) | 0),
              (f = Math.imul(N, $)),
              (r = (r + Math.imul(q, J)) | 0),
              (n = (n + Math.imul(q, U)) | 0),
              (n = (n + Math.imul(z, J)) | 0),
              (f = (f + Math.imul(z, U)) | 0),
              (r = (r + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(k, X)) | 0),
              (f = (f + Math.imul(k, W)) | 0),
              (r = (r + Math.imul(S, H)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (n = (n + Math.imul(A, H)) | 0),
              (f = (f + Math.imul(A, Y)) | 0),
              (r = (r + Math.imul(w, Q)) | 0),
              (n = (n + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (f = (f + Math.imul(M, tt)) | 0),
              (r = (r + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(v, rt)) | 0),
              (n = (n + Math.imul(g, it)) | 0),
              (f = (f + Math.imul(g, rt)) | 0),
              (r = (r + Math.imul(b, ft)) | 0),
              (n = (n + Math.imul(b, at)) | 0),
              (n = (n + Math.imul(p, ft)) | 0),
              (f = (f + Math.imul(p, at)) | 0),
              (r = (r + Math.imul(u, st)) | 0),
              (n = (n + Math.imul(u, ht)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (f = (f + Math.imul(c, ht)) | 0));
            var St = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(j, F)),
              (n = Math.imul(j, $)),
              (n = (n + Math.imul(L, F)) | 0),
              (f = Math.imul(L, $)),
              (r = (r + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(P, U)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (f = (f + Math.imul(N, U)) | 0),
              (r = (r + Math.imul(q, X)) | 0),
              (n = (n + Math.imul(q, W)) | 0),
              (n = (n + Math.imul(z, X)) | 0),
              (f = (f + Math.imul(z, W)) | 0),
              (r = (r + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (n = (n + Math.imul(k, H)) | 0),
              (f = (f + Math.imul(k, Y)) | 0),
              (r = (r + Math.imul(S, Q)) | 0),
              (n = (n + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (f = (f + Math.imul(A, tt)) | 0),
              (r = (r + Math.imul(w, it)) | 0),
              (n = (n + Math.imul(w, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (f = (f + Math.imul(M, rt)) | 0),
              (r = (r + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (f = (f + Math.imul(g, at)) | 0),
              (r = (r + Math.imul(b, st)) | 0),
              (n = (n + Math.imul(b, ht)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (f = (f + Math.imul(p, ht)) | 0),
              (r = (r + Math.imul(u, ut)) | 0),
              (n = (n + Math.imul(u, ct)) | 0),
              (n = (n + Math.imul(c, ut)) | 0),
              (f = (f + Math.imul(c, ct)) | 0));
            var At = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(T, F)),
              (n = Math.imul(T, $)),
              (n = (n + Math.imul(Z, F)) | 0),
              (f = Math.imul(Z, $)),
              (r = (r + Math.imul(j, J)) | 0),
              (n = (n + Math.imul(j, U)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (f = (f + Math.imul(L, U)) | 0),
              (r = (r + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (f = (f + Math.imul(N, W)) | 0),
              (r = (r + Math.imul(q, H)) | 0),
              (n = (n + Math.imul(q, Y)) | 0),
              (n = (n + Math.imul(z, H)) | 0),
              (f = (f + Math.imul(z, Y)) | 0),
              (r = (r + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (f = (f + Math.imul(k, tt)) | 0),
              (r = (r + Math.imul(S, it)) | 0),
              (n = (n + Math.imul(S, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (f = (f + Math.imul(A, rt)) | 0),
              (r = (r + Math.imul(w, ft)) | 0),
              (n = (n + Math.imul(w, at)) | 0),
              (n = (n + Math.imul(M, ft)) | 0),
              (f = (f + Math.imul(M, at)) | 0),
              (r = (r + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(v, ht)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (f = (f + Math.imul(g, ht)) | 0),
              (r = (r + Math.imul(b, ut)) | 0),
              (n = (n + Math.imul(b, ct)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (f = (f + Math.imul(p, ct)) | 0),
              (r = (r + Math.imul(u, bt)) | 0),
              (n = (n + Math.imul(u, pt)) | 0),
              (n = (n + Math.imul(c, bt)) | 0),
              (f = (f + Math.imul(c, pt)) | 0));
            var xt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (r = Math.imul(T, J)),
              (n = Math.imul(T, U)),
              (n = (n + Math.imul(Z, J)) | 0),
              (f = Math.imul(Z, U)),
              (r = (r + Math.imul(j, X)) | 0),
              (n = (n + Math.imul(j, W)) | 0),
              (n = (n + Math.imul(L, X)) | 0),
              (f = (f + Math.imul(L, W)) | 0),
              (r = (r + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (f = (f + Math.imul(N, Y)) | 0),
              (r = (r + Math.imul(q, Q)) | 0),
              (n = (n + Math.imul(q, tt)) | 0),
              (n = (n + Math.imul(z, Q)) | 0),
              (f = (f + Math.imul(z, tt)) | 0),
              (r = (r + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(k, it)) | 0),
              (f = (f + Math.imul(k, rt)) | 0),
              (r = (r + Math.imul(S, ft)) | 0),
              (n = (n + Math.imul(S, at)) | 0),
              (n = (n + Math.imul(A, ft)) | 0),
              (f = (f + Math.imul(A, at)) | 0),
              (r = (r + Math.imul(w, st)) | 0),
              (n = (n + Math.imul(w, ht)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (f = (f + Math.imul(M, ht)) | 0),
              (r = (r + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (f = (f + Math.imul(g, ct)) | 0),
              (r = (r + Math.imul(b, bt)) | 0),
              (n = (n + Math.imul(b, pt)) | 0),
              (n = (n + Math.imul(p, bt)) | 0),
              (f = (f + Math.imul(p, pt)) | 0));
            var It = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (r = Math.imul(T, X)),
              (n = Math.imul(T, W)),
              (n = (n + Math.imul(Z, X)) | 0),
              (f = Math.imul(Z, W)),
              (r = (r + Math.imul(j, H)) | 0),
              (n = (n + Math.imul(j, Y)) | 0),
              (n = (n + Math.imul(L, H)) | 0),
              (f = (f + Math.imul(L, Y)) | 0),
              (r = (r + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (f = (f + Math.imul(N, tt)) | 0),
              (r = (r + Math.imul(q, it)) | 0),
              (n = (n + Math.imul(q, rt)) | 0),
              (n = (n + Math.imul(z, it)) | 0),
              (f = (f + Math.imul(z, rt)) | 0),
              (r = (r + Math.imul(I, ft)) | 0),
              (n = (n + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(k, ft)) | 0),
              (f = (f + Math.imul(k, at)) | 0),
              (r = (r + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(S, ht)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (f = (f + Math.imul(A, ht)) | 0),
              (r = (r + Math.imul(w, ut)) | 0),
              (n = (n + Math.imul(w, ct)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (f = (f + Math.imul(M, ct)) | 0),
              (r = (r + Math.imul(v, bt)) | 0),
              (n = (n + Math.imul(v, pt)) | 0),
              (n = (n + Math.imul(g, bt)) | 0),
              (f = (f + Math.imul(g, pt)) | 0));
            var kt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(T, H)),
              (n = Math.imul(T, Y)),
              (n = (n + Math.imul(Z, H)) | 0),
              (f = Math.imul(Z, Y)),
              (r = (r + Math.imul(j, Q)) | 0),
              (n = (n + Math.imul(j, tt)) | 0),
              (n = (n + Math.imul(L, Q)) | 0),
              (f = (f + Math.imul(L, tt)) | 0),
              (r = (r + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (f = (f + Math.imul(N, rt)) | 0),
              (r = (r + Math.imul(q, ft)) | 0),
              (n = (n + Math.imul(q, at)) | 0),
              (n = (n + Math.imul(z, ft)) | 0),
              (f = (f + Math.imul(z, at)) | 0),
              (r = (r + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(k, st)) | 0),
              (f = (f + Math.imul(k, ht)) | 0),
              (r = (r + Math.imul(S, ut)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (f = (f + Math.imul(A, ct)) | 0),
              (r = (r + Math.imul(w, bt)) | 0),
              (n = (n + Math.imul(w, pt)) | 0),
              (n = (n + Math.imul(M, bt)) | 0),
              (f = (f + Math.imul(M, pt)) | 0));
            var Rt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(T, Q)),
              (n = Math.imul(T, tt)),
              (n = (n + Math.imul(Z, Q)) | 0),
              (f = Math.imul(Z, tt)),
              (r = (r + Math.imul(j, it)) | 0),
              (n = (n + Math.imul(j, rt)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (f = (f + Math.imul(L, rt)) | 0),
              (r = (r + Math.imul(P, ft)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(N, ft)) | 0),
              (f = (f + Math.imul(N, at)) | 0),
              (r = (r + Math.imul(q, st)) | 0),
              (n = (n + Math.imul(q, ht)) | 0),
              (n = (n + Math.imul(z, st)) | 0),
              (f = (f + Math.imul(z, ht)) | 0),
              (r = (r + Math.imul(I, ut)) | 0),
              (n = (n + Math.imul(I, ct)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (f = (f + Math.imul(k, ct)) | 0),
              (r = (r + Math.imul(S, bt)) | 0),
              (n = (n + Math.imul(S, pt)) | 0),
              (n = (n + Math.imul(A, bt)) | 0),
              (f = (f + Math.imul(A, pt)) | 0));
            var qt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (qt >>> 26)) | 0),
              (qt &= 67108863),
              (r = Math.imul(T, it)),
              (n = Math.imul(T, rt)),
              (n = (n + Math.imul(Z, it)) | 0),
              (f = Math.imul(Z, rt)),
              (r = (r + Math.imul(j, ft)) | 0),
              (n = (n + Math.imul(j, at)) | 0),
              (n = (n + Math.imul(L, ft)) | 0),
              (f = (f + Math.imul(L, at)) | 0),
              (r = (r + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (f = (f + Math.imul(N, ht)) | 0),
              (r = (r + Math.imul(q, ut)) | 0),
              (n = (n + Math.imul(q, ct)) | 0),
              (n = (n + Math.imul(z, ut)) | 0),
              (f = (f + Math.imul(z, ct)) | 0),
              (r = (r + Math.imul(I, bt)) | 0),
              (n = (n + Math.imul(I, pt)) | 0),
              (n = (n + Math.imul(k, bt)) | 0),
              (f = (f + Math.imul(k, pt)) | 0));
            var zt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (zt >>> 26)) | 0),
              (zt &= 67108863),
              (r = Math.imul(T, ft)),
              (n = Math.imul(T, at)),
              (n = (n + Math.imul(Z, ft)) | 0),
              (f = Math.imul(Z, at)),
              (r = (r + Math.imul(j, st)) | 0),
              (n = (n + Math.imul(j, ht)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (f = (f + Math.imul(L, ht)) | 0),
              (r = (r + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (f = (f + Math.imul(N, ct)) | 0),
              (r = (r + Math.imul(q, bt)) | 0),
              (n = (n + Math.imul(q, pt)) | 0),
              (n = (n + Math.imul(z, bt)) | 0),
              (f = (f + Math.imul(z, pt)) | 0));
            var Et = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(T, st)),
              (n = Math.imul(T, ht)),
              (n = (n + Math.imul(Z, st)) | 0),
              (f = Math.imul(Z, ht)),
              (r = (r + Math.imul(j, ut)) | 0),
              (n = (n + Math.imul(j, ct)) | 0),
              (n = (n + Math.imul(L, ut)) | 0),
              (f = (f + Math.imul(L, ct)) | 0),
              (r = (r + Math.imul(P, bt)) | 0),
              (n = (n + Math.imul(P, pt)) | 0),
              (n = (n + Math.imul(N, bt)) | 0),
              (f = (f + Math.imul(N, pt)) | 0));
            var Pt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (r = Math.imul(T, ut)),
              (n = Math.imul(T, ct)),
              (n = (n + Math.imul(Z, ut)) | 0),
              (f = Math.imul(Z, ct)),
              (r = (r + Math.imul(j, bt)) | 0),
              (n = (n + Math.imul(j, pt)) | 0),
              (n = (n + Math.imul(L, bt)) | 0),
              (f = (f + Math.imul(L, pt)) | 0));
            var Nt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((f + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (r = Math.imul(T, bt)),
              (n = Math.imul(T, pt)),
              (n = (n + Math.imul(Z, bt)) | 0),
              (f = Math.imul(Z, pt)));
            var Bt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (h = (((f + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (s[0] = mt),
              (s[1] = vt),
              (s[2] = gt),
              (s[3] = yt),
              (s[4] = wt),
              (s[5] = Mt),
              (s[6] = _t),
              (s[7] = St),
              (s[8] = At),
              (s[9] = xt),
              (s[10] = It),
              (s[11] = kt),
              (s[12] = Rt),
              (s[13] = qt),
              (s[14] = zt),
              (s[15] = Et),
              (s[16] = Pt),
              (s[17] = Nt),
              (s[18] = Bt),
              0 !== h && ((s[19] = h), i.length++),
              i
            );
          };
          function y(t, e, i) {
            ((i.negative = e.negative ^ t.negative),
              (i.length = t.length + e.length));
            for (var r = 0, n = 0, f = 0; f < i.length - 1; f++) {
              var a = n;
              n = 0;
              for (
                var d = 67108863 & r,
                  s = Math.min(f, e.length - 1),
                  h = Math.max(0, f - t.length + 1);
                h <= s;
                h++
              ) {
                var o = f - h,
                  u = 0 | t.words[o],
                  c = 0 | e.words[h],
                  l = u * c,
                  b = 67108863 & l;
                ((a = (a + ((l / 67108864) | 0)) | 0),
                  (b = (b + d) | 0),
                  (d = 67108863 & b),
                  (a = (a + (b >>> 26)) | 0),
                  (n += a >>> 26),
                  (a &= 67108863));
              }
              ((i.words[f] = d), (r = a), (a = n));
            }
            return (0 !== r ? (i.words[f] = r) : i.length--, i._strip());
          }
          function w(t, e, i) {
            return y(t, e, i);
          }
          function M(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (g = v),
            (f.prototype.mulTo = function (t, e) {
              var i,
                r = this.length + t.length;
              return (
                (i =
                  10 === this.length && 10 === t.length
                    ? g(this, t, e)
                    : r < 63
                      ? v(this, t, e)
                      : r < 1024
                        ? y(this, t, e)
                        : w(this, t, e)),
                i
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), i = f.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, i, t);
              return e;
            }),
            (M.prototype.revBin = function (t, e, i) {
              if (0 === t || t === i - 1) return t;
              for (var r = 0, n = 0; n < e; n++)
                ((r |= (1 & t) << (e - n - 1)), (t >>= 1));
              return r;
            }),
            (M.prototype.permute = function (t, e, i, r, n, f) {
              for (var a = 0; a < f; a++) ((r[a] = e[t[a]]), (n[a] = i[t[a]]));
            }),
            (M.prototype.transform = function (t, e, i, r, n, f) {
              this.permute(f, t, e, i, r, n);
              for (var a = 1; a < n; a <<= 1)
                for (
                  var d = a << 1,
                    s = Math.cos((2 * Math.PI) / d),
                    h = Math.sin((2 * Math.PI) / d),
                    o = 0;
                  o < n;
                  o += d
                )
                  for (var u = s, c = h, l = 0; l < a; l++) {
                    var b = i[o + l],
                      p = r[o + l],
                      m = i[o + l + a],
                      v = r[o + l + a],
                      g = u * m - c * v;
                    ((v = u * v + c * m),
                      (m = g),
                      (i[o + l] = b + m),
                      (r[o + l] = p + v),
                      (i[o + l + a] = b - m),
                      (r[o + l + a] = p - v),
                      l !== d &&
                        ((g = s * u - h * c), (c = s * c + h * u), (u = g)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, e) {
              var i = 1 | Math.max(e, t),
                r = 1 & i,
                n = 0;
              for (i = (i / 2) | 0; i; i >>>= 1) n++;
              return 1 << (n + 1 + r);
            }),
            (M.prototype.conjugate = function (t, e, i) {
              if (!(i <= 1))
                for (var r = 0; r < i / 2; r++) {
                  var n = t[r];
                  ((t[r] = t[i - r - 1]),
                    (t[i - r - 1] = n),
                    (n = e[r]),
                    (e[r] = -e[i - r - 1]),
                    (e[i - r - 1] = -n));
                }
            }),
            (M.prototype.normalize13b = function (t, e) {
              for (var i = 0, r = 0; r < e / 2; r++) {
                var n =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  i;
                ((t[r] = 67108863 & n),
                  (i = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (M.prototype.convert13b = function (t, e, i, n) {
              for (var f = 0, a = 0; a < e; a++)
                ((f += 0 | t[a]),
                  (i[2 * a] = 8191 & f),
                  (f >>>= 13),
                  (i[2 * a + 1] = 8191 & f),
                  (f >>>= 13));
              for (a = 2 * e; a < n; ++a) i[a] = 0;
              (r(0 === f), r(0 === (-8192 & f)));
            }),
            (M.prototype.stub = function (t) {
              for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
              return e;
            }),
            (M.prototype.mulp = function (t, e, i) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(r),
                f = this.stub(r),
                a = new Array(r),
                d = new Array(r),
                s = new Array(r),
                h = new Array(r),
                o = new Array(r),
                u = new Array(r),
                c = i.words;
              ((c.length = r),
                this.convert13b(t.words, t.length, a, r),
                this.convert13b(e.words, e.length, h, r),
                this.transform(a, f, d, s, r, n),
                this.transform(h, f, o, u, r, n));
              for (var l = 0; l < r; l++) {
                var b = d[l] * o[l] - s[l] * u[l];
                ((s[l] = d[l] * u[l] + s[l] * o[l]), (d[l] = b));
              }
              return (
                this.conjugate(d, s, r),
                this.transform(d, s, c, f, r, n),
                this.conjugate(c, f, r),
                this.normalize13b(c, r),
                (i.negative = t.negative ^ e.negative),
                (i.length = t.length + e.length),
                i._strip()
              );
            }),
            (f.prototype.mul = function (t) {
              var e = new f(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (f.prototype.mulf = function (t) {
              var e = new f(null);
              return (
                (e.words = new Array(this.length + t.length)),
                w(this, t, e)
              );
            }),
            (f.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (f.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), r("number" === typeof t), r(t < 67108864));
              for (var i = 0, n = 0; n < this.length; n++) {
                var f = (0 | this.words[n]) * t,
                  a = (67108863 & f) + (67108863 & i);
                ((i >>= 26),
                  (i += (f / 67108864) | 0),
                  (i += a >>> 26),
                  (this.words[n] = 67108863 & a));
              }
              return (
                0 !== i && ((this.words[n] = i), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (f.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (f.prototype.sqr = function () {
              return this.mul(this);
            }),
            (f.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (f.prototype.pow = function (t) {
              var e = m(t);
              if (0 === e.length) return new f(1);
              for (var i = this, r = 0; r < e.length; r++, i = i.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var n = i.sqr(); r < e.length; r++, n = n.sqr())
                  0 !== e[r] && (i = i.mul(n));
              return i;
            }),
            (f.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                i = t % 26,
                n = (t - i) / 26,
                f = (67108863 >>> (26 - i)) << (26 - i);
              if (0 !== i) {
                var a = 0;
                for (e = 0; e < this.length; e++) {
                  var d = this.words[e] & f,
                    s = ((0 | this.words[e]) - d) << i;
                  ((this.words[e] = s | a), (a = d >>> (26 - i)));
                }
                a && ((this.words[e] = a), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (f.prototype.ishln = function (t) {
              return (r(0 === this.negative), this.iushln(t));
            }),
            (f.prototype.iushrn = function (t, e, i) {
              var n;
              (r("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var f = t % 26,
                a = Math.min((t - f) / 26, this.length),
                d = 67108863 ^ ((67108863 >>> f) << f),
                s = i;
              if (((n -= a), (n = Math.max(0, n)), s)) {
                for (var h = 0; h < a; h++) s.words[h] = this.words[h];
                s.length = a;
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + a];
              else ((this.words[0] = 0), (this.length = 1));
              var o = 0;
              for (h = this.length - 1; h >= 0 && (0 !== o || h >= n); h--) {
                var u = 0 | this.words[h];
                ((this.words[h] = (o << (26 - f)) | (u >>> f)), (o = u & d));
              }
              return (
                s && 0 !== o && (s.words[s.length++] = o),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (f.prototype.ishrn = function (t, e, i) {
              return (r(0 === this.negative), this.iushrn(t, e, i));
            }),
            (f.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (f.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (f.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (f.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (f.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i) return !1;
              var f = this.words[i];
              return !!(f & n);
            }),
            (f.prototype.imaskn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= i)
              )
                return this;
              if (
                (0 !== e && i++,
                (this.length = Math.min(i, this.length)),
                0 !== e)
              ) {
                var n = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= n;
              }
              return this._strip();
            }),
            (f.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (f.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (f.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (f.prototype.isubn = function (t) {
              if ((r("number" === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this._strip();
            }),
            (f.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (f.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (f.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (f.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (f.prototype._ishlnsubmul = function (t, e, i) {
              var n,
                f,
                a = t.length + i;
              this._expand(a);
              var d = 0;
              for (n = 0; n < t.length; n++) {
                f = (0 | this.words[n + i]) + d;
                var s = (0 | t.words[n]) * e;
                ((f -= 67108863 & s),
                  (d = (f >> 26) - ((s / 67108864) | 0)),
                  (this.words[n + i] = 67108863 & f));
              }
              for (; n < this.length - i; n++)
                ((f = (0 | this.words[n + i]) + d),
                  (d = f >> 26),
                  (this.words[n + i] = 67108863 & f));
              if (0 === d) return this._strip();
              for (r(-1 === d), d = 0, n = 0; n < this.length; n++)
                ((f = -(0 | this.words[n]) + d),
                  (d = f >> 26),
                  (this.words[n] = 67108863 & f));
              return ((this.negative = 1), this._strip());
            }),
            (f.prototype._wordDiv = function (t, e) {
              var i = this.length - t.length,
                r = this.clone(),
                n = t,
                a = 0 | n.words[n.length - 1],
                d = this._countBits(a);
              ((i = 26 - d),
                0 !== i &&
                  ((n = n.ushln(i)),
                  r.iushln(i),
                  (a = 0 | n.words[n.length - 1])));
              var s,
                h = r.length - n.length;
              if ("mod" !== e) {
                ((s = new f(null)),
                  (s.length = h + 1),
                  (s.words = new Array(s.length)));
                for (var o = 0; o < s.length; o++) s.words[o] = 0;
              }
              var u = r.clone()._ishlnsubmul(n, 1, h);
              0 === u.negative && ((r = u), s && (s.words[h] = 1));
              for (var c = h - 1; c >= 0; c--) {
                var l =
                  67108864 * (0 | r.words[n.length + c]) +
                  (0 | r.words[n.length + c - 1]);
                ((l = Math.min((l / a) | 0, 67108863)),
                  r._ishlnsubmul(n, l, c));
                while (0 !== r.negative)
                  (l--,
                    (r.negative = 0),
                    r._ishlnsubmul(n, 1, c),
                    r.isZero() || (r.negative ^= 1));
                s && (s.words[c] = l);
              }
              return (
                s && s._strip(),
                r._strip(),
                "div" !== e && 0 !== i && r.iushrn(i),
                { div: s || null, mod: r }
              );
            }),
            (f.prototype.divmod = function (t, e, i) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new f(0), mod: new f(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((d = this.neg().divmod(t, e)),
                      "mod" !== e && (n = d.div.neg()),
                      "div" !== e &&
                        ((a = d.mod.neg()), i && 0 !== a.negative && a.iadd(t)),
                      { div: n, mod: a })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((d = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = d.div.neg()),
                        { div: n, mod: d.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((d = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((a = d.mod.neg()),
                            i && 0 !== a.negative && a.isub(t)),
                          { div: d.div, mod: a })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new f(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new f(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new f(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, a, d;
            }),
            (f.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (f.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (f.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (f.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                n = t.andln(1),
                f = i.cmp(r);
              return f < 0 || (1 === n && 0 === f)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (f.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (
                var i = (1 << 26) % t, n = 0, f = this.length - 1;
                f >= 0;
                f--
              )
                n = (i * n + (0 | this.words[f])) % t;
              return e ? -n : n;
            }),
            (f.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (f.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (var i = 0, n = this.length - 1; n >= 0; n--) {
                var f = (0 | this.words[n]) + 67108864 * i;
                ((this.words[n] = (f / t) | 0), (i = f % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (f.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (f.prototype.egcd = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new f(1),
                a = new f(0),
                d = new f(0),
                s = new f(1),
                h = 0;
              while (e.isEven() && i.isEven()) (e.iushrn(1), i.iushrn(1), ++h);
              var o = i.clone(),
                u = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, l = 1;
                  0 === (e.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((n.isOdd() || a.isOdd()) && (n.iadd(o), a.isub(u)),
                      n.iushrn(1),
                      a.iushrn(1));
                }
                for (
                  var b = 0, p = 1;
                  0 === (i.words[0] & p) && b < 26;
                  ++b, p <<= 1
                );
                if (b > 0) {
                  i.iushrn(b);
                  while (b-- > 0)
                    ((d.isOdd() || s.isOdd()) && (d.iadd(o), s.isub(u)),
                      d.iushrn(1),
                      s.iushrn(1));
                }
                e.cmp(i) >= 0
                  ? (e.isub(i), n.isub(d), a.isub(s))
                  : (i.isub(e), d.isub(n), s.isub(a));
              }
              return { a: d, b: s, gcd: i.iushln(h) };
            }),
            (f.prototype._invmp = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                a = new f(1),
                d = new f(0),
                s = i.clone();
              while (e.cmpn(1) > 0 && i.cmpn(1) > 0) {
                for (
                  var h = 0, o = 1;
                  0 === (e.words[0] & o) && h < 26;
                  ++h, o <<= 1
                );
                if (h > 0) {
                  e.iushrn(h);
                  while (h-- > 0) (a.isOdd() && a.iadd(s), a.iushrn(1));
                }
                for (
                  var u = 0, c = 1;
                  0 === (i.words[0] & c) && u < 26;
                  ++u, c <<= 1
                );
                if (u > 0) {
                  i.iushrn(u);
                  while (u-- > 0) (d.isOdd() && d.iadd(s), d.iushrn(1));
                }
                e.cmp(i) >= 0 ? (e.isub(i), a.isub(d)) : (i.isub(e), d.isub(a));
              }
              return (
                (n = 0 === e.cmpn(1) ? a : d),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (f.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                i = t.clone();
              ((e.negative = 0), (i.negative = 0));
              for (var r = 0; e.isEven() && i.isEven(); r++)
                (e.iushrn(1), i.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (i.isEven()) i.iushrn(1);
                var n = e.cmp(i);
                if (n < 0) {
                  var f = e;
                  ((e = i), (i = f));
                } else if (0 === n || 0 === i.cmpn(1)) break;
                e.isub(i);
              } while (1);
              return i.iushln(r);
            }),
            (f.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (f.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (f.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (f.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (f.prototype.bincn = function (t) {
              r("number" === typeof t);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i)
                return (this._expand(i + 1), (this.words[i] |= n), this);
              for (var f = n, a = i; 0 !== f && a < this.length; a++) {
                var d = 0 | this.words[a];
                ((d += f),
                  (f = d >>> 26),
                  (d &= 67108863),
                  (this.words[a] = d));
              }
              return (0 !== f && ((this.words[a] = f), this.length++), this);
            }),
            (f.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (f.prototype.cmpn = function (t) {
              var e,
                i = t < 0;
              if (0 !== this.negative && !i) return -1;
              if (0 === this.negative && i) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (i && (t = -t), r(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (f.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (f.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, i = this.length - 1; i >= 0; i--) {
                var r = 0 | this.words[i],
                  n = 0 | t.words[i];
                if (r !== n) {
                  r < n ? (e = -1) : r > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (f.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (f.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (f.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (f.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (f.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (f.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (f.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (f.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (f.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (f.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (f.red = function (t) {
              return new R(t);
            }),
            (f.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (f.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (f.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (f.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (f.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (f.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (f.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (f.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (f.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (f.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (f.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (f.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (f.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (f.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (f.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (f.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (f.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function S(t, e) {
            ((this.name = t),
              (this.p = new f(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new f(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function A() {
            S.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function x() {
            S.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function I() {
            S.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function k() {
            S.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function R(t) {
            if ("string" === typeof t) {
              var e = f._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function q(t) {
            (R.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new f(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((S.prototype._tmp = function () {
            var t = new f(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (S.prototype.ireduce = function (t) {
              var e,
                i = t;
              do {
                (this.split(i, this.tmp),
                  (i = this.imulK(i)),
                  (i = i.iadd(this.tmp)),
                  (e = i.bitLength()));
              } while (e > this.n);
              var r = e < this.n ? -1 : i.ucmp(this.p);
              return (
                0 === r
                  ? ((i.words[0] = 0), (i.length = 1))
                  : r > 0
                    ? i.isub(this.p)
                    : void 0 !== i.strip
                      ? i.strip()
                      : i._strip(),
                i
              );
            }),
            (S.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (S.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(A, S),
            (A.prototype.split = function (t, e) {
              for (
                var i = 4194303, r = Math.min(t.length, 9), n = 0;
                n < r;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = r), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var f = t.words[9];
              for (e.words[e.length++] = f & i, n = 10; n < t.length; n++) {
                var a = 0 | t.words[n];
                ((t.words[n - 10] = ((a & i) << 4) | (f >>> 22)), (f = a));
              }
              ((f >>>= 22),
                (t.words[n - 10] = f),
                0 === f && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (A.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 0 | t.words[i];
                ((e += 977 * r),
                  (t.words[i] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(x, S),
            n(I, S),
            n(k, S),
            (k.prototype.imulK = function (t) {
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 19 * (0 | t.words[i]) + e,
                  n = 67108863 & r;
                ((r >>>= 26), (t.words[i] = n), (e = r));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (f._prime = function (t) {
              if (_[t]) return _[t];
              var e;
              if ("k256" === t) e = new A();
              else if ("p224" === t) e = new x();
              else if ("p192" === t) e = new I();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new k();
              }
              return ((_[t] = e), e);
            }),
            (R.prototype._verify1 = function (t) {
              (r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers"));
            }),
            (R.prototype._verify2 = function (t, e) {
              (r(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                r(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (R.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (o(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (R.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (R.prototype.add = function (t, e) {
              this._verify2(t, e);
              var i = t.add(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this));
            }),
            (R.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var i = t.iadd(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i);
            }),
            (R.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var i = t.sub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this));
            }),
            (R.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var i = t.isub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i);
            }),
            (R.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (R.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (R.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (R.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (R.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (R.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var i = this.m.add(new f(1)).iushrn(2);
                return this.pow(t, i);
              }
              var n = this.m.subn(1),
                a = 0;
              while (!n.isZero() && 0 === n.andln(1)) (a++, n.iushrn(1));
              r(!n.isZero());
              var d = new f(1).toRed(this),
                s = d.redNeg(),
                h = this.m.subn(1).iushrn(1),
                o = this.m.bitLength();
              o = new f(2 * o * o).toRed(this);
              while (0 !== this.pow(o, h).cmp(s)) o.redIAdd(s);
              var u = this.pow(o, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                l = this.pow(t, n),
                b = a;
              while (0 !== l.cmp(d)) {
                for (var p = l, m = 0; 0 !== p.cmp(d); m++) p = p.redSqr();
                r(m < b);
                var v = this.pow(u, new f(1).iushln(b - m - 1));
                ((c = c.redMul(v)),
                  (u = v.redSqr()),
                  (l = l.redMul(u)),
                  (b = m));
              }
              return c;
            }),
            (R.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (R.prototype.pow = function (t, e) {
              if (e.isZero()) return new f(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var i = 4,
                r = new Array(1 << i);
              ((r[0] = new f(1).toRed(this)), (r[1] = t));
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
              var a = r[0],
                d = 0,
                s = 0,
                h = e.bitLength() % 26;
              for (0 === h && (h = 26), n = e.length - 1; n >= 0; n--) {
                for (var o = e.words[n], u = h - 1; u >= 0; u--) {
                  var c = (o >> u) & 1;
                  (a !== r[0] && (a = this.sqr(a)),
                    0 !== c || 0 !== d
                      ? ((d <<= 1),
                        (d |= c),
                        s++,
                        (s === i || (0 === n && 0 === u)) &&
                          ((a = this.mul(a, r[d])), (s = 0), (d = 0)))
                      : (s = 0));
                }
                h = 26;
              }
              return a;
            }),
            (R.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (R.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (f.mont = function (t) {
              return new q(t);
            }),
            n(q, R),
            (q.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (q.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (q.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var i = t.imul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                f = n;
              return (
                n.cmp(this.m) >= 0
                  ? (f = n.isub(this.m))
                  : n.cmpn(0) < 0 && (f = n.iadd(this.m)),
                f._forceRed(this)
              );
            }),
            (q.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new f(0)._forceRed(this);
              var i = t.mul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                a = n;
              return (
                n.cmp(this.m) >= 0
                  ? (a = n.isub(this.m))
                  : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
                a._forceRed(this)
              );
            }),
            (q.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, i(20)(t));
    },
    8016: function (t, e) {},
    8017: function (t) {
      t.exports = JSON.parse(
        '{"name":"elliptic","version":"6.4.0","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"}}',
      );
    },
    8018: function (t, e, i) {
      "use strict";
      var r = e,
        n = i(3422),
        f = i(83),
        a = i(408);
      function d(t, e) {
        var i = [],
          r = 1 << (e + 1),
          n = t.clone();
        while (n.cmpn(1) >= 0) {
          var f;
          if (n.isOdd()) {
            var a = n.andln(r - 1);
            ((f = a > (r >> 1) - 1 ? (r >> 1) - a : a), n.isubn(f));
          } else f = 0;
          i.push(f);
          for (
            var d = 0 !== n.cmpn(0) && 0 === n.andln(r - 1) ? e + 1 : 1, s = 1;
            s < d;
            s++
          )
            i.push(0);
          n.iushrn(d);
        }
        return i;
      }
      function s(t, e) {
        var i = [[], []];
        ((t = t.clone()), (e = e.clone()));
        var r = 0,
          n = 0;
        while (t.cmpn(-r) > 0 || e.cmpn(-n) > 0) {
          var f,
            a,
            d = (t.andln(3) + r) & 3,
            s = (e.andln(3) + n) & 3;
          if ((3 === d && (d = -1), 3 === s && (s = -1), 0 === (1 & d))) f = 0;
          else {
            var h = (t.andln(7) + r) & 7;
            f = (3 !== h && 5 !== h) || 2 !== s ? d : -d;
          }
          if ((i[0].push(f), 0 === (1 & s))) a = 0;
          else {
            h = (e.andln(7) + n) & 7;
            a = (3 !== h && 5 !== h) || 2 !== d ? s : -s;
          }
          (i[1].push(a),
            2 * r === f + 1 && (r = 1 - r),
            2 * n === a + 1 && (n = 1 - n),
            t.iushrn(1),
            e.iushrn(1));
        }
        return i;
      }
      function h(t, e, i) {
        var r = "_" + e;
        t.prototype[e] = function () {
          return void 0 !== this[r] ? this[r] : (this[r] = i.call(this));
        };
      }
      function o(t) {
        return "string" === typeof t ? r.toArray(t, "hex") : t;
      }
      function u(t) {
        return new n(t, "hex", "le");
      }
      ((r.assert = f),
        (r.toArray = a.toArray),
        (r.zero2 = a.zero2),
        (r.toHex = a.toHex),
        (r.encode = a.encode),
        (r.getNAF = d),
        (r.getJSF = s),
        (r.cachedProperty = h),
        (r.parseBytes = o),
        (r.intFromLE = u));
    },
    8019: function (t, e) {},
    8020: function (t, e, i) {
      "use strict";
      var r = i(3422),
        n = i(3216),
        f = n.utils,
        a = f.getNAF,
        d = f.getJSF,
        s = f.assert;
      function h(t, e) {
        ((this.type = t),
          (this.p = new r(e.p, 16)),
          (this.red = e.prime ? r.red(e.prime) : r.mont(this.p)),
          (this.zero = new r(0).toRed(this.red)),
          (this.one = new r(1).toRed(this.red)),
          (this.two = new r(2).toRed(this.red)),
          (this.n = e.n && new r(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)));
        var i = this.n && this.p.div(this.n);
        !i || i.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function o(t, e) {
        ((this.curve = t), (this.type = e), (this.precomputed = null));
      }
      ((t.exports = h),
        (h.prototype.point = function () {
          throw new Error("Not implemented");
        }),
        (h.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (h.prototype._fixedNafMul = function (t, e) {
          s(t.precomputed);
          var i = t._getDoubles(),
            r = a(e, 1),
            n = (1 << (i.step + 1)) - (i.step % 2 === 0 ? 2 : 1);
          n /= 3;
          for (var f = [], d = 0; d < r.length; d += i.step) {
            var h = 0;
            for (e = d + i.step - 1; e >= d; e--) h = (h << 1) + r[e];
            f.push(h);
          }
          for (
            var o = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              c = n;
            c > 0;
            c--
          ) {
            for (d = 0; d < f.length; d++) {
              h = f[d];
              h === c
                ? (u = u.mixedAdd(i.points[d]))
                : h === -c && (u = u.mixedAdd(i.points[d].neg()));
            }
            o = o.add(u);
          }
          return o.toP();
        }),
        (h.prototype._wnafMul = function (t, e) {
          var i = 4,
            r = t._getNAFPoints(i);
          i = r.wnd;
          for (
            var n = r.points,
              f = a(e, i),
              d = this.jpoint(null, null, null),
              h = f.length - 1;
            h >= 0;
            h--
          ) {
            for (e = 0; h >= 0 && 0 === f[h]; h--) e++;
            if ((h >= 0 && e++, (d = d.dblp(e)), h < 0)) break;
            var o = f[h];
            (s(0 !== o),
              (d =
                "affine" === t.type
                  ? o > 0
                    ? d.mixedAdd(n[(o - 1) >> 1])
                    : d.mixedAdd(n[(-o - 1) >> 1].neg())
                  : o > 0
                    ? d.add(n[(o - 1) >> 1])
                    : d.add(n[(-o - 1) >> 1].neg())));
          }
          return "affine" === t.type ? d.toP() : d;
        }),
        (h.prototype._wnafMulAdd = function (t, e, i, r, n) {
          for (
            var f = this._wnafT1,
              s = this._wnafT2,
              h = this._wnafT3,
              o = 0,
              u = 0;
            u < r;
            u++
          ) {
            var c = e[u],
              l = c._getNAFPoints(t);
            ((f[u] = l.wnd), (s[u] = l.points));
          }
          for (u = r - 1; u >= 1; u -= 2) {
            var b = u - 1,
              p = u;
            if (1 === f[b] && 1 === f[p]) {
              var m = [e[b], null, null, e[p]];
              0 === e[b].y.cmp(e[p].y)
                ? ((m[1] = e[b].add(e[p])),
                  (m[2] = e[b].toJ().mixedAdd(e[p].neg())))
                : 0 === e[b].y.cmp(e[p].y.redNeg())
                  ? ((m[1] = e[b].toJ().mixedAdd(e[p])),
                    (m[2] = e[b].add(e[p].neg())))
                  : ((m[1] = e[b].toJ().mixedAdd(e[p])),
                    (m[2] = e[b].toJ().mixedAdd(e[p].neg())));
              var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                g = d(i[b], i[p]);
              ((o = Math.max(g[0].length, o)),
                (h[b] = new Array(o)),
                (h[p] = new Array(o)));
              for (var y = 0; y < o; y++) {
                var w = 0 | g[0][y],
                  M = 0 | g[1][y];
                ((h[b][y] = v[3 * (w + 1) + (M + 1)]),
                  (h[p][y] = 0),
                  (s[b] = m));
              }
            } else
              ((h[b] = a(i[b], f[b])),
                (h[p] = a(i[p], f[p])),
                (o = Math.max(h[b].length, o)),
                (o = Math.max(h[p].length, o)));
          }
          var _ = this.jpoint(null, null, null),
            S = this._wnafT4;
          for (u = o; u >= 0; u--) {
            var A = 0;
            while (u >= 0) {
              var x = !0;
              for (y = 0; y < r; y++)
                ((S[y] = 0 | h[y][u]), 0 !== S[y] && (x = !1));
              if (!x) break;
              (A++, u--);
            }
            if ((u >= 0 && A++, (_ = _.dblp(A)), u < 0)) break;
            for (y = 0; y < r; y++) {
              var I = S[y];
              0 !== I &&
                (I > 0
                  ? (c = s[y][(I - 1) >> 1])
                  : I < 0 && (c = s[y][(-I - 1) >> 1].neg()),
                (_ = "affine" === c.type ? _.mixedAdd(c) : _.add(c)));
            }
          }
          for (u = 0; u < r; u++) s[u] = null;
          return n ? _ : _.toP();
        }),
        (h.BasePoint = o),
        (o.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (o.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (h.prototype.decodePoint = function (t, e) {
          t = f.toArray(t, e);
          var i = this.p.byteLength();
          if (
            (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
            t.length - 1 === 2 * i
          ) {
            6 === t[0]
              ? s(t[t.length - 1] % 2 === 0)
              : 7 === t[0] && s(t[t.length - 1] % 2 === 1);
            var r = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
            return r;
          }
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === i)
            return this.pointFromX(t.slice(1, 1 + i), 3 === t[0]);
          throw new Error("Unknown point format");
        }),
        (o.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (o.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            i = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(i)
            : [4].concat(i, this.getY().toArray("be", e));
        }),
        (o.prototype.encode = function (t, e) {
          return f.encode(this._encode(e), t);
        }),
        (o.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (o.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (o.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var i = [this], r = this, n = 0; n < e; n += t) {
            for (var f = 0; f < t; f++) r = r.dbl();
            i.push(r);
          }
          return { step: t, points: i };
        }),
        (o.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              i = (1 << t) - 1,
              r = 1 === i ? null : this.dbl(),
              n = 1;
            n < i;
            n++
          )
            e[n] = e[n - 1].add(r);
          return { wnd: t, points: e };
        }),
        (o.prototype._getBeta = function () {
          return null;
        }),
        (o.prototype.dblp = function (t) {
          for (var e = this, i = 0; i < t; i++) e = e.dbl();
          return e;
        }));
    },
    8021: function (t, e, i) {
      "use strict";
      var r = i(4683),
        n = i(3216),
        f = i(3422),
        a = i(16),
        d = r.base,
        s = n.utils.assert;
      function h(t) {
        (d.call(this, "short", t),
          (this.a = new f(t.a, 16).toRed(this.red)),
          (this.b = new f(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4)));
      }
      function Point(t, e, i, r) {
        (d.BasePoint.call(this, t, "affine"),
          null === e && null === i
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new f(e, 16)),
              (this.y = new f(i, 16)),
              r &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1)));
      }
      function o(t, e, i, r) {
        (d.BasePoint.call(this, t, "jacobian"),
          null === e && null === i && null === r
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new f(0)))
            : ((this.x = new f(e, 16)),
              (this.y = new f(i, 16)),
              (this.z = new f(r, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one));
      }
      (a(h, d),
        (t.exports = h),
        (h.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, i, r;
            if (t.beta) e = new f(t.beta, 16).toRed(this.red);
            else {
              var n = this._getEndoRoots(this.p);
              ((e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]), (e = e.toRed(this.red)));
            }
            if (t.lambda) i = new f(t.lambda, 16);
            else {
              var a = this._getEndoRoots(this.n);
              0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(e))
                ? (i = a[0])
                : ((i = a[1]),
                  s(0 === this.g.mul(i).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (r = t.basis
                ? t.basis.map(function (t) {
                    return { a: new f(t.a, 16), b: new f(t.b, 16) };
                  })
                : this._getEndoBasis(i)),
              { beta: e, lambda: i, basis: r }
            );
          }
        }),
        (h.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : f.mont(t),
            i = new f(2).toRed(e).redInvm(),
            r = i.redNeg(),
            n = new f(3).toRed(e).redNeg().redSqrt().redMul(i),
            a = r.redAdd(n).fromRed(),
            d = r.redSub(n).fromRed();
          return [a, d];
        }),
        (h.prototype._getEndoBasis = function (t) {
          var e,
            i,
            r,
            n,
            a,
            d,
            s,
            h,
            o,
            u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
            c = t,
            l = this.n.clone(),
            b = new f(1),
            p = new f(0),
            m = new f(0),
            v = new f(1),
            g = 0;
          while (0 !== c.cmpn(0)) {
            var y = l.div(c);
            ((h = l.sub(y.mul(c))), (o = m.sub(y.mul(b))));
            var w = v.sub(y.mul(p));
            if (!r && h.cmp(u) < 0)
              ((e = s.neg()), (i = b), (r = h.neg()), (n = o));
            else if (r && 2 === ++g) break;
            ((s = h), (l = c), (c = h), (m = b), (b = o), (v = p), (p = w));
          }
          ((a = h.neg()), (d = o));
          var M = r.sqr().add(n.sqr()),
            _ = a.sqr().add(d.sqr());
          return (
            _.cmp(M) >= 0 && ((a = e), (d = i)),
            r.negative && ((r = r.neg()), (n = n.neg())),
            a.negative && ((a = a.neg()), (d = d.neg())),
            [
              { a: r, b: n },
              { a: a, b: d },
            ]
          );
        }),
        (h.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            i = e[0],
            r = e[1],
            n = r.b.mul(t).divRound(this.n),
            f = i.b.neg().mul(t).divRound(this.n),
            a = n.mul(i.a),
            d = f.mul(r.a),
            s = n.mul(i.b),
            h = f.mul(r.b),
            o = t.sub(a).sub(d),
            u = s.add(h).neg();
          return { k1: o, k2: u };
        }),
        (h.prototype.pointFromX = function (t, e) {
          ((t = new f(t, 16)), t.red || (t = t.toRed(this.red)));
          var i = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            r = i.redSqrt();
          if (0 !== r.redSqr().redSub(i).cmp(this.zero))
            throw new Error("invalid point");
          var n = r.fromRed().isOdd();
          return (
            ((e && !n) || (!e && n)) && (r = r.redNeg()),
            this.point(t, r)
          );
        }),
        (h.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            i = t.y,
            r = this.a.redMul(e),
            n = e.redSqr().redMul(e).redIAdd(r).redIAdd(this.b);
          return 0 === i.redSqr().redISub(n).cmpn(0);
        }),
        (h.prototype._endoWnafMulAdd = function (t, e, i) {
          for (
            var r = this._endoWnafT1, n = this._endoWnafT2, f = 0;
            f < t.length;
            f++
          ) {
            var a = this._endoSplit(e[f]),
              d = t[f],
              s = d._getBeta();
            (a.k1.negative && (a.k1.ineg(), (d = d.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (s = s.neg(!0))),
              (r[2 * f] = d),
              (r[2 * f + 1] = s),
              (n[2 * f] = a.k1),
              (n[2 * f + 1] = a.k2));
          }
          for (
            var h = this._wnafMulAdd(1, r, n, 2 * f, i), o = 0;
            o < 2 * f;
            o++
          )
            ((r[o] = null), (n[o] = null));
          return h;
        }),
        a(Point, d.BasePoint),
        (h.prototype.point = function (t, e, i) {
          return new Point(this, t, e, i);
        }),
        (h.prototype.pointFromJSON = function (t, e) {
          return Point.fromJSON(this, t, e);
        }),
        (Point.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y,
            );
            if (t) {
              var i = this.curve,
                r = function (t) {
                  return i.point(t.x.redMul(i.endo.beta), t.y);
                };
              ((t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(r) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(r),
                  },
                }));
            }
            return e;
          }
        }),
        (Point.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (Point.fromJSON = function (t, e, i) {
          "string" === typeof e && (e = JSON.parse(e));
          var r = t.point(e[0], e[1], i);
          if (!e[2]) return r;
          function n(e) {
            return t.point(e[0], e[1], i);
          }
          var f = e[2];
          return (
            (r.precomputed = {
              beta: null,
              doubles: f.doubles && {
                step: f.doubles.step,
                points: [r].concat(f.doubles.points.map(n)),
              },
              naf: f.naf && {
                wnd: f.naf.wnd,
                points: [r].concat(f.naf.points.map(n)),
              },
            }),
            r
          );
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Point.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t)) return this.curve.point(null, null);
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var i = e.redSqr().redISub(this.x).redISub(t.x),
            r = e.redMul(this.x.redSub(i)).redISub(this.y);
          return this.curve.point(i, r);
        }),
        (Point.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            i = this.x.redSqr(),
            r = t.redInvm(),
            n = i.redAdd(i).redIAdd(i).redIAdd(e).redMul(r),
            f = n.redSqr().redISub(this.x.redAdd(this.x)),
            a = n.redMul(this.x.redSub(f)).redISub(this.y);
          return this.curve.point(f, a);
        }),
        (Point.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Point.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Point.prototype.mul = function (t) {
          return (
            (t = new f(t, 16)),
            this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
                ? this.curve._endoWnafMulAdd([this], [t])
                : this.curve._wnafMul(this, t)
          );
        }),
        (Point.prototype.mulAdd = function (t, e, i) {
          var r = [this, e],
            n = [t, i];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(r, n)
            : this.curve._wnafMulAdd(1, r, n, 2);
        }),
        (Point.prototype.jmulAdd = function (t, e, i) {
          var r = [this, e],
            n = [t, i];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(r, n, !0)
            : this.curve._wnafMulAdd(1, r, n, 2, !0);
        }),
        (Point.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (Point.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var i = this.precomputed,
              r = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(r) },
              doubles: i.doubles && {
                step: i.doubles.step,
                points: i.doubles.points.map(r),
              },
            };
          }
          return e;
        }),
        (Point.prototype.toJ = function () {
          if (this.inf) return this.curve.jpoint(null, null, null);
          var t = this.curve.jpoint(this.x, this.y, this.curve.one);
          return t;
        }),
        a(o, d.BasePoint),
        (h.prototype.jpoint = function (t, e, i) {
          return new o(this, t, e, i);
        }),
        (o.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            i = this.x.redMul(e),
            r = this.y.redMul(e).redMul(t);
          return this.curve.point(i, r);
        }),
        (o.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (o.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            i = this.z.redSqr(),
            r = this.x.redMul(e),
            n = t.x.redMul(i),
            f = this.y.redMul(e.redMul(t.z)),
            a = t.y.redMul(i.redMul(this.z)),
            d = r.redSub(n),
            s = f.redSub(a);
          if (0 === d.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var h = d.redSqr(),
            o = h.redMul(d),
            u = r.redMul(h),
            c = s.redSqr().redIAdd(o).redISub(u).redISub(u),
            l = s.redMul(u.redISub(c)).redISub(f.redMul(o)),
            b = this.z.redMul(t.z).redMul(d);
          return this.curve.jpoint(c, l, b);
        }),
        (o.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            i = this.x,
            r = t.x.redMul(e),
            n = this.y,
            f = t.y.redMul(e).redMul(this.z),
            a = i.redSub(r),
            d = n.redSub(f);
          if (0 === a.cmpn(0))
            return 0 !== d.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var s = a.redSqr(),
            h = s.redMul(a),
            o = i.redMul(s),
            u = d.redSqr().redIAdd(h).redISub(o).redISub(o),
            c = d.redMul(o.redISub(u)).redISub(n.redMul(h)),
            l = this.z.redMul(a);
          return this.curve.jpoint(u, c, l);
        }),
        (o.prototype.dblp = function (t) {
          if (0 === t) return this;
          if (this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            for (var e = this, i = 0; i < t; i++) e = e.dbl();
            return e;
          }
          var r = this.curve.a,
            n = this.curve.tinv,
            f = this.x,
            a = this.y,
            d = this.z,
            s = d.redSqr().redSqr(),
            h = a.redAdd(a);
          for (i = 0; i < t; i++) {
            var o = f.redSqr(),
              u = h.redSqr(),
              c = u.redSqr(),
              l = o.redAdd(o).redIAdd(o).redIAdd(r.redMul(s)),
              b = f.redMul(u),
              p = l.redSqr().redISub(b.redAdd(b)),
              m = b.redISub(p),
              v = l.redMul(m);
            v = v.redIAdd(v).redISub(c);
            var g = h.redMul(d);
            (i + 1 < t && (s = s.redMul(c)), (f = p), (d = g), (h = v));
          }
          return this.curve.jpoint(f, h.redMul(n), d);
        }),
        (o.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
              ? this._zeroDbl()
              : this.curve.threeA
                ? this._threeDbl()
                : this._dbl();
        }),
        (o.prototype._zeroDbl = function () {
          var t, e, i;
          if (this.zOne) {
            var r = this.x.redSqr(),
              n = this.y.redSqr(),
              f = n.redSqr(),
              a = this.x.redAdd(n).redSqr().redISub(r).redISub(f);
            a = a.redIAdd(a);
            var d = r.redAdd(r).redIAdd(r),
              s = d.redSqr().redISub(a).redISub(a),
              h = f.redIAdd(f);
            ((h = h.redIAdd(h)),
              (h = h.redIAdd(h)),
              (t = s),
              (e = d.redMul(a.redISub(s)).redISub(h)),
              (i = this.y.redAdd(this.y)));
          } else {
            var o = this.x.redSqr(),
              u = this.y.redSqr(),
              c = u.redSqr(),
              l = this.x.redAdd(u).redSqr().redISub(o).redISub(c);
            l = l.redIAdd(l);
            var b = o.redAdd(o).redIAdd(o),
              p = b.redSqr(),
              m = c.redIAdd(c);
            ((m = m.redIAdd(m)),
              (m = m.redIAdd(m)),
              (t = p.redISub(l).redISub(l)),
              (e = b.redMul(l.redISub(t)).redISub(m)),
              (i = this.y.redMul(this.z)),
              (i = i.redIAdd(i)));
          }
          return this.curve.jpoint(t, e, i);
        }),
        (o.prototype._threeDbl = function () {
          var t, e, i;
          if (this.zOne) {
            var r = this.x.redSqr(),
              n = this.y.redSqr(),
              f = n.redSqr(),
              a = this.x.redAdd(n).redSqr().redISub(r).redISub(f);
            a = a.redIAdd(a);
            var d = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
              s = d.redSqr().redISub(a).redISub(a);
            t = s;
            var h = f.redIAdd(f);
            ((h = h.redIAdd(h)),
              (h = h.redIAdd(h)),
              (e = d.redMul(a.redISub(s)).redISub(h)),
              (i = this.y.redAdd(this.y)));
          } else {
            var o = this.z.redSqr(),
              u = this.y.redSqr(),
              c = this.x.redMul(u),
              l = this.x.redSub(o).redMul(this.x.redAdd(o));
            l = l.redAdd(l).redIAdd(l);
            var b = c.redIAdd(c);
            b = b.redIAdd(b);
            var p = b.redAdd(b);
            ((t = l.redSqr().redISub(p)),
              (i = this.y.redAdd(this.z).redSqr().redISub(u).redISub(o)));
            var m = u.redSqr();
            ((m = m.redIAdd(m)),
              (m = m.redIAdd(m)),
              (m = m.redIAdd(m)),
              (e = l.redMul(b.redISub(t)).redISub(m)));
          }
          return this.curve.jpoint(t, e, i);
        }),
        (o.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            i = this.y,
            r = this.z,
            n = r.redSqr().redSqr(),
            f = e.redSqr(),
            a = i.redSqr(),
            d = f.redAdd(f).redIAdd(f).redIAdd(t.redMul(n)),
            s = e.redAdd(e);
          s = s.redIAdd(s);
          var h = s.redMul(a),
            o = d.redSqr().redISub(h.redAdd(h)),
            u = h.redISub(o),
            c = a.redSqr();
          ((c = c.redIAdd(c)), (c = c.redIAdd(c)), (c = c.redIAdd(c)));
          var l = d.redMul(u).redISub(c),
            b = i.redAdd(i).redMul(r);
          return this.curve.jpoint(o, l, b);
        }),
        (o.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            i = this.z.redSqr(),
            r = e.redSqr(),
            n = t.redAdd(t).redIAdd(t),
            f = n.redSqr(),
            a = this.x.redAdd(e).redSqr().redISub(t).redISub(r);
          ((a = a.redIAdd(a)),
            (a = a.redAdd(a).redIAdd(a)),
            (a = a.redISub(f)));
          var d = a.redSqr(),
            s = r.redIAdd(r);
          ((s = s.redIAdd(s)), (s = s.redIAdd(s)), (s = s.redIAdd(s)));
          var h = n.redIAdd(a).redSqr().redISub(f).redISub(d).redISub(s),
            o = e.redMul(h);
          ((o = o.redIAdd(o)), (o = o.redIAdd(o)));
          var u = this.x.redMul(d).redISub(o);
          ((u = u.redIAdd(u)), (u = u.redIAdd(u)));
          var c = this.y.redMul(h.redMul(s.redISub(h)).redISub(a.redMul(d)));
          ((c = c.redIAdd(c)), (c = c.redIAdd(c)), (c = c.redIAdd(c)));
          var l = this.z.redAdd(a).redSqr().redISub(i).redISub(d);
          return this.curve.jpoint(u, c, l);
        }),
        (o.prototype.mul = function (t, e) {
          return ((t = new f(t, e)), this.curve._wnafMul(this, t));
        }),
        (o.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            i = t.z.redSqr();
          if (0 !== this.x.redMul(i).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var r = e.redMul(this.z),
            n = i.redMul(t.z);
          return 0 === this.y.redMul(n).redISub(t.y.redMul(r)).cmpn(0);
        }),
        (o.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            i = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(i)) return !0;
          for (var r = t.clone(), n = this.curve.redN.redMul(e); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((i.redIAdd(n), 0 === this.x.cmp(i))) return !0;
          }
          return !1;
        }),
        (o.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (o.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }));
    },
    8022: function (t, e, i) {
      "use strict";
      var r = i(4683),
        n = i(3422),
        f = i(16),
        a = r.base,
        d = i(3216),
        s = d.utils;
      function h(t) {
        (a.call(this, "mont", t),
          (this.a = new n(t.a, 16).toRed(this.red)),
          (this.b = new n(t.b, 16).toRed(this.red)),
          (this.i4 = new n(4).toRed(this.red).redInvm()),
          (this.two = new n(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two))));
      }
      function Point(t, e, i) {
        (a.BasePoint.call(this, t, "projective"),
          null === e && null === i
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new n(e, 16)),
              (this.z = new n(i, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red))));
      }
      (f(h, a),
        (t.exports = h),
        (h.prototype.validate = function (t) {
          var e = t.normalize().x,
            i = e.redSqr(),
            r = i.redMul(e).redAdd(i.redMul(this.a)).redAdd(e),
            n = r.redSqrt();
          return 0 === n.redSqr().cmp(r);
        }),
        f(Point, a.BasePoint),
        (h.prototype.decodePoint = function (t, e) {
          return this.point(s.toArray(t, e), 1);
        }),
        (h.prototype.point = function (t, e) {
          return new Point(this, t, e);
        }),
        (h.prototype.pointFromJSON = function (t) {
          return Point.fromJSON(this, t);
        }),
        (Point.prototype.precompute = function () {}),
        (Point.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (Point.fromJSON = function (t, e) {
          return new Point(t, e[0], e[1] || t.one);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (Point.prototype.dbl = function () {
          var t = this.x.redAdd(this.z),
            e = t.redSqr(),
            i = this.x.redSub(this.z),
            r = i.redSqr(),
            n = e.redSub(r),
            f = e.redMul(r),
            a = n.redMul(r.redAdd(this.curve.a24.redMul(n)));
          return this.curve.point(f, a);
        }),
        (Point.prototype.add = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.diffAdd = function (t, e) {
          var i = this.x.redAdd(this.z),
            r = this.x.redSub(this.z),
            n = t.x.redAdd(t.z),
            f = t.x.redSub(t.z),
            a = f.redMul(i),
            d = n.redMul(r),
            s = e.z.redMul(a.redAdd(d).redSqr()),
            h = e.x.redMul(a.redISub(d).redSqr());
          return this.curve.point(s, h);
        }),
        (Point.prototype.mul = function (t) {
          for (
            var e = t.clone(),
              i = this,
              r = this.curve.point(null, null),
              n = this,
              f = [];
            0 !== e.cmpn(0);
            e.iushrn(1)
          )
            f.push(e.andln(1));
          for (var a = f.length - 1; a >= 0; a--)
            0 === f[a]
              ? ((i = i.diffAdd(r, n)), (r = r.dbl()))
              : ((r = i.diffAdd(r, n)), (i = i.dbl()));
          return r;
        }),
        (Point.prototype.mulAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.jumlAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.eq = function (t) {
          return 0 === this.getX().cmp(t.getX());
        }),
        (Point.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (Point.prototype.getX = function () {
          return (this.normalize(), this.x.fromRed());
        }));
    },
    8023: function (t, e, i) {
      "use strict";
      var r = i(4683),
        n = i(3216),
        f = i(3422),
        a = i(16),
        d = r.base,
        s = n.utils.assert;
      function h(t) {
        ((this.twisted = 1 !== (0 | t.a)),
          (this.mOneA = this.twisted && -1 === (0 | t.a)),
          (this.extended = this.mOneA),
          d.call(this, "edwards", t),
          (this.a = new f(t.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new f(t.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new f(t.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 === (0 | t.c)));
      }
      function Point(t, e, i, r, n) {
        (d.BasePoint.call(this, t, "projective"),
          null === e && null === i && null === r
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new f(e, 16)),
              (this.y = new f(i, 16)),
              (this.z = r ? new f(r, 16) : this.curve.one),
              (this.t = n && new f(n, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm())))));
      }
      (a(h, d),
        (t.exports = h),
        (h.prototype._mulA = function (t) {
          return this.mOneA ? t.redNeg() : this.a.redMul(t);
        }),
        (h.prototype._mulC = function (t) {
          return this.oneC ? t : this.c.redMul(t);
        }),
        (h.prototype.jpoint = function (t, e, i, r) {
          return this.point(t, e, i, r);
        }),
        (h.prototype.pointFromX = function (t, e) {
          ((t = new f(t, 16)), t.red || (t = t.toRed(this.red)));
          var i = t.redSqr(),
            r = this.c2.redSub(this.a.redMul(i)),
            n = this.one.redSub(this.c2.redMul(this.d).redMul(i)),
            a = r.redMul(n.redInvm()),
            d = a.redSqrt();
          if (0 !== d.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
          var s = d.fromRed().isOdd();
          return (
            ((e && !s) || (!e && s)) && (d = d.redNeg()),
            this.point(t, d)
          );
        }),
        (h.prototype.pointFromY = function (t, e) {
          ((t = new f(t, 16)), t.red || (t = t.toRed(this.red)));
          var i = t.redSqr(),
            r = i.redSub(this.one),
            n = i.redMul(this.d).redAdd(this.one),
            a = r.redMul(n.redInvm());
          if (0 === a.cmp(this.zero)) {
            if (e) throw new Error("invalid point");
            return this.point(this.zero, t);
          }
          var d = a.redSqrt();
          if (0 !== d.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
          return (d.isOdd() !== e && (d = d.redNeg()), this.point(d, t));
        }),
        (h.prototype.validate = function (t) {
          if (t.isInfinity()) return !0;
          t.normalize();
          var e = t.x.redSqr(),
            i = t.y.redSqr(),
            r = e.redMul(this.a).redAdd(i),
            n = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(i)));
          return 0 === r.cmp(n);
        }),
        a(Point, d.BasePoint),
        (h.prototype.pointFromJSON = function (t) {
          return Point.fromJSON(this, t);
        }),
        (h.prototype.point = function (t, e, i, r) {
          return new Point(this, t, e, i, r);
        }),
        (Point.fromJSON = function (t, e) {
          return new Point(t, e[0], e[1], e[2]);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z);
        }),
        (Point.prototype._extDbl = function () {
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            i = this.z.redSqr();
          i = i.redIAdd(i);
          var r = this.curve._mulA(t),
            n = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
            f = r.redAdd(e),
            a = f.redSub(i),
            d = r.redSub(e),
            s = n.redMul(a),
            h = f.redMul(d),
            o = n.redMul(d),
            u = a.redMul(f);
          return this.curve.point(s, h, u, o);
        }),
        (Point.prototype._projDbl = function () {
          var t,
            e,
            i,
            r = this.x.redAdd(this.y).redSqr(),
            n = this.x.redSqr(),
            f = this.y.redSqr();
          if (this.curve.twisted) {
            var a = this.curve._mulA(n),
              d = a.redAdd(f);
            if (this.zOne)
              ((t = r.redSub(n).redSub(f).redMul(d.redSub(this.curve.two))),
                (e = d.redMul(a.redSub(f))),
                (i = d.redSqr().redSub(d).redSub(d)));
            else {
              var s = this.z.redSqr(),
                h = d.redSub(s).redISub(s);
              ((t = r.redSub(n).redISub(f).redMul(h)),
                (e = d.redMul(a.redSub(f))),
                (i = d.redMul(h)));
            }
          } else {
            ((a = n.redAdd(f)),
              (s = this.curve._mulC(this.c.redMul(this.z)).redSqr()),
              (h = a.redSub(s).redSub(s)));
            ((t = this.curve._mulC(r.redISub(a)).redMul(h)),
              (e = this.curve._mulC(a).redMul(n.redISub(f))),
              (i = a.redMul(h)));
          }
          return this.curve.point(t, e, i);
        }),
        (Point.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
              ? this._extDbl()
              : this._projDbl();
        }),
        (Point.prototype._extAdd = function (t) {
          var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
            i = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
            r = this.t.redMul(this.curve.dd).redMul(t.t),
            n = this.z.redMul(t.z.redAdd(t.z)),
            f = i.redSub(e),
            a = n.redSub(r),
            d = n.redAdd(r),
            s = i.redAdd(e),
            h = f.redMul(a),
            o = d.redMul(s),
            u = f.redMul(s),
            c = a.redMul(d);
          return this.curve.point(h, o, c, u);
        }),
        (Point.prototype._projAdd = function (t) {
          var e,
            i,
            r = this.z.redMul(t.z),
            n = r.redSqr(),
            f = this.x.redMul(t.x),
            a = this.y.redMul(t.y),
            d = this.curve.d.redMul(f).redMul(a),
            s = n.redSub(d),
            h = n.redAdd(d),
            o = this.x
              .redAdd(this.y)
              .redMul(t.x.redAdd(t.y))
              .redISub(f)
              .redISub(a),
            u = r.redMul(s).redMul(o);
          return (
            this.curve.twisted
              ? ((e = r.redMul(h).redMul(a.redSub(this.curve._mulA(f)))),
                (i = s.redMul(h)))
              : ((e = r.redMul(h).redMul(a.redSub(f))),
                (i = this.curve._mulC(s).redMul(h))),
            this.curve.point(u, e, i)
          );
        }),
        (Point.prototype.add = function (t) {
          return this.isInfinity()
            ? t
            : t.isInfinity()
              ? this
              : this.curve.extended
                ? this._extAdd(t)
                : this._projAdd(t);
        }),
        (Point.prototype.mul = function (t) {
          return this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve._wnafMul(this, t);
        }),
        (Point.prototype.mulAdd = function (t, e, i) {
          return this.curve._wnafMulAdd(1, [this, e], [t, i], 2, !1);
        }),
        (Point.prototype.jmulAdd = function (t, e, i) {
          return this.curve._wnafMulAdd(1, [this, e], [t, i], 2, !0);
        }),
        (Point.prototype.normalize = function () {
          if (this.zOne) return this;
          var t = this.z.redInvm();
          return (
            (this.x = this.x.redMul(t)),
            (this.y = this.y.redMul(t)),
            this.t && (this.t = this.t.redMul(t)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (Point.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg(),
          );
        }),
        (Point.prototype.getX = function () {
          return (this.normalize(), this.x.fromRed());
        }),
        (Point.prototype.getY = function () {
          return (this.normalize(), this.y.fromRed());
        }),
        (Point.prototype.eq = function (t) {
          return (
            this === t ||
            (0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY()))
          );
        }),
        (Point.prototype.eqXToP = function (t) {
          var e = t.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(e)) return !0;
          for (var i = t.clone(), r = this.curve.redN.redMul(this.z); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((e.redIAdd(r), 0 === this.x.cmp(e))) return !0;
          }
          return !1;
        }),
        (Point.prototype.toP = Point.prototype.normalize),
        (Point.prototype.mixedAdd = Point.prototype.add));
    },
    8024: function (t, e, i) {
      "use strict";
      var r,
        n = e,
        f = i(43),
        a = i(3216),
        d = a.utils.assert;
      function s(t) {
        ("short" === t.type
          ? (this.curve = new a.curve.short(t))
          : "edwards" === t.type
            ? (this.curve = new a.curve.edwards(t))
            : (this.curve = new a.curve.mont(t)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = t.hash),
          d(this.g.validate(), "Invalid curve"),
          d(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
      }
      function h(t, e) {
        Object.defineProperty(n, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var i = new s(e);
            return (
              Object.defineProperty(n, t, {
                configurable: !0,
                enumerable: !0,
                value: i,
              }),
              i
            );
          },
        });
      }
      ((n.PresetCurve = s),
        h("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: f.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        h("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: f.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        h("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: f.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        h("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: f.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        h("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: f.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        h("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: f.sha256,
          gRed: !1,
          g: ["9"],
        }),
        h("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: f.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        }));
      try {
        r = i(8025);
      } catch (o) {
        r = void 0;
      }
      h("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: f.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
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
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          r,
        ],
      });
    },
    8025: function (t, e) {
      t.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    8026: function (t, e, i) {
      "use strict";
      var r = i(3422),
        n = i(837),
        f = i(3216),
        a = f.utils,
        d = a.assert,
        s = i(8027),
        h = i(8028);
      function o(t) {
        if (!(this instanceof o)) return new o(t);
        ("string" === typeof t &&
          (d(f.curves.hasOwnProperty(t), "Unknown curve " + t),
          (t = f.curves[t])),
          t instanceof f.curves.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash));
      }
      ((t.exports = o),
        (o.prototype.keyPair = function (t) {
          return new s(this, t);
        }),
        (o.prototype.keyFromPrivate = function (t, e) {
          return s.fromPrivate(this, t, e);
        }),
        (o.prototype.keyFromPublic = function (t, e) {
          return s.fromPublic(this, t, e);
        }),
        (o.prototype.genKeyPair = function (t) {
          t || (t = {});
          var e = new n({
              hash: this.hash,
              pers: t.pers,
              persEnc: t.persEnc || "utf8",
              entropy: t.entropy || f.rand(this.hash.hmacStrength),
              entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
              nonce: this.n.toArray(),
            }),
            i = this.n.byteLength(),
            a = this.n.sub(new r(2));
          do {
            var d = new r(e.generate(i));
            if (!(d.cmp(a) > 0)) return (d.iaddn(1), this.keyFromPrivate(d));
          } while (1);
        }),
        (o.prototype._truncateToN = function (t, e) {
          var i = 8 * t.byteLength() - this.n.bitLength();
          return (
            i > 0 && (t = t.ushrn(i)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (o.prototype.sign = function (t, e, i, f) {
          ("object" === typeof i && ((f = i), (i = null)),
            f || (f = {}),
            (e = this.keyFromPrivate(e, i)),
            (t = this._truncateToN(new r(t, 16))));
          for (
            var a = this.n.byteLength(),
              d = e.getPrivate().toArray("be", a),
              s = t.toArray("be", a),
              o = new n({
                hash: this.hash,
                entropy: d,
                nonce: s,
                pers: f.pers,
                persEnc: f.persEnc || "utf8",
              }),
              u = this.n.sub(new r(1)),
              c = 0;
            1;
            c++
          ) {
            var l = f.k ? f.k(c) : new r(o.generate(this.n.byteLength()));
            if (
              ((l = this._truncateToN(l, !0)),
              !(l.cmpn(1) <= 0 || l.cmp(u) >= 0))
            ) {
              var b = this.g.mul(l);
              if (!b.isInfinity()) {
                var p = b.getX(),
                  m = p.umod(this.n);
                if (0 !== m.cmpn(0)) {
                  var v = l.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                  if (((v = v.umod(this.n)), 0 !== v.cmpn(0))) {
                    var g =
                      (b.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                    return (
                      f.canonical &&
                        v.cmp(this.nh) > 0 &&
                        ((v = this.n.sub(v)), (g ^= 1)),
                      new h({ r: m, s: v, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (o.prototype.verify = function (t, e, i, n) {
          ((t = this._truncateToN(new r(t, 16))),
            (i = this.keyFromPublic(i, n)),
            (e = new h(e, "hex")));
          var f = e.r,
            a = e.s;
          if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
          var d = a.invm(this.n),
            s = d.mul(t).umod(this.n),
            o = d.mul(f).umod(this.n);
          if (!this.curve._maxwellTrick) {
            var u = this.g.mulAdd(s, i.getPublic(), o);
            return !u.isInfinity() && 0 === u.getX().umod(this.n).cmp(f);
          }
          u = this.g.jmulAdd(s, i.getPublic(), o);
          return !u.isInfinity() && u.eqXToP(f);
        }),
        (o.prototype.recoverPubKey = function (t, e, i, n) {
          (d((3 & i) === i, "The recovery param is more than two bits"),
            (e = new h(e, n)));
          var f = this.n,
            a = new r(t),
            s = e.r,
            o = e.s,
            u = 1 & i,
            c = i >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
            throw new Error("Unable to find sencond key candinate");
          s = c
            ? this.curve.pointFromX(s.add(this.curve.n), u)
            : this.curve.pointFromX(s, u);
          var l = e.r.invm(f),
            b = f.sub(a).mul(l).umod(f),
            p = o.mul(l).umod(f);
          return this.g.mulAdd(b, s, p);
        }),
        (o.prototype.getKeyRecoveryParam = function (t, e, i, r) {
          if (((e = new h(e, r)), null !== e.recoveryParam))
            return e.recoveryParam;
          for (var n = 0; n < 4; n++) {
            var f;
            try {
              f = this.recoverPubKey(t, e, n);
            } catch (t) {
              continue;
            }
            if (f.eq(i)) return n;
          }
          throw new Error("Unable to find valid recovery factor");
        }));
    },
    8027: function (t, e, i) {
      "use strict";
      var r = i(3422),
        n = i(3216),
        f = n.utils,
        a = f.assert;
      function d(t, e) {
        ((this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc));
      }
      ((t.exports = d),
        (d.fromPublic = function (t, e, i) {
          return e instanceof d ? e : new d(t, { pub: e, pubEnc: i });
        }),
        (d.fromPrivate = function (t, e, i) {
          return e instanceof d ? e : new d(t, { priv: e, privEnc: i });
        }),
        (d.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
              ? t.mul(this.ec.curve.n).isInfinity()
                ? { result: !0, reason: null }
                : { result: !1, reason: "Public key * N != O" }
              : { result: !1, reason: "Public key is not a point" };
        }),
        (d.prototype.getPublic = function (t, e) {
          return (
            "string" === typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (d.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (d.prototype._importPrivate = function (t, e) {
          ((this.priv = new r(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n)));
        }),
        (d.prototype._importPublic = function (t, e) {
          if (t.x || t.y)
            return (
              "mont" === this.ec.curve.type
                ? a(t.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  a(t.x && t.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            );
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (d.prototype.derive = function (t) {
          return t.mul(this.priv).getX();
        }),
        (d.prototype.sign = function (t, e, i) {
          return this.ec.sign(t, this, e, i);
        }),
        (d.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (d.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        }));
    },
    8028: function (t, e, i) {
      "use strict";
      var r = i(3422),
        n = i(3216),
        f = n.utils,
        a = f.assert;
      function d(t, e) {
        if (t instanceof d) return t;
        this._importDER(t, e) ||
          (a(t.r && t.s, "Signature without r or s"),
          (this.r = new r(t.r, 16)),
          (this.s = new r(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function s() {
        this.place = 0;
      }
      function h(t, e) {
        var i = t[e.place++];
        if (!(128 & i)) return i;
        for (var r = 15 & i, n = 0, f = 0, a = e.place; f < r; f++, a++)
          ((n <<= 8), (n |= t[a]));
        return ((e.place = a), n);
      }
      function o(t) {
        var e = 0,
          i = t.length - 1;
        while (!t[e] && !(128 & t[e + 1]) && e < i) e++;
        return 0 === e ? t : t.slice(e);
      }
      function u(t, e) {
        if (e < 128) t.push(e);
        else {
          var i = 1 + ((Math.log(e) / Math.LN2) >>> 3);
          t.push(128 | i);
          while (--i) t.push((e >>> (i << 3)) & 255);
          t.push(e);
        }
      }
      ((t.exports = d),
        (d.prototype._importDER = function (t, e) {
          t = f.toArray(t, e);
          var i = new s();
          if (48 !== t[i.place++]) return !1;
          var n = h(t, i);
          if (n + i.place !== t.length) return !1;
          if (2 !== t[i.place++]) return !1;
          var a = h(t, i),
            d = t.slice(i.place, a + i.place);
          if (((i.place += a), 2 !== t[i.place++])) return !1;
          var o = h(t, i);
          if (t.length !== o + i.place) return !1;
          var u = t.slice(i.place, o + i.place);
          return (
            0 === d[0] && 128 & d[1] && (d = d.slice(1)),
            0 === u[0] && 128 & u[1] && (u = u.slice(1)),
            (this.r = new r(d)),
            (this.s = new r(u)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (d.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            i = this.s.toArray();
          (128 & e[0] && (e = [0].concat(e)),
            128 & i[0] && (i = [0].concat(i)),
            (e = o(e)),
            (i = o(i)));
          while (!i[0] && !(128 & i[1])) i = i.slice(1);
          var r = [2];
          (u(r, e.length), (r = r.concat(e)), r.push(2), u(r, i.length));
          var n = r.concat(i),
            a = [48];
          return (u(a, n.length), (a = a.concat(n)), f.encode(a, t));
        }));
    },
    8029: function (t, e, i) {
      "use strict";
      var r = i(43),
        n = i(3216),
        f = n.utils,
        a = f.assert,
        d = f.parseBytes,
        s = i(8030),
        h = i(8031);
      function o(t) {
        if (
          (a("ed25519" === t, "only tested with ed25519 so far"),
          !(this instanceof o))
        )
          return new o(t);
        t = n.curves[t].curve;
        ((this.curve = t),
          (this.g = t.g),
          this.g.precompute(t.n.bitLength() + 1),
          (this.pointClass = t.point().constructor),
          (this.encodingLength = Math.ceil(t.n.bitLength() / 8)),
          (this.hash = r.sha512));
      }
      ((t.exports = o),
        (o.prototype.sign = function (t, e) {
          t = d(t);
          var i = this.keyFromSecret(e),
            r = this.hashInt(i.messagePrefix(), t),
            n = this.g.mul(r),
            f = this.encodePoint(n),
            a = this.hashInt(f, i.pubBytes(), t).mul(i.priv()),
            s = r.add(a).umod(this.curve.n);
          return this.makeSignature({ R: n, S: s, Rencoded: f });
        }),
        (o.prototype.verify = function (t, e, i) {
          ((t = d(t)), (e = this.makeSignature(e)));
          var r = this.keyFromPublic(i),
            n = this.hashInt(e.Rencoded(), r.pubBytes(), t),
            f = this.g.mul(e.S()),
            a = e.R().add(r.pub().mul(n));
          return a.eq(f);
        }),
        (o.prototype.hashInt = function () {
          for (var t = this.hash(), e = 0; e < arguments.length; e++)
            t.update(arguments[e]);
          return f.intFromLE(t.digest()).umod(this.curve.n);
        }),
        (o.prototype.keyFromPublic = function (t) {
          return s.fromPublic(this, t);
        }),
        (o.prototype.keyFromSecret = function (t) {
          return s.fromSecret(this, t);
        }),
        (o.prototype.makeSignature = function (t) {
          return t instanceof h ? t : new h(this, t);
        }),
        (o.prototype.encodePoint = function (t) {
          var e = t.getY().toArray("le", this.encodingLength);
          return (
            (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0),
            e
          );
        }),
        (o.prototype.decodePoint = function (t) {
          t = f.parseBytes(t);
          var e = t.length - 1,
            i = t.slice(0, e).concat(-129 & t[e]),
            r = 0 !== (128 & t[e]),
            n = f.intFromLE(i);
          return this.curve.pointFromY(n, r);
        }),
        (o.prototype.encodeInt = function (t) {
          return t.toArray("le", this.encodingLength);
        }),
        (o.prototype.decodeInt = function (t) {
          return f.intFromLE(t);
        }),
        (o.prototype.isPoint = function (t) {
          return t instanceof this.pointClass;
        }));
    },
    8030: function (t, e, i) {
      "use strict";
      var r = i(3216),
        n = r.utils,
        f = n.assert,
        a = n.parseBytes,
        d = n.cachedProperty;
      function s(t, e) {
        ((this.eddsa = t),
          (this._secret = a(e.secret)),
          t.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = a(e.pub)));
      }
      ((s.fromPublic = function (t, e) {
        return e instanceof s ? e : new s(t, { pub: e });
      }),
        (s.fromSecret = function (t, e) {
          return e instanceof s ? e : new s(t, { secret: e });
        }),
        (s.prototype.secret = function () {
          return this._secret;
        }),
        d(s, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        d(s, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        d(s, "privBytes", function () {
          var t = this.eddsa,
            e = this.hash(),
            i = t.encodingLength - 1,
            r = e.slice(0, t.encodingLength);
          return ((r[0] &= 248), (r[i] &= 127), (r[i] |= 64), r);
        }),
        d(s, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        d(s, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        d(s, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function (t) {
          return (
            f(this._secret, "KeyPair can only verify"),
            this.eddsa.sign(t, this)
          );
        }),
        (s.prototype.verify = function (t, e) {
          return this.eddsa.verify(t, e, this);
        }),
        (s.prototype.getSecret = function (t) {
          return (
            f(this._secret, "KeyPair is public only"),
            n.encode(this.secret(), t)
          );
        }),
        (s.prototype.getPublic = function (t) {
          return n.encode(this.pubBytes(), t);
        }),
        (t.exports = s));
    },
    8031: function (t, e, i) {
      "use strict";
      var r = i(3422),
        n = i(3216),
        f = n.utils,
        a = f.assert,
        d = f.cachedProperty,
        s = f.parseBytes;
      function h(t, e) {
        ((this.eddsa = t),
          "object" !== typeof e && (e = s(e)),
          Array.isArray(e) &&
            (e = {
              R: e.slice(0, t.encodingLength),
              S: e.slice(t.encodingLength),
            }),
          a(e.R && e.S, "Signature without R or S"),
          t.isPoint(e.R) && (this._R = e.R),
          e.S instanceof r && (this._S = e.S),
          (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
          (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded));
      }
      (d(h, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        d(h, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        d(h, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        d(h, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (h.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (h.prototype.toHex = function () {
          return f.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (t.exports = h));
    },
    8032: function (t, e, i) {
      const r = i(8033).JSBigInt,
        n = (function () {
          const t = {},
            e = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
            i = [];
          for (let r = 0; r < e.length; r++) i.push(e.charCodeAt(r));
          const n = [0, 2, 3, 5, 6, 7, 9, 10, 11],
            f = i.length,
            a = 8,
            d = 11,
            s = new r(2).pow(64);
          function h(t) {
            if (t.length % 2 !== 0) throw "Hex string has invalid length!";
            const e = new Uint8Array(t.length / 2);
            for (let i = 0; i < t.length / 2; ++i)
              e[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
            return e;
          }
          function o(t) {
            const e = [];
            for (let i = 0; i < t.length; ++i)
              e.push(("0" + t[i].toString(16)).slice(-2));
            return e.join("");
          }
          function u(t) {
            const e = new Uint8Array(t.length);
            for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
            return e;
          }
          function c(t) {
            const e = [];
            for (let i = 0; i < t.length; i++)
              e.push(String.fromCharCode(t[i]));
            return e.join("");
          }
          function l(t) {
            if (0 === t.length || t.length > 8) throw "Invalid input length";
            let e = r.ZERO;
            const i = new r(2).pow(8);
            let n = 0;
            switch (9 - t.length) {
              case 1:
                e = e.add(t[n++]);
              case 2:
                e = e.multiply(i).add(t[n++]);
              case 3:
                e = e.multiply(i).add(t[n++]);
              case 4:
                e = e.multiply(i).add(t[n++]);
              case 5:
                e = e.multiply(i).add(t[n++]);
              case 6:
                e = e.multiply(i).add(t[n++]);
              case 7:
                e = e.multiply(i).add(t[n++]);
              case 8:
                e = e.multiply(i).add(t[n++]);
                break;
              default:
                throw "Impossible condition";
            }
            return e;
          }
          function b(t, e) {
            const i = new Uint8Array(e);
            if (e < 1 || e > 8) throw "Invalid input length";
            const n = new r(2).pow(8);
            for (let r = e - 1; r >= 0; r--)
              ((i[r] = t.remainder(n).toJSValue()), (t = t.divide(n)));
            return i;
          }
          return (
            (t.encode_block = function (t, e, r) {
              if (0 === t.length || t.length > d)
                throw "Invalid block length: " + t.length;
              let a = l(t),
                s = n[t.length] - 1;
              while (1 === a.compare(0)) {
                const t = a.divRem(f),
                  n = t[1];
                ((a = t[0]), (e[r + s] = i[n.toJSValue()]), s--);
              }
              return e;
            }),
            (t.encode = function (e) {
              const r = h(e);
              if (0 === r.length) return "";
              const f = Math.floor(r.length / a),
                s = r.length % a,
                o = f * d + n[s];
              let u,
                l = new Uint8Array(o);
              for (u = 0; u < o; ++u) l[u] = i[0];
              for (u = 0; u < f; u++)
                l = t.encode_block(r.subarray(u * a, u * a + a), l, u * d);
              return (
                s > 0 &&
                  (l = t.encode_block(r.subarray(f * a, f * a + s), l, f * d)),
                c(l)
              );
            }),
            (t.decode_block = function (t, e, h) {
              if (0 === t.length || t.length > d)
                throw "Invalid block length: " + t.length;
              const o = n.indexOf(t.length);
              if (o <= 0) throw "Invalid block size";
              let u = new r(0),
                c = new r(1);
              for (let r = t.length - 1; r >= 0; r--) {
                const e = i.indexOf(t[r]);
                if (e < 0) throw "Invalid symbol";
                const n = c.multiply(e).add(u);
                if (1 === n.compare(s)) throw "Overflow";
                ((u = n), (c = c.multiply(f)));
              }
              if (o < a && new r(2).pow(8 * o).compare(u) <= 0)
                throw "Overflow 2";
              return (e.set(b(u, o), h), e);
            }),
            (t.decode = function (e) {
              if (((e = u(e)), 0 === e.length)) return "";
              const i = Math.floor(e.length / d),
                r = e.length % d,
                f = n.indexOf(r);
              if (f < 0) throw "Invalid encoded length";
              const s = i * a + f;
              let h = new Uint8Array(s);
              for (let n = 0; n < i; n++)
                h = t.decode_block(e.subarray(n * d, n * d + d), h, n * a);
              return (
                r > 0 &&
                  (h = t.decode_block(e.subarray(i * d, i * d + r), h, i * a)),
                o(h)
              );
            }),
            t
          );
        })();
      t.exports = n;
    },
    8033: function (t, e, i) {
      (function (t) {
        "use strict";
        const e = {};
        function BigInteger(t, i, r) {
          if (r !== e)
            return t instanceof BigInteger
              ? t
              : "undefined" === typeof t
                ? n
                : BigInteger.parse(t);
          t = t || [];
          while (t.length && !t[t.length - 1]) --t.length;
          ((this._d = t), (this._s = t.length ? i || 1 : 0));
        }
        BigInteger._construct = function (t, i) {
          return new BigInteger(t, i, e);
        };
        const i = 1e7,
          r = 7;
        ((BigInteger.base = i), (BigInteger.base_log10 = r));
        var n = new BigInteger([], 0, e);
        BigInteger.ZERO = n;
        const f = new BigInteger([1], 1, e);
        BigInteger.ONE = f;
        const a = new BigInteger(f._d, -1, e);
        ((BigInteger.M_ONE = a),
          (BigInteger._0 = n),
          (BigInteger._1 = f),
          (BigInteger.small = [
            n,
            f,
            new BigInteger([2], 1, e),
            new BigInteger([3], 1, e),
            new BigInteger([4], 1, e),
            new BigInteger([5], 1, e),
            new BigInteger([6], 1, e),
            new BigInteger([7], 1, e),
            new BigInteger([8], 1, e),
            new BigInteger([9], 1, e),
            new BigInteger([10], 1, e),
            new BigInteger([11], 1, e),
            new BigInteger([12], 1, e),
            new BigInteger([13], 1, e),
            new BigInteger([14], 1, e),
            new BigInteger([15], 1, e),
            new BigInteger([16], 1, e),
            new BigInteger([17], 1, e),
            new BigInteger([18], 1, e),
            new BigInteger([19], 1, e),
            new BigInteger([20], 1, e),
            new BigInteger([21], 1, e),
            new BigInteger([22], 1, e),
            new BigInteger([23], 1, e),
            new BigInteger([24], 1, e),
            new BigInteger([25], 1, e),
            new BigInteger([26], 1, e),
            new BigInteger([27], 1, e),
            new BigInteger([28], 1, e),
            new BigInteger([29], 1, e),
            new BigInteger([30], 1, e),
            new BigInteger([31], 1, e),
            new BigInteger([32], 1, e),
            new BigInteger([33], 1, e),
            new BigInteger([34], 1, e),
            new BigInteger([35], 1, e),
            new BigInteger([36], 1, e),
          ]),
          (BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
            "",
          )),
          (BigInteger.prototype.toString = function (t) {
            if (((t = +t || 10), t < 2 || t > 36))
              throw new Error(`illegal radix ${t}.`);
            if (0 === this._s) return "0";
            if (10 === t) {
              let t = this._s < 0 ? "-" : "";
              t += this._d[this._d.length - 1].toString();
              for (let e = this._d.length - 2; e >= 0; e--) {
                let i = this._d[e].toString();
                while (i.length < r) i = "0" + i;
                t += i;
              }
              return t;
            }
            const e = BigInteger.digits;
            t = BigInteger.small[t];
            const i = this._s;
            let n = this.abs();
            const f = [];
            let a;
            while (0 !== n._s) {
              const i = n.divRem(t);
              ((n = i[0]), (a = i[1]), f.push(e[a.valueOf()]));
            }
            return (i < 0 ? "-" : "") + f.reverse().join("");
          }),
          (BigInteger.radixRegex = [
            /^$/,
            /^$/,
            /^[01]*$/,
            /^[012]*$/,
            /^[0-3]*$/,
            /^[0-4]*$/,
            /^[0-5]*$/,
            /^[0-6]*$/,
            /^[0-7]*$/,
            /^[0-8]*$/,
            /^\d*$/,
            /^[0-9aA]*$/,
            /^[0-9abAB]*$/,
            /^[0-9abcABC]*$/,
            /^[0-9a-dA-D]*$/,
            /^[0-9a-eA-E]*$/,
            /^[0-9a-fA-F]*$/,
            /^[0-9a-gA-G]*$/,
            /^[0-9a-hA-H]*$/,
            /^[0-9a-iA-I]*$/,
            /^[0-9a-jA-J]*$/,
            /^[0-9a-kA-K]*$/,
            /^[0-9a-lA-L]*$/,
            /^[0-9a-mA-M]*$/,
            /^[0-9a-nA-N]*$/,
            /^[0-9a-oA-O]*$/,
            /^[0-9a-pA-P]*$/,
            /^[0-9a-qA-Q]*$/,
            /^[0-9a-rA-R]*$/,
            /^[0-9a-sA-S]*$/,
            /^[0-9a-tA-T]*$/,
            /^[0-9a-uA-U]*$/,
            /^[0-9a-vA-V]*$/,
            /^[0-9a-wA-W]*$/,
            /^[0-9a-xA-X]*$/,
            /^[0-9a-yA-Y]*$/,
            /^[0-9a-zA-Z]*$/,
          ]),
          (BigInteger.parse = function (t, i) {
            function f(t) {
              return (
                (t = t.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e")),
                t.replace(
                  /^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/,
                  function (t, e, i, r, n) {
                    n = +n;
                    const f = n < 0;
                    let a = i.length + n;
                    ((t = (f ? i : r).length),
                      (n = (n = Math.abs(n)) >= t ? n - t + f : 0));
                    const d = new Array(n + 1).join("0");
                    let s = i + r;
                    return (
                      (e || "") +
                      (f ? (s = d + s) : (s += d)).substr(
                        0,
                        (a += f ? d.length : 0),
                      ) +
                      (a < s.length ? "." + s.substr(a) : "")
                    );
                  },
                )
              );
            }
            let a;
            ((t = t.toString()),
              ("undefined" !== typeof i && 10 !== +i) || (t = f(t)),
              (a =
                "undefined" === typeof i
                  ? "0[xcb]"
                  : 16 == i
                    ? "0x"
                    : 8 == i
                      ? "0c"
                      : 2 == i
                        ? "0b"
                        : ""));
            const d = new RegExp(
              `^([+\\-]?)(${a})?([0-9a-z]*)(?:\\.\\d*)?$`,
              "i",
            ).exec(t);
            if (d) {
              let t = d[1] || "+";
              const f = d[2] || "";
              let a = d[3] || "";
              if ("undefined" === typeof i)
                i =
                  "0x" === f || "0X" === f
                    ? 16
                    : "0c" === f || "0C" === f
                      ? 8
                      : "0b" === f || "0B" === f
                        ? 2
                        : 10;
              else if (i < 2 || i > 36) throw new Error(`Illegal radix ${i}.`);
              if (((i = +i), !BigInteger.radixRegex[i].test(a)))
                throw new Error("Bad digit for radix " + i);
              if (((a = a.replace(/^0+/, "").split("")), 0 === a.length))
                return n;
              if (((t = "-" === t ? -1 : 1), 10 == i)) {
                var s = [];
                while (a.length >= r)
                  s.push(
                    parseInt(
                      a
                        .splice(
                          a.length - BigInteger.base_log10,
                          BigInteger.base_log10,
                        )
                        .join(""),
                      10,
                    ),
                  );
                return (
                  s.push(parseInt(a.join(""), 10)),
                  new BigInteger(s, t, e)
                );
              }
              s = n;
              i = BigInteger.small[i];
              const h = BigInteger.small;
              for (let e = 0; e < a.length; e++)
                s = s.multiply(i).add(h[parseInt(a[e], 36)]);
              return new BigInteger(s._d, t, e);
            }
            throw new Error("Invalid BigInteger format: " + t);
          }),
          (BigInteger.prototype.add = function (t) {
            if (0 === this._s) return BigInteger(t);
            if (((t = BigInteger(t)), 0 === t._s)) return this;
            if (this._s !== t._s) return ((t = t.negate()), this.subtract(t));
            let r = this._d;
            const n = t._d;
            let f = r.length;
            const a = n.length,
              d = new Array(Math.max(f, a) + 1),
              s = Math.min(f, a);
            let h,
              o = 0;
            for (var u = 0; u < s; u++)
              ((h = r[u] + n[u] + o), (d[u] = h % i), (o = (h / i) | 0));
            for (a > f && ((r = n), (f = a)), u = s; o && u < f; u++)
              ((h = r[u] + o), (d[u] = h % i), (o = (h / i) | 0));
            for (o && (d[u] = o); u < f; u++) d[u] = r[u];
            return new BigInteger(d, this._s, e);
          }),
          (BigInteger.prototype.negate = function () {
            return new BigInteger(this._d, 0 | -this._s, e);
          }),
          (BigInteger.prototype.abs = function () {
            return this._s < 0 ? this.negate() : this;
          }),
          (BigInteger.prototype.subtract = function (t) {
            if (0 === this._s) return BigInteger(t).negate();
            if (((t = BigInteger(t)), 0 === t._s)) return this;
            if (this._s !== t._s) return ((t = t.negate()), this.add(t));
            let r = this;
            this._s < 0 &&
              ((r = new BigInteger(t._d, 1, e)),
              (t = new BigInteger(this._d, 1, e)));
            const f = r.compareAbs(t);
            if (0 === f) return n;
            if (f < 0) {
              const e = t;
              ((t = r), (r = e));
            }
            const a = r._d,
              d = t._d,
              s = a.length,
              h = d.length,
              o = new Array(s);
            let u,
              c,
              l = 0;
            for (u = 0; u < h; u++)
              ((c = a[u] - l - d[u]),
                c < 0 ? ((c += i), (l = 1)) : (l = 0),
                (o[u] = c));
            for (u = h; u < s; u++) {
              if (((c = a[u] - l), !(c < 0))) {
                o[u++] = c;
                break;
              }
              ((c += i), (o[u] = c));
            }
            for (; u < s; u++) o[u] = a[u];
            return new BigInteger(o, f, e);
          }),
          (function () {
            function t(t, r) {
              const n = t._d,
                f = n.slice();
              let a = 0;
              while (1) {
                const t = (n[a] || 0) + 1;
                if (((f[a] = t % i), t <= i - 1)) break;
                ++a;
              }
              return new BigInteger(f, r, e);
            }
            function r(t, r) {
              const n = t._d,
                f = n.slice();
              let a = 0;
              while (1) {
                const t = (n[a] || 0) - 1;
                if (!(t < 0)) {
                  f[a] = t;
                  break;
                }
                ((f[a] = t + i), ++a);
              }
              return new BigInteger(f, r, e);
            }
            ((BigInteger.prototype.next = function () {
              switch (this._s) {
                case 0:
                  return f;
                case -1:
                  return r(this, -1);
                default:
                  return t(this, 1);
              }
            }),
              (BigInteger.prototype.prev = function () {
                switch (this._s) {
                  case 0:
                    return a;
                  case -1:
                    return t(this, -1);
                  default:
                    return r(this, 1);
                }
              }));
          })(),
          (BigInteger.prototype.compareAbs = function (t) {
            if (this === t) return 0;
            if (!(t instanceof BigInteger)) {
              if (!isFinite(t)) return isNaN(t) ? t : -1;
              t = BigInteger(t);
            }
            if (0 === this._s) return 0 !== t._s ? -1 : 0;
            if (0 === t._s) return 1;
            const e = this._d.length,
              i = t._d.length;
            if (e < i) return -1;
            if (e > i) return 1;
            const r = this._d,
              n = t._d;
            for (let f = e - 1; f >= 0; f--)
              if (r[f] !== n[f]) return r[f] < n[f] ? -1 : 1;
            return 0;
          }),
          (BigInteger.prototype.compare = function (t) {
            if (this === t) return 0;
            if (((t = BigInteger(t)), 0 === this._s)) return -t._s;
            if (this._s === t._s) {
              const e = this.compareAbs(t);
              return e * this._s;
            }
            return this._s;
          }),
          (BigInteger.prototype.isUnit = function () {
            return (
              this === f ||
              this === a ||
              (1 === this._d.length && 1 === this._d[0])
            );
          }),
          (BigInteger.prototype.multiply = function (t) {
            if (0 === this._s) return n;
            if (((t = BigInteger(t)), 0 === t._s)) return n;
            if (this.isUnit()) return this._s < 0 ? t.negate() : t;
            if (t.isUnit()) return t._s < 0 ? this.negate() : this;
            if (this === t) return this.square();
            const r = this._d.length >= t._d.length,
              f = (r ? this : t)._d,
              a = (r ? t : this)._d,
              d = f.length,
              s = a.length,
              h = d + s,
              o = new Array(h);
            let u;
            for (u = 0; u < h; u++) o[u] = 0;
            for (u = 0; u < s; u++) {
              let t = 0;
              const e = a[u],
                r = d + u;
              for (var c, l = u; l < r; l++)
                ((c = o[l] + e * f[l - u] + t),
                  (t = (c / i) | 0),
                  (o[l] = (c % i) | 0));
              t && ((c = o[l] + t), (t = (c / i) | 0), (o[l] = c % i));
            }
            return new BigInteger(o, this._s * t._s, e);
          }),
          (BigInteger.prototype.multiplySingleDigit = function (t) {
            if (0 === t || 0 === this._s) return n;
            if (1 === t) return this;
            let r;
            if (1 === this._d.length)
              return (
                (r = this._d[0] * t),
                new BigInteger(r >= i ? [(r % i) | 0, (r / i) | 0] : [r], 1, e)
              );
            if (2 === t) return this.add(this);
            if (this.isUnit()) return new BigInteger([t], 1, e);
            const f = this._d,
              a = f.length,
              d = a + 1,
              s = new Array(d);
            for (let e = 0; e < d; e++) s[e] = 0;
            let h = 0;
            for (var o = 0; o < a; o++)
              ((r = t * f[o] + h), (h = (r / i) | 0), (s[o] = (r % i) | 0));
            return (h && (s[o] = h), new BigInteger(s, 1, e));
          }),
          (BigInteger.prototype.square = function () {
            if (0 === this._s) return n;
            if (this.isUnit()) return f;
            const t = this._d,
              r = t.length,
              a = new Array(r + r + 1);
            let d, s, h, o;
            for (o = 0; o < r; o++)
              ((h = 2 * o),
                (d = t[o] * t[o]),
                (s = (d / i) | 0),
                (a[h] = d % i),
                (a[h + 1] = s));
            for (o = 0; o < r; o++) {
              ((s = 0), (h = 2 * o + 1));
              for (let n = o + 1; n < r; n++, h++)
                ((d = t[n] * t[o] * 2 + a[h] + s),
                  (s = (d / i) | 0),
                  (a[h] = d % i));
              h = r + o;
              const e = s + a[h];
              ((s = (e / i) | 0), (a[h] = e % i), (a[h + 1] += s));
            }
            return new BigInteger(a, 1, e);
          }),
          (BigInteger.prototype.quotient = function (t) {
            return this.divRem(t)[0];
          }),
          (BigInteger.prototype.divide = BigInteger.prototype.quotient),
          (BigInteger.prototype.remainder = function (t) {
            return this.divRem(t)[1];
          }),
          (BigInteger.prototype.divRem = function (t) {
            if (((t = BigInteger(t)), 0 === t._s))
              throw new Error("Divide by zero");
            if (0 === this._s) return [n, n];
            if (1 === t._d.length) return this.divRemSmall(t._s * t._d[0]);
            switch (this.compareAbs(t)) {
              case 0:
                return [this._s === t._s ? f : a, n];
              case -1:
                return [n, this];
            }
            const r = this._s * t._s,
              d = t.abs(),
              s = this._d;
            let h = s.length;
            t._d.length;
            const o = [];
            let u,
              c = new BigInteger([], 0, e);
            while (h) {
              if (
                (c._d.unshift(s[--h]),
                (c = new BigInteger(c._d, 1, e)),
                c.compareAbs(t) < 0)
              ) {
                o.push(0);
                continue;
              }
              if (0 === c._s) u = 0;
              else {
                const t = c._d.length,
                  e = d._d.length;
                let r = c._d[t - 1] * i + c._d[t - 2];
                const n = d._d[e - 1] * i + d._d[e - 2];
                (c._d.length > d._d.length && (r = (r + 1) * i),
                  (u = Math.ceil(r / n)));
              }
              do {
                var l = d.multiplySingleDigit(u);
                if (l.compareAbs(c) <= 0) break;
                u--;
              } while (u);
              if ((o.push(u), !u)) continue;
              const r = c.subtract(l);
              c._d = r._d.slice();
            }
            return [
              new BigInteger(o.reverse(), r, e),
              new BigInteger(c._d, this._s, e),
            ];
          }),
          (BigInteger.prototype.divRemSmall = function (t) {
            let r;
            if (((t = +t), 0 === t)) throw new Error("Divide by zero");
            const f = t < 0 ? -1 : 1,
              a = this._s * f;
            if (((t = Math.abs(t)), t < 1 || t >= i))
              throw new Error("Argument out of range");
            if (0 === this._s) return [n, n];
            if (1 === t || -1 === t)
              return [1 === a ? this.abs() : new BigInteger(this._d, a, e), n];
            if (1 === this._d.length) {
              let i = new BigInteger([(this._d[0] / t) | 0], 1, e);
              return (
                (r = new BigInteger([(this._d[0] % t) | 0], 1, e)),
                a < 0 && (i = i.negate()),
                this._s < 0 && (r = r.negate()),
                [i, r]
              );
            }
            const d = this._d.slice(),
              s = new Array(d.length);
            let h,
              o = 0,
              u = 0,
              c = 0;
            while (d.length) {
              if (((o = o * i + d[d.length - 1]), o < t)) {
                ((s[c++] = 0), d.pop(), (u = i * u + o));
                continue;
              }
              h = 0 === o ? 0 : (o / t) | 0;
              const e = t * h;
              ((u = o - e), (s[c++] = h), h ? (d.pop(), (o = u)) : d.pop());
            }
            return (
              (r = new BigInteger([u], 1, e)),
              this._s < 0 && (r = r.negate()),
              [new BigInteger(s.reverse(), a, e), r]
            );
          }),
          (BigInteger.prototype.isEven = function () {
            const t = this._d;
            return 0 === this._s || 0 === t.length || t[0] % 2 === 0;
          }),
          (BigInteger.prototype.isOdd = function () {
            return !this.isEven();
          }),
          (BigInteger.prototype.sign = function () {
            return this._s;
          }),
          (BigInteger.prototype.isPositive = function () {
            return this._s > 0;
          }),
          (BigInteger.prototype.isNegative = function () {
            return this._s < 0;
          }),
          (BigInteger.prototype.isZero = function () {
            return 0 === this._s;
          }),
          (BigInteger.prototype.exp10 = function (t) {
            if (((t = +t), 0 === t)) return this;
            if (Math.abs(t) > Number(d))
              throw new Error("exponent too large in BigInteger.exp10");
            if (0 === this._s) return n;
            if (t > 0) {
              for (
                var i = new BigInteger(this._d.slice(), this._s, e);
                t >= r;
                t -= r
              )
                i._d.unshift(0);
              return 0 == t
                ? i
                : ((i._s = 1),
                  (i = i.multiplySingleDigit(10 ** t)),
                  this._s < 0 ? i.negate() : i);
            }
            if (-t >= this._d.length * r) return n;
            i = new BigInteger(this._d.slice(), this._s, e);
            for (t = -t; t >= r; t -= r) i._d.shift();
            return 0 == t ? i : i.divRemSmall(10 ** t)[0];
          }),
          (BigInteger.prototype.pow = function (t) {
            if (this.isUnit())
              return this._s > 0 || BigInteger(t).isOdd()
                ? this
                : this.negate();
            if (((t = BigInteger(t)), 0 === t._s)) return f;
            if (t._s < 0) {
              if (0 === this._s) throw new Error("Divide by zero");
              return n;
            }
            if (0 === this._s) return n;
            if (t.isUnit()) return this;
            if (t.compareAbs(d) > 0)
              throw new Error("exponent too large in BigInteger.pow");
            let e = this,
              i = f;
            const r = BigInteger.small[2];
            while (t.isPositive()) {
              if (t.isOdd() && ((i = i.multiply(e)), t.isUnit())) return i;
              ((e = e.square()), (t = t.quotient(r)));
            }
            return i;
          }),
          (BigInteger.prototype.modPow = function (t, e) {
            let i = f,
              r = this;
            while (t.isPositive())
              (t.isOdd() && (i = i.multiply(r).remainder(e)),
                (t = t.quotient(BigInteger.small[2])),
                t.isPositive() && (r = r.square().remainder(e)));
            return i;
          }),
          (BigInteger.prototype.log = function () {
            switch (this._s) {
              case 0:
                return -1 / 0;
              case -1:
                return NaN;
              default:
            }
            const t = this._d.length;
            if (t * r < 30) return Math.log(this.valueOf());
            const n = Math.ceil(30 / r),
              f = this._d.slice(t - n);
            return (
              Math.log(new BigInteger(f, 1, e).valueOf()) +
              (t - n) * Math.log(i)
            );
          }),
          (BigInteger.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
          }),
          (BigInteger.prototype.toJSValue = function () {
            return parseInt(this.toString(), 10);
          }),
          (BigInteger.prototype.lowVal = function () {
            return this._d[0] || 0;
          }));
        var d = BigInteger(2147483647);
        ((BigInteger.MAX_EXP = d),
          (function () {
            function t(t) {
              return function (e) {
                return t.call(BigInteger(e));
              };
            }
            function e(t) {
              return function (e, i) {
                return t.call(BigInteger(e), BigInteger(i));
              };
            }
            function i(t) {
              return function (e, i, r) {
                return t.call(BigInteger(e), BigInteger(i), BigInteger(r));
              };
            }
            (function () {
              let r, n;
              const f =
                  "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(
                    ",",
                  ),
                a =
                  "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(
                    ",",
                  ),
                d = ["modPow"];
              for (r = 0; r < f.length; r++)
                ((n = f[r]), (BigInteger[n] = t(BigInteger.prototype[n])));
              for (r = 0; r < a.length; r++)
                ((n = a[r]), (BigInteger[n] = e(BigInteger.prototype[n])));
              for (r = 0; r < d.length; r++)
                ((n = d[r]), (BigInteger[n] = i(BigInteger.prototype[n])));
              BigInteger.exp10 = function (t, e) {
                return BigInteger(t).exp10(e);
              };
            })();
          })(),
          (t.JSBigInt = BigInteger));
      })(e);
    },
  },
]);
