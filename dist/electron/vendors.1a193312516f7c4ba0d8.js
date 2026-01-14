(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [332],
  {
    2927: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params =
          t.Height =
          t.ClientUpdateProposal =
          t.ClientConsensusStates =
          t.ConsensusStateWithHeight =
          t.IdentifiedClientState =
          t.protobufPackage =
            void 0));
      const i = o(n(2754)),
        r = o(n(2755)),
        s = n(2781);
      t.protobufPackage = "ibc.core.client.v1";
      const a = { clientId: "" };
      t.IdentifiedClientState = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId),
            void 0 !== e.clientState &&
              s.Any.encode(e.clientState, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, a);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.clientId = n.string();
                break;
              case 2:
                i.clientState = s.Any.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
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
          var t;
          const n = Object.assign({}, a);
          return (
            (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
            void 0 !== e.clientState && null !== e.clientState
              ? (n.clientState = s.Any.fromPartial(e.clientState))
              : (n.clientState = void 0),
            n
          );
        },
      };
      const d = {};
      t.ConsensusStateWithHeight = {
        encode(e, n) {
          return (
            void 0 === n && (n = r.default.Writer.create()),
            void 0 !== e.height &&
              t.Height.encode(e.height, n.uint32(10).fork()).ldelim(),
            void 0 !== e.consensusState &&
              s.Any.encode(e.consensusState, n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(e, n) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === n ? o.len : o.pos + n;
          const a = Object.assign({}, d);
          while (o.pos < i) {
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
          const n = Object.assign({}, d);
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
          const n = Object.assign({}, d);
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
      const c = { clientId: "" };
      t.ClientConsensusStates = {
        encode(e, n) {
          (void 0 === n && (n = r.default.Writer.create()),
            "" !== e.clientId && n.uint32(10).string(e.clientId));
          for (const o of e.consensusStates)
            t.ConsensusStateWithHeight.encode(o, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(e, n) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === n ? o.len : o.pos + n;
          const s = Object.assign({}, c);
          s.consensusStates = [];
          while (o.pos < i) {
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
          const n = Object.assign({}, c);
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
          var n;
          const o = Object.assign({}, c);
          if (
            ((o.clientId = null !== (n = e.clientId) && void 0 !== n ? n : ""),
            (o.consensusStates = []),
            void 0 !== e.consensusStates && null !== e.consensusStates)
          )
            for (const i of e.consensusStates)
              o.consensusStates.push(t.ConsensusStateWithHeight.fromPartial(i));
          return o;
        },
      };
      const l = { title: "", description: "", clientId: "" };
      t.ClientUpdateProposal = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            "" !== e.clientId && t.uint32(26).string(e.clientId),
            void 0 !== e.header &&
              s.Any.encode(e.header, t.uint32(34).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, l);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.title = n.string();
                break;
              case 2:
                i.description = n.string();
                break;
              case 3:
                i.clientId = n.string();
                break;
              case 4:
                i.header = s.Any.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
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
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = String(e.clientId))
              : (t.clientId = ""),
            void 0 !== e.header && null !== e.header
              ? (t.header = s.Any.fromJSON(e.header))
              : (t.header = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.description && (t.description = e.description),
            void 0 !== e.clientId && (t.clientId = e.clientId),
            void 0 !== e.header &&
              (t.header = e.header ? s.Any.toJSON(e.header) : void 0),
            t
          );
        },
        fromPartial(e) {
          var t, n, o;
          const i = Object.assign({}, l);
          return (
            (i.title = null !== (t = e.title) && void 0 !== t ? t : ""),
            (i.description =
              null !== (n = e.description) && void 0 !== n ? n : ""),
            (i.clientId = null !== (o = e.clientId) && void 0 !== o ? o : ""),
            void 0 !== e.header && null !== e.header
              ? (i.header = s.Any.fromPartial(e.header))
              : (i.header = void 0),
            i
          );
        },
      };
      const u = {
        revisionNumber: i.default.UZERO,
        revisionHeight: i.default.UZERO,
      };
      t.Height = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            e.revisionNumber.isZero() || t.uint32(8).uint64(e.revisionNumber),
            e.revisionHeight.isZero() || t.uint32(16).uint64(e.revisionHeight),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, u);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.revisionNumber = n.uint64();
                break;
              case 2:
                i.revisionHeight = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.revisionNumber && null !== e.revisionNumber
              ? (t.revisionNumber = i.default.fromString(e.revisionNumber))
              : (t.revisionNumber = i.default.UZERO),
            void 0 !== e.revisionHeight && null !== e.revisionHeight
              ? (t.revisionHeight = i.default.fromString(e.revisionHeight))
              : (t.revisionHeight = i.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.revisionNumber &&
              (t.revisionNumber = (
                e.revisionNumber || i.default.UZERO
              ).toString()),
            void 0 !== e.revisionHeight &&
              (t.revisionHeight = (
                e.revisionHeight || i.default.UZERO
              ).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.revisionNumber && null !== e.revisionNumber
              ? (t.revisionNumber = e.revisionNumber)
              : (t.revisionNumber = i.default.UZERO),
            void 0 !== e.revisionHeight && null !== e.revisionHeight
              ? (t.revisionHeight = e.revisionHeight)
              : (t.revisionHeight = i.default.UZERO),
            t
          );
        },
      };
      const f = { allowedClients: "" };
      ((t.Params = {
        encode(e, t) {
          void 0 === t && (t = r.default.Writer.create());
          for (const n of e.allowedClients) t.uint32(10).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, f);
          i.allowedClients = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.allowedClients.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
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
          const t = Object.assign({}, f);
          if (
            ((t.allowedClients = []),
            void 0 !== e.allowedClients && null !== e.allowedClients)
          )
            for (const n of e.allowedClients) t.allowedClients.push(n);
          return t;
        },
      }),
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure()));
    },
    3569: function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Version =
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
      const i = o(n(2754)),
        r = o(n(2755)),
        s = n(3570);
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
      const l = { clientId: "", state: 0, delayPeriod: i.default.UZERO };
      t.ConnectionEnd = {
        encode(e, n) {
          (void 0 === n && (n = r.default.Writer.create()),
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
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === n ? o.len : o.pos + n;
          const s = Object.assign({}, l);
          s.versions = [];
          while (o.pos < i) {
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
              ? (n.delayPeriod = i.default.fromString(e.delayPeriod))
              : (n.delayPeriod = i.default.UZERO),
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
              (n.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
            n
          );
        },
        fromPartial(e) {
          var n, o;
          const r = Object.assign({}, l);
          if (
            ((r.clientId = null !== (n = e.clientId) && void 0 !== n ? n : ""),
            (r.versions = []),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const i of e.versions)
              r.versions.push(t.Version.fromPartial(i));
          return (
            (r.state = null !== (o = e.state) && void 0 !== o ? o : 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (r.counterparty = t.Counterparty.fromPartial(e.counterparty))
              : (r.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (r.delayPeriod = e.delayPeriod)
              : (r.delayPeriod = i.default.UZERO),
            r
          );
        },
      };
      const u = {
        id: "",
        clientId: "",
        state: 0,
        delayPeriod: i.default.UZERO,
      };
      t.IdentifiedConnection = {
        encode(e, n) {
          (void 0 === n && (n = r.default.Writer.create()),
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
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === n ? o.len : o.pos + n;
          const s = Object.assign({}, u);
          s.versions = [];
          while (o.pos < i) {
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
              ? (n.delayPeriod = i.default.fromString(e.delayPeriod))
              : (n.delayPeriod = i.default.UZERO),
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
              (n.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
            n
          );
        },
        fromPartial(e) {
          var n, o, r;
          const s = Object.assign({}, u);
          if (
            ((s.id = null !== (n = e.id) && void 0 !== n ? n : ""),
            (s.clientId = null !== (o = e.clientId) && void 0 !== o ? o : ""),
            (s.versions = []),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const i of e.versions)
              s.versions.push(t.Version.fromPartial(i));
          return (
            (s.state = null !== (r = e.state) && void 0 !== r ? r : 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (s.counterparty = t.Counterparty.fromPartial(e.counterparty))
              : (s.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (s.delayPeriod = e.delayPeriod)
              : (s.delayPeriod = i.default.UZERO),
            s
          );
        },
      };
      const f = { clientId: "", connectionId: "" };
      t.Counterparty = {
        encode(e, t) {
          return (
            void 0 === t && (t = r.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId),
            "" !== e.connectionId && t.uint32(18).string(e.connectionId),
            void 0 !== e.prefix &&
              s.MerklePrefix.encode(e.prefix, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, f);
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.clientId = n.string();
                break;
              case 2:
                i.connectionId = n.string();
                break;
              case 3:
                i.prefix = s.MerklePrefix.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
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
          var t, n;
          const o = Object.assign({}, f);
          return (
            (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
            (o.connectionId =
              null !== (n = e.connectionId) && void 0 !== n ? n : ""),
            void 0 !== e.prefix && null !== e.prefix
              ? (o.prefix = s.MerklePrefix.fromPartial(e.prefix))
              : (o.prefix = void 0),
            o
          );
        },
      };
      const p = { paths: "" };
      t.ClientPaths = {
        encode(e, t) {
          void 0 === t && (t = r.default.Writer.create());
          for (const n of e.paths) t.uint32(10).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, p);
          i.paths = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.paths.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
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
          const t = Object.assign({}, p);
          if (((t.paths = []), void 0 !== e.paths && null !== e.paths))
            for (const n of e.paths) t.paths.push(n);
          return t;
        },
      };
      const g = { clientId: "", paths: "" };
      t.ConnectionPaths = {
        encode(e, t) {
          (void 0 === t && (t = r.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId));
          for (const n of e.paths) t.uint32(18).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, g);
          i.paths = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.clientId = n.string();
                break;
              case 2:
                i.paths.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
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
          var t;
          const n = Object.assign({}, g);
          if (
            ((n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
            (n.paths = []),
            void 0 !== e.paths && null !== e.paths)
          )
            for (const o of e.paths) n.paths.push(o);
          return n;
        },
      };
      const v = { identifier: "", features: "" };
      ((t.Version = {
        encode(e, t) {
          (void 0 === t && (t = r.default.Writer.create()),
            "" !== e.identifier && t.uint32(10).string(e.identifier));
          for (const n of e.features) t.uint32(18).string(n);
          return t;
        },
        decode(e, t) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let o = void 0 === t ? n.len : n.pos + t;
          const i = Object.assign({}, v);
          i.features = [];
          while (n.pos < o) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.identifier = n.string();
                break;
              case 2:
                i.features.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
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
          var t;
          const n = Object.assign({}, v);
          if (
            ((n.identifier =
              null !== (t = e.identifier) && void 0 !== t ? t : ""),
            (n.features = []),
            void 0 !== e.features && null !== e.features)
          )
            for (const o of e.features) n.features.push(o);
          return n;
        },
      }),
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure()));
    },
    3570: function (e, t, n) {
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
        const i = o(n(2754)),
          r = o(n(2755)),
          s = n(3571);
        t.protobufPackage = "ibc.core.commitment.v1";
        const a = {};
        t.MerkleRoot = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.hash.length && t.uint32(10).bytes(e.hash),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, a);
            i.hash = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.hash = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            return (
              (t.hash = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash && (t.hash = p(e.hash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.hash &&
                (t.hash = v(void 0 !== e.hash ? e.hash : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, a);
            return (
              (n.hash =
                null !== (t = e.hash) && void 0 !== t ? t : new Uint8Array()),
              n
            );
          },
        };
        const d = {};
        t.MerklePrefix = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.keyPrefix.length && t.uint32(10).bytes(e.keyPrefix),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, d);
            i.keyPrefix = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.keyPrefix = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              (t.keyPrefix = new Uint8Array()),
              void 0 !== e.keyPrefix &&
                null !== e.keyPrefix &&
                (t.keyPrefix = p(e.keyPrefix)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.keyPrefix &&
                (t.keyPrefix = v(
                  void 0 !== e.keyPrefix ? e.keyPrefix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, d);
            return (
              (n.keyPrefix =
                null !== (t = e.keyPrefix) && void 0 !== t
                  ? t
                  : new Uint8Array()),
              n
            );
          },
        };
        const c = { keyPath: "" };
        t.MerklePath = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const n of e.keyPath) t.uint32(10).string(n);
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, c);
            i.keyPath = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.keyPath.push(n.string());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
            void 0 === t && (t = r.default.Writer.create());
            for (const n of e.proofs)
              s.CommitmentProof.encode(n, t.uint32(10).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, l);
            i.proofs = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.proofs.push(s.CommitmentProof.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        const f =
          u.atob || ((e) => u.Buffer.from(e, "base64").toString("binary"));
        function p(e) {
          const t = f(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const g =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function v(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return g(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, n(13));
    },
    4438: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.QueryClientImpl =
            t.QueryClientParamsResponse =
            t.QueryClientParamsRequest =
            t.QueryConsensusStatesResponse =
            t.QueryConsensusStatesRequest =
            t.QueryConsensusStateResponse =
            t.QueryConsensusStateRequest =
            t.QueryClientStatesResponse =
            t.QueryClientStatesRequest =
            t.QueryClientStateResponse =
            t.QueryClientStateRequest =
            t.protobufPackage =
              void 0));
        const i = o(n(2754)),
          r = o(n(2755)),
          s = n(2781),
          a = n(2927),
          d = n(2926);
        t.protobufPackage = "ibc.core.client.v1";
        const c = { clientId: "" };
        t.QueryClientStateRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, c);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.clientId && (t.clientId = e.clientId), t);
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, c);
            return (
              (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              n
            );
          },
        };
        const l = {};
        t.QueryClientStateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.clientState &&
                s.Any.encode(e.clientState, t.uint32(10).fork()).ldelim(),
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, l);
            i.proof = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientState = s.Any.decode(n, n.uint32());
                  break;
                case 2:
                  i.proof = n.bytes();
                  break;
                case 3:
                  i.proofHeight = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = s.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.proof && null !== e.proof && (t.proof = O(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = a.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? s.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.proof &&
                (t.proof = I(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? a.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, l);
            return (
              void 0 !== e.clientState && null !== e.clientState
                ? (n.clientState = s.Any.fromPartial(e.clientState))
                : (n.clientState = void 0),
              (n.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (n.proofHeight = a.Height.fromPartial(e.proofHeight))
                : (n.proofHeight = void 0),
              n
            );
          },
        };
        const u = {};
        t.QueryClientStatesRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.pagination &&
                d.PageRequest.encode(
                  e.pagination,
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, u);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.pagination = d.PageRequest.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageRequest.fromJSON(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageRequest.toJSON(e.pagination)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageRequest.fromPartial(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
        };
        const f = {};
        t.QueryClientStatesResponse = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const n of e.clientStates)
              a.IdentifiedClientState.encode(n, t.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.pagination &&
                d.PageResponse.encode(
                  e.pagination,
                  t.uint32(18).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, f);
            i.clientStates = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientStates.push(
                    a.IdentifiedClientState.decode(n, n.uint32()),
                  );
                  break;
                case 2:
                  i.pagination = d.PageResponse.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            if (
              ((t.clientStates = []),
              void 0 !== e.clientStates && null !== e.clientStates)
            )
              for (const n of e.clientStates)
                t.clientStates.push(a.IdentifiedClientState.fromJSON(n));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromJSON(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.clientStates
                ? (t.clientStates = e.clientStates.map((e) =>
                    e ? a.IdentifiedClientState.toJSON(e) : void 0,
                  ))
                : (t.clientStates = []),
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageResponse.toJSON(e.pagination)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            if (
              ((t.clientStates = []),
              void 0 !== e.clientStates && null !== e.clientStates)
            )
              for (const n of e.clientStates)
                t.clientStates.push(a.IdentifiedClientState.fromPartial(n));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromPartial(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
        };
        const p = {
          clientId: "",
          revisionNumber: i.default.UZERO,
          revisionHeight: i.default.UZERO,
          latestHeight: !1,
        };
        t.QueryConsensusStateRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              e.revisionNumber.isZero() ||
                t.uint32(16).uint64(e.revisionNumber),
              e.revisionHeight.isZero() ||
                t.uint32(24).uint64(e.revisionHeight),
              !0 === e.latestHeight && t.uint32(32).bool(e.latestHeight),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, p);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.revisionNumber = n.uint64();
                  break;
                case 3:
                  i.revisionHeight = n.uint64();
                  break;
                case 4:
                  i.latestHeight = n.bool();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.revisionNumber && null !== e.revisionNumber
                ? (t.revisionNumber = i.default.fromString(e.revisionNumber))
                : (t.revisionNumber = i.default.UZERO),
              void 0 !== e.revisionHeight && null !== e.revisionHeight
                ? (t.revisionHeight = i.default.fromString(e.revisionHeight))
                : (t.revisionHeight = i.default.UZERO),
              void 0 !== e.latestHeight && null !== e.latestHeight
                ? (t.latestHeight = Boolean(e.latestHeight))
                : (t.latestHeight = !1),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.revisionNumber &&
                (t.revisionNumber = (
                  e.revisionNumber || i.default.UZERO
                ).toString()),
              void 0 !== e.revisionHeight &&
                (t.revisionHeight = (
                  e.revisionHeight || i.default.UZERO
                ).toString()),
              void 0 !== e.latestHeight && (t.latestHeight = e.latestHeight),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, p);
            return (
              (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.revisionNumber && null !== e.revisionNumber
                ? (o.revisionNumber = e.revisionNumber)
                : (o.revisionNumber = i.default.UZERO),
              void 0 !== e.revisionHeight && null !== e.revisionHeight
                ? (o.revisionHeight = e.revisionHeight)
                : (o.revisionHeight = i.default.UZERO),
              (o.latestHeight =
                null !== (n = e.latestHeight) && void 0 !== n && n),
              o
            );
          },
        };
        const g = {};
        t.QueryConsensusStateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.consensusState &&
                s.Any.encode(e.consensusState, t.uint32(10).fork()).ldelim(),
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, g);
            i.proof = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.consensusState = s.Any.decode(n, n.uint32());
                  break;
                case 2:
                  i.proof = n.bytes();
                  break;
                case 3:
                  i.proofHeight = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = s.Any.fromJSON(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.proof && null !== e.proof && (t.proof = O(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = a.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? s.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.proof &&
                (t.proof = I(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? a.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, g);
            return (
              void 0 !== e.consensusState && null !== e.consensusState
                ? (n.consensusState = s.Any.fromPartial(e.consensusState))
                : (n.consensusState = void 0),
              (n.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (n.proofHeight = a.Height.fromPartial(e.proofHeight))
                : (n.proofHeight = void 0),
              n
            );
          },
        };
        const v = { clientId: "" };
        t.QueryConsensusStatesRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.pagination &&
                d.PageRequest.encode(
                  e.pagination,
                  t.uint32(18).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, v);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.pagination = d.PageRequest.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageRequest.fromJSON(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageRequest.toJSON(e.pagination)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, v);
            return (
              (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.pagination && null !== e.pagination
                ? (n.pagination = d.PageRequest.fromPartial(e.pagination))
                : (n.pagination = void 0),
              n
            );
          },
        };
        const h = {};
        t.QueryConsensusStatesResponse = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const n of e.consensusStates)
              a.ConsensusStateWithHeight.encode(
                n,
                t.uint32(10).fork(),
              ).ldelim();
            return (
              void 0 !== e.pagination &&
                d.PageResponse.encode(
                  e.pagination,
                  t.uint32(18).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, h);
            i.consensusStates = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.consensusStates.push(
                    a.ConsensusStateWithHeight.decode(n, n.uint32()),
                  );
                  break;
                case 2:
                  i.pagination = d.PageResponse.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            if (
              ((t.consensusStates = []),
              void 0 !== e.consensusStates && null !== e.consensusStates)
            )
              for (const n of e.consensusStates)
                t.consensusStates.push(a.ConsensusStateWithHeight.fromJSON(n));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromJSON(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.consensusStates
                ? (t.consensusStates = e.consensusStates.map((e) =>
                    e ? a.ConsensusStateWithHeight.toJSON(e) : void 0,
                  ))
                : (t.consensusStates = []),
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageResponse.toJSON(e.pagination)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            if (
              ((t.consensusStates = []),
              void 0 !== e.consensusStates && null !== e.consensusStates)
            )
              for (const n of e.consensusStates)
                t.consensusStates.push(
                  a.ConsensusStateWithHeight.fromPartial(n),
                );
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromPartial(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
        };
        const S = {};
        t.QueryClientParamsRequest = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, S);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return t;
          },
        };
        const b = {};
        t.QueryClientParamsResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.params &&
                a.Params.encode(e.params, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, b);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.params = a.Params.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.params && null !== e.params
                ? (t.params = a.Params.fromJSON(e.params))
                : (t.params = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.params &&
                (t.params = e.params ? a.Params.toJSON(e.params) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.params && null !== e.params
                ? (t.params = a.Params.fromPartial(e.params))
                : (t.params = void 0),
              t
            );
          },
        };
        class QueryClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.ClientState = this.ClientState.bind(this)),
              (this.ClientStates = this.ClientStates.bind(this)),
              (this.ConsensusState = this.ConsensusState.bind(this)),
              (this.ConsensusStates = this.ConsensusStates.bind(this)),
              (this.ClientParams = this.ClientParams.bind(this)));
          }
          ClientState(e) {
            const n = t.QueryClientStateRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Query",
                "ClientState",
                n,
              );
            return o.then((e) =>
              t.QueryClientStateResponse.decode(new r.default.Reader(e)),
            );
          }
          ClientStates(e) {
            const n = t.QueryClientStatesRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Query",
                "ClientStates",
                n,
              );
            return o.then((e) =>
              t.QueryClientStatesResponse.decode(new r.default.Reader(e)),
            );
          }
          ConsensusState(e) {
            const n = t.QueryConsensusStateRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Query",
                "ConsensusState",
                n,
              );
            return o.then((e) =>
              t.QueryConsensusStateResponse.decode(new r.default.Reader(e)),
            );
          }
          ConsensusStates(e) {
            const n = t.QueryConsensusStatesRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Query",
                "ConsensusStates",
                n,
              );
            return o.then((e) =>
              t.QueryConsensusStatesResponse.decode(new r.default.Reader(e)),
            );
          }
          ClientParams(e) {
            const n = t.QueryClientParamsRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Query",
                "ClientParams",
                n,
              );
            return o.then((e) =>
              t.QueryClientParamsResponse.decode(new r.default.Reader(e)),
            );
          }
        }
        t.QueryClientImpl = QueryClientImpl;
        var y = (() => {
          if ("undefined" !== typeof y) return y;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const m =
          y.atob || ((e) => y.Buffer.from(e, "base64").toString("binary"));
        function O(e) {
          const t = m(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const C =
          y.btoa || ((e) => y.Buffer.from(e, "binary").toString("base64"));
        function I(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return C(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, n(13));
    },
    4439: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.QueryClientImpl =
            t.QueryConnectionConsensusStateResponse =
            t.QueryConnectionConsensusStateRequest =
            t.QueryConnectionClientStateResponse =
            t.QueryConnectionClientStateRequest =
            t.QueryClientConnectionsResponse =
            t.QueryClientConnectionsRequest =
            t.QueryConnectionsResponse =
            t.QueryConnectionsRequest =
            t.QueryConnectionResponse =
            t.QueryConnectionRequest =
            t.protobufPackage =
              void 0));
        const i = o(n(2754)),
          r = o(n(2755)),
          s = n(3569),
          a = n(2927),
          d = n(2926),
          c = n(2781);
        t.protobufPackage = "ibc.core.connection.v1";
        const l = { connectionId: "" };
        t.QueryConnectionRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, l);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connectionId && (t.connectionId = e.connectionId),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, l);
            return (
              (n.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              n
            );
          },
        };
        const u = {};
        t.QueryConnectionResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.connection &&
                s.ConnectionEnd.encode(
                  e.connection,
                  t.uint32(10).fork(),
                ).ldelim(),
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, u);
            i.proof = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connection = s.ConnectionEnd.decode(n, n.uint32());
                  break;
                case 2:
                  i.proof = n.bytes();
                  break;
                case 3:
                  i.proofHeight = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.connection && null !== e.connection
                ? (t.connection = s.ConnectionEnd.fromJSON(e.connection))
                : (t.connection = void 0),
              void 0 !== e.proof && null !== e.proof && (t.proof = C(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = a.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connection &&
                (t.connection = e.connection
                  ? s.ConnectionEnd.toJSON(e.connection)
                  : void 0),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? a.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, u);
            return (
              void 0 !== e.connection && null !== e.connection
                ? (n.connection = s.ConnectionEnd.fromPartial(e.connection))
                : (n.connection = void 0),
              (n.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (n.proofHeight = a.Height.fromPartial(e.proofHeight))
                : (n.proofHeight = void 0),
              n
            );
          },
        };
        const f = {};
        t.QueryConnectionsRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.pagination &&
                d.PageRequest.encode(
                  e.pagination,
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, f);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.pagination = d.PageRequest.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageRequest.fromJSON(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageRequest.toJSON(e.pagination)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageRequest.fromPartial(e.pagination))
                : (t.pagination = void 0),
              t
            );
          },
        };
        const p = {};
        t.QueryConnectionsResponse = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const n of e.connections)
              s.IdentifiedConnection.encode(n, t.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.pagination &&
                d.PageResponse.encode(
                  e.pagination,
                  t.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.height &&
                a.Height.encode(e.height, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, p);
            i.connections = [];
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connections.push(
                    s.IdentifiedConnection.decode(n, n.uint32()),
                  );
                  break;
                case 2:
                  i.pagination = d.PageResponse.decode(n, n.uint32());
                  break;
                case 3:
                  i.height = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            if (
              ((t.connections = []),
              void 0 !== e.connections && null !== e.connections)
            )
              for (const n of e.connections)
                t.connections.push(s.IdentifiedConnection.fromJSON(n));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromJSON(e.pagination))
                : (t.pagination = void 0),
              void 0 !== e.height && null !== e.height
                ? (t.height = a.Height.fromJSON(e.height))
                : (t.height = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.connections
                ? (t.connections = e.connections.map((e) =>
                    e ? s.IdentifiedConnection.toJSON(e) : void 0,
                  ))
                : (t.connections = []),
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageResponse.toJSON(e.pagination)
                  : void 0),
              void 0 !== e.height &&
                (t.height = e.height ? a.Height.toJSON(e.height) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            if (
              ((t.connections = []),
              void 0 !== e.connections && null !== e.connections)
            )
              for (const n of e.connections)
                t.connections.push(s.IdentifiedConnection.fromPartial(n));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromPartial(e.pagination))
                : (t.pagination = void 0),
              void 0 !== e.height && null !== e.height
                ? (t.height = a.Height.fromPartial(e.height))
                : (t.height = void 0),
              t
            );
          },
        };
        const g = { clientId: "" };
        t.QueryClientConnectionsRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, g);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.clientId && (t.clientId = e.clientId), t);
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, g);
            return (
              (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              n
            );
          },
        };
        const v = { connectionPaths: "" };
        t.QueryClientConnectionsResponse = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const n of e.connectionPaths) t.uint32(10).string(n);
            return (
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, v);
            ((i.connectionPaths = []), (i.proof = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionPaths.push(n.string());
                  break;
                case 2:
                  i.proof = n.bytes();
                  break;
                case 3:
                  i.proofHeight = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            if (
              ((t.connectionPaths = []),
              (t.proof = new Uint8Array()),
              void 0 !== e.connectionPaths && null !== e.connectionPaths)
            )
              for (const n of e.connectionPaths)
                t.connectionPaths.push(String(n));
            return (
              void 0 !== e.proof && null !== e.proof && (t.proof = C(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = a.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.connectionPaths
                ? (t.connectionPaths = e.connectionPaths.map((e) => e))
                : (t.connectionPaths = []),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? a.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, v);
            if (
              ((n.connectionPaths = []),
              void 0 !== e.connectionPaths && null !== e.connectionPaths)
            )
              for (const o of e.connectionPaths) n.connectionPaths.push(o);
            return (
              (n.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (n.proofHeight = a.Height.fromPartial(e.proofHeight))
                : (n.proofHeight = void 0),
              n
            );
          },
        };
        const h = { connectionId: "" };
        t.QueryConnectionClientStateRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, h);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connectionId && (t.connectionId = e.connectionId),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, h);
            return (
              (n.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              n
            );
          },
        };
        const S = {};
        t.QueryConnectionClientStateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.identifiedClientState &&
                a.IdentifiedClientState.encode(
                  e.identifiedClientState,
                  t.uint32(10).fork(),
                ).ldelim(),
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, S);
            i.proof = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.identifiedClientState = a.IdentifiedClientState.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 2:
                  i.proof = n.bytes();
                  break;
                case 3:
                  i.proofHeight = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.identifiedClientState &&
              null !== e.identifiedClientState
                ? (t.identifiedClientState = a.IdentifiedClientState.fromJSON(
                    e.identifiedClientState,
                  ))
                : (t.identifiedClientState = void 0),
              void 0 !== e.proof && null !== e.proof && (t.proof = C(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = a.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.identifiedClientState &&
                (t.identifiedClientState = e.identifiedClientState
                  ? a.IdentifiedClientState.toJSON(e.identifiedClientState)
                  : void 0),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? a.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, S);
            return (
              void 0 !== e.identifiedClientState &&
              null !== e.identifiedClientState
                ? (n.identifiedClientState =
                    a.IdentifiedClientState.fromPartial(
                      e.identifiedClientState,
                    ))
                : (n.identifiedClientState = void 0),
              (n.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (n.proofHeight = a.Height.fromPartial(e.proofHeight))
                : (n.proofHeight = void 0),
              n
            );
          },
        };
        const b = {
          connectionId: "",
          revisionNumber: i.default.UZERO,
          revisionHeight: i.default.UZERO,
        };
        t.QueryConnectionConsensusStateRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              e.revisionNumber.isZero() ||
                t.uint32(16).uint64(e.revisionNumber),
              e.revisionHeight.isZero() ||
                t.uint32(24).uint64(e.revisionHeight),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, b);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = n.string();
                  break;
                case 2:
                  i.revisionNumber = n.uint64();
                  break;
                case 3:
                  i.revisionHeight = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              void 0 !== e.revisionNumber && null !== e.revisionNumber
                ? (t.revisionNumber = i.default.fromString(e.revisionNumber))
                : (t.revisionNumber = i.default.UZERO),
              void 0 !== e.revisionHeight && null !== e.revisionHeight
                ? (t.revisionHeight = i.default.fromString(e.revisionHeight))
                : (t.revisionHeight = i.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connectionId && (t.connectionId = e.connectionId),
              void 0 !== e.revisionNumber &&
                (t.revisionNumber = (
                  e.revisionNumber || i.default.UZERO
                ).toString()),
              void 0 !== e.revisionHeight &&
                (t.revisionHeight = (
                  e.revisionHeight || i.default.UZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, b);
            return (
              (n.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              void 0 !== e.revisionNumber && null !== e.revisionNumber
                ? (n.revisionNumber = e.revisionNumber)
                : (n.revisionNumber = i.default.UZERO),
              void 0 !== e.revisionHeight && null !== e.revisionHeight
                ? (n.revisionHeight = e.revisionHeight)
                : (n.revisionHeight = i.default.UZERO),
              n
            );
          },
        };
        const y = { clientId: "" };
        t.QueryConnectionConsensusStateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.consensusState &&
                c.Any.encode(e.consensusState, t.uint32(10).fork()).ldelim(),
              "" !== e.clientId && t.uint32(18).string(e.clientId),
              0 !== e.proof.length && t.uint32(26).bytes(e.proof),
              void 0 !== e.proofHeight &&
                a.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, y);
            i.proof = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.consensusState = c.Any.decode(n, n.uint32());
                  break;
                case 2:
                  i.clientId = n.string();
                  break;
                case 3:
                  i.proof = n.bytes();
                  break;
                case 4:
                  i.proofHeight = a.Height.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, y);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = c.Any.fromJSON(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.proof && null !== e.proof && (t.proof = C(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = a.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? c.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? a.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, y);
            return (
              void 0 !== e.consensusState && null !== e.consensusState
                ? (o.consensusState = c.Any.fromPartial(e.consensusState))
                : (o.consensusState = void 0),
              (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              (o.proof =
                null !== (n = e.proof) && void 0 !== n ? n : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (o.proofHeight = a.Height.fromPartial(e.proofHeight))
                : (o.proofHeight = void 0),
              o
            );
          },
        };
        class QueryClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.Connection = this.Connection.bind(this)),
              (this.Connections = this.Connections.bind(this)),
              (this.ClientConnections = this.ClientConnections.bind(this)),
              (this.ConnectionClientState =
                this.ConnectionClientState.bind(this)),
              (this.ConnectionConsensusState =
                this.ConnectionConsensusState.bind(this)));
          }
          Connection(e) {
            const n = t.QueryConnectionRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "Connection",
                n,
              );
            return o.then((e) =>
              t.QueryConnectionResponse.decode(new r.default.Reader(e)),
            );
          }
          Connections(e) {
            const n = t.QueryConnectionsRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "Connections",
                n,
              );
            return o.then((e) =>
              t.QueryConnectionsResponse.decode(new r.default.Reader(e)),
            );
          }
          ClientConnections(e) {
            const n = t.QueryClientConnectionsRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "ClientConnections",
                n,
              );
            return o.then((e) =>
              t.QueryClientConnectionsResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionClientState(e) {
            const n = t.QueryConnectionClientStateRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "ConnectionClientState",
                n,
              );
            return o.then((e) =>
              t.QueryConnectionClientStateResponse.decode(
                new r.default.Reader(e),
              ),
            );
          }
          ConnectionConsensusState(e) {
            const n = t.QueryConnectionConsensusStateRequest.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "ConnectionConsensusState",
                n,
              );
            return o.then((e) =>
              t.QueryConnectionConsensusStateResponse.decode(
                new r.default.Reader(e),
              ),
            );
          }
        }
        t.QueryClientImpl = QueryClientImpl;
        var m = (() => {
          if ("undefined" !== typeof m) return m;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const O =
          m.atob || ((e) => m.Buffer.from(e, "base64").toString("binary"));
        function C(e) {
          const t = O(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const I =
          m.btoa || ((e) => m.Buffer.from(e, "binary").toString("base64"));
        function H(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return I(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, n(13));
    },
    4440: function (e, t, n) {
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
        const i = o(n(2754)),
          r = o(n(2755)),
          s = n(3325),
          a = n(2927),
          d = n(3570),
          c = n(3572),
          l = n(3573),
          u = n(3064),
          f = n(3571);
        t.protobufPackage = "ibc.lightclients.tendermint.v1";
        const p = {
          chainId: "",
          upgradePath: "",
          allowUpdateAfterExpiry: !1,
          allowUpdateAfterMisbehaviour: !1,
        };
        t.ClientState = {
          encode(e, n) {
            (void 0 === n && (n = r.default.Writer.create()),
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
              f.ProofSpec.encode(t, n.uint32(66).fork()).ldelim();
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
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === n ? o.len : o.pos + n;
            const d = Object.assign({}, p);
            ((d.proofSpecs = []), (d.upgradePath = []));
            while (o.pos < i) {
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
                  d.proofSpecs.push(f.ProofSpec.decode(o, o.uint32()));
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
            const n = Object.assign({}, p);
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
                n.proofSpecs.push(f.ProofSpec.fromJSON(t));
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
                    e ? f.ProofSpec.toJSON(e) : void 0,
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
            var n, o, i;
            const r = Object.assign({}, p);
            if (
              ((r.chainId = null !== (n = e.chainId) && void 0 !== n ? n : ""),
              void 0 !== e.trustLevel && null !== e.trustLevel
                ? (r.trustLevel = t.Fraction.fromPartial(e.trustLevel))
                : (r.trustLevel = void 0),
              void 0 !== e.trustingPeriod && null !== e.trustingPeriod
                ? (r.trustingPeriod = s.Duration.fromPartial(e.trustingPeriod))
                : (r.trustingPeriod = void 0),
              void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod
                ? (r.unbondingPeriod = s.Duration.fromPartial(
                    e.unbondingPeriod,
                  ))
                : (r.unbondingPeriod = void 0),
              void 0 !== e.maxClockDrift && null !== e.maxClockDrift
                ? (r.maxClockDrift = s.Duration.fromPartial(e.maxClockDrift))
                : (r.maxClockDrift = void 0),
              void 0 !== e.frozenHeight && null !== e.frozenHeight
                ? (r.frozenHeight = a.Height.fromPartial(e.frozenHeight))
                : (r.frozenHeight = void 0),
              void 0 !== e.latestHeight && null !== e.latestHeight
                ? (r.latestHeight = a.Height.fromPartial(e.latestHeight))
                : (r.latestHeight = void 0),
              (r.proofSpecs = []),
              void 0 !== e.proofSpecs && null !== e.proofSpecs)
            )
              for (const t of e.proofSpecs)
                r.proofSpecs.push(f.ProofSpec.fromPartial(t));
            if (
              ((r.upgradePath = []),
              void 0 !== e.upgradePath && null !== e.upgradePath)
            )
              for (const t of e.upgradePath) r.upgradePath.push(t);
            return (
              (r.allowUpdateAfterExpiry =
                null !== (o = e.allowUpdateAfterExpiry) && void 0 !== o && o),
              (r.allowUpdateAfterMisbehaviour =
                null !== (i = e.allowUpdateAfterMisbehaviour) &&
                void 0 !== i &&
                i),
              r
            );
          },
        };
        const g = {};
        t.ConsensusState = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.timestamp &&
                u.Timestamp.encode(
                  I(e.timestamp),
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
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, g);
            i.nextValidatorsHash = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.timestamp = H(u.Timestamp.decode(n, n.uint32()));
                  break;
                case 2:
                  i.root = d.MerkleRoot.decode(n, n.uint32());
                  break;
                case 3:
                  i.nextValidatorsHash = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              (t.nextValidatorsHash = new Uint8Array()),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = k(e.timestamp))
                : (t.timestamp = void 0),
              void 0 !== e.root && null !== e.root
                ? (t.root = d.MerkleRoot.fromJSON(e.root))
                : (t.root = void 0),
              void 0 !== e.nextValidatorsHash &&
                null !== e.nextValidatorsHash &&
                (t.nextValidatorsHash = m(e.nextValidatorsHash)),
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
                (t.nextValidatorsHash = C(
                  void 0 !== e.nextValidatorsHash
                    ? e.nextValidatorsHash
                    : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, g);
            return (
              (o.timestamp =
                null !== (t = e.timestamp) && void 0 !== t ? t : void 0),
              void 0 !== e.root && null !== e.root
                ? (o.root = d.MerkleRoot.fromPartial(e.root))
                : (o.root = void 0),
              (o.nextValidatorsHash =
                null !== (n = e.nextValidatorsHash) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              o
            );
          },
        };
        const v = { clientId: "" };
        t.Misbehaviour = {
          encode(e, n) {
            return (
              void 0 === n && (n = r.default.Writer.create()),
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
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === n ? o.len : o.pos + n;
            const s = Object.assign({}, v);
            while (o.pos < i) {
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
            const n = Object.assign({}, v);
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
            var n;
            const o = Object.assign({}, v);
            return (
              (o.clientId = null !== (n = e.clientId) && void 0 !== n ? n : ""),
              void 0 !== e.header1 && null !== e.header1
                ? (o.header1 = t.Header.fromPartial(e.header1))
                : (o.header1 = void 0),
              void 0 !== e.header2 && null !== e.header2
                ? (o.header2 = t.Header.fromPartial(e.header2))
                : (o.header2 = void 0),
              o
            );
          },
        };
        const h = {};
        t.Header = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
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
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, h);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.signedHeader = c.SignedHeader.decode(n, n.uint32());
                  break;
                case 2:
                  i.validatorSet = l.ValidatorSet.decode(n, n.uint32());
                  break;
                case 3:
                  i.trustedHeight = a.Height.decode(n, n.uint32());
                  break;
                case 4:
                  i.trustedValidators = l.ValidatorSet.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
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
            const t = Object.assign({}, h);
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
        const S = { numerator: i.default.UZERO, denominator: i.default.UZERO };
        t.Fraction = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              e.numerator.isZero() || t.uint32(8).uint64(e.numerator),
              e.denominator.isZero() || t.uint32(16).uint64(e.denominator),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, S);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.numerator = n.uint64();
                  break;
                case 2:
                  i.denominator = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.numerator && null !== e.numerator
                ? (t.numerator = i.default.fromString(e.numerator))
                : (t.numerator = i.default.UZERO),
              void 0 !== e.denominator && null !== e.denominator
                ? (t.denominator = i.default.fromString(e.denominator))
                : (t.denominator = i.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.numerator &&
                (t.numerator = (e.numerator || i.default.UZERO).toString()),
              void 0 !== e.denominator &&
                (t.denominator = (e.denominator || i.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, S);
            return (
              void 0 !== e.numerator && null !== e.numerator
                ? (t.numerator = e.numerator)
                : (t.numerator = i.default.UZERO),
              void 0 !== e.denominator && null !== e.denominator
                ? (t.denominator = e.denominator)
                : (t.denominator = i.default.UZERO),
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
        const y =
          b.atob || ((e) => b.Buffer.from(e, "base64").toString("binary"));
        function m(e) {
          const t = y(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const O =
          b.btoa || ((e) => b.Buffer.from(e, "binary").toString("base64"));
        function C(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return O(t.join(""));
        }
        function I(e) {
          const t = P(e.getTime() / 1e3),
            n = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: n };
        }
        function H(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function k(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : H(u.Timestamp.fromJSON(e));
        }
        function P(e) {
          return i.default.fromNumber(e);
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, n(13));
    },
    4472: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MsgClientImpl =
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
        const i = o(n(2754)),
          r = o(n(2755)),
          s = n(2781);
        t.protobufPackage = "ibc.core.client.v1";
        const a = { signer: "" };
        t.MsgCreateClient = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.clientState &&
                s.Any.encode(e.clientState, t.uint32(10).fork()).ldelim(),
              void 0 !== e.consensusState &&
                s.Any.encode(e.consensusState, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, a);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientState = s.Any.decode(n, n.uint32());
                  break;
                case 2:
                  i.consensusState = s.Any.decode(n, n.uint32());
                  break;
                case 3:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            return (
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = s.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = s.Any.fromJSON(e.consensusState))
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
                  ? s.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? s.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t;
            const n = Object.assign({}, a);
            return (
              void 0 !== e.clientState && null !== e.clientState
                ? (n.clientState = s.Any.fromPartial(e.clientState))
                : (n.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (n.consensusState = s.Any.fromPartial(e.consensusState))
                : (n.consensusState = void 0),
              (n.signer = null !== (t = e.signer) && void 0 !== t ? t : ""),
              n
            );
          },
        };
        const d = {};
        t.MsgCreateClientResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, d);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return t;
          },
        };
        const c = { clientId: "", signer: "" };
        t.MsgUpdateClient = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.header &&
                s.Any.encode(e.header, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, c);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.header = s.Any.decode(n, n.uint32());
                  break;
                case 3:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.header && null !== e.header
                ? (t.header = s.Any.fromJSON(e.header))
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
                (t.header = e.header ? s.Any.toJSON(e.header) : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, c);
            return (
              (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.header && null !== e.header
                ? (o.header = s.Any.fromPartial(e.header))
                : (o.header = void 0),
              (o.signer = null !== (n = e.signer) && void 0 !== n ? n : ""),
              o
            );
          },
        };
        const l = {};
        t.MsgUpdateClientResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, l);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        t.MsgUpgradeClient = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.clientState &&
                s.Any.encode(e.clientState, t.uint32(18).fork()).ldelim(),
              void 0 !== e.consensusState &&
                s.Any.encode(e.consensusState, t.uint32(26).fork()).ldelim(),
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
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, u);
            ((i.proofUpgradeClient = new Uint8Array()),
              (i.proofUpgradeConsensusState = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.clientState = s.Any.decode(n, n.uint32());
                  break;
                case 3:
                  i.consensusState = s.Any.decode(n, n.uint32());
                  break;
                case 4:
                  i.proofUpgradeClient = n.bytes();
                  break;
                case 5:
                  i.proofUpgradeConsensusState = n.bytes();
                  break;
                case 6:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              (t.proofUpgradeClient = new Uint8Array()),
              (t.proofUpgradeConsensusState = new Uint8Array()),
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = s.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = s.Any.fromJSON(e.consensusState))
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
                  ? s.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? s.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.proofUpgradeClient &&
                (t.proofUpgradeClient = y(
                  void 0 !== e.proofUpgradeClient
                    ? e.proofUpgradeClient
                    : new Uint8Array(),
                )),
              void 0 !== e.proofUpgradeConsensusState &&
                (t.proofUpgradeConsensusState = y(
                  void 0 !== e.proofUpgradeConsensusState
                    ? e.proofUpgradeConsensusState
                    : new Uint8Array(),
                )),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, n, o, i;
            const r = Object.assign({}, u);
            return (
              (r.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (r.clientState = s.Any.fromPartial(e.clientState))
                : (r.clientState = void 0),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (r.consensusState = s.Any.fromPartial(e.consensusState))
                : (r.consensusState = void 0),
              (r.proofUpgradeClient =
                null !== (n = e.proofUpgradeClient) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              (r.proofUpgradeConsensusState =
                null !== (o = e.proofUpgradeConsensusState) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              (r.signer = null !== (i = e.signer) && void 0 !== i ? i : ""),
              r
            );
          },
        };
        const f = {};
        t.MsgUpgradeClientResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, f);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        const p = { clientId: "", signer: "" };
        t.MsgSubmitMisbehaviour = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.misbehaviour &&
                s.Any.encode(e.misbehaviour, t.uint32(18).fork()).ldelim(),
              "" !== e.signer && t.uint32(26).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, p);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.misbehaviour = s.Any.decode(n, n.uint32());
                  break;
                case 3:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.misbehaviour && null !== e.misbehaviour
                ? (t.misbehaviour = s.Any.fromJSON(e.misbehaviour))
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
                  ? s.Any.toJSON(e.misbehaviour)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, p);
            return (
              (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.misbehaviour && null !== e.misbehaviour
                ? (o.misbehaviour = s.Any.fromPartial(e.misbehaviour))
                : (o.misbehaviour = void 0),
              (o.signer = null !== (n = e.signer) && void 0 !== n ? n : ""),
              o
            );
          },
        };
        const g = {};
        t.MsgSubmitMisbehaviourResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, g);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.CreateClient = this.CreateClient.bind(this)),
              (this.UpdateClient = this.UpdateClient.bind(this)),
              (this.UpgradeClient = this.UpgradeClient.bind(this)),
              (this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this)));
          }
          CreateClient(e) {
            const n = t.MsgCreateClient.encode(e).finish(),
              o = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", n);
            return o.then((e) =>
              t.MsgCreateClientResponse.decode(new r.default.Reader(e)),
            );
          }
          UpdateClient(e) {
            const n = t.MsgUpdateClient.encode(e).finish(),
              o = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", n);
            return o.then((e) =>
              t.MsgUpdateClientResponse.decode(new r.default.Reader(e)),
            );
          }
          UpgradeClient(e) {
            const n = t.MsgUpgradeClient.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Msg",
                "UpgradeClient",
                n,
              );
            return o.then((e) =>
              t.MsgUpgradeClientResponse.decode(new r.default.Reader(e)),
            );
          }
          SubmitMisbehaviour(e) {
            const n = t.MsgSubmitMisbehaviour.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.client.v1.Msg",
                "SubmitMisbehaviour",
                n,
              );
            return o.then((e) =>
              t.MsgSubmitMisbehaviourResponse.decode(new r.default.Reader(e)),
            );
          }
        }
        t.MsgClientImpl = MsgClientImpl;
        var v = (() => {
          if ("undefined" !== typeof v) return v;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const h =
          v.atob || ((e) => v.Buffer.from(e, "base64").toString("binary"));
        function S(e) {
          const t = h(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const b =
          v.btoa || ((e) => v.Buffer.from(e, "binary").toString("base64"));
        function y(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return b(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, n(13));
    },
    4473: function (e, t, n) {
      "use strict";
      (function (e) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MsgClientImpl =
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
        const i = o(n(2754)),
          r = o(n(2755)),
          s = n(3569),
          a = n(2781),
          d = n(2927);
        t.protobufPackage = "ibc.core.connection.v1";
        const c = { clientId: "", delayPeriod: i.default.UZERO, signer: "" };
        t.MsgConnectionOpenInit = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              void 0 !== e.counterparty &&
                s.Counterparty.encode(
                  e.counterparty,
                  t.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.version &&
                s.Version.encode(e.version, t.uint32(26).fork()).ldelim(),
              e.delayPeriod.isZero() || t.uint32(32).uint64(e.delayPeriod),
              "" !== e.signer && t.uint32(42).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, c);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.counterparty = s.Counterparty.decode(n, n.uint32());
                  break;
                case 3:
                  i.version = s.Version.decode(n, n.uint32());
                  break;
                case 4:
                  i.delayPeriod = n.uint64();
                  break;
                case 5:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = s.Counterparty.fromJSON(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.version && null !== e.version
                ? (t.version = s.Version.fromJSON(e.version))
                : (t.version = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = i.default.fromString(e.delayPeriod))
                : (t.delayPeriod = i.default.UZERO),
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
                  ? s.Counterparty.toJSON(e.counterparty)
                  : void 0),
              void 0 !== e.version &&
                (t.version = e.version ? s.Version.toJSON(e.version) : void 0),
              void 0 !== e.delayPeriod &&
                (t.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, n;
            const o = Object.assign({}, c);
            return (
              (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (o.counterparty = s.Counterparty.fromPartial(e.counterparty))
                : (o.counterparty = void 0),
              void 0 !== e.version && null !== e.version
                ? (o.version = s.Version.fromPartial(e.version))
                : (o.version = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (o.delayPeriod = e.delayPeriod)
                : (o.delayPeriod = i.default.UZERO),
              (o.signer = null !== (n = e.signer) && void 0 !== n ? n : ""),
              o
            );
          },
        };
        const l = {};
        t.MsgConnectionOpenInitResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, l);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        const u = {
          clientId: "",
          previousConnectionId: "",
          delayPeriod: i.default.UZERO,
          signer: "",
        };
        t.MsgConnectionOpenTry = {
          encode(e, t) {
            (void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              "" !== e.previousConnectionId &&
                t.uint32(18).string(e.previousConnectionId),
              void 0 !== e.clientState &&
                a.Any.encode(e.clientState, t.uint32(26).fork()).ldelim(),
              void 0 !== e.counterparty &&
                s.Counterparty.encode(
                  e.counterparty,
                  t.uint32(34).fork(),
                ).ldelim(),
              e.delayPeriod.isZero() || t.uint32(40).uint64(e.delayPeriod));
            for (const n of e.counterpartyVersions)
              s.Version.encode(n, t.uint32(50).fork()).ldelim();
            return (
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(58).fork()).ldelim(),
              0 !== e.proofInit.length && t.uint32(66).bytes(e.proofInit),
              0 !== e.proofClient.length && t.uint32(74).bytes(e.proofClient),
              0 !== e.proofConsensus.length &&
                t.uint32(82).bytes(e.proofConsensus),
              void 0 !== e.consensusHeight &&
                d.Height.encode(
                  e.consensusHeight,
                  t.uint32(90).fork(),
                ).ldelim(),
              "" !== e.signer && t.uint32(98).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, u);
            ((i.counterpartyVersions = []),
              (i.proofInit = new Uint8Array()),
              (i.proofClient = new Uint8Array()),
              (i.proofConsensus = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = n.string();
                  break;
                case 2:
                  i.previousConnectionId = n.string();
                  break;
                case 3:
                  i.clientState = a.Any.decode(n, n.uint32());
                  break;
                case 4:
                  i.counterparty = s.Counterparty.decode(n, n.uint32());
                  break;
                case 5:
                  i.delayPeriod = n.uint64();
                  break;
                case 6:
                  i.counterpartyVersions.push(s.Version.decode(n, n.uint32()));
                  break;
                case 7:
                  i.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 8:
                  i.proofInit = n.bytes();
                  break;
                case 9:
                  i.proofClient = n.bytes();
                  break;
                case 10:
                  i.proofConsensus = n.bytes();
                  break;
                case 11:
                  i.consensusHeight = d.Height.decode(n, n.uint32());
                  break;
                case 12:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
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
                ? (t.clientState = a.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = s.Counterparty.fromJSON(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = i.default.fromString(e.delayPeriod))
                : (t.delayPeriod = i.default.UZERO),
              void 0 !== e.counterpartyVersions &&
                null !== e.counterpartyVersions)
            )
              for (const n of e.counterpartyVersions)
                t.counterpartyVersions.push(s.Version.fromJSON(n));
            return (
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofInit &&
                null !== e.proofInit &&
                (t.proofInit = y(e.proofInit)),
              void 0 !== e.proofClient &&
                null !== e.proofClient &&
                (t.proofClient = y(e.proofClient)),
              void 0 !== e.proofConsensus &&
                null !== e.proofConsensus &&
                (t.proofConsensus = y(e.proofConsensus)),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (t.consensusHeight = d.Height.fromJSON(e.consensusHeight))
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
                  ? a.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.counterparty &&
                (t.counterparty = e.counterparty
                  ? s.Counterparty.toJSON(e.counterparty)
                  : void 0),
              void 0 !== e.delayPeriod &&
                (t.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
              e.counterpartyVersions
                ? (t.counterpartyVersions = e.counterpartyVersions.map((e) =>
                    e ? s.Version.toJSON(e) : void 0,
                  ))
                : (t.counterpartyVersions = []),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.proofInit &&
                (t.proofInit = O(
                  void 0 !== e.proofInit ? e.proofInit : new Uint8Array(),
                )),
              void 0 !== e.proofClient &&
                (t.proofClient = O(
                  void 0 !== e.proofClient ? e.proofClient : new Uint8Array(),
                )),
              void 0 !== e.proofConsensus &&
                (t.proofConsensus = O(
                  void 0 !== e.proofConsensus
                    ? e.proofConsensus
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHeight &&
                (t.consensusHeight = e.consensusHeight
                  ? d.Height.toJSON(e.consensusHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, n, o, r, c, l;
            const f = Object.assign({}, u);
            if (
              ((f.clientId =
                null !== (t = e.clientId) && void 0 !== t ? t : ""),
              (f.previousConnectionId =
                null !== (n = e.previousConnectionId) && void 0 !== n ? n : ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (f.clientState = a.Any.fromPartial(e.clientState))
                : (f.clientState = void 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (f.counterparty = s.Counterparty.fromPartial(e.counterparty))
                : (f.counterparty = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (f.delayPeriod = e.delayPeriod)
                : (f.delayPeriod = i.default.UZERO),
              (f.counterpartyVersions = []),
              void 0 !== e.counterpartyVersions &&
                null !== e.counterpartyVersions)
            )
              for (const i of e.counterpartyVersions)
                f.counterpartyVersions.push(s.Version.fromPartial(i));
            return (
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (f.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (f.proofHeight = void 0),
              (f.proofInit =
                null !== (o = e.proofInit) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              (f.proofClient =
                null !== (r = e.proofClient) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              (f.proofConsensus =
                null !== (c = e.proofConsensus) && void 0 !== c
                  ? c
                  : new Uint8Array()),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (f.consensusHeight = d.Height.fromPartial(e.consensusHeight))
                : (f.consensusHeight = void 0),
              (f.signer = null !== (l = e.signer) && void 0 !== l ? l : ""),
              f
            );
          },
        };
        const f = {};
        t.MsgConnectionOpenTryResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, f);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        const p = {
          connectionId: "",
          counterpartyConnectionId: "",
          signer: "",
        };
        t.MsgConnectionOpenAck = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              "" !== e.counterpartyConnectionId &&
                t.uint32(18).string(e.counterpartyConnectionId),
              void 0 !== e.version &&
                s.Version.encode(e.version, t.uint32(26).fork()).ldelim(),
              void 0 !== e.clientState &&
                a.Any.encode(e.clientState, t.uint32(34).fork()).ldelim(),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(42).fork()).ldelim(),
              0 !== e.proofTry.length && t.uint32(50).bytes(e.proofTry),
              0 !== e.proofClient.length && t.uint32(58).bytes(e.proofClient),
              0 !== e.proofConsensus.length &&
                t.uint32(66).bytes(e.proofConsensus),
              void 0 !== e.consensusHeight &&
                d.Height.encode(
                  e.consensusHeight,
                  t.uint32(74).fork(),
                ).ldelim(),
              "" !== e.signer && t.uint32(82).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, p);
            ((i.proofTry = new Uint8Array()),
              (i.proofClient = new Uint8Array()),
              (i.proofConsensus = new Uint8Array()));
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = n.string();
                  break;
                case 2:
                  i.counterpartyConnectionId = n.string();
                  break;
                case 3:
                  i.version = s.Version.decode(n, n.uint32());
                  break;
                case 4:
                  i.clientState = a.Any.decode(n, n.uint32());
                  break;
                case 5:
                  i.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 6:
                  i.proofTry = n.bytes();
                  break;
                case 7:
                  i.proofClient = n.bytes();
                  break;
                case 8:
                  i.proofConsensus = n.bytes();
                  break;
                case 9:
                  i.consensusHeight = d.Height.decode(n, n.uint32());
                  break;
                case 10:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
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
                ? (t.version = s.Version.fromJSON(e.version))
                : (t.version = void 0),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = a.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofTry &&
                null !== e.proofTry &&
                (t.proofTry = y(e.proofTry)),
              void 0 !== e.proofClient &&
                null !== e.proofClient &&
                (t.proofClient = y(e.proofClient)),
              void 0 !== e.proofConsensus &&
                null !== e.proofConsensus &&
                (t.proofConsensus = y(e.proofConsensus)),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (t.consensusHeight = d.Height.fromJSON(e.consensusHeight))
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
                (t.version = e.version ? s.Version.toJSON(e.version) : void 0),
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? a.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.proofTry &&
                (t.proofTry = O(
                  void 0 !== e.proofTry ? e.proofTry : new Uint8Array(),
                )),
              void 0 !== e.proofClient &&
                (t.proofClient = O(
                  void 0 !== e.proofClient ? e.proofClient : new Uint8Array(),
                )),
              void 0 !== e.proofConsensus &&
                (t.proofConsensus = O(
                  void 0 !== e.proofConsensus
                    ? e.proofConsensus
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHeight &&
                (t.consensusHeight = e.consensusHeight
                  ? d.Height.toJSON(e.consensusHeight)
                  : void 0),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, n, o, i, r, c;
            const l = Object.assign({}, p);
            return (
              (l.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              (l.counterpartyConnectionId =
                null !== (n = e.counterpartyConnectionId) && void 0 !== n
                  ? n
                  : ""),
              void 0 !== e.version && null !== e.version
                ? (l.version = s.Version.fromPartial(e.version))
                : (l.version = void 0),
              void 0 !== e.clientState && null !== e.clientState
                ? (l.clientState = a.Any.fromPartial(e.clientState))
                : (l.clientState = void 0),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (l.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (l.proofHeight = void 0),
              (l.proofTry =
                null !== (o = e.proofTry) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              (l.proofClient =
                null !== (i = e.proofClient) && void 0 !== i
                  ? i
                  : new Uint8Array()),
              (l.proofConsensus =
                null !== (r = e.proofConsensus) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (l.consensusHeight = d.Height.fromPartial(e.consensusHeight))
                : (l.consensusHeight = void 0),
              (l.signer = null !== (c = e.signer) && void 0 !== c ? c : ""),
              l
            );
          },
        };
        const g = {};
        t.MsgConnectionOpenAckResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, g);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        const v = { connectionId: "", signer: "" };
        t.MsgConnectionOpenConfirm = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              0 !== e.proofAck.length && t.uint32(18).bytes(e.proofAck),
              void 0 !== e.proofHeight &&
                d.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              "" !== e.signer && t.uint32(34).string(e.signer),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, v);
            i.proofAck = new Uint8Array();
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = n.string();
                  break;
                case 2:
                  i.proofAck = n.bytes();
                  break;
                case 3:
                  i.proofHeight = d.Height.decode(n, n.uint32());
                  break;
                case 4:
                  i.signer = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              (t.proofAck = new Uint8Array()),
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              void 0 !== e.proofAck &&
                null !== e.proofAck &&
                (t.proofAck = y(e.proofAck)),
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
              void 0 !== e.connectionId && (t.connectionId = e.connectionId),
              void 0 !== e.proofAck &&
                (t.proofAck = O(
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
            var t, n, o;
            const i = Object.assign({}, v);
            return (
              (i.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              (i.proofAck =
                null !== (n = e.proofAck) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (i.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (i.proofHeight = void 0),
              (i.signer = null !== (o = e.signer) && void 0 !== o ? o : ""),
              i
            );
          },
        };
        const h = {};
        t.MsgConnectionOpenConfirmResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let o = void 0 === t ? n.len : n.pos + t;
            const i = Object.assign({}, h);
            while (n.pos < o) {
              const e = n.uint32();
              switch (e >>> 3) {
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
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
              (this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this)),
              (this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this)),
              (this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this)),
              (this.ConnectionOpenConfirm =
                this.ConnectionOpenConfirm.bind(this)));
          }
          ConnectionOpenInit(e) {
            const n = t.MsgConnectionOpenInit.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenInit",
                n,
              );
            return o.then((e) =>
              t.MsgConnectionOpenInitResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionOpenTry(e) {
            const n = t.MsgConnectionOpenTry.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenTry",
                n,
              );
            return o.then((e) =>
              t.MsgConnectionOpenTryResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionOpenAck(e) {
            const n = t.MsgConnectionOpenAck.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenAck",
                n,
              );
            return o.then((e) =>
              t.MsgConnectionOpenAckResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionOpenConfirm(e) {
            const n = t.MsgConnectionOpenConfirm.encode(e).finish(),
              o = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenConfirm",
                n,
              );
            return o.then((e) =>
              t.MsgConnectionOpenConfirmResponse.decode(
                new r.default.Reader(e),
              ),
            );
          }
        }
        t.MsgClientImpl = MsgClientImpl;
        var S = (() => {
          if ("undefined" !== typeof S) return S;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const b =
          S.atob || ((e) => S.Buffer.from(e, "base64").toString("binary"));
        function y(e) {
          const t = b(e),
            n = new Uint8Array(t.length);
          for (let o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
          return n;
        }
        const m =
          S.btoa || ((e) => S.Buffer.from(e, "binary").toString("base64"));
        function O(e) {
          const t = [];
          for (const n of e) t.push(String.fromCharCode(n));
          return m(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, n(13));
    },
  },
]);
