(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [330, 331],
  {
    2801: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DecProto =
          t.IntProto =
          t.DecCoin =
          t.Coin =
          t.protobufPackage =
            void 0));
      const s = o(n(2754)),
        a = o(n(2755));
      t.protobufPackage = "cosmos.base.v1beta1";
      const i = { denom: "", amount: "" };
      t.Coin = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, i);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.denom = n.string();
                break;
              case 2:
                s.amount = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            t
          );
        },
        fromPartial(e) {
          var t, n;
          const o = Object.assign({}, i);
          return (
            (o.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
            (o.amount = null !== (n = e.amount) && void 0 !== n ? n : ""),
            o
          );
        },
      };
      const r = { denom: "", amount: "" };
      t.DecCoin = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, r);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.denom = n.string();
                break;
              case 2:
                s.amount = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            t
          );
        },
        fromPartial(e) {
          var t, n;
          const o = Object.assign({}, r);
          return (
            (o.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
            (o.amount = null !== (n = e.amount) && void 0 !== n ? n : ""),
            o
          );
        },
      };
      const d = { int: "" };
      t.IntProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.int && t.uint32(10).string(e.int),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, d);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.int = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.int && null !== e.int
              ? (t.int = String(e.int))
              : (t.int = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.int && (t.int = e.int), t);
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, d);
          return ((n.int = null !== (t = e.int) && void 0 !== t ? t : ""), n);
        },
      };
      const u = { dec: "" };
      ((t.DecProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.dec && t.uint32(10).string(e.dec),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.dec = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.dec && null !== e.dec
              ? (t.dec = String(e.dec))
              : (t.dec = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.dec && (t.dec = e.dec), t);
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, u);
          return ((n.dec = null !== (t = e.dec) && void 0 !== t ? t : ""), n);
        },
      }),
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure()));
    },
    2926: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PageResponse = t.PageRequest = t.protobufPackage = void 0));
        const s = o(n(2754)),
          a = o(n(2755));
        t.protobufPackage = "cosmos.base.query.v1beta1";
        const i = {
          offset: s.default.UZERO,
          limit: s.default.UZERO,
          countTotal: !1,
        };
        t.PageRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = a.default.Writer.create()),
              0 !== e.key.length && t.uint32(10).bytes(e.key),
              e.offset.isZero() || t.uint32(16).uint64(e.offset),
              e.limit.isZero() || t.uint32(24).uint64(e.limit),
              !0 === e.countTotal && t.uint32(32).bool(e.countTotal),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const s = Object.assign({}, i);
            s.key = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = n.bytes();
                  break;
                case 2:
                  s.offset = n.uint64();
                  break;
                case 3:
                  s.limit = n.uint64();
                  break;
                case 4:
                  s.countTotal = n.bool();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, i);
            return (
              (t.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (t.key = c(e.key)),
              void 0 !== e.offset && null !== e.offset
                ? (t.offset = s.default.fromString(e.offset))
                : (t.offset = s.default.UZERO),
              void 0 !== e.limit && null !== e.limit
                ? (t.limit = s.default.fromString(e.limit))
                : (t.limit = s.default.UZERO),
              void 0 !== e.countTotal && null !== e.countTotal
                ? (t.countTotal = Boolean(e.countTotal))
                : (t.countTotal = !1),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key &&
                (t.key = f(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.offset &&
                (t.offset = (e.offset || s.default.UZERO).toString()),
              void 0 !== e.limit &&
                (t.limit = (e.limit || s.default.UZERO).toString()),
              void 0 !== e.countTotal && (t.countTotal = e.countTotal),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, i);
            return (
              (o.key =
                null !== (t = e.key) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.offset && null !== e.offset
                ? (o.offset = e.offset)
                : (o.offset = s.default.UZERO),
              void 0 !== e.limit && null !== e.limit
                ? (o.limit = e.limit)
                : (o.limit = s.default.UZERO),
              (o.countTotal = null !== (n = e.countTotal) && void 0 !== n && n),
              o
            );
          },
        };
        const r = { total: s.default.UZERO };
        t.PageResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = a.default.Writer.create()),
              0 !== e.nextKey.length && t.uint32(10).bytes(e.nextKey),
              e.total.isZero() || t.uint32(16).uint64(e.total),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const s = Object.assign({}, r);
            s.nextKey = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.nextKey = n.bytes();
                  break;
                case 2:
                  s.total = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, r);
            return (
              (t.nextKey = new Uint8Array()),
              void 0 !== e.nextKey &&
                null !== e.nextKey &&
                (t.nextKey = c(e.nextKey)),
              void 0 !== e.total && null !== e.total
                ? (t.total = s.default.fromString(e.total))
                : (t.total = s.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.nextKey &&
                (t.nextKey = f(
                  void 0 !== e.nextKey ? e.nextKey : new Uint8Array(),
                )),
              void 0 !== e.total &&
                (t.total = (e.total || s.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, r);
            return (
              (n.nextKey =
                null !== (t = e.nextKey) && void 0 !== t
                  ? t
                  : new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (n.total = e.total)
                : (n.total = s.default.UZERO),
              n
            );
          },
        };
        var d = (() => {
          if ("undefined" !== typeof d) return d;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const u =
          d.atob || ((e) => d.Buffer.from(e, "base64").toString("binary"));
        function c(e) {
          const t = u(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const l =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function f(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return l(t.join(""));
        }
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure());
      }).call(this, n(13));
    },
    3323: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params =
          t.ModuleAccount =
          t.BaseAccount =
          t.protobufPackage =
            void 0));
      const s = o(n(2754)),
        a = o(n(2755)),
        i = n(2781);
      t.protobufPackage = "cosmos.auth.v1beta1";
      const r = {
        address: "",
        accountNumber: s.default.UZERO,
        sequence: s.default.UZERO,
      };
      t.BaseAccount = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address),
            void 0 !== e.pubKey &&
              i.Any.encode(e.pubKey, t.uint32(18).fork()).ldelim(),
            e.accountNumber.isZero() || t.uint32(24).uint64(e.accountNumber),
            e.sequence.isZero() || t.uint32(32).uint64(e.sequence),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, r);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.address = n.string();
                break;
              case 2:
                s.pubKey = i.Any.decode(n, n.uint32());
                break;
              case 3:
                s.accountNumber = n.uint64();
                break;
              case 4:
                s.sequence = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.pubKey && null !== e.pubKey
              ? (t.pubKey = i.Any.fromJSON(e.pubKey))
              : (t.pubKey = void 0),
            void 0 !== e.accountNumber && null !== e.accountNumber
              ? (t.accountNumber = s.default.fromString(e.accountNumber))
              : (t.accountNumber = s.default.UZERO),
            void 0 !== e.sequence && null !== e.sequence
              ? (t.sequence = s.default.fromString(e.sequence))
              : (t.sequence = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            void 0 !== e.pubKey &&
              (t.pubKey = e.pubKey ? i.Any.toJSON(e.pubKey) : void 0),
            void 0 !== e.accountNumber &&
              (t.accountNumber = (
                e.accountNumber || s.default.UZERO
              ).toString()),
            void 0 !== e.sequence &&
              (t.sequence = (e.sequence || s.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, r);
          return (
            (n.address = null !== (t = e.address) && void 0 !== t ? t : ""),
            void 0 !== e.pubKey && null !== e.pubKey
              ? (n.pubKey = i.Any.fromPartial(e.pubKey))
              : (n.pubKey = void 0),
            void 0 !== e.accountNumber && null !== e.accountNumber
              ? (n.accountNumber = e.accountNumber)
              : (n.accountNumber = s.default.UZERO),
            void 0 !== e.sequence && null !== e.sequence
              ? (n.sequence = e.sequence)
              : (n.sequence = s.default.UZERO),
            n
          );
        },
      };
      const d = { name: "", permissions: "" };
      t.ModuleAccount = {
        encode(e, n) {
          (void 0 === n && (n = a.default.Writer.create()),
            void 0 !== e.baseAccount &&
              t.BaseAccount.encode(e.baseAccount, n.uint32(10).fork()).ldelim(),
            "" !== e.name && n.uint32(18).string(e.name));
          for (const t of e.permissions) n.uint32(26).string(t);
          return n;
        },
        decode(e, n) {
          const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, d);
          i.permissions = [];
          while (o.pos < s) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.baseAccount = t.BaseAccount.decode(o, o.uint32());
                break;
              case 2:
                i.name = o.string();
                break;
              case 3:
                i.permissions.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const n = Object.assign({}, d);
          if (
            ((n.permissions = []),
            void 0 !== e.baseAccount && null !== e.baseAccount
              ? (n.baseAccount = t.BaseAccount.fromJSON(e.baseAccount))
              : (n.baseAccount = void 0),
            void 0 !== e.name && null !== e.name
              ? (n.name = String(e.name))
              : (n.name = ""),
            void 0 !== e.permissions && null !== e.permissions)
          )
            for (const t of e.permissions) n.permissions.push(String(t));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.baseAccount &&
              (n.baseAccount = e.baseAccount
                ? t.BaseAccount.toJSON(e.baseAccount)
                : void 0),
            void 0 !== e.name && (n.name = e.name),
            e.permissions
              ? (n.permissions = e.permissions.map((e) => e))
              : (n.permissions = []),
            n
          );
        },
        fromPartial(e) {
          var n;
          const o = Object.assign({}, d);
          if (
            (void 0 !== e.baseAccount && null !== e.baseAccount
              ? (o.baseAccount = t.BaseAccount.fromPartial(e.baseAccount))
              : (o.baseAccount = void 0),
            (o.name = null !== (n = e.name) && void 0 !== n ? n : ""),
            (o.permissions = []),
            void 0 !== e.permissions && null !== e.permissions)
          )
            for (const t of e.permissions) o.permissions.push(t);
          return o;
        },
      };
      const u = {
        maxMemoCharacters: s.default.UZERO,
        txSigLimit: s.default.UZERO,
        txSizeCostPerByte: s.default.UZERO,
        sigVerifyCostEd25519: s.default.UZERO,
        sigVerifyCostSecp256k1: s.default.UZERO,
      };
      ((t.Params = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            e.maxMemoCharacters.isZero() ||
              t.uint32(8).uint64(e.maxMemoCharacters),
            e.txSigLimit.isZero() || t.uint32(16).uint64(e.txSigLimit),
            e.txSizeCostPerByte.isZero() ||
              t.uint32(24).uint64(e.txSizeCostPerByte),
            e.sigVerifyCostEd25519.isZero() ||
              t.uint32(32).uint64(e.sigVerifyCostEd25519),
            e.sigVerifyCostSecp256k1.isZero() ||
              t.uint32(40).uint64(e.sigVerifyCostSecp256k1),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.maxMemoCharacters = n.uint64();
                break;
              case 2:
                s.txSigLimit = n.uint64();
                break;
              case 3:
                s.txSizeCostPerByte = n.uint64();
                break;
              case 4:
                s.sigVerifyCostEd25519 = n.uint64();
                break;
              case 5:
                s.sigVerifyCostSecp256k1 = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters
              ? (t.maxMemoCharacters = s.default.fromString(
                  e.maxMemoCharacters,
                ))
              : (t.maxMemoCharacters = s.default.UZERO),
            void 0 !== e.txSigLimit && null !== e.txSigLimit
              ? (t.txSigLimit = s.default.fromString(e.txSigLimit))
              : (t.txSigLimit = s.default.UZERO),
            void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte
              ? (t.txSizeCostPerByte = s.default.fromString(
                  e.txSizeCostPerByte,
                ))
              : (t.txSizeCostPerByte = s.default.UZERO),
            void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519
              ? (t.sigVerifyCostEd25519 = s.default.fromString(
                  e.sigVerifyCostEd25519,
                ))
              : (t.sigVerifyCostEd25519 = s.default.UZERO),
            void 0 !== e.sigVerifyCostSecp256k1 &&
            null !== e.sigVerifyCostSecp256k1
              ? (t.sigVerifyCostSecp256k1 = s.default.fromString(
                  e.sigVerifyCostSecp256k1,
                ))
              : (t.sigVerifyCostSecp256k1 = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxMemoCharacters &&
              (t.maxMemoCharacters = (
                e.maxMemoCharacters || s.default.UZERO
              ).toString()),
            void 0 !== e.txSigLimit &&
              (t.txSigLimit = (e.txSigLimit || s.default.UZERO).toString()),
            void 0 !== e.txSizeCostPerByte &&
              (t.txSizeCostPerByte = (
                e.txSizeCostPerByte || s.default.UZERO
              ).toString()),
            void 0 !== e.sigVerifyCostEd25519 &&
              (t.sigVerifyCostEd25519 = (
                e.sigVerifyCostEd25519 || s.default.UZERO
              ).toString()),
            void 0 !== e.sigVerifyCostSecp256k1 &&
              (t.sigVerifyCostSecp256k1 = (
                e.sigVerifyCostSecp256k1 || s.default.UZERO
              ).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters
              ? (t.maxMemoCharacters = e.maxMemoCharacters)
              : (t.maxMemoCharacters = s.default.UZERO),
            void 0 !== e.txSigLimit && null !== e.txSigLimit
              ? (t.txSigLimit = e.txSigLimit)
              : (t.txSigLimit = s.default.UZERO),
            void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte
              ? (t.txSizeCostPerByte = e.txSizeCostPerByte)
              : (t.txSizeCostPerByte = s.default.UZERO),
            void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519
              ? (t.sigVerifyCostEd25519 = e.sigVerifyCostEd25519)
              : (t.sigVerifyCostEd25519 = s.default.UZERO),
            void 0 !== e.sigVerifyCostSecp256k1 &&
            null !== e.sigVerifyCostSecp256k1
              ? (t.sigVerifyCostSecp256k1 = e.sigVerifyCostSecp256k1)
              : (t.sigVerifyCostSecp256k1 = s.default.UZERO),
            t
          );
        },
      }),
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure()));
    },
    3378: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgClientImpl =
          t.MsgMultiSendResponse =
          t.MsgMultiSend =
          t.MsgSendResponse =
          t.MsgSend =
          t.protobufPackage =
            void 0));
      const s = o(n(2754)),
        a = o(n(2755)),
        i = n(2801),
        r = n(3379);
      t.protobufPackage = "cosmos.bank.v1beta1";
      const d = { fromAddress: "", toAddress: "" };
      t.MsgSend = {
        encode(e, t) {
          (void 0 === t && (t = a.default.Writer.create()),
            "" !== e.fromAddress && t.uint32(10).string(e.fromAddress),
            "" !== e.toAddress && t.uint32(18).string(e.toAddress));
          for (const n of e.amount)
            i.Coin.encode(n, t.uint32(26).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, d);
          s.amount = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.fromAddress = n.string();
                break;
              case 2:
                s.toAddress = n.string();
                break;
              case 3:
                s.amount.push(i.Coin.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          if (
            ((t.amount = []),
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = String(e.fromAddress))
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = String(e.toAddress))
              : (t.toAddress = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const n of e.amount) t.amount.push(i.Coin.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress),
            void 0 !== e.toAddress && (t.toAddress = e.toAddress),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? i.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          var t, n;
          const o = Object.assign({}, d);
          if (
            ((o.fromAddress =
              null !== (t = e.fromAddress) && void 0 !== t ? t : ""),
            (o.toAddress = null !== (n = e.toAddress) && void 0 !== n ? n : ""),
            (o.amount = []),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const s of e.amount) o.amount.push(i.Coin.fromPartial(s));
          return o;
        },
      };
      const u = {};
      t.MsgSendResponse = {
        encode(e, t) {
          return (void 0 === t && (t = a.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return t;
        },
      };
      const c = {};
      t.MsgMultiSend = {
        encode(e, t) {
          void 0 === t && (t = a.default.Writer.create());
          for (const n of e.inputs)
            r.Input.encode(n, t.uint32(10).fork()).ldelim();
          for (const n of e.outputs)
            r.Output.encode(n, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, c);
          ((s.inputs = []), (s.outputs = []));
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.inputs.push(r.Input.decode(n, n.uint32()));
                break;
              case 2:
                s.outputs.push(r.Output.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (
            ((t.inputs = []),
            (t.outputs = []),
            void 0 !== e.inputs && null !== e.inputs)
          )
            for (const n of e.inputs) t.inputs.push(r.Input.fromJSON(n));
          if (void 0 !== e.outputs && null !== e.outputs)
            for (const n of e.outputs) t.outputs.push(r.Output.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.inputs
              ? (t.inputs = e.inputs.map((e) =>
                  e ? r.Input.toJSON(e) : void 0,
                ))
              : (t.inputs = []),
            e.outputs
              ? (t.outputs = e.outputs.map((e) =>
                  e ? r.Output.toJSON(e) : void 0,
                ))
              : (t.outputs = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (((t.inputs = []), void 0 !== e.inputs && null !== e.inputs))
            for (const n of e.inputs) t.inputs.push(r.Input.fromPartial(n));
          if (((t.outputs = []), void 0 !== e.outputs && null !== e.outputs))
            for (const n of e.outputs) t.outputs.push(r.Output.fromPartial(n));
          return t;
        },
      };
      const l = {};
      t.MsgMultiSendResponse = {
        encode(e, t) {
          return (void 0 === t && (t = a.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, l);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return t;
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Send = this.Send.bind(this)),
            (this.MultiSend = this.MultiSend.bind(this)));
        }
        Send(e) {
          const n = t.MsgSend.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", n);
          return o.then((e) =>
            t.MsgSendResponse.decode(new a.default.Reader(e)),
          );
        }
        MultiSend(e) {
          const n = t.MsgMultiSend.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", n);
          return o.then((e) =>
            t.MsgMultiSendResponse.decode(new a.default.Reader(e)),
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure()));
    },
    3379: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Metadata =
          t.DenomUnit =
          t.Supply =
          t.Output =
          t.Input =
          t.SendEnabled =
          t.Params =
          t.protobufPackage =
            void 0));
      const s = o(n(2754)),
        a = o(n(2755)),
        i = n(2801);
      t.protobufPackage = "cosmos.bank.v1beta1";
      const r = { defaultSendEnabled: !1 };
      t.Params = {
        encode(e, n) {
          void 0 === n && (n = a.default.Writer.create());
          for (const o of e.sendEnabled)
            t.SendEnabled.encode(o, n.uint32(10).fork()).ldelim();
          return (
            !0 === e.defaultSendEnabled &&
              n.uint32(16).bool(e.defaultSendEnabled),
            n
          );
        },
        decode(e, n) {
          const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, r);
          i.sendEnabled = [];
          while (o.pos < s) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.sendEnabled.push(t.SendEnabled.decode(o, o.uint32()));
                break;
              case 2:
                i.defaultSendEnabled = o.bool();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const n = Object.assign({}, r);
          if (
            ((n.sendEnabled = []),
            void 0 !== e.sendEnabled && null !== e.sendEnabled)
          )
            for (const o of e.sendEnabled)
              n.sendEnabled.push(t.SendEnabled.fromJSON(o));
          return (
            void 0 !== e.defaultSendEnabled && null !== e.defaultSendEnabled
              ? (n.defaultSendEnabled = Boolean(e.defaultSendEnabled))
              : (n.defaultSendEnabled = !1),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            e.sendEnabled
              ? (n.sendEnabled = e.sendEnabled.map((e) =>
                  e ? t.SendEnabled.toJSON(e) : void 0,
                ))
              : (n.sendEnabled = []),
            void 0 !== e.defaultSendEnabled &&
              (n.defaultSendEnabled = e.defaultSendEnabled),
            n
          );
        },
        fromPartial(e) {
          var n;
          const o = Object.assign({}, r);
          if (
            ((o.sendEnabled = []),
            void 0 !== e.sendEnabled && null !== e.sendEnabled)
          )
            for (const s of e.sendEnabled)
              o.sendEnabled.push(t.SendEnabled.fromPartial(s));
          return (
            (o.defaultSendEnabled =
              null !== (n = e.defaultSendEnabled) && void 0 !== n && n),
            o
          );
        },
      };
      const d = { denom: "", enabled: !1 };
      t.SendEnabled = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            !0 === e.enabled && t.uint32(16).bool(e.enabled),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, d);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.denom = n.string();
                break;
              case 2:
                s.enabled = n.bool();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.enabled && null !== e.enabled
              ? (t.enabled = Boolean(e.enabled))
              : (t.enabled = !1),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.enabled && (t.enabled = e.enabled),
            t
          );
        },
        fromPartial(e) {
          var t, n;
          const o = Object.assign({}, d);
          return (
            (o.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
            (o.enabled = null !== (n = e.enabled) && void 0 !== n && n),
            o
          );
        },
      };
      const u = { address: "" };
      t.Input = {
        encode(e, t) {
          (void 0 === t && (t = a.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address));
          for (const n of e.coins)
            i.Coin.encode(n, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, u);
          s.coins = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.address = n.string();
                break;
              case 2:
                s.coins.push(i.Coin.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.coins = []),
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const n of e.coins) t.coins.push(i.Coin.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            e.coins
              ? (t.coins = e.coins.map((e) => (e ? i.Coin.toJSON(e) : void 0)))
              : (t.coins = []),
            t
          );
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, u);
          if (
            ((n.address = null !== (t = e.address) && void 0 !== t ? t : ""),
            (n.coins = []),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const o of e.coins) n.coins.push(i.Coin.fromPartial(o));
          return n;
        },
      };
      const c = { address: "" };
      t.Output = {
        encode(e, t) {
          (void 0 === t && (t = a.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address));
          for (const n of e.coins)
            i.Coin.encode(n, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, c);
          s.coins = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.address = n.string();
                break;
              case 2:
                s.coins.push(i.Coin.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (
            ((t.coins = []),
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const n of e.coins) t.coins.push(i.Coin.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            e.coins
              ? (t.coins = e.coins.map((e) => (e ? i.Coin.toJSON(e) : void 0)))
              : (t.coins = []),
            t
          );
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, c);
          if (
            ((n.address = null !== (t = e.address) && void 0 !== t ? t : ""),
            (n.coins = []),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const o of e.coins) n.coins.push(i.Coin.fromPartial(o));
          return n;
        },
      };
      const l = {};
      t.Supply = {
        encode(e, t) {
          void 0 === t && (t = a.default.Writer.create());
          for (const n of e.total)
            i.Coin.encode(n, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, l);
          s.total = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.total.push(i.Coin.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          if (((t.total = []), void 0 !== e.total && null !== e.total))
            for (const n of e.total) t.total.push(i.Coin.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.total
              ? (t.total = e.total.map((e) => (e ? i.Coin.toJSON(e) : void 0)))
              : (t.total = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          if (((t.total = []), void 0 !== e.total && null !== e.total))
            for (const n of e.total) t.total.push(i.Coin.fromPartial(n));
          return t;
        },
      };
      const f = { denom: "", exponent: 0, aliases: "" };
      t.DenomUnit = {
        encode(e, t) {
          (void 0 === t && (t = a.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            0 !== e.exponent && t.uint32(16).uint32(e.exponent));
          for (const n of e.aliases) t.uint32(26).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, f);
          s.aliases = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.denom = n.string();
                break;
              case 2:
                s.exponent = n.uint32();
                break;
              case 3:
                s.aliases.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          if (
            ((t.aliases = []),
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.exponent && null !== e.exponent
              ? (t.exponent = Number(e.exponent))
              : (t.exponent = 0),
            void 0 !== e.aliases && null !== e.aliases)
          )
            for (const n of e.aliases) t.aliases.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.exponent && (t.exponent = e.exponent),
            e.aliases
              ? (t.aliases = e.aliases.map((e) => e))
              : (t.aliases = []),
            t
          );
        },
        fromPartial(e) {
          var t, n;
          const o = Object.assign({}, f);
          if (
            ((o.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
            (o.exponent = null !== (n = e.exponent) && void 0 !== n ? n : 0),
            (o.aliases = []),
            void 0 !== e.aliases && null !== e.aliases)
          )
            for (const s of e.aliases) o.aliases.push(s);
          return o;
        },
      };
      const p = { description: "", base: "", display: "" };
      ((t.Metadata = {
        encode(e, n) {
          (void 0 === n && (n = a.default.Writer.create()),
            "" !== e.description && n.uint32(10).string(e.description));
          for (const o of e.denomUnits)
            t.DenomUnit.encode(o, n.uint32(18).fork()).ldelim();
          return (
            "" !== e.base && n.uint32(26).string(e.base),
            "" !== e.display && n.uint32(34).string(e.display),
            n
          );
        },
        decode(e, n) {
          const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, p);
          i.denomUnits = [];
          while (o.pos < s) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.description = o.string();
                break;
              case 2:
                i.denomUnits.push(t.DenomUnit.decode(o, o.uint32()));
                break;
              case 3:
                i.base = o.string();
                break;
              case 4:
                i.display = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const n = Object.assign({}, p);
          if (
            ((n.denomUnits = []),
            void 0 !== e.description && null !== e.description
              ? (n.description = String(e.description))
              : (n.description = ""),
            void 0 !== e.denomUnits && null !== e.denomUnits)
          )
            for (const o of e.denomUnits)
              n.denomUnits.push(t.DenomUnit.fromJSON(o));
          return (
            void 0 !== e.base && null !== e.base
              ? (n.base = String(e.base))
              : (n.base = ""),
            void 0 !== e.display && null !== e.display
              ? (n.display = String(e.display))
              : (n.display = ""),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.description && (n.description = e.description),
            e.denomUnits
              ? (n.denomUnits = e.denomUnits.map((e) =>
                  e ? t.DenomUnit.toJSON(e) : void 0,
                ))
              : (n.denomUnits = []),
            void 0 !== e.base && (n.base = e.base),
            void 0 !== e.display && (n.display = e.display),
            n
          );
        },
        fromPartial(e) {
          var n, o, s;
          const a = Object.assign({}, p);
          if (
            ((a.description =
              null !== (n = e.description) && void 0 !== n ? n : ""),
            (a.denomUnits = []),
            void 0 !== e.denomUnits && null !== e.denomUnits)
          )
            for (const i of e.denomUnits)
              a.denomUnits.push(t.DenomUnit.fromPartial(i));
          return (
            (a.base = null !== (o = e.base) && void 0 !== o ? o : ""),
            (a.display = null !== (s = e.display) && void 0 !== s ? s : ""),
            a
          );
        },
      }),
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure()));
    },
    3571: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompressedNonExistenceProof =
            t.CompressedExistenceProof =
            t.CompressedBatchEntry =
            t.CompressedBatchProof =
            t.BatchEntry =
            t.BatchProof =
            t.InnerSpec =
            t.ProofSpec =
            t.InnerOp =
            t.LeafOp =
            t.CommitmentProof =
            t.NonExistenceProof =
            t.ExistenceProof =
            t.lengthOpToJSON =
            t.lengthOpFromJSON =
            t.LengthOp =
            t.hashOpToJSON =
            t.hashOpFromJSON =
            t.HashOp =
            t.protobufPackage =
              void 0));
        const s = o(n(2754)),
          a = o(n(2755));
        var i, r;
        function d(e) {
          switch (e) {
            case 0:
            case "NO_HASH":
              return i.NO_HASH;
            case 1:
            case "SHA256":
              return i.SHA256;
            case 2:
            case "SHA512":
              return i.SHA512;
            case 3:
            case "KECCAK":
              return i.KECCAK;
            case 4:
            case "RIPEMD160":
              return i.RIPEMD160;
            case 5:
            case "BITCOIN":
              return i.BITCOIN;
            case -1:
            case "UNRECOGNIZED":
            default:
              return i.UNRECOGNIZED;
          }
        }
        function u(e) {
          switch (e) {
            case i.NO_HASH:
              return "NO_HASH";
            case i.SHA256:
              return "SHA256";
            case i.SHA512:
              return "SHA512";
            case i.KECCAK:
              return "KECCAK";
            case i.RIPEMD160:
              return "RIPEMD160";
            case i.BITCOIN:
              return "BITCOIN";
            default:
              return "UNKNOWN";
          }
        }
        function c(e) {
          switch (e) {
            case 0:
            case "NO_PREFIX":
              return r.NO_PREFIX;
            case 1:
            case "VAR_PROTO":
              return r.VAR_PROTO;
            case 2:
            case "VAR_RLP":
              return r.VAR_RLP;
            case 3:
            case "FIXED32_BIG":
              return r.FIXED32_BIG;
            case 4:
            case "FIXED32_LITTLE":
              return r.FIXED32_LITTLE;
            case 5:
            case "FIXED64_BIG":
              return r.FIXED64_BIG;
            case 6:
            case "FIXED64_LITTLE":
              return r.FIXED64_LITTLE;
            case 7:
            case "REQUIRE_32_BYTES":
              return r.REQUIRE_32_BYTES;
            case 8:
            case "REQUIRE_64_BYTES":
              return r.REQUIRE_64_BYTES;
            case -1:
            case "UNRECOGNIZED":
            default:
              return r.UNRECOGNIZED;
          }
        }
        function l(e) {
          switch (e) {
            case r.NO_PREFIX:
              return "NO_PREFIX";
            case r.VAR_PROTO:
              return "VAR_PROTO";
            case r.VAR_RLP:
              return "VAR_RLP";
            case r.FIXED32_BIG:
              return "FIXED32_BIG";
            case r.FIXED32_LITTLE:
              return "FIXED32_LITTLE";
            case r.FIXED64_BIG:
              return "FIXED64_BIG";
            case r.FIXED64_LITTLE:
              return "FIXED64_LITTLE";
            case r.REQUIRE_32_BYTES:
              return "REQUIRE_32_BYTES";
            case r.REQUIRE_64_BYTES:
              return "REQUIRE_64_BYTES";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "ics23"),
          (function (e) {
            ((e[(e["NO_HASH"] = 0)] = "NO_HASH"),
              (e[(e["SHA256"] = 1)] = "SHA256"),
              (e[(e["SHA512"] = 2)] = "SHA512"),
              (e[(e["KECCAK"] = 3)] = "KECCAK"),
              (e[(e["RIPEMD160"] = 4)] = "RIPEMD160"),
              (e[(e["BITCOIN"] = 5)] = "BITCOIN"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((i = t.HashOp || (t.HashOp = {}))),
          (t.hashOpFromJSON = d),
          (t.hashOpToJSON = u),
          (function (e) {
            ((e[(e["NO_PREFIX"] = 0)] = "NO_PREFIX"),
              (e[(e["VAR_PROTO"] = 1)] = "VAR_PROTO"),
              (e[(e["VAR_RLP"] = 2)] = "VAR_RLP"),
              (e[(e["FIXED32_BIG"] = 3)] = "FIXED32_BIG"),
              (e[(e["FIXED32_LITTLE"] = 4)] = "FIXED32_LITTLE"),
              (e[(e["FIXED64_BIG"] = 5)] = "FIXED64_BIG"),
              (e[(e["FIXED64_LITTLE"] = 6)] = "FIXED64_LITTLE"),
              (e[(e["REQUIRE_32_BYTES"] = 7)] = "REQUIRE_32_BYTES"),
              (e[(e["REQUIRE_64_BYTES"] = 8)] = "REQUIRE_64_BYTES"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((r = t.LengthOp || (t.LengthOp = {}))),
          (t.lengthOpFromJSON = c),
          (t.lengthOpToJSON = l));
        const f = {};
        t.ExistenceProof = {
          encode(e, n) {
            (void 0 === n && (n = a.default.Writer.create()),
              0 !== e.key.length && n.uint32(10).bytes(e.key),
              0 !== e.value.length && n.uint32(18).bytes(e.value),
              void 0 !== e.leaf &&
                t.LeafOp.encode(e.leaf, n.uint32(26).fork()).ldelim());
            for (const o of e.path)
              t.InnerOp.encode(o, n.uint32(34).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, f);
            ((i.path = []),
              (i.key = new Uint8Array()),
              (i.value = new Uint8Array()));
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = o.bytes();
                  break;
                case 2:
                  i.value = o.bytes();
                  break;
                case 3:
                  i.leaf = t.LeafOp.decode(o, o.uint32());
                  break;
                case 4:
                  i.path.push(t.InnerOp.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, f);
            if (
              ((n.path = []),
              (n.key = new Uint8Array()),
              (n.value = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (n.key = E(e.key)),
              void 0 !== e.value && null !== e.value && (n.value = E(e.value)),
              void 0 !== e.leaf && null !== e.leaf
                ? (n.leaf = t.LeafOp.fromJSON(e.leaf))
                : (n.leaf = void 0),
              void 0 !== e.path && null !== e.path)
            )
              for (const o of e.path) n.path.push(t.InnerOp.fromJSON(o));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.key &&
                (n.key = C(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (n.value = C(void 0 !== e.value ? e.value : new Uint8Array())),
              void 0 !== e.leaf &&
                (n.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0),
              e.path
                ? (n.path = e.path.map((e) =>
                    e ? t.InnerOp.toJSON(e) : void 0,
                  ))
                : (n.path = []),
              n
            );
          },
          fromPartial(e) {
            var n, o;
            const s = Object.assign({}, f);
            if (
              ((s.key =
                null !== (n = e.key) && void 0 !== n ? n : new Uint8Array()),
              (s.value =
                null !== (o = e.value) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.leaf && null !== e.leaf
                ? (s.leaf = t.LeafOp.fromPartial(e.leaf))
                : (s.leaf = void 0),
              (s.path = []),
              void 0 !== e.path && null !== e.path)
            )
              for (const a of e.path) s.path.push(t.InnerOp.fromPartial(a));
            return s;
          },
        };
        const p = {};
        t.NonExistenceProof = {
          encode(e, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              0 !== e.key.length && n.uint32(10).bytes(e.key),
              void 0 !== e.left &&
                t.ExistenceProof.encode(e.left, n.uint32(18).fork()).ldelim(),
              void 0 !== e.right &&
                t.ExistenceProof.encode(e.right, n.uint32(26).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, p);
            i.key = new Uint8Array();
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = o.bytes();
                  break;
                case 2:
                  i.left = t.ExistenceProof.decode(o, o.uint32());
                  break;
                case 3:
                  i.right = t.ExistenceProof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, p);
            return (
              (n.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (n.key = E(e.key)),
              void 0 !== e.left && null !== e.left
                ? (n.left = t.ExistenceProof.fromJSON(e.left))
                : (n.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (n.right = t.ExistenceProof.fromJSON(e.right))
                : (n.right = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.key &&
                (n.key = C(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.left &&
                (n.left = e.left ? t.ExistenceProof.toJSON(e.left) : void 0),
              void 0 !== e.right &&
                (n.right = e.right ? t.ExistenceProof.toJSON(e.right) : void 0),
              n
            );
          },
          fromPartial(e) {
            var n;
            const o = Object.assign({}, p);
            return (
              (o.key =
                null !== (n = e.key) && void 0 !== n ? n : new Uint8Array()),
              void 0 !== e.left && null !== e.left
                ? (o.left = t.ExistenceProof.fromPartial(e.left))
                : (o.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (o.right = t.ExistenceProof.fromPartial(e.right))
                : (o.right = void 0),
              o
            );
          },
        };
        const m = {};
        t.CommitmentProof = {
          encode(e, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              void 0 !== e.exist &&
                t.ExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(),
              void 0 !== e.nonexist &&
                t.NonExistenceProof.encode(
                  e.nonexist,
                  n.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.batch &&
                t.BatchProof.encode(e.batch, n.uint32(26).fork()).ldelim(),
              void 0 !== e.compressed &&
                t.CompressedBatchProof.encode(
                  e.compressed,
                  n.uint32(34).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, m);
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.exist = t.ExistenceProof.decode(o, o.uint32());
                  break;
                case 2:
                  i.nonexist = t.NonExistenceProof.decode(o, o.uint32());
                  break;
                case 3:
                  i.batch = t.BatchProof.decode(o, o.uint32());
                  break;
                case 4:
                  i.compressed = t.CompressedBatchProof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, m);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (n.exist = t.ExistenceProof.fromJSON(e.exist))
                : (n.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (n.nonexist = t.NonExistenceProof.fromJSON(e.nonexist))
                : (n.nonexist = void 0),
              void 0 !== e.batch && null !== e.batch
                ? (n.batch = t.BatchProof.fromJSON(e.batch))
                : (n.batch = void 0),
              void 0 !== e.compressed && null !== e.compressed
                ? (n.compressed = t.CompressedBatchProof.fromJSON(e.compressed))
                : (n.compressed = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.exist &&
                (n.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0),
              void 0 !== e.nonexist &&
                (n.nonexist = e.nonexist
                  ? t.NonExistenceProof.toJSON(e.nonexist)
                  : void 0),
              void 0 !== e.batch &&
                (n.batch = e.batch ? t.BatchProof.toJSON(e.batch) : void 0),
              void 0 !== e.compressed &&
                (n.compressed = e.compressed
                  ? t.CompressedBatchProof.toJSON(e.compressed)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, m);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (n.exist = t.ExistenceProof.fromPartial(e.exist))
                : (n.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (n.nonexist = t.NonExistenceProof.fromPartial(e.nonexist))
                : (n.nonexist = void 0),
              void 0 !== e.batch && null !== e.batch
                ? (n.batch = t.BatchProof.fromPartial(e.batch))
                : (n.batch = void 0),
              void 0 !== e.compressed && null !== e.compressed
                ? (n.compressed = t.CompressedBatchProof.fromPartial(
                    e.compressed,
                  ))
                : (n.compressed = void 0),
              n
            );
          },
        };
        const h = { hash: 0, prehashKey: 0, prehashValue: 0, length: 0 };
        t.LeafOp = {
          encode(e, t) {
            return (
              void 0 === t && (t = a.default.Writer.create()),
              0 !== e.hash && t.uint32(8).int32(e.hash),
              0 !== e.prehashKey && t.uint32(16).int32(e.prehashKey),
              0 !== e.prehashValue && t.uint32(24).int32(e.prehashValue),
              0 !== e.length && t.uint32(32).int32(e.length),
              0 !== e.prefix.length && t.uint32(42).bytes(e.prefix),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const s = Object.assign({}, h);
            s.prefix = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.hash = n.int32();
                  break;
                case 2:
                  s.prehashKey = n.int32();
                  break;
                case 3:
                  s.prehashValue = n.int32();
                  break;
                case 4:
                  s.length = n.int32();
                  break;
                case 5:
                  s.prefix = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              (t.prefix = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = d(e.hash))
                : (t.hash = 0),
              void 0 !== e.prehashKey && null !== e.prehashKey
                ? (t.prehashKey = d(e.prehashKey))
                : (t.prehashKey = 0),
              void 0 !== e.prehashValue && null !== e.prehashValue
                ? (t.prehashValue = d(e.prehashValue))
                : (t.prehashValue = 0),
              void 0 !== e.length && null !== e.length
                ? (t.length = c(e.length))
                : (t.length = 0),
              void 0 !== e.prefix &&
                null !== e.prefix &&
                (t.prefix = E(e.prefix)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.hash && (t.hash = u(e.hash)),
              void 0 !== e.prehashKey && (t.prehashKey = u(e.prehashKey)),
              void 0 !== e.prehashValue && (t.prehashValue = u(e.prehashValue)),
              void 0 !== e.length && (t.length = l(e.length)),
              void 0 !== e.prefix &&
                (t.prefix = C(
                  void 0 !== e.prefix ? e.prefix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t, n, o, s, a;
            const i = Object.assign({}, h);
            return (
              (i.hash = null !== (t = e.hash) && void 0 !== t ? t : 0),
              (i.prehashKey =
                null !== (n = e.prehashKey) && void 0 !== n ? n : 0),
              (i.prehashValue =
                null !== (o = e.prehashValue) && void 0 !== o ? o : 0),
              (i.length = null !== (s = e.length) && void 0 !== s ? s : 0),
              (i.prefix =
                null !== (a = e.prefix) && void 0 !== a ? a : new Uint8Array()),
              i
            );
          },
        };
        const v = { hash: 0 };
        t.InnerOp = {
          encode(e, t) {
            return (
              void 0 === t && (t = a.default.Writer.create()),
              0 !== e.hash && t.uint32(8).int32(e.hash),
              0 !== e.prefix.length && t.uint32(18).bytes(e.prefix),
              0 !== e.suffix.length && t.uint32(26).bytes(e.suffix),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const s = Object.assign({}, v);
            ((s.prefix = new Uint8Array()), (s.suffix = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.hash = n.int32();
                  break;
                case 2:
                  s.prefix = n.bytes();
                  break;
                case 3:
                  s.suffix = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              (t.prefix = new Uint8Array()),
              (t.suffix = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = d(e.hash))
                : (t.hash = 0),
              void 0 !== e.prefix &&
                null !== e.prefix &&
                (t.prefix = E(e.prefix)),
              void 0 !== e.suffix &&
                null !== e.suffix &&
                (t.suffix = E(e.suffix)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.hash && (t.hash = u(e.hash)),
              void 0 !== e.prefix &&
                (t.prefix = C(
                  void 0 !== e.prefix ? e.prefix : new Uint8Array(),
                )),
              void 0 !== e.suffix &&
                (t.suffix = C(
                  void 0 !== e.suffix ? e.suffix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t, n, o;
            const s = Object.assign({}, v);
            return (
              (s.hash = null !== (t = e.hash) && void 0 !== t ? t : 0),
              (s.prefix =
                null !== (n = e.prefix) && void 0 !== n ? n : new Uint8Array()),
              (s.suffix =
                null !== (o = e.suffix) && void 0 !== o ? o : new Uint8Array()),
              s
            );
          },
        };
        const b = { maxDepth: 0, minDepth: 0 };
        t.ProofSpec = {
          encode(e, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              void 0 !== e.leafSpec &&
                t.LeafOp.encode(e.leafSpec, n.uint32(10).fork()).ldelim(),
              void 0 !== e.innerSpec &&
                t.InnerSpec.encode(e.innerSpec, n.uint32(18).fork()).ldelim(),
              0 !== e.maxDepth && n.uint32(24).int32(e.maxDepth),
              0 !== e.minDepth && n.uint32(32).int32(e.minDepth),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, b);
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.leafSpec = t.LeafOp.decode(o, o.uint32());
                  break;
                case 2:
                  i.innerSpec = t.InnerSpec.decode(o, o.uint32());
                  break;
                case 3:
                  i.maxDepth = o.int32();
                  break;
                case 4:
                  i.minDepth = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, b);
            return (
              void 0 !== e.leafSpec && null !== e.leafSpec
                ? (n.leafSpec = t.LeafOp.fromJSON(e.leafSpec))
                : (n.leafSpec = void 0),
              void 0 !== e.innerSpec && null !== e.innerSpec
                ? (n.innerSpec = t.InnerSpec.fromJSON(e.innerSpec))
                : (n.innerSpec = void 0),
              void 0 !== e.maxDepth && null !== e.maxDepth
                ? (n.maxDepth = Number(e.maxDepth))
                : (n.maxDepth = 0),
              void 0 !== e.minDepth && null !== e.minDepth
                ? (n.minDepth = Number(e.minDepth))
                : (n.minDepth = 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.leafSpec &&
                (n.leafSpec = e.leafSpec
                  ? t.LeafOp.toJSON(e.leafSpec)
                  : void 0),
              void 0 !== e.innerSpec &&
                (n.innerSpec = e.innerSpec
                  ? t.InnerSpec.toJSON(e.innerSpec)
                  : void 0),
              void 0 !== e.maxDepth && (n.maxDepth = e.maxDepth),
              void 0 !== e.minDepth && (n.minDepth = e.minDepth),
              n
            );
          },
          fromPartial(e) {
            var n, o;
            const s = Object.assign({}, b);
            return (
              void 0 !== e.leafSpec && null !== e.leafSpec
                ? (s.leafSpec = t.LeafOp.fromPartial(e.leafSpec))
                : (s.leafSpec = void 0),
              void 0 !== e.innerSpec && null !== e.innerSpec
                ? (s.innerSpec = t.InnerSpec.fromPartial(e.innerSpec))
                : (s.innerSpec = void 0),
              (s.maxDepth = null !== (n = e.maxDepth) && void 0 !== n ? n : 0),
              (s.minDepth = null !== (o = e.minDepth) && void 0 !== o ? o : 0),
              s
            );
          },
        };
        const g = {
          childOrder: 0,
          childSize: 0,
          minPrefixLength: 0,
          maxPrefixLength: 0,
          hash: 0,
        };
        t.InnerSpec = {
          encode(e, t) {
            (void 0 === t && (t = a.default.Writer.create()),
              t.uint32(10).fork());
            for (const n of e.childOrder) t.int32(n);
            return (
              t.ldelim(),
              0 !== e.childSize && t.uint32(16).int32(e.childSize),
              0 !== e.minPrefixLength && t.uint32(24).int32(e.minPrefixLength),
              0 !== e.maxPrefixLength && t.uint32(32).int32(e.maxPrefixLength),
              0 !== e.emptyChild.length && t.uint32(42).bytes(e.emptyChild),
              0 !== e.hash && t.uint32(48).int32(e.hash),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const s = Object.assign({}, g);
            ((s.childOrder = []), (s.emptyChild = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  if (2 === (7 & e)) {
                    const e = n.uint32() + n.pos;
                    while (n.pos < e) s.childOrder.push(n.int32());
                  } else s.childOrder.push(n.int32());
                  break;
                case 2:
                  s.childSize = n.int32();
                  break;
                case 3:
                  s.minPrefixLength = n.int32();
                  break;
                case 4:
                  s.maxPrefixLength = n.int32();
                  break;
                case 5:
                  s.emptyChild = n.bytes();
                  break;
                case 6:
                  s.hash = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            if (
              ((t.childOrder = []),
              (t.emptyChild = new Uint8Array()),
              void 0 !== e.childOrder && null !== e.childOrder)
            )
              for (const n of e.childOrder) t.childOrder.push(Number(n));
            return (
              void 0 !== e.childSize && null !== e.childSize
                ? (t.childSize = Number(e.childSize))
                : (t.childSize = 0),
              void 0 !== e.minPrefixLength && null !== e.minPrefixLength
                ? (t.minPrefixLength = Number(e.minPrefixLength))
                : (t.minPrefixLength = 0),
              void 0 !== e.maxPrefixLength && null !== e.maxPrefixLength
                ? (t.maxPrefixLength = Number(e.maxPrefixLength))
                : (t.maxPrefixLength = 0),
              void 0 !== e.emptyChild &&
                null !== e.emptyChild &&
                (t.emptyChild = E(e.emptyChild)),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = d(e.hash))
                : (t.hash = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.childOrder
                ? (t.childOrder = e.childOrder.map((e) => e))
                : (t.childOrder = []),
              void 0 !== e.childSize && (t.childSize = e.childSize),
              void 0 !== e.minPrefixLength &&
                (t.minPrefixLength = e.minPrefixLength),
              void 0 !== e.maxPrefixLength &&
                (t.maxPrefixLength = e.maxPrefixLength),
              void 0 !== e.emptyChild &&
                (t.emptyChild = C(
                  void 0 !== e.emptyChild ? e.emptyChild : new Uint8Array(),
                )),
              void 0 !== e.hash && (t.hash = u(e.hash)),
              t
            );
          },
          fromPartial(e) {
            var t, n, o, s, a;
            const i = Object.assign({}, g);
            if (
              ((i.childOrder = []),
              void 0 !== e.childOrder && null !== e.childOrder)
            )
              for (const r of e.childOrder) i.childOrder.push(r);
            return (
              (i.childSize =
                null !== (t = e.childSize) && void 0 !== t ? t : 0),
              (i.minPrefixLength =
                null !== (n = e.minPrefixLength) && void 0 !== n ? n : 0),
              (i.maxPrefixLength =
                null !== (o = e.maxPrefixLength) && void 0 !== o ? o : 0),
              (i.emptyChild =
                null !== (s = e.emptyChild) && void 0 !== s
                  ? s
                  : new Uint8Array()),
              (i.hash = null !== (a = e.hash) && void 0 !== a ? a : 0),
              i
            );
          },
        };
        const O = {};
        t.BatchProof = {
          encode(e, n) {
            void 0 === n && (n = a.default.Writer.create());
            for (const o of e.entries)
              t.BatchEntry.encode(o, n.uint32(10).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, O);
            i.entries = [];
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.entries.push(t.BatchEntry.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, O);
            if (((n.entries = []), void 0 !== e.entries && null !== e.entries))
              for (const o of e.entries)
                n.entries.push(t.BatchEntry.fromJSON(o));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              e.entries
                ? (n.entries = e.entries.map((e) =>
                    e ? t.BatchEntry.toJSON(e) : void 0,
                  ))
                : (n.entries = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, O);
            if (((n.entries = []), void 0 !== e.entries && null !== e.entries))
              for (const o of e.entries)
                n.entries.push(t.BatchEntry.fromPartial(o));
            return n;
          },
        };
        const y = {};
        t.BatchEntry = {
          encode(e, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              void 0 !== e.exist &&
                t.ExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(),
              void 0 !== e.nonexist &&
                t.NonExistenceProof.encode(
                  e.nonexist,
                  n.uint32(18).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, y);
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.exist = t.ExistenceProof.decode(o, o.uint32());
                  break;
                case 2:
                  i.nonexist = t.NonExistenceProof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, y);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (n.exist = t.ExistenceProof.fromJSON(e.exist))
                : (n.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (n.nonexist = t.NonExistenceProof.fromJSON(e.nonexist))
                : (n.nonexist = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.exist &&
                (n.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0),
              void 0 !== e.nonexist &&
                (n.nonexist = e.nonexist
                  ? t.NonExistenceProof.toJSON(e.nonexist)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, y);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (n.exist = t.ExistenceProof.fromPartial(e.exist))
                : (n.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (n.nonexist = t.NonExistenceProof.fromPartial(e.nonexist))
                : (n.nonexist = void 0),
              n
            );
          },
        };
        const S = {};
        t.CompressedBatchProof = {
          encode(e, n) {
            void 0 === n && (n = a.default.Writer.create());
            for (const o of e.entries)
              t.CompressedBatchEntry.encode(o, n.uint32(10).fork()).ldelim();
            for (const o of e.lookupInners)
              t.InnerOp.encode(o, n.uint32(18).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, S);
            ((i.entries = []), (i.lookupInners = []));
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.entries.push(t.CompressedBatchEntry.decode(o, o.uint32()));
                  break;
                case 2:
                  i.lookupInners.push(t.InnerOp.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, S);
            if (
              ((n.entries = []),
              (n.lookupInners = []),
              void 0 !== e.entries && null !== e.entries)
            )
              for (const o of e.entries)
                n.entries.push(t.CompressedBatchEntry.fromJSON(o));
            if (void 0 !== e.lookupInners && null !== e.lookupInners)
              for (const o of e.lookupInners)
                n.lookupInners.push(t.InnerOp.fromJSON(o));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              e.entries
                ? (n.entries = e.entries.map((e) =>
                    e ? t.CompressedBatchEntry.toJSON(e) : void 0,
                  ))
                : (n.entries = []),
              e.lookupInners
                ? (n.lookupInners = e.lookupInners.map((e) =>
                    e ? t.InnerOp.toJSON(e) : void 0,
                  ))
                : (n.lookupInners = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, S);
            if (((n.entries = []), void 0 !== e.entries && null !== e.entries))
              for (const o of e.entries)
                n.entries.push(t.CompressedBatchEntry.fromPartial(o));
            if (
              ((n.lookupInners = []),
              void 0 !== e.lookupInners && null !== e.lookupInners)
            )
              for (const o of e.lookupInners)
                n.lookupInners.push(t.InnerOp.fromPartial(o));
            return n;
          },
        };
        const k = {};
        t.CompressedBatchEntry = {
          encode(e, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              void 0 !== e.exist &&
                t.CompressedExistenceProof.encode(
                  e.exist,
                  n.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.nonexist &&
                t.CompressedNonExistenceProof.encode(
                  e.nonexist,
                  n.uint32(18).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, k);
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.exist = t.CompressedExistenceProof.decode(o, o.uint32());
                  break;
                case 2:
                  i.nonexist = t.CompressedNonExistenceProof.decode(
                    o,
                    o.uint32(),
                  );
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, k);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (n.exist = t.CompressedExistenceProof.fromJSON(e.exist))
                : (n.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (n.nonexist = t.CompressedNonExistenceProof.fromJSON(
                    e.nonexist,
                  ))
                : (n.nonexist = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.exist &&
                (n.exist = e.exist
                  ? t.CompressedExistenceProof.toJSON(e.exist)
                  : void 0),
              void 0 !== e.nonexist &&
                (n.nonexist = e.nonexist
                  ? t.CompressedNonExistenceProof.toJSON(e.nonexist)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, k);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (n.exist = t.CompressedExistenceProof.fromPartial(e.exist))
                : (n.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (n.nonexist = t.CompressedNonExistenceProof.fromPartial(
                    e.nonexist,
                  ))
                : (n.nonexist = void 0),
              n
            );
          },
        };
        const x = { path: 0 };
        t.CompressedExistenceProof = {
          encode(e, n) {
            (void 0 === n && (n = a.default.Writer.create()),
              0 !== e.key.length && n.uint32(10).bytes(e.key),
              0 !== e.value.length && n.uint32(18).bytes(e.value),
              void 0 !== e.leaf &&
                t.LeafOp.encode(e.leaf, n.uint32(26).fork()).ldelim(),
              n.uint32(34).fork());
            for (const t of e.path) n.int32(t);
            return (n.ldelim(), n);
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, x);
            ((i.path = []),
              (i.key = new Uint8Array()),
              (i.value = new Uint8Array()));
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = o.bytes();
                  break;
                case 2:
                  i.value = o.bytes();
                  break;
                case 3:
                  i.leaf = t.LeafOp.decode(o, o.uint32());
                  break;
                case 4:
                  if (2 === (7 & e)) {
                    const e = o.uint32() + o.pos;
                    while (o.pos < e) i.path.push(o.int32());
                  } else i.path.push(o.int32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, x);
            if (
              ((n.path = []),
              (n.key = new Uint8Array()),
              (n.value = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (n.key = E(e.key)),
              void 0 !== e.value && null !== e.value && (n.value = E(e.value)),
              void 0 !== e.leaf && null !== e.leaf
                ? (n.leaf = t.LeafOp.fromJSON(e.leaf))
                : (n.leaf = void 0),
              void 0 !== e.path && null !== e.path)
            )
              for (const t of e.path) n.path.push(Number(t));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.key &&
                (n.key = C(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (n.value = C(void 0 !== e.value ? e.value : new Uint8Array())),
              void 0 !== e.leaf &&
                (n.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0),
              e.path ? (n.path = e.path.map((e) => e)) : (n.path = []),
              n
            );
          },
          fromPartial(e) {
            var n, o;
            const s = Object.assign({}, x);
            if (
              ((s.key =
                null !== (n = e.key) && void 0 !== n ? n : new Uint8Array()),
              (s.value =
                null !== (o = e.value) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.leaf && null !== e.leaf
                ? (s.leaf = t.LeafOp.fromPartial(e.leaf))
                : (s.leaf = void 0),
              (s.path = []),
              void 0 !== e.path && null !== e.path)
            )
              for (const t of e.path) s.path.push(t);
            return s;
          },
        };
        const P = {};
        t.CompressedNonExistenceProof = {
          encode(e, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              0 !== e.key.length && n.uint32(10).bytes(e.key),
              void 0 !== e.left &&
                t.CompressedExistenceProof.encode(
                  e.left,
                  n.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.right &&
                t.CompressedExistenceProof.encode(
                  e.right,
                  n.uint32(26).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof a.default.Reader ? e : new a.default.Reader(e);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, P);
            i.key = new Uint8Array();
            while (o.pos < s) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = o.bytes();
                  break;
                case 2:
                  i.left = t.CompressedExistenceProof.decode(o, o.uint32());
                  break;
                case 3:
                  i.right = t.CompressedExistenceProof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const n = Object.assign({}, P);
            return (
              (n.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (n.key = E(e.key)),
              void 0 !== e.left && null !== e.left
                ? (n.left = t.CompressedExistenceProof.fromJSON(e.left))
                : (n.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (n.right = t.CompressedExistenceProof.fromJSON(e.right))
                : (n.right = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.key &&
                (n.key = C(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.left &&
                (n.left = e.left
                  ? t.CompressedExistenceProof.toJSON(e.left)
                  : void 0),
              void 0 !== e.right &&
                (n.right = e.right
                  ? t.CompressedExistenceProof.toJSON(e.right)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            var n;
            const o = Object.assign({}, P);
            return (
              (o.key =
                null !== (n = e.key) && void 0 !== n ? n : new Uint8Array()),
              void 0 !== e.left && null !== e.left
                ? (o.left = t.CompressedExistenceProof.fromPartial(e.left))
                : (o.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (o.right = t.CompressedExistenceProof.fromPartial(e.right))
                : (o.right = void 0),
              o
            );
          },
        };
        var R = (() => {
          if ("undefined" !== typeof R) return R;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const N =
          R.atob || ((e) => R.Buffer.from(e, "base64").toString("binary"));
        function E(e) {
          const t = N(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const w =
          R.btoa || ((e) => R.Buffer.from(e, "binary").toString("base64"));
        function C(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return w(t.join(""));
        }
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure());
      }).call(this, n(13));
    },
    4426: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QueryClientImpl =
          t.QueryParamsResponse =
          t.QueryParamsRequest =
          t.QueryAccountResponse =
          t.QueryAccountRequest =
          t.protobufPackage =
            void 0));
      const s = o(n(2754)),
        a = o(n(2755)),
        i = n(2781),
        r = n(3323);
      t.protobufPackage = "cosmos.auth.v1beta1";
      const d = { address: "" };
      t.QueryAccountRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, d);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.address = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.address && (t.address = e.address), t);
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, d);
          return (
            (n.address = null !== (t = e.address) && void 0 !== t ? t : ""),
            n
          );
        },
      };
      const u = {};
      t.QueryAccountResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.account &&
              i.Any.encode(e.account, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.account = i.Any.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.account && null !== e.account
              ? (t.account = i.Any.fromJSON(e.account))
              : (t.account = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.account &&
              (t.account = e.account ? i.Any.toJSON(e.account) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.account && null !== e.account
              ? (t.account = i.Any.fromPartial(e.account))
              : (t.account = void 0),
            t
          );
        },
      };
      const c = {};
      t.QueryParamsRequest = {
        encode(e, t) {
          return (void 0 === t && (t = a.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, c);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return t;
        },
      };
      const l = {};
      t.QueryParamsResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.params &&
              r.Params.encode(e.params, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, l);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.params = r.Params.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.params && null !== e.params
              ? (t.params = r.Params.fromJSON(e.params))
              : (t.params = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.params &&
              (t.params = e.params ? r.Params.toJSON(e.params) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.params && null !== e.params
              ? (t.params = r.Params.fromPartial(e.params))
              : (t.params = void 0),
            t
          );
        },
      };
      class QueryClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Account = this.Account.bind(this)),
            (this.Params = this.Params.bind(this)));
        }
        Account(e) {
          const n = t.QueryAccountRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", n);
          return o.then((e) =>
            t.QueryAccountResponse.decode(new a.default.Reader(e)),
          );
        }
        Params(e) {
          const n = t.QueryParamsRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", n);
          return o.then((e) =>
            t.QueryParamsResponse.decode(new a.default.Reader(e)),
          );
        }
      }
      ((t.QueryClientImpl = QueryClientImpl),
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure()));
    },
    4428: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QueryClientImpl =
          t.QueryDenomMetadataResponse =
          t.QueryDenomMetadataRequest =
          t.QueryDenomsMetadataResponse =
          t.QueryDenomsMetadataRequest =
          t.QueryParamsResponse =
          t.QueryParamsRequest =
          t.QuerySupplyOfResponse =
          t.QuerySupplyOfRequest =
          t.QueryTotalSupplyResponse =
          t.QueryTotalSupplyRequest =
          t.QueryAllBalancesResponse =
          t.QueryAllBalancesRequest =
          t.QueryBalanceResponse =
          t.QueryBalanceRequest =
          t.protobufPackage =
            void 0));
      const s = o(n(2754)),
        a = o(n(2755)),
        i = n(2801),
        r = n(2926),
        d = n(3379);
      t.protobufPackage = "cosmos.bank.v1beta1";
      const u = { address: "", denom: "" };
      t.QueryBalanceRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address),
            "" !== e.denom && t.uint32(18).string(e.denom),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.address = n.string();
                break;
              case 2:
                s.denom = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            void 0 !== e.denom && (t.denom = e.denom),
            t
          );
        },
        fromPartial(e) {
          var t, n;
          const o = Object.assign({}, u);
          return (
            (o.address = null !== (t = e.address) && void 0 !== t ? t : ""),
            (o.denom = null !== (n = e.denom) && void 0 !== n ? n : ""),
            o
          );
        },
      };
      const c = {};
      t.QueryBalanceResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.balance &&
              i.Coin.encode(e.balance, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, c);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.balance = i.Coin.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.balance && null !== e.balance
              ? (t.balance = i.Coin.fromJSON(e.balance))
              : (t.balance = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.balance &&
              (t.balance = e.balance ? i.Coin.toJSON(e.balance) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.balance && null !== e.balance
              ? (t.balance = i.Coin.fromPartial(e.balance))
              : (t.balance = void 0),
            t
          );
        },
      };
      const l = { address: "" };
      t.QueryAllBalancesRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address),
            void 0 !== e.pagination &&
              r.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, l);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.address = n.string();
                break;
              case 2:
                s.pagination = r.PageRequest.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageRequest.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? r.PageRequest.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, l);
          return (
            (n.address = null !== (t = e.address) && void 0 !== t ? t : ""),
            void 0 !== e.pagination && null !== e.pagination
              ? (n.pagination = r.PageRequest.fromPartial(e.pagination))
              : (n.pagination = void 0),
            n
          );
        },
      };
      const f = {};
      t.QueryAllBalancesResponse = {
        encode(e, t) {
          void 0 === t && (t = a.default.Writer.create());
          for (const n of e.balances)
            i.Coin.encode(n, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.pagination &&
              r.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, f);
          s.balances = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.balances.push(i.Coin.decode(n, n.uint32()));
                break;
              case 2:
                s.pagination = r.PageResponse.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          if (((t.balances = []), void 0 !== e.balances && null !== e.balances))
            for (const n of e.balances) t.balances.push(i.Coin.fromJSON(n));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageResponse.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.balances
              ? (t.balances = e.balances.map((e) =>
                  e ? i.Coin.toJSON(e) : void 0,
                ))
              : (t.balances = []),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? r.PageResponse.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          if (((t.balances = []), void 0 !== e.balances && null !== e.balances))
            for (const n of e.balances) t.balances.push(i.Coin.fromPartial(n));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageResponse.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const p = {};
      t.QueryTotalSupplyRequest = {
        encode(e, t) {
          return (void 0 === t && (t = a.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, p);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return t;
        },
      };
      const m = {};
      t.QueryTotalSupplyResponse = {
        encode(e, t) {
          void 0 === t && (t = a.default.Writer.create());
          for (const n of e.supply)
            i.Coin.encode(n, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, m);
          s.supply = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.supply.push(i.Coin.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          if (((t.supply = []), void 0 !== e.supply && null !== e.supply))
            for (const n of e.supply) t.supply.push(i.Coin.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.supply
              ? (t.supply = e.supply.map((e) =>
                  e ? i.Coin.toJSON(e) : void 0,
                ))
              : (t.supply = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          if (((t.supply = []), void 0 !== e.supply && null !== e.supply))
            for (const n of e.supply) t.supply.push(i.Coin.fromPartial(n));
          return t;
        },
      };
      const h = { denom: "" };
      t.QuerySupplyOfRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, h);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.denom = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.denom && (t.denom = e.denom), t);
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, h);
          return (
            (n.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
            n
          );
        },
      };
      const v = {};
      t.QuerySupplyOfResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.amount &&
              i.Coin.encode(e.amount, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, v);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.amount = i.Coin.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = i.Coin.fromJSON(e.amount))
              : (t.amount = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.amount &&
              (t.amount = e.amount ? i.Coin.toJSON(e.amount) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = i.Coin.fromPartial(e.amount))
              : (t.amount = void 0),
            t
          );
        },
      };
      const b = {};
      t.QueryParamsRequest = {
        encode(e, t) {
          return (void 0 === t && (t = a.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, b);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, b);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, b);
          return t;
        },
      };
      const g = {};
      t.QueryParamsResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.params &&
              d.Params.encode(e.params, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, g);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.params = d.Params.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          return (
            void 0 !== e.params && null !== e.params
              ? (t.params = d.Params.fromJSON(e.params))
              : (t.params = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.params &&
              (t.params = e.params ? d.Params.toJSON(e.params) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          return (
            void 0 !== e.params && null !== e.params
              ? (t.params = d.Params.fromPartial(e.params))
              : (t.params = void 0),
            t
          );
        },
      };
      const O = {};
      t.QueryDenomsMetadataRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.pagination &&
              r.PageRequest.encode(e.pagination, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, O);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.pagination = r.PageRequest.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageRequest.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? r.PageRequest.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageRequest.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const y = {};
      t.QueryDenomsMetadataResponse = {
        encode(e, t) {
          void 0 === t && (t = a.default.Writer.create());
          for (const n of e.metadatas)
            d.Metadata.encode(n, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.pagination &&
              r.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, y);
          s.metadatas = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.metadatas.push(d.Metadata.decode(n, n.uint32()));
                break;
              case 2:
                s.pagination = r.PageResponse.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, y);
          if (
            ((t.metadatas = []), void 0 !== e.metadatas && null !== e.metadatas)
          )
            for (const n of e.metadatas)
              t.metadatas.push(d.Metadata.fromJSON(n));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageResponse.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.metadatas
              ? (t.metadatas = e.metadatas.map((e) =>
                  e ? d.Metadata.toJSON(e) : void 0,
                ))
              : (t.metadatas = []),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? r.PageResponse.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, y);
          if (
            ((t.metadatas = []), void 0 !== e.metadatas && null !== e.metadatas)
          )
            for (const n of e.metadatas)
              t.metadatas.push(d.Metadata.fromPartial(n));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = r.PageResponse.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const S = { denom: "" };
      t.QueryDenomMetadataRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, S);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.denom = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.denom && (t.denom = e.denom), t);
        },
        fromPartial(e) {
          var t;
          const n = Object.assign({}, S);
          return (
            (n.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
            n
          );
        },
      };
      const k = {};
      t.QueryDenomMetadataResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = a.default.Writer.create()),
            void 0 !== e.metadata &&
              d.Metadata.encode(e.metadata, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const s = Object.assign({}, k);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.metadata = d.Metadata.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, k);
          return (
            void 0 !== e.metadata && null !== e.metadata
              ? (t.metadata = d.Metadata.fromJSON(e.metadata))
              : (t.metadata = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.metadata &&
              (t.metadata = e.metadata
                ? d.Metadata.toJSON(e.metadata)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, k);
          return (
            void 0 !== e.metadata && null !== e.metadata
              ? (t.metadata = d.Metadata.fromPartial(e.metadata))
              : (t.metadata = void 0),
            t
          );
        },
      };
      class QueryClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Balance = this.Balance.bind(this)),
            (this.AllBalances = this.AllBalances.bind(this)),
            (this.TotalSupply = this.TotalSupply.bind(this)),
            (this.SupplyOf = this.SupplyOf.bind(this)),
            (this.Params = this.Params.bind(this)),
            (this.DenomMetadata = this.DenomMetadata.bind(this)),
            (this.DenomsMetadata = this.DenomsMetadata.bind(this)));
        }
        Balance(e) {
          const n = t.QueryBalanceRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", n);
          return o.then((e) =>
            t.QueryBalanceResponse.decode(new a.default.Reader(e)),
          );
        }
        AllBalances(e) {
          const n = t.QueryAllBalancesRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", n);
          return o.then((e) =>
            t.QueryAllBalancesResponse.decode(new a.default.Reader(e)),
          );
        }
        TotalSupply(e) {
          const n = t.QueryTotalSupplyRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", n);
          return o.then((e) =>
            t.QueryTotalSupplyResponse.decode(new a.default.Reader(e)),
          );
        }
        SupplyOf(e) {
          const n = t.QuerySupplyOfRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", n);
          return o.then((e) =>
            t.QuerySupplyOfResponse.decode(new a.default.Reader(e)),
          );
        }
        Params(e) {
          const n = t.QueryParamsRequest.encode(e).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", n);
          return o.then((e) =>
            t.QueryParamsResponse.decode(new a.default.Reader(e)),
          );
        }
        DenomMetadata(e) {
          const n = t.QueryDenomMetadataRequest.encode(e).finish(),
            o = this.rpc.request(
              "cosmos.bank.v1beta1.Query",
              "DenomMetadata",
              n,
            );
          return o.then((e) =>
            t.QueryDenomMetadataResponse.decode(new a.default.Reader(e)),
          );
        }
        DenomsMetadata(e) {
          const n = t.QueryDenomsMetadataRequest.encode(e).finish(),
            o = this.rpc.request(
              "cosmos.bank.v1beta1.Query",
              "DenomsMetadata",
              n,
            );
          return o.then((e) =>
            t.QueryDenomsMetadataResponse.decode(new a.default.Reader(e)),
          );
        }
      }
      ((t.QueryClientImpl = QueryClientImpl),
        a.default.util.Long !== s.default &&
          ((a.default.util.Long = s.default), a.default.configure()));
    },
  },
]);
