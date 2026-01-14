(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [246],
  {
    2865: function (e, t, r) {
      var n = r(383)["default"];
      function a(t, r) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            s = new WeakMap();
        return ((e.exports = a =
          function (e, t) {
            if (!t && e && e.__esModule) return e;
            var r,
              a,
              o = { __proto__: null, default: e };
            if (null === e || ("object" != n(e) && "function" != typeof e))
              return o;
            if ((r = t ? s : i)) {
              if (r.has(e)) return r.get(e);
              r.set(e, o);
            }
            for (var u in e)
              "default" !== u &&
                {}.hasOwnProperty.call(e, u) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, u)) &&
                (a.get || a.set)
                  ? r(o, u, a)
                  : (o[u] = e[u]));
            return o;
          }),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports))(t, r);
      }
      ((e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    2894: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(2865),
          a = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getPrivateKeyFromMnemonic =
            t.validateMnemonic =
            t.generateMnemonic =
            t.getPrivateKeyFromKeyStore =
            t.generateKeyStore =
            t.verifySignature =
            t.generateSignature =
            t.getAddressFromPrivateKey =
            t.getAddressFromPublicKey =
            t.generatePubKey =
            t.getPublicKeyFromPrivateKey =
            t.getPublicKey =
            t.generateRandomArray =
            t.generatePrivateKey =
            t.encodeAddress =
            t.checkAddress =
            t.decodeAddress =
              void 0));
        var i = a(r(803)),
          s = n(r(3177)),
          o = n(r(9e3)),
          u = a(r(9011)),
          c = r(795),
          d = a(r(4517)),
          l = a(r(3634)),
          f = a(r(2819)),
          h = a(r(3264)),
          p = r(5432),
          v = 32,
          m = 256,
          b = 20,
          g = "secp256k1",
          w = "44'/714'/0'/0/",
          y = new c.ec(g),
          _ = function (t) {
            var r = i["default"].decode(t);
            return e.from(i["default"].fromWords(r.words));
          };
        t.decodeAddress = _;
        var x = function (e, t) {
          try {
            if (!e.startsWith(t)) return !1;
            var r = i["default"].decode(e),
              n = _(e).length;
            return n === b && r.prefix === t;
          } catch (a) {
            return !1;
          }
        };
        t.checkAddress = x;
        var k = function (t) {
          var r,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "tbnb",
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "hex";
          return (
            (r = e.isBuffer(t)
              ? i["default"].toWords(e.from(t))
              : i["default"].toWords(e.from(t, a))),
            i["default"].encode(n, r)
          );
        };
        t.encodeAddress = k;
        var P = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;
          return (0, p.ab2hexstring)((0, l["default"])(e));
        };
        t.generatePrivateKey = P;
        var A = function (e) {
          return (0, l["default"])(e);
        };
        t.generateRandomArray = A;
        var E = function (e) {
          var t = y.keyFromPublic(e, "hex");
          return t.getPublic();
        };
        t.getPublicKey = E;
        var T = function (e) {
          if (!e || e.length !== 2 * v) throw new Error("invalid privateKey");
          var t = new c.ec(g),
            r = t.keyFromPrivate(e, "hex"),
            n = r.getPublic().encode("hex", !1);
          return n;
        };
        t.getPublicKeyFromPrivateKey = T;
        var C = function (e) {
          var t = new c.ec(g),
            r = t.keyFromPrivate(e);
          return r.getPublic();
        };
        t.generatePubKey = C;
        var M = function (e, t) {
          var r = y.keyFromPublic(e, "hex"),
            n = r.getPublic(),
            a = n.encodeCompressed(),
            i = (0, p.ab2hexstring)(a),
            s = (0, p.sha256ripemd160)(i),
            o = k(s, t);
          return o;
        };
        t.getAddressFromPublicKey = M;
        var S = function (e, t) {
          return M(T(e), t);
        };
        t.getAddressFromPrivateKey = S;
        var O = function (t, r) {
          var n = (0, p.sha256)(t),
            a = e.from(n, "hex"),
            i = f["default"].sign(
              a,
              "string" === typeof r ? e.from(r, "hex") : r,
            );
          return i;
        };
        t.generateSignature = O;
        var B = function (t, r, n) {
          var a = e.from(n, "hex");
          if (!f["default"].isPoint(a))
            throw new Error("Invalid public key provided");
          var i = (0, p.sha256)(r),
            s = e.from(i, "hex");
          return f["default"].verify(s, a, e.from(t, "hex"));
        };
        t.verifySignature = B;
        var D = function (t, r) {
          var n = u["default"].randomBytes(32),
            a = u["default"].randomBytes(16),
            i = "aes-256-ctr",
            s = "pbkdf2",
            o = {
              dklen: 32,
              salt: n.toString("hex"),
              c: 262144,
              prf: "hmac-sha256",
            },
            c = u["default"].pbkdf2Sync(e.from(r), n, o.c, o.dklen, "sha256"),
            d = u["default"].createCipheriv(i, c.slice(0, 32), a);
          if (!d) throw new Error("Unsupported cipher");
          var l = e.concat([d.update(e.from(t, "hex")), d["final"]()]),
            f = e.concat([c.slice(16, 32), l]);
          return {
            version: 1,
            id: h["default"].v4({ random: u["default"].randomBytes(16) }),
            crypto: {
              ciphertext: l.toString("hex"),
              cipherparams: { iv: a.toString("hex") },
              cipher: i,
              kdf: s,
              kdfparams: o,
              mac: (0, p.sha3)(f.toString("hex")),
            },
          };
        };
        t.generateKeyStore = D;
        var j = function (t, r) {
          if (!d["default"].string(r)) throw new Error("No password given.");
          var n = d["default"].object(t) ? t : JSON.parse(t),
            a = n.crypto.kdfparams;
          if ("hmac-sha256" !== a.prf)
            throw new Error("Unsupported parameters to PBKDF2");
          var i = u["default"].pbkdf2Sync(
              e.from(r),
              e.from(a.salt, "hex"),
              a.c,
              a.dklen,
              "sha256",
            ),
            s = e.from(n.crypto.ciphertext, "hex"),
            o = e.concat([i.slice(16, 32), s]),
            c = (0, p.sha3)(o.toString("hex"));
          if (c !== n.crypto.mac) {
            var l = (0, p.sha256)(o.toString("hex"));
            if (l !== n.crypto.mac)
              throw new Error(
                "Keystore mac check failed (sha3 & sha256) - wrong password?",
              );
          }
          var f = u["default"].createDecipheriv(
              n.crypto.cipher,
              i.slice(0, 32),
              e.from(n.crypto.cipherparams.iv, "hex"),
            ),
            h = e.concat([f.update(s), f["final"]()]).toString("hex");
          return h;
        };
        t.getPrivateKeyFromKeyStore = j;
        var K = function () {
          return o.generateMnemonic(m);
        };
        t.generateMnemonic = K;
        var N = o.validateMnemonic;
        t.validateMnemonic = N;
        var q = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "";
          if (
            !o.validateMnemonic(e, o.wordlists.english) &&
            !o.validateMnemonic(e, o.wordlists.chinese_simplified) &&
            !o.validateMnemonic(e, o.wordlists.chinese_traditional) &&
            !o.validateMnemonic(e, o.wordlists.korean) &&
            !o.validateMnemonic(e, o.wordlists.french) &&
            !o.validateMnemonic(e, o.wordlists.italian) &&
            !o.validateMnemonic(e, o.wordlists.spanish) &&
            !o.validateMnemonic(e, o.wordlists.japanese)
          )
            throw new Error("wrong mnemonic format");
          var a = o.mnemonicToSeedSync(e, n);
          if (t) {
            var i = s.fromSeed(a),
              u = i.derivePath(w + r);
            if (!u.privateKey)
              throw new Error("child does not have a privateKey");
            return u.privateKey.toString("hex");
          }
          return a.toString("hex");
        };
        t.getPrivateKeyFromMnemonic = q;
      }).call(this, r(2).Buffer);
    },
    2913: function (e, t) {
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      ((e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    2914: function (e, t) {
      function r(t) {
        return (
          (e.exports = r =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.__esModule = !0),
          (e.exports["default"] = e.exports),
          r(t)
        );
      }
      ((e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    2929: function (e, t, r) {
      var n = r(4260);
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && n(e, t));
      }
      ((e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    2930: function (e, t, r) {
      var n = r(383)["default"],
        a = r(2913);
      function i(e, t) {
        if (t && ("object" == n(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return a(e);
      }
      ((e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    3635: function (e, t) {},
    4260: function (e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return ((e.__proto__ = t), e);
                }),
          (e.exports.__esModule = !0),
          (e.exports["default"] = e.exports),
          r(t, n)
        );
      }
      ((e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    5430: function (e, t, r) {
      "use strict";
      var n = r(2865);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = { decoder: !0, encoder: !0 };
      t.encoder = t.decoder = void 0;
      var i = n(r(8992));
      ((t.decoder = i),
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(a, e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return i[e];
                },
              }));
        }));
      var s = n(r(8998));
      ((t.encoder = s),
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(a, e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return s[e];
                },
              }));
        }));
    },
    6387: function (e, t, r) {
      "use strict";
      var n = r(2865),
        a = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BncClient =
          t.LedgerSigningDelegate =
          t.DefaultBroadcastDelegate =
          t.DefaultSigningDelegate =
          t.NETWORK_PREFIX_MAPPING =
          t.api =
            void 0));
      var i = a(r(2834)),
        s = a(r(2839)),
        o = a(r(128)),
        u = a(r(3170)),
        c = a(r(3171)),
        d = a(r(159)),
        l = n(r(2894)),
        f = a(r(6400)),
        h = r(3382),
        p = a(r(6390)),
        v = r(4518),
        m = a(r(9060)),
        b = a(r(9062)),
        g = n(r(9063)),
        w = r(9064),
        y = r(9065);
      function _(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                (0, o["default"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : _(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var k = Math.pow(10, 8),
        P = {
          broadcast: "/api/v1/broadcast",
          nodeInfo: "/api/v1/node-info",
          getAccount: "/api/v1/account",
          getMarkets: "/api/v1/markets",
          getSwaps: "/api/v1/atomic-swaps",
          getOpenOrders: "/api/v1/orders/open",
          getDepth: "/api/v1/depth",
          getTransactions: "/api/v1/transactions",
          getTxs: "/bc/api/v1/txs",
          getTx: "/api/v1/tx",
        };
      t.api = P;
      var A = { testnet: "tbnb", mainnet: "bnb" };
      t.NETWORK_PREFIX_MAPPING = A;
      var E = (function () {
        var e = (0, c["default"])(
          u["default"].mark(function e(t, r) {
            var n;
            return u["default"].wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((n = this.getPrivateKey()), n)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        Promise.reject(
                          "Private key has to be set before signing a transaction",
                        ),
                      );
                    case 3:
                      return e.abrupt("return", t.sign(n, r));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
        );
        return function (t, r, n) {
          return e.apply(this, arguments);
        };
      })();
      t.DefaultSigningDelegate = E;
      var T = (function () {
        var e = (0, c["default"])(
          u["default"].mark(function e(t) {
            return u["default"].wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", this.sendTransaction(t, !0));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
            );
          }),
        );
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })();
      t.DefaultBroadcastDelegate = T;
      var C = function (e, t, r, n, a) {
        return (function () {
          var i = (0, c["default"])(
            u["default"].mark(function i(s, o) {
              var c, d, f, h;
              return u["default"].wrap(
                function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (c = s.getSignBytes(o)),
                          t && t(c),
                          (i.prev = 2),
                          (i.next = 5),
                          e.getPublicKey(a)
                        );
                      case 5:
                        return ((d = i.sent), (i.next = 8), e.sign(c, a));
                      case 8:
                        ((f = i.sent), r && r(d, f), (i.next = 16));
                        break;
                      case 12:
                        ((i.prev = 12),
                          (i.t0 = i["catch"](2)),
                          console.warn("LedgerSigningDelegate error", i.t0),
                          n && n(i.t0));
                      case 16:
                        if (!f || !f.signature) {
                          i.next = 19;
                          break;
                        }
                        return (
                          (h = l.getPublicKey(d.pk.toString("hex"))),
                          i.abrupt("return", s.addSignature(h, f.signature))
                        );
                      case 19:
                        return i.abrupt("return", s);
                      case 20:
                      case "end":
                        return i.stop();
                    }
                },
                i,
                null,
                [[2, 12]],
              );
            }),
          );
          return function (e, t) {
            return i.apply(this, arguments);
          };
        })();
      };
      t.LedgerSigningDelegate = C;
      var M = function (e) {
          e.forEach(function (e) {
            var t = e.coins || [];
            t.forEach(function (e) {
              if (((0, v.checkNumber)(e.amount), !e.denom))
                throw new Error("invalid denmon");
            });
          });
        },
        S = function (e, t) {
          t.forEach(function (t) {
            var r = e[0].coins.find(function (e) {
              return e.denom === t.denom;
            });
            if (r) {
              var n = new d["default"](r.amount);
              r.amount = Number(n.plus(t.amount).toString());
            } else e[0].coins.push(x({}, t));
          });
        },
        O = (function () {
          function e(t) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
            if (
              ((0, i["default"])(this, e),
              (0, o["default"])(this, "_httpClient", void 0),
              (0, o["default"])(this, "_signingDelegate", void 0),
              (0, o["default"])(this, "_broadcastDelegate", void 0),
              (0, o["default"])(this, "_useAsyncBroadcast", void 0),
              (0, o["default"])(this, "_source", void 0),
              (0, o["default"])(this, "tokens", void 0),
              (0, o["default"])(this, "swap", void 0),
              (0, o["default"])(this, "gov", void 0),
              (0, o["default"])(this, "bridge", void 0),
              (0, o["default"])(this, "stake", void 0),
              (0, o["default"])(this, "chainId", void 0),
              (0, o["default"])(this, "addressPrefix", "tbnb"),
              (0, o["default"])(this, "network", "testnet"),
              (0, o["default"])(this, "address", void 0),
              (0, o["default"])(this, "_setPkPromise", void 0),
              (0, o["default"])(this, "account_number", void 0),
              (0, o["default"])(this, "_privateKey", null),
              !t)
            )
              throw new Error("Binance chain server should not be null");
            ((this._httpClient = new p["default"](t)),
              (this._signingDelegate = E),
              (this._broadcastDelegate = T),
              (this._useAsyncBroadcast = r),
              (this._source = n),
              (this.tokens = new g["default"](this)),
              (this.swap = new b["default"](this)),
              (this.gov = new m["default"](this)),
              (this.bridge = new w.Bridge(this)),
              (this.stake = new y.Stake(this)));
          }
          return (
            (0, s["default"])(e, [
              {
                key: "initChain",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.chainId) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  this._httpClient.request("get", P.nodeInfo)
                                );
                              case 3:
                                ((t = e.sent),
                                  (this.chainId =
                                    t.result.node_info &&
                                    t.result.node_info.network));
                              case 5:
                                return e.abrupt("return", this);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "chooseNetwork",
                value: function (e) {
                  ((this.addressPrefix = A[e] || "tbnb"),
                    (this.network = A[e] ? e : "testnet"));
                },
              },
              {
                key: "setPrivateKey",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r,
                        n,
                        a,
                        i,
                        s = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r =
                                    s.length > 1 && void 0 !== s[1] && s[1]),
                                  t === this._privateKey)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                if (
                                  ((n = l.getAddressFromPrivateKey(
                                    t,
                                    this.addressPrefix,
                                  )),
                                  n)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "address is falsy: ".concat(
                                    n,
                                    ". invalid private key?",
                                  ),
                                );
                              case 5:
                                if (
                                  ((this._privateKey = t),
                                  (this.address = n),
                                  r)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.prev = 8),
                                  (a = this._setPkPromise =
                                    this._httpClient.request(
                                      "get",
                                      "".concat(P.getAccount, "/").concat(n),
                                    )),
                                  (e.next = 12),
                                  a
                                );
                              case 12:
                                ((i = e.sent),
                                  (this.account_number =
                                    i.result.account_number),
                                  (e.next = 19));
                                break;
                              case 16:
                                throw (
                                  (e.prev = 16),
                                  (e.t0 = e["catch"](8)),
                                  new Error(
                                    "unable to query the address on the blockchain. try sending it some funds first: ".concat(
                                      n,
                                    ),
                                  )
                                );
                              case 19:
                                return e.abrupt("return", this);
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[8, 16]],
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "removePrivateKey",
                value: function () {
                  return ((this._privateKey = null), this);
                },
              },
              {
                key: "getPrivateKey",
                value: function () {
                  return this._privateKey;
                },
              },
              {
                key: "setAccountNumber",
                value: function (e) {
                  this.account_number = e;
                },
              },
              {
                key: "useAsyncBroadcast",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return ((this._useAsyncBroadcast = e), this);
                },
              },
              {
                key: "setSigningDelegate",
                value: function (e) {
                  if ("function" !== typeof e)
                    throw new Error("signing delegate must be a function");
                  return ((this._signingDelegate = e), this);
                },
              },
              {
                key: "setBroadcastDelegate",
                value: function (e) {
                  if ("function" !== typeof e)
                    throw new Error("broadcast delegate must be a function");
                  return ((this._broadcastDelegate = e), this);
                },
              },
              {
                key: "useDefaultSigningDelegate",
                value: function () {
                  return ((this._signingDelegate = E), this);
                },
              },
              {
                key: "useDefaultBroadcastDelegate",
                value: function () {
                  return ((this._broadcastDelegate = T), this);
                },
              },
              {
                key: "useLedgerSigningDelegate",
                value: function () {
                  return (
                    (this._signingDelegate = C.apply(void 0, arguments)),
                    this
                  );
                },
              },
              {
                key: "transfer",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n, a) {
                      var i,
                        s,
                        o,
                        c,
                        f,
                        p,
                        m,
                        b,
                        g = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i =
                                    g.length > 4 && void 0 !== g[4]
                                      ? g[4]
                                      : ""),
                                  (s =
                                    g.length > 5 && void 0 !== g[5]
                                      ? g[5]
                                      : null),
                                  (o = l.decodeAddress(t)),
                                  (c = l.decodeAddress(r)),
                                  (n = new d["default"](n)),
                                  (n = Number(n.mul(k).toString())),
                                  (0, v.checkNumber)(n, "amount"),
                                  (f = { denom: a, amount: n }),
                                  (p = {
                                    inputs: [{ address: o, coins: [f] }],
                                    outputs: [{ address: c, coins: [f] }],
                                    aminoPrefix: h.AminoPrefix.MsgSend,
                                  }),
                                  (m = {
                                    inputs: [
                                      {
                                        address: t,
                                        coins: [{ amount: n, denom: a }],
                                      },
                                    ],
                                    outputs: [
                                      {
                                        address: r,
                                        coins: [{ amount: n, denom: a }],
                                      },
                                    ],
                                  }),
                                  (e.next = 12),
                                  this._prepareTransaction(p, m, t, s, i)
                                );
                              case 12:
                                return (
                                  (b = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(b))
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n, a) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "multiSend",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r) {
                      var n,
                        a,
                        i,
                        s,
                        o,
                        c,
                        f,
                        p,
                        v,
                        m,
                        b = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n =
                                    b.length > 2 && void 0 !== b[2]
                                      ? b[2]
                                      : ""),
                                  (a =
                                    b.length > 3 && void 0 !== b[3]
                                      ? b[3]
                                      : null),
                                  t)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "fromAddress should not be falsy",
                                );
                              case 4:
                                if (Array.isArray(r)) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error("outputs should be array");
                              case 6:
                                return (
                                  M(r),
                                  r.forEach(function (e) {
                                    ((e.coins = e.coins.sort(function (e, t) {
                                      return e.denom.localeCompare(t.denom);
                                    })),
                                      e.coins.forEach(function (e) {
                                        var t = new d["default"](e.amount);
                                        e.amount = Number(t.mul(k).toString());
                                      }));
                                  }),
                                  (i = l.decodeAddress(t)),
                                  (s = [{ address: i, coins: [] }]),
                                  (o = []),
                                  r.forEach(function (e) {
                                    var t = l.decodeAddress(e.to);
                                    (S(s, e.coins),
                                      o.push({ address: t, coins: e.coins }));
                                  }),
                                  (c = {
                                    inputs: s,
                                    outputs: o,
                                    aminoPrefix: h.AminoPrefix.MsgSend,
                                  }),
                                  (f = [{ address: t, coins: [] }]),
                                  (p = []),
                                  r.forEach(function (e, t) {
                                    (p.push({ address: e.to, coins: [] }),
                                      e.coins.forEach(function (e) {
                                        p[t].coins.push(e);
                                      }),
                                      S(f, e.coins));
                                  }),
                                  (v = { inputs: f, outputs: p }),
                                  (e.next = 19),
                                  this._prepareTransaction(c, v, t, a, n)
                                );
                              case 19:
                                return (
                                  (m = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(m))
                                );
                              case 21:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "cancelOrder",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a,
                        i,
                        s,
                        o,
                        c,
                        d = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a =
                                    d.length > 3 && void 0 !== d[3]
                                      ? d[3]
                                      : null),
                                  (i = l.decodeAddress(t)),
                                  (s = {
                                    sender: i,
                                    symbol: r,
                                    refid: n,
                                    aminoPrefix: h.AminoPrefix.CancelOrderMsg,
                                  }),
                                  (o = { refid: n, sender: t, symbol: r }),
                                  (e.next = 6),
                                  this._prepareTransaction(s, o, t, a, "")
                                );
                              case 6:
                                return (
                                  (c = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(c))
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "placeOrder",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n,
                        a,
                        i,
                        s,
                        o,
                        c,
                        f,
                        p,
                        m,
                        b,
                        g,
                        w,
                        y = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    y.length > 0 && void 0 !== y[0]
                                      ? y[0]
                                      : this.address),
                                  (r = y.length > 1 ? y[1] : void 0),
                                  (n = y.length > 2 ? y[2] : void 0),
                                  (a = y.length > 3 ? y[3] : void 0),
                                  (i = y.length > 4 ? y[4] : void 0),
                                  (s =
                                    y.length > 5 && void 0 !== y[5]
                                      ? y[5]
                                      : null),
                                  (o =
                                    y.length > 6 && void 0 !== y[6] ? y[6] : 1),
                                  t)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error("address should not be falsy");
                              case 9:
                                if (r) {
                                  e.next = 11;
                                  break;
                                }
                                throw new Error("symbol should not be falsy");
                              case 11:
                                if (1 === n || 2 === n) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error("side can only be 1 or 2");
                              case 13:
                                if (1 === o || 3 === o) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(
                                  "timeinforce can only be 1 or 3",
                                );
                              case 15:
                                if (((c = l.decodeAddress(t)), 0 === s || s)) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.next = 19),
                                  this._httpClient.request(
                                    "get",
                                    "".concat(P.getAccount, "/").concat(t),
                                  )
                                );
                              case 19:
                                ((f = e.sent),
                                  (s = f.result && f.result.sequence));
                              case 21:
                                return (
                                  (p = new d["default"](a)),
                                  (m = new d["default"](i)),
                                  (b = {
                                    sender: c,
                                    id: ""
                                      .concat(c.toString("hex"), "-")
                                      .concat(s + 1)
                                      .toUpperCase(),
                                    symbol: r,
                                    ordertype: 2,
                                    side: n,
                                    price: parseFloat(p.mul(k).toString()),
                                    quantity: parseFloat(m.mul(k).toString()),
                                    timeinforce: o,
                                    aminoPrefix: h.AminoPrefix.NewOrderMsg,
                                  }),
                                  (g = {
                                    id: b.id,
                                    ordertype: b.ordertype,
                                    price: b.price,
                                    quantity: b.quantity,
                                    sender: t,
                                    side: b.side,
                                    symbol: b.symbol,
                                    timeinforce: o,
                                  }),
                                  (0, v.checkNumber)(b.price, "price"),
                                  (0, v.checkNumber)(b.quantity, "quantity"),
                                  (e.next = 29),
                                  this._prepareTransaction(b, g, t, s, "")
                                );
                              case 29:
                                return (
                                  (w = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(w))
                                );
                              case 31:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "list",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n, a, i) {
                      var s,
                        o,
                        c,
                        f,
                        p,
                        v,
                        m = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((s =
                                    m.length > 5 && void 0 !== m[5]
                                      ? m[5]
                                      : null),
                                  (o = l.decodeAddress(t)),
                                  t)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error("address should not be falsy");
                              case 4:
                                if (!(r <= 0)) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error(
                                  "proposal id should larger than 0",
                                );
                              case 6:
                                if (!(i <= 0)) {
                                  e.next = 8;
                                  break;
                                }
                                throw new Error("price should larger than 0");
                              case 8:
                                if (n) {
                                  e.next = 10;
                                  break;
                                }
                                throw new Error(
                                  "baseAsset should not be falsy",
                                );
                              case 10:
                                if (a) {
                                  e.next = 12;
                                  break;
                                }
                                throw new Error(
                                  "quoteAsset should not be falsy",
                                );
                              case 12:
                                return (
                                  (c = Number(
                                    new d["default"](i).mul(k).toString(),
                                  )),
                                  (f = {
                                    from: o,
                                    proposal_id: r,
                                    base_asset_symbol: n,
                                    quote_asset_symbol: a,
                                    init_price: c,
                                    aminoPrefix: h.AminoPrefix.ListMsg,
                                  }),
                                  (p = {
                                    base_asset_symbol: n,
                                    from: t,
                                    init_price: c,
                                    proposal_id: r,
                                    quote_asset_symbol: a,
                                  }),
                                  (e.next = 17),
                                  this._prepareTransaction(f, p, t, s, "")
                                );
                              case 17:
                                return (
                                  (v = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(v))
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n, a, i) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "listMiniToken",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r, n, a, i, s, o, c, l, f;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.from),
                                  (n = t.baseAsset),
                                  (a = t.quoteAsset),
                                  (i = t.initPrice),
                                  (s = t.sequence),
                                  (o = void 0 === s ? null : s),
                                  (0, g.validateMiniTokenSymbol)(n),
                                  !(i <= 0))
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error("price should larger than 0");
                              case 4:
                                if (r) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error("address should not be falsy");
                              case 6:
                                if (a) {
                                  e.next = 8;
                                  break;
                                }
                                throw new Error(
                                  "quoteAsset should not be falsy",
                                );
                              case 8:
                                return (
                                  (c = Number(
                                    new d["default"](i).mul(k).toString(),
                                  )),
                                  (l = new h.ListMiniMsg({
                                    from: r,
                                    base_asset_symbol: n,
                                    quote_asset_symbol: a,
                                    init_price: c,
                                  })),
                                  (e.next = 12),
                                  this._prepareTransaction(
                                    l.getMsg(),
                                    l.getSignMsg(),
                                    r,
                                    o,
                                  )
                                );
                              case 12:
                                return (
                                  (f = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(f))
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "setAccountFlags",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r) {
                      var n,
                        a,
                        i,
                        s,
                        o,
                        c = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    c.length > 2 && void 0 !== c[2]
                                      ? c[2]
                                      : null),
                                  (a = l.decodeAddress(t)),
                                  (i = {
                                    from: a,
                                    flags: r,
                                    aminoPrefix:
                                      h.AminoPrefix.SetAccountFlagsMsg,
                                  }),
                                  (s = { flags: r, from: t }),
                                  (e.next = 6),
                                  this._prepareTransaction(i, s, t, n, "")
                                );
                              case 6:
                                return (
                                  (o = e.sent),
                                  e.abrupt("return", this._broadcastDelegate(o))
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "_prepareTransaction",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a,
                        i,
                        s,
                        o,
                        c = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((a =
                                    c.length > 3 && void 0 !== c[3]
                                      ? c[3]
                                      : null),
                                  (i =
                                    c.length > 4 && void 0 !== c[4]
                                      ? c[4]
                                      : ""),
                                  (this.account_number && (0 === a || a)) || !n)
                                ) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  this._httpClient.request(
                                    "get",
                                    "".concat(P.getAccount, "/").concat(n),
                                  )
                                );
                              case 5:
                                ((s = e.sent),
                                  (a = s.result.sequence),
                                  (this.account_number =
                                    s.result.account_number),
                                  (e.next = 13));
                                break;
                              case 10:
                                if (!this._setPkPromise) {
                                  e.next = 13;
                                  break;
                                }
                                return ((e.next = 13), this._setPkPromise);
                              case 13:
                                return (
                                  (o = new f["default"]({
                                    accountNumber:
                                      "number" !== typeof this.account_number
                                        ? parseInt(this.account_number)
                                        : this.account_number,
                                    chainId: this.chainId,
                                    memo: i,
                                    msg: t,
                                    sequence:
                                      "number" !== typeof a ? parseInt(a) : a,
                                    source: this._source,
                                  })),
                                  e.abrupt(
                                    "return",
                                    this._signingDelegate.call(this, o, r),
                                  )
                                );
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "sendTransaction",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r) {
                      var n;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.serialize()),
                                  e.abrupt(
                                    "return",
                                    this.sendRawTransaction(n, r),
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "sendRawTransaction",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r,
                        n,
                        a = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r =
                                    a.length > 1 && void 0 !== a[1]
                                      ? a[1]
                                      : !this._useAsyncBroadcast),
                                  (n = {
                                    data: t,
                                    headers: { "content-type": "text/plain" },
                                  }),
                                  e.abrupt(
                                    "return",
                                    this._httpClient.request(
                                      "post",
                                      ""
                                        .concat(P.broadcast, "?sync=")
                                        .concat(r),
                                      null,
                                      n,
                                    ),
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "_sendTransaction",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a,
                        i,
                        s,
                        o,
                        c = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a =
                                    c.length > 3 && void 0 !== c[3]
                                      ? c[3]
                                      : null),
                                  (i =
                                    c.length > 4 && void 0 !== c[4]
                                      ? c[4]
                                      : ""),
                                  (s =
                                    c.length > 5 && void 0 !== c[5]
                                      ? c[5]
                                      : !this._useAsyncBroadcast),
                                  (e.next = 5),
                                  this._prepareTransaction(t, r, n, a, i)
                                );
                              case 5:
                                return (
                                  (o = e.sent),
                                  e.abrupt("return", this.sendTransaction(o, s))
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getAccount",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.address),
                                  t)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("address should not be falsy");
                              case 3:
                                return (
                                  (e.prev = 3),
                                  (e.next = 6),
                                  this._httpClient.request(
                                    "get",
                                    "".concat(P.getAccount, "/").concat(t),
                                  )
                                );
                              case 6:
                                return ((r = e.sent), e.abrupt("return", r));
                              case 10:
                                return (
                                  (e.prev = 10),
                                  (e.t0 = e["catch"](3)),
                                  e.abrupt("return", null)
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 10]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getBalance",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.address),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this.getAccount(t)
                                );
                              case 4:
                                return (
                                  (r = e.sent),
                                  e.abrupt("return", r.result.balances)
                                );
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e["catch"](1)),
                                  e.abrupt("return", [])
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getMarkets",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n,
                        a = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    a.length > 0 && void 0 !== a[0]
                                      ? a[0]
                                      : 1e3),
                                  (r =
                                    a.length > 1 && void 0 !== a[1] ? a[1] : 0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this._httpClient.request(
                                    "get",
                                    ""
                                      .concat(P.getMarkets, "?limit=")
                                      .concat(t, "&offset=")
                                      .concat(r),
                                  )
                                );
                              case 5:
                                return ((n = e.sent), e.abrupt("return", n));
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e["catch"](2)),
                                  console.warn("getMarkets error", e.t0),
                                  e.abrupt("return", [])
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getTransactions",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n,
                        a = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    a.length > 0 && void 0 !== a[0]
                                      ? a[0]
                                      : this.address),
                                  (r =
                                    a.length > 1 && void 0 !== a[1] ? a[1] : 0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this._httpClient.request(
                                    "get",
                                    ""
                                      .concat(P.getTransactions, "?address=")
                                      .concat(t, "&offset=")
                                      .concat(r),
                                  )
                                );
                              case 5:
                                return ((n = e.sent), e.abrupt("return", n));
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e["catch"](2)),
                                  console.warn("getTransactions error", e.t0),
                                  e.abrupt("return", [])
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getTxs",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n,
                        a,
                        i = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    i.length > 0 && void 0 !== i[0]
                                      ? i[0]
                                      : this.address),
                                  (r = i.length > 1 ? i[1] : void 0),
                                  (n = i.length > 2 ? i[2] : void 0),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  this._httpClient.request(
                                    "get",
                                    ""
                                      .concat(P.getTxs, "?address=")
                                      .concat(t, "&startTime=")
                                      .concat(r, "&endTime=")
                                      .concat(n),
                                  )
                                );
                              case 6:
                                return ((a = e.sent), e.abrupt("return", a));
                              case 10:
                                return (
                                  (e.prev = 10),
                                  (e.t0 = e["catch"](3)),
                                  console.warn("getTxs error", e.t0),
                                  e.abrupt("return", [])
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 10]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getTx",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this._httpClient.request(
                                    "get",
                                    "".concat(P.getTx, "/").concat(t),
                                  )
                                );
                              case 3:
                                return ((r = e.sent), e.abrupt("return", r));
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e["catch"](0)),
                                  console.warn("getTx error", e.t0),
                                  e.abrupt("return", [])
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 7]],
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getDepth",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : "BNB_BUSD-BD1"),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this._httpClient.request(
                                    "get",
                                    "".concat(P.getDepth, "?symbol=").concat(t),
                                  )
                                );
                              case 4:
                                return ((r = e.sent), e.abrupt("return", r));
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e["catch"](1)),
                                  console.warn("getDepth error", e.t0),
                                  e.abrupt("return", [])
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getOpenOrders",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e() {
                      var t,
                        r,
                        n = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.address),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this._httpClient.request(
                                    "get",
                                    ""
                                      .concat(P.getOpenOrders, "?address=")
                                      .concat(t),
                                  )
                                );
                              case 4:
                                return ((r = e.sent), e.abrupt("return", r));
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e["catch"](1)),
                                  console.warn("getOpenOrders error", e.t0),
                                  e.abrupt("return", [])
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]],
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getSwapByID",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this._httpClient.request(
                                    "get",
                                    "".concat(P.getSwaps, "/").concat(t),
                                  )
                                );
                              case 3:
                                return ((r = e.sent), e.abrupt("return", r));
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e["catch"](0)),
                                  console.warn(
                                    "query swap by swapID error",
                                    e.t0,
                                  ),
                                  e.abrupt("return", [])
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 7]],
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getSwapByCreator",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r,
                        n,
                        a,
                        i = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r =
                                    i.length > 1 && void 0 !== i[1]
                                      ? i[1]
                                      : 100),
                                  (n =
                                    i.length > 2 && void 0 !== i[2] ? i[2] : 0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this._httpClient.request(
                                    "get",
                                    ""
                                      .concat(P.getSwaps, "?fromAddress=")
                                      .concat(t, "&limit=")
                                      .concat(r, "&offset=")
                                      .concat(n),
                                  )
                                );
                              case 5:
                                return ((a = e.sent), e.abrupt("return", a));
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e["catch"](2)),
                                  console.warn(
                                    "query swap list by swap creator error",
                                    e.t0,
                                  ),
                                  e.abrupt("return", [])
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]],
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getSwapByRecipient",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r,
                        n,
                        a,
                        i = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r =
                                    i.length > 1 && void 0 !== i[1]
                                      ? i[1]
                                      : 100),
                                  (n =
                                    i.length > 2 && void 0 !== i[2] ? i[2] : 0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this._httpClient.request(
                                    "get",
                                    ""
                                      .concat(P.getSwaps, "?toAddress=")
                                      .concat(t, "&limit=")
                                      .concat(r, "&offset=")
                                      .concat(n),
                                  )
                                );
                              case 5:
                                return ((a = e.sent), e.abrupt("return", a));
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e["catch"](2)),
                                  console.warn(
                                    "query swap list by swap recipient error",
                                    e.t0,
                                  ),
                                  e.abrupt("return", [])
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]],
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "createAccount",
                value: function () {
                  var e = l.generatePrivateKey();
                  return {
                    privateKey: e,
                    address: l.getAddressFromPrivateKey(e, this.addressPrefix),
                  };
                },
              },
              {
                key: "createAccountWithKeystore",
                value: function (e) {
                  if (!e) throw new Error("password should not be falsy");
                  var t = l.generatePrivateKey(),
                    r = l.getAddressFromPrivateKey(t, this.addressPrefix),
                    n = l.generateKeyStore(t, e);
                  return { privateKey: t, address: r, keystore: n };
                },
              },
              {
                key: "createAccountWithMneomnic",
                value: function () {
                  var e = l.generateMnemonic(),
                    t = l.getPrivateKeyFromMnemonic(e),
                    r = l.getAddressFromPrivateKey(t, this.addressPrefix);
                  return { privateKey: t, address: r, mnemonic: e };
                },
              },
              {
                key: "recoverAccountFromKeystore",
                value: function (e, t) {
                  var r = l.getPrivateKeyFromKeyStore(e, t),
                    n = l.getAddressFromPrivateKey(r, this.addressPrefix);
                  return { privateKey: r, address: n };
                },
              },
              {
                key: "recoverAccountFromMnemonic",
                value: function (e) {
                  var t = l.getPrivateKeyFromMnemonic(e),
                    r = l.getAddressFromPrivateKey(t, this.addressPrefix);
                  return { privateKey: t, address: r };
                },
              },
              {
                key: "recoverAccountFromMneomnic",
                value: function (e) {
                  return this.recoverAccountFromMnemonic(e);
                },
              },
              {
                key: "recoverAccountFromPrivateKey",
                value: function (e) {
                  var t = l.getAddressFromPrivateKey(e, this.addressPrefix);
                  return { privateKey: e, address: t };
                },
              },
              {
                key: "checkAddress",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.addressPrefix;
                  return l.checkAddress(e, t);
                },
              },
              {
                key: "getClientKeyAddress",
                value: function () {
                  if (!this._privateKey)
                    throw new Error("no private key is set on this client");
                  var e = l.getAddressFromPrivateKey(
                    this._privateKey,
                    this.addressPrefix,
                  );
                  return ((this.address = e), e);
                },
              },
            ]),
            e
          );
        })();
      t.BncClient = O;
    },
    6429: function (e, t) {
      function r(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      ((r.keys = function () {
        return [];
      }),
        (r.resolve = r),
        (e.exports = r),
        (r.id = 6429));
    },
    8990: function (e, t, r) {
      "use strict";
      var n = r(9),
        a = r(2865);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BncClient", {
          enumerable: !0,
          get: function () {
            return s.BncClient;
          },
        }),
        Object.defineProperty(t, "ledger", {
          enumerable: !0,
          get: function () {
            return d["default"];
          },
        }),
        Object.defineProperty(t, "rpc", {
          enumerable: !0,
          get: function () {
            return l["default"];
          },
        }),
        Object.defineProperty(t, "Transaction", {
          enumerable: !0,
          get: function () {
            return f["default"];
          },
        }),
        (t.utils = t.types = t.crypto = t.amino = void 0),
        r(8991));
      var i = a(r(5430));
      t.amino = i;
      var s = r(6387),
        o = a(r(2894));
      t.crypto = o;
      var u = a(r(3382));
      t.types = u;
      var c = a(r(5432));
      t.utils = c;
      var d = n(r(9066)),
        l = n(r(9188)),
        f = n(r(6400));
    },
    8991: function (e, t, r) {},
    8992: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodeFieldNumberAndTyp3 =
            t.unMarshalBinaryBare =
            t.unMarshalBinaryLengthPrefixed =
              void 0));
        var a = n(r(128)),
          i = n(r(4517)),
          s = r(6386),
          o = n(r(5431));
        function u(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            (t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n));
          }
          return r;
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(r), !0).forEach(function (t) {
                  (0, a["default"])(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : u(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
          }
          return e;
        }
        var d = function (e, t) {
            var r = t.decode(e, 0),
              n = t.encodingLength(r);
            return { val: r, offset: n };
          },
          l = function (e, t) {
            if (0 === e.length)
              throw new TypeError("Cannot decode empty bytes");
            var r = d(e, s.varint),
              n = r.offset;
            if (n < 0)
              throw new Error(
                "Error reading msg byte-length prefix: got code ".concat(n),
              );
            return ((e = e.slice(n)), f(e, t));
          };
        t.unMarshalBinaryLengthPrefixed = l;
        var f = function (t, r) {
          if (!i["default"].object(r))
            throw new TypeError("type should be object");
          if (!e.isBuffer(t)) throw new TypeError("bytes must be buffer");
          if (i["default"].array(r)) {
            if (!i["default"].object(r[0]))
              throw new TypeError("type should be object");
            return m(t, r[0]);
          }
          return h(t, r);
        };
        t.unMarshalBinaryBare = f;
        var h = function (t, r, n) {
            return e.isBuffer(r)
              ? d(t, s.bytes)
              : i["default"].array(r)
                ? m(t, r)
                : i["default"].number(r)
                  ? d(t, s.varint)
                  : i["default"]["boolean"](r)
                    ? d(t, s.bool)
                    : i["default"].string(r)
                      ? d(t, s.string)
                      : i["default"].object(r)
                        ? v(t, r, n)
                        : void 0;
          },
          p = function (e, t) {
            (i["default"].object(e[t]) && (e[t] = null),
              i["default"].number(e[t]) && (e[t] = 0),
              i["default"]["boolean"](e[t]) && (e[t] = !1),
              i["default"].string(e[t]) && (e[t] = ""));
          },
          v = function (e, t, r) {
            var n = 0;
            if (r) {
              var a = d(e, s.varint),
                u = a.offset;
              ((e = e.slice(u)), (n += u));
            }
            t.aminoPrefix && ((e = e.slice(4)), (n += 4));
            var c = 0,
              l = Object.keys(t).filter(function (e) {
                return "aminoPrefix" !== e;
              });
            return (
              l.forEach(function (r, a) {
                if (i["default"].array(t[r])) {
                  var s = m(e, t[r][0]),
                    u = s.offset,
                    d = s.val;
                  ((n += u), (t[r] = d), (e = e.slice(u)));
                } else {
                  var l = b(e),
                    f = l.fieldNum,
                    v = l.typ;
                  if (a + 1 !== f || f < 0) return void p(t, r);
                  if (f <= c)
                    throw new Error(
                      "encountered fieldNum: "
                        .concat(f, ", but we have already seen fnum: ")
                        .concat(c),
                    );
                  if (((c = f), a + 1 !== f))
                    throw new Error("field number is not expected");
                  var g = (0, o["default"])(t[r]);
                  if (v !== g) throw new Error("field type is not expected");
                  e = e.slice(1);
                  var w = h(e, t[r], !0),
                    y = w.val,
                    _ = w.offset;
                  ((t[r] = y), (e = e.slice(_)), (n += _ + 1));
                }
              }),
              { val: t, offset: n }
            );
          },
          m = function (e, t) {
            var r = [],
              n = 0,
              a = b(e),
              i = a.fieldNum;
            while (1) {
              var s = b(e),
                o = s.fieldNum;
              if (o !== i || o < 0) break;
              if (((e = e.slice(1)), !(e.length > 0 && 0 === e.readUInt8(0)))) {
                var u = h(e, t, !0),
                  d = u.offset,
                  l = u.val;
                (r.push(c({}, l)), (e = e.slice(d + 1)), (n += d + 1), (i = o));
              }
            }
            return { val: r, offset: n };
          },
          b = function (e) {
            if (e.length < 2) return { fieldNum: -1 };
            var t = d(e, s.varint),
              r = t.val,
              n = 7 & r,
              a = r >> 3;
            if (a > 1 << 28) throw new Error("invalid field num ".concat(a));
            return { fieldNum: a, typ: n };
          };
        t.decodeFieldNumberAndTyp3 = b;
      }).call(this, r(2).Buffer);
    },
    8998: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          encodeNumber: !0,
          encodeBool: !0,
          encodeString: !0,
          encodeTime: !0,
          convertObjectToSignBytes: !0,
          marshalBinary: !0,
          marshalBinaryBare: !0,
          encodeBinary: !0,
          encodeBinaryByteArray: !0,
          encodeObjectBinary: !0,
          encodeArrayBinary: !0,
        };
        t.encodeArrayBinary =
          t.encodeObjectBinary =
          t.encodeBinaryByteArray =
          t.encodeBinary =
          t.marshalBinaryBare =
          t.marshalBinary =
          t.convertObjectToSignBytes =
          t.encodeTime =
          t.encodeString =
          t.encodeBool =
          t.encodeNumber =
            void 0;
        var i = n(r(383)),
          s = n(r(4517)),
          o = r(6386),
          u = n(r(5431)),
          c = r(8999);
        Object.keys(c).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(a, e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return c[e];
                },
              }));
        });
        var d = function e(t) {
            if (null === t) return null;
            if ("object" !== (0, i["default"])(t)) return t;
            if (Array.isArray(t)) return t.map(e);
            var r = Object.keys(t).sort(),
              n = {};
            return (
              r.forEach(function (r) {
                n[r] = e(t[r]);
              }),
              n
            );
          },
          l = function (e) {
            return c.UVarInt.encode(e);
          };
        t.encodeNumber = l;
        var f = function (e) {
          return e ? c.UVarInt.encode(1) : c.UVarInt.encode(0);
        };
        t.encodeBool = f;
        var h = function (t) {
          var r = e.alloc(o.string.encodingLength(t));
          return o.string.encode(t, r, 0);
        };
        t.encodeString = h;
        var p = function (t) {
          var r = new Date(t).getTime(),
            n = Math.floor(r / 1e3),
            a = Number(n.toString().padEnd(9, "0")),
            i = e.alloc(14);
          return (
            i.writeInt32LE(9, 0),
            i.writeUInt32LE(n, 1),
            i.writeInt32LE(21, 9),
            i.writeUInt32LE(a, 10),
            i
          );
        };
        t.encodeTime = p;
        var v = function (t) {
          return e.from(JSON.stringify(d(t)));
        };
        t.convertObjectToSignBytes = v;
        var m = function (e) {
          if (!s["default"].object(e))
            throw new TypeError("data must be an object");
          return g(e, -1, !0).toString("hex");
        };
        t.marshalBinary = m;
        var b = function (e) {
          if (!s["default"].object(e))
            throw new TypeError("data must be an object");
          return g(e).toString("hex");
        };
        t.marshalBinaryBare = b;
        var g = function (t, r, n) {
          if (null === t || void 0 === t)
            throw new TypeError("unsupported type");
          return e.isBuffer(t)
            ? n
              ? e.concat([c.UVarInt.encode(t.length), t])
              : t
            : s["default"].array(t)
              ? _(r, t, n)
              : s["default"].number(t)
                ? l(t)
                : s["default"]["boolean"](t)
                  ? f(t)
                  : s["default"].string(t)
                    ? h(t)
                    : s["default"].object(t)
                      ? y(t, n)
                      : void 0;
        };
        t.encodeBinary = g;
        var w = function (t) {
          var r = t.length;
          return e.concat([c.UVarInt.encode(r), t]);
        };
        t.encodeBinaryByteArray = w;
        var y = function (t, r) {
          var n = [];
          Object.keys(t).forEach(function (e, r) {
            "aminoPrefix" !== e &&
              "version" !== e &&
              (k(t[e]) ||
                (s["default"].array(t[e]) && t[e].length > 0
                  ? n.push(_(r, t[e]))
                  : (n.push(x(r, t[e])), n.push(g(t[e], r, !0)))));
          });
          var a = e.concat(n);
          if (t.aminoPrefix) {
            var i = e.from(t.aminoPrefix, "hex");
            a = e.concat([i, a]);
          }
          if (r) {
            var o = c.UVarInt.encode(a.length);
            a = e.concat([o, a]);
          }
          return a;
        };
        t.encodeObjectBinary = y;
        var _ = function (t, r, n) {
          var a = [];
          if (
            (r.forEach(function (r) {
              (a.push(x(t, r)),
                k(r) ? a.push(e.from("00", "hex")) : a.push(g(r, t, !0)));
            }),
            n)
          ) {
            var i = a.reduce(function (e, t) {
              return e + t.length;
            }, 0);
            a.unshift(c.UVarInt.encode(i));
          }
          return e.concat(a);
        };
        t.encodeArrayBinary = _;
        var x = function (e, t) {
            e = Number(e);
            var r = ((e + 1) << 3) | (0, u["default"])(t);
            return c.UVarInt.encode(r);
          },
          k = function (e) {
            return (
              null !== e &&
              ((s["default"].number(e) && 0 === e) ||
                (s["default"].string(e) && "" === e) ||
                (s["default"].array(e) && 0 === e.length) ||
                (s["default"]["boolean"](e) && !e))
            );
          };
      }).call(this, r(2).Buffer);
    },
    8999: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VarInt = t.UVarInt = void 0));
        var a = n(r(49));
        function i(t) {
          var r = function (e) {
              if ((t && (e *= 2), e < 0))
                throw Error("varint value is out of bounds");
              var r = Math.log2(e + 1);
              return Math.ceil(r / 7) || 1;
            },
            n = function (n, i, s) {
              if (n < 0) throw Error("varint value is out of bounds");
              ((i = i || e.alloc(r(n))), (s = s || 0));
              var o = n.toString(),
                u = new a["default"](o, 10),
                c = new a["default"](255),
                d = new a["default"](128);
              t && (u = u.muln(2));
              var l = 0;
              while (u.gten(128))
                ((i[s + l] = u.and(c).or(d).toNumber()), (u = u.shrn(7)), l++);
              return ((i[s + l] = u.andln(255)), i);
            },
            i = function (e) {
              for (var t = 0, r = 0, n = 0, a = e.length; n < a; n++) {
                var i = e[n];
                if (i < 128)
                  return n > 9 || (9 === n && i > 1) ? 0 : t | (i << r);
                ((t |= (127 & i) << r), (r += 7));
              }
              return 0;
            };
          return { encode: n, decode: i, encodingLength: r };
        }
        var s = i(!1);
        t.UVarInt = s;
        var o = i(!0);
        t.VarInt = o;
      }).call(this, r(2).Buffer);
    },
    9060: function (e, t, r) {
      "use strict";
      var n = r(2865),
        a = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = t.voteOption = void 0));
      var i = a(r(3170)),
        s = a(r(3171)),
        o = a(r(2834)),
        u = a(r(2839)),
        c = a(r(128)),
        d = a(r(159)),
        l = n(r(2894)),
        f = r(3382),
        h = r(4518),
        p = a(r(9061)),
        v = Math.pow(10, 8),
        m = {
          4: "ListTradingPair",
          0: "Nil",
          1: "Text",
          2: "ParameterChange",
          3: "SoftwareUpgrade",
          5: "FeeChange",
          6: "CreateValidator",
          7: "RemoveValidator",
        },
        b = {
          OptionEmpty: 0,
          OptionYes: 1,
          OptionAbstain: 2,
          OptionNo: 3,
          OptionNoWithVeto: 4,
        };
      t.voteOption = b;
      var g = { 0: "Empty", 1: "Yes", 2: "Abstain", 3: "No", 4: "NoWithVeto" },
        w = (function () {
          function e(t) {
            return (
              (0, o["default"])(this, e),
              (0, c["default"])(this, "_bncClient", void 0),
              e.instance || ((this._bncClient = t), (e.instance = this)),
              e.instance
            );
          }
          return (
            (0, u["default"])(e, [
              {
                key: "submitListProposal",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t) {
                      var r, n, a, s, o, u;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = {
                                    base_asset_symbol: t.baseAsset,
                                    quote_asset_symbol: t.quoteAsset,
                                    init_price: +new d["default"](t.initPrice)
                                      .mul(v)
                                      .toString(),
                                    description: t.description,
                                    expire_time: new Date(
                                      t.expireTime,
                                    ).toISOString(),
                                  }),
                                  (n = JSON.stringify(r)),
                                  (a = t.address),
                                  (s = t.title),
                                  (o = t.initialDeposit),
                                  (u = t.votingPeriod),
                                  (e.next = 5),
                                  this.submitProposal(
                                    a,
                                    s,
                                    n,
                                    p["default"].ProposalTypeListTradingPair,
                                    o,
                                    u,
                                  )
                                );
                              case 5:
                                return e.abrupt("return", e.sent);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "submitProposal",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n, a, s, o) {
                      var u, c, h, p, b;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (u = l.decodeAddress(t)),
                                  (c = [
                                    {
                                      denom: "BNB",
                                      amount: new d["default"](s)
                                        .mul(v)
                                        .toString(),
                                    },
                                  ]),
                                  (o = +new d["default"](o)
                                    .mul(Math.pow(10, 9))
                                    .toString()),
                                  (h = {
                                    title: r,
                                    description: n,
                                    proposal_type: a,
                                    proposer: u,
                                    initial_deposit: [
                                      {
                                        denom: "BNB",
                                        amount: +new d["default"](s)
                                          .mul(v)
                                          .toString(),
                                      },
                                    ],
                                    voting_period: o,
                                    aminoPrefix:
                                      f.AminoPrefix.MsgSubmitProposal,
                                  }),
                                  (p = {
                                    description: n,
                                    initial_deposit: c,
                                    proposal_type: m[a],
                                    proposer: t,
                                    title: r,
                                    voting_period: o.toString(),
                                  }),
                                  (e.next = 7),
                                  this._bncClient._prepareTransaction(h, p, t)
                                );
                              case 7:
                                return (
                                  (b = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(b),
                                  )
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n, a, i, s) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deposit",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n) {
                      var a, s, o, u, c;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = l.decodeAddress(r)),
                                  (0, h.checkCoins)(n),
                                  (s = []),
                                  n.forEach(function (e) {
                                    s.push({
                                      denom: e.denom,
                                      amount: +new d["default"](e.amount)
                                        .mul(v)
                                        .toString(),
                                    });
                                  }),
                                  (o = {
                                    proposal_id: t,
                                    depositer: a,
                                    amount: s,
                                    aminoPrefix: f.AminoPrefix.MsgDeposit,
                                  }),
                                  (u = {
                                    amount: s.map(function (e) {
                                      return {
                                        denom: e.denom,
                                        amount: String(e.amount),
                                      };
                                    }),
                                    depositer: r,
                                    proposal_id: String(t),
                                  }),
                                  (e.next = 8),
                                  this._bncClient._prepareTransaction(o, u, r)
                                );
                              case 8:
                                return (
                                  (c = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(c),
                                  )
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "vote",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n) {
                      var a, s, o, u;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = l.decodeAddress(r)),
                                  (s = {
                                    proposal_id: t,
                                    voter: a,
                                    option: n,
                                    aminoPrefix: f.AminoPrefix.MsgVote,
                                  }),
                                  (o = {
                                    option: g[n],
                                    proposal_id: String(t),
                                    voter: r,
                                  }),
                                  (e.next = 5),
                                  this._bncClient._prepareTransaction(s, o, r)
                                );
                              case 5:
                                return (
                                  (u = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(u),
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })();
      (0, c["default"])(w, "instance", void 0);
      var y = w;
      t["default"] = y;
    },
    9061: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = void 0));
      var n = 0,
        a = 1,
        i = 2,
        s = 3,
        o = 4,
        u = 5,
        c = 6,
        d = 7,
        l = {
          ProposalTypeNil: n,
          ProposalTypeText: a,
          ProposalTypeParameterChange: i,
          ProposalTypeSoftwareUpgrade: s,
          ProposalTypeListTradingPair: o,
          ProposalTypeFeeChange: u,
          ProposalTypeCreateValidator: c,
          ProposalTypeRemoveValidator: d,
        };
      t["default"] = l;
    },
    9062: function (e, t, r) {
      "use strict";
      var n = r(2865),
        a = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = void 0));
      var i = a(r(3170)),
        s = a(r(3171)),
        o = a(r(2834)),
        u = a(r(2839)),
        c = a(r(128)),
        d = r(2),
        l = n(r(2894)),
        f = r(3382),
        h = r(4518),
        p = (function () {
          function e(t) {
            return (
              (0, o["default"])(this, e),
              (0, c["default"])(this, "_bncClient", void 0),
              e.instance || ((this._bncClient = t), (e.instance = this)),
              e.instance
            );
          }
          return (
            (0, u["default"])(e, [
              {
                key: "HTLT",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n, a, s, o, u, c, p, v) {
                      var m, b, g;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, h.checkCoins)(u),
                                  (m = {
                                    from: l.decodeAddress(t),
                                    to: l.decodeAddress(r),
                                    recipient_other_chain: n,
                                    sender_other_chain: a,
                                    random_number_hash: d.Buffer.from(s, "hex"),
                                    timestamp: o,
                                    amount: u,
                                    expected_income: c,
                                    height_span: p,
                                    cross_chain: v,
                                    aminoPrefix: f.AminoPrefix.HTLTMsg,
                                  }),
                                  (b = {
                                    from: t,
                                    to: r,
                                    recipient_other_chain: n,
                                    sender_other_chain: a,
                                    random_number_hash: s,
                                    timestamp: o,
                                    amount: u,
                                    expected_income: c,
                                    height_span: p,
                                    cross_chain: v,
                                  }),
                                  (e.next = 5),
                                  this._bncClient._prepareTransaction(m, b, t)
                                );
                              case 5:
                                return (
                                  (g = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(g),
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n, a, i, s, o, u, c, d) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "depositHTLT",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n) {
                      var a, s, o;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, h.checkCoins)(n),
                                  (a = {
                                    from: l.decodeAddress(t),
                                    amount: n,
                                    swap_id: d.Buffer.from(r, "hex"),
                                    aminoPrefix: f.AminoPrefix.DepositHTLTMsg,
                                  }),
                                  (s = { from: t, amount: n, swap_id: r }),
                                  (e.next = 5),
                                  this._bncClient._prepareTransaction(a, s, t)
                                );
                              case 5:
                                return (
                                  (o = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(o),
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "claimHTLT",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n) {
                      var a, s, o;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = {
                                    from: l.decodeAddress(t),
                                    swap_id: d.Buffer.from(r, "hex"),
                                    random_number: d.Buffer.from(n, "hex"),
                                    aminoPrefix: f.AminoPrefix.ClaimHTLTMsg,
                                  }),
                                  (s = {
                                    from: t,
                                    swap_id: r,
                                    random_number: n,
                                  }),
                                  (e.next = 4),
                                  this._bncClient._prepareTransaction(a, s, t)
                                );
                              case 4:
                                return (
                                  (o = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(o),
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "refundHTLT",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r) {
                      var n, a, s;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    from: l.decodeAddress(t),
                                    swap_id: d.Buffer.from(r, "hex"),
                                    aminoPrefix: f.AminoPrefix.RefundHTLTMsg,
                                  }),
                                  (a = { from: t, swap_id: r }),
                                  (e.next = 4),
                                  this._bncClient._prepareTransaction(n, a, t)
                                );
                              case 4:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(s),
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })();
      (0, c["default"])(p, "instance", void 0);
      var v = p;
      t["default"] = v;
    },
    9063: function (e, t, r) {
      "use strict";
      var n = r(2865),
        a = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = t.validateMiniTokenSymbol = void 0));
      var i = a(r(2834)),
        s = a(r(2839)),
        o = a(r(128)),
        u = a(r(3170)),
        c = a(r(3171)),
        d = a(r(159)),
        l = r(6387),
        f = n(r(2894)),
        h = r(3382),
        p = r(4518),
        v = 9e18,
        m = 1e6,
        b = 1e4,
        g = (function () {
          var e = (0, c["default"])(
            u["default"].mark(function e(t, r, n, a) {
              var i,
                s,
                o,
                c,
                f,
                h = arguments;
              return u["default"].wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((i =
                            h.length > 4 && void 0 !== h[4] ? h[4] : "free"),
                          (s = new d["default"](t)),
                          !s.lte(0) && !s.gt(v))
                        ) {
                          e.next = 4;
                          break;
                        }
                        throw new Error("invalid amount");
                      case 4:
                        return (
                          (e.prev = 4),
                          (e.next = 7),
                          a.request(
                            "get",
                            "".concat(l.api.getAccount, "/").concat(n),
                          )
                        );
                      case 7:
                        if (
                          ((o = e.sent),
                          (c = o.result),
                          (f = c.balances.find(function (e) {
                            return e.symbol.toUpperCase() === r.toUpperCase();
                          })),
                          f)
                        ) {
                          e.next = 12;
                          break;
                        }
                        throw new Error("the account doesn't have ".concat(r));
                      case 12:
                        if (!s.gte(f[i])) {
                          e.next = 14;
                          break;
                        }
                        throw new Error(
                          "the account doesn't have enougth balance",
                        );
                      case 14:
                        e.next = 18;
                        break;
                      case 16:
                        ((e.prev = 16), (e.t0 = e["catch"](4)));
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 16]],
              );
            }),
          );
          return function (t, r, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        w = function (e) {
          if (!e) throw new Error("suffixed token symbol cannot be empty");
          var t = e.split("-");
          if (2 != t.length)
            throw new Error(
              "suffixed mini-token symbol must contain a hyphen ('-')",
            );
          if (!t[1])
            throw new Error(
              'suffixed mini-token symbol must contain just one hyphen (" - ")',
            );
          if (!/^[a-zA-z\d]{3,8}$/.test(t[0]))
            throw new Error(
              "symbol should be alphanumeric and length is limited to 3~8",
            );
          if (!t[1].endsWith("M"))
            throw new Error("mini-token symbol suffix must end with M");
        };
      t.validateMiniTokenSymbol = w;
      var y = (function () {
          function e(t) {
            ((0, i["default"])(this, e),
              (0, o["default"])(this, "_bncClient", void 0),
              (this._bncClient = t));
          }
          return (
            (0, s["default"])(e, [
              {
                key: "issue",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a,
                        i,
                        s,
                        o,
                        c,
                        l = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((a =
                                    l.length > 3 && void 0 !== l[3] ? l[3] : 0),
                                  (i = l.length > 4 && void 0 !== l[4] && l[4]),
                                  t)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "sender address cannot be empty",
                                );
                              case 4:
                                if (!(r.length > 32)) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error(
                                  "token name is limited to 32 characters",
                                );
                              case 6:
                                if (/^[a-zA-z\d]{3,8}$/.test(n)) {
                                  e.next = 8;
                                  break;
                                }
                                throw new Error(
                                  "symbol should be alphanumeric and length is limited to 3~8",
                                );
                              case 8:
                                if (!(a <= 0 || a > v)) {
                                  e.next = 10;
                                  break;
                                }
                                throw new Error("invalid supply amount");
                              case 10:
                                return (
                                  (a = Number(
                                    new d["default"](a)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (s = {
                                    from: f.decodeAddress(t),
                                    name: r,
                                    symbol: n,
                                    total_supply: a,
                                    mintable: i,
                                    aminoPrefix: h.AminoPrefix.IssueMsg,
                                  }),
                                  (o = {
                                    from: t,
                                    name: r,
                                    symbol: n,
                                    total_supply: a,
                                    mintable: i,
                                  }),
                                  (e.next = 15),
                                  this._bncClient._prepareTransaction(s, o, t)
                                );
                              case 15:
                                return (
                                  (c = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(c),
                                  )
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "issueMiniToken",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a,
                        i,
                        s,
                        o,
                        c,
                        l = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((a =
                                    l.length > 3 && void 0 !== l[3] ? l[3] : 0),
                                  (i = l.length > 4 && void 0 !== l[4] && l[4]),
                                  (s = l.length > 5 ? l[5] : void 0),
                                  t)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "sender address cannot be empty",
                                );
                              case 5:
                                if (!(r.length > 32)) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "token name is limited to 32 characters",
                                );
                              case 7:
                                if (/^[a-zA-z\d]{3,8}$/.test(n)) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error(
                                  "symbol should be alphanumeric and length is limited to 3~8",
                                );
                              case 9:
                                if (!(a <= 0 || a > m)) {
                                  e.next = 11;
                                  break;
                                }
                                throw new Error("invalid supply amount");
                              case 11:
                                return (
                                  (a = Number(
                                    new d["default"](a)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (o = new h.IssueMiniTokenMsg({
                                    name: r,
                                    symbol: n,
                                    total_supply: a,
                                    mintable: i,
                                    token_uri: s,
                                    from: t,
                                  })),
                                  (e.next = 15),
                                  this._bncClient._prepareTransaction(
                                    o.getMsg(),
                                    o.getSignMsg(),
                                    t,
                                  )
                                );
                              case 15:
                                return (
                                  (c = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(c),
                                  )
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "issueTinyToken",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a,
                        i,
                        s,
                        o,
                        c,
                        l = arguments;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((a =
                                    l.length > 3 && void 0 !== l[3] ? l[3] : 0),
                                  (i = l.length > 4 && void 0 !== l[4] && l[4]),
                                  (s = l.length > 5 ? l[5] : void 0),
                                  t)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "sender address cannot be empty",
                                );
                              case 5:
                                if (!(r.length > 32)) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "token name is limited to 32 characters",
                                );
                              case 7:
                                if (/^[a-zA-z\d]{3,8}$/.test(n)) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error(
                                  "symbol should be alphanumeric and length is limited to 3~8",
                                );
                              case 9:
                                if (!(a <= 0 || a > b)) {
                                  e.next = 11;
                                  break;
                                }
                                throw new Error("invalid supply amount");
                              case 11:
                                return (
                                  (a = Number(
                                    new d["default"](a)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (o = new h.IssueTinyTokenMsg({
                                    name: r,
                                    symbol: n,
                                    total_supply: a,
                                    mintable: i,
                                    token_uri: s,
                                    from: t,
                                  })),
                                  (e.next = 15),
                                  this._bncClient._prepareTransaction(
                                    o.getMsg(),
                                    o.getSignMsg(),
                                    t,
                                  )
                                );
                              case 15:
                                return (
                                  (c = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(c),
                                  )
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "setTokenUri",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t) {
                      var r, n, a, i, s;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.fromAddress),
                                  (n = t.tokenUri),
                                  (a = t.symbol),
                                  w(a),
                                  !(n.length > 2048))
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "uri cannot be longer than 2048 characters",
                                );
                              case 4:
                                if (r) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error("address cannot be empty");
                              case 6:
                                return (
                                  (i = new h.SetTokenUriMsg({
                                    from: r,
                                    token_uri: n,
                                    symbol: a,
                                  })),
                                  (e.next = 9),
                                  this._bncClient._prepareTransaction(
                                    i.getMsg(),
                                    i.getSignMsg(),
                                    r,
                                  )
                                );
                              case 9:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(s),
                                  )
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "freeze",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a, i, s;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, p.validateSymbol)(r),
                                  g(
                                    n,
                                    r,
                                    t,
                                    this._bncClient._httpClient,
                                    "free",
                                  ),
                                  (n = +Number(
                                    new d["default"](n)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (a = {
                                    from: f.decodeAddress(t),
                                    symbol: r,
                                    amount: n,
                                    aminoPrefix: h.AminoPrefix.FreezeMsg,
                                  }),
                                  (i = { amount: n, from: t, symbol: r }),
                                  (e.next = 7),
                                  this._bncClient._prepareTransaction(a, i, t)
                                );
                              case 7:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(s),
                                  )
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "unfreeze",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a, i, s;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, p.validateSymbol)(r),
                                  g(
                                    n,
                                    r,
                                    t,
                                    this._bncClient._httpClient,
                                    "frozen",
                                  ),
                                  (n = +Number(
                                    new d["default"](n)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (a = {
                                    from: f.decodeAddress(t),
                                    symbol: r,
                                    amount: n,
                                    aminoPrefix: h.AminoPrefix.UnfreezeMsg,
                                  }),
                                  (i = { amount: n, from: t, symbol: r }),
                                  (e.next = 7),
                                  this._bncClient._prepareTransaction(a, i, t)
                                );
                              case 7:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(s),
                                  )
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "burn",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a, i, s;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, p.validateSymbol)(r),
                                  g(n, r, t, this._bncClient._httpClient),
                                  (n = +Number(
                                    new d["default"](n)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (a = {
                                    from: f.decodeAddress(t),
                                    symbol: r,
                                    amount: n,
                                    aminoPrefix: h.AminoPrefix.BurnMsg,
                                  }),
                                  (i = { amount: n, from: t, symbol: r }),
                                  (e.next = 7),
                                  this._bncClient._prepareTransaction(a, i, t)
                                );
                              case 7:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(s),
                                  )
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "mint",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n) {
                      var a, i, s;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((0, p.validateSymbol)(r), !(n <= 0 || n > v))
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("invalid amount");
                              case 3:
                                return (
                                  (n = Number(
                                    new d["default"](n)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (a = {
                                    from: f.decodeAddress(t),
                                    symbol: r,
                                    amount: n,
                                    aminoPrefix: h.AminoPrefix.MintMsg,
                                  }),
                                  (i = { amount: n, from: t, symbol: r }),
                                  (e.next = 8),
                                  this._bncClient._prepareTransaction(a, i, t)
                                );
                              case 8:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(s),
                                  )
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "timeLock",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n, a) {
                      var i, s, o;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((0, p.checkCoins)(n), !(r.length > 128))) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("description is too long");
                              case 3:
                                if (!(a < 60 || a > 253402300800)) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "timeTime must be in [60, 253402300800]",
                                );
                              case 5:
                                return (
                                  (i = {
                                    from: f.decodeAddress(t),
                                    description: r,
                                    amount: n,
                                    lock_time: a,
                                    aminoPrefix: h.AminoPrefix.TimeLockMsg,
                                  }),
                                  (s = {
                                    from: t,
                                    description: r,
                                    amount: n,
                                    lock_time: a,
                                  }),
                                  (e.next = 9),
                                  this._bncClient._prepareTransaction(i, s, t)
                                );
                              case 9:
                                return (
                                  (o = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(o),
                                  )
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n, a) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "timeRelock",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r, n, a, i) {
                      var s, o, c;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((0, p.checkCoins)(a), !(n.length > 128))) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("description is too long");
                              case 3:
                                if (!(i < 60 || i > 253402300800)) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "timeTime must be in [60, 253402300800]",
                                );
                              case 5:
                                return (
                                  (s = {
                                    from: f.decodeAddress(t),
                                    time_lock_id: r,
                                    description: n,
                                    amount: a,
                                    lock_time: i,
                                    aminoPrefix: h.AminoPrefix.TimeRelockMsg,
                                  }),
                                  (o = {
                                    from: t,
                                    time_lock_id: r,
                                    description: n,
                                    amount: a,
                                    lock_time: i,
                                  }),
                                  (e.next = 9),
                                  this._bncClient._prepareTransaction(s, o, t)
                                );
                              case 9:
                                return (
                                  (c = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(c),
                                  )
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n, a, i) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "timeUnlock",
                value: (function () {
                  var e = (0, c["default"])(
                    u["default"].mark(function e(t, r) {
                      var n, a, i;
                      return u["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    from: f.decodeAddress(t),
                                    time_lock_id: r,
                                    aminoPrefix: h.AminoPrefix.TimeUnlockMsg,
                                  }),
                                  (a = { from: t, time_lock_id: r }),
                                  (e.next = 4),
                                  this._bncClient._prepareTransaction(n, a, t)
                                );
                              case 4:
                                return (
                                  (i = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(i),
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })(),
        _ = y;
      t["default"] = _;
    },
    9064: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bridge = void 0));
        var a = n(r(3170)),
          i = n(r(3171)),
          s = n(r(2834)),
          o = n(r(2839)),
          u = n(r(128)),
          c = r(2894),
          d = r(3382),
          l = (function () {
            function t(e) {
              ((0, s["default"])(this, t),
                (0, u["default"])(this, "_bncClient", void 0),
                (this._bncClient = e));
            }
            return (
              (0, o["default"])(t, [
                {
                  key: "transferIn",
                  value: (function () {
                    var t = (0, i["default"])(
                      a["default"].mark(function t(r) {
                        var n, i, s, o, u, l, f, h, p, v, m, b;
                        return a["default"].wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.sequence),
                                    (i = r.contract_address),
                                    (s = r.refund_addresses),
                                    (o = r.receiver_addresses),
                                    (u = r.amounts),
                                    (l = r.relay_fee),
                                    (f = r.expire_time),
                                    (h = r.symbol),
                                    (p = r.fromAddress),
                                    !(n < 0))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "sequence should not be less than 0",
                                  );
                                case 3:
                                  if (i) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "contract address should not be empty",
                                  );
                                case 5:
                                  if (l) {
                                    t.next = 7;
                                    break;
                                  }
                                  throw new Error(
                                    "relay fee should not be empty",
                                  );
                                case 7:
                                  if (h) {
                                    t.next = 9;
                                    break;
                                  }
                                  throw new Error("symbol should not be null");
                                case 9:
                                  if (
                                    (0, c.checkAddress)(
                                      p,
                                      this._bncClient.addressPrefix,
                                    )
                                  ) {
                                    t.next = 11;
                                    break;
                                  }
                                  throw new Error(
                                    "fromAddress is not a valid Binance Chain address",
                                  );
                                case 11:
                                  if (
                                    s.length == o.length &&
                                    s.length == u.length
                                  ) {
                                    t.next = 13;
                                    break;
                                  }
                                  throw new Error(
                                    "the length of refund address array, recipient address array and transfer amount array must be the same",
                                  );
                                case 13:
                                  return (
                                    (v = o.map(function (e) {
                                      var t = e.startsWith("tbnb")
                                        ? "tbnb"
                                        : "bnb";
                                      if (!(0, c.checkAddress)(e, t))
                                        throw new Error(
                                          "".concat(
                                            e,
                                            " in receiver_addresses is not a valid Binance Chain address",
                                          ),
                                        );
                                      return (0, c.decodeAddress)(e);
                                    })),
                                    (m = s.map(function (t) {
                                      if (!t.startsWith("0x"))
                                        throw new Error(
                                          "".concat(t, " is invalid"),
                                        );
                                      return e.from(t.slice(2), "hex");
                                    })),
                                    (b = e
                                      .from(
                                        JSON.stringify({
                                          contract_address: i,
                                          refund_addresses: m,
                                          receiver_addresses: v,
                                          amounts: u,
                                          symbol: h,
                                          relay_fee: l,
                                          expire_time: f,
                                        }),
                                      )
                                      .toString("hex")),
                                    t.abrupt(
                                      "return",
                                      this.buildClaimAndBroadcast({
                                        claimHex: b,
                                        claim_type:
                                          d.ClaimTypes.ClaimTypeTransferIn,
                                        fromAddress: p,
                                        sequence: n,
                                      }),
                                    )
                                  );
                                case 17:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function r(e) {
                      return t.apply(this, arguments);
                    }
                    return r;
                  })(),
                },
                {
                  key: "transferOutRefund",
                  value: (function () {
                    var t = (0, i["default"])(
                      a["default"].mark(function t(r) {
                        var n, i, s, o, u, l;
                        return a["default"].wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.transfer_out_sequence),
                                    (i = r.refund_address),
                                    (s = r.refund_reason),
                                    (o = r.amount),
                                    (u = r.fromAddress),
                                    !(n < 0))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "sequence should not be less than 0",
                                  );
                                case 3:
                                  if (o) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw new Error("amount should not be empty");
                                case 5:
                                  if (s) {
                                    t.next = 7;
                                    break;
                                  }
                                  throw new Error("empty refund reason");
                                case 7:
                                  if (
                                    (0, c.checkAddress)(
                                      u,
                                      this._bncClient.addressPrefix,
                                    )
                                  ) {
                                    t.next = 9;
                                    break;
                                  }
                                  throw new Error(
                                    "fromAddress is not a valid Binance Chain address",
                                  );
                                case 9:
                                  return (
                                    (l = e
                                      .from(
                                        JSON.stringify({
                                          transfer_out_sequence: n,
                                          refund_address: i,
                                          amount: o,
                                          refund_reason: s,
                                        }),
                                      )
                                      .toString("hex")),
                                    t.abrupt(
                                      "return",
                                      this.buildClaimAndBroadcast({
                                        claimHex: l,
                                        claim_type:
                                          d.ClaimTypes
                                            .ClaimTypeTransferOutRefund,
                                        sequence: n,
                                        fromAddress: u,
                                      }),
                                    )
                                  );
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function r(e) {
                      return t.apply(this, arguments);
                    }
                    return r;
                  })(),
                },
                {
                  key: "bind",
                  value: (function () {
                    var e = (0, i["default"])(
                      a["default"].mark(function e(t) {
                        var r, n, i, s, o, u, l;
                        return a["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = t.contractAddress),
                                    (n = t.contractDecimal),
                                    (i = t.amount),
                                    (s = t.symbol),
                                    (o = t.expireTime),
                                    (u = t.fromAddress),
                                    (0, c.checkAddress)(
                                      u,
                                      this._bncClient.addressPrefix,
                                    ))
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "fromAddress is not a valid Binance Chain address",
                                  );
                                case 3:
                                  if (r.startsWith("0x")) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    'contractAddress "'.concat(
                                      r,
                                      '" is invalid',
                                    ),
                                  );
                                case 5:
                                  return (
                                    (l = new d.BindMsg({
                                      from: u,
                                      amount: i,
                                      contract_address: r,
                                      contract_decimals: n,
                                      expire_time: o,
                                      symbol: s,
                                    })),
                                    (e.next = 8),
                                    this.broadcast(l, u)
                                  );
                                case 8:
                                  return e.abrupt("return", e.sent);
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "transferFromBcToBsc",
                  value: (function () {
                    var e = (0, i["default"])(
                      a["default"].mark(function e(t) {
                        var r, n, i, s, o, u;
                        return a["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = t.toAddress),
                                    (n = t.amount),
                                    (i = t.symbol),
                                    (s = t.expireTime),
                                    (o = t.fromAddress),
                                    (0, c.checkAddress)(
                                      o,
                                      this._bncClient.addressPrefix,
                                    ))
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "fromAddress is not a valid Binance Chain address",
                                  );
                                case 3:
                                  if (r.startsWith("0x")) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    'toAddress "'.concat(r, '" is invalid'),
                                  );
                                case 5:
                                  return (
                                    (u = new d.TransferOutMsg({
                                      from: o,
                                      to: r,
                                      amount: { denom: i, amount: n },
                                      expire_time: s,
                                    })),
                                    e.abrupt("return", this.broadcast(u, o))
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "upateBind",
                  value: (function () {
                    var t = (0, i["default"])(
                      a["default"].mark(function t(r) {
                        var n, i, s, o, u, l;
                        return a["default"].wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.sequence),
                                    (i = r.contract_address),
                                    (s = r.symbol),
                                    (o = r.status),
                                    (u = r.fromAddress),
                                    (0, c.checkAddress)(
                                      u,
                                      this._bncClient.addressPrefix,
                                    ))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "fromAddress is not a valid Binance Chain address",
                                  );
                                case 3:
                                  if (i.startsWith("0x")) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    'toAddress "'.concat(i, '" is invalid'),
                                  );
                                case 5:
                                  return (
                                    (l = e
                                      .from(
                                        JSON.stringify({
                                          status: o,
                                          symbol: s,
                                          contract_address: i,
                                        }),
                                      )
                                      .toString("hex")),
                                    t.abrupt(
                                      "return",
                                      this.buildClaimAndBroadcast({
                                        claimHex: l,
                                        sequence: n,
                                        fromAddress: u,
                                        claim_type:
                                          d.ClaimTypes.ClaimTypeUpdateBind,
                                      }),
                                    )
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function r(e) {
                      return t.apply(this, arguments);
                    }
                    return r;
                  })(),
                },
                {
                  key: "skipSequence",
                  value: (function () {
                    var t = (0, i["default"])(
                      a["default"].mark(function t(r) {
                        var n, i, s, o;
                        return a["default"].wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.sequence),
                                    (i = r.sequenceToSkip),
                                    (s = r.fromAddress),
                                    !(n < 0))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "sequence should not be less than 0",
                                  );
                                case 3:
                                  if (
                                    (0, c.checkAddress)(
                                      s,
                                      this._bncClient.addressPrefix,
                                    )
                                  ) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "fromAddress is not a valid Binance Chain address",
                                  );
                                case 5:
                                  return (
                                    (o = e
                                      .from(
                                        JSON.stringify({
                                          claim_type:
                                            d.ClaimTypes.ClaimTypeUpdateBind,
                                          sequence: i,
                                        }),
                                      )
                                      .toString("hex")),
                                    t.abrupt(
                                      "return",
                                      this.buildClaimAndBroadcast({
                                        claimHex: o,
                                        sequence: n,
                                        fromAddress: s,
                                        claim_type:
                                          d.ClaimTypes.ClaimTypeSkipSequence,
                                      }),
                                    )
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function r(e) {
                      return t.apply(this, arguments);
                    }
                    return r;
                  })(),
                },
                {
                  key: "buildClaimAndBroadcast",
                  value: (function () {
                    var e = (0, i["default"])(
                      a["default"].mark(function e(t) {
                        var r, n, i, s, o;
                        return a["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = t.claimHex),
                                    (n = t.claim_type),
                                    (i = t.sequence),
                                    (s = t.fromAddress),
                                    (o = new d.ClaimMsg({
                                      claim_type: n,
                                      sequence: i,
                                      claim: r,
                                      validator_address: s,
                                    })),
                                    (e.next = 4),
                                    this.broadcast(o, s, i)
                                  );
                                case 4:
                                  return e.abrupt("return", e.sent);
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "broadcast",
                  value: (function () {
                    var e = (0, i["default"])(
                      a["default"].mark(function e(t, r, n) {
                        var i;
                        return a["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this._bncClient._prepareTransaction(
                                      t.getMsg(),
                                      t.getSignMsg(),
                                      r,
                                      n,
                                    )
                                  );
                                case 2:
                                  return (
                                    (i = e.sent),
                                    e.abrupt(
                                      "return",
                                      this._bncClient._broadcastDelegate(i),
                                    )
                                  );
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t(t, r, n) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
              ]),
              t
            );
          })();
        t.Bridge = l;
      }).call(this, r(2).Buffer);
    },
    9065: function (e, t, r) {
      "use strict";
      var n = r(2865),
        a = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Stake = void 0));
      var i = a(r(3170)),
        s = a(r(3171)),
        o = a(r(2834)),
        u = a(r(2839)),
        c = a(r(128)),
        d = a(r(159)),
        l = n(r(2894)),
        f = r(3382),
        h = (function () {
          function e(t) {
            ((0, o["default"])(this, e),
              (0, c["default"])(this, "_bncClient", void 0),
              (this._bncClient = t));
          }
          return (
            (0, u["default"])(e, [
              {
                key: "bscDelegate",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t) {
                      var r, n, a, s, o, u, c, h;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.delegateAddress),
                                  (n = t.validatorAddress),
                                  (a = t.amount),
                                  (s = t.symbol),
                                  (o = void 0 === s ? "BNB" : s),
                                  (u = t.sideChainId),
                                  (c = void 0 === u ? "chapel" : u),
                                  a)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("amount should not be empty");
                              case 3:
                                if (r) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "delegate address should not be null",
                                );
                              case 5:
                                if (l.checkAddress(n, "bva")) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "validator address is not valid",
                                );
                              case 7:
                                return (
                                  (a = Number(
                                    new d["default"](a)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (h = new f.BscDelegateMsg({
                                    delegator_addr: r,
                                    validator_addr: n,
                                    delegation: { denom: o, amount: a },
                                    side_chain_id: c,
                                  })),
                                  (e.next = 11),
                                  this.broadcast(h, r)
                                );
                              case 11:
                                return e.abrupt("return", e.sent);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "bscUndelegate",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t) {
                      var r, n, a, s, o, u, c, h;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.delegateAddress),
                                  (n = t.validatorAddress),
                                  (a = t.amount),
                                  (s = t.symbol),
                                  (o = void 0 === s ? "BNB" : s),
                                  (u = t.sideChainId),
                                  (c = void 0 === u ? "chapel" : u),
                                  a)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("amount should not be empty");
                              case 3:
                                if (r) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "delegate address should not be null",
                                );
                              case 5:
                                if (l.checkAddress(n, "bva")) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "validator address is not valid",
                                );
                              case 7:
                                return (
                                  (a = Number(
                                    new d["default"](a)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (h = new f.BscUndelegateMsg({
                                    delegator_addr: r,
                                    validator_addr: n,
                                    amount: { denom: o, amount: a },
                                    side_chain_id: c,
                                  })),
                                  (e.next = 11),
                                  this.broadcast(h, r)
                                );
                              case 11:
                                return e.abrupt("return", e.sent);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "bscReDelegate",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t) {
                      var r, n, a, s, o, u, c, h, p;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.delegateAddress),
                                  (n = t.validatorSrcAddress),
                                  (a = t.validatorDstAddress),
                                  (s = t.amount),
                                  (o = t.symbol),
                                  (u = void 0 === o ? "BNB" : o),
                                  (c = t.sideChainId),
                                  (h = void 0 === c ? "chapel" : c),
                                  s)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("amount should not be empty");
                              case 3:
                                if (r) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "delegate address should not be null",
                                );
                              case 5:
                                if (l.checkAddress(n, "bva")) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "validator source address is not valid",
                                );
                              case 7:
                                if (l.checkAddress(a, "bva")) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error(
                                  "validator dest address is not valid",
                                );
                              case 9:
                                return (
                                  (s = Number(
                                    new d["default"](s)
                                      .mul(Math.pow(10, 8))
                                      .toString(),
                                  )),
                                  (p = new f.BscReDelegateMsg({
                                    delegator_addr: r,
                                    validator_src_addr: n,
                                    validator_dst_addr: a,
                                    amount: { denom: u, amount: s },
                                    side_chain_id: h,
                                  })),
                                  (e.next = 13),
                                  this.broadcast(p, r)
                                );
                              case 13:
                                return e.abrupt("return", e.sent);
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "broadcast",
                value: (function () {
                  var e = (0, s["default"])(
                    i["default"].mark(function e(t, r, n) {
                      var a;
                      return i["default"].wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this._bncClient._prepareTransaction(
                                    t.getMsg(),
                                    t.getSignMsg(),
                                    r,
                                    n,
                                  )
                                );
                              case 2:
                                return (
                                  (a = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._bncClient._broadcastDelegate(a),
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t, r, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })();
      t.Stake = h;
    },
    9066: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = void 0));
      var a = n(r(9067)),
        i = "@ledgerhq/hw-transport-node-hid",
        s = "undefined" !== typeof window,
        o = {
          app: a["default"],
          LedgerApp: a["default"],
          transports: {
            u2f: r(5434)["default"],
            wble: r(9068)["default"],
            node: !s && c(i) ? r(6429)(i)["default"] : null,
          },
        };
      e.exports = o;
      var u = o;
      function c(e) {
        try {
          return r(6429).resolve(e);
        } catch (t) {
          return !1;
        }
      }
      t["default"] = u;
    },
    9067: function (e, t, r) {
      "use strict";
      (function (n) {
        var a = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0));
        var i = a(r(3170)),
          s = a(r(3171)),
          o = a(r(2834)),
          u = a(r(2839)),
          c = a(r(128)),
          d = 5e4,
          l = 3e3,
          f = 188,
          h = "CSM",
          p = [36864],
          v = 250,
          m = 0,
          b = 1,
          g = 2,
          w = 3,
          y = (function () {
            function e(t) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : d,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : l;
              if (
                ((0, o["default"])(this, e),
                (0, c["default"])(this, "_transport", void 0),
                (0, c["default"])(this, "_interactiveTimeout", void 0),
                (0, c["default"])(this, "_nonInteractiveTimeout", void 0),
                !t || !t.send)
              )
                throw new Error("LedgerApp expected a Transport");
              ((this._transport = t),
                (this._interactiveTimeout = r),
                (this._nonInteractiveTimeout = n),
                this._transport.setScrambleKey(h));
            }
            return (
              (0, u["default"])(e, [
                {
                  key: "_serialize",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : f,
                      t = arguments.length > 1 ? arguments[1] : void 0,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      a =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      s = 5;
                    if (null != i) {
                      if (i.length > 255)
                        throw new Error("maximum data size = 255");
                      s += i.length;
                    }
                    var o = n.alloc(s);
                    return (
                      (o[0] = e),
                      (o[1] = t),
                      (o[2] = r),
                      (o[3] = a),
                      (o[4] = 0),
                      null != i && ((o[4] = i.length), o.set(i, 5)),
                      o
                    );
                  },
                },
                {
                  key: "_serializeHRP",
                  value: function (e) {
                    if (null == e || e.length < 3 || e.length > 83)
                      throw new Error("Invalid HRP");
                    var t = n.alloc(1 + e.length);
                    return (t.writeUInt8(e.length, 0), t.write(e, 1), t);
                  },
                },
                {
                  key: "_serializeHDPath",
                  value: function (e) {
                    if (null == e || e.length < 3)
                      throw new Error("Invalid path.");
                    if (e.length > 10)
                      throw new Error("Invalid path. Length should be <= 10");
                    var t = n.alloc(1 + 4 * e.length);
                    t.writeUInt8(e.length, 0);
                    for (var r = 0; r < e.length; r++) {
                      var a = e[r];
                      (r < 3 && (a |= 2147483648),
                        t.writeInt32LE(a, 1 + 4 * r));
                    }
                    return t;
                  },
                },
                {
                  key: "_errorMessage",
                  value: function (e) {
                    switch (e) {
                      case 1:
                        return "U2F: Unknown";
                      case 2:
                        return "U2F: Bad request";
                      case 3:
                        return "U2F: Configuration unsupported";
                      case 4:
                        return "U2F: Device Ineligible";
                      case 5:
                        return "U2F: Timeout";
                      case 14:
                        return "Timeout";
                      case 36864:
                        return "No errors";
                      case 36865:
                        return "Device is busy";
                      case 25600:
                        return "Execution Error";
                      case 26368:
                        return "Wrong Length";
                      case 27010:
                        return "Empty Buffer";
                      case 27011:
                        return "Output buffer too small";
                      case 27012:
                        return "Data is invalid";
                      case 27013:
                        return "Conditions not satisfied";
                      case 27014:
                        return "Transaction rejected";
                      case 27264:
                        return "Bad key handle";
                      case 27392:
                        return "Invalid P1/P2";
                      case 27904:
                        return "Instruction not supported";
                      case 28160:
                        return "The app does not seem to be open";
                      case 28416:
                        return "Unknown error";
                      case 28417:
                        return "Sign/verify error";
                      default:
                        return "Unknown error code";
                    }
                  },
                },
                {
                  key: "getVersion",
                  value: (function () {
                    var e = (0, s["default"])(
                      i["default"].mark(function e() {
                        var t, r, a, s, o, u, c;
                        return i["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = {}),
                                    (e.prev = 1),
                                    this._transport.setExchangeTimeout(
                                      this._nonInteractiveTimeout,
                                    ),
                                    (e.next = 5),
                                    this._transport.send(
                                      f,
                                      m,
                                      0,
                                      0,
                                      n.alloc(0),
                                      p,
                                    )
                                  );
                                case 5:
                                  if (((r = e.sent), n.isBuffer(r))) {
                                    e.next = 8;
                                    break;
                                  }
                                  throw new Error(
                                    "expected apduResponse to be Buffer",
                                  );
                                case 8:
                                  ((a = r.slice(-2)),
                                    (t["test_mode"] = 0 !== r[0]),
                                    (t["major"] = r[1]),
                                    (t["minor"] = r[2]),
                                    (t["patch"] = r[3]),
                                    (t["device_locked"] = 1 === r[4]),
                                    (t["return_code"] = 256 * a[0] + a[1]),
                                    (t["error_message"] = this._errorMessage(
                                      t["return_code"],
                                    )),
                                    (e.next = 23));
                                  break;
                                case 18:
                                  throw (
                                    (e.prev = 18),
                                    (e.t0 = e["catch"](1)),
                                    (s = e.t0.statusCode),
                                    (o = e.t0.statusText),
                                    (u = e.t0.message),
                                    (c = e.t0.stack),
                                    console.warn(
                                      "Ledger getVersion error:",
                                      this._errorMessage(s),
                                      u,
                                      o,
                                      c,
                                    ),
                                    e.t0
                                  );
                                case 23:
                                  return e.abrupt("return", t);
                                case 24:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 18]],
                        );
                      }),
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "publicKeySecp256k1",
                  value: (function () {
                    var e = (0, s["default"])(
                      i["default"].mark(function e() {
                        var t,
                          r,
                          a,
                          s,
                          o,
                          u,
                          c,
                          d,
                          l = arguments;
                        return i["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t =
                                      l.length > 0 && void 0 !== l[0]
                                        ? l[0]
                                        : [44, 714, 0, 0, 0]),
                                    (r = {}),
                                    (e.prev = 2),
                                    this._transport.setExchangeTimeout(
                                      this._nonInteractiveTimeout,
                                    ),
                                    (e.next = 6),
                                    this._transport.send(
                                      f,
                                      b,
                                      0,
                                      0,
                                      this._serializeHDPath(t),
                                      p,
                                    )
                                  );
                                case 6:
                                  if (((a = e.sent), n.isBuffer(a))) {
                                    e.next = 9;
                                    break;
                                  }
                                  throw new Error(
                                    "expected apduResponse to be Buffer",
                                  );
                                case 9:
                                  ((s = a.slice(-2)),
                                    (r["pk"] = a.slice(0, 65)),
                                    (r["return_code"] = 256 * s[0] + s[1]),
                                    (r["error_message"] = this._errorMessage(
                                      r["return_code"],
                                    )),
                                    (e.next = 20));
                                  break;
                                case 15:
                                  throw (
                                    (e.prev = 15),
                                    (e.t0 = e["catch"](2)),
                                    (o = e.t0.statusCode),
                                    (u = e.t0.statusText),
                                    (c = e.t0.message),
                                    (d = e.t0.stack),
                                    console.warn(
                                      "Ledger publicKeySecp256k1 error:",
                                      this._errorMessage(o),
                                      c,
                                      u,
                                      d,
                                    ),
                                    e.t0
                                  );
                                case 20:
                                  return e.abrupt("return", r);
                                case 21:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[2, 15]],
                        );
                      }),
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "_signGetChunks",
                  value: function (e, t) {
                    var r = [];
                    r.push(this._serializeHDPath(t));
                    for (var a = n.from(e), i = 0; i < a.length; i += v) {
                      var s = i + v;
                      (i > a.length && (s = a.length), r.push(a.slice(i, s)));
                    }
                    return r;
                  },
                },
                {
                  key: "_signSendChunk",
                  value: (function () {
                    var e = (0, s["default"])(
                      i["default"].mark(function e(t, r, a) {
                        var s, o, u, c, d, l, h;
                        return i["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (s = {}),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this._transport.send(f, g, t, r, a)
                                  );
                                case 4:
                                  if (((o = e.sent), n.isBuffer(o))) {
                                    e.next = 7;
                                    break;
                                  }
                                  throw new Error(
                                    "expected apduResponse to be Buffer",
                                  );
                                case 7:
                                  ((u = o.slice(-2)),
                                    (s["return_code"] = 256 * u[0] + u[1]),
                                    (s["error_message"] = this._errorMessage(
                                      s["return_code"],
                                    )),
                                    (s["signature"] = null),
                                    o.length > 2 &&
                                      (s["signature"] = o.slice(
                                        0,
                                        o.length - 2,
                                      )),
                                    (e.next = 19));
                                  break;
                                case 14:
                                  throw (
                                    (e.prev = 14),
                                    (e.t0 = e["catch"](1)),
                                    (c = e.t0.statusCode),
                                    (d = e.t0.statusText),
                                    (l = e.t0.message),
                                    (h = e.t0.stack),
                                    console.warn(
                                      "Ledger signSendChunk error:",
                                      this._errorMessage(c),
                                      l,
                                      d,
                                      h,
                                    ),
                                    e.t0
                                  );
                                case 19:
                                  return e.abrupt("return", s);
                                case 20:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 14]],
                        );
                      }),
                    );
                    function t(t, r, n) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "signSecp256k1",
                  value: (function () {
                    var e = (0, s["default"])(
                      i["default"].mark(function e(t) {
                        var r,
                          a,
                          s,
                          o,
                          u,
                          c,
                          d,
                          l,
                          f,
                          h,
                          p,
                          v,
                          m,
                          b,
                          g,
                          w,
                          y,
                          _,
                          x,
                          k,
                          P = arguments;
                        return i["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r =
                                      P.length > 1 && void 0 !== P[1]
                                        ? P[1]
                                        : [44, 714, 0, 0, 0]),
                                    (a = {}),
                                    (s = this._signGetChunks(t, r)),
                                    (e.prev = 3),
                                    s.length <= 1
                                      ? this._transport.setExchangeTimeout(
                                          this._interactiveTimeout,
                                        )
                                      : this._transport.setExchangeTimeout(
                                          this._nonInteractiveTimeout,
                                        ),
                                    (e.next = 7),
                                    this._signSendChunk(1, s.length, s[0])
                                  );
                                case 7:
                                  ((o = e.sent),
                                    (a["return_code"] = o.return_code),
                                    (a["error_message"] = o.error_message),
                                    (a["signature"] = null),
                                    (e.next = 18));
                                  break;
                                case 13:
                                  throw (
                                    (e.prev = 13),
                                    (e.t0 = e["catch"](3)),
                                    (u = e.t0.statusCode),
                                    (c = e.t0.statusText),
                                    (d = e.t0.message),
                                    (l = e.t0.stack),
                                    console.warn(
                                      "Ledger signSecp256k1 error (chunk 1):",
                                      this._errorMessage(u),
                                      d,
                                      c,
                                      l,
                                    ),
                                    e.t0
                                  );
                                case 18:
                                  if (36864 !== o.return_code) {
                                    e.next = 60;
                                    break;
                                  }
                                  f = 1;
                                case 20:
                                  if (!(f < s.length)) {
                                    e.next = 40;
                                    break;
                                  }
                                  return (
                                    (e.prev = 21),
                                    f === s.length - 1 &&
                                      this._transport.setExchangeTimeout(
                                        this._interactiveTimeout,
                                      ),
                                    (e.next = 25),
                                    this._signSendChunk(1 + f, s.length, s[f])
                                  );
                                case 25:
                                  ((o = e.sent),
                                    (a["return_code"] = o.return_code),
                                    (a["error_message"] = o.error_message),
                                    (e.next = 35));
                                  break;
                                case 30:
                                  throw (
                                    (e.prev = 30),
                                    (e.t1 = e["catch"](21)),
                                    (h = e.t1.statusCode),
                                    (p = e.t1.statusText),
                                    (v = e.t1.message),
                                    (m = e.t1.stack),
                                    console.warn(
                                      "Ledger signSecp256k1 error (chunk 2):",
                                      this._errorMessage(h),
                                      v,
                                      p,
                                      m,
                                    ),
                                    e.t1
                                  );
                                case 35:
                                  if (36864 === o.return_code) {
                                    e.next = 37;
                                    break;
                                  }
                                  return e.abrupt("break", 40);
                                case 37:
                                  (f++, (e.next = 20));
                                  break;
                                case 40:
                                  if (
                                    ((a["return_code"] = o.return_code),
                                    (a["error_message"] = o.error_message),
                                    (b = o.signature),
                                    b && b.length)
                                  ) {
                                    e.next = 45;
                                    break;
                                  }
                                  throw new Error(
                                    "Ledger assertion failed: Expected a non-empty signature from the device",
                                  );
                                case 45:
                                  if (48 === b[0]) {
                                    e.next = 47;
                                    break;
                                  }
                                  throw new Error(
                                    "Ledger assertion failed: Expected a signature header of 0x30",
                                  );
                                case 47:
                                  if (
                                    ((g = 4),
                                    (w = b[3]),
                                    (y = b[4 + w + 1]),
                                    (_ = b.length - y),
                                    33 === w && (g++, w--),
                                    33 === y && _++,
                                    (x = b.slice(g, g + w)),
                                    (k = b.slice(_)),
                                    (b = a["signature"] = n.concat([x, k])),
                                    64 === b.length)
                                  ) {
                                    e.next = 58;
                                    break;
                                  }
                                  throw new Error(
                                    "Ledger assertion failed: incorrect signature length ".concat(
                                      b.length,
                                    ),
                                  );
                                case 58:
                                  e.next = 61;
                                  break;
                                case 60:
                                  throw new Error(
                                    "Unable to sign the transaction. Return code " +
                                      o.return_code,
                                  );
                                case 61:
                                  return e.abrupt("return", a);
                                case 62:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [
                            [3, 13],
                            [21, 30],
                          ],
                        );
                      }),
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "showAddress",
                  value: (function () {
                    var e = (0, s["default"])(
                      i["default"].mark(function e() {
                        var t,
                          r,
                          a,
                          s,
                          o,
                          u,
                          c = arguments;
                        return i["default"].wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t =
                                      c.length > 0 && void 0 !== c[0]
                                        ? c[0]
                                        : "bnb"),
                                    (r =
                                      c.length > 1 && void 0 !== c[1]
                                        ? c[1]
                                        : [44, 714, 0, 0, 0]),
                                    (a = {}),
                                    (s = n.concat([
                                      this._serializeHRP(t),
                                      this._serializeHDPath(r),
                                    ])),
                                    this._transport.setExchangeTimeout(
                                      this._interactiveTimeout,
                                    ),
                                    (e.next = 7),
                                    this._transport.send(f, w, 0, 0, s, p)
                                  );
                                case 7:
                                  if (((o = e.sent), n.isBuffer(o))) {
                                    e.next = 10;
                                    break;
                                  }
                                  throw new Error(
                                    "expected apduResponse to be Buffer",
                                  );
                                case 10:
                                  return (
                                    (u = o.slice(-2)),
                                    (a["return_code"] = 256 * u[0] + u[1]),
                                    (a["error_message"] = this._errorMessage(
                                      a["return_code"],
                                    )),
                                    27264 === a.return_code &&
                                      (a["error_message"] = o
                                        .slice(0, o.length - 2)
                                        .toString("ascii")),
                                    e.abrupt("return", a)
                                  );
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "getPublicKey",
                  value: function (e) {
                    return this.publicKeySecp256k1(e);
                  },
                },
                {
                  key: "sign",
                  value: function (e, t) {
                    return this.signSecp256k1(e, t);
                  },
                },
              ]),
              e
            );
          })();
        e.exports = y;
        var _ = y;
        t["default"] = _;
      }).call(this, r(2).Buffer);
    },
    9195: function (e, t) {},
    9198: function (e, t) {},
    9200: function (e, t) {},
  },
]);
