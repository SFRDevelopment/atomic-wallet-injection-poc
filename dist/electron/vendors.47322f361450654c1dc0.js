(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [304, 303],
  {
    2979: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrpcWebImpl =
            t.MsgAcknowledgementDesc =
            t.MsgTimeoutOnCloseDesc =
            t.MsgTimeoutDesc =
            t.MsgRecvPacketDesc =
            t.MsgChannelCloseConfirmDesc =
            t.MsgChannelCloseInitDesc =
            t.MsgChannelOpenConfirmDesc =
            t.MsgChannelOpenAckDesc =
            t.MsgChannelOpenTryDesc =
            t.MsgChannelOpenInitDesc =
            t.MsgDesc =
            t.MsgClientImpl =
            t.MsgAcknowledgementResponse =
            t.MsgAcknowledgement =
            t.MsgTimeoutOnCloseResponse =
            t.MsgTimeoutOnClose =
            t.MsgTimeoutResponse =
            t.MsgTimeout =
            t.MsgRecvPacketResponse =
            t.MsgRecvPacket =
            t.MsgChannelCloseConfirmResponse =
            t.MsgChannelCloseConfirm =
            t.MsgChannelCloseInitResponse =
            t.MsgChannelCloseInit =
            t.MsgChannelOpenConfirmResponse =
            t.MsgChannelOpenConfirm =
            t.MsgChannelOpenAckResponse =
            t.MsgChannelOpenAck =
            t.MsgChannelOpenTryResponse =
            t.MsgChannelOpenTry =
            t.MsgChannelOpenInitResponse =
            t.MsgChannelOpenInit =
            t.responseResultTypeToJSON =
            t.responseResultTypeFromJSON =
            t.ResponseResultType =
            t.protobufPackage =
              void 0));
        const r = o(n(2754)),
          i = n(2889),
          s = o(n(2755)),
          a = n(3301),
          d = n(3058),
          c = n(2890);
        var l;
        function u(e) {
          switch (e) {
            case 0:
            case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
              return l.RESPONSE_RESULT_TYPE_UNSPECIFIED;
            case 1:
            case "RESPONSE_RESULT_TYPE_NOOP":
              return l.RESPONSE_RESULT_TYPE_NOOP;
            case 2:
            case "RESPONSE_RESULT_TYPE_SUCCESS":
              return l.RESPONSE_RESULT_TYPE_SUCCESS;
            case -1:
            case "UNRECOGNIZED":
            default:
              return l.UNRECOGNIZED;
          }
        }
        function p(e) {
          switch (e) {
            case l.RESPONSE_RESULT_TYPE_UNSPECIFIED:
              return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
            case l.RESPONSE_RESULT_TYPE_NOOP:
              return "RESPONSE_RESULT_TYPE_NOOP";
            case l.RESPONSE_RESULT_TYPE_SUCCESS:
              return "RESPONSE_RESULT_TYPE_SUCCESS";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "ibc.core.channel.v1"),
          (function (e) {
            ((e[(e["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0)] =
              "RESPONSE_RESULT_TYPE_UNSPECIFIED"),
              (e[(e["RESPONSE_RESULT_TYPE_NOOP"] = 1)] =
                "RESPONSE_RESULT_TYPE_NOOP"),
              (e[(e["RESPONSE_RESULT_TYPE_SUCCESS"] = 2)] =
                "RESPONSE_RESULT_TYPE_SUCCESS"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((l = t.ResponseResultType || (t.ResponseResultType = {}))),
          (t.responseResultTypeFromJSON = u),
          (t.responseResultTypeToJSON = p));
        const f = { portId: "", signer: "" };
        t.MsgChannelOpenInit = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              void 0 !== e.channel &&
                a.Channel.encode(e.channel, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, f);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channel = a.Channel.decode(n, n.uint32());
                  break;
                case 3:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channel && null !== e.channel
                ? (t.channel = a.Channel.fromJSON(e.channel))
                : (t.channel = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channel &&
                (t.channel = e.channel ? a.Channel.toJSON(e.channel) : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channel && null !== e.channel
                ? (t.channel = a.Channel.fromPartial(e.channel))
                : (t.channel = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const g = { channelId: "" };
        t.MsgChannelOpenInitResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.channelId && t.uint32(10).string(e.channelId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, g);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.channelId = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.channelId && (t.channelId = e.channelId), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              t
            );
          },
        };
        const h = {
          portId: "",
          previousChannelId: "",
          counterpartyVersion: "",
          signer: "",
        };
        t.MsgChannelOpenTry = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.previousChannelId &&
                t.uint32(18).string(e.previousChannelId),
              void 0 !== e.channel &&
                a.Channel.encode(e.channel, t.uint32(26).fork()).ldelim(),
              "" !== e.counterpartyVersion &&
                t.uint32(34).string(e.counterpartyVersion),
              0 !== e.proofInit.length && t.uint32(42).bytes(e.proofInit),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(50).fork()).ldelim(),
              "" !== e.signer && t.uint32(58).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, h);
            r.proofInit = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.previousChannelId = n.string();
                  break;
                case 3:
                  r.channel = a.Channel.decode(n, n.uint32());
                  break;
                case 4:
                  r.counterpartyVersion = n.string();
                  break;
                case 5:
                  r.proofInit = n.bytes();
                  break;
                case 6:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 7:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              (t.proofInit = new Uint8Array()),
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.previousChannelId && null !== e.previousChannelId
                ? (t.previousChannelId = String(e.previousChannelId))
                : (t.previousChannelId = ""),
              void 0 !== e.channel && null !== e.channel
                ? (t.channel = a.Channel.fromJSON(e.channel))
                : (t.channel = void 0),
              void 0 !== e.counterpartyVersion && null !== e.counterpartyVersion
                ? (t.counterpartyVersion = String(e.counterpartyVersion))
                : (t.counterpartyVersion = ""),
              void 0 !== e.proofInit &&
                null !== e.proofInit &&
                (t.proofInit = j(e.proofInit)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.previousChannelId &&
                (t.previousChannelId = e.previousChannelId),
              void 0 !== e.channel &&
                (t.channel = e.channel ? a.Channel.toJSON(e.channel) : void 0),
              void 0 !== e.counterpartyVersion &&
                (t.counterpartyVersion = e.counterpartyVersion),
              void 0 !== e.proofInit &&
                (t.proofInit = D(
                  void 0 !== e.proofInit ? e.proofInit : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.previousChannelId && null !== e.previousChannelId
                ? (t.previousChannelId = e.previousChannelId)
                : (t.previousChannelId = ""),
              void 0 !== e.channel && null !== e.channel
                ? (t.channel = a.Channel.fromPartial(e.channel))
                : (t.channel = void 0),
              void 0 !== e.counterpartyVersion && null !== e.counterpartyVersion
                ? (t.counterpartyVersion = e.counterpartyVersion)
                : (t.counterpartyVersion = ""),
              void 0 !== e.proofInit && null !== e.proofInit
                ? (t.proofInit = e.proofInit)
                : (t.proofInit = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const v = {};
        t.MsgChannelOpenTryResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, v);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return t;
          },
        };
        const m = {
          portId: "",
          channelId: "",
          counterpartyChannelId: "",
          counterpartyVersion: "",
          signer: "",
        };
        t.MsgChannelOpenAck = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              "" !== e.counterpartyChannelId &&
                t.uint32(26).string(e.counterpartyChannelId),
              "" !== e.counterpartyVersion &&
                t.uint32(34).string(e.counterpartyVersion),
              0 !== e.proofTry.length && t.uint32(42).bytes(e.proofTry),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(50).fork()).ldelim(),
              "" !== e.signer && t.uint32(58).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, m);
            r.proofTry = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                case 3:
                  r.counterpartyChannelId = n.string();
                  break;
                case 4:
                  r.counterpartyVersion = n.string();
                  break;
                case 5:
                  r.proofTry = n.bytes();
                  break;
                case 6:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 7:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.proofTry = new Uint8Array()),
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              void 0 !== e.counterpartyChannelId &&
              null !== e.counterpartyChannelId
                ? (t.counterpartyChannelId = String(e.counterpartyChannelId))
                : (t.counterpartyChannelId = ""),
              void 0 !== e.counterpartyVersion && null !== e.counterpartyVersion
                ? (t.counterpartyVersion = String(e.counterpartyVersion))
                : (t.counterpartyVersion = ""),
              void 0 !== e.proofTry &&
                null !== e.proofTry &&
                (t.proofTry = j(e.proofTry)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              void 0 !== e.counterpartyChannelId &&
                (t.counterpartyChannelId = e.counterpartyChannelId),
              void 0 !== e.counterpartyVersion &&
                (t.counterpartyVersion = e.counterpartyVersion),
              void 0 !== e.proofTry &&
                (t.proofTry = D(
                  void 0 !== e.proofTry ? e.proofTry : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              void 0 !== e.counterpartyChannelId &&
              null !== e.counterpartyChannelId
                ? (t.counterpartyChannelId = e.counterpartyChannelId)
                : (t.counterpartyChannelId = ""),
              void 0 !== e.counterpartyVersion && null !== e.counterpartyVersion
                ? (t.counterpartyVersion = e.counterpartyVersion)
                : (t.counterpartyVersion = ""),
              void 0 !== e.proofTry && null !== e.proofTry
                ? (t.proofTry = e.proofTry)
                : (t.proofTry = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const I = {};
        t.MsgChannelOpenAckResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, I);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, I);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, I);
            return t;
          },
        };
        const S = { portId: "", channelId: "", signer: "" };
        t.MsgChannelOpenConfirm = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              0 !== e.proofAck.length && t.uint32(26).bytes(e.proofAck),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(),
              "" !== e.signer && t.uint32(42).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, S);
            r.proofAck = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                case 3:
                  r.proofAck = n.bytes();
                  break;
                case 4:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 5:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              (t.proofAck = new Uint8Array()),
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              void 0 !== e.proofAck &&
                null !== e.proofAck &&
                (t.proofAck = j(e.proofAck)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              void 0 !== e.proofAck &&
                (t.proofAck = D(
                  void 0 !== e.proofAck ? e.proofAck : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              void 0 !== e.proofAck && null !== e.proofAck
                ? (t.proofAck = e.proofAck)
                : (t.proofAck = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const b = {};
        t.MsgChannelOpenConfirmResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, b);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
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
        const O = { portId: "", channelId: "", signer: "" };
        t.MsgChannelCloseInit = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, O);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                case 3:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, O);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, O);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const y = {};
        t.MsgChannelCloseInitResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, y);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, y);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, y);
            return t;
          },
        };
        const C = { portId: "", channelId: "", signer: "" };
        t.MsgChannelCloseConfirm = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              0 !== e.proofInit.length && t.uint32(26).bytes(e.proofInit),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(),
              "" !== e.signer && t.uint32(42).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, C);
            r.proofInit = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                case 3:
                  r.proofInit = n.bytes();
                  break;
                case 4:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 5:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, C);
            return (
              (t.proofInit = new Uint8Array()),
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              void 0 !== e.proofInit &&
                null !== e.proofInit &&
                (t.proofInit = j(e.proofInit)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              void 0 !== e.proofInit &&
                (t.proofInit = D(
                  void 0 !== e.proofInit ? e.proofInit : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, C);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              void 0 !== e.proofInit && null !== e.proofInit
                ? (t.proofInit = e.proofInit)
                : (t.proofInit = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const k = {};
        t.MsgChannelCloseConfirmResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, k);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
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
        const P = { signer: "" };
        t.MsgRecvPacket = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              void 0 !== e.packet &&
                a.Packet.encode(e.packet, t.uint32(10).fork()).ldelim(),
              0 !== e.proofCommitment.length &&
                t.uint32(18).bytes(e.proofCommitment),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              "" !== e.signer && t.uint32(34).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, P);
            r.proofCommitment = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.packet = a.Packet.decode(n, n.uint32());
                  break;
                case 2:
                  r.proofCommitment = n.bytes();
                  break;
                case 3:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 4:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, P);
            return (
              (t.proofCommitment = new Uint8Array()),
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromJSON(e.packet))
                : (t.packet = void 0),
              void 0 !== e.proofCommitment &&
                null !== e.proofCommitment &&
                (t.proofCommitment = j(e.proofCommitment)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.packet &&
                (t.packet = e.packet ? a.Packet.toJSON(e.packet) : void 0),
              void 0 !== e.proofCommitment &&
                (t.proofCommitment = D(
                  void 0 !== e.proofCommitment
                    ? e.proofCommitment
                    : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, P);
            return (
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromPartial(e.packet))
                : (t.packet = void 0),
              void 0 !== e.proofCommitment && null !== e.proofCommitment
                ? (t.proofCommitment = e.proofCommitment)
                : (t.proofCommitment = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const H = { result: 0 };
        t.MsgRecvPacketResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.result && t.uint32(8).int32(e.result),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, H);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.result = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, H);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = u(e.result))
                : (t.result = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.result && (t.result = p(e.result)), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, H);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = 0),
              t
            );
          },
        };
        const N = { nextSequenceRecv: r.default.UZERO, signer: "" };
        t.MsgTimeout = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              void 0 !== e.packet &&
                a.Packet.encode(e.packet, t.uint32(10).fork()).ldelim(),
              0 !== e.proofUnreceived.length &&
                t.uint32(18).bytes(e.proofUnreceived),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              e.nextSequenceRecv.isZero() ||
                t.uint32(32).uint64(e.nextSequenceRecv),
              "" !== e.signer && t.uint32(42).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, N);
            r.proofUnreceived = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.packet = a.Packet.decode(n, n.uint32());
                  break;
                case 2:
                  r.proofUnreceived = n.bytes();
                  break;
                case 3:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 4:
                  r.nextSequenceRecv = n.uint64();
                  break;
                case 5:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, N);
            return (
              (t.proofUnreceived = new Uint8Array()),
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromJSON(e.packet))
                : (t.packet = void 0),
              void 0 !== e.proofUnreceived &&
                null !== e.proofUnreceived &&
                (t.proofUnreceived = j(e.proofUnreceived)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv
                ? (t.nextSequenceRecv = r.default.fromString(
                    e.nextSequenceRecv,
                  ))
                : (t.nextSequenceRecv = r.default.UZERO),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.packet &&
                (t.packet = e.packet ? a.Packet.toJSON(e.packet) : void 0),
              void 0 !== e.proofUnreceived &&
                (t.proofUnreceived = D(
                  void 0 !== e.proofUnreceived
                    ? e.proofUnreceived
                    : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.nextSequenceRecv &&
                (t.nextSequenceRecv = (
                  e.nextSequenceRecv || r.default.UZERO
                ).toString()),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, N);
            return (
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromPartial(e.packet))
                : (t.packet = void 0),
              void 0 !== e.proofUnreceived && null !== e.proofUnreceived
                ? (t.proofUnreceived = e.proofUnreceived)
                : (t.proofUnreceived = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv
                ? (t.nextSequenceRecv = e.nextSequenceRecv)
                : (t.nextSequenceRecv = r.default.UZERO),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const w = { result: 0 };
        t.MsgTimeoutResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.result && t.uint32(8).int32(e.result),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, w);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.result = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, w);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = u(e.result))
                : (t.result = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.result && (t.result = p(e.result)), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, w);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = 0),
              t
            );
          },
        };
        const T = { nextSequenceRecv: r.default.UZERO, signer: "" };
        t.MsgTimeoutOnClose = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              void 0 !== e.packet &&
                a.Packet.encode(e.packet, t.uint32(10).fork()).ldelim(),
              0 !== e.proofUnreceived.length &&
                t.uint32(18).bytes(e.proofUnreceived),
              0 !== e.proofClose.length && t.uint32(26).bytes(e.proofClose),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(),
              e.nextSequenceRecv.isZero() ||
                t.uint32(40).uint64(e.nextSequenceRecv),
              "" !== e.signer && t.uint32(50).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, T);
            ((r.proofUnreceived = new Uint8Array()),
              (r.proofClose = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.packet = a.Packet.decode(n, n.uint32());
                  break;
                case 2:
                  r.proofUnreceived = n.bytes();
                  break;
                case 3:
                  r.proofClose = n.bytes();
                  break;
                case 4:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 5:
                  r.nextSequenceRecv = n.uint64();
                  break;
                case 6:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, T);
            return (
              (t.proofUnreceived = new Uint8Array()),
              (t.proofClose = new Uint8Array()),
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromJSON(e.packet))
                : (t.packet = void 0),
              void 0 !== e.proofUnreceived &&
                null !== e.proofUnreceived &&
                (t.proofUnreceived = j(e.proofUnreceived)),
              void 0 !== e.proofClose &&
                null !== e.proofClose &&
                (t.proofClose = j(e.proofClose)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv
                ? (t.nextSequenceRecv = r.default.fromString(
                    e.nextSequenceRecv,
                  ))
                : (t.nextSequenceRecv = r.default.UZERO),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.packet &&
                (t.packet = e.packet ? a.Packet.toJSON(e.packet) : void 0),
              void 0 !== e.proofUnreceived &&
                (t.proofUnreceived = D(
                  void 0 !== e.proofUnreceived
                    ? e.proofUnreceived
                    : new Uint8Array(),
                )),
              void 0 !== e.proofClose &&
                (t.proofClose = D(
                  void 0 !== e.proofClose ? e.proofClose : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.nextSequenceRecv &&
                (t.nextSequenceRecv = (
                  e.nextSequenceRecv || r.default.UZERO
                ).toString()),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, T);
            return (
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromPartial(e.packet))
                : (t.packet = void 0),
              void 0 !== e.proofUnreceived && null !== e.proofUnreceived
                ? (t.proofUnreceived = e.proofUnreceived)
                : (t.proofUnreceived = new Uint8Array()),
              void 0 !== e.proofClose && null !== e.proofClose
                ? (t.proofClose = e.proofClose)
                : (t.proofClose = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv
                ? (t.nextSequenceRecv = e.nextSequenceRecv)
                : (t.nextSequenceRecv = r.default.UZERO),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const R = { result: 0 };
        t.MsgTimeoutOnCloseResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.result && t.uint32(8).int32(e.result),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, R);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.result = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, R);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = u(e.result))
                : (t.result = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.result && (t.result = p(e.result)), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, R);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = 0),
              t
            );
          },
        };
        const E = { signer: "" };
        t.MsgAcknowledgement = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              void 0 !== e.packet &&
                a.Packet.encode(e.packet, t.uint32(10).fork()).ldelim(),
              0 !== e.acknowledgement.length &&
                t.uint32(18).bytes(e.acknowledgement),
              0 !== e.proofAcked.length && t.uint32(26).bytes(e.proofAcked),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(),
              "" !== e.signer && t.uint32(42).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, E);
            ((r.acknowledgement = new Uint8Array()),
              (r.proofAcked = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.packet = a.Packet.decode(n, n.uint32());
                  break;
                case 2:
                  r.acknowledgement = n.bytes();
                  break;
                case 3:
                  r.proofAcked = n.bytes();
                  break;
                case 4:
                  r.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 5:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, E);
            return (
              (t.acknowledgement = new Uint8Array()),
              (t.proofAcked = new Uint8Array()),
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromJSON(e.packet))
                : (t.packet = void 0),
              void 0 !== e.acknowledgement &&
                null !== e.acknowledgement &&
                (t.acknowledgement = j(e.acknowledgement)),
              void 0 !== e.proofAcked &&
                null !== e.proofAcked &&
                (t.proofAcked = j(e.proofAcked)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.packet &&
                (t.packet = e.packet ? a.Packet.toJSON(e.packet) : void 0),
              void 0 !== e.acknowledgement &&
                (t.acknowledgement = D(
                  void 0 !== e.acknowledgement
                    ? e.acknowledgement
                    : new Uint8Array(),
                )),
              void 0 !== e.proofAcked &&
                (t.proofAcked = D(
                  void 0 !== e.proofAcked ? e.proofAcked : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, E);
            return (
              void 0 !== e.packet && null !== e.packet
                ? (t.packet = a.Packet.fromPartial(e.packet))
                : (t.packet = void 0),
              void 0 !== e.acknowledgement && null !== e.acknowledgement
                ? (t.acknowledgement = e.acknowledgement)
                : (t.acknowledgement = new Uint8Array()),
              void 0 !== e.proofAcked && null !== e.proofAcked
                ? (t.proofAcked = e.proofAcked)
                : (t.proofAcked = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const U = { result: 0 };
        t.MsgAcknowledgementResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.result && t.uint32(8).int32(e.result),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, U);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.result = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, U);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = u(e.result))
                : (t.result = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.result && (t.result = p(e.result)), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, U);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = 0),
              t
            );
          },
        };
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.ChannelOpenInit = this.ChannelOpenInit.bind(this)),
              (this.ChannelOpenTry = this.ChannelOpenTry.bind(this)),
              (this.ChannelOpenAck = this.ChannelOpenAck.bind(this)),
              (this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this)),
              (this.ChannelCloseInit = this.ChannelCloseInit.bind(this)),
              (this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this)),
              (this.RecvPacket = this.RecvPacket.bind(this)),
              (this.Timeout = this.Timeout.bind(this)),
              (this.TimeoutOnClose = this.TimeoutOnClose.bind(this)),
              (this.Acknowledgement = this.Acknowledgement.bind(this)));
          }
          ChannelOpenInit(e, n) {
            return this.rpc.unary(
              t.MsgChannelOpenInitDesc,
              t.MsgChannelOpenInit.fromPartial(e),
              n,
            );
          }
          ChannelOpenTry(e, n) {
            return this.rpc.unary(
              t.MsgChannelOpenTryDesc,
              t.MsgChannelOpenTry.fromPartial(e),
              n,
            );
          }
          ChannelOpenAck(e, n) {
            return this.rpc.unary(
              t.MsgChannelOpenAckDesc,
              t.MsgChannelOpenAck.fromPartial(e),
              n,
            );
          }
          ChannelOpenConfirm(e, n) {
            return this.rpc.unary(
              t.MsgChannelOpenConfirmDesc,
              t.MsgChannelOpenConfirm.fromPartial(e),
              n,
            );
          }
          ChannelCloseInit(e, n) {
            return this.rpc.unary(
              t.MsgChannelCloseInitDesc,
              t.MsgChannelCloseInit.fromPartial(e),
              n,
            );
          }
          ChannelCloseConfirm(e, n) {
            return this.rpc.unary(
              t.MsgChannelCloseConfirmDesc,
              t.MsgChannelCloseConfirm.fromPartial(e),
              n,
            );
          }
          RecvPacket(e, n) {
            return this.rpc.unary(
              t.MsgRecvPacketDesc,
              t.MsgRecvPacket.fromPartial(e),
              n,
            );
          }
          Timeout(e, n) {
            return this.rpc.unary(
              t.MsgTimeoutDesc,
              t.MsgTimeout.fromPartial(e),
              n,
            );
          }
          TimeoutOnClose(e, n) {
            return this.rpc.unary(
              t.MsgTimeoutOnCloseDesc,
              t.MsgTimeoutOnClose.fromPartial(e),
              n,
            );
          }
          Acknowledgement(e, n) {
            return this.rpc.unary(
              t.MsgAcknowledgementDesc,
              t.MsgAcknowledgement.fromPartial(e),
              n,
            );
          }
        }
        ((t.MsgClientImpl = MsgClientImpl),
          (t.MsgDesc = { serviceName: "ibc.core.channel.v1.Msg" }),
          (t.MsgChannelOpenInitDesc = {
            methodName: "ChannelOpenInit",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgChannelOpenInit.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgChannelOpenInitResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgChannelOpenTryDesc = {
            methodName: "ChannelOpenTry",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgChannelOpenTry.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgChannelOpenTryResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgChannelOpenAckDesc = {
            methodName: "ChannelOpenAck",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgChannelOpenAck.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgChannelOpenAckResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgChannelOpenConfirmDesc = {
            methodName: "ChannelOpenConfirm",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgChannelOpenConfirm.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgChannelOpenConfirmResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgChannelCloseInitDesc = {
            methodName: "ChannelCloseInit",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgChannelCloseInit.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgChannelCloseInitResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgChannelCloseConfirmDesc = {
            methodName: "ChannelCloseConfirm",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgChannelCloseConfirm.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgChannelCloseConfirmResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgRecvPacketDesc = {
            methodName: "RecvPacket",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgRecvPacket.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgRecvPacketResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgTimeoutDesc = {
            methodName: "Timeout",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgTimeout.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgTimeoutResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgTimeoutOnCloseDesc = {
            methodName: "TimeoutOnClose",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgTimeoutOnClose.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgTimeoutOnCloseResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgAcknowledgementDesc = {
            methodName: "Acknowledgement",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgAcknowledgement.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgAcknowledgementResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }));
        class GrpcWebImpl {
          constructor(e, t) {
            ((this.host = e), (this.options = t));
          }
          unary(e, t, n) {
            var o;
            const r = Object.assign(Object.assign({}, t), e.requestType),
              s =
                n && this.options.metadata
                  ? new c.BrowserHeaders(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (o = this.options) || void 0 === o
                            ? void 0
                            : o.metadata.headersMap,
                        ),
                        null === n || void 0 === n ? void 0 : n.headersMap,
                      ),
                    )
                  : n || this.options.metadata;
            return new Promise((t, n) => {
              i.grpc.unary(e, {
                request: r,
                host: this.host,
                metadata: s,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (e.status === i.grpc.Code.OK) t(e.message);
                  else {
                    const t = new Error(e.statusMessage);
                    ((t.code = e.status), (t.metadata = e.trailers), n(t));
                  }
                },
              });
            });
          }
        }
        t.GrpcWebImpl = GrpcWebImpl;
        var A = (() => {
          if ("undefined" !== typeof A) return A;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const M =
          A.atob || ((e) => A.Buffer.from(e, "base64").toString("binary"));
        function j(e) {
          const t = M(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const J =
          A.btoa || ((e) => A.Buffer.from(e, "binary").toString("base64"));
        function D(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return J(t.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, n(13));
    },
    3058: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params =
          t.Height =
          t.UpgradeProposal =
          t.ClientUpdateProposal =
          t.ClientConsensusStates =
          t.ConsensusStateWithHeight =
          t.IdentifiedClientState =
          t.protobufPackage =
            void 0));
      const r = o(n(2754)),
        i = o(n(2755)),
        s = n(2759),
        a = n(4314);
      t.protobufPackage = "ibc.core.client.v1";
      const d = { clientId: "" };
      t.IdentifiedClientState = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId),
            void 0 !== e.clientState &&
              s.Any.encode(e.clientState, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, d);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.clientId = n.string();
                break;
              case 2:
                r.clientState = s.Any.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = String(e.clientId))
              : (t.clientId = ""),
            void 0 !== e.clientState && null !== e.clientState
              ? (t.clientState = s.Any.fromJSON(e.clientState))
              : (t.clientState = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.clientId && (t.clientId = e.clientId),
            void 0 !== e.clientState &&
              (t.clientState = e.clientState
                ? s.Any.toJSON(e.clientState)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = e.clientId)
              : (t.clientId = ""),
            void 0 !== e.clientState && null !== e.clientState
              ? (t.clientState = s.Any.fromPartial(e.clientState))
              : (t.clientState = void 0),
            t
          );
        },
      };
      const c = {};
      t.ConsensusStateWithHeight = {
        encode(e, n) {
          return (
            void 0 === n && (n = i.default.Writer.create()),
            void 0 !== e.height &&
              t.Height.encode(e.height, n.uint32(10).fork()).ldelim(),
            void 0 !== e.consensusState &&
              s.Any.encode(e.consensusState, n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(e, n) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === n ? o.len : o.pos + n;
          const a = Object.assign({}, c);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.height = t.Height.decode(o, o.uint32());
                break;
              case 2:
                a.consensusState = s.Any.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const n = Object.assign({}, c);
          return (
            void 0 !== e.height && null !== e.height
              ? (n.height = t.Height.fromJSON(e.height))
              : (n.height = void 0),
            void 0 !== e.consensusState && null !== e.consensusState
              ? (n.consensusState = s.Any.fromJSON(e.consensusState))
              : (n.consensusState = void 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.height &&
              (n.height = e.height ? t.Height.toJSON(e.height) : void 0),
            void 0 !== e.consensusState &&
              (n.consensusState = e.consensusState
                ? s.Any.toJSON(e.consensusState)
                : void 0),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, c);
          return (
            void 0 !== e.height && null !== e.height
              ? (n.height = t.Height.fromPartial(e.height))
              : (n.height = void 0),
            void 0 !== e.consensusState && null !== e.consensusState
              ? (n.consensusState = s.Any.fromPartial(e.consensusState))
              : (n.consensusState = void 0),
            n
          );
        },
      };
      const l = { clientId: "" };
      t.ClientConsensusStates = {
        encode(e, n) {
          (void 0 === n && (n = i.default.Writer.create()),
            "" !== e.clientId && n.uint32(10).string(e.clientId));
          for (const o of e.consensusStates)
            t.ConsensusStateWithHeight.encode(o, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === n ? o.len : o.pos + n;
          const s = Object.assign({}, l);
          s.consensusStates = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.clientId = o.string();
                break;
              case 2:
                s.consensusStates.push(
                  t.ConsensusStateWithHeight.decode(o, o.uint32()),
                );
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const n = Object.assign({}, l);
          if (
            ((n.consensusStates = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (n.clientId = String(e.clientId))
              : (n.clientId = ""),
            void 0 !== e.consensusStates && null !== e.consensusStates)
          )
            for (const o of e.consensusStates)
              n.consensusStates.push(t.ConsensusStateWithHeight.fromJSON(o));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.clientId && (n.clientId = e.clientId),
            e.consensusStates
              ? (n.consensusStates = e.consensusStates.map((e) =>
                  e ? t.ConsensusStateWithHeight.toJSON(e) : void 0,
                ))
              : (n.consensusStates = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, l);
          if (
            ((n.consensusStates = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (n.clientId = e.clientId)
              : (n.clientId = ""),
            void 0 !== e.consensusStates && null !== e.consensusStates)
          )
            for (const o of e.consensusStates)
              n.consensusStates.push(t.ConsensusStateWithHeight.fromPartial(o));
          return n;
        },
      };
      const u = {
        title: "",
        description: "",
        subjectClientId: "",
        substituteClientId: "",
      };
      t.ClientUpdateProposal = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            "" !== e.subjectClientId && t.uint32(26).string(e.subjectClientId),
            "" !== e.substituteClientId &&
              t.uint32(34).string(e.substituteClientId),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.title = n.string();
                break;
              case 2:
                r.description = n.string();
                break;
              case 3:
                r.subjectClientId = n.string();
                break;
              case 4:
                r.substituteClientId = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = String(e.title))
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = String(e.description))
              : (t.description = ""),
            void 0 !== e.subjectClientId && null !== e.subjectClientId
              ? (t.subjectClientId = String(e.subjectClientId))
              : (t.subjectClientId = ""),
            void 0 !== e.substituteClientId && null !== e.substituteClientId
              ? (t.substituteClientId = String(e.substituteClientId))
              : (t.substituteClientId = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.description && (t.description = e.description),
            void 0 !== e.subjectClientId &&
              (t.subjectClientId = e.subjectClientId),
            void 0 !== e.substituteClientId &&
              (t.substituteClientId = e.substituteClientId),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = e.title)
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = e.description)
              : (t.description = ""),
            void 0 !== e.subjectClientId && null !== e.subjectClientId
              ? (t.subjectClientId = e.subjectClientId)
              : (t.subjectClientId = ""),
            void 0 !== e.substituteClientId && null !== e.substituteClientId
              ? (t.substituteClientId = e.substituteClientId)
              : (t.substituteClientId = ""),
            t
          );
        },
      };
      const p = { title: "", description: "" };
      t.UpgradeProposal = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            void 0 !== e.plan &&
              a.Plan.encode(e.plan, t.uint32(26).fork()).ldelim(),
            void 0 !== e.upgradedClientState &&
              s.Any.encode(e.upgradedClientState, t.uint32(34).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, p);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.title = n.string();
                break;
              case 2:
                r.description = n.string();
                break;
              case 3:
                r.plan = a.Plan.decode(n, n.uint32());
                break;
              case 4:
                r.upgradedClientState = s.Any.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = String(e.title))
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = String(e.description))
              : (t.description = ""),
            void 0 !== e.plan && null !== e.plan
              ? (t.plan = a.Plan.fromJSON(e.plan))
              : (t.plan = void 0),
            void 0 !== e.upgradedClientState && null !== e.upgradedClientState
              ? (t.upgradedClientState = s.Any.fromJSON(e.upgradedClientState))
              : (t.upgradedClientState = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.description && (t.description = e.description),
            void 0 !== e.plan &&
              (t.plan = e.plan ? a.Plan.toJSON(e.plan) : void 0),
            void 0 !== e.upgradedClientState &&
              (t.upgradedClientState = e.upgradedClientState
                ? s.Any.toJSON(e.upgradedClientState)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = e.title)
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = e.description)
              : (t.description = ""),
            void 0 !== e.plan && null !== e.plan
              ? (t.plan = a.Plan.fromPartial(e.plan))
              : (t.plan = void 0),
            void 0 !== e.upgradedClientState && null !== e.upgradedClientState
              ? (t.upgradedClientState = s.Any.fromPartial(
                  e.upgradedClientState,
                ))
              : (t.upgradedClientState = void 0),
            t
          );
        },
      };
      const f = {
        revisionNumber: r.default.UZERO,
        revisionHeight: r.default.UZERO,
      };
      t.Height = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.revisionNumber.isZero() || t.uint32(8).uint64(e.revisionNumber),
            e.revisionHeight.isZero() || t.uint32(16).uint64(e.revisionHeight),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, f);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.revisionNumber = n.uint64();
                break;
              case 2:
                r.revisionHeight = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.revisionNumber && null !== e.revisionNumber
              ? (t.revisionNumber = r.default.fromString(e.revisionNumber))
              : (t.revisionNumber = r.default.UZERO),
            void 0 !== e.revisionHeight && null !== e.revisionHeight
              ? (t.revisionHeight = r.default.fromString(e.revisionHeight))
              : (t.revisionHeight = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.revisionNumber &&
              (t.revisionNumber = (
                e.revisionNumber || r.default.UZERO
              ).toString()),
            void 0 !== e.revisionHeight &&
              (t.revisionHeight = (
                e.revisionHeight || r.default.UZERO
              ).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.revisionNumber && null !== e.revisionNumber
              ? (t.revisionNumber = e.revisionNumber)
              : (t.revisionNumber = r.default.UZERO),
            void 0 !== e.revisionHeight && null !== e.revisionHeight
              ? (t.revisionHeight = e.revisionHeight)
              : (t.revisionHeight = r.default.UZERO),
            t
          );
        },
      };
      const g = { allowedClients: "" };
      ((t.Params = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const n of e.allowedClients) t.uint32(10).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, g);
          r.allowedClients = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.allowedClients.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (
            ((t.allowedClients = []),
            void 0 !== e.allowedClients && null !== e.allowedClients)
          )
            for (const n of e.allowedClients) t.allowedClients.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.allowedClients
              ? (t.allowedClients = e.allowedClients.map((e) => e))
              : (t.allowedClients = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          if (
            ((t.allowedClients = []),
            void 0 !== e.allowedClients && null !== e.allowedClients)
          )
            for (const n of e.allowedClients) t.allowedClients.push(n);
          return t;
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    3299: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params =
          t.Version =
          t.ConnectionPaths =
          t.ClientPaths =
          t.Counterparty =
          t.IdentifiedConnection =
          t.ConnectionEnd =
          t.stateToJSON =
          t.stateFromJSON =
          t.State =
          t.protobufPackage =
            void 0));
      const r = o(n(2754)),
        i = o(n(2755)),
        s = n(3683);
      var a;
      function d(e) {
        switch (e) {
          case 0:
          case "STATE_UNINITIALIZED_UNSPECIFIED":
            return a.STATE_UNINITIALIZED_UNSPECIFIED;
          case 1:
          case "STATE_INIT":
            return a.STATE_INIT;
          case 2:
          case "STATE_TRYOPEN":
            return a.STATE_TRYOPEN;
          case 3:
          case "STATE_OPEN":
            return a.STATE_OPEN;
          case -1:
          case "UNRECOGNIZED":
          default:
            return a.UNRECOGNIZED;
        }
      }
      function c(e) {
        switch (e) {
          case a.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
          case a.STATE_INIT:
            return "STATE_INIT";
          case a.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
          case a.STATE_OPEN:
            return "STATE_OPEN";
          default:
            return "UNKNOWN";
        }
      }
      ((t.protobufPackage = "ibc.core.connection.v1"),
        (function (e) {
          ((e[(e["STATE_UNINITIALIZED_UNSPECIFIED"] = 0)] =
            "STATE_UNINITIALIZED_UNSPECIFIED"),
            (e[(e["STATE_INIT"] = 1)] = "STATE_INIT"),
            (e[(e["STATE_TRYOPEN"] = 2)] = "STATE_TRYOPEN"),
            (e[(e["STATE_OPEN"] = 3)] = "STATE_OPEN"),
            (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
        })((a = t.State || (t.State = {}))),
        (t.stateFromJSON = d),
        (t.stateToJSON = c));
      const l = { clientId: "", state: 0, delayPeriod: r.default.UZERO };
      t.ConnectionEnd = {
        encode(e, n) {
          (void 0 === n && (n = i.default.Writer.create()),
            "" !== e.clientId && n.uint32(10).string(e.clientId));
          for (const o of e.versions)
            t.Version.encode(o, n.uint32(18).fork()).ldelim();
          return (
            0 !== e.state && n.uint32(24).int32(e.state),
            void 0 !== e.counterparty &&
              t.Counterparty.encode(
                e.counterparty,
                n.uint32(34).fork(),
              ).ldelim(),
            e.delayPeriod.isZero() || n.uint32(40).uint64(e.delayPeriod),
            n
          );
        },
        decode(e, n) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === n ? o.len : o.pos + n;
          const s = Object.assign({}, l);
          s.versions = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.clientId = o.string();
                break;
              case 2:
                s.versions.push(t.Version.decode(o, o.uint32()));
                break;
              case 3:
                s.state = o.int32();
                break;
              case 4:
                s.counterparty = t.Counterparty.decode(o, o.uint32());
                break;
              case 5:
                s.delayPeriod = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const n = Object.assign({}, l);
          if (
            ((n.versions = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (n.clientId = String(e.clientId))
              : (n.clientId = ""),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const o of e.versions) n.versions.push(t.Version.fromJSON(o));
          return (
            void 0 !== e.state && null !== e.state
              ? (n.state = d(e.state))
              : (n.state = 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (n.counterparty = t.Counterparty.fromJSON(e.counterparty))
              : (n.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (n.delayPeriod = r.default.fromString(e.delayPeriod))
              : (n.delayPeriod = r.default.UZERO),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.clientId && (n.clientId = e.clientId),
            e.versions
              ? (n.versions = e.versions.map((e) =>
                  e ? t.Version.toJSON(e) : void 0,
                ))
              : (n.versions = []),
            void 0 !== e.state && (n.state = c(e.state)),
            void 0 !== e.counterparty &&
              (n.counterparty = e.counterparty
                ? t.Counterparty.toJSON(e.counterparty)
                : void 0),
            void 0 !== e.delayPeriod &&
              (n.delayPeriod = (e.delayPeriod || r.default.UZERO).toString()),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, l);
          if (
            ((n.versions = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (n.clientId = e.clientId)
              : (n.clientId = ""),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const o of e.versions)
              n.versions.push(t.Version.fromPartial(o));
          return (
            void 0 !== e.state && null !== e.state
              ? (n.state = e.state)
              : (n.state = 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (n.counterparty = t.Counterparty.fromPartial(e.counterparty))
              : (n.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (n.delayPeriod = e.delayPeriod)
              : (n.delayPeriod = r.default.UZERO),
            n
          );
        },
      };
      const u = {
        id: "",
        clientId: "",
        state: 0,
        delayPeriod: r.default.UZERO,
      };
      t.IdentifiedConnection = {
        encode(e, n) {
          (void 0 === n && (n = i.default.Writer.create()),
            "" !== e.id && n.uint32(10).string(e.id),
            "" !== e.clientId && n.uint32(18).string(e.clientId));
          for (const o of e.versions)
            t.Version.encode(o, n.uint32(26).fork()).ldelim();
          return (
            0 !== e.state && n.uint32(32).int32(e.state),
            void 0 !== e.counterparty &&
              t.Counterparty.encode(
                e.counterparty,
                n.uint32(42).fork(),
              ).ldelim(),
            e.delayPeriod.isZero() || n.uint32(48).uint64(e.delayPeriod),
            n
          );
        },
        decode(e, n) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === n ? o.len : o.pos + n;
          const s = Object.assign({}, u);
          s.versions = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.id = o.string();
                break;
              case 2:
                s.clientId = o.string();
                break;
              case 3:
                s.versions.push(t.Version.decode(o, o.uint32()));
                break;
              case 4:
                s.state = o.int32();
                break;
              case 5:
                s.counterparty = t.Counterparty.decode(o, o.uint32());
                break;
              case 6:
                s.delayPeriod = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const n = Object.assign({}, u);
          if (
            ((n.versions = []),
            void 0 !== e.id && null !== e.id
              ? (n.id = String(e.id))
              : (n.id = ""),
            void 0 !== e.clientId && null !== e.clientId
              ? (n.clientId = String(e.clientId))
              : (n.clientId = ""),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const o of e.versions) n.versions.push(t.Version.fromJSON(o));
          return (
            void 0 !== e.state && null !== e.state
              ? (n.state = d(e.state))
              : (n.state = 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (n.counterparty = t.Counterparty.fromJSON(e.counterparty))
              : (n.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (n.delayPeriod = r.default.fromString(e.delayPeriod))
              : (n.delayPeriod = r.default.UZERO),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.id && (n.id = e.id),
            void 0 !== e.clientId && (n.clientId = e.clientId),
            e.versions
              ? (n.versions = e.versions.map((e) =>
                  e ? t.Version.toJSON(e) : void 0,
                ))
              : (n.versions = []),
            void 0 !== e.state && (n.state = c(e.state)),
            void 0 !== e.counterparty &&
              (n.counterparty = e.counterparty
                ? t.Counterparty.toJSON(e.counterparty)
                : void 0),
            void 0 !== e.delayPeriod &&
              (n.delayPeriod = (e.delayPeriod || r.default.UZERO).toString()),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, u);
          if (
            ((n.versions = []),
            void 0 !== e.id && null !== e.id ? (n.id = e.id) : (n.id = ""),
            void 0 !== e.clientId && null !== e.clientId
              ? (n.clientId = e.clientId)
              : (n.clientId = ""),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const o of e.versions)
              n.versions.push(t.Version.fromPartial(o));
          return (
            void 0 !== e.state && null !== e.state
              ? (n.state = e.state)
              : (n.state = 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (n.counterparty = t.Counterparty.fromPartial(e.counterparty))
              : (n.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (n.delayPeriod = e.delayPeriod)
              : (n.delayPeriod = r.default.UZERO),
            n
          );
        },
      };
      const p = { clientId: "", connectionId: "" };
      t.Counterparty = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId),
            "" !== e.connectionId && t.uint32(18).string(e.connectionId),
            void 0 !== e.prefix &&
              s.MerklePrefix.encode(e.prefix, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, p);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.clientId = n.string();
                break;
              case 2:
                r.connectionId = n.string();
                break;
              case 3:
                r.prefix = s.MerklePrefix.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = String(e.clientId))
              : (t.clientId = ""),
            void 0 !== e.connectionId && null !== e.connectionId
              ? (t.connectionId = String(e.connectionId))
              : (t.connectionId = ""),
            void 0 !== e.prefix && null !== e.prefix
              ? (t.prefix = s.MerklePrefix.fromJSON(e.prefix))
              : (t.prefix = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.clientId && (t.clientId = e.clientId),
            void 0 !== e.connectionId && (t.connectionId = e.connectionId),
            void 0 !== e.prefix &&
              (t.prefix = e.prefix ? s.MerklePrefix.toJSON(e.prefix) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = e.clientId)
              : (t.clientId = ""),
            void 0 !== e.connectionId && null !== e.connectionId
              ? (t.connectionId = e.connectionId)
              : (t.connectionId = ""),
            void 0 !== e.prefix && null !== e.prefix
              ? (t.prefix = s.MerklePrefix.fromPartial(e.prefix))
              : (t.prefix = void 0),
            t
          );
        },
      };
      const f = { paths: "" };
      t.ClientPaths = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const n of e.paths) t.uint32(10).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, f);
          r.paths = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.paths.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          if (((t.paths = []), void 0 !== e.paths && null !== e.paths))
            for (const n of e.paths) t.paths.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.paths ? (t.paths = e.paths.map((e) => e)) : (t.paths = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          if (((t.paths = []), void 0 !== e.paths && null !== e.paths))
            for (const n of e.paths) t.paths.push(n);
          return t;
        },
      };
      const g = { clientId: "", paths: "" };
      t.ConnectionPaths = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId));
          for (const n of e.paths) t.uint32(18).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, g);
          r.paths = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.clientId = n.string();
                break;
              case 2:
                r.paths.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (
            ((t.paths = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = String(e.clientId))
              : (t.clientId = ""),
            void 0 !== e.paths && null !== e.paths)
          )
            for (const n of e.paths) t.paths.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.clientId && (t.clientId = e.clientId),
            e.paths ? (t.paths = e.paths.map((e) => e)) : (t.paths = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          if (
            ((t.paths = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = e.clientId)
              : (t.clientId = ""),
            void 0 !== e.paths && null !== e.paths)
          )
            for (const n of e.paths) t.paths.push(n);
          return t;
        },
      };
      const h = { identifier: "", features: "" };
      t.Version = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.identifier && t.uint32(10).string(e.identifier));
          for (const n of e.features) t.uint32(18).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, h);
          r.features = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.identifier = n.string();
                break;
              case 2:
                r.features.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          if (
            ((t.features = []),
            void 0 !== e.identifier && null !== e.identifier
              ? (t.identifier = String(e.identifier))
              : (t.identifier = ""),
            void 0 !== e.features && null !== e.features)
          )
            for (const n of e.features) t.features.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.identifier && (t.identifier = e.identifier),
            e.features
              ? (t.features = e.features.map((e) => e))
              : (t.features = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, h);
          if (
            ((t.features = []),
            void 0 !== e.identifier && null !== e.identifier
              ? (t.identifier = e.identifier)
              : (t.identifier = ""),
            void 0 !== e.features && null !== e.features)
          )
            for (const n of e.features) t.features.push(n);
          return t;
        },
      };
      const v = { maxExpectedTimePerBlock: r.default.UZERO };
      ((t.Params = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.maxExpectedTimePerBlock.isZero() ||
              t.uint32(8).uint64(e.maxExpectedTimePerBlock),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, v);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.maxExpectedTimePerBlock = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.maxExpectedTimePerBlock &&
            null !== e.maxExpectedTimePerBlock
              ? (t.maxExpectedTimePerBlock = r.default.fromString(
                  e.maxExpectedTimePerBlock,
                ))
              : (t.maxExpectedTimePerBlock = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxExpectedTimePerBlock &&
              (t.maxExpectedTimePerBlock = (
                e.maxExpectedTimePerBlock || r.default.UZERO
              ).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.maxExpectedTimePerBlock &&
            null !== e.maxExpectedTimePerBlock
              ? (t.maxExpectedTimePerBlock = e.maxExpectedTimePerBlock)
              : (t.maxExpectedTimePerBlock = r.default.UZERO),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    3301: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Acknowledgement =
            t.PacketId =
            t.PacketState =
            t.Packet =
            t.Counterparty =
            t.IdentifiedChannel =
            t.Channel =
            t.orderToJSON =
            t.orderFromJSON =
            t.Order =
            t.stateToJSON =
            t.stateFromJSON =
            t.State =
            t.protobufPackage =
              void 0));
        const r = o(n(2754)),
          i = o(n(2755)),
          s = n(3058);
        var a, d;
        function c(e) {
          switch (e) {
            case 0:
            case "STATE_UNINITIALIZED_UNSPECIFIED":
              return a.STATE_UNINITIALIZED_UNSPECIFIED;
            case 1:
            case "STATE_INIT":
              return a.STATE_INIT;
            case 2:
            case "STATE_TRYOPEN":
              return a.STATE_TRYOPEN;
            case 3:
            case "STATE_OPEN":
              return a.STATE_OPEN;
            case 4:
            case "STATE_CLOSED":
              return a.STATE_CLOSED;
            case -1:
            case "UNRECOGNIZED":
            default:
              return a.UNRECOGNIZED;
          }
        }
        function l(e) {
          switch (e) {
            case a.STATE_UNINITIALIZED_UNSPECIFIED:
              return "STATE_UNINITIALIZED_UNSPECIFIED";
            case a.STATE_INIT:
              return "STATE_INIT";
            case a.STATE_TRYOPEN:
              return "STATE_TRYOPEN";
            case a.STATE_OPEN:
              return "STATE_OPEN";
            case a.STATE_CLOSED:
              return "STATE_CLOSED";
            default:
              return "UNKNOWN";
          }
        }
        function u(e) {
          switch (e) {
            case 0:
            case "ORDER_NONE_UNSPECIFIED":
              return d.ORDER_NONE_UNSPECIFIED;
            case 1:
            case "ORDER_UNORDERED":
              return d.ORDER_UNORDERED;
            case 2:
            case "ORDER_ORDERED":
              return d.ORDER_ORDERED;
            case -1:
            case "UNRECOGNIZED":
            default:
              return d.UNRECOGNIZED;
          }
        }
        function p(e) {
          switch (e) {
            case d.ORDER_NONE_UNSPECIFIED:
              return "ORDER_NONE_UNSPECIFIED";
            case d.ORDER_UNORDERED:
              return "ORDER_UNORDERED";
            case d.ORDER_ORDERED:
              return "ORDER_ORDERED";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "ibc.core.channel.v1"),
          (function (e) {
            ((e[(e["STATE_UNINITIALIZED_UNSPECIFIED"] = 0)] =
              "STATE_UNINITIALIZED_UNSPECIFIED"),
              (e[(e["STATE_INIT"] = 1)] = "STATE_INIT"),
              (e[(e["STATE_TRYOPEN"] = 2)] = "STATE_TRYOPEN"),
              (e[(e["STATE_OPEN"] = 3)] = "STATE_OPEN"),
              (e[(e["STATE_CLOSED"] = 4)] = "STATE_CLOSED"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((a = t.State || (t.State = {}))),
          (t.stateFromJSON = c),
          (t.stateToJSON = l),
          (function (e) {
            ((e[(e["ORDER_NONE_UNSPECIFIED"] = 0)] = "ORDER_NONE_UNSPECIFIED"),
              (e[(e["ORDER_UNORDERED"] = 1)] = "ORDER_UNORDERED"),
              (e[(e["ORDER_ORDERED"] = 2)] = "ORDER_ORDERED"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((d = t.Order || (t.Order = {}))),
          (t.orderFromJSON = u),
          (t.orderToJSON = p));
        const f = { state: 0, ordering: 0, connectionHops: "", version: "" };
        t.Channel = {
          encode(e, n) {
            (void 0 === n && (n = i.default.Writer.create()),
              0 !== e.state && n.uint32(8).int32(e.state),
              0 !== e.ordering && n.uint32(16).int32(e.ordering),
              void 0 !== e.counterparty &&
                t.Counterparty.encode(
                  e.counterparty,
                  n.uint32(26).fork(),
                ).ldelim());
            for (const t of e.connectionHops) n.uint32(34).string(t);
            return ("" !== e.version && n.uint32(42).string(e.version), n);
          },
          decode(e, n) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === n ? o.len : o.pos + n;
            const s = Object.assign({}, f);
            s.connectionHops = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.state = o.int32();
                  break;
                case 2:
                  s.ordering = o.int32();
                  break;
                case 3:
                  s.counterparty = t.Counterparty.decode(o, o.uint32());
                  break;
                case 4:
                  s.connectionHops.push(o.string());
                  break;
                case 5:
                  s.version = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, f);
            if (
              ((n.connectionHops = []),
              void 0 !== e.state && null !== e.state
                ? (n.state = c(e.state))
                : (n.state = 0),
              void 0 !== e.ordering && null !== e.ordering
                ? (n.ordering = u(e.ordering))
                : (n.ordering = 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (n.counterparty = t.Counterparty.fromJSON(e.counterparty))
                : (n.counterparty = void 0),
              void 0 !== e.connectionHops && null !== e.connectionHops)
            )
              for (const t of e.connectionHops)
                n.connectionHops.push(String(t));
            return (
              void 0 !== e.version && null !== e.version
                ? (n.version = String(e.version))
                : (n.version = ""),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.state && (n.state = l(e.state)),
              void 0 !== e.ordering && (n.ordering = p(e.ordering)),
              void 0 !== e.counterparty &&
                (n.counterparty = e.counterparty
                  ? t.Counterparty.toJSON(e.counterparty)
                  : void 0),
              e.connectionHops
                ? (n.connectionHops = e.connectionHops.map((e) => e))
                : (n.connectionHops = []),
              void 0 !== e.version && (n.version = e.version),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, f);
            if (
              ((n.connectionHops = []),
              void 0 !== e.state && null !== e.state
                ? (n.state = e.state)
                : (n.state = 0),
              void 0 !== e.ordering && null !== e.ordering
                ? (n.ordering = e.ordering)
                : (n.ordering = 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (n.counterparty = t.Counterparty.fromPartial(e.counterparty))
                : (n.counterparty = void 0),
              void 0 !== e.connectionHops && null !== e.connectionHops)
            )
              for (const t of e.connectionHops) n.connectionHops.push(t);
            return (
              void 0 !== e.version && null !== e.version
                ? (n.version = e.version)
                : (n.version = ""),
              n
            );
          },
        };
        const g = {
          state: 0,
          ordering: 0,
          connectionHops: "",
          version: "",
          portId: "",
          channelId: "",
        };
        t.IdentifiedChannel = {
          encode(e, n) {
            (void 0 === n && (n = i.default.Writer.create()),
              0 !== e.state && n.uint32(8).int32(e.state),
              0 !== e.ordering && n.uint32(16).int32(e.ordering),
              void 0 !== e.counterparty &&
                t.Counterparty.encode(
                  e.counterparty,
                  n.uint32(26).fork(),
                ).ldelim());
            for (const t of e.connectionHops) n.uint32(34).string(t);
            return (
              "" !== e.version && n.uint32(42).string(e.version),
              "" !== e.portId && n.uint32(50).string(e.portId),
              "" !== e.channelId && n.uint32(58).string(e.channelId),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === n ? o.len : o.pos + n;
            const s = Object.assign({}, g);
            s.connectionHops = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.state = o.int32();
                  break;
                case 2:
                  s.ordering = o.int32();
                  break;
                case 3:
                  s.counterparty = t.Counterparty.decode(o, o.uint32());
                  break;
                case 4:
                  s.connectionHops.push(o.string());
                  break;
                case 5:
                  s.version = o.string();
                  break;
                case 6:
                  s.portId = o.string();
                  break;
                case 7:
                  s.channelId = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, g);
            if (
              ((n.connectionHops = []),
              void 0 !== e.state && null !== e.state
                ? (n.state = c(e.state))
                : (n.state = 0),
              void 0 !== e.ordering && null !== e.ordering
                ? (n.ordering = u(e.ordering))
                : (n.ordering = 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (n.counterparty = t.Counterparty.fromJSON(e.counterparty))
                : (n.counterparty = void 0),
              void 0 !== e.connectionHops && null !== e.connectionHops)
            )
              for (const t of e.connectionHops)
                n.connectionHops.push(String(t));
            return (
              void 0 !== e.version && null !== e.version
                ? (n.version = String(e.version))
                : (n.version = ""),
              void 0 !== e.portId && null !== e.portId
                ? (n.portId = String(e.portId))
                : (n.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (n.channelId = String(e.channelId))
                : (n.channelId = ""),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.state && (n.state = l(e.state)),
              void 0 !== e.ordering && (n.ordering = p(e.ordering)),
              void 0 !== e.counterparty &&
                (n.counterparty = e.counterparty
                  ? t.Counterparty.toJSON(e.counterparty)
                  : void 0),
              e.connectionHops
                ? (n.connectionHops = e.connectionHops.map((e) => e))
                : (n.connectionHops = []),
              void 0 !== e.version && (n.version = e.version),
              void 0 !== e.portId && (n.portId = e.portId),
              void 0 !== e.channelId && (n.channelId = e.channelId),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, g);
            if (
              ((n.connectionHops = []),
              void 0 !== e.state && null !== e.state
                ? (n.state = e.state)
                : (n.state = 0),
              void 0 !== e.ordering && null !== e.ordering
                ? (n.ordering = e.ordering)
                : (n.ordering = 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (n.counterparty = t.Counterparty.fromPartial(e.counterparty))
                : (n.counterparty = void 0),
              void 0 !== e.connectionHops && null !== e.connectionHops)
            )
              for (const t of e.connectionHops) n.connectionHops.push(t);
            return (
              void 0 !== e.version && null !== e.version
                ? (n.version = e.version)
                : (n.version = ""),
              void 0 !== e.portId && null !== e.portId
                ? (n.portId = e.portId)
                : (n.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (n.channelId = e.channelId)
                : (n.channelId = ""),
              n
            );
          },
        };
        const h = { portId: "", channelId: "" };
        t.Counterparty = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, h);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              t
            );
          },
        };
        const v = {
          sequence: r.default.UZERO,
          sourcePort: "",
          sourceChannel: "",
          destinationPort: "",
          destinationChannel: "",
          timeoutTimestamp: r.default.UZERO,
        };
        t.Packet = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.sequence.isZero() || t.uint32(8).uint64(e.sequence),
              "" !== e.sourcePort && t.uint32(18).string(e.sourcePort),
              "" !== e.sourceChannel && t.uint32(26).string(e.sourceChannel),
              "" !== e.destinationPort &&
                t.uint32(34).string(e.destinationPort),
              "" !== e.destinationChannel &&
                t.uint32(42).string(e.destinationChannel),
              0 !== e.data.length && t.uint32(50).bytes(e.data),
              void 0 !== e.timeoutHeight &&
                s.Height.encode(e.timeoutHeight, t.uint32(58).fork()).ldelim(),
              e.timeoutTimestamp.isZero() ||
                t.uint32(64).uint64(e.timeoutTimestamp),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, v);
            r.data = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.sequence = n.uint64();
                  break;
                case 2:
                  r.sourcePort = n.string();
                  break;
                case 3:
                  r.sourceChannel = n.string();
                  break;
                case 4:
                  r.destinationPort = n.string();
                  break;
                case 5:
                  r.destinationChannel = n.string();
                  break;
                case 6:
                  r.data = n.bytes();
                  break;
                case 7:
                  r.timeoutHeight = s.Height.decode(n, n.uint32());
                  break;
                case 8:
                  r.timeoutTimestamp = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.sequence && null !== e.sequence
                ? (t.sequence = r.default.fromString(e.sequence))
                : (t.sequence = r.default.UZERO),
              void 0 !== e.sourcePort && null !== e.sourcePort
                ? (t.sourcePort = String(e.sourcePort))
                : (t.sourcePort = ""),
              void 0 !== e.sourceChannel && null !== e.sourceChannel
                ? (t.sourceChannel = String(e.sourceChannel))
                : (t.sourceChannel = ""),
              void 0 !== e.destinationPort && null !== e.destinationPort
                ? (t.destinationPort = String(e.destinationPort))
                : (t.destinationPort = ""),
              void 0 !== e.destinationChannel && null !== e.destinationChannel
                ? (t.destinationChannel = String(e.destinationChannel))
                : (t.destinationChannel = ""),
              void 0 !== e.data && null !== e.data && (t.data = y(e.data)),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = s.Height.fromJSON(e.timeoutHeight))
                : (t.timeoutHeight = void 0),
              void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp
                ? (t.timeoutTimestamp = r.default.fromString(
                    e.timeoutTimestamp,
                  ))
                : (t.timeoutTimestamp = r.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sequence &&
                (t.sequence = (e.sequence || r.default.UZERO).toString()),
              void 0 !== e.sourcePort && (t.sourcePort = e.sourcePort),
              void 0 !== e.sourceChannel && (t.sourceChannel = e.sourceChannel),
              void 0 !== e.destinationPort &&
                (t.destinationPort = e.destinationPort),
              void 0 !== e.destinationChannel &&
                (t.destinationChannel = e.destinationChannel),
              void 0 !== e.data &&
                (t.data = k(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.timeoutHeight &&
                (t.timeoutHeight = e.timeoutHeight
                  ? s.Height.toJSON(e.timeoutHeight)
                  : void 0),
              void 0 !== e.timeoutTimestamp &&
                (t.timeoutTimestamp = (
                  e.timeoutTimestamp || r.default.UZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.sequence && null !== e.sequence
                ? (t.sequence = e.sequence)
                : (t.sequence = r.default.UZERO),
              void 0 !== e.sourcePort && null !== e.sourcePort
                ? (t.sourcePort = e.sourcePort)
                : (t.sourcePort = ""),
              void 0 !== e.sourceChannel && null !== e.sourceChannel
                ? (t.sourceChannel = e.sourceChannel)
                : (t.sourceChannel = ""),
              void 0 !== e.destinationPort && null !== e.destinationPort
                ? (t.destinationPort = e.destinationPort)
                : (t.destinationPort = ""),
              void 0 !== e.destinationChannel && null !== e.destinationChannel
                ? (t.destinationChannel = e.destinationChannel)
                : (t.destinationChannel = ""),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = s.Height.fromPartial(e.timeoutHeight))
                : (t.timeoutHeight = void 0),
              void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp
                ? (t.timeoutTimestamp = e.timeoutTimestamp)
                : (t.timeoutTimestamp = r.default.UZERO),
              t
            );
          },
        };
        const m = { portId: "", channelId: "", sequence: r.default.UZERO };
        t.PacketState = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              e.sequence.isZero() || t.uint32(24).uint64(e.sequence),
              0 !== e.data.length && t.uint32(34).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, m);
            r.data = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                case 3:
                  r.sequence = n.uint64();
                  break;
                case 4:
                  r.data = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              void 0 !== e.sequence && null !== e.sequence
                ? (t.sequence = r.default.fromString(e.sequence))
                : (t.sequence = r.default.UZERO),
              void 0 !== e.data && null !== e.data && (t.data = y(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              void 0 !== e.sequence &&
                (t.sequence = (e.sequence || r.default.UZERO).toString()),
              void 0 !== e.data &&
                (t.data = k(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              void 0 !== e.sequence && null !== e.sequence
                ? (t.sequence = e.sequence)
                : (t.sequence = r.default.UZERO),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const I = { portId: "", channelId: "", sequence: r.default.UZERO };
        t.PacketId = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.portId && t.uint32(10).string(e.portId),
              "" !== e.channelId && t.uint32(18).string(e.channelId),
              e.sequence.isZero() || t.uint32(24).uint64(e.sequence),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, I);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.portId = n.string();
                  break;
                case 2:
                  r.channelId = n.string();
                  break;
                case 3:
                  r.sequence = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, I);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = String(e.portId))
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = String(e.channelId))
                : (t.channelId = ""),
              void 0 !== e.sequence && null !== e.sequence
                ? (t.sequence = r.default.fromString(e.sequence))
                : (t.sequence = r.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.portId && (t.portId = e.portId),
              void 0 !== e.channelId && (t.channelId = e.channelId),
              void 0 !== e.sequence &&
                (t.sequence = (e.sequence || r.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, I);
            return (
              void 0 !== e.portId && null !== e.portId
                ? (t.portId = e.portId)
                : (t.portId = ""),
              void 0 !== e.channelId && null !== e.channelId
                ? (t.channelId = e.channelId)
                : (t.channelId = ""),
              void 0 !== e.sequence && null !== e.sequence
                ? (t.sequence = e.sequence)
                : (t.sequence = r.default.UZERO),
              t
            );
          },
        };
        const S = {};
        t.Acknowledgement = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.result && t.uint32(170).bytes(e.result),
              void 0 !== e.error && t.uint32(178).string(e.error),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, S);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 21:
                  r.result = n.bytes();
                  break;
                case 22:
                  r.error = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.result &&
                null !== e.result &&
                (t.result = y(e.result)),
              void 0 !== e.error && null !== e.error
                ? (t.error = String(e.error))
                : (t.error = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.result &&
                (t.result = void 0 !== e.result ? k(e.result) : void 0),
              void 0 !== e.error && (t.error = e.error),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = void 0),
              void 0 !== e.error && null !== e.error
                ? (t.error = e.error)
                : (t.error = void 0),
              t
            );
          },
        };
        var b = (() => {
          if ("undefined" !== typeof b) return b;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const O =
          b.atob || ((e) => b.Buffer.from(e, "base64").toString("binary"));
        function y(e) {
          const t = O(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const C =
          b.btoa || ((e) => b.Buffer.from(e, "binary").toString("base64"));
        function k(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return C(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, n(13));
    },
    3432: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrpcWebImpl =
            t.MsgSubmitMisbehaviourDesc =
            t.MsgUpgradeClientDesc =
            t.MsgUpdateClientDesc =
            t.MsgCreateClientDesc =
            t.MsgDesc =
            t.MsgClientImpl =
            t.MsgSubmitMisbehaviourResponse =
            t.MsgSubmitMisbehaviour =
            t.MsgUpgradeClientResponse =
            t.MsgUpgradeClient =
            t.MsgUpdateClientResponse =
            t.MsgUpdateClient =
            t.MsgCreateClientResponse =
            t.MsgCreateClient =
            t.protobufPackage =
              void 0));
        const r = o(n(2754)),
          i = n(2889),
          s = o(n(2755)),
          a = n(2759),
          d = n(2890);
        t.protobufPackage = "ibc.core.client.v1";
        const c = { signer: "" };
        t.MsgCreateClient = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              void 0 !== e.clientState &&
                a.Any.encode(e.clientState, t.uint32(10).fork()).ldelim(),
              void 0 !== e.consensusState &&
                a.Any.encode(e.consensusState, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, c);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.clientState = a.Any.decode(n, n.uint32());
                  break;
                case 2:
                  r.consensusState = a.Any.decode(n, n.uint32());
                  break;
                case 3:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = a.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = a.Any.fromJSON(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? a.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? a.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = a.Any.fromPartial(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = a.Any.fromPartial(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const l = {};
        t.MsgCreateClientResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, l);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
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
        const u = { clientId: "", signer: "" };
        t.MsgUpdateClient = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.header &&
                a.Any.encode(e.header, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, u);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.clientId = n.string();
                  break;
                case 2:
                  r.header = a.Any.decode(n, n.uint32());
                  break;
                case 3:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.header && null !== e.header
                ? (t.header = a.Any.fromJSON(e.header))
                : (t.header = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.header &&
                (t.header = e.header ? a.Any.toJSON(e.header) : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = e.clientId)
                : (t.clientId = ""),
              void 0 !== e.header && null !== e.header
                ? (t.header = a.Any.fromPartial(e.header))
                : (t.header = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const p = {};
        t.MsgUpdateClientResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, p);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
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
        const f = { clientId: "", signer: "" };
        t.MsgUpgradeClient = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.clientState &&
                a.Any.encode(e.clientState, t.uint32(18).fork()).ldelim(),
              void 0 !== e.consensusState &&
                a.Any.encode(e.consensusState, t.uint32(26).fork()).ldelim(),
              0 !== e.proofUpgradeClient.length &&
                t.uint32(34).bytes(e.proofUpgradeClient),
              0 !== e.proofUpgradeConsensusState.length &&
                t.uint32(42).bytes(e.proofUpgradeConsensusState),
              "" !== e.signer && t.uint32(50).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, f);
            ((r.proofUpgradeClient = new Uint8Array()),
              (r.proofUpgradeConsensusState = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.clientId = n.string();
                  break;
                case 2:
                  r.clientState = a.Any.decode(n, n.uint32());
                  break;
                case 3:
                  r.consensusState = a.Any.decode(n, n.uint32());
                  break;
                case 4:
                  r.proofUpgradeClient = n.bytes();
                  break;
                case 5:
                  r.proofUpgradeConsensusState = n.bytes();
                  break;
                case 6:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              (t.proofUpgradeClient = new Uint8Array()),
              (t.proofUpgradeConsensusState = new Uint8Array()),
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = a.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = a.Any.fromJSON(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.proofUpgradeClient &&
                null !== e.proofUpgradeClient &&
                (t.proofUpgradeClient = S(e.proofUpgradeClient)),
              void 0 !== e.proofUpgradeConsensusState &&
                null !== e.proofUpgradeConsensusState &&
                (t.proofUpgradeConsensusState = S(
                  e.proofUpgradeConsensusState,
                )),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? a.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? a.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.proofUpgradeClient &&
                (t.proofUpgradeClient = O(
                  void 0 !== e.proofUpgradeClient
                    ? e.proofUpgradeClient
                    : new Uint8Array(),
                )),
              void 0 !== e.proofUpgradeConsensusState &&
                (t.proofUpgradeConsensusState = O(
                  void 0 !== e.proofUpgradeConsensusState
                    ? e.proofUpgradeConsensusState
                    : new Uint8Array(),
                )),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = e.clientId)
                : (t.clientId = ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = a.Any.fromPartial(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = a.Any.fromPartial(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.proofUpgradeClient && null !== e.proofUpgradeClient
                ? (t.proofUpgradeClient = e.proofUpgradeClient)
                : (t.proofUpgradeClient = new Uint8Array()),
              void 0 !== e.proofUpgradeConsensusState &&
              null !== e.proofUpgradeConsensusState
                ? (t.proofUpgradeConsensusState = e.proofUpgradeConsensusState)
                : (t.proofUpgradeConsensusState = new Uint8Array()),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const g = {};
        t.MsgUpgradeClientResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, g);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return t;
          },
        };
        const h = { clientId: "", signer: "" };
        t.MsgSubmitMisbehaviour = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.misbehaviour &&
                a.Any.encode(e.misbehaviour, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, h);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.clientId = n.string();
                  break;
                case 2:
                  r.misbehaviour = a.Any.decode(n, n.uint32());
                  break;
                case 3:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.misbehaviour && null !== e.misbehaviour
                ? (t.misbehaviour = a.Any.fromJSON(e.misbehaviour))
                : (t.misbehaviour = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.misbehaviour &&
                (t.misbehaviour = e.misbehaviour
                  ? a.Any.toJSON(e.misbehaviour)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = e.clientId)
                : (t.clientId = ""),
              void 0 !== e.misbehaviour && null !== e.misbehaviour
                ? (t.misbehaviour = a.Any.fromPartial(e.misbehaviour))
                : (t.misbehaviour = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const v = {};
        t.MsgSubmitMisbehaviourResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, v);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return t;
          },
        };
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.CreateClient = this.CreateClient.bind(this)),
              (this.UpdateClient = this.UpdateClient.bind(this)),
              (this.UpgradeClient = this.UpgradeClient.bind(this)),
              (this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this)));
          }
          CreateClient(e, n) {
            return this.rpc.unary(
              t.MsgCreateClientDesc,
              t.MsgCreateClient.fromPartial(e),
              n,
            );
          }
          UpdateClient(e, n) {
            return this.rpc.unary(
              t.MsgUpdateClientDesc,
              t.MsgUpdateClient.fromPartial(e),
              n,
            );
          }
          UpgradeClient(e, n) {
            return this.rpc.unary(
              t.MsgUpgradeClientDesc,
              t.MsgUpgradeClient.fromPartial(e),
              n,
            );
          }
          SubmitMisbehaviour(e, n) {
            return this.rpc.unary(
              t.MsgSubmitMisbehaviourDesc,
              t.MsgSubmitMisbehaviour.fromPartial(e),
              n,
            );
          }
        }
        ((t.MsgClientImpl = MsgClientImpl),
          (t.MsgDesc = { serviceName: "ibc.core.client.v1.Msg" }),
          (t.MsgCreateClientDesc = {
            methodName: "CreateClient",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgCreateClient.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgCreateClientResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgUpdateClientDesc = {
            methodName: "UpdateClient",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgUpdateClient.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgUpdateClientResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgUpgradeClientDesc = {
            methodName: "UpgradeClient",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgUpgradeClient.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgUpgradeClientResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgSubmitMisbehaviourDesc = {
            methodName: "SubmitMisbehaviour",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgSubmitMisbehaviour.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgSubmitMisbehaviourResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }));
        class GrpcWebImpl {
          constructor(e, t) {
            ((this.host = e), (this.options = t));
          }
          unary(e, t, n) {
            var o;
            const r = Object.assign(Object.assign({}, t), e.requestType),
              s =
                n && this.options.metadata
                  ? new d.BrowserHeaders(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (o = this.options) || void 0 === o
                            ? void 0
                            : o.metadata.headersMap,
                        ),
                        null === n || void 0 === n ? void 0 : n.headersMap,
                      ),
                    )
                  : n || this.options.metadata;
            return new Promise((t, n) => {
              i.grpc.unary(e, {
                request: r,
                host: this.host,
                metadata: s,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (e.status === i.grpc.Code.OK) t(e.message);
                  else {
                    const t = new Error(e.statusMessage);
                    ((t.code = e.status), (t.metadata = e.trailers), n(t));
                  }
                },
              });
            });
          }
        }
        t.GrpcWebImpl = GrpcWebImpl;
        var m = (() => {
          if ("undefined" !== typeof m) return m;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const I =
          m.atob || ((e) => m.Buffer.from(e, "base64").toString("binary"));
        function S(e) {
          const t = I(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const b =
          m.btoa || ((e) => m.Buffer.from(e, "binary").toString("base64"));
        function O(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return b(t.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, n(13));
    },
    3434: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrpcWebImpl =
            t.MsgConnectionOpenConfirmDesc =
            t.MsgConnectionOpenAckDesc =
            t.MsgConnectionOpenTryDesc =
            t.MsgConnectionOpenInitDesc =
            t.MsgDesc =
            t.MsgClientImpl =
            t.MsgConnectionOpenConfirmResponse =
            t.MsgConnectionOpenConfirm =
            t.MsgConnectionOpenAckResponse =
            t.MsgConnectionOpenAck =
            t.MsgConnectionOpenTryResponse =
            t.MsgConnectionOpenTry =
            t.MsgConnectionOpenInitResponse =
            t.MsgConnectionOpenInit =
            t.protobufPackage =
              void 0));
        const r = o(n(2754)),
          i = n(2889),
          s = o(n(2755)),
          a = n(3299),
          d = n(2759),
          c = n(3058),
          l = n(2890);
        t.protobufPackage = "ibc.core.connection.v1";
        const u = { clientId: "", delayPeriod: r.default.UZERO, signer: "" };
        t.MsgConnectionOpenInit = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.counterparty &&
                a.Counterparty.encode(
                  e.counterparty,
                  t.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.version &&
                a.Version.encode(e.version, t.uint32(26).fork()).ldelim(),
              e.delayPeriod.isZero() || t.uint32(32).uint64(e.delayPeriod),
              "" !== e.signer && t.uint32(42).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, u);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.clientId = n.string();
                  break;
                case 2:
                  r.counterparty = a.Counterparty.decode(n, n.uint32());
                  break;
                case 3:
                  r.version = a.Version.decode(n, n.uint32());
                  break;
                case 4:
                  r.delayPeriod = n.uint64();
                  break;
                case 5:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = a.Counterparty.fromJSON(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.version && null !== e.version
                ? (t.version = a.Version.fromJSON(e.version))
                : (t.version = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = r.default.fromString(e.delayPeriod))
                : (t.delayPeriod = r.default.UZERO),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.counterparty &&
                (t.counterparty = e.counterparty
                  ? a.Counterparty.toJSON(e.counterparty)
                  : void 0),
              void 0 !== e.version &&
                (t.version = e.version ? a.Version.toJSON(e.version) : void 0),
              void 0 !== e.delayPeriod &&
                (t.delayPeriod = (e.delayPeriod || r.default.UZERO).toString()),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = e.clientId)
                : (t.clientId = ""),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = a.Counterparty.fromPartial(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.version && null !== e.version
                ? (t.version = a.Version.fromPartial(e.version))
                : (t.version = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = e.delayPeriod)
                : (t.delayPeriod = r.default.UZERO),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const p = {};
        t.MsgConnectionOpenInitResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, p);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
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
        const f = {
          clientId: "",
          previousConnectionId: "",
          delayPeriod: r.default.UZERO,
          signer: "",
        };
        t.MsgConnectionOpenTry = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              "" !== e.previousConnectionId &&
                t.uint32(18).string(e.previousConnectionId),
              void 0 !== e.clientState &&
                d.Any.encode(e.clientState, t.uint32(26).fork()).ldelim(),
              void 0 !== e.counterparty &&
                a.Counterparty.encode(
                  e.counterparty,
                  t.uint32(34).fork(),
                ).ldelim(),
              e.delayPeriod.isZero() || t.uint32(40).uint64(e.delayPeriod));
            for (const n of e.counterpartyVersions)
              a.Version.encode(n, t.uint32(50).fork()).ldelim();
            return (
              void 0 !== e.proofHeight &&
                c.Height.encode(e.proofHeight, t.uint32(58).fork()).ldelim(),
              0 !== e.proofInit.length && t.uint32(66).bytes(e.proofInit),
              0 !== e.proofClient.length && t.uint32(74).bytes(e.proofClient),
              0 !== e.proofConsensus.length &&
                t.uint32(82).bytes(e.proofConsensus),
              void 0 !== e.consensusHeight &&
                c.Height.encode(
                  e.consensusHeight,
                  t.uint32(90).fork(),
                ).ldelim(),
              "" !== e.signer && t.uint32(98).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, f);
            ((r.counterpartyVersions = []),
              (r.proofInit = new Uint8Array()),
              (r.proofClient = new Uint8Array()),
              (r.proofConsensus = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.clientId = n.string();
                  break;
                case 2:
                  r.previousConnectionId = n.string();
                  break;
                case 3:
                  r.clientState = d.Any.decode(n, n.uint32());
                  break;
                case 4:
                  r.counterparty = a.Counterparty.decode(n, n.uint32());
                  break;
                case 5:
                  r.delayPeriod = n.uint64();
                  break;
                case 6:
                  r.counterpartyVersions.push(a.Version.decode(n, n.uint32()));
                  break;
                case 7:
                  r.proofHeight = c.Height.decode(n, n.uint32());
                  break;
                case 8:
                  r.proofInit = n.bytes();
                  break;
                case 9:
                  r.proofClient = n.bytes();
                  break;
                case 10:
                  r.proofConsensus = n.bytes();
                  break;
                case 11:
                  r.consensusHeight = c.Height.decode(n, n.uint32());
                  break;
                case 12:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            if (
              ((t.counterpartyVersions = []),
              (t.proofInit = new Uint8Array()),
              (t.proofClient = new Uint8Array()),
              (t.proofConsensus = new Uint8Array()),
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.previousConnectionId &&
              null !== e.previousConnectionId
                ? (t.previousConnectionId = String(e.previousConnectionId))
                : (t.previousConnectionId = ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = d.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = a.Counterparty.fromJSON(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = r.default.fromString(e.delayPeriod))
                : (t.delayPeriod = r.default.UZERO),
              void 0 !== e.counterpartyVersions &&
                null !== e.counterpartyVersions)
            )
              for (const n of e.counterpartyVersions)
                t.counterpartyVersions.push(a.Version.fromJSON(n));
            return (
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = c.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofInit &&
                null !== e.proofInit &&
                (t.proofInit = O(e.proofInit)),
              void 0 !== e.proofClient &&
                null !== e.proofClient &&
                (t.proofClient = O(e.proofClient)),
              void 0 !== e.proofConsensus &&
                null !== e.proofConsensus &&
                (t.proofConsensus = O(e.proofConsensus)),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (t.consensusHeight = c.Height.fromJSON(e.consensusHeight))
                : (t.consensusHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.previousConnectionId &&
                (t.previousConnectionId = e.previousConnectionId),
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? d.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.counterparty &&
                (t.counterparty = e.counterparty
                  ? a.Counterparty.toJSON(e.counterparty)
                  : void 0),
              void 0 !== e.delayPeriod &&
                (t.delayPeriod = (e.delayPeriod || r.default.UZERO).toString()),
              e.counterpartyVersions
                ? (t.counterpartyVersions = e.counterpartyVersions.map((e) =>
                    e ? a.Version.toJSON(e) : void 0,
                  ))
                : (t.counterpartyVersions = []),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? c.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.proofInit &&
                (t.proofInit = C(
                  void 0 !== e.proofInit ? e.proofInit : new Uint8Array(),
                )),
              void 0 !== e.proofClient &&
                (t.proofClient = C(
                  void 0 !== e.proofClient ? e.proofClient : new Uint8Array(),
                )),
              void 0 !== e.proofConsensus &&
                (t.proofConsensus = C(
                  void 0 !== e.proofConsensus
                    ? e.proofConsensus
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHeight &&
                (t.consensusHeight = e.consensusHeight
                  ? c.Height.toJSON(e.consensusHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            if (
              ((t.counterpartyVersions = []),
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = e.clientId)
                : (t.clientId = ""),
              void 0 !== e.previousConnectionId &&
              null !== e.previousConnectionId
                ? (t.previousConnectionId = e.previousConnectionId)
                : (t.previousConnectionId = ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = d.Any.fromPartial(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = a.Counterparty.fromPartial(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = e.delayPeriod)
                : (t.delayPeriod = r.default.UZERO),
              void 0 !== e.counterpartyVersions &&
                null !== e.counterpartyVersions)
            )
              for (const n of e.counterpartyVersions)
                t.counterpartyVersions.push(a.Version.fromPartial(n));
            return (
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = c.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofInit && null !== e.proofInit
                ? (t.proofInit = e.proofInit)
                : (t.proofInit = new Uint8Array()),
              void 0 !== e.proofClient && null !== e.proofClient
                ? (t.proofClient = e.proofClient)
                : (t.proofClient = new Uint8Array()),
              void 0 !== e.proofConsensus && null !== e.proofConsensus
                ? (t.proofConsensus = e.proofConsensus)
                : (t.proofConsensus = new Uint8Array()),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (t.consensusHeight = c.Height.fromPartial(e.consensusHeight))
                : (t.consensusHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const g = {};
        t.MsgConnectionOpenTryResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, g);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return t;
          },
        };
        const h = {
          connectionId: "",
          counterpartyConnectionId: "",
          signer: "",
        };
        t.MsgConnectionOpenAck = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              "" !== e.counterpartyConnectionId &&
                t.uint32(18).string(e.counterpartyConnectionId),
              void 0 !== e.version &&
                a.Version.encode(e.version, t.uint32(26).fork()).ldelim(),
              void 0 !== e.clientState &&
                d.Any.encode(e.clientState, t.uint32(34).fork()).ldelim(),
              void 0 !== e.proofHeight &&
                c.Height.encode(e.proofHeight, t.uint32(42).fork()).ldelim(),
              0 !== e.proofTry.length && t.uint32(50).bytes(e.proofTry),
              0 !== e.proofClient.length && t.uint32(58).bytes(e.proofClient),
              0 !== e.proofConsensus.length &&
                t.uint32(66).bytes(e.proofConsensus),
              void 0 !== e.consensusHeight &&
                c.Height.encode(
                  e.consensusHeight,
                  t.uint32(74).fork(),
                ).ldelim(),
              "" !== e.signer && t.uint32(82).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, h);
            ((r.proofTry = new Uint8Array()),
              (r.proofClient = new Uint8Array()),
              (r.proofConsensus = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.connectionId = n.string();
                  break;
                case 2:
                  r.counterpartyConnectionId = n.string();
                  break;
                case 3:
                  r.version = a.Version.decode(n, n.uint32());
                  break;
                case 4:
                  r.clientState = d.Any.decode(n, n.uint32());
                  break;
                case 5:
                  r.proofHeight = c.Height.decode(n, n.uint32());
                  break;
                case 6:
                  r.proofTry = n.bytes();
                  break;
                case 7:
                  r.proofClient = n.bytes();
                  break;
                case 8:
                  r.proofConsensus = n.bytes();
                  break;
                case 9:
                  r.consensusHeight = c.Height.decode(n, n.uint32());
                  break;
                case 10:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              (t.proofTry = new Uint8Array()),
              (t.proofClient = new Uint8Array()),
              (t.proofConsensus = new Uint8Array()),
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              void 0 !== e.counterpartyConnectionId &&
              null !== e.counterpartyConnectionId
                ? (t.counterpartyConnectionId = String(
                    e.counterpartyConnectionId,
                  ))
                : (t.counterpartyConnectionId = ""),
              void 0 !== e.version && null !== e.version
                ? (t.version = a.Version.fromJSON(e.version))
                : (t.version = void 0),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = d.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = c.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofTry &&
                null !== e.proofTry &&
                (t.proofTry = O(e.proofTry)),
              void 0 !== e.proofClient &&
                null !== e.proofClient &&
                (t.proofClient = O(e.proofClient)),
              void 0 !== e.proofConsensus &&
                null !== e.proofConsensus &&
                (t.proofConsensus = O(e.proofConsensus)),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (t.consensusHeight = c.Height.fromJSON(e.consensusHeight))
                : (t.consensusHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connectionId && (t.connectionId = e.connectionId),
              void 0 !== e.counterpartyConnectionId &&
                (t.counterpartyConnectionId = e.counterpartyConnectionId),
              void 0 !== e.version &&
                (t.version = e.version ? a.Version.toJSON(e.version) : void 0),
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? d.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? c.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.proofTry &&
                (t.proofTry = C(
                  void 0 !== e.proofTry ? e.proofTry : new Uint8Array(),
                )),
              void 0 !== e.proofClient &&
                (t.proofClient = C(
                  void 0 !== e.proofClient ? e.proofClient : new Uint8Array(),
                )),
              void 0 !== e.proofConsensus &&
                (t.proofConsensus = C(
                  void 0 !== e.proofConsensus
                    ? e.proofConsensus
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHeight &&
                (t.consensusHeight = e.consensusHeight
                  ? c.Height.toJSON(e.consensusHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = e.connectionId)
                : (t.connectionId = ""),
              void 0 !== e.counterpartyConnectionId &&
              null !== e.counterpartyConnectionId
                ? (t.counterpartyConnectionId = e.counterpartyConnectionId)
                : (t.counterpartyConnectionId = ""),
              void 0 !== e.version && null !== e.version
                ? (t.version = a.Version.fromPartial(e.version))
                : (t.version = void 0),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = d.Any.fromPartial(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = c.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofTry && null !== e.proofTry
                ? (t.proofTry = e.proofTry)
                : (t.proofTry = new Uint8Array()),
              void 0 !== e.proofClient && null !== e.proofClient
                ? (t.proofClient = e.proofClient)
                : (t.proofClient = new Uint8Array()),
              void 0 !== e.proofConsensus && null !== e.proofConsensus
                ? (t.proofConsensus = e.proofConsensus)
                : (t.proofConsensus = new Uint8Array()),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (t.consensusHeight = c.Height.fromPartial(e.consensusHeight))
                : (t.consensusHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const v = {};
        t.MsgConnectionOpenAckResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, v);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return t;
          },
        };
        const m = { connectionId: "", signer: "" };
        t.MsgConnectionOpenConfirm = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              0 !== e.proofAck.length && t.uint32(18).bytes(e.proofAck),
              void 0 !== e.proofHeight &&
                c.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              "" !== e.signer && t.uint32(34).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, m);
            r.proofAck = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.connectionId = n.string();
                  break;
                case 2:
                  r.proofAck = n.bytes();
                  break;
                case 3:
                  r.proofHeight = c.Height.decode(n, n.uint32());
                  break;
                case 4:
                  r.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.proofAck = new Uint8Array()),
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              void 0 !== e.proofAck &&
                null !== e.proofAck &&
                (t.proofAck = O(e.proofAck)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = c.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = String(e.signer))
                : (t.signer = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connectionId && (t.connectionId = e.connectionId),
              void 0 !== e.proofAck &&
                (t.proofAck = C(
                  void 0 !== e.proofAck ? e.proofAck : new Uint8Array(),
                )),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? c.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = e.connectionId)
                : (t.connectionId = ""),
              void 0 !== e.proofAck && null !== e.proofAck
                ? (t.proofAck = e.proofAck)
                : (t.proofAck = new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = c.Height.fromPartial(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.signer && null !== e.signer
                ? (t.signer = e.signer)
                : (t.signer = ""),
              t
            );
          },
        };
        const I = {};
        t.MsgConnectionOpenConfirmResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, I);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, I);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, I);
            return t;
          },
        };
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this)),
              (this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this)),
              (this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this)),
              (this.ConnectionOpenConfirm =
                this.ConnectionOpenConfirm.bind(this)));
          }
          ConnectionOpenInit(e, n) {
            return this.rpc.unary(
              t.MsgConnectionOpenInitDesc,
              t.MsgConnectionOpenInit.fromPartial(e),
              n,
            );
          }
          ConnectionOpenTry(e, n) {
            return this.rpc.unary(
              t.MsgConnectionOpenTryDesc,
              t.MsgConnectionOpenTry.fromPartial(e),
              n,
            );
          }
          ConnectionOpenAck(e, n) {
            return this.rpc.unary(
              t.MsgConnectionOpenAckDesc,
              t.MsgConnectionOpenAck.fromPartial(e),
              n,
            );
          }
          ConnectionOpenConfirm(e, n) {
            return this.rpc.unary(
              t.MsgConnectionOpenConfirmDesc,
              t.MsgConnectionOpenConfirm.fromPartial(e),
              n,
            );
          }
        }
        ((t.MsgClientImpl = MsgClientImpl),
          (t.MsgDesc = { serviceName: "ibc.core.connection.v1.Msg" }),
          (t.MsgConnectionOpenInitDesc = {
            methodName: "ConnectionOpenInit",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgConnectionOpenInit.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgConnectionOpenInitResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgConnectionOpenTryDesc = {
            methodName: "ConnectionOpenTry",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgConnectionOpenTry.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgConnectionOpenTryResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgConnectionOpenAckDesc = {
            methodName: "ConnectionOpenAck",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgConnectionOpenAck.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgConnectionOpenAckResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgConnectionOpenConfirmDesc = {
            methodName: "ConnectionOpenConfirm",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgConnectionOpenConfirm.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign(
                    {},
                    t.MsgConnectionOpenConfirmResponse.decode(e),
                  ),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }));
        class GrpcWebImpl {
          constructor(e, t) {
            ((this.host = e), (this.options = t));
          }
          unary(e, t, n) {
            var o;
            const r = Object.assign(Object.assign({}, t), e.requestType),
              s =
                n && this.options.metadata
                  ? new l.BrowserHeaders(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (o = this.options) || void 0 === o
                            ? void 0
                            : o.metadata.headersMap,
                        ),
                        null === n || void 0 === n ? void 0 : n.headersMap,
                      ),
                    )
                  : n || this.options.metadata;
            return new Promise((t, n) => {
              i.grpc.unary(e, {
                request: r,
                host: this.host,
                metadata: s,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (e.status === i.grpc.Code.OK) t(e.message);
                  else {
                    const t = new Error(e.statusMessage);
                    ((t.code = e.status), (t.metadata = e.trailers), n(t));
                  }
                },
              });
            });
          }
        }
        t.GrpcWebImpl = GrpcWebImpl;
        var S = (() => {
          if ("undefined" !== typeof S) return S;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const b =
          S.atob || ((e) => S.Buffer.from(e, "base64").toString("binary"));
        function O(e) {
          const t = b(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const y =
          S.btoa || ((e) => S.Buffer.from(e, "binary").toString("base64"));
        function C(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return y(t.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, n(13));
    },
    3683: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MerkleProof =
            t.MerklePath =
            t.MerklePrefix =
            t.MerkleRoot =
            t.protobufPackage =
              void 0));
        const r = o(n(2754)),
          i = o(n(2755)),
          s = n(4341);
        t.protobufPackage = "ibc.core.commitment.v1";
        const a = {};
        t.MerkleRoot = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.hash.length && t.uint32(10).bytes(e.hash),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, a);
            r.hash = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.hash = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            return (
              (t.hash = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash && (t.hash = f(e.hash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.hash &&
                (t.hash = h(void 0 !== e.hash ? e.hash : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, a);
            return (
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = new Uint8Array()),
              t
            );
          },
        };
        const d = {};
        t.MerklePrefix = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.keyPrefix.length && t.uint32(10).bytes(e.keyPrefix),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, d);
            r.keyPrefix = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.keyPrefix = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              (t.keyPrefix = new Uint8Array()),
              void 0 !== e.keyPrefix &&
                null !== e.keyPrefix &&
                (t.keyPrefix = f(e.keyPrefix)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.keyPrefix &&
                (t.keyPrefix = h(
                  void 0 !== e.keyPrefix ? e.keyPrefix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.keyPrefix && null !== e.keyPrefix
                ? (t.keyPrefix = e.keyPrefix)
                : (t.keyPrefix = new Uint8Array()),
              t
            );
          },
        };
        const c = { keyPath: "" };
        t.MerklePath = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const n of e.keyPath) t.uint32(10).string(n);
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, c);
            r.keyPath = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.keyPath.push(n.string());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            if (((t.keyPath = []), void 0 !== e.keyPath && null !== e.keyPath))
              for (const n of e.keyPath) t.keyPath.push(String(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.keyPath
                ? (t.keyPath = e.keyPath.map((e) => e))
                : (t.keyPath = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            if (((t.keyPath = []), void 0 !== e.keyPath && null !== e.keyPath))
              for (const n of e.keyPath) t.keyPath.push(n);
            return t;
          },
        };
        const l = {};
        t.MerkleProof = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const n of e.proofs)
              s.CommitmentProof.encode(n, t.uint32(10).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, l);
            r.proofs = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.proofs.push(s.CommitmentProof.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            if (((t.proofs = []), void 0 !== e.proofs && null !== e.proofs))
              for (const n of e.proofs)
                t.proofs.push(s.CommitmentProof.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.proofs
                ? (t.proofs = e.proofs.map((e) =>
                    e ? s.CommitmentProof.toJSON(e) : void 0,
                  ))
                : (t.proofs = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            if (((t.proofs = []), void 0 !== e.proofs && null !== e.proofs))
              for (const n of e.proofs)
                t.proofs.push(s.CommitmentProof.fromPartial(n));
            return t;
          },
        };
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const p =
          u.atob || ((e) => u.Buffer.from(e, "base64").toString("binary"));
        function f(e) {
          const t = p(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const g =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function h(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return g(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, n(13));
    },
    5103: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgTransferDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgTransferResponse =
          t.MsgTransfer =
          t.protobufPackage =
            void 0));
      const r = o(n(2754)),
        i = n(2889),
        s = o(n(2755)),
        a = n(2840),
        d = n(3058),
        c = n(2890);
      t.protobufPackage = "ibc.applications.transfer.v1";
      const l = {
        sourcePort: "",
        sourceChannel: "",
        sender: "",
        receiver: "",
        timeoutTimestamp: r.default.UZERO,
      };
      t.MsgTransfer = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.sourcePort && t.uint32(10).string(e.sourcePort),
            "" !== e.sourceChannel && t.uint32(18).string(e.sourceChannel),
            void 0 !== e.token &&
              a.Coin.encode(e.token, t.uint32(26).fork()).ldelim(),
            "" !== e.sender && t.uint32(34).string(e.sender),
            "" !== e.receiver && t.uint32(42).string(e.receiver),
            void 0 !== e.timeoutHeight &&
              d.Height.encode(e.timeoutHeight, t.uint32(50).fork()).ldelim(),
            e.timeoutTimestamp.isZero() ||
              t.uint32(56).uint64(e.timeoutTimestamp),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, l);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.sourcePort = n.string();
                break;
              case 2:
                r.sourceChannel = n.string();
                break;
              case 3:
                r.token = a.Coin.decode(n, n.uint32());
                break;
              case 4:
                r.sender = n.string();
                break;
              case 5:
                r.receiver = n.string();
                break;
              case 6:
                r.timeoutHeight = d.Height.decode(n, n.uint32());
                break;
              case 7:
                r.timeoutTimestamp = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.sourcePort && null !== e.sourcePort
              ? (t.sourcePort = String(e.sourcePort))
              : (t.sourcePort = ""),
            void 0 !== e.sourceChannel && null !== e.sourceChannel
              ? (t.sourceChannel = String(e.sourceChannel))
              : (t.sourceChannel = ""),
            void 0 !== e.token && null !== e.token
              ? (t.token = a.Coin.fromJSON(e.token))
              : (t.token = void 0),
            void 0 !== e.sender && null !== e.sender
              ? (t.sender = String(e.sender))
              : (t.sender = ""),
            void 0 !== e.receiver && null !== e.receiver
              ? (t.receiver = String(e.receiver))
              : (t.receiver = ""),
            void 0 !== e.timeoutHeight && null !== e.timeoutHeight
              ? (t.timeoutHeight = d.Height.fromJSON(e.timeoutHeight))
              : (t.timeoutHeight = void 0),
            void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp
              ? (t.timeoutTimestamp = r.default.fromString(e.timeoutTimestamp))
              : (t.timeoutTimestamp = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.sourcePort && (t.sourcePort = e.sourcePort),
            void 0 !== e.sourceChannel && (t.sourceChannel = e.sourceChannel),
            void 0 !== e.token &&
              (t.token = e.token ? a.Coin.toJSON(e.token) : void 0),
            void 0 !== e.sender && (t.sender = e.sender),
            void 0 !== e.receiver && (t.receiver = e.receiver),
            void 0 !== e.timeoutHeight &&
              (t.timeoutHeight = e.timeoutHeight
                ? d.Height.toJSON(e.timeoutHeight)
                : void 0),
            void 0 !== e.timeoutTimestamp &&
              (t.timeoutTimestamp = (
                e.timeoutTimestamp || r.default.UZERO
              ).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.sourcePort && null !== e.sourcePort
              ? (t.sourcePort = e.sourcePort)
              : (t.sourcePort = ""),
            void 0 !== e.sourceChannel && null !== e.sourceChannel
              ? (t.sourceChannel = e.sourceChannel)
              : (t.sourceChannel = ""),
            void 0 !== e.token && null !== e.token
              ? (t.token = a.Coin.fromPartial(e.token))
              : (t.token = void 0),
            void 0 !== e.sender && null !== e.sender
              ? (t.sender = e.sender)
              : (t.sender = ""),
            void 0 !== e.receiver && null !== e.receiver
              ? (t.receiver = e.receiver)
              : (t.receiver = ""),
            void 0 !== e.timeoutHeight && null !== e.timeoutHeight
              ? (t.timeoutHeight = d.Height.fromPartial(e.timeoutHeight))
              : (t.timeoutHeight = void 0),
            void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp
              ? (t.timeoutTimestamp = e.timeoutTimestamp)
              : (t.timeoutTimestamp = r.default.UZERO),
            t
          );
        },
      };
      const u = {};
      t.MsgTransferResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
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
          ((this.rpc = e), (this.Transfer = this.Transfer.bind(this)));
        }
        Transfer(e, n) {
          return this.rpc.unary(
            t.MsgTransferDesc,
            t.MsgTransfer.fromPartial(e),
            n,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "ibc.applications.transfer.v1.Msg" }),
        (t.MsgTransferDesc = {
          methodName: "Transfer",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgTransfer.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgTransferResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }));
      class GrpcWebImpl {
        constructor(e, t) {
          ((this.host = e), (this.options = t));
        }
        unary(e, t, n) {
          var o;
          const r = Object.assign(Object.assign({}, t), e.requestType),
            s =
              n && this.options.metadata
                ? new c.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (o = this.options) || void 0 === o
                          ? void 0
                          : o.metadata.headersMap,
                      ),
                      null === n || void 0 === n ? void 0 : n.headersMap,
                    ),
                  )
                : n || this.options.metadata;
          return new Promise((t, n) => {
            i.grpc.unary(e, {
              request: r,
              host: this.host,
              metadata: s,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === i.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), n(t));
                }
              },
            });
          });
        }
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    5105: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FungibleTokenPacketData = t.protobufPackage = void 0));
      const r = o(n(2754)),
        i = o(n(2755));
      t.protobufPackage = "ibc.applications.transfer.v2";
      const s = { denom: "", amount: "", sender: "", receiver: "" };
      ((t.FungibleTokenPacketData = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            "" !== e.sender && t.uint32(26).string(e.sender),
            "" !== e.receiver && t.uint32(34).string(e.receiver),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, s);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.denom = n.string();
                break;
              case 2:
                r.amount = n.string();
                break;
              case 3:
                r.sender = n.string();
                break;
              case 4:
                r.receiver = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            void 0 !== e.sender && null !== e.sender
              ? (t.sender = String(e.sender))
              : (t.sender = ""),
            void 0 !== e.receiver && null !== e.receiver
              ? (t.receiver = String(e.receiver))
              : (t.receiver = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            void 0 !== e.sender && (t.sender = e.sender),
            void 0 !== e.receiver && (t.receiver = e.receiver),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = e.amount)
              : (t.amount = ""),
            void 0 !== e.sender && null !== e.sender
              ? (t.sender = e.sender)
              : (t.sender = ""),
            void 0 !== e.receiver && null !== e.receiver
              ? (t.receiver = e.receiver)
              : (t.receiver = ""),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    5110: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Fraction =
            t.Header =
            t.Misbehaviour =
            t.ConsensusState =
            t.ClientState =
            t.protobufPackage =
              void 0));
        const r = o(n(2754)),
          i = o(n(2755)),
          s = n(3296),
          a = n(3058),
          d = n(3683),
          c = n(3429),
          l = n(3679),
          u = n(2993),
          p = n(4341);
        t.protobufPackage = "ibc.lightclients.tendermint.v1";
        const f = {
          chainId: "",
          upgradePath: "",
          allowUpdateAfterExpiry: !1,
          allowUpdateAfterMisbehaviour: !1,
        };
        t.ClientState = {
          encode(e, n) {
            (void 0 === n && (n = i.default.Writer.create()),
              "" !== e.chainId && n.uint32(10).string(e.chainId),
              void 0 !== e.trustLevel &&
                t.Fraction.encode(e.trustLevel, n.uint32(18).fork()).ldelim(),
              void 0 !== e.trustingPeriod &&
                s.Duration.encode(
                  e.trustingPeriod,
                  n.uint32(26).fork(),
                ).ldelim(),
              void 0 !== e.unbondingPeriod &&
                s.Duration.encode(
                  e.unbondingPeriod,
                  n.uint32(34).fork(),
                ).ldelim(),
              void 0 !== e.maxClockDrift &&
                s.Duration.encode(
                  e.maxClockDrift,
                  n.uint32(42).fork(),
                ).ldelim(),
              void 0 !== e.frozenHeight &&
                a.Height.encode(e.frozenHeight, n.uint32(50).fork()).ldelim(),
              void 0 !== e.latestHeight &&
                a.Height.encode(e.latestHeight, n.uint32(58).fork()).ldelim());
            for (const t of e.proofSpecs)
              p.ProofSpec.encode(t, n.uint32(66).fork()).ldelim();
            for (const t of e.upgradePath) n.uint32(74).string(t);
            return (
              !0 === e.allowUpdateAfterExpiry &&
                n.uint32(80).bool(e.allowUpdateAfterExpiry),
              !0 === e.allowUpdateAfterMisbehaviour &&
                n.uint32(88).bool(e.allowUpdateAfterMisbehaviour),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === n ? o.len : o.pos + n;
            const d = Object.assign({}, f);
            ((d.proofSpecs = []), (d.upgradePath = []));
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  d.chainId = o.string();
                  break;
                case 2:
                  d.trustLevel = t.Fraction.decode(o, o.uint32());
                  break;
                case 3:
                  d.trustingPeriod = s.Duration.decode(o, o.uint32());
                  break;
                case 4:
                  d.unbondingPeriod = s.Duration.decode(o, o.uint32());
                  break;
                case 5:
                  d.maxClockDrift = s.Duration.decode(o, o.uint32());
                  break;
                case 6:
                  d.frozenHeight = a.Height.decode(o, o.uint32());
                  break;
                case 7:
                  d.latestHeight = a.Height.decode(o, o.uint32());
                  break;
                case 8:
                  d.proofSpecs.push(p.ProofSpec.decode(o, o.uint32()));
                  break;
                case 9:
                  d.upgradePath.push(o.string());
                  break;
                case 10:
                  d.allowUpdateAfterExpiry = o.bool();
                  break;
                case 11:
                  d.allowUpdateAfterMisbehaviour = o.bool();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return d;
          },
          fromJSON(e) {
            const n = Object.assign({}, f);
            if (
              ((n.proofSpecs = []),
              (n.upgradePath = []),
              void 0 !== e.chainId && null !== e.chainId
                ? (n.chainId = String(e.chainId))
                : (n.chainId = ""),
              void 0 !== e.trustLevel && null !== e.trustLevel
                ? (n.trustLevel = t.Fraction.fromJSON(e.trustLevel))
                : (n.trustLevel = void 0),
              void 0 !== e.trustingPeriod && null !== e.trustingPeriod
                ? (n.trustingPeriod = s.Duration.fromJSON(e.trustingPeriod))
                : (n.trustingPeriod = void 0),
              void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod
                ? (n.unbondingPeriod = s.Duration.fromJSON(e.unbondingPeriod))
                : (n.unbondingPeriod = void 0),
              void 0 !== e.maxClockDrift && null !== e.maxClockDrift
                ? (n.maxClockDrift = s.Duration.fromJSON(e.maxClockDrift))
                : (n.maxClockDrift = void 0),
              void 0 !== e.frozenHeight && null !== e.frozenHeight
                ? (n.frozenHeight = a.Height.fromJSON(e.frozenHeight))
                : (n.frozenHeight = void 0),
              void 0 !== e.latestHeight && null !== e.latestHeight
                ? (n.latestHeight = a.Height.fromJSON(e.latestHeight))
                : (n.latestHeight = void 0),
              void 0 !== e.proofSpecs && null !== e.proofSpecs)
            )
              for (const t of e.proofSpecs)
                n.proofSpecs.push(p.ProofSpec.fromJSON(t));
            if (void 0 !== e.upgradePath && null !== e.upgradePath)
              for (const t of e.upgradePath) n.upgradePath.push(String(t));
            return (
              void 0 !== e.allowUpdateAfterExpiry &&
              null !== e.allowUpdateAfterExpiry
                ? (n.allowUpdateAfterExpiry = Boolean(e.allowUpdateAfterExpiry))
                : (n.allowUpdateAfterExpiry = !1),
              void 0 !== e.allowUpdateAfterMisbehaviour &&
              null !== e.allowUpdateAfterMisbehaviour
                ? (n.allowUpdateAfterMisbehaviour = Boolean(
                    e.allowUpdateAfterMisbehaviour,
                  ))
                : (n.allowUpdateAfterMisbehaviour = !1),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.chainId && (n.chainId = e.chainId),
              void 0 !== e.trustLevel &&
                (n.trustLevel = e.trustLevel
                  ? t.Fraction.toJSON(e.trustLevel)
                  : void 0),
              void 0 !== e.trustingPeriod &&
                (n.trustingPeriod = e.trustingPeriod
                  ? s.Duration.toJSON(e.trustingPeriod)
                  : void 0),
              void 0 !== e.unbondingPeriod &&
                (n.unbondingPeriod = e.unbondingPeriod
                  ? s.Duration.toJSON(e.unbondingPeriod)
                  : void 0),
              void 0 !== e.maxClockDrift &&
                (n.maxClockDrift = e.maxClockDrift
                  ? s.Duration.toJSON(e.maxClockDrift)
                  : void 0),
              void 0 !== e.frozenHeight &&
                (n.frozenHeight = e.frozenHeight
                  ? a.Height.toJSON(e.frozenHeight)
                  : void 0),
              void 0 !== e.latestHeight &&
                (n.latestHeight = e.latestHeight
                  ? a.Height.toJSON(e.latestHeight)
                  : void 0),
              e.proofSpecs
                ? (n.proofSpecs = e.proofSpecs.map((e) =>
                    e ? p.ProofSpec.toJSON(e) : void 0,
                  ))
                : (n.proofSpecs = []),
              e.upgradePath
                ? (n.upgradePath = e.upgradePath.map((e) => e))
                : (n.upgradePath = []),
              void 0 !== e.allowUpdateAfterExpiry &&
                (n.allowUpdateAfterExpiry = e.allowUpdateAfterExpiry),
              void 0 !== e.allowUpdateAfterMisbehaviour &&
                (n.allowUpdateAfterMisbehaviour =
                  e.allowUpdateAfterMisbehaviour),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, f);
            if (
              ((n.proofSpecs = []),
              (n.upgradePath = []),
              void 0 !== e.chainId && null !== e.chainId
                ? (n.chainId = e.chainId)
                : (n.chainId = ""),
              void 0 !== e.trustLevel && null !== e.trustLevel
                ? (n.trustLevel = t.Fraction.fromPartial(e.trustLevel))
                : (n.trustLevel = void 0),
              void 0 !== e.trustingPeriod && null !== e.trustingPeriod
                ? (n.trustingPeriod = s.Duration.fromPartial(e.trustingPeriod))
                : (n.trustingPeriod = void 0),
              void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod
                ? (n.unbondingPeriod = s.Duration.fromPartial(
                    e.unbondingPeriod,
                  ))
                : (n.unbondingPeriod = void 0),
              void 0 !== e.maxClockDrift && null !== e.maxClockDrift
                ? (n.maxClockDrift = s.Duration.fromPartial(e.maxClockDrift))
                : (n.maxClockDrift = void 0),
              void 0 !== e.frozenHeight && null !== e.frozenHeight
                ? (n.frozenHeight = a.Height.fromPartial(e.frozenHeight))
                : (n.frozenHeight = void 0),
              void 0 !== e.latestHeight && null !== e.latestHeight
                ? (n.latestHeight = a.Height.fromPartial(e.latestHeight))
                : (n.latestHeight = void 0),
              void 0 !== e.proofSpecs && null !== e.proofSpecs)
            )
              for (const t of e.proofSpecs)
                n.proofSpecs.push(p.ProofSpec.fromPartial(t));
            if (void 0 !== e.upgradePath && null !== e.upgradePath)
              for (const t of e.upgradePath) n.upgradePath.push(t);
            return (
              void 0 !== e.allowUpdateAfterExpiry &&
              null !== e.allowUpdateAfterExpiry
                ? (n.allowUpdateAfterExpiry = e.allowUpdateAfterExpiry)
                : (n.allowUpdateAfterExpiry = !1),
              void 0 !== e.allowUpdateAfterMisbehaviour &&
              null !== e.allowUpdateAfterMisbehaviour
                ? (n.allowUpdateAfterMisbehaviour =
                    e.allowUpdateAfterMisbehaviour)
                : (n.allowUpdateAfterMisbehaviour = !1),
              n
            );
          },
        };
        const g = {};
        t.ConsensusState = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.timestamp &&
                u.Timestamp.encode(
                  C(e.timestamp),
                  t.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.root &&
                d.MerkleRoot.encode(e.root, t.uint32(18).fork()).ldelim(),
              0 !== e.nextValidatorsHash.length &&
                t.uint32(26).bytes(e.nextValidatorsHash),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, g);
            r.nextValidatorsHash = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.timestamp = k(u.Timestamp.decode(n, n.uint32()));
                  break;
                case 2:
                  r.root = d.MerkleRoot.decode(n, n.uint32());
                  break;
                case 3:
                  r.nextValidatorsHash = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              (t.nextValidatorsHash = new Uint8Array()),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = P(e.timestamp))
                : (t.timestamp = void 0),
              void 0 !== e.root && null !== e.root
                ? (t.root = d.MerkleRoot.fromJSON(e.root))
                : (t.root = void 0),
              void 0 !== e.nextValidatorsHash &&
                null !== e.nextValidatorsHash &&
                (t.nextValidatorsHash = b(e.nextValidatorsHash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.timestamp &&
                (t.timestamp = e.timestamp.toISOString()),
              void 0 !== e.root &&
                (t.root = e.root ? d.MerkleRoot.toJSON(e.root) : void 0),
              void 0 !== e.nextValidatorsHash &&
                (t.nextValidatorsHash = y(
                  void 0 !== e.nextValidatorsHash
                    ? e.nextValidatorsHash
                    : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = e.timestamp)
                : (t.timestamp = void 0),
              void 0 !== e.root && null !== e.root
                ? (t.root = d.MerkleRoot.fromPartial(e.root))
                : (t.root = void 0),
              void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash
                ? (t.nextValidatorsHash = e.nextValidatorsHash)
                : (t.nextValidatorsHash = new Uint8Array()),
              t
            );
          },
        };
        const h = { clientId: "" };
        t.Misbehaviour = {
          encode(e, n) {
            return (
              void 0 === n && (n = i.default.Writer.create()),
              "" !== e.clientId && n.uint32(10).string(e.clientId),
              void 0 !== e.header1 &&
                t.Header.encode(e.header1, n.uint32(18).fork()).ldelim(),
              void 0 !== e.header2 &&
                t.Header.encode(e.header2, n.uint32(26).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === n ? o.len : o.pos + n;
            const s = Object.assign({}, h);
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.clientId = o.string();
                  break;
                case 2:
                  s.header1 = t.Header.decode(o, o.uint32());
                  break;
                case 3:
                  s.header2 = t.Header.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, h);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (n.clientId = String(e.clientId))
                : (n.clientId = ""),
              void 0 !== e.header1 && null !== e.header1
                ? (n.header1 = t.Header.fromJSON(e.header1))
                : (n.header1 = void 0),
              void 0 !== e.header2 && null !== e.header2
                ? (n.header2 = t.Header.fromJSON(e.header2))
                : (n.header2 = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.clientId && (n.clientId = e.clientId),
              void 0 !== e.header1 &&
                (n.header1 = e.header1 ? t.Header.toJSON(e.header1) : void 0),
              void 0 !== e.header2 &&
                (n.header2 = e.header2 ? t.Header.toJSON(e.header2) : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, h);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (n.clientId = e.clientId)
                : (n.clientId = ""),
              void 0 !== e.header1 && null !== e.header1
                ? (n.header1 = t.Header.fromPartial(e.header1))
                : (n.header1 = void 0),
              void 0 !== e.header2 && null !== e.header2
                ? (n.header2 = t.Header.fromPartial(e.header2))
                : (n.header2 = void 0),
              n
            );
          },
        };
        const v = {};
        t.Header = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.signedHeader &&
                c.SignedHeader.encode(
                  e.signedHeader,
                  t.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.validatorSet &&
                l.ValidatorSet.encode(
                  e.validatorSet,
                  t.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.trustedHeight &&
                a.Height.encode(e.trustedHeight, t.uint32(26).fork()).ldelim(),
              void 0 !== e.trustedValidators &&
                l.ValidatorSet.encode(
                  e.trustedValidators,
                  t.uint32(34).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, v);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.signedHeader = c.SignedHeader.decode(n, n.uint32());
                  break;
                case 2:
                  r.validatorSet = l.ValidatorSet.decode(n, n.uint32());
                  break;
                case 3:
                  r.trustedHeight = a.Height.decode(n, n.uint32());
                  break;
                case 4:
                  r.trustedValidators = l.ValidatorSet.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (t.signedHeader = c.SignedHeader.fromJSON(e.signedHeader))
                : (t.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (t.validatorSet = l.ValidatorSet.fromJSON(e.validatorSet))
                : (t.validatorSet = void 0),
              void 0 !== e.trustedHeight && null !== e.trustedHeight
                ? (t.trustedHeight = a.Height.fromJSON(e.trustedHeight))
                : (t.trustedHeight = void 0),
              void 0 !== e.trustedValidators && null !== e.trustedValidators
                ? (t.trustedValidators = l.ValidatorSet.fromJSON(
                    e.trustedValidators,
                  ))
                : (t.trustedValidators = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.signedHeader &&
                (t.signedHeader = e.signedHeader
                  ? c.SignedHeader.toJSON(e.signedHeader)
                  : void 0),
              void 0 !== e.validatorSet &&
                (t.validatorSet = e.validatorSet
                  ? l.ValidatorSet.toJSON(e.validatorSet)
                  : void 0),
              void 0 !== e.trustedHeight &&
                (t.trustedHeight = e.trustedHeight
                  ? a.Height.toJSON(e.trustedHeight)
                  : void 0),
              void 0 !== e.trustedValidators &&
                (t.trustedValidators = e.trustedValidators
                  ? l.ValidatorSet.toJSON(e.trustedValidators)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (t.signedHeader = c.SignedHeader.fromPartial(e.signedHeader))
                : (t.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (t.validatorSet = l.ValidatorSet.fromPartial(e.validatorSet))
                : (t.validatorSet = void 0),
              void 0 !== e.trustedHeight && null !== e.trustedHeight
                ? (t.trustedHeight = a.Height.fromPartial(e.trustedHeight))
                : (t.trustedHeight = void 0),
              void 0 !== e.trustedValidators && null !== e.trustedValidators
                ? (t.trustedValidators = l.ValidatorSet.fromPartial(
                    e.trustedValidators,
                  ))
                : (t.trustedValidators = void 0),
              t
            );
          },
        };
        const m = { numerator: r.default.UZERO, denominator: r.default.UZERO };
        t.Fraction = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.numerator.isZero() || t.uint32(8).uint64(e.numerator),
              e.denominator.isZero() || t.uint32(16).uint64(e.denominator),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const r = Object.assign({}, m);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  r.numerator = n.uint64();
                  break;
                case 2:
                  r.denominator = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.numerator && null !== e.numerator
                ? (t.numerator = r.default.fromString(e.numerator))
                : (t.numerator = r.default.UZERO),
              void 0 !== e.denominator && null !== e.denominator
                ? (t.denominator = r.default.fromString(e.denominator))
                : (t.denominator = r.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.numerator &&
                (t.numerator = (e.numerator || r.default.UZERO).toString()),
              void 0 !== e.denominator &&
                (t.denominator = (e.denominator || r.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.numerator && null !== e.numerator
                ? (t.numerator = e.numerator)
                : (t.numerator = r.default.UZERO),
              void 0 !== e.denominator && null !== e.denominator
                ? (t.denominator = e.denominator)
                : (t.denominator = r.default.UZERO),
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
        const S =
          I.atob || ((e) => I.Buffer.from(e, "base64").toString("binary"));
        function b(e) {
          const t = S(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const O =
          I.btoa || ((e) => I.Buffer.from(e, "binary").toString("base64"));
        function y(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return O(t.join(""));
        }
        function C(e) {
          const t = H(e.getTime() / 1e3),
            n = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: n };
        }
        function k(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function P(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : k(u.Timestamp.fromJSON(e));
        }
        function H(e) {
          return r.default.fromNumber(e);
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, n(13));
    },
    5220: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params = t.protobufPackage = void 0));
      const r = o(n(2754)),
        i = o(n(2755));
      t.protobufPackage = "ibc.applications.interchain_accounts.host.v1";
      const s = { hostEnabled: !1, allowMessages: "" };
      ((t.Params = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            !0 === e.hostEnabled && t.uint32(8).bool(e.hostEnabled));
          for (const n of e.allowMessages) t.uint32(18).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const r = Object.assign({}, s);
          r.allowMessages = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                r.hostEnabled = n.bool();
                break;
              case 2:
                r.allowMessages.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          if (
            ((t.allowMessages = []),
            void 0 !== e.hostEnabled && null !== e.hostEnabled
              ? (t.hostEnabled = Boolean(e.hostEnabled))
              : (t.hostEnabled = !1),
            void 0 !== e.allowMessages && null !== e.allowMessages)
          )
            for (const n of e.allowMessages) t.allowMessages.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.hostEnabled && (t.hostEnabled = e.hostEnabled),
            e.allowMessages
              ? (t.allowMessages = e.allowMessages.map((e) => e))
              : (t.allowMessages = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          if (
            ((t.allowMessages = []),
            void 0 !== e.hostEnabled && null !== e.hostEnabled
              ? (t.hostEnabled = e.hostEnabled)
              : (t.hostEnabled = !1),
            void 0 !== e.allowMessages && null !== e.allowMessages)
          )
            for (const n of e.allowMessages) t.allowMessages.push(n);
          return t;
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
  },
]);
