(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [281, 280],
  {
    3566: function (e, t, o) {
      "use strict";
      var n = o(835),
        i = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
        r = Object.prototype.toString,
        a = Array.prototype.concat,
        s = o(3656),
        d = function (e) {
          return "function" === typeof e && "[object Function]" === r.call(e);
        },
        l = o(3657)(),
        c = function (e, t, o, n) {
          if (t in e)
            if (!0 === n) {
              if (e[t] === o) return;
            } else if (!d(n) || !n()) return;
          l ? s(e, t, o, !0) : s(e, t, o);
        },
        u = function (e, t) {
          var o = arguments.length > 2 ? arguments[2] : {},
            r = n(t);
          i && (r = a.call(r, Object.getOwnPropertySymbols(t)));
          for (var s = 0; s < r.length; s += 1) c(e, r[s], t[r[s]], o[r[s]]);
        };
      ((u.supportsDescriptors = !!l), (e.exports = u));
    },
    3567: function (e, t, o) {
      "use strict";
      "undefined" !== typeof self
        ? (e.exports = self)
        : "undefined" !== typeof window
          ? (e.exports = window)
          : (e.exports = Function("return this")());
    },
    3568: function (e, t, o) {
      "use strict";
      (function (t) {
        var n = o(3567);
        e.exports = function () {
          return "object" === typeof t &&
            t &&
            t.Math === Math &&
            t.Array === Array
            ? t
            : n;
        };
      }).call(this, o(13));
    },
    3569: function (e, t, o) {
      "use strict";
      var n =
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
      const i = n(o(2754)),
        r = n(o(2755)),
        a = o(3570);
      var s;
      function d(e) {
        switch (e) {
          case 0:
          case "STATE_UNINITIALIZED_UNSPECIFIED":
            return s.STATE_UNINITIALIZED_UNSPECIFIED;
          case 1:
          case "STATE_INIT":
            return s.STATE_INIT;
          case 2:
          case "STATE_TRYOPEN":
            return s.STATE_TRYOPEN;
          case 3:
          case "STATE_OPEN":
            return s.STATE_OPEN;
          case -1:
          case "UNRECOGNIZED":
          default:
            return s.UNRECOGNIZED;
        }
      }
      function l(e) {
        switch (e) {
          case s.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
          case s.STATE_INIT:
            return "STATE_INIT";
          case s.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
          case s.STATE_OPEN:
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
        })((s = t.State || (t.State = {}))),
        (t.stateFromJSON = d),
        (t.stateToJSON = l));
      const c = { clientId: "", state: 0, delayPeriod: i.default.UZERO };
      t.ConnectionEnd = {
        encode(e, o) {
          (void 0 === o && (o = r.default.Writer.create()),
            "" !== e.clientId && o.uint32(10).string(e.clientId));
          for (const n of e.versions)
            t.Version.encode(n, o.uint32(18).fork()).ldelim();
          return (
            0 !== e.state && o.uint32(24).int32(e.state),
            void 0 !== e.counterparty &&
              t.Counterparty.encode(
                e.counterparty,
                o.uint32(34).fork(),
              ).ldelim(),
            e.delayPeriod.isZero() || o.uint32(40).uint64(e.delayPeriod),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === o ? n.len : n.pos + o;
          const a = Object.assign({}, c);
          a.versions = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                a.clientId = n.string();
                break;
              case 2:
                a.versions.push(t.Version.decode(n, n.uint32()));
                break;
              case 3:
                a.state = n.int32();
                break;
              case 4:
                a.counterparty = t.Counterparty.decode(n, n.uint32());
                break;
              case 5:
                a.delayPeriod = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const o = Object.assign({}, c);
          if (
            ((o.versions = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (o.clientId = String(e.clientId))
              : (o.clientId = ""),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const n of e.versions) o.versions.push(t.Version.fromJSON(n));
          return (
            void 0 !== e.state && null !== e.state
              ? (o.state = d(e.state))
              : (o.state = 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (o.counterparty = t.Counterparty.fromJSON(e.counterparty))
              : (o.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (o.delayPeriod = i.default.fromString(e.delayPeriod))
              : (o.delayPeriod = i.default.UZERO),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.clientId && (o.clientId = e.clientId),
            e.versions
              ? (o.versions = e.versions.map((e) =>
                  e ? t.Version.toJSON(e) : void 0,
                ))
              : (o.versions = []),
            void 0 !== e.state && (o.state = l(e.state)),
            void 0 !== e.counterparty &&
              (o.counterparty = e.counterparty
                ? t.Counterparty.toJSON(e.counterparty)
                : void 0),
            void 0 !== e.delayPeriod &&
              (o.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
            o
          );
        },
        fromPartial(e) {
          var o, n;
          const r = Object.assign({}, c);
          if (
            ((r.clientId = null !== (o = e.clientId) && void 0 !== o ? o : ""),
            (r.versions = []),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const i of e.versions)
              r.versions.push(t.Version.fromPartial(i));
          return (
            (r.state = null !== (n = e.state) && void 0 !== n ? n : 0),
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
        encode(e, o) {
          (void 0 === o && (o = r.default.Writer.create()),
            "" !== e.id && o.uint32(10).string(e.id),
            "" !== e.clientId && o.uint32(18).string(e.clientId));
          for (const n of e.versions)
            t.Version.encode(n, o.uint32(26).fork()).ldelim();
          return (
            0 !== e.state && o.uint32(32).int32(e.state),
            void 0 !== e.counterparty &&
              t.Counterparty.encode(
                e.counterparty,
                o.uint32(42).fork(),
              ).ldelim(),
            e.delayPeriod.isZero() || o.uint32(48).uint64(e.delayPeriod),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let i = void 0 === o ? n.len : n.pos + o;
          const a = Object.assign({}, u);
          a.versions = [];
          while (n.pos < i) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                a.id = n.string();
                break;
              case 2:
                a.clientId = n.string();
                break;
              case 3:
                a.versions.push(t.Version.decode(n, n.uint32()));
                break;
              case 4:
                a.state = n.int32();
                break;
              case 5:
                a.counterparty = t.Counterparty.decode(n, n.uint32());
                break;
              case 6:
                a.delayPeriod = n.uint64();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const o = Object.assign({}, u);
          if (
            ((o.versions = []),
            void 0 !== e.id && null !== e.id
              ? (o.id = String(e.id))
              : (o.id = ""),
            void 0 !== e.clientId && null !== e.clientId
              ? (o.clientId = String(e.clientId))
              : (o.clientId = ""),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const n of e.versions) o.versions.push(t.Version.fromJSON(n));
          return (
            void 0 !== e.state && null !== e.state
              ? (o.state = d(e.state))
              : (o.state = 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (o.counterparty = t.Counterparty.fromJSON(e.counterparty))
              : (o.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (o.delayPeriod = i.default.fromString(e.delayPeriod))
              : (o.delayPeriod = i.default.UZERO),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.id && (o.id = e.id),
            void 0 !== e.clientId && (o.clientId = e.clientId),
            e.versions
              ? (o.versions = e.versions.map((e) =>
                  e ? t.Version.toJSON(e) : void 0,
                ))
              : (o.versions = []),
            void 0 !== e.state && (o.state = l(e.state)),
            void 0 !== e.counterparty &&
              (o.counterparty = e.counterparty
                ? t.Counterparty.toJSON(e.counterparty)
                : void 0),
            void 0 !== e.delayPeriod &&
              (o.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
            o
          );
        },
        fromPartial(e) {
          var o, n, r;
          const a = Object.assign({}, u);
          if (
            ((a.id = null !== (o = e.id) && void 0 !== o ? o : ""),
            (a.clientId = null !== (n = e.clientId) && void 0 !== n ? n : ""),
            (a.versions = []),
            void 0 !== e.versions && null !== e.versions)
          )
            for (const i of e.versions)
              a.versions.push(t.Version.fromPartial(i));
          return (
            (a.state = null !== (r = e.state) && void 0 !== r ? r : 0),
            void 0 !== e.counterparty && null !== e.counterparty
              ? (a.counterparty = t.Counterparty.fromPartial(e.counterparty))
              : (a.counterparty = void 0),
            void 0 !== e.delayPeriod && null !== e.delayPeriod
              ? (a.delayPeriod = e.delayPeriod)
              : (a.delayPeriod = i.default.UZERO),
            a
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
              a.MerklePrefix.encode(e.prefix, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const i = Object.assign({}, f);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.clientId = o.string();
                break;
              case 2:
                i.connectionId = o.string();
                break;
              case 3:
                i.prefix = a.MerklePrefix.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
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
              ? (t.prefix = a.MerklePrefix.fromJSON(e.prefix))
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
              (t.prefix = e.prefix ? a.MerklePrefix.toJSON(e.prefix) : void 0),
            t
          );
        },
        fromPartial(e) {
          var t, o;
          const n = Object.assign({}, f);
          return (
            (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
            (n.connectionId =
              null !== (o = e.connectionId) && void 0 !== o ? o : ""),
            void 0 !== e.prefix && null !== e.prefix
              ? (n.prefix = a.MerklePrefix.fromPartial(e.prefix))
              : (n.prefix = void 0),
            n
          );
        },
      };
      const p = { paths: "" };
      t.ClientPaths = {
        encode(e, t) {
          void 0 === t && (t = r.default.Writer.create());
          for (const o of e.paths) t.uint32(10).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const i = Object.assign({}, p);
          i.paths = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.paths.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          if (((t.paths = []), void 0 !== e.paths && null !== e.paths))
            for (const o of e.paths) t.paths.push(String(o));
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
            for (const o of e.paths) t.paths.push(o);
          return t;
        },
      };
      const v = { clientId: "", paths: "" };
      t.ConnectionPaths = {
        encode(e, t) {
          (void 0 === t && (t = r.default.Writer.create()),
            "" !== e.clientId && t.uint32(10).string(e.clientId));
          for (const o of e.paths) t.uint32(18).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const i = Object.assign({}, v);
          i.paths = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.clientId = o.string();
                break;
              case 2:
                i.paths.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          if (
            ((t.paths = []),
            void 0 !== e.clientId && null !== e.clientId
              ? (t.clientId = String(e.clientId))
              : (t.clientId = ""),
            void 0 !== e.paths && null !== e.paths)
          )
            for (const o of e.paths) t.paths.push(String(o));
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
          const o = Object.assign({}, v);
          if (
            ((o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
            (o.paths = []),
            void 0 !== e.paths && null !== e.paths)
          )
            for (const n of e.paths) o.paths.push(n);
          return o;
        },
      };
      const h = { identifier: "", features: "" };
      ((t.Version = {
        encode(e, t) {
          (void 0 === t && (t = r.default.Writer.create()),
            "" !== e.identifier && t.uint32(10).string(e.identifier));
          for (const o of e.features) t.uint32(18).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const i = Object.assign({}, h);
          i.features = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.identifier = o.string();
                break;
              case 2:
                i.features.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
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
            for (const o of e.features) t.features.push(String(o));
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
          const o = Object.assign({}, h);
          if (
            ((o.identifier =
              null !== (t = e.identifier) && void 0 !== t ? t : ""),
            (o.features = []),
            void 0 !== e.features && null !== e.features)
          )
            for (const n of e.features) o.features.push(n);
          return o;
        },
      }),
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure()));
    },
    3570: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
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
        const i = n(o(2754)),
          r = n(o(2755)),
          a = o(3571);
        t.protobufPackage = "ibc.core.commitment.v1";
        const s = {};
        t.MerkleRoot = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.hash.length && t.uint32(10).bytes(e.hash),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, s);
            i.hash = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.hash = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
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
                (t.hash = h(void 0 !== e.hash ? e.hash : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, s);
            return (
              (o.hash =
                null !== (t = e.hash) && void 0 !== t ? t : new Uint8Array()),
              o
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, d);
            i.keyPrefix = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.keyPrefix = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
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
                (t.keyPrefix = h(
                  void 0 !== e.keyPrefix ? e.keyPrefix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, d);
            return (
              (o.keyPrefix =
                null !== (t = e.keyPrefix) && void 0 !== t
                  ? t
                  : new Uint8Array()),
              o
            );
          },
        };
        const l = { keyPath: "" };
        t.MerklePath = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const o of e.keyPath) t.uint32(10).string(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, l);
            i.keyPath = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.keyPath.push(o.string());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            if (((t.keyPath = []), void 0 !== e.keyPath && null !== e.keyPath))
              for (const o of e.keyPath) t.keyPath.push(String(o));
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
            const t = Object.assign({}, l);
            if (((t.keyPath = []), void 0 !== e.keyPath && null !== e.keyPath))
              for (const o of e.keyPath) t.keyPath.push(o);
            return t;
          },
        };
        const c = {};
        t.MerkleProof = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const o of e.proofs)
              a.CommitmentProof.encode(o, t.uint32(10).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, c);
            i.proofs = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.proofs.push(a.CommitmentProof.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            if (((t.proofs = []), void 0 !== e.proofs && null !== e.proofs))
              for (const o of e.proofs)
                t.proofs.push(a.CommitmentProof.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.proofs
                ? (t.proofs = e.proofs.map((e) =>
                    e ? a.CommitmentProof.toJSON(e) : void 0,
                  ))
                : (t.proofs = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            if (((t.proofs = []), void 0 !== e.proofs && null !== e.proofs))
              for (const o of e.proofs)
                t.proofs.push(a.CommitmentProof.fromPartial(o));
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
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const v =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function h(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return v(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    3572: function (e, t, o) {
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
        const i = n(o(2754)),
          r = n(o(2755)),
          a = o(4441),
          s = o(4442),
          d = o(3573),
          l = o(3064);
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
        function p(e) {
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
        function h(e) {
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
          (t.blockIDFlagToJSON = p),
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
          (t.signedMsgTypeToJSON = h));
        const g = { total: 0 };
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
            const i = Object.assign({}, g);
            i.hash = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.total = o.uint32();
                  break;
                case 2:
                  i.hash = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              (t.hash = new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (t.total = Number(e.total))
                : (t.total = 0),
              void 0 !== e.hash && null !== e.hash && (t.hash = U(e.hash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.total && (t.total = e.total),
              void 0 !== e.hash &&
                (t.hash = J(void 0 !== e.hash ? e.hash : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const n = Object.assign({}, g);
            return (
              (n.total = null !== (t = e.total) && void 0 !== t ? t : 0),
              (n.hash =
                null !== (o = e.hash) && void 0 !== o ? o : new Uint8Array()),
              n
            );
          },
        };
        const b = { index: 0 };
        t.Part = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.index && t.uint32(8).uint32(e.index),
              0 !== e.bytes.length && t.uint32(18).bytes(e.bytes),
              void 0 !== e.proof &&
                a.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, b);
            i.bytes = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.index = o.uint32();
                  break;
                case 2:
                  i.bytes = o.bytes();
                  break;
                case 3:
                  i.proof = a.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              (t.bytes = new Uint8Array()),
              void 0 !== e.index && null !== e.index
                ? (t.index = Number(e.index))
                : (t.index = 0),
              void 0 !== e.bytes && null !== e.bytes && (t.bytes = U(e.bytes)),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = a.Proof.fromJSON(e.proof))
                : (t.proof = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.index && (t.index = e.index),
              void 0 !== e.bytes &&
                (t.bytes = J(void 0 !== e.bytes ? e.bytes : new Uint8Array())),
              void 0 !== e.proof &&
                (t.proof = e.proof ? a.Proof.toJSON(e.proof) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const n = Object.assign({}, b);
            return (
              (n.index = null !== (t = e.index) && void 0 !== t ? t : 0),
              (n.bytes =
                null !== (o = e.bytes) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (n.proof = a.Proof.fromPartial(e.proof))
                : (n.proof = void 0),
              n
            );
          },
        };
        const y = {};
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, y);
            a.hash = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.hash = n.bytes();
                  break;
                case 2:
                  a.partSetHeader = t.PartSetHeader.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, y);
            return (
              (o.hash = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash && (o.hash = U(e.hash)),
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
                (o.hash = J(void 0 !== e.hash ? e.hash : new Uint8Array())),
              void 0 !== e.partSetHeader &&
                (o.partSetHeader = e.partSetHeader
                  ? t.PartSetHeader.toJSON(e.partSetHeader)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            var o;
            const n = Object.assign({}, y);
            return (
              (n.hash =
                null !== (o = e.hash) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.partSetHeader && null !== e.partSetHeader
                ? (n.partSetHeader = t.PartSetHeader.fromPartial(
                    e.partSetHeader,
                  ))
                : (n.partSetHeader = void 0),
              n
            );
          },
        };
        const m = { chainId: "", height: i.default.ZERO };
        t.Header = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== e.version &&
                s.Consensus.encode(e.version, o.uint32(10).fork()).ldelim(),
              "" !== e.chainId && o.uint32(18).string(e.chainId),
              e.height.isZero() || o.uint32(24).int64(e.height),
              void 0 !== e.time &&
                l.Timestamp.encode(T(e.time), o.uint32(34).fork()).ldelim(),
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, m);
            ((a.lastCommitHash = new Uint8Array()),
              (a.dataHash = new Uint8Array()),
              (a.validatorsHash = new Uint8Array()),
              (a.nextValidatorsHash = new Uint8Array()),
              (a.consensusHash = new Uint8Array()),
              (a.appHash = new Uint8Array()),
              (a.lastResultsHash = new Uint8Array()),
              (a.evidenceHash = new Uint8Array()),
              (a.proposerAddress = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.version = s.Consensus.decode(n, n.uint32());
                  break;
                case 2:
                  a.chainId = n.string();
                  break;
                case 3:
                  a.height = n.int64();
                  break;
                case 4:
                  a.time = _(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 5:
                  a.lastBlockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 6:
                  a.lastCommitHash = n.bytes();
                  break;
                case 7:
                  a.dataHash = n.bytes();
                  break;
                case 8:
                  a.validatorsHash = n.bytes();
                  break;
                case 9:
                  a.nextValidatorsHash = n.bytes();
                  break;
                case 10:
                  a.consensusHash = n.bytes();
                  break;
                case 11:
                  a.appHash = n.bytes();
                  break;
                case 12:
                  a.lastResultsHash = n.bytes();
                  break;
                case 13:
                  a.evidenceHash = n.bytes();
                  break;
                case 14:
                  a.proposerAddress = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, m);
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
                ? (o.height = i.default.fromString(e.height))
                : (o.height = i.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = j(e.time))
                : (o.time = void 0),
              void 0 !== e.lastBlockId && null !== e.lastBlockId
                ? (o.lastBlockId = t.BlockID.fromJSON(e.lastBlockId))
                : (o.lastBlockId = void 0),
              void 0 !== e.lastCommitHash &&
                null !== e.lastCommitHash &&
                (o.lastCommitHash = U(e.lastCommitHash)),
              void 0 !== e.dataHash &&
                null !== e.dataHash &&
                (o.dataHash = U(e.dataHash)),
              void 0 !== e.validatorsHash &&
                null !== e.validatorsHash &&
                (o.validatorsHash = U(e.validatorsHash)),
              void 0 !== e.nextValidatorsHash &&
                null !== e.nextValidatorsHash &&
                (o.nextValidatorsHash = U(e.nextValidatorsHash)),
              void 0 !== e.consensusHash &&
                null !== e.consensusHash &&
                (o.consensusHash = U(e.consensusHash)),
              void 0 !== e.appHash &&
                null !== e.appHash &&
                (o.appHash = U(e.appHash)),
              void 0 !== e.lastResultsHash &&
                null !== e.lastResultsHash &&
                (o.lastResultsHash = U(e.lastResultsHash)),
              void 0 !== e.evidenceHash &&
                null !== e.evidenceHash &&
                (o.evidenceHash = U(e.evidenceHash)),
              void 0 !== e.proposerAddress &&
                null !== e.proposerAddress &&
                (o.proposerAddress = U(e.proposerAddress)),
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
                (o.height = (e.height || i.default.ZERO).toString()),
              void 0 !== e.time && (o.time = e.time.toISOString()),
              void 0 !== e.lastBlockId &&
                (o.lastBlockId = e.lastBlockId
                  ? t.BlockID.toJSON(e.lastBlockId)
                  : void 0),
              void 0 !== e.lastCommitHash &&
                (o.lastCommitHash = J(
                  void 0 !== e.lastCommitHash
                    ? e.lastCommitHash
                    : new Uint8Array(),
                )),
              void 0 !== e.dataHash &&
                (o.dataHash = J(
                  void 0 !== e.dataHash ? e.dataHash : new Uint8Array(),
                )),
              void 0 !== e.validatorsHash &&
                (o.validatorsHash = J(
                  void 0 !== e.validatorsHash
                    ? e.validatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.nextValidatorsHash &&
                (o.nextValidatorsHash = J(
                  void 0 !== e.nextValidatorsHash
                    ? e.nextValidatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHash &&
                (o.consensusHash = J(
                  void 0 !== e.consensusHash
                    ? e.consensusHash
                    : new Uint8Array(),
                )),
              void 0 !== e.appHash &&
                (o.appHash = J(
                  void 0 !== e.appHash ? e.appHash : new Uint8Array(),
                )),
              void 0 !== e.lastResultsHash &&
                (o.lastResultsHash = J(
                  void 0 !== e.lastResultsHash
                    ? e.lastResultsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.evidenceHash &&
                (o.evidenceHash = J(
                  void 0 !== e.evidenceHash ? e.evidenceHash : new Uint8Array(),
                )),
              void 0 !== e.proposerAddress &&
                (o.proposerAddress = J(
                  void 0 !== e.proposerAddress
                    ? e.proposerAddress
                    : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            var o, n, r, a, d, l, c, u, f, p, v;
            const h = Object.assign({}, m);
            return (
              void 0 !== e.version && null !== e.version
                ? (h.version = s.Consensus.fromPartial(e.version))
                : (h.version = void 0),
              (h.chainId = null !== (o = e.chainId) && void 0 !== o ? o : ""),
              void 0 !== e.height && null !== e.height
                ? (h.height = e.height)
                : (h.height = i.default.ZERO),
              (h.time = null !== (n = e.time) && void 0 !== n ? n : void 0),
              void 0 !== e.lastBlockId && null !== e.lastBlockId
                ? (h.lastBlockId = t.BlockID.fromPartial(e.lastBlockId))
                : (h.lastBlockId = void 0),
              (h.lastCommitHash =
                null !== (r = e.lastCommitHash) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              (h.dataHash =
                null !== (a = e.dataHash) && void 0 !== a
                  ? a
                  : new Uint8Array()),
              (h.validatorsHash =
                null !== (d = e.validatorsHash) && void 0 !== d
                  ? d
                  : new Uint8Array()),
              (h.nextValidatorsHash =
                null !== (l = e.nextValidatorsHash) && void 0 !== l
                  ? l
                  : new Uint8Array()),
              (h.consensusHash =
                null !== (c = e.consensusHash) && void 0 !== c
                  ? c
                  : new Uint8Array()),
              (h.appHash =
                null !== (u = e.appHash) && void 0 !== u
                  ? u
                  : new Uint8Array()),
              (h.lastResultsHash =
                null !== (f = e.lastResultsHash) && void 0 !== f
                  ? f
                  : new Uint8Array()),
              (h.evidenceHash =
                null !== (p = e.evidenceHash) && void 0 !== p
                  ? p
                  : new Uint8Array()),
              (h.proposerAddress =
                null !== (v = e.proposerAddress) && void 0 !== v
                  ? v
                  : new Uint8Array()),
              h
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
            const i = Object.assign({}, k);
            i.txs = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.txs.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, k);
            if (((t.txs = []), void 0 !== e.txs && null !== e.txs))
              for (const o of e.txs) t.txs.push(U(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.txs
                ? (t.txs = e.txs.map((e) =>
                    J(void 0 !== e ? e : new Uint8Array()),
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
        const S = {
          type: 0,
          height: i.default.ZERO,
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
                  T(e.timestamp),
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, S);
            ((a.validatorAddress = new Uint8Array()),
              (a.signature = new Uint8Array()));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.type = n.int32();
                  break;
                case 2:
                  a.height = n.int64();
                  break;
                case 3:
                  a.round = n.int32();
                  break;
                case 4:
                  a.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 5:
                  a.timestamp = _(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 6:
                  a.validatorAddress = n.bytes();
                  break;
                case 7:
                  a.validatorIndex = n.int32();
                  break;
                case 8:
                  a.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, S);
            return (
              (o.validatorAddress = new Uint8Array()),
              (o.signature = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (o.type = v(e.type))
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = i.default.fromString(e.height))
                : (o.height = i.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = j(e.timestamp))
                : (o.timestamp = void 0),
              void 0 !== e.validatorAddress &&
                null !== e.validatorAddress &&
                (o.validatorAddress = U(e.validatorAddress)),
              void 0 !== e.validatorIndex && null !== e.validatorIndex
                ? (o.validatorIndex = Number(e.validatorIndex))
                : (o.validatorIndex = 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (o.signature = U(e.signature)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = h(e.type)),
              void 0 !== e.height &&
                (o.height = (e.height || i.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.timestamp &&
                (o.timestamp = e.timestamp.toISOString()),
              void 0 !== e.validatorAddress &&
                (o.validatorAddress = J(
                  void 0 !== e.validatorAddress
                    ? e.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== e.validatorIndex &&
                (o.validatorIndex = e.validatorIndex),
              void 0 !== e.signature &&
                (o.signature = J(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            var o, n, r, a, s, d;
            const l = Object.assign({}, S);
            return (
              (l.type = null !== (o = e.type) && void 0 !== o ? o : 0),
              void 0 !== e.height && null !== e.height
                ? (l.height = e.height)
                : (l.height = i.default.ZERO),
              (l.round = null !== (n = e.round) && void 0 !== n ? n : 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (l.blockId = t.BlockID.fromPartial(e.blockId))
                : (l.blockId = void 0),
              (l.timestamp =
                null !== (r = e.timestamp) && void 0 !== r ? r : void 0),
              (l.validatorAddress =
                null !== (a = e.validatorAddress) && void 0 !== a
                  ? a
                  : new Uint8Array()),
              (l.validatorIndex =
                null !== (s = e.validatorIndex) && void 0 !== s ? s : 0),
              (l.signature =
                null !== (d = e.signature) && void 0 !== d
                  ? d
                  : new Uint8Array()),
              l
            );
          },
        };
        const O = { height: i.default.ZERO, round: 0 };
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, O);
            a.signatures = [];
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.height = n.int64();
                  break;
                case 2:
                  a.round = n.int32();
                  break;
                case 3:
                  a.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 4:
                  a.signatures.push(t.CommitSig.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, O);
            if (
              ((o.signatures = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = i.default.fromString(e.height))
                : (o.height = i.default.ZERO),
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
                (o.height = (e.height || i.default.ZERO).toString()),
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
            var o;
            const n = Object.assign({}, O);
            if (
              (void 0 !== e.height && null !== e.height
                ? (n.height = e.height)
                : (n.height = i.default.ZERO),
              (n.round = null !== (o = e.round) && void 0 !== o ? o : 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (n.blockId = t.BlockID.fromPartial(e.blockId))
                : (n.blockId = void 0),
              (n.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const i of e.signatures)
                n.signatures.push(t.CommitSig.fromPartial(i));
            return n;
          },
        };
        const I = { blockIdFlag: 0 };
        t.CommitSig = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.blockIdFlag && t.uint32(8).int32(e.blockIdFlag),
              0 !== e.validatorAddress.length &&
                t.uint32(18).bytes(e.validatorAddress),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  T(e.timestamp),
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
            const i = Object.assign({}, I);
            ((i.validatorAddress = new Uint8Array()),
              (i.signature = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.blockIdFlag = o.int32();
                  break;
                case 2:
                  i.validatorAddress = o.bytes();
                  break;
                case 3:
                  i.timestamp = _(l.Timestamp.decode(o, o.uint32()));
                  break;
                case 4:
                  i.signature = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, I);
            return (
              (t.validatorAddress = new Uint8Array()),
              (t.signature = new Uint8Array()),
              void 0 !== e.blockIdFlag && null !== e.blockIdFlag
                ? (t.blockIdFlag = f(e.blockIdFlag))
                : (t.blockIdFlag = 0),
              void 0 !== e.validatorAddress &&
                null !== e.validatorAddress &&
                (t.validatorAddress = U(e.validatorAddress)),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = j(e.timestamp))
                : (t.timestamp = void 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (t.signature = U(e.signature)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.blockIdFlag && (t.blockIdFlag = p(e.blockIdFlag)),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = J(
                  void 0 !== e.validatorAddress
                    ? e.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== e.timestamp &&
                (t.timestamp = e.timestamp.toISOString()),
              void 0 !== e.signature &&
                (t.signature = J(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t, o, n, i;
            const r = Object.assign({}, I);
            return (
              (r.blockIdFlag =
                null !== (t = e.blockIdFlag) && void 0 !== t ? t : 0),
              (r.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              (r.timestamp =
                null !== (n = e.timestamp) && void 0 !== n ? n : void 0),
              (r.signature =
                null !== (i = e.signature) && void 0 !== i
                  ? i
                  : new Uint8Array()),
              r
            );
          },
        };
        const H = { type: 0, height: i.default.ZERO, round: 0, polRound: 0 };
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
                  T(e.timestamp),
                  o.uint32(50).fork(),
                ).ldelim(),
              0 !== e.signature.length && o.uint32(58).bytes(e.signature),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, H);
            a.signature = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.type = n.int32();
                  break;
                case 2:
                  a.height = n.int64();
                  break;
                case 3:
                  a.round = n.int32();
                  break;
                case 4:
                  a.polRound = n.int32();
                  break;
                case 5:
                  a.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 6:
                  a.timestamp = _(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 7:
                  a.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, H);
            return (
              (o.signature = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (o.type = v(e.type))
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = i.default.fromString(e.height))
                : (o.height = i.default.ZERO),
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
                ? (o.timestamp = j(e.timestamp))
                : (o.timestamp = void 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (o.signature = U(e.signature)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = h(e.type)),
              void 0 !== e.height &&
                (o.height = (e.height || i.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.polRound && (o.polRound = e.polRound),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.timestamp &&
                (o.timestamp = e.timestamp.toISOString()),
              void 0 !== e.signature &&
                (o.signature = J(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            var o, n, r, a, s;
            const d = Object.assign({}, H);
            return (
              (d.type = null !== (o = e.type) && void 0 !== o ? o : 0),
              void 0 !== e.height && null !== e.height
                ? (d.height = e.height)
                : (d.height = i.default.ZERO),
              (d.round = null !== (n = e.round) && void 0 !== n ? n : 0),
              (d.polRound = null !== (r = e.polRound) && void 0 !== r ? r : 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (d.blockId = t.BlockID.fromPartial(e.blockId))
                : (d.blockId = void 0),
              (d.timestamp =
                null !== (a = e.timestamp) && void 0 !== a ? a : void 0),
              (d.signature =
                null !== (s = e.signature) && void 0 !== s
                  ? s
                  : new Uint8Array()),
              d
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, P);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.header = t.Header.decode(n, n.uint32());
                  break;
                case 2:
                  a.commit = t.Commit.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
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
        const w = {};
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, w);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.signedHeader = t.SignedHeader.decode(n, n.uint32());
                  break;
                case 2:
                  a.validatorSet = d.ValidatorSet.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, w);
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
            const o = Object.assign({}, w);
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
        const C = { blockSize: i.default.ZERO, numTxs: i.default.ZERO };
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, C);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 2:
                  a.blockSize = n.int64();
                  break;
                case 3:
                  a.header = t.Header.decode(n, n.uint32());
                  break;
                case 4:
                  a.numTxs = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, C);
            return (
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.blockSize && null !== e.blockSize
                ? (o.blockSize = i.default.fromString(e.blockSize))
                : (o.blockSize = i.default.ZERO),
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromJSON(e.header))
                : (o.header = void 0),
              void 0 !== e.numTxs && null !== e.numTxs
                ? (o.numTxs = i.default.fromString(e.numTxs))
                : (o.numTxs = i.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.blockSize &&
                (o.blockSize = (e.blockSize || i.default.ZERO).toString()),
              void 0 !== e.header &&
                (o.header = e.header ? t.Header.toJSON(e.header) : void 0),
              void 0 !== e.numTxs &&
                (o.numTxs = (e.numTxs || i.default.ZERO).toString()),
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
                : (o.blockSize = i.default.ZERO),
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromPartial(e.header))
                : (o.header = void 0),
              void 0 !== e.numTxs && null !== e.numTxs
                ? (o.numTxs = e.numTxs)
                : (o.numTxs = i.default.ZERO),
              o
            );
          },
        };
        const N = {};
        t.TxProof = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.rootHash.length && t.uint32(10).bytes(e.rootHash),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              void 0 !== e.proof &&
                a.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, N);
            ((i.rootHash = new Uint8Array()), (i.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.rootHash = o.bytes();
                  break;
                case 2:
                  i.data = o.bytes();
                  break;
                case 3:
                  i.proof = a.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, N);
            return (
              (t.rootHash = new Uint8Array()),
              (t.data = new Uint8Array()),
              void 0 !== e.rootHash &&
                null !== e.rootHash &&
                (t.rootHash = U(e.rootHash)),
              void 0 !== e.data && null !== e.data && (t.data = U(e.data)),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = a.Proof.fromJSON(e.proof))
                : (t.proof = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.rootHash &&
                (t.rootHash = J(
                  void 0 !== e.rootHash ? e.rootHash : new Uint8Array(),
                )),
              void 0 !== e.data &&
                (t.data = J(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.proof &&
                (t.proof = e.proof ? a.Proof.toJSON(e.proof) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const n = Object.assign({}, N);
            return (
              (n.rootHash =
                null !== (t = e.rootHash) && void 0 !== t
                  ? t
                  : new Uint8Array()),
              (n.data =
                null !== (o = e.data) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (n.proof = a.Proof.fromPartial(e.proof))
                : (n.proof = void 0),
              n
            );
          },
        };
        var A = (() => {
          if ("undefined" !== typeof A) return A;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const R =
          A.atob || ((e) => A.Buffer.from(e, "base64").toString("binary"));
        function U(e) {
          const t = R(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const E =
          A.btoa || ((e) => A.Buffer.from(e, "binary").toString("base64"));
        function J(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return E(t.join(""));
        }
        function T(e) {
          const t = x(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function _(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function j(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : _(l.Timestamp.fromJSON(e));
        }
        function x(e) {
          return i.default.fromNumber(e);
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    3573: function (e, t, o) {
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
        const i = n(o(2754)),
          r = n(o(2755)),
          a = o(4443);
        t.protobufPackage = "tendermint.types";
        const s = { totalVotingPower: i.default.ZERO };
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, s);
            a.validators = [];
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.validators.push(t.Validator.decode(n, n.uint32()));
                  break;
                case 2:
                  a.proposer = t.Validator.decode(n, n.uint32());
                  break;
                case 3:
                  a.totalVotingPower = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
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
                ? (o.totalVotingPower = i.default.fromString(
                    e.totalVotingPower,
                  ))
                : (o.totalVotingPower = i.default.ZERO),
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
                  e.totalVotingPower || i.default.ZERO
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
                : (o.totalVotingPower = i.default.ZERO),
              o
            );
          },
        };
        const d = {
          votingPower: i.default.ZERO,
          proposerPriority: i.default.ZERO,
        };
        t.Validator = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              0 !== e.address.length && t.uint32(10).bytes(e.address),
              void 0 !== e.pubKey &&
                a.PublicKey.encode(e.pubKey, t.uint32(18).fork()).ldelim(),
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
            const i = Object.assign({}, d);
            i.address = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.address = o.bytes();
                  break;
                case 2:
                  i.pubKey = a.PublicKey.decode(o, o.uint32());
                  break;
                case 3:
                  i.votingPower = o.int64();
                  break;
                case 4:
                  i.proposerPriority = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              (t.address = new Uint8Array()),
              void 0 !== e.address &&
                null !== e.address &&
                (t.address = f(e.address)),
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = a.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = i.default.fromString(e.votingPower))
                : (t.votingPower = i.default.ZERO),
              void 0 !== e.proposerPriority && null !== e.proposerPriority
                ? (t.proposerPriority = i.default.fromString(
                    e.proposerPriority,
                  ))
                : (t.proposerPriority = i.default.ZERO),
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
                (t.pubKey = e.pubKey ? a.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.votingPower &&
                (t.votingPower = (e.votingPower || i.default.ZERO).toString()),
              void 0 !== e.proposerPriority &&
                (t.proposerPriority = (
                  e.proposerPriority || i.default.ZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, d);
            return (
              (o.address =
                null !== (t = e.address) && void 0 !== t
                  ? t
                  : new Uint8Array()),
              void 0 !== e.pubKey && null !== e.pubKey
                ? (o.pubKey = a.PublicKey.fromPartial(e.pubKey))
                : (o.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (o.votingPower = e.votingPower)
                : (o.votingPower = i.default.ZERO),
              void 0 !== e.proposerPriority && null !== e.proposerPriority
                ? (o.proposerPriority = e.proposerPriority)
                : (o.proposerPriority = i.default.ZERO),
              o
            );
          },
        };
        const l = { votingPower: i.default.ZERO };
        t.SimpleValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.pubKey &&
                a.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(),
              e.votingPower.isZero() || t.uint32(16).int64(e.votingPower),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, l);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.pubKey = a.PublicKey.decode(o, o.uint32());
                  break;
                case 2:
                  i.votingPower = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = a.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = i.default.fromString(e.votingPower))
                : (t.votingPower = i.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.pubKey &&
                (t.pubKey = e.pubKey ? a.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.votingPower &&
                (t.votingPower = (e.votingPower || i.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = a.PublicKey.fromPartial(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = e.votingPower)
                : (t.votingPower = i.default.ZERO),
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
        const p =
          c.btoa || ((e) => c.Buffer.from(e, "binary").toString("base64"));
        function v(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return p(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    3656: function (e, t, o) {
      "use strict";
      var n = o(818),
        i = o(836),
        r = o(104),
        a = o(387);
      e.exports = function (e, t, o) {
        if (!e || ("object" !== typeof e && "function" !== typeof e))
          throw new r("`obj` must be an object or a function`");
        if ("string" !== typeof t && "symbol" !== typeof t)
          throw new r("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" !== typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new r(
            "`nonEnumerable`, if provided, must be a boolean or null",
          );
        if (
          arguments.length > 4 &&
          "boolean" !== typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new r("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" !== typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new r(
            "`nonConfigurable`, if provided, must be a boolean or null",
          );
        if (arguments.length > 6 && "boolean" !== typeof arguments[6])
          throw new r("`loose`, if provided, must be a boolean");
        var s = arguments.length > 3 ? arguments[3] : null,
          d = arguments.length > 4 ? arguments[4] : null,
          l = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          u = !!a && a(e, t);
        if (n)
          n(e, t, {
            configurable: null === l && u ? u.configurable : !l,
            enumerable: null === s && u ? u.enumerable : !s,
            value: o,
            writable: null === d && u ? u.writable : !d,
          });
        else {
          if (!c && (s || d || l))
            throw new i(
              "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
            );
          e[t] = o;
        }
      };
    },
    4419: function (e, t, o) {
      "use strict";
      var n = o(3566),
        i = o(3567),
        r = o(3568),
        a = o(4420),
        s = r(),
        d = function () {
          return s;
        };
      (n(d, { getPolyfill: r, implementation: i, shim: a }), (e.exports = d));
    },
    4420: function (e, t, o) {
      "use strict";
      var n = o(3566),
        i = o(387),
        r = o(3568);
      e.exports = function () {
        var e = r();
        if (n.supportsDescriptors) {
          var t = i(e, "globalThis");
          (t &&
            (!t.configurable ||
              (!t.enumerable && t.writable && globalThis === e))) ||
            Object.defineProperty(e, "globalThis", {
              configurable: !0,
              enumerable: !1,
              value: e,
              writable: !0,
            });
        } else
          ("object" === typeof globalThis && globalThis === e) ||
            (e.globalThis = e);
        return e;
      };
    },
    4439: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
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
        const i = n(o(2754)),
          r = n(o(2755)),
          a = o(3569),
          s = o(2927),
          d = o(2926),
          l = o(2781);
        t.protobufPackage = "ibc.core.connection.v1";
        const c = { connectionId: "" };
        t.QueryConnectionRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, c);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
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
            const o = Object.assign({}, c);
            return (
              (o.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              o
            );
          },
        };
        const u = {};
        t.QueryConnectionResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.connection &&
                a.ConnectionEnd.encode(
                  e.connection,
                  t.uint32(10).fork(),
                ).ldelim(),
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                s.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, u);
            i.proof = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connection = a.ConnectionEnd.decode(o, o.uint32());
                  break;
                case 2:
                  i.proof = o.bytes();
                  break;
                case 3:
                  i.proofHeight = s.Height.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
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
                ? (t.connection = a.ConnectionEnd.fromJSON(e.connection))
                : (t.connection = void 0),
              void 0 !== e.proof && null !== e.proof && (t.proof = O(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = s.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.connection &&
                (t.connection = e.connection
                  ? a.ConnectionEnd.toJSON(e.connection)
                  : void 0),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? s.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, u);
            return (
              void 0 !== e.connection && null !== e.connection
                ? (o.connection = a.ConnectionEnd.fromPartial(e.connection))
                : (o.connection = void 0),
              (o.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (o.proofHeight = s.Height.fromPartial(e.proofHeight))
                : (o.proofHeight = void 0),
              o
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, f);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.pagination = d.PageRequest.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
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
            for (const o of e.connections)
              a.IdentifiedConnection.encode(o, t.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.pagination &&
                d.PageResponse.encode(
                  e.pagination,
                  t.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.height &&
                s.Height.encode(e.height, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, p);
            i.connections = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connections.push(
                    a.IdentifiedConnection.decode(o, o.uint32()),
                  );
                  break;
                case 2:
                  i.pagination = d.PageResponse.decode(o, o.uint32());
                  break;
                case 3:
                  i.height = s.Height.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
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
              for (const o of e.connections)
                t.connections.push(a.IdentifiedConnection.fromJSON(o));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromJSON(e.pagination))
                : (t.pagination = void 0),
              void 0 !== e.height && null !== e.height
                ? (t.height = s.Height.fromJSON(e.height))
                : (t.height = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.connections
                ? (t.connections = e.connections.map((e) =>
                    e ? a.IdentifiedConnection.toJSON(e) : void 0,
                  ))
                : (t.connections = []),
              void 0 !== e.pagination &&
                (t.pagination = e.pagination
                  ? d.PageResponse.toJSON(e.pagination)
                  : void 0),
              void 0 !== e.height &&
                (t.height = e.height ? s.Height.toJSON(e.height) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            if (
              ((t.connections = []),
              void 0 !== e.connections && null !== e.connections)
            )
              for (const o of e.connections)
                t.connections.push(a.IdentifiedConnection.fromPartial(o));
            return (
              void 0 !== e.pagination && null !== e.pagination
                ? (t.pagination = d.PageResponse.fromPartial(e.pagination))
                : (t.pagination = void 0),
              void 0 !== e.height && null !== e.height
                ? (t.height = s.Height.fromPartial(e.height))
                : (t.height = void 0),
              t
            );
          },
        };
        const v = { clientId: "" };
        t.QueryClientConnectionsRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.clientId && t.uint32(10).string(e.clientId),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, v);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = o.string();
                  break;
                default:
                  o.skipType(7 & e);
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
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.clientId && (t.clientId = e.clientId), t);
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, v);
            return (
              (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              o
            );
          },
        };
        const h = { connectionPaths: "" };
        t.QueryClientConnectionsResponse = {
          encode(e, t) {
            void 0 === t && (t = r.default.Writer.create());
            for (const o of e.connectionPaths) t.uint32(10).string(o);
            return (
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                s.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, h);
            ((i.connectionPaths = []), (i.proof = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionPaths.push(o.string());
                  break;
                case 2:
                  i.proof = o.bytes();
                  break;
                case 3:
                  i.proofHeight = s.Height.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            if (
              ((t.connectionPaths = []),
              (t.proof = new Uint8Array()),
              void 0 !== e.connectionPaths && null !== e.connectionPaths)
            )
              for (const o of e.connectionPaths)
                t.connectionPaths.push(String(o));
            return (
              void 0 !== e.proof && null !== e.proof && (t.proof = O(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = s.Height.fromJSON(e.proofHeight))
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
                  ? s.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, h);
            if (
              ((o.connectionPaths = []),
              void 0 !== e.connectionPaths && null !== e.connectionPaths)
            )
              for (const n of e.connectionPaths) o.connectionPaths.push(n);
            return (
              (o.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (o.proofHeight = s.Height.fromPartial(e.proofHeight))
                : (o.proofHeight = void 0),
              o
            );
          },
        };
        const g = { connectionId: "" };
        t.QueryConnectionClientStateRequest = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              "" !== e.connectionId && t.uint32(10).string(e.connectionId),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, g);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
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
            const o = Object.assign({}, g);
            return (
              (o.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              o
            );
          },
        };
        const b = {};
        t.QueryConnectionClientStateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.identifiedClientState &&
                s.IdentifiedClientState.encode(
                  e.identifiedClientState,
                  t.uint32(10).fork(),
                ).ldelim(),
              0 !== e.proof.length && t.uint32(18).bytes(e.proof),
              void 0 !== e.proofHeight &&
                s.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, b);
            i.proof = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.identifiedClientState = s.IdentifiedClientState.decode(
                    o,
                    o.uint32(),
                  );
                  break;
                case 2:
                  i.proof = o.bytes();
                  break;
                case 3:
                  i.proofHeight = s.Height.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.identifiedClientState &&
              null !== e.identifiedClientState
                ? (t.identifiedClientState = s.IdentifiedClientState.fromJSON(
                    e.identifiedClientState,
                  ))
                : (t.identifiedClientState = void 0),
              void 0 !== e.proof && null !== e.proof && (t.proof = O(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = s.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.identifiedClientState &&
                (t.identifiedClientState = e.identifiedClientState
                  ? s.IdentifiedClientState.toJSON(e.identifiedClientState)
                  : void 0),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? s.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, b);
            return (
              void 0 !== e.identifiedClientState &&
              null !== e.identifiedClientState
                ? (o.identifiedClientState =
                    s.IdentifiedClientState.fromPartial(
                      e.identifiedClientState,
                    ))
                : (o.identifiedClientState = void 0),
              (o.proof =
                null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (o.proofHeight = s.Height.fromPartial(e.proofHeight))
                : (o.proofHeight = void 0),
              o
            );
          },
        };
        const y = {
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, y);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = o.string();
                  break;
                case 2:
                  i.revisionNumber = o.uint64();
                  break;
                case 3:
                  i.revisionHeight = o.uint64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, y);
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
            const o = Object.assign({}, y);
            return (
              (o.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              void 0 !== e.revisionNumber && null !== e.revisionNumber
                ? (o.revisionNumber = e.revisionNumber)
                : (o.revisionNumber = i.default.UZERO),
              void 0 !== e.revisionHeight && null !== e.revisionHeight
                ? (o.revisionHeight = e.revisionHeight)
                : (o.revisionHeight = i.default.UZERO),
              o
            );
          },
        };
        const m = { clientId: "" };
        t.QueryConnectionConsensusStateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.consensusState &&
                l.Any.encode(e.consensusState, t.uint32(10).fork()).ldelim(),
              "" !== e.clientId && t.uint32(18).string(e.clientId),
              0 !== e.proof.length && t.uint32(26).bytes(e.proof),
              void 0 !== e.proofHeight &&
                s.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, m);
            i.proof = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.consensusState = l.Any.decode(o, o.uint32());
                  break;
                case 2:
                  i.clientId = o.string();
                  break;
                case 3:
                  i.proof = o.bytes();
                  break;
                case 4:
                  i.proofHeight = s.Height.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.proof = new Uint8Array()),
              void 0 !== e.consensusState && null !== e.consensusState
                ? (t.consensusState = l.Any.fromJSON(e.consensusState))
                : (t.consensusState = void 0),
              void 0 !== e.clientId && null !== e.clientId
                ? (t.clientId = String(e.clientId))
                : (t.clientId = ""),
              void 0 !== e.proof && null !== e.proof && (t.proof = O(e.proof)),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = s.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.consensusState &&
                (t.consensusState = e.consensusState
                  ? l.Any.toJSON(e.consensusState)
                  : void 0),
              void 0 !== e.clientId && (t.clientId = e.clientId),
              void 0 !== e.proof &&
                (t.proof = H(void 0 !== e.proof ? e.proof : new Uint8Array())),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? s.Height.toJSON(e.proofHeight)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const n = Object.assign({}, m);
            return (
              void 0 !== e.consensusState && null !== e.consensusState
                ? (n.consensusState = l.Any.fromPartial(e.consensusState))
                : (n.consensusState = void 0),
              (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              (n.proof =
                null !== (o = e.proof) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (n.proofHeight = s.Height.fromPartial(e.proofHeight))
                : (n.proofHeight = void 0),
              n
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
            const o = t.QueryConnectionRequest.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "Connection",
                o,
              );
            return n.then((e) =>
              t.QueryConnectionResponse.decode(new r.default.Reader(e)),
            );
          }
          Connections(e) {
            const o = t.QueryConnectionsRequest.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "Connections",
                o,
              );
            return n.then((e) =>
              t.QueryConnectionsResponse.decode(new r.default.Reader(e)),
            );
          }
          ClientConnections(e) {
            const o = t.QueryClientConnectionsRequest.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "ClientConnections",
                o,
              );
            return n.then((e) =>
              t.QueryClientConnectionsResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionClientState(e) {
            const o = t.QueryConnectionClientStateRequest.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "ConnectionClientState",
                o,
              );
            return n.then((e) =>
              t.QueryConnectionClientStateResponse.decode(
                new r.default.Reader(e),
              ),
            );
          }
          ConnectionConsensusState(e) {
            const o = t.QueryConnectionConsensusStateRequest.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Query",
                "ConnectionConsensusState",
                o,
              );
            return n.then((e) =>
              t.QueryConnectionConsensusStateResponse.decode(
                new r.default.Reader(e),
              ),
            );
          }
        }
        t.QueryClientImpl = QueryClientImpl;
        var k = (() => {
          if ("undefined" !== typeof k) return k;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const S =
          k.atob || ((e) => k.Buffer.from(e, "base64").toString("binary"));
        function O(e) {
          const t = S(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const I =
          k.btoa || ((e) => k.Buffer.from(e, "binary").toString("base64"));
        function H(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return I(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    4440: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
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
        const i = n(o(2754)),
          r = n(o(2755)),
          a = o(3325),
          s = o(2927),
          d = o(3570),
          l = o(3572),
          c = o(3573),
          u = o(3064),
          f = o(3571);
        t.protobufPackage = "ibc.lightclients.tendermint.v1";
        const p = {
          chainId: "",
          upgradePath: "",
          allowUpdateAfterExpiry: !1,
          allowUpdateAfterMisbehaviour: !1,
        };
        t.ClientState = {
          encode(e, o) {
            (void 0 === o && (o = r.default.Writer.create()),
              "" !== e.chainId && o.uint32(10).string(e.chainId),
              void 0 !== e.trustLevel &&
                t.Fraction.encode(e.trustLevel, o.uint32(18).fork()).ldelim(),
              void 0 !== e.trustingPeriod &&
                a.Duration.encode(
                  e.trustingPeriod,
                  o.uint32(26).fork(),
                ).ldelim(),
              void 0 !== e.unbondingPeriod &&
                a.Duration.encode(
                  e.unbondingPeriod,
                  o.uint32(34).fork(),
                ).ldelim(),
              void 0 !== e.maxClockDrift &&
                a.Duration.encode(
                  e.maxClockDrift,
                  o.uint32(42).fork(),
                ).ldelim(),
              void 0 !== e.frozenHeight &&
                s.Height.encode(e.frozenHeight, o.uint32(50).fork()).ldelim(),
              void 0 !== e.latestHeight &&
                s.Height.encode(e.latestHeight, o.uint32(58).fork()).ldelim());
            for (const t of e.proofSpecs)
              f.ProofSpec.encode(t, o.uint32(66).fork()).ldelim();
            for (const t of e.upgradePath) o.uint32(74).string(t);
            return (
              !0 === e.allowUpdateAfterExpiry &&
                o.uint32(80).bool(e.allowUpdateAfterExpiry),
              !0 === e.allowUpdateAfterMisbehaviour &&
                o.uint32(88).bool(e.allowUpdateAfterMisbehaviour),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === o ? n.len : n.pos + o;
            const d = Object.assign({}, p);
            ((d.proofSpecs = []), (d.upgradePath = []));
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  d.chainId = n.string();
                  break;
                case 2:
                  d.trustLevel = t.Fraction.decode(n, n.uint32());
                  break;
                case 3:
                  d.trustingPeriod = a.Duration.decode(n, n.uint32());
                  break;
                case 4:
                  d.unbondingPeriod = a.Duration.decode(n, n.uint32());
                  break;
                case 5:
                  d.maxClockDrift = a.Duration.decode(n, n.uint32());
                  break;
                case 6:
                  d.frozenHeight = s.Height.decode(n, n.uint32());
                  break;
                case 7:
                  d.latestHeight = s.Height.decode(n, n.uint32());
                  break;
                case 8:
                  d.proofSpecs.push(f.ProofSpec.decode(n, n.uint32()));
                  break;
                case 9:
                  d.upgradePath.push(n.string());
                  break;
                case 10:
                  d.allowUpdateAfterExpiry = n.bool();
                  break;
                case 11:
                  d.allowUpdateAfterMisbehaviour = n.bool();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return d;
          },
          fromJSON(e) {
            const o = Object.assign({}, p);
            if (
              ((o.proofSpecs = []),
              (o.upgradePath = []),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = String(e.chainId))
                : (o.chainId = ""),
              void 0 !== e.trustLevel && null !== e.trustLevel
                ? (o.trustLevel = t.Fraction.fromJSON(e.trustLevel))
                : (o.trustLevel = void 0),
              void 0 !== e.trustingPeriod && null !== e.trustingPeriod
                ? (o.trustingPeriod = a.Duration.fromJSON(e.trustingPeriod))
                : (o.trustingPeriod = void 0),
              void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod
                ? (o.unbondingPeriod = a.Duration.fromJSON(e.unbondingPeriod))
                : (o.unbondingPeriod = void 0),
              void 0 !== e.maxClockDrift && null !== e.maxClockDrift
                ? (o.maxClockDrift = a.Duration.fromJSON(e.maxClockDrift))
                : (o.maxClockDrift = void 0),
              void 0 !== e.frozenHeight && null !== e.frozenHeight
                ? (o.frozenHeight = s.Height.fromJSON(e.frozenHeight))
                : (o.frozenHeight = void 0),
              void 0 !== e.latestHeight && null !== e.latestHeight
                ? (o.latestHeight = s.Height.fromJSON(e.latestHeight))
                : (o.latestHeight = void 0),
              void 0 !== e.proofSpecs && null !== e.proofSpecs)
            )
              for (const t of e.proofSpecs)
                o.proofSpecs.push(f.ProofSpec.fromJSON(t));
            if (void 0 !== e.upgradePath && null !== e.upgradePath)
              for (const t of e.upgradePath) o.upgradePath.push(String(t));
            return (
              void 0 !== e.allowUpdateAfterExpiry &&
              null !== e.allowUpdateAfterExpiry
                ? (o.allowUpdateAfterExpiry = Boolean(e.allowUpdateAfterExpiry))
                : (o.allowUpdateAfterExpiry = !1),
              void 0 !== e.allowUpdateAfterMisbehaviour &&
              null !== e.allowUpdateAfterMisbehaviour
                ? (o.allowUpdateAfterMisbehaviour = Boolean(
                    e.allowUpdateAfterMisbehaviour,
                  ))
                : (o.allowUpdateAfterMisbehaviour = !1),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.chainId && (o.chainId = e.chainId),
              void 0 !== e.trustLevel &&
                (o.trustLevel = e.trustLevel
                  ? t.Fraction.toJSON(e.trustLevel)
                  : void 0),
              void 0 !== e.trustingPeriod &&
                (o.trustingPeriod = e.trustingPeriod
                  ? a.Duration.toJSON(e.trustingPeriod)
                  : void 0),
              void 0 !== e.unbondingPeriod &&
                (o.unbondingPeriod = e.unbondingPeriod
                  ? a.Duration.toJSON(e.unbondingPeriod)
                  : void 0),
              void 0 !== e.maxClockDrift &&
                (o.maxClockDrift = e.maxClockDrift
                  ? a.Duration.toJSON(e.maxClockDrift)
                  : void 0),
              void 0 !== e.frozenHeight &&
                (o.frozenHeight = e.frozenHeight
                  ? s.Height.toJSON(e.frozenHeight)
                  : void 0),
              void 0 !== e.latestHeight &&
                (o.latestHeight = e.latestHeight
                  ? s.Height.toJSON(e.latestHeight)
                  : void 0),
              e.proofSpecs
                ? (o.proofSpecs = e.proofSpecs.map((e) =>
                    e ? f.ProofSpec.toJSON(e) : void 0,
                  ))
                : (o.proofSpecs = []),
              e.upgradePath
                ? (o.upgradePath = e.upgradePath.map((e) => e))
                : (o.upgradePath = []),
              void 0 !== e.allowUpdateAfterExpiry &&
                (o.allowUpdateAfterExpiry = e.allowUpdateAfterExpiry),
              void 0 !== e.allowUpdateAfterMisbehaviour &&
                (o.allowUpdateAfterMisbehaviour =
                  e.allowUpdateAfterMisbehaviour),
              o
            );
          },
          fromPartial(e) {
            var o, n, i;
            const r = Object.assign({}, p);
            if (
              ((r.chainId = null !== (o = e.chainId) && void 0 !== o ? o : ""),
              void 0 !== e.trustLevel && null !== e.trustLevel
                ? (r.trustLevel = t.Fraction.fromPartial(e.trustLevel))
                : (r.trustLevel = void 0),
              void 0 !== e.trustingPeriod && null !== e.trustingPeriod
                ? (r.trustingPeriod = a.Duration.fromPartial(e.trustingPeriod))
                : (r.trustingPeriod = void 0),
              void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod
                ? (r.unbondingPeriod = a.Duration.fromPartial(
                    e.unbondingPeriod,
                  ))
                : (r.unbondingPeriod = void 0),
              void 0 !== e.maxClockDrift && null !== e.maxClockDrift
                ? (r.maxClockDrift = a.Duration.fromPartial(e.maxClockDrift))
                : (r.maxClockDrift = void 0),
              void 0 !== e.frozenHeight && null !== e.frozenHeight
                ? (r.frozenHeight = s.Height.fromPartial(e.frozenHeight))
                : (r.frozenHeight = void 0),
              void 0 !== e.latestHeight && null !== e.latestHeight
                ? (r.latestHeight = s.Height.fromPartial(e.latestHeight))
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
                null !== (n = e.allowUpdateAfterExpiry) && void 0 !== n && n),
              (r.allowUpdateAfterMisbehaviour =
                null !== (i = e.allowUpdateAfterMisbehaviour) &&
                void 0 !== i &&
                i),
              r
            );
          },
        };
        const v = {};
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, v);
            i.nextValidatorsHash = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.timestamp = H(u.Timestamp.decode(o, o.uint32()));
                  break;
                case 2:
                  i.root = d.MerkleRoot.decode(o, o.uint32());
                  break;
                case 3:
                  i.nextValidatorsHash = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
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
                (t.nextValidatorsHash = k(e.nextValidatorsHash)),
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
                (t.nextValidatorsHash = O(
                  void 0 !== e.nextValidatorsHash
                    ? e.nextValidatorsHash
                    : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const n = Object.assign({}, v);
            return (
              (n.timestamp =
                null !== (t = e.timestamp) && void 0 !== t ? t : void 0),
              void 0 !== e.root && null !== e.root
                ? (n.root = d.MerkleRoot.fromPartial(e.root))
                : (n.root = void 0),
              (n.nextValidatorsHash =
                null !== (o = e.nextValidatorsHash) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              n
            );
          },
        };
        const h = { clientId: "" };
        t.Misbehaviour = {
          encode(e, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              "" !== e.clientId && o.uint32(10).string(e.clientId),
              void 0 !== e.header1 &&
                t.Header.encode(e.header1, o.uint32(18).fork()).ldelim(),
              void 0 !== e.header2 &&
                t.Header.encode(e.header2, o.uint32(26).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, h);
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.clientId = n.string();
                  break;
                case 2:
                  a.header1 = t.Header.decode(n, n.uint32());
                  break;
                case 3:
                  a.header2 = t.Header.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, h);
            return (
              void 0 !== e.clientId && null !== e.clientId
                ? (o.clientId = String(e.clientId))
                : (o.clientId = ""),
              void 0 !== e.header1 && null !== e.header1
                ? (o.header1 = t.Header.fromJSON(e.header1))
                : (o.header1 = void 0),
              void 0 !== e.header2 && null !== e.header2
                ? (o.header2 = t.Header.fromJSON(e.header2))
                : (o.header2 = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.clientId && (o.clientId = e.clientId),
              void 0 !== e.header1 &&
                (o.header1 = e.header1 ? t.Header.toJSON(e.header1) : void 0),
              void 0 !== e.header2 &&
                (o.header2 = e.header2 ? t.Header.toJSON(e.header2) : void 0),
              o
            );
          },
          fromPartial(e) {
            var o;
            const n = Object.assign({}, h);
            return (
              (n.clientId = null !== (o = e.clientId) && void 0 !== o ? o : ""),
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
        const g = {};
        t.Header = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
              void 0 !== e.signedHeader &&
                l.SignedHeader.encode(
                  e.signedHeader,
                  t.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.validatorSet &&
                c.ValidatorSet.encode(
                  e.validatorSet,
                  t.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.trustedHeight &&
                s.Height.encode(e.trustedHeight, t.uint32(26).fork()).ldelim(),
              void 0 !== e.trustedValidators &&
                c.ValidatorSet.encode(
                  e.trustedValidators,
                  t.uint32(34).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, g);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.signedHeader = l.SignedHeader.decode(o, o.uint32());
                  break;
                case 2:
                  i.validatorSet = c.ValidatorSet.decode(o, o.uint32());
                  break;
                case 3:
                  i.trustedHeight = s.Height.decode(o, o.uint32());
                  break;
                case 4:
                  i.trustedValidators = c.ValidatorSet.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (t.signedHeader = l.SignedHeader.fromJSON(e.signedHeader))
                : (t.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (t.validatorSet = c.ValidatorSet.fromJSON(e.validatorSet))
                : (t.validatorSet = void 0),
              void 0 !== e.trustedHeight && null !== e.trustedHeight
                ? (t.trustedHeight = s.Height.fromJSON(e.trustedHeight))
                : (t.trustedHeight = void 0),
              void 0 !== e.trustedValidators && null !== e.trustedValidators
                ? (t.trustedValidators = c.ValidatorSet.fromJSON(
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
                  ? l.SignedHeader.toJSON(e.signedHeader)
                  : void 0),
              void 0 !== e.validatorSet &&
                (t.validatorSet = e.validatorSet
                  ? c.ValidatorSet.toJSON(e.validatorSet)
                  : void 0),
              void 0 !== e.trustedHeight &&
                (t.trustedHeight = e.trustedHeight
                  ? s.Height.toJSON(e.trustedHeight)
                  : void 0),
              void 0 !== e.trustedValidators &&
                (t.trustedValidators = e.trustedValidators
                  ? c.ValidatorSet.toJSON(e.trustedValidators)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (t.signedHeader = l.SignedHeader.fromPartial(e.signedHeader))
                : (t.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (t.validatorSet = c.ValidatorSet.fromPartial(e.validatorSet))
                : (t.validatorSet = void 0),
              void 0 !== e.trustedHeight && null !== e.trustedHeight
                ? (t.trustedHeight = s.Height.fromPartial(e.trustedHeight))
                : (t.trustedHeight = void 0),
              void 0 !== e.trustedValidators && null !== e.trustedValidators
                ? (t.trustedValidators = c.ValidatorSet.fromPartial(
                    e.trustedValidators,
                  ))
                : (t.trustedValidators = void 0),
              t
            );
          },
        };
        const b = { numerator: i.default.UZERO, denominator: i.default.UZERO };
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, b);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.numerator = o.uint64();
                  break;
                case 2:
                  i.denominator = o.uint64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
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
            const t = Object.assign({}, b);
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
        var y = (() => {
          if ("undefined" !== typeof y) return y;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const m =
          y.atob || ((e) => y.Buffer.from(e, "base64").toString("binary"));
        function k(e) {
          const t = m(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const S =
          y.btoa || ((e) => y.Buffer.from(e, "binary").toString("base64"));
        function O(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return S(t.join(""));
        }
        function I(e) {
          const t = w(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function H(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function P(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : H(u.Timestamp.fromJSON(e));
        }
        function w(e) {
          return i.default.fromNumber(e);
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    4441: function (e, t, o) {
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
        const i = n(o(2754)),
          r = n(o(2755));
        t.protobufPackage = "tendermint.crypto";
        const a = { total: i.default.ZERO, index: i.default.ZERO };
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
            const i = Object.assign({}, a);
            ((i.aunts = []), (i.leafHash = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.total = o.int64();
                  break;
                case 2:
                  i.index = o.int64();
                  break;
                case 3:
                  i.leafHash = o.bytes();
                  break;
                case 4:
                  i.aunts.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            if (
              ((t.aunts = []),
              (t.leafHash = new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (t.total = i.default.fromString(e.total))
                : (t.total = i.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (t.index = i.default.fromString(e.index))
                : (t.index = i.default.ZERO),
              void 0 !== e.leafHash &&
                null !== e.leafHash &&
                (t.leafHash = p(e.leafHash)),
              void 0 !== e.aunts && null !== e.aunts)
            )
              for (const o of e.aunts) t.aunts.push(p(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.total &&
                (t.total = (e.total || i.default.ZERO).toString()),
              void 0 !== e.index &&
                (t.index = (e.index || i.default.ZERO).toString()),
              void 0 !== e.leafHash &&
                (t.leafHash = h(
                  void 0 !== e.leafHash ? e.leafHash : new Uint8Array(),
                )),
              e.aunts
                ? (t.aunts = e.aunts.map((e) =>
                    h(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.aunts = []),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, a);
            if (
              (void 0 !== e.total && null !== e.total
                ? (o.total = e.total)
                : (o.total = i.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (o.index = e.index)
                : (o.index = i.default.ZERO),
              (o.leafHash =
                null !== (t = e.leafHash) && void 0 !== t
                  ? t
                  : new Uint8Array()),
              (o.aunts = []),
              void 0 !== e.aunts && null !== e.aunts)
            )
              for (const n of e.aunts) o.aunts.push(n);
            return o;
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, s);
            a.key = new Uint8Array();
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.key = n.bytes();
                  break;
                case 2:
                  a.proof = t.Proof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, s);
            return (
              (o.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = p(e.key)),
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
                (o.key = h(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.proof &&
                (o.proof = e.proof ? t.Proof.toJSON(e.proof) : void 0),
              o
            );
          },
          fromPartial(e) {
            var o;
            const n = Object.assign({}, s);
            return (
              (n.key =
                null !== (o = e.key) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (n.proof = t.Proof.fromPartial(e.proof))
                : (n.proof = void 0),
              n
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
            const i = Object.assign({}, d);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = o.string();
                  break;
                case 2:
                  i.input = o.string();
                  break;
                case 3:
                  i.output = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
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
            var t, o, n;
            const i = Object.assign({}, d);
            return (
              (i.key = null !== (t = e.key) && void 0 !== t ? t : ""),
              (i.input = null !== (o = e.input) && void 0 !== o ? o : ""),
              (i.output = null !== (n = e.output) && void 0 !== n ? n : ""),
              i
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
            const i = Object.assign({}, l);
            ((i.key = new Uint8Array()), (i.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.type = o.string();
                  break;
                case 2:
                  i.key = o.bytes();
                  break;
                case 3:
                  i.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.key = new Uint8Array()),
              (t.data = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (t.type = String(e.type))
                : (t.type = ""),
              void 0 !== e.key && null !== e.key && (t.key = p(e.key)),
              void 0 !== e.data && null !== e.data && (t.data = p(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.type && (t.type = e.type),
              void 0 !== e.key &&
                (t.key = h(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.data &&
                (t.data = h(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t, o, n;
            const i = Object.assign({}, l);
            return (
              (i.type = null !== (t = e.type) && void 0 !== t ? t : ""),
              (i.key =
                null !== (o = e.key) && void 0 !== o ? o : new Uint8Array()),
              (i.data =
                null !== (n = e.data) && void 0 !== n ? n : new Uint8Array()),
              i
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
            let i = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, c);
            a.ops = [];
            while (n.pos < i) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.ops.push(t.ProofOp.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
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
        function p(e) {
          const t = f(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const v =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function h(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return v(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    4442: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Consensus = t.App = t.protobufPackage = void 0));
      const i = n(o(2754)),
        r = n(o(2755));
      t.protobufPackage = "tendermint.version";
      const a = { protocol: i.default.UZERO, software: "" };
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
          const i = Object.assign({}, a);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.protocol = o.uint64();
                break;
              case 2:
                i.software = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.protocol && null !== e.protocol
              ? (t.protocol = i.default.fromString(e.protocol))
              : (t.protocol = i.default.UZERO),
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
              (t.protocol = (e.protocol || i.default.UZERO).toString()),
            void 0 !== e.software && (t.software = e.software),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, a);
          return (
            void 0 !== e.protocol && null !== e.protocol
              ? (o.protocol = e.protocol)
              : (o.protocol = i.default.UZERO),
            (o.software = null !== (t = e.software) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const s = { block: i.default.UZERO, app: i.default.UZERO };
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
          const i = Object.assign({}, s);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                i.block = o.uint64();
                break;
              case 2:
                i.app = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.block && null !== e.block
              ? (t.block = i.default.fromString(e.block))
              : (t.block = i.default.UZERO),
            void 0 !== e.app && null !== e.app
              ? (t.app = i.default.fromString(e.app))
              : (t.app = i.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.block &&
              (t.block = (e.block || i.default.UZERO).toString()),
            void 0 !== e.app && (t.app = (e.app || i.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.block && null !== e.block
              ? (t.block = e.block)
              : (t.block = i.default.UZERO),
            void 0 !== e.app && null !== e.app
              ? (t.app = e.app)
              : (t.app = i.default.UZERO),
            t
          );
        },
      }),
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure()));
    },
    4443: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PublicKey = t.protobufPackage = void 0));
        const i = n(o(2754)),
          r = n(o(2755));
        t.protobufPackage = "tendermint.crypto";
        const a = {};
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
            const i = Object.assign({}, a);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.ed25519 = o.bytes();
                  break;
                case 2:
                  i.secp256k1 = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
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
            var t, o;
            const n = Object.assign({}, a);
            return (
              (n.ed25519 =
                null !== (t = e.ed25519) && void 0 !== t ? t : void 0),
              (n.secp256k1 =
                null !== (o = e.secp256k1) && void 0 !== o ? o : void 0),
              n
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
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
    4473: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
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
        const i = n(o(2754)),
          r = n(o(2755)),
          a = o(3569),
          s = o(2781),
          d = o(2927);
        t.protobufPackage = "ibc.core.connection.v1";
        const l = { clientId: "", delayPeriod: i.default.UZERO, signer: "" };
        t.MsgConnectionOpenInit = {
          encode(e, t) {
            return (
              void 0 === t && (t = r.default.Writer.create()),
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, l);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = o.string();
                  break;
                case 2:
                  i.counterparty = a.Counterparty.decode(o, o.uint32());
                  break;
                case 3:
                  i.version = a.Version.decode(o, o.uint32());
                  break;
                case 4:
                  i.delayPeriod = o.uint64();
                  break;
                case 5:
                  i.signer = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
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
                  ? a.Counterparty.toJSON(e.counterparty)
                  : void 0),
              void 0 !== e.version &&
                (t.version = e.version ? a.Version.toJSON(e.version) : void 0),
              void 0 !== e.delayPeriod &&
                (t.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
              void 0 !== e.signer && (t.signer = e.signer),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const n = Object.assign({}, l);
            return (
              (n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : ""),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (n.counterparty = a.Counterparty.fromPartial(e.counterparty))
                : (n.counterparty = void 0),
              void 0 !== e.version && null !== e.version
                ? (n.version = a.Version.fromPartial(e.version))
                : (n.version = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (n.delayPeriod = e.delayPeriod)
                : (n.delayPeriod = i.default.UZERO),
              (n.signer = null !== (o = e.signer) && void 0 !== o ? o : ""),
              n
            );
          },
        };
        const c = {};
        t.MsgConnectionOpenInitResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, c);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
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
                s.Any.encode(e.clientState, t.uint32(26).fork()).ldelim(),
              void 0 !== e.counterparty &&
                a.Counterparty.encode(
                  e.counterparty,
                  t.uint32(34).fork(),
                ).ldelim(),
              e.delayPeriod.isZero() || t.uint32(40).uint64(e.delayPeriod));
            for (const o of e.counterpartyVersions)
              a.Version.encode(o, t.uint32(50).fork()).ldelim();
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, u);
            ((i.counterpartyVersions = []),
              (i.proofInit = new Uint8Array()),
              (i.proofClient = new Uint8Array()),
              (i.proofConsensus = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.clientId = o.string();
                  break;
                case 2:
                  i.previousConnectionId = o.string();
                  break;
                case 3:
                  i.clientState = s.Any.decode(o, o.uint32());
                  break;
                case 4:
                  i.counterparty = a.Counterparty.decode(o, o.uint32());
                  break;
                case 5:
                  i.delayPeriod = o.uint64();
                  break;
                case 6:
                  i.counterpartyVersions.push(a.Version.decode(o, o.uint32()));
                  break;
                case 7:
                  i.proofHeight = d.Height.decode(o, o.uint32());
                  break;
                case 8:
                  i.proofInit = o.bytes();
                  break;
                case 9:
                  i.proofClient = o.bytes();
                  break;
                case 10:
                  i.proofConsensus = o.bytes();
                  break;
                case 11:
                  i.consensusHeight = d.Height.decode(o, o.uint32());
                  break;
                case 12:
                  i.signer = o.string();
                  break;
                default:
                  o.skipType(7 & e);
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
                ? (t.clientState = s.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (t.counterparty = a.Counterparty.fromJSON(e.counterparty))
                : (t.counterparty = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (t.delayPeriod = i.default.fromString(e.delayPeriod))
                : (t.delayPeriod = i.default.UZERO),
              void 0 !== e.counterpartyVersions &&
                null !== e.counterpartyVersions)
            )
              for (const o of e.counterpartyVersions)
                t.counterpartyVersions.push(a.Version.fromJSON(o));
            return (
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofInit &&
                null !== e.proofInit &&
                (t.proofInit = m(e.proofInit)),
              void 0 !== e.proofClient &&
                null !== e.proofClient &&
                (t.proofClient = m(e.proofClient)),
              void 0 !== e.proofConsensus &&
                null !== e.proofConsensus &&
                (t.proofConsensus = m(e.proofConsensus)),
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
                  ? s.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.counterparty &&
                (t.counterparty = e.counterparty
                  ? a.Counterparty.toJSON(e.counterparty)
                  : void 0),
              void 0 !== e.delayPeriod &&
                (t.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()),
              e.counterpartyVersions
                ? (t.counterpartyVersions = e.counterpartyVersions.map((e) =>
                    e ? a.Version.toJSON(e) : void 0,
                  ))
                : (t.counterpartyVersions = []),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.proofInit &&
                (t.proofInit = S(
                  void 0 !== e.proofInit ? e.proofInit : new Uint8Array(),
                )),
              void 0 !== e.proofClient &&
                (t.proofClient = S(
                  void 0 !== e.proofClient ? e.proofClient : new Uint8Array(),
                )),
              void 0 !== e.proofConsensus &&
                (t.proofConsensus = S(
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
            var t, o, n, r, l, c;
            const f = Object.assign({}, u);
            if (
              ((f.clientId =
                null !== (t = e.clientId) && void 0 !== t ? t : ""),
              (f.previousConnectionId =
                null !== (o = e.previousConnectionId) && void 0 !== o ? o : ""),
              void 0 !== e.clientState && null !== e.clientState
                ? (f.clientState = s.Any.fromPartial(e.clientState))
                : (f.clientState = void 0),
              void 0 !== e.counterparty && null !== e.counterparty
                ? (f.counterparty = a.Counterparty.fromPartial(e.counterparty))
                : (f.counterparty = void 0),
              void 0 !== e.delayPeriod && null !== e.delayPeriod
                ? (f.delayPeriod = e.delayPeriod)
                : (f.delayPeriod = i.default.UZERO),
              (f.counterpartyVersions = []),
              void 0 !== e.counterpartyVersions &&
                null !== e.counterpartyVersions)
            )
              for (const i of e.counterpartyVersions)
                f.counterpartyVersions.push(a.Version.fromPartial(i));
            return (
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (f.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (f.proofHeight = void 0),
              (f.proofInit =
                null !== (n = e.proofInit) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              (f.proofClient =
                null !== (r = e.proofClient) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              (f.proofConsensus =
                null !== (l = e.proofConsensus) && void 0 !== l
                  ? l
                  : new Uint8Array()),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (f.consensusHeight = d.Height.fromPartial(e.consensusHeight))
                : (f.consensusHeight = void 0),
              (f.signer = null !== (c = e.signer) && void 0 !== c ? c : ""),
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, f);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
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
                a.Version.encode(e.version, t.uint32(26).fork()).ldelim(),
              void 0 !== e.clientState &&
                s.Any.encode(e.clientState, t.uint32(34).fork()).ldelim(),
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, p);
            ((i.proofTry = new Uint8Array()),
              (i.proofClient = new Uint8Array()),
              (i.proofConsensus = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = o.string();
                  break;
                case 2:
                  i.counterpartyConnectionId = o.string();
                  break;
                case 3:
                  i.version = a.Version.decode(o, o.uint32());
                  break;
                case 4:
                  i.clientState = s.Any.decode(o, o.uint32());
                  break;
                case 5:
                  i.proofHeight = d.Height.decode(o, o.uint32());
                  break;
                case 6:
                  i.proofTry = o.bytes();
                  break;
                case 7:
                  i.proofClient = o.bytes();
                  break;
                case 8:
                  i.proofConsensus = o.bytes();
                  break;
                case 9:
                  i.consensusHeight = d.Height.decode(o, o.uint32());
                  break;
                case 10:
                  i.signer = o.string();
                  break;
                default:
                  o.skipType(7 & e);
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
                ? (t.version = a.Version.fromJSON(e.version))
                : (t.version = void 0),
              void 0 !== e.clientState && null !== e.clientState
                ? (t.clientState = s.Any.fromJSON(e.clientState))
                : (t.clientState = void 0),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (t.proofHeight = d.Height.fromJSON(e.proofHeight))
                : (t.proofHeight = void 0),
              void 0 !== e.proofTry &&
                null !== e.proofTry &&
                (t.proofTry = m(e.proofTry)),
              void 0 !== e.proofClient &&
                null !== e.proofClient &&
                (t.proofClient = m(e.proofClient)),
              void 0 !== e.proofConsensus &&
                null !== e.proofConsensus &&
                (t.proofConsensus = m(e.proofConsensus)),
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
                (t.version = e.version ? a.Version.toJSON(e.version) : void 0),
              void 0 !== e.clientState &&
                (t.clientState = e.clientState
                  ? s.Any.toJSON(e.clientState)
                  : void 0),
              void 0 !== e.proofHeight &&
                (t.proofHeight = e.proofHeight
                  ? d.Height.toJSON(e.proofHeight)
                  : void 0),
              void 0 !== e.proofTry &&
                (t.proofTry = S(
                  void 0 !== e.proofTry ? e.proofTry : new Uint8Array(),
                )),
              void 0 !== e.proofClient &&
                (t.proofClient = S(
                  void 0 !== e.proofClient ? e.proofClient : new Uint8Array(),
                )),
              void 0 !== e.proofConsensus &&
                (t.proofConsensus = S(
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
            var t, o, n, i, r, l;
            const c = Object.assign({}, p);
            return (
              (c.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              (c.counterpartyConnectionId =
                null !== (o = e.counterpartyConnectionId) && void 0 !== o
                  ? o
                  : ""),
              void 0 !== e.version && null !== e.version
                ? (c.version = a.Version.fromPartial(e.version))
                : (c.version = void 0),
              void 0 !== e.clientState && null !== e.clientState
                ? (c.clientState = s.Any.fromPartial(e.clientState))
                : (c.clientState = void 0),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (c.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (c.proofHeight = void 0),
              (c.proofTry =
                null !== (n = e.proofTry) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              (c.proofClient =
                null !== (i = e.proofClient) && void 0 !== i
                  ? i
                  : new Uint8Array()),
              (c.proofConsensus =
                null !== (r = e.proofConsensus) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              void 0 !== e.consensusHeight && null !== e.consensusHeight
                ? (c.consensusHeight = d.Height.fromPartial(e.consensusHeight))
                : (c.consensusHeight = void 0),
              (c.signer = null !== (l = e.signer) && void 0 !== l ? l : ""),
              c
            );
          },
        };
        const v = {};
        t.MsgConnectionOpenAckResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, v);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
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
        const h = { connectionId: "", signer: "" };
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
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, h);
            i.proofAck = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  i.connectionId = o.string();
                  break;
                case 2:
                  i.proofAck = o.bytes();
                  break;
                case 3:
                  i.proofHeight = d.Height.decode(o, o.uint32());
                  break;
                case 4:
                  i.signer = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              (t.proofAck = new Uint8Array()),
              void 0 !== e.connectionId && null !== e.connectionId
                ? (t.connectionId = String(e.connectionId))
                : (t.connectionId = ""),
              void 0 !== e.proofAck &&
                null !== e.proofAck &&
                (t.proofAck = m(e.proofAck)),
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
                (t.proofAck = S(
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
            var t, o, n;
            const i = Object.assign({}, h);
            return (
              (i.connectionId =
                null !== (t = e.connectionId) && void 0 !== t ? t : ""),
              (i.proofAck =
                null !== (o = e.proofAck) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              void 0 !== e.proofHeight && null !== e.proofHeight
                ? (i.proofHeight = d.Height.fromPartial(e.proofHeight))
                : (i.proofHeight = void 0),
              (i.signer = null !== (n = e.signer) && void 0 !== n ? n : ""),
              i
            );
          },
        };
        const g = {};
        t.MsgConnectionOpenConfirmResponse = {
          encode(e, t) {
            return (void 0 === t && (t = r.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof r.default.Reader ? e : new r.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const i = Object.assign({}, g);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
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
              (this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this)),
              (this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this)),
              (this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this)),
              (this.ConnectionOpenConfirm =
                this.ConnectionOpenConfirm.bind(this)));
          }
          ConnectionOpenInit(e) {
            const o = t.MsgConnectionOpenInit.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenInit",
                o,
              );
            return n.then((e) =>
              t.MsgConnectionOpenInitResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionOpenTry(e) {
            const o = t.MsgConnectionOpenTry.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenTry",
                o,
              );
            return n.then((e) =>
              t.MsgConnectionOpenTryResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionOpenAck(e) {
            const o = t.MsgConnectionOpenAck.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenAck",
                o,
              );
            return n.then((e) =>
              t.MsgConnectionOpenAckResponse.decode(new r.default.Reader(e)),
            );
          }
          ConnectionOpenConfirm(e) {
            const o = t.MsgConnectionOpenConfirm.encode(e).finish(),
              n = this.rpc.request(
                "ibc.core.connection.v1.Msg",
                "ConnectionOpenConfirm",
                o,
              );
            return n.then((e) =>
              t.MsgConnectionOpenConfirmResponse.decode(
                new r.default.Reader(e),
              ),
            );
          }
        }
        t.MsgClientImpl = MsgClientImpl;
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
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const k =
          b.btoa || ((e) => b.Buffer.from(e, "binary").toString("base64"));
        function S(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return k(t.join(""));
        }
        r.default.util.Long !== i.default &&
          ((r.default.util.Long = i.default), r.default.configure());
      }).call(this, o(13));
    },
  },
]);
