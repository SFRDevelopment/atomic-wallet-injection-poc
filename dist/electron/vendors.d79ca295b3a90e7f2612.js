(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [177],
  {
    2825: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(7410),
        r = a(o);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = r.default;
    },
    2924: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.__assign = void 0),
        (t.__asyncDelegator = w),
        (t.__asyncGenerator = b),
        (t.__asyncValues = S),
        (t.__await = g),
        (t.__awaiter = c),
        (t.__classPrivateFieldGet = A),
        (t.__classPrivateFieldSet = O),
        (t.__createBinding = p),
        (t.__decorate = u),
        (t.__exportStar = f),
        (t.__extends = r),
        (t.__generator = d),
        (t.__importDefault = P),
        (t.__importStar = T),
        (t.__makeTemplateObject = k),
        (t.__metadata = l),
        (t.__param = s),
        (t.__read = y),
        (t.__rest = i),
        (t.__spread = h),
        (t.__spreadArrays = v),
        (t.__values = m));
      var o = function (e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          o(e, t)
        );
      };
      function r(e, t) {
        function n() {
          this.constructor = e;
        }
        (o(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n())));
      }
      var a = function () {
        return (
          (t.__assign = a =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          a.apply(this, arguments)
        );
      };
      function i(e, t) {
        var n = {};
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (n[o] = e[o]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            t.indexOf(o[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
              (n[o[r]] = e[o[r]]);
        }
        return n;
      }
      function u(e, t, n, o) {
        var r,
          a = arguments.length,
          i =
            a < 3
              ? t
              : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          i = Reflect.decorate(e, t, n, o);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (r = e[u]) &&
              (i = (a < 3 ? r(i) : a > 3 ? r(t, n, i) : r(t, n)) || i);
        return (a > 3 && i && Object.defineProperty(t, n, i), i);
      }
      function s(e, t) {
        return function (n, o) {
          t(n, o, e);
        };
      }
      function l(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function c(e, t, n, o) {
        function r(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function (n, a) {
          function i(e) {
            try {
              s(o.next(e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            try {
              s(o["throw"](e));
            } catch (t) {
              a(t);
            }
          }
          function s(e) {
            e.done ? n(e.value) : r(e.value).then(i, u);
          }
          s((o = o.apply(e, t || [])).next());
        });
      }
      function d(e, t) {
        var n,
          o,
          r,
          a,
          i = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (a = { next: u(0), throw: u(1), return: u(2) }),
          "function" === typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function u(e) {
          return function (t) {
            return s([e, t]);
          };
        }
        function s(a) {
          if (n) throw new TypeError("Generator is already executing.");
          while (i)
            try {
              if (
                ((n = 1),
                o &&
                  (r =
                    2 & a[0]
                      ? o["return"]
                      : a[0]
                        ? o["throw"] || ((r = o["return"]) && r.call(o), 0)
                        : o.next) &&
                  !(r = r.call(o, a[1])).done)
              )
                return r;
              switch (((o = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                case 0:
                case 1:
                  r = a;
                  break;
                case 4:
                  return (i.label++, { value: a[1], done: !1 });
                case 5:
                  (i.label++, (o = a[1]), (a = [0]));
                  continue;
                case 7:
                  ((a = i.ops.pop()), i.trys.pop());
                  continue;
                default:
                  if (
                    ((r = i.trys),
                    !(r = r.length > 0 && r[r.length - 1]) &&
                      (6 === a[0] || 2 === a[0]))
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                    i.label = a[1];
                    break;
                  }
                  if (6 === a[0] && i.label < r[1]) {
                    ((i.label = r[1]), (r = a));
                    break;
                  }
                  if (r && i.label < r[2]) {
                    ((i.label = r[2]), i.ops.push(a));
                    break;
                  }
                  (r[2] && i.ops.pop(), i.trys.pop());
                  continue;
              }
              a = t.call(e, i);
            } catch (u) {
              ((a = [6, u]), (o = 0));
            } finally {
              n = r = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        }
      }
      function p(e, t, n, o) {
        (void 0 === o && (o = n), (e[o] = t[n]));
      }
      function f(e, t) {
        for (var n in e)
          "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      function m(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          o = 0;
        if (n) return n.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && o >= e.length && (e = void 0),
                { value: e && e[o++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function y(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var o,
          r,
          a = n.call(e),
          i = [];
        try {
          while ((void 0 === t || t-- > 0) && !(o = a.next()).done)
            i.push(o.value);
        } catch (u) {
          r = { error: u };
        } finally {
          try {
            o && !o.done && (n = a["return"]) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        return i;
      }
      function h() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(y(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var o = Array(e),
          r = 0;
        for (t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, u = a.length; i < u; i++, r++)
            o[r] = a[i];
        return o;
      }
      function g(e) {
        return this instanceof g ? ((this.v = e), this) : new g(e);
      }
      function b(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var o,
          r = n.apply(e, t || []),
          a = [];
        return (
          (o = {}),
          i("next"),
          i("throw"),
          i("return"),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function i(e) {
          r[e] &&
            (o[e] = function (t) {
              return new Promise(function (n, o) {
                a.push([e, t, n, o]) > 1 || u(e, t);
              });
            });
        }
        function u(e, t) {
          try {
            s(r[e](t));
          } catch (n) {
            d(a[0][3], n);
          }
        }
        function s(e) {
          e.value instanceof g
            ? Promise.resolve(e.value.v).then(l, c)
            : d(a[0][2], e);
        }
        function l(e) {
          u("next", e);
        }
        function c(e) {
          u("throw", e);
        }
        function d(e, t) {
          (e(t), a.shift(), a.length && u(a[0][0], a[0][1]));
        }
      }
      function w(e) {
        var t, n;
        return (
          (t = {}),
          o("next"),
          o("throw", function (e) {
            throw e;
          }),
          o("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function o(o, r) {
          t[o] = e[o]
            ? function (t) {
                return (n = !n)
                  ? { value: g(e[o](t)), done: "return" === o }
                  : r
                    ? r(t)
                    : t;
              }
            : r;
        }
      }
      function S(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = "function" === typeof m ? m(e) : e[Symbol.iterator]()),
            (t = {}),
            o("next"),
            o("throw"),
            o("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function o(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (o, a) {
                ((t = e[n](t)), r(o, a, t.done, t.value));
              });
            };
        }
        function r(e, t, n, o) {
          Promise.resolve(o).then(function (t) {
            e({ value: t, done: n });
          }, t);
        }
      }
      function k(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return ((t.default = e), t);
      }
      function P(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function A(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function O(e, t, n) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return (t.set(e, n), n);
      }
      t.__assign = a;
    },
    3091: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StrKey = void 0));
        var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })();
        ((t.decodeCheck = w), (t.encodeCheck = S));
        var r = n(5986),
          a = y(r),
          i = n(7530),
          u = y(i),
          s = n(2931),
          l = y(s),
          c = n(4959),
          d = y(c),
          p = n(2964),
          f = y(p),
          m = n(7542);
        function y(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function h(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var v = {
            ed25519PublicKey: 48,
            ed25519SecretSeed: 144,
            med25519PublicKey: 96,
            preAuthTx: 152,
            sha256Hash: 184,
            signedPayload: 120,
          },
          g = {
            G: "ed25519PublicKey",
            S: "ed25519SecretSeed",
            M: "med25519PublicKey",
            T: "preAuthTx",
            X: "sha256Hash",
            P: "signedPayload",
          };
        t.StrKey = (function () {
          function e() {
            h(this, e);
          }
          return (
            o(e, null, [
              {
                key: "encodeEd25519PublicKey",
                value: function (e) {
                  return S("ed25519PublicKey", e);
                },
              },
              {
                key: "decodeEd25519PublicKey",
                value: function (e) {
                  return w("ed25519PublicKey", e);
                },
              },
              {
                key: "isValidEd25519PublicKey",
                value: function (e) {
                  return b("ed25519PublicKey", e);
                },
              },
              {
                key: "encodeEd25519SecretSeed",
                value: function (e) {
                  return S("ed25519SecretSeed", e);
                },
              },
              {
                key: "decodeEd25519SecretSeed",
                value: function (e) {
                  return w("ed25519SecretSeed", e);
                },
              },
              {
                key: "isValidEd25519SecretSeed",
                value: function (e) {
                  return b("ed25519SecretSeed", e);
                },
              },
              {
                key: "encodeMed25519PublicKey",
                value: function (e) {
                  return S("med25519PublicKey", e);
                },
              },
              {
                key: "decodeMed25519PublicKey",
                value: function (e) {
                  return w("med25519PublicKey", e);
                },
              },
              {
                key: "isValidMed25519PublicKey",
                value: function (e) {
                  return b("med25519PublicKey", e);
                },
              },
              {
                key: "encodePreAuthTx",
                value: function (e) {
                  return S("preAuthTx", e);
                },
              },
              {
                key: "decodePreAuthTx",
                value: function (e) {
                  return w("preAuthTx", e);
                },
              },
              {
                key: "encodeSha256Hash",
                value: function (e) {
                  return S("sha256Hash", e);
                },
              },
              {
                key: "decodeSha256Hash",
                value: function (e) {
                  return w("sha256Hash", e);
                },
              },
              {
                key: "encodeSignedPayload",
                value: function (e) {
                  return S("signedPayload", e);
                },
              },
              {
                key: "decodeSignedPayload",
                value: function (e) {
                  return w("signedPayload", e);
                },
              },
              {
                key: "isValidSignedPayload",
                value: function (e) {
                  return b("signedPayload", e);
                },
              },
              {
                key: "getVersionByteForPrefix",
                value: function (e) {
                  return g[e[0]];
                },
              },
            ]),
            e
          );
        })();
        function b(e, t) {
          if (!(0, f.default)(t)) return !1;
          switch (e) {
            case "ed25519PublicKey":
            case "ed25519SecretSeed":
            case "preAuthTx":
            case "sha256Hash":
              if (56 !== t.length) return !1;
              break;
            case "med25519PublicKey":
              if (69 !== t.length) return !1;
              break;
            case "signedPayload":
              if (t.length < 56 || t.length > 165) return !1;
              break;
            default:
              return !1;
          }
          var n = "";
          try {
            n = w(e, t);
          } catch (o) {
            return !1;
          }
          switch (e) {
            case "ed25519PublicKey":
            case "ed25519SecretSeed":
            case "preAuthTx":
            case "sha256Hash":
              return 32 === n.length;
            case "med25519PublicKey":
              return 40 === n.length;
            case "signedPayload":
              return n.length >= 40 && n.length <= 100;
            default:
              return !1;
          }
        }
        function w(t, n) {
          if (!(0, f.default)(n))
            throw new TypeError("encoded argument must be of type String");
          var o = a.default.decode(n),
            r = o[0],
            i = o.slice(0, -2),
            u = i.slice(1),
            s = o.slice(-2);
          if (n !== a.default.encode(o))
            throw new Error("invalid encoded string");
          var c = v[t];
          if ((0, l.default)(c))
            throw new Error(
              t +
                " is not a valid version byte name. Expected one of " +
                Object.keys(v).join(", "),
            );
          if (r !== c)
            throw new Error(
              "invalid version byte. expected " + c + ", got " + r,
            );
          var d = k(i);
          if (!(0, m.verifyChecksum)(d, s)) throw new Error("invalid checksum");
          return e.from(u);
        }
        function S(t, n) {
          if ((0, d.default)(n) || (0, l.default)(n))
            throw new Error("cannot encode null data");
          var o = v[t];
          if ((0, l.default)(o))
            throw new Error(
              t +
                " is not a valid version byte name. Expected one of " +
                Object.keys(v).join(", "),
            );
          n = e.from(n);
          var r = e.from([o]),
            i = e.concat([r, n]),
            u = k(i),
            s = e.concat([i, u]);
          return a.default.encode(s);
        }
        function k(t) {
          var n = e.alloc(2);
          return (n.writeUInt16LE(u.default.crc16xmodem(t), 0), n);
        }
      }).call(this, n(2).Buffer);
    },
    3287: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodeAddressToMuxedAccount = l),
          (t.encodeMuxedAccountToAddress = c),
          (t.encodeMuxedAccount = d),
          (t.extractBaseAddress = p));
        var o = n(2964),
          r = s(o),
          a = n(2825),
          i = s(a),
          u = n(3091);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(e) {
          return u.StrKey.isValidMed25519PublicKey(e)
            ? f(e)
            : i.default.MuxedAccount.keyTypeEd25519(
                u.StrKey.decodeEd25519PublicKey(e),
              );
        }
        function c(e) {
          return e.switch().value ===
            i.default.CryptoKeyType.keyTypeMuxedEd25519().value
            ? m(e)
            : u.StrKey.encodeEd25519PublicKey(e.ed25519());
        }
        function d(e, t) {
          if (!u.StrKey.isValidEd25519PublicKey(e))
            throw new Error("address should be a Stellar account ID (G...)");
          if (!(0, r.default)(t))
            throw new Error(
              "id should be a string representing a number (uint64)",
            );
          return i.default.MuxedAccount.keyTypeMuxedEd25519(
            new i.default.MuxedAccountMed25519({
              id: i.default.Uint64.fromString(t),
              ed25519: u.StrKey.decodeEd25519PublicKey(e),
            }),
          );
        }
        function p(e) {
          if (u.StrKey.isValidEd25519PublicKey(e)) return e;
          if (!u.StrKey.isValidMed25519PublicKey(e))
            throw new TypeError("expected muxed account (M...), got " + e);
          var t = l(e);
          return u.StrKey.encodeEd25519PublicKey(t.med25519().ed25519());
        }
        function f(e) {
          var t = u.StrKey.decodeMed25519PublicKey(e);
          return i.default.MuxedAccount.keyTypeMuxedEd25519(
            new i.default.MuxedAccountMed25519({
              id: i.default.Uint64.fromXDR(t.slice(-8)),
              ed25519: t.slice(0, -8),
            }),
          );
        }
        function m(t) {
          if (t.switch() === i.default.CryptoKeyType.keyTypeEd25519())
            return c(t);
          var n = t.med25519();
          return u.StrKey.encodeMed25519PublicKey(
            e.concat([n.ed25519(), n.id().toXDR("raw")]),
          );
        }
      }).call(this, n(2).Buffer);
    },
    3370: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Keypair = void 0));
        var o =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                ((o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o));
              }
            }
            return function (t, n, o) {
              return (n && e(t.prototype, n), o && e(t, o), t);
            };
          })(),
          a = n(2925),
          i = h(a),
          u = n(2931),
          s = h(u),
          l = n(2964),
          c = h(l),
          d = n(5948),
          p = n(3091),
          f = n(3882),
          m = n(2825),
          y = h(m);
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function v(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        t.Keypair = (function () {
          function t(n) {
            if ((v(this, t), "ed25519" !== n.type))
              throw new Error("Invalid keys type");
            if (((this.type = n.type), n.secretKey)) {
              if (
                ((n.secretKey = e.from(n.secretKey)), 32 !== n.secretKey.length)
              )
                throw new Error("secretKey length is invalid");
              if (
                ((this._secretSeed = n.secretKey),
                (this._publicKey = (0, d.generate)(n.secretKey)),
                (this._secretKey = e.concat([n.secretKey, this._publicKey])),
                n.publicKey && !this._publicKey.equals(e.from(n.publicKey)))
              )
                throw new Error("secretKey does not match publicKey");
            } else if (
              ((this._publicKey = e.from(n.publicKey)),
              32 !== this._publicKey.length)
            )
              throw new Error("publicKey length is invalid");
          }
          return (
            r(
              t,
              [
                {
                  key: "xdrAccountId",
                  value: function () {
                    return new y.default.AccountId.publicKeyTypeEd25519(
                      this._publicKey,
                    );
                  },
                },
                {
                  key: "xdrPublicKey",
                  value: function () {
                    return new y.default.PublicKey.publicKeyTypeEd25519(
                      this._publicKey,
                    );
                  },
                },
                {
                  key: "xdrMuxedAccount",
                  value: function (e) {
                    if (!(0, s.default)(e)) {
                      if (!(0, c.default)(e))
                        throw new TypeError(
                          "expected string for ID, got " +
                            ("undefined" === typeof e ? "undefined" : o(e)),
                        );
                      return y.default.MuxedAccount.keyTypeMuxedEd25519(
                        new y.default.MuxedAccountMed25519({
                          id: y.default.Uint64.fromString(e),
                          ed25519: this._publicKey,
                        }),
                      );
                    }
                    return new y.default.MuxedAccount.keyTypeEd25519(
                      this._publicKey,
                    );
                  },
                },
                {
                  key: "rawPublicKey",
                  value: function () {
                    return this._publicKey;
                  },
                },
                {
                  key: "signatureHint",
                  value: function () {
                    var e = this.xdrAccountId().toXDR();
                    return e.slice(e.length - 4);
                  },
                },
                {
                  key: "publicKey",
                  value: function () {
                    return p.StrKey.encodeEd25519PublicKey(this._publicKey);
                  },
                },
                {
                  key: "secret",
                  value: function () {
                    if (!this._secretSeed)
                      throw new Error("no secret key available");
                    if ("ed25519" === this.type)
                      return p.StrKey.encodeEd25519SecretSeed(this._secretSeed);
                    throw new Error("Invalid Keypair type");
                  },
                },
                {
                  key: "rawSecretKey",
                  value: function () {
                    return this._secretSeed;
                  },
                },
                {
                  key: "canSign",
                  value: function () {
                    return !!this._secretKey;
                  },
                },
                {
                  key: "sign",
                  value: function (e) {
                    if (!this.canSign())
                      throw new Error("cannot sign: no secret key available");
                    return (0, d.sign)(e, this._secretKey);
                  },
                },
                {
                  key: "verify",
                  value: function (e, t) {
                    return (0, d.verify)(e, t, this._publicKey);
                  },
                },
                {
                  key: "signDecorated",
                  value: function (e) {
                    var t = this.sign(e),
                      n = this.signatureHint();
                    return new y.default.DecoratedSignature({
                      hint: n,
                      signature: t,
                    });
                  },
                },
                {
                  key: "signPayloadDecorated",
                  value: function (t) {
                    var n = this.sign(t),
                      o = this.signatureHint(),
                      r = e.from(t.slice(-4));
                    return (
                      r.length < 4 &&
                        (r = e.concat([r, e.alloc(4 - t.length, 0)])),
                      new y.default.DecoratedSignature({
                        hint: r.map(function (e, t) {
                          return e ^ o[t];
                        }),
                        signature: n,
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "fromSecret",
                  value: function (e) {
                    var t = p.StrKey.decodeEd25519SecretSeed(e);
                    return this.fromRawEd25519Seed(t);
                  },
                },
                {
                  key: "fromRawEd25519Seed",
                  value: function (e) {
                    return new this({ type: "ed25519", secretKey: e });
                  },
                },
                {
                  key: "master",
                  value: function (e) {
                    if (!e)
                      throw new Error(
                        "No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.",
                      );
                    return this.fromRawEd25519Seed((0, f.hash)(e));
                  },
                },
                {
                  key: "fromPublicKey",
                  value: function (e) {
                    if (
                      ((e = p.StrKey.decodeEd25519PublicKey(e)),
                      32 !== e.length)
                    )
                      throw new Error("Invalid Stellar public key");
                    return new this({ type: "ed25519", publicKey: e });
                  },
                },
                {
                  key: "random",
                  value: function () {
                    var e = i.default.randomBytes(32);
                    return this.fromRawEd25519Seed(e);
                  },
                },
              ],
            ),
            t
          );
        })();
      }).call(this, n(2).Buffer);
    },
    3649: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Asset = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(3369),
        a = m(r),
        i = n(4646),
        u = m(i),
        s = n(4647),
        l = m(s),
        c = n(2825),
        d = m(c),
        p = n(3370),
        f = n(3091);
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function y(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.Asset = (function () {
        function e(t, n) {
          if ((y(this, e), !/^[a-zA-Z0-9]{1,12}$/.test(t)))
            throw new Error(
              "Asset code is invalid (maximum alphanumeric, 12 characters at max)",
            );
          if ("xlm" !== String(t).toLowerCase() && !n)
            throw new Error("Issuer cannot be null");
          if (n && !f.StrKey.isValidEd25519PublicKey(n))
            throw new Error("Issuer is invalid");
          ("xlm" === String(t).toLowerCase()
            ? (this.code = "XLM")
            : (this.code = t),
            (this.issuer = n));
        }
        return (
          o(
            e,
            [
              {
                key: "toXDRObject",
                value: function () {
                  return this._toXDRObject(d.default.Asset);
                },
              },
              {
                key: "toChangeTrustXDRObject",
                value: function () {
                  return this._toXDRObject(d.default.ChangeTrustAsset);
                },
              },
              {
                key: "toTrustLineXDRObject",
                value: function () {
                  return this._toXDRObject(d.default.TrustLineAsset);
                },
              },
              {
                key: "_toXDRObject",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : d.default.Asset;
                  if (this.isNative()) return e.assetTypeNative();
                  var t = void 0,
                    n = void 0;
                  this.code.length <= 4
                    ? ((t = d.default.AlphaNum4),
                      (n = "assetTypeCreditAlphanum4"))
                    : ((t = d.default.AlphaNum12),
                      (n = "assetTypeCreditAlphanum12"));
                  var o = this.code.length <= 4 ? 4 : 12,
                    r = (0, u.default)(this.code, o, "\0"),
                    a = new t({
                      assetCode: r,
                      issuer: p.Keypair.fromPublicKey(
                        this.issuer,
                      ).xdrAccountId(),
                    });
                  return new e(n, a);
                },
              },
              {
                key: "getCode",
                value: function () {
                  return (0, a.default)(this.code);
                },
              },
              {
                key: "getIssuer",
                value: function () {
                  return (0, a.default)(this.issuer);
                },
              },
              {
                key: "getAssetType",
                value: function () {
                  switch (this.getRawAssetType()) {
                    case d.default.AssetType.assetTypeNative():
                      return "native";
                    case d.default.AssetType.assetTypeCreditAlphanum4():
                      return "credit_alphanum4";
                    case d.default.AssetType.assetTypeCreditAlphanum12():
                      return "credit_alphanum12";
                    default:
                      return "unknown";
                  }
                },
              },
              {
                key: "getRawAssetType",
                value: function () {
                  return this.isNative()
                    ? d.default.AssetType.assetTypeNative()
                    : this.code.length <= 4
                      ? d.default.AssetType.assetTypeCreditAlphanum4()
                      : d.default.AssetType.assetTypeCreditAlphanum12();
                },
              },
              {
                key: "isNative",
                value: function () {
                  return !this.issuer;
                },
              },
              {
                key: "equals",
                value: function (e) {
                  return (
                    this.code === e.getCode() && this.issuer === e.getIssuer()
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.isNative()
                    ? "native"
                    : this.getCode() + ":" + this.getIssuer();
                },
              },
            ],
            [
              {
                key: "native",
                value: function () {
                  return new e("XLM");
                },
              },
              {
                key: "fromOperation",
                value: function (e) {
                  var t = void 0,
                    n = void 0,
                    o = void 0;
                  switch (e.switch()) {
                    case d.default.AssetType.assetTypeNative():
                      return this.native();
                    case d.default.AssetType.assetTypeCreditAlphanum4():
                      t = e.alphaNum4();
                    case d.default.AssetType.assetTypeCreditAlphanum12():
                      return (
                        (t = t || e.alphaNum12()),
                        (o = f.StrKey.encodeEd25519PublicKey(
                          t.issuer().ed25519(),
                        )),
                        (n = (0, l.default)(t.assetCode(), "\0")),
                        new this(n, o)
                      );
                    default:
                      throw new Error("Invalid asset type: " + e.switch().name);
                  }
                },
              },
              {
                key: "compare",
                value: function (t, n) {
                  if (!t || !(t instanceof e))
                    throw new Error("assetA is invalid");
                  if (!n || !(n instanceof e))
                    throw new Error("assetB is invalid");
                  if (t.equals(n)) return 0;
                  var o = t.getRawAssetType().value,
                    r = n.getRawAssetType().value;
                  if (o !== r) return o < r ? -1 : 1;
                  var a = h(t.getCode(), n.getCode());
                  return 0 !== a ? a : h(t.getIssuer(), n.getIssuer());
                },
              },
            ],
          ),
          e
        );
      })();
      function h(e, t) {
        return e.localeCompare(t, "en", { caseFirst: "upper" });
      }
    },
    3882: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.hash = r));
      var o = n(814);
      function r(e) {
        var t = new o.sha256();
        return (t.update(e, "utf8"), t.digest());
      }
    },
    4277: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encodeMuxedAccount =
          t.extractBaseAddress =
          t.encodeMuxedAccountToAddress =
          t.decodeAddressToMuxedAccount =
          t.SignerKey =
          t.StrKey =
          t.Networks =
          t.Claimant =
          t.MuxedAccount =
          t.Account =
          t.AuthClawbackEnabledFlag =
          t.AuthImmutableFlag =
          t.AuthRevocableFlag =
          t.AuthRequiredFlag =
          t.Operation =
          t.LiquidityPoolId =
          t.LiquidityPoolAsset =
          t.Asset =
          t.BASE_FEE =
          t.TimeoutInfinite =
          t.TransactionBuilder =
          t.FeeBumpTransaction =
          t.Transaction =
          t.TransactionBase =
          t.Hyper =
          t.UnsignedHyper =
          t.Keypair =
          t.LiquidityPoolFeeV18 =
          t.getLiquidityPoolId =
          t.FastSigning =
          t.verify =
          t.sign =
          t.hash =
          t.xdr =
            void 0));
      var o = n(3882);
      Object.defineProperty(t, "hash", {
        enumerable: !0,
        get: function () {
          return o.hash;
        },
      });
      var r = n(5948);
      (Object.defineProperty(t, "sign", {
        enumerable: !0,
        get: function () {
          return r.sign;
        },
      }),
        Object.defineProperty(t, "verify", {
          enumerable: !0,
          get: function () {
            return r.verify;
          },
        }),
        Object.defineProperty(t, "FastSigning", {
          enumerable: !0,
          get: function () {
            return r.FastSigning;
          },
        }));
      var a = n(5949);
      (Object.defineProperty(t, "getLiquidityPoolId", {
        enumerable: !0,
        get: function () {
          return a.getLiquidityPoolId;
        },
      }),
        Object.defineProperty(t, "LiquidityPoolFeeV18", {
          enumerable: !0,
          get: function () {
            return a.LiquidityPoolFeeV18;
          },
        }));
      var i = n(3370);
      Object.defineProperty(t, "Keypair", {
        enumerable: !0,
        get: function () {
          return i.Keypair;
        },
      });
      var u = n(3054);
      (Object.defineProperty(t, "UnsignedHyper", {
        enumerable: !0,
        get: function () {
          return u.UnsignedHyper;
        },
      }),
        Object.defineProperty(t, "Hyper", {
          enumerable: !0,
          get: function () {
            return u.Hyper;
          },
        }));
      var s = n(4965);
      Object.defineProperty(t, "TransactionBase", {
        enumerable: !0,
        get: function () {
          return s.TransactionBase;
        },
      });
      var l = n(4966);
      Object.defineProperty(t, "Transaction", {
        enumerable: !0,
        get: function () {
          return l.Transaction;
        },
      });
      var c = n(5991);
      Object.defineProperty(t, "FeeBumpTransaction", {
        enumerable: !0,
        get: function () {
          return c.FeeBumpTransaction;
        },
      });
      var d = n(7568);
      (Object.defineProperty(t, "TransactionBuilder", {
        enumerable: !0,
        get: function () {
          return d.TransactionBuilder;
        },
      }),
        Object.defineProperty(t, "TimeoutInfinite", {
          enumerable: !0,
          get: function () {
            return d.TimeoutInfinite;
          },
        }),
        Object.defineProperty(t, "BASE_FEE", {
          enumerable: !0,
          get: function () {
            return d.BASE_FEE;
          },
        }));
      var p = n(3649);
      Object.defineProperty(t, "Asset", {
        enumerable: !0,
        get: function () {
          return p.Asset;
        },
      });
      var f = n(4967);
      Object.defineProperty(t, "LiquidityPoolAsset", {
        enumerable: !0,
        get: function () {
          return f.LiquidityPoolAsset;
        },
      });
      var m = n(4968);
      Object.defineProperty(t, "LiquidityPoolId", {
        enumerable: !0,
        get: function () {
          return m.LiquidityPoolId;
        },
      });
      var y = n(5987);
      (Object.defineProperty(t, "Operation", {
        enumerable: !0,
        get: function () {
          return y.Operation;
        },
      }),
        Object.defineProperty(t, "AuthRequiredFlag", {
          enumerable: !0,
          get: function () {
            return y.AuthRequiredFlag;
          },
        }),
        Object.defineProperty(t, "AuthRevocableFlag", {
          enumerable: !0,
          get: function () {
            return y.AuthRevocableFlag;
          },
        }),
        Object.defineProperty(t, "AuthImmutableFlag", {
          enumerable: !0,
          get: function () {
            return y.AuthImmutableFlag;
          },
        }),
        Object.defineProperty(t, "AuthClawbackEnabledFlag", {
          enumerable: !0,
          get: function () {
            return y.AuthClawbackEnabledFlag;
          },
        }));
      var h = n(4969);
      Object.keys(h).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return h[e];
            },
          });
      });
      var v = n(5993);
      Object.defineProperty(t, "Account", {
        enumerable: !0,
        get: function () {
          return v.Account;
        },
      });
      var g = n(7569);
      Object.defineProperty(t, "MuxedAccount", {
        enumerable: !0,
        get: function () {
          return g.MuxedAccount;
        },
      });
      var b = n(5989);
      Object.defineProperty(t, "Claimant", {
        enumerable: !0,
        get: function () {
          return b.Claimant;
        },
      });
      var w = n(7570);
      Object.defineProperty(t, "Networks", {
        enumerable: !0,
        get: function () {
          return w.Networks;
        },
      });
      var S = n(3091);
      Object.defineProperty(t, "StrKey", {
        enumerable: !0,
        get: function () {
          return S.StrKey;
        },
      });
      var k = n(5992);
      Object.defineProperty(t, "SignerKey", {
        enumerable: !0,
        get: function () {
          return k.SignerKey;
        },
      });
      var T = n(3287);
      (Object.defineProperty(t, "decodeAddressToMuxedAccount", {
        enumerable: !0,
        get: function () {
          return T.decodeAddressToMuxedAccount;
        },
      }),
        Object.defineProperty(t, "encodeMuxedAccountToAddress", {
          enumerable: !0,
          get: function () {
            return T.encodeMuxedAccountToAddress;
          },
        }),
        Object.defineProperty(t, "extractBaseAddress", {
          enumerable: !0,
          get: function () {
            return T.extractBaseAddress;
          },
        }),
        Object.defineProperty(t, "encodeMuxedAccount", {
          enumerable: !0,
          get: function () {
            return T.encodeMuxedAccount;
          },
        }));
      var P = n(2825),
        A = O(P);
      function O(e) {
        return e && e.__esModule ? e : { default: e };
      }
      ((t.xdr = A.default), (t.default = e.exports));
    },
    4942: function (e) {
      e.exports = JSON.parse(
        '{"name":"stellar-sdk","version":"10.1.2","description":"stellar-sdk is a library for working with the Stellar Horizon server.","main":"./lib/index.js","types":"./lib/index.d.ts","files":["/types","/lib","/dist"],"scripts":{"prepare":"gulp build","test":"babel-node ./node_modules/.bin/gulp test","test:watch":"babel-node ./node_modules/.bin/gulp test:watch","build:docs":"gulp build:docs","docs":"yarn build:docs && jsdoc -c .jsdoc.json","preversion":"gulp test","version":"gulp build","postversion":"git push && git push --tags","prettier-all":"prettier --write **/*.{js,ts}"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"prettier":"@stellar/prettier-config","lint-staged":{"lib/*.{js,json}":["prettier --write","git add"],"lib/*.js":["eslint --fix --max-warnings 0","git add"],"**/*.ts":["prettier --write","tslint --fix","git add"]},"keywords":["stellar"],"repository":{"type":"git","url":"https://github.com/stellar/js-stellar-sdk.git"},"author":"Stellar Development Foundation <hello@stellar.org>","license":"Apache-2.0","bugs":{"url":"https://github.com/stellar/js-stellar-sdk/issues"},"homepage":"https://github.com/stellar/js-stellar-sdk","devDependencies":{"@kollavarsham/gulp-coveralls":"0.2.8","@stellar/prettier-config":"^1.0.1","@stellar/tsconfig":"^1.0.1","@stellar/tslint-config":"^1.0.3","@types/detect-node":"^2.0.0","@types/lodash":"^4.14.130","axios-mock-adapter":"^1.16.0","babel-cli":"^6.26.0","babel-core":"~6.26.3","babel-eslint":"^10.0.1","babel-istanbul":"^0.12.2","babel-loader":"^7.0.0","babel-plugin-transform-builtin-extend":"^1.1.2","babel-preset-es2015":"^6.24.1","babel-register":"^6.26.0","body-parser":"^1.12.2","chai":"^2.2.0","chai-as-promised":"^5.2.0","chai-http":"^4.3.0","clear":"^0.1.0","coveralls":"3.0.2","del":"^5.1.0","eslint":"^5.12.1","eslint-config-airbnb-base":"^13.1.0","eslint-config-prettier":"^3.6.0","eslint-plugin-import":"^2.15.0","eslint-plugin-node":"^8.0.1","eslint-plugin-prefer-import":"^0.0.1","eslint-plugin-prettier":"^3.0.1","ghooks":"^0.3.0","gulp":"^4.0.0","gulp-babel":"^6.1.3","gulp-eslint":"^5.0.0","gulp-insert":"^0.5.0","gulp-istanbul":"^1.1.3","gulp-load-plugins":"1.5.0","gulp-mocha":"^7.0.2","gulp-plumber":"^1.0.0","gulp-rename":"~1.2.0","gulp-tslint":"^8.1.4","husky":"^1.3.1","isparta":"^4.1.1","istanbul":"^0.4.5","jsdoc":"3.5.5","json-loader":"^0.5.1","karma":"^6.3.0","karma-chai":"^0.1.0","karma-chai-as-promised":"^0.1.2","karma-chrome-launcher":"^3.1.0","karma-commonjs":"^1.0.0","karma-firefox-launcher":"^2.1.2","karma-mocha":"^2.0.1","karma-phantomjs-launcher":"^1.0.4","karma-sauce-launcher":"2.0.2","karma-sinon":"^1.0.5","karma-sinon-chai":"2.0.2","karma-webpack":"5.0.0","lint-staged":"7.3.0","minami":"^1.1.1","mocha":"^9.1.4","prettier":"^1.17.1","sinon":"^1.14.1","sinon-chai":"^2.7.0","terser-webpack-plugin":"^1.3.0","ts-loader":"^5.0.0","tslint":"^5.16.0","typescript":"^3.4.5","webpack":"^4.33.0","webpack-cli":"^3.3.3","webpack-stream":"^5.2.1"},"dependencies":{"@types/eventsource":"^1.1.2","@types/node":">= 8","@types/randombytes":"^2.0.0","@types/urijs":"^1.19.6","axios":"0.25.0","bignumber.js":"^4.0.0","detect-node":"^2.0.4","es6-promise":"^4.2.4","eventsource":"^1.1.1","lodash":"^4.17.21","randombytes":"^2.1.0","stellar-base":"^8.0.1","toml":"^2.3.0","tslib":"^1.10.0","urijs":"^1.19.1","utility-types":"^3.7.0"}}',
      );
    },
    4965: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TransactionBase = void 0));
        var o =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                ((o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o));
              }
            }
            return function (t, n, o) {
              return (n && e(t.prototype, n), o && e(t, o), t);
            };
          })(),
          a = n(2825),
          i = l(a),
          u = n(3882),
          s = n(3370);
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        t.TransactionBase = (function () {
          function t(e, n, r, a) {
            if ((c(this, t), "string" !== typeof a))
              throw new Error(
                "Invalid passphrase provided to Transaction: expected a string but got a " +
                  ("undefined" === typeof a ? "undefined" : o(a)),
              );
            ((this._networkPassphrase = a),
              (this._tx = e),
              (this._signatures = n),
              (this._fee = r));
          }
          return (
            r(t, [
              {
                key: "sign",
                value: function () {
                  for (
                    var e = this,
                      t = this.hash(),
                      n = arguments.length,
                      o = Array(n),
                      r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  o.forEach(function (n) {
                    var o = n.signDecorated(t);
                    e.signatures.push(o);
                  });
                },
              },
              {
                key: "getKeypairSignature",
                value: function (e) {
                  return e.sign(this.hash()).toString("base64");
                },
              },
              {
                key: "addSignature",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                  if (!n || "string" !== typeof n)
                    throw new Error("Invalid signature");
                  if (!t || "string" !== typeof t)
                    throw new Error("Invalid publicKey");
                  var o = void 0,
                    r = void 0,
                    a = e.from(n, "base64");
                  try {
                    ((o = s.Keypair.fromPublicKey(t)), (r = o.signatureHint()));
                  } catch (u) {
                    throw new Error("Invalid publicKey");
                  }
                  if (!o.verify(this.hash(), a))
                    throw new Error("Invalid signature");
                  this.signatures.push(
                    new i.default.DecoratedSignature({ hint: r, signature: a }),
                  );
                },
              },
              {
                key: "addDecoratedSignature",
                value: function (e) {
                  this.signatures.push(e);
                },
              },
              {
                key: "signHashX",
                value: function (t) {
                  if (
                    ("string" === typeof t && (t = e.from(t, "hex")),
                    t.length > 64)
                  )
                    throw new Error("preimage cannnot be longer than 64 bytes");
                  var n = t,
                    o = (0, u.hash)(t),
                    r = o.slice(o.length - 4);
                  this.signatures.push(
                    new i.default.DecoratedSignature({ hint: r, signature: n }),
                  );
                },
              },
              {
                key: "hash",
                value: function () {
                  return (0, u.hash)(this.signatureBase());
                },
              },
              {
                key: "signatureBase",
                value: function () {
                  throw new Error("Implement in subclass");
                },
              },
              {
                key: "toEnvelope",
                value: function () {
                  throw new Error("Implement in subclass");
                },
              },
              {
                key: "toXDR",
                value: function () {
                  return this.toEnvelope().toXDR().toString("base64");
                },
              },
              {
                key: "signatures",
                get: function () {
                  return this._signatures;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "tx",
                get: function () {
                  return this._tx;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "fee",
                get: function () {
                  return this._fee;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "networkPassphrase",
                get: function () {
                  return this._networkPassphrase;
                },
                set: function (e) {
                  this._networkPassphrase = e;
                },
              },
            ]),
            t
          );
        })();
      }).call(this, n(2).Buffer);
    },
    4966: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Transaction = void 0));
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                ((o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o));
              }
            }
            return function (t, n, o) {
              return (n && e(t.prototype, n), o && e(t, o), t);
            };
          })(),
          r = n(4960),
          a = m(r),
          i = n(2825),
          u = m(i),
          s = n(3882),
          l = n(3091),
          c = n(5987),
          d = n(4969),
          p = n(4965),
          f = n(3287);
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        function v(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          ((e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        }
        t.Transaction = (function (t) {
          function n(t, o) {
            if ((y(this, n), "string" === typeof t)) {
              var r = e.from(t, "base64");
              t = u.default.TransactionEnvelope.fromXDR(r);
            }
            var i = t.switch();
            if (
              i !== u.default.EnvelopeType.envelopeTypeTxV0() &&
              i !== u.default.EnvelopeType.envelopeTypeTx()
            )
              throw new Error(
                "Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an " +
                  i.name +
                  ".",
              );
            var s = t.value(),
              d = s.tx(),
              p = d.fee().toString(),
              m = (s.signatures() || []).slice(),
              v = h(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(
                  this,
                  d,
                  m,
                  p,
                  o,
                ),
              );
            switch (
              ((v._envelopeType = i),
              (v._memo = d.memo()),
              (v._sequence = d.seqNum().toString()),
              v._envelopeType)
            ) {
              case u.default.EnvelopeType.envelopeTypeTxV0():
                v._source = l.StrKey.encodeEd25519PublicKey(
                  v.tx.sourceAccountEd25519(),
                );
                break;
              default:
                v._source = (0, f.encodeMuxedAccountToAddress)(
                  v.tx.sourceAccount(),
                );
                break;
            }
            var g = null,
              b = null;
            switch (v._envelopeType) {
              case u.default.EnvelopeType.envelopeTypeTxV0():
                b = d.timeBounds();
                break;
              case u.default.EnvelopeType.envelopeTypeTx():
                switch (d.cond().switch()) {
                  case u.default.PreconditionType.precondTime():
                    b = d.cond().timeBounds();
                    break;
                  case u.default.PreconditionType.precondV2():
                    ((g = d.cond().v2()), (b = g.timeBounds()));
                    break;
                  default:
                    break;
                }
                break;
              default:
                break;
            }
            if (
              (b &&
                (v._timeBounds = {
                  minTime: b.minTime().toString(),
                  maxTime: b.maxTime().toString(),
                }),
              g)
            ) {
              var w = g.ledgerBounds();
              w &&
                (v._ledgerBounds = {
                  minLedger: w.minLedger(),
                  maxLedger: w.maxLedger(),
                });
              var S = g.minSeqNum();
              (S && (v._minAccountSequence = S.toString()),
                (v._minAccountSequenceAge = g.minSeqAge()),
                (v._minAccountSequenceLedgerGap = g.minSeqLedgerGap()),
                (v._extraSigners = g.extraSigners()));
            }
            var k = d.operations() || [];
            return (
              (v._operations = (0, a.default)(k, function (e) {
                return c.Operation.fromXDRObject(e);
              })),
              v
            );
          }
          return (
            v(n, t),
            o(n, [
              {
                key: "signatureBase",
                value: function () {
                  var t = this.tx;
                  this._envelopeType ===
                    u.default.EnvelopeType.envelopeTypeTxV0() &&
                    (t = u.default.Transaction.fromXDR(
                      e.concat([
                        u.default.PublicKeyType.publicKeyTypeEd25519().toXDR(),
                        t.toXDR(),
                      ]),
                    ));
                  var n =
                      new u.default.TransactionSignaturePayloadTaggedTransaction.envelopeTypeTx(
                        t,
                      ),
                    o = new u.default.TransactionSignaturePayload({
                      networkId: u.default.Hash.fromXDR(
                        (0, s.hash)(this.networkPassphrase),
                      ),
                      taggedTransaction: n,
                    });
                  return o.toXDR();
                },
              },
              {
                key: "toEnvelope",
                value: function () {
                  var e = this.tx.toXDR(),
                    t = this.signatures.slice(),
                    n = void 0;
                  switch (this._envelopeType) {
                    case u.default.EnvelopeType.envelopeTypeTxV0():
                      n = new u.default.TransactionEnvelope.envelopeTypeTxV0(
                        new u.default.TransactionV0Envelope({
                          tx: u.default.TransactionV0.fromXDR(e),
                          signatures: t,
                        }),
                      );
                      break;
                    case u.default.EnvelopeType.envelopeTypeTx():
                      n = new u.default.TransactionEnvelope.envelopeTypeTx(
                        new u.default.TransactionV1Envelope({
                          tx: u.default.Transaction.fromXDR(e),
                          signatures: t,
                        }),
                      );
                      break;
                    default:
                      throw new Error(
                        "Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an " +
                          this._envelopeType.name +
                          ".",
                      );
                  }
                  return n;
                },
              },
              {
                key: "getClaimableBalanceId",
                value: function (e) {
                  if (
                    !Number.isInteger(e) ||
                    e < 0 ||
                    e >= this.operations.length
                  )
                    throw new RangeError("invalid operation index");
                  var t = this.operations[e];
                  try {
                    t = c.Operation.createClaimableBalance(t);
                  } catch (i) {
                    throw new TypeError(
                      "expected createClaimableBalance, got " +
                        t.type +
                        ": " +
                        i,
                    );
                  }
                  var n = l.StrKey.decodeEd25519PublicKey(
                      (0, f.extractBaseAddress)(this.source),
                    ),
                    o = u.default.HashIdPreimage.envelopeTypeOpId(
                      new u.default.HashIdPreimageOperationId({
                        sourceAccount:
                          u.default.AccountId.publicKeyTypeEd25519(n),
                        seqNum: u.default.SequenceNumber.fromString(
                          this.sequence,
                        ),
                        opNum: e,
                      }),
                    ),
                    r = (0, s.hash)(o.toXDR("raw")),
                    a =
                      u.default.ClaimableBalanceId.claimableBalanceIdTypeV0(r);
                  return a.toXDR("hex");
                },
              },
              {
                key: "timeBounds",
                get: function () {
                  return this._timeBounds;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "ledgerBounds",
                get: function () {
                  return this._ledgerBounds;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "minAccountSequence",
                get: function () {
                  return this._minAccountSequence;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "minAccountSequenceAge",
                get: function () {
                  return this._minAccountSequenceAge;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "minAccountSequenceLedgerGap",
                get: function () {
                  return this._minAccountSequenceLedgerGap;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "extraSigners",
                get: function () {
                  return this._extraSigners;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "sequence",
                get: function () {
                  return this._sequence;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "source",
                get: function () {
                  return this._source;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "operations",
                get: function () {
                  return this._operations;
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
              {
                key: "memo",
                get: function () {
                  return d.Memo.fromXDRObject(this._memo);
                },
                set: function (e) {
                  throw new Error("Transaction is immutable");
                },
              },
            ]),
            n
          );
        })(p.TransactionBase);
      }).call(this, n(2).Buffer);
    },
    4967: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LiquidityPoolAsset = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(3369),
        a = c(r),
        i = n(2825),
        u = c(i),
        s = n(3649),
        l = n(5949);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.LiquidityPoolAsset = (function () {
        function e(t, n, o) {
          if ((d(this, e), !t || !(t instanceof s.Asset)))
            throw new Error("assetA is invalid");
          if (!n || !(n instanceof s.Asset))
            throw new Error("assetB is invalid");
          if (-1 !== s.Asset.compare(t, n))
            throw new Error("Assets are not in lexicographic order");
          if (!o || o !== l.LiquidityPoolFeeV18)
            throw new Error("fee is invalid");
          ((this.assetA = t), (this.assetB = n), (this.fee = o));
        }
        return (
          o(
            e,
            [
              {
                key: "toXDRObject",
                value: function () {
                  var e = new u.default.LiquidityPoolConstantProductParameters({
                      assetA: this.assetA.toXDRObject(),
                      assetB: this.assetB.toXDRObject(),
                      fee: this.fee,
                    }),
                    t = new u.default.LiquidityPoolParameters(
                      "liquidityPoolConstantProduct",
                      e,
                    );
                  return new u.default.ChangeTrustAsset(
                    "assetTypePoolShare",
                    t,
                  );
                },
              },
              {
                key: "getLiquidityPoolParameters",
                value: function () {
                  return (0, a.default)({
                    assetA: this.assetA,
                    assetB: this.assetB,
                    fee: this.fee,
                  });
                },
              },
              {
                key: "getAssetType",
                value: function () {
                  return "liquidity_pool_shares";
                },
              },
              {
                key: "equals",
                value: function (e) {
                  return (
                    this.assetA.equals(e.assetA) &&
                    this.assetB.equals(e.assetB) &&
                    this.fee === e.fee
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = (0, l.getLiquidityPoolId)(
                    "constant_product",
                    this.getLiquidityPoolParameters(),
                  ).toString("hex");
                  return "liquidity_pool:" + e;
                },
              },
            ],
            [
              {
                key: "fromOperation",
                value: function (e) {
                  var t = e.switch();
                  if (t === u.default.AssetType.assetTypePoolShare()) {
                    var n = e.liquidityPool().constantProduct();
                    return new this(
                      s.Asset.fromOperation(n.assetA()),
                      s.Asset.fromOperation(n.assetB()),
                      n.fee(),
                    );
                  }
                  throw new Error("Invalid asset type: " + t.name);
                },
              },
            ],
          ),
          e
        );
      })();
    },
    4968: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LiquidityPoolId = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(3369),
        a = s(r),
        i = n(2825),
        u = s(i);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.LiquidityPoolId = (function () {
        function e(t) {
          if ((l(this, e), !t))
            throw new Error("liquidityPoolId cannot be empty");
          if (!/^[a-f0-9]{64}$/.test(t))
            throw new Error("Liquidity pool ID is not a valid hash");
          this.liquidityPoolId = t;
        }
        return (
          o(
            e,
            [
              {
                key: "toXDRObject",
                value: function () {
                  var e = u.default.PoolId.fromXDR(this.liquidityPoolId, "hex");
                  return new u.default.TrustLineAsset("assetTypePoolShare", e);
                },
              },
              {
                key: "getLiquidityPoolId",
                value: function () {
                  return (0, a.default)(this.liquidityPoolId);
                },
              },
              {
                key: "getAssetType",
                value: function () {
                  return "liquidity_pool_shares";
                },
              },
              {
                key: "equals",
                value: function (e) {
                  return this.liquidityPoolId === e.getLiquidityPoolId();
                },
              },
              {
                key: "toString",
                value: function () {
                  return "liquidity_pool:" + this.liquidityPoolId;
                },
              },
            ],
            [
              {
                key: "fromOperation",
                value: function (e) {
                  var t = e.switch();
                  if (t === u.default.AssetType.assetTypePoolShare()) {
                    var n = e.liquidityPoolId().toString("hex");
                    return new this(n);
                  }
                  throw new Error("Invalid asset type: " + t.name);
                },
              },
            ],
          ),
          e
        );
      })();
    },
    4969: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Memo =
            t.MemoReturn =
            t.MemoHash =
            t.MemoText =
            t.MemoID =
            t.MemoNone =
              void 0));
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                ((o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o));
              }
            }
            return function (t, n, o) {
              return (n && e(t.prototype, n), o && e(t, o), t);
            };
          })(),
          r = n(2931),
          a = y(r),
          i = n(2964),
          u = y(i),
          s = n(3369),
          l = y(s),
          c = n(3054),
          d = n(3549),
          p = y(d),
          f = n(2825),
          m = y(f);
        function y(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function h(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var v = (t.MemoNone = "none"),
          g = (t.MemoID = "id"),
          b = (t.MemoText = "text"),
          w = (t.MemoHash = "hash"),
          S = (t.MemoReturn = "return"),
          k = (function () {
            function t(n) {
              var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              switch (
                (h(this, t), (this._type = n), (this._value = o), this._type)
              ) {
                case v:
                  break;
                case g:
                  t._validateIdValue(o);
                  break;
                case b:
                  t._validateTextValue(o);
                  break;
                case w:
                case S:
                  (t._validateHashValue(o),
                    (0, u.default)(o) && (this._value = e.from(o, "hex")));
                  break;
                default:
                  throw new Error("Invalid memo type");
              }
            }
            return (
              o(
                t,
                [
                  {
                    key: "toXDRObject",
                    value: function () {
                      switch (this._type) {
                        case v:
                          return m.default.Memo.memoNone();
                        case g:
                          return m.default.Memo.memoId(
                            c.UnsignedHyper.fromString(this._value),
                          );
                        case b:
                          return m.default.Memo.memoText(this._value);
                        case w:
                          return m.default.Memo.memoHash(this._value);
                        case S:
                          return m.default.Memo.memoReturn(this._value);
                        default:
                          return null;
                      }
                    },
                  },
                  {
                    key: "type",
                    get: function () {
                      return (0, l.default)(this._type);
                    },
                    set: function (e) {
                      throw new Error("Memo is immutable");
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      switch (this._type) {
                        case v:
                          return null;
                        case g:
                        case b:
                          return (0, l.default)(this._value);
                        case w:
                        case S:
                          return e.from(this._value);
                        default:
                          throw new Error("Invalid memo type");
                      }
                    },
                    set: function (e) {
                      throw new Error("Memo is immutable");
                    },
                  },
                ],
                [
                  {
                    key: "_validateIdValue",
                    value: function (e) {
                      var t = new Error(
                        "Expects a int64 as a string. Got " + e,
                      );
                      if (!(0, u.default)(e)) throw t;
                      var n = void 0;
                      try {
                        n = new p.default(e);
                      } catch (o) {
                        throw t;
                      }
                      if (!n.isFinite()) throw t;
                      if (n.isNaN()) throw t;
                    },
                  },
                  {
                    key: "_validateTextValue",
                    value: function (e) {
                      if (!m.default.Memo.armTypeForArm("text").isValid(e))
                        throw new Error(
                          "Expects string, array or buffer, max 28 bytes",
                        );
                    },
                  },
                  {
                    key: "_validateHashValue",
                    value: function (t) {
                      var n = new Error(
                        "Expects a 32 byte hash value or hex encoded string. Got " +
                          t,
                      );
                      if (null === t || (0, a.default)(t)) throw n;
                      var o = void 0;
                      if ((0, u.default)(t)) {
                        if (!/^[0-9A-Fa-f]{64}$/g.test(t)) throw n;
                        o = e.from(t, "hex");
                      } else {
                        if (!e.isBuffer(t)) throw n;
                        o = e.from(t);
                      }
                      if (!o.length || 32 !== o.length) throw n;
                    },
                  },
                  {
                    key: "none",
                    value: function () {
                      return new t(v);
                    },
                  },
                  {
                    key: "text",
                    value: function (e) {
                      return new t(b, e);
                    },
                  },
                  {
                    key: "id",
                    value: function (e) {
                      return new t(g, e);
                    },
                  },
                  {
                    key: "hash",
                    value: function (e) {
                      return new t(w, e);
                    },
                  },
                  {
                    key: "return",
                    value: function (e) {
                      return new t(S, e);
                    },
                  },
                  {
                    key: "fromXDRObject",
                    value: function (e) {
                      switch (e.arm()) {
                        case "id":
                          return t.id(e.value().toString());
                        case "text":
                          return t.text(e.value());
                        case "hash":
                          return t.hash(e.value());
                        case "retHash":
                          return t.return(e.value());
                        default:
                          break;
                      }
                      if ("undefined" === typeof e.value()) return t.none();
                      throw new Error("Unknown type");
                    },
                  },
                ],
              ),
              t
            );
          })();
        t.Memo = k;
      }).call(this, n(2).Buffer);
    },
    5948: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sign = r),
          (t.verify = a),
          (t.generate = i));
        var o = {};
        t.FastSigning = u();
        function r(e, t) {
          return o.sign(e, t);
        }
        function a(e, t, n) {
          return o.verify(e, t, n);
        }
        function i(e) {
          return o.generate(e);
        }
        function u() {
          return "undefined" === typeof window ? s() : l();
        }
        function s() {
          var t = void 0;
          try {
            t = n(7409);
          } catch (r) {
            return l();
          }
          return Object.keys(t).length
            ? ((o.generate = function (n) {
                var o = e.alloc(t.crypto_sign_PUBLICKEYBYTES),
                  r = e.alloc(t.crypto_sign_SECRETKEYBYTES);
                return (t.crypto_sign_seed_keypair(o, r, n), o);
              }),
              (o.sign = function (n, o) {
                n = e.from(n);
                var r = e.alloc(t.crypto_sign_BYTES);
                return (t.crypto_sign_detached(r, n, o), r);
              }),
              (o.verify = function (n, o, r) {
                n = e.from(n);
                try {
                  return t.crypto_sign_verify_detached(o, n, r);
                } catch (a) {
                  return !1;
                }
              }),
              !0)
            : l();
        }
        function l() {
          var t = n(2925);
          return (
            (o.generate = function (n) {
              var o = new Uint8Array(n),
                r = t.sign.keyPair.fromSeed(o);
              return e.from(r.publicKey);
            }),
            (o.sign = function (n, o) {
              ((n = e.from(n)),
                (n = new Uint8Array(n.toJSON().data)),
                (o = new Uint8Array(o.toJSON().data)));
              var r = t.sign.detached(n, o);
              return e.from(r);
            }),
            (o.verify = function (n, o, r) {
              return (
                (n = e.from(n)),
                (n = new Uint8Array(n.toJSON().data)),
                (o = new Uint8Array(o.toJSON().data)),
                (r = new Uint8Array(r.toJSON().data)),
                t.sign.detached.verify(n, o, r)
              );
            }),
            !1
          );
        }
      }).call(this, n(2).Buffer);
    },
    5949: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LiquidityPoolFeeV18 = void 0),
          (t.getLiquidityPoolId = l));
        var o = n(2825),
          r = u(o),
          a = n(3649),
          i = n(3882);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = (t.LiquidityPoolFeeV18 = 30);
        function l(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ("constant_product" !== t)
            throw new Error("liquidityPoolType is invalid");
          var o = n.assetA,
            u = n.assetB,
            l = n.fee;
          if (!o || !(o instanceof a.Asset))
            throw new Error("assetA is invalid");
          if (!u || !(u instanceof a.Asset))
            throw new Error("assetB is invalid");
          if (!l || l !== s) throw new Error("fee is invalid");
          if (-1 !== a.Asset.compare(o, u))
            throw new Error("Assets are not in lexicographic order");
          var c =
              r.default.LiquidityPoolType.liquidityPoolConstantProduct().toXDR(),
            d = new r.default.LiquidityPoolConstantProductParameters({
              assetA: o.toXDRObject(),
              assetB: u.toXDRObject(),
              fee: l,
            }).toXDR(),
            p = e.concat([c, d]);
          return (0, i.hash)(p);
        }
      }).call(this, n(2).Buffer);
    },
    5987: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Operation =
          t.AuthClawbackEnabledFlag =
          t.AuthImmutableFlag =
          t.AuthRevocableFlag =
          t.AuthRequiredFlag =
            void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(3054),
        a = n(3549),
        i = R(a),
        u = n(4647),
        s = R(u),
        l = n(2931),
        c = R(l),
        d = n(2964),
        p = R(d),
        f = n(3884),
        m = R(f),
        y = n(5988),
        h = R(y),
        v = n(7543),
        g = n(3649),
        b = n(4967),
        w = n(5989),
        S = n(3091),
        k = n(4968),
        T = n(2825),
        P = R(T),
        A = n(7544),
        O = x(A),
        E = n(3287);
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return ((t.default = e), t);
      }
      function R(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function _(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var C = 1e7,
        B = "9223372036854775807",
        I =
          ((t.AuthRequiredFlag = 1),
          (t.AuthRevocableFlag = 2),
          (t.AuthImmutableFlag = 4),
          (t.AuthClawbackEnabledFlag = 8),
          (t.Operation = (function () {
            function e() {
              _(this, e);
            }
            return (
              o(e, null, [
                {
                  key: "setSourceAccount",
                  value: function (e, t) {
                    if (t.source)
                      try {
                        e.sourceAccount = (0, E.decodeAddressToMuxedAccount)(
                          t.source,
                        );
                      } catch (n) {
                        throw new Error("Source address is invalid");
                      }
                  },
                },
                {
                  key: "fromXDRObject",
                  value: function (e) {
                    var t = {};
                    e.sourceAccount() &&
                      (t.source = (0, E.encodeMuxedAccountToAddress)(
                        e.sourceAccount(),
                      ));
                    var n = e.body().value(),
                      o = e.body().switch().name;
                    switch (o) {
                      case "createAccount":
                        ((t.type = "createAccount"),
                          (t.destination = L(n.destination())),
                          (t.startingBalance = this._fromXDRAmount(
                            n.startingBalance(),
                          )));
                        break;
                      case "payment":
                        ((t.type = "payment"),
                          (t.destination = (0, E.encodeMuxedAccountToAddress)(
                            n.destination(),
                          )),
                          (t.asset = g.Asset.fromOperation(n.asset())),
                          (t.amount = this._fromXDRAmount(n.amount())));
                        break;
                      case "pathPaymentStrictReceive":
                        ((t.type = "pathPaymentStrictReceive"),
                          (t.sendAsset = g.Asset.fromOperation(n.sendAsset())),
                          (t.sendMax = this._fromXDRAmount(n.sendMax())),
                          (t.destination = (0, E.encodeMuxedAccountToAddress)(
                            n.destination(),
                          )),
                          (t.destAsset = g.Asset.fromOperation(n.destAsset())),
                          (t.destAmount = this._fromXDRAmount(n.destAmount())),
                          (t.path = []));
                        var r = n.path();
                        Object.keys(r).forEach(function (e) {
                          t.path.push(g.Asset.fromOperation(r[e]));
                        });
                        break;
                      case "pathPaymentStrictSend":
                        ((t.type = "pathPaymentStrictSend"),
                          (t.sendAsset = g.Asset.fromOperation(n.sendAsset())),
                          (t.sendAmount = this._fromXDRAmount(n.sendAmount())),
                          (t.destination = (0, E.encodeMuxedAccountToAddress)(
                            n.destination(),
                          )),
                          (t.destAsset = g.Asset.fromOperation(n.destAsset())),
                          (t.destMin = this._fromXDRAmount(n.destMin())),
                          (t.path = []));
                        var a = n.path();
                        Object.keys(a).forEach(function (e) {
                          t.path.push(g.Asset.fromOperation(a[e]));
                        });
                        break;
                      case "changeTrust":
                        switch (((t.type = "changeTrust"), n.line().switch())) {
                          case P.default.AssetType.assetTypePoolShare():
                            t.line = b.LiquidityPoolAsset.fromOperation(
                              n.line(),
                            );
                            break;
                          default:
                            t.line = g.Asset.fromOperation(n.line());
                            break;
                        }
                        t.limit = this._fromXDRAmount(n.limit());
                        break;
                      case "allowTrust":
                        ((t.type = "allowTrust"),
                          (t.trustor = L(n.trustor())),
                          (t.assetCode = n.asset().value().toString()),
                          (t.assetCode = (0, s.default)(t.assetCode, "\0")),
                          (t.authorize = n.authorize()));
                        break;
                      case "setOptions":
                        if (
                          ((t.type = "setOptions"),
                          n.inflationDest() &&
                            (t.inflationDest = L(n.inflationDest())),
                          (t.clearFlags = n.clearFlags()),
                          (t.setFlags = n.setFlags()),
                          (t.masterWeight = n.masterWeight()),
                          (t.lowThreshold = n.lowThreshold()),
                          (t.medThreshold = n.medThreshold()),
                          (t.highThreshold = n.highThreshold()),
                          (t.homeDomain =
                            void 0 !== n.homeDomain()
                              ? n.homeDomain().toString("ascii")
                              : void 0),
                          n.signer())
                        ) {
                          var i = {},
                            u = n.signer().key().arm();
                          if ("ed25519" === u)
                            i.ed25519PublicKey = L(n.signer().key());
                          else if ("preAuthTx" === u)
                            i.preAuthTx = n.signer().key().preAuthTx();
                          else if ("hashX" === u)
                            i.sha256Hash = n.signer().key().hashX();
                          else if ("ed25519SignedPayload" === u) {
                            var l = n.signer().key().ed25519SignedPayload();
                            i.ed25519SignedPayload =
                              S.StrKey.encodeSignedPayload(l.toXDR());
                          }
                          ((i.weight = n.signer().weight()), (t.signer = i));
                        }
                        break;
                      case "manageOffer":
                      case "manageSellOffer":
                        ((t.type = "manageSellOffer"),
                          (t.selling = g.Asset.fromOperation(n.selling())),
                          (t.buying = g.Asset.fromOperation(n.buying())),
                          (t.amount = this._fromXDRAmount(n.amount())),
                          (t.price = this._fromXDRPrice(n.price())),
                          (t.offerId = n.offerId().toString()));
                        break;
                      case "manageBuyOffer":
                        ((t.type = "manageBuyOffer"),
                          (t.selling = g.Asset.fromOperation(n.selling())),
                          (t.buying = g.Asset.fromOperation(n.buying())),
                          (t.buyAmount = this._fromXDRAmount(n.buyAmount())),
                          (t.price = this._fromXDRPrice(n.price())),
                          (t.offerId = n.offerId().toString()));
                        break;
                      case "createPassiveOffer":
                      case "createPassiveSellOffer":
                        ((t.type = "createPassiveSellOffer"),
                          (t.selling = g.Asset.fromOperation(n.selling())),
                          (t.buying = g.Asset.fromOperation(n.buying())),
                          (t.amount = this._fromXDRAmount(n.amount())),
                          (t.price = this._fromXDRPrice(n.price())));
                        break;
                      case "accountMerge":
                        ((t.type = "accountMerge"),
                          (t.destination = (0, E.encodeMuxedAccountToAddress)(
                            n,
                          )));
                        break;
                      case "manageData":
                        ((t.type = "manageData"),
                          (t.name = n.dataName().toString("ascii")),
                          (t.value = n.dataValue()));
                        break;
                      case "inflation":
                        t.type = "inflation";
                        break;
                      case "bumpSequence":
                        ((t.type = "bumpSequence"),
                          (t.bumpTo = n.bumpTo().toString()));
                        break;
                      case "createClaimableBalance":
                        ((t.type = "createClaimableBalance"),
                          (t.asset = g.Asset.fromOperation(n.asset())),
                          (t.amount = this._fromXDRAmount(n.amount())),
                          (t.claimants = []),
                          n.claimants().forEach(function (e) {
                            t.claimants.push(w.Claimant.fromXDR(e));
                          }));
                        break;
                      case "claimClaimableBalance":
                        ((t.type = "claimClaimableBalance"),
                          (t.balanceId = n.toXDR("hex")));
                        break;
                      case "beginSponsoringFutureReserves":
                        ((t.type = "beginSponsoringFutureReserves"),
                          (t.sponsoredId = L(n.sponsoredId())));
                        break;
                      case "endSponsoringFutureReserves":
                        t.type = "endSponsoringFutureReserves";
                        break;
                      case "revokeSponsorship":
                        M(n, t);
                        break;
                      case "clawback":
                        ((t.type = "clawback"),
                          (t.amount = this._fromXDRAmount(n.amount())),
                          (t.from = (0, E.encodeMuxedAccountToAddress)(
                            n.from(),
                          )),
                          (t.asset = g.Asset.fromOperation(n.asset())));
                        break;
                      case "clawbackClaimableBalance":
                        ((t.type = "clawbackClaimableBalance"),
                          (t.balanceId = n.toXDR("hex")));
                        break;
                      case "setTrustLineFlags":
                        ((t.type = "setTrustLineFlags"),
                          (t.asset = g.Asset.fromOperation(n.asset())),
                          (t.trustor = L(n.trustor())));
                        var c = n.clearFlags(),
                          d = n.setFlags(),
                          p = {
                            authorized:
                              P.default.TrustLineFlags.authorizedFlag(),
                            authorizedToMaintainLiabilities:
                              P.default.TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
                            clawbackEnabled:
                              P.default.TrustLineFlags.trustlineClawbackEnabledFlag(),
                          },
                          f = function (e) {
                            var t = p[e].value;
                            return !!(d & t) || (!(c & t) && void 0);
                          };
                        ((t.flags = {}),
                          Object.keys(p).forEach(function (e) {
                            t.flags[e] = f(e);
                          }));
                        break;
                      case "liquidityPoolDeposit":
                        ((t.type = "liquidityPoolDeposit"),
                          (t.liquidityPoolId = n
                            .liquidityPoolId()
                            .toString("hex")),
                          (t.maxAmountA = this._fromXDRAmount(n.maxAmountA())),
                          (t.maxAmountB = this._fromXDRAmount(n.maxAmountB())),
                          (t.minPrice = this._fromXDRPrice(n.minPrice())),
                          (t.maxPrice = this._fromXDRPrice(n.maxPrice())));
                        break;
                      case "liquidityPoolWithdraw":
                        ((t.type = "liquidityPoolWithdraw"),
                          (t.liquidityPoolId = n
                            .liquidityPoolId()
                            .toString("hex")),
                          (t.amount = this._fromXDRAmount(n.amount())),
                          (t.minAmountA = this._fromXDRAmount(n.minAmountA())),
                          (t.minAmountB = this._fromXDRAmount(n.minAmountB())));
                        break;
                      default:
                        throw new Error("Unknown operation: " + o);
                    }
                    return t;
                  },
                },
                {
                  key: "isValidAmount",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (!(0, p.default)(e)) return !1;
                    var n = void 0;
                    try {
                      n = new i.default(e);
                    } catch (o) {
                      return !1;
                    }
                    return !(
                      (!t && n.isZero()) ||
                      n.isNegative() ||
                      n.times(C).greaterThan(new i.default(B).toString()) ||
                      n.decimalPlaces() > 7 ||
                      n.isNaN() ||
                      !n.isFinite()
                    );
                  },
                },
                {
                  key: "constructAmountRequirementsError",
                  value: function (e) {
                    return (
                      e +
                      " argument must be of type String, represent a positive number and have at most 7 digits after the decimal"
                    );
                  },
                },
                {
                  key: "_checkUnsignedIntValue",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                    if (!(0, c.default)(t))
                      switch (((0, p.default)(t) && (t = parseFloat(t)), !0)) {
                        case !(0, m.default)(t) ||
                          !(0, h.default)(t) ||
                          t % 1 !== 0:
                          throw new Error(e + " value is invalid");
                        case t < 0:
                          throw new Error(e + " value must be unsigned");
                        case !n || (n && n(t, e)):
                          return t;
                        default:
                          throw new Error(e + " value is invalid");
                      }
                  },
                },
                {
                  key: "_toXDRAmount",
                  value: function (e) {
                    var t = new i.default(e).mul(C);
                    return r.Hyper.fromString(t.toString());
                  },
                },
                {
                  key: "_fromXDRAmount",
                  value: function (e) {
                    return new i.default(e).div(C).toFixed(7);
                  },
                },
                {
                  key: "_fromXDRPrice",
                  value: function (e) {
                    var t = new i.default(e.n());
                    return t.div(new i.default(e.d())).toString();
                  },
                },
                {
                  key: "_toXDRPrice",
                  value: function (e) {
                    var t = void 0;
                    if (e.n && e.d) t = new P.default.Price(e);
                    else {
                      e = new i.default(e);
                      var n = (0, v.best_r)(e);
                      t = new P.default.Price({
                        n: parseInt(n[0], 10),
                        d: parseInt(n[1], 10),
                      });
                    }
                    if (t.n() < 0 || t.d() < 0)
                      throw new Error("price must be positive");
                    return t;
                  },
                },
              ]),
              e
            );
          })()));
      function M(e, t) {
        switch (e.switch().name) {
          case "revokeSponsorshipLedgerEntry":
            var n = e.ledgerKey();
            switch (n.switch().name) {
              case P.default.LedgerEntryType.account().name:
                ((t.type = "revokeAccountSponsorship"),
                  (t.account = L(n.account().accountId())));
                break;
              case P.default.LedgerEntryType.trustline().name:
                ((t.type = "revokeTrustlineSponsorship"),
                  (t.account = L(n.trustLine().accountId())));
                var o = n.trustLine().asset();
                switch (o.switch()) {
                  case P.default.AssetType.assetTypePoolShare():
                    t.asset = k.LiquidityPoolId.fromOperation(o);
                    break;
                  default:
                    t.asset = g.Asset.fromOperation(o);
                    break;
                }
                break;
              case P.default.LedgerEntryType.offer().name:
                ((t.type = "revokeOfferSponsorship"),
                  (t.seller = L(n.offer().sellerId())),
                  (t.offerId = n.offer().offerId().toString()));
                break;
              case P.default.LedgerEntryType.data().name:
                ((t.type = "revokeDataSponsorship"),
                  (t.account = L(n.data().accountId())),
                  (t.name = n.data().dataName().toString("ascii")));
                break;
              case P.default.LedgerEntryType.claimableBalance().name:
                ((t.type = "revokeClaimableBalanceSponsorship"),
                  (t.balanceId = n
                    .claimableBalance()
                    .balanceId()
                    .toXDR("hex")));
                break;
              case P.default.LedgerEntryType.liquidityPool().name:
                ((t.type = "revokeLiquidityPoolSponsorship"),
                  (t.liquidityPoolId = n
                    .liquidityPool()
                    .liquidityPoolId()
                    .toString("hex")));
                break;
              default:
                throw new Error("Unknown ledgerKey: " + e.switch().name);
            }
            break;
          case "revokeSponsorshipSigner":
            ((t.type = "revokeSignerSponsorship"),
              (t.account = L(e.signer().accountId())),
              (t.signer = q(e.signer().signerKey())));
            break;
          default:
            throw new Error("Unknown revokeSponsorship: " + e.switch().name);
        }
      }
      function q(e) {
        var t = {};
        switch (e.switch().name) {
          case P.default.SignerKeyType.signerKeyTypeEd25519().name:
            t.ed25519PublicKey = S.StrKey.encodeEd25519PublicKey(e.ed25519());
            break;
          case P.default.SignerKeyType.signerKeyTypePreAuthTx().name:
            t.preAuthTx = e.preAuthTx().toString("hex");
            break;
          case P.default.SignerKeyType.signerKeyTypeHashX().name:
            t.sha256Hash = e.hashX().toString("hex");
            break;
          default:
            throw new Error("Unknown signerKey: " + e.switch().name);
        }
        return t;
      }
      function L(e) {
        return S.StrKey.encodeEd25519PublicKey(e.ed25519());
      }
      ((I.accountMerge = O.accountMerge),
        (I.allowTrust = O.allowTrust),
        (I.bumpSequence = O.bumpSequence),
        (I.changeTrust = O.changeTrust),
        (I.createAccount = O.createAccount),
        (I.createClaimableBalance = O.createClaimableBalance),
        (I.claimClaimableBalance = O.claimClaimableBalance),
        (I.clawbackClaimableBalance = O.clawbackClaimableBalance),
        (I.createPassiveSellOffer = O.createPassiveSellOffer),
        (I.inflation = O.inflation),
        (I.manageData = O.manageData),
        (I.manageSellOffer = O.manageSellOffer),
        (I.manageBuyOffer = O.manageBuyOffer),
        (I.pathPaymentStrictReceive = O.pathPaymentStrictReceive),
        (I.pathPaymentStrictSend = O.pathPaymentStrictSend),
        (I.payment = O.payment),
        (I.setOptions = O.setOptions),
        (I.beginSponsoringFutureReserves = O.beginSponsoringFutureReserves),
        (I.endSponsoringFutureReserves = O.endSponsoringFutureReserves),
        (I.revokeAccountSponsorship = O.revokeAccountSponsorship),
        (I.revokeTrustlineSponsorship = O.revokeTrustlineSponsorship),
        (I.revokeOfferSponsorship = O.revokeOfferSponsorship),
        (I.revokeDataSponsorship = O.revokeDataSponsorship),
        (I.revokeClaimableBalanceSponsorship =
          O.revokeClaimableBalanceSponsorship),
        (I.revokeLiquidityPoolSponsorship = O.revokeLiquidityPoolSponsorship),
        (I.revokeSignerSponsorship = O.revokeSignerSponsorship),
        (I.clawback = O.clawback),
        (I.setTrustLineFlags = O.setTrustLineFlags),
        (I.liquidityPoolDeposit = O.liquidityPoolDeposit),
        (I.liquidityPoolWithdraw = O.liquidityPoolWithdraw));
    },
    5989: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Claimant = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(2825),
        a = s(r),
        i = n(3370),
        u = n(3091);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.Claimant = (function () {
        function e(t, n) {
          if ((l(this, e), t && !u.StrKey.isValidEd25519PublicKey(t)))
            throw new Error("Destination is invalid");
          if (((this._destination = t), n)) {
            if (!(n instanceof a.default.ClaimPredicate))
              throw new Error("Predicate should be an xdr.ClaimPredicate");
            this._predicate = n;
          } else
            this._predicate =
              a.default.ClaimPredicate.claimPredicateUnconditional();
        }
        return (
          o(
            e,
            [
              {
                key: "toXDRObject",
                value: function () {
                  var e = new a.default.ClaimantV0({
                    destination: i.Keypair.fromPublicKey(
                      this._destination,
                    ).xdrAccountId(),
                    predicate: this._predicate,
                  });
                  return a.default.Claimant.claimantTypeV0(e);
                },
              },
              {
                key: "destination",
                get: function () {
                  return this._destination;
                },
                set: function (e) {
                  throw new Error("Claimant is immutable");
                },
              },
              {
                key: "predicate",
                get: function () {
                  return this._predicate;
                },
                set: function (e) {
                  throw new Error("Claimant is immutable");
                },
              },
            ],
            [
              {
                key: "predicateUnconditional",
                value: function () {
                  return a.default.ClaimPredicate.claimPredicateUnconditional();
                },
              },
              {
                key: "predicateAnd",
                value: function (e, t) {
                  if (!(e instanceof a.default.ClaimPredicate))
                    throw new Error(
                      "left Predicate should be an xdr.ClaimPredicate",
                    );
                  if (!(t instanceof a.default.ClaimPredicate))
                    throw new Error(
                      "right Predicate should be an xdr.ClaimPredicate",
                    );
                  return a.default.ClaimPredicate.claimPredicateAnd([e, t]);
                },
              },
              {
                key: "predicateOr",
                value: function (e, t) {
                  if (!(e instanceof a.default.ClaimPredicate))
                    throw new Error(
                      "left Predicate should be an xdr.ClaimPredicate",
                    );
                  if (!(t instanceof a.default.ClaimPredicate))
                    throw new Error(
                      "right Predicate should be an xdr.ClaimPredicate",
                    );
                  return a.default.ClaimPredicate.claimPredicateOr([e, t]);
                },
              },
              {
                key: "predicateNot",
                value: function (e) {
                  if (!(e instanceof a.default.ClaimPredicate))
                    throw new Error(
                      "right Predicate should be an xdr.ClaimPredicate",
                    );
                  return a.default.ClaimPredicate.claimPredicateNot(e);
                },
              },
              {
                key: "predicateBeforeAbsoluteTime",
                value: function (e) {
                  return a.default.ClaimPredicate.claimPredicateBeforeAbsoluteTime(
                    a.default.Int64.fromString(e),
                  );
                },
              },
              {
                key: "predicateBeforeRelativeTime",
                value: function (e) {
                  return a.default.ClaimPredicate.claimPredicateBeforeRelativeTime(
                    a.default.Int64.fromString(e),
                  );
                },
              },
              {
                key: "fromXDR",
                value: function (e) {
                  var t = void 0;
                  switch (e.switch()) {
                    case a.default.ClaimantType.claimantTypeV0():
                      return (
                        (t = e.v0()),
                        new this(
                          u.StrKey.encodeEd25519PublicKey(
                            t.destination().ed25519(),
                          ),
                          t.predicate(),
                        )
                      );
                    default:
                      throw new Error(
                        "Invalid claimant type: " + e.switch().name,
                      );
                  }
                },
              },
            ],
          ),
          e
        );
      })();
    },
    5990: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.claimClaimableBalance = i),
        (t.validateClaimableBalanceId = u));
      var o = n(2825),
        r = a(o);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        u(e.balanceId);
        var t = {};
        t.balanceId = r.default.ClaimableBalanceId.fromXDR(e.balanceId, "hex");
        var n = new r.default.ClaimClaimableBalanceOp(t),
          o = {};
        return (
          (o.body = r.default.OperationBody.claimClaimableBalance(n)),
          this.setSourceAccount(o, e),
          new r.default.Operation(o)
        );
      }
      function u(e) {
        if ("string" !== typeof e || 72 !== e.length)
          throw new Error("must provide a valid claimable balance id");
      }
    },
    5991: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FeeBumpTransaction = void 0));
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                ((o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o));
              }
            }
            return function (t, n, o) {
              return (n && e(t.prototype, n), o && e(t, o), t);
            };
          })(),
          r = n(2825),
          a = c(r),
          i = n(3882),
          u = n(4966),
          s = n(4965),
          l = n(3287);
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        function f(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          ((e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t)));
        }
        t.FeeBumpTransaction = (function (t) {
          function n(t, o) {
            if ((d(this, n), "string" === typeof t)) {
              var r = e.from(t, "base64");
              t = a.default.TransactionEnvelope.fromXDR(r);
            }
            var i = t.switch();
            if (i !== a.default.EnvelopeType.envelopeTypeTxFeeBump())
              throw new Error(
                "Invalid TransactionEnvelope: expected an envelopeTypeTxFeeBump but received an " +
                  i.name +
                  ".",
              );
            var s = t.value(),
              c = s.tx(),
              f = c.fee().toString(),
              m = (s.signatures() || []).slice(),
              y = p(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(
                  this,
                  c,
                  m,
                  f,
                  o,
                ),
              ),
              h = a.default.TransactionEnvelope.envelopeTypeTx(
                c.innerTx().v1(),
              );
            return (
              (y._feeSource = (0, l.encodeMuxedAccountToAddress)(
                y.tx.feeSource(),
              )),
              (y._innerTransaction = new u.Transaction(h, o)),
              y
            );
          }
          return (
            f(n, t),
            o(n, [
              {
                key: "signatureBase",
                value: function () {
                  var e =
                      new a.default.TransactionSignaturePayloadTaggedTransaction.envelopeTypeTxFeeBump(
                        this.tx,
                      ),
                    t = new a.default.TransactionSignaturePayload({
                      networkId: a.default.Hash.fromXDR(
                        (0, i.hash)(this.networkPassphrase),
                      ),
                      taggedTransaction: e,
                    });
                  return t.toXDR();
                },
              },
              {
                key: "toEnvelope",
                value: function () {
                  var e = new a.default.FeeBumpTransactionEnvelope({
                    tx: a.default.FeeBumpTransaction.fromXDR(this.tx.toXDR()),
                    signatures: this.signatures.slice(),
                  });
                  return new a.default.TransactionEnvelope.envelopeTypeTxFeeBump(
                    e,
                  );
                },
              },
              {
                key: "innerTransaction",
                get: function () {
                  return this._innerTransaction;
                },
              },
              {
                key: "feeSource",
                get: function () {
                  return this._feeSource;
                },
              },
            ]),
            n
          );
        })(s.TransactionBase);
      }).call(this, n(2).Buffer);
    },
    5992: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SignerKey = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(2825),
        a = u(r),
        i = n(3091);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.SignerKey = (function () {
        function e() {
          s(this, e);
        }
        return (
          o(e, null, [
            {
              key: "decodeAddress",
              value: function (e) {
                var t = {
                    ed25519PublicKey: a.default.SignerKey.signerKeyTypeEd25519,
                    preAuthTx: a.default.SignerKey.signerKeyTypePreAuthTx,
                    sha256Hash: a.default.SignerKey.signerKeyTypeHashX,
                    signedPayload:
                      a.default.SignerKey.signerKeyTypeEd25519SignedPayload,
                  },
                  n = i.StrKey.getVersionByteForPrefix(e),
                  o = t[n];
                if (!o) throw new Error("invalid signer key type (" + n + ")");
                var r = (0, i.decodeCheck)(n, e);
                switch (n) {
                  case "signedPayload":
                    return o(
                      new a.default.SignerKeyEd25519SignedPayload({
                        ed25519: r.slice(0, 32),
                        payload: r.slice(36),
                      }),
                    );
                  case "ed25519PublicKey":
                  case "preAuthTx":
                  case "sha256Hash":
                  default:
                    return o(r);
                }
              },
            },
            {
              key: "encodeSignerKey",
              value: function (e) {
                var t = void 0,
                  n = void 0;
                switch (e.switch()) {
                  case a.default.SignerKeyType.signerKeyTypeEd25519():
                    ((t = "ed25519PublicKey"), (n = e.value()));
                    break;
                  case a.default.SignerKeyType.signerKeyTypePreAuthTx():
                    ((t = "preAuthTx"), (n = e.value()));
                    break;
                  case a.default.SignerKeyType.signerKeyTypeHashX():
                    ((t = "sha256Hash"), (n = e.value()));
                    break;
                  case a.default.SignerKeyType.signerKeyTypeEd25519SignedPayload():
                    ((t = "signedPayload"),
                      (n = e.ed25519SignedPayload().toXDR("raw")));
                    break;
                  default:
                    throw new Error(
                      "invalid SignerKey (type: " + e.switch() + ")",
                    );
                }
                return (0, i.encodeCheck)(t, n);
              },
            },
          ]),
          e
        );
      })();
    },
    5993: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Account = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(2964),
        a = l(r),
        i = n(3549),
        u = l(i),
        s = n(3091);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.Account = (function () {
        function e(t, n) {
          if ((c(this, e), s.StrKey.isValidMed25519PublicKey(t)))
            throw new Error(
              "accountId is an M-address; use MuxedAccount instead",
            );
          if (!s.StrKey.isValidEd25519PublicKey(t))
            throw new Error("accountId is invalid");
          if (!(0, a.default)(n))
            throw new Error("sequence must be of type string");
          ((this._accountId = t), (this.sequence = new u.default(n)));
        }
        return (
          o(e, [
            {
              key: "accountId",
              value: function () {
                return this._accountId;
              },
            },
            {
              key: "sequenceNumber",
              value: function () {
                return this.sequence.toString();
              },
            },
            {
              key: "incrementSequenceNumber",
              value: function () {
                this.sequence = this.sequence.add(1);
              },
            },
          ]),
          e
        );
      })();
    },
    6007: function (e, t, n) {
      (function (t, o) {
        var r = n(231).parse,
          a = n(52),
          i = n(391),
          u = n(236),
          s = n(799),
          l = [
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "secureProtocol",
            "servername",
            "checkServerIdentity",
          ],
          c = [239, 187, 191],
          d = 58,
          p = 32,
          f = 10,
          m = 13;
        function y(e) {
          return c.every(function (t, n) {
            return e[n] === t;
          });
        }
        function h(e, n) {
          var a = h.CONNECTING,
            s = n && n.headers,
            S = !1;
          (Object.defineProperty(this, "readyState", {
            get: function () {
              return a;
            },
          }),
            Object.defineProperty(this, "url", {
              get: function () {
                return e;
              },
            }));
          var k,
            T = this;
          function P(t) {
            a !== h.CLOSED &&
              ((a = h.CONNECTING),
              C("error", new v("error", { message: t })),
              R && ((e = R), (R = null), (S = !1)),
              setTimeout(function () {
                a !== h.CONNECTING ||
                  T.connectionInProgress ||
                  ((T.connectionInProgress = !0), _());
              }, T.reconnectInterval));
          }
          ((T.reconnectInterval = 1e3), (T.connectionInProgress = !1));
          var A = "";
          s &&
            s["Last-Event-ID"] &&
            ((A = s["Last-Event-ID"]), delete s["Last-Event-ID"]);
          var O = !1,
            E = "",
            x = "",
            R = null;
          function _() {
            var p = r(e),
              g = "https:" === p.protocol;
            if (
              ((p.headers = {
                "Cache-Control": "no-cache",
                Accept: "text/event-stream",
              }),
              A && (p.headers["Last-Event-ID"] = A),
              s)
            ) {
              var E = S ? b(s) : s;
              for (var x in E) {
                var I = E[x];
                I && (p.headers[x] = I);
              }
            }
            ((p.rejectUnauthorized = !(n && !n.rejectUnauthorized)),
              n &&
                void 0 !== n.createConnection &&
                (p.createConnection = n.createConnection));
            var M = n && n.proxy;
            if (M) {
              var q = r(n.proxy);
              ((g = "https:" === q.protocol),
                (p.protocol = g ? "https:" : "http:"),
                (p.path = e),
                (p.headers.Host = p.host),
                (p.hostname = q.hostname),
                (p.host = q.host),
                (p.port = q.port));
            }
            if (n && n.https)
              for (var L in n.https)
                if (-1 !== l.indexOf(L)) {
                  var N = n.https[L];
                  void 0 !== N && (p[L] = N);
                }
            (n &&
              void 0 !== n.withCredentials &&
              (p.withCredentials = n.withCredentials),
              (k = (g ? i : u).request(p, function (n) {
                if (
                  ((T.connectionInProgress = !1),
                  500 === n.statusCode ||
                    502 === n.statusCode ||
                    503 === n.statusCode ||
                    504 === n.statusCode)
                )
                  return (
                    C(
                      "error",
                      new v("error", {
                        status: n.statusCode,
                        message: n.statusMessage,
                      }),
                    ),
                    void P()
                  );
                if (
                  301 === n.statusCode ||
                  302 === n.statusCode ||
                  307 === n.statusCode
                ) {
                  var r = n.headers.location;
                  if (!r)
                    return void C(
                      "error",
                      new v("error", {
                        status: n.statusCode,
                        message: n.statusMessage,
                      }),
                    );
                  var i = w(e),
                    u = w(r);
                  return (
                    (S = i !== u),
                    307 === n.statusCode && (R = e),
                    (e = r),
                    void t.nextTick(_)
                  );
                }
                if (200 !== n.statusCode)
                  return (
                    C(
                      "error",
                      new v("error", {
                        status: n.statusCode,
                        message: n.statusMessage,
                      }),
                    ),
                    T.close()
                  );
                ((a = h.OPEN),
                  n.on("close", function () {
                    (n.removeAllListeners("close"),
                      n.removeAllListeners("end"),
                      P());
                  }),
                  n.on("end", function () {
                    (n.removeAllListeners("close"),
                      n.removeAllListeners("end"),
                      P());
                  }),
                  C("open", new v("open")));
                var s,
                  l = !0,
                  p = 0,
                  g = -1;
                n.on("data", function (e) {
                  ((s = s ? o.concat([s, e]) : e),
                    l && y(s) && (s = s.slice(c.length)),
                    (l = !1));
                  var t = 0,
                    n = s.length;
                  while (t < n) {
                    O && (s[t] === f && ++t, (O = !1));
                    for (var r, a = -1, i = g, u = p; a < 0 && u < n; ++u)
                      ((r = s[u]),
                        r === d
                          ? i < 0 && (i = u - t)
                          : r === m
                            ? ((O = !0), (a = u - t))
                            : r === f && (a = u - t));
                    if (a < 0) {
                      ((p = n - t), (g = i));
                      break;
                    }
                    ((p = 0), (g = -1), B(s, t, i, a), (t += a + 1));
                  }
                  t === n ? (s = void 0) : t > 0 && (s = s.slice(t));
                });
              })),
              k.on("error", function (e) {
                ((T.connectionInProgress = !1), P(e.message));
              }),
              k.setNoDelay && k.setNoDelay(!0),
              k.end());
          }
          function C() {
            T.listeners(arguments[0]).length > 0 && T.emit.apply(T, arguments);
          }
          function B(t, n, o, r) {
            if (0 === r) {
              if (E.length > 0) {
                var a = x || "message";
                (C(
                  a,
                  new g(a, {
                    data: E.slice(0, -1),
                    lastEventId: A,
                    origin: w(e),
                  }),
                ),
                  (E = ""));
              }
              x = void 0;
            } else if (o > 0) {
              var i = o < 0,
                u = 0,
                s = t.slice(n, n + (i ? r : o)).toString();
              ((u = i ? r : t[n + o + 1] !== p ? o + 1 : o + 2), (n += u));
              var l = r - u,
                c = t.slice(n, n + l).toString();
              if ("data" === s) E += c + "\n";
              else if ("event" === s) x = c;
              else if ("id" === s) A = c;
              else if ("retry" === s) {
                var d = parseInt(c, 10);
                Number.isNaN(d) || (T.reconnectInterval = d);
              }
            }
          }
          (_(),
            (this._close = function () {
              a !== h.CLOSED &&
                ((a = h.CLOSED),
                k.abort && k.abort(),
                k.xhr && k.xhr.abort && k.xhr.abort());
            }));
        }
        function v(e, t) {
          if (
            (Object.defineProperty(this, "type", {
              writable: !1,
              value: e,
              enumerable: !0,
            }),
            t)
          )
            for (var n in t)
              t.hasOwnProperty(n) &&
                Object.defineProperty(this, n, {
                  writable: !1,
                  value: t[n],
                  enumerable: !0,
                });
        }
        function g(e, t) {
          for (var n in (Object.defineProperty(this, "type", {
            writable: !1,
            value: e,
            enumerable: !0,
          }),
          t))
            t.hasOwnProperty(n) &&
              Object.defineProperty(this, n, {
                writable: !1,
                value: t[n],
                enumerable: !0,
              });
        }
        function b(e) {
          var t = {};
          for (var n in e) /^(cookie|authorization)$/i.test(n) || (t[n] = e[n]);
          return t;
        }
        function w(e) {
          return (
            "string" === typeof e && (e = r(e)),
            e.protocol && e.hostname
              ? (e.protocol + "//" + e.host).toLowerCase()
              : "null"
          );
        }
        ((e.exports = h),
          s.inherits(h, a.EventEmitter),
          (h.prototype.constructor = h),
          ["open", "error", "message"].forEach(function (e) {
            Object.defineProperty(h.prototype, "on" + e, {
              get: function () {
                var t = this.listeners(e)[0];
                return t ? (t._listener ? t._listener : t) : void 0;
              },
              set: function (t) {
                (this.removeAllListeners(e), this.addEventListener(e, t));
              },
            });
          }),
          Object.defineProperty(h, "CONNECTING", { enumerable: !0, value: 0 }),
          Object.defineProperty(h, "OPEN", { enumerable: !0, value: 1 }),
          Object.defineProperty(h, "CLOSED", { enumerable: !0, value: 2 }),
          (h.prototype.CONNECTING = 0),
          (h.prototype.OPEN = 1),
          (h.prototype.CLOSED = 2),
          (h.prototype.close = function () {
            this._close();
          }),
          (h.prototype.addEventListener = function (e, t) {
            "function" === typeof t && ((t._listener = t), this.on(e, t));
          }),
          (h.prototype.dispatchEvent = function (e) {
            if (!e.type) throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");
            this.emit(e.type, e.detail);
          }),
          (h.prototype.removeEventListener = function (e, t) {
            "function" === typeof t &&
              ((t._listener = void 0), this.removeListener(e, t));
          }));
      }).call(this, n(18), n(2).Buffer);
    },
    7410: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(3054),
        r = a(o);
      function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return ((t.default = e), t);
      }
      var i = r.config(function (e) {
        (e.typedef("Value", e.varOpaque()),
          e.struct("ScpBallot", [
            ["counter", e.lookup("Uint32")],
            ["value", e.lookup("Value")],
          ]),
          e.enum("ScpStatementType", {
            scpStPrepare: 0,
            scpStConfirm: 1,
            scpStExternalize: 2,
            scpStNominate: 3,
          }),
          e.struct("ScpNomination", [
            ["quorumSetHash", e.lookup("Hash")],
            ["votes", e.varArray(e.lookup("Value"), 2147483647)],
            ["accepted", e.varArray(e.lookup("Value"), 2147483647)],
          ]),
          e.struct("ScpStatementPrepare", [
            ["quorumSetHash", e.lookup("Hash")],
            ["ballot", e.lookup("ScpBallot")],
            ["prepared", e.option(e.lookup("ScpBallot"))],
            ["preparedPrime", e.option(e.lookup("ScpBallot"))],
            ["nC", e.lookup("Uint32")],
            ["nH", e.lookup("Uint32")],
          ]),
          e.struct("ScpStatementConfirm", [
            ["ballot", e.lookup("ScpBallot")],
            ["nPrepared", e.lookup("Uint32")],
            ["nCommit", e.lookup("Uint32")],
            ["nH", e.lookup("Uint32")],
            ["quorumSetHash", e.lookup("Hash")],
          ]),
          e.struct("ScpStatementExternalize", [
            ["commit", e.lookup("ScpBallot")],
            ["nH", e.lookup("Uint32")],
            ["commitQuorumSetHash", e.lookup("Hash")],
          ]),
          e.union("ScpStatementPledges", {
            switchOn: e.lookup("ScpStatementType"),
            switchName: "type",
            switches: [
              ["scpStPrepare", "prepare"],
              ["scpStConfirm", "confirm"],
              ["scpStExternalize", "externalize"],
              ["scpStNominate", "nominate"],
            ],
            arms: {
              prepare: e.lookup("ScpStatementPrepare"),
              confirm: e.lookup("ScpStatementConfirm"),
              externalize: e.lookup("ScpStatementExternalize"),
              nominate: e.lookup("ScpNomination"),
            },
          }),
          e.struct("ScpStatement", [
            ["nodeId", e.lookup("NodeId")],
            ["slotIndex", e.lookup("Uint64")],
            ["pledges", e.lookup("ScpStatementPledges")],
          ]),
          e.struct("ScpEnvelope", [
            ["statement", e.lookup("ScpStatement")],
            ["signature", e.lookup("Signature")],
          ]),
          e.struct("ScpQuorumSet", [
            ["threshold", e.lookup("Uint32")],
            ["validators", e.varArray(e.lookup("NodeId"), 2147483647)],
            ["innerSets", e.varArray(e.lookup("ScpQuorumSet"), 2147483647)],
          ]),
          e.typedef("AccountId", e.lookup("PublicKey")),
          e.typedef("Thresholds", e.opaque(4)),
          e.typedef("String32", e.string(32)),
          e.typedef("String64", e.string(64)),
          e.typedef("SequenceNumber", e.lookup("Int64")),
          e.typedef("TimePoint", e.lookup("Uint64")),
          e.typedef("Duration", e.lookup("Uint64")),
          e.typedef("DataValue", e.varOpaque(64)),
          e.typedef("PoolId", e.lookup("Hash")),
          e.typedef("AssetCode4", e.opaque(4)),
          e.typedef("AssetCode12", e.opaque(12)),
          e.enum("AssetType", {
            assetTypeNative: 0,
            assetTypeCreditAlphanum4: 1,
            assetTypeCreditAlphanum12: 2,
            assetTypePoolShare: 3,
          }),
          e.union("AssetCode", {
            switchOn: e.lookup("AssetType"),
            switchName: "type",
            switches: [
              ["assetTypeCreditAlphanum4", "assetCode4"],
              ["assetTypeCreditAlphanum12", "assetCode12"],
            ],
            arms: {
              assetCode4: e.lookup("AssetCode4"),
              assetCode12: e.lookup("AssetCode12"),
            },
          }),
          e.struct("AlphaNum4", [
            ["assetCode", e.lookup("AssetCode4")],
            ["issuer", e.lookup("AccountId")],
          ]),
          e.struct("AlphaNum12", [
            ["assetCode", e.lookup("AssetCode12")],
            ["issuer", e.lookup("AccountId")],
          ]),
          e.union("Asset", {
            switchOn: e.lookup("AssetType"),
            switchName: "type",
            switches: [
              ["assetTypeNative", e.void()],
              ["assetTypeCreditAlphanum4", "alphaNum4"],
              ["assetTypeCreditAlphanum12", "alphaNum12"],
            ],
            arms: {
              alphaNum4: e.lookup("AlphaNum4"),
              alphaNum12: e.lookup("AlphaNum12"),
            },
          }),
          e.struct("Price", [
            ["n", e.lookup("Int32")],
            ["d", e.lookup("Int32")],
          ]),
          e.struct("Liabilities", [
            ["buying", e.lookup("Int64")],
            ["selling", e.lookup("Int64")],
          ]),
          e.enum("ThresholdIndices", {
            thresholdMasterWeight: 0,
            thresholdLow: 1,
            thresholdMed: 2,
            thresholdHigh: 3,
          }),
          e.enum("LedgerEntryType", {
            account: 0,
            trustline: 1,
            offer: 2,
            data: 3,
            claimableBalance: 4,
            liquidityPool: 5,
          }),
          e.struct("Signer", [
            ["key", e.lookup("SignerKey")],
            ["weight", e.lookup("Uint32")],
          ]),
          e.enum("AccountFlags", {
            authRequiredFlag: 1,
            authRevocableFlag: 2,
            authImmutableFlag: 4,
            authClawbackEnabledFlag: 8,
          }),
          e.const("MASK_ACCOUNT_FLAGS", 7),
          e.const("MASK_ACCOUNT_FLAGS_V17", 15),
          e.const("MAX_SIGNERS", 20),
          e.typedef("SponsorshipDescriptor", e.option(e.lookup("AccountId"))),
          e.struct("AccountEntryExtensionV3", [
            ["ext", e.lookup("ExtensionPoint")],
            ["seqLedger", e.lookup("Uint32")],
            ["seqTime", e.lookup("TimePoint")],
          ]),
          e.union("AccountEntryExtensionV2Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [3, "v3"],
            ],
            arms: { v3: e.lookup("AccountEntryExtensionV3") },
          }),
          e.struct("AccountEntryExtensionV2", [
            ["numSponsored", e.lookup("Uint32")],
            ["numSponsoring", e.lookup("Uint32")],
            [
              "signerSponsoringIDs",
              e.varArray(
                e.lookup("SponsorshipDescriptor"),
                e.lookup("MAX_SIGNERS"),
              ),
            ],
            ["ext", e.lookup("AccountEntryExtensionV2Ext")],
          ]),
          e.union("AccountEntryExtensionV1Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [2, "v2"],
            ],
            arms: { v2: e.lookup("AccountEntryExtensionV2") },
          }),
          e.struct("AccountEntryExtensionV1", [
            ["liabilities", e.lookup("Liabilities")],
            ["ext", e.lookup("AccountEntryExtensionV1Ext")],
          ]),
          e.union("AccountEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [1, "v1"],
            ],
            arms: { v1: e.lookup("AccountEntryExtensionV1") },
          }),
          e.struct("AccountEntry", [
            ["accountId", e.lookup("AccountId")],
            ["balance", e.lookup("Int64")],
            ["seqNum", e.lookup("SequenceNumber")],
            ["numSubEntries", e.lookup("Uint32")],
            ["inflationDest", e.option(e.lookup("AccountId"))],
            ["flags", e.lookup("Uint32")],
            ["homeDomain", e.lookup("String32")],
            ["thresholds", e.lookup("Thresholds")],
            [
              "signers",
              e.varArray(e.lookup("Signer"), e.lookup("MAX_SIGNERS")),
            ],
            ["ext", e.lookup("AccountEntryExt")],
          ]),
          e.enum("TrustLineFlags", {
            authorizedFlag: 1,
            authorizedToMaintainLiabilitiesFlag: 2,
            trustlineClawbackEnabledFlag: 4,
          }),
          e.const("MASK_TRUSTLINE_FLAGS", 1),
          e.const("MASK_TRUSTLINE_FLAGS_V13", 3),
          e.const("MASK_TRUSTLINE_FLAGS_V17", 7),
          e.enum("LiquidityPoolType", { liquidityPoolConstantProduct: 0 }),
          e.union("TrustLineAsset", {
            switchOn: e.lookup("AssetType"),
            switchName: "type",
            switches: [
              ["assetTypeNative", e.void()],
              ["assetTypeCreditAlphanum4", "alphaNum4"],
              ["assetTypeCreditAlphanum12", "alphaNum12"],
              ["assetTypePoolShare", "liquidityPoolId"],
            ],
            arms: {
              alphaNum4: e.lookup("AlphaNum4"),
              alphaNum12: e.lookup("AlphaNum12"),
              liquidityPoolId: e.lookup("PoolId"),
            },
          }),
          e.union("TrustLineEntryExtensionV2Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("TrustLineEntryExtensionV2", [
            ["liquidityPoolUseCount", e.lookup("Int32")],
            ["ext", e.lookup("TrustLineEntryExtensionV2Ext")],
          ]),
          e.union("TrustLineEntryV1Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [2, "v2"],
            ],
            arms: { v2: e.lookup("TrustLineEntryExtensionV2") },
          }),
          e.struct("TrustLineEntryV1", [
            ["liabilities", e.lookup("Liabilities")],
            ["ext", e.lookup("TrustLineEntryV1Ext")],
          ]),
          e.union("TrustLineEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [1, "v1"],
            ],
            arms: { v1: e.lookup("TrustLineEntryV1") },
          }),
          e.struct("TrustLineEntry", [
            ["accountId", e.lookup("AccountId")],
            ["asset", e.lookup("TrustLineAsset")],
            ["balance", e.lookup("Int64")],
            ["limit", e.lookup("Int64")],
            ["flags", e.lookup("Uint32")],
            ["ext", e.lookup("TrustLineEntryExt")],
          ]),
          e.enum("OfferEntryFlags", { passiveFlag: 1 }),
          e.const("MASK_OFFERENTRY_FLAGS", 1),
          e.union("OfferEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("OfferEntry", [
            ["sellerId", e.lookup("AccountId")],
            ["offerId", e.lookup("Int64")],
            ["selling", e.lookup("Asset")],
            ["buying", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
            ["price", e.lookup("Price")],
            ["flags", e.lookup("Uint32")],
            ["ext", e.lookup("OfferEntryExt")],
          ]),
          e.union("DataEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("DataEntry", [
            ["accountId", e.lookup("AccountId")],
            ["dataName", e.lookup("String64")],
            ["dataValue", e.lookup("DataValue")],
            ["ext", e.lookup("DataEntryExt")],
          ]),
          e.enum("ClaimPredicateType", {
            claimPredicateUnconditional: 0,
            claimPredicateAnd: 1,
            claimPredicateOr: 2,
            claimPredicateNot: 3,
            claimPredicateBeforeAbsoluteTime: 4,
            claimPredicateBeforeRelativeTime: 5,
          }),
          e.union("ClaimPredicate", {
            switchOn: e.lookup("ClaimPredicateType"),
            switchName: "type",
            switches: [
              ["claimPredicateUnconditional", e.void()],
              ["claimPredicateAnd", "andPredicates"],
              ["claimPredicateOr", "orPredicates"],
              ["claimPredicateNot", "notPredicate"],
              ["claimPredicateBeforeAbsoluteTime", "absBefore"],
              ["claimPredicateBeforeRelativeTime", "relBefore"],
            ],
            arms: {
              andPredicates: e.varArray(e.lookup("ClaimPredicate"), 2),
              orPredicates: e.varArray(e.lookup("ClaimPredicate"), 2),
              notPredicate: e.option(e.lookup("ClaimPredicate")),
              absBefore: e.lookup("Int64"),
              relBefore: e.lookup("Int64"),
            },
          }),
          e.enum("ClaimantType", { claimantTypeV0: 0 }),
          e.struct("ClaimantV0", [
            ["destination", e.lookup("AccountId")],
            ["predicate", e.lookup("ClaimPredicate")],
          ]),
          e.union("Claimant", {
            switchOn: e.lookup("ClaimantType"),
            switchName: "type",
            switches: [["claimantTypeV0", "v0"]],
            arms: { v0: e.lookup("ClaimantV0") },
          }),
          e.enum("ClaimableBalanceIdType", { claimableBalanceIdTypeV0: 0 }),
          e.union("ClaimableBalanceId", {
            switchOn: e.lookup("ClaimableBalanceIdType"),
            switchName: "type",
            switches: [["claimableBalanceIdTypeV0", "v0"]],
            arms: { v0: e.lookup("Hash") },
          }),
          e.enum("ClaimableBalanceFlags", {
            claimableBalanceClawbackEnabledFlag: 1,
          }),
          e.const("MASK_CLAIMABLE_BALANCE_FLAGS", 1),
          e.union("ClaimableBalanceEntryExtensionV1Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("ClaimableBalanceEntryExtensionV1", [
            ["ext", e.lookup("ClaimableBalanceEntryExtensionV1Ext")],
            ["flags", e.lookup("Uint32")],
          ]),
          e.union("ClaimableBalanceEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [1, "v1"],
            ],
            arms: { v1: e.lookup("ClaimableBalanceEntryExtensionV1") },
          }),
          e.struct("ClaimableBalanceEntry", [
            ["balanceId", e.lookup("ClaimableBalanceId")],
            ["claimants", e.varArray(e.lookup("Claimant"), 10)],
            ["asset", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
            ["ext", e.lookup("ClaimableBalanceEntryExt")],
          ]),
          e.struct("LiquidityPoolConstantProductParameters", [
            ["assetA", e.lookup("Asset")],
            ["assetB", e.lookup("Asset")],
            ["fee", e.lookup("Int32")],
          ]),
          e.struct("LiquidityPoolEntryConstantProduct", [
            ["params", e.lookup("LiquidityPoolConstantProductParameters")],
            ["reserveA", e.lookup("Int64")],
            ["reserveB", e.lookup("Int64")],
            ["totalPoolShares", e.lookup("Int64")],
            ["poolSharesTrustLineCount", e.lookup("Int64")],
          ]),
          e.union("LiquidityPoolEntryBody", {
            switchOn: e.lookup("LiquidityPoolType"),
            switchName: "type",
            switches: [["liquidityPoolConstantProduct", "constantProduct"]],
            arms: {
              constantProduct: e.lookup("LiquidityPoolEntryConstantProduct"),
            },
          }),
          e.struct("LiquidityPoolEntry", [
            ["liquidityPoolId", e.lookup("PoolId")],
            ["body", e.lookup("LiquidityPoolEntryBody")],
          ]),
          e.union("LedgerEntryExtensionV1Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("LedgerEntryExtensionV1", [
            ["sponsoringId", e.lookup("SponsorshipDescriptor")],
            ["ext", e.lookup("LedgerEntryExtensionV1Ext")],
          ]),
          e.union("LedgerEntryData", {
            switchOn: e.lookup("LedgerEntryType"),
            switchName: "type",
            switches: [
              ["account", "account"],
              ["trustline", "trustLine"],
              ["offer", "offer"],
              ["data", "data"],
              ["claimableBalance", "claimableBalance"],
              ["liquidityPool", "liquidityPool"],
            ],
            arms: {
              account: e.lookup("AccountEntry"),
              trustLine: e.lookup("TrustLineEntry"),
              offer: e.lookup("OfferEntry"),
              data: e.lookup("DataEntry"),
              claimableBalance: e.lookup("ClaimableBalanceEntry"),
              liquidityPool: e.lookup("LiquidityPoolEntry"),
            },
          }),
          e.union("LedgerEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [1, "v1"],
            ],
            arms: { v1: e.lookup("LedgerEntryExtensionV1") },
          }),
          e.struct("LedgerEntry", [
            ["lastModifiedLedgerSeq", e.lookup("Uint32")],
            ["data", e.lookup("LedgerEntryData")],
            ["ext", e.lookup("LedgerEntryExt")],
          ]),
          e.struct("LedgerKeyAccount", [["accountId", e.lookup("AccountId")]]),
          e.struct("LedgerKeyTrustLine", [
            ["accountId", e.lookup("AccountId")],
            ["asset", e.lookup("TrustLineAsset")],
          ]),
          e.struct("LedgerKeyOffer", [
            ["sellerId", e.lookup("AccountId")],
            ["offerId", e.lookup("Int64")],
          ]),
          e.struct("LedgerKeyData", [
            ["accountId", e.lookup("AccountId")],
            ["dataName", e.lookup("String64")],
          ]),
          e.struct("LedgerKeyClaimableBalance", [
            ["balanceId", e.lookup("ClaimableBalanceId")],
          ]),
          e.struct("LedgerKeyLiquidityPool", [
            ["liquidityPoolId", e.lookup("PoolId")],
          ]),
          e.union("LedgerKey", {
            switchOn: e.lookup("LedgerEntryType"),
            switchName: "type",
            switches: [
              ["account", "account"],
              ["trustline", "trustLine"],
              ["offer", "offer"],
              ["data", "data"],
              ["claimableBalance", "claimableBalance"],
              ["liquidityPool", "liquidityPool"],
            ],
            arms: {
              account: e.lookup("LedgerKeyAccount"),
              trustLine: e.lookup("LedgerKeyTrustLine"),
              offer: e.lookup("LedgerKeyOffer"),
              data: e.lookup("LedgerKeyData"),
              claimableBalance: e.lookup("LedgerKeyClaimableBalance"),
              liquidityPool: e.lookup("LedgerKeyLiquidityPool"),
            },
          }),
          e.enum("EnvelopeType", {
            envelopeTypeTxV0: 0,
            envelopeTypeScp: 1,
            envelopeTypeTx: 2,
            envelopeTypeAuth: 3,
            envelopeTypeScpvalue: 4,
            envelopeTypeTxFeeBump: 5,
            envelopeTypeOpId: 6,
            envelopeTypePoolRevokeOpId: 7,
          }),
          e.typedef("UpgradeType", e.varOpaque(128)),
          e.enum("StellarValueType", {
            stellarValueBasic: 0,
            stellarValueSigned: 1,
          }),
          e.struct("LedgerCloseValueSignature", [
            ["nodeId", e.lookup("NodeId")],
            ["signature", e.lookup("Signature")],
          ]),
          e.union("StellarValueExt", {
            switchOn: e.lookup("StellarValueType"),
            switchName: "v",
            switches: [
              ["stellarValueBasic", e.void()],
              ["stellarValueSigned", "lcValueSignature"],
            ],
            arms: { lcValueSignature: e.lookup("LedgerCloseValueSignature") },
          }),
          e.struct("StellarValue", [
            ["txSetHash", e.lookup("Hash")],
            ["closeTime", e.lookup("TimePoint")],
            ["upgrades", e.varArray(e.lookup("UpgradeType"), 6)],
            ["ext", e.lookup("StellarValueExt")],
          ]),
          e.const("MASK_LEDGER_HEADER_FLAGS", 7),
          e.enum("LedgerHeaderFlags", {
            disableLiquidityPoolTradingFlag: 1,
            disableLiquidityPoolDepositFlag: 2,
            disableLiquidityPoolWithdrawalFlag: 4,
          }),
          e.union("LedgerHeaderExtensionV1Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("LedgerHeaderExtensionV1", [
            ["flags", e.lookup("Uint32")],
            ["ext", e.lookup("LedgerHeaderExtensionV1Ext")],
          ]),
          e.union("LedgerHeaderExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [1, "v1"],
            ],
            arms: { v1: e.lookup("LedgerHeaderExtensionV1") },
          }),
          e.struct("LedgerHeader", [
            ["ledgerVersion", e.lookup("Uint32")],
            ["previousLedgerHash", e.lookup("Hash")],
            ["scpValue", e.lookup("StellarValue")],
            ["txSetResultHash", e.lookup("Hash")],
            ["bucketListHash", e.lookup("Hash")],
            ["ledgerSeq", e.lookup("Uint32")],
            ["totalCoins", e.lookup("Int64")],
            ["feePool", e.lookup("Int64")],
            ["inflationSeq", e.lookup("Uint32")],
            ["idPool", e.lookup("Uint64")],
            ["baseFee", e.lookup("Uint32")],
            ["baseReserve", e.lookup("Uint32")],
            ["maxTxSetSize", e.lookup("Uint32")],
            ["skipList", e.array(e.lookup("Hash"), 4)],
            ["ext", e.lookup("LedgerHeaderExt")],
          ]),
          e.enum("LedgerUpgradeType", {
            ledgerUpgradeVersion: 1,
            ledgerUpgradeBaseFee: 2,
            ledgerUpgradeMaxTxSetSize: 3,
            ledgerUpgradeBaseReserve: 4,
            ledgerUpgradeFlags: 5,
          }),
          e.union("LedgerUpgrade", {
            switchOn: e.lookup("LedgerUpgradeType"),
            switchName: "type",
            switches: [
              ["ledgerUpgradeVersion", "newLedgerVersion"],
              ["ledgerUpgradeBaseFee", "newBaseFee"],
              ["ledgerUpgradeMaxTxSetSize", "newMaxTxSetSize"],
              ["ledgerUpgradeBaseReserve", "newBaseReserve"],
              ["ledgerUpgradeFlags", "newFlags"],
            ],
            arms: {
              newLedgerVersion: e.lookup("Uint32"),
              newBaseFee: e.lookup("Uint32"),
              newMaxTxSetSize: e.lookup("Uint32"),
              newBaseReserve: e.lookup("Uint32"),
              newFlags: e.lookup("Uint32"),
            },
          }),
          e.enum("BucketEntryType", {
            metaentry: -1,
            liveentry: 0,
            deadentry: 1,
            initentry: 2,
          }),
          e.union("BucketMetadataExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("BucketMetadata", [
            ["ledgerVersion", e.lookup("Uint32")],
            ["ext", e.lookup("BucketMetadataExt")],
          ]),
          e.union("BucketEntry", {
            switchOn: e.lookup("BucketEntryType"),
            switchName: "type",
            switches: [
              ["liveentry", "liveEntry"],
              ["initentry", "liveEntry"],
              ["deadentry", "deadEntry"],
              ["metaentry", "metaEntry"],
            ],
            arms: {
              liveEntry: e.lookup("LedgerEntry"),
              deadEntry: e.lookup("LedgerKey"),
              metaEntry: e.lookup("BucketMetadata"),
            },
          }),
          e.enum("TxSetComponentType", { txsetCompTxsMaybeDiscountedFee: 0 }),
          e.struct("TxSetComponentTxsMaybeDiscountedFee", [
            ["baseFee", e.option(e.lookup("Int64"))],
            ["txes", e.varArray(e.lookup("TransactionEnvelope"), 2147483647)],
          ]),
          e.union("TxSetComponent", {
            switchOn: e.lookup("TxSetComponentType"),
            switchName: "type",
            switches: [
              ["txsetCompTxsMaybeDiscountedFee", "txsMaybeDiscountedFee"],
            ],
            arms: {
              txsMaybeDiscountedFee: e.lookup(
                "TxSetComponentTxsMaybeDiscountedFee",
              ),
            },
          }),
          e.union("TransactionPhase", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, "v0Components"]],
            arms: {
              v0Components: e.varArray(e.lookup("TxSetComponent"), 2147483647),
            },
          }),
          e.struct("TransactionSet", [
            ["previousLedgerHash", e.lookup("Hash")],
            ["txes", e.varArray(e.lookup("TransactionEnvelope"), 2147483647)],
          ]),
          e.struct("TransactionSetV1", [
            ["previousLedgerHash", e.lookup("Hash")],
            ["phases", e.varArray(e.lookup("TransactionPhase"), 2147483647)],
          ]),
          e.union("GeneralizedTransactionSet", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[1, "v1TxSet"]],
            arms: { v1TxSet: e.lookup("TransactionSetV1") },
          }),
          e.struct("TransactionResultPair", [
            ["transactionHash", e.lookup("Hash")],
            ["result", e.lookup("TransactionResult")],
          ]),
          e.struct("TransactionResultSet", [
            [
              "results",
              e.varArray(e.lookup("TransactionResultPair"), 2147483647),
            ],
          ]),
          e.union("TransactionHistoryEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, e.void()],
              [1, "generalizedTxSet"],
            ],
            arms: { generalizedTxSet: e.lookup("GeneralizedTransactionSet") },
          }),
          e.struct("TransactionHistoryEntry", [
            ["ledgerSeq", e.lookup("Uint32")],
            ["txSet", e.lookup("TransactionSet")],
            ["ext", e.lookup("TransactionHistoryEntryExt")],
          ]),
          e.union("TransactionHistoryResultEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("TransactionHistoryResultEntry", [
            ["ledgerSeq", e.lookup("Uint32")],
            ["txResultSet", e.lookup("TransactionResultSet")],
            ["ext", e.lookup("TransactionHistoryResultEntryExt")],
          ]),
          e.union("LedgerHeaderHistoryEntryExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("LedgerHeaderHistoryEntry", [
            ["hash", e.lookup("Hash")],
            ["header", e.lookup("LedgerHeader")],
            ["ext", e.lookup("LedgerHeaderHistoryEntryExt")],
          ]),
          e.struct("LedgerScpMessages", [
            ["ledgerSeq", e.lookup("Uint32")],
            ["messages", e.varArray(e.lookup("ScpEnvelope"), 2147483647)],
          ]),
          e.struct("ScpHistoryEntryV0", [
            ["quorumSets", e.varArray(e.lookup("ScpQuorumSet"), 2147483647)],
            ["ledgerMessages", e.lookup("LedgerScpMessages")],
          ]),
          e.union("ScpHistoryEntry", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, "v0"]],
            arms: { v0: e.lookup("ScpHistoryEntryV0") },
          }),
          e.enum("LedgerEntryChangeType", {
            ledgerEntryCreated: 0,
            ledgerEntryUpdated: 1,
            ledgerEntryRemoved: 2,
            ledgerEntryState: 3,
          }),
          e.union("LedgerEntryChange", {
            switchOn: e.lookup("LedgerEntryChangeType"),
            switchName: "type",
            switches: [
              ["ledgerEntryCreated", "created"],
              ["ledgerEntryUpdated", "updated"],
              ["ledgerEntryRemoved", "removed"],
              ["ledgerEntryState", "state"],
            ],
            arms: {
              created: e.lookup("LedgerEntry"),
              updated: e.lookup("LedgerEntry"),
              removed: e.lookup("LedgerKey"),
              state: e.lookup("LedgerEntry"),
            },
          }),
          e.typedef(
            "LedgerEntryChanges",
            e.varArray(e.lookup("LedgerEntryChange"), 2147483647),
          ),
          e.struct("OperationMeta", [
            ["changes", e.lookup("LedgerEntryChanges")],
          ]),
          e.struct("TransactionMetaV1", [
            ["txChanges", e.lookup("LedgerEntryChanges")],
            ["operations", e.varArray(e.lookup("OperationMeta"), 2147483647)],
          ]),
          e.struct("TransactionMetaV2", [
            ["txChangesBefore", e.lookup("LedgerEntryChanges")],
            ["operations", e.varArray(e.lookup("OperationMeta"), 2147483647)],
            ["txChangesAfter", e.lookup("LedgerEntryChanges")],
          ]),
          e.union("TransactionMeta", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, "operations"],
              [1, "v1"],
              [2, "v2"],
            ],
            arms: {
              operations: e.varArray(e.lookup("OperationMeta"), 2147483647),
              v1: e.lookup("TransactionMetaV1"),
              v2: e.lookup("TransactionMetaV2"),
            },
          }),
          e.struct("TransactionResultMeta", [
            ["result", e.lookup("TransactionResultPair")],
            ["feeProcessing", e.lookup("LedgerEntryChanges")],
            ["txApplyProcessing", e.lookup("TransactionMeta")],
          ]),
          e.struct("UpgradeEntryMeta", [
            ["upgrade", e.lookup("LedgerUpgrade")],
            ["changes", e.lookup("LedgerEntryChanges")],
          ]),
          e.struct("LedgerCloseMetaV0", [
            ["ledgerHeader", e.lookup("LedgerHeaderHistoryEntry")],
            ["txSet", e.lookup("TransactionSet")],
            [
              "txProcessing",
              e.varArray(e.lookup("TransactionResultMeta"), 2147483647),
            ],
            [
              "upgradesProcessing",
              e.varArray(e.lookup("UpgradeEntryMeta"), 2147483647),
            ],
            ["scpInfo", e.varArray(e.lookup("ScpHistoryEntry"), 2147483647)],
          ]),
          e.struct("LedgerCloseMetaV1", [
            ["ledgerHeader", e.lookup("LedgerHeaderHistoryEntry")],
            ["txSet", e.lookup("GeneralizedTransactionSet")],
            [
              "txProcessing",
              e.varArray(e.lookup("TransactionResultMeta"), 2147483647),
            ],
            [
              "upgradesProcessing",
              e.varArray(e.lookup("UpgradeEntryMeta"), 2147483647),
            ],
            ["scpInfo", e.varArray(e.lookup("ScpHistoryEntry"), 2147483647)],
          ]),
          e.union("LedgerCloseMeta", {
            switchOn: e.int(),
            switchName: "v",
            switches: [
              [0, "v0"],
              [1, "v1"],
            ],
            arms: {
              v0: e.lookup("LedgerCloseMetaV0"),
              v1: e.lookup("LedgerCloseMetaV1"),
            },
          }),
          e.enum("ErrorCode", {
            errMisc: 0,
            errData: 1,
            errConf: 2,
            errAuth: 3,
            errLoad: 4,
          }),
          e.struct("Error", [
            ["code", e.lookup("ErrorCode")],
            ["msg", e.string(100)],
          ]),
          e.struct("SendMore", [["numMessages", e.lookup("Uint32")]]),
          e.struct("AuthCert", [
            ["pubkey", e.lookup("Curve25519Public")],
            ["expiration", e.lookup("Uint64")],
            ["sig", e.lookup("Signature")],
          ]),
          e.struct("Hello", [
            ["ledgerVersion", e.lookup("Uint32")],
            ["overlayVersion", e.lookup("Uint32")],
            ["overlayMinVersion", e.lookup("Uint32")],
            ["networkId", e.lookup("Hash")],
            ["versionStr", e.string(100)],
            ["listeningPort", e.int()],
            ["peerId", e.lookup("NodeId")],
            ["cert", e.lookup("AuthCert")],
            ["nonce", e.lookup("Uint256")],
          ]),
          e.struct("Auth", [["unused", e.int()]]),
          e.enum("IpAddrType", { iPv4: 0, iPv6: 1 }),
          e.union("PeerAddressIp", {
            switchOn: e.lookup("IpAddrType"),
            switchName: "type",
            switches: [
              ["iPv4", "ipv4"],
              ["iPv6", "ipv6"],
            ],
            arms: { ipv4: e.opaque(4), ipv6: e.opaque(16) },
          }),
          e.struct("PeerAddress", [
            ["ip", e.lookup("PeerAddressIp")],
            ["port", e.lookup("Uint32")],
            ["numFailures", e.lookup("Uint32")],
          ]),
          e.enum("MessageType", {
            errorMsg: 0,
            auth: 2,
            dontHave: 3,
            getPeers: 4,
            peers: 5,
            getTxSet: 6,
            txSet: 7,
            generalizedTxSet: 17,
            transaction: 8,
            getScpQuorumset: 9,
            scpQuorumset: 10,
            scpMessage: 11,
            getScpState: 12,
            hello: 13,
            surveyRequest: 14,
            surveyResponse: 15,
            sendMore: 16,
          }),
          e.struct("DontHave", [
            ["type", e.lookup("MessageType")],
            ["reqHash", e.lookup("Uint256")],
          ]),
          e.enum("SurveyMessageCommandType", { surveyTopology: 0 }),
          e.struct("SurveyRequestMessage", [
            ["surveyorPeerId", e.lookup("NodeId")],
            ["surveyedPeerId", e.lookup("NodeId")],
            ["ledgerNum", e.lookup("Uint32")],
            ["encryptionKey", e.lookup("Curve25519Public")],
            ["commandType", e.lookup("SurveyMessageCommandType")],
          ]),
          e.struct("SignedSurveyRequestMessage", [
            ["requestSignature", e.lookup("Signature")],
            ["request", e.lookup("SurveyRequestMessage")],
          ]),
          e.typedef("EncryptedBody", e.varOpaque(64e3)),
          e.struct("SurveyResponseMessage", [
            ["surveyorPeerId", e.lookup("NodeId")],
            ["surveyedPeerId", e.lookup("NodeId")],
            ["ledgerNum", e.lookup("Uint32")],
            ["commandType", e.lookup("SurveyMessageCommandType")],
            ["encryptedBody", e.lookup("EncryptedBody")],
          ]),
          e.struct("SignedSurveyResponseMessage", [
            ["responseSignature", e.lookup("Signature")],
            ["response", e.lookup("SurveyResponseMessage")],
          ]),
          e.struct("PeerStats", [
            ["id", e.lookup("NodeId")],
            ["versionStr", e.string(100)],
            ["messagesRead", e.lookup("Uint64")],
            ["messagesWritten", e.lookup("Uint64")],
            ["bytesRead", e.lookup("Uint64")],
            ["bytesWritten", e.lookup("Uint64")],
            ["secondsConnected", e.lookup("Uint64")],
            ["uniqueFloodBytesRecv", e.lookup("Uint64")],
            ["duplicateFloodBytesRecv", e.lookup("Uint64")],
            ["uniqueFetchBytesRecv", e.lookup("Uint64")],
            ["duplicateFetchBytesRecv", e.lookup("Uint64")],
            ["uniqueFloodMessageRecv", e.lookup("Uint64")],
            ["duplicateFloodMessageRecv", e.lookup("Uint64")],
            ["uniqueFetchMessageRecv", e.lookup("Uint64")],
            ["duplicateFetchMessageRecv", e.lookup("Uint64")],
          ]),
          e.typedef("PeerStatList", e.varArray(e.lookup("PeerStats"), 25)),
          e.struct("TopologyResponseBody", [
            ["inboundPeers", e.lookup("PeerStatList")],
            ["outboundPeers", e.lookup("PeerStatList")],
            ["totalInboundPeerCount", e.lookup("Uint32")],
            ["totalOutboundPeerCount", e.lookup("Uint32")],
          ]),
          e.union("SurveyResponseBody", {
            switchOn: e.lookup("SurveyMessageCommandType"),
            switchName: "type",
            switches: [["surveyTopology", "topologyResponseBody"]],
            arms: { topologyResponseBody: e.lookup("TopologyResponseBody") },
          }),
          e.union("StellarMessage", {
            switchOn: e.lookup("MessageType"),
            switchName: "type",
            switches: [
              ["errorMsg", "error"],
              ["hello", "hello"],
              ["auth", "auth"],
              ["dontHave", "dontHave"],
              ["getPeers", e.void()],
              ["peers", "peers"],
              ["getTxSet", "txSetHash"],
              ["txSet", "txSet"],
              ["generalizedTxSet", "generalizedTxSet"],
              ["transaction", "transaction"],
              ["surveyRequest", "signedSurveyRequestMessage"],
              ["surveyResponse", "signedSurveyResponseMessage"],
              ["getScpQuorumset", "qSetHash"],
              ["scpQuorumset", "qSet"],
              ["scpMessage", "envelope"],
              ["getScpState", "getScpLedgerSeq"],
              ["sendMore", "sendMoreMessage"],
            ],
            arms: {
              error: e.lookup("Error"),
              hello: e.lookup("Hello"),
              auth: e.lookup("Auth"),
              dontHave: e.lookup("DontHave"),
              peers: e.varArray(e.lookup("PeerAddress"), 100),
              txSetHash: e.lookup("Uint256"),
              txSet: e.lookup("TransactionSet"),
              generalizedTxSet: e.lookup("GeneralizedTransactionSet"),
              transaction: e.lookup("TransactionEnvelope"),
              signedSurveyRequestMessage: e.lookup(
                "SignedSurveyRequestMessage",
              ),
              signedSurveyResponseMessage: e.lookup(
                "SignedSurveyResponseMessage",
              ),
              qSetHash: e.lookup("Uint256"),
              qSet: e.lookup("ScpQuorumSet"),
              envelope: e.lookup("ScpEnvelope"),
              getScpLedgerSeq: e.lookup("Uint32"),
              sendMoreMessage: e.lookup("SendMore"),
            },
          }),
          e.struct("AuthenticatedMessageV0", [
            ["sequence", e.lookup("Uint64")],
            ["message", e.lookup("StellarMessage")],
            ["mac", e.lookup("HmacSha256Mac")],
          ]),
          e.union("AuthenticatedMessage", {
            switchOn: e.lookup("Uint32"),
            switchName: "v",
            switches: [[0, "v0"]],
            arms: { v0: e.lookup("AuthenticatedMessageV0") },
          }),
          e.union("LiquidityPoolParameters", {
            switchOn: e.lookup("LiquidityPoolType"),
            switchName: "type",
            switches: [["liquidityPoolConstantProduct", "constantProduct"]],
            arms: {
              constantProduct: e.lookup(
                "LiquidityPoolConstantProductParameters",
              ),
            },
          }),
          e.struct("MuxedAccountMed25519", [
            ["id", e.lookup("Uint64")],
            ["ed25519", e.lookup("Uint256")],
          ]),
          e.union("MuxedAccount", {
            switchOn: e.lookup("CryptoKeyType"),
            switchName: "type",
            switches: [
              ["keyTypeEd25519", "ed25519"],
              ["keyTypeMuxedEd25519", "med25519"],
            ],
            arms: {
              ed25519: e.lookup("Uint256"),
              med25519: e.lookup("MuxedAccountMed25519"),
            },
          }),
          e.struct("DecoratedSignature", [
            ["hint", e.lookup("SignatureHint")],
            ["signature", e.lookup("Signature")],
          ]),
          e.enum("OperationType", {
            createAccount: 0,
            payment: 1,
            pathPaymentStrictReceive: 2,
            manageSellOffer: 3,
            createPassiveSellOffer: 4,
            setOptions: 5,
            changeTrust: 6,
            allowTrust: 7,
            accountMerge: 8,
            inflation: 9,
            manageData: 10,
            bumpSequence: 11,
            manageBuyOffer: 12,
            pathPaymentStrictSend: 13,
            createClaimableBalance: 14,
            claimClaimableBalance: 15,
            beginSponsoringFutureReserves: 16,
            endSponsoringFutureReserves: 17,
            revokeSponsorship: 18,
            clawback: 19,
            clawbackClaimableBalance: 20,
            setTrustLineFlags: 21,
            liquidityPoolDeposit: 22,
            liquidityPoolWithdraw: 23,
          }),
          e.struct("CreateAccountOp", [
            ["destination", e.lookup("AccountId")],
            ["startingBalance", e.lookup("Int64")],
          ]),
          e.struct("PaymentOp", [
            ["destination", e.lookup("MuxedAccount")],
            ["asset", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
          ]),
          e.struct("PathPaymentStrictReceiveOp", [
            ["sendAsset", e.lookup("Asset")],
            ["sendMax", e.lookup("Int64")],
            ["destination", e.lookup("MuxedAccount")],
            ["destAsset", e.lookup("Asset")],
            ["destAmount", e.lookup("Int64")],
            ["path", e.varArray(e.lookup("Asset"), 5)],
          ]),
          e.struct("PathPaymentStrictSendOp", [
            ["sendAsset", e.lookup("Asset")],
            ["sendAmount", e.lookup("Int64")],
            ["destination", e.lookup("MuxedAccount")],
            ["destAsset", e.lookup("Asset")],
            ["destMin", e.lookup("Int64")],
            ["path", e.varArray(e.lookup("Asset"), 5)],
          ]),
          e.struct("ManageSellOfferOp", [
            ["selling", e.lookup("Asset")],
            ["buying", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
            ["price", e.lookup("Price")],
            ["offerId", e.lookup("Int64")],
          ]),
          e.struct("ManageBuyOfferOp", [
            ["selling", e.lookup("Asset")],
            ["buying", e.lookup("Asset")],
            ["buyAmount", e.lookup("Int64")],
            ["price", e.lookup("Price")],
            ["offerId", e.lookup("Int64")],
          ]),
          e.struct("CreatePassiveSellOfferOp", [
            ["selling", e.lookup("Asset")],
            ["buying", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
            ["price", e.lookup("Price")],
          ]),
          e.struct("SetOptionsOp", [
            ["inflationDest", e.option(e.lookup("AccountId"))],
            ["clearFlags", e.option(e.lookup("Uint32"))],
            ["setFlags", e.option(e.lookup("Uint32"))],
            ["masterWeight", e.option(e.lookup("Uint32"))],
            ["lowThreshold", e.option(e.lookup("Uint32"))],
            ["medThreshold", e.option(e.lookup("Uint32"))],
            ["highThreshold", e.option(e.lookup("Uint32"))],
            ["homeDomain", e.option(e.lookup("String32"))],
            ["signer", e.option(e.lookup("Signer"))],
          ]),
          e.union("ChangeTrustAsset", {
            switchOn: e.lookup("AssetType"),
            switchName: "type",
            switches: [
              ["assetTypeNative", e.void()],
              ["assetTypeCreditAlphanum4", "alphaNum4"],
              ["assetTypeCreditAlphanum12", "alphaNum12"],
              ["assetTypePoolShare", "liquidityPool"],
            ],
            arms: {
              alphaNum4: e.lookup("AlphaNum4"),
              alphaNum12: e.lookup("AlphaNum12"),
              liquidityPool: e.lookup("LiquidityPoolParameters"),
            },
          }),
          e.struct("ChangeTrustOp", [
            ["line", e.lookup("ChangeTrustAsset")],
            ["limit", e.lookup("Int64")],
          ]),
          e.struct("AllowTrustOp", [
            ["trustor", e.lookup("AccountId")],
            ["asset", e.lookup("AssetCode")],
            ["authorize", e.lookup("Uint32")],
          ]),
          e.struct("ManageDataOp", [
            ["dataName", e.lookup("String64")],
            ["dataValue", e.option(e.lookup("DataValue"))],
          ]),
          e.struct("BumpSequenceOp", [["bumpTo", e.lookup("SequenceNumber")]]),
          e.struct("CreateClaimableBalanceOp", [
            ["asset", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
            ["claimants", e.varArray(e.lookup("Claimant"), 10)],
          ]),
          e.struct("ClaimClaimableBalanceOp", [
            ["balanceId", e.lookup("ClaimableBalanceId")],
          ]),
          e.struct("BeginSponsoringFutureReservesOp", [
            ["sponsoredId", e.lookup("AccountId")],
          ]),
          e.enum("RevokeSponsorshipType", {
            revokeSponsorshipLedgerEntry: 0,
            revokeSponsorshipSigner: 1,
          }),
          e.struct("RevokeSponsorshipOpSigner", [
            ["accountId", e.lookup("AccountId")],
            ["signerKey", e.lookup("SignerKey")],
          ]),
          e.union("RevokeSponsorshipOp", {
            switchOn: e.lookup("RevokeSponsorshipType"),
            switchName: "type",
            switches: [
              ["revokeSponsorshipLedgerEntry", "ledgerKey"],
              ["revokeSponsorshipSigner", "signer"],
            ],
            arms: {
              ledgerKey: e.lookup("LedgerKey"),
              signer: e.lookup("RevokeSponsorshipOpSigner"),
            },
          }),
          e.struct("ClawbackOp", [
            ["asset", e.lookup("Asset")],
            ["from", e.lookup("MuxedAccount")],
            ["amount", e.lookup("Int64")],
          ]),
          e.struct("ClawbackClaimableBalanceOp", [
            ["balanceId", e.lookup("ClaimableBalanceId")],
          ]),
          e.struct("SetTrustLineFlagsOp", [
            ["trustor", e.lookup("AccountId")],
            ["asset", e.lookup("Asset")],
            ["clearFlags", e.lookup("Uint32")],
            ["setFlags", e.lookup("Uint32")],
          ]),
          e.const("LIQUIDITY_POOL_FEE_V18", 30),
          e.struct("LiquidityPoolDepositOp", [
            ["liquidityPoolId", e.lookup("PoolId")],
            ["maxAmountA", e.lookup("Int64")],
            ["maxAmountB", e.lookup("Int64")],
            ["minPrice", e.lookup("Price")],
            ["maxPrice", e.lookup("Price")],
          ]),
          e.struct("LiquidityPoolWithdrawOp", [
            ["liquidityPoolId", e.lookup("PoolId")],
            ["amount", e.lookup("Int64")],
            ["minAmountA", e.lookup("Int64")],
            ["minAmountB", e.lookup("Int64")],
          ]),
          e.union("OperationBody", {
            switchOn: e.lookup("OperationType"),
            switchName: "type",
            switches: [
              ["createAccount", "createAccountOp"],
              ["payment", "paymentOp"],
              ["pathPaymentStrictReceive", "pathPaymentStrictReceiveOp"],
              ["manageSellOffer", "manageSellOfferOp"],
              ["createPassiveSellOffer", "createPassiveSellOfferOp"],
              ["setOptions", "setOptionsOp"],
              ["changeTrust", "changeTrustOp"],
              ["allowTrust", "allowTrustOp"],
              ["accountMerge", "destination"],
              ["inflation", e.void()],
              ["manageData", "manageDataOp"],
              ["bumpSequence", "bumpSequenceOp"],
              ["manageBuyOffer", "manageBuyOfferOp"],
              ["pathPaymentStrictSend", "pathPaymentStrictSendOp"],
              ["createClaimableBalance", "createClaimableBalanceOp"],
              ["claimClaimableBalance", "claimClaimableBalanceOp"],
              [
                "beginSponsoringFutureReserves",
                "beginSponsoringFutureReservesOp",
              ],
              ["endSponsoringFutureReserves", e.void()],
              ["revokeSponsorship", "revokeSponsorshipOp"],
              ["clawback", "clawbackOp"],
              ["clawbackClaimableBalance", "clawbackClaimableBalanceOp"],
              ["setTrustLineFlags", "setTrustLineFlagsOp"],
              ["liquidityPoolDeposit", "liquidityPoolDepositOp"],
              ["liquidityPoolWithdraw", "liquidityPoolWithdrawOp"],
            ],
            arms: {
              createAccountOp: e.lookup("CreateAccountOp"),
              paymentOp: e.lookup("PaymentOp"),
              pathPaymentStrictReceiveOp: e.lookup(
                "PathPaymentStrictReceiveOp",
              ),
              manageSellOfferOp: e.lookup("ManageSellOfferOp"),
              createPassiveSellOfferOp: e.lookup("CreatePassiveSellOfferOp"),
              setOptionsOp: e.lookup("SetOptionsOp"),
              changeTrustOp: e.lookup("ChangeTrustOp"),
              allowTrustOp: e.lookup("AllowTrustOp"),
              destination: e.lookup("MuxedAccount"),
              manageDataOp: e.lookup("ManageDataOp"),
              bumpSequenceOp: e.lookup("BumpSequenceOp"),
              manageBuyOfferOp: e.lookup("ManageBuyOfferOp"),
              pathPaymentStrictSendOp: e.lookup("PathPaymentStrictSendOp"),
              createClaimableBalanceOp: e.lookup("CreateClaimableBalanceOp"),
              claimClaimableBalanceOp: e.lookup("ClaimClaimableBalanceOp"),
              beginSponsoringFutureReservesOp: e.lookup(
                "BeginSponsoringFutureReservesOp",
              ),
              revokeSponsorshipOp: e.lookup("RevokeSponsorshipOp"),
              clawbackOp: e.lookup("ClawbackOp"),
              clawbackClaimableBalanceOp: e.lookup(
                "ClawbackClaimableBalanceOp",
              ),
              setTrustLineFlagsOp: e.lookup("SetTrustLineFlagsOp"),
              liquidityPoolDepositOp: e.lookup("LiquidityPoolDepositOp"),
              liquidityPoolWithdrawOp: e.lookup("LiquidityPoolWithdrawOp"),
            },
          }),
          e.struct("Operation", [
            ["sourceAccount", e.option(e.lookup("MuxedAccount"))],
            ["body", e.lookup("OperationBody")],
          ]),
          e.struct("HashIdPreimageOperationId", [
            ["sourceAccount", e.lookup("AccountId")],
            ["seqNum", e.lookup("SequenceNumber")],
            ["opNum", e.lookup("Uint32")],
          ]),
          e.struct("HashIdPreimageRevokeId", [
            ["sourceAccount", e.lookup("AccountId")],
            ["seqNum", e.lookup("SequenceNumber")],
            ["opNum", e.lookup("Uint32")],
            ["liquidityPoolId", e.lookup("PoolId")],
            ["asset", e.lookup("Asset")],
          ]),
          e.union("HashIdPreimage", {
            switchOn: e.lookup("EnvelopeType"),
            switchName: "type",
            switches: [
              ["envelopeTypeOpId", "operationId"],
              ["envelopeTypePoolRevokeOpId", "revokeId"],
            ],
            arms: {
              operationId: e.lookup("HashIdPreimageOperationId"),
              revokeId: e.lookup("HashIdPreimageRevokeId"),
            },
          }),
          e.enum("MemoType", {
            memoNone: 0,
            memoText: 1,
            memoId: 2,
            memoHash: 3,
            memoReturn: 4,
          }),
          e.union("Memo", {
            switchOn: e.lookup("MemoType"),
            switchName: "type",
            switches: [
              ["memoNone", e.void()],
              ["memoText", "text"],
              ["memoId", "id"],
              ["memoHash", "hash"],
              ["memoReturn", "retHash"],
            ],
            arms: {
              text: e.string(28),
              id: e.lookup("Uint64"),
              hash: e.lookup("Hash"),
              retHash: e.lookup("Hash"),
            },
          }),
          e.struct("TimeBounds", [
            ["minTime", e.lookup("TimePoint")],
            ["maxTime", e.lookup("TimePoint")],
          ]),
          e.struct("LedgerBounds", [
            ["minLedger", e.lookup("Uint32")],
            ["maxLedger", e.lookup("Uint32")],
          ]),
          e.struct("PreconditionsV2", [
            ["timeBounds", e.option(e.lookup("TimeBounds"))],
            ["ledgerBounds", e.option(e.lookup("LedgerBounds"))],
            ["minSeqNum", e.option(e.lookup("SequenceNumber"))],
            ["minSeqAge", e.lookup("Duration")],
            ["minSeqLedgerGap", e.lookup("Uint32")],
            ["extraSigners", e.varArray(e.lookup("SignerKey"), 2)],
          ]),
          e.enum("PreconditionType", {
            precondNone: 0,
            precondTime: 1,
            precondV2: 2,
          }),
          e.union("Preconditions", {
            switchOn: e.lookup("PreconditionType"),
            switchName: "type",
            switches: [
              ["precondNone", e.void()],
              ["precondTime", "timeBounds"],
              ["precondV2", "v2"],
            ],
            arms: {
              timeBounds: e.lookup("TimeBounds"),
              v2: e.lookup("PreconditionsV2"),
            },
          }),
          e.const("MAX_OPS_PER_TX", 100),
          e.union("TransactionV0Ext", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("TransactionV0", [
            ["sourceAccountEd25519", e.lookup("Uint256")],
            ["fee", e.lookup("Uint32")],
            ["seqNum", e.lookup("SequenceNumber")],
            ["timeBounds", e.option(e.lookup("TimeBounds"))],
            ["memo", e.lookup("Memo")],
            [
              "operations",
              e.varArray(e.lookup("Operation"), e.lookup("MAX_OPS_PER_TX")),
            ],
            ["ext", e.lookup("TransactionV0Ext")],
          ]),
          e.struct("TransactionV0Envelope", [
            ["tx", e.lookup("TransactionV0")],
            ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)],
          ]),
          e.union("TransactionExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("Transaction", [
            ["sourceAccount", e.lookup("MuxedAccount")],
            ["fee", e.lookup("Uint32")],
            ["seqNum", e.lookup("SequenceNumber")],
            ["cond", e.lookup("Preconditions")],
            ["memo", e.lookup("Memo")],
            [
              "operations",
              e.varArray(e.lookup("Operation"), e.lookup("MAX_OPS_PER_TX")),
            ],
            ["ext", e.lookup("TransactionExt")],
          ]),
          e.struct("TransactionV1Envelope", [
            ["tx", e.lookup("Transaction")],
            ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)],
          ]),
          e.union("FeeBumpTransactionInnerTx", {
            switchOn: e.lookup("EnvelopeType"),
            switchName: "type",
            switches: [["envelopeTypeTx", "v1"]],
            arms: { v1: e.lookup("TransactionV1Envelope") },
          }),
          e.union("FeeBumpTransactionExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("FeeBumpTransaction", [
            ["feeSource", e.lookup("MuxedAccount")],
            ["fee", e.lookup("Int64")],
            ["innerTx", e.lookup("FeeBumpTransactionInnerTx")],
            ["ext", e.lookup("FeeBumpTransactionExt")],
          ]),
          e.struct("FeeBumpTransactionEnvelope", [
            ["tx", e.lookup("FeeBumpTransaction")],
            ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)],
          ]),
          e.union("TransactionEnvelope", {
            switchOn: e.lookup("EnvelopeType"),
            switchName: "type",
            switches: [
              ["envelopeTypeTxV0", "v0"],
              ["envelopeTypeTx", "v1"],
              ["envelopeTypeTxFeeBump", "feeBump"],
            ],
            arms: {
              v0: e.lookup("TransactionV0Envelope"),
              v1: e.lookup("TransactionV1Envelope"),
              feeBump: e.lookup("FeeBumpTransactionEnvelope"),
            },
          }),
          e.union("TransactionSignaturePayloadTaggedTransaction", {
            switchOn: e.lookup("EnvelopeType"),
            switchName: "type",
            switches: [
              ["envelopeTypeTx", "tx"],
              ["envelopeTypeTxFeeBump", "feeBump"],
            ],
            arms: {
              tx: e.lookup("Transaction"),
              feeBump: e.lookup("FeeBumpTransaction"),
            },
          }),
          e.struct("TransactionSignaturePayload", [
            ["networkId", e.lookup("Hash")],
            [
              "taggedTransaction",
              e.lookup("TransactionSignaturePayloadTaggedTransaction"),
            ],
          ]),
          e.enum("ClaimAtomType", {
            claimAtomTypeV0: 0,
            claimAtomTypeOrderBook: 1,
            claimAtomTypeLiquidityPool: 2,
          }),
          e.struct("ClaimOfferAtomV0", [
            ["sellerEd25519", e.lookup("Uint256")],
            ["offerId", e.lookup("Int64")],
            ["assetSold", e.lookup("Asset")],
            ["amountSold", e.lookup("Int64")],
            ["assetBought", e.lookup("Asset")],
            ["amountBought", e.lookup("Int64")],
          ]),
          e.struct("ClaimOfferAtom", [
            ["sellerId", e.lookup("AccountId")],
            ["offerId", e.lookup("Int64")],
            ["assetSold", e.lookup("Asset")],
            ["amountSold", e.lookup("Int64")],
            ["assetBought", e.lookup("Asset")],
            ["amountBought", e.lookup("Int64")],
          ]),
          e.struct("ClaimLiquidityAtom", [
            ["liquidityPoolId", e.lookup("PoolId")],
            ["assetSold", e.lookup("Asset")],
            ["amountSold", e.lookup("Int64")],
            ["assetBought", e.lookup("Asset")],
            ["amountBought", e.lookup("Int64")],
          ]),
          e.union("ClaimAtom", {
            switchOn: e.lookup("ClaimAtomType"),
            switchName: "type",
            switches: [
              ["claimAtomTypeV0", "v0"],
              ["claimAtomTypeOrderBook", "orderBook"],
              ["claimAtomTypeLiquidityPool", "liquidityPool"],
            ],
            arms: {
              v0: e.lookup("ClaimOfferAtomV0"),
              orderBook: e.lookup("ClaimOfferAtom"),
              liquidityPool: e.lookup("ClaimLiquidityAtom"),
            },
          }),
          e.enum("CreateAccountResultCode", {
            createAccountSuccess: 0,
            createAccountMalformed: -1,
            createAccountUnderfunded: -2,
            createAccountLowReserve: -3,
            createAccountAlreadyExist: -4,
          }),
          e.union("CreateAccountResult", {
            switchOn: e.lookup("CreateAccountResultCode"),
            switchName: "code",
            switches: [
              ["createAccountSuccess", e.void()],
              ["createAccountMalformed", e.void()],
              ["createAccountUnderfunded", e.void()],
              ["createAccountLowReserve", e.void()],
              ["createAccountAlreadyExist", e.void()],
            ],
            arms: {},
          }),
          e.enum("PaymentResultCode", {
            paymentSuccess: 0,
            paymentMalformed: -1,
            paymentUnderfunded: -2,
            paymentSrcNoTrust: -3,
            paymentSrcNotAuthorized: -4,
            paymentNoDestination: -5,
            paymentNoTrust: -6,
            paymentNotAuthorized: -7,
            paymentLineFull: -8,
            paymentNoIssuer: -9,
          }),
          e.union("PaymentResult", {
            switchOn: e.lookup("PaymentResultCode"),
            switchName: "code",
            switches: [
              ["paymentSuccess", e.void()],
              ["paymentMalformed", e.void()],
              ["paymentUnderfunded", e.void()],
              ["paymentSrcNoTrust", e.void()],
              ["paymentSrcNotAuthorized", e.void()],
              ["paymentNoDestination", e.void()],
              ["paymentNoTrust", e.void()],
              ["paymentNotAuthorized", e.void()],
              ["paymentLineFull", e.void()],
              ["paymentNoIssuer", e.void()],
            ],
            arms: {},
          }),
          e.enum("PathPaymentStrictReceiveResultCode", {
            pathPaymentStrictReceiveSuccess: 0,
            pathPaymentStrictReceiveMalformed: -1,
            pathPaymentStrictReceiveUnderfunded: -2,
            pathPaymentStrictReceiveSrcNoTrust: -3,
            pathPaymentStrictReceiveSrcNotAuthorized: -4,
            pathPaymentStrictReceiveNoDestination: -5,
            pathPaymentStrictReceiveNoTrust: -6,
            pathPaymentStrictReceiveNotAuthorized: -7,
            pathPaymentStrictReceiveLineFull: -8,
            pathPaymentStrictReceiveNoIssuer: -9,
            pathPaymentStrictReceiveTooFewOffers: -10,
            pathPaymentStrictReceiveOfferCrossSelf: -11,
            pathPaymentStrictReceiveOverSendmax: -12,
          }),
          e.struct("SimplePaymentResult", [
            ["destination", e.lookup("AccountId")],
            ["asset", e.lookup("Asset")],
            ["amount", e.lookup("Int64")],
          ]),
          e.struct("PathPaymentStrictReceiveResultSuccess", [
            ["offers", e.varArray(e.lookup("ClaimAtom"), 2147483647)],
            ["last", e.lookup("SimplePaymentResult")],
          ]),
          e.union("PathPaymentStrictReceiveResult", {
            switchOn: e.lookup("PathPaymentStrictReceiveResultCode"),
            switchName: "code",
            switches: [
              ["pathPaymentStrictReceiveSuccess", "success"],
              ["pathPaymentStrictReceiveMalformed", e.void()],
              ["pathPaymentStrictReceiveUnderfunded", e.void()],
              ["pathPaymentStrictReceiveSrcNoTrust", e.void()],
              ["pathPaymentStrictReceiveSrcNotAuthorized", e.void()],
              ["pathPaymentStrictReceiveNoDestination", e.void()],
              ["pathPaymentStrictReceiveNoTrust", e.void()],
              ["pathPaymentStrictReceiveNotAuthorized", e.void()],
              ["pathPaymentStrictReceiveLineFull", e.void()],
              ["pathPaymentStrictReceiveNoIssuer", "noIssuer"],
              ["pathPaymentStrictReceiveTooFewOffers", e.void()],
              ["pathPaymentStrictReceiveOfferCrossSelf", e.void()],
              ["pathPaymentStrictReceiveOverSendmax", e.void()],
            ],
            arms: {
              success: e.lookup("PathPaymentStrictReceiveResultSuccess"),
              noIssuer: e.lookup("Asset"),
            },
          }),
          e.enum("PathPaymentStrictSendResultCode", {
            pathPaymentStrictSendSuccess: 0,
            pathPaymentStrictSendMalformed: -1,
            pathPaymentStrictSendUnderfunded: -2,
            pathPaymentStrictSendSrcNoTrust: -3,
            pathPaymentStrictSendSrcNotAuthorized: -4,
            pathPaymentStrictSendNoDestination: -5,
            pathPaymentStrictSendNoTrust: -6,
            pathPaymentStrictSendNotAuthorized: -7,
            pathPaymentStrictSendLineFull: -8,
            pathPaymentStrictSendNoIssuer: -9,
            pathPaymentStrictSendTooFewOffers: -10,
            pathPaymentStrictSendOfferCrossSelf: -11,
            pathPaymentStrictSendUnderDestmin: -12,
          }),
          e.struct("PathPaymentStrictSendResultSuccess", [
            ["offers", e.varArray(e.lookup("ClaimAtom"), 2147483647)],
            ["last", e.lookup("SimplePaymentResult")],
          ]),
          e.union("PathPaymentStrictSendResult", {
            switchOn: e.lookup("PathPaymentStrictSendResultCode"),
            switchName: "code",
            switches: [
              ["pathPaymentStrictSendSuccess", "success"],
              ["pathPaymentStrictSendMalformed", e.void()],
              ["pathPaymentStrictSendUnderfunded", e.void()],
              ["pathPaymentStrictSendSrcNoTrust", e.void()],
              ["pathPaymentStrictSendSrcNotAuthorized", e.void()],
              ["pathPaymentStrictSendNoDestination", e.void()],
              ["pathPaymentStrictSendNoTrust", e.void()],
              ["pathPaymentStrictSendNotAuthorized", e.void()],
              ["pathPaymentStrictSendLineFull", e.void()],
              ["pathPaymentStrictSendNoIssuer", "noIssuer"],
              ["pathPaymentStrictSendTooFewOffers", e.void()],
              ["pathPaymentStrictSendOfferCrossSelf", e.void()],
              ["pathPaymentStrictSendUnderDestmin", e.void()],
            ],
            arms: {
              success: e.lookup("PathPaymentStrictSendResultSuccess"),
              noIssuer: e.lookup("Asset"),
            },
          }),
          e.enum("ManageSellOfferResultCode", {
            manageSellOfferSuccess: 0,
            manageSellOfferMalformed: -1,
            manageSellOfferSellNoTrust: -2,
            manageSellOfferBuyNoTrust: -3,
            manageSellOfferSellNotAuthorized: -4,
            manageSellOfferBuyNotAuthorized: -5,
            manageSellOfferLineFull: -6,
            manageSellOfferUnderfunded: -7,
            manageSellOfferCrossSelf: -8,
            manageSellOfferSellNoIssuer: -9,
            manageSellOfferBuyNoIssuer: -10,
            manageSellOfferNotFound: -11,
            manageSellOfferLowReserve: -12,
          }),
          e.enum("ManageOfferEffect", {
            manageOfferCreated: 0,
            manageOfferUpdated: 1,
            manageOfferDeleted: 2,
          }),
          e.union("ManageOfferSuccessResultOffer", {
            switchOn: e.lookup("ManageOfferEffect"),
            switchName: "effect",
            switches: [
              ["manageOfferCreated", "offer"],
              ["manageOfferUpdated", "offer"],
              ["manageOfferDeleted", e.void()],
            ],
            arms: { offer: e.lookup("OfferEntry") },
          }),
          e.struct("ManageOfferSuccessResult", [
            ["offersClaimed", e.varArray(e.lookup("ClaimAtom"), 2147483647)],
            ["offer", e.lookup("ManageOfferSuccessResultOffer")],
          ]),
          e.union("ManageSellOfferResult", {
            switchOn: e.lookup("ManageSellOfferResultCode"),
            switchName: "code",
            switches: [
              ["manageSellOfferSuccess", "success"],
              ["manageSellOfferMalformed", e.void()],
              ["manageSellOfferSellNoTrust", e.void()],
              ["manageSellOfferBuyNoTrust", e.void()],
              ["manageSellOfferSellNotAuthorized", e.void()],
              ["manageSellOfferBuyNotAuthorized", e.void()],
              ["manageSellOfferLineFull", e.void()],
              ["manageSellOfferUnderfunded", e.void()],
              ["manageSellOfferCrossSelf", e.void()],
              ["manageSellOfferSellNoIssuer", e.void()],
              ["manageSellOfferBuyNoIssuer", e.void()],
              ["manageSellOfferNotFound", e.void()],
              ["manageSellOfferLowReserve", e.void()],
            ],
            arms: { success: e.lookup("ManageOfferSuccessResult") },
          }),
          e.enum("ManageBuyOfferResultCode", {
            manageBuyOfferSuccess: 0,
            manageBuyOfferMalformed: -1,
            manageBuyOfferSellNoTrust: -2,
            manageBuyOfferBuyNoTrust: -3,
            manageBuyOfferSellNotAuthorized: -4,
            manageBuyOfferBuyNotAuthorized: -5,
            manageBuyOfferLineFull: -6,
            manageBuyOfferUnderfunded: -7,
            manageBuyOfferCrossSelf: -8,
            manageBuyOfferSellNoIssuer: -9,
            manageBuyOfferBuyNoIssuer: -10,
            manageBuyOfferNotFound: -11,
            manageBuyOfferLowReserve: -12,
          }),
          e.union("ManageBuyOfferResult", {
            switchOn: e.lookup("ManageBuyOfferResultCode"),
            switchName: "code",
            switches: [
              ["manageBuyOfferSuccess", "success"],
              ["manageBuyOfferMalformed", e.void()],
              ["manageBuyOfferSellNoTrust", e.void()],
              ["manageBuyOfferBuyNoTrust", e.void()],
              ["manageBuyOfferSellNotAuthorized", e.void()],
              ["manageBuyOfferBuyNotAuthorized", e.void()],
              ["manageBuyOfferLineFull", e.void()],
              ["manageBuyOfferUnderfunded", e.void()],
              ["manageBuyOfferCrossSelf", e.void()],
              ["manageBuyOfferSellNoIssuer", e.void()],
              ["manageBuyOfferBuyNoIssuer", e.void()],
              ["manageBuyOfferNotFound", e.void()],
              ["manageBuyOfferLowReserve", e.void()],
            ],
            arms: { success: e.lookup("ManageOfferSuccessResult") },
          }),
          e.enum("SetOptionsResultCode", {
            setOptionsSuccess: 0,
            setOptionsLowReserve: -1,
            setOptionsTooManySigners: -2,
            setOptionsBadFlags: -3,
            setOptionsInvalidInflation: -4,
            setOptionsCantChange: -5,
            setOptionsUnknownFlag: -6,
            setOptionsThresholdOutOfRange: -7,
            setOptionsBadSigner: -8,
            setOptionsInvalidHomeDomain: -9,
            setOptionsAuthRevocableRequired: -10,
          }),
          e.union("SetOptionsResult", {
            switchOn: e.lookup("SetOptionsResultCode"),
            switchName: "code",
            switches: [
              ["setOptionsSuccess", e.void()],
              ["setOptionsLowReserve", e.void()],
              ["setOptionsTooManySigners", e.void()],
              ["setOptionsBadFlags", e.void()],
              ["setOptionsInvalidInflation", e.void()],
              ["setOptionsCantChange", e.void()],
              ["setOptionsUnknownFlag", e.void()],
              ["setOptionsThresholdOutOfRange", e.void()],
              ["setOptionsBadSigner", e.void()],
              ["setOptionsInvalidHomeDomain", e.void()],
              ["setOptionsAuthRevocableRequired", e.void()],
            ],
            arms: {},
          }),
          e.enum("ChangeTrustResultCode", {
            changeTrustSuccess: 0,
            changeTrustMalformed: -1,
            changeTrustNoIssuer: -2,
            changeTrustInvalidLimit: -3,
            changeTrustLowReserve: -4,
            changeTrustSelfNotAllowed: -5,
            changeTrustTrustLineMissing: -6,
            changeTrustCannotDelete: -7,
            changeTrustNotAuthMaintainLiabilities: -8,
          }),
          e.union("ChangeTrustResult", {
            switchOn: e.lookup("ChangeTrustResultCode"),
            switchName: "code",
            switches: [
              ["changeTrustSuccess", e.void()],
              ["changeTrustMalformed", e.void()],
              ["changeTrustNoIssuer", e.void()],
              ["changeTrustInvalidLimit", e.void()],
              ["changeTrustLowReserve", e.void()],
              ["changeTrustSelfNotAllowed", e.void()],
              ["changeTrustTrustLineMissing", e.void()],
              ["changeTrustCannotDelete", e.void()],
              ["changeTrustNotAuthMaintainLiabilities", e.void()],
            ],
            arms: {},
          }),
          e.enum("AllowTrustResultCode", {
            allowTrustSuccess: 0,
            allowTrustMalformed: -1,
            allowTrustNoTrustLine: -2,
            allowTrustTrustNotRequired: -3,
            allowTrustCantRevoke: -4,
            allowTrustSelfNotAllowed: -5,
            allowTrustLowReserve: -6,
          }),
          e.union("AllowTrustResult", {
            switchOn: e.lookup("AllowTrustResultCode"),
            switchName: "code",
            switches: [
              ["allowTrustSuccess", e.void()],
              ["allowTrustMalformed", e.void()],
              ["allowTrustNoTrustLine", e.void()],
              ["allowTrustTrustNotRequired", e.void()],
              ["allowTrustCantRevoke", e.void()],
              ["allowTrustSelfNotAllowed", e.void()],
              ["allowTrustLowReserve", e.void()],
            ],
            arms: {},
          }),
          e.enum("AccountMergeResultCode", {
            accountMergeSuccess: 0,
            accountMergeMalformed: -1,
            accountMergeNoAccount: -2,
            accountMergeImmutableSet: -3,
            accountMergeHasSubEntries: -4,
            accountMergeSeqnumTooFar: -5,
            accountMergeDestFull: -6,
            accountMergeIsSponsor: -7,
          }),
          e.union("AccountMergeResult", {
            switchOn: e.lookup("AccountMergeResultCode"),
            switchName: "code",
            switches: [
              ["accountMergeSuccess", "sourceAccountBalance"],
              ["accountMergeMalformed", e.void()],
              ["accountMergeNoAccount", e.void()],
              ["accountMergeImmutableSet", e.void()],
              ["accountMergeHasSubEntries", e.void()],
              ["accountMergeSeqnumTooFar", e.void()],
              ["accountMergeDestFull", e.void()],
              ["accountMergeIsSponsor", e.void()],
            ],
            arms: { sourceAccountBalance: e.lookup("Int64") },
          }),
          e.enum("InflationResultCode", {
            inflationSuccess: 0,
            inflationNotTime: -1,
          }),
          e.struct("InflationPayout", [
            ["destination", e.lookup("AccountId")],
            ["amount", e.lookup("Int64")],
          ]),
          e.union("InflationResult", {
            switchOn: e.lookup("InflationResultCode"),
            switchName: "code",
            switches: [
              ["inflationSuccess", "payouts"],
              ["inflationNotTime", e.void()],
            ],
            arms: {
              payouts: e.varArray(e.lookup("InflationPayout"), 2147483647),
            },
          }),
          e.enum("ManageDataResultCode", {
            manageDataSuccess: 0,
            manageDataNotSupportedYet: -1,
            manageDataNameNotFound: -2,
            manageDataLowReserve: -3,
            manageDataInvalidName: -4,
          }),
          e.union("ManageDataResult", {
            switchOn: e.lookup("ManageDataResultCode"),
            switchName: "code",
            switches: [
              ["manageDataSuccess", e.void()],
              ["manageDataNotSupportedYet", e.void()],
              ["manageDataNameNotFound", e.void()],
              ["manageDataLowReserve", e.void()],
              ["manageDataInvalidName", e.void()],
            ],
            arms: {},
          }),
          e.enum("BumpSequenceResultCode", {
            bumpSequenceSuccess: 0,
            bumpSequenceBadSeq: -1,
          }),
          e.union("BumpSequenceResult", {
            switchOn: e.lookup("BumpSequenceResultCode"),
            switchName: "code",
            switches: [
              ["bumpSequenceSuccess", e.void()],
              ["bumpSequenceBadSeq", e.void()],
            ],
            arms: {},
          }),
          e.enum("CreateClaimableBalanceResultCode", {
            createClaimableBalanceSuccess: 0,
            createClaimableBalanceMalformed: -1,
            createClaimableBalanceLowReserve: -2,
            createClaimableBalanceNoTrust: -3,
            createClaimableBalanceNotAuthorized: -4,
            createClaimableBalanceUnderfunded: -5,
          }),
          e.union("CreateClaimableBalanceResult", {
            switchOn: e.lookup("CreateClaimableBalanceResultCode"),
            switchName: "code",
            switches: [
              ["createClaimableBalanceSuccess", "balanceId"],
              ["createClaimableBalanceMalformed", e.void()],
              ["createClaimableBalanceLowReserve", e.void()],
              ["createClaimableBalanceNoTrust", e.void()],
              ["createClaimableBalanceNotAuthorized", e.void()],
              ["createClaimableBalanceUnderfunded", e.void()],
            ],
            arms: { balanceId: e.lookup("ClaimableBalanceId") },
          }),
          e.enum("ClaimClaimableBalanceResultCode", {
            claimClaimableBalanceSuccess: 0,
            claimClaimableBalanceDoesNotExist: -1,
            claimClaimableBalanceCannotClaim: -2,
            claimClaimableBalanceLineFull: -3,
            claimClaimableBalanceNoTrust: -4,
            claimClaimableBalanceNotAuthorized: -5,
          }),
          e.union("ClaimClaimableBalanceResult", {
            switchOn: e.lookup("ClaimClaimableBalanceResultCode"),
            switchName: "code",
            switches: [
              ["claimClaimableBalanceSuccess", e.void()],
              ["claimClaimableBalanceDoesNotExist", e.void()],
              ["claimClaimableBalanceCannotClaim", e.void()],
              ["claimClaimableBalanceLineFull", e.void()],
              ["claimClaimableBalanceNoTrust", e.void()],
              ["claimClaimableBalanceNotAuthorized", e.void()],
            ],
            arms: {},
          }),
          e.enum("BeginSponsoringFutureReservesResultCode", {
            beginSponsoringFutureReservesSuccess: 0,
            beginSponsoringFutureReservesMalformed: -1,
            beginSponsoringFutureReservesAlreadySponsored: -2,
            beginSponsoringFutureReservesRecursive: -3,
          }),
          e.union("BeginSponsoringFutureReservesResult", {
            switchOn: e.lookup("BeginSponsoringFutureReservesResultCode"),
            switchName: "code",
            switches: [
              ["beginSponsoringFutureReservesSuccess", e.void()],
              ["beginSponsoringFutureReservesMalformed", e.void()],
              ["beginSponsoringFutureReservesAlreadySponsored", e.void()],
              ["beginSponsoringFutureReservesRecursive", e.void()],
            ],
            arms: {},
          }),
          e.enum("EndSponsoringFutureReservesResultCode", {
            endSponsoringFutureReservesSuccess: 0,
            endSponsoringFutureReservesNotSponsored: -1,
          }),
          e.union("EndSponsoringFutureReservesResult", {
            switchOn: e.lookup("EndSponsoringFutureReservesResultCode"),
            switchName: "code",
            switches: [
              ["endSponsoringFutureReservesSuccess", e.void()],
              ["endSponsoringFutureReservesNotSponsored", e.void()],
            ],
            arms: {},
          }),
          e.enum("RevokeSponsorshipResultCode", {
            revokeSponsorshipSuccess: 0,
            revokeSponsorshipDoesNotExist: -1,
            revokeSponsorshipNotSponsor: -2,
            revokeSponsorshipLowReserve: -3,
            revokeSponsorshipOnlyTransferable: -4,
            revokeSponsorshipMalformed: -5,
          }),
          e.union("RevokeSponsorshipResult", {
            switchOn: e.lookup("RevokeSponsorshipResultCode"),
            switchName: "code",
            switches: [
              ["revokeSponsorshipSuccess", e.void()],
              ["revokeSponsorshipDoesNotExist", e.void()],
              ["revokeSponsorshipNotSponsor", e.void()],
              ["revokeSponsorshipLowReserve", e.void()],
              ["revokeSponsorshipOnlyTransferable", e.void()],
              ["revokeSponsorshipMalformed", e.void()],
            ],
            arms: {},
          }),
          e.enum("ClawbackResultCode", {
            clawbackSuccess: 0,
            clawbackMalformed: -1,
            clawbackNotClawbackEnabled: -2,
            clawbackNoTrust: -3,
            clawbackUnderfunded: -4,
          }),
          e.union("ClawbackResult", {
            switchOn: e.lookup("ClawbackResultCode"),
            switchName: "code",
            switches: [
              ["clawbackSuccess", e.void()],
              ["clawbackMalformed", e.void()],
              ["clawbackNotClawbackEnabled", e.void()],
              ["clawbackNoTrust", e.void()],
              ["clawbackUnderfunded", e.void()],
            ],
            arms: {},
          }),
          e.enum("ClawbackClaimableBalanceResultCode", {
            clawbackClaimableBalanceSuccess: 0,
            clawbackClaimableBalanceDoesNotExist: -1,
            clawbackClaimableBalanceNotIssuer: -2,
            clawbackClaimableBalanceNotClawbackEnabled: -3,
          }),
          e.union("ClawbackClaimableBalanceResult", {
            switchOn: e.lookup("ClawbackClaimableBalanceResultCode"),
            switchName: "code",
            switches: [
              ["clawbackClaimableBalanceSuccess", e.void()],
              ["clawbackClaimableBalanceDoesNotExist", e.void()],
              ["clawbackClaimableBalanceNotIssuer", e.void()],
              ["clawbackClaimableBalanceNotClawbackEnabled", e.void()],
            ],
            arms: {},
          }),
          e.enum("SetTrustLineFlagsResultCode", {
            setTrustLineFlagsSuccess: 0,
            setTrustLineFlagsMalformed: -1,
            setTrustLineFlagsNoTrustLine: -2,
            setTrustLineFlagsCantRevoke: -3,
            setTrustLineFlagsInvalidState: -4,
            setTrustLineFlagsLowReserve: -5,
          }),
          e.union("SetTrustLineFlagsResult", {
            switchOn: e.lookup("SetTrustLineFlagsResultCode"),
            switchName: "code",
            switches: [
              ["setTrustLineFlagsSuccess", e.void()],
              ["setTrustLineFlagsMalformed", e.void()],
              ["setTrustLineFlagsNoTrustLine", e.void()],
              ["setTrustLineFlagsCantRevoke", e.void()],
              ["setTrustLineFlagsInvalidState", e.void()],
              ["setTrustLineFlagsLowReserve", e.void()],
            ],
            arms: {},
          }),
          e.enum("LiquidityPoolDepositResultCode", {
            liquidityPoolDepositSuccess: 0,
            liquidityPoolDepositMalformed: -1,
            liquidityPoolDepositNoTrust: -2,
            liquidityPoolDepositNotAuthorized: -3,
            liquidityPoolDepositUnderfunded: -4,
            liquidityPoolDepositLineFull: -5,
            liquidityPoolDepositBadPrice: -6,
            liquidityPoolDepositPoolFull: -7,
          }),
          e.union("LiquidityPoolDepositResult", {
            switchOn: e.lookup("LiquidityPoolDepositResultCode"),
            switchName: "code",
            switches: [
              ["liquidityPoolDepositSuccess", e.void()],
              ["liquidityPoolDepositMalformed", e.void()],
              ["liquidityPoolDepositNoTrust", e.void()],
              ["liquidityPoolDepositNotAuthorized", e.void()],
              ["liquidityPoolDepositUnderfunded", e.void()],
              ["liquidityPoolDepositLineFull", e.void()],
              ["liquidityPoolDepositBadPrice", e.void()],
              ["liquidityPoolDepositPoolFull", e.void()],
            ],
            arms: {},
          }),
          e.enum("LiquidityPoolWithdrawResultCode", {
            liquidityPoolWithdrawSuccess: 0,
            liquidityPoolWithdrawMalformed: -1,
            liquidityPoolWithdrawNoTrust: -2,
            liquidityPoolWithdrawUnderfunded: -3,
            liquidityPoolWithdrawLineFull: -4,
            liquidityPoolWithdrawUnderMinimum: -5,
          }),
          e.union("LiquidityPoolWithdrawResult", {
            switchOn: e.lookup("LiquidityPoolWithdrawResultCode"),
            switchName: "code",
            switches: [
              ["liquidityPoolWithdrawSuccess", e.void()],
              ["liquidityPoolWithdrawMalformed", e.void()],
              ["liquidityPoolWithdrawNoTrust", e.void()],
              ["liquidityPoolWithdrawUnderfunded", e.void()],
              ["liquidityPoolWithdrawLineFull", e.void()],
              ["liquidityPoolWithdrawUnderMinimum", e.void()],
            ],
            arms: {},
          }),
          e.enum("OperationResultCode", {
            opInner: 0,
            opBadAuth: -1,
            opNoAccount: -2,
            opNotSupported: -3,
            opTooManySubentries: -4,
            opExceededWorkLimit: -5,
            opTooManySponsoring: -6,
          }),
          e.union("OperationResultTr", {
            switchOn: e.lookup("OperationType"),
            switchName: "type",
            switches: [
              ["createAccount", "createAccountResult"],
              ["payment", "paymentResult"],
              ["pathPaymentStrictReceive", "pathPaymentStrictReceiveResult"],
              ["manageSellOffer", "manageSellOfferResult"],
              ["createPassiveSellOffer", "createPassiveSellOfferResult"],
              ["setOptions", "setOptionsResult"],
              ["changeTrust", "changeTrustResult"],
              ["allowTrust", "allowTrustResult"],
              ["accountMerge", "accountMergeResult"],
              ["inflation", "inflationResult"],
              ["manageData", "manageDataResult"],
              ["bumpSequence", "bumpSeqResult"],
              ["manageBuyOffer", "manageBuyOfferResult"],
              ["pathPaymentStrictSend", "pathPaymentStrictSendResult"],
              ["createClaimableBalance", "createClaimableBalanceResult"],
              ["claimClaimableBalance", "claimClaimableBalanceResult"],
              [
                "beginSponsoringFutureReserves",
                "beginSponsoringFutureReservesResult",
              ],
              [
                "endSponsoringFutureReserves",
                "endSponsoringFutureReservesResult",
              ],
              ["revokeSponsorship", "revokeSponsorshipResult"],
              ["clawback", "clawbackResult"],
              ["clawbackClaimableBalance", "clawbackClaimableBalanceResult"],
              ["setTrustLineFlags", "setTrustLineFlagsResult"],
              ["liquidityPoolDeposit", "liquidityPoolDepositResult"],
              ["liquidityPoolWithdraw", "liquidityPoolWithdrawResult"],
            ],
            arms: {
              createAccountResult: e.lookup("CreateAccountResult"),
              paymentResult: e.lookup("PaymentResult"),
              pathPaymentStrictReceiveResult: e.lookup(
                "PathPaymentStrictReceiveResult",
              ),
              manageSellOfferResult: e.lookup("ManageSellOfferResult"),
              createPassiveSellOfferResult: e.lookup("ManageSellOfferResult"),
              setOptionsResult: e.lookup("SetOptionsResult"),
              changeTrustResult: e.lookup("ChangeTrustResult"),
              allowTrustResult: e.lookup("AllowTrustResult"),
              accountMergeResult: e.lookup("AccountMergeResult"),
              inflationResult: e.lookup("InflationResult"),
              manageDataResult: e.lookup("ManageDataResult"),
              bumpSeqResult: e.lookup("BumpSequenceResult"),
              manageBuyOfferResult: e.lookup("ManageBuyOfferResult"),
              pathPaymentStrictSendResult: e.lookup(
                "PathPaymentStrictSendResult",
              ),
              createClaimableBalanceResult: e.lookup(
                "CreateClaimableBalanceResult",
              ),
              claimClaimableBalanceResult: e.lookup(
                "ClaimClaimableBalanceResult",
              ),
              beginSponsoringFutureReservesResult: e.lookup(
                "BeginSponsoringFutureReservesResult",
              ),
              endSponsoringFutureReservesResult: e.lookup(
                "EndSponsoringFutureReservesResult",
              ),
              revokeSponsorshipResult: e.lookup("RevokeSponsorshipResult"),
              clawbackResult: e.lookup("ClawbackResult"),
              clawbackClaimableBalanceResult: e.lookup(
                "ClawbackClaimableBalanceResult",
              ),
              setTrustLineFlagsResult: e.lookup("SetTrustLineFlagsResult"),
              liquidityPoolDepositResult: e.lookup(
                "LiquidityPoolDepositResult",
              ),
              liquidityPoolWithdrawResult: e.lookup(
                "LiquidityPoolWithdrawResult",
              ),
            },
          }),
          e.union("OperationResult", {
            switchOn: e.lookup("OperationResultCode"),
            switchName: "code",
            switches: [
              ["opInner", "tr"],
              ["opBadAuth", e.void()],
              ["opNoAccount", e.void()],
              ["opNotSupported", e.void()],
              ["opTooManySubentries", e.void()],
              ["opExceededWorkLimit", e.void()],
              ["opTooManySponsoring", e.void()],
            ],
            arms: { tr: e.lookup("OperationResultTr") },
          }),
          e.enum("TransactionResultCode", {
            txFeeBumpInnerSuccess: 1,
            txSuccess: 0,
            txFailed: -1,
            txTooEarly: -2,
            txTooLate: -3,
            txMissingOperation: -4,
            txBadSeq: -5,
            txBadAuth: -6,
            txInsufficientBalance: -7,
            txNoAccount: -8,
            txInsufficientFee: -9,
            txBadAuthExtra: -10,
            txInternalError: -11,
            txNotSupported: -12,
            txFeeBumpInnerFailed: -13,
            txBadSponsorship: -14,
            txBadMinSeqAgeOrGap: -15,
            txMalformed: -16,
          }),
          e.union("InnerTransactionResultResult", {
            switchOn: e.lookup("TransactionResultCode"),
            switchName: "code",
            switches: [
              ["txSuccess", "results"],
              ["txFailed", "results"],
              ["txTooEarly", e.void()],
              ["txTooLate", e.void()],
              ["txMissingOperation", e.void()],
              ["txBadSeq", e.void()],
              ["txBadAuth", e.void()],
              ["txInsufficientBalance", e.void()],
              ["txNoAccount", e.void()],
              ["txInsufficientFee", e.void()],
              ["txBadAuthExtra", e.void()],
              ["txInternalError", e.void()],
              ["txNotSupported", e.void()],
              ["txBadSponsorship", e.void()],
              ["txBadMinSeqAgeOrGap", e.void()],
              ["txMalformed", e.void()],
            ],
            arms: {
              results: e.varArray(e.lookup("OperationResult"), 2147483647),
            },
          }),
          e.union("InnerTransactionResultExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("InnerTransactionResult", [
            ["feeCharged", e.lookup("Int64")],
            ["result", e.lookup("InnerTransactionResultResult")],
            ["ext", e.lookup("InnerTransactionResultExt")],
          ]),
          e.struct("InnerTransactionResultPair", [
            ["transactionHash", e.lookup("Hash")],
            ["result", e.lookup("InnerTransactionResult")],
          ]),
          e.union("TransactionResultResult", {
            switchOn: e.lookup("TransactionResultCode"),
            switchName: "code",
            switches: [
              ["txFeeBumpInnerSuccess", "innerResultPair"],
              ["txFeeBumpInnerFailed", "innerResultPair"],
              ["txSuccess", "results"],
              ["txFailed", "results"],
              ["txTooEarly", e.void()],
              ["txTooLate", e.void()],
              ["txMissingOperation", e.void()],
              ["txBadSeq", e.void()],
              ["txBadAuth", e.void()],
              ["txInsufficientBalance", e.void()],
              ["txNoAccount", e.void()],
              ["txInsufficientFee", e.void()],
              ["txBadAuthExtra", e.void()],
              ["txInternalError", e.void()],
              ["txNotSupported", e.void()],
              ["txBadSponsorship", e.void()],
              ["txBadMinSeqAgeOrGap", e.void()],
              ["txMalformed", e.void()],
            ],
            arms: {
              innerResultPair: e.lookup("InnerTransactionResultPair"),
              results: e.varArray(e.lookup("OperationResult"), 2147483647),
            },
          }),
          e.union("TransactionResultExt", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.struct("TransactionResult", [
            ["feeCharged", e.lookup("Int64")],
            ["result", e.lookup("TransactionResultResult")],
            ["ext", e.lookup("TransactionResultExt")],
          ]),
          e.typedef("Hash", e.opaque(32)),
          e.typedef("Uint256", e.opaque(32)),
          e.typedef("Uint32", e.uint()),
          e.typedef("Int32", e.int()),
          e.typedef("Uint64", e.uhyper()),
          e.typedef("Int64", e.hyper()),
          e.union("ExtensionPoint", {
            switchOn: e.int(),
            switchName: "v",
            switches: [[0, e.void()]],
            arms: {},
          }),
          e.enum("CryptoKeyType", {
            keyTypeEd25519: 0,
            keyTypePreAuthTx: 1,
            keyTypeHashX: 2,
            keyTypeEd25519SignedPayload: 3,
            keyTypeMuxedEd25519: 256,
          }),
          e.enum("PublicKeyType", { publicKeyTypeEd25519: 0 }),
          e.enum("SignerKeyType", {
            signerKeyTypeEd25519: 0,
            signerKeyTypePreAuthTx: 1,
            signerKeyTypeHashX: 2,
            signerKeyTypeEd25519SignedPayload: 3,
          }),
          e.union("PublicKey", {
            switchOn: e.lookup("PublicKeyType"),
            switchName: "type",
            switches: [["publicKeyTypeEd25519", "ed25519"]],
            arms: { ed25519: e.lookup("Uint256") },
          }),
          e.struct("SignerKeyEd25519SignedPayload", [
            ["ed25519", e.lookup("Uint256")],
            ["payload", e.varOpaque(64)],
          ]),
          e.union("SignerKey", {
            switchOn: e.lookup("SignerKeyType"),
            switchName: "type",
            switches: [
              ["signerKeyTypeEd25519", "ed25519"],
              ["signerKeyTypePreAuthTx", "preAuthTx"],
              ["signerKeyTypeHashX", "hashX"],
              ["signerKeyTypeEd25519SignedPayload", "ed25519SignedPayload"],
            ],
            arms: {
              ed25519: e.lookup("Uint256"),
              preAuthTx: e.lookup("Uint256"),
              hashX: e.lookup("Uint256"),
              ed25519SignedPayload: e.lookup("SignerKeyEd25519SignedPayload"),
            },
          }),
          e.typedef("Signature", e.varOpaque(64)),
          e.typedef("SignatureHint", e.opaque(4)),
          e.typedef("NodeId", e.lookup("PublicKey")),
          e.struct("Curve25519Secret", [["key", e.opaque(32)]]),
          e.struct("Curve25519Public", [["key", e.opaque(32)]]),
          e.struct("HmacSha256Key", [["key", e.opaque(32)]]),
          e.struct("HmacSha256Mac", [["mac", e.opaque(32)]]));
      });
      t.default = i;
    },
    7542: function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (e.length !== t.length) return !1;
        if (0 === e.length) return !0;
        for (var n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
        return !0;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifyChecksum = o));
    },
    7543: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function () {
        function e(e, t) {
          var n = [],
            o = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var i, u = e[Symbol.iterator]();
              !(o = (i = u.next()).done);
              o = !0
            )
              if ((n.push(i.value), t && n.length === t)) break;
          } catch (s) {
            ((r = !0), (a = s));
          } finally {
            try {
              !o && u["return"] && u["return"]();
            } finally {
              if (r) throw a;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance",
          );
        };
      })();
      t.best_r = s;
      var r = n(3549),
        a = i(r);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = 2147483647;
      function s(e) {
        var t = new a.default(e),
          n = void 0,
          r = void 0,
          i = [
            [new a.default(0), new a.default(1)],
            [new a.default(1), new a.default(0)],
          ],
          s = 2;
        while (1) {
          if (t.gt(u)) break;
          ((n = t.floor()), (r = t.sub(n)));
          var l = n.mul(i[s - 1][0]).add(i[s - 2][0]),
            c = n.mul(i[s - 1][1]).add(i[s - 2][1]);
          if (l.gt(u) || c.gt(u)) break;
          if ((i.push([l, c]), r.eq(0))) break;
          ((t = new a.default(1).div(r)), (s += 1));
        }
        var d = o(i[i.length - 1], 2),
          p = d[0],
          f = d[1];
        if (p.isZero() || f.isZero())
          throw new Error("Couldn't find approximation");
        return [p.toNumber(), f.toNumber()];
      }
    },
    7544: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(7545);
      Object.defineProperty(t, "manageSellOffer", {
        enumerable: !0,
        get: function () {
          return o.manageSellOffer;
        },
      });
      var r = n(7546);
      Object.defineProperty(t, "createPassiveSellOffer", {
        enumerable: !0,
        get: function () {
          return r.createPassiveSellOffer;
        },
      });
      var a = n(7547);
      Object.defineProperty(t, "accountMerge", {
        enumerable: !0,
        get: function () {
          return a.accountMerge;
        },
      });
      var i = n(7548);
      Object.defineProperty(t, "allowTrust", {
        enumerable: !0,
        get: function () {
          return i.allowTrust;
        },
      });
      var u = n(7549);
      Object.defineProperty(t, "bumpSequence", {
        enumerable: !0,
        get: function () {
          return u.bumpSequence;
        },
      });
      var s = n(7550);
      Object.defineProperty(t, "changeTrust", {
        enumerable: !0,
        get: function () {
          return s.changeTrust;
        },
      });
      var l = n(7551);
      Object.defineProperty(t, "createAccount", {
        enumerable: !0,
        get: function () {
          return l.createAccount;
        },
      });
      var c = n(7552);
      Object.defineProperty(t, "createClaimableBalance", {
        enumerable: !0,
        get: function () {
          return c.createClaimableBalance;
        },
      });
      var d = n(5990);
      Object.defineProperty(t, "claimClaimableBalance", {
        enumerable: !0,
        get: function () {
          return d.claimClaimableBalance;
        },
      });
      var p = n(7553);
      Object.defineProperty(t, "clawbackClaimableBalance", {
        enumerable: !0,
        get: function () {
          return p.clawbackClaimableBalance;
        },
      });
      var f = n(7554);
      Object.defineProperty(t, "inflation", {
        enumerable: !0,
        get: function () {
          return f.inflation;
        },
      });
      var m = n(7555);
      Object.defineProperty(t, "manageData", {
        enumerable: !0,
        get: function () {
          return m.manageData;
        },
      });
      var y = n(7556);
      Object.defineProperty(t, "manageBuyOffer", {
        enumerable: !0,
        get: function () {
          return y.manageBuyOffer;
        },
      });
      var h = n(7557);
      Object.defineProperty(t, "pathPaymentStrictReceive", {
        enumerable: !0,
        get: function () {
          return h.pathPaymentStrictReceive;
        },
      });
      var v = n(7558);
      Object.defineProperty(t, "pathPaymentStrictSend", {
        enumerable: !0,
        get: function () {
          return v.pathPaymentStrictSend;
        },
      });
      var g = n(7559);
      Object.defineProperty(t, "payment", {
        enumerable: !0,
        get: function () {
          return g.payment;
        },
      });
      var b = n(7560);
      Object.defineProperty(t, "setOptions", {
        enumerable: !0,
        get: function () {
          return b.setOptions;
        },
      });
      var w = n(7561);
      Object.defineProperty(t, "beginSponsoringFutureReserves", {
        enumerable: !0,
        get: function () {
          return w.beginSponsoringFutureReserves;
        },
      });
      var S = n(7562);
      Object.defineProperty(t, "endSponsoringFutureReserves", {
        enumerable: !0,
        get: function () {
          return S.endSponsoringFutureReserves;
        },
      });
      var k = n(7563);
      (Object.defineProperty(t, "revokeAccountSponsorship", {
        enumerable: !0,
        get: function () {
          return k.revokeAccountSponsorship;
        },
      }),
        Object.defineProperty(t, "revokeTrustlineSponsorship", {
          enumerable: !0,
          get: function () {
            return k.revokeTrustlineSponsorship;
          },
        }),
        Object.defineProperty(t, "revokeOfferSponsorship", {
          enumerable: !0,
          get: function () {
            return k.revokeOfferSponsorship;
          },
        }),
        Object.defineProperty(t, "revokeDataSponsorship", {
          enumerable: !0,
          get: function () {
            return k.revokeDataSponsorship;
          },
        }),
        Object.defineProperty(t, "revokeClaimableBalanceSponsorship", {
          enumerable: !0,
          get: function () {
            return k.revokeClaimableBalanceSponsorship;
          },
        }),
        Object.defineProperty(t, "revokeLiquidityPoolSponsorship", {
          enumerable: !0,
          get: function () {
            return k.revokeLiquidityPoolSponsorship;
          },
        }),
        Object.defineProperty(t, "revokeSignerSponsorship", {
          enumerable: !0,
          get: function () {
            return k.revokeSignerSponsorship;
          },
        }));
      var T = n(7564);
      Object.defineProperty(t, "clawback", {
        enumerable: !0,
        get: function () {
          return T.clawback;
        },
      });
      var P = n(7565);
      Object.defineProperty(t, "setTrustLineFlags", {
        enumerable: !0,
        get: function () {
          return P.setTrustLineFlags;
        },
      });
      var A = n(7566);
      Object.defineProperty(t, "liquidityPoolDeposit", {
        enumerable: !0,
        get: function () {
          return A.liquidityPoolDeposit;
        },
      });
      var O = n(7567);
      Object.defineProperty(t, "liquidityPoolWithdraw", {
        enumerable: !0,
        get: function () {
          return O.liquidityPoolWithdraw;
        },
      });
    },
    7545: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.manageSellOffer = l));
      var o = n(2931),
        r = s(o),
        a = n(3054),
        i = n(2825),
        u = s(i);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        var t = {};
        if (
          ((t.selling = e.selling.toXDRObject()),
          (t.buying = e.buying.toXDRObject()),
          !this.isValidAmount(e.amount, !0))
        )
          throw new TypeError(this.constructAmountRequirementsError("amount"));
        if (((t.amount = this._toXDRAmount(e.amount)), (0, r.default)(e.price)))
          throw new TypeError("price argument is required");
        ((t.price = this._toXDRPrice(e.price)),
          (0, r.default)(e.offerId)
            ? (e.offerId = "0")
            : (e.offerId = e.offerId.toString()),
          (t.offerId = a.Hyper.fromString(e.offerId)));
        var n = new u.default.ManageSellOfferOp(t),
          o = {};
        return (
          (o.body = u.default.OperationBody.manageSellOffer(n)),
          this.setSourceAccount(o, e),
          new u.default.Operation(o)
        );
      }
    },
    7546: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createPassiveSellOffer = s));
      var o = n(2931),
        r = u(o),
        a = n(2825),
        i = u(a);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        var t = {};
        if (
          ((t.selling = e.selling.toXDRObject()),
          (t.buying = e.buying.toXDRObject()),
          !this.isValidAmount(e.amount))
        )
          throw new TypeError(this.constructAmountRequirementsError("amount"));
        if (((t.amount = this._toXDRAmount(e.amount)), (0, r.default)(e.price)))
          throw new TypeError("price argument is required");
        t.price = this._toXDRPrice(e.price);
        var n = new i.default.CreatePassiveSellOfferOp(t),
          o = {};
        return (
          (o.body = i.default.OperationBody.createPassiveSellOffer(n)),
          this.setSourceAccount(o, e),
          new i.default.Operation(o)
        );
      }
    },
    7547: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.accountMerge = u));
      var o = n(2825),
        r = i(o),
        a = n(3287);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        var t = {};
        try {
          t.body = r.default.OperationBody.accountMerge(
            (0, a.decodeAddressToMuxedAccount)(e.destination),
          );
        } catch (n) {
          throw new Error("destination is invalid");
        }
        return (this.setSourceAccount(t, e), new r.default.Operation(t));
      }
    },
    7548: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.allowTrust = c));
      var o = n(4646),
        r = l(o),
        a = n(2825),
        i = l(a),
        u = n(3370),
        s = n(3091);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        if (!s.StrKey.isValidEd25519PublicKey(e.trustor))
          throw new Error("trustor is invalid");
        var t = {};
        if (
          ((t.trustor = u.Keypair.fromPublicKey(e.trustor).xdrAccountId()),
          e.assetCode.length <= 4)
        ) {
          var n = (0, r.default)(e.assetCode, 4, "\0");
          t.asset = i.default.AssetCode.assetTypeCreditAlphanum4(n);
        } else {
          if (!(e.assetCode.length <= 12))
            throw new Error("Asset code must be 12 characters at max.");
          var o = (0, r.default)(e.assetCode, 12, "\0");
          t.asset = i.default.AssetCode.assetTypeCreditAlphanum12(o);
        }
        "boolean" === typeof e.authorize
          ? e.authorize
            ? (t.authorize = i.default.TrustLineFlags.authorizedFlag().value)
            : (t.authorize = 0)
          : (t.authorize = e.authorize);
        var a = new i.default.AllowTrustOp(t),
          l = {};
        return (
          (l.body = i.default.OperationBody.allowTrust(a)),
          this.setSourceAccount(l, e),
          new i.default.Operation(l)
        );
      }
    },
    7549: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bumpSequence = d));
      var o = n(3054),
        r = n(3549),
        a = c(r),
        i = n(2964),
        u = c(i),
        s = n(2825),
        l = c(s);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e) {
        var t = {};
        if (!(0, u.default)(e.bumpTo))
          throw new Error("bumpTo must be a string");
        try {
          new a.default(e.bumpTo);
        } catch (i) {
          throw new Error("bumpTo must be a stringified number");
        }
        t.bumpTo = o.Hyper.fromString(e.bumpTo);
        var n = new l.default.BumpSequenceOp(t),
          r = {};
        return (
          (r.body = l.default.OperationBody.bumpSequence(n)),
          this.setSourceAccount(r, e),
          new l.default.Operation(r)
        );
      }
    },
    7550: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.changeTrust = m));
      var o = n(2931),
        r = p(o),
        a = n(3054),
        i = n(3549),
        u = p(i),
        s = n(2825),
        l = p(s),
        c = n(3649),
        d = n(4967);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = "9223372036854775807";
      function m(e) {
        var t = {};
        if (e.asset instanceof c.Asset)
          t.line = e.asset.toChangeTrustXDRObject();
        else {
          if (!(e.asset instanceof d.LiquidityPoolAsset))
            throw new TypeError("asset must be Asset or LiquidityPoolAsset");
          t.line = e.asset.toXDRObject();
        }
        if (!(0, r.default)(e.limit) && !this.isValidAmount(e.limit, !0))
          throw new TypeError(this.constructAmountRequirementsError("limit"));
        (e.limit
          ? (t.limit = this._toXDRAmount(e.limit))
          : (t.limit = a.Hyper.fromString(new u.default(f).toString())),
          e.source && (t.source = e.source.masterKeypair));
        var n = new l.default.ChangeTrustOp(t),
          o = {};
        return (
          (o.body = l.default.OperationBody.changeTrust(n)),
          this.setSourceAccount(o, e),
          new l.default.Operation(o)
        );
      }
    },
    7551: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAccount = s));
      var o = n(2825),
        r = u(o),
        a = n(3370),
        i = n(3091);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        if (!i.StrKey.isValidEd25519PublicKey(e.destination))
          throw new Error("destination is invalid");
        if (!this.isValidAmount(e.startingBalance, !0))
          throw new TypeError(
            "startingBalance must be of type String, represent a non-negative number and have at most 7 digits after the decimal",
          );
        var t = {};
        ((t.destination = a.Keypair.fromPublicKey(
          e.destination,
        ).xdrAccountId()),
          (t.startingBalance = this._toXDRAmount(e.startingBalance)));
        var n = new r.default.CreateAccountOp(t),
          o = {};
        return (
          (o.body = r.default.OperationBody.createAccount(n)),
          this.setSourceAccount(o, e),
          new r.default.Operation(o)
        );
      }
    },
    7552: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createClaimableBalance = u));
      var o = n(2825),
        r = i(o),
        a = n(3649);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        if (!(e.asset instanceof a.Asset))
          throw new Error(
            "must provide an asset for create claimable balance operation",
          );
        if (!this.isValidAmount(e.amount))
          throw new TypeError(this.constructAmountRequirementsError("amount"));
        if (!Array.isArray(e.claimants) || 0 === e.claimants.length)
          throw new Error("must provide at least one claimant");
        var t = {};
        ((t.asset = e.asset.toXDRObject()),
          (t.amount = this._toXDRAmount(e.amount)),
          (t.claimants = e.claimants.map(function (e) {
            return e.toXDRObject();
          })));
        var n = new r.default.CreateClaimableBalanceOp(t),
          o = {};
        return (
          (o.body = r.default.OperationBody.createClaimableBalance(n)),
          this.setSourceAccount(o, e),
          new r.default.Operation(o)
        );
      }
    },
    7553: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.clawbackClaimableBalance = u));
      var o = n(2825),
        r = i(o),
        a = n(5990);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, a.validateClaimableBalanceId)(e.balanceId);
        var t = {
            balanceId: r.default.ClaimableBalanceId.fromXDR(e.balanceId, "hex"),
          },
          n = {
            body: r.default.OperationBody.clawbackClaimableBalance(
              new r.default.ClawbackClaimableBalanceOp(t),
            ),
          };
        return (this.setSourceAccount(n, e), new r.default.Operation(n));
      }
    },
    7554: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.inflation = i));
      var o = n(2825),
        r = a(o);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = {};
        return (
          (t.body = r.default.OperationBody.inflation()),
          this.setSourceAccount(t, e),
          new r.default.Operation(t)
        );
      }
    },
    7555: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.manageData = s));
        var o = n(2964),
          r = u(o),
          a = n(2825),
          i = u(a);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(t) {
          var n = {};
          if (!((0, r.default)(t.name) && t.name.length <= 64))
            throw new Error("name must be a string, up to 64 characters");
          if (
            ((n.dataName = t.name),
            !(0, r.default)(t.value) &&
              !e.isBuffer(t.value) &&
              null !== t.value)
          )
            throw new Error("value must be a string, Buffer or null");
          if (
            ((0, r.default)(t.value)
              ? (n.dataValue = e.from(t.value))
              : (n.dataValue = t.value),
            null !== n.dataValue && n.dataValue.length > 64)
          )
            throw new Error("value cannot be longer that 64 bytes");
          var o = new i.default.ManageDataOp(n),
            a = {};
          return (
            (a.body = i.default.OperationBody.manageData(o)),
            this.setSourceAccount(a, t),
            new i.default.Operation(a)
          );
        }
      }).call(this, n(2).Buffer);
    },
    7556: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.manageBuyOffer = l));
      var o = n(2931),
        r = s(o),
        a = n(3054),
        i = n(2825),
        u = s(i);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        var t = {};
        if (
          ((t.selling = e.selling.toXDRObject()),
          (t.buying = e.buying.toXDRObject()),
          !this.isValidAmount(e.buyAmount, !0))
        )
          throw new TypeError(
            this.constructAmountRequirementsError("buyAmount"),
          );
        if (
          ((t.buyAmount = this._toXDRAmount(e.buyAmount)),
          (0, r.default)(e.price))
        )
          throw new TypeError("price argument is required");
        ((t.price = this._toXDRPrice(e.price)),
          (0, r.default)(e.offerId)
            ? (e.offerId = "0")
            : (e.offerId = e.offerId.toString()),
          (t.offerId = a.Hyper.fromString(e.offerId)));
        var n = new u.default.ManageBuyOfferOp(t),
          o = {};
        return (
          (o.body = u.default.OperationBody.manageBuyOffer(n)),
          this.setSourceAccount(o, e),
          new u.default.Operation(o)
        );
      }
    },
    7557: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pathPaymentStrictReceive = u));
      var o = n(2825),
        r = i(o),
        a = n(3287);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        switch (!0) {
          case !e.sendAsset:
            throw new Error("Must specify a send asset");
          case !this.isValidAmount(e.sendMax):
            throw new TypeError(
              this.constructAmountRequirementsError("sendMax"),
            );
          case !e.destAsset:
            throw new Error("Must provide a destAsset for a payment operation");
          case !this.isValidAmount(e.destAmount):
            throw new TypeError(
              this.constructAmountRequirementsError("destAmount"),
            );
          default:
            break;
        }
        var t = {};
        ((t.sendAsset = e.sendAsset.toXDRObject()),
          (t.sendMax = this._toXDRAmount(e.sendMax)));
        try {
          t.destination = (0, a.decodeAddressToMuxedAccount)(e.destination);
        } catch (u) {
          throw new Error("destination is invalid");
        }
        ((t.destAsset = e.destAsset.toXDRObject()),
          (t.destAmount = this._toXDRAmount(e.destAmount)));
        var n = e.path ? e.path : [];
        t.path = n.map(function (e) {
          return e.toXDRObject();
        });
        var o = new r.default.PathPaymentStrictReceiveOp(t),
          i = {};
        return (
          (i.body = r.default.OperationBody.pathPaymentStrictReceive(o)),
          this.setSourceAccount(i, e),
          new r.default.Operation(i)
        );
      }
    },
    7558: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pathPaymentStrictSend = u));
      var o = n(2825),
        r = i(o),
        a = n(3287);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        switch (!0) {
          case !e.sendAsset:
            throw new Error("Must specify a send asset");
          case !this.isValidAmount(e.sendAmount):
            throw new TypeError(
              this.constructAmountRequirementsError("sendAmount"),
            );
          case !e.destAsset:
            throw new Error("Must provide a destAsset for a payment operation");
          case !this.isValidAmount(e.destMin):
            throw new TypeError(
              this.constructAmountRequirementsError("destMin"),
            );
          default:
            break;
        }
        var t = {};
        ((t.sendAsset = e.sendAsset.toXDRObject()),
          (t.sendAmount = this._toXDRAmount(e.sendAmount)));
        try {
          t.destination = (0, a.decodeAddressToMuxedAccount)(e.destination);
        } catch (u) {
          throw new Error("destination is invalid");
        }
        ((t.destAsset = e.destAsset.toXDRObject()),
          (t.destMin = this._toXDRAmount(e.destMin)));
        var n = e.path ? e.path : [];
        t.path = n.map(function (e) {
          return e.toXDRObject();
        });
        var o = new r.default.PathPaymentStrictSendOp(t),
          i = {};
        return (
          (i.body = r.default.OperationBody.pathPaymentStrictSend(o)),
          this.setSourceAccount(i, e),
          new r.default.Operation(i)
        );
      }
    },
    7559: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.payment = u));
      var o = n(2825),
        r = i(o),
        a = n(3287);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        if (!e.asset)
          throw new Error("Must provide an asset for a payment operation");
        if (!this.isValidAmount(e.amount))
          throw new TypeError(this.constructAmountRequirementsError("amount"));
        var t = {};
        try {
          t.destination = (0, a.decodeAddressToMuxedAccount)(e.destination);
        } catch (i) {
          throw new Error("destination is invalid");
        }
        ((t.asset = e.asset.toXDRObject()),
          (t.amount = this._toXDRAmount(e.amount)));
        var n = new r.default.PaymentOp(t),
          o = {};
        return (
          (o.body = r.default.OperationBody.payment(n)),
          this.setSourceAccount(o, e),
          new r.default.Operation(o)
        );
      }
    },
    7560: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setOptions = f));
        var o = n(2931),
          r = d(o),
          a = n(2964),
          i = d(a),
          u = n(2825),
          s = d(u),
          l = n(3370),
          c = n(3091);
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e, t) {
          if (e >= 0 && e <= 255) return !0;
          throw new Error(t + " value must be between 0 and 255");
        }
        function f(t) {
          var n = {};
          if (t.inflationDest) {
            if (!c.StrKey.isValidEd25519PublicKey(t.inflationDest))
              throw new Error("inflationDest is invalid");
            n.inflationDest = l.Keypair.fromPublicKey(
              t.inflationDest,
            ).xdrAccountId();
          }
          if (
            ((n.clearFlags = this._checkUnsignedIntValue(
              "clearFlags",
              t.clearFlags,
            )),
            (n.setFlags = this._checkUnsignedIntValue("setFlags", t.setFlags)),
            (n.masterWeight = this._checkUnsignedIntValue(
              "masterWeight",
              t.masterWeight,
              p,
            )),
            (n.lowThreshold = this._checkUnsignedIntValue(
              "lowThreshold",
              t.lowThreshold,
              p,
            )),
            (n.medThreshold = this._checkUnsignedIntValue(
              "medThreshold",
              t.medThreshold,
              p,
            )),
            (n.highThreshold = this._checkUnsignedIntValue(
              "highThreshold",
              t.highThreshold,
              p,
            )),
            !(0, r.default)(t.homeDomain) && !(0, i.default)(t.homeDomain))
          )
            throw new TypeError("homeDomain argument must be of type String");
          if (((n.homeDomain = t.homeDomain), t.signer)) {
            var o = this._checkUnsignedIntValue(
                "signer.weight",
                t.signer.weight,
                p,
              ),
              a = void 0,
              u = 0;
            if (t.signer.ed25519PublicKey) {
              if (!c.StrKey.isValidEd25519PublicKey(t.signer.ed25519PublicKey))
                throw new Error("signer.ed25519PublicKey is invalid.");
              var d = c.StrKey.decodeEd25519PublicKey(
                t.signer.ed25519PublicKey,
              );
              ((a = new s.default.SignerKey.signerKeyTypeEd25519(d)), (u += 1));
            }
            if (t.signer.preAuthTx) {
              if (
                ((0, i.default)(t.signer.preAuthTx) &&
                  (t.signer.preAuthTx = e.from(t.signer.preAuthTx, "hex")),
                !e.isBuffer(t.signer.preAuthTx) ||
                  32 !== t.signer.preAuthTx.length)
              )
                throw new Error("signer.preAuthTx must be 32 bytes Buffer.");
              ((a = new s.default.SignerKey.signerKeyTypePreAuthTx(
                t.signer.preAuthTx,
              )),
                (u += 1));
            }
            if (t.signer.sha256Hash) {
              if (
                ((0, i.default)(t.signer.sha256Hash) &&
                  (t.signer.sha256Hash = e.from(t.signer.sha256Hash, "hex")),
                !e.isBuffer(t.signer.sha256Hash) ||
                  32 !== t.signer.sha256Hash.length)
              )
                throw new Error("signer.sha256Hash must be 32 bytes Buffer.");
              ((a = new s.default.SignerKey.signerKeyTypeHashX(
                t.signer.sha256Hash,
              )),
                (u += 1));
            }
            if (t.signer.ed25519SignedPayload) {
              if (!c.StrKey.isValidSignedPayload(t.signer.ed25519SignedPayload))
                throw new Error("signer.ed25519SignedPayload is invalid.");
              var f = c.StrKey.decodeSignedPayload(
                  t.signer.ed25519SignedPayload,
                ),
                m = s.default.SignerKeyEd25519SignedPayload.fromXDR(f);
              ((a = s.default.SignerKey.signerKeyTypeEd25519SignedPayload(m)),
                (u += 1));
            }
            if (1 !== u)
              throw new Error(
                "Signer object must contain exactly one of signer.ed25519PublicKey, signer.sha256Hash, signer.preAuthTx.",
              );
            n.signer = new s.default.Signer({ key: a, weight: o });
          }
          var y = new s.default.SetOptionsOp(n),
            h = {};
          return (
            (h.body = s.default.OperationBody.setOptions(y)),
            this.setSourceAccount(h, t),
            new s.default.Operation(h)
          );
        }
      }).call(this, n(2).Buffer);
    },
    7561: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.beginSponsoringFutureReserves = s));
      var o = n(2825),
        r = u(o),
        a = n(3091),
        i = n(3370);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!a.StrKey.isValidEd25519PublicKey(e.sponsoredId))
          throw new Error("sponsoredId is invalid");
        var t = new r.default.BeginSponsoringFutureReservesOp({
            sponsoredId: i.Keypair.fromPublicKey(e.sponsoredId).xdrAccountId(),
          }),
          n = {};
        return (
          (n.body = r.default.OperationBody.beginSponsoringFutureReserves(t)),
          this.setSourceAccount(n, e),
          new r.default.Operation(n)
        );
      }
    },
    7562: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.endSponsoringFutureReserves = i));
      var o = n(2825),
        r = a(o);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = {};
        return (
          (t.body = r.default.OperationBody.endSponsoringFutureReserves()),
          this.setSourceAccount(t, e),
          new r.default.Operation(t)
        );
      }
    },
    7563: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.revokeAccountSponsorship = p),
          (t.revokeTrustlineSponsorship = f),
          (t.revokeOfferSponsorship = m),
          (t.revokeDataSponsorship = y),
          (t.revokeClaimableBalanceSponsorship = h),
          (t.revokeLiquidityPoolSponsorship = v),
          (t.revokeSignerSponsorship = g));
        var o = n(2964),
          r = d(o),
          a = n(2825),
          i = d(a),
          u = n(3091),
          s = n(3370),
          l = n(3649),
          c = n(4968);
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u.StrKey.isValidEd25519PublicKey(e.account))
            throw new Error("account is invalid");
          var t = i.default.LedgerKey.account(
              new i.default.LedgerKeyAccount({
                accountId: s.Keypair.fromPublicKey(e.account).xdrAccountId(),
              }),
            ),
            n = i.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
            o = {};
          return (
            (o.body = i.default.OperationBody.revokeSponsorship(n)),
            this.setSourceAccount(o, e),
            new i.default.Operation(o)
          );
        }
        function f() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u.StrKey.isValidEd25519PublicKey(e.account))
            throw new Error("account is invalid");
          var t = void 0;
          if (e.asset instanceof l.Asset) t = e.asset.toTrustLineXDRObject();
          else {
            if (!(e.asset instanceof c.LiquidityPoolId))
              throw new TypeError("asset must be an Asset or LiquidityPoolId");
            t = e.asset.toXDRObject();
          }
          var n = i.default.LedgerKey.trustline(
              new i.default.LedgerKeyTrustLine({
                accountId: s.Keypair.fromPublicKey(e.account).xdrAccountId(),
                asset: t,
              }),
            ),
            o = i.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(n),
            r = {};
          return (
            (r.body = i.default.OperationBody.revokeSponsorship(o)),
            this.setSourceAccount(r, e),
            new i.default.Operation(r)
          );
        }
        function m() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u.StrKey.isValidEd25519PublicKey(e.seller))
            throw new Error("seller is invalid");
          if (!(0, r.default)(e.offerId)) throw new Error("offerId is invalid");
          var t = i.default.LedgerKey.offer(
              new i.default.LedgerKeyOffer({
                sellerId: s.Keypair.fromPublicKey(e.seller).xdrAccountId(),
                offerId: i.default.Int64.fromString(e.offerId),
              }),
            ),
            n = i.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
            o = {};
          return (
            (o.body = i.default.OperationBody.revokeSponsorship(n)),
            this.setSourceAccount(o, e),
            new i.default.Operation(o)
          );
        }
        function y() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u.StrKey.isValidEd25519PublicKey(e.account))
            throw new Error("account is invalid");
          if (!(0, r.default)(e.name) || e.name.length > 64)
            throw new Error("name must be a string, up to 64 characters");
          var t = i.default.LedgerKey.data(
              new i.default.LedgerKeyData({
                accountId: s.Keypair.fromPublicKey(e.account).xdrAccountId(),
                dataName: e.name,
              }),
            ),
            n = i.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
            o = {};
          return (
            (o.body = i.default.OperationBody.revokeSponsorship(n)),
            this.setSourceAccount(o, e),
            new i.default.Operation(o)
          );
        }
        function h() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!(0, r.default)(e.balanceId))
            throw new Error("balanceId is invalid");
          var t = i.default.LedgerKey.claimableBalance(
              new i.default.LedgerKeyClaimableBalance({
                balanceId: i.default.ClaimableBalanceId.fromXDR(
                  e.balanceId,
                  "hex",
                ),
              }),
            ),
            n = i.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
            o = {};
          return (
            (o.body = i.default.OperationBody.revokeSponsorship(n)),
            this.setSourceAccount(o, e),
            new i.default.Operation(o)
          );
        }
        function v() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!(0, r.default)(e.liquidityPoolId))
            throw new Error("liquidityPoolId is invalid");
          var t = i.default.LedgerKey.liquidityPool(
              new i.default.LedgerKeyLiquidityPool({
                liquidityPoolId: i.default.PoolId.fromXDR(
                  e.liquidityPoolId,
                  "hex",
                ),
              }),
            ),
            n = i.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
            o = { body: i.default.OperationBody.revokeSponsorship(n) };
          return (this.setSourceAccount(o, e), new i.default.Operation(o));
        }
        function g() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u.StrKey.isValidEd25519PublicKey(t.account))
            throw new Error("account is invalid");
          var n = void 0;
          if (t.signer.ed25519PublicKey) {
            if (!u.StrKey.isValidEd25519PublicKey(t.signer.ed25519PublicKey))
              throw new Error("signer.ed25519PublicKey is invalid.");
            var o = u.StrKey.decodeEd25519PublicKey(t.signer.ed25519PublicKey);
            n = new i.default.SignerKey.signerKeyTypeEd25519(o);
          } else if (t.signer.preAuthTx) {
            var a = void 0;
            if (
              ((a = (0, r.default)(t.signer.preAuthTx)
                ? e.from(t.signer.preAuthTx, "hex")
                : t.signer.preAuthTx),
              !e.isBuffer(a) || 32 !== a.length)
            )
              throw new Error("signer.preAuthTx must be 32 bytes Buffer.");
            n = new i.default.SignerKey.signerKeyTypePreAuthTx(a);
          } else {
            if (!t.signer.sha256Hash) throw new Error("signer is invalid");
            var l = void 0;
            if (
              ((l = (0, r.default)(t.signer.sha256Hash)
                ? e.from(t.signer.sha256Hash, "hex")
                : t.signer.sha256Hash),
              !e.isBuffer(l) || 32 !== l.length)
            )
              throw new Error("signer.sha256Hash must be 32 bytes Buffer.");
            n = new i.default.SignerKey.signerKeyTypeHashX(l);
          }
          var c = new i.default.RevokeSponsorshipOpSigner({
              accountId: s.Keypair.fromPublicKey(t.account).xdrAccountId(),
              signerKey: n,
            }),
            d = i.default.RevokeSponsorshipOp.revokeSponsorshipSigner(c),
            p = {};
          return (
            (p.body = i.default.OperationBody.revokeSponsorship(d)),
            this.setSourceAccount(p, t),
            new i.default.Operation(p)
          );
        }
      }).call(this, n(2).Buffer);
    },
    7564: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.clawback = u));
      var o = n(2825),
        r = i(o),
        a = n(3287);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        var t = {};
        if (!this.isValidAmount(e.amount))
          throw new TypeError(this.constructAmountRequirementsError("amount"));
        ((t.amount = this._toXDRAmount(e.amount)),
          (t.asset = e.asset.toXDRObject()));
        try {
          t.from = (0, a.decodeAddressToMuxedAccount)(e.from);
        } catch (o) {
          throw new Error("from address is invalid");
        }
        var n = {
          body: r.default.OperationBody.clawback(new r.default.ClawbackOp(t)),
        };
        return (this.setSourceAccount(n, e), new r.default.Operation(n));
      }
    },
    7565: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      t.setTrustLineFlags = s;
      var r = n(2825),
        a = u(r),
        i = n(3370);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = {};
        if ("object" !== o(e.flags) || 0 === Object.keys(e.flags).length)
          throw new Error(
            "opts.flags must be a map of boolean flags to modify",
          );
        var n = {
            authorized: a.default.TrustLineFlags.authorizedFlag(),
            authorizedToMaintainLiabilities:
              a.default.TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
            clawbackEnabled:
              a.default.TrustLineFlags.trustlineClawbackEnabledFlag(),
          },
          r = 0,
          u = 0;
        (Object.keys(e.flags).forEach(function (t) {
          if (!Object.prototype.hasOwnProperty.call(n, t))
            throw new Error("unsupported flag name specified: " + t);
          var o = e.flags[t],
            a = n[t].value;
          !0 === o ? (u |= a) : !1 === o && (r |= a);
        }),
          (t.trustor = i.Keypair.fromPublicKey(e.trustor).xdrAccountId()),
          (t.asset = e.asset.toXDRObject()),
          (t.clearFlags = r),
          (t.setFlags = u));
        var s = {
          body: a.default.OperationBody.setTrustLineFlags(
            new a.default.SetTrustLineFlagsOp(t),
          ),
        };
        return (this.setSourceAccount(s, e), new a.default.Operation(s));
      }
    },
    7566: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.liquidityPoolDeposit = s));
      var o = n(2931),
        r = u(o),
        a = n(2825),
        i = u(a);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.liquidityPoolId,
          n = e.maxAmountA,
          o = e.maxAmountB,
          a = e.minPrice,
          u = e.maxPrice,
          s = {};
        if (!t) throw new TypeError("liquidityPoolId argument is required");
        if (
          ((s.liquidityPoolId = i.default.PoolId.fromXDR(t, "hex")),
          !this.isValidAmount(n, !0))
        )
          throw new TypeError("maxAmountA argument is required");
        if (((s.maxAmountA = this._toXDRAmount(n)), !this.isValidAmount(o, !0)))
          throw new TypeError("maxAmountB argument is required");
        if (((s.maxAmountB = this._toXDRAmount(o)), (0, r.default)(a)))
          throw new TypeError("minPrice argument is required");
        if (((s.minPrice = this._toXDRPrice(a)), (0, r.default)(u)))
          throw new TypeError("maxPrice argument is required");
        s.maxPrice = this._toXDRPrice(u);
        var l = new i.default.LiquidityPoolDepositOp(s),
          c = { body: i.default.OperationBody.liquidityPoolDeposit(l) };
        return (this.setSourceAccount(c, e), new i.default.Operation(c));
      }
    },
    7567: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.liquidityPoolWithdraw = i));
      var o = n(2825),
        r = a(o);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = {};
        if (!e.liquidityPoolId)
          throw new TypeError("liquidityPoolId argument is required");
        if (
          ((t.liquidityPoolId = r.default.PoolId.fromXDR(
            e.liquidityPoolId,
            "hex",
          )),
          !this.isValidAmount(e.amount))
        )
          throw new TypeError("amount argument is required");
        if (
          ((t.amount = this._toXDRAmount(e.amount)),
          !this.isValidAmount(e.minAmountA, !0))
        )
          throw new TypeError("minAmountA argument is required");
        if (
          ((t.minAmountA = this._toXDRAmount(e.minAmountA)),
          !this.isValidAmount(e.minAmountB, !0))
        )
          throw new TypeError("minAmountB argument is required");
        t.minAmountB = this._toXDRAmount(e.minAmountB);
        var n = new r.default.LiquidityPoolWithdrawOp(t),
          o = { body: r.default.OperationBody.liquidityPoolWithdraw(n) };
        return (this.setSourceAccount(o, e), new r.default.Operation(o));
      }
    },
    7568: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionBuilder = t.TimeoutInfinite = t.BASE_FEE = void 0));
      var o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            ((o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o));
          }
        }
        return function (t, n, o) {
          return (n && e(t.prototype, n), o && e(t, o), t);
        };
      })();
      t.isValidDate = A;
      var r = n(3054),
        a = n(3549),
        i = k(a),
        u = n(3369),
        s = k(u),
        l = n(2931),
        c = k(l),
        d = n(2964),
        p = k(d),
        f = n(2992),
        m = k(f),
        y = n(2825),
        h = k(y),
        v = n(4966),
        g = n(5991),
        b = n(5992),
        w = n(4969),
        S = n(3287);
      function k(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var P = (t.BASE_FEE = "100");
      ((t.TimeoutInfinite = 0),
        (t.TransactionBuilder = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if ((T(this, e), !t))
              throw new Error(
                "must specify source account for the transaction",
              );
            if ((0, c.default)(n.fee))
              throw new Error(
                "must specify fee for the transaction (in stroops)",
              );
            ((this.source = t),
              (this.operations = []),
              (this.baseFee = n.fee),
              (this.timebounds = (0, s.default)(n.timebounds) || null),
              (this.ledgerbounds = (0, s.default)(n.ledgerbounds) || null),
              (this.minAccountSequence = n.minAccountSequence || null),
              (this.minAccountSequenceAge = n.minAccountSequenceAge || null),
              (this.minAccountSequenceLedgerGap =
                n.minAccountSequenceLedgerGap || null),
              (this.extraSigners = (0, s.default)(n.extraSigners) || null),
              (this.memo = n.memo || w.Memo.none()),
              (this.networkPassphrase = n.networkPassphrase || null));
          }
          return (
            o(
              e,
              [
                {
                  key: "addOperation",
                  value: function (e) {
                    return (this.operations.push(e), this);
                  },
                },
                {
                  key: "addMemo",
                  value: function (e) {
                    return ((this.memo = e), this);
                  },
                },
                {
                  key: "setTimeout",
                  value: function (e) {
                    if (null !== this.timebounds && this.timebounds.maxTime > 0)
                      throw new Error(
                        "TimeBounds.max_time has been already set - setting timeout would overwrite it.",
                      );
                    if (e < 0) throw new Error("timeout cannot be negative");
                    if (e > 0) {
                      var t = Math.floor(Date.now() / 1e3) + e;
                      null === this.timebounds
                        ? (this.timebounds = { minTime: 0, maxTime: t })
                        : (this.timebounds = {
                            minTime: this.timebounds.minTime,
                            maxTime: t,
                          });
                    } else this.timebounds = { minTime: 0, maxTime: 0 };
                    return this;
                  },
                },
                {
                  key: "setTimebounds",
                  value: function (e, t) {
                    if (
                      ("number" === typeof e && (e = new Date(1e3 * e)),
                      "number" === typeof t && (t = new Date(1e3 * t)),
                      null !== this.timebounds)
                    )
                      throw new Error(
                        "TimeBounds has been already set - setting timebounds would overwrite it.",
                      );
                    var n = Math.floor(e.valueOf() / 1e3),
                      o = Math.floor(t.valueOf() / 1e3);
                    if (n < 0) throw new Error("min_time cannot be negative");
                    if (o < 0) throw new Error("max_time cannot be negative");
                    if (o > 0 && n > o)
                      throw new Error(
                        "min_time cannot be greater than max_time",
                      );
                    return (
                      (this.timebounds = { minTime: n, maxTime: o }),
                      this
                    );
                  },
                },
                {
                  key: "setLedgerbounds",
                  value: function (e, t) {
                    if (null !== this.ledgerbounds)
                      throw new Error(
                        "LedgerBounds has been already set - setting ledgerbounds would overwrite it.",
                      );
                    if (e < 0) throw new Error("min_ledger cannot be negative");
                    if (t < 0) throw new Error("max_ledger cannot be negative");
                    if (t > 0 && e > t)
                      throw new Error(
                        "min_ledger cannot be greater than max_ledger",
                      );
                    return (
                      (this.ledgerbounds = { minLedger: e, maxLedger: t }),
                      this
                    );
                  },
                },
                {
                  key: "setMinAccountSequence",
                  value: function (e) {
                    if (null !== this.minAccountSequence)
                      throw new Error(
                        "min_account_sequence has been already set - setting min_account_sequence would overwrite it.",
                      );
                    return ((this.minAccountSequence = e), this);
                  },
                },
                {
                  key: "setMinAccountSequenceAge",
                  value: function (e) {
                    if ("number" !== typeof e)
                      throw new Error(
                        "min_account_sequence_age must be a number",
                      );
                    if (null !== this.minAccountSequenceAge)
                      throw new Error(
                        "min_account_sequence_age has been already set - setting min_account_sequence_age would overwrite it.",
                      );
                    if (e < 0)
                      throw new Error(
                        "min_account_sequence_age cannot be negative",
                      );
                    return ((this.minAccountSequenceAge = e), this);
                  },
                },
                {
                  key: "setMinAccountSequenceLedgerGap",
                  value: function (e) {
                    if (null !== this.minAccountSequenceLedgerGap)
                      throw new Error(
                        "min_account_sequence_ledger_gap has been already set - setting min_account_sequence_ledger_gap would overwrite it.",
                      );
                    if (e < 0)
                      throw new Error(
                        "min_account_sequence_ledger_gap cannot be negative",
                      );
                    return ((this.minAccountSequenceLedgerGap = e), this);
                  },
                },
                {
                  key: "setExtraSigners",
                  value: function (e) {
                    if (!(0, m.default)(e))
                      throw new Error(
                        "extra_signers must be an array of strings.",
                      );
                    if (null !== this.extraSigners)
                      throw new Error(
                        "extra_signers has been already set - setting extra_signers would overwrite it.",
                      );
                    if (e.length > 2)
                      throw new Error(
                        "extra_signers cannot be longer than 2 elements.",
                      );
                    return ((this.extraSigners = (0, s.default)(e)), this);
                  },
                },
                {
                  key: "setNetworkPassphrase",
                  value: function (e) {
                    return ((this.networkPassphrase = e), this);
                  },
                },
                {
                  key: "build",
                  value: function () {
                    var e = new i.default(this.source.sequenceNumber()).add(1),
                      t = new i.default(this.baseFee)
                        .mul(this.operations.length)
                        .toNumber(),
                      n = {
                        fee: t,
                        seqNum: h.default.SequenceNumber.fromString(
                          e.toString(),
                        ),
                        memo: this.memo ? this.memo.toXDRObject() : null,
                      };
                    if (
                      null === this.timebounds ||
                      "undefined" === typeof this.timebounds.minTime ||
                      "undefined" === typeof this.timebounds.maxTime
                    )
                      throw new Error(
                        "TimeBounds has to be set or you must call setTimeout(TimeoutInfinite).",
                      );
                    (A(this.timebounds.minTime) &&
                      (this.timebounds.minTime =
                        this.timebounds.minTime.getTime() / 1e3),
                      A(this.timebounds.maxTime) &&
                        (this.timebounds.maxTime =
                          this.timebounds.maxTime.getTime() / 1e3),
                      (this.timebounds.minTime = r.UnsignedHyper.fromString(
                        this.timebounds.minTime.toString(),
                      )),
                      (this.timebounds.maxTime = r.UnsignedHyper.fromString(
                        this.timebounds.maxTime.toString(),
                      )));
                    var o = new h.default.TimeBounds(this.timebounds);
                    if (this.hasV2Preconditions()) {
                      var a = null;
                      null !== this.ledgerbounds &&
                        (a = new h.default.LedgerBounds(this.ledgerbounds));
                      var u = this.minAccountSequence || "0";
                      u = h.default.SequenceNumber.fromString(u);
                      var s = r.UnsignedHyper.fromString(
                          null !== this.minAccountSequenceAge
                            ? this.minAccountSequenceAge.toString()
                            : "0",
                        ),
                        l = this.minAccountSequenceLedgerGap || 0,
                        c =
                          null !== this.extraSigners
                            ? this.extraSigners.map(b.SignerKey.decodeAddress)
                            : [];
                      n.cond = h.default.Preconditions.precondV2(
                        new h.default.PreconditionsV2({
                          timeBounds: o,
                          ledgerBounds: a,
                          minSeqNum: u,
                          minSeqAge: s,
                          minSeqLedgerGap: l,
                          extraSigners: c,
                        }),
                      );
                    } else n.cond = h.default.Preconditions.precondTime(o);
                    ((n.sourceAccount = (0, S.decodeAddressToMuxedAccount)(
                      this.source.accountId(),
                    )),
                      (n.ext = new h.default.TransactionExt(0)));
                    var d = new h.default.Transaction(n);
                    d.operations(this.operations);
                    var p = new h.default.TransactionEnvelope.envelopeTypeTx(
                        new h.default.TransactionV1Envelope({ tx: d }),
                      ),
                      f = new v.Transaction(p, this.networkPassphrase);
                    return (this.source.incrementSequenceNumber(), f);
                  },
                },
                {
                  key: "hasV2Preconditions",
                  value: function () {
                    return (
                      null !== this.ledgerbounds ||
                      null !== this.minAccountSequence ||
                      null !== this.minAccountSequenceAge ||
                      null !== this.minAccountSequenceLedgerGap ||
                      (null !== this.extraSigners &&
                        this.extraSigners.length > 0)
                    );
                  },
                },
              ],
              [
                {
                  key: "buildFeeBumpTransaction",
                  value: function (e, t, n, o) {
                    var r = n.operations.length,
                      a = new i.default(n.fee).div(r),
                      u = new i.default(t);
                    if (u.lessThan(a))
                      throw new Error(
                        "Invalid baseFee, it should be at least " +
                          a +
                          " stroops.",
                      );
                    var s = new i.default(P);
                    if (u.lessThan(s))
                      throw new Error(
                        "Invalid baseFee, it should be at least " +
                          s +
                          " stroops.",
                      );
                    var l = n.toEnvelope();
                    if (
                      l.switch() === h.default.EnvelopeType.envelopeTypeTxV0()
                    ) {
                      var c = l.v0().tx(),
                        d = new h.default.Transaction({
                          sourceAccount:
                            new h.default.MuxedAccount.keyTypeEd25519(
                              c.sourceAccountEd25519(),
                            ),
                          fee: c.fee(),
                          seqNum: c.seqNum(),
                          cond: h.default.Preconditions.precondTime(
                            c.timeBounds(),
                          ),
                          memo: c.memo(),
                          operations: c.operations(),
                          ext: new h.default.TransactionExt(0),
                        });
                      l = new h.default.TransactionEnvelope.envelopeTypeTx(
                        new h.default.TransactionV1Envelope({
                          tx: d,
                          signatures: l.v0().signatures(),
                        }),
                      );
                    }
                    var f = void 0;
                    f = (0, p.default)(e)
                      ? (0, S.decodeAddressToMuxedAccount)(e)
                      : e.xdrMuxedAccount();
                    var m = new h.default.FeeBumpTransaction({
                        feeSource: f,
                        fee: h.default.Int64.fromString(
                          u.mul(r + 1).toString(),
                        ),
                        innerTx:
                          h.default.FeeBumpTransactionInnerTx.envelopeTypeTx(
                            l.v1(),
                          ),
                        ext: new h.default.FeeBumpTransactionExt(0),
                      }),
                      y = new h.default.FeeBumpTransactionEnvelope({
                        tx: m,
                        signatures: [],
                      }),
                      v =
                        new h.default.TransactionEnvelope.envelopeTypeTxFeeBump(
                          y,
                        );
                    return new g.FeeBumpTransaction(v, o);
                  },
                },
                {
                  key: "fromXDR",
                  value: function (e, t) {
                    return (
                      "string" === typeof e &&
                        (e = h.default.TransactionEnvelope.fromXDR(
                          e,
                          "base64",
                        )),
                      e.switch() ===
                      h.default.EnvelopeType.envelopeTypeTxFeeBump()
                        ? new g.FeeBumpTransaction(e, t)
                        : new v.Transaction(e, t)
                    );
                  },
                },
              ],
            ),
            e
          );
        })()));
      function A(e) {
        return e instanceof Date && !isNaN(e);
      }
    },
    7569: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MuxedAccount = void 0));
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, n, o) {
            return (n && e(t.prototype, n), o && e(t, o), t);
          };
        })(),
        r = n(2964),
        a = d(r),
        i = n(2825),
        u = d(i),
        s = n(5993),
        l = n(3091),
        c = n(3287);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.MuxedAccount = (function () {
        function e(t, n) {
          p(this, e);
          var o = t.accountId();
          if (!l.StrKey.isValidEd25519PublicKey(o))
            throw new Error("accountId is invalid");
          ((this.account = t),
            (this._muxedXdr = (0, c.encodeMuxedAccount)(o, n)),
            (this._mAddress = (0, c.encodeMuxedAccountToAddress)(
              this._muxedXdr,
            )),
            (this._id = n));
        }
        return (
          o(
            e,
            [
              {
                key: "baseAccount",
                value: function () {
                  return this.account;
                },
              },
              {
                key: "accountId",
                value: function () {
                  return this._mAddress;
                },
              },
              {
                key: "id",
                value: function () {
                  return this._id;
                },
              },
              {
                key: "setId",
                value: function (e) {
                  if (!(0, a.default)(e))
                    throw new Error(
                      "id should be a string representing a number (uint64)",
                    );
                  return (
                    this._muxedXdr
                      .med25519()
                      .id(u.default.Uint64.fromString(e)),
                    (this._mAddress = (0, c.encodeMuxedAccountToAddress)(
                      this._muxedXdr,
                    )),
                    (this._id = e),
                    this
                  );
                },
              },
              {
                key: "sequenceNumber",
                value: function () {
                  return this.account.sequenceNumber();
                },
              },
              {
                key: "incrementSequenceNumber",
                value: function () {
                  return this.account.incrementSequenceNumber();
                },
              },
              {
                key: "toXDRObject",
                value: function () {
                  return this._muxedXdr;
                },
              },
              {
                key: "equals",
                value: function (e) {
                  return this.accountId() === e.accountId();
                },
              },
            ],
            [
              {
                key: "fromAddress",
                value: function (t, n) {
                  var o = (0, c.decodeAddressToMuxedAccount)(t),
                    r = (0, c.extractBaseAddress)(t),
                    a = o.med25519().id().toString();
                  return new e(new s.Account(r, n), a);
                },
              },
            ],
          ),
          e
        );
      })();
    },
    7570: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.Networks = {
        PUBLIC: "Public Global Stellar Network ; September 2015",
        TESTNET: "Test SDF Network ; September 2015",
      };
    },
  },
]);
