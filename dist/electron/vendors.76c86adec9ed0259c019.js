(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [278, 277],
  {
    2759: function (e, t, n) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Any = t.protobufPackage = void 0));
        const o = i(n(2754)),
          s = i(n(2755));
        t.protobufPackage = "google.protobuf";
        const r = { typeUrl: "" };
        t.Any = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.typeUrl && t.uint32(10).string(e.typeUrl),
              0 !== e.value.length && t.uint32(18).bytes(e.value),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, r);
            o.value = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.typeUrl = n.string();
                  break;
                case 2:
                  o.value = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, r);
            return (
              (t.value = new Uint8Array()),
              void 0 !== e.typeUrl && null !== e.typeUrl
                ? (t.typeUrl = String(e.typeUrl))
                : (t.typeUrl = ""),
              void 0 !== e.value && null !== e.value && (t.value = c(e.value)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.typeUrl && (t.typeUrl = e.typeUrl),
              void 0 !== e.value &&
                (t.value = u(void 0 !== e.value ? e.value : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, r);
            return (
              void 0 !== e.typeUrl && null !== e.typeUrl
                ? (t.typeUrl = e.typeUrl)
                : (t.typeUrl = ""),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = new Uint8Array()),
              t
            );
          },
        };
        var a = (() => {
          if ("undefined" !== typeof a) return a;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const d =
          a.atob || ((e) => a.Buffer.from(e, "base64").toString("binary"));
        function c(e) {
          const t = d(e),
            n = new Uint8Array(t.length);
          for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
          return n;
        }
        const l =
          a.btoa || ((e) => a.Buffer.from(e, "binary").toString("base64"));
        function u(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return l(t.join(""));
        }
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure());
      }).call(this, n(13));
    },
    2953: function (e, t, n) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UpdateInstantiateConfigProposal =
            t.AccessConfigUpdate =
            t.UnpinCodesProposal =
            t.PinCodesProposal =
            t.ClearAdminProposal =
            t.UpdateAdminProposal =
            t.ExecuteContractProposal =
            t.SudoContractProposal =
            t.MigrateContractProposal =
            t.InstantiateContractProposal =
            t.StoreCodeProposal =
            t.protobufPackage =
              void 0));
        const o = i(n(2754)),
          s = i(n(2755)),
          r = n(3102),
          a = n(2840);
        t.protobufPackage = "cosmwasm.wasm.v1";
        const d = { title: "", description: "", runAs: "" };
        t.StoreCodeProposal = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.runAs && t.uint32(26).string(e.runAs),
              0 !== e.wasmByteCode.length && t.uint32(34).bytes(e.wasmByteCode),
              void 0 !== e.instantiatePermission &&
                r.AccessConfig.encode(
                  e.instantiatePermission,
                  t.uint32(58).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, d);
            o.wasmByteCode = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  o.runAs = n.string();
                  break;
                case 4:
                  o.wasmByteCode = n.bytes();
                  break;
                case 7:
                  o.instantiatePermission = r.AccessConfig.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              (t.wasmByteCode = new Uint8Array()),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.runAs && null !== e.runAs
                ? (t.runAs = String(e.runAs))
                : (t.runAs = ""),
              void 0 !== e.wasmByteCode &&
                null !== e.wasmByteCode &&
                (t.wasmByteCode = h(e.wasmByteCode)),
              void 0 !== e.instantiatePermission &&
              null !== e.instantiatePermission
                ? (t.instantiatePermission = r.AccessConfig.fromJSON(
                    e.instantiatePermission,
                  ))
                : (t.instantiatePermission = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.runAs && (t.runAs = e.runAs),
              void 0 !== e.wasmByteCode &&
                (t.wasmByteCode = T(
                  void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array(),
                )),
              void 0 !== e.instantiatePermission &&
                (t.instantiatePermission = e.instantiatePermission
                  ? r.AccessConfig.toJSON(e.instantiatePermission)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.runAs && null !== e.runAs
                ? (t.runAs = e.runAs)
                : (t.runAs = ""),
              void 0 !== e.wasmByteCode && null !== e.wasmByteCode
                ? (t.wasmByteCode = e.wasmByteCode)
                : (t.wasmByteCode = new Uint8Array()),
              void 0 !== e.instantiatePermission &&
              null !== e.instantiatePermission
                ? (t.instantiatePermission = r.AccessConfig.fromPartial(
                    e.instantiatePermission,
                  ))
                : (t.instantiatePermission = void 0),
              t
            );
          },
        };
        const c = {
          title: "",
          description: "",
          runAs: "",
          admin: "",
          codeId: o.default.UZERO,
          label: "",
        };
        t.InstantiateContractProposal = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.runAs && t.uint32(26).string(e.runAs),
              "" !== e.admin && t.uint32(34).string(e.admin),
              e.codeId.isZero() || t.uint32(40).uint64(e.codeId),
              "" !== e.label && t.uint32(50).string(e.label),
              0 !== e.msg.length && t.uint32(58).bytes(e.msg));
            for (const n of e.funds)
              a.Coin.encode(n, t.uint32(66).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, c);
            ((o.funds = []), (o.msg = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  o.runAs = n.string();
                  break;
                case 4:
                  o.admin = n.string();
                  break;
                case 5:
                  o.codeId = n.uint64();
                  break;
                case 6:
                  o.label = n.string();
                  break;
                case 7:
                  o.msg = n.bytes();
                  break;
                case 8:
                  o.funds.push(a.Coin.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            if (
              ((t.funds = []),
              (t.msg = new Uint8Array()),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.runAs && null !== e.runAs
                ? (t.runAs = String(e.runAs))
                : (t.runAs = ""),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = String(e.admin))
                : (t.admin = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = o.default.fromString(e.codeId))
                : (t.codeId = o.default.UZERO),
              void 0 !== e.label && null !== e.label
                ? (t.label = String(e.label))
                : (t.label = ""),
              void 0 !== e.msg && null !== e.msg && (t.msg = h(e.msg)),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(a.Coin.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.runAs && (t.runAs = e.runAs),
              void 0 !== e.admin && (t.admin = e.admin),
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.msg &&
                (t.msg = T(void 0 !== e.msg ? e.msg : new Uint8Array())),
              e.funds
                ? (t.funds = e.funds.map((e) =>
                    e ? a.Coin.toJSON(e) : void 0,
                  ))
                : (t.funds = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            if (
              ((t.funds = []),
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.runAs && null !== e.runAs
                ? (t.runAs = e.runAs)
                : (t.runAs = ""),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = e.admin)
                : (t.admin = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = o.default.UZERO),
              void 0 !== e.label && null !== e.label
                ? (t.label = e.label)
                : (t.label = ""),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(a.Coin.fromPartial(n));
            return t;
          },
        };
        const l = {
          title: "",
          description: "",
          contract: "",
          codeId: o.default.UZERO,
        };
        t.MigrateContractProposal = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.contract && t.uint32(34).string(e.contract),
              e.codeId.isZero() || t.uint32(40).uint64(e.codeId),
              0 !== e.msg.length && t.uint32(50).bytes(e.msg),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, l);
            o.msg = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 4:
                  o.contract = n.string();
                  break;
                case 5:
                  o.codeId = n.uint64();
                  break;
                case 6:
                  o.msg = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.msg = new Uint8Array()),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = o.default.fromString(e.codeId))
                : (t.codeId = o.default.UZERO),
              void 0 !== e.msg && null !== e.msg && (t.msg = h(e.msg)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.msg &&
                (t.msg = T(void 0 !== e.msg ? e.msg : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = o.default.UZERO),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              t
            );
          },
        };
        const u = { title: "", description: "", contract: "" };
        t.SudoContractProposal = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.contract && t.uint32(26).string(e.contract),
              0 !== e.msg.length && t.uint32(34).bytes(e.msg),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, u);
            o.msg = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  o.contract = n.string();
                  break;
                case 4:
                  o.msg = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              (t.msg = new Uint8Array()),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.msg && null !== e.msg && (t.msg = h(e.msg)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.msg &&
                (t.msg = T(void 0 !== e.msg ? e.msg : new Uint8Array())),
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
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              t
            );
          },
        };
        const g = { title: "", description: "", runAs: "", contract: "" };
        t.ExecuteContractProposal = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.runAs && t.uint32(26).string(e.runAs),
              "" !== e.contract && t.uint32(34).string(e.contract),
              0 !== e.msg.length && t.uint32(42).bytes(e.msg));
            for (const n of e.funds)
              a.Coin.encode(n, t.uint32(50).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, g);
            ((o.funds = []), (o.msg = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  o.runAs = n.string();
                  break;
                case 4:
                  o.contract = n.string();
                  break;
                case 5:
                  o.msg = n.bytes();
                  break;
                case 6:
                  o.funds.push(a.Coin.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            if (
              ((t.funds = []),
              (t.msg = new Uint8Array()),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.runAs && null !== e.runAs
                ? (t.runAs = String(e.runAs))
                : (t.runAs = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.msg && null !== e.msg && (t.msg = h(e.msg)),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(a.Coin.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.runAs && (t.runAs = e.runAs),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.msg &&
                (t.msg = T(void 0 !== e.msg ? e.msg : new Uint8Array())),
              e.funds
                ? (t.funds = e.funds.map((e) =>
                    e ? a.Coin.toJSON(e) : void 0,
                  ))
                : (t.funds = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            if (
              ((t.funds = []),
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.runAs && null !== e.runAs
                ? (t.runAs = e.runAs)
                : (t.runAs = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(a.Coin.fromPartial(n));
            return t;
          },
        };
        const f = { title: "", description: "", newAdmin: "", contract: "" };
        t.UpdateAdminProposal = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.newAdmin && t.uint32(26).string(e.newAdmin),
              "" !== e.contract && t.uint32(34).string(e.contract),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, f);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  o.newAdmin = n.string();
                  break;
                case 4:
                  o.contract = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
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
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.newAdmin && (t.newAdmin = e.newAdmin),
              void 0 !== e.contract && (t.contract = e.contract),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
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
        const m = { title: "", description: "", contract: "" };
        t.ClearAdminProposal = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              "" !== e.contract && t.uint32(26).string(e.contract),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, m);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  o.contract = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              void 0 !== e.contract && (t.contract = e.contract),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              t
            );
          },
        };
        const v = { title: "", description: "", codeIds: o.default.UZERO };
        t.PinCodesProposal = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              t.uint32(26).fork());
            for (const n of e.codeIds) t.uint64(n);
            return (t.ldelim(), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, v);
            o.codeIds = [];
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  if (2 === (7 & e)) {
                    const e = n.uint32() + n.pos;
                    while (n.pos < e) o.codeIds.push(n.uint64());
                  } else o.codeIds.push(n.uint64());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            if (
              ((t.codeIds = []),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.codeIds && null !== e.codeIds)
            )
              for (const n of e.codeIds)
                t.codeIds.push(o.default.fromString(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              e.codeIds
                ? (t.codeIds = e.codeIds.map((e) =>
                    (e || o.default.UZERO).toString(),
                  ))
                : (t.codeIds = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            if (
              ((t.codeIds = []),
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.codeIds && null !== e.codeIds)
            )
              for (const n of e.codeIds) t.codeIds.push(n);
            return t;
          },
        };
        const p = { title: "", description: "", codeIds: o.default.UZERO };
        t.UnpinCodesProposal = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              t.uint32(26).fork());
            for (const n of e.codeIds) t.uint64(n);
            return (t.ldelim(), t);
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, p);
            o.codeIds = [];
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.title = n.string();
                  break;
                case 2:
                  o.description = n.string();
                  break;
                case 3:
                  if (2 === (7 & e)) {
                    const e = n.uint32() + n.pos;
                    while (n.pos < e) o.codeIds.push(n.uint64());
                  } else o.codeIds.push(n.uint64());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            if (
              ((t.codeIds = []),
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              void 0 !== e.codeIds && null !== e.codeIds)
            )
              for (const n of e.codeIds)
                t.codeIds.push(o.default.fromString(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              e.codeIds
                ? (t.codeIds = e.codeIds.map((e) =>
                    (e || o.default.UZERO).toString(),
                  ))
                : (t.codeIds = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            if (
              ((t.codeIds = []),
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              void 0 !== e.codeIds && null !== e.codeIds)
            )
              for (const n of e.codeIds) t.codeIds.push(n);
            return t;
          },
        };
        const b = { codeId: o.default.UZERO };
        t.AccessConfigUpdate = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              e.codeId.isZero() || t.uint32(8).uint64(e.codeId),
              void 0 !== e.instantiatePermission &&
                r.AccessConfig.encode(
                  e.instantiatePermission,
                  t.uint32(18).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, b);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.codeId = n.uint64();
                  break;
                case 2:
                  o.instantiatePermission = r.AccessConfig.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = o.default.fromString(e.codeId))
                : (t.codeId = o.default.UZERO),
              void 0 !== e.instantiatePermission &&
              null !== e.instantiatePermission
                ? (t.instantiatePermission = r.AccessConfig.fromJSON(
                    e.instantiatePermission,
                  ))
                : (t.instantiatePermission = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.instantiatePermission &&
                (t.instantiatePermission = e.instantiatePermission
                  ? r.AccessConfig.toJSON(e.instantiatePermission)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = o.default.UZERO),
              void 0 !== e.instantiatePermission &&
              null !== e.instantiatePermission
                ? (t.instantiatePermission = r.AccessConfig.fromPartial(
                    e.instantiatePermission,
                  ))
                : (t.instantiatePermission = void 0),
              t
            );
          },
        };
        const O = { title: "", description: "" };
        t.UpdateInstantiateConfigProposal = {
          encode(e, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              "" !== e.title && n.uint32(10).string(e.title),
              "" !== e.description && n.uint32(18).string(e.description));
            for (const i of e.accessConfigUpdates)
              t.AccessConfigUpdate.encode(i, n.uint32(26).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, O);
            r.accessConfigUpdates = [];
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.title = i.string();
                  break;
                case 2:
                  r.description = i.string();
                  break;
                case 3:
                  r.accessConfigUpdates.push(
                    t.AccessConfigUpdate.decode(i, i.uint32()),
                  );
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, O);
            if (
              ((n.accessConfigUpdates = []),
              void 0 !== e.title && null !== e.title
                ? (n.title = String(e.title))
                : (n.title = ""),
              void 0 !== e.description && null !== e.description
                ? (n.description = String(e.description))
                : (n.description = ""),
              void 0 !== e.accessConfigUpdates &&
                null !== e.accessConfigUpdates)
            )
              for (const i of e.accessConfigUpdates)
                n.accessConfigUpdates.push(t.AccessConfigUpdate.fromJSON(i));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.title && (n.title = e.title),
              void 0 !== e.description && (n.description = e.description),
              e.accessConfigUpdates
                ? (n.accessConfigUpdates = e.accessConfigUpdates.map((e) =>
                    e ? t.AccessConfigUpdate.toJSON(e) : void 0,
                  ))
                : (n.accessConfigUpdates = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, O);
            if (
              ((n.accessConfigUpdates = []),
              void 0 !== e.title && null !== e.title
                ? (n.title = e.title)
                : (n.title = ""),
              void 0 !== e.description && null !== e.description
                ? (n.description = e.description)
                : (n.description = ""),
              void 0 !== e.accessConfigUpdates &&
                null !== e.accessConfigUpdates)
            )
              for (const i of e.accessConfigUpdates)
                n.accessConfigUpdates.push(t.AccessConfigUpdate.fromPartial(i));
            return n;
          },
        };
        var A = (() => {
          if ("undefined" !== typeof A) return A;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const S =
          A.atob || ((e) => A.Buffer.from(e, "base64").toString("binary"));
        function h(e) {
          const t = S(e),
            n = new Uint8Array(t.length);
          for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
          return n;
        }
        const y =
          A.btoa || ((e) => A.Buffer.from(e, "binary").toString("base64"));
        function T(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return y(t.join(""));
        }
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure());
      }).call(this, n(13));
    },
    2993: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Timestamp = t.protobufPackage = void 0));
      const o = i(n(2754)),
        s = i(n(2755));
      t.protobufPackage = "google.protobuf";
      const r = { seconds: o.default.ZERO, nanos: 0 };
      ((t.Timestamp = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.seconds.isZero() || t.uint32(8).int64(e.seconds),
            0 !== e.nanos && t.uint32(16).int32(e.nanos),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, r);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.seconds = n.int64();
                break;
              case 2:
                o.nanos = n.int32();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.seconds && null !== e.seconds
              ? (t.seconds = o.default.fromString(e.seconds))
              : (t.seconds = o.default.ZERO),
            void 0 !== e.nanos && null !== e.nanos
              ? (t.nanos = Number(e.nanos))
              : (t.nanos = 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.seconds &&
              (t.seconds = (e.seconds || o.default.ZERO).toString()),
            void 0 !== e.nanos && (t.nanos = e.nanos),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.seconds && null !== e.seconds
              ? (t.seconds = e.seconds)
              : (t.seconds = o.default.ZERO),
            void 0 !== e.nanos && null !== e.nanos
              ? (t.nanos = e.nanos)
              : (t.nanos = 0),
            t
          );
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    3102: function (e, t, n) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Model =
            t.AbsoluteTxPosition =
            t.ContractCodeHistoryEntry =
            t.ContractInfo =
            t.CodeInfo =
            t.Params =
            t.AccessConfig =
            t.AccessTypeParam =
            t.contractCodeHistoryOperationTypeToJSON =
            t.contractCodeHistoryOperationTypeFromJSON =
            t.ContractCodeHistoryOperationType =
            t.accessTypeToJSON =
            t.accessTypeFromJSON =
            t.AccessType =
            t.protobufPackage =
              void 0));
        const o = i(n(2754)),
          s = i(n(2755)),
          r = n(2759);
        var a, d;
        function c(e) {
          switch (e) {
            case 0:
            case "ACCESS_TYPE_UNSPECIFIED":
              return a.ACCESS_TYPE_UNSPECIFIED;
            case 1:
            case "ACCESS_TYPE_NOBODY":
              return a.ACCESS_TYPE_NOBODY;
            case 2:
            case "ACCESS_TYPE_ONLY_ADDRESS":
              return a.ACCESS_TYPE_ONLY_ADDRESS;
            case 3:
            case "ACCESS_TYPE_EVERYBODY":
              return a.ACCESS_TYPE_EVERYBODY;
            case -1:
            case "UNRECOGNIZED":
            default:
              return a.UNRECOGNIZED;
          }
        }
        function l(e) {
          switch (e) {
            case a.ACCESS_TYPE_UNSPECIFIED:
              return "ACCESS_TYPE_UNSPECIFIED";
            case a.ACCESS_TYPE_NOBODY:
              return "ACCESS_TYPE_NOBODY";
            case a.ACCESS_TYPE_ONLY_ADDRESS:
              return "ACCESS_TYPE_ONLY_ADDRESS";
            case a.ACCESS_TYPE_EVERYBODY:
              return "ACCESS_TYPE_EVERYBODY";
            default:
              return "UNKNOWN";
          }
        }
        function u(e) {
          switch (e) {
            case 0:
            case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
              return d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
            case 1:
            case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
              return d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
            case 2:
            case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
              return d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
            case 3:
            case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
              return d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
            case -1:
            case "UNRECOGNIZED":
            default:
              return d.UNRECOGNIZED;
          }
        }
        function g(e) {
          switch (e) {
            case d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
              return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
            case d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
              return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
            case d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
              return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
            case d.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
              return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "cosmwasm.wasm.v1"),
          (function (e) {
            ((e[(e["ACCESS_TYPE_UNSPECIFIED"] = 0)] =
              "ACCESS_TYPE_UNSPECIFIED"),
              (e[(e["ACCESS_TYPE_NOBODY"] = 1)] = "ACCESS_TYPE_NOBODY"),
              (e[(e["ACCESS_TYPE_ONLY_ADDRESS"] = 2)] =
                "ACCESS_TYPE_ONLY_ADDRESS"),
              (e[(e["ACCESS_TYPE_EVERYBODY"] = 3)] = "ACCESS_TYPE_EVERYBODY"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((a = t.AccessType || (t.AccessType = {}))),
          (t.accessTypeFromJSON = c),
          (t.accessTypeToJSON = l),
          (function (e) {
            ((e[(e["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0)] =
              "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"),
              (e[(e["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1)] =
                "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"),
              (e[(e["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2)] =
                "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"),
              (e[(e["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3)] =
                "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })(
            (d =
              t.ContractCodeHistoryOperationType ||
              (t.ContractCodeHistoryOperationType = {})),
          ),
          (t.contractCodeHistoryOperationTypeFromJSON = u),
          (t.contractCodeHistoryOperationTypeToJSON = g));
        const f = { value: 0 };
        t.AccessTypeParam = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.value && t.uint32(8).int32(e.value),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, f);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.value = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.value && null !== e.value
                ? (t.value = c(e.value))
                : (t.value = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.value && (t.value = l(e.value)), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = 0),
              t
            );
          },
        };
        const m = { permission: 0, address: "" };
        t.AccessConfig = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.permission && t.uint32(8).int32(e.permission),
              "" !== e.address && t.uint32(18).string(e.address),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, m);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.permission = n.int32();
                  break;
                case 2:
                  o.address = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.permission && null !== e.permission
                ? (t.permission = c(e.permission))
                : (t.permission = 0),
              void 0 !== e.address && null !== e.address
                ? (t.address = String(e.address))
                : (t.address = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.permission && (t.permission = l(e.permission)),
              void 0 !== e.address && (t.address = e.address),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.permission && null !== e.permission
                ? (t.permission = e.permission)
                : (t.permission = 0),
              void 0 !== e.address && null !== e.address
                ? (t.address = e.address)
                : (t.address = ""),
              t
            );
          },
        };
        const v = { instantiateDefaultPermission: 0 };
        t.Params = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.codeUploadAccess &&
                t.AccessConfig.encode(
                  e.codeUploadAccess,
                  n.uint32(10).fork(),
                ).ldelim(),
              0 !== e.instantiateDefaultPermission &&
                n.uint32(16).int32(e.instantiateDefaultPermission),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, v);
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.codeUploadAccess = t.AccessConfig.decode(i, i.uint32());
                  break;
                case 2:
                  r.instantiateDefaultPermission = i.int32();
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, v);
            return (
              void 0 !== e.codeUploadAccess && null !== e.codeUploadAccess
                ? (n.codeUploadAccess = t.AccessConfig.fromJSON(
                    e.codeUploadAccess,
                  ))
                : (n.codeUploadAccess = void 0),
              void 0 !== e.instantiateDefaultPermission &&
              null !== e.instantiateDefaultPermission
                ? (n.instantiateDefaultPermission = c(
                    e.instantiateDefaultPermission,
                  ))
                : (n.instantiateDefaultPermission = 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.codeUploadAccess &&
                (n.codeUploadAccess = e.codeUploadAccess
                  ? t.AccessConfig.toJSON(e.codeUploadAccess)
                  : void 0),
              void 0 !== e.instantiateDefaultPermission &&
                (n.instantiateDefaultPermission = l(
                  e.instantiateDefaultPermission,
                )),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, v);
            return (
              void 0 !== e.codeUploadAccess && null !== e.codeUploadAccess
                ? (n.codeUploadAccess = t.AccessConfig.fromPartial(
                    e.codeUploadAccess,
                  ))
                : (n.codeUploadAccess = void 0),
              void 0 !== e.instantiateDefaultPermission &&
              null !== e.instantiateDefaultPermission
                ? (n.instantiateDefaultPermission =
                    e.instantiateDefaultPermission)
                : (n.instantiateDefaultPermission = 0),
              n
            );
          },
        };
        const p = { creator: "" };
        t.CodeInfo = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== e.codeHash.length && n.uint32(10).bytes(e.codeHash),
              "" !== e.creator && n.uint32(18).string(e.creator),
              void 0 !== e.instantiateConfig &&
                t.AccessConfig.encode(
                  e.instantiateConfig,
                  n.uint32(42).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, p);
            r.codeHash = new Uint8Array();
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.codeHash = i.bytes();
                  break;
                case 2:
                  r.creator = i.string();
                  break;
                case 5:
                  r.instantiateConfig = t.AccessConfig.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, p);
            return (
              (n.codeHash = new Uint8Array()),
              void 0 !== e.codeHash &&
                null !== e.codeHash &&
                (n.codeHash = T(e.codeHash)),
              void 0 !== e.creator && null !== e.creator
                ? (n.creator = String(e.creator))
                : (n.creator = ""),
              void 0 !== e.instantiateConfig && null !== e.instantiateConfig
                ? (n.instantiateConfig = t.AccessConfig.fromJSON(
                    e.instantiateConfig,
                  ))
                : (n.instantiateConfig = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.codeHash &&
                (n.codeHash = N(
                  void 0 !== e.codeHash ? e.codeHash : new Uint8Array(),
                )),
              void 0 !== e.creator && (n.creator = e.creator),
              void 0 !== e.instantiateConfig &&
                (n.instantiateConfig = e.instantiateConfig
                  ? t.AccessConfig.toJSON(e.instantiateConfig)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, p);
            return (
              void 0 !== e.codeHash && null !== e.codeHash
                ? (n.codeHash = e.codeHash)
                : (n.codeHash = new Uint8Array()),
              void 0 !== e.creator && null !== e.creator
                ? (n.creator = e.creator)
                : (n.creator = ""),
              void 0 !== e.instantiateConfig && null !== e.instantiateConfig
                ? (n.instantiateConfig = t.AccessConfig.fromPartial(
                    e.instantiateConfig,
                  ))
                : (n.instantiateConfig = void 0),
              n
            );
          },
        };
        const b = {
          codeId: o.default.UZERO,
          creator: "",
          admin: "",
          label: "",
          ibcPortId: "",
        };
        t.ContractInfo = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              e.codeId.isZero() || n.uint32(8).uint64(e.codeId),
              "" !== e.creator && n.uint32(18).string(e.creator),
              "" !== e.admin && n.uint32(26).string(e.admin),
              "" !== e.label && n.uint32(34).string(e.label),
              void 0 !== e.created &&
                t.AbsoluteTxPosition.encode(
                  e.created,
                  n.uint32(42).fork(),
                ).ldelim(),
              "" !== e.ibcPortId && n.uint32(50).string(e.ibcPortId),
              void 0 !== e.extension &&
                r.Any.encode(e.extension, n.uint32(58).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const a = Object.assign({}, b);
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  a.codeId = i.uint64();
                  break;
                case 2:
                  a.creator = i.string();
                  break;
                case 3:
                  a.admin = i.string();
                  break;
                case 4:
                  a.label = i.string();
                  break;
                case 5:
                  a.created = t.AbsoluteTxPosition.decode(i, i.uint32());
                  break;
                case 6:
                  a.ibcPortId = i.string();
                  break;
                case 7:
                  a.extension = r.Any.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const n = Object.assign({}, b);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (n.codeId = o.default.fromString(e.codeId))
                : (n.codeId = o.default.UZERO),
              void 0 !== e.creator && null !== e.creator
                ? (n.creator = String(e.creator))
                : (n.creator = ""),
              void 0 !== e.admin && null !== e.admin
                ? (n.admin = String(e.admin))
                : (n.admin = ""),
              void 0 !== e.label && null !== e.label
                ? (n.label = String(e.label))
                : (n.label = ""),
              void 0 !== e.created && null !== e.created
                ? (n.created = t.AbsoluteTxPosition.fromJSON(e.created))
                : (n.created = void 0),
              void 0 !== e.ibcPortId && null !== e.ibcPortId
                ? (n.ibcPortId = String(e.ibcPortId))
                : (n.ibcPortId = ""),
              void 0 !== e.extension && null !== e.extension
                ? (n.extension = r.Any.fromJSON(e.extension))
                : (n.extension = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.codeId &&
                (n.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.creator && (n.creator = e.creator),
              void 0 !== e.admin && (n.admin = e.admin),
              void 0 !== e.label && (n.label = e.label),
              void 0 !== e.created &&
                (n.created = e.created
                  ? t.AbsoluteTxPosition.toJSON(e.created)
                  : void 0),
              void 0 !== e.ibcPortId && (n.ibcPortId = e.ibcPortId),
              void 0 !== e.extension &&
                (n.extension = e.extension
                  ? r.Any.toJSON(e.extension)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, b);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (n.codeId = e.codeId)
                : (n.codeId = o.default.UZERO),
              void 0 !== e.creator && null !== e.creator
                ? (n.creator = e.creator)
                : (n.creator = ""),
              void 0 !== e.admin && null !== e.admin
                ? (n.admin = e.admin)
                : (n.admin = ""),
              void 0 !== e.label && null !== e.label
                ? (n.label = e.label)
                : (n.label = ""),
              void 0 !== e.created && null !== e.created
                ? (n.created = t.AbsoluteTxPosition.fromPartial(e.created))
                : (n.created = void 0),
              void 0 !== e.ibcPortId && null !== e.ibcPortId
                ? (n.ibcPortId = e.ibcPortId)
                : (n.ibcPortId = ""),
              void 0 !== e.extension && null !== e.extension
                ? (n.extension = r.Any.fromPartial(e.extension))
                : (n.extension = void 0),
              n
            );
          },
        };
        const O = { operation: 0, codeId: o.default.UZERO };
        t.ContractCodeHistoryEntry = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== e.operation && n.uint32(8).int32(e.operation),
              e.codeId.isZero() || n.uint32(16).uint64(e.codeId),
              void 0 !== e.updated &&
                t.AbsoluteTxPosition.encode(
                  e.updated,
                  n.uint32(26).fork(),
                ).ldelim(),
              0 !== e.msg.length && n.uint32(34).bytes(e.msg),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, O);
            r.msg = new Uint8Array();
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.operation = i.int32();
                  break;
                case 2:
                  r.codeId = i.uint64();
                  break;
                case 3:
                  r.updated = t.AbsoluteTxPosition.decode(i, i.uint32());
                  break;
                case 4:
                  r.msg = i.bytes();
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, O);
            return (
              (n.msg = new Uint8Array()),
              void 0 !== e.operation && null !== e.operation
                ? (n.operation = u(e.operation))
                : (n.operation = 0),
              void 0 !== e.codeId && null !== e.codeId
                ? (n.codeId = o.default.fromString(e.codeId))
                : (n.codeId = o.default.UZERO),
              void 0 !== e.updated && null !== e.updated
                ? (n.updated = t.AbsoluteTxPosition.fromJSON(e.updated))
                : (n.updated = void 0),
              void 0 !== e.msg && null !== e.msg && (n.msg = T(e.msg)),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.operation && (n.operation = g(e.operation)),
              void 0 !== e.codeId &&
                (n.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.updated &&
                (n.updated = e.updated
                  ? t.AbsoluteTxPosition.toJSON(e.updated)
                  : void 0),
              void 0 !== e.msg &&
                (n.msg = N(void 0 !== e.msg ? e.msg : new Uint8Array())),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, O);
            return (
              void 0 !== e.operation && null !== e.operation
                ? (n.operation = e.operation)
                : (n.operation = 0),
              void 0 !== e.codeId && null !== e.codeId
                ? (n.codeId = e.codeId)
                : (n.codeId = o.default.UZERO),
              void 0 !== e.updated && null !== e.updated
                ? (n.updated = t.AbsoluteTxPosition.fromPartial(e.updated))
                : (n.updated = void 0),
              void 0 !== e.msg && null !== e.msg
                ? (n.msg = e.msg)
                : (n.msg = new Uint8Array()),
              n
            );
          },
        };
        const A = { blockHeight: o.default.UZERO, txIndex: o.default.UZERO };
        t.AbsoluteTxPosition = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              e.blockHeight.isZero() || t.uint32(8).uint64(e.blockHeight),
              e.txIndex.isZero() || t.uint32(16).uint64(e.txIndex),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, A);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.blockHeight = n.uint64();
                  break;
                case 2:
                  o.txIndex = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, A);
            return (
              void 0 !== e.blockHeight && null !== e.blockHeight
                ? (t.blockHeight = o.default.fromString(e.blockHeight))
                : (t.blockHeight = o.default.UZERO),
              void 0 !== e.txIndex && null !== e.txIndex
                ? (t.txIndex = o.default.fromString(e.txIndex))
                : (t.txIndex = o.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.blockHeight &&
                (t.blockHeight = (e.blockHeight || o.default.UZERO).toString()),
              void 0 !== e.txIndex &&
                (t.txIndex = (e.txIndex || o.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, A);
            return (
              void 0 !== e.blockHeight && null !== e.blockHeight
                ? (t.blockHeight = e.blockHeight)
                : (t.blockHeight = o.default.UZERO),
              void 0 !== e.txIndex && null !== e.txIndex
                ? (t.txIndex = e.txIndex)
                : (t.txIndex = o.default.UZERO),
              t
            );
          },
        };
        const S = {};
        t.Model = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.key.length && t.uint32(10).bytes(e.key),
              0 !== e.value.length && t.uint32(18).bytes(e.value),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, S);
            ((o.key = new Uint8Array()), (o.value = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.key = n.bytes();
                  break;
                case 2:
                  o.value = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              (t.key = new Uint8Array()),
              (t.value = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (t.key = T(e.key)),
              void 0 !== e.value && null !== e.value && (t.value = T(e.value)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key &&
                (t.key = N(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (t.value = N(void 0 !== e.value ? e.value : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = new Uint8Array()),
              t
            );
          },
        };
        var h = (() => {
          if ("undefined" !== typeof h) return h;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const y =
          h.atob || ((e) => h.Buffer.from(e, "base64").toString("binary"));
        function T(e) {
          const t = y(e),
            n = new Uint8Array(t.length);
          for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
          return n;
        }
        const k =
          h.btoa || ((e) => h.Buffer.from(e, "binary").toString("base64"));
        function N(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return k(t.join(""));
        }
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure());
      }).call(this, n(13));
    },
    3173: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PermanentLockedAccount =
          t.PeriodicVestingAccount =
          t.Period =
          t.DelayedVestingAccount =
          t.ContinuousVestingAccount =
          t.BaseVestingAccount =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = i(n(2755)),
        r = n(4336),
        a = n(2840);
      t.protobufPackage = "cosmos.vesting.v1beta1";
      const d = { endTime: o.default.ZERO };
      t.BaseVestingAccount = {
        encode(e, t) {
          (void 0 === t && (t = s.default.Writer.create()),
            void 0 !== e.baseAccount &&
              r.BaseAccount.encode(
                e.baseAccount,
                t.uint32(10).fork(),
              ).ldelim());
          for (const n of e.originalVesting)
            a.Coin.encode(n, t.uint32(18).fork()).ldelim();
          for (const n of e.delegatedFree)
            a.Coin.encode(n, t.uint32(26).fork()).ldelim();
          for (const n of e.delegatedVesting)
            a.Coin.encode(n, t.uint32(34).fork()).ldelim();
          return (e.endTime.isZero() || t.uint32(40).int64(e.endTime), t);
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, d);
          ((o.originalVesting = []),
            (o.delegatedFree = []),
            (o.delegatedVesting = []));
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.baseAccount = r.BaseAccount.decode(n, n.uint32());
                break;
              case 2:
                o.originalVesting.push(a.Coin.decode(n, n.uint32()));
                break;
              case 3:
                o.delegatedFree.push(a.Coin.decode(n, n.uint32()));
                break;
              case 4:
                o.delegatedVesting.push(a.Coin.decode(n, n.uint32()));
                break;
              case 5:
                o.endTime = n.int64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          if (
            ((t.originalVesting = []),
            (t.delegatedFree = []),
            (t.delegatedVesting = []),
            void 0 !== e.baseAccount && null !== e.baseAccount
              ? (t.baseAccount = r.BaseAccount.fromJSON(e.baseAccount))
              : (t.baseAccount = void 0),
            void 0 !== e.originalVesting && null !== e.originalVesting)
          )
            for (const n of e.originalVesting)
              t.originalVesting.push(a.Coin.fromJSON(n));
          if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
            for (const n of e.delegatedFree)
              t.delegatedFree.push(a.Coin.fromJSON(n));
          if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
            for (const n of e.delegatedVesting)
              t.delegatedVesting.push(a.Coin.fromJSON(n));
          return (
            void 0 !== e.endTime && null !== e.endTime
              ? (t.endTime = o.default.fromString(e.endTime))
              : (t.endTime = o.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.baseAccount &&
              (t.baseAccount = e.baseAccount
                ? r.BaseAccount.toJSON(e.baseAccount)
                : void 0),
            e.originalVesting
              ? (t.originalVesting = e.originalVesting.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.originalVesting = []),
            e.delegatedFree
              ? (t.delegatedFree = e.delegatedFree.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.delegatedFree = []),
            e.delegatedVesting
              ? (t.delegatedVesting = e.delegatedVesting.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.delegatedVesting = []),
            void 0 !== e.endTime &&
              (t.endTime = (e.endTime || o.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          if (
            ((t.originalVesting = []),
            (t.delegatedFree = []),
            (t.delegatedVesting = []),
            void 0 !== e.baseAccount && null !== e.baseAccount
              ? (t.baseAccount = r.BaseAccount.fromPartial(e.baseAccount))
              : (t.baseAccount = void 0),
            void 0 !== e.originalVesting && null !== e.originalVesting)
          )
            for (const n of e.originalVesting)
              t.originalVesting.push(a.Coin.fromPartial(n));
          if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
            for (const n of e.delegatedFree)
              t.delegatedFree.push(a.Coin.fromPartial(n));
          if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
            for (const n of e.delegatedVesting)
              t.delegatedVesting.push(a.Coin.fromPartial(n));
          return (
            void 0 !== e.endTime && null !== e.endTime
              ? (t.endTime = e.endTime)
              : (t.endTime = o.default.ZERO),
            t
          );
        },
      };
      const c = { startTime: o.default.ZERO };
      t.ContinuousVestingAccount = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.baseVestingAccount &&
              t.BaseVestingAccount.encode(
                e.baseVestingAccount,
                n.uint32(10).fork(),
              ).ldelim(),
            e.startTime.isZero() || n.uint32(16).int64(e.startTime),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, c);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.baseVestingAccount = t.BaseVestingAccount.decode(
                  i,
                  i.uint32(),
                );
                break;
              case 2:
                r.startTime = i.int64();
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, c);
          return (
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromJSON(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            void 0 !== e.startTime && null !== e.startTime
              ? (n.startTime = o.default.fromString(e.startTime))
              : (n.startTime = o.default.ZERO),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.baseVestingAccount &&
              (n.baseVestingAccount = e.baseVestingAccount
                ? t.BaseVestingAccount.toJSON(e.baseVestingAccount)
                : void 0),
            void 0 !== e.startTime &&
              (n.startTime = (e.startTime || o.default.ZERO).toString()),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, c);
          return (
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromPartial(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            void 0 !== e.startTime && null !== e.startTime
              ? (n.startTime = e.startTime)
              : (n.startTime = o.default.ZERO),
            n
          );
        },
      };
      const l = {};
      t.DelayedVestingAccount = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.baseVestingAccount &&
              t.BaseVestingAccount.encode(
                e.baseVestingAccount,
                n.uint32(10).fork(),
              ).ldelim(),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, l);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.baseVestingAccount = t.BaseVestingAccount.decode(
                  i,
                  i.uint32(),
                );
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, l);
          return (
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromJSON(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.baseVestingAccount &&
              (n.baseVestingAccount = e.baseVestingAccount
                ? t.BaseVestingAccount.toJSON(e.baseVestingAccount)
                : void 0),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, l);
          return (
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromPartial(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            n
          );
        },
      };
      const u = { length: o.default.ZERO };
      t.Period = {
        encode(e, t) {
          (void 0 === t && (t = s.default.Writer.create()),
            e.length.isZero() || t.uint32(8).int64(e.length));
          for (const n of e.amount)
            a.Coin.encode(n, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, u);
          o.amount = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.length = n.int64();
                break;
              case 2:
                o.amount.push(a.Coin.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.amount = []),
            void 0 !== e.length && null !== e.length
              ? (t.length = o.default.fromString(e.length))
              : (t.length = o.default.ZERO),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const n of e.amount) t.amount.push(a.Coin.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.length &&
              (t.length = (e.length || o.default.ZERO).toString()),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (
            ((t.amount = []),
            void 0 !== e.length && null !== e.length
              ? (t.length = e.length)
              : (t.length = o.default.ZERO),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const n of e.amount) t.amount.push(a.Coin.fromPartial(n));
          return t;
        },
      };
      const g = { startTime: o.default.ZERO };
      t.PeriodicVestingAccount = {
        encode(e, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.baseVestingAccount &&
              t.BaseVestingAccount.encode(
                e.baseVestingAccount,
                n.uint32(10).fork(),
              ).ldelim(),
            e.startTime.isZero() || n.uint32(16).int64(e.startTime));
          for (const i of e.vestingPeriods)
            t.Period.encode(i, n.uint32(26).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, g);
          r.vestingPeriods = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.baseVestingAccount = t.BaseVestingAccount.decode(
                  i,
                  i.uint32(),
                );
                break;
              case 2:
                r.startTime = i.int64();
                break;
              case 3:
                r.vestingPeriods.push(t.Period.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, g);
          if (
            ((n.vestingPeriods = []),
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromJSON(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            void 0 !== e.startTime && null !== e.startTime
              ? (n.startTime = o.default.fromString(e.startTime))
              : (n.startTime = o.default.ZERO),
            void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
          )
            for (const i of e.vestingPeriods)
              n.vestingPeriods.push(t.Period.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.baseVestingAccount &&
              (n.baseVestingAccount = e.baseVestingAccount
                ? t.BaseVestingAccount.toJSON(e.baseVestingAccount)
                : void 0),
            void 0 !== e.startTime &&
              (n.startTime = (e.startTime || o.default.ZERO).toString()),
            e.vestingPeriods
              ? (n.vestingPeriods = e.vestingPeriods.map((e) =>
                  e ? t.Period.toJSON(e) : void 0,
                ))
              : (n.vestingPeriods = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, g);
          if (
            ((n.vestingPeriods = []),
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromPartial(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            void 0 !== e.startTime && null !== e.startTime
              ? (n.startTime = e.startTime)
              : (n.startTime = o.default.ZERO),
            void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
          )
            for (const i of e.vestingPeriods)
              n.vestingPeriods.push(t.Period.fromPartial(i));
          return n;
        },
      };
      const f = {};
      ((t.PermanentLockedAccount = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.baseVestingAccount &&
              t.BaseVestingAccount.encode(
                e.baseVestingAccount,
                n.uint32(10).fork(),
              ).ldelim(),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, f);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.baseVestingAccount = t.BaseVestingAccount.decode(
                  i,
                  i.uint32(),
                );
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, f);
          return (
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromJSON(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.baseVestingAccount &&
              (n.baseVestingAccount = e.baseVestingAccount
                ? t.BaseVestingAccount.toJSON(e.baseVestingAccount)
                : void 0),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, f);
          return (
            void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount
              ? (n.baseVestingAccount = t.BaseVestingAccount.fromPartial(
                  e.baseVestingAccount,
                ))
              : (n.baseVestingAccount = void 0),
            n
          );
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    3174: function (e, t, n) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrpcWebImpl =
            t.MsgClearAdminDesc =
            t.MsgUpdateAdminDesc =
            t.MsgMigrateContractDesc =
            t.MsgExecuteContractDesc =
            t.MsgInstantiateContractDesc =
            t.MsgStoreCodeDesc =
            t.MsgDesc =
            t.MsgClientImpl =
            t.MsgClearAdminResponse =
            t.MsgClearAdmin =
            t.MsgUpdateAdminResponse =
            t.MsgUpdateAdmin =
            t.MsgMigrateContractResponse =
            t.MsgMigrateContract =
            t.MsgExecuteContractResponse =
            t.MsgExecuteContract =
            t.MsgInstantiateContractResponse =
            t.MsgInstantiateContract =
            t.MsgStoreCodeResponse =
            t.MsgStoreCode =
            t.protobufPackage =
              void 0));
        const o = i(n(2754)),
          s = n(2889),
          r = i(n(2755)),
          a = n(3102),
          d = n(2890),
          c = n(2840);
        t.protobufPackage = "cosmwasm.wasm.v1";
        const l = { sender: "" };
        t.MsgStoreCode = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              0 !== e.wasmByteCode.length && t.uint32(18).bytes(e.wasmByteCode),
              void 0 !== e.instantiatePermission &&
                a.AccessConfig.encode(
                  e.instantiatePermission,
                  t.uint32(42).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, l);
            o.wasmByteCode = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.sender = n.string();
                  break;
                case 2:
                  o.wasmByteCode = n.bytes();
                  break;
                case 5:
                  o.instantiatePermission = a.AccessConfig.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.wasmByteCode = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.wasmByteCode &&
                null !== e.wasmByteCode &&
                (t.wasmByteCode = k(e.wasmByteCode)),
              void 0 !== e.instantiatePermission &&
              null !== e.instantiatePermission
                ? (t.instantiatePermission = a.AccessConfig.fromJSON(
                    e.instantiatePermission,
                  ))
                : (t.instantiatePermission = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.wasmByteCode &&
                (t.wasmByteCode = I(
                  void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array(),
                )),
              void 0 !== e.instantiatePermission &&
                (t.instantiatePermission = e.instantiatePermission
                  ? a.AccessConfig.toJSON(e.instantiatePermission)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.wasmByteCode && null !== e.wasmByteCode
                ? (t.wasmByteCode = e.wasmByteCode)
                : (t.wasmByteCode = new Uint8Array()),
              void 0 !== e.instantiatePermission &&
              null !== e.instantiatePermission
                ? (t.instantiatePermission = a.AccessConfig.fromPartial(
                    e.instantiatePermission,
                  ))
                : (t.instantiatePermission = void 0),
              t
            );
          },
        };
        const u = { codeId: o.default.UZERO };
        t.MsgStoreCodeResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              e.codeId.isZero() || t.uint32(8).uint64(e.codeId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, u);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.codeId = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = o.default.fromString(e.codeId))
                : (t.codeId = o.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || o.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = o.default.UZERO),
              t
            );
          },
        };
        const g = { sender: "", admin: "", codeId: o.default.UZERO, label: "" };
        t.MsgInstantiateContract = {
          encode(e, t) {
            (void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.admin && t.uint32(18).string(e.admin),
              e.codeId.isZero() || t.uint32(24).uint64(e.codeId),
              "" !== e.label && t.uint32(34).string(e.label),
              0 !== e.msg.length && t.uint32(42).bytes(e.msg));
            for (const n of e.funds)
              c.Coin.encode(n, t.uint32(50).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, g);
            ((o.funds = []), (o.msg = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.sender = n.string();
                  break;
                case 2:
                  o.admin = n.string();
                  break;
                case 3:
                  o.codeId = n.uint64();
                  break;
                case 4:
                  o.label = n.string();
                  break;
                case 5:
                  o.msg = n.bytes();
                  break;
                case 6:
                  o.funds.push(c.Coin.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            if (
              ((t.funds = []),
              (t.msg = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = String(e.admin))
                : (t.admin = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = o.default.fromString(e.codeId))
                : (t.codeId = o.default.UZERO),
              void 0 !== e.label && null !== e.label
                ? (t.label = String(e.label))
                : (t.label = ""),
              void 0 !== e.msg && null !== e.msg && (t.msg = k(e.msg)),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(c.Coin.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.admin && (t.admin = e.admin),
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.msg &&
                (t.msg = I(void 0 !== e.msg ? e.msg : new Uint8Array())),
              e.funds
                ? (t.funds = e.funds.map((e) =>
                    e ? c.Coin.toJSON(e) : void 0,
                  ))
                : (t.funds = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            if (
              ((t.funds = []),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.admin && null !== e.admin
                ? (t.admin = e.admin)
                : (t.admin = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = o.default.UZERO),
              void 0 !== e.label && null !== e.label
                ? (t.label = e.label)
                : (t.label = ""),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(c.Coin.fromPartial(n));
            return t;
          },
        };
        const f = { address: "" };
        t.MsgInstantiateContractResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.address && t.uint32(10).string(e.address),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, f);
            o.data = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.address = n.string();
                  break;
                case 2:
                  o.data = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.address && null !== e.address
                ? (t.address = String(e.address))
                : (t.address = ""),
              void 0 !== e.data && null !== e.data && (t.data = k(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.address && (t.address = e.address),
              void 0 !== e.data &&
                (t.data = I(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.address && null !== e.address
                ? (t.address = e.address)
                : (t.address = ""),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const m = { sender: "", contract: "" };
        t.MsgExecuteContract = {
          encode(e, t) {
            (void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.contract && t.uint32(18).string(e.contract),
              0 !== e.msg.length && t.uint32(26).bytes(e.msg));
            for (const n of e.funds)
              c.Coin.encode(n, t.uint32(42).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, m);
            ((o.funds = []), (o.msg = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.sender = n.string();
                  break;
                case 2:
                  o.contract = n.string();
                  break;
                case 3:
                  o.msg = n.bytes();
                  break;
                case 5:
                  o.funds.push(c.Coin.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            if (
              ((t.funds = []),
              (t.msg = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.msg && null !== e.msg && (t.msg = k(e.msg)),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(c.Coin.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.msg &&
                (t.msg = I(void 0 !== e.msg ? e.msg : new Uint8Array())),
              e.funds
                ? (t.funds = e.funds.map((e) =>
                    e ? c.Coin.toJSON(e) : void 0,
                  ))
                : (t.funds = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            if (
              ((t.funds = []),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              void 0 !== e.funds && null !== e.funds)
            )
              for (const n of e.funds) t.funds.push(c.Coin.fromPartial(n));
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
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, v);
            o.data = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.data = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = k(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = I(void 0 !== e.data ? e.data : new Uint8Array())),
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
        const p = { sender: "", contract: "", codeId: o.default.UZERO };
        t.MsgMigrateContract = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.contract && t.uint32(18).string(e.contract),
              e.codeId.isZero() || t.uint32(24).uint64(e.codeId),
              0 !== e.msg.length && t.uint32(34).bytes(e.msg),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, p);
            o.msg = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.sender = n.string();
                  break;
                case 2:
                  o.contract = n.string();
                  break;
                case 3:
                  o.codeId = n.uint64();
                  break;
                case 4:
                  o.msg = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            return (
              (t.msg = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = o.default.fromString(e.codeId))
                : (t.codeId = o.default.UZERO),
              void 0 !== e.msg && null !== e.msg && (t.msg = k(e.msg)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.contract && (t.contract = e.contract),
              void 0 !== e.codeId &&
                (t.codeId = (e.codeId || o.default.UZERO).toString()),
              void 0 !== e.msg &&
                (t.msg = I(void 0 !== e.msg ? e.msg : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              void 0 !== e.codeId && null !== e.codeId
                ? (t.codeId = e.codeId)
                : (t.codeId = o.default.UZERO),
              void 0 !== e.msg && null !== e.msg
                ? (t.msg = e.msg)
                : (t.msg = new Uint8Array()),
              t
            );
          },
        };
        const b = {};
        t.MsgMigrateContractResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.data.length && t.uint32(10).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, b);
            o.data = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.data = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = k(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = I(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const O = { sender: "", newAdmin: "", contract: "" };
        t.MsgUpdateAdmin = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.newAdmin && t.uint32(18).string(e.newAdmin),
              "" !== e.contract && t.uint32(26).string(e.contract),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, O);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.sender = n.string();
                  break;
                case 2:
                  o.newAdmin = n.string();
                  break;
                case 3:
                  o.contract = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, O);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
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
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.newAdmin && (t.newAdmin = e.newAdmin),
              void 0 !== e.contract && (t.contract = e.contract),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, O);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
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
        const A = {};
        t.MsgUpdateAdminResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, A);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, A);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, A);
            return t;
          },
        };
        const S = { sender: "", contract: "" };
        t.MsgClearAdmin = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.sender && t.uint32(10).string(e.sender),
              "" !== e.contract && t.uint32(26).string(e.contract),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, S);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.sender = n.string();
                  break;
                case 3:
                  o.contract = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = String(e.contract))
                : (t.contract = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.contract && (t.contract = e.contract),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              void 0 !== e.contract && null !== e.contract
                ? (t.contract = e.contract)
                : (t.contract = ""),
              t
            );
          },
        };
        const h = {};
        t.MsgClearAdminResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, h);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return t;
          },
        };
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.StoreCode = this.StoreCode.bind(this)),
              (this.InstantiateContract = this.InstantiateContract.bind(this)),
              (this.ExecuteContract = this.ExecuteContract.bind(this)),
              (this.MigrateContract = this.MigrateContract.bind(this)),
              (this.UpdateAdmin = this.UpdateAdmin.bind(this)),
              (this.ClearAdmin = this.ClearAdmin.bind(this)));
          }
          StoreCode(e, n) {
            return this.rpc.unary(
              t.MsgStoreCodeDesc,
              t.MsgStoreCode.fromPartial(e),
              n,
            );
          }
          InstantiateContract(e, n) {
            return this.rpc.unary(
              t.MsgInstantiateContractDesc,
              t.MsgInstantiateContract.fromPartial(e),
              n,
            );
          }
          ExecuteContract(e, n) {
            return this.rpc.unary(
              t.MsgExecuteContractDesc,
              t.MsgExecuteContract.fromPartial(e),
              n,
            );
          }
          MigrateContract(e, n) {
            return this.rpc.unary(
              t.MsgMigrateContractDesc,
              t.MsgMigrateContract.fromPartial(e),
              n,
            );
          }
          UpdateAdmin(e, n) {
            return this.rpc.unary(
              t.MsgUpdateAdminDesc,
              t.MsgUpdateAdmin.fromPartial(e),
              n,
            );
          }
          ClearAdmin(e, n) {
            return this.rpc.unary(
              t.MsgClearAdminDesc,
              t.MsgClearAdmin.fromPartial(e),
              n,
            );
          }
        }
        ((t.MsgClientImpl = MsgClientImpl),
          (t.MsgDesc = { serviceName: "cosmwasm.wasm.v1.Msg" }),
          (t.MsgStoreCodeDesc = {
            methodName: "StoreCode",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgStoreCode.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgStoreCodeResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgInstantiateContractDesc = {
            methodName: "InstantiateContract",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgInstantiateContract.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgInstantiateContractResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgExecuteContractDesc = {
            methodName: "ExecuteContract",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgExecuteContract.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgExecuteContractResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgMigrateContractDesc = {
            methodName: "MigrateContract",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgMigrateContract.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgMigrateContractResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgUpdateAdminDesc = {
            methodName: "UpdateAdmin",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgUpdateAdmin.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgUpdateAdminResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgClearAdminDesc = {
            methodName: "ClearAdmin",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgClearAdmin.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgClearAdminResponse.decode(e)),
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
            var i;
            const o = Object.assign(Object.assign({}, t), e.requestType),
              r =
                n && this.options.metadata
                  ? new d.BrowserHeaders(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (i = this.options) || void 0 === i
                            ? void 0
                            : i.metadata.headersMap,
                        ),
                        null === n || void 0 === n ? void 0 : n.headersMap,
                      ),
                    )
                  : n || this.options.metadata;
            return new Promise((t, n) => {
              s.grpc.unary(e, {
                request: o,
                host: this.host,
                metadata: r,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (e.status === s.grpc.Code.OK) t(e.message);
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
        var y = (() => {
          if ("undefined" !== typeof y) return y;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const T =
          y.atob || ((e) => y.Buffer.from(e, "base64").toString("binary"));
        function k(e) {
          const t = T(e),
            n = new Uint8Array(t.length);
          for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
          return n;
        }
        const N =
          y.btoa || ((e) => y.Buffer.from(e, "binary").toString("base64"));
        function I(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return N(t.join(""));
        }
        r.default.util.Long !== o.default &&
          ((r.default.util.Long = o.default), r.default.configure());
      }).call(this, n(13));
    },
    3175: function (e, t, n) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SignatureDescriptor_Data_Multi =
            t.SignatureDescriptor_Data_Single =
            t.SignatureDescriptor_Data =
            t.SignatureDescriptor =
            t.SignatureDescriptors =
            t.signModeToJSON =
            t.signModeFromJSON =
            t.SignMode =
            t.protobufPackage =
              void 0));
        const o = i(n(2754)),
          s = i(n(2755)),
          r = n(2759),
          a = n(3436);
        var d;
        function c(e) {
          switch (e) {
            case 0:
            case "SIGN_MODE_UNSPECIFIED":
              return d.SIGN_MODE_UNSPECIFIED;
            case 1:
            case "SIGN_MODE_DIRECT":
              return d.SIGN_MODE_DIRECT;
            case 2:
            case "SIGN_MODE_TEXTUAL":
              return d.SIGN_MODE_TEXTUAL;
            case 127:
            case "SIGN_MODE_LEGACY_AMINO_JSON":
              return d.SIGN_MODE_LEGACY_AMINO_JSON;
            case 191:
            case "SIGN_MODE_EIP_191":
              return d.SIGN_MODE_EIP_191;
            case -1:
            case "UNRECOGNIZED":
            default:
              return d.UNRECOGNIZED;
          }
        }
        function l(e) {
          switch (e) {
            case d.SIGN_MODE_UNSPECIFIED:
              return "SIGN_MODE_UNSPECIFIED";
            case d.SIGN_MODE_DIRECT:
              return "SIGN_MODE_DIRECT";
            case d.SIGN_MODE_TEXTUAL:
              return "SIGN_MODE_TEXTUAL";
            case d.SIGN_MODE_LEGACY_AMINO_JSON:
              return "SIGN_MODE_LEGACY_AMINO_JSON";
            case d.SIGN_MODE_EIP_191:
              return "SIGN_MODE_EIP_191";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "cosmos.tx.signing.v1beta1"),
          (function (e) {
            ((e[(e["SIGN_MODE_UNSPECIFIED"] = 0)] = "SIGN_MODE_UNSPECIFIED"),
              (e[(e["SIGN_MODE_DIRECT"] = 1)] = "SIGN_MODE_DIRECT"),
              (e[(e["SIGN_MODE_TEXTUAL"] = 2)] = "SIGN_MODE_TEXTUAL"),
              (e[(e["SIGN_MODE_LEGACY_AMINO_JSON"] = 127)] =
                "SIGN_MODE_LEGACY_AMINO_JSON"),
              (e[(e["SIGN_MODE_EIP_191"] = 191)] = "SIGN_MODE_EIP_191"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((d = t.SignMode || (t.SignMode = {}))),
          (t.signModeFromJSON = c),
          (t.signModeToJSON = l));
        const u = {};
        t.SignatureDescriptors = {
          encode(e, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const i of e.signatures)
              t.SignatureDescriptor.encode(i, n.uint32(10).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, u);
            r.signatures = [];
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.signatures.push(
                    t.SignatureDescriptor.decode(i, i.uint32()),
                  );
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, u);
            if (
              ((n.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const i of e.signatures)
                n.signatures.push(t.SignatureDescriptor.fromJSON(i));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              e.signatures
                ? (n.signatures = e.signatures.map((e) =>
                    e ? t.SignatureDescriptor.toJSON(e) : void 0,
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, u);
            if (
              ((n.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const i of e.signatures)
                n.signatures.push(t.SignatureDescriptor.fromPartial(i));
            return n;
          },
        };
        const g = { sequence: o.default.UZERO };
        t.SignatureDescriptor = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.publicKey &&
                r.Any.encode(e.publicKey, n.uint32(10).fork()).ldelim(),
              void 0 !== e.data &&
                t.SignatureDescriptor_Data.encode(
                  e.data,
                  n.uint32(18).fork(),
                ).ldelim(),
              e.sequence.isZero() || n.uint32(24).uint64(e.sequence),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const a = Object.assign({}, g);
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  a.publicKey = r.Any.decode(i, i.uint32());
                  break;
                case 2:
                  a.data = t.SignatureDescriptor_Data.decode(i, i.uint32());
                  break;
                case 3:
                  a.sequence = i.uint64();
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const n = Object.assign({}, g);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = r.Any.fromJSON(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.data && null !== e.data
                ? (n.data = t.SignatureDescriptor_Data.fromJSON(e.data))
                : (n.data = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = o.default.fromString(e.sequence))
                : (n.sequence = o.default.UZERO),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.publicKey &&
                (n.publicKey = e.publicKey
                  ? r.Any.toJSON(e.publicKey)
                  : void 0),
              void 0 !== e.data &&
                (n.data = e.data
                  ? t.SignatureDescriptor_Data.toJSON(e.data)
                  : void 0),
              void 0 !== e.sequence &&
                (n.sequence = (e.sequence || o.default.UZERO).toString()),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, g);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = r.Any.fromPartial(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.data && null !== e.data
                ? (n.data = t.SignatureDescriptor_Data.fromPartial(e.data))
                : (n.data = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = e.sequence)
                : (n.sequence = o.default.UZERO),
              n
            );
          },
        };
        const f = {};
        t.SignatureDescriptor_Data = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.single &&
                t.SignatureDescriptor_Data_Single.encode(
                  e.single,
                  n.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.multi &&
                t.SignatureDescriptor_Data_Multi.encode(
                  e.multi,
                  n.uint32(18).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, f);
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.single = t.SignatureDescriptor_Data_Single.decode(
                    i,
                    i.uint32(),
                  );
                  break;
                case 2:
                  r.multi = t.SignatureDescriptor_Data_Multi.decode(
                    i,
                    i.uint32(),
                  );
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, f);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.SignatureDescriptor_Data_Single.fromJSON(
                    e.single,
                  ))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.SignatureDescriptor_Data_Multi.fromJSON(e.multi))
                : (n.multi = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.single &&
                (n.single = e.single
                  ? t.SignatureDescriptor_Data_Single.toJSON(e.single)
                  : void 0),
              void 0 !== e.multi &&
                (n.multi = e.multi
                  ? t.SignatureDescriptor_Data_Multi.toJSON(e.multi)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, f);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.SignatureDescriptor_Data_Single.fromPartial(
                    e.single,
                  ))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.SignatureDescriptor_Data_Multi.fromPartial(
                    e.multi,
                  ))
                : (n.multi = void 0),
              n
            );
          },
        };
        const m = { mode: 0 };
        t.SignatureDescriptor_Data_Single = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.mode && t.uint32(8).int32(e.mode),
              0 !== e.signature.length && t.uint32(18).bytes(e.signature),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, m);
            o.signature = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.mode = n.int32();
                  break;
                case 2:
                  o.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.signature = new Uint8Array()),
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = c(e.mode))
                : (t.mode = 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (t.signature = O(e.signature)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.mode && (t.mode = l(e.mode)),
              void 0 !== e.signature &&
                (t.signature = S(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = e.mode)
                : (t.mode = 0),
              void 0 !== e.signature && null !== e.signature
                ? (t.signature = e.signature)
                : (t.signature = new Uint8Array()),
              t
            );
          },
        };
        const v = {};
        t.SignatureDescriptor_Data_Multi = {
          encode(e, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.bitarray &&
                a.CompactBitArray.encode(
                  e.bitarray,
                  n.uint32(10).fork(),
                ).ldelim());
            for (const i of e.signatures)
              t.SignatureDescriptor_Data.encode(
                i,
                n.uint32(18).fork(),
              ).ldelim();
            return n;
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, v);
            r.signatures = [];
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.bitarray = a.CompactBitArray.decode(i, i.uint32());
                  break;
                case 2:
                  r.signatures.push(
                    t.SignatureDescriptor_Data.decode(i, i.uint32()),
                  );
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, v);
            if (
              ((n.signatures = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = a.CompactBitArray.fromJSON(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const i of e.signatures)
                n.signatures.push(t.SignatureDescriptor_Data.fromJSON(i));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.bitarray &&
                (n.bitarray = e.bitarray
                  ? a.CompactBitArray.toJSON(e.bitarray)
                  : void 0),
              e.signatures
                ? (n.signatures = e.signatures.map((e) =>
                    e ? t.SignatureDescriptor_Data.toJSON(e) : void 0,
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, v);
            if (
              ((n.signatures = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = a.CompactBitArray.fromPartial(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const i of e.signatures)
                n.signatures.push(t.SignatureDescriptor_Data.fromPartial(i));
            return n;
          },
        };
        var p = (() => {
          if ("undefined" !== typeof p) return p;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const b =
          p.atob || ((e) => p.Buffer.from(e, "base64").toString("binary"));
        function O(e) {
          const t = b(e),
            n = new Uint8Array(t.length);
          for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
          return n;
        }
        const A =
          p.btoa || ((e) => p.Buffer.from(e, "binary").toString("base64"));
        function S(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return A(t.join(""));
        }
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure());
      }).call(this, n(13));
    },
    3296: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Duration = t.protobufPackage = void 0));
      const o = i(n(2754)),
        s = i(n(2755));
      t.protobufPackage = "google.protobuf";
      const r = { seconds: o.default.ZERO, nanos: 0 };
      ((t.Duration = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.seconds.isZero() || t.uint32(8).int64(e.seconds),
            0 !== e.nanos && t.uint32(16).int32(e.nanos),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, r);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.seconds = n.int64();
                break;
              case 2:
                o.nanos = n.int32();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.seconds && null !== e.seconds
              ? (t.seconds = o.default.fromString(e.seconds))
              : (t.seconds = o.default.ZERO),
            void 0 !== e.nanos && null !== e.nanos
              ? (t.nanos = Number(e.nanos))
              : (t.nanos = 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.seconds &&
              (t.seconds = (e.seconds || o.default.ZERO).toString()),
            void 0 !== e.nanos && (t.nanos = e.nanos),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.seconds && null !== e.seconds
              ? (t.seconds = e.seconds)
              : (t.seconds = o.default.ZERO),
            void 0 !== e.nanos && null !== e.nanos
              ? (t.nanos = e.nanos)
              : (t.nanos = 0),
            t
          );
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    3297: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgUndelegateDesc =
          t.MsgBeginRedelegateDesc =
          t.MsgDelegateDesc =
          t.MsgEditValidatorDesc =
          t.MsgCreateValidatorDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgUndelegateResponse =
          t.MsgUndelegate =
          t.MsgBeginRedelegateResponse =
          t.MsgBeginRedelegate =
          t.MsgDelegateResponse =
          t.MsgDelegate =
          t.MsgEditValidatorResponse =
          t.MsgEditValidator =
          t.MsgCreateValidatorResponse =
          t.MsgCreateValidator =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = n(2889),
        r = i(n(2755)),
        a = n(3298),
        d = n(2759),
        c = n(2840),
        l = n(2890),
        u = n(2993);
      t.protobufPackage = "cosmos.staking.v1beta1";
      const g = {
        minSelfDelegation: "",
        delegatorAddress: "",
        validatorAddress: "",
      };
      t.MsgCreateValidator = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            void 0 !== e.description &&
              a.Description.encode(e.description, t.uint32(10).fork()).ldelim(),
            void 0 !== e.commission &&
              a.CommissionRates.encode(
                e.commission,
                t.uint32(18).fork(),
              ).ldelim(),
            "" !== e.minSelfDelegation &&
              t.uint32(26).string(e.minSelfDelegation),
            "" !== e.delegatorAddress &&
              t.uint32(34).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(42).string(e.validatorAddress),
            void 0 !== e.pubkey &&
              d.Any.encode(e.pubkey, t.uint32(50).fork()).ldelim(),
            void 0 !== e.value &&
              c.Coin.encode(e.value, t.uint32(58).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, g);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.description = a.Description.decode(n, n.uint32());
                break;
              case 2:
                o.commission = a.CommissionRates.decode(n, n.uint32());
                break;
              case 3:
                o.minSelfDelegation = n.string();
                break;
              case 4:
                o.delegatorAddress = n.string();
                break;
              case 5:
                o.validatorAddress = n.string();
                break;
              case 6:
                o.pubkey = d.Any.decode(n, n.uint32());
                break;
              case 7:
                o.value = c.Coin.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          return (
            void 0 !== e.description && null !== e.description
              ? (t.description = a.Description.fromJSON(e.description))
              : (t.description = void 0),
            void 0 !== e.commission && null !== e.commission
              ? (t.commission = a.CommissionRates.fromJSON(e.commission))
              : (t.commission = void 0),
            void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation
              ? (t.minSelfDelegation = String(e.minSelfDelegation))
              : (t.minSelfDelegation = ""),
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.pubkey && null !== e.pubkey
              ? (t.pubkey = d.Any.fromJSON(e.pubkey))
              : (t.pubkey = void 0),
            void 0 !== e.value && null !== e.value
              ? (t.value = c.Coin.fromJSON(e.value))
              : (t.value = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.description &&
              (t.description = e.description
                ? a.Description.toJSON(e.description)
                : void 0),
            void 0 !== e.commission &&
              (t.commission = e.commission
                ? a.CommissionRates.toJSON(e.commission)
                : void 0),
            void 0 !== e.minSelfDelegation &&
              (t.minSelfDelegation = e.minSelfDelegation),
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            void 0 !== e.pubkey &&
              (t.pubkey = e.pubkey ? d.Any.toJSON(e.pubkey) : void 0),
            void 0 !== e.value &&
              (t.value = e.value ? c.Coin.toJSON(e.value) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          return (
            void 0 !== e.description && null !== e.description
              ? (t.description = a.Description.fromPartial(e.description))
              : (t.description = void 0),
            void 0 !== e.commission && null !== e.commission
              ? (t.commission = a.CommissionRates.fromPartial(e.commission))
              : (t.commission = void 0),
            void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation
              ? (t.minSelfDelegation = e.minSelfDelegation)
              : (t.minSelfDelegation = ""),
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            void 0 !== e.pubkey && null !== e.pubkey
              ? (t.pubkey = d.Any.fromPartial(e.pubkey))
              : (t.pubkey = void 0),
            void 0 !== e.value && null !== e.value
              ? (t.value = c.Coin.fromPartial(e.value))
              : (t.value = void 0),
            t
          );
        },
      };
      const f = {};
      t.MsgCreateValidatorResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, f);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return t;
        },
      };
      const m = {
        validatorAddress: "",
        commissionRate: "",
        minSelfDelegation: "",
      };
      t.MsgEditValidator = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            void 0 !== e.description &&
              a.Description.encode(e.description, t.uint32(10).fork()).ldelim(),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            "" !== e.commissionRate && t.uint32(26).string(e.commissionRate),
            "" !== e.minSelfDelegation &&
              t.uint32(34).string(e.minSelfDelegation),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, m);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.description = a.Description.decode(n, n.uint32());
                break;
              case 2:
                o.validatorAddress = n.string();
                break;
              case 3:
                o.commissionRate = n.string();
                break;
              case 4:
                o.minSelfDelegation = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          return (
            void 0 !== e.description && null !== e.description
              ? (t.description = a.Description.fromJSON(e.description))
              : (t.description = void 0),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.commissionRate && null !== e.commissionRate
              ? (t.commissionRate = String(e.commissionRate))
              : (t.commissionRate = ""),
            void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation
              ? (t.minSelfDelegation = String(e.minSelfDelegation))
              : (t.minSelfDelegation = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.description &&
              (t.description = e.description
                ? a.Description.toJSON(e.description)
                : void 0),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            void 0 !== e.commissionRate &&
              (t.commissionRate = e.commissionRate),
            void 0 !== e.minSelfDelegation &&
              (t.minSelfDelegation = e.minSelfDelegation),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          return (
            void 0 !== e.description && null !== e.description
              ? (t.description = a.Description.fromPartial(e.description))
              : (t.description = void 0),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            void 0 !== e.commissionRate && null !== e.commissionRate
              ? (t.commissionRate = e.commissionRate)
              : (t.commissionRate = ""),
            void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation
              ? (t.minSelfDelegation = e.minSelfDelegation)
              : (t.minSelfDelegation = ""),
            t
          );
        },
      };
      const v = {};
      t.MsgEditValidatorResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, v);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
      const p = { delegatorAddress: "", validatorAddress: "" };
      t.MsgDelegate = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            void 0 !== e.amount &&
              c.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, p);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.delegatorAddress = n.string();
                break;
              case 2:
                o.validatorAddress = n.string();
                break;
              case 3:
                o.amount = c.Coin.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = c.Coin.fromJSON(e.amount))
              : (t.amount = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            void 0 !== e.amount &&
              (t.amount = e.amount ? c.Coin.toJSON(e.amount) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = c.Coin.fromPartial(e.amount))
              : (t.amount = void 0),
            t
          );
        },
      };
      const b = {};
      t.MsgDelegateResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, b);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
      const O = {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
      };
      t.MsgBeginRedelegate = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorSrcAddress &&
              t.uint32(18).string(e.validatorSrcAddress),
            "" !== e.validatorDstAddress &&
              t.uint32(26).string(e.validatorDstAddress),
            void 0 !== e.amount &&
              c.Coin.encode(e.amount, t.uint32(34).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, O);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.delegatorAddress = n.string();
                break;
              case 2:
                o.validatorSrcAddress = n.string();
                break;
              case 3:
                o.validatorDstAddress = n.string();
                break;
              case 4:
                o.amount = c.Coin.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress
              ? (t.validatorSrcAddress = String(e.validatorSrcAddress))
              : (t.validatorSrcAddress = ""),
            void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress
              ? (t.validatorDstAddress = String(e.validatorDstAddress))
              : (t.validatorDstAddress = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = c.Coin.fromJSON(e.amount))
              : (t.amount = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorSrcAddress &&
              (t.validatorSrcAddress = e.validatorSrcAddress),
            void 0 !== e.validatorDstAddress &&
              (t.validatorDstAddress = e.validatorDstAddress),
            void 0 !== e.amount &&
              (t.amount = e.amount ? c.Coin.toJSON(e.amount) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress
              ? (t.validatorSrcAddress = e.validatorSrcAddress)
              : (t.validatorSrcAddress = ""),
            void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress
              ? (t.validatorDstAddress = e.validatorDstAddress)
              : (t.validatorDstAddress = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = c.Coin.fromPartial(e.amount))
              : (t.amount = void 0),
            t
          );
        },
      };
      const A = {};
      t.MsgBeginRedelegateResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            void 0 !== e.completionTime &&
              u.Timestamp.encode(
                y(e.completionTime),
                t.uint32(10).fork(),
              ).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, A);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.completionTime = T(u.Timestamp.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, A);
          return (
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = k(e.completionTime))
              : (t.completionTime = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.completionTime &&
              (t.completionTime = e.completionTime.toISOString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, A);
          return (
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = e.completionTime)
              : (t.completionTime = void 0),
            t
          );
        },
      };
      const S = { delegatorAddress: "", validatorAddress: "" };
      t.MsgUndelegate = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            void 0 !== e.amount &&
              c.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, S);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.delegatorAddress = n.string();
                break;
              case 2:
                o.validatorAddress = n.string();
                break;
              case 3:
                o.amount = c.Coin.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = c.Coin.fromJSON(e.amount))
              : (t.amount = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            void 0 !== e.amount &&
              (t.amount = e.amount ? c.Coin.toJSON(e.amount) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = c.Coin.fromPartial(e.amount))
              : (t.amount = void 0),
            t
          );
        },
      };
      const h = {};
      t.MsgUndelegateResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            void 0 !== e.completionTime &&
              u.Timestamp.encode(
                y(e.completionTime),
                t.uint32(10).fork(),
              ).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, h);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.completionTime = T(u.Timestamp.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          return (
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = k(e.completionTime))
              : (t.completionTime = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.completionTime &&
              (t.completionTime = e.completionTime.toISOString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, h);
          return (
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = e.completionTime)
              : (t.completionTime = void 0),
            t
          );
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.CreateValidator = this.CreateValidator.bind(this)),
            (this.EditValidator = this.EditValidator.bind(this)),
            (this.Delegate = this.Delegate.bind(this)),
            (this.BeginRedelegate = this.BeginRedelegate.bind(this)),
            (this.Undelegate = this.Undelegate.bind(this)));
        }
        CreateValidator(e, n) {
          return this.rpc.unary(
            t.MsgCreateValidatorDesc,
            t.MsgCreateValidator.fromPartial(e),
            n,
          );
        }
        EditValidator(e, n) {
          return this.rpc.unary(
            t.MsgEditValidatorDesc,
            t.MsgEditValidator.fromPartial(e),
            n,
          );
        }
        Delegate(e, n) {
          return this.rpc.unary(
            t.MsgDelegateDesc,
            t.MsgDelegate.fromPartial(e),
            n,
          );
        }
        BeginRedelegate(e, n) {
          return this.rpc.unary(
            t.MsgBeginRedelegateDesc,
            t.MsgBeginRedelegate.fromPartial(e),
            n,
          );
        }
        Undelegate(e, n) {
          return this.rpc.unary(
            t.MsgUndelegateDesc,
            t.MsgUndelegate.fromPartial(e),
            n,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.staking.v1beta1.Msg" }),
        (t.MsgCreateValidatorDesc = {
          methodName: "CreateValidator",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgCreateValidator.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgCreateValidatorResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgEditValidatorDesc = {
          methodName: "EditValidator",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgEditValidator.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgEditValidatorResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgDelegateDesc = {
          methodName: "Delegate",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgDelegate.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgDelegateResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgBeginRedelegateDesc = {
          methodName: "BeginRedelegate",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgBeginRedelegate.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgBeginRedelegateResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgUndelegateDesc = {
          methodName: "Undelegate",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgUndelegate.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgUndelegateResponse.decode(e)),
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
          var i;
          const o = Object.assign(Object.assign({}, t), e.requestType),
            r =
              n && this.options.metadata
                ? new l.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (i = this.options) || void 0 === i
                          ? void 0
                          : i.metadata.headersMap,
                      ),
                      null === n || void 0 === n ? void 0 : n.headersMap,
                    ),
                  )
                : n || this.options.metadata;
          return new Promise((t, n) => {
            s.grpc.unary(e, {
              request: o,
              host: this.host,
              metadata: r,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === s.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), n(t));
                }
              },
            });
          });
        }
      }
      function y(e) {
        const t = N(e.getTime() / 1e3),
          n = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: n };
      }
      function T(e) {
        let t = 1e3 * e.seconds.toNumber();
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function k(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : T(u.Timestamp.fromJSON(e));
      }
      function N(e) {
        return o.default.fromNumber(e);
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        r.default.util.Long !== o.default &&
          ((r.default.util.Long = o.default), r.default.configure()));
    },
    3298: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Pool =
          t.RedelegationResponse =
          t.RedelegationEntryResponse =
          t.DelegationResponse =
          t.Params =
          t.Redelegation =
          t.RedelegationEntry =
          t.UnbondingDelegationEntry =
          t.UnbondingDelegation =
          t.Delegation =
          t.DVVTriplets =
          t.DVVTriplet =
          t.DVPairs =
          t.DVPair =
          t.ValAddresses =
          t.Validator =
          t.Description =
          t.Commission =
          t.CommissionRates =
          t.HistoricalInfo =
          t.bondStatusToJSON =
          t.bondStatusFromJSON =
          t.BondStatus =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = i(n(2755)),
        r = n(3429),
        a = n(2759),
        d = n(3296),
        c = n(2840),
        l = n(2993);
      var u;
      function g(e) {
        switch (e) {
          case 0:
          case "BOND_STATUS_UNSPECIFIED":
            return u.BOND_STATUS_UNSPECIFIED;
          case 1:
          case "BOND_STATUS_UNBONDED":
            return u.BOND_STATUS_UNBONDED;
          case 2:
          case "BOND_STATUS_UNBONDING":
            return u.BOND_STATUS_UNBONDING;
          case 3:
          case "BOND_STATUS_BONDED":
            return u.BOND_STATUS_BONDED;
          case -1:
          case "UNRECOGNIZED":
          default:
            return u.UNRECOGNIZED;
        }
      }
      function f(e) {
        switch (e) {
          case u.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
          case u.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
          case u.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
          case u.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
          default:
            return "UNKNOWN";
        }
      }
      ((t.protobufPackage = "cosmos.staking.v1beta1"),
        (function (e) {
          ((e[(e["BOND_STATUS_UNSPECIFIED"] = 0)] = "BOND_STATUS_UNSPECIFIED"),
            (e[(e["BOND_STATUS_UNBONDED"] = 1)] = "BOND_STATUS_UNBONDED"),
            (e[(e["BOND_STATUS_UNBONDING"] = 2)] = "BOND_STATUS_UNBONDING"),
            (e[(e["BOND_STATUS_BONDED"] = 3)] = "BOND_STATUS_BONDED"),
            (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
        })((u = t.BondStatus || (t.BondStatus = {}))),
        (t.bondStatusFromJSON = g),
        (t.bondStatusToJSON = f));
      const m = {};
      t.HistoricalInfo = {
        encode(e, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.header &&
              r.Header.encode(e.header, n.uint32(10).fork()).ldelim());
          for (const i of e.valset)
            t.Validator.encode(i, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const a = Object.assign({}, m);
          a.valset = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                a.header = r.Header.decode(i, i.uint32());
                break;
              case 2:
                a.valset.push(t.Validator.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const n = Object.assign({}, m);
          if (
            ((n.valset = []),
            void 0 !== e.header && null !== e.header
              ? (n.header = r.Header.fromJSON(e.header))
              : (n.header = void 0),
            void 0 !== e.valset && null !== e.valset)
          )
            for (const i of e.valset) n.valset.push(t.Validator.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.header &&
              (n.header = e.header ? r.Header.toJSON(e.header) : void 0),
            e.valset
              ? (n.valset = e.valset.map((e) =>
                  e ? t.Validator.toJSON(e) : void 0,
                ))
              : (n.valset = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, m);
          if (
            ((n.valset = []),
            void 0 !== e.header && null !== e.header
              ? (n.header = r.Header.fromPartial(e.header))
              : (n.header = void 0),
            void 0 !== e.valset && null !== e.valset)
          )
            for (const i of e.valset) n.valset.push(t.Validator.fromPartial(i));
          return n;
        },
      };
      const v = { rate: "", maxRate: "", maxChangeRate: "" };
      t.CommissionRates = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.rate && t.uint32(10).string(e.rate),
            "" !== e.maxRate && t.uint32(18).string(e.maxRate),
            "" !== e.maxChangeRate && t.uint32(26).string(e.maxChangeRate),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, v);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.rate = n.string();
                break;
              case 2:
                o.maxRate = n.string();
                break;
              case 3:
                o.maxChangeRate = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.rate && null !== e.rate
              ? (t.rate = String(e.rate))
              : (t.rate = ""),
            void 0 !== e.maxRate && null !== e.maxRate
              ? (t.maxRate = String(e.maxRate))
              : (t.maxRate = ""),
            void 0 !== e.maxChangeRate && null !== e.maxChangeRate
              ? (t.maxChangeRate = String(e.maxChangeRate))
              : (t.maxChangeRate = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.rate && (t.rate = e.rate),
            void 0 !== e.maxRate && (t.maxRate = e.maxRate),
            void 0 !== e.maxChangeRate && (t.maxChangeRate = e.maxChangeRate),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.rate && null !== e.rate
              ? (t.rate = e.rate)
              : (t.rate = ""),
            void 0 !== e.maxRate && null !== e.maxRate
              ? (t.maxRate = e.maxRate)
              : (t.maxRate = ""),
            void 0 !== e.maxChangeRate && null !== e.maxChangeRate
              ? (t.maxChangeRate = e.maxChangeRate)
              : (t.maxChangeRate = ""),
            t
          );
        },
      };
      const p = {};
      t.Commission = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.commissionRates &&
              t.CommissionRates.encode(
                e.commissionRates,
                n.uint32(10).fork(),
              ).ldelim(),
            void 0 !== e.updateTime &&
              l.Timestamp.encode(j(e.updateTime), n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, p);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.commissionRates = t.CommissionRates.decode(i, i.uint32());
                break;
              case 2:
                r.updateTime = U(l.Timestamp.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, p);
          return (
            void 0 !== e.commissionRates && null !== e.commissionRates
              ? (n.commissionRates = t.CommissionRates.fromJSON(
                  e.commissionRates,
                ))
              : (n.commissionRates = void 0),
            void 0 !== e.updateTime && null !== e.updateTime
              ? (n.updateTime = J(e.updateTime))
              : (n.updateTime = void 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.commissionRates &&
              (n.commissionRates = e.commissionRates
                ? t.CommissionRates.toJSON(e.commissionRates)
                : void 0),
            void 0 !== e.updateTime &&
              (n.updateTime = e.updateTime.toISOString()),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, p);
          return (
            void 0 !== e.commissionRates && null !== e.commissionRates
              ? (n.commissionRates = t.CommissionRates.fromPartial(
                  e.commissionRates,
                ))
              : (n.commissionRates = void 0),
            void 0 !== e.updateTime && null !== e.updateTime
              ? (n.updateTime = e.updateTime)
              : (n.updateTime = void 0),
            n
          );
        },
      };
      const b = {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: "",
      };
      t.Description = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.moniker && t.uint32(10).string(e.moniker),
            "" !== e.identity && t.uint32(18).string(e.identity),
            "" !== e.website && t.uint32(26).string(e.website),
            "" !== e.securityContact && t.uint32(34).string(e.securityContact),
            "" !== e.details && t.uint32(42).string(e.details),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, b);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.moniker = n.string();
                break;
              case 2:
                o.identity = n.string();
                break;
              case 3:
                o.website = n.string();
                break;
              case 4:
                o.securityContact = n.string();
                break;
              case 5:
                o.details = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, b);
          return (
            void 0 !== e.moniker && null !== e.moniker
              ? (t.moniker = String(e.moniker))
              : (t.moniker = ""),
            void 0 !== e.identity && null !== e.identity
              ? (t.identity = String(e.identity))
              : (t.identity = ""),
            void 0 !== e.website && null !== e.website
              ? (t.website = String(e.website))
              : (t.website = ""),
            void 0 !== e.securityContact && null !== e.securityContact
              ? (t.securityContact = String(e.securityContact))
              : (t.securityContact = ""),
            void 0 !== e.details && null !== e.details
              ? (t.details = String(e.details))
              : (t.details = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.moniker && (t.moniker = e.moniker),
            void 0 !== e.identity && (t.identity = e.identity),
            void 0 !== e.website && (t.website = e.website),
            void 0 !== e.securityContact &&
              (t.securityContact = e.securityContact),
            void 0 !== e.details && (t.details = e.details),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, b);
          return (
            void 0 !== e.moniker && null !== e.moniker
              ? (t.moniker = e.moniker)
              : (t.moniker = ""),
            void 0 !== e.identity && null !== e.identity
              ? (t.identity = e.identity)
              : (t.identity = ""),
            void 0 !== e.website && null !== e.website
              ? (t.website = e.website)
              : (t.website = ""),
            void 0 !== e.securityContact && null !== e.securityContact
              ? (t.securityContact = e.securityContact)
              : (t.securityContact = ""),
            void 0 !== e.details && null !== e.details
              ? (t.details = e.details)
              : (t.details = ""),
            t
          );
        },
      };
      const O = {
        operatorAddress: "",
        jailed: !1,
        status: 0,
        tokens: "",
        delegatorShares: "",
        unbondingHeight: o.default.ZERO,
        minSelfDelegation: "",
      };
      t.Validator = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== e.operatorAddress && n.uint32(10).string(e.operatorAddress),
            void 0 !== e.consensusPubkey &&
              a.Any.encode(e.consensusPubkey, n.uint32(18).fork()).ldelim(),
            !0 === e.jailed && n.uint32(24).bool(e.jailed),
            0 !== e.status && n.uint32(32).int32(e.status),
            "" !== e.tokens && n.uint32(42).string(e.tokens),
            "" !== e.delegatorShares && n.uint32(50).string(e.delegatorShares),
            void 0 !== e.description &&
              t.Description.encode(e.description, n.uint32(58).fork()).ldelim(),
            e.unbondingHeight.isZero() || n.uint32(64).int64(e.unbondingHeight),
            void 0 !== e.unbondingTime &&
              l.Timestamp.encode(
                j(e.unbondingTime),
                n.uint32(74).fork(),
              ).ldelim(),
            void 0 !== e.commission &&
              t.Commission.encode(e.commission, n.uint32(82).fork()).ldelim(),
            "" !== e.minSelfDelegation &&
              n.uint32(90).string(e.minSelfDelegation),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, O);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.operatorAddress = i.string();
                break;
              case 2:
                r.consensusPubkey = a.Any.decode(i, i.uint32());
                break;
              case 3:
                r.jailed = i.bool();
                break;
              case 4:
                r.status = i.int32();
                break;
              case 5:
                r.tokens = i.string();
                break;
              case 6:
                r.delegatorShares = i.string();
                break;
              case 7:
                r.description = t.Description.decode(i, i.uint32());
                break;
              case 8:
                r.unbondingHeight = i.int64();
                break;
              case 9:
                r.unbondingTime = U(l.Timestamp.decode(i, i.uint32()));
                break;
              case 10:
                r.commission = t.Commission.decode(i, i.uint32());
                break;
              case 11:
                r.minSelfDelegation = i.string();
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, O);
          return (
            void 0 !== e.operatorAddress && null !== e.operatorAddress
              ? (n.operatorAddress = String(e.operatorAddress))
              : (n.operatorAddress = ""),
            void 0 !== e.consensusPubkey && null !== e.consensusPubkey
              ? (n.consensusPubkey = a.Any.fromJSON(e.consensusPubkey))
              : (n.consensusPubkey = void 0),
            void 0 !== e.jailed && null !== e.jailed
              ? (n.jailed = Boolean(e.jailed))
              : (n.jailed = !1),
            void 0 !== e.status && null !== e.status
              ? (n.status = g(e.status))
              : (n.status = 0),
            void 0 !== e.tokens && null !== e.tokens
              ? (n.tokens = String(e.tokens))
              : (n.tokens = ""),
            void 0 !== e.delegatorShares && null !== e.delegatorShares
              ? (n.delegatorShares = String(e.delegatorShares))
              : (n.delegatorShares = ""),
            void 0 !== e.description && null !== e.description
              ? (n.description = t.Description.fromJSON(e.description))
              : (n.description = void 0),
            void 0 !== e.unbondingHeight && null !== e.unbondingHeight
              ? (n.unbondingHeight = o.default.fromString(e.unbondingHeight))
              : (n.unbondingHeight = o.default.ZERO),
            void 0 !== e.unbondingTime && null !== e.unbondingTime
              ? (n.unbondingTime = J(e.unbondingTime))
              : (n.unbondingTime = void 0),
            void 0 !== e.commission && null !== e.commission
              ? (n.commission = t.Commission.fromJSON(e.commission))
              : (n.commission = void 0),
            void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation
              ? (n.minSelfDelegation = String(e.minSelfDelegation))
              : (n.minSelfDelegation = ""),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.operatorAddress &&
              (n.operatorAddress = e.operatorAddress),
            void 0 !== e.consensusPubkey &&
              (n.consensusPubkey = e.consensusPubkey
                ? a.Any.toJSON(e.consensusPubkey)
                : void 0),
            void 0 !== e.jailed && (n.jailed = e.jailed),
            void 0 !== e.status && (n.status = f(e.status)),
            void 0 !== e.tokens && (n.tokens = e.tokens),
            void 0 !== e.delegatorShares &&
              (n.delegatorShares = e.delegatorShares),
            void 0 !== e.description &&
              (n.description = e.description
                ? t.Description.toJSON(e.description)
                : void 0),
            void 0 !== e.unbondingHeight &&
              (n.unbondingHeight = (
                e.unbondingHeight || o.default.ZERO
              ).toString()),
            void 0 !== e.unbondingTime &&
              (n.unbondingTime = e.unbondingTime.toISOString()),
            void 0 !== e.commission &&
              (n.commission = e.commission
                ? t.Commission.toJSON(e.commission)
                : void 0),
            void 0 !== e.minSelfDelegation &&
              (n.minSelfDelegation = e.minSelfDelegation),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, O);
          return (
            void 0 !== e.operatorAddress && null !== e.operatorAddress
              ? (n.operatorAddress = e.operatorAddress)
              : (n.operatorAddress = ""),
            void 0 !== e.consensusPubkey && null !== e.consensusPubkey
              ? (n.consensusPubkey = a.Any.fromPartial(e.consensusPubkey))
              : (n.consensusPubkey = void 0),
            void 0 !== e.jailed && null !== e.jailed
              ? (n.jailed = e.jailed)
              : (n.jailed = !1),
            void 0 !== e.status && null !== e.status
              ? (n.status = e.status)
              : (n.status = 0),
            void 0 !== e.tokens && null !== e.tokens
              ? (n.tokens = e.tokens)
              : (n.tokens = ""),
            void 0 !== e.delegatorShares && null !== e.delegatorShares
              ? (n.delegatorShares = e.delegatorShares)
              : (n.delegatorShares = ""),
            void 0 !== e.description && null !== e.description
              ? (n.description = t.Description.fromPartial(e.description))
              : (n.description = void 0),
            void 0 !== e.unbondingHeight && null !== e.unbondingHeight
              ? (n.unbondingHeight = e.unbondingHeight)
              : (n.unbondingHeight = o.default.ZERO),
            void 0 !== e.unbondingTime && null !== e.unbondingTime
              ? (n.unbondingTime = e.unbondingTime)
              : (n.unbondingTime = void 0),
            void 0 !== e.commission && null !== e.commission
              ? (n.commission = t.Commission.fromPartial(e.commission))
              : (n.commission = void 0),
            void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation
              ? (n.minSelfDelegation = e.minSelfDelegation)
              : (n.minSelfDelegation = ""),
            n
          );
        },
      };
      const A = { addresses: "" };
      t.ValAddresses = {
        encode(e, t) {
          void 0 === t && (t = s.default.Writer.create());
          for (const n of e.addresses) t.uint32(10).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, A);
          o.addresses = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.addresses.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, A);
          if (
            ((t.addresses = []), void 0 !== e.addresses && null !== e.addresses)
          )
            for (const n of e.addresses) t.addresses.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.addresses
              ? (t.addresses = e.addresses.map((e) => e))
              : (t.addresses = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, A);
          if (
            ((t.addresses = []), void 0 !== e.addresses && null !== e.addresses)
          )
            for (const n of e.addresses) t.addresses.push(n);
          return t;
        },
      };
      const S = { delegatorAddress: "", validatorAddress: "" };
      t.DVPair = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, S);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.delegatorAddress = n.string();
                break;
              case 2:
                o.validatorAddress = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            t
          );
        },
      };
      const h = {};
      t.DVPairs = {
        encode(e, n) {
          void 0 === n && (n = s.default.Writer.create());
          for (const i of e.pairs)
            t.DVPair.encode(i, n.uint32(10).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, h);
          r.pairs = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.pairs.push(t.DVPair.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, h);
          if (((n.pairs = []), void 0 !== e.pairs && null !== e.pairs))
            for (const i of e.pairs) n.pairs.push(t.DVPair.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            e.pairs
              ? (n.pairs = e.pairs.map((e) =>
                  e ? t.DVPair.toJSON(e) : void 0,
                ))
              : (n.pairs = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, h);
          if (((n.pairs = []), void 0 !== e.pairs && null !== e.pairs))
            for (const i of e.pairs) n.pairs.push(t.DVPair.fromPartial(i));
          return n;
        },
      };
      const y = {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
      };
      t.DVVTriplet = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorSrcAddress &&
              t.uint32(18).string(e.validatorSrcAddress),
            "" !== e.validatorDstAddress &&
              t.uint32(26).string(e.validatorDstAddress),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, y);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.delegatorAddress = n.string();
                break;
              case 2:
                o.validatorSrcAddress = n.string();
                break;
              case 3:
                o.validatorDstAddress = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, y);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress
              ? (t.validatorSrcAddress = String(e.validatorSrcAddress))
              : (t.validatorSrcAddress = ""),
            void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress
              ? (t.validatorDstAddress = String(e.validatorDstAddress))
              : (t.validatorDstAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorSrcAddress &&
              (t.validatorSrcAddress = e.validatorSrcAddress),
            void 0 !== e.validatorDstAddress &&
              (t.validatorDstAddress = e.validatorDstAddress),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, y);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress
              ? (t.validatorSrcAddress = e.validatorSrcAddress)
              : (t.validatorSrcAddress = ""),
            void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress
              ? (t.validatorDstAddress = e.validatorDstAddress)
              : (t.validatorDstAddress = ""),
            t
          );
        },
      };
      const T = {};
      t.DVVTriplets = {
        encode(e, n) {
          void 0 === n && (n = s.default.Writer.create());
          for (const i of e.triplets)
            t.DVVTriplet.encode(i, n.uint32(10).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, T);
          r.triplets = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.triplets.push(t.DVVTriplet.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, T);
          if (((n.triplets = []), void 0 !== e.triplets && null !== e.triplets))
            for (const i of e.triplets)
              n.triplets.push(t.DVVTriplet.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            e.triplets
              ? (n.triplets = e.triplets.map((e) =>
                  e ? t.DVVTriplet.toJSON(e) : void 0,
                ))
              : (n.triplets = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, T);
          if (((n.triplets = []), void 0 !== e.triplets && null !== e.triplets))
            for (const i of e.triplets)
              n.triplets.push(t.DVVTriplet.fromPartial(i));
          return n;
        },
      };
      const k = { delegatorAddress: "", validatorAddress: "", shares: "" };
      t.Delegation = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            "" !== e.shares && t.uint32(26).string(e.shares),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, k);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.delegatorAddress = n.string();
                break;
              case 2:
                o.validatorAddress = n.string();
                break;
              case 3:
                o.shares = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, k);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.shares && null !== e.shares
              ? (t.shares = String(e.shares))
              : (t.shares = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            void 0 !== e.shares && (t.shares = e.shares),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, k);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            void 0 !== e.shares && null !== e.shares
              ? (t.shares = e.shares)
              : (t.shares = ""),
            t
          );
        },
      };
      const N = { delegatorAddress: "", validatorAddress: "" };
      t.UnbondingDelegation = {
        encode(e, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              n.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              n.uint32(18).string(e.validatorAddress));
          for (const i of e.entries)
            t.UnbondingDelegationEntry.encode(i, n.uint32(26).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, N);
          r.entries = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.delegatorAddress = i.string();
                break;
              case 2:
                r.validatorAddress = i.string();
                break;
              case 3:
                r.entries.push(
                  t.UnbondingDelegationEntry.decode(i, i.uint32()),
                );
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, N);
          if (
            ((n.entries = []),
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (n.delegatorAddress = String(e.delegatorAddress))
              : (n.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (n.validatorAddress = String(e.validatorAddress))
              : (n.validatorAddress = ""),
            void 0 !== e.entries && null !== e.entries)
          )
            for (const i of e.entries)
              n.entries.push(t.UnbondingDelegationEntry.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.delegatorAddress &&
              (n.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (n.validatorAddress = e.validatorAddress),
            e.entries
              ? (n.entries = e.entries.map((e) =>
                  e ? t.UnbondingDelegationEntry.toJSON(e) : void 0,
                ))
              : (n.entries = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, N);
          if (
            ((n.entries = []),
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (n.delegatorAddress = e.delegatorAddress)
              : (n.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (n.validatorAddress = e.validatorAddress)
              : (n.validatorAddress = ""),
            void 0 !== e.entries && null !== e.entries)
          )
            for (const i of e.entries)
              n.entries.push(t.UnbondingDelegationEntry.fromPartial(i));
          return n;
        },
      };
      const I = {
        creationHeight: o.default.ZERO,
        initialBalance: "",
        balance: "",
      };
      t.UnbondingDelegationEntry = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.creationHeight.isZero() || t.uint32(8).int64(e.creationHeight),
            void 0 !== e.completionTime &&
              l.Timestamp.encode(
                j(e.completionTime),
                t.uint32(18).fork(),
              ).ldelim(),
            "" !== e.initialBalance && t.uint32(26).string(e.initialBalance),
            "" !== e.balance && t.uint32(34).string(e.balance),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, I);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.creationHeight = n.int64();
                break;
              case 2:
                o.completionTime = U(l.Timestamp.decode(n, n.uint32()));
                break;
              case 3:
                o.initialBalance = n.string();
                break;
              case 4:
                o.balance = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, I);
          return (
            void 0 !== e.creationHeight && null !== e.creationHeight
              ? (t.creationHeight = o.default.fromString(e.creationHeight))
              : (t.creationHeight = o.default.ZERO),
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = J(e.completionTime))
              : (t.completionTime = void 0),
            void 0 !== e.initialBalance && null !== e.initialBalance
              ? (t.initialBalance = String(e.initialBalance))
              : (t.initialBalance = ""),
            void 0 !== e.balance && null !== e.balance
              ? (t.balance = String(e.balance))
              : (t.balance = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.creationHeight &&
              (t.creationHeight = (
                e.creationHeight || o.default.ZERO
              ).toString()),
            void 0 !== e.completionTime &&
              (t.completionTime = e.completionTime.toISOString()),
            void 0 !== e.initialBalance &&
              (t.initialBalance = e.initialBalance),
            void 0 !== e.balance && (t.balance = e.balance),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, I);
          return (
            void 0 !== e.creationHeight && null !== e.creationHeight
              ? (t.creationHeight = e.creationHeight)
              : (t.creationHeight = o.default.ZERO),
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = e.completionTime)
              : (t.completionTime = void 0),
            void 0 !== e.initialBalance && null !== e.initialBalance
              ? (t.initialBalance = e.initialBalance)
              : (t.initialBalance = ""),
            void 0 !== e.balance && null !== e.balance
              ? (t.balance = e.balance)
              : (t.balance = ""),
            t
          );
        },
      };
      const C = {
        creationHeight: o.default.ZERO,
        initialBalance: "",
        sharesDst: "",
      };
      t.RedelegationEntry = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.creationHeight.isZero() || t.uint32(8).int64(e.creationHeight),
            void 0 !== e.completionTime &&
              l.Timestamp.encode(
                j(e.completionTime),
                t.uint32(18).fork(),
              ).ldelim(),
            "" !== e.initialBalance && t.uint32(26).string(e.initialBalance),
            "" !== e.sharesDst && t.uint32(34).string(e.sharesDst),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, C);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.creationHeight = n.int64();
                break;
              case 2:
                o.completionTime = U(l.Timestamp.decode(n, n.uint32()));
                break;
              case 3:
                o.initialBalance = n.string();
                break;
              case 4:
                o.sharesDst = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, C);
          return (
            void 0 !== e.creationHeight && null !== e.creationHeight
              ? (t.creationHeight = o.default.fromString(e.creationHeight))
              : (t.creationHeight = o.default.ZERO),
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = J(e.completionTime))
              : (t.completionTime = void 0),
            void 0 !== e.initialBalance && null !== e.initialBalance
              ? (t.initialBalance = String(e.initialBalance))
              : (t.initialBalance = ""),
            void 0 !== e.sharesDst && null !== e.sharesDst
              ? (t.sharesDst = String(e.sharesDst))
              : (t.sharesDst = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.creationHeight &&
              (t.creationHeight = (
                e.creationHeight || o.default.ZERO
              ).toString()),
            void 0 !== e.completionTime &&
              (t.completionTime = e.completionTime.toISOString()),
            void 0 !== e.initialBalance &&
              (t.initialBalance = e.initialBalance),
            void 0 !== e.sharesDst && (t.sharesDst = e.sharesDst),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, C);
          return (
            void 0 !== e.creationHeight && null !== e.creationHeight
              ? (t.creationHeight = e.creationHeight)
              : (t.creationHeight = o.default.ZERO),
            void 0 !== e.completionTime && null !== e.completionTime
              ? (t.completionTime = e.completionTime)
              : (t.completionTime = void 0),
            void 0 !== e.initialBalance && null !== e.initialBalance
              ? (t.initialBalance = e.initialBalance)
              : (t.initialBalance = ""),
            void 0 !== e.sharesDst && null !== e.sharesDst
              ? (t.sharesDst = e.sharesDst)
              : (t.sharesDst = ""),
            t
          );
        },
      };
      const E = {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
      };
      t.Redelegation = {
        encode(e, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              n.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorSrcAddress &&
              n.uint32(18).string(e.validatorSrcAddress),
            "" !== e.validatorDstAddress &&
              n.uint32(26).string(e.validatorDstAddress));
          for (const i of e.entries)
            t.RedelegationEntry.encode(i, n.uint32(34).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, E);
          r.entries = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.delegatorAddress = i.string();
                break;
              case 2:
                r.validatorSrcAddress = i.string();
                break;
              case 3:
                r.validatorDstAddress = i.string();
                break;
              case 4:
                r.entries.push(t.RedelegationEntry.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, E);
          if (
            ((n.entries = []),
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (n.delegatorAddress = String(e.delegatorAddress))
              : (n.delegatorAddress = ""),
            void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress
              ? (n.validatorSrcAddress = String(e.validatorSrcAddress))
              : (n.validatorSrcAddress = ""),
            void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress
              ? (n.validatorDstAddress = String(e.validatorDstAddress))
              : (n.validatorDstAddress = ""),
            void 0 !== e.entries && null !== e.entries)
          )
            for (const i of e.entries)
              n.entries.push(t.RedelegationEntry.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.delegatorAddress &&
              (n.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorSrcAddress &&
              (n.validatorSrcAddress = e.validatorSrcAddress),
            void 0 !== e.validatorDstAddress &&
              (n.validatorDstAddress = e.validatorDstAddress),
            e.entries
              ? (n.entries = e.entries.map((e) =>
                  e ? t.RedelegationEntry.toJSON(e) : void 0,
                ))
              : (n.entries = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, E);
          if (
            ((n.entries = []),
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (n.delegatorAddress = e.delegatorAddress)
              : (n.delegatorAddress = ""),
            void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress
              ? (n.validatorSrcAddress = e.validatorSrcAddress)
              : (n.validatorSrcAddress = ""),
            void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress
              ? (n.validatorDstAddress = e.validatorDstAddress)
              : (n.validatorDstAddress = ""),
            void 0 !== e.entries && null !== e.entries)
          )
            for (const i of e.entries)
              n.entries.push(t.RedelegationEntry.fromPartial(i));
          return n;
        },
      };
      const R = {
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
      };
      t.Params = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            void 0 !== e.unbondingTime &&
              d.Duration.encode(e.unbondingTime, t.uint32(10).fork()).ldelim(),
            0 !== e.maxValidators && t.uint32(16).uint32(e.maxValidators),
            0 !== e.maxEntries && t.uint32(24).uint32(e.maxEntries),
            0 !== e.historicalEntries &&
              t.uint32(32).uint32(e.historicalEntries),
            "" !== e.bondDenom && t.uint32(42).string(e.bondDenom),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, R);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.unbondingTime = d.Duration.decode(n, n.uint32());
                break;
              case 2:
                o.maxValidators = n.uint32();
                break;
              case 3:
                o.maxEntries = n.uint32();
                break;
              case 4:
                o.historicalEntries = n.uint32();
                break;
              case 5:
                o.bondDenom = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, R);
          return (
            void 0 !== e.unbondingTime && null !== e.unbondingTime
              ? (t.unbondingTime = d.Duration.fromJSON(e.unbondingTime))
              : (t.unbondingTime = void 0),
            void 0 !== e.maxValidators && null !== e.maxValidators
              ? (t.maxValidators = Number(e.maxValidators))
              : (t.maxValidators = 0),
            void 0 !== e.maxEntries && null !== e.maxEntries
              ? (t.maxEntries = Number(e.maxEntries))
              : (t.maxEntries = 0),
            void 0 !== e.historicalEntries && null !== e.historicalEntries
              ? (t.historicalEntries = Number(e.historicalEntries))
              : (t.historicalEntries = 0),
            void 0 !== e.bondDenom && null !== e.bondDenom
              ? (t.bondDenom = String(e.bondDenom))
              : (t.bondDenom = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.unbondingTime &&
              (t.unbondingTime = e.unbondingTime
                ? d.Duration.toJSON(e.unbondingTime)
                : void 0),
            void 0 !== e.maxValidators && (t.maxValidators = e.maxValidators),
            void 0 !== e.maxEntries && (t.maxEntries = e.maxEntries),
            void 0 !== e.historicalEntries &&
              (t.historicalEntries = e.historicalEntries),
            void 0 !== e.bondDenom && (t.bondDenom = e.bondDenom),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, R);
          return (
            void 0 !== e.unbondingTime && null !== e.unbondingTime
              ? (t.unbondingTime = d.Duration.fromPartial(e.unbondingTime))
              : (t.unbondingTime = void 0),
            void 0 !== e.maxValidators && null !== e.maxValidators
              ? (t.maxValidators = e.maxValidators)
              : (t.maxValidators = 0),
            void 0 !== e.maxEntries && null !== e.maxEntries
              ? (t.maxEntries = e.maxEntries)
              : (t.maxEntries = 0),
            void 0 !== e.historicalEntries && null !== e.historicalEntries
              ? (t.historicalEntries = e.historicalEntries)
              : (t.historicalEntries = 0),
            void 0 !== e.bondDenom && null !== e.bondDenom
              ? (t.bondDenom = e.bondDenom)
              : (t.bondDenom = ""),
            t
          );
        },
      };
      const P = {};
      t.DelegationResponse = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.delegation &&
              t.Delegation.encode(e.delegation, n.uint32(10).fork()).ldelim(),
            void 0 !== e.balance &&
              c.Coin.encode(e.balance, n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, P);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.delegation = t.Delegation.decode(i, i.uint32());
                break;
              case 2:
                r.balance = c.Coin.decode(i, i.uint32());
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, P);
          return (
            void 0 !== e.delegation && null !== e.delegation
              ? (n.delegation = t.Delegation.fromJSON(e.delegation))
              : (n.delegation = void 0),
            void 0 !== e.balance && null !== e.balance
              ? (n.balance = c.Coin.fromJSON(e.balance))
              : (n.balance = void 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.delegation &&
              (n.delegation = e.delegation
                ? t.Delegation.toJSON(e.delegation)
                : void 0),
            void 0 !== e.balance &&
              (n.balance = e.balance ? c.Coin.toJSON(e.balance) : void 0),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, P);
          return (
            void 0 !== e.delegation && null !== e.delegation
              ? (n.delegation = t.Delegation.fromPartial(e.delegation))
              : (n.delegation = void 0),
            void 0 !== e.balance && null !== e.balance
              ? (n.balance = c.Coin.fromPartial(e.balance))
              : (n.balance = void 0),
            n
          );
        },
      };
      const D = { balance: "" };
      t.RedelegationEntryResponse = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.redelegationEntry &&
              t.RedelegationEntry.encode(
                e.redelegationEntry,
                n.uint32(10).fork(),
              ).ldelim(),
            "" !== e.balance && n.uint32(34).string(e.balance),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, D);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.redelegationEntry = t.RedelegationEntry.decode(i, i.uint32());
                break;
              case 4:
                r.balance = i.string();
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, D);
          return (
            void 0 !== e.redelegationEntry && null !== e.redelegationEntry
              ? (n.redelegationEntry = t.RedelegationEntry.fromJSON(
                  e.redelegationEntry,
                ))
              : (n.redelegationEntry = void 0),
            void 0 !== e.balance && null !== e.balance
              ? (n.balance = String(e.balance))
              : (n.balance = ""),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.redelegationEntry &&
              (n.redelegationEntry = e.redelegationEntry
                ? t.RedelegationEntry.toJSON(e.redelegationEntry)
                : void 0),
            void 0 !== e.balance && (n.balance = e.balance),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, D);
          return (
            void 0 !== e.redelegationEntry && null !== e.redelegationEntry
              ? (n.redelegationEntry = t.RedelegationEntry.fromPartial(
                  e.redelegationEntry,
                ))
              : (n.redelegationEntry = void 0),
            void 0 !== e.balance && null !== e.balance
              ? (n.balance = e.balance)
              : (n.balance = ""),
            n
          );
        },
      };
      const w = {};
      t.RedelegationResponse = {
        encode(e, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.redelegation &&
              t.Redelegation.encode(
                e.redelegation,
                n.uint32(10).fork(),
              ).ldelim());
          for (const i of e.entries)
            t.RedelegationEntryResponse.encode(i, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, w);
          r.entries = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.redelegation = t.Redelegation.decode(i, i.uint32());
                break;
              case 2:
                r.entries.push(
                  t.RedelegationEntryResponse.decode(i, i.uint32()),
                );
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, w);
          if (
            ((n.entries = []),
            void 0 !== e.redelegation && null !== e.redelegation
              ? (n.redelegation = t.Redelegation.fromJSON(e.redelegation))
              : (n.redelegation = void 0),
            void 0 !== e.entries && null !== e.entries)
          )
            for (const i of e.entries)
              n.entries.push(t.RedelegationEntryResponse.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.redelegation &&
              (n.redelegation = e.redelegation
                ? t.Redelegation.toJSON(e.redelegation)
                : void 0),
            e.entries
              ? (n.entries = e.entries.map((e) =>
                  e ? t.RedelegationEntryResponse.toJSON(e) : void 0,
                ))
              : (n.entries = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, w);
          if (
            ((n.entries = []),
            void 0 !== e.redelegation && null !== e.redelegation
              ? (n.redelegation = t.Redelegation.fromPartial(e.redelegation))
              : (n.redelegation = void 0),
            void 0 !== e.entries && null !== e.entries)
          )
            for (const i of e.entries)
              n.entries.push(t.RedelegationEntryResponse.fromPartial(i));
          return n;
        },
      };
      const _ = { notBondedTokens: "", bondedTokens: "" };
      function j(e) {
        const t = M(e.getTime() / 1e3),
          n = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: n };
      }
      function U(e) {
        let t = 1e3 * e.seconds.toNumber();
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function J(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : U(l.Timestamp.fromJSON(e));
      }
      function M(e) {
        return o.default.fromNumber(e);
      }
      ((t.Pool = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.notBondedTokens && t.uint32(10).string(e.notBondedTokens),
            "" !== e.bondedTokens && t.uint32(18).string(e.bondedTokens),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, _);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.notBondedTokens = n.string();
                break;
              case 2:
                o.bondedTokens = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, _);
          return (
            void 0 !== e.notBondedTokens && null !== e.notBondedTokens
              ? (t.notBondedTokens = String(e.notBondedTokens))
              : (t.notBondedTokens = ""),
            void 0 !== e.bondedTokens && null !== e.bondedTokens
              ? (t.bondedTokens = String(e.bondedTokens))
              : (t.bondedTokens = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.notBondedTokens &&
              (t.notBondedTokens = e.notBondedTokens),
            void 0 !== e.bondedTokens && (t.bondedTokens = e.bondedTokens),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, _);
          return (
            void 0 !== e.notBondedTokens && null !== e.notBondedTokens
              ? (t.notBondedTokens = e.notBondedTokens)
              : (t.notBondedTokens = ""),
            void 0 !== e.bondedTokens && null !== e.bondedTokens
              ? (t.bondedTokens = e.bondedTokens)
              : (t.bondedTokens = ""),
            t
          );
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    3682: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgDonateAllVestingTokensDesc =
          t.MsgCreatePeriodicVestingAccountDesc =
          t.MsgCreateVestingAccountDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgDonateAllVestingTokensResponse =
          t.MsgDonateAllVestingTokens =
          t.MsgCreatePeriodicVestingAccountResponse =
          t.MsgCreatePeriodicVestingAccount =
          t.MsgCreateVestingAccountResponse =
          t.MsgCreateVestingAccount =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = n(2889),
        r = i(n(2755)),
        a = n(2890),
        d = n(2840),
        c = n(3173);
      t.protobufPackage = "cosmos.vesting.v1beta1";
      const l = {
        fromAddress: "",
        toAddress: "",
        endTime: o.default.ZERO,
        delayed: !1,
      };
      t.MsgCreateVestingAccount = {
        encode(e, t) {
          (void 0 === t && (t = r.default.Writer.create()),
            "" !== e.fromAddress && t.uint32(10).string(e.fromAddress),
            "" !== e.toAddress && t.uint32(18).string(e.toAddress));
          for (const n of e.amount)
            d.Coin.encode(n, t.uint32(26).fork()).ldelim();
          return (
            e.endTime.isZero() || t.uint32(32).int64(e.endTime),
            !0 === e.delayed && t.uint32(40).bool(e.delayed),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, l);
          o.amount = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.fromAddress = n.string();
                break;
              case 2:
                o.toAddress = n.string();
                break;
              case 3:
                o.amount.push(d.Coin.decode(n, n.uint32()));
                break;
              case 4:
                o.endTime = n.int64();
                break;
              case 5:
                o.delayed = n.bool();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
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
            for (const n of e.amount) t.amount.push(d.Coin.fromJSON(n));
          return (
            void 0 !== e.endTime && null !== e.endTime
              ? (t.endTime = o.default.fromString(e.endTime))
              : (t.endTime = o.default.ZERO),
            void 0 !== e.delayed && null !== e.delayed
              ? (t.delayed = Boolean(e.delayed))
              : (t.delayed = !1),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress),
            void 0 !== e.toAddress && (t.toAddress = e.toAddress),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? d.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            void 0 !== e.endTime &&
              (t.endTime = (e.endTime || o.default.ZERO).toString()),
            void 0 !== e.delayed && (t.delayed = e.delayed),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          if (
            ((t.amount = []),
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = e.fromAddress)
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = e.toAddress)
              : (t.toAddress = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const n of e.amount) t.amount.push(d.Coin.fromPartial(n));
          return (
            void 0 !== e.endTime && null !== e.endTime
              ? (t.endTime = e.endTime)
              : (t.endTime = o.default.ZERO),
            void 0 !== e.delayed && null !== e.delayed
              ? (t.delayed = e.delayed)
              : (t.delayed = !1),
            t
          );
        },
      };
      const u = {};
      t.MsgCreateVestingAccountResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, u);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
      const g = { fromAddress: "", toAddress: "", startTime: o.default.ZERO };
      t.MsgCreatePeriodicVestingAccount = {
        encode(e, t) {
          (void 0 === t && (t = r.default.Writer.create()),
            "" !== e.fromAddress && t.uint32(10).string(e.fromAddress),
            "" !== e.toAddress && t.uint32(18).string(e.toAddress),
            e.startTime.isZero() || t.uint32(24).int64(e.startTime));
          for (const n of e.vestingPeriods)
            c.Period.encode(n, t.uint32(34).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, g);
          o.vestingPeriods = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.fromAddress = n.string();
                break;
              case 2:
                o.toAddress = n.string();
                break;
              case 3:
                o.startTime = n.int64();
                break;
              case 4:
                o.vestingPeriods.push(c.Period.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (
            ((t.vestingPeriods = []),
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = String(e.fromAddress))
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = String(e.toAddress))
              : (t.toAddress = ""),
            void 0 !== e.startTime && null !== e.startTime
              ? (t.startTime = o.default.fromString(e.startTime))
              : (t.startTime = o.default.ZERO),
            void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
          )
            for (const n of e.vestingPeriods)
              t.vestingPeriods.push(c.Period.fromJSON(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress),
            void 0 !== e.toAddress && (t.toAddress = e.toAddress),
            void 0 !== e.startTime &&
              (t.startTime = (e.startTime || o.default.ZERO).toString()),
            e.vestingPeriods
              ? (t.vestingPeriods = e.vestingPeriods.map((e) =>
                  e ? c.Period.toJSON(e) : void 0,
                ))
              : (t.vestingPeriods = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          if (
            ((t.vestingPeriods = []),
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = e.fromAddress)
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = e.toAddress)
              : (t.toAddress = ""),
            void 0 !== e.startTime && null !== e.startTime
              ? (t.startTime = e.startTime)
              : (t.startTime = o.default.ZERO),
            void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
          )
            for (const n of e.vestingPeriods)
              t.vestingPeriods.push(c.Period.fromPartial(n));
          return t;
        },
      };
      const f = {};
      t.MsgCreatePeriodicVestingAccountResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, f);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return t;
        },
      };
      const m = { fromAddress: "" };
      t.MsgDonateAllVestingTokens = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.fromAddress && t.uint32(10).string(e.fromAddress),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, m);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.fromAddress = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          return (
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = String(e.fromAddress))
              : (t.fromAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          return (
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = e.fromAddress)
              : (t.fromAddress = ""),
            t
          );
        },
      };
      const v = {};
      t.MsgDonateAllVestingTokensResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, v);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
            (this.CreateVestingAccount = this.CreateVestingAccount.bind(this)),
            (this.CreatePeriodicVestingAccount =
              this.CreatePeriodicVestingAccount.bind(this)),
            (this.DonateAllVestingTokens =
              this.DonateAllVestingTokens.bind(this)));
        }
        CreateVestingAccount(e, n) {
          return this.rpc.unary(
            t.MsgCreateVestingAccountDesc,
            t.MsgCreateVestingAccount.fromPartial(e),
            n,
          );
        }
        CreatePeriodicVestingAccount(e, n) {
          return this.rpc.unary(
            t.MsgCreatePeriodicVestingAccountDesc,
            t.MsgCreatePeriodicVestingAccount.fromPartial(e),
            n,
          );
        }
        DonateAllVestingTokens(e, n) {
          return this.rpc.unary(
            t.MsgDonateAllVestingTokensDesc,
            t.MsgDonateAllVestingTokens.fromPartial(e),
            n,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.vesting.v1beta1.Msg" }),
        (t.MsgCreateVestingAccountDesc = {
          methodName: "CreateVestingAccount",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgCreateVestingAccount.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgCreateVestingAccountResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgCreatePeriodicVestingAccountDesc = {
          methodName: "CreatePeriodicVestingAccount",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgCreatePeriodicVestingAccount.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign(
                  {},
                  t.MsgCreatePeriodicVestingAccountResponse.decode(e),
                ),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgDonateAllVestingTokensDesc = {
          methodName: "DonateAllVestingTokens",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgDonateAllVestingTokens.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign(
                  {},
                  t.MsgDonateAllVestingTokensResponse.decode(e),
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
          var i;
          const o = Object.assign(Object.assign({}, t), e.requestType),
            r =
              n && this.options.metadata
                ? new a.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (i = this.options) || void 0 === i
                          ? void 0
                          : i.metadata.headersMap,
                      ),
                      null === n || void 0 === n ? void 0 : n.headersMap,
                    ),
                  )
                : n || this.options.metadata;
          return new Promise((t, n) => {
            s.grpc.unary(e, {
              request: o,
              host: this.host,
              metadata: r,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === s.grpc.Code.OK) t(e.message);
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
        r.default.util.Long !== o.default &&
          ((r.default.util.Long = o.default), r.default.configure()));
    },
    3685: function (e, t, n) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Fee =
            t.ModeInfo_Multi =
            t.ModeInfo_Single =
            t.ModeInfo =
            t.SignerInfo =
            t.AuthInfo =
            t.TxBody =
            t.SignDoc =
            t.TxRaw =
            t.Tx =
            t.protobufPackage =
              void 0));
        const o = i(n(2754)),
          s = i(n(2755)),
          r = n(2759),
          a = n(3175),
          d = n(3436),
          c = n(2840);
        t.protobufPackage = "cosmos.tx.v1beta1";
        const l = {};
        t.Tx = {
          encode(e, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.body &&
                t.TxBody.encode(e.body, n.uint32(10).fork()).ldelim(),
              void 0 !== e.authInfo &&
                t.AuthInfo.encode(e.authInfo, n.uint32(18).fork()).ldelim());
            for (const t of e.signatures) n.uint32(26).bytes(t);
            return n;
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, l);
            r.signatures = [];
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.body = t.TxBody.decode(i, i.uint32());
                  break;
                case 2:
                  r.authInfo = t.AuthInfo.decode(i, i.uint32());
                  break;
                case 3:
                  r.signatures.push(i.bytes());
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, l);
            if (
              ((n.signatures = []),
              void 0 !== e.body && null !== e.body
                ? (n.body = t.TxBody.fromJSON(e.body))
                : (n.body = void 0),
              void 0 !== e.authInfo && null !== e.authInfo
                ? (n.authInfo = t.AuthInfo.fromJSON(e.authInfo))
                : (n.authInfo = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const t of e.signatures) n.signatures.push(y(t));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.body &&
                (n.body = e.body ? t.TxBody.toJSON(e.body) : void 0),
              void 0 !== e.authInfo &&
                (n.authInfo = e.authInfo
                  ? t.AuthInfo.toJSON(e.authInfo)
                  : void 0),
              e.signatures
                ? (n.signatures = e.signatures.map((e) =>
                    k(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, l);
            if (
              ((n.signatures = []),
              void 0 !== e.body && null !== e.body
                ? (n.body = t.TxBody.fromPartial(e.body))
                : (n.body = void 0),
              void 0 !== e.authInfo && null !== e.authInfo
                ? (n.authInfo = t.AuthInfo.fromPartial(e.authInfo))
                : (n.authInfo = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const t of e.signatures) n.signatures.push(t);
            return n;
          },
        };
        const u = {};
        t.TxRaw = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes),
              0 !== e.authInfoBytes.length &&
                t.uint32(18).bytes(e.authInfoBytes));
            for (const n of e.signatures) t.uint32(26).bytes(n);
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, u);
            ((o.signatures = []),
              (o.bodyBytes = new Uint8Array()),
              (o.authInfoBytes = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.bodyBytes = n.bytes();
                  break;
                case 2:
                  o.authInfoBytes = n.bytes();
                  break;
                case 3:
                  o.signatures.push(n.bytes());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            if (
              ((t.signatures = []),
              (t.bodyBytes = new Uint8Array()),
              (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.bodyBytes &&
                null !== e.bodyBytes &&
                (t.bodyBytes = y(e.bodyBytes)),
              void 0 !== e.authInfoBytes &&
                null !== e.authInfoBytes &&
                (t.authInfoBytes = y(e.authInfoBytes)),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures) t.signatures.push(y(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.bodyBytes &&
                (t.bodyBytes = k(
                  void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array(),
                )),
              void 0 !== e.authInfoBytes &&
                (t.authInfoBytes = k(
                  void 0 !== e.authInfoBytes
                    ? e.authInfoBytes
                    : new Uint8Array(),
                )),
              e.signatures
                ? (t.signatures = e.signatures.map((e) =>
                    k(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.signatures = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            if (
              ((t.signatures = []),
              void 0 !== e.bodyBytes && null !== e.bodyBytes
                ? (t.bodyBytes = e.bodyBytes)
                : (t.bodyBytes = new Uint8Array()),
              void 0 !== e.authInfoBytes && null !== e.authInfoBytes
                ? (t.authInfoBytes = e.authInfoBytes)
                : (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures) t.signatures.push(n);
            return t;
          },
        };
        const g = { chainId: "", accountNumber: o.default.UZERO };
        t.SignDoc = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes),
              0 !== e.authInfoBytes.length &&
                t.uint32(18).bytes(e.authInfoBytes),
              "" !== e.chainId && t.uint32(26).string(e.chainId),
              e.accountNumber.isZero() || t.uint32(32).uint64(e.accountNumber),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, g);
            ((o.bodyBytes = new Uint8Array()),
              (o.authInfoBytes = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.bodyBytes = n.bytes();
                  break;
                case 2:
                  o.authInfoBytes = n.bytes();
                  break;
                case 3:
                  o.chainId = n.string();
                  break;
                case 4:
                  o.accountNumber = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              (t.bodyBytes = new Uint8Array()),
              (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.bodyBytes &&
                null !== e.bodyBytes &&
                (t.bodyBytes = y(e.bodyBytes)),
              void 0 !== e.authInfoBytes &&
                null !== e.authInfoBytes &&
                (t.authInfoBytes = y(e.authInfoBytes)),
              void 0 !== e.chainId && null !== e.chainId
                ? (t.chainId = String(e.chainId))
                : (t.chainId = ""),
              void 0 !== e.accountNumber && null !== e.accountNumber
                ? (t.accountNumber = o.default.fromString(e.accountNumber))
                : (t.accountNumber = o.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.bodyBytes &&
                (t.bodyBytes = k(
                  void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array(),
                )),
              void 0 !== e.authInfoBytes &&
                (t.authInfoBytes = k(
                  void 0 !== e.authInfoBytes
                    ? e.authInfoBytes
                    : new Uint8Array(),
                )),
              void 0 !== e.chainId && (t.chainId = e.chainId),
              void 0 !== e.accountNumber &&
                (t.accountNumber = (
                  e.accountNumber || o.default.UZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.bodyBytes && null !== e.bodyBytes
                ? (t.bodyBytes = e.bodyBytes)
                : (t.bodyBytes = new Uint8Array()),
              void 0 !== e.authInfoBytes && null !== e.authInfoBytes
                ? (t.authInfoBytes = e.authInfoBytes)
                : (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.chainId && null !== e.chainId
                ? (t.chainId = e.chainId)
                : (t.chainId = ""),
              void 0 !== e.accountNumber && null !== e.accountNumber
                ? (t.accountNumber = e.accountNumber)
                : (t.accountNumber = o.default.UZERO),
              t
            );
          },
        };
        const f = { memo: "", timeoutHeight: o.default.UZERO };
        t.TxBody = {
          encode(e, t) {
            void 0 === t && (t = s.default.Writer.create());
            for (const n of e.messages)
              r.Any.encode(n, t.uint32(10).fork()).ldelim();
            ("" !== e.memo && t.uint32(18).string(e.memo),
              e.timeoutHeight.isZero() || t.uint32(24).uint64(e.timeoutHeight));
            for (const n of e.extensionOptions)
              r.Any.encode(n, t.uint32(8186).fork()).ldelim();
            for (const n of e.nonCriticalExtensionOptions)
              r.Any.encode(n, t.uint32(16378).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, f);
            ((o.messages = []),
              (o.extensionOptions = []),
              (o.nonCriticalExtensionOptions = []));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.messages.push(r.Any.decode(n, n.uint32()));
                  break;
                case 2:
                  o.memo = n.string();
                  break;
                case 3:
                  o.timeoutHeight = n.uint64();
                  break;
                case 1023:
                  o.extensionOptions.push(r.Any.decode(n, n.uint32()));
                  break;
                case 2047:
                  o.nonCriticalExtensionOptions.push(
                    r.Any.decode(n, n.uint32()),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            if (
              ((t.messages = []),
              (t.extensionOptions = []),
              (t.nonCriticalExtensionOptions = []),
              void 0 !== e.messages && null !== e.messages)
            )
              for (const n of e.messages) t.messages.push(r.Any.fromJSON(n));
            if (
              (void 0 !== e.memo && null !== e.memo
                ? (t.memo = String(e.memo))
                : (t.memo = ""),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = o.default.fromString(e.timeoutHeight))
                : (t.timeoutHeight = o.default.UZERO),
              void 0 !== e.extensionOptions && null !== e.extensionOptions)
            )
              for (const n of e.extensionOptions)
                t.extensionOptions.push(r.Any.fromJSON(n));
            if (
              void 0 !== e.nonCriticalExtensionOptions &&
              null !== e.nonCriticalExtensionOptions
            )
              for (const n of e.nonCriticalExtensionOptions)
                t.nonCriticalExtensionOptions.push(r.Any.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.messages
                ? (t.messages = e.messages.map((e) =>
                    e ? r.Any.toJSON(e) : void 0,
                  ))
                : (t.messages = []),
              void 0 !== e.memo && (t.memo = e.memo),
              void 0 !== e.timeoutHeight &&
                (t.timeoutHeight = (
                  e.timeoutHeight || o.default.UZERO
                ).toString()),
              e.extensionOptions
                ? (t.extensionOptions = e.extensionOptions.map((e) =>
                    e ? r.Any.toJSON(e) : void 0,
                  ))
                : (t.extensionOptions = []),
              e.nonCriticalExtensionOptions
                ? (t.nonCriticalExtensionOptions =
                    e.nonCriticalExtensionOptions.map((e) =>
                      e ? r.Any.toJSON(e) : void 0,
                    ))
                : (t.nonCriticalExtensionOptions = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            if (
              ((t.messages = []),
              (t.extensionOptions = []),
              (t.nonCriticalExtensionOptions = []),
              void 0 !== e.messages && null !== e.messages)
            )
              for (const n of e.messages) t.messages.push(r.Any.fromPartial(n));
            if (
              (void 0 !== e.memo && null !== e.memo
                ? (t.memo = e.memo)
                : (t.memo = ""),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = e.timeoutHeight)
                : (t.timeoutHeight = o.default.UZERO),
              void 0 !== e.extensionOptions && null !== e.extensionOptions)
            )
              for (const n of e.extensionOptions)
                t.extensionOptions.push(r.Any.fromPartial(n));
            if (
              void 0 !== e.nonCriticalExtensionOptions &&
              null !== e.nonCriticalExtensionOptions
            )
              for (const n of e.nonCriticalExtensionOptions)
                t.nonCriticalExtensionOptions.push(r.Any.fromPartial(n));
            return t;
          },
        };
        const m = {};
        t.AuthInfo = {
          encode(e, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const i of e.signerInfos)
              t.SignerInfo.encode(i, n.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.fee &&
                t.Fee.encode(e.fee, n.uint32(18).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, m);
            r.signerInfos = [];
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.signerInfos.push(t.SignerInfo.decode(i, i.uint32()));
                  break;
                case 2:
                  r.fee = t.Fee.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, m);
            if (
              ((n.signerInfos = []),
              void 0 !== e.signerInfos && null !== e.signerInfos)
            )
              for (const i of e.signerInfos)
                n.signerInfos.push(t.SignerInfo.fromJSON(i));
            return (
              void 0 !== e.fee && null !== e.fee
                ? (n.fee = t.Fee.fromJSON(e.fee))
                : (n.fee = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              e.signerInfos
                ? (n.signerInfos = e.signerInfos.map((e) =>
                    e ? t.SignerInfo.toJSON(e) : void 0,
                  ))
                : (n.signerInfos = []),
              void 0 !== e.fee &&
                (n.fee = e.fee ? t.Fee.toJSON(e.fee) : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, m);
            if (
              ((n.signerInfos = []),
              void 0 !== e.signerInfos && null !== e.signerInfos)
            )
              for (const i of e.signerInfos)
                n.signerInfos.push(t.SignerInfo.fromPartial(i));
            return (
              void 0 !== e.fee && null !== e.fee
                ? (n.fee = t.Fee.fromPartial(e.fee))
                : (n.fee = void 0),
              n
            );
          },
        };
        const v = { sequence: o.default.UZERO };
        t.SignerInfo = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.publicKey &&
                r.Any.encode(e.publicKey, n.uint32(10).fork()).ldelim(),
              void 0 !== e.modeInfo &&
                t.ModeInfo.encode(e.modeInfo, n.uint32(18).fork()).ldelim(),
              e.sequence.isZero() || n.uint32(24).uint64(e.sequence),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const a = Object.assign({}, v);
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  a.publicKey = r.Any.decode(i, i.uint32());
                  break;
                case 2:
                  a.modeInfo = t.ModeInfo.decode(i, i.uint32());
                  break;
                case 3:
                  a.sequence = i.uint64();
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const n = Object.assign({}, v);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = r.Any.fromJSON(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.modeInfo && null !== e.modeInfo
                ? (n.modeInfo = t.ModeInfo.fromJSON(e.modeInfo))
                : (n.modeInfo = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = o.default.fromString(e.sequence))
                : (n.sequence = o.default.UZERO),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.publicKey &&
                (n.publicKey = e.publicKey
                  ? r.Any.toJSON(e.publicKey)
                  : void 0),
              void 0 !== e.modeInfo &&
                (n.modeInfo = e.modeInfo
                  ? t.ModeInfo.toJSON(e.modeInfo)
                  : void 0),
              void 0 !== e.sequence &&
                (n.sequence = (e.sequence || o.default.UZERO).toString()),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, v);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = r.Any.fromPartial(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.modeInfo && null !== e.modeInfo
                ? (n.modeInfo = t.ModeInfo.fromPartial(e.modeInfo))
                : (n.modeInfo = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = e.sequence)
                : (n.sequence = o.default.UZERO),
              n
            );
          },
        };
        const p = {};
        t.ModeInfo = {
          encode(e, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.single &&
                t.ModeInfo_Single.encode(
                  e.single,
                  n.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.multi &&
                t.ModeInfo_Multi.encode(e.multi, n.uint32(18).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, p);
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.single = t.ModeInfo_Single.decode(i, i.uint32());
                  break;
                case 2:
                  r.multi = t.ModeInfo_Multi.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, p);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.ModeInfo_Single.fromJSON(e.single))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.ModeInfo_Multi.fromJSON(e.multi))
                : (n.multi = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.single &&
                (n.single = e.single
                  ? t.ModeInfo_Single.toJSON(e.single)
                  : void 0),
              void 0 !== e.multi &&
                (n.multi = e.multi ? t.ModeInfo_Multi.toJSON(e.multi) : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, p);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.ModeInfo_Single.fromPartial(e.single))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.ModeInfo_Multi.fromPartial(e.multi))
                : (n.multi = void 0),
              n
            );
          },
        };
        const b = { mode: 0 };
        t.ModeInfo_Single = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.mode && t.uint32(8).int32(e.mode),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, b);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.mode = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = a.signModeFromJSON(e.mode))
                : (t.mode = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.mode && (t.mode = a.signModeToJSON(e.mode)),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = e.mode)
                : (t.mode = 0),
              t
            );
          },
        };
        const O = {};
        t.ModeInfo_Multi = {
          encode(e, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              void 0 !== e.bitarray &&
                d.CompactBitArray.encode(
                  e.bitarray,
                  n.uint32(10).fork(),
                ).ldelim());
            for (const i of e.modeInfos)
              t.ModeInfo.encode(i, n.uint32(18).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const i =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, O);
            r.modeInfos = [];
            while (i.pos < o) {
              const e = i.uint32();
              switch (e >>> 3) {
                case 1:
                  r.bitarray = d.CompactBitArray.decode(i, i.uint32());
                  break;
                case 2:
                  r.modeInfos.push(t.ModeInfo.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const n = Object.assign({}, O);
            if (
              ((n.modeInfos = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = d.CompactBitArray.fromJSON(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.modeInfos && null !== e.modeInfos)
            )
              for (const i of e.modeInfos)
                n.modeInfos.push(t.ModeInfo.fromJSON(i));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.bitarray &&
                (n.bitarray = e.bitarray
                  ? d.CompactBitArray.toJSON(e.bitarray)
                  : void 0),
              e.modeInfos
                ? (n.modeInfos = e.modeInfos.map((e) =>
                    e ? t.ModeInfo.toJSON(e) : void 0,
                  ))
                : (n.modeInfos = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, O);
            if (
              ((n.modeInfos = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = d.CompactBitArray.fromPartial(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.modeInfos && null !== e.modeInfos)
            )
              for (const i of e.modeInfos)
                n.modeInfos.push(t.ModeInfo.fromPartial(i));
            return n;
          },
        };
        const A = { gasLimit: o.default.UZERO, payer: "", granter: "" };
        t.Fee = {
          encode(e, t) {
            void 0 === t && (t = s.default.Writer.create());
            for (const n of e.amount)
              c.Coin.encode(n, t.uint32(10).fork()).ldelim();
            return (
              e.gasLimit.isZero() || t.uint32(16).uint64(e.gasLimit),
              "" !== e.payer && t.uint32(26).string(e.payer),
              "" !== e.granter && t.uint32(34).string(e.granter),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let i = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, A);
            o.amount = [];
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.amount.push(c.Coin.decode(n, n.uint32()));
                  break;
                case 2:
                  o.gasLimit = n.uint64();
                  break;
                case 3:
                  o.payer = n.string();
                  break;
                case 4:
                  o.granter = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, A);
            if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
              for (const n of e.amount) t.amount.push(c.Coin.fromJSON(n));
            return (
              void 0 !== e.gasLimit && null !== e.gasLimit
                ? (t.gasLimit = o.default.fromString(e.gasLimit))
                : (t.gasLimit = o.default.UZERO),
              void 0 !== e.payer && null !== e.payer
                ? (t.payer = String(e.payer))
                : (t.payer = ""),
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = String(e.granter))
                : (t.granter = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.amount
                ? (t.amount = e.amount.map((e) =>
                    e ? c.Coin.toJSON(e) : void 0,
                  ))
                : (t.amount = []),
              void 0 !== e.gasLimit &&
                (t.gasLimit = (e.gasLimit || o.default.UZERO).toString()),
              void 0 !== e.payer && (t.payer = e.payer),
              void 0 !== e.granter && (t.granter = e.granter),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, A);
            if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
              for (const n of e.amount) t.amount.push(c.Coin.fromPartial(n));
            return (
              void 0 !== e.gasLimit && null !== e.gasLimit
                ? (t.gasLimit = e.gasLimit)
                : (t.gasLimit = o.default.UZERO),
              void 0 !== e.payer && null !== e.payer
                ? (t.payer = e.payer)
                : (t.payer = ""),
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = e.granter)
                : (t.granter = ""),
              t
            );
          },
        };
        var S = (() => {
          if ("undefined" !== typeof S) return S;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const h =
          S.atob || ((e) => S.Buffer.from(e, "base64").toString("binary"));
        function y(e) {
          const t = h(e),
            n = new Uint8Array(t.length);
          for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
          return n;
        }
        const T =
          S.btoa || ((e) => S.Buffer.from(e, "binary").toString("base64"));
        function k(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return T(t.join(""));
        }
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure());
      }).call(this, n(13));
    },
    4314: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ModuleVersion =
          t.CancelSoftwareUpgradeProposal =
          t.SoftwareUpgradeProposal =
          t.Plan =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = i(n(2755)),
        r = n(2759),
        a = n(2993);
      t.protobufPackage = "cosmos.upgrade.v1beta1";
      const d = { name: "", height: o.default.ZERO, info: "" };
      t.Plan = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.name && t.uint32(10).string(e.name),
            void 0 !== e.time &&
              a.Timestamp.encode(g(e.time), t.uint32(18).fork()).ldelim(),
            e.height.isZero() || t.uint32(24).int64(e.height),
            "" !== e.info && t.uint32(34).string(e.info),
            void 0 !== e.upgradedClientState &&
              r.Any.encode(e.upgradedClientState, t.uint32(42).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, d);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.name = n.string();
                break;
              case 2:
                o.time = f(a.Timestamp.decode(n, n.uint32()));
                break;
              case 3:
                o.height = n.int64();
                break;
              case 4:
                o.info = n.string();
                break;
              case 5:
                o.upgradedClientState = r.Any.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.name && null !== e.name
              ? (t.name = String(e.name))
              : (t.name = ""),
            void 0 !== e.time && null !== e.time
              ? (t.time = m(e.time))
              : (t.time = void 0),
            void 0 !== e.height && null !== e.height
              ? (t.height = o.default.fromString(e.height))
              : (t.height = o.default.ZERO),
            void 0 !== e.info && null !== e.info
              ? (t.info = String(e.info))
              : (t.info = ""),
            void 0 !== e.upgradedClientState && null !== e.upgradedClientState
              ? (t.upgradedClientState = r.Any.fromJSON(e.upgradedClientState))
              : (t.upgradedClientState = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.name && (t.name = e.name),
            void 0 !== e.time && (t.time = e.time.toISOString()),
            void 0 !== e.height &&
              (t.height = (e.height || o.default.ZERO).toString()),
            void 0 !== e.info && (t.info = e.info),
            void 0 !== e.upgradedClientState &&
              (t.upgradedClientState = e.upgradedClientState
                ? r.Any.toJSON(e.upgradedClientState)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.name && null !== e.name
              ? (t.name = e.name)
              : (t.name = ""),
            void 0 !== e.time && null !== e.time
              ? (t.time = e.time)
              : (t.time = void 0),
            void 0 !== e.height && null !== e.height
              ? (t.height = e.height)
              : (t.height = o.default.ZERO),
            void 0 !== e.info && null !== e.info
              ? (t.info = e.info)
              : (t.info = ""),
            void 0 !== e.upgradedClientState && null !== e.upgradedClientState
              ? (t.upgradedClientState = r.Any.fromPartial(
                  e.upgradedClientState,
                ))
              : (t.upgradedClientState = void 0),
            t
          );
        },
      };
      const c = { title: "", description: "" };
      t.SoftwareUpgradeProposal = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== e.title && n.uint32(10).string(e.title),
            "" !== e.description && n.uint32(18).string(e.description),
            void 0 !== e.plan &&
              t.Plan.encode(e.plan, n.uint32(26).fork()).ldelim(),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, c);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                r.title = i.string();
                break;
              case 2:
                r.description = i.string();
                break;
              case 3:
                r.plan = t.Plan.decode(i, i.uint32());
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const n = Object.assign({}, c);
          return (
            void 0 !== e.title && null !== e.title
              ? (n.title = String(e.title))
              : (n.title = ""),
            void 0 !== e.description && null !== e.description
              ? (n.description = String(e.description))
              : (n.description = ""),
            void 0 !== e.plan && null !== e.plan
              ? (n.plan = t.Plan.fromJSON(e.plan))
              : (n.plan = void 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.title && (n.title = e.title),
            void 0 !== e.description && (n.description = e.description),
            void 0 !== e.plan &&
              (n.plan = e.plan ? t.Plan.toJSON(e.plan) : void 0),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, c);
          return (
            void 0 !== e.title && null !== e.title
              ? (n.title = e.title)
              : (n.title = ""),
            void 0 !== e.description && null !== e.description
              ? (n.description = e.description)
              : (n.description = ""),
            void 0 !== e.plan && null !== e.plan
              ? (n.plan = t.Plan.fromPartial(e.plan))
              : (n.plan = void 0),
            n
          );
        },
      };
      const l = { title: "", description: "" };
      t.CancelSoftwareUpgradeProposal = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, l);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.title = n.string();
                break;
              case 2:
                o.description = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = String(e.title))
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = String(e.description))
              : (t.description = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.description && (t.description = e.description),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = e.title)
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = e.description)
              : (t.description = ""),
            t
          );
        },
      };
      const u = { name: "", version: o.default.UZERO };
      function g(e) {
        const t = v(e.getTime() / 1e3),
          n = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: n };
      }
      function f(e) {
        let t = 1e3 * e.seconds.toNumber();
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function m(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : f(a.Timestamp.fromJSON(e));
      }
      function v(e) {
        return o.default.fromNumber(e);
      }
      ((t.ModuleVersion = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.name && t.uint32(10).string(e.name),
            e.version.isZero() || t.uint32(16).uint64(e.version),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, u);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.name = n.string();
                break;
              case 2:
                o.version = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.name && null !== e.name
              ? (t.name = String(e.name))
              : (t.name = ""),
            void 0 !== e.version && null !== e.version
              ? (t.version = o.default.fromString(e.version))
              : (t.version = o.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.name && (t.name = e.name),
            void 0 !== e.version &&
              (t.version = (e.version || o.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.name && null !== e.name
              ? (t.name = e.name)
              : (t.name = ""),
            void 0 !== e.version && null !== e.version
              ? (t.version = e.version)
              : (t.version = o.default.UZERO),
            t
          );
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    5051: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ParamChange =
          t.ParameterChangeProposal =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = i(n(2755));
      t.protobufPackage = "cosmos.params.v1beta1";
      const r = { title: "", description: "" };
      t.ParameterChangeProposal = {
        encode(e, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== e.title && n.uint32(10).string(e.title),
            "" !== e.description && n.uint32(18).string(e.description));
          for (const i of e.changes)
            t.ParamChange.encode(i, n.uint32(26).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const a = Object.assign({}, r);
          a.changes = [];
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                a.title = i.string();
                break;
              case 2:
                a.description = i.string();
                break;
              case 3:
                a.changes.push(t.ParamChange.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const n = Object.assign({}, r);
          if (
            ((n.changes = []),
            void 0 !== e.title && null !== e.title
              ? (n.title = String(e.title))
              : (n.title = ""),
            void 0 !== e.description && null !== e.description
              ? (n.description = String(e.description))
              : (n.description = ""),
            void 0 !== e.changes && null !== e.changes)
          )
            for (const i of e.changes)
              n.changes.push(t.ParamChange.fromJSON(i));
          return n;
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.title && (n.title = e.title),
            void 0 !== e.description && (n.description = e.description),
            e.changes
              ? (n.changes = e.changes.map((e) =>
                  e ? t.ParamChange.toJSON(e) : void 0,
                ))
              : (n.changes = []),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, r);
          if (
            ((n.changes = []),
            void 0 !== e.title && null !== e.title
              ? (n.title = e.title)
              : (n.title = ""),
            void 0 !== e.description && null !== e.description
              ? (n.description = e.description)
              : (n.description = ""),
            void 0 !== e.changes && null !== e.changes)
          )
            for (const i of e.changes)
              n.changes.push(t.ParamChange.fromPartial(i));
          return n;
        },
      };
      const a = { subspace: "", key: "", value: "" };
      ((t.ParamChange = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.subspace && t.uint32(10).string(e.subspace),
            "" !== e.key && t.uint32(18).string(e.key),
            "" !== e.value && t.uint32(26).string(e.value),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, a);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.subspace = n.string();
                break;
              case 2:
                o.key = n.string();
                break;
              case 3:
                o.value = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.subspace && null !== e.subspace
              ? (t.subspace = String(e.subspace))
              : (t.subspace = ""),
            void 0 !== e.key && null !== e.key
              ? (t.key = String(e.key))
              : (t.key = ""),
            void 0 !== e.value && null !== e.value
              ? (t.value = String(e.value))
              : (t.value = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.subspace && (t.subspace = e.subspace),
            void 0 !== e.key && (t.key = e.key),
            void 0 !== e.value && (t.value = e.value),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.subspace && null !== e.subspace
              ? (t.subspace = e.subspace)
              : (t.subspace = ""),
            void 0 !== e.key && null !== e.key ? (t.key = e.key) : (t.key = ""),
            void 0 !== e.value && null !== e.value
              ? (t.value = e.value)
              : (t.value = ""),
            t
          );
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    5073: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StakeAuthorization_Validators =
          t.StakeAuthorization =
          t.authorizationTypeToJSON =
          t.authorizationTypeFromJSON =
          t.AuthorizationType =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = i(n(2755)),
        r = n(2840);
      var a;
      function d(e) {
        switch (e) {
          case 0:
          case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return a.AUTHORIZATION_TYPE_UNSPECIFIED;
          case 1:
          case "AUTHORIZATION_TYPE_DELEGATE":
            return a.AUTHORIZATION_TYPE_DELEGATE;
          case 2:
          case "AUTHORIZATION_TYPE_UNDELEGATE":
            return a.AUTHORIZATION_TYPE_UNDELEGATE;
          case 3:
          case "AUTHORIZATION_TYPE_REDELEGATE":
            return a.AUTHORIZATION_TYPE_REDELEGATE;
          case -1:
          case "UNRECOGNIZED":
          default:
            return a.UNRECOGNIZED;
        }
      }
      function c(e) {
        switch (e) {
          case a.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
          case a.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
          case a.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
          case a.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
          default:
            return "UNKNOWN";
        }
      }
      ((t.protobufPackage = "cosmos.staking.v1beta1"),
        (function (e) {
          ((e[(e["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0)] =
            "AUTHORIZATION_TYPE_UNSPECIFIED"),
            (e[(e["AUTHORIZATION_TYPE_DELEGATE"] = 1)] =
              "AUTHORIZATION_TYPE_DELEGATE"),
            (e[(e["AUTHORIZATION_TYPE_UNDELEGATE"] = 2)] =
              "AUTHORIZATION_TYPE_UNDELEGATE"),
            (e[(e["AUTHORIZATION_TYPE_REDELEGATE"] = 3)] =
              "AUTHORIZATION_TYPE_REDELEGATE"),
            (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
        })((a = t.AuthorizationType || (t.AuthorizationType = {}))),
        (t.authorizationTypeFromJSON = d),
        (t.authorizationTypeToJSON = c));
      const l = { authorizationType: 0 };
      t.StakeAuthorization = {
        encode(e, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            void 0 !== e.maxTokens &&
              r.Coin.encode(e.maxTokens, n.uint32(10).fork()).ldelim(),
            void 0 !== e.allowList &&
              t.StakeAuthorization_Validators.encode(
                e.allowList,
                n.uint32(18).fork(),
              ).ldelim(),
            void 0 !== e.denyList &&
              t.StakeAuthorization_Validators.encode(
                e.denyList,
                n.uint32(26).fork(),
              ).ldelim(),
            0 !== e.authorizationType &&
              n.uint32(32).int32(e.authorizationType),
            n
          );
        },
        decode(e, n) {
          const i = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let o = void 0 === n ? i.len : i.pos + n;
          const a = Object.assign({}, l);
          while (i.pos < o) {
            const e = i.uint32();
            switch (e >>> 3) {
              case 1:
                a.maxTokens = r.Coin.decode(i, i.uint32());
                break;
              case 2:
                a.allowList = t.StakeAuthorization_Validators.decode(
                  i,
                  i.uint32(),
                );
                break;
              case 3:
                a.denyList = t.StakeAuthorization_Validators.decode(
                  i,
                  i.uint32(),
                );
                break;
              case 4:
                a.authorizationType = i.int32();
                break;
              default:
                i.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const n = Object.assign({}, l);
          return (
            void 0 !== e.maxTokens && null !== e.maxTokens
              ? (n.maxTokens = r.Coin.fromJSON(e.maxTokens))
              : (n.maxTokens = void 0),
            void 0 !== e.allowList && null !== e.allowList
              ? (n.allowList = t.StakeAuthorization_Validators.fromJSON(
                  e.allowList,
                ))
              : (n.allowList = void 0),
            void 0 !== e.denyList && null !== e.denyList
              ? (n.denyList = t.StakeAuthorization_Validators.fromJSON(
                  e.denyList,
                ))
              : (n.denyList = void 0),
            void 0 !== e.authorizationType && null !== e.authorizationType
              ? (n.authorizationType = d(e.authorizationType))
              : (n.authorizationType = 0),
            n
          );
        },
        toJSON(e) {
          const n = {};
          return (
            void 0 !== e.maxTokens &&
              (n.maxTokens = e.maxTokens ? r.Coin.toJSON(e.maxTokens) : void 0),
            void 0 !== e.allowList &&
              (n.allowList = e.allowList
                ? t.StakeAuthorization_Validators.toJSON(e.allowList)
                : void 0),
            void 0 !== e.denyList &&
              (n.denyList = e.denyList
                ? t.StakeAuthorization_Validators.toJSON(e.denyList)
                : void 0),
            void 0 !== e.authorizationType &&
              (n.authorizationType = c(e.authorizationType)),
            n
          );
        },
        fromPartial(e) {
          const n = Object.assign({}, l);
          return (
            void 0 !== e.maxTokens && null !== e.maxTokens
              ? (n.maxTokens = r.Coin.fromPartial(e.maxTokens))
              : (n.maxTokens = void 0),
            void 0 !== e.allowList && null !== e.allowList
              ? (n.allowList = t.StakeAuthorization_Validators.fromPartial(
                  e.allowList,
                ))
              : (n.allowList = void 0),
            void 0 !== e.denyList && null !== e.denyList
              ? (n.denyList = t.StakeAuthorization_Validators.fromPartial(
                  e.denyList,
                ))
              : (n.denyList = void 0),
            void 0 !== e.authorizationType && null !== e.authorizationType
              ? (n.authorizationType = e.authorizationType)
              : (n.authorizationType = 0),
            n
          );
        },
      };
      const u = { address: "" };
      ((t.StakeAuthorization_Validators = {
        encode(e, t) {
          void 0 === t && (t = s.default.Writer.create());
          for (const n of e.address) t.uint32(10).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, u);
          o.address = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.address.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (((t.address = []), void 0 !== e.address && null !== e.address))
            for (const n of e.address) t.address.push(String(n));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.address
              ? (t.address = e.address.map((e) => e))
              : (t.address = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (((t.address = []), void 0 !== e.address && null !== e.address))
            for (const n of e.address) t.address.push(n);
          return t;
        },
      }),
        s.default.util.Long !== o.default &&
          ((s.default.util.Long = o.default), s.default.configure()));
    },
    5081: function (e, t, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgUnjailDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgUnjailResponse =
          t.MsgUnjail =
          t.protobufPackage =
            void 0));
      const o = i(n(2754)),
        s = n(2889),
        r = i(n(2755)),
        a = n(2890);
      t.protobufPackage = "cosmos.slashing.v1beta1";
      const d = { validatorAddr: "" };
      t.MsgUnjail = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.validatorAddr && t.uint32(10).string(e.validatorAddr),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, d);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.validatorAddr = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.validatorAddr && null !== e.validatorAddr
              ? (t.validatorAddr = String(e.validatorAddr))
              : (t.validatorAddr = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.validatorAddr && null !== e.validatorAddr
              ? (t.validatorAddr = e.validatorAddr)
              : (t.validatorAddr = ""),
            t
          );
        },
      };
      const c = {};
      t.MsgUnjailResponse = {
        encode(e, t) {
          return (void 0 === t && (t = r.default.Writer.create()), t);
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, c);
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e), (this.Unjail = this.Unjail.bind(this)));
        }
        Unjail(e, n) {
          return this.rpc.unary(t.MsgUnjailDesc, t.MsgUnjail.fromPartial(e), n);
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.slashing.v1beta1.Msg" }),
        (t.MsgUnjailDesc = {
          methodName: "Unjail",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgUnjail.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgUnjailResponse.decode(e)),
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
          var i;
          const o = Object.assign(Object.assign({}, t), e.requestType),
            r =
              n && this.options.metadata
                ? new a.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (i = this.options) || void 0 === i
                          ? void 0
                          : i.metadata.headersMap,
                      ),
                      null === n || void 0 === n ? void 0 : n.headersMap,
                    ),
                  )
                : n || this.options.metadata;
          return new Promise((t, n) => {
            s.grpc.unary(e, {
              request: o,
              host: this.host,
              metadata: r,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === s.grpc.Code.OK) t(e.message);
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
        r.default.util.Long !== o.default &&
          ((r.default.util.Long = o.default), r.default.configure()));
    },
  },
]);
