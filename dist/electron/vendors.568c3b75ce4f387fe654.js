(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [294, 293],
  {
    3103: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MsgClientImpl =
            t.MsgClearContractAdminResponse =
            t.MsgClearContractAdmin =
            t.MsgUpdateContractAdminResponse =
            t.MsgUpdateContractAdmin =
            t.MsgMigrateContractResponse =
            t.MsgMigrateContract =
            t.MsgExecuteContractResponse =
            t.MsgExecuteContract =
            t.MsgInstantiateContractResponse =
            t.MsgInstantiateContract =
            t.MsgMigrateCodeResponse =
            t.MsgMigrateCode =
            t.MsgStoreCodeResponse =
            t.MsgStoreCode =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          r = n(o(2755)),
          i = o(3101);
        t.protobufPackage = "terra.wasm.v1beta1";
        const s = { sender: "" };
        t.MsgStoreCode = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              0 !== e.wasmByteCode.length && t.uint32(18).bytes(e.wasmByteCode),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, s);
            a.wasmByteCode = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.sender = o.string();
                  break;
                case 2:
                  a.wasmByteCode = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
            return (
              (t.wasmByteCode = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.wasmByteCode &&
                null !== e.wasmByteCode &&
                (t.wasmByteCode = S(e.wasmByteCode)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.wasmByteCode &&
                (t.wasmByteCode = P(
                  void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, s);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.wasmByteCode && null !== e.wasmByteCode
                ? (t.wasmByteCode = e.wasmByteCode)
                : (t.wasmByteCode = new Uint8Array()),
              t
            );
          },
        };
        const d = { codeId: a.default.UZERO };
        t.MsgStoreCodeResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              e.codeId.isZero() || t.uint32(8).uint64(e.codeId),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, d);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.codeId = o.uint64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = a.default.fromString(e.codeId))
                : (t.codeId = a.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || a.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = a.default.UZERO),
              t
            );
          },
        };
        const l = { codeId: a.default.UZERO, sender: "" };
        t.MsgMigrateCode = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              e.codeId.isZero() || t.uint32(8).uint64(e.codeId),
              "" !== e.sender && t.uint32(18).string(e.sender),
              0 !== e.wasmByteCode.length && t.uint32(26).bytes(e.wasmByteCode),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, l);
            a.wasmByteCode = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.codeId = o.uint64();
                  break;
                case 2:
                  a.sender = o.string();
                  break;
                case 3:
                  a.wasmByteCode = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.wasmByteCode = new Uint8Array()),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = a.default.fromString(e.codeId))
                : (t.codeId = a.default.UZERO),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.wasmByteCode &&
                null !== e.wasmByteCode &&
                (t.wasmByteCode = S(e.wasmByteCode)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || a.default.UZERO).toString()),
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.wasmByteCode &&
                (t.wasmByteCode = P(
                  void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = a.default.UZERO),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.wasmByteCode && null !== e.wasmByteCode
                ? (t.wasmByteCode = e.wasmByteCode)
                : (t.wasmByteCode = new Uint8Array()),
              t
            );
          },
        };
        const c = {};
        t.MsgMigrateCodeResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, c);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
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
        const u = { sender: "", admin: "", codeId: a.default.UZERO };
        t.MsgInstantiateContract = {
          encode(e, t) {
            (void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.admin && t.uint32(18).string(e.admin),
              e.codeId.isZero() || t.uint32(24).uint64(e.codeId),
              0 !== e.initMsg.length && t.uint32(34).bytes(e.initMsg));
            for (const o of e.initCoins)
              i.Coin.encode(o, t.uint32(42).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, u);
            ((a.initCoins = []), (a.initMsg = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.sender = o.string();
                  break;
                case 2:
                  a.admin = o.string();
                  break;
                case 3:
                  a.codeId = o.uint64();
                  break;
                case 4:
                  a.initMsg = o.bytes();
                  break;
                case 5:
                  a.initCoins.push(i.Coin.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            if (
              ((t.initCoins = []),
              (t.initMsg = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = String(e.admin))
                : (t.admin = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = a.default.fromString(e.codeId))
                : (t.codeId = a.default.UZERO),
              void 0 !== e.initMsg &&
                null !== e.initMsg &&
                (t.initMsg = S(e.initMsg)),
              void 0 !== e.initCoins && null !== e.initCoins)
            )
              for (const o of e.initCoins) t.initCoins.push(i.Coin.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.admin && (t.admin = e.admin),
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || a.default.UZERO).toString()),
              void 0 !== e.initMsg &&
                (t.initMsg = P(
                  void 0 !== e.initMsg ? e.initMsg : new Uint8Array(),
                )),
              e.initCoins
                ? (t.initCoins = e.initCoins.map((e) =>
                    e ? i.Coin.toJSON(e) : void 0,
                  ))
                : (t.initCoins = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            if (
              ((t.initCoins = []),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = e.admin)
                : (t.admin = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = a.default.UZERO),
              void 0 !== e.initMsg && null !== e.initMsg
                ? (t.initMsg = e.initMsg)
                : (t.initMsg = new Uint8Array()),
              void 0 !== e.initCoins && null !== e.initCoins)
            )
              for (const o of e.initCoins)
                t.initCoins.push(i.Coin.fromPartial(o));
            return t;
          },
        };
        const f = { contractAddress: "" };
        t.MsgInstantiateContractResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.contractAddress &&
                t.uint32(10).string(e.contractAddress),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, f);
            a.data = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.contractAddress = o.string();
                  break;
                case 2:
                  a.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.contractAddress && null !== e.contractAddress
                ? (t.contractAddress = String(e.contractAddress))
                : (t.contractAddress = ""),
              void 0 !== e.data && null !== e.data && (t.data = S(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.contractAddress &&
                (t.contractAddress = e.contractAddress),
              void 0 !== e.data &&
                (t.data = P(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.contractAddress && null !== e.contractAddress
                ? (t.contractAddress = e.contractAddress)
                : (t.contractAddress = ""),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const g = { sender: "", contract: "" };
        t.MsgExecuteContract = {
          encode(e, t) {
            (void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.contract && t.uint32(18).string(e.contract),
              0 !== e.executeMsg.length && t.uint32(26).bytes(e.executeMsg));
            for (const o of e.coins)
              i.Coin.encode(o, t.uint32(42).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, g);
            ((a.coins = []), (a.executeMsg = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.sender = o.string();
                  break;
                case 2:
                  a.contract = o.string();
                  break;
                case 3:
                  a.executeMsg = o.bytes();
                  break;
                case 5:
                  a.coins.push(i.Coin.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            if (
              ((t.coins = []),
              (t.executeMsg = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.executeMsg &&
                null !== e.executeMsg &&
                (t.executeMsg = S(e.executeMsg)),
              void 0 !== e.coins && null !== e.coins)
            )
              for (const o of e.coins) t.coins.push(i.Coin.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.executeMsg &&
                (t.executeMsg = P(
                  void 0 !== e.executeMsg ? e.executeMsg : new Uint8Array(),
                )),
              e.coins
                ? (t.coins = e.coins.map((e) =>
                    e ? i.Coin.toJSON(e) : void 0,
                  ))
                : (t.coins = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            if (
              ((t.coins = []),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.executeMsg && null !== e.executeMsg
                ? (t.executeMsg = e.executeMsg)
                : (t.executeMsg = new Uint8Array()),
              void 0 !== e.coins && null !== e.coins)
            )
              for (const o of e.coins) t.coins.push(i.Coin.fromPartial(o));
            return t;
          },
        };
        const v = {};
        t.MsgExecuteContractResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.data.length && t.uint32(10).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, v);
            a.data = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = S(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = P(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const p = { admin: "", contract: "", newCodeId: a.default.UZERO };
        t.MsgMigrateContract = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.admin && t.uint32(10).string(e.admin),
              "" !== e.contract && t.uint32(18).string(e.contract),
              e.newCodeId.isZero() || t.uint32(24).uint64(e.newCodeId),
              0 !== e.migrateMsg.length && t.uint32(34).bytes(e.migrateMsg),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, p);
            a.migrateMsg = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.admin = o.string();
                  break;
                case 2:
                  a.contract = o.string();
                  break;
                case 3:
                  a.newCodeId = o.uint64();
                  break;
                case 4:
                  a.migrateMsg = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            return (
              (t.migrateMsg = new Uint8Array()),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = String(e.admin))
                : (t.admin = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.newCodeId && null !== e.newCodeId
                ? (t.newCodeId = a.default.fromString(e.newCodeId))
                : (t.newCodeId = a.default.UZERO),
              void 0 !== e.migrateMsg &&
                null !== e.migrateMsg &&
                (t.migrateMsg = S(e.migrateMsg)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.admin && (t.admin = e.admin),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.newCodeId &&
                (t.newCodeId = (e.newCodeId || a.default.UZERO).toString()),
              void 0 !== e.migrateMsg &&
                (t.migrateMsg = P(
                  void 0 !== e.migrateMsg ? e.migrateMsg : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            return (
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = e.admin)
                : (t.admin = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.newCodeId && null !== e.newCodeId
                ? (t.newCodeId = e.newCodeId)
                : (t.newCodeId = a.default.UZERO),
              void 0 !== e.migrateMsg && null !== e.migrateMsg
                ? (t.migrateMsg = e.migrateMsg)
                : (t.migrateMsg = new Uint8Array()),
              t
            );
          },
        };
        const m = {};
        t.MsgMigrateContractResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.data.length && t.uint32(10).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, m);
            a.data = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = S(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = P(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const h = { admin: "", newAdmin: "", contract: "" };
        t.MsgUpdateContractAdmin = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.admin && t.uint32(10).string(e.admin),
              "" !== e.newAdmin && t.uint32(18).string(e.newAdmin),
              "" !== e.contract && t.uint32(26).string(e.contract),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, h);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.admin = o.string();
                  break;
                case 2:
                  a.newAdmin = o.string();
                  break;
                case 3:
                  a.contract = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = String(e.admin))
                : (t.admin = ""),
              void 0 !== e.newAdmin && null !== e.newAdmin
                ? (t.newAdmin = String(e.newAdmin))
                : (t.newAdmin = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.admin && (t.admin = e.admin),
              void 0 !== e.newAdmin && (t.newAdmin = e.newAdmin),
              void 0 !== e.contract && (t.contract = e.contract),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = e.admin)
                : (t.admin = ""),
              void 0 !== e.newAdmin && null !== e.newAdmin
                ? (t.newAdmin = e.newAdmin)
                : (t.newAdmin = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              t
            );
          },
        };
        const b = {};
        t.MsgUpdateContractAdminResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, b);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
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
        const w = { admin: "", contract: "" };
        t.MsgClearContractAdmin = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.admin && t.uint32(10).string(e.admin),
              "" !== e.contract && t.uint32(18).string(e.contract),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, w);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.admin = o.string();
                  break;
                case 2:
                  a.contract = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, w);
            return (
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = String(e.admin))
                : (t.admin = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.admin && (t.admin = e.admin),
              void 0 !== e.contract && (t.contract = e.contract),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, w);
            return (
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = e.admin)
                : (t.admin = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              t
            );
          },
        };
        const k = {};
        t.MsgClearContractAdminResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, k);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, k);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, k);
            return t;
          },
        };
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.StoreCode = this.StoreCode.bind(this)),
              (this.MigrateCode = this.MigrateCode.bind(this)),
              (this.InstantiateContract = this.InstantiateContract.bind(this)),
              (this.ExecuteContract = this.ExecuteContract.bind(this)),
              (this.MigrateContract = this.MigrateContract.bind(this)),
              (this.UpdateContractAdmin = this.UpdateContractAdmin.bind(this)),
              (this.ClearContractAdmin = this.ClearContractAdmin.bind(this)));
          }
          StoreCode(e) {
            const o = t.MsgStoreCode.encode(e).finish(),
              n = this.rpc.request("terra.wasm.v1beta1.Msg", "StoreCode", o);
            return n.then((e) =>
              t.MsgStoreCodeResponse.decode(new r.default.Reader(e)),
            );
          }
          MigrateCode(e) {
            const o = t.MsgMigrateCode.encode(e).finish(),
              n = this.rpc.request("terra.wasm.v1beta1.Msg", "MigrateCode", o);
            return n.then((e) =>
              t.MsgMigrateCodeResponse.decode(new r.default.Reader(e)),
            );
          }
          InstantiateContract(e) {
            const o = t.MsgInstantiateContract.encode(e).finish(),
              n = this.rpc.request(
                "terra.wasm.v1beta1.Msg",
                "InstantiateContract",
                o,
              );
            return n.then((e) =>
              t.MsgInstantiateContractResponse.decode(new r.default.Reader(e)),
            );
          }
          ExecuteContract(e) {
            const o = t.MsgExecuteContract.encode(e).finish(),
              n = this.rpc.request(
                "terra.wasm.v1beta1.Msg",
                "ExecuteContract",
                o,
              );
            return n.then((e) =>
              t.MsgExecuteContractResponse.decode(new r.default.Reader(e)),
            );
          }
          MigrateContract(e) {
            const o = t.MsgMigrateContract.encode(e).finish(),
              n = this.rpc.request(
                "terra.wasm.v1beta1.Msg",
                "MigrateContract",
                o,
              );
            return n.then((e) =>
              t.MsgMigrateContractResponse.decode(new r.default.Reader(e)),
            );
          }
          UpdateContractAdmin(e) {
            const o = t.MsgUpdateContractAdmin.encode(e).finish(),
              n = this.rpc.request(
                "terra.wasm.v1beta1.Msg",
                "UpdateContractAdmin",
                o,
              );
            return n.then((e) =>
              t.MsgUpdateContractAdminResponse.decode(new r.default.Reader(e)),
            );
          }
          ClearContractAdmin(e) {
            const o = t.MsgClearContractAdmin.encode(e).finish(),
              n = this.rpc.request(
                "terra.wasm.v1beta1.Msg",
                "ClearContractAdmin",
                o,
              );
            return n.then((e) =>
              t.MsgClearContractAdminResponse.decode(new r.default.Reader(e)),
            );
          }
        }
        t.MsgClientImpl = MsgClientImpl;
        var y = (() => {
          if ("undefined" !== typeof y) return y;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const O =
          y.atob || ((e) => y.Buffer.from(e, "base64").toString("binary"));
        function S(e) {
          const t = O(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const R =
          y.btoa || ((e) => y.Buffer.from(e, "binary").toString("base64"));
        function P(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return R(t.join(""));
        }
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure());
      }).call(this, o(13));
    },
    3676: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgClientImpl =
          t.MsgDelegateFeedConsentResponse =
          t.MsgDelegateFeedConsent =
          t.MsgAggregateExchangeRateVoteResponse =
          t.MsgAggregateExchangeRateVote =
          t.MsgAggregateExchangeRatePrevoteResponse =
          t.MsgAggregateExchangeRatePrevote =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        r = n(o(2755));
      t.protobufPackage = "terra.oracle.v1beta1";
      const i = { hash: "", feeder: "", validator: "" };
      t.MsgAggregateExchangeRatePrevote = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.hash && t.uint32(10).string(e.hash),
            "" !== e.feeder && t.uint32(18).string(e.feeder),
            "" !== e.validator && t.uint32(26).string(e.validator),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, i);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.hash = o.string();
                break;
              case 2:
                a.feeder = o.string();
                break;
              case 3:
                a.validator = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.hash && null !== e.hash
              ? (t.hash = String(e.hash))
              : (t.hash = ""),
            void 0 !== e.feeder && null !== e.feeder
              ? (t.feeder = String(e.feeder))
              : (t.feeder = ""),
            void 0 !== e.validator && null !== e.validator
              ? (t.validator = String(e.validator))
              : (t.validator = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.hash && (t.hash = e.hash),
            void 0 !== e.feeder && (t.feeder = e.feeder),
            void 0 !== e.validator && (t.validator = e.validator),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.hash && null !== e.hash
              ? (t.hash = e.hash)
              : (t.hash = ""),
            void 0 !== e.feeder && null !== e.feeder
              ? (t.feeder = e.feeder)
              : (t.feeder = ""),
            void 0 !== e.validator && null !== e.validator
              ? (t.validator = e.validator)
              : (t.validator = ""),
            t
          );
        },
      };
      const s = {};
      t.MsgAggregateExchangeRatePrevoteResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, s);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return t;
        },
      };
      const d = { salt: "", exchangeRates: "", feeder: "", validator: "" };
      t.MsgAggregateExchangeRateVote = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.salt && t.uint32(10).string(e.salt),
            "" !== e.exchangeRates && t.uint32(18).string(e.exchangeRates),
            "" !== e.feeder && t.uint32(26).string(e.feeder),
            "" !== e.validator && t.uint32(34).string(e.validator),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.salt = o.string();
                break;
              case 2:
                a.exchangeRates = o.string();
                break;
              case 3:
                a.feeder = o.string();
                break;
              case 4:
                a.validator = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.salt && null !== e.salt
              ? (t.salt = String(e.salt))
              : (t.salt = ""),
            void 0 !== e.exchangeRates && null !== e.exchangeRates
              ? (t.exchangeRates = String(e.exchangeRates))
              : (t.exchangeRates = ""),
            void 0 !== e.feeder && null !== e.feeder
              ? (t.feeder = String(e.feeder))
              : (t.feeder = ""),
            void 0 !== e.validator && null !== e.validator
              ? (t.validator = String(e.validator))
              : (t.validator = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.salt && (t.salt = e.salt),
            void 0 !== e.exchangeRates && (t.exchangeRates = e.exchangeRates),
            void 0 !== e.feeder && (t.feeder = e.feeder),
            void 0 !== e.validator && (t.validator = e.validator),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.salt && null !== e.salt
              ? (t.salt = e.salt)
              : (t.salt = ""),
            void 0 !== e.exchangeRates && null !== e.exchangeRates
              ? (t.exchangeRates = e.exchangeRates)
              : (t.exchangeRates = ""),
            void 0 !== e.feeder && null !== e.feeder
              ? (t.feeder = e.feeder)
              : (t.feeder = ""),
            void 0 !== e.validator && null !== e.validator
              ? (t.validator = e.validator)
              : (t.validator = ""),
            t
          );
        },
      };
      const l = {};
      t.MsgAggregateExchangeRateVoteResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
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
      const c = { operator: "", delegate: "" };
      t.MsgDelegateFeedConsent = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.operator && t.uint32(10).string(e.operator),
            "" !== e.delegate && t.uint32(18).string(e.delegate),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.operator = o.string();
                break;
              case 2:
                a.delegate = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.operator && null !== e.operator
              ? (t.operator = String(e.operator))
              : (t.operator = ""),
            void 0 !== e.delegate && null !== e.delegate
              ? (t.delegate = String(e.delegate))
              : (t.delegate = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.operator && (t.operator = e.operator),
            void 0 !== e.delegate && (t.delegate = e.delegate),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.operator && null !== e.operator
              ? (t.operator = e.operator)
              : (t.operator = ""),
            void 0 !== e.delegate && null !== e.delegate
              ? (t.delegate = e.delegate)
              : (t.delegate = ""),
            t
          );
        },
      };
      const u = {};
      t.MsgDelegateFeedConsentResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, u);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
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
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.AggregateExchangeRatePrevote =
              this.AggregateExchangeRatePrevote.bind(this)),
            (this.AggregateExchangeRateVote =
              this.AggregateExchangeRateVote.bind(this)),
            (this.DelegateFeedConsent = this.DelegateFeedConsent.bind(this)));
        }
        AggregateExchangeRatePrevote(e) {
          const o = t.MsgAggregateExchangeRatePrevote.encode(e).finish(),
            n = this.rpc.request(
              "terra.oracle.v1beta1.Msg",
              "AggregateExchangeRatePrevote",
              o,
            );
          return n.then((e) =>
            t.MsgAggregateExchangeRatePrevoteResponse.decode(
              new r.default.Reader(e),
            ),
          );
        }
        AggregateExchangeRateVote(e) {
          const o = t.MsgAggregateExchangeRateVote.encode(e).finish(),
            n = this.rpc.request(
              "terra.oracle.v1beta1.Msg",
              "AggregateExchangeRateVote",
              o,
            );
          return n.then((e) =>
            t.MsgAggregateExchangeRateVoteResponse.decode(
              new r.default.Reader(e),
            ),
          );
        }
        DelegateFeedConsent(e) {
          const o = t.MsgDelegateFeedConsent.encode(e).finish(),
            n = this.rpc.request(
              "terra.oracle.v1beta1.Msg",
              "DelegateFeedConsent",
              o,
            );
          return n.then((e) =>
            t.MsgDelegateFeedConsentResponse.decode(new r.default.Reader(e)),
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
    4323: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgClientImpl =
          t.MsgSwapSendResponse =
          t.MsgSwapSend =
          t.MsgSwapResponse =
          t.MsgSwap =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        r = n(o(2755)),
        i = o(3101);
      t.protobufPackage = "terra.market.v1beta1";
      const s = { trader: "", askDenom: "" };
      t.MsgSwap = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.trader && t.uint32(10).string(e.trader),
            void 0 !== e.offerCoin &&
              i.Coin.encode(e.offerCoin, t.uint32(18).fork()).ldelim(),
            "" !== e.askDenom && t.uint32(26).string(e.askDenom),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, s);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.trader = o.string();
                break;
              case 2:
                a.offerCoin = i.Coin.decode(o, o.uint32());
                break;
              case 3:
                a.askDenom = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.trader && null !== e.trader
              ? (t.trader = String(e.trader))
              : (t.trader = ""),
            void 0 !== e.offerCoin && null !== e.offerCoin
              ? (t.offerCoin = i.Coin.fromJSON(e.offerCoin))
              : (t.offerCoin = void 0),
            void 0 !== e.askDenom && null !== e.askDenom
              ? (t.askDenom = String(e.askDenom))
              : (t.askDenom = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.trader && (t.trader = e.trader),
            void 0 !== e.offerCoin &&
              (t.offerCoin = e.offerCoin ? i.Coin.toJSON(e.offerCoin) : void 0),
            void 0 !== e.askDenom && (t.askDenom = e.askDenom),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.trader && null !== e.trader
              ? (t.trader = e.trader)
              : (t.trader = ""),
            void 0 !== e.offerCoin && null !== e.offerCoin
              ? (t.offerCoin = i.Coin.fromPartial(e.offerCoin))
              : (t.offerCoin = void 0),
            void 0 !== e.askDenom && null !== e.askDenom
              ? (t.askDenom = e.askDenom)
              : (t.askDenom = ""),
            t
          );
        },
      };
      const d = {};
      t.MsgSwapResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            void 0 !== e.swapCoin &&
              i.Coin.encode(e.swapCoin, t.uint32(10).fork()).ldelim(),
            void 0 !== e.swapFee &&
              i.Coin.encode(e.swapFee, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.swapCoin = i.Coin.decode(o, o.uint32());
                break;
              case 2:
                a.swapFee = i.Coin.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.swapCoin && null !== e.swapCoin
              ? (t.swapCoin = i.Coin.fromJSON(e.swapCoin))
              : (t.swapCoin = void 0),
            void 0 !== e.swapFee && null !== e.swapFee
              ? (t.swapFee = i.Coin.fromJSON(e.swapFee))
              : (t.swapFee = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.swapCoin &&
              (t.swapCoin = e.swapCoin ? i.Coin.toJSON(e.swapCoin) : void 0),
            void 0 !== e.swapFee &&
              (t.swapFee = e.swapFee ? i.Coin.toJSON(e.swapFee) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.swapCoin && null !== e.swapCoin
              ? (t.swapCoin = i.Coin.fromPartial(e.swapCoin))
              : (t.swapCoin = void 0),
            void 0 !== e.swapFee && null !== e.swapFee
              ? (t.swapFee = i.Coin.fromPartial(e.swapFee))
              : (t.swapFee = void 0),
            t
          );
        },
      };
      const l = { fromAddress: "", toAddress: "", askDenom: "" };
      t.MsgSwapSend = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.fromAddress && t.uint32(10).string(e.fromAddress),
            "" !== e.toAddress && t.uint32(18).string(e.toAddress),
            void 0 !== e.offerCoin &&
              i.Coin.encode(e.offerCoin, t.uint32(26).fork()).ldelim(),
            "" !== e.askDenom && t.uint32(34).string(e.askDenom),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.fromAddress = o.string();
                break;
              case 2:
                a.toAddress = o.string();
                break;
              case 3:
                a.offerCoin = i.Coin.decode(o, o.uint32());
                break;
              case 4:
                a.askDenom = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = String(e.fromAddress))
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = String(e.toAddress))
              : (t.toAddress = ""),
            void 0 !== e.offerCoin && null !== e.offerCoin
              ? (t.offerCoin = i.Coin.fromJSON(e.offerCoin))
              : (t.offerCoin = void 0),
            void 0 !== e.askDenom && null !== e.askDenom
              ? (t.askDenom = String(e.askDenom))
              : (t.askDenom = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress),
            void 0 !== e.toAddress && (t.toAddress = e.toAddress),
            void 0 !== e.offerCoin &&
              (t.offerCoin = e.offerCoin ? i.Coin.toJSON(e.offerCoin) : void 0),
            void 0 !== e.askDenom && (t.askDenom = e.askDenom),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = e.fromAddress)
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = e.toAddress)
              : (t.toAddress = ""),
            void 0 !== e.offerCoin && null !== e.offerCoin
              ? (t.offerCoin = i.Coin.fromPartial(e.offerCoin))
              : (t.offerCoin = void 0),
            void 0 !== e.askDenom && null !== e.askDenom
              ? (t.askDenom = e.askDenom)
              : (t.askDenom = ""),
            t
          );
        },
      };
      const c = {};
      t.MsgSwapSendResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            void 0 !== e.swapCoin &&
              i.Coin.encode(e.swapCoin, t.uint32(10).fork()).ldelim(),
            void 0 !== e.swapFee &&
              i.Coin.encode(e.swapFee, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.swapCoin = i.Coin.decode(o, o.uint32());
                break;
              case 2:
                a.swapFee = i.Coin.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.swapCoin && null !== e.swapCoin
              ? (t.swapCoin = i.Coin.fromJSON(e.swapCoin))
              : (t.swapCoin = void 0),
            void 0 !== e.swapFee && null !== e.swapFee
              ? (t.swapFee = i.Coin.fromJSON(e.swapFee))
              : (t.swapFee = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.swapCoin &&
              (t.swapCoin = e.swapCoin ? i.Coin.toJSON(e.swapCoin) : void 0),
            void 0 !== e.swapFee &&
              (t.swapFee = e.swapFee ? i.Coin.toJSON(e.swapFee) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.swapCoin && null !== e.swapCoin
              ? (t.swapCoin = i.Coin.fromPartial(e.swapCoin))
              : (t.swapCoin = void 0),
            void 0 !== e.swapFee && null !== e.swapFee
              ? (t.swapFee = i.Coin.fromPartial(e.swapFee))
              : (t.swapFee = void 0),
            t
          );
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Swap = this.Swap.bind(this)),
            (this.SwapSend = this.SwapSend.bind(this)));
        }
        Swap(e) {
          const o = t.MsgSwap.encode(e).finish(),
            n = this.rpc.request("terra.market.v1beta1.Msg", "Swap", o);
          return n.then((e) =>
            t.MsgSwapResponse.decode(new r.default.Reader(e)),
          );
        }
        SwapSend(e) {
          const o = t.MsgSwapSend.encode(e).finish(),
            n = this.rpc.request("terra.market.v1beta1.Msg", "SwapSend", o);
          return n.then((e) =>
            t.MsgSwapSendResponse.decode(new r.default.Reader(e)),
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
    4349: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExchangeRateTuple =
          t.AggregateExchangeRateVote =
          t.AggregateExchangeRatePrevote =
          t.Denom =
          t.Params =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        r = n(o(2755));
      t.protobufPackage = "terra.oracle.v1beta1";
      const i = {
        votePeriod: a.default.UZERO,
        voteThreshold: "",
        rewardBand: "",
        rewardDistributionWindow: a.default.UZERO,
        slashFraction: "",
        slashWindow: a.default.UZERO,
        minValidPerWindow: "",
      };
      t.Params = {
        encode(e, o) {
          (void 0 === o && (o = r.default.Writer.create()),
            e.votePeriod.isZero() || o.uint32(8).uint64(e.votePeriod),
            "" !== e.voteThreshold && o.uint32(18).string(e.voteThreshold),
            "" !== e.rewardBand && o.uint32(26).string(e.rewardBand),
            e.rewardDistributionWindow.isZero() ||
              o.uint32(32).uint64(e.rewardDistributionWindow));
          for (const n of e.whitelist)
            t.Denom.encode(n, o.uint32(42).fork()).ldelim();
          return (
            "" !== e.slashFraction && o.uint32(50).string(e.slashFraction),
            e.slashWindow.isZero() || o.uint32(56).uint64(e.slashWindow),
            "" !== e.minValidPerWindow &&
              o.uint32(66).string(e.minValidPerWindow),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const s = Object.assign({}, i);
          s.whitelist = [];
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.votePeriod = n.uint64();
                break;
              case 2:
                s.voteThreshold = n.string();
                break;
              case 3:
                s.rewardBand = n.string();
                break;
              case 4:
                s.rewardDistributionWindow = n.uint64();
                break;
              case 5:
                s.whitelist.push(t.Denom.decode(n, n.uint32()));
                break;
              case 6:
                s.slashFraction = n.string();
                break;
              case 7:
                s.slashWindow = n.uint64();
                break;
              case 8:
                s.minValidPerWindow = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const o = Object.assign({}, i);
          if (
            ((o.whitelist = []),
            void 0 !== e.votePeriod && null !== e.votePeriod
              ? (o.votePeriod = a.default.fromString(e.votePeriod))
              : (o.votePeriod = a.default.UZERO),
            void 0 !== e.voteThreshold && null !== e.voteThreshold
              ? (o.voteThreshold = String(e.voteThreshold))
              : (o.voteThreshold = ""),
            void 0 !== e.rewardBand && null !== e.rewardBand
              ? (o.rewardBand = String(e.rewardBand))
              : (o.rewardBand = ""),
            void 0 !== e.rewardDistributionWindow &&
            null !== e.rewardDistributionWindow
              ? (o.rewardDistributionWindow = a.default.fromString(
                  e.rewardDistributionWindow,
                ))
              : (o.rewardDistributionWindow = a.default.UZERO),
            void 0 !== e.whitelist && null !== e.whitelist)
          )
            for (const n of e.whitelist) o.whitelist.push(t.Denom.fromJSON(n));
          return (
            void 0 !== e.slashFraction && null !== e.slashFraction
              ? (o.slashFraction = String(e.slashFraction))
              : (o.slashFraction = ""),
            void 0 !== e.slashWindow && null !== e.slashWindow
              ? (o.slashWindow = a.default.fromString(e.slashWindow))
              : (o.slashWindow = a.default.UZERO),
            void 0 !== e.minValidPerWindow && null !== e.minValidPerWindow
              ? (o.minValidPerWindow = String(e.minValidPerWindow))
              : (o.minValidPerWindow = ""),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.votePeriod &&
              (o.votePeriod = (e.votePeriod || a.default.UZERO).toString()),
            void 0 !== e.voteThreshold && (o.voteThreshold = e.voteThreshold),
            void 0 !== e.rewardBand && (o.rewardBand = e.rewardBand),
            void 0 !== e.rewardDistributionWindow &&
              (o.rewardDistributionWindow = (
                e.rewardDistributionWindow || a.default.UZERO
              ).toString()),
            e.whitelist
              ? (o.whitelist = e.whitelist.map((e) =>
                  e ? t.Denom.toJSON(e) : void 0,
                ))
              : (o.whitelist = []),
            void 0 !== e.slashFraction && (o.slashFraction = e.slashFraction),
            void 0 !== e.slashWindow &&
              (o.slashWindow = (e.slashWindow || a.default.UZERO).toString()),
            void 0 !== e.minValidPerWindow &&
              (o.minValidPerWindow = e.minValidPerWindow),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, i);
          if (
            ((o.whitelist = []),
            void 0 !== e.votePeriod && null !== e.votePeriod
              ? (o.votePeriod = e.votePeriod)
              : (o.votePeriod = a.default.UZERO),
            void 0 !== e.voteThreshold && null !== e.voteThreshold
              ? (o.voteThreshold = e.voteThreshold)
              : (o.voteThreshold = ""),
            void 0 !== e.rewardBand && null !== e.rewardBand
              ? (o.rewardBand = e.rewardBand)
              : (o.rewardBand = ""),
            void 0 !== e.rewardDistributionWindow &&
            null !== e.rewardDistributionWindow
              ? (o.rewardDistributionWindow = e.rewardDistributionWindow)
              : (o.rewardDistributionWindow = a.default.UZERO),
            void 0 !== e.whitelist && null !== e.whitelist)
          )
            for (const n of e.whitelist)
              o.whitelist.push(t.Denom.fromPartial(n));
          return (
            void 0 !== e.slashFraction && null !== e.slashFraction
              ? (o.slashFraction = e.slashFraction)
              : (o.slashFraction = ""),
            void 0 !== e.slashWindow && null !== e.slashWindow
              ? (o.slashWindow = e.slashWindow)
              : (o.slashWindow = a.default.UZERO),
            void 0 !== e.minValidPerWindow && null !== e.minValidPerWindow
              ? (o.minValidPerWindow = e.minValidPerWindow)
              : (o.minValidPerWindow = ""),
            o
          );
        },
      };
      const s = { name: "", tobinTax: "" };
      t.Denom = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.name && t.uint32(10).string(e.name),
            "" !== e.tobinTax && t.uint32(18).string(e.tobinTax),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, s);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.name = o.string();
                break;
              case 2:
                a.tobinTax = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.name && null !== e.name
              ? (t.name = String(e.name))
              : (t.name = ""),
            void 0 !== e.tobinTax && null !== e.tobinTax
              ? (t.tobinTax = String(e.tobinTax))
              : (t.tobinTax = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.name && (t.name = e.name),
            void 0 !== e.tobinTax && (t.tobinTax = e.tobinTax),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.name && null !== e.name
              ? (t.name = e.name)
              : (t.name = ""),
            void 0 !== e.tobinTax && null !== e.tobinTax
              ? (t.tobinTax = e.tobinTax)
              : (t.tobinTax = ""),
            t
          );
        },
      };
      const d = { hash: "", voter: "", submitBlock: a.default.UZERO };
      t.AggregateExchangeRatePrevote = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.hash && t.uint32(10).string(e.hash),
            "" !== e.voter && t.uint32(18).string(e.voter),
            e.submitBlock.isZero() || t.uint32(24).uint64(e.submitBlock),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.hash = o.string();
                break;
              case 2:
                a.voter = o.string();
                break;
              case 3:
                a.submitBlock = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.hash && null !== e.hash
              ? (t.hash = String(e.hash))
              : (t.hash = ""),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = String(e.voter))
              : (t.voter = ""),
            void 0 !== e.submitBlock && null !== e.submitBlock
              ? (t.submitBlock = a.default.fromString(e.submitBlock))
              : (t.submitBlock = a.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.hash && (t.hash = e.hash),
            void 0 !== e.voter && (t.voter = e.voter),
            void 0 !== e.submitBlock &&
              (t.submitBlock = (e.submitBlock || a.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.hash && null !== e.hash
              ? (t.hash = e.hash)
              : (t.hash = ""),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = e.voter)
              : (t.voter = ""),
            void 0 !== e.submitBlock && null !== e.submitBlock
              ? (t.submitBlock = e.submitBlock)
              : (t.submitBlock = a.default.UZERO),
            t
          );
        },
      };
      const l = { voter: "" };
      t.AggregateExchangeRateVote = {
        encode(e, o) {
          void 0 === o && (o = r.default.Writer.create());
          for (const n of e.exchangeRateTuples)
            t.ExchangeRateTuple.encode(n, o.uint32(10).fork()).ldelim();
          return ("" !== e.voter && o.uint32(18).string(e.voter), o);
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const i = Object.assign({}, l);
          i.exchangeRateTuples = [];
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.exchangeRateTuples.push(
                  t.ExchangeRateTuple.decode(n, n.uint32()),
                );
                break;
              case 2:
                i.voter = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const o = Object.assign({}, l);
          if (
            ((o.exchangeRateTuples = []),
            void 0 !== e.exchangeRateTuples && null !== e.exchangeRateTuples)
          )
            for (const n of e.exchangeRateTuples)
              o.exchangeRateTuples.push(t.ExchangeRateTuple.fromJSON(n));
          return (
            void 0 !== e.voter && null !== e.voter
              ? (o.voter = String(e.voter))
              : (o.voter = ""),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            e.exchangeRateTuples
              ? (o.exchangeRateTuples = e.exchangeRateTuples.map((e) =>
                  e ? t.ExchangeRateTuple.toJSON(e) : void 0,
                ))
              : (o.exchangeRateTuples = []),
            void 0 !== e.voter && (o.voter = e.voter),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, l);
          if (
            ((o.exchangeRateTuples = []),
            void 0 !== e.exchangeRateTuples && null !== e.exchangeRateTuples)
          )
            for (const n of e.exchangeRateTuples)
              o.exchangeRateTuples.push(t.ExchangeRateTuple.fromPartial(n));
          return (
            void 0 !== e.voter && null !== e.voter
              ? (o.voter = e.voter)
              : (o.voter = ""),
            o
          );
        },
      };
      const c = { denom: "", exchangeRate: "" };
      ((t.ExchangeRateTuple = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.exchangeRate && t.uint32(18).string(e.exchangeRate),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.denom = o.string();
                break;
              case 2:
                a.exchangeRate = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.exchangeRate && null !== e.exchangeRate
              ? (t.exchangeRate = String(e.exchangeRate))
              : (t.exchangeRate = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.exchangeRate && (t.exchangeRate = e.exchangeRate),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.exchangeRate && null !== e.exchangeRate
              ? (t.exchangeRate = e.exchangeRate)
              : (t.exchangeRate = ""),
            t
          );
        },
      }),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
    4367: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ProofOps =
            t.ProofOp =
            t.DominoOp =
            t.ValueOp =
            t.Proof =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          r = n(o(2755));
        t.protobufPackage = "tendermint.crypto";
        const i = { total: a.default.ZERO, index: a.default.ZERO };
        t.Proof = {
          encode(e, t = r.default.Writer.create()) {
            (e.total.isZero() || t.uint32(8).int64(e.total),
              e.index.isZero() || t.uint32(16).int64(e.index),
              0 !== e.leafHash.length && t.uint32(26).bytes(e.leafHash));
            for (const o of e.aunts) t.uint32(34).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, i);
            ((a.aunts = []), (a.leafHash = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.total = o.int64();
                  break;
                case 2:
                  a.index = o.int64();
                  break;
                case 3:
                  a.leafHash = o.bytes();
                  break;
                case 4:
                  a.aunts.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, i);
            if (
              ((t.aunts = []),
              (t.leafHash = new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (t.total = a.default.fromString(e.total))
                : (t.total = a.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (t.index = a.default.fromString(e.index))
                : (t.index = a.default.ZERO),
              void 0 !== e.leafHash &&
                null !== e.leafHash &&
                (t.leafHash = g(e.leafHash)),
              void 0 !== e.aunts && null !== e.aunts)
            )
              for (const o of e.aunts) t.aunts.push(g(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.total &&
                (t.total = (e.total || a.default.ZERO).toString()),
              void 0 !== e.index &&
                (t.index = (e.index || a.default.ZERO).toString()),
              void 0 !== e.leafHash &&
                (t.leafHash = p(
                  void 0 !== e.leafHash ? e.leafHash : new Uint8Array(),
                )),
              e.aunts
                ? (t.aunts = e.aunts.map((e) =>
                    p(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.aunts = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, i);
            if (
              ((t.aunts = []),
              void 0 !== e.total && null !== e.total
                ? (t.total = e.total)
                : (t.total = a.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = a.default.ZERO),
              void 0 !== e.leafHash && null !== e.leafHash
                ? (t.leafHash = e.leafHash)
                : (t.leafHash = new Uint8Array()),
              void 0 !== e.aunts && null !== e.aunts)
            )
              for (const o of e.aunts) t.aunts.push(o);
            return t;
          },
        };
        const s = {};
        t.ValueOp = {
          encode(e, o = r.default.Writer.create()) {
            return (
              0 !== e.key.length && o.uint32(10).bytes(e.key),
              void 0 !== e.proof &&
                t.Proof.encode(e.proof, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, s);
            i.key = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = n.bytes();
                  break;
                case 2:
                  i.proof = t.Proof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, s);
            return (
              (o.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = g(e.key)),
              void 0 !== e.proof && null !== e.proof
                ? (o.proof = t.Proof.fromJSON(e.proof))
                : (o.proof = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.key &&
                (o.key = p(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.proof &&
                (o.proof = e.proof ? t.Proof.toJSON(e.proof) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, s);
            return (
              void 0 !== e.key && null !== e.key
                ? (o.key = e.key)
                : (o.key = new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (o.proof = t.Proof.fromPartial(e.proof))
                : (o.proof = void 0),
              o
            );
          },
        };
        const d = { key: "", input: "", output: "" };
        t.DominoOp = {
          encode(e, t = r.default.Writer.create()) {
            return (
              "" !== e.key && t.uint32(10).string(e.key),
              "" !== e.input && t.uint32(18).string(e.input),
              "" !== e.output && t.uint32(26).string(e.output),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, d);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.key = o.string();
                  break;
                case 2:
                  a.input = o.string();
                  break;
                case 3:
                  a.output = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = String(e.key))
                : (t.key = ""),
              void 0 !== e.input && null !== e.input
                ? (t.input = String(e.input))
                : (t.input = ""),
              void 0 !== e.output && null !== e.output
                ? (t.output = String(e.output))
                : (t.output = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key && (t.key = e.key),
              void 0 !== e.input && (t.input = e.input),
              void 0 !== e.output && (t.output = e.output),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = ""),
              void 0 !== e.input && null !== e.input
                ? (t.input = e.input)
                : (t.input = ""),
              void 0 !== e.output && null !== e.output
                ? (t.output = e.output)
                : (t.output = ""),
              t
            );
          },
        };
        const l = { type: "" };
        t.ProofOp = {
          encode(e, t = r.default.Writer.create()) {
            return (
              "" !== e.type && t.uint32(10).string(e.type),
              0 !== e.key.length && t.uint32(18).bytes(e.key),
              0 !== e.data.length && t.uint32(26).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, l);
            ((a.key = new Uint8Array()), (a.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.type = o.string();
                  break;
                case 2:
                  a.key = o.bytes();
                  break;
                case 3:
                  a.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.key = new Uint8Array()),
              (t.data = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (t.type = String(e.type))
                : (t.type = ""),
              void 0 !== e.key && null !== e.key && (t.key = g(e.key)),
              void 0 !== e.data && null !== e.data && (t.data = g(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.type && (t.type = e.type),
              void 0 !== e.key &&
                (t.key = p(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.data &&
                (t.data = p(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.type && null !== e.type
                ? (t.type = e.type)
                : (t.type = ""),
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const c = {};
        t.ProofOps = {
          encode(e, o = r.default.Writer.create()) {
            for (const n of e.ops)
              t.ProofOp.encode(n, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, c);
            i.ops = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.ops.push(t.ProofOp.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, c);
            if (((o.ops = []), void 0 !== e.ops && null !== e.ops))
              for (const n of e.ops) o.ops.push(t.ProofOp.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.ops
                ? (o.ops = e.ops.map((e) => (e ? t.ProofOp.toJSON(e) : void 0)))
                : (o.ops = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, c);
            if (((o.ops = []), void 0 !== e.ops && null !== e.ops))
              for (const n of e.ops) o.ops.push(t.ProofOp.fromPartial(n));
            return o;
          },
        };
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const f =
          u.atob || ((e) => u.Buffer.from(e, "base64").toString("binary"));
        function g(e) {
          const t = f(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const v =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function p(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return v(t.join(""));
        }
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure());
      }).call(this, o(13));
    },
    4368: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PublicKey = t.protobufPackage = void 0));
        const a = n(o(2754)),
          r = n(o(2755));
        t.protobufPackage = "tendermint.crypto";
        const i = {};
        t.PublicKey = {
          encode(e, t = r.default.Writer.create()) {
            return (
              void 0 !== e.ed25519 && t.uint32(10).bytes(e.ed25519),
              void 0 !== e.secp256k1 && t.uint32(18).bytes(e.secp256k1),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, i);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.ed25519 = o.bytes();
                  break;
                case 2:
                  a.secp256k1 = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, i);
            return (
              void 0 !== e.ed25519 &&
                null !== e.ed25519 &&
                (t.ed25519 = l(e.ed25519)),
              void 0 !== e.secp256k1 &&
                null !== e.secp256k1 &&
                (t.secp256k1 = l(e.secp256k1)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.ed25519 &&
                (t.ed25519 = void 0 !== e.ed25519 ? u(e.ed25519) : void 0),
              void 0 !== e.secp256k1 &&
                (t.secp256k1 =
                  void 0 !== e.secp256k1 ? u(e.secp256k1) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, i);
            return (
              void 0 !== e.ed25519 && null !== e.ed25519
                ? (t.ed25519 = e.ed25519)
                : (t.ed25519 = void 0),
              void 0 !== e.secp256k1 && null !== e.secp256k1
                ? (t.secp256k1 = e.secp256k1)
                : (t.secp256k1 = void 0),
              t
            );
          },
        };
        var s = (() => {
          if ("undefined" !== typeof s) return s;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const d =
          s.atob || ((e) => s.Buffer.from(e, "base64").toString("binary"));
        function l(e) {
          const t = d(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const c =
          s.btoa || ((e) => s.Buffer.from(e, "binary").toString("base64"));
        function u(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return c(t.join(""));
        }
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure());
      }).call(this, o(13));
    },
    5144: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VestingSchedule =
          t.Schedule =
          t.LazyGradedVestingAccount =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        r = n(o(2755)),
        i = o(5145);
      t.protobufPackage = "terra.vesting.v1beta1";
      const s = {};
      t.LazyGradedVestingAccount = {
        encode(e, o) {
          (void 0 === o && (o = r.default.Writer.create()),
            void 0 !== e.baseVestingAccount &&
              i.BaseVestingAccount.encode(
                e.baseVestingAccount,
                o.uint32(10).fork(),
              ).ldelim());
          for (const n of e.vestingSchedules)
            t.VestingSchedule.encode(n, o.uint32(18).fork()).ldelim();
          return o;
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const d = Object.assign({}, s);
          d.vestingSchedules = [];
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                d.baseVestingAccount = i.BaseVestingAccount.decode(
                  n,
                  n.uint32(),
                );
                break;
              case 2:
                d.vestingSchedules.push(
                  t.VestingSchedule.decode(n, n.uint32()),
                );
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return d;
        },
        fromJSON(e) {
          const o = Object.assign({}, s);
          if (
            ((o.vestingSchedules = []),
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (o.baseVestingAccount = i.BaseVestingAccount.fromJSON(
                  e.baseVestingAccount,
                ))
              : (o.baseVestingAccount = void 0),
            void 0 !== e.vestingSchedules && null !== e.vestingSchedules)
          )
            for (const n of e.vestingSchedules)
              o.vestingSchedules.push(t.VestingSchedule.fromJSON(n));
          return o;
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.baseVestingAccount &&
              (o.baseVestingAccount = e.baseVestingAccount
                ? i.BaseVestingAccount.toJSON(e.baseVestingAccount)
                : void 0),
            e.vestingSchedules
              ? (o.vestingSchedules = e.vestingSchedules.map((e) =>
                  e ? t.VestingSchedule.toJSON(e) : void 0,
                ))
              : (o.vestingSchedules = []),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, s);
          if (
            ((o.vestingSchedules = []),
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (o.baseVestingAccount = i.BaseVestingAccount.fromPartial(
                  e.baseVestingAccount,
                ))
              : (o.baseVestingAccount = void 0),
            void 0 !== e.vestingSchedules && null !== e.vestingSchedules)
          )
            for (const n of e.vestingSchedules)
              o.vestingSchedules.push(t.VestingSchedule.fromPartial(n));
          return o;
        },
      };
      const d = {
        startTime: a.default.ZERO,
        endTime: a.default.ZERO,
        ratio: "",
      };
      t.Schedule = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.startTime.isZero() || t.uint32(8).int64(e.startTime),
            e.endTime.isZero() || t.uint32(16).int64(e.endTime),
            "" !== e.ratio && t.uint32(26).string(e.ratio),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.startTime = o.int64();
                break;
              case 2:
                a.endTime = o.int64();
                break;
              case 3:
                a.ratio = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.startTime && null !== e.startTime
              ? (t.startTime = a.default.fromString(e.startTime))
              : (t.startTime = a.default.ZERO),
            void 0 !== e.endTime && null !== e.endTime
              ? (t.endTime = a.default.fromString(e.endTime))
              : (t.endTime = a.default.ZERO),
            void 0 !== e.ratio && null !== e.ratio
              ? (t.ratio = String(e.ratio))
              : (t.ratio = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.startTime &&
              (t.startTime = (e.startTime || a.default.ZERO).toString()),
            void 0 !== e.endTime &&
              (t.endTime = (e.endTime || a.default.ZERO).toString()),
            void 0 !== e.ratio && (t.ratio = e.ratio),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.startTime && null !== e.startTime
              ? (t.startTime = e.startTime)
              : (t.startTime = a.default.ZERO),
            void 0 !== e.endTime && null !== e.endTime
              ? (t.endTime = e.endTime)
              : (t.endTime = a.default.ZERO),
            void 0 !== e.ratio && null !== e.ratio
              ? (t.ratio = e.ratio)
              : (t.ratio = ""),
            t
          );
        },
      };
      const l = { denom: "" };
      ((t.VestingSchedule = {
        encode(e, o) {
          (void 0 === o && (o = r.default.Writer.create()),
            "" !== e.denom && o.uint32(10).string(e.denom));
          for (const n of e.schedules)
            t.Schedule.encode(n, o.uint32(18).fork()).ldelim();
          return o;
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const i = Object.assign({}, l);
          i.schedules = [];
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.denom = n.string();
                break;
              case 2:
                i.schedules.push(t.Schedule.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const o = Object.assign({}, l);
          if (
            ((o.schedules = []),
            void 0 !== e.denom && null !== e.denom
              ? (o.denom = String(e.denom))
              : (o.denom = ""),
            void 0 !== e.schedules && null !== e.schedules)
          )
            for (const n of e.schedules)
              o.schedules.push(t.Schedule.fromJSON(n));
          return o;
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.denom && (o.denom = e.denom),
            e.schedules
              ? (o.schedules = e.schedules.map((e) =>
                  e ? t.Schedule.toJSON(e) : void 0,
                ))
              : (o.schedules = []),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, l);
          if (
            ((o.schedules = []),
            void 0 !== e.denom && null !== e.denom
              ? (o.denom = e.denom)
              : (o.denom = ""),
            void 0 !== e.schedules && null !== e.schedules)
          )
            for (const n of e.schedules)
              o.schedules.push(t.Schedule.fromPartial(n));
          return o;
        },
      }),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
    5151: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EpochInitialIssuance =
          t.EpochTaxProceeds =
          t.PolicyConstraints =
          t.Params =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        r = n(o(2755)),
        i = o(3101);
      t.protobufPackage = "terra.treasury.v1beta1";
      const s = {
        seigniorageBurdenTarget: "",
        miningIncrement: "",
        windowShort: a.default.UZERO,
        windowLong: a.default.UZERO,
        windowProbation: a.default.UZERO,
      };
      t.Params = {
        encode(e, o) {
          return (
            void 0 === o && (o = r.default.Writer.create()),
            void 0 !== e.taxPolicy &&
              t.PolicyConstraints.encode(
                e.taxPolicy,
                o.uint32(10).fork(),
              ).ldelim(),
            void 0 !== e.rewardPolicy &&
              t.PolicyConstraints.encode(
                e.rewardPolicy,
                o.uint32(18).fork(),
              ).ldelim(),
            "" !== e.seigniorageBurdenTarget &&
              o.uint32(26).string(e.seigniorageBurdenTarget),
            "" !== e.miningIncrement && o.uint32(34).string(e.miningIncrement),
            e.windowShort.isZero() || o.uint32(40).uint64(e.windowShort),
            e.windowLong.isZero() || o.uint32(48).uint64(e.windowLong),
            e.windowProbation.isZero() ||
              o.uint32(56).uint64(e.windowProbation),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const i = Object.assign({}, s);
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.taxPolicy = t.PolicyConstraints.decode(n, n.uint32());
                break;
              case 2:
                i.rewardPolicy = t.PolicyConstraints.decode(n, n.uint32());
                break;
              case 3:
                i.seigniorageBurdenTarget = n.string();
                break;
              case 4:
                i.miningIncrement = n.string();
                break;
              case 5:
                i.windowShort = n.uint64();
                break;
              case 6:
                i.windowLong = n.uint64();
                break;
              case 7:
                i.windowProbation = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const o = Object.assign({}, s);
          return (
            void 0 !== e.taxPolicy && null !== e.taxPolicy
              ? (o.taxPolicy = t.PolicyConstraints.fromJSON(e.taxPolicy))
              : (o.taxPolicy = void 0),
            void 0 !== e.rewardPolicy && null !== e.rewardPolicy
              ? (o.rewardPolicy = t.PolicyConstraints.fromJSON(e.rewardPolicy))
              : (o.rewardPolicy = void 0),
            void 0 !== e.seigniorageBurdenTarget &&
            null !== e.seigniorageBurdenTarget
              ? (o.seigniorageBurdenTarget = String(e.seigniorageBurdenTarget))
              : (o.seigniorageBurdenTarget = ""),
            void 0 !== e.miningIncrement && null !== e.miningIncrement
              ? (o.miningIncrement = String(e.miningIncrement))
              : (o.miningIncrement = ""),
            void 0 !== e.windowShort && null !== e.windowShort
              ? (o.windowShort = a.default.fromString(e.windowShort))
              : (o.windowShort = a.default.UZERO),
            void 0 !== e.windowLong && null !== e.windowLong
              ? (o.windowLong = a.default.fromString(e.windowLong))
              : (o.windowLong = a.default.UZERO),
            void 0 !== e.windowProbation && null !== e.windowProbation
              ? (o.windowProbation = a.default.fromString(e.windowProbation))
              : (o.windowProbation = a.default.UZERO),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.taxPolicy &&
              (o.taxPolicy = e.taxPolicy
                ? t.PolicyConstraints.toJSON(e.taxPolicy)
                : void 0),
            void 0 !== e.rewardPolicy &&
              (o.rewardPolicy = e.rewardPolicy
                ? t.PolicyConstraints.toJSON(e.rewardPolicy)
                : void 0),
            void 0 !== e.seigniorageBurdenTarget &&
              (o.seigniorageBurdenTarget = e.seigniorageBurdenTarget),
            void 0 !== e.miningIncrement &&
              (o.miningIncrement = e.miningIncrement),
            void 0 !== e.windowShort &&
              (o.windowShort = (e.windowShort || a.default.UZERO).toString()),
            void 0 !== e.windowLong &&
              (o.windowLong = (e.windowLong || a.default.UZERO).toString()),
            void 0 !== e.windowProbation &&
              (o.windowProbation = (
                e.windowProbation || a.default.UZERO
              ).toString()),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, s);
          return (
            void 0 !== e.taxPolicy && null !== e.taxPolicy
              ? (o.taxPolicy = t.PolicyConstraints.fromPartial(e.taxPolicy))
              : (o.taxPolicy = void 0),
            void 0 !== e.rewardPolicy && null !== e.rewardPolicy
              ? (o.rewardPolicy = t.PolicyConstraints.fromPartial(
                  e.rewardPolicy,
                ))
              : (o.rewardPolicy = void 0),
            void 0 !== e.seigniorageBurdenTarget &&
            null !== e.seigniorageBurdenTarget
              ? (o.seigniorageBurdenTarget = e.seigniorageBurdenTarget)
              : (o.seigniorageBurdenTarget = ""),
            void 0 !== e.miningIncrement && null !== e.miningIncrement
              ? (o.miningIncrement = e.miningIncrement)
              : (o.miningIncrement = ""),
            void 0 !== e.windowShort && null !== e.windowShort
              ? (o.windowShort = e.windowShort)
              : (o.windowShort = a.default.UZERO),
            void 0 !== e.windowLong && null !== e.windowLong
              ? (o.windowLong = e.windowLong)
              : (o.windowLong = a.default.UZERO),
            void 0 !== e.windowProbation && null !== e.windowProbation
              ? (o.windowProbation = e.windowProbation)
              : (o.windowProbation = a.default.UZERO),
            o
          );
        },
      };
      const d = { rateMin: "", rateMax: "", changeRateMax: "" };
      t.PolicyConstraints = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.rateMin && t.uint32(10).string(e.rateMin),
            "" !== e.rateMax && t.uint32(18).string(e.rateMax),
            void 0 !== e.cap &&
              i.Coin.encode(e.cap, t.uint32(26).fork()).ldelim(),
            "" !== e.changeRateMax && t.uint32(34).string(e.changeRateMax),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.rateMin = o.string();
                break;
              case 2:
                a.rateMax = o.string();
                break;
              case 3:
                a.cap = i.Coin.decode(o, o.uint32());
                break;
              case 4:
                a.changeRateMax = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.rateMin && null !== e.rateMin
              ? (t.rateMin = String(e.rateMin))
              : (t.rateMin = ""),
            void 0 !== e.rateMax && null !== e.rateMax
              ? (t.rateMax = String(e.rateMax))
              : (t.rateMax = ""),
            void 0 !== e.cap && null !== e.cap
              ? (t.cap = i.Coin.fromJSON(e.cap))
              : (t.cap = void 0),
            void 0 !== e.changeRateMax && null !== e.changeRateMax
              ? (t.changeRateMax = String(e.changeRateMax))
              : (t.changeRateMax = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.rateMin && (t.rateMin = e.rateMin),
            void 0 !== e.rateMax && (t.rateMax = e.rateMax),
            void 0 !== e.cap && (t.cap = e.cap ? i.Coin.toJSON(e.cap) : void 0),
            void 0 !== e.changeRateMax && (t.changeRateMax = e.changeRateMax),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.rateMin && null !== e.rateMin
              ? (t.rateMin = e.rateMin)
              : (t.rateMin = ""),
            void 0 !== e.rateMax && null !== e.rateMax
              ? (t.rateMax = e.rateMax)
              : (t.rateMax = ""),
            void 0 !== e.cap && null !== e.cap
              ? (t.cap = i.Coin.fromPartial(e.cap))
              : (t.cap = void 0),
            void 0 !== e.changeRateMax && null !== e.changeRateMax
              ? (t.changeRateMax = e.changeRateMax)
              : (t.changeRateMax = ""),
            t
          );
        },
      };
      const l = {};
      t.EpochTaxProceeds = {
        encode(e, t) {
          void 0 === t && (t = r.default.Writer.create());
          for (const o of e.taxProceeds)
            i.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, l);
          a.taxProceeds = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.taxProceeds.push(i.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          if (
            ((t.taxProceeds = []),
            void 0 !== e.taxProceeds && null !== e.taxProceeds)
          )
            for (const o of e.taxProceeds)
              t.taxProceeds.push(i.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.taxProceeds
              ? (t.taxProceeds = e.taxProceeds.map((e) =>
                  e ? i.Coin.toJSON(e) : void 0,
                ))
              : (t.taxProceeds = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          if (
            ((t.taxProceeds = []),
            void 0 !== e.taxProceeds && null !== e.taxProceeds)
          )
            for (const o of e.taxProceeds)
              t.taxProceeds.push(i.Coin.fromPartial(o));
          return t;
        },
      };
      const c = {};
      ((t.EpochInitialIssuance = {
        encode(e, t) {
          void 0 === t && (t = r.default.Writer.create());
          for (const o of e.issuance)
            i.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, c);
          a.issuance = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.issuance.push(i.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (((t.issuance = []), void 0 !== e.issuance && null !== e.issuance))
            for (const o of e.issuance) t.issuance.push(i.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.issuance
              ? (t.issuance = e.issuance.map((e) =>
                  e ? i.Coin.toJSON(e) : void 0,
                ))
              : (t.issuance = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (((t.issuance = []), void 0 !== e.issuance && null !== e.issuance))
            for (const o of e.issuance) t.issuance.push(i.Coin.fromPartial(o));
          return t;
        },
      }),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
    5196: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TxProof =
            t.BlockMeta =
            t.LightBlock =
            t.SignedHeader =
            t.Proposal =
            t.CommitSig =
            t.Commit =
            t.Vote =
            t.Data =
            t.Header =
            t.BlockID =
            t.Part =
            t.PartSetHeader =
            t.signedMsgTypeToJSON =
            t.signedMsgTypeFromJSON =
            t.SignedMsgType =
            t.blockIDFlagToJSON =
            t.blockIDFlagFromJSON =
            t.BlockIDFlag =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          r = n(o(2755)),
          i = o(4367),
          s = o(5197),
          d = o(5198),
          l = o(3426);
        var c, u;
        function f(e) {
          switch (e) {
            case 0:
            case "BLOCK_ID_FLAG_UNKNOWN":
              return c.BLOCK_ID_FLAG_UNKNOWN;
            case 1:
            case "BLOCK_ID_FLAG_ABSENT":
              return c.BLOCK_ID_FLAG_ABSENT;
            case 2:
            case "BLOCK_ID_FLAG_COMMIT":
              return c.BLOCK_ID_FLAG_COMMIT;
            case 3:
            case "BLOCK_ID_FLAG_NIL":
              return c.BLOCK_ID_FLAG_NIL;
            case -1:
            case "UNRECOGNIZED":
            default:
              return c.UNRECOGNIZED;
          }
        }
        function g(e) {
          switch (e) {
            case c.BLOCK_ID_FLAG_UNKNOWN:
              return "BLOCK_ID_FLAG_UNKNOWN";
            case c.BLOCK_ID_FLAG_ABSENT:
              return "BLOCK_ID_FLAG_ABSENT";
            case c.BLOCK_ID_FLAG_COMMIT:
              return "BLOCK_ID_FLAG_COMMIT";
            case c.BLOCK_ID_FLAG_NIL:
              return "BLOCK_ID_FLAG_NIL";
            default:
              return "UNKNOWN";
          }
        }
        function v(e) {
          switch (e) {
            case 0:
            case "SIGNED_MSG_TYPE_UNKNOWN":
              return u.SIGNED_MSG_TYPE_UNKNOWN;
            case 1:
            case "SIGNED_MSG_TYPE_PREVOTE":
              return u.SIGNED_MSG_TYPE_PREVOTE;
            case 2:
            case "SIGNED_MSG_TYPE_PRECOMMIT":
              return u.SIGNED_MSG_TYPE_PRECOMMIT;
            case 32:
            case "SIGNED_MSG_TYPE_PROPOSAL":
              return u.SIGNED_MSG_TYPE_PROPOSAL;
            case -1:
            case "UNRECOGNIZED":
            default:
              return u.UNRECOGNIZED;
          }
        }
        function p(e) {
          switch (e) {
            case u.SIGNED_MSG_TYPE_UNKNOWN:
              return "SIGNED_MSG_TYPE_UNKNOWN";
            case u.SIGNED_MSG_TYPE_PREVOTE:
              return "SIGNED_MSG_TYPE_PREVOTE";
            case u.SIGNED_MSG_TYPE_PRECOMMIT:
              return "SIGNED_MSG_TYPE_PRECOMMIT";
            case u.SIGNED_MSG_TYPE_PROPOSAL:
              return "SIGNED_MSG_TYPE_PROPOSAL";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "tendermint.types"),
          (function (e) {
            ((e[(e["BLOCK_ID_FLAG_UNKNOWN"] = 0)] = "BLOCK_ID_FLAG_UNKNOWN"),
              (e[(e["BLOCK_ID_FLAG_ABSENT"] = 1)] = "BLOCK_ID_FLAG_ABSENT"),
              (e[(e["BLOCK_ID_FLAG_COMMIT"] = 2)] = "BLOCK_ID_FLAG_COMMIT"),
              (e[(e["BLOCK_ID_FLAG_NIL"] = 3)] = "BLOCK_ID_FLAG_NIL"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((c = t.BlockIDFlag || (t.BlockIDFlag = {}))),
          (t.blockIDFlagFromJSON = f),
          (t.blockIDFlagToJSON = g),
          (function (e) {
            ((e[(e["SIGNED_MSG_TYPE_UNKNOWN"] = 0)] =
              "SIGNED_MSG_TYPE_UNKNOWN"),
              (e[(e["SIGNED_MSG_TYPE_PREVOTE"] = 1)] =
                "SIGNED_MSG_TYPE_PREVOTE"),
              (e[(e["SIGNED_MSG_TYPE_PRECOMMIT"] = 2)] =
                "SIGNED_MSG_TYPE_PRECOMMIT"),
              (e[(e["SIGNED_MSG_TYPE_PROPOSAL"] = 32)] =
                "SIGNED_MSG_TYPE_PROPOSAL"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((u = t.SignedMsgType || (t.SignedMsgType = {}))),
          (t.signedMsgTypeFromJSON = v),
          (t.signedMsgTypeToJSON = p));
        const m = { total: 0 };
        t.PartSetHeader = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.total && t.uint32(8).uint32(e.total),
              0 !== e.hash.length && t.uint32(18).bytes(e.hash),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, m);
            a.hash = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.total = o.uint32();
                  break;
                case 2:
                  a.hash = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.hash = new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (t.total = Number(e.total))
                : (t.total = 0),
              void 0 !== e.hash && null !== e.hash && (t.hash = N(e.hash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.total && (t.total = e.total),
              void 0 !== e.hash &&
                (t.hash = T(void 0 !== e.hash ? e.hash : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.total && null !== e.total
                ? (t.total = e.total)
                : (t.total = 0),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = new Uint8Array()),
              t
            );
          },
        };
        const h = { index: 0 };
        t.Part = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.index && t.uint32(8).uint32(e.index),
              0 !== e.bytes.length && t.uint32(18).bytes(e.bytes),
              void 0 !== e.proof &&
                i.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, h);
            a.bytes = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.index = o.uint32();
                  break;
                case 2:
                  a.bytes = o.bytes();
                  break;
                case 3:
                  a.proof = i.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              (t.bytes = new Uint8Array()),
              void 0 !== e.index && null !== e.index
                ? (t.index = Number(e.index))
                : (t.index = 0),
              void 0 !== e.bytes && null !== e.bytes && (t.bytes = N(e.bytes)),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromJSON(e.proof))
                : (t.proof = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.index && (t.index = e.index),
              void 0 !== e.bytes &&
                (t.bytes = T(void 0 !== e.bytes ? e.bytes : new Uint8Array())),
              void 0 !== e.proof &&
                (t.proof = e.proof ? i.Proof.toJSON(e.proof) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = 0),
              void 0 !== e.bytes && null !== e.bytes
                ? (t.bytes = e.bytes)
                : (t.bytes = new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromPartial(e.proof))
                : (t.proof = void 0),
              t
            );
          },
        };
        const b = {};
        t.BlockID = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              0 !== e.hash.length && o.uint32(10).bytes(e.hash),
              void 0 !== e.partSetHeader &&
                t.PartSetHeader.encode(
                  e.partSetHeader,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, b);
            i.hash = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.hash = n.bytes();
                  break;
                case 2:
                  i.partSetHeader = t.PartSetHeader.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, b);
            return (
              (o.hash = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash && (o.hash = N(e.hash)),
              void 0 !== e.partSetHeader && null !== e.partSetHeader
                ? (o.partSetHeader = t.PartSetHeader.fromJSON(e.partSetHeader))
                : (o.partSetHeader = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.hash &&
                (o.hash = T(void 0 !== e.hash ? e.hash : new Uint8Array())),
              void 0 !== e.partSetHeader &&
                (o.partSetHeader = e.partSetHeader
                  ? t.PartSetHeader.toJSON(e.partSetHeader)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, b);
            return (
              void 0 !== e.hash && null !== e.hash
                ? (o.hash = e.hash)
                : (o.hash = new Uint8Array()),
              void 0 !== e.partSetHeader && null !== e.partSetHeader
                ? (o.partSetHeader = t.PartSetHeader.fromPartial(
                    e.partSetHeader,
                  ))
                : (o.partSetHeader = void 0),
              o
            );
          },
        };
        const w = { chainId: "", height: a.default.ZERO };
        t.Header = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== e.version &&
                s.Consensus.encode(e.version, o.uint32(10).fork()).ldelim(),
              "" !== e.chainId && o.uint32(18).string(e.chainId),
              e.height.isZero() || o.uint32(24).int64(e.height),
              void 0 !== e.time &&
                l.Timestamp.encode(B(e.time), o.uint32(34).fork()).ldelim(),
              void 0 !== e.lastBlockId &&
                t.BlockID.encode(e.lastBlockId, o.uint32(42).fork()).ldelim(),
              0 !== e.lastCommitHash.length &&
                o.uint32(50).bytes(e.lastCommitHash),
              0 !== e.dataHash.length && o.uint32(58).bytes(e.dataHash),
              0 !== e.validatorsHash.length &&
                o.uint32(66).bytes(e.validatorsHash),
              0 !== e.nextValidatorsHash.length &&
                o.uint32(74).bytes(e.nextValidatorsHash),
              0 !== e.consensusHash.length &&
                o.uint32(82).bytes(e.consensusHash),
              0 !== e.appHash.length && o.uint32(90).bytes(e.appHash),
              0 !== e.lastResultsHash.length &&
                o.uint32(98).bytes(e.lastResultsHash),
              0 !== e.evidenceHash.length &&
                o.uint32(106).bytes(e.evidenceHash),
              0 !== e.proposerAddress.length &&
                o.uint32(114).bytes(e.proposerAddress),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, w);
            ((i.lastCommitHash = new Uint8Array()),
              (i.dataHash = new Uint8Array()),
              (i.validatorsHash = new Uint8Array()),
              (i.nextValidatorsHash = new Uint8Array()),
              (i.consensusHash = new Uint8Array()),
              (i.appHash = new Uint8Array()),
              (i.lastResultsHash = new Uint8Array()),
              (i.evidenceHash = new Uint8Array()),
              (i.proposerAddress = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.version = s.Consensus.decode(n, n.uint32());
                  break;
                case 2:
                  i.chainId = n.string();
                  break;
                case 3:
                  i.height = n.int64();
                  break;
                case 4:
                  i.time = H(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 5:
                  i.lastBlockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 6:
                  i.lastCommitHash = n.bytes();
                  break;
                case 7:
                  i.dataHash = n.bytes();
                  break;
                case 8:
                  i.validatorsHash = n.bytes();
                  break;
                case 9:
                  i.nextValidatorsHash = n.bytes();
                  break;
                case 10:
                  i.consensusHash = n.bytes();
                  break;
                case 11:
                  i.appHash = n.bytes();
                  break;
                case 12:
                  i.lastResultsHash = n.bytes();
                  break;
                case 13:
                  i.evidenceHash = n.bytes();
                  break;
                case 14:
                  i.proposerAddress = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, w);
            return (
              (o.lastCommitHash = new Uint8Array()),
              (o.dataHash = new Uint8Array()),
              (o.validatorsHash = new Uint8Array()),
              (o.nextValidatorsHash = new Uint8Array()),
              (o.consensusHash = new Uint8Array()),
              (o.appHash = new Uint8Array()),
              (o.lastResultsHash = new Uint8Array()),
              (o.evidenceHash = new Uint8Array()),
              (o.proposerAddress = new Uint8Array()),
              void 0 !== e.version && null !== e.version
                ? (o.version = s.Consensus.fromJSON(e.version))
                : (o.version = void 0),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = String(e.chainId))
                : (o.chainId = ""),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = U(e.time))
                : (o.time = void 0),
              void 0 !== e.lastBlockId && null !== e.lastBlockId
                ? (o.lastBlockId = t.BlockID.fromJSON(e.lastBlockId))
                : (o.lastBlockId = void 0),
              void 0 !== e.lastCommitHash &&
                null !== e.lastCommitHash &&
                (o.lastCommitHash = N(e.lastCommitHash)),
              void 0 !== e.dataHash &&
                null !== e.dataHash &&
                (o.dataHash = N(e.dataHash)),
              void 0 !== e.validatorsHash &&
                null !== e.validatorsHash &&
                (o.validatorsHash = N(e.validatorsHash)),
              void 0 !== e.nextValidatorsHash &&
                null !== e.nextValidatorsHash &&
                (o.nextValidatorsHash = N(e.nextValidatorsHash)),
              void 0 !== e.consensusHash &&
                null !== e.consensusHash &&
                (o.consensusHash = N(e.consensusHash)),
              void 0 !== e.appHash &&
                null !== e.appHash &&
                (o.appHash = N(e.appHash)),
              void 0 !== e.lastResultsHash &&
                null !== e.lastResultsHash &&
                (o.lastResultsHash = N(e.lastResultsHash)),
              void 0 !== e.evidenceHash &&
                null !== e.evidenceHash &&
                (o.evidenceHash = N(e.evidenceHash)),
              void 0 !== e.proposerAddress &&
                null !== e.proposerAddress &&
                (o.proposerAddress = N(e.proposerAddress)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.version &&
                (o.version = e.version
                  ? s.Consensus.toJSON(e.version)
                  : void 0),
              void 0 !== e.chainId && (o.chainId = e.chainId),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.time && (o.time = e.time.toISOString()),
              void 0 !== e.lastBlockId &&
                (o.lastBlockId = e.lastBlockId
                  ? t.BlockID.toJSON(e.lastBlockId)
                  : void 0),
              void 0 !== e.lastCommitHash &&
                (o.lastCommitHash = T(
                  void 0 !== e.lastCommitHash
                    ? e.lastCommitHash
                    : new Uint8Array(),
                )),
              void 0 !== e.dataHash &&
                (o.dataHash = T(
                  void 0 !== e.dataHash ? e.dataHash : new Uint8Array(),
                )),
              void 0 !== e.validatorsHash &&
                (o.validatorsHash = T(
                  void 0 !== e.validatorsHash
                    ? e.validatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.nextValidatorsHash &&
                (o.nextValidatorsHash = T(
                  void 0 !== e.nextValidatorsHash
                    ? e.nextValidatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHash &&
                (o.consensusHash = T(
                  void 0 !== e.consensusHash
                    ? e.consensusHash
                    : new Uint8Array(),
                )),
              void 0 !== e.appHash &&
                (o.appHash = T(
                  void 0 !== e.appHash ? e.appHash : new Uint8Array(),
                )),
              void 0 !== e.lastResultsHash &&
                (o.lastResultsHash = T(
                  void 0 !== e.lastResultsHash
                    ? e.lastResultsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.evidenceHash &&
                (o.evidenceHash = T(
                  void 0 !== e.evidenceHash ? e.evidenceHash : new Uint8Array(),
                )),
              void 0 !== e.proposerAddress &&
                (o.proposerAddress = T(
                  void 0 !== e.proposerAddress
                    ? e.proposerAddress
                    : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, w);
            return (
              void 0 !== e.version && null !== e.version
                ? (o.version = s.Consensus.fromPartial(e.version))
                : (o.version = void 0),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = e.chainId)
                : (o.chainId = ""),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = e.time)
                : (o.time = void 0),
              void 0 !== e.lastBlockId && null !== e.lastBlockId
                ? (o.lastBlockId = t.BlockID.fromPartial(e.lastBlockId))
                : (o.lastBlockId = void 0),
              void 0 !== e.lastCommitHash && null !== e.lastCommitHash
                ? (o.lastCommitHash = e.lastCommitHash)
                : (o.lastCommitHash = new Uint8Array()),
              void 0 !== e.dataHash && null !== e.dataHash
                ? (o.dataHash = e.dataHash)
                : (o.dataHash = new Uint8Array()),
              void 0 !== e.validatorsHash && null !== e.validatorsHash
                ? (o.validatorsHash = e.validatorsHash)
                : (o.validatorsHash = new Uint8Array()),
              void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash
                ? (o.nextValidatorsHash = e.nextValidatorsHash)
                : (o.nextValidatorsHash = new Uint8Array()),
              void 0 !== e.consensusHash && null !== e.consensusHash
                ? (o.consensusHash = e.consensusHash)
                : (o.consensusHash = new Uint8Array()),
              void 0 !== e.appHash && null !== e.appHash
                ? (o.appHash = e.appHash)
                : (o.appHash = new Uint8Array()),
              void 0 !== e.lastResultsHash && null !== e.lastResultsHash
                ? (o.lastResultsHash = e.lastResultsHash)
                : (o.lastResultsHash = new Uint8Array()),
              void 0 !== e.evidenceHash && null !== e.evidenceHash
                ? (o.evidenceHash = e.evidenceHash)
                : (o.evidenceHash = new Uint8Array()),
              void 0 !== e.proposerAddress && null !== e.proposerAddress
                ? (o.proposerAddress = e.proposerAddress)
                : (o.proposerAddress = new Uint8Array()),
              o
            );
          },
        };
        const k = {};
        t.Data = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const o of e.txs) t.uint32(10).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, k);
            a.txs = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.txs.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, k);
            if (((t.txs = []), void 0 !== e.txs && null !== e.txs))
              for (const o of e.txs) t.txs.push(N(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.txs
                ? (t.txs = e.txs.map((e) =>
                    T(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.txs = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, k);
            if (((t.txs = []), void 0 !== e.txs && null !== e.txs))
              for (const o of e.txs) t.txs.push(o);
            return t;
          },
        };
        const y = {
          type: 0,
          height: a.default.ZERO,
          round: 0,
          validatorIndex: 0,
        };
        t.Vote = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              0 !== e.type && o.uint32(8).int32(e.type),
              e.height.isZero() || o.uint32(16).int64(e.height),
              0 !== e.round && o.uint32(24).int32(e.round),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(34).fork()).ldelim(),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  B(e.timestamp),
                  o.uint32(42).fork(),
                ).ldelim(),
              0 !== e.validatorAddress.length &&
                o.uint32(50).bytes(e.validatorAddress),
              0 !== e.validatorIndex && o.uint32(56).int32(e.validatorIndex),
              0 !== e.signature.length && o.uint32(66).bytes(e.signature),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, y);
            ((i.validatorAddress = new Uint8Array()),
              (i.signature = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.type = n.int32();
                  break;
                case 2:
                  i.height = n.int64();
                  break;
                case 3:
                  i.round = n.int32();
                  break;
                case 4:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 5:
                  i.timestamp = H(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 6:
                  i.validatorAddress = n.bytes();
                  break;
                case 7:
                  i.validatorIndex = n.int32();
                  break;
                case 8:
                  i.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, y);
            return (
              (o.validatorAddress = new Uint8Array()),
              (o.signature = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (o.type = v(e.type))
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = U(e.timestamp))
                : (o.timestamp = void 0),
              void 0 !== e.validatorAddress &&
                null !== e.validatorAddress &&
                (o.validatorAddress = N(e.validatorAddress)),
              void 0 !== e.validatorIndex && null !== e.validatorIndex
                ? (o.validatorIndex = Number(e.validatorIndex))
                : (o.validatorIndex = 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (o.signature = N(e.signature)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = p(e.type)),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.timestamp &&
                (o.timestamp = e.timestamp.toISOString()),
              void 0 !== e.validatorAddress &&
                (o.validatorAddress = T(
                  void 0 !== e.validatorAddress
                    ? e.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== e.validatorIndex &&
                (o.validatorIndex = e.validatorIndex),
              void 0 !== e.signature &&
                (o.signature = T(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, y);
            return (
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = e.timestamp)
                : (o.timestamp = void 0),
              void 0 !== e.validatorAddress && null !== e.validatorAddress
                ? (o.validatorAddress = e.validatorAddress)
                : (o.validatorAddress = new Uint8Array()),
              void 0 !== e.validatorIndex && null !== e.validatorIndex
                ? (o.validatorIndex = e.validatorIndex)
                : (o.validatorIndex = 0),
              void 0 !== e.signature && null !== e.signature
                ? (o.signature = e.signature)
                : (o.signature = new Uint8Array()),
              o
            );
          },
        };
        const O = { height: a.default.ZERO, round: 0 };
        t.Commit = {
          encode(e, o) {
            (void 0 === o && (o = r.default.Writer.create()),
              e.height.isZero() || o.uint32(8).int64(e.height),
              0 !== e.round && o.uint32(16).int32(e.round),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(26).fork()).ldelim());
            for (const n of e.signatures)
              t.CommitSig.encode(n, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, O);
            i.signatures = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.height = n.int64();
                  break;
                case 2:
                  i.round = n.int32();
                  break;
                case 3:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 4:
                  i.signatures.push(t.CommitSig.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, O);
            if (
              ((o.signatures = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures)
                o.signatures.push(t.CommitSig.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              e.signatures
                ? (o.signatures = e.signatures.map((e) =>
                    e ? t.CommitSig.toJSON(e) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, O);
            if (
              ((o.signatures = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures)
                o.signatures.push(t.CommitSig.fromPartial(n));
            return o;
          },
        };
        const S = { blockIdFlag: 0 };
        t.CommitSig = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.blockIdFlag && t.uint32(8).int32(e.blockIdFlag),
              0 !== e.validatorAddress.length &&
                t.uint32(18).bytes(e.validatorAddress),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  B(e.timestamp),
                  t.uint32(26).fork(),
                ).ldelim(),
              0 !== e.signature.length && t.uint32(34).bytes(e.signature),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, S);
            ((a.validatorAddress = new Uint8Array()),
              (a.signature = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.blockIdFlag = o.int32();
                  break;
                case 2:
                  a.validatorAddress = o.bytes();
                  break;
                case 3:
                  a.timestamp = H(l.Timestamp.decode(o, o.uint32()));
                  break;
                case 4:
                  a.signature = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              (t.validatorAddress = new Uint8Array()),
              (t.signature = new Uint8Array()),
              void 0 !== e.blockIdFlag && null !== e.blockIdFlag
                ? (t.blockIdFlag = f(e.blockIdFlag))
                : (t.blockIdFlag = 0),
              void 0 !== e.validatorAddress &&
                null !== e.validatorAddress &&
                (t.validatorAddress = N(e.validatorAddress)),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = U(e.timestamp))
                : (t.timestamp = void 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (t.signature = N(e.signature)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.blockIdFlag && (t.blockIdFlag = g(e.blockIdFlag)),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = T(
                  void 0 !== e.validatorAddress
                    ? e.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== e.timestamp &&
                (t.timestamp = e.timestamp.toISOString()),
              void 0 !== e.signature &&
                (t.signature = T(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.blockIdFlag && null !== e.blockIdFlag
                ? (t.blockIdFlag = e.blockIdFlag)
                : (t.blockIdFlag = 0),
              void 0 !== e.validatorAddress && null !== e.validatorAddress
                ? (t.validatorAddress = e.validatorAddress)
                : (t.validatorAddress = new Uint8Array()),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = e.timestamp)
                : (t.timestamp = void 0),
              void 0 !== e.signature && null !== e.signature
                ? (t.signature = e.signature)
                : (t.signature = new Uint8Array()),
              t
            );
          },
        };
        const R = { type: 0, height: a.default.ZERO, round: 0, polRound: 0 };
        t.Proposal = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              0 !== e.type && o.uint32(8).int32(e.type),
              e.height.isZero() || o.uint32(16).int64(e.height),
              0 !== e.round && o.uint32(24).int32(e.round),
              0 !== e.polRound && o.uint32(32).int32(e.polRound),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(42).fork()).ldelim(),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  B(e.timestamp),
                  o.uint32(50).fork(),
                ).ldelim(),
              0 !== e.signature.length && o.uint32(58).bytes(e.signature),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, R);
            i.signature = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.type = n.int32();
                  break;
                case 2:
                  i.height = n.int64();
                  break;
                case 3:
                  i.round = n.int32();
                  break;
                case 4:
                  i.polRound = n.int32();
                  break;
                case 5:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 6:
                  i.timestamp = H(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 7:
                  i.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, R);
            return (
              (o.signature = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (o.type = v(e.type))
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.polRound && null !== e.polRound
                ? (o.polRound = Number(e.polRound))
                : (o.polRound = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = U(e.timestamp))
                : (o.timestamp = void 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (o.signature = N(e.signature)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = p(e.type)),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.polRound && (o.polRound = e.polRound),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.timestamp &&
                (o.timestamp = e.timestamp.toISOString()),
              void 0 !== e.signature &&
                (o.signature = T(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, R);
            return (
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.polRound && null !== e.polRound
                ? (o.polRound = e.polRound)
                : (o.polRound = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = e.timestamp)
                : (o.timestamp = void 0),
              void 0 !== e.signature && null !== e.signature
                ? (o.signature = e.signature)
                : (o.signature = new Uint8Array()),
              o
            );
          },
        };
        const P = {};
        t.SignedHeader = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== e.header &&
                t.Header.encode(e.header, o.uint32(10).fork()).ldelim(),
              void 0 !== e.commit &&
                t.Commit.encode(e.commit, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, P);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.header = t.Header.decode(n, n.uint32());
                  break;
                case 2:
                  i.commit = t.Commit.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, P);
            return (
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromJSON(e.header))
                : (o.header = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.Commit.fromJSON(e.commit))
                : (o.commit = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.header &&
                (o.header = e.header ? t.Header.toJSON(e.header) : void 0),
              void 0 !== e.commit &&
                (o.commit = e.commit ? t.Commit.toJSON(e.commit) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, P);
            return (
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromPartial(e.header))
                : (o.header = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.Commit.fromPartial(e.commit))
                : (o.commit = void 0),
              o
            );
          },
        };
        const x = {};
        t.LightBlock = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== e.signedHeader &&
                t.SignedHeader.encode(
                  e.signedHeader,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.validatorSet &&
                d.ValidatorSet.encode(
                  e.validatorSet,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, x);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.signedHeader = t.SignedHeader.decode(n, n.uint32());
                  break;
                case 2:
                  i.validatorSet = d.ValidatorSet.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, x);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (o.signedHeader = t.SignedHeader.fromJSON(e.signedHeader))
                : (o.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (o.validatorSet = d.ValidatorSet.fromJSON(e.validatorSet))
                : (o.validatorSet = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.signedHeader &&
                (o.signedHeader = e.signedHeader
                  ? t.SignedHeader.toJSON(e.signedHeader)
                  : void 0),
              void 0 !== e.validatorSet &&
                (o.validatorSet = e.validatorSet
                  ? d.ValidatorSet.toJSON(e.validatorSet)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, x);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (o.signedHeader = t.SignedHeader.fromPartial(e.signedHeader))
                : (o.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (o.validatorSet = d.ValidatorSet.fromPartial(e.validatorSet))
                : (o.validatorSet = void 0),
              o
            );
          },
        };
        const C = { blockSize: a.default.ZERO, numTxs: a.default.ZERO };
        t.BlockMeta = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(10).fork()).ldelim(),
              e.blockSize.isZero() || o.uint32(16).int64(e.blockSize),
              void 0 !== e.header &&
                t.Header.encode(e.header, o.uint32(26).fork()).ldelim(),
              e.numTxs.isZero() || o.uint32(32).int64(e.numTxs),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, C);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 2:
                  i.blockSize = n.int64();
                  break;
                case 3:
                  i.header = t.Header.decode(n, n.uint32());
                  break;
                case 4:
                  i.numTxs = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, C);
            return (
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.blockSize && null !== e.blockSize
                ? (o.blockSize = a.default.fromString(e.blockSize))
                : (o.blockSize = a.default.ZERO),
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromJSON(e.header))
                : (o.header = void 0),
              void 0 !== e.numTxs && null !== e.numTxs
                ? (o.numTxs = a.default.fromString(e.numTxs))
                : (o.numTxs = a.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.blockSize &&
                (o.blockSize = (e.blockSize || a.default.ZERO).toString()),
              void 0 !== e.header &&
                (o.header = e.header ? t.Header.toJSON(e.header) : void 0),
              void 0 !== e.numTxs &&
                (o.numTxs = (e.numTxs || a.default.ZERO).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, C);
            return (
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.blockSize && null !== e.blockSize
                ? (o.blockSize = e.blockSize)
                : (o.blockSize = a.default.ZERO),
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromPartial(e.header))
                : (o.header = void 0),
              void 0 !== e.numTxs && null !== e.numTxs
                ? (o.numTxs = e.numTxs)
                : (o.numTxs = a.default.ZERO),
              o
            );
          },
        };
        const A = {};
        t.TxProof = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.rootHash.length && t.uint32(10).bytes(e.rootHash),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              void 0 !== e.proof &&
                i.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, A);
            ((a.rootHash = new Uint8Array()), (a.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.rootHash = o.bytes();
                  break;
                case 2:
                  a.data = o.bytes();
                  break;
                case 3:
                  a.proof = i.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, A);
            return (
              (t.rootHash = new Uint8Array()),
              (t.data = new Uint8Array()),
              void 0 !== e.rootHash &&
                null !== e.rootHash &&
                (t.rootHash = N(e.rootHash)),
              void 0 !== e.data && null !== e.data && (t.data = N(e.data)),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromJSON(e.proof))
                : (t.proof = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.rootHash &&
                (t.rootHash = T(
                  void 0 !== e.rootHash ? e.rootHash : new Uint8Array(),
                )),
              void 0 !== e.data &&
                (t.data = T(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.proof &&
                (t.proof = e.proof ? i.Proof.toJSON(e.proof) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, A);
            return (
              void 0 !== e.rootHash && null !== e.rootHash
                ? (t.rootHash = e.rootHash)
                : (t.rootHash = new Uint8Array()),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromPartial(e.proof))
                : (t.proof = void 0),
              t
            );
          },
        };
        var I = (() => {
          if ("undefined" !== typeof I) return I;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const M =
          I.atob || ((e) => I.Buffer.from(e, "base64").toString("binary"));
        function N(e) {
          const t = M(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const E =
          I.btoa || ((e) => I.Buffer.from(e, "binary").toString("base64"));
        function T(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return E(t.join(""));
        }
        function B(e) {
          const t = J(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function H(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function U(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : H(l.Timestamp.fromJSON(e));
        }
        function J(e) {
          return a.default.fromNumber(e);
        }
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure());
      }).call(this, o(13));
    },
    5197: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Consensus = t.App = t.protobufPackage = void 0));
      const a = n(o(2754)),
        r = n(o(2755));
      t.protobufPackage = "tendermint.version";
      const i = { protocol: a.default.UZERO, software: "" };
      t.App = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.protocol.isZero() || t.uint32(8).uint64(e.protocol),
            "" !== e.software && t.uint32(18).string(e.software),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, i);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.protocol = o.uint64();
                break;
              case 2:
                a.software = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.protocol && null !== e.protocol
              ? (t.protocol = a.default.fromString(e.protocol))
              : (t.protocol = a.default.UZERO),
            void 0 !== e.software && null !== e.software
              ? (t.software = String(e.software))
              : (t.software = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.protocol &&
              (t.protocol = (e.protocol || a.default.UZERO).toString()),
            void 0 !== e.software && (t.software = e.software),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.protocol && null !== e.protocol
              ? (t.protocol = e.protocol)
              : (t.protocol = a.default.UZERO),
            void 0 !== e.software && null !== e.software
              ? (t.software = e.software)
              : (t.software = ""),
            t
          );
        },
      };
      const s = { block: a.default.UZERO, app: a.default.UZERO };
      ((t.Consensus = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.block.isZero() || t.uint32(8).uint64(e.block),
            e.app.isZero() || t.uint32(16).uint64(e.app),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, s);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.block = o.uint64();
                break;
              case 2:
                a.app = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.block && null !== e.block
              ? (t.block = a.default.fromString(e.block))
              : (t.block = a.default.UZERO),
            void 0 !== e.app && null !== e.app
              ? (t.app = a.default.fromString(e.app))
              : (t.app = a.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.block &&
              (t.block = (e.block || a.default.UZERO).toString()),
            void 0 !== e.app && (t.app = (e.app || a.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.block && null !== e.block
              ? (t.block = e.block)
              : (t.block = a.default.UZERO),
            void 0 !== e.app && null !== e.app
              ? (t.app = e.app)
              : (t.app = a.default.UZERO),
            t
          );
        },
      }),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
    5198: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SimpleValidator =
            t.Validator =
            t.ValidatorSet =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          r = n(o(2755)),
          i = o(4368);
        t.protobufPackage = "tendermint.types";
        const s = { totalVotingPower: a.default.ZERO };
        t.ValidatorSet = {
          encode(e, o) {
            void 0 === o && (o = r.default.Writer.create());
            for (const n of e.validators)
              t.Validator.encode(n, o.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.proposer &&
                t.Validator.encode(e.proposer, o.uint32(18).fork()).ldelim(),
              e.totalVotingPower.isZero() ||
                o.uint32(24).int64(e.totalVotingPower),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, s);
            i.validators = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.validators.push(t.Validator.decode(n, n.uint32()));
                  break;
                case 2:
                  i.proposer = t.Validator.decode(n, n.uint32());
                  break;
                case 3:
                  i.totalVotingPower = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, s);
            if (
              ((o.validators = []),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.Validator.fromJSON(n));
            return (
              void 0 !== e.proposer && null !== e.proposer
                ? (o.proposer = t.Validator.fromJSON(e.proposer))
                : (o.proposer = void 0),
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? (o.totalVotingPower = a.default.fromString(
                    e.totalVotingPower,
                  ))
                : (o.totalVotingPower = a.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              e.validators
                ? (o.validators = e.validators.map((e) =>
                    e ? t.Validator.toJSON(e) : void 0,
                  ))
                : (o.validators = []),
              void 0 !== e.proposer &&
                (o.proposer = e.proposer
                  ? t.Validator.toJSON(e.proposer)
                  : void 0),
              void 0 !== e.totalVotingPower &&
                (o.totalVotingPower = (
                  e.totalVotingPower || a.default.ZERO
                ).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, s);
            if (
              ((o.validators = []),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.Validator.fromPartial(n));
            return (
              void 0 !== e.proposer && null !== e.proposer
                ? (o.proposer = t.Validator.fromPartial(e.proposer))
                : (o.proposer = void 0),
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? (o.totalVotingPower = e.totalVotingPower)
                : (o.totalVotingPower = a.default.ZERO),
              o
            );
          },
        };
        const d = {
          votingPower: a.default.ZERO,
          proposerPriority: a.default.ZERO,
        };
        t.Validator = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.address.length && t.uint32(10).bytes(e.address),
              void 0 !== e.pubKey &&
                i.PublicKey.encode(e.pubKey, t.uint32(18).fork()).ldelim(),
              e.votingPower.isZero() || t.uint32(24).int64(e.votingPower),
              e.proposerPriority.isZero() ||
                t.uint32(32).int64(e.proposerPriority),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, d);
            a.address = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.address = o.bytes();
                  break;
                case 2:
                  a.pubKey = i.PublicKey.decode(o, o.uint32());
                  break;
                case 3:
                  a.votingPower = o.int64();
                  break;
                case 4:
                  a.proposerPriority = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              (t.address = new Uint8Array()),
              void 0 !== e.address &&
                null !== e.address &&
                (t.address = f(e.address)),
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = a.default.fromString(e.votingPower))
                : (t.votingPower = a.default.ZERO),
              void 0 !== e.proposerPriority && null !== e.proposerPriority
                ? (t.proposerPriority = a.default.fromString(
                    e.proposerPriority,
                  ))
                : (t.proposerPriority = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.address &&
                (t.address = v(
                  void 0 !== e.address ? e.address : new Uint8Array(),
                )),
              void 0 !== e.pubKey &&
                (t.pubKey = e.pubKey ? i.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.votingPower &&
                (t.votingPower = (e.votingPower || a.default.ZERO).toString()),
              void 0 !== e.proposerPriority &&
                (t.proposerPriority = (
                  e.proposerPriority || a.default.ZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.address && null !== e.address
                ? (t.address = e.address)
                : (t.address = new Uint8Array()),
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromPartial(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = e.votingPower)
                : (t.votingPower = a.default.ZERO),
              void 0 !== e.proposerPriority && null !== e.proposerPriority
                ? (t.proposerPriority = e.proposerPriority)
                : (t.proposerPriority = a.default.ZERO),
              t
            );
          },
        };
        const l = { votingPower: a.default.ZERO };
        t.SimpleValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.pubKey &&
                i.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(),
              e.votingPower.isZero() || t.uint32(16).int64(e.votingPower),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, l);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.pubKey = i.PublicKey.decode(o, o.uint32());
                  break;
                case 2:
                  a.votingPower = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = a.default.fromString(e.votingPower))
                : (t.votingPower = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.pubKey &&
                (t.pubKey = e.pubKey ? i.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.votingPower &&
                (t.votingPower = (e.votingPower || a.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromPartial(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = e.votingPower)
                : (t.votingPower = a.default.ZERO),
              t
            );
          },
        };
        var c = (() => {
          if ("undefined" !== typeof c) return c;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const u =
          c.atob || ((e) => c.Buffer.from(e, "base64").toString("binary"));
        function f(e) {
          const t = u(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const g =
          c.btoa || ((e) => c.Buffer.from(e, "binary").toString("base64"));
        function v(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return g(t.join(""));
        }
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure());
      }).call(this, o(13));
    },
    5199: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashedParams =
          t.VersionParams =
          t.ValidatorParams =
          t.EvidenceParams =
          t.BlockParams =
          t.ConsensusParams =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        r = n(o(2755)),
        i = o(4369);
      t.protobufPackage = "tendermint.types";
      const s = {};
      t.ConsensusParams = {
        encode(e, o) {
          return (
            void 0 === o && (o = r.default.Writer.create()),
            void 0 !== e.block &&
              t.BlockParams.encode(e.block, o.uint32(10).fork()).ldelim(),
            void 0 !== e.evidence &&
              t.EvidenceParams.encode(e.evidence, o.uint32(18).fork()).ldelim(),
            void 0 !== e.validator &&
              t.ValidatorParams.encode(
                e.validator,
                o.uint32(26).fork(),
              ).ldelim(),
            void 0 !== e.version &&
              t.VersionParams.encode(e.version, o.uint32(34).fork()).ldelim(),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const i = Object.assign({}, s);
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.block = t.BlockParams.decode(n, n.uint32());
                break;
              case 2:
                i.evidence = t.EvidenceParams.decode(n, n.uint32());
                break;
              case 3:
                i.validator = t.ValidatorParams.decode(n, n.uint32());
                break;
              case 4:
                i.version = t.VersionParams.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const o = Object.assign({}, s);
          return (
            void 0 !== e.block && null !== e.block
              ? (o.block = t.BlockParams.fromJSON(e.block))
              : (o.block = void 0),
            void 0 !== e.evidence && null !== e.evidence
              ? (o.evidence = t.EvidenceParams.fromJSON(e.evidence))
              : (o.evidence = void 0),
            void 0 !== e.validator && null !== e.validator
              ? (o.validator = t.ValidatorParams.fromJSON(e.validator))
              : (o.validator = void 0),
            void 0 !== e.version && null !== e.version
              ? (o.version = t.VersionParams.fromJSON(e.version))
              : (o.version = void 0),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.block &&
              (o.block = e.block ? t.BlockParams.toJSON(e.block) : void 0),
            void 0 !== e.evidence &&
              (o.evidence = e.evidence
                ? t.EvidenceParams.toJSON(e.evidence)
                : void 0),
            void 0 !== e.validator &&
              (o.validator = e.validator
                ? t.ValidatorParams.toJSON(e.validator)
                : void 0),
            void 0 !== e.version &&
              (o.version = e.version
                ? t.VersionParams.toJSON(e.version)
                : void 0),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, s);
          return (
            void 0 !== e.block && null !== e.block
              ? (o.block = t.BlockParams.fromPartial(e.block))
              : (o.block = void 0),
            void 0 !== e.evidence && null !== e.evidence
              ? (o.evidence = t.EvidenceParams.fromPartial(e.evidence))
              : (o.evidence = void 0),
            void 0 !== e.validator && null !== e.validator
              ? (o.validator = t.ValidatorParams.fromPartial(e.validator))
              : (o.validator = void 0),
            void 0 !== e.version && null !== e.version
              ? (o.version = t.VersionParams.fromPartial(e.version))
              : (o.version = void 0),
            o
          );
        },
      };
      const d = {
        maxBytes: a.default.ZERO,
        maxGas: a.default.ZERO,
        timeIotaMs: a.default.ZERO,
      };
      t.BlockParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.maxBytes.isZero() || t.uint32(8).int64(e.maxBytes),
            e.maxGas.isZero() || t.uint32(16).int64(e.maxGas),
            e.timeIotaMs.isZero() || t.uint32(24).int64(e.timeIotaMs),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.maxBytes = o.int64();
                break;
              case 2:
                a.maxGas = o.int64();
                break;
              case 3:
                a.timeIotaMs = o.int64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = a.default.fromString(e.maxBytes))
              : (t.maxBytes = a.default.ZERO),
            void 0 !== e.maxGas && null !== e.maxGas
              ? (t.maxGas = a.default.fromString(e.maxGas))
              : (t.maxGas = a.default.ZERO),
            void 0 !== e.timeIotaMs && null !== e.timeIotaMs
              ? (t.timeIotaMs = a.default.fromString(e.timeIotaMs))
              : (t.timeIotaMs = a.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxBytes &&
              (t.maxBytes = (e.maxBytes || a.default.ZERO).toString()),
            void 0 !== e.maxGas &&
              (t.maxGas = (e.maxGas || a.default.ZERO).toString()),
            void 0 !== e.timeIotaMs &&
              (t.timeIotaMs = (e.timeIotaMs || a.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = e.maxBytes)
              : (t.maxBytes = a.default.ZERO),
            void 0 !== e.maxGas && null !== e.maxGas
              ? (t.maxGas = e.maxGas)
              : (t.maxGas = a.default.ZERO),
            void 0 !== e.timeIotaMs && null !== e.timeIotaMs
              ? (t.timeIotaMs = e.timeIotaMs)
              : (t.timeIotaMs = a.default.ZERO),
            t
          );
        },
      };
      const l = { maxAgeNumBlocks: a.default.ZERO, maxBytes: a.default.ZERO };
      t.EvidenceParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.maxAgeNumBlocks.isZero() || t.uint32(8).int64(e.maxAgeNumBlocks),
            void 0 !== e.maxAgeDuration &&
              i.Duration.encode(e.maxAgeDuration, t.uint32(18).fork()).ldelim(),
            e.maxBytes.isZero() || t.uint32(24).int64(e.maxBytes),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.maxAgeNumBlocks = o.int64();
                break;
              case 2:
                a.maxAgeDuration = i.Duration.decode(o, o.uint32());
                break;
              case 3:
                a.maxBytes = o.int64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.maxAgeNumBlocks && null !== e.maxAgeNumBlocks
              ? (t.maxAgeNumBlocks = a.default.fromString(e.maxAgeNumBlocks))
              : (t.maxAgeNumBlocks = a.default.ZERO),
            void 0 !== e.maxAgeDuration && null !== e.maxAgeDuration
              ? (t.maxAgeDuration = i.Duration.fromJSON(e.maxAgeDuration))
              : (t.maxAgeDuration = void 0),
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = a.default.fromString(e.maxBytes))
              : (t.maxBytes = a.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxAgeNumBlocks &&
              (t.maxAgeNumBlocks = (
                e.maxAgeNumBlocks || a.default.ZERO
              ).toString()),
            void 0 !== e.maxAgeDuration &&
              (t.maxAgeDuration = e.maxAgeDuration
                ? i.Duration.toJSON(e.maxAgeDuration)
                : void 0),
            void 0 !== e.maxBytes &&
              (t.maxBytes = (e.maxBytes || a.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.maxAgeNumBlocks && null !== e.maxAgeNumBlocks
              ? (t.maxAgeNumBlocks = e.maxAgeNumBlocks)
              : (t.maxAgeNumBlocks = a.default.ZERO),
            void 0 !== e.maxAgeDuration && null !== e.maxAgeDuration
              ? (t.maxAgeDuration = i.Duration.fromPartial(e.maxAgeDuration))
              : (t.maxAgeDuration = void 0),
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = e.maxBytes)
              : (t.maxBytes = a.default.ZERO),
            t
          );
        },
      };
      const c = { pubKeyTypes: "" };
      t.ValidatorParams = {
        encode(e, t) {
          void 0 === t && (t = r.default.Writer.create());
          for (const o of e.pubKeyTypes) t.uint32(10).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, c);
          a.pubKeyTypes = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.pubKeyTypes.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (
            ((t.pubKeyTypes = []),
            void 0 !== e.pubKeyTypes && null !== e.pubKeyTypes)
          )
            for (const o of e.pubKeyTypes) t.pubKeyTypes.push(String(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.pubKeyTypes
              ? (t.pubKeyTypes = e.pubKeyTypes.map((e) => e))
              : (t.pubKeyTypes = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (
            ((t.pubKeyTypes = []),
            void 0 !== e.pubKeyTypes && null !== e.pubKeyTypes)
          )
            for (const o of e.pubKeyTypes) t.pubKeyTypes.push(o);
          return t;
        },
      };
      const u = { appVersion: a.default.UZERO };
      t.VersionParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.appVersion.isZero() || t.uint32(8).uint64(e.appVersion),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, u);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.appVersion = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.appVersion && null !== e.appVersion
              ? (t.appVersion = a.default.fromString(e.appVersion))
              : (t.appVersion = a.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.appVersion &&
              (t.appVersion = (e.appVersion || a.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.appVersion && null !== e.appVersion
              ? (t.appVersion = e.appVersion)
              : (t.appVersion = a.default.UZERO),
            t
          );
        },
      };
      const f = { blockMaxBytes: a.default.ZERO, blockMaxGas: a.default.ZERO };
      ((t.HashedParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.blockMaxBytes.isZero() || t.uint32(8).int64(e.blockMaxBytes),
            e.blockMaxGas.isZero() || t.uint32(16).int64(e.blockMaxGas),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, f);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.blockMaxBytes = o.int64();
                break;
              case 2:
                a.blockMaxGas = o.int64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.blockMaxBytes && null !== e.blockMaxBytes
              ? (t.blockMaxBytes = a.default.fromString(e.blockMaxBytes))
              : (t.blockMaxBytes = a.default.ZERO),
            void 0 !== e.blockMaxGas && null !== e.blockMaxGas
              ? (t.blockMaxGas = a.default.fromString(e.blockMaxGas))
              : (t.blockMaxGas = a.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.blockMaxBytes &&
              (t.blockMaxBytes = (
                e.blockMaxBytes || a.default.ZERO
              ).toString()),
            void 0 !== e.blockMaxGas &&
              (t.blockMaxGas = (e.blockMaxGas || a.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.blockMaxBytes && null !== e.blockMaxBytes
              ? (t.blockMaxBytes = e.blockMaxBytes)
              : (t.blockMaxBytes = a.default.ZERO),
            void 0 !== e.blockMaxGas && null !== e.blockMaxGas
              ? (t.blockMaxGas = e.blockMaxGas)
              : (t.blockMaxGas = a.default.ZERO),
            t
          );
        },
      }),
        r.default.util.Long !== a.default &&
          ((r.default.util.Long = a.default), r.default.configure()));
    },
  },
]);
